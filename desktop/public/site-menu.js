// Behavency desktop mock-up, round 2:
//  - menu: The journey (drop-down: Identify, Engage, Build, Measure, The six areas) · Programmes · Recruitment · Packages · About · [Запросить демо]
//  - About opens as its own page (story as a timeline, like behavency.me, + the team)
//  - Interview Studio: a block in Identify (with the app's four practice characters) and point 06 in "Чем отличается Behavency"
//  - "20+ years" -> "19 years"
(function () {
  const C = ['#2f6fdb', '#7a4bd6', '#e0761c', '#14a07c'];
  const css = `
  #identify .identify__source { padding-top: 12px !important; padding-bottom: 12px !important; }
  /* 24 Nov: Identify a little tighter so heading + intro + five sources fit one 1440x900 screen */
  section#identify { padding-top: 76px !important; }
  #identify .identify__headline { margin-bottom: 22px !important; }
  #identify .identify__intro { margin-bottom: 30px !important; }
  #identify .ist-link { margin-top: 4px; }
  section.bq, .bq-c { background: transparent !important; border-color: transparent !important; }
  .bmodel__inner { max-width: 1440px !important; padding: 72px 56px !important; justify-content: space-between !important; column-gap: 56px !important; background: transparent !important; box-shadow: none !important; }
  .bmodel__wheel { zoom: 1.06; margin-right: -84px !important; }
  .bmodel__hint { display: inline-flex !important; align-items: center; gap: 8px; margin-top: 22px !important; font: 500 14.5px/1.4 Inter, sans-serif !important; color: #2f6fdb !important; }
  .bmodel__hint > svg { display: none !important; }
  .bmodel__hint span { font: inherit !important; color: inherit !important; }
  .bmodel__hint::after { content: "→"; font: 600 16px/1 Inter, sans-serif; animation: bmh 1.6s ease-in-out infinite; }
  @keyframes bmh { 0%, 100% { transform: translateX(0); } 50% { transform: translateX(5px); } }
  /* model box variations (only when the page asks for one: #mv=a|b|c|d) */
  html.mv-a .bmodel__inner { max-width: 1360px !important; padding: 80px 72px !important; justify-content: center !important; column-gap: 72px !important; }
  html.mv-b .bmodel__inner { max-width: 1360px !important; padding: 72px 64px !important; justify-content: center !important; column-gap: 40px !important; }
  html.mv-b .bmodel__left { max-width: 520px !important; flex: 0 0 520px !important; }
  html.mv-b .bmodel__wheel { zoom: 1.12; }
  html.mv-c section.bmodel { padding-left: 32px !important; padding-right: 32px !important; }
  html.mv-c .bmodel__inner { max-width: none !important; padding: 84px 6vw !important; justify-content: center !important; column-gap: 6vw !important; border-radius: 32px !important; }
  html.mv-c .bmodel__wheel { zoom: 1.08; }
  html.mv-d .bmodel__inner { max-width: 1360px !important; padding: 80px 72px !important; justify-content: center !important; column-gap: 72px !important; background: #fff !important; box-shadow: 0 0 0 1px rgba(20,35,75,.06), 0 40px 80px -50px rgba(30,25,80,.3) !important; }
  .mv-bar { position: fixed; left: 50%; bottom: 70px; transform: translateX(-50%); z-index: 99998; display: flex; align-items: center; background: #0f1b3d; color: #fff; border-radius: 999px; padding: 4px; box-shadow: 0 10px 30px rgba(0,0,0,.3); font: 600 13px/1 Inter, sans-serif; }
  .mv-bar span { padding: 0 8px 0 12px; opacity: .7; }
  .mv-bar button { border: 0; background: transparent; color: #fff; font: inherit; height: 36px; padding: 0 12px; border-radius: 999px; cursor: pointer; }
  .mv-bar button[aria-pressed="true"] { background: #fff; color: #0f1b3d; }
  .bmodel__groups { flex-direction: column; } .bmodel__groups > :nth-child(2) { order: -1; }
  .bmodel__groups > :nth-child(2) { border-top: 0; }
  .bmodel__row-name { font-size: 17px !important; font-weight: 600 !important; }
  .bmodel__row-body > :not(.bmodel__row-name) { font-size: 14px !important; }
  .sm-nav { display: flex; align-items: center; gap: 30px; font: 500 15px/1 Inter, Arial, sans-serif; }
  .sm-nav > a, .sm-dd > button { color: #3b4258; text-decoration: none; cursor: pointer; background: none; border: 0; font: inherit; padding: 10px 0; position: relative; display: inline-flex; align-items: center; gap: 6px; }
  .sm-login { color: #0f1b3d !important; text-decoration: none !important; font: 600 15px/1 Inter, sans-serif; margin-right: 22px; padding: 10px 4px; }
  .sm-login:hover { text-decoration: underline !important; }
  .sm-nav > a:hover, .sm-dd > button:hover { color: #0f1b3d; }
  .sm-nav .on { color: #0f1b3d !important; font-weight: 600; }
  .sm-nav .on::after { content: ""; position: absolute; left: 0; right: 0; bottom: 2px; height: 2px; border-radius: 2px; background: #5b3fc4; }
  .sm-dd { position: relative; }
  .sm-dd svg { transition: transform .2s; }
  .sm-dd.open svg { transform: rotate(180deg); }
  /* the panel starts right under the word (padding = invisible bridge), so moving the mouse down never closes it */
  .sm-panel { position: absolute; top: 100%; left: -16px; padding-top: 10px; opacity: 0; transform: translateY(-4px); pointer-events: none; transition: opacity .16s, transform .16s; }
  .sm-dd.open .sm-panel { opacity: 1; transform: none; pointer-events: auto; }
  /* 25 Nov: keyboard (Tab) on a stage link shows the drop-down, so the focused link is visible */
  .sm-dd:has(.sm-panel a:focus-visible) .sm-panel { opacity: 1; transform: none; pointer-events: auto; }
  .sm-box { min-width: 220px; background: #fff; border-radius: 14px; box-shadow: 0 0 0 1px rgba(20,35,75,.06), 0 20px 50px -18px rgba(30,25,80,.25); padding: 8px; }
  .sm-box a { display: flex; align-items: center; gap: 12px; padding: 11px 12px; border-radius: 9px; color: #0f1b3d; text-decoration: none; font: 500 15px/1.2 Inter, sans-serif; cursor: pointer; }
  .sm-box a:hover { background: #f5f2fc; }
  .sm-box a i { font: italic 500 13px/1 "Source Serif 4", Georgia, serif; color: var(--k); width: 18px; }
  .sm-box hr { border: 0; border-top: 1px solid #f0edf5; margin: 6px 10px; }
  .sm-hidden { display: none !important; }

  /* About as its own page */
  .abp { position: fixed !important; inset: 0; z-index: 800; overflow-y: auto; background: var(--site-bg, #fbfaff); padding-top: 70px; font-family: Inter, Arial, sans-serif; color: #0f1b3d; opacity: 0; pointer-events: none; transition: opacity .25s; }
  .abp.open { opacity: 1; pointer-events: auto; }
  html.abp-lock, html.abp-lock body { overflow: hidden !important; }
  .abp .w { max-width: 1120px; margin: 0 auto; padding: 0 24px; }
  .abp .hero { text-align: center; padding: 90px 0 70px; }
  .abp .pill { display: inline-block; background: #0f1b3d; color: #fff; font: 700 11.5px/1 Inter, sans-serif; letter-spacing: .2em; text-transform: uppercase; padding: 8px 16px; border-radius: 999px; }
  .abp .hero h1 { font: 500 62px/1.06 "Playfair Display", Georgia, serif; letter-spacing: -.015em; margin: 26px 0 0; }
  .abp .hero h1 em { font-style: italic; color: #1a8a7a; }
  .abp .hero p { font: 400 19px/1.6 Inter, sans-serif; color: #4f5770; margin: 24px auto 0; max-width: 720px; }
  .abp .tl { display: grid; grid-template-columns: 420px minmax(0, 1fr); gap: 48px; padding: 30px 0 110px; }
  .abp .tl-year { position: sticky; top: 130px; align-self: start; background: #fff; border-radius: 24px; padding: 54px 30px 50px; text-align: center; box-shadow: 0 0 0 1px rgba(20,35,75,.06), 0 30px 60px -36px rgba(30,25,80,.25); }
  .abp .tl-year small { font: 600 12.5px/1 Inter, sans-serif; letter-spacing: .26em; text-transform: uppercase; color: #8a8fa3; }
  .abp .tl-year b { display: block; font: 600 112px/1 "Playfair Display", Georgia, serif; letter-spacing: -.02em; color: #0f1b3d; margin-top: 20px; transition: opacity .25s; }
  .abp .tl-year span { display: block; width: 64px; height: 3px; border-radius: 3px; background: #1f2a5a; margin: 24px auto 0; }
  .abp .tl-steps { position: relative; padding-left: 46px; }
  .abp .tl-steps::before { content: ""; position: absolute; left: 15px; top: 12px; bottom: 12px; width: 2px; background: #e4def2; }
  .abp .tl-step { position: relative; background: #fff; border-radius: 20px; padding: 30px 32px; margin-bottom: 22px; box-shadow: 0 0 0 1px rgba(20,35,75,.06), 0 24px 50px -32px rgba(30,25,80,.22); transition: box-shadow .3s; }
  .abp .tl-step.cur { box-shadow: 0 0 0 1.5px #1f2a5a, 0 24px 50px -28px rgba(31,42,90,.3); }
  .abp .tl-step .dot { position: absolute; left: -46px; top: 32px; width: 32px; height: 32px; border-radius: 50%; background: #fff; border: 2px solid #d5d9e6; display: grid; place-items: center; font: 600 13px/1 Inter, sans-serif; color: #1f2a5a; transition: background .3s, color .3s, border-color .3s; }
  .abp .tl-step.cur .dot { background: #1f2a5a; border-color: #1f2a5a; color: #fff; }
  .abp .tl-step .later { font: 600 11.5px/1 Inter, sans-serif; letter-spacing: .14em; text-transform: uppercase; color: #8a8fa3; margin-bottom: 8px; }
  .abp .tl-step .yr { font: italic 500 15px/1 "Source Serif 4", Georgia, serif; color: #1a8a7a; }
  .abp .tl-step h3 { font: 600 23px/1.25 "Source Serif 4", Georgia, serif; margin: 10px 0 0; }
  .abp .tl-step p { font: 400 16px/1.65 Inter, sans-serif; color: #4f5770; margin: 12px 0 0; }
  .abp .team { background: #fbfaff; padding: 100px 0 40px; }
  /* 25 Nov: "Наше видение" and "Кто мы", between the story and the team */
  /* 25 Nov (user's "1 vision" design): vision + who we are open the page, thin line between them; the story follows */
  .abp .who { position: relative; overflow: hidden; padding: 70px 0 0; }
  .abp .who-grid { position: relative; display: grid; grid-template-columns: 1fr 1fr; gap: 0; padding-bottom: 64px; border-bottom: 1px solid #e6e9ef; }
  .abp .who-grid > div:first-child { padding-right: 60px; border-right: 1px solid #e6e9ef; }
  .abp .who-grid > div:last-child { padding-left: 60px; }
  .abp .who .eye { display: flex; align-items: center; gap: 12px; font: 600 12.5px/1 Inter, sans-serif; letter-spacing: .24em; text-transform: uppercase; color: #1a8a7a; }
  .abp .who .eye::after { content: ""; width: 30px; height: 2px; border-radius: 2px; background: currentColor; }
  .abp .story { position: relative; overflow: clip; } /* clip, not hidden: hidden stopped the year box from following the scroll */
  .abp .abp-blob { position: absolute; border-radius: 50%; background: #e4f3ee; pointer-events: none; }
  .abp .abp-blob--tr { width: 420px; height: 300px; right: -130px; top: -170px; }
  .abp .abp-blob--bl { width: 520px; height: 300px; left: -200px; bottom: -150px; }
  .abp .story .w { position: relative; }
  .abp .hero { padding: 80px 0 60px; }
  .abp .tl-year { background: #eaf5f1 !important; box-shadow: 0 0 0 1px rgba(26,138,122,.10), 0 30px 60px -40px rgba(20,90,80,.30) !important; }
  .abp .tl-year small { color: #1a8a7a !important; }
  .abp .tl-year span { background: #1a8a7a !important; }
  .abp .who h2 { font: 500 34px/1.15 "Playfair Display", Georgia, serif; letter-spacing: -.01em; margin: 16px 0 0; color: #0f1b3d; }
  .abp .who h2 { text-wrap: balance; }
  .abp .who h2 em { font-style: italic; color: #1a8a7a; }
  .abp .who p { font: 400 17px/1.7 Inter, sans-serif; color: #4f5770; margin: 18px 0 0; }
  /* 25 Nov (user's "team" design): 3 x 2 grid, photo left, name / role / short green line / one line; thin lines between */
  .abp .team { background: transparent !important; }
  .abp .team .eye, .abp .team h2 em { color: #1a8a7a; }
  .abp .people { grid-template-columns: repeat(3, 1fr) !important; gap: 0 !important; margin-top: 60px !important; }
  .abp .people .pp { display: flex; align-items: flex-start; gap: 26px; text-align: left; padding: 0 30px; border-left: 1px solid #e6e9ef; }
  .abp .people .pp:nth-child(3n+1) { border-left: 0; padding-left: 0; }
  .abp .people .pp:nth-child(3n) { padding-right: 0; }
  .abp .people .pp:nth-child(n+4) { margin-top: 30px; padding-top: 30px; box-shadow: 0 -1px 0 #e6e9ef; }
  .abp .people .pp:nth-child(n+4) .ph { margin-top: 0; }
  .abp .team .w { max-width: 1340px; }
  .abp .people .pp { gap: 22px !important; }
  .abp .people .pp .ph { flex: none; width: 120px; height: 120px; margin: 0; }
  .abp .people .pp b { white-space: nowrap; }
  .abp .people .pp-tx { min-width: 0; padding-top: 10px; }
  .abp .people .pp b { margin-top: 0; font: 700 22px/1.2 "Playfair Display", Georgia, serif; letter-spacing: -.01em; color: #0f1b3d; }
  .abp .people .pp span { margin-top: 6px; font: 400 15px/1.35 Inter, sans-serif; color: #2f3b63; }
  .abp .people .pp em { display: block; width: 32px; height: 3px; border-radius: 3px; background: #1a8a7a; margin: 16px 0 0; }
  .abp .people .pp i { margin: 16px 0 0 !important; max-width: none !important; font-size: 15px !important; line-height: 1.6 !important; color: #2f3753 !important; }
  .abp .pp i { display: block; font: 400 13.5px/1.45 Inter, sans-serif; font-style: normal; color: #4f5770; margin: 10px auto 0; max-width: 170px; }
  .abp .abp-end { text-align: center; padding: 20px 0 110px; }
  .abp .abp-end .w { border-top: 1px solid #ebe7f4; padding-top: 70px; }
  .abp .abp-end h2 { font: 500 42px/1.12 "Playfair Display", Georgia, serif; letter-spacing: -.01em; margin: 0; color: #0f1b3d; }
  .abp .abp-end h2 em { font-style: italic; color: #1a8a7a; }
  .abp .abp-cta { display: inline-block; margin-top: 30px; border: 0; border-radius: 999px; background: #0f1b3d; color: #fff; padding: 16px 30px; font: 600 15.5px/1 Inter, sans-serif; cursor: pointer; box-shadow: 0 14px 30px -16px rgba(15,27,61,.55); }
  .abp .abp-cta:hover { background: #1f2f5c; }
  .abp .abp-end .back { display: flex; margin: 26px auto 0; border: 0; padding: 6px 10px; color: #4f5770; font-weight: 500; }
  .abp .team .eye { text-align: center; font: 600 12.5px/1 Inter, sans-serif; letter-spacing: .24em; text-transform: uppercase; color: #1a8a7a; }
  .abp .team h2 { text-align: center; font: 500 46px/1.1 "Playfair Display", Georgia, serif; margin: 18px 0 0; }
  .abp .team h2 em { font-style: italic; color: #1a8a7a; }
  .abp .team p.tl2 { text-align: center; font: 400 17px/1.55 Inter, sans-serif; color: #4f5770; margin: 16px auto 0; max-width: 560px; }
  .abp .people { display: grid; grid-template-columns: repeat(6, 1fr); gap: 16px; margin-top: 54px; }
  .abp .pp { text-align: center; }
  .abp .pp .ph { width: 140px; height: 140px; margin: 0 auto; border-radius: 50%; background: #fff; overflow: hidden; box-shadow: 0 0 0 1px rgba(20,35,75,.07), 0 18px 40px -22px rgba(30,25,80,.35); }
  .abp .pp img { width: 100%; height: 100%; object-fit: cover; }
  .abp .pp b { display: block; font: 600 18px/1.3 "Source Serif 4", Georgia, serif; margin-top: 18px; }
  .abp .pp span { display: block; font: 400 14px/1.4 Inter, sans-serif; color: #6d7386; margin-top: 4px; }
  .abp .back { display: inline-flex; align-items: center; gap: 8px; margin-top: 34px; border: 1.5px solid #0f1b3d; border-radius: 999px; padding: 10px 18px; font: 600 14px/1 Inter, sans-serif; color: #0f1b3d; background: transparent; cursor: pointer; }

  /* How it runs: when (top, stage colour), who (bottom, people icon) */
  .hir__step:nth-child(1) { --k: #6b7280; } .hir__step:nth-child(2) { --k: #2f6fdb; } .hir__step:nth-child(3) { --k: #7a4bd6; } .hir__step:nth-child(4) { --k: #e0761c; } .hir__step:nth-child(5) { --k: #14a07c; }
  .hir__tl::before { background: linear-gradient(90deg, #6b7280, #2f6fdb 25%, #7a4bd6 50%, #e0761c 75%, #14a07c) !important; }
  .hir__node { color: var(--k) !important; box-shadow: 0 0 0 1.5px var(--k), 0 10px 22px -12px rgba(20,35,75,.35) !important; }
  .hir__who { color: var(--k) !important; font: 700 12px/1.3 Inter, sans-serif !important; letter-spacing: .08em; text-transform: uppercase; }
  .hir__dur { display: inline-flex !important; align-items: center; gap: 7px; background: none !important; padding: 12px 0 0 !important; border-top: 1px solid #ece8f3; align-self: stretch !important; border-radius: 0 !important; font: 500 12.5px/1.3 Inter, sans-serif !important; color: #6b7183 !important; }
  .hir__dur::before { content: ""; flex: none; width: 15px; height: 15px; background: currentColor; -webkit-mask: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 24 24' fill='none' stroke='black' stroke-width='2' stroke-linecap='round' stroke-linejoin='round'%3E%3Cpath d='M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2'/%3E%3Ccircle cx='9' cy='7' r='4'/%3E%3Cpath d='M22 21v-2a4 4 0 0 0-3-3.87M16 3.13a4 4 0 0 1 0 7.75'/%3E%3C/svg%3E") center / contain no-repeat; mask: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 24 24' fill='none' stroke='black' stroke-width='2' stroke-linecap='round' stroke-linejoin='round'%3E%3Cpath d='M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2'/%3E%3Ccircle cx='9' cy='7' r='4'/%3E%3Cpath d='M22 21v-2a4 4 0 0 0-3-3.87M16 3.13a4 4 0 0 1 0 7.75'/%3E%3C/svg%3E") center / contain no-repeat; }
  .hir__foot { display: none !important; }
  /* Чем отличается Behavency: calmer list, like the phone version */
  #different .different__point { grid-template-columns: 56px minmax(0, 1fr) 40px !important; gap: 20px !important; padding: 22px 0 !important; cursor: pointer; }
  #different .different__num { font: 700 13px/26px Inter, sans-serif !important; letter-spacing: .08em; color: #1a8a7a !important; padding-top: 0 !important; }
  #different .different__body { gap: 6px !important; max-width: 720px !important; }
  #different .different__title { font: 600 19px/1.35 Inter, sans-serif !important; letter-spacing: -.012em; color: #15171c !important; }
  #different .different__text { font: 400 16px/1.6 Inter, sans-serif !important; color: #4a5160 !important; }
  #different .different__more { background: none !important; box-shadow: none !important; border-radius: 0 !important; border-left: 2px solid #cfe7e2; margin: 10px 0 2px !important; padding: 2px 0 2px 16px !important; font: 400 15.5px/1.65 Inter, sans-serif !important; color: #4a5160 !important; }
  #different .different__toggle { width: 38px !important; height: 38px !important; }
  #different .different__close { font: 500 17px/1.5 Inter, sans-serif !important; margin-top: 40px !important; }
  /* Measure: one colour, the Measure stage green (purple belongs to Engage); no extra caption under the small diagram */
  .ms-title em, .hm-title em { color: #14a07c !important; }
  .ms-tl-cap { display: none !important; }
  .hm-line { background: #14a07c !important; }
  .hm-dot { border-color: #14a07c !important; color: #0e8a69 !important; }
  .hm-dot--on { background: #14a07c !important; border-color: #14a07c !important; color: #fff !important; box-shadow: 0 6px 14px -6px rgba(20,160,124,.55) !important; }
  .hm-label { color: #0e8a69 !important; }
  /* "Для кого" removed (23 Nov): the page already says who it is for */
  /* 23 Nov evening: package cards white, not cream (R20); "Что им мешает · пример" spacing (R25);
     the Build dashboard keeps the normal page width instead of touching the screen edge (R17) */
  .packages__card { background: #fff !important; }
  .hb-flag em { margin-left: 0 !important; }
  .bs-section .bs-container { max-width: 1440px !important; padding: 0 56px !important; } /* wide again, with a margin (R17) */
  /* hero: the new four-card picture (all text drawn in), so the old live text layer is switched off */
  .hc-cards .hc-cards-ui, .hc-cards .hc-ct { display: none !important; }
  /* Measure card: the change as a small green pill, numbers in the label size */
  .ms-delta { background: rgba(78,224,143,.14); border-radius: 999px; text-align: center; font-weight: 600 !important; }
  .ms-num { white-space: nowrap; text-align: left !important; color: #dfe5f5 !important; }
  /* one background everywhere (23 Nov): the landing area, the page underneath and the dashboard frame use the same tint */
  html, body { background: var(--site-bg, #fbfaff) !important; }
  section.hc-outer { background: var(--site-bg, #fbfaff) !important; }
  .hc::after { background: none !important; }
  .platform-frame { background: var(--site-bg, #fbfaff) !important; }
  /* Hiring picture: the same three pills as on the phone */
  .hr-labelled { position: relative; }
  .hr-pin { position: absolute; display: flex; align-items: center; gap: 8px; padding: 7px 14px 7px 8px; border-radius: 999px; background: #0f1b3d; color: #fff; font: 600 14px/1 Inter, sans-serif; white-space: nowrap; box-shadow: 0 8px 20px -6px rgba(15,27,61,.45); z-index: 2; }
  .hr-pin b { width: 22px; height: 22px; border-radius: 50%; background: #1a8a7a; display: grid; place-items: center; font: 700 12px/1 Inter, sans-serif; }
  /* Why these areas matter: the Identify blue (purple belongs to Engage) */
  .wm { --accent: #2f6fdb !important; }
  .wm .wm-n { background: linear-gradient(135deg, #1c3f8f, #2f6fdb 55%, #5b9bf0) !important; -webkit-background-clip: text !important; background-clip: text !important; }
  /* Interview Studio block in Identify */
  .ist { margin: 90px auto 0; max-width: 1120px; padding: 0; display: grid; grid-template-columns: minmax(0, 1fr) 560px; gap: 64px; align-items: center; font-family: Inter, Arial, sans-serif; color: #0f1b3d; text-align: left; }
  #interview-studio.ist { max-width: 1120px; margin-top: 96px; padding: 64px; border-radius: 32px; background: linear-gradient(165deg, #e2eafd 0%, #e7e7fc 60%, #ece9fd 100%); box-shadow: 0 0 0 1px rgba(91,76,214,.08), 0 40px 80px -50px rgba(60,40,160,.35); box-sizing: border-box; grid-template-columns: minmax(0, 1fr) 500px; gap: 56px; }
  #interview-studio ul, #interview-studio li { border-color: rgba(91,76,214,.14) !important; }
  .st-top { display: none; } /* the small "Структурированное интервью" tag repeated the list row above */
  .st-ico { width: 46px; height: 46px; border-radius: 14px; display: grid; place-items: center; background: #fff; color: #2f6fdb; box-shadow: 0 0 0 1px rgba(47,111,219,.12), 0 8px 18px -10px rgba(40,60,160,.45); }
  .st-ico svg { width: 22px; height: 22px; fill: none; stroke: currentColor; stroke-width: 1.9; stroke-linecap: round; stroke-linejoin: round; }
  .st-name { font: 600 16px/1.2 Inter, sans-serif; color: #1f2a5a; }
  .ist-part { display: table; font: 600 12px/1 Inter, sans-serif; color: #2f6fdb; background: #eaf1fd; border-radius: 999px; padding: 7px 12px; margin-bottom: 16px; }
  .ist-link { display: inline-flex; align-items: center; gap: 6px; margin-top: 8px; font: 600 14px/1.3 Inter, sans-serif; color: #2f6fdb !important; cursor: pointer; text-decoration: none; }
  .ist-link:hover { text-decoration: underline; }
  #identify .id-conf { margin: 14px 0 0; padding-left: 0; font: 400 14px/1.5 Inter, sans-serif; color: #6b7286; }
  .ist .eye { display: inline-flex; align-items: center; gap: 12px; font: 600 12.5px/1 Inter, sans-serif; letter-spacing: .22em; text-transform: uppercase; color: #2f6fdb; }
  .ist .eye::before { content: ""; width: 28px; height: 1.5px; background: #2f6fdb; opacity: .6; }
  .ist h3 { font: 500 40px/1.12 "Playfair Display", Georgia, serif; letter-spacing: -.01em; margin: 18px 0 0; }
  .ist h3 em { font-style: italic; color: #2f6fdb; }
  .ist p { font: 400 16.5px/1.65 Inter, sans-serif; color: #4f5770; margin: 16px 0 0; }
  .ist ul { list-style: none; padding: 0; margin: 22px 0 0; display: grid; gap: 12px; }
  .ist li { display: flex; gap: 12px; align-items: flex-start; font: 500 15.5px/1.45 Inter, sans-serif; color: #1f2740; }
  .ist li i { flex: none; width: 22px; height: 22px; border-radius: 50%; background: #eaf1fd; color: #2f6fdb; display: grid; place-items: center; font-style: normal; font-size: 12px; margin-top: 1px; }
  .ist ul { gap: 0; border-top: 1px solid #e3e6f0; max-width: 520px; }
  .ist li { padding: 13px 0; border-bottom: 1px solid #e3e6f0; }
  .ist .ist-when { flex: none; width: 64px; padding-top: 5px; font: 600 11px/1 Inter, sans-serif; letter-spacing: .12em; text-transform: uppercase; color: #2f6fdb; }
  .bmodel__sub { display: none !important; }
  .bmodel__sub2 { font: 400 16.5px/1.6 Inter, sans-serif; color: #4f5770; margin: 18px 0 0; max-width: 470px; }
  .ist .chars { display: grid; grid-template-columns: 1fr 1fr; gap: 16px; }
  .ist .ch { border-radius: 22px; padding: 26px 18px 22px; background: linear-gradient(180deg, var(--t), #fff 70%); box-shadow: 0 0 0 1px rgba(20,35,75,.06), 0 22px 46px -30px rgba(30,25,80,.28); position: relative; text-align: center; }
  .ist .ch img { width: 124px; height: 124px; border-radius: 50%; display: block; margin: 8px auto 0; }
  .ist .ch b { display: block; font: 600 19px/1.2 "Source Serif 4", Georgia, serif; margin-top: 12px; }
  .ist .ch span { display: block; font: 400 14.5px/1.35 Inter, sans-serif; color: #5a6278; margin-top: 4px; }
  .ist .ch em { position: absolute; top: 12px; right: 12px; font: 700 11.5px/1 Inter, sans-serif; font-style: normal; padding: 5px 9px; border-radius: 999px; background: var(--cb); color: var(--cf); }`;

  const chev = '<svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.4" stroke-linecap="round" stroke-linejoin="round"><path d="m6 9 6 6 6-6"/></svg>';
  const STEPS_OLD = [
    ['2007', 'С чего всё началось', 'Основана OGI Europe. С самого начала мы обучаем руководителей и их команды: как руководить, принимать решения и работать вместе.'],
    ['2012', 'По всей Европе', 'Через пять лет наши тренеры работают с руководителями по всей Европе — в том числе для Nestlé, Bayer и Heineken. Тренинги проходят отлично, люди уходят вдохновлёнными. А в понедельник возвращаются старые привычки, и почти ничего не меняется.'],
    ['2022', 'Что мы видели раз за разом', 'Опрос — своими силами. Оценка — у одного подрядчика, семинар — у другого, а сбоку ещё платформа e-learning. Разные методики, разные команды, разные отчёты. По отдельности всё имело смысл, но ничто не связывало части между собой, и никто не мог сказать, что на самом деле изменилось.'],
    ['2023', 'Начинаем работу над Behavency', 'Один путь от начала до конца — для руководителей, их команд или для всех сразу. Сначала он показывает, где эффективность на самом деле проседает и что мешает людям. Потом люди убеждаются в этом сами — в игре, где те же привычки проявляются вживую. Они получают развитие, которое им подходит, а через шесть месяцев мы показываем, что изменилось.'],
    ['2026', 'Запуск Behavency', 'Запускаем платформу: Identify, Engage, Build и Measure в одном месте. За ней — люди, которые обучают руководителей уже 19 лет.'],
  ];
  const STEPS = [
    ['2007', 'Основана OGI Europe', 'Начинаем обучать руководителей и их команды: как управлять, принимать решения и работать вместе.', ''],
    ['2017', 'В Европе и Центральной Азии', 'Наши тренеры работают с руководителями более чем в 30 странах — в том числе для Nestlé, Bayer и Heineken.', '10 лет спустя'],
    ['2022', 'Прозрение', 'Сам по себе тренинг поведение не меняет. Люди уходят вдохновлёнными, а к понедельнику возвращаются старые привычки. И оценка, семинар и всё, что после, никак не связаны.', '5 лет спустя'],
    ['2023', 'Начинаем работу над Behavency', 'Собираем всё в один путь: оценки, командную игру, наших тренеров и программы.', 'Год спустя'],
    ['2026', 'Запуск Behavency', 'Identify, Engage, Build и Measure — в одном месте.', '3 года спустя'],
  ];
  const TEAM = [['vlad', 'Vlad Plaskov', 'Сооснователь и CEO'], ['slava', 'Slava Turiashvili', 'Сооснователь и CTO'], ['eric', 'Eric Renard', 'Директор по развитию'], ['vadim', 'Vadim Neander', 'Главный методолог'], ['keith', 'Keith Parker', 'Ведущий фасилитатор'], ['ashraf', 'Ashraf Hussain', 'Дизайнер опыта обучения']];
  // 25 Nov: one line per person, under the job title
  const LINE = {"vlad":"Руководит компанией и отвечает за идею, на которой построен путь.","slava":"Создал платформу, которая связывает все шаги.","vadim":"Следит, чтобы методика стояла на исследованиях: шесть областей, опросники и то, как читать результаты.","eric":"Превращает методику в программы, которые руководители могут применять в работе.","keith":"Оживляет сессии — от командной игры до разбора.","ashraf":"Продумывает, как выглядит и ощущается каждый шаг — для руководителей, команд и HR."};
  const aboutPage = `
  <div class="abp" role="dialog" aria-label="О Behavency">
    <div class="who"><i class="abp-blob abp-blob--tr"></i><div class="w who-grid">
      <div><div class="eye">Наше видение</div><h2>Руководители и команды <em>заодно</em></h2><p>Мы хотим, чтобы каждый руководитель знал, каким его видят на самом деле, каждая команда понимала, чего от неё ждут, а каждая организация видела, что мешает. Когда всё это сходится, люди перестают работать в обход друг друга и начинают работать вместе. Ради этого мы и создали Behavency: чтобы руководители и команды нашли общий язык — и не теряли его.</p></div>
      <div><div class="eye">Кто мы</div><h2>Создано людьми, которые <em>сами делают эту работу</em></h2><p>Behavency создаёт OGI Europe. С 2007 года мы обучаем руководителей и их команды более чем в 30 странах и за эти годы поняли, что помогает людям меняться, а что нет. В Behavency этот опыт собран в один путь.</p><p>Над ним бок о бок работают методологи, асессоры, HR-специалисты, тренеры и технологи. Модель шести областей и опросники — от наших методологов, программы и семинары — от тренеров и фасилитаторов, а платформа, которая связывает все шаги, — от технологической команды. Для HR это один партнёр и одна методика — от первой оценки до момента, когда видно, что изменилось.</p></div>
    </div></div>
    <div class="story"><i class="abp-blob abp-blob--bl"></i>
    <div class="w hero"><span class="pill">Наша история</span>
      <h1>Почему тренинг<br><em>не доживает до понедельника?</em></h1>
      <p>Годами мы видели, как хороший тренинг выветривается к понедельнику. И создали способ закрепить перемены — и показать их.</p></div>
    <div class="w tl">
      <div class="tl-year"><small>Основана</small><b>2007</b><span></span></div>
      <div class="tl-steps">${STEPS.map(([y, h, p, l], i) => `<div class="tl-step" data-y="${y}" data-l="${l || 'Основана'}"><div class="dot">${i + 1}</div>${l ? `<div class="later">${l}</div>` : ''}<div class="yr">${y}</div><h3>${h}</h3><p>${p}</p></div>`).join('')}</div>
    </div>
    </div>
    <div class="team"><div class="w">
      <div class="eye">Команда</div>
      <h2>Кто стоит <em>за Behavency</em></h2>
      <p class="tl2">Девятнадцать лет в тренинговых залах, один понятный метод и платформа, на которой всё держится.</p>
      <div class="people">${TEAM.map(([f, n, r]) => `<div class="pp"><div class="ph"><img src="team/${f}.jpg" alt="${n}"></div><div class="pp-tx"><b>${n}</b><span>${r}</span><em></em><i>${LINE[f]}</i></div></div>`).join('')}</div>
    </div></div>
    <div class="abp-end"><div class="w">
      <h2>Хотите посмотреть, как это будет <em>у ваших руководителей?</em></h2>
      <button class="abp-cta" type="button" data-cm-open>Запросить демо</button>
      <button class="back" type="button" data-close>← Назад на сайт</button>
    </div></div>
  </div>`;

  const CHARS = [['anna', 'Anna', 'Приводит понятные примеры', 'Лёгкий', '#ecfdf5', '#d1fae5', '#047857'], ['mark', 'Mark', 'Говорит общими словами', 'Средний', '#eff6ff', '#dbeafe', '#1d4ed8'], ['sofia', 'Sofia', 'Только истории успеха', 'Сложный', '#fff7ed', '#ffedd5', '#c2410c'], ['peter', 'Peter', 'Многословен, уходит от темы', 'Очень сложный', '#fdf2f8', '#ffe4e6', '#be123c']];
  const studio = `
  <div class="ist" id="interview-studio">
    <div>
      <div class="st-top"><span class="st-ico"><svg viewBox="0 0 24 24"><path d="M21 12a8 8 0 0 1-11.6 7.1L4 20.5l1.4-4.6A8 8 0 1 1 21 12z"/></svg></span><span class="st-name">Структурированное интервью</span></div><div class="eye">Вишенка на торте</div>
      <h3>Ваши HR-специалисты учатся <em>вести интервью.</em></h3>
      <p>Структурированное интервью работает, только если интервьюер умеет слушать и копать глубже. Поэтому мы не только обучаем вашу HR-команду, но и даём ей все инструменты. До встречи с настоящими руководителями они тренируются с четырьмя AI-персонажами в нашей Интервью-студии — от простого к сложному.</p>
      <ul>
        <li><span class="ist-when">До</span><i>✓</i><span>Готовый гайд для каждого интервью по шести областям</span></li>
        <li><span class="ist-when">Во время</span><i>✓</i><span>AI подсказывает, что спросить дальше</span></li>
        <li><span class="ist-when">После</span><i>✓</i><span>AI сводит заметки в резюме, решает интервьюер</span></li>
      </ul>
    </div>
    <div class="chars">${CHARS.map(([f, n, d, l, t, cb, cf]) => `<div class="ch" style="--t:${t};--cb:${cb};--cf:${cf}"><em>${l}</em><img src="team/${f}.png" alt="${n}"><b>${n}</b><span>${d}</span></div>`).join('')}</div>
  </div>`;

  const go = (el) => { if (!el) return; closeAbout(); if (window.bhvCloseRecruit) window.bhvCloseRecruit(); scrollTo({ top: el.getBoundingClientRect().top + scrollY - 70, behavior: 'smooth' }); };
  const stageEl = (i) => document.querySelectorAll('.bx-ch')[i] || null;
  let abp = null;
  function openAbout() {
    if (window.bhvCloseRecruit) window.bhvCloseRecruit();
    abp.classList.add('open'); document.documentElement.classList.add('abp-lock'); abp.scrollTop = 0;
    if (location.hash.indexOf('about') < 0) history.pushState({ about: 1 }, '', location.pathname + location.search + '#about' + (location.hash.match(/v=\w+/) ? '&' + location.hash.match(/v=\w+/)[0] : ''));
    mark();
  }
  function closeAbout() { if (!abp || !abp.classList.contains('open')) return; abp.classList.remove('open'); document.documentElement.classList.remove('abp-lock'); mark(); }
  addEventListener('popstate', () => { if (!/about/.test(location.hash)) closeAbout(); });
  window.bhvCloseAbout = () => closeAbout(); window.bhvMarkNav = () => mark();

  function nineteen() {
    const w = document.createTreeWalker(document.getElementById('root'), NodeFilter.SHOW_TEXT);
    let n; while ((n = w.nextNode())) if (/20\+\s*years/i.test(n.nodeValue)) n.nodeValue = n.nodeValue.replace(/20\+(\s*)years/gi, '19$1years');
  }
  function linkInterviewRow() {
    if (document.querySelector('.ist-link')) return;
    const row = [...document.querySelectorAll('#identify *')].filter((e) => /structured interview|структурированное интервью/i.test(e.textContent) && e.textContent.length < 400 && !e.closest('#interview-studio')).sort((a, b) => a.textContent.length - b.textContent.length).find((e) => e.querySelector('p') || e.tagName === 'P' || e.children.length >= 2);
    if (!row) return;
    const host = row.tagName === 'P' ? row.parentElement : row;
    const a = document.createElement('a'); a.className = 'ist-link'; a.textContent = 'Попробовать в Интервью-студии ↓';
    a.addEventListener('click', (e) => { e.preventDefault(); e.stopPropagation(); const t = document.getElementById('interview-studio'); if (t) scrollTo({ top: t.getBoundingClientRect().top + scrollY - 90, behavior: 'smooth' }); });
    host.appendChild(a);
  }
  function confLine() {   // 23 Nov (R8): one quiet line under the five sources
    const list = document.querySelector('#identify .identify__sources');
    if (!list || document.querySelector('.id-conf')) return;
    const p = document.createElement('p'); p.className = 'id-conf'; p.innerHTML = '<svg viewBox="0 0 24 24" width="13" height="13" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true" style="vertical-align:-2px;margin-right:6px"><rect x="4" y="11" width="16" height="10" rx="2"/><path d="M8 11V7a4 4 0 0 1 8 0v4"/></svg>Данные оценки хранятся в ЕС и обрабатываются в соответствии с GDPR.';
    list.after(p);
  }
  function no40() {   // "40+ programmes linked to..." -> "Programmes linked to..."
    const w = document.createTreeWalker(document.getElementById('root'), NodeFilter.SHOW_TEXT);
    let n; while ((n = w.nextNode())) if (/40[+] *programmes/i.test(n.nodeValue)) n.nodeValue = n.nodeValue.replace(/40[+] *programmes/gi, 'Программы');
  }
  function midLevel() {   // the app's names for the two manager groups
    const w = document.createTreeWalker(document.getElementById('root'), NodeFilter.SHOW_TEXT);
    let n; while ((n = w.nextNode())) { let v = n.nodeValue;
      if (/line and mid-level managers/i.test(v)) { v = v.replace(/line and mid-level managers/gi, (m) => (m[0] === 'L' ? 'Линейные руководители и руководители руководителей' : 'линейные руководители и руководители руководителей')); n.nodeValue = v; }
      if (/mid-level managers/i.test(v)) n.nodeValue = v.replace(/mid-level managers/gi, (m) => (m[0] === 'M' ? 'Руководители руководителей' : 'руководители руководителей'));
      else if (/^ *Mid-level *$/.test(v)) n.nodeValue = v.replace('Mid-level', 'Руководители руководителей'); }
  }
  function replayInView() {   // the Build animation starts when it comes into view, not when the page loads it
    const f = document.querySelector('.bs-animation-frame'); if (!f || f.dataset.replay) return;
    f.dataset.replay = '1';
    // start it from the beginning when it comes into view (a message, not a reload: a reload leaves an empty box on the published page)
    let seen = false; const send = () => { try { f.contentWindow.postMessage('bhv-start', '*'); } catch (err) {} };
    const io = new IntersectionObserver((es) => es.forEach((e) => { if (e.isIntersecting) { seen = true; send(); } }), { threshold: 0.45 });
    io.observe(f);
    // if the animation finishes loading after it came into view, it says so and gets its start signal then
    addEventListener('message', (e) => { if (e.data === 'bhv-ready' && e.source === f.contentWindow && seen) send(); });
  }
  // model levels in the right order: Руководители руководителей first, then Line managers (numbers follow the new order)
  let mmPicked = false;
  function modelWords() {
    const hs = document.querySelector('.bmodel__hint span'); if (hs && hs.textContent !== 'Нажмите на область, чтобы увидеть поведение за ней') hs.textContent = 'Нажмите на область, чтобы увидеть поведение за ней';
    if (!mmPicked) { const row = [...document.querySelectorAll('.bmodel__row')].find((r) => /Руководители руководителей/.test(r.textContent)); if (row) { mmPicked = true; if (!row.classList.contains('bmodel__row--active')) row.click(); } }
    const ey = document.querySelector('.bmodel__ey-text'); if (ey && ey.textContent !== 'ЧТО МЫ ИЗМЕРЯЕМ') ey.textContent = 'ЧТО МЫ ИЗМЕРЯЕМ';
    const sub = document.querySelector('.bmodel__sub');
    if (sub && !(sub.nextElementSibling && sub.nextElementSibling.classList.contains('bmodel__sub2'))) { const p = document.createElement('p'); p.className = 'bmodel__sub2'; p.textContent = 'Мы смотрим на руководителей и команды с разных сторон: как они действуют в шести областях и что вокруг помогает им или мешает. Области у руководителей и команд общие, поэтому результаты складываются в одну картину, по которой можно действовать.'; sub.after(p); }
  }
  setInterval(modelWords, 400);
  setInterval(() => { const im = document.querySelector('.hc-cards .hc-cards-art'); if (im && !/cards-4-new/.test(im.getAttribute('src') || '')) im.setAttribute('src', 'assets/cards-4-new.webp'); }, 400);
  function modelOrder() {
    const rows = document.querySelectorAll('.bmodel__groups > .bmodel__row'); if (rows.length < 3) return;
    const want = ['02', '01', '03'];
    rows.forEach((r, i) => { const n = r.querySelector('.bmodel__row-num'); if (n && n.textContent !== want[i]) n.textContent = want[i]; });
  }
  setInterval(modelOrder, 400);
  if (window.BHV_MODELTRY) {
    const m = location.hash.match(/mv=([a-d])/); const mv = m ? m[1] : 'a';
    document.documentElement.classList.add('mv-' + mv);
    const names = { a: 'A · Wider box', b: 'B · Wider + bigger circles', c: 'C · Nearly full width', d: 'D · Wider, white box' };
    const bar = document.createElement('div'); bar.className = 'mv-bar';
    bar.innerHTML = '<span>Model</span>' + Object.keys(names).map((k) => '<button type="button" data-mv="' + k + '" aria-pressed="' + (k === mv) + '">' + names[k] + '</button>').join('');
    bar.addEventListener('click', (e) => { const b = e.target.closest('button'); if (!b) return; location.hash = 'v=ut&mv=' + b.dataset.mv; location.reload(); });
    const put = setInterval(() => { const el = document.querySelector('.bmodel'); if (!el) return; clearInterval(put); document.body.appendChild(bar); setTimeout(() => scrollTo({ top: el.getBoundingClientRect().top + scrollY - 70 }), 2500); }, 400);
  }
  function addStudio() {
    midLevel(); replayInView();
    linkInterviewRow(); no40(); confLine();
    const box = document.querySelector('#identify .container');
    if (box && !document.getElementById('interview-studio')) { const t = document.createElement('div'); t.innerHTML = studio; box.appendChild(t.firstElementChild); }
  }
  document.addEventListener('click', (e) => { const p = e.target.closest('#different .different__point'); if (!p || e.target.closest('.different__toggle') || e.target.closest('a')) return; const t = p.querySelector('.different__toggle'); if (t) t.click(); });
  let nav = null;
  function mark() {
    if (!nav) return;
    let cur = null;
    if (abp && abp.classList.contains('open')) cur = 'about';
    else if (window.bhvRecruitOpen && window.bhvRecruitOpen()) cur = 'recruitment';
    else {
      const y = innerHeight * 0.35; const top = (el) => (el ? el.getBoundingClientRect().top : Infinity);
      [['journey', stageEl(0)], ['programmes', document.querySelector('.bq-c, .bq')], ['journey', stageEl(3)], [null, document.querySelector('#different')], ['packages', document.querySelector('#packages')], [null, document.querySelector('#who')]].forEach(([k, el]) => { if (top(el) < y) cur = k; });
    }
    nav.querySelectorAll('[data-k]').forEach((a) => a.classList.toggle('on', a.dataset.k === cur));
  }

  function build() {
    const links = [...document.querySelectorAll('nav, header div, header ul, div, ul')].filter((e) => /How It Works/i.test(e.textContent) && /Packages|Пакеты/i.test(e.textContent) && e.textContent.length < 120 && e.getBoundingClientRect().top < 80).sort((a, b) => a.textContent.length - b.textContent.length)[0];
    if (!links || !document.querySelector('#contact')) return false;
    const st = document.createElement('style'); st.textContent = css; document.head.appendChild(st);
    const t = document.createElement('div'); t.innerHTML = aboutPage; abp = t.firstElementChild; document.body.appendChild(abp);
    abp.addEventListener('click', (e) => { if (e.target.closest('[data-close]')) { history.back(); } });
    // timeline: the big year follows the step in view
    const yb = abp.querySelector('.tl-year b'); const steps = [...abp.querySelectorAll('.tl-step')];
    const follow = () => { const mid = innerHeight * 0.45; let cur = steps[0]; steps.forEach((s) => { if (s.getBoundingClientRect().top < mid) cur = s; }); steps.forEach((s) => s.classList.toggle('cur', s === cur)); if (yb.textContent !== cur.dataset.y) { yb.style.opacity = '0'; setTimeout(() => { yb.textContent = cur.dataset.y; yb.style.opacity = '1'; const sm = abp.querySelector('.tl-year small'); if (sm) sm.textContent = cur.dataset.l; }, 180); } };
    abp.addEventListener('scroll', follow, { passive: true }); follow();

    nav = document.createElement('nav'); nav.className = 'sm-nav'; nav.setAttribute('aria-label', 'Главная');
    nav.innerHTML = `
      <div class="sm-dd"><button type="button" data-k="journey" aria-expanded="false" aria-haspopup="true">Как это работает ${chev}</button>
        <div class="sm-panel"><div class="sm-box">
          ${['Identify', 'Engage', 'Build', 'Measure'].map((n, i) => `<a href="#${n.toLowerCase()}" data-stage="${i}" style="--k:${C[i]}"><i>0${i + 1}</i>${n}</a>`).join('')}
        </div></div></div>
      <a href="#programmes" data-k="programmes">Программы</a><a href="#recruitment" data-k="recruitment">Подбор</a><a href="#packages" data-k="packages">Пакеты</a><a href="#about" data-k="about">О нас</a>`;
    links.classList.add('sm-hidden');
    links.parentNode.insertBefore(nav, links.nextSibling);
    // Log in: opens the app's own login page (user name and password are asked there)
    const demo = [...document.querySelectorAll('a, button')].find((x) => /^(Request a Demo|Запросить демо)$/i.test(x.textContent.trim()) && x.getBoundingClientRect().top < 120);
    if (demo && !document.querySelector('.sm-login')) { const li = document.createElement('a'); li.className = 'sm-login'; li.href = 'https://app.behavency.com/login'; li.textContent = 'Войти'; demo.parentNode.insertBefore(li, demo); }
    const dd = nav.querySelector('.sm-dd'); let hideT = 0;
    const setOpen = (v) => { clearTimeout(hideT); dd.classList.toggle('open', v); dd.querySelector('button').setAttribute('aria-expanded', v); };
    dd.addEventListener('mouseenter', () => setOpen(true));
    dd.addEventListener('mouseleave', () => { hideT = setTimeout(() => setOpen(false), 250); });
    document.addEventListener('click', (e) => { if (!dd.contains(e.target)) setOpen(false); });
    nav.addEventListener('click', (e) => {
      const b = e.target.closest('[data-k],[data-stage],[data-go]'); if (!b) return;
      if (b.tagName === 'A') e.preventDefault(); // 25 Nov: real links (href) for keyboard and search engines; the page itself decides what happens
      if (b.dataset.k === 'journey') { setOpen(!dd.classList.contains('open')); return; }
      setOpen(false);
      if (b.dataset.k === 'about') return openAbout();
      if (b.dataset.k === 'recruitment') { closeAbout(); return window.bhvOpenRecruit && window.bhvOpenRecruit(); }
      // 25 Nov: Programmes opens the full list of programmes (same as "Все программы")
      if (b.dataset.k === 'programmes' && window.bhvOpenProgrammes) return window.bhvLeave ? window.bhvLeave(window.bhvOpenProgrammes) : (closeAbout(), window.bhvCloseRecruit && window.bhvCloseRecruit(), window.bhvOpenProgrammes());
      if (b.dataset.stage) return go(stageEl(+b.dataset.stage));
      if (b.dataset.go) return go(document.querySelector(b.dataset.go));
      const map = { programmes: '.bq-c, .bq', hiring: '#hiring', packages: '#packages' };
      go(document.querySelector(map[b.dataset.k]));
    });
    addEventListener('scroll', mark, { passive: true }); mark();
    nineteen(); setTimeout(nineteen, 2000);
    addStudio(); setTimeout(addStudio, 1500); setTimeout(addStudio, 4000);
    if (/about/.test(location.hash)) openAbout();
    return true;
  }
  const t = setInterval(() => { if (document.querySelector('#contact') && build()) clearInterval(t); }, 400);
})();
