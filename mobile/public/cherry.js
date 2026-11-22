// Mock-up: the Interview Studio as a spotlight panel ("The cherry on top"), opened by the same icon as the Structured Interview row.
(function () {
  const css = `
  #interview-studio { margin: 56px 12px 8px !important; padding: 30px 0 30px !important; border-radius: 28px;
    background: linear-gradient(165deg, #e2eafd 0%, #e7e7fc 60%, #ece9fd 100%) !important;
    box-shadow: 0 0 0 1px rgba(91,76,214,.08), 0 30px 60px -40px rgba(60,40,160,.35); }
  #interview-studio .isx-in { padding: 0 20px !important; }
  #interview-studio .isx-cast-h, #interview-studio .isx-pts { margin-left: 20px !important; margin-right: 20px !important; }
  #interview-studio .isx-cast { padding-left: 20px !important; padding-right: 20px !important; scroll-padding: 0 20px !important; }
  #interview-studio .isx-part { display: none !important; }
  #interview-studio .isx-pts { border-top-color: rgba(91,76,214,.14) !important; }
  #interview-studio .isx-pt { border-bottom-color: rgba(91,76,214,.14) !important; }
  .chy-top { display: flex; align-items: center; gap: 12px; }
  .chy-ico { width: 44px; height: 44px; border-radius: 13px; display: grid; place-items: center; background: #ece5fb; color: #7a5ad8;
    box-shadow: 0 0 0 1px rgba(122,90,216,.12), 0 8px 18px -10px rgba(90,60,180,.45); flex: none; }
  .chy-ico svg { width: 22px; height: 22px; }
  .chy-name { font: 600 15px/1.2 Inter, Arial, sans-serif; letter-spacing: -.012em; color: #2a2360; }
  #interview-studio .isx-eb { margin-top: 22px !important; color: #5b4cd6 !important; }
  `;
  const run = () => {
    const box = document.querySelector('#interview-studio .isx-in');
    const row = document.querySelector('#identify .id-list li:last-child .id-ico svg');
    if (!box || !row) return false;
    if (box.querySelector('.chy-top')) return true;
    const st = document.createElement('style'); st.textContent = css; document.head.appendChild(st);
    const top = document.createElement('div'); top.className = 'chy-top';
    top.innerHTML = '<span class="chy-ico">' + row.outerHTML + '</span><span class="chy-name">Structured Interview</span>';
    box.prepend(top);
    const eb = box.querySelector('.isx-eb'); if (eb) eb.textContent = 'The cherry on top';
    const ld = box.querySelector('.isx-lead');
    if (ld && !/Interview Studio/.test(ld.textContent)) ld.textContent = ld.textContent.replace('they practise with four AI characters, from easy to challenging.', 'they practise with four AI characters in our Interview Studio, from easy to challenging.');
    return true;
  };
  const w = setInterval(() => { if (run()) clearInterval(w); }, 150);
})();
