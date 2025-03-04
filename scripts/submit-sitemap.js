import fetch from 'node-fetch';
import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

// Path to the sitemap
const sitemapPath = path.join(__dirname, '../dist/sitemap.xml');

// Read the sitemap file
const sitemapContent = fs.readFileSync(sitemapPath, 'utf8');

// Function to submit sitemap to search engines
async function submitSitemap(searchEngine, url) {
  try {
    const response = await fetch(url);
    const status = response.status;
    
    if (status >= 200 && status < 300) {
      console.log(`Successfully submitted sitemap to ${searchEngine}!`);
    } else {
      console.error(`Failed to submit sitemap to ${searchEngine}. Status: ${status}`);
    }
  } catch (error) {
    console.error(`Error submitting sitemap to ${searchEngine}:`, error);
  }
}

// Submit to Google
submitSitemap('Google', 'https://www.google.com/ping?sitemap=https://www.praktijk-tielo.nl/sitemap.xml');

// Submit to Bing
submitSitemap('Bing', 'https://www.bing.com/ping?sitemap=https://www.praktijk-tielo.nl/sitemap.xml');

// Submit to Yandex
submitSitemap('Yandex', 'https://webmaster.yandex.com/ping?sitemap=https://www.praktijk-tielo.nl/sitemap.xml');

// Submit to Baidu
submitSitemap('Baidu', 'http://data.zz.baidu.com/urls?site=https://www.praktijk-tielo.nl&token=YOUR_BAIDU_TOKEN');

// Submit to DuckDuckGo (Note: DuckDuckGo doesn't have a direct submission URL, but they use Bing's index)

console.log('Sitemap submission process completed!');