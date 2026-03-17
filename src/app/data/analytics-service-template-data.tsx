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
} from '@phosphor-icons/react';

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
  { metric: '200%', label: 'Increase in actionable insights' },
  { metric: '45%', label: 'Improvement in conversion tracking' },
  { metric: '10x', label: 'Faster reporting with dashboards' },
  { metric: '30%', label: 'Reduction in data silos' },
];
