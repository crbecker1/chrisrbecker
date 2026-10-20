/* Click-to-play video embeds. Loads the player only on click, and falls back to
   opening the video on its own site when embeds are blocked (e.g. file:// previews). */
(function () {
  var local = location.protocol === 'file:';
  [].forEach.call(document.querySelectorAll('.vf'), function (btn) {
    btn.addEventListener('click', function () {
      var id = btn.getAttribute('data-id'), provider = btn.getAttribute('data-provider');
      if (local) { window.open(btn.getAttribute('data-watch'), '_blank', 'noopener'); return; }
      var src = provider === 'figma'
        ? 'https://embed.figma.com/slides/' + id + (id.indexOf('?') > -1 ? '&' : '?') + 'embed-host=share'
        : provider === 'wistia'
        ? 'https://fast.wistia.net/embed/iframe/' + id + '?autoPlay=true'
        : provider === 'vimeo'
        ? 'https://player.vimeo.com/video/' + id + '?autoplay=1'
        : 'https://www.youtube.com/embed/' + id + '?autoplay=1&rel=0&playsinline=1';
      var f = document.createElement('iframe');
      f.src = src;
      f.title = btn.getAttribute('data-title') || 'Video';
      f.allow = 'autoplay; accelerometer; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share; fullscreen';
      f.referrerPolicy = 'strict-origin-when-cross-origin';
      f.setAttribute('allowfullscreen', '');
      btn.replaceWith(f);
      f.focus();
    });
  });
})();
