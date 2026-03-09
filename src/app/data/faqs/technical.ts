/**
 * Technical FAQ Collections
 * 
 * FAQ collections for technical topics including general FAQs, technical FAQs,
 * WordPress FAQs, performance & SEO, maintenance & support, and design & UX.
 * 
 * **Collections:**
 * - generalFAQs — General/comprehensive FAQs
 * - technicalFAQs — Technical WordPress FAQs
 * - wordpressFAQs — WordPress development FAQs
 * - performanceSEOFAQs — Performance & SEO FAQs
 * - maintenanceSupportFAQs — Maintenance & support FAQs
 * - designUXFAQs — Design & UX FAQs
 * 
 * **Count:** 6 collections
 * 
 * @example
 * import { technicalFAQs, performanceSEOFAQs } from '@/app/data/faqs';
 * <FAQSection faqs={technicalFAQs} />
 */

import type { FAQ } from './types';

/**
 * General/Comprehensive FAQs (for main FAQ page)
 * Used on: FAQTemplate, general FAQ pages
 */
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

/**
 * Technical FAQs
 * Used on: Technical documentation, FAQ pages for developers
 */
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
 * Used on: WordPress development pages, technical documentation
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
 * Performance & SEO FAQs
 * Used on: Performance optimization pages, SEO service pages
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
 * Used on: Maintenance service pages, support pages
 */
export const maintenanceSupportFAQs: FAQ[] = [
  {
    question: 'What\'s included in your maintenance packages?',
    answer: 'Our maintenance includes weekly backups, core/plugin/theme updates, security monitoring, malware scanning, uptime monitoring, performance optimization, broken link checks, and priority support with guaranteed response times.'
  },
  {
    question: 'How quickly do you respond to emergencies?',
    answer: 'For maintenance clients, we guarantee emergency response within 2 hours. Our average response time for critical issues is under 30 minutes. We have monitoring systems that alert us instantly if your site goes down.'
  },
  {
    question: 'Do you provide content updates?',
    answer: 'Yes, our higher-tier packages include monthly hours for content updates, small design tweaks, and functionality additions. Unused hours can be rolled over for up to 3 months.'
  },
  {
    question: 'How do you handle backups?',
    answer: 'We perform daily off-site backups with 30-day retention. In case of any issues, we can restore your site to a previous version within minutes.'
  },
  {
    question: 'What if my site gets hacked?',
    answer: 'If you\'re on our maintenance plan, malware removal and site cleanup are included at no extra cost. We\'ll identify the vulnerability, clean the site, restore from a clean backup if necessary, and secure it against future attacks.'
  }
];

/**
 * Design & UX FAQs
 * Used on: Design service pages, UX pages
 */
export const designUXFAQs: FAQ[] = [
  {
    question: 'Do you use pre-made templates?',
    answer: 'No. We design custom solutions tailored to your brand and goals. While we use our internal design system and starter theme for efficiency, the visual design and user experience are unique to your project.'
  },
  {
    question: 'What is your design process?',
    answer: 'Our process includes: 1. Discovery & User Research, 2. Wireframing & Information Architecture, 3. Visual Design & Prototyping (Figma), 4. Design System Documentation, and 5. Developer Handoff. You\'re involved at every step.'
  },
  {
    question: 'Do you ensure accessibility compliance?',
    answer: 'Yes, accessibility is core to our process. We design and build to WCAG 2.1 AA standards, ensuring your site is usable by people with disabilities. This improves SEO, reduces legal risk, and expands your audience.'
  },
  {
    question: 'Can you work with our existing brand guidelines?',
    answer: 'Absolutely. We strictly adhere to your brand guidelines while translating them effectively for the web. If you don\'t have established guidelines, we can help create a digital style guide for you.'
  },
  {
    question: 'Do you provide copywriting services?',
    answer: 'We offer content strategy and copywriting as add-on services. We have experienced copywriters who specialize in web content, SEO, and conversion optimization to help tell your story effectively.'
  }
];
