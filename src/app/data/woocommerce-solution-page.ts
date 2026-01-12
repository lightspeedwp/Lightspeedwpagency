/**
 * WooCommerce Solution Page Data
 * 
 * Real content for WooCommerce e-commerce solution landing page from LightSpeed WP Agency.
 * Real content extracted from https://lightspeedwp.agency
 * 
 * **REAL CONTENT SOURCE:** https://lightspeedwp.agency/solutions/woocommerce
 * **Last Updated:** 2025-01-09
 * 
 * WordPress: Maps to templates/page-solution-woocommerce.html
 */

import { 
  ShoppingCart,
  CreditCard,
  Package,
  TrendingUp,
  Users,
  Truck,
  Globe,
  BarChart,
  Settings,
  Zap,
  Shield,
  Smartphone,
  Mail,
  DollarSign,
  Award,
  CheckCircle,
  Target,
  Repeat
} from 'lucide-react';
import type { LucideIcon } from 'lucide-react';

/**
 * Solution Hero Content
 */
export const woocommerceSolutionHero = {
  badge: {
    icon: ShoppingCart,
    text: 'WooCommerce Solution'
  },
  title: 'Powerful WooCommerce Stores That Drive Sales',
  titleHighlight: 'WooCommerce', // Word to highlight
  tagline: 'Professional WooCommerce development for online stores that convert visitors into customers',
  description: 'We build high-performance WooCommerce stores that are fast, secure, and optimized for conversions. From product catalogs to payment gateways, our WooCommerce solutions handle everything you need to sell online successfully.'
};

/**
 * Solution Overview
 */
export const woocommerceSolutionOverview = {
  title: 'Why Choose WooCommerce for E-commerce?',
  description: 'WooCommerce powers 28% of all online stores globally. It\'s the most flexible, customizable, and cost-effective e-commerce platform. Our WooCommerce solutions combine powerful features with modern design to create stores that drive results.',
  stats: [
    {
      icon: ShoppingCart,
      value: '28%',
      label: 'Of All Online Stores',
      description: 'WooCommerce market share globally'
    },
    {
      icon: TrendingUp,
      value: '150+',
      label: 'Stores Built',
      description: 'WooCommerce projects delivered'
    },
    {
      icon: Award,
      value: '3.2x',
      label: 'Average ROI',
      description: 'Return on investment increase'
    },
    {
      icon: Users,
      value: '18+',
      label: 'Years Combined',
      description: 'WooCommerce expertise'
    }
  ]
};

/**
 * Solution Features
 */
export interface SolutionFeature {
  icon: LucideIcon;
  title: string;
  description: string;
}

export const woocommerceSolutionFeatures: SolutionFeature[] = [
  {
    icon: ShoppingCart,
    title: 'Complete Product Management',
    description: 'Intuitive product catalog with unlimited products, variations, categories, tags, and attributes. Easy inventory management and stock tracking.'
  },
  {
    icon: CreditCard,
    title: 'Multiple Payment Gateways',
    description: 'Accept payments via Stripe, PayPal, credit cards, bank transfers, and 100+ payment gateways. Secure checkout with PCI compliance.'
  },
  {
    icon: Truck,
    title: 'Flexible Shipping Options',
    description: 'Multiple shipping methods, real-time rates, zone-based pricing, free shipping rules, and integration with major shipping carriers.'
  },
  {
    icon: BarChart,
    title: 'Advanced Analytics',
    description: 'Built-in reports for sales, customers, inventory, and performance. Integration with Google Analytics for deeper insights and tracking.'
  },
  {
    icon: Settings,
    title: 'Extensive Customization',
    description: 'Thousands of WooCommerce extensions and themes available. Custom development for unique business requirements and workflows.'
  },
  {
    icon: Zap,
    title: 'Performance Optimized',
    description: 'Fast-loading stores with optimized code, image compression, caching, and CDN integration for excellent user experience.'
  },
  {
    icon: Shield,
    title: 'Security & Compliance',
    description: 'PCI-compliant payment processing, SSL certificates, security monitoring, regular updates, and GDPR compliance features.'
  },
  {
    icon: Smartphone,
    title: 'Mobile Commerce Ready',
    description: 'Fully responsive designs optimized for mobile shopping. Touch-friendly interfaces and mobile payment options for on-the-go purchases.'
  },
  {
    icon: Mail,
    title: 'Email Marketing Integration',
    description: 'Automated abandoned cart emails, order notifications, customer follow-ups, and integration with Mailchimp, Klaviyo, and more.'
  },
  {
    icon: Globe,
    title: 'Multi-Currency & Multi-Language',
    description: 'Sell globally with multi-currency support, automatic currency conversion, and multi-language capabilities for international markets.'
  }
];

/**
 * Use Cases
 */
