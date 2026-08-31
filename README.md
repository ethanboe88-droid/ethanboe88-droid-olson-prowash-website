# Olson Pro Wash — Website

Premium dark-luxury marketing site for **Olson Pro Wash** (Olson Landscaping Pro Wash LLC),
a pressure washing, roof cleaning &amp; landscaping company in **Lake Stevens, WA**, serving
Snohomish &amp; North King County.

Built with **Astro 4** + **Tailwind CSS**, vanilla JS only (no React/Vue). Design system and the
two-pass design process are documented in [`DESIGN-SYSTEM.md`](./DESIGN-SYSTEM.md).

## Quick start

```bash
npm install
npm run dev      # http://localhost:4321
npm run build    # static output in ./dist
npm run preview
```

## Structure

```
src/
├── components/     Header, Footer, Hero, BentoServices, BeforeAfter, StatStrip (gauges),
│                   Testimonials, GalleryGrid (+lightbox), LeadModal (pop-up), QuoteForm,
│                   HousecallProWidget, Faq, JetDivider, Icon, Logo …
├── content/blog/   Markdown posts (content collection, typed schema)
├── data/           site.ts (NAP — EDIT FIRST), services.ts (9), testimonials.ts, schema.ts
├── layouts/        BaseLayout.astro (SEO, JSON-LD, ViewTransitions, global JS)
├── pages/          index, services, about, gallery, blog/, contact, thanks, 404, rss.xml.js
└── styles/global.css   design tokens + The Jet-Line signature + reveal system
public/images/      branded SVG placeholders + processed logo (logo.png, logo-wordmark.png)
```

## Customize before launch

| What | Where |
| ---- | ----- |
| Phone, email, hours, cities, social, domain | `src/data/site.ts` |
| Production domain | `astro.config.mjs` (`site:`) |
| **HouseCall Pro booking embed** | `src/components/HousecallProWidget.astro` — paste snippet in `.hcp-embed` |
| Hero video | drop `hero.webm` / `hero.mp4` in `public/media/`, un-comment the `<source>` lines in `src/components/Hero.astro` (a GPU canvas mist plays until then) |
| Real photos | replace files in `public/images/` (before/after, gallery, team, blog heroes, `hero-poster.png`) |
| OG share image | `public/images/og-default.png` (1200×630, generated from the logo) |
| Pop-up offer copy | `src/components/LeadModal.astro` |

Placeholders: phone `(425) 555-0100`, domain `olsonprowash.com`.

## Deploy (Netlify)

`netlify.toml` is preconfigured — build `npm run build`, publish `dist`, Node 20, security +
caching headers, pretty-URL redirects. Connect the repo and deploy. Netlify Forms picks up the
`quote` and `lead` forms automatically.

## SEO

Per-page title / meta / canonical, Open Graph + Twitter, `LocalBusiness` + `FAQPage` JSON-LD on
the homepage, `Service` LD per service, `BlogPosting` + `BreadcrumbList` on posts, auto
`sitemap-index.xml`, `robots.txt`, RSS at `/rss.xml`, local geo meta tags.

## Accessibility & performance (ui-ux-pro-max checklist)

Skip link · visible focus rings · `prefers-reduced-motion` respected everywhere · 44px touch
targets · keyboard + momentum before/after slider · carousel pause on hover/focus/offscreen/hidden
with `aria-live` · form inline validation + error summary focus · lazy images with width/height
(CLS &lt; 0.1) · one preloaded variable font · IntersectionObserver scroll reveals (no scroll
listeners) · GPU transform/opacity/clip-path only.
