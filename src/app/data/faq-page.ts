/**
 * FAQ Page Data
 * 
 * Real content for FAQ page from LightSpeed WP Agency.
 * Real content extracted from https://lightspeedwp.agency
 * 
 * **REAL CONTENT SOURCE:** https://lightspeedwp.agency/faq
 * **Last Updated:** 2025-01-09
 * 
 * WordPress: Maps to templates/page-faq.html
 */

import { 
  HelpCircle,
  MessageCircle,
  BookOpen,
  Settings,
  DollarSign,
  Clock,
  Code,
  Shield
} from 'lucide-react';
import type { LucideIcon } from 'lucide-react';

/**
 * FAQ Hero Content
 */
export const faqPageHero = {
  badge: {
    icon: HelpCircle,
    text: 'FAQ'
  },
  title: 'Frequently Asked Questions',
  titleHighlight: 'Questions', // Word to highlight
  tagline: 'Find answers to common questions about our WordPress services, pricing, and process',
  description: 'Browse our comprehensive FAQ to learn more about how we work, what we offer, and how we can help with your WordPress project. Can\'t find your answer? Contact us directly.'
};

/**
 * FAQ Category
 */
export interface FAQCategory {
  id: string;
  icon: LucideIcon;
  title: string;
  description: string;
  faqs: Array<{
    question: string;
    answer: string;
  }>;
}

/**
 * FAQ Categories
 */
