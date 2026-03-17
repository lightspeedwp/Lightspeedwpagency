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
} from '@phosphor-icons/react';

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
  { metric: '400%', label: 'Increase in featured snippets' },
  { metric: '3x', label: 'More voice search visibility' },
  { metric: '85%', label: 'Answer accuracy rate' },
  { metric: '2-4 mo', label: 'Time to first results' },
];
