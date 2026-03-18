/**
 * AI Integrations — Content Generation Sub-page Data
 *
 * Content for /solutions/ai-integrations/content-generation
 *
 * @see /src/app/components/templates/AIContentGenerationTemplate.tsx
 */

import {
  PenNib,
  FileText,
  Clock,
  Crosshair,
  Globe,
  Sparkle,
  Translate,
  Image,
  ArrowsClockwise,
  Shield,
} from '@phosphor-icons/react';

import type { AIHero, AIStat, AIFeature, AIUseCase, AIPricingPackage, AIFAQ, AICTA } from './types';
import type { UniversalIcon } from '../../utils/icon-map';

/* ── Lifecycle Stage Info ── */

export interface LifecycleStageInfo {
  slug: string;
  name: string;
  icon: UniversalIcon;
  accent: string;
}

export const contentGenerationLifecycle: LifecycleStageInfo = {
  slug: 'create',
  name: 'Create',
  icon: PenNib,
  accent: 'var(--category-pink)',
};

/* ── Trust Signal ── */

export const contentGenerationTrustSignal = {
  quote: 'The conversational UI they designed feels incredibly human and reduced our support tickets by 30%.',
  author: 'James Okafor',
  role: 'CEO',
  company: 'SafariBookings',
};

/* ── Related Links ── */

export const contentGenerationRelatedServices = [
  { label: 'Content Strategy', href: '/services/content/strategy', description: 'Editorial planning and content models' },
  { label: 'Content Audit', href: '/services/content/audit', description: 'Inventory and quality assessment' },
  { label: 'AI SEO', href: '/services/ai/seo', description: 'AI-powered on-page optimisation' },
];

export const contentGenerationRelatedSolutions = [
  { label: 'AI Integrations', href: '/solutions/ai/integrations', description: 'Complete AI integration roadmap' },
  { label: 'AI Chatbots', href: '/solutions/ai/chatbots', description: 'Conversational interfaces for support' },
  { label: 'AI Analytics', href: '/solutions/ai/analytics', description: 'Predictive content performance insights' },
];

/* ── Hero ── */

export const aiContentHero: AIHero = {
  title: 'AI Content Generation',
  titleHighlight: 'Content Generation',
  tagline:
    'Create high-quality, on-brand content at scale. From blog posts to product descriptions, AI handles the heavy lifting while you keep creative control.',
  badge: { text: 'AI CONTENT', icon: PenNib },
  primaryButton: { text: 'Request a Systems Audit', page: 'contact' },
  secondaryButton: { text: 'Back to AI Hub', page: 'ai-integrations' },
};

/* ── Stats ── */

export const aiContentStats: AIStat[] = [
  {
    icon: FileText,
    value: '10x',
    label: 'Content Output',
    description: 'Produce 10x more content without growing your team',
  },
  {
    icon: Clock,
    value: '80%',
    label: 'Time Reduction',
    description: 'Average time saved on first-draft creation',
  },
  {
    icon: Crosshair,
    value: '95%',
    label: 'Brand Accuracy',
    description: 'Content matches your brand voice and guidelines',
  },
  {
    icon: Globe,
    value: '30+',
    label: 'Languages',
    description: 'Multi-language content from a single source',
  },
];

/* ── Features ── */

export const aiContentFeatures: AIFeature[] = [
  {
    icon: FileText,
    title: 'Blog post automation',
    description: 'Generate SEO-optimised articles from topic briefs. Includes headings, meta descriptions, and internal links.',
  },
  {
    icon: Sparkle,
    title: 'Product descriptions',
    description: 'Bulk-create compelling WooCommerce descriptions that convert. Supports variations and A/B testing.',
  },
  {
    icon: Translate,
    title: 'Multi-Language Support',
    description: 'Translate and localise content into 30+ languages while maintaining tone and cultural nuance.',
  },
  {
    icon: Image,
    title: 'AI Image Generation',
    description: 'Create unique featured images, hero graphics, and social media visuals from text prompts.',
  },
  {
    icon: ArrowsClockwise,
    title: 'Content refresh',
    description: 'Automatically identify outdated posts and suggest updates to keep content evergreen and ranking.',
  },
  {
    icon: Shield,
    title: 'Plagiarism & Fact Check',
    description: 'Built-in checks ensure all AI-generated content is original, accurate, and safe to publish.',
  },
];

