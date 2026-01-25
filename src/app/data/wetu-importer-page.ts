/**
 * Wetu Importer Product Page Data
 * 
 * Dedicated page data for Wetu Importer plugin/product.
 * Real content based on LSX product offerings.
 * 
 * WordPress Mapping: Product/Solution detail page
 */

import { Server, Download, RefreshCw, Zap, Check, Shield } from 'lucide-react';

/**
 * Hero Section Data
 */
export const wetuImporterHero = {
  badge: {
    icon: Server,
    text: 'WETU INTEGRATION'
  },
  title: 'Wetu Importer',
  titleHighlight: 'Wetu Importer',
  description: 'Seamlessly import and sync tour data from Wetu directly into your WordPress website. Automate your tour operator content management with our powerful integration plugin.',
  cta: {
    primary: {
      text: 'Get Started',
      page: 'contact' as const
    },
    secondary: {
      text: 'View Documentation',
      page: 'support' as const
    }
  }
};

/**
 * Key Features
 */
export const wetuImporterFeatures = [
  {
    icon: Download,
    title: 'Automatic Data Import',
    description: 'Import tours, accommodations, and itineraries directly from your Wetu account with one click.'
  },
  {
    icon: RefreshCw,
    title: 'Real-Time Sync',
    description: 'Keep your website content automatically synchronized with your Wetu database. Updates happen in real-time.'
  },
  {
    icon: Zap,
    title: 'Fast Performance',
    description: 'Optimized import process that handles thousands of tours without slowing down your website.'
  },
  {
    icon: Shield,
    title: 'Secure Connection',
    description: 'Enterprise-grade security with encrypted API connections and secure data transfer protocols.'
  },
  {
    icon: Check,
    title: 'Custom Field Mapping',
    description: 'Map Wetu fields to your custom post types and taxonomies for complete control over your content structure.'
  },
  {
    icon: Server,
    title: 'Bulk Operations',
    description: 'Import, update, or delete multiple tours at once with our powerful bulk management tools.'
  }
];

/**
 * Benefits Section
 */
export const wetuImporterBenefits = [
  {
    title: 'Save Time',
    description: 'Eliminate manual data entry and reduce content management time by up to 90%. Focus on running your business, not managing website content.'
  },
  {
    title: 'Always Up-to-Date',
    description: 'Your website automatically reflects the latest tour information from Wetu. Never worry about outdated pricing or availability again.'
  },
  {
    title: 'Reduce Errors',
    description: 'Automatic synchronization eliminates human error from manual data entry. Ensure accuracy across all your tour listings.'
  },
  {
    title: 'Scale Easily',
    description: 'Handle hundreds or thousands of tours without additional effort. Our plugin scales with your business growth.'
  }
];

/**
 * How It Works Section
 */
export const wetuImporterProcess = [
  {
    step: 1,
    title: 'Connect Your Wetu Account',
    description: 'Enter your Wetu API credentials in the plugin settings. The connection is secure and encrypted.'
  },
  {
    step: 2,
    title: 'Configure Import Settings',
    description: 'Choose which tours and data fields to import. Map Wetu fields to your WordPress custom post types.'
  },
  {
    step: 3,
    title: 'Import Your Tours',
    description: 'Click import and watch as your tours automatically populate your website with all details intact.'
  },
  {
    step: 4,
    title: 'Enable Auto-Sync',
    description: 'Turn on automatic synchronization to keep your website updated without any manual intervention.'
  }
];

/**
 * Technical Specifications
 */
export const wetuImporterSpecs = {
  title: 'Technical Specifications',
  specs: [
    {
      label: 'Compatibility',
      value: 'WordPress 5.8+, LSX Tour Operator plugin required'
    },
    {
      label: 'PHP Version',
      value: 'PHP 7.4 or higher recommended'
    },
    {
      label: 'Import Speed',
      value: 'Up to 100 tours per minute'
    },
    {
      label: 'Data Types',
      value: 'Tours, Accommodations, Destinations, Itineraries'
    },
    {
      label: 'Sync Frequency',
      value: 'Configurable: Hourly, Daily, or Manual'
    },
    {
      label: 'Support',
      value: 'Email support, Documentation, Priority support available'
    }
  ]
};

/**
 * Pricing Section
 */
export const wetuImporterPricing = {
  title: 'Simple, Transparent Pricing',
  description: 'Get started with Wetu Importer today. All plans include full access to all features.',
  plans: [
    {
      name: 'Single Site',
      tagline: 'Perfect for one website',
      price: {
        display: '$99',
        value: 99,
        period: 'per year'
      },
      features: [
        'Single website license',
        'Unlimited tours',
        'Automatic sync',
        'Email support',
        'Documentation access',
        'Regular updates'
      ],
      cta: {
        text: 'Get Started',
        page: 'contact' as const
      },
      popular: false
    },
    {
      name: 'Agency',
      tagline: 'For multiple client sites',
      price: {
        display: '$299',
        value: 299,
        period: 'per year'
      },
      features: [
        'Up to 5 websites',
        'Unlimited tours',
        'Automatic sync',
        'Priority support',
        'Documentation access',
        'Early feature access',
        'Bulk management tools'
      ],
      cta: {
        text: 'Get Started',
        page: 'contact' as const
      },
      popular: true
    },
    {
      name: 'Enterprise',
      tagline: 'Unlimited everything',
      price: {
        display: '$599',
        value: 599,
        period: 'per year'
      },
      features: [
        'Unlimited websites',
        'Unlimited tours',
        'Automatic sync',
        'Dedicated support',
        'Custom integrations',
        'White-label options',
        'Advanced API access',
        'Training included'
      ],
      cta: {
        text: 'Contact Sales',
        page: 'contact' as const
      },
      popular: false
    }
  ]
};

/**
 * FAQ Data
 */
export const wetuImporterFAQs = [
  {
    question: 'Do I need a Wetu account to use this plugin?',
    answer: 'Yes, you need an active Wetu account with API access. The plugin connects to your Wetu account to import tour data.'
  },
  {
    question: 'Is the LSX Tour Operator plugin required?',
    answer: 'Yes, the Wetu Importer requires the LSX Tour Operator plugin to be installed and activated. The importer uses the tour operator post types and taxonomies.'
  },
  {
    question: 'How often does the automatic sync run?',
    answer: 'You can configure the sync frequency in the plugin settings. Options include hourly, twice daily, daily, or manual sync only.'
  },
  {
    question: 'Will importing tours slow down my website?',
    answer: 'No, the import process runs in the background and uses efficient batch processing. Your website performance will not be affected during imports.'
  },
  {
    question: 'Can I customize which fields are imported?',
    answer: 'Yes, you have full control over field mapping. You can choose which Wetu fields to import and where to store them in WordPress.'
  },
  {
    question: 'What happens if I cancel my subscription?',
    answer: 'Your imported tours will remain on your website. However, automatic synchronization will stop, and you will not receive plugin updates.'
  }
];

/**
 * CTA Section Data
 */
export const wetuImporterCTA = {
  title: 'Ready to Automate Your Tour Content?',
  description: 'Join hundreds of tour operators who have streamlined their content management with Wetu Importer. Get started today with a 14-day money-back guarantee.',
  buttons: [
    {
      text: 'Get Started Now',
      page: 'contact' as const
    },
    {
      text: 'View Pricing',
      page: 'contact' as const
    }
  ]
};
