/**
 * Support Service - Detailed Content
 * 
 * Real content from: https://lightspeedwp.agency/services/support/
 * 
 * WordPress support and maintenance service data including monitoring,
 * security, updates, and bug fixes.
 */

import { DetailedService } from './types';

/**
 * Support Service Detailed Data
 * 
 * Complete support service information for the support service page template.
 */
export const supportServiceDetailed: DetailedService = {
  id: 'support',
  slug: 'support',
  headline: 'Mission Control for WordPress',
  tagline: 'Proactive monitoring, updates, and emergency support. We keep your digital fortress secure and online 24/7.',
  description: 'Comprehensive WordPress support and maintenance for mission-critical websites.',
  
  whyLightSpeed: {
    title: 'Sleep soundly while we stand guard.',
    description: 'Your website is your business engine. We provide the oil, the maintenance, and the emergency repairs. Our proactive approach stops problems before they start, ensuring 99.9% uptime and maximum security.'
  },
  
  subServices: [
    {
      id: 'design-development-support',
      title: 'Design & Dev Support',
      description: 'Ongoing tweaks, feature additions, and layout fixes to keep your site fresh and functional.'
    },
    {
      id: 'security-support',
      title: 'Security Monitoring',
      description: '24/7 threat detection, firewall management, and immediate malware removal if anything gets through.'
    },
    {
      id: 'hosting-support',
      title: 'Hosting Management',
      description: 'We handle the server side of things, ensuring optimal PHP versions, caching, and resource allocation.'
    },
    {
      id: 'bug-fixes',
      title: 'Bug Fixes',
      description: 'Rapid troubleshooting and resolution of plugin conflicts, theme errors, and white screens of death.'
    },
    {
      id: 'mobile-bug-fixes',
      title: 'Mobile Optimization',
      description: 'Ensuring your site looks and works perfectly across all device sizes and screen resolutions.'
    },
    {
      id: 'site-speed',
      title: 'Performance Tuning',
      description: 'Continuous monitoring of Core Web Vitals and speed optimization adjustments.'
    }
  ],
  
  process: {
    title: 'Support Workflow',
    description: 'How we keep your site running smoothly.',
    steps: [
      {
        id: 'onboarding',
        number: 1,
        title: 'Onboarding Audit',
        description: 'We scan your site to establish a baseline and fix immediate issues.'
      },
      {
        id: 'monitoring',
        number: 2,
        title: 'Active Monitoring',
        description: 'Our systems connect to your site to track uptime, security, and performance.'
      },
      {
        id: 'updates',
        number: 3,
        title: 'Safe Updates',
        description: 'We test updates in a staging environment before applying them to your live site.'
      },
      {
        id: 'reporting',
        number: 4,
        title: 'Monthly Reporting',
        description: 'You get a detailed report of everything we did and how your site is performing.'
      }
    ]
  },
  
  cta: {
    title: 'Get Premium Support',
    description: 'Stop worrying about your website and start focusing on your business. Our support plans start at just $99/mo.',
    buttonText: 'View Support Plans',
    buttonPage: 'pricing'
  },

  relatedServices: [
    {
      title: 'Secure Managed Hosting',
      description: 'Combine support with managed hosting for complete peace of mind.',
      page: 'hosting'
    },
    {
      title: 'WordPress Security',
      description: 'Harden your site against attacks with our dedicated security services.',
      page: 'security'
    },
    {
      title: 'Performance Optimization',
      description: 'Keep your site fast with ongoing performance tuning and monitoring.',
      page: 'performance'
    }
  ]
};
