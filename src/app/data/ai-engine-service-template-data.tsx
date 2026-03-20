/**
 * AI Engine Service Template Data
 *
 * Content data for AIEngineServiceTemplate.
 * All page content lives here — template handles layout only.
 *
 * @see /src/app/components/templates/AIEngineServiceTemplate.tsx
 */

import {
  Brain,
  Sparkle,
  Target,
  Lightning,
  CheckCircle,
  TrendUp,
  Eye,
  MagnifyingGlass,
  ChartBar,
  Cpu,
} from '@phosphor-icons/react';
import type { RelatedPageItem } from '../components/patterns/RelatedPagesGrid';

export const aiEngineServiceBenefits = [
  {
    icon: Brain,
    title: 'AI-first content strategy',
    description:
      'Structure content to be understood and surfaced by AI systems like ChatGPT, Claude, and Perplexity.',
  },
  {
    icon: Sparkle,
    title: 'Entity optimization',
    description:
      'Build strong entity associations and knowledge graph relationships for AI comprehension.',
  },
  {
    icon: Target,
    title: 'Intent matching',
    description:
      'Align content with AI interpretation of user queries and contextual understanding.',
  },
  {
    icon: Lightning,
    title: 'Structured data enhancement',
    description:
      'Implement schema markup that AI engines use to understand and categorize your content.',
  },
  {
    icon: CheckCircle,
    title: 'Authoritative signals',
    description:
      'Build E-E-A-T signals (Experience, Expertise, Authoritativeness, Trust) for AI credibility scoring.',
  },
  {
    icon: TrendUp,
    title: 'AI visibility tracking',
    description:
      'Monitor your brand presence across AI-generated responses and recommendations.',
  },
];

export const aiEngineServiceProcess = [
  {
    title: 'AI audit',
    description: 'Analyze how AI engines currently understand and reference your brand',
    deliverables: ['AI citation audit', 'Entity relationship mapping', 'Content structure analysis'],
  },
  {
    title: 'Strategy development',
    description: 'Create a roadmap for improving AI engine visibility',
    deliverables: ['AEO strategy document', 'Priority content targets', 'Implementation timeline'],
  },
  {
    title: 'Content optimization',
    description: 'Enhance content for AI understanding and citation',
    deliverables: ['Content restructuring', 'Schema implementation', 'Authority building'],
  },
  {
    title: 'Monitoring & refinement',
    description: 'Track AI visibility and refine strategy based on results',
    deliverables: ['Monthly AI visibility reports', 'Citation tracking', 'Strategy adjustments'],
  },
];

export const aiEngineServiceResults = [
  { metric: '285%', label: 'Increase in AI citations', icon: TrendUp },
  { metric: '4x', label: 'More AI-generated referrals', icon: Lightning },
  { metric: '94%', label: 'Accuracy of AI brand information', icon: CheckCircle },
  { metric: '6-9 mo', label: 'Time to significant measurable impact', icon: Target },
];

/** Dual lifecycle badges — Grow + Evolve stages */
export const aiEngineLifecycleStages = [
  {
    slug: 'grow',
    name: 'Grow',
    icon: TrendUp,
    accent: 'var(--category-green)',
  },
  {
    slug: 'evolve',
    name: 'Evolve',
    icon: Brain,
    accent: 'var(--category-indigo)',
  },
];

/** Trust signal */
export const aiEngineTrustSignal = {
  quote: 'Within 3 months our brand was being cited by ChatGPT and Perplexity for industry queries. That visibility is priceless.',
  author: 'Tom van der Berg',
  role: 'Founder, NomadTech',
};

/** Related solutions */
export const aiEngineRelatedSolutions: RelatedPageItem[] = [
  {
    title: 'AI integrations',
    description: 'Seamlessly connect leading AI tools to your WordPress stack with custom integrations.',
    href: '/solutions/ai/integrations',
    icon: Brain,
    accent: 'var(--category-violet)',
  },
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
];

/** Related services */
export const aiEngineRelatedServices: RelatedPageItem[] = [
  {
    title: 'AI Search & Visibility',
    description: 'Unified search visibility combining traditional SEO, analytics, and AI optimisation.',
    href: '/services/ai/search-visibility',
    icon: Eye,
    accent: 'var(--category-cyan)',
  },
  {
    title: 'Answer engine optimisation',
    description: 'Get cited by ChatGPT, Perplexity, and AI Overviews with structured content.',
    href: '/services/ai/answer-engine-optimisation',
    icon: Cpu,
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

/** LLM.txt content section */
export const llmTxtContent = {
  heading: 'LLM.txt: The standard for AI discoverability',
  description: 'LLM.txt is an emerging web standard that helps AI engines understand your site structure, brand voice, and key information. We implement and optimize this file to ensure AI systems get accurate, authoritative information about your brand.',
  benefits: [
    {
      title: 'Direct AI communication',
      description: 'Provide structured instructions to AI engines about how to represent your brand.',
    },
    {
      title: 'Control your narrative',
      description: 'Define which content is most important and how it should be contextualized.',
    },
    {
      title: 'Improve citation accuracy',
      description: 'Reduce AI hallucinations by providing clear, authoritative source material.',
    },
  ],
};

/** AI citation strategy section */
export const aiCitationStrategy = {
  heading: 'Building citation-worthy content',
  description: 'Getting cited by AI engines requires content that is authoritative, well-structured, and aligned with how AI systems evaluate trustworthiness.',
  strategies: [
    {
      title: 'E-E-A-T optimization',
      description: 'Strengthen Experience, Expertise, Authoritativeness, and Trust signals that AI engines use to score content quality.',
    },
    {
      title: 'Entity relationship building',
      description: 'Create strong connections between your brand and relevant topics, people, and concepts in knowledge graphs.',
    },
    {
      title: 'Structured markup',
      description: 'Implement comprehensive schema.org markup that AI engines use to understand content meaning and context.',
    },
    {
      title: 'Citation-friendly formatting',
      description: 'Format content in ways that AI engines can easily parse, extract, and attribute to your brand.',
    },
  ],
};