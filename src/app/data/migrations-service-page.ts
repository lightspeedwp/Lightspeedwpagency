/**
 * Migrations Service Page Data
 * 
 * Mock data for the Migrations Service page (MigrationsServiceTemplate).
 */

import { 
  RefreshCw, 
  Database, 
  Layers, 
  CheckCircle, 
  Shield, 
  Zap, 
  Search, 
  Globe,
  Server,
  FileText,
  ShoppingCart
} from 'lucide-react';

export const migrationsHero = {
  title: "Seamless Website Migrations",
  titleHighlight: "Zero Downtime",
  description: "Move your site to WordPress or a new host with zero data loss and zero downtime. We handle complex migrations from any platform.",
  badge: { text: "PLATFORM MIGRATION", icon: RefreshCw },
  cta: {
    primary: { text: "Plan Your Migration", page: "contact" },
    secondary: { text: "View Case Study", page: "portfolio-archive" }
  }
};

export const whyMigrateWithLSX = {
  title: "Why Trust Us With Your Data?",
  description: "We've successfully migrated over 500 websites with a 100% success rate.",
  benefits: [
    {
      icon: Database,
      title: "Data Integrity Guarantee",
      description: "We ensure every post, image, user, and order is transferred correctly with zero data loss."
    },
    {
      icon: Layers,
      title: "SEO Preservation",
      description: "Comprehensive 301 redirect mapping to maintain your search rankings and traffic."
    },
    {
      icon: CheckCircle,
      title: "Zero Downtime",
      description: "We work on a staging environment and switch over instantly, so your business never stops."
    },
    {
      icon: Shield,
      title: "Security Hardening",
      description: "We don't just move your site; we secure it with enterprise-grade protection during the process."
    }
  ]
};

export const migrationServices = [
  {
    icon: RefreshCw,
    title: "Platform to WordPress",
    description: "Move from Drupal, Joomla, Wix, Squarespace, or Shopify to a scalable WordPress block theme."
  },
  {
    icon: Server,
    title: "Host Migration",
    description: "Seamlessly transfer your existing WordPress site to a new, faster hosting provider."
  },
  {
    icon: ShoppingCart,
    title: "eCommerce Replatforming",
    description: "Migrate products, customers, and orders from Shopify or Magento to WooCommerce."
  },
  {
    icon: Globe,
    title: "Multisite Consolidation",
    description: "Merge multiple WordPress sites into a single network or consolidate content."
  },
  {
    icon: FileText,
    title: "Content Migration",
    description: "Automated and manual transfer of large content archives with formatting preservation."
  },
  {
    icon: Search,
    title: "SEO Migration",
    description: "Technical SEO migration including schema, metadata, and URL structure optimization."
  }
];

export const migrationProcess = [
  { 
    step: "01", 
    title: "Analysis & Audit", 
    description: "We review your current site structure, data, and SEO to create a detailed migration plan." 
  },
  { 
    step: "02", 
    title: "Backup & Staging", 
    description: "We secure a full backup and set up a staging environment to ensure your live site stays up." 
  },
  { 
    step: "03", 
    title: "Data Transfer", 
    description: "We migrate all content, users, media, and metadata to the new WordPress environment." 
  },
  { 
    step: "04", 
    title: "Testing & QA", 
    description: "Rigorous testing of links, forms, functionality, and mobile responsiveness." 
  },
  { 
    step: "05", 
    title: "Launch & Training", 
    description: "DNS update for instant cutover, followed by team training on the new system." 
  }
];

export const supportedPlatforms = {
  title: "We Migrate From Anywhere",
  description: "No matter what platform you're currently on, we can move you to WordPress.",
  platforms: [
    { name: "Drupal", description: "Complex CMS migration preserving taxonomy and content types." },
    { name: "Joomla", description: "Secure transfer of articles, users, and extensions." },
    { name: "Shopify", description: "Product, customer, and order migration to WooCommerce." },
    { name: "Magento", description: "Enterprise eCommerce migration with full data integrity." },
    { name: "Wix", description: "Escape the closed ecosystem with full content extraction." },
    { name: "Squarespace", description: "Move your portfolio and content to a flexible platform." },
    { name: "HubSpot", description: "Migrate blogs and landing pages to WordPress blocks." },
    { name: "Custom HTML", description: "Modernize static sites into dynamic WordPress themes." }
  ]
};

export const migrationCaseStudy = {
  title: "Migrating 50,000 Products with Zero Downtime",
  quote: "LSX Design handled our massive migration from Magento to WooCommerce flawlessly. We didn't lose a single order.",
  author: "Sarah Jenkins",
  role: "CTO",
  client: "TechGear Pro",
  results: [
    { metric: "100%", label: "Data Integrity" },
    { metric: "0", label: "Downtime Minutes" },
    { metric: "40%", label: "Speed Increase" },
    { metric: "2x", label: "Conversion Rate" }
  ]
};

export const migrationsFAQs = [
  {
    question: "Will my website go down during migration?",
    answer: "No. We perform all migration work on a staging server while your live site remains fully operational. We only switch over when the new site is perfect, resulting in zero or near-zero downtime."
  },
  {
    question: "Will I lose my Google rankings?",
    answer: "We prioritize SEO preservation. We create a comprehensive 301 redirect map to ensure all old URLs point to their new counterparts, preserving your search engine authority and traffic."
  },
  {
    question: "Can you migrate my WooCommerce store?",
    answer: "Yes, we specialize in eCommerce migrations. We transfer products, customers, orders, subscriptions, and even passwords (where supported), ensuring a seamless transition for your store."
  },
  {
    question: "How long does a migration take?",
    answer: "Timeline depends on complexity. A simple blog migration might take 2-3 weeks, while a complex eCommerce replatforming could take 8-12 weeks including design and testing."
  }
];

export const migrationsCTA = {
  title: "Ready to Move to a Better Platform?",
  description: "Experience the freedom, flexibility, and power of WordPress with a professional migration.",
  buttons: [
    { text: "Start Migration", page: "contact" },
    { text: "Talk to an Expert", page: "contact" }
  ]
};

/**
 * Related Services
 *
 * Cross-links shown in the RelatedServicesGrid pattern before the CTA.
 */
export const migrationsRelatedServices = [
  {
    title: 'Hosting & Infrastructure',
    description: 'Enterprise-grade WordPress hosting optimised for speed, security and uptime.',
    page: 'hosting',
  },
  {
    title: 'Security Hardening',
    description: 'Proactive threat monitoring, malware removal and firewall management.',
    page: 'security',
  },
  {
    title: 'Performance Optimisation',
    description: 'Core Web Vitals tuning, caching strategies and image optimisation.',
    page: 'performance',
  },
];