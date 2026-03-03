/**
 * Training Service - Detailed Content
 * 
 * Real content from: https://lightspeedwp.agency/services/training/
 * 
 * WordPress training service data including editor training, developer upskilling,
 * admin training, and WooCommerce operations.
 */

import { DetailedService } from './types';

/**
 * Training Service Detailed Data
 * 
 * Complete training service information for the training service page template.
 */
export const trainingServiceDetailed: DetailedService = {
  id: 'training',
  slug: 'training',
  headline: 'WordPress Mastery for Your Team',
  tagline: 'Give your editors, marketers, and developers hands-on WordPress competence — from block editing basics to advanced theme customisation.',
  description: 'Structured training programmes that turn your team into confident WordPress operators, reducing your dependency on external developers.',

  whyLightSpeed: {
    title: 'We Teach What We Build',
    description: 'Our trainers are the same senior developers who architect and ship WordPress projects every day. You get real-world workflows, not textbook theory.'
  },

  subServices: [
    {
      id: 'editor-training',
      title: 'Editor & Content Manager Training',
      description: 'Hands-on workshops covering the block editor, reusable patterns, media management, and publishing workflows.'
    },
    {
      id: 'developer-training',
      title: 'Developer Upskilling',
      description: 'Deep-dive sessions on block theme development, theme.json, custom blocks, and the WordPress REST API.'
    },
    {
      id: 'admin-training',
      title: 'Site Admin & Security Training',
      description: 'User management, plugin governance, backup procedures, and incident response for site administrators.'
    },
    {
      id: 'woocommerce-training',
      title: 'WooCommerce Operations Training',
      description: 'Product management, order processing, coupon strategy, and reporting dashboards for store operators.'
    }
  ],

  process: {
    title: 'Training Programme Workflow',
    description: 'A structured path from assessment to ongoing support.',
    steps: [
      {
        id: 'assess',
        number: 1,
        title: 'Skills Assessment',
        description: 'We evaluate your team\'s current WordPress proficiency and identify knowledge gaps to tailor the curriculum.'
      },
      {
        id: 'curriculum',
        number: 2,
        title: 'Custom Curriculum Design',
        description: 'Building a bespoke training plan with real examples from your own website and workflows.'
      },
      {
        id: 'deliver',
        number: 3,
        title: 'Live Workshop Delivery',
        description: 'Interactive sessions — remote or on-site — with screen-sharing, exercises, and Q&A.'
      },
      {
        id: 'resources',
        number: 4,
        title: 'Documentation & Recordings',
        description: 'Every session is recorded and supplemented with written guides your team can reference later.'
      },
      {
        id: 'followup',
        number: 5,
        title: 'Follow-Up Support',
        description: '30 days of Slack or email support after training so your team can ask questions as they apply new skills.'
      }
    ]
  },

  cta: {
    title: 'Upskill Your Team Today',
    description: 'Stop relying on external help for every content update. Our training programmes give your team the confidence to manage and grow your WordPress site independently.',
    buttonText: 'Request a Systems Audit',
    buttonPage: 'contact'
  },

  relatedServices: [
    {
      title: 'WordPress Support',
      description: 'Ongoing support for your team after training — we\'re always here to help.',
      page: 'hosting'
    },
    {
      title: 'WordPress Development',
      description: 'Let us build it, then train your team to manage it independently.',
      page: 'development'
    },
    {
      title: 'Content Strategy',
      description: 'Pair training with a content strategy to empower your editorial team.',
      page: 'content'
    }
  ]
};
