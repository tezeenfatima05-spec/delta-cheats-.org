import { defineConfig } from 'astro/config';
import cloudflare from '@astrojs/cloudflare';
import tailwindcss from '@tailwindcss/vite';
import sitemap from '@astrojs/sitemap';
import { sitemapSerialize } from './src/config/sitemap.ts';
import workersRedirects from './integrations/workers-redirects.mjs';
const siteOrigin = (process.env.PUBLIC_SITE_ORIGIN || 'https://deltacheats.org').replace(
  /\/$/,
  '',
);

export default defineConfig({
  site: siteOrigin,
  output: 'static',
  adapter: cloudflare(),
  trailingSlash: 'always',
  redirects: {
    '/cheats/': '/products/delta-force-cheats/',
    '/cheats/lite/': '/products/delta-force-cheats/',
    '/cheats/pro/': '/products/delta-force-cheats/',
    '/cheats/elite/': '/products/delta-force-cheats/delta-force/',
    '/cheats/compare/': '/blog/delta-force-aimbot-setup/',
    '/delta-force-cheats/': '/products/delta-force-cheats/',
    '/contact/': '/support/',
  },
  compressHTML: true,
  prefetch: {
    prefetchAll: false,
    defaultStrategy: 'hover',
  },
  devToolbar: {
    enabled: false,
  },
  server: {
    port: 5173,
    host: '127.0.0.1',
  },
  integrations: [
    workersRedirects(),
    sitemap({
      filter: (page) => !page.includes('/404') && !page.includes('/go/'),
      serialize: sitemapSerialize,
    }),
  ],
  vite: {
    plugins: [tailwindcss()],
    build: {
      cssMinify: true,
      minify: 'esbuild',
      target: 'es2022',
      modulePreload: { polyfill: false },
    },
  },
  build: {
    inlineStylesheets: 'always',
  },
});
