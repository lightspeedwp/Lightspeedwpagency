/**
 * WordPress Solution Template — Extra Data
 *
 * Related benefits data for WordPressSolutionTemplate that isn't
 * already in wordpress-solution-page.ts.
 *
 * @see /src/app/components/templates/WordPressSolutionTemplate.tsx
 */

import { ShoppingCart, Shield, Code } from '@phosphor-icons/react';

export const wordPressSolutionRelatedBenefits = [
  {
    icon: ShoppingCart,
    title: 'WooCommerce solution',
    description: 'Build powerful e-commerce stores with WooCommerce and WordPress.',
    link: 'woocommerce',
    linkText: 'Learn more',
  },
  {
    icon: Shield,
    title: 'WordPress hosting',
    description: 'Secure managed WordPress hosting with daily backups and monitoring.',
    link: 'hosting',
    linkText: 'Learn more',
  },
  {
    icon: Code,
    title: 'WordPress security',
    description: 'Protect your WordPress site from malware, hacks, and security threats.',
    link: 'security',
    linkText: 'Learn more',
  },
];
