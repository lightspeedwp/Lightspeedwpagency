/**
 * Feature Comparison Mock Data
 * 
 * Feature-by-feature comparison data for pricing plans and service packages.
 * 
 * **WordPress Mapping:**
 * - Could be custom post type 'comparison_feature'
 * - Or ACF repeater fields
 * - Used for detailed pricing/service comparison tables
 * 
 * **Business Context:**
 * LSX Design provides transparent feature comparisons
 * to help clients choose the right package.
 */

export interface ComparisonFeature {
  id: string;
  name: string;
  category?: string;  // Optional grouping (e.g., "Design", "Development", "Support")
  basic: boolean | string;     // true/false or custom text like "Up to 5"
  professional: boolean | string;
  enterprise: boolean | string;
  tooltip?: string;  // Optional feature explanation
}

/**
 * Website Package Feature Comparison
 * Detailed comparison of Starter, Professional, and Enterprise packages
 */
export const websiteFeatureComparison: ComparisonFeature[] = [
  // Pages & Content
  {
    id: 'pages',
    name: 'Number of Pages',
    category: 'Content',
    basic: 'Up to 5',
    professional: 'Up to 15',
    enterprise: 'Unlimited',
    tooltip: 'Static pages included in initial build'
  },
  {
    id: 'blog',
    name: 'Blog Setup',
    category: 'Content',
    basic: false,
    professional: true,
    enterprise: true
  },
  {
    id: 'content-training',
    name: 'Content Management Training',
    category: 'Content',
    basic: '1 hour',
    professional: '2 hours',
    enterprise: 'Unlimited'
  },
  
  // Design
  {
    id: 'responsive-design',
    name: 'Mobile Responsive Design',
    category: 'Design',
    basic: true,
    professional: true,
    enterprise: true
  },
  {
    id: 'custom-design',
    name: 'Custom Design Mockups',
    category: 'Design',
    basic: false,
    professional: '3 revisions',
    enterprise: 'Unlimited',
    tooltip: 'Custom design mockups before development'
  },
  {
    id: 'design-system',
    name: 'Custom Design System',
    category: 'Design',
    basic: false,
    professional: false,
    enterprise: true,
    tooltip: 'Complete design system with tokens and documentation'
  },
  {
    id: 'animations',
    name: 'Advanced Animations',
    category: 'Design',
    basic: false,
    professional: true,
    enterprise: true
  },
  
  // Development
  {
    id: 'contact-form',
    name: 'Contact Form Integration',
    category: 'Development',
    basic: true,
    professional: true,
    enterprise: true
  },
  {
    id: 'newsletter',
    name: 'Newsletter Integration',
    category: 'Development',
    basic: false,
    professional: true,
    enterprise: true
  },
  {
    id: 'ecommerce',
    name: 'E-commerce (WooCommerce)',
    category: 'Development',
    basic: false,
    professional: 'Add $2,000',
    enterprise: true
  },
  {
    id: 'custom-integrations',
    name: 'Custom API Integrations',
    category: 'Development',
    basic: false,
    professional: '2 integrations',
    enterprise: 'Unlimited'
  },
  {
    id: 'multilingual',
    name: 'Multilingual Support',
    category: 'Development',
    basic: false,
    professional: 'Add $1,500',
    enterprise: true
  },
  {
    id: 'headless',
    name: 'Headless CMS Option',
    category: 'Development',
    basic: false,
    professional: false,
    enterprise: true,
    tooltip: 'Decouple WordPress backend from frontend'
  },
  
  // SEO & Analytics
  {
    id: 'seo-basics',
    name: 'SEO Setup',
    category: 'SEO & Analytics',
    basic: 'Basic',
    professional: 'Advanced',
    enterprise: 'Comprehensive',
    tooltip: 'Technical SEO, meta tags, schema markup'
  },
  {
    id: 'analytics',
    name: 'Analytics Integration',
    category: 'SEO & Analytics',
    basic: 'Google Analytics',
    professional: 'GA + Search Console',
    enterprise: 'Advanced Analytics',
    tooltip: 'Google Analytics, Search Console, and custom tracking'
  },
  
  // Performance & Security
  {
    id: 'performance',
    name: 'Performance Optimization',
    category: 'Performance',
    basic: 'Standard',
    professional: 'Optimized',
    enterprise: 'Enterprise-grade',
    tooltip: 'Core Web Vitals optimization'
  },
  {
    id: 'security',
    name: 'Security Setup',
    category: 'Security',
    basic: 'Basic',
    professional: 'Advanced',
    enterprise: 'Enterprise-grade',
    tooltip: 'Security hardening, SSL, and monitoring'
  },
  
  // Support & Maintenance
  {
    id: 'support-duration',
    name: 'Post-Launch Support',
    category: 'Support',
    basic: '30 days',
    professional: '90 days',
    enterprise: '6 months'
  },
  {
    id: 'priority-support',
    name: 'Priority Support',
    category: 'Support',
    basic: false,
    professional: true,
    enterprise: true
  },
  {
    id: 'project-manager',
    name: 'Dedicated Project Manager',
    category: 'Support',
    basic: false,
    professional: false,
    enterprise: true
  },
  {
    id: 'sla',
    name: 'SLA Guarantees',
    category: 'Support',
    basic: false,
    professional: false,
    enterprise: true,
    tooltip: 'Service Level Agreement with uptime guarantees'
  },
  
  // Deliverables
  {
    id: 'documentation',
    name: 'Documentation',
    category: 'Deliverables',
    basic: 'Basic',
    professional: 'Comprehensive',
    enterprise: 'Technical Docs',
    tooltip: 'User guides and technical documentation'
  },
  {
    id: 'stock-photos',
    name: 'Stock Photography',
    category: 'Deliverables',
    basic: '10 images',
    professional: '25 images',
    enterprise: 'Custom photography',
    tooltip: 'Professional stock images or custom photography coordination'
  }
];

