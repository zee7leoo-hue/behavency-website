import StagePill from './StagePill'
import React, { useState } from 'react'
import { motion, AnimatePresence, useReducedMotion } from 'framer-motion'
import { useInView } from 'react-intersection-observer'
import { X, ArrowRight } from 'lucide-react'
import './StageIdentify.css'

/* ── Assessment data — each row opens a modal ── */
const sources = [
  {
    num: '01',
    name: 'Managerial Profile',
    desc: 'The manager assesses their own behavioural tendencies across six areas of effective management.',
    modal: {
      title: 'Managerial Profile',
      intro: 'The starting point of every Behavency programme. The manager reflects on their own behaviour across the six areas of the Behavency model — not as a test, but as a structured act of self-awareness.',
      examines: 'The manager\'s own perception of how they lead, communicate, delegate, and hold accountability across six defined behavioural areas.',
      reveals: 'Where a manager believes they are strong — and where they sense gaps. The baseline against which all other data is measured.',
      matters: 'Self-awareness is the foundation of development. Without it, external feedback has no anchor. The Managerial Profile gives the manager a clear starting position before they hear from anyone else.',
    },
  },
  {
    num: '02',
    name: '360° Feedback',
    desc: 'The people around the manager share how they experience the same six areas. Self-perception meets reality.',
    modal: {
      title: '360° Feedback',
      intro: 'Those who work closest to the manager — direct reports, peers, and their own manager — rate the same six behavioural areas independently. Their combined picture sits alongside the manager\'s own.',
      examines: 'How the manager\'s behaviour is experienced by the people around them, using the same six-area framework as the self-assessment.',
      reveals: 'The gap between how a manager sees themselves and how others experience them. This gap — large or small — is where the most important development conversations begin.',
      matters: 'Blind spots are invisible by definition. 360° data makes them visible, giving the manager something concrete to work with rather than vague impressions.',
    },
  },
  {
    num: '03',
    name: 'Workplace Effectiveness Survey',
    desc: 'What in the organisation helps or blocks this manager from being effective? It identifies key conditions and barriers, which we then connect to the areas they may affect.',
    modal: {
      title: 'Workplace Effectiveness Survey',
      intro: 'This survey explores how the broader organisation enables or hinders the manager\'s effectiveness. It captures the experiences of people who work across the organisation, highlighting structural, cultural, and contextual factors that influence performance.',
      examines: 'How the organisation\'s systems, processes, culture and environment help or block the manager from being effective.',
      reveals: 'Patterns and barriers outside the manager\'s direct control, providing essential context for development and a more complete picture of their effectiveness.',
      matters: 'Managerial effectiveness is shaped not only by individual behaviour, but also by the environment. Understanding organisational enablers and blockers leads to more relevant development and better, more sustainable results.',
    },
  },
  {
    num: '04',
    name: 'Resilience to Change',
    desc: "How does this person respond when circumstances shift? It identifies patterns and blind spots — not a \"higher is better\" score.",
    modal: {
      title: 'Resilience to Change',
      intro: 'A psychometric assessment that examines how a manager responds when circumstances change, under pressure, or when facing ambiguity. The results are not scored high or low — they reveal a pattern.',
      examines: 'The individual\'s characteristic response to change: what they default to, what they resist, and how their reactions affect the people around them.',
      reveals: 'Behavioural tendencies that may be invisible in stable conditions but become significant drivers of team experience during periods of uncertainty or transformation.',
      matters: 'Organisations are rarely stable. A manager\'s resilience profile tells you how they will show up when it matters most — and where they may need support to lead effectively through change.',
    },
  },
  {
    num: '05',
    name: 'Structured Interview',
    desc: 'A guided conversation that explores the same six areas in depth, adding context, examples and meaning to the data.',
    modal: {
      title: 'Structured Interview',
      intro: 'A one-to-one conversation led by a Behavency assessor or a trained HR professional, using the assessment data as its foundation. It gives the manager space to contextualise what the data shows and add nuance that numbers alone cannot capture.',
      examines: 'The manager\'s own interpretation of their assessment results, their development history, and the organisational context in which they operate.',
      reveals: 'Qualitative depth that enriches quantitative data — uncovering intent, circumstance, and readiness for development that would otherwise remain hidden.',
      matters: 'Data without dialogue is incomplete. The structured interview ensures that the assessment leads to a development conversation, not just a report.',
    },
  },
]

/* ── Pop-up motion: soft overlay fade, the card eases up and settles, then its content
      follows one piece at a time. Exit is quicker so closing feels light. ── */
const SOFT = [0.22, 1, 0.36, 1] /* gentle ease-out */
const overlayMotion = {
  hidden: { opacity: 0 },
  show: { opacity: 1, transition: { duration: 0.45, ease: 'easeOut' } },
  exit: { opacity: 0, transition: { duration: 0.3, ease: 'easeIn', delay: 0.04 } },
}
const cardMotion = {
  hidden: { opacity: 0, y: 26, scale: 0.96 },
  show: {
    opacity: 1, y: 0, scale: 1,
    transition: { duration: 0.65, ease: SOFT, delay: 0.06, delayChildren: 0.22, staggerChildren: 0.075 },
  },
  exit: { opacity: 0, y: 12, scale: 0.985, transition: { duration: 0.28, ease: [0.4, 0, 1, 1] } },
}
const partMotion = {
  hidden: { opacity: 0, y: 10 },
  show: { opacity: 1, y: 0, transition: { duration: 0.55, ease: SOFT } },
}
/* for visitors who prefer reduced motion: plain, quick fades only */
const calmOverlay = { hidden: { opacity: 0 }, show: { opacity: 1, transition: { duration: 0.15 } }, exit: { opacity: 0, transition: { duration: 0.1 } } }
const calmCard = { hidden: { opacity: 0 }, show: { opacity: 1, transition: { duration: 0.15 } }, exit: { opacity: 0, transition: { duration: 0.1 } } }
const calmPart = { hidden: { opacity: 1 }, show: { opacity: 1 } }

