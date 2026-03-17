/**
 * AI Search Service Template Data
 *
 * Content data for AISearchServiceTemplate.
 * All page content lives here — template handles layout only.
 *
 * @see /src/app/components/templates/AISearchServiceTemplate.tsx
 */

import {
  MagnifyingGlass,
  ChartBar,
  Brain,
  ChatCentered,
} from '@phosphor-icons/react';

/** Service pillars — the 4 merged sub-services */
export const aiSearchServicePillars = [
  {
    id: 'seo',
    icon: MagnifyingGlass,
    title: 'Technical SEO',
    description:
      'Comprehensive technical SEO audits, keyword research, on-page optimisation, and ongoing monitoring to dominate organic search results.',
    features: [
      'Technical SEO audit & remediation',
      'Keyword research & content gaps',
      'On-page & schema markup',
      'Link authority building',
      'Monthly ranking reports',
    ],
  },
  {
    id: 'analytics',
    icon: ChartBar,
    title: 'Analytics & reporting',
    description:
      'Data-driven insights with custom dashboards, conversion tracking, and actionable reporting that connects marketing spend to revenue.',
    features: [
      'GA4 & tag management setup',
      'Custom KPI dashboards',
      'Conversion funnel analysis',
      'Attribution modelling',
      'Monthly performance reports',
    ],
  },
  {
    id: 'ai-engine',
    icon: Brain,
    title: 'AI engine optimisation',
    description:
      'Fine-tune, accelerate, and scale AI models on your WordPress stack \u2014 from inference speed to cost efficiency. Cut AI costs by 60%.',
    features: [
      'Model benchmarking (6+ providers)',
      'Prompt engineering & tuning',
      'Semantic inference caching',
      'Cost & rate-limit management',
      'Quality regression testing',
    ],
  },
  {
    id: 'answer-engine',
    icon: ChatCentered,
    title: 'Answer engine optimisation',
    description:
      'Get cited by ChatGPT, Perplexity, and AI Overviews. Optimise your content to be the answer AI engines serve.',
    features: [
      'AI citation audit',
      'Entity authority building',
      'AI-friendly content formatting',
      'Citation tracking (5+ engines)',
      'Monthly share-of-voice reports',
    ],
  },
];

/** Process steps */
export const aiSearchServiceProcessSteps = [
  {
    number: '01',
    title: 'Audit',
    description: 'Full-stack visibility audit across search engines and AI platforms.',
  },
  {
    number: '02',
    title: 'Strategy',
    description: 'Custom roadmap combining SEO, AEO, and AI optimisation priorities.',
  },
  {
    number: '03',
    title: 'Implement',
    description: 'Technical fixes, content restructuring, schema, and AI model tuning.',
  },
  {
    number: '04',
    title: 'Measure',
    description: 'Ongoing tracking, citation monitoring, and monthly performance reports.',
  },
];