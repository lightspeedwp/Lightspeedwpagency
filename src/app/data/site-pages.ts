/**
 * Site Pages Mock Data
 * 
 * WordPress site pages structure based on LightSpeed WP Agency (lightspeedwp.agency).
 * Complete page hierarchy with navigation menus and real content.
 * 
 * **REAL CONTENT SOURCE:** https://lightspeedwp.agency
 * **Last Updated:** 2025-01-09
 * 
 * **WordPress Mapping:**
 * - Post Type: 'page'
 * - Page templates
 * - Navigation menus (registered locations)
 * - Hierarchical structure (parent/child pages)
 */

import { slugToPath } from '../utils/route-map';

export interface SitePage {
  id: string;
  slug: string;
  title: string;
  excerpt?: string;
  template?: string;
  parent?: string; // Parent page slug
  showInNav?: boolean;
  order?: number;
}

/**
 * All Site Pages
 * Based on sitemap from LightSpeed WP Agency
 * Real content extracted from https://lightspeedwp.agency
 */
export const sitePages: SitePage[] = [
  // Home
  {
    id: 'home',
    slug: 'home',
    title: 'Structured Publishing Systems for WordPress',
    excerpt: 'We engineer governed WordPress systems — tokenised design, accessible markup, and measurable performance.',
    template: 'front-page',
    showInNav: false,
    order: 1
  },
  
  // Solutions
  {
    id: 'solutions',
    slug: 'solutions',
    title: 'Solutions',
    excerpt: 'Innovative solutions for success - Industry-leading, custom solutions applied to meet your unique needs for your WordPress websites & WooCommerce shops.',
    template: 'page-solutions',
    showInNav: true,
    order: 2
  },
  {
    id: 'wordpress',
    slug: 'wordpress',
    title: 'WordPress',
    excerpt: 'WordPress development with governed tokens, patterns, and performance targets.',
    parent: 'solutions',
    showInNav: false
  },
  {
    id: 'woocommerce',
    slug: 'woocommerce',
    title: 'WooCommerce',
    excerpt: 'WooCommerce systems: checkout governance, inventory rules, conversion tracking.',
    parent: 'solutions',
    showInNav: false
  },
  {
    id: 'tour-operators',
    slug: 'tour-operators',
    title: 'Tour Operators',
    excerpt: 'Our LSX Tour Operator plugin is designed specifically for your industry, our Tour Operator plugin provides you with complete control over every component of your tours and itineraries.',
    parent: 'solutions',
    showInNav: false
  },
  {
    id: 'publishers',
    slug: 'publishers',
    title: 'Publishers',
    excerpt: 'We build wordpress websites for magazines and newspapers that are an extension of their print brand.',
    parent: 'solutions',
    showInNav: false
  },
  {
    id: 'lsx',
    slug: 'lsx',
    title: 'LSX',
    excerpt: 'Our free, open-source products empower designers by providing them with the comprehensive tools and flexibility needed to create their own unique custom site editor designs.',
    parent: 'solutions',
    showInNav: false
  },
  {
    id: 'hosting',
    slug: 'hosting',
    title: 'Hosting',
    excerpt: 'Our specialised managed hosting enables your site to sustain peak traffic, securely.',
    parent: 'solutions',
    showInNav: false
  },
  {
    id: 'wordpress-redesign',
    slug: 'wordpress-redesign',
    title: 'WordPress Website Redesign',
    excerpt: 'Transform your outdated WordPress site into a modern, high-performance platform that converts visitors into customers.',
    parent: 'solutions',
    showInNav: false
  },
  {
    id: 'woocommerce-redesign',
    slug: 'woocommerce-redesign',
    title: 'WooCommerce Store Redesign',
    excerpt: 'Rebuild your WooCommerce store for higher conversions, faster load times, and a checkout experience customers love.',
    parent: 'solutions',
    showInNav: false
  },
  {
    id: 'tour-operator-design',
    slug: 'tour-operator-design',
    title: 'Tour Operator Website & Tour Design',
    excerpt: 'Showcase your tours with stunning itineraries, interactive maps, and a booking experience that turns browsers into travelers.',
    parent: 'solutions',
    showInNav: false
  },
  {
    id: 'ai-integrations',
    slug: 'ai-integrations',
    title: 'AI Integrations for WordPress',
    excerpt: 'Add production-ready AI to your WordPress stack: content, SEO, chatbots, and analytics.',
    parent: 'solutions',
    showInNav: true
  },
  {
    id: 'ai-content-generation',
    slug: 'ai-content-generation',
    title: 'AI Content Generation',
    excerpt: 'Create high-quality, on-brand content at scale with AI-powered writing and media tools.',
    parent: 'solutions',
    showInNav: false
  },
  {
    id: 'ai-seo',
    slug: 'ai-seo',
    title: 'AI-Powered SEO',
    excerpt: 'Automated keyword analysis, content scoring, schema markup, and competitor monitoring.',
    parent: 'solutions',
    showInNav: false
  },
  {
    id: 'ai-chatbots',
    slug: 'ai-chatbots',
    title: 'AI Chatbots for WordPress',
    excerpt: 'Deploy intelligent chatbots that qualify leads, answer FAQs, and engage visitors 24/7.',
    parent: 'solutions',
    showInNav: false
  },
  {
    id: 'ai-analytics',
    slug: 'ai-analytics',
    title: 'AI Analytics & Insights',
    excerpt: 'Turn raw data into actionable strategies with predictive models and automated reporting.',
    parent: 'solutions',
    showInNav: false
  },
  {
    id: 'mailchimp',
    slug: 'mailchimp',
    title: 'Mailchimp',
    excerpt: 'Email marketing helping to drive sales.',
    parent: 'solutions',
    showInNav: false
  },
  {
    id: 'wetu-importer',
    slug: 'wetu-importer',
    title: 'Wetu Importer',
    excerpt: 'Import and sync tour data from Wetu directly into your WordPress website.',
    parent: 'solutions',
    showInNav: false
  },
  {
    id: 'lsx-sharing',
    slug: 'lsx-sharing',
    title: 'LSX Sharing',
    excerpt: 'Beautiful, customizable social sharing buttons for WordPress.',
    parent: 'solutions',
    showInNav: false
  },
  {
    id: 'lsx-search',
    slug: 'lsx-search',
    title: 'LSX Search',
    excerpt: 'Powerful, lightning-fast search functionality for WordPress.',
    parent: 'solutions',
    showInNav: false
  },
  
  // Services
  {
    id: 'services',
    slug: 'services',
    title: 'Services',
    excerpt: 'WordPress & WooCommerce Experts - With over 10 years\' experience with WordPress & WooCommerce Development, our solutions help you and your business succeed.',
    template: 'page',
    showInNav: true,
    order: 3
  },
  {
    id: 'discovery',
    slug: 'discovery',
    title: 'Discovery',
    excerpt: 'Expert design guidance on how to understand your business objectives.',
    parent: 'services',
    showInNav: false
  },
  {
    id: 'design',
    slug: 'design',
    title: 'Design',
    excerpt: 'Expert design guidance on how to understand your business objectives.',
    parent: 'services',
    showInNav: false
  },
  {
    id: 'development',
    slug: 'development',
    title: 'Development',
    excerpt: 'WooExperts who can identify the best fit for your requirements.',
    parent: 'services',
    showInNav: false
  },
  {
    id: 'support',
    slug: 'support',
    title: 'Support',
    excerpt: 'Our ongoing support and maintenance services all WordPress core updates.',
    parent: 'services',
    showInNav: false
  },
  {
    id: 'content',
    slug: 'content',
    title: 'Content',
    excerpt: 'Content strategy, collection, and audit services.',
    parent: 'services',
    showInNav: false
  },
  {
    id: 'content-strategy',
    slug: 'content-strategy',
    title: 'Content Strategy',
    excerpt: 'Strategic content planning and implementation.',
    parent: 'content',
    showInNav: false
  },
  {
    id: 'content-collection',
    slug: 'content-collection',
    title: 'Content Collection',
    excerpt: 'Professional content gathering and organization.',
    parent: 'content',
    showInNav: false
  },
  {
    id: 'content-audit',
    slug: 'content-audit',
    title: 'Content Audit',
    excerpt: 'Comprehensive content analysis and recommendations.',
    parent: 'content',
    showInNav: false
  },
  {
    id: 'migrations',
    slug: 'migrations',
    title: 'Migrations',
    excerpt: 'Platform migration services.',
    parent: 'services',
    showInNav: false
  },
  {
    id: 'email-marketing',
    slug: 'email-marketing',
    title: 'Email Marketing',
    excerpt: 'Email marketing services and integrations.',
    parent: 'services',
    showInNav: false
  },
  {
    id: 'training',
    slug: 'training',
    title: 'Training',
    excerpt: 'WordPress and WooCommerce training services.',
    parent: 'services',
    showInNav: false
  },
  {
    id: 'security',
    slug: 'security',
    title: 'Security',
    excerpt: 'WordPress security services and hardening.',
    parent: 'services',
    showInNav: false
  },
  
  // Portfolio
  {
    id: 'portfolio-archive',
    slug: 'portfolio-archive',
    title: 'Portfolio',
    excerpt: 'Our work and case studies',
    template: 'archive',
    showInNav: true,
    order: 4
  },
  
  // Blog
  {
    id: 'blog',
    slug: 'blog',
    title: 'Blog',
    excerpt: 'Latest from the blog - WordPress insights and tutorials',
    template: 'index',
    showInNav: true,
    order: 5
  },
  
  // Contact
  {
    id: 'contact',
    slug: 'contact',
    title: 'Contact',
    excerpt: 'Book a free consultation - Over 15 years in launching successful WordPress websites.',
    template: 'page',
    showInNav: true,
    order: 6
  },
  
  // About
  {
    id: 'about',
    slug: 'about',
    title: 'About',
    excerpt: 'We have our eyes on innovation, continuously improving the solutions and services we provide to our clients.',
    template: 'page',
    showInNav: false
  },
  {
    id: 'team',
    slug: 'team',
    title: 'Team',
    excerpt: 'Meet the WordPress experts',
    parent: 'about',
    showInNav: false
  },
  {
    id: 'about-process',
    slug: 'about-process',
    title: 'How We Work',
    excerpt: 'Our process and workflow',
    parent: 'about',
    showInNav: false
  },
  {
    id: 'about-culture',
    slug: 'about-culture',
    title: 'Our Culture',
    excerpt: 'What drives us',
    parent: 'about',
    showInNav: false
  },
  {
    id: 'about-history',
    slug: 'about-history',
    title: 'History',
    excerpt: 'Our journey',
    parent: 'about',
    showInNav: false
  },
  
  // Why Pages
  {
    id: 'why',
    slug: 'why',
    title: 'Why',
    excerpt: 'Why choose LightSpeed',
    template: 'page',
    showInNav: false
  },
  {
    id: 'why-wp',
    slug: 'why-wp',
    title: 'Why WordPress?',
    excerpt: 'Flexible, SEO-friendly & full site editor.',
    parent: 'why',
    showInNav: false
  },
  {
    id: 'why-woo',
    slug: 'why-woo',
    title: 'Why Woo?',
    excerpt: 'Seamless integration and flexibility.',
    parent: 'why',
    showInNav: false
  },
  {
    id: 'why-mailchimp',
    slug: 'why-mailchimp',
    title: 'Why Mailchimp?',
    excerpt: 'Email marketing helping to drive sales.',
    parent: 'why',
    showInNav: false
  },
  {
    id: 'why-lsx',
    slug: 'why-lsx',
    title: 'Why LSX?',
    excerpt: 'Free, open-source products for designers.',
    parent: 'why',
    showInNav: false
  },
  {
    id: 'why-lightspeed',
    slug: 'why-lightspeed',
    title: 'Why LightSpeed?',
    excerpt: 'Expert WordPress & WooCommerce solutions.',
    parent: 'why',
    showInNav: false
  },
  {
    id: 'why-tour-operator',
    slug: 'why-tour-operator',
    title: 'Why Tour Operator?',
    excerpt: 'Complete control over tours and itineraries.',
    parent: 'why',
    showInNav: false
  },
  
  // Testimonials
  {
    id: 'testimonials',
    slug: 'testimonials',
    title: 'Testimonials',
    excerpt: 'Client success stories',
    template: 'page',
    showInNav: false
  },
  
  // Website Packages
  {
    id: 'website-packages',
    slug: 'website-packages',
    title: 'Website Packages',
    excerpt: 'Our website packages and pricing',
    template: 'page',
    showInNav: false
  },
  
  // Referrals
  {
    id: 'referrals',
    slug: 'referrals',
    title: 'Referrals',
    excerpt: 'Refer clients and earn rewards',
    template: 'page',
    showInNav: false
  },
  
  // Free Consultation
  {
    id: 'free-consultation',
    slug: 'free-consultation',
    title: 'Free Consultation',
    excerpt: 'Book your 20-30 minute free consultation',
    template: 'page',
    showInNav: false
  },
  {
    id: 'free-woo-consultation',
    slug: 'free-woo-consultation',
    title: 'Free WooCommerce Consultation',
    excerpt: 'Book your WooCommerce consultation',
    template: 'page',
    showInNav: false
  },
  
  // Briefing/Forms
  {
    id: 'briefing',
    slug: 'briefing',
    title: 'Briefing',
    excerpt: 'Project briefing forms',
    template: 'page',
    showInNav: false
  },
  {
    id: 'briefing-about-us-page',
    slug: 'briefing-about-us-page',
    title: 'About Us Page Briefing',
    excerpt: 'Brief us on your About Us page',
    parent: 'briefing',
    showInNav: false
  },
  {
    id: 'briefing-request-a-quote',
    slug: 'briefing-request-a-quote',
    title: 'Request a Quote',
    excerpt: 'Request a project quote',
    parent: 'briefing',
    showInNav: false
  },
  {
    id: 'briefing-wordpress',
    slug: 'briefing-wordpress',
    title: 'WordPress Briefing',
    excerpt: 'WordPress project briefing',
    parent: 'briefing',
    showInNav: false
  },
  {
    id: 'client-intake-form',
    slug: 'client-intake-form',
    title: 'Client Intake Form',
    excerpt: 'New client intake questionnaire',
    template: 'page',
    showInNav: false
  },
  {
    id: 'client-feedback',
    slug: 'client-feedback',
    title: 'Client Feedback',
    excerpt: 'Share your feedback',
    template: 'page',
    showInNav: false
  },
  
  // Policies
  {
    id: 'policies',
    slug: 'policies',
    title: 'Policies',
    excerpt: 'Our policies and principles',
    template: 'page',
    showInNav: false
  },
  {
    id: 'policies-publishing-principles',
    slug: 'policies-publishing-principles',
    title: 'Publishing principles',
    excerpt: 'Our publishing standards',
    parent: 'policies',
    showInNav: false
  },
  {
    id: 'policies-diversity-content',
    slug: 'policies-diversity-content',
    title: 'Diversity content',
    excerpt: 'Our commitment to diverse content',
    parent: 'policies',
    showInNav: false
  },
  {
    id: 'policies-diversity-staffing',
    slug: 'policies-diversity-staffing',
    title: 'Diversity staffing',
    excerpt: 'Our commitment to diverse staffing',
    parent: 'policies',
    showInNav: false
  },
  {
    id: 'policies-ethics',
    slug: 'policies-ethics',
    title: 'Ethics',
    excerpt: 'Our ethical standards',
    parent: 'policies',
    showInNav: false
  },
  {
    id: 'policies-feedback',
    slug: 'policies-feedback',
    title: 'Feedback',
    excerpt: 'How we handle feedback',
    parent: 'policies',
    showInNav: false
  },
  {
    id: 'policies-corrections',
    slug: 'policies-corrections',
    title: 'Corrections',
    excerpt: 'Our corrections policy',
    parent: 'policies',
    showInNav: false
  },
  {
    id: 'policies-ownership-funding',
    slug: 'policies-ownership-funding',
    title: 'Ownership & funding',
    excerpt: 'Ownership and funding information',
    parent: 'policies',
    showInNav: false
  },
  
  // Videos & Podcasts
  {
    id: 'videos',
    slug: 'videos',
    title: 'Videos',
    excerpt: 'Watch our latest videos and tutorials',
    template: 'video-archive',
    showInNav: false
  },
  {
    id: 'podcasts',
    slug: 'podcasts',
    title: 'Podcasts',
    excerpt: 'Listen to the LSX Design podcast',
    template: 'podcast-archive',
    showInNav: false
  },
  
  // Legal
  {
    id: 'privacy-policy',
    slug: 'privacy-policy',
    title: 'Privacy policy',
    excerpt: 'How we handle your data',
    showInNav: false
  },
  {
    id: 'terms-conditions',
    slug: 'terms-conditions',
    title: 'Terms & conditions',
    excerpt: 'Terms and conditions',
    showInNav: false
  },
  {
    id: 'website-development-project-terms-conditions',
    slug: 'website-development-project-terms-conditions',
    title: 'Website development project terms & conditions',
    excerpt: 'Project-specific terms',
    showInNav: false
  },
  
  // Getting Started
  {
    id: 'getting-started-with-lightspeed',
    slug: 'getting-started-with-lightspeed',
    title: 'Getting started with LightSpeed',
    excerpt: 'New client onboarding guide',
    template: 'page',
    showInNav: false
  },
  
  // Thank You Pages
  {
    id: 'thank-you-newsletter-subscribe',
    slug: 'thank-you-newsletter-subscribe',
    title: 'Thank you - Newsletter',
    template: 'page',
    showInNav: false
  },
  {
    id: 'thank-you-for-subscribing',
    slug: 'thank-you-for-subscribing',
    title: 'Thank you for subscribing',
    template: 'page',
    showInNav: false
  },
  {
    id: 'thank-you-content-audit-post',
    slug: 'thank-you-content-audit-post',
    title: 'Thank you - Content audit',
    template: 'page',
    showInNav: false
  },
  {
    id: 'contact-thank-you',
    slug: 'contact-thank-you',
    title: 'Thank You',
    parent: 'contact',
    template: 'page',
    showInNav: false
  },
  {
    id: 'free-consultation-thank-you',
    slug: 'free-consultation-thank-you',
    title: 'Thank You',
    parent: 'free-consultation',
    template: 'page',
    showInNav: false
  },
  {
    id: 'referrals-thank-you',
    slug: 'referrals-thank-you',
    title: 'Thank You',
    parent: 'referrals',
    template: 'page',
    showInNav: false
  },
  {
    id: 'client-intake-form-thank-you',
    slug: 'client-intake-form-thank-you',
    title: 'Thank You',
    parent: 'client-intake-form',
    template: 'page',
    showInNav: false
  },
  
  // MailPoet Pages
  {
    id: 'mailpoet-unsubscribe-success-page',
    slug: 'mailpoet-unsubscribe-success-page',
    title: 'Unsubscribed Successfully',
    template: 'page',
    showInNav: false
  },
  {
    id: 'mailpoet-manage-your-subscription',
    slug: 'mailpoet-manage-your-subscription',
    title: 'Manage Your Subscription',
    template: 'page',
    showInNav: false
  },
  {
    id: 'mailpoet-unsubscribe-confirmation',
    slug: 'mailpoet-unsubscribe-confirmation',
    title: 'Confirm Unsubscribe',
    template: 'page',
    showInNav: false
  },
  {
    id: 'mailpoet-re-engangement-page',
    slug: 'mailpoet-re-engangement-page',
    title: 'Re-engagement',
    template: 'page',
    showInNav: false
  },
  
  // Competitions/Promotions
  {
    id: 'wcct-sticker-competition',
    slug: 'wcct-sticker-competition',
    title: 'WCCT Sticker Competition',
    template: 'page',
    showInNav: false
  },
  
  // Style Guide (Design System) - Keep for prototype
  {
    id: 'style-guide',
    slug: 'style-guide',
    title: 'Style Guide',
    excerpt: 'Design system documentation',
    showInNav: false
  },
  
  // WordPress Blocks Proof of Concept - Keep for prototype
  {
    id: 'wordpress-blocks-poc',
    slug: 'wordpress-blocks-poc',
    title: 'WordPress Blocks Proof of Concept',
    excerpt: 'Demonstration of 100% WordPress core block classes with zero Tailwind and zero inline styles',
    template: 'page',
    showInNav: false
  },
  
  // Developer Tools - Keep for prototype
  {
    id: 'dev-tools',
    slug: 'dev-tools',
    title: 'Developer Tools',
    excerpt: 'Design system testing and documentation tools',
    template: 'page',
    showInNav: false
  },
  {
    id: 'site-map',
    slug: 'site-map',
    title: 'Site Map',
    excerpt: 'Complete site navigation and page structure',
    template: 'page',
    showInNav: false
  },
  {
    id: 'template-tester',
    slug: 'template-tester',
    title: 'Template Tester',
    excerpt: 'Test all templates and pages',
    parent: 'dev-tools',
    template: 'page',
    showInNav: false
  },
  {
    id: 'component-showcase',
    slug: 'component-showcase',
    title: 'Component Showcase',
    excerpt: 'Showcase all components',
    parent: 'dev-tools',
    template: 'page',
    showInNav: false
  },
  {
    id: 'block-documentation',
    slug: 'block-documentation',
    title: 'Block Documentation',
    excerpt: 'Document all blocks',
    parent: 'dev-tools',
    template: 'page',
    showInNav: false
  },
  {
    id: 'component-api',
    slug: 'component-api',
    title: 'Component API',
    excerpt: 'Reference all component APIs',
    parent: 'dev-tools',
    template: 'page',
    showInNav: false
  },
  {
    id: 'design-blocks-showcase',
    slug: 'design-blocks-showcase',
    title: 'Design Blocks Showcase',
    excerpt: 'Showcase all design blocks',
    parent: 'dev-tools',
    template: 'page',
    showInNav: false
  },
  {
    id: 'button-showcase',
    slug: 'button-showcase',
    title: 'Button Showcase',
    excerpt: 'Showcase all button styles',
    parent: 'dev-tools',
    template: 'page',
    showInNav: false
  },
  {
    id: 'header-footer-comparison',
    slug: 'header-footer-comparison',
    title: 'Header/Footer Comparison',
    excerpt: 'Compare header and footer templates',
    parent: 'dev-tools',
    template: 'page',
    showInNav: false
  },
  {
    id: 'icon-library',
    slug: 'icon-library',
    title: 'Icon Library',
    excerpt: 'Icon reference',
    parent: 'dev-tools',
    template: 'page',
    showInNav: false
  },
  {
    id: 'live-preview',
    slug: 'live-preview',
    title: 'Live Preview',
    excerpt: 'Live component preview tool',
    parent: 'dev-tools',
    template: 'page',
    showInNav: false
  },
  {
    id: 'section-presets-showcase',
    slug: 'section-presets-showcase',
    title: 'Section Presets Showcase',
    excerpt: 'Showcase all section styles and presets',
    parent: 'dev-tools',
    template: 'page',
    showInNav: false
  },
  {
    id: 'theme-blocks-showcase',
    slug: 'theme-blocks-showcase',
    title: 'Theme Blocks Showcase',
    excerpt: 'Showcase all theme blocks',
    parent: 'dev-tools',
    template: 'page',
    showInNav: false
  },
  
  // 404
  {
    id: '404',
    slug: '404',
    title: 'Page Not Found',
    template: '404',
    showInNav: false
  }
];

