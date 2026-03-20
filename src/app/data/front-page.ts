/**
 * Front Page Data
 * 
 * Homepage content for LightSpeed WordPress Agency.
 * Structure: Hero → Solutions Overview → Services Snapshot → Case Study → AI Teaser → Blog Preview → Final CTA
 * 
 * **Positioning:** Structured Publishing Systems for WordPress
 * **Focus:** Tokenised design, accessible markup, measurable performance
 * 
 * **Content Source:** https://lightspeedwp.agency
 * **Last Updated:** 2026-03-20
 */

import { 
  Lightning, 
  Palette, 
  Users,
  Wrench,
  Eye,
  SquaresFour,
  ShoppingCart,
  Code,
  Stack,
  MagnifyingGlass,
  ChatCircle,
  Headphones,
  Rocket,
  AirplaneTilt,
  Newspaper,
  Browser,
  Package,
  Sparkle,
  ChartLine,
  Lock,
  Gear,
  Broadcast,
  Database,
  Robot,
  Target,
  CheckCircle
} from '@phosphor-icons/react';

/**
 * Hero Section — Clear value proposition
 */
export const frontPageHero = {
  badge: 'WordPress & WooCommerce Experts Since 2003',
  title: 'Structured AI-optimised WordPress solutions',
  description: 'We engineer governed WordPress systems with tokenised design, accessible markup, and measurable performance — so your editors publish with confidence and your site stays coherent at scale.',
  primaryButton: {
    text: 'Book a consultation',
    page: 'contact'
  },
  secondaryButton: {
    text: 'Explore solutions',
    page: 'solutions'
  },
  stats: [
    { value: '500+', label: 'Sites launched' },
    { value: 'WCAG AA', label: 'Accessible' },
    { value: '<1s', label: 'Page loads' }
  ]
};

/**
 * Solutions Overview — Grid of key solution categories
 */
export const frontPageSolutions = {
  title: 'Solutions built for your needs',
  description: 'Comprehensive WordPress packages for every business type and industry.',
  solutions: [
    {
      icon: Browser,
      title: 'WordPress sites',
      description: 'Custom block themes with Full Site Editing, design tokens, and pattern libraries.',
      link: '/solutions/wordpress',
      featured: true
    },
    {
      icon: ShoppingCart,
      title: 'WooCommerce stores',
      description: 'Scalable e-commerce with custom checkout, subscriptions, and payment gateways.',
      link: '/solutions/woocommerce'
    },
    {
      icon: AirplaneTilt,
      title: 'Tour operators',
      description: 'Booking systems for travel agencies with itinerary management and reviews.',
      link: '/solutions/tour-operators'
    },
    {
      icon: Newspaper,
      title: 'Publishers',
      description: 'Content-first sites with editorial workflows and membership systems.',
      link: '/solutions/publishers'
    },
    {
      icon: Robot,
      title: 'AI integrations',
      description: 'AI-powered content generation, chatbots, SEO optimization, and analytics.',
      link: '/solutions/ai'
    },
    {
      icon: Package,
      title: 'LSX products',
      description: 'Premium WordPress themes and plugins for tour operators and agencies.',
      link: '/solutions/lsx'
    }
  ],
  cta: {
    text: 'Explore all solutions',
    page: 'solutions'
  }
};

/**
 * Services Snapshot — Three-tier service model
 */
export const frontPageServices = {
  title: 'Services designed for growth',
  description: 'From discovery to deployment and beyond, we support you at every stage.',
  tiers: [
    {
      icon: Target,
      title: 'Foundation',
      description: 'Discovery, strategy, and planning to set your project up for success.',
      services: ['Discovery workshops', 'Content strategy', 'Competitor research', 'SEO audit'],
      link: '/services/discover',
      color: 'primary'
    },
    {
      icon: Rocket,
      title: 'Growth',
      description: 'Design, development, and deployment of your WordPress solution.',
      services: ['Custom design systems', 'Block theme development', 'WooCommerce setup', 'Performance optimization'],
      link: '/services/build',
      color: 'accent',
      featured: true
    },
    {
      icon: Gear,
      title: 'Enterprise',
      description: 'Ongoing support, security, and evolution for established sites.',
      services: ['Managed hosting', 'Security monitoring', 'Content support', 'Analytics reporting'],
      link: '/services/evolve',
      color: 'primary'
    }
  ]
};

