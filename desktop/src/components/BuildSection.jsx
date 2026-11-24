import StagePill from './StagePill'
import React, { useState } from 'react';
import './BuildSection.css';

/* ── SVG Icons ── */
const IconLayers = () => (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
    <polygon points="12 2 2 7 12 12 22 7 12 2"/>
    <polyline points="2 17 12 22 22 17"/>
    <polyline points="2 12 12 17 22 12"/>
  </svg>
);
const IconMonitor = () => (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
    <rect x="2" y="3" width="20" height="14" rx="2"/>
    <polyline points="8 21 12 17 16 21"/>
    <line x1="12" y1="17" x2="12" y2="21"/>
  </svg>
);
const IconUsers2 = () => (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
    <path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2"/>
    <circle cx="9" cy="7" r="4"/>
    <path d="M23 21v-2a4 4 0 0 0-3-3.87"/>
    <path d="M16 3.13a4 4 0 0 1 0 7.75"/>
  </svg>
);
const IconPerson = () => (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
    <circle cx="12" cy="7" r="4"/>
    <path d="M4 21v-1a8 8 0 0 1 16 0v1"/>
  </svg>
);
const IconBlend = () => (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
    <circle cx="12" cy="12" r="3"/>
    <path d="M12 2v4M12 18v4M4.93 4.93l2.83 2.83M16.24 16.24l2.83 2.83M2 12h4M18 12h4M4.93 19.07l2.83-2.83M16.24 7.76l2.83-2.83"/>
  </svg>
);
const IconArrowRight = () => (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" width="18" height="18">
    <line x1="5" y1="12" x2="19" y2="12"/>
    <polyline points="12 5 19 12 12 19"/>
  </svg>
);
const IconChevronRight = () => (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" width="14" height="14">
    <polyline points="9 18 15 12 9 6"/>
  </svg>
);
const IconCalendar = () => (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" width="14" height="14">
    <rect x="3" y="4" width="18" height="18" rx="2"/>
    <line x1="16" y1="2" x2="16" y2="6"/>
    <line x1="8" y1="2" x2="8" y2="6"/>
    <line x1="3" y1="10" x2="21" y2="10"/>
  </svg>
);

