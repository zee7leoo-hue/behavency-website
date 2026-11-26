// Mock-up: connect the six areas to the five sources (label, intro text, a hint in the Studio).
(function () {
  const run = () => {
    const eb = document.querySelector('.nbm-eyebrow span');
    const tx = document.querySelector('.nbm-text');
    const pt = document.querySelector('#interview-studio .isx-pt p');
    if (!eb || !tx || !pt) return false;
    eb.textContent = 'Что мы измеряем';
    tx.textContent = 'Мы смотрим на руководителей и команды с разных сторон: как они действуют в шести областях и что вокруг помогает им или мешает. Области у руководителей и команд общие, поэтому результаты складываются в одну картину, по которой можно действовать.';
    if (!/six areas/.test(pt.textContent)) pt.lastChild.textContent = 'Готовый гайд для каждого интервью по шести областям';
    return true;
  };
  const w = setInterval(() => { if (run()) clearInterval(w); }, 150);
})();
