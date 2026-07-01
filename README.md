# Handoff: NAB Financial Consulting — Landing Page (bilingual)

> **Implementation status:** built as an **Astro** static site (see
> [`IMPLEMENTATION.md`](IMPLEMENTATION.md) for the stack, structure and commands).
> The original design prototype (`NAB Landing.dc.html`, `support.js`,
> `image-slot.js`, source tokens) now lives in [`design-reference/`](design-reference/).

## Overview
A marketing landing page for **NAB Financial Consulting LLC**, a Houston, TX bilingual tax &
financial-services firm serving the Hispanic/Latino community. The page presents the firm's 7
services, trust proof, an about section, testimonials, an FAQ, and a lead-capture "book an
appointment" modal. It is fully **bilingual (Spanish default / English)** with an in-header
ES/EN toggle, and animates on scroll.

## About the Design Files
The files in this bundle are **design references created in HTML** — a working prototype showing
the intended look, copy, and behavior. They are **not production code to copy directly**. The task
is to **recreate this design in the target codebase's environment** (the live site is Astro; React
components would also be fine) using its established patterns, i18n system, and asset pipeline.
If no environment exists, pick the most appropriate stack for a marketing site (Astro or Next.js
recommended).

> The prototype is authored as a "Design Component" (`.dc.html`) — a custom streaming-template
> runtime (`support.js`). **Ignore the DC runtime**; read it only to extract markup, styles, copy,
> and behavior. Do not port `support.js`, `<x-import>`, `<sc-for>`, `<sc-if>`, or `renderVals()`
> to production — translate them to the target framework's equivalents (components, `.map()`,
> conditionals, props/state).

## Fidelity
**High-fidelity (hifi).** Final colors, typography, spacing, radii, shadows, copy (both languages),
and interactions are all specified below and in the token files. Recreate pixel-accurately using
the codebase's existing component library where one exists; otherwise use the tokens in `tokens/`.

## Design System
Built on the **NAB Financial Design System**. Design tokens are included in `tokens/`
(`colors.css`, `typography.css`, `spacing.css`, `radii.css`) as CSS custom properties — treat these
as the source of truth. The prototype composes these design-system React components:
**Button, ServiceCard, Card, Accordion/AccordionItem, Input, Select, Checkbox, IconButton, Stat,
Avatar, Badge** (namespace `NABFinancialDesignSystem_ec3613`). In production, use the firm's real
component library equivalents; the descriptions below specify each one's appearance so they can be
rebuilt if needed.

---

## Screens / Views

