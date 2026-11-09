/** Static path redirects (301). Keys are pathname without query/hash. */
export const PATH_REDIRECTS = new Map([
  ['/blog', '/blog/'],
  ['/about', '/about/'],
  ['/contact', '/support/'],
  ['/contact/', '/support/'],
  ['/support', '/support/'],
  ['/privacy', '/privacy/'],
  ['/terms', '/terms/'],
  ['/faq', '/faq/'],
  ['/cheats', '/products/delta-force-cheats/'],
  ['/cheats/', '/products/delta-force-cheats/'],
  ['/cheats/lite', '/products/delta-force-cheats/'],
  ['/cheats/lite/', '/products/delta-force-cheats/'],
  ['/cheats/pro', '/products/delta-force-cheats/'],
  ['/cheats/pro/', '/products/delta-force-cheats/'],
  ['/cheats/elite', '/products/delta-force-cheats/delta-force/'],
  ['/cheats/elite/', '/products/delta-force-cheats/delta-force/'],
  ['/cheats/compare', '/blog/delta-force-aimbot-setup/'],
  ['/cheats/compare/', '/blog/delta-force-aimbot-setup/'],
]);

/** Paths that should not receive a forced trailing slash. */
export const TRAILING_SLASH_SKIP = /\.[a-z0-9]+$/i;

export function resolvePathRedirect(pathname) {
  const direct = PATH_REDIRECTS.get(pathname);
  if (direct) return direct;

  if (pathname !== '/' && !pathname.endsWith('/') && !TRAILING_SLASH_SKIP.test(pathname)) {
    return `${pathname}/`;
  }

  return null;
}
