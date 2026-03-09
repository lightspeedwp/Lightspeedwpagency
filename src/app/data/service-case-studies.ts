/**
 * Service Case Studies Data
 * 
 * Case study snippets for service pages.
 * Links service offerings to real portfolio projects with results.
 * 
 * @module data/service-case-studies
 */

import type { Icon } from '@phosphor-icons/react';
import { 
  TrendDown, 
  TrendUp, 
  DeviceMobile, 
  Lightning, 
  Users, 
  Crosshair,
  ShieldCheck,
  MagnifyingGlass,
  Gauge,
  Globe,
  Lock,
  Lifebuoy
} from '@phosphor-icons/react';

/**
 * Case Study Result Metric
 * 
 * Individual metric from a case study (e.g., "45% faster").
 */
export interface CaseStudyResult {
  /** Metric value (e.g., "45%", "2.5x", "0.8s") */
  metric: string;
  
  /** Metric label (e.g., "Lower bounce rate") */
  label: string;
  
  /** Optional icon */
  icon?: Icon;
}

/**
 * Service Case Study Snippet
 * 
 * Condensed version of a portfolio case study,
 * focused on demonstrating a specific service.
 */
export interface ServiceCaseStudy {
  /** Unique identifier */
  id: string;
  
  /** Project/portfolio slug (for linking) */
  portfolioSlug: string;
  
  /** Project name */
  projectName: string;
  
  /** Client name */
  client: string;
  
  /** Service(s) this case study demonstrates */
  serviceTags: string[];
  
  /** Challenge statement */
  challenge: string;
  
  /** Solution description */
  solution: string;
  
  /** Results with metrics */
  results: CaseStudyResult[];
  
  /** Optional project image */
  image?: string;
  
  /** Optional technologies used */
  technologies?: string[];
  
  /** Featured flag */
  featured?: boolean;
}

/**
 * Service Case Studies Map
 * 
 * Maps service slugs to their case studies.
 */
export type ServiceCaseStudiesMap = {
  [serviceSlug: string]: ServiceCaseStudy[];
};

/**
 * All Service Case Studies
 */
