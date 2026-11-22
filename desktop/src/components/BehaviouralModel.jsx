import React, { useState, useEffect } from 'react'
import { createPortal } from 'react-dom'
import { motion, AnimatePresence } from 'framer-motion'
import './BehaviouralModel.css'
import {
  Goal, Shield, Layers, CircleCheck, Users, TrendingUp,
  ArrowRight, ArrowLeft, User, X, MousePointer, Target,
  Sprout, FlaskConical, RotateCw, Compass, UserCheck, Eye, CheckSquare,
  Sparkles, MessageSquare, HeartHandshake, Filter, Scale, BarChart3, Zap, ShieldCheck,
  CheckCircle2, Trophy, Activity, Gauge, CalendarCheck, Handshake, Network, Megaphone,
  GitMerge, MessageCircle
} from 'lucide-react'

import { factorsList, allTrainings } from './BehaviouralModelData'
import { teamFactorsList, teamPrograms } from './TeamModelData'

const pipelineSteps = [
  { phase: 'PHASE 01', short: 'DIAGNOSTICS', title: 'Diagnostics', desc: 'We identify the key development priorities for managers and teams.' },
  { phase: 'PHASE 02', short: 'ENGAGEMENT', title: 'Engagement', desc: 'We build understanding, alignment, and personal commitment through hands-on experience.' },
  { phase: 'PHASE 03', short: 'DEVELOPMENT', title: 'Competency Development', desc: 'We develop targeted management practices and competencies.' },
  { phase: 'PHASE 04', short: 'EVALUATION', title: 'Results Evaluation', desc: 'We assess progress and behavioral change.' }
];

const stageImages = [
  "https://cdn.builder.io/api/v1/image/assets%2F1f577c1784eb496bb119c84f5b05b28c%2Faec9f7c81a974902be8095a523acb5b9",
  "https://cdn.builder.io/api/v1/image/assets%2F1f577c1784eb496bb119c84f5b05b28c%2F145e3ad96c9242668d9bf2698df00dea",
  "https://cdn.builder.io/api/v1/image/assets%2F1f577c1784eb496bb119c84f5b05b28c%2Fb04486c979df4f6ca0fec0fbf8ecf427",
  "https://cdn.builder.io/api/v1/image/assets%2F1f577c1784eb496bb119c84f5b05b28c%2F0259232ce34a4b97ad6a743ee0c1071d"
];

const AREA_MAIN_ICONS = {
  clarity: Goal,
  safety: Shield,
  capacity: Layers,
  execution: CircleCheck,
  drag: Users,
  learning: TrendingUp,
};

const PRACTICE_ICONS = {
  learning: [Sprout, FlaskConical, RotateCw, Layers, Users],
  clarity: [Compass, Target, UserCheck, Eye, CheckSquare],
  safety: [Shield, Sparkles, MessageSquare, HeartHandshake, Users],
  capacity: [Filter, Scale, BarChart3, Zap, ShieldCheck],
  execution: [CheckCircle2, Trophy, Activity, Gauge, CalendarCheck],
  drag: [Handshake, Network, Megaphone, GitMerge, MessageCircle],
};


const MODAL_TABS = [
  { num: '1', name: 'Level 1', sub: 'Model' },
  { num: '2', name: 'Level 2', sub: 'What They Do' },
  { num: '3', name: 'Level 3', sub: 'Behavior' },
];

/* Math for the indicator wheel */
const polarToCartesian = (cx, cy, r, deg) => {
  const rad = (deg - 90) * Math.PI / 180;
  return { x: cx + r * Math.cos(rad), y: cy + r * Math.sin(rad) };
};
const getAngles = (index, total) => {
  const size = 360 / total;
  const start = -(size / 2) + index * size;
  return { start, end: start + size };
};
const describeArc = (x, y, ri, ro, sa, ea, gap = 2) => {
  const as = sa + gap / 2, ae = ea - gap / 2;
  const so = polarToCartesian(x, y, ro, ae), eo = polarToCartesian(x, y, ro, as);
  const si = polarToCartesian(x, y, ri, ae), ei = polarToCartesian(x, y, ri, as);
  const flag = ae - as <= 180 ? "0" : "1";
  return `M ${so.x} ${so.y} A ${ro} ${ro} 0 ${flag} 0 ${eo.x} ${eo.y} L ${ei.x} ${ei.y} A ${ri} ${ri} 0 ${flag} 1 ${si.x} ${si.y} Z`;
};

