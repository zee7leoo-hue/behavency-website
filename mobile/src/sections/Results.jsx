import React from 'react'
import './Results.css'

/* "Why these areas matter" (mobile): one evidence stat per area, then a highlighted AI stat. */

const STATS = [
  { area: 'Clarity & Alignment', n: '4.9×', p: 'Teams whose work ties to clear, visible goals are 4.9× more likely to meet deadlines.', src: 'Atlassian, State of Teams 2025' },
  { area: 'Trust & Inclusion', n: '3%', vs: 'vs 12%', p: '3% of people who feel safe speaking up are likely to quit within a year, vs 12% of those who feel least safe.', src: 'BCG, 2024' },
  { area: 'Focus & Prioritization', n: '4.6×', p: 'Teams with a way to identify their top priorities are 4.6× more likely to be productive.', src: 'Atlassian, State of Teams 2024' },
  { area: 'Execution & Accountability', n: '3×', p: 'Managers whose leaders hold everyone accountable for great performance are 3× as likely to be engaged (51% vs 17%).', src: 'Gallup, 2026' },
  { area: 'Collaboration & Influence', n: '39%', p: 'Better collaboration could raise team productivity by 39% on average.', src: 'i4cp, 2024' },
  { area: 'Learning & Adaptability', n: '2×', p: 'Organisations that prioritise developing their people are 2× as likely to see better financial and business results.', src: 'Deloitte, Global Human Capital Trends 2025' },
]

export default function Results() {
  return (
    <section className="rs" id="results">
      <div className="rs-head">
        <div className="rs-eyebrow"><span className="rs-dash" aria-hidden="true" /><span>Why these areas matter</span></div>
        <h2 className="rs-title">When these areas improve, <em>results follow.</em></h2>
        <p className="rs-lead">Each area in our model is linked to results a business can see: performance, productivity and profit.</p>
      </div>

      <div className="rs-list">
        {STATS.map((s) => (
          <div key={s.area} className="rs-item">
            <span className="rs-area">{s.area}</span>
            {s.vs ? (
              <div className="rs-pair"><span className="rs-n">{s.n}</span><span className="rs-vs">{s.vs}</span></div>
            ) : (
              <div className="rs-n">{s.n}</div>
            )}
            <p className="rs-p">{s.p}</p>
            <a className="rs-src" href="#">{s.src} ↗</a>
          </div>
        ))}
      </div>

      <div className="rs-ai">
        <span className="rs-ai-k">And AI won’t build them for you</span>
        <div className="rs-ai-n">42%</div>
        <p className="rs-ai-p">of people who received low-effort, AI-generated work from a colleague said they trust them less.</p>
        <div className="rs-ai-rule" />
        <a className="rs-ai-src" href="#">BetterUp Labs &amp; Stanford Social Media Lab, Harvard Business Review, 2025 ↗</a>
      </div>
    </section>
  )
}
