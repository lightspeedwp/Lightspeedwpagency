/**
 * SEO Service - Detailed Content
 * 
 * Real content from: https://lightspeedwp.agency/services/seo/
 * 
 * Technical SEO service data including audit, optimization strategies,
 * and content planning.
 */

import { DetailedService } from './types';

/**
 * SEO Service Detailed Data
 * 
 * Complete SEO service information for the SEO service page template.
 */
export const seoServiceDetailed: DetailedService = {
  id: 'seo',
  slug: 'seo',
  headline: 'Dominate Search Results',
  tagline: 'Technical SEO strategies that drive organic traffic and improve visibility for WordPress & WooCommerce.',
  description: 'Climb the rankings with data-driven SEO optimization tailored for WordPress.',
  
  whyLightSpeed: {
    title: 'Visibility that drives real business growth.',
    description: 'We go beyond basic keyword stuffing. Our technical SEO approach ensures your WordPress site is structured, indexed, and optimized to meet Google\'s Core Web Vitals standards, driving sustainable organic traffic.'
  },
  
  subServices: [
    {
      id: 'technical-seo',
      title: 'Technical SEO Audit',
      description: 'Comprehensive analysis of your site structure, crawlability, indexation, and schema markup to ensure search engines understand your content.'
    },
    {
      id: 'on-page-optimization',
      title: 'On-Page Optimization',
      description: 'Optimizing titles, meta descriptions, headings, and internal linking structures to maximize relevance for target keywords.'
    },
    {
      id: 'content-strategy',
      title: 'SEO Content Strategy',
      description: 'Data-backed content planning that targets high-value keywords and answers user intent to build authority in your niche.'
    },
    {
      id: 'local-seo',
      title: 'Local SEO',
      description: 'Optimizing your presence for local search results, Google Business Profile, and location-specific keywords.'
    }
  ],
  
  process: {
    title: 'Our SEO Methodology',
    description: 'A data-driven roadmap to higher rankings and better visibility.',
    steps: [
      {
        id: 'audit',
        number: 1,
        title: 'Comprehensive Audit',
        description: 'We establish a baseline by auditing your current technical setup, keyword rankings, and competitor landscape.'
      },
      {
        id: 'strategy',
        number: 2,
        title: 'Strategy Development',
        description: 'Creating a tailored plan focusing on quick wins and long-term growth opportunities specific to your industry.'
      },
      {
        id: 'optimization',
        number: 3,
        title: 'Technical Optimization',
        description: 'Fixing crawl errors, improving site speed, and implementing structured data to help search engines read your site.'
      },
      {
        id: 'content',
        number: 4,
        title: 'Content Enhancement',
        description: 'Optimizing existing pages and creating new, high-quality content that targets valuable search terms.'
      },
      {
        id: 'monitoring',
        number: 5,
        title: 'Monitoring & Reporting',
        description: 'Ongoing tracking of rankings, traffic, and conversions with monthly reports and strategy adjustments.'
      }
    ]
  },
  
  cta: {
    title: 'Ready to Rank Higher?',
    description: 'Stop losing traffic to your competitors. Let\'s build an SEO strategy that puts your brand in front of the right audience at the right time.',
    buttonText: 'Request a Systems Audit',
    buttonPage: 'contact'
  },

  relatedServices: [
    {
      title: 'Content Strategy',
      description: 'Data-backed content planning that targets high-value keywords and answers user intent.',
      page: 'content'
    },
    {
      title: 'Performance Optimization',
      description: 'Speed and Core Web Vitals directly impact your rankings — we make sure your site is lightning fast.',
      page: 'performance'
    },
    {
      title: 'AI Engine Optimization',
      description: 'Optimize your content for AI-driven search experiences alongside traditional SEO.',
      page: 'ai-engine-optimisation'
    }
  ]
};
