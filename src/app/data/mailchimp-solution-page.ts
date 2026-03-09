/**
 * Mailchimp Solution Page Data
 * 
 * Mock data for the Mailchimp Solution page (MailchimpSolutionTemplate).
 */

import { Envelope, Lightning, Users, ChartBar, CheckCircle, GearSix, Crosshair, ArrowsClockwise, Shield, TrendUp, Stack } from '@phosphor-icons/react';

export const mailchimpSolutionHero = {
  title: "Mailchimp for WordPress",
  titleHighlight: "Mailchimp",
  description: "Seamlessly integrate your email marketing with your WordPress website and WooCommerce store. Automate workflows, sync contacts, and track performance all in one place.",
  subtitle: "Seamlessly integrate your email marketing with your WordPress website and WooCommerce store.",
  badge: { text: "EMAIL INTEGRATION", icon: Envelope },
  primaryButton: { text: "Connect Now", page: "contact" },
  cta: {
    primary: { text: "Get Integration", page: "contact" },
    secondary: { text: "View Pricing", page: "pricing" }
  }
};

export const mailchimpSolutionFeatures = {
  title: "Powerful Integration Features",
  features: [
    {
      icon: Users,
      title: "Sync Contacts",
      description: "Automatically sync WordPress users and WooCommerce customers to Mailchimp audiences."
    },
    {
      icon: Lightning,
      title: "Automated Workflows",
      description: "Trigger email series based on user actions, purchases, or sign-ups."
    },
    {
      icon: ChartBar,
      title: "E-commerce Data",
      description: "Send purchase data to Mailchimp for targeted product recommendations and ROI tracking."
    }
  ]
};

export const mailchimpSolutionBenefits = [
  "Increase subscriber growth with optimized forms",
  "Recover lost sales with abandoned cart emails",
  "Segment your audience based on purchase history",
  "Personalize content with merge tags"
];

/**
 * Why Mailchimp Section
 */
export const whyMailchimp = {
  title: "Why Mailchimp + WordPress?",
  description: "The most powerful email marketing combination for growing businesses",
  benefits: [
    {
      icon: Users,
      title: "Unified Customer Data",
      description: "Sync your WordPress users, WooCommerce customers, and form subscribers into a single Mailchimp audience for targeted campaigns."
    },
    {
      icon: Lightning,
      title: "Marketing Automation",
      description: "Set up abandoned cart emails, welcome series, post-purchase follow-ups, and re-engagement campaigns that run on autopilot."
    },
    {
      icon: ChartBar,
      title: "Revenue Attribution",
      description: "Track exactly how much revenue each email campaign generates with WooCommerce purchase data synced to Mailchimp."
    },
    {
      icon: Crosshair,
      title: "Advanced Segmentation",
      description: "Segment audiences by purchase history, browsing behaviour, location, and engagement level for hyper-targeted emails."
    }
  ]
};

/**
 * Integration Features (flat array for template grid)
 */
export const mailchimpFeatures = [
  {
    icon: Users,
    title: "Contact Sync",
    description: "Bidirectional sync keeps your Mailchimp audiences and WordPress user base perfectly aligned."
  },
  {
    icon: ArrowsClockwise,
    title: "WooCommerce Integration",
    description: "Sync products, orders, and customer data for powerful e-commerce email automation."
  },
  {
    icon: Stack,
    title: "Custom Sign-up Forms",
    description: "Beautiful, conversion-optimized sign-up forms that match your brand and integrate with the block editor."
  },
  {
    icon: Lightning,
    title: "Automated Campaigns",
    description: "Welcome emails, abandoned carts, post-purchase follow-ups, and win-back campaigns — all automated."
  },
  {
    icon: ChartBar,
    title: "Analytics Dashboard",
    description: "Track opens, clicks, revenue, and ROI directly in your WordPress dashboard without leaving your site."
  },
  {
    icon: Shield,
    title: "GDPR Compliance",
    description: "Built-in consent management, double opt-in, and easy unsubscribe to keep you compliant."
  }
];

/**
 * Integration Process Steps
 */
