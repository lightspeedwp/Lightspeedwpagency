/**
 * Education Solution Page — Dedicated Data
 *
 * Rich solution object for the Education industry solution page.
 * NOT the summary-level shape from solutions.ts.
 *
 * @see /src/app/components/templates/EducationSolutionTemplate.tsx
 * @see /src/app/components/templates/SolutionDetailTemplate.tsx
 */

import {
  BookOpenText,
  GraduationCap,
  CreditCard,
  Storefront,
  PencilLine,
  ShieldCheck,
} from '@phosphor-icons/react';

export const educationSolution = {
  title: 'WordPress education solutions',
  slug: 'education',
  category: 'Industry solution',
  tagline:
    'Modern WordPress platforms for education brands, course providers, and membership-led learning businesses',
  description:
    'Build a better education website with WordPress, WooCommerce, and scalable content architecture. We help education businesses create websites that do more than market courses \u2014 they deliver learning content, sell memberships, manage subscriptions, and support long-term growth. From content structure and UX to e-learning integrations and recurring revenue models, LightSpeed builds education platforms that are easier to manage and better for students, parents, members, and internal teams.',

  benefits: [
    'Build a single platform for marketing, learning, and ecommerce',
    'Create recurring revenue with memberships and subscription products',
    'Make course, lesson, and resource content easier to manage',
    'Improve mobile usability for busy learners and parents',
    'Support future growth with a scalable WordPress architecture',
    'Add AI tools later without rebuilding the site from scratch',
  ],

  features: [
    {
      title: 'Structured education content',
      description:
        'We plan your site architecture around courses, resources, lessons, articles, FAQs, and landing pages so content stays organised as your offering grows.',
      icon: BookOpenText,
    },
    {
      title: 'E-learning integration',
      description:
        'Add learning functionality for online programmes, gated resources, student dashboards, and progress-based content using the right WordPress-compatible stack.',
      icon: GraduationCap,
    },
    {
      title: 'Memberships and subscriptions',
      description:
        'Sell paid memberships, recurring subscriptions, premium content access, or ongoing learning programmes with WooCommerce-based revenue flows.',
      icon: CreditCard,
    },
    {
      title: 'WooCommerce-powered payments',
      description:
        'Use WooCommerce for course sales, subscriptions, bundles, one-off products, and add-ons while keeping reporting and operations in one place.',
      icon: Storefront,
    },
    {
      title: 'Editorial and marketing workflow',
      description:
        'Support internal teams with flexible publishing workflows for lessons, blog posts, landing pages, downloads, and campaign content.',
      icon: PencilLine,
    },
    {
      title: 'Performance, accessibility, and support',
      description:
        'Build on a fast, accessible, maintainable foundation that supports long-term publishing, SEO, and product growth.',
      icon: ShieldCheck,
    },
  ],

  useCases: [
    {
      title: 'Education publishers',
      description:
        'Manage large volumes of educational content, product pages, downloads, and structured resources in one coherent WordPress setup.',
      industries: ['Publishing', 'Education', 'Content Teams'],
    },
    {
      title: 'Training academies',
      description:
        'Sell access to short courses, premium resources, and member areas while keeping enrolment and payments simple.',
      industries: ['Training', 'Professional Education', 'Membership'],
    },
    {
      title: 'Online course businesses',
      description:
        'Launch or rebuild a course business with better content structure, stronger UX, and scalable recurring-revenue options.',
      industries: ['Online Learning', 'Coaching', 'Digital Products'],
    },
    {
      title: 'Schools, tutors, and niche learning brands',
      description:
        'Create a clearer digital experience for learners, parents, and administrators with better content architecture and easier updates.',
      industries: ['Tutoring', 'Independent Education', 'Specialist Learning'],
    },
  ],

  specifications: {
    technology: [
      'WordPress block theme architecture',
      'WooCommerce for payments and product management',
      'Membership and subscription extensions where needed',
      'LMS or course-platform integrations based on project scope',
      'Analytics, SEO, and CRM integration where relevant',
    ],
    requirements: [
      'Clear course or programme structure',
      'Defined user journeys for learners, parents, or members',
      'Payment gateway requirements confirmed early',
      'Content model for courses, lessons, resources, and sales pages',
      'Decision on membership, subscription, or one-off purchase model',
    ],
    support: [
      'Discovery and content modelling',
      'UX and design system support',
      'WordPress development and integration',
      'Launch support and QA',
      'Ongoing maintenance and optimisation',
    ],
  },

  pricing: {
    model: 'Custom scoped solution',
    starting: 'Tailored to platform complexity',
    includes: [
      'Discovery and architecture',
      'UX and interface design',
      'WordPress build',
      'WooCommerce configuration',
      'Membership / subscription planning',
      'Launch support',
    ],
  },

  relatedSolutions: [
    {
      id: 'ai',
      title: 'AI integrations',
      slug: 'ai',
      excerpt:
        'Explore AI-powered content, support, SEO, and analytics for WordPress.',
    },
    {
      id: 'wordpress',
      title: 'WordPress solution',
      slug: 'wordpress',
      excerpt:
        'Modern block-theme WordPress architecture for scalable content-first websites.',
    },
    {
      id: 'woocommerce',
      title: 'WooCommerce solution',
      slug: 'woocommerce',
      excerpt:
        'Ecommerce foundations for payments, subscriptions, and digital product sales.',
    },
  ],
};

/* ── AI Integrations Section Data ── */

export const educationAISection = {
  title: 'AI integrations for education teams',
  description:
    'Once your WordPress education platform is structured properly, AI can help you work smarter across publishing, support, and growth. LightSpeed can help you explore AI-assisted content generation, learner support experiences, SEO workflows, and reporting layers that fit into your existing WordPress setup.',
  cards: [
    {
      title: 'AI-assisted content workflows',
      description:
        'Speed up draft creation for course pages, support articles, knowledge-base content, and marketing copy while keeping human review in place.',
    },
    {
      title: 'AI chat and support experiences',
      description:
        'Give prospective students and members faster answers with AI-powered support flows connected to your content and FAQs.',
    },
    {
      title: 'AI-ready growth systems',
      description:
        'Layer in AI for search visibility, analytics, and operational efficiency without rebuilding your entire website later.',
    },
  ],
  ctaText: 'Explore AI integrations',
  /**
   * Links to the AI solutions landing page.
   * NOTE: The repo also has AI integrations routed under `/solutions/ai/integrations`.
   * This link may need confirmation later depending on the preferred destination.
   */
  ctaLink: '/solutions/ai',
};

/* ── Case Study Reference ── */

export const educationCaseStudy = {
  text: 'LightSpeed has also worked with education businesses such as The Answer Series, helping shape practical WordPress solutions around real content and publishing needs.',
  linkLabel: 'Read The Answer Series case study',
  linkUrl: 'https://lightspeedwp.agency/portfolio/the-answer-series/',
};

/* ── CTA Section ── */

export const educationCTA = {
  title: 'Ready to build a better education platform?',
  description:
    'Whether you need a content-rich education website, a membership platform, or a WooCommerce-powered learning business, we can help you plan and build the right WordPress solution.',
  buttonText: 'Request a systems audit',
  benefits: [
    'Education-focused WordPress architecture',
    'E-learning, memberships, and subscriptions',
    'WooCommerce-ready recurring revenue',
    'Scalable content and publishing workflows',
    'AI-ready for future growth',
  ],
};
