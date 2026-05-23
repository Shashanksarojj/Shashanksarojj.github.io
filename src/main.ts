import Typed from 'typed.js';
import ScrollReveal from 'scrollreveal';
import { initNavigation, initActiveNav } from './navigation';
import { initCursor } from './cursor';
import { initParticles } from './particles';
import { initScrollProgress, initBackToTop, initToast, initCopyEmail, initLoader } from './ui';

document.addEventListener('DOMContentLoaded', () => {
  initLoader();
  initNavigation();
  initActiveNav();
  initCursor();
  initParticles();
  initScrollProgress();
  initBackToTop();
  initToast();
  initCopyEmail();

  new Typed('.multiple-text', {
    strings: ['Software Engineer', 'React Native Dev', 'Java Developer', 'Fintech Builder', 'TypeScript Dev'],
    typeSpeed: 80,
    backSpeed: 40,
    backDelay: 1800,
    loop: true,
    smartBackspace: true,
  });

  const sr = ScrollReveal({
    reset: false,
    distance: '40px',
    duration: 800,
    delay: 100,
    easing: 'cubic-bezier(0.4,0,0.2,1)',
  });

  sr.reveal('.home-text', { origin: 'left', delay: 200 });
  sr.reveal('.home-visual', { origin: 'right', delay: 300 });
  sr.reveal('.section-label', { origin: 'top', delay: 100 });
  sr.reveal('.section-title', { origin: 'top', delay: 150 });
  sr.reveal('.about-img-wrap', { origin: 'left', delay: 200 });
  sr.reveal('.about-content', { origin: 'right', delay: 250 });
  sr.reveal('.timeline-item', { origin: 'bottom', interval: 150 });
  sr.reveal('.skill-card', { origin: 'bottom', interval: 60 });
  sr.reveal('.project-card', { origin: 'bottom', interval: 100 });
  sr.reveal('.calendar-wrap', { origin: 'bottom', delay: 200 });
  sr.reveal('.git-img', { origin: 'bottom', interval: 100 });
  sr.reveal('.contact-content', { origin: 'bottom', delay: 200 });
});
