/* Chris R. Becker — writing.js (article list + tag filters for writing.html) */
(() => {
  'use strict';

  const grid = document.getElementById('articles');
  const filters = document.getElementById('article-filters');
  const status = document.getElementById('article-status');
  if (!grid || !filters || !Array.isArray(window.ARTICLES)) return;

  // Tag name → icon symbol (in writing.html's sprite) and color tone
  const TAGS = [
    { name: 'UX/Product', icon: 't-ux', tone: 'blue' },
    { name: 'Education', icon: 't-education', tone: 'blue' },
    { name: 'AI', icon: 't-ai', tone: 'blue' },
    { name: 'Design Thinking', icon: 't-thinking', tone: 'blue' },
    { name: 'User Research', icon: 't-research', tone: 'blue' },
    { name: 'Design/Code', icon: 't-code', tone: 'blue' },
    { name: 'Design Systems', icon: 't-systems', tone: 'blue' },
    { name: 'Interaction Design', icon: 't-interaction', tone: 'blue' }
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
  // Every article leaves the site for Medium, so the CTA says so.
  const cta = () => el('span', { class: 'article__cta' }, el('span', { class: 'article__cta-text' }, 'Read on Medium'), icon('i-external'), newTab());
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
    const t = tagInfo(a.tags[0]);
    const link = el('a', { class: 'article__link', href: a.url, target: '_blank', rel: 'noopener', title: a.tags.join(' · ') },
      a.image ? el('img', { class: 'article__img', src: a.image, alt: '', loading: 'lazy' }) : '',
      el('div', { class: 'article__head' },
        el('span', { class: 'article__icon' }, icon(t.icon)),
        el('time', { class: 'article__date', datetime: a.date }, fmtDate(a.date))
      ),
      el('div', { class: 'article__content' },
        el('h3', { class: 'article__title' }, a.title),
        a.excerpt ? el('p', { class: 'article__excerpt' }, a.excerpt) : '',
        el('span', { class: 'visually-hidden' }, 'Read on Medium (opens in a new tab)')
      )
    );
    const tags = el('ul', { class: 'article__tags', 'aria-label': 'Tags' },
      a.tags.map((name) => {
        const tg = tagInfo(name);
        return el('li', {}, el('button', { class: 'chip tone-' + tg.tone, type: 'button', 'data-tag': name, 'aria-label': 'Show ' + name + ' articles' }, icon(tg.icon), name));
      })
    );
    tags.addEventListener('click', (e) => {
      const chip = e.target.closest('.chip');
      if (chip) { setFilter(chip.dataset.tag); filters.scrollIntoView({ behavior: 'smooth', block: 'start' }); }
    });
    // Same CTA box as the small cards; the main link above already covers it for keyboard and screen reader users
    const bar = el('a', { class: 'article__cta', href: a.url, target: '_blank', rel: 'noopener', 'aria-hidden': 'true', tabindex: '-1' },
      el('span', { class: 'article__cta-text' }, 'Read on Medium'), icon('i-external'));
    return el('li', { class: 'article article--featured article--flagged' },
      el('span', { class: 'article__tab' }, 'Latest'), link, tags, bar);
  }

  function smallCard(a) {
    const t = tagInfo(a.tags[0]);
    const flag = a.featured ? (a.featured === true ? 'Featured' : String(a.featured)) : (a.topRated ? 'Top rated' : '');
    return el('li', { class: 'article' + (flag ? ' article--flagged' : '') },
      flag ? el('span', { class: 'article__tab' + (!a.featured ? ' article__tab--top' : '') }, flag) : '',
      el('a', { class: 'article__link', href: a.url, target: '_blank', rel: 'noopener', title: a.tags.join(' · ') },
        el('div', { class: 'article__head' },
          el('span', { class: 'article__icon' }, icon(t.icon)),
          el('time', { class: 'article__date', datetime: a.date }, fmtDate(a.date))
        ),
        el('div', { class: 'article__content' },
          el('h3', { class: 'article__title' }, a.title),
          a.excerpt ? el('p', { class: 'article__excerpt' }, a.excerpt) : '',
          el('span', { class: 'visually-hidden' }, 'Tags: ' + a.tags.join(', '))
        ),
        cta()
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
