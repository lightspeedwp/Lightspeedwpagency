/**
 * Single Service Page Data
 * 
 * Real content for individual service pages from LightSpeed WP Agency.
 * Real content extracted from https://lightspeedwp.agency/services
 * 
 * **REAL CONTENT SOURCE:** https://lightspeedwp.agency/services/wordpress-development
 * **Last Updated:** 2025-01-09
 * 
 * WordPress: Maps to templates/page-service-detail.html
 */

import { 
  Code, 
  Layout, 
  Blocks,
  Package,
  Palette,
  Zap,
  CheckCircle,
  ArrowRight,
  Users,
  Award,
  Clock,
  Target
} from 'lucide-react';
import type { LucideIcon } from 'lucide-react';

/**
 * Service Hero Content
 */
export const servicePageHero = {
  badge: {
    icon: 'Code',
    text: 'WordPress Development'
  },
  category: 'Development',
  title: 'Expert WordPress Development Services',
  titleHighlight: 'WordPress', // Word to highlight
  tagline: 'Custom WordPress themes, plugins, and solutions built by our expert development team with 22+ years of combined experience.',
  description: 'We build high-performance, scalable WordPress websites using modern development practices including Full Site Editing, block themes, and custom plugin development. From startups to enterprise, we deliver WordPress solutions that grow with your business.'
};

/**
 * Service Overview
 */
export const servicePageOverview = {
  title: 'WordPress Development Expertise',
  description: 'LightSpeed specializes in modern WordPress development, from custom block themes to complex WooCommerce solutions. Our team has built 100+ WordPress websites, managed 120+ sites, and contributed to the WordPress community for over two decades.',
  stats: [
    {
      icon: Code,
      value: '100+',
      label: 'Websites Built',
      description: 'Custom WordPress sites delivered'
    },
    {
      icon: Users,
      value: '11',
      label: 'Expert Team',
      description: 'Dedicated WordPress developers'
    },
    {
      icon: Award,
      value: '22+',
      label: 'Years Combined',
      description: 'WordPress development experience'
    },
    {
      icon: Clock,
      value: '120+',
      label: 'Sites Managed',
      description: 'Active WordPress installations'
    }
  ]
};

/**
 * Service Features
 */
export interface ServiceFeature {
  icon: LucideIcon;
  title: string;
  description: string;
}

export const servicePageFeatures: ServiceFeature[] = [
  {
    icon: Blocks,
    title: 'Block Theme Development',
    description: 'Modern WordPress block themes using Full Site Editing (FSE) for complete visual control. Build with HTML templates and theme.json instead of PHP.'
  },
  {
    icon: Package,
    title: 'Custom Plugin Development',
    description: 'Tailored WordPress plugins to extend functionality and meet your unique business requirements. Clean, efficient code following WordPress standards.'
  },
  {
    icon: Layout,
    title: 'Custom Page Builders',
    description: 'Develop custom block patterns and reusable components for editors. Empower content teams with flexible, brand-consistent building blocks.'
  },
  {
    icon: Palette,
    title: 'Theme Customization',
    description: 'Customize existing themes or build from scratch. Design systems with tokens, accessible components, and responsive layouts.'
  },
  {
    icon: Code,
    title: 'WooCommerce Development',
    description: 'Custom WooCommerce stores with product configurators, payment gateways, and third-party integrations. WooExpert certified team.'
  },
  {
    icon: Zap,
    title: 'Performance Optimization',
    description: 'Fast-loading WordPress sites with optimized databases, caching strategies, and clean code. Achieve 90+ Lighthouse scores.'
  }
];

/**
 * Service Process
 */
export interface ProcessStep {
  number: number;
  title: string;
  description: string;
  duration?: string;
}

export const servicePageProcess: ProcessStep[] = [
  {
    number: 1,
    title: 'Discovery & Planning',
    description: 'We understand your business goals, target audience, and technical requirements. Define project scope, timeline, and deliverables.',
    duration: '1-2 weeks'
  },
  {
    number: 2,
    title: 'Design & Architecture',
    description: 'Create design system tokens, plan WordPress architecture, and define block patterns. Establish coding standards and workflows.',
    duration: '2-3 weeks'
  },
  {
    number: 3,
    title: 'Development',
    description: 'Build custom WordPress theme or plugin using modern development practices. Implement features, integrations, and functionality.',
    duration: '4-8 weeks'
  },
  {
    number: 4,
    title: 'Testing & QA',
    description: 'Comprehensive testing across devices, browsers, and user scenarios. Performance optimization and security hardening.',
    duration: '1-2 weeks'
  },
  {
    number: 5,
    title: 'Launch & Training',
    description: 'Deploy to production, train your team on WordPress editor, and provide documentation. Ongoing support available.',
    duration: '1 week'
  },
  {
    number: 6,
    title: 'Support & Maintenance',
    description: 'Regular updates, security monitoring, and technical support. Managed hosting available for ongoing peace of mind.',
    duration: 'Ongoing'
  }
];

