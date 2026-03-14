/**
 * About Data
 * 
 * Centralized content for the About Us page and related sections.
 * Real content extracted from https://lightspeedwp.agency/about
 * 
 * **REAL CONTENT SOURCE:** https://lightspeedwp.agency/about
 * **Last Updated:** 2026-03-14
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
    number: '20+', 
    label: 'Years experience',
    description: 'Since 2003'
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
 * Timeline of key milestones starting from the 2003 founding.
 */
export const companyHistory = [
  {
    year: '2003',
    title: 'Founded in Cape Town',
    description: 'LightSpeed was established by Ash Shaw as a web development consultancy in Cape Town, South Africa, initially building custom PHP websites for local businesses.'
  },
  {
    year: '2005',
    title: 'WordPress adoption',
    description: 'Recognised WordPress as the future of web publishing and began building client sites exclusively on the platform, becoming one of the earliest WordPress agencies in South Africa.'
  },
  {
    year: '2008',
    title: 'First international clients',
    description: 'Expanded beyond South Africa to serve tourism and hospitality clients across East Africa, building multilingual WordPress sites for safari operators and lodges.'
  },
  {
    year: '2012',
    title: 'LSX Theme & Tour Operator plugin',
    description: 'Released the LSX Theme and Tour Operator plugin to the WordPress.org repository, establishing LightSpeed as a recognised contributor to the WordPress ecosystem.'
  },
  {
    year: '2015',
    title: 'WooCommerce specialisation',
    description: 'Pivoted to specialise in complex WooCommerce implementations, building custom extensions and payment gateway integrations for the African e-commerce market.'
  },
  {
    year: '2018',
    title: 'Gutenberg early adopter',
    description: 'Embraced the Gutenberg block editor from day one, building custom blocks and block patterns for client sites ahead of the broader WordPress community.'
  },
  {
    year: '2020',
    title: 'Remote-first transition',
    description: 'Transitioned to a fully remote team structure, enabling hiring of top talent across South Africa and internationally while maintaining strong team culture.'
  },
  {
    year: '2023',
    title: 'Design system practice',
    description: 'Launched the LSX Design System practice, offering tokenised, accessible, and governed WordPress block themes built on Full Site Editing architecture.'
  },
  {
    year: '2025',
    title: 'AI-powered workflows',
    description: 'Integrated AI-assisted development workflows for content strategy, accessibility auditing, and automated testing, setting new efficiency standards for WordPress agencies.'
  }
];
