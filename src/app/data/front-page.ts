/**
 * Front Page Data
 * 
 * Homepage content for LightSpeed WordPress Agency.
 * Matches the design layout: Hero → Why Choose → Services → Projects → Stats → CTA → Process → Testimonials → Blog → FAQ → CTA
 * 
 * **Content Source:** https://lightspeedwp.agency
 * **Last Updated:** 2025-02-14
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
  Rocket
} from '@phosphor-icons/react';

/**
 * Hero Section
 */
export const frontPageHero = {
  badge: 'WordPress & WooCommerce Experts Since 2003',
  title: 'Structured publishing systems for WordPress',
  description: 'We engineer governed WordPress systems — tokenised design, accessible markup, and measurable performance — so your editors publish with confidence and your site stays coherent at scale.',
  primaryButton: {
    text: 'Request a Systems Audit',
    page: 'contact'
  },
  secondaryButton: {
    text: 'View Our Work',
    page: 'portfolio'
  },
  stats: [
    { value: '130+', label: 'Projects Delivered' },
    { value: '100%', label: 'Client Satisfaction' },
    { value: 'WCAG AA', label: 'Accessible' }
  ]
};

/**
 * Why Choose LightSpeed Section — 6 features in 3-column grid
 */
export const frontPageWhyChoose = {
  title: 'Why choose LightSpeed?',
  description: 'We bring 22+ years of WordPress expertise, a certified WooCommerce partnership, and a passion for building sites that perform.',
  features: [
    {
      icon: Lightning,
      title: 'Fastest development',
      description: 'Streamlined processes and modern tooling let us deliver high-quality WordPress sites faster than industry averages.'
    },
    {
      icon: Palette,
      title: 'WordPress-first design',
      description: 'Every design is built for WordPress Full Site Editing — no compromises, no workarounds, just native block themes.'
    },
    {
      icon: Users,
      title: '20+ years experience',
      description: 'Our senior developers average over a decade of WordPress expertise across hundreds of projects.'
    },
    {
      icon: Wrench,
      title: 'Customisable tools',
      description: 'We build with reusable patterns, design tokens, and component libraries so your site is easy to maintain and extend.'
    },
    {
      icon: Eye,
      title: 'WCAG accessible',
      description: 'Every site meets WCAG 2.1 AA standards by default — because the web should be usable by everyone.'
    },
    {
      icon: SquaresFour,
      title: 'Design system experts',
      description: 'From tokens to templates, we build scalable design systems that keep your brand consistent across every page.'
    }
  ]
};

/**
 * Services Section — 3 featured services with images
 */
export const frontPageServices = {
  title: 'Our services',
  description: 'Comprehensive WordPress and WooCommerce solutions tailored to your business goals.',
  items: [
    {
      icon: Stack,
      title: 'WordPress block themes',
      description: 'Custom block themes built on the WordPress Full Site Editing framework with modern design patterns and reusable components.',
      image: 'https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=800&q=80',
      link: 'development-service'
    },
    {
      icon: ShoppingCart,
      title: 'WooCommerce solutions',
      description: 'Powerful online stores with custom payment gateways, subscription management, and seamless checkout experiences.',
      image: 'https://images.unsplash.com/photo-1634084462412-b54873c0a56d?w=800&q=80',
      link: 'woocommerce-solution'
    },
    {
      icon: Code,
      title: 'Design system solutions',
      description: 'Scalable design systems with reusable patterns, CSS tokens, and component libraries for consistent branding across your digital estate.',
      image: 'https://images.unsplash.com/photo-1583932692875-a42450d50acf?w=800&q=80',
      link: 'design-service'
    }
  ]
};

/**
 * Featured Projects — 3 project cards
 */
export const frontPageProjects = {
  title: 'Featured projects',
  description: 'Recent work showcasing our WordPress and WooCommerce expertise.',
  projects: [
    {
      id: 'armd-digital',
      title: 'ARMD Digital',
      category: 'E-Commerce',
      description: 'Custom WooCommerce platform with partner commission system for an email security company.',
      image: 'https://images.unsplash.com/photo-1563986768609-322da13575f3?w=800&q=80',
      slug: 'armd-digital'
    },
    {
      id: 'safari-destinations',
      title: 'Safari Destinations',
      category: 'Travel & Tourism',
      description: 'Tour booking platform with WooCommerce integration, increasing online bookings by 40%.',
      image: 'https://images.unsplash.com/photo-1516426122078-c23e76319801?w=800&q=80',
      slug: 'safari-destinations'
    },
    {
      id: 'green-earth',
      title: 'Green Earth Foundation',
      category: 'Non-Profit',
      description: 'Accessible block theme for a conservation charity, managed effortlessly by non-technical staff.',
      image: 'https://images.unsplash.com/photo-1497436072909-60f360e1d4b1?w=800&q=80',
      slug: 'green-earth'
    }
  ],
  cta: {
    text: 'View All Projects',
    page: 'portfolio'
  }
};

/**
 * Proven Track Record — 4 stats
 */
export const frontPageStats = [
  { number: '500+', label: 'Websites Launched', description: 'WordPress sites built and maintained since 2003' },
  { number: '15+', label: 'Years Average Experience', description: 'Senior team with deep WordPress expertise' },
  { number: '10+', label: 'Enterprise Clients', description: 'Trusted by organisations worldwide' },
  { number: '98%', label: 'Client Retention', description: 'Long-term partnerships built on results' }
];

