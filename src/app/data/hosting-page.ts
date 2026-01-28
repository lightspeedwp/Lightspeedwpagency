/**
 * Hosting Page Data
 * 
 * Mock data for the Hosting page (HostingTemplate).
 * 
 * Sections:
 * - Hero
 * - Hosting Plans
 * - Key Features
 * - Technical Specs
 * - FAQs
 * - CTA
 */

import { Server, Shield, Zap, Globe, Database, Clock } from 'lucide-react';

export const hostingPageHero = {
  title: "Managed WordPress Hosting",
  subtitle: "High-performance, secure, and hassle-free hosting designed specifically for WordPress sites.",
  badge: { text: "PREMIUM HOSTING", icon: Server },
  primaryButton: { text: "View Plans", page: "#plans" }
};

export const hostingPagePlans = [
  {
    name: "Business",
    price: "$49",
    period: "/month",
    description: "Ideal for small business websites and blogs.",
    features: [
      "1 WordPress Install",
      "25GB SSD Storage",
      "Free SSL Certificate",
      "Daily Backups",
      "24/7 Support"
    ],
    cta: { text: "Choose Plan", page: "contact" }
  },
  {
    name: "Pro",
    price: "$99",
    period: "/month",
    description: "Perfect for growing businesses and e-commerce.",
    popular: true,
    features: [
      "5 WordPress Installs",
      "50GB SSD Storage",
      "Free SSL & CDN",
      "Real-time Backups",
      "Priority Support",
      "Malware Scanning"
    ],
    cta: { text: "Choose Plan", page: "contact" }
  },
  {
    name: "Agency",
    price: "$299",
    period: "/month",
    description: "For agencies and high-traffic sites.",
    features: [
      "Unlimited Installs",
      "200GB SSD Storage",
      "Advanced Security Suite",
      "Staging Environments",
      "White-label Reports",
      "Dedicated Account Manager"
    ],
    cta: { text: "Contact Sales", page: "contact" }
  }
];

export const hostingPageFeatures = {
  title: "Why Choose Our Hosting?",
  features: [
    {
      icon: Zap,
      title: "Blazing Fast Speed",
      description: "Optimized server stack with Nginx, PHP 8+, and server-side caching."
    },
    {
      icon: Shield,
      title: "Ironclad Security",
      description: "Proactive firewalls, DDoS protection, and free malware removal."
    },
    {
      icon: Clock,
      title: "99.9% Uptime",
      description: "Reliable infrastructure ensures your site is always available."
    },
    {
      icon: Database,
      title: "Automated Backups",
      description: "Daily backups kept for 30 days, with one-click restore."
    }
  ]
};

export const hostingPageSpecs = {
  title: "Technical Specifications",
  specs: [
    { label: "Server Location", value: "Global (Choose your region)" },
    { label: "Web Server", value: "Nginx / Apache Hybrid" },
    { label: "Database", value: "MariaDB" },
    { label: "PHP Version", value: "8.0, 8.1, 8.2 (Selectable)" },
    { label: "Control Panel", value: "Custom Dashboard" }
  ]
};

export const hostingPageFAQs = [
  {
    question: "Do you offer free migrations?",
    answer: "Yes, we will migrate your WordPress site from your current host for free with zero downtime."
  },
  {
    question: "Is email hosting included?",
    answer: "Our hosting focuses on your website. We recommend Google Workspace or Outlook for email, and we can help you set it up."
  },
  {
    question: "Can I use my own domain?",
    answer: "Absolutely. You can point any domain you own to our servers."
  }
];

export const hostingPageCTA = {
  title: "Speed Up Your Website Today",
  description: "Switch to a hosting provider that cares about your performance.",
  button: { text: "Get Started", page: "contact" }
};
