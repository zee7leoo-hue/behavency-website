// Engage: one opening instead of two. Keeps "They've seen the score…", its two pictures and the punchline,
// folds the facts from "Real team dynamics…" into one paragraph plus a 45 / 90 min row, then "How it works" and the cards.
(function () {
  const CSS = `
  .egm-stats { display: flex; justify-content: center; align-items: center; gap: 22px; margin: 34px 0 0; }
  .egm-stat { display: flex; align-items: center; gap: 12px; }
  .egm-stat svg { flex: none; width: 34px; height: 34px; fill: none; stroke: #6a2fe0; stroke-width: 1.8; stroke-linecap: round; stroke-linejoin: round; }
  .egm-stat b { display: block; font: 800 22px/1.05 "Plus Jakarta Sans", Inter, sans-serif; letter-spacing: -.03em; color: #150f52; }
  .egm-stat span { display: block; margin-top: 3px; font: 500 13px/1.2 "Plus Jakarta Sans", Inter, sans-serif; color: #150f52; }
  .egm-div { width: 1px; height: 34px; background: #d9d3ee; }
  .egm-how { margin-top: 30px !important; }
  .egx-head { display: none !important; }
  #engage .eg-swoosh { display: none !important; }
  .egx { padding-top: 0 !important; }
  .egx .egx-slot:nth-child(2) { margin-top: 0 !important; }
  /* punchline: words start pale and fill in, like the stage cards; second line in purple italic with a swoosh */
  .egm-punch { position: relative; }
  .egm-punch .w { color: #d3cfe0; transition: color .8s ease; }
  .egm-punch .l2 { display: inline-block; position: relative; font-family: "Source Serif 4", Georgia, serif !important; font-style: italic; font-weight: 500; font-size: 1.22em; letter-spacing: -.01em; }
  .egm-punch.on .l1 .w { color: #1c2540; }
  .egm-punch.on .l2 .w { color: #6a2fe0; }
  .egm-punch .sw { position: absolute; left: 0; right: 0; bottom: -7px; width: 100%; height: 8px; overflow: visible; }
  .egm-punch .sw path { fill: none; stroke: #6a2fe0; stroke-width: 2.2; stroke-linecap: round; stroke-dasharray: 260; stroke-dashoffset: 260; transition: stroke-dashoffset .7s cubic-bezier(.22,1,.36,1); }
  .egm-punch.done .sw path { stroke-dashoffset: 0; }
  @media (prefers-reduced-motion: reduce) { .egm-punch .w { transition: none; } .egm-punch .sw path { transition: none; } }
  `;
  const STATS = `<div class="egm-stats">
    <div class="egm-stat"><svg viewBox="0 0 24 24" aria-hidden="true"><path d="M6 12h4M8 10v4M15 13h.01M18 11h.01"/><path d="M17.3 5H6.7a4 4 0 0 0-3.97 3.6C2.6 9.4 2 14.5 2 16a3 3 0 0 0 3 3c1 0 1.5-.5 2-1l1.4-1.4a2 2 0 0 1 1.4-.6h4.4a2 2 0 0 1 1.4.6L17 18c.5.5 1 1 2 1a3 3 0 0 0 3-3c0-1.5-.6-6.6-.7-7.3A4 4 0 0 0 17.3 5z"/></svg><div><b>45 min</b><span>Team Game</span></div></div>
    <i class="egm-div" aria-hidden="true"></i>
    <div class="egm-stat"><svg viewBox="0 0 24 24" aria-hidden="true"><circle cx="12" cy="8" r="3.6"/><path d="M5.5 20.5v-1.2a4.6 4.6 0 0 1 4.6-4.6h3.8a4.6 4.6 0 0 1 4.6 4.6v1.2"/><path d="M4.4 11.2a2.6 2.6 0 1 1 2.2-4.1M19.6 11.2a2.6 2.6 0 1 0-2.2-4.1M1.5 18.5v-.6a3.4 3.4 0 0 1 3.4-3.4M22.5 18.5v-.6a3.4 3.4 0 0 0-3.4-3.4"/></svg><div><b>90 min</b><span>Post-Reflection</span></div></div>
  </div><div class="egm-how ueb ueb--c">How it works</div>`;
  function apply() {
    const eg = document.querySelector('#engage .eg-in'); if (!eg || eg.dataset.egm) return !!eg;
    const lead = eg.querySelector('.eg-lead');
    if (lead) lead.textContent = 'An interactive online team game, followed by a structured reflection. Participants work through the same behavioural areas they assessed, and see how they shape the way people work together.';
    const art = eg.querySelector('.eg-art');
    const t = document.createElement('div'); t.innerHTML = STATS;
    const after = art || eg.lastElementChild;
    [...t.children].reverse().forEach((n) => after.after(n));
    const subs = [...eg.querySelectorAll('.eg-sub')].filter((p) => !p.classList.contains('eg-lead'));
    const pun = subs[subs.length - 1];
    if (pun) {
      const wrap = (t) => t.split(' ').map((x) => '<span class="w">' + x + '</span>').join(' ');
      pun.classList.add('egm-punch');
      pun.innerHTML = '<span class="l1">' + wrap('A score can be read and forgotten.') + '</span><br><span class="l2">' + wrap('An experience stays.') + '</span>';
      const ws = [...pun.querySelectorAll('.w')];
      ws.forEach((w, i) => { w.style.transitionDelay = (i * 190 + (i > 6 ? 400 : 0)) + 'ms'; });
      const io = new IntersectionObserver((es) => { if (!es[0].isIntersecting) return; io.disconnect();
        pun.classList.add('on');  }, { threshold: 1, rootMargin: '0px 0px -35% 0px' });
      io.observe(pun);
    }
    eg.dataset.egm = '1';
    return true;
  }
  const st = document.createElement('style'); st.id = 'engage-merge'; st.textContent = CSS; document.head.appendChild(st);
  const w = setInterval(() => { if (apply()) clearInterval(w); }, 100);
})();
