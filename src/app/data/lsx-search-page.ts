/**
 * LSX Search Product Page Data
 * 
 * Dedicated page data for LSX Search plugin/product.
 * Real content based on LSX product offerings.
 * 
 * WordPress Mapping: Product/Solution detail page
 */

import { Search, Zap, Filter, Target, Layout, Globe } from 'lucide-react';

/**
 * Hero Section Data
 */
export const lsxSearchHero = {
  badge: {
    icon: Search,
    text: 'ENHANCED SEARCH'
  },
  title: 'LSX Search',
  titleHighlight: 'LSX Search',
  description: 'Powerful, lightning-fast search functionality for your WordPress website. Help visitors find exactly what they\'re looking for with advanced filtering, faceted search, and instant results.',
  cta: {
    primary: {
      text: 'Download Free',
      page: 'contact' as const
    },
    secondary: {
      text: 'Try Demo',
      page: 'portfolio-archive' as const
    }
  }
};

/**
 * Key Features
 */
export const lsxSearchFeatures = [
  {
    icon: Zap,
    title: 'Instant Search',
    description: 'Real-time search results as users type. No page reloads required for a seamless search experience.'
  },
  {
    icon: Filter,
    title: 'Advanced Filtering',
    description: 'Filter results by post type, category, tag, date, custom fields, and more. Create powerful faceted search interfaces.'
  },
  {
    icon: Target,
    title: 'Relevant Results',
    description: 'Intelligent ranking algorithm that shows the most relevant results first. Searches titles, content, excerpts, and custom fields.'
  },
  {
    icon: Layout,
    title: 'Customizable Layout',
    description: 'Choose from multiple result layouts including grid, list, and masonry. Customize what information displays in results.'
  },
  {
    icon: Globe,
    title: 'Multilingual Ready',
    description: 'Full support for WPML and Polylang. Search across all languages or filter by specific language.'
  },
  {
    icon: Search,
    title: 'Search Analytics',
    description: 'Track popular search terms and zero-result searches. Understand what visitors are looking for to improve your content.'
  }
];

/**
 * Benefits Section
 */
export const lsxSearchBenefits = [
  {
    title: 'Improve User Experience',
    description: 'Help visitors find what they need quickly. Reduce bounce rates and increase engagement with powerful search functionality.'
  },
  {
    title: 'Increase Conversions',
    description: 'Make it easy for visitors to find your products, services, or content. Better search leads to more conversions.'
  },
  {
    title: 'Understand Your Audience',
    description: 'Search analytics reveal what visitors are looking for. Use these insights to create content and improve your offerings.'
  },
  {
    title: 'Free & Extensible',
    description: 'Completely free core plugin with optional paid extensions for advanced features. Customize with filters and hooks.'
  }
];

/**
 * How It Works Section
 */
export const lsxSearchProcess = [
  {
    step: 1,
    title: 'Install Plugin',
    description: 'Download from WordPress.org and activate. The plugin automatically replaces your default WordPress search.'
  },
  {
    step: 2,
    title: 'Configure Search',
    description: 'Choose which post types and fields to search. Enable filters and configure result display options.'
  },
  {
    step: 3,
    title: 'Customize Design',
    description: 'Select result layout, customize colors, and configure what information appears in search results.'
  },
  {
    step: 4,
    title: 'Monitor Performance',
    description: 'View search analytics to understand popular queries and improve your content based on user needs.'
  }
];

/**
 * Search Capabilities
 */
export const lsxSearchCapabilities = {
  title: 'Powerful Search Features',
  description: 'Everything you need for advanced search functionality',
  capabilities: [
    {
      category: 'Content Search',
      features: [
        'Full-text search across all content',
        'Search titles, content, and excerpts',
        'Custom field search',
        'Attachment and media search',
        'Author search',
        'Taxonomy term search'
      ]
    },
    {
      category: 'Filtering Options',
      features: [
        'Filter by post type',
        'Filter by category/tag',
        'Filter by date range',
        'Filter by custom taxonomies',
        'Filter by custom fields',
        'Multi-select filters'
      ]
    },
    {
      category: 'Result Display',
      features: [
        'Grid, list, or masonry layouts',
        'Customizable result templates',
        'Featured image display',
        'Excerpt snippets',
        'Custom field display',
        'Pagination or infinite scroll'
      ]
    },
    {
      category: 'Advanced Features',
      features: [
        'Search suggestions',
        'Related searches',
        'Synonym support',
        'Exclude specific content',
        'Boost specific post types',
        'AJAX-powered instant results'
      ]
    }
  ]
};

/**
 * Plugin Specifications
 */
export const lsxSearchSpecs = {
  title: 'Technical Details',
  specs: [
    {
      label: 'Version',
      value: '2.5.0'
    },
    {
      label: 'Compatibility',
      value: 'WordPress 5.8+'
    },
    {
      label: 'PHP Version',
      value: 'PHP 7.4 or higher'
    },
    {
      label: 'License',
      value: 'GPL v3'
    },
    {
      label: 'Price',
      value: 'Free (Core) + Optional Extensions'
    },
    {
      label: 'Performance',
      value: 'Optimized for large databases'
    }
  ]
};

/**
 * FAQ Data
 */
export const lsxSearchFAQs = [
  {
    question: 'Is LSX Search free?',
    answer: 'Yes, the core plugin is completely free. We also offer optional premium extensions for advanced features like custom templates and additional integrations.'
  },
  {
    question: 'Will it work with my theme?',
    answer: 'Yes, LSX Search works with any WordPress theme. It uses standard WordPress templates and can be customized to match your design.'
  },
  {
    question: 'How does it compare to default WordPress search?',
    answer: 'LSX Search is significantly more powerful. It offers instant results, advanced filtering, custom field search, and much better relevance ranking than default WordPress search.'
  },
  {
    question: 'Can I search custom post types?',
    answer: 'Yes, you can search any custom post type. Simply enable the post types you want to search in the plugin settings.'
  },
  {
    question: 'Does it slow down my website?',
    answer: 'No, LSX Search is optimized for performance. It uses efficient database queries and caching to ensure fast search results even on large websites.'
  },
  {
    question: 'Is it compatible with WooCommerce?',
    answer: 'Yes, LSX Search works great with WooCommerce. You can search products, filter by price, categories, attributes, and more.'
  }
];

/**
 * CTA Section Data
 */
export const lsxSearchCTA = {
  title: 'Transform Your Website Search',
  description: 'Give your visitors the search experience they deserve. Download LSX Search free from WordPress.org and start improving user experience today.',
  buttons: [
    {
      text: 'Download Now',
      page: 'contact' as const
    },
    {
      text: 'View Documentation',
      page: 'support' as const
    }
  ]
};
