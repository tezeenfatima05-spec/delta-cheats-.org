# Cloudflare Workers deploy

The site must be **built** before Wrangler uploads static assets. `dist/client` is not committed to git.

## Recommended (dashboard)

| Setting | Value |
|--------|--------|
| **Build command** | *(leave empty)* |
| **Deploy command** | `npm run workers:deploy` |

`workers:deploy` runs the full Astro build, fixes redirects, then `wrangler deploy`.

## Alternative

| Setting | Value |
|--------|--------|
| **Build command** | `PUBLIC_SITE_ORIGIN=https://deltacheats.org npm run build` |
| **Deploy command** | `npx wrangler deploy` |

`wrangler.jsonc` also defines a `build.command` so a bare `npx wrangler deploy` can build when Wrangler honors that hook.

## Do not use

- Deploy command only: `npx wrangler deploy` with **no** build step — fails with `dist/client` missing.
