/**
 * Pricing Page Data
 * 
 * Mock data for the Pricing page (PricingTemplate).
 * 
 * Sections:
 * - Hero (with badge, description)
 * - Website Build Packages (3 tiers)
 * - Support & Maintenance Packages (3 tiers)
 * - Payment Options
 * - CTA (with dual buttons)
 */

import {
  Rocket,
  Zap,
  Crown,
  Shield,
  Wrench,
  HeartHandshake,
  DollarSign
} from 'lucide-react';
import type { UniversalIcon } from '../utils/icon-map';

/* ── Hero ── */

export const pricingPageHero = {
  title: "Simple, Transparent Pricing",
  subtitle: "Choose the plan that fits your business needs. No hidden fees.",
  badge: {
    icon: DollarSign,
    text: "TRANSPARENT PRICING"
  },
  description: "Choose the plan that fits your business needs. All plans include our quality guarantee, dedicated project management, and post-launch support."
};

/** @deprecated Use pricingPageHero instead */
export const pricingPageHeader = pricingPageHero;

/* ── Package Interfaces ── */

interface PackageFeature {
  name: string;
  included: boolean;
}

interface PricingPackage {
  id: string;
  name: string;
  icon: UniversalIcon;
  tagline: string;
  price: {
    display: string;
    period: string;
  };
  description: string;
  popular?: boolean;
  features: PackageFeature[];
  cta: {
    text: string;
    page: string;
    variant?: string;
  };
}

/* ── Website Build Packages ── */

export const websitePackages: PricingPackage[] = [
  {
    id: "starter",
    name: "Starter",
    icon: Rocket,
    tagline: "Perfect for small businesses",
    price: {
      display: "$4,999",
      period: "starting at"
    },
    description: "A professional WordPress block theme website for small businesses and startups looking to establish a strong online presence.",
    features: [
      { name: "Custom Block Theme Design", included: true },
      { name: "Up to 5 Pages", included: true },
      { name: "Mobile Responsive", included: true },
      { name: "Basic SEO Setup", included: true },
      { name: "Contact Form", included: true },
      { name: "1 Month Post-Launch Support", included: true },
      { name: "WooCommerce Integration", included: false },
      { name: "Custom API Integrations", included: false }
    ],
    cta: {
      text: "Get Started",
      page: "contact",
      variant: "outline"
    }
  },
  {
    id: "professional",
    name: "Professional",
    icon: Zap,
    tagline: "For growing businesses",
    price: {
      display: "$9,999",
      period: "starting at"
    },
    description: "Comprehensive WordPress solution for growing businesses with advanced functionality, WooCommerce, and performance optimization.",
    popular: true,
    features: [
      { name: "Custom Block Theme + Design System", included: true },
      { name: "Up to 15 Pages", included: true },
      { name: "WooCommerce Setup", included: true },
      { name: "Advanced SEO Optimization", included: true },
      { name: "Performance Optimization", included: true },
      { name: "3 Months Post-Launch Support", included: true },
      { name: "Content Migration", included: true },
      { name: "Custom API Integrations", included: false }
    ],
    cta: {
      text: "Get Started",
      page: "contact",
      variant: "default"
    }
  },
  {
    id: "enterprise",
    name: "Enterprise",
    icon: Crown,
    tagline: "For complex requirements",
    price: {
      display: "Custom",
      period: "quote based"
    },
    description: "Tailored enterprise-grade solutions with full WooCommerce, custom integrations, security hardening, and dedicated project management.",
    features: [
      { name: "Full Design System + Pattern Library", included: true },
      { name: "Unlimited Pages", included: true },
      { name: "Advanced WooCommerce", included: true },
      { name: "Custom API Integrations", included: true },
      { name: "Security Hardening", included: true },
      { name: "12 Months Priority Support", included: true },
      { name: "Dedicated Project Manager", included: true },
      { name: "SLA & Uptime Guarantee", included: true }
    ],
    cta: {
      text: "Contact Sales",
      page: "contact",
      variant: "outline"
    }
  }
];

/* ── Support & Maintenance Packages ── */

