import { t } from '../i18n';
import { checkoutForSlug, checkoutPath } from '../config/checkout';
import { PRODUCT_BASE } from '../config/site';
import type { IconName } from '../components/icons/types';

export interface ProductSlide {
  src: string;
  alt: string;
  caption: string;
  captionDesc: string;
}

export interface ProductOverview {
  title: string;
  paragraphs: string[];
}

export interface AcquisitionStep {
  num: string;
  title: string;
  desc: string;
}

export interface ProductAcquisition {
  title: string;
  steps: AcquisitionStep[];
}

export interface SystemRequirement {
  icon: IconName;
  text: string;
}

export interface ProductPage {
  slug: string;
  kind: 'tier' | 'utility';
  badge: string;
  category?: string;
  tier?: string;
  name: string;
  title: string;
  subtitle: string;
  desc: string;
  features: string[];
  more: number;
  variant?: 'essential' | 'popular' | 'limited';
  buyUrl: string;
  images: ProductSlide[];
  overview: ProductOverview;
  acquisition: ProductAcquisition;
  goodToKnow: string;
  limitations: string;
  fullFeatures: string[];
  systemRequirements: SystemRequirement[];
  about?: { type: 'h2' | 'p'; text: string }[];
  body: { type: 'h2' | 'p'; text: string }[];
  relatedBlogSlugs: string[];
}

export const productRelatedBlogSlugs: Record<string, string[]> = {
  'delta-force': [
    'delta-force-aimbot-setup',
    'delta-force-esp-guide',
    'delta-force-cloud-dma',
    'how-to-buy-delta-force-cheats',
  ],
  'cloud-dma': ['delta-force-cloud-dma', 'how-to-buy-delta-force-cheats'],
  'hwid-spoofer': ['how-to-buy-delta-force-cheats'],
};

const productBase = PRODUCT_BASE;
const gameplay = '/images/gameplay';

const galleryRaw = {
  gpVisuals: {
    src: `${gameplay}/screenshot-1.webp`,
    alt: 'DELTA FORCE player ESP with bounding boxes and soldier overlays',
    caption: 'Player visuals',
    captionDesc: 'ESP styles, corner boxes, skeleton lines, and name tags in a live engagement.',
  },
  gpAimbot: {
    src: `${gameplay}/screenshot-2.webp`,
    alt: 'DELTA FORCE aimbot menu with adaptive FOV and bone targeting',
    caption: 'Aimbot options',
    captionDesc: 'Custom aim key, target bone selection, smoothness, and FOV border drawing.',
  },
  gpWorld: {
    src: `${gameplay}/screenshot-3.webp`,
    alt: 'DELTA FORCE battlefield view with distance and weapon ESP',
    caption: 'World awareness',
    captionDesc: 'Distance readouts, weapon labels, and team filters across open terrain.',
  },
  gpMisc: {
    src: `${gameplay}/screenshot-4.webp`,
    alt: 'DELTA FORCE misc settings for configs, DPI scale, and languages',
    caption: 'Misc & configs',
    captionDesc: 'Menu keybinds, FPS limit, watermark toggle, and saved config profiles.',
  },
  gpEspBox: {
    src: `${gameplay}/screenshot-5.webp`,
    alt: 'DELTA FORCE corner box ESP on multiple enemy soldiers',
    caption: 'Box ESP',
    captionDesc: 'Corner and full box modes with gradient fills and line-to-enemy indicators.',
  },
  gpHealth: {
    src: `${gameplay}/screenshot-6.webp`,
    alt: 'DELTA FORCE health bars and team identification ESP',
    caption: 'Health & team ESP',
    captionDesc: 'Health-based bars, team name tags, and show-team filters for squad play.',
  },
  gpHero: {
    src: `${gameplay}/hero-poster.webp`,
    alt: 'DELTA FORCE tactical gameplay with overlay preview',
    caption: 'Tactical overview',
    captionDesc: 'Combined aimbot and player ESP workflow on PC multiplayer servers.',
  },
};

type GalleryKey = keyof typeof galleryRaw;

