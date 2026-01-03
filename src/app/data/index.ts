/**
 * Data Index - Centralized Data Exports
 * 
 * Import all mock data from a single location.
 * This file provides a clean API for accessing all site data.
 * 
 * **Usage:**
 * ```typescript
 * import { portfolioProjects, blogPosts, sitePages } from '../data';
 * ```
 * 
 * **Data Structure:**
 * - Site Pages: Complete page hierarchy and navigation
 * - Portfolio Projects: Real-world WordPress/WooCommerce projects
 * - Blog Posts: 2025 blog posts with authors and tags
 * - FAQs: Question collections for all templates
 * 
 * **WordPress Mapping:**
 * - Pages → WordPress Pages (post_type: 'page')
 * - Projects → Custom Post Type: 'portfolio' or 'project'
 * - Posts → WordPress Posts (post_type: 'post')
 * - FAQs → Custom Post Type: 'faq'
 */

// ========================================
// SITE PAGES & NAVIGATION
// ========================================

export {
  // Pages
  sitePages,
  mainNavigation,
  footerNavigation,
  
  // Helper Functions
  getPageBySlug,
  getPageTitle,
  getPageUrl,
  getChildPages,
  getBreadcrumbs,
  
  // Types
  type SitePage
} from './site-pages';

// ========================================
// PORTFOLIO PROJECTS
// ========================================

export {
  // Projects
  portfolioProjects,
  featuredProjects,
  
  // Taxonomies (Custom)
  projectGroups,  // project_group taxonomy
  projectTags,    // project_tag taxonomy
  projectTypes,   // project_type taxonomy
  
  // Helper Functions
  getProjectBySlug,
  getProjectsByGroup,
  getProjectsByTag,
  getProjectsByType,
  getRecentProjects,
  searchProjects,
  
  // Types
  type PortfolioProject
} from './portfolio-projects';

// ========================================
// BLOG POSTS
// ========================================

export {
  // Posts
  blogPosts,
  featuredPosts,
  
  // Authors
  blogAuthors,
  
  // Taxonomies
  blogCategories,  // category taxonomy
  postTags,        // post_tag taxonomy
  
  // Helper Functions
  getPostBySlug,
  getAuthorBySlug,
  getPostsByAuthor,
  getPostsByCategory,
  getPostsByTag,
  getRecentPosts,
  searchPosts,
  
  // Types
  type BlogPost,
  type BlogAuthor
} from './blog-posts';

// ========================================
// FAQS
// ========================================

export {
  // FAQ Collections
  homepageFAQs,
  servicesFAQs,
  portfolioFAQs,
  blogFAQs,
  aboutFAQs,
  contactFAQs,
  teamFAQs,
  processFAQs,
  cultureFAQs,
  historyFAQs,
  hostingFAQs,
  generalFAQs,
  technicalFAQs,
  
  // Types
  type FAQ
} from './faqs';

// ========================================
// BACKWARD COMPATIBILITY EXPORTS
// ========================================

// Legacy exports for existing code
export { mainPages, allPages } from './pages';
export { industries, categories, technologies } from './portfolio';
export { authors } from './posts';

// ========================================
// PRICING & PACKAGES
// ========================================

export {
  // Packages
  websitePackages,
  maintenancePackages,
  alacarte,
  
  // Helper Functions
  getPackageBySlug,
  getRecommendedPackage,
  getPackagesByCategory,
  
  // Types
  type PricingPackage,
  type PricingFeature
} from './pricing';

// ========================================
// LOGOS & SOCIAL PROOF
// ========================================

export {
  // Logos
  clientLogos,
  partnerLogos,
  awardLogos,
  certificationLogos,
  allLogos,
  
  // Helper Functions
  getLogoById,
  getLogosByCategory,
  getLogosForHomepage,
  getLogosForAboutPage,
  getLogosForPortfolio,
  
  // Types
  type Logo
} from './logos';

// ========================================
// FEATURE COMPARISONS
// ========================================

export {
  // Comparisons
  websiteFeatureComparison,
  maintenanceFeatureComparison,
  
  // Helper Functions
  getFeatureById,
  getFeaturesByCategory,
  getAllCategories,
  
  // Types
  type ComparisonFeature
} from './comparisons';

// ========================================
// DATA STATISTICS
// ========================================

/**
 * Get data statistics for dashboard/admin use
 */
export function getDataStats() {
  const { portfolioProjects } = require('./portfolio-projects');
  const { blogPosts, blogAuthors } = require('./blog-posts');
  const { sitePages } = require('./site-pages');
  
  return {
    pages: {
      total: sitePages.length,
      published: sitePages.filter((p: any) => p.showInNav).length,
      parents: sitePages.filter((p: any) => !p.parent).length,
      children: sitePages.filter((p: any) => p.parent).length
    },
    portfolio: {
      total: portfolioProjects.length,
      featured: portfolioProjects.filter((p: any) => p.featured).length,
      groups: new Set(portfolioProjects.flatMap((p: any) => p.projectGroups)).size,
      tags: new Set(portfolioProjects.flatMap((p: any) => p.projectTags)).size
    },
    blog: {
      total: blogPosts.length,
      featured: blogPosts.filter((p: any) => p.featured).length,
      authors: blogAuthors.length,
      categories: blogPosts.reduce((acc: any, p: any) => {
        p.categories.forEach((cat: string) => acc.add(cat));
        return acc;
      }, new Set()).size,
      tags: blogPosts.reduce((acc: any, p: any) => {
        p.tags.forEach((tag: string) => acc.add(tag));
        return acc;
      }, new Set()).size
    }
  };
}

/**
 * Get all content for search indexing
 */
export function getAllContent() {
  const { portfolioProjects } = require('./portfolio-projects');
  const { blogPosts } = require('./blog-posts');
  const { sitePages } = require('./site-pages');
  
  return {
    pages: sitePages,
    projects: portfolioProjects,
    posts: blogPosts
  };
}

/**
 * Search all content types
 */
export function searchAllContent(query: string) {
  const { searchProjects } = require('./portfolio-projects');
  const { searchPosts } = require('./blog-posts');
  const { sitePages, getPageUrl } = require('./site-pages');
  
  const lowerQuery = query.toLowerCase();
  
  return {
    projects: searchProjects(query),
    posts: searchPosts(query),
    pages: sitePages.filter((p: any) =>
      p.title.toLowerCase().includes(lowerQuery) ||
      (p.excerpt && p.excerpt.toLowerCase().includes(lowerQuery))
    ).map((p: any) => ({
      ...p,
      url: getPageUrl(p.slug),
      type: 'page'
    }))
  };
}