import fs from 'node:fs';
import path from 'node:path';
import sharp from 'sharp';
const root = process.cwd();
/** Header mark only — never use legacy game-brand PNGs here. */
const source = path.join(root, 'assets', 'delta-favicon-source.png');
const publicDir = path.join(root, 'public');

if (!fs.existsSync(source)) {
  console.error('import-arma-brand-icon: missing assets/delta-favicon-source.png');
  process.exit(1);
}

const masterPath = path.join(publicDir, 'logo.webp');
await sharp(source)
  .resize(128, 128, { fit: 'contain', background: { r: 0, g: 0, b: 0, alpha: 0 } })
  .webp({ quality: 90 })
  .toFile(masterPath);

console.log('Header logo written from delta-favicon-source:', masterPath);
