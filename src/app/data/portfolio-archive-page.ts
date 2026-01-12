/**
 * Portfolio Archive Page Data
 * 
 * Real content for the Portfolio Archive page from LightSpeed WP Agency.
 * Real content extracted from https://lightspeedwp.agency/portfolio
 * 
 * **REAL CONTENT SOURCE:** https://lightspeedwp.agency/portfolio
 * **Last Updated:** 2025-01-09
 * 
 * WordPress: Maps to archive-portfolio.html template
 */

import { Briefcase, Award, Code, TrendingUp } from 'lucide-react';
import type { LucideIcon } from 'lucide-react';

/**
 * Portfolio Archive Hero Content
 */
export const portfolioArchiveHero = {
  badge: {
    icon: 'Briefcase',
    text: 'Our Work'
  },
  title: 'WordPress Projects We\'re Proud Of',
  titleHighlight: 'Proud', // Word to highlight
  description: 'Explore our portfolio of successful WordPress and WooCommerce projects. From tourism websites to eCommerce platforms, we\'ve helped businesses across industries achieve their online goals.',
  stats: [
    {
      icon: 'Briefcase',
      value: '100+',
      label: 'Projects Delivered'
    },
    {
      icon: 'Award',
      value: '22+',
      label: 'Years Experience'
    },
    {
      icon: 'TrendingUp',
      value: '100%',
      label: 'Client Satisfaction'
    }
  ]
};

/**
 * Filter Categories
 */
export interface FilterCategory {
  id: string;
  label: string;
  count?: number;
}

export const portfolioFilterCategories: FilterCategory[] = [
  { id: 'all', label: 'All Projects', count: 100 },
  { id: 'travel-tourism', label: 'Travel & Tourism', count: 25 },
  { id: 'ecommerce', label: 'E-commerce', count: 30 },
  { id: 'technology', label: 'Technology & SaaS', count: 15 },
  { id: 'healthcare', label: 'Healthcare', count: 10 },
  { id: 'nonprofit', label: 'Non-Profit', count: 8 },
  { id: 'professional-services', label: 'Professional Services', count: 12 }
];

/**
 * Portfolio Archive FAQs
 * 
 * Real FAQs about LightSpeed portfolio
 */
export interface FAQ {
  question: string;
  answer: string;
}

export const portfolioArchiveFAQs: FAQ[] = [
  {
    question: 'What types of projects do you showcase in your portfolio?',
    answer: 'Our portfolio showcases a diverse range of WordPress and WooCommerce projects across multiple industries. This includes custom WordPress development, WooCommerce e-commerce stores, tourism and travel websites, healthcare platforms, non-profit organizations, professional services sites, and more. Each project demonstrates our expertise in different aspects of WordPress development, from design systems to custom functionality.'
  },
  {
    question: 'Can you show examples of tourism and travel projects?',
    answer: 'Yes! Tourism and travel is one of our core specializations with 22+ years of experience. Our portfolio includes tour operator websites, student travel platforms, luxury travel sites, and educational travel systems. These projects feature advanced booking systems, WooCommerce integration, multi-currency support, and complex itinerary management. Contact us to see specific examples relevant to your travel business needs.'
  },
  {
    question: 'Do you have experience with WooCommerce stores?',
    answer: 'Absolutely! We are WooExpert certified, which is WooCommerce\'s highest agency certification. Our portfolio includes subscription-based stores, physical product e-commerce, digital product platforms, and complex multi-vendor marketplaces. We have extensive experience with payment gateway integration, inventory management, shipping solutions, and conversion optimization.'
  },
  {
    question: 'What technologies do you use in your projects?',
    answer: 'We specialize in modern WordPress development using Full Site Editing (FSE), block themes, Gutenberg, and custom block development. We also work extensively with WooCommerce, Advanced Custom Fields (ACF), design systems, performance optimization, accessibility (WCAG 2.1 AA), SEO, WordPress Multisite, multilingual solutions (WPML), and custom plugin development.'
  },
  {
    question: 'Can I see case studies with results and testimonials?',
    answer: 'Yes! Many of our portfolio projects include detailed case studies showcasing the challenges faced, solutions implemented, measurable results achieved, and client testimonials. For example, our ARMD Digital project demonstrates how we solved complex custom functionality requirements, improved operational efficiency, and delivered expert code quality. Click on any project to view its full case study.'
  },
  {
    question: 'How long does a typical project take?',
    answer: 'Project timelines vary based on scope and complexity. A simple website redesign typically takes 4-6 weeks, custom WooCommerce stores take 8-12 weeks, and complex enterprise projects may take 3-6 months. Our portfolio includes projects across all these ranges, from quick optimizations to comprehensive platform builds. We provide detailed timelines during the proposal stage.'
  },
  {
    question: 'What industries have you worked with?',
    answer: 'We have 22+ years of experience across multiple industries including Travel & Tourism (our primary specialty), E-commerce & Retail, Technology & SaaS, Healthcare & Medical, Education & Training, Non-Profit Organizations, Professional Services, Real Estate, Finance, Hospitality, and more. Our diverse portfolio demonstrates our ability to adapt our WordPress expertise to any industry\'s unique requirements.'
  },
  {
    question: 'Can you work on existing WordPress sites or only new builds?',
    answer: 'We work on both! Our portfolio includes new website builds, complete redesigns, performance optimizations, platform migrations (from other CMSs to WordPress), ongoing maintenance projects, and consulting engagements. Whether you need a brand new WordPress site or improvements to an existing one, we have the expertise demonstrated in our portfolio projects.'
  }
];

/**
 * CTA Section Data
 */
export const portfolioArchiveCTA = {
  title: 'Ready to Start Your WordPress Project?',
  description: 'Let\'s create something amazing together. Whether you need a new website, WooCommerce store, or ongoing support - we have the expertise to deliver results.',
  buttons: [
    {
      text: 'Get Started',
      page: 'contact',
      variant: 'default'
    },
    {
      text: 'View Services',
      page: 'services',
      variant: 'outline'
    }
  ]
};

/**
 * Portfolio Highlights
 */
export interface PortfolioHighlight {
  icon: LucideIcon;
  title: string;
  description: string;
}

export const portfolioHighlights: PortfolioHighlight[] = [
  {
    icon: Award,
    title: 'WooExpert Certified',
    description: 'Official WooCommerce Expert Partner - one of the elite few companies globally with this certification'
  },
  {
    icon: Briefcase,
    title: '100+ Projects Delivered',
    description: 'Successfully completed diverse WordPress and WooCommerce projects across multiple industries'
  },
  {
    icon: Code,
    title: 'Modern WordPress Development',
    description: 'Expertise in FSE, block themes, Gutenberg, and custom block development with design systems'
  },
  {
    icon: TrendingUp,
    title: 'Measurable Results',
    description: 'Every project includes detailed case studies with challenges, solutions, and measurable outcomes'
  }
];

/**
 * Empty State Content
 */
export const portfolioEmptyState = {
  title: 'No projects found',
  description: 'Try adjusting your filters or browse all projects to see our work.',
  buttonText: 'View All Projects',
  buttonAction: 'reset-filters'
};

/**
 * Portfolio Stats for Archive Header
 */
export const portfolioArchiveStats = {
  totalProjects: 100,
  activeClients: 120,
  yearsExperience: 22,
  clientSatisfaction: 100
};
