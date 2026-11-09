/**
 * Central titles/descriptions for high-traffic routes.
 * After Search Console shows impressions, edit the matching path here and redeploy.
 */

export interface PageSeoEntry {
  title: string;
  description: string;
}

export const PAGE_SEO: Record<string, PageSeoEntry> = {
  '/': {
    title: 'Delta Force Cheats – Aimbot, ESP & Wallhack | Cheats',
    description:
      'Explore DELTA FORCE cheats for PC featuring customizable aimbot, player ESP, skeleton ESP, loot tracking, Chams, third-person view, and Cloud DMA support.',
  },
  '/products/delta-force-cheats/': {
    title: 'DELTA FORCE Cheats for PC — Aimbot & Player ESP',
    description:
      'DELTA FORCE cheats with aimbot, player ESP, loot ESP, Chams, third-person view, config profiles, and Cloud DMA compatibility at deltacheats.org.',
  },
  '/products/delta-force-cheats/delta-force/': {
    title: 'DELTA FORCE Cheats — Full Feature List',
    description:
      'Custom aimbot, player and loot ESP, Chams, camera FOV changer, combat mode toggles, and config system for DELTA FORCE on PC.',
  },
  '/products/delta-force-cheats/cloud-dma/': {
    title: 'Cloud DMA for DELTA FORCE | Delta Cheats',
    description:
      'Cloud DMA compatibility tools and setup guidance for DELTA FORCE external suites on PC.',
  },
  '/products/delta-force-cheats/hwid-spoofer/': {
    title: 'HWID Spoofer Utility | Delta Cheats',
    description:
      'HWID spoofer utilities for identifier cleanup and rotation when your PC needs a fresh hardware profile.',
  },
  '/blog/': {
    title: 'Delta Force guides, setup tips & articles | Cheats',
    description:
      'Delta Force aimbot tuning, ESP config, loot filters, Chams notes, Cloud DMA prep, and purchase walkthroughs at deltacheats.org.',
  },
  '/blog/delta-force-aimbot-setup/': {
    title: 'Aimbot – FOV, smoothness & bone selection | Delta Cheats',
    description:
      'Configure aimbot FOV, smoothness, stickiness, visible check, and dual keybinds for DELTA FORCE PC play. Step-by-step setup notes for new configs.',
  },
  '/blog/delta-force-esp-guide/': {
    title: 'Player ESP – boxes, skeletons & loot | Delta Cheats',
    description:
      'Balance player ESP, helmet and armor readouts, snaplines, and loot overlays for readable wallhack-style awareness on DELTA FORCE PC.',
  },
  '/blog/delta-force-cloud-dma/': {
    title: 'Cloud DMA – firmware, cabling & OS checks | Delta Cheats',
    description:
      'What Cloud DMA compatibility means on PC and what to verify before checkout for DELTA FORCE. Hardware notes on firmware, cabling, and OS checks.',
  },
  '/forum/': {
    title: 'Delta Force Community Forum — aimbot & ESP | Cheats',
    description:
      'Delta Force Community Forum: Community forum for aimbot settings, ESP layouts, loot filters, Chams tuning, and setup questions for DELTA FORCE on PC.',
  },
  '/faq/': {
    title: 'FAQ — DELTA FORCE cheats, setup & checkout |',
    description:
      'FAQ: answers on aimbot, player ESP, loot ESP, Chams, Cloud DMA, checkout, configs, and guides for DELTA FORCE at deltacheats.org.',
  },
  '/terms/': {
    title: 'Terms & Conditions | Delta Cheats',
    description:
      'Purchase terms, license use, and refund policy for Delta Cheats products sold through deltacheats.org.',
  },
  '/privacy/': {
    title: 'Privacy – cookies, analytics & contact data | Delta Cheats',
    description:
      'Privacy: how deltacheats.org uses analytics, cookies, and contact data when you browse, purchase, or request support on Delta Cheats.',
  },
  '/about/': {
    title: 'About Delta Cheats — FORCE guides & product notes',
    description:
      'What Delta Cheats publishes: DELTA FORCE feature guides, setup walkthroughs, status notes, and support paths at deltacheats.org.',
  },
  '/support/': {
    title: 'Support | Delta Cheats',
    description:
      'Get help with loader setup, Cloud DMA, configs, and checkout for DELTA FORCE cheats.',
  },
};

export function normalizeSeoPath(pathname: string): string {
  let path = pathname || '/';
  if (!path.startsWith('/')) path = `/${path}`;
  if (path !== '/' && !path.endsWith('/')) path = `${path}/`;
  return path;
}

export function getPageSeoEntry(pathname: string): PageSeoEntry | undefined {
  return PAGE_SEO[normalizeSeoPath(pathname)];
}
