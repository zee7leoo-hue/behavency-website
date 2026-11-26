import React from 'react';
import { Users, Sparkles, ArrowRight } from 'lucide-react';
import './DeliverySectionV2.css';

export default function DeliverySectionV2() {
  const formats = [
    {
      id: 'elearning',
      title: 'E-learning',
      desc: 'Flexible and self-paced, so teams can learn anytime, откуда угодно.',
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
      desc: 'Interactive and engaging sessions with our expert facilitators.',
      iconModifier: 'live',
      icon: <Users size={24} strokeWidth={2} />,
    },
    {
      id: 'inperson',
      title: 'Очно',
      desc: 'Maximum impact through face-to-face collaboration and hands-on learning.',
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
      desc: 'A tailored combination that fits your team, your goals and your schedule.',
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
    <section className="ds2-section" id="delivery-v2">
      <div className="ds2-container">
        {/* Left Column: Heading + Copy + Photo */}
        <div className="ds2-left-col">
          <div className="ds2-eyebrow">
            <span className="ds2-eyebrow-line"></span>
            <span className="ds2-eyebrow-text">ПУТЬ РАЗВИТИЯ</span>
          </div>
          <h2 className="ds2-headline">
            You choose how<br />
            your <em className="ds2-headline-italic">people</em> learn.
          </h2>
          <p className="ds2-subheading">
            A flexible, human-led learning experience that<br className="ds2-subheading-br" />
            combines the expertise of our facilitators with<br className="ds2-subheading-br" />
            the power of AI and technology.
          </p>

          <div className="ds2-photo-wrap">
            <img
              src="/delivery-v2-photo.png"
              alt="Facilitators and team collaboration"
              className="ds2-photo-img"
            />
          </div>
        </div>

        {/* Vertical Divider */}
        <div className="ds2-vertical-divider" aria-hidden="true"></div>

        {/* Right Column: 4 List Items + Watercolor Pill Badge */}
        <div className="ds2-right-col">
          <div className="ds2-formats-list">
            {formats.map((item) => (
              <div key={item.id} className="ds2-format-row">
                <div className={`ds2-format-icon-box ds2-format-icon-box--${item.iconModifier}`}>
                  {item.icon}
                </div>
                <div className="ds2-format-text">
                  <h3 className="ds2-format-title">{item.title}</h3>
                  <p className="ds2-format-desc">{item.desc}</p>
                </div>
                <div className="ds2-format-arrow" aria-label={`Learn more about ${item.title}`}>
                  <ArrowRight size={15} strokeWidth={2.2} />
                </div>
              </div>
            ))}
          </div>

          {/* Bottom Right Watercolor Pill Badge */}
          <div className="ds2-badge-wrap">
            <div className="ds2-badge">
              <div className="ds2-badge-item">
                <div className="ds2-badge-icon ds2-badge-icon--teal">
                  <Users size={22} strokeWidth={2} />
                </div>
                <div className="ds2-badge-label">
                  <span className="ds2-badge-bold">Human expertise</span>
                  <span className="ds2-badge-light">& facilitation</span>
                </div>
              </div>

              <div className="ds2-badge-divider"></div>

              <div className="ds2-badge-item">
                <div className="ds2-badge-icon ds2-badge-icon--purple">
                  <Sparkles size={22} strokeWidth={2} />
                </div>
                <div className="ds2-badge-label">
                  <span className="ds2-badge-bold">AI & technology</span>
                  <span className="ds2-badge-light">for greater impact</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
