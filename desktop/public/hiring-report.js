// Hiring section: the sample candidate report, built from page elements so it stays sharp at any size (23 Nov).
// It replaces the blurry picture on both the desktop and the phone site. Remove this file and its <script> tag to bring the picture back.
(function () {
  const U = (n) => `calc(${n} * 100cqw / 520)`;
  const CSS = `
  .hrx { container-type: inline-size; width: 100%; position: relative; }
  .hr-labelled .hrx { width: 84%; margin-left: auto; }
  .hr-labelled .hr-pin, .hi-labelled .hi-pin { left: auto !important; transition: top .2s; }
  .hrx-page { transform: rotate(2.2deg); transform-origin: 50% 40%; background: #fff; border-radius: ${U(18)}; overflow: hidden; font-family: Inter, Arial, sans-serif; color: #15173d; text-align: left;
    box-shadow: 0 ${U(30)} ${U(60)} ${U(-24)} rgba(30,25,80,.35), 0 0 0 1px rgba(20,35,75,.06); }
  .hrx-top { display: flex; align-items: center; justify-content: space-between; padding: ${U(20)} ${U(26)}; background: linear-gradient(100deg, #1b2556 0%, #2a2f74 70%, #3a3a96 100%); color: #fff; }
  .hrx-logo { display: flex; align-items: center; gap: ${U(9)}; font: 600 ${U(12)}/1 Inter, sans-serif; letter-spacing: .3em; }
  .hrx-logo i { width: ${U(12)}; height: ${U(14)}; border-radius: ${U(3)}; background: #fff; }
  .hrx-conf { display: flex; align-items: center; gap: ${U(6)}; border: 1px solid rgba(255,255,255,.55); border-radius: 999px; padding: ${U(6)} ${U(12)}; font: 700 ${U(9)}/1 Inter, sans-serif; letter-spacing: .06em; }
  .hrx-body { padding: ${U(18)} ${U(26)} ${U(16)}; }
  .hrx-eye { font: 700 ${U(9)}/1 Inter, sans-serif; letter-spacing: .16em; text-transform: uppercase; color: #5a50c8; }
  .hrx-head { display: flex; justify-content: space-between; align-items: flex-end; gap: ${U(12)}; margin-top: ${U(8)}; }
  .hrx-name { font: 800 ${U(30)}/1.05 Inter, sans-serif; letter-spacing: -.03em; color: #10132e; }
  .hrx-for { margin-top: ${U(8)}; font: 400 ${U(11.5)}/1.3 Inter, sans-serif; color: #6f7384; }
  .hrx-for b, .hrx-prep b { color: #1d2033; font-weight: 700; }
  .hrx-prep { text-align: right; font: 400 ${U(10.5)}/1.6 Inter, sans-serif; color: #6f7384; }
  .hrx-box { display: flex; gap: ${U(12)}; align-items: flex-start; margin-top: ${U(14)}; padding: ${U(12)} ${U(14)}; border-radius: ${U(12)}; background: #f2f0fc; }
  .hrx-box i { flex: none; width: ${U(24)}; height: ${U(24)}; border-radius: 50%; background: #e2ddfa; box-shadow: inset 0 0 0 ${U(5)} #e2ddfa, inset 0 0 0 ${U(7)} #7a6ae0; }
  .hrx-box b { display: block; font: 700 ${U(11.5)}/1.3 Inter, sans-serif; color: #15173d; }
  .hrx-box span { display: block; margin-top: ${U(3)}; font: 400 ${U(9.5)}/1.45 Inter, sans-serif; color: #5b6070; }
  .hrx-rows { margin-top: ${U(14)}; display: grid; gap: ${U(11)}; }
  .hrx-row { display: grid; grid-template-columns: ${U(26)} minmax(0, 1fr) ${U(50)}; gap: ${U(10)}; align-items: center; }
  .hrx-ico { width: ${U(26)}; height: ${U(26)}; border-radius: ${U(8)}; display: grid; place-items: center; background: var(--t); }
  .hrx-ico::before { content: ""; width: ${U(9)}; height: ${U(9)}; border-radius: 50%; border: ${U(2)} solid var(--c); }
  .hrx-nm { font: 600 ${U(11)}/1.2 Inter, sans-serif; color: #1d2033; }
  .hrx-bar { margin-top: ${U(5)}; height: ${U(5)}; border-radius: 99px; background: #eceef4; position: relative; overflow: hidden; }
  .hrx-bar span { position: absolute; left: 0; top: 0; bottom: 0; border-radius: 99px; background: var(--z); }
  .hrx-pc { font: 800 ${U(15)}/1 Inter, sans-serif; color: #10132e; text-align: right; font-variant-numeric: tabular-nums; }
  .hrx-zone { display: none !important; justify-self: start; display: inline-flex; align-items: center; gap: ${U(5)}; padding: ${U(4)} ${U(9)}; border-radius: 999px; font: 600 ${U(9)}/1 Inter, sans-serif; color: var(--zc); background: var(--zb); }
  .hrx-zone::before { content: ""; width: ${U(5)}; height: ${U(5)}; border-radius: 50%; background: currentColor; }
  .hrx-legend { display: flex; flex-wrap: wrap; gap: ${U(14)}; margin-top: ${U(14)}; padding: ${U(9)} ${U(12)}; border-radius: ${U(10)}; background: #f5f6fa; font: 500 ${U(8.5)}/1 Inter, sans-serif; color: #6f7384; }
  .hrx-legend b { font-weight: 600; } .hrx-legend b::before { content: "● "; }
  .hrx-foot { display: flex; justify-content: space-between; margin-top: ${U(12)}; font: 400 ${U(8)}/1 Inter, sans-serif; color: #8a8d99; }
  `;
  const ZONE = { s: ['Strong', '#14a07c', '#1a7f5c', '#e3f6ee'], m: ['Medium', '#f0a020', '#9a5b0b', '#fdf1dc'], d: ['Development', '#e5484d', '#b4232a', '#fde7e8'] };
  const ROWS = [
    ['Clarity & Alignment', 64, 'm', '#e3f6ee', '#14a07c'], ['Trust & Inclusion', 63, 'm', '#fdf1dc', '#e0761c'], ['Focus & Prioritization', 25, 'd', '#efe9fc', '#7a4bd6'],
    ['Execution & Accountability', 57, 'm', '#e8f0fd', '#2f6fdb'], ['Collaboration & Influence', 86, 's', '#fde7ef', '#d6336c'], ['Learning & Adaptability', 80, 's', '#efe9fc', '#6a5ae0'],
  ];
  const HTML = `<div class="hrx" data-hrx="1" role="img" aria-label="Example candidate report: Elias T., Managerial Profile results for six areas"><div class="hrx-page">
    <div class="hrx-top"><span class="hrx-logo"><img src="logo-behavency.png" alt="" style="height:${U(18)};width:auto;display:block;filter:invert(1)">BEHAVENCY</span><span class="hrx-conf">CONFIDENTIAL · FOR HR</span></div>
    <div class="hrx-body">
      <div class="hrx-eye">Candidate profile · example</div>
      <div class="hrx-head"><div><div class="hrx-name">Elias T.</div><div class="hrx-for">Candidate for Team Lead · <b>Example Ltd</b></div></div><div class="hrx-prep">Prepared by <b>HR</b><br>10 Nov 2026</div></div>
      <div class="hrx-box"><i></i><div><b>Assessed against: line manager practices</b><span>Based on the candidate’s self-assessment. It adds to the recruiter’s view and is not a hiring criterion on its own.</span></div></div>
      <div class="hrx-rows">${ROWS.map(([n, p, z, t, c]) => { const [zl, zcol, zc, zb] = ZONE[z]; return `<div class="hrx-row" style="--t:${t};--c:${c};--z:${zcol};--zc:${zc};--zb:${zb}"><span class="hrx-ico"></span><div><div class="hrx-nm">${n}</div><div class="hrx-bar"><span style="width:${p}%"></span></div></div><span class="hrx-pc">${p}%</span><span class="hrx-zone">${zl}</span></div>`; }).join('')}</div>
      <div class="hrx-legend"><span><b style="color:#14a07c">Strong</b> 67–100%</span><span><b style="color:#d58a12">Medium</b> 34–66%</span><span><b style="color:#d6333a">Development</b> 0–33%</span></div>
      <div class="hrx-foot"><span>Managerial Profile · confidential · example report</span><span>1 / 4</span></div>
    </div>
  </div></div>`;
  function mount() {
    const img = document.querySelector('img.hr-doc, img.hi-doc'); if (!img) return;
    if (img.style.display !== 'none') img.style.setProperty('display', 'none', 'important');
    const next = img.nextElementSibling;
    if (!next || !next.matches('[data-hrx]')) { const t = document.createElement('div'); t.innerHTML = HTML; img.after(t.firstElementChild); }
    // the three pills sit on the right edge, level with the rows they point to: all six areas, the area to probe, the strong areas
    const rep = img.nextElementSibling, wrap = img.parentElement; if (!rep || !wrap) return;
    const rows = rep.querySelectorAll('.hrx-row'), pins = wrap.querySelectorAll('.hr-pin, .hi-pin'); if (rows.length < 6 || pins.length < 3) return;
    const wr = wrap.getBoundingClientRect(), cr = rep.getBoundingClientRect();
    [rows[0], rows[2], rows[5]].forEach((row, i) => { const p = pins[i]; const rr = row.getBoundingClientRect();
      p.style.setProperty('top', Math.round(rr.top + rr.height / 2 - wr.top - p.offsetHeight / 2) + 'px', 'important');
      p.style.setProperty('right', 'auto', 'important');
      const desk = wrap.classList.contains('hr-labelled');
      if (desk) { p.style.setProperty('left', Math.round(cr.left - wr.left - p.offsetWidth + 16) + 'px', 'important'); return; }
      // phone: on the report itself, on alternating sides (left, right, left)
      const top = i === 2 ? (rows[4].getBoundingClientRect().bottom + rr.top) / 2 : rr.top + rr.height / 2;
      p.style.setProperty('top', Math.round(top - wr.top - p.offsetHeight / 2) + 'px', 'important');
      const x = i === 1 ? cr.right - wr.left - p.offsetWidth - cr.width * 0.17 : cr.left - wr.left + (i === 0 ? -10 : cr.width * 0.12);
      p.style.setProperty('left', Math.round(x) + 'px', 'important'); });
  }
  const st = document.createElement('style'); st.id = 'hiring-report'; st.textContent = CSS; document.head.appendChild(st);
  let n = 0; const w = setInterval(() => { mount(); if (++n > 80) clearInterval(w); }, 250);
  addEventListener('resize', mount);
})();