function IndicatorWheel({ activeId, onClose, currentList, onSelect }) {
  const activeIndex = currentList.findIndex(f => f.id === activeId);
  const activeColor = currentList[activeIndex]?.color || '#10b981';

  return (
    <div className="bmodel__indicator-wrap">
      <svg width="180" height="180" viewBox="0 0 200 200">
        {currentList.map((f, i) => {
          const { start, end } = getAngles(i, 6);
          const path = describeArc(100, 100, 52, 96, start, end, 3);
          const isActive = i === activeIndex;
          return (
            <path
              key={f.id}
              d={path}
              fill={isActive ? activeColor : '#1e293b'}
              style={{ transition: 'fill 0.7s cubic-bezier(0.25, 0.8, 0.25, 1)', cursor: onSelect ? 'pointer' : 'default' }}
              onClick={() => onSelect && onSelect(f)}
            />
          );
        })}
      </svg>
      <button className="bmodel__indicator-center" onClick={onClose}>
        <ArrowLeft size={16} />
        <span style={{ fontSize: '9px', fontWeight: 800, marginTop: '4px', letterSpacing: '0.05em', textAlign: 'center' }}>BACK<br/>TO MODEL</span>
      </button>
    </div>
  );
}

const PANE_ANIM = {
  initial: { opacity: 0, y: 14 },
  animate: { opacity: 1, y: 0, transition: { duration: 0.8, ease: [0.25, 0.8, 0.25, 1] } },
  exit: { opacity: 0, y: -10, transition: { duration: 0.35, ease: [0.4, 0, 0.6, 1] } },
};

