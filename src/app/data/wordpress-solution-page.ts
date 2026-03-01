/**
 * WordPress Solution Page Data
 * 
 * Content for the WordPress Solution template.
 */

import { Layout, Smartphone, Zap, Search, Lock, Edit3, Globe, BarChart, Server, Database } from 'lucide-react';

export const wordpressSolutionHero = {
  title: "Enterprise-Grade WordPress Solutions",
  titleHighlight: "WordPress Solutions",
  tagline: "Scalable, secure, and high-performance WordPress websites built for growth.",
  description: "We build custom WordPress websites that are fast, secure, and easy to manage.",
  badge: { text: "WORDPRESS EXPERTS", icon: Layout },
  primaryButton: { text: "Start Project", page: "contact" },
  secondaryButton: { text: "Our Work", page: "portfolio-archive" }
};

export const wordpressSolutionOverview = {
  title: "WordPress by the Numbers",
  description: "Why WordPress is the world's most popular content management system.",
  stats: [
    {
      icon: Globe,
      value: "43%",
      label: "Market Share",
      description: "Of the entire web is powered by WordPress"
    },
    {
      icon: BarChart,
      value: "60%",
      label: "CMS Market",
      description: "WordPress dominates the CMS market share"
    },
    {
      icon: Server,
      value: "100%",
      label: "Ownership",
      description: "You own your data and content completely"
    },
    {
      icon: Database,
      value: "50k+",
      label: "Plugins",
      description: "Extensible ecosystem for any functionality"
    }
  ]
};

export const wordpressSolutionFeatures = [
  {
    icon: Edit3,
    title: "Full Site Editing",
    description: "Equip your team with the block editor — patterns, templates, and guardrails — so they manage content without code."
  },
  {
    icon: Smartphone,
    title: "Responsive By Design",
    description: "Mobile-first approach ensuring your site looks perfect on every device."
  },
  {
    icon: Zap,
    title: "Performance Optimized",
    description: "Built for speed with core web vitals in mind. Fast loading = better SEO."
  },
  {
    icon: Search,
    title: "SEO Ready",
    description: "Clean code structure and semantic markup that search engines love."
  },
  {
    icon: Lock,
    title: "Secure Architecture",
    description: "Hardened security practices to protect your data and your users."
  },
  {
    icon: Layout,
    title: "Custom Block Themes",
    description: "Bespoke designs implemented as lightweight, maintainable block themes."
  }
];

export const wordpressSolutionUseCases = [
  {
    title: "Corporate Websites",
    description: "Professional digital presence for enterprises and corporations.",
    industries: ["Finance", "Technology", "Healthcare"],
    features: ["Custom Branding", "Team Directories", "Investor Relations"]
  },
  {
    title: "E-Commerce Stores",
    description: "Scalable online stores powered by WooCommerce.",
    industries: ["Retail", "Fashion", "B2B"],
    features: ["Product Catalogs", "Payment Integration", "Inventory Management"]
  },
  {
    title: "Content Publishers",
    description: "High-traffic news and media publications.",
    industries: ["Media", "Publishing", "Education"],
    features: ["Ad Integration", "Subscription Paywalls", "Advanced Editorial Tools"]
  },
  {
    title: "SaaS Marketing Sites",
    description: "Conversion-focused websites for software companies.",
    industries: ["SaaS", "Startups", "Mobile Apps"],
    features: ["Pricing Tables", "Integration with CRM", "Lead Generation"]
  }
];

export const wordpressSolutionPricing = {
  title: "Development Packages",
  description: "Transparent pricing for your WordPress project.",
  packages: [
    {
      name: "Starter",
      description: "Perfect for small businesses",
      price: "$2,500",
      features: ["Custom Theme", "5 Pages", "Contact Form", "Basic SEO", "Mobile Responsive"],
      recommended: false
    },
    {
      name: "Business",
      description: "For growing companies",
      price: "$5,000",
      features: ["Custom Theme", "10 Pages", "Advanced Forms", "Performance Optimization", "Analytics Integration", "CMS Training"],
      recommended: true
    },
    {
      name: "Enterprise",
      description: "Large scale applications",
      price: "Custom",
      features: ["Custom Theme", "Unlimited Pages", "Custom Functionality", "API Integrations", "Security Hardening", "Priority Support"],
      recommended: false
    }
  ]
};

export const wordpressSolutionFAQs = [
  {
    question: "Why should I choose WordPress?",
    answer: "WordPress is flexible, scalable, and easy to use. It powers over 40% of the web and offers a vast ecosystem of plugins and themes."
  },
  {
    question: "Is WordPress secure?",
    answer: "Yes, when properly maintained. We implement best security practices, including regular updates, secure hosting, and security plugins to keep your site safe."
  },
  {
    question: "Can I manage the content myself?",
    answer: "Absolutely. WordPress is designed for content management. We provide training so you can easily update text, images, and create new pages."
  },
  {
    question: "Do you offer ongoing support?",
    answer: "Yes, we offer maintenance packages to ensure your site remains secure, fast, and up-to-date with the latest WordPress versions."
  }
];

export const wordpressSolutionCTA = {
  title: "Ready to Upgrade Your Web Presence?",
  description: "Join hundreds of successful businesses powering their growth with our WordPress solutions.",
  buttons: [
    { text: "Get a Quote", page: "contact" },
    { text: "View Portfolio", page: "portfolio-archive" }
  ]
};