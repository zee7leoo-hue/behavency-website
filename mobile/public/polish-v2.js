// Polish layer for the v2 phone site:
// 1) hide the duplicate (half-broken) "What holds managers back" variant
// 2) one shared style for the small labels above section titles
// 5) one dark colour (navy) for "How it runs", contact and footer
// Remove this file and its <script> tag to undo all three.
(function () {
  const CSS = `
  /* 1: keep only the complete "What holds managers back" section */
  section.hb--split { display: none !important; }

  /* 2: unified section label */
  .ueb { display: flex !important; align-items: center; gap: 12px; width: auto;
    font: 600 11.6px/1.2 Inter, Arial, sans-serif !important; letter-spacing: .16em !important;
    text-transform: uppercase !important; color: #3a4364 !important;
    background: none !important; box-shadow: none !important; border: 0 !important; border-radius: 0 !important;
    white-space: nowrap; }
  .hr-pill.ueb, .wf-eyebrow.ueb, .hw-pill.ueb { padding: 0 !important; }
  .pf-eyebrow.ueb { padding-left: 38px !important; }
  .ueb > * { font: inherit !important; letter-spacing: inherit !important; color: inherit !important;
    text-transform: inherit !important; background: none !important; padding: 0 !important; box-shadow: none !important; }
  .ueb > i, .ueb > u, .ueb > span:empty, .ueb > .rs-dash, .ueb > .ueb-hide { display: none !important; }
  .ueb::before, .ueb::after { content: "" !important; display: block !important; flex: none;
    width: 24px !important; height: 1.5px !important; background: currentColor !important; opacity: .5; border-radius: 1px; margin: 0 !important; }
  .ueb::after { display: none !important; }
  .ueb--c { justify-content: center; margin-left: auto !important; margin-right: auto !important; }
  .ueb--c::after { display: block !important; }
  .ueb--d { color: rgba(255, 255, 255, .72) !important; }
  .wn-bar { display: none !important; }


  /* 3: game card titles in the site's serif, like the other card titles */
  :root .nc-h, :root .pc-h { font-family: "Source Serif 4", Georgia, serif !important; font-weight: 700 !important; letter-spacing: -.02em !important; font-optical-sizing: none; font-variation-settings: "opsz" 30; }
  :root .nc-h { font-size: 25px !important; line-height: 30px !important; }

  /* 4: left-aligned like the rest (only the hero and stage cards stay centred) */
  .nbm-eyebrow.ueb { justify-content: flex-start !important; margin-left: 32px !important; margin-right: 0 !important; }
  .px-res-top.ueb { justify-content: flex-start !important; margin-left: 0 !important; }
  :root .hb--focus { text-align: left; }
  :root .hb--focus .hb-eyebrow { margin: 0 10px !important; }
  :root .hb--focus .hb-title { margin: 18px 10px 0 !important; max-width: none; font: 700 40px/41px "Source Serif 4", Georgia, serif !important; letter-spacing: -.03em !important; font-optical-sizing: none; font-variation-settings: "opsz" 30; }
  :root .hb--focus .hb-sub { margin: 18px 10px 0 !important; max-width: none; }

  /* 6: measure cards fit their content; the rail follows the card in front */
  :root .hm-card { height: auto !important; padding-bottom: 22px !important; }
  :root .hm-rail { transition: height .45s cubic-bezier(.22,1,.36,1); }
  

  /* 23 Nov evening (R21): platform example text at least 11px; menu button and stage buttons easier to tap (same look) */
  :root #platform .pf-card-head p, :root #platform .pf-kpi div span, :root #platform .pf-kpi div .pf-small, :root #platform .pf-kpi div .pf-kpi-dev, :root #platform .pf-who span, :root #platform .pf-chip { font-size: 11.6px !important; }
  :root #platform .pf-who span { white-space: normal !important; }
  :root #platform .pf-row.hn-row .pf-who span, :root #platform .pf-rows .pf-row:nth-child(3) .pf-who span { white-space: nowrap !important; letter-spacing: -.01em; }
  :root #platform .pf-chip.pf-delta { padding: 0 8px !important; gap: 3px !important; }
  :root .nav-burger { width: 46px !important; height: 46px !important; margin: -9px !important; }
  :root .nav-burger span { left: 14.5px !important; }
  :root .nav-burger span:first-child { top: 17px !important; }
  :root .nav-burger span:nth-child(2) { top: 22px !important; }
  :root .nav-burger span:nth-child(3) { top: 27px !important; }
  :root .hr-tabs button { min-height: 41px; }
  /* R20: Measure "3 months" in the Measure green; R25: "What holds them back · example" spacing */
  :root .ms-step b { background: none !important; color: #14a07c !important; -webkit-text-fill-color: #14a07c !important; }
  :root .hb-flag em { margin-left: 0 !important; }

  /* hero: emerald stage panel ~8% smaller, edges in line with the text above */
  :root .hr-panel { zoom: .92; width: 391px; margin: 32.6px auto 0 !important; }
  /* logo strip: even space above and below before the navy section */
  :root .bh-clients { padding-bottom: 52px !important; }


  /* same list style for "Explore the five sources" and the six areas */
  :root .id-name, :root .nbm-ar-name { font: 600 16px/1.2 Inter, Arial, sans-serif !important; letter-spacing: -.014em !important; }
  /* dashboard: a gap shows as a short red bar */
  .pf-track i.pf-gap { background: linear-gradient(90deg, #f0566e, #e8294a) !important; }
  /* Organisation row: an amber warning badge, an amber tag and an amber bar that fills in (22 of 42 managers) */
  .pf-ini.pf-ini--warn { background: #fff1e3 !important; color: #ea7a12 !important; }
  .pf-ini.pf-ini--warn svg { width: 16px; height: 16px; fill: none; stroke: currentColor; stroke-width: 2; stroke-linecap: round; stroke-linejoin: round; }
  .pf-chip.pf-chip--amber { color: #b45309; background: #fff1e3; }
  .pf-track.pf-dots { background: none !important; overflow: visible; height: 14px; bottom: 9px; display: flex; align-items: center; }
  .pf-dots > i { display: none !important; }
  .pf-dots b { flex: none; width: 14px; height: 14px; border-radius: 50%; border: 1.5px solid #fff; box-sizing: border-box; margin-left: -4px; transform: scale(0); transition: transform .45s cubic-bezier(.34,1.56,.64,1) var(--d); }
  .pf-dots b:first-of-type { margin-left: 0; }
  .is-in .pf-dots b { transform: scale(1); }
  /* dashboard header: a quiet 'Example data' line and clear space between the title and the frame */
  :root #platform .pf-card { padding-top: 12px !important; }
  :root #platform .pf-card-head { padding: 4px 8px 2px 8px !important; }
  :root #platform .pf-card-head p.pf-example { font-size: 12px !important; color: #7a8296 !important; margin-top: 4px !important; font-weight: 400; }
  :root #platform .pf-row.pf-row--org .pf-who span { white-space: nowrap !important; letter-spacing: -.01em; }
  /* the example dashboard reads as a product showcase: thin emerald frame and a soft emerald glow (ring drawn as a shadow, so the layout does not move) */
  :root #platform .pf-card { box-shadow: 0 0 0 1.75px #1fa9a6, 0 14px 34px -14px rgba(31,169,166,.32), 0 22px 40px -22px #28326e66, 0 2px 6px #28326e0d !important; }
  /* Build row: plan shown as a 3-step stepper (2 done, 1 to go) */
  .pf-track.pf-steps { background: none !important; overflow: visible; height: 14px; bottom: 9px; }
  .pf-steps > i { display: none !important; }
  .pf-steps::after { display: none !important; }
  .pf-steps::before { content: ""; position: absolute; left: 7px; right: 7px; top: 6px; height: 2px; border-radius: 2px; background: #e3e6ee; }
  .pf-steps .pf-line { position: absolute; left: 7px; top: 6px; height: 2px; width: 0; border-radius: 2px; background: #0fa8a0; transition: width .5s ease var(--d); }
  .is-in .pf-steps .pf-line { width: calc(50% - 7px); }
  .pf-steps b { position: absolute; top: 0; width: 14px; height: 14px; border-radius: 50%; display: grid; place-items: center; box-sizing: border-box; }
  .pf-steps b.done { background: linear-gradient(135deg, #12b3aa, #079693); transform: scale(0); transition: transform .45s cubic-bezier(.34,1.56,.64,1) var(--d); }
  .is-in .pf-steps b.done { transform: scale(1); }
  .pf-steps b.done svg { width: 9px; height: 9px; fill: none; stroke: #fff; stroke-width: 3; stroke-linecap: round; stroke-linejoin: round; }
  .pf-steps b.todo { background: #fff; border: 2px solid #cdd3df; }
  /* Improved row: result as a green change badge that counts up */
  .pf-chip.pf-delta { font-variant-numeric: tabular-nums; }
  .pf-chip.pf-delta { transition: transform .2s; }
  .pf-chip.pf-delta.pf-pop { animation: hn-pop .6s cubic-bezier(.34,1.56,.64,1) 1, pf-pulse 1.4s ease-out .1s 1; }
  .pf-chip.pf-delta .hn-up { display: inline-block; }
  .pf-chip.pf-delta.pf-pop .hn-up { animation: hn-bounce .7s ease-out .05s 1; }
  .pf-who .hn-to { display: inline !important; margin: 0 !important; font-size: inherit !important; }
  .pf-who .hn-arr { display: inline-block !important; margin: 0 !important; font-size: inherit !important; color: inherit !important; opacity: 0; transform: translateX(-6px); transition: opacity .35s, transform .35s; }
  .hn-to { font-weight: 700; color: #17883a; opacity: 0; transition: opacity .35s .1s; font-variant-numeric: tabular-nums; }
  .hn-run .hn-arr { opacity: 1; transform: none; }
  .hn-run .hn-to { opacity: 1; }
  @keyframes hn-pop { 0% { transform: scale(1); } 45% { transform: scale(1.14); } 100% { transform: scale(1); } }
  @keyframes hn-bounce { 0% { transform: translateY(0); } 40% { transform: translateY(-4px); } 100% { transform: translateY(0); } }


  /* training programmes block: label and title in the site's shared styles */
  :root .tm-eye { font: 600 11.6px/1.2 Inter, Arial, sans-serif !important; letter-spacing: .16em !important; color: #3a4364 !important; gap: 12px; }
  :root .tm-eye::before { opacity: .5; }
  :root .tm-h { font: 700 40px/41px "Source Serif 4", Georgia, serif !important; letter-spacing: -.03em !important; font-optical-sizing: none; font-variation-settings: "opsz" 30; }
  :root .tm-h em { font-family: "Source Serif 4", Georgia, serif !important; font-style: italic; font-weight: 500 !important; letter-spacing: -.02em; }


  /* dashboard: no "Live" badge; "View all" and the dropdown arrow are part of the picture, not links */
  :root #platform .pf-live { display: none !important; }
  :root #platform .pf-list-head a { pointer-events: none !important; cursor: default !important; }
  /* 25 Nov: they also no longer LOOK like links/buttons: quiet grey, like the rest of the example picture */
  :root #platform .pf-list-head a { color: #8a90a3 !important; font-weight: 500 !important; text-decoration: none !important; }
  :root #platform .pf-list-head a svg { opacity: .6; }
  :root .nc-rep-top em { border-color: transparent !important; padding: 0 !important; opacity: .75; font-weight: 600 !important; pointer-events: none; }
  :root #platform .pf-kpis { grid-template-columns: 102px 104px 106px !important; }
  :root #platform .pf-kpi div .pf-kpi-dev { white-space: nowrap; font-size: 9.4px; letter-spacing: -.01em; line-height: 1.2; margin-top: 2px; }

  /* 5: one navy for the dark sections */
  :root .ct, :root .ft { background: linear-gradient(175deg, #0d1838 0%, #122452 55%, #0e1a3f 100%) !important; }
  :root .ft { border-top: 1px solid rgba(255,255,255,.08) !important; }
  :root .ct-card { background: rgba(255,255,255,.05) !important; border-color: rgba(255,255,255,.1) !important; }
  :root .ct-f input, :root .ct-f select, :root .ct-f textarea { background-color: rgba(255,255,255,.07) !important; border-color: rgba(255,255,255,.14) !important; }
  :root .ct-btn:hover, :root .ct-btn:active { color: #0d1838 !important; }
  :root .ft-bottom { border-top-color: rgba(255,255,255,.1) !important; }
  :root .ct-ways li::before { background: rgba(255,255,255,.4) !important; }
  `;
  // [selector, centred?, dark?]
  const LABELS = [
    ['.hr-pill', true, false],
    ['.wn-eyebrow', false, true],
    ['.pf-eyebrow', false, false],
    ['.nbm-eyebrow', false, false],
    ['.px-res-top', false, false],
    ['.jn-eyebrow', false, false],
    ['.hm-eyebrow', false, false],
    ['.df-eyebrow', false, false],
    ['.hi-eyebrow', false, false],
    ['.rs-eyebrow', false, false],
    ['.hb-eyebrow', false, false],
    ['.hw-pill', false, true],
    ['.pk-eyebrow', false, false],
    ['.wf-eyebrow', false, false],
    ['.ct-eyebrow', false, true],
  ];
  function tag() {
    LABELS.forEach(([sel, c, d]) => document.querySelectorAll(sel).forEach((el) => {
      el.classList.add('ueb'); if (c) el.classList.add('ueb--c'); if (d) el.classList.add('ueb--d');
    }));
    // "How it runs | From kick-off…": keep just the label
    document.querySelectorAll('.hw-pill > span').forEach((s) => s.classList.add('ueb-hide'));
  }

  // 6: size the measure rail to the card in front
  function fitRail() {
    const rail = document.querySelector('.hm-rail'); if (!rail) return;
    const dots = [...document.querySelectorAll('.hm-dots button')];
    const cards = [...rail.querySelectorAll('.hm-card')];
    const set = () => {
      let i = dots.findIndex((d) => d.classList.contains('on')); if (i < 0) i = 0;
      const c = cards[i]; if (!c) return;
      rail.style.setProperty('height', (c.offsetTop + c.offsetHeight + 34) + 'px', 'important');
    };
    set();
    dots.forEach((d) => new MutationObserver(set).observe(d, { attributes: true, attributeFilter: ['class'] }));
    addEventListener('resize', set);
  }

  // platform dashboard: the three rows answer the three questions (a manager's gap, an organisational barrier, what changed);
  // the right side of every row is its key number
  function dash() {
    const kp = [...document.querySelectorAll('#platform .pf-kpi span')].find((x) => x.textContent.trim() === 'Journeys');
    if (kp) { kp.textContent = 'In training'; kp.classList.add('pf-kpi-dev'); }
    const lh = document.querySelector('#platform .pf-list-head h4'); if (lh) lh.textContent = 'What needs attention';
    const sm = document.querySelector('#platform .pf-kpi .pf-small'); if (sm) sm.textContent = 'Improved';
    const lk = document.querySelector('#platform .pf-list-head a'); if (lk) { lk.removeAttribute('href'); lk.setAttribute('aria-disabled', 'true'); lk.tabIndex = -1; }
    const rows = [...document.querySelectorAll('#platform .pf-rows .pf-row')]; if (rows.length < 3 || rows[0].dataset.v2) return;
    const D = [
      { ini: 'SL', name: 'Sofia L.', sub: 'Gap: Focus & Prioritisation', chip: '35%', cls: 'pf-chip--red', type: 'gap', w: 35 },
      { ini: '', name: 'Slow approvals', sub: 'Barrier', chip: '22 of 35', cls: 'pf-chip--amber', type: 'barrier' },
      { ini: 'HN', name: 'Hanna N.', sub: 'Clarity & Alignment: 41% → 72%', chip: '↑ +0 pts', cls: 'pf-chip--green pf-delta', type: 'up', delta: 31 },
    ];   rows.slice(0, 3).forEach((r, i) => {
      const d = D[i]; r.dataset.v2 = '1';
      const ini = r.querySelector('.pf-ini'); if (ini) ini.textContent = d.ini;
      if (ini && d.type === 'barrier') { r.classList.add('pf-row--org'); ini.classList.add('pf-ini--warn'); ini.setAttribute('aria-hidden', 'true'); ini.innerHTML = '<svg viewBox="0 0 24 24"><path d="M10.3 3.9 1.8 18a2 2 0 0 0 1.7 3h17a2 2 0 0 0 1.7-3L13.7 3.9a2 2 0 0 0-3.4 0z"/><path d="M12 9v4"/><path d="M12 17h.01"/></svg>'; }
      const who = r.querySelector('.pf-who');
      if (who) { const st = who.querySelector('strong'), sp = who.querySelector('span'); if (st) st.textContent = d.name; if (sp) sp.textContent = d.sub; }
      const chip = r.querySelector('.pf-chip');
      if (chip) { chip.className = 'pf-chip ' + d.cls; chip.textContent = d.chip; }
      let tr = r.querySelector('.pf-track');
      if (d.type === 'up') {
        if (tr) tr.remove(); r.classList.remove('pf-row--bar');
        const sub = who && who.querySelector('span');
        if (sub) sub.innerHTML = 'Clarity &amp; Alignment: 41% <span class="hn-arr">→</span> <b class="hn-to">41%</b>';
        chip.innerHTML = '<span class="hn-up">↑</span> +0 pts';
        const io = new IntersectionObserver((es) => { if (!es[0].isIntersecting) return; io.disconnect();
          setTimeout(() => {
            r.classList.add('hn-run');                       // arrow slides in, new score turns green
            const to = sub && sub.querySelector('.hn-to');
            setTimeout(() => { const t0 = performance.now(), dur = 1100;
              const step = (now) => { const k = Math.min(1, (now - t0) / dur), e = 1 - Math.pow(1 - k, 3);
                const v = Math.round(d.delta * e);
                chip.innerHTML = '<span class="hn-up">↑</span> +' + v + ' pts';
                if (to) to.textContent = (41 + v) + '%';
                if (k < 1) requestAnimationFrame(step); else chip.classList.add('pf-pop'); };
              requestAnimationFrame(step); }, 350);
          }, 2400); }, { threshold: .6 });
        io.observe(r);
        return;
      }
      if (!tr) { tr = document.createElement('span'); tr.className = 'pf-track'; tr.appendChild(document.createElement('i')); r.appendChild(tr); r.classList.add('pf-row--bar'); }
      const bar = tr.querySelector('i');
      if (d.type === 'gap') { bar.className = 'pf-gap'; bar.style.setProperty('--w', d.w + '%'); }
      if (d.type === 'barrier') {
        tr.classList.add('pf-dots'); tr.setAttribute('aria-hidden', 'true');
        [['#6c8cf5', '2.5s'], ['#b07ef0', '2.65s'], ['#f08a6e', '2.8s']].forEach(([c, dl]) => { const b = document.createElement('b'); b.style.background = c; b.style.setProperty('--d', dl); tr.appendChild(b); });
      }
      if (d.type === 'steps') {
        tr.classList.add('pf-steps');
        const line = document.createElement('span'); line.className = 'pf-line'; line.style.setProperty('--d', '2.9s'); tr.appendChild(line);
        const tick = '<svg viewBox="0 0 12 12"><path d="M2.5 6.3l2.3 2.3 4.7-5"/></svg>';
        [['0px', 'done', '2.5s'], ['calc(50% - 7px)', 'done', '3.3s'], ['calc(100% - 14px)', 'todo', '0s']].forEach(([left, st, dl]) => {
          const c = document.createElement('b'); c.className = st; c.style.left = left; c.style.setProperty('--d', dl); if (st === 'done') c.innerHTML = tick; tr.appendChild(c); });
      }
    });
  }
  const st = document.createElement('style'); st.id = 'polish-v2'; st.textContent = CSS; document.head.appendChild(st);
  const wait = setInterval(() => {
    if (document.querySelector('#contact') && document.querySelector('.nbm-eyebrow')) { clearInterval(wait); tag(); fitRail(); dash(); setTimeout(() => { tag(); fitRail(); dash(); }, 1500); }
  }, 100);
})();
