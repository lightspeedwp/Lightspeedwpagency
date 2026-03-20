/**
 * SEO Service Template Data
 *
 * Content data for SEOServiceTemplate.
 * All page content lives here — template handles layout only.
 *
 * @see /src/app/components/templates/SEOServiceTemplate.tsx
 */

import {
  MagnifyingGlass,
  TrendUp,
  Target,
  ChartBar,
  FileMagnifyingGlass,
  Trophy,
  Eye,
  Brain,
  Cpu,
  ChartLineUp,
  CursorClick,
  Timer
} from '@phosphor-icons/react';
import type { RelatedPageItem } from '../components/patterns/RelatedPagesGrid';

export const seoServiceBenefits = [
  {
    icon: MagnifyingGlass,
    title: 'Keyword research & strategy',
    description:
      'Data-driven keyword analysis to target high-value search terms your audience is actually using.',
  },
  {
    icon: TrendUp,
    title: 'Technical SEO optimization',
    description:
      'Fix crawl errors, improve site architecture, and ensure search engines can properly index your content.',
  },
  {
    icon: Target,
    title: 'On-page SEO',
    description:
      'Optimize meta tags, headings, content structure, and internal linking for maximum relevance.',
  },
  {
    icon: ChartBar,
    title: 'Performance tracking',
    description:
      'Monitor rankings, traffic, and conversions with comprehensive analytics and reporting.',
  },
  {
    icon: FileMagnifyingGlass,
    title: 'Content optimization',
    description:
      'Enhance existing content and create new SEO-optimized pages that rank and convert.',
  },
  {
    icon: Trophy,
    title: 'Competitive analysis',
    description:
      'Understand your competitive landscape and identify opportunities to outrank competitors.',
  },
];

export const seoServiceDeliverables = [
  {
    phase: 'Discovery & audit',
    items: [
      'Complete technical SEO audit',
      'Competitor analysis report',
      'Keyword research document',
      'Content gap analysis',
    ],
  },
  {
    phase: 'Strategy & planning',
    items: [
      'SEO strategy roadmap',
      'Keyword targeting plan',
      'Content calendar',
      'Technical optimization plan',
    ],
  },
  {
    phase: 'Implementation',
    items: [
      'On-page optimization',
      'Technical fixes',
      'Content creation/optimization',
      'Link building strategy',
    ],
  },
  {
    phase: 'Monitoring & reporting',
    items: [
      'Monthly performance reports',
      'Ranking tracking dashboard',
      'Traffic & conversion analytics',
      'Ongoing optimization recommendations',
    ],
  },
];

export const seoServiceResults = [
  { metric: '156%', label: 'Organic traffic increase after migration', icon: ChartLineUp },
  { metric: '12x', label: 'First page rankings growth', icon: Trophy },
  { metric: '92%', label: 'Click-through rate improvement', icon: CursorClick },
  { metric: '3-6 mo', label: 'Time to see measurable results', icon: Timer },
];

/** Lifecycle badge — Grow stage */
export const seoLifecycle = {
  slug: 'grow',
  name: 'Grow',
  icon: TrendUp,
  accent: 'var(--category-green)',
};

/** Trust signal */
export const seoTrustSignal = {
  quote: 'The predictive analytics showed us exactly which content to double down on, increasing traffic by 150%.',
  author: 'Nina Petrov',
  role: 'Head of Digital, EuroTrek',
};

/** Related solutions */
export const seoRelatedSolutions: RelatedPageItem[] = [
  {
    title: 'AI SEO solutions',
    description: 'Automated keyword research, content scoring, and competitor analysis powered by machine learning.',
    href: '/solutions/ai/seo',
    icon: MagnifyingGlass,
    accent: 'var(--category-green)',
  },
  {
    title: 'AI analytics solutions',
    description: 'Turn raw data into strategic decisions with automated dashboards and predictive insights.',
    href: '/solutions/ai/analytics',
    icon: ChartBar,
    accent: 'var(--category-green)',
  },
  {
    title: 'AI content generation',
    description: 'Create on-brand blog posts, product descriptions, and marketing copy at scale using AI.',
    href: '/solutions/ai/content-generation',
    icon: FileMagnifyingGlass,
    accent: 'var(--category-pink)',
  },
];

/** Related services */
export const seoRelatedServices: RelatedPageItem[] = [
  {
    title: 'AI Search & Visibility',
    description: 'Unified search visibility combining traditional SEO, analytics, and AI optimisation.',
    href: '/services/ai/search-visibility',
    icon: Eye,
    accent: 'var(--category-cyan)',
  },
  {
    title: 'Analytics service',
    description: 'Data tracking, conversion analysis, and performance reporting.',
    href: '/services/ai/analytics',
    icon: ChartBar,
    accent: 'var(--category-green)',
  },
  {
    title: 'AI engine optimisation',
    description: 'Fine-tune and accelerate AI models on your WordPress stack for cost efficiency.',
    href: '/services/ai/engine-optimisation',
    icon: Brain,
    accent: 'var(--category-indigo)',
  },
  {
    title: 'Answer engine optimisation',
    description: 'Get cited by ChatGPT, Perplexity, and AI Overviews with structured content.',
    href: '/services/ai/answer-engine-optimisation',
    icon: Cpu,
    accent: 'var(--category-indigo)',
  },
];

/** Differentiation callout */
export const seoDifferentiation = {
  title: 'Traditional SEO vs. AI Search & Visibility',
  description: 'While SEO focuses on ranking in traditional search engines like Google, our AI Search & Visibility service covers both traditional SEO AND optimisation for AI platforms like ChatGPT and Perplexity. For comprehensive coverage across all search channels, explore our unified AI Search & Visibility service.',
  ctaText: 'Explore AI Search & Visibility',
  ctaHref: '/services/ai/search-visibility',
};