export const allCaseStudies: ServiceCaseStudy[] = [
  // DESIGN SERVICE CASE STUDIES
  {
    id: 'case-design-1',
    portfolioSlug: 'travelco-website-redesign',
    projectName: 'TravelCo Website Redesign',
    client: 'TravelCo',
    serviceTags: ['design', 'development', 'performance'],
    challenge: 'Outdated design was causing high bounce rates and poor mobile experience. Users couldn\'t easily find tour packages, and the site felt slow and clunky.',
    solution: 'Complete UI/UX redesign with mobile-first approach, improved navigation hierarchy, and custom WordPress theme optimized for speed and conversion.',
    results: [
      {
        metric: '45%',
        label: 'Lower bounce rate',
        icon: TrendDown
      },
      {
        metric: '2.5x',
        label: 'Mobile conversions',
        icon: DeviceMobile
      },
      {
        metric: '0.8s',
        label: 'Page load time',
        icon: Lightning
      }
    ],
    technologies: ['WordPress', 'React', 'Tailwind CSS'],
    featured: true
  },
  {
    id: 'case-design-2',
    portfolioSlug: 'ecoproducts-brand-refresh',
    projectName: 'EcoProducts Brand Refresh',
    client: 'EcoProducts Ltd',
    serviceTags: ['design', 'accessibility'],
    challenge: 'Brand looked generic and didn\'t reflect their eco-friendly values. Accessibility issues were preventing government contracts.',
    solution: 'Complete brand refresh with nature-inspired design system, WCAG 2.1 AA compliance, and custom WordPress theme showcasing sustainability.',
    results: [
      {
        metric: '65%',
        label: 'Brand recognition',
        icon: TrendUp
      },
      {
        metric: '100%',
        label: 'WCAG AA compliant',
        icon: ShieldCheck
      },
      {
        metric: '3x',
        label: 'Organic engagement',
        icon: Users
      }
    ],
    featured: true
  },
  
  // DEVELOPMENT SERVICE CASE STUDIES
  {
    id: 'case-dev-1',
    portfolioSlug: 'fintech-multisite-platform',
    projectName: 'FinTech Multi-Site Platform',
    client: 'FinTech Solutions',
    serviceTags: ['development', 'security', 'performance'],
    challenge: 'Needed enterprise WordPress multisite with complex user roles, custom integrations, and bank-grade security for financial data.',
    solution: 'Built custom WordPress multisite with 15+ integrated APIs, advanced security hardening, and optimized database architecture for high-volume traffic.',
    results: [
      {
        metric: '50K+',
        label: 'Daily active users',
        icon: Users
      },
      {
        metric: '99.9%',
        label: 'Uptime achieved',
        icon: Gauge
      },
      {
        metric: 'Zero',
        label: 'Security breaches',
        icon: Lock
      }
    ],
    technologies: ['WordPress Multisite', 'REST API', 'Custom Plugins'],
    featured: true
  },
  
  // PERFORMANCE SERVICE CASE STUDIES
  {
    id: 'case-perf-1',
    portfolioSlug: 'retailhub-speed-optimization',
    projectName: 'RetailHub Speed Optimization',
    client: 'RetailHub',
    serviceTags: ['performance', 'seo'],
    challenge: 'E-commerce site had 4.2 second load times, failing Core Web Vitals, and losing mobile customers at checkout.',
    solution: 'Implemented advanced caching, image optimization, database query optimization, and CDN integration. Reduced JavaScript bundle by 60%.',
    results: [
      {
        metric: '0.8s',
        label: 'Page load time',
        icon: Lightning
      },
      {
        metric: '95+',
        label: 'Lighthouse score',
        icon: Gauge
      },
      {
        metric: '40%',
        label: 'Increase in sales',
        icon: TrendUp
      }
    ],
    featured: true
  },
  
  // SEO SERVICE CASE STUDIES
  {
    id: 'case-seo-1',
    portfolioSlug: 'travelexplorer-seo-overhaul',
    projectName: 'TravelExplorer SEO Overhaul',
    client: 'TravelExplorer',
    serviceTags: ['seo', 'content', 'performance'],
    challenge: 'Virtually no organic traffic. Ranking on page 5+ for all target keywords. Poor technical SEO foundation.',
    solution: 'Complete technical SEO audit and fixes, optimized site architecture, created SEO-optimized content strategy, and implemented schema markup.',
    results: [
      {
        metric: '320%',
        label: 'Organic traffic',
        icon: TrendUp
      },
      {
        metric: 'Page 1',
        label: 'For 25+ keywords',
        icon: MagnifyingGlass
      },
      {
        metric: '3x',
        label: 'Organic conversions',
        icon: Crosshair
      }
    ],
    featured: true
  },
  
  // ACCESSIBILITY SERVICE CASE STUDIES
  {
    id: 'case-a11y-1',
    portfolioSlug: 'publicservices-accessibility',
    projectName: 'PublicServices.gov Accessibility',
    client: 'PublicServices.gov',
    serviceTags: ['accessibility', 'development'],
    challenge: 'Government site failed accessibility compliance review. Faced legal action and couldn\'t serve disabled citizens effectively.',
    solution: 'Comprehensive accessibility audit, remediation of 200+ violations, keyboard navigation improvements, and ARIA implementation.',
    results: [
      {
        metric: '100%',
        label: 'WCAG 2.1 AA',
        icon: ShieldCheck
      },
      {
        metric: 'Zero',
        label: 'Accessibility issues',
        icon: Crosshair
      },
      {
        metric: '45%',
        label: 'Increase in usage',
        icon: Users
      }
    ],
    featured: true
  },
  
  // SECURITY SERVICE CASE STUDIES
  {
    id: 'case-sec-1',
    portfolioSlug: 'financesecure-hardening',
    projectName: 'FinanceSecure Site Hardening',
    client: 'FinanceSecure',
    serviceTags: ['security', 'development'],
    challenge: 'Site was hacked twice in 6 months. Lost customer trust and had sensitive financial data exposed.',
    solution: 'Complete security audit, penetration testing, WordPress hardening, WAF implementation, and 24/7 monitoring setup.',
    results: [
      {
        metric: 'Zero',
        label: 'Security incidents',
        icon: ShieldCheck
      },
      {
        metric: '24/7',
        label: 'Threat monitoring',
        icon: Lock
      },
      {
        metric: 'A+',
        label: 'Security rating',
        icon: Crosshair
      }
    ],
    featured: true
  },
  
  // SUPPORT SERVICE CASE STUDIES
  {
    id: 'case-support-1',
    portfolioSlug: 'onlineretail-support',
    projectName: 'OnlineRetail Ongoing Support',
    client: 'OnlineRetail',
    serviceTags: ['support', 'performance', 'security'],
    challenge: 'Frequent site issues during peak sales periods. No dedicated support team. Lost revenue during downtime.',
    solution: 'Monthly retainer with proactive monitoring, performance optimization, security updates, and priority emergency support.',
    results: [
      {
        metric: '99.9%',
        label: 'Uptime guarantee',
        icon: Gauge
      },
      {
        metric: '<2hr',
        label: 'Response time',
        icon: Lifebuoy
      },
      {
        metric: 'Zero',
        label: 'Major incidents',
        icon: ShieldCheck
      }
    ],
    featured: true
  },
  
  // MIGRATIONS SERVICE CASE STUDIES
  {
    id: 'case-migration-1',
    portfolioSlug: 'globalcorp-cms-migration',
    projectName: 'GlobalCorp CMS Migration',
    client: 'GlobalCorp',
    serviceTags: ['migrations', 'development', 'performance'],
    challenge: 'Legacy proprietary CMS was expensive, slow, and limiting growth. Migration had to happen with zero downtime.',
    solution: 'Planned phased migration from legacy CMS to WordPress with custom importer, redirects, and staging environment testing.',
    results: [
      {
        metric: 'Zero',
        label: 'Downtime',
        icon: Gauge
      },
      {
        metric: '100%',
        label: 'Content preserved',
        icon: ShieldCheck
      },
      {
        metric: '3x',
        label: 'Faster site',
        icon: Lightning
      }
    ],
    featured: true
  },
  
  // DISCOVERY SERVICE CASE STUDIES
  {
    id: 'case-discovery-1',
    portfolioSlug: 'nonprofit-digital-strategy',
    projectName: 'Nonprofit Digital Strategy',
    client: 'Nonprofit Alliance',
    serviceTags: ['discovery', 'design'],
    challenge: 'Organization had big digital transformation goals but unclear requirements and conflicting stakeholder priorities.',
    solution: 'Two-week discovery workshop with stakeholder interviews, user research, competitive analysis, and strategic roadmap creation.',
    results: [
      {
        metric: '100%',
        label: 'Stakeholder alignment',
        icon: Crosshair
      },
      {
        metric: '18mo',
        label: 'Detailed roadmap',
        icon: Globe
      },
      {
        metric: '$500K',
        label: 'Budget savings',
        icon: TrendDown
      }
    ],
    featured: true
  },
  
  // CONTENT SERVICE CASE STUDIES
  {
    id: 'case-content-1',
    portfolioSlug: 'travelblog-content-strategy',
    projectName: 'TravelBlog Content Strategy',
    client: 'TravelBlog Network',
    serviceTags: ['content', 'seo'],
    challenge: 'Publishing 50+ posts/month but getting minimal engagement. Content was unfocused and not driving conversions.',
    solution: 'Content audit, editorial calendar creation, SEO-optimized content templates, and conversion-focused content strategy.',
    results: [
      {
        metric: '200%',
        label: 'Engagement increase',
        icon: Users
      },
      {
        metric: '150%',
        label: 'Organic traffic',
        icon: TrendUp
      },
      {
        metric: '5x',
        label: 'Content ROI',
        icon: Crosshair
      }
    ],
    featured: true
  },
  
  // NEWSLETTER SERVICE CASE STUDIES
  {
    id: 'case-newsletter-1',
    portfolioSlug: 'retailchain-email-integration',
    projectName: 'RetailChain Email Integration',
    client: 'RetailChain',
    serviceTags: ['newsletter', 'development'],
    challenge: 'Manual newsletter process was time-consuming. Poor subscriber growth. No automation or segmentation.',
    solution: 'Integrated Mailchimp with WordPress, automated subscriber management, created email templates, and set up automated campaigns.',
    results: [
      {
        metric: '120%',
        label: 'Subscriber growth',
        icon: TrendUp
      },
      {
        metric: '45%',
        label: 'Open rate',
        icon: Crosshair
      },
      {
        metric: '90%',
        label: 'Time savings',
        icon: Lightning
      }
    ],
    featured: true
  }
];

