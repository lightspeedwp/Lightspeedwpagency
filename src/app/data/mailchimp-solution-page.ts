/**
 * Mailchimp Solution Page Data
 * 
 * Dedicated page data for Mailchimp integration solution.
 * Real content based on LSX solution offerings.
 * 
 * WordPress Mapping: Solution detail page
 */

import { Mail, Users, BarChart3, Zap, Target, TrendingUp } from 'lucide-react';

/**
 * Hero Section Data
 */
export const mailchimpSolutionHero = {
  badge: {
    icon: Mail,
    text: 'EMAIL MARKETING'
  },
  title: 'Mailchimp Integration Solutions',
  titleHighlight: 'Mailchimp',
  description: 'Powerful email marketing integration for your WordPress website. Build your audience, automate campaigns, and drive sales with seamless Mailchimp integration tailored to your business needs.',
  cta: {
    primary: {
      text: 'Get Started',
      page: 'contact' as const
    },
    secondary: {
      text: 'View Pricing',
      page: 'pricing' as const
    }
  }
};

/**
 * Why Mailchimp Section
 */
export const whyMailchimp = {
  title: 'Why Mailchimp?',
  description: 'Industry-leading email marketing platform trusted by millions',
  benefits: [
    {
      icon: Users,
      title: 'Grow Your Audience',
      description: 'Beautiful signup forms and landing pages that convert visitors into subscribers. Build a targeted email list that drives results.'
    },
    {
      icon: Zap,
      title: 'Marketing Automation',
      description: 'Automate your email campaigns with behavioral triggers, drip sequences, and customer journey mapping. Save time while staying engaged.'
    },
    {
      icon: BarChart3,
      title: 'Data-Driven Insights',
      description: 'Track opens, clicks, purchases, and ROI. Make informed decisions with comprehensive analytics and reporting.'
    },
    {
      icon: Target,
      title: 'Advanced Segmentation',
      description: 'Send targeted campaigns based on customer behavior, purchase history, demographics, and engagement levels.'
    }
  ]
};

/**
 * Integration Features
 */
export const mailchimpFeatures = [
  {
    icon: Mail,
    title: 'Custom Signup Forms',
    description: 'We create beautiful, on-brand signup forms integrated seamlessly into your website design. Mobile-responsive and conversion-optimized.'
  },
  {
    icon: Zap,
    title: 'WooCommerce Integration',
    description: 'Sync customers, orders, and products. Send abandoned cart emails, product recommendations, and post-purchase follow-ups automatically.'
  },
  {
    icon: Users,
    title: 'Advanced List Management',
    description: 'Automatic list segmentation based on user behavior, purchase history, and website interactions. Keep your lists clean and targeted.'
  },
  {
    icon: BarChart3,
    title: 'Campaign Automation',
    description: 'Set up welcome series, re-engagement campaigns, birthday emails, and more. We build the automations that drive revenue.'
  },
  {
    icon: Target,
    title: 'Popup & Exit-Intent',
    description: 'Strategic popup forms that capture emails without annoying visitors. Exit-intent technology to convert abandoning visitors.'
  },
  {
    icon: TrendingUp,
    title: 'Performance Optimization',
    description: 'A/B testing, deliverability optimization, and ongoing campaign analysis to continuously improve your email marketing ROI.'
  }
];

/**
 * Our Integration Process
 */
export const mailchimpProcess = [
  {
    step: 1,
    title: 'Strategy & Planning',
    description: 'We analyze your business goals, audience, and current marketing efforts. Define clear objectives for your email marketing.'
  },
  {
    step: 2,
    title: 'Technical Setup',
    description: 'Connect Mailchimp to your WordPress site, configure API integration, and set up tracking. WooCommerce integration if needed.'
  },
  {
    step: 3,
    title: 'Form Design & Implementation',
    description: 'Create beautiful signup forms that match your brand. Strategic placement for maximum conversions.'
  },
  {
    step: 4,
    title: 'Automation Configuration',
    description: 'Build automated campaigns including welcome series, abandoned cart recovery, and customer nurturing sequences.'
  },
  {
    step: 5,
    title: 'Training & Launch',
    description: 'Train your team on Mailchimp best practices. Launch your email marketing with confidence.'
  },
  {
    step: 6,
    title: 'Ongoing Optimization',
    description: 'Regular performance reviews, A/B testing, and strategy refinement to maximize your email marketing ROI.'
  }
];

