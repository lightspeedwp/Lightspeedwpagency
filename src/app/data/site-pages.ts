/**
 * Site Pages Mock Data
 * 
 * WordPress site pages structure based on LightspeedWP.agency.
 * Complete page hierarchy with navigation menus.
 * 
 * **WordPress Mapping:**
 * - Post Type: 'page'
 * - Page templates
 * - Navigation menus (registered locations)
 * - Hierarchical structure (parent/child pages)
 */

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
 * Based on page-sitemap.xml from LightspeedWP.agency
 */
export const sitePages: SitePage[] = [
  // Home
  {
    id: 'home',
    slug: 'home',
    title: 'Home',
    template: 'front-page',
    showInNav: true,
    order: 1
  },
  
  // Services
  {
    id: 'services',
    slug: 'services',
    title: 'Services',
    excerpt: 'WordPress & WooCommerce solutions',
    template: 'page',
    showInNav: true,
    order: 2
  },
  {
    id: 'wordpress-development',
    slug: 'wordpress-development',
    title: 'WordPress Development',
    excerpt: 'Custom WordPress themes and plugin development',
    parent: 'services',
    showInNav: false
  },
  {
    id: 'woocommerce-development',
    slug: 'woocommerce-development',
    title: 'WooCommerce Development',
    excerpt: 'E-commerce solutions and custom integrations',
    parent: 'services',
    showInNav: false
  },
  {
    id: 'block-theme-development',
    slug: 'block-theme-development',
    title: 'Block Theme Development',
    excerpt: 'Full Site Editing (FSE) block themes',
    parent: 'services',
    showInNav: false
  },
  {
    id: 'design-systems',
    slug: 'design-systems',
    title: 'Design Systems',
    excerpt: 'Token-driven design systems for WordPress',
    parent: 'services',
    showInNav: false
  },
  {
    id: 'accessibility-services',
    slug: 'accessibility-services',
    title: 'Accessibility Services',
    excerpt: 'WCAG 2.1 AA compliance and audits',
    parent: 'services',
    showInNav: false
  },
  {
    id: 'performance-optimization',
    slug: 'performance-optimization',
    title: 'Performance Optimization',
    excerpt: 'Core Web Vitals and speed optimization',
    parent: 'services',
    showInNav: false
  },
  {
    id: 'site-migration',
    slug: 'site-migration',
    title: 'Site Migration',
    excerpt: 'Platform migrations and upgrades',
    parent: 'services',
    showInNav: false
  },
  {
    id: 'maintenance-support',
    slug: 'maintenance-support',
    title: 'Maintenance & Support',
    excerpt: 'Ongoing WordPress care and updates',
    parent: 'services',
    showInNav: false
  },
  
  // Solutions (Service Variants)
  {
    id: 'solutions',
    slug: 'solutions',
    title: 'Solutions',
    showInNav: false
  },
  {
    id: 'solutions-wordpress',
    slug: 'solutions-wordpress',
    title: 'WordPress Solutions',
    excerpt: 'Enterprise WordPress implementations',
    parent: 'solutions',
    showInNav: false
  },
  {
    id: 'solutions-woocommerce',
    slug: 'solutions-woocommerce',
    title: 'WooCommerce Solutions',
    excerpt: 'E-commerce platform development',
    parent: 'solutions',
    showInNav: false
  },
  {
    id: 'solutions-multisite',
    slug: 'solutions-multisite',
    title: 'WordPress Multisite Solutions',
    excerpt: 'Multi-site network management',
    parent: 'solutions',
    showInNav: false
  },
  {
    id: 'solutions-headless',
    slug: 'solutions-headless',
    title: 'Headless WordPress Solutions',
    excerpt: 'Decoupled WordPress with modern frameworks',
    parent: 'solutions',
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
    order: 3
  },
  
  // Blog
  {
    id: 'blog',
    slug: 'blog',
    title: 'Blog',
    excerpt: 'WordPress insights and tutorials',
    template: 'index',
    showInNav: true,
    order: 4
  },
  
  // About
  {
    id: 'about',
    slug: 'about',
    title: 'About',
    excerpt: 'About LSX Design',
    template: 'page',
    showInNav: true,
    order: 5
  },
  {
    id: 'team',
    slug: 'team',
    title: 'Our Team',
    excerpt: 'Meet the WordPress experts',
    parent: 'about',
    showInNav: false
  },
  {
    id: 'about-process',
    slug: 'about-process',
    title: 'Our Process',
    excerpt: 'How we work',
    parent: 'about',
    showInNav: false
  },
  {
    id: 'about-culture',
    slug: 'about-culture',
    title: 'Culture & Values',
    excerpt: 'What drives us',
    parent: 'about',
    showInNav: false
  },
  {
    id: 'about-history',
    slug: 'about-history',
    title: 'Company History',
    excerpt: 'Our journey',
    parent: 'about',
    showInNav: false
  },
  {
    id: 'careers',
    slug: 'careers',
    title: 'Careers',
    excerpt: 'Join our team',
    parent: 'about',
    showInNav: false
  },
  
  // Hosting
  {
    id: 'hosting',
    slug: 'hosting',
    title: 'Hosting',
    excerpt: 'Managed WordPress hosting',
    template: 'page',
    showInNav: true,
    order: 6
  },
  {
    id: 'hosting-plans',
    slug: 'hosting-plans',
    title: 'Hosting Plans',
    excerpt: 'Choose your plan',
    parent: 'hosting',
    showInNav: false
  },
  {
    id: 'hosting-features',
    slug: 'hosting-features',
    title: 'Hosting Features',
    excerpt: 'What\'s included',
    parent: 'hosting',
    showInNav: false
  },
  {
    id: 'hosting-support',
    slug: 'hosting-support',
    title: 'Hosting Support',
    excerpt: '24/7 WordPress support',
    parent: 'hosting',
    showInNav: false
  },
  
  // Contact
  {
    id: 'contact',
    slug: 'contact',
    title: 'Contact',
    excerpt: 'Get in touch',
    template: 'page',
    showInNav: true,
    order: 7
  },
  
  // Testimonials
  {
    id: 'testimonials',
    slug: 'testimonials',
    title: 'Testimonials',
    excerpt: 'Client success stories',
    template: 'page',
    showInNav: true,
    order: 8
  },
  
  // Resources
  {
    id: 'resources',
    slug: 'resources',
    title: 'Resources',
    showInNav: false
  },
  {
    id: 'documentation',
    slug: 'documentation',
    title: 'Documentation',
    excerpt: 'Guides and tutorials',
    parent: 'resources',
    showInNav: false
  },
  {
    id: 'faqs',
    slug: 'faqs',
    title: 'FAQs',
    excerpt: 'Frequently asked questions',
    parent: 'resources',
    showInNav: false
  },
  {
    id: 'case-studies',
    slug: 'case-studies',
    title: 'Case Studies',
    excerpt: 'In-depth project reviews',
    parent: 'resources',
    showInNav: false
  },
  {
    id: 'whitepapers',
    slug: 'whitepapers',
    title: 'Whitepapers',
    excerpt: 'Industry insights',
    parent: 'resources',
    showInNav: false
  },
  
  // Legal
  {
    id: 'privacy-policy',
    slug: 'privacy-policy',
    title: 'Privacy Policy',
    showInNav: false
  },
  {
    id: 'terms-of-service',
    slug: 'terms-of-service',
    title: 'Terms of Service',
    showInNav: false
  },
  {
    id: 'cookie-policy',
    slug: 'cookie-policy',
    title: 'Cookie Policy',
    showInNav: false
  },
  
  // Pricing & ROI
  {
    id: 'pricing',
    slug: 'pricing',
    title: 'Pricing',
    excerpt: 'Transparent pricing for WordPress solutions',
    template: 'page',
    showInNav: false
  },
  {
    id: 'roi-calculator',
    slug: 'roi-calculator',
    title: 'ROI Calculator',
    excerpt: 'Calculate your WordPress investment return',
    template: 'page',
    showInNav: false
  },
  
  // Why Choose Us & Guarantees
  {
    id: 'why-choose-us',
    slug: 'why-choose-us',
    title: 'Why Choose Us',
    excerpt: 'What makes LSX Design different',
    template: 'page',
    showInNav: false
  },
  {
    id: 'guarantees',
    slug: 'guarantees',
    title: 'Our Guarantees',
    excerpt: 'Risk-free WordPress development',
    template: 'page',
    showInNav: false
  },
  
  // Style Guide (Design System)
  {
    id: 'style-guide',
    slug: 'style-guide',
    title: 'Style Guide',
    excerpt: 'Design system documentation',
    showInNav: false
  },
  
  // Developer Tools
  {
    id: 'dev-tools',
    slug: 'dev-tools',
    title: 'Developer Tools',
    excerpt: 'Design system testing and documentation tools',
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
 */

/**
 * Main Navigation (Header)
 */
export const mainNavigation = [
  {
    label: 'Home',
    page: 'home' as const
  },
  {
    label: 'Services',
    page: 'services' as const,
    children: [
      { label: 'WordPress Development', page: 'wordpress-development' as const },
      { label: 'WooCommerce Development', page: 'woocommerce-development' as const },
      { label: 'Block Theme Development', page: 'block-theme-development' as const },
      { label: 'Design Systems', page: 'design-systems' as const },
      { label: 'Accessibility Services', page: 'accessibility-services' as const },
      { label: 'Performance Optimization', page: 'performance-optimization' as const },
      { label: 'Site Migration', page: 'site-migration' as const },
      { label: 'Maintenance & Support', page: 'maintenance-support' as const }
    ]
  },
  {
    label: 'Portfolio',
    page: 'portfolio-archive' as const
  },
  {
    label: 'Blog',
    page: 'blog' as const
  },
  {
    label: 'About',
    page: 'about' as const,
    children: [
      { label: 'About Us', page: 'about' as const },
      { label: 'Our Team', page: 'team' as const },
      { label: 'Our Process', page: 'about-process' as const },
      { label: 'Culture & Values', page: 'about-culture' as const },
      { label: 'Company History', page: 'about-history' as const },
      { label: 'Careers', page: 'careers' as const }
    ]
  },
  {
    label: 'Hosting',
    page: 'hosting' as const
  },
  {
    label: 'Contact',
    page: 'contact' as const
  }
];

/**
 * Footer Navigation
 */
export const footerNavigation = {
  services: {
    title: 'Services',
    links: [
      { label: 'WordPress Development', page: 'wordpress-development' as const },
      { label: 'WooCommerce Solutions', page: 'woocommerce-development' as const },
      { label: 'Block Themes', page: 'block-theme-development' as const },
      { label: 'Design Systems', page: 'design-systems' as const },
      { label: 'Accessibility', page: 'accessibility-services' as const },
      { label: 'Performance', page: 'performance-optimization' as const }
    ]
  },
  company: {
    title: 'Company',
    links: [
      { label: 'About Us', page: 'about' as const },
      { label: 'Our Team', page: 'team' as const },
      { label: 'Careers', page: 'careers' as const },
      { label: 'Portfolio', page: 'portfolio-archive' as const },
      { label: 'Case Studies', page: 'case-studies' as const },
      { label: 'Blog', page: 'blog' as const }
    ]
  },
  resources: {
    title: 'Resources',
    links: [
      { label: 'Documentation', page: 'documentation' as const },
      { label: 'FAQs', page: 'faqs' as const },
      { label: 'Whitepapers', page: 'whitepapers' as const },
      { label: 'Style Guide', page: 'style-guide' as const }
    ]
  },
  legal: {
    title: 'Legal',
    links: [
      { label: 'Privacy Policy', page: 'privacy-policy' as const },
      { label: 'Terms of Service', page: 'terms-of-service' as const },
      { label: 'Cookie Policy', page: 'cookie-policy' as const }
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
 */
export function getPageUrl(slug: string): string {
  if (slug === 'home') return '/';
  if (slug === 'blog') return '/blog';
  if (slug === 'portfolio-archive') return '/portfolio';
  return `/${slug}`;
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