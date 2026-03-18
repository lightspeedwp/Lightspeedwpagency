/**
 * Header Navigation Data
 *
 * Navigation structure for the SiteHeader component.
 * Extracted for file size compliance (max 300 lines per .tsx).
 *
 * @see SiteHeader.tsx — Consumer component
 */

import { blogCategories } from './taxonomies';

/* ═══════════════════════════════════════════
 * Types
 * ═══════════════════════════════════════════ */

export interface NavSubItem {
  label: string;
  page: string;
  description?: string;
}

export interface MegaMenuSection {
  title?: string;
  accent?: string;
  items: NavSubItem[];
}

export interface NavItem {
  label: string;
  page: string;
  isActive?: boolean;
  hasMegaMenu?: boolean;
  menuTitle?: string;
  menuDescription?: string;
  megaMenuSections?: MegaMenuSection[];
}

/* ═══════════════════════════════════════════
 * Post Formats (Subscription-style)
 * ═══════════════════════════════════════════ */

const postFormats: NavSubItem[] = [
  { label: 'Podcasts', page: 'audio-archive', description: 'Exclusive interviews & discussions' },
  { label: 'Video Library', page: 'videos', description: 'Premium tutorials & webinars' },
  { label: 'Photo Galleries', page: 'gallery-archive', description: 'Event photos & visual stories' },
  { label: 'Quick Updates', page: 'aside-archive', description: 'Short status updates & news' },
  { label: 'Downloads', page: 'link-archive', description: 'Resources & templates' }
];

/* ═══════════════════════════════════════════
 * Build Navigation Items
 * ═══════════════════════════════════════════ */

