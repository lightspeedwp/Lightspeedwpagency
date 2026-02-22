/**
 * WordPress Website Redesign Solution Page Data
 *
 * A solution that bundles discovery, design, development, content migration,
 * and performance services into a single redesign workflow.
 *
 * WordPress Mapping: Custom page template — page-solution-wordpress-redesign.html
 *
 * @see /src/app/components/templates/WordPressRedesignTemplate.tsx
 */

import {
  Search, PenTool, Code, Rocket, RefreshCw, Zap,
  BarChart3, Shield, Eye, Smartphone, ArrowUpRight,
  CheckCircle, Globe, FileText, Settings
} from 'lucide-react';

/* ── Hero ── */
export const wpRedesignHero = {
  badge: { text: 'WEBSITE REDESIGN', icon: RefreshCw },
  title: 'WordPress Website Redesign',
  highlight: 'Redesign',
  tagline:
    'Transform your outdated WordPress site into a modern, high-performance platform that converts visitors into customers.',
  description:
    'We audit your existing site, preserve what works, and rebuild it with modern block theme architecture, fluid typography, and blazing speed.',
  primaryButton: { text: 'Start Your Redesign', page: 'contact' },
  secondaryButton: { text: 'View Case Studies', page: 'portfolio-archive' },
};

/* ── Pain Points / Challenges ── */
export const wpRedesignChallenges = {
  title: 'Is Your Website Holding You Back?',
  description: 'These are the most common signs that it is time for a professional redesign.',
  items: [
    'Slow page speeds killing your SEO rankings',
    'Outdated design that doesn\'t reflect your brand',
    'Not mobile-friendly or responsive',
    'Hard to update content without developer help',
    'Relying on heavy page builders (Elementor, Divi, etc.)',
    'Poor accessibility — excluding potential customers',
    'No clear conversion path for visitors',
    'Security vulnerabilities from outdated plugins',
  ],
};

/* ── Workflow / Process ── */
export const wpRedesignProcess = {
  title: 'Our Proven Redesign Workflow',
  description: 'A structured 6-phase process that preserves your SEO equity while modernising everything else.',
  steps: [
    {
      number: '01',
      title: 'Site Audit & Discovery',
      icon: Search,
      description: 'We analyse your current site — content inventory, SEO performance, analytics, and technical debt — to understand what to keep and what to rebuild.',
      deliverables: ['Content audit report', 'SEO baseline metrics', 'Technical debt assessment', 'Stakeholder interviews'],
      duration: '1 Week',
    },
    {
      number: '02',
      title: 'Strategy & Content Plan',
      icon: FileText,
      description: 'Define the information architecture, content strategy, and conversion funnel based on real data from the audit.',
      deliverables: ['Site map & IA document', 'Content migration plan', 'Wireframes & user flows', 'SEO redirect map'],
      duration: '1-2 Weeks',
    },
    {
      number: '03',
      title: 'Design & Prototyping',
      icon: PenTool,
      description: 'Create a modern, accessible design system with your brand identity, then prototype key pages for approval.',
      deliverables: ['Design system (tokens, components)', 'High-fidelity mockups', 'Interactive prototype', 'Accessibility review'],
      duration: '2-3 Weeks',
    },
    {
      number: '04',
      title: 'Development & Build',
      icon: Code,
      description: 'Build a custom WordPress block theme with Full Site Editing, migrating your content and preserving SEO equity.',
      deliverables: ['Custom block theme', 'Pattern library', 'Content migration', '301 redirect implementation'],
      duration: '3-5 Weeks',
    },
    {
      number: '05',
      title: 'Testing & QA',
      icon: CheckCircle,
      description: 'Rigorous cross-browser, mobile, accessibility, and performance testing to ensure a flawless launch.',
      deliverables: ['WCAG 2.1 AA audit', 'Core Web Vitals pass', 'Cross-browser report', 'Security scan'],
      duration: '1 Week',
    },
    {
      number: '06',
      title: 'Launch & Training',
      icon: Rocket,
      description: 'Seamless deployment with zero-downtime migration, DNS cutover, team training, and post-launch monitoring.',
      deliverables: ['Production deployment', 'CMS training session', 'Documentation package', '30-day monitoring'],
      duration: '1 Week',
    },
  ],
};

