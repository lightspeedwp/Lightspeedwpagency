/**
 * Front Page Alt — Data
 *
 * Authority Sequencing: Promise → Proof → Process → Packages → Prompt.
 * Rendered by FrontPageAltTemplate at `/home-alt`.
 */

import {
  Compass,
  PaintBrushBroad,
  Code,
  Rocket,
  ChartLineUp,
  Brain,
  Newspaper,
  Storefront,
  Airplane,
  Robot,
  Browser,
  Stack,
  CheckCircle,
  Lightning,
  Certificate,
  Graph,
  BracketsCurly,
  Quotes,
} from '@phosphor-icons/react';

export const frontPageAltHero = {
  meta: 'For enterprise WordPress & WooCommerce teams',
  headline: 'Structured AI-Optimised WordPress Solutions That Perform.',
  subcopy:
    'We are an AI-ready WordPress engineering partner for digital publishers, ecommerce brands, and technical teams. We build block-first design systems, execute complex migrations, and engineer performance-grade infrastructure built for the age of answer engines.',
  primaryCta: { label: 'Book Your AI Readiness Consultation', href: '/contact' },
  secondaryCta: { label: 'Explore Our Design System', href: '/services/design-systems' },
  floatingChips: [
    { label: 'Block-first systems', accent: 'cyan' },
    { label: 'Answer engine ready', accent: 'pink' },
    { label: 'Core Web Vitals +42%', accent: 'lime' },
  ],
};

export const frontPageAltStats = [
  { number: '1,500+', label: 'Projects delivered since 2013', icon: Rocket },
  { number: '220,000+', label: 'Posts safely migrated', icon: Stack },
  { number: '42%', label: 'Average Core Web Vitals speed boost', icon: Lightning },
  { number: '100%', label: 'WCAG 2.2 AA compliance targets', icon: CheckCircle },
];

export const frontPageAltLifecycle = {
  title: 'The 6-Stage Engineering Lifecycle',
  intro:
    'We eliminate development guesswork and scope creep through a structured, AI-enhanced methodology.',
  stages: [
    {
      number: '01',
      title: 'Discover',
      description:
        'AI-assisted feasibility audits, competitive gap analysis, and content strategy.',
      icon: Compass,
      accent: 'cyan',
      href: '/services/discover',
    },
    {
      number: '02',
      title: 'Create',
      description:
        'Token-driven Figma design systems and interactive, clickable prototypes.',
      icon: PaintBrushBroad,
      accent: 'pink',
      href: '/services/create',
    },
    {
      number: '03',
      title: 'Build',
      description:
        'Custom WordPress block themes, API integrations, and secure data migrations.',
      icon: Code,
      accent: 'lime',
      href: '/services/build',
    },
    {
      number: '04',
      title: 'Launch',
      description: 'Zero-downtime deployments, AI-assisted QA, and team training.',
      icon: Rocket,
      accent: 'yellow',
      href: '/services/launch',
    },
    {
      number: '05',
      title: 'Grow',
      description:
        'Continuous Core Web Vitals tuning, technical SEO, and accessibility monitoring.',
      icon: ChartLineUp,
      accent: 'cyan',
      href: '/services/grow',
    },
    {
      number: '06',
      title: 'Evolve',
      description:
        'Deep AI integration, answer engine optimisation, and predictive analytics.',
      icon: Brain,
      accent: 'purple',
      href: '/services/evolve',
    },
  ],
};

export const frontPageAltSolutions = {
  title: 'Solutions architected for your industry',
  intro:
    'Custom open-source frameworks without the bloat of proprietary SaaS lock-in.',
  cards: [
    {
      title: 'Digital publishers',
      description:
        'Editorial-grade WordPress architectures with structured content models and publishing velocity.',
      href: '/solutions/publishers',
      icon: Newspaper,
      accent: 'cyan',
      featured: false,
    },
    {
      title: 'WooCommerce stores',
      description:
        'Scalable storefronts engineered for conversion, subscriptions, and complex catalog structure.',
      href: '/solutions/woocommerce',
      icon: Storefront,
      accent: 'pink',
      featured: false,
    },
    {
      title: 'Tour operators',
      description:
        'Tour Operator 2.1 architecture for bookings, itineraries, and multi-supplier content.',
      href: '/solutions/tour-operators',
      icon: Airplane,
      accent: 'lime',
      featured: false,
    },
    {
      title: 'AI integrations',
      description:
        'AI-ready workflows, schema, and structured content that LLMs and answer engines can cite.',
      href: '/solutions/ai',
      icon: Robot,
      accent: 'purple',
      featured: true,
    },
    {
      title: 'WordPress sites',
      description:
        'Block-first WordPress foundations for scalable marketing and publishing platforms.',
      href: '/solutions/wordpress',
      icon: Browser,
      accent: 'yellow',
      featured: false,
    },
  ],
  allLink: { label: 'Explore all industry solutions', href: '/solutions' },
};

