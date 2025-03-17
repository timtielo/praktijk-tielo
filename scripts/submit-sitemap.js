import fetch from 'node-fetch';

const SITE_URL = 'https://www.praktijk-tielo.nl';
const SITEMAPS = ['/sitemap.xml'];

async function submitSitemapToSearchEngines() {
  const searchEngines = [
    {
      name: 'Google',
      url: (sitemap) => `https://www.google.com/ping?sitemap=${SITE_URL}${sitemap}`
    },
    {
      name: 'Bing',
      url: (sitemap) => `https://www.bing.com/ping?sitemap=${SITE_URL}${sitemap}`
    },
    {
      name: 'Yandex',
      url: (sitemap) => `https://webmaster.yandex.com/ping?sitemap=${SITE_URL}${sitemap}`
    }
  ];

  for (const sitemap of SITEMAPS) {
    for (const engine of searchEngines) {
      try {
        const response = await fetch(engine.url(sitemap));
        console.log(`Submitted ${sitemap} to ${engine.name}: ${response.status}`);
      } catch (error) {
        console.error(`Failed to submit ${sitemap} to ${engine.name}:`, error);
      }
    }
  }
}

submitSitemapToSearchEngines();