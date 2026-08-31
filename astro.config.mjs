import { defineConfig } from 'astro/config';
import tailwind from '@astrojs/tailwind';
import sitemap from '@astrojs/sitemap';

// Update `site` to the production domain before deploying.
export default defineConfig({
  site: 'https://olsonprowash.com',
  trailingSlash: 'ignore',
  prefetch: { prefetchAll: true, defaultStrategy: 'viewport' },
  integrations: [
    tailwind({ applyBaseStyles: false }),
    sitemap({ filter: (page) => !/\/(404|thanks)\/?$/.test(page) }),
  ],
  build: { inlineStylesheets: 'auto' },
  image: { remotePatterns: [{ protocol: 'https' }] },
});