/**
 * Navigation Menus
 * WordPress registered menu locations
 * Based on real navigation from lightspeedwp.agency
 */

/**
 * Main Navigation (Header)
 * 2026 Strategic IA: Work / Solutions / Systems / Insights / About / Contact
 * Updated Feb 27, 2026 for Phase 1 Task 1.3
 */
export const mainNavigation = [
  {
    label: 'Work',
    page: 'portfolio-archive' as const
  },
  {
    label: 'Solutions',
    page: 'solutions' as const,
    children: [
      { label: 'WordPress', page: 'wordpress' as const },
      { label: 'WooCommerce', page: 'woocommerce' as const },
      { label: 'Tour Operators', page: 'tour-operators' as const },
      { label: 'Publishers', page: 'publishers' as const }
    ]
  },
  {
    label: 'Systems',
    page: 'systems-hub' as const,
    children: [
      { label: 'Design Tokens', page: 'design-tokens' as const },
      { label: 'Pattern Governance', page: 'pattern-governance' as const },
      { label: 'Editorial Workflows', page: 'editorial-workflows' as const },
      { label: 'AI Search Readiness', page: 'ai-search-readiness' as const },
      { label: 'Performance & Reliability', page: 'performance-reliability' as const }
    ]
  },
  {
    label: 'Insights',
    page: 'blog' as const
  },
  {
    label: 'About',
    page: 'about' as const,
    children: [
      { label: 'About Us', page: 'about' as const },
      { label: 'Our Team', page: 'team' as const },
      { label: 'Our Culture', page: 'about-culture' as const },
      { label: 'Our Process', page: 'about-process' as const }
    ]
  },
  {
    label: 'Contact',
    page: 'contact' as const
  }
];

