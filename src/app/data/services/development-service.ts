/**
 * Development Service - Detailed Content
 * 
 * Real content from: https://lightspeedwp.agency/services/development/
 * 
 * WordPress and WooCommerce development service data including custom builds,
 * plugin development, and API integrations.
 */

import { DetailedService } from './types';

/**
 * Development Service Detailed Data
 * 
 * Complete development service information for the development service page template.
 */
export const developmentServiceDetailed: DetailedService = {
  id: 'development',
  slug: 'development',
  headline: 'Engineering the Future of WordPress',
  tagline: 'Robust, scalable, and high-performance development solutions. We build the engine that powers your digital business.',
  description: 'Enterprise-grade WordPress and WooCommerce development.',
  
  whyLightSpeed: {
    title: 'Code that Scales',
    description: 'We write clean, documented, and standards-compliant code. Our development process prioritizes performance, security, and maintainability, ensuring your site can grow with your business without technical debt.'
  },
  
  subServices: [
    {
      id: 'wordpress-websites',
      title: 'Custom WordPress',
      description: 'Bespoke themes and functionality built from scratch to meet your exact requirements.'
    },
    {
      id: 'woocommerce-stores',
      title: 'WooCommerce Dev',
      description: 'Complex e-commerce solutions, payment gateway integrations, and custom checkout flows.'
    },
    {
      id: 'plugin-development',
      title: 'Plugin Development',
      description: 'Custom plugins to extend WordPress functionality when off-the-shelf solutions fall short.'
    },
    {
      id: 'api-integration',
      title: 'API Integrations',
      description: 'Connecting your WordPress site seamlessly with third-party services, CRMs, and ERPs.'
    },
    {
      id: 'headless-wordpress',
      title: 'Headless WordPress',
      description: 'Decoupled architectures using React/Next.js frontends with WordPress as the CMS.'
    },
    {
      id: 'migrations',
      title: 'Complex Migrations',
      description: 'Moving large-scale data and content from other platforms to WordPress with zero data loss.'
    }
  ],
  
  process: {
    title: 'Execution Pipeline',
    description: 'Our systematic approach to development and deployment.',
    steps: [
      {
        id: 'architecture',
        number: 1,
        title: 'Architecture',
        description: 'Planning the database schema, tech stack, and component structure.'
      },
      {
        id: 'development',
        number: 2,
        title: 'Development',
        description: 'Writing code in sprints with regular commits and code reviews.'
      },
      {
        id: 'testing',
        number: 3,
        title: 'QA & Testing',
        description: 'Rigorous testing across devices, browsers, and for accessibility compliance.'
      },
      {
        id: 'deployment',
        number: 4,
        title: 'Deployment',
        description: 'Automated CI/CD deployment to staging and production environments.'
      },
      {
        id: 'maintenance',
        number: 5,
        title: 'Maintenance',
        description: 'Ongoing updates, security patches, and performance monitoring.'
      }
    ]
  },
  
  cta: {
    title: 'Build It Right',
    description: 'Don\'t settle for spaghetti code. Invest in a solid technical foundation for your business.',
    buttonText: 'Talk to Engineering',
    buttonPage: 'contact'
  },

  relatedServices: [
    {
      title: 'Website Design',
      description: 'Beautiful designs that we implement with pixel-perfect precision.',
      page: 'design'
    },
    {
      title: 'Managed Hosting',
      description: 'Enterprise hosting infrastructure tuned for your WordPress build.',
      page: 'hosting'
    },
    {
      title: 'Ongoing Support',
      description: 'Post-launch maintenance, updates, and bug fixes to keep everything running.',
      page: 'hosting'
    }
  ]
};
