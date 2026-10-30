/* MON AMOUR · tiny vanilla JS (no framework). Ports 1:1 into a Shopify theme asset. */
(function () {
  document.documentElement.classList.remove('no-js');

  // Name Write: live letter preview
  var nameIn = document.querySelector('[data-name-input]');
  var nameOut = document.querySelector('[data-name-out]');
  function renderName() {
    if (!nameIn || !nameOut) return;
    var v = nameIn.value.replace(/[^A-Za-z\s'\-]/g, '').trim();   // Pinyon Script is Latin only
    nameOut.textContent = 'Dear ' + (v || 'Darling') + ',';
    nameOut.classList.remove('m-write', 'is-rewrite');
    void nameOut.offsetWidth;                                       // restart the write animation
    nameOut.classList.add('m-write', 'is-rewrite');
  }
  if (nameIn) {
    var t;
    nameIn.addEventListener('input', function () { clearTimeout(t); t = setTimeout(renderName, 350); });
    if (nameIn.value) renderName();
  }

  // Occasion pills → letter line
  var group = document.querySelector('[data-occasions]');
  var occOut = document.querySelector('[data-occ-out]');
  if (group && occOut) {
    group.addEventListener('click', function (e) {
      var b = e.target.closest('button'); if (!b) return;
      group.querySelectorAll('button').forEach(function (x) { x.setAttribute('aria-pressed', x === b ? 'true' : 'false'); });
      occOut.textContent = b.getAttribute('data-line');
    });
  }

  // Packaging ladder → total
  var pdp = document.querySelector('[data-pdp]');
  if (pdp) {
    pdp.addEventListener('change', function (e) {
      if (e.target.name !== 'id') return;
      var p = e.target.getAttribute('data-price');
      document.querySelectorAll('[data-total]').forEach(function (el) { el.textContent = p; });
    });
    var sub = document.querySelector('[data-submit]');
    if (sub) sub.addEventListener('click', function (e) { e.preventDefault(); pdp.requestSubmit ? pdp.requestSubmit() : pdp.submit(); });
  }

  // Quiet Reveal on scroll
  var els = document.querySelectorAll('.m-reveal');
  if ('IntersectionObserver' in window) {
    var io = new IntersectionObserver(function (entries) {
      entries.forEach(function (en) { if (en.isIntersecting) { en.target.classList.add('is-in'); io.unobserve(en.target); } });
    }, { rootMargin: '0px 0px -10% 0px' });
    els.forEach(function (el) { io.observe(el); });
  } else { els.forEach(function (el) { el.classList.add('is-in'); }); }
})();
