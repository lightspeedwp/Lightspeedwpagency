/**
 * Guarantees Page Data
 * 
 * Mock data for the Guarantees page (GuaranteesTemplate).
 * 
 * Sections:
 * - Hero (with badge, tagline, description)
 * - Main Guarantees (cards with icons, badges, detail lists)
 * - Process / How It Works (numbered steps)
 * - Trust Signals (stats with icons)
 * - FAQs
 * - CTA (with dual buttons)
 */

import {
  Shield,
  Clock,
  ThumbsUp,
  RefreshCw,
  Award,
  Zap,
  Users,
  Star,
  CheckCircle,
  HeartHandshake,
  Lock,
  TrendingUp
} from 'lucide-react';
import type { LucideIcon } from 'lucide-react';

/* ── Hero ── */

export const guaranteesPageHero = {
  title: "Our Ironclad Guarantees",
  subtitle: "We stand behind our work with commitments that give you peace of mind.",
  badge: {
    icon: Shield,
    text: "QUALITY GUARANTEED"
  },
  tagline: "We back every project with clear, measurable guarantees",
  description: "At LSX Design we believe actions speak louder than words. Every guarantee below is written into our contracts and backed by real accountability."
};

/** @deprecated Use guaranteesPageHero instead */
export const guaranteesHero = guaranteesPageHero;

/* ── Main Guarantees ── */

interface Guarantee {
  id: string;
  icon: LucideIcon;
  title: string;
  description: string;
  badge?: string;
  details: string[];
}

export const mainGuarantees: Guarantee[] = [
  {
    id: "satisfaction",
    icon: ThumbsUp,
    title: "100% Satisfaction Guarantee",
    description: "We won't stop working until you are completely satisfied with the design and functionality of your website.",
    badge: "Most Popular",
    details: [
      "Unlimited revisions during the design phase",
      "Dedicated project manager for clear communication",
      "Regular feedback sessions throughout development",
      "Post-launch adjustments within 30 days"
    ]
  },
  {
    id: "on-time",
    icon: Clock,
    title: "On-Time Delivery Guarantee",
    description: "If we miss a mutually agreed-upon launch deadline due to our fault, we'll discount your final invoice.",
    details: [
      "Detailed project timeline with milestones",
      "Weekly progress reports and demos",
      "Proactive risk communication",
      "10% discount per week of delay (our fault)"
    ]
  },
  {
    id: "bug-free",
    icon: Shield,
    title: "Bug-Free Warranty",
    description: "We provide a 30-day warranty period after launch where we fix any bugs or issues free of charge.",
    badge: "30-Day Coverage",
    details: [
      "Comprehensive QA testing before launch",
      "Cross-browser and device testing",
      "Free bug fixes for 30 days post-launch",
      "Priority response within 4 hours"
    ]
  },
  {
    id: "uptime",
    icon: RefreshCw,
    title: "99.9% Uptime Guarantee",
    description: "For our hosting clients, we guarantee 99.9% uptime or we'll credit your account.",
    details: [
      "24/7 server monitoring",
      "Automatic failover systems",
      "Prorated credit for any downtime",
      "Scheduled maintenance windows only"
    ]
  },
  {
    id: "security",
    icon: Lock,
    title: "Security Guarantee",
    description: "We implement industry-best security practices and respond to threats within 2 hours.",
    details: [
      "SSL certificates and HTTPS enforcement",
      "Regular security audits and patching",
      "Malware scanning and removal",
      "2-hour emergency response SLA"
    ]
  },
  {
    id: "performance",
    icon: Zap,
    title: "Performance Guarantee",
    description: "We guarantee your site will score 90+ on Google Lighthouse or we'll optimize until it does.",
    badge: "90+ Score",
    details: [
      "Core Web Vitals optimization",
      "Image and asset optimization",
      "Caching and CDN implementation",
      "Ongoing performance monitoring"
    ]
  }
];

/** @deprecated Use mainGuarantees instead */
export const guaranteesList = mainGuarantees;

/* ── Process / How It Works ── */

export const guaranteesProcess = {
  title: "How Our Guarantees Work",
  description: "We've designed a straightforward process so you're always protected",
  steps: [
    {
      number: 1,
      title: "Clear Agreement",
      description: "Every guarantee is documented in our contract with specific, measurable criteria so expectations are crystal clear."
    },
    {
      number: 2,
      title: "Regular Check-ins",
      description: "Weekly demos and progress reports keep you informed and ensure the project stays aligned with your goals."
    },
    {
      number: 3,
      title: "Quality Assurance",
      description: "Comprehensive testing across browsers, devices, and accessibility standards before every delivery milestone."
    },
    {
      number: 4,
      title: "Post-Launch Coverage",
      description: "Our 30-day warranty and ongoing support plans ensure your site remains healthy long after launch."
    }
  ]
};

/* ── Trust Signals ── */

export const trustSignals = {
  title: "Why Clients Trust Us",
  description: "Numbers that speak for themselves",
  signals: [
    {
      icon: Star,
      stat: "98%",
      label: "Client Satisfaction",
      description: "Based on post-project surveys across 500+ clients"
    },
    {
      icon: Award,
      stat: "500+",
      label: "Projects Delivered",
      description: "WordPress and WooCommerce sites launched worldwide"
    },
    {
      icon: Users,
      stat: "30+",
      label: "Countries Served",
      description: "Global client base across every continent"
    },
    {
      icon: TrendingUp,
      stat: "10+",
      label: "Years Experience",
      description: "Specialising in WordPress since 2014"
    }
  ]
};

/* ── FAQs ── */

export const guaranteesFAQs = [
  {
    question: "What happens if I'm not satisfied with the final result?",
    answer: "We offer unlimited revisions during the design phase and a 30-day post-launch adjustment period. If we can't meet your requirements, we'll work out a fair resolution together."
  },
  {
    question: "How do you define 'on time'?",
    answer: "Timelines are mutually agreed upon during discovery and documented in the contract. We track progress against milestones and communicate proactively about any risks."
  },
  {
    question: "What's covered under the bug-free warranty?",
    answer: "Any functional bugs, display issues, or broken features that existed at launch or were introduced by our code. It does not cover issues caused by third-party plugin updates or client-made changes."
  },
  {
    question: "Can I extend the warranty period?",
    answer: "Yes, our maintenance packages extend coverage beyond 30 days. Plans start at $3,000/month and include continuous monitoring, updates, and priority support."
  },
  {
    question: "Do guarantees apply to existing site work?",
    answer: "Yes, our guarantees apply to all work we perform, whether it's a new build or improvements to an existing site. Scope is defined during the proposal phase."
  }
];

/* ── CTA ── */

export const guaranteesCTA = {
  title: "Work With Confidence",
  description: "Partner with an agency that puts its money where its mouth is. Every project is backed by clear, enforceable guarantees.",
  buttons: [
    { text: "Start Your Project", page: "contact" },
    { text: "View Pricing", page: "pricing" }
  ],
  /** @deprecated Use buttons[0] instead */
  button: { text: "Start Your Project", page: "contact" }
};
