import React, { useEffect } from 'react';

/**
 * Initializes all the interactive JS behaviours ported from script.js:
 * - Stats counter animation
 * - Scroll reveal animations
 * - Parallax on hero orbs
 * - Tilt effect on [data-tilt] cards
 * - Back-to-top button visibility
 * - Contact form submit + validation
 * - Testimonials slider
 * - Smooth scroll for anchor links
 */
const usePortfolioScripts = () => {
  useEffect(() => {
    initStatsCounter();
    initRevealAnimations();
    initParallaxEffects();
    initTiltEffect();
    initBackToTop();
    initContactForm();
    initTestimonialsSlider();
    initSmoothScroll();
  }, []);
};

/* ─── Stats Counter ────────────────────────────────────────────────────── */
function animateCounter(element) {
  const target = parseInt(element.getAttribute('data-value')) || 0;
  const duration = 2000;
  const step = target / (duration / 16);
  let current = 0;
  function tick() {
    current += step;
    if (current < target) {
      element.textContent = Math.floor(current);
      requestAnimationFrame(tick);
    } else {
      element.textContent = target;
    }
  }
  tick();
}

function initStatsCounter() {
  const statValues = document.querySelectorAll('.stat-value');
  if (!statValues.length) return;
  const observer = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        animateCounter(entry.target);
        observer.unobserve(entry.target);
      }
    });
  }, { threshold: 0.5 });
  statValues.forEach((el) => observer.observe(el));
}

/* ─── Reveal Animations ────────────────────────────────────────────────── */
function initRevealAnimations() {
  const revealElements = document.querySelectorAll(
    '.section-label, .section-title, .about-content, .skill-card, ' +
    '.project-card, .video-card, .contact-content, .footer-content'
  );
  if (!revealElements.length) return;
  const observer = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        entry.target.classList.add('reveal', 'active');
        observer.unobserve(entry.target);
      }
    });
  }, { threshold: 0.1, rootMargin: '0px 0px -50px 0px' });
  revealElements.forEach((el) => {
    el.classList.add('reveal');
    observer.observe(el);
  });
}

/* ─── Parallax ─────────────────────────────────────────────────────────── */
function initParallaxEffects() {
  const orbs = document.querySelectorAll('.gradient-orb');
  if (!orbs.length) return;
  let ticking = false;
  window.addEventListener('scroll', () => {
    if (!ticking) {
      requestAnimationFrame(() => {
        const scrollY = window.pageYOffset;
        orbs.forEach((orb, i) => {
          orb.style.transform = `translateY(${scrollY * (i + 1) * 0.03}px)`;
        });
        ticking = false;
      });
      ticking = true;
    }
  });
}

/* ─── Tilt Effect ──────────────────────────────────────────────────────── */
function initTiltEffect() {
  if (window.matchMedia('(hover: none)').matches) return;
  const cards = document.querySelectorAll('[data-tilt]');
  cards.forEach((card) => {
    card.addEventListener('mousemove', (e) => {
      const rect = card.getBoundingClientRect();
      const x = e.clientX - rect.left;
      const y = e.clientY - rect.top;
      const rotateX = (y - rect.height / 2) / 10;
      const rotateY = (rect.width / 2 - x) / 10;
      card.style.transform = `perspective(1000px) rotateX(${rotateX}deg) rotateY(${rotateY}deg) scale3d(1.02,1.02,1.02)`;
    });
    card.addEventListener('mouseleave', () => {
      card.style.transform = 'perspective(1000px) rotateX(0) rotateY(0) scale3d(1,1,1)';
    });
  });
}

/* ─── Back To Top ──────────────────────────────────────────────────────── */
function initBackToTop() {
  const btn = document.getElementById('backToTop');
  if (!btn) return;
  window.addEventListener('scroll', () => {
    if (window.pageYOffset > 500) btn.classList.add('show');
    else btn.classList.remove('show');
  });
}

/* ─── Contact Form ─────────────────────────────────────────────────────── */
function initContactForm() {
  const form = document.getElementById('contactForm');
  const formSuccess = document.getElementById('formSuccess');
  if (!form) return;

  form.addEventListener('submit', (e) => {
    e.preventDefault();
    const inputs = form.querySelectorAll('.form-input[required]');
    let valid = true;

    inputs.forEach((input) => {
      if (!input.value.trim()) {
        valid = false;
        input.style.borderColor = 'var(--secondary)';
        input.style.animation = 'shake 0.5s ease';
        setTimeout(() => { input.style.animation = ''; }, 500);
      } else if (input.type === 'email' && !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(input.value)) {
        valid = false;
        input.style.borderColor = 'var(--secondary)';
      } else {
        input.style.borderColor = '';
      }
    });

    if (!valid) return;

    const btn = form.querySelector('.form-submit');
    const orig = btn.innerHTML;
    btn.innerHTML = '<span class="btn-text">Sending...</span><span class="btn-icon"><i class="fas fa-spinner fa-spin"></i></span>';
    btn.disabled = true;

    setTimeout(() => {
      if (formSuccess) formSuccess.classList.add('show');
      form.reset();
      btn.innerHTML = orig;
      btn.disabled = false;
      setTimeout(() => { if (formSuccess) formSuccess.classList.remove('show'); }, 4000);
    }, 2000);
  });

  form.querySelectorAll('.form-input').forEach((input) => {
    input.addEventListener('input', () => { input.style.borderColor = ''; });
  });
}

/* ─── Testimonials Slider ──────────────────────────────────────────────── */
function initTestimonialsSlider() {
  const slider = document.getElementById('testimonialSlider');
  if (!slider) return;
  const track = slider.querySelector('.testimonials-track');
  const items = slider.querySelectorAll('.testimonial-item');
  const prevBtn = document.getElementById('prevTestimonial');
  const nextBtn = document.getElementById('nextTestimonial');
  const dotsContainer = document.getElementById('testimonialDots');
  if (!track || !items.length) return;

  let current = 0;
  const total = items.length;
  let autoplay;


  function update() {
    track.style.transform = `translateX(-${current * 100}%)`;
  }

  function goTo(index) {
    current = index;
    update();
    reset();
  }

  function next() { current = (current + 1) % total; update(); }
  function prev() { current = (current - 1 + total) % total; update(); }

  function start() { autoplay = setInterval(next, 5000); }
  function stop()  { clearInterval(autoplay); }
  function reset() { stop(); start(); }

  if (prevBtn) prevBtn.addEventListener('click', () => { prev(); reset(); });
  if (nextBtn) nextBtn.addEventListener('click', () => { next(); reset(); });

  slider.addEventListener('mouseenter', stop);
  slider.addEventListener('mouseleave', start);

  // Touch
  let touchStart = 0;
  track.addEventListener('touchstart', (e) => { touchStart = e.changedTouches[0].screenX; stop(); }, { passive: true });
  track.addEventListener('touchend', (e) => {
    const diff = touchStart - e.changedTouches[0].screenX;
    if (Math.abs(diff) > 50) diff > 0 ? next() : prev();
    start();
  }, { passive: true });

  start();
}

/* ─── Smooth Scroll ────────────────────────────────────────────────────── */
function initSmoothScroll() {
  document.querySelectorAll('a[href^="#"]').forEach((link) => {
    link.addEventListener('click', (e) => {
      const href = link.getAttribute('href');
      if (href === '#') return;
      const target = document.querySelector(href);
      if (target) {
        e.preventDefault();
        const headerH = document.querySelector('.header')?.offsetHeight || 80;
        window.scrollTo({ top: target.offsetTop - headerH, behavior: 'smooth' });
      }
    });
  });
}

export default usePortfolioScripts;
