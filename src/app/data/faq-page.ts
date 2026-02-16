/**
 * FAQ Page Data
 * 
 * Mock data for the FAQ page (FAQTemplate).
 * 
 * Sections:
 * - Hero (with badge, tagline, description)
 * - Stats (4-column layout)
 * - FAQ Categories (with icons, descriptions, grouped questions)
 * - CTA (with dual buttons)
 */

import { HelpCircle, Settings, DollarSign, Wrench, Rocket, BookOpen } from 'lucide-react';
import type { LucideIcon } from 'lucide-react';

/* ── Hero ── */

export const faqPageHero = {
  title: "Frequently Asked Questions",
  subtitle: "Find answers to the most common questions about our services, process, and pricing.",
  badge: {
    text: "KNOWLEDGE BASE"
  },
  tagline: "Everything you need to know about working with LSX Design",
  description: "Find answers to the most common questions about our WordPress development services, design process, pricing, and ongoing support."
};

/* ── Stats ── */

export const faqStats = {
  totalQuestions: 50,
  categories: 5,
  avgResponseTime: "< 4h",
  satisfaction: "98%"
};

/* ── FAQ Categories (with icons & descriptions for the template) ── */

interface FAQCategory {
  id: string;
  title: string;
  description: string;
  icon: LucideIcon;
  faqs: { question: string; answer: string }[];
}

export const faqCategories: FAQCategory[] = [
  {
    id: "general",
    title: "General",
    description: "Common questions about LSX Design and how we work",
    icon: HelpCircle,
    faqs: [
      {
        question: "Where are you located?",
        answer: "We are a remote-first agency with headquarters in Cape Town, South Africa and team members distributed globally across multiple time zones."
      },
      {
        question: "How long have you been in business?",
        answer: "We have been serving clients since 2014, celebrating over 10 years of WordPress and WooCommerce excellence across 30+ countries."
      },
      {
        question: "Who will I be working with?",
        answer: "You will be assigned a dedicated project manager who will coordinate with our team of designers and developers throughout your project."
      }
    ]
  },
  {
    id: "services",
    title: "Services",
    description: "Details about our WordPress and WooCommerce offerings",
    icon: Settings,
    faqs: [
      {
        question: "Do you work with startups?",
        answer: "Yes, we love working with startups! We have specific packages tailored to help new businesses launch quickly and affordably."
      },
      {
        question: "Can you help with marketing?",
        answer: "Yes, we offer SEO, content strategy, and email marketing services to help you grow your audience and increase conversions."
      },
      {
        question: "Do you build mobile apps?",
        answer: "We specialize in web technologies (PWA, React Native) that allow us to build mobile-friendly experiences and cross-platform apps."
      }
    ]
  },
  {
    id: "pricing",
    title: "Pricing & Billing",
    description: "Information about our pricing structure and payment options",
    icon: DollarSign,
    faqs: [
      {
        question: "What is your pricing model?",
        answer: "We offer both project-based and retainer pricing. Project rates are determined during discovery based on scope, complexity, and timeline."
      },
      {
        question: "Do you require a deposit?",
        answer: "Yes, a 40% deposit is required to schedule your project, with the remaining balance split across milestones and final delivery."
      }
    ]
  },
  {
    id: "technical",
    title: "Technical",
    description: "WordPress, WooCommerce, and development questions",
    icon: Wrench,
    faqs: [
      {
        question: "What is WordPress Full Site Editing?",
        answer: "FSE is WordPress's modern approach to theme development using blocks, patterns, and templates. It provides more flexibility and control without requiring code."
      },
      {
        question: "Why use block themes instead of classic themes?",
        answer: "Block themes offer better performance, easier maintenance, visual editing without code, better accessibility, and future-proof architecture."
      },
      {
        question: "Do you build headless WordPress sites?",
        answer: "Yes, we have experience with headless WordPress using Next.js and other frameworks. However, we generally recommend FSE block themes for most projects."
      }
    ]
  },
  {
    id: "support",
    title: "Support & Maintenance",
    description: "Post-launch support and ongoing maintenance details",
    icon: Rocket,
    faqs: [
      {
        question: "Do you provide ongoing support after launch?",
        answer: "Yes! All projects include 30 days of post-launch support. We also offer comprehensive maintenance packages starting at $3,000/month."
      },
      {
        question: "What's included in your maintenance packages?",
        answer: "Our maintenance includes weekly backups, core/plugin/theme updates, security monitoring, performance optimization, and priority support."
      },
      {
        question: "What if my site gets hacked?",
        answer: "If you're on our maintenance plan, malware removal and site cleanup are included at no extra cost. We'll identify the vulnerability, clean the site, and secure it."
      }
    ]
  }
];

/* ── Backward-compatible alias ── */
export const faqPageCategories = faqCategories;

/* ── CTA ── */

export const faqCTA = {
  title: "Still Have Questions?",
  description: "Can't find the answer you're looking for? Our team is happy to help with any questions about our services.",
  buttons: [
    { text: "Get in Touch", page: "contact" },
    { text: "View Services", page: "services" }
  ]
};

/* ── Backward-compatible alias ── */
export const faqPageCTA = faqCTA;
