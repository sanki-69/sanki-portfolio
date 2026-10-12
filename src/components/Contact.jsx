import { useRef, useState } from 'react'
import { EMAIL, PHONE, PHONE_LINK } from '../content.js'
import { ArrowIcon } from './Hero.jsx'
import Cube from './Cube.jsx'
import SplitWords from './SplitWords.jsx'

export default function Contact({ t }) {
  const [copied, setCopied] = useState(false)
  const emailRef = useRef(null)

  // If clipboard access is blocked, select the address so it can be copied by hand.
  const selectEmail = () => {
    const range = document.createRange()
    range.selectNodeContents(emailRef.current)
    const sel = window.getSelection()
    sel.removeAllRanges()
    sel.addRange(range)
  }

  const copy = () => {
    if (!navigator.clipboard?.writeText) return selectEmail()
    navigator.clipboard.writeText(EMAIL).then(() => {
      setCopied(true)
      setTimeout(() => setCopied(false), 1800)
    }, selectEmail)
  }

  return (
    <section className="section" id="contact">
      <div className="contact">
        <div className="contact-cube" aria-hidden="true"><Cube variant="pink" /></div>
        <span className="eyebrow" data-reveal>{t.contactL}</span>
        <h2 className="big" data-reveal="split">
          <SplitWords lines={[t.cta[0], { text: t.cta[1], className: 'grad' }]} />
        </h2>
        <div className="contact-list" data-reveal style={{ '--i': 2 }}>
          <div>
            <span className="muted small">{t.emailL}</span>
            <div className="val-row">
              <a className="val" href={`mailto:${EMAIL}`} ref={emailRef}>{EMAIL}</a>
              <button className="copy" type="button" onClick={copy}>{copied ? t.copied : t.copy}</button>
            </div>
          </div>
          <div>
            <span className="muted small">{t.phoneL}</span>
            <a className="val" href={PHONE_LINK}>{PHONE}</a>
          </div>
          <div>
            <span className="muted small">{t.locL}</span>
            <span className="val">{t.loc}</span>
          </div>
        </div>
        <a className="btn btn--lg" href={`mailto:${EMAIL}`} data-reveal style={{ '--i': 3 }}>
          <span>{t.contactBtn}</span>
          <i><ArrowIcon /></i>
        </a>
      </div>
    </section>
  )
}