export const faqCategories: FAQCategory[] = [
  {
    id: 'general',
    icon: BookOpen,
    title: 'General Questions',
    description: 'Common questions about our services and company',
    faqs: [
      {
        question: 'What services does LightSpeed WP offer?',
        answer: 'We specialize in WordPress and WooCommerce development including custom themes, plugins, Full Site Editing (FSE), e-commerce solutions, website migrations, performance optimization, security hardening, and ongoing support and maintenance.'
      },
      {
        question: 'What types of businesses do you work with?',
        answer: 'We work with businesses of all sizes from startups to enterprises, including e-commerce stores, SaaS companies, tour operators, travel agencies, professional services firms, and non-profits. Our solutions scale to fit your needs.'
      },
      {
        question: 'Do you work with clients internationally?',
        answer: 'Yes! We work with clients worldwide. Most communication happens via email, video calls, and project management tools. We\'re experienced in managing remote projects and accommodating different time zones.'
      },
      {
        question: 'What makes LightSpeed WP different from other WordPress agencies?',
        answer: 'We specialize in modern WordPress development using Full Site Editing, block patterns, and theme.json. We prioritize performance, security, and maintainable code over quick fixes. Our focus on design systems ensures consistency and scalability.'
      },
      {
        question: 'Do you offer emergency support for website issues?',
        answer: 'Yes! Professional and Enterprise support plans include emergency support with priority response times. We handle critical issues like site downtime, security breaches, and major functionality problems 24/7.'
      }
    ]
  },
  {
    id: 'pricing',
    icon: DollarSign,
    title: 'Pricing & Payment',
    description: 'Questions about project costs and payment terms',
    faqs: [
      {
        question: 'How much does a WordPress website cost?',
        answer: 'Project costs vary based on scope and complexity. A basic WordPress website starts at $5,000, website redesigns range from $5,000-$15,000, custom e-commerce stores start at $10,000, and enterprise projects start at $20,000. We provide detailed quotes after understanding your requirements.'
      },
      {
        question: 'What payment terms do you offer?',
        answer: 'For most projects, we require 50% upfront to begin work and 50% upon completion. For larger projects (over $20,000), we can arrange milestone-based payments. We accept bank transfers, credit cards, and PayPal.'
      },
      {
        question: 'Do you offer monthly payment plans?',
        answer: 'We don\'t offer payment plans for project work, but our support and maintenance services are month-to-month subscriptions starting at $200/month. For large projects, we can structure payments around milestones to help with cash flow.'
      },
      {
        question: 'Are there any ongoing costs after the website is built?',
        answer: 'Yes. You\'ll need hosting ($20-200/month depending on traffic), domain registration (~$15/year), and optional support/maintenance ($200-800/month). We can recommend hosting providers or provide managed hosting ourselves.'
      },
      {
        question: 'Do you provide refunds if I\'m not satisfied?',
        answer: 'We work closely with clients throughout the project with regular check-ins and approvals. If you\'re not satisfied, we\'ll work to make it right. We offer refunds on unused deposits if the project doesn\'t proceed after the discovery phase.'
      }
    ]
  },
  {
    id: 'timeline',
    icon: Clock,
    title: 'Timeline & Process',
    description: 'Questions about project timelines and workflow',
    faqs: [
      {
        question: 'How long does a typical WordPress project take?',
        answer: 'Timeline depends on project complexity. A basic website takes 4-6 weeks, website redesigns take 6-8 weeks, custom e-commerce stores take 8-12 weeks, and enterprise projects take 12+ weeks. Rush timelines may be available for additional fees.'
      },
      {
        question: 'What is your development process?',
        answer: 'Our process includes: 1) Discovery & Planning (requirements, architecture), 2) Design (wireframes, mockups, prototypes), 3) Development (coding, testing), and 4) Launch (deployment, training, handoff). You\'ll have regular check-ins and approval points throughout.'
      },
      {
        question: 'How involved do I need to be during the project?',
        answer: 'We need your input during discovery (requirements, content), design reviews (feedback on mockups), and testing (final approval). Expect 2-4 hours per week for meetings and reviews. We handle all the technical work and keep you updated on progress.'
      },
      {
        question: 'Can you work with tight deadlines?',
        answer: 'We can sometimes accommodate rush projects with expedited timelines for an additional 25-50% fee. However, we recommend normal timelines to ensure quality, proper testing, and the best results for your investment.'
      },
      {
        question: 'What happens if the project takes longer than expected?',
        answer: 'We provide realistic timelines based on the agreed scope. If delays occur due to scope changes or client feedback delays, we\'ll discuss adjusted timelines. If delays are our fault, we absorb the extra time without additional charges.'
      }
    ]
  },
  {
    id: 'technical',
    icon: Code,
    title: 'Technical Questions',
    description: 'Questions about technology and development',
    faqs: [
      {
        question: 'What technologies do you use for WordPress development?',
        answer: 'We use modern WordPress with Full Site Editing (FSE), theme.json, block patterns, PHP 8+, React for custom blocks, Tailwind CSS for styling, and tools like Git, Composer, npm, and WP-CLI. We follow WordPress coding standards and best practices.'
      },
      {
        question: 'Do you build custom WordPress themes or use pre-made themes?',
        answer: 'We build custom block themes from scratch using Full Site Editing. We don\'t use pre-made themes or page builders. Custom themes give you complete control, better performance, and easier maintenance while following WordPress best practices.'
      },
      {
        question: 'Can you integrate WordPress with other systems?',
        answer: 'Yes! We integrate WordPress with CRMs (Salesforce, HubSpot), email marketing (Mailchimp, ConvertKit), payment gateways (Stripe, PayPal), accounting software (QuickBooks, Xero), and custom APIs using REST API, webhooks, and OAuth.'
      },
      {
        question: 'Do you use page builders like Elementor or Divi?',
        answer: 'No. We use WordPress Full Site Editing (the native block editor) which is faster, more maintainable, and follows WordPress core development direction. Page builders add bloat, security risks, and vendor lock-in that we avoid.'
      },
      {
        question: 'What is headless WordPress and do you build it?',
        answer: 'Headless WordPress uses WordPress as a content management system (backend) with a separate front-end like React or Next.js. We build headless WordPress solutions when there\'s a specific need for enhanced performance, multi-platform publishing, or custom user experiences.'
      }
    ]
  },
  {
    id: 'support',
    icon: Settings,
    title: 'Support & Maintenance',
    description: 'Questions about ongoing support and updates',
    faqs: [
      {
        question: 'Do you offer ongoing support after the website launches?',
        answer: 'Yes! We offer monthly support plans starting at $200/month including WordPress updates, security monitoring, backups, bug fixes, and technical support. Most clients choose ongoing support to keep their site secure and up-to-date.'
      },
      {
        question: 'What is included in your support plans?',
        answer: 'Support plans include: WordPress core/plugin/theme updates, security monitoring and hardening, daily backups, performance monitoring, bug fixes (hours vary by plan), priority technical support, and monthly reports. See our support page for detailed comparisons.'
      },
      {
        question: 'How quickly do you respond to support requests?',
        answer: 'Response times vary by plan: Essential (24 hours), Professional (4 hours), Enterprise (1 hour). Critical issues like site downtime receive immediate attention regardless of plan. We also offer emergency support for urgent situations.'
      },
      {
        question: 'Can you fix issues with websites built by other developers?',
        answer: 'Yes! We regularly help clients fix issues, improve performance, or take over maintenance for sites built by other developers. We\'ll audit the site, identify problems, and provide recommendations and solutions.'
      },
      {
        question: 'What if I need help managing content on my website?',
        answer: 'We provide training on the WordPress editor so you can manage content yourself. For clients who prefer not to manage content, we offer content management as part of our support plans or on an hourly basis at $150/hour.'
      }
    ]
  },
  {
    id: 'security',
    icon: Shield,
    title: 'Security & Performance',
    description: 'Questions about website security and speed',
    faqs: [
      {
        question: 'How do you secure WordPress websites?',
        answer: 'We implement security best practices including: regular updates, security hardening (file permissions, database security), malware scanning, firewall configuration, brute force protection, secure authentication, SSL certificates, and security monitoring. We follow OWASP guidelines.'
      },
      {
        question: 'What happens if my website gets hacked?',
        answer: 'If your site gets hacked while under our Professional or Enterprise support, we\'ll clean it immediately at no extra charge. We remove malware, close security gaps, implement additional protections, and restore from backups if needed. Most cleanups complete within 24 hours.'
      },
      {
        question: 'How fast will my WordPress website be?',
        answer: 'We optimize for performance with lighthouse scores of 90+ for desktop and 80+ for mobile. We use efficient code, image optimization, caching, CDN integration, database optimization, and lazy loading. Performance is tested throughout development.'
      },
      {
        question: 'Do you optimize websites for mobile devices?',
        answer: 'Yes! All websites we build are mobile-first and fully responsive. We test on multiple devices and screen sizes to ensure perfect display and functionality. Mobile optimization is included in every project, not an add-on.'
      },
      {
        question: 'How do you handle website backups?',
        answer: 'All support plans include automated daily backups stored securely offsite with 30-day retention. Backups include both database and files with one-click restore capability. We also test backup restoration quarterly to ensure reliability.'
      }
    ]
  }
];