export const supportPackages: PricingPackage[] = [
  {
    id: "essential",
    name: "Essential",
    icon: Shield,
    tagline: "Basic peace of mind",
    price: {
      display: "$499",
      period: "/month"
    },
    description: "Core maintenance to keep your WordPress site secure, updated, and running smoothly with monthly reporting.",
    features: [
      { name: "WordPress Core Updates", included: true },
      { name: "Plugin & Theme Updates", included: true },
      { name: "Daily Backups", included: true },
      { name: "Security Monitoring", included: true },
      { name: "Monthly Performance Report", included: true },
      { name: "Content Updates (2 hrs/mo)", included: false },
      { name: "Priority Support", included: false },
      { name: "Dedicated Account Manager", included: false }
    ],
    cta: {
      text: "Get Started",
      page: "contact",
      variant: "outline"
    }
  },
  {
    id: "growth",
    name: "Growth",
    icon: Wrench,
    tagline: "Active site management",
    price: {
      display: "$999",
      period: "/month"
    },
    description: "Comprehensive maintenance with content updates, performance optimization, and priority support for growing businesses.",
    popular: true,
    features: [
      { name: "Everything in Essential", included: true },
      { name: "Content Updates (5 hrs/mo)", included: true },
      { name: "Performance Optimization", included: true },
      { name: "SEO Monitoring", included: true },
      { name: "Priority Support (4hr SLA)", included: true },
      { name: "Quarterly Strategy Review", included: true },
      { name: "Dedicated Account Manager", included: false },
      { name: "Custom Development Hours", included: false }
    ],
    cta: {
      text: "Get Started",
      page: "contact",
      variant: "default"
    }
  },
  {
    id: "premium",
    name: "Premium",
    icon: HeartHandshake,
    tagline: "Full-service partnership",
    price: {
      display: "$2,499",
      period: "/month"
    },
    description: "Full-service website management with a dedicated account manager, custom development hours, and same-day support.",
    features: [
      { name: "Everything in Growth", included: true },
      { name: "Dedicated Account Manager", included: true },
      { name: "Custom Development (10 hrs/mo)", included: true },
      { name: "Same-Day Support (2hr SLA)", included: true },
      { name: "A/B Testing & CRO", included: true },
      { name: "Monthly Strategy Sessions", included: true },
      { name: "Staging Environment", included: true },
      { name: "24/7 Emergency Support", included: true }
    ],
    cta: {
      text: "Contact Sales",
      page: "contact",
      variant: "outline"
    }
  }
];

/* ── Payment Options ── */

export const paymentOptions = {
  title: "Flexible Payment Options",
  description: "We offer multiple ways to pay so you can choose what works best for your business",
  options: [
    {
      name: "Milestone Payments",
      description: "Split your project cost across key milestones — deposit, design approval, development, and launch.",
      discount: "Standard Pricing",
      terms: "40% deposit → 30% mid-project → 30% at launch"
    },
    {
      name: "Pay in Full",
      description: "Pay the full project cost upfront and receive a discount on your total investment.",
      discount: "Save 10%",
      terms: "Full payment before project kickoff"
    },
    {
      name: "Monthly Plan",
      description: "Spread your project cost over 6-12 monthly instalments with a small financing fee.",
      discount: "0% for 6 months",
      terms: "Equal monthly payments over 6-12 months"
    }
  ]
};

/* ── Backward-compatible aliases for older imports ── */

export const pricingPagePlans = websitePackages;

export const pricingPageFAQs = [
  {
    question: "Do you offer payment plans?",
    answer: "Yes, we typically require a deposit to start, with the remainder due upon milestone completions. We can discuss flexible schedules for larger projects."
  },
  {
    question: "Are there any ongoing costs?",
    answer: "Beyond the initial development cost, you will need to pay for hosting and domain renewal. We also offer optional maintenance packages."
  },
  {
    question: "Can I upgrade my plan later?",
    answer: "Absolutely. Our solutions are scalable. We can add new features and pages as your business grows."
  },
  {
    question: "What if I need something not listed?",
    answer: "We specialize in custom development. Contact us with your specific requirements, and we'll create a tailored proposal."
  }
];

/* ── CTA ── */

export const pricingCTA = {
  title: "Not Sure Which Plan is Right?",
  description: "Schedule a free consultation to discuss your specific needs and we'll recommend the best option for your business.",
  buttons: [
    { text: "Book Consultation", page: "contact" },
    { text: "View Services", page: "services" }
  ],
  /** @deprecated Use buttons[0] instead */
  button: { text: "Book Consultation", page: "contact" }
};

/** @deprecated Use pricingCTA instead */
export const pricingPageCTA = pricingCTA;