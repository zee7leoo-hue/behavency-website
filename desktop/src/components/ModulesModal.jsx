import React, { useState, useEffect } from 'react';
import { X } from 'lucide-react';
import './ModulesModal.css';

export default function ModulesModal({ isOpen, onClose }) {
  const [activeTab, setActiveTab] = useState('all');

  useEffect(() => {
    if (isOpen) {
      setActiveTab('all');
    }
  }, [isOpen]);
  // Handle escape key
  useEffect(() => {
    const handleKeyDown = (e) => {
      if (e.key === 'Escape' && isOpen) {
        onClose();
      }
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [isOpen, onClose]);

  // Lock body scroll
  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = 'hidden';
    }
    return () => {
      document.body.style.overflow = '';
    };
  }, [isOpen]);

  if (!isOpen) return null;

  const allModules = [
    {
      id: 'leadership',
      title: 'Основы лидерства',
      desc: 'Build core leadership skills for everyday management.',
      iconBg: '#ffe4ec',
      iconColor: '#e11d48',
      icon: (
        <svg viewBox="0 0 24 24" width="22" height="22" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round">
          <path d="M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2" />
          <circle cx="9" cy="7" r="4" />
          <path d="M22 21v-2a4 4 0 0 0-3-3.87" />
          <path d="M16 3.13a4 4 0 0 1 0 7.75" />
        </svg>
      )
    },
    {
      id: 'goals',
      title: 'Эффективная постановка целей',
      desc: 'Set clear goals, drive focus and accountability.',
      iconBg: '#e0f2fe',
      iconColor: '#0284c7',
      icon: (
        <svg viewBox="0 0 24 24" width="22" height="22" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round">
          <circle cx="12" cy="12" r="10" />
          <circle cx="12" cy="12" r="6" />
          <circle cx="12" cy="12" r="2" />
          <path d="m22 2-7.5 7.5" />
        </svg>
      )
    },
    {
      id: 'communication',
      title: 'Effective Communication',
      desc: 'Communicate with clarity and influence.',
      iconBg: '#f3e8ff',
      iconColor: '#9333ea',
      icon: (
        <svg viewBox="0 0 24 24" width="22" height="22" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round">
          <path d="M7.9 20A9 9 0 1 0 4 16.1L2 22Z" />
          <path d="M15.8 15.8A6 6 0 0 0 17 12a6 6 0 0 0-6-6 6 6 0 0 0-4.2 1.8" />
        </svg>
      )
    },
    {
      id: 'team',
      title: 'Управление командой',
      desc: 'Build high-performing and engaged teams.',
      iconBg: '#e6fcf5',
      iconColor: '#059669',
      icon: (
        <svg viewBox="0 0 24 24" width="22" height="22" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round">
          <path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2" />
          <circle cx="9" cy="7" r="4" />
          <path d="M23 21v-2a4 4 0 0 0-3-3.87" />
          <path d="M16 3.13a4 4 0 0 1 0 7.75" />
        </svg>
      )
    },
    {
      id: 'problem-solving',
      title: 'Problem Solving & Decision Making',
      desc: 'Use structured tools to make better decisions.',
      iconBg: '#fff7ed',
      iconColor: '#ea580c',
      icon: (
        <svg viewBox="0 0 24 24" width="22" height="22" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round">
          <circle cx="12" cy="12" r="3" />
          <path d="M19.4 15a1.65 1.65 0 0 0 .33 1.82l.06.06a2 2 0 0 1 0 2.83 2 2 0 0 1-2.83 0l-.06-.06a1.65 1.65 0 0 0-1.82-.33 1.65 1.65 0 0 0-1 1.51V21a2 2 0 0 1-2 2 2 2 0 0 1-2-2v-.09A1.65 1.65 0 0 0 9 19.4a1.65 1.65 0 0 0-1.82.33l-.06.06a2 2 0 0 1-2.83 0 2 2 0 0 1 0-2.83l.06-.06a1.65 1.65 0 0 0 .33-1.82 1.65 1.65 0 0 0-1.51-1H3a2 2 0 0 1-2-2 2 2 0 0 1 2-2h.09A1.65 1.65 0 0 0 4.6 9a1.65 1.65 0 0 0-.33-1.82l-.06-.06a2 2 0 0 1 0-2.83 2 2 0 0 1 2.83 0l.06.06a1.65 1.65 0 0 0 1.82.33H9a1.65 1.65 0 0 0 1-1.51V3a2 2 0 0 1 2-2 2 2 0 0 1 2 2v.09a1.65 1.65 0 0 0 1 1.51 1.65 1.65 0 0 0 1.82-.33l.06-.06a2 2 0 0 1 2.83 0 2 2 0 0 1 0 2.83l-.06.06a1.65 1.65 0 0 0-.33 1.82V9a1.65 1.65 0 0 0 1.51 1H21a2 2 0 0 1 2 2 2 2 0 0 1-2 2h-.09a1.65 1.65 0 0 0-1.51 1z" />
        </svg>
      )
    },
    {
      id: 'influencing',
      title: 'Влияние без формальной власти',
      desc: 'Create impact across functions and stakeholders.',
      iconBg: '#e0f2fe',
      iconColor: '#0284c7',
      icon: (
        <svg viewBox="0 0 24 24" width="22" height="22" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round">
          <line x1="6" y1="20" x2="6" y2="12" />
          <line x1="12" y1="20" x2="12" y2="4" />
          <line x1="18" y1="20" x2="18" y2="16" />
        </svg>
      )
    },
    {
      id: 'conflict',
      title: 'Управление конфликтами',
      desc: 'Turn conflict into constructive conversations.',
      iconBg: '#f3e8ff',
      iconColor: '#9333ea',
      icon: (
        <svg viewBox="0 0 24 24" width="22" height="22" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round">
          <path d="M3 10.5 12 3l9 7.5V20a1 1 0 0 1-1 1H4a1 1 0 0 1-1-1z" />
          <path d="M12 11v4" />
          <circle cx="12" cy="17.5" r="0.8" fill="currentColor" />
        </svg>
      )
    },
    {
      id: 'meetings',
      title: 'Skills for Team Meetings',
      desc: 'Make meetings more focused, engaging and productive.',
      iconBg: '#fff7ed',
      iconColor: '#ea580c',
      icon: (
        <svg viewBox="0 0 24 24" width="22" height="22" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round">
          <path d="M4 15s1-1 4-1 5 2 8 2 4-1 4-1V3s-1 1-4 1-5-2-8-2-4 1-4 1z" />
          <line x1="4" y1="22" x2="4" y2="15" />
        </svg>
      )
    },
    {
      id: 'change',
      title: 'Change Management',
      desc: 'Navigate change with confidence and bring your team along.',
      iconBg: '#e6fcf5',
      iconColor: '#059669',
      icon: (
        <svg viewBox="0 0 24 24" width="22" height="22" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round">
          <path d="m8 3 4 8 5-5 5 15H2L8 3z" />
        </svg>
      )
    },
    {
      id: 'resilience',
      title: 'Resilience in Change',
      desc: 'Build personal and team resilience during times of uncertainty.',
      iconBg: '#ffe4ec',
      iconColor: '#e11d48',
      icon: (
        <svg viewBox="0 0 24 24" width="22" height="22" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round">
          <path d="M19 14c1.49-1.46 3-3.21 3-5.5A5.5 5.5 0 0 0 16.5 3c-1.76 0-3 .5-4.5 2-1.5-1.5-2.74-2-4.5-2A5.5 5.5 0 0 0 2 8.5c0 2.3 1.5 4.05 3 5.5l7 7Z" />
        </svg>
      )
    },
    {
      id: 'safety',
      title: 'Психологическая безопасность',
      desc: 'Build trust, openness and a culture where people can speak up.',
      iconBg: '#e0f8f3',
      iconColor: '#0d9488',
      icon: (
        <svg viewBox="0 0 24 24" width="22" height="22" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round">
          <path d="M15 14c.2-1 .7-1.7 1.5-2.5 1-.9 1.5-2.2 1.5-3.5A6 6 0 0 0 6 8c0 1 .2 2.2 1.5 3.5.7.7 1.3 1.5 1.5 2.5" />
          <path d="M9 18h6" />
          <path d="M10 22h4" />
        </svg>
      )
    },
    {
      id: 'cross-functional',
      title: 'Сотрудничество на стыке команд',
      desc: 'Work more effectively across teams and break down silos.',
      iconBg: '#e0f2fe',
      iconColor: '#0284c7',
      icon: (
        <svg viewBox="0 0 24 24" width="22" height="22" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round">
          <path d="M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2" />
          <circle cx="9" cy="7" r="4" />
          <path d="M22 21v-2a4 4 0 0 0-3-3.87" />
          <path d="M16 3.13a4 4 0 0 1 0 7.75" />
        </svg>
      )
    },
    {
      id: 'dei',
      title: 'Diversity, Equity & Inclusion',
      desc: 'Create more inclusive teams and stronger collaboration.',
      iconBg: '#f3e8ff',
      iconColor: '#9333ea',
      icon: (
        <svg viewBox="0 0 24 24" width="22" height="22" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round">
          <circle cx="12" cy="7" r="4" />
          <path d="M5.5 21v-2a6.5 6.5 0 0 1 13 0v2" />
        </svg>
      )
    },
    {
      id: 'efficiency',
      title: 'Operational Efficiency',
      desc: 'Work smarter, simplify processes and achieve better results.',
      iconBg: '#ffe4ec',
      iconColor: '#e11d48',
      icon: (
        <svg viewBox="0 0 24 24" width="22" height="22" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round">
          <line x1="6" y1="20" x2="6" y2="14" />
          <line x1="12" y1="20" x2="12" y2="8" />
          <line x1="18" y1="20" x2="18" y2="11" />
        </svg>
      )
    },
    {
      id: 'engagement',
      title: 'Employee Engagement',
      desc: 'Boost motivation, ownership and team performance.',
      iconBg: '#e0f8f3',
      iconColor: '#0d9488',
      icon: (
        <svg viewBox="0 0 24 24" width="22" height="22" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round">
          <polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2" />
        </svg>
      )
    },
    {
      id: 'talent',
      title: 'Talent Development',
      desc: 'Help people grow and reach their potential.',
      iconBg: '#e6fcf5',
      iconColor: '#059669',
      icon: (
        <svg viewBox="0 0 24 24" width="22" height="22" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round">
          <path d="M12 22v-8" />
          <path d="M12 14c-4 0-7-2-7-6a7 7 0 0 1 7-7 7 7 0 0 1 7 7c0 4-3 6-7 6z" />
        </svg>
      )
    },
    {
      id: 'coaching',
      title: 'Coaching & Feedback',
      desc: 'Give and receive feedback that drives growth.',
      iconBg: '#f3e8ff',
      iconColor: '#9333ea',
      icon: (
        <svg viewBox="0 0 24 24" width="22" height="22" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round">
          <path d="M22 10v6M2 10l10-5 10 5-10 5z" />
          <path d="M6 12v5c3 3 9 3 12 0v-5" />
        </svg>
      )
    },
    {
      id: 'strategic',
      title: 'Стратегическое мышление',
      desc: 'See the bigger picture and make better long-term decisions.',
      iconBg: '#ffe4ec',
      iconColor: '#e11d48',
      icon: (
        <svg viewBox="0 0 24 24" width="22" height="22" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round">
          <circle cx="12" cy="5" r="3" />
          <path d="M12 8v4" />
          <path d="M5 20v-2a2 2 0 0 1 2-2h10a2 2 0 0 1 2 2v2" />
          <path d="M7 16V12h10v4" />
        </svg>
      )
    }
  ];

  const moduleCategories = {
    leadership: ['all', 'line', 'mid'],
    goals: ['all', 'line'],
    communication: ['all', 'line', 'mid', 'teams'],
    team: ['all', 'line', 'teams'],
    'problem-solving': ['all', 'line', 'mid', 'teams'],
    influencing: ['all', 'line', 'mid'],
    conflict: ['all', 'line', 'mid', 'teams'],
    meetings: ['all', 'line', 'teams'],
    change: ['all', 'mid', 'teams'],
    resilience: ['all', 'line', 'mid', 'teams'],
    safety: ['all', 'line', 'mid', 'teams'],
    'cross-functional': ['all', 'mid', 'teams'],
    dei: ['all', 'mid', 'teams'],
    efficiency: ['all', 'mid', 'teams'],
    engagement: ['all', 'line', 'mid', 'teams'],
    talent: ['all', 'mid'],
    coaching: ['all', 'line', 'mid'],
    strategic: ['all', 'mid']
  };

  const filteredModules = activeTab === 'all'
    ? allModules
    : allModules.filter((m) => moduleCategories[m.id]?.includes(activeTab));

  return (
    <div className="mm-portal">
      {/* Backdrop Scrim */}
      <div className="mm-backdrop" onClick={onClose} />

      {/* Centered Modal */}
      <div className="mm-modal" role="dialog" aria-modal="true" aria-labelledby="mm-title">
        {/* Header Top Row: Eyebrow + Close Button */}
        <div className="mm-header-top">
          <span className="mm-eyebrow">TRAINING LIBRARY</span>
          <button className="mm-close-btn" onClick={onClose} aria-label="Close modal">
            <X size={22} />
          </button>
        </div>

        {/* Title Block */}
        <div className="mm-title-block">
          <h2 id="mm-title" className="mm-title">
            Explore our development modules
          </h2>
          <p className="mm-subtitle">
            Practical topics for managers and teams, designed for real workplace development.
          </p>
        </div>

        {/* Filter Tabs */}
        <div className="mm-tabs">
          <button
            type="button"
            className={`mm-tab ${activeTab === 'all' ? 'mm-tab--active' : ''}`}
            onClick={() => setActiveTab('all')}
          >
            All (18)
          </button>
          <button
            type="button"
            className={`mm-tab ${activeTab === 'line' ? 'mm-tab--active' : ''}`}
            onClick={() => setActiveTab('line')}
          >
            Line Managers
          </button>
          <button
            type="button"
            className={`mm-tab ${activeTab === 'mid' ? 'mm-tab--active' : ''}`}
            onClick={() => setActiveTab('mid')}
          >
            Mid-Level Managers
          </button>
          <button
            type="button"
            className={`mm-tab ${activeTab === 'teams' ? 'mm-tab--active' : ''}`}
            onClick={() => setActiveTab('teams')}
          >
            Команды
          </button>
        </div>

        {/* 18 Modules Grid */}
        <div className="mm-grid">
          {filteredModules.map((m) => (
            <div key={m.id} className="mm-card">
              <div
                className="mm-card-icon"
                style={{ backgroundColor: m.iconBg, color: m.iconColor }}
              >
                {m.icon}
              </div>
              <h3 className="mm-card-title">{m.title}</h3>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
