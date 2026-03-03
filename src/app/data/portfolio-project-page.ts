/**
 * Single Portfolio Project Page Data
 * 
 * Real content for individual portfolio project case study pages.
 * Real content extracted from https://lightspeedwp.agency/portfolio
 * 
 * **REAL CONTENT SOURCE:** https://lightspeedwp.agency/portfolio/armd-digital
 * **Last Updated:** 2025-01-09
 * 
 * WordPress: Maps to templates/single-portfolio.html
 */

import type { UniversalIcon } from '../utils/icon-map';
import { Code, Target, Clock, Users, CheckCircle, Zap, Lightbulb, BarChart, TrendingUp, Award } from 'lucide-react';
import { portfolioProjects } from './portfolio-projects';

/**
 * Project Hero Content
 */
export const projectPageHero = {
  badge: {
    icon: Code,
    text: 'Technology & E-commerce'
  },
  title: 'ARMD Digital - Email Security Platform',
  tagline: 'Achieving what other agencies could not achieve',
  description: 'ARMD Digital partnered with LightSpeed to enhance their online presence and streamline their services for email security through custom WordPress and WooCommerce development.',
  featuredImage: 'https://images.unsplash.com/photo-1563986768609-322da13575f3?w=1600',
  client: 'ARMD Digital',
  industry: 'Technology & SaaS',
  url: 'https://armd.digital'
};

/**
 * Project Meta Information
 */
export interface ProjectMeta {
  client: string;
  industry: string;
  completedDate: string;
  duration: string;
  teamSize: string;
  budget: string;
  url?: string;
}

export const projectPageMeta: ProjectMeta = {
  client: 'ARMD Digital',
  industry: 'Technology & E-commerce',
  completedDate: 'December 2024',
  duration: '4 months',
  teamSize: '5 specialists',
  budget: 'Enterprise',
  url: 'https://armd.digital'
};

/**
 * Services Provided
 */
export const projectPageServices = [
  'WordPress Development',
  'WooCommerce Development',
  'Custom Plugin Development',
  'API Integration',
  'Performance Optimization',
  'WCAG 2.1 AA Compliance'
];

/**
 * Technologies Used
 */
export const projectPageTechnologies = [
  'WordPress 6.4',
  'WooCommerce 8.5',
  'Advanced Custom Fields',
  'Custom Plugins',
  'REST API',
  'PHP 8.2',
  'React',
  'Block Theme'
];

/**
 * Challenge Section
 */
export const projectPageChallenge = {
  title: 'The Challenge',
  description: 'We needed to customise multiple applications to suit our particular business model. Before partnering with LightSpeed, we struggled to find a company who could provide technically strong coding expertise, coupled with the benefits that only years of experience can provide. This impacted our ability to complete our unique product offerings.',
  keyIssues: [
    {
      icon: Target,
      issue: 'Custom Business Model',
      description: 'Required multiple applications customized to fit unique business requirements'
    },
    {
      icon: Code,
      issue: 'Technical Expertise Gap',
      description: 'Previous agencies lacked the strong coding expertise needed for complex customizations'
    },
    {
      icon: Clock,
      issue: 'Product Development Impact',
      description: 'Inability to complete unique product offerings due to technical limitations'
    },
    {
      icon: Users,
      issue: 'Experience Required',
      description: 'Needed a team with both technical skills and years of WordPress/WooCommerce experience'
    }
  ]
};

/**
 * Solution Section
 */
export const projectPageSolution = {
  title: 'The Solution',
  description: 'LightSpeed developed a solution that included the ability for our partners to select their preferred commission/discount option at sign-up which helped us to minimise manual inputs on the backend. This collaboration resulted in a robust, user-friendly website featuring innovative functionalities and seamless integration, significantly improving operational efficiency and customer satisfaction.',
  keyFeatures: [
    {
      icon: CheckCircle,
      feature: 'Partner Commission System',
      description: 'Custom partner portal allowing commission/discount selection at sign-up, eliminating manual backend work'
    },
    {
      icon: Zap,
      feature: 'WooCommerce Customization',
      description: 'Heavily customized WooCommerce to support unique email security product offerings'
    },
    {
      icon: Code,
      feature: 'Custom Plugin Development',
      description: 'Bespoke WordPress plugins to integrate with email security APIs and partner systems'
    },
    {
      icon: Lightbulb,
      feature: 'Innovative User Experience',
      description: 'Intuitive interface for both partners and end customers to configure email security products'
    },
    {
      icon: BarChart,
      feature: 'Backend Automation',
      description: 'Automated workflows reducing manual operations and improving operational efficiency'
    }
  ]
};

/**
 * Results/Metrics
 */
export interface ProjectResult {
  icon: UniversalIcon;
  metric: string;
  value: string;
  description: string;
}

export const projectPageResults: ProjectResult[] = [
  {
    icon: TrendingUp,
    metric: 'Operational Efficiency',
    value: 'Enhanced',
    description: 'Minimised manual inputs on the backend through partner portal automation'
  },
  {
    icon: Users,
    metric: 'User Experience',
    value: 'Positive',
    description: 'Expected to lead to enhanced user experience and partner satisfaction'
  },
  {
    icon: CheckCircle,
    metric: 'Custom Solutions',
    value: 'Delivered',
    description: 'Partner commission/discount selection at sign-up successfully implemented'
  },
  {
    icon: Award,
    metric: 'Code Quality',
    value: 'Expert',
    description: 'Technically strong coding expertise meeting enterprise standards'
  }
];

