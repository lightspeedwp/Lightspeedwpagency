/**
 * Enhanced Portfolio Case Study Data
 *
 * Comprehensive case study data for portfolio projects
 * with challenge/solution/results, metrics, and technology stack
 *
 * **WordPress Mapping:**
 * - Custom fields for portfolio projects
 * - Case study sections (challenge/solution/results)
 * - Metrics data
 * - Technology stack taxonomy
 */

import {
  Code,
  Database,
  Globe,
  Cpu,
  FigmaLogo,
  GithubLogo,
  Lightning,
} from '@phosphor-icons/react';
import type { CaseStudySection } from '../components/patterns/ProjectCaseStudy';
import type { Technology } from '../components/patterns/TechnologyStack';

/**
 * ARMD Digital Case Study
 */
export const armdCaseStudy = {
  challenge: {
    title: 'The Challenge',
    description:
      'ARMD Digital needed a robust e-commerce platform to sell their email security services while maintaining high performance and accessibility standards.',
    content: [
      'ARMD Digital was facing challenges with their existing website platform that couldn\'t handle the complex requirements of selling email security subscriptions.',
      'Their previous agency struggled to implement proper WooCommerce integration, resulting in poor user experience and abandoned carts.',
      'The site needed to meet strict WCAG 2.1 AA accessibility standards for government clients while maintaining fast load times and seamless payment processing.',
    ],
    metrics: [
      {
        label: 'Cart Abandonment Rate',
        value: '68%',
        change: 'Before launch',
      },
      {
        label: 'Page Load Time',
        value: '4.2s',
        change: 'Before optimization',
      },
      {
        label: 'Accessibility Score',
        value: 'C',
        change: 'Previous site',
      },
    ],
    image: 'https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=1200',
  } as CaseStudySection,

  solution: {
    title: 'The Solution',
    description:
      'LightSpeed developed a custom WordPress block theme with WooCommerce integration, focusing on performance, accessibility, and user experience.',
    content: [
      'We built a custom WordPress block theme using the latest Full Site Editing (FSE) capabilities, giving ARMD complete control over their design system.',
      'Custom WooCommerce integration with subscription management, automated invoicing, and seamless payment gateway integration through Stripe and PayPal.',
      'Implemented comprehensive accessibility features including keyboard navigation, screen reader support, and WCAG 2.1 AA compliant color contrast ratios.',
      'Performance optimization through lazy loading, critical CSS, and image optimization reduced page load times by 65%.',
    ],
    metrics: [
      {
        label: 'Development Time',
        value: '4 months',
        change: 'On schedule',
      },
      {
        label: 'Team Members',
        value: '5',
        change: 'Specialists',
      },
      {
        label: 'Custom Features',
        value: '12+',
        change: 'Built from scratch',
      },
    ],
    image:
      'https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=1200',
  } as CaseStudySection,

  results: {
    title: 'The Results',
    description:
      'The new platform delivered exceptional performance improvements, increased conversions, and full accessibility compliance.',
    content: [
      'Cart abandonment rate dropped from 68% to 24%, resulting in a 64% increase in completed checkouts.',
      'Page load times improved by 65%, with average load time reduced from 4.2s to 1.5s across all pages.',
      'Achieved WCAG 2.1 AA compliance with a perfect accessibility score, opening doors to government contracts.',
      'Mobile conversion rate increased by 82% due to responsive design and mobile-optimized checkout flow.',
    ],
    metrics: [
      {
        label: 'Cart Abandonment',
        value: '24%',
        change: '↓ 64% reduction',
      },
      {
        label: 'Page Load Time',
        value: '1.5s',
        change: '↓ 65% faster',
      },
      {
        label: 'Accessibility',
        value: '100%',
        change: 'WCAG 2.1 AA',
      },
      {
        label: 'Mobile Conversions',
        value: '+82%',
        change: 'Year over year',
      },
    ],
    image:
      'https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=1200',
  } as CaseStudySection,
};

/**
 * Technology Stack for ARMD Digital
 */
