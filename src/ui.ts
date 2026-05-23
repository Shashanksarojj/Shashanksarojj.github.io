export function initScrollProgress(): void {
  const bar = document.querySelector<HTMLElement>('.scroll-progress');
  if (!bar) return;

  window.addEventListener('scroll', () => {
    const scrollTop = window.scrollY;
    const docHeight = document.documentElement.scrollHeight - window.innerHeight;
    const progress = docHeight > 0 ? (scrollTop / docHeight) * 100 : 0;
    bar.style.width = `${progress}%`;
  });
}

export function initBackToTop(): void {
  const btn = document.querySelector<HTMLButtonElement>('.back-to-top');
  if (!btn) return;

  window.addEventListener('scroll', () => {
    btn.classList.toggle('visible', window.scrollY > 400);
  });

  btn.addEventListener('click', () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  });
}

export function initToast(): void {
  const toast = document.querySelector<HTMLElement>('.toast');
  if (!toast) return;

  let hideTimer: ReturnType<typeof setTimeout> | null = null;

  window.showToast = (message: string): void => {
    toast.textContent = message;
    toast.classList.add('show');

    if (hideTimer) clearTimeout(hideTimer);
    hideTimer = setTimeout(() => toast.classList.remove('show'), 3000);
  };
}

export function initCopyEmail(): void {
  const btn = document.querySelector<HTMLButtonElement>('.copy-email-btn');
  if (!btn) return;

  btn.addEventListener('click', async () => {
    const email = btn.dataset['email'] ?? '';
    try {
      await navigator.clipboard.writeText(email);
      window.showToast?.('Email copied to clipboard!');
    } catch {
      window.showToast?.(`Email: ${email}`);
    }
  });
}

export function initLoader(): void {
  const loader = document.querySelector<HTMLElement>('#loader');
  if (!loader) return;

  window.addEventListener('load', () => {
    setTimeout(() => loader.classList.add('hidden'), 600);
  });
}
