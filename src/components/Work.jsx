import Cube from './Cube.jsx'
import { ArrowIcon } from './Hero.jsx'
import aishop from '../assets/aishop.jpg'
import SplitWords from './SplitWords.jsx'

const VISUALS = ['blue', 'pink', 'glow']
const IMAGES = { aishop }

function Visual({ p, i }) {
  const img = p.image && IMAGES[p.image]
  if (img) {
    return (
      <div className="project-visual project-visual--shot">
        <span className="project-yr">{p.yr}</span>
        <div className="browser">
          <div className="browser-bar" aria-hidden="true">
            <i /><i /><i />
            <span>{p.url.replace(/^https?:\/\//, '')}</span>
          </div>
          <img src={img} alt={`Screenshot of ${p.title}`} width="1200" height="750" loading="lazy" />
        </div>
      </div>
    )
  }
  return (
    <div className="project-visual" aria-hidden="true">
      <span className="project-yr">{p.yr}</span>
      <div className="mini-cube"><Cube variant={VISUALS[i % VISUALS.length]} /></div>
    </div>
  )
}

export default function Work({ t }) {
  return (
    <section className="section" id="work">
      <span className="eyebrow" data-reveal>{t.workL}</span>
      <h2 className="h2 narrow" data-reveal="split"><SplitWords lines={[t.workHead]} /></h2>
      <div className="work-grid">
        {t.projects.map((p, i) => (
          <article className={`card project ${i === 0 ? 'project--wide' : ''}`} id={p.id} key={p.id}
            data-reveal style={{ '--i': i + 1 }}>
            {p.url
              ? <a className="visual-link" href={p.url} target="_blank" rel="noopener noreferrer" tabIndex={-1} aria-hidden="true"><Visual p={p} i={i} /></a>
              : <Visual p={p} i={i} />}
            <div className="project-body">
              <span className="muted small">{p.role}</span>
              <h3>{p.title}</h3>
              {p.desc && <p>{p.desc}</p>}
              {p.points && (
                <ul className="points">{p.points.map((pt) => <li key={pt}>{pt}</li>)}</ul>
              )}
              <ul className="chips">{p.stack.map((s) => <li key={s}>{s}</li>)}</ul>
              {p.url && (
                <a className="btn project-link" href={p.url} target="_blank" rel="noopener noreferrer">
                  <span>{t.live}</span>
                  <i><ArrowIcon /></i>
                </a>
              )}
            </div>
          </article>
        ))}
      </div>
    </section>
  )
}