export default function StageIdentify() {
  const [ref, inView] = useInView({ triggerOnce: true, threshold: 0.07 })
  const [activeModal, setActiveModal] = useState(null)
  const reduce = useReducedMotion()
  const ov = reduce ? calmOverlay : overlayMotion
  const card = reduce ? calmCard : cardMotion
  const part = reduce ? calmPart : partMotion

  const openModal = (source) => setActiveModal(source)
  const closeModal = () => setActiveModal(null)

  return (
    <>
      <section className="identify chapter chapter--white" id="identify" ref={ref}>
        <div className="container">

          {/* Chapter label */}
          <motion.div className="identify__chapter-label"
            initial={{ opacity: 0 }} animate={inView ? { opacity: 1 } : {}} transition={{ duration: 0.5 }}>
            <StagePill num="01" title="Identify" sub="Reveal strengths and gaps" tone="blue" />
          </motion.div>

          {/* Two-column split */}
          <div className="identify__split">

            {/* LEFT — wider, ~5-line headline */}
            <motion.div className="identify__left"
              initial={{ opacity: 0, x: -28 }} animate={inView ? { opacity: 1, x: 0 } : {}} transition={{ duration: 0.7 }}>

              <h2 className="identify__headline">
                We start by<br />
                <em>listening</em> —<br />
                to managers, to their<br />
                teams, and to the<br />
                organisation around them.
              </h2>

              <p className="body-copy identify__intro">
                Most assessments ask people to assess themselves.<br />{' '}
                We go further. We collect up to five sources of evidence —<br />{' '}
                <strong>together, they create a more complete picture of managerial effectiveness.</strong>
              </p>

              {/* Only 5 + 6 metrics */}
              <div className="identify__stats">
                <div className="stat">
                  <div className="stat__val"><span className="stat__upto" style={{ fontSize: '20px', fontWeight: 600, marginRight: '7px', letterSpacing: 0 }}>Up to</span>5</div>
                  <div className="stat__label">Sources of evidence</div>
                  <div className="stat__sub">per manager</div>
                </div>
                <div className="stat">
                  <div className="stat__val">6</div>
                  <div className="stat__label">Behavioural areas</div>
                  <div className="stat__sub">explored through the Managerial Profile, 360° and interviews</div>
                </div>
              </div>
            </motion.div>

            {/* RIGHT — clickable assessment rows */}
            <motion.div className="identify__right"
              initial={{ opacity: 0, x: 28 }} animate={inView ? { opacity: 1, x: 0 } : {}} transition={{ duration: 0.7, delay: 0.12 }}>

              <div className="identify__sources">
                {sources.map((s, i) => (
                  <motion.button
                    key={s.num}
                    className="identify__source"
                    onClick={() => openModal(s)}
                    initial={{ opacity: 0, y: 14 }}
                    animate={inView ? { opacity: 1, y: 0 } : {}}
                    transition={{ delay: 0.25 + i * 0.08 }}>

                    <span className="identify__source-num">{s.num}</span>

                    <div className="identify__source-body">
                      <span className="identify__source-name">{s.name}</span>
                      <p className="identify__source-desc">{s.desc}</p>
                    </div>

                    <span className="identify__source-arrow">
                      <ArrowRight size={16} />
                    </span>
                  </motion.button>
                ))}
              </div>

            </motion.div>
          </div>
        </div>
      </section>

      {/* ── Modal ── */}
      <AnimatePresence>
        {activeModal && (
          <motion.div
            className="id-modal-overlay"
            variants={ov} initial="hidden" animate="show" exit="exit"
            onClick={closeModal}>

            <motion.div
              className="id-modal"
              role="dialog"
              aria-modal="true"
              variants={card} initial="hidden" animate="show" exit="exit"
              onClick={e => e.stopPropagation()}>

              <button className="id-modal__close" onClick={closeModal} aria-label="Close">
                <X size={20} />
              </button>

              <motion.div className="id-modal__num" variants={part}>{activeModal.num}</motion.div>
              <motion.h3 className="id-modal__title" variants={part}>{activeModal.modal.title}</motion.h3>
              <motion.p className="id-modal__intro" variants={part}>{activeModal.modal.intro}</motion.p>

              <div className="id-modal__rows">
                <motion.div className="id-modal__row" variants={part}>
                  <dt className="id-modal__row-label">What it examines</dt>
                  <dd className="id-modal__row-val">{activeModal.modal.examines}</dd>
                </motion.div>
                <motion.div className="id-modal__row" variants={part}>
                  <dt className="id-modal__row-label">What it reveals</dt>
                  <dd className="id-modal__row-val">{activeModal.modal.reveals}</dd>
                </motion.div>
                <motion.div className="id-modal__row" variants={part}>
                  <dt className="id-modal__row-label">Why it matters</dt>
                  <dd className="id-modal__row-val">{activeModal.modal.matters}</dd>
                </motion.div>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  )
}
