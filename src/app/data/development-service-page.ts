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
  title: 'Expert WordPress development for modern websites',
  titleHighlight: 'Development', // Word to highlight
  tagline: 'Custom WordPress development that delivers scalable, high-performance solutions built on modern best practices',
  description: 'We build custom WordPress themes, plugins, and integrations using modern development practices including Full Site Editing, block patterns, and headless architecture. Our code is clean, maintainable, and optimized for performance and security.'
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
    id: 'theme-dev',
    icon: 'Layers' as UniversalIcon,
    title: 'Custom theme development',
    description: 'Block themes built with Full Site Editing, theme.json, and modern WordPress standards.',
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
    title: 'Plugin development',
    description: 'Custom plugins that extend WordPress functionality with clean, maintainable code.',
    features: [
      'Custom post types',
      'Advanced Custom Fields',
      'Admin interfaces',
      'REST API endpoints',
      'Hooks & filters',
      'WordPress coding standards'
    ]
  },
  {
    id: 'block-dev',
    icon: 'Blocks' as UniversalIcon,
    title: 'Custom block development',
    description: 'Gutenberg blocks built with React for powerful, reusable content components.',
    features: [
      'React-based blocks',
      'Block patterns',
      'Block variations',
      'InnerBlocks support',
      'Attributes & controls',
      'Block styles & themes'
    ]
  },
  {
    id: 'headless',
    icon: 'Terminal' as UniversalIcon,
    title: 'Headless WordPress',
    description: 'WordPress as a headless CMS with REST API or GraphQL for modern front-ends.',
    features: [
      'REST API customization',
      'GraphQL with WPGraphQL',
      'Custom endpoints',
      'Authentication & JWT',
      'Next.js/React integration',
      'API performance optimization'
    ]
  },
  {
    id: 'integrations',
    icon: 'Puzzle' as UniversalIcon,
    title: 'Third-party integrations',
    description: 'Connect WordPress with external services, APIs, and platforms.',
    features: [
      'Payment gateways',
      'CRM integrations',
      'Email marketing platforms',
      'Analytics & tracking',
      'Social media APIs',
      'Custom webhooks'
    ]
  },
  {
    id: 'optimization',
    icon: 'Zap' as UniversalIcon,
    title: 'Performance optimization',
    description: 'Code optimization, caching strategies, and database tuning for speed.',
    features: [
      'Database optimization',
      'Query optimization',
      'Asset minification',
      'Lazy loading',
      'Caching strategies',
      'CDN integration'
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
    description: 'Define requirements, technical architecture, and development roadmap.',
    icon: 'FileCode' as UniversalIcon,
    deliverables: [
      'Technical specifications',
      'Database schema',
      'API documentation',
      'Development timeline',
      'Technology stack selection'
    ]
  },
  {
    step: 2,
    title: 'Development & coding',
    description: 'Build custom solutions using WordPress best practices and modern standards.',
    icon: 'Code' as UniversalIcon,
    deliverables: [
      'Custom theme/plugin code',
      'Block development',
      'API integrations',
      'Database migrations',
      'Version control setup'
    ]
  },
  {
    step: 3,
    title: 'Testing & QA',
    description: 'Comprehensive testing including functionality, performance, and security.',
    icon: 'CheckCircle' as UniversalIcon,
    deliverables: [
      'Unit tests',
      'Integration tests',
      'Browser testing',
      'Performance testing',
      'Security audit'
    ]
  },
  {
    step: 4,
    title: 'Deployment & support',
    description: 'Launch to production with monitoring, documentation, and ongoing support.',
    icon: 'Rocket' as UniversalIcon,
    deliverables: [
      'Production deployment',
      'Developer documentation',
      'Training materials',
      'Monitoring setup',
      'Ongoing support plan'
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
    cta: developmentServiceCTA
  };
}