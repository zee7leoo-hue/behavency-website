// Landing hero (24 Nov): the four stage cards as separate transparent pictures, titles as live text, timeline underneath.
// Replaces the old single picture + its text layer inside .hc-cards.
(function () {
  const CARDS = [
    ['identify', 'Identify', 'Найти сильные стороны<br>и зоны роста.', '#018ffd'],
    ['engage', 'Engage', 'Сделать развитие<br>общим делом.', '#9c23fe'],
    ['build', 'Build', 'Развить нужные<br>навыки.', '#fe8a03'],
    ['measure', 'Measure', 'Показать, что<br>изменилось.', '#02ca2a'],
  ];
  const CSS = `
  .hc-cards .hc-cards-art, .hc-cards .hc-cards-ui, .hc-cards .hc-ct { display: none !important; }
  .hcx { position: absolute; inset: 0; }
  .hcx-row { position: absolute; left: 0; right: 0; top: 1%; display: grid; grid-template-columns: repeat(4, 1fr); gap: 2.2%; }
  .hcx-c { position: relative; container-type: inline-size; margin: 0; }
  .hcx-c img { display: block; width: 100%; height: auto; -webkit-user-drag: none; user-select: none; }
  .hcx-t { position: absolute; left: 6%; right: 6%; top: 67%; text-align: center; font-family: Inter, "Plus Jakarta Sans", Arial, sans-serif; color: #0b1a4d; }
  .hcx-t b { display: block; font-size: 11.6cqw; font-weight: 800; letter-spacing: -.02em; line-height: 1.1; }
  .hcx-t span { display: block; margin-top: 3.5cqw; font-size: 7.4cqw; font-weight: 500; line-height: 1.3; color: #12214f; }
  .hcx-line { position: absolute; left: 0; right: 0; top: 88%; width: 100%; height: 10%; overflow: visible; }
  `;
  // timeline: a gentle wave through four dots under the card centres, ending in an arrow
  const cx = [0.1083, 0.3694, 0.6306, 0.8917].map((v) => v * 1000);
  const SVG = `<svg class="hcx-line" viewBox="0 0 1000 60" preserveAspectRatio="none" aria-hidden="true">
    <defs><linearGradient id="hcx-g" x1="0" x2="1"><stop offset="0" stop-color="#018ffd"/><stop offset=".18" stop-color="#215df9"/><stop offset=".37" stop-color="#9c23fe"/><stop offset=".5" stop-color="#c614d8"/><stop offset=".58" stop-color="#ff4d2e"/><stop offset=".64" stop-color="#fe8a03"/><stop offset=".78" stop-color="#c8d400"/><stop offset=".9" stop-color="#02ca2a"/><stop offset="1" stop-color="#1bc838"/></linearGradient></defs>
    <path d="M${cx[0]} 30 C ${cx[0] + 90} 46, ${cx[1] - 90} 46, ${cx[1]} 30 S ${cx[2] - 90} 14, ${cx[2]} 30 S ${cx[3] - 90} 46, ${cx[3]} 30 C ${cx[3] + 40} 22, 960 18, 985 6" fill="none" stroke="url(#hcx-g)" stroke-width="3.5" stroke-linecap="round" vector-effect="non-scaling-stroke"/>
    <path d="M968 4 L986 5 L979 21" fill="none" stroke="#1bc838" stroke-width="3.5" stroke-linecap="round" stroke-linejoin="round" vector-effect="non-scaling-stroke"/>
  </svg>`;
  const DOTS = cx.map((x, i) => `<i style="left:${x / 10}%;--c:${CARDS[i][3]}"></i>`).join('');
  const DOTCSS = `.hcx-dots { position: absolute; left: 0; right: 0; top: 88%; height: 10%; }
  .hcx-dots i { position: absolute; top: 50%; width: 3.2%; aspect-ratio: 1; transform: translate(-50%, -50%); border-radius: 50%; background: var(--c); box-shadow: 0 0 0 .7cqw #fff, 0 0 1.6cqw .4cqw color-mix(in srgb, var(--c) 45%, transparent); }
  .hcx-row ~ .hcx-dots { container-type: inline-size; }
  /* entrance (24 Nov, approved on the test link): stacked in the middle, Identify in front, the others peek out, then spread to their places; starts only after the pictures have loaded */
  .hcx.wait .hcx-c, .hcx.wait .hcx-dots i { opacity: 0; }
  .hcx.wait .hcx-line { clip-path: inset(0 100% 0 0); }
  @keyframes hcx-deal {
    0%   { opacity: 0; transform: translateX(var(--dx)) translateY(22px) scale(.9) rotate(0deg); }
    18%  { opacity: 1; transform: translateX(var(--dx)) translateY(0) scale(1) rotate(0deg); }
    42%  { opacity: 1; transform: translateX(calc(var(--dx) + var(--px))) translateY(var(--py)) scale(1) rotate(var(--r)); }
    100% { opacity: 1; transform: none; }
  }
  @keyframes hcx-draw { from { clip-path: inset(0 100% 0 0); } to { clip-path: inset(0 0 0 0); } }
  @keyframes hcx-pop { from { opacity: 0; transform: translate(-50%, -50%) scale(.2); } to { opacity: 1; transform: translate(-50%, -50%) scale(1); } }
  .hcx-c:nth-child(1) { --dx: 164%;   --px: 0%;   --py: 0px;  --r: 0deg;  z-index: 4; }
  .hcx-c:nth-child(2) { --dx: 54.7%;  --px: 16%;  --py: -8px; --r: 6deg;  z-index: 3; }
  .hcx-c:nth-child(3) { --dx: -54.7%; --px: -16%; --py: -8px; --r: -6deg; z-index: 2; }
  .hcx-c:nth-child(4) { --dx: -164%;  --px: 30%;  --py: -2px; --r: 11deg; z-index: 1; }
  .hcx-c { transform-origin: 50% 90%; }
  .hcx.go .hcx-c { animation: hcx-deal 1.9s cubic-bezier(.45,.05,.2,1) both; }
  .hcx.go .hcx-line { animation: hcx-draw 1s ease-in-out 1.85s both; }
  .hcx.go .hcx-dots i { animation: hcx-pop .35s cubic-bezier(.3,1.6,.5,1) both; }
  .hcx.go .hcx-dots i:nth-child(1) { animation-delay: 1.85s; } .hcx.go .hcx-dots i:nth-child(2) { animation-delay: 2.1s; }
  .hcx.go .hcx-dots i:nth-child(3) { animation-delay: 2.36s; } .hcx.go .hcx-dots i:nth-child(4) { animation-delay: 2.62s; }
  @media (prefers-reduced-motion: reduce) { .hcx.wait .hcx-c, .hcx.wait .hcx-dots i { opacity: 1; } .hcx.wait .hcx-line { clip-path: none; } .hcx.go * { animation: none !important; } }`;
  const HTML = `<div class="hcx wait"><div class="hcx-row">${CARDS.map(([k, t, s]) => `<figure class="hcx-c"><img src="assets/hero-card-${k}.webp" alt="" draggable="false"><figcaption class="hcx-t"><b>${t}</b><span>${s}</span></figcaption></figure>`).join('')}</div>${SVG}<div class="hcx-dots">${DOTS}</div></div>`;
  const mount = () => {
    const c = document.querySelector('.hc-cards'); if (!c) return;
    if (!document.getElementById('hero-cards-css')) { const st = document.createElement('style'); st.id = 'hero-cards-css'; st.textContent = CSS + DOTCSS; document.head.appendChild(st); }
    if (!c.querySelector('.hcx')) {
      const t = document.createElement('div'); t.innerHTML = HTML; const box = t.firstElementChild; c.appendChild(box);
      let started = false;
      const go = () => { if (started) return; started = true; requestAnimationFrame(() => { box.classList.add('go'); box.classList.remove('wait'); }); };
      const imgs = [...box.querySelectorAll('img')];
      Promise.all([...imgs.map((im) => (im.decode ? im.decode().catch(() => {}) : Promise.resolve())), Promise.race([document.fonts ? document.fonts.ready : null, new Promise((r) => setTimeout(r, 1200))])]).then(go);
      setTimeout(go, 2500); // never stay hidden
    }
  };
  setInterval(mount, 400); mount();
})();
