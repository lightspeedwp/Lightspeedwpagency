/**
 * WordPress Solution Page Data
 * 
 * Mock data for the WordPress Solution page (WordPressSolutionTemplate).
 */

import { Code, Layout, Settings, Shield, Globe, Database } from 'lucide-react';

export const wordPressSolutionHero = {
  title: "Enterprise WordPress Solutions",
  subtitle: "Scalable, secure, and high-performance WordPress development for ambitious brands.",
  badge: { text: "WORDPRESS EXPERTS", icon: Code },
  primaryButton: { text: "Discuss Your Project", page: "contact" },
  secondaryButton: { text: "Our WordPress Work", page: "portfolio" }
};

export const wordPressSolutionFeatures = {
  title: "Why WordPress?",
  description: "Powering over 40% of the web, WordPress is the most versatile CMS available.",
  items: [
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
    }
  ]
};

export const wordPressSolutionServices = {
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

export const wordPressSolutionCTA = {
  title: "Ready to Scale with WordPress?",
  description: "Partner with an agency that knows the platform inside and out.",
  button: { text: "Get a Quote", page: "contact" }
};