function slide(...keys: GalleryKey[]): ProductSlide[] {
  return keys.map((k) => {
    const item = galleryRaw[k];
    return {
      src: item.src,
      alt: item.alt,
      caption: item.caption,
      captionDesc: item.captionDesc,
    };
  });
}

const defaultAcquisitionSteps: AcquisitionStep[] = [
  {
    num: '01',
    title: 'Review current status',
    desc: 'Check the live status banner on deltacheats.org before purchase—especially after a game update.',
  },
  {
    num: '02',
    title: 'Confirm Cloud DMA requirements',
    desc: 'Verify your PC meets Cloud DMA compatibility notes on the product page before checkout.',
  },
  {
    num: '03',
    title: 'Complete secure checkout',
    desc: 'Use the Buy Now flow to reach checkout, then save your license email for portal access.',
  },
  {
    num: '04',
    title: 'Load configs and test',
    desc: 'Import a conservative preset, tune aimbot smoothness and ESP distance, then test in a private session.',
  },
];

const deltaSystemRequirements: SystemRequirement[] = [
  { icon: 'reqWindows', text: 'Supported 64-bit edition of Windows 10 or Windows 11.' },
  { icon: 'reqCpu', text: 'DELTA FORCE installed with current patches applied.' },
  { icon: 'reqSettings', text: 'Administrator access for loader installation and updates.' },
  { icon: 'reqWifi', text: 'Stable internet for portal access, config sync, and patch delivery.' },
  { icon: 'reqSteam', text: 'Cloud DMA-compatible setup as described on the product page.' },
];

const fullFeatureList = [
  'Aimbot: FOV, smooth, speed, stickiness',
  'Aimbot filter and bone selection (closest / head / neck / chest)',
  'Two aimbot keybinds (native controller keys)',
  'Visible check and ignore knocked',
  'Draw FOV and draw target line',
  'Player ESP: skeleton, head circle, box',
  'Player ESP: distance, name, team number, weapon',
  'View direction, health bar, snaplines, show knocked',
  'Helmet name and helmet level',
  'Armor name, armor level, chest bag name and level',
  'Hero name and max distance',
  'Custom ESP colors, size, transparency, brightness',
  'Loot ESP: item name, rarity, price',
  'Loot minimum price filter',
  'Player corpses, AI corpses, computers',
  'Chams for player, AI, weapon, hands, self',
  'Chams static or RGB color styles',
  'Camera FOV changer and third-person hotkey',
  'Arms and weapon scale offsets',
  'Enable crosshair and combat-mode hide entities',
  'Encryption bypass and config system',
];

