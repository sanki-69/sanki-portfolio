import { useEffect, useRef } from 'react'
import Cube from './Cube.jsx'
import GlassX from './GlassX.jsx'
import Logo from './Logo.jsx'
import LangSelect from './LangSelect.jsx'
import Marquee from './Marquee.jsx'
import SplitWords from './SplitWords.jsx'
import { reduceMotion } from '../motion.js'

export function ArrowIcon() {
  return (
    <svg viewBox="0 0 16 16" aria-hidden="true">
      <path d="M4 12L12 4M5.5 4H12v6.5" />
    </svg>
  )
}

export default function Hero({ t, lang, onLang }) {
  const wrap = useRef(null)
  const frame = useRef(null)
  const raf = useRef(0)

  // Cubes tilt slightly toward the pointer.
  const onPointerMove = (e) => {
    if (e.pointerType !== 'mouse') return
    const r = frame.current.getBoundingClientRect()
    const mx = ((e.clientX - r.left) / r.width) * 2 - 1
    const my = ((e.clientY - r.top) / r.height) * 2 - 1
    cancelAnimationFrame(raf.current)
    raf.current = requestAnimationFrame(() => {
      frame.current.style.setProperty('--mx', mx.toFixed(3))
      frame.current.style.setProperty('--my', my.toFixed(3))
    })
  }

  // As the hero scrolls away, --sp goes 0 → 1: cubes drift apart and turn, the X spins.
  useEffect(() => {
    if (reduceMotion()) return
    let id = 0
    const update = () => {
      id = 0
      const r = wrap.current.getBoundingClientRect()
      const sp = Math.min(1, Math.max(0, -r.top / r.height))
      wrap.current.style.setProperty('--sp', sp.toFixed(4))
    }
    const onScroll = () => { if (!id) id = requestAnimationFrame(update) }
    update()
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => {
      window.removeEventListener('scroll', onScroll)
      cancelAnimationFrame(id)
    }
  }, [])

  return (
    <header className="hero-wrap" id="top" ref={wrap}>
      <GlassX className="x-float" />
      <div className="glass-cube gc-1"><Cube variant="glass" /></div>
      <div className="glass-cube gc-2"><Cube variant="glass" /></div>

      <div className="hero" ref={frame} onPointerMove={onPointerMove}>
        <h1 className="hero-title" key={lang}>
          <SplitWords lines={t.headline} play />
        </h1>

        <div className="hero-sub">
          <p>{t.sub}</p>
          <span className="pill"><i />{t.open}</span>
        </div>

        <div className="stage" aria-hidden="true">
          <div className="slot s-tl"><Cube variant="blue" /></div>
          <div className="slot s-tr"><Cube variant="pink" /></div>
          <div className="slot s-bl"><Cube variant="glow" /></div>
          <div className="slot s-br"><Cube variant="dusk" /></div>
        </div>

        <div className="bar" id="hero-bar">
          <div className="navpill">
            <Logo />
            <nav aria-label="Main">
              {Object.entries(t.nav).map(([id, label]) => (
                <a key={id} href={`#${id}`}>{label}</a>
              ))}
            </nav>
          </div>
          <div className="bar-right">
            <LangSelect lang={lang} onChange={onLang} label={t.langLabel} />
            <a className="btn" href="#contact">
              <span>{t.contactBtn}</span>
              <i><ArrowIcon /></i>
            </a>
          </div>
        </div>

        <Marquee />
      </div>
    </header>
  )
}
