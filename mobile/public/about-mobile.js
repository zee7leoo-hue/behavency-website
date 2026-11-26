// Phone site: About page (opens from the menu as its own full-screen page) and "Log in" in the menu.
// Remove this file and its <script> tag to take both out.
(function () {
  const CSS = `
  .pab { position: fixed; inset: 0; z-index: 9990; background: #fbfaff; overflow-y: auto; -webkit-overflow-scrolling: touch;
    transform: translateY(16px); opacity: 0; visibility: hidden; transition: opacity .3s, transform .35s cubic-bezier(.22,1,.36,1), visibility 0s .35s; }
  .pab.open { transform: none; opacity: 1; visibility: visible; transition: opacity .3s, transform .35s cubic-bezier(.22,1,.36,1); }
  html.pab-lock, html.pab-lock body { overflow: hidden !important; }
  .pab * { box-sizing: border-box; }
  .pab h1, .pab h2, .pab h3, .pab p, .pab ol { margin: 0; padding: 0; }
  .pab ol { list-style: none; }
  .pab-bar { position: sticky; top: 0; z-index: 2; display: flex; align-items: center; height: 56px; padding: 0 14px; background: rgba(247,245,252,.94); backdrop-filter: blur(8px); border-bottom: 1px solid #ebe8f3; }
  .pab-back { display: inline-flex; align-items: center; gap: 8px; border: 0; background: none; padding: 8px; font: 600 14px/1 Inter, Arial, sans-serif; color: #3a4364; cursor: pointer; }
  .pab-back svg { width: 18px; height: 18px; fill: none; stroke: currentColor; stroke-width: 2.2; stroke-linecap: round; stroke-linejoin: round; }
  .pab-in { max-width: 520px; margin: 0 auto; padding: 36px 22px 72px; font-family: Inter, Arial, sans-serif; color: #0f1b3d; text-align: left; }
  .pab-pill { display: table; font: 600 12px/1 Inter, sans-serif; color: #137a6c; background: #e3f4f0; border-radius: 999px; padding: 7px 12px; }
  .pab-ttl { margin-top: 16px !important; font: 700 36px/39px "Source Serif 4", Georgia, serif; letter-spacing: -.03em; color: #0b1138; font-variation-settings: "opsz" 30; text-wrap: balance; }
  .pab-ttl em { display: block; font-style: italic; font-weight: 500; letter-spacing: -.02em; color: #1a8a7a; }
  .pab-lead { margin-top: 16px !important; font: 400 15.6px/22.6px Inter, sans-serif; color: #1c2540; }
  .pab-story { margin-top: 34px !important; position: relative; }
  .pab-story::before { content: ""; position: absolute; left: 7px; top: 10px; bottom: 18px; width: 2px; border-radius: 2px; background: #e3e6ef; }
  .pab-sy { position: relative; padding: 0 0 26px 34px; }
  .pab-sy:last-child { padding-bottom: 0; }
  .pab-sy::before { content: ""; position: absolute; left: 0; top: 5px; width: 16px; height: 16px; border-radius: 50%; background: #fff; box-shadow: inset 0 0 0 2px #1f2a5a; }
  .pab-sy:last-child::before { background: #1f2a5a; box-shadow: 0 0 0 5px rgba(31,42,90,.14); }
  .pab-ago { display: inline-block; font: 600 11px/1 Inter, sans-serif; letter-spacing: .12em; text-transform: uppercase; color: #8a83a8; margin-bottom: 6px; }
  .pab-sy b { display: block; font: 700 28px/1 "Source Serif 4", Georgia, serif; letter-spacing: -.02em; color: #1f2a5a; }
  .pab-sy h3 { margin-top: 6px !important; font: 600 16.4px/1.3 Inter, sans-serif; letter-spacing: -.012em; color: #0f1b3d; }
  .pab-sy p { margin-top: 4px !important; font: 400 14.6px/21px Inter, sans-serif; color: #4a5170; }
  .pab-team { margin-top: 40px; padding-top: 30px; border-top: 1px solid #eceaf3; }
  /* 25 Nov: "Our vision" and "Who we are", between the story and the team */
  .pab-who { margin-top: 40px; padding-top: 30px; border-top: 1px solid #eceaf3; }
  .pab-who + .pab-who { margin-top: 34px; padding-top: 0; border-top: 0; }
  .pab-in > .pab-who:first-child { margin-top: 4px; padding-top: 0; border-top: 0; }
  .pab-sep { margin: 40px 0 32px; border-top: 1px solid #eceaf3; }
  .pab-who h2 { margin-top: 14px !important; font: 700 26px/30px "Source Serif 4", Georgia, serif; letter-spacing: -.025em; color: #0b1138; font-variation-settings: "opsz" 30; }
  .pab-who h2 { text-wrap: balance; }
  .pab-who h2 em { font-style: italic; font-weight: 500; color: #1a8a7a; }
  .pab-who p { margin-top: 14px !important; font: 400 15.6px/23.5px Inter, sans-serif; color: #1c2540; }
  .pab-pp em { display: block; width: 28px; height: 3px; border-radius: 3px; background: #1a8a7a; margin: 10px 0 0; }
  .pab-pp:nth-child(even) em { margin-left: auto; }
  .pab-pp i { display: block; margin-top: 7px; font: 400 13.6px/1.4 Inter, sans-serif; font-style: normal; color: #3d4560; }
  .pab-eb { display: flex; align-items: center; gap: 12px; font: 600 11.6px/1.2 Inter, sans-serif; letter-spacing: .16em; text-transform: uppercase; color: #3a4364; }
  .pab-eb::before { content: ""; width: 24px; height: 1.5px; background: currentColor; opacity: .5; }
  .pab-team h2 { margin-top: 14px !important; font: 700 30px/33px "Source Serif 4", Georgia, serif; letter-spacing: -.03em; color: #0b1138; font-variation-settings: "opsz" 30; }
  .pab-team h2 em { font-style: italic; font-weight: 500; color: #1a8a7a; }
  .pab-team .pab-lead { font-size: 15px; line-height: 22px; }
  .pab-stack { display: grid; gap: 4px; margin-top: 24px; }
  .pab-pp { display: flex; align-items: center; gap: 18px; padding: 10px 0; }
  .pab-pp:nth-child(even) { flex-direction: row-reverse; text-align: right; }
  .pab-pp img { width: 132px; height: 132px; border-radius: 50%; object-fit: cover; flex: none; background: #f4f2fa; }
  .pab-pp b { display: block; font: 700 20px/1.15 "Source Serif 4", Georgia, serif; letter-spacing: -.02em; color: #0b1138; }
  .pab-pp span { display: block; margin-top: 5px; font: 500 13.8px/1.3 Inter, sans-serif; color: #5a6178; }
  .pab-end { margin-top: 44px; padding: 28px 22px 26px; background: #fff; border-radius: 22px; box-shadow: 0 0 0 1px rgba(20,35,75,.06), 0 20px 40px -30px rgba(30,25,80,.3); text-align: center; }
  .pab-end h2 { font: 700 26px/30px "Source Serif 4", Georgia, serif; letter-spacing: -.025em; color: #0b1138; font-variation-settings: "opsz" 30; text-wrap: balance; }
  .pab-end h2 em { font-style: italic; font-weight: 500; color: #1a8a7a; }
  .pab-cta { display: block; width: 100%; margin-top: 20px; border: 0; border-radius: 12px; padding: 15px; background: #0f1b3d; color: #fff; font: 600 15.5px/1 Inter, Arial, sans-serif; cursor: pointer; }
  .pab-in { padding-bottom: 48px; }
  .pab-rise { opacity: 0; transform: translateY(12px); transition: opacity .7s, transform .8s cubic-bezier(.22,1,.36,1); }
  .pab-rise.shown { opacity: 1; transform: none; }
  @media (prefers-reduced-motion: reduce) { .pab, .pab-rise { transition: none; opacity: 1; transform: none; } .pab:not(.open) { opacity: 0; } }
  .nav-menu a.pab-login { font-weight: 600; }
  /* the menu panel is solid, and only our items show */
  .nav-menu { background: #fbfaff !important; box-shadow: 0 18px 30px -18px rgba(20,25,70,.25); }
  .nav-menu > a:not(.pab-item):not(.nav-cta) { display: none !important; }
  .nav-menu a.pab-journey { display: flex !important; align-items: center; justify-content: space-between; }
  .nav-menu a.pab-journey::after { content: ''; width: 8px; height: 8px; border-right: 2px solid currentColor; border-bottom: 2px solid currentColor; transform: rotate(45deg) translateY(-3px); transition: transform .25s; }
  .nav-menu a.pab-journey.open::after { transform: rotate(-135deg) translateY(-3px); }
  .pab-sub { display: none; padding: 4px 0 8px 12px; border-bottom: 1px solid #eceef5; }
  .pab-journey.open + .pab-sub { display: block; }
  .nav-menu .pab-sub a.pab-stage { border-bottom: 0 !important; padding: 9px 0 !important; display: flex !important; align-items: center; gap: 12px; font-size: 15px; }
  .pab-stage i { font: 700 12px/1 Inter, sans-serif; font-style: normal; letter-spacing: .06em; }
  `;
  const STORY = [
    ['', '2007', 'OGI Europe is founded', 'We start training managers and their teams: how they lead, decide and work together.'],
    ['10 years later', '2017', 'Across Europe and Central Asia', 'Our trainers work with managers in more than 30 countries, for companies such as Nestlé, Bayer and Heineken.'],
    ['5 years later', '2022', 'The realisation', 'Training alone doesn’t change behaviour. People leave inspired, and by Monday the old habits are back. And nothing connects the assessment, the workshop and what happens next.'],
    ['1 year later', '2023', 'Work on Behavency begins', 'We bring it all into one journey: the assessments, the team game, our trainers and programmes.'],
    ['3 years later', '2026', 'Behavency launches', 'Identify, Engage, Build and Measure, in one place.'],
  ];
  const TEAM = [['vlad', 'Vlad Plaskov', 'Co-Founder & CEO'], ['slava', 'Slava Turiashvili', 'Co-Founder & CTO'], ['eric', 'Eric Renard', 'Development Director'], ['vadim', 'Vadim Neander', 'Chief Methodologist'], ['keith', 'Keith Parker', 'Lead Facilitator'], ['ashraf', 'Ashraf Hussain', 'Experience Designer']];
  // 25 Nov: one line per person, under the job title
  const LINE = {"vlad":"Leads the company and the idea behind the journey.","slava":"Built the platform that connects every step.","vadim":"Keeps the method grounded in research: the six areas, the questionnaires and how results are read.","eric":"Turns the method into programmes managers can use at work.","keith":"Brings the sessions to life, from the team game to the reflection.","ashraf":"Designs how every step looks and feels, for managers, teams and HR."};
  const HTML = `<div class="pab" role="dialog" aria-modal="true" aria-label="About Behavency">
    <div class="pab-bar"><button type="button" class="pab-back" data-close><svg viewBox="0 0 24 24" aria-hidden="true"><path d="M15 6l-6 6 6 6"/></svg>Back to the site</button></div>
    <main class="pab-in">
      <div class="pab-who"><div class="pab-eb pab-rise">Our vision</div><h2 class="pab-rise">Managers and teams, <em>pulling the same way</em></h2><p class="pab-rise">We’d like every manager to know how they really come across, every team to know what is expected of it, and every organisation to see what gets in the way. When those three line up, people stop working around each other and start working together. That is what we built Behavency for: helping managers and their teams find common ground, and making it last.</p></div>
      <div class="pab-who"><div class="pab-eb pab-rise">Who we are</div><h2 class="pab-rise">Built by people who <em>do this work</em></h2><p class="pab-rise">Behavency is made by OGI Europe. Since 2007 we have trained managers and their teams in more than 30 countries, and along the way we have learned what helps people change and what doesn’t. Behavency puts that experience into one journey.</p><p class="pab-rise">It is built by methodologists, assessors, HR specialists, trainers and technology experts working side by side. The six-area model and the questionnaires come from our methodologists, the programmes and workshops from our trainers and facilitators, and the platform that connects every step from our technology team. For HR, that means one partner and one method, from the first assessment to showing what has changed.</p></div>
      <div class="pab-sep"></div>
      <span class="pab-pill pab-rise">Our story</span>
      <h1 class="pab-ttl pab-rise">Why does training fail <em>on Monday morning?</em></h1>
      <p class="pab-lead pab-rise">For years we watched good training fade by Monday. So we built a way to make the change stick, and to show it.</p>
      <ol class="pab-story">${STORY.map(([g, y, h, p]) => `<li class="pab-sy pab-rise">${g ? `<span class="pab-ago">${g}</span>` : ''}<b>${y}</b><h3>${h}</h3><p>${p}</p></li>`).join('')}</ol>
      <div class="pab-team">
        <div class="pab-eb pab-rise">The team</div>
        <h2 class="pab-rise">The minds <em>behind Behavency</em></h2>
        <p class="pab-lead pab-rise">Nineteen years in training rooms, one clear method, and a platform that holds it together.</p>
        <div class="pab-stack">${TEAM.map(([f, n, r]) => `<div class="pab-pp pab-rise"><img src="team/${f}.jpg" alt="${n}" width="132" height="132" loading="lazy"><div><b>${n}</b><span>${r}</span><em></em><i>${LINE[f]}</i></div></div>`).join('')}</div>
      </div>
      <div class="pab-end pab-rise"><h2>Want to see it <em>for your managers?</em></h2><button type="button" class="pab-cta" data-cm-open>Request a demo</button></div>
    </main>
  </div>`;
  let pab = null;
  const open = () => {
    if (window.bhvCloseRecruit) window.bhvCloseRecruit();
    pab.classList.add('open'); document.documentElement.classList.add('pab-lock'); pab.scrollTop = 0;
    if ((window.bhvH ? bhvH() : location.hash) !== '#about') history.pushState({ about: 1 }, '', '#about');
  };
  const close = () => { pab.classList.remove('open'); document.documentElement.classList.remove('pab-lock'); };
  window.bhvCloseAbout = () => { if (pab && pab.classList.contains('open')) close(); };
  function mount() {
    const menu = document.querySelector('.nav-menu'); if (!menu || !document.body) return false;
    if (!pab) {
      const st = document.createElement('style'); st.id = 'about-mobile'; st.textContent = CSS; document.head.appendChild(st);
      const t = document.createElement('div'); t.innerHTML = HTML; pab = t.firstElementChild; document.body.appendChild(pab);
      pab.addEventListener('click', (e) => { if (e.target.closest('[data-close]')) { if ((window.bhvH ? bhvH() : location.hash) === '#about') history.back(); else close(); } });
      addEventListener('popstate', () => { if ((window.bhvH ? bhvH() : location.hash) !== '#about') close(); else open(); });
      const io = new IntersectionObserver((es) => es.forEach((e) => { if (e.isIntersecting) { e.target.classList.add('shown'); io.unobserve(e.target); } }), { root: pab, rootMargin: '0px 0px -6% 0px' });
      pab.querySelectorAll('.pab-rise').forEach((el, i) => { el.style.transitionDelay = (i < 3 ? i * 90 : 0) + 'ms'; io.observe(el); });
      if ((window.bhvH ? bhvH() : location.hash) === '#about') open();
    }
    // menu: the same items as the desktop (The journey with its four stages, Programmes, Recruitment, Packages, About, Log in).
    // The site's own old links are hidden. React may redraw the menu, so this re-checks.
    if (!menu.querySelector('.pab-item')) {
      const cta = menu.querySelector('.nav-cta');
      const closeMenu = () => { const bg = document.querySelector('.nav-burger[aria-expanded="true"]'); if (bg) bg.click(); };
      const goTo = (el) => { closeMenu(); if (el) setTimeout(() => scrollTo({ top: el.getBoundingClientRect().top + scrollY - 64, behavior: 'smooth' }), 120); };
      const mk = (cls, text, onClick, href) => { const a = document.createElement('a'); a.className = 'pab-item ' + cls; a.textContent = text; a.href = href || '#'; if (onClick) a.addEventListener('click', (e) => { e.preventDefault(); onClick(); }); return a; };
      const j = mk('pab-journey', 'How it works', null);
      const sub = document.createElement('div'); sub.className = 'pab-sub';
      ['Identify', 'Engage', 'Build', 'Measure'].forEach((n, i) => { const c = ['#2f6fdb', '#7a4bd6', '#e0761c', '#14a07c'][i]; const s2 = mk('pab-stage', '', () => goTo(document.querySelectorAll('.bpc')[i]), '#' + n.toLowerCase()); s2.innerHTML = '<i style="color:' + c + '">0' + (i + 1) + '</i>' + n; sub.appendChild(s2); });
      j.addEventListener('click', (e) => { e.preventDefault(); j.classList.toggle('open'); });
      const items = [j, sub,
        mk('', 'Programmes', () => { closeMenu(); if (window.bhvOpenProgrammes) { if (window.bhvLeave) window.bhvLeave(window.bhvOpenProgrammes); else window.bhvOpenProgrammes(); } else goTo(document.querySelector('.tm')); }, '#programmes'),
        mk('', 'Recruitment', () => { closeMenu(); if (window.bhvOpenRecruit) window.bhvOpenRecruit(); }, '#recruitment'),
        mk('', 'Packages', () => goTo(document.querySelector('#packages')), '#packages'),
        mk('pab-about', 'About', () => { closeMenu(); open(); }, '#about'),
        mk('pab-login', 'Log in', null, 'https://app.behavency.com/login')];
      items.forEach((it) => menu.insertBefore(it, cta));
    }
    return false;
  }
  setInterval(mount, 400);
})();