export const woocommerceSolutionUseCases = [
  {
    title: 'Retail Product Stores',
    description: 'Online stores selling physical products with inventory management, shipping, and payment processing.',
    industries: ['Retail', 'Fashion', 'Electronics', 'Home Goods'],
    features: [
      'Product variations (size, color)',
      'Inventory tracking',
      'Shipping integration',
      'Payment gateways',
      'Customer reviews',
      'Wishlists & favorites'
    ]
  },
  {
    title: 'Digital Product Stores',
    description: 'Sell digital products like software, courses, ebooks, and downloads with instant delivery.',
    industries: ['Software', 'Education', 'Digital Media', 'Services'],
    features: [
      'Instant digital delivery',
      'License key generation',
      'Download tracking',
      'No shipping required',
      'Subscription options',
      'Customer accounts'
    ]
  },
  {
    title: 'Subscription Services',
    description: 'Recurring revenue businesses with subscription boxes, memberships, and ongoing services.',
    industries: ['Subscription Boxes', 'Memberships', 'SaaS', 'Courses'],
    features: [
      'Recurring billing',
      'Subscription management',
      'Free trials',
      'Upgrade/downgrade options',
      'Automatic renewals',
      'Customer portal'
    ]
  },
  {
    title: 'B2B Wholesale',
    description: 'Business-to-business stores with wholesale pricing, bulk orders, and custom catalogs.',
    industries: ['Wholesale', 'Manufacturing', 'Distribution', 'B2B Services'],
    features: [
      'Wholesale pricing tiers',
      'Bulk order discounts',
      'Customer-specific catalogs',
      'Quote requests',
      'Purchase orders',
      'Account management'
    ]
  }
];

/**
 * WooCommerce Packages/Pricing
 */
export const woocommerceSolutionPricing = {
  title: 'WooCommerce Development Packages',
  description: 'Complete e-commerce solutions for businesses of all sizes',
  packages: [
    {
      name: 'Starter Store',
      price: '$8,000 - $15,000',
      description: 'Perfect for small businesses launching online',
      features: [
        'WooCommerce store setup',
        'Up to 50 products',
        'Payment gateway integration',
        'Shipping configuration',
        'Responsive design',
        'Product categories',
        'Basic SEO optimization',
        '60 days support'
      ],
      recommended: false
    },
    {
      name: 'Professional Store',
      price: '$15,000 - $35,000',
      description: 'For growing businesses with complex needs',
      features: [
        'Everything in Starter',
        'Up to 200 products',
        'Custom WooCommerce extensions',
        'Advanced shipping rules',
        'Email marketing integration',
        'Abandoned cart recovery',
        'Performance optimization',
        '120 days support'
      ],
      recommended: true
    },
    {
      name: 'Enterprise Store',
      price: '$35,000+',
      description: 'For large-scale e-commerce operations',
      features: [
        'Everything in Professional',
        'Unlimited products',
        'Multi-vendor marketplace',
        'ERP/CRM integration',
        'Custom checkout flows',
        'Advanced analytics',
        'Dedicated account manager',
        '12 months support'
      ],
      recommended: false
    }
  ]
};

/**
 * Feature Comparison
 */
export const woocommerceSolutionComparison = {
  title: 'WooCommerce vs Other E-commerce Platforms',
  features: [
    {
      feature: 'Monthly Platform Fees',
      woocommerce: 'None - Only hosting costs',
      shopify: '$29-$299/month + transaction fees',
      bigcommerce: '$29.95-$299.95/month'
    },
    {
      feature: 'Transaction Fees',
      woocommerce: 'None (just payment gateway fees)',
      shopify: '0.5-2% + gateway fees',
      bigcommerce: 'None (but limited gateways)'
    },
    {
      feature: 'Customization',
      woocommerce: 'Unlimited - Full code access',
      shopify: 'Limited - Template restrictions',
      bigcommerce: 'Medium - Some restrictions'
    },
    {
      feature: 'Product Limits',
      woocommerce: 'Unlimited products',
      shopify: 'Unlimited (but performance limits)',
      bigcommerce: 'Varies by plan'
    },
    {
      feature: 'Ownership',
      woocommerce: 'You own everything',
      shopify: 'Platform lock-in',
      bigcommerce: 'Platform lock-in'
    },
    {
      feature: 'Extensions',
      woocommerce: '55,000+ WordPress plugins',
      shopify: '8,000+ apps',
      bigcommerce: '1,500+ apps'
    }
  ]
};

/**
 * WooCommerce Benefits
 */
export const woocommerceSolutionBenefits = [
  'No monthly platform fees or transaction costs',
  'Complete ownership and control of your store',
  'Unlimited products and categories',
  '55,000+ WordPress plugins and extensions',
  'Thousands of payment gateway options',
  'Flexible shipping and tax configurations',
  'Built-in SEO capabilities for better rankings',
  'Scales from small shops to enterprise stores',
  'Seamless WordPress integration',
  'Multi-currency and multi-language support'
];

/**
 * Technical Specifications
 */
