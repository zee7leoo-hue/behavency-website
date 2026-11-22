# Behavency Workflow — Dynamic GSAP Animation

This version recreates the supplied two-image workflow as one transforming product interface inspired by monday.com-style motion.

The website navigation bar and the animation timeline controls have been removed so only the workflow is visible.

## Dynamic transformation behaviour

- All three workflow workspaces are visible from the beginning, so this no longer feels like three slides appearing one by one.
- All three cards begin as coordinated waiting workspaces and use the exact same fade, lift, scale and timing for their entrance. The first says “Ready for Team Insights,” then its waiting layer transforms away before the navigation and capability scores build row by row.
- The recommendation and Masterplan areas start as polished live waiting states.
- Collaboration, Communication and Accountability are selected individually because those choices explain what Behavency discovered.
- The three selected priorities compress into one visible bundle and enter the recommendation card as one input—there is no detached “thinking” popup.
- Matching happens inside the recommendation card. Psychological Safety appears first, followed clearly by Constructive Conflict and then Team Leadership; each row receives its match badge before the next recommendation begins.
- The three recommended modules compress into one second bundle and feed the Masterplan card.
- The Masterplan is visibly constructed in place: structure first, practical tools next, then actions and reminders.
- Calendar actions convert into completed status chips, followed by a compact success notification.
- The three interfaces settle into the complete connected workflow.
- The completed three-card workflow remains visible for a readable pause, then all three waiting cards restart together from their original positions.
- Cards, connectors and meaningful product states react throughout the sequence.
- Card typography has been enlarged throughout for website readability, with spacing adjusted so labels, scores, descriptions and actions remain inside their containers.
- All three cards are taller, and their capability, recommendation and Masterplan rows have additional vertical space so the larger text fits cleanly without crowding.
- Highlighted capability rows are fully inset from the first card edge, with protected score spacing, shorter bars and softer outlines so the right-side values and rounded borders remain clean and uncropped.
- The “3 priority findings selected” status panel now has a larger, even inset from the card edges and additional internal height, so it no longer feels pressed against the bottom border.

## Correct sequence

1. Report findings
   - Team Insights opens.
   - Five capability rows appear.
   - Score bars calculate gradually.
   - Collaboration, Communication and Accountability are isolated for matching.

2. Recommended training
   - The three selected priorities become one clearly labelled data bundle.
   - The bundle travels through the first connector and is absorbed by an in-card matching state.
   - Psychological Safety, Constructive Conflict and Team Leadership appear one after another, with each recommendation completing before the next begins.

3. Your Masterplan
   - The second connector activates.
   - The recommended modules flow together as one input into a visible “Creating your Masterplan” state.
   - Structure, tools and actions are acknowledged as the three construction layers.
   - The plan header and tabs then establish the real structure.
   - The 1:1 meeting guide, feedback framework and goal-setting template populate the plan in sequence.
   - Calendar actions appear after the tools, then convert into completed statuses.

## Animation timing

The animation gives extra time only to meaningful decisions: the three assessment priorities and the construction of the Masterplan. Recommendation matching is deliberately grouped into one event, and the completed three-card workflow remains visible before the loop restarts.

Near the bottom of app.js, change `master.timeScale(.60)` to adjust the complete animation. This revision gives viewers more time to read each meaningful workflow state while preserving the grouped recommendation event:

- Use `.75` for a faster result.
- Use `.50` for a slower result.

## Files

- index.html — complete interface and all reference content
- styles.css — visual design and responsive layouts
- app.js — GSAP timeline and controls

## Run locally

Keep all three files together and open index.html in a modern browser.

For a local server, run:

python -m http.server 5500

Then visit http://localhost:5500.

The project currently loads GSAP and the fonts from CDNs, so an internet connection is required.

## CodePen

1. Copy the content inside the body element into the HTML panel.
2. Copy styles.css into the CSS panel.
3. Copy app.js into the JavaScript panel.
4. Add this external dependency:
   https://cdn.jsdelivr.net/npm/gsap@3.13.0/dist/gsap.min.js
5. Add the Google Fonts links from index.html.

## WordPress or Elementor

1. Add the product-story section to an Elementor HTML widget.
2. Load styles.css through the child theme or Elementor Custom CSS.
3. Load GSAP before app.js.
4. Load app.js through the child theme or a custom-code plugin.
5. Do not paste document-level html, head or body tags into the widget.

## Included controls

- Automatic pause when the browser tab is hidden
- Reduced-motion support
- Responsive desktop, tablet and horizontal mobile presentation
- GSAP Core only; no paid plugin is required

## Mobile version (max-width: 767px)

On phones the three-card layout is replaced by ONE card with ONE list. The same three rows transform in place, so the viewer sees one idea becoming the next:

1. Findings: Collaboration, Communication, Accountability appear with score bars.
2. Training: the same rows change into Psychological Safety, Constructive Conflict, Team Leadership with match percentages.
3. Masterplan: the same rows change into practical tools, each with a green tick.

A 1-2-3 progress track, a one-line caption and a result chip inside the card update along the way. Loop is about 38 seconds including a long hold on the finished result.

Files: `mobile.css`, `mobile.js`, and the `.m-story` block in `index.html`.
- Speed: change `const SPEED = 1;` at the top of `mobile.js` (0.5 slower, 0.8 faster; default 0.62).
- Breakpoint: `767px` in `mobile.css`, `mobile.js` and `app.js`.
- Plays only while on screen; shows the finished state for reduced-motion users.
