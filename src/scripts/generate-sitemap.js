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
  { path: '/werveltherapie', priority: '0.9', changefreq: 'weekly' },
  { path: '/gratis-intake', priority: '0.9', changefreq: 'weekly' },
  
  // Dutch landing pages
  { path: '/rugpijn-en-lage-rugklachten', priority: '0.9', changefreq: 'weekly' },
  { path: '/rugpijn-en-lage-rugklachten2', priority: '0.9', changefreq: 'weekly' },
  { path: '/alternatief-voor-chiropractor', priority: '0.9', changefreq: 'weekly' },
  { path: '/sportblessures-behandeling', priority: '0.9', changefreq: 'weekly' },
  { path: '/sportblessures-behandeling2', priority: '0.9', changefreq: 'weekly' },
  { path: '/burnout-stress-behandeling', priority: '0.9', changefreq: 'weekly' },
  { path: '/bloedgroepen-dieet', priority: '0.9', changefreq: 'weekly' },
  { path: '/blessure', priority: '0.9', changefreq: 'weekly' },
  { path: '/rugpijn', priority: '0.9', changefreq: 'weekly' },
  { path: '/bindweefselbehandeling', priority: '0.9', changefreq: 'weekly' },
  { path: '/scoliose', priority: '0.9', changefreq: 'weekly' },
  { path: '/verlichting-zonder-kraken', priority: '0.9', changefreq: 'weekly' },
  { path: '/slaapproblemen', priority: '0.9', changefreq: 'weekly' },
  { path: '/migraine-behandeling', priority: '0.9', changefreq: 'weekly' },
  { path: '/depressie-behandeling', priority: '0.9', changefreq: 'weekly' },
  { path: '/rug-nek-problemen', priority: '0.9', changefreq: 'weekly' },
  { path: '/rug-nek-problemen2', priority: '0.9', changefreq: 'weekly' },
  
  // English pages
  { path: '/en', priority: '1.0', changefreq: 'weekly' },
  { path: '/en/contact', priority: '0.8', changefreq: 'weekly' },
  { path: '/en/reviews', priority: '0.9', changefreq: 'weekly' },
  { path: '/en/about-us', priority: '0.8', changefreq: 'weekly' },
  { path: '/en/disclaimer', priority: '0.5', changefreq: 'monthly' },
  { path: '/en/solutions', priority: '0.9', changefreq: 'weekly' },
  { path: '/en/vertebral-therapy', priority: '0.9', changefreq: 'weekly' },
  { path: '/en/free-intake', priority: '0.9', changefreq: 'weekly' },
  
  // English landing pages
  { path: '/en/back-pain-treatment', priority: '0.9', changefreq: 'weekly' },
  { path: '/en/back-pain-treatment2', priority: '0.9', changefreq: 'weekly' },
  { path: '/en/alternative-to-chiropractic', priority: '0.9', changefreq: 'weekly' },
  { path: '/en/sports-injury-treatment', priority: '0.9', changefreq: 'weekly' },
  { path: '/en/sports-injury-treatment2', priority: '0.9', changefreq: 'weekly' },
  { path: '/en/burnout-stress-treatment', priority: '0.9', changefreq: 'weekly' },
  { path: '/en/blood-type-diet', priority: '0.9', changefreq: 'weekly' },
  { path: '/en/injury', priority: '0.9', changefreq: 'weekly' },
  { path: '/en/back-pain', priority: '0.9', changefreq: 'weekly' },
  { path: '/en/connective-tissue-treatment', priority: '0.9', changefreq: 'weekly' },
  { path: '/en/scoliosis', priority: '0.9', changefreq: 'weekly' },
  { path: '/en/relief-without-cracking', priority: '0.9', changefreq: 'weekly' },
  { path: '/en/sleep-problems', priority: '0.9', changefreq: 'weekly' },
  { path: '/en/migraine-treatment', priority: '0.9', changefreq: 'weekly' },
  { path: '/en/depression-treatment', priority: '0.9', changefreq: 'weekly' },
  { path: '/en/back-neck-problems', priority: '0.9', changefreq: 'weekly' },
  { path: '/en/back-neck-problems2', priority: '0.9', changefreq: 'weekly' }
];

