/*
 * Behavency causal workflow animation
 * The boxes appear one after another: each box starts only after the box before it has finished its story.
 */
(() => {
  "use strict";

  if (!window.gsap) {
    document.body.insertAdjacentHTML("afterbegin", '<p style="padding:10px;text-align:center;background:#fff0f0;color:#9b1b1b">GSAP could not load. Check your connection or host gsap.min.js locally.</p>');
    return;
  }

  const q = gsap.utils.selector("#productStory");
  const reducedMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
  const capabilityRows = q(".capability-row");
  const priorityRows = [capabilityRows[0], capabilityRows[1], capabilityRows[2]];
  const recommendations = q(".recommendation");
  const tools = q(".tool-row");

  // Tells the page which box is about to appear, so its connecting line and arrow can grow just before it.
  const flow = step => { try { window.parent.postMessage({ type: "BEHAVENCY_FLOW", step }, "*"); } catch (e) { /* standalone */ } };

  const phase = (timeline, number) => timeline.addLabel(`phase-${number}`);

  const setPlanStage = text => {
    document.querySelector(".plan-hero small").textContent = text;
  };

  // The small summary box that flies from one box to the next.
  const bundleItems = q(".bundle-items b");
  const setBundle = (title, items, symbol = "✓") => {
    document.querySelector(".logic-bundle header strong").textContent = title;
    document.querySelector(".logic-bundle header span").textContent = symbol;
    items.forEach((item, index) => { bundleItems[index].textContent = item; });
  };

  // Box 3 opens on this "Creating your Masterplan" screen, then it opens up into the tools.
  const setPlanCreating = () => {
    document.querySelector(".plan-mask > strong").textContent = "Creating your Masterplan";
    document.querySelector(".plan-mask > small").textContent = "Suggested training becomes a structure, practical tools and actions.";
  };

  // Box 2 opens on this "matched" screen, then it opens up into the three trainings.
  const setRecommendationMatched = () => {
    document.querySelector(".recommendation-mask > strong").textContent = "3 relevant modules matched";
    document.querySelector(".recommendation-mask > small").textContent = "The selected findings resolve into one focused training recommendation.";
    document.querySelector(".recommendation-mask .mask-status").textContent = "Best-fit training found";
  };

  // Boxes 2 and 3 stay hidden until the box before them has finished.
  gsap.set(q(".step-grid"), { autoAlpha: 0, y: 18, scale: .985, transformOrigin: "center top" });
  gsap.set(q(".recommend-column, .plan-column"), { autoAlpha: 0, y: 22, scale: .985 });
  gsap.set(q(".flow-arrow"), { autoAlpha: 0, scale: .78 });
  gsap.set(q(".logic-bundle"), { autoAlpha: 0, scale: .74, transformOrigin: "center" });
  gsap.set(q(".match-meter i"), { scaleX: 1 });
  gsap.set(q(".capability-row"), { autoAlpha: 0, x: -14 });
  gsap.set(q(".capability-row > i b"), { scaleX: 0 });
  gsap.set(q(".capability-row em"), { autoAlpha: 0 });
  gsap.set(recommendations, { autoAlpha: 0, y: 18, scale: .965 });
  gsap.set(q(".match-pill"), { opacity: 0 });
  gsap.set(q(".plan-hero, .plan-tabs, .tool-row"), { autoAlpha: 0, y: 16 });
  gsap.set(q(".tool-row button"), { autoAlpha: 0, scale: .86 });
  gsap.set(q(".tool-row em"), { autoAlpha: 0, scale: .72 });
  gsap.set(q(".insights-nav"), { autoAlpha: 0, x: -18 });
  gsap.set(q(".capability-panel h2"), { autoAlpha: 0, y: 8 });
  gsap.set(q(".findings-summary"), { autoAlpha: 0, y: 7, scale: .95 });
  gsap.set(q(".completion-toast"), { autoAlpha: 0, x: 35, scale: .9 });

  const master = gsap.timeline({
    paused: true,
    repeat: -1,
    repeatDelay: 0,
    defaults: { ease: "power3.out" }
  });

  // 1 — Box 1 appears on its own and reveals the assessment.
  phase(master, 1)
    .call(() => {
      flow(1);
      setPlanStage("Training → everyday practice");
      setRecommendationMatched();
      setPlanCreating();
      setBundle("3 priorities selected", ["Collaboration", "Communication", "Accountability"], "✓");
    })
    .set(q(".logic-bundle"), { autoAlpha: 0, left: "17%", top: "43%", scale: .74, rotation: 0 })
    .set(q(".plan-mask"), { autoAlpha: 1, xPercent: 0, yPercent: 0, clipPath: "inset(0% 0% 0% 0% round 0px)" })
    .set(q(".plan-mask > span"), { rotation: 0, scale: 1 })
    .set(q(".plan-build-map b"), { opacity: .55, backgroundColor: "#fff", scale: 1 })
    .set(q(".plan-build-map i"), { scaleX: 0, transformOrigin: "left" })
    .set(q(".recommendation-mask"), { autoAlpha: 1, xPercent: 0, yPercent: 0, clipPath: "inset(0% 0% 0% 0% round 0px)" })
    .set(q(".recommendation-mask > span"), { rotation: 0, scale: 1 })
    .set(q(".match-meter i"), { scaleX: 1 })
    .set(q(".recommend-column, .plan-column"), { autoAlpha: 0, y: 22, scale: .985 })
    .set(q(".flow-arrow"), { autoAlpha: 0, scale: .78 })
    .set(q(".capability-row"), { opacity: 1, filter: "none", x: -14, scale: 1, backgroundColor: "transparent", fontWeight: 400 })
    .set(q(".capability-row u"), { opacity: 0, scale: 1, boxShadow: "none" })
    .set(q(".insights-mask"), { autoAlpha: 1, xPercent: 0, yPercent: 0, clipPath: "inset(0% 0% 0% 0% round 0px)" })
    .set(recommendations, { autoAlpha: 0, y: 18, scale: .965 })
    .set(q(".match-pill"), { opacity: 0 })
    .set(q(".count-pill"), { scale: 1 })
    .set(q(".plan-hero, .plan-tabs, .tool-row"), { autoAlpha: 0, y: 16 })
    .set(q(".tool-row button"), { autoAlpha: 0, scale: .86, backgroundColor: "#eef8ff", color: "#0877be" })
    .set(q(".tool-row em"), { autoAlpha: 0, scale: .72 })
    .set(q(".findings-summary"), { autoAlpha: 0, y: 7, scale: .95 })
    .set(q(".completion-toast"), { autoAlpha: 0, x: 35, scale: .9 })
    .to(q(".mask-lines i"), { backgroundPosition: "-120% 0", duration: .65, ease: "none" })
    .to({}, { duration: .3 })
    .to(q(".insights-mask"), { clipPath: "inset(0% 100% 0% 0% round 0px)", autoAlpha: 0, duration: .62, ease: "power3.inOut" })
    .to(q(".insights-nav"), { autoAlpha: 1, x: 0, duration: .34 }, "<+.08")
    .fromTo(q(".insights-nav button"), { opacity: 0 }, { opacity: 1, duration: .28 }, "<")
    .to(q(".capability-panel h2"), { autoAlpha: 1, y: 0, duration: .3 }, "<+.08")
    .to(q(".capability-row"), { autoAlpha: 1, x: 0, stagger: .05, duration: .32 }, "<+.05")
    .to(q(".capability-row > i b"), { scaleX: 1, stagger: .04, duration: .52, ease: "power2.inOut" }, "<+.08")
    .to(q(".capability-row em"), { autoAlpha: 1, stagger: .04, duration: .22 }, "<+.22")
    .to({}, { duration: .42 });

  // 2 — Read the report, then select the three findings one by one.
  phase(master, 2)
    .to(q(".scan-light"), { left: "110%", duration: .92, ease: "power2.inOut" })
    .to(q(".capability-row:not(.priority-insight)"), { opacity: .34, filter: "saturate(.42)", duration: .34 }, "<+.2")
    .to(priorityRows[0], { opacity: 1, filter: "saturate(1)", x: 0, scale: 1, backgroundColor: "rgba(125,43,209,.075)", borderRadius: 8, fontWeight: 600, duration: .34 })
    .to(priorityRows[0].querySelector("u"), { opacity: 1, scale: 1, borderColor: "rgba(125,43,209,.78)", boxShadow: "0 0 0 1px rgba(125,43,209,.09)", duration: .3 }, "<")
    .to({}, { duration: .2 })
    .to(priorityRows[1], { opacity: 1, filter: "saturate(1)", x: 0, scale: 1, backgroundColor: "rgba(125,43,209,.075)", borderRadius: 8, fontWeight: 600, duration: .34 })
    .to(priorityRows[1].querySelector("u"), { opacity: 1, scale: 1, borderColor: "rgba(125,43,209,.78)", boxShadow: "0 0 0 1px rgba(125,43,209,.09)", duration: .3 }, "<")
    .to({}, { duration: .2 })
    .to(priorityRows[2], { opacity: 1, filter: "saturate(1)", x: 0, scale: 1, backgroundColor: "rgba(125,43,209,.075)", borderRadius: 8, fontWeight: 600, duration: .34 })
    .to(priorityRows[2].querySelector("u"), { opacity: 1, scale: 1, borderColor: "rgba(125,43,209,.78)", boxShadow: "0 0 0 1px rgba(125,43,209,.09)", duration: .3 }, "<")
    .to(q(".findings-summary"), { autoAlpha: 1, y: 0, scale: 1, duration: .34, ease: "back.out(1.5)" }, ">+.1")
    // the small "3 priorities selected" box pops up over box 1
    .set(q(".bundle-items span"), { opacity: 0, y: 7 }, ">+.2")
    .to(q(".logic-bundle"), { autoAlpha: 1, scale: 1, duration: .5, ease: "power2.out" }, "<")
    .fromTo(q(".bundle-items span"), { y: 7, opacity: 0 }, { y: 0, opacity: 1, stagger: .08, duration: .3, ease: "power2.out", immediateRender: false }, "<+.12")
    .to({}, { duration: .55 });

  // 3 — The small box flies to box 2; box 2 appears as it lands, then its 3 trainings appear one by one.
  phase(master, 3)
    .call(() => flow(2))
    .to({}, { duration: .6 })
    .to(q(".arrow-one"), { autoAlpha: 1, scale: 1.04, duration: .5, ease: "power2.out" })
    .to(q(".logic-bundle"), { left: "43%", top: "43%", scale: .72, duration: .62, ease: "power2.inOut" }, "<+.1")
    .to(q(".recommend-column"), { autoAlpha: 1, y: 0, scale: 1, duration: .6, ease: "power2.out" }, "<+.25")
    .to(q(".logic-bundle"), { autoAlpha: 0, scale: .3, duration: .3, ease: "power2.in" }, ">-.05")
    .from(q(".recommendation-mask > span"), { scale: .6, duration: .5, ease: "power2.out" }, "<+.1")
    .to({}, { duration: .55 })
    .to(q(".recommendation-mask"), { clipPath: "inset(50% 0% 50% 0% round 12px)", autoAlpha: 0, duration: .6, ease: "power3.inOut" })
    .to(recommendations[0], { autoAlpha: 1, y: 0, scale: 1, duration: .55, ease: "power2.out" }, "<+.2")
    .to(recommendations[0].querySelector(".match-pill"), { opacity: 1, duration: .35, ease: "power2.out" }, "<+.18")
    .to(recommendations[1], { autoAlpha: 1, y: 0, scale: 1, duration: .55, ease: "power2.out" }, ">+.28")
    .to(recommendations[1].querySelector(".match-pill"), { opacity: 1, duration: .35, ease: "power2.out" }, "<+.18")
    .to(recommendations[2], { autoAlpha: 1, y: 0, scale: 1, duration: .55, ease: "power2.out" }, ">+.28")
    .to(recommendations[2].querySelector(".match-pill"), { opacity: 1, duration: .35, ease: "power2.out" }, "<+.18")
    .to({}, { duration: .5 });

  // 4 — A small "3 recommended modules" box flies to box 3; box 3 appears as it lands and builds the tools one by one.
  phase(master, 4)
    .call(() => setBundle("3 recommended modules", ["Psychological Safety", "Constructive Conflict", "High-Performing Teams"], "✦"))
    .set(q(".logic-bundle"), { left: "50%", top: "43%", scale: .74 })
    .set(q(".bundle-items span"), { opacity: 0, y: 7 })
    .to(q(".logic-bundle"), { autoAlpha: 1, scale: 1, duration: .5, ease: "power2.out" })
    .fromTo(q(".bundle-items span"), { y: 7, opacity: 0 }, { y: 0, opacity: 1, stagger: .08, duration: .3, ease: "power2.out", immediateRender: false }, "<+.12")
    .to({}, { duration: .5 })
    .call(() => flow(3))
    .to({}, { duration: .6 })
    .to(q(".arrow-two"), { autoAlpha: 1, scale: 1.04, duration: .5, ease: "power2.out" })
    .to(q(".logic-bundle"), { left: "76%", top: "43%", scale: .72, duration: .62, ease: "power2.inOut" }, "<+.1")
    .to(q(".plan-column"), { autoAlpha: 1, y: 0, scale: 1, duration: .6, ease: "power2.out" }, "<+.25")
    .to(q(".logic-bundle"), { autoAlpha: 0, scale: .3, duration: .3, ease: "power2.in" }, ">-.05")
    .from(q(".plan-mask > span"), { scale: .6, duration: .5, ease: "power2.out" }, "<+.1")
    .to(q(".plan-build-map b:nth-of-type(1)"), { opacity: 1, backgroundColor: "#e4faf3", duration: .35 }, ">+.15")
    .to(q(".plan-build-map i:nth-of-type(1)"), { scaleX: 1, duration: .3 }, "<+.1")
    .to(q(".plan-build-map b:nth-of-type(2)"), { opacity: 1, backgroundColor: "#e4faf3", duration: .35 }, ">+.05")
    .to(q(".plan-build-map i:nth-of-type(2)"), { scaleX: 1, duration: .3 }, "<+.1")
    .to(q(".plan-build-map b:nth-of-type(3)"), { opacity: 1, backgroundColor: "#e4faf3", duration: .35 }, ">+.05")
    .to(q(".plan-mask"), { clipPath: "inset(0% 0% 100% 0% round 12px)", autoAlpha: 0, duration: .6, ease: "power3.inOut" })
    .to(q(".plan-hero"), { autoAlpha: 1, y: 0, duration: .5, ease: "power2.out" }, "<+.2")
    .to(q(".plan-tabs"), { autoAlpha: 1, y: 0, duration: .45, ease: "power2.out" }, "<+.12")
    .call(() => setPlanStage("Populating practical tools…"))
    .to(tools[0], { autoAlpha: 1, y: 0, duration: .55, ease: "power2.out" }, ">+.18")
    .to(tools[1], { autoAlpha: 1, y: 0, duration: .55, ease: "power2.out" }, ">+.28")
    .to(tools[2], { autoAlpha: 1, y: 0, duration: .55, ease: "power2.out" }, ">+.28")
    .call(() => setPlanStage("Adding actions and reminders…"))
    .to(q(".tool-row button"), { autoAlpha: 1, scale: 1, duration: .45, stagger: .16, ease: "power2.out" }, ">+.12")
    .to({}, { duration: .5 })
    .to(q(".tool-row button"), { backgroundColor: "#def6ed", color: "#15856c", duration: .25 })
    .to(q(".tool-row button"), { autoAlpha: 0, scale: .7, duration: .22 }, "<+.05")
    .to(q(".tool-row em"), { autoAlpha: 1, scale: 1, duration: .3, stagger: .1, ease: "power2.out" }, "<")
    .call(() => setPlanStage("Training → everyday practice"))
    .to(q(".completion-toast"), { autoAlpha: 1, x: 0, scale: 1, duration: .45, ease: "power2.out" }, "<+.14")
    .to(q(".completion-toast"), { autoAlpha: 0, x: 28, scale: .92, duration: .4 }, ">+1")
    .addLabel("final-state")
    .to({}, { duration: 2.1 })
    // Hand-over to the next loop: nothing blinks off. Boxes 2 and 3 fade away softly while box 1
    // eases back to its opening screen, so the loop continues from box 1 that is already on screen.
    .call(() => flow(1))
    .to(q(".recommend-column, .plan-column, .flow-arrow"), { autoAlpha: 0, duration: .6, ease: "power2.inOut" })
    .set(q(".insights-mask"), { clipPath: "inset(0% 0% 0% 0% round 0px)", xPercent: 0, yPercent: 0 }, "<")
    .to(q(".insights-mask"), { autoAlpha: 1, duration: .6, ease: "power2.inOut" }, "<");

  master.timeScale(.72);

  // The mobile version (mobile.js) takes over at <= 767px, so the desktop timeline rests there.
  const mobileQuery = window.matchMedia("(max-width: 767px)");
  const syncDesktop = () => (document.hidden || mobileQuery.matches) ? master.pause() : master.play();

  document.addEventListener("visibilitychange", syncDesktop);
  if (mobileQuery.addEventListener) mobileQuery.addEventListener("change", syncDesktop);
  else mobileQuery.addListener(syncDesktop);

  // Box 1 fades in once, the first time only. After that the loop runs without any box disappearing.
  const intro = gsap.timeline({ paused: true, defaults: { ease: "power3.out" }, onComplete: () => { master.play(0); syncDesktop(); } })
    .to(q(".step-grid"), { autoAlpha: 1, y: 0, scale: 1, duration: .62 })
    .from(q(".identify-column .column-heading"), { y: -8, opacity: 0, duration: .34 }, "<+.06")
    .from(q(".insights-card"), { y: 12, opacity: 0, scale: .98, duration: .42 }, "<")
    .from(q(".insights-mask > span"), { scale: .55, rotation: -14, duration: .34, ease: "back.out(1.8)" }, "<+.08");

  if (reducedMotion) {
    flow(3);
    intro.progress(1).pause();
    master.seek("final-state").pause();
  } else {
    flow(1);
    intro.delay(.8).play(0);
  }
})();
