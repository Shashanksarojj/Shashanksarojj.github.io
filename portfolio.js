// ===== MOBILE MENU =====
const menuIcon = document.querySelector('#menu-icon');
const navbar = document.querySelector('.navbar');

menuIcon.onclick = () => {
    menuIcon.classList.toggle('bx-x');
    navbar.classList.toggle('active');
    document.body.style.overflow = navbar.classList.contains('active') ? 'hidden' : '';
};

document.querySelectorAll('.navbar .nav-link, .navbar .btn-resume').forEach(link => {
    link.addEventListener('click', () => {
        menuIcon.classList.remove('bx-x');
        navbar.classList.remove('active');
        document.body.style.overflow = '';
    });
});

// Close on outside click
document.addEventListener('click', (e) => {
    if (navbar.classList.contains('active') && !navbar.contains(e.target) && e.target !== menuIcon) {
        menuIcon.classList.remove('bx-x');
        navbar.classList.remove('active');
        document.body.style.overflow = '';
    }
});

// ===== HEADER SCROLL EFFECT =====
const header = document.querySelector('.header');
window.addEventListener('scroll', () => {
    if (window.scrollY > 80) {
        header.style.boxShadow = '0 4px 30px rgba(0,0,0,0.5)';
    } else {
        header.style.boxShadow = 'none';
    }
});

// ===== SCROLL REVEAL =====
ScrollReveal({
    reset: false,
    distance: '40px',
    duration: 800,
    delay: 100,
    easing: 'cubic-bezier(0.4,0,0.2,1)',
});

ScrollReveal().reveal('.home-text', { origin: 'left', delay: 200 });
ScrollReveal().reveal('.home-visual', { origin: 'right', delay: 300 });
ScrollReveal().reveal('.section-label', { origin: 'top', delay: 100 });
ScrollReveal().reveal('.section-title', { origin: 'top', delay: 150 });
ScrollReveal().reveal('.about-img-wrap', { origin: 'left', delay: 200 });
ScrollReveal().reveal('.about-content', { origin: 'right', delay: 250 });
ScrollReveal().reveal('.timeline-item', { origin: 'bottom', interval: 150 });
ScrollReveal().reveal('.skill-card', { origin: 'bottom', interval: 60 });
ScrollReveal().reveal('.project-card', { origin: 'bottom', interval: 100 });
ScrollReveal().reveal('.calendar-wrap', { origin: 'bottom', delay: 200 });
ScrollReveal().reveal('.git-img', { origin: 'bottom', interval: 100 });
ScrollReveal().reveal('.contact-content', { origin: 'bottom', delay: 200 });

// ===== TYPED.JS =====
const typed = new Typed('.multiple-text', {
    strings: ['Software Engineer', 'React Native Dev', 'Java Developer', 'Fintech Builder'],
    typeSpeed: 80,
    backSpeed: 40,
    backDelay: 1800,
    loop: true,
    smartBackspace: true,
});

// ===== ACTIVE NAV LINK ON SCROLL =====
const sections = document.querySelectorAll('section[id]');
const navLinks = document.querySelectorAll('.nav-link');

const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            navLinks.forEach(link => link.classList.remove('active'));
            const active = document.querySelector(`.nav-link[href="#${entry.target.id}"]`);
            if (active) active.classList.add('active');
        }
    });
}, { threshold: 0.3, rootMargin: '-80px 0px 0px 0px' });

sections.forEach(s => observer.observe(s));