const deltaForcePage: ProductPage = {
  slug: 'delta-force',
  kind: 'tier',
  badge: 'Available',
  tier: 'Standard',
  name: 'Delta Force',
  title: 'DELTA FORCE Cheats',
  subtitle: 'Aimbot, player ESP, and config tools for PC',
  desc: 'DELTA FORCE cheats with customizable aimbot, player ESP, loot tracking, Chams, third-person view, and Cloud DMA support.',
  features: [
    'Adaptive FOV aimbot',
    'Player ESP & wallhack',
    'Loot & item ESP',
    'Chams (RGB / static)',
    'Third-person & FOV tools',
    'Cloud DMA ready',
  ],
  more: fullFeatureList.length - 6,
  variant: 'popular',
  buyUrl: checkoutForSlug('delta-force'),
  images: slide('gpAimbot', 'gpVisuals', 'gpEspBox', 'gpHealth', 'gpWorld', 'gpMisc'),
  overview: {
    title: 'Built for tactical multiplayer on PC',
    paragraphs: [
      'This DELTA FORCE build groups aimbot, player visuals, loot ESP, Chams, and misc tools into clear menu tabs. Tune FOV, smoothness, bone priority, and max distance without cluttering your screen.',
      'Combat mode lets you hide entities by type when you need a clean screen. The config system saves ranked and casual presets you can reload after patch days.',
    ],
  },
  acquisition: {
    title: 'How to get DELTA FORCE cheats',
    steps: defaultAcquisitionSteps,
  },
  goodToKnow:
    'DELTA FORCE receives frequent updates. Confirm module availability on deltacheats.org before you purchase or launch. Overlay density affects readability on ultrawide and 4K displays.',
  limitations:
    'Third-party software in online games can violate terms of service and lead to account action. You use this software at your own risk. Compatibility can change after game or anti-cheat updates without notice.',
  fullFeatures: fullFeatureList,
  systemRequirements: deltaSystemRequirements,
  about: [
    {
      type: 'p',
      text: 'DELTA FORCE cheats on this page focus on precision aimbot controls, readable player ESP, loot overlays, and Chams for tactical multiplayer. Aimbot includes dual keybinds with visible check and ignore-knocked filters.',
    },
    { type: 'h2', text: 'Cloud DMA compatibility' },
    {
      type: 'p',
      text: 'Cloud DMA support is required for the advertised external workflow. Review hardware and firmware notes in the product checkout flow before you buy.',
    },
  ],
  body: [
    { type: 'h2', text: 'DELTA FORCE Aimbot Features' },
    {
      type: 'p',
      text: 'Enable aimbot, bind custom keys, and pick target bones with adaptive FOV drawing. Smoothness, stickiness, and max distance sliders keep tracking natural.',
    },
    { type: 'h2', text: 'DELTA FORCE Player ESP and Wallhack' },
    {
      type: 'p',
      text: 'Player ESP covers skeletons, boxes, health bars, helmet and armor readouts, snaplines, weapon tags, and custom color controls—wallhack-style awareness tuned with max distance sliders.',
    },
    { type: 'h2', text: 'DELTA FORCE Loot and Item ESP' },
    {
      type: 'p',
      text: 'Loot overlays show item name, rarity, and price with a minimum price filter. Track player corpses, AI corpses, and computers when you farm high-value extracts.',
    },
    { type: 'h2', text: 'DELTA FORCE Chams Features' },
    {
      type: 'p',
      text: 'Chams apply to players, AI, weapons, hands, and self with static or RGB styles. Pair with third-person view and camera FOV changer when you need extra situational awareness.',
    },
  ],
  relatedBlogSlugs: productRelatedBlogSlugs['delta-force'],
};

const cloudDmaPage: ProductPage = {
  slug: 'cloud-dma',
  kind: 'utility',
  badge: 'Available',
  category: 'DMA hardware',
  name: 'Cloud DMA',
  title: 'Cloud DMA',
  subtitle: 'External DMA workflow for PC',
  desc: 'Cloud DMA software and setup path for DELTA FORCE external suites—verify firmware and cabling before checkout.',
  features: [
    'DMA compatibility checks',
    'Firmware guidance',
    'External read workflow',
    'Works with DELTA FORCE suite',
    'Portal setup notes',
    'Status-aware launches',
  ],
  more: 4,
  buyUrl: checkoutForSlug('cloud-dma'),
  images: slide('gpWorld', 'gpMisc', 'gpAimbot'),
  overview: {
    title: 'Hardware-ready Cloud DMA path',
    paragraphs: [
      'Cloud DMA is the external memory access stack many DELTA FORCE builds expect. This product covers the DMA side—separate from the in-game cheat menu but required on supported rigs.',
      'Read the Cloud DMA article on the blog and confirm your hardware against checkout notes before you buy the DELTA FORCE suite or this standalone add-on.',
    ],
  },
  acquisition: {
    title: 'How to get Cloud DMA',
    steps: defaultAcquisitionSteps,
  },
  goodToKnow:
    'DMA firmware and motherboard compatibility change over time. Check deltacheats.org status and the Cloud DMA guide before purchase or firmware flashes.',
  limitations:
    'DMA tools involve hardware risk if used incorrectly. You are responsible for verifying compatibility and following setup guides.',
  fullFeatures: [
    'Compatibility checklist',
    'Firmware version notes',
    'External device pairing',
    'Launch with DELTA FORCE loader',
    'Portal documentation',
    'Support email escalation',
  ],
  systemRequirements: deltaSystemRequirements,
  body: [
    { type: 'h2', text: 'When you need Cloud DMA' },
    {
      type: 'p',
      text: 'Choose this product when your DELTA FORCE build lists Cloud DMA as required and you still need the DMA stack itself.',
    },
    { type: 'h2', text: 'Pair with DELTA FORCE cheats' },
    {
      type: 'p',
      text: 'Most players buy the DELTA FORCE suite first, then confirm DMA hardware separately. Both checkout flows use secure /go/ redirects.',
    },
  ],
  relatedBlogSlugs: productRelatedBlogSlugs['cloud-dma'],
};

