/**
 * Homepage FAQ Collection
 * 
 * General questions about LSX Design suitable for homepage display.
 * Covers company overview, project timelines, support, and migrations.
 * 
 * **Topics:**
 * - Company differentiation
 * - Project timelines
 * - Ongoing support
 * - Migration services
 * 
 * **Count:** 4 FAQs
 * 
 * @example
 * import { homepageFAQs } from '@/app/data/faqs';
 * <FAQSection faqs={homepageFAQs} />
 */

import type { FAQ } from './types';

export const homepageFAQs: FAQ[] = [
  {
    question: 'What makes LSX Design different from other WordPress agencies?',
    answer: 'We specialize in token-driven design systems that map directly to WordPress FSE and theme.json. This means faster development, better maintainability, and complete brand consistency across your entire site.'
  },
  {
    question: 'How long does a typical WordPress project take?',
    answer: 'Simple sites take 4-6 weeks, custom block themes 8-12 weeks, and complex WooCommerce stores 12-16 weeks. We provide detailed timelines during discovery based on your specific requirements.'
  },
  {
    question: 'Do you provide ongoing support after launch?',
    answer: 'Yes! All projects include 30 days of post-launch support. We also offer comprehensive maintenance packages starting at $3,000/month including security updates, performance monitoring, and technical support.'
  },
  {
    question: 'Can you help migrate my existing site to a modern block theme?',
    answer: 'Absolutely. We specialize in migrations from classic themes, page builders, and other platforms to modern WordPress FSE block themes with zero downtime and full data preservation.'
  }
];
