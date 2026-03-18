/**
 * Development Service Page Data
 * 
 * Real content for WordPress development service page from LightSpeed WP Agency.
 * Real content extracted from https://lightspeedwp.agency
 * 
 * **REAL CONTENT SOURCE:** https://lightspeedwp.agency/services/development
 * **Last Updated:** 2025-01-09
 * 
 * WordPress: Maps to templates/page-development-service.html
 */

import type { UniversalIcon } from '../utils/icon-map';

/**
 * Service Hero Content
 */
export const developmentServiceHero = {
  badge: {
    icon: 'Code' as UniversalIcon,
    text: 'Development Service'
  },
  title: 'Engineering powerful WordPress experiences',
  titleHighlight: 'Engineering', // Word to highlight
  tagline: 'Custom block themes, WooCommerce development, API integrations & AI-assisted code generation',
  description: 'We build custom WordPress themes, plugins, and integrations using modern development practices including Full Site Editing, block patterns, headless architecture, and AI-assisted coding. Our development is secure, scalable, and optimized for performance with automated testing and continuous integration.'
};

/**
 * Service Overview
 */
export const developmentServiceOverview = {
  title: 'Why professional WordPress development matters',
  description: 'Custom development gives you complete control over functionality, design, and user experience. Unlike off-the-shelf themes and plugins, custom solutions are tailored to your exact needs, optimized for performance, and built to scale with your business.',
  stats: [
    {
      icon: 'Lightning' as UniversalIcon,
      value: '2.5x',
      label: 'Faster',
      description: 'Than page builders'
    },
    {
      icon: 'Shield' as UniversalIcon,
      value: '99.9%',
      label: 'Secure',
      description: 'Code security standards'
    },
    {
      icon: 'Rocket' as UniversalIcon,
      value: '10x',
      label: 'Scalability',
      description: 'Better performance at scale'
    },
    {
      icon: 'Code' as UniversalIcon,
      value: '100%',
      label: 'Custom',
      description: 'Tailored to your needs'
    }
  ]
};

/**
 * Development Services
 */
export interface DevelopmentService {
  id: string;
  icon: UniversalIcon;
  title: string;
  description: string;
  features: string[];
}

export const developmentServices: DevelopmentService[] = [
  {
    id: 'block-theme-fse',
    icon: 'Layers' as UniversalIcon,
    title: 'Block theme & FSE development',
    description: 'Full Site Editing block themes built with theme.json, custom patterns, and modern WordPress standards.',
    features: [
      'Block-based themes (FSE)',
      'theme.json configuration',
      'Custom block patterns',
      'Template parts & templates',
      'Global styles system',
      'Performance optimized'
    ]
  },
  {
    id: 'plugin-dev',
    icon: 'Package' as UniversalIcon,
    title: 'Custom plugin development',
    description: 'WooCommerce extensions, payment gateways, and custom plugins with clean, maintainable code.',
    features: [
      'WooCommerce extensions',
      'Payment gateway integrations',
      'Custom post types',
      'Advanced Custom Fields',
      'Admin interfaces',
      'REST API endpoints'
    ]
  },
  {
    id: 'api-crm',
    icon: 'Puzzle' as UniversalIcon,
    title: 'API & CRM integrations',
    description: 'Connect WordPress with external services, CRMs, payment processors, and third-party APIs.',
    features: [
      'CRM integrations (Salesforce, HubSpot)',
      'Payment gateways',
      'Email marketing platforms',
      'Analytics & tracking',
      'Social media APIs',
      'Custom webhooks'
    ]
  },
  {
    id: 'headless-hybrid',
    icon: 'Terminal' as UniversalIcon,
    title: 'Headless/hybrid architecture',
    description: 'Gatsby, Next.js, and React front-ends powered by WordPress REST API or GraphQL.',
    features: [
      'REST API customization',
      'GraphQL with WPGraphQL',
      'Next.js integration',
      'Gatsby integration',
      'Authentication & JWT',
      'API performance optimization'
    ]
  },
  {
    id: 'performance-engineering',
    icon: 'Zap' as UniversalIcon,
    title: 'Performance engineering',
    description: 'Code optimization, caching strategies, database tuning, and Core Web Vitals optimization.',
    features: [
      'Database optimization',
      'Query optimization',
      'Asset minification',
      'Lazy loading',
      'Caching strategies',
      'Core Web Vitals'
    ]
  },
  {
    id: 'security-hardening',
    icon: 'Shield' as UniversalIcon,
    title: 'Security & code hardening',
    description: 'Proactive security measures, code audits, vulnerability scanning, and OWASP compliance.',
    features: [
      'Input validation & sanitization',
      'Output escaping',
      'Prepared SQL statements',
      'Nonce verification',
      'Capability checks',
      'Security audits'
    ]
  },
  {
    id: 'testing-cicd',
    icon: 'CheckCircle' as UniversalIcon,
    title: 'Automated testing & CI/CD',
    description: 'PHPUnit, Jest, Cypress testing with continuous integration and automated deployments.',
    features: [
      'Unit testing (PHPUnit)',
      'Integration testing',
      'Browser testing (Cypress)',
      'Automated deployments',
      'GitHub Actions / GitLab CI',
      'Code quality checks'
    ]
  },
  {
    id: 'ai-assisted-coding',
    icon: 'Brain' as UniversalIcon,
    title: 'AI-assisted coding & code reviews',
    description: 'AI tools for code generation, static analysis, documentation, and automated code reviews.',
    features: [
      'AI code generation',
      'Boilerplate automation',
      'Static analysis',
      'Code review assistance',
      'Documentation generation',
      'Quality assurance'
    ]
  }
];

