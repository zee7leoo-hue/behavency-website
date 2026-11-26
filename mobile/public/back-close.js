// Phone: the Back gesture closes an open area pop-up (six areas) instead of leaving the site (25 Nov).
// When the pop-up opens we add one history step; Back removes it and closes the pop-up. Closing it with its own
// button takes that step away again, so the history stays clean.
(function () {
  let pushed = false;
  const sheet = () => document.getElementById('nbmSheet');
  const isOpen = () => { const s = sheet(); return !!(s && s.classList.contains('open')); };
  const watch = () => {
    const s = sheet(); if (!s) return setTimeout(watch, 400);
    new MutationObserver(() => {
      if (isOpen() && !pushed) { history.pushState({ bcSheet: 1 }, ''); pushed = true; }
      else if (!isOpen() && pushed) { pushed = false; if (history.state && history.state.bcSheet) history.back(); }
    }).observe(s, { attributes: true, attributeFilter: ['class'] });
  };
  addEventListener('popstate', () => {
    if (pushed && isOpen()) { pushed = false; const b = document.getElementById('nbmSheetBack'); if (b) b.click(); }
  });
  watch();
})();
