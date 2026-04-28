import fs from 'fs';
import path from 'path';

const distPath = path.join(process.cwd(), 'dist', 'madevix', 'browser');

function toUrlPath(filePath) {
  return filePath.replace(/\\/g, '/');
}

function processFile(filePath) {
  let html = fs.readFileSync(filePath, 'utf8');

  // Töröljük a hibás meta tageket
  html = html.replace(/<meta tagname="link"[^>]*>/g, '');

  // Normalizáljuk a path-ot
  const normalized = toUrlPath(filePath);

  // Levágjuk a dist/madevix/browser részt
  let relative = normalized.replace(toUrlPath(distPath), '');

  // Levágjuk az index.html-t
  relative = relative.replace(/index\.html$/, '');

  // Levágjuk a /browser részt, ha benne maradt
  relative = relative.replace(/^\/browser/, '');

  // Ha üres → root
  if (relative === '' || relative === '/') {
    relative = '';
  }

  const canonical = `https://madevix.com${relative}`;

  const hreflangBlock = `
<link rel="canonical" href="${canonical}">
<link rel="alternate" hreflang="de" href="https://madevix.com/de${relative}">
<link rel="alternate" hreflang="en" href="https://madevix.com/en${relative}">
<link rel="alternate" hreflang="hu" href="https://madevix.com/hu${relative}">
<link rel="alternate" hreflang="x-default" href="https://madevix.com/en${relative}">
`;

  html = html.replace('</head>', `${hreflangBlock}\n</head>`);

  fs.writeFileSync(filePath, html, 'utf8');
}

function walk(dir) {
  const files = fs.readdirSync(dir);

  for (const file of files) {
    const full = path.join(dir, file);

    if (fs.statSync(full).isDirectory()) {
      walk(full);
    } else if (file === 'index.html') {
      processFile(full);
    }
  }
}

walk(distPath);

console.log('SEO post-process kész (browser path fix).');
