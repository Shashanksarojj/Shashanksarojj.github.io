export function initNavigation(): void {
  const menuIcon = document.querySelector<HTMLElement>('#menu-icon');
  const navbar = document.querySelector<HTMLElement>('.navbar');
  const header = document.querySelector<HTMLElement>('.header');

  if (!menuIcon || !navbar || !header) return;

  menuIcon.addEventListener('click', () => {
    menuIcon.classList.toggle('bx-x');
    navbar.classList.toggle('active');
    document.body.style.overflow = navbar.classList.contains('active') ? 'hidden' : '';
  });

  document.querySelectorAll<HTMLAnchorElement>('.navbar .nav-link, .navbar .btn-resume').forEach(link => {
    link.addEventListener('click', () => {
      menuIcon.classList.remove('bx-x');
      navbar.classList.remove('active');
      document.body.style.overflow = '';
    });
  });

  // Close on outside click
  document.addEventListener('click', (e) => {
    const target = e.target as Node;
    if (
      navbar.classList.contains('active') &&
      !navbar.contains(target) &&
      target !== menuIcon
    ) {
      menuIcon.classList.remove('bx-x');
      navbar.classList.remove('active');
      document.body.style.overflow = '';
    }
  });

  window.addEventListener('scroll', () => {
    header.style.boxShadow =
      window.scrollY > 80 ? '0 4px 30px rgba(0,0,0,0.5)' : 'none';
  });
}

export function initActiveNav(): void {
  const sections = document.querySelectorAll<HTMLElement>('section[id]');
  const navLinks = document.querySelectorAll<HTMLAnchorElement>('.nav-link');

  const observer = new IntersectionObserver(
    entries => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          navLinks.forEach(link => link.classList.remove('active'));
          const active = document.querySelector<HTMLAnchorElement>(
            `.nav-link[href="#${entry.target.id}"]`
          );
          if (active) active.classList.add('active');
        }
      });
    },
    { threshold: 0.3, rootMargin: '-80px 0px 0px 0px' }
  );

  sections.forEach(s => observer.observe(s));
}
