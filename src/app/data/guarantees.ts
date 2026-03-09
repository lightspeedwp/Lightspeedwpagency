/**
 * Guarantees & SLA Data
 * 
 * Service level agreements and guarantees for LSX Design.
 * Builds trust and reduces purchase anxiety.
 * 
 * **WordPress Mapping:**
 * - Could be ACF fields on guarantees page
 * - Or custom post type for guarantees
 * 
 * **Business Context:**
 * Risk reversal strategies to increase conversions
 */

export interface Guarantee {
  id: string;
  title: string;
  description: string;
  icon?: string; // Phosphor icon name
  details: string[];
  applies: string; // Which services this applies to
}

export interface SLA {
  id: string;
  metric: string;
  target: string;
  measurement: string;
  consequence: string; // What happens if we miss it
  plan: string; // Which maintenance plan
}

/**
 * Guarantees
 */
export const guarantees: Guarantee[] = [
  {
    id: 'performance',
    title: '90+ Lighthouse Score Guarantee',
    description: 'Your site will score 90+ on Google Lighthouse or we\'ll fix it for free.',
    icon: 'Gauge',
    details: [
      'Every site tested on Google Lighthouse before launch',
      'Performance score of 90+ guaranteed',
      'Free optimization if score drops below 90',
      'Core Web Vitals optimized for SEO',
      'Measured on real devices, not just lab tests'
    ],
    applies: 'All website packages'
  },
  
  {
    id: 'accessibility',
    title: 'WCAG 2.1 AA Compliance',
    description: 'Your site meets WCAG 2.1 AA standards for accessibility and legal compliance.',
    icon: 'Eye',
    details: [
      'Automated testing with axe DevTools',
      'Manual testing with keyboard navigation',
      'Screen reader compatibility verified',
      'Color contrast ratios meet AA standards',
      'Compliance report included',
      'Free remediation if issues found'
    ],
    applies: 'Professional and Enterprise packages'
  },
  
  {
    id: 'uptime',
    title: '99.9% Uptime Guarantee',
    description: 'Your site stays online and accessible 99.9% of the time.',
    icon: 'Server',
    details: [
      '99.9% uptime guarantee (less than 9 hours downtime/year)',
      '24/7 uptime monitoring',
      'Instant alerts if site goes down',
      'Free month of hosting if we miss target',
      'Excludes scheduled maintenance windows'
    ],
    applies: 'All maintenance plans with managed hosting'
  },
  
  {
    id: 'timeline',
    title: 'On-Time Delivery',
    description: 'Your project launches on schedule or you get a discount.',
    icon: 'Clock',
    details: [
      'Clear project timeline established upfront',
      'Weekly progress updates',
      'If we miss deadline (and it\'s our fault), 10% discount',
      'Excludes delays caused by client feedback/content',
      'Transparent project management with Basecamp/Asana'
    ],
    applies: 'All website packages'
  },
  
  {
    id: 'security',
    title: 'Security Hardening',
    description: 'Your site is protected with WordPress security best practices.',
    icon: 'Shield',
    details: [
      'Security best practices implemented from day one',
      'Regular security updates for WordPress core, themes, plugins',
      'Malware scanning and removal (maintenance plans)',
      'SSL certificate included',
      'Login security and firewall rules',
      'Free malware removal if compromised within 90 days'
    ],
    applies: 'All packages'
  },
  
  {
    id: 'training',
    title: 'Comprehensive Training',
    description: 'You\'ll know how to manage your site confidently.',
    icon: 'GraduationCap',
    details: [
      '1-2 hour training session included',
      'Screen recording of training session provided',
      'Written documentation for all features',
      'Follow-up Q&A session within 30 days',
      'Video tutorials for common tasks',
      'Free refresher training within 90 days'
    ],
    applies: 'All website packages'
  },
  
  {
    id: 'support',
    title: 'Post-Launch Support',
    description: 'We\'re here after launch to help you succeed.',
    icon: 'Headphones',
    details: [
      '30-90 days free support (package dependent)',
      'Bug fixes at no charge',
      'Questions answered via email',
      'Minor content updates included',
      'Transition to maintenance plan available',
      'Priority support for critical issues'
    ],
    applies: 'All website packages'
  },
  
  {
    id: 'satisfaction',
    title: '100% Satisfaction',
    description: 'If you\'re not happy, we\'ll make it right.',
    icon: 'ThumbsUp',
    details: [
      'Unlimited revisions during design phase (within scope)',
      'Clear approval process at each milestone',
      'No surprises - you see work at every stage',
      'If not satisfied, we\'ll revise until you are',
      'Final payment only after you approve',
      'Referral discount if you love our work'
    ],
    applies: 'All website packages'
  }
];

/**
 * Service Level Agreements (SLAs)
 * For maintenance plans
 */
