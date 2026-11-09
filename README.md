# Delta Cheats (deltacheats.org)

Astro site for **DELTA FORCE** cheats — cloned from the approved master template with game-specific config in `src/config/site.ts`.

## Local development

```bash
npm install
npm run dev
```

## Production build

```bash
npm run build
```

## Deploy (Cloudflare Workers)

```bash
npm run workers:deploy
```

In Workers Builds, set **Deploy command** to `npm run workers:deploy` (see `docs/cloudflare-workers-deploy.md`).

Primary config: `src/config/site.ts`, checkout: `src/config/checkout-redirects.mjs`, SEO routes: `src/config/pageSeo.ts`.
