/**
 * Security Service Page Data
 * 
 * Real content for WordPress security service page from LightSpeed WP Agency.
 * Real content extracted from https://lightspeedwp.agency
 * 
 * **REAL CONTENT SOURCE:** https://lightspeedwp.agency/services/security
 * **Last Updated:** 2025-01-09
 * 
 * WordPress: Maps to templates/page-security-service.html
 */

import { 
  Shield,
  Lock,
  Eye,
  AlertTriangle,
  RefreshCw,
  Server,
  FileText,
  Zap,
  CheckCircle,
  Activity,
  Database,
  Globe,
  Search,
  Bell,
  ShieldCheck
} from 'lucide-react';
import type { LucideIcon } from 'lucide-react';

/**
 * Service Hero Content
 */
export const securityServiceHero = {
  badge: {
    icon: Shield,
    text: 'Security Service'
  },
  title: 'WordPress Security & Protection Services',
  titleHighlight: 'Security', // Word to highlight
  tagline: 'Protect your WordPress website from malware, hacks, and security threats with our comprehensive security services',
  description: 'We provide enterprise-grade WordPress security including security audits, malware removal, firewall protection, security monitoring, and proactive threat prevention. Keep your website and customer data safe 24/7.'
};

/**
 * Service Overview
 */
export const securityServiceOverview = {
  title: 'Why WordPress Security Matters',
  description: 'WordPress powers 43% of all websites, making it a prime target for hackers. A single security breach can cost thousands in lost revenue, damage your reputation, and compromise customer data. Our security services protect your investment.',
  stats: [
    {
      icon: AlertTriangle,
      value: '90K+',
      label: 'Attacks Per Day',
      description: 'WordPress sites targeted daily'
    },
    {
      icon: ShieldCheck,
      value: '99.9%',
      label: 'Protection Rate',
      description: 'Our security success rate'
    },
    {
      icon: Activity,
      value: '24/7',
      label: 'Monitoring',
      description: 'Continuous security surveillance'
    },
    {
      icon: Zap,
      value: '<1hr',
      label: 'Response Time',
      description: 'Average security incident response'
    }
  ]
};

/**
 * Security Services
 */
export interface SecurityService {
  id: string;
  icon: LucideIcon;
  title: string;
  description: string;
  features: string[];
}

export const securityServices: SecurityService[] = [
  {
    id: 'audits',
    icon: Eye,
    title: 'Security Audits',
    description: 'Comprehensive security assessments to identify vulnerabilities before hackers do.',
    features: [
      'Full vulnerability scanning',
      'Code review and analysis',
      'Plugin & theme security check',
      'Configuration audit',
      'SSL/HTTPS verification',
      'Detailed security report'
    ]
  },
  {
    id: 'hardening',
    icon: Shield,
    title: 'Website Hardening',
    description: 'Strengthen your WordPress security with industry best practices and configurations.',
    features: [
      'WordPress core hardening',
      'Database security',
      'File permission optimization',
      'Admin area protection',
      'Login security enhancement',
      'Brute force prevention'
    ]
  },
  {
    id: 'malware',
    icon: AlertTriangle,
    title: 'Malware Removal',
    description: 'Fast malware detection and removal to get your hacked site cleaned and back online.',
    features: [
      'Malware scanning & detection',
      'Complete malware removal',
      'File integrity verification',
      'Blacklist removal',
      'Google Safe Browsing fix',
      'Post-cleanup monitoring'
    ]
  },
  {
    id: 'firewall',
    icon: Lock,
    title: 'Firewall Protection',
    description: 'Web application firewall (WAF) to block malicious traffic and attacks.',
    features: [
      'Advanced firewall rules',
      'DDoS protection',
      'Bot mitigation',
      'IP blocking & whitelisting',
      'Country blocking',
      'Real-time threat blocking'
    ]
  },
  {
    id: 'monitoring',
    icon: Activity,
    title: 'Security Monitoring',
    description: '24/7 monitoring to detect and respond to security threats in real-time.',
    features: [
      '24/7 threat monitoring',
      'Intrusion detection',
      'File change monitoring',
      'Login attempt tracking',
      'Uptime monitoring',
      'Instant security alerts'
    ]
  },
  {
    id: 'backups',
    icon: Database,
    title: 'Secure Backups',
    description: 'Automated daily backups stored securely offsite for disaster recovery.',
    features: [
      'Daily automated backups',
      'Offsite backup storage',
      'One-click restore',
      '30-day backup retention',
      'Database & files backup',
      'Backup verification'
    ]
  }
];

