import fs from 'node:fs';
import path from 'node:path';

const root = path.resolve(import.meta.dirname, '..');
const skipDirs = new Set(['node_modules', 'dist', '.git', '.astro', '.wrangler']);
const textExt = new Set(['.ts', '.tsx', '.astro', '.mjs', '.js', '.json', '.jsonc', '.md', '.txt', '.html', '.svg', '.css']);

const replacements = [
  ['how-to-buy-arma-reforger-cheats', 'how-to-buy-delta-force-cheats'],
  ['arma-reforger-cheats', 'delta-force-cheats'],
  ['arma-reforger-', 'delta-force-'],
  ['arma-reforger', 'delta-force'],
  ['armaReforger', 'deltaForce'],
  ['ARMA REFORGER', 'DELTA FORCE'],
  ['Arma Reforger', 'Delta Force'],
  ['ARMA Reforger', 'Delta Force'],
  ['armacheats.org', 'deltacheats.org'],
  ['ARMA Cheats', 'Delta Cheats'],
  ['dotacheats-forum-vote', 'delta-cheats-forum-vote'],
  ['arma-brand-logo.png', 'logo.webp'],
  ['/go/arma-reforger', '/go/delta-force'],
];

function walk(dir, files = []) {
  for (const entry of fs.readdirSync(dir, { withFileTypes: true })) {
    if (skipDirs.has(entry.name)) continue;
    const full = path.join(dir, entry.name);
    if (entry.isDirectory()) walk(full, files);
    else if (textExt.has(path.extname(entry.name))) files.push(full);
  }
  return files;
}

let changed = 0;
for (const file of walk(root)) {
  if (file.includes('apply-delta-branding.mjs')) continue;
  const before = fs.readFileSync(file, 'utf8');
  let next = before;
  for (const [from, to] of replacements) next = next.split(from).join(to);
  if (next !== before) {
    fs.writeFileSync(file, next);
    changed++;
  }
}
console.log(`Updated ${changed} files`);
