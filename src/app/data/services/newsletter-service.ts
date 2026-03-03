/**
 * Newsletter Service - Detailed Content
 * 
 * Real content from: https://lightspeedwp.agency/services/newsletter/
 * 
 * Email marketing and newsletter service data including platform integration,
 * automation, templates, and analytics.
 */

import { DetailedService } from './types';

/**
 * Newsletter Service Detailed Data
 * 
 * Complete newsletter service information for the newsletter service page template.
 */
export const newsletterServiceDetailed: DetailedService = {
  id: 'newsletter',
  slug: 'newsletter',
  headline: 'Email That Gets Opened',
  tagline: 'Strategic newsletters that cut through the noise. We design, write, and automate campaigns that your audience actually wants to read.',
  description: 'Full-stack email marketing services from strategy to execution.',
  
  whyLightSpeed: {
    title: 'Full-Stack Email Marketing',
    description: 'We don\'t just design pretty emails. We build comprehensive email engines that drive real revenue through automation, segmentation, and compelling content.'
  },
  
  subServices: [
    {
      id: 'integration',
      title: 'Platform Integration',
      description: 'Seamless integration with Mailchimp, ConvertKit, and other email platforms. API integration, forms, lists.'
    },
    {
      id: 'templates',
      title: 'Email Templates',
      description: 'Custom-designed email templates that match your brand. Responsive design, brand styling, A/B testing.'
    },
    {
      id: 'automation',
      title: 'Marketing Automation',
      description: 'Automated email sequences and customer journeys. Welcome series, drip campaigns, behavior triggers.'
    },
    {
      id: 'analytics',
      title: 'Analytics & Reporting',
      description: 'Track performance with detailed analytics and insights. Open rates, click tracking, conversions.'
    },
    {
      id: 'strategy',
      title: 'Email Strategy',
      description: 'Strategic planning for effective email marketing campaigns. Content calendar, audience segmentation.'
    },
    {
      id: 'optimization',
      title: 'Campaign Optimization',
      description: 'Continuous improvement of email performance and engagement. A/B testing, subject line optimization.'
    }
  ],
  
  process: {
    title: 'Ready for Liftoff',
    description: 'Our 6-step framework ensures your emails land in the inbox, not spam.',
    steps: [
      {
        id: 'strategy',
        number: 1,
        title: 'Strategy & Planning',
        description: 'Define goals, audience segments, and content strategy for maximum impact.'
      },
      {
        id: 'setup',
        number: 2,
        title: 'Platform Setup',
        description: 'Configure email platform and integrate with your website seamlessly.'
      },
      {
        id: 'design',
        number: 3,
        title: 'Design & Templates',
        description: 'Create branded email templates and signup forms that convert.'
      },
      {
        id: 'automation',
        number: 4,
        title: 'Automation Setup',
        description: 'Build automated workflows and customer journeys that run on autopilot.'
      },
      {
        id: 'launch',
        number: 5,
        title: 'Launch & Monitor',
        description: 'Launch campaigns and track performance metrics in real-time.'
      },
      {
        id: 'optimize',
        number: 6,
        title: 'Optimize & Scale',
        description: 'Continuous testing and optimization for better results and higher ROI.'
      }
    ]
  },
  
  cta: {
    title: 'Stop Sending into the Void',
    description: 'Let\'s build an email list that actually drives revenue for your business.',
    buttonText: 'Request a Systems Audit',
    buttonPage: 'contact'
  },

  relatedServices: [
    {
      title: 'Content Creation',
      description: 'Compelling content that keeps your subscribers engaged and clicking.',
      page: 'content'
    },
    {
      title: 'Website Design',
      description: 'Landing pages and opt-in forms designed to maximize subscriber growth.',
      page: 'design'
    },
    {
      title: 'SEO Services',
      description: 'Drive organic traffic to your newsletter signup pages.',
      page: 'ai-search-visibility'
    }
  ]
};
