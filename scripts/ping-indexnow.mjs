// Ping IndexNow with every URL in the built sitemap.
// Runs as a postbuild step. On Cloudflare Pages, only fires for production
// (main-branch) builds — preview deploys are skipped.
//
// Skip locally unless INDEXNOW_FORCE=1 is set.

import { readFileSync, existsSync, readdirSync } from 'node:fs';
import { resolve, dirname } from 'node:path';
import { fileURLToPath } from 'node:url';

const __dirname = dirname(fileURLToPath(import.meta.url));
const root = resolve(__dirname, '..');
const distDir = resolve(root, 'dist');

const HOST = 'twincountyoutdoorservices.com';
const KEY = 'f1b1e4a216a1a2a146a444a55775d57b';
const KEY_LOCATION = `https://${HOST}/${KEY}.txt`;

const isCloudflarePages = process.env.CF_PAGES === '1';
const cfBranch = process.env.CF_PAGES_BRANCH;
const isProd = !isCloudflarePages || cfBranch === 'main';
const force = process.env.INDEXNOW_FORCE === '1';

if (!force && (!isCloudflarePages || !isProd)) {
  console.log(
    `[indexnow] skipped — CF_PAGES=${process.env.CF_PAGES ?? 'unset'} branch=${cfBranch ?? 'unset'} (set INDEXNOW_FORCE=1 to override)`
  );
  process.exit(0);
}

if (!existsSync(distDir)) {
  console.error(`[indexnow] dist/ not found at ${distDir} — run astro build first`);
  process.exit(0);
}

const sitemapFiles = readdirSync(distDir).filter(
  (f) => f.startsWith('sitemap') && f.endsWith('.xml')
);

if (sitemapFiles.length === 0) {
  console.log('[indexnow] no sitemap*.xml in dist/, nothing to ping');
  process.exit(0);
}

const urls = new Set();
for (const f of sitemapFiles) {
  const xml = readFileSync(resolve(distDir, f), 'utf8');
  for (const m of xml.matchAll(/<loc>([^<]+)<\/loc>/g)) {
    const u = m[1].trim();
    // skip the sitemap-index entries themselves
    if (u.endsWith('.xml')) continue;
    urls.add(u);
  }
}

if (urls.size === 0) {
  console.log('[indexnow] sitemap had no <loc> URLs');
  process.exit(0);
}

const urlList = [...urls];
console.log(`[indexnow] pinging ${urlList.length} URLs to IndexNow…`);

const body = {
  host: HOST,
  key: KEY,
  keyLocation: KEY_LOCATION,
  urlList,
};

try {
  const res = await fetch('https://api.indexnow.org/indexnow', {
    method: 'POST',
    headers: { 'Content-Type': 'application/json; charset=utf-8' },
    body: JSON.stringify(body),
  });
  const text = await res.text();
  console.log(`[indexnow] ${res.status} ${res.statusText} ${text || '(empty body)'}`);
  // 200 = accepted, 202 = accepted (queued). Both are fine.
  if (![200, 202].includes(res.status)) {
    console.warn('[indexnow] unexpected response — not failing the build');
  }
} catch (err) {
  console.warn('[indexnow] ping failed:', err.message, '— not failing the build');
}
