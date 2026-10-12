import SplitWords from './SplitWords.jsx'

export default function Skills({ t }) {
  return (
    <section className="section" id="skills">
      <span className="eyebrow" data-reveal>{t.skillsL}</span>
      <h2 className="h2 narrow" data-reveal="split"><SplitWords lines={[t.skillsHead]} /></h2>
      <div className="skills">
        {t.groups.map((g, gi) => (
          <div className="card group" key={g.label} data-reveal style={{ '--i': gi % 3 }}>
            <h3 className="col-label">{g.label}</h3>
            <ul className="chips">
              {g.items.map((item) => <li key={item}>{item}</li>)}
            </ul>
          </div>
        ))}
      </div>
    </section>
  )
}
