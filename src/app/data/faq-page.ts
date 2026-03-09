/**
 * FAQ Page Data
 * 
 * Content for the dedicated FAQ page.
 * Organizes the granular FAQ data from faqs.ts into displayable sections.
 * 
 * @see /src/app/components/templates/FAQTemplate.tsx
 */

import {
  Question,
  Wrench,
  HardDrives,
  CreditCard
} from '@phosphor-icons/react';

/* ============================================
   HERO
   ============================================ */

export const faqPageHero = {
  title: "Frequently asked questions",
  tagline: "Your questions, answered.",
  description:
    "Everything you need to know about our services, process, and technical approach. Can't find your answer? Reach out — we're always happy to help.",
  badge: { text: "SUPPORT CENTER", icon: Question }
};

/* ============================================
   STATS
   ============================================ */

export const faqStats = {
  totalQuestions: 40,
  categories: 4,
  avgResponseTime: "< 2 hrs",
  satisfaction: "98%"
};

/* ============================================
   CATEGORIES WITH FAQ ITEMS
   ============================================ */

export const faqCategories = [
  {
    id: 'general',
    title: 'General',
    description: 'Basics about LSX Design and how we work.',
    icon: Question,
    faqs: [
      {
        question: "What does LSX Design specialise in?",
        answer:
          "We specialise in WordPress block themes, WooCommerce stores, and accessible, high-performance websites. Our focus is on modern Full Site Editing (FSE) architecture with clean design systems."
      },
      {
        question: "Do you work with clients outside of South Africa?",
        answer:
          "Absolutely. We work with clients worldwide. Our team is experienced in async collaboration across time zones, and we use modern project-management tools to keep every stakeholder in the loop."
      },
      {
        question: "How long does a typical project take?",
        answer:
          "Timelines depend on scope. A standard brochure site takes 4–6 weeks, a WooCommerce store 6–10 weeks, and enterprise builds 10–16 weeks. We provide a detailed timeline during the discovery phase."
      },
      {
        question: "Can you redesign an existing website?",
        answer:
          "Yes — redesigns are one of our core offerings. We audit your current site, identify opportunities, and migrate content to a modern block theme while preserving SEO rankings."
      }
    ]
  },
  {
    id: 'services',
    title: 'Services',
    description: 'Details on our design, development, and support offerings.',
    icon: Wrench,
    faqs: [
      {
        question: "What services do you offer?",
        answer:
          "Our services include discovery & strategy, custom design, WordPress & WooCommerce development, managed hosting, migrations, security hardening, content strategy, and ongoing support."
      },
      {
        question: "Do you offer ongoing maintenance and support?",
        answer:
          "Yes. We offer monthly retainers that cover plugin updates, security monitoring, performance optimisation, content changes, and priority support with guaranteed response times."
      },
      {
        question: "Can you help with SEO and content strategy?",
        answer:
          "Definitely. Our content strategy service covers keyword research, information architecture, content auditing, and editorial planning — all designed to work hand-in-hand with WordPress."
      },
      {
        question: "Do you build e-commerce stores?",
        answer:
          "Yes — WooCommerce is one of our specialities. We build custom storefronts, integrate payment gateways, configure shipping, and optimise the checkout experience for conversions."
      },
      {
        question: "What is your design process?",
        answer:
          "We follow a four-phase process: Discovery (research & strategy), Design (wireframes & visual design), Development (theme build & testing), and Launch (deployment & training)."
      }
    ]
  },
  {
    id: 'technical',
    title: 'Technical',
    description: 'Hosting, security, FSE, and code questions.',
    icon: HardDrives,
    faqs: [
      {
        question: "What is a WordPress block theme?",
        answer:
          "A block theme uses WordPress Full Site Editing (FSE) to let you customise every part of your site — header, footer, templates, and content — directly in the block editor, without code."
      },
      {
        question: "Do you use page builders like Elementor?",
        answer:
          "No. We build exclusively with the native WordPress block editor (Gutenberg) and FSE. This approach is faster, lighter, more accessible, and future-proof — no third-party lock-in."
      },
      {
        question: "How do you handle website security?",
        answer:
          "We implement security best practices including hardened server configs, Web Application Firewalls (WAF), two-factor authentication, automatic backups, malware scanning, and regular patching."
      },
      {
        question: "What hosting do you recommend?",
        answer:
          "We offer managed WordPress hosting optimised for performance. Our infrastructure includes LiteSpeed servers, Redis object caching, free SSL, daily backups, and a global CDN."
      },
      {
        question: "Can you migrate my site from another platform?",
        answer:
          "Yes. We handle migrations from Wix, Squarespace, Joomla, Drupal, Shopify, and legacy WordPress setups. We preserve content, SEO, and redirects throughout the process."
      }
    ]
  },
  {
    id: 'pricing',
    title: 'Pricing & billing',
    description: 'Payment structures, retainers, and contracts.',
    icon: CreditCard,
    faqs: [
      {
        question: "How much does a website cost?",
        answer:
          "Projects start at R25,000 for a starter site. Custom designs range from R45,000–R120,000 depending on complexity, and enterprise WooCommerce builds from R80,000+. We provide detailed proposals after discovery."
      },
      {
        question: "Do you require a deposit?",
        answer:
          "Yes — we require a 50% deposit to begin work, with the remainder due on launch. For larger projects we offer milestone-based payment plans."
      },
      {
        question: "What payment methods do you accept?",
        answer:
          "We accept bank transfers (EFT), credit card payments, and PayFast. International clients can pay via Wise (TransferWise) or PayPal."
      },
      {
        question: "Do you offer payment plans?",
        answer:
          "Yes. For projects over R60,000 we offer structured payment plans aligned to project milestones. Monthly retainers are billed at the start of each month."
      }
    ]
  }
];

/* ============================================
   CTA
   ============================================ */

export const faqCTA = {
  title: "Still have questions?",
  description:
    "Can't find the answer you're looking for? Reach out to our team directly — we typically respond within two hours.",
  buttons: [
    { text: "Contact support", page: "contact" },
    { text: "View services", page: "services" }
  ]
};

/* ============================================
   LEGACY ALIAS (backward compatibility)
   ============================================ */

export const faqPageCategories = faqCategories.map(({ faqs, icon, ...rest }) => rest);
export const faqPageCTA = faqCTA;