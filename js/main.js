// Programa Transporte para Todos — NTU
// Animações de entrada + navegação

(function () {
  'use strict';

  // Revelar elementos ao entrar no viewport
  var revealEls = document.querySelectorAll('.reveal');
  if ('IntersectionObserver' in window) {
    var io = new IntersectionObserver(function (entries) {
      entries.forEach(function (entry) {
        if (entry.isIntersecting) {
          entry.target.classList.add('visible');
          io.unobserve(entry.target);
        }
      });
    }, { threshold: 0.15, rootMargin: '0px 0px -5% 0px' });
    revealEls.forEach(function (el) { io.observe(el); });
  } else {
    revealEls.forEach(function (el) { el.classList.add('visible'); });
  }

  // Destacar item de navegação da secção visível
  var navLinks = document.querySelectorAll('.nav a[href^="#"]');
  var sections = [];
  navLinks.forEach(function (link) {
    var target = document.querySelector(link.getAttribute('href'));
    if (target) sections.push({ link: link, el: target });
  });

  function onScroll() {
    var pos = window.scrollY + window.innerHeight * 0.35;
    var current = sections[0];
    sections.forEach(function (s) {
      if (s.el.offsetTop <= pos) current = s;
    });
    sections.forEach(function (s) {
      s.link.style.opacity = (s === current) ? '1' : '.72';
    });
  }
  window.addEventListener('scroll', onScroll, { passive: true });
  onScroll();
})();
