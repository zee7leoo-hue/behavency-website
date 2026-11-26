// Compact phone top section (approved 26 Nov from the "New mob landing" mock-up).
// The four-stage box under the hero, made compact: smaller outer padding and height, the four stages as one dark tab bar
// with icons, the card closer to the tabs, tighter card spacing, and the next card peeking in from the right so the
// carousel is visible. Everything else on the page is the current phone site. Loaded last by index.html.
(function () {
  const CSS = `
  /* the box */
  html body .hr-carousel .hr-panel { zoom: 1 !important; width: auto !important; margin: 26px 22px 0 !important; padding: 7px 0 10px !important; border-radius: 22px !important;
    background: radial-gradient(120% 80% at 0 0, #17a58f 0%, rgba(23,165,143,0) 55%), radial-gradient(90% 100% at 100% 100%, #4b2fb0 0%, rgba(75,47,176,0) 62%), linear-gradient(140deg, #13a690, #12426f 62%, #2a2276) !important;
    box-shadow: 0 18px 40px -22px rgba(20, 30, 90, .55); }
  /* the tabs: one dark bar, the active stage as a white pill */
  .hr-tabs { margin: 0 7px 8px !important; gap: 0 !important; padding: 3px; border-radius: 999px; background: rgba(6, 22, 56, .32); }
  .hr-tabs button { min-height: 0 !important; height: 30px; border: 0 !important; border-radius: 999px !important; padding: 0 !important; display: flex; align-items: center; justify-content: center; gap: 5px;
    font: 600 11px/1 Inter, Arial, sans-serif !important; color: #fff !important; background: none !important; position: relative; letter-spacing: -.005em; }
  .hr-tabs button + button::before { content: ""; position: absolute; left: 0; top: 8px; bottom: 8px; width: 1px; background: rgba(255,255,255,.22); }
  .hr-tabs button.on::before, .hr-tabs button.on + button::before { display: none; }
  .hr-tabs button.on { background: #fff !important; color: #0b1240 !important; box-shadow: 0 2px 6px rgba(0,0,0,.15); }
  .hr-tabs svg { width: 13px; height: 13px; flex: none; fill: none; stroke: currentColor; stroke-width: 2.1; stroke-linecap: round; stroke-linejoin: round; }
  .hr-tabs button.on svg { color: #2f6fdb; }
  /* the cards: the next one peeks in from the right */
  .hr-trk { padding: 0 12px 2px !important; scroll-padding: 0 12px !important; gap: 8px !important; }
  .hr-card { width: calc(100% - 13px) !important; border-radius: 14px !important; padding: 9px 11px 2px !important; box-shadow: 0 8px 20px rgba(10, 20, 60, .18) !important; }
  .hr-ch { gap: 9px !important; padding-bottom: 7px !important; }
  .hr-ci { width: 28px !important; height: 28px !important; border-radius: 8px !important; }
  .hr-ci svg { width: 15px !important; height: 15px !important; }
  .hr-ct b.lede { font-size: 13px !important; line-height: 1.25 !important; letter-spacing: -.01em; }
  .hr-badge { border-radius: 999px !important; padding: 4px 9px !important; font-size: 11px !important; line-height: 1 !important; white-space: nowrap; }
  .hr-badge b { display: inline !important; font-size: 11px !important; margin-right: 3px; }
  .hr-row { padding: 5px 0 !important; font-size: 11.5px !important; gap: 8px !important; }
  .hr-row.bar { grid-template-columns: 1fr 50px 38px !important; }
  .hr-track { height: 5px !important; }
  .hr-pct { font-size: 11px !important; padding: 3px 0 !important; }
  .hr-tag { font-size: 10.5px !important; padding: 3px 8px !important; }
  /* 26 Nov, round 2: the top section fills exactly the first screen (the logo strip starts just below it), the text under
     the heading a little smaller, more air before the button, and the four-step box sits at the bottom of the screen */
  .hr-phone { display: flex; flex-direction: column; padding-bottom: 58px !important; box-sizing: border-box; }
  .hr-hero { flex: none; margin-top: auto; padding-top: 24px !important; } /* the free space is shared: half above the heading, half above the box */
  .hr-s { font-size: 15px !important; line-height: 1.6 !important; }
  .hr-btn { margin-top: 30px !important; }
  html body .hr-carousel { flex: none; margin-top: auto !important; padding-top: 34px; }
  html body .hr-carousel .hr-panel { margin-top: 0 !important; }
  /* the dots */
  .hr-dots { margin-top: 8px !important; gap: 5px !important; }
  .hr-dots button { width: 6px !important; height: 6px !important; }
  .hr-dots button.on { width: 6px !important; }
  `;
  const ICONS = {
    Identify: '<svg viewBox="0 0 24 24"><circle cx="11" cy="11" r="7"/><path d="m20 20-3.5-3.5"/></svg>',
    Engage: '<svg viewBox="0 0 24 24"><circle cx="9" cy="8" r="3.5"/><path d="M2.5 20a6.5 6.5 0 0 1 13 0"/><path d="M16 4.5a3.5 3.5 0 0 1 0 7M18 14a6.5 6.5 0 0 1 3.5 6"/></svg>',
    Build: '<svg viewBox="0 0 24 24"><path d="m12 3 9 5-9 5-9-5z"/><path d="m3 13 9 5 9-5"/></svg>',
    Measure: '<svg viewBox="0 0 24 24"><path d="M5 20v-5M12 20V9M19 20V4"/></svg>',
  };
  const st = document.createElement('style'); st.id = 'mob-landing'; st.textContent = CSS; document.head.appendChild(st);
  const add = () => {
    const tabs = document.querySelectorAll('.hr-tabs button'); if (!tabs.length) return false;
    tabs.forEach((b) => { const k = b.textContent.trim(); if (ICONS[k] && !b.querySelector('svg')) b.insertAdjacentHTML('afterbegin', ICONS[k]); });
    return true;
  };
  const t = setInterval(() => { add(); }, 400);
  setTimeout(() => clearInterval(t), 15000);

  // the space above the top section (the fixed menu bar), so the section ends exactly at the bottom of the first screen
  // (the phone site scales the page on wider phones, so the height is converted back into page units)
  const top = () => { const p = document.querySelector('.hr-phone'); if (!p) return; const r = p.getBoundingClientRect(), k = r.height / p.offsetHeight || 1; p.style.minHeight = Math.round((innerHeight - (r.top + scrollY)) / k) + 'px'; };
  setTimeout(top, 800); setTimeout(top, 2500); addEventListener('resize', top);

  // the cards change by themselves every 5 seconds: the site already does this (it starts once at least half of the box is
  // on screen, and stops for good when the visitor touches it). With the box now fully on the first screen, it runs at once.
})();
