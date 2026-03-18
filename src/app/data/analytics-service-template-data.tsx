/**
 * Analytics Service Template Data
 *
 * Content data for AnalyticsServiceTemplate.
 * All page content lives here — template handles layout only.
 *
 * @see /src/app/components/templates/AnalyticsServiceTemplate.tsx
 */

import {
  ChartBar,
  Target,
  TrendUp,
  Users,
  ChartLine,
  ChartPie,
  Eye,
  MagnifyingGlass,
  Brain,
  Cpu,
  ChartLineUp,
  Lightning,
  TreeStructure,
} from '@phosphor-icons/react';
import type { RelatedPageItem } from '../components/patterns/RelatedPagesGrid';

export const analyticsServiceBenefits = [
  {
    icon: ChartBar,
    title: 'Data collection & integration',
    description:
      'Set up comprehensive tracking across all touchpoints to capture meaningful user behavior data.',
  },
  {
    icon: Target,
    title: 'Goal tracking & conversion',
    description:
      'Define and monitor key performance indicators that align with your business objectives.',
  },
  {
    icon: TrendUp,
    title: 'Traffic & behavior analysis',
    description:
      'Understand how visitors interact with your site and identify opportunities for improvement.',
  },
  {
    icon: Users,
    title: 'Audience segmentation',
    description:
      'Break down your audience into meaningful segments to personalize content and marketing.',
  },
  {
    icon: ChartLine,
    title: 'Performance reporting',
    description:
      'Actionable insights delivered through custom dashboards and automated reports.',
  },
  {
    icon: ChartPie,
    title: 'Attribution modeling',
    description:
      'Understand which channels and touchpoints drive conversions across the customer journey.',
  },
];

export const analyticsServiceDeliverables = [
  'Google Analytics 4 setup and configuration',
  'Custom event tracking implementation',
  'Conversion funnel analysis',
  'Custom dashboard creation',
  'Monthly performance reports',
  'Data-driven optimization recommendations',
];

export const analyticsServiceResults = [
  { metric: '200%', label: 'Increase in actionable insights', icon: ChartLineUp },
  { metric: '45%', label: 'Improvement in conversion tracking', icon: Target },
  { metric: '10x', label: 'Faster reporting with dashboards', icon: Lightning },
  { metric: '30%', label: 'Reduction in data silos', icon: TreeStructure },
];

/** Lifecycle badge — Grow stage */
export const analyticsLifecycle = {
  slug: 'grow',
  name: 'Grow',
  icon: TrendUp,
  accent: 'var(--category-green)',
};

/** Trust signal */
export const analyticsTrustSignal = {
  quote: 'The predictive analytics showed us exactly which content to double down on, increasing traffic by 150%.',
  author: 'Nina Petrov',
  role: 'Head of Digital, EuroTrek',
};

/** Related solutions */
export const analyticsRelatedSolutions: RelatedPageItem[] = [
  {
    title: 'AI analytics solutions',
    description: 'Turn raw data into strategic decisions with automated dashboards and predictive insights.',
    href: '/solutions/ai/analytics',
    icon: ChartBar,
    accent: 'var(--category-green)',
  },
  {
    title: 'AI SEO solutions',
    description: 'Automated keyword research, content scoring, and competitor analysis powered by machine learning.',
    href: '/solutions/ai/seo',
    icon: MagnifyingGlass,
    accent: 'var(--category-green)',
  },
  {
    title: 'AI integrations',
    description: 'Seamlessly connect leading AI tools to your WordPress stack with custom integrations.',
    href: '/solutions/ai/integrations',
    icon: Brain,
    accent: 'var(--category-violet)',
  },
];

/** Related services */
export const analyticsRelatedServices: RelatedPageItem[] = [
  {
    title: 'AI Search & Visibility',
    description: 'Unified search visibility combining traditional SEO, analytics, and AI optimisation.',
    href: '/services/ai/search-visibility',
    icon: Eye,
    accent: 'var(--category-cyan)',
  },
  {
    title: 'SEO service',
    description: 'Traditional search engine optimisation with technical audits and keyword strategy.',
    href: '/services/ai/seo',
    icon: MagnifyingGlass,
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