function ModalContent({ area, closeModal, activeLevel, onSelectArea }) {
  // Level 1 closes modal, so actual tabs start at Level 2 (index 1)
  const [tab, setTab] = useState(1);
  const [cyclePhase, setCyclePhase] = useState(0);

  const handleNavClick = (i) => {
    if (i === 0) {
      closeModal();
    } else {
      setTab(i);
    }
  };

  return (
    <motion.div
      className="bmodel__modal"
      initial={{ opacity: 0, scale: 0.975, x: '-50%', y: 'calc(-50% + 24px)' }}
      animate={{ opacity: 1, scale: 1, x: '-50%', y: '-50%' }}
      exit={{ opacity: 0, scale: 0.98, x: '-50%', y: 'calc(-50% + 10px)', transition: { duration: 0.55, ease: [0.4, 0, 0.2, 1] } }}
      transition={{ duration: 1.0, ease: [0.25, 0.8, 0.25, 1] }}
      role="dialog"
      aria-modal="true"
    >
      <button className="bmodel__modal-close" onClick={closeModal} aria-label="Close">
        <X size={20} />
      </button>

      {/* Dark Left Sidebar */}
      <div className="bmodel__modal-sidebar">
        <div className="bmodel__modal-logo">
          <span className="bmodel__modal-logo-b">B</span> Behavency.
        </div>
        
        <IndicatorWheel activeId={area.id} onClose={closeModal} currentList={activeLevel === 2 ? teamFactorsList : factorsList} onSelect={onSelectArea} />

        <div className="bmodel__modal-area-info">
          <div className="bmodel__modal-area-icon" style={{ backgroundColor: area.bg || (area.color ? area.color + "20" : "#10b98120"), color: area.color }}>
            <Target size={20} />
          </div>
          <div>
            <div className="bmodel__modal-area-name">{area.title}</div>
            <div style={{ fontSize: '11px', color: '#94a3b8', marginTop: '3px', textTransform: 'uppercase', letterSpacing: '0.08em', fontWeight: 600 }}>
              {activeLevel === 0 && 'Line Management'}
              {activeLevel === 1 && 'Leadership Level'}
              {activeLevel === 2 && 'Team Level'}
            </div>
          </div>
        </div>

        <div className="bmodel__modal-nav-header">LEVELS</div>
        <div className="bmodel__modal-nav">
          {MODAL_TABS.map((t, i) => {
            const isActive = tab === i;
            return (
              <button
                key={t.num}
                onClick={() => handleNavClick(i)}
                className={"bmodel__modal-nav-item" + (isActive ? " bmodel__modal-nav-item--active" : "")}
              >
                <div className={"bmodel__modal-nav-num" + (isActive ? " active" : "")}>{t.num}</div>
                <div className="bmodel__modal-nav-text">
                  <div className={"bmodel__modal-nav-name" + (isActive ? " active" : "")}>{t.name}</div>
                  <div className={"bmodel__modal-nav-sub" + (isActive ? " active" : "")}>{t.sub}</div>
                </div>
              </button>
            );
          })}
        </div>
      </div>

      {/* Right Content Area */}
      <div className="bmodel__modal-content">
        
        <AnimatePresence mode="wait" initial={false}>
        {/* TAB 1: What Effective Managers Do (Level 2) */}
        {tab === 1 && (() => {
          const midPoint = Math.ceil(area.manifestations.length / 2);
          const col1 = area.manifestations.slice(0, midPoint);
          const col2 = area.manifestations.slice(midPoint);
          const AreaIcon = AREA_MAIN_ICONS[area.id] || Target;
          const factorIcons = PRACTICE_ICONS[area.id] || [Sprout, FlaskConical, RotateCw, Layers, Users];
          const themeColor = area.id === 'learning' ? '#6d28d9' : (area.color || '#6d28d9');
          const cardBg = area.id === 'learning' ? '#f5f3ff' : `${themeColor}0d`;
          const numBg = area.id === 'learning' ? '#ede5fa' : `${themeColor}18`;

          const renderPracticeCard = (m, globalIdx) => {
            const title = activeLevel === 1 ? (m.practiceMid || m.practice) : m.practice;
            const PracticeIcon = factorIcons[globalIdx] || Target;

            return (
              <div
                key={globalIdx}
                className="bmodel__l2-practice-card"
                style={{ backgroundColor: cardBg }}
              >
                <div
                  className="bmodel__l2-practice-num"
                  style={{ backgroundColor: numBg, color: themeColor }}
                >
                  0{globalIdx + 1}
                </div>
                <div className="bmodel__l2-practice-icon" style={{ color: themeColor }}>
                  <PracticeIcon size={26} strokeWidth={2} />
                </div>
                <div className="bmodel__l2-practice-divider" />
                <div className="bmodel__l2-practice-text">
                  {title}
                </div>
              </div>
            );
          };

          return (
            <motion.div key={`l2-${area.id}`} {...PANE_ANIM} className="bmodel__tab-pane">
              {/* Factor Badge */}
              <div className="bmodel__l2-header-badge">
                <div className="bmodel__l2-header-icon" style={{ backgroundColor: themeColor }}>
                  <AreaIcon size={16} color="#ffffff" strokeWidth={2.5} />
                </div>
                <span className="bmodel__l2-header-title" style={{ color: themeColor }}>
                  {area.title}
                </span>
              </div>

              {/* Title & Subtitle */}
              <div className="bmodel__l2-pane-header">
                <h3 className="bmodel__l2-title">
                  {activeLevel === 0 && 'Level 2 — What Effective Managers Do'}
                  {activeLevel === 1 && 'Level 2 — What Effective Leaders Do'}
                  {activeLevel === 2 && 'Level 2 — What Effective Teams Do'}
                </h3>
                <p className="bmodel__l2-sub">
                  {activeLevel === 0 && 'Each practice answers the question: "What does an effective manager at this level do?"'}
                  {activeLevel === 1 && 'Each practice answers the question: "What does an effective mid-level leader do?"'}
                  {activeLevel === 2 && 'Each practice answers the question: "What does an effective team do?"'}
                </p>
              </div>

              {/* 2-Column Practice Cards */}
              <div className="bmodel__l2-practice-grid">
                <div className="bmodel__l2-practice-col">
                  {col1.map((m, idx) => renderPracticeCard(m, idx))}
                </div>
                <div className="bmodel__l2-practice-col">
                  {col2.map((m, idx) => renderPracticeCard(m, midPoint + idx))}
                </div>
              </div>
            </motion.div>
          );
        })()}

{/* TAB 2: Behavioral Manifestations (Level 3) */}
        {tab === 2 && (() => {
          const isMid = activeLevel === 1;
          const AreaIcon = AREA_MAIN_ICONS[area.id] || Target;
          const factorIcons = PRACTICE_ICONS[area.id] || [Sprout, FlaskConical, RotateCw, Layers, Users];
          const themeColor = area.id === 'learning' ? '#6d28d9' : (area.color || '#6d28d9');
          const numBg = area.id === 'learning' ? '#ede5fa' : `${themeColor}18`;

          return (
            <motion.div key={`l3-${area.id}`} {...PANE_ANIM} className="bmodel__tab-pane">
              {/* Factor Badge */}
              <div className="bmodel__l3-header-badge">
                <div className="bmodel__l3-header-icon" style={{ backgroundColor: themeColor }}>
                  <AreaIcon size={16} color="#ffffff" strokeWidth={2.5} />
                </div>
                <span className="bmodel__l3-header-title" style={{ color: themeColor }}>
                  {area.title}
                </span>
              </div>

              {/* Title & Subtitle */}
              <div className="bmodel__l3-pane-header">
                <h3 className="bmodel__l3-title">
                  Level 3 — Behavioral Manifestations
                </h3>
                <p className="bmodel__l3-sub">
                  {activeLevel === 0 && 'Each manifestation answers the question: "How does this leadership practice look in a line manager?"'}
                  {activeLevel === 1 && 'Each manifestation answers the question: "How does this leadership practice look in a mid-level manager?"'}
                  {activeLevel === 2 && 'Each manifestation answers the question: "How does this practice look in an effective team?"'}
                </p>
              </div>

              {/* Level Badge Pill */}
              <div className="bmodel__l3-toggle-wrap">
                <div className="bmodel__l3-level-pill">
                  {activeLevel === 0 && 'Line Manager'}
                  {activeLevel === 1 && 'Mid-level Manager'}
                  {activeLevel === 2 && 'Team'}
                </div>
              </div>
              {/* Manifestation Table Rows */}
              <div className="bmodel__l3-table">
                {area.manifestations.map((m, i) => {
                  const practiceTitle = (isMid && m.practiceMid) ? m.practiceMid : m.practice;
                  const bullets = activeLevel === 2
                    ? (m.line || [])
                    : (isMid ? (m.mid || m.line || []) : (m.line || []));
                  const PracticeIcon = factorIcons[i] || Target;

                  return (
                    <div key={i} className="bmodel__l3-row">
                      {/* Left: Practice Identifier */}
                      <div className="bmodel__l3-row-left">
                        <div
                          className="bmodel__l3-practice-num"
                          style={{ backgroundColor: numBg, color: themeColor }}
                        >
                          0{i + 1}
                        </div>
                        <div className="bmodel__l3-practice-icon" style={{ color: themeColor }}>
                          <PracticeIcon size={24} strokeWidth={2} />
                        </div>
                        <div className="bmodel__l3-practice-divider" />
                        <div className="bmodel__l3-practice-title">
                          {practiceTitle}
                        </div>
                      </div>

                      {/* Right: Manifestation Bullet Points */}
                      <div className="bmodel__l3-row-right">
                        <ul className="bmodel__l3-bullet-list">
                          {bullets.map((bullet, j) => (
                            <li key={j} className="bmodel__l3-bullet-item">
                              <span
                                className="bmodel__l3-bullet-dot"
                                style={{ backgroundColor: themeColor }}
                              />
                              <span className="bmodel__l3-bullet-text">
                                {bullet}
                              </span>
                            </li>
                          ))}
                        </ul>
                      </div>
                    </div>
                  );
                })}
              </div>
            </motion.div>
          );
        })()}
        </AnimatePresence>

      </div>
    </motion.div>
  );
}