/**
 * Technologies & Tools
 */
export const developmentTechnologies = [
  {
    category: 'Core Technologies',
    items: ['PHP 8+', 'MySQL/MariaDB', 'JavaScript/ES6+', 'React', 'HTML5', 'CSS3/Sass']
  },
  {
    category: 'WordPress',
    items: ['Full Site Editing', 'Block Editor (Gutenberg)', 'REST API', 'WP-CLI', 'Multisite', 'theme.json']
  },
  {
    category: 'Front-End',
    items: ['React', 'Next.js', 'Tailwind CSS', 'Webpack', 'Vite', 'TypeScript']
  },
  {
    category: 'Tools & DevOps',
    items: ['Git/GitHub', 'Composer', 'npm/yarn', 'Docker', 'WP-CLI', 'PHPUnit']
  },
  {
    category: 'APIs & Services',
    items: ['REST API', 'GraphQL', 'WPGraphQL', 'OAuth', 'JWT', 'Webhooks']
  },
  {
    category: 'Testing & QA',
    items: ['PHPUnit', 'Jest', 'Cypress', 'Browser testing', 'Code standards', 'Security audits']
  }
];

/**
 * Development Process
 */
export const developmentProcess = [
  {
    step: 1,
    title: 'Planning & architecture',
    description: 'Define requirements, technical architecture, and development roadmap. AI tools assist with technical documentation and architecture diagrams.',
    icon: 'FileCode' as UniversalIcon,
    deliverables: [
      'Technical specifications',
      'Database schema',
      'API documentation',
      'Development timeline',
      'Technology stack selection',
      'Architecture diagrams'
    ]
  },
  {
    step: 2,
    title: 'Coding & integration',
    description: 'Build custom solutions using WordPress best practices. AI accelerates development by generating boilerplate code and running static analysis.',
    icon: 'Code' as UniversalIcon,
    deliverables: [
      'Theme codebase',
      'Plugin repositories',
      'Custom blocks',
      'API integrations',
      'Database migrations',
      'Version control setup'
    ]
  },
  {
    step: 3,
    title: 'Testing & review',
    description: 'Comprehensive testing including functionality, performance, and security. AI assists with test generation and code quality checks.',
    icon: 'CheckCircle' as UniversalIcon,
    deliverables: [
      'Unit tests',
      'Integration tests',
      'Testing reports',
      'Browser testing',
      'Performance testing',
      'Security audit'
    ]
  },
  {
    step: 4,
    title: 'Deployment & support',
    description: 'Launch to production with monitoring, documentation, and ongoing support. AI helps generate comprehensive documentation.',
    icon: 'Rocket' as UniversalIcon,
    deliverables: [
      'Production deployment',
      'Deployment scripts',
      'Integration documentation',
      'API keys management',
      'Training materials',
      'Monitoring setup'
    ]
  }
];

/**
 * Development Standards
 */
