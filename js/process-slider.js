/* Product work hero: a five-step design process told through an SVG slider.
   Research -> Empathy -> Ideation -> Prototyping -> Testing.
   Every moving piece is a "sprite" with keyframes along the slider (t = 0..1). */
(function () {
  'use strict';
  const host = document.getElementById('process-hero-svg');
  if (!host) return;

  const NS = 'http://www.w3.org/2000/svg';
  const reduce = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
  const C = { b900: '#0b2a5b', b700: '#14479f', b600: '#1a5bc4', b500: '#2f74e0', b100: '#e4eefc', b50: '#f2f7fe', ink: '#4a5a75', line: '#cfe0fa', teal: '#0e8c8a', teal100: '#dcf4f2', orange: '#d94a22' };
  const STAGES = [
    { name: 'Research', sub: 'User-centered interactions' },
    { name: 'Empathy', sub: 'Defined' },
    { name: 'Ideation', sub: '' },
    { name: 'Prototyping', sub: '' },
    { name: 'Testing', sub: '' }
  ];

  const lerp = (a, b, t) => a + (b - a) * t;
  const clamp = (v, a = 0, b = 1) => Math.min(b, Math.max(a, v));
  const ss = (a, b, v) => { const t = clamp((v - a) / (b - a)); return t * t * (3 - 2 * t); };
  const circ = (cx, cy, r) => `M${cx - r} ${cy}a${r} ${r} 0 1 0 ${2 * r} 0a${r} ${r} 0 1 0 ${-2 * r} 0z`;

  const svg = document.createElementNS(NS, 'svg');
  const mk = (tag, attrs, parent) => {
    const el = document.createElementNS(NS, tag);
    for (const k in attrs) el.setAttribute(k, attrs[k]);
    (parent || svg).appendChild(el);
    return el;
  };
  svg.setAttribute('class', 'idea-hero__svg');
  svg.setAttribute('role', 'group');
  svg.setAttribute('aria-label', 'Interactive illustration of the design process. Use the slider to move from research to testing.');
  host.appendChild(svg);

  const caption = mk('text', { class: 'process-caption', 'text-anchor': 'middle' });
  const scene = mk('g', {});
  const L = {};
  ['lines', 'users', 'icons', 'box', 'parts', 'test', 'face'].forEach(n => { L[n] = mk('g', { 'aria-hidden': 'true' }, scene); });
  L.lines.setAttribute('fill', 'none');

  // ---- keyframes ---------------------------------------------------------
  const K = (t, x, y, s = 1, o = 1, r = 0, lin = false) => ({ t, x, y, s, o, r, lin });
  const PK = (t, a, d, s = 1, o = 1, r = 0, lin = false) => ({ t, x: Math.cos(a) * d, y: Math.sin(a) * d, a, d, s, o, r, lin, pol: true });
  function ev(kf, t) {
    if (t <= kf[0].t) return kf[0];
    for (let i = 0; i < kf.length - 1; i++) {
      const a = kf[i], b = kf[i + 1];
      if (t < b.t) {
        const u = (t - a.t) / (b.t - a.t), e = b.lin ? u : u * u * (3 - 2 * u);
        let x, y;
        if (a.pol && b.pol) { const an = lerp(a.a, b.a, e), d = lerp(a.d, b.d, e); x = Math.cos(an) * d; y = Math.sin(an) * d; }
        else { x = lerp(a.x, b.x, e); y = lerp(a.y, b.y, e); }
        return { x, y, s: lerp(a.s, b.s, e), o: lerp(a.o, b.o, e), r: lerp(a.r, b.r, e) };
      }
    }
    return kf[kf.length - 1];
  }

  // ---- sprites -----------------------------------------------------------
  const sprites = [];
  function sprite(layer, kf, build, drift) {
    const g = mk('g', {}, L[layer]);
    build(g);
    const sp = { g, kf, cur: kf[0], drift, ph: sprites.length * 1.9 };
    sprites.push(sp);
    return sp;
  }
  const stroke = (c, w) => ({ fill: 'none', stroke: c, 'stroke-width': w, 'stroke-linecap': 'round', 'stroke-linejoin': 'round' });
  const glyph = (g, paths, size, color, flip) => {
    const ic = mk('g', Object.assign({ transform: `scale(${size / 24}) translate(-12 -12)` }, stroke(color, 1.8)), g);
    const inner = flip ? mk('g', { transform: 'translate(0 24) scale(1 -1)' }, ic) : ic;
    paths.forEach(d => mk('path', { d }, inner));
  };
  const bubble = (g, r, color, paths, color2) => {
    mk('circle', { r, fill: '#fff', stroke: color, 'stroke-width': 2 }, g);
    if (paths) glyph(g, paths, r * 1.1, color2 || C.b700);
  };

  // Stage 1: eight different people, loosely connected by dotted lines.
  const PERSON = 'M4 21c0-4.4 3.6-7 8-7s8 2.6 8 7';
  const HEAD = circ(12, 8, 4);
  const PEOPLE = [
    { p: [HEAD, PERSON], c: C.b900, r: 28, at: [-60, -10] },
    { p: [HEAD, PERSON, circ(10.3, 8, 1.1), circ(13.7, 8, 1.1)], c: C.b700, r: 24, at: [-215, -80] },
    { p: [HEAD, PERSON, 'M7.6 9v6M16.4 9v6'], c: C.b600, r: 26, at: [-150, 85] },
    { p: [HEAD, PERSON, 'M7.5 6.5h9M16.5 6.5l2.3 1'], c: C.b500, r: 22, at: [-20, -112] },
    { p: [circ(12, 8, 3.4), PERSON, 'M9 3.2a4 4 0 0 1 6 0'], c: '#4a88e6', r: 25, at: [55, 70] },
    { p: [HEAD, PERSON, 'M9 4.5a4 4 0 0 1 6 0M8 5.2c-1-1.8 0-3 1.6-3'], c: '#5f98ec', r: 23, at: [145, -70] },
    { p: [HEAD, PERSON, 'M6 12h12'], c: '#79aaf0', r: 21, at: [225, 30] },
    { p: [HEAD, PERSON, circ(12, 8, 6)], c: '#93bbf4', r: 24, at: [-5, 120] }
  ];
  const users = PEOPLE.map((u, i) => {
    const [x, y] = u.at;
    const kf = i === 0
      ? [K(0, x, y), K(.1, x, y), K(.17, 0, 0, 1.2), K(.25, 0, 0, 2.1), K(.4, 0, 0, 2.1), K(.5, 0, 0, .4, 0)]
      : [K(0, x, y), K(.1, x * .9, y * .9), K(.19, 0, 0, .3, 0)];
    return sprite('users', kf, g => bubble(g, u.r, u.c, u.p), { a: 0, b: .1, amp: 9 });
  });

  // Stage 2: what we learn about the person (habits, checklist, pain points, feelings, feedback).
  const DETAIL = [
    ['Habits', ['M17 2l4 4-4 4M3 11V9a4 4 0 0 1 4-4h14M7 22l-4-4 4-4M21 13v2a4 4 0 0 1-4 4H3']],
    ['Checklist', ['M9 6h11M9 12h11M9 18h11M3.5 6l1.2 1.2L6.5 5M3.5 12l1.2 1.2L6.5 11M3.5 18l1.2 1.2L6.5 16']],
    ['Pain points', ['M12 3l10 18H2z', 'M12 10v5M12 18v.4']],
    ['Happy', [circ(12, 12, 9), 'M8 14.5a5 5 0 0 0 8 0', circ(9, 10, .5), circ(15, 10, .5)]],
    ['Sad', [circ(12, 12, 9), 'M8 16.5a5 5 0 0 1 8 0', circ(9, 10, .5), circ(15, 10, .5)]],
    ['Thumbs up', ['M7 11v9H4a1 1 0 0 1-1-1v-7a1 1 0 0 1 1-1h3zM7 11l4-8a2.5 2.5 0 0 1 2.5 2.5V9h5.4a2 2 0 0 1 2 2.3l-1.2 7.5A2 2 0 0 1 17.7 20H7']],
    ['Thumbs down', ['M7 11v9H4a1 1 0 0 1-1-1v-7a1 1 0 0 1 1-1h3zM7 11l4-8a2.5 2.5 0 0 1 2.5 2.5V9h5.4a2 2 0 0 1 2 2.3l-1.2 7.5A2 2 0 0 1 17.7 20H7'], true]
  ];
  const BLUES = [C.b900, C.b700, C.b600, C.b500, '#4a88e6', '#5f98ec', '#79aaf0'];
  const details = DETAIL.map(([, paths, flip], k) => {
    const a0 = -Math.PI / 2 + k * 2 * Math.PI / DETAIL.length;
    const t0 = .12 + k * .012;
    const kf = [PK(t0, a0, 20, .2, 0), PK(t0 + .05, a0, 128, 1, 1), PK(.25, a0, 128, 1, 1),
      PK(.4, a0 + 4, 128, 1, 1, 0, true), PK(.5, a0 + 5.2, 6, .25, 0, 0, true)];
    return sprite('icons', kf, g => { mk('circle', { r: 22, fill: '#fff', stroke: BLUES[k], 'stroke-width': 2 }, g); glyph(g, paths, 24, C.b700, flip); });
  });

  // Stage 3: the product arrives in a box.
  const box = sprite('box', [K(.4, 0, 8, .6, 0), K(.5, 0, 8, 1, 1), K(.6, 0, 8, 1, 1), K(.68, 0, 8, 1, 0)], g => {
    mk('rect', { x: -66, y: -40, width: 132, height: 112, rx: 6, fill: '#fff', stroke: C.b700, 'stroke-width': 3 }, g);
    mk('path', { d: 'M-66 -12h132', stroke: C.line, 'stroke-width': 2 }, g);
    mk('rect', Object.assign({ x: -17, y: -2, width: 34, height: 58, rx: 7 }, stroke(C.b600, 3)), g);
    mk('path', Object.assign({ d: 'M-5 6h10' }, stroke(C.b600, 3)), g);
  });
  const lid = sprite('box', [K(.4, 0, -55, .6, 0), K(.5, 0, -55, 1, 1), K(.62, 0, -118, 1, 1, -16), K(.67, 0, -135, 1, 0, -22)], g => {
    mk('rect', { x: -72, y: -16, width: 144, height: 32, rx: 5, fill: '#fff', stroke: C.b700, 'stroke-width': 3 }, g);
  });

  // Stage 4: the parts float free, then snap together as a phone (parts are centred on their home position).
  const PARTS = [
    { id: 'frame', home: [0, 0], fl: [-215, -10, -12, .55], draw: g => {
      mk('rect', { x: -60, y: -120, width: 120, height: 240, rx: 20, fill: '#fff', stroke: C.b700, 'stroke-width': 3 }, g);
      mk('circle', { cx: 0, cy: -111, r: 2.5, fill: C.b700 }, g);
      mk('rect', { x: 59, y: -60, width: 4, height: 34, rx: 2, fill: C.b700 }, g);
    } },
    { id: 'screen', home: [0, 0], fl: [215, -20, 9, .55], draw: g => mk('rect', { x: -52, y: -104, width: 104, height: 212, rx: 12, fill: C.b50, stroke: C.line }, g) },
    { id: 'header', home: [0, -88], fl: [-92, -105, 6, .9], fade: true, draw: g => {
      mk('rect', { x: -46, y: -14, width: 92, height: 28, rx: 6, fill: C.b600 }, g);
      mk('rect', { x: -38, y: -3, width: 40, height: 6, rx: 3, fill: '#fff', opacity: .85 }, g);
    } },
    { id: 'card1', home: [0, -30], fl: [95, -98, -7, .9], fade: true, draw: g => {
      mk('rect', { x: -46, y: -30, width: 92, height: 60, rx: 8, fill: C.b100 }, g);
      mk('path', Object.assign({ d: 'M-18 14l12-14 10 10 6-6 12 10' }, stroke(C.b600, 3)), g);
      mk('circle', { cx: -16, cy: -12, r: 5, fill: C.b600, opacity: .6 }, g);
    } },
    { id: 'card2', home: [0, 32], fl: [-110, 82, -5, .9], fade: true, draw: g => {
      mk('rect', { x: -46, y: -22, width: 92, height: 44, rx: 6, fill: '#fff', stroke: C.line, 'stroke-width': 1.5 }, g);
      mk('rect', { x: -36, y: -10, width: 62, height: 6, rx: 3, fill: C.ink, opacity: .5 }, g);
      mk('rect', { x: -36, y: 4, width: 44, height: 6, rx: 3, fill: C.ink, opacity: .3 }, g);
    } },
    { id: 'button', home: [0, 70], fl: [62, 108, 4, .9], fade: true, draw: g => {
      mk('rect', { x: -46, y: -13, width: 92, height: 26, rx: 13, fill: C.b700 }, g);
      mk('rect', { x: -16, y: -3, width: 32, height: 6, rx: 3, fill: '#fff', opacity: .85 }, g);
    } },
    { id: 'tabbar', home: [0, 96], fl: [200, 112, 8, .9], fade: true, draw: g => {
      mk('rect', { x: -52, y: -11, width: 104, height: 22, fill: '#fff', stroke: C.line }, g);
      [-30, -10, 10, 30].forEach((x, i) => mk('circle', { cx: x, cy: 0, r: 3.2, fill: C.b600, opacity: i ? .35 : .9 }, g));
    } }
  ];
  const parts = PARTS.map((p, i) => {
    const [hx, hy] = p.home, [fx, fy, fr, fs] = p.fl;
    const kf = [K(.52, 0, 0, .25, 0), K(.58 + i * .004, 0, -20, .6, 1), K(.75, fx, fy, fs, 1, fr), K(.88, hx, hy, 1, 1, 0)];
    if (p.fade) kf.push(K(.95, hx, hy, 1, 1, 0), K(1, hx, hy, 1, 0, 0));
    return sprite('parts', kf, p.draw, { a: .62, b: .8, amp: 12 });
  });

  // Stage 5: test it. Data, errors and trends appear around the phone, then the screen smiles.
  const TESTS = [
    [['M5 20V11M12 20V4M19 20v-6'], -150, -72],
    [['M12 3v9h9M20.5 15A9 9 0 1 1 9 3.5'], 150, 72],
    [['M8 8h8v8a4 4 0 0 1-8 0zM9 5l1.5 2M15 5l-1.5 2M4 12h4M16 12h4M5 19l3-2M19 19l-3-2'], -150, 72],
    [['M3 17l6-6 4 4 8-8M15 7h6v6'], 150, -72]
  ];
  const tests = TESTS.map(([paths, x, y], i) => sprite('test', [K(.85 + i * .012, 0, 0, .2, 0), K(.93 + i * .012, x, y, 1, 1)],
    g => { mk('circle', { r: 24, fill: '#fff', stroke: C.b600, 'stroke-width': 2 }, g); glyph(g, paths, 26, C.b700); }));
  const face = sprite('face', [K(.94, 0, 0, .5, 0), K(1, 0, 0, 1, 1)], g => {
    mk('circle', { r: 40, fill: C.teal100, stroke: C.teal, 'stroke-width': 3 }, g);
    mk('circle', { cx: -14, cy: -9, r: 4.5, fill: C.teal }, g);
    mk('circle', { cx: 14, cy: -9, r: 4.5, fill: C.teal }, g);
    mk('path', Object.assign({ d: 'M-19 8Q0 30 19 8' }, stroke(C.teal, 4)), g);
  });

  // Connections
  const lineEl = (parent, color, extra) => mk('line', Object.assign({ stroke: color, 'stroke-width': 1.5, 'stroke-linecap': 'round' }, extra), parent);
  const researchLinks = [[0, 1], [1, 2], [2, 3], [3, 4], [4, 5], [5, 6], [6, 7], [7, 0], [0, 3], [2, 4], [5, 7], [1, 3]].map(([a, b]) => ({ a, b, el: lineEl(L.lines, C.b500) }));
  const detailLinks = details.map((d, k) => ({ d, el: lineEl(L.lines, BLUES[k]) }));
  const testLinks = tests.map(d => ({ d, el: lineEl(L.lines, C.b600, { 'stroke-dasharray': '2 5' }) }));

  // ---- slider ------------------------------------------------------------
  const slider = mk('g', { class: 'idea-slider', role: 'slider', tabindex: 0, 'aria-label': 'Design process', 'aria-valuemin': 0, 'aria-valuemax': 100, 'aria-valuenow': 0, 'aria-valuetext': 'Research' });
  const track = mk('line', { class: 'idea-slider__track', 'stroke-linecap': 'round', 'stroke-width': 6 }, slider);
  const fill = mk('line', { class: 'idea-slider__fill', 'stroke-linecap': 'round', 'stroke-width': 6 }, slider);
  const nodes = STAGES.map(() => mk('circle', { class: 'idea-slider__node', r: 7, 'stroke-width': 2.5 }, slider));
  const hit = mk('rect', { fill: 'transparent', height: 44 }, slider);
  const ring = mk('circle', { class: 'idea-slider__ring', r: 19, fill: 'none', 'stroke-width': 2 }, slider);
  const thumb = mk('circle', { class: 'idea-slider__thumb', r: 12, 'stroke-width': 3 }, slider);
  const grip = mk('path', { class: 'idea-slider__grip', d: 'M-3 -4v8M0 -4v8M3 -4v8', 'stroke-width': 1.4, 'stroke-linecap': 'round' }, slider);
  const caps = STAGES.map(() => mk('text', { class: 'idea-slider__cap' }, slider));
  const hint = mk('text', { class: 'idea-slider__cap idea-slider__hint', 'text-anchor': 'middle' }, slider); hint.textContent = 'Drag to move through the process';

  // ---- layout ------------------------------------------------------------
  let W = 0, H = 0, k = 1, cx = 0, cy = 0, tx0 = 0, tx1 = 0, ty = 0, mobile = false;
  function layout() {
    W = Math.max(280, Math.floor(host.clientWidth));
    mobile = W < 700;
    k = clamp(W / 540, .52, 1);
    const areaH = 350 * k, top = 38;
    H = top + areaH + 110;
    cx = W / 2; cy = top + areaH / 2;
    svg.setAttribute('viewBox', `0 0 ${W} ${H}`);
    svg.setAttribute('width', W); svg.setAttribute('height', H);
    scene.setAttribute('transform', `translate(${cx} ${cy}) scale(${k})`);
    caption.setAttribute('x', cx); caption.setAttribute('y', 24);
    const cw = Math.min(W - 32, 1100), left = (W - cw) / 2;
    ty = H - 52; tx0 = left + 8; tx1 = left + cw - 8;
    track.setAttribute('x1', tx0); track.setAttribute('x2', tx1); track.setAttribute('y1', ty); track.setAttribute('y2', ty);
    fill.setAttribute('x1', tx0); fill.setAttribute('y1', ty); fill.setAttribute('y2', ty);
    hit.setAttribute('x', tx0 - 20); hit.setAttribute('y', ty - 22); hit.setAttribute('width', tx1 - tx0 + 40);
    nodes.forEach((n, i) => {
      const x = lerp(tx0, tx1, i / 4);
      n.setAttribute('cx', x); n.setAttribute('cy', ty);
      const c = caps[i];
      c.textContent = mobile ? String(i + 1) : STAGES[i].name;
      c.setAttribute('x', x); c.setAttribute('y', ty + 30);
      c.setAttribute('text-anchor', i === 0 && !mobile ? 'start' : i === 4 && !mobile ? 'end' : 'middle');
      if (!mobile && i === 0) c.setAttribute('x', tx0 - 8);
      if (!mobile && i === 4) c.setAttribute('x', tx1 + 8);
    });
    hint.setAttribute('x', (tx0 + tx1) / 2); hint.setAttribute('y', ty - 28);
    draw(performance.now());
  }

  // ---- draw --------------------------------------------------------------
  let target = 0, cur = 0, inView = true, raf = 0, interacted = false;
  const stageOf = t => Math.round(t * 4);
  function draw(now) {
    const t = cur;
    for (const sp of sprites) {
      const s = ev(sp.kf, t);
      let dx = 0, dy = 0;
      if (sp.drift && !reduce) {
        const d = sp.drift, w = ss(d.a, d.a + .03, t) * (1 - ss(d.b - .03, d.b, t));
        dx = Math.sin(now * .0008 + sp.ph) * d.amp * w; dy = Math.cos(now * .001 + sp.ph * 1.4) * d.amp * w;
      }
      sp.cur = { x: s.x + dx, y: s.y + dy, s: s.s, o: s.o };
      sp.g.setAttribute('transform', `translate(${(s.x + dx).toFixed(2)} ${(s.y + dy).toFixed(2)}) rotate(${s.r.toFixed(2)}) scale(${Math.max(s.s, .001).toFixed(3)})`);
      sp.g.setAttribute('opacity', s.o.toFixed(3));
      sp.g.setAttribute('visibility', s.o < .005 ? 'hidden' : 'visible');
    }
    // dotted -> solid research links, gone once the people have folded together
    const conn = ss(0, .1, t), lo = (.35 + .45 * conn) * (1 - ss(.1, .17, t));
    for (const l of researchLinks) {
      const a = users[l.a].cur, b = users[l.b].cur;
      l.el.setAttribute('x1', a.x); l.el.setAttribute('y1', a.y); l.el.setAttribute('x2', b.x); l.el.setAttribute('y2', b.y);
      l.el.setAttribute('stroke-dasharray', `${(1.5 + 8 * conn).toFixed(2)} ${(6 * (1 - conn)).toFixed(2)}`);
      l.el.setAttribute('opacity', lo.toFixed(3));
    }
    for (const l of detailLinks) {
      const c = l.d.cur;
      l.el.setAttribute('x2', c.x); l.el.setAttribute('y2', c.y); l.el.setAttribute('x1', 0); l.el.setAttribute('y1', 0);
      l.el.setAttribute('opacity', (c.o * .55 * (1 - ss(.26, .32, t))).toFixed(3));
    }
    for (const l of testLinks) {
      const c = l.d.cur;
      l.el.setAttribute('x2', c.x); l.el.setAttribute('y2', c.y); l.el.setAttribute('x1', 0); l.el.setAttribute('y1', 0);
      l.el.setAttribute('opacity', (c.o * .5).toFixed(3));
    }

    const x = lerp(tx0, tx1, t);
    thumb.setAttribute('cx', x); thumb.setAttribute('cy', ty);
    ring.setAttribute('cx', x); ring.setAttribute('cy', ty);
    grip.setAttribute('transform', `translate(${x} ${ty})`);
    fill.setAttribute('x2', x);
    nodes.forEach((n, i) => n.setAttribute('class', 'idea-slider__node' + (t >= i / 4 - .001 ? ' is-on' : '')));
    const st = STAGES[stageOf(t)];
    caption.textContent = `${stageOf(t) + 1}. ${st.name}${st.sub ? ' · ' + st.sub : ''}`;
    hint.setAttribute('opacity', interacted ? 0 : 1);
  }

  function frame(now) {
    raf = 0;
    cur += (target - cur) * .16;
    if (Math.abs(target - cur) < .0004) cur = target;
    draw(now);
    if (inView) raf = requestAnimationFrame(frame);
  }
  function kick() { if (!raf && inView) raf = requestAnimationFrame(frame); }
  function setTarget(v) {
    target = clamp(v);
    if (reduce) { cur = target; draw(performance.now()); }
    const st = STAGES[stageOf(target)];
    slider.setAttribute('aria-valuenow', Math.round(target * 100));
    slider.setAttribute('aria-valuetext', `Step ${stageOf(target) + 1} of 5: ${st.name}${st.sub ? ', ' + st.sub : ''}`);
    kick();
  }

  // ---- input -------------------------------------------------------------
  let dragging = false;
  const fromEvent = e => {
    const r = svg.getBoundingClientRect();
    const v = (e.clientX - r.left - tx0) / (tx1 - tx0);
    const n = Math.round(v * 4) / 4;
    return Math.abs(v - n) < .02 ? n : v; // magnet to the five steps
  };
  slider.addEventListener('pointerdown', e => {
    dragging = true; interacted = true;
    try { slider.setPointerCapture(e.pointerId); } catch (_) {}
    setTarget(fromEvent(e));
    slider.focus({ preventScroll: true });
    e.preventDefault();
  });
  slider.addEventListener('pointermove', e => { if (dragging) setTarget(fromEvent(e)); });
  const end = () => { dragging = false; };
  slider.addEventListener('pointerup', end);
  slider.addEventListener('pointercancel', end);
  slider.addEventListener('keydown', e => {
    const step = { ArrowRight: .05, ArrowUp: .05, ArrowLeft: -.05, ArrowDown: -.05, PageUp: .25, PageDown: -.25 }[e.key];
    if (step !== undefined) { interacted = true; setTarget(target + step); e.preventDefault(); }
    else if (e.key === 'Home') { interacted = true; setTarget(0); e.preventDefault(); }
    else if (e.key === 'End') { interacted = true; setTarget(1); e.preventDefault(); }
  });

  if ('IntersectionObserver' in window) {
    new IntersectionObserver(entries => { inView = entries[0].isIntersecting; if (inView) kick(); }).observe(host);
  }
  if ('ResizeObserver' in window) new ResizeObserver(layout).observe(host);
  else window.addEventListener('resize', layout);

  layout();
  kick();
})();
