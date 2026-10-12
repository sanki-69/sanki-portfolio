import { Fragment } from 'react'

// Splits text into masked words so each one can rise into place.
// `lines` is a list of strings or { text, className } objects; each line renders on its own row.
export default function SplitWords({ lines, play = false }) {
  let wi = 0
  return (
    <span className={`split ${play ? 'play' : ''}`}>
      {lines.map((line, li) => {
        const { text, className = '' } = typeof line === 'string' ? { text: line } : line
        return (
          <span className="line" key={li}>
            {text.split(' ').map((word, j) => (
              <Fragment key={j}>
                <span className="w">
                  <span className={className} style={{ '--wi': wi++ }}>{word}</span>
                </span>
                {' '}
              </Fragment>
            ))}
          </span>
        )
      })}
    </span>
  )
}
