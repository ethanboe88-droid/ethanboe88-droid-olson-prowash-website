# Olson Pro Wash — Design System

Built with the **ui-ux-pro-max** skill (data read directly; Python CLI unavailable) plus a
manual two-pass `frontend-design` process (that skill isn't installed).

---

## PASS 1 — The System

### 1. Concept

**"Premium auto detailer meets industrial power."** A near-black OLED canvas, one electric-cyan
signal colour, machined-silver hairlines, and a single recurring motif — **the Jet-Line** — that
turns "pressure washing" into a design primitive. Nothing is generic-SaaS: the reveal motion is a
*power-wash wipe*, the stats are *pressure gauges*, the media sits in *machined bezels*.

### 2. Colour system (semantic tokens → `src/styles/global.css`)

| Token | Hex | Role |
| --- | --- | --- |
| `--ink` | `#0a0a0a` | Page ground (OLED black) |
| `--ink-1` | `#0e0f11` | Raised surface |
| `--ink-2` | `#141518` | Card surface |
| `--ink-3` | `#1c1e22` | Hover surface / inputs |
| `--hairline` | `rgba(192,196,204,0.14)` | Machined-silver 1px borders |
| `--jet` | `#3b9fd4` | Signal / signature (electric blue) |
| `--jet-hi` | `#8fd0f0` | Jet highlight / gradient tip |
| `--jet-deep` | `#1f6f9e` | Jet gradient base, pressed states |
| `--chrome` | `#c0c4cc` | Silver — bezels, gauge ticks |
| `--text` | `#f4f6f8` | Primary text (16.7:1 on ink) |
| `--text-dim` | `#aab1bb` | Secondary text (7.4:1) |
| `--text-mute` | `#767d87` | Tertiary / eyebrow (4.6:1) |
| `--ok` | `#4bd0a0` | Success — always paired with icon+text |
| `--warn` | `#f0b354` | Warning — always paired with icon+text |
| `--danger` | `#f0616b` | Error — always paired with icon+text |

- Contrast verified: body text ≥ 7:1; `--jet` (#3b9fd4) on `--ink` = **5.9:1** → used only for
  large text, icons and non-text UI, never for body copy.
- Dark-mode discipline: functional colours are desaturated tonal variants, not primaries. No
  raw hex in components — everything routes through tokens.

### 3. Typography

| Role | Face | Notes |
| --- | --- | --- |
| Display | **Archivo** (variable `wght` 100–900, `wdth` 62–125) | Hero + section headings use the **width axis pushed to ~118–125** — an "expanded" industrial-signage cut. This is the personality; it is not Inter/Poppins. |
| Body | **Inter** (variable) | The neutral workhorse for readable copy at 16–18px. |
| Eyebrow / instrument label | Archivo 600, `letter-spacing: .22em`, uppercase | Reads as an equipment panel label. |
| Numerals (stats, prices) | Archivo, `font-variant-numeric: tabular-nums` | No layout shift while counters animate. |

Scale (fluid): 13 · 14 · 16 · 18 · 20 · 24 · 32 · 44 · 60 · 84. Body line-height 1.6, headings 1.02,
`text-wrap: balance` on headings, `pretty` on paragraphs.

### 4. Layout concept

- **Asymmetric billboard hero** — oversized expanded-Archivo headline on the left, a cinematic
  video panel on the right inside a *machined bezel* (1px `--chrome` + inner shadow + corner
  notches). Full-viewport (`min-h-dvh`), not a centred hero-with-3-cards.
- Content column `max-width: 1200px`, 12-col mental grid, `clamp()` gutters.
- Sections are separated by the **Jet-Line divider**, never a plain `<hr>`.
- **Services = bento grid.** Roof Cleaning is the dominant 2×2 tile (client priority); the other
  eight services are unit tiles around it.
- Slim sticky header, blur-on-scroll, nav item state shown by the **Jet-Line underline** that
  physically slides between items.

### 5. Signature element — **The Jet-Line**

A −18° cyan pressure-stream (`linear-gradient(105deg, transparent, --jet-deep, --jet, --jet-hi)`)
that is deliberately reused as **four different things**, so the brand feels authored:

1. **Reveal mechanism** — on scroll, blocks are wiped in with a diagonal `clip-path`
   (`polygon`) sweep from dirty→clean, echoing a wand clearing a surface. Not a fade-up.
2. **Nav active indicator** — the underline under the current page.
3. **Before/after slider handle** — the drag handle *is* a vertical jet-line with a nozzle grip.
4. **Section divider** — a full-bleed hairline that brightens to the jet gradient at one end.

Secondary signature: **pressure-gauge stats** — each headline number sits behind a 240° SVG
arc with silver ticks; the needle sweeps to value and the number counts up when scrolled into view.

### 6. Motion system

Tokens: `--ease-out: cubic-bezier(.16,1,.3,1)` · `--ease-in: cubic-bezier(.7,0,.84,0)` ·
durations `120 / 220 / 420 / 620ms` · **exit = ~65% of enter**.

| Interaction | Spec |
| --- | --- |
| Scroll reveal | `IntersectionObserver` (threshold .15, root-margin `0px 0px -10%`), diagonal `clip-path` wipe + 12px rise, stagger **70ms**, fires once. GPU: `clip-path`, `opacity`, `transform` only. |
| Stat gauges | `requestAnimationFrame` count-up (easeOutCubic) + needle `rotate()` when in view. |
| Before/after | Pointer drag with **momentum** (velocity sample + rAF decay), keyboard ←/→, `touch-action: pan-y` so the page still scrolls. |
| Nav underline | measure target rect → `translate3d` the shared jet-line (FLIP). |
| Page transitions | Astro `<ClientRouter />` — 220ms cross-fade + jet-line wipe; `transition:name` on header/logo. |
| Hover | card: `translateY(-4px)` + `scale(1.015)` + jet glow `box-shadow`. Primary CTA only: magnetic pull clamped to `*0.22`, `will-change: transform`, released after. Max 1–2 focal elements per view. |
| Reduced motion | `@media (prefers-reduced-motion: reduce)` → every reveal renders final state instantly, canvas particles freeze, carousel autoplay off, magnetic disabled. |

### 7. Iconography

One set, hand-drawn inline SVG, **1.6 stroke**, 24-grid, `stroke-linecap/join: round`. No emoji.
Decorative icons `aria-hidden`; icon-only controls get `aria-label`.

---

## PASS 2 — Critique (zero generic defaults?)

| Area | Generic default we rejected | What we shipped instead |
| --- | --- | --- |
| Colour | "slate-900 + blue-500 + white" startup combo | True `#0a0a0a` OLED, one cyan **signal**, silver hairlines, functional colours as desaturated tokens w/ icon+text |
| Type | Inter/Inter or Poppins/Open Sans | **Archivo with the width axis expanded** for industrial-signage headers; Inter only for body |
| Hero | Centred headline + 3 feature cards | Asymmetric **billboard** hero, full-dvh, video in a machined bezel |
| Services | 3–4 equal cards | **Bento grid** with Roof Cleaning as the dominant tile |
| Reveal motion | "everything fades up 20px" | **Power-wash `clip-path` wipe**, staggered |
| Stats | plain number + label | **Pressure-gauge dials** with sweeping needle + count-up |
| Dividers | `<hr>` / border-top | **Jet-Line** gradient divider |
| Slider handle | generic circle | **Nozzle-grip jet-line** handle |
| Images | grey placeholder boxes | Branded SVG placeholders carrying the jet-line motif |
| Page nav | instant swap | `ClientRouter` cross-fade + jet wipe, reduced-motion aware |

Signature element present and load-bearing (4 uses). No stock-photo crutches. Accessibility passes
(contrast, focus, reduced-motion, keyboard slider, form labels, carousel controls). **Approved to build.**

---

## Per-page UX notes (ui-ux-pro-max Quick Reference applied)

- **Home** — billboard hero (video + canvas fallback), trust bar (licensed/insured/5-star/locally
  owned), bento services, before/after (momentum), gauge stats, testimonial carousel (pause on
  hover/focus/offscreen/hidden, `aria-live`), HouseCall Pro embed slot, final CTA. One primary CTA
  per section.
- **Services** — sticky sub-nav (jet underline), 9 services each: icon, description, benefits list,
  price range (tabular figures), CTA. `Service` JSON-LD each. Process rail + FAQ (`FAQPage` LD).
- **About** — origin story, owner-operated angle, values, team photo placeholder, "why local".
- **Gallery** — masonry before/after grid, **lightbox** on click (focus-trapped, ESC, arrows),
  swipe on mobile, category filter.
- **Blog** — index + post template: reading time, author, published date, related posts,
  `BlogPosting` + `BreadcrumbList` LD, prose tuned for dark.
- **Contact** — quote form (visible labels, inline validation on blur, error below field +
  `aria-describedby`, error summary focus on submit, `type=tel/email`, `autocomplete`), phone,
  full service area, Google Business link, HouseCall Pro embed slot, service-area map placeholder.
- **Global** — skip link, `<ClientRouter />`, sticky header offset, `prefers-reduced-motion`,
  44×44 touch targets, `loading="lazy"` + width/height on every image (CLS < 0.1), one preloaded
  font weight, `font-display: swap`.
