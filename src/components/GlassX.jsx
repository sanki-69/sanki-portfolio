// Extruded violet "X", built from stacked SVG layers to fake depth.
const ARM = 'M-18 -62 H18 V-18 H62 V18 H18 V62 H-18 V18 H-62 V-18 H-18 Z'
const DEPTH = 14

export default function GlassX({ className = '' }) {
  return (
    <svg className={`glass-x ${className}`} viewBox="-100 -100 220 220" aria-hidden="true">
      <defs>
        <linearGradient id="xTop" x1="0" y1="0" x2="1" y2="1">
          <stop offset="0" stopColor="#a88bff" />
          <stop offset=".45" stopColor="#6a45ff" />
          <stop offset="1" stopColor="#3a1fd1" />
        </linearGradient>
        <linearGradient id="xSide" x1="0" y1="0" x2="1" y2="1">
          <stop offset="0" stopColor="#3b22c9" />
          <stop offset="1" stopColor="#1c0f73" />
        </linearGradient>
        <radialGradient id="xShine" cx=".3" cy=".25" r=".6">
          <stop offset="0" stopColor="#fff" stopOpacity=".55" />
          <stop offset="1" stopColor="#fff" stopOpacity="0" />
        </radialGradient>
      </defs>
      <g transform="rotate(45)">
        {Array.from({ length: DEPTH }, (_, i) => (
          <path key={i} d={ARM} fill="url(#xSide)" transform={`translate(${(DEPTH - i) * 0.9} ${(DEPTH - i) * 0.9})`} />
        ))}
        <path d={ARM} fill="url(#xTop)" stroke="rgba(220,210,255,.55)" strokeWidth="1.5" />
        <path d={ARM} fill="url(#xShine)" />
        <path d="M-12 -56 H12 V-22" fill="none" stroke="rgba(255,255,255,.5)" strokeWidth="2" strokeLinecap="round" />
      </g>
    </svg>
  )
}
