/* MON AMOUR · theme JS (vanilla, no framework). Ported from js/app.js + store features. */
(function () {
  document.documentElement.classList.remove('no-js');
  var theme = window.theme || { routes: {}, strings: {} };
  var reduceMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;

  function cleanName(v) { return (v || '').replace(/[^A-Za-z\s'\-]/g, '').replace(/\s+/g, ' ').trim().slice(0, 16); } // Pinyon Script is Latin only
  function params() { return new URLSearchParams(window.location.search); }

  function writeName(out, name) {
    out.textContent = 'Dear ' + (name || 'Darling') + ',';
    out.classList.remove('m-write', 'is-rewrite');
    void out.offsetWidth;                                         // restart the write animation
    out.classList.add('m-write', 'is-rewrite');
  }

  // Name Write: live letter preview (home "write her name" + product page)
  document.querySelectorAll('[data-namer]').forEach(function (root) {
    var input = root.querySelector('[data-name-input]');
    var out = root.querySelector('[data-name-out]');
    var cta = root.querySelector('[data-name-cta]');
    var select = root.querySelector('[data-occ-select]');
    var group = root.querySelector('[data-occasions]');
    var occOut = root.querySelector('[data-occ-out]');
    var occ = group ? (group.querySelector('[aria-pressed="true"]') || {}).textContent : '';
    if (!input || !out) return;

    // Name/occasion carried over from the home page (?name=…&occ=…)
    var p = params();
    if (p.get('name') && !input.value) input.value = cleanName(p.get('name'));
    if (select && p.get('occ')) {
      Array.prototype.forEach.call(select.options, function (o) { if (o.text.trim() === p.get('occ')) select.value = o.value; });
    }

    function updateCta() {
      if (!cta) return;
      var url = new URL(cta.getAttribute('href'), window.location.origin);
      var n = cleanName(input.value);
      if (n) url.searchParams.set('name', n); else url.searchParams.delete('name');
      if (occ) url.searchParams.set('occ', occ.trim());
      cta.setAttribute('href', url.pathname + url.search);
    }
    var t;
    input.addEventListener('input', function () {
      clearTimeout(t);
      t = setTimeout(function () { writeName(out, cleanName(input.value)); updateCta(); }, 350);
    });
    if (input.value) writeName(out, cleanName(input.value));
    updateCta();

    // Occasion pills → letter line
    if (group && occOut) {
      group.addEventListener('click', function (e) {
        var b = e.target.closest('button'); if (!b) return;
        group.querySelectorAll('button').forEach(function (x) { x.setAttribute('aria-pressed', x === b ? 'true' : 'false'); });
        occOut.textContent = b.getAttribute('data-line');
        occ = b.getAttribute('data-occ') || b.textContent;
        updateCta();
      });
    }
  });

  // QR letter page: /pages/for-you?n=Malak
  var forYou = document.querySelector('[data-for-you] [data-name-out]');
  if (forYou) { var p = params(); writeName(forYou, cleanName(p.get('n') || p.get('name'))); }

  // Seal Press overlay
  function seal(done) {
    var el = document.querySelector('[data-seal]');
    if (!el || reduceMotion) { done(); return; }
    el.hidden = false;
    setTimeout(done, 1100);
  }

  // Product form: packaging ladder → total, add to bag with Seal Press, then go to the bag
  var form = document.querySelector('form[data-pdp]');
  if (form) {
    var error = form.querySelector('[data-error]');
    form.addEventListener('change', function (e) {
      if (e.target.name !== 'id') return;
      var price = e.target.getAttribute('data-price');
      document.querySelectorAll('[data-total]').forEach(function (el) { el.textContent = price; });
      var url = new URL(window.location.href);
      url.searchParams.set('variant', e.target.value);
      history.replaceState(null, '', url.pathname + url.search);
    });

    form.addEventListener('submit', function (e) {
      if (!window.fetch || !window.FormData) return;                // plain POST to /cart/add still works
      e.preventDefault();
      var nameInput = form.querySelector('[data-name-input]');
      if (nameInput) nameInput.value = cleanName(nameInput.value);
      var buttons = document.querySelectorAll('[data-add]');
      buttons.forEach(function (b) { b.disabled = true; });
      if (error) error.hidden = true;

      fetch(theme.routes.cartAdd + '.js', {
        method: 'POST',
        headers: { 'Accept': 'application/json', 'X-Requested-With': 'XMLHttpRequest' },
        body: new FormData(form)
      })
        .then(function (r) { return r.json().then(function (data) { return { ok: r.ok, data: data }; }); })
        .then(function (res) {
          if (!res.ok) throw new Error(res.data.description || res.data.message || theme.strings.addError);
          seal(function () { window.location.href = theme.routes.cart; });
        })
        .catch(function (err) {
          buttons.forEach(function (b) { b.disabled = false; });
          if (error) { error.textContent = err.message || theme.strings.addError; error.hidden = false; }
        });
    });
  }

  // Product gallery counter
  var gallery = document.querySelector('[data-gallery]');
  var galleryIndex = document.querySelector('[data-gallery-index]');
  if (gallery && galleryIndex) {
    gallery.addEventListener('scroll', function () {
      var i = Math.round(Math.abs(gallery.scrollLeft) / gallery.clientWidth) + 1;
      galleryIndex.textContent = i;
    }, { passive: true });
  }

  // Card in-hand video: hover on desktop, in view on touch. Off for reduced motion.
  if (!reduceMotion) {
    var cards = document.querySelectorAll('[data-card-video]');
    var canHover = window.matchMedia('(hover: hover)').matches;
    function play(media) { var v = media.querySelector('video'); if (!v) return; var pr = v.play(); if (pr && pr.catch) pr.catch(function () {}); media.classList.add('is-playing'); }
    function stop(media) { var v = media.querySelector('video'); if (!v) return; v.pause(); media.classList.remove('is-playing'); }
    if (canHover) {
      cards.forEach(function (m) {
        m.addEventListener('mouseenter', function () { play(m); });
        m.addEventListener('mouseleave', function () { stop(m); });
      });
    } else if ('IntersectionObserver' in window) {
      var vio = new IntersectionObserver(function (entries) {
        entries.forEach(function (en) { if (en.isIntersecting) play(en.target); else stop(en.target); });
      }, { threshold: 0.6 });
      cards.forEach(function (m) { vio.observe(m); });
    }
  }

  // Cart: quantity change submits the form; Gift Box upgrade keeps her name + occasion
  var cartForm = document.querySelector('[data-cart-form]');
  if (cartForm) {
    cartForm.querySelectorAll('[data-qty-input]').forEach(function (input) {
      input.addEventListener('change', function () { cartForm.submit(); });
    });
    cartForm.querySelectorAll('[data-upgrade]').forEach(function (btn) {
      btn.addEventListener('click', function () {
        btn.disabled = true;
        var props = {};
        try { props = JSON.parse(btn.getAttribute('data-props')) || {}; } catch (e) {}
        var headers = { 'Content-Type': 'application/json', 'Accept': 'application/json' };
        fetch(theme.routes.cartAdd + '.js', {
          method: 'POST', headers: headers,
          body: JSON.stringify({ items: [{ id: Number(btn.getAttribute('data-variant')), quantity: Number(btn.getAttribute('data-qty')), properties: props }] })
        })
          .then(function (r) { if (!r.ok) throw new Error(); return fetch(theme.routes.cartChange + '.js', { method: 'POST', headers: headers, body: JSON.stringify({ id: btn.getAttribute('data-key'), quantity: 0 }) }); })
          .then(function () { window.location.reload(); })
          .catch(function () { btn.disabled = false; });
      });
    });
  }

  // Collection sort
  var sort = document.querySelector('[data-sort] select');
  if (sort) sort.addEventListener('change', function () { sort.form.submit(); });

  // Mobile menu: close on Escape
  var drawer = document.querySelector('[data-menu-drawer]');
  if (drawer) document.addEventListener('keydown', function (e) { if (e.key === 'Escape' && drawer.open) { drawer.open = false; drawer.querySelector('summary').focus(); } });

  // Quiet Reveal on scroll
  var els = document.querySelectorAll('.m-reveal');
  if ('IntersectionObserver' in window) {
    var io = new IntersectionObserver(function (entries) {
      entries.forEach(function (en) { if (en.isIntersecting) { en.target.classList.add('is-in'); io.unobserve(en.target); } });
    }, { rootMargin: '0px 0px -10% 0px' });
    els.forEach(function (el) { io.observe(el); });
  } else { els.forEach(function (el) { el.classList.add('is-in'); }); }
})();