/**
 * Integration Packages
 */
export const mailchimpPackages = [
  {
    name: 'Essential',
    tagline: 'Perfect for getting started',
    price: {
      display: '$1,200',
      value: 1200,
      period: 'one-time'
    },
    description: 'Basic Mailchimp integration to start building your email list',
    features: [
      'Mailchimp account setup',
      '1-2 custom signup forms',
      'Basic list integration',
      'Welcome email automation',
      'Mobile-responsive design',
      '30 days email support'
    ],
    cta: {
      text: 'Get Started',
      page: 'contact' as const
    },
    popular: false
  },
  {
    name: 'Professional',
    tagline: 'Complete email marketing solution',
    price: {
      display: '$2,500',
      value: 2500,
      period: 'one-time'
    },
    description: 'Full-featured integration with automation and WooCommerce',
    features: [
      'Everything in Essential',
      'WooCommerce integration',
      'Abandoned cart recovery',
      '3-5 automated campaigns',
      'Advanced segmentation',
      'Popup & exit-intent forms',
      'Performance tracking setup',
      '60 days email support'
    ],
    cta: {
      text: 'Get Started',
      page: 'contact' as const
    },
    popular: true
  },
  {
    name: 'Enterprise',
    tagline: 'Full-service email marketing',
    price: {
      display: '$5,000+',
      value: 5000,
      period: 'one-time'
    },
    description: 'Complete email marketing management and optimization',
    features: [
      'Everything in Professional',
      'Custom API integrations',
      'Multi-list management',
      'Advanced automation',
      'Custom template design',
      'A/B testing setup',
      'Monthly strategy calls',
      '90 days priority support'
    ],
    cta: {
      text: 'Contact Sales',
      page: 'contact' as const
    },
    popular: false
  }
];

/**
 * Case Study / Success Story
 */
export const mailchimpCaseStudy = {
  title: 'Real Results from Mailchimp Integration',
  client: 'African Safari Tours',
  quote: 'Since implementing Mailchimp with automated campaigns, our email-driven bookings increased by 145% in just 3 months.',
  author: 'Sarah Thompson',
  role: 'Marketing Director',
  results: [
    {
      metric: '145%',
      label: 'Increase in email bookings'
    },
    {
      metric: '32%',
      label: 'Open rate improvement'
    },
    {
      metric: '8.5%',
      label: 'Cart recovery rate'
    },
    {
      metric: '$47K',
      label: 'Additional revenue (3 months)'
    }
  ]
};

/**
 * FAQ Data
 */
export const mailchimpFAQs = [
  {
    question: 'Do I need a Mailchimp account?',
    answer: 'Yes, you\'ll need a Mailchimp account. We can help you set one up or work with your existing account. Mailchimp offers a free plan for up to 500 subscribers.'
  },
  {
    question: 'Will it work with WooCommerce?',
    answer: 'Yes, our Professional and Enterprise packages include full WooCommerce integration. Sync customers, send abandoned cart emails, and automate product recommendations.'
  },
  {
    question: 'Can I design my own email templates?',
    answer: 'You can use Mailchimp\'s template builder to design emails. Enterprise packages include custom template design services if needed.'
  },
  {
    question: 'How long does implementation take?',
    answer: 'Essential packages typically take 1-2 weeks. Professional packages take 2-4 weeks. Enterprise implementations take 4-6 weeks depending on complexity.'
  },
  {
    question: 'Do you provide training?',
    answer: 'Yes, all packages include training on using Mailchimp and managing your campaigns. We provide documentation and video tutorials.'
  },
  {
    question: 'What about ongoing support?',
    answer: 'All packages include email support for the specified duration. We also offer monthly retainer packages for ongoing email marketing management.'
  }
];

/**
 * CTA Section Data
 */
export const mailchimpCTA = {
  title: 'Ready to Grow Your Email List?',
  description: 'Let\'s build an email marketing strategy that drives real results. Book a free consultation to discuss your Mailchimp integration.',
  buttons: [
    {
      text: 'Book Free Consultation',
      page: 'contact' as const
    },
    {
      text: 'View All Solutions',
      page: 'solutions' as const
    }
  ]
};
