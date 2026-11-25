import type { APIRoute } from 'astro';
import { NODE_LIST } from '../data/nodes';
import { BLOG_POSTS } from '../data/blogs';
import { FAQS_LIST } from '../data/faqs';
import { CLIENT_LIST } from '../data/clients';

export const prerender = true;

const SITE_URL = 'https://jiediantuijian.blog';

interface SitemapEntry {
  path: string;
  lastmod: string;
  changefreq: 'daily' | 'weekly' | 'monthly';
  priority: string;
}

function escapeXml(value: string): string {
  return value
    .replace(/&/g, '&amp;')
    .replace(/</g, '&lt;')
    .replace(/>/g, '&gt;')
    .replace(/"/g, '&quot;')
    .replace(/'/g, '&apos;');
}

function normalizeUrl(path: string): string {
  if (!path || path === '/') {
    return `${SITE_URL}/`;
  }
  const cleanPath = path.startsWith('/') ? path.replace(/\/+$/, '') : `/${path.replace(/\/+$/, '')}`;
  return `${SITE_URL}${cleanPath}`;
}

export const GET: APIRoute = () => {
  const buildLastmod = new Date().toISOString();
  const entries: SitemapEntry[] = [];
  const seen = new Set<string>();

  const addEntry = (entry: SitemapEntry) => {
    const loc = normalizeUrl(entry.path);
    if (seen.has(loc)) return;
    seen.add(loc);
    entries.push({ ...entry, path: loc });
  };

  // 1. Core navigation pages
  addEntry({ path: '/', lastmod: buildLastmod, changefreq: 'daily', priority: '1.0' });
  addEntry({ path: '/nodes', lastmod: buildLastmod, changefreq: 'daily', priority: '0.9' });
  addEntry({ path: '/comparison', lastmod: buildLastmod, changefreq: 'daily', priority: '0.9' });
  addEntry({ path: '/blog', lastmod: buildLastmod, changefreq: 'daily', priority: '0.9' });
  addEntry({ path: '/faq', lastmod: buildLastmod, changefreq: 'daily', priority: '0.8' });
  addEntry({ path: '/tutorials', lastmod: buildLastmod, changefreq: 'weekly', priority: '0.8' });
  addEntry({ path: '/sitemap', lastmod: buildLastmod, changefreq: 'daily', priority: '0.7' });
  addEntry({ path: '/about', lastmod: buildLastmod, changefreq: 'monthly', priority: '0.6' });

  // 2. Client & router tutorials
  for (const client of CLIENT_LIST) {
    addEntry({
      path: client.tutorialUrl,
      lastmod: buildLastmod,
      changefreq: 'weekly',
      priority: '0.8',
    });
  }

  // 3. Editorial blog articles
  for (const post of BLOG_POSTS) {
    addEntry({
      path: `/blog/${post.slug}`,
      lastmod: buildLastmod,
      changefreq: 'weekly',
      priority: '0.9',
    });
  }

  // 4. Dedicated node review pages
  for (const node of NODE_LIST) {
    addEntry({
      path: `/nodes/${node.slug}`,
      lastmod: buildLastmod,
      changefreq: 'weekly',
      priority: '0.9',
    });
  }

  // 5. Independent deep FAQ pages
  for (const faq of FAQS_LIST) {
    addEntry({
      path: `/faq/${faq.slug}`,
      lastmod: buildLastmod,
      changefreq: 'weekly',
      priority: '0.8',
    });
  }

  const urlNodes = entries
    .map(
      (item) => `  <url>
    <loc>${escapeXml(item.path)}</loc>
    <lastmod>${item.lastmod}</lastmod>
    <changefreq>${item.changefreq}</changefreq>
    <priority>${item.priority}</priority>
  </url>`
    )
    .join('\n');

  const xml = `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
${urlNodes}
</urlset>
`;

  return new Response(xml, {
    status: 200,
    headers: {
      'Content-Type': 'application/xml; charset=utf-8',
    },
  });
};
