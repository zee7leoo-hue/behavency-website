// Desktop: "Запросить демо" opens a short pop-up form instead of scrolling to the dark contact block at the end.
// The dark block is replaced by a light closing line with one button. Remove this file and its <script> tag to go back.
(function () {
  const CSS = `
  .cm-ov { position: fixed; inset: 0; z-index: 100000; background: rgba(15,20,45,.48); backdrop-filter: blur(3px); display: grid; place-items: center; padding: 24px; opacity: 0; visibility: hidden; transition: opacity .25s, visibility 0s .25s; }
  .cm-ov.open { opacity: 1; visibility: visible; transition: opacity .25s; }
  html.cm-lock, html.cm-lock body { overflow: hidden !important; }
  .cm { position: relative; width: min(560px, 100%); max-height: calc(100vh - 48px); overflow-y: auto; background: #fff; border-radius: 22px; padding: 36px 36px 30px; box-shadow: 0 40px 90px -30px rgba(15,20,60,.5); font-family: Inter, Arial, sans-serif; color: #15171c; text-align: left; transform: translateY(12px); transition: transform .3s cubic-bezier(.22,1,.36,1); }
  .cm-ov.open .cm { transform: none; }
  .cm * { box-sizing: border-box; }
  .cm h2 { margin: 0 0 22px; padding-right: 44px; font: 400 32px/1.15 "Playfair Display", Georgia, serif; letter-spacing: -.01em; }
  .cm h2 em { font-style: italic; color: #1a8a7a; }
  .cm-lead { margin: 10px 0 22px; font: 400 15.5px/1.55 Inter, sans-serif; color: #4a5160; }
  .cm-x { position: absolute; top: 14px; right: 14px; width: 38px; height: 38px; border-radius: 50%; border: 0; background: #f3f2f8; color: #3a4364; cursor: pointer; display: grid; place-items: center; }
  .cm-x:hover { background: #e9e7f2; }
  .cm-x svg { width: 16px; height: 16px; fill: none; stroke: currentColor; stroke-width: 2.2; stroke-linecap: round; }
  .cm-row { display: grid; grid-template-columns: 1fr 1fr; gap: 14px; }
  .cm label { display: block; margin-bottom: 14px; font: 600 13px/1.3 Inter, sans-serif; color: #3a4364; }
  .cm input, .cm select, .cm textarea { display: block; width: 100%; margin-top: 6px; padding: 11px 13px; border: 1px solid #dcd9e6; border-radius: 10px; font: 400 15px/1.4 Inter, sans-serif; color: #15171c; background: #fff; }
  .cm textarea { resize: vertical; min-height: 92px; }
  .cm input:focus, .cm select:focus, .cm textarea:focus { outline: none; border-color: #2f6fdb; box-shadow: 0 0 0 3px rgba(47,111,219,.15); }
  .cm-opt { font-weight: 400; color: #7a8093; }
  .cm-int { margin: 0 0 14px; padding: 0; border: 0; min-width: 0; }
  .cm-int legend { padding: 0; margin: 0 0 8px; font: 600 13px/1.3 Inter, sans-serif; color: #3a4364; }
  .cm-chips { display: flex; flex-wrap: wrap; gap: 8px; }
  .cm .cm-chip { display: inline-flex; align-items: center; gap: 10px; margin: 0; padding: 9px 12px; border: 1px solid #dcd9e6; border-radius: 10px; font: 400 14.5px/1.3 Inter, sans-serif; color: #15171c; background: #fff; cursor: pointer; }
  .cm .cm-chip:hover { border-color: #c4c0d4; }
  .cm .cm-chip input { width: 16px; height: 16px; margin: 0; padding: 0; flex: none; accent-color: #1f2f5c; cursor: pointer; }
  .cm .cm-chip:has(input:checked) { border-color: #1f2f5c; background: #f3f5fb; }
  .cm .cm-chip:has(input:focus-visible) { border-color: #2f6fdb; box-shadow: 0 0 0 3px rgba(47,111,219,.15); }
  .cm-send { width: 100%; margin-top: 4px; padding: 14px; border: 0; border-radius: 12px; background: #1f2f5c; color: #fff; font: 600 15.5px/1 Inter, sans-serif; cursor: pointer; }
  .cm-send:hover { background: #18254b; }
  .cm-note { margin: 12px 0 0; font: 400 12.5px/1.5 Inter, sans-serif; color: #7a8093; text-align: center; }
  .cm-note a { color: inherit; text-decoration: underline; text-underline-offset: 2px; }
  .cm-done { text-align: center; padding: 30px 6px 10px; }
  .cm-done b { display: block; font: 400 28px/1.2 "Playfair Display", Georgia, serif; }
  .cm-done p { margin: 10px 0 0; font: 400 15.5px/1.55 Inter, sans-serif; color: #4a5160; }
  @media (max-width: 560px) { .cm { padding: 30px 20px 24px; } .cm-row { grid-template-columns: 1fr; gap: 0; } }

  /* computers: one even row of tap-to-select chips (no tick boxes); a tick shows when chosen */
  @media (min-width: 561px) { .cm { width: min(600px, 100%); } .cm-chips { flex-wrap: nowrap; gap: 6px; } .cm .cm-chip { position: relative; flex: 1 1 auto; justify-content: center; gap: 5px; padding: 10px 8px; font-size: 14px; white-space: nowrap; } .cm .cm-chip input { position: absolute; opacity: 0; width: 1px; height: 1px; pointer-events: none; } .cm .cm-chip:has(input:checked) { background: #1f2f5c; border-color: #1f2f5c; color: #fff; } .cm .cm-chip:has(input:checked)::before { content: "\\2713"; font-weight: 700; } }
  /* light closing line instead of the dark contact block */
  .cm-end { padding: 96px 24px 104px; text-align: center; font-family: Inter, Arial, sans-serif; }
  .cm-end .eb { display: inline-flex; align-items: center; gap: 12px; font: 600 13px/1 Inter, sans-serif; letter-spacing: .16em; text-transform: uppercase; color: #6b7280; }
  .cm-end .eb::before, .cm-end .eb::after { content: ""; width: 28px; height: 1.5px; background: currentColor; opacity: .6; }
  .cm-end h2 { margin: 18px 0 0; font: 400 clamp(34px, 4.2vw, 54px)/1.12 "Playfair Display", Georgia, serif; letter-spacing: -.01em; color: #15171c; }
  .cm-end h2 em { font-style: italic; color: #1a8a7a; }
  .cm-end p { margin: 16px auto 0; max-width: 560px; font: 400 18px/1.6 Inter, sans-serif; color: #4a5160; }
  .cm-end button { margin-top: 30px; padding: 16px 30px; border: 0; border-radius: 12px; background: #1f2f5c; color: #fff; font: 600 16px/1 Inter, sans-serif; cursor: pointer; box-shadow: 0 14px 30px -16px rgba(31,47,92,.6); }
  .cm-end button:hover { background: #18254b; }
  @media (prefers-reduced-motion: reduce) { .cm-ov, .cm { transition: none; } }
  `;
  const X = '<svg viewBox="0 0 24 24" aria-hidden="true"><path d="M6 6l12 12M18 6L6 18"/></svg>';
  const FORM = `<form class="cm-form">
      <h2 id="cm-title">Поговорим <em>о ваших людях.</em></h2>
            <div class="cm-row">
        <label for="cm-name">Имя<input id="cm-name" name="name" type="text" autocomplete="name" required></label>
        <label for="cm-email">Рабочая почта<input id="cm-email" name="email" type="email" autocomplete="email" placeholder="you@company.com" required></label>
      </div>
      <div class="cm-row">
        <label for="cm-org">Организация<input id="cm-org" name="org" type="text" autocomplete="organization" required></label>
        <label for="cm-role">Ваша должность<select id="cm-role" name="role" required>
          <option value="">Выберите…</option><option>HR-директор / CHRO</option><option>Специалист по L&amp;D / OD</option><option>Рекрутер / подбор персонала</option><option>Генеральный директор / руководство</option><option>Консультант / партнёр</option><option>Другое</option>
        </select></label>
      </div>
      <div class="cm-row">
        <label for="cm-phone">Телефон <span class="cm-opt">(необязательно)</span><input id="cm-phone" name="phone" type="tel" autocomplete="tel"></label>
        <label for="cm-size">Сколько у вас руководителей?<select id="cm-size" name="managers">
        <option value="">Выберите…</option><option>Менее 20</option><option>20–50</option><option>50–150</option><option>150+</option>
      </select></label>
      </div>
      <fieldset class="cm-int">
        <legend>Что вас интересует?</legend>
        <div class="cm-chips">
          <label class="cm-chip"><input type="checkbox" name="interest" value="Оценка">Оценка</label>
          <label class="cm-chip"><input type="checkbox" name="interest" value="Командная игра">Командная игра</label>
          <label class="cm-chip"><input type="checkbox" name="interest" value="Обучение">Обучение</label>
          <label class="cm-chip"><input type="checkbox" name="interest" value="Полный цикл">Полный цикл</label>
          <label class="cm-chip"><input type="checkbox" name="interest" value="Подбор">Подбор</label>
        </div>
      </fieldset>
      <label for="cm-msg">Какую задачу вы решаете? <span class="cm-opt">(необязательно)</span><textarea id="cm-msg" name="message" rows="4"></textarea></label>
      <button type="submit" class="cm-send">Отправить</button>
      <p class="cm-note">Ваши данные нужны нам только для ответа (<a href="#privacy" class="cm-priv">Политика конфиденциальности</a>). Или напишите нам на <a href="mailto:info@behavency.com">info@behavency.com</a></p>
    </form>`;
  const HTML = `<div class="cm-ov" role="dialog" aria-modal="true" aria-labelledby="cm-title"><div class="cm"><button type="button" class="cm-x" aria-label="Закрыть">${X}</button><div class="cm-body">${FORM}</div></div></div>`;
  const END = `<section class="cm-end" id="contact" data-cm="1">
    <div class="eb">Готовы начать?</div>
    <h2>Поговорим <em>о ваших людях.</em></h2>
    <p>Расскажите о своей компании и о том, с чего хотите начать, — а мы покажем, как Behavency может работать именно у вас.</p>
    <button type="button" data-cm-open>Запросить демо</button>
  </section>`;
  let ov = null, last = null;
  const open = () => {
    last = document.activeElement;
    const body = ov.querySelector('.cm-body'); if (!body.querySelector('form')) body.innerHTML = FORM;
    ov.classList.add('open'); document.documentElement.classList.add('cm-lock');
    if (!cmStep) { history.pushState({ cmOpen: 1 }, ''); cmStep = true; }
    setTimeout(() => { const f = ov.querySelector('#cm-name'); if (f) f.focus(); }, 60);
  };
  const close = (fromBack) => {
    ov.classList.remove('open'); document.documentElement.classList.remove('cm-lock'); if (last && last.focus) last.focus();
    if (cmStep) { cmStep = false; if (!fromBack && history.state && history.state.cmOpen) history.back(); }
  };
  let cmStep = false;
  addEventListener('popstate', () => { if (cmStep && ov && ov.classList.contains('open')) close(true); });
  window.bhvOpenContact = () => { if (ov) open(); };
  function mount() {
    if (!document.body) return;
    if (!ov) {
      const st = document.createElement('style'); st.id = 'contact-modal'; st.textContent = CSS; document.head.appendChild(st);
      const t = document.createElement('div'); t.innerHTML = HTML; ov = t.firstElementChild; document.body.appendChild(ov);
      ov.addEventListener('click', (e) => {
        if (e.target === ov || e.target.closest('.cm-x')) close();
        if (e.target.closest('.cm-priv')) { e.preventDefault(); close(); setTimeout(() => { if (window.bhvOpenPrivacy) window.bhvOpenPrivacy(); }, 350); }
      });
      ov.addEventListener('submit', (e) => {
        e.preventDefault();
        ov.querySelector('.cm-body').innerHTML = '<div class="cm-done"><b>Спасибо.</b><p>Мы скоро с вами свяжемся.</p></div>';
      });
      document.addEventListener('keydown', (e) => { if (e.key === 'Escape' && ov.classList.contains('open')) close(); });
      // every "Запросить демо" button and every link to #contact opens the pop-up
      document.addEventListener('click', (e) => {
        const el = e.target.closest('a, button'); if (!el || ov.contains(el)) return;
        const isDemo = el.hasAttribute('data-cm-open') || el.getAttribute('href') === '#contact' || /^(request a demo|запросить демо)$/i.test(el.textContent.trim());
        if (!isDemo) return;
        e.preventDefault(); e.stopPropagation();
        const bg = document.querySelector('.nav-burger[aria-expanded="true"]'); if (bg) bg.click(); // phone: close the menu first
        open();
      }, true);
    }
    // swap the dark contact block for the light closing line
    // (the old dark block is no longer in the page, 23 Nov: the closing line goes right after the packages)
    const old = document.querySelector('section#contact:not([data-cm])');
    if (old) { old.id = 'contact-old'; old.style.setProperty('display', 'none', 'important'); }
    const after = document.querySelector('#root section#packages');
    if (after) {
      const ours = document.querySelector('section[data-cm]');
      if (!ours || ours.previousElementSibling !== after) { if (ours) ours.remove(); const t = document.createElement('div'); t.innerHTML = END; after.after(t.firstElementChild); }
    }
  }
  let n = 0; const w = setInterval(() => { mount(); if (++n > 80) clearInterval(w); }, 250);
})();
