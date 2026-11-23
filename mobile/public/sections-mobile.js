// Phone site: "How it runs" and "What makes Behavency different" in the agreed phone design (22 Nov).
// The site's own two sections are hidden and these are placed where they were. Remove this file and its <script> tag to go back.
(function () {
  const CSS = `
  .pz { padding: 46px 22px 44px; font-family: Inter, Arial, sans-serif; color: #0f1b3d; text-align: left; }
  .pz * { box-sizing: border-box; }
  .pz h2, .pz h3, .pz p, .pz ol, .pz ul { margin: 0; padding: 0; }
  .pz ol, .pz ul { list-style: none; }
  .pz-eb { display: flex; align-items: center; gap: 12px; font: 600 11.6px/1.2 Inter, sans-serif; letter-spacing: .16em; text-transform: uppercase; color: #3a4364; }
  .pz-eb::before { content: ""; width: 24px; height: 1.5px; background: currentColor; opacity: .5; }
  .pz-ttl { margin-top: 16px !important; font: 700 38px/40px "Source Serif 4", Georgia, serif; letter-spacing: -.03em; color: #0b1138; font-variation-settings: "opsz" 30; text-wrap: balance; }
  .pz-ttl em { font-style: italic; font-weight: 500; letter-spacing: -.02em; }
  .pz-lead { margin-top: 16px !important; font: 400 15.6px/22.6px Inter, sans-serif; color: #1c2540; }

  /* How it runs */
  #how-it-runs.pz { padding-top: 30px; }
  #how-it-runs .pz-ttl em { color: #c2650f; }
  .pz-htl { position: relative; margin-top: 30px !important; }
  .pz-htl::before { content: ""; position: absolute; left: 17px; top: 18px; bottom: 30px; width: 2px; border-radius: 2px; background: #e6e1f0; }
  .pz-hs { position: relative; display: grid; grid-template-columns: 36px 1fr; column-gap: 14px; padding-bottom: 14px; }
  .pz-hs:last-child { padding-bottom: 0; }
  .pz-hn { position: relative; z-index: 1; width: 36px; height: 36px; border-radius: 50%; display: grid; place-items: center; background: #fff; box-shadow: 0 0 0 2px var(--c); font: 700 14px/1 Inter, sans-serif; color: var(--c); }
  .pz-hb { background: #fff; border-radius: 18px; padding: 14px 16px 15px; box-shadow: 0 0 0 1px rgba(20,35,75,.06), 0 14px 30px -24px rgba(30,25,80,.3); min-width: 0; }
  .pz-hwhen { display: inline-block; font: 700 12.6px/1 Inter, sans-serif; letter-spacing: .01em; color: var(--c); background: color-mix(in srgb, var(--c) 11%, #fff); border-radius: 999px; padding: 6px 10px; }
  .pz-hb h3 { margin-top: 10px !important; font: 600 16.4px/1.25 Inter, sans-serif; letter-spacing: -.012em; color: #0f1b3d; }
  .pz-hb p { margin-top: 5px !important; font: 400 14.4px/20.5px Inter, sans-serif; color: #4a5170; }
  .pz-who { display: flex; align-items: center; gap: 6px; margin-top: 9px; font: 500 12.6px/1.2 Inter, sans-serif; color: #8a8fa8; }
  .pz-who::before { content: ""; width: 14px; height: 14px; flex: none; background: currentColor;
    -webkit-mask: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 24 24' fill='none' stroke='black' stroke-width='2' stroke-linecap='round'%3E%3Ccircle cx='9' cy='8' r='3.4'/%3E%3Cpath d='M2.6 20v-.8a5.6 5.6 0 0 1 5.6-5.6h1.6a5.6 5.6 0 0 1 5.6 5.6v.8M16 4.8a3.4 3.4 0 0 1 0 6.4M18.4 14.2a5.6 5.6 0 0 1 3 5v.8'/%3E%3C/svg%3E") center/contain no-repeat;
    mask: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 24 24' fill='none' stroke='black' stroke-width='2' stroke-linecap='round'%3E%3Ccircle cx='9' cy='8' r='3.4'/%3E%3Cpath d='M2.6 20v-.8a5.6 5.6 0 0 1 5.6-5.6h1.6a5.6 5.6 0 0 1 5.6 5.6v.8M16 4.8a3.4 3.4 0 0 1 0 6.4M18.4 14.2a5.6 5.6 0 0 1 3 5v.8'/%3E%3C/svg%3E") center/contain no-repeat; }

  /* What makes Behavency different */
  #different.pz { padding-top: 48px; }
  #different .pz-ttl em { color: #1a8a7a; }
  .pz-dl { margin-top: 28px !important; border-top: 1px solid #e3e0ea; }
  .pz-di { border-bottom: 1px solid #e3e0ea; }
  .pz-dh { width: 100%; display: grid; grid-template-columns: 32px 1fr 34px; column-gap: 10px; align-items: start; padding: 16px 0; border: 0; background: none; text-align: left; cursor: pointer; font: inherit; color: inherit; }
  .pz-dn { font: 700 12.5px/22px Inter, sans-serif; letter-spacing: .06em; color: #1a8a7a; }
  .pz-dt { display: block; font: 600 16px/22px Inter, sans-serif; letter-spacing: -.012em; color: #15171c; }
  .pz-dline { display: block; margin-top: 5px; font: 400 14.4px/21px Inter, sans-serif; color: #4a5160; }
  .pz-dp { width: 34px; height: 34px; border-radius: 50%; border: 1px solid #d8d3c7; display: grid; place-items: center; background: #fff; color: #1e3a5f; transition: transform .3s; }
  .pz-dp svg { width: 14px; height: 14px; fill: none; stroke: currentColor; stroke-width: 2.2; stroke-linecap: round; }
  .pz-di.open .pz-dp { transform: rotate(45deg); }
  .pz-dm { display: grid; grid-template-rows: 0fr; transition: grid-template-rows .35s ease; }
  .pz-dm > div { overflow: hidden; }
  .pz-di.open .pz-dm { grid-template-rows: 1fr; }
  .pz-dm p { margin: 0 0 16px 42px !important; padding: 2px 0 2px 14px !important; border-left: 2px solid #cfe7e2; font: 400 14.2px/21px Inter, sans-serif; color: #4a5160; }
  .pz-close { display: flex; gap: 12px; margin-top: 26px !important; font: 500 15px/22px Inter, sans-serif; color: #1e3a5f; }
  .pz-close i { flex: none; width: 28px; height: 2px; margin-top: 11px; background: #1a8a7a; }
  @media (prefers-reduced-motion: reduce) { .pz-dm, .pz-dp { transition: none; } }
  /* Measure results card: six areas, thin bars, "42 → 74" on one line (like the desktop) */
  :root .ms-card li { grid-template-columns: 96px minmax(0, 1fr) 58px 36px !important; height: 44px !important; }
  :root .ms-bars .tr { height: 5px !important; }
  :root .ms-vals { display: block !important; white-space: nowrap; text-align: right; font-size: 12px !important; color: #dfe5f5; padding-right: 8px; margin-left: 0 !important; font-variant-numeric: tabular-nums; }
  /* Measure on the phone: the Measure green (purple belongs to Engage) */
  :root .ms-title span, :root .hm-title span, :root .hm-title em { color: #14a07c !important; }
  /* Why these areas matter: the Identify blue (purple belongs to Engage) */
  :root .rs-title em, :root .rs-area { color: #2f6fdb !important; }
  :root .rs-ai-k { color: #2468d8 !important; }
  :root .rs-ai-n { color: #1f56c9 !important; }
  :root .rs-ai { background: #eef4fe !important; border-color: #cddff9 !important; }
  :root .rs-ai-rule { background: #cddff9 !important; }
  /* "Who it’s for" removed (23 Nov) */
  #who-its-for { display: none !important; }
  /* Header always on top, solid (23 Nov evening, R2): the Build cards (.jn-card, z-index up to 100) are kept inside
     their own section layer so they can no longer slide over the header. Pop-ups and menus (z-index 90+) stay above it. */
  section.jn { isolation: isolate; }
  :root .nav-fixed { z-index: 79 !important; }
  :root .nav { background: #fbfaff !important; -webkit-backdrop-filter: none !important; backdrop-filter: none !important; box-shadow: inset 0 -1px 0 #e8e5f0; }
  `;
  const STEPS = [
    ['Week 1', 'You and Behavency', 'Kick-off', 'We agree the goals, the group and the timeline. Participants get their invitations.', '#6b7290'],
    ['Weeks 2–4', 'Participants', 'Assessment', 'About 1.5 hours per person, done at their own pace.', '#2f6fdb'],
    ['Weeks 4–6', 'Participants and facilitator', 'Team game and reflection', 'A 15-minute intro, a 45-minute game and a 90-minute reflection, then the team’s Insight Report.', '#7a4bd6'],
    ['From week 6', 'Participants', 'Training and Masterplans', 'Programmes matched to each person’s priorities. Length depends on the programmes chosen.', '#e0761c'],
    ['3 months after training', 'Participants', 'Re-assessment', 'The same questionnaires, the same people, compared with the starting point.', '#14a07c'],
  ];
  const DF = [
    ['One journey, start to finish.', 'Assessment, team game, training and re-assessment, built on one model and run by one team.', 'Often each piece lives somewhere else: a survey run in-house, an assessment from one provider, a workshop from another. Different methods, different reports, and nobody can say what changed. Here every step uses the same six areas, so results lead straight to the right development, and the re-assessment shows the difference.'],
    ['Personal gaps and organisational barriers, kept apart.', 'We show what people need to develop, and what the organisation needs to fix around them.', 'Alongside the assessment, managers complete the Workplace Effectiveness Survey: around 40 typical obstacles across nine management processes. Each barrier is linked to the areas it holds back, so a low score shows whether it is a skill to develop, a condition to change, or both.'],
    ['Managers and teams, on the same model.', 'Develop managers, teams or both. When a team and its manager both score low on Trust, you see the link.', 'Team and manager assessments use the same six areas, so the results can be read side by side: where they agree, and where the team sees something the manager does not.'],
    ['People feel the gaps, not just read them.', 'A team game and a facilitated reflection turn scores into something people experience and commit to.', 'In a 2.5-hour session, the team sees the same behaviours show up live, talks through why, and then receives its Insight Report with practical tips.'],
    ['Our own training, matched to the results.', 'Programmes for line managers, managers of managers and teams, each linked to the six areas.', 'Every result points to specific programmes, so nobody has to guess what to train next. They run in person, online or as e-learning, and each one comes with a Masterplan to practise it at work.'],
    ['Interviewers practise before the real thing.', 'In our Interview Studio they practise with four AI characters before the real interviews.', 'A ready-made guide for every interview, AI suggestions on what to ask next during it, and a summary afterwards that the interviewer checks and decides on.'],
    ['Proof of change, not just completion.', 'Before-and-after results you can show leadership.', 'Results are compared with the starting point, area by area: behaviour from the self-assessment and 360, and whether the barriers have eased.'],
  ];
  const plus = '<svg viewBox="0 0 24 24" aria-hidden="true"><path d="M12 5v14M5 12h14"/></svg>';
  const HOW = `<section class="pz" id="how-it-runs" data-pz="1">
    <div class="pz-eb">How it runs</div>
    <h2 class="pz-ttl">How long it takes, <em>step by step.</em></h2>
    <p class="pz-lead">From kick-off to re-assessment: what happens when, and who is involved.</p>
    <ol class="pz-htl">${STEPS.map(([when, w, t, p, c], i) => `<li class="pz-hs" style="--c:${c}"><span class="pz-hn">${i + 1}</span><div class="pz-hb"><span class="pz-hwhen">${when}</span><h3>${t}</h3><p>${p}</p><span class="pz-who">${w}</span></div></li>`).join('')}</ol>
  </section>`;
  const DIF = `<section class="pz" id="different" data-pz="1">
    <div class="pz-eb">What makes Behavency different</div>
    <h2 class="pz-ttl">Most providers do one piece. <em>We connect the whole journey.</em></h2>
    <ul class="pz-dl">${DF.map(([t, l, m], i) => `<li class="pz-di"><button type="button" class="pz-dh" aria-expanded="false"><span class="pz-dn">0${i + 1}</span><span><span class="pz-dt">${t}</span><span class="pz-dline">${l}</span></span><span class="pz-dp">${plus}</span></button><div class="pz-dm"><div><p>${m}</p></div></div></li>`).join('')}</ul>
  </section>`;
  // put our sections in place, in the same order as the desktop site (23 Nov): How we measure → How it runs → Different.
  // (The site's own old versions are no longer in the page; if one is still there it is hidden.)
  const place = (id, html, after) => {
    const old = document.querySelector('section#' + id + ':not([data-pz])');
    if (old) { old.id = id + '-old'; old.style.setProperty('display', 'none', 'important'); }
    if (!after) return null;
    let ours = document.querySelector('section#' + id + '[data-pz]');
    if (!ours || ours.previousElementSibling !== after) {
      if (ours) ours.remove();
      const t = document.createElement('div'); t.innerHTML = html; ours = t.firstElementChild; after.after(ours);
      if (id === 'different') ours.querySelector('.pz-dl').addEventListener('click', (e) => {
        const b = e.target.closest('.pz-dh'); if (!b) return; const li = b.parentElement, o = !li.classList.contains('open');
        li.parentElement.querySelectorAll('.pz-di').forEach((x) => { x.classList.remove('open'); x.querySelector('.pz-dh').setAttribute('aria-expanded', 'false'); });
        if (o) { li.classList.add('open'); b.setAttribute('aria-expanded', 'true'); }
      });
    }
    return ours;
  };
  const st = document.createElement('style'); st.id = 'sections-mobile'; st.textContent = CSS; document.head.appendChild(st);
  // keep checking for a while: React may redraw the page after it loads
  let n = 0; const w = setInterval(() => { const how = place('how-it-runs', HOW, document.querySelector('#root section#how-we-measure')); if (how) place('different', DIF, how); if (++n > 60) clearInterval(w); }, 250);
})();
