// Cookie banner for both sites (23 Nov). Google Analytics may only run after the visitor accepts.
// For the developer: load the Google Analytics tag as usual. This file sets Google's consent mode to "denied" first
// and switches analytics_storage to "granted" only after "Accept all". The choice is kept in localStorage ("bhv-consent").
// "Cookie settings" in the footer reopens the banner (window.bhvCookieSettings).
(function () {
  window.dataLayer = window.dataLayer || [];
  window.gtag = window.gtag || function () { window.dataLayer.push(arguments); };
  const KEY = 'bhv-consent';
  const read = () => { try { return localStorage.getItem(KEY); } catch (e) { return null; } };
  const save = (v) => { try { localStorage.setItem(KEY, v); } catch (e) {} };
  const choice0 = read();
  window.gtag('consent', 'default', { analytics_storage: choice0 === 'all' ? 'granted' : 'denied', ad_storage: 'denied', ad_user_data: 'denied', ad_personalization: 'denied' });

  // Google Analytics 4 (25 Nov): loaded only after "Accept all", and only on behavency.com (not on preview links).
  const GA_ID = 'G-TR5G2JJ0YP';
  let gaOn = false;
  const loadGA = () => {
    if (gaOn || !/(^|.)behavency.com$/i.test(location.hostname)) return;
    gaOn = true;
    const sc = document.createElement('script'); sc.async = true; sc.src = 'https://www.googletagmanager.com/gtag/js?id=' + GA_ID; document.head.appendChild(sc);
    window.gtag('js', new Date()); window.gtag('config', GA_ID, { anonymize_ip: true });
  };
  if (choice0 === 'all') loadGA();
  const CSS = `
  .ck { position: fixed; z-index: 9995; left: 24px; bottom: 24px; width: min(460px, calc(100vw - 32px)); background: #fff; color: #15173d; border-radius: 18px; padding: 20px 22px 18px;
    box-shadow: 0 24px 60px -20px rgba(15,20,60,.4), 0 0 0 1px rgba(20,35,75,.08); font-family: Inter, Arial, sans-serif; text-align: left;
    transform: translateY(20px); opacity: 0; visibility: hidden; transition: opacity .3s, transform .35s cubic-bezier(.22,1,.36,1), visibility 0s .35s; }
  .ck.on { transform: none; opacity: 1; visibility: visible; transition: opacity .3s, transform .35s cubic-bezier(.22,1,.36,1); }
  .ck b { display: block; font: 600 16px/1.3 Inter, sans-serif; }
  .ck p { margin: 6px 0 0; font: 400 14px/1.5 Inter, sans-serif; color: #4a5170; }
  .ck p a { color: #1f2f5c; font-weight: 600; text-decoration: underline; cursor: pointer; }
  .ck-btns { display: flex; gap: 10px; margin-top: 16px; flex-wrap: wrap; }
  .ck-btns button { flex: 1 1 140px; border-radius: 10px; padding: 12px 14px; font: 600 14.5px/1 Inter, sans-serif; cursor: pointer; }
  .ck-all { border: 0; background: #1f2f5c; color: #fff; }
  .ck-nec { border: 1.5px solid #1f2f5c; background: #fff; color: #1f2f5c; }
  .ck-btns button:focus-visible { outline: 3px solid #5a50c8; outline-offset: 2px; }
  @media (max-width: 560px) { .ck { left: 16px; right: 16px; bottom: 16px; width: auto; padding: 18px 18px 16px; } }
  @media (prefers-reduced-motion: reduce) { .ck { transition: none; } }`;
  const HTML = `<div class="ck" role="dialog" aria-live="polite" aria-label="Cookie choice">
    <b>Cookies on this site</b>
    <p>We use necessary cookies to make the site work. With your permission we also use Google Analytics to see how the site is used and improve it. <a data-ck-privacy>Privacy Policy</a></p>
    <div class="ck-btns"><button type="button" class="ck-all">Accept all</button><button type="button" class="ck-nec">Only necessary</button></div>
  </div>`;
  let el = null;
  const show = () => { if (el) { el.classList.add('on'); } };
  const hide = () => { if (el) el.classList.remove('on'); };
  const decide = (v) => {
    save(v);
    window.gtag('consent', 'update', { analytics_storage: v === 'all' ? 'granted' : 'denied' }); if (v === 'all') loadGA();
    hide();
  };
  window.bhvCookieSettings = () => show();
  const mount = () => {
    if (!document.body) return setTimeout(mount, 100);
    const st = document.createElement('style'); st.id = 'cookie-banner'; st.textContent = CSS; document.head.appendChild(st);
    const t = document.createElement('div'); t.innerHTML = HTML; el = t.firstElementChild; document.body.appendChild(el);
    el.querySelector('.ck-all').addEventListener('click', () => decide('all'));
    el.querySelector('.ck-nec').addEventListener('click', () => decide('necessary'));
    el.querySelector('[data-ck-privacy]').addEventListener('click', (e) => { e.preventDefault(); const p = document.querySelector('footer [data-bf="privacy"]'); if (p) p.click(); });
    document.addEventListener('click', (e) => { const s = e.target.closest('[data-ck-settings]'); if (s) { e.preventDefault(); show(); } });
    if (!choice0) setTimeout(show, 1200);
  };
  mount();
})();
