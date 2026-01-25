/**
 * Pricing Page Data
 * 
 * Real content for Pricing page from LightSpeed WP Agency.
 * Real content extracted from https://lightspeedwp.agency
 * 
 * **REAL CONTENT SOURCE:** https://lightspeedwp.agency/pricing
 * **Last Updated:** 2025-01-09
 * 
 * WordPress: Maps to templates/page-pricing.html
 */

import { 
  DollarSign,
  Zap,
  Rocket,
  Check,
  X
} from 'lucide-react';
import type { LucideIcon } from 'lucide-react';

/**
 * Pricing Hero Content
 */
export const pricingPageHero = {
  badge: {
    icon: DollarSign,
    text: 'Transparent Pricing'
  },
  title: 'Simple, Transparent Pricing',
  titleHighlight: 'Transparent', // Word to highlight
  tagline: 'Choose the right plan for your WordPress project',
  description: 'No hidden fees, no surprises. Clear pricing for WordPress development, support, and hosting services. All packages include our quality guarantee and dedicated support.'
};

/**
 * Pricing Plan
 */
export interface PricingPlan {
  id: string;
  name: string;
  icon: LucideIcon;
  tagline: string;
  description: string;
  price: {
    amount: string;
    period: string;
    display: string;
  };
  features: Array<{
    name: string;
    included: boolean;
  }>;
  highlights: string[];
  cta: {
    text: string;
    page: string;
  };
  popular?: boolean;
}

/**
 * Website Build Packages
 */
export const websitePackages: PricingPlan[] = [
  {
    id: 'starter',
    name: 'Starter Website',
    icon: Zap,
    tagline: 'Perfect for small businesses',
    description: 'A professional WordPress website with essential features to get your business online quickly.',
    price: {
      amount: '$5,000',
      period: 'one-time',
      display: '$5,000'
    },
    features: [
      { name: 'Up to 5 pages', included: true },
      { name: 'Mobile responsive design', included: true },
      { name: 'Contact form integration', included: true },
      { name: 'SEO basics setup', included: true },
      { name: 'Google Analytics', included: true },
      { name: 'Content training (1 hour)', included: true },
      { name: 'Stock photography (10 images)', included: true },
      { name: 'Custom design mockups', included: false },
      { name: 'E-commerce functionality', included: false },
      { name: 'Custom integrations', included: false },
      { name: 'Advanced animations', included: false },
      { name: 'Multilingual support', included: false }
    ],
    highlights: [
      'Fast 4-week turnaround',
      'WCAG AA accessible',
      'Core Web Vitals optimized',
      '30-day support included'
    ],
    cta: {
      text: 'Get Started',
      page: 'contact'
    }
  },
  {
    id: 'professional',
    name: 'Professional Website',
    icon: Rocket,
    tagline: 'Most popular for growing businesses',
    description: 'A custom WordPress website with advanced features, integrations, and professional design.',
    price: {
      amount: '$10,000',
      period: 'one-time',
      display: '$10,000'
    },
    features: [
      { name: 'Up to 15 pages', included: true },
      { name: 'Mobile responsive design', included: true },
      { name: 'Contact form integration', included: true },
      { name: 'SEO optimization', included: true },
      { name: 'Google Analytics + Search Console', included: true },
      { name: 'Content training (2 hours)', included: true },
      { name: 'Professional photography', included: true },
      { name: 'Custom design mockups', included: true },
      { name: 'Basic e-commerce (WooCommerce)', included: true },
      { name: 'Custom integrations (2)', included: true },
      { name: 'Advanced animations', included: true },
      { name: 'Multilingual support', included: false }
    ],
    highlights: [
      '6-8 week turnaround',
      'WCAG AA accessible',
      'Performance optimized',
      '60-day support included',
      'Priority support'
    ],
    cta: {
      text: 'Get Started',
      page: 'contact'
    },
    popular: true
  },
  {
    id: 'enterprise',
    name: 'Enterprise Website',
    icon: Rocket,
    tagline: 'For complex business needs',
    description: 'A comprehensive WordPress solution with unlimited pages, custom features, and dedicated support.',
    price: {
      amount: '$20,000+',
      period: 'one-time',
      display: '$20,000+'
    },
    features: [
      { name: 'Unlimited pages', included: true },
      { name: 'Mobile responsive design', included: true },
      { name: 'Advanced forms', included: true },
      { name: 'Enterprise SEO', included: true },
      { name: 'Analytics dashboard', included: true },
      { name: 'Dedicated training sessions', included: true },
      { name: 'Professional photography', included: true },
      { name: 'Custom design system', included: true },
      { name: 'Full e-commerce solution', included: true },
      { name: 'Unlimited custom integrations', included: true },
      { name: 'Advanced animations & interactions', included: true },
      { name: 'Multilingual support', included: true }
    ],
    highlights: [
      '12+ week turnaround',
      'WCAG AA/AAA accessible',
      'Enterprise performance',
      '90-day support included',
      'Dedicated project manager',
      'White-glove service'
    ],
    cta: {
      text: 'Contact Sales',
      page: 'contact'
    }
  }
];

