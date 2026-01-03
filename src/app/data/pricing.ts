/**
 * Pricing & Packages Mock Data
 * 
 * Service packages and pricing tiers for LSX Design.
 * 
 * **WordPress Mapping:**
 * - Could be custom post type 'pricing_package'
 * - Or ACF fields on pricing page
 * - Used for transparent pricing display
 * 
 * **Business Context:**
 * LSX Design offers tiered packages for different project sizes
 * and ongoing support/maintenance plans.
 */

export interface PricingPackage {
  id: string;
  name: string;
  slug: string;
  tagline: string;
  description: string;
  price: {
    amount: number;
    currency: string;
    period?: string; // 'one-time', 'monthly', 'project'
    display: string;  // How to display price
  };
  features: PricingFeature[];
  highlights?: string[]; // Key selling points
  cta: {
    text: string;
    action: 'contact' | 'book-call' | 'get-quote';
  };
  recommended?: boolean;
  category: 'website' | 'maintenance' | 'custom';
  deliverables?: string[];
  timeline?: string;
  support?: string;
}

export interface PricingFeature {
  name: string;
  included: boolean;
  limit?: string; // e.g., "Up to 10 pages", "5 revisions"
  tooltip?: string;
}

/**
 * Website Build Packages
 */
export const websitePackages: PricingPackage[] = [
  {
    id: 'pkg-starter',
    name: 'Starter',
    slug: 'starter',
    tagline: 'Perfect for small businesses',
    description: 'A professional WordPress website with essential features to get your business online quickly.',
    price: {
      amount: 3500,
      currency: 'USD',
      period: 'one-time',
      display: '$3,500'
    },
    category: 'website',
    features: [
      { name: 'Up to 5 pages', included: true },
      { name: 'Mobile responsive design', included: true },
      { name: 'Contact form integration', included: true },
      { name: 'SEO basics setup', included: true },
      { name: 'Google Analytics integration', included: true },
      { name: 'Content management training', included: true, limit: '1 hour' },
      { name: 'Stock photography', included: true, limit: '10 images' },
      { name: 'Custom design mockups', included: false },
      { name: 'E-commerce functionality', included: false },
      { name: 'Custom integrations', included: false },
      { name: 'Advanced animations', included: false },
      { name: 'Multilingual support', included: false }
    ],
    highlights: [
      'Fast 2-week turnaround',
      'WCAG AA accessible',
      'Core Web Vitals optimized',
      '30-day support included'
    ],
    deliverables: [
      'Fully functional WordPress website',
      'Mobile-responsive design',
      'Admin training session',
      'Documentation'
    ],
    timeline: '2-3 weeks',
    support: '30 days post-launch',
    cta: {
      text: 'Get Started',
      action: 'get-quote'
    }
  },
  
  {
    id: 'pkg-professional',
    name: 'Professional',
    slug: 'professional',
    tagline: 'Most popular for growing businesses',
    description: 'A custom WordPress website with advanced features, custom design, and comprehensive functionality.',
    price: {
      amount: 8500,
      currency: 'USD',
      period: 'one-time',
      display: '$8,500'
    },
    category: 'website',
    recommended: true,
    features: [
      { name: 'Up to 15 pages', included: true },
      { name: 'Mobile responsive design', included: true },
      { name: 'Custom design mockups', included: true, limit: '3 revisions' },
      { name: 'Contact form integration', included: true },
      { name: 'Advanced SEO setup', included: true },
      { name: 'Google Analytics + Search Console', included: true },
      { name: 'Content management training', included: true, limit: '2 hours' },
      { name: 'Stock photography', included: true, limit: '25 images' },
      { name: 'Blog setup', included: true },
      { name: 'Newsletter integration', included: true },
      { name: 'Social media integration', included: true },
      { name: 'E-commerce functionality', included: false, limit: 'Add $2,000' },
      { name: 'Custom integrations', included: true, limit: '2 integrations' },
      { name: 'Advanced animations', included: true },
      { name: 'Multilingual support', included: false, limit: 'Add $1,500' }
    ],
    highlights: [
      'Custom design tailored to your brand',
      'WCAG AA accessible',
      'Performance optimized',
      '90-day support included',
      'Priority support'
    ],
    deliverables: [
      'Custom WordPress block theme',
      'Design system documentation',
      'Admin training sessions',
      'SEO optimization',
      'Performance optimization'
    ],
    timeline: '4-6 weeks',
    support: '90 days post-launch',
    cta: {
      text: 'Get Started',
      action: 'book-call'
    }
  },
  
  {
    id: 'pkg-enterprise',
    name: 'Enterprise',
    slug: 'enterprise',
    tagline: 'For complex projects and large organizations',
    description: 'A fully custom WordPress solution with advanced functionality, integrations, and dedicated support.',
    price: {
      amount: 0,
      currency: 'USD',
      period: 'project',
      display: 'Custom Quote'
    },
    category: 'website',
    features: [
      { name: 'Unlimited pages', included: true },
      { name: 'Mobile responsive design', included: true },
      { name: 'Custom design system', included: true },
      { name: 'Comprehensive SEO strategy', included: true },
      { name: 'Advanced analytics setup', included: true },
      { name: 'Content management training', included: true, limit: 'Unlimited' },
      { name: 'Custom photography', included: true, tooltip: 'Coordinate with photographer' },
      { name: 'E-commerce functionality', included: true },
      { name: 'Custom integrations', included: true, limit: 'Unlimited' },
      { name: 'Advanced animations', included: true },
      { name: 'Multilingual support', included: true },
      { name: 'Headless CMS option', included: true },
      { name: 'Dedicated project manager', included: true },
      { name: 'Priority support', included: true },
      { name: 'SLA guarantees', included: true }
    ],
    highlights: [
      'Dedicated development team',
      'Custom design system',
      'Enterprise-grade security',
      '6-month support included',
      'SLA with uptime guarantees',
      'White-glove service'
    ],
    deliverables: [
      'Custom WordPress solution',
      'Design system documentation',
      'Technical documentation',
      'Training program',
      'Performance monitoring',
      'Ongoing optimization'
    ],
    timeline: '8-12 weeks',
    support: '6 months post-launch + ongoing options',
    cta: {
      text: 'Schedule Consultation',
      action: 'book-call'
    }
  }
];

