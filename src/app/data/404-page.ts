/**
 * 404 Error Page Data
 * 
 * Real content for 404 error page from LightSpeed WP Agency.
 * 
 * **CONTENT:** Custom 404 error messaging with helpful navigation
 * **Last Updated:** 2025-01-09
 * 
 * WordPress: Maps to templates/404.html
 */

import { 
  Home,
  FileText,
  Users,
  Briefcase,
  Mail,
  Search,
  ArrowRight
} from 'lucide-react';
import type { LucideIcon } from 'lucide-react';

/**
 * 404 Page Hero Content
 */
export const error404Hero = {
  errorCode: '404',
  title: 'Page Not Found',
  description: 'Sorry, we couldn\'t find the page you\'re looking for. The page may have been moved, deleted, or the URL might be incorrect.',
  image: 'https://images.unsplash.com/photo-1584824486509-112e4181ff6b?w=800&q=80' // Confused person illustration
};

/**
 * Helpful Navigation Link Interface
 */
export interface HelpfulLink {
  icon: LucideIcon;
  title: string;
  description: string;
  page: string;
}

/**
 * Helpful Navigation Links
 */
export const helpfulLinks: HelpfulLink[] = [
  {
    icon: Home,
    title: 'Go to Homepage',
    description: 'Start from the beginning and explore our services',
    page: 'home'
  },
  {
    icon: Briefcase,
    title: 'View Our Services',
    description: 'Discover our WordPress and WooCommerce solutions',
    page: 'services'
  },
  {
    icon: FileText,
    title: 'Read Our Blog',
    description: 'Get WordPress tips, tutorials, and industry insights',
    page: 'blog'
  },
  {
    icon: Users,
    title: 'About Our Team',
    description: 'Meet the experts behind LightSpeed WP',
    page: 'about'
  },
  {
    icon: Mail,
    title: 'Contact Us',
    description: 'Get in touch with our team for help',
    page: 'contact'
  }
];

/**
 * Search Suggestions Interface
 */
export interface SearchSuggestion {
  query: string;
  category: string;
}

/**
 * Popular Search Suggestions
 */
export const searchSuggestions: SearchSuggestion[] = [
  { query: 'WordPress development', category: 'Services' },
  { query: 'WooCommerce setup', category: 'Services' },
  { query: 'Website security', category: 'Services' },
  { query: 'Hosting plans', category: 'Hosting' },
  { query: 'Portfolio projects', category: 'Work' },
  { query: 'Pricing', category: 'Information' }
];

/**
 * Common Issues & Solutions
 */
export interface CommonIssue {
  question: string;
  answer: string;
  actionText?: string;
  actionPage?: string;
}

export const commonIssues: CommonIssue[] = [
  {
    question: 'Looking for our services?',
    answer: 'We offer WordPress development, WooCommerce solutions, website security, and managed hosting.',
    actionText: 'View All Services',
    actionPage: 'services'
  },
  {
    question: 'Need to get in touch?',
    answer: 'Our team is here to help with your WordPress project. Contact us for a free consultation.',
    actionText: 'Contact Our Team',
    actionPage: 'contact'
  },
  {
    question: 'Want to see our work?',
    answer: 'Check out our portfolio of WordPress and WooCommerce projects for clients worldwide.',
    actionText: 'View Portfolio',
    actionPage: 'portfolio'
  },
  {
    question: 'Looking for pricing?',
    answer: 'Transparent pricing for all our services, from one-time projects to ongoing support packages.',
    actionText: 'View Pricing',
    actionPage: 'pricing'
  }
];

/**
 * 404 CTA
 */
export const error404CTA = {
  title: 'Still Can\'t Find What You\'re Looking For?',
  description: 'Our team is here to help. Send us a message and we\'ll get back to you within 24 hours.',
  buttons: [
    {
      text: 'Contact Support',
      page: 'contact',
      variant: 'default'
    },
    {
      text: 'View Site Map',
      page: 'home', // In a real site, this would be /sitemap
      variant: 'outline'
    }
  ]
};

/**
 * Helper Functions
 */

/**
 * Get 404 page data
 */
export function get404PageData() {
  return {
    hero: error404Hero,
    helpfulLinks,
    searchSuggestions,
    commonIssues,
    cta: error404CTA
  };
}

/**
 * Get helpful links by category
 */
export function getHelpfulLinksByType(type: 'navigation' | 'content' | 'contact') {
  if (type === 'navigation') {
    return helpfulLinks.filter(link => 
      link.page === 'home' || link.page === 'services'
    );
  }
  if (type === 'content') {
    return helpfulLinks.filter(link => 
      link.page === 'blog' || link.page === 'about'
    );
  }
  if (type === 'contact') {
    return helpfulLinks.filter(link => 
      link.page === 'contact'
    );
  }
  return helpfulLinks;
}