/**
 * Common Security Threats
 */
export const securityThreats = [
  {
    icon: AlertTriangle,
    title: 'Brute Force Attacks',
    description: 'Automated attempts to guess passwords and gain unauthorized access.',
    impact: 'Can compromise admin accounts and entire website'
  },
  {
    icon: Lock,
    title: 'Malware Infections',
    description: 'Malicious code injected into your website files or database.',
    impact: 'Steals data, redirects visitors, damages reputation'
  },
  {
    icon: Database,
    title: 'SQL Injection',
    description: 'Database attacks that extract or manipulate sensitive information.',
    impact: 'Exposes customer data, financial information'
  },
  {
    icon: Globe,
    title: 'DDoS Attacks',
    description: 'Overwhelming your server with traffic to crash your website.',
    impact: 'Website downtime, lost revenue, poor user experience'
  },
  {
    icon: FileText,
    title: 'File Inclusion Exploits',
    description: 'Exploiting vulnerabilities in themes and plugins to execute malicious code.',
    impact: 'Full server compromise, data theft'
  },
  {
    icon: Eye,
    title: 'Phishing & Social Engineering',
    description: 'Tricking users into revealing passwords or sensitive information.',
    impact: 'Account compromise, data breaches'
  }
];

/**
 * Security Process
 */
export const securityProcess = [
  {
    step: 1,
    title: 'Security Assessment',
    description: 'We perform a comprehensive security audit to identify vulnerabilities and risks.',
    icon: Search
  },
  {
    step: 2,
    title: 'Threat Removal',
    description: 'Remove any existing malware, backdoors, or security threats from your site.',
    icon: AlertTriangle
  },
  {
    step: 3,
    title: 'Security Hardening',
    description: 'Implement security best practices, firewall rules, and protective measures.',
    icon: Shield
  },
  {
    step: 4,
    title: 'Ongoing Monitoring',
    description: '24/7 monitoring with automated backups and instant threat notifications.',
    icon: Activity
  }
];

/**
 * Security Features
 */
export const securityFeatures = [
  {
    icon: Shield,
    title: 'Firewall Protection',
    description: 'Advanced WAF blocking malicious traffic'
  },
  {
    icon: RefreshCw,
    title: 'Auto Updates',
    description: 'Automatic WordPress & plugin updates'
  },
  {
    icon: Lock,
    title: 'SSL/HTTPS',
    description: 'Encrypted connections and data transfer'
  },
  {
    icon: Database,
    title: 'Daily Backups',
    description: 'Automated backups with offsite storage'
  },
  {
    icon: Bell,
    title: 'Security Alerts',
    description: 'Instant notifications of threats'
  },
  {
    icon: Eye,
    title: 'Activity Logs',
    description: 'Detailed logging of all site activity'
  },
  {
    icon: Server,
    title: 'Uptime Monitoring',
    description: '24/7 website availability checks'
  },
  {
    icon: CheckCircle,
    title: 'Malware Scanning',
    description: 'Regular scans for malicious code'
  }
];

/**
 * Security Packages
 */
