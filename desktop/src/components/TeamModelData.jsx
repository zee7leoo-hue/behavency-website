import React from 'react';
export const teamFactorsList =  [
 {
 id: 'clarity', title: 'Clarity and Alignment',
 wheelTitle: <>Clarity &<br/>Alignment</>,
 color: '#00d68f',
 symptoms: ["Priorities become unclear.", "Teams start moving in different directions.", "Expectations and requirements are understood differently."],
 competencies: [
   'Shared understanding of goals and results',
   'Clarity of roles and accountability',
   'Shared agreements and information transparency'
   ],
 keyCompetencies: ["Strategic thinking", "Goal setting", "Planning and organisation", "Communication", "Business thinking", "Systems thinking"],
 trainings: [
 { name: "Leadership Basics", audience: ['line'] },
 { name: "Effective Goal Setting", audience: ['line'] },
 { name: "Situational Delegation", audience: ['mid'] },
 { name: "Developing Strategic Thinking Skills", audience: ['mid'] },
 { name: "Problem Analysis and Decision Making", audience: ['line','mid'] },
 ],
 manifestations: [
  {
    practice: 'Shared understanding of goals and results',
    line: ['The team understands how its work is connected to the organisation\'s goals.', 'The team shares a common understanding of the goals and expected results of its work.'],
    mid: ['The team understands how its work is connected to the organisation\'s goals.', 'The team shares a common understanding of the goals and expected results of its work.']
  },
  {
    practice: 'Clarity of roles and accountability',
    line: ['Team members understand each other\'s roles, areas of accountability, and expertise.', 'When tasks or team composition change, roles and accountability are reviewed in a timely manner.'],
    mid: ['Team members understand each other\'s roles, areas of accountability, and expertise.', 'When tasks or team composition change, roles and accountability are reviewed in a timely manner.']
  },
  {
    practice: 'Shared agreements and information transparency',
    line: ['Important information is communicated to all team members in a timely manner.', 'After discussions and meetings, the team has a shared understanding of decisions made and next steps.', 'The team develops clear agreements on how collaborative work will be organised.'],
    mid: ['Important information is communicated to all team members in a timely manner.', 'After discussions and meetings, the team has a shared understanding of decisions made and next steps.', 'The team develops clear agreements on how collaborative work will be organised.']
  },
  ]
 },
 {
 id: 'safety', title: 'Trust and Inclusion',
 wheelTitle: <>Trust &<br/>Inclusion</>,
 color: '#ffb830',
 symptoms: ["People hesitate to express their opinions.", "The level of trust and engagement decreases.", "Valuable ideas and perspectives go unheard."],
 competencies: [
   'Trust and psychological safety',
   'Collaborative decision making',
   'Engagement of every member in collaborative work'
   ],
 keyCompetencies: ["Emotional intelligence", "Empathy", "Active listening", "Relationship building", "Inclusive leadership", "Ethical behaviour"],
 trainings: [
 { name: "Assertive Behaviour", audience: ['line','mid'] },
 { name: "Emotional Leadership", audience: ['line','mid'] },
 { name: "Trust and Psychological Safety Training", audience: ['line','mid'] },
 { name: "Team Management", audience: ['line','mid'] },
 { name: "Individual Coaching Sessions", audience: ['mid'] },
 ],
 manifestations: [
  {
    practice: 'Trust and psychological safety',
    line: ['Team members can openly express their opinions without fear of negative consequences.', 'The team openly discusses mistakes, problems, and difficult issues rather than suppressing them.', 'When mistakes occur, the team focuses on finding a solution rather than finding someone to blame.'],
    mid: ['Team members can openly express their opinions without fear of negative consequences.', 'The team openly discusses mistakes, problems, and difficult issues rather than suppressing them.', 'When mistakes occur, the team focuses on finding a solution rather than finding someone to blame.']
  },
  {
    practice: 'Collaborative decision making',
    line: ['When making decisions, the team considers several possible options rather than stopping at the first proposed solution.', 'When making decisions, the team takes into account different points of view and members\' experience.', 'When discussing decisions, the team relies on facts and arguments rather than the status or influence of individual members.', 'After making a decision, the team acts in alignment, even if opinions differed during the discussion.'],
    mid: ['When making decisions, the team considers several possible options rather than stopping at the first proposed solution.', 'When making decisions, the team takes into account different points of view and members\' experience.', 'When discussing decisions, the team relies on facts and arguments rather than the status or influence of individual members.', 'After making a decision, the team acts in alignment, even if opinions differed during the discussion.']
  },
  {
    practice: 'Team engagement: Engagement of every member in collaborative work',
    line: ['The team actively involves members who usually speak less frequently in discussions.', 'New members quickly become full participants in collaborative work.', 'When one member is overloaded, other team members take on some of their work without being asked.'],
    mid: ['The team actively involves members who usually speak less frequently in discussions.', 'New members quickly become full participants in collaborative work.', 'When one member is overloaded, other team members take on some of their work without being asked.']
  },
  ]
 },
 {
 id: 'capacity', title: 'Focus and Prioritization',
 wheelTitle: <>Focus &<br/>Prioritization</>,
 color: '#a78bfa',
 symptoms: ["Teams become overloaded.", "Efforts are scattered across too many tasks.", "Important work loses focus."],
 competencies: [
   'Focus on priority work',
   'Setting priorities',
   'Effective effort distribution'
   ],
 keyCompetencies: ["Decision making", "Critical thinking", "Prioritization", "Resource management", "Problem solving", "Management judgment"],
 trainings: [
 { name: "Effective Goal Setting", audience: ['line'] },
 { name: "Developing Critical Thinking Skills", audience: ['mid'] },
 { name: "Problem Analysis and Decision Making", audience: ['line','mid'] },
 { name: "Optimal Motivation", audience: ['line','mid'] },
 { name: "Developing Strategic Thinking Skills", audience: ['mid'] },
 ],
 manifestations: [
  {
    practice: 'Focus on priority work',
    line: ['The team has a shared understanding of which tasks are the most important at the moment.', 'The team maintains focus on priority work despite the appearance of new tasks.'],
    mid: ['The team has a shared understanding of which tasks are the most important at the moment.', 'The team maintains focus on priority work despite the appearance of new tasks.']
  },
  {
    practice: 'Setting priorities',
    line: ['When several important tasks arise, the team quickly reaches a common understanding of what should be done first.', 'The team maintains focus on priority work even when urgent tasks appear.', 'When circumstances change, the team reviews the order of work in a timely manner and aligns its actions accordingly.'],
    mid: ['When several important tasks arise, the team quickly reaches a common understanding of what should be done first.', 'The team maintains focus on priority work even when urgent tasks appear.', 'When circumstances change, the team reviews the order of work in a timely manner and aligns its actions accordingly.']
  },
  {
    practice: 'Effective effort distribution',
    line: ['The team notices signs of overload in individual members in a timely manner and discusses ways to reduce it.', 'When distributing work, the team explicitly considers who is best suited for a specific task, not just who is currently available.'],
    mid: ['The team notices signs of overload in individual members in a timely manner and discusses ways to reduce it.', 'When distributing work, the team explicitly considers who is best suited for a specific task, not just who is currently available.']
  },
  ]
 },
 {
 id: 'execution', title: 'Execution and Accountability',
 wheelTitle: <>Execution &<br/>Accountability</>,
 color: '#22d3ee',
 symptoms: ["Progress slows down or stops.", "Accountability becomes blurred.", "Commitments remain unfulfilled."],
 competencies: [
   'Fulfilling commitments',
   'Mutual accountability for shared results'
   ],
 keyCompetencies: ["Performance management", "Accountability", "Results orientation", "Execution organisation", "Delegation", "Control and monitoring"],
 trainings: [
 { name: "Leadership Basics", audience: ['line'] },
 { name: "Situational Leadership", audience: ['line'] },
 { name: "Situational Delegation", audience: ['mid'] },
 { name: "Team Management", audience: ['line','mid'] },
 { name: "Optimal Motivation", audience: ['line','mid'] },
 ],
 manifestations: [
  {
    practice: 'Fulfilling commitments',
    line: ['The team identifies and openly communicates risks of failing to meet agreements in a timely manner.', 'When obstacles arise, the team does not abandon agreements but finds ways to fulfil them.'],
    mid: ['The team identifies and openly communicates risks of failing to meet agreements in a timely manner.', 'When obstacles arise, the team does not abandon agreements but finds ways to fulfil them.']
  },
  {
    practice: 'Mutual accountability for shared results',
    line: ['Team members consider the shared result to be their common accountability, not just the area of responsibility of individual members.', 'Team members openly remind each other of agreements and do not ignore cases of their non-fulfilment.', 'When necessary, team members take on additional tasks to achieve the shared result.'],
    mid: ['Team members consider the shared result to be their common accountability, not just the area of responsibility of individual members.', 'Team members openly remind each other of agreements and do not ignore cases of their non-fulfilment.', 'When necessary, team members take on additional tasks to achieve the shared result.']
  },
  ]
 },
 {
 id: 'drag', title: 'Collaboration and Influence',
 wheelTitle: <>Collaboration &<br/>Influence</>,
 color: '#ff6b8a',
 symptoms: ["Barriers arise between teams and departments.", "Resistance from stakeholders increases.", "Conflicts remain unresolved."],
 competencies: [
   'Partnership collaboration',
   'Alignment of mutual expectations and agreements',
   'Constructive resolution of cross-team disagreements'
   ],
 keyCompetencies: ["Stakeholder management", "Influencing", "Partnership building", "Collaboration", "Conflict management", "Communication"],
 trainings: [
 { name: "Assertive Behaviour", audience: ['line','mid'] },
 { name: "Influencing without Authority", audience: ['line','mid'] },
 { name: "Cross-functional Communication and Productive Conflicts", audience: ['line','mid'] },
 { name: "Team Management", audience: ['line','mid'] },
 { name: "Emotional Leadership", audience: ['line','mid'] },
 ],
 manifestations: [
  {
    practice: 'Partnership collaboration',
    line: ['The team maintains stable working relationships with other teams rather than interacting only when necessary.', 'The team proactively initiates interaction when tasks require the involvement of multiple teams.', 'The team responds to requests from other teams related to collaborative work in a timely manner.', 'The team shares experience and best practices with other teams even when it is not directly required for current tasks.'],
    mid: ['The team maintains stable working relationships with other teams rather than interacting only when necessary.', 'The team proactively initiates interaction when tasks require the involvement of multiple teams.', 'The team responds to requests from other teams related to collaborative work in a timely manner.', 'The team shares experience and best practices with other teams even when it is not directly required for current tasks.']
  },
  {
    practice: 'Alignment of mutual expectations and agreements',
    line: ['The team aligns priorities and expected results of collaborative work with other teams in advance.', 'The team aligns roles and areas of accountability during collaborative work.', 'When making decisions, the team considers their impact on the work of other teams.', 'When conditions change, the team reviews established agreements with other teams in a timely manner.'],
    mid: ['The team aligns priorities and expected results of collaborative work with other teams in advance.', 'The team aligns roles and areas of accountability during collaborative work.', 'When making decisions, the team considers their impact on the work of other teams.', 'When conditions change, the team reviews established agreements with other teams in a timely manner.']
  },
  {
    practice: 'Constructive resolution of cross-team disagreements',
    line: ['The team discusses disagreements with other teams openly and in a timely manner, rather than delaying until escalation.', 'When disagreements arise, the team seeks to understand the interests of the other party, rather than solely defending its own position.', 'The team uses escalation only when direct negotiations have failed to yield a solution.', 'The team is open to revising its own position if doing so helps achieve the shared result.'],
    mid: ['The team discusses disagreements with other teams openly and in a timely manner, rather than delaying until escalation.', 'When disagreements arise, the team seeks to understand the interests of the other party, rather than solely defending its own position.', 'The team uses escalation only when direct negotiations have failed to yield a solution.', 'The team is open to revising its own position if doing so helps achieve the shared result.']
  },
  ]
 },
 {
 id: 'learning', title: 'Learning and Adaptability',
 wheelTitle: <>Learning &<br/>Adaptability</>,
 color: '#818cf8',
 symptoms: ["Over time, gaps in competencies and capabilities emerge.", "The same mistakes are repeated.", "Teams find it difficult to adapt to changes."],
 competencies: [
   'Learning from experience',
   'Continuous improvement of working methods',
   'Adaptation to new conditions and changes'
   ],
 keyCompetencies: ["Learnability", "Adaptability", "Change leadership", "Innovative thinking", "Curiosity", "Development orientation"],
 trainings: [
 { name: "Change Leadership", audience: ['line','mid'] },
 { name: "Innovative Thinking", audience: ['line','mid'] },
 { name: "Developing Strategic Thinking Skills", audience: ['mid'] },
 { name: "Trust and Psychological Safety Training", audience: ['line','mid'] },
 { name: "Individual Coaching Sessions", audience: ['mid'] },
 ],
 manifestations: [
  {
    practice: 'Learning from experience',
    line: ['The team regularly analyses the causes of its successes and failures and changes working approaches if necessary.', 'The team does not repeat the same mistakes systematically.', 'Gained experience and knowledge are quickly spread within the team and used in future work.'],
    mid: ['The team regularly analyses the causes of its successes and failures and changes working approaches if necessary.', 'The team does not repeat the same mistakes systematically.', 'Gained experience and knowledge are quickly spread within the team and used in future work.']
  },
  {
    practice: 'Continuous improvement of working methods',
    line: ['The team proactively implements improvements in its working methods without waiting for external directives.', 'The team evaluates the results of implemented changes and retains the most effective practices.', 'The team studies the working methods of other teams or organisations and, if necessary, implements best practices without waiting for problems to arise.'],
    mid: ['The team proactively implements improvements in its working methods without waiting for external directives.', 'The team evaluates the results of implemented changes and retains the most effective practices.', 'The team studies the working methods of other teams or organisations and, if necessary, implements best practices without waiting for problems to arise.']
  },
  {
    practice: 'Adaptation to new conditions and changes',
    line: ['The team quickly rearranges its work when conditions change.', 'The team masters new working methods required to achieve results in a timely manner.', 'The team reviews processes and agreements when the previous approach no longer works.'],
    mid: ['The team quickly rearranges its work when conditions change.', 'The team masters new working methods required to achieve results in a timely manner.', 'The team reviews processes and agreements when the previous approach no longer works.']
  },
  ]
 }
];

export const teamPrograms = [
  { num: '01', name: 'Team Goals and Priorities' },
  { num: '02', name: 'Effective Team Communication' },
  { num: '03', name: 'Psychological Safety and Trust' },
  { num: '04', name: 'Feedback and Open Dialogue' },
  { num: '05', name: 'Constructive Conflict Resolution' },
  { num: '06', name: 'Effective Team Collaboration' },
  { num: '07', name: 'Accountability and Ownership' },
  { num: '08', name: 'Adaptation to Change and Continuous Improvement' },
];
