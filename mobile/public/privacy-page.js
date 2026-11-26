// Privacy Policy page for both sites (23 Nov). Opens over the site from "Политика конфиденциальности" in the footer and in the cookie banner.
// Text = the Claude Docs draft (https://claude.ai/artifact/JFYcw28zwutwKHZGD3fzdS) without the draft note. Still to be checked by a lawyer.
(function () {
  const CSS = `
  .pvp { position: fixed; inset: 0; z-index: 9990; overflow-y: auto; -webkit-overflow-scrolling: touch; background: #fbfaff; color: #15173d; font-family: Inter, Arial, sans-serif;
    opacity: 0; visibility: hidden; transform: translateY(14px); transition: opacity .3s, transform .35s cubic-bezier(.22,1,.36,1), visibility 0s .35s; }
  .pvp.open { opacity: 1; visibility: visible; transform: none; transition: opacity .3s, transform .35s cubic-bezier(.22,1,.36,1); }
  html.pvp-lock, html.pvp-lock body { overflow: hidden !important; }
  .pvp * { box-sizing: border-box; }
  .pvp-bar { position: sticky; top: 0; z-index: 2; display: flex; align-items: center; height: 58px; padding: 0 max(14px, env(safe-area-inset-left, 0px)); background: rgba(251,250,255,.94); backdrop-filter: blur(8px); border-bottom: 1px solid #ebe8f3; }
  .pvp-back { display: inline-flex; align-items: center; gap: 8px; border: 0; background: none; padding: 8px; font: 600 14px/1 Inter, Arial, sans-serif; color: #3a4364; cursor: pointer; }
  .pvp-back svg { width: 18px; height: 18px; fill: none; stroke: currentColor; stroke-width: 2.2; stroke-linecap: round; stroke-linejoin: round; }
  .pvp-in { max-width: 760px; margin: 0 auto; padding: 56px max(22px, env(safe-area-inset-right, 0px)) 96px max(22px, env(safe-area-inset-left, 0px)); }
  .pvp-eb { display: flex; align-items: center; gap: 12px; font: 600 12.5px/1 Inter, sans-serif; letter-spacing: .16em; text-transform: uppercase; color: #6b7088; }
  .pvp-eb::before { content: ""; width: 26px; height: 1.5px; background: currentColor; opacity: .6; }
  .pvp h1 { margin: 16px 0 0; font: 400 clamp(32px, 5vw, 46px)/1.1 "Playfair Display", "Source Serif 4", Georgia, serif; letter-spacing: -.01em; }
  .pvp-date { margin: 12px 0 0; font: 400 14px/1.5 Inter, sans-serif; color: #6b7088; }
  .pvp h2 { margin: 44px 0 0; font: 600 22px/1.25 "Source Serif 4", Georgia, serif; letter-spacing: -.01em; }
  .pvp p, .pvp li { font: 400 15.5px/1.65 Inter, sans-serif; color: #3f4560; }
  .pvp p { margin: 12px 0 0; }
  .pvp ul { margin: 12px 0 0; padding-left: 20px; display: grid; gap: 6px; }
  .pvp b { color: #15173d; font-weight: 600; }
  .pvp-tw { margin-top: 16px; overflow-x: auto; border: 1px solid #e8e5f0; border-radius: 14px; background: #fff; }
  .pvp table { width: 100%; border-collapse: collapse; min-width: 520px; }
  .pvp th, .pvp td { text-align: left; vertical-align: top; padding: 12px 14px; font: 400 14.5px/1.5 Inter, sans-serif; color: #3f4560; border-top: 1px solid #efedf5; }
  .pvp th { font-weight: 600; color: #15173d; background: #f6f5fb; border-top: 0; font-size: 13.5px; }
  /* phones (25 Nov): each table row becomes a small card, each cell with its column name above it, so nothing is cut off */
  @media (max-width: 600px) {
    .pvp-tw { overflow: visible; border: 0; background: none; border-radius: 0; }
    .pvp table, .pvp tbody, .pvp tr, .pvp td { display: block; width: 100%; min-width: 0; }
    .pvp tr:first-child { display: none; }
    .pvp tr { background: #fff; border: 1px solid #e8e5f0; border-radius: 14px; padding: 6px 14px; margin-top: 10px; }
    .pvp td { border-top: 1px solid #f1eff6; padding: 9px 0; font-size: 14px; }
    .pvp td:first-child { border-top: 0; font-weight: 600; color: #15173d; }
    .pvp td[data-label]::before { content: attr(data-label); display: block; margin-bottom: 2px; font: 600 11.5px/1.3 Inter, sans-serif; letter-spacing: .04em; text-transform: uppercase; color: #8a8fa3; }
    .pvp td:first-child::before { display: none; }
  }
  .pvp-x { margin-top: 48px; padding-top: 18px; border-top: 1px solid #e8e5f0; font-size: 14px !important; color: #6b7088 !important; }
  `;
  const back = '<button type="button" class="pvp-back" data-close><svg viewBox="0 0 24 24" aria-hidden="true"><path d="M15 6l-6 6 6 6"/></svg>Назад</button>';
  const HTML = `<div class="pvp" role="dialog" aria-label="Политика конфиденциальности"><div class="pvp-bar">${back}</div><div class="pvp-in">
    <div class="pvp-eb">Правовая информация</div>
    <h1>Политика конфиденциальности</h1>
    <p class="pvp-date">Последнее обновление: 23 ноября 2026 г.</p>

    <h2>Кто мы</h2>
    <p>Behavency создана компанией компании OGI Europe Kft. OGI Europe Kft. определяет, как и зачем используются ваши персональные данные на этом сайте, и поэтому является <b>контролёром данных</b> в соответствии с Общим регламентом ЕС по защите данных (GDPR).</p>
    <ul><li><b>Компания:</b> OGI Europe Kft.</li><li><b>Адрес:</b> Üllői út 101/4, 1091 Budapest, Hungary</li><li><b>Эл. почта по вопросам конфиденциальности:</b> <a href="mailto:info@behavency.com">info@behavency.com</a></li></ul>
    <p>В этой политике объясняется, какие данные мы собираем, когда вы посещаете behavency.com или связываетесь с нами, зачем мы это делаем и какие у вас есть права.</p>

    <h2>Какие данные мы собираем</h2>
    <div class="pvp-tw"><table>
      <tr><th>Где</th><th>Что</th><th>Обязательно?</th></tr>
      <tr><td>Запрос демо / контактная форма</td><td>Имя, рабочая почта, организация, ваша должность, номер телефона, количество руководителей, что вас интересует, ваше сообщение</td><td>Имя, почта, организация и должность — да. Телефон, количество руководителей, интересы и сообщение — нет</td></tr>
      <tr><td>Письмо на <a href="mailto:info@behavency.com">info@behavency.com</a></td><td>Всё, что вы нам пишете, и ваш адрес эл. почты</td><td>–</td></tr>
      <tr><td>Войти</td><td>Ссылка ведёт на нашу платформу app.behavency.com; сам сайт при переходе по ней ничего не собирает</td><td>–</td></tr>
      <tr><td>При каждом посещении</td><td>Технические данные, которые передаёт ваш браузер: IP-адрес, тип браузера и устройства, посещённые страницы, время посещения</td><td>Собираются автоматически нашим хостинг-провайдером</td></tr>
    </table></div>
    <p>Мы не запрашиваем на сайте чувствительные данные (например, о здоровье или политических взглядах). Пожалуйста, не указывайте их в сообщении.</p>

    <h2>Зачем мы используем данные и на каком правовом основании</h2>
    <div class="pvp-tw"><table>
      <tr><th>Цель</th><th>Данные</th><th>Правовое основание (ст. 6 GDPR)</th></tr>
      <tr><td>Ответить на ваш запрос, организовать демо, подготовить предложение</td><td>Данные контактной формы, письма</td><td>Действия по вашему запросу до возможного заключения договора (ст. 6(1)(b)) и наш законный интерес в ответах на деловые запросы (ст. 6(1)(f))</td></tr>
      <tr><td>Обеспечивать работу и безопасность сайта</td><td>Технические данные</td><td>Наш законный интерес в работающем и безопасном сайте (ст. 6(1)(f))</td></tr>
      <tr><td>Понимать, как используется сайт</td><td>Статистика использования из Google Analytics</td><td>Ваше согласие, данное в баннере cookie (ст. 6(1)(a))</td></tr>
    </table></div>
    <p>Мы не продаём ваши данные и не используем их для автоматизированного принятия решений в отношении вас.</p>

    <h2>Кому мы передаём данные</h2>
    <p>Мы передаём ваши данные только поставщикам услуг, которые помогают нам поддерживать сайт и отвечать вам, и только в том объёме, который им необходим. Они действуют по нашим указаниям на основании договора об обработке данных.</p>
    <ul>
      <li><b>Эл. почта:</b> сообщения из контактной формы и письма на <a href="mailto:info@behavency.com">info@behavency.com</a> поступают в почтовый ящик нашей компании, который предоставляет Google Workspace (Google).</li>
      <li><b>Хостинг сайта:</b> DigitalOcean.</li>
      <li><b>Аналитика:</b> Google Analytics (Google) — только после вашего согласия в баннере cookie.</li>
    </ul>
    <p>Мы также можем раскрыть данные, если этого требует закон, например суду или государственному органу.</p>

    <h2>Передача данных за пределы ЕС</h2>
    <p>Сайт размещён у DigitalOcean в дата-центре во Франкфурте, в Европейском союзе. Google и DigitalOcean — компании из США, поэтому часть данных (например, данные Google Analytics или доступ поставщика в рамках поддержки) может обрабатываться за пределами Европейской экономической зоны. Такая передача защищена Рамочной программой ЕС–США по защите данных (EU–US Data Privacy Framework), а там, где она не применяется, — стандартными договорными условиями Европейской комиссии.</p>

    <h2>Сколько мы храним данные</h2>
    <div class="pvp-tw"><table>
      <tr><th>Данные</th><th>Срок хранения</th></tr>
      <tr><td>Запросы (сообщения из контактной формы и письма), которые не привели к договору</td><td>12 месяцев после последнего контакта</td></tr>
      <tr><td>Запросы, которые привели к договору</td><td>Весь срок действия договора, а затем столько, сколько венгерское законодательство требует хранить деловую документацию</td></tr>
      <tr><td>Технические данные в журналах сервера</td><td>30 дней</td></tr>
    </table></div>
    <p>После этого мы удаляем данные или обезличиваем их.</p>

    <h2>Файлы cookie и аналитика</h2>
    <p>Мы используем два вида файлов cookie и похожих технологий хранения:</p>
    <ul>
      <li><b>Необходимые:</b> то, что нужно для работы сайта, например чтобы запомнить ваш выбор cookie. Для них ваше согласие не требуется.</li>
      <li><b>Аналитические (Google Analytics):</b> считают посещения и показывают, какие страницы читают, чтобы мы могли улучшать сайт. Мы устанавливаем их только после того, как вы нажмёте «Принять все» в баннере cookie. Если вы выберете «Только необходимые», они не используются. Изменить выбор можно в любое время по ссылке «Настройки cookie» внизу каждой страницы. Google Analytics хранит эти данные 14 месяцев.</li>
    </ul>

    <h2>Ваши права</h2>
    <p>Согласно GDPR вы можете попросить нас:</p>
    <ul>
      <li>показать данные, которые мы о вас храним, и предоставить их копию</li><li>исправить неверные данные</li><li>удалить ваши данные</li><li>ограничить их использование</li>
      <li>передать их вам или другой компании в удобном для использования формате</li><li>прекратить их использование, если оно основано на нашем законном интересе</li><li>в любое время отозвать данное вами согласие</li>
    </ul>
    <p>Напишите на <a href="mailto:info@behavency.com">info@behavency.com</a>. Мы ответим в течение месяца.</p>
    <p>Если вы считаете, что мы обрабатываем ваши данные неправомерно, вы можете подать жалобу в венгерский орган по защите данных — <b>Nemzeti Adatvédelmi és Információszabadság Hatóság (NAIH)</b> — или в надзорный орган страны ЕС, в которой вы проживаете.</p>

    <h2>Безопасность, дети и изменения</h2>
    <ul>
      <li><b>Безопасность:</b> мы защищаем ваши данные техническими и организационными мерами, например шифруем соединения и даём доступ только тем сотрудникам, которым он нужен.</li>
      <li><b>Дети:</b> сайт предназначен для компаний. Мы сознательно не собираем данные детей.</li>
      <li><b>Изменения:</b> мы можем обновлять эту политику. Дата вверху страницы указывает на последнюю версию.</li>
      <li><b>Вопросы:</b> <a href="mailto:info@behavency.com">info@behavency.com</a>, or OGI Europe Kft., Üllői út 101/4, 1091 Budapest, Hungary.</li>
    </ul>
    <p class="pvp-x">Эта политика относится к сайту Behavency. Обработка данных на платформе Behavency (app.behavency.com) описана в собственном уведомлении о конфиденциальности платформы.</p>
  </div></div>`;
  let el = null;
  const open = () => {
    if (!el) return;
    el.classList.add('open'); el.scrollTop = 0; document.documentElement.classList.add('pvp-lock');
    if (location.hash !== '#privacy') history.pushState({ pvp: 1 }, '', location.pathname + location.search + '#privacy');
  };
  const close = () => { if (!el) return; el.classList.remove('open'); document.documentElement.classList.remove('pvp-lock'); };
  window.bhvOpenPrivacy = open;
  addEventListener('popstate', () => { if (location.hash !== '#privacy') close(); else open(); });
  const mount = () => {
    if (!document.body) return setTimeout(mount, 100);
    const st = document.createElement('style'); st.id = 'privacy-page'; st.textContent = CSS; document.head.appendChild(st);
    const t = document.createElement('div'); t.innerHTML = HTML; el = t.firstElementChild; document.body.appendChild(el);
    // column names on each cell, used by the phone card layout
    el.querySelectorAll('table').forEach((tb) => { const heads = [...tb.querySelectorAll('tr:first-child th')].map((h) => h.textContent.trim()); tb.querySelectorAll('tr').forEach((tr) => [...tr.children].forEach((c, i) => { if (c.tagName === 'TD' && heads[i]) c.setAttribute('data-label', heads[i]); })); });
    el.addEventListener('click', (e) => { if (e.target.closest('[data-close]')) { if (location.hash === '#privacy') history.back(); else close(); } });
    if (location.hash === '#privacy') setTimeout(open, 600);
  };
  mount();
})();