export const slas: SLA[] = [
  // Essential Care SLAs
  {
    id: 'essential-uptime',
    metric: 'Uptime',
    target: '99.9%',
    measurement: 'Monthly average',
    consequence: 'Free month of service if missed',
    plan: 'Essential Care'
  },
  {
    id: 'essential-response',
    metric: 'Email Response Time',
    target: '48 hours',
    measurement: 'Business hours only',
    consequence: 'Priority escalation',
    plan: 'Essential Care'
  },
  {
    id: 'essential-updates',
    metric: 'Security Updates',
    target: 'Within 72 hours of release',
    measurement: 'Critical updates only',
    consequence: 'Immediate escalation',
    plan: 'Essential Care'
  },
  
  // Professional Care SLAs
  {
    id: 'pro-uptime',
    metric: 'Uptime',
    target: '99.95%',
    measurement: 'Monthly average',
    consequence: 'Free month of service if missed',
    plan: 'Professional Care'
  },
  {
    id: 'pro-response',
    metric: 'Priority Response Time',
    target: '24 hours',
    measurement: 'Business hours, escalated to 12hrs for critical',
    consequence: 'Free content update hours',
    plan: 'Professional Care'
  },
  {
    id: 'pro-updates',
    metric: 'Security Updates',
    target: 'Within 48 hours of release',
    measurement: 'All security updates',
    consequence: 'Immediate escalation',
    plan: 'Professional Care'
  },
  {
    id: 'pro-performance',
    metric: 'Lighthouse Score',
    target: '90+ maintained',
    measurement: 'Quarterly audit',
    consequence: 'Free optimization',
    plan: 'Professional Care'
  },
  
  // Enterprise Care SLAs
  {
    id: 'ent-uptime',
    metric: 'Uptime',
    target: '99.99%',
    measurement: 'Monthly average (less than 4 hours/year downtime)',
    consequence: 'Significant service credits',
    plan: 'Enterprise Care'
  },
  {
    id: 'ent-response',
    metric: '24/7 Response Time',
    target: '4 hours for critical, 24hrs for normal',
    measurement: 'Around the clock',
    consequence: 'Service credits',
    plan: 'Enterprise Care'
  },
  {
    id: 'ent-updates',
    metric: 'Security Updates',
    target: 'Within 24 hours of release',
    measurement: 'All updates, emergency deployments if needed',
    consequence: 'Immediate executive escalation',
    plan: 'Enterprise Care'
  },
  {
    id: 'ent-performance',
    metric: 'Lighthouse Score',
    target: '95+ maintained',
    measurement: 'Monthly audit with optimization',
    consequence: 'Free development hours',
    plan: 'Enterprise Care'
  },
  {
    id: 'ent-security',
    metric: 'Security Audit',
    target: 'Quarterly comprehensive audit',
    measurement: 'Third-party security scan',
    consequence: 'Free hardening',
    plan: 'Enterprise Care'
  }
];

/**
 * What's NOT Covered
 * Important for setting expectations
 */
export const notCovered = [
  {
    category: 'Performance Guarantee',
    exclusions: [
      'Third-party services (payment gateways, analytics, etc.)',
      'User-installed plugins after launch',
      'Hosting issues beyond our control',
      'Content-heavy pages (1000+ products without optimization)',
      'Sites under active DDoS attack'
    ]
  },
  {
    category: 'Uptime Guarantee',
    exclusions: [
      'Scheduled maintenance windows (announced 48hrs in advance)',
      'Issues with your domain registrar',
      'DDoS attacks (we will mitigate, but can\'t prevent)',
      'Client-caused outages (wrong plugins, etc.)',
      'Force majeure events'
    ]
  },
  {
    category: 'On-Time Delivery',
    exclusions: [
      'Delays caused by late client feedback (>5 business days)',
      'Scope changes requested mid-project',
      'Missing content from client',
      'Third-party integration delays',
      'Force majeure events'
    ]
  },
  {
    category: 'Post-Launch Support',
    exclusions: [
      'New feature development (quote provided)',
      'Content creation (not updates)',
      'Third-party integrations added after launch',
      'Issues caused by client modifications',
      'Extensive design changes'
    ]
  }
];

/**
 * Money-Back Policy
 */
export const moneyBack = {
  title: '30-Day Money-Back Guarantee',
  description: 'If we haven\'t delivered what we promised within 30 days of project start, get a full refund.',
  conditions: [
    'Applies only to initial deposit (not full project cost)',
    'Must request refund within 30 days of project kickoff',
    'No questions asked - if you\'re not happy, we refund',
    'You keep any design files created up to that point',
    'Mutual termination of contract'
  ],
  exclusions: [
    'After design approval (you approved the direction)',
    'After 30 days from project start',
    'If client hasn\'t provided required content',
    'If client is unresponsive to communication'
  ]
};

/**
 * Helper Functions
 */

export function getGuaranteeById(id: string): Guarantee | undefined {
  return guarantees.find(g => g.id === id);
}

export function getSLAsByPlan(plan: string): SLA[] {
  return slas.filter(sla => sla.plan === plan);
}

export function getAllGuarantees(): Guarantee[] {
  return guarantees;
}