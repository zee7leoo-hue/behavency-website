// Interview Studio "try it" (26 Nov, approved mock-up round 8). Puts four clickable characters and a cue into the
// Interview Studio block; a click opens studio-practice.html in a full-screen frame over the site. Built by make-studio-site.cjs.
(function () {
  const SITE = 'desk', EXT = 'png';
  const CH = [
    ['anna', 'Anna', 'Gives clear examples', 'Easy', '#ecfdf5', '#d1fae5', '#047857', '#6ee7b7'],
    ['mark', 'Mark', 'Speaks in generalities', 'Medium', '#eff6ff', '#dbeafe', '#1d4ed8', '#93c5fd'],
    ['sofia', 'Sofia', 'Only success stories', 'Hard', '#fff7ed', '#ffedd5', '#c2410c', '#fdba74'],
    ['peter', 'Peter', 'Long-winded, drifts off', 'Challenging', '#fdf2f8', '#ffe4e6', '#be123c', '#fda4af'],
  ];
  const ARR_R = '<svg class="sxt-i" viewBox="0 0 24 24"><path d="M5 12h14M13 6l6 6-6 6"/></svg>';
  const ARR_D = '<svg class="sxt-i" viewBox="0 0 24 24"><path d="M12 5v14M6 13l6 6 6-6"/></svg>';
  const HAND = '<svg class="sxt-i" viewBox="0 0 24 24"><path d="M14 4.1 12 6"/><path d="m5.1 8-2.9-.8"/><path d="m6 12-1.9 2"/><path d="M7.2 2.2 8 5.1"/><path d="M9.04 12.26a.5.5 0 0 1 .66-.66l11.4 4.75a.5.5 0 0 1-.05.94l-4.37 1.19a1 1 0 0 0-.7.7l-1.19 4.37a.5.5 0 0 1-.94.05z"/></svg>';
  const CSS = `
  .sxt-i { width: 1em; height: 1em; fill: none; stroke: currentColor; stroke-width: 2; stroke-linecap: round; stroke-linejoin: round; flex: none; }
  .sxt-grid { display: grid; grid-template-columns: 1fr 1fr; gap: 16px; }
  .sxt-ch { position: relative; display: flex; flex-direction: column; text-align: center; border-radius: 22px; padding: 22px 16px 16px; background: linear-gradient(180deg, var(--t), #fff 70%); box-shadow: 0 0 0 1px rgba(20,35,75,.06), 0 22px 46px -30px rgba(30,25,80,.28); cursor: pointer; transition: transform .2s ease, box-shadow .2s ease; font-family: Inter, Arial, sans-serif; color: #0f1b3d; }
  .sxt-ch:hover { transform: translateY(-4px); box-shadow: 0 0 0 1.5px var(--bd), 0 30px 50px -26px rgba(30,25,80,.4); }
  .sxt-ch:focus-visible { outline: 3px solid #93c5fd; outline-offset: 3px; }
  .sxt-ch img { flex: none; width: 124px; height: 124px; border-radius: 50%; object-fit: cover; display: block; margin: 6px auto 0; }
  .sxt-ch b { display: block; font: 600 19px/1.2 "Source Serif 4", Georgia, serif; margin-top: 10px; }
  .sxt-ch .sxt-tr { display: block; font: 400 14.5px/1.35 Inter, sans-serif; color: #5a6278; margin-top: 4px; }
  .sxt-ch em { position: absolute; top: 12px; right: 12px; font: 700 11.5px/1 Inter, sans-serif; font-style: normal; padding: 5px 9px; border-radius: 999px; background: var(--cb); color: var(--cf); }
  .sxt-ch .sxt-sp { height: 10px; }
  .sxt-ch .sxt-go { margin-top: auto; display: flex; align-items: center; justify-content: center; gap: 6px; border-radius: 10px; border: 1.5px solid var(--bd); background: #fff; color: var(--cf); padding: 9px 0; font: 700 14px/1 Inter, sans-serif; transition: background .15s; }
  .sxt-ch:hover .sxt-go { background: var(--t); }
  .sxt-ch.sxt-wave { animation: sxt-wave .9s ease-out; }
  @keyframes sxt-wave { 0% { box-shadow: 0 0 0 0 rgba(47,111,219,.5); } 100% { box-shadow: 0 0 0 16px rgba(47,111,219,0); } }
  .sxt-cue { margin-top: 26px; display: inline-flex; align-items: center; gap: 12px; border: 0; border-radius: 16px; padding: 13px 16px 13px 14px; background: #fff; color: #0f1b3d; font: 600 15.5px/1.3 Inter, sans-serif; text-align: left; cursor: pointer; box-shadow: 0 0 0 1.5px rgba(47,111,219,.35), 0 16px 32px -20px rgba(47,111,219,.6); }
  .sxt-cue:hover { box-shadow: 0 0 0 1.5px #2f6fdb, 0 16px 32px -18px rgba(47,111,219,.7); }
  .sxt-cue .sxt-hand { flex: none; width: 34px; height: 34px; border-radius: 10px; background: #eaf1fd; color: #2f6fdb; display: grid; place-items: center; font-size: 18px; }
  .sxt-cue .sxt-arr { flex: none; width: 30px; height: 30px; border-radius: 50%; background: #2f6fdb; color: #fff; display: grid; place-items: center; font-size: 15px; animation: sxt-nudge 1.8s ease-in-out infinite; }
  @keyframes sxt-nudge { 0%, 100% { transform: translateX(0); } 50% { transform: translateX(5px); } }
  .sxt-frame { position: fixed; inset: 0; z-index: 2147482000; width: 100%; height: 100%; border: 0; background: transparent; color-scheme: light; }
  html.sxt-lock, html.sxt-lock body { overflow: hidden; }
  /* phone */
  #interview-studio .isx-cast-h, #isx-cast, #isx-dots { display: none !important; }
  .sxt-mob { margin: 30px 16px 8px; gap: 12px; }
  .sxt-mob .sxt-ch { padding: 18px 10px 12px; border-radius: 20px; }
  .sxt-mob .sxt-ch img { width: 78px; height: 78px; }
  .sxt-mob .sxt-ch b { font-size: 18px; margin-top: 8px; }
  .sxt-mob .sxt-ch .sxt-tr { font-size: 13.5px; }
  .sxt-mob .sxt-ch em { top: 9px; right: 9px; font-size: 10.5px; padding: 4px 7px; }
  .sxt-mob .sxt-ch .sxt-go { font-size: 13.5px; }
  .sxt-cue.sxt-m { margin-top: 22px; }
  .sxt-cue.sxt-m .sxt-arr { animation-name: sxt-nudge-d; }
  @keyframes sxt-nudge-d { 0%, 100% { transform: translateY(0); } 50% { transform: translateY(4px); } }
  @media (prefers-reduced-motion: reduce) { .sxt-cue .sxt-arr, .sxt-ch.sxt-wave { animation: none; } .sxt-ch { transition: none; } }`;

  const cardsHTML = () => CH.map(([f, n, d, l, t, cb, cf, bd]) =>
    '<div class="sxt-ch" data-k="' + f + '" role="button" tabindex="0" aria-label="Practise with ' + n + ', ' + l + '" style="--t:' + t + ';--cb:' + cb + ';--cf:' + cf + ';--bd:' + bd + '">' +
    '<em>' + l + '</em><img src="team/' + f + '.' + EXT + '" alt="" width="124" height="124" loading="lazy"><b>' + n + '</b><span class="sxt-tr">' + d + '</span><span class="sxt-sp"></span>' +
    '<span class="sxt-go">Start practice ' + ARR_R + '</span></div>').join('');
  const cueHTML = (m) => '<button type="button" class="sxt-cue' + (m ? ' sxt-m' : '') + '"><span class="sxt-hand">' + HAND + '</span><span>' + (m ? 'Tap any character to see how it works' : 'Click on any character to see how it works') + '</span><span class="sxt-arr">' + (m ? ARR_D : ARR_R) + '</span></button>';

  let frame = null, opener = null, pushed = false;
  const open = (k, from) => {
    if (frame) return;
    opener = from;
    frame = document.createElement('iframe'); frame.className = 'sxt-frame'; frame.title = 'Interview Studio practice';
    frame.src = 'studio-practice.html?c=' + k;
    frame.addEventListener('load', () => { try { frame.contentWindow.focus(); } catch (e) {} });
    document.body.appendChild(frame); document.documentElement.classList.add('sxt-lock');
    history.pushState({ sxt: 1 }, ''); pushed = true;
  };
  const close = (fromBack) => {
    if (!frame) return;
    frame.remove(); frame = null; document.documentElement.classList.remove('sxt-lock');
    if (pushed) { pushed = false; if (!fromBack && history.state && history.state.sxt) history.back(); }
    if (opener) opener.focus({ preventScroll: true });
  };
  addEventListener('message', (e) => {
    if (!frame || e.source !== frame.contentWindow || !e.data) return;
    if (e.data.sxt === 'close') close();
    if (e.data.sxt === 'demo') { close(); setTimeout(() => { if (window.bhvOpenContact) window.bhvOpenContact(); }, 350); }
  });
  addEventListener('popstate', () => { if (frame) close(true); });

  const wire = (grid) => {
    const cards = [...grid.querySelectorAll('.sxt-ch')];
    cards.forEach((c) => {
      c.addEventListener('click', () => open(c.dataset.k, c));
      c.addEventListener('keydown', (e) => { if (e.key === 'Enter' || e.key === ' ') { e.preventDefault(); open(c.dataset.k, c); } });
    });
    return () => cards.forEach((c, i) => { c.classList.remove('sxt-wave'); setTimeout(() => { void c.offsetWidth; c.classList.add('sxt-wave'); }, 150 + i * 160); });
  };

  const mount = () => {
    const block = document.getElementById('interview-studio'); if (!block) return false;
    if (block.querySelector('.sxt-grid')) return true;
    if (!document.getElementById('studio-try')) { const st = document.createElement('style'); st.id = 'studio-try'; st.textContent = CSS; document.head.appendChild(st); }
    let grid, cueAfter, m = SITE === 'mob';
    if (m) {
      const head = block.querySelector('.isx-cast-h'), lead = block.querySelector('.isx-lead'); if (!head || !lead) return false;
      grid = document.createElement('div'); grid.className = 'sxt-grid sxt-mob'; head.before(grid); cueAfter = lead;
    } else {
      const old = block.querySelector('.chars'), list = block.querySelector('ul'); if (!old || !list) return false;
      grid = document.createElement('div'); grid.className = 'sxt-grid'; old.replaceWith(grid); cueAfter = list;
    }
    grid.innerHTML = cardsHTML();
    const wave = wire(grid);
    const t = document.createElement('div'); t.innerHTML = cueHTML(m); const cue = t.firstElementChild; cueAfter.after(cue);
    cue.addEventListener('click', () => { if (m) grid.scrollIntoView({ behavior: 'smooth', block: 'center' }); wave(); });
    return true;
  };
  const w = setInterval(() => { if (mount()) clearInterval(w); }, 300);
  setTimeout(() => clearInterval(w), 30000);
  // the site may rebuild its block later: put the cards back if they disappear
  setInterval(() => { const b = document.getElementById('interview-studio'); if (b && !b.querySelector('.sxt-grid')) mount(); }, 1500);
})();
