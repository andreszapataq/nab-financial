# NAB Financial — Implementation

A hi-fi recreation of the design handoff (see [`README.md`](README.md)) as a fast,
SEO-friendly static marketing site.

## Stack & why

| Concern | Choice | Rationale |
| --- | --- | --- |
| Framework | **Astro 5** (static output) | Zero-JS-by-default, ideal for a marketing page. Ships pure HTML/CSS; the only JavaScript is one ~6 KB gzipped island. Astro is also the live site's stack, per the handoff. |
| Icons | **astro-icon** + `@iconify-json/lucide` | The exact Lucide glyphs from the spec, **inlined as SVG at build time** — no runtime CDN request, no FOUC, no `lucide.createIcons()` polling. |
| Fonts | **@fontsource-variable/mulish** | Self-hosted Mulish (the specified Proxima Nova substitute). No Google Fonts request. |
| Styling | **Design tokens as CSS custom properties** | The `tokens/*.css` files are treated as the source of truth (copied to `src/styles/tokens/`). Components are styled with scoped `<style>` blocks referencing the tokens — pixel-accurate to the spec. |
| i18n | **Single TS string table** (`src/i18n/strings.ts`) | Used both for server render (default `es`) **and** in the client island, so the ES/EN header toggle swaps every string instantly with no reload and no duplicated copy. |
| Interactivity | **One vanilla-TS island** (`src/scripts/app.ts`) | Language toggle, contact modal, single-open FAQ accordion, scroll-reveal (IntersectionObserver) and parallax (rAF) — the DC-runtime behaviours re-expressed in framework-agnostic DOM code. |

## Project structure

```
src/
  i18n/strings.ts         # bilingual copy (ES/EN) — single source of truth
  layouts/Layout.astro    # <head>, SEO/OG tags, LocalBusiness JSON-LD, global CSS + island
  pages/index.astro       # assembles the sections
  scripts/app.ts          # client island (lang / modal / faq / reveal / parallax)
  styles/
    global.css            # reset, layout helpers, reveal + responsive rules
    tokens/*.css          # design tokens (source of truth)
  components/
    Header, Hero, TrustStrip, Services, About,
    Testimonials, Faq, CtaBand, Footer, ContactModal, ImageFrame
    ds/                   # design-system primitives:
      Button, ServiceCard, Input, Select, Checkbox, IconButton
public/assets/            # logos + gradient mark (SVG)
design-reference/         # original DC prototype (not built) + source tokens
```

## Commands

```bash
npm install     # install dependencies
npm run dev      # local dev server (http://localhost:4321)
npm run build    # static build → dist/
npm run preview  # serve the production build
```

## Notes for going live

- **Photos** — the hero and about frames render a branded placeholder until real
  photography is supplied. Drop images in `public/assets/` and pass them to
  `ImageFrame` (`src` / `srcset`); it already handles the parallax-safe overflow
  crop. Target sizes per the handoff: hero **1600×1200** (4:3), about **1400×1200**.
- **Lead form** — the modal submit is a mock that shows the success state. Wire the
  real endpoint / CRM at the `TODO` in `src/scripts/app.ts` (`FormData` is ready to POST).
- **Accessibility** — respects `prefers-reduced-motion`, keyboard-dismissable modal
  (Esc + overlay click, focus restore), labelled controls, semantic landmarks.
- Language preference persists in `localStorage`; the page renders in Spanish by default.
