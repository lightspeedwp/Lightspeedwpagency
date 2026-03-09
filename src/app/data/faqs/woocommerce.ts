/**
 * WooCommerce FAQ Collections
 * 
 * FAQ collections for WooCommerce e-commerce pages.
 * 
 * **Collections:**
 * - woocommerceFAQs — General WooCommerce FAQs
 * - woocommerceDetailedFAQs — Detailed WooCommerce FAQs
 * 
 * **Count:** 2 collections
 * 
 * @example
 * import { woocommerceFAQs } from '@/app/data/faqs';
 * <FAQSection faqs={woocommerceFAQs} />
 */

import type { FAQ } from './types';

/**
 * WooCommerce/Solutions FAQs
 * Used on: WooCommerce solution pages, e-commerce pages
 */
export const woocommerceFAQs: FAQ[] = [
  {
    question: 'How many products can WooCommerce handle?',
    answer: 'WooCommerce can handle thousands of products with proper optimization. We\'ve built stores with 10,000+ SKUs. Performance depends on hosting, optimization, and architecture—which we address in every build.'
  },
  {
    question: 'Can you integrate with our inventory system?',
    answer: 'Yes! We regularly integrate WooCommerce with ERPs, inventory systems, shipping providers, and accounting software. Common integrations include QuickBooks, ShipStation, and custom REST APIs.'
  },
  {
    question: 'Do you handle payment gateway setup?',
    answer: 'Yes, we configure and test all payment gateways including Stripe, PayPal, Square, and regional providers. We ensure PCI compliance and secure checkout flows.'
  },
  {
    question: 'Can WooCommerce handle subscriptions?',
    answer: 'Yes, using WooCommerce Subscriptions extension. We\'ve built membership sites, subscription boxes, SaaS billing, and recurring service businesses on WooCommerce.'
  },
  {
    question: 'What about multi-currency and international shipping?',
    answer: 'We implement multi-currency using plugins like WooCommerce Payments or Multi-Currency. For shipping, we integrate with carriers like FedEx, UPS, and DHL, including real-time rate calculations.'
  }
];

/**
 * WooCommerce Specific Detailed FAQs
 * Used on: Detailed WooCommerce pages, advanced e-commerce solutions
 */
export const woocommerceDetailedFAQs: FAQ[] = [
  {
    question: 'What makes WooCommerce better than Shopify?',
    answer: 'WooCommerce offers complete ownership (no transaction fees), unlimited customization, superior SEO control, no vendor lock-in, and significantly lower long-term costs. It\'s more scalable and integrates seamlessly with WordPress content.'
  },
  {
    question: 'How many products can WooCommerce handle?',
    answer: 'WooCommerce can manage 100,000+ products with proper optimization. We\'ve built stores with 50,000+ products that load in under 2 seconds. The key is proper database optimization, caching, and hosting infrastructure.'
  },
  {
    question: 'Can you set up complex product variations?',
    answer: 'Yes! We handle complex variable products, bundled products, subscription products, composite products, and custom product types. We can create any product configuration your business needs.'
  },
  {
    question: 'What payment gateways do you integrate?',
    answer: 'We integrate all major payment gateways including Stripe, PayPal, Square, Authorize.net, and custom payment processors. We also handle subscription payments, split payments, and multi-currency transactions.'
  },
  {
    question: 'Can WooCommerce handle subscriptions and recurring payments?',
    answer: 'Yes! Using WooCommerce Subscriptions, we can set up any subscription model - monthly, yearly, custom intervals, trials, sign-up fees, and automatic renewals. Perfect for membership sites, SaaS, and recurring product deliveries.'
  },
  {
    question: 'How do you optimize WooCommerce for speed?',
    answer: 'We implement object caching, database optimization, image optimization, lazy loading, CDN, minification, and server-level caching. We also optimize checkout flow and product queries for maximum performance.'
  },
  {
    question: 'Can you integrate WooCommerce with our existing systems?',
    answer: 'Yes! We integrate WooCommerce with ERPs, CRMs, shipping providers, inventory management systems, accounting software, and custom APIs. We build robust, real-time integrations that keep your systems in sync.'
  },
  {
    question: 'What ongoing support do you provide for WooCommerce stores?',
    answer: 'Our WooCommerce support includes updates, security monitoring, performance optimization, payment gateway troubleshooting, inventory management, backup management, and 24/7 emergency support for critical issues.'
  }
];
