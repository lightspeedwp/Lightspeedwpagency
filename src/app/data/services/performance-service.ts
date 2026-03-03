/**
 * Performance Service - Detailed Content
 * 
 * Real content from: https://lightspeedwp.agency/services/performance/
 * 
 * WordPress performance optimization and WCAG accessibility service data
 * including speed audit, caching strategies, and compliance testing.
 */

import { DetailedService } from './types';

/**
 * Performance Service Detailed Data
 * 
 * Complete performance service information for the performance service page template.
 */
export const performanceServiceDetailed: DetailedService = {
  id: 'performance',
  slug: 'performance',
  headline: 'Lightning Fast & Fully Accessible WordPress',
  tagline: 'Optimize your site for speed, stability, and WCAG compliance. Core Web Vitals + accessibility unified.',
  description: 'Speed and accessibility in one service — because both affect your rankings and user experience.',
  
  whyLightSpeed: {
    title: 'Speed converts. Latency kills.',
    description: 'A slow website frustrates users and hurts your search rankings. We specialize in advanced WordPress performance optimization, caching strategies, and code refactoring to deliver sub-second load times.'
  },
  
  subServices: [
    {
      id: 'speed-audit',
      title: 'Performance Audit',
      description: 'Deep-dive analysis of bottlenecks, identifying specific plugins, scripts, or queries slowing down your site.'
    },
    {
      id: 'code-optimization',
      title: 'Code Refactoring',
      description: 'Cleaning up bloated themes, optimizing database queries, and reducing script execution time.'
    },
    {
      id: 'caching-strategy',
      title: 'Advanced Caching',
      description: 'Implementing server-side caching, object caching (Redis), and CDN configuration for global speed.'
    },
    {
      id: 'asset-optimization',
      title: 'Asset Optimization',
      description: 'Image compression, lazy loading, script deferral, and font optimization to minimize initial page weight.'
    },
    {
      id: 'wcag-audit',
      title: 'WCAG Compliance Audit',
      description: 'Manual + automated accessibility audit against WCAG 2.1 AA/AAA with a prioritised remediation report.'
    },
    {
      id: 'remediation',
      title: 'Accessibility Remediation',
      description: 'Fixing colour contrast, keyboard traps, missing alt text, ARIA misuse, and focus management across your site.'
    }
  ],
  
  process: {
    title: 'Performance Optimization Workflow',
    description: 'From sluggish to supersonic in five steps.',
    steps: [
      {
        id: 'benchmark',
        number: 1,
        title: 'Benchmark Testing',
        description: 'Measuring current load times, TTFB, LCP, and CLS across mobile and desktop devices.'
      },
      {
        id: 'analysis',
        number: 2,
        title: 'Bottleneck Analysis',
        description: 'Identifying the root causes of slowness—whether it\'s hosting, code, or heavy assets.'
      },
      {
        id: 'optimization',
        number: 3,
        title: 'Optimization Execution',
        description: 'Implementing fixes: code minification, image optimization, database cleanup, and caching setup.'
      },
      {
        id: 'validation',
        number: 4,
        title: 'Validation & Testing',
        description: 'Verifying improvements across real-world devices and connection speeds.'
      },
      {
        id: 'monitoring',
        number: 5,
        title: 'Performance Monitoring',
        description: 'Setting up alerts to ensure your site stays fast as you add new content and features.'
      }
    ]
  },
  
  cta: {
    title: 'Speed Up Your Site Today',
    description: 'Don\'t let a slow website cost you customers. Our performance experts can significantly improve your load times and Core Web Vitals scores.',
    buttonText: 'Analyze My Site Speed',
    buttonPage: 'contact'
  },

  relatedServices: [
    {
      title: 'Managed WordPress Hosting',
      description: 'Enterprise-grade hosting tuned for WordPress performance — the foundation of a fast site.',
      page: 'hosting'
    },
    {
      title: 'SEO Services',
      description: 'Performance and SEO go hand-in-hand — faster sites rank higher in search results.',
      page: 'ai-search-visibility'
    },
    {
      title: 'WordPress Support',
      description: 'Ongoing maintenance and monitoring to keep your site performing at its best.',
      page: 'hosting'
    }
  ]
};
