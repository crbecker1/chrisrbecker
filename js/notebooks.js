/* The thinking shelf: two shelves of books. Click one to open it as a strip of spreads you can scroll sideways.

   HOW TO ADD YOUR CONTENT
   Each book has up to 20 spreads. Each spread looks like this:
     { title: 'Spread title',
       caption: 'A line or two about the page.',
       images: [ { src: 'images/notebooks/page-01.jpg', alt: 'What the image shows' } ],   // 1 to 10 images
       links:  [ { label: 'Where to read more', href: 'https://example.com' } ] }
   Replace a book's `spreads` array (or the placeholder() call) with your own list. */
(function () {
  'use strict';
  const MAX_SPREADS = 20, MAX_IMAGES = 10;
  const IMG = 'images/work/placeholder.svg';
  const reduce = window.matchMedia('(prefers-reduced-motion: reduce)').matches;

  const esc = (s) => String(s).replace(/[&<>"']/g, (c) => ({ '&': '&amp;', '<': '&lt;', '>': '&gt;', '"': '&quot;', "'": '&#39;' }[c]));
  const COUNTS = [3, 1, 4, 2, 6, 5, 8, 10, 7, 9, 2, 4];

  // Placeholder spreads with 1 to 10 images each, so every layout can be previewed.
  function placeholder(n, offset) {
    return Array.from({ length: n }, (_, i) => {
      const c = COUNTS[(i + offset) % COUNTS.length];
      return {
        title: `Spread ${i + 1}`,
        caption: 'Placeholder caption. Add a line or two about what is on these pages.',
        images: Array.from({ length: c }, (__, k) => ({ src: IMG, alt: `Placeholder image ${k + 1}` })),
        links: i % 2 ? [{ label: 'Link title', href: '' }] : []
      };
    });
  }

  // ---- Books ------------------------------------------------------------
  const SKETCH = [];
  [2026, 2025, 2024, 2023, 2022].forEach((year, yi) => {
    [['Q3/4', 'h2'], ['Q1/2', 'h1']].forEach(([label, key], hi) => {
      const n = yi * 2 + hi;
      SKETCH.push({ id: `sketch-${year}-${key}`, kind: 'sketch', year, label, title: `${year} · ${label}`, sub: 'Sketchbook', w: 42 + ((n * 3) % 9), spreads: placeholder(8 + (n % 5), n) });
    });
  });

  const SHELF = [
    { id: 'art', title: 'Art', bg: '#c23b17', fg: '#fff', h: 172, w: 44 },
    { id: 'architecture', title: 'Architecture', bg: '#4a5a75', fg: '#fff', h: 186, w: 52 },
    { id: 'design', title: 'Design', bg: '#1a5bc4', fg: '#fff', h: 160, w: 38 },
    { id: 'space', title: 'Space', bg: 'radial-gradient(circle at 30% 20%, #fff 0 1px, transparent 1.5px) 0 0 / 18px 22px, radial-gradient(circle at 70% 60%, #9fd8ff 0 1px, transparent 1.5px) 0 0 / 24px 26px, #1b1a4a', fg: '#fff', h: 180, w: 46 },
    { id: 'writing', title: 'Writing', bg: '#e8dcc0', fg: '#2a2218', h: 150, w: 36 },
    { id: 'ux-ui', title: 'UX/UI', bg: '#0e8c8a', fg: '#fff', h: 168, w: 42 },
    { id: 'weird-stuff', title: 'Weird Stuff', bg: 'repeating-linear-gradient(45deg, #d8a21f 0 8px, #b8860f 8px 16px)', fg: '#1a1304', h: 176, w: 50 }
  ].map((b, i) => Object.assign(b, { kind: 'shelf', sub: 'Inspiration', spreads: placeholder(6 + (i % 4), i * 3) }));

  SKETCH.concat(SHELF).forEach((b) => { b.spreads = b.spreads.slice(0, MAX_SPREADS); b.spreads.forEach((s) => { s.images = s.images.slice(0, MAX_IMAGES); }); });
  const BY_ID = {};
  SKETCH.concat(SHELF).forEach((b) => { BY_ID[b.id] = b; });

  // ---- Shelves ----------------------------------------------------------
  const rowSketch = document.getElementById('shelf-sketch');
  const rowInspo = document.getElementById('shelf-inspo');
  if (!rowSketch || !rowInspo) return;

  SKETCH.forEach((b) => {
    const el = document.createElement('button');
    el.type = 'button'; el.className = 'book book--sketch'; el.dataset.id = b.id;
    el.style.setProperty('--w', b.w + 'px'); el.style.setProperty('--h', '190px');
    el.setAttribute('aria-label', `Open sketchbook ${b.year}, ${b.label}`);
    el.innerHTML = `<span class="book__band"></span><span class="book__label">${b.year} ${b.label}</span><span class="book__band book__band--b"></span>`;
    rowSketch.appendChild(el);
  });
  SHELF.forEach((b) => {
    const el = document.createElement('button');
    el.type = 'button'; el.className = 'book book--cloth'; el.dataset.id = b.id;
    el.style.setProperty('--w', b.w + 'px'); el.style.setProperty('--h', b.h + 'px');
    el.style.setProperty('--bg', b.bg); el.style.setProperty('--fg', b.fg);
    el.setAttribute('aria-label', `Open book: ${b.title}`);
    el.innerHTML = `<span class="book__title">${esc(b.title)}</span>`;
    rowInspo.appendChild(el);
  });

  // ---- Reader -----------------------------------------------------------
  const dlg = document.getElementById('reader');
  const strip = document.getElementById('reader-strip');
  const map = document.getElementById('reader-map');
  const elTitle = document.getElementById('reader-title');
  const elSub = document.getElementById('reader-sub');
  const elCount = document.getElementById('reader-count');
  const elChip = document.getElementById('reader-chip');
  let book = null, active = 0, opener = null, raf = 0;

  const ICON = {
    mail: '<path d="M3 6h18v12H3z"/><path d="m3 7 9 6 9-6"/>',
    link: '<path d="M10 14a4 4 0 0 0 5.7 0l3-3a4 4 0 0 0-5.7-5.7l-1 1"/><path d="M14 10a4 4 0 0 0-5.7 0l-3 3A4 4 0 0 0 11 18.7l1-1"/>',
    x: '<path fill="currentColor" stroke="none" d="M18.9 1.15h3.68l-8.04 9.19L24 22.85h-7.4l-5.8-7.58-6.64 7.58H.47l8.6-9.83L0 1.15h7.6l5.24 6.93zm-1.29 19.5h2.04L6.49 3.24H4.3z"/>',
    linkedin: '<path fill="currentColor" stroke="none" d="M20.45 20.45h-3.55v-5.57c0-1.33-.03-3.04-1.85-3.04-1.85 0-2.14 1.45-2.14 2.94v5.67H9.35V9h3.41v1.56h.05c.48-.9 1.64-1.85 3.37-1.85 3.6 0 4.27 2.37 4.27 5.46zM5.34 7.43a2.06 2.06 0 1 1 0-4.13 2.06 2.06 0 0 1 0 4.13zM7.12 20.45H3.56V9h3.56zM22.22 0H1.77C.79 0 0 .77 0 1.73v20.54C0 23.23.79 24 1.77 24h20.45c.98 0 1.78-.77 1.78-1.73V1.73C24 .77 23.2 0 22.22 0z"/>',
    facebook: '<path fill="currentColor" stroke="none" d="M24 12.07C24 5.44 18.63.07 12 .07S0 5.44 0 12.07c0 5.99 4.39 10.95 10.13 11.85v-8.39H7.08v-3.47h3.05V9.43c0-3.01 1.79-4.67 4.53-4.67 1.31 0 2.69.23 2.69.23v2.95h-1.52c-1.49 0-1.96.93-1.96 1.87v2.25h3.33l-.53 3.47h-2.8v8.39C19.61 23.02 24 18.06 24 12.07z"/>'
  };
  const icon = (n) => `<svg viewBox="0 0 24 24" aria-hidden="true" focusable="false">${ICON[n]}</svg>`;
  const baseUrl = () => location.origin + location.pathname + location.search;
  const spreadUrl = (b, i) => `${baseUrl()}#book=${b.id}&spread=${i + 1}`;

  function shareHtml(b, i) {
    const url = spreadUrl(b, i), label = `${b.title}, spread ${i + 1}`;
    const text = `A page from Chris R. Becker's notebooks (${label})`;
    const u = encodeURIComponent(url), t = encodeURIComponent(text);
    return `<div class="share" role="group" aria-label="Share this spread">
      <a class="share__btn" href="mailto:?subject=${encodeURIComponent(text)}&body=${encodeURIComponent(text + '\n' + url)}" title="Share by email" aria-label="Share by email">${icon('mail')}</a>
      <a class="share__btn" href="https://twitter.com/intent/tweet?text=${t}&url=${u}" target="_blank" rel="noopener" title="Share on X" aria-label="Share on X">${icon('x')}</a>
      <a class="share__btn" href="https://www.linkedin.com/sharing/share-offsite/?url=${u}" target="_blank" rel="noopener" title="Share on LinkedIn" aria-label="Share on LinkedIn">${icon('linkedin')}</a>
      <a class="share__btn" href="https://www.facebook.com/sharer/sharer.php?u=${u}" target="_blank" rel="noopener" title="Share on Facebook" aria-label="Share on Facebook">${icon('facebook')}</a>
      <button type="button" class="share__btn" data-copy="${esc(url)}" title="Copy link" aria-label="Copy link">${icon('link')}</button>
    </div>`;
  }

  function spreadHtml(b, s, i, total) {
    const n = Math.min(s.images.length, MAX_IMAGES);
    const imgs = s.images.map((im) => `<figure><img src="${esc(im.src)}" alt="${esc(im.alt || '')}" loading="lazy" width="600" height="450"></figure>`).join('');
    const links = (s.links || []).map((l) => (l.href
      ? `<li><a href="${esc(l.href)}" target="_blank" rel="noopener">${esc(l.label)}<svg viewBox="0 0 24 24" aria-hidden="true" focusable="false"><path d="M7 17 17 7M8 7h9v9"/></svg></a></li>`
      : `<li><span class="is-placeholder">${esc(l.label)}</span></li>`)).join('');
    return `<article class="spread" data-i="${i}" aria-label="Spread ${i + 1} of ${total}">
      <header class="spread__head"><span class="spread__num">${String(i + 1).padStart(2, '0')}</span><h3>${esc(s.title || 'Spread ' + (i + 1))}</h3>${shareHtml(b, i)}</header>
      <div class="spread__pages n${n}">${imgs}</div>
      <footer class="spread__foot"><p>${esc(s.caption || '')}</p>${links ? `<ul class="spread__links">${links}</ul>` : ''}<span class="spread__pp">pp. ${i * 2 + 1}–${i * 2 + 2}</span></footer>
    </article>`;
  }

  function chipHtml(b) {
    return b.kind === 'sketch'
      ? `<span class="chip chip--sketch"><span>${b.year} ${b.label}</span></span>`
      : `<span class="chip" style="background:${b.bg};color:${b.fg}"></span>`;
  }

  function open(id, spreadIndex, fromEl) {
    const b = BY_ID[id];
    if (!b) return;
    book = b;
    elTitle.textContent = b.title;
    elSub.textContent = `${b.sub} · ${b.spreads.length} spread${b.spreads.length === 1 ? '' : 's'}`;
    elChip.innerHTML = chipHtml(b);
    strip.innerHTML = b.spreads.map((s, i) => spreadHtml(b, s, i, b.spreads.length)).join('');
    map.innerHTML = b.spreads.map((_, i) => `<button type="button" data-i="${i}" aria-label="Go to spread ${i + 1}">${i + 1}</button>`).join('');
    if (fromEl) {
      opener = fromEl;
      const r = fromEl.getBoundingClientRect();
      dlg.style.setProperty('--ox', `${r.left + r.width / 2}px`);
      dlg.style.setProperty('--oy', `${r.top + r.height / 2}px`);
      document.querySelectorAll('.book.is-out').forEach((x) => x.classList.remove('is-out'));
      fromEl.classList.add('is-out');
    }
    if (!dlg.open) { dlg.showModal(); document.documentElement.classList.add('reader-open'); }
    active = -1;
    go(spreadIndex || 0, true);
    setHash();
  }

  function go(i, instant) {
    const sp = strip.children[Math.max(0, Math.min(i, strip.children.length - 1))];
    if (!sp) return;
    sp.scrollIntoView({ inline: 'center', block: 'nearest', behavior: instant || reduce ? 'auto' : 'smooth' });
    setActive(Math.max(0, Math.min(i, strip.children.length - 1)));
  }

  function setActive(i) {
    if (i === active) return;
    active = i;
    elCount.textContent = `Spread ${i + 1} of ${book.spreads.length}`;
    map.querySelectorAll('button').forEach((b, n) => { b.classList.toggle('is-on', n === i); b.classList.toggle('is-seen', n < i); if (n === i) b.setAttribute('aria-current', 'true'); else b.removeAttribute('aria-current'); });
    const on = map.children[i];
    if (on && map.scrollWidth > map.clientWidth) on.scrollIntoView({ inline: 'center', block: 'nearest' });
    document.getElementById('reader-prev').disabled = i === 0;
    document.getElementById('reader-next').disabled = i === book.spreads.length - 1;
    setHash();
  }

  function setHash() {
    if (!book || !dlg.open) return;
    history.replaceState(null, '', `#book=${book.id}&spread=${active + 1}`);
  }

  function nearest() {
    const mid = strip.scrollLeft + strip.clientWidth / 2;
    let best = 0, bd = Infinity;
    Array.from(strip.children).forEach((c, i) => { const d = Math.abs(c.offsetLeft + c.offsetWidth / 2 - mid); if (d < bd) { bd = d; best = i; } });
    return best;
  }
  strip.addEventListener('scroll', () => { if (raf) return; raf = requestAnimationFrame(() => { raf = 0; if (book) setActive(nearest()); }); }, { passive: true });

  function close() { if (dlg.open) dlg.close(); }
  dlg.addEventListener('close', () => {
    document.documentElement.classList.remove('reader-open');
    document.querySelectorAll('.book.is-out').forEach((x) => x.classList.remove('is-out'));
    history.replaceState(null, '', location.pathname + location.search);
    book = null;
    if (opener && document.contains(opener)) opener.focus({ preventScroll: true });
  });

  // Events
  document.querySelectorAll('.shelf__books').forEach((row) => row.addEventListener('click', (e) => {
    const b = e.target.closest('.book'); if (b) open(b.dataset.id, 0, b);
  }));
  document.getElementById('reader-close').addEventListener('click', close);
  dlg.addEventListener('click', (e) => { if (e.target === dlg) close(); });
  document.getElementById('reader-prev').addEventListener('click', () => go(active - 1));
  document.getElementById('reader-next').addEventListener('click', () => go(active + 1));
  map.addEventListener('click', (e) => { const b = e.target.closest('button'); if (b) go(+b.dataset.i); });
  dlg.addEventListener('keydown', (e) => {
    if (e.key === 'ArrowRight') { go(active + 1); e.preventDefault(); }
    else if (e.key === 'ArrowLeft') { go(active - 1); e.preventDefault(); }
    else if (e.key === 'Home') { go(0); e.preventDefault(); }
    else if (e.key === 'End') { go(book.spreads.length - 1); e.preventDefault(); }
  });
  strip.addEventListener('click', (e) => {
    const c = e.target.closest('[data-copy]');
    if (!c) return;
    const done = () => { c.classList.add('is-done'); c.setAttribute('title', 'Link copied'); setTimeout(() => { c.classList.remove('is-done'); c.setAttribute('title', 'Copy link'); }, 1600); };
    if (navigator.clipboard) navigator.clipboard.writeText(c.dataset.copy).then(done, () => window.prompt('Copy this link', c.dataset.copy));
    else window.prompt('Copy this link', c.dataset.copy);
  });

  // Deep links: #book=sketch-2026-h2&spread=3
  function fromHash() {
    const p = new URLSearchParams(location.hash.slice(1));
    const id = p.get('book');
    if (id && BY_ID[id]) open(id, Math.max(0, (parseInt(p.get('spread'), 10) || 1) - 1), document.querySelector(`.book[data-id="${id}"]`));
  }
  window.addEventListener('hashchange', () => { if (!dlg.open) fromHash(); });
  fromHash();
})();
