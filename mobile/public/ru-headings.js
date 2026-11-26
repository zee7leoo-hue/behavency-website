// Russian only (26 Nov): a big heading longer than 4 lines first drops the line breaks written for English, then gets
// smaller step by step (to 70% at most) until it fits in 4 lines. Re-measured when the window width changes.
(function () {
  const HERO = '.hr-h, .hc-title', MAXROWS = 4;
  const done = new Set();
  const rows = (h) => { const cs = getComputedStyle(h); const lh = parseFloat(cs.lineHeight) || parseFloat(cs.fontSize) * 1.2; return Math.round(h.getBoundingClientRect().height / lh); };
  const set = (h, fs, lh) => { h.style.setProperty('font-size', fs.toFixed(2) + 'px', 'important'); if (lh) h.style.setProperty('line-height', lh.toFixed(2) + 'px', 'important'); };
  const shrink = (h) => {
    if (done.has(h) || !h.offsetParent) return;
    if (h.matches('.hc-title')) return; // desktop top headline: its own fixed lines, sized in ru-fixes.css
    const cs = getComputedStyle(h), fs = parseFloat(cs.fontSize), lh = parseFloat(cs.lineHeight);
    if (!fs || fs < 22) return; // only the big headings
    let k = 1;
    if (rows(h) > MAXROWS) { h.querySelectorAll('br:not([data-ka-br])').forEach((b) => { b.dataset.kaBr = '1'; b.before(' '); b.style.display = 'none'; }); }
    while (rows(h) > MAXROWS && k > 0.7) { k -= 0.03; set(h, fs * k, lh ? lh * k : 0); }
    done.add(h);
  };
  // Build formats picture
  const SHORT = { elearning: 'ელ. სწავლება', live: 'ონლაინ', inperson: 'პირისპირ', blended: 'შერეული' };
  const formats = () => {
    // English line breaks become spaces (a space is added in front and the break is hidden; the page's own nodes stay)
    document.querySelectorAll('.dv3-copy br:not([data-ka-br])').forEach((b) => { b.dataset.kaBr = '1'; b.before(' '); b.style.display = 'none'; });
    document.querySelectorAll('.dv3-card').forEach((c) => {
      const ico = c.querySelector('[class*="dv3-card-ico--"]'), lab = c.querySelector('.dv3-card-label');
      if (!ico || !lab || lab.dataset.ka) return;
      const k = (ico.className.match(/dv3-card-ico--(\w+)/) || [])[1];
      if (SHORT[k]) { lab.textContent = SHORT[k]; lab.dataset.ka = '1'; }
    });
    document.querySelectorAll('.dv3-canvas svg text[textLength]').forEach((t) => {
      const w = parseFloat(t.getAttribute('textLength')); if (!w) return;
      t.removeAttribute('textLength'); t.removeAttribute('lengthAdjust');
      const natural = t.getComputedTextLength();
      if (natural > w) { const fs = parseFloat(getComputedStyle(t).fontSize); t.style.fontSize = (fs * w / natural).toFixed(2) + 'px'; }
    });
  };
  // 26 Nov (owner): serif headings one step lighter in Russian (800 -> 700, 700 -> 600, 600 -> 500); body text untouched.
  // A child that only inherits its heading's weight is left alone, so nothing gets lighter twice.
  const SEL = 'h1, h2, h3, h4, h1 *, h2 *, h3 *, h4 *, [class*=title], [class*=headline], [class*=heading], [class*=-h2], [class*=-h]';
  const lighter = () => {
    const todo = [];
    document.querySelectorAll(SEL).forEach((e) => {
      if (e.dataset.ruW) return;
      const cs = getComputedStyle(e);
      if (!/Source Serif|Playfair/.test(cs.fontFamily) || parseFloat(cs.fontSize) < 17) return;
      todo.push([e, parseInt(cs.fontWeight, 10)]);
    });
    todo.forEach(([e, w]) => {
      const up = e.parentElement && e.parentElement.closest('[data-ru-w]');
      e.dataset.ruW = String(w);
      if (up && parseInt(up.dataset.ruW, 10) >= 600 && w === parseInt(up.dataset.ruW, 10) - 100) return; // inherited from an already lighter heading
      if (todo.some(([p, pw]) => p !== e && p.contains(e) && pw === w)) return; // inherits from a heading changed in this same pass
      if (w >= 600) e.style.setProperty('font-weight', String(w - 100), 'important');
    });
  };
  const run = () => { document.querySelectorAll('h1, h2').forEach(shrink); }; // 26 Nov: lighter() no longer needed, the English headings are now weight 600 (style C)
  setInterval(run, 600); run();
  let t = 0, w = innerWidth;
  addEventListener('resize', () => {
    if (innerWidth === w) return; w = innerWidth;
    clearTimeout(t);
    t = setTimeout(() => {
      done.forEach((h) => { h.style.removeProperty('font-size'); h.style.removeProperty('line-height'); h.querySelectorAll('br[data-ka-br]').forEach((b) => { b.style.display = ''; }); });
      done.clear(); run();
    }, 200);
  });
})();
