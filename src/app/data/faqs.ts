/**
 * FAQ Data Repository
 * 
 * Centralized FAQ content for all pages and templates in the LSX Design system.
 * Provides contextual FAQ collections that can be imported and used across
 * different page templates.
 * 
 * **WordPress Mapping:**
 * In WordPress, this would be:
 * - Custom Post Type: `faq` with custom fields
 * - Taxonomy: `faq_category` for organizing by context
 * - ACF or custom fields for question/answer pairs
 * 
 * **Data Structure:**
 * Each FAQ collection is an array of objects with:
 * - `question`: String (200 chars max recommended)
 * - `answer`: String (500 chars max recommended)
 * 
 * **Usage Pattern:**
 * ```tsx
 * import { homepageFAQs } from '../../data/faqs';
 * 
 * <FAQSection 
 *   title="Common Questions"
 *   faqs={homepageFAQs}
 * />
 * ```
 * 
 * **Available Collections:**
 * - homepageFAQs - General questions (4 items)
 * - servicesFAQs - Service offerings (5 items)
 * - aboutFAQs - Company information (5 items)
 * - processFAQs - Development process (4 items)
 * - cultureFAQs - Company culture (4 items)
 * - teamFAQs - Team information (4 items)
 * - hostingFAQs - Hosting services (5 items)
 * - contactFAQs - Contact & support (5 items)
 * - portfolioFAQs - Portfolio questions (5 items)
 * - blogFAQs - Blog/content (4 items)
 * - woocommerceFAQs - E-commerce (5 items)
 * - generalFAQs - Comprehensive (5 items)
 * - technicalFAQs - Technical details (5 items)
 * - wordpressFAQs - WordPress Development (8 items)
 * - woocommerceDetailedFAQs - WooCommerce Specific (8 items)
 * - performanceSEOFAQs - Performance & SEO (5 items)
 * - maintenanceSupportFAQs - Maintenance & Support (5 items)
 * - pricingTimelineFAQs - Pricing & Timeline (5 items)
 * - designUXFAQs - Design & UX (5 items)
 * 
 * @example
 * // Import specific FAQ collection
 * import { servicesFAQs } from '../../data/faqs';
 * 
 * @example
 * // Use in FAQSection component
 * <FAQSection 
 *   title="Service Questions"
 *   description="Common questions about our services"
 *   faqs={servicesFAQs}
 *   variant="default"
 * />
 * 
 * @see {@link /src/app/components/patterns/FAQSection.tsx} - FAQ Section component
 * @see {@link /src/app/data/pages.ts} - Page data
 */

/**
 * FAQ item structure
 * 
 * Defines a single question-answer pair for FAQ sections.
 * Used across all FAQ collections and the FAQSection component.
 * 
 * **Content Guidelines:**
 * - Questions: Start with question words (What, How, Why), end with "?"
 * - Answers: 2-3 sentences, plain text only (no HTML)
 * - Keep concise for better UX (question <200 chars, answer <500 chars)
 * 
 * @example
 * const faqItem: FAQ = {
 *   question: "What makes LSX Design different?",
 *   answer: "We specialize in token-driven design systems..."
 * }
 */
export interface FAQ {
  /**
   * The question text
   * 
   * **Guidelines:**
   * - Start with question words (What, How, Why, When, Where)
   * - End with question mark
   * - Use sentence case (not title case)
   * - Keep under 200 characters for readability
   * - Be specific and customer-focused
   * 
   * @example
   * question: "What makes LSX Design different from other agencies?"
   */
  question: string;
  
  /**
   * The answer text
   * 
   * **Guidelines:**
   * - Plain text only (no HTML or markdown)
   * - 2-3 sentences recommended
   * - Maximum 500 characters for readability
   * - Complete sentences with proper punctuation
   * - Provide actionable information
   * 
   * @example
   * answer: "We specialize in token-driven design systems that map directly to WordPress FSE. This means faster development and better maintainability."
   */
  answer: string;
}

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
 * <FAQSection faqs={homepageFAQs} />
 */
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