export const armdTechnologyStack: Technology[] = [
  // Frontend
  {
    id: 'wordpress',
    name: 'WordPress 6.4',
    icon: Code,
    category: 'frontend',
    color: '#21759b',
  },
  {
    id: 'react',
    name: 'React',
    icon: Code,
    category: 'frontend',
    color: '#61dafb',
  },
  {
    id: 'gutenberg',
    name: 'Gutenberg Blocks',
    icon: Code,
    category: 'frontend',
    color: '#8b5cf6',
  },

  // Backend
  {
    id: 'php',
    name: 'PHP 8.2',
    icon: Database,
    category: 'backend',
    color: '#777bb4',
  },
  {
    id: 'woocommerce',
    name: 'WooCommerce 8.5',
    icon: Database,
    category: 'backend',
    color: '#96588a',
  },
  {
    id: 'mysql',
    name: 'MySQL 8.0',
    icon: Database,
    category: 'backend',
    color: '#00758f',
  },

  // DevOps
  {
    id: 'cloudflare',
    name: 'Cloudflare CDN',
    icon: Globe,
    category: 'devops',
    color: '#f38020',
  },
  {
    id: 'github-actions',
    name: 'GitHub Actions',
    icon: GithubLogo,
    category: 'devops',
    color: '#2088ff',
  },

  // Tools
  {
    id: 'stripe',
    name: 'Stripe',
    icon: Cpu,
    category: 'tools',
    color: '#635bff',
  },
  {
    id: 'acf',
    name: 'Advanced Custom Fields',
    icon: Code,
    category: 'tools',
    color: '#8b5cf6',
  },

  // Design
  {
    id: 'figma',
    name: 'Figma',
    icon: FigmaLogo,
    category: 'design',
    color: '#f24e1e',
  },
];

/**
 * Generic Case Study Template
 * Use for other projects without specific case study data
 */
export const genericCaseStudy = {
  challenge: {
    title: 'The Challenge',
    description:
      'Our client needed a modern, performant website that could handle complex requirements while maintaining accessibility standards.',
    content: [
      'The existing platform was outdated and couldn\'t meet modern web standards.',
      'Performance issues were causing high bounce rates and poor user experience.',
      'Accessibility compliance was required but not implemented properly.',
    ],
    metrics: [
      {
        label: 'Bounce Rate',
        value: '65%',
        change: 'Before launch',
      },
      {
        label: 'Load Time',
        value: '5s',
        change: 'Before optimization',
      },
    ],
  } as CaseStudySection,

  solution: {
    title: 'The Solution',
    description:
      'We developed a custom WordPress solution with modern architecture, focusing on performance and user experience.',
    content: [
      'Built with WordPress block theme architecture for maximum flexibility.',
      'Implemented comprehensive performance optimizations.',
      'Ensured full WCAG 2.1 AA accessibility compliance.',
    ],
    metrics: [
      {
        label: 'Development Time',
        value: '3-4 months',
        change: 'Average',
      },
      {
        label: 'Custom Features',
        value: '10+',
        change: 'Implemented',
      },
    ],
  } as CaseStudySection,

  results: {
    title: 'The Results',
    description:
      'The new platform delivered significant improvements in performance, user engagement, and accessibility.',
    content: [
      'Page load times improved by 60%+ across all devices.',
      'Achieved full WCAG 2.1 AA accessibility compliance.',
      'User engagement metrics increased significantly.',
    ],
    metrics: [
      {
        label: 'Performance',
        value: '+60%',
        change: 'Faster load times',
      },
      {
        label: 'Accessibility',
        value: '100%',
        change: 'WCAG 2.1 AA',
      },
      {
        label: 'Engagement',
        value: '+45%',
        change: 'Average increase',
      },
    ],
  } as CaseStudySection,
};

/**
 * Generic Technology Stack
 * Common technologies used across most projects
 */
export const genericTechnologyStack: Technology[] = [
  {
    id: 'wordpress',
    name: 'WordPress',
    icon: Code,
    category: 'frontend',
    color: '#21759b',
  },
  {
    id: 'php',
    name: 'PHP',
    icon: Database,
    category: 'backend',
    color: '#777bb4',
  },
  {
    id: 'mysql',
    name: 'MySQL',
    icon: Database,
    category: 'backend',
    color: '#00758f',
  },
  {
    id: 'react',
    name: 'React',
    icon: Code,
    category: 'frontend',
    color: '#61dafb',
  },
  {
    id: 'cloudflare',
    name: 'Cloudflare',
    icon: Globe,
    category: 'devops',
    color: '#f38020',
  },
];