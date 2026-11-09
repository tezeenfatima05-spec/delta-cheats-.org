import fs from 'node:fs';
import path from 'node:path';
import { CHECKOUT_URLS } from '../src/config/checkout-redirects.mjs';
import { SITE_ORIGIN } from '../src/config/site-origin.mjs';

const slugs = [
  {
    dir: 'delta-force',
    url: CHECKOUT_URLS.deltaForce,
    title: 'Redirecting – Overview, Features & FAQ | Delta Cheats',
    description:
      'Redirecting to DELTA FORCE checkout. Secure purchase link loads automatically; continue below if the page does not move.',
    continueLabel: 'Continue to DELTA FORCE checkout',
  },
  {
    dir: 'cloud-dma',
    url: CHECKOUT_URLS.cloudDma,
    title: 'Redirecting – Cloud DMA checkout | Delta Cheats',
    description:
      'Redirecting you to Cloud DMA checkout. This page continues automatically in a moment.',
    continueLabel: 'Continue to Cloud DMA checkout',
  },
  {
    dir: 'hwid-spoofer',
    url: CHECKOUT_URLS.hwidSpoofer,
    title: 'Redirecting – HWID spoofer checkout | Delta Cheats',
    description:
      'Redirecting you to HWID spoofer checkout. This page continues automatically in a moment.',
    continueLabel: 'Continue to HWID spoofer checkout',
  },
];

for (const { dir, url, title, description, continueLabel } of slugs) {
  const dest = path.join(process.cwd(), 'public', 'go', dir);
  fs.mkdirSync(dest, { recursive: true });
  const canonical = `${SITE_ORIGIN}/go/${dir}/`;
  const html = `<!doctype html>
<html lang="en">
<head>
  <meta charset="utf-8">
  <meta name="viewport" content="width=device-width, initial-scale=1">
  <meta name="description" content="${description}">
  <meta name="robots" content="index, follow">
  <link rel="canonical" href="${canonical}">
  <meta http-equiv="refresh" content="0;url=${url}">
  <title>${title}</title>
  <script>location.replace(${JSON.stringify(url)})</script>
</head>
<body>
  <h1>Redirecting</h1>
  <p>You are being redirected to checkout. If nothing happens, use the link below.</p>
  <p><a href="${url}">${continueLabel}</a></p>
</body>
</html>
`;
  fs.writeFileSync(path.join(dest, 'index.html'), html, 'utf8');
}

console.log(`[build] Wrote ${slugs.length} checkout redirect page(s) under public/go/`);