/**
 * Support & Maintenance Plans
 */
export const supportPackages: PricingPlan[] = [
  {
    id: 'essential',
    name: 'Essential Support',
    icon: Zap,
    tagline: 'Basic maintenance and updates',
    description: 'Keep your WordPress site secure and up-to-date with our essential support package.',
    price: {
      amount: '$200',
      period: 'per month',
      display: '$200/mo'
    },
    features: [
      { name: 'WordPress core updates', included: true },
      { name: 'Plugin updates', included: true },
      { name: 'Theme updates', included: true },
      { name: 'Security monitoring', included: true },
      { name: 'Daily backups (30-day retention)', included: true },
      { name: 'Performance monitoring', included: true },
      { name: 'Monthly reports', included: true },
      { name: 'Bug fixes (2 hours/month)', included: true },
      { name: 'Priority support (24-hour response)', included: false },
      { name: 'Emergency support', included: false },
      { name: 'Content updates', included: false },
      { name: 'Custom development', included: false }
    ],
    highlights: [
      '24-hour response time',
      'Business hours support',
      'Monthly health reports'
    ],
    cta: {
      text: 'Get Started',
      page: 'contact'
    }
  },
  {
    id: 'professional-support',
    name: 'Professional Support',
    icon: Rocket,
    tagline: 'Most popular for active sites',
    description: 'Comprehensive support with priority response times and enhanced monitoring.',
    price: {
      amount: '$500',
      period: 'per month',
      display: '$500/mo'
    },
    features: [
      { name: 'WordPress core updates', included: true },
      { name: 'Plugin updates', included: true },
      { name: 'Theme updates', included: true },
      { name: 'Security monitoring & hardening', included: true },
      { name: 'Daily backups (90-day retention)', included: true },
      { name: 'Performance monitoring & optimization', included: true },
      { name: 'Weekly reports', included: true },
      { name: 'Bug fixes (5 hours/month)', included: true },
      { name: 'Priority support (4-hour response)', included: true },
      { name: 'Emergency support (1-hour response)', included: true },
      { name: 'Content updates (2 hours/month)', included: true },
      { name: 'Custom development', included: false }
    ],
    highlights: [
      '4-hour response time',
      '1-hour emergency response',
      'Priority queue',
      'Proactive monitoring'
    ],
    cta: {
      text: 'Get Started',
      page: 'contact'
    },
    popular: true
  },
  {
    id: 'enterprise-support',
    name: 'Enterprise Support',
    icon: Rocket,
    tagline: 'For mission-critical websites',
    description: 'White-glove support with dedicated account manager and guaranteed uptime.',
    price: {
      amount: '$1,000+',
      period: 'per month',
      display: '$1,000+/mo'
    },
    features: [
      { name: 'WordPress core updates', included: true },
      { name: 'Plugin updates', included: true },
      { name: 'Theme updates', included: true },
      { name: 'Advanced security & malware protection', included: true },
      { name: 'Real-time backups (unlimited retention)', included: true },
      { name: 'Advanced performance optimization', included: true },
      { name: 'Real-time monitoring dashboard', included: true },
      { name: 'Bug fixes (unlimited)', included: true },
      { name: 'Priority support (1-hour response)', included: true },
      { name: 'Emergency support (15-minute response)', included: true },
      { name: 'Content updates (unlimited)', included: true },
      { name: 'Custom development (10 hours/month)', included: true }
    ],
    highlights: [
      '1-hour response time',
      '15-minute emergency response',
      'Dedicated account manager',
      '99.9% uptime SLA',
      'White-glove service'
    ],
    cta: {
      text: 'Contact Sales',
      page: 'contact'
    }
  }
];

