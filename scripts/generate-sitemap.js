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

// Write the sitemap to the dist directory
fs.writeFileSync(distSitemapPath, sitemapContent);

console.log('Sitemap copied successfully to dist directory!');