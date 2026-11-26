// Packages section, version 2 (24 Nov, owner chose "Option A · Cards" from Packages Options 3).
// Keeps the outer <section id="packages"> (menu links, footer links and the closing "Ready to start?" line still find it),
// hides what the bundle put inside it and shows the new cards instead. Every card button opens the contact pop-up
// (contact-modal.js, data-cm-open). Remove this file and its <script> tag to go back to the old packages.
(function () {
  const MOB = window.BHV_SITE === 'mob';
  const CK = '<svg class="pk2-ck" viewBox="0 0 20 20" aria-hidden="true"><circle cx="10" cy="10" r="10" fill="currentColor" opacity=".12"/><path d="M6 10.4l2.6 2.6L14 7.6" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/></svg>';
  const CLOCK = '<svg viewBox="0 0 20 20" aria-hidden="true"><circle cx="10" cy="10" r="7.5" fill="none" stroke="currentColor" stroke-width="1.6"/><path d="M10 6v4.2l2.8 1.8" fill="none" stroke="currentColor" stroke-width="1.6" stroke-linecap="round"/></svg>';
  const DOC = '<svg viewBox="0 0 20 20" aria-hidden="true"><path d="M6 2.8h5.5L15 6.3v10.9H6z" fill="none" stroke="currentColor" stroke-width="1.6" stroke-linejoin="round"/><path d="M8.5 10h4M8.5 13h4" stroke="currentColor" stroke-width="1.6" stroke-linecap="round"/></svg>';
  const li = (t) => `<li>${CK}<span>${t}</span></li>`;
  const btn = (t, solid) => `<button type="button" class="pk2-btn${solid ? ' pk2-btn--solid' : ''}" data-cm-open>${t}</button>`;

  const FULL = `<div class="pk2-card pk2-full"><span class="pk2-pill">Recommended</span>
      <div class="pk2-top"><span class="pk2-dots"><i class="d1"></i><i class="d2"></i><i class="d3"></i><i class="d4"></i></span><h3 class="pk2-name">Full journey</h3></div>
      <p class="pk2-tl">All four stages, connected</p><hr>
      <ul class="pk2-list"><li class="pk2-plus">${MOB ? 'All three below, connected, plus:' : 'All three, connected, plus:'}</li>${li('Re-assessment at 3 months')}${li('Before / after results')}</ul>
      ${btn('Get a proposal', true)}</div>`;
  const dot = (c) => `<div class="pk2-top"><i class="pk2-dot" style="background:${c}"></i>`;
  const one = (cls, c, name, tl, items) => `<div class="pk2-card ${cls}">${dot(c)}<h3 class="pk2-name">${name}</h3></div><p class="pk2-tl">${tl}</p><hr><ul class="pk2-list">${items}</ul>${btn('Talk to us')}</div>`;
  const STAGES =
    one('pk2-as', '#018ffd', 'Assessment', 'See where people stand', ['Managerial Profile', '360° feedback', 'Workplace survey', 'Resilience to change', 'Structured interview', 'Individual reports', 'Leadership report', 'Team assessment'].map(li).join('')) +
    one('pk2-tg', '#9c23fe', 'Team game', 'See the team in action', ['45-min online game', 'Facilitated reflection', 'Team Insight Report'].map(li).join('')) +
    one('pk2-tr', '#fe8a03', 'Training', 'For managers and teams', ['E-learning', 'Live online', 'In person or blended', 'Masterplan per programme'].map(li).join(''));
  const HIRE = `<div class="pk2-hire">
      <div class="pk2-hl">
        <span class="pk2-soon">Coming soon</span>
        <h3 class="pk2-name">Core Skills Profile</h3>
        <p class="pk2-tl">Recruitment questionnaire</p>
        <ul class="pk2-meta"><li>${CLOCK}15–20 min online</li><li>${DOC}Report with interview questions</li></ul>
        ${MOB ? '' : btn('Talk to us')}
      </div>
      <div class="pk2-hr">
        <p class="pk2-k">Five core competencies</p>
        <ul class="pk2-list">${['Critical thinking', 'Learning agility', 'Proactivity &amp; ownership', 'Self-organisation', 'Social intelligence'].map(li).join('')}</ul>
        ${MOB ? btn('Talk to us') : ''}
      </div>
    </div>`;
  const ADD = `<div class="pk2-add">${MOB ? '<span class="pk2-tag">Add-on</span>' : ''}<h3 class="pk2-aname">Structured interview</h3><p class="pk2-tl">HR practises with AI characters</p>${btn('Talk to us')}</div>`;

  const BODY = MOB
    ? `<div class="pk2-grid">${FULL}${STAGES}</div>
       <p class="pk2-label">For hiring</p>${HIRE}${ADD}`
    : `<div class="pk2-grid">${FULL}${STAGES}</div>
       <div class="pk2-row2"><p class="pk2-label pk2-label--h">For hiring</p><p class="pk2-label pk2-label--a">Add-on</p>${HIRE}${ADD}</div>`;

  const S = '#packages.pk2-on';
  const CSS = `
  ${S} > :not(.pk2) { display: none !important; }
  ${S} .pk2 { --ink:#0f1b3d; --body:#3d4458; --muted:#6b7088; --line:#e8e5f0; --teal:#1a9082; --navy:#1f2f5c;
    font-family: Inter, Arial, sans-serif; color: var(--body); text-align: left; box-sizing: border-box; }
  ${S} .pk2 *, ${S} .pk2 *::before, ${S} .pk2 *::after { box-sizing: border-box; }
  ${S} :where(.pk2 ul) { list-style: none; margin: 0; padding: 0; }
  ${S} :where(.pk2 p, .pk2 h3) { margin: 0; }
  ${S} .pk2 hr { border: 0; border-top: 1px solid var(--line); margin: 22px 0; height: 0; }
  ${S} .pk2 ul.pk2-list, ${S} .pk2 ul.pk2-meta { list-style: none; padding: 0; }
  ${S} .pk2-card { position: relative; display: flex; flex-direction: column; background: #fff; border-radius: 18px; padding: 30px 22px 24px;
    border: 1.5px solid var(--c40); box-shadow: 0 1px 2px rgba(15,27,61,.04), 0 8px 28px rgba(15,27,61,.06); }
  ${S} .pk2-card::before { content: ""; position: absolute; inset: 0; border-radius: 16.5px; pointer-events: none;
    background: var(--band) top left / 100% 4px no-repeat; }
  ${S} .pk2-as { --c40: rgba(1,143,253,.38); --band: linear-gradient(#018ffd,#018ffd); }
  ${S} .pk2-tg { --c40: rgba(156,35,254,.34); --band: linear-gradient(#9c23fe,#9c23fe); }
  ${S} .pk2-tr { --c40: rgba(254,138,3,.42); --band: linear-gradient(#fe8a03,#fe8a03); }
  ${S} .pk2-full { border: 2px solid var(--navy); --band: linear-gradient(90deg,#018ffd 0 25%,#9c23fe 25% 50%,#fe8a03 50% 75%,#02ca2a 75%);
    box-shadow: 0 2px 4px rgba(15,27,61,.06), 0 16px 40px rgba(31,47,92,.14); }
  ${S} .pk2-full::before { border-radius: 16px; background-size: 100% 5px; }
  ${S} .pk2-pill { position: absolute; z-index: 1; top: -14px; left: 20px; padding: 7px 12px; border-radius: 999px; background: var(--navy); color: #fff;
    font: 600 13px/1 Inter, sans-serif; letter-spacing: .01em; white-space: nowrap; }
  ${S} .pk2-top { display: flex; align-items: center; gap: 10px; }
  ${S} .pk2-dot { width: 9px; height: 9px; border-radius: 50%; flex: none; }
  ${S} .pk2-dots { display: flex; gap: 4px; flex: none; }
  ${S} .pk2-dots i { width: 8px; height: 8px; border-radius: 50%; }
  ${S} .pk2-dots .d1 { background: #018ffd; } ${S} .pk2-dots .d2 { background: #9c23fe; } ${S} .pk2-dots .d3 { background: #fe8a03; } ${S} .pk2-dots .d4 { background: #02ca2a; }
  ${S} .pk2-name { font: 700 24px/1.2 "Source Serif 4", Georgia, serif; color: var(--ink); letter-spacing: -.005em; }
  ${S} .pk2-tl { font: 400 15px/1.45 Inter, sans-serif; color: var(--muted); margin-top: 6px; }
  ${S} .pk2-list { display: grid; gap: 12px; flex: 1; align-content: start; }
  ${S} .pk2-list li { display: flex; gap: 10px; align-items: flex-start; font: 400 15px/20px Inter, sans-serif; color: var(--ink); }
  ${S} .pk2-list li.pk2-plus { font-size: 14px; font-weight: 500; color: var(--muted); }
  ${S} .pk2-ck { width: 20px; height: 20px; flex: none; color: var(--teal); }
  ${S} .pk2-btn { display: flex; align-items: center; justify-content: center; width: 100%; height: 48px; margin-top: 28px; padding: 0 20px;
    border-radius: 12px; border: 1.5px solid var(--navy); background: #fff; color: var(--navy); font: 600 15px/1 Inter, sans-serif; cursor: pointer; white-space: nowrap; transition: background .15s; }
  ${S} .pk2-btn:hover { background: #f3f5fb; }
  ${S} .pk2-btn--solid { background: var(--navy); color: #fff; }
  ${S} .pk2-btn--solid:hover { background: #18254b; }
  ${S} .pk2-btn:focus-visible { outline: 3px solid rgba(47,111,219,.35); outline-offset: 2px; }
  ${S} .pk2-label { display: flex; align-items: center; gap: 12px; font: 600 13px/1 Inter, sans-serif; letter-spacing: .12em; text-transform: uppercase; color: var(--muted); }
  ${S} .pk2-label::after { content: ""; flex: 1; height: 1px; background: var(--line); }
  ${S} .pk2-hire { position: relative; background: #fff; border-radius: 18px; border: 1.5px solid rgba(26,144,130,.4);
    box-shadow: 0 1px 2px rgba(15,27,61,.04), 0 8px 28px rgba(15,27,61,.06); }
  ${S} .pk2-hire::before { content: ""; position: absolute; inset: 0; border-radius: 16.5px; pointer-events: none; background: linear-gradient(var(--teal),var(--teal)) top left / 100% 4px no-repeat; }
  ${S} .pk2-hl { display: flex; flex-direction: column; }
  ${S} .pk2-soon { align-self: flex-start; margin-bottom: 12px; padding: 6px 11px; border-radius: 999px; background: #f1faf8; color: var(--teal);
    box-shadow: inset 0 0 0 1px #cfe7e3; font: 600 13px/1 Inter, sans-serif; white-space: nowrap; }
  ${S} .pk2-meta { display: grid; gap: 8px; margin-top: 18px; }
  ${S} .pk2-meta li { display: flex; align-items: center; gap: 10px; font: 400 15px/1.4 Inter, sans-serif; color: var(--body); }
  ${S} .pk2-meta svg { width: 18px; height: 18px; flex: none; color: var(--muted); }
  ${S} .pk2-k { font: 600 13px/1 Inter, sans-serif; letter-spacing: .1em; text-transform: uppercase; color: var(--muted); margin-bottom: 14px; }
  ${S} .pk2-add { background: #fff; border: 1.5px dashed #cfc9df; border-radius: 18px; padding: 20px 22px 22px; }
  ${S} .pk2-tag { display: inline-block; padding: 5px 8px; border-radius: 6px; background: #f1faf8; border: 1px solid #cfe7e3; color: var(--teal);
    font: 600 12px/1 Inter, sans-serif; letter-spacing: .08em; text-transform: uppercase; }
  ${S} .pk2-aname { font: 700 20px/1.2 "Source Serif 4", Georgia, serif; color: var(--ink); margin-top: 12px; white-space: nowrap; }
  ${S} .pk2-add .pk2-btn { margin-top: 18px; }
  ${MOB ? `
  ${S} .pk2-head { margin-bottom: 28px; }
  ${S} .pk2-grid { display: grid; gap: 16px; padding-top: 12px; }
  ${S} .pk2-card { padding: 28px 20px 20px; }
  ${S} .pk2-name { font-size: 24px; }
  ${S} .pk2-tl { font-size: 16px; }
  ${S} .pk2 hr { margin: 18px 0; }
  ${S} .pk2-list li { font-size: 16px; line-height: 22px; }
  ${S} .pk2-list .pk2-ck { margin-top: 1px; }
  ${S} .pk2-pill { font-size: 14px; }
  ${S} .pk2-btn { height: 50px; font-size: 16px; margin-top: 22px; }
  ${S} .pk2-label { font-size: 14px; margin: 40px 0 14px; }
  ${S} .pk2-hire { padding: 26px 20px 20px; }
  ${S} .pk2-hr { border-top: 1px solid var(--line); margin-top: 18px; padding-top: 18px; }
  ${S} .pk2-meta li { font-size: 16px; }
  ${S} .pk2-soon, ${S} .pk2-k { font-size: 14px; }
  ${S} .pk2-add { margin-top: 16px; padding: 20px; }
  ${S} .pk2-tag { font-size: 14px; }
  ${S} .pk2-aname { font-size: 22px; }
  ${S} .pk2-add .pk2-tl { font-size: 16px; }
  ${S} .pk2-add .pk2-btn { margin-top: 18px; }
  ` : `
  ${S} .pk2 { max-width: 1120px; margin: 0 auto; padding: 0 24px; }
  ${S} .pk2-head { text-align: center; margin-bottom: 64px; }
  ${S} .pk2-head .caption, ${S} .pk2-head .headline { text-align: center; }
  ${S} .pk2-head .headline { margin-bottom: 0 !important; }
  ${S} .pk2-grid, ${S} .pk2-row2 { display: grid; grid-template-columns: 1.2fr 1fr 1fr 1.1fr; gap: 16px; }
  ${S} .pk2-row2 { margin-top: 56px; row-gap: 14px; align-items: start; }
  ${S} .pk2-label--h { grid-column: 1 / span 3; }
  ${S} .pk2-hire { grid-column: 1 / span 3; display: grid; grid-template-columns: 1fr 1fr; gap: 36px; padding: 30px 28px 26px; }
  ${S} .pk2-add .pk2-aname { margin-top: 0; }
  ${S} .pk2-hl .pk2-btn { width: auto; align-self: flex-start; margin-top: 26px; padding: 0 28px; }
  ${S} .pk2-hr { border-left: 1px solid var(--line); padding-left: 36px; }
  @media (max-width: 1180px) {
    ${S} .pk2-grid, ${S} .pk2-row2 { grid-template-columns: 1fr 1fr; }
    ${S} .pk2-label--h, ${S} .pk2-hire { grid-column: 1 / -1; }
    ${S} .pk2-label--a { grid-column: 1 / -1; order: 3; margin-top: 18px; }
    ${S} .pk2-add { order: 4; }
  }
  `}
  `;

  function build(sec) {
    const wrap = document.createElement('div');
    wrap.className = 'pk2';
    const head = document.createElement('div');
    head.className = 'pk2-head';
    if (MOB) {
      const eb = sec.querySelector('.pk-eyebrow'), ti = sec.querySelector('.pk-title');
      const e = eb ? eb.cloneNode(true) : document.createElement('p'); if (!eb) e.className = 'pk-eyebrow ueb';
      const i = e.querySelector('i'); e.textContent = ''; if (i) e.appendChild(i); e.appendChild(document.createTextNode('Packages'));
      const t = ti ? ti.cloneNode(false) : document.createElement('h2'); if (!ti) t.className = 'pk-title';
      t.innerHTML = 'Start where you are.<br><em>Grow into the full journey.</em>';
      head.append(e, t);
    } else {
      const ph = sec.querySelector('.packages__header');
      const h = document.createElement('div'); h.className = 'packages__header'; h.style.cssText = 'opacity:1;transform:none;margin:0';
      const cap = document.createElement('p'); cap.className = 'caption'; cap.style.marginBottom = '16px'; cap.textContent = 'Packages';
      const hl = document.createElement('h2'); hl.className = 'headline'; hl.innerHTML = 'Start where you are.<br><em>Grow into the full journey.</em>';
      h.append(cap, hl); head.appendChild(h);
      if (!ph) head.classList.add('pk2-nohdr');
    }
    wrap.appendChild(head);
    wrap.insertAdjacentHTML('beforeend', BODY);
    return wrap;
  }

  function mount() {
    const sec = document.querySelector('#root section#packages') || document.querySelector('section#packages');
    if (!sec) return;
    if (!document.getElementById('packages-v2')) {
      const st = document.createElement('style'); st.id = 'packages-v2'; st.textContent = CSS; document.head.appendChild(st);
    }
    // wait until the bundle has filled the section, so its own header can be copied for the type styles
    if (!sec.querySelector(MOB ? '.pk-title' : '.packages__header')) return;
    if (!sec.querySelector(':scope > .pk2')) sec.appendChild(build(sec));
    sec.classList.add('pk2-on');
  }
  mount();
  let n = 0; const w = setInterval(() => { mount(); if (++n > 120) clearInterval(w); }, 250);
  // if the bundle ever re-renders the section, put the cards back
  new MutationObserver(() => { const s = document.querySelector('section#packages'); if (s && (!s.classList.contains('pk2-on') || !s.querySelector(':scope > .pk2'))) mount(); })
    .observe(document.documentElement, { childList: true, subtree: true });
})();