// Generate sitemap content
const generateSitemap = () => {
  const today = new Date().toISOString().split('T')[0];
  const baseUrl = 'https://www.praktijk-tielo.nl';

  // Helper function to get alternate language path
  const getAlternatePath = (path) => {
    const pathMap = {
      // Main pages
      '/': '/en',
      '/en': '/',
      '/contact': '/en/contact',
      '/en/contact': '/contact',
      '/reviews': '/en/reviews',
      '/en/reviews': '/reviews',
      '/over-ons': '/en/about-us',
      '/en/about-us': '/over-ons',
      '/disclaimer': '/en/disclaimer',
      '/en/disclaimer': '/disclaimer',
      '/oplossingen': '/en/solutions',
      '/en/solutions': '/oplossingen',
      '/werveltherapie': '/en/vertebral-therapy',
      '/en/vertebral-therapy': '/werveltherapie',
      '/gratis-intake': '/en/free-intake',
      '/en/free-intake': '/gratis-intake',
      
      // Landing pages
      '/rugpijn-en-lage-rugklachten': '/en/back-pain-treatment',
      '/en/back-pain-treatment': '/rugpijn-en-lage-rugklachten',
      '/rugpijn-en-lage-rugklachten2': '/en/back-pain-treatment2',
      '/en/back-pain-treatment2': '/rugpijn-en-lage-rugklachten2',
      '/alternatief-voor-chiropractor': '/en/alternative-to-chiropractic',
      '/en/alternative-to-chiropractic': '/alternatief-voor-chiropractor',
      '/sportblessures-behandeling': '/en/sports-injury-treatment',
      '/en/sports-injury-treatment': '/sportblessures-behandeling',
      '/sportblessures-behandeling2': '/en/sports-injury-treatment2',
      '/en/sports-injury-treatment2': '/sportblessures-behandeling2',
      '/burnout-stress-behandeling': '/en/burnout-stress-treatment',
      '/en/burnout-stress-treatment': '/burnout-stress-behandeling',
      '/bloedgroepen-dieet': '/en/blood-type-diet',
      '/en/blood-type-diet': '/bloedgroepen-dieet',
      '/blessure': '/en/injury',
      '/en/injury': '/blessure',
      '/rugpijn': '/en/back-pain',
      '/en/back-pain': '/rugpijn',
      '/bindweefselbehandeling': '/en/connective-tissue-treatment',
      '/en/connective-tissue-treatment': '/bindweefselbehandeling',
      '/scoliose': '/en/scoliosis',
      '/en/scoliosis': '/scoliose',
      '/verlichting-zonder-kraken': '/en/relief-without-cracking',
      '/en/relief-without-cracking': '/verlichting-zonder-kraken',
      '/slaapproblemen': '/en/sleep-problems',
      '/en/sleep-problems': '/slaapproblemen',
      '/migraine-behandeling': '/en/migraine-treatment',
      '/en/migraine-treatment': '/migraine-behandeling',
      '/depressie-behandeling': '/en/depression-treatment',
      '/en/depression-treatment': '/depressie-behandeling',
      '/rug-nek-problemen': '/en/back-neck-problems',
      '/en/back-neck-problems': '/rug-nek-problemen',
      '/rug-nek-problemen2': '/en/back-neck-problems2',
      '/en/back-neck-problems2': '/rug-nek-problemen2'
    };
    
    return pathMap[path] || path;
  };

  // Helper function to get default language path (Dutch)
  const getDefaultPath = (path) => {
    return path.startsWith('/en') ? path.replace('/en', '') : path;
  };

  const xmlContent = `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9"
        xmlns:xhtml="http://www.w3.org/1999/xhtml">
  ${routes.map(route => `
  <url>
    <loc>${baseUrl}${route.path}</loc>
    <lastmod>${today}</lastmod>
    <changefreq>${route.changefreq}</changefreq>
    <priority>${route.priority}</priority>
    ${route.path.startsWith('/en') ? 
      `<xhtml:link rel="alternate" hreflang="en" href="${baseUrl}${route.path}" />
       <xhtml:link rel="alternate" hreflang="nl" href="${baseUrl}${getAlternatePath(route.path)}" />` :
      `<xhtml:link rel="alternate" hreflang="nl" href="${baseUrl}${route.path}" />
       <xhtml:link rel="alternate" hreflang="en" href="${baseUrl}${getAlternatePath(route.path)}" />`
    }
    <xhtml:link rel="alternate" hreflang="x-default" href="${baseUrl}${getDefaultPath(route.path)}" />
  </url>`).join('')}
</urlset>`.trim();

  // Write sitemap to dist directory
  fs.writeFileSync(path.join(distDir, 'sitemap.xml'), xmlContent);
  console.log('Sitemap generated successfully!');
};

// Generate sitemap
generateSitemap();