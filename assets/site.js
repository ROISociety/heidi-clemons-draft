(function () {
  document.documentElement.classList.add("js");
  var header = document.querySelector('.site-header');
  var onScroll = function () { header.classList.toggle('scrolled', window.scrollY > 8); };
  onScroll();
  window.addEventListener('scroll', onScroll, { passive: true });

  var burger = document.querySelector('.burger');
  var menu = document.querySelector('.menu');
  burger.addEventListener('click', function () {
    var open = menu.classList.toggle('open');
    burger.setAttribute('aria-expanded', open);
    document.body.style.overflow = open ? 'hidden' : '';
  });

  // Parent items expand a dropdown (no overview-page routing on mobile)
  document.querySelectorAll('.has-sub > button').forEach(function (b) {
    b.addEventListener('click', function () {
      var li = b.parentElement;
      var open = li.classList.toggle('open');
      b.setAttribute('aria-expanded', open);
    });
  });
  document.querySelectorAll('.menu a[href*="#connect"]').forEach(function (a) {
    a.addEventListener('click', function () { menu.classList.remove('open'); document.body.style.overflow = ''; });
  });

  var io = new IntersectionObserver(function (es) {
    es.forEach(function (e) { if (e.isIntersecting) { e.target.classList.add('in'); io.unobserve(e.target); } });
  }, { threshold: 0.12 });
  document.querySelectorAll('.rv').forEach(function (el) { io.observe(el); });

  var form = document.querySelector('form.form');
  if (form) form.addEventListener('submit', function (e) { e.preventDefault(); form.classList.add('sent'); });
})();