const GROUPS = [
  {
    num: '01',
    name: 'Line managers',
    sub: 'Management effectiveness',
    heading: ['MANAGEMENT', 'EFFECTIVENESS'],
    subtitles: ['How line managers', 'lead and deliver', 'daily results'],
    iconType: 'user'
  },
  {
    num: '02',
    name: 'Mid-level managers',
    sub: 'Leadership effectiveness',
    heading: ['LEADERSHIP', 'EFFECTIVENESS'],
    subtitles: ['How mid-level leaders', 'align strategy and', 'drive performance'],
    iconType: 'user'
  },
  {
    num: '03',
    name: 'Teams + their manager',
    sub: 'Team effectiveness',
    heading: ['TEAM', 'EFFECTIVENESS'],
    subtitles: ['How our team', 'works together and', 'achieves results'],
    iconType: 'team'
  },
];

export default function BehaviouralModel() {
  const [active, setActive] = useState(2);
  const [modalArea, setModalArea] = useState(null);

  const FACTOR_MAP = {
    clarity: 'clarity',
    trust: 'safety',
    focus: 'capacity',
    execution: 'execution',
    collaboration: 'drag',
    learning: 'learning'
  };

  const openModal = (id) => {
    const factorId = FACTOR_MAP[id] || id;
    const list = active === 2 ? teamFactorsList : factorsList;
    const found = list.find(f => f.id === factorId);
    if (found) {
      setModalArea(found);
    }
  };
  const closeModal = () => setModalArea(null);

  useEffect(() => {
    if (modalArea) {
      document.body.style.overflow = 'hidden';
      return () => {
        document.body.style.overflow = '';
      };
    }
  }, [modalArea]);

  const satellites = [
    {
      id: 'clarity',
      line1: 'CLARITY &',
      line2: 'ALIGNMENT',
      cx: 512,
      cy: 157.0,
      haloColor: '#26a66a',
      icon: (
        <g>
          <circle cx="0" cy="0" r="13" stroke="#fff" strokeWidth="2" fill="none" />
          <circle cx="0" cy="0" r="5.5" stroke="#fff" strokeWidth="2" fill="none" />
          <circle cx="0" cy="0" r="1.5" fill="#fff" />
          <path d="M 0 0 L 15 -15" stroke="#fff" strokeWidth="2" strokeLinecap="round" />
          <path d="M 8 -15 L 15 -15 L 15 -8" stroke="#fff" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
        </g>
      )
    },
    {
      id: 'trust',
      line1: 'TRUST &',
      line2: 'INCLUSION',
      cx: 783.07,
      cy: 313.5,
      haloColor: '#f58220',
      icon: (
        <g>
          <path d="M -11 -8 L 0 -14 L 11 -8 L 11 3 C 11 10.5 0 15.5 0 15.5 C 0 15.5 -11 10.5 -11 3 Z" stroke="#fff" strokeWidth="2.2" fill="none" strokeLinecap="round" strokeLinejoin="round" />
        </g>
      )
    },
    {
      id: 'focus',
      line1: 'FOCUS &',
      line2: 'PRIORITIES',
      cx: 783.07,
      cy: 626.5,
      haloColor: '#7c4beb',
      icon: (
        <g>
          <path d="M -11 -5 L -11 -11 L -5 -11" stroke="#fff" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round" fill="none" />
          <path d="M 5 -11 L 11 -11 L 11 -5" stroke="#fff" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round" fill="none" />
          <path d="M -11 5 L -11 11 L -5 11" stroke="#fff" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round" fill="none" />
          <path d="M 5 11 L 11 11 L 11 5" stroke="#fff" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round" fill="none" />
          <line x1="-5.5" y1="-2.5" x2="5.5" y2="-2.5" stroke="#fff" strokeWidth="2.2" strokeLinecap="round" />
          <line x1="-5.5" y1="2.5" x2="5.5" y2="2.5" stroke="#fff" strokeWidth="2.2" strokeLinecap="round" />
        </g>
      )
    },
    {
      id: 'execution',
      line1: 'EXECUTION &',
      line2: 'ACCOUNTABILITY',
      cx: 512,
      cy: 783.0,
      haloColor: '#0ea5e9',
      icon: (
        <g>
          <circle cx="0" cy="0" r="13" stroke="#fff" strokeWidth="2.2" fill="none" />
          <path d="M -5.5 0 L -1.5 4 L 5.5 -3.5" stroke="#fff" strokeWidth="2.4" strokeLinecap="round" strokeLinejoin="round" fill="none" />
        </g>
      )
    },
    {
      id: 'collaboration',
      line1: 'COLLABORATION &',
      line2: 'INFLUENCE',
      cx: 240.93,
      cy: 626.5,
      haloColor: '#ee3257',
      icon: (
        <g>
          <circle cx="0" cy="-4.5" r="5" stroke="#fff" strokeWidth="2" fill="none" />
          <path d="M -7.5 9.5 C -7.5 5.5 -3.5 3.5 0 3.5 C 3.5 3.5 7.5 5.5 7.5 9.5" stroke="#fff" strokeWidth="2" strokeLinecap="round" fill="none" />
          <circle cx="-9" cy="-1.5" r="4" stroke="#fff" strokeWidth="1.8" fill="none" />
          <path d="M -14 9 C -14 6.5 -11.5 5 -9 5 C -7.8 5 -6.8 5.4 -6 6" stroke="#fff" strokeWidth="1.8" strokeLinecap="round" fill="none" />
          <circle cx="9" cy="-1.5" r="4" stroke="#fff" strokeWidth="1.8" fill="none" />
          <path d="M 6 6 C 6.8 5.4 7.8 5 9 5 C 11.5 5 14 6.5 14 9" stroke="#fff" strokeWidth="1.8" strokeLinecap="round" fill="none" />
        </g>
      )
    },
    {
      id: 'learning',
      line1: 'LEARNING &',
      line2: 'ADAPTATION',
      cx: 240.93,
      cy: 313.5,
      haloColor: '#2563eb',
      icon: (
        <g>
          <path d="M -13 8 L -5 -0.5 L 1.5 5 L 11.5 -5.5" stroke="#fff" strokeWidth="2.3" strokeLinecap="round" strokeLinejoin="round" fill="none" />
          <path d="M 4 -5.5 L 11.5 -5.5 L 11.5 2" stroke="#fff" strokeWidth="2.3" strokeLinecap="round" strokeLinejoin="round" fill="none" />
        </g>
      )
    }
  ];


// Click and keyboard events on wheel nodes are handled directly via React props

  return (
    <section className="bmodel chapter chapter--cream2">
      <div className="bmodel__inner">

        {/* ── Left column ── */}
        <div className="bmodel__left">
          <div className="bmodel__eyebrow">
            <span className="bmodel__ey-line" />
            <span className="bmodel__ey-text">THE BEHAVIOURAL MODEL</span>
          </div>

          <h2 className="bmodel__headline">
            One framework.<br />
            <span className="bmodel__headline--teal">Different levels</span><br />
            <span className="bmodel__headline--italic">of the organization.</span>
          </h2>

          <p className="bmodel__sub">
            We use one behavioural framework to assess<br />
            and develop managers and teams.
          </p>

          <div className="bmodel__hint">
            <MousePointer size={16} strokeWidth={2} />
            <span>Select any area to explore the behaviours behind it.</span>
          </div>

          <div className="bmodel__groups">
            {GROUPS.map((g, i) => (
              <button
                key={g.num}
                className={"bmodel__row" + (active === i ? " bmodel__row--active" : "")}
                onClick={() => setActive(i)}
              >
                <span className="bmodel__row-num">{g.num}</span>
                <div className="bmodel__row-divider" />
                <div className="bmodel__row-body">
                  <div className="bmodel__row-name">{g.name}</div>
                  <div className="bmodel__row-sub">{g.sub}</div>
                </div>
                <div className="bmodel__row-arrow">
                  <ArrowRight size={14} />
                </div>
              </button>
            ))}
          </div>
        </div>

        {/* ── Right column — wheel ── */}
        <div className="bmodel__wheel">
                    <div className="bv-wheel" aria-label="Management and team effectiveness wheel">
            <svg
              className="bv-wheel-svg"
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 1024 940"
              fill="none"
              aria-labelledby="bv-wheel-title bv-wheel-description"
            >
              <title id="bv-wheel-title">Six dimensions of effectiveness</title>
              <desc id="bv-wheel-description">Interactive wheel featuring Clarity and Alignment, Trust and Inclusion, Focus and Priorities, Execution and Accountability, Collaboration and Influence, and Learning and Adaptation.</desc>
              <defs>
                <linearGradient id="g-clarity" x1="0" y1="0" x2="0.2" y2="1">
                  <stop offset="0%" stopColor="#2cc27b" />
                  <stop offset="100%" stopColor="#199b5b" />
                </linearGradient>
                <filter id="sh-clarity" x="-30%" y="-30%" width="160%" height="160%">
                  <feDropShadow dx="0" dy="10" stdDeviation="16" floodColor="#1a824e" floodOpacity="0.30" />
                  <feDropShadow dx="0" dy="3" stdDeviation="5" floodColor="#1a824e" floodOpacity="0.20" />
                </filter>

                <linearGradient id="g-trust" x1="0" y1="0" x2="0.2" y2="1">
                  <stop offset="0%" stopColor="#ff9b1a" />
                  <stop offset="100%" stopColor="#e66f00" />
                </linearGradient>
                <filter id="sh-trust" x="-30%" y="-30%" width="160%" height="160%">
                  <feDropShadow dx="0" dy="10" stdDeviation="16" floodColor="#c45a00" floodOpacity="0.30" />
                  <feDropShadow dx="0" dy="3" stdDeviation="5" floodColor="#c45a00" floodOpacity="0.20" />
                </filter>

                <linearGradient id="g-focus" x1="0" y1="0" x2="0.2" y2="1">
                  <stop offset="0%" stopColor="#8b5cf6" />
                  <stop offset="100%" stopColor="#6327e0" />
                </linearGradient>
                <filter id="sh-focus" x="-30%" y="-30%" width="160%" height="160%">
                  <feDropShadow dx="0" dy="10" stdDeviation="16" floodColor="#4a18b0" floodOpacity="0.32" />
                  <feDropShadow dx="0" dy="3" stdDeviation="5" floodColor="#4a18b0" floodOpacity="0.20" />
                </filter>

                <linearGradient id="g-execution" x1="0" y1="0" x2="0.2" y2="1">
                  <stop offset="0%" stopColor="#0ea5e9" />
                  <stop offset="100%" stopColor="#0284c7" />
                </linearGradient>
                <filter id="sh-execution" x="-30%" y="-30%" width="160%" height="160%">
                  <feDropShadow dx="0" dy="10" stdDeviation="16" floodColor="#0369a1" floodOpacity="0.30" />
                  <feDropShadow dx="0" dy="3" stdDeviation="5" floodColor="#0369a1" floodOpacity="0.20" />
                </filter>

                <linearGradient id="g-collaboration" x1="0" y1="0" x2="0.2" y2="1">
                  <stop offset="0%" stopColor="#f43f5e" />
                  <stop offset="100%" stopColor="#c8102e" />
                </linearGradient>
                <filter id="sh-collaboration" x="-30%" y="-30%" width="160%" height="160%">
                  <feDropShadow dx="0" dy="10" stdDeviation="16" floodColor="#9f1239" floodOpacity="0.30" />
                  <feDropShadow dx="0" dy="3" stdDeviation="5" floodColor="#9f1239" floodOpacity="0.20" />
                </filter>

                <linearGradient id="g-learning" x1="0" y1="0" x2="0.2" y2="1">
                  <stop offset="0%" stopColor="#3b82f6" />
                  <stop offset="100%" stopColor="#1d4ed8" />
                </linearGradient>
                <filter id="sh-learning" x="-30%" y="-30%" width="160%" height="160%">
                  <feDropShadow dx="0" dy="10" stdDeviation="16" floodColor="#1e40af" floodOpacity="0.32" />
                  <feDropShadow dx="0" dy="3" stdDeviation="5" floodColor="#1e40af" floodOpacity="0.20" />
                </filter>

                <filter id="center-shadow" x="-30%" y="-30%" width="160%" height="160%">
                  <feDropShadow dx="0" dy="12" stdDeviation="22" floodColor="#0f172a" floodOpacity="0.10" />
                  <feDropShadow dx="0" dy="2" stdDeviation="6" floodColor="#0f172a" floodOpacity="0.04" />
                </filter>
              </defs>

              {/* ── Outer circular orbit arc ── */}
              <circle cx="512" cy="470" r="328" stroke="#d8dfe6" strokeWidth="1.3" fill="none" pointerEvents="none" />

              {/* ── Network constellation lines ── */}
              <g className="bv-network-lines" stroke="#d8dfe6" strokeWidth="1.3" pointerEvents="none">
                {/* Hexagon chords between satellites */}
                <line x1="512" y1="157.0" x2="783.07" y2="313.5" />
                <line x1="783.07" y1="313.5" x2="783.07" y2="626.5" />
                <line x1="783.07" y1="626.5" x2="512" y2="783.0" />
                <line x1="512" y1="783.0" x2="240.93" y2="626.5" />
                <line x1="240.93" y1="626.5" x2="240.93" y2="313.5" />
                <line x1="240.93" y1="313.5" x2="512" y2="157.0" />

                {/* Radials from center to satellites */}
                <line x1="512" y1="157.0" x2="512" y2="470" />
                <line x1="783.07" y1="313.5" x2="512" y2="470" />
                <line x1="783.07" y1="626.5" x2="512" y2="470" />
                <line x1="512" y1="783.0" x2="512" y2="470" />
                <line x1="240.93" y1="626.5" x2="512" y2="470" />
                <line x1="240.93" y1="313.5" x2="512" y2="470" />

                {/* Inner star constellation grid */}
                <line x1="421.64" y1="313.5" x2="602.36" y2="313.5" />
                <line x1="421.64" y1="626.5" x2="602.36" y2="626.5" />
                <line x1="421.64" y1="313.5" x2="376.47" y2="391.75" />
                <line x1="376.47" y1="391.75" x2="512" y2="313.5" />
                <line x1="512" y1="313.5" x2="647.53" y2="391.75" />
                <line x1="647.53" y1="391.75" x2="602.36" y2="313.5" />
                <line x1="602.36" y1="313.5" x2="692.71" y2="470" />
                <line x1="692.71" y1="470" x2="647.53" y2="548.25" />
                <line x1="647.53" y1="548.25" x2="602.36" y2="626.5" />
                <line x1="602.36" y1="626.5" x2="512" y2="626.5" />
                <line x1="512" y1="626.5" x2="376.47" y2="548.25" />
                <line x1="376.47" y1="548.25" x2="421.64" y2="626.5" />
                <line x1="421.64" y1="626.5" x2="331.29" y2="470" />
                <line x1="331.29" y1="470" x2="421.64" y2="313.5" />
                <line x1="512" y1="313.5" x2="376.47" y2="548.25" />
                <line x1="512" y1="313.5" x2="647.53" y2="548.25" />
                <line x1="512" y1="626.5" x2="376.47" y2="391.75" />
                <line x1="512" y1="626.5" x2="647.53" y2="391.75" />
              </g>

              {/* ── 12 colored constellation dots ── */}
              <g className="bv-network-dots" pointerEvents="none">
                <circle cx="421.64" cy="313.5" r="4.5" fill="#75b39d" />
                <circle cx="512.00" cy="313.5" r="4.5" fill="#44aa86" />
                <circle cx="602.36" cy="313.5" r="4.5" fill="#6eb89f" />
                <circle cx="376.47" cy="391.75" r="4.5" fill="#42ac84" />
                <circle cx="647.53" cy="391.75" r="4.5" fill="#3eb17f" />
                <circle cx="331.29" cy="470.0" r="4.5" fill="#67b69e" />
                <circle cx="692.71" cy="470.0" r="4.5" fill="#6eb89a" />
                <circle cx="376.47" cy="548.25" r="4.5" fill="#578c93" />
                <circle cx="647.53" cy="548.25" r="4.5" fill="#e68c24" />
                <circle cx="421.64" cy="626.5" r="4.5" fill="#8f83be" />
                <circle cx="512.00" cy="626.5" r="4.5" fill="#6b6bae" />
                <circle cx="602.36" cy="626.5" r="4.5" fill="#eda14b" />
              </g>

              {/* ── Center Node ── */}
              <g
                className="bv-node bv-node--center"
                data-wheel-node="center"
                role="button"
                tabIndex={0}
                aria-label={`${GROUPS[active].heading.join(' ')} - ${GROUPS[active].subtitles.join(' ')}`}
                focusable="true"
                style={{ cursor: "pointer" }}
                onClick={() => setActive((prev) => (prev + 1) % 3)}
                onKeyDown={(e) => (e.key === "Enter" || e.key === " ") && setActive((prev) => (prev + 1) % 3)}
              >
                <title>{`${GROUPS[active].heading.join(' ')} — click to cycle level`}</title>
                <circle
                  cx="512"
                  cy="470"
                  r="138"
                  fill="#ffffff"
                  stroke="rgba(226, 232, 240, 0.7)"
                  strokeWidth="1"
                  filter="url(#center-shadow)"
                />

                {/* Center Icon */}
                {GROUPS[active].iconType === 'team' ? (
                  <g transform="translate(512, 422)">
                    {/* Background side persons */}
                    <circle cx="-17" cy="-2" r="8" fill="#8b5cf6" />
                    <circle cx="17" cy="-2" r="8" fill="#8b5cf6" />
                    <path d="M -28 16 C -28 8 -19 7 -13 7 C -5 7 -2 9 -2 9 L 2 9 C 2 9 5 7 13 7 C 19 7 28 8 28 16 Z" fill="#8b5cf6" />
                    {/* Foreground center person */}
                    <circle cx="0" cy="-8" r="10.5" fill="#5b21b6" />
                    <path d="M -18 17 C -18 8 -9 6 0 6 C 9 6 18 8 18 17 Z" fill="#5b21b6" />
                  </g>
                ) : (
                  <g transform="translate(512, 422)">
                    <circle cx="0" cy="-7" r="11.5" fill="#5b21b6" />
                    <path d="M -18 17 C -18 8 -9 6 0 6 C 9 6 18 8 18 17 Z" fill="#5b21b6" />
                  </g>
                )}

                {/* Center Heading - High Contrast & Prominent */}
                <text className="bv-center-title" x="512" y="478">
                  {GROUPS[active].heading[0]}
                </text>
                <text className="bv-center-title" x="512" y="505">
                  {GROUPS[active].heading[1]}
                </text>

                {/* Horizontal separator line */}
                <rect x="486" y="516" width="52" height="3" rx="1.5" fill="#6741d9" />

                <circle className="bv-hit" cx="512" cy="470" r="138" fill="transparent" />
              </g>

              {/* ── 6 Satellite Nodes ── */}
              <g className="bv-satellites">
                {satellites.map((sat) => (
                  <g
                    key={sat.id}
                    className="bv-node bv-node--satellite"
                    data-wheel-node={sat.id}
                    onClick={() => openModal(sat.id)}
                    onKeyDown={(e) => (e.key === "Enter" || e.key === " ") && openModal(sat.id)}
                    role="button"
                    tabIndex={0}
                    aria-label={`${sat.line1} ${sat.line2}`}
                    focusable="true"
                    style={{ cursor: "pointer" }}
                  >
                    <title>{`${sat.line1} ${sat.line2}`}</title>
                    {/* Outer Halo */}
                    <circle cx={sat.cx} cy={sat.cy} r="124" fill={sat.haloColor} opacity="0.18" />
                    {/* Main Colored Disc */}
                    <circle cx={sat.cx} cy={sat.cy} r="108" fill={`url(#g-${sat.id})`} filter={`url(#sh-${sat.id})`} />
                    {/* Squircle Badge */}
                    <g transform={`translate(${sat.cx}, ${sat.cy - 38})`}>
                      <rect
                        x="-24"
                        y="-24"
                        width="48"
                        height="48"
                        rx="14"
                        fill="rgba(255, 255, 255, 0.16)"
                        stroke="rgba(255, 255, 255, 0.6)"
                        strokeWidth="1.6"
                      />
                      {sat.icon}
                    </g>
                    {/* White bold uppercase text - Increased Size */}
                    <text className="bv-sat-text" x={sat.cx} y={sat.cy + 24}>
                      {sat.line1}
                    </text>
                    <text className="bv-sat-text" x={sat.cx} y={sat.cy + 48}>
                      {sat.line2}
                    </text>
                    {/* Full Hit Area */}
                    <circle className="bv-hit" cx={sat.cx} cy={sat.cy} r="124" fill="transparent" />
                  </g>
                ))}
              </g>
            </svg>
          </div>
        </div>
      </div>

      {/* ── Modal — rendered at document.body via Portal ── */}
      {createPortal(
        <AnimatePresence>
          {modalArea && (
            <>
              {/* Backdrop */}
              <motion.div
                className="bmodel__backdrop"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                transition={{ duration: 0.9, ease: [0.25, 0.8, 0.25, 1] }}
                onClick={closeModal}
              />

              <ModalContent area={modalArea} closeModal={closeModal} activeLevel={active} onSelectArea={setModalArea} />
            </>
          )}
        </AnimatePresence>,
        document.body
      )}

    </section>
  )
}


