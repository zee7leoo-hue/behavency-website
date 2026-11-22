import React, { useEffect, useState } from 'react'
import { createPortal } from 'react-dom'
import { AnimatePresence, motion } from 'framer-motion'
import { LEVELS } from './areasData'
import { AreaIcon, practiceIcon } from './AreaIcons'
import { useReducedMotion } from './hooks'
import './Explorer.css'

/* Full-screen explorer for the six areas: Model → Practices → Behaviours.
   It is drawn on the same 400px-wide canvas as the rest of the site and scaled to the screen (--s). */

const TABS = ['Model', 'Practices', 'Behaviours']
const SOFT = [0.22, 1, 0.36, 1]
/* keep hyphenated words (cross-team) on one line */
const nb = (t) => t.split(/(\S+-\S+)/).map((s, i) => (i % 2 ? <span key={i} className="ax-nb">{s}</span> : s))
const pad = (n) => String(n + 1).padStart(2, '0')

const Chevron = ({ dir = 'right' }) => (
  <svg className="ax-chev" viewBox="0 0 12 20" aria-hidden="true">
    {dir === 'right' ? <path d="M2.5 2.5l7 7.5-7 7.5" /> : <path d="M9.5 2.5l-7 7.5 7 7.5" />}
  </svg>
)
const Caret = () => (
  <svg className="ax-caret" viewBox="0 0 20 12" aria-hidden="true"><path d="M2 2.5l8 7 8-7" /></svg>
)

function Head({ area, q }) {
  return (
    <div className="ax-head">
      <span className="ax-head-ico"><AreaIcon name={area.icon} /></span>
      <i className="ax-head-rule" aria-hidden="true" />
      <div className="ax-head-copy"><h2>{area.name}</h2><p>{q}</p></div>
    </div>
  )
}

const list = { hidden: {}, show: { transition: { staggerChildren: 0.055, delayChildren: 0.12 } } }
const item = { hidden: { opacity: 0, y: 10 }, show: { opacity: 1, y: 0, transition: { duration: 0.5, ease: SOFT } } }

export default function Explorer({ initialId, level: lvIndex = 0, onClose }) {
  const LV = LEVELS[lvIndex]
  const AREAS = LV.areas
  const PRACTICES_Q = LV.pq
  const BEHAVIOURS_Q = LV.bq
  const reduced = useReducedMotion()
  const [aid, setAid] = useState(initialId)
  const [tab, setTab] = useState(1)
  const [open, setOpen] = useState(0)
  const areaIndex = Math.max(0, AREAS.findIndex((a) => a.id === aid))
  const area = AREAS[areaIndex]

  useEffect(() => {
    const onKey = (e) => { if (e.key === 'Escape') onClose() }
    document.addEventListener('keydown', onKey)
    const prev = document.body.style.overflow
    document.body.style.overflow = 'hidden'
    return () => { document.removeEventListener('keydown', onKey); document.body.style.overflow = prev }
  }, [onClose])

  const back = () => onClose()
  const pickArea = (id) => { setAid(id); setOpen(0); setTab(1) }
  const pickPractice = (i) => { setOpen(i); setTab(2) }

  const slide = reduced
    ? { initial: { opacity: 0 }, animate: { opacity: 1 }, exit: { opacity: 0 }, transition: { duration: 0.15 } }
    : { initial: { opacity: 0, y: 14 }, animate: { opacity: 1, y: 0, transition: { duration: 0.45, ease: SOFT } }, exit: { opacity: 0, transition: { duration: 0.14 } } }

  return createPortal(
    <motion.div className="ax" role="dialog" aria-modal="true" aria-label="The six areas of effectiveness"
      initial={reduced ? { opacity: 0 } : { y: '100%' }} animate={reduced ? { opacity: 1 } : { y: 0 }} exit={reduced ? { opacity: 0 } : { y: '100%' }}
      transition={{ duration: reduced ? 0.15 : 0.55, ease: SOFT }}>
      <div className="ax-fit" style={{ '--ac': LV.color }}>
        <div className="ax-top">
          <button type="button" className="ax-back" aria-label="Back" onClick={back}><Chevron dir="left" /></button>
        </div>
        <div className="ax-tabs" role="tablist">
          {TABS.map((t, i) => (
            <button key={t} type="button" role="tab" aria-selected={tab === i} className={`ax-tab ${tab === i ? 'is-on' : ''}`} onClick={() => setTab(i)}>
              <b>{pad(i)}</b> {t}
            </button>
          ))}
        </div>

        <div className="ax-scroll">
          <AnimatePresence mode="wait" initial={false}>
            {tab === 0 && (
              <motion.div key="model" className="ax-pane" {...slide}>
                <h1 className="ax-title">The behavioral model</h1>
                <p className="ax-sub">Six areas that drive team effectiveness.</p>
                <motion.ul className="ax-areas" variants={list} initial="hidden" animate="show">
                  {AREAS.map((a) => (
                    <motion.li key={a.id} variants={item}>
                      <button type="button" className={`ax-area ${a.id === aid ? 'is-sel' : ''}`} onClick={() => pickArea(a.id)}>
                        <span className="ax-area-ico"><AreaIcon name={a.icon} /></span>
                        <span className="ax-area-name">{a.name}</span>
                        <Chevron />
                      </button>
                    </motion.li>
                  ))}
                </motion.ul>
              </motion.div>
            )}

            {tab === 1 && (
              <motion.div key={`prac-${aid}`} className="ax-pane" {...slide}>
                <Head area={area} q={PRACTICES_Q} />
                <hr className="ax-hr" />
                <h3 className="ax-label">PRACTICES</h3>
                <motion.ul className="ax-pracs" variants={list} initial="hidden" animate="show">
                  {area.practices.map((p, i) => (
                    <motion.li key={p.name} variants={item}>
                      <button type="button" className="ax-prac" onClick={() => pickPractice(i)}>
                        <span className="ax-prac-ico"><AreaIcon name={practiceIcon(areaIndex, i)} /></span>
                        <span className="ax-prac-name">{nb(p.name)}</span>
                        <Chevron />
                      </button>
                    </motion.li>
                  ))}
                </motion.ul>
              </motion.div>
            )}

            {tab === 2 && (
              <motion.div key={`beh-${aid}`} className="ax-pane" {...slide}>
                <Head area={area} q={BEHAVIOURS_Q} />
                <hr className="ax-hr" />
                <h3 className="ax-label">BEHAVIOURAL MANIFESTATIONS</h3>
                <motion.ul className="ax-accs" variants={list} initial="hidden" animate="show">
                  {area.practices.map((p, i) => (
                    <motion.li key={p.name} variants={item} className={`ax-acc ${open === i ? 'is-open' : ''}`}>
                      <button type="button" className="ax-acc-head" aria-expanded={open === i} onClick={() => setOpen(open === i ? -1 : i)}>
                        <span className="ax-badge">{pad(i)}</span>
                        <span className="ax-acc-name">{nb(p.name)}</span>
                        <Caret />
                      </button>
                      <div className="ax-acc-body"><div className="ax-acc-in">
                        <ul>{p.items.map((t) => <li key={t}>{t}</li>)}</ul>
                      </div></div>
                    </motion.li>
                  ))}
                </motion.ul>
              </motion.div>
            )}
          </AnimatePresence>
        </div>
      </div>
    </motion.div>,
    document.body,
  )
}
