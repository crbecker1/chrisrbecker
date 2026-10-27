/* Cookie consent for Google Analytics (EU/UK). Analytics is denied by default in each page's head. */
(function () {
  var KEY = 'crb-consent', banner = null;
  function read() { try { return localStorage.getItem(KEY); } catch (e) { return null; } }
  function write(v) { try { localStorage.setItem(KEY, v); } catch (e) {} }
  function update(granted) {
    if (typeof window.gtag === 'function') window.gtag('consent', 'update', { analytics_storage: granted ? 'granted' : 'denied' });
  }
  function close() { if (banner) { banner.remove(); banner = null; } }
  function choose(granted) { write(granted ? 'granted' : 'denied'); update(granted); close(); }
  var base = (document.currentScript && document.currentScript.src || '').replace(/js\/consent\.js.*$/, '');

  function open() {
    if (banner) return;
    banner = document.createElement('section');
    banner.className = 'consent';
    banner.setAttribute('role', 'region');
    banner.setAttribute('aria-label', 'Cookie consent');
    banner.innerHTML =
      '<p class="consent__text">I use Google Analytics cookies to see which pages people read. They stay off unless you accept. ' +
      '<a href="' + base + 'privacy.html">Privacy + cookies</a></p>' +
      '<div class="consent__btns"><button type="button" class="btn btn--ghost" data-c="no">Decline</button>' +
      '<button type="button" class="btn btn--ghost" data-c="yes">Accept</button></div>';
    banner.addEventListener('click', function (e) {
      var c = e.target.getAttribute && e.target.getAttribute('data-c');
      if (c) choose(c === 'yes');
    });
    document.body.appendChild(banner);
  }

  document.addEventListener('click', function (e) {
    if (e.target.closest && e.target.closest('[data-cookie-settings]')) { e.preventDefault(); open(); }
  });
  if (!read()) open();
})();