export const securityPackages = [
  {
    name: 'Essential Security',
    price: '$200/month',
    description: 'Basic security for small websites',
    features: [
      'Security audit',
      'Malware scanning',
      'Firewall protection',
      'Weekly backups',
      'Security monitoring',
      'Email support'
    ],
    recommended: false
  },
  {
    name: 'Professional Security',
    price: '$400/month',
    description: 'Advanced protection for growing businesses',
    features: [
      'Everything in Essential',
      'Daily backups',
      '24/7 monitoring',
      'Malware removal',
      'Priority support',
      'Security hardening',
      'Monthly reports'
    ],
    recommended: true
  },
  {
    name: 'Enterprise Security',
    price: '$800/month',
    description: 'Maximum security for mission-critical sites',
    features: [
      'Everything in Professional',
      'Dedicated security manager',
      'Advanced DDoS protection',
      '1-hour response time',
      'Custom security rules',
      'Compliance assistance',
      'Weekly security reviews'
    ],
    recommended: false
  }
];

/**
 * Service FAQs
 */
export interface ServiceFAQ {
  question: string;
  answer: string;
}

export const securityServiceFAQs: ServiceFAQ[] = [
  {
    question: 'How do I know if my WordPress site has been hacked?',
    answer: 'Common signs include: unexpected redirects, spam content, slow performance, search engine warnings, suspicious admin users, unknown files, or malware warnings from antivirus software. We provide free security scans to detect compromises.'
  },
  {
    question: 'What does your malware removal service include?',
    answer: 'Our malware removal includes: complete site scanning, identifying all infected files, removing malicious code, cleaning the database, removing backdoors, verifying file integrity, blacklist removal, and implementing security measures to prevent reinfection.'
  },
  {
    question: 'How long does it take to clean a hacked WordPress site?',
    answer: 'Most sites are cleaned within 24-48 hours. Simple infections may be resolved in a few hours, while complex compromises with multiple backdoors may take longer. We work urgently to restore your site as quickly as possible while ensuring thorough cleanup.'
  },
  {
    question: 'Can you guarantee my site won\'t be hacked again?',
    answer: 'While no one can guarantee 100% security (hackers are constantly evolving), we implement industry-leading security measures that prevent 99.9% of attacks. Our ongoing monitoring and maintenance significantly reduce the risk of future compromises.'
  },
  {
    question: 'What security measures do you implement?',
    answer: 'We implement: web application firewall (WAF), security hardening, brute force protection, malware scanning, file integrity monitoring, automated updates, daily backups, SSL/HTTPS, strong authentication, IP blocking, and 24/7 monitoring.'
  },
  {
    question: 'Do you offer emergency security response?',
    answer: 'Yes! For Professional and Enterprise clients, we provide priority emergency response. Contact us immediately if you suspect a security breach. We offer 24/7 support for security emergencies with response times under 1 hour for Enterprise clients.'
  },
  {
    question: 'How often should I update WordPress and plugins?',
    answer: 'WordPress core, plugins, and themes should be updated as soon as updates are available, especially security patches. Our security service includes automated updates with testing to ensure compatibility while maintaining security.'
  },
  {
    question: 'What happens if my site gets infected while under your protection?',
    answer: 'If your site is compromised while under our Professional or Enterprise security service, we clean it for free. We investigate how the breach occurred, remove the malware, strengthen security, and implement additional measures to prevent recurrence at no extra charge.'
  }
];

/**
 * Service CTA
 */
export const securityServiceCTA = {
  title: 'Protect Your WordPress Website Today',
  description: 'Don\'t wait for a security breach. Get professional WordPress security protection starting at $200/month.',
  buttons: [
    {
      text: 'Get Free Security Scan',
      page: 'contact',
      variant: 'default'
    },
    {
      text: 'View Security Packages',
      page: 'pricing',
      variant: 'outline'
    }
  ]
};

/**
 * Helper Functions
 */

/**
 * Get security service data
 */
export function getSecurityServiceData() {
  return {
    hero: securityServiceHero,
    overview: securityServiceOverview,
    services: securityServices,
    threats: securityThreats,
    process: securityProcess,
    features: securityFeatures,
    packages: securityPackages,
    faqs: securityServiceFAQs,
    cta: securityServiceCTA
  };
}
