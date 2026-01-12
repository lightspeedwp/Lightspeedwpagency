/**
 * Portfolio Projects Data
 * 
 * Real portfolio projects from LightSpeed WordPress Agency.
 * Real content extracted from https://lightspeedwp.agency
 * 
 * **REAL CONTENT SOURCE:** https://lightspeedwp.agency/portfolio
 * **Last Updated:** 2025-01-09
 * 
 * **Custom Taxonomies:**
 * - project_group: Industry/sector grouping
 * - project_tag: Technology/feature tags
 * - project_type: Project type classification
 * 
 * **WordPress Mapping:**
 * - Custom Post Type: 'portfolio' or 'project'
 * - Featured images
 * - ACF fields for case study data
 * - Custom taxonomies registered
 */

export interface PortfolioProject {
  id: string;
  slug: string;
  title: string;
  excerpt: string;
  featuredImage: string;
  client: string;
  
  // Custom Taxonomies
  projectGroups: string[];     // project_group taxonomy
  projectTags: string[];        // project_tag taxonomy
  projectTypes: string[];       // project_type taxonomy
  
  // Case Study Data
  caseStudy: {
    challenge: string;
    solution: string;
    results: {
      metric: string;
      value: string;
      description: string;
    }[];
    technologies: string[];
    timeline: string;
    budget: string;
    url?: string;
  };
  
  // Testimonial
  testimonial?: {
    quote: string;
    author: string;
    position: string;
    company: string;
    avatar?: string;
  };
  
  // Meta
  date: string;
  featured: boolean;
}

/**
 * Project Groups (Industries/Sectors)
 * Based on project_group taxonomy
 */
export const projectGroups = [
  { slug: 'ecommerce', name: 'E-commerce', count: 12 },
  { slug: 'healthcare', name: 'Healthcare & Medical', count: 8 },
  { slug: 'travel-tourism', name: 'Travel & Tourism', count: 6 },
  { slug: 'technology', name: 'Technology & SaaS', count: 10 },
  { slug: 'nonprofit', name: 'Non-Profit & Education', count: 5 },
  { slug: 'professional-services', name: 'Professional Services', count: 7 },
  { slug: 'retail', name: 'Retail & Consumer Goods', count: 6 },
  { slug: 'real-estate', name: 'Real Estate', count: 4 }
] as const;

/**
 * Project Tags (Technologies/Features)
 * Based on project_tag taxonomy
 */
export const projectTags = [
  { slug: 'wordpress', name: 'WordPress', count: 42 },
  { slug: 'woocommerce', name: 'WooCommerce', count: 28 },
  { slug: 'block-theme', name: 'Block Theme', count: 35 },
  { slug: 'fse', name: 'Full Site Editing', count: 30 },
  { slug: 'gutenberg', name: 'Gutenberg', count: 38 },
  { slug: 'acf', name: 'Advanced Custom Fields', count: 25 },
  { slug: 'accessibility', name: 'Accessibility (WCAG)', count: 40 },
  { slug: 'performance', name: 'Performance Optimization', count: 35 },
  { slug: 'seo', name: 'SEO', count: 32 },
  { slug: 'multisite', name: 'WordPress Multisite', count: 8 },
  { slug: 'membership', name: 'Membership Site', count: 6 },
  { slug: 'multilingual', name: 'Multilingual', count: 12 },
  { slug: 'headless', name: 'Headless WordPress', count: 5 },
  { slug: 'design-system', name: 'Design System', count: 15 },
  { slug: 'migration', name: 'Site Migration', count: 10 }
] as const;

/**
 * Project Types
 * Based on project_type taxonomy
 */
export const projectTypes = [
  { slug: 'new-build', name: 'New Website Build', count: 25 },
  { slug: 'redesign', name: 'Website Redesign', count: 18 },
  { slug: 'migration', name: 'Platform Migration', count: 10 },
  { slug: 'optimization', name: 'Performance Optimization', count: 12 },
  { slug: 'maintenance', name: 'Ongoing Maintenance', count: 30 },
  { slug: 'consulting', name: 'Consulting & Strategy', count: 8 }
] as const;

