import type { IconName } from '../components/icons/types';
import { normalizeInternalPath, productPath, ROUTES } from '../utils/path';

export type FaqTopic =
  | 'all'
  | 'plans'
  | 'esp'
  | 'scripts'
  | 'safety'
  | 'products'
  | 'blog'
  | 'setup';

export interface SiteFaqItem {
  id: string;
  topic: FaqTopic;
  icon: IconName;
  q: string;
  a: string;
  aHtml?: string;
  scopes?: string[];
}

function a(text: string): string {
  return text;
}

function link(text: string, href: string): string {
  return `<a href="${normalizeInternalPath(href)}">${text}</a>`;
}

const productTable = link('DELTA FORCE feature table', productPath('delta-force'));
const productEspDoc = link('player ESP option list', productPath('delta-force'));
const productsCatalog = link('DELTA FORCE products hub', ROUTES.products);
const faqIndex = link('complete FAQ index', ROUTES.faq);
const blogSetupArticles = link('setup articles on the blog', ROUTES.blog);
const blogWalkthroughs = link('feature walkthrough articles', ROUTES.blog);
const espGuideArticle = link('DELTA FORCE ESP walkthrough', '/blog/delta-force-esp-guide/');

export const siteFaqs: SiteFaqItem[] = [
  {
    id: 'status',
    topic: 'setup',
    icon: 'faqStatus',
    q: 'Where do I check if DELTA FORCE cheats are online?',
    a: a('Check the live status banner on deltacheats.org before purchase or launch, especially after game updates.'),
  },
  {
    id: 'after-buy',
    topic: 'setup',
    icon: 'faqAfterBuy',
    q: 'What happens after I buy?',
    a: a('Secure checkout unlocks portal access, loader download, and setup notes. Follow the guide before joining public servers.'),
  },
  {
    id: 'ban-risk',
    topic: 'safety',
    icon: 'faqBanRisk',
    q: 'Can I get banned using third-party cheats?',
    a: a('Yes—any modification carries risk. Anti-cheat and report systems evolve. Read current status and accept the risk before use.'),
  },
  {
    id: 'platforms',
    topic: 'setup',
    icon: 'faqPlatforms',
    q: 'Which platforms are supported?',
    a: a('DELTA FORCE on Windows 10/11 64-bit with the Cloud DMA setup described on the product page.'),
  },
  {
    id: 'license-move',
    topic: 'setup',
    icon: 'faqLicenseMove',
    q: 'Can I move my license to a new PC?',
    a: a('Contact support with your order email for hardware changes. Limits depend on your license terms.'),
  },
  {
    id: 'products-page',
    topic: 'products',
    icon: 'faqProductsPage',
    q: 'Where is the product listed?',
    a: `${productsCatalog} lists ${productTable} with the full feature table and secure checkout.`,
  },
  {
    id: 'what-is-esp',
    topic: 'esp',
    icon: 'faqWhatIsEsp',
    q: 'What is DELTA FORCE player ESP / wallhack?',
    a: `Player ESP shows soldiers through cover with boxes, skeletons, health bars, weapons, and distance—covered on ${productEspDoc}.`,
    scopes: ['delta-force'],
  },
  {
    id: 'aimbot-bones',
    topic: 'scripts',
    icon: 'faqEspVsScripts',
    q: 'Which aimbot bones are supported?',
    a: a('Head, Neck, Body, and Pelvis are available. Start with neck or body while tuning smoothness, then move to head if needed.'),
    scopes: ['delta-force'],
  },
  {
    id: 'cloud-dma',
    topic: 'setup',
    icon: 'faqPlatforms',
    q: 'What is Cloud DMA compatibility?',
    a: a('Cloud DMA refers to the external hardware workflow documented on the product page. Verify your rig before checkout.'),
    scopes: ['delta-force'],
  },
  {
    id: 'configs',
    topic: 'setup',
    icon: 'faqAfterBuy',
    q: 'Can I save multiple config profiles?',
    a: a('Yes—create, load, rename, and delete config slots are built into the misc menu.'),
    scopes: ['delta-force'],
  },
  {
    id: 'undetected',
    topic: 'safety',
    icon: 'faqBanRisk',
    q: 'Do you guarantee undetected status?',
    a: a('No. Status can change after updates. Never rely on marketing claims—check deltacheats.org status before you launch.'),
  },
  {
    id: 'recoil',
    topic: 'products',
    icon: 'faqProductsPage',
    q: 'Is recoil control included?',
    a: a('The published feature list covers aimbot and player ESP. Separate recoil modules are not listed for this build.'),
  },
  {
    id: 'languages',
    topic: 'setup',
    icon: 'faqLicenseMove',
    q: 'Which menu languages are available?',
    a: a('English, Russian, and Chinese language options are available in misc settings.'),
  },
  {
    id: 'full-faq',
    topic: 'all',
    icon: 'faqMore',
    q: 'Where is the full FAQ?',
    a: `See the ${faqIndex} for all answers—or read ${blogSetupArticles} for setup walkthroughs.`,
  },
];

export function getLandingFaqs(): SiteFaqItem[] {
  return siteFaqs.filter((f) =>
    ['status', 'after-buy', 'ban-risk', 'platforms', 'license-move', 'products-page'].includes(f.id),
  );
}

