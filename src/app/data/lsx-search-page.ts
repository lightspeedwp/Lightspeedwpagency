/**
 * LSX Search Page Data
 * 
 * Mock data for the LSX Search page (LSXSearchTemplate).
 */

import { Search, Zap, Filter, Layout, Settings, Globe, Database, CheckCircle } from 'lucide-react';

export const lsxSearchHero = {
  title: "LSX Search",
  titleHighlight: "Search",
  description: "Powerful, faceted search for WordPress powered by Algolia or standard WP search. Help visitors find content instantly with as-you-type results, faceted filtering, and custom results layouts.",
  subtitle: "Powerful, faceted search for WordPress powered by Algolia or standard WP search.",
  badge: { text: "ADVANCED SEARCH", icon: Search },
  primaryButton: { text: "Upgrade Search", page: "contact" },
  cta: {
    primary: { text: "Upgrade Search", page: "contact" },
    secondary: { text: "View Demo", page: "contact" }
  }
};

export const lsxSearchFeatures = [
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
  },
  {
    icon: Globe,
    title: "Multi-Language Support",
    description: "Full support for WPML and Polylang for multilingual search results."
  },
  {
    icon: Database,
    title: "Custom Post Type Search",
    description: "Search across all post types including pages, portfolio items, and WooCommerce products."
  },
  {
    icon: Settings,
    title: "Search Analytics",
    description: "Track what visitors are searching for and optimize your content strategy accordingly."
  }
];

/**
 * Benefits Section
 */
export const lsxSearchBenefits = [
  {
    title: "Improve User Experience",
    description: "Visitors find what they need in seconds instead of minutes. Reduce bounce rates and increase engagement with intuitive search."
  },
  {
    title: "Increase Conversions",
    description: "When users find products and content faster, they convert more. Sites with good search see up to 50% higher conversion rates."
  },
  {
    title: "Reduce Support Load",
    description: "Better search means fewer support tickets. Visitors can self-serve, finding answers and products without contacting your team."
  },
  {
    title: "Gain Content Insights",
    description: "Search analytics reveal what your visitors want. Use these insights to create content that drives traffic and revenue."
  }
];

/**
 * How It Works Section
 */
export const lsxSearchProcess = [
  {
    step: 1,
    title: "Install the Plugin",
    description: "Install LSX Search from the WordPress plugin repository or upload directly to your site."
  },
  {
    step: 2,
    title: "Configure Search Settings",
    description: "Choose which post types, taxonomies, and content to include in your search index."
  },
  {
    step: 3,
    title: "Customize the Layout",
    description: "Design your search results page using the block editor with full control over styling."
  },
  {
    step: 4,
    title: "Monitor & Optimize",
    description: "Use built-in analytics to understand search patterns and continuously improve results."
  }
];

/**
 * Search Capabilities Section
 */
export const lsxSearchCapabilities = {
  title: "Comprehensive Search Capabilities",
  description: "Everything you need for enterprise-grade WordPress search",
  capabilities: [
    {
      category: "Content Types",
      features: ["Posts & Pages", "Custom Post Types", "WooCommerce Products", "Portfolio Items", "Media & Attachments"]
    },
    {
      category: "Filtering Options",
      features: ["Category Filters", "Tag Filters", "Date Range", "Custom Taxonomy", "Price Range (WooCommerce)"]
    },
    {
      category: "Search Features",
      features: ["Fuzzy Matching", "Autocomplete Suggestions", "Search Highlighting", "Synonym Support", "Spelling Correction"]
    },
    {
      category: "Performance",
      features: ["Algolia Integration", "Server-Side Caching", "Lazy Loading Results", "Debounced Input", "Optimized Queries"]
    }
  ]
};

/**
 * Technical Specifications Section
 */
export const lsxSearchSpecs = {
  title: "Technical Specifications",
  specs: [
    { label: "Compatibility", value: "WordPress 5.8+" },
    { label: "PHP Version", value: "PHP 7.4 or higher" },
    { label: "Search Backend", value: "WordPress native or Algolia" },
    { label: "Index Size", value: "Unlimited (Algolia plan dependent)" },
    { label: "Response Time", value: "< 100ms (Algolia), < 500ms (native)" },
    { label: "Multilingual", value: "WPML and Polylang compatible" }
  ]
};

/**
 * FAQ Section
 */
export const lsxSearchFAQs = [
  {
    question: "Do I need an Algolia account?",
    answer: "No, LSX Search works with the built-in WordPress search out of the box. However, for larger sites with thousands of posts, we recommend Algolia for significantly faster results."
  },
  {
    question: "Will this slow down my website?",
    answer: "No. LSX Search is highly optimized. When using Algolia, search queries don't even hit your server. With native search, results are cached for fast repeat queries."
  },
  {
    question: "Can I search WooCommerce products?",
    answer: "Yes, LSX Search fully supports WooCommerce product search including filtering by price, category, attributes, and availability."
  },
  {
    question: "Does it work with my theme?",
    answer: "LSX Search is designed to work with any properly coded WordPress theme. It integrates with the block editor and respects your theme's styling."
  },
  {
    question: "Is there a free version?",
    answer: "Yes, the core LSX Search plugin is free on WordPress.org. Premium features like Algolia integration and advanced analytics are available as add-ons."
  }
];

export const lsxSearchCTA = {
  title: "Stop Losing Visitors",
  description: "If they can't find it, they can't buy it. Upgrade your site search today and watch engagement soar.",
  button: { text: "Request a Systems Audit", page: "contact" },
  buttons: [
    { text: "Request a Systems Audit", page: "contact" },
    { text: "View Demo", page: "contact" }
  ]
};