/**
 * FAQ Stats
 */
export const faqStats = {
  totalQuestions: 30,
  categories: 6,
  avgResponseTime: '<1 hour',
  satisfaction: '98%'
};

/**
 * CTA Content
 */
export const faqCTA = {
  title: 'Still Have Questions?',
  description: 'Can\'t find the answer you\'re looking for? Get in touch with our team and we\'ll be happy to help.',
  buttons: [
    {
      text: 'Contact Us',
      page: 'contact',
      variant: 'default'
    },
    {
      text: 'View Services',
      page: 'services',
      variant: 'outline'
    }
  ]
};

/**
 * Helper Functions
 */

/**
 * Get FAQ page data
 */
export function getFAQPageData() {
  return {
    hero: faqPageHero,
    categories: faqCategories,
    stats: faqStats,
    cta: faqCTA
  };
}

/**
 * Get all FAQs flattened
 */
export function getAllFAQs() {
  return faqCategories.flatMap(category => category.faqs);
}

/**
 * Get FAQ category by ID
 */
export function getFAQCategoryById(id: string) {
  return faqCategories.find(category => category.id === id);
}

/**
 * Get total FAQ count
 */
export function getTotalFAQCount() {
  return faqCategories.reduce((total, category) => total + category.faqs.length, 0);
}
