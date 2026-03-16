/**
 * Discovery Service - Detailed Content
 * 
 * Real content from: https://lightspeedwp.agency/services/discovery/
 * 
 * Digital discovery and strategy service data including stakeholder alignment,
 * user research, and technical feasibility.
 */

import { DetailedService } from './types';

/**
 * Discovery Service Detailed Data
 * 
 * Complete discovery service information for the discovery service page template.
 */
export const discoveryServiceDetailed: DetailedService = {
  id: 'discovery',
  slug: 'discovery',
  headline: 'Digital Discovery & Strategy',
  tagline: 'We dig deep to uncover the insights that will drive your project\'s success before writing a single line of code.',
  description: 'Aligning stakeholders on business objectives and success metrics.',
  
  whyLightSpeed: {
    title: 'Why discovery matters',
    description: 'Skipping discovery is the leading cause of project failure. Our process ensures we build the right thing, for the right people, for the right reasons.'
  },
  
  subServices: [
    {
      id: 'goal-alignment',
      title: 'Goal alignment',
      description: 'Aligning stakeholders on business objectives and success metrics.'
    },
    {
      id: 'risk-mitigation',
      title: 'Risk mitigation',
      description: 'Identifying technical and operational risks early in the process.'
    },
    {
      id: 'opportunity-spotting',
      title: 'Opportunity spotting',
      description: 'Uncovering hidden opportunities for innovation and competitive advantage.'
    }
  ],
  
  process: {
    title: 'The discovery roadmap',
    description: 'Our systematic approach to understanding your needs.',
    steps: [
      {
        id: 'stakeholder-interviews',
        number: 1,
        title: 'Stakeholder interviews',
        description: 'One-on-one sessions with key decision-makers to gather requirements.'
      },
      {
        id: 'user-research',
        number: 2,
        title: 'User research',
        description: 'Analyzing your target audience, their needs, and behaviors.'
      },
      {
        id: 'competitive-audit',
        number: 3,
        title: 'Competitive audit',
        description: 'Reviewing competitors to identify gaps and best practices.'
      },
      {
        id: 'technical-feasibility',
        number: 4,
        title: 'Technical feasibility',
        description: 'Assessing the technology stack and integration requirements.'
      },
      {
        id: 'strategy-roadmap',
        number: 5,
        title: 'Strategy roadmap',
        description: 'Delivering a comprehensive plan for design and development.'
      }
    ]
  },
  
  relatedServices: [
    {
      title: 'Website Design',
      description: 'Custom, pixel-perfect website designs tailored to your brand identity and business goals.',
      page: 'design'
    },
    {
      title: 'Custom WordPress Development',
      description: 'Bespoke themes and functionality built from scratch to meet your exact requirements.',
      page: 'development'
    }
  ],
  
  cta: {
    title: 'Start on Solid Ground',
    description: 'Invest in a discovery phase to ensure your project\'s success.',
    buttonText: 'Request a Systems Audit',
    buttonPage: 'contact'
  }
};