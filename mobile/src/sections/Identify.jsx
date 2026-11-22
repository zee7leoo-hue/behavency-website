import React, { useEffect, useState } from 'react'
import { createPortal } from 'react-dom'
import { AnimatePresence, motion } from 'framer-motion'
import { IconUser, IconUsers, IconBars, IconZap, IconChat, IconArrowRight, IconClose } from '../Icons'
import { useInView, useCountUp, useReducedMotion } from '../hooks'
import './Identify.css'

/* "Identify" (mobile): we start by listening. The five sources open as a bottom sheet, like the desktop pop-ups. */

const SOURCES = [
  {
    num: '01', name: 'Managerial Profile', tone: 'blue', icon: <IconUser />,
    modal: {
      intro: 'The starting point of every Behavency programme. The manager reflects on their own behaviour across the six areas of the Behavency model — not as a test, but as a structured act of self-awareness.',
      examines: 'The manager\'s own perception of how they lead, communicate, delegate, and hold accountability across six defined behavioural areas.',
      reveals: 'Where a manager believes they are strong — and where they sense gaps. The baseline against which all other data is measured.',
      matters: 'Self-awareness is the foundation of development. Without it, external feedback has no anchor. The Managerial Profile gives the manager a clear starting position before they hear from anyone else.',
    },
  },
  {
    num: '02', name: '360° Feedback', tone: 'violet', icon: <IconUsers />,
    modal: {
      intro: 'Those who work closest to the manager — direct reports, peers, and their own manager — rate the same six behavioural areas independently. Their combined picture sits alongside the manager\'s own.',
      examines: 'How the manager\'s behaviour is experienced by the people around them, using the same six-area framework as the self-assessment.',
      reveals: 'The gap between how a manager sees themselves and how others experience them. This gap — large or small — is where the most important development conversations begin.',
      matters: 'Blind spots are invisible by definition. 360° data makes them visible, giving the manager something concrete to work with rather than vague impressions.',
    },
  },
  {
    num: '03', name: 'Workplace Effectiveness Survey', tone: 'teal', icon: <IconBars />,
    modal: {
      intro: 'This survey explores how the broader organization enables or hinders the manager\'s effectiveness. It captures the experiences of people who work across the organization, highlighting structural, cultural, and contextual factors that influence performance.',
      examines: 'How the organization\'s systems, processes, culture and environment help or block the manager from being effective.',
      reveals: 'Patterns and barriers outside the manager\'s direct control, providing essential context for development and a more complete picture of their effectiveness.',
      matters: 'Managerial effectiveness is shaped not only by individual behaviour, but also by the environment. Understanding organizational enablers and blockers leads to more relevant development and better, more sustainable results.',
    },
  },
  {
    num: '04', name: 'Resilience to Change', tone: 'amber', icon: <IconZap />,
    modal: {
      intro: 'A psychometric assessment that examines how a manager responds when circumstances change, under pressure, or when facing ambiguity. The results are not scored high or low — they reveal a pattern.',
      examines: 'The individual\'s characteristic response to change: what they default to, what they resist, and how their reactions affect the people around them.',
      reveals: 'Behavioural tendencies that may be invisible in stable conditions but become significant drivers of team experience during periods of uncertainty or transformation.',
      matters: 'Organizations are rarely stable. A manager\'s resilience profile tells you how they will show up when it matters most — and where they may need support to lead effectively through change.',
    },
  },
  {
    num: '05', name: 'Structured Interview', tone: 'lilac', icon: <IconChat />,
    modal: {
      intro: 'A one-to-one conversation led by a Behavency assessor or a trained HR professional, using the assessment data as its foundation. It gives the manager space to contextualize what the data shows and add nuance that numbers alone cannot capture.',
      examines: 'The manager\'s own interpretation of their assessment results, their development history, and the organizational context in which they operate.',
      reveals: 'Qualitative depth that enriches quantitative data — uncovering intent, circumstance, and readiness for development that would otherwise remain hidden.',
      matters: 'Data without dialogue is incomplete. The structured interview ensures that the assessment leads to a development conversation, not just a report.',
    },
  },
]

const SOFT = [0.22, 1, 0.36, 1]

