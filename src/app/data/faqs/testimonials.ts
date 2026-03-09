/**
 * Testimonials FAQ Collections
 * 
 * FAQ collections for testimonial and review pages.
 * 
 * **Collections:**
 * - testimonialPageFAQs — Testimonial page (from faqs.ts)
 * - testimonialsPageFAQs — Testimonials page (from faqs-extended.ts)
 * 
 * **Count:** 2 collections
 * 
 * @example
 * import { testimonialPageFAQs } from '@/app/data/faqs';
 * <FAQSection faqs={testimonialPageFAQs} />
 */

import type { FAQ } from './types';

/**
 * Testimonial Page FAQs
 * Used on: TestimonialArchiveTemplate, general testimonials
 */
export const testimonialPageFAQs: FAQ[] = [
  {
    question: 'Are these testimonials from real clients?',
    answer: 'Yes! All testimonials are from real clients who have worked with LightSpeed. We never use fake reviews or stock testimonials. Each testimonial includes the client\'s name, company, and often a link to their live project.'
  },
  {
    question: 'Can I contact these clients directly?',
    answer: 'Some clients have agreed to serve as references and are happy to discuss their experience. Contact us and we\'ll connect you with relevant references based on your project type and industry.'
  },
  {
    question: 'Where can I see the full case studies for these projects?',
    answer: 'Visit our Portfolio page to see detailed case studies including project goals, challenges, solutions, and results. Many testimonials link directly to their corresponding case study.'
  },
  {
    question: 'Do you have testimonials for specific services?',
    answer: 'Yes! Use the filters to view testimonials by service type (WordPress Development, WooCommerce, Design, Migration) or industry (Tourism, E-commerce, Healthcare, etc.).'
  },
  {
    question: 'How do you collect testimonials?',
    answer: 'We request feedback from every client post-launch through surveys, video interviews, and written reviews. Clients provide testimonials voluntarily and we always ask permission before publishing.'
  },
  {
    question: 'What makes a good testimonial?',
    answer: 'Great testimonials highlight specific results, describe the working relationship, mention challenges we overcame, and include measurable outcomes (traffic increase, conversion improvements, time saved).'
  }
];

/**
 * Testimonials Page Detailed FAQs
 * Used on: Detailed testimonials pages
 */
export const testimonialsPageFAQs: FAQ[] = [
  {
    question: "Are these testimonials verified?",
    answer: "Yes! All testimonials are from verified clients with completed projects. Many include links to live websites, LinkedIn recommendations, or third-party review platforms (Clutch, Google Business)."
  },
  {
    question: "Can I filter testimonials by industry or project type?",
    answer: "Absolutely! Use the filters above to view testimonials from your industry (tourism, e-commerce, SaaS) or service type (development, design, migration, maintenance)."
  },
  {
    question: "Do you have video testimonials?",
    answer: "Yes! We have video testimonials from select clients. These provide deeper insights into the collaboration process, results achieved, and overall experience working with LSX Design."
  },
  {
    question: "How recent are these testimonials?",
    answer: "Testimonials span from recent projects (last 6 months) to long-term clients (5+ years). Recent testimonials reflect current processes, while older ones demonstrate sustained relationships and ongoing support."
  },
  {
    question: "Can I leave a testimonial for LSX Design?",
    answer: "We'd be honored! If you're a current or past client, contact us to submit a testimonial via written review, video interview, or LinkedIn recommendation. We appreciate your feedback!"
  }
];
