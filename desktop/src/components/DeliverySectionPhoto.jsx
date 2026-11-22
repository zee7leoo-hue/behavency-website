import React, { useState } from 'react';
import { Users, ChevronDown, ArrowRight } from 'lucide-react';
import './DeliverySectionPhoto.css';
import ModulesModal from './ModulesModal';

export default function DeliverySectionPhoto() {
  const [isModalOpen, setIsModalOpen] = useState(false);

  const cards = [
    {
      id: 'elearning',
      title: 'E-learning',
      desc: (
        <>
          Flexible and self-paced, so teams can<br className="dsp-card-desc-br" />
          learn anytime, anywhere.
        </>
      ),
      iconModifier: 'elearning',
      icon: (
        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
          <rect x="3" y="4" width="18" height="13" rx="2.5" />
          <path d="M10.5 17v2h3V17" />
          <line x1="2" y1="19" x2="22" y2="19" />
        </svg>
      ),
    },
    {
      id: 'live',
      title: 'Live online',
      desc: (
        <>
          Interactive and engaging sessions<br className="dsp-card-desc-br" />
          with our expert facilitators.
        </>
      ),
      iconModifier: 'live',
      icon: <Users size={24} strokeWidth={2} />,
    },
    {
      id: 'inperson',
      title: 'In-person',
      desc: (
        <>
          Maximum impact through face-to-face<br className="dsp-card-desc-br" />
          collaboration and hands-on learning.
        </>
      ),
      iconModifier: 'inperson',
      icon: (
        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
          <path d="M12 7h7a2 2 0 0 1 2 2v6a2 2 0 0 1-2 2h-7" />
          <circle cx="8" cy="9.5" r="3" />
          <path d="M3.5 19.5a4.5 4.5 0 0 1 9 0" />
        </svg>
      ),
    },
    {
      id: 'blended',
      title: 'Blended',
      desc: (
        <>
          A combination that works for your team —<br className="dsp-card-desc-br" />
          online and in-person.
        </>
      ),
      iconModifier: 'blended',
      icon: (
        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
          <path d="m12 3 9 5-9 5-9-5 9-5Z" />
          <path d="m3 12 9 5 9-5" />
          <path d="m3 17 9 5 9-5" />
        </svg>
      ),
    },
  ];

  return (
    <section className="dsp-section" id="delivery-photo">
      <div className="dsp-container">
        {/* Top Hero Split with Blended Lady Photo */}
        <div className="dsp-hero">
          <div className="dsp-hero-text">
            <div className="dsp-eyebrow">
              <span className="dsp-eyebrow-line"></span>
              <span className="dsp-eyebrow-text">THE DEVELOPMENT JOURNEY</span>
            </div>
            <h2 className="dsp-headline">
              You choose how your<br className="dsp-headline-br" />
              <em className="dsp-headline-italic">people</em> learn.
            </h2>
            <p className="dsp-subheading">
              The recommended modules can be delivered in multiple formats, so you can<br className="dsp-subheading-br" />
              choose what works best for your team, your goals and your schedule.
            </p>
          </div>

          <div className="dsp-hero-visual">
            <div className="dsp-photo-wrap">
              <svg className="dsp-accent-lines" width="46" height="38" viewBox="0 0 46 38" fill="none" aria-hidden="true">
                <path d="M10 32L4 12" stroke="#1da2b4" strokeWidth="2.5" strokeLinecap="round" />
                <path d="M23 34L23 6" stroke="#1da2b4" strokeWidth="2.5" strokeLinecap="round" />
                <path d="M36 32L42 14" stroke="#1da2b4" strokeWidth="2.5" strokeLinecap="round" />
              </svg>
              <img
                src="/delivery-pebble-flipped.png"
                alt="Facilitators and team collaboration"
                className="dsp-photo-img"
              />
            </div>
          </div>
        </div>

        {/* 2x2 Delivery Cards Grid */}
        <div className="dsp-grid">
          {cards.map((card) => (
            <div
              key={card.id}
              className={`dsp-card dsp-card--${card.id}`}
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
              <div className={`dsp-card-icon-box dsp-card-icon-box--${card.iconModifier}`}>
                {card.icon}
              </div>
              <div className="dsp-card-content">
                <h3 className="dsp-card-title">{card.title}</h3>
                <p className="dsp-card-desc">{card.desc}</p>
              </div>
              <div className="dsp-card-arrow-btn" aria-label={`View details for ${card.title}`}>
                <ArrowRight size={16} strokeWidth={2.2} />
              </div>
            </div>
          ))}
        </div>

        {/* Looking for a specific topic callout */}
        <div className="dsp-topic-callout">
          <div className="dsp-topic-divider-row">
            <div className="dsp-topic-line"></div>
            <span className="dsp-topic-eyebrow">
              <span className="dsp-topic-dash">—</span> LOOKING FOR A SPECIFIC TOPIC? <span className="dsp-topic-dash">—</span>
            </span>
            <div className="dsp-topic-line"></div>
          </div>

          <div 
            className="dsp-topic-content"
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
            <h3 className="dsp-topic-title">
              See what your team can learn <span className="dsp-topic-arrow">→</span>
            </h3>
            <p className="dsp-topic-desc">
              Explore our training library with all topics and modules<br />
              across our development programmes.
            </p>
          </div>
        </div>

        {/* Footer with scroll */}
        <div className="dsp-footer">
          <div className="dsp-scroll">
            <span className="dsp-scroll-text">SCROLL TO EXPLORE MORE</span>
            <ChevronDown size={20} className="dsp-scroll-icon" />
          </div>
        </div>
      </div>

      {/* Centered 18 Modules Modal */}
      <ModulesModal
        isOpen={isModalOpen}
        onClose={() => setIsModalOpen(false)}
      />
    </section>
  );
}