/**
 * Maintenance Package Feature Comparison
 * Detailed comparison of Essential, Professional, and Enterprise care
 */
export const maintenanceFeatureComparison: ComparisonFeature[] = [
  {
    id: 'wp-updates',
    name: 'WordPress Core Updates',
    category: 'Updates',
    basic: true,
    professional: true,
    enterprise: true
  },
  {
    id: 'plugin-updates',
    name: 'Plugin Updates',
    category: 'Updates',
    basic: true,
    professional: true,
    enterprise: true
  },
  {
    id: 'theme-updates',
    name: 'Theme Updates',
    category: 'Updates',
    basic: true,
    professional: true,
    enterprise: true
  },
  {
    id: 'security-monitoring',
    name: 'Security Monitoring',
    category: 'Security',
    basic: 'Daily',
    professional: 'Real-time',
    enterprise: '24/7 monitoring'
  },
  {
    id: 'backups',
    name: 'Backups',
    category: 'Security',
    basic: 'Daily',
    professional: 'Daily',
    enterprise: 'Hourly'
  },
  {
    id: 'uptime-monitoring',
    name: 'Uptime Monitoring',
    category: 'Monitoring',
    basic: true,
    professional: true,
    enterprise: true
  },
  {
    id: 'content-updates',
    name: 'Content Updates',
    category: 'Updates',
    basic: false,
    professional: '4 hours/month',
    enterprise: 'Unlimited'
  },
  {
    id: 'design-changes',
    name: 'Design Changes',
    category: 'Updates',
    basic: false,
    professional: 'Minor tweaks',
    enterprise: 'Unlimited'
  },
  {
    id: 'performance-optimization',
    name: 'Performance Optimization',
    category: 'Optimization',
    basic: false,
    professional: 'Quarterly',
    enterprise: 'Monthly'
  },
  {
    id: 'seo-monitoring',
    name: 'SEO Monitoring',
    category: 'SEO',
    basic: false,
    professional: true,
    enterprise: true
  },
  {
    id: 'priority-support',
    name: 'Priority Support',
    category: 'Support',
    basic: false,
    professional: true,
    enterprise: true
  },
  {
    id: 'account-manager',
    name: 'Dedicated Account Manager',
    category: 'Support',
    basic: false,
    professional: false,
    enterprise: true
  },
  {
    id: 'response-time',
    name: 'Response Time',
    category: 'Support',
    basic: '48 hours',
    professional: '24 hours',
    enterprise: '4 hours'
  },
  {
    id: 'support-channels',
    name: 'Support Channels',
    category: 'Support',
    basic: 'Email',
    professional: 'Email + Chat',
    enterprise: 'Phone + Email + Chat'
  },
  {
    id: 'monthly-reports',
    name: 'Monthly Reports',
    category: 'Reporting',
    basic: true,
    professional: true,
    enterprise: true
  },
  {
    id: 'strategy-calls',
    name: 'Monthly Strategy Calls',
    category: 'Support',
    basic: false,
    professional: false,
    enterprise: true
  },
  {
    id: 'security-audits',
    name: 'Security Audits',
    category: 'Security',
    basic: false,
    professional: false,
    enterprise: 'Quarterly'
  },
  {
    id: 'sla-guarantees',
    name: 'SLA Guarantees',
    category: 'Support',
    basic: false,
    professional: false,
    enterprise: true
  }
];

/**
 * Helper Functions
 */

export function getFeatureById(id: string, comparisonType: 'website' | 'maintenance'): ComparisonFeature | undefined {
  const features = comparisonType === 'website' 
    ? websiteFeatureComparison 
    : maintenanceFeatureComparison;
  return features.find(feature => feature.id === id);
}

export function getFeaturesByCategory(category: string, comparisonType: 'website' | 'maintenance'): ComparisonFeature[] {
  const features = comparisonType === 'website' 
    ? websiteFeatureComparison 
    : maintenanceFeatureComparison;
  return features.filter(feature => feature.category === category);
}

export function getAllCategories(comparisonType: 'website' | 'maintenance'): string[] {
  const features = comparisonType === 'website' 
    ? websiteFeatureComparison 
    : maintenanceFeatureComparison;
  const categories = features
    .map(feature => feature.category)
    .filter((category): category is string => category !== undefined);
  return Array.from(new Set(categories));
}
