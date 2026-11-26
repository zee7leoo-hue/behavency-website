// Adds the "how a new stage starts" versions on top of a full copy of the Behavency test site.
// Pick a version with the bar at the bottom of the screen; the choice is kept in the page address (#v=…).
(function () {
  const SITE = window.BHV_SITE || 'desk'; // 'desk' or 'mob'
  const M = SITE === 'mob';
  const SEL = M ? ['#identify', '#engage', '#build', '#measure'] : ['#identify', '#engage', '.bs-section', '#measure'];
  const PILL = M ? ['.id-stage', '.eg-eyebrow', '.bd-eyebrow', '.ms-eyebrow'] : ['.stage-pill', '.stage-pill', '.stage-pill', '.stage-pill'];
  const END = '#how-we-measure';
  const C = ['#2f6fdb', '#7a4bd6', '#e0761c', '#14a07c'];
  const S = [
    { n: 'Identify', p: 'Найти сильные стороны и зоны роста' },
    { n: 'Engage', p: 'Увидеть, как команда работает на самом деле' },
    { n: 'Build', p: 'Развить нужные навыки' },
    { n: 'Measure', p: 'Показать, что изменилось' },
  ];
  const LINK = [
    'It starts with a clear picture of every manager: what they do well, and where they fall short.',
    'Once each manager knows their strengths and gaps, the team experiences them together.',
    'Once the team has seen how it really works, training goes where the gaps are.',
    'Once managers have applied what they learned at work, we check what changed.',
  ];
  const HAND = [
    ['After Identify', 'Each manager knows their strong areas and gaps.', 'Next: the team experiences them together.'],
    ['After Engage', 'The team has seen how it really works.', 'Next: training where the gaps are.'],
    ['After Build', 'Managers apply what they learned at work.', 'Next: we check what changed.'],
  ];
  const V = [
    { k: 'now', b: 'Now', t: 'Now: today’s site, unchanged' },
    { k: 'chapter', b: '1', t: '1 · Chapter opener: big number, stage name and promise' },
    { k: 'sticky', b: '2', t: '2 · Sticky label: follows you under the menu' },
    { k: 'handoff', b: '3', t: '3 · Handoff: what the last step gave, what comes next' },
    { k: 'wash', b: '4', t: '4 · Colour wash: each stage opens in its colour' },
    { k: 'steps', b: '5', t: '5 · Step map: the four steps at each start' },
    { k: 'combined', b: '★', t: '★ Combined: chapter opener + linking sentence + sticky label' },
    { k: 'label', b: 'B', t: 'B · Small coloured label above the heading, linking sentence under it' },
    { k: 'labelmenu', b: 'B+C', t: 'B+C · Label + the four steps appear in the menu while you are in the journey' },
    { k: 'labelline', b: 'B+E', t: 'B+E · Label + a thin progress line under the menu' },
    { k: 'small', b: '1S', t: '1S · Smaller chapter opener · one background for the whole journey · stages in the menu' },
    { k: 'strip', b: 'S', t: 'S · Stage strip at each start · one background for the whole journey · stages in the menu' },
    { k: 'numside', b: 'N', t: 'N · Stage number beside the heading, and the four stages in the menu' },
    { k: 'p2', b: '2', t: '2 · Chapter opener: outlined number, stage name, promise and a 4-part bar' },
    { k: 'p6', b: '6', t: '6 · The four numbers with this one lit, then the stage name and promise' },
    { k: 'v2b', b: '2', t: '2 · Outlined number, stage name and promise, with a short 4-part indicator' },
    { k: 'v5', b: '5', t: '5 · Stage name in a soft gradient, with a short line under the promise' },
    { k: 'v8', b: '8', t: '8 · Stage icon, with the stage name in its colour' },
    { k: 'aw', b: 'W', t: 'W · Big pale number behind the stage name, attached to the heading' },
    { k: 'a2', b: '2', t: '2 · Outlined number, stage name and a short 4-part indicator, attached to the heading' },
    { k: 'a5', b: '5', t: '5 · Stage name in a soft gradient with a short line, attached to the heading' },
    { k: 'c1', b: '1', t: '1 · Full-screen chapter card before each stage' },
    { k: 'c2', b: '2', t: '2 · Chapter card with an arc line, like crossing a threshold' },
    { k: 'c3', b: '3', t: '3 · The stage’s promise fills in as you scroll' },
    { k: 'ug', b: 'Gradient', t: 'Whole site, one background: soft white-to-lavender, like the landing page' },
    { k: 'uw', b: 'White', t: 'Whole site, one background: plain almost-white' },
    { k: 'ut', b: 'Tint', t: 'Whole site, one background: one soft lavender-tinted off-white' },
    { k: 'ul', b: 'Light tint', t: 'Whole site, one background: the same tint, one step lighter' },
    { k: 'ub', b: 'Soft gradient', t: 'Whole site, one background: a gentler, more balanced gradient' },
    { k: 'c6', b: '3+2', t: '3 + 2 · The promise fills in, then the half circle draws across' },
    { k: 'c5', b: '5', t: '5 · Centred title with a coloured highlight, lots of air' },
    { k: 'tint', b: 'F', t: M ? 'F · B+E on one background, with a light tint of each stage’s colour' : 'F · B on one background, with a light tint of each stage’s colour' },
  ];
  // Sections that belong to each stage (used by F to give the whole stage one light tint).
  const GROUPS = M
    ? [['#identify', '#behavioural-model'], ['#engage', '#play'], ['#build', '#journey'], ['#measure', '#how-we-measure']]
    : [['#identify', '.bmodel', '#why-areas-matter', '#two-gaps'], ['#engage'], ['.bs-section', '#delivery-v2'], ['#measure', '#how-we-measure']];
  const TINT = ['#f2f6fe', '#f6f3fe', '#fdf5ee', '#eff8f4'];
  // On desktop only Now, 1, 2 and ★ are kept (3, 4 and 5 were dropped after review).
  const SET3 = window.BHV_SET === 'r3';
  const SET4 = window.BHV_SET === 'r4';
  const SET5 = window.BHV_SET === 'r5';
  const VV = SET5 ? V.filter((v) => ['ug', 'ub', 'ut', 'ul', 'uw'].includes(v.k)) : SET4 ? V.filter((v) => ['c1', 'c2', 'c3', 'c6', 'c5'].includes(v.k)) : SET3 ? V.filter((v) => ['aw', 'a2', 'a5'].includes(v.k)) : M ? V : V.filter((v) => ['now', 'small', 'p2', 'p6'].includes(v.k));
  // phone: no plain B and no menu steps (the phone menu is a burger)
  if (M) { for (const k of ['label', 'labelmenu']) VV.splice(VV.findIndex((v) => v.k === k), 1); }
  const read = () => { if (SET5) return 'ul'; const m = location.hash.match(/v=([a-z0-9]+)/); return m && VV.some((v) => v.k === m[1]) ? m[1] : (SET5 ? 'ul' : SET4 ? 'c1' : SET3 ? 'aw' : M ? 'combined' : 'p2'); };
  const cur = read();

  const css = `
  .bx-o, .bx-o * { box-sizing: border-box; }
  .bx-o { font-family: Inter, Arial, sans-serif; color: #0f1b3d; position: relative; z-index: 2; }
  .bx-in { max-width: 1200px; margin: 0 auto; padding: 0 ${M ? 24 : 48}px; }
  .bx-hide { display: none !important; }
  /* desktop: when a stage start is added, line the Engage and Build content up under it instead of centring it lower down */
  body.bx-placed #engage .be-top-layer { align-items: flex-start !important; padding-top: 96px !important; }
  body.bx-placed .bs-split { align-items: flex-start !important; }
  body.bx-placed .bs-header { margin-top: 0 !important; padding-top: 0 !important; }
  /* chapter opener */
  .bx-chap { padding: ${M ? '48px 0 8px' : '110px 0 10px'}; }
  .bx-chap .bx-in { display: grid; grid-template-columns: auto minmax(0, 1fr); gap: ${M ? '4px 16px' : '6px 40px'}; align-items: end; }
  .bx-num { font: 700 ${M ? 86 : 168}px/0.8 "Source Serif 4", Georgia, serif; color: transparent; -webkit-text-stroke: ${M ? 1.5 : 2}px var(--k); grid-row: span 2; }
  .bx-nm { font: 700 ${M ? 12.5 : 15}px/1 Inter, sans-serif; letter-spacing: .16em; text-transform: uppercase; color: var(--k); }
  .bx-pr { font: 600 ${M ? 23 : 38}px/1.12 "Source Serif 4", Georgia, serif; color: #0f1b3d; }
  .bx-lnk { grid-column: ${M ? '1 / -1' : '2'}; font-size: ${M ? 15 : 17}px; line-height: 1.5; color: #4f5770; max-width: 640px; margin-top: ${M ? 10 : 6}px; }
  .bx-mini { grid-column: 1 / -1; display: flex; gap: 6px; margin-top: ${M ? 14 : 22}px; }
  .bx-mini i { height: 4px; flex: 1; border-radius: 4px; background: rgba(15,27,61,.1); }
  .bx-mini i.on { background: var(--k); }
  .bx-rule { grid-column: 1 / -1; height: 1px; background: rgba(15,27,61,.1); margin-top: ${M ? 22 : 34}px; }
  /* sticky label */
  .bx-stick { position: fixed; left: 0; right: 0; z-index: 9990; background: rgba(255,255,255,.95); backdrop-filter: blur(8px); -webkit-backdrop-filter: blur(8px); border-bottom: 1px solid rgba(15,27,61,.08); box-shadow: 0 6px 18px rgba(15,27,61,.06); transform: translateY(-120%); opacity: 0; transition: transform .25s, opacity .25s; pointer-events: none; }
  .bx-stick.on { transform: none; opacity: 1; }
  .bx-stick .bx-in { display: flex; align-items: center; gap: 14px; height: ${M ? 42 : 48}px; }
  .bx-sl { font: 600 ${M ? 13.5 : 14.5}px/1 Inter, sans-serif; white-space: nowrap; display: flex; gap: 8px; align-items: center; overflow: hidden; }
  .bx-sl i { font: italic 500 ${M ? 13.5 : 15}px/1 "Source Serif 4", Georgia, serif; color: var(--k); }
  .bx-sl span { color: #5a6278; font-weight: 400; }
  .bx-segs { display: flex; gap: 5px; margin-left: auto; width: ${M ? 100 : 240}px; flex: none; }
  .bx-segs i { flex: 1; height: 4px; border-radius: 4px; background: rgba(15,27,61,.1); transition: background .25s; }
  .bx-segs i.on { background: var(--k); }
  .bx-nx { font-size: 13px; color: #5a6278; white-space: nowrap; }
  /* handoff */
  .bx-hand { padding: ${M ? '34px 0 6px' : '70px 0 10px'}; }
  .bx-hc { display: flex; gap: 18px; align-items: center; background: #fff; border: 1px solid rgba(15,27,61,.1); border-radius: 16px; padding: 16px 20px; max-width: 780px; margin: 0 auto; box-shadow: 0 8px 24px rgba(15,27,61,.07); }
  .bx-hc small { display: block; font: 700 11px/1 Inter, sans-serif; letter-spacing: .12em; text-transform: uppercase; margin-bottom: 6px; }
  .bx-from { color: #5a6278; font-size: 15px; line-height: 1.4; flex: 1; }
  .bx-to { color: #0f1b3d; font-weight: 600; font-size: 15px; line-height: 1.4; flex: 1; }
  .bx-arw { display: grid; place-items: center; width: 38px; height: 38px; border-radius: 50%; color: #fff; font-size: 17px; flex: none; }
  .bx-line { width: 2px; height: ${M ? 26 : 40}px; margin: 0 auto; border-radius: 2px; }
  ${M ? '.bx-hc { flex-direction: column; align-items: flex-start; gap: 10px; padding: 14px 16px; } .bx-arw { width: 30px; height: 30px; transform: rotate(90deg); font-size: 14px; } .bx-from, .bx-to { font-size: 14.5px; }' : ''}
  /* colour wash */
  .bx-washed { border-top: 4px solid var(--k) !important; }
  .bx-pillfill { background: var(--k) !important; color: #fff !important; box-shadow: 0 6px 18px rgba(0,0,0,.12) !important; border-color: transparent !important; }
  .bx-pillfill * { color: #fff !important; border-color: rgba(255,255,255,.45) !important; -webkit-text-fill-color: #fff !important; }
  .bx-pillfill [class*=line], .bx-pillfill i[aria-hidden], .bx-pillfill u { background: rgba(255,255,255,.6) !important; }
  /* step map */
  .bx-steps { padding: ${M ? '44px 0 4px' : '96px 0 6px'}; }
  .bx-steps ol { list-style: none; margin: 0; padding: 0; display: grid; grid-template-columns: repeat(4, minmax(0, 1fr)); }
  .bx-steps li { position: relative; display: grid; justify-items: start; gap: 8px; padding-right: 10px; font: 600 ${M ? 11.5 : 14.5}px/1.2 Inter, sans-serif; color: #9aa0b4; }
  .bx-steps li::after { content: ""; position: absolute; left: ${M ? 28 : 36}px; right: 6px; top: ${M ? 11 : 14}px; height: 2px; background: rgba(15,27,61,.1); }
  .bx-steps li:last-child::after { display: none; }
  .bx-steps b { width: ${M ? 24 : 30}px; height: ${M ? 24 : 30}px; border-radius: 50%; border: 2px solid #cfd2de; background: #fff; display: grid; place-items: center; font-size: ${M ? 11 : 12.5}px; z-index: 1; color: #9aa0b4; }
  .bx-steps li.done { color: #5a6278; } .bx-steps li.done b { background: var(--k); border-color: var(--k); color: #fff; }
  .bx-steps li.done::after { background: var(--k); }
  .bx-steps li.cur { color: #0f1b3d; } .bx-steps li.cur b { background: var(--k); border-color: var(--k); color: #fff; box-shadow: 0 0 0 6px color-mix(in srgb, var(--k) 20%, transparent); }
  .bx-steps small { font-weight: 400; font-size: 13px; color: #5a6278; ${M ? 'display:none;' : ''} }
  .bx-steps li:not(.cur) small { display: none; }
  /* B: small coloured label + linking sentence */
  .bx-lab { display: flex; align-items: center; gap: 10px; font: 700 ${M ? 12.5 : 13.5}px/1 Inter, sans-serif; letter-spacing: .14em; text-transform: uppercase; color: var(--k); margin: 0 0 ${M ? 14 : 20}px; }
  .bx-lab b { font: italic 500 ${M ? 16 : 18}px/1 "Source Serif 4", Georgia, serif; letter-spacing: 0; }
  .bx-lab i { width: 26px; height: 1.5px; background: var(--k); display: block; }
  .bx-lab em { font-style: normal; font-weight: 500; letter-spacing: .08em; color: #8a90a6; }
  .bx-lead { display: block; font: 400 ${M ? 15.5 : 17}px/1.5 Inter, sans-serif !important; letter-spacing: 0 !important; color: #4f5770 !important; -webkit-text-fill-color: #4f5770 !important; margin: ${M ? 12 : 16}px 0 0; max-width: 520px; text-transform: none; }
  .bx-lead::before { content: ""; display: block; width: 28px; height: 2px; background: var(--k); margin-bottom: 10px; }
  /* C: steps in the menu */
  .bx-menu { position: fixed; z-index: 9995; display: flex; align-items: center; gap: 30px; font: 500 14.5px/1 Inter, sans-serif; opacity: 0; pointer-events: none; transition: opacity .2s; }
  .bx-menu.on { opacity: 1; pointer-events: auto; }
  .bx-menu a { color: #9aa0b4; text-decoration: none; position: relative; padding: 8px 0; cursor: pointer; display: flex; gap: 6px; align-items: center; }
  .bx-menu a i { font: italic 500 13px/1 "Source Serif 4", Georgia, serif; }
  .bx-menu a.done { color: #4f5770; }
  .bx-menu a.cur { color: #0f1b3d; font-weight: 600; }
  .bx-menu a.cur::after { content: ""; position: absolute; left: 0; right: 0; bottom: -2px; height: 2px; border-radius: 2px; background: var(--k); }
  .bx-menu a.cur i { color: var(--k); }
  .bx-menuhide { visibility: hidden !important; }
  /* E: progress line under the menu */
  .bx-line4 { position: fixed; left: 0; right: 0; height: 3px; z-index: 9994; display: grid; grid-template-columns: repeat(4, 1fr); gap: 3px; opacity: 0; transition: opacity .2s; pointer-events: none; }
  .bx-line4.on { opacity: 1; }
  .bx-line4 i { background: rgba(15,27,61,.08); position: relative; overflow: hidden; display: block; }
  .bx-line4 i b { position: absolute; left: 0; top: 0; bottom: 0; width: 0; display: block; }
  /* 1S: smaller chapter opener */
  .bx-chap.sm .bx-in { gap: 4px 28px; }
  .bx-chap.sm .bx-num { font-size: 84px; font-weight: 600; color: var(--k); -webkit-text-stroke: 0; }
  .bx-chap.sm .bx-rule { height: 3px; background: linear-gradient(90deg, var(--k) 0 120px, rgba(15,27,61,.1) 120px); }
  .bx-chap.sm .bx-nm { font-size: 13px; }
  .bx-chap.sm .bx-pr { font-size: 28px; }
  .bx-chap.sm .bx-rule { margin-top: 24px; }
  /* S: stage strip */
  .bx-strip .bx-in > div { display: flex; align-items: center; gap: 22px; border-top: 3px solid var(--k); border-bottom: 1px solid rgba(15,27,61,.12); padding: 24px 0; background: linear-gradient(color-mix(in srgb, var(--k) 7%, transparent), transparent); padding-left: 20px; padding-right: 20px; }
  .bx-strip .sn { font: 600 46px/1 "Source Serif 4", Georgia, serif; color: var(--k); min-width: 60px; }
  .bx-strip .sl { font: 700 13px/1 Inter, sans-serif; letter-spacing: .16em; text-transform: uppercase; color: var(--k); white-space: nowrap; }
  .bx-strip .sb { width: 1px; height: 28px; background: rgba(15,27,61,.15); }
  .bx-strip .sp { font: 600 24px/1.2 "Source Serif 4", Georgia, serif; color: #0f1b3d; flex: 1; }
  .bx-strip .ss { font: 500 13px/1 Inter, sans-serif; color: #8a90a6; white-space: nowrap; }
  /* N: number beside the heading */
  .bx-numin { display: inline-block; font: italic 500 0.5em/1 "Source Serif 4", Georgia, serif !important; color: var(--k) !important; -webkit-text-fill-color: var(--k) !important; vertical-align: 0.7em; margin-right: 0.28em; letter-spacing: 0 !important; background: none !important; }
  .bx-nlab { font: 600 13px/1 Inter, sans-serif; letter-spacing: .14em; text-transform: uppercase; color: #8a90a6; margin: 0 0 18px; }
  .bx-nlab b { color: var(--k); font-weight: 700; }
  /* shared stage header (2 and 6) */
  .bx-hd .bx-in { display: grid; align-items: center; }
  .bx-hd .nm { font: 700 34px/1.05 Inter, sans-serif; letter-spacing: -.015em; color: #0f1b3d; }
  .bx-hd .pr { font: 400 18px/1.4 Inter, sans-serif; color: #5a6278; margin-top: 8px; }
  .bx-hd .of { font: 600 12px/1 Inter, sans-serif; letter-spacing: .14em; text-transform: uppercase; color: #8a90a6; margin-bottom: 10px; display: block; }
  /* 2 · outlined number + name + 4-part bar */
  .bx-p2 .bx-in { grid-template-columns: auto minmax(0, 1fr); gap: 4px 32px; align-items: end; }
  .bx-p2 .num { font: 700 118px/.8 "Source Serif 4", Georgia, serif; color: transparent; -webkit-text-stroke: 2px var(--k); grid-row: span 3; }
  .bx-p2 .bar { grid-column: 1 / -1; display: flex; gap: 6px; margin-top: 24px; }
  .bx-p2 .bar i { flex: 1; height: 4px; border-radius: 4px; background: #e2deec; display: block; }
  .bx-p2 .bar i.on { background: var(--k); }
  /* 6 · 1 2 3 4, this one lit */
  .bx-p6 .bx-in { grid-template-columns: auto 1px minmax(0, 1fr); gap: 0 34px; }
  .bx-p6 .seq { display: flex; align-items: baseline; gap: 14px; font: 600 40px/1 "Source Serif 4", Georgia, serif; }
  .bx-p6 .seq span { color: #cfcbdb; }
  .bx-p6 .seq span.done { color: #a9bce6; }
  .bx-p6 .seq span.on { color: var(--k); font-size: 78px; }
  .bx-p6 .dv { align-self: stretch; background: #e4e0ec; }
  /* calmer labels inside a stage */
  .bx-calm { color: #8a90a6 !important; -webkit-text-fill-color: #8a90a6 !important; background: none !important; box-shadow: none !important; border-color: #dcd8e6 !important; }
  /* round 6 */
  body.bx-keepcenter .bs-split { align-items: center !important; }
  .bx-r6 .bx-in { display: block; }
  .bx-r6 .of { font: 600 12px/1 Inter, sans-serif; letter-spacing: .14em; text-transform: uppercase; color: #8a90a6; }
  .bx-r6 .pr { font: 400 18px/1.4 Inter, sans-serif; color: #5a6278; margin-top: 8px; }
  .bx-v2b .bx-in { display: grid; grid-template-columns: auto minmax(0, 1fr); gap: 0 32px; align-items: center; }
  .bx-v2b .num { font: 700 112px/.8 "Source Serif 4", Georgia, serif; color: transparent; -webkit-text-stroke: 2px var(--k); }
  .bx-v2b .row { display: flex; align-items: center; gap: 14px; margin-bottom: 10px; }
  .bx-v2b .mini { display: flex; gap: 4px; width: 120px; }
  .bx-v2b .mini i { flex: 1; height: 4px; border-radius: 4px; background: #e2deec; display: block; }
  .bx-v2b .mini i.on { background: var(--k); }
  .bx-v2b .nm { font: 700 34px/1.05 Inter, sans-serif; letter-spacing: -.015em; color: #0f1b3d; }
  .bx-v5 .of { display: block; margin-bottom: 10px; }
  .bx-v5 .gn { font: 800 52px/1.05 Inter, sans-serif; letter-spacing: -.03em; background: linear-gradient(90deg, var(--k), color-mix(in srgb, var(--k) 45%, #e77bb8)); -webkit-background-clip: text; background-clip: text; color: transparent; -webkit-text-fill-color: transparent; display: inline-block; padding-bottom: 4px; }
  .bx-v5 .ln { width: 60px; height: 2px; border-radius: 2px; margin-top: 18px; background: linear-gradient(90deg, var(--k), transparent); }
  .bx-v8 .bx-in { display: flex; align-items: center; gap: 22px; }
  .bx-v8 .tile { width: 76px; height: 76px; border-radius: 22px; background: color-mix(in srgb, var(--k) 13%, #fff); color: var(--k); display: grid; place-items: center; flex: none; }
  .bx-v8 .tile svg { width: 38px; height: 38px; }
  .bx-v8 .nm { font: 700 34px/1.05 Inter, sans-serif; letter-spacing: -.015em; color: var(--k); margin-top: 6px; }
  /* round 7: attached to the heading */
  .bx-at { position: relative; margin: 0 0 26px; text-align: left; }
  .bx-at .of { font: 600 12px/1 Inter, sans-serif; letter-spacing: .14em; text-transform: uppercase; color: #8a90a6; }
  .bx-at .nm { font: 700 32px/1.05 Inter, sans-serif; letter-spacing: -.015em; color: var(--k); }
  .bx-at .pr { font: 400 16.5px/1.4 Inter, sans-serif; color: #5a6278; margin-top: 6px; }
  .bx-aw { padding-top: 46px; }
  .bx-aw .wm { position: absolute; left: -10px; top: -34px; font: 600 160px/1 "Source Serif 4", Georgia, serif; letter-spacing: -.04em; color: var(--k); opacity: .1; pointer-events: none; z-index: -1; }
  .bx-aw .of { display: block; margin-bottom: 8px; color: var(--k); }
  .bx-a2 { display: grid; grid-template-columns: auto minmax(0, 1fr); gap: 0 22px; align-items: center; }
  .bx-a2 .num { font: 700 84px/.8 "Source Serif 4", Georgia, serif; color: transparent; -webkit-text-stroke: 1.8px var(--k); }
  .bx-a2 .row { display: flex; align-items: center; gap: 12px; margin-bottom: 8px; }
  .bx-a2 .mini { display: flex; gap: 4px; width: 96px; }
  .bx-a2 .mini i { flex: 1; height: 4px; border-radius: 4px; background: #e2deec; display: block; }
  .bx-a2 .mini i.on { background: var(--k); }
  .bx-a5 .of { display: block; margin-bottom: 8px; }
  .bx-a5 .gn { font: 800 46px/1.05 Inter, sans-serif; letter-spacing: -.03em; background: linear-gradient(90deg, var(--k), color-mix(in srgb, var(--k) 45%, #e77bb8)); -webkit-background-clip: text; background-clip: text; color: transparent; -webkit-text-fill-color: transparent; display: inline-block; padding-bottom: 3px; }
  .bx-a5 .ln { width: 56px; height: 2px; border-radius: 2px; margin-top: 16px; background: linear-gradient(90deg, var(--k), transparent); }
  ${SITE === 'desk' ? '#delivery-v2 .dv3-canvas { width: 67% !important; } #delivery-v2 .dv3-bg { -webkit-mask-image: linear-gradient(90deg, transparent 0, #000 9%, #000 91%, transparent 100%), linear-gradient(180deg, transparent 0, #000 9%, #000 88%, transparent 100%); -webkit-mask-composite: source-in; mask-image: linear-gradient(90deg, transparent 0, #000 9%, #000 91%, transparent 100%), linear-gradient(180deg, transparent 0, #000 9%, #000 88%, transparent 100%); mask-composite: intersect; }' : ''}
  html.bxu-soft #engage .xc-ecard { background: #fff !important; box-shadow: 0 0 0 1px rgba(20,35,75,.07), 0 28px 60px -28px rgba(40,30,110,.22) !important; }
  /* round 8: chapter moments between stages */
  .bx-ch { position: relative; background: #f8f7fb; overflow: hidden; font-family: Inter, Arial, sans-serif; }
  .bx-ch .wrap { min-height: 86vh; display: flex; flex-direction: column; align-items: center; justify-content: center; text-align: center; padding: 80px 24px; position: relative; z-index: 1; }
  .bx-ch .eb { display: inline-flex; align-items: center; gap: 12px; font: 700 13px/1 Inter, sans-serif; letter-spacing: .18em; text-transform: uppercase; color: var(--k); }
  .bx-ch .eb::before, .bx-ch .eb::after { content: ""; width: 32px; height: 1.5px; background: currentColor; opacity: .5; }
  .bx-ch .big { font: 500 128px/1 "Playfair Display", "Source Serif 4", Georgia, serif; letter-spacing: -.02em; color: #0f1b3d; margin: 22px 0 0; }
  .bx-ch .big em { font-style: italic; color: var(--k); }
  .bx-ch .pr { font: 400 22px/1.45 Inter, sans-serif; color: #4f5770; margin: 22px 0 0; max-width: 640px; }
  .bx-ch .anim { opacity: 0; transform: translateY(34px); filter: blur(6px); transition: opacity 1.1s cubic-bezier(.2,.7,.2,1), transform 1.1s cubic-bezier(.2,.7,.2,1), filter 1.1s cubic-bezier(.2,.7,.2,1); }
  .bx-ch.in .anim { opacity: 1; transform: none; filter: none; }
  .bx-ch.in .anim.d2 { transition-delay: .18s; } .bx-ch.in .anim.d3 { transition-delay: .4s; }
  /* 2: arc */
  .bx-c2 .wrap { justify-content: flex-start; padding-top: 15vh; min-height: 80vh; }
  .bx-o.bx-c2 { z-index: 1; margin-bottom: -110px; background: #f8f7fb !important; pointer-events: none; }
  .bx-c2 .glow { -webkit-mask-image: linear-gradient(to bottom, #000 35%, transparent 92%); mask-image: linear-gradient(to bottom, #000 35%, transparent 92%); }
  .bx-c2 svg.arc { position: absolute; left: 50%; transform: translateX(-50%); top: 31vh; width: 124vw; max-width: 2200px; height: 60vh; z-index: 0; overflow: visible; }
  .bx-c2 svg.arc path { fill: none; stroke-width: 1.4; stroke-linecap: round; vector-effect: non-scaling-stroke; stroke-dasharray: 3000; stroke-dashoffset: 3000; transition: stroke-dashoffset 2.1s cubic-bezier(.45,.05,.25,1) 0s; filter: drop-shadow(0 0 6px color-mix(in srgb, var(--k) 45%, transparent)); }
  .bx-c2.in svg.arc path { stroke-dashoffset: 0; }
  .bx-c2 .glow { position: absolute; left: 0; right: 0; bottom: 0; height: 46vh; background: radial-gradient(50% 90% at 50% 100%, color-mix(in srgb, var(--k) 7%, transparent), transparent 70%); z-index: 0; opacity: 0; transition: opacity 2s ease .6s; }
  .bx-c2.in .glow { opacity: 1; }
  /* 3+2 */
  .bx-c6 .wrap { min-height: 80vh !important; }
  .bx-c6 .glow { transition-delay: 1.4s !important; }
  /* 3: promise fills in */
  .bx-c3 .wrap { min-height: 86vh; }
  .bx-c3 .eb3 { display: inline-flex; align-items: center; gap: 14px; }
  .bx-c3 .eb3::before, .bx-c3 .eb3::after { content: ""; width: 40px; height: 1.5px; background: var(--k); opacity: .45; }
  .bx-c3 .eb3 .eb { display: inline; }
  .bx-c3 .eb3 .eb::before, .bx-c3 .eb3 .eb::after { display: none; }
  .bx-c3 .eb3 .nm { font: italic 500 30px/1 "Playfair Display", "Source Serif 4", Georgia, serif; color: #0f1b3d; letter-spacing: -.005em; }
  .bx-c3 .eb3 .sep { width: 5px; height: 5px; border-radius: 50%; background: var(--k); opacity: .6; }
  .bx-c3 .stmt { font: 500 64px/1.12 "Playfair Display", "Source Serif 4", Georgia, serif; letter-spacing: -.015em; max-width: 1000px; margin: 24px 0 0; }
  .bx-c3 .stmt { margin-top: 30px; }
  .bx-c3 .stmt span { color: #d9d6e3; transition: color .7s ease; }
  .bx-c3.in .stmt span { color: #0f1b3d; }
  .bx-c3 .stmt span.k, .bx-c3.in .stmt span.k { color: var(--k); }
  /* 5: centred title with highlight */
  .bx-c5 .wrap { min-height: 70vh; }
  .bx-c5 .big { font-size: 104px; }
  .bx-c5 .big .hl { display: inline-block; font-style: normal; color: #0f1b3d; line-height: 1.05; background: color-mix(in srgb, var(--k) 18%, transparent); border-radius: 22px; padding: 4px 30px 10px; }
  @media (prefers-reduced-motion: reduce) { .bx-ch .anim, .bx-c2 svg.arc path { transition: none; opacity: 1; transform: none; stroke-dashoffset: 0; } }
  /* version bar */
  .bx-bar { position: fixed; left: 50%; bottom: ${M ? 10 : 18}px; transform: translateX(-50%); z-index: 99999; display: flex; align-items: center; gap: ${M ? 1 : 4}px; background: #0f1b3d; color: #fff; border-radius: 999px; padding: 5px; box-shadow: 0 10px 30px rgba(0,0,0,.3); font: 600 13px/1 Inter, sans-serif; max-width: calc(100vw - 16px); }
  .bx-bar span { padding: 0 8px 0 10px; opacity: .7; white-space: nowrap; ${M ? 'display:none;' : ''} }
  .bx-bar button { border: 0; background: transparent; color: #fff; font: inherit; min-width: ${M ? 32 : 38}px; height: ${M ? 38 : 34}px; border-radius: 999px; cursor: pointer; padding: 0 ${M ? 6 : 10}px; }
  .bx-bar button[aria-pressed="true"] { background: #fff; color: #0f1b3d; }
  .bx-cap { position: fixed; left: 50%; bottom: ${M ? 58 : 64}px; transform: translateX(-50%); z-index: 99999; background: rgba(15,27,61,.92); color: #fff; font: 500 13px/1.35 Inter, sans-serif; padding: 8px 14px; border-radius: 10px; max-width: calc(100vw - 24px); text-align: center; transition: opacity .4s; pointer-events: none; }
  `;

  const el = (h) => { const d = document.createElement('div'); d.innerHTML = h.trim(); return d.firstElementChild; };
  const bgOf = (node) => { let n = node; while (n && n !== document.documentElement) { const c = getComputedStyle(n).backgroundColor; if (c && c !== 'rgba(0, 0, 0, 0)' && c !== 'transparent') return c; n = n.parentElement; } return '#fff'; };

  const chap = (k, withMini, withLink) => el(`<div class="bx-o bx-chap" data-bx style="--k:${C[k]}"><div class="bx-in"><div class="bx-num">0${k + 1}</div><div class="bx-nm">Этап ${k + 1} из 4 · ${S[k].n}</div><div class="bx-pr">${S[k].p}</div>${withLink ? `<div class="bx-lnk">${LINK[k]}</div>` : ''}${withMini ? `<div class="bx-mini">${S.map((_, i) => `<i class="${i <= k ? 'on' : ''}"></i>`).join('')}</div>` : ''}<div class="bx-rule"></div></div></div>`);
  const steps = (k) => el(`<div class="bx-o bx-steps" data-bx style="--k:${C[k]}"><div class="bx-in"><ol>${S.map((s, i) => `<li class="${i < k ? 'done' : i === k ? 'cur' : ''}"><b>${i < k ? '✓' : i + 1}</b>${s.n}<small>${s.p}</small></li>`).join('')}</ol></div></div>`);
  const hand = (k) => el(`<div class="bx-o bx-hand" data-bx><div class="bx-in"><div class="bx-hc"><div class="bx-from"><small style="color:${C[k - 1]}">${HAND[k - 1][0]}</small>${HAND[k - 1][1]}</div><div class="bx-arw" style="background:linear-gradient(135deg,${C[k - 1]},${C[k]})">→</div><div class="bx-to"><small style="color:${C[k]}">Этап ${k + 1} · ${S[k].n}</small>${HAND[k - 1][2]}</div></div><div class="bx-line" style="background:linear-gradient(${C[k]},transparent)"></div></div></div>`);

  function place(node, section) {
    // Put the new block at the very top inside the stage section, so it sits on the stage's own background
    // and the stage content follows straight after it.
    const cs = getComputedStyle(section);
    const pt = parseFloat(cs.paddingTop) || 0, pl = parseFloat(cs.paddingLeft) || 0;
    const want = M ? 40 : (node.classList.contains('bx-hd') ? 150 : node.classList.contains('sm') || node.classList.contains('bx-strip') ? 64 : 96);
    node.style.paddingTop = Math.max(0, want - pt) + 'px';
    node.style.paddingBottom = (M ? 26 : (node.classList.contains('bx-hd') ? 40 : node.classList.contains('sm') || node.classList.contains('bx-strip') ? 28 : 44)) + 'px';
    if (pl >= 12) { const inn = node.querySelector('.bx-in'); if (inn) { inn.style.padding = '0'; inn.style.maxWidth = 'none'; } }
    if (!M && section.matches('#measure')) { node.style.background = ONE_BG; node.style.paddingTop = '72px'; section.parentNode.insertBefore(node, section); return; }
    section.insertBefore(node, section.firstChild);
  }

  function heading(sec) { return sec.querySelector('h1, h2'); }
  function label(sec, k, pill) {
    const lab = el(`<div class="bx-o bx-lab" data-bx style="--k:${C[k]}"><b>0${k + 1}</b><i></i>${S[k].n}<em>· Этап ${k + 1} из 4</em></div>`);
    const h = heading(sec);
    // put the label where the pill was; where the pill sits under the heading (phone Identify), go above the heading
    if (pill && h && (pill.compareDocumentPosition(h) & Node.DOCUMENT_POSITION_FOLLOWING)) pill.parentNode.insertBefore(lab, pill);
    else if (h) h.parentNode.insertBefore(lab, h);
    if (pill) pill.classList.add('bx-hide');
    if (!M) document.body.classList.add('bx-placed');
    if (!h) return;
    // the coloured words in the heading take the stage colour, so each stage keeps one colour
    h.querySelectorAll('*').forEach((e) => { if (getComputedStyle(e).fontStyle === 'italic') { e.style.setProperty('color', C[k], 'important'); e.style.setProperty('-webkit-text-fill-color', C[k], 'important'); e.style.setProperty('background', 'none', 'important'); } });
    const ul = h.nextElementSibling; if (ul && ul.tagName.toLowerCase() === 'svg') ul.querySelectorAll('path').forEach((p) => p.setAttribute('stroke', C[k]));
    const lead = el(`<span class="bx-lead" data-bx style="--k:${C[k]}">${LINK[k]}</span>`);
    const nx = h.nextElementSibling;
    if (getComputedStyle(h).position === 'absolute') h.appendChild(lead);
    else if (nx && nx.tagName.toLowerCase() === 'svg') nx.after(lead);
    else h.after(lead);
  }
  function state() {
    const secs = SEL.map((x) => document.querySelector(x));
    if (secs.some((x) => !x)) return null;
    if (!header || !header.isConnected) header = findHeader();
    const hb = header ? Math.max(0, header.getBoundingClientRect().bottom) : 0;
    const probe = hb + innerHeight * 0.3;
    let k = 0; secs.forEach((x, i) => { if (x.getBoundingClientRect().top <= probe) k = i; });
    const endEl = document.querySelector(END) || secs[3];
    const tops = secs.map((x) => x.getBoundingClientRect().top + scrollY).concat(endEl.getBoundingClientRect().bottom + scrollY);
    const y = scrollY + probe;
    const frac = [0, 1, 2, 3].map((i) => Math.max(0, Math.min(1, (y - tops[i]) / (tops[i + 1] - tops[i]))));
    const inside = secs[0].getBoundingClientRect().top <= hb + 40 && endEl.getBoundingClientRect().bottom > hb + 120;
    return { secs, hb, k, frac, inside };
  }
  let menu = null, links = null, line = null;
  function menuSteps() {
    if (window.BHV_NOMENU) return; // a page with its own menu (site-menu.js)
    if (menu) return;
    links = [...document.querySelectorAll('nav, header, div, ul')].filter((e) => /How It Works/i.test(e.textContent) && /Packages|Пакеты/i.test(e.textContent) && e.textContent.length < 120 && e.getBoundingClientRect().top < 80).sort((a, b) => a.textContent.length - b.textContent.length)[0] || null;
    menu = el(`<nav class="bx-o bx-menu" data-bx aria-label="Journey">${S.map((x, i) => `<a data-i="${i}" style="--k:${C[i]}"><i>0${i + 1}</i>${x.n}</a>`).join('')}</nav>`);
    menu.addEventListener('click', (e) => { const a = e.target.closest('a'); if (!a) return; const sec = document.querySelector(SEL[+a.dataset.i]); scrollTo({ top: sec.getBoundingClientRect().top + scrollY - 70, behavior: 'smooth' }); });
    document.body.appendChild(menu);
  }
  function progressLine() {
    if (line) return;
    line = el(`<div class="bx-o bx-line4" data-bx>${C.map((c) => `<i><b style="background:${c}"></b></i>`).join('')}</div>`);
    document.body.appendChild(line);
  }
  function updExtras() {
    if (!menu && !line) return;
    const st = state(); if (!st) return;
    if (menu) {
      if (links) { const r = links.getBoundingClientRect(); menu.style.left = r.left + 'px'; menu.style.top = r.top + 'px'; menu.style.height = r.height + 'px'; links.classList.toggle('bx-menuhide', st.inside); }
      menu.classList.toggle('on', st.inside);
      menu.querySelectorAll('a').forEach((a, i) => { a.classList.toggle('done', i < st.k); a.classList.toggle('cur', i === st.k); });
    }
    if (line) {
      line.style.top = st.hb + 'px';
      line.classList.toggle('on', st.inside);
      line.querySelectorAll('b').forEach((b, i) => { b.style.width = (st.frac[i] * 100) + '%'; });
    }
  }
  function tint() {
    GROUPS.forEach((g, k) => g.forEach((sel) => {
      const sec = document.querySelector(sel); if (!sec) return;
      sec.style.setProperty('background', TINT[k], 'important');
      const w = sec.getBoundingClientRect().width;
      // clear full-width background layers inside the section so the tint shows; cards keep their own look
      sec.querySelectorAll('*').forEach((e) => {
        if (e.matches('img, video, canvas, svg, iframe') || e.closest('svg')) return;
        const r = e.getBoundingClientRect(); if (r.width < w - 4) return;
        const cs = getComputedStyle(e);
        if ((cs.backgroundColor !== 'rgba(0, 0, 0, 0)' && cs.backgroundColor !== 'transparent') || cs.backgroundImage !== 'none') e.style.setProperty('background', 'transparent', 'important');
      });
    }));
  }
  const strip = (k) => el(`<div class="bx-o bx-strip" data-bx style="--k:${C[k]}"><div class="bx-in"><div><span class="sn">0${k + 1}</span><span class="sl">${S[k].n}</span><span class="sb"></span><span class="sp">${S[k].p}</span><span class="ss">Этап ${k + 1} из 4</span></div></div></div>`);
  function numSide(sec, k, pill) {
    const h = heading(sec); if (!h) return;
    if (pill) pill.classList.add('bx-hide');
    const lab = el(`<div class="bx-o bx-nlab" data-bx style="--k:${C[k]}"><b>${S[k].n}</b> · Этап ${k + 1} из 4</div>`);
    if (pill && (pill.compareDocumentPosition(h) & Node.DOCUMENT_POSITION_FOLLOWING)) pill.parentNode.insertBefore(lab, pill); else h.parentNode.insertBefore(lab, h);
    const n = document.createElement('span'); n.className = 'bx-numin'; n.setAttribute('data-bx', ''); n.style.setProperty('--k', C[k]); n.textContent = '0' + (k + 1);
    h.insertBefore(n, h.firstChild);
    document.body.classList.add('bx-placed');
  }
  function recolor(sec, k) {
    // the coloured words in the heading take the stage colour, so each stage keeps one colour
    const h = heading(sec); if (!h) return;
    h.querySelectorAll('*').forEach((e) => { if (e.classList.contains('bx-numin')) return; if (getComputedStyle(e).fontStyle === 'italic') { e.style.setProperty('color', C[k], 'important'); e.style.setProperty('-webkit-text-fill-color', C[k], 'important'); e.style.setProperty('background', 'none', 'important'); } });
    const ul = h.nextElementSibling; if (ul && ul.tagName.toLowerCase() === 'svg') ul.querySelectorAll('path').forEach((p) => p.setAttribute('stroke', C[k]));
  }
  const ONE_BG = '#f8f7fb';
  function unify() {
    GROUPS.forEach((g) => g.forEach((sel) => {
      const sec = document.querySelector(sel); if (!sec) return;
      sec.style.setProperty('background', ONE_BG, 'important');
      const w = sec.getBoundingClientRect().width;
      // clear full-width background layers inside the section; cards and pictures keep their own look
      sec.querySelectorAll('*').forEach((e) => {
        if (e.matches('img, video, canvas, svg, iframe, .bmodel__inner') || e.closest('svg') || e.closest('[data-bx]')) return;
        const r = e.getBoundingClientRect(); if (r.width < w - 4) return;
        const cs = getComputedStyle(e);
        if ((cs.backgroundColor !== 'rgba(0, 0, 0, 0)' && cs.backgroundColor !== 'transparent') || cs.backgroundImage !== 'none') e.style.setProperty('background', 'transparent', 'important');
      });
    }));
  }
  const p2 = (k) => el(`<div class="bx-o bx-hd bx-p2" data-bx style="--k:${C[k]}"><div class="bx-in"><div class="num">0${k + 1}</div><span class="of">Этап ${k + 1} из 4</span><div class="nm">${S[k].n}</div><div class="pr">${S[k].p}</div><div class="bar">${S.map((_, i) => `<i class="${i <= k ? 'on' : ''}"></i>`).join('')}</div></div></div>`);
  const p6 = (k) => el(`<div class="bx-o bx-hd bx-p6" data-bx style="--k:${C[k]}"><div class="bx-in"><div class="seq">${S.map((_, i) => `<span class="${i < k ? 'done' : i === k ? 'on' : ''}">${i + 1}</span>`).join('')}</div><div class="dv"></div><div><div class="nm">${S[k].n}</div><div class="pr">${S[k].p}</div></div></div></div>`);
  // Inside each stage, the small labels of the other sections turn neutral grey, so only the stage start carries colour.
  function calmInside() {
    GROUPS.forEach((g) => g.slice(1).forEach((sel) => {
      const sec = document.querySelector(sel); if (!sec) return;
      sec.querySelectorAll('*').forEach((e) => {
        if (e.closest('[data-bx]') || e.children.length > 2) return;
        const cs = getComputedStyle(e); const t = (e.textContent || '').trim();
        if (t.length > 2 && t.length < 60 && cs.textTransform === 'uppercase' && parseFloat(cs.fontSize) <= 15) e.classList.add('bx-calm');
      });
    }));
  }
  const SICON = [
    '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.7" stroke-linecap="round" stroke-linejoin="round"><circle cx="11" cy="11" r="6.5"/><path d="m20 20-4.2-4.2"/></svg>',
    '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.7" stroke-linecap="round" stroke-linejoin="round"><rect x="2.5" y="7" width="19" height="11" rx="5"/><path d="M7.5 10.5v4M5.5 12.5h4"/><circle cx="15.5" cy="11.5" r="1"/><circle cx="18" cy="13.5" r="1"/></svg>',
    '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.7" stroke-linecap="round" stroke-linejoin="round"><path d="m12 3 9 5-9 5-9-5z"/><path d="m3 13 9 5 9-5"/></svg>',
    '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.7" stroke-linecap="round" stroke-linejoin="round"><path d="M3 21h18"/><rect x="5" y="12" width="3" height="7" rx="1"/><rect x="10.5" y="8" width="3" height="11" rx="1"/><rect x="16" y="4" width="3" height="15" rx="1"/></svg>',
  ];
  const r6 = (k, v) => {
    const head = v === 'v2b'
      ? `<div class="num">0${k + 1}</div><div><div class="row"><span class="of">Этап ${k + 1} из 4</span><span class="mini">${S.map((_, i) => `<i class="${i <= k ? 'on' : ''}"></i>`).join('')}</span></div><div class="nm">${S[k].n}</div><div class="pr">${S[k].p}</div></div>`
      : v === 'v5'
        ? `<span class="of">Этап ${k + 1} из 4</span><span class="gn">${S[k].n}</span><div class="pr">${S[k].p}</div><div class="ln"></div>`
        : `<div class="tile">${SICON[k]}</div><div><span class="of">Этап ${k + 1} из 4</span><div class="nm">${S[k].n}</div><div class="pr">${S[k].p}</div></div>`;
    return el(`<div class="bx-o bx-hd bx-r6 bx-${v}" data-bx style="--k:${C[k]}"><div class="bx-in">${head}</div></div>`);
  };
  const at = (k, v) => {
    const inner = v === 'aw'
      ? `<div class="wm">0${k + 1}</div><span class="of">Этап ${k + 1} из 4</span><div class="nm">${S[k].n}</div><div class="pr">${S[k].p}</div>`
      : v === 'a2'
        ? `<div class="num">0${k + 1}</div><div><div class="row"><span class="of">Этап ${k + 1} из 4</span><span class="mini">${S.map((_, i) => `<i class="${i <= k ? 'on' : ''}"></i>`).join('')}</span></div><div class="nm">${S[k].n}</div><div class="pr">${S[k].p}</div></div>`
        : `<span class="of">Этап ${k + 1} из 4</span><span class="gn">${S[k].n}</span><div class="pr">${S[k].p}</div><div class="ln"></div>`;
    return el(`<div class="bx-o bx-at bx-${v}" data-bx style="--k:${C[k]}">${inner}</div>`);
  };
  // Put the stage start exactly where the stage's pill is, i.e. right above its heading, whatever the layout.
  function attach(sec, k, pill, node) {
    if (!pill) { const h = heading(sec); if (h) h.parentNode.insertBefore(node, h); return; }
    if (getComputedStyle(pill).position === 'absolute' || getComputedStyle(pill.parentElement).position === 'absolute') {
      // Measure: everything is pinned in place. Put the stage start just above that block, lined up with the
      // heading's column, and move the heading and text up into the pill's old spot so the spacing stays even.
      const box = getComputedStyle(pill).position === 'absolute' ? pill : pill.parentElement;
      const canvas = box.parentElement;
      const pr = box.getBoundingClientRect(), cr = canvas.getBoundingClientRect();
      node.style.cssText += `;margin:0 0 0 ${Math.round(pr.left - cr.left)}px;width:440px;padding-top:${node.classList.contains('bx-aw') ? 86 : 40}px`;
      canvas.parentNode.insertBefore(node, canvas);
      canvas.style.marginLeft = 'auto'; canvas.style.marginRight = 'auto';
      const wrap = el('<div style="max-width:' + Math.round(cr.width) + 'px;margin:0 auto"></div>');
      canvas.parentNode.insertBefore(wrap, node); wrap.appendChild(node);
      const cs = getComputedStyle(box); const up = 0;
      box.style.display = 'none';
      const title = [...canvas.children].find((e) => e !== box && getComputedStyle(e).position === 'absolute' && Math.abs(parseFloat(getComputedStyle(e).left) - parseFloat(cs.left)) < 4 && parseFloat(getComputedStyle(e).top) > parseFloat(cs.top));
      const shift = title ? parseFloat(getComputedStyle(title).top) - parseFloat(cs.top) : 0;
      [...canvas.children].forEach((e) => {
        const c = getComputedStyle(e);
        if (e !== box && c.position === 'absolute' && Math.abs(parseFloat(c.left) - parseFloat(cs.left)) < 4 && parseFloat(c.top) > parseFloat(cs.top)) e.style.top = (parseFloat(c.top) - shift) + 'px';
      });
      return;
    }
    // Identify (pill in its own row above the columns), Engage and Build (pill right above the heading)
    pill.parentNode.insertBefore(node, pill);
    pill.classList.add('bx-hide');
  }
  const ARC = (k, delay) => `<div class="glow"></div><svg class="arc" viewBox="0 0 2000 900" preserveAspectRatio="none" aria-hidden="true"><defs><linearGradient id="bxg${k}" x1="0" x2="1"><stop offset="0" stop-color="${C[k]}" stop-opacity="0"/><stop offset=".22" stop-color="${C[k]}" stop-opacity=".55"/><stop offset=".5" stop-color="${C[k]}"/><stop offset=".78" stop-color="${C[k]}" stop-opacity=".55"/><stop offset="1" stop-color="${C[k]}" stop-opacity="0"/></linearGradient></defs><path style="${delay ? 'transition-delay:' + delay + 's' : ''}" d="M0 900 Q1000 -120 2000 900" stroke="url(#bxg${k})"/></svg>`;
  const chapter = (k, v) => {
    const eb = `<div class="eb anim">Этап ${k + 1} из 4</div>`;
    let inner;
    if (v === 'c3' || v === 'c6') {
      const words = S[k].p.split(' ');
      // each grey word starts filling a little after the one before it, once the sentence has appeared
      const st = `<div class="stmt anim d2">${words.map((w, i) => `<span class="${i === 0 ? 'k' : ''}" style="transition-delay:${(0.9 + i * 0.2).toFixed(2)}s">${w}</span>`).join(' ')}.</div>`;
      inner = `<div class="wrap"><div class="eb3 anim"><span class="eb">Этап ${k + 1} из 4</span><i class="sep"></i><span class="nm">${S[k].n}</span></div>${st}</div>`;
    } else if (v === 'c5') {
      inner = `<div class="wrap">${eb}<div class="big anim d2"><em class="hl">${S[k].n}</em></div><div class="pr anim d3">${S[k].p}.</div></div>`;
    } else {
      inner = `<div class="wrap">${eb}<div class="big anim d2">${S[k].n}<em>.</em></div><div class="pr anim d3">${S[k].p}.</div></div>`;
      if (v === 'c2') inner += ARC(k);
    }
    if (v === 'c6') inner += ARC(k, '0.5');
    return el(`<section class="bx-o bx-ch bx-${v}${v === 'c6' ? ' bx-c3 bx-c2' : ''}" data-bx style="--k:${C[k]}" aria-label="Этап ${k + 1}: ${S[k].n}">${inner}</section>`);
  };
  function chapters(secs, v) {
    secs.forEach((x, k) => { const n = chapter(k, v); x.parentNode.insertBefore(n, x); });
    let ready = false, tick = 0;
    const check = () => {
      tick = 0; if (!ready) return;
      document.querySelectorAll('.bx-ch').forEach((n) => {
        const t = n.querySelector('.eb'); if (!t) return;
        const r = t.getBoundingClientRect();
        if (!n.classList.contains('in') && r.top < innerHeight * (v === 'c3' || v === 'c6' ? 0.85 : 0.72) && r.bottom > 0) n.classList.add('in');
        if (false) {
          const p = 0, st = n;
          const sp = st.querySelectorAll('span'); const on = Math.round(p * sp.length);
          sp.forEach((w, i) => w.classList.toggle('on', i < on));
        }
      });
    };
    const req = () => { if (!tick) tick = requestAnimationFrame(check); };
    addEventListener('scroll', req, { passive: true }); addEventListener('resize', req);
    setTimeout(() => { ready = true; req(); }, 1200);
    if (v === 'c6') {
      // same spacing as version 2: half circle a fixed distance below the sentence, the space under it shortened by the same amount
      const fit = () => document.querySelectorAll('.bx-c6').forEach((n) => {
        const ih = innerHeight, w = n.querySelector('.wrap'), svg = n.querySelector('svg.arc'), st = n.querySelector('.stmt');
        w.style.minHeight = ''; svg.style.top = '';
        const tb = st.getBoundingClientRect().bottom - n.getBoundingClientRect().top;
        const d = Math.min(0, tb + 0.139 * ih - 0.57 * ih);
        svg.style.top = (0.31 * ih + d) + 'px';
        w.style.setProperty('min-height', (0.8 * ih + d) + 'px', 'important');
      });
      setTimeout(fit, 300); setTimeout(fit, 1500); if (document.fonts) document.fonts.ready.then(fit); addEventListener('resize', fit);
    }
  }
  // one background for every light section of the site (landing page and the dark contact/footer keep their own)
  const SITE_BG = { ug: 'linear-gradient(90deg, #fdfbfe 0%, #fdfbfe 55%, #e9eafd 100%)', uw: '#fcfbfe', ut: '#f7f5fc', ul: '#fbfaff', ub: 'linear-gradient(90deg, #faf9fd 0%, #f8f6fd 45%, #f1eefc 100%)' };
  function unifyAll(kind) {
    const bg = SITE_BG[kind];
    document.documentElement.classList.toggle('bxu-soft', kind === 'ut' || kind === 'ul' || kind === 'ub');
    const dark = (c) => { const m = c.match(/\d+(\.\d+)?/g); return m && m.length >= 3 && (+m[0] + +m[1] + +m[2]) / 3 < 90 && (m.length < 4 || +m[3] > 0.5); };
    document.body.style.setProperty('background', bg, 'important');
    document.documentElement.style.setProperty('--site-bg', bg.startsWith('#') ? bg : '#f7f5fc');
    const secs = [...document.querySelectorAll('#root section, #root footer')].filter((x) => !x.closest('[data-tm]'));
    secs.forEach((sec) => {
      if (sec.id === 'hero') { const keep = sec.querySelector('.hc-outer'); const w0 = sec.getBoundingClientRect().width; sec.querySelectorAll('*').forEach((e) => { if (e === keep || (keep && (e.contains(keep) || keep.contains(e))) || e.matches('img, svg, video, canvas') || e.closest('svg')) return; const r = e.getBoundingClientRect(); if (r.width < w0 - 4) return; const cs = getComputedStyle(e); if (dark(cs.backgroundColor)) return; if ((cs.backgroundColor !== 'rgba(0, 0, 0, 0)' && cs.backgroundColor !== 'transparent') || cs.backgroundImage !== 'none') e.style.setProperty('background', 'transparent', 'important'); }); return; }
      if (sec.id === 'contact' || sec.tagName === 'FOOTER' || dark(getComputedStyle(sec).backgroundColor)) return;
      if (sec.parentElement && sec.parentElement.closest('#root section') && !sec.classList.contains('bx-ch')) return;
      sec.style.setProperty('background', sec.classList.contains('bh-clients') && (kind === 'ug' || kind === 'ub') ? 'linear-gradient(180deg, #fdfbfe 0, rgba(253,251,254,0) 150px), ' + bg : bg, 'important');
      const w = sec.getBoundingClientRect().width;
      sec.querySelectorAll('*').forEach((e) => {
        if (e.matches('img, video, canvas, svg, iframe, .bmodel__inner') || e.closest('svg') || e.closest('[data-bx]')) return;
        const r = e.getBoundingClientRect(); if (r.width < w - 4) return;
        const cs = getComputedStyle(e);
        if (dark(cs.backgroundColor)) return;
        if ((cs.backgroundColor !== 'rgba(0, 0, 0, 0)' && cs.backgroundColor !== 'transparent') || cs.backgroundImage !== 'none') e.style.setProperty('background', 'transparent', 'important');
      });
    });
    const hd = findHeader(); if (hd) { hd.style.setProperty('background', 'rgba(246, 245, 252, .98)', 'important'); hd.style.setProperty('border-bottom', '1px solid rgba(20, 35, 75, .08)', 'important'); hd.querySelectorAll('*').forEach((e) => { if (e.matches('a, button, img, svg') || e.closest('a, button, svg')) return; if (e.getBoundingClientRect().width > 300) e.style.setProperty('background', 'transparent', 'important'); }); }
  }
  let header = null;
  function findHeader() {
    const c = [...document.querySelectorAll('header, nav, div')].filter((e) => { const s = getComputedStyle(e); const r = e.getBoundingClientRect(); return (s.position === 'fixed' || s.position === 'sticky') && r.top <= 1 && r.width >= innerWidth * 0.9 && r.height > 30 && r.height < 120; });
    return c.sort((a, b) => b.getBoundingClientRect().height - a.getBoundingClientRect().height)[0] || null;
  }

  let stick = null;
  function sticky() {
    if (stick) return;
    stick = el(`<div class="bx-o bx-stick" data-bx><div class="bx-in"><div class="bx-sl"><i>01</i><b>Identify</b><span></span></div><div class="bx-segs">${S.map(() => '<i></i>').join('')}</div>${M ? '' : '<div class="bx-nx"></div>'}</div></div>`);
    document.body.appendChild(stick);
  }
  function updSticky() {
    if (!stick) return;
    const secs = SEL.map((s) => document.querySelector(s));
    if (secs.some((s) => !s)) return;
    if (!header || !header.isConnected) header = findHeader();
    const hb = header ? Math.max(0, header.getBoundingClientRect().bottom) : 0;
    stick.style.top = hb + 'px';
    const probe = hb + innerHeight * 0.3;
    let k = 0; secs.forEach((s, i) => { if (s.getBoundingClientRect().top <= probe) k = i; });
    const first = secs[0].getBoundingClientRect().top;
    const endEl = document.querySelector(END) || secs[3];
    const last = endEl.getBoundingClientRect().bottom;
    const inside = first <= hb + 40 && last > hb + 120;
    stick.classList.toggle('on', inside);
    stick.style.setProperty('--k', C[k]);
    stick.querySelector('.bx-sl i').textContent = '0' + (k + 1);
    stick.querySelector('.bx-sl b').textContent = S[k].n;
    stick.querySelector('.bx-sl span').textContent = M ? '' : '· ' + S[k].p;
    stick.querySelectorAll('.bx-segs i').forEach((x, i) => x.classList.toggle('on', i <= k));
    const nx = stick.querySelector('.bx-nx'); if (nx) nx.textContent = k < 3 ? 'Next: ' + S[k + 1].n : 'Last step';
  }

  function apply() {
    const secs = SEL.map((s) => document.querySelector(s));
    if (secs.some((s) => !s)) return false;
    if (document.querySelector('[data-bx-done]')) return true;
    document.body.setAttribute('data-bx-done', cur);
    const pills = secs.map((s, i) => s.querySelector(PILL[i]));
    const hidePills = () => { pills.forEach((p) => p && p.classList.add('bx-hide')); if (!M) document.body.classList.add('bx-placed'); };
    if (cur === 'chapter') { hidePills(); secs.forEach((s, k) => place(chap(k, true, false), s)); }
    if (cur === 'combined') { hidePills(); secs.forEach((s, k) => place(chap(k, false, true), s)); sticky(); }
    if (cur === 'sticky') sticky();
    if (cur === 'small') { hidePills(); secs.forEach((x, k) => { const c = chap(k, false, false); c.classList.add('sm'); place(c, x); }); menuSteps(); }
    if (cur === 'strip') { hidePills(); secs.forEach((x, k) => place(strip(k), x)); menuSteps(); }
    if (cur === 'numside') { secs.forEach((x, k) => numSide(x, k, pills[k])); menuSteps(); }
    if (['small', 'strip', 'numside'].includes(cur)) secs.forEach((x, k) => recolor(x, k));
    if (!M && ['small', 'strip', 'p2', 'p6'].includes(cur)) unify();
    if (['ug', 'uw', 'ut', 'ul', 'ub'].includes(cur)) { unify(); pills.forEach((p) => p && p.classList.add('bx-hide')); chapters(secs, 'c6'); secs.forEach((x, k) => recolor(x, k)); menuSteps(); calmInside(); setTimeout(() => unifyAll(cur), 400); setTimeout(() => unifyAll(cur), 2500); }
    if (['c1', 'c2', 'c3', 'c6', 'c5'].includes(cur)) { unify(); pills.forEach((p) => p && p.classList.add('bx-hide')); chapters(secs, cur); secs.forEach((x, k) => recolor(x, k)); menuSteps(); calmInside(); }
    if (['aw', 'a2', 'a5'].includes(cur)) { unify(); secs.forEach((x, k) => { attach(x, k, pills[k], at(k, cur)); recolor(x, k); }); menuSteps(); calmInside(); }
    if (['v2b', 'v5', 'v8'].includes(cur)) { unify(); hidePills(); document.body.classList.add('bx-keepcenter'); secs.forEach((x, k) => { const n = r6(k, cur); place(n, x); if (x.matches('.bs-section')) n.style.paddingBottom = '96px'; recolor(x, k); }); menuSteps(); calmInside(); }
    if (cur === 'p2' || cur === 'p6') { hidePills(); secs.forEach((x, k) => { place(cur === 'p2' ? p2(k) : p6(k), x); recolor(x, k); }); menuSteps(); calmInside(); }
    if (['label', 'labelmenu', 'labelline', 'tint'].includes(cur)) secs.forEach((x, k) => label(x, k, pills[k]));
    if (cur === 'labelmenu') menuSteps();
    if (cur === 'labelline' || (cur === 'tint' && M)) progressLine();
    if (cur === 'tint') tint();
    if (cur === 'handoff') secs.forEach((s, k) => { if (k > 0) place(hand(k), s); });
    if (cur === 'steps') { hidePills(); secs.forEach((s, k) => place(steps(k), s)); }
    if (cur === 'wash') secs.forEach((s, k) => {
      s.style.setProperty('--k', C[k]);
      s.classList.add('bx-washed');
      const tint = `linear-gradient(${C[k]}22, ${C[k]}00 ${M ? 300 : 420}px)`;
      const bi = getComputedStyle(s).backgroundImage;
      s.style.backgroundImage = bi && bi !== 'none' ? `${tint}, ${bi}` : tint;
      const p = pills[k]; if (p) { p.style.setProperty('--k', C[k]); p.classList.add('bx-pillfill'); }
    });
    return true;
  }

  function bar() {
    const b = el(`<div class="bx-bar" role="group" aria-label="Version"><span>Version</span>${VV.map((v) => `<button type="button" data-k="${v.k}" aria-pressed="${v.k === cur}" title="${v.t}">${v.b}</button>`).join('')}</div>`);
    b.addEventListener('click', (e) => { const x = e.target.closest('button'); if (!x || x.dataset.k === cur) return; location.hash = 'v=' + x.dataset.k; location.reload(); });
    document.body.appendChild(b);
    const cap = el(`<div class="bx-cap">${V.find((v) => v.k === cur).t}</div>`);
    document.body.appendChild(cap);
    setTimeout(() => { cap.style.opacity = '0'; }, 4500);
  }

  function start() {
    const s = document.createElement('style'); s.textContent = css; document.head.appendChild(s);
    // final version: Light tint only, no Version bar (24 Nov)
    let tries = 0;
    const t = setInterval(() => { if (apply() || ++tries > 60) { clearInterval(t); updSticky(); updExtras(); } }, 200);
    // if the site redraws a stage and drops our blocks, put them back once
    new MutationObserver(() => {
      if (document.body.getAttribute('data-bx-done') && cur !== 'now' && cur !== 'sticky' && cur !== 'wash' && cur !== 'tint' && !document.querySelector('.bx-chap, .bx-steps, .bx-hand, .bx-lab, .bx-strip, .bx-nlab, .bx-hd, .bx-at, .bx-ch')) { document.body.removeAttribute('data-bx-done'); apply(); }
    }).observe(document.getElementById('root') || document.body, { childList: true, subtree: true });
    addEventListener('scroll', () => { updSticky(); updExtras(); }, { passive: true });
    addEventListener('resize', () => { updSticky(); updExtras(); });
  }
  if (document.readyState === 'loading') document.addEventListener('DOMContentLoaded', start); else start();
})();
