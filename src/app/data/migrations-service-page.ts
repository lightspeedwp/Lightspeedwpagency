/**
 * Migrations Service Page Data
 * 
 * Mock data for the Migrations Service page (MigrationsServiceTemplate).
 */

import { RefreshCw, Database, Layers, CheckCircle, ArrowRightCircle } from 'lucide-react';

export const migrationsServiceHero = {
  title: "Seamless Website Migrations",
  subtitle: "Move your site to WordPress or a new host with zero data loss and zero downtime.",
  badge: { text: "PLATFORM MIGRATION", icon: RefreshCw },
  primaryButton: { text: "Plan Your Migration", page: "contact" }
};

export const migrationsServicePlatforms = {
  title: "We Migrate From Anywhere",
  platforms: [
    "Drupal",
    "Joomla",
    "Shopify",
    "Magento",
    "Wix",
    "Squarespace",
    "Custom HTML/PHP"
  ]
};

export const migrationsServiceFeatures = {
  title: "Our Migration Promise",
  features: [
    {
      icon: Database,
      title: "Data Integrity",
      description: "We ensure every post, image, user, and order is transferred correctly."
    },
    {
      icon: Layers,
      title: "SEO Preservation",
      description: "Redirect plans (301s) to maintain your search rankings and traffic."
    },
    {
      icon: CheckCircle,
      title: "Zero Downtime",
      description: "We work on a staging environment and switch over instantly."
    }
  ]
};

export const migrationsServiceProcess = {
  title: "Migration Roadmap",
  steps: [
    { step: "Analysis", description: "Reviewing current site structure and data." },
    { step: "Backup", description: "Securing a full backup before starting." },
    { step: "Transfer", description: "Moving data to the new WordPress environment." },
    { step: "Testing", description: "QA testing links, forms, and functionality." },
    { step: "Launch", description: "DNS update and final go-live." }
  ]
};

export const migrationsServiceCTA = {
  title: "Move to a Better Platform",
  description: "Experience the freedom and power of WordPress.",
  button: { text: "Start Migration", page: "contact" }
};
