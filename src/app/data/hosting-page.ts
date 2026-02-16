/**
 * Hosting Page Data
 * 
 * Mock data for the Hosting page (HostingTemplate).
 * 
 * Sections:
 * - Hero
 * - Hosting Plans (3 tiers with detailed specs & features)
 * - Premium Features (grid)
 * - Why Choose Us (benefits)
 * - Guarantees (trust signals)
 * - CTA
 */

import { Server, Shield, Zap, Globe, Database, Clock, Headphones, RefreshCw, Award, CheckCircle } from 'lucide-react';

/* ─────────────────────────────────────────────
 * Hero
 * ───────────────────────────────────────────── */
export const hostingPageHero = {
  title: "Managed WordPress Hosting",
  description: "High-performance, secure, and hassle-free hosting designed specifically for WordPress sites.",
  badge: { text: "PREMIUM HOSTING", icon: Server },
  primaryButton: { text: "View Plans", page: "#plans" }
};

/* ─────────────────────────────────────────────
 * Hosting Plans
 * ───────────────────────────────────────────── */
export const hostingPlans = [
  {
    id: "business",
    name: "Business",
    icon: Server,
    tagline: "Ideal for small business websites and blogs",
    price: { display: "$49", period: "/month" },
    description: "Everything you need to launch and maintain a professional WordPress site with expert support.",
    popular: false,
    specifications: {
      sites: "1 WordPress Install",
      storage: "25 GB SSD Storage",
      visits: "50,000 Monthly Visits",
      ssl: "Free SSL Certificate"
    },
    features: [
      { name: "Daily Backups", included: true },
      { name: "24/7 Support", included: true },
      { name: "Free Migration", included: true },
      { name: "CDN Included", included: false },
      { name: "Staging Environment", included: false },
      { name: "Malware Scanning", included: false },
      { name: "Priority Support", included: false },
      { name: "White-label Reports", included: false }
    ],
    cta: { text: "Choose Plan", page: "contact" }
  },
  {
    id: "pro",
    name: "Pro",
    icon: Zap,
    tagline: "Perfect for growing businesses and e-commerce",
    price: { display: "$99", period: "/month" },
    description: "Advanced performance and security features for sites that demand speed and reliability.",
    popular: true,
    specifications: {
      sites: "5 WordPress Installs",
      storage: "50 GB SSD Storage",
      visits: "200,000 Monthly Visits",
      ssl: "Free SSL & CDN"
    },
    features: [
      { name: "Real-time Backups", included: true },
      { name: "Priority Support", included: true },
      { name: "Free Migration", included: true },
      { name: "CDN Included", included: true },
      { name: "Staging Environment", included: true },
      { name: "Malware Scanning", included: true },
      { name: "Dedicated Account Manager", included: false },
      { name: "White-label Reports", included: false }
    ],
    cta: { text: "Choose Plan", page: "contact" }
  },
  {
    id: "agency",
    name: "Agency",
    icon: Globe,
    tagline: "For agencies and high-traffic sites",
    price: { display: "$299", period: "/month" },
    description: "Enterprise-grade hosting with unlimited installs, staging environments, and a dedicated account manager.",
    popular: false,
    specifications: {
      sites: "Unlimited Installs",
      storage: "200 GB SSD Storage",
      visits: "1M+ Monthly Visits",
      ssl: "Advanced Security Suite"
    },
    features: [
      { name: "Real-time Backups", included: true },
      { name: "Priority Support", included: true },
      { name: "Free Migration", included: true },
      { name: "CDN Included", included: true },
      { name: "Staging Environment", included: true },
      { name: "Malware Scanning", included: true },
      { name: "Dedicated Account Manager", included: true },
      { name: "White-label Reports", included: true }
    ],
    cta: { text: "Contact Sales", page: "contact" }
  }
];

/* ─────────────────────────────────────────────
 * Premium Features
 * ───────────────────────────────────────────── */
export const hostingFeatures = [
  {
    icon: Zap,
    title: "Blazing Fast Speed",
    description: "Optimized server stack with Nginx, PHP 8+, and server-side caching for sub-second load times."
  },
  {
    icon: Shield,
    title: "Ironclad Security",
    description: "Proactive firewalls, DDoS protection, and free malware removal keep your site safe."
  },
  {
    icon: Clock,
    title: "99.9% Uptime",
    description: "Reliable infrastructure with redundant systems ensures your site is always available."
  },
  {
    icon: Database,
    title: "Automated Backups",
    description: "Daily backups kept for 30 days with one-click restore — your data is always protected."
  },
  {
    icon: Headphones,
    title: "Expert WordPress Support",
    description: "Our team of WordPress specialists is available 24/7 to help with any hosting issue."
  },
  {
    icon: RefreshCw,
    title: "Free Site Migration",
    description: "We handle the entire migration process with zero downtime — switch to us risk-free."
  }
];

/* ─────────────────────────────────────────────
 * Why Choose Our Hosting
 * ───────────────────────────────────────────── */
export const whyChooseHosting = {
  title: "Why Choose LSX Design Hosting?",
  description: "We're not just another hosting provider — we're WordPress specialists who understand your site inside and out.",
  benefits: [
    {
      title: "WordPress-Optimized Infrastructure",
      description: "Our servers are built from the ground up for WordPress, delivering 3× faster load times than generic hosting."
    },
    {
      title: "Proactive Monitoring",
      description: "We monitor your site 24/7 and fix issues before they affect your visitors or search rankings."
    },
    {
      title: "Developer-Friendly Tools",
      description: "SSH access, WP-CLI, Git integration, and staging environments for streamlined development workflows."
    },
    {
      title: "Scalable Architecture",
      description: "Seamlessly handle traffic spikes with auto-scaling resources — no manual upgrades needed."
    }
  ]
};

/* ─────────────────────────────────────────────
 * Guarantees
 * ───────────────────────────────────────────── */
export const hostingGuarantees = {
  title: "Our Guarantees",
  guarantees: [
    {
      icon: CheckCircle,
      title: "30-Day Money Back",
      description: "Not satisfied? Get a full refund within your first 30 days — no questions asked."
    },
    {
      icon: Clock,
      title: "99.9% Uptime SLA",
      description: "We guarantee 99.9% uptime backed by our service level agreement with credits for any downtime."
    },
    {
      icon: Award,
      title: "Free Migration",
      description: "Our experts handle your migration with zero downtime — we make the switch effortless."
    },
    {
      icon: Shield,
      title: "Hack-Free Guarantee",
      description: "If your site gets hacked on our watch, we'll fix it for free and implement additional security."
    }
  ]
};

/* ─────────────────────────────────────────────
 * CTA
 * ───────────────────────────────────────────── */
export const hostingCTA = {
  title: "Speed Up Your Website Today",
  description: "Switch to a hosting provider that cares about your performance, security, and growth.",
  buttons: [
    { text: "Get Started", page: "contact" },
    { text: "Compare Plans", page: "pricing" }
  ]
};

/* ─────────────────────────────────────────────
 * FAQs (kept for potential use)
 * ───────────────────────────────────────────── */
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
