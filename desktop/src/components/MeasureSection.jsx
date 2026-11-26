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
  { label: ['Ясность и согласованность'], before: 42, after: 74, d: 32, y: 330, bw: 81, aw: 143 },
  { label: ['Исполнение и ответственность'], before: 51, after: 79, d: 28, y: 380, bw: 99, aw: 153 },
  { label: ['Сотрудничество и влияние'], before: 58, after: 81, d: 23, y: 430, bw: 112, aw: 156 },
  { label: ['Доверие и инклюзивность'], before: 69, after: 85, d: 16, y: 480, bw: 133, aw: 164 },
  { label: ['Фокус и приоритеты'], before: 55, after: 67, d: 12, y: 530, bw: 106, aw: 129 },
  { label: ['Обучение и адаптивность'], before: 72, after: 76, d: 4, y: 580, bw: 139, aw: 147 },
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
    <section className={`ms${inView ? ' is-in' : ''}`} id="measure" ref={ref} aria-label="Measure: показать, что изменилось">
      <div className="ms-canvas" ref={canvasRef} style={{ '--u': 'calc(100cqw / 1600)' }}>
        {/* results card */}
        <div className="ms-card" style={box(138, 161, 600, 486, { borderRadius: u(46) })}>
          <h3 className="ms-card-title" style={box(51, 26, null, null, fs(30.8, 40))}>Пример результатов программы</h3>
          <div style={{ position: 'absolute', right: 'calc(36 * var(--u))', top: 'calc(94 * var(--u))', zIndex: 5 }}>
            <span className="bhv-badge" style={{ display: 'inline-block', font: '700 13px/1.2 Inter,system-ui,sans-serif', color: '#1c1a12', background: '#fff0a6', padding: '5px 11px', borderRadius: 999, letterSpacing: 0, textTransform: 'none', whiteSpace: 'nowrap', boxShadow: '0 0 0 1px rgba(160,130,0,.25)' }}>Пример · не данные клиентов</span>
          </div>
          <span className="ms-rule" style={box(0, 85, 600, 1.5)} />
          <div className="ms-legend" style={box(43, 101, null, null, fs(16.2, 20))}>
            <i className="ms-sq ms-sq--before" style={{ width: u(14), height: u(14) }} /><span>До</span>
            <i className="ms-sq ms-sq--after" style={{ width: u(14), height: u(14), marginLeft: u(19) }} /><span>После</span>
          </div>
          <span className="ms-rule" style={box(0, 138, 600, 1.5)} />

          {ROWS.map((r, i) => {
            const cy = r.y - 161 // row centre inside the card
            return (
              <div className="ms-row" key={r.label.join('')} style={{ '--i': i }}>
                <div className="ms-label" style={box(43, cy - 11, null, null, fs(15.2, 21.5))}>{r.label[0]}</div>
                <span className="ms-bar ms-bar--before" style={box(262, cy - 8, r.bw, 6, { borderRadius: u(3) })} />
                <span className="ms-bar ms-bar--after" style={box(262, cy + 3, r.aw, 6, { borderRadius: u(3) })} />
                <span className="ms-num" style={box(440, cy - 10, 76, 20, fs(14.6, 20))}>{r.before} → {r.after}</span>
                <span className="ms-delta" style={box(522, cy - 13, 52, 26, fs(14, 26))}>+{r.d}</span>
              </div>
            )
          })}
        </div>

        {/* text */}
        <div className="ms-pill" style={box(906, 69, null, null)}>
          <StagePill num="04" title="Measure" sub="Показать, что изменилось" tone="purple" />
        </div>
        <h2 className="ms-title" style={box(906, 206, null, null, fs(61.3, 60))}>
          А потом —<br />повторная оценка.
        </h2>
        <p className="ms-copy" style={box(906, 359, 600, null, fs(19.4, 26.5))}>
          Те же вопросы, те же люди — через три<br />месяца после обучения. Новые результаты — рядом с<br />исходными.
        </p>
        <p className="ms-copy" style={box(906, 459, 600, null, fs(19.4, 26.5))}>
          Руководство спросит, что дало обучение, —<br />и у вас будет ответ: до и после,<br />по каждой области.
        </p>

        {/* timeline */}
        <div className="ms-tl">
          <svg className="ms-tl-ico" style={box(964 - 16, 571, 32, 32)} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.7" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
            <path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z" /><polyline points="14 2 14 8 20 8" /><line x1="16" y1="13" x2="8" y2="13" /><line x1="16" y1="17" x2="8" y2="17" /><line x1="10" y1="9" x2="8" y2="9" />
          </svg>
          <span className="ms-tl-label" style={box(962 - 80, 610, 160, null, fs(15.4, 20))}>Оценка</span>
          <span className="ms-tl-line" style={box(1031, 590, 68, 1.5)} />
          <span className="ms-tl-six" style={box(1163 - 40, 564, 80, null, fs(44, 48))}>3</span>
          <span className="ms-tl-label" style={box(1161 - 80, 610, 160, null, fs(15.4, 20))}>месяца после обучения</span>
          <span className="ms-tl-line" style={box(1225, 590, 68, 1.5)} />
          <svg className="ms-tl-ico" style={box(1359 - 17, 570, 34, 34)} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.7" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
            <rect x="18" y="3" width="4" height="18" rx="1" /><rect x="10" y="8" width="4" height="13" rx="1" /><rect x="2" y="13" width="4" height="8" rx="1" />
          </svg>
          <span className="ms-tl-label" style={box(1359 - 80, 610, 160, null, fs(15.4, 20))}>Результаты</span>
          <span className="ms-tl-cap" style={box(1160 - 140, 646, 280, null, fs(14.4, 20))}>Измеряем, что изменилось.</span>
        </div>
      </div>
    </section>
  )
}