export const developmentStandards = [
  {
    icon: 'Code' as UniversalIcon,
    title: 'WordPress coding standards',
    description: 'All code follows official WordPress PHP, JavaScript, and CSS coding standards.'
  },
  {
    icon: 'Shield' as UniversalIcon,
    title: 'Security best practices',
    description: 'Input validation, output escaping, nonces, and capability checks built-in.'
  },
  {
    icon: 'Zap' as UniversalIcon,
    title: 'Performance first',
    description: 'Optimized queries, efficient algorithms, and minimal resource usage.'
  },
  {
    icon: 'GitBranch' as UniversalIcon,
    title: 'Version control',
    description: 'Git workflow with feature branches, code reviews, and semantic versioning.'
  },
  {
    icon: 'Database' as UniversalIcon,
    title: 'Database optimization',
    description: 'Proper indexing, efficient queries, and database migration strategies.'
  },
  {
    icon: 'Settings' as UniversalIcon,
    title: 'Scalability',
    description: 'Architecture designed to handle growth in traffic, content, and features.'
  }
];

/**
 * Development Packages
 */
export const developmentPackages = [
  {
    name: 'Custom Plugin',
    price: '$3,000 - $8,000',
    description: 'Single-purpose WordPress plugin',
    features: [
      'Custom functionality',
      'Admin interface',
      'Settings page',
      'Custom post types',
      'Database tables',
      'Documentation',
      '2-4 weeks delivery'
    ],
    recommended: false
  },
  {
    name: 'Custom Theme',
    price: '$8,000 - $20,000',
    description: 'Full Site Editing block theme',
    features: [
      'Block-based theme',
      'Full Site Editing',
      'Custom block patterns',
      'Template parts',
      'Global styles (theme.json)',
      'Performance optimization',
      '4-6 weeks delivery'
    ],
    recommended: true
  },
  {
    name: 'Enterprise Development',
    price: '$20,000+',
    description: 'Complex custom solutions',
    features: [
      'Custom themes & plugins',
      'Headless WordPress',
      'Third-party integrations',
      'Performance optimization',
      'Security hardening',
      'Ongoing development',
      '8-12 weeks delivery'
    ],
    recommended: false
  }
];

/**
 * Why Choose Our Development
 */
export const whyChooseDevelopment = [
  {
    icon: 'Code' as UniversalIcon,
    title: 'Modern WordPress development',
    description: 'We use the latest WordPress features including Full Site Editing, block patterns, and theme.json for future-proof solutions.'
  },
  {
    icon: 'Zap' as UniversalIcon,
    title: 'Performance optimized',
    description: 'Our code is lean, efficient, and optimized for speed. We build fast websites that scale.'
  },
  {
    icon: 'Shield' as UniversalIcon,
    title: 'Security focused',
    description: '20+ years security expertise with proactive security measures built into every project.'
  },
  {
    icon: 'GitBranch' as UniversalIcon,
    title: 'Professional workflow',
    description: 'Git version control, code reviews, automated testing, and continuous integration.'
  },
  {
    icon: 'Settings' as UniversalIcon,
    title: 'Maintainable code',
    description: 'Clean, well-documented code that follows WordPress standards and best practices.'
  },
  {
    icon: 'Rocket' as UniversalIcon,
    title: 'Ongoing support',
    description: 'We support and maintain the code we write with updates, bug fixes, and enhancements.'
  }
];

/**
 * Service FAQs
 */
export interface ServiceFAQ {
  question: string;
  answer: string;
}

export const developmentServiceFAQs: ServiceFAQ[] = [
  {
    question: 'What is custom WordPress development?',
    answer: 'Custom WordPress development involves building themes, plugins, blocks, and integrations specifically for your website\'s unique needs. Unlike pre-made themes and plugins, custom development gives you complete control over functionality, design, and performance with code tailored to your exact requirements.'
  },
  {
    question: 'How long does custom development take?',
    answer: 'Timeline depends on project complexity. A custom plugin takes 2-4 weeks, a custom block theme takes 4-6 weeks, and enterprise projects take 8-12+ weeks. We provide detailed timelines during the planning phase and keep you updated throughout development.'
  },
  {
    question: 'Do you follow WordPress coding standards?',
    answer: 'Yes! All our code follows official WordPress PHP, JavaScript, HTML, and CSS coding standards. We also implement WordPress security best practices including data validation, sanitization, escaping, and nonces. Our code passes automated code quality checks.'
  },
  {
    question: 'Can you integrate WordPress with other systems?',
    answer: 'Absolutely! We specialize in third-party integrations including payment gateways, CRMs (Salesforce, HubSpot), email marketing platforms (Mailchimp, ConvertKit), analytics tools, and custom APIs. We use WordPress REST API, webhooks, and OAuth for secure integrations.'
  },
  {
    question: 'What is headless WordPress?',
    answer: 'Headless WordPress uses WordPress as a content management system (backend) while using a separate technology like React, Next.js, or Vue for the front-end (presentation). We expose content via REST API or GraphQL. This provides flexibility, performance benefits, and modern development workflows.'
  },
  {
    question: 'Do you provide documentation for custom code?',
    answer: 'Yes! Every custom development project includes comprehensive documentation covering: code architecture, function references, API endpoints, database schema, deployment instructions, and maintenance guidelines. We also provide inline code comments following WordPress documentation standards.'
  },
  {
    question: 'Can you maintain and update custom code after launch?',
    answer: 'Absolutely! We offer ongoing development support including bug fixes, feature enhancements, WordPress updates, security patches, and performance optimization. Most clients choose monthly retainers for continued development and maintenance.'
  },
  {
    question: 'How do you ensure code security?',
    answer: 'Security is built into our development process: input validation and sanitization, output escaping to prevent XSS, prepared statements for SQL queries, nonce verification, capability checks, secure authentication, regular security audits, and following OWASP guidelines. We also use automated security scanning tools.'
  }
];

