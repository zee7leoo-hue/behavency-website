// Phone versions of the training programmes part (block on the page, catalogue, details). Switch with #m=a|b|c|d.
// Data copied unchanged from ../programmes.js.
(function () {
  const M = (window.BHV_SITE || 'desk') === 'mob';
  const AREAS = {
    C: ['Clarity & Alignment', '#2f6fdb'], T: ['Trust & Inclusion', '#0f9a83'], F: ['Focus & Prioritization', '#d9731a'],
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
  const RISK_LINE = "Each programme is adapted to what your managers are facing now: heavier workloads, constant change and bigger teams.";
  P.forEach((p) => { const c = CONTENT[p.t]; if (c) { if (c.f) p.f = c.f; if (!p.o && c.o) p.o = c.o; p.can = c.can; p.h = c.h; p.short = c.short; } p.pr = false; });
  const CLEAN = !!window.BHV_CLEAN; // clean page for the website: no mock-up bars or hints
  const FEATURED = ['Performance Management', 'Leading a Team', 'Influence Without Authority', 'Leading Change', 'Problem Analysis and Decision-Making', 'Team Effectiveness Session'];

  // Round 2: tiles stay after the formats (P2). Two ways to open the full list:
  // "cat" = catalogue with filters and a detail panel; "ld" = list on the left, details on the right, fitting one screen.
  const q = new URLSearchParams(location.hash.slice(1));
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
    plus: '<path d="M12 5v14M5 12h14"/>',
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
  const el = (h) => { const d = document.createElement("div"); d.innerHTML = h.trim(); return d.firstElementChild; };
  // ===================== Phone versions (A–D) =====================
  const VERS = { a: 'Cards + bottom sheet', b: 'Editorial index', c: 'Featured + level tiles', d: 'Browse by level' };
  const VDESC = {
    a: 'Three programme cards; the catalogue has level chips; details slide up from the bottom.',
    b: 'A numbered contents list; the catalogue opens level by level; details open as a page.',
    c: 'One featured programme + short list; pick a level from four tiles; details as a page.',
    d: 'Start from who it is for; the catalogue opens each programme in place.',
  };
  const TMC = !!window.TM_CLEAN; // developer link: only the chosen version (D), no switch bar
  const V = TMC ? 'd' : VERS[(q.get('m') || '').toLowerCase()] ? q.get('m').toLowerCase() : 'a';
  const byT = (t) => P.find((p) => p.t === t);
  const pick = (arr) => arr.map(byT);
  const em1 = (t) => t.replace(/^(\S+)/, '<em>$1</em>');
  const short = (p) => SHORT[p.t] || p.short || '';
  const levelOf = (p) => p.a === 't' ? 't' : p.a === 'm' ? 'm' : 'l';
  const LV = [['all', 'All'], ['l', 'Line managers'], ['m', 'Managers of managers'], ['t', 'Teams']];
  const inLv = (p, k) => k === 'all' || p.a.includes(k);
  const cnt = (k) => P.filter((p) => inLv(p, k)).length;
  const LV_ICO = { l: 'user', m: 'users', t: 'target', all: 'cap' };
  const fmtChips = (p) => (p.f || '').split(' · ').filter(Boolean).map((x) => `<span class="tm-chip">${ico(/Online/.test(x) ? 'laptop' : 'user', 15)}${x}</span>`).join('');
  const recRow = (p) => {
    if (!p.ar.length) return ['Recommended for', 'Managers new in the role'];
    const names = p.ar.map((k) => AREAS[k][0]);
    const list = names.length > 1 ? names.slice(0, -1).join(', ') + ' or ' + names[names.length - 1] : names[0];
    const who = p.a === 't' ? 'a team’s' : p.a === 'lmt' ? 'a manager’s or team’s' : 'a manager’s';
    return ['Recommended when', `${who.charAt(0).toUpperCase() + who.slice(1)} results are low in ${list}`];
  };
  const NOTE = '<p class="tm-note"><b>Also available:</b> one-to-one coaching for managers of managers, and team coaching with the manager.</p>';
  const MORE = `<span class="tm-more">More ${ico('arrow', 15)}</span>`;

  const css3 = `
  .tm, .tm * { box-sizing: border-box; }
  .tm { font-family: Inter, Arial, sans-serif; color: #0f1b3d; text-align: left; -webkit-tap-highlight-color: transparent; }
  .tm h1, .tm h2, .tm h3, .tm h4, .tm p, .tm ul, .tm li { margin: 0; padding: 0; width: auto !important; max-width: 100% !important; white-space: normal !important; text-transform: none; letter-spacing: normal; background: none; -webkit-text-fill-color: currentColor; text-align: left; }
  .tm button { font-family: Inter, Arial, sans-serif; color: inherit; -webkit-appearance: none; appearance: none; margin: 0; }
  .tm em { font-style: italic; }
  .tm-in { padding: 0 20px; }
  /* ---------- block on the page ---------- */
  .tm-band { padding: 24px 0 60px; background: #f4f0fe; overflow: hidden; }
  .tm .tm-eye { display: flex; align-items: center; gap: 10px; font: 600 12px/1 Inter, sans-serif !important; letter-spacing: .16em !important; text-transform: uppercase !important; color: #e8701a !important; }
  .tm .tm-eye::before { content: ""; width: 24px; height: 1.5px; background: currentColor; }
  .tm .tm-h { font: 600 32px/1.1 "Playfair Display", "Source Serif 4", Georgia, serif !important; letter-spacing: -.01em !important; color: #0f1b3d !important; -webkit-text-fill-color: #0f1b3d !important; margin-top: 14px !important; }
  .tm .tm-h em { font-weight: 500; color: #ef7a1a !important; -webkit-text-fill-color: #ef7a1a !important; }
  .tm .tm-lead { margin-top: 12px !important; font: 400 15.5px/1.55 Inter, sans-serif !important; color: #4f5770 !important; }
  .tm-allbtn { display: flex; align-items: center; justify-content: center; gap: 10px; width: 100%; min-height: 52px; margin-top: 22px; border: 1.5px solid #0f1b3d; border-radius: 999px; background: transparent; font: 600 15.5px/1 Inter, sans-serif !important; color: #0f1b3d !important; cursor: pointer; }
  .tm-allbtn:active { background: #0f1b3d; color: #fff !important; }
  .tm-tile { width: 40px; height: 40px; border-radius: 12px; background: #f1edfb; color: #5b3fc4; display: grid; place-items: center; flex: none; }
  .tm .tm-for { font: 700 12px/1.3 Inter, sans-serif !important; letter-spacing: .09em !important; text-transform: uppercase !important; color: #6a4bd2 !important; }
  .tm .tm-t { font: 600 19px/1.25 "Source Serif 4", Georgia, serif !important; color: #0f1b3d !important; letter-spacing: -.005em !important; }
  .tm .tm-d { font: 400 14.5px/1.5 Inter, sans-serif !important; color: #4f5770 !important; }
  .tm-more { display: inline-flex; align-items: center; gap: 5px; font: 600 14px/1 Inter, sans-serif; color: #ef7a1a; }
  .tm-chip { display: inline-flex; align-items: center; gap: 6px; background: #f6f4f9; border-radius: 999px; padding: 7px 11px; font: 500 13px/1 Inter, sans-serif; color: #1f2740; }
  .tm-chip svg { color: #6a4bd2; }
  /* A: cards */
  .tm-acards { display: grid; gap: 12px; margin-top: 24px; }
  .tm-acard { display: block; width: 100%; text-align: left; background: #fff; border: 1px solid #efebf3; border-radius: 20px; padding: 18px 18px 16px; box-shadow: 0 6px 20px rgba(60,40,120,.06); cursor: pointer; }
  .tm-acard .tm-row1 { display: flex; align-items: center; gap: 12px; }
  .tm-acard .tm-t { margin-top: 12px !important; font-size: 20px !important; }
  .tm-acard .tm-d { margin-top: 6px !important; }
  .tm-acard .tm-foot { display: flex; align-items: center; justify-content: space-between; gap: 8px; margin-top: 14px; }
  .tm-acard .tm-foot > span:first-child { display: flex; gap: 6px; flex-wrap: wrap; }
  /* B: editorial index */
  .tm-blist { margin-top: 26px; border-top: 1px solid #e4dfe8; }
  .tm-brow { display: grid; grid-template-columns: 38px minmax(0, 1fr) 18px; gap: 4px 10px; align-items: start; width: 100%; text-align: left; background: none; border: 0; border-bottom: 1px solid #e4dfe8; padding: 18px 0; cursor: pointer; }
  .tm-num { font: italic 500 22px/1 "Playfair Display", Georgia, serif; color: #ef7a1a; padding-top: 2px; }
  .tm-brow .tm-t { font-size: 19px !important; }
  .tm-brow .tm-d { font-size: 14px !important; margin-top: 4px !important; }
  .tm-brow .tm-for { font: 500 13px/1.35 Inter, sans-serif !important; letter-spacing: 0 !important; text-transform: none !important; margin-top: 7px !important; color: #6a4bd2 !important; }
  .tm-chev { color: #b4aec6; padding-top: 3px; }
  /* C: featured + rows */
  .tm-feat { display: block; width: 100%; text-align: left; margin-top: 24px; border: 0; border-radius: 22px; padding: 22px 20px 20px; cursor: pointer; background: linear-gradient(160deg, #efe9fd 0%, #f6f2fe 55%, #fff 100%); box-shadow: inset 0 0 0 1px #e6defa; position: relative; overflow: hidden; }
  .tm-feat::after { content: ""; position: absolute; right: -40px; top: -40px; width: 150px; height: 150px; border-radius: 50%; background: rgba(186,160,250,.18); }
  .tm-feat .tm-tile { width: 48px; height: 48px; border-radius: 14px; background: #fff; position: relative; z-index: 1; }
  .tm-feat .tm-for { margin-top: 16px !important; }
  .tm-feat .tm-t { font-size: 24px !important; margin-top: 6px !important; }
  .tm-feat .tm-t em { font-weight: 500; }
  .tm-feat .tm-d { margin-top: 8px !important; font-size: 15px !important; color: #3f4762 !important; }
  .tm-feat .tm-foot { display: flex; align-items: center; justify-content: space-between; gap: 8px; margin-top: 16px; }
  .tm-feat .tm-chip { background: rgba(255,255,255,.85); }
  .tm .tm-also { margin-top: 22px !important; font: 700 12px/1 Inter, sans-serif !important; letter-spacing: .12em !important; text-transform: uppercase !important; color: #6d7386 !important; }
  .tm-rows { margin-top: 10px; background: #fff; border: 1px solid #efebf3; border-radius: 18px; overflow: hidden; }
  .tm-crow { display: flex; align-items: center; gap: 14px; width: 100%; min-height: 64px; text-align: left; background: none; border: 0; border-top: 1px solid #f1eef5; padding: 12px 16px; cursor: pointer; }
  .tm-crow:first-child { border-top: 0; }
  .tm-crow .tm-tile { width: 36px; height: 36px; border-radius: 10px; }
  .tm-crow > span:nth-child(2) { flex: 1; min-width: 0; }
  .tm-crow .tm-t { font-size: 16.5px !important; display: block; }
  .tm-crow .tm-sub { display: block; font: 500 13px/1.3 Inter, sans-serif; color: #6d7386; margin-top: 3px; }
  /* D: level doors */
  .tm-doors { display: grid; gap: 12px; margin-top: 24px; }
  .tm-door { display: block; width: 100%; text-align: left; background: #fff; border: 1px solid #efebf3; border-radius: 20px; padding: 18px; box-shadow: 0 6px 20px rgba(60,40,120,.05); cursor: pointer; }
  .tm-door .tm-row1 { display: flex; align-items: center; gap: 14px; }
  .tm-door .tm-row1 > span:nth-child(2) { flex: 1; min-width: 0; }
  .tm-door .tm-lvname { display: block; font: 600 20px/1.2 "Source Serif 4", Georgia, serif; color: #0f1b3d; }
  .tm-door .tm-lvcount { display: block; font: 500 13.5px/1.3 Inter, sans-serif; color: #6a4bd2; margin-top: 3px; }
  .tm-door .tm-ex { display: grid; gap: 0; margin-top: 14px; border-top: 1px solid #f1eef5; }
  .tm-door .tm-ex span { display: flex; align-items: center; gap: 10px; padding: 10px 0 0; font: 500 14.5px/1.35 Inter, sans-serif; color: #2b3350; }
  .tm-door .tm-ex span::before { content: ""; width: 5px; height: 5px; border-radius: 50%; background: #ef7a1a; flex: none; }
  .tm-door .tm-more { display: flex; align-items: center; justify-content: space-between; gap: 12px; margin-top: 14px; padding-top: 12px; border-top: 1px solid #f1eef5; font: 600 14.5px/1.3 Inter, sans-serif; color: #5b3fc4; }
  .tm-door .tm-arrow { width: 36px; height: 36px; border-radius: 50%; background: #f1edfb; color: #5b3fc4; display: grid; place-items: center; flex: none; }

  /* ---------- full-screen layers ---------- */
  .tm.tm-page { position: fixed !important; inset: 0 !important; z-index: 99990 !important; width: 100vw !important; max-width: 100vw !important; height: 100vh !important; height: 100dvh !important; margin: 0 !important; overflow-y: auto !important; overflow-x: hidden !important; overscroll-behavior: contain; background: linear-gradient(180deg, #f5f1fd 0, #faf8fb 360px, #fbfaf8 100%); animation: tm-in .28s cubic-bezier(.2,.8,.2,1); }
  .tm.tm-page.tm-det-page { z-index: 99993 !important; background: #fff; }
  @keyframes tm-in { from { transform: translateX(28px); opacity: 0; } to { transform: none; opacity: 1; } }
  .tm-top { position: sticky; top: 0; z-index: 5; height: 56px; display: flex; align-items: center; gap: 8px; padding: 0 12px; background: rgba(248,245,253,.92); backdrop-filter: blur(10px); -webkit-backdrop-filter: blur(10px); border-bottom: 1px solid rgba(15,27,61,.06); }
  .tm-det-page .tm-top { background: rgba(255,255,255,.92); }
  .tm-back { display: inline-flex; align-items: center; gap: 8px; min-height: 44px; padding: 0 12px 0 8px; border: 0; border-radius: 999px; background: none; font: 600 15px/1 Inter, sans-serif !important; color: #0f1b3d !important; cursor: pointer; }
  .tm-back svg { color: #5b3fc4; }
  .tm-toptitle { margin-left: auto; padding-right: 10px; font: 600 14px/1 Inter, sans-serif; color: #6d7386; }
  .tm-chead { padding: 22px 20px 6px; }
  .tm .tm-ceye { display: flex; align-items: center; gap: 12px; font: 700 12px/1 Inter, sans-serif !important; letter-spacing: .12em !important; text-transform: uppercase !important; color: #5b3fc4 !important; }
  .tm-ceye .tm-tile { width: 36px; height: 36px; background: #ece6fb; }
  .tm .tm-ch { font: 600 27px/1.12 "Source Serif 4", Georgia, serif !important; letter-spacing: -.015em !important; color: #0f1b3d !important; margin-top: 14px !important; }
  .tm .tm-ch em { font-weight: 500; color: #ef7a1a !important; -webkit-text-fill-color: #ef7a1a !important; }
  .tm .tm-clead { margin-top: 10px !important; font: 400 15.5px/1.5 Inter, sans-serif !important; color: #4f5770 !important; }
  .tm-filters { display: flex; flex-wrap: wrap; gap: 8px; padding: 14px 20px; }
  .tm-filters.tm-sticky { position: sticky; top: 56px; z-index: 4; background: rgba(250,248,252,.95); backdrop-filter: blur(8px); -webkit-backdrop-filter: blur(8px); border-bottom: 1px solid #ebe7f0; }
  .tm-filters button { display: inline-flex; align-items: center; gap: 8px; min-height: 44px; padding: 0 16px; border: 1.5px solid #dcd7e8; border-radius: 999px; background: rgba(255,255,255,.8); font: 600 14px/1 Inter, sans-serif !important; color: #0f1b3d !important; cursor: pointer; }
  .tm-filters button b { font-weight: 500; color: #6d7386; }
  .tm-filters button[aria-pressed="true"] { background: #0f1b3d; border-color: #0f1b3d; color: #fff !important; }
  .tm-filters button[aria-pressed="true"] b { color: rgba(255,255,255,.75); }
  .tm-grp { padding: 22px 20px 4px; }
  .tm .tm-gh { display: flex; align-items: center; gap: 12px; font: 600 22px/1.1 "Source Serif 4", Georgia, serif !important; color: #0f1b3d !important; margin-bottom: 12px !important; }
  .tm-count { font: 600 12.5px/1 Inter, sans-serif; color: #5b3fc4; background: #ece6fb; border-radius: 999px; padding: 5px 10px; }
  .tm-cards { display: grid; gap: 10px; }
  .tm-card { display: grid; grid-template-columns: 40px minmax(0, 1fr); gap: 14px; align-items: start; width: 100%; text-align: left; background: #fff; border: 1px solid #ece8f2; border-radius: 16px; padding: 15px 16px; box-shadow: 0 2px 8px rgba(40,30,90,.04); cursor: pointer; }
  .tm-card .tm-t { font-size: 17px !important; display: block; }
  .tm-card .tm-d { font-size: 14px !important; display: block; margin-top: 4px; }
  .tm-card .tm-more { margin-top: 9px; }
  .tm .tm-note { margin: 26px 20px 48px !important; padding-top: 18px; border-top: 1px solid #e6e2ec; font: 400 14.5px/1.5 Inter, sans-serif !important; color: #4f5770 !important; }
  .tm .tm-note b { color: #0f1b3d; }
  /* B: accordion catalogue */
  .tm-jump { display: flex; align-items: center; justify-content: space-between; gap: 8px; padding: 14px 20px 0; font: 500 14px/1.3 Inter, sans-serif; color: #5a6278; }
  .tm-jump button { min-height: 44px; padding: 0 4px; border: 0; background: none; font: 600 14px/1 Inter, sans-serif !important; color: #5b3fc4 !important; cursor: pointer; }
  .tm-acc { margin: 12px 20px 0; background: #fff; border: 1px solid #ece8f2; border-radius: 18px; overflow: hidden; box-shadow: 0 2px 10px rgba(40,30,90,.04); }
  .tm-acch { display: flex; align-items: center; gap: 14px; width: 100%; min-height: 72px; padding: 14px 16px; border: 0; background: #fff; text-align: left; cursor: pointer; }
  .tm-acch > span:nth-child(2) { flex: 1; min-width: 0; }
  .tm-acch b { display: block; font: 600 20px/1.2 "Source Serif 4", Georgia, serif; color: #0f1b3d; }
  .tm-acch small { display: block; font: 500 13.5px/1.3 Inter, sans-serif; color: #6a4bd2; margin-top: 3px; }
  .tm-pm { width: 32px; height: 32px; border-radius: 50%; border: 1.5px solid #dcd7e8; display: grid; place-items: center; color: #5b3fc4; transition: transform .2s; flex: none; }
  .tm-acc[data-open="true"] .tm-pm { transform: rotate(45deg); background: #f1edfb; border-color: #f1edfb; }
  .tm-accb { display: none; border-top: 1px solid #f1eef5; }
  .tm-acc[data-open="true"] .tm-accb { display: block; }
  .tm-accb .tm-brow { padding: 15px 16px; border-bottom: 1px solid #f4f1f7; grid-template-columns: 34px minmax(0, 1fr) 18px; }
  .tm-accb .tm-brow:last-child { border-bottom: 0; }
  .tm-accb .tm-num { font-size: 18px; }
  .tm-accb .tm-t { font-size: 17px !important; }
  /* C: level tiles + sticky group headers */
  .tm-lvtiles { display: grid; grid-template-columns: 1fr 1fr; gap: 10px; padding: 18px 20px 6px; }
  .tm-lvtile { display: flex; flex-direction: column; align-items: flex-start; gap: 6px; min-height: 92px; padding: 14px; border: 1.5px solid #e6e1ef; border-radius: 16px; background: rgba(255,255,255,.85); text-align: left; cursor: pointer; }
  .tm-lvtile b { font: 600 28px/1 "Source Serif 4", Georgia, serif; color: #0f1b3d; }
  .tm-lvtile span { font: 600 13.5px/1.25 Inter, sans-serif; color: #3b4258; }
  .tm-lvtile[aria-pressed="true"] { background: #0f1b3d; border-color: #0f1b3d; }
  .tm-lvtile[aria-pressed="true"] b, .tm-lvtile[aria-pressed="true"] span { color: #fff; }
  .tm-cgrp { padding-top: 14px; }
  .tm .tm-cgh { position: sticky; top: 56px; z-index: 3; display: flex; align-items: center; gap: 10px; padding: 12px 20px !important; background: rgba(250,248,252,.95); backdrop-filter: blur(8px); -webkit-backdrop-filter: blur(8px); font: 600 19px/1.1 "Source Serif 4", Georgia, serif !important; color: #0f1b3d !important; }
  .tm-cgrp .tm-rows { margin: 4px 20px 6px; }
  /* D: expand in place */
  .tm-xlist { display: grid; gap: 10px; }
  .tm-x { background: #fff; border: 1px solid #ece8f2; border-radius: 16px; overflow: hidden; transition: box-shadow .2s; }
  .tm-x[data-open="true"] { box-shadow: 0 10px 30px rgba(60,40,120,.10); border-color: #ddd4f2; }
  .tm-xh { display: grid; grid-template-columns: 40px minmax(0, 1fr) 28px; gap: 14px; align-items: center; width: 100%; min-height: 72px; padding: 14px 14px 14px 16px; border: 0; background: none; text-align: left; cursor: pointer; }
  .tm-xh .tm-t { font-size: 17px !important; display: block; }
  .tm-xh .tm-d { font-size: 13.5px !important; display: block; margin-top: 3px; }
  .tm-xh .tm-t em { font-style: normal; }
  .tm-xfor { display: none; font: 700 12px/1.3 Inter, sans-serif; letter-spacing: .09em; text-transform: uppercase; color: #6a4bd2; margin-bottom: 6px; }
  .tm-x[data-open="true"] .tm-xfor { display: block; }
  .tm-x[data-open="true"] .tm-xh { align-items: start; }
  .tm-x[data-open="true"] .tm-xh .tm-d { display: none; }
  .tm-x[data-open="true"] .tm-xh .tm-t { font-size: 21px !important; }
  .tm-x[data-open="true"] .tm-xh .tm-t em { font-style: italic; font-weight: 500; }
  .tm-xh .tm-pm { width: 28px; height: 28px; }
  .tm-x[data-open="true"] .tm-pm { transform: rotate(45deg); background: #f1edfb; border-color: #f1edfb; }
  .tm-xb { display: none; padding: 0 16px 18px; }
  .tm-x[data-open="true"] .tm-xb { display: block; animation: tm-fade .25s ease; }
  @keyframes tm-fade { from { opacity: 0; transform: translateY(-4px); } to { opacity: 1; transform: none; } }
  .tm-xb .tm-po { font-size: 15px !important; padding-top: 14px; border-top: 1px solid #f1eef5; }
  .tm-xb .tm-sep { margin: 16px 0 !important; }

  /* ---------- details (shared content) ---------- */
  .tm-aud { display: flex; align-items: center; gap: 10px; flex-wrap: wrap; }
  .tm-aud .tm-tile { width: 38px; height: 38px; }
  .tm-aud .tm-audl { font: 700 12px/1.3 Inter, sans-serif; letter-spacing: .1em; text-transform: uppercase; color: #5b3fc4; background: #ece6fb; padding: 8px 11px; border-radius: 10px; }
  .tm .tm-pt { font: 600 29px/1.12 "Source Serif 4", Georgia, serif !important; letter-spacing: -.015em !important; color: #0f1b3d !important; margin-top: 14px !important; }
  .tm .tm-pt em { font-weight: 500; }
  .tm .tm-po { font: 400 15.5px/1.55 Inter, sans-serif !important; color: #4f5770 !important; margin-top: 10px !important; }
  .tm-sep { height: 1px; background: #ebe7f0; margin: 22px 0; }
  .tm .tm-wh { font: 700 12px/1.3 Inter, sans-serif !important; letter-spacing: .12em !important; text-transform: uppercase !important; color: #5a6278 !important; margin-bottom: 14px !important; }
  .tm .tm-checks { list-style: none !important; display: grid; gap: 12px; }
  .tm .tm-checks li { display: flex !important; align-items: flex-start; gap: 12px; font: 400 15.5px/1.45 Inter, sans-serif !important; color: #1f2740 !important; }
  .tm-checks i { width: 24px; height: 24px; border-radius: 50%; background: #efeafc; color: #5b3fc4; display: grid; place-items: center; flex: none; margin-top: -1px; }
  .tm-meta { display: grid; gap: 14px; }
  .tm-meta > div { display: grid; grid-template-columns: 40px minmax(0, 1fr); column-gap: 14px; align-items: center; }
  .tm-meta .tm-tile { grid-row: span 2; }
  .tm-meta small { font: 600 12px/1.2 Inter, sans-serif; letter-spacing: .12em; text-transform: uppercase; color: #5a6278; align-self: end; }
  .tm-meta b { font: 400 15.5px/1.4 Inter, sans-serif; color: #1f2740; align-self: start; margin-top: 3px; }
  /* mobile 1: a little tighter chips and rows */
  .tm-filters { gap: 6px 8px !important; }
  .tm-filters button { min-height: 38px !important; padding: 0 14px !important; font-size: 13.5px !important; }
  /* mobile 2: the opened programme */
  .tm-x[data-open="true"] .tm-xh { grid-template-columns: 52px minmax(0, 1fr) 36px; padding: 18px 16px 6px; }
  .tm-x[data-open="true"] .tm-xh .tm-tile { width: 52px; height: 52px; border-radius: 14px; }
  .tm-x[data-open="true"] .tm-xh .tm-t { font-size: 23px !important; line-height: 1.2 !important; }
  .tm-x[data-open="true"] .tm-pm { width: 36px; height: 36px; border: 0; }
  .tm-xb .tm-po { border-top: 0 !important; padding-top: 10px !important; color: #4f5770 !important; }
  .tm-canbox { background: #f6f3fd; border-radius: 16px; padding: 16px 16px 14px; margin-top: 16px; }
  .tm-canbox .tm-wh { color: #6a4bd2 !important; margin: 0 0 10px !important; }
  .tm-canbox .tm-checks { margin: 0 !important; }
  .tm-x .tm-meta { gap: 0; }
  .tm-x .tm-meta > div { padding: 12px 0; }
  .tm-x .tm-meta > div + div { background: linear-gradient(#eeeaf3, #eeeaf3) 54px 0 / calc(100% - 54px) 1px no-repeat; }
  .tm-x .tm-meta > div:first-child { padding-top: 2px; }
  .tm-x .tm-meta .tm-tile { width: 44px; height: 44px; }
  .tm-x .tm-meta > div { grid-template-columns: 44px minmax(0, 1fr); }
  .tm-x .tm-meta small { font: 700 13.5px/1.2 Inter, sans-serif !important; letter-spacing: .1em !important; color: #0f1b3d !important; margin-bottom: 2px; }
  .tm-x .tm-meta b { color: #4f5770 !important; }
  /* A: bottom sheet */
  .tm-dim { position: fixed !important; inset: 0 !important; z-index: 99991 !important; background: rgba(46,38,110,.34); animation: tm-dimin .25s ease; }
  @keyframes tm-dimin { from { opacity: 0; } to { opacity: 1; } }
  .tm.tm-sheet { position: fixed !important; left: 0 !important; right: 0 !important; bottom: 0 !important; top: auto !important; z-index: 99992 !important; width: 100vw !important; max-height: 90vh; max-height: 90dvh; overflow-y: auto; overflow-x: hidden; overscroll-behavior: contain; background: #fff; border-radius: 26px 26px 0 0; padding: 10px 22px 34px; box-shadow: 0 -20px 50px rgba(30,20,80,.2); animation: tm-up .32s cubic-bezier(.2,.8,.2,1); margin: 0 !important; }
  @keyframes tm-up { from { transform: translateY(100%); } to { transform: none; } }
  .tm-handle { position: sticky; top: -10px; z-index: 2; display: flex; justify-content: center; align-items: flex-start; height: 26px; margin: -10px -22px 4px; padding-top: 10px; background: #fff; }
  .tm-handle::before { content: ""; width: 40px; height: 5px; border-radius: 3px; background: #dcd7e6; }
  .tm-sx { position: absolute; top: 14px; right: 14px; z-index: 3; width: 44px; height: 44px; border-radius: 50%; border: 1px solid #e6e2ec; background: #fff; display: grid; place-items: center; cursor: pointer; color: #0f1b3d; }
  .tm-sheet .tm-aud { padding-right: 50px; }
  /* B / C: details page */
  .tm-dbody { padding: 20px 22px 44px; }
  .tm-dhero { padding: 24px 22px 26px; background: radial-gradient(300px 220px at 100% 0, rgba(196,176,250,.45), rgba(196,176,250,0) 70%), linear-gradient(180deg, #f1edfb, #f7f4fd); border-bottom: 1px solid #ebe5f8; }
  .tm-dhero .tm-tile { background: #fff; width: 52px; height: 52px; border-radius: 16px; }
  .tm-dhero .tm-audl { display: inline-block; margin-top: 16px; font: 700 12px/1.3 Inter, sans-serif; letter-spacing: .1em; text-transform: uppercase; color: #5b3fc4; }
  .tm-dhero .tm-pt { margin-top: 8px !important; }
  .tm-bnum { font: italic 500 15px/1 "Playfair Display", Georgia, serif; color: #ef7a1a; margin-bottom: 10px; display: block; }

  /* ---------- version switch ---------- */
  .tm-bar { position: fixed !important; left: 50% !important; bottom: 12px !important; transform: translateX(-50%) !important; z-index: 99999 !important; display: flex; align-items: center; gap: 2px; background: #0f1b3d; color: #fff; border-radius: 999px; padding: 4px; box-shadow: 0 10px 30px rgba(0,0,0,.3); font: 600 13px/1 Inter, sans-serif; white-space: nowrap; }
  .tm-bar span { padding: 0 8px 0 12px; opacity: .7; }
  .tm-bar button { border: 0; background: transparent; color: #fff; font: inherit; width: 44px; height: 40px; border-radius: 999px; cursor: pointer; }
  .tm-bar button[aria-pressed="true"] { background: #fff; color: #0f1b3d; }
  .tm-cap { position: fixed !important; left: 50% !important; bottom: 64px !important; transform: translateX(-50%) !important; z-index: 99999 !important; background: rgba(15,27,61,.94); color: #fff; font: 500 13px/1.4 Inter, sans-serif; padding: 9px 14px; border-radius: 12px; width: max-content; max-width: calc(100vw - 32px); text-align: center; transition: opacity .4s; pointer-events: none; }
  .tm-cap b { font-weight: 700; }
  html.tm-lock, html.tm-lock body { overflow: hidden !important; }
  html.tm-lock .tm-bar, html.tm-lock .tm-cap { display: none !important; }
  `;

  // ---------- layers + back button ----------
  const layers = [];
  function pushLayer(nodes, onClose) {
    nodes.forEach((n) => document.body.appendChild(n));
    layers.push({ nodes, onClose });
    document.documentElement.classList.add('tm-lock');
    history.pushState({ tm: layers.length }, '');
  }
  function popLayer() {
    const L = layers.pop(); if (!L) return;
    L.nodes.forEach((n) => n.remove());
    if (L.onClose) L.onClose();
    if (!layers.length) document.documentElement.classList.remove('tm-lock');
  }
  addEventListener('popstate', () => { if (layers.length) popLayer(); });
  addEventListener('keydown', (e) => { if (e.key === 'Escape' && layers.length) history.back(); });
  const goBack = () => history.back();

  // ---------- details content ----------
  function detailsBody(p, { hero = false } = {}) {
    const [rl, rv] = recRow(p);
    const head = hero ? '' : `<div class="tm-aud"><span class="tm-tile">${ico(PICON[p.t], 22)}</span><span class="tm-audl">${AUD[p.a]}</span></div><h2 class="tm-pt">${em1(p.t)}</h2>`;
    return `${head}
      <p class="tm-po">${p.o}</p>
      <div class="tm-sep"></div>
      <p class="tm-wh">After the programme, participants can</p>
      <ul class="tm-checks">${p.can.slice(0, 3).map((x) => `<li><i>${ico('check', 14)}</i><span>${x}</span></li>`).join('')}</ul>
      <div class="tm-sep"></div>
      <div class="tm-meta">
        <div><span class="tm-tile">${ico('calendar', 21)}</span><small>Format</small><b>${p.f || 'To be confirmed'}</b></div>
        <div><span class="tm-tile">${ico('target', 21)}</span><small>${rl}</small><b>${rv}</b></div>
        <div><span class="tm-tile">${ico('users', 21)}</span><small>For</small><b>${AUD[p.a]}</b></div>
      </div>`;
  }
  function openSheet(p) {
    const dim = el('<div class="tm-dim"></div>');
    const sh = el(`<div class="tm tm-sheet" role="dialog" aria-modal="true" aria-label="${p.t}"><div class="tm-handle"></div>
      <button class="tm-sx" type="button" aria-label="Close">${ico('x', 20)}</button>${detailsBody(p)}</div>`);
    dim.addEventListener('click', goBack);
    sh.querySelector('.tm-sx').addEventListener('click', goBack);
    pushLayer([dim, sh]);
    sh.querySelector('.tm-sx').focus({ preventScroll: true });
  }
  function openDetailPage(p, style) {
    const back = layers.length ? 'All programmes' : 'Back';
    const body = style === 'hero'
      ? `<div class="tm-dhero"><span class="tm-tile">${ico(PICON[p.t], 26)}</span><span class="tm-audl">${AUD[p.a]}</span><h2 class="tm-pt">${em1(p.t)}</h2></div><div class="tm-dbody">${detailsBody(p, { hero: true })}</div>`
      : `<div class="tm-dbody">${detailsBody(p)}</div>`;
    const pg = el(`<div class="tm tm-page tm-det-page" role="dialog" aria-modal="true" aria-label="${p.t}">
      <div class="tm-top"><button class="tm-back" type="button">${ico('back', 18)} ${back}</button></div>${body}</div>`);
    pg.querySelector('.tm-back').addEventListener('click', goBack);
    pushLayer([pg]);
    pg.querySelector('.tm-back').focus({ preventScroll: true });
  }
  const openDetails = (p) => V === 'a' ? openSheet(p) : openDetailPage(p, V === 'c' ? 'hero' : 'plain');

  // ---------- catalogue ----------
  const catHead = () => `<div class="tm-top"><button class="tm-back" type="button" data-back>${ico('back', 18)} Back</button><span class="tm-toptitle">${P.length} programmes</span></div>
    <div class="tm-chead"><div class="tm-ceye"><span class="tm-tile">${ico('cap', 21)}</span>Programmes</div>
      <h1 class="tm-ch">Programmes for managers<br><em>and teams.</em></h1>
      <p class="tm-clead">Each participant gets the programmes that match their priority areas.</p></div>`;
  const chips = (lv, sticky) => `<div class="tm-filters${sticky ? ' tm-sticky' : ''}" role="group" aria-label="Level">${LV.map(([k, n]) => `<button type="button" data-lv="${k}" aria-pressed="${k === lv}">${n} <b>${cnt(k)}</b></button>`).join('')}</div>`;
  const groupsOf = (lv) => (lv === 'all' ? LV.slice(1) : LV.filter(([k]) => k === lv)).map(([k, n]) => [k, n, P.filter((p) => p.a.includes(k))]);
  const cardA = (p) => `<button class="tm-card" type="button" data-i="${p.i}"><span class="tm-tile">${ico(PICON[p.t], 20)}</span><span><span class="tm-t">${p.t}</span><span class="tm-d">${short(p)}</span>${MORE}</span></button>`;
  const rowB = (p, n) => `<button class="tm-brow" type="button" data-i="${p.i}"><span class="tm-num">${String(n).padStart(2, '0')}</span><span><span class="tm-t" style="display:block">${p.t}</span><span class="tm-d" style="display:block">${short(p)}</span></span><span class="tm-chev">${ico('arrow', 16)}</span></button>`;
  const rowC = (p, sub) => `<button class="tm-crow" type="button" data-i="${p.i}"><span class="tm-tile">${ico(PICON[p.t], 19)}</span><span><span class="tm-t">${p.t}</span><span class="tm-sub">${sub}</span></span><span class="tm-chev">${ico('arrow', 16)}</span></button>`;
  const rowD = (p, open) => `<div class="tm-x" data-open="${!!open}"><button class="tm-xh" type="button" data-x="${p.i}" aria-expanded="${!!open}"><span class="tm-tile">${ico(PICON[p.t], 20)}</span><span><span class="tm-xfor">${AUD[p.a]}</span><span class="tm-t">${p.t}</span><span class="tm-d">${short(p)}</span></span><span class="tm-pm">${ico('plus', 15)}</span></button>
      <div class="tm-xb"><p class="tm-po">${p.o}</p><div class="tm-canbox"><p class="tm-wh">After the programme, participants can</p><ul class="tm-checks">${p.can.slice(0, 3).map((x) => `<li><i>${ico('check', 14)}</i><span>${x}</span></li>`).join('')}</ul></div><div class="tm-sep"></div><div class="tm-meta">
        <div><span class="tm-tile">${ico('calendar', 21)}</span><small>Format</small><b>${p.f || 'To be confirmed'}</b></div>
        <div><span class="tm-tile">${ico('target', 21)}</span><small>${recRow(p)[0]}</small><b>${recRow(p)[1]}</b></div>
        <div><span class="tm-tile">${ico('users', 21)}</span><small>For</small><b>${AUD[p.a]}</b></div></div></div></div>`;

  function catBody(lv) {
    if (V === 'a') return chips(lv, true) + groupsOf(lv).map(([k, n, items]) => `<div class="tm-grp"><h2 class="tm-gh">${n}<span class="tm-count">${items.length}</span></h2><div class="tm-cards">${items.map(cardA).join('')}</div></div>`).join('');
    if (V === 'b') {
      const open = lv === 'all' ? ['l', 'm', 't'] : lv ? [lv] : [];
      return `<div class="tm-jump"><span>${P.length} programmes in 3 levels</span><button type="button" data-openall>${open.length === 3 ? 'Close all' : 'Open all'}</button></div>` + LV.slice(1).map(([k, n]) => { const items = P.filter((p) => p.a.includes(k)); return `<div class="tm-acc" data-k="${k}" data-open="${open.includes(k)}"><button class="tm-acch" type="button" data-acc="${k}"><span class="tm-tile">${ico(LV_ICO[k], 21)}</span><span><b>${n}</b><small>${items.length} programmes</small></span><span class="tm-pm">${ico('plus', 15)}</span></button><div class="tm-accb">${items.map((p, j) => rowB(p, j + 1)).join('')}</div></div>`; }).join('');
    }
    if (V === 'c') return `<div class="tm-lvtiles" role="group" aria-label="Level">${LV.map(([k, n]) => `<button class="tm-lvtile" type="button" data-lv="${k}" aria-pressed="${k === lv}"><b>${cnt(k)}</b><span>${k === 'all' ? 'All programmes' : n}</span></button>`).join('')}</div>` +
      groupsOf(lv).map(([k, n, items]) => `<div class="tm-cgrp"><h2 class="tm-cgh">${n}<span class="tm-count">${items.length}</span></h2><div class="tm-rows">${items.map((p) => rowC(p, short(p))).join('')}</div></div>`).join('');
    return chips(lv, false) + groupsOf(lv).map(([k, n, items]) => `<div class="tm-grp"><h2 class="tm-gh">${n}<span class="tm-count">${items.length}</span></h2><div class="tm-xlist">${items.map((p) => rowD(p)).join('')}</div></div>`).join('');
  }
  function openCatalogue(lv = 'all') {
    if (V === 'b' && lv === 'all') lv = ''; // B starts with the three levels closed
    const pg = el(`<div class="tm tm-page" role="dialog" aria-modal="true" aria-label="Programmes">${catHead()}<div class="tm-res">${catBody(lv)}${NOTE}</div></div>`);
    const render = (k, keepTop) => {
      const res = pg.querySelector('.tm-res'); res.innerHTML = catBody(k) + NOTE;
      if (!keepTop) { const f = res.querySelector('.tm-filters, .tm-lvtiles'); const stuck = f && f.classList.contains('tm-sticky'); if (stuck && pg.scrollTop > res.offsetTop) pg.scrollTop = res.offsetTop; }
    };
    pg.addEventListener('click', (e) => {
      if (e.target.closest('[data-back]')) return goBack();
      const f = e.target.closest('[data-lv]');
      if (f) {
        if (false) {
          const k = f.dataset.lv; pg.querySelectorAll('.tm-jump button').forEach((x) => x.setAttribute('aria-pressed', x === f));
          pg.querySelectorAll('.tm-acc').forEach((a) => a.dataset.open = String(k === 'all' || a.dataset.k === k));
          const tgt = k === 'all' ? pg.querySelector('.tm-acc') : pg.querySelector(`.tm-acc[data-k="${k}"]`);
          pg.scrollTo({ top: tgt.offsetTop - 70, behavior: 'smooth' }); return;
        }
        return render(f.dataset.lv);
      }
      if (e.target.closest('[data-openall]')) { const boxes = [...pg.querySelectorAll('.tm-acc')]; const all = boxes.every((x) => x.dataset.open === 'true'); boxes.forEach((x) => x.dataset.open = String(!all)); e.target.closest('[data-openall]').textContent = all ? 'Open all' : 'Close all'; return; }
      const a = e.target.closest('[data-acc]');
      if (a) { const box = a.parentElement; box.dataset.open = String(box.dataset.open !== 'true'); const all = [...pg.querySelectorAll('.tm-acc')].every((x) => x.dataset.open === 'true'); pg.querySelector('[data-openall]').textContent = all ? 'Close all' : 'Open all'; return; }
      const x = e.target.closest('[data-x]');
      if (x) { const box = x.parentElement; const o = box.dataset.open !== 'true'; box.dataset.open = String(o); x.setAttribute('aria-expanded', o); if (o) setTimeout(() => { const r = box.getBoundingClientRect(); if (r.top < 120) pg.scrollBy({ top: r.top - 130, behavior: 'smooth' }); }, 30); return; }
      const c = e.target.closest('[data-i]'); if (c) openDetails(P[+c.dataset.i]);
    });
    pushLayer([pg]);
    pg.querySelector('[data-back]').focus({ preventScroll: true });
  }

  // ---------- block on the page ----------
  function blockBody() {
    const BTN = `<button class="tm-allbtn" type="button" data-all>See all ${P.length} programmes ${ico('arrow', 18)}</button>`;
    if (V === 'a') return `<div class="tm-acards">${pick(['Performance Management', 'Leading a Team', 'Team Effectiveness Session']).map((p) => `<button class="tm-acard" type="button" data-i="${p.i}"><span class="tm-row1"><span class="tm-tile">${ico(PICON[p.t], 20)}</span><span class="tm-for">${AUD[p.a]}</span></span><span class="tm-t" style="display:block">${p.t}</span><span class="tm-d" style="display:block">${p.o}</span><span class="tm-foot"><span>${fmtChips(p)}</span>${MORE}</span></button>`).join('')}</div>${BTN}`;
    if (V === 'b') return `<div class="tm-blist">${pick(['Performance Management', 'Leading a Team', 'Influence Without Authority', 'Leading Change', 'Team Effectiveness Session']).map((p, j) => `<button class="tm-brow" type="button" data-i="${p.i}"><span class="tm-num">${String(j + 1).padStart(2, '0')}</span><span><span class="tm-t" style="display:block">${p.t}</span><span class="tm-d" style="display:block">${short(p)}</span><span class="tm-for" style="display:block">${AUD[p.a]}</span></span><span class="tm-chev">${ico('arrow', 16)}</span></button>`).join('')}</div>${BTN}`;
    if (V === 'c') { const f = byT('Performance Management'); return `<button class="tm-feat" type="button" data-i="${f.i}"><span class="tm-tile">${ico(PICON[f.t], 24)}</span><span class="tm-for" style="display:block">${AUD[f.a]}</span><span class="tm-t" style="display:block">${em1(f.t)}</span><span class="tm-d" style="display:block">${f.o}</span><span class="tm-foot"><span style="display:flex;gap:6px">${fmtChips(f)}</span>${MORE}</span></button>
      <p class="tm-also">More programmes</p><div class="tm-rows">${pick(['Leading a Team', 'Influence Without Authority', 'Leading Change', 'Team Effectiveness Session']).map((p) => rowC(p, AUD[p.a])).join('')}</div>${BTN}`; }
    const EX = (k) => { const all = P.filter((p) => p.a.includes(k)); return [...all.filter((p) => p.a === k), ...all.filter((p) => p.a !== k)].slice(0, 4).map((p) => p.t); };
    return `<div class="tm-doors">${LV.slice(1).map(([k, n]) => `<button class="tm-door" type="button" data-door="${k}"><span class="tm-row1"><span class="tm-tile">${ico(LV_ICO[k], 21)}</span><span><span class="tm-lvname">${n}</span></span></span><span class="tm-ex">${EX(k).map((t) => `<span>${t}</span>`).join('')}</span><span class="tm-more"><span>+ ${cnt(k) - 4} more programmes</span><span class="tm-arrow">${ico('arrow', 16)}</span></span></button>`).join('')}</div>${BTN}`;
  }
  function block() {
    const b = el(`<section class="tm tm-band" data-tm><div class="tm-in"><div class="tm-eye">Our programmes</div><h2 class="tm-h">Training for the gaps <em>that matter.</em></h2>
      <p class="tm-lead">Each participant gets the programmes that match their priority areas.</p>${blockBody()}</div></section>`);
    b.addEventListener('click', (e) => {
      if (e.target.closest('[data-all]')) return openCatalogue('all');
      const d = e.target.closest('[data-door]'); if (d) return openCatalogue(d.dataset.door);
      const c = e.target.closest('[data-i]'); if (c) openDetails(P[+c.dataset.i]);
    });
    return b;
  }
  function apply() {
    const anchor = document.querySelector('#journey');
    if (!anchor) return false;
    if (document.querySelector('[data-tm]')) return true;
    anchor.after(block());
    return true;
  }
  function bar() {
    if (TMC) return;
    const b = el(`<div class="tm-bar" role="group" aria-label="Phone version"><span>Version</span>${Object.keys(VERS).map((k) => `<button type="button" data-v="${k}" aria-pressed="${k === V}">${k.toUpperCase()}</button>`).join('')}</div>`);
    b.addEventListener('click', (e) => { const x = e.target.closest('button'); if (!x || x.dataset.v === V) return; location.hash = 'm=' + x.dataset.v; location.reload(); });
    document.body.appendChild(b);
    const cap = el(`<div class="tm-cap"><b>${V.toUpperCase()} · ${VERS[V]}</b><br>${VDESC[V]}<br>Scroll to Build, after “You choose how your people learn”.</div>`);
    document.body.appendChild(cap);
    setTimeout(() => { cap.style.opacity = '0'; }, 6000);
  }
  function start() {
    const s = document.createElement('style'); s.textContent = css3; document.head.appendChild(s);
    bar();
    let tries = 0;
    const t = setInterval(() => { if (apply() || ++tries > 150) clearInterval(t); }, 200);
    new MutationObserver(() => { if (!document.querySelector('[data-tm]')) apply(); }).observe(document.getElementById('root') || document.body, { childList: true, subtree: true });
  }
  if (document.readyState === 'loading') document.addEventListener('DOMContentLoaded', start); else start();
})();
