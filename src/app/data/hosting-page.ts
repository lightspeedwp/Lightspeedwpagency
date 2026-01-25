/**
 * Hosting Page Data
 * 
 * Real content for Hosting page from LightSpeed WP Agency.
 * 
 * **REAL CONTENT SOURCE:** https://lightspeedwp.agency/hosting
 * **Last Updated:** 2025-01-09
 * 
 * WordPress: Maps to templates/page-hosting.html
 */

import { 
  Server,
  Zap,
  Shield,
  Clock,
  HeadphonesIcon,
  Globe,
  HardDrive,
  Lock,
  Activity,
  Database,
  RefreshCw,
  Check,
  X
} from 'lucide-react';
import type { LucideIcon } from 'lucide-react';

/**
 * Hosting Hero Content
 */
export const hostingPageHero = {
  badge: {
    icon: Server,
    text: 'Managed WordPress Hosting'
  },
  title: 'Lightning-Fast WordPress Hosting',
  titleHighlight: 'Lightning-Fast', // Word to highlight
  tagline: 'Blazing fast, ultra-secure, expertly managed',
  description: 'Premium WordPress hosting optimized for speed, security, and reliability. Our managed hosting includes daily backups, automatic updates, and 24/7 expert support.'
};

/**
 * Hosting Plan Interface
 */
export interface HostingPlan {
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
  specifications: {
    sites: string;
    storage: string;
    visits: string;
    ssl: string;
  };
  cta: {
    text: string;
    page: string;
  };
  popular?: boolean;
}

/**
 * Hosting Plans
 */
export const hostingPlans: HostingPlan[] = [
  {
    id: 'starter',
    name: 'Starter Hosting',
    icon: Zap,
    tagline: 'Perfect for small business websites',
    description: 'Essential managed WordPress hosting with automatic updates, daily backups, and expert support.',
    price: {
      amount: '$49',
      period: 'per month',
      display: '$49/mo'
    },
    specifications: {
      sites: '1 WordPress site',
      storage: '20 GB SSD storage',
      visits: '50,000 monthly visits',
      ssl: 'Free SSL certificate'
    },
    features: [
      { name: '1 WordPress site', included: true },
      { name: '20 GB SSD storage', included: true },
      { name: '50,000 monthly visits', included: true },
      { name: 'Free SSL certificate', included: true },
      { name: 'Daily automated backups', included: true },
      { name: 'WordPress auto-updates', included: true },
      { name: 'Malware scanning', included: true },
      { name: 'Email support (24hr response)', included: true },
      { name: 'CDN integration', included: false },
      { name: 'Staging environment', included: false },
      { name: 'Priority support', included: false },
      { name: 'White-label hosting', included: false }
    ],
    highlights: [
      '99.9% uptime guarantee',
      'Free migration included',
      'Daily backups',
      'Expert WordPress support'
    ],
    cta: {
      text: 'Get Started',
      page: 'contact'
    }
  },
  {
    id: 'professional',
    name: 'Professional Hosting',
    icon: Server,
    tagline: 'Most popular for growing businesses',
    description: 'Advanced WordPress hosting with staging environments, CDN, priority support, and enhanced performance.',
    price: {
      amount: '$99',
      period: 'per month',
      display: '$99/mo'
    },
    specifications: {
      sites: '3 WordPress sites',
      storage: '50 GB SSD storage',
      visits: '150,000 monthly visits',
      ssl: 'Free SSL certificates'
    },
    features: [
      { name: '3 WordPress sites', included: true },
      { name: '50 GB SSD storage', included: true },
      { name: '150,000 monthly visits', included: true },
      { name: 'Free SSL certificates', included: true },
      { name: 'Daily automated backups', included: true },
      { name: 'WordPress auto-updates', included: true },
      { name: 'Malware scanning & removal', included: true },
      { name: 'Priority support (4hr response)', included: true },
      { name: 'CDN integration', included: true },
      { name: 'Staging environment', included: true },
      { name: 'Performance optimization', included: true },
      { name: 'White-label hosting', included: false }
    ],
    highlights: [
      '99.9% uptime guarantee',
      'Free migration included',
      'Staging environments',
      'Priority support',
      'CDN included',
      'Performance monitoring'
    ],
    cta: {
      text: 'Get Started',
      page: 'contact'
    },
    popular: true
  },
  {
    id: 'enterprise',
    name: 'Enterprise Hosting',
    icon: Server,
    tagline: 'For high-traffic mission-critical sites',
    description: 'Premium enterprise WordPress hosting with dedicated resources, white-label options, and guaranteed performance.',
    price: {
      amount: '$199',
      period: 'per month',
      display: '$199/mo'
    },
    specifications: {
      sites: '10 WordPress sites',
      storage: '100 GB SSD storage',
      visits: '500,000 monthly visits',
      ssl: 'Free SSL certificates'
    },
    features: [
      { name: '10 WordPress sites', included: true },
      { name: '100 GB SSD storage', included: true },
      { name: '500,000 monthly visits', included: true },
      { name: 'Free SSL certificates', included: true },
      { name: 'Real-time automated backups', included: true },
      { name: 'WordPress auto-updates', included: true },
      { name: 'Advanced security & malware protection', included: true },
      { name: 'Priority support (1hr response)', included: true },
      { name: 'Enterprise CDN', included: true },
      { name: 'Multiple staging environments', included: true },
      { name: 'Advanced performance optimization', included: true },
      { name: 'White-label hosting', included: true }
    ],
    highlights: [
      '99.99% uptime SLA',
      'Free migration included',
      'Dedicated resources',
      '1-hour priority support',
      'Enterprise CDN',
      'White-label options',
      'Dedicated account manager'
    ],
    cta: {
      text: 'Contact Sales',
      page: 'contact'
    }
  }
];

