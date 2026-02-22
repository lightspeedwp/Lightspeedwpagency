/**
 * Services Data
 * 
 * Centralized service offerings data for LightSpeed WordPress Agency.
 * Real content extracted from https://lightspeedwp.agency
 * 
 * **REAL CONTENT SOURCE:** https://lightspeedwp.agency/services
 * **Last Updated:** 2026-02-16
 * 
 * In WordPress, this would be a Custom Post Type: 'service' with
 * custom fields for pricing, features, and service details.
 */

import { LucideIcon, Palette, Code, Search, FileText, Globe, Shield, Zap, Accessibility, Brain, MessageSquare } from 'lucide-react';

/**
 * Service Category Types
 */
export type ServiceCategory = 'design' | 'development' | 'strategy' | 'support';

/**
 * Service Interface
 * 
 * Defines the structure for a service offering.
 * 
 * @property {string} id - Unique identifier
 * @property {string} name - Service name
 * @property {string} slug - URL-friendly slug
 * @property {string} tagline - Short one-liner
 * @property {string} description - Detailed description
 * @property {ServiceCategory} category - Service category
 * @property {LucideIcon} icon - Icon component
 * @property {string[]} features - Key features list
 * @property {ServicePricing} pricing - Pricing information
 * @property {string[]} deliverables - What clients receive
 * @property {string} buttonText - CTA button text
 * @property {string} buttonPage - CTA destination
 * @property {boolean} popular - Featured service
 */
export interface Service {
  id: string;
  name: string;
  slug: string;
  tagline: string;
  description: string;
  category: ServiceCategory;
  icon: LucideIcon;
  features: string[];
  pricing: ServicePricing;
  deliverables: string[];
  buttonText: string;
  buttonPage: string;
  popular?: boolean;
}

/**
 * Service Pricing Interface
 * 
 * @property {string} starting - Starting price
 * @property {string} typical - Typical project price
 * @property {string} timeframe - Typical timeframe
 */
export interface ServicePricing {
  starting: string;
  typical: string;
  timeframe: string;
}

/**
 * All Services (12 offerings across 4 categories)
 */
