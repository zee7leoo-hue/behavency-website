import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import './ThreeStages.css';

/* ── SVG icons matching the design ── */
const IconGamepad = () => (
  <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
    <rect x="2" y="6" width="20" height="12" rx="4"/>
    <line x1="6" y1="12" x2="10" y2="12"/><line x1="8" y1="10" x2="8" y2="14"/>
    <circle cx="16" cy="11" r="0.8" fill="currentColor" stroke="none"/>
    <circle cx="18" cy="13" r="0.8" fill="currentColor" stroke="none"/>
  </svg>
);
const IconPerson = () => (
  <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
    <circle cx="12" cy="7" r="4"/><path d="M4 21v-1a8 8 0 0 1 16 0v1"/>
  </svg>
);
const IconBarChart = () => (
  <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
    <line x1="18" y1="20" x2="18" y2="10"/><line x1="12" y1="20" x2="12" y2="4"/><line x1="6" y1="20" x2="6" y2="14"/>
  </svg>
);
const IconInfo = () => (
  <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <circle cx="12" cy="12" r="10"/><line x1="12" y1="16" x2="12" y2="12"/><line x1="12" y1="8" x2="12.01" y2="8"/>
  </svg>
);
const IconUsers = () => (
  <svg width="26" height="26" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
    <path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2"/><circle cx="9" cy="7" r="4"/>
    <path d="M23 21v-2a4 4 0 0 0-3-3.87"/><path d="M16 3.13a4 4 0 0 1 0 7.75"/>
  </svg>
);
const IconClock = () => (
  <svg width="26" height="26" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
    <circle cx="12" cy="12" r="10"/><polyline points="12 6 12 12 16 14"/>
  </svg>
);
const IconGraduate = () => (
  <svg width="26" height="26" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
    <path d="M22 10v6M2 10l10-5 10 5-10 5z"/><path d="M6 12v5c3 3 9 3 12 0v-5"/>
  </svg>
);
const IconSettings = () => (
  <svg width="26" height="26" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
    <circle cx="12" cy="12" r="3"/><path d="M19.4 15a1.65 1.65 0 0 0 .33 1.82l.06.06a2 2 0 0 1-2.83 2.83l-.06-.06a1.65 1.65 0 0 0-1.82-.33 1.65 1.65 0 0 0-1 1.51V21a2 2 0 0 1-4 0v-.09A1.65 1.65 0 0 0 9 19.4a1.65 1.65 0 0 0-1.82.33l-.06.06a2 2 0 0 1-2.83-2.83l.06-.06A1.65 1.65 0 0 0 4.68 15a1.65 1.65 0 0 0-1.51-1H3a2 2 0 0 1 0-4h.09A1.65 1.65 0 0 0 4.6 9a1.65 1.65 0 0 0-.33-1.82l-.06-.06a2 2 0 0 1 2.83-2.83l.06.06A1.65 1.65 0 0 0 9 4.68a1.65 1.65 0 0 0 1-1.51V3a2 2 0 0 1 4 0v.09a1.65 1.65 0 0 0 1 1.51 1.65 1.65 0 0 0 1.82-.33l.06-.06a2 2 0 0 1 2.83 2.83l-.06.06A1.65 1.65 0 0 0 19.4 9a1.65 1.65 0 0 0 1.51 1H21a2 2 0 0 1 0 4h-.09a1.65 1.65 0 0 0-1.51 1z"/>
  </svg>
);
const IconChat = () => (
  <svg width="26" height="26" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
    <path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z"/>
  </svg>
);

const tabs = [
  { id: 1, num: '01', label: 'The Game', sub: 'Experience the patterns', Icon: IconGamepad },
  { id: 2, num: '02', label: 'The Reflection', sub: 'Make the connection', Icon: IconPerson },
  { id: 3, num: '03', label: 'Insight Report', sub: 'See what it reveals', Icon: IconBarChart },
];

