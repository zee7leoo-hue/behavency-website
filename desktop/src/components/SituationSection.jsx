import React, { useCallback, useEffect, useRef, useState } from 'react'
import './SituationSection.css'

/* "What's at stake" + the rotating "Sound familiar?" card (each card ends with a research figure and its source).
   The navy scene (headline and copy) stays still; only the white card rotates its question.
   - one question at a time, held long enough to read
   - the next one slides in from the right while the previous slides out to the left, softly blurred
   - dots, arrows and a "1 / 4" counter; the active dot fills over the 7 seconds a card is shown
   - rotation pauses on hover / focus, with the Pause button, off screen and with reduced motion */

const QUESTIONS = [
  { topic: 'Manager burnout', lead: ['Our managers are'], accent: 'overloaded.', support: ['More on their plate than ever,', 'and their motivation is dropping.'],
    stat: '27% → 22%', statText: 'managers who feel engaged at work, in one year', src: 'Gallup, 2026', href: 'https://www.gallup.com/file/workplace/712607/SOGW_Global-Press-Release-2026-04.pdf' },
  { topic: 'Change fatigue', lead: ['One more restructure,'], accent: 'one more new system.', support: ['Managers are expected to lead it.', 'Most were never prepared for it.'],
    stat: '74%', statText: 'of HR leaders say managers aren’t ready to lead change', src: 'Gartner, 2024', href: 'https://www.gartner.com/en/newsroom/press-releases/2024-10-15-gartner-survey-finds-leader-and-manager-development-tops-hrleaders-list' },
  { topic: 'Stretched too thin', lead: ['Our managers lead'], accent: 'bigger teams.', support: ['And they still have their own work,', 'so each person gets less of their time.'],
    stat: '10.9 → 12.1', statText: 'average team size per manager, in one year', src: 'Gallup, 2025', href: 'https://www.gallup.com/workplace/700718/managers-teams-getting-bigger.aspx' },
  { topic: 'Unprepared managers', lead: ['We promoted our best'], accent: 'people to managers.', support: ['We checked their results,', 'not how they lead.'],
    stat: '82%', statText: 'of new managers had no management training', src: 'CMI, 2023', href: 'https://fortune.com/2023/10/16/bosses-accidental-formal-training-workers-quit-cmi/' },
]

const HOLD_MS = 7000   // each card is shown for 7 seconds

