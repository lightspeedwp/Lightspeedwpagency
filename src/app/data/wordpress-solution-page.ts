/**
 * WordPress Solution Page Data
 * 
 * Mock data for the WordPress Solution page (WordPressSolutionTemplate).
 * All exports use lowercase "wordpress" to match template imports.
 */

import { Code, Layout, Settings, Shield, Globe, Database, Zap, Users, BarChart3, Award } from 'lucide-react';

export const wordpressSolutionHero = {
  title: "Enterprise WordPress Solutions",
  titleHighlight: "WordPress",
  tagline: "Scalable, secure, and high-performance WordPress development for ambitious brands.",
  description: "We build custom WordPress solutions that power the world's most demanding websites.",
  badge: { text: "WORDPRESS EXPERTS", icon: Code },
  primaryButton: { text: "Discuss Your Project", page: "contact" },
  secondaryButton: { text: "Our WordPress Work", page: "portfolio" }
};

export const wordpressSolutionOverview = {
  title: "WordPress by the Numbers",
  description: "Why the world's top brands choose WordPress for their digital presence.",
  stats: [
    {
      icon: Globe,
      value: "43%",
      label: "of the Web",
      description: "WordPress powers over 43% of all websites globally"
    },
    {
      icon: Users,
      value: "500M+",
      label: "Sites Built",
      description: "Over 500 million sites run on WordPress"
    },
    {
      icon: BarChart3,
      value: "99.9%",
      label: "Uptime",
      description: "Enterprise-grade reliability and performance"
    },
    {
      icon: Award,
      value: "60K+",
      label: "Free Plugins",
      description: "The largest plugin ecosystem in the world"
    }
  ]
};

export const wordpressSolutionFeatures = [
  {
    icon: Layout,
    title: "Full Site Editing (FSE)",
    description: "Modern block-based themes giving you complete control over your layout."
  },
  {
    icon: Settings,
    title: "Custom Functionality",
    description: "Extensible architecture allowing us to build any feature you can imagine."
  },
  {
    icon: Shield,
    title: "Enterprise Security",
    description: "Hardened implementations suitable for high-compliance industries."
  },
  {
    icon: Globe,
    title: "SEO Friendly",
    description: "Built-in features and structure that search engines love."
  },
  {
    icon: Database,
    title: "Data Ownership",
    description: "You own your data and content, free from platform lock-in."
  },
  {
    icon: Code,
    title: "Headless Capabilities",
    description: "Decoupled architectures using React/Next.js for ultimate performance."
  },
  {
    icon: Zap,
    title: "Performance Optimized",
    description: "Core Web Vitals optimization built into every project."
  },
  {
    icon: Users,
    title: "Multi-User Support",
    description: "Granular roles and permissions for teams of any size."
  }
];

export const wordpressSolutionUseCases = [
  {
    title: "Corporate Websites",
    description: "Enterprise-grade corporate sites with multi-language support, custom workflows, and advanced permissions.",
    icon: Globe,
    features: ["Multi-language support", "Custom workflows", "Role-based access"]
  },
  {
    title: "E-Commerce Platforms",
    description: "Full-featured online stores powered by WooCommerce with inventory management and payment processing.",
    icon: Database,
    features: ["WooCommerce integration", "Payment gateways", "Inventory management"]
  },
  {
    title: "Membership Sites",
    description: "Subscription-based platforms with gated content, user profiles, and recurring billing.",
    icon: Users,
    features: ["Content gating", "Recurring billing", "User profiles"]
  },
  {
    title: "Publishing Platforms",
    description: "High-traffic editorial sites with advanced content management, scheduling, and multi-author workflows.",
    icon: Layout,
    features: ["Multi-author support", "Editorial workflows", "SEO optimization"]
  }
];

export const wordpressSolutionPricing = {
  title: "WordPress Development Packages",
  description: "Transparent pricing for every stage of your WordPress journey.",
  packages: [
    {
      name: "Starter",
      description: "Perfect for small businesses getting started online.",
      price: "From $3,500",
      features: [
        "5-10 page WordPress site",
        "Mobile-responsive design",
        "Basic SEO setup",
        "Contact form integration",
        "30-day support"
      ],
      recommended: false
    },
    {
      name: "Professional",
      description: "Ideal for growing businesses that need advanced features.",
      price: "From $8,500",
      features: [
        "10-25 page WordPress site",
        "Custom theme development",
        "Advanced SEO strategy",
        "WooCommerce integration",
        "Performance optimization",
        "90-day support"
      ],
      recommended: true
    },
    {
      name: "Enterprise",
      description: "For large organizations requiring custom solutions.",
      price: "From $25,000",
      features: [
        "Unlimited pages",
        "Custom plugin development",
        "Headless WordPress option",
        "Multi-site configuration",
        "Dedicated project manager",
        "12-month support"
      ],
      recommended: false
    }
  ]
};

export const wordpressSolutionFAQs = [
  {
    question: "Why should I choose WordPress over other platforms?",
    answer: "WordPress powers over 43% of all websites, offers unmatched flexibility, and has the largest ecosystem of plugins and themes. It's open-source, SEO-friendly, and scales from small blogs to enterprise applications."
  },
  {
    question: "How long does a custom WordPress project take?",
    answer: "Timeline depends on complexity. A standard business site takes 4-8 weeks, while enterprise projects with custom functionality may take 12-20 weeks. We provide detailed timelines during the discovery phase."
  },
  {
    question: "Do you provide ongoing support after launch?",
    answer: "Yes, all packages include post-launch support. We also offer monthly maintenance plans that cover updates, security monitoring, backups, and performance optimization."
  },
  {
    question: "Can you migrate my existing site to WordPress?",
    answer: "Absolutely. We handle migrations from any platform including Squarespace, Wix, Drupal, and custom-built sites. We ensure zero downtime and complete content preservation."
  },
  {
    question: "Is WordPress secure for enterprise use?",
    answer: "Yes, with proper hardening. We implement security best practices including WAF protection, two-factor authentication, regular security audits, and automated malware scanning."
  },
  {
    question: "What is headless WordPress?",
    answer: "Headless WordPress uses WordPress as a content management backend while serving the frontend through React, Next.js, or other modern frameworks. This provides superior performance and flexibility."
  }
];

export const wordpressSolutionCTA = {
  title: "Ready to Scale with WordPress?",
  description: "Partner with an agency that knows the platform inside and out.",
  buttons: [
    { text: "Get a Free Quote", page: "contact" },
    { text: "View Our Work", page: "portfolio" }
  ]
};

export const wordpressSolutionServices = {
  title: "Our WordPress Capabilities",
  services: [
    "Custom Theme Development",
    "Plugin Development",
    "Headless WordPress",
    "Performance Optimization",
    "WordPress Multisite",
    "Migration to WordPress"
  ]
};
