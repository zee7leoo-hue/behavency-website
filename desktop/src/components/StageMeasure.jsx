import StagePill from './StagePill'
import React from 'react'
import { motion } from 'framer-motion'
import { useInView } from 'react-intersection-observer'
import './StageMeasure.css'

const comparisons = [
  { area: 'Clarity & Alignment', before: 42, after: 74, color: '#1E3A5F' },
  { area: 'Execution & Accountability', before: 51, after: 79, color: '#B45309' },
  { area: 'Collaboration & Influence', before: 58, after: 81, color: '#0F766E' },
  { area: 'Trust & Inclusion', before: 69, after: 85, color: '#7C3AED' },
]

export default function StageMeasure() {
  const [ref, inView] = useInView({ triggerOnce: true, threshold: 0.07 })

  return (
    <section className="measure chapter chapter--navy" id="measure" ref={ref}>
      <div className="container">
        <div className="split split--reverse">
          {/* Before / after visual */}
          <motion.div className="split__visual"
            initial={{ opacity: 0, x: -32 }} animate={inView ? { opacity: 1, x: 0 } : {}} transition={{ duration: 0.7 }}>
            <div className="measure__report">
              <div className="measure__report-header">
                <div className="measure__report-title">Programme Results · Example</div>
              </div>
              <div className="measure__legend">
                <span><span className="measure__legend-dot" style={{ background: 'rgba(255,255,255,0.2)' }}/>Before</span>
                <span><span className="measure__legend-dot" style={{ background: 'white' }}/>After</span>
              </div>
              <div className="measure__bars">
                {comparisons.map((c, i) => (
                  <div key={i} className="measure__bar-group">
                    <span className="measure__bar-label">{c.area}</span>
                    <div className="measure__bar-rows">
                      <div className="measure__bar-track">
                        <motion.div className="measure__bar-fill measure__bar-fill--before"
                          initial={{ width: 0 }} animate={inView ? { width: `${c.before}%` } : {}}
                          transition={{ delay: 0.4 + i * 0.1, duration: 0.8 }}/>
                        <span className="measure__bar-num">{c.before}</span>
                      </div>
                      <div className="measure__bar-track">
                        <motion.div className="measure__bar-fill"
                          style={{ background: 'white' }}
                          initial={{ width: 0 }} animate={inView ? { width: `${c.after}%` } : {}}
                          transition={{ delay: 0.5 + i * 0.1, duration: 0.8 }}/>
                        <span className="measure__bar-num" style={{ color: 'white', fontWeight: 700 }}>{c.after}</span>
                      </div>
                    </div>
                    <span className="measure__bar-delta">+{c.after - c.before}</span>
                  </div>
                ))}
              </div>
              <div className="measure__summary">
                Average improvement across all areas: <strong>+29 points</strong>
              </div>
            </div>
          </motion.div>

          {/* Text */}
          <motion.div className="split__text"
            initial={{ opacity: 0, x: 32 }} animate={inView ? { opacity: 1, x: 0 } : {}} transition={{ duration: 0.7, delay: 0.1 }}>
            
            <StagePill num="04" title="Measure" sub="Prove the impact" tone="purple" style={{ marginBottom: 20 }} />

            <h2 className="headline headline--white" style={{ marginBottom: 24 }}>
              Then we run the<br/>
              assessment again.<br/>
              <em>And show you what changed.</em>
            </h2>
            <p className="body-copy body-copy--white" style={{ marginBottom: 20 }}>
              We use the same questions with the same people, six months later. The results sit side by side with where they started.
            </p>
            <p className="body-copy body-copy--white" style={{ marginBottom: 36 }}>
              This closes the ROI loop. Not with anecdote, but with data. Development that can be pointed to, measured, and reported to a board.
            </p>
            <div className="measure__timeline-wrap">
              <div className="measure__timeline">
                <div className="measure__timeline-node">
                  <svg className="measure__timeline-icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z"/>
                    <polyline points="14 2 14 8 20 8"/>
                    <line x1="16" y1="13" x2="8" y2="13"/>
                    <line x1="16" y1="17" x2="8" y2="17"/>
                    <polyline points="10 9 9 9 8 9"/>
                  </svg>
                  <span className="measure__timeline-label">Assessment</span>
                </div>
                <div className="measure__timeline-connector">
                  <div className="measure__timeline-line" />
                  <div className="measure__timeline-center">
                    <span className="measure__timeline-num">6</span>
                    <span className="measure__timeline-subnum">months later</span>
                    <p className="measure__timeline-caption">We measure what changed.</p>
                  </div>
                  <div className="measure__timeline-line" />
                </div>
                <div className="measure__timeline-node">
                  <svg className="measure__timeline-icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
                    <rect x="18" y="3" width="4" height="18" rx="1"/>
                    <rect x="10" y="8" width="4" height="13" rx="1"/>
                    <rect x="2" y="13" width="4" height="8" rx="1"/>
                  </svg>
                  <span className="measure__timeline-label">Results</span>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
