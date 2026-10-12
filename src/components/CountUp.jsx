import { useEffect, useRef } from 'react'
import { reduceMotion } from '../motion.js'

// Counts a number up from zero the first time it scrolls into view.
// The text is written straight to the DOM, so the final value shows by default
// and the count never depends on React re-rendering mid-animation.
export default function CountUp({ value, duration = 1400 }) {
  const ref = useRef(null)

  useEffect(() => {
    const el = ref.current
    el.textContent = value
    const target = parseFloat(value)
    const decimals = (value.split('.')[1] || '').length
    if (Number.isNaN(target) || reduceMotion() || !('IntersectionObserver' in window)) return

    let raf = 0
    const run = () => {
      const t0 = performance.now()
      const tick = (now) => {
        const p = Math.min(1, (now - t0) / duration)
        const eased = 1 - Math.pow(1 - p, 3)
        el.textContent = p < 1 ? (target * eased).toFixed(decimals) : value
        if (p < 1) raf = requestAnimationFrame(tick)
      }
      raf = requestAnimationFrame(tick)
    }
    const io = new IntersectionObserver(([e]) => {
      if (!e.isIntersecting) return
      io.disconnect()
      run()
    }, { threshold: 0.6 })
    io.observe(el)
    return () => {
      io.disconnect()
      cancelAnimationFrame(raf)
      el.textContent = value
    }
  }, [value, duration])

  return <span ref={ref} />
}