export function buildNavItems(currentPath: string): NavItem[] {
  return [
    {
      label: 'Work',
      page: 'portfolio-archive',
      isActive: currentPath === '/work' || currentPath.startsWith('/work/'),
      hasMegaMenu: true,
      menuTitle: 'Our work speaks for itself',
      menuDescription: 'Browse real client projects by industry or service type.',
      megaMenuSections: [
        {
          title: 'By Industry',
          items: [
            { label: 'Travel & Tourism', page: 'portfolio-archive', description: 'Tour operators & booking' },
            { label: 'E-commerce', page: 'portfolio-archive', description: 'WooCommerce stores' },
            { label: 'Corporate', page: 'portfolio-archive', description: 'Business websites' }
          ]
        },
        {
          title: 'By Service',
          items: [
            { label: 'Redesigns', page: 'portfolio-archive', description: 'Website overhauls' },
            { label: 'Custom Development', page: 'portfolio-archive', description: 'Bespoke solutions' },
            { label: 'Migrations', page: 'portfolio-archive', description: 'Platform migrations' }
          ]
        }
      ]
    },
    {
      label: 'Solutions',
      page: 'solutions',
      isActive: currentPath === '/solutions' || currentPath.startsWith('/solutions/'),
      hasMegaMenu: true,
      menuTitle: 'Built for your industry',
      menuDescription: 'Platform-specific and industry-targeted solutions tailored to your sector.',
      megaMenuSections: [
        {
          title: 'Platforms',
          items: [
            { label: 'WordPress', page: 'wordpress', description: 'Enterprise WordPress solutions' },
            { label: 'WooCommerce', page: 'woocommerce', description: 'E-commerce & online stores' },
            { label: 'WordPress Multisite', page: 'wordpress-multisite', description: 'Multi-site network management' },
            { label: 'Headless WordPress', page: 'headless-wordpress', description: 'API-first architecture' }
          ]
        },
        {
          title: 'Website Projects',
          items: [
            { label: 'WordPress Redesign', page: 'wordpress-redesign', description: 'Transform your existing site' },
            { label: 'WooCommerce Redesign', page: 'woocommerce-redesign', description: 'Rebuild your online store' },
            { label: 'Custom WordPress Theme', page: 'custom-wordpress-theme', description: 'Bespoke FSE themes' },
            { label: 'WordPress to WordPress', page: 'wordpress-to-wordpress', description: 'Modernize legacy sites' }
          ]
        },
        {
          title: 'Industries',
          items: [
            { label: 'Publishers', page: 'publishers', description: 'Digital publishing solutions' },
            { label: 'E-commerce', page: 'ecommerce-industry', description: 'Online retail platforms' },
            { label: 'Education', page: 'education-industry', description: 'Learning management systems' },
            { label: 'Healthcare', page: 'healthcare-industry', description: 'HIPAA-compliant websites' }
          ]
        },
        {
          title: 'AI Solutions',
          items: [
            { label: 'AI Integrations', page: 'ai-integrations', description: 'AI-powered WordPress' },
            { label: 'AI Content Generation', page: 'ai-content-generation', description: 'Automated content at scale' },
            { label: 'AI-Powered SEO', page: 'ai-seo', description: 'Intelligent search optimisation' },
            { label: 'AI Chatbots', page: 'ai-chatbots', description: 'Conversational agents 24/7' },
            { label: 'AI Analytics', page: 'ai-analytics', description: 'Predictive insights & reporting' },
            { label: 'AI Image Recognition', page: 'ai-image-recognition', description: 'Auto-tagging & optimization' }
          ]
        }
      ]
    },
    {
      label: 'Services',
      page: 'services',
      isActive: currentPath === '/services' || currentPath.startsWith('/services/'),
      hasMegaMenu: true,
      menuTitle: '6-Phase Website Lifecycle',
      menuDescription: 'From strategy to AI evolution — our proven process takes you through every stage of your website journey.',
      megaMenuSections: [
        {
          title: '01 — Discover', accent: 'var(--category-violet)',
          items: [
            { label: 'Discovery & Strategy', page: 'journey-discover', description: 'Uncover. Research. Strategise.' },
            { label: 'Content Audit', page: 'content-audit', description: 'Analyse every page' },
            { label: 'Content Strategy', page: 'content-strategy', description: 'Define your voice & plan' },
            { label: 'Competitor Research', page: 'competitor-research', description: 'Market analysis & benchmarking' }
          ]
        },
        {
          title: '02 — Create', accent: 'var(--category-pink)',
          items: [
            { label: 'Web Design', page: 'journey-create', description: 'Design. Prototype. Inspire.' },
            { label: 'Figma Prototyping', page: 'figma-prototyping', description: 'Interactive prototypes' },
            { label: 'Design Systems', page: 'design-systems', description: 'Tokens & governance' },
            { label: 'Content Collection', page: 'content-collection', description: 'Gather & organize assets' },
            { label: 'Brand Guidelines', page: 'brand-guidelines', description: 'Visual identity systems' }
          ]
        },
        {
          title: '03 — Build', accent: 'var(--category-cyan)',
          items: [
            { label: 'WordPress Development', page: 'journey-build', description: 'Develop. Integrate. Harden.' },
            { label: 'WooCommerce Development', page: 'woocommerce-service', description: 'E-commerce platforms' },
            { label: 'Plugin Development', page: 'development-service', description: 'Custom functionality' },
            { label: 'Theme Development', page: 'development-service', description: 'Block themes & FSE' },
            { label: 'API Integrations', page: 'api-integrations', description: 'Third-party connections' },
            { label: 'Custom Post Types', page: 'custom-post-types', description: 'Advanced content models' }
          ]
        },
        {
          title: '04 — Launch', accent: 'var(--category-amber)',
          items: [
            { label: 'Deployment', page: 'journey-launch', description: 'Deploy. Train. Go live.' },
            { label: 'Managed Hosting', page: 'hosting', description: 'High-performance infrastructure' },
            { label: 'Team Training', page: 'training', description: 'WordPress editor training' },
            { label: 'Migration Services', page: 'migration-service', description: 'Platform & content transfer' },
            { label: 'SSL & Security Setup', page: 'security-setup', description: 'Certificate & hardening' }
          ]
        },
        {
          title: '05 — Grow', accent: 'var(--category-green)',
          items: [
            { label: 'SEO & Performance', page: 'journey-grow', description: 'Optimise. Rank. Scale.' },
            { label: 'Performance Optimisation', page: 'performance-service', description: 'Core Web Vitals' },
            { label: 'Accessibility', page: 'accessibility-service', description: 'WCAG compliance' },
            { label: 'Support & Maintenance', page: 'support-service', description: 'Ongoing care' },
            { label: 'Security Monitoring', page: 'security-monitoring', description: '24/7 threat protection' },
            { label: 'Analytics & Reporting', page: 'analytics-service', description: 'Data-driven insights' }
          ]
        },
        {
          title: '06 — Evolve', accent: 'var(--category-indigo)',
          items: [
            { label: 'AI Integration', page: 'journey-evolve', description: 'AI-power. Future-proof.' },
            { label: 'AI Engine Optimisation', page: 'ai-engine-optimisation', description: 'Cut AI costs 60%' },
            { label: 'Answer Engine Optimisation', page: 'answer-engine-optimisation', description: 'Get cited by AI' },
            { label: 'Voice Search Optimization', page: 'voice-search-optimization', description: 'Optimize for Alexa & Google' }
          ]
        }
      ]
    },
    {
      label: 'Systems',
      page: 'systems-hub',
      isActive: currentPath === '/systems' || currentPath.startsWith('/systems/'),
      hasMegaMenu: true,
      menuTitle: 'WordPress Systems That Scale',
      menuDescription: 'Five core pillars that power every LSX Design project. From design tokens to AI search readiness.',
      megaMenuSections: [
        {
          title: 'Core Systems',
          items: [
            { label: 'Design Tokens', page: 'design-tokens', description: 'Visual consistency at scale' },
            { label: 'Pattern Governance', page: 'pattern-governance', description: 'Reusable component architecture' },
            { label: 'Editorial Workflows', page: 'editorial-workflows', description: 'Content efficiency & quality' }
          ]
        },
        {
          title: 'Advanced Systems',
          items: [
            { label: 'AI Search Readiness', page: 'ai-search-readiness', description: 'Answer Engine Optimization' },
            { label: 'Performance & Reliability', page: 'performance-reliability', description: 'Core Web Vitals & uptime' }
          ]
        },
        {
          title: 'Get Started',
          items: [
            { label: 'Request a Systems Audit', page: 'contact', description: 'Free consultation & analysis' },
            { label: 'Explore Service Tiers', page: 'services', description: 'Foundation, Growth, Enterprise' }
          ]
        }
      ]
    },
    {
      label: 'Insights',
      page: 'blog',
      isActive: currentPath === '/insights' || currentPath.startsWith('/insights/'),
      hasMegaMenu: true,
      menuTitle: 'Insights & resources',
      menuDescription: 'Stay updated with the latest in WordPress, WooCommerce, and web development.',
      megaMenuSections: [
        {
          title: 'Categories',
          items: blogCategories.map(category => ({
            label: category.name,
            page: `category-${category.slug}`,
            description: category.description
          }))
        },
        {
          title: 'Premium Content',
          items: postFormats
        },
        {
          title: 'Resources',
          items: [
            { label: 'All Articles', page: 'blog', description: 'Browse all posts' },
            { label: 'Subscribe', page: 'newsletter-service', description: 'Get updates via email' }
          ]
        }
      ]
    },
    {
      label: 'About',
      page: 'about',
      isActive: currentPath === '/about' || currentPath.startsWith('/about/'),
      hasMegaMenu: true,
      menuTitle: 'Get to know us',
      menuDescription: 'Learn about the team, culture, and process behind our work.',
      megaMenuSections: [
        {
          title: 'Company',
          items: [
            { label: 'About Us', page: 'about', description: 'Our story & mission' },
            { label: 'Our Team', page: 'team', description: 'Meet the experts' },
            { label: 'Our Culture', page: 'about-culture', description: 'Values & culture' }
          ]
        },
        {
          title: 'How We Work',
          items: [
            { label: 'Our Process', page: 'about-process', description: 'Step-by-step workflow' },
            { label: 'Case Studies', page: 'portfolio-archive', description: 'Client projects' }
          ]
        }
      ]
    },
    {
      label: 'Contact',
      page: 'contact',
      isActive: currentPath === '/contact'
    }
  ];
}