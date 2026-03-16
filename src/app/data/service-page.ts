/**
 * Single Service Page Data
 * 
 * Default/fallback content for the generic service detail template.
 * Used by ServiceDetailLowerSections.tsx when no service-specific data is provided.
 * 
 * **REAL CONTENT SOURCE:** https://lightspeedwp.agency/services/wordpress-development
 * **Last Updated:** 2026-03-16
 * 
 * WordPress: Maps to templates/page-service-detail.html
 */

import { 
  Code, 
  Layout, 
  GridFour,
  Package,
  Palette,
  Lightning,
  CheckCircle,
  ArrowRight,
  Users,
  Trophy,
  Clock,
  Crosshair
} from '@phosphor-icons/react';
import type { UniversalIcon } from '../utils/icon-map';

// ============================================
// HERO
// ============================================

export const servicePageHero = {
  title: 'Expert WordPress development',
  badge: {
    icon: 'Code' as UniversalIcon,
    text: 'Development Service',
  },
  tagline:
    'Custom WordPress development that delivers scalable, high-performance solutions built on modern best practices.',
  description:
    'We build custom WordPress themes, plugins, and integrations using modern development practices including Full Site Editing, block patterns, and headless architecture. Our code is clean, maintainable, and optimised for performance and security.',
};

// ============================================
// OVERVIEW
// ============================================

export const servicePageOverview = {
  title: 'Why professional WordPress development matters',
  description:
    'Custom development gives you complete control over functionality, design, and user experience. Unlike off-the-shelf themes, custom solutions are tailored to your exact needs, optimised for performance, and built to scale.',
  stats: [
    {
      icon: 'Lightning' as UniversalIcon,
      number: '2.5x',
      label: 'Faster Than Page Builders',
      description: 'Custom code outperforms drag-and-drop page builders.',
    },
    {
      icon: 'Shield' as UniversalIcon,
      number: '99.9%',
      label: 'Secure Code Standards',
      description: 'Enterprise-grade security from the first line of code.',
    },
    {
      icon: 'Rocket' as UniversalIcon,
      number: '10x',
      label: 'Better Scalability',
      description: 'Architecture designed to grow with your business.',
    },
    {
      icon: 'Code' as UniversalIcon,
      number: '100%',
      label: 'Custom Tailored',
      description: 'Every line of code built for your requirements.',
    },
  ],
};

// ============================================
// FEATURES
// ============================================

export const servicePageFeatures: {
  icon: UniversalIcon;
  title: string;
  description: string;
  features?: string[];
}[] = [
  {
    icon: 'Layout' as UniversalIcon,
    title: 'Block theme development',
    description:
      'Full Site Editing themes with theme.json, block patterns, and template parts for maximum editorial flexibility.',
    features: ['theme.json configuration', 'Custom block patterns', 'Template parts'],
  },
  {
    icon: 'Code' as UniversalIcon,
    title: 'Custom plugin development',
    description:
      'Bespoke plugins that extend WordPress core with clean, maintainable, and well-documented code.',
    features: ['REST API endpoints', 'Custom post types', 'Admin interfaces'],
  },
  {
    icon: 'GridFour' as UniversalIcon,
    title: 'Design system integration',
    description:
      'Component libraries and design tokens translated into WordPress block patterns and global styles.',
    features: ['Token system setup', 'Pattern library', 'Style variations'],
  },
  {
    icon: 'Lightning' as UniversalIcon,
    title: 'Performance engineering',
    description:
      'Optimised asset delivery, database queries, and rendering for sub-2-second page loads.',
    features: ['Core Web Vitals', 'Asset optimisation', 'Caching strategy'],
  },
  {
    icon: 'Package' as UniversalIcon,
    title: 'API & integration',
    description:
      'Seamless connections with third-party services, payment gateways, CRMs, and marketing platforms.',
    features: ['REST & GraphQL APIs', 'Webhook handlers', 'Data sync'],
  },
  {
    icon: 'Palette' as UniversalIcon,
    title: 'Accessibility compliance',
    description:
      'WCAG 2.1 AA compliant builds with semantic HTML, ARIA attributes, and keyboard navigation.',
    features: ['Screen reader support', 'Focus management', 'Colour contrast'],
  },
];

// ============================================
// PROCESS STEPS
// ============================================

export const servicePageProcess = [
  {
    number: '01',
    title: 'Discovery & scoping',
    duration: '1–2 weeks',
    description:
      'We analyse your goals, audience, and existing assets to define clear project requirements and success metrics.',
  },
  {
    number: '02',
    title: 'Architecture & design',
    duration: '2–3 weeks',
    description:
      'Information architecture, wireframes, and high-fidelity designs built on your brand guidelines and design tokens.',
  },
  {
    number: '03',
    title: 'Development & integration',
    duration: '3–6 weeks',
    description:
      'Custom WordPress theme and plugin development using Full Site Editing, block patterns, and modern best practices.',
  },
  {
    number: '04',
    title: 'Testing & QA',
    duration: '1–2 weeks',
    description:
      'Cross-browser testing, accessibility audits, performance optimisation, and security hardening before launch.',
  },
  {
    number: '05',
    title: 'Launch & support',
    duration: 'Ongoing',
    description:
      'Managed deployment, DNS configuration, post-launch monitoring, and 30 days of included support.',
  },
];

// ============================================
// SUB-SERVICES
// ============================================

