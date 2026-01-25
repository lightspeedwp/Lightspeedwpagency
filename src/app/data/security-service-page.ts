/**
 * Security Service Page Data
 * 
 * Complete data for Security & Compliance service page.
 * Includes hero, benefits, features, process, standards, packages, FAQs, and CTA.
 */

import {
  Shield,
  Lock,
  Eye,
  AlertTriangle,
  CheckCircle2,
  FileText,
  Users,
  TrendingUp,
  Zap,
  Search
} from 'lucide-react';

/**
 * Hero Section
 */
export const securityHero = {
  badge: {
    icon: Shield,
    text: 'Security Services'
  },
  title: 'Enterprise-Grade',
  titleHighlight: 'Security',
  description: 'Protect your WordPress website with comprehensive security services. From vulnerability scanning to 24/7 monitoring, we keep your site safe from threats while ensuring compliance with industry standards.',
  cta: {
    primary: { text: 'Get Security Audit', page: 'contact' as const },
    secondary: { text: 'View Packages', page: 'contact' as const }
  }
};

/**
 * Why Security Matters
 */
export const whySecurityMatters = {
  title: 'Why WordPress Security is Critical',
  description: 'Don\'t wait for a breach to take security seriously',
  benefits: [
    {
      icon: Shield,
      title: 'Protect Your Data',
      description: 'Safeguard customer information, business data, and intellectual property from unauthorized access and cyber threats.'
    },
    {
      icon: Users,
      title: 'Build Trust',
      description: 'Demonstrate commitment to security with SSL certificates, privacy compliance, and visible security measures that reassure customers.'
    },
    {
      icon: FileText,
      title: 'Maintain Compliance',
      description: 'Meet GDPR, PCI DSS, HIPAA, and other regulatory requirements to avoid fines and legal issues.'
    },
    {
      icon: TrendingUp,
      title: 'Prevent Downtime',
      description: 'Avoid costly website downtime, revenue loss, and reputation damage from security incidents and malware infections.'
    }
  ]
};

/**
 * Security Services Features
 */
export const securityServices = [
  {
    icon: Search,
    title: 'Vulnerability Scanning',
    description: 'Continuous automated scanning for security vulnerabilities, outdated plugins, and potential threats.'
  },
  {
    icon: AlertTriangle,
    title: 'Malware Detection & Removal',
    description: 'Advanced malware scanning with immediate removal service and cleanup of infected files.'
  },
  {
    icon: Shield,
    title: 'Firewall Configuration',
    description: 'Web application firewall (WAF) setup to block malicious traffic and protect against common attacks.'
  },
  {
    icon: Lock,
    title: 'SSL & Encryption',
    description: 'SSL certificate installation and configuration for secure HTTPS connections and data encryption.'
  },
  {
    icon: Eye,
    title: 'Security Audits',
    description: 'Comprehensive security assessments identifying vulnerabilities and providing detailed remediation plans.'
  },
  {
    icon: Zap,
    title: '24/7 Monitoring',
    description: 'Real-time security monitoring with instant alerts for suspicious activity and automated threat response.'
  }
];

/**
 * Security Process Steps
 */
export const securityProcess = [
  {
    step: 1,
    title: 'Security Assessment',
    description: 'Comprehensive audit of your current security posture: vulnerability scan, plugin review, access control analysis, and compliance check.'
  },
  {
    step: 2,
    title: 'Hardening & Protection',
    description: 'Implement core security measures: firewall setup, SSL configuration, secure authentication, file permissions, and database security.'
  },
  {
    step: 3,
    title: 'Continuous Monitoring',
    description: 'Deploy 24/7 monitoring systems: intrusion detection, uptime monitoring, malware scanning, and automated backup verification.'
  },
  {
    step: 4,
    title: 'Incident Response',
    description: 'Rapid response protocol for security incidents: threat containment, malware removal, vulnerability patching, and recovery procedures.'
  },
  {
    step: 5,
    title: 'Ongoing Maintenance',
    description: 'Regular security updates: WordPress core updates, plugin updates, security patches, and quarterly security audits.'
  }
];

/**
 * Security Standards
 */
