/** Build-time site origin (PUBLIC_SITE_ORIGIN; defaults to deltacheats.org). */
export const SITE_ORIGIN = (
  process.env.PUBLIC_SITE_ORIGIN || 'https://deltacheats.org'
).replace(/\/$/, '');
