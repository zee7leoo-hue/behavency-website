// Interview Studio block for the phone site, placed at the end of Identify (after "Explore the five sources").
// Remove this file and its <script> tag to take it out.
(function(){
const CSS=".isx-ist{padding:44px 0 64px}\n.isx-in{padding:0 22px}\n.isx-part{display:table;font:600 12px/1 Inter,sans-serif;color:#2f6fdb;background:#e6eefc;border-radius:999px;padding:7px 12px}\n.isx-eb{display:flex;align-items:center;gap:12px;margin-top:18px;font:600 11.6px/1.2 Inter,sans-serif;letter-spacing:.16em;text-transform:uppercase;color:#3a4364}\n.isx-eb::before{content:\"\";width:24px;height:1.5px;background:currentColor;opacity:.5}\n.isx-ist h2{margin-top:16px;font:700 38px/40px \"Source Serif 4\",Georgia,serif;letter-spacing:-.03em;color:#0b1138;font-variation-settings:\"opsz\" 30;text-wrap:balance}\n.isx-ist h2 em{font-style:italic;font-weight:500;color:#2f6fdb;letter-spacing:-.02em}\n.isx-lead{margin-top:18px;font:400 15.6px/22.6px Inter,sans-serif;color:#1c2540}\n\n/* the cast */\n.isx-cast-h{display:flex;align-items:baseline;justify-content:space-between;margin:36px 22px 0}\n.isx-cast-h b{font:600 16px/1.2 Inter,sans-serif;letter-spacing:-.014em;color:#0f1b3d}\n.isx-cast-h span{font:500 12.5px/1 Inter,sans-serif;color:#6b7090}\n.isx-cast{display:flex;gap:12px;overflow-x:auto;scroll-snap-type:x mandatory;padding:16px 22px 26px;scroll-padding:0 22px;scrollbar-width:none;-webkit-overflow-scrolling:touch}\n.isx-cast::-webkit-scrollbar{display:none}\n.isx-ch{flex:0 0 min(320px, calc(100% - 52px));scroll-snap-align:start;border-radius:24px;background:#fff;box-shadow:0 0 0 1px rgba(20,35,75,.06),0 22px 44px -28px rgba(30,25,80,.32);overflow:hidden;display:flex;flex-direction:column}\n.isx-ch-top{position:relative;padding:20px 20px 16px;background:linear-gradient(180deg,var(--t),#fff 92%);display:flex;align-items:center;gap:16px}\n.isx-ch-top img{width:84px;height:84px;border-radius:50%;flex:none;box-shadow:0 0 0 4px #fff,0 10px 22px -10px rgba(20,30,80,.35)}\n.isx-ch-name{font:700 24px/1.05 \"Source Serif 4\",Georgia,serif;letter-spacing:-.02em;color:#0b1138}\n.isx-ch-trait{margin-top:5px;font:500 13.6px/1.3 Inter,sans-serif;color:#4b5270}\n.isx-lvl{display:flex;align-items:center;gap:8px;margin-top:10px}\n.isx-lvl s{display:flex;gap:3px;text-decoration:none}\n.isx-lvl s i{width:14px;height:5px;border-radius:3px;background:#e2e5ee}\n.isx-lvl s i.isx-on{background:var(--c)}\n.isx-lvl em{font:700 11.5px/1 Inter,sans-serif;font-style:normal;color:var(--c);letter-spacing:.02em}\n.isx-ch-body{padding:4px 20px 20px;display:flex;flex-direction:column;gap:14px;flex:1}\n.isx-say{position:relative;margin-left:4px;padding:12px 14px;border-radius:4px 16px 16px 16px;background:#f3f4f9;font:400 14.4px/20.5px \"Source Serif 4\",Georgia,serif;font-style:italic;color:#252b45}\n.isx-say small{display:block;margin-bottom:4px;font:600 10.5px/1 Inter,sans-serif;font-style:normal;letter-spacing:.12em;text-transform:uppercase;color:#8a8fa8}\n.isx-tip{display:flex;gap:10px;align-items:flex-start;padding-top:14px;border-top:1px solid #eceef5}\n.isx-tip svg{flex:none;width:18px;height:18px;margin-top:1px;fill:none;stroke:#2f6fdb;stroke-width:2;stroke-linecap:round;stroke-linejoin:round}\n.isx-tip p{font:500 13.8px/1.4 Inter,sans-serif;color:#1f2740}\n.isx-tip p b{display:block;font:600 10.5px/1 Inter,sans-serif;letter-spacing:.12em;text-transform:uppercase;color:#2f6fdb;margin-bottom:5px}\n.isx-dots{display:flex;justify-content:center;gap:8px;margin-top:-6px}\n.isx-dots button{width:8px;height:8px;border-radius:50%;border:0;padding:0;background:#d6d9e6;cursor:pointer;transition:width .3s,background .3s}\n.isx-dots button.isx-on{width:22px;border-radius:4px;background:#2f6fdb}\n.isx-note{margin:14px 22px 0;font:400 12px/1.4 Inter,sans-serif;color:#8a8fa8;text-align:center}\n\n/* three steps */\n.steps{margin:40px 30px 0;display:grid;gap:0}\n.step{display:grid;grid-template-columns:40px 1fr;column-gap:16px;position:relative;padding-bottom:22px}\n.step:last-child{padding-bottom:0}\n.step::before{content:\"\";position:absolute;left:19.5px;top:42px;bottom:4px;width:1px;background:#d8deef}\n.step:last-child::before{display:none}\n.num{width:40px;height:40px;border-radius:12px;background:#e6eefc;color:#2f6fdb;display:grid;place-items:center}\n.num svg{width:20px;height:20px;fill:none;stroke:currentColor;stroke-width:1.9;stroke-linecap:round;stroke-linejoin:round}\n.step h3{font:600 16px/1.3 Inter,sans-serif;letter-spacing:-.014em;color:#0f1b3d;padding-top:2px}\n.step p{margin-top:4px;font:400 14.6px/21px Inter,sans-serif;color:#4a5170}\n\n\n/* before / during / after points */\n.isx-pts{margin:38px 22px 0;display:grid;gap:0;border-top:1px solid #e3e6f0}\n.isx-pt{display:grid;grid-template-columns:62px 1fr;column-gap:12px;align-items:start;padding:15px 0;border-bottom:1px solid #e3e6f0}\n.isx-when{font:600 10.5px/1 Inter,sans-serif;letter-spacing:.12em;text-transform:uppercase;color:#2f6fdb;padding-top:5px}\n.isx-pt p{display:flex;gap:10px;align-items:flex-start;font:500 15.2px/1.45 Inter,sans-serif;color:#1f2740}\n.isx-pt p i{flex:none;width:22px;height:22px;border-radius:50%;background:#e6eefc;color:#2f6fdb;display:grid;place-items:center;font:700 12px/1 Inter,sans-serif;font-style:normal;margin-top:0}\n.isx-rise{opacity:0;transform:translateY(14px);transition:opacity .7s,transform .8s cubic-bezier(.22,1,.36,1)}\n.isx-rise.isx-shown{opacity:1;transform:none}\n\n#interview-studio{padding:64px 0 8px;text-align:left;background:transparent}\n#interview-studio .isx-in{padding:0 31px}\n#interview-studio .isx-cast-h,#interview-studio .isx-pts{margin-left:31px;margin-right:31px}\n#interview-studio .isx-cast{padding-left:31px;padding-right:31px;scroll-padding:0 31px}\n#interview-studio h2,#interview-studio h3,#interview-studio p,#interview-studio ul{margin-bottom:0}\n#interview-studio ul{list-style:none;padding-left:0}\n@media (prefers-reduced-motion:reduce){.isx-rise{opacity:1;transform:none;transition:none}.isx-dots button{transition:none}}\n";
const HTML="<section class=\"isx-ist\" id=\"interview-studio\">\n    <div class=\"isx-in\">\n      <div class=\"isx-part isx-rise\">Part of the structured interview</div>\n      <div class=\"isx-eb isx-rise\">Interview Studio</div>\n      <h2 class=\"isx-rise\">Your HR team trains to <em>run the interview.</em></h2>\n      <p class=\"isx-lead isx-rise\">A structured interview only works if the interviewer knows how to listen and dig deeper. So we don\u2019t just train your HR team, we give them everything they need. Before meeting real managers, they practise with four AI characters, from easy to challenging.</p>\n    </div>\n\n    <div class=\"isx-cast-h isx-rise\"><b>Meet the four characters</b><span id=\"isx-pos\">1 / 4</span></div>\n    <div class=\"isx-cast\" id=\"isx-cast\" aria-label=\"Practice characters\"></div>\n    <div class=\"isx-dots\" id=\"isx-dots\" role=\"tablist\" aria-label=\"Characters\"></div>\n\n    <ul class=\"isx-pts\">\n      <li class=\"isx-pt isx-rise\"><span class=\"isx-when\">Before</span><p><i aria-hidden=\"true\">\u2713</i>A ready-made guide for every interview</p></li>\n      <li class=\"isx-pt isx-rise\"><span class=\"isx-when\">During</span><p><i aria-hidden=\"true\">\u2713</i>During the interview, the AI suggests what to ask next</p></li>\n      <li class=\"isx-pt isx-rise\"><span class=\"isx-when\">After</span><p><i aria-hidden=\"true\">\u2713</i>After it, the AI sorts the notes into a summary; the interviewer decides</p></li>\n    </ul>\n  </section>";
function mount(){
  if(document.getElementById('interview-studio'))return true;
  const list=document.querySelector('#identify .id-list'); if(!list)return false;
  const st=document.createElement('style');st.id='studio-v2';st.textContent=CSS;document.head.appendChild(st);
  const t=document.createElement('div');t.innerHTML=HTML;list.after(t.firstElementChild);
  init();return true;
}
function init(){
{

  const CHARS = [
    { f: 'anna', n: 'Anna', d: 'Gives clear examples', lvl: 1, l: 'Easy', c: '#0f9a6b', t: '#e7f8ef',
      say: 'Last quarter two people on my team were overloaded, so I moved one project and we still hit the deadline.',
      tip: 'Confirm the example and move on.' },
    { f: 'mark', n: 'Mark', d: 'Speaks in generalities', lvl: 2, l: 'Medium', c: '#2f6fdb', t: '#e8f0fd',
      say: 'Generally, I try to keep everyone aligned and make sure people know what matters.',
      tip: 'Ask for one concrete example.' },
    { f: 'sofia', n: 'Sofia', d: 'Only success stories', lvl: 3, l: 'Hard', c: '#d9731a', t: '#fdf0e3',
      say: 'Honestly, my team never really has conflicts. Everything has gone well this year.',
      tip: 'Ask what went wrong, and what she did.' },
    { f: 'peter', n: 'Peter', d: 'Long-winded, drifts off', lvl: 4, l: 'Challenging', c: '#cf3f6b', t: '#fceaf0',
      say: 'That reminds me of a project back in 2015, which was quite different, because at the time…',
      tip: 'Bring him back to the question.' },
  ];
  const tipIco = '<svg viewBox="0 0 24 24"><path d="M9 18h6M10 21.5h4M15 14c.2-1 .7-1.7 1.5-2.5 1-.9 1.5-2.2 1.5-3.5A6 6 0 0 0 6 8c0 1 .2 2.2 1.5 3.5.7.7 1.3 1.5 1.5 2.5"/></svg>';
  const cast = document.getElementById('isx-cast'), dots = document.getElementById('isx-dots'), pos = document.getElementById('isx-pos');
  cast.innerHTML = CHARS.map((x, i) => `
    <article class="isx-ch" style="--t:${x.t};--c:${x.c}" aria-label="${x.n}, ${x.l}">
      <div class="isx-ch-top">
        <img src="team/${x.f}.webp" alt="" width="84" height="84">
        <div>
          <h3 class="isx-ch-name">${x.n}</h3>
          <p class="isx-ch-trait">${x.d}</p>
          <div class="isx-lvl"><s aria-hidden="true">${[1,2,3,4].map((k) => `<i class="${k <= x.lvl ? 'isx-on' : ''}"></i>`).join('')}</s><em>${x.l}</em></div>
        </div>
      </div>
      <div class="isx-ch-body">
        <p class="isx-say"><small>${x.n} might say</small>“${x.say}”</p>
        <div class="isx-tip">${tipIco}<p><b>You practise</b>${x.tip}</p></div>
      </div>
    </article>`).join('');
  dots.innerHTML = CHARS.map((x, i) => `<button type="button" role="tab" aria-label="${x.n}" class="${i ? '' : 'isx-on'}"></button>`).join('');
  const cards = [...cast.children], db = [...dots.children];
  const step = () => cards[1].offsetLeft - cards[0].offsetLeft;
  db.forEach((b, i) => b.addEventListener('click', () => cast.scrollTo({ left: i * step(), behavior: 'smooth' })));
  let t = 0;
  cast.addEventListener('scroll', () => { if (t) return; t = requestAnimationFrame(() => { t = 0;
    const i = Math.max(0, Math.min(cards.length - 1, Math.round(cast.scrollLeft / step())));
    db.forEach((b, k) => b.classList.toggle('isx-on', k === i)); pos.textContent = (i + 1) + ' / ' + cards.length; }); }, { passive: true });

  // every card's 'You practise' starts at the same height: the sample answers get the height of the tallest one
  const eqSay = () => { const tp = [...cast.querySelectorAll('.isx-ch-top')]; tp.forEach((x) => { x.style.minHeight = ''; }); const th = Math.max(...tp.map((x) => x.offsetHeight)); tp.forEach((x) => { x.style.minHeight = th + 'px'; }); const ss = [...cast.querySelectorAll('.isx-say')]; ss.forEach((x) => { x.style.minHeight = ''; }); const h = Math.max(...ss.map((x) => x.offsetHeight)); ss.forEach((x) => { x.style.minHeight = h + 'px'; }); };
  eqSay(); addEventListener('resize', eqSay); if (document.fonts) document.fonts.ready.then(eqSay); setTimeout(eqSay, 1200);
  const io = new IntersectionObserver((es) => es.forEach((e) => { if (e.isIntersecting) { e.target.classList.add('isx-shown'); io.unobserve(e.target); } }), { rootMargin: '0px 0px -8% 0px' });
  document.querySelectorAll('#interview-studio .isx-rise').forEach((el, i) => { el.style.transitionDelay = (i < 4 ? i * 90 : 0) + 'ms'; io.observe(el); });
}

}
const w=setInterval(()=>{if(mount())clearInterval(w);},150);
})();
