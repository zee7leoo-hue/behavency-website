// Privacy Policy page for both sites (23 Nov). Opens over the site from "Privacy Policy" in the footer and in the cookie banner.
// Text = the Claude Docs draft (https://claude.ai/artifact/JFYcw28zwutwKHZGD3fzdS) without the draft note. Still to be checked by a lawyer.
(function () {
  const CSS = `
  .pvp { position: fixed; inset: 0; z-index: 9990; overflow-y: auto; -webkit-overflow-scrolling: touch; background: #fbfaff; color: #15173d; font-family: Inter, Arial, sans-serif;
    opacity: 0; visibility: hidden; transform: translateY(14px); transition: opacity .3s, transform .35s cubic-bezier(.22,1,.36,1), visibility 0s .35s; }
  .pvp.open { opacity: 1; visibility: visible; transform: none; transition: opacity .3s, transform .35s cubic-bezier(.22,1,.36,1); }
  html.pvp-lock, html.pvp-lock body { overflow: hidden !important; }
  .pvp * { box-sizing: border-box; }
  .pvp-bar { position: sticky; top: 0; z-index: 2; display: flex; align-items: center; height: 58px; padding: 0 max(14px, env(safe-area-inset-left, 0px)); background: rgba(251,250,255,.94); backdrop-filter: blur(8px); border-bottom: 1px solid #ebe8f3; }
  .pvp-back { display: inline-flex; align-items: center; gap: 8px; border: 0; background: none; padding: 8px; font: 600 14px/1 Inter, Arial, sans-serif; color: #3a4364; cursor: pointer; }
  .pvp-back svg { width: 18px; height: 18px; fill: none; stroke: currentColor; stroke-width: 2.2; stroke-linecap: round; stroke-linejoin: round; }
  .pvp-in { max-width: 760px; margin: 0 auto; padding: 56px max(22px, env(safe-area-inset-right, 0px)) 96px max(22px, env(safe-area-inset-left, 0px)); }
  .pvp-eb { display: flex; align-items: center; gap: 12px; font: 600 12.5px/1 Inter, sans-serif; letter-spacing: .16em; text-transform: uppercase; color: #6b7088; }
  .pvp-eb::before { content: ""; width: 26px; height: 1.5px; background: currentColor; opacity: .6; }
  .pvp h1 { margin: 16px 0 0; font: 400 clamp(32px, 5vw, 46px)/1.1 "Playfair Display", "Source Serif 4", Georgia, serif; letter-spacing: -.01em; }
  .pvp-date { margin: 12px 0 0; font: 400 14px/1.5 Inter, sans-serif; color: #6b7088; }
  .pvp h2 { margin: 44px 0 0; font: 600 22px/1.25 "Source Serif 4", Georgia, serif; letter-spacing: -.01em; }
  .pvp p, .pvp li { font: 400 15.5px/1.65 Inter, sans-serif; color: #3f4560; }
  .pvp p { margin: 12px 0 0; }
  .pvp ul { margin: 12px 0 0; padding-left: 20px; display: grid; gap: 6px; }
  .pvp b { color: #15173d; font-weight: 600; }
  .pvp-tw { margin-top: 16px; overflow-x: auto; border: 1px solid #e8e5f0; border-radius: 14px; background: #fff; }
  .pvp table { width: 100%; border-collapse: collapse; min-width: 520px; }
  .pvp th, .pvp td { text-align: left; vertical-align: top; padding: 12px 14px; font: 400 14.5px/1.5 Inter, sans-serif; color: #3f4560; border-top: 1px solid #efedf5; }
  .pvp th { font-weight: 600; color: #15173d; background: #f6f5fb; border-top: 0; font-size: 13.5px; }
  @media (max-width: 600px) { .pvp table { min-width: 0; } .pvp th, .pvp td { padding: 10px 9px; font-size: 13px; } .pvp th { font-size: 12.5px; } }
  .pvp-x { margin-top: 48px; padding-top: 18px; border-top: 1px solid #e8e5f0; font-size: 14px !important; color: #6b7088 !important; }
  `;
  const back = '<button type="button" class="pvp-back" data-close><svg viewBox="0 0 24 24" aria-hidden="true"><path d="M15 6l-6 6 6 6"/></svg>Back</button>';
  const HTML = `<div class="pvp" role="dialog" aria-label="Privacy Policy"><div class="pvp-bar">${back}</div><div class="pvp-in">
    <div class="pvp-eb">Legal</div>
    <h1>Privacy Policy</h1>
    <p class="pvp-date">Last updated: 23 November 2026</p>

    <h2>Who we are</h2>
    <p>Behavency is a product of OGI Europe Kft. OGI Europe Kft. decides how and why your personal data on this website is used, so it is the <b>data controller</b> under the EU General Data Protection Regulation (GDPR).</p>
    <ul><li><b>Company:</b> OGI Europe Kft.</li><li><b>Address:</b> Üllői út 101/4, 1091 Budapest, Hungary</li><li><b>E-mail for privacy questions:</b> info@behavency.com</li></ul>
    <p>This policy explains what we collect when you visit behavency.com or contact us, why, and what rights you have.</p>

    <h2>What we collect</h2>
    <div class="pvp-tw"><table>
      <tr><th>Where</th><th>What</th><th>Required?</th></tr>
      <tr><td>Request a demo / contact form</td><td>Name, work e-mail, organisation, your role, your message</td><td>Name, e-mail, organisation and role: yes. Message: no</td></tr>
      <tr><td>E-mail to info@behavency.com</td><td>Whatever you write to us, and your e-mail address</td><td>–</td></tr>
      <tr><td>Log in</td><td>The link takes you to our platform at app.behavency.com; the website itself collects nothing when you click it</td><td>–</td></tr>
      <tr><td>Every visit</td><td>Technical data your browser sends: IP address, browser and device type, pages visited, time of visit</td><td>Collected automatically by our hosting provider</td></tr>
    </table></div>
    <p>We do not ask for sensitive data (such as health or political views) on the website. Please do not include it in your message.</p>

    <h2>Why we use it, and on what legal basis</h2>
    <div class="pvp-tw"><table>
      <tr><th>Purpose</th><th>Data</th><th>Legal basis (GDPR Art. 6)</th></tr>
      <tr><td>Answer your enquiry, arrange a demo, prepare an offer</td><td>Contact-form data, e-mails</td><td>Steps you ask for before a possible contract (6(1)(b)) and our legitimate interest in replying to business enquiries (6(1)(f))</td></tr>
      <tr><td>Keep the website running and secure</td><td>Technical data</td><td>Our legitimate interest in a working, safe website (6(1)(f))</td></tr>
      <tr><td>Understand how the website is used</td><td>Usage statistics from Google Analytics</td><td>Your consent, given in the cookie banner (6(1)(a))</td></tr>
    </table></div>
    <p>We do not sell your data, and we do not use it for automated decisions about you.</p>

    <h2>Who we share it with</h2>
    <p>We share your data only with service providers that help us run the website and answer you, and only as much as they need. They work on our instructions under a data processing agreement.</p>
    <ul>
      <li><b>E-mail:</b> messages from the contact form and e-mails to info@behavency.com arrive in our company e-mail inbox, provided by Google Workspace (Google).</li>
      <li><b>Website hosting:</b> DigitalOcean.</li>
      <li><b>Analytics:</b> Google Analytics (Google), only after you agree in the cookie banner.</li>
    </ul>
    <p>We may also disclose data when the law requires it, for example to a court or authority.</p>

    <h2>Transfers outside the EU</h2>
    <p>The website is hosted by DigitalOcean in its Frankfurt data centre, in the European Union. Google and DigitalOcean are companies based in the United States, so some data (for example Google Analytics data, or support access by the provider) may be processed outside the European Economic Area. These transfers are protected by the EU–US Data Privacy Framework and, where it does not apply, by the European Commission’s standard contractual clauses.</p>

    <h2>How long we keep it</h2>
    <div class="pvp-tw"><table>
      <tr><th>Data</th><th>Kept for</th></tr>
      <tr><td>Enquiries (contact-form messages and e-mails) that do not lead to a contract</td><td>12 months after our last contact</td></tr>
      <tr><td>Enquiries that lead to a contract</td><td>As long as the contract runs, then as long as Hungarian law requires for business records</td></tr>
      <tr><td>Technical data in server logs</td><td>30 days</td></tr>
    </table></div>
    <p>After that we delete the data or make it anonymous.</p>

    <h2>Cookies and analytics</h2>
    <p>We use two kinds of cookies and similar storage:</p>
    <ul>
      <li><b>Necessary:</b> what the website needs to work, for example remembering your cookie choice. These do not need your consent.</li>
      <li><b>Analytics (Google Analytics):</b> counts visits and shows which pages are read, so we can improve the site. We set these only after you click “Accept all” in the cookie banner. If you choose “Only necessary”, they are not used. You can change your choice at any time through the “Cookie settings” link at the bottom of every page. Google Analytics keeps this data for 14 months.</li>
    </ul>

    <h2>Your rights</h2>
    <p>Under the GDPR you can ask us to:</p>
    <ul>
      <li>show you the data we hold about you, and give you a copy</li><li>correct data that is wrong</li><li>delete your data</li><li>limit how we use it</li>
      <li>send it to you or another company in a usable format</li><li>stop using it, where we rely on our legitimate interest</li><li>withdraw a consent you gave, at any time</li>
    </ul>
    <p>Write to info@behavency.com. We answer within one month.</p>
    <p>If you think we handle your data wrongly, you can complain to the Hungarian data protection authority, the <b>Nemzeti Adatvédelmi és Információszabadság Hatóság (NAIH)</b>, or to the authority in the EU country where you live.</p>

    <h2>Security, children and changes</h2>
    <ul>
      <li><b>Security:</b> We protect your data with technical and organisational measures, such as encrypted connections and limited access for staff who need it.</li>
      <li><b>Children:</b> The website is meant for businesses. We do not knowingly collect data from children.</li>
      <li><b>Changes:</b> We may update this policy. The date at the top shows the latest version.</li>
      <li><b>Questions:</b> info@behavency.com, or OGI Europe Kft., Üllői út 101/4, 1091 Budapest, Hungary.</li>
    </ul>
    <p class="pvp-x">This policy covers the Behavency website. Data on the Behavency platform (app.behavency.com) is described in the platform’s own privacy notice.</p>
  </div></div>`;
  let el = null;
  const open = () => {
    if (!el) return;
    el.classList.add('open'); el.scrollTop = 0; document.documentElement.classList.add('pvp-lock');
    if (location.hash !== '#privacy') history.pushState({ pvp: 1 }, '', location.pathname + location.search + '#privacy');
  };
  const close = () => { if (!el) return; el.classList.remove('open'); document.documentElement.classList.remove('pvp-lock'); };
  window.bhvOpenPrivacy = open;
  addEventListener('popstate', () => { if (location.hash !== '#privacy') close(); else open(); });
  const mount = () => {
    if (!document.body) return setTimeout(mount, 100);
    const st = document.createElement('style'); st.id = 'privacy-page'; st.textContent = CSS; document.head.appendChild(st);
    const t = document.createElement('div'); t.innerHTML = HTML; el = t.firstElementChild; document.body.appendChild(el);
    el.addEventListener('click', (e) => { if (e.target.closest('[data-close]')) { if (location.hash === '#privacy') history.back(); else close(); } });
    if (location.hash === '#privacy') setTimeout(open, 600);
  };
  mount();
})();
