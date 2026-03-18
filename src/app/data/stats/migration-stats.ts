/**
 * Migration Statistics Collection
 *
 * Real-world migration metrics from 15+ years of WordPress migrations.
 * Data includes post migrations, site migrations, migration types, and data integrity.
 *
 * @see /src/app/data/stats/stats-registry.ts
 * @see /src/imports/pasted_text/new-stats-integration.md
 */

import type { StatCollection } from './types';

export const migrationStatsCollection: StatCollection = {
  id: 'migration-stats',
  title: 'Migration statistics',
  category: 'migration',
  description: 'Enterprise WordPress migration metrics from custom CMS, Drupal, Joomla, TYPO3, and more.',
  icon: 'Database',
  defaultLightColor: 'var(--category-blue)',
  defaultDarkColor: 'var(--wp--preset--color--neon-cyan)',
  useNeonComponent: true,
  stats: [
    {
      id: 'posts-migrated',
      value: '220k+',
      label: 'Posts migrated',
      description: 'Successfully migrated across 250+ client sites including 120k from Novus Media and 100k from Alpha Media Holdings.',
      icon: 'Database',
      category: 'migration',
      darkColor: 'var(--wp--preset--color--neon-cyan)',
      requiresDarkBg: true,
      tags: ['migration', 'content', 'scale'],
      lastUpdated: '2026-03-17',
      versionHistory: [
        {
          date: '2026-03-17',
          value: '220k+',
          note: 'Updated with Alpha Media Holdings migration',
        },
        {
          date: '2025-11-10',
          value: '120k+',
          note: 'Novus Media migration completed',
        },
        {
          date: '2025-06-15',
          value: '80k+',
          note: 'Mid-year total',
        },
      ],
      footnote: {
        text: 'Combined total across all client migrations since 2009. Includes posts, pages, custom post types, and all associated metadata.',
        displayMode: 'below',
      },
      trend: {
        value: '+100k this year',
        direction: 'up',
        sentiment: 'positive',
      },
    },
    {
      id: 'sites-migrated',
      value: '250+',
      label: 'Sites migrated',
      description: 'Production sites successfully migrated and now hosted on LightSpeed infrastructure.',
      icon: 'Globe',
      category: 'migration',
      darkColor: 'var(--wp--preset--color--neon-cyan)',
      requiresDarkBg: true,
      tags: ['migration', 'hosting', 'scale'],
      lastUpdated: '2026-03-17',
      versionHistory: [
        {
          date: '2026-03-17',
          value: '250+',
          note: 'Current total',
        },
        {
          date: '2026-01-01',
          value: '235',
          note: 'Start of year',
        },
        {
          date: '2025-01-01',
          value: '210',
          note: 'Previous year total',
        },
      ],
      trend: {
        value: '+15 this year',
        direction: 'up',
        sentiment: 'positive',
      },
      footnote: {
        text: 'Spread across ~20 enterprise clients. All sites remain actively hosted and maintained.',
        displayMode: 'tooltip',
      },
    },
    {
      id: 'migration-types',
      value: '6+',
      label: 'Migration types',
      description: 'Custom CMS → WP, Drupal → WP, Joomla → WP, TYPO3 → WP, XML dump → WP, SQL dump → WP.',
      icon: 'ArrowsClockwise',
      category: 'migration',
      darkColor: 'var(--wp--preset--color--neon-cyan)',
      requiresDarkBg: true,
      tags: ['migration', 'expertise'],
      footnote: {
        text: 'We specialize in complex migrations from legacy systems, preserving all metadata, taxonomies, and custom fields.',
        displayMode: 'tooltip',
      },
    },
    {
      id: 'zero-data-loss',
      value: '100%',
      label: 'Data integrity',
      description: 'Zero metadata loss across all enterprise migrations.',
      icon: 'ShieldCheck',
      category: 'migration',
      darkColor: 'var(--wp--preset--color--neon-cyan)',
      requiresDarkBg: true,
      tags: ['migration', 'quality', 'enterprise', 'data-integrity'],
      trend: {
        value: 'Perfect record',
        direction: 'neutral',
        sentiment: 'positive',
      },
      footnote: {
        text: '100% data integrity maintained through automated validation, manual QA, and comprehensive pre-migration audits.',
        displayMode: 'below',
      },
    },
    {
      id: 'migration-speed',
      value: '<2 weeks',
      label: 'Average migration timeline',
      description: 'From discovery to production launch for typical enterprise site.',
      icon: 'Clock',
      category: 'migration',
      darkColor: 'var(--wp--preset--color--neon-cyan)',
      requiresDarkBg: true,
      tags: ['migration', 'speed'],
      trend: {
        value: '-30% faster',
        direction: 'down',
        sentiment: 'positive',
      },
      footnote: {
        text: 'Timeline varies based on content volume, custom requirements, and client preparation. AI-assisted migrations can reduce timelines by 30-50%.',
        displayMode: 'tooltip',
      },
    },
  ],
};