/**
 * Case Study / Proof Block — Featured testimonial + outcomes
 */
export const frontPageCaseStudy = {
  title: 'Real results for real businesses',
  quote: 'The team at LightSpeed was always very professional and innovative, and their expertise in coding was invaluable to our project. I highly recommend LightSpeed.',
  author: 'Anthony Rodinis',
  role: 'Operations Manager',
  company: 'ARMD Digital',
  project: {
    name: 'ARMD Digital',
    industry: 'E-Commerce',
    image: 'https://images.unsplash.com/photo-1563986768609-322da13575f3?w=800&q=80',
    slug: 'armd-digital'
  },
  outcomes: [
    { icon: CheckCircle, metric: '40%', label: 'Increase in online bookings' },
    { icon: Lightning, metric: '<0.8s', label: 'Average page load time' },
    { icon: ChartLine, metric: '98%', label: 'Client satisfaction score' }
  ],
  partners: [
    { name: 'WooCommerce Expert', logo: 'woocommerce', verified: true },
    { name: 'Mailchimp Partner', logo: 'mailchimp', verified: true },
    { name: 'WordPress VIP', logo: 'wordpress', verified: true }
  ]
};

/**
 * AI & Thought Leadership Teaser
 */
export const frontPageAITeaser = {
  badge: 'AI-Ready Publishing',
  title: 'Built for the age of AI search',
  description: 'Our structured publishing systems are optimised for AI engines like ChatGPT, Perplexity, and Google SGE. Clean markup, schema.org metadata, and answer-first content help your site get discovered.',
  features: [
    {
      icon: Broadcast,
      title: 'AI-optimised markup',
      description: 'Semantic HTML and schema.org markup for maximum discoverability.'
    },
    {
      icon: Database,
      title: 'Structured content',
      description: 'Design tokens and pattern libraries ensure consistent, parseable content.'
    },
    {
      icon: Sparkle,
      title: 'Answer-first headings',
      description: 'Content architecture optimised for featured snippets and AI summaries.'
    }
  ],
  link: {
    text: 'Explore AI solutions',
    page: 'solutions/ai'
  }
};

/**
 * Latest Insights — Blog preview
 */
export const frontPageBlogPosts = [
  {
    title: 'LightSpeed\'s growth: building a team, shaping developers, and riding the AI wave',
    excerpt: 'Discover how LightSpeed has evolved, building a talented team while embracing AI technology.',
    image: 'https://images.unsplash.com/photo-1522071820081-009f0129c71c?w=800&q=80',
    category: 'Agency Life',
    date: 'Mar 15, 2026',
    readingTime: '6 min read',
    slug: 'lightspeed-growth-team-ai'
  },
  {
    title: 'A deep dive into LightSpeed\'s AI workflow',
    excerpt: 'Explore how we integrate AI tools into our development workflow to improve efficiency.',
    image: 'https://images.unsplash.com/photo-1677442136019-21780ecad995?w=800&q=80',
    category: 'Tutorials',
    date: 'Mar 11, 2026',
    readingTime: '8 min read',
    slug: 'deep-dive-ai-workflow'
  },
  {
    title: 'Tour Operator 2.1 release',
    excerpt: 'Announcing the latest release of our Tour Operator plugin with new features and improvements.',
    image: 'https://images.unsplash.com/photo-1488646953014-85cb44e25828?w=800&q=80',
    category: 'Industry News',
    date: 'Mar 3, 2026',
    readingTime: '5 min read',
    slug: 'tour-operator-2-1-release'
  }
];

/**
 * Final Call to Action
 */
export const frontPageFinalCTA = {
  title: 'Ready to build a better WordPress site?',
  description: 'Book a free consultation to discuss your project and discover how structured publishing can transform your digital presence.',
  primaryButton: {
    text: 'Book a consultation',
    page: 'contact'
  },
  secondaryButton: {
    text: 'Learn more',
    page: 'about'
  },
  benefits: [
    'Free systems audit & consultation',
    'WCAG 2.2 AA accessibility included',
    'Design tokens & pattern libraries',
    'Sub-second page load times',
    '22+ years WordPress expertise'
  ]
};