/**
 * Mid-page CTA — "WordPress Experts You Can Trust"
 */
export const frontPageMidCTA = {
  title: 'WordPress experts you can trust',
  description: 'From startups to enterprise, we partner with businesses to build WordPress solutions that perform, scale, and convert.',
  primaryButton: {
    text: 'Request a Systems Audit',
    page: 'contact'
  }
};

/**
 * How We Work — 4 process steps
 */
export const frontPageProcess = {
  title: 'How we work',
  description: 'A proven process refined over 22 years of WordPress development.',
  steps: [
    {
      step: 1,
      icon: MagnifyingGlass,
      title: 'Discover',
      description: 'We learn about your business, goals, and audience to define the right approach.'
    },
    {
      step: 2,
      icon: SquaresFour,
      title: 'Ecosystem',
      description: 'We map your WordPress ecosystem — themes, plugins, hosting, and integrations.'
    },
    {
      step: 3,
      icon: Rocket,
      title: 'Development',
      description: 'Our senior developers build your site using modern block-theme architecture.'
    },
    {
      step: 4,
      icon: Headphones,
      title: 'Support',
      description: 'Ongoing maintenance, security updates, and performance monitoring post-launch.'
    }
  ]
};

/**
 * Testimonials — 3 client quotes
 */
export const frontPageTestimonials = [
  {
    quote: 'The team at LightSpeed was always very professional and innovative, and their expertise in coding was invaluable to our project. I highly recommend LightSpeed.',
    author: 'Anthony Rodinis',
    role: 'Operations Manager',
    company: 'ARMD Digital',
    rating: 5
  },
  {
    quote: 'Ashley and the team at LightSpeed are a true global leader in WooCommerce and WordPress space. Their dedication to WordPress and attention to detail is evident in their efforts.',
    author: 'Ross Spadaro',
    role: 'Account Manager',
    company: 'Automattic',
    rating: 5
  },
  {
    quote: 'The LightSpeed team is kind, diligent & always ready to assist. We are grateful to have them as part of our extended team, supporting us in maintaining & evolving our WordPress website.',
    author: 'Jenna Laughton',
    role: 'Marketing Ops Specialist',
    company: 'Client Company',
    rating: 5
  }
];

/**
 * Latest Insights — 3 blog posts
 */
export const frontPageBlogPosts = [
  {
    title: 'LightSpeed\'s Growth: Building a Team, Shaping Developers, and Riding the AI Wave',
    excerpt: 'Discover how LightSpeed has evolved, building a talented team while embracing AI technology.',
    image: 'https://images.unsplash.com/photo-1522071820081-009f0129c71c?w=800&q=80',
    category: 'Agency Life',
    date: 'Sep 15, 2025',
    readingTime: '6 min read',
    slug: 'lightspeed-growth-team-ai'
  },
  {
    title: 'A Deep Dive into LightSpeed\'s AI Workflow',
    excerpt: 'Explore how we integrate AI tools into our development workflow to improve efficiency.',
    image: 'https://images.unsplash.com/photo-1677442136019-21780ecad995?w=800&q=80',
    category: 'Tutorials',
    date: 'Sep 11, 2025',
    readingTime: '8 min read',
    slug: 'deep-dive-ai-workflow'
  },
  {
    title: 'Tour Operator 2.1 Release',
    excerpt: 'Announcing the latest release of our Tour Operator plugin with new features and improvements.',
    image: 'https://images.unsplash.com/photo-1488646953014-85cb44e25828?w=800&q=80',
    category: 'Industry News',
    date: 'Sep 3, 2025',
    readingTime: '5 min read',
    slug: 'tour-operator-2-1-release'
  }
];

/**
 * Common Questions — homepage FAQs
 */
export const frontPageFAQs = [
  {
    question: 'What types of WordPress sites does LightSpeed build?',
    answer: 'We build custom WordPress block themes, WooCommerce stores, membership sites, LMS platforms, directory sites, and more. Every site uses modern Full Site Editing architecture for maximum flexibility.'
  },
  {
    question: 'How long does a typical WordPress project take?',
    answer: 'Project timelines vary based on scope. A standard business site takes 6-10 weeks, while complex WooCommerce or enterprise projects may take 12-16 weeks. We provide detailed timelines during our discovery phase.'
  },
  {
    question: 'Do you provide ongoing support after launch?',
    answer: 'Yes. We offer managed WordPress hosting, security monitoring, performance optimisation, and content support through our monthly maintenance plans. Most clients stay with us for years.'
  },
  {
    question: 'Are your websites WCAG accessible?',
    answer: 'Absolutely. Every site we build meets WCAG 2.1 AA compliance standards by default — including keyboard navigation, screen reader support, proper heading hierarchy, and sufficient colour contrast.'
  },
  {
    question: 'What is a WordPress block theme?',
    answer: 'A block theme is the modern way to build WordPress sites using the Full Site Editing (FSE) framework. It uses reusable blocks, patterns, and templates that give you complete control over your site\'s design without touching code.'
  }
];

/**
 * Bottom CTA
 */
export const frontPageBottomCTA = {
  title: 'Ready to Build Better WordPress Sites?',
  description: 'Let\'s discuss your project and how LightSpeed can help you achieve your digital goals.',
  primaryButton: {
    text: 'Request a Systems Audit',
    page: 'contact'
  },
  secondaryButton: {
    text: 'View Pricing',
    page: 'pricing'
  }
};