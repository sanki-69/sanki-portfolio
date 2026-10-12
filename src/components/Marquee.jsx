import {
  siPython, siReact, siNextdotjs, siTypescript, siJavascript, siFastapi,
  siMongodb, siPostgresql, siOpenjdk, siFigma, siHtml5, siCss,
} from 'simple-icons'

// Four-point sparkle for "LLMs", which has no brand logo.
const SPARKLE = 'M12 0c.6 5.6 6.4 11.4 12 12-5.6.6-11.4 6.4-12 12C11.4 18.4 5.6 12.6 0 12 5.6 11.4 11.4 5.6 12 0z'

const TOOLS = [
  ['Python', siPython.path], ['React', siReact.path], ['Next.js', siNextdotjs.path],
  ['TypeScript', siTypescript.path], ['JavaScript', siJavascript.path], ['FastAPI', siFastapi.path],
  ['MongoDB', siMongodb.path], ['PostgreSQL', siPostgresql.path], ['Java', siOpenjdk.path],
  ['Figma', siFigma.path], ['LLMs', SPARKLE], ['HTML5', siHtml5.path], ['CSS', siCss.path],
]

export default function Marquee() {
  return (
    <div className="marquee" aria-label="Tools I use">
      <ul className="marquee-track">
        {[0, 1].map((copy) =>
          TOOLS.map(([name, path]) => (
            <li key={`${copy}-${name}`} aria-hidden={copy === 1}>
              <svg viewBox="0 0 24 24" aria-hidden="true"><path d={path} /></svg>
              {name}
            </li>
          )),
        )}
      </ul>
    </div>
  )
}
