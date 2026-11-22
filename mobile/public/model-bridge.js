// Mock-up: connect the six areas to the five sources (label, intro text, a hint in the Studio).
(function () {
  const run = () => {
    const eb = document.querySelector('.nbm-eyebrow span');
    const tx = document.querySelector('.nbm-text');
    const pt = document.querySelector('#interview-studio .isx-pt p');
    if (!eb || !tx || !pt) return false;
    eb.textContent = 'What we measure';
    tx.textContent = 'All five sources measure the same six areas, so the results fit together into one picture. The same six areas then run through the whole journey: the team game, the training and the re-assessment. Only the behaviours change with each level.';
    if (!/six areas/.test(pt.textContent)) pt.lastChild.textContent = 'A ready-made guide for every interview, built on the six areas';
    return true;
  };
  const w = setInterval(() => { if (run()) clearInterval(w); }, 150);
})();
