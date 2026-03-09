/**
 * Portfolio Archive Page Data
 * 
 * Content for the main portfolio listing page.
 */

import { Briefcase } from '@phosphor-icons/react';

export const portfolioArchiveHero = {
  title: "Our Work",
  subtitle: "A showcase of custom WordPress and WooCommerce projects delivering real business results.",
  badge: { text: "CASE STUDIES", icon: Briefcase }
};

export const portfolioArchiveFilters = [
  { id: 'all', label: 'All Projects' },
  { id: 'ecommerce', label: 'E-Commerce' },
  { id: 'travel-tourism', label: 'Travel' },
  { id: 'corporate', label: 'Corporate' },
  { id: 'nonprofit', label: 'Non-Profit' }
];