import React, { useCallback, useRef, useState } from 'react'
import profile from '../assets/hiring/recruiter-profile.webp'
import './Hiring.css'

/* "Hiring a manager? Lower the risk." (mobile): the candidate report with numbered labels that match the
   first three swipe cards, a navy 4th card "Simple to run", and a plain "Not a pass/fail test" line underneath. */

const CARDS = [
  { h: 'See how they manage, not how they interview', p: 'Как кандидат обычно работает с целями, обратной связью, приоритетами и людьми — в шести областях повседневного управления.' },
  { h: 'Что проверить на интервью', p: 'Отчёт показывает сильные области и те, что стоит проверить, — так вы спрашиваете именно там, где есть сомнения.' },
  { h: 'Сравнить с вашими руководителями', p: 'Кандидаты проходят тот же профиль, что и ваши руководители, — сразу видно, как они впишутся.' },
]
const STEPS = ['Укажите имя и почту', 'Кандидат даёт согласие и отвечает онлайн', 'Вы получаете отчёт на 4 страницы']

export default function Hiring() {
  const trkRef = useRef(null)
  const [active, setActive] = useState(0)
  const [dragging, setDragging] = useState(false)
  const count = CARDS.length + 1

  const target = useCallback((i) => {
    const trk = trkRef.current
    return trk.children[i].offsetLeft - trk.offsetLeft - parseFloat(getComputedStyle(trk).paddingLeft)
  }, [])
  const current = useCallback(() => {
    const trk = trkRef.current
    let best = 0, d = 1e9
    for (let i = 0; i < trk.children.length; i++) {
      const dd = Math.abs(target(i) - trk.scrollLeft)
      if (dd < d) { d = dd; best = i }
    }
    return best
  }, [target])
  const go = (i) => { trkRef.current.scrollTo({ left: target(i), behavior: 'smooth' }); setActive(i) }

  // mouse drag for computers
  const drag = useRef({ down: false, sx: 0, sl: 0 })
  const onPointerDown = (e) => {
    if (e.pointerType !== 'mouse') return
    const trk = trkRef.current
    drag.current = { down: true, sx: e.clientX, sl: trk.scrollLeft }
    setDragging(true)
    trk.setPointerCapture(e.pointerId)
  }
  const onPointerMove = (e) => { if (drag.current.down) trkRef.current.scrollLeft = drag.current.sl - (e.clientX - drag.current.sx) }
  const onPointerUp = () => {
    if (!drag.current.down) return
    drag.current.down = false
    setDragging(false)
    const trk = trkRef.current
    const { sl } = drag.current
    let from = -1
    for (let i = 0; i < count; i++) if (Math.abs(target(i) - sl) < 5) { from = i; break }
    let t = current()
    const dx = trk.scrollLeft - sl
    if (from >= 0 && t === from && Math.abs(dx) > 40) t = Math.max(0, Math.min(count - 1, from + Math.sign(dx)))
    go(t)
  }

  return (
    <section className="hi" id="hiring">
      <div className="hi-in">
        <div className="hi-eyebrow">ALSO FOR HIRING</div>
        <h2 className="hi-title">Hiring a manager? <em>Lower the risk.</em></h2>
        <p className="hi-lead">An interview shows how a candidate presents themselves. The Managerial Profile shows how they are likely to manage: one input next to interviews and references, not a verdict.</p>
        <div className="hi-labelled">
          <img className="hi-doc" src={profile} alt="Candidate profile report" />
          <span className="hi-pin" style={{ top: '47%', left: '-3%' }}><b>1</b>Шесть областей</span>
          <span className="hi-pin" style={{ top: '62%', right: '-3%' }}><b>2</b>Стоит проверить</span>
          <span className="hi-pin" style={{ top: '80%', left: '7%' }}><b>3</b>Strong areas</span>
        </div>

        <div className={`hi-swipe ${dragging ? 'drag' : ''}`} ref={trkRef} onScroll={() => setActive(current())}
          onPointerDown={onPointerDown} onPointerMove={onPointerMove} onPointerUp={onPointerUp} onPointerCancel={onPointerUp}>
          {CARDS.map((c, i) => (
            <div key={c.h} className="hi-card">
              <div className="hi-num">{i + 1}</div>
              <h3>{c.h}</h3>
              <p>{c.p}</p>
            </div>
          ))}
          <div className="hi-card run">
            <div className="hi-num">4</div>
            <h3>Simple to run</h3>
            <ol className="hi-mini">
              {STEPS.map((s, k) => <li key={s}><i>{k + 1}</i>{s}</li>)}
            </ol>
          </div>
        </div>
        <div className="hi-dots">
          {Array.from({ length: count }, (_, i) => (
            <button key={i} type="button" aria-label={`Card ${i + 1}`} className={active === i ? 'on' : ''} onClick={() => go(i)} />
          ))}
        </div>

        <p className="hi-note"><b>Not a pass/fail test.</b> Используйте его, чтобы точнее задавать вопросы, а не как единственное основание для ранжирования, отказа или повышения.</p>
      </div>
    </section>
  )
}
