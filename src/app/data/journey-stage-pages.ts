/**
 * Journey Stage Pages Data
 *
 * Rich content for each of the 6 website-journey phase landing pages
 * (Discover → Create → Build → Launch → Grow → Evolve).
 *
 * Every phase explains:
 * - What happens during the stage
 * - Which LSX services apply
 * - What the client delivers / receives
 * - Tangible deliverables & milestones
 *
 * @see /src/app/data/service-journey.ts — canonical phase list
 * @see /src/app/components/templates/JourneyStageTemplate.tsx
 */

import type { UniversalIcon } from '../utils/icon-map';
import {
  MagnifyingGlass, PenNib, Code, Rocket, TrendUp, Brain,
  Crosshair, FileText, Users, Lightbulb, Palette, Image,
  Envelope, Stack, Shield, GitBranch, HardDrive, GraduationCap,
  Gauge, ChartBar, Eye, Wrench, Cpu, Sparkle,
  CheckCircle, ArrowRight, Clock, ChatCentered, ChartLine,
} from '@phosphor-icons/react';

/* ─────────────────────────────────────────────
   Types
   ───────────────────────────────────────────── */

export interface JourneyDeliverable {
  label: string;
  description: string;
}

export interface JourneyServiceCard {
  /** Page slug for internal navigation */
  page: string;
  /** Display title */
  title: string;
  /** Short description */
  description: string;
  /** Phosphor icon */
  icon: UniversalIcon;
  /** Optional badge ("NEW", "HOT") */
  badge?: string;
}

export interface JourneyClientRole {
  title: string;
  items: string[];
}

export interface JourneyStageData {
  /** URL slug (e.g. "discover") */
  slug: string;
  /** Step number string (e.g. "01") */
  step: string;
  /** Phase name */
  name: string;
  /** Phase tagline */
  tagline: string;
  /** Phosphor icon for the phase */
  icon: UniversalIcon;
  /** Neon accent CSS variable */
  accent: string;
  /** Estimated duration label */
  duration: string;
  /** Extended paragraph describing the phase */
  description: string;
  /** Second paragraph — why this phase matters */
  whyItMatters: string;
  /** Key outcomes / goals for this phase */
  outcomes: string[];
  /** Services available during this phase */
  services: JourneyServiceCard[];
  /** Deliverables the client receives */
  deliverables: JourneyDeliverable[];
  /** What the client needs to provide / do */
  clientRole: JourneyClientRole;
  /** Quote / testimonial for social proof */
  testimonial: {
    quote: string;
    author: string;
    role: string;
  };
  /** CTA content */
  cta: {
    title: string;
    description: string;
    buttonText: string;
    buttonPage: string;
  };
}

/* ─────────────────────────────────────────────
   Data — 6 Journey Stages
   ───────────────────────────────────────────── */

