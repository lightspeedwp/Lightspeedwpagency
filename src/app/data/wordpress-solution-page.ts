/**
 * WordPress Solution Page Data
 * 
 * Real content for WordPress solution landing page from LightSpeed WP Agency.
 * Real content extracted from https://lightspeedwp.agency
 * 
 * **REAL CONTENT SOURCE:** https://lightspeedwp.agency/solutions/wordpress
 * **Last Updated:** 2025-01-09
 * 
 * WordPress: Maps to templates/page-solution-wordpress.html
 */

import { 
  Code,
  Blocks,
  Zap,
  Shield,
  Smartphone,
  Search,
  Palette,
  Settings,
  TrendingUp,
  Users,
  Award,
  CheckCircle,
  Target
} from 'lucide-react';
import type { LucideIcon } from 'lucide-react';

/**
 * Solution Hero Content
 */
export const wordpressSolutionHero = {
  badge: {
    icon: Code,
    text: 'WordPress Solution'
  },
  title: 'Modern WordPress Websites Built for Growth',
  titleHighlight: 'WordPress', // Word to highlight
  tagline: 'Professional WordPress development using Full Site Editing, block themes, and modern best practices',
  description: 'We build high-performance WordPress websites that are fast, secure, accessible, and easy to manage. From startups to enterprise, our WordPress solutions scale with your business using modern development practices including FSE, design systems, and performance optimization.'
};

/**
 * Solution Overview
 */
