import React from 'react'
import './StagePill.css'

/* Shared stage label pill: "01 — Identify | Reveal strengths and gaps".
   tone matches the hero stage cards: blue / green / orange / purple. */
export default function StagePill({ num, title, sub, tone = 'blue', className = '', style }) {
  return (
    <div className={`stage-pill stage-pill--${tone} ${className}`} style={style}>
      <span className="stage-pill__num">{num}</span>
      <span className="stage-pill__line" aria-hidden="true" />
      <span className="stage-pill__title">{title}</span>
      <span className="stage-pill__sep" aria-hidden="true" />
      <span className="stage-pill__sub">{sub}</span>
    </div>
  )
}
