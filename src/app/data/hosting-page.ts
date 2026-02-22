/**
 * Hosting Page Data — "Neon Server Lab" Funky Redesign
 *
 * Comprehensive mock data for every section of the hosting page.
 * All content lives here so the template stays pure presentation.
 *
 * Sections:
 *  0. Breadcrumbs
 *  1. Hero
 *  2. Performance Stats (animated counters)
 *  3. Plans (3 tiers)
 *  4. Tech Stack / Features (6 cards)
 *  5. Why Choose Us (4 benefits)
 *  6. Migration Steps (process)
 *  7. Guarantees (trust signals)
 *  8. Testimonials (2 quotes)
 *  9. CTA
 *
 * @see /src/app/components/templates/HostingTemplate.tsx
 * @see /src/styles/templates/page-service-hosting.css
 */

import {
  Server, Shield, Zap, Globe, Database, Clock,
  Headphones, RefreshCw, Award, CheckCircle,
  Cpu, Wifi, HardDrive, Lock, BarChart3, Rocket,
  ArrowRight, Activity, Eye, Gauge
} from 'lucide-react';

/* ─────────────────────────────────────────────
 * 0. Breadcrumbs
 * ───────────────────────────────────────────── */
export const hostingBreadcrumbs = [
  { label: 'Home', href: '/' },
  { label: 'Services', href: '/services' },
  { label: 'Hosting' }
];

/* ─────────────────────────────────────────────
 * 1. Hero
 * ───────────────────────────────────────────── */
export const hostingPageHero = {
  badge: { text: 'Next-gen infrastructure', icon: Server },
  title: 'High-velocity WordPress hosting',
  description:
    'Enterprise-grade servers tuned for WordPress. Sub-second load times, ironclad security, and 24/7 expert support — so you can focus on growing your business.',
  primaryButton: { text: 'View plans', page: 'pricing' },
  secondaryButton: { text: 'Talk to sales', page: 'contact' }
};

/* ─────────────────────────────────────────────
 * 2. Performance Stats
 * ───────────────────────────────────────────── */
export const hostingStats = [
  { value: '99.99%', label: 'Uptime SLA', icon: Activity },
  { value: '<200ms', label: 'Avg. TTFB', icon: Gauge },
  { value: '200+', label: 'Edge locations', icon: Globe },
  { value: '24/7', label: 'Expert support', icon: Headphones }
];

/* ─────────────────────────────────────────────
 * 3. Hosting Plans
 * ───────────────────────────────────────────── */
export const hostingPlans = [
  {
    id: 'starter',
    name: 'Starter',
    icon: Server,
    tagline: 'For small business websites and blogs',
    price: { display: '$49', period: '/mo' },
    description:
      'Everything you need to launch and maintain a professional WordPress site with expert support.',
    popular: false,
    specifications: {
      sites: '1 WordPress install',
      storage: '25 GB NVMe SSD',
      visits: '50k monthly visits',
      ssl: 'Free SSL certificate'
    },
    features: [
      { name: 'Daily backups', included: true },
      { name: '24/7 support', included: true },
      { name: 'Free migration', included: true },
      { name: 'CDN included', included: true },
      { name: 'Staging environment', included: false },
      { name: 'Malware scanning', included: false },
      { name: 'Priority support', included: false },
      { name: 'White-label reports', included: false }
    ],
    cta: { text: 'Get started', page: 'contact' }
  },
  {
    id: 'pro',
    name: 'Pro',
    icon: Zap,
    tagline: 'For growing businesses and e-commerce',
    price: { display: '$99', period: '/mo' },
    description:
      'Advanced performance and security features for sites that demand speed and reliability.',
    popular: true,
    specifications: {
      sites: '5 WordPress installs',
      storage: '50 GB NVMe SSD',
      visits: '200k monthly visits',
      ssl: 'Free SSL & CDN'
    },
    features: [
      { name: 'Real-time backups', included: true },
      { name: 'Priority support', included: true },
      { name: 'Free migration', included: true },
      { name: 'CDN included', included: true },
      { name: 'Staging environment', included: true },
      { name: 'Malware scanning', included: true },
      { name: 'Dedicated account manager', included: false },
      { name: 'White-label reports', included: false }
    ],
    cta: { text: 'Get started', page: 'contact' }
  },
  {
    id: 'agency',
    name: 'Agency',
    icon: Globe,
    tagline: 'For agencies and high-traffic sites',
    price: { display: '$299', period: '/mo' },
    description:
      'Enterprise-grade hosting with unlimited installs, staging environments, and a dedicated account manager.',
    popular: false,
    specifications: {
      sites: 'Unlimited installs',
      storage: '200 GB NVMe SSD',
      visits: '1M+ monthly visits',
      ssl: 'Advanced security suite'
    },
    features: [
      { name: 'Real-time backups', included: true },
      { name: 'Priority support', included: true },
      { name: 'Free migration', included: true },
      { name: 'CDN included', included: true },
      { name: 'Staging environment', included: true },
      { name: 'Malware scanning', included: true },
      { name: 'Dedicated account manager', included: true },
      { name: 'White-label reports', included: true }
    ],
    cta: { text: 'Contact sales', page: 'contact' }
  }
];

/* ─────────────────────────────────────────────
 * 4. Premium Features (Tech Stack)
 * ───────────────────────────────────────────── */
