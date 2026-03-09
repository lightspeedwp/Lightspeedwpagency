/**
 * AI Integrations — Landing Page Data
 *
 * Content for /solutions/ai-integrations
 *
 * @see /src/app/components/templates/AIIntegrationsTemplate.tsx
 */

import {
  Brain,
  TrendUp,
  Clock,
  Users,
  ChartBar,
  Sparkle,
  MagnifyingGlass,
  ChatCentered,
  ChartLine,
  Image,
  Shield,
  PenNib,
  Robot,
} from '@phosphor-icons/react';

import type { AIHero, AIStat, AIFeature, AISubPageCard, AIFAQ, AICTA } from './types';

/* ── Hero ── */

export const aiLandingHero: AIHero = {
  title: 'AI-Powered WordPress',
  titleHighlight: 'AI-Powered',
  tagline:
    'Add production-ready AI tooling to your WordPress stack. Automate content, optimise SEO, engage visitors 24/7, and unlock actionable insights.',
  badge: { text: 'AI FOR WORDPRESS', icon: Brain },
  primaryButton: { text: 'Request a Systems Audit', page: 'contact' },
  secondaryButton: { text: 'See Solutions', page: 'solutions' },
};

/* ── Stats ── */

export const aiLandingStats: AIStat[] = [
  {
    icon: TrendUp,
    value: '73%',
    label: 'Productivity Gain',
    description: 'Average increase in content output with AI assistance',
  },
  {
    icon: Clock,
    value: '60%',
    label: 'Time Saved',
    description: 'Reduction in routine SEO and content tasks',
  },
  {
    icon: Users,
    value: '3.5x',
    label: 'Engagement Boost',
    description: 'Higher visitor engagement with AI chatbots',
  },
  {
    icon: ChartBar,
    value: '45%',
    label: 'Conversion Uplift',
    description: 'Average improvement from AI-driven personalisation',
  },
];

/* ── Features ── */

export const aiLandingFeatures: AIFeature[] = [
  {
    icon: Sparkle,
    title: 'Content Generation',
    description: 'AI-powered blog posts, product descriptions, and marketing copy — on-brand and SEO-ready.',
  },
  {
    icon: MagnifyingGlass,
    title: 'Intelligent SEO',
    description: 'Automated keyword analysis, schema markup, and real-time content scoring for maximum visibility.',
  },
  {
    icon: ChatCentered,
    title: 'Smart Chatbots',
    description: '24/7 AI assistants that qualify leads, answer FAQs, and guide visitors to conversion.',
  },
  {
    icon: ChartLine,
    title: 'Predictive Analytics',
    description: 'Machine-learning insights that forecast traffic, identify trends, and recommend actions.',
  },
  {
    icon: Image,
    title: 'Image & Media AI',
    description: 'Auto-generate alt text, optimise images, and create AI-assisted visual content.',
  },
  {
    icon: Shield,
    title: 'Secure & Private',
    description: 'All AI processing respects GDPR, with on-site options to keep data within your infrastructure.',
  },
];

/* ── Sub-page cards ── */

export const aiSubPages: AISubPageCard[] = [
  {
    icon: PenNib,
    title: 'AI Content Generation',
    description: 'Automate blog writing, product descriptions, and multi-language content with fine-tuned models.',
    slug: 'ai-content-generation',
    accent: 'neon-pink',
  },
  {
    icon: MagnifyingGlass,
    title: 'AI-Powered SEO',
    description: 'Let AI handle keyword research, internal linking, and content optimisation in real time.',
    slug: 'ai-seo',
    accent: 'neon-lime',
  },
  {
    icon: Robot,
    title: 'AI Chatbots',
    description: 'Deploy intelligent conversational agents trained on your content and brand voice.',
    slug: 'ai-chatbots',
    accent: 'neon-cyan',
  },
  {
    icon: ChartBar,
    title: 'AI Analytics & Insights',
    description: 'Turn raw data into actionable strategies with predictive models and automated reporting.',
    slug: 'ai-analytics',
    accent: 'neon-yellow',
  },
];

/* ── FAQs ── */

export const aiLandingFAQs: AIFAQ[] = [
  {
    question: 'How does AI integrate with my existing WordPress site?',
    answer:
      'We install lightweight WordPress plugins and configure API connections to AI services. Your existing theme, content, and plugins remain untouched — AI layers on top seamlessly.',
  },
  {
    question: 'Is my data safe when using AI services?',
    answer:
      'Absolutely. We use GDPR-compliant providers and can deploy on-premise AI models for sensitive industries. Your content and user data never leave your control.',
  },
  {
    question: 'Do I need technical knowledge to manage AI features?',
    answer:
      'No. All AI features are controlled from the WordPress dashboard with simple toggles and settings. We provide full training and documentation.',
  },
  {
    question: 'What is the ROI timeline for AI integrations?',
    answer:
      'Most clients see measurable results within 30 days — reduced content costs, improved rankings, and higher engagement. Full ROI is typically achieved within 3-6 months.',
  },
];

/* ── CTA ── */

export const aiLandingCTA: AICTA = {
  title: 'Ready to Add AI to Your WordPress Site?',
  description:
    'Join forward-thinking businesses already leveraging AI to grow faster, rank higher, and engage deeper.',
  buttons: [
    { text: 'Request a Systems Audit', page: 'contact' },
    { text: 'View Our Work', page: 'portfolio-archive' },
  ],
};
