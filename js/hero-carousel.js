/* Image carousels (.hcar): project hero personas and the home page sketches. */
(function () {
  var reduce = window.matchMedia && matchMedia('(prefers-reduced-motion: reduce)').matches;
  [].forEach.call(document.querySelectorAll('.hcar'), function (car) {
    var slides = [].slice.call(car.querySelectorAll('.hcar__slides li'));
    var dots = [].slice.call(car.querySelectorAll('.hcar__dots button'));
    var cap = car.querySelector('.hcar__caption');
    var n = slides.length, cur = 0, timer = null;
    var every = +car.getAttribute('data-interval') || 5000;

    function go(i) {
      cur = (i + n) % n;
      slides.forEach(function (li, k) { li.classList.toggle('is-active', k === cur); });
      dots.forEach(function (b, k) { b.setAttribute('aria-current', k === cur ? 'true' : 'false'); });
      if (cap) cap.textContent = slides[cur].getAttribute('data-caption') || '';
      if (slides[cur + 1]) { var im = slides[cur + 1].querySelector('img'); if (im) im.loading = 'eager'; }
    }
    function stop() { clearInterval(timer); timer = null; }
    function start() { if (!reduce && !timer) timer = setInterval(function () { go(cur + 1); }, every); }

    car.querySelector('.hcar__nav--prev').addEventListener('click', function () { stop(); go(cur - 1); });
    car.querySelector('.hcar__nav--next').addEventListener('click', function () { stop(); go(cur + 1); });
    dots.forEach(function (b, k) { b.addEventListener('click', function () { stop(); go(k); }); });
    car.addEventListener('keydown', function (e) {
      if (e.key === 'ArrowRight') { stop(); go(cur + 1); e.preventDefault(); }
      else if (e.key === 'ArrowLeft') { stop(); go(cur - 1); e.preventDefault(); }
    });
    car.addEventListener('mouseenter', stop);
    car.addEventListener('focusin', stop);
    car.addEventListener('mouseleave', start);
    var x0 = null;
    car.addEventListener('pointerdown', function (e) { x0 = e.clientX; });
    car.addEventListener('pointerup', function (e) {
      if (x0 === null) return;
      var dx = e.clientX - x0; x0 = null;
      if (Math.abs(dx) > 40) { stop(); go(cur + (dx < 0 ? 1 : -1)); }
    });

    go(0);
    start();
  });
})();
