/**
 * Extended FAQ Data Repository — Template-Specific FAQs
 * 
 * Comprehensive FAQ collections for every template in the LSX Design system.
 * Each collection is contextual to its specific page type or template.
 * 
 * **Organization:**
 * - Service Templates (6 services: WordPress, WooCommerce, Design, Content, Security, Migrations)
 * - Solution Templates (3 solutions: LSX, WordPress, WooCommerce)
 * - Archive Templates (Blog, Portfolio, Category, Tag, Date, Author, Search)
 * - Single Templates (Post, Portfolio Single)
 * - Utility Pages (404, Contact, Sitemap, Pricing, FAQ, Testimonials)
 * - About Pages (About, Team, Process, Culture, History)
 * - Conversion Pages (Why Choose Us, Guarantees, ROI Calculator)
 * 
 * Created: January 19, 2025
 * 
 * @see /src/app/data/faqs.ts - Base FAQ collections
 * @see /guidelines/blocks/design/Accordion.md - Accordion component docs
 */

import { FAQ } from './faqs';

// ============================================
// SERVICE TEMPLATE FAQs
// ============================================

/**
 * WordPress Development Service FAQs
 * Template: DevelopmentServiceTemplate
 */
export const wordpressDevelopmentFAQs: FAQ[] = [
  {
    question: "Do you build custom WordPress themes or use existing templates?",
    answer: "We specialize in custom WordPress block themes built from scratch using the WordPress Full Site Editing (FSE) system. Every theme is tailored to your brand and requirements, not a pre-made template."
  },
  {
    question: "What's the difference between WordPress.com and WordPress.org?",
    answer: "WordPress.org is self-hosted open-source software that gives you full control and ownership. WordPress.com is a hosted service with limitations. We build on WordPress.org for maximum flexibility and control."
  },
  {
    question: "Can you migrate my existing WordPress site to a modern block theme?",
    answer: "Yes! We offer migration services to convert Classic Editor or page builder sites to modern WordPress block themes. This includes content migration, design recreation, and performance optimization."
  },
  {
    question: "How long does a custom WordPress development project take?",
    answer: "Typical custom WordPress projects take 4-8 weeks from kickoff to launch. This includes discovery, design, development, testing, and deployment. Complex projects may take 10-12 weeks."
  },
  {
    question: "Do you provide training on how to manage my WordPress site?",
    answer: "Absolutely! Every project includes comprehensive training sessions covering content editing, page management, and site administration. We also provide video tutorials and written documentation."
  }
];

/**
 * WooCommerce Service FAQs
 * Template: Not yet created (use for e-commerce pages)
 */
export const woocommerceServiceFAQs: FAQ[] = [
  {
    question: "Can WooCommerce handle large product catalogs?",
    answer: "Yes! WooCommerce is highly scalable and can handle thousands of products with proper hosting and optimization. We implement caching, database optimization, and CDN integration for large catalogs."
  },
  {
    question: "What payment gateways does WooCommerce support?",
    answer: "WooCommerce supports 100+ payment gateways including Stripe, PayPal, Square, and regional options. We configure secure payment processing with PCI compliance and fraud prevention."
  },
  {
    question: "Can you integrate WooCommerce with my existing accounting software?",
    answer: "Yes! We integrate WooCommerce with popular accounting platforms like QuickBooks, Xero, and FreshBooks. This includes automatic order syncing, inventory management, and financial reporting."
  },
  {
    question: "Do you offer ongoing WooCommerce store maintenance?",
    answer: "We provide comprehensive WooCommerce maintenance including security updates, performance optimization, backup management, and 24/7 monitoring. Plans start at $199/month."
  },
  {
    question: "How do you optimize WooCommerce for mobile shopping?",
    answer: "We implement responsive design, mobile-optimized checkout flows, touch-friendly interfaces, and performance optimization specifically for mobile devices. All stores are tested on iOS and Android."
  }
];

