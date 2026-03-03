/**
 * Design Service - Detailed Content
 * 
 * Real content from: https://lightspeedwp.agency/services/design/
 * 
 * UI/UX design service data including website design, landing pages,
 * prototyping, and design systems.
 */

import { DetailedService } from './types';

/**
 * Design Service Detailed Data
 * 
 * Complete design service information for the design service page template.
 */
export const designServiceDetailed: DetailedService = {
  id: 'design',
  slug: 'design',
  headline: 'We Craft Digital Masterpieces',
  tagline: 'Where aesthetic beauty meets functional design. We transform ideas into visual experiences that captivate and convert.',
  description: 'Premium UI/UX design services for brands that demand excellence.',
  
  whyLightSpeed: {
    title: 'Design that Works',
    description: 'We believe design is more than just making things look pretty. It\'s about solving problems, guiding user behavior, and communicating your brand value instantly. Our designs are data-informed and conversion-focused.'
  },
  
  subServices: [
    {
      id: 'new-website-design',
      title: 'Website Design',
      description: 'Custom, pixel-perfect website designs tailored to your brand identity and business goals.'
    },
    {
      id: 'landing-pages',
      title: 'Landing Pages',
      description: 'High-conversion landing pages optimized for marketing campaigns and lead generation.'
    },
    {
      id: 'website-redesign',
      title: 'Website Redesign',
      description: 'Modernize your outdated site with a fresh look and improved user experience.'
    },
    {
      id: 'icons-illustrations',
      title: 'Icons & Illustrations',
      description: 'Bespoke iconography and illustrations that add personality and depth to your interface.'
    },
    {
      id: 'product-images',
      title: 'E-commerce Design',
      description: 'Store layouts and product presentations designed to maximize sales and reduce cart abandonment.'
    },
    {
      id: 'branding',
      title: 'Digital Branding',
      description: 'Translating your brand guidelines into a cohesive digital design system for the web.'
    },
    {
      id: 'figma-prototyping',
      title: 'Figma Prototyping',
      description: 'Interactive Figma prototypes that validate user flows, micro-interactions, and responsive layouts before development begins.'
    },
    {
      id: 'design-systems',
      title: 'Design Systems',
      description: 'Scalable component libraries with documented tokens, patterns, and usage guidelines for consistent cross-team design.'
    }
  ],
  
  process: {
    title: 'The Creative Process',
    description: 'How we take your vision from concept to reality.',
    steps: [
      {
        id: 'discovery',
        number: 1,
        title: 'Discovery',
        description: 'We dive deep into your brand, audience, and goals to build a solid foundation.'
      },
      {
        id: 'wireframing',
        number: 2,
        title: 'Wireframing',
        description: 'Mapping out the user journey and page structure before applying any style.'
      },
      {
        id: 'visual-design',
        number: 3,
        title: 'Visual Design',
        description: 'Applying colors, typography, and imagery to bring the wireframes to life.'
      },
      {
        id: 'prototyping',
        number: 4,
        title: 'Prototyping',
        description: 'Creating interactive mockups to test flows and interactions.'
      },
      {
        id: 'handoff',
        number: 5,
        title: 'Handoff',
        description: 'Delivering organized design files and style guides to the development team.'
      }
    ]
  },
  
  cta: {
    title: 'Ready for a Redesign?',
    description: 'Let\'s create a website that your customers will love and your competitors will envy.',
    buttonText: 'Request a Systems Audit',
    buttonPage: 'contact'
  },

  relatedServices: [
    {
      title: 'WordPress Development',
      description: 'Turn your designs into pixel-perfect, high-performance WordPress websites.',
      page: 'development'
    },
    {
      title: 'Discovery & Strategy',
      description: 'Research-driven strategy ensures your design decisions are backed by data.',
      page: 'discovery'
    },
    {
      title: 'Content Creation',
      description: 'Professional copywriting and content that brings your designs to life.',
      page: 'content'
    }
  ]
};
