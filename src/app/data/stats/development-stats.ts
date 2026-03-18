/**
 * Development Statistics Collection
 *
 * Real-world development metrics including custom plugins, themes,
 * payment gateways, API integrations, and open-source contributions.
 *
 * @see /src/app/data/stats/stats-registry.ts
 * @see /src/imports/pasted_text/new-stats-integration.md
 */

import type { StatCollection } from './types';

export const developmentStatsCollection: StatCollection = {
  id: 'development-stats',
  title: 'Development statistics',
  category: 'development',
  description: 'WordPress development metrics including custom work and open-source contributions.',
  icon: 'Code',
  defaultLightColor: 'var(--category-blue)',
  defaultDarkColor: 'var(--wp--preset--color--neon-cyan)',
  useNeonComponent: true,
  stats: [
    {
      id: 'payment-gateways',
      value: '5',
      label: 'Payment gateway plugins',
      description: 'Custom payment integrations (Peach, PayFast, PayStack, etc.).',
      icon: 'CreditCard',
      category: 'development',
      darkColor: 'var(--wp--preset--color--neon-cyan)',
      requiresDarkBg: true,
      tags: ['development', 'payments', 'integrations'],
      footnote: {
        text: 'Includes Peach Payments, PayFast for Give, PayStack, and two proprietary gateway integrations for enterprise clients.',
        displayMode: 'tooltip',
      },
    },
    {
      id: 'api-integrations',
      value: '50+',
      label: 'API integrations',
      description: 'Custom API integration plugins and middleware.',
      icon: 'Plugs',
      category: 'development',
      darkColor: 'var(--wp--preset--color--neon-cyan)',
      requiresDarkBg: true,
      tags: ['development', 'integrations'],
      lastUpdated: '2026-03-17',
      versionHistory: [
        {
          date: '2026-03-17',
          value: '50+',
          note: 'Current total',
        },
        {
          date: '2025-01-01',
          value: '42',
          note: 'Previous year',
        },
      ],
      footnote: {
        text: 'Includes CRM integrations, marketing automation, booking systems, analytics platforms, and custom business logic.',
        displayMode: 'below',
      },
    },
    {
      id: 'custom-plugins',
      value: '150+',
      label: 'Custom plugins',
      description: 'Bespoke WordPress plugins for client projects.',
      icon: 'Plugin',
      category: 'development',
      darkColor: 'var(--wp--preset--color--neon-cyan)',
      requiresDarkBg: true,
      tags: ['development', 'plugins'],
      lastUpdated: '2026-03-17',
      trend: {
        value: '+12 this year',
        direction: 'up',
        sentiment: 'neutral',
      },
      footnote: {
        text: 'Custom plugins range from simple functionality extensions to complex business logic systems.',
        displayMode: 'tooltip',
      },
    },
    {
      id: 'custom-themes',
      value: '300+',
      label: 'Custom themes',
      description: 'WordPress themes built from scratch for clients.',
      icon: 'PaintBrush',
      category: 'development',
      darkColor: 'var(--wp--preset--color--neon-cyan)',
      requiresDarkBg: true,
      tags: ['development', 'themes'],
      lastUpdated: '2026-03-17',
      footnote: {
        text: 'Includes classic themes, block themes (FSE), and hybrid themes. All follow WordPress coding standards.',
        displayMode: 'tooltip',
      },
    },
    {
      id: 'open-source-themes',
      value: '10+',
      label: 'Open-source themes',
      description: 'WordPress themes released to the community.',
      icon: 'GitBranch',
      category: 'development',
      darkColor: 'var(--wp--preset--color--neon-cyan)',
      requiresDarkBg: true,
      tags: ['development', 'open-source', 'themes'],
      footnote: {
        text: 'Available on WordPress.org theme directory. Total downloads exceed 50k.',
        displayMode: 'tooltip',
      },
    },
    {
      id: 'open-source-plugins',
      value: '30+',
      label: 'Open-source plugins',
      description: 'WordPress plugins released to the community.',
      icon: 'Code',
      category: 'development',
      darkColor: 'var(--wp--preset--color--neon-cyan)',
      requiresDarkBg: true,
      tags: ['development', 'open-source', 'plugins'],
      footnote: {
        text: 'Available on WordPress.org plugin directory. Combined active installations exceed 100k.',
        displayMode: 'below',
      },
    },
    {
      id: 'github-contributions',
      value: '2.5k+',
      label: 'GitHub commits',
      description: 'Total commits across all repositories.',
      icon: 'GitBranch',
      category: 'development',
      darkColor: 'var(--wp--preset--color--neon-cyan)',
      requiresDarkBg: true,
      tags: ['development', 'open-source'],
      lastUpdated: '2026-03-17',
      trend: {
        value: '+350 this year',
        direction: 'up',
        sentiment: 'positive',
      },
      footnote: {
        text: 'Includes client projects, open-source contributions, and internal tooling development.',
        displayMode: 'tooltip',
      },
    },
    {
      id: 'code-review-hours',
      value: '800+',
      label: 'Code review hours',
      description: 'Hours spent on code review and quality assurance.',
      icon: 'CheckCircle',
      category: 'development',
      darkColor: 'var(--wp--preset--color--neon-cyan)',
      requiresDarkBg: true,
      tags: ['development', 'quality'],
      footnote: {
        text: 'All code undergoes peer review before deployment. Ensures quality, security, and WordPress standards compliance.',
        displayMode: 'below',
      },
    },
  ],
};
