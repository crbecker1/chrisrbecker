/* Chris R. Becker — script.js */
(() => {
  'use strict';

  /* ------------------------------------------------------------------
     Config. Email is sent through FormSubmit (no backend needed).
     The first submission triggers a one-time activation email to the
     address below; click the link in it to enable the form.
  ------------------------------------------------------------------ */
  const OWNER_EMAIL = 'crbecker1@gmail.com';
  const FORMSUBMIT_URL = 'https://formsubmit.co/' + OWNER_EMAIL;
  const FORMSUBMIT_AJAX = 'https://formsubmit.co/ajax/' + OWNER_EMAIL;

  const $ = (sel, root = document) => root.querySelector(sel);
  const $$ = (sel, root = document) => [...root.querySelectorAll(sel)];

  /* ---------- Footer year ---------- */
  const year = $('#year');
  if (year) year.textContent = new Date().getFullYear();

  /* ---------- Mobile nav ---------- */
  const toggle = $('.nav__toggle');
  const links = $('#nav-menu');
  if (toggle && links) {
    const setOpen = (open) => {
      toggle.setAttribute('aria-expanded', String(open));
      links.classList.toggle('is-open', open);
    };
    toggle.addEventListener('click', () => setOpen(toggle.getAttribute('aria-expanded') !== 'true'));
    links.addEventListener('click', (e) => { if (e.target.closest('a')) setOpen(false); });
    document.addEventListener('keydown', (e) => { if (e.key === 'Escape') setOpen(false); });
  }

  /* ---------- Active nav link on scroll ---------- */
  const navAnchors = $$('.nav__secondary a[href^="#"]');
  const targets = navAnchors.map((a) => $(a.getAttribute('href'))).filter(Boolean);
  if ('IntersectionObserver' in window && targets.length) {
    const spy = new IntersectionObserver((entries) => {
      entries.forEach((en) => {
        if (!en.isIntersecting) return;
        navAnchors.forEach((a) => a.classList.toggle('is-active', a.getAttribute('href') === '#' + en.target.id));
      });
    }, { rootMargin: '-45% 0px -50% 0px' });
    targets.forEach((t) => spy.observe(t));
  }

  /* ---------- Reveal on scroll ---------- */
  const reveals = $$('.reveal');
  if ('IntersectionObserver' in window) {
    const io = new IntersectionObserver((entries) => {
      entries.forEach((en) => {
        if (en.isIntersecting) { en.target.classList.add('is-visible'); io.unobserve(en.target); }
      });
    }, { threshold: 0.12 });
    reveals.forEach((el) => io.observe(el));
  } else {
    reveals.forEach((el) => el.classList.add('is-visible'));
  }

  /* ---------- Shared: send a form to FormSubmit ---------- */
  const setStatus = (el, msg, kind) => {
    el.textContent = msg;
    el.classList.toggle('is-ok', kind === 'ok');
    el.classList.toggle('is-error', kind === 'error');
  };
  const validEmail = (v) => /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(v);

  /* ---------- Contact form ---------- */
  const contactForm = $('#contact-form');
  if (contactForm) {
    const status = $('#contact-status');
    contactForm.addEventListener('submit', async (e) => {
      e.preventDefault();
      const data = new FormData(contactForm);
      if (data.get('_honey')) return;
      if (!data.get('name').trim() || !validEmail(data.get('email').trim()) || !data.get('message').trim()) {
        setStatus(status, 'Please add your name, a valid email, and a message.', 'error');
        contactForm.reportValidity();
        return;
      }
      data.append('_subject', 'New message from chrisrbecker.com');
      data.append('_replyto', data.get('email'));
      data.append('_template', 'table');
      const btn = $('button[type="submit"]', contactForm);
      btn.disabled = true;
      setStatus(status, 'Sending…');
      try {
        const res = await fetch(FORMSUBMIT_AJAX, { method: 'POST', body: data, headers: { Accept: 'application/json' } });
        if (!res.ok) throw new Error('Request failed');
        contactForm.reset();
        setStatus(status, 'Thank you — your message is on its way. I’ll be in touch soon.', 'ok');
      } catch {
        setStatus(status, 'Something went wrong. Please email ' + OWNER_EMAIL + ' directly.', 'error');
      } finally {
        btn.disabled = false;
      }
    });
  }

  /* ==================================================================
     Wireframe sketch tool
     Shapes are stored in normalized (0–1) coordinates so the drawing
     survives resizing and the mobile ⇄ desktop breakpoint swap.
  ================================================================== */
  const canvas = $('#board');
  if (!canvas) return;

  const ctx = canvas.getContext('2d');
  const hint = $('#hint');
  const INK = '#12203a';
  const BLUE = '#1a5bc4';
  const ORANGE = '#c23b17';

  let ops = [];          // committed drawing operations
  let draft = null;      // operation currently being drawn
  let tool = 'pen';
  let w = 0, h = 0, dpr = 1;

  const resize = () => {
    const r = canvas.getBoundingClientRect();
    dpr = window.devicePixelRatio || 1;
    w = r.width; h = r.height;
    canvas.width = Math.round(w * dpr);
    canvas.height = Math.round(h * dpr);
    render();
  };

  function paintGrid(c, cw, ch) {
    c.fillStyle = '#fff';
    c.fillRect(0, 0, cw, ch);
    const step = cw < 500 ? 22 : 28;
    c.strokeStyle = 'rgba(26, 91, 196, .09)';
    c.lineWidth = 1;
    c.beginPath();
    for (let x = step; x < cw; x += step) { c.moveTo(x + .5, 0); c.lineTo(x + .5, ch); }
    for (let y = step; y < ch; y += step) { c.moveTo(0, y + .5); c.lineTo(cw, y + .5); }
    c.stroke();
  }

  function drawOp(c, op, cw, ch) {
    c.lineCap = 'round'; c.lineJoin = 'round';
    if (op.type === 'pen') {
      c.strokeStyle = ORANGE; c.lineWidth = 2.5;
      c.beginPath();
      op.pts.forEach(([x, y], i) => (i ? c.lineTo(x * cw, y * ch) : c.moveTo(x * cw, y * ch)));
      if (op.pts.length === 1) c.lineTo(op.pts[0][0] * cw + .1, op.pts[0][1] * ch);
      c.stroke();
      return;
    }
    const x = Math.min(op.a[0], op.b[0]) * cw;
    const y = Math.min(op.a[1], op.b[1]) * ch;
    const rw = Math.abs(op.b[0] - op.a[0]) * cw;
    const rh = Math.abs(op.b[1] - op.a[1]) * ch;
    if (rw < 2 && rh < 2) return;
    c.lineWidth = 2;
    if (op.type === 'box') {
      c.strokeStyle = INK; c.strokeRect(x, y, rw, rh);
    } else if (op.type === 'image') {
      c.fillStyle = 'rgba(20, 165, 161, .10)'; c.fillRect(x, y, rw, rh);
      c.strokeStyle = '#0e8c8a'; c.strokeRect(x, y, rw, rh);
      c.beginPath(); c.moveTo(x, y); c.lineTo(x + rw, y + rh); c.moveTo(x + rw, y); c.lineTo(x, y + rh); c.stroke();
    } else if (op.type === 'button') {
      const r = Math.min(rh / 2, 22);
      c.fillStyle = 'rgba(26, 91, 196, .14)'; c.strokeStyle = BLUE;
      c.beginPath(); c.roundRect(x, y, rw, rh, r); c.fill(); c.stroke();
      c.strokeStyle = BLUE; c.lineWidth = 3;
      c.beginPath(); c.moveTo(x + rw * .3, y + rh / 2); c.lineTo(x + rw * .7, y + rh / 2); c.stroke();
    } else if (op.type === 'text') {
      c.strokeStyle = ORANGE; c.lineWidth = 3;
      const gap = 14, lines = Math.max(1, Math.floor(rh / gap));
      for (let i = 0; i < lines; i++) {
        const ly = y + gap / 2 + i * gap;
        const lw = i === lines - 1 && lines > 1 ? rw * .6 : rw;
        c.beginPath(); c.moveTo(x, ly); c.lineTo(x + lw, ly); c.stroke();
      }
    }
  }

  function render() {
    ctx.setTransform(dpr, 0, 0, dpr, 0, 0);
    paintGrid(ctx, w, h);
    ops.forEach((op) => drawOp(ctx, op, w, h));
    if (draft) drawOp(ctx, draft, w, h);
    hint.classList.toggle('is-hidden', ops.length > 0 || !!draft);
  }

  const norm = (e) => {
    const r = canvas.getBoundingClientRect();
    return [Math.min(1, Math.max(0, (e.clientX - r.left) / r.width)), Math.min(1, Math.max(0, (e.clientY - r.top) / r.height))];
  };

  canvas.addEventListener('pointerdown', (e) => {
    canvas.setPointerCapture(e.pointerId);
    const p = norm(e);
    draft = tool === 'pen' ? { type: 'pen', pts: [p] } : { type: tool, a: p, b: p };
    render();
  });
  canvas.addEventListener('pointermove', (e) => {
    if (!draft) return;
    const p = norm(e);
    if (draft.type === 'pen') draft.pts.push(p); else draft.b = p;
    render();
  });
  const finish = () => { if (draft) { ops.push(draft); draft = null; render(); } };
  canvas.addEventListener('pointerup', finish);
  canvas.addEventListener('pointercancel', finish);

  $$('.tool[data-tool]').forEach((btn) => btn.addEventListener('click', () => {
    tool = btn.dataset.tool;
    $$('.tool[data-tool]').forEach((b) => b.setAttribute('aria-pressed', String(b === btn)));
  }));
  $('#undo').addEventListener('click', () => { ops.pop(); render(); });
  $('#clear').addEventListener('click', () => { ops = []; render(); });
  document.addEventListener('keydown', (e) => {
    if ((e.metaKey || e.ctrlKey) && e.key.toLowerCase() === 'z' && !/input|textarea/i.test(e.target.tagName)) {
      e.preventDefault(); ops.pop(); render();
    }
  });

  new ResizeObserver(resize).observe(canvas);

  /* ---------- Export: render to an offscreen PNG with caption ---------- */
  function exportPNG() {
    const scale = 2, pad = 0, cap = 44;
    const out = document.createElement('canvas');
    out.width = w * scale; out.height = (h + cap) * scale;
    const c = out.getContext('2d');
    c.scale(scale, scale);
    paintGrid(c, w, h);
    ops.forEach((op) => drawOp(c, op, w, h));
    c.fillStyle = '#0b2a5b'; c.fillRect(0, h, w, cap);
    c.fillStyle = '#fff'; c.font = '600 15px Georgia, serif'; c.textBaseline = 'middle';
    c.fillText('My current problem — chrisrbecker.com', 16 + pad, h + cap / 2);
    return out;
  }

  /* ---------- Print dialog ---------- */
  const dialog = $('#print-dialog');
  const preview = $('#print-preview');
  const pForm = $('#print-form');
  const pStatus = $('#print-status');
  let pngDataUrl = '';

  $('#print-btn').addEventListener('click', () => {
    if (!ops.length) {
      hint.textContent = 'Sketch something first, then press Print';
      hint.classList.remove('is-hidden');
      return;
    }
    pngDataUrl = exportPNG().toDataURL('image/png');
    preview.src = pngDataUrl;
    setStatus(pStatus, '');
    if (typeof dialog.showModal === 'function') dialog.showModal(); else dialog.setAttribute('open', '');
  });
  $('#dialog-close').addEventListener('click', () => dialog.close());
  dialog.addEventListener('click', (e) => { if (e.target === dialog) dialog.close(); });

  $('#print-download').addEventListener('click', () => {
    const a = document.createElement('a');
    a.href = pngDataUrl; a.download = 'my-current-problem.png';
    a.click();
  });

  $('#print-window').addEventListener('click', () => {
    const win = window.open('', '_blank');
    if (!win) { setStatus(pStatus, 'Pop-up blocked — use Download PNG instead.', 'error'); return; }
    win.document.write('<title>My current problem</title><style>body{margin:0;display:grid;place-items:center}img{max-width:100%}</style><img src="' + pngDataUrl + '">');
    win.document.close();
    win.onload = () => win.print();
  });

  pForm.addEventListener('submit', async (e) => {
    e.preventDefault();
    const data = new FormData(pForm);
    if (data.get('_honey')) return;
    const email = String(data.get('email')).trim();
    if (!validEmail(email)) { setStatus(pStatus, 'Please enter a valid email address.', 'error'); return; }

    // Visitor is cc'd on the message sent to the site owner; both receive the drawing.
    data.set('_cc', email);
    data.set('_subject', 'A drawing of my current problem — chrisrbecker.com');
    data.set('_replyto', email);
    data.set('_template', 'table');
    data.set('_captcha', 'false');
    const blob = await (await fetch(pngDataUrl)).blob();
    data.set('attachment', new File([blob], 'my-current-problem.png', { type: 'image/png' }));

    const btn = $('#print-send');
    btn.disabled = true;
    setStatus(pStatus, 'Sending…');
    try {
      // Attachments require the standard multipart endpoint. The response is opaque
      // (no-cors), so success means "request sent".
      await fetch(FORMSUBMIT_URL, { method: 'POST', body: data, mode: 'no-cors' });
      setStatus(pStatus, 'Sent! Check your inbox — Chris has been cc’d.', 'ok');
    } catch {
      setStatus(pStatus, 'Could not send. Try Download PNG and email it to ' + OWNER_EMAIL + '.', 'error');
    } finally {
      btn.disabled = false;
    }
  });
})();
