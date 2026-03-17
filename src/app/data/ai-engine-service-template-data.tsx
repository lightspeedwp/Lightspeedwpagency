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
} from '@phosphor-icons/react';

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
  { metric: '250%', label: 'Increase in AI citations' },
  { metric: '3x', label: 'More AI-generated referrals' },
  { metric: '90%', label: 'Accuracy of AI brand info' },
  { metric: '6-9 mo', label: 'Time to significant impact' },
];
