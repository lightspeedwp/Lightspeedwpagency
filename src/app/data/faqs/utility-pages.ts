/**
 * Utility Pages FAQ Collections
 * 
 * FAQ collections for utility and meta pages including search, 404 error,
 * sitemap, and the FAQ page itself.
 * 
 * **Collections:**
 * - searchFAQs — Search functionality
 * - error404FAQs — 404 error page
 * - sitemapFAQs — Sitemap page
 * - faqPageFAQs — FAQ page (meta)
 * 
 * **Count:** 4 collections
 * 
 * @example
 * import { error404FAQs } from '@/app/data/faqs';
 * <FAQSection faqs={error404FAQs} />
 */

import type { FAQ } from './types';

/**
 * Search FAQs
 * Used on: SearchTemplate, search results pages
 */
export const searchFAQs: FAQ[] = [
  {
    question: 'What content can I search for?',
    answer: 'Our global search covers all content including blog posts, portfolio projects, videos, podcasts, service pages, and solution pages. Results are grouped by content type for easy browsing.'
  },
  {
    question: 'Can I filter search results?',
    answer: 'Yes! Search results can be filtered by content type (Blog, Portfolio, Videos, Podcasts, Pages) and sorted by relevance, date, or popularity. Category-specific filters appear based on the content type you select.'
  }
];

/**
 * 404 Error Page FAQs
 * Used on: Error404Template
 */
export const error404FAQs: FAQ[] = [
  {
    question: "Why am I seeing a 404 error page?",
    answer: "The page you're looking for may have been moved, deleted, or the URL might be incorrect. Use our search or site map to find what you need."
  },
  {
    question: "How can I report a broken link on your website?",
    answer: "We appreciate it! Email us at hello@lsxdesign.com with the broken URL and where you found it. We'll fix it within 24 hours."
  },
  {
    question: "Can you help me find the page I was looking for?",
    answer: "Absolutely! Contact us with details about what you were seeking and we'll direct you to the right page or create it if it doesn't exist."
  }
];

/**
 * Sitemap FAQs
 * Used on: SiteMapTemplate
 */
export const sitemapFAQs: FAQ[] = [
  {
    question: "What's the difference between an HTML sitemap and XML sitemap?",
    answer: "HTML sitemaps (this page) help humans navigate your site. XML sitemaps help search engines crawl your site. We generate both automatically for every WordPress site."
  },
  {
    question: "Why can't I find a specific page in the sitemap?",
    answer: "Some pages may be excluded from the sitemap (admin pages, private content, redirects). If you can't find a public page, contact us to investigate."
  },
  {
    question: "How often is the sitemap updated?",
    answer: "Our sitemap automatically updates when new pages are published or existing pages are modified. Search engines typically discover changes within 24 hours."
  }
];

/**
 * FAQ Page FAQs (Meta!)
 * Used on: FAQTemplate
 */
export const faqPageFAQs: FAQ[] = [
  {
    question: "I can't find the answer to my question. What should I do?",
    answer: "Contact us directly! Use our contact form, live chat, or email hello@lsxdesign.com. We respond to all inquiries within 24 hours on business days."
  },
  {
    question: "Can I suggest new FAQs to add to this page?",
    answer: "Yes! We appreciate feedback. If you had a question not answered here, let us know and we'll add it to help future visitors."
  },
  {
    question: "Are these FAQs updated regularly?",
    answer: "Yes! We review and update FAQs monthly based on common questions from clients, support tickets, and industry changes."
  }
];
