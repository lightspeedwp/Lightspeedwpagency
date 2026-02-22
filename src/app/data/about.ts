/**
 * About Data
 * 
 * Centralized content for the About Us page and related sections.
 * Real content extracted from https://lightspeedwp.agency/about
 * 
 * **REAL CONTENT SOURCE:** https://lightspeedwp.agency/about
 * **Last Updated:** 2026-02-16
 */

/**
 * About Stats Interface
 * 
 * Statistics shown on the About page hero/overview.
 */
export interface AboutStat {
  number: string;
  label: string;
  description?: string;
}

/**
 * About Page Statistics
 * 
 * Key metrics that showcase company achievements.
 */
export const aboutStats: AboutStat[] = [
  { 
    number: '500+', 
    label: 'Projects delivered',
    description: 'WordPress sites built'
  },
  { 
    number: '150+', 
    label: 'Happy clients',
    description: 'Across 30 countries'
  },
  { 
    number: '10+', 
    label: 'Years experience',
    description: 'In WordPress development'
  },
  { 
    number: '98%', 
    label: 'Client satisfaction',
    description: 'Average rating'
  }
];

/**
 * Company Values
 */
export const companyValues = [
  {
    title: 'Innovation',
    description: 'We constantly push the boundaries of what is possible with WordPress and block themes.',
    icon: 'Lightbulb'
  },
  {
    title: 'Quality',
    description: 'We believe in doing things right the first time, with clean code and pixel-perfect design.',
    icon: 'CheckCircle'
  },
  {
    title: 'Transparency',
    description: 'We operate with openness and honesty in all our client relationships and project communications.',
    icon: 'Eye'
  },
  {
    title: 'Collaboration',
    description: 'We work closely with our clients as partners, not just vendors, to achieve shared success.',
    icon: 'Users'
  }
];

/**
 * Company History
 * 
 * Timeline of key milestones.
 */
export const companyHistory = [
  {
    year: '2014',
    title: 'Founded',
    description: 'LightSpeed was established as a boutique WordPress agency in Cape Town.'
  },
  {
    year: '2016',
    title: 'WooCommerce Focus',
    description: 'Pivoted to specialize in complex WooCommerce implementations and custom extensions.'
  },
  {
    year: '2018',
    title: 'LSX Theme Launch',
    description: 'Released the LSX Theme and Tour Operator plugin to the WordPress repository.'
  },
  {
    year: '2021',
    title: 'Remote-First',
    description: 'Transitioned to a fully remote team structure, hiring talent globally.'
  },
  {
    year: '2024',
    title: 'FSE Adoption',
    description: 'Fully embraced Full Site Editing and block themes for all new client projects.'
  }
];
