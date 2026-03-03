/**
 * Hosting Service - Detailed Content
 * 
 * Real content from: https://lightspeedwp.agency/services/hosting/
 * 
 * Managed WordPress hosting service data including infrastructure, migrations,
 * WooCommerce hosting, and 24/7 monitoring.
 */

import { DetailedService } from './types';

/**
 * Hosting Service Detailed Data
 * 
 * Complete hosting service information for the hosting service page template.
 */
export const hostingServiceDetailed: DetailedService = {
  id: 'hosting',
  slug: 'hosting',
  headline: 'Managed WordPress Hosting That Scales',
  tagline: 'Enterprise-grade infrastructure purpose-built for WordPress and WooCommerce — so your site is fast, secure, and always online.',
  description: 'Fully managed WordPress hosting with daily backups, proactive security, staging environments, and 24/7 monitoring.',

  whyLightSpeed: {
    title: 'Hosting by WordPress Experts',
    description: 'Unlike generic hosts, our infrastructure is tuned specifically for WordPress and WooCommerce performance. We handle server-level caching, PHP version management, and database optimisation so you never have to.'
  },

  subServices: [
    {
      id: 'managed-wp',
      title: 'Managed WordPress Hosting',
      description: 'Auto-updates, staging, daily backups, and server-level caching on optimised NGINX + PHP infrastructure.'
    },
    {
      id: 'woo-hosting',
      title: 'WooCommerce Hosting',
      description: 'High-availability hosting tuned for transactional workloads — object caching, queue workers, and PCI-ready environments.'
    },
    {
      id: 'migration',
      title: 'Zero-Downtime Migration',
      description: 'We migrate your existing site with DNS pre-warming and SSL provisioning so there is zero interruption to your visitors.'
    },
    {
      id: 'monitoring',
      title: '24/7 Uptime Monitoring',
      description: 'Real-time monitoring with automated alerting and sub-5-minute incident response from our on-call engineering team.'
    }
  ],

  process: {
    title: 'Hosting Onboarding Workflow',
    description: 'From sign-up to go-live in under 48 hours.',
    steps: [
      {
        id: 'provision',
        number: 1,
        title: 'Environment Provisioning',
        description: 'We spin up a production-ready server stack matched to your traffic profile and plugin requirements.'
      },
      {
        id: 'migrate',
        number: 2,
        title: 'Site Migration',
        description: 'Full database, files, and configuration migration with post-migration verification testing.'
      },
      {
        id: 'optimise',
        number: 3,
        title: 'Performance Tuning',
        description: 'Server-level caching, CDN configuration, image optimisation, and database query tuning.'
      },
      {
        id: 'dns',
        number: 4,
        title: 'DNS & SSL Cut-Over',
        description: 'Seamless DNS switch with Let\'s Encrypt or custom SSL certificate provisioning.'
      },
      {
        id: 'monitor',
        number: 5,
        title: 'Ongoing Monitoring',
        description: 'Continuous uptime, performance, and security monitoring with monthly infrastructure reports.'
      }
    ]
  },

  cta: {
    title: 'Move to Faster Hosting',
    description: 'Experience the difference purpose-built WordPress hosting makes. Free migration included with every plan.',
    buttonText: 'See Hosting Plans',
    buttonPage: 'hosting'
  },

  relatedServices: [
    {
      title: 'WordPress Security',
      description: 'Secure hosting is the foundation — add our dedicated security services for complete protection.',
      page: 'security'
    },
    {
      title: 'Performance Optimization',
      description: 'Combine hosting with performance tuning for the fastest possible WordPress experience.',
      page: 'performance'
    },
    {
      title: 'Ongoing Support',
      description: 'Managed hosting plus proactive support — the ultimate peace-of-mind package.',
      page: 'hosting'
    }
  ]
};
