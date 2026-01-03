/**
 * Hosting Plans Data
 * 
 * Centralized hosting plan data for the LSX Design hosting services.
 * Used in HostingTemplate and service pages.
 * 
 * In WordPress, this would be a Custom Post Type: 'hosting_plan' with
 * custom fields for pricing, features, and plan details.
 */

import { LucideIcon, Server, Lock, Zap, Clock, HeadphonesIcon, Globe } from 'lucide-react';

/**
 * Hosting Plan Interface
 * 
 * Defines a hosting plan for the PricingTable pattern.
 * 
 * @property {string} id - Unique identifier
 * @property {string} name - Plan name
 * @property {string} description - Plan description
 * @property {string} price - Monthly price display
 * @property {string} period - Billing period
 * @property {string[]} features - List of features
 * @property {boolean} featured - Whether this plan is featured
 * @property {string} ctaText - Call-to-action button text
 * @property {string} ctaLink - Call-to-action link
 */
export interface HostingPlan {
  id: string;
  name: string;
  description: string;
  price: string;
  period: string;
  features: string[];
  featured?: boolean;
  ctaText: string;
  ctaLink: string;
}

/**
 * Hosting Feature with Icon Interface
 * 
 * Defines a feature for the features grid display.
 * 
 * @property {LucideIcon} icon - Icon component
 * @property {string} title - Feature title
 * @property {string} description - Feature description
 */
export interface HostingFeatureDisplay {
  icon: LucideIcon;
  title: string;
  description: string;
}

/**
 * Hosting Plans Data
 * 
 * Three tiers of managed WordPress hosting.
 */
export const hostingPlans: HostingPlan[] = [
  {
    id: 'starter',
    name: 'Starter',
    description: 'Perfect for small business websites and blogs',
    price: '$29',
    period: 'per month',
    features: [
      '1 WordPress site',
      '10 GB SSD storage',
      '25,000 monthly visits',
      'Free SSL certificate',
      'Daily backups',
      'Email support',
      'WordPress auto-updates',
      'Malware scanning'
    ],
    ctaText: 'Get Started',
    ctaLink: '/contact'
  },
  {
    id: 'professional',
    name: 'Professional',
    description: 'For growing businesses with multiple sites',
    price: '$79',
    period: 'per month',
    features: [
      '3 WordPress sites',
      '30 GB SSD storage',
      '100,000 monthly visits',
      'Free SSL certificates',
      'Daily backups',
      'Priority email & chat support',
      'WordPress auto-updates',
      'Malware scanning & removal',
      'Staging environments',
      'CDN integration'
    ],
    featured: true,
    ctaText: 'Start Free Trial',
    ctaLink: '/contact'
  },
  {
    id: 'enterprise',
    name: 'Enterprise',
    description: 'For high-traffic sites requiring maximum performance',
    price: '$199',
    period: 'per month',
    features: [
      'Unlimited WordPress sites',
      '100 GB SSD storage',
      '500,000 monthly visits',
      'Free SSL certificates',
      'Hourly backups',
      '24/7 priority support',
      'WordPress auto-updates',
      'Malware scanning & removal',
      'Staging environments',
      'CDN integration',
      'Dedicated server resources',
      'White-label options'
    ],
    ctaText: 'Contact Sales',
    ctaLink: '/contact'
  }
];

/**
 * Hosting Features Grid Data
 * 
 * Features displayed in the features grid section.
 */
export const hostingFeatures: HostingFeatureDisplay[] = [
  {
    icon: Zap,
    title: 'Blazing Fast Performance',
    description: 'Optimized WordPress hosting with SSD storage, advanced caching, and CDN integration for lightning-fast load times.'
  },
  {
    icon: Lock,
    title: 'Enterprise Security',
    description: 'Daily malware scans, SSL certificates, firewall protection, and automatic security updates keep your site secure.'
  },
  {
    icon: Clock,
    title: 'Automatic Backups',
    description: 'Daily automated backups with one-click restore. Your WordPress data is always safe and recoverable.'
  },
  {
    icon: Server,
    title: '99.9% Uptime Guarantee',
    description: 'Enterprise-grade infrastructure ensures your WordPress site is always online and accessible to visitors.'
  },
  {
    icon: HeadphonesIcon,
    title: 'Expert Support',
    description: 'WordPress specialists available 24/7 via chat, email, or phone to help with any hosting issues.'
  },
  {
    icon: Globe,
    title: 'Staging Environments',
    description: 'Test changes safely with one-click staging environments before pushing updates to your live site.'
  },
];