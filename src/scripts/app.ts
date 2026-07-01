/**
 * NAB Financial — client island.
 *
 * Owns every piece of runtime behaviour the design spec calls for:
 *   • ES/EN language toggle (instant copy swap via [data-i18n] attributes)
 *   • contact modal open/close + mock submit → success state
 *   • single-open FAQ accordion
 *   • scroll reveal (IntersectionObserver, once per element, stagger groups)
 *   • parallax (rAF-throttled) for photos and watermarks
 *
 * All copy lives in ../i18n/strings — the same table used for server render.
 */
import { STR, DEFAULT_LANG, type Lang } from '../i18n/strings';

/* ------------------------------------------------------------------ *
 * i18n — swap all [data-i18n] copy in place
 * ------------------------------------------------------------------ */
const LANG_KEY = 'nab-lang';

function resolvePath(lang: Lang, path: string): unknown {
  return path.split('.').reduce<unknown>((acc, key) => {
    if (acc == null) return undefined;
    return (acc as Record<string, unknown>)[key];
  }, STR[lang]);
}

function applyLang(lang: Lang): void {
  document.documentElement.setAttribute('lang', lang);

  document.querySelectorAll<HTMLElement>('[data-i18n]').forEach((el) => {
    const value = resolvePath(lang, el.dataset.i18n as string);
    if (typeof value === 'string') el.textContent = value;
  });

  document.querySelectorAll<HTMLElement>('[data-i18n-placeholder]').forEach((el) => {
    const value = resolvePath(lang, el.dataset.i18nPlaceholder as string);
    if (typeof value === 'string') el.setAttribute('placeholder', value);
  });

  document.querySelectorAll<HTMLButtonElement>('.lang-toggle__btn').forEach((btn) => {
    const active = btn.dataset.lang === lang;
    btn.classList.toggle('is-active', active);
    btn.setAttribute('aria-pressed', String(active));
  });

  try {
    localStorage.setItem(LANG_KEY, lang);
  } catch {
    /* storage unavailable — non-fatal */
  }
}

function initLang(): void {
  let lang: Lang = DEFAULT_LANG;
  try {
    const stored = localStorage.getItem(LANG_KEY);
    if (stored === 'es' || stored === 'en') lang = stored;
  } catch {
    /* ignore */
  }
  if (lang !== DEFAULT_LANG) applyLang(lang);

  document.querySelectorAll<HTMLButtonElement>('.lang-toggle__btn').forEach((btn) => {
    btn.addEventListener('click', () => applyLang(btn.dataset.lang as Lang));
  });
}

/* ------------------------------------------------------------------ *
 * Contact modal
 * ------------------------------------------------------------------ */
function initModal(): void {
  const modal = document.querySelector<HTMLElement>('[data-modal]');
  if (!modal) return;

  const form = modal.querySelector<HTMLElement>('[data-modal-form]');
  const sent = modal.querySelector<HTMLElement>('[data-modal-sent]');
  const leadForm = modal.querySelector<HTMLFormElement>('[data-lead-form]');
  const overlay = modal.querySelector<HTMLElement>('[data-modal-overlay]');
  let lastFocused: HTMLElement | null = null;

  const showForm = () => {
    form?.removeAttribute('hidden');
    sent?.setAttribute('hidden', '');
  };

  const open = () => {
    lastFocused = document.activeElement as HTMLElement;
    showForm();
    leadForm?.reset();
    modal.removeAttribute('hidden');
    modal.setAttribute('aria-hidden', 'false');
    document.body.style.overflow = 'hidden';
    requestAnimationFrame(() => modal.classList.add('is-open'));
    modal.querySelector<HTMLElement>('input, button')?.focus();
  };

  const close = () => {
    modal.classList.remove('is-open');
    modal.setAttribute('aria-hidden', 'true');
    document.body.style.overflow = '';
    const done = () => {
      modal.setAttribute('hidden', '');
      modal.removeEventListener('transitionend', done);
    };
    modal.addEventListener('transitionend', done);
    // Failsafe in case the transition doesn't fire.
    setTimeout(() => modal.hasAttribute('hidden') || modal.setAttribute('hidden', ''), 320);
    lastFocused?.focus();
  };

  document.querySelectorAll<HTMLElement>('[data-open-modal]').forEach((btn) => {
    btn.addEventListener('click', open);
  });
  modal.querySelectorAll<HTMLElement>('[data-modal-close]').forEach((btn) => {
    btn.addEventListener('click', close);
  });

  // Overlay click closes; panel click does not (overlay is the flex wrapper).
  overlay?.addEventListener('click', (e) => {
    if (e.target === overlay) close();
  });

  document.addEventListener('keydown', (e) => {
    if (e.key === 'Escape' && !modal.hasAttribute('hidden')) close();
  });

  leadForm?.addEventListener('submit', (e) => {
    e.preventDefault();
    if (!leadForm.checkValidity()) {
      leadForm.reportValidity();
      return;
    }
    // TODO: POST FormData(leadForm) to the real lead endpoint / CRM here.
    form?.setAttribute('hidden', '');
    sent?.removeAttribute('hidden');
  });
}