export const wordpressSolutionOverview = {
  title: 'Why Choose WordPress?',
  description: 'WordPress powers 43% of all websites globally for good reason. It\'s flexible, scalable, and cost-effective. Our WordPress solutions combine the platform\'s power with modern development practices to deliver websites that drive results.',
  stats: [
    {
      icon: TrendingUp,
      value: '43%',
      label: 'Of All Websites',
      description: 'WordPress market share globally'
    },
    {
      icon: Users,
      value: '100+',
      label: 'Sites Built',
      description: 'WordPress projects delivered'
    },
    {
      icon: Zap,
      value: '90+',
      label: 'Lighthouse Score',
      description: 'Performance optimization'
    },
    {
      icon: Award,
      value: '22+',
      label: 'Years Combined',
      description: 'WordPress expertise'
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

export const wordpressSolutionFeatures: SolutionFeature[] = [
  {
    icon: Blocks,
    title: 'Full Site Editing (FSE)',
    description: 'Modern block themes using WordPress Full Site Editing for complete visual control. Edit every part of your site in the block editor without touching code.'
  },
  {
    icon: Zap,
    title: 'Performance Optimized',
    description: 'Fast-loading WordPress sites with 90+ Lighthouse scores. Optimized images, efficient code, caching strategies, and CDN integration for speed.'
  },
  {
    icon: Shield,
    title: 'Security Hardened',
    description: 'Enterprise-grade security with regular updates, malware scanning, firewall protection, and security best practices to keep your site safe.'
  },
  {
    icon: Smartphone,
    title: 'Mobile Responsive',
    description: 'Fully responsive designs that work beautifully on all devices. Mobile-first approach with touch-friendly interfaces and optimized mobile performance.'
  },
  {
    icon: Search,
    title: 'SEO Friendly',
    description: 'Built-in SEO optimization with clean code, fast loading, schema markup, XML sitemaps, and technical SEO best practices for better rankings.'
  },
  {
    icon: Palette,
    title: 'Design System',
    description: 'Centralized design systems using theme.json for consistent branding. Easy theme customization without developer intervention.'
  },
  {
    icon: Settings,
    title: 'Easy Content Management',
    description: 'Intuitive WordPress block editor makes it easy for non-technical users to create and manage content. No coding required.'
  },
  {
    icon: Code,
    title: 'Custom Development',
    description: 'Custom plugins, integrations, and functionality tailored to your specific business needs. Clean, maintainable code following WordPress standards.'
  }
];

/**
 * Use Cases
 */
export const wordpressSolutionUseCases = [
  {
    title: 'Business Websites',
    description: 'Professional corporate websites with custom designs, content management, and integrations for businesses of all sizes.',
    industries: ['Professional Services', 'Technology', 'Finance', 'Healthcare'],
    features: [
      'Custom block themes',
      'Team member profiles',
      'Service/product pages',
      'Contact forms',
      'Blog/news section',
      'SEO optimization'
    ]
  },
  {
    title: 'E-commerce Stores',
    description: 'WooCommerce-powered online stores with payment gateways, inventory management, and shipping integrations.',
    industries: ['Retail', 'Consumer Goods', 'Wholesale', 'Services'],
    features: [
      'WooCommerce integration',
      'Payment gateways',
      'Product management',
      'Shipping options',
      'Customer accounts',
      'Email marketing'
    ]
  },
  {
    title: 'Membership Sites',
    description: 'Membership and subscription websites with user registration, content protection, and payment processing.',
    industries: ['Education', 'Fitness', 'Communities', 'Subscription Services'],
    features: [
      'Member registration',
      'Content restriction',
      'Subscription management',
      'User profiles',
      'Community features',
      'Payment processing'
    ]
  },
  {
    title: 'Content Publishing',
    description: 'News sites, magazines, and blogs with advanced content management, multi-author support, and advertising integration.',
    industries: ['Media', 'Publishing', 'News', 'Blogs'],
    features: [
      'Advanced blog features',
      'Multi-author support',
      'Content scheduling',
      'Newsletter integration',
      'Ad management',
      'Social sharing'
    ]
  }
];

/**
 * WordPress Packages/Pricing
 */
export const wordpressSolutionPricing = {
  title: 'WordPress Development Packages',
  description: 'Flexible pricing options for WordPress websites of all sizes',
  packages: [
    {
      name: 'Starter',
      price: '$5,000 - $10,000',
      description: 'Perfect for small businesses and startups',
      features: [
        'Custom block theme',
        'Up to 10 pages',
        'Mobile responsive',
        'SEO optimization',
        'Contact forms',
        'Google Analytics',
        'SSL certificate',
        '30 days support'
      ],
      recommended: false
    },
    {
      name: 'Professional',
      price: '$10,000 - $25,000',
      description: 'For growing businesses with complex needs',
      features: [
        'Everything in Starter',
        'Up to 25 pages',
        'Custom plugins',
        'Advanced integrations',
        'Performance optimization',
        'Content migration',
        'Training & documentation',
        '90 days support'
      ],
      recommended: true
    },
    {
      name: 'Enterprise',
      price: '$25,000+',
      description: 'For large organizations and complex projects',
      features: [
        'Everything in Professional',
        'Unlimited pages',
        'Multisite capability',
        'Advanced security',
        'Custom workflows',
        'API development',
        'Dedicated project manager',
        '12 months support'
      ],
      recommended: false
    }
  ]
};

/**
 * Feature Comparison
 */
export const wordpressSolutionComparison = {
  title: 'WordPress vs Other Platforms',
  features: [
    {
      feature: 'Cost of Ownership',
      wordpress: 'Low - Open source, affordable hosting',
      shopify: 'Medium - Monthly fees + transaction fees',
      custom: 'High - Expensive development & maintenance'
    },
    {
      feature: 'Flexibility',
      wordpress: 'High - Unlimited customization options',
      shopify: 'Medium - Template-based with limitations',
      custom: 'High - Fully custom but expensive'
    },
    {
      feature: 'Ease of Use',
      wordpress: 'Easy - Intuitive block editor',
      shopify: 'Easy - Beginner-friendly',
      custom: 'Hard - Requires technical knowledge'
    },
    {
      feature: 'SEO Capabilities',
      wordpress: 'Excellent - Best-in-class SEO',
      shopify: 'Good - Basic SEO features',
      custom: 'Variable - Depends on implementation'
    },
    {
      feature: 'Scalability',
      wordpress: 'Excellent - Scales to any size',
      shopify: 'Good - Limited by platform',
      custom: 'Excellent - If built correctly'
    },
    {
      feature: 'Community & Support',
      wordpress: 'Massive - Largest CMS community',
      shopify: 'Medium - Shopify-specific',
      custom: 'Limited - Depends on developer'
    }
  ]
};

/**
 * WordPress Benefits
 */
export const wordpressSolutionBenefits = [
  'Complete ownership and control of your website',
  'No monthly platform fees or transaction costs',
  'Unlimited customization possibilities',
  'Thousands of plugins and themes available',
  'Excellent SEO capabilities out of the box',
  'Easy content management with block editor',
  'Scales from small blogs to enterprise sites',
  'Large community and extensive documentation',
  'Regular security updates and improvements',
  'Future-proof with Full Site Editing'
];

/**
 * Technical Specifications
 */
export const wordpressSolutionSpecs = {
  technologies: [
    'WordPress 6.4+',
    'Full Site Editing (FSE)',
    'Block Themes',
    'theme.json Design Systems',
    'PHP 8.2',
    'MySQL 8.0',
    'React (Gutenberg)',
    'REST API'
  ],
  requirements: [
    'Managed WordPress hosting recommended',
    'SSL certificate (HTTPS)',
    'Regular backups',
    'PHP 8.0+ and MySQL 5.7+',
    'Minimum 1GB RAM',
    'Latest WordPress version'
  ],
  support: [
    'WordPress core updates',
    'Plugin/theme updates',
    'Security monitoring',
    'Performance optimization',
    'Content training',
    'Technical documentation',
    'Priority support available'
  ]
};

/**
 * Related Solutions
 */
export const wordpressSolutionRelated = [
  {
    title: 'WooCommerce Solution',
    description: 'Build powerful e-commerce stores with WooCommerce and WordPress.',
    page: 'woocommerce-solution'
  },
  {
    title: 'WordPress Hosting',
    description: 'Secure managed WordPress hosting with daily backups and monitoring.',
    page: 'hosting'
  },
  {
    title: 'WordPress Security',
    description: 'Protect your WordPress site from malware, hacks, and security threats.',
    page: 'security-service'
  }
];

/**
 * Solution FAQs
 */
export interface SolutionFAQ {
  question: string;
  answer: string;
}

export const wordpressSolutionFAQs: SolutionFAQ[] = [
  {
    question: 'Why should I choose WordPress over other platforms?',
    answer: 'WordPress offers the best combination of flexibility, cost-effectiveness, and ease of use. It powers 43% of all websites globally, has the largest community, excellent SEO capabilities, and unlimited customization options. Unlike proprietary platforms, you own your website completely with no monthly platform fees or transaction costs.'
  },
  {
    question: 'What is Full Site Editing (FSE)?',
    answer: 'Full Site Editing is WordPress\'s modern approach to building websites using the block editor for all parts of your site, including headers, footers, and templates. It gives you complete visual control without touching code, uses theme.json for centralized design systems, and represents the future of WordPress development.'
  },
  {
    question: 'How long does it take to build a WordPress website?',
    answer: 'Timeline varies based on complexity. A simple WordPress site (5-10 pages) typically takes 4-6 weeks, a professional site (10-25 pages) takes 6-10 weeks, and enterprise sites (25+ pages with custom features) take 10-16 weeks. We provide detailed timelines during the discovery phase.'
  },
  {
    question: 'Will my WordPress site be fast and perform well?',
    answer: 'Yes! We build WordPress sites optimized for performance with 90+ Lighthouse scores. This includes optimized images, efficient code, caching strategies, CDN integration, and database optimization. Performance is a core focus of all our WordPress projects.'
  },
  {
    question: 'Is WordPress secure?',
    answer: 'WordPress core is very secure and regularly updated. We implement security best practices including regular updates, strong passwords, security plugins, firewall protection, malware scanning, SSL certificates, and regular backups. Our managed hosting includes proactive security monitoring.'
  },
  {
    question: 'Can I manage content myself without technical knowledge?',
    answer: 'Absolutely! WordPress\'s block editor is designed for non-technical users. It\'s intuitive, visual, and requires no coding. We provide training and documentation so you can confidently create and manage content. Most clients are updating their sites within hours of training.'
  },
  {
    question: 'Do you provide WordPress hosting?',
    answer: 'Yes! We offer secure managed WordPress hosting optimized for performance and security. It includes daily backups, automatic updates, security monitoring, SSL certificates, CDN, and expert support. You can also use your preferred hosting provider.'
  },
  {
    question: 'What happens after my WordPress site launches?',
    answer: 'We provide ongoing support options including WordPress updates, security monitoring, content updates, performance optimization, and technical support. You can choose from monthly maintenance plans or on-demand support based on your needs.'
  }
];

/**
 * Solution CTA
 */
export const wordpressSolutionCTA = {
  title: 'Ready to Build Your WordPress Website?',
  description: 'Let\'s create a powerful WordPress website that helps your business grow. Get a free consultation and project quote.',
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
 * Get solution by slug
 */
export function getWordPressSolution() {
  return {
    hero: wordpressSolutionHero,
    overview: wordpressSolutionOverview,
    features: wordpressSolutionFeatures,
    useCases: wordpressSolutionUseCases,
    pricing: wordpressSolutionPricing,
    comparison: wordpressSolutionComparison,
    benefits: wordpressSolutionBenefits,
    specs: wordpressSolutionSpecs,
    related: wordpressSolutionRelated,
    faqs: wordpressSolutionFAQs,
    cta: wordpressSolutionCTA
  };
}
