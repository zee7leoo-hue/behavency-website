/*
 * Behavency workflow — MOBILE ONLY (max-width: 767px)
 * One card, one list. The same 3 rows transform in place:
 *   Finding (score)  ->  Recommended training (match %)  ->  Masterplan tool (✓ added)
 * Change SPEED to make it faster/slower (1 = as designed).
 */
(() => {
  "use strict";
  const SPEED = 0.62;
  const root = document.getElementById("mStory");
  if (!root || !window.gsap) return;

  const mq = window.matchMedia("(max-width: 767px)");
  const reduced = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
  const $ = s => root.querySelector(s);
  const $$ = s => Array.from(root.querySelectorAll(s));

  const LEAD = [
    "Your team results reveal 3 priorities",
    "Each priority is matched to training",
    "Each training becomes a practical tool"
  ];
  const STATUS = ["3 priorities found", "3 trainings matched", "Masterplan ready"];
  const LABEL = ["Finding", "Matched training", "Masterplan tool"];
  const TEXT = [
    ["Collaboration", "Communication", "Accountability"],
    ["Psychological Safety", "Constructive Conflict", "Team Leadership"],
    ["Run effective 1:1 meetings", "Give clearer feedback", "Set and align team goals"]
  ];
  const TAG = [["4.1", "3.8", "3.2"], ["94%", "89%", "86%"], ["✓", "✓", "✓"]];
  const NUM_STYLE = [
    [{ backgroundColor: "#ffe2e5", color: "#df4652" }, { backgroundColor: "#fff0d2", color: "#dc9000" }, { backgroundColor: "#fff0d2", color: "#dc9000" }],
    [{ backgroundColor: "#f1e8ff", color: "#7d2bd1" }, { backgroundColor: "#f1e8ff", color: "#7d2bd1" }, { backgroundColor: "#f1e8ff", color: "#7d2bd1" }],
    [{ backgroundColor: "#def8ef", color: "#10a882" }, { backgroundColor: "#def8ef", color: "#10a882" }, { backgroundColor: "#def8ef", color: "#10a882" }]
  ];
  const TAG_STYLE = [
    { backgroundColor: "#eef1f6", color: "#52607c" },
    { backgroundColor: "#e9f8f3", color: "#159376" },
    { backgroundColor: "#13b894", color: "#ffffff" }
  ];

  let tl = null, inView = false;

  function build() {
    const card = $(".m-card");
    const steps = $$(".m-step"), fill = $(".m-steps-fill");
    const lead = $("#mLead"), status = $("#mStatus"), statusBox = $(".m-status"), statusIcon = $(".m-status span");
    const items = $$(".m-item");
    const nums = $$(".m-num"), labs = $$(".m-lab"), txts = $$(".m-txt"), tags = $$(".m-tag");
    const barBoxes = $$(".m-bar"), bars = $$(".m-bar b");

    const mark = n => steps.forEach((el, i) => { el.classList.toggle("is-active", i === n - 1); el.classList.toggle("is-done", i < n - 1); });

    /* soft text swap: old text lifts away, new text settles in */
    const swap = (t, el, text, at) => {
      t.to(el, { autoAlpha: 0, y: -8, duration: .3, ease: "power1.in" }, at)
       .call(() => { el.textContent = text; }, null, at + .3)
       .fromTo(el, { y: 8 }, { autoAlpha: 1, y: 0, duration: .45, immediateRender: false }, at + .3);
    };

    const t = gsap.timeline({ paused: true, repeat: -1, defaults: { ease: "power2.out" } });

    /* reset: stage 1 (runs on every loop) */
    t.call(() => {
        mark(1); lead.textContent = LEAD[0]; status.textContent = STATUS[0];
        items.forEach((_, i) => { labs[i].textContent = LABEL[0]; txts[i].textContent = TEXT[0][i]; tags[i].textContent = TAG[0][i]; });
      })
     .set(card, { autoAlpha: 0, y: 14 })
     .set(fill, { scaleX: 0 })
     .set(lead, { autoAlpha: 0, y: 8 })
     .set([labs, txts].flat(), { autoAlpha: 1, y: 0 })
     .set(items, { autoAlpha: 0, y: 14, borderColor: "#edf0f4", backgroundColor: "#fbfcfe" })
     .set(nums, { autoAlpha: 1 })
     .set(tags, { autoAlpha: 1, y: 0, ...TAG_STYLE[0] })
     .set(barBoxes, { height: 6, marginTop: 8, autoAlpha: 1 })
     .set(bars, { scaleX: 0 })
     .set(statusBox, { autoAlpha: 0, y: 10, borderColor: "#dac8f1", backgroundColor: "#f7f1ff", color: "#6823b2" })
     .set(statusIcon, { backgroundColor: "#7d2bd1" })
     .set(status, { autoAlpha: 1, y: 0 });
    nums.forEach((n, i) => t.set(n, NUM_STYLE[0][i]));

    /* STAGE 1 · findings appear with their scores */
    t.addLabel("s1")
     .to(card, { autoAlpha: 1, y: 0, duration: .8 })
     .to(lead, { autoAlpha: 1, y: 0, duration: .5 }, "-=.2")
     .to(items, { autoAlpha: 1, y: 0, duration: .5, stagger: .4 }, "+=.05")
     .to(bars, { scaleX: 1, duration: 1.1, stagger: .4, ease: "power2.inOut" }, "<.15")
     .to(statusBox, { autoAlpha: 1, y: 0, duration: .5 }, "+=.3")
     .to({}, { duration: 2.6 });

    /* STAGE 2 · the same rows become recommended training */
    t.addLabel("s2")
     .call(() => mark(2), null, "s2")
     .to(fill, { scaleX: .5, duration: 1, ease: "power2.inOut" }, "s2");
    swap(t, lead, LEAD[1], t.labels.s2);
    t.to(barBoxes, { height: 0, marginTop: 0, autoAlpha: 0, duration: .6, ease: "power2.inOut" }, "s2+=.1");
    items.forEach((it, i) => {
      const at = t.labels.s2 + .5 + i * .5;
      swap(t, labs[i], LABEL[1], at);
      swap(t, txts[i], TEXT[1][i], at + .08);
      swap(t, tags[i], TAG[1][i], at + .16);
      t.to(nums[i], { ...NUM_STYLE[1][i], duration: .5 }, at)
       .to(tags[i], { ...TAG_STYLE[1], duration: .5 }, at + .2);
    });
    swap(t, status, STATUS[1], t.labels.s2 + 2.1);
    t.to({}, { duration: 3 }, t.labels.s2 + 3.3);

    /* STAGE 3 · the same rows become practical tools, added ✓ */
    t.addLabel("s3")
     .call(() => mark(3), null, "s3")
     .to(fill, { scaleX: 1, duration: 1, ease: "power2.inOut" }, "s3");
    swap(t, lead, LEAD[2], t.labels.s3);
    items.forEach((it, i) => {
      const at = t.labels.s3 + .5 + i * .5;
      swap(t, labs[i], LABEL[2], at);
      swap(t, txts[i], TEXT[2][i], at + .08);
      swap(t, tags[i], TAG[2][i], at + .16);
      t.to(nums[i], { ...NUM_STYLE[2][i], duration: .5 }, at)
       .to(tags[i], { ...TAG_STYLE[2], duration: .5 }, at + .2)
       .to(it, { borderColor: "#c8eee3", backgroundColor: "#f4fcf9", duration: .5 }, at + .2);
    });
    swap(t, status, STATUS[2], t.labels.s3 + 2.1);
    t.to(statusBox, { borderColor: "#c8eee3", backgroundColor: "#f1fcf8", color: "#137c67", duration: .6 }, "s3+=2.1")
     .to(statusIcon, { backgroundColor: "#13b894", duration: .6 }, "<")
     .addLabel("final")
     .to({}, { duration: 4.5 })
     .to(card, { autoAlpha: 0, y: -10, duration: .8, ease: "power1.inOut" });

    t.timeScale(SPEED);
    return t;
  }

  function sync() {
    if (!mq.matches) { if (tl) tl.pause(); return; }
    if (!tl) tl = build();
    if (reduced) { tl.seek("final").pause(); return; }
    (inView && !document.hidden) ? tl.play() : tl.pause();
  }

  (mq.addEventListener ? mq.addEventListener("change", sync) : mq.addListener(sync));
  document.addEventListener("visibilitychange", sync);
  if ("IntersectionObserver" in window) {
    new IntersectionObserver(e => { inView = e[0].isIntersecting; sync(); }, { threshold: .35 }).observe(root);
  } else { inView = true; }
  sync();
})();