Single scrolling page. Max content width **1320px** (`--container-2xl`), centered, horizontal
padding `--space-7` (32px). Section vertical padding `--space-12` (96px) unless noted. Background
white; alternating sections use `--surface-subtle` (#f5f7f6); two sections are dark ink
(`--surface-inverse` #0b0e0d).

### 1. Header (sticky)
- **Layout**: sticky top, height 80px, `rgba(255,255,255,0.86)` + `backdrop-filter: blur(12px)`,
  1px bottom border `--border-subtle`. Flex row: logo left; right cluster (`margin-left:auto`)
  holding nav links, ES/EN toggle, and CTA.
- **Logo**: `assets/nab-logo-cropped.svg`, height **52px**. (This is the primary lockup SVG with a
  tight viewBox — the original `nab-logo.svg` has a letter-size artboard with huge whitespace, so it
  renders tiny; use the cropped one, or re-export a tightly-cropped asset.)
- **Nav links** (`.nab-desktop-nav`, hidden below 860px): Servicios/Services · Nosotros/About ·
  Opiniones/Reviews · Preguntas/FAQ. `--text-base` (16px), weight 600, color `--text-secondary`,
  anchor to `#servicios #nosotros #opiniones #preguntas`.
- **Phone link**: `(832) 801-0188` with `phone` icon, color `--text-brand`, `white-space:nowrap`,
  `flex:none`, `href="tel:+18328010188"`.
- **ES/EN toggle**: pill segmented control. Track `--surface-muted`, `border-radius:pill`, 3px pad.
  Each button 6px/12px pad, weight 700, `--text-sm`. Active button: white bg, `--text-brand`,
  `--shadow-xs`. Inactive: transparent, `--text-muted`. Switches all page copy instantly.
- **CTA**: primary Button size `sm`, label "Agenda tu cita"/"Book appointment", `calendar` icon
  right; opens the contact modal.

### 2. Hero
- **Layout**: 2-col grid `1.08fr 0.92fr`, gap `--space-10`, align center. Section background:
  `radial-gradient(1100px 520px at 80% -10%, var(--surface-brand-subtle), transparent 60%)` over
  white. Collapses to 1 col below 980px.
- **Left column** (staggered reveal):
  - Eyebrow: `.nab-eyebrow` (uppercase, weight 700, tracking 0.08em, `--text-brand`) preceded by the
    `.nab-chevron` gradient arrow. Text: "NAB Financial Consulting · Houston, TX".
  - H1: `clamp(2.6rem, 4.4vw, 4rem)`, weight 800, line-height 1.04, letter-spacing -0.02em.
    "Tus impuestos, en manos **expertas.**" / "Your taxes, in **expert hands.**" (highlighted word
    in `--text-brand`).
  - Body: `--text-lg` (20px), line-height 1.65, `--text-secondary`, max-width 52ch.
  - CTAs: Button lg "Agenda tu cita" (calendar icon) + Button lg outline "Ver servicios"
    (anchors `#servicios`).
  - Rating row: five filled amber (`#e8a317`) `star` icons + "**5,000+** familias y negocios
    atendidos".
- **Right column**: photo frame 460px tall, `border-radius:24px`, `overflow:hidden`,
  `--shadow-lg`, containing an image placeholder (see Assets). Two floating cards overlap its edges:
  a white "Declaración segura / IRS e-file autorizado" card (bottom-left, shield-check chip) and a
  dark pill "Atención bilingüe" (top-right, green dot).

### 3. Trust strip (dark)
- Background `--surface-inverse`, white text, padding `--space-9` vertical. 4-col grid, centered,
  staggered reveal. Each: big number `--text-4xl` weight 800 + label `--text-sm` at 70% white.
  Data: **15+** Años de experiencia · **5,000+** Familias y negocios · **7** Servicios financieros ·
  **100%** Atención bilingüe. Collapses to 2 col below 980px.

### 4. Services (`#servicios`)
- Centered header (staggered): eyebrow "Nuestros servicios", H2 `--text-3xl` "Todo lo financiero,
  bajo un mismo techo", body `--text-lg`. Max-width 640px.
- **Featured highlight** (reveal with scale 0.95→1): 2-col grid `1fr 0.82fr`. Left: white card,
  `--radius-xl`, border, `--shadow-sm`, `--space-9` pad — eyebrow "Servicio destacado", H3
  `--text-2xl` "Tus impuestos, en manos expertas", body, 3 check rows (green `check` icons:
  Impuestos personales / de negocios / Declaración segura por e-file), Button "Agenda tu
  declaración". Right: gradient panel (`--gradient-arrow`), white text, `--radius-xl`, min-height
  320px — a translucent "IRS e-file · Autorizado" badge, big "100%", "en español, paso a paso",
  supporting sentence, and a faint `nab-mark.svg` watermark (parallax).
- **Service grid**: 3-col (2 at ≤980px, 1 at ≤640px), gap `--space-6`, staggered reveal. 6 cards.
  Each **ServiceCard**: white, 1px `--border-subtle`, `--radius-lg` (16px), `--shadow-sm`,
  `--space-7` pad; 56px tinted rounded icon chip (brand tint `--surface-brand-subtle`/
  `--color-brand-strong` OR accent tint `--surface-accent-subtle`/`--teal-600`); title `--text-xl`
  weight 700; description `--text-base` `--text-secondary`; a "Saber más →"/"Learn more →" link in
  `--text-brand` whose arrow slides +4px on hover. Whole card lifts `translateY(-4px)` to
  `--shadow-lg` on hover; clicking opens the modal.
  Cards (icon · title · accent):
  1. `badge-check` · ITIN Number · accent(teal)
  2. `file-check-2` · Documentos legales / Legal documents · brand(green)
  3. `landmark` · Inmigración / Immigration · accent
  4. `calculator` · Contabilidad / Bookkeeping · brand
  5. `wallet` · Payroll · accent
  6. `stamp` · Notaría pública / Notary public · brand

### 5. About (`#nosotros`)
- Background `--surface-subtle`. 2-col `0.9fr 1.1fr`. Left: photo frame 440px tall,
  `border-radius:22px`, `overflow:hidden`, with a gradient "15+ años de experiencia" chip
  overlapping the bottom-right corner. Right (staggered): eyebrow "Por qué NAB", H2 "Tu socio
  financiero de confianza en Houston", body, and a 2×2 grid of 4 points, each a 44px brand-tinted
  icon chip + bold title + `--text-sm` description:
  `users` Trato personal · `languages` Todo en español · `shield-check` Presentación segura ·
  `map-pin` En tu comunidad.

### 6. Testimonials (`#opiniones`)
- Centered header eyebrow "Opiniones" + H2 "Lo que dice nuestra comunidad". 3-col grid (1 col
  ≤640px), staggered. Each **Card**: white, `--radius-lg`, `--shadow-sm`, `--space-7`, flex column
  gap 16px — a row of 5 amber stars, the quote in `--text-md` (18px), then a 44px circular initials
  avatar (brand-tinted, `--green-700` text) + name (weight 700) + role (`--text-muted`).
  3 quotes (María G. / Jorge R. / Lucía M.) — see the copy in the HTML for both languages.

### 7. FAQ (`#preguntas`)
- Background `--surface-subtle`. 2-col `0.8fr 1.2fr`, align start. Left (staggered): eyebrow
  "Preguntas frecuentes", H2 "Resolvemos tus dudas", note with the phone number. Right: white card
  (`--radius-lg`, border, `--shadow-sm`, `--space-8`) holding an **accordion** of 5 items.
- **Accordion behavior — single-open**: opening one item closes any other (only one open at a time;
  first item open by default). Each row: full-width button (question `--text-md` weight 600) + a
  30px circular chevron chip on the right. Open state: chip bg `--color-brand`, white icon, chevron
  rotated 180°. Closed: chip bg `--surface-muted`, `--text-secondary` icon. Answer panel expands via
  `grid-template-rows: 0fr → 1fr` transition (260ms `--ease-out`); answer text `--text-base`,
  `--text-secondary`, max-width 70ch. 1px `--border-subtle` divider per row.

### 8. CTA band
- Full-width (within container) gradient panel `--gradient-arrow`, `--radius-2xl` (30px),
  `--space-11`/`--space-10` pad, white text, `--shadow-xl`, reveal with scale. Left: H2 "Empieza tu
  declaración hoy mismo" + body. Right: Button lg secondary (dark) "Agenda tu cita" (calendar) +
  Button lg ghost "Llámanos" (white text, translucent border, phone icon, `tel:` link). Faint
  `nab-mark.svg` watermark bottom-right (parallax). Stacks vertically below 640px.

### 9. Footer
- Background `--surface-inverse`, text at 72% white. 3-col grid `1.4fr 1fr 1fr` (1 col ≤640px),
  staggered. Col 1: `nab-logo-white.svg` (46px) + tagline. Col 2: "Contacto" heading + address
  (450 N Sam Houston Pkwy E, Suite 130, Houston, TX 77060), phone, email — each with a
  `--green-400` icon. Col 3: "Servicios" heading + 5 service links. Bottom bar (1px top border):
  copyright left, hours "Lun–Sáb · 9:00 AM – 7:00 PM" right.

### 10. Contact modal
- Trigger: any "Agenda tu cita" / featured / band CTA. Overlay `rgba(11,14,13,0.55)` +
  `blur(3px)`, centered. Panel: white, `--radius-xl` (22px), `--shadow-xl`, `--space-9` pad,
  `max-height:92vh` scroll, `width:min(520px,100%)`. Close IconButton top-right (`x`). Form fields:
  Full name (`user` icon, required), Phone (`phone`, tel, required) + Email (`mail`) in a 2-col row,
  a Select "¿En qué te ayudamos?" (7 options: taxes/itin/immigration/accounting/payroll/notary/
  legal), a Checkbox consent (default checked), and a full-width primary Button "Solicitar cita"
  (arrow-right). On submit → success state: green circular `check`, "¡Cita solicitada!", message,
  "Listo" button. Clicking overlay closes; clicking panel does not. (The submit is a mock — wire it
  to the real lead endpoint / CRM.)

---

## Interactions & Behavior

### Scroll reveal (once per element)
- Every section's content elements carry a reveal: **fade-in + slide-up 20px**, `opacity`+
  `transform` transition **540ms** `--ease-out` (`cubic-bezier(0.22,1,0.36,1)`).
- **Stagger**: containers marked as stagger groups reveal their children sequentially with **95ms**
  incremental `transition-delay`.
- **Scale variant**: the featured-services highlight and the CTA band reveal from `scale(0.95)`→`1`
  (same fade + timing).
- Fires **once** when the element enters the viewport (IntersectionObserver, threshold 0.12,
  `rootMargin: 0px 0px -8% 0px`), then unobserved — does not replay on scroll up.
- Respects `prefers-reduced-motion: reduce` (everything shown, no transition). Include a failsafe
  that reveals anything still hidden after ~2.8s.
- Implementation note for production: prefer a reusable hook/directive
  (e.g. IntersectionObserver + a `data-shown` attribute or a class). In the prototype, `data-shown`
  is set as a plain attribute so the framework re-render never clobbers it.

### Parallax
- 4 background images move slower than content: the two photo placeholders (hero, about) and the two
  `nab-mark.svg` watermarks. On scroll (rAF-throttled), `translateY = -(elementCenter - viewportCenter) * speed`,
  speed **0.06** for photos, **0.10** for watermarks. Photos sit in `overflow:hidden` frames with the
  image ~44px taller than the frame (and offset `top:-44px`) so the parallax shift never exposes a gap.
  Disabled under `prefers-reduced-motion`.

### Component micro-interactions
- Buttons: pill (`--radius-pill`); hover a step darker (primary → `--color-brand-strong`); press
  `translateY(1px) scale(0.985)`; primary has a green glow `--shadow-brand`.
- ServiceCard: hover lift −4px + `--shadow-lg`, link arrow nudges +4px.
- Accordion: 260ms grid-rows expand; chevron 180° rotate; chip color swap.
- Focus rings: `--ring-brand` (error `--ring-error`).

## State Management
- `lang`: `'es' | 'en'` — drives all copy (default `'es'`). Provide a full string table per language
  (see the `STR` object in the HTML for the exact copy of both). Wire this to the app's i18n library.
- `openFaq`: index of the open FAQ item (`0` default; `-1` = all closed). Toggling an item sets it
  to that index, or `-1` if it was already open (enforces single-open).
- `modalOpen`: boolean.
- `sent`: boolean — success state inside the modal.
- Reveal/parallax use DOM observers/listeners set up on mount and cleaned up on unmount.

## Design Tokens
Full values are in `tokens/` (CSS custom properties). Key ones:
- **Brand**: green `--green-500` #00a550 (primary), teal `--teal-500` #2d8a88 (accent), near-black
  `--neutral-900` #0b0e0d (ink). Green-strong #008944, teal-600 #246e6d.
- **Gradient**: `--gradient-arrow: linear-gradient(120deg,#00a550 0%,#008944 45%,#246e6d 100%)`.
- **Surfaces**: page #fff, `--surface-subtle` #f5f7f6, `--surface-muted` #eceeec, tints
  `--surface-brand-subtle` #e9f9f0 / `--surface-accent-subtle` #e7f3f3, inverse #0b0e0d.
- **Text**: primary #0b0e0d, secondary #4d5651, muted #6e7873, brand #008944.
- **Type**: family **Mulish** (Google Fonts; substitute for Proxima Nova — swap when licensed
  files exist). Weights 400/600/700/800. Scale: base 16, md 18, lg 20, xl 24, 2xl 30, 3xl 36,
  4xl 48, 5xl 60. Eyebrows uppercase, weight 700, tracking 0.08em.
- **Spacing**: 4px grid; space-6 24, space-7 32, space-9 48, space-10 64, space-11 80, space-12 96.
- **Radii**: md 10, lg 16 (cards), xl 22, 2xl 30, pill 999. Inputs 10px, buttons full pill.
- **Shadows**: xs/sm/md/lg/xl tinted `rgba(11,14,13,…)`; `--shadow-brand` green glow for primary CTAs.
- **Motion**: `--ease-out cubic-bezier(0.22,1,0.36,1)`; durations 130/200/320ms; reveals 540ms.
- **Amber for stars**: #e8a317 (fill + color).

## Assets
- `assets/nab-logo-cropped.svg` — primary lockup, tightly cropped (use in header at 52px).
- `assets/nab-logo.svg` — original primary lockup (letter-size artboard; whitespace-heavy — avoid or re-crop).
- `assets/nab-logo-white.svg` — reversed lockup for dark/green surfaces (footer, 46px).
- `assets/nab-mark.svg` — standalone gradient arrow mark (feature panel + CTA watermarks).
- Icons: **Lucide** (`https://unpkg.com/lucide@0.460.0`), ~2px rounded stroke. Glyphs used:
  file-text, badge-check, calculator, wallet, stamp, file-check-2, landmark, phone, mail, map-pin,
  calendar, shield-check, users, languages, star (filled amber), arrow-right, check, x, user.
- **Photos (2 placeholders — user supplies)**:
  - Hero (team/office): upload **1600×1200 px** (4:3), JPG, sRGB, landscape, subject centered
    (`object-fit:cover`). < ~400KB.
  - About (office): upload **1400×1200 px** (~7:6), JPG, landscape, centered cover. < ~400KB.
  - No B&W or heavy filters — warm, natural, documentary photography.
- The prototype uses an `<image-slot>` web component (`image-slot.js`) as a drag-drop placeholder.
  In production, replace with a normal `<img>`/`<picture>` (responsive `srcset` at 1× and 2×).

## Files
- `NAB Landing.dc.html` — the full design (markup, inline styles, copy for both languages in the
  `STR` object, and the reveal/parallax/toggle/FAQ logic). **Primary reference.**
- `tokens/*.css` — design tokens (colors, typography, spacing, radii).
- `assets/*.svg` — logos and mark.
- `image-slot.js`, `support.js` — prototype runtime only; **do not port to production.**