/**
 * Design Service FAQs
 * Template: DesignServiceTemplate
 */
export const designServiceFAQs: FAQ[] = [
  {
    question: "What's included in your design system service?",
    answer: "Our design systems include typography scales, color palettes, spacing systems, component libraries, accessibility standards, and comprehensive documentation. Everything is built with WordPress FSE compatibility in mind."
  },
  {
    question: "Can you redesign my existing WordPress site without changing the structure?",
    answer: "Yes! We offer visual redesigns that maintain your existing content structure and functionality while modernizing the aesthetics, improving UX, and enhancing brand consistency."
  },
  {
    question: "Do you provide design files (Figma, Adobe XD) or just WordPress themes?",
    answer: "We provide both! Every project includes complete Figma design files with your design system documented, plus the fully implemented WordPress theme. You own all design assets."
  },
  {
    question: "How do you ensure designs work across all devices and browsers?",
    answer: "We follow mobile-first responsive design principles and test on real devices (iOS, Android, tablets, desktops) plus all major browsers (Chrome, Firefox, Safari, Edge). WCAG 2.1 AA compliance is standard."
  },
  {
    question: "Can you match my existing brand guidelines in the WordPress design?",
    answer: "Absolutely! We work with your brand guidelines (colors, fonts, logos, voice) and translate them into a WordPress-compatible design system. If you don't have guidelines, we can create them."
  }
];

/**
 * Content Service FAQs
 * Template: ContentServiceTemplate
 */
export const contentServiceDetailedFAQs: FAQ[] = [
  {
    question: "Do you write content for WordPress sites or just migrate existing content?",
    answer: "We offer both! Our content services include SEO-optimized copywriting for new sites, content migration from old platforms, and content strategy development. We can also train your team on WordPress content editing."
  },
  {
    question: "Can you optimize my existing WordPress content for SEO?",
    answer: "Yes! We audit existing content, optimize headings and meta descriptions, add structured data, improve keyword targeting, and enhance readability. This typically increases organic traffic by 40-60%."
  },
  {
    question: "Do you provide ongoing content management services?",
    answer: "We offer monthly content packages including blog writing, page updates, image optimization, and SEO monitoring. Plans start at $499/month for 4 blog posts and basic updates."
  },
  {
    question: "How do you ensure content is accessible (WCAG compliant)?",
    answer: "All content includes proper heading hierarchy, alt text for images, descriptive link text, and plain language. We test with screen readers and follow WCAG 2.1 AA standards."
  },
  {
    question: "Can you migrate content from Wix, Squarespace, or Shopify to WordPress?",
    answer: "Yes! We migrate content from any platform including Wix, Squarespace, Shopify, Drupal, and custom CMSs. This includes pages, posts, images, products, and maintaining SEO rankings."
  }
];

/**
 * Security Service FAQs
 * Template: SecurityServiceTemplate
 */
export const securityServiceFAQs: FAQ[] = [
  {
    question: "How do you protect WordPress sites from hackers and malware?",
    answer: "We implement firewalls, malware scanning, brute force protection, two-factor authentication, SSL/HTTPS, security headers, and daily backups. All sites are monitored 24/7 for threats."
  },
  {
    question: "What happens if my WordPress site gets hacked?",
    answer: "Our security service includes hack recovery with guaranteed 4-hour response time. We remove malware, restore clean backups, patch vulnerabilities, and implement preventive measures."
  },
  {
    question: "Do you offer security audits for existing WordPress sites?",
    answer: "Yes! We provide comprehensive security audits covering plugins, themes, server configuration, user permissions, and code vulnerabilities. You receive a detailed report with prioritized fixes."
  },
  {
    question: "How often should WordPress security updates be applied?",
    answer: "WordPress core, plugins, and themes should be updated within 72 hours of releases. Our managed security service applies updates within 24 hours with automatic rollback if issues occur."
  },
  {
    question: "Is two-factor authentication necessary for WordPress sites?",
    answer: "Yes! Two-factor authentication (2FA) prevents 99.9% of automated attacks. We implement 2FA for all admin accounts and can integrate with Authy, Google Authenticator, or SMS-based systems."
  }
];

