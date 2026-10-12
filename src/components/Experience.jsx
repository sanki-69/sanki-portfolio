import SplitWords from './SplitWords.jsx'

export default function Experience({ t }) {
  return (
    <section className="section" id="experience">
      <span className="eyebrow" data-reveal>{t.expL}</span>
      <h2 className="h2 narrow" data-reveal="split"><SplitWords lines={[t.expHead]} /></h2>
      <ol className="timeline">
        {t.timeline.map((e, i) => (
          <li className="card tl-item" key={e.org} data-reveal style={{ '--i': i }}>
            <span className="tl-when">{e.when}</span>
            <div className="tl-main">
              <h3>{e.org}</h3>
              <span className="muted">{e.role}</span>
            </div>
            {e.points.length > 0 && (
              <ul className="points tl-points">{e.points.map((pt) => <li key={pt}>{pt}</li>)}</ul>
            )}
          </li>
        ))}
      </ol>
    </section>
  )
}
