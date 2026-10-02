/* Chris R. Becker — writing.js (article list + tag filters for writing.html) */
(() => {
  'use strict';

  const grid = document.getElementById('articles');
  const filters = document.getElementById('article-filters');
  const status = document.getElementById('article-status');
  if (!grid || !filters || !Array.isArray(window.ARTICLES)) return;

  // Tag name → icon symbol (in writing.html's sprite) and color tone
  const TAGS = [
    { name: 'UX', icon: 't-ux', tone: 'blue' },
    { name: 'Product', icon: 't-product', tone: 'teal' },
    { name: 'Education', icon: 't-education', tone: 'orange' },
    { name: 'AI', icon: 't-ai', tone: 'blue' },
    { name: 'DesignThinking', icon: 't-thinking', tone: 'orange' },
    { name: 'User Research', icon: 't-research', tone: 'teal' },
    { name: 'Design/Code', icon: 't-code', tone: 'blue' },
    { name: 'Design Systems', icon: 't-systems', tone: 'teal' },
    { name: 'Interaction Design', icon: 't-interaction', tone: 'orange' }
  ];
  const ALL = 'All';
  const tagInfo = (name) => TAGS.find((t) => t.name === name) || { name, icon: 't-all', tone: 'blue' };

  // Newest first. Dates are parsed as local days so they don't shift by timezone.
  const toDate = (s) => { const [y, m, d] = s.split('-').map(Number); return new Date(y, m - 1, d); };
  const articles = window.ARTICLES.slice().sort((a, b) => toDate(b.date) - toDate(a.date));
  const fmtDate = (s) => toDate(s).toLocaleDateString('en-US', { month: 'short', day: 'numeric', year: 'numeric' });

  let active = ALL;

  /* ---------- Small DOM helpers (text is always set via textContent) ---------- */
  const el = (tag, attrs = {}, ...kids) => {
    const node = document.createElement(tag);
    Object.entries(attrs).forEach(([k, v]) => { if (v != null) node.setAttribute(k, v); });
    kids.flat().forEach((k) => node.append(k));
    return node;
  };
  const icon = (id) => {
    const svg = document.createElementNS('http://www.w3.org/2000/svg', 'svg');
    svg.setAttribute('viewBox', '0 0 24 24');
    svg.setAttribute('aria-hidden', 'true');
    svg.setAttribute('focusable', 'false');
    const use = document.createElementNS('http://www.w3.org/2000/svg', 'use');
    use.setAttribute('href', '#' + id);
    svg.append(use);
    return svg;
  };
  const newTab = () => el('span', { class: 'visually-hidden' }, ' (opens in a new tab)');
  const cta = () => el('span', { class: 'article__cta' }, 'Read more', icon('i-arrow'), newTab());

  /* ---------- Filter buttons ---------- */
  const count = (name) => (name === ALL ? articles.length : articles.filter((a) => a.tags.includes(name)).length);

  [{ name: ALL, icon: 't-all', tone: 'blue' }, ...TAGS].forEach((t) => {
    const n = count(t.name);
    const btn = el('button', {
      class: 'filter', type: 'button', 'data-tag': t.name,
      'aria-pressed': String(t.name === active), disabled: n ? null : ''
    }, icon(t.icon), el('span', {}, t.name), el('span', { class: 'filter__count' }, String(n)));
    filters.append(btn);
  });

  filters.addEventListener('click', (e) => {
    const btn = e.target.closest('.filter');
    if (btn) setFilter(btn.dataset.tag);
  });

  function setFilter(name) {
    active = active === name && name !== ALL ? ALL : name; // clicking the active tag again clears it
    filters.querySelectorAll('.filter').forEach((b) => b.setAttribute('aria-pressed', String(b.dataset.tag === active)));
    render();
  }

  /* ---------- Cards ---------- */
  function featuredCard(a) {
    const link = el('a', { class: 'article__link', href: a.url, target: '_blank', rel: 'noopener' },
      a.image ? el('img', { class: 'article__img', src: a.image, alt: '', loading: 'lazy' }) : '',
      el('div', { class: 'article__body' },
        el('p', { class: 'article__meta' }, el('span', { class: 'article__badge' }, 'Latest'), el('time', { datetime: a.date }, fmtDate(a.date))),
        el('h3', { class: 'article__title' }, a.title),
        a.excerpt ? el('p', { class: 'article__excerpt' }, a.excerpt) : '',
        cta()
      )
    );
    const tags = el('ul', { class: 'article__tags', 'aria-label': 'Tags' },
      a.tags.map((name) => {
        const t = tagInfo(name);
        return el('li', {}, el('button', { class: 'chip tone-' + t.tone, type: 'button', 'data-tag': name, 'aria-label': 'Show ' + name + ' articles' }, icon(t.icon), name));
      })
    );
    tags.addEventListener('click', (e) => {
      const chip = e.target.closest('.chip');
      if (chip) { setFilter(chip.dataset.tag); filters.scrollIntoView({ behavior: 'smooth', block: 'start' }); }
    });
    return el('li', { class: 'article article--featured' }, link, tags);
  }

  function smallCard(a) {
    const t = tagInfo(a.tags[0]);
    const flag = a.featured ? (a.featured === true ? 'Featured' : String(a.featured)) : '';
    return el('li', { class: 'article' + (flag ? ' article--flagged' : '') },
      flag ? el('span', { class: 'article__strip' }, flag) : '',
      el('a', { class: 'article__link', href: a.url, target: '_blank', rel: 'noopener', title: a.tags.join(' · ') },
        el('span', { class: 'article__icon tone-' + t.tone }, icon(t.icon)),
        el('div', { class: 'article__content' },
          el('time', { class: 'article__date', datetime: a.date }, fmtDate(a.date)),
          el('h3', { class: 'article__title' }, a.title),
          a.excerpt ? el('p', { class: 'article__excerpt' }, a.excerpt) : '',
          el('span', { class: 'visually-hidden' }, 'Tags: ' + a.tags.join(', ')),
          cta()
        )
      )
    );
  }

  function render() {
    const list = active === ALL ? articles : articles.filter((a) => a.tags.includes(active));
    grid.replaceChildren(...list.map((a, i) => (i === 0 ? featuredCard(a) : smallCard(a))));
    const noun = list.length === 1 ? 'article' : 'articles';
    status.textContent = active === ALL
      ? `Showing all ${list.length} ${noun}`
      : `Showing ${list.length} ${noun} tagged ${active}`;
  }

  render();
})();
