/*!
 * TREDT SMP 3 - uNmINeD map intro screen (original Aternos colors)
 * Loaded by ONE line in index.html:  <script src="intro-classic.js"></script>
 * Everything (CSS, markup, animation) lives in this file, so it is not touched
 * by the map files and is easy to re-attach if index.html is ever restored.
 */
(function () {
  'use strict';

  var CONFIG = {
    title: 'TREDT SMP 3',
    poweredBy: 'Powered by',
    studio: 'TREDT Publications Studios',
    studioUrl: 'https://tredtunion.netlify.app/',
    buttonText: 'Enter Map',
    showOncePerSession: false   // true = only show the intro once per browser session
  };

  try {
    if (CONFIG.showOncePerSession && sessionStorage.getItem('tredtIntroSeen')) return;
  } catch (e) {}

  var NS = 'http://www.w3.org/2000/svg';

  var CSS = `
#tredt-intro, #tredt-intro * { box-sizing: border-box; margin: 0; }
#tredt-intro {
  --main: #2b87d3; --dark: #2d3943; --fg: #f0f0f0;
  --outline: #0a0e11;
  --hard-shadow: rgba(0, 0, 0, 0.5);
  --glow-a: rgba(43, 135, 211, 0.06);
  --glow-b: rgba(43, 135, 211, 0.06);
  --pixel: rgba(43, 135, 211, 0.30);
  --hill-back: rgba(43, 135, 211, 0.07);
  --hill-back-top: rgba(43, 135, 211, 0.12);
  --hill-front: rgba(43, 135, 211, 0.10);
  --hill-front-top: rgba(43, 135, 211, 0.17);
  --hill-speck: rgba(0, 0, 0, 0.25);
  position: fixed; inset: 0; z-index: 2147483000;
  display: grid; place-items: center; padding: 24px; overflow: hidden;
  background: #161c21;
  color: #fff;
  font-family: Play, "Segoe UI", system-ui, sans-serif;
  -webkit-font-smoothing: antialiased;
  transition: opacity .6s ease;
}
#tredt-intro.tm-hide { opacity: 0; pointer-events: none; }

#tredt-intro .tm-glow {
  position: absolute; z-index: 0; width: 60vmax; height: 60vmax; border-radius: 50%;
  background: radial-gradient(circle, var(--glow-a) 0%, transparent 65%);
  animation: tm-float 26s ease-in-out infinite alternate;
}
#tredt-intro .tm-glow.a { top: -20vmax; left: -15vmax; }
#tredt-intro .tm-glow.b {
  top: 10vmax; right: -20vmax;
  background: radial-gradient(circle, var(--glow-b) 0%, transparent 65%);
  animation-duration: 32s; animation-delay: -10s;
}
@keyframes tm-float {
  from { transform: translate(0, 0) scale(1); }
  to   { transform: translate(8vmax, 6vmax) scale(1.1); }
}

#tredt-intro .tm-terrain { position: absolute; left: 0; bottom: 0; pointer-events: none; will-change: transform; }
#tredt-intro .tm-terrain svg { display: block; shape-rendering: crispEdges; }
#tredt-intro .tm-terrain.back  { z-index: 0; animation: tm-scroll 180s linear infinite; }
#tredt-intro .tm-terrain.front { z-index: 1; animation: tm-scroll 110s linear infinite; }
@keyframes tm-scroll { to { transform: translateX(calc(var(--w) * -1)); } }
#tredt-intro .back  .b { fill: var(--hill-back); }
#tredt-intro .back  .t { fill: var(--hill-back-top); }
#tredt-intro .front .b { fill: var(--hill-front); }
#tredt-intro .front .t { fill: var(--hill-front-top); }
#tredt-intro .s { fill: var(--hill-speck); }

#tredt-intro .tm-particles { position: absolute; inset: 0; z-index: 1; pointer-events: none; }
#tredt-intro .tm-px { position: absolute; bottom: -20px; background: var(--pixel); opacity: 0; animation: tm-rise linear infinite; }
@keyframes tm-rise {
  0%   { transform: translateY(0); opacity: 0; }
  15%  { opacity: 1; }
  85%  { opacity: 1; }
  100% { transform: translateY(-110vh); opacity: 0; }
}

#tredt-intro .tm-stack { position: relative; z-index: 2; display: flex; flex-direction: column; align-items: center; max-width: 100%; }
#tredt-intro .tm-card-wrap {
  max-width: 100%;
  filter: drop-shadow(2px 0 0 var(--outline)) drop-shadow(-2px 0 0 var(--outline))
          drop-shadow(0 2px 0 var(--outline)) drop-shadow(0 -2px 0 var(--outline))
          drop-shadow(0 6px 0 var(--hard-shadow));
}
#tredt-intro .tm-card {
  text-align: center; background: var(--dark); padding: 36px 48px;
  box-shadow: inset 4px 4px 0 rgba(255, 255, 255, 0.10), inset -4px -4px 0 rgba(0, 0, 0, 0.28);
  clip-path: polygon(
    0 8px, 4px 8px, 4px 4px, 8px 4px, 8px 0,
    calc(100% - 8px) 0, calc(100% - 8px) 4px, calc(100% - 4px) 4px, calc(100% - 4px) 8px, 100% 8px,
    100% calc(100% - 8px), calc(100% - 4px) calc(100% - 8px), calc(100% - 4px) calc(100% - 4px), calc(100% - 8px) calc(100% - 4px), calc(100% - 8px) 100%,
    8px 100%, 8px calc(100% - 4px), 4px calc(100% - 4px), 4px calc(100% - 8px), 0 calc(100% - 8px)
  );
}
#tredt-intro .tm-title {
  font-size: clamp(1.6rem, 6vw, 2.8rem); font-weight: 700; color: #fff;
  text-shadow: 2px 2px 0 rgba(0, 0, 0, 0.35); word-break: break-word;
}

#tredt-intro .tm-btn-wrap {
  position: absolute; top: calc(100% + 28px); left: 50%; transform: translateX(-50%); white-space: nowrap;
  filter: drop-shadow(2px 0 0 var(--outline)) drop-shadow(-2px 0 0 var(--outline))
          drop-shadow(0 2px 0 var(--outline)) drop-shadow(0 -2px 0 var(--outline))
          drop-shadow(0 4px 0 var(--hard-shadow));
}
#tredt-intro .tm-btn {
  display: block; padding: 10px 28px; border: 0; cursor: pointer;
  font: inherit; font-size: clamp(0.95rem, 3vw, 1.15rem); font-weight: 700;
  color: #fff; background: var(--main); text-shadow: 2px 2px 0 rgba(0, 0, 0, 0.25);
  box-shadow: inset 3px 3px 0 rgba(255, 255, 255, 0.22), inset -3px -3px 0 rgba(0, 0, 0, 0.18);
  clip-path: polygon(
    0 6px, 3px 6px, 3px 3px, 6px 3px, 6px 0,
    calc(100% - 6px) 0, calc(100% - 6px) 3px, calc(100% - 3px) 3px, calc(100% - 3px) 6px, 100% 6px,
    100% calc(100% - 6px), calc(100% - 3px) calc(100% - 6px), calc(100% - 3px) calc(100% - 3px), calc(100% - 6px) calc(100% - 3px), calc(100% - 6px) 100%,
    6px 100%, 6px calc(100% - 3px), 3px calc(100% - 3px), 3px calc(100% - 6px), 0 calc(100% - 6px)
  );
}
#tredt-intro .tm-btn:hover { filter: brightness(0.94); }
#tredt-intro .tm-btn:focus-visible { box-shadow: inset 0 0 0 3px #fff; }

#tredt-intro .tm-bar {
  position: absolute; z-index: 3;
  top: calc(20px + env(safe-area-inset-top, 0px)); left: 50%; transform: translateX(-50%);
  width: max-content; max-width: calc(100% - 32px);
  display: flex; align-items: center; justify-content: center; gap: 12px;
  color: var(--fg); font-size: 1rem; font-weight: 700; line-height: 1; text-decoration: none;
}
#tredt-intro .tm-cta {
  display: block; padding: 7px 12px; color: #fff; background: var(--main); text-shadow: 2px 2px 0 rgba(0, 0, 0, 0.25);
  box-shadow: inset 2px 2px 0 rgba(255, 255, 255, 0.22), inset -2px -2px 0 rgba(0, 0, 0, 0.18);
  clip-path: polygon(
    0 4px, 2px 4px, 2px 2px, 4px 2px, 4px 0,
    calc(100% - 4px) 0, calc(100% - 4px) 2px, calc(100% - 2px) 2px, calc(100% - 2px) 4px, 100% 4px,
    100% calc(100% - 4px), calc(100% - 2px) calc(100% - 4px), calc(100% - 2px) calc(100% - 2px), calc(100% - 4px) calc(100% - 2px), calc(100% - 4px) 100%,
    4px 100%, 4px calc(100% - 2px), 2px calc(100% - 2px), 2px calc(100% - 4px), 0 calc(100% - 4px)
  );
}
#tredt-intro .tm-bar:hover .tm-cta { filter: brightness(0.92); }
#tredt-intro .tm-bar:focus-visible .tm-cta { box-shadow: inset 0 0 0 2px #fff; }

@media (max-width: 600px) {
  #tredt-intro .tm-bar { flex-direction: column; gap: 10px; font-size: 0.9rem; }
  #tredt-intro .tm-card { padding: 28px 28px; }
}
@media (prefers-reduced-motion: reduce) {
  #tredt-intro .tm-glow, #tredt-intro .tm-terrain { animation: none !important; }
  #tredt-intro .tm-particles { display: none; }
}
`;

  // ---- pixel terrain (same generator as the original page) ----
  function heights(cols, min, max) {
    var h = [Math.floor((min + max) / 2)];
    for (var i = 1; i < cols; i++) {
      var prev = h[i - 1];
      var dist = h[0] - prev;
      var left = cols - i;
      var step;
      if (Math.abs(dist) >= left) step = Math.sign(dist);
      else step = [-1, 0, 0, 0, 1][Math.floor(Math.random() * 5)];
      h.push(Math.max(min, Math.min(max, prev + step)));
    }
    return h;
  }

  function rect(cls, x, y, w, h) {
    var r = document.createElementNS(NS, 'rect');
    r.setAttribute('class', cls);
    r.setAttribute('x', x); r.setAttribute('y', y);
    r.setAttribute('width', w); r.setAttribute('height', h);
    return r;
  }

  function buildTerrain(el, block, cols, min, max) {
    var h = heights(cols, min, max);
    var w = cols * block;
    var copies = Math.ceil(window.innerWidth / w) + 1;
    var H = max * block;
    var svg = document.createElementNS(NS, 'svg');
    svg.setAttribute('width', w * copies);
    svg.setAttribute('height', H);

    var specks = h.map(function (v) {
      return Math.random() < 0.25 ? 1 + Math.floor(Math.random() * Math.max(1, v - 1)) : 0;
    });

    for (var c = 0; c < copies; c++) {
      h.forEach(function (v, i) {
        var x = c * w + i * block;
        var y = H - v * block;
        svg.appendChild(rect('b', x, y + block, block, (v - 1) * block));
        svg.appendChild(rect('t', x, y, block, block));
        if (specks[i]) {
          svg.appendChild(rect('s', x + block / 4, y + specks[i] * block + block / 4, block / 2, block / 2));
        }
      });
    }
    el.innerHTML = '';
    el.appendChild(svg);
    el.style.setProperty('--w', w + 'px');
  }

  function start() {
    if (document.getElementById('tredt-intro')) return;

    var font = document.createElement('link');
    font.rel = 'stylesheet';
    font.href = 'https://fonts.googleapis.com/css2?family=Play:wght@700&display=swap';
    document.head.appendChild(font);

    var style = document.createElement('style');
    style.id = 'tredt-intro-style';
    style.textContent = CSS;
    document.head.appendChild(style);

    var root = document.createElement('div');
    root.id = 'tredt-intro';
    root.setAttribute('role', 'dialog');
    root.setAttribute('aria-label', CONFIG.title);
    root.innerHTML =
      '<div class="tm-glow a"></div>' +
      '<div class="tm-glow b"></div>' +
      '<div class="tm-terrain back"></div>' +
      '<div class="tm-terrain front"></div>' +
      '<div class="tm-particles"></div>' +
      '<a class="tm-bar" target="_blank" rel="noopener"><span class="tm-by"></span><span class="tm-cta"></span></a>' +
      '<div class="tm-stack">' +
        '<div class="tm-card-wrap"><div class="tm-card"><h1 class="tm-title"></h1></div></div>' +
        '<span class="tm-btn-wrap"><button type="button" class="tm-btn"></button></span>' +
      '</div>';
    document.body.appendChild(root);

    root.querySelector('.tm-bar').href = CONFIG.studioUrl;
    root.querySelector('.tm-by').textContent = CONFIG.poweredBy;
    root.querySelector('.tm-cta').textContent = CONFIG.studio;
    root.querySelector('.tm-title').textContent = CONFIG.title;
    var btn = root.querySelector('.tm-btn');
    btn.textContent = CONFIG.buttonText;

    var back = root.querySelector('.tm-terrain.back');
    var front = root.querySelector('.tm-terrain.front');
    function render() {
      buildTerrain(back, 24, 90, 4, 11);
      buildTerrain(front, 32, 70, 2, 6);
    }
    render();
    var rt;
    function onResize() { clearTimeout(rt); rt = setTimeout(render, 200); }
    window.addEventListener('resize', onResize);

    var box = root.querySelector('.tm-particles');
    for (var i = 0; i < 18; i++) {
      var p = document.createElement('span');
      var size = [4, 6, 8, 8][Math.floor(Math.random() * 4)];
      var duration = 18 + Math.random() * 22;
      p.className = 'tm-px';
      p.style.width = p.style.height = size + 'px';
      p.style.left = (Math.random() * 100) + 'vw';
      p.style.animationDuration = duration + 's';
      p.style.animationDelay = (-Math.random() * duration) + 's';
      box.appendChild(p);
    }

    function dismiss() {
      try { if (CONFIG.showOncePerSession) sessionStorage.setItem('tredtIntroSeen', '1'); } catch (e) {}
      window.removeEventListener('resize', onResize);
      root.classList.add('tm-hide');
      setTimeout(function () { if (root.parentNode) root.parentNode.removeChild(root); }, 700);
    }
    btn.addEventListener('click', dismiss);
    try { btn.focus({ preventScroll: true }); } catch (e) {}
  }

  if (document.body) start();
  else document.addEventListener('DOMContentLoaded', start);
})();
