import React, { useEffect } from 'react'
import { createPortal } from 'react-dom'
import { motion } from 'framer-motion'
import { LEVELS } from './areasData'
import { AreaIcon } from './AreaIcons'
import { useReducedMotion } from './hooks'
import './Explorer.css'
import './SingleExplorer.css'

/* Version 2 of the area screen: practices and their behaviours together on one screen. */

const SOFT = [0.22, 1, 0.36, 1]
const pad = (n) => String(n + 1).padStart(2, '0')
const SUB = {
  mid: 'What effective managers do and how it shows up in practice.',
  line: 'What effective managers do and how it shows up in practice.',
  team: 'What effective teams do and how it shows up in practice.',
}

const list = { hidden: {}, show: { transition: { staggerChildren: 0.07, delayChildren: 0.18 } } }
const item = { hidden: { opacity: 0, y: 12 }, show: { opacity: 1, y: 0, transition: { duration: 0.55, ease: SOFT } } }

export default function SingleExplorer({ areaId, level: lvIndex = 0, onClose }) {
  const reduced = useReducedMotion()
  const LV = LEVELS[lvIndex]
  const area = LV.areas.find((a) => a.id === areaId) || LV.areas[0]

  useEffect(() => {
    const onKey = (e) => { if (e.key === 'Escape') onClose() }
    document.addEventListener('keydown', onKey)
    const prev = document.body.style.overflow, prevH = document.documentElement.style.overflow
    document.body.style.overflow = 'hidden'
    document.documentElement.style.overflow = 'hidden'
    return () => { document.removeEventListener('keydown', onKey); document.body.style.overflow = prev; document.documentElement.style.overflow = prevH }
  }, [onClose])

  return createPortal(
    <motion.div className="ax" role="dialog" aria-modal="true" aria-label={area.name}
      initial={reduced ? { opacity: 0 } : { y: '100%' }} animate={reduced ? { opacity: 1 } : { y: 0 }} exit={reduced ? { opacity: 0 } : { y: '100%' }}
      transition={{ duration: reduced ? 0.15 : 0.55, ease: SOFT }}>
      <div className="ax-fit sx" style={{ '--ac': LV.color }}>
        <div className="ax-top">
          <button type="button" className="ax-back" aria-label="Back" onClick={onClose}>
            <svg className="ax-chev" viewBox="0 0 12 20" aria-hidden="true"><path d="M9.5 2.5l-7 7.5 7 7.5" /></svg>
          </button>
        </div>
        <div className="ax-scroll sx-scroll">
          <div className="sx-head">
            <span className="sx-ico"><AreaIcon name={area.icon} /></span>
            <h1>{area.name}</h1>
          </div>
          <p className="sx-sub">{SUB[LV.id]}</p>
          <motion.ol className="sx-list" variants={list} initial="hidden" animate="show">
            {area.practices.map((p, i) => (
              <motion.li key={p.name} className="sx-row" variants={item}>
                <div className="sx-line">
                  <span className="sx-num">{pad(i)}</span>
                  <i className="sx-bar" aria-hidden="true" />
                  <h2>{p.name}</h2>
                </div>
                <ul className="sx-items">
                  {p.items.map((t) => <li key={t}>{t}</li>)}
                </ul>
              </motion.li>
            ))}
          </motion.ol>
        </div>
      </div>
    </motion.div>,
    document.body,
  )
}
