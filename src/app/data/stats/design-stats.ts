/**
 * Design Systems Statistics Collection
 *
 * Real-world design system metrics including systems built, components created,
 * design tokens, Figma prototypes, and total investment hours.
 *
 * @see /src/app/data/stats/stats-registry.ts
 * @see /src/imports/pasted_text/new-stats-integration.md
 */

import type { StatCollection } from './types';

export const designStatsCollection: StatCollection = {
  id: 'design-stats',
  title: 'Design systems statistics',
  category: 'design',
  description: 'Comprehensive design system metrics from LSX Design and client projects.',
  icon: 'Palette',
  defaultLightColor: 'var(--category-pink)',
  defaultDarkColor: 'var(--wp--preset--color--neon-pink)',
  useNeonComponent: true,
  stats: [
    {
      id: 'design-systems',
      value: '10+',
      label: 'Design systems',
      description: 'Custom design systems (LSX, Tour Operator, Nova, etc.).',
      icon: 'Palette',
      category: 'design',
      darkColor: 'var(--wp--preset--color--neon-pink)',
      requiresDarkBg: true,
      tags: ['design', 'systems'],
      lastUpdated: '2026-03-17',
      versionHistory: [
        {
          date: '2026-03-17',
          value: '10+',
          note: 'Current total',
        },
        {
          date: '2025-01-01',
          value: '8',
          note: 'Previous year',
        },
      ],
      footnote: {
        text: 'Each system includes full component libraries, design tokens, documentation, and Figma prototypes.',
        displayMode: 'tooltip',
      },
    },
    {
      id: 'lsx-components',
      value: '112',
      label: 'LSX components',
      description: 'Reusable components in the LSX design system.',
      icon: 'Cube',
      category: 'design',
      darkColor: 'var(--wp--preset--color--neon-pink)',
      requiresDarkBg: true,
      tags: ['design', 'components', 'systems'],
      lastUpdated: '2026-03-17',
      versionHistory: [
        {
          date: '2026-03-17',
          value: '112',
          note: 'Current total',
        },
        {
          date: '2026-01-01',
          value: '98',
          note: 'Start of year',
        },
        {
          date: '2025-01-01',
          value: '75',
          note: 'Previous year',
        },
      ],
      trend: {
        value: '+14 this year',
        direction: 'up',
        sentiment: 'positive',
      },
      footnote: {
        text: 'Includes blocks, patterns, templates, and utility components. All fully BEM-compliant and WordPress-compatible.',
        displayMode: 'below',
      },
    },
    {
      id: 'design-tokens',
      value: '230',
      label: 'Design tokens',
      description: 'CSS variables for colors, spacing, typography, etc.',
      icon: 'Swatches',
      category: 'design',
      darkColor: 'var(--wp--preset--color--neon-pink)',
      requiresDarkBg: true,
      tags: ['design', 'tokens', 'systems'],
      lastUpdated: '2026-03-17',
      footnote: {
        text: 'Includes color palettes, spacing scales, typography systems, border radii, shadows, and animation timings.',
        displayMode: 'tooltip',
      },
    },
    {
      id: 'figma-prototypes',
      value: '10',
      label: 'Full-site prototypes',
      description: 'Complete full-site Figma prototypes.',
      icon: 'FigmaLogo',
      category: 'design',
      darkColor: 'var(--wp--preset--color--neon-pink)',
      requiresDarkBg: true,
      tags: ['design', 'prototyping'],
      footnote: {
        text: 'Full-fidelity prototypes with complete page layouts, component libraries, and interactive flows.',
        displayMode: 'tooltip',
      },
    },
    {
      id: 'figma-make-prototypes',
      value: '25',
      label: 'Figma Make prototypes',
      description: 'Interactive prototypes built in Figma Make.',
      icon: 'Lightning',
      category: 'design',
      darkColor: 'var(--wp--preset--color--neon-pink)',
      requiresDarkBg: true,
      tags: ['design', 'prototyping', 'ai'],
      trend: {
        value: '+12 this quarter',
        direction: 'up',
        sentiment: 'positive',
      },
      footnote: {
        text: 'Figma Make enables rapid AI-powered prototyping, reducing design-to-code time by 60%.',
        displayMode: 'below',
      },
    },
    {
      id: 'design-system-hours',
      value: '2k+',
      label: 'Design system hours',
      description: 'Total hours invested in design system development.',
      icon: 'Clock',
      category: 'design',
      darkColor: 'var(--wp--preset--color--neon-pink)',
      requiresDarkBg: true,
      tags: ['design', 'investment'],
      footnote: {
        text: 'Includes research, design, documentation, component development, and ongoing maintenance.',
        displayMode: 'tooltip',
      },
    },
    {
      id: 'accessibility-compliance',
      value: 'WCAG 2.1 AA',
      label: 'Accessibility standard',
      description: 'All design systems meet WCAG 2.1 AA compliance.',
      icon: 'ShieldCheck',
      category: 'design',
      darkColor: 'var(--wp--preset--color--neon-pink)',
      requiresDarkBg: true,
      tags: ['design', 'quality', 'enterprise'],
      trend: {
        value: '100% compliant',
        direction: 'neutral',
        sentiment: 'positive',
      },
      footnote: {
        text: 'All components tested for keyboard navigation, screen reader compatibility, color contrast, and focus management.',
        displayMode: 'below',
      },
    },
  ],
};
