import React, { useState } from 'react';
import { Users, ChevronDown, ArrowRight } from 'lucide-react';
import './DeliverySection.css';
import ModulesModal from './ModulesModal';

export default function DeliverySection() {
  const [isModalOpen, setIsModalOpen] = useState(false);

  const cards = [
    {
      id: 'elearning',
      title: 'E-learning',
      desc: (
        <>
          Flexible and self-paced, so teams can<br className="ds-card-desc-br" />
          learn anytime, откуда угодно.
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
      title: 'Онлайн с тренером',
      desc: (
        <>
          Interactive and engaging sessions<br className="ds-card-desc-br" />
          with our expert facilitators.
        </>
      ),
      iconModifier: 'live',
      icon: <Users size={24} strokeWidth={2} />,
    },
    {
      id: 'inperson',
      title: 'Очно',
      desc: (
        <>
          Maximum impact through face-to-face<br className="ds-card-desc-br" />
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
      title: 'Смешанный формат',
      desc: (
        <>
          A combination that works for your team —<br className="ds-card-desc-br" />
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
    <section className="ds-section" id="delivery">
      <div className="ds-container">
        {/* Top Hero Split */}
        <div className="ds-hero">
          <div className="ds-hero-text">
            <div className="ds-eyebrow">
              <span className="ds-eyebrow-line"></span>
              <span className="ds-eyebrow-text">ПУТЬ РАЗВИТИЯ</span>
            </div>
            <h2 className="ds-headline">
              You choose how your<br className="ds-headline-br" />
              <em className="ds-headline-italic">people</em> learn.
            </h2>
            <p className="ds-subheading">
              The recommended modules can be delivered in multiple formats, so you can<br className="ds-subheading-br" />
              choose what works best for your team, your goals and your schedule.
            </p>
          </div>

          <div className="ds-hero-visual">
            <img
              src="/delivery-3d-cards.png"
              alt="Interactive learning formats"
              className="ds-3d-img"
            />
          </div>
        </div>

        {/* 2x2 Delivery Cards Grid */}
        <div className="ds-grid">
          {cards.map((card) => (
            <div
              key={card.id}
              className={`ds-card ds-card--${card.id}`}
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
              <div className={`ds-card-icon-box ds-card-icon-box--${card.iconModifier}`}>
                {card.icon}
              </div>
              <div className="ds-card-content">
                <h3 className="ds-card-title">{card.title}</h3>
                <p className="ds-card-desc">{card.desc}</p>
              </div>
              <div className="ds-card-arrow-btn" aria-label={`View details for ${card.title}`}>
                <ArrowRight size={16} strokeWidth={2.2} />
              </div>
            </div>
          ))}
        </div>

        {/* Looking for a specific topic callout */}
        <div className="ds-topic-callout">
          <div className="ds-topic-divider-row">
            <div className="ds-topic-line"></div>
            <span className="ds-topic-eyebrow">
              <span className="ds-topic-dash">—</span> LOOKING FOR A SPECIFIC TOPIC? <span className="ds-topic-dash">—</span>
            </span>
            <div className="ds-topic-line"></div>
          </div>

          <div 
            className="ds-topic-content"
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
            <h3 className="ds-topic-title">
              See what your team can learn <span className="ds-topic-arrow">→</span>
            </h3>
            <p className="ds-topic-desc">
              Explore our training library with all topics and modules<br />
              across our development programmes.
            </p>
          </div>
        </div>

        {/* Footer with scroll */}
        <div className="ds-footer">
          <div className="ds-scroll">
            <span className="ds-scroll-text">SCROLL TO EXPLORE MORE</span>
            <ChevronDown size={20} className="ds-scroll-icon" />
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
