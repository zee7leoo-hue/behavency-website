// Phone stage starts: six compact options based on the phone research (switch with the bar at the bottom, #p=1..6).
// 1 Short card, plays once: words fill by themselves, then a short arc draws (Apple chapter card + Attio serif fill)
// 2 Fills as you scroll: the card pauses briefly while the words fill (Attio, Pitch)
// 3 Still half circle: a wide arc in the stage colour fades in above the sentence (Attio horizon)
// 4 Title slides up: small label, then the sentence rises and settles, no fill (Apple AirPods chapters)
// 5 Line above, left-aligned: a thin line draws above the label and sentence (Stripe Sessions)
// 6 Journey dots: four dots show where you are in the journey, then the sentence (Arc timeline)
(function () {
  const STAGES = [
    { sel: '#identify', name: 'Identify', promise: 'Reveal strengths and gaps', color: '#2f6fdb' },
    { sel: '#engage', name: 'Engage', promise: 'See how the team really works together', color: '#7a4bd6' },
    { sel: '#build', name: 'Build', promise: 'Build the right capabilities', color: '#e0761c' },
    { sel: '#measure', name: 'Measure', promise: 'Prove the impact', color: '#14a07c' },
  ];
  const VERS = { 1: 'Short card, plays once', 2: 'Fills as you scroll', 3: 'Still half circle', 4: 'Title slides up', 5: 'Line above, left-aligned', 6: 'Journey dots' };
  const m = location.hash.match(/p=(\d)/);
  const FINAL = !!window.BHV_FINAL; // the chosen design: option 1, one tinted background, no switch bar
  const TINT = '#f7f5fc';
  const V = FINAL ? '1' : m && VERS[m[1]] ? m[1] : '1';
  const FILL = ['1', '2', '3'].includes(V);

  const css = `
  .bpc { position: relative; overflow: hidden; font-family: Inter, Arial, sans-serif; }
  .bpc .bpc-in { display: flex; flex-direction: column; align-items: center; text-align: center; padding: 64px 22px 40px; position: relative; z-index: 1; }
  .bpc .bpc-eb { display: inline-flex; align-items: center; gap: 9px; }
  .bpc .bpc-eb::before, .bpc .bpc-eb::after { content: ""; width: 18px; height: 1.5px; background: var(--k); opacity: .45; }
  .bpc .bpc-num { font: 700 11.5px/1 Inter, sans-serif; letter-spacing: .16em; text-transform: uppercase; color: var(--k); white-space: nowrap; }
  .bpc .bpc-dot { width: 4px; height: 4px; border-radius: 50%; background: var(--k); opacity: .6; }
  .bpc .bpc-name { font: italic 500 21px/1 "Playfair Display", Georgia, serif; color: #0f1b3d; }
  .bpc .bpc-stmt { font: 500 33px/1.16 "Playfair Display", Georgia, serif; letter-spacing: -.01em; color: #0f1b3d; margin: 18px 0 0; max-width: 340px; }
  .bpc.fill .bpc-stmt span { color: #d6d2e0; transition: color .55s ease; }
  .bpc.fill .bpc-stmt span.on { color: #0f1b3d; }
  .bpc .bpc-stmt span.k { color: var(--k) !important; }
  .bpc .bpc-fade { opacity: 0; transform: translateY(18px); transition: opacity .8s cubic-bezier(.2,.7,.2,1), transform .8s cubic-bezier(.2,.7,.2,1); }
  .bpc.in .bpc-fade { opacity: 1; transform: none; }
  .bpc.in .bpc-fade.d2 { transition-delay: .15s; }
  .bpc svg.bpc-sarc { width: 210px; height: 28px; margin-top: 16px; overflow: visible; }
  .bpc svg.bpc-sarc path { fill: none; stroke: var(--k); stroke-width: 1.6; stroke-linecap: round; stroke-dasharray: 300; stroke-dashoffset: 300; transition: stroke-dashoffset 1.2s cubic-bezier(.45,.05,.25,1); }
  .bpc.arc svg.bpc-sarc path { stroke-dashoffset: 0; }
  /* 2: short pause while filling */
  .bpc.bpc2 { overflow: visible; height: 125svh; }
  .bpc.bpc2 .bpc-stick { position: sticky; top: 0; height: 100svh; display: flex; align-items: center; justify-content: center; overflow: hidden; }
  .bpc.bpc2 .bpc-in { padding: 0 22px; }
  /* 3: still half circle */
  .bpc.bpc3 .bpc-in { padding-top: 168px; }
  .bpc.bpc3 svg.bpc-big { position: absolute; left: 50%; top: 40px; transform: translateX(-50%); width: 200vw; height: 240px; z-index: 0; opacity: 0; transition: opacity 1.3s ease; }
  .bpc.bpc3.in svg.bpc-big { opacity: 1; }
  .bpc.bpc3 .bpc-glow { position: absolute; left: -20%; right: -20%; top: 128px; height: 150px; background: radial-gradient(45% 70% at 50% 0%, color-mix(in srgb, var(--k) 11%, transparent), transparent 70%); opacity: 0; transition: opacity 1.5s ease .2s; z-index: 0; }
  .bpc.bpc3.in .bpc-glow { opacity: 1; }
  /* 4: title slides up */
  .bpc.bpc4 .bpc-stmt.bpc-fade { transform: translateY(46px); transition-duration: 1.1s; }
  .bpc.bpc4.in .bpc-stmt.bpc-fade { transform: none; }
  /* 5: line above, left-aligned */
  .bpc.bpc5 .bpc-in { align-items: flex-start; text-align: left; padding: 56px 24px 28px; }
  .bpc.bpc5 .bpc-line { width: 100%; height: 1.5px; background: color-mix(in srgb, var(--k) 25%, transparent); position: relative; margin-bottom: 18px; overflow: hidden; }
  .bpc.bpc5 .bpc-line::after { content: ""; position: absolute; inset: 0; background: var(--k); transform: scaleX(0); transform-origin: left; transition: transform 1.1s cubic-bezier(.45,.05,.25,1); }
  .bpc.bpc5.in .bpc-line::after { transform: scaleX(1); }
  .bpc.bpc5 .bpc-eb::before, .bpc.bpc5 .bpc-eb::after { display: none; }
  .bpc.bpc5 .bpc-stmt { font-size: 31px; max-width: none; margin-top: 12px; }
  /* 6: journey dots */
  .bpc .bpc-dots { display: flex; align-items: center; margin-bottom: 20px; }
  .bpc .bpc-dots i { width: 10px; height: 10px; border-radius: 50%; background: #dcd8e6; flex: none; transition: background .4s, transform .4s, box-shadow .4s; }
  .bpc .bpc-dots b { width: 34px; height: 1.5px; background: #dcd8e6; flex: none; }
  .bpc .bpc-dots i.done, .bpc .bpc-dots b.done { background: color-mix(in srgb, var(--k) 45%, #fff); }
  .bpc.in .bpc-dots i.cur { background: var(--k); transform: scale(1.35); box-shadow: 0 0 0 5px color-mix(in srgb, var(--k) 16%, transparent); }
  /* version bar */
  .bpc-bar { position: fixed !important; left: 50% !important; bottom: 12px !important; transform: translateX(-50%) !important; z-index: 99999 !important; display: flex; align-items: center; background: #0f1b3d; color: #fff; border-radius: 999px; padding: 4px; box-shadow: 0 10px 30px rgba(0,0,0,.3); font: 600 13px/1 Inter, sans-serif; white-space: nowrap; }
  .bpc-bar span { padding: 0 6px 0 10px; opacity: .7; }
  .bpc-bar button { border: 0; background: transparent; color: #fff; font: inherit; width: 40px; height: 40px; border-radius: 999px; }
  .bpc-bar button[aria-pressed="true"] { background: #fff; color: #0f1b3d; }
  .bpc-cap { position: fixed !important; left: 50% !important; bottom: 64px !important; transform: translateX(-50%) !important; z-index: 99999 !important; background: rgba(15,27,61,.94); color: #fff; font: 500 13px/1.4 Inter, sans-serif; padding: 9px 14px; border-radius: 12px; width: max-content; max-width: calc(100vw - 32px); text-align: center; transition: opacity .4s; pointer-events: none; }
  @media (prefers-reduced-motion: reduce) { .bpc * { transition: none !important; } }`;

  const SARC = '<svg class="bpc-sarc" viewBox="0 0 210 28" aria-hidden="true"><path d="M4 25 Q105 -6 206 25"/></svg>';
  const BIG = (c, i) => `<div class="bpc-glow"></div><svg class="bpc-big" viewBox="0 0 2000 600" preserveAspectRatio="none" aria-hidden="true"><defs><linearGradient id="bpcg${i}" x1="0" x2="1"><stop offset="0" stop-color="${c}" stop-opacity="0"/><stop offset=".25" stop-color="${c}" stop-opacity=".55"/><stop offset=".5" stop-color="${c}"/><stop offset=".75" stop-color="${c}" stop-opacity=".55"/><stop offset="1" stop-color="${c}" stop-opacity="0"/></linearGradient></defs><path d="M0 600 Q1000 -150 2000 600" fill="none" stroke="url(#bpcg${i})" stroke-width="2" vector-effect="non-scaling-stroke"/></svg>`;
  const DOTS = (i) => `<div class="bpc-dots bpc-fade" aria-hidden="true">${STAGES.map((_, j) => `<i class="${j < i ? 'done' : j === i ? 'cur' : ''}"></i>${j < 3 ? `<b class="${j < i ? 'done' : ''}"></b>` : ''}`).join('')}</div>`;

  function card(s, i, bg) {
    const words = s.promise.split(' ');
    const n = document.createElement('section');
    n.className = 'bpc bpc' + V + (FILL ? ' fill' : ''); n.style.setProperty('--k', s.color); n.style.background = bg;
    n.setAttribute('aria-label', `Stage ${i + 1} of 4: ${s.name}`);
    const eb = `<div class="bpc-eb bpc-fade"><span class="bpc-num">0${i + 1} · Stage ${i + 1} of 4</span><i class="bpc-dot"></i><span class="bpc-name">${s.name}</span></div>`;
    const stmt = `<div class="bpc-stmt bpc-fade d2">${words.map((w, j) => `<span class="${j === 0 ? 'k' : ''}">${w}</span>`).join(' ')}.</div>`;
    let inner = `<div class="bpc-in">${V === '5' ? '<div class="bpc-line"></div>' : ''}${V === '6' ? DOTS(i) : ''}${eb}${stmt}${V === '1' || V === '2' ? SARC : ''}</div>`;
    if (V === '2') inner = `<div class="bpc-stick">${inner}</div>`;
    if (V === '3') inner = BIG(s.color, i) + inner;
    n.innerHTML = inner;
    return n;
  }

  function playOnce(n) {
    if (n.classList.contains('in')) return;
    n.classList.add('in');
    if (!FILL) return;
    const sp = [...n.querySelectorAll('.bpc-stmt span:not(.k)')];
    sp.forEach((w, j) => setTimeout(() => w.classList.add('on'), 650 + j * 170));
    setTimeout(() => n.classList.add('arc'), 650 + sp.length * 170 + 300);
  }
  function scrollFill(n) {
    const r = n.getBoundingClientRect(); const ih = innerHeight;
    if (r.top < ih * 0.6) n.classList.add('in');
    const p = Math.max(0, Math.min(1, (ih * 0.35 - r.top) / (r.height - ih * 0.65)));
    const sp = [...n.querySelectorAll('.bpc-stmt span:not(.k)')];
    const on = Math.round(Math.min(1, p / 0.8) * sp.length);
    sp.forEach((w, j) => w.classList.toggle('on', j < on));
    n.classList.toggle('arc', p > 0.82);
  }

  // one soft tinted background for every light section; dark sections, cards and pictures keep their look
  function tintAll() {
    const dark = (c) => { const m = c.match(/[0-9.]+/g); return m && m.length >= 3 && (+m[0] + +m[1] + +m[2]) / 3 < 90 && (m.length < 4 || +m[3] > 0.5); };
    document.body.style.setProperty('background', TINT, 'important');
    document.querySelectorAll('#root section, #root footer').forEach((sec) => {
      if (sec.parentElement && sec.parentElement.closest('#root section')) return;
      { const g = getComputedStyle(sec).backgroundImage.match(/rgba?([^)]*)/g); if (g && g.some((c) => dark(c))) return; }
      if (sec.tagName === 'FOOTER' || dark(getComputedStyle(sec).backgroundColor)) return;
      sec.style.setProperty('background', TINT, 'important');
      const w = sec.getBoundingClientRect().width;
      sec.querySelectorAll('*').forEach((e) => {
        if (e.matches('img, video, canvas, svg, iframe') || e.closest('svg')) return;
        if (e.getBoundingClientRect().width < w - 4) return;
        const cs = getComputedStyle(e); if (dark(cs.backgroundColor)) return;
        // keep dark gradients (e.g. the navy 'risk you can see coming' block)
        const g = cs.backgroundImage.match(/rgba?([^)]*)/g); if (g && g.some((c) => dark(c))) return;
        if ((cs.backgroundColor !== 'rgba(0, 0, 0, 0)' && cs.backgroundColor !== 'transparent') || cs.backgroundImage !== 'none') e.style.setProperty('background', 'transparent', 'important');
      });
    });
  }
  // big pale cards in Engage: white with a soft shadow so they stand out on the tint
  function whiteCards() {
    document.querySelectorAll('#engage, #play').forEach((eg) => {
    const w = eg.getBoundingClientRect().width;
    eg.querySelectorAll('*').forEach((e) => {
      const r = e.getBoundingClientRect(); if (r.width < 300 || r.width >= w - 4 || r.height < 300) return;
      const m = getComputedStyle(e).backgroundColor.match(/[0-9.]+/g); if (!m || (m.length === 4 && +m[3] === 0)) return;
      const avg = (+m[0] + +m[1] + +m[2]) / 3; if (avg < 225 || avg > 254) return;
      e.style.setProperty('background', '#fff', 'important');
      e.style.setProperty('box-shadow', '0 0 0 1px rgba(20,35,75,.07), 0 22px 50px -26px rgba(40,30,110,.25)', 'important');
    });
    });
  }
  function names() {   // the app's names for the two manager groups
    const w = document.createTreeWalker(document.getElementById('root'), NodeFilter.SHOW_TEXT);
    let n; while ((n = w.nextNode())) { let v = n.nodeValue;
      v = v.replace(/line and mid-level managers/gi, (m) => (m[0] === 'L' ? 'Line managers and managers of managers' : 'line managers and managers of managers'));
      v = v.replace(/mid-level managers/gi, (m) => (m[0] === 'M' ? 'Managers of managers' : 'managers of managers'));
      v = v.replace(/senior managers/gi, (m) => (m[0] === 'S' ? 'Managers of managers' : 'managers of managers'));
      if (v !== n.nodeValue) n.nodeValue = v; }
  }
  function init() {
    const st = document.createElement('style'); st.textContent = css; document.head.appendChild(st);
    STAGES.forEach((s, i) => { const t = document.querySelector(s.sel); if (!t) return; t.parentNode.insertBefore(card(s, i, FINAL ? TINT : getComputedStyle(t).backgroundColor), t);
      // the site's own small stage label (e.g. '03 — BUILD · Build the right capabilities') now repeats the card: hide it
      const lab = [...t.querySelectorAll('*')].filter((e) => new RegExp('^0' + (i + 1) + '[^a-z]*' + s.name, 'i').test(e.textContent.trim()) && e.textContent.trim().length < 70).sort((a, b) => a.textContent.length - b.textContent.length).pop();
      if (lab) lab.style.display = 'none'; });
    let tick = 0;
    const check = () => { tick = 0; document.querySelectorAll('.bpc').forEach((n) => {
      if (V === '2') return scrollFill(n);
      const r = n.querySelector('.bpc-eb').getBoundingClientRect();
      if (r.top < innerHeight * 0.72 && r.bottom > 0) playOnce(n);
    }); };
    addEventListener('scroll', () => { if (!tick) tick = requestAnimationFrame(check); }, { passive: true });
    setTimeout(() => { if (scrollY > 200) check(); }, 2500);
    if (FINAL) { names(); setTimeout(names, 2000); tintAll(); whiteCards(); setTimeout(() => { tintAll(); whiteCards(); }, 1500); return; }
    const bar = document.createElement('div'); bar.className = 'bpc-bar';
    bar.innerHTML = '<span>Option</span>' + Object.keys(VERS).map((k) => `<button type="button" data-v="${k}" aria-pressed="${k === V}">${k}</button>`).join('');
    bar.addEventListener('click', (e) => { const b = e.target.closest('button'); if (!b || b.dataset.v === V) return; location.hash = 'p=' + b.dataset.v; location.reload(); });
    document.body.appendChild(bar);
    const cap = document.createElement('div'); cap.className = 'bpc-cap'; cap.innerHTML = `<b>${V} · ${VERS[V]}</b><br>Scroll down to the four stages.`; document.body.appendChild(cap);
    setTimeout(() => { cap.style.opacity = '0'; }, 5000);
  }
  const wait = setInterval(() => { if (document.querySelector('#measure')) { clearInterval(wait); setTimeout(init, 300); } }, 300);
})();
