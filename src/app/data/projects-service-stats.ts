/**
 * Projects & Builds Service Statistics
 *
 * Real statistics from LightSpeed WP Agency for completed projects and active builds.
 */

import {
  Briefcase,
  Globe,
  Hammer,
} from '@phosphor-icons/react';

/** Real projects statistics from LightSpeed WP Agency */
export const projectsServiceStats = [
  { 
    value: '1,500+', 
    label: 'Projects completed', 
    icon: Briefcase,
    description: 'Total projects delivered since 2009'
  },
  { 
    value: '300+', 
    label: 'Websites built', 
    icon: Globe,
    description: 'Custom WordPress sites launched'
  },
  { 
    value: '12', 
    label: 'Active builds today', 
    icon: Hammer,
    description: 'Projects currently in development'
  },
];

/** Projects overview */
export const projectsOverview = {
  title: 'Projects & builds expertise',
  description: 'From small business websites to enterprise platforms, we have delivered over 1,500 projects across industries including tourism, e-commerce, publishing, and SaaS. Our proven process ensures on-time delivery with exceptional quality.',
  capabilities: [
    'Custom WordPress themes',
    'WooCommerce stores',
    'Membership sites',
    'Multi-site networks',
    'API integrations',
    'Headless WordPress',
    'Progressive web apps',
    'Enterprise platforms'
  ]
};