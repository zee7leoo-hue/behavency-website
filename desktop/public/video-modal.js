// Behavency video (25 Nov, not the final cut): a simple player that opens over the page.
// Desktop: the existing "See video" button in Engage. Phone: an outlined "Смотреть видео" button under
// "Опыт остаётся." (option 2 chosen 24 Nov). Esc, the close button, a click outside or the phone's Back close it.
// To swap the video later: replace behavency-video.mp4 (and poster) with the final files, same names.
(function () {
  const SRC = 'behavency-video.mp4', POSTER = 'behavency-video-poster.jpg';
  const CSS = `
  .vm-ov { position: fixed; inset: 0; z-index: 2147483000; display: grid; place-items: center; padding: 24px; background: rgba(8,12,32,.82); opacity: 0; pointer-events: none; transition: opacity .25s; }
  .vm-ov.open { opacity: 1; pointer-events: auto; }
  .vm-box { position: relative; width: min(1100px, 100%); aspect-ratio: 16 / 9; background: #000; border-radius: 16px; overflow: hidden; box-shadow: 0 40px 90px -30px rgba(0,0,0,.7); }
  .vm-box video { display: block; width: 100%; height: 100%; background: #000; }
  .vm-x { position: absolute; top: -48px; right: 0; width: 38px; height: 38px; border-radius: 50%; border: 0; background: rgba(255,255,255,.14); color: #fff; cursor: pointer; display: grid; place-items: center; }
  .vm-x:hover { background: rgba(255,255,255,.26); }
  .vm-x svg { width: 16px; height: 16px; fill: none; stroke: currentColor; stroke-width: 2.2; stroke-linecap: round; }
  .vm-wrap { position: relative; width: min(1100px, 100%); }
  @media (max-width: 760px) { .vm-ov { padding: 16px; } .vm-box { border-radius: 12px; } }
  /* phone: outlined button under "Опыт остаётся." */
  .vm-btn { display: inline-flex; align-items: center; gap: 10px; margin: 18px 0 4px; padding: 12px 18px; border: 1.5px solid #1f2f5c; border-radius: 12px; background: #fff; color: #1f2f5c; font: 600 15px/1 Inter, Arial, sans-serif; cursor: pointer; }
  .vm-btn i { display: grid; place-items: center; width: 22px; height: 22px; border-radius: 50%; background: #1f2f5c; color: #fff; font-style: normal; font-size: 10px; padding-left: 2px; box-sizing: border-box; }`;
  let ov = null, step = false;
  const build = () => {
    if (ov) return;
    const st = document.createElement('style'); st.id = 'video-modal'; st.textContent = CSS; document.head.appendChild(st);
    ov = document.createElement('div'); ov.className = 'vm-ov'; ov.setAttribute('role', 'dialog'); ov.setAttribute('aria-modal', 'true'); ov.setAttribute('aria-label', 'Behavency video');
    ov.innerHTML = '<div class="vm-wrap"><button type="button" class="vm-x" aria-label="Close video"><svg viewBox="0 0 24 24" aria-hidden="true"><path d="M6 6l12 12M18 6L6 18"/></svg></button><div class="vm-box"></div></div>';
    document.body.appendChild(ov);
    ov.addEventListener('click', (e) => { if (e.target === ov || e.target.closest('.vm-x')) close(); });
    document.addEventListener('keydown', (e) => { if (e.key === 'Escape' && ov.classList.contains('open')) close(); });
    addEventListener('popstate', () => { if (step && ov.classList.contains('open')) close(true); });
  };
  const open = () => {
    build();
    ov.querySelector('.vm-box').innerHTML = `<video controls autoplay playsinline preload="auto" poster="${POSTER}" src="${SRC}"></video>`;
    ov.classList.add('open'); document.documentElement.style.overflow = 'hidden';
    if (!step) { history.pushState({ vmOpen: 1 }, ''); step = true; }
    setTimeout(() => ov.querySelector('.vm-x').focus(), 50);
  };
  const close = (fromBack) => {
    ov.classList.remove('open'); document.documentElement.style.overflow = '';
    const v = ov.querySelector('video'); if (v) v.pause();
    setTimeout(() => { if (!ov.classList.contains('open')) ov.querySelector('.vm-box').innerHTML = ''; }, 300);
    if (step) { step = false; if (!fromBack && history.state && history.state.vmOpen) history.back(); }
  };
  window.bhvOpenVideo = open;

  // desktop "See video" (and anything marked data-video-open)
  document.addEventListener('click', (e) => {
    const b = e.target.closest('#be-watch-cta-2, [data-video-open]'); if (!b) return;
    e.preventDefault(); e.stopPropagation(); open();
  }, true);

  // phone: add the button under "Опыт остаётся."
  if (window.BHV_SITE === 'mob') {
    const add = () => {
      if (document.querySelector('.vm-btn')) return true;
      const p = [...document.querySelectorAll('#engage p, section p')].find((x) => /Опыт остаётся\./.test(x.textContent));
      if (!p) return false;
      const b = document.createElement('button'); b.type = 'button'; b.className = 'vm-btn'; b.setAttribute('data-video-open', '');
      b.innerHTML = '<i aria-hidden="true">&#9654;</i>Смотреть видео';
      if (!document.getElementById('video-modal')) build();
      p.after(b); return true;
    };
    const t = setInterval(() => { if (add()) clearInterval(t); }, 400);
    setTimeout(() => clearInterval(t), 30000);
  }
})();
