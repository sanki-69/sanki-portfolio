import { useEffect } from 'react'
import Lenis from 'lenis'
import 'lenis/dist/lenis.css'

const easeOutExpo = (t) => (t === 1 ? 1 : 1 - Math.pow(2, -10 * t))

// Smooth, eased scrolling for the whole page (mouse wheel, trackpad and anchor links).
// Lenis moves the real window scroll, so every scroll listener on the page keeps working.
// It turns itself off for visitors who prefer reduced motion.
export function useSmoothScroll() {
  useEffect(() => {
    const lenis = new Lenis({
      lerp: 0.08,             // lower = smoother, longer glide
      wheelMultiplier: 0.85,  // a little slower than native per wheel notch
      smoothWheel: true,
      autoRaf: true,
      anchors: { duration: 1.4, easing: easeOutExpo },
      stopInertiaOnNavigate: true,
    })
    return () => lenis.destroy()
  }, [])
}

export const reduceMotion = () =>
  typeof window !== 'undefined' && window.matchMedia?.('(prefers-reduced-motion: reduce)').matches

// Elements with data-reveal fade/rise in the first time they enter the viewport.
// index.html adds the js-reveal class before React renders, so nothing flashes.
export function useReveal(dep) {
  useEffect(() => {
    if (!document.documentElement.classList.contains('js-reveal')) return
    let pending = [...document.querySelectorAll('[data-reveal]:not(.is-in)')]
    const show = (el) => {
      el.classList.add('is-in')
      io.unobserve(el)
      pending = pending.filter((p) => p !== el)
    }
    const io = new IntersectionObserver(
      (entries) => entries.forEach((e) => { if (e.isIntersecting) show(e.target) }),
      { rootMargin: '0px 0px -8% 0px', threshold: 0.12 },
    )
    pending.forEach((el) => io.observe(el))

    // Backup for browsers or frames where the observer is slow to fire:
    // anything whose top has entered the viewport (or been scrolled past) is shown.
    const check = () => {
      const limit = window.innerHeight * 0.92
      pending.forEach((el) => { if (el.getBoundingClientRect().top < limit) show(el) })
    }
    window.addEventListener('scroll', check, { passive: true })
    window.addEventListener('resize', check)
    return () => {
      io.disconnect()
      window.removeEventListener('scroll', check)
      window.removeEventListener('resize', check)
    }
  }, [dep])
}

// A soft glow that follows the pointer across cards.
export function useSpotlight() {
  useEffect(() => {
    if (reduceMotion()) return
    const move = (e) => {
      const card = e.target.closest?.('.card, .contact')
      if (!card) return
      const r = card.getBoundingClientRect()
      card.style.setProperty('--px', `${e.clientX - r.left}px`)
      card.style.setProperty('--py', `${e.clientY - r.top}px`)
    }
    document.addEventListener('pointermove', move, { passive: true })
    return () => document.removeEventListener('pointermove', move)
  }, [])
}

// Page scroll progress (0 to 1) for the top progress line.
export function usePageProgress() {
  useEffect(() => {
    const root = document.documentElement
    let raf = 0
    const update = () => {
      raf = 0
      const max = root.scrollHeight - window.innerHeight
      root.style.setProperty('--pp', max > 0 ? (window.scrollY / max).toFixed(4) : '0')
    }
    const onScroll = () => { if (!raf) raf = requestAnimationFrame(update) }
    update()
    window.addEventListener('scroll', onScroll, { passive: true })
    window.addEventListener('resize', onScroll)
    return () => {
      window.removeEventListener('scroll', onScroll)
      window.removeEventListener('resize', onScroll)
      cancelAnimationFrame(raf)
    }
  }, [])
}