export function getAllFaqs(): SiteFaqItem[] {
  return siteFaqs.filter((f) => f.topic !== 'all');
}

export const SITE_FAQ_SECTION_COPY = {
  eyebrow: 'All topics',
  title: 'Browse by category',
  subtitle: 'Filter aimbot, ESP, products, setup, and blog answers for DELTA FORCE.',
} as const;

export const SITE_FAQ_FILTER_TOPICS: FaqTopic[] = [
  'all',
  'plans',
  'esp',
  'scripts',
  'safety',
  'products',
  'blog',
  'setup',
];

export const CONTEXTUAL_FAQ_SECTION_COPY = {
  eyebrow: 'FAQ',
  title: 'Questions about this page',
  subtitle: 'Answers tied to what you are reading—visit the FAQ page for every topic.',
} as const;

export function faqFilterTopicsForItems(items: SiteFaqItem[]): FaqTopic[] {
  const present = new Set(items.map((item) => item.topic));
  const topics: FaqTopic[] = ['all'];
  for (const topic of SITE_FAQ_FILTER_TOPICS) {
    if (topic !== 'all' && present.has(topic)) topics.push(topic);
  }
  return topics;
}

export function getProductFaqs(slug: string, kind: 'tier' | 'utility'): SiteFaqItem[] {
  const general = siteFaqs.filter(
    (f) => !f.scopes && ['setup', 'safety', 'plans', 'esp', 'scripts'].includes(f.topic),
  );
  const scoped = siteFaqs.filter((f) => f.scopes?.includes(slug));
  const combined = [...scoped, ...general.slice(0, 8)];
  const seen = new Set<string>();
  return combined.filter((item) => {
    if (seen.has(item.id)) return false;
    seen.add(item.id);
    return true;
  });
}

const blogTopicFaqs: Record<string, SiteFaqItem[]> = {
  Setup: [
    {
      id: 'blog-setup-loader',
      topic: 'blog',
      icon: 'faqBlogSetupLoader',
      q: 'Where do I download the loader?',
      a: a('Only from your operator portal after checkout—not from third-party links.'),
    },
    {
      id: 'blog-setup-test',
      topic: 'blog',
      icon: 'faqBlogSetupLobby',
      q: 'Should I test in a private session first?',
      a: a('Yes. Load conservative aimbot smoothness and ESP distance before public multiplayer.'),
    },
  ],
  Hardware: [
    {
      id: 'blog-hw-dma',
      topic: 'blog',
      icon: 'faqBlogSecVac',
      q: 'Does this article guarantee DMA compatibility for every PC?',
      a: a('No—verify your hardware against the product page and email support if anything is unclear.'),
    },
  ],
};

const defaultBlogFaqs: SiteFaqItem[] = [
  {
    id: 'blog-default-1',
    topic: 'blog',
    icon: 'faqBlogDefault1',
    q: 'Are blog guides official product documentation?',
    a: `Articles explain workflows and link to ${productsCatalog}. The product page feature list is authoritative for checkout.`,
  },
  {
    id: 'blog-default-2',
    topic: 'blog',
    icon: 'faqBlogDefault2',
    q: 'Need help applying this guide?',
    a: a('Email support with your order email and the article slug.'),
  },
];

export function getBlogFaqs(tag: string, slug: string): SiteFaqItem[] {
  const topicFaqs = blogTopicFaqs[tag] ?? [];
  const slugHints: SiteFaqItem[] = [];

  if (slug.includes('esp') || slug.includes('wallhack')) {
    slugHints.push({
      id: 'blog-slug-esp',
      topic: 'esp',
      icon: 'faqBlogSlugEsp',
      q: 'Where are player overlay options documented?',
      a: `Player visual options are listed on ${productEspDoc} and in the ${espGuideArticle}.`,
    });
  }
  if (slug.includes('aimbot')) {
    slugHints.push({
      id: 'blog-slug-aimbot',
      topic: 'scripts',
      icon: 'faqBlogSlugScripts',
      q: 'Which aimbot options does this article cover?',
      a: a('Hold vs always, bones, adaptive FOV, smoothness, and max distance—all in the aimbot tab.'),
    });
  }

  return [...slugHints, ...topicFaqs, ...defaultBlogFaqs].slice(0, 8);
}

export const compareRows = [
  { feature: 'Enable Aimbot', icon: 'compareAutoCombo' as const, lite: true, pro: true, elite: true },
  { feature: 'Player ESP & boxes', icon: 'comparePlayerEsp' as const, lite: true, pro: true, elite: true },
  { feature: 'Skeleton ESP', icon: 'compareFullMapHack' as const, lite: true, pro: true, elite: true },
  { feature: 'Health bars', icon: 'compareWardLocator' as const, lite: true, pro: true, elite: true },
  { feature: 'Weapon & team ESP', icon: 'compareMinimapHack' as const, lite: true, pro: true, elite: true },
  { feature: 'Config profiles', icon: 'compareCloudBackup' as const, lite: true, pro: true, elite: true },
  { feature: 'Cloud DMA workflow', icon: 'comparePriorityPatch' as const, lite: true, pro: true, elite: true },
];
