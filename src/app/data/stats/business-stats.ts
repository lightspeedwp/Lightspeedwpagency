/**
 * Business & SLA Statistics Collection
 *
 * Real-world business metrics including retainer clients, websites managed,
 * SLA response times, and client tenure.
 *
 * @see /src/app/data/stats/stats-registry.ts
 * @see /src/imports/pasted_text/new-stats-integration.md
 */

import type { StatCollection } from './types';

export const businessStatsCollection: StatCollection = {
  id: 'business-stats',
  title: 'Business & SLA statistics',
  category: 'business',
  description: 'Retainer client metrics and service level agreement performance.',
  icon: 'Handshake',
  defaultLightColor: 'var(--category-green)',
  defaultDarkColor: 'var(--category-green)',
  useNeonComponent: false, // Traditional stats grid for business metrics
  stats: [
    {
      id: 'retainer-clients',
      value: '20',
      label: 'Retainer clients',
      description: 'Long-term retainer partnerships.',
      icon: 'Handshake',
      category: 'business',
      lightColor: 'var(--category-green)',
      darkColor: 'var(--category-green)',
      requiresDarkBg: false,
      tags: ['business', 'clients', 'retainers'],
      lastUpdated: '2026-03-17',
      versionHistory: [
        {
          date: '2026-03-17',
          value: '20',
          note: 'Current retainer count',
        },
        {
          date: '2026-01-01',
          value: '19',
          note: 'Start of year',
        },
        {
          date: '2025-01-01',
          value: '18',
          note: 'Previous year',
        },
      ],
      trend: {
        value: '+1 this year',
        direction: 'up',
        sentiment: 'positive',
      },
      footnote: {
        text: 'Mix of enterprise publishers, tour operators, and e-commerce businesses.',
        displayMode: 'tooltip',
      },
    },
    {
      id: 'websites-managed',
      value: '~100',
      label: 'Websites managed',
      description: 'Total sites under retainer management.',
      icon: 'Buildings',
      category: 'business',
      lightColor: 'var(--category-green)',
      darkColor: 'var(--category-green)',
      requiresDarkBg: false,
      tags: ['business', 'management'],
      footnote: {
        text: 'Average of 5 sites per retainer client. Ranges from 1 (small business) to 30+ (enterprise publisher).',
        displayMode: 'tooltip',
      },
    },
    {
      id: 'urgent-response',
      value: '24h',
      label: 'Urgent response SLA',
      description: 'Guaranteed response time for urgent requests.',
      icon: 'Lightning',
      category: 'business',
      lightColor: 'var(--category-red)',
      darkColor: 'var(--category-red)',
      requiresDarkBg: false,
      tags: ['business', 'sla'],
      trend: {
        value: 'Typical: <4h',
        direction: 'neutral',
        sentiment: 'positive',
      },
      footnote: {
        text: 'SLA guarantees 24h response. Actual average is under 4 hours during business hours.',
        displayMode: 'below',
      },
    },
    {
      id: 'important-response',
      value: '48h',
      label: 'Important response SLA',
      description: 'Guaranteed response time for important requests.',
      icon: 'Clock',
      category: 'business',
      lightColor: 'var(--category-yellow)',
      darkColor: 'var(--category-yellow)',
      requiresDarkBg: false,
      tags: ['business', 'sla'],
      footnote: {
        text: 'Typical response within 24 hours. 48h SLA provides buffer for complex issues.',
        displayMode: 'tooltip',
      },
    },
    {
      id: 'normal-response',
      value: '72h',
      label: 'Normal response SLA',
      description: 'Guaranteed response time for normal requests.',
      icon: 'Timer',
      category: 'business',
      lightColor: 'var(--category-blue)',
      darkColor: 'var(--category-blue)',
      requiresDarkBg: false,
      tags: ['business', 'sla'],
    },
    {
      id: 'minor-response',
      value: '1 week',
      label: 'Minor task SLA',
      description: 'Response time for minor maintenance tasks.',
      icon: 'CalendarBlank',
      category: 'business',
      lightColor: 'var(--category-purple)',
      darkColor: 'var(--category-purple)',
      requiresDarkBg: false,
      tags: ['business', 'sla'],
      footnote: {
        text: 'Minor tasks (CSS tweaks, content updates, plugin updates) scheduled within retainer capacity.',
        displayMode: 'tooltip',
      },
    },
    {
      id: 'avg-client-tenure',
      value: '10+',
      label: 'Years client tenure',
      description: 'Average retainer client relationship duration.',
      icon: 'Medal',
      category: 'business',
      lightColor: 'var(--category-green)',
      darkColor: 'var(--category-green)',
      requiresDarkBg: false,
      tags: ['business', 'clients'],
      trend: {
        value: 'Long-term',
        direction: 'neutral',
        sentiment: 'positive',
      },
      footnote: {
        text: 'Several clients since 2009. Long tenure reflects consistent service quality and partnership approach.',
        displayMode: 'below',
      },
    },
    {
      id: 'sla-adherence',
      value: '98.5%',
      label: 'SLA adherence',
      description: 'Percentage of tickets meeting SLA commitments.',
      icon: 'CheckCircle',
      category: 'business',
      lightColor: 'var(--category-green)',
      darkColor: 'var(--category-green)',
      requiresDarkBg: false,
      tags: ['business', 'sla', 'quality'],
      lastUpdated: '2026-03-17',
      trend: {
        value: 'Industry leading',
        direction: 'neutral',
        sentiment: 'positive',
      },
      footnote: {
        text: 'Measured over past 12 months. Missed SLAs typically due to client delays or scope changes.',
        displayMode: 'tooltip',
      },
    },
  ],
};