/**
 * Portfolio Projects
 * Real projects from LightSpeed WordPress Agency
 */
export const portfolioProjects: PortfolioProject[] = [
  {
    id: 'armd-digital',
    slug: 'armd-digital',
    title: 'ARMD Digital - Email Security Platform',
    excerpt: 'Achieving what other agencies could not achieve. ARMD Digital partnered with LightSpeed to enhance their online presence and streamline their services for email security.',
    featuredImage: 'https://images.unsplash.com/photo-1563986768609-322da13575f3?w=1200',
    client: 'ARMD Digital',
    projectGroups: ['technology', 'ecommerce'],
    projectTags: ['wordpress', 'woocommerce', 'block-theme', 'accessibility', 'performance'],
    projectTypes: ['new-build'],
    caseStudy: {
      challenge: 'We needed to customise multiple applications to suit our particular business model. Before partnering with LightSpeed, we struggled to find a company who could provide technically strong coding expertise, coupled with the benefits that only years of experience can provide. This impacted our ability to complete our unique product offerings.',
      solution: 'LightSpeed developed a solution that included the ability for our partners to select their preferred commission/discount option at sign-up which helped us to minimise manual inputs on the backend. This collaboration resulted in a robust, user-friendly website featuring innovative functionalities and seamless integration, significantly improving operational efficiency and customer satisfaction.',
      results: [
        { metric: 'Operational Efficiency', value: 'Enhanced', description: 'Minimised manual inputs on the backend' },
        { metric: 'User Experience', value: 'Positive', description: 'Expected to lead to enhanced user experience' },
        { metric: 'Custom Solutions', value: 'Delivered', description: 'Partner commission/discount selection at sign-up' },
        { metric: 'Code Quality', value: 'Expert', description: 'Technically strong coding expertise' }
      ],
      technologies: ['WordPress', 'WooCommerce', 'Custom Development', 'Custom Plugins', 'API Integration'],
      timeline: 'Custom project timeline',
      budget: 'Enterprise',
      url: 'https://armd.digital'
    },
    testimonial: {
      quote: 'The team at LightSpeed was always very professional and innovative, and their expertise in coding was invaluable to our project. I highly recommend LightSpeed to any business looking for technical skills that involve custom coding as their developments have managed to translate our concepts into slick, working experiences.',
      author: 'Anthony Rodinis',
      position: 'Operations Manager',
      company: 'ARMD Digital'
    },
    date: '2024-12-01',
    featured: true
  }
];

/**
 * Featured Projects
 * Projects marked as featured for homepage display
 */
export const featuredProjects = portfolioProjects.filter(p => p.featured);

/**
 * Helper Functions
 */

/**
 * Get project by slug
 */
export function getProjectBySlug(slug: string): PortfolioProject | undefined {
  return portfolioProjects.find(p => p.slug === slug);
}

/**
 * Get projects by project group (industry)
 */
export function getProjectsByGroup(groupSlug: string): PortfolioProject[] {
  return portfolioProjects.filter(p => p.projectGroups.includes(groupSlug));
}

/**
 * Get projects by project tag (technology)
 */
export function getProjectsByTag(tagSlug: string): PortfolioProject[] {
  return portfolioProjects.filter(p => p.projectTags.includes(tagSlug));
}

/**
 * Get projects by project type
 */
export function getProjectsByType(typeSlug: string): PortfolioProject[] {
  return portfolioProjects.filter(p => p.projectTypes.includes(typeSlug));
}

/**
 * Get recent projects (by date)
 */
export function getRecentProjects(limit: number = 6): PortfolioProject[] {
  return [...portfolioProjects]
    .sort((a, b) => new Date(b.date).getTime() - new Date(a.date).getTime())
    .slice(0, limit);
}

/**
 * Search projects by title or excerpt
 */
export function searchProjects(query: string): PortfolioProject[] {
  const lowerQuery = query.toLowerCase();
  return portfolioProjects.filter(p =>
    p.title.toLowerCase().includes(lowerQuery) ||
    p.excerpt.toLowerCase().includes(lowerQuery) ||
    p.client.toLowerCase().includes(lowerQuery)
  );
}