/**
 * Hosting Features
 */
export interface HostingFeature {
  icon: LucideIcon;
  title: string;
  description: string;
}

export const hostingFeatures: HostingFeature[] = [
  {
    icon: Zap,
    title: 'Lightning-Fast Performance',
    description: 'Optimized server configuration with SSD storage, built-in caching, and CDN integration for blazing fast load times.'
  },
  {
    icon: Shield,
    title: 'Advanced Security',
    description: 'Enterprise-grade security with malware scanning, DDoS protection, firewall, and automatic security updates.'
  },
  {
    icon: Database,
    title: 'Daily Automated Backups',
    description: 'Your site is backed up daily with 30-day retention. Restore your site with one click if anything goes wrong.'
  },
  {
    icon: Activity,
    title: 'Performance Monitoring',
    description: 'Real-time uptime monitoring with instant alerts. We proactively monitor your site 24/7 to ensure peak performance.'
  },
  {
    icon: RefreshCw,
    title: 'Automatic Updates',
    description: 'WordPress core, themes, and plugins are automatically updated to keep your site secure and running smoothly.'
  },
  {
    icon: HeadphonesIcon,
    title: '24/7 Expert Support',
    description: 'Direct access to WordPress experts via email, chat, or phone. Get help when you need it from people who know WordPress.'
  },
  {
    icon: Globe,
    title: 'Global CDN Included',
    description: 'Content delivery network included for faster page loads worldwide. Your site will be fast no matter where visitors are located.'
  },
  {
    icon: Lock,
    title: 'Free SSL Certificates',
    description: 'Free SSL certificates installed automatically for secure HTTPS connections. Keep your visitors safe and boost SEO.'
  }
];

/**
 * Why Choose Our Hosting
 */
export const whyChooseHosting = {
  title: 'Why Choose Our WordPress Hosting?',
  description: 'We specialize exclusively in WordPress hosting, so you get expert support and optimized performance.',
  benefits: [
    {
      title: 'WordPress Experts',
      description: 'Our support team consists of WordPress developers and specialists who understand the platform inside and out.'
    },
    {
      title: 'Optimized Infrastructure',
      description: 'Our servers are configured specifically for WordPress with built-in caching, CDN, and performance optimization.'
    },
    {
      title: 'Proactive Monitoring',
      description: 'We monitor your site 24/7 and fix issues before they impact your visitors or business.'
    },
    {
      title: 'Migration Included',
      description: 'Free site migration from your current host. We handle everything so you can switch with zero downtime.'
    }
  ]
};

/**
 * Hosting Guarantees
 */
export const hostingGuarantees = {
  title: 'Our Hosting Guarantees',
  guarantees: [
    {
      icon: Clock,
      title: '99.9% Uptime Guarantee',
      description: 'We guarantee 99.9% uptime or we credit your account. Your site will always be available when you need it.'
    },
    {
      icon: Shield,
      title: 'Security Guarantee',
      description: 'If your site is hacked while hosted with us, we will clean it up for free and help you secure it.'
    },
    {
      icon: HardDrive,
      title: 'Data Protection Guarantee',
      description: 'Daily backups with 30-day retention ensure your data is always safe and recoverable.'
    }
  ]
};

/**
 * Hosting CTA
 */
export const hostingCTA = {
  title: 'Ready to Experience Lightning-Fast Hosting?',
  description: 'Get started with our managed WordPress hosting today. Free migration and 30-day money-back guarantee.',
  buttons: [
    {
      text: 'Get Started Now',
      page: 'contact',
      variant: 'default'
    },
    {
      text: 'View Pricing',
      page: 'pricing',
      variant: 'outline'
    }
  ]
};

/**
 * Helper Functions
 */

/**
 * Get hosting page data
 */
export function getHostingPageData() {
  return {
    hero: hostingPageHero,
    plans: hostingPlans,
    features: hostingFeatures,
    whyChoose: whyChooseHosting,
    guarantees: hostingGuarantees,
    cta: hostingCTA
  };
}

/**
 * Get all hosting plans
 */
export function getAllHostingPlans() {
  return hostingPlans;
}

/**
 * Get plan by ID
 */
export function getHostingPlanById(id: string) {
  return hostingPlans.find(plan => plan.id === id);
}

/**
 * Get popular plans
 */
export function getPopularHostingPlans() {
  return hostingPlans.filter(plan => plan.popular);
}
