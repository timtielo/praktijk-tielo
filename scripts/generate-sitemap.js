import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

// Ensure the dist directory exists
const distDir = path.join(__dirname, '../dist');
if (!fs.existsSync(distDir)) {
  fs.mkdirSync(distDir, { recursive: true });
}

// Define all routes with their priorities and change frequencies
const routes = [
  // Main pages
  { path: '/', priority: '1.0', changefreq: 'weekly' },
  { path: '/contact', priority: '0.8', changefreq: 'weekly' },
  { path: '/reviews', priority: '0.9', changefreq: 'weekly' },
  { path: '/over-ons', priority: '0.8', changefreq: 'weekly' },
  { path: '/disclaimer', priority: '0.5', changefreq: 'monthly' },
  { path: '/oplossingen', priority: '0.9', changefreq: 'weekly' },
  
  // Dutch landing pages
  { path: '/rugpijn-en-lage-rugklachten', priority: '0.9', changefreq: 'weekly' },
  { path: '/alternatief-voor-chiropractor', priority: '0.9', changefreq: 'weekly' },
  { path: '/sportblessures-behandeling', priority: '0.9', changefreq: 'weekly' },
  { path: '/burnout-stress-behandeling', priority: '0.9', changefreq: 'weekly' },
  { path: '/bloedgroepen-dieet', priority: '0.9', changefreq: 'weekly' },
  { path: '/blessure', priority: '0.9', changefreq: 'weekly' },
  { path: '/rugpijn', priority: '0.9', changefreq: 'weekly' },
  { path: '/bindweefselbehandeling', priority: '0.9', changefreq: 'weekly' },
  { path: '/scoliose', priority: '0.9', changefreq: 'weekly' },
  
  // English pages
  { path: '/en', priority: '1.0', changefreq: 'weekly' },
  { path: '/en/contact', priority: '0.8', changefreq: 'weekly' },
  { path: '/en/reviews', priority: '0.9', changefreq: 'weekly' },
  { path: '/en/about-us', priority: '0.8', changefreq: 'weekly' },
  { path: '/en/disclaimer', priority: '0.5', changefreq: 'monthly' },
  { path: '/en/solutions', priority: '0.9', changefreq: 'weekly' },
  
  // English landing pages
  { path: '/en/back-pain-treatment', priority: '0.9', changefreq: 'weekly' },
  { path: '/en/alternative-to-chiropractic', priority: '0.9', changefreq: 'weekly' },
  { path: '/en/sports-injury-treatment', priority: '0.9', changefreq: 'weekly' },
  { path: '/en/burnout-stress-treatment', priority: '0.9', changefreq: 'weekly' },
  { path: '/en/blood-type-diet', priority: '0.9', changefreq: 'weekly' },
  { path: '/en/injury', priority: '0.9', changefreq: 'weekly' },
  { path: '/en/back-pain', priority: '0.9', changefreq: 'weekly' },
  { path: '/en/connective-tissue-treatment', priority: '0.9', changefreq: 'weekly' },
  { path: '/en/scoliosis', priority: '0.9', changefreq: 'weekly' }
];

// Generate sitemap content
const generateSitemap = () => {
  const today = new Date().toISOString().split('T')[0];
  const baseUrl = 'https://www.praktijk-tielo.nl';
  
  const xmlContent = `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9"
        xmlns:xhtml="http://www.w3.org/1999/xhtml">
  ${routes.map(route => {
    // Helper function to get alternate language path
    const getAlternatePath = (path) => {
      if (path.startsWith('/en/')) {
        return path.replace('/en', '');
      } else if (path === '/en') {
        return '/';
      } else {
        return `/en${path === '/' ? '' : path}`;
      }
    };

    // Helper function to get default language path
    const getDefaultPath = (path) => {
      return path.startsWith('/en') ? path.replace('/en', '') : path;
    };

    // Special handling for about-us/over-ons paths
    const getAboutUsPath = (isEnglish) => {
      return isEnglish ? '/en/about-us' : '/over-ons';
    };

    // Handle special cases for about us pages
    const isAboutUs = route.path === '/over-ons' || route.path === '/en/about-us';
    const alternatePath = isAboutUs 
      ? getAboutUsPath(!route.path.startsWith('/en'))
      : getAlternatePath(route.path);

    return `
  <url>
    <loc>${baseUrl}${route.path}</loc>
    <lastmod>${today}</lastmod>
    <changefreq>${route.changefreq}</changefreq>
    <priority>${route.priority}</priority>
    ${route.path.startsWith('/en') ? 
      `<xhtml:link rel="alternate" hreflang="en" href="${baseUrl}${route.path}" />
       <xhtml:link rel="alternate" hreflang="nl" href="${baseUrl}${alternatePath}" />` :
      `<xhtml:link rel="alternate" hreflang="nl" href="${baseUrl}${route.path}" />
       <xhtml:link rel="alternate" hreflang="en" href="${baseUrl}${alternatePath}" />`
    }
    <xhtml:link rel="alternate" hreflang="x-default" href="${baseUrl}${getDefaultPath(route.path)}" />
  </url>`}).join('')}
</urlset>`.trim();

  // Write sitemap to dist directory
  fs.writeFileSync(path.join(distDir, 'sitemap.xml'), xmlContent);
  console.log('Sitemap generated successfully!');
};

// Generate sitemap
generateSitemap();