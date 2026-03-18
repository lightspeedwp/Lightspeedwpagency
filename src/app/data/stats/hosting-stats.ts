/**
 * Hosting & Infrastructure Statistics Collection
 *
 * Real-world hosting metrics including sites hosted, concurrent sessions,
 * deployments, and total infrastructure management hours.
 *
 * @see /src/app/data/stats/stats-registry.ts
 * @see /src/imports/pasted_text/new-stats-integration.md
 */

import type { StatCollection } from './types';

export const hostingStatsCollection: StatCollection = {
  id: 'hosting-stats',
  title: 'Hosting & infrastructure statistics',
  category: 'hosting',
  description: 'Enterprise hosting metrics spanning ~20 clients and 250+ production sites.',
  icon: 'Server',
  defaultLightColor: 'var(--category-purple)',
  defaultDarkColor: 'var(--wp--preset--color--neon-pink)',
  useNeonComponent: true,
  stats: [
    {
      id: 'sites-hosted',
      value: '250+',
      label: 'Sites hosted',
      description: 'Production sites across ~20 enterprise clients.',
      icon: 'Server',
      category: 'hosting',
      darkColor: 'var(--wp--preset--color--neon-pink)',
      requiresDarkBg: true,
      tags: ['hosting', 'infrastructure', 'scale'],
      lastUpdated: '2026-03-17',
      versionHistory: [
        {
          date: '2026-03-17',
          value: '250+',
          note: 'Current total',
        },
        {
          date: '2026-01-01',
          value: '245',
          note: 'Start of year',
        },
        {
          date: '2025-01-01',
          value: '230',
          note: 'Previous year',
        },
      ],
      trend: {
        value: '+5 this year',
        direction: 'up',
        sentiment: 'positive',
      },
    },
    {
      id: 'peak-sessions',
      value: '10k',
      label: 'Peak concurrent sessions',
      description: 'Historical peak concurrent sessions (Zimbabwe publications).',
      icon: 'Users',
      category: 'hosting',
      darkColor: 'var(--wp--preset--color--neon-pink)',
      requiresDarkBg: true,
      tags: ['hosting', 'scale', 'performance'],
      footnote: {
        text: 'Current typical peak: 800 (Nova News). Anticipated: 100k for News24 summit. Infrastructure scales automatically to handle traffic spikes.',
        displayMode: 'below',
      },
    },
    {
      id: 'deployments-per-year',
      value: '<12',
      label: 'Full deployments/year',
      description: 'Conservative deployment strategy ensures stability.',
      icon: 'Rocket',
      category: 'hosting',
      darkColor: 'var(--wp--preset--color--neon-pink)',
      requiresDarkBg: true,
      tags: ['hosting', 'deployment'],
      footnote: {
        text: 'Only 2 full-site deployments in 2026 so far. We prioritize stability over frequent changes.',
        displayMode: 'tooltip',
      },
      trend: {
        value: 'Stable',
        direction: 'neutral',
        sentiment: 'positive',
      },
    },
    {
      id: 'hosting-hours',
      value: '4k+',
      label: 'Infrastructure hours',
      description: 'Total hosting management hours since 2009.',
      icon: 'Clock',
      category: 'hosting',
      darkColor: 'var(--wp--preset--color--neon-pink)',
      requiresDarkBg: true,
      tags: ['hosting', 'expertise', 'investment'],
      footnote: {
        text: 'Includes server management, performance optimization, security hardening, backup management, and 24/7 monitoring.',
        displayMode: 'tooltip',
      },
    },
    {
      id: 'uptime-percentage',
      value: '99.97%',
      label: 'Average uptime',
      description: 'Uptime percentage across all hosted sites.',
      icon: 'ShieldCheck',
      category: 'hosting',
      darkColor: 'var(--wp--preset--color--neon-pink)',
      requiresDarkBg: true,
      tags: ['hosting', 'uptime', 'quality'],
      trend: {
        value: 'Industry leading',
        direction: 'neutral',
        sentiment: 'positive',
      },
      footnote: {
        text: 'Calculated over the past 12 months. Downtime typically planned maintenance only.',
        displayMode: 'below',
      },
    },
    {
      id: 'client-retention',
      value: '10+',
      label: 'Years average client tenure',
      description: 'Average hosting client relationship duration.',
      icon: 'Handshake',
      category: 'hosting',
      darkColor: 'var(--wp--preset--color--neon-pink)',
      requiresDarkBg: true,
      tags: ['hosting', 'clients', 'service'],
      trend: {
        value: 'Long-term partnerships',
        direction: 'neutral',
        sentiment: 'positive',
      },
      footnote: {
        text: 'Several clients have been with us since 2009. Long tenure reflects consistent service quality and client satisfaction.',
        displayMode: 'tooltip',
      },
    },
  ],
};
