/**
 * Site Pages — Navigation Menus
 *
 * WordPress registered menu locations.
 * Based on real navigation from lightspeedwp.agency.
 *
 * @see /guidelines/overview-sitemap.md
 */

/**
 * Main Navigation (Header)
 * 2026 Strategic IA: Work / Solutions / Systems / Insights / About / Contact
 * Updated Feb 27, 2026 for Phase 1 Task 1.3
 */
export const mainNavigation = [
  {
    label: 'Work',
    page: 'portfolio-archive' as const
  },
  {
    label: 'Solutions',
    page: 'solutions' as const,
    children: [
      { label: 'WordPress', page: 'wordpress' as const },
      { label: 'WooCommerce', page: 'woocommerce' as const },
      { label: 'Tour Operators', page: 'tour-operators' as const },
      { label: 'Publishers', page: 'publishers' as const }
    ]
  },
  {
    label: 'Systems',
    page: 'systems-hub' as const,
    children: [
      { label: 'Design Tokens', page: 'design-tokens' as const },
      { label: 'Pattern Governance', page: 'pattern-governance' as const },
      { label: 'Editorial Workflows', page: 'editorial-workflows' as const },
      { label: 'AI Search Readiness', page: 'ai-search-readiness' as const },
      { label: 'Performance & Reliability', page: 'performance-reliability' as const }
    ]
  },
  {
    label: 'Insights',
    page: 'blog' as const
  },
  {
    label: 'About',
    page: 'about' as const,
    children: [
      { label: 'About Us', page: 'about' as const },
      { label: 'Our Team', page: 'team' as const },
      { label: 'Our Culture', page: 'about-culture' as const },
      { label: 'Our Process', page: 'about-process' as const }
    ]
  },
  {
    label: 'Contact',
    page: 'contact' as const
  }
];

/**
 * Footer Navigation
 * Real footer navigation from https://lightspeedwp.agency
 */
export const footerNavigation = {
  about: {
    title: 'About Us',
    links: [
      { label: 'About', page: 'about' as const },
      { label: 'How We Work', page: 'about-process' as const },
      { label: 'Our Culture', page: 'about-culture' as const },
      { label: 'Portfolio', page: 'portfolio-archive' as const },
      { label: 'Blog', page: 'blog' as const },
      { label: 'Site Map', page: 'site-map' as const }
    ]
  },
  products: {
    title: 'Our Products',
    links: [
      { label: 'LSX Theme', page: 'lsx' as const },
      { label: 'LSX Tour Operator', page: 'tour-operators' as const },
      { label: 'Wetu Importer', page: 'wetu-importer' as const },
      { label: 'LSX Sharing', page: 'lsx-sharing' as const },
      { label: 'LSX Search', page: 'lsx-search' as const }
    ]
  },
  services: {
    title: 'Our Services',
    links: [
      { label: 'Discovery', page: 'discovery' as const },
      { label: 'Design', page: 'design' as const },
      { label: 'Development', page: 'development' as const },
      { label: 'Hosting & Support', page: 'hosting' as const },
      { label: 'AI Search & Visibility', page: 'ai-search-visibility' as const }
    ]
  },
  solutions: {
    title: 'Our Solutions',
    links: [
      { label: 'WooCommerce', page: 'woocommerce' as const },
      { label: 'WordPress', page: 'wordpress' as const },
      { label: 'Tour Operators', page: 'tour-operators' as const },
      { label: 'Publishers', page: 'publishers' as const },
      { label: 'Videos', page: 'videos' as const },
      { label: 'Podcasts', page: 'podcasts' as const }
    ]
  },
  legal: {
    title: 'Legal',
    links: [
      { label: 'Privacy Policy', page: 'privacy-policy' as const },
      { label: 'Terms of Service', page: 'terms-of-service' as const }
    ]
  }
};