export default function SituationSection({ id = 'situation', variant = 'wave' }) {
  const plain = variant === 'plain'
  const root = useRef(null)
  const [visible, setVisible] = useState(false)

  const [index, setIndex] = useState(0)
  const [prevIndex, setPrevIndex] = useState(null)
  const [dir, setDir] = useState(1)               // 1 = next (slides in from the right), -1 = back
  const [userPaused, setUserPaused] = useState(false)
  const [hovering, setHovering] = useState(false)
  const [focused, setFocused] = useState(false)   // keyboard focus anywhere inside the card
  const [navTick, setNavTick] = useState(0)        // bumped on every arrow / dot click: restarts the full interval
  const [reduced, setReduced] = useState(false)

  useEffect(() => {
    const mq = window.matchMedia('(prefers-reduced-motion: reduce)')
    const sync = () => setReduced(mq.matches)
    sync()
    if (mq.addEventListener) mq.addEventListener('change', sync)
    else mq.addListener(sync)
    return () => {
      if (mq.removeEventListener) mq.removeEventListener('change', sync)
      else mq.removeListener(sync)
    }
  }, [])

  useEffect(() => {
    const el = root.current
    if (!el) return undefined
    let timer = null
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (timer) clearTimeout(timer)
          if (entry.isIntersecting) timer = setTimeout(() => setVisible(true), 150)
          else setVisible(false)
        })
      },
      { threshold: 0.25, rootMargin: '-5% 0px -15% 0px' }
    )
    observer.observe(el)
    return () => { if (timer) clearTimeout(timer); observer.disconnect() }
  }, [])

  const goTo = useCallback((next, direction) => {
    setIndex((current) => {
      if (next === current) return current
      setPrevIndex(current)
      setDir(direction)
      return next
    })
  }, [])

  const goNext = useCallback(() => goTo((index + 1) % QUESTIONS.length, 1), [goTo, index])
  const goPrev = useCallback(() => goTo((index - 1 + QUESTIONS.length) % QUESTIONS.length, -1), [goTo, index])

  // Clicks on an arrow or a dot (and the arrow keys): change card and restart the full 7 seconds
  const userNav = (fn) => { fn(); setNavTick((t) => t + 1) }

  // Automatic rotation: only while on screen, not paused, not hovered or focused, not reduced-motion.
  // A pause keeps the time already spent on the card, so the timer stays in step with the dot's fill;
  // a new card (or a click) starts again from the full interval.
  const autoPlaying = visible && !userPaused && !hovering && !focused && !reduced
  const remaining = useRef(HOLD_MS)
  const cycleKey = useRef(null)
  useEffect(() => {
    const key = `${index}:${navTick}`
    if (cycleKey.current !== key) { cycleKey.current = key; remaining.current = HOLD_MS }
    if (!autoPlaying) return undefined
    const start = performance.now()
    const t = setTimeout(goNext, remaining.current)
    return () => {
      clearTimeout(t)
      remaining.current = Math.max(0, remaining.current - (performance.now() - start))
    }
  }, [autoPlaying, goNext, index, navTick])

  const onKeyDown = (e) => {
    if (e.key === 'ArrowRight') { e.preventDefault(); userNav(goNext) }
    if (e.key === 'ArrowLeft') { e.preventDefault(); userNav(goPrev) }
  }

  const slidePos = (i) => {
    if (i === index) return 'active'
    if (i === prevIndex) return dir === 1 ? 'out-left' : 'out-right'
    return dir === 1 ? 'wait-right' : 'wait-left'
  }

  return (
    <section ref={root} className="sx-outer" id={id}>
      <div className={`sx ${plain ? 'sx--plain' : ''} ${visible ? 'is-visible' : ''}`} data-behavency>
      <div className="sx-copy">
        <p className="sx-eyebrow">WHAT’S AT STAKE</p>
        <span className="sx-eyebar" aria-hidden="true" />
        <h2 className="sx-title">The risk you can <em>see</em>{' '}<br /><em>coming.</em></h2>
        <p className="sx-sub">
          When plans keep changing, line managers and{' '}<br />
          managers of managers carry the weight. If they lose their{' '}<br />
          footing, teams lose direction — long before it{' '}<br />
          shows in the numbers.
        </p>
        <p className="sx-note">
          You can’t control the uncertainty. You can{' '}<br />
          control how ready your managers are.
        </p>
      </div>

      <div
        className={`sx-card ${autoPlaying ? '' : 'is-paused'}`}
        style={{ '--sx-interval': `${HOLD_MS}ms` }}
        role="group"
        aria-roledescription="carousel"
        aria-label="A reality for many HR teams"
        onMouseEnter={() => setHovering(true)}
        onMouseLeave={() => setHovering(false)}
        onFocus={() => setFocused(true)}
        onBlur={(e) => { if (!e.currentTarget.contains(e.relatedTarget)) setFocused(false) }}
        onKeyDown={onKeyDown}
      >
        <div className="sx-card-head">
          <span className="sx-card-label">SOUND FAMILIAR?</span>
          <span className="sx-card-count" aria-hidden="true">{index + 1} / {QUESTIONS.length}</span>
        </div>

        <div className="sx-stage" aria-live={autoPlaying ? 'off' : 'polite'}>
          {QUESTIONS.map((q, i) => (
            <div
              key={q.accent}
              className={`sx-slide sx-slide--${slidePos(i)}`}
              aria-hidden={i !== index}
              role="group"
              aria-roledescription="slide"
              aria-label={`${i + 1} of ${QUESTIONS.length}: ${q.topic}`}
            >
              <p className="sx-q">
                {q.lead.map((line) => <span className="sx-lead" key={line}>{line}</span>)}
                <span className="sx-accent">{q.accent}</span>
              </p>
              <p className="sx-support">{q.support.map((line) => <span key={line}>{line}</span>)}</p>
              <p className="sx-stat">
                <b>{q.stat}</b>
                <span className="sx-txt">{q.statText}</span>
                <a className="sx-src" href={q.href} target="_blank" rel="noopener" tabIndex={i === index ? undefined : -1}>{q.src} ↗</a>
              </p>
            </div>
          ))}
        </div>

        <div className="sx-dots" role="tablist" aria-label="Choose a question">
          {QUESTIONS.map((q, i) => (
            <button
              key={q.accent}
              type="button"
              role="tab"
              aria-selected={i === index}
              aria-label={`Question ${i + 1} of ${QUESTIONS.length}`}
              className={`sx-dot ${i === index ? 'is-active' : ''}`}
              onClick={() => userNav(() => goTo(i, i > index ? 1 : -1))}
            />
          ))}
        </div>

        <div className="sx-buttons">
          <button type="button" className="sx-btn" aria-label="Previous question" onClick={() => userNav(goPrev)}>
            <svg viewBox="0 0 24 24" aria-hidden="true"><path d="M14.5 5.5L8 12l6.5 6.5" /></svg>
          </button>
          <button type="button" className="sx-btn sx-btn--next" aria-label="Next question" onClick={() => userNav(goNext)}>
            <svg viewBox="0 0 24 24" aria-hidden="true"><path d="M9.5 5.5L16 12l-6.5 6.5" /></svg>
          </button>
        </div>

        {/* Pause control for keyboard / screen-reader users: invisible until it receives focus */}
        {!reduced && (
          <button type="button" className="sx-pause" aria-pressed={userPaused} onClick={() => setUserPaused((p) => !p)}>
            {userPaused ? 'Resume rotation' : 'Pause rotation'}
          </button>
        )}
      </div>
      </div>
    </section>
  )
}
