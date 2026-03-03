/**
 * Service Pricing & Timeline Data
 * 
 * Detailed pricing and timeline information for each service.
 * Used on individual service detail pages.
 * 
 * **Created:** March 3, 2026
 * **Optimization:** Part of Memory Optimization Task 1.2 — services.ts consolidation
 */

import type { ServicePricingDetailed, ServiceTimeline } from './types';

/**
 * Service Pricing & Timeline Record
 * 
 * Maps service slugs to their detailed pricing and timeline data.
 */
export const servicePricingTimeline: Record<string, { pricing: ServicePricingDetailed; timeline: ServiceTimeline }> = {
  discovery: {
    pricing: {
      min: 3000,
      max: 10000,
      unit: 'project',
      startingFrom: 'Starting from $3,000',
      variables: [
        'Scope of research required',
        'Number of stakeholder interviews',
        'Competitive analysis depth',
        'Technical complexity',
        'Documentation requirements'
      ],
      includes: [
        'Stakeholder interviews',
        'User research & personas',
        'Competitive analysis report',
        'Strategic roadmap',
        'Requirements documentation',
        'Technical specification',
        'Project timeline'
      ]
    },
    timeline: {
      duration: 3,
      unit: 'weeks',
      phases: [
        { name: 'Stakeholder Interviews', duration: '1 week' },
        { name: 'Research & Analysis', duration: '1 week' },
        { name: 'Strategy Development', duration: '0.5 weeks' },
        { name: 'Documentation & Handoff', duration: '0.5 weeks' }
      ],
      variables: [
        'Number of stakeholders',
        'Research complexity',
        'Feedback turnaround time',
        'Documentation requirements'
      ]
    }
  },
  
  design: {
    pricing: {
      min: 5000,
      max: 25000,
      unit: 'project',
      startingFrom: 'Starting from $5,000',
      variables: [
        'Number of unique page designs',
        'Complexity of interactions',
        'Custom illustrations or graphics',
        'Design system requirements',
        'Number of revision rounds'
      ],
      includes: [
        'User research and personas',
        'Wireframes for all pages',
        'High-fidelity mockups',
        'Interactive prototype',
        'Design system documentation',
        'Source files (Figma/Sketch)',
        'Brand guidelines integration'
      ]
    },
    timeline: {
      duration: 5,
      unit: 'weeks',
      phases: [
        { name: 'Discovery & Research', duration: '1 week' },
        { name: 'Wireframing', duration: '1 week' },
        { name: 'Visual Design', duration: '2 weeks' },
        { name: 'Prototyping & Handoff', duration: '1 week' }
      ],
      variables: [
        'Number of pages/screens',
        'Complexity of features',
        'Feedback turnaround time',
        'Stakeholder availability'
      ]
    }
  },
  
  development: {
    pricing: {
      min: 10000,
      max: 100000,
      unit: 'project',
      startingFrom: 'Starting from $10,000',
      variables: [
        'Number of custom features',
        'API integrations required',
        'Database complexity',
        'Third-party services',
        'Performance requirements',
        'Security requirements'
      ],
      includes: [
        'Custom WordPress theme',
        'Plugin development',
        'API integrations',
        'Database optimization',
        'Custom post types',
        'Advanced custom fields',
        'Multi-site setup (if needed)',
        'Migration assistance'
      ]
    },
    timeline: {
      duration: 10,
      unit: 'weeks',
      phases: [
        { name: 'Planning & Architecture', duration: '1 week' },
        { name: 'Core Development', duration: '5 weeks' },
        { name: 'Integration & Testing', duration: '2 weeks' },
        { name: 'Deployment & Handoff', duration: '2 weeks' }
      ],
      variables: [
        'Feature complexity',
        'Integration requirements',
        'Testing requirements',
        'Content migration needs'
      ]
    }
  },
  
  content: {
    pricing: {
      min: 2000,
      max: 15000,
      unit: 'project',
      startingFrom: 'Starting from $2,000',
      variables: [
        'Amount of content to create/migrate',
        'Content audit requirements',
        'SEO optimization depth',
        'Content strategy complexity',
        'Number of content types'
      ],
      includes: [
        'Content strategy',
        'Content migration',
        'Content audit',
        'SEO optimization',
        'Meta data optimization',
        'Content guidelines',
        'Training materials'
      ]
    },
    timeline: {
      duration: 4,
      unit: 'weeks',
      phases: [
        { name: 'Content Audit', duration: '1 week' },
        { name: 'Strategy Development', duration: '1 week' },
        { name: 'Content Creation/Migration', duration: '1.5 weeks' },
        { name: 'Optimization & QA', duration: '0.5 weeks' }
      ],
      variables: [
        'Content volume',
        'Migration complexity',
        'Content creation needs',
        'Review cycles'
      ]
    }
  },
  
  seo: {
    pricing: {
      min: 1500,
      max: 5000,
      unit: 'monthly',
      startingFrom: 'Starting from $1,500/month',
      variables: [
        'Website size and complexity',
        'Competitive landscape',
        'Target keywords',
        'Geographic targeting',
        'Monthly reporting requirements'
      ],
      includes: [
        'SEO optimization',
        'Schema markup',
        'Meta data optimization',
        'Sitemap generation',
        'Performance optimization',
        'Core Web Vitals tuning',
        'Monthly reporting'
      ]
    },
    timeline: {
      duration: 3,
      unit: 'months',
      phases: [
        { name: 'Initial Audit & Setup', duration: '2 weeks' },
        { name: 'Ongoing Optimization', duration: '10 weeks' }
      ],
      variables: [
        'Site size',
        'Current SEO state',
        'Competition level',
        'Goal aggressiveness'
      ]
    }
  },
  
  performance: {
    pricing: {
      min: 2000,
      max: 8000,
      unit: 'project',
      startingFrom: 'Starting from $2,000',
      variables: [
        'Current performance baseline',
        'Number of optimization areas',
        'Caching complexity',
        'Image optimization needs',
        'Code optimization requirements'
      ],
      includes: [
        'Performance optimization',
        'Core Web Vitals tuning',
        'Image optimization',
        'Caching implementation',
        'Database optimization',
        'Code minification',
        'CDN setup'
      ]
    },
    timeline: {
      duration: 2,
      unit: 'weeks',
      phases: [
        { name: 'Performance Audit', duration: '0.5 weeks' },
        { name: 'Optimization Implementation', duration: '1 week' },
        { name: 'Testing & Validation', duration: '0.5 weeks' }
      ],
      variables: [
        'Current performance state',
        'Site complexity',
        'Testing requirements',
        'Target metrics'
      ]
    }
  },
  
  security: {
    pricing: {
      min: 1000,
      max: 5000,
      unit: 'project',
      startingFrom: 'Starting from $1,000',
      variables: [
        'Current security state',
        'Vulnerability assessment needs',
        'Hardening requirements',
        'Monitoring setup',
        'Compliance requirements'
      ],
      includes: [
        'Security hardening',
        'SSL certificate setup',
        'Regular security updates',
        'Malware scanning',
        'Regular backups',
        'Firewall configuration',
        'Security monitoring setup'
      ]
    },
    timeline: {
      duration: 1,
      unit: 'weeks',
      phases: [
        { name: 'Security Audit', duration: '2 days' },
        { name: 'Hardening Implementation', duration: '2 days' },
        { name: 'Testing & Documentation', duration: '1 day' }
      ],
      variables: [
        'Current security posture',
        'Site complexity',
        'Compliance needs',
        'Monitoring requirements'
      ]
    }
  },
  
  accessibility: {
    pricing: {
      min: 3000,
      max: 15000,
      unit: 'project',
      startingFrom: 'Starting from $3,000',
      variables: [
        'WCAG compliance level (A, AA, AAA)',
        'Number of templates/pages',
        'Current accessibility state',
        'Remediation requirements',
        'Testing depth'
      ],
      includes: [
        'Accessibility audit',
        'WCAG compliance review',
        'Remediation implementation',
        'Screen reader testing',
        'Keyboard navigation testing',
        'Documentation',
        'Training materials'
      ]
    },
    timeline: {
      duration: 3,
      unit: 'weeks',
      phases: [
        { name: 'Accessibility Audit', duration: '1 week' },
        { name: 'Remediation Implementation', duration: '1.5 weeks' },
        { name: 'Testing & Documentation', duration: '0.5 weeks' }
      ],
      variables: [
        'Site complexity',
        'WCAG level target',
        'Current state',
        'Testing requirements'
      ]
    }
  },
  
  support: {
    pricing: {
      min: 500,
      max: 3000,
      unit: 'monthly',
      startingFrom: 'Starting from $500/month',
      variables: [
        'Support hours included',
        'Response time SLA',
        'Number of sites',
        'Update frequency',
        'Monitoring requirements'
      ],
      includes: [
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
    timeline: {
      duration: 1,
      unit: 'months',
      phases: [
        { name: 'Ongoing Monthly Support', duration: 'Continuous' }
      ],
      variables: [
        'Support tier',
        'Site complexity',
        'Update frequency',
        'Issue volume'
      ]
    }
  },
  
  migrations: {
    pricing: {
      min: 5000,
      max: 30000,
      unit: 'project',
      startingFrom: 'Starting from $5,000',
      variables: [
        'Content volume',
        'Platform complexity',
        'Custom functionality',
        'Data structure complexity',
        'Testing requirements'
      ],
      includes: [
        'Content migration',
        'Migration planning',
        'Database migration',
        'SEO preservation',
        'URL redirects',
        'Testing & validation',
        'Post-migration support'
      ]
    },
    timeline: {
      duration: 8,
      unit: 'weeks',
      phases: [
        { name: 'Migration Planning', duration: '1 week' },
        { name: 'Data Migration', duration: '3 weeks' },
        { name: 'Testing & Validation', duration: '2 weeks' },
        { name: 'Go-Live & Support', duration: '2 weeks' }
      ],
      variables: [
        'Content volume',
        'Platform complexity',
        'Custom features',
        'Testing depth'
      ]
    }
  },
  
  newsletter: {
    pricing: {
      min: 2000,
      max: 10000,
      unit: 'project',
      startingFrom: 'Starting from $2,000',
      variables: [
        'Integration complexity',
        'Custom functionality',
        'Template requirements',
        'Automation needs',
        'List management features'
      ],
      includes: [
        'Newsletter plugin setup',
        'API integration',
        'Custom templates',
        'Subscription forms',
        'List management',
        'Automation setup',
        'Analytics integration'
      ]
    },
    timeline: {
      duration: 3,
      unit: 'weeks',
      phases: [
        { name: 'Planning & Design', duration: '1 week' },
        { name: 'Development & Integration', duration: '1.5 weeks' },
        { name: 'Testing & Launch', duration: '0.5 weeks' }
      ],
      variables: [
        'Integration complexity',
        'Custom features',
        'Testing requirements',
        'Content preparation'
      ]
    }
  }
};
