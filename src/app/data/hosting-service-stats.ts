/**
 * Hosting & Deployments Service Statistics
 *
 * Real statistics from LightSpeed WP Agency for hosting and deployment services.
 */

import {
  HardDrive,
  Users,
  Rocket,
  Clock,
} from '@phosphor-icons/react';

/** Real hosting statistics from LightSpeed WP Agency */
export const hostingServiceStats = [
  { 
    value: '250+', 
    label: 'Sites hosted', 
    icon: HardDrive,
    description: 'WordPress sites under active management'
  },
  { 
    value: '10k', 
    label: 'Peak concurrent sessions', 
    icon: Users,
    description: 'Maximum simultaneous users handled'
  },
  { 
    value: '<12', 
    label: 'Full deployments per year', 
    icon: Rocket,
    description: 'Major production deployments annually'
  },
  { 
    value: '4k+', 
    label: 'Hours invested since 2009', 
    icon: Clock,
    description: 'Total hosting management hours'
  },
];

/** Hosting capabilities */
export const hostingCapabilities = {
  title: 'Hosting & deployment expertise',
  description: 'We provide managed WordPress hosting with optimized server configurations, automated deployments, continuous monitoring, and 24/7 support to ensure your sites stay fast, secure, and online.',
  features: [
    'Managed WordPress hosting',
    'Automated deployment pipelines',
    'Load balancing & scaling',
    'CDN integration & optimization',
    'Database optimization',
    'Security hardening & monitoring',
    '24/7 uptime monitoring',
    'Automated backups & disaster recovery'
  ]
};