/**
 * Service Case Studies Mapping
 * 
 * Maps each service slug to its relevant case studies.
 */
export const serviceCaseStudiesMap: ServiceCaseStudiesMap = {
  'design': [
    allCaseStudies[0],  // TravelCo Website Redesign
    allCaseStudies[1],  // EcoProducts Brand Refresh
  ],
  'development': [
    allCaseStudies[2],  // FinTech Multi-Site Platform
    allCaseStudies[0],  // TravelCo (multi-service)
  ],
  'performance': [
    allCaseStudies[3],  // RetailHub Speed Optimization
    allCaseStudies[0],  // TravelCo (multi-service)
  ],
  'seo': [
    allCaseStudies[4],  // TravelExplorer SEO Overhaul
    allCaseStudies[3],  // RetailHub (multi-service)
  ],
  'accessibility': [
    allCaseStudies[5],  // PublicServices.gov Accessibility
    allCaseStudies[1],  // EcoProducts (multi-service)
  ],
  'security': [
    allCaseStudies[6],  // FinanceSecure Site Hardening
    allCaseStudies[2],  // FinTech (multi-service)
  ],
  'support': [
    allCaseStudies[7],  // OnlineRetail Ongoing Support
  ],
  'migrations': [
    allCaseStudies[8],  // GlobalCorp CMS Migration
  ],
  'discovery': [
    allCaseStudies[9],  // Nonprofit Digital Strategy
  ],
  'content': [
    allCaseStudies[10], // TravelBlog Content Strategy
    allCaseStudies[4],  // TravelExplorer (multi-service)
  ],
  'newsletter': [
    allCaseStudies[11], // RetailChain Email Integration
  ],
};

