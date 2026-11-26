// Footer for both the desktop and the phone site (22 Nov; light Option A look 24 Nov). Hides the site's old footer and puts this one in its place.
// Remove this file and its <script> tag to go back to the old footer.
(function () {
  const mob = window.BHV_SITE === 'mob';
  const CSS = `
  /* Option A (24 Nov): light footer, Inter only, small muted text; phone = 2x2 link grid */
  footer.bft.bft { background: #fff; border-top: 1px solid #e8e5f0; color: #3d4458; font-family: Inter, Arial, sans-serif; text-align: left; }
  footer.bft.bft * { box-sizing: border-box; }
  footer.bft.bft p, footer.bft.bft ul, footer.bft.bft li { margin: 0; padding: 0; list-style: none; }
  footer.bft.bft .bft-in { max-width: 1120px; margin: 0 auto; padding: 52px 40px 26px; }
  footer.bft.bft .bft-top { display: grid; grid-template-columns: minmax(0, 1.6fr) repeat(4, minmax(0, 1fr)); gap: 32px; }
  footer.bft.bft .bft-brand { display: flex; align-items: center; gap: 8px; font: 700 19px/1 "Playfair Display", Georgia, serif; letter-spacing: -.005em; color: #0f1b3d; }
  footer.bft.bft .bft-logo { height: 24px; width: auto; display: block; }
  footer.bft.bft .bft-line { margin-top: 14px; font: 400 14px/1.55 Inter, sans-serif; color: #6b7088; }
  footer.bft.bft .bft-tag { display: block; margin-top: 2px; font: 500 14px/1.55 Inter, sans-serif; color: #3d4458; letter-spacing: 0; }
  footer.bft.bft h4 { margin: 0 0 12px !important; padding: 0 !important; font: 600 13px/1.2 Inter, sans-serif !important; letter-spacing: 0 !important; text-transform: none !important; color: #0f1b3d !important; }
  footer.bft.bft li { margin: 0 0 9px; line-height: 22px; }
  footer.bft.bft a { color: #3d4458; text-decoration: none; font: 400 14px/1.4 Inter, sans-serif; cursor: pointer; }
  footer.bft.bft a:hover { color: #0f1b3d; text-decoration: underline; }
  footer.bft.bft .bft-bottom { display: flex; flex-wrap: wrap; justify-content: space-between; gap: 8px 24px; margin-top: 44px; padding-top: 18px; border-top: 1px solid #e8e5f0; font: 400 12.5px/1.6 Inter, sans-serif; color: #6b7088; }
  footer.bft.bft .bft-legal { display: inline-flex; gap: 18px; flex-wrap: wrap; }
  /* 25 Nov: Facebook + LinkedIn under the logo, bigger, so people see them */
  footer.bft.bft .bft-social { display: flex; gap: 10px; margin-top: 18px; }
  footer.bft.bft .bft-social a { display: inline-grid; place-items: center; width: 36px; height: 36px; border-radius: 50%; border: 1px solid #d9d5e6; color: #1e2a4a; background: #fff; }
  footer.bft.bft .bft-social a:hover { color: #fff; background: #1e2a4a; border-color: #1e2a4a; text-decoration: none; }
  footer.bft.bft .bft-bottom a { font-size: 12.5px; line-height: 1.6; color: #6b7088; }
  footer.bft.bft .bft-bottom a:hover { color: #0f1b3d; }
  .prc > footer.bft { margin-top: 28px; }
  @media (max-width: 760px) {
    footer.bft.bft .bft-in { padding: 36px 20px 22px; }
    footer.bft.bft .bft-top { grid-template-columns: 1fr 1fr; gap: 26px 16px; }
    footer.bft.bft .bft-top > :first-child { grid-column: 1 / -1; margin-bottom: 2px; }
    footer.bft.bft .bft-bottom { flex-direction: column; margin-top: 30px; padding-top: 16px; }
    footer.bft.bft .bft-copy > span { display: block; }
    footer.bft.bft .bft-copy > i { display: none; }
  }`;
  const HTML = `<footer class="bft" data-bf="1">
    <div class="bft-in">
      <div class="bft-top">
        <div>
          <div class="bft-brand"><img class="bft-logo" src="logo-behavency.png" alt="">Behavency</div>
          <p class="bft-line">Behavency is a product of OGI Europe.<span class="bft-tag">Identify. Engage. Build. Measure.</span></p>
          <div class="bft-social"><a href="https://www.linkedin.com/company/behavency/" target="_blank" rel="noopener" aria-label="Behavency on LinkedIn"><svg viewBox="0 0 24 24" width="16" height="16" aria-hidden="true"><path fill="currentColor" d="M4.98 3.5a2.5 2.5 0 1 1 0 5 2.5 2.5 0 0 1 0-5zM3 9.75h4V21H3zM9.5 9.75h3.8v1.6h.06c.53-1 1.84-2.06 3.79-2.06 4.05 0 4.8 2.6 4.8 6V21h-4v-5.1c0-1.22-.02-2.8-1.7-2.8-1.71 0-1.97 1.33-1.97 2.7V21h-4z"/></svg></a><a href="https://www.facebook.com/behavency" target="_blank" rel="noopener" aria-label="Behavency on Facebook"><svg viewBox="0 0 24 24" width="16" height="16" aria-hidden="true"><path fill="currentColor" d="M14 8.5V6.8c0-.8.5-1 1-1h1.9V2.6L14.3 2.6c-2.9 0-3.6 2.2-3.6 3.6v2.3H8.6V12h2.1v9.4H14V12h2.6l.4-3.5z"/></svg></a></div>
        </div>
        <div><h4>How it works</h4><ul>
          <li><a href="#identify" data-bf-stage="0">Identify</a></li><li><a href="#engage" data-bf-stage="1">Engage</a></li><li><a href="#build" data-bf-stage="2">Build</a></li><li><a href="#measure" data-bf-stage="3">Measure</a></li>
        </ul></div>
        <div><h4>What we offer</h4><ul>
          <li><a href="#programmes" data-bf="programmes">Training programmes</a></li><li><a href="#recruitment" data-bf="hiring">Recruitment</a></li><li><a href="#packages" data-bf="packages">Packages</a></li>
        </ul></div>
        <div><h4>Company</h4><ul>
          <li><a href="#about" data-bf="about">About us</a></li><li><a href="#contact" data-bf="contact">Contact</a></li>
        </ul></div>
        <div><h4>For clients</h4><ul>
          <li><a href="https://app.behavency.com/login">Log in</a></li>
        </ul></div>
      </div>
      <div class="bft-bottom">
        <span class="bft-copy"><span>© 2026 OGI Europe Kft.</span><i style="font-style:normal"> · </i><span>Üllői út 101/4, 1091 Budapest, Hungary</span><i style="font-style:normal"> · </i><span><a href="mailto:info@behavency.com">info@behavency.com</a></span></span>
        <span class="bft-legal"><a href="#privacy" data-bf="privacy">Privacy Policy</a><a href="#" data-ck-settings>Cookie settings</a></span>
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
    if (k === 'programmes' && window.bhvOpenProgrammes) return window.bhvOpenProgrammes(); // 25 Nov: the full list of programmes
    const sel = { programmes: mob ? '.tm' : '.bq-c, .bq', hiring: '#hiring', packages: '#packages', contact: '#contact' }[k];
    scrollToEl(document.querySelector(sel), 70);
  };
  const onClick = (e) => {
    const a = e.target.closest('a'); if (!a || a.getAttribute('href') && !a.dataset.bf && a.dataset.bfStage === undefined) return;
    e.preventDefault();
    const k = a.dataset.bf, st = a.dataset.bfStage;
    const host = a.closest(OVERLAYS);
    if (k === 'contact' && window.bhvOpenContact) return window.bhvOpenContact();
    if (host && ((k === 'about' && host.matches('.abp, .pab')) || (k === 'hiring' && host.matches('.rcp, .prc')) || (k === 'programmes' && host.matches('.bc, .tm.tm-page')))) return host.scrollTo({ top: 0, behavior: 'smooth' });
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
  window.bhvLeave = (then) => leave(then); // 25 Nov: the menu uses it to close open pages first
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
