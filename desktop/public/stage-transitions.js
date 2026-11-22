/*
  Behavency: stage transitions ("3+2")
  ------------------------------------
  Before each of the four stages, a short "chapter" screen:
    1. a small line "02 · STAGE 2 OF 4 • Engage" and the stage's promise fade in
       (first word in the stage colour, the other words grey),
    2. the grey words turn dark one after another, as if being written,
    3. then a thin half circle in the stage colour draws across the screen.
  Everything starts only when the visitor scrolls to it. Scrolling is never blocked.

  How to use
    Put this file on the page (after the page content has rendered) and call:
      BehavencyStages.init();
    By default it looks for the four stage sections with these selectors
    (change STAGES below if the ids differ):
      #identify, #engage, #build, #measure
    A chapter screen is inserted right BEFORE each of them.

  Texts and colours are in STAGES. Nothing else needs changing.
*/
(function () {
  const STAGES = [
    { sel: '#identify', name: 'Identify', promise: 'Reveal strengths and gaps',              color: '#2f6fdb' },
    { sel: '#engage',   name: 'Engage',   promise: 'Experience how the team works together', color: '#7a4bd6' },
    { sel: '#build',    name: 'Build',    promise: 'Build the right capabilities',           color: '#e0761c' },
    { sel: '#measure',  name: 'Measure',  promise: 'Prove the impact',                       color: '#14a07c' },
  ];
  const BACKGROUND = '#f8f7fb';   // the one background shared by all stage sections
  const WORD_START = 0.9;         // seconds after the sentence appears before the first grey word fills
  const WORD_STEP = 0.2;          // seconds between words
  const ARC_PAUSE = 0.6;          // seconds after the last word before the half circle starts

  const css = `
  .bhv-ch { position: relative; z-index: 1; background: ${BACKGROUND}; overflow: hidden; pointer-events: none;
            margin-bottom: -110px; /* lets the half circle overlap the empty top padding of the next section */ }
  .bhv-ch .bhv-wrap { min-height: 80vh; display: flex; flex-direction: column; align-items: center; justify-content: flex-start;
            text-align: center; padding: 15vh 24px 0; position: relative; z-index: 1; box-sizing: border-box; }
  .bhv-ch .bhv-eb { display: inline-flex; align-items: center; gap: 14px; }
  .bhv-ch .bhv-eb::before, .bhv-ch .bhv-eb::after { content: ""; width: 40px; height: 1.5px; background: var(--k); opacity: .45; }
  .bhv-ch .bhv-num { font: 700 13px/1 Inter, Arial, sans-serif; letter-spacing: .18em; text-transform: uppercase; color: var(--k); }
  .bhv-ch .bhv-dot { width: 5px; height: 5px; border-radius: 50%; background: var(--k); opacity: .6; }
  .bhv-ch .bhv-name { font: italic 500 30px/1 "Playfair Display", Georgia, serif; color: #0f1b3d; }
  .bhv-ch .bhv-stmt { font: 500 64px/1.12 "Playfair Display", Georgia, serif; letter-spacing: -.015em; max-width: 1000px; margin: 30px 0 0; }
  .bhv-ch .bhv-stmt span { color: #d9d6e3; transition: color .7s ease; }
  .bhv-ch.is-in .bhv-stmt span { color: #0f1b3d; }
  .bhv-ch .bhv-stmt span.bhv-first { color: var(--k); }
  .bhv-ch .bhv-anim { opacity: 0; transform: translateY(34px); filter: blur(6px);
            transition: opacity 1.1s cubic-bezier(.2,.7,.2,1), transform 1.1s cubic-bezier(.2,.7,.2,1), filter 1.1s cubic-bezier(.2,.7,.2,1); }
  .bhv-ch.is-in .bhv-anim { opacity: 1; transform: none; filter: none; }
  .bhv-ch.is-in .bhv-anim.bhv-d2 { transition-delay: .18s; }
  .bhv-ch svg.bhv-arc { position: absolute; left: 50%; transform: translateX(-50%); top: 31vh; width: 124vw; max-width: 2200px; height: 60vh; z-index: 0; overflow: visible; }
  .bhv-ch svg.bhv-arc path { fill: none; stroke-width: 1.4; stroke-linecap: round; vector-effect: non-scaling-stroke;
            stroke-dasharray: 3000; stroke-dashoffset: 3000; transition: stroke-dashoffset 2.5s cubic-bezier(.45,.05,.25,1);
            filter: drop-shadow(0 0 6px color-mix(in srgb, var(--k) 45%, transparent)); }
  .bhv-ch.is-in svg.bhv-arc path { stroke-dashoffset: 0; }
  .bhv-ch .bhv-glow { position: absolute; left: 0; right: 0; bottom: 0; height: 46vh; z-index: 0; opacity: 0; transition: opacity 2s ease 2.6s;
            background: radial-gradient(50% 90% at 50% 100%, color-mix(in srgb, var(--k) 7%, transparent), transparent 70%);
            -webkit-mask-image: linear-gradient(to bottom, #000 35%, transparent 92%); mask-image: linear-gradient(to bottom, #000 35%, transparent 92%); }
  .bhv-ch.is-in .bhv-glow { opacity: 1; }
  @media (max-width: 760px) {
    .bhv-ch .bhv-stmt { font-size: 38px; }
    .bhv-ch .bhv-name { font-size: 22px; }
    .bhv-ch .bhv-eb::before, .bhv-ch .bhv-eb::after { width: 20px; }
    .bhv-ch svg.bhv-arc { width: 280vw; }
  }
  @media (prefers-reduced-motion: reduce) {
    .bhv-ch .bhv-anim, .bhv-ch .bhv-stmt span, .bhv-ch svg.bhv-arc path, .bhv-ch .bhv-glow { transition: none !important; }
  }`;

  function chapter(s, i) {
    const words = s.promise.split(' ');
    const arcDelay = (WORD_START + (words.length - 1) * WORD_STEP + ARC_PAUSE).toFixed(2);
    const n = document.createElement('section');
    n.className = 'bhv-ch';
    n.style.setProperty('--k', s.color);
    n.setAttribute('aria-label', `Stage ${i + 1} of 4: ${s.name}`);
    n.innerHTML = `
      <div class="bhv-wrap">
        <div class="bhv-eb bhv-anim"><span class="bhv-num">0${i + 1} · Stage ${i + 1} of 4</span><i class="bhv-dot"></i><span class="bhv-name">${s.name}</span></div>
        <div class="bhv-stmt bhv-anim bhv-d2">${words.map((w, j) =>
          `<span class="${j === 0 ? 'bhv-first' : ''}" style="transition-delay:${(WORD_START + j * WORD_STEP).toFixed(2)}s">${w}</span>`).join(' ')}.</div>
      </div>
      <div class="bhv-glow"></div>
      <svg class="bhv-arc" viewBox="0 0 2000 900" preserveAspectRatio="none" aria-hidden="true">
        <defs><linearGradient id="bhv-g${i}" x1="0" x2="1">
          <stop offset="0" stop-color="${s.color}" stop-opacity="0"/><stop offset=".22" stop-color="${s.color}" stop-opacity=".55"/>
          <stop offset=".5" stop-color="${s.color}"/><stop offset=".78" stop-color="${s.color}" stop-opacity=".55"/>
          <stop offset="1" stop-color="${s.color}" stop-opacity="0"/></linearGradient></defs>
        <path d="M0 900 Q1000 -120 2000 900" stroke="url(#bhv-g${i})" style="transition-delay:${arcDelay}s"/>
      </svg>`;
    return n;
  }

  // keep the same distance from the sentence to the half circle on every stage, whatever the sentence length
  function fit() {
    const ih = innerHeight;
    document.querySelectorAll('.bhv-ch').forEach((n) => {
      const w = n.querySelector('.bhv-wrap'), svg = n.querySelector('svg.bhv-arc'), st = n.querySelector('.bhv-stmt');
      w.style.minHeight = ''; svg.style.top = '';
      const textBottom = st.getBoundingClientRect().bottom - n.getBoundingClientRect().top;
      const d = Math.min(0, textBottom + 0.139 * ih - 0.57 * ih);
      svg.style.top = (0.31 * ih + d) + 'px';
      w.style.minHeight = (0.8 * ih + d) + 'px';
    });
  }

  // start each chapter only when the visitor scrolls to it
  function watch() {
    let tick = 0;
    const check = () => {
      tick = 0;
      document.querySelectorAll('.bhv-ch:not(.is-in)').forEach((n) => {
        const r = n.querySelector('.bhv-eb').getBoundingClientRect();
        if (r.top < innerHeight * 0.55 && r.bottom > 0) n.classList.add('is-in');
      });
    };
    const req = () => { if (!tick) tick = requestAnimationFrame(check); };
    addEventListener('scroll', req, { passive: true });
    addEventListener('resize', () => { fit(); req(); });
    setTimeout(req, 1200);
  }

  function init() {
    if (document.querySelector('.bhv-ch')) return;   // already added
    const style = document.createElement('style'); style.textContent = css; document.head.appendChild(style);
    STAGES.forEach((s, i) => {
      const target = document.querySelector(s.sel);
      if (target) target.parentNode.insertBefore(chapter(s, i), target);
      else console.warn('Behavency stage transitions: no element for', s.sel);
    });
    fit(); setTimeout(fit, 1500); if (document.fonts) document.fonts.ready.then(fit);
    watch();
  }

  window.BehavencyStages = { init, STAGES };
})();