/**
 * Migrations Service FAQs
 * Template: MigrationsServiceTemplate
 */
export const migrationsServiceDetailedFAQs: FAQ[] = [
  {
    question: "How long does a typical WordPress migration take?",
    answer: "Simple migrations (under 100 pages) take 3-5 business days. Complex migrations with thousands of pages, custom post types, or e-commerce can take 2-4 weeks. We provide detailed timelines during discovery."
  },
  {
    question: "Will migrating to WordPress affect my SEO rankings?",
    answer: "No! We implement 301 redirects, preserve meta tags, maintain URL structures (or improve them), and submit new sitemaps to Google. Most migrations see improved SEO due to better performance."
  },
  {
    question: "Can you migrate from custom-built CMS platforms to WordPress?",
    answer: "Yes! We've migrated sites from proprietary CMSs, legacy systems, and custom-built platforms. This includes database migration, content transformation, and feature recreation in WordPress."
  },
  {
    question: "Do you provide a backup before starting the migration?",
    answer: "Always! We create full backups of your source site before migration and maintain them for 90 days post-launch. Your current site stays live until you approve the new WordPress site."
  },
  {
    question: "What if some features from my old site don't exist in WordPress?",
    answer: "We recreate custom features using WordPress plugins or custom development. If a feature is truly unique, we build it as a custom WordPress plugin to ensure full compatibility."
  }
];

/**
 * Support Service FAQs
 * Template: SupportServiceTemplate
 */
export const supportServiceFAQs: FAQ[] = [
  {
    question: "What's included in your WordPress support plans?",
    answer: "Support plans include unlimited support tickets, plugin/theme updates, performance monitoring, security scanning, daily backups, uptime monitoring, and priority response times. Plans start at $149/month."
  },
  {
    question: "How fast do you respond to WordPress support requests?",
    answer: "Standard plan: 24 hours. Priority plan: 4 hours. Emergency plan: 1 hour. Critical issues (site down, security breach) always get immediate response regardless of plan."
  },
  {
    question: "Can you fix issues caused by other developers or agencies?",
    answer: "Yes! We specialize in WordPress rescue projects. We audit code, fix bugs, resolve conflicts, and clean up technical debt. You receive a full report of issues found and fixes applied."
  },
  {
    question: "Do you offer white-label WordPress support for agencies?",
    answer: "Absolutely! We provide white-label support for design agencies, marketing firms, and freelancers. Your clients communicate with you while we handle the technical work behind the scenes."
  },
  {
    question: "What if I need support outside regular business hours?",
    answer: "Our Premium and Enterprise support plans include 24/7 coverage. We have teams across time zones to ensure someone is always available for critical issues."
  }
];

// ============================================
// SOLUTION TEMPLATE FAQs
// ============================================

/**
 * LSX Design Solution FAQs
 * Template: LSXDesignTemplate
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
 * Template: WordPressSolutionTemplate
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
 * Template: WooCommerceSolutionTemplate
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

// ============================================
// ARCHIVE TEMPLATE FAQs
// ============================================

/**
 * Blog Archive FAQs
 * Template: BlogIndexTemplate
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
 * Portfolio Archive FAQs
 * Template: PortfolioArchiveTemplate
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
 * Category Archive FAQs
 * Template: CategoryArchiveTemplate
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
 * Template: TagArchiveTemplate
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

/**
 * Author Archive FAQs
 * Template: AuthorArchiveTemplate
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
 * Template: DateArchiveTemplate
 */