export default function Identify() {
  const [ref, seen] = useInView(0.2)
  const reduced = useReducedMotion()
  const [open, setOpen] = useState(null)
  const sources = useCountUp(5, seen, { delay: 700, duration: 900 })
  const areas = useCountUp(6, seen, { delay: 850, duration: 900 })

  useEffect(() => {
    if (!open) return undefined
    const onKey = (e) => { if (e.key === 'Escape') setOpen(null) }
    document.addEventListener('keydown', onKey)
    document.body.style.overflow = 'hidden'
    document.documentElement.style.overflow = 'hidden'
    return () => { document.removeEventListener('keydown', onKey); document.body.style.overflow = ''; document.documentElement.style.overflow = '' }
  }, [open])

  return (
    <section ref={ref} className={`id ${seen ? 'is-in' : ''}`} id="identify">
      <h2 className="id-title rv" style={{ '--i': 0 }}>We start by <em>listening</em> — to managers, their teams, and to the organization around them.</h2>

      <p className="id-stage rv" style={{ '--i': 1 }}><b>01</b><i aria-hidden="true">—</i><strong>Identify</strong><u aria-hidden="true" /><span>Reveal the strengths and gaps</span></p>
      <p className="id-text rv" style={{ '--i': 2 }}>Most assessments rely on self-perception. We combine five sources of evidence to build a more complete picture of managerial effectiveness.</p>

      <div className="id-stats rv" style={{ '--i': 3 }}>
        <div className="id-stat"><b>{sources}</b><div><strong>Sources of evidence</strong><span>per manager</span></div></div>
        <i aria-hidden="true" />
        <div className="id-stat id-stat--b"><b>{areas}</b><div><strong>Behavioural areas</strong><span>explored through<br />MBP, 360° and interviews</span></div></div>
      </div>

      <h3 className="id-explore rv" style={{ '--i': 4 }}>Explore the five sources</h3>
      <ul className="id-list rv" style={{ '--i': 5 }}>
        {SOURCES.map((s, i) => (
          <li key={s.num} className="id-item" style={{ '--k': i }}>
            <button type="button" onClick={() => setOpen(s)} aria-haspopup="dialog">
              <span className={`id-ico id-ico--${s.tone}`}>{s.icon}</span>
              <span className="id-name">{s.name}</span>
              <span className="id-go" aria-hidden="true"><IconArrowRight /></span>
            </button>
          </li>
        ))}
      </ul>

      {createPortal(<AnimatePresence>
        {open && (
          <motion.div className="id-overlay" key="overlay" initial={{ opacity: 0 }} animate={{ opacity: 1, transition: { duration: reduced ? .1 : .4 } }} exit={{ opacity: 0, transition: { duration: .25 } }} onClick={() => setOpen(null)}>
            <motion.div className="id-sheet" role="dialog" aria-modal="true" aria-label={open.name}
              variants={reduced ? calmSheet : sheet} initial="hidden" animate="show" exit="exit"
              onClick={(e) => e.stopPropagation()}>
              <div className="id-fit">
                <div className="id-top">
                  <button type="button" className="id-close" aria-label="Close" onClick={() => setOpen(null)}><IconClose /></button>
                </div>
                <div className="id-body">
                  <motion.span className="id-sheet-num" variants={part}>{open.num}</motion.span>
                  <motion.h3 variants={part}>{open.name}</motion.h3>
                  <motion.p className="id-sheet-intro" variants={part}>{open.modal.intro}</motion.p>
                  <motion.div className="id-sheet-row" variants={part}><h4>What it examines</h4><p>{open.modal.examines}</p></motion.div>
                  <motion.div className="id-sheet-row" variants={part}><h4>What it reveals</h4><p>{open.modal.reveals}</p></motion.div>
                  <motion.div className="id-sheet-row" variants={part}><h4>Why it matters</h4><p>{open.modal.matters}</p></motion.div>
                </div>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>, document.body)}
    </section>
  )
}

const sheet = {
  hidden: { y: '100%' },
  show: { y: 0, transition: { duration: .6, ease: SOFT, delayChildren: .22, staggerChildren: .07 } },
  exit: { y: '100%', transition: { duration: .35, ease: [0.4, 0, 1, 1] } },
}
const calmSheet = { hidden: { opacity: 0 }, show: { opacity: 1, transition: { duration: .15 } }, exit: { opacity: 0, transition: { duration: .1 } } }
const part = { hidden: { opacity: 0, y: 10 }, show: { opacity: 1, y: 0, transition: { duration: .5, ease: SOFT } } }
