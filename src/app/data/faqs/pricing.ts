/**
 * Pricing FAQ Collections
 * 
 * FAQ collections for pricing-related pages including pricing timelines,
 * pricing pages, and ROI calculator.
 * 
 * **Collections:**
 * - pricingTimelineFAQs — Pricing and timeline information
 * - pricingPageFAQs — Pricing page specific
 * - roiCalculatorFAQs — ROI calculator page
 * 
 * **Count:** 3 collections
 * 
 * @example
 * import { pricingTimelineFAQs } from '@/app/data/faqs';
 * <FAQSection faqs={pricingTimelineFAQs} />
 */

import type { FAQ} from './types';

/**
 * Pricing & Timeline FAQs
 * Used on: ROICalculatorTemplate, general pricing inquiries
 */
export const pricingTimelineFAQs: FAQ[] = [
  {
    question: 'What is your typical project timeline?',
    answer: 'Timelines depend on project scope. Simple sites: 4-6 weeks. Custom block themes: 8-12 weeks. Complex WooCommerce stores: 12-16 weeks. We provide a detailed timeline with milestones before starting any project.'
  },
  {
    question: 'How do you structure payments?',
    answer: 'We typically split payments into milestones: 40% deposit to start, 30% upon design approval/mid-development, and 30% before launch. For larger projects, we can structure monthly billing milestones.'
  },
  {
    question: 'Are there any hidden costs?',
    answer: 'No hidden costs. We transparently outline all costs including third-party fees (hosting, domains, premium plugins, font licenses) in our proposals. Any scope additions during the project are discussed and approved before implementation.'
  },
  {
    question: 'Do you offer rush delivery?',
    answer: 'Yes, depending on our team\'s availability, we can expedite projects for an additional rush fee (typically 20-30%). This allows us to allocate extra resources and work outside standard hours to meet tight deadlines.'
  },
  {
    question: 'What happens if the project goes over timeline?',
    answer: 'We pride ourselves on hitting deadlines. If delays occur due to our team, we prioritize your project to get back on track. If delays occur due to client feedback or content delivery, we adjust the timeline accordingly.'
  }
];

/**
 * Pricing Page FAQs
 * Used on: PricingTemplate
 */
export const pricingPageFAQs: FAQ[] = [
  {
    question: "What's included in your standard pricing packages?",
    answer: "All packages include discovery workshops, design system development, custom WordPress block theme, accessibility testing (WCAG 2.1 AA), performance optimization, training, documentation, and 30 days post-launch support."
  },
  {
    question: "Do you offer payment plans or financing?",
    answer: "Yes! For projects over $20,000, we offer flexible payment plans spread over 3-6 months. We also accept payment via credit card, ACH transfer, or wire transfer."
  },
  {
    question: "What's not included in the base price?",
    answer: "Base pricing excludes: third-party services (hosting, domains, premium plugins/fonts), ongoing content creation, custom integrations with complex APIs, and advanced e-commerce features. We outline all costs upfront."
  },
  {
    question: "Can I upgrade my package later?",
    answer: "Absolutely! You can upgrade during the project or add services after launch. Common additions include SEO services, content creation, additional design pages, or ongoing maintenance."
  },
  {
    question: "Do you offer discounts for nonprofits or startups?",
    answer: "Yes! We offer 15-20% discounts for registered nonprofits and qualified startups. Contact us with your nonprofit documentation or startup details for a custom quote."
  }
];

/**
 * ROI Calculator FAQs
 * Used on: ROICalculatorTemplate
 */
export const roiCalculatorFAQs: FAQ[] = [
  {
    question: "How accurate is the ROI calculator?",
    answer: "The calculator provides estimates based on industry averages and our client data. Actual ROI depends on your industry, marketing efforts, and business model. We provide conservative estimates."
  },
  {
    question: "What metrics does the ROI calculator consider?",
    answer: "We factor in: conversion rate improvements (average 40% increase), load time reduction (1-2 seconds faster), SEO ranking improvements, reduced bounce rates, and increased user engagement from better UX."
  },
  {
    question: "How long does it take to see ROI from a new website?",
    answer: "Most clients see measurable ROI within 3-6 months through improved conversion rates and SEO performance. E-commerce sites often see positive ROI within 1-3 months due to better checkout experiences."
  },
  {
    question: "Can you guarantee specific ROI results?",
    answer: "While we can't guarantee specific numbers (too many external factors), we can guarantee technical improvements: faster load times, better accessibility, improved SEO foundation, and enhanced user experience—all proven to increase conversions."
  },
  {
    question: "What if I don't see the projected ROI?",
    answer: "We work with you post-launch to optimize for conversions. This includes A/B testing, analytics review, and UX improvements. Our maintenance clients get ongoing optimization as part of their package."
  }
];
