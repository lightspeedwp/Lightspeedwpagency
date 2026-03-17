/**
 * AI Solutions Landing Page Data
 *
 * Content for /solutions/ai — hub page for all AI solution sub-pages.
 *
 * @see /src/app/components/templates/AISolutionsLandingTemplate.tsx
 */

import {
  Brain,
  Sparkle,
  MagnifyingGlass,
  Robot,
  ChartBar,
  PenNib,
  Lightning,
  TrendUp,
  Shield,
} from '@phosphor-icons/react';

import type { Icon } from '@phosphor-icons/react';

/* ── Types ── */

export interface AISolutionCard {
  icon: Icon;
  title: string;
  description: string;
  href: string;
  accent: string;
  features: string[];
}

/* ── Hero ── */

export const aiSolutionsHero = {
  badge: 'AI SOLUTIONS',
  badgeIcon: Brain,
  title: 'Intelligent WordPress,',
  highlight: 'powered by AI.',
  description:
    'From automated content creation to predictive analytics, our AI solutions transform how you build, manage, and grow your WordPress presence.',
  primaryCta: { text: 'Explore solutions', page: 'contact' },
  secondaryCta: { text: 'View AI services', page: 'services/ai' },
};

/* ── Stats ── */

export const aiSolutionsStats = [
  { value: '73%', label: 'Productivity gain', description: 'Average increase in content output with AI' },
  { value: '60%', label: 'Time saved', description: 'Reduction in routine SEO and content tasks' },
  { value: '3.5x', label: 'Engagement boost', description: 'Higher visitor engagement with AI chatbots' },
  { value: '45%', label: 'Conversion uplift', description: 'Improvement from AI-driven personalisation' },
];

/* ── Solution cards ── */

export const aiSolutionCards: AISolutionCard[] = [
  {
    icon: Brain,
    title: 'AI integrations',
    description: 'Add production-ready AI tooling to your WordPress stack. Automate content, optimise SEO, and engage visitors around the clock.',
    href: '/solutions/ai/integrations',
    accent: 'neon-cyan',
    features: ['Plugin ecosystem', 'API orchestration', 'GDPR compliant'],
  },
  {
    icon: PenNib,
    title: 'AI content generation',
    description: 'Create on-brand blog posts, product descriptions, and marketing copy at scale using models trained on your voice.',
    href: '/solutions/ai/content-generation',
    accent: 'neon-pink',
    features: ['Brand-voice tuning', 'Multi-language', 'SEO-optimised output'],
  },
  {
    icon: MagnifyingGlass,
    title: 'AI-powered SEO',
    description: 'Automated keyword research, content scoring, schema markup, and competitor analysis powered by machine learning.',
    href: '/solutions/ai/seo',
    accent: 'neon-lime',
    features: ['Real-time scoring', 'Schema automation', 'Rank tracking'],
  },
  {
    icon: Robot,
    title: 'AI chatbots',
    description: 'Intelligent conversational agents trained on your content that qualify leads, answer FAQs, and convert visitors 24/7.',
    href: '/solutions/ai/chatbots',
    accent: 'neon-cyan',
    features: ['Custom training', 'Human handoff', 'Lead qualification'],
  },
  {
    icon: ChartBar,
    title: 'AI analytics & insights',
    description: 'Turn raw data into strategic decisions with automated dashboards, traffic predictions, and anomaly detection.',
    href: '/solutions/ai/analytics',
    accent: 'neon-yellow',
    features: ['Predictive models', 'Anomaly alerts', 'Custom dashboards'],
  },
];

/* ── Capabilities ── */

export const aiSolutionsCapabilities = [
  { icon: Lightning, title: 'Instant deployment', description: 'AI features go live in days, not months. WordPress-native plugins mean zero disruption.' },
  { icon: Shield, title: 'Privacy first', description: 'GDPR-compliant with on-premise options. Your data never leaves your infrastructure.' },
  { icon: TrendUp, title: 'Measurable ROI', description: 'Every AI integration includes tracking dashboards so you can measure impact from day one.' },
  { icon: Sparkle, title: 'Continuous learning', description: 'Models improve over time as they learn from your content, visitors, and conversion patterns.' },
];

/* ── CTA ── */

export const aiSolutionsCTA = {
  title: 'Ready to add AI to your WordPress site?',
  description: 'Join forward-thinking businesses already leveraging AI to grow faster, rank higher, and engage deeper.',
  buttonText: 'Request a systems audit',
  buttonPage: 'contact',
  benefits: [
    'Content, SEO, chatbots, and analytics',
    'WordPress-native — works with your existing setup',
    'GDPR compliant and privacy-first',
    'Measurable ROI within 30 days',
  ],
};