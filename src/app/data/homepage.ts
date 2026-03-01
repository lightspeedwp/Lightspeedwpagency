/**
 * Homepage Data
 * 
 * Real homepage content from LightSpeed WordPress Agency.
 * Real content extracted from https://lightspeedwp.agency
 * 
 * **REAL CONTENT SOURCE:** https://lightspeedwp.agency
 * **Last Updated:** 2025-01-09
 * 
 * WordPress: Maps to homepage template fields and patterns
 */

// Import real data
import { services } from './services';
import { blogPosts, featuredPosts } from './blog-posts';

/**
 * Hero Section Data
 * Real hero content from LightSpeed WP Agency homepage
 */
export const homepageHero = {
  badge: {
    icon: 'Sparkles',
    text: 'WordPress & WooCommerce Experts Since 2003'
  },
  title: 'Structured Publishing Systems for WordPress',
  titleHighlight: 'Publishing Systems', // Word to highlight with gradient
  description: 'We engineer governed WordPress systems — tokenised design, accessible markup, and measurable performance — so your editors publish with confidence and your site stays coherent at scale.',
  buttons: [
    {
      text: 'Request a Systems Audit',
      page: 'contact',
      variant: 'default'
    },
    {
      text: 'View Our Systems',
      page: 'services',
      variant: 'outline'
    }
  ],
  stats: [
    {
      icon: 'Award',
      value: '22+',
      label: 'Years Experience'
    },
    {
      icon: 'Users',
      value: '120+',
      label: 'Websites Hosted'
    },
    {
      icon: 'Heart',
      value: 'WooExpert',
      label: 'Certified Agency'
    },
    {
      icon: 'Target',
      value: '2003',
      label: 'Established'
    }
  ]
};

/**
 * Services Section Data
 * 
 * Real LightSpeed services manually mapped with icon names (strings)
 * for homepage compatibility with icon map
 */
export const homepageServices = [
  {
    icon: 'Palette',
    title: 'Design',
    description: 'Beautiful, conversion-focused website design that drives results',
    slug: 'design'
  },
  {
    icon: 'Code',
    title: 'Development',
    description: 'Expert WordPress development with coding skills you can rely on',
    slug: 'development'
  },
  {
    icon: 'Search',
    title: 'Discovery',
    description: 'Understanding your needs to deliver the right solutions',
    slug: 'discovery'
  },
  {
    icon: 'HelpCircle',
    title: 'Support',
    description: 'The expertise you can rely on for ongoing success',
    slug: 'support'
  },
  {
    icon: 'Shield',
    title: 'Security',
    description: 'Security governance: daily scanning, patching, and incident playbooks',
    slug: 'security'
  },
  {
    icon: 'Zap',
    title: 'Hosting',
    description: 'Safe and stable managed WordPress hosting',
    slug: 'hosting'
  },
  {
    icon: 'RefreshCw',
    title: 'Migrations',
    description: 'Smooth migrations with no data loss or downtime',
    slug: 'migrations'
  },
  {
    icon: 'FileText',
    title: 'Content',
    description: 'Content audit, strategy and creation services',
    slug: 'content'
  },
  {
    icon: 'Globe',
    title: 'Mailchimp',
    description: 'Email marketing that drives sales and engagement',
    slug: 'mailchimp'
  }
];

/**
 * Client Logos Section
 * 
 * Showcase of trusted client brands
 */
export const homepageClients = [
  {
    name: 'Deloitte',
    logo: 'https://images.unsplash.com/photo-1599305445671-ac291c95aaa9?w=120&h=60&fit=crop'
  },
  {
    name: 'Nike',
    logo: 'https://images.unsplash.com/photo-1542291026-7eec264c27ff?w=120&h=60&fit=crop'
  },
  {
    name: 'Google',
    logo: 'https://images.unsplash.com/photo-1573804633927-bfcbcd909acd?w=120&h=60&fit=crop'
  },
  {
    name: 'Amazon',
    logo: 'https://images.unsplash.com/photo-1523474253046-8cd2748b5fd2?w=120&h=60&fit=crop'
  },
  {
    name: 'Microsoft',
    logo: 'https://images.unsplash.com/photo-1488190211105-8b0e65b80b4e?w=120&h=60&fit=crop'
  },
  {
    name: 'Apple',
    logo: 'https://images.unsplash.com/photo-1611186871348-b1ce696e52c9?w=120&h=60&fit=crop'
  }
];