// Services Page FAQs
export const servicesFAQs: FAQ[] = [
  {
    question: 'What services does LSX Design offer?',
    answer: 'We offer WordPress block theme development, WooCommerce e-commerce solutions, design system creation, accessibility audits, performance optimization, migrations, and ongoing maintenance and support.'
  },
  {
    question: 'Do you handle both design and development?',
    answer: 'Yes! We provide end-to-end services from initial design system and UX strategy through development, testing, and deployment. We can also work with your existing design team.'
  },
  {
    question: 'What\'s included in your service packages?',
    answer: 'All packages include discovery workshops, design system development, custom block/pattern creation, theme.json configuration, accessibility testing, performance optimization, documentation, and training.'
  },
  {
    question: 'Do you offer fixed-price or hourly rates?',
    answer: 'We primarily work on fixed-price project-based contracts determined during discovery. For ongoing work, we offer monthly retainers starting at $3,000/month. Hourly rates are available for small tasks.'
  },
  {
    question: 'Can you work with our existing WordPress site?',
    answer: 'Absolutely. We can audit, optimize, and migrate existing sites to modern block themes. We also offer enhancement services for sites that need additional functionality or design updates.'
  }
];

// About Page FAQs
export const aboutFAQs: FAQ[] = [
  {
    question: 'How long has LSX Design been in business?',
    answer: 'We were founded in 2014 and have been specializing in WordPress and WooCommerce development for over 10 years. We\'ve delivered 500+ successful projects for clients worldwide.'
  },
  {
    question: 'Where is your team located?',
    answer: 'We\'re a fully remote team with members across multiple time zones. This allows us to provide continuous coverage and work with clients internationally while maintaining excellent communication.'
  },
  {
    question: 'What makes your approach unique?',
    answer: 'Our focus on token-driven design systems, WordPress FSE expertise, and accessibility-first development sets us apart. We build systems, not just websites—ensuring long-term scalability and maintainability.'
  },
  {
    question: 'Who are your typical clients?',
    answer: 'We work with businesses of all sizes—from startups needing their first professional site to enterprises requiring complex WooCommerce platforms. Our clients span 30+ countries across various industries.'
  },
  {
    question: 'Do you have case studies available?',
    answer: 'Yes! Visit our portfolio page to see detailed case studies showcasing our work across different industries, including e-commerce, editorial, healthcare, and more.'
  }
];

// Process Page FAQs
export const processFAQs: FAQ[] = [
  {
    question: 'What is your development process?',
    answer: 'We follow a four-phase approach: Discovery & Strategy, Design & Planning, Development & Build, and Testing & Launch. Each phase includes regular check-ins, demos, and opportunities for feedback.'
  },
  {
    question: 'How involved do I need to be during development?',
    answer: 'We recommend weekly sync meetings (30-60 minutes) and availability for async feedback via our project management tools. Most clients spend 2-4 hours per week reviewing progress and providing input.'
  },
  {
    question: 'What do you need from us to get started?',
    answer: 'We need access to existing sites/systems, brand assets (logos, fonts, colors), content strategy or sitemap, stakeholder availability for discovery workshops, and clearly defined project goals.'
  },
  {
    question: 'Can we make changes during development?',
    answer: 'Minor changes are included. Major scope changes require change orders to adjust timeline and budget. We use agile sprints with demo checkpoints to minimize surprises and ensure alignment.'
  }
];

// Culture Page FAQs
export const cultureFAQs: FAQ[] = [
  {
    question: 'What is it like to work at LSX Design?',
    answer: 'We maintain a remote-first culture with flexible hours, async communication, and focus on work-life balance. Our team values continuous learning, collaboration, and producing excellent work.'
  },
  {
    question: 'Do you offer internships or junior positions?',
    answer: 'Yes! We regularly hire junior developers and designers who show strong fundamentals and enthusiasm for WordPress. We provide mentorship and learning opportunities to help you grow.'
  },
  {
    question: 'What benefits do you offer?',
    answer: 'Competitive salaries, unlimited PTO, home office budget, learning and development allowance, health insurance, mental health support, and co-working space memberships globally.'
  },
  {
    question: 'How do you support professional development?',
    answer: 'We provide monthly learning budgets, conference tickets, certification programs, internal knowledge sharing, and dedicated time for skill development during work hours.'
  }
];

// Team Page FAQs
export const teamFAQs: FAQ[] = [
  {
    question: 'How large is your team?',
    answer: 'Our core team consists of 25 talented professionals including WordPress developers, designers, project managers, and QA specialists. We also work with trusted partners for specialized needs.'
  },
  {
    question: 'What expertise does your team have?',
    answer: 'Our team brings expertise in WordPress FSE, WooCommerce, design systems, accessibility (WCAG), performance optimization, security, and modern frontend development with React and TypeScript.'
  },
  {
    question: 'Will I have a dedicated project manager?',
    answer: 'Yes! Every project is assigned a dedicated project manager who serves as your main point of contact and ensures smooth communication between you and the development team.'
  },
  {
    question: 'Can I meet the team before starting a project?',
    answer: 'Absolutely. We encourage discovery calls where you can meet key team members who will work on your project. This helps establish rapport and ensures we\'re the right fit.'
  }
];

