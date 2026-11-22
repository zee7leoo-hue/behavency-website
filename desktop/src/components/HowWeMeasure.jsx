import React from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import './HowWeMeasure.css';

export default function HowWeMeasure() {
  const [ref, inView] = useInView({ triggerOnce: true, threshold: 0.1 });

  const steps = [
    {
      step: '01',
      title: 'Understand',
      desc: 'Do they understand what they learned?',
      badgeColor: '#1d4ed8',
      badgeBg: '#e0edff',
      iconBg: '#e3f0fe',
      icon: (
        <svg viewBox="0 0 32 32" width="34" height="34" fill="none" stroke="#0284c7" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round">
          <line x1="16" y1="3.5" x2="16" y2="6.5" />
          <line x1="7" y1="7" x2="9.2" y2="9.2" />
          <line x1="25" y1="7" x2="22.8" y2="9.2" />
          <line x1="3.5" y1="16" x2="6.5" y2="16" />
          <line x1="25.5" y1="16" x2="28.5" y2="16" />
          <path d="M11 20.5c-1.8-1.5-3-3.8-3-6.5a8 8 0 1 1 16 0c0 2.7-1.2 5-3 6.5v2a2 2 0 0 1-2 2h-6a2 2 0 0 1-2-2v-2z" />
          <line x1="13" y1="27.5" x2="19" y2="27.5" />
        </svg>
      )
    },
    {
      step: '02',
      title: 'Engage',
      desc: 'Was the development relevant and valuable?',
      badgeColor: '#7c3aed',
      badgeBg: '#f1e8ff',
      iconBg: '#f3e8ff',
      icon: (
        <svg viewBox="0 0 32 32" width="34" height="34" fill="none" stroke="#8b5cf6" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round">
          <circle cx="16" cy="11" r="3.2" />
          <path d="M11 25.5v-2a5 5 0 0 1 10 0v2" />
          <circle cx="9" cy="14" r="2.6" />
          <path d="M4.5 25.5v-1.5a4.5 4.5 0 0 1 6-4.2" />
          <circle cx="23" cy="14" r="2.6" />
          <path d="M21.5 19.8a4.5 4.5 0 0 1 6 4.2v1.5" />
        </svg>
      )
    },
    {
      step: '03',
      title: 'Apply',
      desc: 'Are new behaviours being used at work?',
      badgeColor: '#059669',
      badgeBg: '#e0f7ef',
      iconBg: '#dcfce7',
      icon: (
        <svg viewBox="0 0 24 24" width="32" height="32" fill="none" stroke="#10b981" strokeWidth="2.1" strokeLinecap="round" strokeLinejoin="round">
          <circle cx="12" cy="12" r="3.2" />
          <path d="M19.4 15a1.65 1.65 0 0 0 .33 1.82l.06.06a2 2 0 0 1 0 2.83 2 2 0 0 1-2.83 0l-.06-.06a1.65 1.65 0 0 0-1.82-.33 1.65 1.65 0 0 0-1 1.51V21a2 2 0 0 1-2 2 2 2 0 0 1-2-2v-.09A1.65 1.65 0 0 0 9 19.4a1.65 1.65 0 0 0-1.82.33l-.06.06a2 2 0 0 1-2.83 0 2 2 0 0 1 0-2.83l.06-.06a1.65 1.65 0 0 0 .33-1.82 1.65 1.65 0 0 0-1.51-1H3a2 2 0 0 1-2-2 2 2 0 0 1 2-2h.09A1.65 1.65 0 0 0 4.6 9a1.65 1.65 0 0 0-.33-1.82l-.06-.06a2 2 0 0 1 0-2.83 2 2 0 0 1 2.83 0l.06.06a1.65 1.65 0 0 0 1.82.33H9a1.65 1.65 0 0 0 1-1.51V3a2 2 0 0 1 2-2 2 2 0 0 1 2 2v.09a1.65 1.65 0 0 0 1 1.51 1.65 1.65 0 0 0 1.82-.33l.06-.06a2 2 0 0 1 2.83 0 2 2 0 0 1 0 2.83l-.06.06a1.65 1.65 0 0 0-.33 1.82V9a1.65 1.65 0 0 0 1.51 1H21a2 2 0 0 1 2 2 2 2 0 0 1-2 2h-.09a1.65 1.65 0 0 0-1.51 1z" />
        </svg>
      )
    },
    {
      step: '04',
      title: 'Impact',
      desc: 'Is there a visible difference in the team?',
      badgeColor: '#ea580c',
      badgeBg: '#ffedd5',
      iconBg: '#ffedd5',
      icon: (
        <svg viewBox="0 0 24 24" width="32" height="32" fill="none" stroke="#f97316" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round">
          <rect x="2" y="13" width="4.8" height="8" rx="1.5" />
          <rect x="9.6" y="8.5" width="4.8" height="12.5" rx="1.5" />
          <rect x="17.2" y="4" width="4.8" height="17" rx="1.5" />
        </svg>
      )
    }
  ];

  return (
    <section className="hwm-section" id="how-we-measure" ref={ref}>
      <div className="hwm-container">
        {/* Eyebrow Label */}
        <motion.div
          className="hwm-eyebrow-wrap"
          initial={{ opacity: 0, y: 16 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.5 }}
        >
          <div className="hwm-eyebrow-line" />
          <span className="hwm-eyebrow-text">HOW WE MEASURE</span>
        </motion.div>

        {/* Header Content */}
        <motion.div
          className="hwm-header"
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.1 }}
        >
          <h2 className="hwm-headline">
            We measure whether<br />
            <em>development actually happens.</em>
          </h2>
          <p className="hwm-subtitle">
            Not just whether people completed the training — but whether it changed<br />
            behaviour and made a real difference to the team.
          </p>
        </motion.div>

        {/* 4 Cards Row with Arrows */}
        <div className="hwm-grid">
          {steps.map((item, index) => (
            <React.Fragment key={item.step}>
              <motion.div
                className="hwm-card"
                initial={{ opacity: 0, y: 24 }}
                animate={inView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.6, delay: 0.2 + index * 0.1 }}
              >
                <div
                  className="hwm-card-badge"
                  style={{ backgroundColor: item.badgeBg, color: item.badgeColor }}
                >
                  {item.step}
                </div>
                <div
                  className="hwm-card-icon"
                  style={{ backgroundColor: item.iconBg }}
                >
                  {item.icon}
                </div>
                <h3 className="hwm-card-title">{item.title}</h3>
                <p className="hwm-card-desc">{item.desc}</p>
              </motion.div>

              {index < steps.length - 1 && (
                <div className="hwm-arrow" aria-hidden="true">
                  <svg viewBox="0 0 24 24" width="20" height="20" fill="none" stroke="#475569" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <line x1="5" y1="12" x2="19" y2="12" />
                    <polyline points="12 5 19 12 12 19" />
                  </svg>
                </div>
              )}
            </React.Fragment>
          ))}
        </div>
      </div>
    </section>
  );
}
