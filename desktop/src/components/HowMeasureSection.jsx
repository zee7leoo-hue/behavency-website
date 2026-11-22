import React from 'react'
import { useInView } from 'react-intersection-observer'
import { User, Users, Layers } from 'lucide-react'
import './HowMeasureSection.css'

/* "We measure whether development actually happens." — exact copy of the supplied design.
   The section is laid out on a 1200 × 960 design canvas and scales as one piece: u(n) = n × (canvas width / 1200). */

const u = (n) => `calc(${n} * var(--u))`
const box = (x, y, w, h, extra = {}) => ({ left: u(x), top: u(y), ...(w != null ? { width: u(w) } : null), ...(h != null ? { height: u(h) } : null), ...extra })
const fs = (size, lh, extra = {}) => ({ fontSize: u(size), lineHeight: lh ? u(lh) : 1, ...extra })

/* y values below are design pixels measured from the top of the section (the supplied image minus its 60px header) */
const COLS = [
  { x: 52, label: 'DURING DEVELOPMENT', title: 'Was it useful?', body: ['After each module, participants', 'rate how relevant and practical', 'it was for their work.'], item: 'Short participant feedback' },
  { x: 396, label: 'AFTER 3 MONTHS', title: 'Is it being used?', body: ['Participants check in on their plan:', 'which actions they have tried at', 'work, and what got in the way.'], item: 'Development plan check-in' },
]
const VIEWS = [
  { y: 530, Icon: User, tone: 'blue', title: 'The manager’s view', desc: ['How they now see their own behaviour.'], pill: 'Managerial Profile' },
  { y: 624, Icon: Users, tone: 'violet', title: 'The team’s view', desc: ['Whether colleagues see a difference', 'day to day.'], pill: '360° Feedback' },
  { y: 718, Icon: Layers, tone: 'green', title: 'The working conditions', desc: ['Whether the barriers that were raised', 'have eased.'], pill: 'Organisational Barriers' },
]

export default function HowMeasureSection() {
  const [ref, inView] = useInView({ triggerOnce: true, threshold: 0.1 })

  return (
    <section className={`hm${inView ? ' is-in' : ''}`} id="how-we-measure" ref={ref} aria-label="How we measure">
      <div className="hm-canvas" style={{ '--u': 'calc(100cqw / 1200)' }}>
        <div className="hm-eyebrow" style={box(52, 29, 400, 20)}>
          <i style={{ width: u(28) }} />
          <span style={fs(14.6, 20)}>HOW WE MEASURE</span>
        </div>

        <h2 className="hm-title" style={box(52, 62, null, null, fs(49, 56))}>
          We measure whether <em>development actually happens.</em>
        </h2>

        <p className="hm-sub" style={box(52, 128, 1100, null, { fontSize: '0.9458vw', lineHeight: 1.45 })}>
          Not just whether people completed the training — but whether their behaviour changed. We check along<br />
          the way, and then ask the same people the same questions again.
        </p>

        <div className="hm-lower" style={{ top: u(-112), height: '100%' }}>
        {/* timeline */}
        <span className="hm-line" style={box(91, 334, 1139, 1.6)} />
        <span className="hm-dot" style={box(51, 314, 40, 40)}>1</span>
        <span className="hm-dot" style={box(395, 314, 40, 40)}>2</span>
        <span className="hm-dot hm-dot--on" style={box(729, 311, 46, 46)}>3</span>

        {/* dividers */}
        <span className="hm-div" style={box(365, 392, 1.4, 420)} />
        <span className="hm-div" style={box(709, 392, 1.4, 420)} />

        {COLS.map((c) => (
          <div className="hm-col" key={c.label}>
            <p className="hm-label" style={box(c.x, 389, 300, 20, fs(13.6, 20))}>{c.label}</p>
            <h3 className="hm-h" style={box(c.x - 1, 418, 330, 44, fs(31.5, 44))}>{c.title}</h3>
            <p className="hm-body" style={box(c.x, 473, 320, null, { fontSize: 'calc(0.9458vw - 2px)', lineHeight: 1.46 })}>{c.body[0]}<br />{c.body[1]}<br />{c.body[2]}</p>
            <i className="hm-dash" style={box(c.x, 577, 18, 1.5)} />
            <p className="hm-item" style={box(c.x + 34, 566, 300, null, { fontSize: 'calc(0.9458vw - 2px)', lineHeight: 1.46 })}>{c.item}</p>
          </div>
        ))}

        {/* stage 3 */}
        <div className="hm-col">
          <p className="hm-label" style={box(741, 389, 300, 20, fs(13.6, 20))}>AFTER 6 MONTHS</p>
          <h3 className="hm-h" style={box(740, 417, 420, 44, fs(31.5, 44))}>Has behaviour changed?</h3>
          <p className="hm-body" style={box(741, 470, 560, null, { fontSize: 'calc(0.9458vw - 2px)', lineHeight: 1.46 })}>
            The same questionnaires, the same people. Results are<br />compared with the starting point, area by area, from three angles:
          </p>
          {VIEWS.map((v) => (
            <div className="hm-card" key={v.title} style={box(740, v.y, 490, 84, { borderRadius: u(10) })}>
              <span className={`hm-tile hm-tile--${v.tone}`} style={box(11, 14, 54, 54, { borderRadius: u(9) })}><v.Icon strokeWidth={1.6} /></span>
              <h4 className="hm-ct" style={box(84, 10, 330, 26, fs(18.6, 26))}>{v.title}</h4>
              <p className="hm-cd" style={box(84, 36, 330, null, { fontSize: 'calc(0.9458vw - 3.5px)', lineHeight: 1.4 })}>{v.desc[0]}{v.desc[1] && <><br />{v.desc[1]}</>}</p>
              <span className={`hm-pill hm-pill--${v.tone}`} style={{ right: u(14), top: u(26), height: u(32), borderRadius: u(16), lineHeight: u(32), fontSize: 'calc(0.9458vw - 5px)' }}>{v.pill}</span>
            </div>
          ))}
        </div>
        </div>
      </div>
    </section>
  )
}