export const services: Service[] = [
  // Design Services (3)
  {
    id: 'web-design',
    name: 'Web design',
    slug: 'web-design',
    tagline: 'Beautiful, conversion-focused website design',
    description: 'Create stunning, user-friendly websites that convert visitors into customers. Our design process focuses on your business goals while delivering exceptional user experiences.',
    category: 'design',
    icon: Palette,
    features: [
      'Custom responsive design',
      'Mobile-first approach',
      'Brand integration',
      'Conversion optimization',
      'Accessibility-first design',
      'Design system creation',
    ],
    pricing: {
      starting: '$5,000',
      typical: '$8,000 - $15,000',
      timeframe: '4-6 weeks',
    },
    deliverables: [
      'Figma design files',
      'Design system documentation',
      'Responsive mockups (mobile, tablet, desktop)',
      'Interactive prototypes',
      'Asset library',
    ],
    buttonText: 'Learn More',
    buttonPage: 'design-service',
    popular: true,
  },
  {
    id: 'ui-ux-design',
    name: 'UI/UX design',
    slug: 'ui-ux-design',
    tagline: 'User-centered design that drives engagement',
    description: 'Design intuitive interfaces and seamless user experiences based on research and best practices. We create designs that users love and that drive business results.',
    category: 'design',
    icon: Search,
    features: [
      'User research & personas',
      'Information architecture',
      'Wireframing & prototyping',
      'Usability testing',
      'Interaction design',
      'Design iteration',
    ],
    pricing: {
      starting: '$4,000',
      typical: '$6,000 - $12,000',
      timeframe: '3-5 weeks',
    },
    deliverables: [
      'User research report',
      'User personas',
      'User journey maps',
      'Wireframes',
      'High-fidelity prototypes',
      'Usability test results',
    ],
    buttonText: 'Learn More',
    buttonPage: 'design-service',
  },
  {
    id: 'brand-identity',
    name: 'Brand identity',
    slug: 'brand-identity',
    tagline: 'Build a memorable brand that stands out',
    description: 'Develop a cohesive brand identity that resonates with your target audience and differentiates you from competitors.',
    category: 'design',
    icon: Palette,
    features: [
      'Logo design',
      'Brand guidelines',
      'Color palette',
      'Typography system',
      'Visual language',
      'Marketing collateral',
    ],
    pricing: {
      starting: '$3,000',
      typical: '$5,000 - $10,000',
      timeframe: '2-4 weeks',
    },
    deliverables: [
      'Logo files (all formats)',
      'Brand guidelines document',
      'Color palette',
      'Typography guidelines',
      'Business card design',
      'Letterhead template',
    ],
    buttonText: 'Learn More',
    buttonPage: 'design-service',
  },

  // Development Services (3)
  {
    id: 'wordpress-development',
    name: 'WordPress development',
    slug: 'wordpress-development',
    tagline: 'Custom WordPress solutions built to scale',
    description: 'Build powerful, flexible <i>WordPress</i> websites with custom themes and plugins. Specializing in block themes and full site editing.',
    category: 'development',
    icon: Code,
    features: [
      'Custom block theme development',
      'Plugin development',
      'WooCommerce integration',
      'Performance optimization',
      'Security hardening',
      'Maintenance & support',
    ],
    pricing: {
      starting: '$7,000',
      typical: '$10,000 - $20,000',
      timeframe: '6-8 weeks',
    },
    deliverables: [
      'Custom WordPress theme',
      'Full documentation',
      'Training session',
      'Performance report',
      '30 days post-launch support',
    ],
    buttonText: 'Learn More',
    buttonPage: 'development-service',
    popular: true,
  },
  {
    id: 'custom-development',
    name: 'Custom development',
    slug: 'custom-development',
    tagline: 'Bespoke solutions for unique requirements',
    description: 'Build custom web applications and integrations tailored to your specific business needs.',
    category: 'development',
    icon: Code,
    features: [
      'Custom functionality',
      'API integrations',
      'Database design',
      'Third-party integrations',
      'Scalable architecture',
      'Code documentation',
    ],
    pricing: {
      starting: '$10,000',
      typical: '$15,000 - $30,000',
      timeframe: '8-12 weeks',
    },
    deliverables: [
      'Custom codebase',
      'Technical documentation',
      'API documentation',
      'Testing suite',
      'Deployment guide',
    ],
    buttonText: 'Learn More',
    buttonPage: 'development-service',
  },
  {
    id: 'ecommerce-development',
    name: 'E-commerce development',
    slug: 'ecommerce-development',
    tagline: 'Powerful online stores that drive sales',
    description: 'Create high-converting e-commerce experiences with <i>WooCommerce</i> or custom solutions.',
    category: 'development',
    icon: Globe,
    features: [
      'WooCommerce setup',
      'Payment gateway integration',
      'Inventory management',
      'Shipping integration',
      'Conversion optimization',
      'Analytics setup',
    ],
    pricing: {
      starting: '$8,000',
      typical: '$12,000 - $25,000',
      timeframe: '6-10 weeks',
    },
    deliverables: [
      'Complete WooCommerce store',
      'Payment processing setup',
      'Product catalog setup',
      'Shipping configuration',
      'Training documentation',
    ],
    buttonText: 'Learn More',
    buttonPage: 'development-service',
  },

  // Strategy Services (3)
  {
    id: 'discovery-strategy',
    name: 'Discovery & strategy',
    slug: 'discovery-strategy',
    tagline: 'Strategic planning for digital success',
    description: 'Define your digital strategy with research-driven insights and actionable recommendations.',
    category: 'strategy',
    icon: Search,
    features: [
      'Stakeholder interviews',
      'Competitor analysis',
      'User research',
      'Technical audit',
      'SEO audit',
      'Strategic roadmap',
    ],
    pricing: {
      starting: '$3,000',
      typical: '$5,000 - $8,000',
      timeframe: '2-3 weeks',
    },
    deliverables: [
      'Discovery report',
      'Competitor analysis',
      'User research findings',
      'Technical audit report',
      'Strategic recommendations',
      'Project roadmap',
    ],
    buttonText: 'Learn More',
    buttonPage: 'discovery-service',
  },
  {
    id: 'content-strategy',
    name: 'Content strategy',
    slug: 'content-strategy',
    tagline: 'Content that engages and converts',
    description: 'Develop a comprehensive content strategy that aligns with your business goals and audience needs.',
    category: 'strategy',
    icon: FileText,
    features: [
      'Content audit',
      'Audience research',
      'Content planning',
      'SEO optimization',
      'Content calendar',
      'Style guide',
    ],
    pricing: {
      starting: '$2,500',
      typical: '$4,000 - $7,000',
      timeframe: '2-3 weeks',
    },
    deliverables: [
      'Content audit report',
      'Content strategy document',
      '3-month content calendar',
      'SEO keyword research',
      'Content style guide',
    ],
    buttonText: 'Learn More',
    buttonPage: 'content-service',
  },
  {
    id: 'seo-optimization',
    name: 'SEO optimization',
    slug: 'seo-optimization',
    tagline: 'Increase visibility and organic traffic',
    description: 'Improve your search engine rankings with technical SEO, content optimization, and ongoing monitoring.',
    category: 'strategy',
    icon: Search,
    features: [
      'Technical SEO audit',
      'Keyword research',
      'On-page optimization',
      'Content optimization',
      'Link building strategy',
      'Performance tracking',
    ],
    pricing: {
      starting: '$2,000',
      typical: '$3,000 - $6,000/month',
      timeframe: 'Ongoing',
    },
    deliverables: [
      'SEO audit report',
      'Keyword strategy',
      'Technical fixes',
      'Content recommendations',
      'Monthly performance reports',
    ],
    buttonText: 'Learn More',
    buttonPage: 'services',
  },

  // Support Services (3)
  {
    id: 'website-maintenance',
    name: 'Website maintenance',
    slug: 'website-maintenance',
    tagline: 'Keep your website secure and up-to-date',
    description: 'Ongoing maintenance, updates, and support to keep your website running smoothly.',
    category: 'support',
    icon: Shield,
    features: [
      'WordPress updates',
      'Security monitoring',
      'Daily backups',
      'Performance monitoring',
      'Uptime monitoring',
      'Priority support',
    ],
    pricing: {
      starting: '$200',
      typical: '$300 - $600/month',
      timeframe: 'Monthly',
    },
    deliverables: [
      'Monthly maintenance',
      'Security scans',
      'Performance reports',
      'Backup management',
      'Priority support access',
    ],
    buttonText: 'Learn More',
    buttonPage: 'hosting',
  },
  {
    id: 'website-migration',
    name: 'Website migration',
    slug: 'website-migration',
    tagline: 'Seamless migration to WordPress',
    description: 'Migrate your website to <i>WordPress</i> with zero downtime and no data loss.',
    category: 'support',
    icon: Globe,
    features: [
      'Platform migration',
      'Content transfer',
      'Design preservation',
      'SEO preservation',
      'Testing & QA',
      'Post-migration support',
    ],
    pricing: {
      starting: '$2,000',
      typical: '$3,000 - $7,000',
      timeframe: '2-4 weeks',
    },
    deliverables: [
      'Complete site migration',
      'Content migration',
      'URL redirects',
      '301 redirect map',
      'Migration report',
      '30 days support',
    ],
    buttonText: 'Learn More',
    buttonPage: 'migrations-service',
  },
  {
    id: 'security-hardening',
    name: 'Security hardening',
    slug: 'security-hardening',
    tagline: 'Protect your website from threats',
    description: 'Comprehensive security audit and hardening to protect against attacks and vulnerabilities.',
    category: 'support',
    icon: Shield,
    features: [
      'Security audit',
      'Vulnerability scanning',
      'Firewall setup',
      'Malware removal',
      'Security monitoring',
      'Incident response',
    ],
    pricing: {
      starting: '$1,500',
      typical: '$2,500 - $5,000',
      timeframe: '1-2 weeks',
    },
    deliverables: [
      'Security audit report',
      'Vulnerability fixes',
      'Firewall configuration',
      'Security documentation',
      'Monitoring setup',
    ],
    buttonText: 'Learn More',
    buttonPage: 'security-service',
  },

  // Optimisation Services (4)
  {
    id: 'performance-optimisation',
    name: 'Performance optimisation',
    slug: 'performance-optimisation',
    tagline: 'Lightning-fast Core Web Vitals scores',
    description: 'Optimise your WordPress site for speed, stability, and superior user experience with sub-second load times.',
    category: 'strategy',
    icon: Zap,
    features: [
      'Core Web Vitals audit',
      'Code & database optimisation',
      'Advanced caching (Redis, CDN)',
      'Image & asset optimisation',
      'Server-side performance',
      'Ongoing monitoring',
    ],
    pricing: {
      starting: '$2,000',
      typical: '$3,000 - $6,000',
      timeframe: '1-3 weeks',
    },
    deliverables: [
      'Performance audit report',
      'Lighthouse score improvements',
      'Caching configuration',
      'CDN setup',
      'Monitoring dashboard',
    ],
    buttonText: 'Learn More',
    buttonPage: 'performance',
  },
  {
    id: 'accessibility-compliance',
    name: 'Accessibility compliance',
    slug: 'accessibility-compliance',
    tagline: 'WCAG 2.1 AA/AAA compliant websites',
    description: 'Audit, remediate, and build WordPress sites that welcome every visitor regardless of ability or assistive technology.',
    category: 'strategy',
    icon: Accessibility,
    features: [
      'WCAG 2.1 compliance audit',
      'Accessibility remediation',
      'Inclusive design systems',
      'Assistive technology testing',
      'Ongoing compliance monitoring',
      'Staff accessibility training',
    ],
    pricing: {
      starting: '$2,500',
      typical: '$4,000 - $8,000',
      timeframe: '2-4 weeks',
    },
    deliverables: [
      'WCAG compliance report',
      'Prioritised remediation plan',
      'Assistive tech test results',
      'Accessibility statement',
      'Quarterly re-audit schedule',
    ],
    buttonText: 'Learn More',
    buttonPage: 'accessibility',
  },
  {
    id: 'ai-engine-optimisation',
    name: 'AI engine optimisation',
    slug: 'ai-engine-optimisation',
    tagline: 'Cut AI costs by 60% while keeping quality',
    description: 'Fine-tune, accelerate, and scale AI models running on your WordPress stack — from inference speed to cost efficiency.',
    category: 'strategy',
    icon: Brain,
    features: [
      'Model benchmarking (6+ providers)',
      'Prompt engineering & tuning',
      'Semantic inference caching',
      'Cost & rate-limit management',
      'Quality regression testing',
      'Real-time cost dashboards',
    ],
    pricing: {
      starting: '$3,000',
      typical: '$5,000 - $10,000',
      timeframe: '2-4 weeks',
    },
    deliverables: [
      'AI engine audit report',
      'Optimised prompt library',
      'Caching layer implementation',
      'Cost monitoring dashboard',
      'Quality test suite',
    ],
    buttonText: 'Learn More',
    buttonPage: 'ai-engine-optimisation',
  },
  {
    id: 'answer-engine-optimisation',
    name: 'Answer engine optimisation',
    slug: 'answer-engine-optimisation',
    tagline: 'Get cited by ChatGPT, Perplexity & AI Overviews',
    description: 'Optimise your content to be the answer AI engines serve — the new front page of the internet.',
    category: 'strategy',
    icon: MessageSquare,
    features: [
      'AI visibility audit',
      'Schema & structured data',
      'Entity authority building',
      'AI-friendly content formatting',
      'Citation tracking (5+ engines)',
      'Monthly share-of-voice reports',
    ],
    pricing: {
      starting: '$2,500',
      typical: '$4,000 - $8,000/month',
      timeframe: 'Ongoing',
    },
    deliverables: [
      'AI citation audit report',
      'Schema implementation',
      'Content restructuring plan',
      'Monthly citation reports',
      'Competitor benchmarking',
    ],
    buttonText: 'Learn More',
    buttonPage: 'answer-engine-optimisation',
  },
];

