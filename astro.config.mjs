import { defineConfig } from 'astro/config';
import tailwind from '@astrojs/tailwind';
import sitemap from '@astrojs/sitemap';

// Update `site` to the production domain before deploying.
export default defineConfig({
  site: 'https://olsonprowash.com',
  trailingSlash: 'ignore',
  prefetch: { prefetchAll: true, defaultStrategy: 'hover' },
  integrations: [
    tailwind({ applyBaseStyles: false }),
    sitemap({
      filter: (page) => !/\/(404|thanks)\/?$/.test(page),
      changefreq: 'weekly',
      lastmod: new Date(),
      serialize(item) {
        const u = item.url;
        if (/olsonprowash\.com\/?$/.test(u)) item.priority = 1.0;
        else if (/\/(services|contact)\/?$/.test(u)) item.priority = 0.9;
        else if (/\/services\//.test(u)) item.priority = 0.8;
        else if (/\/(gallery|about|service-area)\/?$/.test(u)) item.priority = 0.7;
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