/**
 * Maintenance & Support Packages
 */
export const maintenancePackages: PricingPackage[] = [
  {
    id: 'maint-essential',
    name: 'Essential Care',
    slug: 'essential-care',
    tagline: 'Basic maintenance and security',
    description: 'Keep your WordPress site secure and up-to-date with essential maintenance.',
    price: {
      amount: 150,
      currency: 'USD',
      period: 'monthly',
      display: '$150/month'
    },
    category: 'maintenance',
    features: [
      { name: 'WordPress core updates', included: true },
      { name: 'Plugin updates', included: true },
      { name: 'Theme updates', included: true },
      { name: 'Security monitoring', included: true },
      { name: 'Daily backups', included: true },
      { name: 'Uptime monitoring', included: true },
      { name: 'Monthly reports', included: true },
      { name: 'Content updates', included: false },
      { name: 'Design changes', included: false },
      { name: 'Priority support', included: false },
      { name: 'Performance optimization', included: false }
    ],
    highlights: [
      'Peace of mind',
      '99.9% uptime guarantee',
      'Daily backups',
      'Email support'
    ],
    timeline: 'Ongoing',
    support: 'Email support (48hr response)',
    cta: {
      text: 'Get Started',
      action: 'contact'
    }
  },
  
  {
    id: 'maint-professional',
    name: 'Professional Care',
    slug: 'professional-care',
    tagline: 'Complete maintenance + content updates',
    description: 'Comprehensive maintenance plus content updates and minor design changes.',
    price: {
      amount: 350,
      currency: 'USD',
      period: 'monthly',
      display: '$350/month'
    },
    category: 'maintenance',
    recommended: true,
    features: [
      { name: 'WordPress core updates', included: true },
      { name: 'Plugin updates', included: true },
      { name: 'Theme updates', included: true },
      { name: 'Security monitoring', included: true },
      { name: 'Daily backups', included: true },
      { name: 'Uptime monitoring', included: true },
      { name: 'Monthly reports', included: true },
      { name: 'Content updates', included: true, limit: '4 hours/month' },
      { name: 'Design changes', included: true, limit: 'Minor tweaks' },
      { name: 'Priority support', included: true },
      { name: 'Performance optimization', included: true, limit: 'Quarterly' },
      { name: 'SEO monitoring', included: true }
    ],
    highlights: [
      'Everything in Essential',
      '4 hours of updates/month',
      'Priority support',
      'Performance optimization'
    ],
    timeline: 'Ongoing',
    support: 'Priority email + chat (24hr response)',
    cta: {
      text: 'Get Started',
      action: 'contact'
    }
  },
  
  {
    id: 'maint-enterprise',
    name: 'Enterprise Care',
    slug: 'enterprise-care',
    tagline: 'Dedicated support for mission-critical sites',
    description: 'White-glove service with dedicated support, unlimited updates, and SLA guarantees.',
    price: {
      amount: 0,
      currency: 'USD',
      period: 'monthly',
      display: 'Custom'
    },
    category: 'maintenance',
    features: [
      { name: 'All Professional Care features', included: true },
      { name: 'Unlimited content updates', included: true },
      { name: 'Unlimited design changes', included: true, limit: 'Within scope' },
      { name: 'Dedicated account manager', included: true },
      { name: 'SLA guarantees', included: true },
      { name: '24/7 monitoring', included: true },
      { name: 'Monthly strategy calls', included: true },
      { name: 'Custom development hours', included: true, limit: 'Included' },
      { name: 'Performance audits', included: true, limit: 'Monthly' },
      { name: 'Security audits', included: true, limit: 'Quarterly' }
    ],
    highlights: [
      'Dedicated account manager',
      'SLA with uptime guarantees',
      '24/7 monitoring',
      'Included development hours'
    ],
    timeline: 'Ongoing',
    support: '24/7 phone + email support (4hr response)',
    cta: {
      text: 'Schedule Consultation',
      action: 'book-call'
    }
  }
];

