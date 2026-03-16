/**
 * Content Service Page Data
 * 
 * Complete data for Content Strategy & Creation service page.
 * Includes hero, benefits, features, process, content types, packages, FAQs, and CTA.
 */

import {
  FileText,
  Crosshair,
  TrendUp,
  Users,
  PencilSimple,
  MagnifyingGlass,
  CheckCircle,
  ChartBar,
  Calendar,
  Sparkle
} from '@phosphor-icons/react';

/**
 * Hero Section
 */
export const contentHero = {
  badge: {
    icon: FileText,
    text: 'Content Services'
  },
  title: 'Strategic content that',
  titleHighlight: 'Converts',
  description: 'Transform your website with professional content strategy and creation. From SEO-optimized blog posts to compelling landing pages, we create content that engages your audience and drives measurable results.',
  cta: {
    primary: { text: 'Start Content Strategy', page: 'contact' as const },
    secondary: { text: 'View Portfolio', page: 'portfolio-archive' as const }
  }
};

/**
 * Why Content Strategy Matters
 */
export const whyContentStrategy = {
  title: 'Why professional content matters',
  description: 'Great content is the foundation of digital success',
  benefits: [
    {
      icon: Users,
      title: 'Engage your audience',
      description: 'Connect with your target audience through relevant, valuable content that addresses their needs and pain points.'
    },
    {
      icon: TrendUp,
      title: 'Improve SEO rankings',
      description: 'Rank higher in search results with SEO-optimized content that targets the right keywords and provides value to users.'
    },
    {
      icon: Crosshair,
      title: 'Build authority',
      description: 'Establish thought leadership and brand authority with expert content that demonstrates your knowledge and expertise.'
    },
    {
      icon: CheckCircle,
      title: 'Drive conversions',
      description: 'Turn visitors into customers with persuasive content that guides users through the buying journey.'
    }
  ]
};

/**
 * Content Services Features
 */
export const contentServices = [
  {
    icon: Crosshair,
    title: 'Content strategy',
    description: 'Comprehensive content planning: audience research, keyword strategy, content calendar, and editorial guidelines.'
  },
  {
    icon: PencilSimple,
    title: 'Professional writing',
    description: 'Expert content creation by experienced writers specializing in your industry and target audience.'
  },
  {
    icon: FileText,
    title: 'Editing & proofreading',
    description: 'Thorough editing for clarity, grammar, style consistency, and brand voice alignment.'
  },
  {
    icon: MagnifyingGlass,
    title: 'SEO optimization',
    description: 'Keyword research, on-page SEO, meta descriptions, internal linking, and search intent alignment.'
  },
  {
    icon: ChartBar,
    title: 'Content audits',
    description: 'Comprehensive analysis of existing content with recommendations for updates, improvements, and pruning.'
  },
  {
    icon: Calendar,
    title: 'Content management',
    description: 'End-to-end content workflow management: planning, creation, review, publishing, and performance tracking.'
  }
];

/**
 * Content Creation Process
 */
export const contentProcess = [
  {
    step: 1,
    title: 'Research & discovery',
    description: 'Deep dive into your business, audience, competitors, and industry: audience personas, competitor analysis, keyword research, and content gap analysis.'
  },
  {
    step: 2,
    title: 'Strategy & planning',
    description: 'Develop comprehensive content strategy: content pillars, editorial calendar, topic clusters, SEO targets, and success metrics.'
  },
  {
    step: 3,
    title: 'Content creation',
    description: 'Professional writing and production: research, outlining, writing, fact-checking, and incorporating SEO best practices.'
  },
  {
    step: 4,
    title: 'Review & optimization',
    description: 'Quality assurance process: editing, proofreading, SEO optimization, brand voice alignment, and client review cycles.'
  },
  {
    step: 5,
    title: 'Publishing & analytics',
    description: 'Content publishing and performance tracking: WordPress publishing, metadata optimization, performance monitoring, and iterative improvements.'
  }
];

/**
 * Content Types We Create
 */
