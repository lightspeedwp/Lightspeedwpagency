/**
 * AI Integrations — AI-Powered SEO Sub-page Data
 *
 * Content for /solutions/ai-integrations/seo
 *
 * @see /src/app/components/templates/AISEOTemplate.tsx
 */

import {
  MagnifyingGlass,
  TrendUp,
  Crosshair,
  Clock,
  Lightning,
  FileText,
  Link,
  Database,
  Eye,
  ArrowsClockwise,
} from '@phosphor-icons/react';

import type { AIHero, AIStat, AIFeature, AIUseCase, AIPricingPackage, AIFAQ, AICTA } from './types';

/* ── Hero ── */

export const aiSEOHero: AIHero = {
  title: 'AI-Powered SEO',
  titleHighlight: 'AI-Powered',
  tagline:
    'Stop guessing, start ranking. AI analyses your content in real time, suggests improvements, and automates the technical SEO that moves the needle.',
  badge: { text: 'INTELLIGENT SEO', icon: MagnifyingGlass },
  primaryButton: { text: 'Request a Systems Audit', page: 'contact' },
  secondaryButton: { text: 'Back to AI Hub', page: 'ai-integrations' },
};

/* ── Stats ── */

export const aiSEOStats: AIStat[] = [
  {
    icon: TrendUp,
    value: '156%',
    label: 'Organic Growth',
    description: 'Average organic traffic increase after 6 months',
  },
  {
    icon: Crosshair,
    value: '3x',
    label: 'Keyword Rankings',
    description: 'More keywords ranking on page one of Google',
  },
  {
    icon: Clock,
    value: '70%',
    label: 'Time Saved',
    description: 'Less time spent on manual SEO audits and tasks',
  },
  {
    icon: Lightning,
    value: '<2s',
    label: 'Analysis Speed',
    description: 'Real-time content scoring as you type',
  },
];

/* ── Features ── */

export const aiSEOFeatures: AIFeature[] = [
  {
    icon: MagnifyingGlass,
    title: 'Keyword intelligence',
    description: 'AI-driven keyword research that finds high-intent, low-competition opportunities specific to your niche.',
  },
  {
    icon: FileText,
    title: 'Content scoring',
    description: 'Real-time readability, keyword density, and topical coverage scores right in the block editor.',
  },
  {
    icon: Link,
    title: 'Smart internal linking',
    description: 'Automatically suggests contextually relevant internal links to strengthen site architecture.',
  },
  {
    icon: Database,
    title: 'Schema markup',
    description: 'Auto-generate structured data (FAQ, HowTo, Product, Article) to win rich snippets in search results.',
  },
  {
    icon: Eye,
    title: 'Competitor analysis',
    description: 'Monitor competitor rankings, content gaps, and backlink strategies with AI-powered dashboards.',
  },
  {
    icon: ArrowsClockwise,
    title: 'Content decay detection',
    description: 'AI identifies pages losing rankings and recommends specific updates to recover lost traffic.',
  },
];

/* ── Use Cases ── */

export const aiSEOUseCases: AIUseCase[] = [
  {
    title: 'Content-Heavy Sites',
    description: 'Maintain SEO health across hundreds or thousands of posts with automated auditing and recommendations.',
    industries: ['Publishing', 'Blogging', 'Education'],
    features: ['Bulk Audit', 'Priority Queue', 'Auto-Optimise'],
  },
  {
    title: 'E-Commerce SEO',
    description: 'Optimise product pages, category descriptions, and collection pages at scale for transactional keywords.',
    industries: ['Retail', 'D2C', 'Marketplaces'],
    features: ['Product Schema', 'Category Optimisation', 'Review Markup'],
  },
  {
    title: 'Local business',
    description: 'Dominate local search with AI-optimised Google Business profiles, local schema, and geo-targeted content.',
    industries: ['Hospitality', 'Healthcare', 'Services'],
    features: ['Local Schema', 'NAP Consistency', 'Review Management'],
  },
  {
    title: 'SaaS & Tech',
    description: 'Compete for high-value keywords with AI-generated comparison pages, feature pages, and knowledge bases.',
    industries: ['SaaS', 'Fintech', 'DevTools'],
    features: ['Programmatic SEO', 'Feature Comparison', 'Knowledge Base'],
  },
];

/* ── Pricing ── */

export const aiSEOPricing: { title: string; description: string; packages: AIPricingPackage[] } = {
  title: 'SEO Intelligence Plans',
  description: 'Choose the AI SEO package that matches your growth ambitions.',
  packages: [
    {
      name: 'Essentials',
      description: 'For small sites',
      price: '$199/mo',
      features: [
        'Up to 50 pages monitored',
        'Weekly AI audit reports',
        'Basic keyword tracking (50)',
        'Content scoring in editor',
        'Email support',
      ],
      recommended: false,
    },
    {
      name: 'Growth',
      description: 'For serious SEO',
      price: '$599/mo',
      features: [
        'Up to 500 pages monitored',
        'Daily AI audits + fixes',
        'Advanced keyword tracking (500)',
        'Smart internal linking',
        'Schema auto-generation',
        'Competitor monitoring',
        'Priority support',
      ],
      recommended: true,
    },
    {
      name: 'Enterprise',
      description: 'For large-scale SEO',
      price: 'Custom',
      features: [
        'Unlimited pages',
        'Real-time monitoring',
        'Unlimited keywords',
        'Custom AI models',
        'API access',
        'White-label reports',
        'Dedicated strategist',
      ],
      recommended: false,
    },
  ],
};

/* ── FAQs ── */

export const aiSEOFAQs: AIFAQ[] = [
  {
    question: 'How is AI SEO different from traditional SEO tools?',
    answer:
      'Traditional tools show you data and leave decisions to you. AI SEO analyses, recommends, and can even auto-implement changes — saving hours of manual work per week.',
  },
  {
    question: 'Will this work with my existing SEO plugin (Yoast, Rank Math)?',
    answer:
      'Yes. Our AI layer complements — not replaces — your existing SEO plugin. It adds intelligence on top of whatever tool you already use.',
  },
  {
    question: 'How quickly will I see ranking improvements?',
    answer:
      'Technical fixes can show results within days. Content optimisations typically take 2-4 weeks to impact rankings. Our average client sees a 50%+ improvement within 90 days.',
  },
  {
    question: 'Can the AI handle algorithm updates?',
    answer:
      'The AI continuously learns from ranking signals and algorithm changes. It adapts recommendations automatically, so you are always aligned with best practices.',
  },
];

/* ── CTA ── */

export const aiSEOCTA: AICTA = {
  title: 'Stop guessing. Start ranking.',
  description:
    'Let AI handle the SEO grind while you focus on creating great content and growing your business.',
  buttons: [
    { text: 'Get Your Free Audit', page: 'contact' },
    { text: 'View Case Studies', page: 'portfolio-archive' },
  ],
};