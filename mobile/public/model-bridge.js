// Mock-up: connect the six areas to the five sources (label, intro text, a hint in the Studio).
(function () {
  const run = () => {
    const eb = document.querySelector('.nbm-eyebrow span');
    const tx = document.querySelector('.nbm-text');
    const pt = document.querySelector('#interview-studio .isx-pt p');
    if (!eb || !tx || !pt) return false;
    eb.textContent = 'What we measure';
    tx.textContent = 'We look at managers and teams from several sides: how they work across the six areas, and what around them makes that easier or harder. Managers and teams share the same six areas, so their results connect into one picture you can act on.';
    if (!/six areas/.test(pt.textContent)) pt.lastChild.textContent = 'A ready-made guide for every interview, built on the six areas';
    return true;
  };
  const w = setInterval(() => { if (run()) clearInterval(w); }, 150);
})();
