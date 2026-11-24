// Desktop "How it runs" in the agreed timeline design (Experimental/Timeline.png, 23 Nov).
// The site's own section is hidden and this one is placed where it was. Remove this file and its <script> tag to go back.
(function () {
  const CSS = `
  .hz { padding: 72px 24px; font-family: Inter, Arial, sans-serif; color: #15173d; text-align: left; }
  .hz * { box-sizing: border-box; }
  .hz h2, .hz h3, .hz p, .hz ol { margin: 0; padding: 0; }
  .hz ol { list-style: none; }
  .hz-card { max-width: 1340px; margin: 0 auto; background: #fff; border-radius: 30px; padding: 60px 64px 58px; box-shadow: 0 0 0 1px rgba(20,35,75,.05), 0 40px 80px -56px rgba(30,25,80,.35); }
  .hz-eb { display: flex; align-items: center; gap: 18px; font: 700 14px/1 Inter, sans-serif; letter-spacing: .18em; text-transform: uppercase; color: #2b2f6b; }
  .hz-eb::before { content: ""; width: 42px; height: 2px; background: #5b4fd6; }
  .hz-ttl { margin-top: 18px !important; font: 700 clamp(40px, 3.8vw, 54px)/1.1 "Source Serif 4", Georgia, serif; letter-spacing: -.022em; color: #15173d; }
  .hz-ttl em { font-style: italic; font-weight: 500; color: #e0761c; }
  .hz-lead { margin-top: 12px !important; font: 400 19px/1.5 Inter, sans-serif; color: #3b4268; }
  .hz-tl { position: relative; display: grid; grid-template-columns: repeat(5, minmax(0, 1fr)); margin-top: 48px !important; }
  .hz-tl::before { content: ""; position: absolute; left: 22px; right: 0; top: 22px; height: 2px; background: #cfcaf0; }
  .hz-st { position: relative; display: flex; flex-direction: column; padding: 0 26px 0 0; }
  .hz-st + .hz-st { padding-left: 26px; }
  .hz-st + .hz-st::before { content: ""; position: absolute; left: 0; top: 64px; bottom: 0; width: 1px; background: #e7e5f0; }
  .hz-dot { position: relative; z-index: 1; width: 44px; height: 44px; border-radius: 50%; border: 2px solid #2b2f6b; background: #fff; color: #2b2f6b; display: grid; place-items: center; font: 700 18px/1 Inter, sans-serif; margin-bottom: 26px; }
  .hz-st + .hz-st .hz-dot { margin-left: -2px; }
  .hz-st:last-child .hz-dot { background: #2b2f6b; color: #fff; box-shadow: 0 8px 18px -8px rgba(43,47,107,.7); }
  .hz-when { align-self: flex-start; font: 700 13.5px/1.35 Inter, sans-serif; letter-spacing: .12em; text-transform: uppercase; color: #4b3fb8; background: #edeafb; border-radius: 9px; padding: 7px 13px; }
  .hz-st h3 { margin-top: 18px !important; font: 600 26px/1.18 "Source Serif 4", Georgia, serif; letter-spacing: -.015em; color: #15173d; }
  .hz-st p { margin-top: 14px !important; font: 400 17px/1.5 Inter, sans-serif; color: #4a5170; }
  .hz-st p b { font-weight: 600; color: #15173d; }
  .hz-who { margin-top: auto; padding-top: 26px; min-height: 70px; display: flex; align-items: flex-start; gap: 12px; font: 400 15.5px/1.35 Inter, sans-serif; color: #3b4268; }
  .hz-who svg { flex: none; width: 24px; height: 24px; margin-top: -2px; color: #6a5ae0; }
  @media (max-width: 1100px) { .hz-card { padding: 48px 32px; } .hz-st h3 { font-size: 22px; } .hz-st p { font-size: 15.5px; } }
  `;
  const WHO = '<svg viewBox="0 0 24 24" fill="currentColor" aria-hidden="true"><circle cx="12" cy="7.2" r="3.3"/><path d="M5.6 19.5c0-3.4 2.9-5.9 6.4-5.9s6.4 2.5 6.4 5.9v.5H5.6z"/><circle cx="5.2" cy="9" r="2.4" opacity=".75"/><path d="M.8 18.6c0-2.6 1.9-4.4 4.4-4.4.7 0 1.4.2 2 .5-1.4 1.1-2.3 2.8-2.4 4.7H.8z" opacity=".75"/><circle cx="18.8" cy="9" r="2.4" opacity=".75"/><path d="M23.2 18.6c0-2.6-1.9-4.4-4.4-4.4-.7 0-1.4.2-2 .5 1.4 1.1 2.3 2.8 2.4 4.7h4z" opacity=".75"/></svg>';
  const STEPS = [
    ['Week 1', 'Kick-off', 'We agree the goals, the group and the timeline. Participants get their invitations.', 'You and Behavency'],
    ['Weeks 2–4', 'Assessment', 'About <b>1.5 hours per</b> person, done at their own pace.', 'Participants'],
    ['Weeks 4–6', 'Team game and reflection', 'A <b>15-minute intro</b>, a <b>45-minute game</b> and a <b>90-minute reflection</b>, then the team’s Insight Report.', 'Participants and facilitator'],
    ['From week 6', 'Training and Masterplans', '<b>Programmes</b> matched to each person’s priorities. Length depends on the programmes chosen.', 'Participants'],
    ['3 months after training', 'Re&#8209;assessment', 'The same questionnaires, the same people, compared with the starting point.', 'Participants'],
  ];
  const HTML = `<section class="hz" id="how-it-runs" data-hz="1"><div class="hz-card">
    <div class="hz-eb">How it runs</div>
    <h2 class="hz-ttl">How long it takes, <em>step by step.</em></h2>
    <p class="hz-lead">From kick-off to re-assessment: what happens when, and who is involved.</p>
    <ol class="hz-tl">${STEPS.map(([when, t, p, w], i) => `<li class="hz-st"><span class="hz-dot">${i + 1}</span><span class="hz-when">${when}</span><h3>${t}</h3><p>${p}</p><div class="hz-who">${WHO}<span>${w}</span></div></li>`).join('')}</ol>
  </div></section>`;
  // placed right after "How we measure" (the site's old How it runs section is no longer in the page, 23 Nov)
  const swap = () => {
    const old = document.querySelector('section#how-it-runs:not([data-hz])');
    if (old) { old.id = 'how-it-runs-old'; old.style.setProperty('display', 'none', 'important'); }
    const after = document.querySelector('#root section#how-we-measure'); if (!after) return;
    const ours = document.querySelector('section[data-hz]');
    if (!ours || ours.previousElementSibling !== after) { if (ours) ours.remove(); const t = document.createElement('div'); t.innerHTML = HTML; after.after(t.firstElementChild); }
  };
  const st = document.createElement('style'); st.id = 'howitruns-desktop'; st.textContent = CSS; document.head.appendChild(st);
  let n = 0; const w = setInterval(() => { swap(); if (++n > 80) clearInterval(w); }, 250);
})();
