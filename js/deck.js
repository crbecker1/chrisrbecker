(function () {
  [].forEach.call(document.querySelectorAll('.deck'), initDeck);
  function initDeck(deck) {
  var slides = [].slice.call(deck.querySelectorAll('.deck__slides li'));
  var count = deck.querySelector('.deck__count b');
  var range = deck.querySelector('.deck__range');
  var prev = deck.querySelector('.deck__nav--prev');
  var next = deck.querySelector('.deck__nav--next');
  var thumbs = deck.querySelector('.deck__thumbs');
  var sPrev = deck.querySelector('.deck__scroll--prev');
  var sNext = deck.querySelector('.deck__scroll--next');
  var stage = deck.querySelector('.deck__stage');
  var full = deck.querySelector('.deck__full');
  var cap = deck.querySelector('.deck__caption');
  var n = slides.length, cur = 0, btns = [];

  slides.forEach(function (li, i) {
    var li2 = document.createElement('li');
    var b = document.createElement('button');
    b.type = 'button';
    b.setAttribute('aria-label', 'Go to slide ' + (i + 1));
    var im = document.createElement('img');
    im.src = li.querySelector('img').src; im.alt = ''; im.loading = 'lazy';
    b.appendChild(im);
    b.addEventListener('click', function () { go(i); });
    li2.appendChild(b); thumbs.appendChild(li2); btns.push(b);
  });

  function edges() {
    sPrev.disabled = thumbs.scrollLeft < 4;
    sNext.disabled = thumbs.scrollLeft + thumbs.clientWidth >= thumbs.scrollWidth - 4;
  }
  function page(d) { thumbs.scrollBy({ left: d * thumbs.clientWidth, behavior: 'smooth' }); }
  sPrev.addEventListener('click', function () { page(-1); });
  sNext.addEventListener('click', function () { page(1); });
  thumbs.addEventListener('scroll', edges);

  function go(i) {
    i = Math.max(0, Math.min(n - 1, i));
    slides[cur].classList.remove('is-active');
    cur = i;
    slides[cur].classList.add('is-active');
    count.textContent = cur + 1;
    if (cap) cap.textContent = slides[cur].getAttribute('data-caption') || '';
    range.value = cur + 1;
    prev.disabled = cur === 0;
    next.disabled = cur === n - 1;
    btns.forEach(function (b, k) { b.setAttribute('aria-current', k === cur ? 'true' : 'false'); });
    var t = btns[cur].parentNode, l = t.offsetLeft - thumbs.offsetLeft;
    if (l < thumbs.scrollLeft || l + t.offsetWidth > thumbs.scrollLeft + thumbs.clientWidth) thumbs.scrollTo({ left: l, behavior: 'smooth' });
    [cur + 1, cur - 1].forEach(function (k) { if (slides[k]) slides[k].querySelector('img').loading = 'eager'; });
  }

  prev.addEventListener('click', function () { go(cur - 1); });
  next.addEventListener('click', function () { go(cur + 1); });
  range.addEventListener('input', function () { go(+range.value - 1); });
  deck.addEventListener('keydown', function (e) {
    if (e.target === range) return;
    if (e.key === 'ArrowRight') { go(cur + 1); e.preventDefault(); }
    else if (e.key === 'ArrowLeft') { go(cur - 1); e.preventDefault(); }
    else if (e.key === 'Home') { go(0); e.preventDefault(); }
    else if (e.key === 'End') { go(n - 1); e.preventDefault(); }
  });

  var x0 = null;
  stage.addEventListener('pointerdown', function (e) { x0 = e.clientX; });
  stage.addEventListener('pointerup', function (e) {
    if (x0 === null) return;
    var dx = e.clientX - x0; x0 = null;
    if (Math.abs(dx) > 40) go(cur + (dx < 0 ? 1 : -1));
  });

  if (full && deck.requestFullscreen) {
    full.addEventListener('click', function () {
      if (document.fullscreenElement) document.exitFullscreen(); else deck.requestFullscreen();
    });
  } else if (full) full.hidden = true;

  go(0);
  edges();
  }
})();