export const dateArchiveFAQs: FAQ[] = [
  {
    question: "Why would I browse posts by date instead of category?",
    answer: "Date archives are useful for finding recent updates, tracking industry trends over time, or locating an article you remember reading in a specific month."
  },
  {
    question: "Are older articles still relevant and up-to-date?",
    answer: "We regularly update popular articles to keep them current. Articles include a 'Last Updated' date. If you notice outdated information, let us know via comments."
  },
  {
    question: "Can I see a timeline of how topics have evolved?",
    answer: "Yes! Browse date archives chronologically to see how WordPress development, design trends, and best practices have evolved over time. You'll see our approach maturing."
  }
];

/**
 * Search Results FAQs
 * Template: SearchResultsPageTemplate
 */
export const searchResultsFAQs: FAQ[] = [
  {
    question: "How can I improve my search results?",
    answer: "Use specific keywords, try variations (WordPress vs WP), or use quotes for exact phrases. Our search covers post titles, content, tags, and categories."
  },
  {
    question: "Why don't I see the article I'm looking for?",
    answer: "Try broader keywords or check the spelling. You can also browse by category or use filters to narrow results by date, author, or topic."
  },
  {
    question: "Can I search within a specific category?",
    answer: "Yes! Select a category filter before searching to limit results to that topic area. This helps find precise content faster."
  },
  {
    question: "Does search include code examples and technical terms?",
    answer: "Yes! Our search indexes code snippets, technical terms, and even image alt text. Use specific function names or WordPress hooks to find relevant tutorials."
  }
];

// ============================================
// SINGLE POST/PROJECT FAQs
// ============================================

/**
 * Single Blog Post FAQs
 * Templates: SinglePostTemplate, SinglePostLongformTemplate
 */
export const singlePostFAQs: FAQ[] = [
  {
    question: "Can I share this article with my team or on social media?",
    answer: "Yes! Use the social sharing buttons to share on LinkedIn, Twitter, or Facebook. You can also copy the URL to share via email or Slack."
  },
  {
    question: "Is there a way to print or save this article as PDF?",
    answer: "Yes! Use your browser's print function (Ctrl+P / Cmd+P) or the print button. The article is formatted for clean printing with code examples preserved."
  },
  {
    question: "Can I download code examples from this tutorial?",
    answer: "Yes! Code snippets include copy buttons. For complete projects, we provide GitHub repository links where applicable."
  },
  {
    question: "How do I get notifications when you publish related content?",
    answer: "Subscribe to our newsletter, follow the article's category RSS feed, or bookmark related tags. We link to related articles at the end of each post."
  },
  {
    question: "Can I ask follow-up questions about this tutorial?",
    answer: "Absolutely! Leave a comment below and we'll respond within 24-48 hours. You can also contact us directly for complex questions."
  }
];

/**
 * Single Portfolio Project FAQs
 * Template: PortfolioSingleTemplate
 */
export const singlePortfolioFAQs: FAQ[] = [
  {
    question: "Can you build a similar project for my business?",
    answer: "Yes! Contact us with details about your project requirements. We'll schedule a discovery call to discuss scope, timeline, and budget."
  },
  {
    question: "What was the timeline and budget for this project?",
    answer: "Each project summary includes timeline and budget ranges. Contact us for a detailed quote based on your specific requirements."
  },
  {
    question: "Can I speak with the client who commissioned this project?",
    answer: "We can connect you with past clients (with their permission) to discuss their experience. Many clients provide video testimonials as well."
  },
  {
    question: "Do you offer similar services for different industries?",
    answer: "Yes! While each project shown is industry-specific, we adapt our approach to any sector. Check our full portfolio to see work across industries."
  },
  {
    question: "Can I see the live website for this project?",
    answer: "Yes! Click the 'View Live Site' button to explore the finished project. Note that some enterprise clients require NDAs, so not all projects are publicly visible."
  }
];

// ============================================
// UTILITY PAGE FAQs
// ============================================