export const securityStandards = {
  title: 'Industry-Leading Security Standards',
  description: 'We follow and help you achieve compliance with major security frameworks',
  standards: [
    { 
      name: 'OWASP Top 10',
      description: 'Protection against the most critical web application security risks'
    },
    { 
      name: 'PCI DSS',
      description: 'Payment card industry data security standards compliance'
    },
    { 
      name: 'GDPR',
      description: 'European data protection and privacy requirements'
    },
    { 
      name: 'WCAG 2.1 AA',
      description: 'Web Content Accessibility Guidelines for inclusive design'
    },
    { 
      name: 'ISO 27001',
      description: 'Information security management best practices'
    },
    { 
      name: 'SOC 2',
      description: 'Service organization controls for trust services criteria'
    }
  ]
};

/**
 * Security Packages
 */
export const securityPackages = [
  {
    name: 'Essential Security',
    tagline: 'Core protection for small websites',
    price: {
      amount: 500,
      display: '$500',
      period: '/month'
    },
    description: 'Basic security essentials for WordPress websites with standard protection needs.',
    features: [
      'SSL certificate & HTTPS setup',
      'Weekly malware scanning',
      'Basic firewall configuration',
      'Monthly security updates',
      'Automated daily backups',
      'Email support (48hr response)',
      'Security monitoring dashboard'
    ],
    cta: { text: 'Get Started', page: 'contact' as const },
    popular: false
  },
  {
    name: 'Professional Security',
    tagline: 'Advanced protection for business sites',
    price: {
      amount: 1200,
      display: '$1,200',
      period: '/month'
    },
    description: 'Comprehensive security for business websites with enhanced monitoring and support.',
    features: [
      'Everything in Essential, plus:',
      'Daily malware scanning',
      'Advanced WAF with custom rules',
      'Weekly security audits',
      'Two-factor authentication setup',
      'Security incident response',
      'Priority support (24hr response)',
      'Quarterly penetration testing',
      'Compliance reporting'
    ],
    cta: { text: 'Get Started', page: 'contact' as const },
    popular: true
  },
  {
    name: 'Enterprise Security',
    tagline: 'Maximum protection & compliance',
    price: {
      amount: 0,
      display: 'Custom',
      period: ''
    },
    description: 'Full-scale security for enterprise websites with dedicated support and compliance.',
    features: [
      'Everything in Professional, plus:',
      'Real-time malware detection',
      'Custom security architecture',
      'Dedicated security engineer',
      'PCI DSS compliance support',
      'GDPR compliance assistance',
      'DDoS protection & mitigation',
      '24/7 emergency support',
      'Monthly compliance audits',
      'Security training for team'
    ],
    cta: { text: 'Contact Sales', page: 'contact' as const },
    popular: false
  }
];

/**
 * FAQs
 */
export const securityFAQs = [
  {
    question: 'How often should I update WordPress for security?',
    answer: 'WordPress core, plugins, and themes should be updated as soon as security patches are released. We recommend enabling automatic updates for minor releases and testing major updates on staging before deploying to production. Our security packages include managed updates with testing.'
  },
  {
    question: 'What happens if my site gets hacked?',
    answer: 'If you have our security service, we\'ll receive immediate alerts and begin containment and removal within hours. We\'ll identify the vulnerability, remove malware, restore clean backups if needed, patch security holes, and implement measures to prevent future attacks.'
  },
  {
    question: 'Do I need a security service if I use good hosting?',
    answer: 'Yes. While good hosting provides infrastructure security, your WordPress application layer needs separate protection. This includes plugin vulnerabilities, theme issues, authentication security, and application-specific threats that hosting can\'t address.'
  },
  {
    question: 'Can you help with GDPR and PCI compliance?',
    answer: 'Yes. Our Professional and Enterprise packages include compliance assistance. We implement technical requirements (encryption, data protection, access controls) and provide documentation. For legal compliance questions, we recommend consulting with a compliance attorney.'
  },
  {
    question: 'How do I know if my site is already compromised?',
    answer: 'Warning signs include unexpected redirects, spam content appearing on your site, slow performance, Google blacklist warnings, or unknown administrator accounts. We offer free security scans to check for known malware and vulnerabilities.'
  },
  {
    question: 'What\'s included in a security audit?',
    answer: 'Our comprehensive audit includes: vulnerability scanning, malware detection, plugin/theme security review, access control analysis, server configuration check, SSL/HTTPS verification, database security assessment, and a detailed report with prioritized recommendations.'
  }
];

/**
 * CTA Section
 */
export const securityCTA = {
  title: 'Protect Your Website Today',
  description: 'Don\'t wait for a security breach. Get a free security assessment and learn how we can protect your WordPress website from threats.',
  buttons: [
    { text: 'Get Free Security Scan', page: 'contact' as const },
    { text: 'Compare Packages', page: 'contact' as const }
  ]
};