export const mailchimpProcess = [
  {
    step: 1,
    title: "Discovery & Audit",
    description: "We audit your current email setup, subscriber lists, and marketing goals to create a tailored integration plan."
  },
  {
    step: 2,
    title: "Account Setup",
    description: "Configure your Mailchimp account with proper audiences, tags, groups, and merge fields for your business."
  },
  {
    step: 3,
    title: "WordPress Integration",
    description: "Connect Mailchimp to your WordPress site with optimized plugins, custom forms, and API configuration."
  },
  {
    step: 4,
    title: "WooCommerce Sync",
    description: "Set up e-commerce tracking, product data sync, and customer purchase history integration."
  },
  {
    step: 5,
    title: "Automation Setup",
    description: "Build automated email workflows — welcome series, abandoned cart recovery, post-purchase follow-ups."
  },
  {
    step: 6,
    title: "Testing & Launch",
    description: "Thorough testing of all integrations, automations, and tracking before going live with monitoring."
  }
];

/**
 * Pricing Packages
 */
export const mailchimpPackages = [
  {
    name: "Starter",
    tagline: "Basic integration for small sites",
    price: {
      display: "$999",
      period: "one-time"
    },
    description: "Essential Mailchimp integration with WordPress for basic email marketing needs.",
    features: [
      "Mailchimp account setup",
      "WordPress plugin configuration",
      "1 sign-up form design",
      "Welcome email automation",
      "Basic audience segmentation",
      "30-day post-launch support"
    ],
    cta: { text: "Request a Systems Audit", page: "contact" },
    popular: false
  },
  {
    name: "Professional",
    tagline: "Full integration for growing businesses",
    price: {
      display: "$2,499",
      period: "one-time"
    },
    description: "Comprehensive Mailchimp + WooCommerce integration with advanced automation workflows.",
    features: [
      "Everything in Starter",
      "WooCommerce e-commerce tracking",
      "3 custom sign-up forms",
      "Abandoned cart automation",
      "Post-purchase follow-up series",
      "Advanced audience segmentation",
      "Revenue attribution setup",
      "90-day post-launch support"
    ],
    cta: { text: "Request a Systems Audit", page: "contact" },
    popular: true
  },
  {
    name: "Enterprise",
    tagline: "Custom solution for large operations",
    price: {
      display: "Custom",
      period: "quote-based"
    },
    description: "Tailored integration with custom API work, advanced automation, and dedicated support.",
    features: [
      "Everything in Professional",
      "Custom API integrations",
      "Unlimited sign-up forms",
      "Advanced workflow automation",
      "Custom reporting dashboard",
      "Multi-store support",
      "Dedicated account manager",
      "12-month priority support"
    ],
    cta: { text: "Contact Sales", page: "contact" },
    popular: false
  }
];

/**
 * Case Study
 */
export const mailchimpCaseStudy = {
  title: "Success Story: E-commerce Revenue Growth",
  quote: "LSX Design's Mailchimp integration transformed our email marketing. Abandoned cart emails alone recovered $15,000 in the first month. The automated workflows save us 20 hours per week.",
  author: "Sarah Mitchell",
  role: "Marketing Director",
  client: "Urban Retail Co.",
  results: [
    { metric: "+340%", label: "Email Revenue" },
    { metric: "$15K", label: "Recovered Sales/Month" },
    { metric: "20hrs", label: "Saved Weekly" },
    { metric: "45%", label: "Open Rate" }
  ]
};

/**
 * FAQ Section
 */
export const mailchimpFAQs = [
  {
    question: "Do I need a Mailchimp account?",
    answer: "Yes, you'll need a Mailchimp account. We can help you set one up or optimize your existing account as part of the integration."
  },
  {
    question: "Will this work with WooCommerce?",
    answer: "Absolutely. Our Professional and Enterprise packages include full WooCommerce e-commerce tracking, product sync, and purchase-based automation."
  },
  {
    question: "How long does the integration take?",
    answer: "Starter integrations typically take 1-2 weeks. Professional takes 2-4 weeks. Enterprise timelines are discussed during the discovery phase."
  },
  {
    question: "Can you migrate from another email platform?",
    answer: "Yes, we can migrate your subscriber lists, segments, and automations from platforms like Constant Contact, ConvertKit, or ActiveCampaign."
  },
  {
    question: "What about GDPR compliance?",
    answer: "All our integrations include proper consent management, double opt-in configuration, and easy unsubscribe functionality to ensure GDPR compliance."
  }
];

/**
 * CTA Section
 */
export const mailchimpCTA = {
  title: "Automate and Govern Your Email Marketing",
  description: "We handle the technical integration so your team can focus on messages that convert. Expert Mailchimp setup for WordPress and WooCommerce.",
  button: { text: "Get Integrated", page: "contact" },
  buttons: [
    { text: "Start Your Integration", page: "contact" },
    { text: "View Pricing", page: "pricing" }
  ]
};

export const mailchimpSolutionCTA = mailchimpCTA;