/**
 * 404 Error Page FAQs
 * Template: Error404Template
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
 * Contact Page FAQs (Extended)
 * Template: ContactPageTemplate
 */
export const contactPageDetailedFAQs: FAQ[] = [
  {
    question: "What's the best way to contact you for urgent issues?",
    answer: "For urgent website issues (site down, security breach), call our emergency hotline or use the priority contact form. Response time: under 1 hour for emergencies."
  },
  {
    question: "Do you offer free consultations before starting a project?",
    answer: "Yes! We provide a complimentary 30-minute discovery call to discuss your project, requirements, timeline, and budget. No obligation to proceed."
  },
  {
    question: "How long does it take to receive a project quote?",
    answer: "After our discovery call, you'll receive a detailed quote within 2-3 business days. Complex projects may take up to 5 days for accurate scoping."
  },
  {
    question: "Can you accommodate specific time zones for meetings?",
    answer: "Yes! We have team members across time zones and can schedule meetings convenient for your location, including evenings and weekends if needed."
  },
  {
    question: "Do you work with international clients?",
    answer: "Absolutely! We serve clients worldwide. All communication is in English, and we accommodate different time zones, currencies, and business practices."
  }
];

/**
 * Sitemap FAQs
 * Template: SiteMapTemplate
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
 * Pricing Page FAQs
 * Template: PricingTemplate
 */
export const pricingPageFAQs: FAQ[] = [
  {
    question: "Do you offer custom pricing for unique project requirements?",
    answer: "Yes! Standard packages are starting points. We create custom quotes for complex projects, long-term partnerships, or unique requirements. Contact us for a tailored proposal."
  },
  {
    question: "What payment methods and terms do you accept?",
    answer: "We accept credit cards, ACH transfers, and wire transfers. Payment terms: 50% deposit at kickoff, 50% at launch. Monthly retainers are billed automatically."
  },
  {
    question: "Is there a discount for nonprofits or educational institutions?",
    answer: "Yes! We offer 15% discounts for registered nonprofits, schools, and open-source projects. Verification required."
  },
  {
    question: "What happens if my project scope changes mid-development?",
    answer: "We provide change request estimates before implementing scope changes. Minor tweaks are included; major changes are billed hourly or as addendums to the original contract."
  },
  {
    question: "Do you offer refunds if I'm not satisfied?",
    answer: "We offer a satisfaction guarantee: if you're not happy after the design phase, we'll refund 100% of your deposit. Post-development, we work with you to resolve any issues."
  }
];

/**
 * Testimonials Page FAQs
 * Template: TestimonialsTemplate
 */
export const testimonialsPageFAQs: FAQ[] = [
  {
    question: "Are these testimonials from real clients?",
    answer: "Yes! All testimonials are from real clients with verified projects. We can provide contact information (with client permission) for reference checks."
  },
  {
    question: "Can I speak with past clients before hiring you?",
    answer: "Absolutely! We're happy to connect you with relevant past clients. During discovery calls, we suggest 2-3 references based on your project type."
  },
  {
    question: "Do you have video testimonials or case study interviews?",
    answer: "Yes! Many clients provide video testimonials. Visit our YouTube channel or request videos during your discovery call."
  },
  {
    question: "How recent are these testimonials?",
    answer: "Testimonials are organized by date (newest first). We regularly collect feedback and update this page with recent projects."
  }
];

/**
 * FAQ Page FAQs (Meta!)
 * Template: FAQTemplate
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

// ============================================
// ABOUT/COMPANY PAGE FAQs
// ============================================

/**
 * Team Page FAQs (Extended)
 * Template: TeamTemplate
 */
