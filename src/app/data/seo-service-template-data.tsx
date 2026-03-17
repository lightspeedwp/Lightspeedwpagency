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
} from '@phosphor-icons/react';

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
  { metric: '150%', label: 'Average organic traffic increase' },
  { metric: '10x', label: 'First page rankings growth' },
  { metric: '85%', label: 'Click-through rate improvement' },
  { metric: '3-6 mo', label: 'Time to see results' },
];
