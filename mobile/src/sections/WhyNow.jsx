import React, { useCallback, useEffect, useState } from 'react'
import { useInView, useOnScreen, useReducedMotion } from '../hooks'
import { IconArrowLeft, IconArrowRight } from '../Icons'
import './WhyNow.css'

/* "Why now" (mobile): the purple container with the rotating "Warning sign" card.
   One question at a time; the next slides in from the right while the previous slides out to the left. */

const QUESTIONS = [
  {
    lead: 'Наши руководители', accent: 'перегружены.', support: ['Задач всё больше,', 'а мотивация падает.'],
    stat: { n: '27% → 22%', t: 'доля вовлечённых руководителей за год', src: 'Gallup, 2026', href: 'https://www.gallup.com/file/workplace/712607/SOGW_Global-Press-Release-2026-04.pdf' },
  },
  {
    lead: 'Ещё одна реструктуризация,', accent: 'ещё одна новая система.', support: ['Вести перемены поручают руководителям.', 'Но их к этому почти никто не готовил.'],
    stat: { n: '74%', t: 'HR-директоров говорят: руководители не готовы вести перемены', src: 'Gartner, 2024', href: 'https://www.gartner.com/en/newsroom/press-releases/2024-10-15-gartner-survey-finds-leader-and-manager-development-tops-hrleaders-list' },
  },
  {
    lead: 'Команды наших руководителей', accent: 'растут.', support: ['А собственную работу никто не отменял,', 'так что на каждого в команде времени всё меньше.'],
    stat: { n: '10,9 → 12,1', t: 'средний размер команды на руководителя, за год', src: 'Gallup, 2025', href: 'https://www.gallup.com/workplace/700718/managers-teams-getting-bigger.aspx' },
  },
  {
    lead: 'Мы сделали лучших', accent: 'сотрудников руководителями.', support: ['Смотрели на их результаты,', 'а не на умение руководить.'],
    stat: { n: '82%', t: 'новых руководителей не учили управлять', src: 'CMI, 2023', href: 'https://fortune.com/2023/10/16/bosses-accidental-formal-training-workers-quit-cmi/' },
  },
]
const HOLD_MS = 4900

export default function WhyNow() {
  const [rootRef, seen] = useInView(0.15)
  const [onRef, onScreen] = useOnScreen(0.45)
  const reduced = useReducedMotion()

  const [index, setIndex] = useState(0)
  const [prevIndex, setPrevIndex] = useState(null)
  const [dir, setDir] = useState(1)
  const [hovering, setHovering] = useState(false)
  const [userPaused, setUserPaused] = useState(false)

  const goTo = useCallback((next, direction) => {
    setIndex((cur) => {
      if (next === cur) return cur
      setPrevIndex(cur)
      setDir(direction)
      return next
    })
  }, [])
  const goNext = useCallback(() => goTo((index + 1) % QUESTIONS.length, 1), [goTo, index])
  const goPrev = useCallback(() => goTo((index - 1 + QUESTIONS.length) % QUESTIONS.length, -1), [goTo, index])

  const autoPlaying = onScreen && !hovering && !userPaused && !reduced
  useEffect(() => {
    if (!autoPlaying) return undefined
    const t = setTimeout(goNext, HOLD_MS)
    return () => clearTimeout(t)
  }, [autoPlaying, goNext, index])

  // swipe on the card
  const [touchX, setTouchX] = useState(null)
  const onTouchStart = (e) => { setHovering(true); setTouchX(e.touches[0].clientX) }
  const onTouchEnd = (e) => {
    if (touchX !== null) {
      const dx = e.changedTouches[0].clientX - touchX
      if (Math.abs(dx) > 40) (dx < 0 ? goNext : goPrev)()
    }
    setTouchX(null)
    setTimeout(() => setHovering(false), 2500)
  }

  const slidePos = (i) => {
    if (i === index) return 'active'
    if (i === prevIndex) return dir === 1 ? 'out-left' : 'out-right'
    return dir === 1 ? 'wait-right' : 'wait-left'
  }

  return (
    <section ref={rootRef} className={`wn ${seen ? 'is-in' : ''}`} id="why-now">
      <div className="wn-box" ref={onRef}>
        <p className="wn-eyebrow rv" style={{ '--i': 0 }}>ЧТО НА КОНУ</p>
        <span className="wn-bar rv" style={{ '--i': 0 }} aria-hidden="true" />
        <h2 className="wn-title rv" style={{ '--i': 1 }}>Этот риск <em>видно заранее.</em></h2>
        <p className="wn-text rv" style={{ '--i': 2 }}>
          Пробелы в управлении обычно долго никто не замечает. Команды день за днём обходят их, а компания спохватывается, только когда падают результаты.
        </p>
        <p className="wn-note rv" style={{ '--i': 3 }}>На неопределённость вы не повлияете. А на готовность своих руководителей — вполне.</p>

        <div className="wn-card rv" style={{ '--i': 4 }} role="group" aria-roledescription="carousel" aria-label="Так живут многие HR-команды"
          onMouseEnter={() => setHovering(true)} onMouseLeave={() => setHovering(false)}
          onTouchStart={onTouchStart} onTouchEnd={onTouchEnd}>
          <div className="wn-card-head">
            <span>ЗНАКОМО?</span>
            <span aria-hidden="true">{index + 1} / {QUESTIONS.length}</span>
          </div>
          <div className="wn-stage" aria-live={autoPlaying ? 'off' : 'polite'}>
            {QUESTIONS.map((q, i) => (
              <div key={q.accent} className={`wn-slide wn-slide--${slidePos(i)}`} aria-hidden={i !== index} role="group"
                aria-roledescription="slide" aria-label={`${i + 1} из ${QUESTIONS.length}`}>
                <p className="wn-q"><span>{q.lead}</span><em>{q.accent}</em></p>
                <p className="wn-support">{q.support.map((l) => <span key={l}>{l}</span>)}</p>
                <p className="wn-stat">
                  <b>{q.stat.n}</b>
                  <span className="wn-txt">{q.stat.t}</span>
                  <a className="wn-src" href={q.stat.href} target="_blank" rel="noopener noreferrer">{q.stat.src} ↗</a>
                </p>
              </div>
            ))}
          </div>
        </div>

        <div className="wn-controls rv" style={{ '--i': 5 }}>
          <div className="wn-dots" role="tablist" aria-label="Выберите вопрос">
            {QUESTIONS.map((q, i) => (
              <button key={q.accent} type="button" role="tab" aria-selected={i === index} aria-label={`Вопрос ${i + 1} из ${QUESTIONS.length}`}
                className={`wn-dot ${i === index ? 'is-active' : ''}`} onClick={() => goTo(i, i > index ? 1 : -1)} />
            ))}
          </div>
          <div className="wn-arrows">
            <button type="button" className="wn-arrow" aria-label="Предыдущий вопрос" onClick={goPrev}><IconArrowLeft /></button>
            <button type="button" className="wn-arrow" aria-label="Следующий вопрос" onClick={goNext}><IconArrowRight /></button>
          </div>
        </div>
        {!reduced && (
          <button type="button" className="wn-pause" aria-pressed={userPaused} onClick={() => setUserPaused((p) => !p)}>
            {userPaused ? 'Продолжить' : 'Пауза'}
          </button>
        )}
      </div>
    </section>
  )
}
