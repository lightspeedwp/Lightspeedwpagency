/**
 * LSX Search Page Data
 * 
 * Mock data for the LSX Search page (LSXSearchTemplate).
 */

import { Search, Zap, Filter, Layout } from 'lucide-react';

export const lsxSearchHero = {
  title: "LSX Search",
  subtitle: "Powerful, faceted search for WordPress powered by Algolia or standard WP search.",
  badge: { text: "ADVANCED SEARCH", icon: Search },
  primaryButton: { text: "Upgrade Search", page: "contact" }
};

export const lsxSearchFeatures = {
  title: "Help Users Find Content",
  features: [
    {
      icon: Zap,
      title: "Instant Results",
      description: "As-you-type search results for a lightning-fast user experience."
    },
    {
      icon: Filter,
      title: "Faceted Filtering",
      description: "Allow users to filter results by category, tag, date, or custom taxonomy."
    },
    {
      icon: Layout,
      title: "Custom Results Template",
      description: "Design your search results layout using the block editor."
    }
  ]
};

export const lsxSearchCTA = {
  title: "Stop Losing Visitors",
  description: "If they can't find it, they can't buy it. Upgrade your site search today.",
  button: { text: "Get Started", page: "contact" }
};
