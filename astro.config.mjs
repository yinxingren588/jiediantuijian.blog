// @ts-check
import { defineConfig } from 'astro/config';
import tailwindcss from '@tailwindcss/vite';
import sitemap from '@astrojs/sitemap';

// https://astro.build/config
export default defineConfig({
  site: 'https://jiediantuijian.blog',
  trailingSlash: 'never',
  integrations: [
    sitemap({
      filter: (page) => !page.includes('/404') && !page.endsWith('/sitemap.xml'),
      serialize(item) {
        item.lastmod = new Date();
        const url = item.url.replace(/\/$/, '');

        if (url === 'https://jiediantuijian.blog') {
          item.priority = 1.0;
          item.changefreq = 'daily';
        } else if (url.endsWith('/nodes') || url.endsWith('/comparison')) {
          item.priority = 0.9;
          item.changefreq = 'daily';
        } else if (url.includes('/nodes/')) {
          item.priority = 0.9;
          item.changefreq = 'weekly';
        } else if (url.endsWith('/blog') || url.includes('/blog/')) {
          item.priority = 0.9;
          item.changefreq = url.endsWith('/blog') ? 'daily' : 'weekly';
        } else if (url.endsWith('/tutorials') || url.includes('/tutorials/')) {
          item.priority = 0.8;
          item.changefreq = 'weekly';
        } else if (url.endsWith('/faq') || url.includes('/faq/')) {
          item.priority = 0.8;
          item.changefreq = url.endsWith('/faq') ? 'daily' : 'weekly';
        } else if (url.endsWith('/sitemap')) {
          item.priority = 0.7;
          item.changefreq = 'daily';
        } else {
          item.priority = 0.6;
          item.changefreq = 'monthly';
        }
        return item;
      },
    }),
  ],
  vite: {
    plugins: [tailwindcss()],
  },
});
