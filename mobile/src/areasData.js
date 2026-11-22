/* The six areas of effectiveness for each level. Text is taken from the desktop site's behavioural model (wheel + popup), unchanged. */
export const LEVELS = [
  {
    "id": "line",
    "label": "Line Managers",
    "color": "#2268d6",
    "pq": "Each practice answers the question: \"What does an effective manager at this level do?\"",
    "bq": "Each manifestation answers the question: \"How does this leadership practice look in a line manager?\"",
    "areas": [
      {
        "id": "clarity",
        "name": "Clarity & Alignment",
        "icon": "target",
        "practices": [
          {
            "name": "Translate strategy into clear guidelines for the team",
            "items": [
              "Translates organizational goals into clear priorities and tasks for their team.",
              "Helps employees understand how team goals connect to departmental and organizational goals."
            ]
          },
          {
            "name": "Define the team's area of responsibility",
            "items": [
              "Clearly defines what results the team is responsible for, and what tasks and decisions lie outside their area of responsibility."
            ]
          },
          {
            "name": "Clearly define roles and expectations",
            "items": [
              "Clearly explains to employees their roles, areas of responsibility, and expected results."
            ]
          },
          {
            "name": "Form a shared understanding of what success means",
            "items": [
              "Creates a shared understanding of what is considered a successful outcome for the team's work.",
              "Notices when employees have different understandings of goals or success criteria, and achieves a shared understanding before it leads to misalignment in work."
            ]
          },
          {
            "name": "Ensure alignment between priorities and actual actions",
            "items": [
              "Monitors the alignment of the team's actual work with agreed goals and direction, and promptly points out deviations when they occur."
            ]
          }
        ]
      },
      {
        "id": "safety",
        "name": "Trust & Inclusivity",
        "icon": "heart",
        "practices": [
          {
            "name": "Foster psychological safety",
            "items": [
              "Encourages employees to openly discuss problems and mistakes without fear of blame.",
              "Ensures employees know their input has genuinely been considered: explains how it influenced the decision, or why a different approach was taken — not just going through the motions of listening."
            ]
          },
          {
            "name": "Demonstrate transparency and consistency",
            "items": [
              "Proactively shares the reasoning behind difficult or unpopular management decisions without waiting for questions or discontent.",
              "Applies the same rules and approaches consistently to employees in comparable situations."
            ]
          },
          {
            "name": "Encourage diversity of opinions and perspectives",
            "items": [
              "Encourages employees to openly express different opinions and ideas, even when they differ from the manager's position or the majority view."
            ]
          },
          {
            "name": "Maintain open and respectful communication",
            "items": [
              "Communicates respectfully with employees and puts a stop to any disrespectful behavior within the team.",
              "Openly discusses difficult issues with employees and does not avoid uncomfortable conversations."
            ]
          },
          {
            "name": "Build a sense of belonging and team identity",
            "items": [
              "Acknowledges employees' contributions and highlights their significance to the team's overall results."
            ]
          }
        ]
      },
      {
        "id": "capacity",
        "name": "Focus & Prioritization",
        "icon": "org",
        "practices": [
          {
            "name": "Separate the truly important from the secondary",
            "items": [
              "Identifies which tasks matter most for achieving team goals and structures the team's work accordingly.",
              "Filters out operational noise and does not burden the team with every incoming request or initiative."
            ]
          },
          {
            "name": "Make sound decisions on priorities and trade-offs",
            "items": [
              "When resources or time are limited, determines which tasks to prioritize and decides which tasks the team can temporarily deprioritize.",
              "Makes priority decisions independently, without escalating unnecessarily."
            ]
          },
          {
            "name": "Allocate resources effectively",
            "items": [
              "Assigns tasks by taking into account employee workload and capabilities."
            ]
          },
          {
            "name": "Focus attention on the highest-impact tasks",
            "items": [
              "Notices when the team's efforts are disproportionately concentrated on low-return tasks and initiates reallocation.",
              "Helps employees understand which tasks contribute most to team goals and why."
            ]
          },
          {
            "name": "Shield teams from unnecessary complexity and overload",
            "items": [
              "Streamlines team workflows by removing unnecessary formalities and actions that do not affect results."
            ]
          }
        ]
      },
      {
        "id": "execution",
        "name": "Execution & Accountability",
        "icon": "gear",
        "practices": [
          {
            "name": "Define ownership and accountability for tasks",
            "items": [
              "Clearly distributes responsibility for tasks among team members.",
              "Transfers accountability for task completion to individual employees."
            ]
          },
          {
            "name": "Ensure agreed goals and expected results are achieved",
            "items": [
              "Takes responsibility for the team's results and does not shift blame onto employees or external circumstances.",
              "When the team fails to achieve agreed results, independently analyzes the root causes and takes concrete corrective action — rather than just explaining the situation or revising expectations."
            ]
          },
          {
            "name": "Track progress and help remove obstacles",
            "items": [
              "Regularly monitors team progress and promptly identifies deviations from the plan.",
              "Pays attention to early warning signs of problems in team performance and responds before they derail results.",
              "When employees encounter obstacles, actively helps remove them rather than simply acknowledging the issue."
            ]
          },
          {
            "name": "Maintain required performance standards",
            "items": [
              "Sets clear performance standards and applies them consistently to all team members.",
              "When standards are systematically not met, investigates root causes and changes the approach — rather than relying on individual reprimands.",
              "Provides employees with specific, timely feedback on their work quality — not just an overall assessment of the final result."
            ]
          },
          {
            "name": "Follow through on commitments",
            "items": [
              "Returns to previously agreed commitments and verifies they have been fulfilled.",
              "When a commitment is not met, investigates the reasons and ensures it is either fulfilled or formally revised."
            ]
          }
        ]
      },
      {
        "id": "drag",
        "name": "Collaboration & Influence",
        "icon": "people",
        "practices": [
          {
            "name": "Build productive working relationships",
            "items": [
              "Proactively builds working relationships with colleagues from other teams — not only reaching out when collaboration is needed."
            ]
          },
          {
            "name": "Align stakeholders around shared goals",
            "items": [
              "Helps stakeholders align their interests and positions around a shared goal when achieving it requires their joint participation.",
              "Identifies misalignments in expectations or priorities among stakeholders early and addresses them before they escalate into disagreements."
            ]
          },
          {
            "name": "Influence beyond formal authority",
            "items": [
              "Uses facts and well-reasoned arguments to influence the decisions of peers and leadership.",
              "Takes into account the positions and interests of different stakeholders to secure their support on work matters."
            ]
          },
          {
            "name": "Enable effective cross-functional collaboration",
            "items": [
              "Aligns with other teams on who is responsible for what and by when during collaborative work.",
              "When collaboration with another team breaks down, identifies the cause and helps establish a new working arrangement."
            ]
          },
          {
            "name": "Resolve disagreements and conflicts constructively",
            "items": [
              "Intervenes in workplace disagreements in a timely manner and helps participants find a resolution before they escalate.",
              "When destructive behavior is repeated, directly names the unacceptable actions and takes steps to put a stop to them."
            ]
          }
        ]
      },
      {
        "id": "learning",
        "name": "Learning & Adaptation",
        "icon": "chart",
        "practices": [
          {
            "name": "Encourage continuous development and learning",
            "items": [
              "Regularly discusses development with employees and helps them build the skills required for their role.",
              "Gives employees opportunities to take on new challenges and grow beyond their current role."
            ]
          },
          {
            "name": "Support experimentation and adoption of new approaches",
            "items": [
              "Allows employees to try new ways of working and discusses the outcomes of such experiments.",
              "When an experiment does not produce the expected result, treats it as a learning opportunity rather than a reason for criticism."
            ]
          },
          {
            "name": "Adapt flexibly to changing conditions",
            "items": [
              "When conditions or priorities shift, quickly restructures the team's work and explains the reasons and logic behind the changes to employees."
            ]
          },
          {
            "name": "Build a culture of continuous improvement",
            "items": [
              "Regularly discusses with the team what can be improved in workflows and approaches, and initiates the necessary changes.",
              "Encourages employees to share effective ways of working and apply them across the team."
            ]
          },
          {
            "name": "Help the team navigate change effectively",
            "items": [
              "Does not dismiss resistance to change: discusses its root causes and works through employees' concerns and objections.",
              "During periods of change, ensures the team has clarity on short-term priorities and maintains a productive working rhythm — even when the overall picture is not yet fully defined."
            ]
          }
        ]
      }
    ]
  },
  {
    "id": "mid",
    "label": "Senior Managers",
    "color": "#0f9b84",
    "pq": "Each practice answers the question: \"What does an effective mid-level leader do?\"",
    "bq": "Each manifestation answers the question: \"How does this leadership practice look in a mid-level manager?\"",
    "areas": [
      {
        "id": "clarity",
        "name": "Clarity & Alignment",
        "icon": "target",
        "practices": [
          {
            "name": "Translate strategy into clear guidelines for the team",
            "items": [
              "Translates strategic business goals into priorities for multiple teams or departments.",
              "Ensures that first-level managers understand the business logic of the tasks facing them, not just their content."
            ]
          },
          {
            "name": "Ensure alignment of goals with organizational priorities",
            "items": [
              "Ensures alignment of goals across departments — prevents teams from moving in opposite directions.",
              "Makes management decisions based on business interests, not just their own department's."
            ]
          },
          {
            "name": "Clearly define roles and expectations",
            "items": [
              "Responsibility among first-level managers is distributed without duplication or ambiguity.",
              "Formulates expectations for the quality of management work — not just for the team's business results."
            ]
          },
          {
            "name": "Form a shared understanding of what success means",
            "items": [
              "Creates a shared understanding of success for multiple teams — teams use aligned criteria for evaluating results.",
              "Resolves contradictions in expectations between departments before they manifest in conflicts."
            ]
          },
          {
            "name": "Ensure alignment between priorities and actual actions",
            "items": [
              "Reallocates resources between teams when priorities change — promptly and justifiably.",
              "Makes decisions on tradeoffs between competing tasks across multiple departments."
            ]
          }
        ]
      },
      {
        "id": "safety",
        "name": "Trust & Inclusivity",
        "icon": "heart",
        "practices": [
          {
            "name": "Foster psychological safety",
            "items": [
              "Identifies signs of an unhealthy atmosphere in lower-level teams and intervenes before issues escalate.",
              "Ensures first-level managers do not foster a culture of fear or silence within their teams."
            ]
          },
          {
            "name": "Demonstrate transparency and consistency",
            "items": [
              "Explains the reasoning behind difficult and unpopular decisions — does not merely announce the outcome.",
              "Acts consistently toward different teams — avoids any sense of favoritism."
            ]
          },
          {
            "name": "Encourage diversity of opinions and perspectives",
            "items": [
              "Draws on diverse sources of information when making decisions — does not rely solely on their inner circle.",
              "Establishes a norm where first-level managers actively encourage diverse perspectives within their teams."
            ]
          },
          {
            "name": "Maintain open and respectful communication",
            "items": [
              "Sets the communication standard across the entire perimeter — does not tolerate the suppression or distortion of information."
            ]
          },
          {
            "name": "Build a sense of belonging and team identity",
            "items": [
              "Recognizes the contributions of first-level managers — creating a sense of shared ownership over collective results."
            ]
          }
        ]
      },
      {
        "id": "capacity",
        "name": "Focus & Prioritization",
        "icon": "org",
        "practices": [
          {
            "name": "Separate the truly important from the secondary",
            "items": [
              "Identifies what truly matters to the business and aligns the priorities of multiple teams accordingly.",
              "Filters out operational noise — does not pass every incoming request or initiative down to teams."
            ]
          },
          {
            "name": "Make sound decisions on priorities and trade-offs",
            "items": [
              "Makes trade-off decisions between competing tasks and resources across multiple teams.",
              "Takes ownership of priority decisions — does not push them upward without good reason."
            ]
          },
          {
            "name": "Allocate resources effectively",
            "items": [
              "Knows how to decline resource requests with clear, substantiated reasoning."
            ]
          },
          {
            "name": "Focus attention on the highest-impact tasks",
            "items": [
              "Sees where energy across multiple teams is being wasted and redirects the perimeter.",
              "Connects the daily work of departments to business outcomes — helping teams see their contribution."
            ]
          },
          {
            "name": "Shield teams from unnecessary complexity and overload",
            "items": [
              "Protects teams from excessive external pressure — engaging with senior management and cross-functional teams on behalf of their perimeter."
            ]
          }
        ]
      },
      {
        "id": "execution",
        "name": "Execution & Accountability",
        "icon": "gear",
        "practices": [
          {
            "name": "Define ownership and accountability for tasks",
            "items": [
              "Management accountability is distributed across first-level managers — not centralized.",
              "Holds managers accountable for the quality of their managerial work — not just the team's business results."
            ]
          },
          {
            "name": "Ensure agreed goals and expected results are achieved",
            "items": [
              "Identifies systemic obstacles that prevent results from being achieved across the entire perimeter."
            ]
          },
          {
            "name": "Track progress and help remove obstacles",
            "items": [
              "Tracks progress across multiple teams — identifies systemic delays and recurring patterns.",
              "Resolves cross-functional dependencies that block execution.",
              "Uses engagement, turnover, and other leading indicators to inform management decisions across multiple teams."
            ]
          },
          {
            "name": "Maintain required performance standards",
            "items": [
              "Sets uniform performance standards across the entire perimeter — applied consistently, not selectively.",
              "When standards are systematically not met, initiates structural changes — not just targeted conversations."
            ]
          },
          {
            "name": "Follow through on commitments",
            "items": [
              "Ensures that agreements between departments are upheld — not just commitments within teams."
            ]
          }
        ]
      },
      {
        "id": "drag",
        "name": "Collaboration & Influence",
        "icon": "people",
        "practices": [
          {
            "name": "Build productive working relationships",
            "items": [
              "Builds partnerships with leaders of adjacent functions — based on mutual trust, not just formal processes.",
              "Develops a network of influence beyond their own perimeter."
            ]
          },
          {
            "name": "Align stakeholders around shared goals",
            "items": [
              "Manages competing priorities between functions — finding solutions rather than simply documenting conflicts."
            ]
          },
          {
            "name": "Influence beyond formal authority",
            "items": [
              "Influences decisions of senior management and adjacent functions through reasoned arguments and data.",
              "Builds coalitions around important decisions — identifying allies in advance and managing resistance."
            ]
          },
          {
            "name": "Enable effective cross-functional collaboration",
            "items": [
              "Establishes operational rhythms between departments — synchronization formats that function without requiring their direct involvement.",
              "Removes structural barriers that impede cross-functional collaboration."
            ]
          },
          {
            "name": "Resolve disagreements and conflicts constructively",
            "items": [
              "Intervenes in cross-functional conflicts before they escalate — does not wait for the situation to reach senior leadership.",
              "Distinguishes between constructive work disagreements and toxic patterns — responds appropriately to each."
            ]
          }
        ]
      },
      {
        "id": "learning",
        "name": "Learning & Adaptation",
        "icon": "chart",
        "practices": [
          {
            "name": "Encourage continuous development and learning",
            "items": [
              "Ensures that first-level managers are actively developing their people — not just managing tasks.",
              "Deliberately identifies employees with management potential and creates conditions for their growth."
            ]
          },
          {
            "name": "Support experimentation and adoption of new approaches",
            "items": [
              "Protects teams that are experimenting from excessive oversight and criticism from above."
            ]
          },
          {
            "name": "Adapt flexibly to changing conditions",
            "items": [
              "Restructures the operational model of the perimeter during strategic changes — does not merely relay new directives.",
              "Supports first-level managers during periods of change — helping them maintain stability and lead their teams."
            ]
          },
          {
            "name": "Build a culture of continuous improvement",
            "items": [
              "Identifies systemic inefficiencies and initiates their resolution.",
              "Creates formats for sharing best practices between teams."
            ]
          },
          {
            "name": "Help the team navigate change effectively",
            "items": [
              "Supports first-level managers in their role as change champions — helping them manage team resistance."
            ]
          }
        ]
      }
    ]
  },
  {
    "id": "team",
    "label": "Teams",
    "color": "#6a3fd8",
    "pq": "Each practice answers the question: \"What does an effective team do?\"",
    "bq": "Each manifestation answers the question: \"How does this practice look in an effective team?\"",
    "areas": [
      {
        "id": "clarity",
        "name": "Clarity & Alignment",
        "icon": "target",
        "practices": [
          {
            "name": "Shared understanding of goals and results",
            "items": [
              "The team understands how its work is connected to the organization's goals.",
              "The team shares a common understanding of the goals and expected results of its work."
            ]
          },
          {
            "name": "Clarity of roles and accountability",
            "items": [
              "Team members understand each other's roles, areas of accountability, and expertise.",
              "When tasks or team composition change, roles and accountability are reviewed in a timely manner."
            ]
          },
          {
            "name": "Shared agreements and information transparency",
            "items": [
              "Important information is communicated to all team members in a timely manner.",
              "After discussions and meetings, the team has a shared understanding of decisions made and next steps.",
              "The team develops clear agreements on how collaborative work will be organized."
            ]
          }
        ]
      },
      {
        "id": "safety",
        "name": "Trust & Inclusion",
        "icon": "heart",
        "practices": [
          {
            "name": "Trust and psychological safety",
            "items": [
              "Team members can openly express their opinions without fear of negative consequences.",
              "The team openly discusses mistakes, problems, and difficult issues rather than suppressing them.",
              "When mistakes occur, the team focuses on finding a solution rather than finding someone to blame."
            ]
          },
          {
            "name": "Collaborative decision making",
            "items": [
              "When making decisions, the team considers several possible options rather than stopping at the first proposed solution.",
              "When making decisions, the team takes into account different points of view and members' experience.",
              "When discussing decisions, the team relies on facts and arguments rather than the status or influence of individual members.",
              "After making a decision, the team acts in alignment, even if opinions differed during the discussion."
            ]
          },
          {
            "name": "Team engagement: Engagement of every member in collaborative work",
            "items": [
              "The team actively involves members who usually speak less frequently in discussions.",
              "New members quickly become full participants in collaborative work.",
              "When one member is overloaded, other team members take on some of their work without being asked."
            ]
          }
        ]
      },
      {
        "id": "capacity",
        "name": "Focus & Priorities",
        "icon": "org",
        "practices": [
          {
            "name": "Focus on priority work",
            "items": [
              "The team has a shared understanding of which tasks are the most important at the moment.",
              "The team maintains focus on priority work despite the appearance of new tasks."
            ]
          },
          {
            "name": "Setting priorities",
            "items": [
              "When several important tasks arise, the team quickly reaches a common understanding of what should be done first.",
              "The team maintains focus on priority work even when urgent tasks appear.",
              "When circumstances change, the team reviews the order of work in a timely manner and aligns its actions accordingly."
            ]
          },
          {
            "name": "Effective effort distribution",
            "items": [
              "The team notices signs of overload in individual members in a timely manner and discusses ways to reduce it.",
              "When distributing work, the team explicitly considers who is best suited for a specific task, not just who is currently available."
            ]
          }
        ]
      },
      {
        "id": "execution",
        "name": "Execution & Accountability",
        "icon": "gear",
        "practices": [
          {
            "name": "Fulfilling commitments",
            "items": [
              "The team identifies and openly communicates risks of failing to meet agreements in a timely manner.",
              "When obstacles arise, the team does not abandon agreements but finds ways to fulfill them."
            ]
          },
          {
            "name": "Mutual accountability for shared results",
            "items": [
              "Team members consider the shared result to be their common accountability, not just the area of responsibility of individual members.",
              "Team members openly remind each other of agreements and do not ignore cases of their non-fulfillment.",
              "When necessary, team members take on additional tasks to achieve the shared result."
            ]
          }
        ]
      },
      {
        "id": "drag",
        "name": "Collaboration & Influence",
        "icon": "people",
        "practices": [
          {
            "name": "Partnership collaboration",
            "items": [
              "The team maintains stable working relationships with other teams rather than interacting only when necessary.",
              "The team proactively initiates interaction when tasks require the involvement of multiple teams.",
              "The team responds to requests from other teams related to collaborative work in a timely manner.",
              "The team shares experience and best practices with other teams even when it is not directly required for current tasks."
            ]
          },
          {
            "name": "Alignment of mutual expectations and agreements",
            "items": [
              "The team aligns priorities and expected results of collaborative work with other teams in advance.",
              "The team aligns roles and areas of accountability during collaborative work.",
              "When making decisions, the team considers their impact on the work of other teams.",
              "When conditions change, the team reviews established agreements with other teams in a timely manner."
            ]
          },
          {
            "name": "Constructive resolution of cross-team disagreements",
            "items": [
              "The team discusses disagreements with other teams openly and in a timely manner, rather than delaying until escalation.",
              "When disagreements arise, the team seeks to understand the interests of the other party, rather than solely defending its own position.",
              "The team uses escalation only when direct negotiations have failed to yield a solution.",
              "The team is open to revising its own position if doing so helps achieve the shared result."
            ]
          }
        ]
      },
      {
        "id": "learning",
        "name": "Learning & Adaptation",
        "icon": "chart",
        "practices": [
          {
            "name": "Learning from experience",
            "items": [
              "The team regularly analyzes the causes of its successes and failures and changes working approaches if necessary.",
              "The team does not repeat the same mistakes systematically.",
              "Gained experience and knowledge are quickly spread within the team and used in future work."
            ]
          },
          {
            "name": "Continuous improvement of working methods",
            "items": [
              "The team proactively implements improvements in its working methods without waiting for external directives.",
              "The team evaluates the results of implemented changes and retains the most effective practices.",
              "The team studies the working methods of other teams or organizations and, if necessary, implements best practices without waiting for problems to arise."
            ]
          },
          {
            "name": "Adaptation to new conditions and changes",
            "items": [
              "The team quickly rearranges its work when conditions change.",
              "The team masters new working methods required to achieve results in a timely manner.",
              "The team reviews processes and agreements when the previous approach no longer works."
            ]
          }
        ]
      }
    ]
  }
]