/**
 * Get case studies for a specific service
 * 
 * @param serviceSlug - Service slug to fetch case studies for
 * @returns Array of case studies for the service
 */
export function getCaseStudiesForService(serviceSlug: string): ServiceCaseStudy[] {
  return serviceCaseStudiesMap[serviceSlug] || [];
}

/**
 * Get featured case studies only
 * 
 * @param serviceSlug - Service slug to fetch case studies for
 * @returns Array of featured case studies for the service
 */
export function getFeaturedCaseStudies(serviceSlug: string): ServiceCaseStudy[] {
  const caseStudies = getCaseStudiesForService(serviceSlug);
  return caseStudies.filter(cs => cs.featured);
}

/**
 * Get case study by portfolio slug
 * 
 * @param portfolioSlug - Portfolio project slug
 * @returns Case study or undefined if not found
 */
export function getCaseStudyBySlug(portfolioSlug: string): ServiceCaseStudy | undefined {
  return allCaseStudies.find(cs => cs.portfolioSlug === portfolioSlug);
}

/**
 * Get all case studies for multiple services
 * 
 * @param serviceSlugs - Array of service slugs
 * @returns Combined array of unique case studies
 */
export function getCaseStudiesForServices(serviceSlugs: string[]): ServiceCaseStudy[] {
  const allServiceCaseStudies = serviceSlugs.flatMap(slug => 
    getCaseStudiesForService(slug)
  );
  
  // Remove duplicates by ID
  const unique = Array.from(
    new Map(allServiceCaseStudies.map(cs => [cs.id, cs])).values()
  );
  
  return unique;
}