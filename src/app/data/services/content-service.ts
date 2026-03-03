/**
 * Content Service - Detailed Content
 * 
 * Real content from: https://lightspeedwp.agency/services/content/
 * 
 * Content strategy and copywriting service data including editorial process,
 * blog content, and SEO optimization.
 */

import { DetailedService } from './types';

/**
 * Content Service Detailed Data
 * 
 * Complete content service information for the content service page template.
 */
export const contentServiceDetailed: DetailedService = {
  id: 'content',
  slug: 'content',
  headline: 'Content That Connects',
  tagline: 'Strategic content creation that speaks your brand\'s voice and engages your audience.',
  description: 'Crafting compelling narratives that drive engagement and conversion.',
  
  whyLightSpeed: {
    title: 'Words that work as hard as your code.',
    description: 'Great design needs great content. We combine SEO insights with creative storytelling to produce content that not only ranks well but also resonates with your human audience.'
  },
  
  subServices: [
    {
      id: 'content-strategy',
      title: 'Content Strategy',
      description: 'Developing a roadmap for your content ecosystem, defining tone of voice, pillars, and distribution channels.'
    },
    {
      id: 'copywriting',
      title: 'Web Copywriting',
      description: 'Persuasive website copy that guides visitors through your funnel and encourages action.'
    },
    {
      id: 'blog-content',
      title: 'Blog & Articles',
      description: 'Regular, high-quality articles that demonstrate expertise and improve organic search visibility.'
    },
    {
      id: 'editing',
      title: 'Editing & Optimization',
      description: 'Polishing existing content for clarity, impact, and search engine performance.'
    }
  ],
  
  process: {
    title: 'Our Editorial Process',
    description: 'From blank page to published perfection.',
    steps: [
      {
        id: 'discovery',
        number: 1,
        title: 'Discovery & Research',
        description: 'Understanding your audience, competitors, and unique value proposition to find your angle.'
      },
      {
        id: 'outlining',
        number: 2,
        title: 'Outlining & Structure',
        description: 'Creating detailed skeletons for content pieces to ensure logical flow and key message coverage.'
      },
      {
        id: 'drafting',
        number: 3,
        title: 'Drafting',
        description: 'Writing the initial content, focusing on clarity, engagement, and brand voice consistency.'
      },
      {
        id: 'review',
        number: 4,
        title: 'Review & Refinement',
        description: 'Rigorous editing for grammar, style, and flow, plus stakeholder feedback incorporation.'
      },
      {
        id: 'polishing',
        number: 5,
        title: 'Final Polish & SEO',
        description: 'Final proofreading and meta-data optimization before publication.'
      }
    ]
  },
  
  cta: {
    title: 'Tell Your Story',
    description: 'Ready to build a content system that compounds? Let\'s create something your audience will love to read.',
    buttonText: 'Request a Systems Audit',
    buttonPage: 'contact'
  },

  relatedServices: [
    {
      title: 'SEO Services',
      description: 'Ensure your content is optimized for search engines and drives organic traffic.',
      page: 'ai-search-visibility'
    },
    {
      title: 'Newsletter & Email',
      description: 'Distribute your content through strategic email campaigns that convert.',
      page: 'content'
    },
    {
      title: 'Website Design',
      description: 'Present your content with stunning design that enhances readability and engagement.',
      page: 'design'
    }
  ]
};
