import photo from '../assets/photo.png'
import SplitWords from './SplitWords.jsx'
import CountUp from './CountUp.jsx'

export default function About({ t }) {
  return (
    <section className="section" id="about">
      <span className="eyebrow" data-reveal>{t.aboutL}</span>
      <div className="about-grid">
        <aside className="card profile" data-reveal>
          <img src={photo} alt="Tuvshinsanaa (Sanki) in a graduation cap" width="200" height="200" />
          <div>
            <strong>{t.fullName}</strong>
            <span className="nick">{t.nick}</span>
            <span className="role">{t.title}</span>
            <span className="muted">{t.loc}</span>
          </div>
          <ul className="chips">
            {t.facts.map((f) => <li key={f}>{f}</li>)}
          </ul>
        </aside>

        <div className="about-main">
          <h2 className="h2" data-reveal="split"><SplitWords lines={[t.aboutHead]} /></h2>
          <div className="prose" data-reveal style={{ '--i': 2 }}>
            {t.about.map((p, i) => <p key={i}>{p}</p>)}
          </div>
          <dl className="stats" data-reveal style={{ '--i': 3 }}>
            {t.stats.map(([n, label]) => (
              <div key={label}>
                <dt className="grad"><CountUp value={n} /></dt>
                <dd>{label}</dd>
              </div>
            ))}
          </dl>
        </div>
      </div>

      <div className="cols">
        {t.cols.map((c, i) => (
          <div key={c.label} data-reveal style={{ '--i': i }}>
            <h3 className="col-label">{c.label}</h3>
            <ul>
              {c.items.map((item) => <li key={item}>{item}</li>)}
              {c.note && <li className="muted">{c.note}</li>}
            </ul>
          </div>
        ))}
      </div>
    </section>
  )
}
