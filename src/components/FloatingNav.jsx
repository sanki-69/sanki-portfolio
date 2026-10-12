import { useEffect, useRef } from 'react'
import Logo from './Logo.jsx'
import { ArrowIcon } from './Hero.jsx'

// Compact menu that slides in once the hero's own menu bar has scrolled away,
// and highlights the section in the middle of the screen.
// Classes are toggled directly on scroll, so scrolling never re-renders React.
export default function FloatingNav({ t }) {
  const ref = useRef(null)

  useEffect(() => {
    const el = ref.current
    const ids = Object.keys(t.nav)
    let raf = 0
    const update = () => {
      raf = 0
      const bar = document.getElementById('hero-bar')
      const shown = !!bar && bar.getBoundingClientRect().bottom < 0
      el.classList.toggle('is-shown', shown)
      el.inert = !shown
      el.setAttribute('aria-hidden', String(!shown))

      const mid = window.innerHeight * 0.5
      let current = ''
      ids.forEach((id) => {
        const section = document.getElementById(id)
        if (section && section.getBoundingClientRect().top < mid) current = id
      })
      el.querySelectorAll('nav a').forEach((a) => a.classList.toggle('is-active', a.dataset.id === current))
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
  }, [t.nav])

  return (
    <div className="fnav" ref={ref} aria-hidden="true">
      <Logo />
      <nav aria-label="Sections">
        {Object.entries(t.nav).map(([id, label]) => (
          <a key={id} href={`#${id}`} data-id={id}>{label}</a>
        ))}
      </nav>
      <a className="btn btn--sm" href="#contact">
        <span>{t.contactBtn}</span>
        <i><ArrowIcon /></i>
      </a>
    </div>
  )
}
