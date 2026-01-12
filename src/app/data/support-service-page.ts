/**
 * Support Service Page Data
 * 
 * Real content for WordPress support & maintenance service page from LightSpeed WP Agency.
 * Real content extracted from https://lightspeedwp.agency
 * 
 * **REAL CONTENT SOURCE:** https://lightspeedwp.agency/services/support
 * **Last Updated:** 2025-01-09
 * 
 * WordPress: Maps to templates/page-support-service.html
 */

import { 
  Wrench,
  RefreshCw,
  Shield,
  Bug,
  Zap,
  FileText,
  Activity,
  Clock,
  MessageCircle,
  CheckCircle,
  AlertTriangle,
  Database,
  Server,
  Globe,
  Settings,
  HeadphonesIcon
} from 'lucide-react';
import type { LucideIcon } from 'lucide-react';

/**
 * Service Hero Content
 */
export const supportServiceHero = {
  badge: {
    icon: Wrench,
    text: 'Support & Maintenance'
  },
  title: 'WordPress Support & Maintenance Services',
  titleHighlight: 'Support', // Word to highlight
  tagline: 'Professional WordPress support and ongoing maintenance to keep your website running smoothly 24/7',
  description: 'We provide comprehensive WordPress support including updates, security monitoring, performance optimization, backups, bug fixes, and technical assistance. Focus on your business while we handle your website maintenance.'
};

/**
 * Service Overview
 */
export const supportServiceOverview = {
  title: 'Why Choose Our WordPress Support?',
  description: 'Your website needs ongoing care to stay fast, secure, and up-to-date. Our WordPress support services provide peace of mind with proactive maintenance, security monitoring, and expert technical support whenever you need it.',
  stats: [
    {
      icon: Clock,
      value: '<1hr',
      label: 'Average Response',
      description: 'Fast support when you need it'
    },
    {
      icon: CheckCircle,
      value: '99.9%',
      label: 'Uptime Rate',
      description: 'Reliable website availability'
    },
    {
      icon: Activity,
      value: '24/7',
      label: 'Monitoring',
      description: 'Continuous site surveillance'
    },
    {
      icon: Zap,
      value: '500+',
      label: 'Sites Supported',
      description: 'WordPress sites under our care'
    }
  ]
};

/**
 * Support Services
 */
export interface SupportService {
  id: string;
  icon: LucideIcon;
  title: string;
  description: string;
  features: string[];
}

export const supportServices: SupportService[] = [
  {
    id: 'updates',
    icon: RefreshCw,
    title: 'WordPress Updates',
    description: 'Regular updates to WordPress core, plugins, and themes to keep your site secure and compatible.',
    features: [
      'WordPress core updates',
      'Plugin updates & testing',
      'Theme updates',
      'Compatibility testing',
      'Update rollback if needed',
      'Update documentation'
    ]
  },
  {
    id: 'security',
    icon: Shield,
    title: 'Security Monitoring',
    description: '24/7 security monitoring to detect and prevent threats before they impact your website.',
    features: [
      'Real-time threat monitoring',
      'Malware scanning',
      'Intrusion detection',
      'Security hardening',
      'Firewall management',
      'Security reports'
    ]
  },
  {
    id: 'backups',
    icon: Database,
    title: 'Daily Backups',
    description: 'Automated daily backups stored securely offsite with easy restoration when needed.',
    features: [
      'Daily automated backups',
      'Offsite backup storage',
      'One-click restore',
      '30-day backup retention',
      'Database & files backup',
      'Backup verification'
    ]
  },
  {
    id: 'performance',
    icon: Zap,
    title: 'Performance Optimization',
    description: 'Ongoing performance monitoring and optimization to keep your site fast and efficient.',
    features: [
      'Performance monitoring',
      'Speed optimization',
      'Image optimization',
      'Caching configuration',
      'Database optimization',
      'CDN integration'
    ]
  },
  {
    id: 'bugfixes',
    icon: Bug,
    title: 'Bug Fixes & Troubleshooting',
    description: 'Quick resolution of technical issues, bugs, and broken functionality.',
    features: [
      'Bug investigation',
      'Code debugging',
      'Functionality fixes',
      'CSS/design fixes',
      'Plugin conflicts',
      'Error resolution'
    ]
  },
  {
    id: 'support',
    icon: HeadphonesIcon,
    title: 'Technical Support',
    description: 'Expert technical assistance via email, chat, or phone for all WordPress issues.',
    features: [
      'Email support',
      'Live chat support',
      'Phone support (Pro+)',
      'WordPress training',
      'Content management help',
      'Priority response'
    ]
  }
];

