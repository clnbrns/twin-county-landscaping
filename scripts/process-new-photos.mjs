#!/usr/bin/env node
// One-off: convert newly-dropped photos (HEIC/JPG) into WebP card+gallery variants
// for both project folders and the flower-beds service folder.

import { readdir, mkdir, readFile, writeFile } from 'node:fs/promises';
import { existsSync } from 'node:fs';
import path from 'node:path';
import { fileURLToPath } from 'node:url';
import sharp from 'sharp';
import heicConvert from 'heic-convert';

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const ROOT = path.resolve(__dirname, '..');

const IMG_EXT = /\.(jpe?g|png|heic|webp)$/i;
const SIZES = { card: 800, gallery: 1600 };

const JOBS = [
  { in: 'src/assets/projects/benbrook-flagstone', out: 'public/images/projects/benbrook-flagstone-patio', key: 'benbrook-flagstone-patio' },
  { in: 'src/assets/projects/benbrook-terraced-garden', out: 'public/images/projects/benbrook-terraced-garden-walls', key: 'benbrook-terraced-garden-walls' },
  { in: 'src/assets/services/flower-beds', out: 'public/images/services/flower-beds', key: 'flower-beds' },
];

async function loadImage(filePath) {
  const ext = path.extname(filePath).toLowerCase();
  if (ext === '.heic') {
    const buf = await readFile(filePath);
    const jpg = await heicConvert({ buffer: buf, format: 'JPEG', quality: 0.9 });
    return sharp(Buffer.from(jpg));
  }
  return sharp(filePath);
}

async function processOne(srcFile, outDir, baseName) {
  const out = {};
  for (const [variant, width] of Object.entries(SIZES)) {
    const outName = `${baseName}-${variant}.webp`;
    const outPath = path.join(outDir, outName);
    if (!existsSync(outPath)) {
      const img = await loadImage(srcFile);
      await img.rotate().resize({ width, withoutEnlargement: true }).webp({ quality: 80 }).toFile(outPath);
    }
    out[variant] = outName;
  }
  return out;
}

const results = {};

for (const job of JOBS) {
  const inDir = path.join(ROOT, job.in);
  const outDir = path.join(ROOT, job.out);
  await mkdir(outDir, { recursive: true });
  const files = (await readdir(inDir)).filter((f) => IMG_EXT.test(f)).sort();
  if (files.length === 0) { console.log(`(empty) ${job.in}`); continue; }
  const gallery = [];
  let card = null;
  for (const file of files) {
    const base = path.basename(file, path.extname(file)).replace(/[^a-z0-9]+/gi, '-').toLowerCase().replace(/^-|-$/g, '');
    try {
      const v = await processOne(path.join(inDir, file), outDir, base);
      const webOut = job.out.replace(/^public/, '');
      gallery.push(`${webOut}/${v.gallery}`);
      if (!card) card = `${webOut}/${v.card}`;
      process.stdout.write('.');
    } catch (e) {
      console.error(`\nfail ${job.key}/${file}: ${e.message}`);
    }
  }
  console.log(` ${job.key} (${gallery.length})`);
  results[job.key] = { card, gallery };
}

console.log('\n---results---');
console.log(JSON.stringify(results, null, 2));
