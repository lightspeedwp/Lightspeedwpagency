/**
 * Support & Maintenance Statistics Collection
 *
 * Real-world support metrics from Zendesk ticket system.
 * Data includes tickets resolved, daily/weekly/monthly request volumes, and response times.
 *
 * @see /src/app/data/stats/stats-registry.ts
 * @see /src/imports/pasted_text/new-stats-integration.md
 */

import type { StatCollection } from './types';

export const supportStatsCollection: StatCollection = {
  id: 'support-stats',
  title: 'Support & maintenance statistics',
  category: 'support',
  description: 'Real-time support metrics from Zendesk ticket system covering retainer clients.',
  icon: 'Headset',
  defaultLightColor: 'var(--category-green)',
  defaultDarkColor: 'var(--wp--preset--color--neon-lime)',
  useNeonComponent: true,
  stats: [
    {
      id: 'tickets-resolved',
      value: '10,575+',
      label: 'Tickets resolved',
      description: 'Support tickets successfully resolved since 2023.',
      icon: 'CheckCircle',
      category: 'support',
      darkColor: 'var(--wp--preset--color--neon-lime)',
      requiresDarkBg: true,
      tags: ['support', 'service', 'tickets'],
      lastUpdated: '2026-03-17',
      versionHistory: [
        {
          date: '2026-03-17',
          value: '10,575+',
          note: 'Current total within Zendesk retention window',
        },
        {
          date: '2026-01-01',
          value: '9,800',
          note: 'Start of year',
        },
        {
          date: '2025-01-01',
          value: '6,200',
          note: 'Previous year total',
        },
      ],
      footnote: {
        text: 'Within Zendesk\'s 37-month retention limit. Actual total since 2009 is significantly higher.',
        displayMode: 'tooltip',
      },
      trend: {
        value: '+775 this year',
        direction: 'up',
        sentiment: 'neutral',
      },
    },
    {
      id: 'avg-daily-requests',
      value: '13',
      label: 'Requests per day',
      description: 'Average daily support requests across all retainer clients.',
      icon: 'ChatCircle',
      category: 'support',
      darkColor: 'var(--wp--preset--color--neon-lime)',
      requiresDarkBg: true,
      tags: ['support', 'service'],
      footnote: {
        text: 'Average varies by season and client activity. Peak periods (campaign launches, site updates) can reach 20-30 daily requests.',
        displayMode: 'below',
      },
    },
    {
      id: 'avg-weekly-requests',
      value: '68',
      label: 'Requests per week',
      description: 'Typical weekly support volume across retainer clients.',
      icon: 'CalendarBlank',
      category: 'support',
      darkColor: 'var(--wp--preset--color--neon-lime)',
      requiresDarkBg: true,
      tags: ['support', 'service'],
    },
    {
      id: 'avg-monthly-requests',
      value: '290',
      label: 'Requests per month',
      description: 'Monthly support requests for all active retainers.',
      icon: 'CalendarCheck',
      category: 'support',
      darkColor: 'var(--wp--preset--color--neon-lime)',
      requiresDarkBg: true,
      tags: ['support', 'service'],
    },
    {
      id: 'response-time-urgent',
      value: '<4h',
      label: 'Urgent response time',
      description: 'Average response time for urgent support requests.',
      icon: 'Lightning',
      category: 'support',
      darkColor: 'var(--wp--preset--color--neon-lime)',
      requiresDarkBg: true,
      tags: ['support', 'sla', 'speed'],
      trend: {
        value: 'SLA: 24h',
        direction: 'neutral',
        sentiment: 'positive',
      },
      footnote: {
        text: 'Typical response time is under 4 hours for urgent requests. SLA guarantees 24h response for urgent items.',
        displayMode: 'tooltip',
      },
    },
    {
      id: 'first-response-rate',
      value: '94%',
      label: 'First response resolution',
      description: 'Tickets resolved on first response without back-and-forth.',
      icon: 'CheckSquare',
      category: 'support',
      darkColor: 'var(--wp--preset--color--neon-lime)',
      requiresDarkBg: true,
      tags: ['support', 'quality', 'service'],
      trend: {
        value: '+3% this quarter',
        direction: 'up',
        sentiment: 'positive',
      },
      footnote: {
        text: 'High first-response resolution rate indicates thorough understanding of client needs and efficient problem-solving.',
        displayMode: 'below',
      },
    },
  ],
};
