import React from 'react'
import { useInView } from '../hooks'
import './HowRuns.css'

/* "How it runs" (mobile): a navy section with an app-style "Programme plan" panel. Inside, the five steps sit on a glowing
   timeline (teal to amber); each step says who is involved, what happens and roughly how long it takes. */

const sv = { fill: 'none', stroke: 'currentColor', strokeWidth: 1.8, strokeLinecap: 'round', strokeLinejoin: 'round' }
const Flag = (p) => (<svg viewBox="0 0 24 24" {...sv} {...p}><path d="M5 21V4M5 4h11l-2 4 2 4H5" /></svg>)
const Clip = (p) => (<svg viewBox="0 0 24 24" {...sv} {...p}><rect x="5" y="4" width="14" height="17" rx="2.5" /><path d="M9 4V3h6v1M8.5 10h7M8.5 14h7M8.5 18h4" /></svg>)
const Pad = (p) => (<svg viewBox="0 0 24 24" {...sv} {...p}><path d="M7 7h10a4.6 4.6 0 0 1 4.5 5.4l-.7 3.6a2.6 2.6 0 0 1-4.4 1.3L14.2 15H9.8l-2.2 2.3a2.6 2.6 0 0 1-4.4-1.3l-.7-3.6A4.6 4.6 0 0 1 7 7z" /><path d="M8 9.6v3M6.5 11.1h3M15.6 10.2h.01M17.8 12.2h.01" /></svg>)
const Cap = (p) => (<svg viewBox="0 0 24 24" {...sv} {...p}><path d="M2.5 9.2 12 4.5l9.5 4.7L12 14z" /><path d="M6.4 11.4v4.6c0 1.2 2.6 2.6 5.6 2.6s5.6-1.4 5.6-2.6v-4.6" /></svg>)
const Chart = (p) => (<svg viewBox="0 0 24 24" {...sv} {...p}><path d="M4 20V10M10 20V5M16 20v-7M21 20H3" /></svg>)
const Clock = (p) => (<svg viewBox="0 0 24 24" {...sv} {...p}><circle cx="12" cy="12" r="8.5" /><path d="M12 7.5V12l3 1.8" /></svg>)
const Users = (p) => (<svg viewBox="0 0 24 24" {...sv} {...p}><circle cx="9" cy="8" r="3.2" /><path d="M3 19.5v-.6A4.9 4.9 0 0 1 7.9 14h2.2a4.9 4.9 0 0 1 4.9 4.9v.6M15.6 5a3.2 3.2 0 0 1 0 6.1M18 14.2a4.9 4.9 0 0 1 3 4.6v.7" /></svg>)

const STEPS = [
  { Icon: Flag, who: 'You and Behavency', t: 'Kick-off', p: 'We agree the goals, the group of managers and the timeline. Participants get their invitations.', d: '≈ 1 week' },
  { Icon: Clip, who: 'Managers and their teams', t: 'Assessment', p: 'Self-assessment, 360 feedback, the barriers survey and resilience, with optional interviews.', d: '≈ 2–3 weeks' },
  { Icon: Pad, who: 'Participants and facilitator', t: 'Results and game', p: 'Individual and group reports. The team game and reflection turn results into commitment.', d: '≈ 1–2 weeks' },
  { Icon: Cap, who: 'Managers', t: 'Training and Masterplans', p: 'Programmes matched to each manager’s priorities, each with a Masterplan for practice at work.', d: '≈ 2–3 months' },
  { Icon: Chart, who: 'You and Behavency', t: 'Measure', p: 'A follow-up check shows what changed in behaviour and in the conditions around the managers.', d: 'After 3–6 months' },
]

export default function HowRuns() {
  const [ref, seen] = useInView(0.12)
  return (
    <section ref={ref} className={`hw ${seen ? 'is-in' : ''}`} id="how-it-runs">
      <div className="hw-pill"><b>How it runs</b><u aria-hidden="true" /><span>From kick-off to measurable change</span></div>
      <h2 className="hw-title">One programme, <em>five clear steps.</em></h2>
      <p className="hw-text">You always know what happens next, who is involved and roughly how long it takes.</p>

      <div className="hw-panel">
        <div className="hw-bar">
          <span className="hw-dots" aria-hidden="true"><i /><i /><i /></span>
          <strong>Programme plan</strong>
          <em>5 steps</em>
        </div>
        <ol className="hw-steps">
          {STEPS.map((s, i) => (
            <li key={s.t} className="hw-step" style={{ '--i': i }}>
              <span className="hw-node"><s.Icon /></span>
              <div className="hw-body">
                <div className="hw-row">
                  <span className="hw-n">0{i + 1}</span>
                  <span className="hw-d"><Clock />{s.d}</span>
                </div>
                <h3>{s.t}</h3>
                <p>{s.p}</p>
                <span className="hw-who"><Users />{s.who}</span>
              </div>
            </li>
          ))}
        </ol>
      </div>
      <p className="hw-note">Timings are placeholders to confirm.</p>
    </section>
  )
}