/**
 * Footer Navigation
 * Real footer navigation from https://lightspeedwp.agency
 */
export const footerNavigation = {
  about: {
    title: 'About Us',
    links: [
      { label: 'About', page: 'about' as const },
      { label: 'How We Work', page: 'about-process' as const },
      { label: 'Our Culture', page: 'about-culture' as const },
      { label: 'Portfolio', page: 'portfolio-archive' as const },
      { label: 'Blog', page: 'blog' as const },
      { label: 'Site Map', page: 'site-map' as const }
    ]
  },
  products: {
    title: 'Our Products',
    links: [
      { label: 'LSX Theme', page: 'lsx' as const },
      { label: 'LSX Tour Operator', page: 'tour-operators' as const },
      { label: 'Wetu Importer', page: 'wetu-importer' as const },
      { label: 'LSX Sharing', page: 'lsx-sharing' as const },
      { label: 'LSX Search', page: 'lsx-search' as const }
    ]
  },
  services: {
    title: 'Our Services',
    links: [
      { label: 'Discovery', page: 'discovery' as const },
      { label: 'Design', page: 'design' as const },
      { label: 'Development', page: 'development' as const },
      { label: 'Hosting & Support', page: 'hosting' as const },
      { label: 'AI Search & Visibility', page: 'ai-search-visibility' as const }
    ]
  },
  solutions: {
    title: 'Our Solutions',
    links: [
      { label: 'WooCommerce', page: 'woocommerce' as const },
      { label: 'WordPress', page: 'wordpress' as const },
      { label: 'Tour Operators', page: 'tour-operators' as const },
      { label: 'Publishers', page: 'publishers' as const },
      { label: 'Videos', page: 'videos' as const },
      { label: 'Podcasts', page: 'podcasts' as const }
    ]
  },
  legal: {
    title: 'Legal',
    links: [
      { label: 'Privacy Policy', page: 'privacy-policy' as const },
      { label: 'Terms of Service', page: 'terms-of-service' as const }
    ]
  }
};

