// Mock-up (23 Nov): on the phone, "Почему эти области важны" becomes one row of cards you swipe sideways, with the AI card last.
// Cuts several screens of scrolling; nothing is hidden. Dots under the row show where you are.
(function () {
  const CSS = `
  .rs .rs-list.rsw { flex-direction: row; gap: 12px; overflow-x: auto; scroll-snap-type: x mandatory; -webkit-overflow-scrolling: touch;
    margin: 22px calc(-1 * var(--rsw-pad, 24px)) 0; padding: 6px var(--rsw-pad, 24px) 14px; scroll-padding-left: var(--rsw-pad, 24px); scrollbar-width: none; }
  .rs { overflow-x: clip; }
  .rs .rs-list.rsw::-webkit-scrollbar { display: none; }
  .rs .rs-list.rsw > .rs-item, .rs .rs-list.rsw > .rs-ai { flex: 0 0 80%; scroll-snap-align: start; margin: 0 !important; border: 1px solid #e7e4ee; border-radius: 18px; background: #fff;
    padding: 20px 20px 18px; box-shadow: 0 16px 30px -26px rgba(30,25,80,.35); display: flex; flex-direction: column; gap: 8px; }
  .rs .rs-list.rsw > .rs-ai { background: #eef4fe; border-color: #cddff9; }
  .rs .rs-list.rsw .rs-src, .rs .rs-list.rsw .rs-ai-src { margin-top: auto; padding-top: 6px; }
  .rsw-foot { display: flex; align-items: center; justify-content: space-between; margin-top: 0; }
  .rsw-dots { display: flex; gap: 6px; }
  .rsw-dots i { width: 6px; height: 6px; border-radius: 3px; background: #d6d2e6; transition: width .25s, background .25s; }
  .rsw-dots i.on { width: 18px; background: #2f6fdb; }
  .rsw-hint { font: 500 12.5px/1 Inter, sans-serif; color: #6b7088; }
  `;
  const run = () => {
    const list = document.querySelector('.rs .rs-list'); const ai = document.querySelector('.rs .rs-ai');
    if (!list || !ai) return false;
    if (list.classList.contains('rsw')) return true;
    const st = document.createElement('style'); st.textContent = CSS; document.head.appendChild(st);
    const pad = Math.round(list.getBoundingClientRect().left - list.closest('.rs').getBoundingClientRect().left);
    if (pad > 0) list.style.setProperty('--rsw-pad', pad + 'px');
    list.appendChild(ai); list.classList.add('rsw');
    const cards = [...list.children];
    const foot = document.createElement('div'); foot.className = 'rsw-foot';
    foot.innerHTML = '<div class="rsw-dots">' + cards.map(() => '<i></i>').join('') + '</div><span class="rsw-hint">Листайте, чтобы увидеть все ' + cards.length + ' →</span>';
    list.after(foot);
    const dots = [...foot.querySelectorAll('i')];
    const mark = () => {
      const x = list.scrollLeft; let cur = 0;
      cards.forEach((c, i) => { if (c.offsetLeft - list.offsetLeft - 30 <= x) cur = i; });
      if (list.scrollLeft + list.clientWidth >= list.scrollWidth - 4) cur = cards.length - 1;
      dots.forEach((d, i) => d.classList.toggle('on', i === cur));
    };
    list.addEventListener('scroll', mark, { passive: true }); mark();
    return true;
  };
  const w = setInterval(() => { if (run()) clearInterval(w); }, 300);
})();