export const hostingFeatures = [
  {
    icon: Zap,
    title: 'Blazing fast speed',
    description:
      'Optimized server stack with Nginx, PHP 8.3, and Redis object caching for sub-second page loads.'
  },
  {
    icon: Shield,
    title: 'Ironclad security',
    description:
      'Proactive WAF, brute-force protection, DDoS mitigation, and free malware removal if anything slips through.'
  },
  {
    icon: Clock,
    title: '99.99% uptime SLA',
    description:
      'Redundant infrastructure across multiple data centres with automated failover — your site never sleeps.'
  },
  {
    icon: Database,
    title: 'Automated backups',
    description:
      'Daily backups retained for 30 days with one-click restore. Real-time backups available on Pro and Agency plans.'
  },
  {
    icon: Headphones,
    title: 'Expert WordPress support',
    description:
      'Our team of WordPress engineers is available 24/7 via chat, phone, and ticket to resolve any issue.'
  },
  {
    icon: RefreshCw,
    title: 'Free site migration',
    description:
      'We handle the entire migration process with zero downtime — switch to us completely risk-free.'
  }
];

/* ─────────────────────────────────────────────
 * 5. Why Choose Us (Benefits)
 * ───────────────────────────────────────────── */
export const whyChooseHosting = {
  title: 'Why choose LSX Design hosting?',
  description:
    "We're not just another hosting provider — we're WordPress specialists who understand your site inside and out.",
  benefits: [
    {
      icon: Cpu,
      title: 'WordPress-optimised infrastructure',
      description:
        'Our servers are tuned from the ground up for WordPress, delivering 3x faster load times than generic hosting.'
    },
    {
      icon: Eye,
      title: 'Proactive monitoring',
      description:
        'We monitor your site 24/7 and fix issues before they affect your visitors or search rankings.'
    },
    {
      icon: HardDrive,
      title: 'Developer-friendly tools',
      description:
        'SSH access, WP-CLI, Git integration, and staging environments for streamlined development workflows.'
    },
    {
      icon: BarChart3,
      title: 'Scalable architecture',
      description:
        'Seamlessly handle traffic spikes with auto-scaling resources — no manual upgrades needed.'
    }
  ]
};

/* ─────────────────────────────────────────────
 * 6. Migration Steps
 * ───────────────────────────────────────────── */
export const hostingMigrationSteps = [
  {
    step: 1,
    title: 'Request migration',
    description: 'Fill in one form and our team takes over. No technical knowledge required.'
  },
  {
    step: 2,
    title: 'We clone your site',
    description: 'Our engineers create a perfect copy on our infrastructure for testing.'
  },
  {
    step: 3,
    title: 'Review & approve',
    description: 'You review the clone on a staging URL. We fix any edge cases before going live.'
  },
  {
    step: 4,
    title: 'Go live',
    description: 'DNS switch with zero downtime. We monitor for 72 hours post-launch.'
  }
];

/* ─────────────────────────────────────────────
 * 7. Guarantees (Trust Signals)
 * ───────────────────────────────────────────── */
export const hostingGuarantees = {
  title: 'Our guarantees',
  guarantees: [
    {
      icon: CheckCircle,
      title: '30-day money back',
      description:
        'Not satisfied? Get a full refund within your first 30 days — no questions asked.'
    },
    {
      icon: Clock,
      title: '99.99% uptime SLA',
      description:
        'We guarantee 99.99% uptime backed by our service level agreement with credits for any downtime.'
    },
    {
      icon: Award,
      title: 'Free migration',
      description:
        'Our experts handle your migration with zero downtime — we make the switch effortless.'
    },
    {
      icon: Lock,
      title: 'Hack-free guarantee',
      description:
        'If your site gets hacked on our watch, we fix it for free and implement additional security.'
    }
  ]
};

/* ─────────────────────────────────────────────
 * 8. Testimonials
 * ───────────────────────────────────────────── */
export const hostingTestimonials = [
  {
    quote:
      "Switching to LSX Design hosting cut our page load time in half. The support team resolved a complex caching issue within 20 minutes — on a Sunday.",
    author: 'Sarah Mitchell',
    role: 'CTO, TravelStack',
    avatar: 'SM'
  },
  {
    quote:
      "We migrated 12 WooCommerce stores with zero downtime. Their staging environments alone save us hours every week.",
    author: 'James Okonkwo',
    role: 'Lead Developer, Pixel Agency',
    avatar: 'JO'
  }
];

/* ─────────────────────────────────────────────
 * 9. CTA
 * ───────────────────────────────────────────── */
export const hostingCTA = {
  title: 'Speed up your website today',
  description:
    'Switch to a hosting provider that cares about your performance, security, and growth.',
  buttons: [
    { text: 'Get started', page: 'contact' },
    { text: 'Compare plans', page: 'pricing' }
  ]
};

/* ─────────────────────────────────────────────
 * 10. Tech Spec Strip (Hero sub-icons)
 * ───────────────────────────────────────────── */
export const hostingTechSpecs = [
  { icon: Cpu, label: 'NVMe SSD' },
  { icon: Globe, label: 'Global CDN' },
  { icon: Shield, label: 'WAF Pro' },
  { icon: Wifi, label: '10 Gbps' }
];

/* ─────────────────────────────────────────────
 * Legacy re-exports (backward compat)
 * ───────────────────────────────────────────── */
export const hostingPageFAQs = [
  {
    question: 'Do you offer free migrations?',
    answer:
      'Yes, we will migrate your WordPress site from your current host for free with zero downtime.'
  },
  {
    question: 'Is email hosting included?',
    answer:
      'Our hosting focuses on your website. We recommend Google Workspace or Outlook for email, and we can help you set it up.'
  },
  {
    question: 'Can I use my own domain?',
    answer: 'Absolutely. You can point any domain you own to our servers.'
  }
];