/**
 * À La Carte Services
 */
export const alacarte = [
  {
    name: 'Website Audit',
    description: 'Comprehensive technical and UX audit',
    price: '$750',
    timeline: '3-5 business days'
  },
  {
    name: 'Performance Optimization',
    description: 'Core Web Vitals and speed optimization',
    price: '$1,200',
    timeline: '1 week'
  },
  {
    name: 'WCAG Compliance Audit',
    description: 'Full accessibility audit + remediation plan',
    price: '$1,500',
    timeline: '1 week'
  },
  {
    name: 'SEO Optimization',
    description: 'Technical SEO setup and optimization',
    price: '$1,000',
    timeline: '1 week'
  },
  {
    name: 'Security Hardening',
    description: 'Comprehensive security audit and hardening',
    price: '$800',
    timeline: '3-5 business days'
  },
  {
    name: 'Migration Service',
    description: 'Safe migration to new host or platform',
    price: '$500+',
    timeline: '1-2 weeks'
  }
];

/**
 * Helper Functions
 */

export function getPackageBySlug(slug: string): PricingPackage | undefined {
  const allPackages = [...websitePackages, ...maintenancePackages];
  return allPackages.find(pkg => pkg.slug === slug);
}

export function getRecommendedPackage(category: 'website' | 'maintenance'): PricingPackage | undefined {
  if (category === 'website') {
    return websitePackages.find(pkg => pkg.recommended);
  }
  return maintenancePackages.find(pkg => pkg.recommended);
}

export function getPackagesByCategory(category: 'website' | 'maintenance' | 'custom'): PricingPackage[] {
  const allPackages = [...websitePackages, ...maintenancePackages];
  return allPackages.filter(pkg => pkg.category === category);
}
