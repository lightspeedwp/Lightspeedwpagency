/**
 * SLA & Retainer Service Statistics
 *
 * Real statistics and response time commitments from LightSpeed WP Agency.
 */

import {
  Lightning,
  Warning,
  Info,
  CheckCircle,
  Users,
  Globe,
} from '@phosphor-icons/react';

/** SLA response times by priority level */
export const slaResponseTimes = [
  { 
    priority: 'Urgent',
    value: '24h', 
    label: 'Urgent priority response', 
    icon: Lightning,
    description: 'Critical issues affecting site functionality'
  },
  { 
    priority: 'Important',
    value: '48h', 
    label: 'Important priority response', 
    icon: Warning,
    description: 'Significant issues requiring prompt attention'
  },
  { 
    priority: 'Normal',
    value: '72h', 
    label: 'Normal priority response', 
    icon: Info,
    description: 'Standard support requests and updates'
  },
  { 
    priority: 'Minor',
    value: '1 week', 
    label: 'Minor priority response', 
    icon: CheckCircle,
    description: 'Low-priority enhancements and tweaks'
  },
];

/** Retainer client statistics */
export const retainerClientStats = [
  { 
    value: '20', 
    label: 'Retainer clients', 
    icon: Users,
    description: 'Active monthly retainer agreements'
  },
  { 
    value: '~100', 
    label: 'Sites covered', 
    icon: Globe,
    description: 'Total sites under retainer management'
  },
];

/** SLA commitment details */
export const slaCommitment = {
  title: 'SLA & retainer commitments',
  description: 'Our service level agreements guarantee response times based on issue priority. We serve 20 retainer clients covering approximately 100 sites, with flexible monthly packages ranging from essential maintenance to enterprise-level support with dedicated resources.',
  benefits: [
    'Guaranteed response times',
    'Predictable monthly costs',
    'Priority support queue',
    'Proactive maintenance',
    'Regular performance reviews',
    'Dedicated account manager',
    'Rollover unused hours (select plans)',
    'Custom SLAs for enterprise clients'
  ]
};

/** Priority level definitions */
export const priorityLevelDefinitions = [
  {
    level: 'Urgent',
    examples: [
      'Site completely down',
      'Security breach detected',
      'Payment processing failure',
      'Data loss or corruption'
    ]
  },
  {
    level: 'Important',
    examples: [
      'Significant functionality broken',
      'Performance severely degraded',
      'Error affecting multiple users',
      'SEO-critical issue'
    ]
  },
  {
    level: 'Normal',
    examples: [
      'Minor bug fixes',
      'Content updates',
      'Plugin updates',
      'Design tweaks'
    ]
  },
  {
    level: 'Minor',
    examples: [
      'Cosmetic improvements',
      'Feature requests',
      'Documentation updates',
      'Non-urgent optimizations'
    ]
  }
];
