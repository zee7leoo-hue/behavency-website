import React, { useRef, useState } from 'react'
import './WhoFor.css'

/* "Для кого" (mobile): lavender, with purple as its accent. Three roles to pick from; the chosen one's situation
   shows in a speech bubble that points at them, its first sentence pulled out as a quote. Tap a person or swipe the bubble.
   All three bubbles share one grid cell, so the section keeps the same height whichever is showing. */

const sv = { fill: 'none', stroke: 'currentColor', strokeWidth: 1.7, strokeLinecap: 'round', strokeLinejoin: 'round' }
const IconHR = (p) => (<svg viewBox="0 0 24 24" {...sv} {...p}><rect x="4" y="3.5" width="16" height="17" rx="3" /><path d="M8 15.5 11 12l2.4 2.4L16.5 10M8.5 7.5h4" /></svg>)
const IconMgr = (p) => (<svg viewBox="0 0 24 24" {...sv} {...p}><circle cx="12" cy="8" r="3.6" /><path d="M5 20.5v-.7a6 6 0 0 1 6-6h2a6 6 0 0 1 6 6v.7" /></svg>)
const IconLead = (p) => (<svg viewBox="0 0 24 24" {...sv} {...p}><path d="M3.5 20.5h17M5.5 20.5V10l6.5-5 6.5 5v10.5M9.5 20.5v-5h5v5" /></svg>)

const WHO = [
  {
    key: 'hr', who: 'HR & L&D', title: 'HR & L&D Teams', Icon: IconHR,
    hook: 'Вам нужны доказательства.',
    p: 'Вы уже запускали программы и не могли доказать, что они сработали. Behavency даёт данные «до и после», отчёты по каждому участнику и картину по организации на языке совета директоров.',
    inc: ['Facilitators', 'HR Directors', 'L&D Managers', 'Organisational Development'],
  },
  {
    key: 'mgr', who: 'Руководители', title: 'Managers & Participants', Icon: IconMgr,
    hook: 'Это не очередной опрос, результатов которого вы так и не увидите.',
    p: 'Оценка сразу превращается в ваш личный отчёт, ваши приоритеты развития и вашу программу. Это про вас, а не для галочки.',
    inc: ['Line Managers', 'Mid Managers', 'Team Leads'],
  },
  {
    key: 'lead', who: 'Leadership', title: 'Leadership & Boards', Icon: IconLead,
    hook: 'Вам нужно понять, готово ли управленческое звено к тому, куда движется компания.',
    p: 'И дали ли что-нибудь деньги, вложенные в развитие в прошлом году. Behavency показывает картину по всей организации — и на оба вопроса появляется ответ.',
    inc: ['CEOs', 'CHROs', 'Executive Teams', 'Investors'],
  },
]

export default function WhoFor() {
  const [on, setOn] = useState(0)
  const touch = useRef(null)
  const step = (d) => setOn((i) => (i + d + WHO.length) % WHO.length)
  const onTouchStart = (e) => { touch.current = e.touches[0].clientX }
  const onTouchEnd = (e) => {
    if (touch.current == null) return
    const dx = e.changedTouches[0].clientX - touch.current
    touch.current = null
    if (Math.abs(dx) > 45) step(dx < 0 ? 1 : -1)
  }

  return (
    <section className="wf" id="who-its-for">
      <p className="wf-eyebrow"><span aria-hidden="true" />Для кого</p>
      <h2 className="wf-title">Три разных человека. <em>One connected system.</em></h2>

      <div className="wf-people" role="tablist" aria-label="Для кого">
        {WHO.map((w, i) => (
          <button key={w.key} type="button" role="tab" aria-selected={on === i} aria-controls={`wf-b-${w.key}`}
            className={`wf-person ${on === i ? 'on' : ''}`} onClick={() => setOn(i)}>
            <span className="wf-av"><w.Icon aria-hidden="true" /></span>
            <span className="wf-name">{w.who}</span>
          </button>
        ))}
      </div>

      <div className="wf-stage" style={{ '--x': `${(on * 2 + 1) * (100 / 6)}%` }} onTouchStart={onTouchStart} onTouchEnd={onTouchEnd}>
        <span className="wf-tail" aria-hidden="true" />
        {WHO.map((w, i) => (
          <article key={w.key} id={`wf-b-${w.key}`} role="tabpanel" className={`wf-bubble ${on === i ? 'on' : ''}`} aria-hidden={on !== i}>
            <small className="wf-role">{w.title}</small>
            <blockquote className="wf-hook">{w.hook}</blockquote>
            <p className="wf-p">{w.p}</p>
            <div className="wf-inc">
              <small>Includes</small>
              <ul>{w.inc.map((x) => <li key={x}>{x}</li>)}</ul>
            </div>
          </article>
        ))}
      </div>

      <div className="wf-nav">
        <button type="button" aria-label="Previous" onClick={() => step(-1)}><svg viewBox="0 0 24 24"><path d="M14.5 6 8.5 12l6 6" /></svg></button>
        <span>{on + 1} / {WHO.length}</span>
        <button type="button" aria-label="Next" onClick={() => step(1)}><svg viewBox="0 0 24 24"><path d="m9.5 6 6 6-6 6" /></svg></button>
      </div>
    </section>
  )
}