export const teamPageFAQs: FAQ[] = [
  {
    question: "Who will actually work on my project?",
    answer: "We match projects with specialists based on requirements. You'll meet your dedicated team during kickoff (designer, developer, project manager). No outsourcing or junior developers without disclosure."
  },
  {
    question: "Can I request specific team members for my project?",
    answer: "Yes! If you've worked with us before or prefer a specific developer/designer based on their portfolio, let us know during project scoping."
  },
  {
    question: "Do team members have specific areas of expertise?",
    answer: "Yes! Team bios include specializations (WordPress, WooCommerce, accessibility, performance). We assign specialists matched to your project requirements."
  },
  {
    question: "How do I communicate with the team during the project?",
    answer: "We use Slack, email, or your preferred tool. Weekly check-ins via video call keep you updated. You'll have direct access to your project manager and technical lead."
  },
  {
    question: "Does your team work remotely or in an office?",
    answer: "We're a fully remote team distributed across time zones. This allows 16-hour coverage for urgent issues and flexibility for international client meetings."
  }
];

/**
 * Why Choose Us Page FAQs
 * Template: WhyChooseUsTemplate
 */
export const whyChooseUsFAQs: FAQ[] = [
  {
    question: "What makes your agency different from freelancers?",
    answer: "We provide team expertise (design, development, SEO, accessibility) under one roof. Projects don't depend on one person, we have backup coverage, and we offer ongoing support beyond launch."
  },
  {
    question: "Why should I choose you over larger agencies?",
    answer: "We're small enough to be nimble and give personal attention, but experienced enough to handle enterprise projects. You won't be handed to junior staff or templates."
  },
  {
    question: "Do you have experience with projects like mine?",
    answer: "Likely yes! We've built 200+ WordPress sites across industries. Check our portfolio filtered by your industry or contact us to discuss similar projects we've completed."
  },
  {
    question: "What happens if I'm not satisfied with the work?",
    answer: "We have a satisfaction guarantee. If you're unhappy after design approval, we revise until you're satisfied or refund your deposit. Post-launch, we fix any bugs free for 30 days."
  }
];

/**
 * Guarantees Page FAQs
 * Template: GuaranteesTemplate
 */
export const guaranteesFAQs: FAQ[] = [
  {
    question: "What exactly does your satisfaction guarantee cover?",
    answer: "If you're not satisfied with designs after the review phase, we'll revise or refund your deposit 100%. Post-development bugs are fixed free for 30 days. Major issues are resolved promptly."
  },
  {
    question: "How do I claim the performance guarantee if my site is slow?",
    answer: "Contact support with performance issues. We audit, identify bottlenecks, and implement fixes within 48 hours. If we can't achieve promised speeds, we refund performance optimization fees."
  },
  {
    question: "Does the security guarantee cover all types of attacks?",
    answer: "Our security guarantee covers common WordPress vulnerabilities (plugin exploits, brute force, SQL injection). We don't cover attacks due to compromised hosting credentials or zero-day exploits before patches exist."
  },
  {
    question: "What's not covered under your guarantees?",
    answer: "Guarantees don't cover issues from client modifications, third-party plugins installed post-launch, hosting problems, or force majeure events. Reasonable limitations apply."
  }
];

/**
 * ROI Calculator FAQs
 * Template: ROICalculatorTemplate
 */
export const roiCalculatorFAQs: FAQ[] = [
  {
    question: "How accurate are ROI calculator results?",
    answer: "Results are estimates based on industry averages and our client data. Actual ROI varies by industry, implementation quality, and ongoing optimization. Conservative estimates are used."
  },
  {
    question: "What factors influence WordPress website ROI?",
    answer: "ROI depends on conversion rate optimization, SEO performance, page speed, mobile experience, content quality, and ongoing maintenance. We optimize all these factors."
  },
  {
    question: "Can you guarantee the ROI shown in the calculator?",
    answer: "We can't guarantee specific ROI as many factors are beyond our control (market conditions, competition, your sales process). We guarantee quality work that maximizes potential ROI."
  },
  {
    question: "How long does it take to see ROI from a new WordPress site?",
    answer: "Immediate ROI from improved conversion rates (1-3 months). SEO ROI takes 4-6 months as rankings improve. Full ROI typically achieved within 12-18 months."
  }
];

