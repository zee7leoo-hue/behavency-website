// Phone site: "Как это проходит" and "Чем отличается Behavency" in the agreed phone design (22 Nov).
// The site's own two sections are hidden and these are placed where they were. Remove this file and its <script> tag to go back.
(function () {
  const CSS = `
  .pz { padding: 46px 22px 44px; font-family: Inter, Arial, sans-serif; color: #0f1b3d; text-align: left; }
  .pz * { box-sizing: border-box; }
  .pz h2, .pz h3, .pz p, .pz ol, .pz ul { margin: 0; padding: 0; }
  .pz ol, .pz ul { list-style: none; }
  .pz-eb { display: flex; align-items: center; gap: 12px; font: 600 11.6px/1.2 Inter, sans-serif; letter-spacing: .16em; text-transform: uppercase; color: #3a4364; }
  .pz-eb::before { content: ""; width: 24px; height: 1.5px; background: currentColor; opacity: .5; }
  .pz-ttl { margin-top: 16px !important; font: 700 38px/40px "Source Serif 4", Georgia, serif; letter-spacing: -.03em; color: #0b1138; font-variation-settings: "opsz" 30; text-wrap: balance; }
  .pz-ttl em { font-style: italic; font-weight: 500; letter-spacing: -.02em; }
  .pz-lead { margin-top: 16px !important; font: 400 15.6px/22.6px Inter, sans-serif; color: #1c2540; }

  /* Как это проходит */
  #how-it-runs.pz { padding-top: 30px; }
  #how-it-runs .pz-ttl em { color: #c2650f; }
  .pz-htl { position: relative; margin-top: 30px !important; }
  .pz-htl::before { content: ""; position: absolute; left: 17px; top: 18px; bottom: 30px; width: 2px; border-radius: 2px; background: #e6e1f0; }
  .pz-hs { position: relative; display: grid; grid-template-columns: 36px 1fr; column-gap: 14px; padding-bottom: 14px; }
  .pz-hs:last-child { padding-bottom: 0; }
  .pz-hn { position: relative; z-index: 1; width: 36px; height: 36px; border-radius: 50%; display: grid; place-items: center; background: #fff; box-shadow: 0 0 0 2px var(--c); font: 700 14px/1 Inter, sans-serif; color: var(--c); }
  .pz-hb { background: #fff; border-radius: 18px; padding: 14px 16px 15px; box-shadow: 0 0 0 1px rgba(20,35,75,.06), 0 14px 30px -24px rgba(30,25,80,.3); min-width: 0; }
  .pz-hwhen { display: inline-block; font: 700 12.6px/1 Inter, sans-serif; letter-spacing: .01em; color: var(--c); background: color-mix(in srgb, var(--c) 11%, #fff); border-radius: 999px; padding: 6px 10px; }
  .pz-hb h3 { margin-top: 10px !important; font: 600 16.4px/1.25 Inter, sans-serif; letter-spacing: -.012em; color: #0f1b3d; }
  .pz-hb p { margin-top: 5px !important; font: 400 14.4px/20.5px Inter, sans-serif; color: #4a5170; }
  .pz-who { display: flex; align-items: center; gap: 6px; margin-top: 9px; font: 500 12.6px/1.2 Inter, sans-serif; color: #8a8fa8; }
  .pz-who::before { content: ""; width: 14px; height: 14px; flex: none; background: currentColor;
    -webkit-mask: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 24 24' fill='none' stroke='black' stroke-width='2' stroke-linecap='round'%3E%3Ccircle cx='9' cy='8' r='3.4'/%3E%3Cpath d='M2.6 20v-.8a5.6 5.6 0 0 1 5.6-5.6h1.6a5.6 5.6 0 0 1 5.6 5.6v.8M16 4.8a3.4 3.4 0 0 1 0 6.4M18.4 14.2a5.6 5.6 0 0 1 3 5v.8'/%3E%3C/svg%3E") center/contain no-repeat;
    mask: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 24 24' fill='none' stroke='black' stroke-width='2' stroke-linecap='round'%3E%3Ccircle cx='9' cy='8' r='3.4'/%3E%3Cpath d='M2.6 20v-.8a5.6 5.6 0 0 1 5.6-5.6h1.6a5.6 5.6 0 0 1 5.6 5.6v.8M16 4.8a3.4 3.4 0 0 1 0 6.4M18.4 14.2a5.6 5.6 0 0 1 3 5v.8'/%3E%3C/svg%3E") center/contain no-repeat; }

  /* Чем отличается Behavency */
  #different.pz { padding-top: 48px; }
  #different .pz-ttl em { color: #1a8a7a; }
  .pz-dl { margin-top: 28px !important; border-top: 1px solid #e3e0ea; }
  .pz-di { border-bottom: 1px solid #e3e0ea; }
  .pz-dh { width: 100%; display: grid; grid-template-columns: 32px 1fr 34px; column-gap: 10px; align-items: start; padding: 16px 0; border: 0; background: none; text-align: left; cursor: pointer; font: inherit; color: inherit; }
  .pz-dn { font: 700 12.5px/22px Inter, sans-serif; letter-spacing: .06em; color: #1a8a7a; }
  .pz-dt { display: block; font: 600 16px/22px Inter, sans-serif; letter-spacing: -.012em; color: #15171c; }
  .pz-dline { display: block; margin-top: 5px; font: 400 14.4px/21px Inter, sans-serif; color: #4a5160; }
  .pz-dp { width: 34px; height: 34px; border-radius: 50%; border: 1px solid #d8d3c7; display: grid; place-items: center; background: #fff; color: #1e3a5f; transition: transform .3s; }
  .pz-dp svg { width: 14px; height: 14px; fill: none; stroke: currentColor; stroke-width: 2.2; stroke-linecap: round; }
  .pz-di.open .pz-dp { transform: rotate(45deg); }
  .pz-dm { display: grid; grid-template-rows: 0fr; transition: grid-template-rows .35s ease; }
  .pz-dm > div { overflow: hidden; }
  .pz-di.open .pz-dm { grid-template-rows: 1fr; }
  .pz-dm p { margin: 0 0 16px 42px !important; padding: 2px 0 2px 14px !important; border-left: 2px solid #cfe7e2; font: 400 14.2px/21px Inter, sans-serif; color: #4a5160; }
  .pz-close { display: flex; gap: 12px; margin-top: 26px !important; font: 500 15px/22px Inter, sans-serif; color: #1e3a5f; }
  .pz-close i { flex: none; width: 28px; height: 2px; margin-top: 11px; background: #1a8a7a; }
  @media (prefers-reduced-motion: reduce) { .pz-dm, .pz-dp { transition: none; } }
  /* Measure results card: six areas, thin bars, "42 → 74" on one line (like the desktop) */
  :root .ms-card li { grid-template-columns: 96px minmax(0, 1fr) 58px 36px !important; height: 44px !important; }
  :root .ms-bars .tr { height: 5px !important; }
  :root .ms-vals { display: block !important; white-space: nowrap; text-align: right; font-size: 12px !important; color: #dfe5f5; padding-right: 8px; margin-left: 0 !important; font-variant-numeric: tabular-nums; }
  /* Measure on the phone: the Measure green (purple belongs to Engage) */
  :root .ms-title span, :root .hm-title span, :root .hm-title em { color: #14a07c !important; }
  /* Why these areas matter: the Identify blue (purple belongs to Engage) */
  :root .rs-title em, :root .rs-area { color: #2f6fdb !important; }
  :root .rs-ai-k { color: #2468d8 !important; }
  :root .rs-ai-n { color: #1f56c9 !important; }
  :root .rs-ai { background: #eef4fe !important; border-color: #cddff9 !important; }
  :root .rs-ai-rule { background: #cddff9 !important; }
  /* "Для кого" removed (23 Nov) */
  #who-its-for { display: none !important; }
  /* Header always on top, solid (23 Nov evening, R2): the Build cards (.jn-card, z-index up to 100) are kept inside
     their own section layer so they can no longer slide over the header. Pop-ups and menus (z-index 90+) stay above it. */
  section.jn { isolation: isolate; }
  :root .nav-fixed { z-index: 79 !important; }
  :root .nav { background: #fbfaff !important; -webkit-backdrop-filter: none !important; backdrop-filter: none !important; box-shadow: inset 0 -1px 0 #e8e5f0; }
  `;
  const STEPS = [
    ['Неделя 1', 'Вы и Behavency', 'Старт', 'Согласовываем цели, состав группы и сроки. Участники получают приглашения.', '#6b7290'],
    ['Недели 2–4', 'Участники', 'Оценка', 'Около 1,5 часа на человека, в своём темпе.', '#2f6fdb'],
    ['Недели 4–6', 'Участники и фасилитатор', 'Командная игра и разбор', '15 минут вводной части, 45 минут игры и 90 минут разбора, затем — аналитический отчёт команды.', '#7a4bd6'],
    ['С 6-й недели', 'Участники', 'Обучение и мастер-планы', 'Программы под приоритеты каждого. Сроки зависят от выбранных программ.', '#e0761c'],
    ['Через 3 месяца после обучения', 'Участники', 'Повторная оценка', 'Те же опросники, те же люди — сравнение с исходной точкой.', '#14a07c'],
  ];
  const DF = [
    ['Весь путь — от старта до финиша.', 'Оценка, командная игра, обучение и повторная оценка — на одной модели, силами одной команды.', 'Обычно всё разбросано: опрос проводят своими силами, оценку делает один подрядчик, семинар — другой. Разные методики, разные отчёты — и никто не может сказать, что изменилось. У нас каждый шаг опирается на те же шесть областей: результаты сразу ведут к нужному развитию, а повторная оценка показывает разницу.'],
    ['Личные пробелы и организационные барьеры — отдельно.', 'Показываем, что нужно развивать людям, а что — исправить организации вокруг них.', 'Вместе с оценкой руководители заполняют опросник «Организационные барьеры»: около 40 типичных препятствий в девяти управленческих процессах. Каждый барьер связан с областями, которые он тормозит. Поэтому по низкому баллу видно, в чём дело: в навыке, который надо развивать, в условиях, которые надо менять, или и в том, и в другом.'],
    ['Руководители и команды — на одной модели.', 'Развивайте руководителей, команды или всех сразу. Если у команды и её руководителя низкие баллы по доверию, вы видите связь.', 'Команда и руководитель оцениваются по одним и тем же шести областям, поэтому результаты легко положить рядом: где мнения совпадают, а где команда видит то, чего не замечает руководитель.'],
    ['Люди не просто читают о пробелах — они их чувствуют.', 'Командная игра и разбор с фасилитатором превращают баллы в личный опыт — и в готовность взяться за дело.', 'За 2,5 часа команда видит, как то же поведение проявляется вживую, обсуждает, почему так, и получает аналитический отчёт с практическими советами.'],
    ['Своё обучение — точно по результатам.', 'Программы для линейных руководителей, руководителей руководителей и команд — каждая связана с шестью областями.', 'Каждый результат ведёт к конкретным программам — гадать, чему учить дальше, не придётся. Программы идут очно, онлайн или в формате e-learning, и к каждой есть мастер-план, чтобы отработать навык в работе.'],
    ['Интервьюеры тренируются заранее.', 'До настоящих интервью они тренируются в нашей Интервью-студии с четырьмя AI-персонажами.', 'Готовый гайд для каждого интервью, подсказки AI по ходу беседы — что спросить дальше, и резюме после неё. Проверяет его и принимает решение сам интервьюер.'],
    ['Не «курс пройден», а «изменения видны».', 'Результаты «до» и «после», которые можно показать руководству.', 'Результаты сравниваются с исходной точкой по каждой области: поведение по самооценке и 360°, а также ослабли ли барьеры.'],
  ];
  const plus = '<svg viewBox="0 0 24 24" aria-hidden="true"><path d="M12 5v14M5 12h14"/></svg>';
  const HOW = `<section class="pz" id="how-it-runs" data-pz="1">
    <div class="pz-eb">Как это проходит</div>
    <h2 class="pz-ttl">Сроки — <em>шаг за шагом.</em></h2>
    <p class="pz-lead">От старта до повторной оценки: что, когда и с чьим участием.</p>
    <ol class="pz-htl">${STEPS.map(([when, w, t, p, c], i) => `<li class="pz-hs" style="--c:${c}"><span class="pz-hn">${i + 1}</span><div class="pz-hb"><span class="pz-hwhen">${when}</span><h3>${t}</h3><p>${p}</p><span class="pz-who">${w}</span></div></li>`).join('')}</ol>
  </section>`;
  const DIF = `<section class="pz" id="different" data-pz="1">
    <div class="pz-eb">Чем отличается Behavency</div>
    <h2 class="pz-ttl">Каждый подрядчик делает свой кусок. <em>А что изменилось в целом — не знает никто.</em></h2>
    <ul class="pz-dl">${DF.map(([t, l, m], i) => `<li class="pz-di"><button type="button" class="pz-dh" aria-expanded="false"><span class="pz-dn">0${i + 1}</span><span><span class="pz-dt">${t}</span><span class="pz-dline">${l}</span></span><span class="pz-dp">${plus}</span></button><div class="pz-dm"><div><p>${m}</p></div></div></li>`).join('')}</ul>
  </section>`;
  // put our sections in place, in the same order as the desktop site (23 Nov): How we measure → Как это проходит → Different.
  // (The site's own old versions are no longer in the page; if one is still there it is hidden.)
  const place = (id, html, after) => {
    const old = document.querySelector('section#' + id + ':not([data-pz])');
    if (old) { old.id = id + '-old'; old.style.setProperty('display', 'none', 'important'); }
    if (!after) return null;
    let ours = document.querySelector('section#' + id + '[data-pz]');
    if (!ours || ours.previousElementSibling !== after) {
      if (ours) ours.remove();
      const t = document.createElement('div'); t.innerHTML = html; ours = t.firstElementChild; after.after(ours);
      if (id === 'different') ours.querySelector('.pz-dl').addEventListener('click', (e) => {
        const b = e.target.closest('.pz-dh'); if (!b) return; const li = b.parentElement, o = !li.classList.contains('open');
        li.parentElement.querySelectorAll('.pz-di').forEach((x) => { x.classList.remove('open'); x.querySelector('.pz-dh').setAttribute('aria-expanded', 'false'); });
        if (o) { li.classList.add('open'); b.setAttribute('aria-expanded', 'true'); }
      });
    }
    return ours;
  };
  const st = document.createElement('style'); st.id = 'sections-mobile'; st.textContent = CSS; document.head.appendChild(st);
  // keep checking for a while: React may redraw the page after it loads
  let n = 0; const w = setInterval(() => { const how = place('how-it-runs', HOW, document.querySelector('#root section#how-we-measure')); if (how) place('different', DIF, how); if (++n > 60) clearInterval(w); }, 250);
})();