/**
 * Sub-Services
 */
export interface SubService {
  icon: LucideIcon;
  title: string;
  description: string;
  features: string[];
}

export const servicePageSubServices: SubService[] = [
  {
    icon: Blocks,
    title: 'WordPress Block Theme Development',
    description: 'Modern block themes using Full Site Editing (FSE) for complete design control.',
    features: [
      'theme.json configuration with design tokens',
      'HTML template files (no PHP required)',
      'Custom block patterns and variations',
      'Style variations for color schemes',
      'Responsive and accessible by default'
    ]
  },
  {
    icon: Package,
    title: 'Custom WordPress Plugin Development',
    description: 'Extend WordPress functionality with custom plugins tailored to your needs.',
    features: [
      'Custom post types and taxonomies',
      'REST API endpoints and integrations',
      'Admin interfaces and settings pages',
      'Custom Gutenberg blocks',
      'Third-party API integrations'
    ]
  },
  {
    icon: Code,
    title: 'WooCommerce Custom Development',
    description: 'E-commerce solutions with custom product types, payment gateways, and integrations.',
    features: [
      'Custom product types and attributes',
      'Payment gateway integrations',
      'Shipping method customizations',
      'Product configurators',
      'ERP and CRM integrations'
    ]
  },
  {
    icon: Zap,
    title: 'WordPress Performance Optimization',
    description: 'Speed up your WordPress site with expert optimization techniques.',
    features: [
      'Database query optimization',
      'Caching strategy implementation',
      'Image optimization and lazy loading',
      'Code minification and bundling',
      'CDN integration and setup'
    ]
  }
];

/**
 * Why Choose LightSpeed
 */
export interface WhyChooseReason {
  icon: LucideIcon;
  title: string;
  description: string;
}

export const servicePageWhyChoose: WhyChooseReason[] = [
  {
    icon: Award,
    title: 'WooExpert & Mailchimp Expert Certified',
    description: 'One of the elite few companies globally to hold both WooExpert and Mailchimp Expert certifications. Proven expertise recognized by industry leaders.'
  },
  {
    icon: Users,
    title: '22+ Years Combined Experience',
    description: 'Our team has been building WordPress websites since 2003. We\'ve seen the platform evolve and mastered modern development practices.'
  },
  {
    icon: Code,
    title: 'Modern Development Practices',
    description: 'We use the latest WordPress technologies: Full Site Editing, block themes, design systems with tokens, and performance-first architecture.'
  },
  {
    icon: Target,
    title: 'Business-Focused Solutions',
    description: 'We don\'t just write code—we solve business problems. Every technical decision is made with your goals and ROI in mind.'
  }
];

/**
 * Service Benefits
 */
export const servicePageBenefits = [
  'Future-proof WordPress websites using block themes and FSE',
  'Scalable architecture that grows with your business',
  'Accessible (WCAG 2.1 AA compliant) and SEO-friendly',
  'Fast loading times (90+ Lighthouse scores)',
  'Clean, maintainable code following WordPress standards',
  'Comprehensive documentation and training',
  'Ongoing support and maintenance available',
  'Managed WordPress hosting options'
];

/**
 * Service Deliverables
 */
export const servicePageDeliverables = [
  'Custom WordPress theme or plugin',
  'Source code with version control (Git)',
  'Design system documentation (theme.json)',
  'Block pattern library',
  'Developer documentation',
  'User training materials',
  'Testing reports (performance, accessibility, security)',
  'Launch checklist and deployment guide'
];

/**
 * Pricing Information
 */