export const frontPageAltTiers = {
  title: 'Services designed to scale with your growth',
  intro:
    'From turnkey setups to long-term engineering partnerships, we support you at every stage.',
  tiers: [
    {
      name: 'Foundation',
      description:
        'Turnkey AI-ready platform, essential token-driven design system, performance setup, and baseline AI capabilities.',
      href: '/services/discover',
      cta: 'Start with Foundation',
      featured: false,
      accent: 'cyan',
    },
    {
      name: 'Growth',
      description:
        'Advanced content and commerce engineering, multi-brand Figma tokens, complex migrations, and automated editorial workflows.',
      href: '/services/build',
      cta: 'Scale with Growth',
      featured: true,
      accent: 'pink',
    },
    {
      name: 'Enterprise',
      description:
        'Bespoke partnerships featuring custom AI personalisation, strict governance compliance, and performance-grade managed hosting.',
      href: '/services/evolve',
      cta: 'Design an Enterprise engagement',
      featured: false,
      accent: 'purple',
    },
  ],
};

export const frontPageAltCaseStudy = {
  title: 'Real results for real businesses',
  quote:
    '“Before partnering with LightSpeed, we struggled to find a company who could provide technically strong coding expertise... LightSpeed developed a solution that minimised manual inputs on the backend... translating our concepts into slick, working experiences.”',
  attribution: {
    name: 'Anthony Rodinis',
    role: 'Operations Manager, ARMD Digital',
  },
  challenge: 'Legacy architecture causing slow booking journeys.',
  result:
    'Rebuilt on Tour Operator 2.1 architecture, delivering a 42% improvement in Core Web Vitals and 2.5x faster editorial publishing.',
  caseStudyCta: { label: 'Read the ARMD Digital case study', href: '/work/armd-digital' },
  archiveCta: { label: 'View all work', href: '/work' },
  badges: [
    { label: 'Certified WooExpert', icon: Certificate },
    { label: 'Mailchimp Partner', icon: Certificate },
    { label: 'Open-Source Contributors (GitHub)', icon: Graph },
  ],
};

export const frontPageAltAIStrip = {
  title: 'Built for the age of AI search',
  intro:
    'Traditional SEO relies on keywords. Emerging AI engines rely on structured entities. We prepare your technical architecture so large language models can understand, cite, and surface your brand more clearly.',
  features: [
    {
      title: 'AI-optimised schema markup',
      description:
        'Structured schema engineered for LLMs, answer engines, and rich citation surfaces.',
      icon: BracketsCurly,
      accent: 'cyan',
    },
    {
      title: 'Structured content engineering',
      description:
        'Entity-aware content models that scale across publishing, commerce, and knowledge.',
      icon: Stack,
      accent: 'lime',
    },
    {
      title: 'Answer-first headings',
      description:
        'Editorial and information architecture rewritten to win AI-generated answers.',
      icon: Quotes,
      accent: 'purple',
    },
  ],
  cta: { label: 'Explore AI solutions', href: '/solutions/ai' },
};

export const frontPageAltInsights = {
  title: 'Latest engineering insights & research',
  cards: [
    {
      title: 'WCAG 2.2 and WordPress: A practical accessibility audit guide',
      category: 'Accessibility',
      readTime: '8 min read',
      accent: 'cyan',
    },
    {
      title: 'A deep dive into LightSpeed’s AI workflow',
      category: 'AI engineering',
      readTime: '11 min read',
      accent: 'pink',
    },
    {
      title: 'Tour Operator 2.1 release: modals and dynamic content blocks',
      category: 'Release notes',
      readTime: '6 min read',
      accent: 'lime',
    },
  ],
  allLink: { label: 'Explore all articles & resources', href: '/insights' },
};

export const frontPageAltFinalCTA = {
  headline: 'Ready to future-proof your digital platform?',
  bullets: [
    'Zero data-loss complex migrations',
    'Lightning-fast Core Web Vitals',
    'Strict WCAG 2.2 AA accessibility',
  ],
  button: { label: 'Schedule a Strategic Scoping Call', href: '/contact' },
};

export const frontPageAltLeadCapture = {
  headline: 'Download the 2027 AI Readiness Checklist',
  subcopy:
    'Enter your email to receive our enterprise-grade checklist for preparing your WordPress architecture, schema, and design systems for answer engines and LLMs.',
  /**
   * NOTE: No real lead-magnet form endpoint is defined yet.
   * This CTA falls back to `/contact` for the prototype.
   */
  button: { label: 'Get the Checklist', href: '/contact' },
  placeholder: 'you@company.com',
};