// ============================================
// INDUSTRY-SPECIFIC FAQs
// ============================================

/**
 * Tour Operator Solution FAQs
 * Template: TourOperatorTemplate
 */
export const tourOperatorFAQs: FAQ[] = [
  {
    question: "Can WordPress handle complex booking and availability systems?",
    answer: "Yes! We integrate WordPress with booking engines like Bokun, FareHarbor, or custom systems. This includes real-time availability, dynamic pricing, and automated confirmations."
  },
  {
    question: "Do you integrate with tour management software like Rezdy or Peek?",
    answer: "Absolutely! We integrate WordPress with all major tour booking platforms. This includes two-way sync of availability, bookings, and customer data."
  },
  {
    question: "Can you handle multi-day tours with complex itineraries?",
    answer: "Yes! We build custom post types for tours with day-by-day itineraries, included activities, accommodation details, and interactive maps. Everything is SEO-optimized."
  },
  {
    question: "How do you optimize tour operator websites for international visitors?",
    answer: "We implement multi-language support, currency conversion, international payment gateways, and geolocation-based content. Sites are optimized for global SEO."
  },
  {
    question: "Can you add features like weather widgets or live camera feeds?",
    answer: "Yes! We integrate weather APIs, webcams, live activity feeds, and social proof (recent bookings). These features increase engagement and bookings."
  }
];

// ============================================
// EXPORT ALL FAQ COLLECTIONS
// ============================================

/**
 * Complete FAQ collection object
 * Import individual collections as needed
 */
export const extendedFAQs = {
  // Services
  wordpressDevelopment: wordpressDevelopmentFAQs,
  woocommerceService: woocommerceServiceFAQs,
  designService: designServiceFAQs,
  contentService: contentServiceDetailedFAQs,
  securityService: securityServiceFAQs,
  migrationsService: migrationsServiceDetailedFAQs,
  supportService: supportServiceFAQs,
  
  // Solutions
  lsxDesign: lsxDesignFAQs,
  wordpressSolution: wordpressSolutionFAQs,
  woocommerceSolution: woocommerceSolutionFAQs,
  
  // Archives
  blogArchive: blogArchiveFAQs,
  portfolioArchive: portfolioArchiveFAQs,
  categoryArchive: categoryArchiveFAQs,
  tagArchive: tagArchiveFAQs,
  authorArchive: authorArchiveFAQs,
  dateArchive: dateArchiveFAQs,
  searchResults: searchResultsFAQs,
  
  // Single Pages
  singlePost: singlePostFAQs,
  singlePortfolio: singlePortfolioFAQs,
  
  // Utility Pages
  error404: error404FAQs,
  contactPage: contactPageDetailedFAQs,
  sitemap: sitemapFAQs,
  pricingPage: pricingPageFAQs,
  testimonialsPage: testimonialsPageFAQs,
  faqPage: faqPageFAQs,
  
  // About/Company
  teamPage: teamPageFAQs,
  whyChooseUs: whyChooseUsFAQs,
  guarantees: guaranteesFAQs,
  roiCalculator: roiCalculatorFAQs,
  
  // Industry-Specific
  tourOperator: tourOperatorFAQs,
};

/**
 * Helper function to get FAQs by template name
 * 
 * @param templateName - Template identifier
 * @returns FAQ array for that template
 * 
 * @example
 * const faqs = getFAQsByTemplate('wordpressDevelopment');
 */
export function getFAQsByTemplate(templateName: keyof typeof extendedFAQs): FAQ[] {
  return extendedFAQs[templateName] || [];
}

/**
 * Get all FAQs as flat array (for search/filtering)
 */
export function getAllExtendedFAQs(): FAQ[] {
  return Object.values(extendedFAQs).flat();
}