/* ------------------------------------------------------------------ *
 * FAQ accordion — single open
 * ------------------------------------------------------------------ */
function initFaq(): void {
  const root = document.querySelector<HTMLElement>('[data-faq]');
  if (!root) return;
  const items = [...root.querySelectorAll<HTMLElement>('[data-faq-item]')];

  items.forEach((item) => {
    const btn = item.querySelector<HTMLButtonElement>('[data-faq-toggle]');
    btn?.addEventListener('click', () => {
      const willOpen = !item.classList.contains('is-open');
      items.forEach((other) => {
        const isTarget = other === item && willOpen;
        other.classList.toggle('is-open', isTarget);
        other
          .querySelector('[data-faq-toggle]')
          ?.setAttribute('aria-expanded', String(isTarget));
      });
    });
  });
}

/* ------------------------------------------------------------------ *
 * Scroll reveal
 * ------------------------------------------------------------------ */
const prefersReduced = (): boolean => {
  try {
    return window.matchMedia('(prefers-reduced-motion: reduce)').matches;
  } catch {
    return false;
  }
};

function initReveal(): void {
  const show = (el: Element) => el.setAttribute('data-shown', '');

  // No IntersectionObserver → reveal everything up front so nothing stays
  // stuck at opacity:0. Reduced-motion is handled by CSS (forces visible).
  if (!('IntersectionObserver' in window)) {
    document.querySelectorAll('[data-reveal]').forEach(show);
    return;
  }
  if (prefersReduced()) return;

  const io = new IntersectionObserver(
    (entries, obs) => {
      entries.forEach((e) => {
        if (!e.isIntersecting) return;
        const el = e.target as HTMLElement;
        if (el.hasAttribute('data-stagger')) {
          const kids = [...el.querySelectorAll<HTMLElement>('[data-reveal]')].filter(
            (k) => k.closest('[data-stagger]') === el,
          );
          kids.forEach((k, i) => {
            // Subtle stagger, capped so large groups (6 services / FAQ) don't drag.
            k.style.transitionDelay = `${Math.min(i, 8) * 80}ms`;
            show(k);
          });
        } else {
          show(el);
        }
        obs.unobserve(el);
      });
    },
    { threshold: 0.12, rootMargin: '0px 0px -12% 0px' },
  );

  document.querySelectorAll('[data-stagger]').forEach((s) => io.observe(s));
  document.querySelectorAll('[data-reveal]').forEach((el) => {
    if (!el.closest('[data-stagger]')) io.observe(el);
  });
}

/* ------------------------------------------------------------------ *
 * Parallax
 * ------------------------------------------------------------------ */
function initParallax(): void {
  if (prefersReduced()) return;
  const els = [...document.querySelectorAll<HTMLElement>('[data-parallax]')];
  if (!els.length) return;

  let ticking = false;
  const update = () => {
    const vh = window.innerHeight || 800;
    els.forEach((el) => {
      const sp = parseFloat(el.getAttribute('data-parallax') || '0.06') || 0.06;
      const r = el.getBoundingClientRect();
      const center = r.top + r.height / 2 - vh / 2;
      el.style.transform = `translate3d(0, ${(-center * sp).toFixed(1)}px, 0)`;
    });
    ticking = false;
  };
  const onScroll = () => {
    if (!ticking) {
      ticking = true;
      requestAnimationFrame(update);
    }
  };
  window.addEventListener('scroll', onScroll, { passive: true });
  window.addEventListener('resize', onScroll, { passive: true });
  update();
}

/* ------------------------------------------------------------------ *
 * Boot
 * ------------------------------------------------------------------ */
function boot(): void {
  initLang();
  initModal();
  initFaq();
  initReveal();
  initParallax();
}

if (document.readyState === 'loading') {
  document.addEventListener('DOMContentLoaded', boot);
} else {
  boot();
}
