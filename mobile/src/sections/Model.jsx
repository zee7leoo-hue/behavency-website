import React, { useCallback, useState } from 'react'
import { AnimatePresence } from 'framer-motion'
import { useInView } from '../hooks'
import { LEVELS } from '../areasData'
import { AreaIcon } from '../AreaIcons'
import Explorer from '../Explorer'
import SingleExplorer from '../SingleExplorer'
import './Model.css'

/* "The behavioural model" (mobile): one framework, three levels. */


export default function Model({ single = false }) {
  const [ref, seen] = useInView(0.25)
  const [openId, setOpenId] = useState(null)
  const [lv, setLv] = useState(0)
  const level = LEVELS[lv]
  const close = useCallback(() => setOpenId(null), [])

  return (
    <section ref={ref} className={`bm ${seen ? 'is-in' : ''}`} id="behavioural-model">
      <div className="bm-top">
      <div className="bm-in">
      <div className="bm-eyebrow rv" style={{ '--i': 0 }}>
        <i aria-hidden="true" /><span>THE BEHAVIOURAL MODEL</span><i aria-hidden="true" />
      </div>

      <h2 className="bm-title rv" style={{ '--i': 1 }}>
        One framework. <em>Different levels of the organization.</em>
      </h2>

      <p className="bm-text rv" style={{ '--i': 2 }}>
        Across all three levels, we use the same six areas of effectiveness, while the specific behaviours are tailored to each level — capturing what effective leadership and teamwork look like in practice.
      </p>

      <div className="bm-stage-slot">
      <div className="bm-stage">
        <svg className="bm-ring" viewBox="0 0 400 130" aria-hidden="true">
          <defs>
            <linearGradient id={single ? 'bmRing2' : 'bmRing'} x1="0" y1="0" x2="1" y2="0">
              <stop offset="0" stopColor="#c4c6ea" /><stop offset=".5" stopColor="#cfd1ee" /><stop offset="1" stopColor="#c4c6ea" />
            </linearGradient>
          </defs>
          <ellipse className="bm-ring-line" cx="200" cy="64" rx="171" ry="33" fill="none" stroke={`url(#${single ? 'bmRing2' : 'bmRing'})`} strokeWidth="1.05" />
        </svg>

        <div className="bm-card bm-card--l"><i /></div>
        <div className="bm-card bm-card--r"><i /></div>
        <div className="bm-card bm-card--c"><i /></div>

        <div className="bm-lab bm-lab--l">
          <svg viewBox="0 0 24 24" aria-hidden="true"><circle cx="12" cy="7.4" r="3.6" /><path d="M4.6 20.2c0-4 3.3-6.4 7.4-6.4s7.4 2.4 7.4 6.4" /></svg>
          <span>Line<br />managers</span>
        </div>
        <div className="bm-lab bm-lab--c">
          <svg viewBox="0 0 34 26" aria-hidden="true"><circle cx="11" cy="7.5" r="4.4" /><circle cx="22.4" cy="6.6" r="3.9" /><path d="M2.4 23.6c0-4.8 3.7-7.6 8.6-7.6s8.6 2.8 8.6 7.6" /><path d="M20.2 15.4c.8-.3 1.7-.4 2.5-.4 4.4 0 8.4 2.4 8.4 7" /></svg>
          <span>Mid-level<br />managers</span>
        </div>
        <div className="bm-lab bm-lab--r">
          <svg viewBox="0 0 38 26" aria-hidden="true"><circle cx="19" cy="6" r="4.4" /><circle cx="7.4" cy="10.4" r="3.4" /><circle cx="30.6" cy="10.4" r="3.4" /><path d="M10.6 23.6c0-4.6 3.5-7.4 8.4-7.4s8.4 2.8 8.4 7.4" /><path d="M2 22.4c0-3.2 2.2-5.2 5.4-5.2M36 22.4c0-3.2-2.2-5.2-5.4-5.2" /></svg>
          <span>Teams</span>
        </div>

        <div className="bm-pill">Same areas. Different expectations.</div>
      </div>
      </div>
      </div>
      <button type="button" className="bm-next" aria-label="Scroll to the six areas" onClick={() => document.querySelector('.bm-areas')?.scrollIntoView({ behavior: 'smooth', block: 'start' })}>
        <svg viewBox="0 0 26 15" aria-hidden="true"><path d="M2 2l11 11L24 2" /></svg>
      </button>
      </div>

      <div className="bm-areas">
        <h2 className="bm-areas-title rv" style={{ '--i': 0 }}>The six areas of effectiveness</h2>
        <p className="bm-areas-sub rv" style={{ '--i': 1 }}>Explore the behavioural areas of effectiveness across three organizational levels.</p>
        <div className="bm-tabs rv" style={{ '--i': 2, '--lc': level.color }} role="tablist" aria-label="Organizational level">
          {LEVELS.map((l, i) => (
            <button key={l.id} type="button" role="tab" aria-selected={lv === i} className={`bm-tab ${lv === i ? 'is-on' : ''}`} style={{ '--tc': l.color }} onClick={() => setLv(i)}>{l.label}</button>
          ))}
        </div>
        <ul className="bm-areas-list" style={{ '--lc': level.color }}>
          {level.areas.map((a, i) => (
            <li key={a.id} className="bm-area rv" style={{ '--i': 2 + i }}>
              <button type="button" className="bm-area-btn" aria-haspopup="dialog" onClick={() => setOpenId(a.id)}>
                <span className="bm-area-ico"><AreaIcon name={a.icon} /></span>
                <span className="bm-area-name">{a.name}</span>
                <svg className="bm-area-go" viewBox="0 0 10 16" aria-hidden="true"><path d="M2 2l6 6-6 6" /></svg>
              </button>
            </li>
          ))}
        </ul>
      </div>
      <AnimatePresence>{openId && (single
        ? <SingleExplorer key="explorer" areaId={openId} level={lv} onClose={close} />
        : <Explorer key="explorer" initialId={openId} level={lv} onClose={close} />)}</AnimatePresence>
    </section>
  )
}
