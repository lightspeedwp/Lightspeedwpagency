/**
 * Blog FAQ Collections
 * 
 * FAQ collections for blog-related pages including blog index, blog categories,
 * single posts, category archives, and tag archives.
 * 
 * **Collections:**
 * - blogFAQs — Blog index/archive
 * - blogCategoryFAQs — Blog category archives
 * - blogArchiveFAQs — Detailed blog archive
 * - singlePostFAQs — Single blog post pages
 * - categoryArchiveFAQs — Category archive pages
 * - tagArchiveFAQs — Tag archive pages
 * 
 * **Count:** 6 collections
 * 
 * @example
 * import { blogFAQs, singlePostFAQs } from '@/app/data/faqs';
 * <FAQSection faqs={blogFAQs} />
 */

import type { FAQ } from './types';

/**
 * Blog/Index Page FAQs
 * Used on: BlogIndexTemplate
 */
export const blogFAQs: FAQ[] = [
  {
    question: 'How often do you publish new content?',
    answer: 'We publish new articles weekly covering WordPress development, design systems, accessibility, performance optimization, and industry best practices.'
  },
  {
    question: 'Can I subscribe to updates?',
    answer: 'Yes! Subscribe to our newsletter to receive new articles, WordPress tips, and industry insights directly in your inbox. No spam, just valuable content.'
  },
  {
    question: 'Do you offer guest posting opportunities?',
    answer: 'We occasionally accept guest posts from WordPress experts and industry professionals. Contact us with your topic proposal and writing samples for consideration.'
  },
  {
    question: 'Can I share or republish your articles?',
    answer: 'Our content is copyrighted but we allow sharing with proper attribution. For republishing on your site, please contact us for permission and guidelines.'
  }
];

/**
 * Blog Category FAQs
 * Used on: Blog category archives, CategoryArchiveTemplate, TagArchiveTemplate
 */
export const blogCategoryFAQs: FAQ[] = [
  {
    question: 'Can I filter posts by topic or difficulty level?',
    answer: 'Yes! Use category filters to browse by topic (WordPress, Design, WooCommerce) and tag filters to find specific subjects. Some posts are tagged with difficulty levels (Beginner, Advanced).'
  },
  {
    question: 'Are these tutorials suitable for beginners?',
    answer: 'We write for all skill levels. Articles tagged "Beginner" assume minimal WordPress knowledge. "Intermediate" posts require basic understanding. "Advanced" articles are for developers.'
  },
  {
    question: 'Can I request specific tutorial topics?',
    answer: 'Absolutely! Use our contact form to suggest topics you\'d like us to cover. We prioritize requests based on community interest and relevance to our audience.'
  }
];

/**
 * Blog Archive Detailed FAQs
 * Used on: Detailed blog archive pages
 */
export const blogArchiveFAQs: FAQ[] = [
  {
    question: "How often do you publish new blog content?",
    answer: "We publish 2-3 comprehensive blog posts per week covering WordPress development, design systems, accessibility, performance optimization, and industry best practices."
  },
  {
    question: "Can I subscribe to blog updates via email or RSS?",
    answer: "Yes! Subscribe to our newsletter for weekly blog roundups, or use our RSS feed to stay updated. You can also follow us on LinkedIn and Twitter for instant notifications."
  },
  {
    question: "Do you accept guest blog posts or contributions?",
    answer: "We welcome high-quality guest posts about WordPress development, design systems, or web accessibility. Submit your pitch via our contact form with writing samples."
  },
  {
    question: "Can I filter blog posts by topic or category?",
    answer: "Yes! Use the category filters at the top of the page to view posts about WordPress Development, Design, E-commerce, Accessibility, or Performance. You can also search by keyword."
  },
  {
    question: "Are blog posts optimized for SEO?",
    answer: "All blog posts include structured data, optimized meta descriptions, proper heading hierarchy, internal linking, and keyword research. We focus on helpful, in-depth content that ranks."
  }
];

/**
 * Single Blog Post FAQs
 * Used on: SinglePostTemplate
 */
export const singlePostFAQs: FAQ[] = [
  {
    question: "Can I share or reference this article in my own content?",
    answer: "Yes! We encourage sharing with proper attribution. Include a link back to the original article and cite 'LSX Design' as the source. For republishing full articles, contact us for permission."
  },
  {
    question: "How do I implement the techniques described in this post?",
    answer: "Our articles include step-by-step instructions and code examples. If you need help implementing, we offer consulting services and can provide custom development assistance."
  },
  {
    question: "Are there related articles or tutorials?",
    answer: "Yes! Check the 'Related Posts' section below for similar content. You can also browse by category or tag to find articles on related topics."
  },
  {
    question: "Can I ask questions about this article?",
    answer: "Absolutely! Leave a comment below and our team will respond. For complex questions or consulting needs, contact us directly via our contact form."
  },
  {
    question: "How often is this content updated?",
    answer: "We review popular articles quarterly and update them when WordPress, plugins, or best practices change. Updated articles show a 'Last Updated' date at the top."
  }
];

/**
 * Category Archive FAQs
 * Used on: CategoryArchiveTemplate
 */
export const categoryArchiveFAQs: FAQ[] = [
  {
    question: "How do I find specific topics within this category?",
    answer: "Use the search bar to find specific keywords, or browse by tags to narrow down to precise topics. You can also sort posts by date (newest first) or popularity (most viewed)."
  },
  {
    question: "Can I subscribe to updates for this category only?",
    answer: "Yes! Each category has its own RSS feed. Subscribe to receive notifications when we publish new content in this specific topic area."
  },
  {
    question: "Are there beginner-friendly articles in this category?",
    answer: "Yes! We tag articles by difficulty level: Beginner, Intermediate, and Advanced. Filter by skill level to find content matched to your experience."
  },
  {
    question: "How can I suggest topics for future articles?",
    answer: "We welcome topic suggestions! Use our contact form or comment on existing posts with requests. We prioritize topics based on community interest and relevance."
  }
];

/**
 * Tag Archive FAQs
 * Used on: TagArchiveTemplate
 */
export const tagArchiveFAQs: FAQ[] = [
  {
    question: "What's the difference between categories and tags?",
    answer: "Categories are broad topic areas (WordPress Development, Design). Tags are specific keywords within those topics (Block Themes, Accessibility, Performance). Tags help you find precise content."
  },
  {
    question: "Can I view all tags to explore related topics?",
    answer: "Yes! Visit our tag cloud page to see all tags with larger text indicating more posts. Click any tag to view related content."
  },
  {
    question: "How do you decide which tags to use for articles?",
    answer: "We use tags that match common search queries and technical terms. Tags are curated to ensure consistency and help readers discover related content easily."
  }
];
