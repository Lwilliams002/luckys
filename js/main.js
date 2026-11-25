// Lucky's — small enhancements only; every page reads fine without this file.
(function () {
  var toggle = document.querySelector('.nav-toggle');
  var nav = document.getElementById('site-nav');
  if (toggle && nav) {
    var setOpen = function (open) {
      nav.classList.toggle('open', open);
      toggle.setAttribute('aria-expanded', String(open));
    };
    toggle.addEventListener('click', function () {
      setOpen(!nav.classList.contains('open'));
    });
    nav.addEventListener('click', function (e) {
      if (e.target.closest('a')) setOpen(false);
    });
    document.addEventListener('keydown', function (e) {
      if (e.key === 'Escape') setOpen(false);
    });
  }

  var items = document.querySelectorAll('.reveal');
  if (!('IntersectionObserver' in window)) {
    items.forEach(function (el) { el.classList.add('in'); });
  } else {
    var io = new IntersectionObserver(function (entries) {
      entries.forEach(function (entry) {
        if (entry.isIntersecting) {
          entry.target.classList.add('in');
          io.unobserve(entry.target);
        }
      });
    }, { rootMargin: '0px 0px -8% 0px' });
    items.forEach(function (el) { io.observe(el); });
  }

  // Menu page: category pills filter the panels (without JS they are plain jump links).
  var tabs = document.querySelectorAll('.mx-tabs a[data-filter]');
  var panels = document.querySelectorAll('.mx-panel[data-cat]');
  if (tabs.length && panels.length) {
    var bar = document.querySelector('.mx-tabs');
    tabs.forEach(function (tab) {
      tab.addEventListener('click', function (e) {
        e.preventDefault();
        var f = tab.getAttribute('data-filter');
        panels.forEach(function (p) { p.hidden = f !== 'all' && p.getAttribute('data-cat') !== f; });
        tabs.forEach(function (t) {
          var on = t === tab;
          t.classList.toggle('active', on);
          if (on) t.setAttribute('aria-current', 'true'); else t.removeAttribute('aria-current');
        });
        var body = document.querySelector('.mx-body');
        var top = body.getBoundingClientRect().top + window.pageYOffset - bar.offsetHeight;
        if (window.pageYOffset > top) window.scrollTo(0, top);
      });
    });
  }

  var year = document.getElementById('year');
  if (year) year.textContent = new Date().getFullYear();
})();