/**
 * Feature Comparison Data
 */
export const featureComparison = {
  title: 'Compare All Features',
  description: 'See what\'s included in each plan',
  categories: [
    {
      name: 'Core Features',
      features: [
        {
          name: 'Pages',
          starter: 'Up to 5',
          professional: 'Up to 15',
          enterprise: 'Unlimited'
        },
        {
          name: 'Mobile Responsive',
          starter: true,
          professional: true,
          enterprise: true
        },
        {
          name: 'SEO Optimization',
          starter: 'Basic',
          professional: 'Advanced',
          enterprise: 'Enterprise'
        },
        {
          name: 'Analytics',
          starter: 'Google Analytics',
          professional: 'GA + Search Console',
          enterprise: 'Custom Dashboard'
        }
      ]
    },
    {
      name: 'Design & Customization',
      features: [
        {
          name: 'Custom Design',
          starter: false,
          professional: true,
          enterprise: true
        },
        {
          name: 'Design Mockups',
          starter: false,
          professional: true,
          enterprise: true
        },
        {
          name: 'Photography',
          starter: 'Stock (10)',
          professional: 'Professional',
          enterprise: 'Professional'
        },
        {
          name: 'Animations',
          starter: false,
          professional: 'Basic',
          enterprise: 'Advanced'
        }
      ]
    },
    {
      name: 'Support & Training',
      features: [
        {
          name: 'Training Sessions',
          starter: '1 hour',
          professional: '2 hours',
          enterprise: 'Dedicated'
        },
        {
          name: 'Post-launch Support',
          starter: '30 days',
          professional: '60 days',
          enterprise: '90 days'
        },
        {
          name: 'Project Manager',
          starter: false,
          professional: false,
          enterprise: true
        }
      ]
    }
  ]
};

/**
 * Payment Options
 */
export const paymentOptions = {
  title: 'Flexible Payment Options',
  description: 'We offer payment plans to fit your budget',
  options: [
    {
      name: 'Full Payment',
      description: 'Pay in full and save 5%',
      discount: '5% off',
      terms: 'One-time payment before project start'
    },
    {
      name: 'Split Payment',
      description: 'Most popular payment option',
      discount: 'No fees',
      terms: '50% upfront, 50% on completion'
    },
    {
      name: 'Milestone Payment',
      description: 'For larger projects',
      discount: 'Available',
      terms: 'Payment split across 3-4 milestones'
    }
  ]
};

/**
 * Pricing CTA
 */
export const pricingCTA = {
  title: 'Ready to Get Started?',
  description: 'Let\'s discuss your project and create a custom solution that fits your needs and budget.',
  buttons: [
    {
      text: 'Schedule Consultation',
      page: 'contact',
      variant: 'default'
    },
    {
      text: 'View Portfolio',
      page: 'portfolio-archive',
      variant: 'outline'
    }
  ]
};

/**
 * Helper Functions
 */

/**
 * Get pricing page data
 */
export function getPricingPageData() {
  return {
    hero: pricingPageHero,
    websitePackages,
    supportPackages,
    featureComparison,
    paymentOptions,
    cta: pricingCTA
  };
}

/**
 * Get all pricing plans
 */
export function getAllPricingPlans() {
  return [...websitePackages, ...supportPackages];
}

/**
 * Get plan by ID
 */
export function getPlanById(id: string) {
  return getAllPricingPlans().find(plan => plan.id === id);
}

/**
 * Get popular plans
 */
export function getPopularPlans() {
  return getAllPricingPlans().filter(plan => plan.popular);
}
