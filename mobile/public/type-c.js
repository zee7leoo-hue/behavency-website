/* 26 Nov: heading style "C" helper for the phone site.
   1) Keeps type-c.css the very last stylesheet on the page (other scripts add their styles while the page loads).
   2) Section titles may take at most 4 lines: a longer one gets a slightly smaller font, 1px at a time,
      never below 34px, with the line height shrinking in proportion (40px text on 41px lines). */
(function () {
  var SEL = '.wn-title,.pf-title,.id-title,#interview-studio h2,.nbm-title,.rs-title,.hb-title,.eg-title,.bd-title,.jn-title,.tm-h,.ms-title,.hm-title,.pz-ttl,.pk-title,.cm-end h2';
  var MAX_LINES = 4, BASE = 40, MIN = 34;
  function keepLast() {
    var l = document.getElementById('type-c-css');
    if (l && l !== document.body.lastElementChild && l.nextElementSibling) {
      var later = l.nextElementSibling; var needMove = false;
      while (later) { if (later.tagName === 'STYLE' || (later.tagName === 'LINK' && later.rel === 'stylesheet')) { needMove = true; break; } later = later.nextElementSibling; }
      if (needMove) document.body.appendChild(l);
    }
  }
  // number of text lines: count the distinct line positions of the words (padding or decorations don't count)
  function lines(h) {
    var r = document.createRange(); r.selectNodeContents(h);
    var rects = r.getClientRects(), tops = [];
    var tol = parseFloat(getComputedStyle(h).fontSize) * 0.5;
    for (var i = 0; i < rects.length; i++) {
      if (!rects[i].width) continue;
      var mid = (rects[i].top + rects[i].bottom) / 2, seen = false;
      for (var j = 0; j < tops.length; j++) if (Math.abs(tops[j] - mid) < tol) { seen = true; break; }
      if (!seen) tops.push(mid);
    }
    return tops.length;
  }
  function fit() {
    keepLast();
    if (!/^en/i.test(document.documentElement.lang || 'en')) return; // Georgian and Russian have their own heading-fit script (ka-headings.js / ru-headings.js)
    var els = document.querySelectorAll(SEL);
    for (var i = 0; i < els.length; i++) {
      var h = els[i];
      if (!h.offsetWidth) continue; // hidden right now
      h.style.removeProperty('font-size'); h.style.removeProperty('line-height');
      var old = h.querySelectorAll('em,span');
      for (var o = 0; o < old.length; o++) old[o].style.removeProperty('line-height');
      var fs = BASE;
      while (fs > MIN) {
        if (lines(h) <= MAX_LINES) break;
        fs -= 1;
        h.style.setProperty('font-size', fs + 'px', 'important');
        h.style.setProperty('line-height', (fs * 41 / 40).toFixed(2) + 'px', 'important');
        var kids = h.querySelectorAll('em,span');
        for (var k = 0; k < kids.length; k++) kids[k].style.setProperty('line-height', (fs * 41 / 40).toFixed(2) + 'px', 'important');
      }
      // if even 34px can't bring it to 4 lines, shrinking only makes it smaller - keep the standard 40px
      if (fs < BASE && lines(h) > MAX_LINES) {
        h.style.removeProperty('font-size'); h.style.removeProperty('line-height');
        var back = h.querySelectorAll('em,span');
        for (var q = 0; q < back.length; q++) back[q].style.removeProperty('line-height');
      }
    }
  }
  var t = null;
  function soon() { clearTimeout(t); t = setTimeout(fit, 120); }
  window.addEventListener('load', function () { fit(); setTimeout(fit, 1200); setTimeout(fit, 3500); });
  if (document.fonts && document.fonts.ready) document.fonts.ready.then(soon);
  window.addEventListener('resize', soon);
  // sub-pages and pop-ups are built later: check again when something is added to the page
  new MutationObserver(function (m) { for (var i = 0; i < m.length; i++) if (m[i].addedNodes.length) { soon(); return; } }).observe(document.body, { childList: true });
  document.addEventListener('DOMContentLoaded', soon);
  soon();
})();
