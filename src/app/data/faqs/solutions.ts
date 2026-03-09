/**
 * Solutions FAQ Collections
 * 
 * FAQ collections for solution-specific pages including LSX Design,
 * WordPress solutions, WooCommerce solutions, and tour operator solutions.
 * 
 * **Collections:**
 * - lsxDesignFAQs — LSX Design system solution
 * - wordpressSolutionFAQs — WordPress solution
 * - woocommerceSolutionFAQs — WooCommerce solution
 * - tourOperatorFAQs — Tour operator solution
 * 
 * **Count:** 4 collections
 * 
 * @example
 * import { lsxDesignFAQs } from '@/app/data/faqs';
 * <FAQSection faqs={lsxDesignFAQs} />
 */

import type { FAQ } from './types';

/**
 * LSX Design System FAQs
 * Used on: LSXDesignTemplate
 */
export const lsxDesignFAQs: FAQ[] = [
  {
    question: "What makes LSX Design different from other WordPress agencies?",
    answer: "We specialize in token-driven design systems and WordPress Full Site Editing (FSE). Every project is built with scalability, accessibility (WCAG 2.1 AA), and maintainability as core principles."
  },
  {
    question: "Can LSX Design integrate with my existing development workflow?",
    answer: "Yes! We integrate with Git workflows, CI/CD pipelines, staging environments, and project management tools (Jira, Asana, Linear). We adapt to your process."
  },
  {
    question: "Do you offer training on the LSX Design system?",
    answer: "Every project includes comprehensive training covering the design system, WordPress editing, pattern usage, and best practices. We also provide ongoing support and documentation."
  },
  {
    question: "Is LSX Design suitable for large enterprise websites?",
    answer: "Absolutely! LSX Design is built for scale. We've used it for multi-site networks, enterprise portals, and high-traffic e-commerce sites. It includes performance optimization and robust security."
  },
  {
    question: "Can I customize the LSX Design system for my brand?",
    answer: "Yes! LSX Design is a framework, not a rigid template. We customize colors, typography, spacing, components, and patterns to match your brand guidelines perfectly."
  }
];

/**
 * WordPress Solution FAQs
 * Used on: WordPressSolutionTemplate
 */
export const wordpressSolutionFAQs: FAQ[] = [
  {
    question: "Why choose WordPress over other CMS platforms?",
    answer: "WordPress powers 43% of the web, offers unmatched flexibility, thousands of plugins, active community support, and excellent SEO capabilities. It's open-source, meaning you truly own your website."
  },
  {
    question: "Is WordPress secure enough for business websites?",
    answer: "Yes! With proper security measures (updates, firewalls, SSL, backups), WordPress is highly secure. Many Fortune 500 companies and government agencies use WordPress for sensitive data."
  },
  {
    question: "Can WordPress handle high-traffic websites?",
    answer: "Absolutely! WordPress sites can handle millions of visitors with proper hosting, caching, and CDN integration. We optimize for performance including lazy loading, database optimization, and asset minification."
  },
  {
    question: "How difficult is it to learn WordPress content editing?",
    answer: "The WordPress Block Editor is intuitive and visual. Most clients learn basic editing in 30 minutes. We provide training, video tutorials, and documentation to ensure your team is confident."
  },
  {
    question: "Can WordPress integrate with my existing business tools?",
    answer: "Yes! WordPress integrates with CRMs (Salesforce, HubSpot), email marketing (Mailchimp, ConvertKit), analytics (Google Analytics, Matomo), payment gateways, and thousands of third-party services."
  }
];

/**
 * WooCommerce Solution FAQs
 * Used on: WooCommerceSolutionTemplate
 */
export const woocommerceSolutionFAQs: FAQ[] = [
  {
    question: "Is WooCommerce suitable for B2B e-commerce?",
    answer: "Yes! WooCommerce supports B2B features including bulk ordering, custom pricing per customer, quote requests, wholesale accounts, and integration with ERP systems."
  },
  {
    question: "Can WooCommerce handle subscription products and memberships?",
    answer: "Absolutely! WooCommerce Subscriptions enables recurring payments, subscription boxes, membership sites, and payment plans. We integrate with membership plugins for gated content."
  },
  {
    question: "How does WooCommerce compare to Shopify or BigCommerce?",
    answer: "WooCommerce offers more flexibility and lower long-term costs (no transaction fees, full code access). Shopify is easier to start but has limitations. WooCommerce grows with your business."
  },
  {
    question: "Can I sell digital products and services with WooCommerce?",
    answer: "Yes! WooCommerce handles digital downloads, software licenses, online courses, bookings/appointments, event tickets, and services. We configure automatic delivery and license management."
  },
  {
    question: "Does WooCommerce support international sales and currencies?",
    answer: "Yes! WooCommerce supports multi-currency, geolocation-based pricing, international shipping calculators, tax rules per country, and translation into 100+ languages."
  }
];

/**
 * Tour Operator Solution FAQs
 * Used on: TourOperatorTemplate, TourOperatorsSolutionTemplate
 */
export const tourOperatorFAQs: FAQ[] = [
  {
    question: "What makes WordPress ideal for tour operator websites?",
    answer: "WordPress offers flexible content management for destinations, tours, and itineraries, powerful SEO for destination marketing, integration with booking systems, and multilingual support for international travelers."
  },
  {
    question: "Can you integrate with our existing booking and reservation system?",
    answer: "Yes! We integrate WordPress with popular booking platforms like Bokun, FareHarbor, Rezdy, and custom booking APIs. We create seamless connections between your website and reservation system."
  },
  {
    question: "How do you handle tour itineraries and package customization?",
    answer: "We build custom content types for tours, itineraries, and packages with flexible pricing, availability calendars, group size management, and add-on options. Clients can filter and compare tours easily."
  },
  {
    question: "Do you provide multilingual support for international tourism?",
    answer: "Absolutely! We implement WPML or Polylang for professional translations, currency switchers, localized SEO, and geo-targeted content. Perfect for reaching global travelers."
  },
  {
    question: "Can you integrate with WETU or other tour operator platforms?",
    answer: "Yes! We specialize in WETU integrations including automated content sync, itinerary imports, image galleries, and real-time availability. We've built custom WETU connectors for multiple tour operators."
  }
];