/**
 * Service CTA
 */
export const developmentServiceCTA = {
  title: 'Ready to build your custom WordPress solution?',
  description: 'Let\'s create powerful, scalable WordPress solutions tailored to your business needs.',
  buttons: [
    {
      text: 'Start Your Project',
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
 * Client Responsibilities
 */
export const clientResponsibilities = [
  {
    icon: 'Key' as UniversalIcon,
    title: 'API credentials',
    description: 'Provide API keys and access credentials for third-party services and integrations.'
  },
  {
    icon: 'TestTube' as UniversalIcon,
    title: 'Test environments',
    description: 'Supply development and staging environments for testing and quality assurance.'
  },
  {
    icon: 'FileText' as UniversalIcon,
    title: 'Business logic requirements',
    description: 'Document specific business rules, workflows, and functionality requirements.'
  },
  {
    icon: 'Users' as UniversalIcon,
    title: 'Code reviews & demos',
    description: 'Participate in code review sessions and provide feedback during demos.'
  }
];

/**
 * Development Case Studies
 */
export const developmentCaseStudies = [
  {
    id: 'woocommerce-payment',
    title: 'Custom payment gateway integration',
    client: 'E-commerce Retailer',
    challenge: 'Needed to integrate a regional payment processor not supported by WooCommerce.',
    solution: 'Built a custom WooCommerce payment gateway plugin with full transaction management.',
    results: [
      '40% reduction in payment processing fees',
      '98% payment success rate',
      'Full PCI compliance maintained',
      '2-week delivery timeline'
    ],
    technologies: ['WooCommerce', 'PHP', 'REST API', 'OAuth']
  },
  {
    id: 'headless-migration',
    title: 'Large-scale headless migration',
    client: 'Digital Publishing Platform',
    challenge: 'Migrate legacy WordPress monolith to headless architecture for improved performance.',
    solution: 'Implemented WordPress + Next.js headless setup with GraphQL and incremental static regeneration.',
    results: [
      '60% faster page load times',
      '10x better scalability',
      'Zero downtime migration',
      'Enhanced security posture'
    ],
    technologies: ['Next.js', 'WPGraphQL', 'React', 'Vercel']
  },
  {
    id: 'complex-plugin',
    title: 'Complex CRM integration plugin',
    client: 'B2B SaaS Company',
    challenge: 'Sync WordPress users and WooCommerce orders with Salesforce CRM in real-time.',
    solution: 'Developed custom plugin with bi-directional sync, webhook handlers, and error recovery.',
    results: [
      '100% data sync accuracy',
      'Real-time synchronization',
      'Automated workflow triggers',
      'Reduced manual data entry by 95%'
    ],
    technologies: ['Salesforce API', 'Webhooks', 'WP Cron', 'Custom Post Types']
  }
];

/**
 * Helper Functions
 */

/**
 * Get development service data
 */
export function getDevelopmentServiceData() {
  return {
    hero: developmentServiceHero,
    overview: developmentServiceOverview,
    services: developmentServices,
    technologies: developmentTechnologies,
    process: developmentProcess,
    standards: developmentStandards,
    packages: developmentPackages,
    whyChoose: whyChooseDevelopment,
    faqs: developmentServiceFAQs,
    cta: developmentServiceCTA,
    clientResponsibilities: clientResponsibilities,
    caseStudies: developmentCaseStudies
  };
}