/* ── Card 01: Team Insights mockup ── */
const TeamInsightsMockup = () => {
  const bars = [
    { label: 'Collaboration', color: '#ef4444', width: '82%' },
    { label: 'Communication', color: '#f59e0b', width: '68%' },
    { label: 'Accountability', color: '#f59e0b', width: '54%' },
    { label: 'Adaptability', color: '#22c55e', width: '78%' },
    { label: 'Psychological Safety', color: '#22c55e', width: '62%' },
  ];
  const navItems = ['Overview', 'Team Dynamics', 'Strengths', 'Development Areas', 'Role Balance'];

  return (
    <div className="bs-mock bs-mock--insights">
      <div className="bs-mock-header">
        <div className="bs-mock-header-left">
          <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" width="18" height="18" strokeLinecap="round" strokeLinejoin="round">
            <path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2"/><circle cx="9" cy="7" r="4"/>
            <path d="M23 21v-2a4 4 0 0 0-3-3.87"/><path d="M16 3.13a4 4 0 0 1 0 7.75"/>
          </svg>
          <span className="bs-mock-title">Team Insights</span>
        </div>
        <div className="bs-mock-header-right">
          <span className="bs-mock-team-name">Team Alpha</span>
          <span className="bs-mock-team-count">12 participants</span>
        </div>
      </div>
      <div className="bs-mock-body">
        <div className="bs-mock-sidebar">
          {navItems.map((item, i) => (
            <div key={i} className={`bs-mock-nav-item${i === 0 ? ' bs-mock-nav-item--active' : ''}`}>
              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" width="13" height="13" strokeLinecap="round" strokeLinejoin="round">
                {i === 0 && <><circle cx="12" cy="12" r="10"/><line x1="12" y1="16" x2="12" y2="12"/><line x1="12" y1="8" x2="12.01" y2="8"/></>}
                {i === 1 && <><path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2"/><circle cx="9" cy="7" r="4"/></>}
                {i === 2 && <><polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2"/></>}
                {i === 3 && <><path d="M3 3l7.07 16.97 2.51-7.39 7.39-2.51L3 3z"/><path d="M13 13l6 6"/></>}
                {i === 4 && <><circle cx="12" cy="12" r="10"/><line x1="2" y1="12" x2="22" y2="12"/><path d="M12 2a15.3 15.3 0 0 1 4 10 15.3 15.3 0 0 1-4 10 15.3 15.3 0 0 1-4-10 15.3 15.3 0 0 1 4-10z"/></>}
              </svg>
              <span>{item}</span>
            </div>
          ))}
        </div>
        <div className="bs-mock-content">
          <div className="bs-mock-section-title">Team capability profile</div>
          <div className="bs-mock-bars">
            {bars.map((b, i) => (
              <div key={i} className="bs-mock-bar-row">
                <span className="bs-mock-bar-label">{b.label}</span>
                <div className="bs-mock-bar-track">
                  <div className="bs-mock-bar-fill" style={{ width: b.width, backgroundColor: b.color }} />
                </div>
                <span className="bs-mock-bar-val">{['4.1','3.8','3.2','3.9','3.6'][i]}</span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

/* ── Card 02: Recommended mockup ── */
const RecommendedMockup = () => {
  const recs = [
    {
      title: 'Psychological Safety',
      sub: 'Building openness, trust & speaking up',
      color: '#f87171',
      icon: (
        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" width="28" height="28">
          <path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2"/><circle cx="9" cy="7" r="4"/>
          <path d="M23 21v-2a4 4 0 0 0-3-3.87"/><path d="M16 3.13a4 4 0 0 1 0 7.75"/>
        </svg>
      )
    },
    {
      title: 'Constructive Conflict',
      sub: 'Turning disagreement into productive dialogue',
      color: '#a78bfa',
      icon: (
        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" width="28" height="28">
          <path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z"/>
        </svg>
      )
    },
    {
      title: 'Team Leadership',
      sub: 'Strengthening ownership & accountability',
      color: '#34d399',
      icon: (
        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" width="28" height="28">
          <polygon points="3 11 22 2 13 21 11 13 3 11"/>
        </svg>
      )
    },
  ];

  return (
    <div className="bs-mock bs-mock--recommend">
      <div className="bs-mock-header">
        <div className="bs-mock-header-left">
          <div className="bs-mock-rec-icon">
            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" width="16" height="16" strokeLinecap="round" strokeLinejoin="round">
              <polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2"/>
            </svg>
          </div>
          <span className="bs-mock-title">Recommended for you</span>
        </div>
        <span className="bs-mock-badge">3 priorities</span>
      </div>
      <div className="bs-mock-rec-list">
        {recs.map((r, i) => (
          <div key={i} className="bs-mock-rec-item">
            <div className="bs-mock-rec-thumb" style={{ backgroundColor: `${r.color}20`, color: r.color }}>
              {r.icon}
            </div>
            <div className="bs-mock-rec-text">
              <div className="bs-mock-rec-title">{r.title}</div>
              <div className="bs-mock-rec-sub">{r.sub}</div>
            </div>
            <div className="bs-mock-rec-chevron"><IconChevronRight /></div>
          </div>
        ))}
      </div>
    </div>
  );
};

/* ── Card 03: Masterplan mockup ── */
const MasterplanMockup = () => {
  const tools = [
    { title: 'Run more effective 1:1 meetings', sub: 'Step-by-step guide and template' },
    { title: 'Give clearer feedback', sub: 'Practical framework and examples' },
    { title: 'Set and align team goals', sub: 'Template and talking points' },
  ];

  return (
    <div className="bs-mock bs-mock--masterplan">
      <div className="bs-mock-header">
        <div className="bs-mock-header-left">
          <div className="bs-mock-mp-icon">
            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" width="16" height="16" strokeLinecap="round" strokeLinejoin="round">
              <rect x="3" y="3" width="18" height="18" rx="2"/><path d="M3 9h18M9 21V9"/>
            </svg>
          </div>
          <span className="bs-mock-title">Masterplan</span>
        </div>
      </div>
      <div className="bs-mock-mp-section">
        <div className="bs-mock-mp-flag">
          <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" width="16" height="16" strokeLinecap="round" strokeLinejoin="round">
            <path d="M4 15s1-1 4-1 5 2 8 2 4-1 4-1V3s-1 1-4 1-5-2-8-2-4 1-4 1z"/><line x1="4" y1="22" x2="4" y2="15"/>
          </svg>
        </div>
        <div>
          <div className="bs-mock-mp-prog-title">Team Leadership</div>
          <div className="bs-mock-mp-prog-sub">From learning to everyday practice</div>
        </div>
      </div>
      <div className="bs-mock-mp-tabs">
        <span className="bs-mock-mp-tab bs-mock-mp-tab--active">Your tools</span>
        <span className="bs-mock-mp-tab">Progress</span>
        <span className="bs-mock-mp-tab">Resources</span>
      </div>
      <div className="bs-mock-mp-tools">
        {tools.map((t, i) => (
          <div key={i} className="bs-mock-mp-tool">
            <div className="bs-mock-mp-tool-icon">
              {i === 0 && <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" width="15" height="15" strokeLinecap="round" strokeLinejoin="round"><path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z"/><polyline points="14 2 14 8 20 8"/></svg>}
              {i === 1 && <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" width="15" height="15" strokeLinecap="round" strokeLinejoin="round"><path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2"/><circle cx="9" cy="7" r="4"/></svg>}
              {i === 2 && <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" width="15" height="15" strokeLinecap="round" strokeLinejoin="round"><path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z"/></svg>}
            </div>
            <div className="bs-mock-mp-tool-text">
              <div className="bs-mock-mp-tool-title">{t.title}</div>
              <div className="bs-mock-mp-tool-sub">{t.sub}</div>
            </div>
            <button className="bs-mock-mp-cal-btn"><IconCalendar /><span>Add to calendar</span></button>
          </div>
        ))}
      </div>
    </div>
  );
};

/* ── Main Component ── */
export default function BuildSection() {
  const wrapRef = React.useRef(null);
  const iframeRef = React.useRef(null);
  const sectionRef = React.useRef(null);

  // The animation is the supplied showcase page, played unchanged in its own frame. The frame measures where the animation's band
  // sits and scales/crops it to the width of the container, so it fits the same on every screen and browser.
  const fit = React.useCallback(() => {
    const wrap = wrapRef.current;
    const f = iframeRef.current;
    if (!wrap || !f) return;
    try {
      const w = f.contentWindow;
      const band = w && w.document && w.document.getElementById('sc-band');
      if (!band || !f.clientWidth) return;
      const ratio = (w.innerWidth / f.clientWidth) || 1;
      const r = band.getBoundingClientRect();
      if (!r.width) return;
      // show the whole band, with its dark blue border as in the original
      const bw = r.width / ratio, bh = r.height / ratio, bl = r.left / ratio, bt = r.top / ratio;
      const kb = bw / 900;
      const ix = 0, iy = 0;
      const s = wrap.offsetWidth / (bw - 2 * ix);
      f.style.transformOrigin = '0 0';
      f.style.transform = `scale(${s})`;
      f.style.left = `${-(bl + ix) * s}px`;
      f.style.top = `${-(bt + iy) * s}px`;
      wrap.style.height = `${(bh - 2 * iy) * s}px`;
      f.style.opacity = 1;
    } catch (e) { /* frame not ready */ }
  }, []);

  React.useEffect(() => {
    window.addEventListener('resize', fit);
    const t = [100, 400, 1000, 2500].map((ms) => setTimeout(fit, ms));
    return () => { window.removeEventListener('resize', fit); t.forEach(clearTimeout); };
  }, [fit]);

  const cards = [
    {
      num: '01',
      title: 'What we identified',
      sub: 'A clear view of capabilities.',
      mockup: <TeamInsightsMockup />,
    },
    {
      num: '02',
      title: 'What we recommend',
      sub: 'Relevant modules based on your results.',
      mockup: <RecommendedMockup />,
    },
    {
      num: '03',
      title: 'A plan to make it stick',
      sub: 'A practical Masterplan to turn learning into everyday habits.',
      mockup: <MasterplanMockup />,
    },
  ];

  const formats = [
    { icon: <IconMonitor />, label: 'E-learning' },
    { icon: <IconUsers2 />, label: 'Live online' },
    { icon: <IconPerson />, label: 'In-person' },
    { icon: <IconBlend />, label: 'Blended' },
  ];

  return (
    <section className="bs-section" ref={sectionRef}>
      <div className="bs-container">

        <div className="bs-split">
          {/* Workflow Animation (left) */}
          <div className="bs-animation-wrap" ref={wrapRef}>
            <iframe
              ref={iframeRef}
              src="/showcase-desktop/index.html"
              className="bs-animation-frame"
              title="How a priority becomes a programme and a Masterplan"
              scrolling="no"
              frameBorder="0"
              loading="lazy"
              tabIndex={-1}
              onLoad={fit}
            />
          </div>

          {/* Header (right) */}
          <div className="bs-header">
            <StagePill num="03" title="Build" sub="Develop the right capabilities" tone="orange" />
            <h2 className="bs-heading">Turn insights into<br /><em>targeted development</em></h2>
            <p className="bs-subheading">Each person’s results point to the programmes that matter most for them. Every programme comes with a Masterplan: a practical plan to use it at work.</p>
          </div>
        </div>

      </div>
    </section>
  );
}
