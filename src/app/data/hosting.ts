/**
 * Hosting Data
 * 
 * Hosting plans and features for the Hosting Service page.
 */

import { Server, Shield, Zap, Clock, Database, Cloud } from 'lucide-react';

export const hostingPlans = [
  {
    id: 'starter',
    name: 'Starter',
    price: '$29',
    period: '/month',
    description: 'Perfect for small business websites and blogs.',
    features: [
      '1 WordPress Site',
      '10GB SSD Storage',
      '25k Visits Monthly',
      'Free SSL Certificate',
      'Daily Backups',
      '24/7 Support'
    ],
    recommended: false
  },
  {
    id: 'growth',
    name: 'Growth',
    price: '$59',
    period: '/month',
    description: 'Ideal for growing businesses and e-commerce stores.',
    features: [
      '3 WordPress Sites',
      '25GB SSD Storage',
      '100k Visits Monthly',
      'Free SSL & CDN',
      'Daily Backups',
      'Priority Support',
      'Staging Environment'
    ],
    recommended: true
  },
  {
    id: 'business',
    name: 'Business',
    price: '$99',
    period: '/month',
    description: 'High performance for mission-critical websites.',
    features: [
      '10 WordPress Sites',
      '50GB SSD Storage',
      '500k Visits Monthly',
      'Advanced Security',
      'Real-time Backups',
      'VIP Support',
      'Staging & Cloning'
    ],
    recommended: false
  }
];

export const hostingFeatures = [
  {
    icon: Zap,
    title: 'Blazing Fast Speed',
    description: 'Optimized server stack with NGINX, PHP 8.2, and object caching for sub-second load times.'
  },
  {
    icon: Shield,
    title: 'Fortified Security',
    description: 'Enterprise-grade firewalls, malware scanning, and DDoS protection included standard.'
  },
  {
    icon: Clock,
    title: '99.9% Uptime',
    description: 'Reliable infrastructure ensuring your site is always available for your customers.'
  },
  {
    icon: Database,
    title: 'Automated Backups',
    description: 'Daily off-site backups with one-click restore ensuring your data is never lost.'
  },
  {
    icon: Cloud,
    title: 'Global CDN',
    description: 'Content delivery network with 200+ points of presence for fast loading worldwide.'
  },
  {
    icon: Server,
    title: 'Managed Updates',
    description: 'We handle WordPress core, theme, and plugin updates safely to prevent conflicts.'
  }
];