/**
 * Partner Badges
 * 
 * WordPress ecosystem certifications and partnerships
 */
export const homepagePartners = [
  {
    name: 'WordPress VIP Partner',
    emoji: '🏆',
    description: 'Official WordPress VIP Agency Partner'
  },
  {
    name: 'WooCommerce Expert',
    emoji: '🛒',
    description: 'Certified WooCommerce Development Partner'
  },
  {
    name: 'WPML Certified',
    emoji: '🌍',
    description: 'Multilingual WordPress Solutions Expert'
  },
  {
    name: 'GiveWP Partner',
    emoji: '💝',
    description: 'Donation and Fundraising Platform Partner'
  }
];

/**
 * Solutions Showcase
 * 
 * Featured solution offerings
 */
export const homepageSolutions = [
  {
    icon: 'ShoppingCart',
    title: 'WooCommerce Solutions',
    description: 'Build powerful online stores that scale with your business.',
    features: [
      'Custom store design',
      'Payment gateway integration',
      'Inventory management',
      'SEO optimization'
    ],
    slug: 'woocommerce'
  },
  {
    icon: 'Code',
    title: 'WordPress Development',
    description: 'Enterprise-grade development with modern best practices.',
    features: [
      'Custom themes',
      'Plugin development',
      'API integrations',
      'Performance optimization'
    ],
    slug: 'wordpress'
  },
  {
    icon: 'RefreshCw',
    title: 'Platform Migrations',
    description: 'Seamless migrations to WordPress and WooCommerce.',
    features: [
      'Data migration',
      'SEO preservation',
      'Zero downtime',
      'URL redirects'
    ],
    slug: 'migrations'
  }
];

/**
 * Featured Project
 * 
 * Showcase portfolio highlight
 */
export const homepageFeaturedProject = {
  title: 'ARMD Digital - Email Security Platform',
  category: 'Technology',
  description: 'Custom WooCommerce solution with partner commission system and streamlined services for email security.',
  image: 'https://images.unsplash.com/photo-1563986768609-322da13575f3?w=1200&h=800&fit=crop',
  stats: [
    {
      value: 'Enhanced',
      label: 'Operational Efficiency'
    },
    {
      value: 'Positive',
      label: 'User Experience'
    },
    {
      value: 'Expert',
      label: 'Code Quality'
    }
  ],
  technologies: ['WordPress', 'WooCommerce', 'Custom Development', 'API Integration'],
  slug: 'armd-digital'
};

/**
 * Featured Blog Posts
 * 
 * Real blog posts from LightSpeed WordPress Agency
 * Uses first 4 posts from blog-posts.ts
 */
export const homepageBlogPosts = featuredPosts.slice(0, 4).map(post => ({
  title: post.title,
  excerpt: post.excerpt,
  image: post.featuredImage,
  category: post.categories[0] || 'News',
  date: new Date(post.date).toLocaleDateString('en-US', { 
    month: 'short', 
    day: 'numeric', 
    year: 'numeric' 
  }),
  slug: post.slug,
  readingTime: post.readingTime
}));

/**
 * CTA Section Data
 */
export const homepageCTA = {
  title: 'Ready to Build Something Amazing?',
  description: 'Let\'s discuss how we can help you achieve your WordPress goals.',
  buttons: [
    {
      text: 'Request a Systems Audit',
      page: 'contact',
      variant: 'default'
    },
    {
      text: 'View Pricing',
      page: 'pricing',
      variant: 'outline'
    }
  ]
};

/**
 * Newsletter Section Data
 */
export const homepageNewsletter = {
  title: 'Stay Updated',
  description: 'Get WordPress tips, WooCommerce insights, and industry news delivered to your inbox.',
  placeholder: 'Enter your email address',
  buttonText: 'Subscribe',
  privacyText: 'We respect your privacy. Unsubscribe at any time.'
};