/* ── Use Cases ── */

export const aiContentUseCases: AIUseCase[] = [
  {
    title: 'E-Commerce Stores',
    description: 'Generate thousands of product descriptions in minutes, maintaining consistency across your entire catalogue.',
    industries: ['Retail', 'Fashion', 'Electronics'],
    features: ['Bulk Generation', 'A/B Variations', 'SEO Metadata'],
  },
  {
    title: 'Content publishers',
    description: 'Scale editorial output while maintaining quality. AI drafts, humans edit — the perfect workflow.',
    industries: ['Media', 'News', 'Education'],
    features: ['Topic Research', 'Draft Generation', 'Fact Checking'],
  },
  {
    title: 'Marketing agencies',
    description: 'Produce client content at scale without growing headcount. White-labelled and on-brand.',
    industries: ['Agencies', 'SaaS', 'Consulting'],
    features: ['Brand Voice Training', 'Campaign Copy', 'Social Content'],
  },
  {
    title: 'Multi-Language Sites',
    description: 'Expand into new markets with AI-powered translation that preserves meaning and cultural context.',
    industries: ['Tourism', 'International', 'Government'],
    features: ['Auto-Translation', 'Cultural Localisation', 'WPML Integration'],
  },
];

/* ── Pricing ── */

export const aiContentPricing: { title: string; description: string; packages: AIPricingPackage[] } = {
  title: 'Content generation plans',
  description: 'Choose the right level of AI content support for your business.',
  packages: [
    {
      name: 'Starter',
      description: 'For small blogs and simple sites',
      price: '$299/mo',
      features: [
        '20 AI articles per month',
        'Basic SEO optimisation',
        'English only',
        'WordPress plugin access',
        'Email support',
      ],
      recommended: false,
    },
    {
      name: 'Professional',
      description: 'For growing businesses',
      price: '$799/mo',
      features: [
        'Unlimited AI articles',
        'Advanced SEO + interlinking',
        '5 languages',
        'AI image generation',
        'Brand voice training',
        'Priority support',
      ],
      recommended: true,
    },
    {
      name: 'Enterprise',
      description: 'For large-scale operations',
      price: 'Custom',
      features: [
        'Unlimited everything',
        'Full language support (30+)',
        'Custom AI model fine-tuning',
        'API access',
        'Dedicated account manager',
        'SLA guarantee',
      ],
      recommended: false,
    },
  ],
};

/* ── FAQs ── */

export const aiContentFAQs: AIFAQ[] = [
  {
    question: 'Will AI-generated content hurt my SEO?',
    answer:
      'No. Google values helpful, high-quality content regardless of how it is produced. Our AI pipeline includes SEO best practices, originality checks, and human review workflows.',
  },
  {
    question: 'Can the AI match my brand voice?',
    answer:
      'Yes. We fine-tune the AI on your existing content, style guide, and brand values. The result is content that sounds like your team wrote it.',
  },
  {
    question: 'How does the WordPress integration work?',
    answer:
      'A lightweight plugin adds an "AI Assist" panel in the block editor. Generate, refine, and publish — all without leaving WordPress.',
  },
  {
    question: 'Is there a human review step?',
    answer:
      'Always recommended. AI generates the first draft; your team reviews, edits, and approves before publishing. The workflow is fully configurable.',
  },
];

/* ── CTA ── */

export const aiContentCTA: AICTA = {
  title: 'Scale your content without scaling your team',
  description:
    'See how AI content generation can transform your publishing workflow and drive real business results.',
  buttons: [
    { text: 'Start Free Trial', page: 'contact' },
    { text: 'See Examples', page: 'portfolio-archive' },
  ],
};