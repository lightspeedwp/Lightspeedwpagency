/**
 * Homepage Data
 * 
 * Centralized data for the front page template.
 * All content, images, and structured data for the homepage.
 * 
 * WordPress: Maps to homepage template fields and patterns
 */

/**
 * Hero Section Data
 */
export const homepageHero = {
  badge: {
    icon: 'Sparkles',
    text: 'WordPress & WooCommerce Experts'
  },
  title: 'Expert WordPress & WooCommerce Solutions',
  titleHighlight: 'WooCommerce', // Word to highlight with gradient
  description: 'We help businesses scale with enterprise-level WordPress development, stunning design, and expert WooCommerce solutions.',
  buttons: [
    {
      text: 'Get Started',
      page: 'contact',
      variant: 'default'
    },
    {
      text: 'View Our Work',
      page: 'portfolio',
      variant: 'outline'
    }
  ],
  stats: [
    {
      icon: 'Target',
      value: '500+',
      label: 'Projects Delivered'
    },
    {
      icon: 'Users',
      value: '200+',
      label: 'Happy Clients'
    },
    {
      icon: 'Award',
      value: '15+',
      label: 'Years WordPress Expertise'
    },
    {
      icon: 'Heart',
      value: '99%',
      label: 'Client Satisfaction'
    }
  ]
};

/**
 * Services Section Data
 * 
 * 8 core services matching Lightspeed WP offerings
 */
export const homepageServices = [
  {
    icon: 'Code',
    title: 'Development',
    description: 'Custom WordPress development with modern best practices and scalable architecture.',
    slug: 'development'
  },
  {
    icon: 'Palette',
    title: 'Design Excellence',
    description: 'Beautiful, user-focused designs that drive engagement and conversions.',
    slug: 'design'
  },
  {
    icon: 'Shield',
    title: 'Support & Maintenance',
    description: 'Ongoing support to keep your WordPress site secure, fast, and up-to-date.',
    slug: 'support'
  },
  {
    icon: 'Zap',
    title: 'Managed Hosting',
    description: 'High-performance WordPress hosting with expert management and monitoring.',
    slug: 'hosting'
  },
  {
    icon: 'ShoppingCart',
    title: 'eCommerce Stores',
    description: 'Powerful WooCommerce solutions that turn visitors into customers.',
    slug: 'woocommerce'
  },
  {
    icon: 'RefreshCw',
    title: 'eCommerce Migrations',
    description: 'Seamless migrations from Shopify, Magento, or other platforms to WooCommerce.',
    slug: 'migrations'
  },
  {
    icon: 'HelpCircle',
    title: 'Your Questions',
    description: 'Expert WordPress consultation to help you make the right decisions.',
    slug: 'consultation'
  },
  {
    icon: 'GraduationCap',
    title: 'eLearning',
    description: 'Custom LMS solutions and online course platforms with WordPress.',
    slug: 'elearning'
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
  title: 'Leading African Tour Operator',
  category: 'Travel & Tourism',
  description: 'Complete digital transformation with custom booking system and multilingual support.',
  image: 'https://images.unsplash.com/photo-1523906834658-6e24ef2386f9?w=1200&h=800&fit=crop',
  stats: [
    {
      value: '300%',
      label: 'Increase in Online Bookings'
    },
    {
      value: '50%',
      label: 'Faster Page Load Times'
    },
    {
      value: '4.9★',
      label: 'Customer Rating'
    }
  ],
  technologies: ['WordPress', 'WooCommerce', 'WPML', 'Custom Booking System'],
  slug: 'african-tour-operator'
};

/**
 * Featured Blog Posts
 * 
 * Latest insights and articles
 */
export const homepageBlogPosts = [
  {
    title: 'The power of your WordPress website',
    excerpt: 'Discover how a well-optimized WordPress site can transform your business.',
    image: 'https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=600&h=400&fit=crop',
    category: 'WordPress',
    date: 'Dec 15, 2024',
    slug: 'power-of-wordpress'
  },
  {
    title: 'Compelling Content: captivate and convert',
    excerpt: 'Learn the art of creating content that engages and converts visitors.',
    image: 'https://images.unsplash.com/photo-1455390582262-044cdead277a?w=600&h=400&fit=crop',
    category: 'Content',
    date: 'Dec 10, 2024',
    slug: 'compelling-content'
  },
  {
    title: 'Creative strategy that drives results',
    excerpt: 'Strategic approaches to building successful WordPress projects.',
    image: 'https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=600&h=400&fit=crop',
    category: 'Strategy',
    date: 'Dec 5, 2024',
    slug: 'creative-strategy'
  },
  {
    title: 'A strategic approach to ecommerce growth',
    excerpt: 'Proven tactics for scaling your WooCommerce business.',
    image: 'https://images.unsplash.com/photo-1472851294608-062f824d29cc?w=600&h=400&fit=crop',
    category: 'eCommerce',
    date: 'Nov 30, 2024',
    slug: 'ecommerce-growth'
  }
];

/**
 * CTA Section Data
 */
export const homepageCTA = {
  title: 'Ready to Build Something Amazing?',
  description: 'Let\'s discuss how we can help you achieve your WordPress goals.',
  buttons: [
    {
      text: 'Start Your Project',
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
