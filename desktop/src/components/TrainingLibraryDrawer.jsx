import React, { useState, useEffect } from 'react';
import { X, ChevronRight, ArrowRight } from 'lucide-react';
import './TrainingLibraryDrawer.css';
import ModulesModal from './ModulesModal';

export default function TrainingLibraryDrawer({ isOpen, onClose }) {
  const [isModalOpen, setIsModalOpen] = useState(false);

  // Handle escape key to close drawer
  useEffect(() => {
    const handleKeyDown = (e) => {
      if (e.key === 'Escape' && isOpen) {
        onClose();
      }
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [isOpen, onClose]);

  // Lock body scroll when drawer is open
  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = '';
    }
    return () => {
      document.body.style.overflow = '';
    };
  }, [isOpen]);

  if (!isOpen) return null;

  const modules = [
    {
      id: 'leadership',
      title: 'Leadership Fundamentals',
      desc: 'Build core leadership skills for everyday management.',
      iconBg: '#ffe5ee',
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
      title: 'Effective Goal Setting',
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
      title: 'Team Management',
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
      title: 'Influencing Without Authority',
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
    }
  ];

  return (
    <div className="tld-portal">
      {/* Backdrop Scrim */}
      <div className="tld-backdrop" onClick={onClose} />

      {/* Drawer Container */}
      <aside className="tld-drawer" role="dialog" aria-modal="true" aria-label="Training Library">
        {/* Top Action Bar */}
        <div className="tld-top-bar">
          <span className="tld-eyebrow">TRAINING LIBRARY</span>
          <div className="tld-top-actions">
            <a href="#contact" className="tld-demo-btn">
              Request a Demo <ArrowRight size={14} />
            </a>
            <button className="tld-close-btn" onClick={onClose} aria-label="Close sidebar">
              <X size={22} />
            </button>
          </div>
        </div>

        {/* Header content */}
        <div className="tld-header">
          <h2 className="tld-title">
            Development modules for real workplace impact
          </h2>
          <p className="tld-subtitle">
            Practical, engaging and evidence-based modules for managers and teams.
          </p>
        </div>



        {/* Module Cards List */}
        <div className="tld-modules-list">
          {modules.map((m) => (
            <div key={m.id} className="tld-module-card">
              <div
                className="tld-module-icon"
                style={{ backgroundColor: m.iconBg, color: m.iconColor }}
              >
                {m.icon}
              </div>
              <div className="tld-module-text">
                <h3 className="tld-module-title">{m.title}</h3>
                <p className="tld-module-desc">{m.desc}</p>
              </div>
              <div className="tld-module-arrow">
                <ChevronRight size={20} strokeWidth={2.2} />
              </div>
            </div>
          ))}

          {/* Bottom Highlight Card: See all 18 modules */}
          <div 
            className="tld-module-card tld-module-card--all"
            onClick={() => setIsModalOpen(true)}
            role="button"
            tabIndex={0}
            onKeyDown={(e) => {
              if (e.key === 'Enter' || e.key === ' ') {
                e.preventDefault();
                setIsModalOpen(true);
              }
            }}
          >
            <div className="tld-all-icon">
              <svg viewBox="0 0 24 24" width="22" height="22" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round">
                <rect x="3" y="3" width="7" height="7" rx="1.5" />
                <rect x="14" y="3" width="7" height="7" rx="1.5" />
                <rect x="14" y="14" width="7" height="7" rx="1.5" />
                <rect x="3" y="14" width="7" height="7" rx="1.5" />
              </svg>
            </div>
            <div className="tld-module-text">
              <h3 className="tld-all-title">See all 18 modules</h3>
              <p className="tld-all-desc">Explore the full training library</p>
            </div>
            <div className="tld-all-arrow">
              <ChevronRight size={20} strokeWidth={2.2} />
            </div>
          </div>
        </div>
      </aside>

      {/* Centered 18 Modules Modal */}
      <ModulesModal
        isOpen={isModalOpen}
        onClose={() => setIsModalOpen(false)}
      />
    </div>
  );
}
