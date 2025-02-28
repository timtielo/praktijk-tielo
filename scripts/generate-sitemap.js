import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const baseUrl = 'https://www.praktijk-tielo.nl';
const today = new Date().toISOString().split('T')[0];

// Define your routes and their metadata
const routes = [
  {
    path: '/',
    changefreq: 'weekly',
    priority: 1.0
  },
  {
    path: '/contact',
    changefreq: 'monthly',
    priority: 0.8
  },
  {
    path: '/disclaimer',
    changefreq: 'yearly',
    priority: 0.5
  },
  {
    path: '/reviews',
    changefreq: 'weekly',
    priority: 0.9
  }
];

// Generate sitemap XML
const sitemap = `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
${routes.map(route => `  <url>
    <loc>${baseUrl}${route.path}</loc>
    <lastmod>${today}</lastmod>
    <changefreq>${route.changefreq}</changefreq>
    <priority>${route.priority}</priority>
  </url>`).join('\n')}
</urlset>`;

// Write sitemap to public directory
fs.writeFileSync(
  path.join(__dirname, '../dist/sitemap.xml'),
  sitemap
);

console.log('Sitemap generated successfully!');