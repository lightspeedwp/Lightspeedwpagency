/**
 * Detailed Solutions Data
 * 
 * Extended solution information for individual solution pages.
 * Mock data based on real service offerings.
 * 
 * **Last Updated:** 2025-02-17
 */

import { ShoppingBag, CreditCard, Truck, ChartBar, Globe, ShieldCheck } from '@phosphor-icons/react';
import type { UniversalIcon } from '../utils/icon-map';

/**
 * Solution Feature Interface
 */
export interface SolutionFeature {
  title: string;
  description: string;
  icon?: UniversalIcon;
}

/**
 * Detailed Solution Interface
 */
export interface DetailedSolution {
  id: string;
  slug: string;
  headline: string;
  tagline: string;
  description: string;
  heroImage?: string; // Placeholder for now
  
  challenges: {
    title: string;
    items: string[];
  };
  
  approach: {
    title: string;
    description: string;
    steps: {
      number: number;
      title: string;
      description: string;
    }[];
  };
  
  features: SolutionFeature[];
  
  techStack: {
    title: string;
    description: string;
    items: string[];
  };
  
  results: {
    stat: string;
    label: string;
    description: string;
  }[];
  
  cta: {
    title: string;
    description: string;
    buttonText: string;
    buttonPage: string;
  };
}

/**
 * WooCommerce Solution - Detailed Content
 */
export const woocommerceSolutionDetailed: DetailedSolution = {
  id: 'woocommerce-solution',
  slug: 'woocommerce-solution',
  headline: 'Sell Anywhere, Scale Everywhere',
  tagline: 'High-performance WooCommerce stores designed for conversion, speed, and global growth.',
  description: 'We build custom e-commerce experiences that turn visitors into loyal customers. No generic templates, just pure performance.',
  
  challenges: {
    title: 'E-commerce is Hard. We Make It Easy.',
    items: [
      'Slow loading product pages killing conversions?',
      'Checkout process too complicated?',
      'Mobile users abandoning carts?',
      'Struggling with inventory management?',
      'Security concerns keeping you up at night?'
    ]
  },
  
  approach: {
    title: 'Our Commerce-First Approach',
    description: 'We don\'t just build stores; we build revenue engines.',
    steps: [
      {
        number: 1,
        title: 'Strategy & UX',
        description: 'Mapping the customer journey to minimize friction and maximize average order value.'
      },
      {
        number: 2,
        title: 'Custom Development',
        description: 'Building a bespoke theme and functionality tailored to your unique products.'
      },
      {
        number: 3,
        title: 'Performance Tuning',
        description: 'Optimizing for Core Web Vitals to ensure instant load times even with thousands of products.'
      },
      {
        number: 4,
        title: 'Integration',
        description: 'Connecting your store with ERPs, CRMs, and marketing automation tools.'
      },
      {
        number: 5,
        title: 'Launch & Growth',
        description: 'Executing a flawless launch followed by data-driven optimization.'
      }
    ]
  },
  
  features: [
    {
      title: 'Custom Product Experience',
      description: 'Showcase your products with interactive galleries, 360 views, and custom configurators.',
      icon: ShoppingBag
    },
    {
      title: 'Frictionless Checkout',
      description: 'Streamlined one-page checkout with Apple Pay, Google Pay, and localized payment options.',
      icon: CreditCard
    },
    {
      title: 'Smart Logistics',
      description: 'Automated shipping calculations, tracking updates, and inventory synchronization.',
      icon: Truck
    },
    {
      title: 'Conversion Analytics',
      description: 'Deep insights into shopper behavior, cart abandonment, and sales performance.',
      icon: ChartBar
    },
    {
      title: 'Global Scale',
      description: 'Multi-currency, multi-language support to sell to customers around the world.',
      icon: Globe
    },
    {
      title: 'Enterprise Security',
      description: 'PCI-DSS compliance, fraud protection, and automated backups to keep your data safe.',
      icon: ShieldCheck
    }
  ],
  
  techStack: {
    title: 'Built on the Best',
    description: 'We use a modern stack to ensure stability and speed.',
    items: [
      'WooCommerce',
      'WordPress FSE',
      'React (Custom Blocks)',
      'Redis Caching',
      'Stripe / PayPal',
      'ElasticSearch'
    ]
  },
  
  results: [
    {
      stat: '35%',
      label: 'Avg. Conversion Increase',
      description: 'Clients see a significant boost in sales after re-platforming.'
    },
    {
      stat: '0.8s',
      label: 'Page Load Time',
      description: 'Sub-second loading for product listings and detail pages.'
    },
    {
      stat: '99.9%',
      label: 'Uptime',
      description: 'Stable hosting infrastructure that handles traffic spikes.'
    }
  ],
  
  cta: {
    title: 'Ready to Scale Your Store?',
    description: 'Let\'s build an e-commerce platform that grows with your business. Schedule a consultation today.',
    buttonText: 'Start Your Store Project',
    buttonPage: 'contact'
  }
};

export const detailedSolutions: DetailedSolution[] = [
  woocommerceSolutionDetailed
];