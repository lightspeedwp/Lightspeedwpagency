/**
 * Services FAQ Collections
 * 
 * FAQ collections for all service-related pages including WordPress development,
 * WooCommerce, design, content, security, migrations, support, and hosting.
 * 
 * **Collections:**
 * - servicesFAQs — General services overview
 * - wordpressDevelopmentFAQs — WordPress development service
 * - woocommerceServiceFAQs — WooCommerce service
 * - designServiceFAQs — Design service
 * - contentServiceDetailedFAQs — Content service
 * - securityServiceFAQs — Security service
 * - migrationsServiceDetailedFAQs — Migrations service
 * - supportServiceFAQs — Support service
 * - hostingFAQs — Hosting service
 * 
 * **Count:** 9 collections
 * 
 * @example
 * import { servicesFAQs, hostingFAQs } from '@/app/data/faqs';
 * <FAQSection faqs={servicesFAQs} />
 */

import type { FAQ } from './types';

/**
 * General Services FAQs
 * Used on: ServicesLandingTemplate
 */
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

/**
 * WordPress Development Service FAQs
 * Used on: DevelopmentServiceTemplate
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
 * Used on: E-commerce service pages
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
 * Used on: DesignServiceTemplate
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
    answer: "We design mobile-first, test across devices (iOS, Android, tablets), and verify browser compatibility (Chrome, Firefox, Safari, Edge). Responsive design and progressive enhancement are core to our process."
  },
  {
    question: "Can you match our existing brand guidelines?",
    answer: "Absolutely. We work within your brand guidelines while translating them effectively for the web using design tokens and theme.json presets. If guidelines don't exist, we can help create them."
  }
];

/**
 * Content Service FAQs
 * Used on: ContentServiceTemplate
 */
export const contentServiceDetailedFAQs: FAQ[] = [
  {
    question: "What content services do you provide?",
    answer: "We offer content strategy, information architecture, copywriting, content migration, SEO content optimization, editorial guidelines, and content management system training."
  },
  {
    question: "Do you provide ongoing content creation?",
    answer: "Yes! We offer monthly content packages including blog posts, landing pages, product descriptions, and social media content. All content is SEO-optimized and brand-aligned."
  },
  {
    question: "Can you migrate our existing content to WordPress?",
    answer: "Absolutely. We migrate content from any platform (Drupal, Joomla, custom CMS, static HTML) while preserving SEO, cleaning up formatting, and optimizing for WordPress blocks."
  },
  {
    question: "How do you handle multilingual content?",
    answer: "We implement multilingual solutions using WPML or Polylang, providing translation management workflows, RTL language support, and localized SEO optimization."
  },
  {
    question: "Do you provide content audits?",
    answer: "Yes! We audit existing content for quality, SEO performance, accessibility, and user experience, then provide recommendations for improvements and consolidation."
  }
];

/**
 * Security Service FAQs
 * Used on: SecurityServiceTemplate
 */
export const securityServiceFAQs: FAQ[] = [
  {
    question: "What security measures do you implement?",
    answer: "We implement SSL/TLS encryption, firewalls, malware scanning, login protection (2FA), security hardening, regular updates, database security, and 24/7 monitoring with instant alerts."
  },
  {
    question: "How do you handle security breaches?",
    answer: "We provide immediate incident response including malware removal, vulnerability patching, forensic analysis, and site hardening. Maintenance clients get emergency response within 2 hours."
  },
  {
    question: "Do you perform security audits?",
    answer: "Yes! We conduct comprehensive security audits including vulnerability scanning, code review, configuration analysis, and penetration testing. You receive a detailed report with remediation steps."
  },
  {
    question: "What about GDPR and privacy compliance?",
    answer: "We implement GDPR-compliant cookie consent, privacy policies, data processing agreements, data portability, and right-to-deletion features. We also provide compliance consulting."
  },
  {
    question: "How often should security updates be performed?",
    answer: "Critical security updates should be applied within 24 hours. Our maintenance packages include weekly security checks and automatic emergency patching for zero-day vulnerabilities."
  }
];

/**
 * Migrations Service FAQs
 * Used on: Migration service pages
 */
export const migrationsServiceDetailedFAQs: FAQ[] = [
  {
    question: "What platforms can you migrate from?",
    answer: "We migrate from Shopify, Wix, Squarespace, Drupal, Joomla, Magento, custom CMS platforms, and static HTML sites to modern WordPress block themes."
  },
  {
    question: "Will migration affect my SEO rankings?",
    answer: "No! We preserve all URLs with proper 301 redirects, migrate meta data, maintain site structure, and implement schema markup. We often improve SEO during migration."
  },
  {
    question: "How long does a typical migration take?",
    answer: "Simple site migrations take 2-4 weeks. Complex e-commerce or enterprise migrations take 6-12 weeks depending on data volume, integrations, and customizations required."
  },
  {
    question: "Do you guarantee zero downtime?",
    answer: "Yes! We migrate and test everything on a staging environment, then perform the final cutover during low-traffic hours with DNS propagation to minimize any potential downtime."
  },
  {
    question: "What happens to our existing data?",
    answer: "All data (content, images, users, metadata) is migrated securely. We clean, optimize, and structure it for WordPress. Original data remains in your old system until you're satisfied with the migration."
  }
];

/**
 * Support Service FAQs
 * Used on: Support service pages
 */
export const supportServiceFAQs: FAQ[] = [
  {
    question: "What's included in ongoing support packages?",
    answer: "Support includes technical troubleshooting, WordPress/plugin updates, security monitoring, performance optimization, content updates, feature additions, backup management, and priority assistance."
  },
  {
    question: "What are your support response times?",
    answer: "Standard support: 24 business hours. Priority support: 4 hours. Emergency support: 2 hours for critical issues. Average response time is under 1 hour for maintenance clients."
  },
  {
    question: "Do you provide training for our team?",
    answer: "Yes! We provide comprehensive training including documentation, video tutorials, live training sessions, and ongoing support for content editors and site administrators."
  },
  {
    question: "Can we contact you outside business hours?",
    answer: "Maintenance clients get 24/7 emergency support for critical issues (site down, security breaches). Non-emergency requests are handled during business hours."
  },
  {
    question: "What if we need custom development?",
    answer: "Higher-tier support packages include monthly development hours for custom features, design updates, and functionality additions. Unused hours roll over for up to 3 months."
  }
];

/**
 * Hosting FAQs
 * Used on: HostingTemplate
 */
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
