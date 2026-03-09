/**
 * Archive FAQ Collections
 * 
 * FAQ collections for general archive pages including author archives,
 * date archives, and search results.
 * 
 * **Collections:**
 * - authorArchiveFAQs — Author archive pages
 * - dateArchiveFAQs — Date-based archive pages
 * - searchResultsFAQs — Search results pages
 * 
 * **Count:** 3 collections
 * 
 * @example
 * import { authorArchiveFAQs } from '@/app/data/faqs';
 * <FAQSection faqs={authorArchiveFAQs} />
 */

import type { FAQ } from './types';

/**
 * Author Archive FAQs
 * Used on: AuthorArchiveTemplate
 */
export const authorArchiveFAQs: FAQ[] = [
  {
    question: "Can I follow specific authors to see their latest posts?",
    answer: "Yes! Subscribe to an author's RSS feed or follow them on LinkedIn/Twitter. You'll receive notifications when they publish new content."
  },
  {
    question: "How do I contact an author with questions about their article?",
    answer: "Comment on the article directly, or use the contact link on the author's profile. Most authors respond within 24-48 hours to reader questions."
  },
  {
    question: "Do all authors write about the same topics?",
    answer: "No! Each author has specific expertise. Check their bio to see their specializations (development, design, SEO, etc.) and browse their articles to find relevant content."
  }
];

/**
 * Date Archive FAQs
 * Used on: DateArchiveTemplate
 */
export const dateArchiveFAQs: FAQ[] = [
  {
    question: "Why are older posts still relevant?",
    answer: "We update popular posts regularly to reflect current WordPress features and best practices. Posts marked with 'Updated' badges have been reviewed and refreshed recently."
  },
  {
    question: "Can I browse posts by year or month?",
    answer: "Yes! Use the archive dropdown or calendar widget to browse posts from specific time periods. This is helpful for tracking WordPress feature evolution over time."
  },
  {
    question: "How far back does your content archive go?",
    answer: "Our blog archive dates back to 2014 when we founded LSX Design. While some older posts are archived, we maintain hundreds of updated, relevant articles."
  }
];

/**
 * Search Results FAQs
 * Used on: SearchTemplate, search results pages
 */
export const searchResultsFAQs: FAQ[] = [
  {
    question: "How can I improve my search results?",
    answer: "Try using specific keywords, filter by category or post type, or browse our sitemap for structured navigation. Our search indexes titles, content, and tags."
  },
  {
    question: "Can I search for specific file types or resources?",
    answer: "Yes! Use filters to narrow results to specific post types (blog posts, case studies, tutorials). You can also filter by category or tag for precise results."
  },
  {
    question: "Why didn't I find what I was looking for?",
    answer: "Try alternative keywords, check spelling, or browse our categories. If you still can't find it, contact us—we may not have covered that topic yet and can prioritize it."
  },
  {
    question: "Can I save or bookmark search results?",
    answer: "Bookmark the search results URL to save your filters and query. You can also subscribe to specific categories to get notified when new content matching your interests is published."
  }
];
