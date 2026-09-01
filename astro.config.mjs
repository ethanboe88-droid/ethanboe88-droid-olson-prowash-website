import { defineConfig } from 'astro/config';
import tailwind from '@astrojs/tailwind';
import sitemap from '@astrojs/sitemap';

// Update `site` to the production domain before deploying.
// Stable content revision date — matches SITE.lastContentUpdate. Bump on real
// content changes so <lastmod> stays honest instead of changing every build.
const LASTMOD = '2026-09-01T22:00:00.000Z';

export default defineConfig({
  site: 'https://olsonprowash.com',
  trailingSlash: 'ignore',
  prefetch: { prefetchAll: true, defaultStrategy: 'hover' },
  integrations: [
    tailwind({ applyBaseStyles: false }),
    sitemap({
      filter: (page) => !/\/(404|thanks)\/?$/.test(page) && !/image-sitemap\.xml/.test(page),
      changefreq: 'weekly',
      lastmod: new Date(LASTMOD),
      serialize(item) {
        // Canonical URL form site-wide: no trailing slash (matches <link rel=canonical>).
        item.url = item.url.replace(/([^/])\/$/, '$1');
        const u = item.url;
        item.lastmod = LASTMOD;
        if (/olsonprowash\.com\/?$/.test(u)) item.priority = 1.0;
        else if (/\/(services|contact)\/?$/.test(u)) item.priority = 0.9;
        else if (/\/services\//.test(u)) item.priority = 0.8;
        else if (/\/(gallery|about|service-area|faq|reviews|guarantee|work)\/?$/.test(u)) item.priority = 0.7;
        else if (/\/faq\/[^/]+\/?$/.test(u)) item.priority = 0.6;
        else if (/\/service-area\/[^/]+\/?$/.test(u)) item.priority = 0.6;
        else if (/\/work\/[^/]+\/?$/.test(u)) item.priority = 0.6;
        else if (/\/blog\/[^/]+\/?$/.test(u)) { item.priority = 0.6; item.changefreq = 'monthly'; }
        else if (/\/blog\/?$/.test(u)) item.priority = 0.6;
        else item.priority = 0.5;
        return item;
      },
    }),
  ],
  build: { inlineStylesheets: 'auto' },
  image: { remotePatterns: [{ protocol: 'https' }] },
});
