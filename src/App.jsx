import { useEffect, useState } from 'react'
import { content } from './content.js'
import { useReveal, useSpotlight, usePageProgress, useSmoothScroll } from './motion.js'
import Hero from './components/Hero.jsx'
import FloatingNav from './components/FloatingNav.jsx'
import About from './components/About.jsx'
import Work from './components/Work.jsx'
import Experience from './components/Experience.jsx'
import Skills from './components/Skills.jsx'
import Contact from './components/Contact.jsx'

function initialLang() {
  try {
    return localStorage.getItem('lang') === 'en' ? 'en' : 'mn'
  } catch {
    return 'mn'
  }
}

export default function App() {
  const [lang, setLang] = useState(initialLang)
  const t = content[lang]

  useEffect(() => {
    document.documentElement.lang = lang
    try {
      localStorage.setItem('lang', lang)
    } catch {
      // storage unavailable; language just won't be remembered
    }
  }, [lang])

  useSmoothScroll()
  useReveal(lang)
  useSpotlight()
  usePageProgress()

  return (
    <>
      <div className="page-glow" aria-hidden="true" />
      <div className="progress" aria-hidden="true" />
      <FloatingNav t={t} />
      <Hero t={t} lang={lang} onLang={setLang} />
      <main>
        <About t={t} />
        <Work t={t} />
        <Experience t={t} />
        <Skills t={t} />
        <Contact t={t} />
      </main>
      <footer data-reveal>
        <span>© 2026 {t.fullName}</span>
        <span>{t.made}</span>
        <a href="#top">{t.top} ↑</a>
      </footer>
    </>
  )
}
