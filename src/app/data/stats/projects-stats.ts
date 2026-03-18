/**
 * Projects & Builds Statistics Collection
 *
 * Real-world project metrics from Xero/Harvest project management system.
 * Data includes completed projects, websites built, and active builds.
 *
 * @see /src/app/data/stats/stats-registry.ts
 * @see /src/imports/pasted_text/new-stats-integration.md
 */

import type { StatCollection } from './types';

export const projectsStatsCollection: StatCollection = {
  id: 'projects-stats',
  title: 'Projects & builds statistics',
  category: 'projects',
  description: 'Project completion metrics from Xero/Harvest since September 2013.',
  icon: 'Hammer',
  defaultLightColor: 'var(--category-yellow)',
  defaultDarkColor: 'var(--wp--preset--color--neon-yellow)',
  useNeonComponent: true,
  stats: [
    {
      id: 'projects-completed',
      value: '1,500+',
      label: 'Projects completed',
      description: 'Total projects delivered since September 2013.',
      icon: 'CheckSquare',
      category: 'projects',
      darkColor: 'var(--wp--preset--color--neon-yellow)',
      requiresDarkBg: true,
      tags: ['projects', 'scale'],
      lastUpdated: '2026-03-17',
      versionHistory: [
        {
          date: '2026-03-17',
          value: '1,500+',
          note: 'Current total from Xero/Harvest',
        },
        {
          date: '2026-01-01',
          value: '1,450',
          note: 'Start of year',
        },
        {
          date: '2025-01-01',
          value: '1,320',
          note: 'Previous year total',
        },
      ],
      footnote: {
        text: 'Data from Xero/Harvest project management. Includes client projects, internal work, and open-source contributions.',
        displayMode: 'tooltip',
      },
      trend: {
        value: '+50 this year',
        direction: 'up',
        sentiment: 'positive',
      },
    },
    {
      id: 'websites-built',
      value: '300+',
      label: 'Websites built',
      description: 'New builds and complete rebuilds.',
      icon: 'Globe',
      category: 'projects',
      darkColor: 'var(--wp--preset--color--neon-yellow)',
      requiresDarkBg: true,
      tags: ['projects', 'websites'],
      lastUpdated: '2026-03-17',
      footnote: {
        text: 'Subset of total projects. Includes full website builds, major redesigns, and platform migrations.',
        displayMode: 'tooltip',
      },
    },
    {
      id: 'active-builds',
      value: '12',
      label: 'Active builds',
      description: 'Current active build projects in progress.',
      icon: 'Hammer',
      category: 'projects',
      darkColor: 'var(--wp--preset--color--neon-yellow)',
      requiresDarkBg: true,
      tags: ['projects', 'active'],
      lastUpdated: '2026-03-17',
      versionHistory: [
        {
          date: '2026-03-17',
          value: '12',
          note: 'Current active projects',
        },
        {
          date: '2026-03-01',
          value: '10',
          note: 'Start of month',
        },
        {
          date: '2026-02-01',
          value: '8',
          note: 'Previous month',
        },
      ],
      trend: {
        value: '+2 this month',
        direction: 'up',
        sentiment: 'neutral',
      },
      footnote: {
        text: 'Active builds in various stages (discovery, design, development, testing, launch).',
        displayMode: 'below',
      },
    },
    {
      id: 'avg-project-duration',
      value: '6-8',
      label: 'Weeks per project',
      description: 'Average project duration from kickoff to launch.',
      icon: 'Clock',
      category: 'projects',
      darkColor: 'var(--wp--preset--color--neon-yellow)',
      requiresDarkBg: true,
      tags: ['projects', 'speed'],
      trend: {
        value: '-20% with AI',
        direction: 'down',
        sentiment: 'positive',
      },
      footnote: {
        text: 'AI-accelerated workflows reduce typical project timelines by 20-30% compared to traditional methods.',
        displayMode: 'tooltip',
      },
    },
    {
      id: 'client-satisfaction',
      value: '4.8/5',
      label: 'Client satisfaction',
      description: 'Average client satisfaction score.',
      icon: 'Star',
      category: 'projects',
      darkColor: 'var(--wp--preset--color--neon-yellow)',
      requiresDarkBg: true,
      tags: ['projects', 'quality', 'service'],
      lastUpdated: '2026-03-17',
      trend: {
        value: 'Consistently high',
        direction: 'neutral',
        sentiment: 'positive',
      },
      footnote: {
        text: 'Based on post-project surveys and client feedback. 92% of clients recommend our services.',
        displayMode: 'below',
      },
    },
  ],
};