/* ── Included Services ── */
export const wpRedesignServices = {
  title: 'What\'s Included',
  description: 'Every redesign bundles these core services into one streamlined engagement.',
  items: [
    { icon: Search, title: 'Discovery & Audit', page: 'discovery', description: 'Comprehensive site audit and stakeholder discovery.' },
    { icon: PenTool, title: 'Web Design', page: 'design', description: 'Modern responsive design with your brand identity.' },
    { icon: Code, title: 'WordPress Development', page: 'development', description: 'Custom block theme with FSE architecture.' },
    { icon: Globe, title: 'Content Migration', page: 'content', description: 'Safe content migration with SEO redirects.' },
    { icon: Zap, title: 'Performance', page: 'performance', description: 'Core Web Vitals optimisation for speed.' },
    { icon: Shield, title: 'Security', page: 'security', description: 'Hardened security setup and monitoring.' },
    { icon: BarChart3, title: 'SEO', page: 'seo', description: 'SEO preservation and enhancement.' },
    { icon: Settings, title: 'Training', page: 'training', description: 'Team training on the new CMS.' },
  ],
};

/* ── Before / After Stats ── */
export const wpRedesignResults = [
  { stat: '3x', label: 'Faster Load Time', description: 'Average improvement in page speed after redesign.' },
  { stat: '45%', label: 'More Conversions', description: 'Average increase in conversion rate post-launch.' },
  { stat: '0', label: 'SEO Ranking Drops', description: 'Careful redirect strategy preserves your search positions.' },
  { stat: '90+', label: 'Lighthouse Score', description: 'Performance, Accessibility, Best Practices, SEO.' },
];

/* ── Pricing ── */
export const wpRedesignPricing = {
  title: 'Redesign Packages',
  description: 'Transparent pricing based on the scope and complexity of your redesign.',
  packages: [
    {
      name: 'Essential',
      description: 'For small business sites needing a modern refresh',
      price: 'From $8,000',
      features: ['Up to 10 pages', 'Custom block theme', 'Content migration', 'Mobile responsive', 'Basic SEO setup', '30-day support'],
      recommended: false,
    },
    {
      name: 'Professional',
      description: 'For growing businesses with complex content',
      price: 'From $18,000',
      features: ['Up to 30 pages', 'Custom design system', 'Advanced content migration', 'Performance optimisation', 'WCAG 2.1 AA', 'Analytics setup', 'CMS training', '90-day support'],
      recommended: true,
    },
    {
      name: 'Enterprise',
      description: 'For large-scale sites and complex requirements',
      price: 'Custom',
      features: ['Unlimited pages', 'Bespoke design system', 'Multi-site / multilingua', 'API integrations', 'Custom functionality', 'Security hardening', 'Priority support', 'SLA agreement'],
      recommended: false,
    },
  ],
};

/* ── FAQs ── */
export const wpRedesignFAQs = [
  {
    question: 'Will I lose my SEO rankings during a redesign?',
    answer: 'No. We create a comprehensive 301 redirect map and preserve your URL structure wherever possible. Our process includes an SEO baseline audit before the redesign and post-launch monitoring to catch any issues immediately.',
  },
  {
    question: 'How long does a WordPress redesign take?',
    answer: 'A typical redesign takes 8-12 weeks from discovery to launch. Larger projects with complex content migration or custom functionality may take 12-16 weeks. We provide a detailed timeline during the strategy phase.',
  },
  {
    question: 'Can I keep my existing content?',
    answer: 'Absolutely. Content migration is a core part of every redesign. We audit your existing content, recommend what to keep, update, or remove, and handle the entire migration process.',
  },
  {
    question: 'Do you redesign sites built with page builders?',
    answer: 'Yes — in fact, migrating away from heavy page builders like Elementor or Divi to a lightweight block theme is one of the most impactful improvements we make. Sites typically load 2-4x faster after migration.',
  },
  {
    question: 'What happens after launch?',
    answer: 'Every package includes post-launch support (30-90 days depending on the package). We monitor performance, fix any issues, and provide CMS training so your team is confident managing the new site.',
  },
];

/* ── CTA ── */
export const wpRedesignCTA = {
  title: 'Ready to Transform Your Website?',
  description: 'Book a free discovery call and we\'ll audit your current site, identify quick wins, and outline a redesign roadmap — no commitment required.',
  buttonText: 'Book Free Discovery Call',
  buttonPage: 'contact',
};