/**
 * Support Plans
 */
export const supportPlans = [
  {
    name: 'Essential Support',
    price: '$200/month',
    description: 'Basic support for small websites',
    features: [
      'WordPress updates',
      'Weekly backups',
      'Security monitoring',
      'Performance monitoring',
      'Bug fixes (2 hours/mo)',
      'Email support',
      '24-hour response time'
    ],
    recommended: false
  },
  {
    name: 'Professional Support',
    price: '$400/month',
    description: 'Complete support for growing businesses',
    features: [
      'Everything in Essential',
      'Daily backups',
      'Priority security',
      'Performance optimization',
      'Bug fixes (5 hours/mo)',
      'Live chat support',
      '4-hour response time',
      'Monthly reports'
    ],
    recommended: true
  },
  {
    name: 'Enterprise Support',
    price: '$800/month',
    description: 'Premium support for mission-critical sites',
    features: [
      'Everything in Professional',
      'Dedicated support manager',
      'Bug fixes (10 hours/mo)',
      'Phone support',
      '1-hour response time',
      'Custom development',
      'Proactive monitoring',
      'Weekly status calls'
    ],
    recommended: false
  }
];

/**
 * What's Included
 */
export const supportIncludes = [
  {
    icon: RefreshCw,
    title: 'Regular Updates',
    description: 'WordPress core, plugin, and theme updates with testing'
  },
  {
    icon: Shield,
    title: 'Security Monitoring',
    description: '24/7 threat detection and prevention'
  },
  {
    icon: Database,
    title: 'Daily Backups',
    description: 'Automated backups with offsite storage'
  },
  {
    icon: Activity,
    title: 'Uptime Monitoring',
    description: 'Continuous website availability checks'
  },
  {
    icon: Zap,
    title: 'Performance Optimization',
    description: 'Speed and efficiency improvements'
  },
  {
    icon: Bug,
    title: 'Bug Fixes',
    description: 'Quick resolution of technical issues'
  },
  {
    icon: FileText,
    title: 'Monthly Reports',
    description: 'Detailed maintenance and activity reports'
  },
  {
    icon: MessageCircle,
    title: 'Priority Support',
    description: 'Fast response times from WordPress experts'
  }
];

/**
 * Support Process
 */
export const supportProcess = [
  {
    step: 1,
    title: 'Submit Request',
    description: 'Submit support requests via email, chat, or phone based on your plan.',
    icon: MessageCircle
  },
  {
    step: 2,
    title: 'Ticket Assignment',
    description: 'Your request is assigned to a WordPress expert within your response time SLA.',
    icon: Settings
  },
  {
    step: 3,
    title: 'Issue Resolution',
    description: 'We investigate, fix the issue, and test thoroughly before deployment.',
    icon: Wrench
  },
  {
    step: 4,
    title: 'Follow-Up',
    description: 'We confirm resolution and provide documentation of changes made.',
    icon: CheckCircle
  }
];

/**
 * Common Support Issues
 */
export const commonIssues = [
  {
    issue: 'WordPress Updates',
    solution: 'We handle all WordPress, plugin, and theme updates with compatibility testing'
  },
  {
    issue: 'Website Downtime',
    solution: '24/7 monitoring with immediate response to restore your site quickly'
  },
  {
    issue: 'Security Threats',
    solution: 'Proactive security monitoring and immediate threat removal'
  },
  {
    issue: 'Performance Issues',
    solution: 'Performance audits and optimization to improve site speed'
  },
  {
    issue: 'Plugin Conflicts',
    solution: 'Debug and resolve conflicts between plugins or themes'
  },
  {
    issue: 'Broken Functionality',
    solution: 'Fix bugs, broken features, and CSS/design issues'
  },
  {
    issue: 'Content Management',
    solution: 'Help with adding, editing, or organizing website content'
  },
  {
    issue: 'Email Issues',
    solution: 'Troubleshoot and fix WordPress email delivery problems'
  }
];

