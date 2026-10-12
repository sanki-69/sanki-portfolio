import { useEffect, useRef, useState } from 'react'

const LANGS = ['en', 'mn']

export default function LangSelect({ lang, onChange, label }) {
  const [open, setOpen] = useState(false)
  const ref = useRef(null)

  useEffect(() => {
    if (!open) return
    const close = (e) => {
      if (e.type === 'keydown' ? e.key === 'Escape' : !ref.current.contains(e.target)) setOpen(false)
    }
    document.addEventListener('pointerdown', close)
    document.addEventListener('keydown', close)
    return () => {
      document.removeEventListener('pointerdown', close)
      document.removeEventListener('keydown', close)
    }
  }, [open])

  return (
    <div className={`lang ${open ? 'is-open' : ''}`} ref={ref}>
      <button type="button" aria-haspopup="listbox" aria-expanded={open} aria-label={label}
        onClick={() => setOpen((o) => !o)}>
        {lang.toUpperCase()}
        <svg viewBox="0 0 10 6" aria-hidden="true"><path d="M1 5l4-4 4 4" /></svg>
      </button>
      {open && (
        <ul role="listbox" aria-label={label}>
          {LANGS.filter((l) => l !== lang).map((l) => (
            <li key={l}>
              <button type="button" role="option" aria-selected="false"
                onClick={() => { onChange(l); setOpen(false) }}>
                {l.toUpperCase()}
              </button>
            </li>
          ))}
        </ul>
      )}
    </div>
  )
}