export const woocommerceSolutionSpecs = {
  technologies: [
    'WooCommerce 8.5+',
    'WordPress 6.4+',
    'PHP 8.2',
    'MySQL 8.0',
    'REST API',
    'Block-based checkout',
    'React (Gutenberg)',
    'Modern payment gateways'
  ],
  requirements: [
    'WooCommerce-optimized hosting',
    'SSL certificate (HTTPS required)',
    'PHP 8.0+ and MySQL 5.7+',
    'Minimum 2GB RAM recommended',
    'Regular backups',
    'Latest WooCommerce version'
  ],
  support: [
    'WooCommerce updates',
    'Payment gateway support',
    'Shipping configuration',
    'Product management training',
    'Order processing help',
    'Technical documentation',
    'Priority support available'
  ]
};

/**
 * Related Solutions
 */
export const woocommerceSolutionRelated = [
  {
    title: 'WordPress Solution',
    description: 'Build powerful WordPress websites for your business foundation.',
    page: 'wordpress-solution'
  },
  {
    title: 'WooCommerce Hosting',
    description: 'Optimized hosting for fast, secure WooCommerce stores.',
    page: 'hosting'
  },
  {
    title: 'Performance Optimization',
    description: 'Speed up your WooCommerce store for better conversions.',
    page: 'performance-service'
  }
];

/**
 * Solution FAQs
 */
export interface SolutionFAQ {
  question: string;
  answer: string;
}

export const woocommerceSolutionFAQs: SolutionFAQ[] = [
  {
    question: 'Why choose WooCommerce over Shopify or BigCommerce?',
    answer: 'WooCommerce offers complete ownership with no monthly platform fees or transaction costs. You have unlimited customization options, access to 55,000+ WordPress plugins, and can scale from a small shop to enterprise-level without platform restrictions. Unlike Shopify or BigCommerce, you\'re not locked into a proprietary platform.'
  },
  {
    question: 'How much does it cost to run a WooCommerce store?',
    answer: 'WooCommerce itself is free. Your costs are hosting ($20-200/month), domain ($15/year), SSL certificate (often free), and payment gateway fees (2-3% per transaction). There are no monthly platform fees or transaction fees beyond payment processing. This makes WooCommerce significantly more cost-effective than platforms like Shopify.'
  },
  {
    question: 'Can WooCommerce handle large product catalogs?',
    answer: 'Yes! WooCommerce can handle stores with thousands of products. We optimize performance with proper hosting, caching, database optimization, and CDN integration. Our largest WooCommerce stores have 10,000+ products with excellent performance.'
  },
  {
    question: 'What payment gateways can I use with WooCommerce?',
    answer: 'WooCommerce supports 100+ payment gateways including Stripe, PayPal, Square, Authorize.net, and region-specific options. You can offer credit cards, digital wallets (Apple Pay, Google Pay), bank transfers, and alternative payment methods. No transaction fees from WooCommerce itself.'
  },
  {
    question: 'Is WooCommerce secure for online payments?',
    answer: 'Yes, when properly configured. We implement SSL certificates, PCI-compliant payment processing, security plugins, regular updates, and follow WordPress security best practices. Payment data is processed securely by payment gateways, not stored on your server.'
  },
  {
    question: 'Can I sell digital products with WooCommerce?',
    answer: 'Absolutely! WooCommerce has built-in support for digital products with instant delivery, download tracking, and license key generation. Perfect for selling software, courses, ebooks, music, and other digital goods with no shipping required.'
  },
  {
    question: 'Does WooCommerce support subscriptions and recurring payments?',
    answer: 'Yes, with the WooCommerce Subscriptions extension. You can offer subscription products, memberships, recurring billing, free trials, and flexible payment schedules. Great for subscription boxes, SaaS products, and membership sites.'
  },
  {
    question: 'How long does it take to build a WooCommerce store?',
    answer: 'Timeline varies by complexity. A basic store (50 products) takes 6-8 weeks, a professional store (200 products) takes 8-12 weeks, and enterprise stores (custom features) take 12-20 weeks. We provide detailed timelines during the discovery phase.'
  }
];

/**
 * Solution CTA
 */
export const woocommerceSolutionCTA = {
  title: 'Ready to Launch Your Online Store?',
  description: 'Let\'s build a powerful WooCommerce store that drives sales and grows your business. Get a free consultation and project quote.',
  buttons: [
    {
      text: 'Get a Free Quote',
      page: 'contact',
      variant: 'default'
    },
    {
      text: 'View Portfolio',
      page: 'portfolio',
      variant: 'outline'
    }
  ]
};

/**
 * Helper Functions
 */

/**
 * Get WooCommerce solution data
 */
export function getWooCommerceSolution() {
  return {
    hero: woocommerceSolutionHero,
    overview: woocommerceSolutionOverview,
    features: woocommerceSolutionFeatures,
    useCases: woocommerceSolutionUseCases,
    pricing: woocommerceSolutionPricing,
    comparison: woocommerceSolutionComparison,
    benefits: woocommerceSolutionBenefits,
    specs: woocommerceSolutionSpecs,
    related: woocommerceSolutionRelated,
    faqs: woocommerceSolutionFAQs,
    cta: woocommerceSolutionCTA
  };
}
