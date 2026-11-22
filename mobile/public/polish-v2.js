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
  

  /* hero: emerald stage panel ~8% smaller, edges in line with the text above */
  :root .hr-panel { zoom: .92; width: 391px; margin: 32.6px auto 0 !important; }
  /* logo strip: even space above and below before the navy section */
  :root .bh-clients { padding-bottom: 52px !important; }


  /* same list style for "Explore the five sources" and the six areas */
  :root .id-name, :root .nbm-ar-name { font: 600 16px/1.2 Inter, Arial, sans-serif !important; letter-spacing: -.014em !important; }
  /* dashboard: a gap shows as a short red bar */
  .pf-track i.pf-gap { background: linear-gradient(90deg, #f0566e, #e8294a) !important; }
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
  :root #platform .pf-kpis { grid-template-columns: 92px 106px 114px !important; }
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

  // platform dashboard: three rows tell one story (find the gap, close it, prove it)
  function dash() {
    const kp = [...document.querySelectorAll('#platform .pf-kpi span')].find((x) => x.textContent.trim() === 'Journeys');
    if (kp) { kp.textContent = 'In development'; kp.classList.add('pf-kpi-dev'); }
    const lk = document.querySelector('#platform .pf-list-head a'); if (lk) { lk.removeAttribute('href'); lk.setAttribute('aria-disabled', 'true'); lk.tabIndex = -1; }
    const rows = [...document.querySelectorAll('#platform .pf-rows .pf-row')]; if (rows.length < 3 || rows[0].dataset.v2) return;
    const D = [
      { ini: 'SL', name: 'Sofia L.', sub: 'Biggest gap: Focus & Prioritization · 35%', chip: 'Identify', cls: 'pf-chip--blue', type: 'gap', w: 35 },
      { ini: 'FK', name: 'Frederick K.', sub: 'Trust & Inclusivity · 2 of 3 modules', chip: 'Build', cls: 'pf-chip--green', type: 'steps' },
      { ini: 'HN', name: 'Hanna N.', sub: 'Clarity & Alignment: 41% → 72%', chip: '↑ +0%', cls: 'pf-chip--green pf-delta', type: 'up', delta: 31 },
    ];   rows.slice(0, 3).forEach((r, i) => {
      const d = D[i]; r.dataset.v2 = '1';
      const ini = r.querySelector('.pf-ini'); if (ini) ini.textContent = d.ini;
      const who = r.querySelector('.pf-who');
      if (who) { const st = who.querySelector('strong'), sp = who.querySelector('span'); if (st) st.textContent = d.name; if (sp) sp.textContent = d.sub; }
      const chip = r.querySelector('.pf-chip');
      if (chip) { chip.className = 'pf-chip ' + d.cls; chip.textContent = d.chip; }
      let tr = r.querySelector('.pf-track');
      if (d.type === 'up') {
        if (tr) tr.remove(); r.classList.remove('pf-row--bar');
        const sub = who && who.querySelector('span');
        if (sub) sub.innerHTML = 'Clarity &amp; Alignment: 41% <span class="hn-arr">→</span> <b class="hn-to">41%</b>';
        chip.innerHTML = '<span class="hn-up">↑</span> +0%';
        const io = new IntersectionObserver((es) => { if (!es[0].isIntersecting) return; io.disconnect();
          setTimeout(() => {
            r.classList.add('hn-run');                       // arrow slides in, new score turns green
            const to = sub && sub.querySelector('.hn-to');
            setTimeout(() => { const t0 = performance.now(), dur = 1100;
              const step = (now) => { const k = Math.min(1, (now - t0) / dur), e = 1 - Math.pow(1 - k, 3);
                const v = Math.round(d.delta * e);
                chip.innerHTML = '<span class="hn-up">↑</span> +' + v + '%';
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