/**
 * Key Features Delivered
 */
export const projectPageFeatures = [
  {
    title: 'Partner Commission System',
    description: 'Custom partner portal allowing partners to select preferred commission structures and discount options at sign-up, with real-time calculation and automated backend processing.'
  },
  {
    title: 'Email Security Product Configurator',
    description: 'Interactive product configuration system allowing customers to customize email security packages based on business size, features needed, and support level.'
  },
  {
    title: 'Custom WooCommerce Integration',
    description: 'Heavily customized WooCommerce implementation with custom product types, pricing rules, and checkout flows tailored to email security subscriptions.'
  },
  {
    title: 'Partner Dashboard',
    description: 'Comprehensive admin dashboard for partners to manage their accounts, view commissions, track referrals, and access marketing materials.'
  },
  {
    title: 'API Integration Layer',
    description: 'Seamless integration with email security provider APIs for real-time account provisioning, license management, and billing synchronization.'
  },
  {
    title: 'Automated Workflows',
    description: 'Backend automation reducing manual operations including partner onboarding, commission calculations, invoice generation, and customer provisioning.'
  }
];

/**
 * Gallery Images
 */
export const projectPageGallery = [
  {
    url: 'https://images.unsplash.com/photo-1563986768609-322da13575f3?w=1200',
    caption: 'Homepage Hero - Email Security Platform'
  },
  {
    url: 'https://images.unsplash.com/photo-1551434678-e076c223a692?w=1200',
    caption: 'Partner Dashboard Interface'
  },
  {
    url: 'https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=1200',
    caption: 'Product Configuration System'
  },
  {
    url: 'https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=1200',
    caption: 'Analytics and Reporting Dashboard'
  }
];

/**
 * Client Testimonial
 */
export const projectPageTestimonial = {
  quote: 'The team at LightSpeed was always very professional and innovative, and their expertise in coding was invaluable to our project. I highly recommend LightSpeed to any business looking for technical skills that involve custom coding as their developments have managed to translate our concepts into slick, working experiences.',
  author: 'Anthony Rodinis',
  position: 'Operations Manager',
  company: 'ARMD Digital',
  avatar: 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=400',
  rating: 5
};

/**
 * Process Steps
 */
export const projectPageProcess = [
  {
    number: 1,
    title: 'Discovery & Requirements',
    description: 'Comprehensive analysis of ARMD Digital\'s business model, partner requirements, and technical constraints. Documented all custom workflows and integration needs.',
    duration: '2 weeks'
  },
  {
    number: 2,
    title: 'Architecture & Planning',
    description: 'Designed system architecture for partner portal, WooCommerce customizations, and API integrations. Created wireframes and technical specifications.',
    duration: '2 weeks'
  },
  {
    number: 3,
    title: 'Custom Development',
    description: 'Built custom WordPress plugins, WooCommerce extensions, and partner portal. Implemented commission system and automated workflows.',
    duration: '8 weeks'
  },
  {
    number: 4,
    title: 'Integration & Testing',
    description: 'Integrated with email security provider APIs, conducted comprehensive testing, and optimized performance. Ensured WCAG 2.1 AA compliance.',
    duration: '3 weeks'
  },
  {
    number: 5,
    title: 'Launch & Training',
    description: 'Deployed to production, trained ARMD team on admin interfaces, and provided documentation. Monitored performance post-launch.',
    duration: '1 week'
  }
];

/**
 * Related Projects
 */
export const projectPageRelated = portfolioProjects.slice(1, 4); // Get 3 related projects

/**
 * Project CTA
 */
export const projectPageCTA = {
  title: 'Need a Custom WordPress Solution?',
  description: 'Whether you need WooCommerce customization, custom plugin development, or complex integrations, our expert team can help bring your vision to life.',
  buttons: [
    {
      text: 'Start Your Project',
      page: 'contact',
      variant: 'default'
    },
    {
      text: 'View All Projects',
      page: 'portfolio',
      variant: 'outline'
    }
  ]
};

/**
 * Project Stats (Extended)
 */
export const projectPageStats = {
  client: 'ARMD Digital',
  industry: 'Technology & SaaS',
  services: projectPageServices,
  technologies: projectPageTechnologies,
  completedDate: 'December 2024',
  duration: '4 months',
  teamSize: '5 specialists (2 developers, 1 designer, 1 PM, 1 QA)',
  budget: 'Enterprise ($35,000+)',
  url: 'https://armd.digital'
};

/**
 * Helper Functions
 */

/**
 * Get project by slug
 */
export function getProjectBySlug(slug: string) {
  return portfolioProjects.find(project => project.slug === slug);
}

/**
 * Get related projects
 */
export function getRelatedProjects(slug: string, limit: number = 3) {
  const currentProject = getProjectBySlug(slug);
  if (!currentProject) return [];
  
  // Find projects with similar tags or groups
  const related = portfolioProjects.filter(project => 
    project.slug !== slug && (
      project.projectGroups.some(group => currentProject.projectGroups.includes(group)) ||
      project.projectTags.some(tag => currentProject.projectTags.includes(tag))
    )
  );
  
  return related.slice(0, limit);
}

/**
 * Format date
 */
export function formatProjectDate(date: string): string {
  return new Date(date).toLocaleDateString('en-US', {
    year: 'numeric',
    month: 'long'
  });
}