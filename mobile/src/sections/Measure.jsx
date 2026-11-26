import React from 'react'
import { useInView } from '../hooks'
import './Measure.css'

/* "04 Measure" (mobile): we run the assessment again and show what changed. Drawn on the 400px canvas. */

const sv = { fill: 'none', stroke: 'currentColor', strokeWidth: 1.8, strokeLinecap: 'round', strokeLinejoin: 'round' }
const Clip = () => (<svg viewBox="0 0 24 24" {...sv}><rect x="4.6" y="3.8" width="14.8" height="17.4" rx="2.6" /><path d="M9 3.8V3a1 1 0 0 1 1-1h4a1 1 0 0 1 1 1v.8M8.4 10h7.2M8.4 13.4h7.2M8.4 16.8h4.2" /></svg>)
const Bars = () => (<svg viewBox="0 0 24 24" {...sv}><rect x="2.6" y="11.6" width="4.6" height="9" rx="1.6" /><rect x="9.7" y="7.4" width="4.6" height="13.2" rx="1.6" /><rect x="16.8" y="2.6" width="4.6" height="18" rx="1.6" /></svg>)

const ROWS = [
  { a: 'Clarity &', b: 'Alignment', from: 42, to: 74, up: 32, f: 0.399, t: 0.703 },
  { a: 'Execution &', b: 'Accountability', from: 51, to: 79, up: 28, f: 0.484, t: 0.750 },
  { a: 'Collaboration &', b: 'Influence', from: 58, to: 81, up: 23, f: 0.551, t: 0.769 },
  { a: 'Trust &', b: 'Inclusion', from: 69, to: 85, up: 16, f: 0.655, t: 0.807 },
  { a: 'Focus &', b: 'Prioritisation', from: 55, to: 67, up: 12, f: 0.522, t: 0.636 },
  { a: 'Learning &', b: 'Adaptability', from: 72, to: 76, up: 4, f: 0.684, t: 0.722 },
]

export default function Measure() {
  const [ref, seen] = useInView(0.15)
  return (
    <section ref={ref} className={`ms ${seen ? 'is-in' : ''}`} id="measure">
      <div className="ms-in">
        <h2 className="ms-title rv" style={{ '--i': 0 }}>{['Then we run the assessment again.']}</h2>
        <div className="ms-eyebrow rv" style={{ '--i': 1 }}><em>04</em><i aria-hidden="true" /><span>Measure</span><u aria-hidden="true" /><s>Show what changed</s></div>
        <p className="ms-text rv" style={{ '--i': 2 }}>We use the same questions with the same people, three months after training. The results sit side by side with where they started.</p>
        <p className="ms-text ms-text--2 rv" style={{ '--i': 3 }}>When leadership asks what the training changed, you’ll have an answer: before and after, area by area.</p>

        <div className="ms-flow rv" style={{ '--i': 4 }}>
          <div className="ms-step"><span className="ms-ico"><Clip /></span><p>Assessment</p></div>
          <i aria-hidden="true" />
          <div className="ms-step"><b>3</b><p>months after training</p></div>
          <i aria-hidden="true" />
          <div className="ms-step"><span className="ms-ico"><Bars /></span><p>Results</p></div>
        </div>

        <div className="ms-card rv" style={{ '--i': 5 }}>
          <div style={{ margin: '0 0 10px' }}><span className="bhv-badge" style={{ display: 'inline-block', font: '700 13px/1.2 Inter,system-ui,sans-serif', color: '#1c1a12', background: '#fff0a6', padding: '5px 11px', borderRadius: 999, letterSpacing: 0, textTransform: 'none', whiteSpace: 'nowrap', boxShadow: '0 0 0 1px rgba(160,130,0,.25)' }}>Example · not client data</span></div>
          <h3>Illustrative programme results</h3>
          <div className="ms-legend"><span><i className="b" />Before</span><span><i className="a" />After</span></div>
          <ul>
            {ROWS.map((r, k) => (
              <li key={r.a} style={{ '--k': k }}>
                <p>{r.a}<br />{r.b}</p>
                <div className="ms-bars">
                  <span className="tr"><i className="bf" style={{ '--w': r.f }} /></span>
                  <span className="tr"><i className="af" style={{ '--w': r.t }} /></span>
                </div>
                <div className="ms-vals">{r.from} → {r.to}</div>
                <em>+{r.up}</em>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  )
}
