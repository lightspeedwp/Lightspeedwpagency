/**
 * Service Comparison Data
 * 
 * Feature comparison across all service offerings.
 * Shows what's included in each service for transparency.
 * 
 * @module data/service-comparison
 */

/**
 * Feature Category
 * 
 * Grouping of related service features.
 */
export interface FeatureCategory {
  /** Category name */
  name: string;
  
  /** Category features */
  features: string[];
}

/**
 * Service Comparison
 * 
 * Service with its included features.
 */
export interface ServiceComparison {
  /** Service slug */
  slug: string;
  
  /** Service display name */
  name: string;
  
  /** Short description */
  description: string;
  
  /** All included features */
  features: string[];
  
  /** Highlighted/premium features */
  premiumFeatures?: string[];
}

/**
 * Feature Categories
 * 
 * All service features organized by category.
 */
export const featureCategories: FeatureCategory[] = [
  {
    name: 'Discovery & Planning',
    features: [
      'Stakeholder interviews',
      'User research & personas',
      'Competitive analysis',
      'Strategic roadmap',
      'Requirements documentation',
      'Technical specification',
      'Project timeline'
    ]
  },
  {
    name: 'Design & UX',
    features: [
      'Wireframing',
      'UI design mockups',
      'Responsive design',
      'Design system creation',
      'Prototype development',
      'Accessibility review',
      'Brand guidelines integration'
    ]
  },
  {
    name: 'Development',
    features: [
      'Custom WordPress theme',
      'Plugin development',
      'API integrations',
      'Database optimization',
      'Custom post types',
      'Advanced custom fields',
      'Multi-site setup',
      'Migration assistance'
    ]
  },
  {
    name: 'Content & SEO',
    features: [
      'Content strategy',
      'Content migration',
      'Content audit',
      'SEO optimization',
      'Schema markup',
      'Meta data optimization',
      'Sitemap generation'
    ]
  },
  {
    name: 'Performance & Security',
    features: [
      'Performance optimization',
      'Core Web Vitals tuning',
      'Image optimization',
      'Caching implementation',
      'Security hardening',
      'SSL certificate setup',
      'Regular security updates',
      'Malware scanning'
    ]
  },
  {
    name: 'Support & Maintenance',
    features: [
      'WordPress updates',
      'Plugin updates',
      'Bug fixes',
      'Technical support',
      '24/7 monitoring',
      'Regular backups',
      'Emergency response',
      'Monthly reports'
    ]
  },
  {
    name: 'Training & Documentation',
    features: [
      'Editor training',
      'Admin training',
      'Custom documentation',
      'Video tutorials',
      'Best practices guide'
    ]
  }
];

/**
 * Service Comparisons
 * 
 * All services with their included features.
 */