export const journeyStages: JourneyStageData[] = [
  /* ── 01 DISCOVER ── */
  {
    slug: 'discover',
    step: '01',
    name: 'Discover',
    tagline: 'Uncover. Research. Strategise.',
    icon: MagnifyingGlass,
    accent: 'var(--category-violet)',
    duration: '2 – 4 weeks',
    description:
      'Every great website begins with a spark — a clear understanding of who you are, who you serve, and what you want to achieve. The Discover phase is where we light that spark. We dive deep into your business goals, audience behaviours, competitor landscape, and existing content to build a rock-solid strategic foundation.',
    whyItMatters:
      'Skipping strategy is the number-one reason websites fail. Without a blueprint, development becomes guesswork. Discover eliminates that risk by ensuring every design decision, content choice, and technical build is anchored to measurable objectives.',
    outcomes: [
      'Crystal-clear project brief aligned to business KPIs',
      'Audience personas backed by real data',
      'Competitor analysis & gap identification',
      'Content audit with prioritised action plan',
      'Content strategy & messaging framework',
      'Technical requirements document',
    ],
    services: [
      {
        page: 'discovery',
        title: 'Discovery & Strategy',
        description: 'Workshops, stakeholder interviews, and a prioritised roadmap.',
        icon: Crosshair,
      },
      {
        page: 'content',
        title: 'Content Operations',
        description: 'Audit, strategy, collection, and email marketing — unified.',
        icon: FileText,
      },
    ],
    deliverables: [
      { label: 'Discovery Report', description: 'Goals, audiences, competitors, and technical scope.' },
      { label: 'Content Audit Matrix', description: 'Page-by-page analysis with ROT scores.' },
      { label: 'Content Strategy Doc', description: 'Messaging framework, tone of voice, and editorial calendar.' },
      { label: 'Project Roadmap', description: 'Milestone timeline with clear go / no-go gates.' },
    ],
    clientRole: {
      title: 'Your role during Discover',
      items: [
        'Share your business goals, brand guidelines, and existing analytics',
        'Attend a 90-minute discovery workshop (remote or in-person)',
        'Provide access to existing CMS, analytics, and hosting',
        'Nominate a project champion for sign-offs',
      ],
    },
    testimonial: {
      quote: 'The discovery phase completely changed how we thought about our website. We went from "we need a redesign" to "we need a conversion engine."',
      author: 'Sarah Chen',
      role: 'Marketing Director, TravelCo',
    },
    cta: {
      title: 'Ready to Discover Your Path?',
      description: 'Book a free 30-minute strategy call. We\'ll explore your goals and map the road ahead.',
      buttonText: 'Book a Strategy Call',
      buttonPage: 'contact',
    },
  },

  /* ── 02 CREATE ── */
  {
    slug: 'create',
    step: '02',
    name: 'Create',
    tagline: 'Design. Prototype. Inspire.',
    icon: PenNib,
    accent: 'var(--category-pink)',
    duration: '3 – 6 weeks',
    description:
      'With your strategy locked in, the Create phase brings your brand to life on screen. We design beautiful, accessible user interfaces — starting with wireframes and progressing to high-fidelity prototypes. At the same time, we gather and organise all the content, imagery, and assets that will power your site.',
    whyItMatters:
      'Design is not decoration — it\'s communication. A well-designed website guides visitors effortlessly toward conversion. In the Create phase, every colour, typeface, and layout decision is intentional, tested, and aligned to your brand strategy.',
    outcomes: [
      'Mobile-first wireframes for every key page',
      'High-fidelity design mockups in Figma',
      'Interactive prototype for stakeholder review',
      'Organised content library (copy, images, video)',
      'Email campaign designs & automation flows',
      'Design system tokens (colours, typography, spacing)',
    ],
    services: [
      {
        page: 'design',
        title: 'Web Design',
        description: 'Beautiful, accessible UI designed in Figma with a mobile-first approach.',
        icon: Palette,
      },
      {
        page: 'design',
        title: 'Figma Prototyping & Design Systems',
        description: 'Interactive prototypes and scalable design systems — now part of Design.',
        icon: Stack,
        badge: 'MERGED',
      },
      {
        page: 'content',
        title: 'Content Operations',
        description: 'Content collection, email marketing, and newsletters — unified.',
        icon: Image,
      },
    ],
    deliverables: [
      { label: 'Wireframes', description: 'Mobile + desktop layouts for every template.' },
      { label: 'Figma Mockups', description: 'Pixel-perfect designs with interactive components.' },
      { label: 'Clickable Prototype', description: 'Navigate the site before a single line of code.' },
      { label: 'Content Library', description: 'All copy, images, and media organised and tagged.' },
      { label: 'Design Tokens', description: 'Colours, fonts, spacing — your visual DNA.' },
    ],
    clientRole: {
      title: 'Your role during Create',
      items: [
        'Review wireframes and provide consolidated feedback',
        'Supply high-resolution brand assets (logos, photography)',
        'Approve final design mockups before Build begins',
        'Provide all page copy or collaborate on copywriting',
      ],
    },
    testimonial: {
      quote: 'The Figma prototype blew us away. We could see exactly what our customers would experience before any development started.',
      author: 'James Okafor',
      role: 'CEO, SafariBookings',
    },
    cta: {
      title: 'Let\'s Create Something Beautiful',
      description: 'Share your brand with us and we\'ll show you what\'s possible.',
      buttonText: 'Start Your Design',
      buttonPage: 'contact',
    },
  },

  /* ── 03 BUILD ── */
  {
    slug: 'build',
    step: '03',
    name: 'Build',
    tagline: 'Develop. Integrate. Harden.',
    icon: Code,
    accent: 'var(--category-cyan)',
    duration: '4 – 8 weeks',
    description:
      'This is where designs become a living, breathing website. Our developers build your site on WordPress using modern block themes, custom patterns, and a security-first architecture. We integrate third-party services, migrate existing content, and stress-test everything under real-world conditions.',
    whyItMatters:
      'A beautiful design means nothing if the code behind it is brittle. The Build phase prioritises clean architecture, performance, and security — ensuring your site is fast, maintainable, and resilient against threats.',
    outcomes: [
      'Fully functional WordPress block theme',
      'Custom Gutenberg patterns & blocks',
      'Third-party integrations (CRM, analytics, payments)',
      'Content migration with zero data loss',
      'Security hardening & firewall configuration',
      'Staging environment for client review',
    ],
    services: [
      {
        page: 'development',
        title: 'WordPress Development',
        description: 'Block themes, custom plugins, and Gutenberg patterns.',
        icon: Code,
      },
      {
        page: 'security',
        title: 'Security',
        description: 'Firewalls, malware scanning, and WordPress hardening.',
        icon: Shield,
      },
      {
        page: 'migrations',
        title: 'Migrations',
        description: 'Zero-downtime moves from any platform to WordPress.',
        icon: GitBranch,
      },
    ],
    deliverables: [
      { label: 'WordPress Theme', description: 'Custom block theme with FSE support.' },
      { label: 'Pattern Library', description: 'Reusable block patterns for editor workflow.' },
      { label: 'Integration Suite', description: 'CRM, analytics, and payment gateway connections.' },
      { label: 'Security Report', description: 'Hardening checklist with all items verified.' },
      { label: 'Staging Site', description: 'Full preview environment for content entry and testing.' },
    ],
    clientRole: {
      title: 'Your role during Build',
      items: [
        'Test the staging site and report any issues',
        'Begin entering content into the WordPress editor',
        'Provide API keys and credentials for integrations',
        'Participate in weekly progress check-ins',
      ],
    },
    testimonial: {
      quote: 'The migration was seamless — 2,000 products moved overnight with zero downtime. Our customers didn\'t notice a thing.',
      author: 'Laura Mitchell',
      role: 'E-commerce Manager, GreenGoods',
    },
    cta: {
      title: 'Ready to Build?',
      description: 'We\'ll turn your approved designs into a production-ready WordPress site.',
      buttonText: 'Start Development',
      buttonPage: 'contact',
    },
  },

  /* ── 04 LAUNCH ── */
  {
    slug: 'launch',
    step: '04',
    name: 'Launch',
    tagline: 'Deploy. Train. Go live.',
    icon: Rocket,
    accent: 'var(--category-amber)',
    duration: '1 – 2 weeks',
    description:
      'The moment of truth. In the Launch phase we provision your production hosting, run final QA checks, and flip the switch. But going live is only half the story — we also train your team to manage the site confidently, so you\'re never dependent on us for day-to-day updates.',
    whyItMatters:
      'A botched launch can undo months of hard work. Our launch protocol includes DNS pre-checks, SSL verification, CDN warming, and a monitored go-live window — so your first impression with visitors is flawless.',
    outcomes: [
      'Production hosting provisioned & configured',
      'DNS cutover with zero-downtime strategy',
      'SSL, CDN, and caching fully configured',
      'Final QA across devices and browsers',
      'Team training sessions (editor workflow, content updates)',
      'Launch day monitoring & rapid response',
    ],
    services: [
      {
        page: 'hosting',
        title: 'Hosting & Support',
        description: 'Infrastructure, migrations, and ongoing care — consolidated.',
        icon: GitBranch,
      },
      {
        page: 'training',
        title: 'Training',
        description: 'Give your editors hands-on WordPress competence with structured training.',
        icon: GraduationCap,
      },
    ],
    deliverables: [
      { label: 'Production Environment', description: 'Optimised server with staging + production.' },
      { label: 'Launch Checklist', description: '50-point QA covering SEO, a11y, performance, and security.' },
      { label: 'Training Documentation', description: 'Custom video guides and written SOPs for your team.' },
      { label: 'Go-Live Report', description: 'Post-launch metrics — uptime, speed, and crawl health.' },
    ],
    clientRole: {
      title: 'Your role during Launch',
      items: [
        'Final content review and sign-off',
        'Attend training sessions (1 – 2 hours)',
        'Coordinate DNS changes with your domain registrar',
        'Announce the launch to your audience!',
      ],
    },
    testimonial: {
      quote: 'Launch day was the calmest deployment I\'ve ever experienced. Everything just worked — and the training meant our team was editing content within the hour.',
      author: 'David Kruger',
      role: 'Operations Lead, Cape Ventures',
    },
    cta: {
      title: 'Plan Your Launch',
      description: 'Let us handle the infrastructure while you plan the celebration.',
      buttonText: 'Get Launch-Ready',
      buttonPage: 'contact',
    },
  },

  /* ── 05 GROW ── */
  {
    slug: 'grow',
    step: '05',
    name: 'Grow',
    tagline: 'Optimise. Rank. Scale.',
    icon: TrendUp,
    accent: 'var(--category-green)',
    duration: 'Ongoing',
    description:
      'Your site is live — now it\'s time to make it work harder. The Grow phase is about continuous improvement: faster load times, higher search rankings, broader accessibility, and proactive maintenance. We monitor, measure, and optimise every month so your site keeps delivering results.',
    whyItMatters:
      'A website is never "done". User expectations change, search algorithms evolve, and new accessibility standards emerge. Grow ensures your investment compounds over time instead of depreciating.',
    outcomes: [
      'Core Web Vitals scores in the green',
      'Improved organic search rankings',
      'WCAG 2.1 AA / AAA compliance',
      'Monthly maintenance & security updates',
      'Performance monitoring with RUM dashboards',
      'Conversion rate optimisation insights',
    ],
    services: [
      {
        page: 'performance',
        title: 'Performance & Accessibility',
        description: 'Core Web Vitals, Lighthouse 100, WCAG compliance — unified.',
        icon: Gauge,
      },
      {
        page: 'ai-search-visibility',
        title: 'AI Search & Visibility',
        description: 'SEO, analytics, AI engine, and answer engine — one service.',
        icon: ChartBar,
        badge: 'NEW',
      },
      {
        page: 'hosting',
        title: 'Hosting & Support',
        description: 'Updates, backups, uptime monitoring, and priority support.',
        icon: Wrench,
      },
    ],
    deliverables: [
      { label: 'Performance Report', description: 'Monthly Lighthouse + RUM metrics with trend analysis.' },
      { label: 'SEO Dashboard', description: 'Rankings, traffic, and keyword opportunity tracking.' },
      { label: 'Accessibility Audit', description: 'Quarterly WCAG compliance report with issue resolution.' },
      { label: 'Maintenance Log', description: 'All updates, patches, and backups documented.' },
    ],
    clientRole: {
      title: 'Your role during Grow',
      items: [
        'Share business goals and conversion targets',
        'Review monthly reports and provide feedback',
        'Publish new content following the editorial calendar',
        'Report any issues via our priority support channel',
      ],
    },
    testimonial: {
      quote: 'In 6 months our organic traffic doubled and page speed went from 2.8 s to 0.9 s. The ROI speaks for itself.',
      author: 'Nina Petrov',
      role: 'Head of Digital, EuroTrek',
    },
    cta: {
      title: 'Accelerate Your Growth',
      description: 'Let us optimise, monitor, and maintain your site so you can focus on your business.',
      buttonText: 'Start Growing',
      buttonPage: 'contact',
    },
  },

  /* ── 06 EVOLVE ── */
  {
    slug: 'evolve',
    step: '06',
    name: 'Evolve',
    tagline: 'AI-power. Future-proof.',
    icon: Brain,
    accent: 'var(--category-indigo)',
    duration: 'Ongoing',
    description:
      'The web is changing faster than ever — and AI is leading the charge. The Evolve phase is where we integrate cutting-edge AI capabilities into your WordPress ecosystem: smarter search, automated content, predictive analytics, and Answer Engine Optimisation to ensure your brand is cited by ChatGPT, Perplexity, and every AI-powered search engine.',
    whyItMatters:
      'Businesses that adopt AI early gain a compounding advantage. Evolve positions your website not just for today\'s search landscape but for tomorrow\'s — where AI engines, not just Google, decide who gets found.',
    outcomes: [
      'AI-optimised content that gets cited by LLMs',
      'Reduced AI API costs by up to 60 %',
      'Answer Engine presence across 5+ platforms',
      'Predictive analytics and smart recommendations',
      'Future-proof architecture ready for emerging tech',
      'Competitive edge through early AI adoption',
    ],
    services: [
      {
        page: 'ai-search-visibility',
        title: 'AI Search & Visibility',
        description: 'AI engine + answer engine optimisation — unified service.',
        icon: Cpu,
        badge: 'NEW',
      },
    ],
    deliverables: [
      { label: 'AI Integration Roadmap', description: 'Which AI tools, where to deploy, and expected ROI.' },
      { label: 'AEO Strategy', description: 'Schema, entity markup, and citation tracking setup.' },
      { label: 'Cost Dashboard', description: 'Real-time AI spend monitoring and optimisation.' },
      { label: 'Monthly AI Report', description: 'Citation share-of-voice and performance metrics.' },
    ],
    clientRole: {
      title: 'Your role during Evolve',
      items: [
        'Share your AI ambitions and business priorities',
        'Provide access to existing AI tool accounts',
        'Review citation reports and suggest target queries',
        'Champion AI adoption across your organisation',
      ],
    },
    testimonial: {
      quote: 'Within 3 months our brand was being cited by ChatGPT and Perplexity for industry queries. That visibility is priceless.',
      author: 'Tom van der Berg',
      role: 'Founder, NomadTech',
    },
    cta: {
      title: 'Future-Proof Your Website',
      description: 'AI isn\'t coming — it\'s here. Let us make sure your brand leads the conversation.',
      buttonText: 'Start Your AI Journey',
      buttonPage: 'contact',
    },
  },
];

/* ─────────────────────────────────────────────
   Helpers
   ───────────────────────────────────────────── */

/** Look up a stage by its URL slug */
export function getJourneyStageBySlug(slug: string): JourneyStageData | undefined {
  return journeyStages.find((s) => s.slug === slug);
}

/** Get the ordered list of stage slugs for prev / next navigation */
export const journeyStageSlugs = journeyStages.map((s) => s.slug);