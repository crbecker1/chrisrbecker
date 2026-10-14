/* The thinking shelf as an isometric room: a tall bookcase on the left, a desk with a laptop on the right.
   Books are real buttons (class .sbook, data-id) so notebooks.js can open them.
   World axes: x runs right and down, y runs left and down, z is up. Walls are at x = 0 and y = 0. */
(function () {
  'use strict';
  const NS = 'http://www.w3.org/2000/svg';
  const COS = Math.cos(Math.PI / 6), SIN = 0.5;
  const P = (x, y, z) => [(x - y) * COS, (x + y) * SIN - z];
  const C = { navy: '#0b2a5b', ink: '#06183a', b700: '#14479f', b600: '#1a5bc4', b100: '#e4eefc', orange: '#c23b17', logo: '#00AEEF', cream: '#f4efe4', wall: '#e9f1fd', wall2: '#d6e4f7', floor: '#c4d7f0' };

  function shade(hex, f) {
    let h = String(hex).replace('#', '');
    if (h.length === 3) h = h.split('').map((c) => c + c).join('');
    const n = [0, 2, 4].map((i) => parseInt(h.slice(i, i + 2), 16));
    const out = n.map((v) => Math.round(f < 1 ? v * f : v + (255 - v) * (f - 1)));
    return '#' + out.map((v) => Math.max(0, Math.min(255, v)).toString(16).padStart(2, '0')).join('');
  }
  const lastHex = (s, fb) => { const m = String(s || '').match(/#[0-9a-f]{3,6}/gi); return m ? m[m.length - 1] : fb; };

  function el(tag, attrs, parent) {
    const e = document.createElementNS(NS, tag);
    for (const k in attrs) e.setAttribute(k, attrs[k]);
    if (parent) parent.appendChild(e);
    return e;
  }
  const pts = (list) => list.map(([x, y, z]) => P(x, y, z).map((v) => v.toFixed(1)).join(',')).join(' ');
  function poly(g, list, fill, o = {}) {
    return el('polygon', { points: pts(list), fill, stroke: o.stroke || C.ink, 'stroke-width': o.sw || 1.2, 'stroke-linejoin': 'round', class: o.cls || '' }, g);
  }
  function line(g, a, b, stroke, sw) { const [x1, y1] = P(...a), [x2, y2] = P(...b); return el('line', { x1, y1, x2, y2, stroke, 'stroke-width': sw, 'stroke-linecap': 'round' }, g); }
  function box(g, [x0, x1, y0, y1, z0, z1], color, o = {}) {
    poly(g, [[x0, y1, z0], [x1, y1, z0], [x1, y1, z1], [x0, y1, z1]], shade(color, .72), o);     // side (+y)
    const f = poly(g, [[x1, y0, z0], [x1, y1, z0], [x1, y1, z1], [x1, y0, z1]], color, o);       // front (+x)
    poly(g, [[x0, y0, z1], [x1, y0, z1], [x1, y1, z1], [x0, y1, z1]], shade(color, 1.2), o);      // top
    return f;
  }
  function rand(seed) { return () => { seed |= 0; seed = (seed + 0x6D2B79F5) | 0; let t = Math.imul(seed ^ (seed >>> 15), 1 | seed); t = (t + Math.imul(t ^ (t >>> 7), 61 | t)) ^ t; return ((t ^ (t >>> 14)) >>> 0) / 4294967296; }; }
  // A circle or arc drawn on a wall plane (y = 0): world x and z.
  const wallArc = (cx, cz, r, a0, a1, n = 24) => Array.from({ length: n + 1 }, (_, i) => { const a = a0 + (a1 - a0) * i / n; return [cx + r * Math.cos(a), 0, cz + r * Math.sin(a)]; });

  function build(host, data) {
    host.innerHTML = '';
    const svg = el('svg', { class: 'scene__svg', role: 'group', 'aria-label': 'An isometric study: a bookcase of sketchbooks and inspiring books beside a desk with a laptop. Pick a book to open it.' });
    host.appendChild(svg);
    const root = el('g', {}, svg);

    // ---- Room ------------------------------------------------------------
    const W = 560, DP = 300, HW = 520;
    const room = el('g', { 'aria-hidden': 'true' }, root);
    poly(room, [[0, 0, 0], [W, 0, 0], [W, DP, 0], [0, DP, 0]], C.floor);
    for (let y = 30; y < DP; y += 30) line(room, [0, y, 0], [W, y, 0], shade(C.floor, .9), 1);
    poly(room, [[0, 0, 0], [W, 0, 0], [W, 0, HW], [0, 0, HW]], C.wall);
    poly(room, [[0, 0, 0], [0, DP, 0], [0, DP, HW], [0, 0, HW]], C.wall2);
    poly(room, [[0, 0, 0], [W, 0, 0], [W, 0, 14], [0, 0, 14]], shade(C.wall, .9), { sw: .8 });

    // Window with a moon and bushes
    const wx0 = 205, wx1 = 465, wz0 = 175, wz1 = 345, wr = (wx1 - wx0) / 2, wcx = (wx0 + wx1) / 2;
    const win = el('g', {}, room);
    box(win, [0, 22, -16, 6, wz0 - 10, wz0 - 2], C.cream);
    const outline = [[wx0, 0, wz0], [wx1, 0, wz0], ...wallArc(wcx, wz1, wr, 0, Math.PI)];
    poly(win, outline, '#d9ecff', { stroke: C.orange, sw: 7 });
    poly(win, wallArc(390, 395, 34, 0, Math.PI * 2, 28), '#fff3d6', { stroke: C.orange, sw: 1.6 });
    poly(win, [[wx0 + 6, 0, wz0 + 4], [wx0 + 50, 0, wz0 + 4], [wx0 + 42, 0, wz0 + 34], [wx0 + 28, 0, wz0 + 26], [wx0 + 14, 0, wz0 + 40]], C.navy, { stroke: C.navy, sw: 1 });
    poly(win, [[wx1 - 80, 0, wz0 + 4], [wx1 - 6, 0, wz0 + 4], [wx1 - 6, 0, wz0 + 52], [wx1 - 30, 0, wz0 + 38], [wx1 - 50, 0, wz0 + 56], [wx1 - 66, 0, wz0 + 30]], C.navy, { stroke: C.navy, sw: 1 });
    line(win, [wcx, 0, wz0], [wcx, 0, wz1 + wr], C.orange, 6);
    line(win, [wx0, 0, wz0 + 56], [wx1, 0, wz0 + 56], C.orange, 6);
    line(win, [wx0, 0, wz0 + 112], [wx1, 0, wz0 + 112], C.orange, 6);
    poly(win, outline, 'none', { stroke: C.orange, sw: 9 });

    // Poster with the cloud logo
    const px0 = 70, pz1 = 300, pw = 96, ph = 70;
    const poster = el('g', {}, room);
    poly(poster, [[px0, 0, pz1 - ph], [px0 + pw, 0, pz1 - ph], [px0 + pw, 0, pz1], [px0, 0, pz1]], C.navy, { stroke: C.ink, sw: 2 });
    const [bx, by] = P(px0, 0, pz1);
    const img = el('g', { transform: `matrix(${COS} ${SIN} 0 1 ${bx} ${by})` }, poster);
    el('image', { href: 'images/logo/Logo.svg', x: 8, y: 17, width: pw - 16, height: (pw - 16) * 83 / 237 }, img);

    // ---- Bookcase ---------------------------------------------------------
    const D = 70, y0 = 20, y1 = 260, T = 12, BT = 12, TOP = 14, BOT = 14, CH = 80, NC = 4;
    const H = BOT + NC * CH + (NC - 1) * BT + TOP;
    const inner0 = y0 + T, inner1 = y1 - T;               // interior y range
    const zb = (i) => BOT + i * (CH + BT);
    poly(root, [[0, 0, 0], [D + 30, 0, 0], [D + 30, y1, 0], [0, y1, 0]], 'rgba(11,42,91,.14)', { stroke: 'none' });
    const cab = el('g', { 'aria-hidden': 'true' }, root);
    poly(cab, [[0, y1, 0], [D, y1, 0], [D, y1, H], [0, y1, H]], C.navy);                   // side
    poly(cab, [[D, y0, 0], [D, y1, 0], [D, y1, H], [D, y0, H]], C.b700);                    // front
    poly(cab, [[0, y0, H], [D, y0, H], [D, y1, H], [0, y1, H]], C.b600);                    // top
    // board fronts in orange
    for (let i = 1; i < NC; i++) poly(cab, [[D, y0 + T, zb(i) - BT], [D, y1 - T, zb(i) - BT], [D, y1 - T, zb(i)], [D, y0 + T, zb(i)]], C.orange, { sw: 1 });
    poly(cab, [[D, y0 + T, 0], [D, y1 - T, 0], [D, y1 - T, BOT], [D, y0 + T, BOT]], C.orange, { sw: 1 });

    const defs = el('defs', {}, svg);
    for (let i = 0; i < NC; i++) {
      const z0 = zb(i), z1 = z0 + CH;
      const open = [[D, inner0, z0], [D, inner1, z0], [D, inner1, z1], [D, inner0, z1]];
      const cp = el('clipPath', { id: `scene-clip-${i}` }, defs);
      el('polygon', { points: pts(open) }, cp);
      const g = el('g', { 'clip-path': `url(#scene-clip-${i})`, 'aria-hidden': 'true' }, root);
      poly(g, [[T, inner0, z0], [T, inner1, z0], [T, inner1, z1], [T, inner0, z1]], C.ink, { stroke: 'none' });          // back panel
      for (let k = 0; k < 40; k++) { const [px, py] = P(T, inner0 + 8 + (k % 10) * 24, z0 + 10 + Math.floor(k / 10) * 20); el('circle', { cx: px, cy: py, r: 1.2, fill: 'rgba(159,216,255,.35)' }, g); }
      poly(g, [[T, inner0, z0], [D, inner0, z0], [D, inner0, z1], [T, inner0, z1]], C.navy, { stroke: 'none' });        // far side wall
      poly(g, [[T, inner0, z0], [D, inner0, z0], [D, inner1, z0], [T, inner1, z0]], '#1d4f9f', { stroke: 'none' });     // shelf top
    }

    // Books (drawn after every compartment interior)
    const books = el('g', {}, root);
    const xF = D - 5, depth = 50;
    function standingBook(parent, { yEnd, w, h, z, color, label, cls, id, ariaLabel, sketch }) {
      const g = el('g', id ? { class: 'sbook', 'data-id': id, role: 'button', tabindex: 0, 'aria-label': ariaLabel } : { 'aria-hidden': 'true' }, parent);
      if (id) el('title', {}, g).textContent = ariaLabel.replace(/^Open (sketchbook|book): ?/i, '');
      const ya = yEnd - w, yb = yEnd;
      const front = box(g, [xF - depth, xF, ya, yb, z, z + h], color, { sw: 1 });
      front.setAttribute('class', 'face');
      const [bx, by] = P(xF, yb, z + h);
      const L = el('g', { transform: `matrix(${COS} ${-SIN} 0 1 ${bx} ${by})` }, g);
      if (sketch) {
        el('rect', { x: 0, y: 9, width: w, height: 1.6, fill: 'rgba(255,255,255,.18)' }, L);
        el('rect', { x: 0, y: h - 11, width: w, height: 1.6, fill: 'rgba(255,255,255,.18)' }, L);
        el('rect', { x: 2.5, y: 15, width: w - 5, height: 46, fill: C.cream, stroke: 'rgba(0,0,0,.4)', 'stroke-width': .5 }, L);
        const t = el('text', { transform: `translate(${w / 2} 38) rotate(90)`, 'text-anchor': 'middle', 'dominant-baseline': 'central', 'font-size': 7, 'font-family': 'Space Mono, monospace', 'font-weight': 700, fill: '#111' }, L);
        t.textContent = label;
      } else if (label) {
        el('rect', { x: 0, y: 7, width: w, height: 1.4, fill: 'rgba(255,255,255,.22)' }, L);
        el('rect', { x: 0, y: h - 9, width: w, height: 1.4, fill: 'rgba(255,255,255,.22)' }, L);
        const t = el('text', { transform: `translate(${w / 2} ${h / 2}) rotate(90)`, 'text-anchor': 'middle', 'dominant-baseline': 'central', 'font-size': Math.min(10, w * .62), 'font-family': 'Andada Pro, Georgia, serif', fill: cls || '#fff' }, L);
        t.textContent = label;
      }
      if (id) {
        const [p1x, p1y] = P(xF, yb, z), [p2x, p2y] = P(xF, ya, z), [p3x, p3y] = P(xF, ya, z + h), [p4x, p4y] = P(xF, yb, z + h);
        el('polygon', { class: 'sbook__ring', points: `${p1x},${p1y} ${p2x},${p2y} ${p3x},${p3y} ${p4x},${p4y}` }, g);
      }
      return g;
    }
    const decorPalette = ['#c23b17', '#00AEEF', '#e8dcc0', '#1a5bc4', '#f4efe4', '#4a5a75', '#d8a21f', '#0e8c8a'];
    // Decor is queued and painted back to front (low y first) so overlaps look right.
    function decorRow(queue, zBase, rnd, from, to, minH, maxH) {
      let y = to;
      while (y - 14 > from) {
        const w = 12 + Math.floor(rnd() * 10), h = minH + Math.floor(rnd() * (maxH - minH));
        if (y - w < from) break;
        const color = decorPalette[Math.floor(rnd() * decorPalette.length)], yEnd = y;
        queue.push({ y: yEnd, run: (g) => standingBook(g, { yEnd, w, h, z: zBase, color }) });
        y -= w + 1.5;
      }
    }
    function flatStack(queue, zBase, yStart, rnd, n) {
      let z = zBase;
      const layers = [];
      for (let k = 0; k < n; k++) {
        const th = 6 + Math.floor(rnd() * 5), wy = 52 + Math.floor(rnd() * 12), off = Math.floor(rnd() * 6);
        layers.push({ z, th, wy, off, color: decorPalette[Math.floor(rnd() * decorPalette.length)] });
        z += th;
      }
      queue.push({ y: yStart, run: (g) => layers.forEach((l) => box(g, [xF - 46 + l.off, xF - 2 + l.off, yStart + l.off / 2, yStart + l.wy + l.off / 2, l.z, l.z + l.th], l.color, { sw: 1 })) });
    }
    const paint = (queue, parent) => queue.sort((a, b) => a.y - b.y).forEach((q) => q.run(parent));

    const rnd = rand(11);
    // Row 0 (bottom): standing decor. Row 1: flat stacks and a few books. Row 2: inspiration. Row 3 (top): sketchbooks.
    const g0 = el('g', { 'aria-hidden': 'true', 'clip-path': 'url(#scene-clip-0)' }, books), q0 = [];
    flatStack(q0, zb(0), inner0 + 6, rnd, 4);
    decorRow(q0, zb(0), rnd, inner0 + 76, inner1 - 2, 54, 74);
    paint(q0, g0);
    const g1 = el('g', { 'aria-hidden': 'true', 'clip-path': 'url(#scene-clip-1)' }, books), q1 = [];
    flatStack(q1, zb(1), inner0 + 6, rnd, 5);
    flatStack(q1, zb(1), inner0 + 76, rnd, 3);
    decorRow(q1, zb(1), rnd, inner0 + 146, inner1 - 2, 48, 70);
    paint(q1, g1);

    const g2 = el('g', { 'clip-path': 'url(#scene-clip-2)' }, books);
    const q2 = []; flatStack(q2, zb(2), inner0 + 6, rnd, 3); paint(q2, el('g', { 'aria-hidden': 'true' }, g2));
    let yEnd = inner1 - 2;
    data.shelf.forEach((b) => {
      const w = Math.round(b.w * 0.4), h = Math.min(CH - 6, Math.round(b.h * 0.4));
      standingBook(g2, { yEnd, w, h, z: zb(2), color: lastHex(b.bg, '#4a5a75'), label: b.title, cls: b.fg, id: b.id, ariaLabel: `Open book: ${b.title}` });
      yEnd -= w + 1.5;
    });

    const g3 = el('g', { 'clip-path': 'url(#scene-clip-3)' }, books);
    yEnd = inner1 - 2;
    data.sketch.forEach((b, i) => {
      const w = [18, 20, 22][i % 3];
      standingBook(g3, { yEnd, w, h: CH - 6, z: zb(3), color: '#161616', label: `${b.year} ${b.label}`, sketch: true, id: b.id, ariaLabel: `Open sketchbook ${b.year}, ${b.label}` });
      yEnd -= w + 2;
    });
    // books are drawn right-to-left on screen = high y first; reorder so nearer (higher y) books paint last
    [g2, g3].forEach((grp) => { const kids = Array.from(grp.children).filter((c) => c.classList.contains('sbook')).reverse(); kids.forEach((k) => grp.appendChild(k)); });

    // ---- Desk -------------------------------------------------------------
    const dk = el('g', { 'aria-hidden': 'true' }, root);
    poly(dk, [[290, 28, 0], [510, 28, 0], [510, 190, 0], [290, 190, 0]], 'rgba(11,42,91,.14)', { stroke: 'none' });
    const DX0 = 305, DX1 = 485, DY0 = 40, DY1 = 150, DZ = 140;
    box(dk, [DX0, DX1, DY0, DY1, 0, DZ], C.b700, { sw: 1.2 });
    // drawer on the front face (x = DX1)
    poly(dk, [[DX1, DY0 + 12, DZ - 56], [DX1, DY1 - 12, DZ - 56], [DX1, DY1 - 12, DZ - 14], [DX1, DY0 + 12, DZ - 14]], C.b600, { sw: 1 });
    poly(dk, [[DX1, DY0 + 12, 14], [DX1, DY1 - 12, 14], [DX1, DY1 - 12, 70], [DX1, DY0 + 12, 70]], C.b600, { sw: 1 });
    [[DZ - 35], [42]].forEach(([z]) => { const [kx, ky] = P(DX1, (DY0 + DY1) / 2, z); el('circle', { cx: kx, cy: ky, r: 2.4, fill: C.cream, stroke: C.ink, 'stroke-width': .8 }, dk); });
    box(dk, [DX0 - 6, DX1 + 8, DY0 - 6, DY1 + 6, DZ, DZ + 10], C.cream);

    const top = DZ + 10;
    // laptop
    box(dk, [372, 440, 62, 130, top, top + 4], '#b8c4d8', { sw: 1 });
    poly(dk, [[384, 70, top + 4.2], [432, 70, top + 4.2], [432, 122, top + 4.2], [384, 122, top + 4.2]], '#2a3550', { stroke: 'none' });
    poly(dk, [[372, 62, top + 4], [372, 130, top + 4], [356, 130, top + 62], [356, 62, top + 62]], '#2a3550', { sw: 1.2 });
    poly(dk, [[371, 66, top + 8], [371, 126, top + 8], [358, 126, top + 58], [358, 66, top + 58]], '#e4eefc', { stroke: 'none' });
    [[18, 70, 118], [26, 70, 104], [34, 70, 122], [42, 70, 96]].forEach(([dz, ya, yb]) => line(dk, [370.5, ya + 4, top + dz], [370.5, yb - 14, top + dz], dz % 16 ? C.orange : C.b600, 2.2));
    // mug with steam
    const mug = (cx, cy, r, h, col) => {
      const [X, Y] = P(cx, cy, top), rx = r * 1.2247, ry = r * 0.7071;
      el('ellipse', { cx: X, cy: Y, rx, ry, fill: shade(col, .72), stroke: C.ink, 'stroke-width': 1 }, dk);
      el('rect', { x: X - rx, y: Y - h, width: rx * 2, height: h, fill: col, stroke: 'none' }, dk);
      el('line', { x1: X - rx, y1: Y - h, x2: X - rx, y2: Y, stroke: C.ink, 'stroke-width': 1 }, dk);
      el('line', { x1: X + rx, y1: Y - h, x2: X + rx, y2: Y, stroke: C.ink, 'stroke-width': 1 }, dk);
      el('ellipse', { cx: X, cy: Y - h, rx, ry, fill: shade(col, 1.15), stroke: C.ink, 'stroke-width': 1 }, dk);
      el('ellipse', { cx: X, cy: Y - h, rx: rx * .75, ry: ry * .75, fill: '#5a2410' }, dk);
      return [X, Y - h];
    };
    const [sx, sy] = mug(455, 60, 11, 14, C.orange);
    el('path', { d: `M${sx - 3} ${sy - 5}c-5 -6 5 -9 0 -15c-4 -5 3 -8 1 -12`, fill: 'none', stroke: C.ink, 'stroke-width': 1.2, 'stroke-linecap': 'round', opacity: .55 }, dk);
    mug(468, 134, 6, 8, C.b600);
    // notebook and pen
    box(dk, [418, 460, 82, 126, top, top + 3], '#fff', { sw: 1 });
    line(dk, [412, 100, top + 3.5], [452, 140, top + 3.5], C.navy, 2.2);

    // chair
    const ch = el('g', { 'aria-hidden': 'true' }, root);
    poly(ch, [[500, 62, 0], [590, 62, 0], [590, 150, 0], [500, 150, 0]], 'rgba(11,42,91,.12)', { stroke: 'none' });
    [[506, 70], [506, 128], [556, 70], [556, 128]].forEach(([lx, ly]) => box(ch, [lx, lx + 6, ly, ly + 6, 0, 84], C.navy, { sw: .8 }));
    box(ch, [500, 562, 64, 134, 84, 96], C.b600, { sw: 1.2 });
    const bk = [[564, 68, 96], [564, 130, 96], [564, 130, 170], ...wallArcX(564, 99, 170, 31)];
    poly(ch, bk, C.b700, { sw: 1.4 });
    function wallArcX(x, cy, cz, r) { return Array.from({ length: 13 }, (_, i) => { const a = Math.PI * i / 12; return [x, cy + r * Math.cos(a), cz + r * Math.sin(a) * 0.9]; }); }

    // ---- Frame the view ---------------------------------------------------
    const [lx0, ly0] = P(0, y1 + 8, 0), [rx0] = P(W * .8, 0, 0);
    const vbX = lx0 - 24, vbY = P(D, y0, H)[1] - 40, vbR = P(590, 60, 0)[0] + 48, vbB = P(590, 150, 0)[1] + 30;
    svg.setAttribute('viewBox', `${vbX.toFixed(0)} ${vbY.toFixed(0)} ${(vbR - vbX).toFixed(0)} ${(vbB - vbY).toFixed(0)}`);
    // clip the room to the view so the walls read as a cut-away
    const rc = el('clipPath', { id: 'scene-view' }, defs);
    el('rect', { x: vbX, y: vbY, width: vbR - vbX, height: vbB - vbY, rx: 18 }, rc);
    root.setAttribute('clip-path', 'url(#scene-view)');
  }

  window.ShelfScene = { build };
})();