export const serviceComparisons: ServiceComparison[] = [
  {
    slug: 'discovery',
    name: 'Discovery',
    description: 'Strategic planning & research',
    features: [
      'Stakeholder interviews',
      'User research & personas',
      'Competitive analysis',
      'Strategic roadmap',
      'Requirements documentation',
      'Technical specification',
      'Project timeline'
    ],
    premiumFeatures: ['Strategic roadmap', 'Technical specification']
  },
  {
    slug: 'design',
    name: 'Design',
    description: 'UI/UX design services',
    features: [
      'Wireframing',
      'UI design mockups',
      'Responsive design',
      'Design system creation',
      'Prototype development',
      'Accessibility review',
      'Brand guidelines integration'
    ],
    premiumFeatures: ['Design system creation', 'Prototype development']
  },
  {
    slug: 'development',
    name: 'Development',
    description: 'Custom WordPress development',
    features: [
      'Custom WordPress theme',
      'Plugin development',
      'API integrations',
      'Database optimization',
      'Custom post types',
      'Advanced custom fields',
      'Multi-site setup',
      'Migration assistance'
    ],
    premiumFeatures: ['API integrations', 'Multi-site setup']
  },
  {
    slug: 'content',
    name: 'Content',
    description: 'Content strategy & creation',
    features: [
      'Content strategy',
      'Content migration',
      'Content audit',
      'SEO optimization',
      'Meta data optimization'
    ]
  },
  {
    slug: 'seo',
    name: 'SEO',
    description: 'Search engine optimization',
    features: [
      'SEO optimization',
      'Schema markup',
      'Meta data optimization',
      'Sitemap generation',
      'Performance optimization',
      'Core Web Vitals tuning'
    ],
    premiumFeatures: ['Schema markup', 'Core Web Vitals tuning']
  },
  {
    slug: 'performance',
    name: 'Performance',
    description: 'Speed & optimization',
    features: [
      'Performance optimization',
      'Core Web Vitals tuning',
      'Image optimization',
      'Caching implementation',
      'Database optimization'
    ],
    premiumFeatures: ['Core Web Vitals tuning', 'Caching implementation']
  },
  {
    slug: 'security',
    name: 'Security',
    description: 'Site security & hardening',
    features: [
      'Security hardening',
      'SSL certificate setup',
      'Regular security updates',
      'Malware scanning',
      'Regular backups',
      '24/7 monitoring'
    ],
    premiumFeatures: ['24/7 monitoring', 'Malware scanning']
  },
  {
    slug: 'accessibility',
    name: 'Accessibility',
    description: 'WCAG compliance',
    features: [
      'Accessibility review',
      'Wireframing',
      'UI design mockups',
      'Responsive design'
    ]
  },
  {
    slug: 'support',
    name: 'Support',
    description: 'Ongoing maintenance & support',
    features: [
      'WordPress updates',
      'Plugin updates',
      'Bug fixes',
      'Technical support',
      '24/7 monitoring',
      'Regular backups',
      'Emergency response',
      'Monthly reports'
    ],
    premiumFeatures: ['24/7 monitoring', 'Emergency response', 'Monthly reports']
  },
  {
    slug: 'migrations',
    name: 'Migrations',
    description: 'Platform & content migration',
    features: [
      'Content migration',
      'Migration assistance',
      'Database optimization',
      'SEO optimization',
      'Regular backups'
    ]
  },
  {
    slug: 'newsletter',
    name: 'Newsletter',
    description: 'Email marketing integration',
    features: [
      'Plugin development',
      'API integrations',
      'Custom post types',
      'Technical support'
    ]
  }
];

/**
 * Check if service includes a feature
 * 
 * @param serviceSlug - Service slug to check
 * @param featureName - Feature name to check
 * @returns True if service includes the feature
 */
export function serviceIncludesFeature(
  serviceSlug: string, 
  featureName: string
): boolean {
  const service = serviceComparisons.find(s => s.slug === serviceSlug);
  return service?.features.includes(featureName) || false;
}

/**
 * Get all services that include a feature
 * 
 * @param featureName - Feature name
 * @returns Array of services that include the feature
 */
export function getServicesWithFeature(featureName: string): ServiceComparison[] {
  return serviceComparisons.filter(service => 
    service.features.includes(featureName)
  );
}

/**
 * Get all unique features across all services
 * 
 * @returns Array of all unique feature names
 */
export function getAllFeatures(): string[] {
  const allFeatures = featureCategories.flatMap(cat => cat.features);
  return Array.from(new Set(allFeatures));
}

/**
 * Get service comparison by slug
 * 
 * @param slug - Service slug
 * @returns Service comparison or undefined
 */
export function getServiceComparison(slug: string): ServiceComparison | undefined {
  return serviceComparisons.find(s => s.slug === slug);
}

/**
 * Check if feature is premium for a service
 * 
 * @param serviceSlug - Service slug
 * @param featureName - Feature name
 * @returns True if feature is marked as premium
 */
export function isFeaturePremium(
  serviceSlug: string,
  featureName: string
): boolean {
  const service = serviceComparisons.find(s => s.slug === serviceSlug);
  return service?.premiumFeatures?.includes(featureName) || false;
}