/**
 * Services by Category
 */
export const designServices = services.filter(s => s.category === 'design');
export const developmentServices = services.filter(s => s.category === 'development');
export const strategyServices = services.filter(s => s.category === 'strategy');
export const supportServices = services.filter(s => s.category === 'support');

/**
 * Featured/Popular Services
 */
export const featuredServices = services.filter(s => s.popular === true);

/**
 * Helper Functions
 */

/**
 * Get service by ID
 * 
 * @param {string} id - Service ID
 * @returns {Service | undefined} Service or undefined
 * 
 * @example
 * const service = getServiceById('wordpress-development');
 */
export function getServiceById(id: string): Service | undefined {
  return services.find(s => s.id === id);
}

/**
 * Get service by slug
 * 
 * @param {string} slug - Service URL slug
 * @returns {Service | undefined} Service or undefined
 * 
 * @example
 * const service = getServiceBySlug('wordpress-development');
 */
export function getServiceBySlug(slug: string): Service | undefined {
  return services.find(s => s.slug === slug);
}

/**
 * Get services by category
 * 
 * @param {ServiceCategory} category - Service category
 * @returns {Service[]} Services in category
 * 
 * @example
 * const devServices = getServicesByCategory('development');
 */
export function getServicesByCategory(category: ServiceCategory): Service[] {
  return services.filter(s => s.category === category);
}