// Hosting Page FAQs
export const hostingFAQs: FAQ[] = [
  {
    question: 'What hosting do you recommend?',
    answer: 'We recommend managed WordPress hosting providers like WP Engine, Kinsta, or Flywheel for optimal performance, security, and support. We also offer our own managed hosting service optimized for block themes.'
  },
  {
    question: 'Do you provide managed hosting services?',
    answer: 'Yes! Our managed hosting includes automatic updates, daily backups, security monitoring, CDN integration, performance optimization, and 24/7 technical support with 99.9% uptime guarantee.'
  },
  {
    question: 'What\'s included in hosting support?',
    answer: 'Hosting support includes server management, WordPress core updates, security patches, performance monitoring, backup management, CDN configuration, and technical troubleshooting.'
  },
  {
    question: 'Can you migrate my existing site to better hosting?',
    answer: 'Yes! We handle complete migrations with zero downtime. We\'ll move your site, test thoroughly, update DNS, and provide post-migration monitoring to ensure everything works perfectly.'
  },
  {
    question: 'What if I want to host elsewhere?',
    answer: 'No problem! Our themes work on any quality WordPress host. We can recommend providers based on your needs and budget, and help with initial setup if needed.'
  }
];

// Contact Page FAQs
export const contactFAQs: FAQ[] = [
  {
    question: 'What\'s your response time for inquiries?',
    answer: 'We respond to all inquiries within 24 business hours. For existing clients, our support response time is typically under 4 hours during business hours.'
  },
  {
    question: 'Do you offer free consultations?',
    answer: 'Yes! We offer complimentary 30-minute discovery calls to discuss your project, answer questions, and determine if we\'re a good fit for your needs.'
  },
  {
    question: 'What information do you need to provide a quote?',
    answer: 'We need project goals, desired features/functionality, timeline expectations, existing site URL (if applicable), and any design/brand assets. The more detail, the more accurate our estimate.'
  },
  {
    question: 'Do you work with international clients?',
    answer: 'Absolutely! We serve clients across 30+ countries. Our remote-first structure and async communication processes ensure seamless collaboration regardless of time zone.'
  },
  {
    question: 'How do you handle project communication?',
    answer: 'We use a combination of Slack for day-to-day communication, project management tools for task tracking, and video calls for weekly sync meetings. All communication is documented and accessible.'
  }
];

// Portfolio Page FAQs
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

// Blog/Index Page FAQs
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

// WooCommerce/Solutions FAQs
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

// General/Comprehensive FAQs (for main FAQ page)
export const generalFAQs: FAQ[] = [
  {
    question: 'What services does LSX Design offer?',
    answer: 'We specialize in WordPress and WooCommerce development, including custom block theme development, design systems, e-commerce solutions, migrations, performance optimization, and ongoing maintenance and support.'
  },
  {
    question: 'How long does a typical project take?',
    answer: 'Project timelines vary based on scope and complexity. A simple WordPress site typically takes 4-6 weeks, while custom WooCommerce stores or enterprise solutions can take 12-16 weeks. We provide detailed timelines during the discovery phase.'
  },
  {
    question: 'Do you work with clients internationally?',
    answer: 'Yes! We work with clients across 30+ countries. Our remote-first structure and async communication processes ensure seamless collaboration regardless of time zones.'
  },
  {
    question: 'What is your pricing model?',
    answer: 'We offer both project-based and retainer pricing. Project rates are determined during discovery based on scope, complexity, and timeline. Retainer packages start at $3,000/month for ongoing support and development.'
  },
  {
    question: 'Do you provide ongoing support after launch?',
    answer: 'Absolutely! We offer comprehensive maintenance packages including security updates, performance monitoring, content updates, and technical support. All projects include 30 days of post-launch support.'
  }
];

export const technicalFAQs: FAQ[] = [
  {
    question: 'What is WordPress Full Site Editing (FSE)?',
    answer: 'FSE is WordPress\'s modern approach to theme development using blocks, patterns, and templates. It provides more flexibility and control without requiring code, while maintaining professional design standards through theme.json configuration.'
  },
  {
    question: 'Why use block themes instead of classic themes?',
    answer: 'Block themes offer better performance, easier maintenance, visual editing without code, better accessibility, and future-proof architecture. They\'re the recommended approach for all new WordPress sites.'
  },
  {
    question: 'What is a design system and why do I need one?',
    answer: 'A design system is a collection of reusable components, patterns, and tokens that ensure consistency across your website. It improves development speed, maintains brand consistency, and makes future updates easier and more affordable.'
  },
  {
    question: 'Do you build headless WordPress sites?',
    answer: 'Yes, we have experience with headless WordPress using Next.js, Gatsby, and other frontend frameworks. However, we generally recommend FSE block themes for most projects due to better editor experience and lower maintenance costs.'
  },
  {
    question: 'What hosting do you recommend?',
    answer: 'We recommend managed WordPress hosting providers like WP Engine, Kinsta, or Flywheel for optimal performance, security, and support. We also offer our own managed hosting service optimized for block themes.'
  }
];

