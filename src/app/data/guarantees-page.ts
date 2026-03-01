/**
 * Guarantees Page Data
 * 
 * Content for the Guarantees overview page.
 */

import { ShieldCheck, Clock, CheckCircle, RefreshCw, Lock, Award, Users, Star, ThumbsUp } from 'lucide-react';

export const guaranteesPageHero = {
  title: "Our Commitments",
  subtitle: "We stand behind our work with concrete guarantees. Zero risk, 100% commitment.",
  tagline: "We believe trust is earned through accountability. That's why we put our skin in the game.",
  description: "Most agencies are afraid to commit to results. We're not. We believe that if we don't deliver value, you shouldn't pay. It's that simple.",
  badge: { text: "PEACE OF MIND", icon: ShieldCheck },
  primaryButton: { text: "Request a Systems Audit", page: "contact" }
};

export const guaranteesPageIntro = {
  title: "Why we offer guarantees",
  description: "Most agencies are afraid to commit to results. We're not. We believe that if we don't deliver value, you shouldn't pay. It's that simple."
};

export const mainGuarantees = [
  {
    id: "performance",
    title: "Performance Guarantee",
    description: "We guarantee your site will pass Core Web Vitals and load in under 2 seconds.",
    icon: Clock,
    badge: "Most Popular",
    details: [
      "90+ Google PageSpeed Score",
      "Sub-2s Load Times",
      "Core Web Vitals Pass"
    ]
  },
  {
    id: "quality",
    title: "Code Quality Guarantee",
    description: "Our code is clean, semantic, and built to WordPress standards.",
    icon: CheckCircle,
    details: [
      "W3C Validated HTML/CSS",
      "WordPress Coding Standards",
      "Accessibility Compliant"
    ]
  },
  {
    id: "satisfaction",
    title: "Satisfaction Guarantee",
    description: "We don't stop until you are 100% satisfied with the design and functionality.",
    icon: ThumbsUp,
    details: [
      "Unlimited Design Revisions",
      "Functional Testing",
      "Cross-Browser Compatibility"
    ]
  }
];

export const guaranteesProcess = {
  title: "How Our Guarantees Work",
  description: "Transparent, simple, and designed to protect your investment.",
  steps: [
    {
      number: "01",
      title: "Define Success",
      description: "We agree on clear, measurable metrics before starting the project."
    },
    {
      number: "02",
      title: "Track Progress",
      description: "We provide regular updates and tracking against agreed metrics."
    },
    {
      number: "03",
      title: "Deliver or Refund",
      description: "If we miss the mark, we fix it at our cost or issue a refund."
    },
    {
      number: "04",
      title: "Ongoing Support",
      description: "Our warranty covers bugs and issues for 30 days post-launch."
    }
  ]
};

export const trustSignals = {
  title: "Backed by Track Record",
  description: "Our guarantees are supported by years of successful project delivery.",
  signals: [
    {
      icon: Users,
      stat: "150+",
      label: "Happy Clients",
      description: "Across 12 countries"
    },
    {
      icon: Star,
      stat: "4.9/5",
      label: "Client Rating",
      description: "Average clutch rating"
    },
    {
      icon: Award,
      stat: "100%",
      label: "Success Rate",
      description: "Project completion"
    },
    {
      icon: Lock,
      stat: "Zero",
      label: "Security Breaches",
      description: "In 10 years"
    }
  ]
};

export const guaranteesFAQs = [
  {
    question: "What does the performance guarantee cover?",
    answer: "Our performance guarantee covers Core Web Vitals metrics (LCP, FID, CLS) and total load time on standard hosting environments. We optimize images, code, and caching to ensure top-tier speed."
  },
  {
    question: "How do you handle design revisions?",
    answer: "We offer unlimited design revisions during the design phase. We want you to love the look and feel of your site. We only move to development once you've signed off on the design."
  },
  {
    question: "Is there a warranty period?",
    answer: "Yes, we provide a 30-day warranty period after launch. Any bugs or issues related to our work will be fixed free of charge during this time."
  },
  {
    question: "Do you guarantee SEO rankings?",
    answer: "No agency can guarantee specific SEO rankings as search algorithms change constantly. However, we guarantee that your site is built with technical SEO best practices, giving you the best foundation for ranking."
  }
];

export const guaranteesCTA = {
  title: "Ready to work with a partner you can trust?",
  description: "Let's build something great together, risk-free.",
  buttons: [
    { text: "Get Started", page: "contact" },
    { text: "View Portfolio", page: "portfolio" }
  ]
};