/**
 * Get service categories
 * 
 * @returns {ServiceCategory[]} All service categories
 * 
 * @example
 * const categories = getServiceCategories();
 */
export function getServiceCategories(): ServiceCategory[] {
  return ['design', 'development', 'strategy', 'support'];
}

/**
 * Get category display name
 * 
 * @param {ServiceCategory} category - Service category
 * @returns {string} Display name
 * 
 * @example
 * const name = getCategoryDisplayName('development');
 */
export function getCategoryDisplayName(category: ServiceCategory): string {
  const names = {
    design: 'Design Services',
    development: 'Development Services',
    strategy: 'Strategy & Planning',
    support: 'Support & Maintenance',
  };
  return names[category];
}

/**
 * Simplified Services for Template Grid Display
 * 
 * Simplified service structure for overview/grid displays.
 * Maps to the service detail pages.
 */
export interface SimpleService {
  id: string;
  icon: LucideIcon;
  title: string;
  description: string;
  page: string;
  features: string[];
}

import { HardDrive, RefreshCw } from 'lucide-react';

/**
 * Simplified Services Array (9 services for grid display)
 * 
 * Real content from LightSpeed WP Agency
 * Compatible with ServicesTemplate and overview pages.
 * Each service links to detailed service pages.
 */
export const servicesSimplified: SimpleService[] = [
  {
    id: 'discovery',
    icon: Search,
    title: 'Discovery',
    description: 'By understanding your business, we\'re able to deliver online success.',
    page: 'discovery',
    features: [
      'Requirements analysis',
      'Competitor research', 
      'Project roadmap',
      'Technical assessment',
      'User needs prioritization',
      'Clear cost and timeline'
    ]
  },
  {
    id: 'design',
    icon: Palette,
    title: 'Design',
    description: 'Expert design guidance on how best to optimise website performance.',
    page: 'design',
    features: [
      'New website design',
      'Website redesign',
      'Brand identity',
      'Digital asset creation',
      'WooCommerce store design',
      'Design systems'
    ]
  },
  {
    id: 'development',
    icon: Code,
    title: 'Development',
    description: 'Expert development that builds sites which perform exceptionally.',
    page: 'development',
    features: [
      'WordPress development',
      'WooCommerce stores',
      'Theme development',
      'Plugin development',
      'Custom functionality',
      'API integrations'
    ]
  },
  {
    id: 'support',
    icon: Zap,
    title: 'Support',
    description: 'Expertise you can confidently rely on for WordPress website support.',
    page: 'support',
    features: [
      'Design & development',
      'Bug fixes',
      'Error resolution',
      'Browser compatibility',
      'Security monitoring',
      'Performance optimization'
    ]
  },
  {
    id: 'hosting',
    icon: HardDrive,
    title: 'Hosting',
    description: 'Safe and stable managed WordPress hosting that gives you peace of mind.',
    page: 'hosting',
    features: [
      'Threat detection & blocking',
      'Multiple daily backups',
      'Regular WordPress updates',
      'Caching optimization',
      'High traffic handling',
      'Secure platform'
    ]
  },
  {
    id: 'migrations',
    icon: RefreshCw,
    title: 'Migrations',
    description: 'We\'re experts at migration achieved smoothly and without data loss.',
    page: 'migrations',
    features: [
      'Host-to-host migration',
      'CMS to WordPress',
      'Multisite conversion',
      'Large-scale moves',
      'Testing & validation',
      'Zero downtime'
    ]
  },
  {
    id: 'security',
    icon: Shield,
    title: 'Security',
    description: 'World-class expertise, focused on protecting your website.',
    page: 'security',
    features: [
      'Security audits',
      'Malware removal',
      'Firewall setup',
      'Continuous monitoring',
      'Threat detection',
      'Secure hosting'
    ]
  },
  {
    id: 'content',
    icon: FileText,
    title: 'Content',
    description: 'Auditing, strategy and creation, all your content needs fulfilled.',
    page: 'content',
    features: [
      'Content audit',
      'Content strategy',
      'Content creation',
      'AI-powered generation',
      'Content-first design approach',
      'Workflow implementation'
    ]
  },
  {
    id: 'mailchimp',
    icon: MessageSquare,
    title: 'Mailchimp',
    description: 'We can help you make the most of Mailchimp email marketing.',
    page: 'mailchimp',
    features: [
      'Mailchimp setup',
      'Email campaigns',
      'List management',
      'Automation workflows',
      'Integration',
      'Email marketing strategy'
    ]
  }
];