/**
 * WordPress Development FAQs
 */
export const wordpressFAQs: FAQ[] = [
  {
    question: 'What is Full Site Editing (FSE) and why should I use it?',
    answer: 'Full Site Editing is WordPress\'s modern approach to building sites using blocks for everything - headers, footers, templates, and content. It offers better performance, easier maintenance, visual editing without code, and future-proof architecture. FSE themes load faster and give non-technical users complete control.'
  },
  {
    question: 'How long does a custom WordPress theme development take?',
    answer: 'A custom block theme typically takes 6-12 weeks depending on complexity. This includes discovery, design, development, testing, and training. Simple sites can be completed in 4-6 weeks, while complex enterprise sites may take 12-16 weeks.'
  },
  {
    question: 'What\'s the difference between WordPress.com and WordPress.org?',
    answer: 'WordPress.org is the self-hosted, open-source platform that gives you complete control and ownership. WordPress.com is a hosted service with limitations. We exclusively work with WordPress.org (self-hosted) for maximum flexibility and customization.'
  },
  {
    question: 'Can you migrate my existing site to WordPress?',
    answer: 'Yes! We specialize in migrations from platforms like Shopify, Wix, Squarespace, and custom CMS solutions. We handle content migration, URL redirects, SEO preservation, and ensure zero downtime during the transition.'
  },
  {
    question: 'Do WordPress sites require regular updates?',
    answer: 'Yes, WordPress core, themes, and plugins should be updated regularly for security and performance. We offer maintenance packages that include automated updates, backups, security monitoring, and performance optimization.'
  },
  {
    question: 'How do you ensure WordPress site security?',
    answer: 'We implement multi-layer security including SSL certificates, firewalls, malware scanning, login protection, regular backups, security hardening, and 24/7 monitoring. We also conduct security audits and provide ongoing security maintenance.'
  },
  {
    question: 'What is a child theme and when is it needed?',
    answer: 'Child themes inherit parent theme functionality while allowing safe customizations. However, with modern block themes and FSE, child themes are rarely necessary. We build custom block themes from scratch for optimal performance and maintainability.'
  },
  {
    question: 'Can WordPress handle high-traffic websites?',
    answer: 'Absolutely! With proper optimization, caching, CDN implementation, and quality hosting, WordPress easily handles millions of visitors. Sites like TechCrunch, The White House, and Sony Music run on WordPress.'
  }
];

/**
 * WooCommerce Specific FAQs
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

/**
 * Performance & SEO FAQs
 */
export const performanceSEOFAQs: FAQ[] = [
  {
    question: 'How do you achieve perfect Lighthouse scores?',
    answer: 'We optimize images, implement lazy loading, minimize CSS/JS, use modern formats (WebP, AVIF), optimize fonts, eliminate render-blocking resources, implement proper caching, and use performance-optimized hosting.'
  },
  {
    question: 'What page load time should I expect?',
    answer: 'We target under 2 seconds for page loads on standard connections. With optimization, most sites achieve 1-1.5 second load times, which significantly improves conversions and SEO rankings.'
  },
  {
    question: 'Do you provide SEO services?',
    answer: 'Yes! We provide technical SEO optimization, schema markup, XML sitemaps, meta optimization, performance optimization (Core Web Vitals), mobile optimization, and SEO-friendly URL structures. We also offer ongoing SEO strategy and content optimization.'
  },
  {
    question: 'How do you ensure mobile performance?',
    answer: 'We implement mobile-first design, responsive images, touch-friendly interfaces, optimized mobile menus, reduced mobile payload, and test on real devices. Mobile performance is prioritized in all our projects.'
  },
  {
    question: 'What is Core Web Vitals and why does it matter?',
    answer: 'Core Web Vitals are Google\'s metrics for page experience: LCP (loading), FID (interactivity), and CLS (visual stability). They directly impact SEO rankings and user experience. We optimize all three metrics for better search visibility.'
  }
];

/**
 * Maintenance & Support FAQs
 */
