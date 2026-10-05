/* Writing page hero: floating idea bubbles -> inline row -> dots -> blinking grid, driven by an SVG slider. */
(function () {
  'use strict';
  const host = document.getElementById('idea-hero-svg');
  if (!host) return;

  const NS = 'http://www.w3.org/2000/svg';
  const reduce = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
  const DOTS = 12; // per topic: 4 x 3 block in the grid

  const circ = (cx, cy, r) => `M${cx - r} ${cy}a${r} ${r} 0 1 0 ${2 * r} 0a${r} ${r} 0 1 0 ${-2 * r} 0z`;
  const TOPICS = [
    { name: 'AI', color: '#0b2a5b', d: ['M8 6h8a2 2 0 0 1 2 2v8a2 2 0 0 1-2 2H8a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2z', 'M10 10h4v4h-4z', 'M9 3v3M15 3v3M9 18v3M15 18v3M3 9h3M3 15h3M18 9h3M18 15h3'] },
    { name: 'Design', color: '#103672', d: ['M12 2.5l7 9-7 10-7-10z', 'M12 13v8.5', circ(12, 11, 1.6)] },
    { name: 'UX', color: '#14479f', d: ['M5 3l14 7.5-6.2 1.9L10.5 19z'] },
    { name: 'Design Thinking', color: '#1a5bc4', d: ['M9 18h6M10 21h4', 'M12 3a6 6 0 0 0-4 10.5c.7.7 1 1.5 1 2.5h6c0-1 .3-1.8 1-2.5A6 6 0 0 0 12 3z'] },
    { name: 'GenAI', color: '#2468d2', d: ['M12 3l1.8 5.2L19 10l-5.2 1.8L12 17l-1.8-5.2L5 10l5.2-1.8z', 'M19 16l.7 2 2 .7-2 .7-.7 2-.7-2-2-.7 2-.7z'] },
    { name: 'Design Systems', color: '#2f74e0', d: ['M4 4h6v6H4zM14 4h6v6h-6zM4 14h6v6H4zM14 14h6v6h-6z'] },
    { name: 'Interaction Design', color: '#4a88e6', d: [circ(12, 12, 2), 'M7.8 7.8a6 6 0 0 0 0 8.4M16.2 7.8a6 6 0 0 1 0 8.4M4.9 4.9a10 10 0 0 0 0 14.2M19.1 4.9a10 10 0 0 1 0 14.2'] },
    { name: 'Art', color: '#5f98ec', d: ['M12 2C6.5 2 2 6.5 2 12s4.5 10 10 10c.93 0 1.65-.75 1.65-1.69 0-.44-.18-.84-.44-1.12-.29-.29-.44-.65-.44-1.13a1.64 1.64 0 0 1 1.67-1.67h2c3.05 0 5.55-2.5 5.55-5.55C21.97 6.01 17.46 2 12 2Z', circ(13.5, 6.5, .6), circ(17.5, 10.5, .6), circ(8.5, 7.5, .6), circ(6.5, 12.5, .6)] },
    { name: 'Code + Design', color: '#79aaf0', d: ['M8 7l-5 5 5 5M16 7l5 5-5 5M14 4l-4 16'] },
    { name: 'User Research', color: '#93bbf4', d: [circ(10.5, 10.5, 6.5), 'M15.3 15.3L21 21'] }
  ];
  const N = TOPICS.length;

  const svg = document.createElementNS(NS, 'svg');
  const mk = (tag, attrs, parent) => {
    const el = document.createElementNS(NS, tag);
    for (const k in attrs) el.setAttribute(k, attrs[k]);
    (parent || svg).appendChild(el);
    return el;
  };
  svg.setAttribute('class', 'idea-hero__svg');
  svg.setAttribute('role', 'group');
  svg.setAttribute('aria-label', 'Interactive illustration of article topics. Use the slider to organize floating ideas into a grid.');
  host.appendChild(svg);

  // Layers, back to front: network lines, article cards, dots, bubbles, icons, labels.
  const lineLayer = mk('g', { 'aria-hidden': 'true', class: 'idea-hero__lines' });
  const cardLayer = mk('g', { 'aria-hidden': 'true' });
  const dotLayer = mk('g', { 'aria-hidden': 'true' });
  const dots = [];
  for (let i = 0; i < N; i++) {
    for (let k = 0; k < DOTS; k++) {
      const a = k * 2.39996;
      const m = Math.sqrt(k + .5);
      dots.push({
        i, k,
        ox: Math.cos(a) * m, oy: Math.sin(a) * m,
        base: .62 + ((k * 37 + i * 11) % 10) / 26,
        ph: ((k * 53) % 17) / 17 * .9,
        el: mk('circle', { r: 0, fill: TOPICS[i].color, opacity: 0 }, dotLayer),
        card: mk('rect', { fill: 'none', stroke: TOPICS[i].color, 'stroke-width': 1.5, opacity: 0 }, cardLayer),
        x: 0, y: 0
      });
    }
  }
  // Network: ring links between neighbouring dots, plus a few spokes to the centre.
  const links = [];
  for (let i = 0; i < N; i++) {
    for (let k = 0; k < DOTS; k++) {
      links.push({ i, a: k, b: (k + 1) % DOTS, el: mk('line', { stroke: TOPICS[i].color, 'stroke-width': 1 }, lineLayer) });
      if (k % 3 === 0) links.push({ i, a: k, b: -1, el: mk('line', { stroke: TOPICS[i].color, 'stroke-width': 1 }, lineLayer) });
    }
  }

  const bubbleLayer = mk('g', { 'aria-hidden': 'true' });
  const bubbles = TOPICS.map((t, i) => {
    const g = mk('g', {}, bubbleLayer);
    const c = mk('circle', { r: 30, fill: '#fff', stroke: t.color, 'stroke-width': 2 }, g);
    return { g, c, f: .6 + (i * 7 % 10) / 14, ph: i * 1.7, rs: .8 + ((i * 5) % 7) / 20 };
  });
  const iconLayer = mk('g', { 'aria-hidden': 'true' });
  const labelLayer = mk('g', { 'aria-hidden': 'true' });
  TOPICS.forEach((t, i) => {
    const ic = mk('g', { fill: 'none', stroke: '#14479f', 'stroke-width': 1.8, 'stroke-linecap': 'round', 'stroke-linejoin': 'round' }, iconLayer);
    t.d.forEach(d => mk('path', { d }, ic));
    const label = mk('text', { 'text-anchor': 'middle', class: 'idea-hero__label' }, labelLayer);
    label.textContent = t.name;
    bubbles[i].ic = ic; bubbles[i].label = label;
  });

  // Slider
  const slider = mk('g', { class: 'idea-slider', role: 'slider', tabindex: 0, 'aria-label': 'Organize ideas', 'aria-valuemin': 0, 'aria-valuemax': 100, 'aria-valuenow': 0, 'aria-valuetext': 'Floating ideas' });
  const track = mk('line', { class: 'idea-slider__track', 'stroke-linecap': 'round', 'stroke-width': 6 }, slider);
  const fill = mk('line', { class: 'idea-slider__fill', 'stroke-linecap': 'round', 'stroke-width': 6 }, slider);
  const node = mk('circle', { class: 'idea-slider__node', r: 7, 'stroke-width': 2.5 }, slider);
  const hit = mk('rect', { fill: 'transparent', height: 44 }, slider);
  const ring = mk('circle', { class: 'idea-slider__ring', r: 19, fill: 'none', 'stroke-width': 2 }, slider);
  const thumb = mk('circle', { class: 'idea-slider__thumb', r: 12, 'stroke-width': 3 }, slider);
  const grip = mk('path', { class: 'idea-slider__grip', d: 'M-3 -4v8M0 -4v8M3 -4v8', 'stroke-width': 1.4, 'stroke-linecap': 'round' }, slider);
  const capL = mk('text', { class: 'idea-slider__cap', 'text-anchor': 'start' }, slider); capL.textContent = 'Ideas';
  const capM = mk('text', { class: 'idea-slider__cap', 'text-anchor': 'middle' }, slider); capM.textContent = 'Thoughts / musing';
  const capR = mk('text', { class: 'idea-slider__cap', 'text-anchor': 'end' }, slider); capR.textContent = 'Articles';
  const hint = mk('text', { class: 'idea-slider__cap idea-slider__hint', 'text-anchor': 'middle' }, slider); hint.textContent = 'Drag to organize the ideas';

  // Layout
  let W = 0, H = 0, A = [], B = [], G = [], GI = [], GL = [], rA = [], rB = 0, tx0 = 0, tx1 = 0, ty = 0, mobile = false;
  let bc = 4, br = 3, gapX = 28, gapY = 31, cardW = 22, cardH = 26, gridDot = 4, gridIcon = 22, orb = 1.8;
  const jit = (i, s) => (((i * 9301 + s * 49297) % 233280) / 233280) - .5;

  function layout() {
    W = Math.max(280, Math.floor(host.clientWidth));
    mobile = W < 700;
    const cw = Math.min(W - 32, 1100);
    const left = (W - cw) / 2;
    const top = mobile ? 12 : 24;
    const cols = mobile ? 2 : 5, rows = mobile ? 5 : 2;
    const cellW = cw / cols, cellH = mobile ? 80 : 148;
    const rowCols = mobile ? 5 : 10;
    H = top + cellH * rows + (mobile ? 72 : 90);

    // Article cards: 4 x 3 per topic on desktop, 6 x 2 on phones.
    bc = mobile ? 6 : 4; br = DOTS / bc;
    cardW = mobile ? 14 : 22; cardH = mobile ? 17 : 26;
    gapX = mobile ? 18 : 28; gapY = mobile ? 21 : 31;
    gridDot = mobile ? 3 : 4; gridIcon = mobile ? 16 : 22;
    orb = mobile ? 1.6 : 1.8;

    svg.setAttribute('viewBox', `0 0 ${W} ${H}`);
    svg.setAttribute('width', W);
    svg.setAttribute('height', H);

    A = []; B = []; G = []; GI = []; GL = []; rA = [];
    const baseR = mobile ? 24 : 32;
    const spacing = cw / rowCols;
    rB = Math.min(mobile ? 26 : 30, spacing * .42);
    const rowMidY = top + (cellH * rows) / 2;
    for (let i = 0; i < N; i++) {
      const c = i % cols, r = Math.floor(i / cols);
      const cx = left + (c + .5) * cellW, cellTop = top + r * cellH, cy = cellTop + cellH / 2;
      rA.push(baseR * bubbles[i].rs);
      A.push({ x: cx + jit(i, 1) * cellW * (mobile ? .25 : .4), y: cy - 4 + jit(i, 2) * (mobile ? 10 : 36) });
      if (mobile) { G.push({ x: cx, y: cellTop + 56 }); GI.push({ x: cx, y: cellTop + 8 }); GL.push(cellTop + 30); }
      else { G.push({ x: cx, y: cellTop + 102 }); GI.push({ x: cx, y: cellTop + 14 }); GL.push(cellTop + 44); }
      const rc = i % rowCols, rr = Math.floor(i / rowCols);
      B.push({ x: left + (rc + .5) * spacing, y: mobile ? rowMidY + (rr - .5) * 84 : rowMidY });
    }
    ty = H - 44;
    tx0 = left + 8; tx1 = left + cw - 8;
    const mid = (tx0 + tx1) / 2;
    track.setAttribute('x1', tx0); track.setAttribute('x2', tx1); track.setAttribute('y1', ty); track.setAttribute('y2', ty);
    fill.setAttribute('x1', tx0); fill.setAttribute('y1', ty); fill.setAttribute('y2', ty);
    hit.setAttribute('x', tx0 - 20); hit.setAttribute('y', ty - 22); hit.setAttribute('width', tx1 - tx0 + 40);
    node.setAttribute('cx', mid); node.setAttribute('cy', ty);
    capL.setAttribute('x', tx0 - 8); capL.setAttribute('y', ty + 30);
    capM.setAttribute('x', mid); capM.setAttribute('y', ty + 30);
    capR.setAttribute('x', tx1 + 8); capR.setAttribute('y', ty + 30);
    hint.setAttribute('x', mid); hint.setAttribute('y', ty - 26);
    draw(performance.now());
  }

  // State
  let target = 0, cur = 0, inView = true, raf = 0, interacted = false;
  const lerp = (a, b, t) => a + (b - a) * t;
  const clamp = (v, a = 0, b = 1) => Math.min(b, Math.max(a, v));
  const ss = (a, b, v) => { const t = clamp((v - a) / (b - a)); return t * t * (3 - 2 * t); };

  function stageText(t) {
    return t < .1 ? 'Floating ideas' : t < .3 ? 'Lining up' : t < .45 ? 'Dissolving into dots' : t < .55 ? 'Thoughts and musings' : t < .95 ? 'Gathering into articles' : 'Articles, organized';
  }

  function draw(now) {
    const t = cur;
    const p1 = ss(0, .3, t), p2 = ss(.25, .5, t), p3 = ss(.55, 1, t), pCard = ss(.8, 1, t), blink = ss(.92, 1, t);
    const amp = reduce ? 0 : 11 * (1 - p1);
    const spin = reduce ? 0 : now * .00022;

    const P = [];
    for (let i = 0; i < N; i++) {
      const b = bubbles[i];
      const dx = amp * Math.sin(now * .0007 * b.f + b.ph), dy = amp * Math.cos(now * .0009 * b.f + b.ph * 1.3);
      const x = lerp(A[i].x + dx, B[i].x, p1), y = lerp(A[i].y + dy, B[i].y, p1);
      const r0 = lerp(rA[i], rB, p1);
      const r = r0 * (1 - .35 * p2);
      P.push({ x, y, r, r0 });
      b.g.setAttribute('opacity', (1 - p2).toFixed(3));
      b.g.setAttribute('visibility', p2 >= 1 ? 'hidden' : 'visible');
      b.c.setAttribute('cx', x); b.c.setAttribute('cy', y); b.c.setAttribute('r', r);

      // Icon: inside the bubble, then back above the topic's article block.
      const io = Math.max(1 - p2, ss(.8, 1, t));
      const ix = lerp(x, GI[i].x, p3), iy = lerp(y, GI[i].y, p3);
      const is = lerp(r0 * 1.15, gridIcon, p3) / 24;
      b.ic.setAttribute('transform', `translate(${ix} ${iy}) scale(${is}) translate(-12 -12)`);
      b.ic.setAttribute('opacity', io.toFixed(3));

      const lo = Math.max(1 - clamp(p1 * 2.2), p3);
      const lx = lerp(x, G[i].x, p3), ly = lerp(y + r0 * orb + 10, GL[i], p3);
      b.label.setAttribute('x', lx); b.label.setAttribute('y', ly);
      b.label.setAttribute('opacity', lo.toFixed(3));
    }

    for (const d of dots) {
      const p = P[d.i];
      // Network ring around the bubble, contracting into a cluster as the bubble dissolves.
      const ang = d.k / DOTS * 6.2832 + d.i * 1.3 + spin * (d.i % 2 ? 1 : -1);
      const rad = p.r0 * (1.25 + (orb - 1.25) * ((d.k * .618 + d.i * .13) % 1));
      const ox = lerp(Math.cos(ang) * rad, d.ox * p.r * .26, p2), oy = lerp(Math.sin(ang) * rad, d.oy * p.r * .26, p2);
      const c = d.k % bc, r = Math.floor(d.k / bc);
      const gx = G[d.i].x + (c - (bc - 1) / 2) * gapX, gy = G[d.i].y + (r - (br - 1) / 2) * gapY;
      d.x = lerp(p.x + ox, gx, p3); d.y = lerp(p.y + oy, gy, p3);
      d.el.setAttribute('cx', d.x.toFixed(2));
      d.el.setAttribute('cy', d.y.toFixed(2));
      d.el.setAttribute('r', lerp(3, gridDot, p3).toFixed(2));
      let o = d.base;
      if (blink > 0 && !reduce) {
        const w = .5 + .5 * Math.sin(now * .0026 + d.i * .9 + d.ph * 3);
        o *= 1 - blink * .72 * (1 - w);
      }
      d.el.setAttribute('opacity', o.toFixed(3));
      d.card.setAttribute('x', (d.x - cardW / 2).toFixed(2));
      d.card.setAttribute('y', (d.y - cardH / 2).toFixed(2));
      d.card.setAttribute('width', cardW); d.card.setAttribute('height', cardH); d.card.setAttribute('rx', 3);
      d.card.setAttribute('opacity', (pCard * Math.max(o, .45)).toFixed(3));
    }

    const lineO = .38 * (1 - ss(.08, .4, t));
    lineLayer.setAttribute('visibility', lineO <= .002 ? 'hidden' : 'visible');
    if (lineO > .002) {
      for (const l of links) {
        const a = dots[l.i * DOTS + l.a];
        const bx = l.b < 0 ? P[l.i].x : dots[l.i * DOTS + l.b].x, by = l.b < 0 ? P[l.i].y : dots[l.i * DOTS + l.b].y;
        l.el.setAttribute('x1', a.x.toFixed(1)); l.el.setAttribute('y1', a.y.toFixed(1));
        l.el.setAttribute('x2', bx.toFixed(1)); l.el.setAttribute('y2', by.toFixed(1));
      }
      lineLayer.setAttribute('opacity', lineO.toFixed(3));
    }

    const x = lerp(tx0, tx1, t);
    thumb.setAttribute('cx', x); thumb.setAttribute('cy', ty);
    ring.setAttribute('cx', x); ring.setAttribute('cy', ty);
    grip.setAttribute('transform', `translate(${x} ${ty})`);
    fill.setAttribute('x2', x);
    node.setAttribute('class', 'idea-slider__node' + (t >= .499 ? ' is-on' : ''));
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

  function setTarget(v, announce) {
    target = clamp(v);
    if (reduce) { cur = target; draw(performance.now()); }
    if (announce !== false) {
      slider.setAttribute('aria-valuenow', Math.round(target * 100));
      slider.setAttribute('aria-valuetext', stageText(target));
    }
    kick();
  }

  // Pointer + keyboard
  let dragging = false;
  const fromEvent = e => {
    const r = svg.getBoundingClientRect();
    const v = (e.clientX - r.left - tx0) / (tx1 - tx0);
    return Math.abs(v - .5) < .025 ? .5 : v; // magnet to the middle node
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

  // Only animate while on screen
  if ('IntersectionObserver' in window) {
    new IntersectionObserver(entries => {
      inView = entries[0].isIntersecting;
      if (inView) kick();
    }).observe(host);
  }
  if ('ResizeObserver' in window) new ResizeObserver(layout).observe(host);
  else window.addEventListener('resize', layout);

  layout();
  kick();
})();