export const servicePagePricing = {
  title: 'Flexible Pricing Options',
  description: 'WordPress development projects typically range from $5,000 to $50,000+ depending on complexity, features, and timeline. We offer both fixed-price and hourly rates.',
  options: [
    {
      title: 'Small Projects',
      range: '$5,000 - $15,000',
      description: 'Simple WordPress themes, plugin customizations, or small feature additions',
      examples: ['Theme customization', 'Plugin development', 'Performance optimization']
    },
    {
      title: 'Medium Projects',
      range: '$15,000 - $35,000',
      description: 'Custom block themes, WooCommerce stores, or complex integrations',
      examples: ['Custom block theme', 'WooCommerce store', 'API integrations']
    },
    {
      title: 'Large Projects',
      range: '$35,000+',
      description: 'Enterprise WordPress solutions, multi-site networks, or complex applications',
      examples: ['Enterprise multisite', 'Custom application', 'SaaS platform']
    }
  ],
  cta: 'Contact us for a detailed quote based on your specific requirements.'
};

/**
 * Related Services
 */
export const servicePageRelated = [
  {
    title: 'WooCommerce Development',
    description: 'Build high-performance e-commerce stores with custom WooCommerce solutions.',
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
 * Service FAQs
 */
export interface ServiceFAQ {
  question: string;
  answer: string;
}

export const servicePageFAQs: ServiceFAQ[] = [
  {
    question: 'What is WordPress block theme development?',
    answer: 'Block theme development uses WordPress Full Site Editing (FSE) to build themes with HTML templates and theme.json instead of PHP. This modern approach gives editors complete visual control over their website using the block editor, including headers, footers, and all template parts. Block themes are the future of WordPress development.'
  },
  {
    question: 'How long does WordPress development take?',
    answer: 'WordPress development timelines vary based on project complexity. A simple theme customization might take 2-4 weeks, while a custom block theme typically requires 6-10 weeks, and enterprise solutions can take 12+ weeks. We provide detailed timelines during the discovery phase based on your specific requirements.'
  },
  {
    question: 'Do you develop custom WordPress plugins?',
    answer: 'Yes! We specialize in custom WordPress plugin development. Whether you need custom post types, REST API endpoints, admin interfaces, custom Gutenberg blocks, or third-party integrations, our team can build tailored plugins that extend WordPress functionality to meet your unique business requirements.'
  },
  {
    question: 'What is your WordPress development process?',
    answer: 'Our process includes: Discovery & Planning (1-2 weeks), Design & Architecture (2-3 weeks), Development (4-8 weeks), Testing & QA (1-2 weeks), Launch & Training (1 week), and ongoing Support & Maintenance. We follow modern development practices including version control, code reviews, and comprehensive testing.'
  },
  {
    question: 'Can you optimize my existing WordPress site?',
    answer: 'Absolutely! We offer WordPress performance optimization services including database query optimization, caching strategies, image optimization, code minification, and CDN integration. Our goal is to achieve 90+ Lighthouse scores and fast loading times across all devices.'
  },
  {
    question: 'Do you provide WordPress training?',
    answer: 'Yes, we include WordPress training as part of all our development projects. We train your team on using the block editor, managing content, creating block patterns, and performing basic maintenance tasks. We also provide comprehensive documentation for both users and developers.'
  },
  {
    question: 'What makes LightSpeed different from other WordPress developers?',
    answer: 'LightSpeed is one of the elite few companies globally to hold both WooExpert and Mailchimp Expert certifications. Our team has 22+ years of combined WordPress experience, manages 120+ websites, and uses modern development practices like Full Site Editing and design systems. We focus on business results, not just code.'
  },
  {
    question: 'Do you offer ongoing WordPress support?',
    answer: 'Yes! We offer comprehensive WordPress support and maintenance plans including regular updates, security monitoring, performance optimization, and technical support. We also provide managed WordPress hosting to ensure your site stays fast, secure, and reliable.'
  }
];

/**
 * CTA Section
 */
export const servicePageCTA = {
  title: 'Ready to Start Your WordPress Project?',
  description: 'Let\'s discuss your requirements and create a custom WordPress solution that meets your business goals.',
  buttons: [
    {
      text: 'Get a Quote',
      page: 'contact',
      variant: 'default'
    },
    {
      text: 'View Our Work',
      page: 'portfolio',
      variant: 'outline'
    }
  ]
};

/**
 * Helper Functions
 */

/**
 * Get service by slug
 */
export function getServiceBySlug(slug: string) {
  // In a real app, this would fetch from a database or CMS
  return {
    slug,
    hero: servicePageHero,
    overview: servicePageOverview,
    features: servicePageFeatures,
    process: servicePageProcess,
    subServices: servicePageSubServices,
    whyChoose: servicePageWhyChoose,
    benefits: servicePageBenefits,
    deliverables: servicePageDeliverables,
    pricing: servicePagePricing,
    related: servicePageRelated,
    faqs: servicePageFAQs,
    cta: servicePageCTA
  };
}