export const maintenanceSupportFAQs: FAQ[] = [
  {
    question: 'What\'s included in your maintenance packages?',
    answer: 'Our maintenance includes weekly backups, core/plugin/theme updates, security monitoring, malware scanning, uptime monitoring, performance optimization, broken link checks, and priority support with guaranteed response times.'
  },
  {
    question: 'How quickly do you respond to emergencies?',
    answer: 'Critical issues (site down, security breach) receive immediate response - typically within 30 minutes. High-priority issues are addressed within 4 hours, and standard requests within 24 hours on business days.'
  },
  {
    question: 'Do you provide training for our team?',
    answer: 'Yes! We provide comprehensive training on WordPress block editor, content management, WooCommerce administration, SEO best practices, and site maintenance. Training can be live sessions or recorded videos.'
  },
  {
    question: 'What happens if something breaks after launch?',
    answer: 'All our projects include a 30-day warranty covering any bugs or issues from development. After that, our maintenance packages cover ongoing support, updates, and issue resolution.'
  },
  {
    question: 'Can you take over maintenance of an existing WordPress site?',
    answer: 'Absolutely! We conduct an initial site audit, fix any existing issues, optimize performance, update components, and then provide ongoing maintenance. We can maintain sites we didn\'t build.'
  }
];

/**
 * Pricing & Timeline FAQs
 */
export const pricingTimelineFAQs: FAQ[] = [
  {
    question: 'How much does a custom WordPress site cost?',
    answer: 'Projects typically range from $15,000-$75,000 depending on complexity. Simple business sites start at $15,000, WooCommerce stores from $25,000, and enterprise solutions from $50,000. We provide detailed quotes after discovery.'
  },
  {
    question: 'Do you offer payment plans?',
    answer: 'Yes! We offer flexible payment schedules with deposits and milestone-based payments. For larger projects, we can arrange monthly payment plans. We also offer retainer agreements for ongoing work.'
  },
  {
    question: 'What\'s your typical project timeline?',
    answer: 'Standard business sites: 6-8 weeks. WooCommerce stores: 8-12 weeks. Enterprise projects: 12-16 weeks. Timelines depend on complexity, content readiness, and feedback cycles. We provide detailed project schedules.'
  },
  {
    question: 'What do I need to provide before starting?',
    answer: 'You\'ll need: brand assets (logo, colors, fonts), content (text and images), hosting credentials, access to existing systems, and stakeholder availability for feedback. We guide you through the preparation process.'
  },
  {
    question: 'Can you work within our budget?',
    answer: 'We offer solutions at various price points and can phase projects to fit budgets. We\'ll discuss your priorities and recommend an approach that delivers maximum value within your budget constraints.'
  }
];

/**
 * Design & UX FAQs
 */
export const designUXFAQs: FAQ[] = [
  {
    question: 'What\'s your design process?',
    answer: 'We start with discovery to understand your brand, audience, and goals. Then we create wireframes, high-fidelity mockups, interactive prototypes, and conduct usability testing. We iterate based on feedback before development.'
  },
  {
    question: 'Do you provide custom designs or use templates?',
    answer: 'We create 100% custom designs tailored to your brand and business goals. We never use pre-made templates. Every design is crafted specifically for your unique needs and target audience.'
  },
  {
    question: 'How do you ensure accessibility?',
    answer: 'We follow WCAG 2.1 AA guidelines, ensuring proper color contrast, keyboard navigation, screen reader compatibility, semantic HTML, focus indicators, and alternative text. Accessibility is built in from day one.'
  },
  {
    question: 'Can you match our existing brand guidelines?',
    answer: 'Absolutely! We work within your established brand guidelines, ensuring the website reflects your brand identity accurately. We can also help evolve or refine your brand for digital applications.'
  },
  {
    question: 'Do you redesign existing WordPress sites?',
    answer: 'Yes! We specialize in WordPress redesigns - modernizing outdated sites with fresh designs, improved UX, better performance, and modern block themes. We can preserve your content and SEO during the redesign.'
  }
];

// Export all FAQ collections
export const allFAQs = {
  homepage: homepageFAQs,
  services: servicesFAQs,
  about: aboutFAQs,
  process: processFAQs,
  culture: cultureFAQs,
  team: teamFAQs,
  hosting: hostingFAQs,
  contact: contactFAQs,
  portfolio: portfolioFAQs,
  blog: blogFAQs,
  woocommerce: woocommerceFAQs,
  general: generalFAQs,
  technical: technicalFAQs,
  wordpress: wordpressFAQs,
  woocommerceDetailed: woocommerceDetailedFAQs,
  performanceSEO: performanceSEOFAQs,
  maintenanceSupport: maintenanceSupportFAQs,
  pricingTimeline: pricingTimelineFAQs,
  designUX: designUXFAQs
};