export const contentTypes = {
  title: 'Content types we create',
  description: 'Comprehensive content solutions for every marketing need',
  types: [
    { 
      name: 'Blog Posts & Articles',
      description: '500-2000+ words, SEO-optimized, engaging'
    },
    { 
      name: 'Landing Pages',
      description: 'Conversion-focused copy for campaigns'
    },
    { 
      name: 'Product Descriptions',
      description: 'Compelling ecommerce content'
    },
    { 
      name: 'Case Studies',
      description: 'In-depth success stories'
    },
    { 
      name: 'Email Campaigns',
      description: 'Newsletters and email sequences'
    },
    { 
      name: 'Social Media Content',
      description: 'Posts, captions, and campaigns'
    },
    { 
      name: 'Website Copy',
      description: 'About, services, and core pages'
    },
    { 
      name: 'White Papers & Guides',
      description: 'Long-form authority content'
    }
  ]
};

/**
 * Content Packages
 */
export const contentPackages = [
  {
    name: 'Content Starter',
    tagline: 'Essential content creation',
    price: {
      amount: 1500,
      display: '$1,500',
      period: '/month'
    },
    description: 'Perfect for businesses starting their content marketing journey.',
    features: [
      '4 blog posts per month (800-1000 words)',
      'Basic keyword research',
      'SEO optimization',
      'Meta descriptions & titles',
      'One content revision per piece',
      'WordPress publishing',
      'Monthly performance report'
    ],
    cta: { text: 'Request a Systems Audit', page: 'contact' as const },
    popular: false
  },
  {
    name: 'Content Professional',
    tagline: 'Comprehensive content strategy',
    price: {
      amount: 3500,
      display: '$3,500',
      period: '/month'
    },
    description: 'Complete content solution for growing businesses.',
    features: [
      'Everything in Starter, plus:',
      '8 blog posts per month (1000-1500 words)',
      'Advanced keyword research',
      'Content strategy consultation',
      'Editorial calendar planning',
      'Two content revisions per piece',
      'Email newsletter (2 per month)',
      'Social media content repurposing',
      'Bi-weekly strategy calls'
    ],
    cta: { text: 'Request a Systems Audit', page: 'contact' as const },
    popular: true
  },
  {
    name: 'Content Enterprise',
    tagline: 'Full-scale content operations',
    price: {
      amount: 0,
      display: 'Custom',
      period: ''
    },
    description: 'End-to-end content solution for enterprise organizations.',
    features: [
      'Everything in Professional, plus:',
      'Unlimited blog posts (custom volume)',
      'Dedicated content strategist',
      'Complete content audit',
      'Multi-channel content strategy',
      'Long-form content (case studies, guides)',
      'Landing page copywriting',
      'Video script writing',
      'Weekly strategy calls',
      'Custom content workflows'
    ],
    cta: { text: 'Contact Sales', page: 'contact' as const },
    popular: false
  }
];

/**
 * FAQs
 */
export const contentFAQs = [
  {
    question: 'Do you write content for any industry?',
    answer: 'Yes, we have writers specializing in various industries including technology, ecommerce, travel, healthcare, finance, real estate, and more. We match you with writers who have expertise in your specific industry and understand your audience.'
  },
  {
    question: 'How do you ensure content matches our brand voice?',
    answer: 'We start with a brand voice workshop to understand your tone, style, and messaging preferences. We create brand guidelines and use content briefs for every piece. You also get revision rounds to ensure content aligns perfectly with your brand.'
  },
  {
    question: 'Can you help with content strategy, not just writing?',
    answer: 'Absolutely. Our content services include complete strategy development: audience research, competitive analysis, keyword strategy, content calendar planning, topic ideation, and performance tracking. Strategy is included in Professional and Enterprise packages.'
  },
  {
    question: 'How long does it take to see SEO results from content?',
    answer: 'SEO is a long-term strategy. You may see initial ranking improvements in 3-6 months, with significant results typically appearing after 6-12 months of consistent, high-quality content publication. We track and report on progress monthly.'
  },
  {
    question: 'Do you publish content directly to WordPress?',
    answer: 'Yes. All packages include WordPress publishing with proper formatting, images, meta descriptions, internal linking, and category/tag assignment. We can also work with your approval workflow if you prefer to review before publishing.'
  },
  {
    question: 'What if we need content updated or revised?',
    answer: 'Each package includes revision rounds. Starter gets one revision per piece, Professional gets two revisions. We also offer content update services to refresh old posts with new information, updated keywords, and improved formatting.'
  }
];

/**
 * CTA Section
 */
export const contentCTA = {
  title: 'Ready to transform your content?',
  description: 'Get a free content strategy consultation and learn how professional content can drive traffic, engagement, and conversions for your business.',
  buttons: [
    { text: 'Get Free Consultation', page: 'contact' as const },
    { text: 'View Content Examples', page: 'blog' as const }
  ]
};