import fs from 'node:fs';
import path from 'node:path';
import sharp from 'sharp';

const root = process.cwd();
const source = path.join(root, 'assets', 'delta-favicon-source.png');
const publicDir = path.join(root, 'public');

if (!fs.existsSync(source)) {
  console.error('generate-favicons: missing', source);
  process.exit(1);
}

const base = sharp(source);

const sizes = [
  { file: 'favicon-16.png', size: 16 },
  { file: 'favicon-32.png', size: 32 },
  { file: 'apple-touch-icon.png', size: 180 },
];

for (const { file, size } of sizes) {
  await base
    .clone()
    .resize(size, size, { fit: 'cover', position: 'centre' })
    .png()
    .toFile(path.join(publicDir, file));
}

await base
  .clone()
  .resize(32, 32, { fit: 'cover', position: 'centre' })
  .toFile(path.join(publicDir, 'favicon.ico'));

console.log('Favicons written from assets/delta-favicon-source.png');
