import { defineConfig } from 'astro/config';
import tailwind from '@astrojs/tailwind';
import sitemap from '@astrojs/sitemap';

// Update `site` to the production domain before deploying.
// Stable content revision date — matches SITE.lastContentUpdate. Bump on real
// content changes so <lastmod> stays honest instead of changing every build.
const LASTMOD = '2026-08-31T12:00:00.000Z';

export default defineConfig({
  site: 'https://olsonprowash.com',
  trailingSlash: 'always',
  prefetch: { prefetchAll: true, defaultStrategy: 'hover' },
  integrations: [
    tailwind({ applyBaseStyles: false }),
    sitemap({
      filter: (page) => !/\/(404|thanks)\/?$/.test(page) && !/image-sitemap\.xml/.test(page),
      changefreq: 'weekly',
      lastmod: new Date(LASTMOD),
      serialize(item) {
        const u = item.url;
        item.lastmod = LASTMOD;
        if (/olsonprowash\.com\/?$/.test(u)) item.priority = 1.0;
        else if (/\/(services|contact)\/?$/.test(u)) item.priority = 0.9;
        else if (/\/services\//.test(u)) item.priority = 0.8;
        else if (/\/(gallery|about|service-area|faq)\/?$/.test(u)) item.priority = 0.7;
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
