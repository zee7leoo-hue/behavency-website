import React, { useEffect, useRef } from 'react'
import { useInView } from 'react-intersection-observer'
import StagePill from './StagePill'
import './MeasureSection.css'

/* "Then we run the assessment again." — exact copy of the supplied design.
   The section is laid out on a 1600 × 820 design canvas and scales as one piece: u(n) = n × (canvas width / 1600). */

const u = (n) => `calc(${n} * var(--u))`
const box = (x, y, w, h, extra = {}) => ({ left: u(x), top: u(y), ...(w != null ? { width: u(w) } : null), ...(h != null ? { height: u(h) } : null), ...extra })
const fs = (size, lh, extra = {}) => ({ fontSize: u(size), lineHeight: lh ? u(lh) : 1, ...extra })

const ROWS = [
  { label: ['Clarity & Alignment'], before: 42, after: 74, d: 32, y: 340, bw: 108, aw: 211 },
  { label: ['Execution &', 'Accountability'], before: 51, after: 79, d: 28, y: 405, bw: 140, aw: 224 },
  { label: ['Collaboration &', 'Influence'], before: 58, after: 81, d: 23, y: 471, bw: 165, aw: 227 },
  { label: ['Trust & Inclusion'], before: 69, after: 85, d: 16, y: 540, bw: 198, aw: 238 },
]

export default function MeasureSection() {
  const [ref, inView] = useInView({ triggerOnce: true, threshold: 0.12 })
  const canvasRef = useRef(null)
  // the stage pill is a normal fixed-size component, so scale it with the canvas
  useEffect(() => {
    const el = canvasRef.current
    if (!el) return undefined
    const fit = () => el.style.setProperty('--k', String(el.clientWidth / 1600))
    fit()
    const ro = new ResizeObserver(fit)
    ro.observe(el)
    return () => ro.disconnect()
  }, [])

  return (
    <section className={`ms${inView ? ' is-in' : ''}`} id="measure" ref={ref} aria-label="Measure: prove the impact">
      <div className="ms-canvas" ref={canvasRef} style={{ '--u': 'calc(100cqw / 1600)' }}>
        {/* results card */}
        <div className="ms-card" style={box(138, 161, 600, 446, { borderRadius: u(46) })}>
          <h3 className="ms-card-title" style={box(51, 26, null, null, fs(30.8, 40))}>Illustrative programme results</h3>
          <span className="ms-rule" style={box(0, 85, 600, 1.5)} />
          <div className="ms-legend" style={box(43, 101, null, null, fs(16.2, 20))}>
            <i className="ms-sq ms-sq--before" style={{ width: u(14), height: u(14) }} /><span>Before</span>
            <i className="ms-sq ms-sq--after" style={{ width: u(14), height: u(14), marginLeft: u(19) }} /><span>After</span>
          </div>
          <span className="ms-rule" style={box(0, 138, 600, 1.5)} />

          {ROWS.map((r, i) => {
            const cy = r.y - 161 // row centre inside the card
            return (
              <div className="ms-row" key={r.label.join('')} style={{ '--i': i }}>
                <div className="ms-label" style={box(43, cy - (r.label.length === 2 ? 22 : 11), null, null, fs(15.2, 21.5))}>
                  {r.label.map((l, k) => <React.Fragment key={l}>{l}{k < r.label.length - 1 && <br />}</React.Fragment>)}
                </div>
                <span className="ms-bar ms-bar--before" style={box(212, cy - 17, r.bw, 14, { borderRadius: u(7) })} />
                <span className="ms-bar ms-bar--after" style={box(212, cy + 3, r.aw, 14, { borderRadius: u(7) })} />
                <span className="ms-num" style={box(459, cy - 22, 33, 20, fs(17.4, 20))}>{r.before}</span>
                <span className="ms-num" style={box(459, cy, 33, 20, fs(17.4, 20))}>{r.after}</span>
                <span className="ms-delta" style={box(519, cy - 17, 60, 34, fs(24, 34))}>+{r.d}</span>
              </div>
            )
          })}
        </div>

        {/* text */}
        {/* the "04 Measure" pill is gone: the stage transition just above now introduces the stage */}
        <h2 className="ms-title" style={box(906, 152, null, null, fs(61.3, 60))}>
          Then we run the<br />assessment again.<br /><em>And show you what<br />changed.</em>
        </h2>
        <p className="ms-copy" style={box(906, 405, 600, null, fs(19.4, 26.5))}>
          We use the same questions with the same people, six<br />months later. The results sit side by side with where they<br />started.
        </p>
        <p className="ms-copy" style={box(906, 505, 600, null, fs(19.4, 26.5))}>
          This closes the ROI loop. Not with anecdote, but with<br />data. Development that can be pointed to, measured, and<br />reported to a board.
        </p>

        {/* timeline */}
        <div className="ms-tl">
          <svg className="ms-tl-ico" style={box(964 - 16, 617, 32, 32)} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.7" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
            <path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z" /><polyline points="14 2 14 8 20 8" /><line x1="16" y1="13" x2="8" y2="13" /><line x1="16" y1="17" x2="8" y2="17" /><line x1="10" y1="9" x2="8" y2="9" />
          </svg>
          <span className="ms-tl-label" style={box(962 - 80, 656, 160, null, fs(15.4, 20))}>Assessment</span>
          <span className="ms-tl-line" style={box(1031, 636, 68, 1.5)} />
          <span className="ms-tl-six" style={box(1163 - 40, 610, 80, null, fs(44, 48))}>6</span>
          <span className="ms-tl-label" style={box(1161 - 80, 656, 160, null, fs(15.4, 20))}>months later</span>
          <span className="ms-tl-line" style={box(1225, 636, 68, 1.5)} />
          <svg className="ms-tl-ico" style={box(1359 - 17, 616, 34, 34)} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.7" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
            <rect x="18" y="3" width="4" height="18" rx="1" /><rect x="10" y="8" width="4" height="13" rx="1" /><rect x="2" y="13" width="4" height="8" rx="1" />
          </svg>
          <span className="ms-tl-label" style={box(1359 - 80, 656, 160, null, fs(15.4, 20))}>Results</span>
          <span className="ms-tl-cap" style={box(1160 - 140, 692, 280, null, fs(14.4, 20))}>We measure what changed.</span>
        </div>
      </div>
    </section>
  )
}
