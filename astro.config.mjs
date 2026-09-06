import { defineConfig } from 'astro/config';
import tailwind from '@astrojs/tailwind';
import sitemap from '@astrojs/sitemap';
import { visit } from 'unist-util-visit';

// Update `site` to the production domain before deploying.
// Stable content revision date — matches SITE.lastContentUpdate. Bump on real
// content changes so <lastmod> stays honest instead of changing every build.
const LASTMOD = '2026-09-02T02:00:00.000Z';

// Give internal links in Markdown a trailing slash so they match
// trailingSlash: 'always' and never take a redirect hop.
function rehypeTrailingSlash() {
  return (tree) => {
    visit(tree, 'element', (node) => {
      if (node.tagName !== 'a') return;
      const href = node.properties && node.properties.href;
      if (typeof href !== 'string' || !href.startsWith('/') || href.startsWith('//')) return;
      const h = href.indexOf('#');
      const q = href.indexOf('?');
      const cut = [h, q].filter((i) => i !== -1).sort((a, b) => a - b)[0] ?? -1;
      const path = cut === -1 ? href : href.slice(0, cut);
      const rest = cut === -1 ? '' : href.slice(cut);
      if (path === '/' || /\.[a-z0-9]+$/i.test(path) || path.endsWith('/')) return;
      node.properties.href = path + '/' + rest;
    });
  };
}

export default defineConfig({
  site: 'https://olsonlandscapingprowash.com',
  trailingSlash: 'always',
  prefetch: { prefetchAll: true, defaultStrategy: 'hover' },
  markdown: { rehypePlugins: [rehypeTrailingSlash] },
  integrations: [
    tailwind({ applyBaseStyles: false }),
    sitemap({
      filter: (page) => !/\/(404|thanks)\/?$/.test(page) && !/image-sitemap\.xml/.test(page),
      changefreq: 'weekly',
      lastmod: new Date(LASTMOD),
      serialize(item) {
        // Canonical URL form site-wide: trailing slash (matches <link rel=canonical>).
        if (!item.url.endsWith('/')) item.url += '/';
        const path = new URL(item.url).pathname;
        item.lastmod = LASTMOD;
        if (path === '/') item.priority = 1.0;
        else if (/^\/(services|contact)\/$/.test(path)) item.priority = 0.9;
        else if (/^\/services\/.+\/$/.test(path)) item.priority = 0.8;
        else if (/^\/(gallery|about|service-area|faq|reviews|guarantee|work)\/$/.test(path)) item.priority = 0.7;
        else if (/^\/faq\/[^/]+\/$/.test(path)) item.priority = 0.6;
        else if (/^\/service-area\/[^/]+\/$/.test(path)) item.priority = 0.6;
        else if (/^\/work\/[^/]+\/$/.test(path)) item.priority = 0.6;
        else if (/^\/blog\/[^/]+\/$/.test(path)) { item.priority = 0.6; item.changefreq = 'monthly'; }
        else if (path === '/blog/') item.priority = 0.6;
        else item.priority = 0.5;
        return item;
      },
    }),
  ],
  build: { inlineStylesheets: 'auto' },
  image: { remotePatterns: [{ protocol: 'https' }] },
});
