import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const baseUrl = 'https://www.praktijk-tielo.nl';
const today = new Date().toISOString().split('T')[0]; // Format: YYYY-MM-DD

// Define your routes and their metadata
const routes = [
  {
    path: '/',
    changefreq: 'weekly',
    priority: 1.0,
    lastmod: '2025-03-03' // Use fixed date for consistency
  },
  {
    path: '/contact',
    changefreq: 'weekly',
    priority: 0.8,
    lastmod: '2025-03-03'
  },
  {
    path: '/disclaimer',
    changefreq: 'weekly',
    priority: 0.5,
    lastmod: '2025-03-03'
  },
  {
    path: '/reviews',
    changefreq: 'weekly',
    priority: 0.9,
    lastmod: '2025-03-03'
  },
  // English routes
  {
    path: '/en',
    changefreq: 'weekly',
    priority: 1.0,
    lastmod: '2025-03-03'
  },
  {
    path: '/en/contact',
    changefreq: 'weekly',
    priority: 0.8,
    lastmod: '2025-03-03'
  },
  {
    path: '/en/disclaimer',
    changefreq: 'weekly',
    priority: 0.5,
    lastmod: '2025-03-03'
  },
  {
    path: '/en/reviews',
    changefreq: 'weekly',
    priority: 0.9,
    lastmod: '2025-03-03'
  }
];

// Ensure the dist directory exists
const distDir = path.join(__dirname, '../dist');
if (!fs.existsSync(distDir)) {
  fs.mkdirSync(distDir, { recursive: true });
}

// Generate sitemap XML
const sitemap = `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9"
        xmlns:xhtml="http://www.w3.org/1999/xhtml">
${routes.map(route => {
  // Determine alternate URLs
  const isEnglish = route.path.startsWith('/en');
  const dutchPath = isEnglish ? route.path.replace('/en', '') || '/' : route.path;
  const englishPath = isEnglish ? route.path : `/en${route.path === '/' ? '' : route.path}`;
  
  return `  <url>
    <loc>${baseUrl}${route.path}</loc>
    <lastmod>${route.lastmod}</lastmod>
    <changefreq>${route.changefreq}</changefreq>
    <priority>${route.priority}</priority>
    <xhtml:link 
      rel="alternate" 
      hreflang="nl" 
      href="${baseUrl}${dutchPath}" 
    />
    <xhtml:link 
      rel="alternate" 
      hreflang="en" 
      href="${baseUrl}${englishPath}" 
    />
    <xhtml:link 
      rel="alternate" 
      hreflang="x-default" 
      href="${baseUrl}${dutchPath}" 
    />
  </url>`}).join('\n')}
</urlset>`;

// Write sitemap to dist directory
fs.writeFileSync(
  path.join(__dirname, '../dist/sitemap.xml'),
  sitemap
);

console.log('Sitemap generated successfully!');