/**
 * Why Choose Us
 */
export const whyChooseUs = [
  {
    icon: Zap,
    title: 'Fast Response Times',
    description: 'Response within 1-24 hours based on your support plan, with critical issue prioritization.'
  },
  {
    icon: CheckCircle,
    title: 'WordPress Experts',
    description: '10+ years WordPress experience with expertise in development, security, and performance.'
  },
  {
    icon: Shield,
    title: 'Proactive Monitoring',
    description: 'We catch issues before they become problems with 24/7 monitoring and alerts.'
  },
  {
    icon: Activity,
    title: 'Transparent Reporting',
    description: 'Monthly reports showing all updates, fixes, and improvements made to your site.'
  },
  {
    icon: HeadphonesIcon,
    title: 'Friendly Support',
    description: 'Clear communication without technical jargon - we explain everything in plain English.'
  },
  {
    icon: Globe,
    title: 'No Long-Term Contracts',
    description: 'Month-to-month plans with no lock-in. Cancel anytime with 30-day notice.'
  }
];

/**
 * Service FAQs
 */
export interface ServiceFAQ {
  question: string;
  answer: string;
}

export const supportServiceFAQs: ServiceFAQ[] = [
  {
    question: 'What is included in WordPress support?',
    answer: 'Our WordPress support includes: regular updates (WordPress core, plugins, themes), security monitoring, daily backups, performance optimization, bug fixes, technical support, uptime monitoring, and monthly reports. The number of support hours varies by plan.'
  },
  {
    question: 'How quickly will you respond to support requests?',
    answer: 'Response times depend on your plan: Essential (24 hours), Professional (4 hours), Enterprise (1 hour). Critical issues like site downtime receive immediate priority response regardless of plan. We also offer emergency support for urgent situations.'
  },
  {
    question: 'What if I need more support hours than my plan includes?',
    answer: 'Additional support hours can be purchased at $150/hour for Essential and Professional plans, or $125/hour for Enterprise clients. We\'ll always notify you if a task will exceed your included hours before proceeding with the work.'
  },
  {
    question: 'Do you offer emergency support?',
    answer: 'Yes! Professional and Enterprise plans include priority emergency support. We provide immediate response for critical issues like site downtime, security breaches, or major functionality problems. Contact us 24/7 for emergencies.'
  },
  {
    question: 'Can you help with content updates?',
    answer: 'Yes! We can help with content management tasks like adding/editing pages, updating text and images, managing posts, and organizing content. Content updates are included in your support hours. We can also provide training so you can manage content yourself.'
  },
  {
    question: 'What happens if my site gets hacked?',
    answer: 'If your site is compromised while under our Professional or Enterprise support, we\'ll clean it immediately at no extra charge. We\'ll remove malware, close security gaps, and implement additional protections. Most cleanups are completed within 24 hours.'
  },
  {
    question: 'Do you provide website hosting?',
    answer: 'Yes! We offer managed WordPress hosting optimized for performance and security. Our hosting includes automatic backups, security monitoring, and is fully integrated with our support services. Ask about our hosting plans when you sign up for support.'
  },
  {
    question: 'Can I cancel my support plan?',
    answer: 'Yes, all plans are month-to-month with no long-term contracts. You can cancel anytime with 30 days notice. We believe in earning your business every month with excellent service, not locking you into contracts.'
  }
];

/**
 * Service CTA
 */
export const supportServiceCTA = {
  title: 'Get Peace of Mind with Professional WordPress Support',
  description: 'Let us handle your WordPress maintenance while you focus on growing your business. Plans starting at $200/month.',
  buttons: [
    {
      text: 'Get Started Today',
      page: 'contact',
      variant: 'default'
    },
    {
      text: 'View Support Plans',
      page: 'pricing',
      variant: 'outline'
    }
  ]
};

/**
 * Helper Functions
 */

/**
 * Get support service data
 */
export function getSupportServiceData() {
  return {
    hero: supportServiceHero,
    overview: supportServiceOverview,
    services: supportServices,
    plans: supportPlans,
    includes: supportIncludes,
    process: supportProcess,
    issues: commonIssues,
    whyChooseUs: whyChooseUs,
    faqs: supportServiceFAQs,
    cta: supportServiceCTA
  };
}
