// Training programme mock-ups on top of a full copy of the Behavency test site.
// The programme tiles sit in Build after the formats. Two ways to open the full list (see below).
// Texts come from the trainers' sheet (translated, nothing added). Team programmes marked "Proposed" are new ideas to confirm.
(function () {
  const M = (window.BHV_SITE || 'desk') === 'mob';
  const AREAS = {
    C: ['Clarity & Alignment', '#2f6fdb'], T: ['Trust & Inclusion', '#0f9a83'], F: ['Focus & Prioritisation', '#d9731a'],
    E: ['Execution & Accountability', '#7a4bd6'], Co: ['Collaboration & Influence', '#cf3f74'], L: ['Learning & Adaptability', '#3c8f2f'],
  };
  const AUD = { l: 'Line managers', m: 'Managers of managers', lm: 'Line managers & managers of managers', lmt: 'Managers & teams', t: 'Teams' };
  // title, for, areas, formats, outcome, focus, proposed
  const P = [
    ['Performance Management', 'l', ['C', 'F', 'E'], 'In person', 'Run the full management cycle, and hold the goal-setting, praise, correction and review conversations that go with it.', ['The modern manager’s role', 'Planning, organising, checking, motivating and delegating', 'Goal-setting, praise and corrective conversations', 'The end-of-period review conversation']],
    ['Leadership Foundations', 'l', [], 'In person', 'The manager’s role and four core communication skills, from setting goals to giving feedback.', ['The modern manager’s role', 'Four core communication skills', 'Goal-setting, praise and corrective conversations', 'The review conversation']],
    ['Adapting Your Leadership Style', 'l', ['L'], 'In person · Online', 'Match your style to each person: set clear expectations and give the right mix of direction and support, without micromanaging.', ['Reading each person’s development level', 'Setting clear expectations', 'The right balance of direction and support', 'Keeping accountability without micromanaging']],
    ['Situational Delegation', 'm', ['L', 'F'], 'In person', 'Delegate well when the people you lead are managers themselves.', ['Delegating to managers', 'Three core skills and six types of conversation']],
    ['Leading a Team', 'lm', ['C', 'F'], 'In person · Online', 'Guide a team through its stages, from first steps to steady high performance, including remote teams.', ['What high-performing teams have in common', 'Leading remote teams', 'The four stages every team goes through', 'The right leadership style for each stage']],
    ['Assertive Behaviour', 'lm', ['T', 'E'], '', 'Communicate honestly, directly and respectfully: hold your position without pressure, ask, say no and handle manipulation.', ['Types of behaviour', 'Holding your position without pressure', 'Non-violent communication', 'Asking, saying no and handling manipulation']],
    ['Emotional Leadership', 'lm', ['T', 'Co'], '', 'Read how people are doing, manage your own reactions and build influence through connection, not status.', ['What emotional intelligence is', 'Communication techniques', 'Self-control techniques']],
    ['Influence Without Authority', 'lm', ['Co'], 'In person', 'Persuade people you don’t manage, by understanding their interests and adapting your arguments to them.', ['Influence, pressure and manipulation: the difference', 'Why people resist influence', 'Reading different personality types', 'Mapping stakeholders across functions']],
    ['Cross-functional Communication and Productive Conflict', 'lmt', ['Co'], 'In person · Online', 'Work well across teams: clarify requests and responsibilities, manage stakeholders and turn conflict into win-win outcomes.', ['What helps and blocks work across teams', 'Stakeholder management', 'Clarifying requests so everyone understands them the same way', 'Tools for win-win conflict']],
    ['Motivation That Lasts', 'lm', ['T', 'L'], 'In person · Online', 'Understand what really drives each person, and help them move to a more lasting, self-driven motivation.', ['How managers’ beliefs shape motivation', 'Six types of motivation', 'Three skills to build lasting motivation']],
    ['Trust and Psychological Safety', 'lm', ['T'], '', 'Build trust and a team where people speak up, using trust-based conversations, active listening and feedback.', ['Psychological safety at work', 'The basics of trust', 'Goals, questions, active listening and feedback', 'The GROW model']],
    ['Leading Change', 'lm', ['L'], 'In person · Online', 'Understand why change fails, how people take it in, and lead change with high involvement.', ['Why change fails', 'How people take in change, stage by stage', 'Four strategies for leading change', 'A plan for a real change in your organisation']],
    ['Strategic Thinking', 'm', ['C'], '', '', []],
    ['Critical Thinking', 'm', ['C'], '', '', []],
    ['Problem Analysis and Decision-Making', 'm', ['C', 'F'], 'In person · Online', 'Get to the root of a problem, weigh the options and make decisions that the people involved support.', ['Framing the problem', 'Root-cause analysis', 'Cost–benefit analysis', 'Group and individual decisions, risks and stakeholders']],
    ['Innovative Thinking', 'lm', ['L'], 'In person · Online', 'Build an innovation mindset and take an idea from first scan to a tested pilot.', ['Openness, curiosity and initiative', 'Scan: where to innovate', 'Ideas: tools for new approaches', 'Pilot: testing and feedback']],
    ['Team Effectiveness Session', 't', ['T', 'E'], 'In person · Online', 'The team works through the most common team pitfalls and leaves with its own agreed way of working.', ['The most common team pitfalls', 'Practical tools for each one', 'The team’s own working agreement']],
    ['Shared Goals, Clear Roles', 't', ['C'], '', 'The team agrees what it is there to achieve and who does what.', [], 1],
    ['Psychological Safety in the Team', 't', ['T'], '', 'The team builds the habits that make it safe to speak up, disagree and admit mistakes.', [], 1],
    ['Team Priorities and Focus', 't', ['F'], '', 'The team decides together what matters most now, and what to stop.', [], 1],
    ['Team Agreements and Accountability', 't', ['E'], '', 'The team sets its own working agreements and holds each other to them.', [], 1],
    ['Resilience to Change', 't', ['L'], '', 'The team learns to stay steady and keep delivering when plans change.', [], 1],
    ['Managing Change Together', 't', ['L'], '', 'The team works through a change step by step, using the ADKAR model.', [], 1],
  ].map(([t, a, ar, f, o, fo, pr], i) => ({ i, t, a, ar, f, o, fo, pr: !!pr }));
  // Texts for the website (from the texts page): formats, "after the programme, participants can", "helps with".
  const CONTENT = {"Performance Management":{"f":"In person","h":"nw","can":["Set clear, agreed goals and check progress against them","Give praise and corrective feedback that people act on","Run a fair, well-prepared end-of-period review"]},"Leadership Foundations":{"f":"In person","h":"n","can":["Explain what is expected of them in the manager role","Use four core communication skills in everyday conversations","Hold goal-setting, praise and correction conversations"]},"Adapting Your Leadership Style":{"f":"In person · Online","h":"bn","can":["Judge how ready each person is for a given task","Choose the right mix of direction and support for them","Agree clear expectations without micromanaging"]},"Situational Delegation":{"f":"In person","h":"bw","can":["Decide what to delegate to the managers in their team, and how","Match direction and support to each manager’s experience","Agree outcomes and check-ins instead of controlling the detail"]},"Leading a Team":{"f":"In person · Online","h":"b","can":["Recognise which stage of development their team is in","Adjust how they lead to that stage","Agree a team charter and handle early conflicts openly"]},"Assertive Behaviour":{"f":"In person · Online","h":"w","can":["Tell assertive behaviour apart from passive and aggressive","Hold their position without pressure, and say no when needed","Recognise manipulation and respond calmly"]},"Emotional Leadership":{"f":"In person · Online","h":"cw","can":["Notice how people are doing and adjust how they respond","Manage their own reactions under pressure","Use communication techniques that build trust"]},"Influence Without Authority":{"f":"In person","h":"c","can":["Map the stakeholders they need and what each one cares about","Adapt their message to different personality types","Build arguments around the other side’s interests"]},"Cross-functional Communication and Productive Conflict":{"f":"In person · Online","h":"c","can":["Clarify a request so everyone understands it the same way","Agree who is responsible for what across teams","Use win-win tools when interests clash"]},"Motivation That Lasts":{"f":"In person · Online","h":"w","can":["Recognise what is really driving each person’s motivation","Hold conversations that help people find more lasting motivation","Look after their own energy and motivation"]},"Trust and Psychological Safety":{"f":"In person · Online","h":"cb","can":["Recognise the signs of low psychological safety in their team","Use questions, active listening and feedback to build trust","Run a coaching conversation with the GROW model"]},"Leading Change":{"f":"In person · Online","h":"c","can":["Explain why change efforts fail and what helps them work","Recognise where each person is in accepting a change","Build a plan for a real change in their own area"]},"Strategic Thinking":{"f":"In person · Online","h":"c","can":["Separate urgent demands from what matters long term","Assess how trends and changes affect their area","Turn a strategic goal into clear priorities for their team"],"o":"Step back from day-to-day pressure and connect decisions to where the organisation is going.","short":"Connect daily decisions to long-term goals."},"Critical Thinking":{"f":"In person · Online","h":"c","can":["Separate facts from assumptions","Test the quality of an argument or proposal","Compare options on clear criteria"],"o":"Question assumptions, weigh the evidence and reach conclusions that hold up.","short":"Test assumptions and weigh evidence before deciding."},"Problem Analysis and Decision-Making":{"f":"In person · Online","h":"w","can":["Tell a symptom from the real problem","Find root causes with fishbone and Pareto analysis","Weigh options and plan how to win support for the decision"]},"Innovative Thinking":{"f":"In person · Online","h":"c","can":["Spot where improvement is possible in their area","Generate and select ideas with simple tools","Test an idea in a small pilot and learn from the feedback"]},"Team Effectiveness Session":{"f":"In person · Online","h":"b","can":["Name where the team gets stuck","Practise tools for trust, healthy conflict and commitment","Leave with an agreed way of working together"]},"Shared Goals, Clear Roles":{"f":"In person · Online","h":"bc","can":["Agree what the team is there to achieve","Clarify who does what, and where roles overlap","Spot mismatched expectations before they cause friction"]},"Psychological Safety in the Team":{"f":"In person · Online","h":"c","can":["Recognise what makes it hard to speak up in the team","Agree habits that make questions and disagreement normal","Learn from mistakes without blame"]},"Team Priorities and Focus":{"f":"In person · Online","h":"w","can":["Separate urgent work from important work","Agree the few priorities that matter most now","Decide together what to stop or postpone"]},"Team Agreements and Accountability":{"f":"In person · Online","h":"b","can":["Set working agreements the whole team signs up to","Follow up on commitments without blame","Raise it early when an agreement isn’t kept"]},"Resilience to Change":{"f":"In person · Online","h":"c","can":["Recognise how change affects the team’s energy and focus","Use simple routines to stay steady under pressure","Plan for different scenarios instead of waiting"]},"Managing Change Together":{"f":"In person · Online","h":"c","can":["Understand the stages people go through in a change (ADKAR)","Find where the team is stuck in a current change","Agree the next practical steps together"]}};
  const HELPS = {"w":"Heavier workloads","c":"Constant change","b":"Bigger teams","n":"New managers"};
  const RISK_LINE = "Delivered in person, online or as e-learning, depending on the programme. Each one comes with a Masterplan to practise it at work.";
  P.forEach((p) => { const c = CONTENT[p.t]; if (c) { if (c.f) p.f = c.f; if (!p.o && c.o) p.o = c.o; p.can = c.can; p.h = c.h; p.short = c.short; } p.pr = false; });
  const CLEAN = !!window.BHV_CLEAN; // clean page for the website: no mock-up bars or hints
  const FEATURED = ['Performance Management', 'Leading a Team', 'Influence Without Authority', 'Leading Change', 'Problem Analysis and Decision-Making', 'Team Effectiveness Session'];

  // Round 2: tiles stay after the formats (P2). Two ways to open the full list:
  // "cat" = catalogue with filters and a detail panel; "ld" = list on the left, details on the right, fitting one screen.
  const q = new URLSearchParams(location.hash.slice(1));
  const view = 'cat'; // catalogue chosen
  const LEVELS = [['all', 'All'], ['l', 'Line managers'], ['m', 'Managers of managers'], ['t', 'Teams']];
  const AREA_NAMES = (p) => p.ar.map((k) => AREAS[k][0]).join(', ');

  const css = `
  .bq, .bq * { box-sizing: border-box; }
  .bq { font-family: Inter, Arial, sans-serif; color: #0f1b3d; text-align: left; }
  .bq h2, .bq h3, .bq h4, .bq h5, .bq p { width: auto !important; max-width: 100% !important; white-space: normal !important; text-transform: none; }
  .bq-in { max-width: 1200px; margin: 0 auto; padding: 0 ${M ? 20 : 48}px; }
  /* tiles band on the page */
  .bq-band { padding: ${M ? '52px 0 56px' : '96px 0 104px'}; background: #fbfaf7; border-top: 1px solid #ece8df; border-bottom: 1px solid #ece8df; }
  .bq-eye { font: 600 12px/1 Inter, sans-serif; letter-spacing: .16em; text-transform: uppercase; color: #e0761c; display: flex; align-items: center; gap: 10px; }
  .bq-eye::before { content: ""; width: 24px; height: 1.5px; background: currentColor; }
  .bq .bq-h { font: 600 ${M ? 30 : 44}px/1.08 "Source Serif 4", Georgia, serif !important; letter-spacing: -.015em !important; margin: 14px 0 0 !important; color: #0f1b3d !important; -webkit-text-fill-color: #0f1b3d !important; }
  .bq .bq-h em { font-style: italic; font-weight: 500; color: #e0761c !important; -webkit-text-fill-color: #e0761c !important; background: none !important; }
  .bq-top { display: flex; justify-content: space-between; align-items: flex-end; gap: 24px; flex-wrap: wrap; }
  .bq-top > div { min-width: 0; flex: 1 1 300px; }
  .bq .bq-lead { margin: 12px 0 0 !important; font: 400 ${M ? 15.5 : 17}px/1.55 Inter, sans-serif !important; color: #4f5770 !important; max-width: 600px !important; }
  .bq-all { display: inline-flex; align-items: center; gap: 10px; border: 1.5px solid #0f1b3d; color: #0f1b3d; background: transparent; border-radius: 999px; padding: 12px 20px; font: 600 15px/1 Inter, sans-serif; cursor: pointer; white-space: nowrap; }
  .bq-all:hover { background: #0f1b3d; color: #fff; }
  .bq-tiles { display: grid; grid-template-columns: repeat(3, minmax(0, 1fr)); gap: 18px; margin-top: 36px; }
  ${M ? '.bq-tiles { display: flex; overflow-x: auto; scroll-snap-type: x mandatory; gap: 12px; margin: 26px -20px 0; padding: 4px 20px 10px; scrollbar-width: none; } .bq-tiles::-webkit-scrollbar { display: none; } .bq-tiles .bq-tile { flex: none; width: 82%; scroll-snap-align: start; }' : ''}
  .bq-tile { background: #fff; border: 1px solid #e4e0d6; border-radius: 16px; padding: 22px; display: flex; flex-direction: column; gap: 10px; min-width: 0; }
  .bq .bq-for { font: 600 11px/1.3 Inter, sans-serif !important; letter-spacing: .1em !important; text-transform: uppercase !important; color: #8a8f9f !important; margin: 0 !important; }
  .bq .bq-t { font: 600 ${M ? 19 : 21}px/1.2 "Source Serif 4", Georgia, serif !important; color: #0f1b3d !important; margin: 0 !important; }
  .bq .bq-o { margin: 0 !important; font: 400 14.5px/1.55 Inter, sans-serif !important; color: #4f5770 !important; }
  .bq .bq-o.none { color: #9aa0b4 !important; font-style: italic !important; }
  .bq .bq-fmt { margin: auto 0 0 !important; padding-top: 6px; font: 500 12.5px/1.3 Inter, sans-serif !important; color: #8a8f9f !important; }
  .bq-stack { display: grid; gap: 10px; margin-top: 22px; }
  .bq-stack .bq-tile, .bq-feat { padding: 16px 18px; }
  .bq-names { margin-top: 18px; border-top: 1px solid #e4e0d6; }
  .bq-name { display: flex; justify-content: space-between; align-items: baseline; gap: 12px; padding: 14px 2px; border-bottom: 1px solid #e4e0d6; }
  .bq-name b { font: 600 17px/1.25 "Source Serif 4", Georgia, serif; color: #0f1b3d; }
  .bq-name span { font: 500 11.5px/1.3 Inter, sans-serif; color: #8a8f9f; text-align: right; flex: none; max-width: 42%; }
  .bq-names.small .bq-name { padding: 11px 2px; }
  .bq-names.small .bq-name b { font-size: 16px; }
  .bq-feat { margin-top: 22px; background: #fff; border: 1px solid #e4e0d6; border-radius: 16px; display: grid; gap: 8px; border-top: 3px solid #e0761c; }
  .bq .bq-also { margin: 20px 0 0 !important; font: 600 11.5px/1 Inter, sans-serif !important; letter-spacing: .12em; text-transform: uppercase !important; color: #8a8f9f !important; }
  .bq-chips { display: flex; flex-wrap: wrap; gap: 8px; margin-top: 20px; }
  .bq-chips span { font: 500 13.5px/1.2 Inter, sans-serif; color: #2b3350; background: #fff; border: 1px solid #e4e0d6; border-radius: 999px; padding: 8px 12px; }
  .bq-chips span.more { background: #fdf0e3; border-color: #f3d3b3; color: #9a4a08; font-weight: 600; }
  /* main-page block, desktop: copied from catalogue.png */
  .bq-c .bq-in { max-width: 1360px; }
  .bq-c { background: radial-gradient(760px 420px at 100% 0, rgba(214,198,252,.45), rgba(214,198,252,0) 60%), #fbf8f6 !important; border: 0 !important; padding: 96px 0 100px !important; }
  .bq-c .bq-eye { color: #e8701a; }
  .bq-c .bq-h { font-family: "Playfair Display", "Source Serif 4", Georgia, serif !important; font-weight: 600 !important; font-size: 48px !important; }
  .bq-c .bq-h em { color: #ef7a1a !important; -webkit-text-fill-color: #ef7a1a !important; }
  .bq-c .bq-all { padding: 15px 26px; font-size: 16px; border-width: 1.5px; }
  .bq-cgrid { display: grid; grid-template-columns: repeat(3, minmax(0, 1fr)); gap: 22px; margin-top: 40px; }
  .bq-ccard { background: #fff; border: 1px solid #efebf3; border-radius: 22px; padding: 24px 26px 24px; box-shadow: 0 8px 26px rgba(60,40,120,.07); display: flex; flex-direction: column; }
  .bq .bq-cfor { margin: 0 !important; font: 700 12.5px/1.3 Inter, sans-serif !important; letter-spacing: .1em !important; text-transform: uppercase !important; color: #c2650f !important; }
  .bq .bq-ct { margin: 12px 0 0 !important; font: 700 22px/1.25 Inter, sans-serif !important; letter-spacing: -.01em; color: #0f1b3d !important; }
  .bq .bq-co2 { margin: 10px 0 0 !important; font: 400 16px/1.5 Inter, sans-serif !important; color: #4f5770 !important; }
  .bq-chips2 { display: flex; flex-wrap: wrap; gap: 10px; margin-top: auto; padding-top: 20px; }
  .bq-chips2 span { display: inline-flex; align-items: center; gap: 8px; background: #f6f4f9; border-radius: 999px; padding: 9px 14px; font: 500 14px/1 Inter, sans-serif; color: #1f2740; }
  .bq-chips2 svg { color: #6a4bd2; }
  /* narrower desktop windows: two cards per row */
  @media (max-width: 1060px) { .bq-cgrid, .bc-cards { grid-template-columns: repeat(2, minmax(0, 1fr)) !important; } .bq-c .bq-top { align-items: flex-start; } }
  .bq-mob-all { display: ${M ? 'flex' : 'none'}; justify-content: center; margin-top: 22px; }
  .bq-mob-all .bq-all { width: 100%; justify-content: center; }
  .bq-pr { display: inline-block; font: 600 10px/1 Inter, sans-serif; letter-spacing: .08em; text-transform: uppercase; color: #9a4a08; background: #fde9d6; padding: 3px 6px; border-radius: 4px; margin-left: 6px; vertical-align: 2px; }
  /* full-screen layer */
  .bq.bq-ov { position: fixed !important; inset: 0 !important; z-index: 99990; background: #fbfaf7; overflow: hidden; display: flex; flex-direction: column; width: 100vw !important; height: 100vh !important; height: 100dvh !important; margin: 0 !important; transform: none !important; }
  .bq-ovbar { flex: none; background: #0f1b3d; color: #fff; }
  .bq-ovbar .bq-in { display: flex; align-items: center; justify-content: space-between; height: ${M ? 56 : 64}px; }
  .bq-ovt { font: 600 ${M ? 17 : 19}px/1 "Source Serif 4", Georgia, serif; color: #fff; }
  .bq-ovt span { font: 500 13px/1 Inter, sans-serif; color: rgba(255,255,255,.6); margin-left: 12px; }
  .bq-x { width: 38px; height: 38px; border-radius: 50%; border: 1px solid rgba(255,255,255,.3); background: transparent; color: #fff; font-size: 19px; cursor: pointer; }
  .bq-scroll { flex: 1; overflow-y: auto; overscroll-behavior: contain; }
  .bq-head { padding: ${M ? '26px 0 14px' : '44px 0 18px'}; }
  .bq-facts { display: flex; flex-wrap: wrap; gap: 8px 22px; margin-top: 16px; font: 500 14px/1.3 Inter, sans-serif; color: #4f5770; }
  .bq-facts span { display: flex; align-items: center; gap: 8px; }
  .bq-facts span::before { content: ""; width: 6px; height: 6px; border-radius: 50%; background: #e0761c; }
  .bq-filters { position: sticky; top: 0; z-index: 3; background: rgba(251,250,247,.96); backdrop-filter: blur(6px); border-bottom: 1px solid #ece8df; }
  .bq-filters .bq-in { display: flex; gap: 8px; padding-top: 12px; padding-bottom: 12px; ${M ? 'overflow-x: auto; scrollbar-width: none;' : ''} }
  .bq-filters button { flex: none; border: 1px solid #ddd8cc; background: #fff; color: #2b3350; border-radius: 999px; padding: 9px 15px; font: 600 13.5px/1 Inter, sans-serif; cursor: pointer; }
  .bq-filters button b { font-weight: 500; color: #8a8f9f; margin-left: 4px; }
  .bq-filters button[aria-pressed="true"] { background: #0f1b3d; border-color: #0f1b3d; color: #fff; }
  .bq-filters button[aria-pressed="true"] b { color: rgba(255,255,255,.65); }
  .bq-grp { padding: ${M ? '22px 0 4px' : '34px 0 6px'}; }
  .bq .bq-gh { display: flex; align-items: baseline; gap: 10px; font: 600 ${M ? 21 : 25}px/1.15 "Source Serif 4", Georgia, serif !important; margin: 0 0 16px !important; color: #0f1b3d !important; }
  .bq .bq-gh small { font: 500 14px/1 Inter, sans-serif; color: #8a8f9f; }
  .bq-cards { display: grid; grid-template-columns: repeat(${M ? 1 : 3}, minmax(0, 1fr)); gap: ${M ? 10 : 14}px; }
  .bq-card { text-align: left; background: #fff; border: 1px solid #e4e0d6; border-radius: 14px; padding: ${M ? '14px 16px 12px' : '16px 18px 14px'}; display: flex; flex-direction: column; gap: 6px; cursor: pointer; font: inherit; color: inherit; min-height: ${M ? 0 : 128}px; transition: border-color .15s, box-shadow .15s, transform .15s; }
  .bq-card:hover { border-color: #c9c2b3; box-shadow: 0 8px 22px rgba(40,30,10,.07); transform: translateY(-1px); }
  .bq-card .bq-o { display: -webkit-box; -webkit-line-clamp: 2; -webkit-box-orient: vertical; overflow: hidden !important; }
  .bq-more { font: 600 12.5px/1 Inter, sans-serif; color: #e0761c; margin-top: auto; padding-top: 2px; }
  .bq-card .bq-t { font-size: ${M ? 18 : 19}px !important; }
  .bq-card .bq-o { font-size: 14px !important; line-height: 1.5 !important; }
  .bq .bq-note { margin: 26px 0 50px !important; padding-top: 16px; border-top: 1px solid #e4e0d6; font: 400 14.5px/1.5 Inter, sans-serif !important; color: #4f5770 !important; }
  /* detail panel (catalogue) */
  .bq-dim { position: absolute; inset: 0; background: rgba(15,27,61,.35); z-index: 5; }
  .bq-drawer { position: absolute; top: 0; right: 0; bottom: 0; width: ${M ? '100%' : '500px'}; background: #fff; z-index: 6; overflow-y: auto; box-shadow: -20px 0 50px rgba(10,10,40,.18); padding: ${M ? '18px 20px 30px' : '34px 38px'}; }
  .bq-back { border: 0; background: none; font: 600 14px/1 Inter, sans-serif; color: #4f5770; padding: 6px 0 18px; cursor: pointer; display: ${M ? 'block' : 'none'}; }
  .bq-dx { position: absolute; top: 18px; right: 18px; width: 36px; height: 36px; border-radius: 50%; border: 1px solid #e4e0d6; background: #fff; font-size: 18px; cursor: pointer; color: #0f1b3d; display: ${M ? 'none' : 'block'}; }
  /* the clean detail */
  .bq-det { display: grid; gap: 14px; }
  .bq-det .bq-t { font-size: ${M ? 26 : 30}px !important; line-height: 1.15 !important; padding-right: 40px; }
  .bq-det .bq-o { font-size: ${M ? 16 : 17}px !important; color: #2b3350 !important; }
  .bq .bq-dh { font: 600 11.5px/1 Inter, sans-serif !important; letter-spacing: .12em !important; text-transform: uppercase !important; color: #8a8f9f !important; margin: 8px 0 -4px !important; }
  .bq-det ul { margin: 0; padding: 0; list-style: none !important; display: grid; gap: 8px; }
  .bq-det li { display: flex !important; gap: 10px; font: 400 15.5px/1.45 Inter, sans-serif !important; color: #2b3350 !important; }
  .bq-det li::before { content: ""; flex: none; width: 6px; height: 6px; border-radius: 50%; background: #e0761c; margin-top: 8px; }
  .bq-metas { display: grid; gap: 8px; margin-top: 10px; padding-top: 16px; border-top: 1px solid #ece8df; }
  .bq-metas div { display: grid; grid-template-columns: 92px minmax(0, 1fr); gap: 10px; font: 400 14.5px/1.45 Inter, sans-serif; color: #2b3350; }
  .bq-metas span { color: #8a8f9f; font-weight: 500; }
  .bq-ask { justify-self: start; margin-top: 8px; border: 0; background: #0f1b3d; color: #fff; border-radius: 10px; padding: 12px 18px; font: 600 14.5px/1 Inter, sans-serif; cursor: pointer; }
  /* list + detail, fitting one screen */
  .bq-ld { flex: 1; min-height: 0; display: grid; grid-template-columns: 340px minmax(0, 1fr); gap: 0; max-width: 1200px; width: 100%; margin: 0 auto; padding: 0 48px 28px; }
  .bq-ldhead { flex: none; }
  .bq-ldhead .bq-in { padding-top: 28px; padding-bottom: 20px; display: flex; justify-content: space-between; align-items: flex-end; gap: 24px; }
  .bq-ldhead .bq-h { font-size: 34px !important; margin: 0 !important; }
  .bq-list { min-height: 0; overflow-y: auto; border: 1px solid #e4e0d6; border-right: 0; border-radius: 16px 0 0 16px; background: #fff; }
  .bq .bq-lg { position: sticky; top: 0; z-index: 1; margin: 0 !important; padding: 12px 18px 10px; background: #f6f3ec; border-bottom: 1px solid #ece8df; font: 600 11.5px/1 Inter, sans-serif !important; letter-spacing: .12em !important; text-transform: uppercase !important; color: #6d7386 !important; display: flex; justify-content: space-between; }
  .bq-list button { display: block; width: 100%; text-align: left; border: 0; border-bottom: 1px solid #f0ece3; background: transparent; padding: 13px 18px; font: 500 15px/1.3 Inter, sans-serif; color: #2b3350; cursor: pointer; }
  .bq-list button:hover { background: #faf8f3; }
  .bq-list button[aria-current="true"] { background: #0f1b3d; color: #fff; }
  .bq-pane { min-height: 0; overflow-y: auto; border: 1px solid #e4e0d6; border-radius: 0 16px 16px 0; background: #fff; padding: 40px 48px; }
  .bq-pane .bq-det { max-width: 640px; }
  /* phone list (ld) */
  .bq-plist { padding: 6px 20px 30px; }
  .bq-plist .bq-lg { border-radius: 10px; margin-top: 18px !important; }
  .bq-plist button { display: flex; justify-content: space-between; align-items: center; gap: 12px; width: 100%; text-align: left; border: 0; border-bottom: 1px solid #ece8df; background: transparent; padding: 15px 4px; font: 600 16.5px/1.25 "Source Serif 4", Georgia, serif; color: #0f1b3d; cursor: pointer; }
  .bq-plist button::after { content: "›"; font: 400 22px/1 Inter, sans-serif; color: #b0b4c2; }
  /* switch bar */
  .bq-bar { position: fixed; left: 50%; bottom: ${M ? 10 : 18}px; transform: translateX(-50%); z-index: 99999; display: flex; align-items: center; gap: 4px; background: #0f1b3d; color: #fff; border-radius: 999px; padding: 5px; box-shadow: 0 10px 30px rgba(0,0,0,.3); font: 600 13px/1 Inter, sans-serif; white-space: nowrap; }
  .bq-bar span { padding: 0 8px 0 10px; opacity: .7; }
  .bq-bar button { border: 0; background: transparent; color: #fff; font: inherit; height: ${M ? 38 : 34}px; border-radius: 999px; cursor: pointer; padding: 0 14px; }
  .bq-bar button[aria-pressed="true"] { background: #fff; color: #0f1b3d; }
  .bq-cap { position: fixed; left: 50%; bottom: ${M ? 58 : 64}px; transform: translateX(-50%); z-index: 99999; background: rgba(15,27,61,.92); color: #fff; font: 500 13px/1.35 Inter, sans-serif; padding: 8px 14px; border-radius: 10px; max-width: calc(100vw - 24px); text-align: center; transition: opacity .4s; pointer-events: none; }
  `;
  const el = (h) => { const d = document.createElement('div'); d.innerHTML = h.trim(); return d.firstElementChild; };
  const outcome = (p) => p.o ? `<p class="bq-o">${p.o}</p>` : '<p class="bq-o none">Description to come.</p>';
  const prTag = (p) => p.pr ? '<span class="bq-pr">Proposed</span>' : '';

  // phone options for the block on the page: 1 = three cards stacked, 2 = list of names, 3 = one featured + names, 4 = name chips
  const MOPT = window.BHV_CLEAN ? '2' : ['1', '2', '3', '4'].includes(q.get('m')) ? q.get('m') : '1';
  const MNAMES = { 1: 'Three cards, stacked', 2: 'List of names', 3: 'One featured + names', 4: 'Name chips' };
  function mobileBody() {
    const pick = (arr) => arr.map((t) => P.find((p) => p.t === t));
    const BTN = `<div class="bq-mob-all"><button class="bq-all" type="button">See all ${P.length} programmes →</button></div>`;
    if (MOPT === '1') return `<div class="bq-stack">${pick(['Performance Management', 'Leading Change', 'Team Effectiveness Session']).map((p) => `<div class="bq-tile"><p class="bq-for">${AUD[p.a]}</p><h4 class="bq-t">${p.t}</h4>${outcome(p)}${p.f ? `<p class="bq-fmt">${p.f}</p>` : ''}</div>`).join('')}</div>${BTN}`;
    if (MOPT === '2') return `<div class="bq-names">${pick(['Performance Management', 'Leading a Team', 'Influence Without Authority', 'Trust and Psychological Safety', 'Leading Change', 'Problem Analysis and Decision-Making', 'Team Effectiveness Session']).map((p) => `<div class="bq-name"><b>${p.t}</b><span>${AUD[p.a]}</span></div>`).join('')}</div>${BTN}`;
    if (MOPT === '3') { const f = P.find((p) => p.t === 'Leading Change'); return `<div class="bq-tile bq-feat"><p class="bq-for">${AUD[f.a]}</p><h4 class="bq-t">${f.t}</h4>${outcome(f)}${f.f ? `<p class="bq-fmt">${f.f}</p>` : ''}</div><p class="bq-also">Also:</p><div class="bq-names small">${pick(['Performance Management', 'Leading a Team', 'Influence Without Authority', 'Trust and Psychological Safety', 'Team Effectiveness Session']).map((p) => `<div class="bq-name"><b>${p.t}</b></div>`).join('')}</div>${BTN}`; }
    return `<div class="bq-chips">${pick(['Performance Management', 'Leading a Team', 'Assertive Behaviour', 'Emotional Leadership', 'Influence Without Authority', 'Motivation That Lasts', 'Trust and Psychological Safety', 'Leading Change', 'Strategic Thinking', 'Problem Analysis and Decision-Making', 'Team Effectiveness Session', 'Psychological Safety in the Team']).map((p) => `<span>${p.t}</span>`).join('')}<span class="more">+ ${P.length - 12} more</span></div>${BTN}`;
  }
  function band() {
    const feat = FEATURED.map((t) => P.find((p) => p.t === t));
    if (!M) return el(`<div class="bq bq-band bq-c" data-px><div class="bq-in">
      <div class="bq-top"><div><div class="bq-eye">Our programmes</div><h2 class="bq-h">Training for the gaps <em>that matter.</em></h2>
      <p class="bq-lead">A few of our programmes. Formats vary by programme.</p></div>
      <button class="bq-all" type="button">See all programmes →</button></div>
      <div class="bq-cgrid">${feat.map((p) => `<div class="bq-ccard"><p class="bq-cfor">${AUD[p.a]}</p><h4 class="bq-ct">${p.t}</h4><p class="bq-co2">${p.o}</p>${p.f ? `<div class="bq-chips2">${p.f.split(' · ').map((x) => `<span>${ico(/day/.test(x) ? 'clock' : /Online/.test(x) ? 'laptop' : 'user', 17)}${x}</span>`).join('')}</div>` : ''}</div>`).join('')}</div>
    </div></div>`);
    if (M) return el(`<div class="bq bq-band" data-px><div class="bq-in"><div class="bq-eye">Our programmes</div><h2 class="bq-h">Training for the gaps <em>that matter.</em></h2>
      <p class="bq-lead">A few of our programmes. Formats vary by programme.</p>${mobileBody()}</div></div>`);
    return el(`<div class="bq bq-band" data-px><div class="bq-in">
      <div class="bq-top"><div><div class="bq-eye">Our programmes</div><h2 class="bq-h">Training for the gaps <em>that matter.</em></h2>
      <p class="bq-lead">A few of our programmes. Formats vary by programme.</p></div>
      ${M ? '' : '<button class="bq-all" type="button">See all programmes →</button>'}</div>
      <div class="bq-tiles">${feat.map((p) => `<div class="bq-tile"><p class="bq-for">${AUD[p.a]}</p><h4 class="bq-t">${p.t}</h4>${outcome(p)}${p.f ? `<p class="bq-fmt">${p.f}</p>` : ''}</div>`).join('')}</div>
      <div class="bq-mob-all"><button class="bq-all" type="button">See all programmes →</button></div>
    </div></div>`);
  }

  // ---------- "See all programmes": the catalogue page, copied from the "inside" and "Training details" mock-ups ----------
  const ICO = {
    chart: '<path d="M3 21h18"/><rect x="5" y="12" width="3" height="7" rx="1"/><rect x="10.5" y="8" width="3" height="11" rx="1"/><rect x="16" y="4" width="3" height="15" rx="1"/>',
    flag: '<path d="M5 21V4"/><path d="M5 4h11l-2 4 2 4H5"/>',
    sliders: '<path d="M4 6h10M18 6h2M4 12h4M12 12h8M4 18h12M20 18h0"/><circle cx="16" cy="6" r="2"/><circle cx="10" cy="12" r="2"/><circle cx="18" cy="18" r="2"/>',
    users: '<circle cx="9" cy="8" r="3.2"/><path d="M3.5 20c0-3.3 2.5-5.5 5.5-5.5s5.5 2.2 5.5 5.5"/><circle cx="17" cy="9" r="2.6"/><path d="M15.5 14.6c2.8-.4 5 1.6 5 4.9"/>',
    chat: '<path d="M5 5h14a2 2 0 0 1 2 2v8a2 2 0 0 1-2 2H10l-4.5 3.5V17H5a2 2 0 0 1-2-2V7a2 2 0 0 1 2-2z"/>',
    heart: '<path d="M12 20s-7.5-4.6-7.5-10.2A4.3 4.3 0 0 1 12 7.3a4.3 4.3 0 0 1 7.5 2.5C19.5 15.4 12 20 12 20z"/>',
    cap: '<path d="M2.5 9.5 12 5l9.5 4.5L12 14z"/><path d="M6.5 11.5v4.2c0 1.3 2.5 2.8 5.5 2.8s5.5-1.5 5.5-2.8v-4.2"/>',
    nodes: '<circle cx="12" cy="5.5" r="2.5"/><circle cx="5.5" cy="18" r="2.5"/><circle cx="18.5" cy="18" r="2.5"/><path d="M10.8 7.7 6.7 15.8M13.2 7.7l4.1 8.1M8 18h8"/>',
    zap: '<path d="M13 3 5 13.5h6L10 21l8-10.5h-6z"/>',
    shield: '<path d="M12 3 5 6v5.5c0 4.4 3 8 7 9.5 4-1.5 7-5.1 7-9.5V6z"/><path d="m9 12 2.2 2.2L15.5 10"/>',
    refresh: '<path d="M20 11a8 8 0 0 0-14.3-4.7L4 8M4 4v4h4"/><path d="M4 13a8 8 0 0 0 14.3 4.7L20 16M20 20v-4h-4"/>',
    compass: '<circle cx="12" cy="12" r="9"/><path d="m15.5 8.5-2 5-5 2 2-5z"/>',
    search: '<circle cx="11" cy="11" r="6.5"/><path d="m20 20-4.2-4.2"/>',
    branch: '<circle cx="6" cy="5.5" r="2.3"/><circle cx="6" cy="18.5" r="2.3"/><circle cx="18" cy="9" r="2.3"/><path d="M6 7.8v8.4M18 11.3c0 3.5-4 3.6-10.3 5.5"/>',
    bulb: '<path d="M9 18h6M10 21h4"/><path d="M12 3a6 6 0 0 0-3.6 10.8c.8.6 1.1 1.4 1.1 2.2h5c0-.8.3-1.6 1.1-2.2A6 6 0 0 0 12 3z"/>',
    target: '<circle cx="12" cy="12" r="8.5"/><circle cx="12" cy="12" r="4.5"/><circle cx="12" cy="12" r="1"/>',
    list: '<path d="M9 6h11M9 12h11M9 18h11"/><path d="m3.5 6 1.2 1.2L7 5M3.5 12l1.2 1.2L7 11M3.5 18l1.2 1.2L7 17"/>',
    file: '<path d="M6 3h8l4 4v14H6z"/><path d="M14 3v4h4"/><path d="m9 14 2 2 4-4"/>',
    anchor: '<circle cx="12" cy="5.5" r="2.3"/><path d="M12 7.8V21M8 11h8"/><path d="M4.5 13.5A7.5 7.5 0 0 0 12 21a7.5 7.5 0 0 0 7.5-7.5"/>',
    route: '<circle cx="6" cy="18" r="2.3"/><circle cx="18" cy="6" r="2.3"/><path d="M8.3 18H15a3 3 0 0 0 0-6H9a3 3 0 0 1 0-6h6.7"/>',
    clock: '<circle cx="12" cy="12" r="8.5"/><path d="M12 7.5V12l3 2"/>',
    user: '<circle cx="12" cy="8" r="3.6"/><path d="M5 20c0-3.9 3.1-6.5 7-6.5s7 2.6 7 6.5"/>',
    laptop: '<rect x="4" y="5" width="16" height="10.5" rx="1.5"/><path d="M2.5 19h19"/>',
    calendar: '<rect x="3.5" y="5" width="17" height="15.5" rx="2"/><path d="M3.5 10h17M8 3v4M16 3v4"/>',
    check: '<path d="m5 12.5 4.2 4.2L19 7"/>',
    x: '<path d="M6 6l12 12M18 6 6 18"/>',
    arrow: '<path d="M5 12h14M13 6l6 6-6 6"/>',
    back: '<path d="M19 12H5M11 6l-6 6 6 6"/>',
  };
  const PICON = {
    'Performance Management': 'chart', 'Leadership Foundations': 'flag', 'Adapting Your Leadership Style': 'sliders', 'Situational Delegation': 'branch',
    'Leading a Team': 'users', 'Assertive Behaviour': 'chat', 'Emotional Leadership': 'heart', 'Influence Without Authority': 'cap',
    'Cross-functional Communication and Productive Conflict': 'nodes', 'Motivation That Lasts': 'zap', 'Trust and Psychological Safety': 'shield', 'Leading Change': 'refresh',
    'Strategic Thinking': 'compass', 'Critical Thinking': 'search', 'Problem Analysis and Decision-Making': 'branch', 'Innovative Thinking': 'bulb',
    'Team Effectiveness Session': 'target', 'Shared Goals, Clear Roles': 'target', 'Psychological Safety in the Team': 'shield', 'Team Priorities and Focus': 'list',
    'Team Agreements and Accountability': 'file', 'Resilience to Change': 'anchor', 'Managing Change Together': 'route',
  };
  const ico = (n, size = 22) => `<svg viewBox="0 0 24 24" width="${size}" height="${size}" fill="none" stroke="currentColor" stroke-width="1.6" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true">${ICO[n] || ICO.cap}</svg>`;
  const SHORT = {
    'Performance Management': 'The full management cycle, from goals to reviews.',
    'Leadership Foundations': 'The manager’s role and core communication skills.',
    'Adapting Your Leadership Style': 'Match your style to what each person needs.',
    'Situational Delegation': 'Delegating when the people you lead are managers.',
    'Leading a Team': 'Guide a team through its stages to high performance.',
    'Assertive Behaviour': 'Honest, direct and respectful communication.',
    'Emotional Leadership': 'Influence through connection, not status.',
    'Influence Without Authority': 'Persuade people you don’t manage.',
    'Cross-functional Communication and Productive Conflict': 'Work well across teams and turn conflict into results.',
    'Motivation That Lasts': 'Help each person find lasting, self-driven motivation.',
    'Trust and Psychological Safety': 'Build trust and a team where people speak up.',
    'Leading Change': 'Lead change with high involvement.',
    'Problem Analysis and Decision-Making': 'Find the root cause and decide well.',
    'Innovative Thinking': 'Take an idea from first scan to tested pilot.',
    'Team Effectiveness Session': 'The team agrees its own way of working.',
    'Shared Goals, Clear Roles': 'Agree what the team is for and who does what.',
    'Psychological Safety in the Team': 'Make it safe to speak up and disagree.',
    'Team Priorities and Focus': 'Decide together what matters most now.',
    'Team Agreements and Accountability': 'Set working agreements and keep them.',
    'Resilience to Change': 'Stay steady when plans change.',
    'Managing Change Together': 'Work through a change step by step.',
  };
  const AUD_UP = { l: 'Line managers', m: 'Managers of managers', lm: 'Line managers & managers of managers', lmt: 'Managers & teams', t: 'Teams' };

  const css2 = `
  .bc, .bc * { box-sizing: border-box; }
  .bc { position: fixed !important; inset: 0 !important; z-index: 99990; width: 100vw !important; height: 100vh !important; height: 100dvh !important; margin: 0 !important; transform: none !important;
    overflow-y: auto; overflow-x: hidden; overscroll-behavior: contain; font-family: Inter, Arial, sans-serif; color: #0f1b3d; text-align: left;
    background: radial-gradient(900px 520px at 100% -8%, rgba(196,176,250,.55), rgba(196,176,250,0) 62%), linear-gradient(180deg, #f6f3fd 0, #faf8fb 420px, #fbfaf8 100%); }
  .bc h1, .bc h2, .bc h3, .bc h4, .bc p { margin: 0; width: auto !important; max-width: 100% !important; white-space: normal !important; text-transform: none; letter-spacing: normal; }
  .bc button { font-family: inherit; }
  .bc-arc { position: absolute; right: -120px; top: -60px; width: 640px; height: 360px; pointer-events: none; }
  /* top menu, like the site */
  .bc-nav { position: sticky; top: 0; z-index: 4; background: rgba(250,248,253,.88); backdrop-filter: blur(10px); -webkit-backdrop-filter: blur(10px); border-bottom: 1px solid rgba(15,27,61,.06); }
  .bc-nav .bc-in { display: flex; align-items: center; gap: 36px; height: ${M ? 58 : 72}px; }
  .bc-logo { display: flex; align-items: center; gap: 10px; font: 600 ${M ? 21 : 26}px/1 "Playfair Display", "Source Serif 4", Georgia, serif; color: #0f1b3d; background: none; border: 0; cursor: pointer; padding: 0; }
  .bc-logo i { width: ${M ? 28 : 32}px; height: ${M ? 28 : 32}px; border-radius: 8px; background: #0f1b3d; display: grid; place-items: center; }
  .bc-logo i::before { content: ""; width: 12px; height: 12px; background: radial-gradient(circle, #fff 2.4px, transparent 2.9px) 0 0 / 6px 6px; }
  .bc-logo img { height: ${M ? 26 : 30}px; width: auto; display: block; }
  .bc-links { display: ${M ? 'none' : 'flex'}; gap: 34px; }
  .bc-links button { border: 0; background: none; font: 500 15px/1 Inter, sans-serif; color: #2b3350; cursor: pointer; padding: 0; }
  .bc-demo { margin-left: auto; border: 0; background: #0f1b3d; color: #fff; border-radius: 999px; padding: ${M ? '10px 16px' : '13px 26px'}; font: 600 ${M ? 13.5 : 15}px/1 Inter, sans-serif; cursor: pointer; }
  .bc-in { max-width: 1240px; margin: 0 auto; padding: 0 ${M ? 20 : 48}px; position: relative; }
  /* heading block */
  .bc-head { padding-top: ${M ? 20 : 26}px; padding-bottom: ${M ? 12 : 16}px; position: relative; z-index: 1; }
  .bc-back { display: inline-flex; align-items: center; gap: 8px; border: 1.5px solid #0f1b3d; background: #fff; color: #0f1b3d; font: 600 14px/1 Inter, sans-serif; padding: 10px 16px; border-radius: 999px; margin: 0 0 22px; cursor: pointer; }
  .bc-back:hover { background: #0f1b3d; color: #fff; }
  .bc .bc-risk { margin-top: 10px; font: 500 ${M ? 14.5 : 15.5}px/1.5 Inter, sans-serif !important; color: #5b3fc4 !important; }
  .bc-eye { display: flex; align-items: center; gap: 14px; font: 700 ${M ? 12 : 12.5}px/1 Inter, sans-serif; letter-spacing: .12em; text-transform: uppercase; color: #5b3fc4; }
  .bc-tile { width: ${M ? 36 : 40}px; height: ${M ? 36 : 40}px; border-radius: 12px; background: #ece6fb; color: #5b3fc4; display: grid; place-items: center; flex: none; }
  .bc .bc-h { font: 600 ${M ? 30 : 44}px/1.08 "Source Serif 4", Georgia, serif !important; letter-spacing: -.015em !important; color: #0f1b3d !important; margin: ${M ? 12 : 12}px 0 0; }
  .bc .bc-h em { font-style: italic; font-weight: 500; color: #ef7a1a !important; }
  .bc .bc-lead { font: 400 ${M ? 15.5 : 17}px/1.5 Inter, sans-serif !important; color: #4f5770 !important; margin-top: 8px; }
  .bc-facts { display: flex; flex-wrap: wrap; align-items: center; gap: ${M ? '12px' : '0'}; margin-top: ${M ? 18 : 26}px; ${M ? 'flex-direction: column; align-items: flex-start;' : ''} }
  .bc-facts span { display: flex; align-items: center; gap: 12px; font: 500 ${M ? 14 : 15.5}px/1.3 Inter, sans-serif; color: #3b4258; padding: ${M ? '0' : '0 28px'}; }
  .bc-facts span:first-child { padding-left: ${M ? 0 : 4}px; }
  .bc-facts span + span { border-left: ${M ? '0' : '1px solid #dcd7e8'}; }
  .bc-facts svg { color: #5b3fc4; flex: none; }
  .bc-filters { display: flex; gap: 8px; margin-top: ${M ? 18 : 22}px; padding-bottom: ${M ? 14 : 18}px; border-bottom: 1px solid #e6e2ec; ${M ? 'overflow-x: auto; scrollbar-width: none; margin-right: -20px; padding-right: 20px;' : ''} }
  .bc-filters::-webkit-scrollbar { display: none; }
  .bc-filters button { flex: none; display: inline-flex; align-items: center; gap: 10px; border: 1.5px solid #dcd7e8; background: rgba(255,255,255,.7); color: #0f1b3d; border-radius: 999px; padding: ${M ? '9px 14px' : '10px 18px'}; font: 600 ${M ? 13.5 : 14}px/1 Inter, sans-serif; cursor: pointer; }
  .bc-filters button b { font-weight: 500; color: #6d7386; }
  .bc-filters button[aria-pressed="true"] { background: #0f1b3d; border-color: #0f1b3d; color: #fff; }
  .bc-filters button[aria-pressed="true"] b { color: rgba(255,255,255,.75); }
  .bc-frow { display: flex; align-items: center; gap: 16px; flex-wrap: wrap; margin-top: ${M ? 18 : 22}px; padding-bottom: ${M ? 14 : 18}px; border-bottom: 1px solid #e6e2ec; }
  .bc-frow .bc-filters { margin-top: 0; padding-bottom: 0; border-bottom: 0; ${M ? 'width: 100%;' : ''} }
  .bc-area { display: inline-flex; align-items: center; gap: 10px; ${M ? '' : 'margin-left: auto;'} font: 600 13.5px/1 Inter, sans-serif; color: #5a6278; }
  .bc-area select { appearance: none; -webkit-appearance: none; border: 1.5px solid #dcd7e8; background: #fff url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='12' height='8' viewBox='0 0 12 8'%3E%3Cpath d='M1 1.5 6 6.5 11 1.5' fill='none' stroke='%235b3fc4' stroke-width='1.8' stroke-linecap='round'/%3E%3C/svg%3E") no-repeat right 14px center; border-radius: 999px; padding: ${M ? '9px 36px 9px 14px' : '10px 40px 10px 16px'}; font: 600 ${M ? 13.5 : 14}px/1 Inter, sans-serif; color: #0f1b3d; cursor: pointer; }
  .bc .bc-empty { margin: 26px 0 !important; font: 400 15px/1.5 Inter, sans-serif !important; color: #5a6278 !important; }
  /* groups and cards: each audience has its own soft colour, the same as the three levels in the model */
  .bc .bc-navback { margin: 0 !important; padding: 9px 15px !important; }
  .bc-grp[data-g="l"] { --g: #2268d6; --gt: #e9f0fd; } .bc-grp[data-g="m"] { --g: #0f9b84; --gt: #e2f5f0; } .bc-grp[data-g="t"] { --g: #6a3fd8; --gt: #efe9fc; }
  .bc-grp[data-g] { margin-top: 20px; padding: ${M ? '20px 14px 16px' : '28px 26px 24px'} !important; border-radius: 22px; background: linear-gradient(180deg, var(--gt) 0, rgba(255,255,255,0) 220px); border-top: 3px solid var(--g); }
  .bc-grp[data-g] .bc-gh::before { content: ""; width: 11px; height: 11px; border-radius: 50%; background: var(--g); flex: none; }
  .bc-grp[data-g] .bc-count { color: var(--g); background: #fff; box-shadow: 0 0 0 1px var(--gt); }
  .bc-grp[data-g] .bc-card .bc-tile { background: var(--gt); color: var(--g); }
  .bc-grp { padding: ${M ? '20px 0 4px' : '26px 0 4px'}; }
  .bc .bc-gh { display: flex; align-items: center; gap: 14px; font: 600 ${M ? 22 : 26}px/1.1 "Source Serif 4", Georgia, serif !important; color: #0f1b3d !important; margin-bottom: ${M ? 12 : 14}px; letter-spacing: -.01em; }
  .bc-count { font: 600 ${M ? 12.5 : 13}px/1 Inter, sans-serif; color: #5b3fc4; background: #ece6fb; border-radius: 999px; padding: 5px 10px; }
  .bc-cards { display: grid; grid-template-columns: repeat(${M ? 1 : 3}, minmax(0, 1fr)); gap: ${M ? 10 : 14}px; }
  .bc-card { display: grid; grid-template-columns: ${M ? 40 : 42}px minmax(0, 1fr); gap: ${M ? 14 : 16}px; align-items: start; text-align: left; background: #fff; border: 1px solid #ece8f2; border-radius: 14px; padding: ${M ? '14px 16px' : '16px 18px'}; box-shadow: 0 2px 8px rgba(40,30,90,.04); cursor: pointer; color: inherit; transition: box-shadow .15s, transform .15s; }
  .bc-card:hover { box-shadow: 0 8px 22px rgba(40,30,90,.08); border-color: #d9d2ea; }
  .bc-card .bc-tile { width: ${M ? 40 : 42}px; height: ${M ? 40 : 42}px; border-radius: 10px; background: #f3effc; color: #5b3fc4; }
  .bc .bc-ct { font: 600 ${M ? 17 : 17.5}px/1.25 "Source Serif 4", Georgia, serif !important; color: #0f1b3d !important; }
  .bc .bc-co { font: 400 ${M ? 14 : 14.5}px/1.45 Inter, sans-serif !important; color: #4f5770 !important; margin-top: 4px; }
  .bc .bc-co.none { color: #9aa0b4 !important; font-style: italic; }
  .bc-more { display: inline-flex; align-items: center; gap: 5px; margin-top: 8px; font: 600 13.5px/1 Inter, sans-serif; color: #ef7a1a; }
  .bc-pr { display: inline-block; vertical-align: 3px; margin-left: 8px; font: 700 10px/1 Inter, sans-serif; letter-spacing: .08em; text-transform: uppercase; color: #9a4a08; background: #fde9d6; padding: 4px 7px; border-radius: 4px; }
  .bc .bc-end { display: flex; align-items: center; justify-content: space-between; gap: 24px; margin-top: -30px; margin-bottom: 90px; background: #fff; border-radius: 22px; padding: 30px 36px; box-shadow: 0 0 0 1px rgba(20,35,75,.06), 0 24px 50px -34px rgba(30,25,80,.3); max-width: 1144px; }
  .bc .bc-end p { margin: 0; font: 600 24px/1.25 "Playfair Display", Georgia, serif; color: #0f1b3d; }
  .bc .bc-end p span { display: block; margin-top: 6px; font: 400 16px/1.5 Inter, sans-serif; color: #4f5770; }
  .bc .bc-cta { flex: none; border: 0; background: #0f1b3d; color: #fff; border-radius: 999px; padding: 15px 28px; font: 600 15px/1 Inter, sans-serif; cursor: pointer; }
  .bc .bc-note { margin: ${M ? '26px 0 40px' : '34px 0 70px'}; padding-top: 18px; border-top: 1px solid #e6e2ec; font: 400 15px/1.5 Inter, sans-serif !important; color: #4f5770 !important; }
  .bc .bc-note b { color: #0f1b3d; }
  /* details panel */
  .bc-dim { position: fixed; inset: 0; background: rgba(46,38,110,.30); z-index: 99991; }
  body:has(.bc) .bq-bar, body:has(.bc) .bq-cap { display: none !important; }
  .bc-panel { position: fixed; top: 0; right: 0; bottom: 0; width: ${M ? '100%' : 'min(760px, 46vw)'}; z-index: 99992; background: #fff; border-radius: ${M ? '0' : '34px 0 0 34px'}; overflow-y: auto; overflow-x: hidden; padding: ${M ? '20px 22px 36px' : '48px 52px 44px'}; box-shadow: -30px 0 60px rgba(30,20,80,.18); font-family: Inter, Arial, sans-serif; color: #0f1b3d; }
  .bc-panel h2, .bc-panel h3, .bc-panel p { margin: 0; white-space: normal; text-transform: none; }
  .bc-waves { position: absolute; right: 0; bottom: 0; width: 520px; height: 260px; pointer-events: none; }
  .bc-px { position: absolute; top: 22px; right: 22px; width: 40px; height: 40px; border-radius: 50%; border: 1px solid #e6e2ec; background: #fff; color: #0f1b3d; display: ${M ? 'none' : 'grid'}; place-items: center; cursor: pointer; }
  .bc-pback { display: ${M ? 'inline-flex' : 'none'}; align-items: center; gap: 8px; border: 0; background: none; font: 500 14.5px/1 Inter, sans-serif; color: #5a6278; padding: 4px 0 20px; cursor: pointer; }
  .bc-aud { display: flex; align-items: center; gap: 12px; }
  .bc-aud .bc-tile { width: 38px; height: 38px; }
  .bc-aud span { font: 700 12px/1 Inter, sans-serif; letter-spacing: .1em; text-transform: uppercase; color: #5b3fc4; background: #ece6fb; padding: 9px 12px; border-radius: 10px; }
  .bc-panel .bc-pt { font: 600 ${M ? 28 : 34}px/1.1 "Source Serif 4", Georgia, serif; letter-spacing: -.015em; color: #0f1b3d; margin-top: 14px; }
  .bc-panel .bc-po { font: 400 ${M ? 15.5 : 17}px/1.5 Inter, sans-serif; color: #4f5770; margin-top: 10px; }
  .bc-panel .bc-po.none { color: #9aa0b4; font-style: italic; }
  .bc-sep { height: 1px; background: #e9e5ef; margin: ${M ? '20px 0' : '24px 0'}; }
  .bc-panel .bc-wh { font: 700 12px/1 Inter, sans-serif; letter-spacing: .12em; text-transform: uppercase; color: #5a6278; margin-bottom: 14px; }
  .bc-checks { list-style: none !important; margin: 0; padding: 0 !important; display: grid; gap: 10px; }
  .bc-checks li { display: flex !important; align-items: center; gap: 14px; font: 400 ${M ? 15 : 16}px/1.4 Inter, sans-serif; color: #1f2740; }
  .bc-checks i { width: 26px; height: 26px; border-radius: 50%; background: #efeafc; color: #5b3fc4; display: grid; place-items: center; flex: none; }
  .bc-meta { display: grid; gap: ${M ? 12 : 14}px; }
  .bc-meta > div { display: grid; grid-template-columns: 40px ${M ? '1fr' : '170px minmax(0, 1fr)'}; align-items: center; column-gap: ${M ? 14 : 18}px; row-gap: 3px; }
  .bc-meta .bc-tile { width: 40px; height: 40px; ${M ? 'grid-row: span 2;' : ''} }
  ${M ? '' : '.bc-meta > div { align-items: start !important; } .bc-meta small { padding-top: 13px; } .bc-meta b { padding-top: 8px; }'}
  .bc-meta small { font: 600 12px/1.2 Inter, sans-serif; letter-spacing: .12em; text-transform: uppercase; color: #5a6278; }
  .bc-meta b { font: 400 ${M ? 15.5 : 16.5}px/1.4 Inter, sans-serif; color: #1f2740; }
  .bc-panel .bc-pt em { font-style: italic; font-weight: 500; }
  ${M ? ".bc-panel { left: 0 !important; right: 0 !important; width: auto !important; } .bc-aud { flex-wrap: wrap; } .bc-aud span { white-space: normal; line-height: 1.3 !important; } html:has(.bc) { overflow-x: hidden; }" : ""}
  `;
  const ARC = '<svg class="bc-arc" viewBox="0 0 640 360" aria-hidden="true"><path d="M640 40C520 120 420 230 260 360H640z" fill="rgba(186,160,250,.22)"/><path d="M640 0C560 90 470 170 330 250" fill="none" stroke="rgba(150,120,240,.18)" stroke-width="2"/></svg>';
  const WAVES = '<svg class="bc-waves" viewBox="0 0 520 260" aria-hidden="true"><path d="M520 70C420 120 330 210 160 260H520z" fill="rgba(196,176,250,.20)"/><path d="M520 150C450 190 380 235 300 260H520z" fill="rgba(196,176,250,.28)"/></svg>';
  const inLevel = (p, k) => k === 'all' || p.a.includes(k);
  const count = (k) => P.filter((p) => inLevel(p, k)).length;

  function cardHTML(p) {
    return `<button class="bc-card" type="button" data-i="${p.i}"><span class="bc-tile">${ico(PICON[p.t], 20)}</span><span><span class="bc-ct" style="display:block">${p.t}${p.pr ? '<span class="bc-pr">Proposed</span>' : ''}</span>${(SHORT[p.t] || p.short) ? `<span class="bc-co" style="display:block">${SHORT[p.t] || p.short}</span>` : '<span class="bc-co none" style="display:block">Description to come.</span>'}<span class="bc-more">More ${ico('arrow', 16)}</span></span></button>`;
  }
  function groupsHTML(k, area = '') {
    const groups = k === 'all' ? LEVELS.slice(1) : LEVELS.filter(([x]) => x === k);
    const html = groups.map(([g, n]) => { const items = P.filter((p) => p.a.includes(g) && (!area || p.ar.includes(area))); if (!items.length) return ''; return `<div class="bc-grp" data-g="${g}"><h2 class="bc-gh">${n}<span class="bc-count">${items.length}</span></h2><div class="bc-cards">${items.map(cardHTML).join('')}</div></div>`; }).join('');
    return html || '<p class="bc-empty">No programmes for this combination yet. Try “All” or another area.</p>';
  }

  window.bhvOpenProgrammes = () => openList(); // 25 Nov: the menu and footer open the full list too
  function openList() {
    let lv = 'all', area = '';
    const NOTE_HTML = '<p class="bc-note"><b>Also available:</b> one-to-one coaching for managers of managers, and team coaching with the manager.</p>';
    const AREA_SELECT = `<label class="bc-area"><span>Area</span><select aria-label="Area">${['', ...Object.keys(AREAS)].map((k) => `<option value="${k}">${k ? AREAS[k][0] : 'All six areas'}</option>`).join('')}</select></label>`;
    const ov = el(`<div class="bc" role="dialog" aria-modal="true" aria-label="Programmes">${ARC}
      <div class="bc-nav"><div class="bc-in"><button class="bc-logo" type="button" data-close><img src="logo-behavency.png" alt="">Behavency</button>
        <button class="bc-back bc-navback" type="button" data-close>${ico('back', 16)} Back to the journey</button>
        <button class="bc-demo" type="button" data-close>Request a demo</button></div></div>
      <div class="bc-in bc-head">
        <div class="bc-eye"><span class="bc-tile">${ico('cap', M ? 22 : 26)}</span>Programmes</div>
        <h1 class="bc-h">Programmes for managers <em>and teams.</em></h1>
        <p class="bc-lead">Each participant gets the programmes that match their priority areas, with a plan to apply them at work.</p>
        <p class="bc-risk">${RISK_LINE}</p>
                <div class="bc-frow"><div class="bc-filters" role="group" aria-label="Filter">${LEVELS.map(([k, n]) => `<button type="button" data-lv="${k}" aria-pressed="${k === lv}">${n} <b>${k === 'all' ? P.length : count(k)}</b></button>`).join('')}</div></div>
      </div>
      <div class="bc-in bc-res">${groupsHTML(lv)}<p class="bc-note"><b>Also available:</b> one-to-one coaching for managers of managers, and team coaching with the manager.</p></div>
      <div class="bc-in bc-end"><p>Not sure which programmes fit? <span>We’ll match them to your managers’ results.</span></p><button type="button" class="bc-cta" data-cm-open>Request a demo</button></div>
    </div>`);
    const close = () => { closePanel(); ov.remove(); document.documentElement.style.overflow = ''; removeEventListener('keydown', esc); removeEventListener('popstate', pop); };
    const esc = (e) => { if (e.key !== 'Escape') return; if (document.querySelector('.bc-panel')) closePanel(); else history.back(); };
    const pop = () => { if (document.querySelector('.bc-panel')) { closePanel(); history.pushState({ bc: 1 }, ''); } else close(); };
    ov.addEventListener('click', (e) => {
      if (e.target.closest('[data-close]')) { history.back(); return; }
      const f = e.target.closest('.bc-filters button');
      if (f) { lv = f.dataset.lv; refresh(); ov.querySelectorAll('.bc-filters button').forEach((x) => x.setAttribute('aria-pressed', x === f)); return; }
      if (false) { lv = f.dataset.lv; ov.querySelectorAll('.bc-filters button').forEach((x) => x.setAttribute('aria-pressed', x === f)); ov.querySelector('.bc-res').innerHTML = groupsHTML(lv) + '<p class="bc-note"><b>Also available:</b> one-to-one coaching for managers of managers, and team coaching with the manager.</p>'; return; }
      const c = e.target.closest('.bc-card'); if (c) openPanel(P[+c.dataset.i]);
    });
    const refresh = () => { ov.querySelector('.bc-res').innerHTML = groupsHTML(lv, area) + NOTE_HTML; };
    history.pushState({ bc: 1 }, '');
    addEventListener('popstate', pop);
    addEventListener('keydown', esc);
    document.documentElement.style.overflow = 'hidden';
    document.body.appendChild(ov);
    ov.querySelector('.bc-back').focus();
  }

  // "Recommended when": links the programme to the areas the assessment measures (from the trainers' sheet).
  function recommend(p) {
    if (!p.ar.length) return '<small>Recommended for</small><b>Managers new in the role</b>';
    const names = p.ar.map((k) => AREAS[k][0]);
    const list = names.length > 1 ? names.slice(0, -1).join(', ') + ' or ' + names[names.length - 1] : names[0];
    const who = p.a === 't' ? 'a team’s' : p.a === 'lmt' ? 'a manager’s or team’s' : 'a manager’s';
    return `<small>Recommended when</small><b>${who} results are low in ${list}</b>`;
  }
  let lastFocus = null;
  function closePanel() { document.querySelectorAll('.bc-dim, .bc-panel').forEach((x) => x.remove()); if (lastFocus) lastFocus.focus(); }
  function openPanel(p) {
    closePanel(); lastFocus = document.activeElement;
    const dim = el('<div class="bc-dim"></div>');
    const aIco = p.a === 't' ? 'users' : 'users';
    const pn = el(`<div class="bc-panel" role="dialog" aria-label="${p.t}">${WAVES}
      <button class="bc-px" type="button" aria-label="Close">${ico('x', 20)}</button>
      <button class="bc-pback" type="button">${ico('back', 16)} All programmes</button>
      <div class="bc-aud"><span class="bc-tile">${ico(aIco, 24)}</span><span>${AUD_UP[p.a]}</span></div>
      <h2 class="bc-pt">${p.t.replace(/^(\S+)/, "<em>$1</em>")}${p.pr ? '<span class="bc-pr">Proposed</span>' : ''}</h2>
      ${p.o ? `<p class="bc-po">${p.o}</p>` : '<p class="bc-po none">Description to come.</p>'}
      ${(p.can || p.fo).length ? `<div class="bc-sep"></div><p class="bc-wh">${p.can ? 'After the programme, participants can' : 'You’ll work on'}</p><ul class="bc-checks">${(p.can || p.fo).slice(0, 3).map((x) => `<li><i>${ico('check', 14)}</i>${x}</li>`).join('')}</ul>` : ''}
      <div class="bc-sep"></div>
      <div class="bc-meta">
        <div><span class="bc-tile">${ico('calendar', 22)}</span><small>Format</small><b>${p.f || 'To be confirmed'}</b></div>
        <div><span class="bc-tile">${ico('target', 22)}</span>${recommend(p)}</div>
        <div><span class="bc-tile">${ico('users', 22)}</span><small>For</small><b>${AUD_UP[p.a]}</b></div>
      </div>
    </div>`);
    dim.addEventListener('click', closePanel);
    pn.querySelector('.bc-px').addEventListener('click', closePanel);
    pn.querySelector('.bc-pback').addEventListener('click', closePanel);
    document.body.appendChild(dim); document.body.appendChild(pn);
    pn.querySelector(M ? '.bc-pback' : '.bc-px').focus();
  }

  function apply() {
    const anchor = M ? document.querySelector('#journey') : document.querySelector('#delivery-v2');
    if (!anchor) return false;
    if (document.querySelector('[data-px]')) return true;
    const b = band();
    anchor.after(b);
    b.querySelectorAll('.bq-all').forEach((x) => x.addEventListener('click', openList));
    return true;
  }
  function bar() {
    if (!M || CLEAN) return; // desktop and the clean page: nothing added
    const b = el(`<div class="bq-bar" role="group" aria-label="Phone option"><span>Option</span>${['1', '2', '3', '4'].map((k) => `<button data-m="${k}" aria-pressed="${k === MOPT}">${k}</button>`).join('')}</div>`);
    b.addEventListener('click', (e) => { const x = e.target.closest('button'); if (!x || x.dataset.m === MOPT) return; location.hash = 'm=' + x.dataset.m; location.reload(); });
    document.body.appendChild(b);
    const cap = el(`<div class="bq-cap">Option ${MOPT} · ${MNAMES[MOPT]}<br>Scroll to Build, after “You choose how your people learn”.</div>`);
    document.body.appendChild(cap);
    setTimeout(() => { cap.style.opacity = '0'; }, 5000);
  }
  function start() {
    const s = document.createElement('style'); s.textContent = css + css2; document.head.appendChild(s);
    bar();
    let tries = 0;
    const t = setInterval(() => { if (apply() || ++tries > 80) clearInterval(t); }, 200);
    new MutationObserver(() => { if (!document.querySelector('[data-px]')) apply(); }).observe(document.getElementById('root') || document.body, { childList: true, subtree: true });
  }
  if (document.readyState === 'loading') document.addEventListener('DOMContentLoaded', start); else start();
})();
