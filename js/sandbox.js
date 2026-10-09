/* Experiments hero: a small sandbox that hosts canvas experiments. Add an entry to EXPERIMENTS to showcase another. */
(function () {
  'use strict';
  const canvas = document.getElementById('sandbox-canvas');
  if (!canvas) return;
  const ctx = canvas.getContext('2d');
  const reduce = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
  const NAVY = '11, 42, 91', BLUE = '0, 174, 239', ORANGE = '217, 74, 34';
  const $ = (s) => document.querySelector(s);
  const nameEl = $('#sandbox-name'), descEl = $('#sandbox-desc'), countEl = $('#sandbox-count');
  const ptr = { x: -999, y: -999, sx: 0, sy: 0, active: false };
  let w = 0, h = 0, dpr = 1, cur = 0, state = null, raf = 0, inView = true, last = 0;

  const EXPERIMENTS = [
    {
      name: 'Magnetic dots',
      desc: 'Move your cursor through the field. The dots push away, then spring back.',
      init() {
        const sp = w < 600 ? 22 : 26, dots = [];
        for (let y = sp / 2; y < h; y += sp) for (let x = sp / 2; x < w; x += sp) dots.push({ x0: x, y0: y, x, y, vx: 0, vy: 0 });
        return { dots };
      },
      frame(s) {
        ctx.fillStyle = `rgb(${NAVY})`; ctx.fillRect(0, 0, w, h);
        for (const d of s.dots) {
          if (!reduce) {
            const dx = d.x - ptr.x, dy = d.y - ptr.y, dist = Math.hypot(dx, dy);
            if (dist < 120 && dist > .1) { const f = (1 - dist / 120) * 5.5; d.vx += dx / dist * f; d.vy += dy / dist * f; }
            d.vx += (d.x0 - d.x) * .09; d.vy += (d.y0 - d.y) * .09;
            d.vx *= .82; d.vy *= .82; d.x += d.vx; d.y += d.vy;
          }
          const off = Math.min(1, Math.hypot(d.x - d.x0, d.y - d.y0) / 40);
          ctx.fillStyle = off > .05 ? `rgba(${BLUE}, ${.45 + off * .55})` : 'rgba(255,255,255,.28)';
          ctx.beginPath(); ctx.arc(d.x, d.y, 1.6 + off * 2.4, 0, 6.2832); ctx.fill();
        }
      }
    },
    {
      name: 'Orbit trails',
      desc: 'A swarm circles your cursor and leaves light trails behind.',
      init() {
        const ps = [];
        for (let i = 0; i < 110; i++) ps.push({ a: Math.random() * 6.28, r: 30 + Math.random() * Math.min(w, h) * .55, c: i % 7 === 0 ? ORANGE : i % 2 ? BLUE : '255,255,255' });
        ptr.sx = w / 2; ptr.sy = h / 2;
        ctx.fillStyle = `rgb(${NAVY})`; ctx.fillRect(0, 0, w, h);
        return { ps };
      },
      frame(s, dt) {
        const tx = ptr.active ? ptr.x : w / 2, ty = ptr.active ? ptr.y : h / 2;
        ptr.sx += (tx - ptr.sx) * .06; ptr.sy += (ty - ptr.sy) * .06;
        ctx.fillStyle = `rgba(${NAVY}, ${reduce ? 1 : .13})`; ctx.fillRect(0, 0, w, h);
        for (const p of s.ps) {
          if (!reduce) p.a += (dt / 1000) * (90 / (p.r + 40)) * 3;
          const x = ptr.sx + Math.cos(p.a) * p.r, y = ptr.sy + Math.sin(p.a) * p.r * .7;
          ctx.fillStyle = `rgba(${p.c}, .9)`; ctx.beginPath(); ctx.arc(x, y, 2, 0, 6.2832); ctx.fill();
        }
      }
    },
    {
      name: 'Ripples',
      desc: 'Click or tap anywhere to drop a ripple. They also appear on their own.',
      init() { return { rings: [{ x: w * .3, y: h * .5, t: 0, c: BLUE }, { x: w * .65, y: h * .4, t: -500, c: ORANGE }], next: 800, n: 0 }; },
      press(s, x, y) { s.rings.push({ x, y, t: 0, c: s.n++ % 3 ? BLUE : ORANGE }); },
      frame(s, dt) {
        ctx.fillStyle = `rgb(${NAVY})`; ctx.fillRect(0, 0, w, h);
        if (!reduce) {
          s.next -= dt;
          if (s.next < 0) { s.rings.push({ x: Math.random() * w, y: Math.random() * h, t: 0, c: s.n++ % 3 ? BLUE : ORANGE }); s.next = 900 + Math.random() * 900; }
        }
        s.rings = s.rings.filter((r) => r.t < 2600);
        for (const r of s.rings) {
          if (!reduce) r.t += dt;
          if (r.t < 0) continue;
          const k = r.t / 2600;
          for (let i = 0; i < 3; i++) {
            const kk = k - i * .08; if (kk <= 0) continue;
            ctx.strokeStyle = `rgba(${r.c}, ${(1 - kk) * .8})`; ctx.lineWidth = 2;
            ctx.beginPath(); ctx.arc(r.x, r.y, kk * Math.max(w, h) * .45, 0, 6.2832); ctx.stroke();
          }
        }
      }
    }
  ];

  function resize() {
    const r = canvas.getBoundingClientRect();
    dpr = window.devicePixelRatio || 1; w = r.width; h = r.height;
    canvas.width = Math.round(w * dpr); canvas.height = Math.round(h * dpr);
    ctx.setTransform(dpr, 0, 0, dpr, 0, 0);
    load(cur);
  }
  function load(i) {
    cur = (i + EXPERIMENTS.length) % EXPERIMENTS.length;
    const e = EXPERIMENTS[cur];
    state = e.init();
    nameEl.textContent = e.name; descEl.textContent = e.desc;
    countEl.textContent = `${String(cur + 1).padStart(2, '0')} / ${String(EXPERIMENTS.length).padStart(2, '0')}`;
    document.querySelectorAll('.sandbox__tab').forEach((t, n) => t.setAttribute('aria-pressed', String(n === cur)));
    if (reduce) { e.frame(state, 0); }
  }
  function loop(now) {
    raf = 0;
    const dt = Math.min(50, now - (last || now)); last = now;
    EXPERIMENTS[cur].frame(state, dt);
    if (inView && !reduce) raf = requestAnimationFrame(loop);
  }
  const kick = () => { if (!raf && inView && !reduce) { last = 0; raf = requestAnimationFrame(loop); } };

  // Tabs + arrows
  const tabs = $('#sandbox-tabs');
  EXPERIMENTS.forEach((e, i) => {
    const b = document.createElement('button');
    b.type = 'button'; b.className = 'sandbox__tab'; b.textContent = String(i + 1).padStart(2, '0');
    b.setAttribute('aria-label', `Experiment ${i + 1}: ${e.name}`);
    b.addEventListener('click', () => { load(i); kick(); });
    tabs.appendChild(b);
  });
  $('#sandbox-prev').addEventListener('click', () => { load(cur - 1); kick(); });
  $('#sandbox-next').addEventListener('click', () => { load(cur + 1); kick(); });

  // Pointer
  const pos = (e) => { const r = canvas.getBoundingClientRect(); ptr.x = e.clientX - r.left; ptr.y = e.clientY - r.top; ptr.active = true; };
  canvas.addEventListener('pointermove', pos);
  canvas.addEventListener('pointerleave', () => { ptr.x = ptr.y = -999; ptr.active = false; });
  canvas.addEventListener('pointerdown', (e) => {
    pos(e);
    const ex = EXPERIMENTS[cur];
    if (ex.press) { ex.press(state, ptr.x, ptr.y); if (reduce) ex.frame(state, 0); }
  });

  if ('IntersectionObserver' in window) new IntersectionObserver((en) => { inView = en[0].isIntersecting; if (inView) kick(); }).observe(canvas);
  if ('ResizeObserver' in window) new ResizeObserver(() => { resize(); kick(); }).observe(canvas);
  else window.addEventListener('resize', () => { resize(); kick(); });
  resize(); kick();
})();
