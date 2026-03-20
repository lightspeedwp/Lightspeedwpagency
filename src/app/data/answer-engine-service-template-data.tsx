/**
 * Answer Engine Service Template Data
 *
 * Content data for AnswerEngineServiceTemplate.
 * All page content lives here — template handles layout only.
 *
 * @see /src/app/components/templates/AnswerEngineServiceTemplate.tsx
 */

import {
  ChatCircle,
  Lightbulb,
  Users,
  Trophy,
  TrendUp,
  Target,
  Eye,
  MagnifyingGlass,
  Brain,
  ChartBar,
  Cpu,
  Microphone,
  ListChecks,
} from '@phosphor-icons/react';
import type { RelatedPageItem } from '../components/patterns/RelatedPagesGrid';

export const answerEngineServiceBenefits = [
  {
    icon: ChatCircle,
    title: 'Conversational content optimization',
    description:
      'Structure content to answer natural language questions that users ask AI assistants and voice search.',
  },
  {
    icon: Lightbulb,
    title: 'Featured snippet optimization',
    description:
      'Format content to be selected as direct answers in Google featured snippets and AI responses.',
  },
  {
    icon: Users,
    title: 'Question-answer mapping',
    description:
      'Identify and answer the exact questions your target audience is asking across all platforms.',
  },
  {
    icon: Trophy,
    title: 'Authority building',
    description:
      'Establish your brand as the definitive source for answers in your industry or niche.',
  },
  {
    icon: TrendUp,
    title: 'Zero-click optimization',
    description:
      'Capture visibility even when users get answers without clicking through to websites.',
  },
  {
    icon: Target,
    title: 'Multi-platform coverage',
    description:
      'Optimize for Google, Bing, voice assistants, and AI engines simultaneously.',
  },
];

export const answerEngineServiceProcess = [
  {
    phase: 'Question research',
    description: 'Identify the questions your audience is asking',
    deliverables: [
      'Question inventory (500+ questions)',
      'Search intent mapping',
      'Competitor question analysis',
      'Question priority matrix',
    ],
  },
  {
    phase: 'Answer development',
    description: 'Create comprehensive, authoritative answers',
    deliverables: [
      'Direct answer creation',
      'Long-form content development',
      'FAQ schema implementation',
      'Answer structure optimization',
    ],
  },
  {
    phase: 'Format optimization',
    description: 'Structure content for answer engines',
    deliverables: [
      'Featured snippet formatting',
      'People Also Ask optimization',
      'Voice search optimization',
      'Conversational tone adaptation',
    ],
  },
  {
    phase: 'Monitoring & refinement',
    description: 'Track answer visibility and improve',
    deliverables: [
      'Answer visibility tracking',
      'Featured snippet monitoring',
      'Voice search performance',
      'Monthly optimization reports',
    ],
  },
];

export const answerEngineServiceResults = [
  { metric: '420%', label: 'Increase in featured snippets captured', icon: Trophy },
  { metric: '4.2x', label: 'More voice search visibility', icon: Microphone },
  { metric: '91%', label: 'Answer accuracy rate across platforms', icon: ListChecks },
  { metric: '2-4 mo', label: 'Time to first measurable results', icon: Target },
];

/** Lifecycle badge — Grow stage */
export const answerEngineLifecycle = {
  slug: 'grow',
  name: 'Grow',
  icon: TrendUp,
  accent: 'var(--category-green)',
};

/** Trust signal */
export const answerEngineTrustSignal = {
  quote: 'Our content now appears in 40+ featured snippets and voice search results. We\'re the answer customers find first.',
  author: 'Sarah Chen',
  role: 'VP Marketing, HealthTech Solutions',
};

/** Related solutions */
export const answerEngineRelatedSolutions: RelatedPageItem[] = [
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
    title: 'AI integrations',
    description: 'Seamlessly connect leading AI tools to your WordPress stack with custom integrations.',
    href: '/solutions/ai/integrations',
    icon: Brain,
    accent: 'var(--category-violet)',
  },
];

/** Related services */
export const answerEngineRelatedServices: RelatedPageItem[] = [
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
    description: 'Position your brand for citation by ChatGPT, Claude, and AI-powered search.',
    href: '/services/ai/engine-optimisation',
    icon: Brain,
    accent: 'var(--category-indigo)',
  },
  {
    title: 'Analytics service',
    description: 'Make data-driven decisions with comprehensive tracking and actionable insights.',
    href: '/services/ai/analytics',
    icon: ChartBar,
    accent: 'var(--category-green)',
  },
];

/** Voice search optimization section */
export const voiceSearchContent = {
  heading: 'Voice search optimization strategy',
  description: 'Voice search is fundamentally different from typed queries. People speak in full questions and expect immediate, conversational answers. We optimize your content for how people actually talk.',
  strategies: [
    {
      title: 'Natural language targeting',
      description: 'Optimize for conversational queries like "What\'s the best way to..." instead of keyword fragments.',
    },
    {
      title: 'Question-based content',
      description: 'Structure content around questions your audience asks voice assistants: who, what, where, when, why, how.',
    },
    {
      title: 'Local voice optimization',
      description: 'Capture "near me" and local intent queries that drive immediate action.',
    },
    {
      title: 'Featured snippet focus',
      description: 'Voice assistants read featured snippet content aloud—we format answers to win these positions.',
    },
  ],
};

/** Zero-click optimization section */
export const zeroClickContent = {
  heading: 'Zero-click optimization: Visibility without the click',
  description: 'Over 60% of Google searches now end without a click. Users get answers directly in search results through featured snippets, knowledge panels, and AI overviews. We help you capture this visibility and build brand authority even when users don\'t click through.',
  tactics: [
    {
      title: 'Featured snippet formatting',
      description: 'Structure answers in lists, tables, and paragraphs that Google selects for position zero.',
    },
    {
      title: 'Knowledge panel optimization',
      description: 'Build entity signals and structured data to appear in knowledge panels for branded queries.',
    },
    {
      title: 'People Also Ask targeting',
      description: 'Create content that gets featured in expandable PAA boxes for related questions.',
    },
    {
      title: 'Brand presence metrics',
      description: 'Track impressions, featured snippet ownership, and brand mentions even without click-through.',
    },
  ],
};