// Footer for both the desktop and the phone site (22 Nov). Hides the site's old footer and puts this one in its place.
// Remove this file and its <script> tag to go back to the old footer.
(function () {
  const mob = window.BHV_SITE === 'mob';
  const CSS = `
  .bft { background: linear-gradient(175deg, #0d1838 0%, #122452 55%, #0e1a3f 100%); color: rgba(255,255,255,.78); font-family: Inter, Arial, sans-serif; text-align: left; }
  .bft * { box-sizing: border-box; }
  .bft p, .bft ul { margin: 0; padding: 0; list-style: none; }
  .bft-in { max-width: 1120px; margin: 0 auto; padding: 64px 24px 28px; }
  .bft-top { display: grid; grid-template-columns: minmax(0, 1.4fr) repeat(3, minmax(0, 1fr)); gap: 40px; }
  .bft-brand { display: flex; align-items: center; gap: 10px; font: 600 24px/1 "Playfair Display", Georgia, serif; color: #fff; }
  .bft-logo { height: 30px; width: auto; display: block; filter: invert(1); }
  .bft-line { margin-top: 18px !important; font: 400 15px/1.55 Inter, sans-serif; max-width: 300px; }
  .bft-tag { margin-top: 10px !important; font: 600 13px/1.4 Inter, sans-serif; letter-spacing: .02em; color: rgba(255,255,255,.55); }
  .bft h4 { margin: 0 0 14px; font: 600 11.5px/1.2 Inter, sans-serif; letter-spacing: .16em; text-transform: uppercase; color: rgba(255,255,255,.5); }
  .bft ul { display: grid; gap: 10px; }
  .bft .bft-h2 { margin-top: 28px; }
  /* copies inside the pages that open over the site keep the same look */
  footer.bft.bft h4 { margin: 0 0 14px !important; font: 600 11.5px/1.2 Inter, sans-serif !important; letter-spacing: .16em !important; text-transform: uppercase !important; color: rgba(255,255,255,.5) !important; }
  footer.bft.bft .bft-h2 { margin-top: 28px !important; }
  .prc > footer.bft { margin-top: 28px; }
  .bft a { color: rgba(255,255,255,.86); text-decoration: none; font: 400 15px/1.4 Inter, sans-serif; cursor: pointer; }
  .bft a:hover { color: #fff; text-decoration: underline; }
  .bft-legal { display: inline-flex; gap: 22px; flex-wrap: wrap; }
  .bft-bottom { display: flex; flex-wrap: wrap; justify-content: space-between; gap: 10px 24px; margin-top: 48px; padding-top: 20px; border-top: 1px solid rgba(255,255,255,.12); font: 400 13px/1.5 Inter, sans-serif; color: rgba(255,255,255,.55); }
  .bft-bottom a { font-size: 13px; color: rgba(255,255,255,.7); }
  @media (max-width: 760px) {
    .bft-in { padding: 48px 24px 26px; }
    .bft-top { grid-template-columns: 1fr 1fr; gap: 32px 20px; }
    .bft-top > :first-child { grid-column: 1 / -1; }
    .bft-bottom { flex-direction: column; margin-top: 36px; }
  }`;
  const HTML = `<footer class="bft" data-bf="1">
    <div class="bft-in">
      <div class="bft-top">
        <div>
          <div class="bft-brand"><img class="bft-logo" src="logo-behavency.png" alt="">Behavency</div>
          <p class="bft-line">Behavency is a product of OGI Europe.</p>
          <p class="bft-tag">Identify. Engage. Build. Measure.</p>
        </div>
        <div><h4>The journey</h4><ul>
          <li><a data-bf-stage="0">Identify</a></li><li><a data-bf-stage="1">Engage</a></li><li><a data-bf-stage="2">Build</a></li><li><a data-bf-stage="3">Measure</a></li>
        </ul></div>
        <div><h4>What we offer</h4><ul>
          <li><a data-bf="programmes">Training programmes</a></li><li><a data-bf="hiring">Recruitment</a></li><li><a data-bf="packages">Packages</a></li>
        </ul></div>
        <div><h4>Company</h4><ul>
          <li><a data-bf="about">About us</a></li><li><a data-bf="contact">Contact</a></li>
        </ul>
        <h4 class="bft-h2">For clients</h4><ul>
          <li><a href="https://app.behavency.com/login">Log in</a></li>
        </ul></div>
      </div>
      <div class="bft-bottom">
        <span>© 2026 OGI Europe Kft. · Üllői út 101/4, 1091 Budapest, Hungary · info@behavency.com</span>
        <span class="bft-legal"><a href="#" data-bf="privacy">Privacy Policy</a><a href="#" data-ck-settings>Cookie settings</a></span>
      </div>
    </div>
  </footer>`;
  const scrollToEl = (el, off) => { if (el) scrollTo({ top: el.getBoundingClientRect().top + scrollY - off, behavior: 'smooth' }); };
  // Pages that open over the site (About, Recruitment, the programme list). They get a copy of the footer at the end (23 Nov),
  // and a footer link that goes to the main page closes them first.
  const OVERLAYS = '.abp, .rcp, .pab, .prc, .bc, .tm.tm-page';
  const openOverlay = () => document.querySelector('.abp.open, .rcp.open, .pab.open, .prc.open, .bc, .tm.tm-page');
  const forceClose = () => {
    if (window.bhvCloseAbout) window.bhvCloseAbout();
    if (window.bhvCloseRecruit) window.bhvCloseRecruit();
    document.querySelectorAll('.bc, .bc-dim, .bc-panel, .tm.tm-page, .tm-dim, .tm-sheet').forEach((n) => n.remove());
    document.documentElement.classList.remove('tm-lock'); document.documentElement.style.overflow = '';
    const h = location.hash.replace(/(about|recruitment)&?/g, '');
    if (h !== location.hash) history.replaceState(null, '', location.pathname + location.search + (h === '#' ? '' : h));
  };
  // closes the open page(s) the same way the Back button does, then runs `then`
  const leave = (then, depth = 0) => {
    if (!openOverlay() || depth > 4) { if (openOverlay()) forceClose(); return then(); }
    const s = history.state || {};
    if (!(s.about || s.rcp || s.bc || s.tm)) { forceClose(); return then(); }
    let done = false;
    const next = () => { if (done) return; done = true; removeEventListener('popstate', next); setTimeout(() => leave(then, depth + 1), 80); };
    addEventListener('popstate', next); history.back(); setTimeout(next, 800);
  };
  const go = (k, st) => {
    if (st !== undefined) {
      if (mob) return scrollToEl(document.querySelectorAll('.bpc')[+st], 70);
      const b = document.querySelector(`.sm-nav [data-stage="${st}"]`); return b ? b.click() : scrollToEl(document.querySelectorAll('.bx-ch')[+st], 70);
    }
    if (k === 'about') { const b = document.querySelector(mob ? '.pab-about' : '.sm-nav [data-k="about"]'); if (b) b.click(); return; }
    if (k === 'privacy') return window.bhvOpenPrivacy && window.bhvOpenPrivacy();
    if (k === 'hiring' && window.bhvOpenRecruit) return window.bhvOpenRecruit();
    if (k === 'contact' && window.bhvOpenContact) return window.bhvOpenContact();
    const sel = { programmes: mob ? '.tm' : '.bq-c, .bq', hiring: '#hiring', packages: '#packages', contact: '#contact' }[k];
    scrollToEl(document.querySelector(sel), 70);
  };
  const onClick = (e) => {
    const a = e.target.closest('a'); if (!a || a.getAttribute('href') && !a.dataset.bf && a.dataset.bfStage === undefined) return;
    e.preventDefault();
    const k = a.dataset.bf, st = a.dataset.bfStage;
    const host = a.closest(OVERLAYS);
    if (k === 'contact' && window.bhvOpenContact) return window.bhvOpenContact();
    if (host && ((k === 'about' && host.matches('.abp, .pab')) || (k === 'hiring' && host.matches('.rcp, .prc')))) return host.scrollTo({ top: 0, behavior: 'smooth' });
    leave(() => go(k, st));
  };
  // one listener for every copy of the footer (the main one and the ones inside the pages above)
  document.addEventListener('click', (e) => { if (e.target.closest && e.target.closest('footer.bft')) onClick(e); });
  let footBg = '';
  const makeFooter = () => { const t = document.createElement('div'); t.innerHTML = HTML; const f = t.firstElementChild; if (footBg) f.style.cssText = footBg; return f; };
  function addCopies() {
    document.querySelectorAll(OVERLAYS).forEach((host) => {
      if (host.classList.contains('tm-det-page')) return;
      const last = host.lastElementChild;
      if (last && last.matches('footer[data-bf="copy"]')) return;
      host.querySelectorAll('footer[data-bf="copy"]').forEach((f) => f.remove());
      const f = makeFooter(); f.dataset.bf = 'copy'; host.appendChild(f);
    });
  }
  window.bhvFooterCopy = () => { const f = makeFooter(); f.dataset.bf = 'copy'; return f; };
  // The site's old footer is no longer in the page (23 Nov): ours goes after the closing "Ready to start?" line,
  // in navy on both sites (the copies inside the pages that open over the site follow).
  function mount() {
    const old = document.querySelector('footer:not([data-bf])'); if (old) old.style.setProperty('display', 'none', 'important');
    const anchor = document.querySelector('section#contact[data-cm]') || document.querySelector('#root section#packages'); if (!anchor) return false;
    let ours = document.querySelector('footer[data-bf="1"]');
    if (!ours || ours.previousElementSibling !== anchor) { if (ours) ours.remove(); ours = makeFooter(); anchor.after(ours); }
    return true;
  }
  const st = document.createElement('style'); st.id = 'footer-site'; st.textContent = CSS; document.head.appendChild(st);
  let n = 0; const w = setInterval(() => { mount(); addCopies(); if (++n > 80) clearInterval(w); }, 250);
  // pages added later (the programme list is made each time it opens)
  const watch = () => { if (!document.body) return setTimeout(watch, 100); new MutationObserver(() => addCopies()).observe(document.body, { childList: true }); };
  watch();
})();
