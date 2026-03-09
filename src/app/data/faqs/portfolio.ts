/**
 * Portfolio FAQ Collections
 * 
 * FAQ collections for portfolio-related pages including portfolio archives,
 * portfolio categories, and single portfolio projects.
 * 
 * **Collections:**
 * - portfolioFAQs — General portfolio archive
 * - portfolioCategoryFAQs — Portfolio category archives
 * - portfolioArchiveFAQs — Detailed portfolio archive
 * - singlePortfolioFAQs — Single portfolio project pages
 * 
 * **Count:** 4 collections
 * 
 * @example
 * import { portfolioFAQs } from '@/app/data/faqs';
 * <FAQSection faqs={portfolioFAQs} />
 */

import type { FAQ } from './types';

/**
 * Portfolio Page FAQs
 * Used on: PortfolioArchiveTemplate (general)
 */
export const portfolioFAQs: FAQ[] = [
  {
    question: 'Can I see more case studies?',
    answer: 'Yes! Our portfolio showcases detailed case studies across various industries. Contact us for access to confidential projects or specific industry examples not shown publicly.'
  },
  {
    question: 'What industries do you serve?',
    answer: 'We work across all industries including e-commerce, healthcare, education, finance, nonprofits, technology, and professional services. Our design system approach adapts to any sector.'
  },
  {
    question: 'Do you have references available?',
    answer: 'Absolutely. We can connect you with past clients who have agreed to serve as references. We\'re proud of our 98% client satisfaction rating and long-term relationships.'
  },
  {
    question: 'What was the typical project duration for these?',
    answer: 'Project timelines vary by complexity. Simple sites took 4-6 weeks, custom platforms 8-12 weeks, and complex WooCommerce stores 12-16 weeks. Each case study includes specific timeline details.'
  },
  {
    question: 'Can you build something similar for us?',
    answer: 'Yes! While every project is custom-tailored, we can use proven patterns and approaches from past work. Schedule a consultation to discuss how we can adapt our experience to your needs.'
  }
];

/**
 * Portfolio Category FAQs
 * Used on: Portfolio category archive pages
 */
export const portfolioCategoryFAQs: FAQ[] = [
  {
    question: 'How do I filter projects by industry or service type?',
    answer: 'Use the filter options at the top of the page to narrow by industry (Tourism, E-commerce, Healthcare) or service type (Custom Development, Design, Migration). You can apply multiple filters.'
  },
  {
    question: 'Can I see the project timeline and budget for each case study?',
    answer: 'Each case study includes approximate project duration and complexity indicators. For specific budget information, contact us to discuss similar projects and get a custom quote.'
  },
  {
    question: 'Do you work with international clients?',
    answer: 'Yes! Over 60% of our portfolio projects are for international clients across 30+ countries. We excel at remote collaboration across time zones.'
  }
];

/**
 * Portfolio Archive Detailed FAQs
 * Used on: Detailed portfolio archive pages
 */
export const portfolioArchiveFAQs: FAQ[] = [
  {
    question: "Can I see case studies for projects similar to mine?",
    answer: "Use our industry and service filters to find projects matching your sector (e-commerce, SaaS, tourism, etc.) and requirements (custom development, design, migration)."
  },
  {
    question: "Do you provide client references or testimonials?",
    answer: "Yes! Each portfolio project includes client testimonials. We can also connect you with past clients (with their permission) to discuss their experience working with us."
  },
  {
    question: "How long does a typical project take from start to finish?",
    answer: "Most projects take 4-12 weeks depending on complexity. Discovery and planning: 1-2 weeks. Design: 2-3 weeks. Development: 3-5 weeks. Testing and launch: 1-2 weeks."
  },
  {
    question: "Can you show examples of WordPress sites you've built in my industry?",
    answer: "We've built WordPress sites for tourism, e-commerce, SaaS, healthcare, finance, education, and nonprofits. Filter our portfolio by industry to see relevant case studies."
  },
  {
    question: "Do you only work with large companies or also small businesses?",
    answer: "We work with businesses of all sizes from startups to enterprises. Our portfolio includes solo entrepreneurs, growing SMBs, and Fortune 500 companies. We tailor solutions to your budget."
  }
];

/**
 * Single Portfolio Project FAQs
 * Used on: SingleProjectTemplate
 */
export const singlePortfolioFAQs: FAQ[] = [
  {
    question: "Can you build something similar for my business?",
    answer: "Absolutely! While every project is custom-tailored, we can adapt successful patterns and approaches from this case study to your specific needs. Schedule a consultation to discuss."
  },
  {
    question: "What was the timeline for this specific project?",
    answer: "Project timelines are outlined in the case study details above. Timelines vary based on scope, client responsiveness, and complexity. We'll provide a detailed estimate for your project."
  },
  {
    question: "Can I speak with this client about their experience?",
    answer: "Some clients are available as references. We'll ask permission and, if they agree, connect you to discuss their experience, timeline, communication, and results."
  },
  {
    question: "What technologies and tools were used for this project?",
    answer: "Technical details are included in the case study. We typically use WordPress FSE, custom block themes, WooCommerce (for e-commerce), and modern frontend tools (React, TypeScript)."
  },
  {
    question: "Do you offer ongoing support for projects like this?",
    answer: "Yes! We provide post-launch support and ongoing maintenance packages including updates, monitoring, backups, and feature enhancements. Many portfolio clients are on long-term retainers."
  }
];