export default function ThreeStages() {
  const [active, setActive] = useState(1);

  return (
    <section className="ts-section">
      <div className="ts-container">

        {/* ── Header ── */}
        <div className="ts-top">
          <div className="ts-eyebrow-row">
            <span className="ts-eyebrow-num">02</span>
            <span className="ts-eyebrow-label">ENGAGE</span>
          </div>
          <h2 className="ts-main-title">One experience. Three stages.</h2>
        </div>

        {/* ── Tab bar ── */}
        <div className="ts-tab-bar">
          {tabs.map(tab => (
            <button
              key={tab.id}
              className={`ts-tab-btn ${active === tab.id ? 'ts-tab-active' : ''}`}
              onClick={() => setActive(tab.id)}
            >
              <span className="ts-tab-num">{tab.num}</span>
              <span className="ts-tab-icon"><tab.Icon /></span>
              <span className="ts-tab-info">
                <strong>{tab.label}</strong>
                <span>{tab.sub}</span>
              </span>
            </button>
          ))}
        </div>

        {/* ── Content card ── */}
        <div className="ts-card">
          <AnimatePresence mode="wait">
            {active === 1 && (
              <motion.div key="t1" className="ts-card-inner"
                initial={{ opacity: 0, y: 12 }} animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -12 }} transition={{ duration: 0.28 }}>

                {/* LEFT */}
                <div className="ts-col-left">
                  <p className="ts-stage-eyebrow">STAGE 01</p>
                  <h3 className="ts-stage-title">The Game</h3>
                  <p className="ts-stage-sub">A game that makes participants feel their own blind spots.</p>
                  <p className="ts-stage-body">Numbers on a report don't always convince people. It's easy to see a low score and move on. What's harder to ignore is encountering the same behavioural gap yourself — in a real group situation, in real time.</p>
                </div>

                {/* RIGHT */}
                <div className="ts-col-right">
                  <div className="ts-glance-title"><IconInfo />&nbsp; AT A GLANCE</div>
                  <div className="ts-glance-grid">
                    <div className="ts-glance-card">
                      <div className="ts-glance-icon-wrap"><IconUsers /></div>
                      <strong>12 – 100 participants</strong>
                      <span>Works for remote and in-person teams.</span>
                    </div>
                    <div className="ts-glance-card">
                      <div className="ts-glance-icon-wrap"><IconClock /></div>
                      <strong>45 minutes</strong>
                      <span>Online, fully facilitated.</span>
                    </div>
                    <div className="ts-glance-card">
                      <div className="ts-glance-icon-wrap"><IconGraduate /></div>
                      <strong>Learn by doing</strong>
                      <span>Participants experience how they naturally respond, decide and collaborate.</span>
                    </div>
                    <div className="ts-glance-card">
                      <div className="ts-glance-icon-wrap"><IconSettings /></div>
                      <strong>Customised</strong>
                      <span>Can be tailored to your team's focus areas.</span>
                    </div>
                  </div>
                </div>

              </motion.div>
            )}

            {active === 2 && (
              <motion.div key="t2" className="ts-card-inner"
                initial={{ opacity: 0, y: 12 }} animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -12 }} transition={{ duration: 0.28 }}>

                {/* LEFT */}
                <div className="ts-col-left ts-col-left--has-graphic">
                  <p className="ts-stage-eyebrow">STAGE 02</p>
                  <h3 className="ts-stage-title">The Reflection</h3>
                  <p className="ts-stage-sub">The game is only the beginning.</p>
                  <p className="ts-stage-body">In a facilitated conversation, the team looks back at what happened — the decisions they made, the patterns that emerged, and how they worked together.</p>
                  <p className="ts-stage-body">The facilitator helps turn those moments into insights they can recognise in themselves and in the way their team works.</p>
                </div>

                {/* RIGHT */}
                <div className="ts-col-right">
                  <div className="ts-glance-title"><IconInfo />&nbsp; AT A GLANCE</div>
                  <div className="ts-glance-grid">
                    <div className="ts-glance-card">
                      <div className="ts-glance-icon-wrap"><IconClock /></div>
                      <strong>Typically 90 minutes</strong>
                      <span>Flexible to your needs.</span>
                    </div>
                    <div className="ts-glance-card">
                      <div className="ts-glance-icon-wrap"><IconUsers /></div>
                      <strong>Facilitator-led</strong>
                      <span>Run by your facilitator or a Behavency expert.</span>
                    </div>
                    <div className="ts-glance-card">
                      <div className="ts-glance-icon-wrap"><IconChat /></div>
                      <strong>Guided reflection</strong>
                      <span>A structured methodology using questions, discussion and facilitator input.</span>
                    </div>
                    <div className="ts-glance-card">
                      <div className="ts-glance-icon-wrap"><IconSettings /></div>
                      <strong>Works with your competencies</strong>
                      <span>Use Behavency's framework or focus on your own.</span>
                    </div>
                  </div>
                </div>

              </motion.div>
            )}

            {active === 3 && (
              <motion.div key="t3" className="ts-card-inner"
                initial={{ opacity: 0, y: 12 }} animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -12 }} transition={{ duration: 0.28 }}>

                {/* LEFT */}
                <div className="ts-col-left">
                  <p className="ts-stage-eyebrow">STAGE 03</p>
                  <h3 className="ts-stage-title">Insight Report</h3>
                  <p className="ts-stage-sub">Turn the experience into actionable insight.</p>
                  <p className="ts-stage-body">A clear report that combines what happened in the game with key patterns and recommendations. For teams and facilitators.</p>

                  <div className="ts-feature-list">
                    <div className="ts-feature-row">
                      <div className="ts-feature-icon-wrap">
                        <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round"><path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2"/><circle cx="9" cy="7" r="4"/><path d="M23 21v-2a4 4 0 0 0-3-3.87"/><path d="M16 3.13a4 4 0 0 1 0 7.75"/></svg>
                      </div>
                      <div>
                        <strong>For facilitators &amp; HR</strong>
                        <span>Get a comprehensive team analysis, key patterns and discussion points.</span>
                      </div>
                    </div>
                    <div className="ts-feature-row">
                      <div className="ts-feature-icon-wrap">
                        <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round"><circle cx="12" cy="7" r="4"/><path d="M4 21v-1a8 8 0 0 1 16 0v1"/></svg>
                      </div>
                      <div>
                        <strong>For participants</strong>
                        <span>See the team's results and recommended next steps.</span>
                      </div>
                    </div>
                  </div>

                  <a href="#contact" className="ts-cta-btn">See how it works →</a>
                </div>

                {/* RIGHT — static mockup image */}
                <div className="ts-col-right ts-col-right--mockup">
                  <img src="/insight-report-mockup.jpg" alt="Insight Report" className="ts-mockup-image" />
                </div>
              </motion.div>
            )}
          </AnimatePresence>
        </div>

      </div>
    </section>
  );
}
