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

// Copy the static sitemap from public to dist
const publicSitemapPath = path.join(__dirname, '../public/sitemap.xml');
const distSitemapPath = path.join(__dirname, '../dist/sitemap.xml');

// Read the sitemap file
const sitemapContent = fs.readFileSync(publicSitemapPath, 'utf8');

// Update the lastmod date to today
const today = new Date().toISOString().split('T')[0];
const updatedSitemapContent = sitemapContent.replace(/<lastmod>.*?<\/lastmod>/g, `<lastmod>${today}</lastmod>`);

// Write the updated sitemap to the dist directory
fs.writeFileSync(distSitemapPath, updatedSitemapContent);

console.log('Sitemap updated and copied successfully to dist directory!');

// Generate a robots.txt file if it doesn't exist in public
const publicRobotsPath = path.join(__dirname, '../public/robots.txt');
const distRobotsPath = path.join(__dirname, '../dist/robots.txt');

if (fs.existsSync(publicRobotsPath)) {
  // Copy the existing robots.txt
  fs.copyFileSync(publicRobotsPath, distRobotsPath);
  console.log('Robots.txt copied to dist directory!');
} else {
  // Create a default robots.txt
  const robotsContent = `User-agent: *
Allow: /
Disallow: /disclaimer

Sitemap: https://www.praktijk-tielo.nl/sitemap.xml
`;
  fs.writeFileSync(distRobotsPath, robotsContent);
  console.log('Default robots.txt created in dist directory!');
}