/**
 * Helper Functions
 */

/**
 * Get page by slug
 */
export function getPageBySlug(slug: string): SitePage | undefined {
  return sitePages.find(p => p.slug === slug);
}

/**
 * Get page title by slug
 */
export function getPageTitle(slug: string): string {
  const page = getPageBySlug(slug);
  return page ? page.title : 'Page Not Found';
}

/**
 * Get page URL by slug
 * 
 * Delegates to slugToPath() in route-map.ts which maintains the
 * canonical slug → hierarchical-URL mapping for the entire site.
 */
export function getPageUrl(slug: string): string {
  return slugToPath(slug);
}

/**
 * Get child pages
 */
export function getChildPages(parentSlug: string): SitePage[] {
  return sitePages.filter(p => p.parent === parentSlug);
}

/**
 * Get breadcrumb trail
 */
export function getBreadcrumbs(slug: string): { label: string; url: string }[] {
  const breadcrumbs: { label: string; url: string }[] = [
    { label: 'Home', url: '/' }
  ];
  
  const page = getPageBySlug(slug);
  if (!page) return breadcrumbs;
  
  // Add parent if exists
  if (page.parent) {
    const parent = getPageBySlug(page.parent);
    if (parent) {
      breadcrumbs.push({
        label: parent.title,
        url: getPageUrl(parent.slug)
      });
    }
  }
  
  // Add current page
  breadcrumbs.push({
    label: page.title,
    url: getPageUrl(page.slug)
  });
  
  return breadcrumbs;
}