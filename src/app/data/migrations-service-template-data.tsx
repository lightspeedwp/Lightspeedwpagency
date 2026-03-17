/**
 * Migrations Service Template Data
 *
 * Content data for MigrationsServiceTemplate.
 * All page content lives here — template handles layout only.
 *
 * @see /src/app/components/templates/MigrationsServiceTemplate.tsx
 */

import {
  ArrowsClockwise,
  Database,
  CloudArrowUp,
  CheckCircle,
  Shield,
  Lightning,
} from '@phosphor-icons/react';

export const migrationsServiceBenefits = [
  {
    icon: ArrowsClockwise,
    title: 'Platform migrations',
    description:
      'Seamlessly migrate from any platform to WordPress, WooCommerce, or custom solutions.',
  },
  {
    icon: Database,
    title: 'Complete data transfer',
    description:
      'Migrate all content, media, databases, and settings with zero data loss.',
  },
  {
    icon: CloudArrowUp,
    title: 'Hosting migration',
    description:
      'Move to better hosting with minimal downtime and improved performance.',
  },
  {
    icon: CheckCircle,
    title: 'Quality assurance',
    description:
      'Comprehensive testing ensures everything works perfectly post-migration.',
  },
  {
    icon: Shield,
    title: 'Security first',
    description:
      'Secure transfer protocols and backup systems protect your data throughout.',
  },
  {
    icon: Lightning,
    title: 'Minimal downtime',
    description:
      'Strategic planning keeps your site running during the migration process.',
  },
];

export const migrationsServiceTypes = [
  {
    type: 'Platform migration',
    examples: [
      'Wix \u2192 WordPress',
      'Squarespace \u2192 WooCommerce',
      'Shopify \u2192 WooCommerce',
      'Custom CMS \u2192 WordPress',
    ],
  },
  {
    type: 'Hosting migration',
    examples: [
      'Shared \u2192 VPS',
      'Any Host \u2192 WP Engine',
      'Any Host \u2192 Kinsta',
      'On-Premise \u2192 Cloud',
    ],
  },
  {
    type: 'Version upgrade',
    examples: [
      'WordPress major upgrade',
      'PHP version upgrade',
      'MySQL \u2192 MariaDB',
      'HTTP \u2192 HTTPS',
    ],
  },
];

export const migrationsServiceProcess = [
  { id: 'audit', step: 'Pre-migration audit', description: 'Complete site analysis and backup' },
  { id: 'plan', step: 'Migration plan', description: 'Detailed roadmap with timeline' },
  { id: 'staging', step: 'Staging migration', description: 'Test migration on staging server' },
  { id: 'qa', step: 'QA & testing', description: 'Comprehensive testing and fixes' },
  { id: 'live', step: 'Live migration', description: 'Production deployment with monitoring' },
  { id: 'support', step: 'Post-migration support', description: '30 days of dedicated support' },
];

export const migrationsServiceResults = [
  { id: 'metric-1', value: '99.9%', label: 'Data transfer success rate' },
  { id: 'metric-2', value: '<2hr', label: 'Average downtime' },
  { id: 'metric-3', value: '100%', label: 'Sites tested pre-launch' },
  { id: 'metric-4', value: '30 days', label: 'Post-migration support' },
];