const hwidSpooferPage: ProductPage = {
  slug: 'hwid-spoofer',
  kind: 'utility',
  badge: 'Available',
  category: 'System utility',
  name: 'HWID Spoofer',
  title: 'HWID Spoofer',
  subtitle: 'Hardware ID tooling for PC',
  desc: 'HWID spoofer utilities for disk serials, MAC rotation, and identifier cleanup when your PC is flagged—follow the portal guide before launching games.',
  features: [
    'Disk serial profiles',
    'MAC address rotation',
    'Cleanup utilities',
    'Compatibility scan',
    'Post-spoof verification',
    'Portal walkthrough',
  ],
  more: 6,
  buyUrl: checkoutForSlug('hwid-spoofer'),
  images: slide('gpMisc', 'gpWorld'),
  overview: {
    title: 'Fresh identifier workflow',
    paragraphs: [
      'Use HWID tooling when new accounts fail on one PC but work elsewhere—classic hardware enforcement. This is not an account-unban service.',
      'Restore points, driver cleanup, and cold reboot steps ship in the portal. Run verification before you load DELTA FORCE modules.',
    ],
  },
  acquisition: {
    title: 'How to get HWID Spoofer',
    steps: defaultAcquisitionSteps,
  },
  goodToKnow:
    'Spoofing does not fix reputation-only bans. Pair with new accounts when needed and accept platform risk before use.',
  limitations:
    'Improper spoofing can brick network drivers or cause instability. Follow the guide exactly and test in a controlled session first.',
  fullFeatures: [
    'Spoofer & cleanup bundle',
    'Serial profile rotation',
    'MAC spoof profiles',
    'Compatibility scan',
    'Verification checklist',
    'Portal support channel',
    'One-click restore notes',
    'Windows 10/11 support',
  ],
  systemRequirements: deltaSystemRequirements,
  body: [
    { type: 'h2', text: 'When HWID spoofing applies' },
    {
      type: 'p',
      text: 'Hardware bans block fresh logins on the same machine. Spoofing addresses identifiers—not server-side account flags.',
    },
    { type: 'h2', text: 'Workflow overview' },
    {
      type: 'p',
      text: 'Create a restore point, run cleanup, apply spoof profiles, reboot, verify identifiers, then load conservative game presets.',
    },
  ],
  relatedBlogSlugs: productRelatedBlogSlugs['hwid-spoofer'],
};

export const productPages: ProductPage[] = [deltaForcePage, cloudDmaPage, hwidSpooferPage];

export const cheatPages = productPages.filter((p) => p.kind === 'tier');

export function getProductPage(slug: string) {
  return productPages.find((p) => p.slug === slug);
}

export function getCheatPage(slug: string) {
  return cheatPages.find((p) => p.slug === slug);
}

export function getAllProductSlugs() {
  return productPages.map((p) => p.slug);
}

export function getAllCheatSlugs() {
  return cheatPages.map((p) => p.slug);
}

export const heroSlides = slide(
  'gpHero',
  'gpAimbot',
  'gpVisuals',
  'gpEspBox',
  'gpHealth',
  'gpWorld',
  'gpMisc',
);

export const productHub = {
  path: productBase,
  title: t.products.title,
  subtitle: t.products.subtitle,
  description:
    'DELTA FORCE cheats, Cloud DMA, and HWID Spoofer utilities for PC—with secure checkout on each product card.',
  buyUrl: checkoutPath('deltaForce'),
};