export const servicePageSubServices = [
  {
    icon: Code,
    title: 'Custom theme development',
    description:
      'Block themes built with Full Site Editing, theme.json, and modern WordPress standards for maximum flexibility.',
    features: [
      'Block-based theme architecture',
      'Custom block patterns & templates',
      'theme.json token system',
      'Responsive & accessible markup',
    ],
  },
  {
    icon: Package,
    title: 'Plugin development',
    description:
      'Bespoke plugins that extend WordPress functionality without bloating your stack or compromising performance.',
    features: [
      'REST API integrations',
      'Custom post types & taxonomies',
      'WooCommerce extensions',
      'Third-party API connectors',
    ],
  },
  {
    icon: Layout,
    title: 'Full site editing',
    description:
      'Leverage WordPress FSE to give content teams full control over headers, footers, templates, and global styles.',
    features: [
      'Site editor configuration',
      'Template parts & variations',
      'Global styles management',
      'Pattern library creation',
    ],
  },
  {
    icon: Lightning,
    title: 'Performance optimisation',
    description:
      'Speed audits, asset optimisation, caching strategies, and Core Web Vitals improvements for top search rankings.',
    features: [
      'Core Web Vitals tuning',
      'Image & asset optimisation',
      'Server-side caching setup',
      'Database query optimisation',
    ],
  },
];

// ============================================
// WHY CHOOSE LIGHTSPEED
// ============================================

export const servicePageWhyChoose: {
  icon: UniversalIcon;
  title: string;
  description: string;
}[] = [
  {
    icon: 'Trophy' as UniversalIcon,
    title: 'Proven track record',
    description:
      '10+ years of WordPress expertise and hundreds of successful projects across diverse industries.',
  },
  {
    icon: 'Code' as UniversalIcon,
    title: 'Modern standards',
    description:
      'We build with Full Site Editing, block themes, and the latest WordPress coding standards — no legacy debt.',
  },
  {
    icon: 'Users' as UniversalIcon,
    title: 'Dedicated team',
    description:
      'A consistent project team with designers, developers, and a dedicated project manager for every engagement.',
  },
  {
    icon: 'Lightning' as UniversalIcon,
    title: 'Performance first',
    description:
      'Every build is optimised for Core Web Vitals, achieving sub-2-second load times out of the box.',
  },
  {
    icon: 'CheckCircle' as UniversalIcon,
    title: 'WCAG 2.1 AA compliant',
    description:
      'Accessibility is not an afterthought. Every component is tested with screen readers, keyboard navigation, and colour contrast tools.',
  },
  {
    icon: 'Crosshair' as UniversalIcon,
    title: 'Fixed-price transparency',
    description:
      'Detailed scoping and fixed-price proposals so you know exactly what you are getting and what it costs.',
  },
];

// ============================================
// BENEFITS
// ============================================

export const servicePageBenefits: string[] = [
  'Faster page load speeds (sub-2s)',
  'Higher search engine rankings',
  'Reduced maintenance overhead',
  'Scalable architecture for growth',
  'Full ownership of custom code',
  'WCAG 2.1 AA accessibility compliance',
  'Mobile-first responsive design',
  'Security hardened from day one',
];

// ============================================
// DELIVERABLES
// ============================================

export const servicePageDeliverables: string[] = [
  'Custom WordPress block theme',
  'Design token system (theme.json)',
  'Reusable block pattern library',
  'Performance audit report',
  'Accessibility compliance report',
  'Documentation & training materials',
  'Staging environment setup',
  '30-day post-launch support',
];

// ============================================
// RELATED SERVICES
// ============================================

export const servicePageRelated = [
  {
    page: 'design-service',
    title: 'UI/UX design',
    description:
      'Beautiful, user-centred design systems that form the visual foundation of your WordPress website.',
  },
  {
    page: 'security-service',
    title: 'Security hardening',
    description:
      'Protect your investment with enterprise-grade security, monitoring, and incident response.',
  },
  {
    page: 'performance-service',
    title: 'Performance optimisation',
    description:
      'Achieve top Core Web Vitals scores with our comprehensive performance tuning service.',
  },
];

// ============================================
// FAQ
// ============================================

export const servicePageFAQs = [
  {
    question: 'How long does a typical WordPress project take?',
    answer:
      'Most projects run 6–12 weeks from discovery to launch. The timeline depends on scope, complexity, and how quickly content and feedback are provided. We provide a detailed timeline during the scoping phase.',
  },
  {
    question: 'Do you work with existing WordPress sites?',
    answer:
      'Absolutely. We regularly rebuild, redesign, and optimise existing WordPress websites. We start with a comprehensive audit to understand the current state and recommend the best path forward.',
  },
  {
    question: 'What WordPress hosting do you recommend?',
    answer:
      'We recommend managed WordPress hosting providers like Cloudways, Kinsta, or WP Engine. We can set up and configure hosting as part of your project scope.',
  },
  {
    question: 'Do you provide ongoing maintenance?',
    answer:
      'Yes. All projects include 30 days of post-launch support. We also offer monthly maintenance plans that cover updates, security monitoring, backups, and priority support.',
  },
  {
    question: 'Can you integrate third-party services?',
    answer:
      'Yes. We build custom integrations with CRMs, email platforms, payment gateways, booking systems, and any service that offers a REST API or webhook interface.',
  },
];

// ============================================
// CTA
// ============================================

export const servicePageCTA = {
  title: 'Ready to build something great?',
  description:
    'Let us turn your vision into a high-performance WordPress website. Get a free project consultation and fixed-price proposal.',
  buttons: [
    {
      text: 'Request a Free Consultation',
      page: 'contact',
    },
  ],
};