/**
 * FAQ Collections — Barrel Re-Export
 * 
 * Central re-export point for all FAQ collections organized by context.
 * Provides a clean import API for templates across the codebase.
 * 
 * **Architecture:**
 * - 14 context-specific files (homepage, services, solutions, about, portfolio, blog, archives, contact, pricing, testimonials, media, woocommerce, technical, utility-pages)
 * - 56 total FAQ collections
 * - Modular organization for maintainability
 * 
 * **Usage:**
 * ```tsx
 * // Import specific collections
 * import { homepageFAQs, servicesFAQs } from '@/app/data/faqs';
 * 
 * // Or import from types
 * import type { FAQ } from '@/app/data/faqs';
 * ```
 * 
 * **Original Files:**
 * - `/src/app/data/faqs.ts` (725 lines) — Converted to compatibility shim
 * - `/src/app/data/faqs-extended.ts` (862 lines) — To be deleted after migration complete
 * 
 * **Migration Status:**
 * - Created: March 5, 2026
 * - Context files: 14/14 complete (100%)
 * - Template migrations: Pending
 * 
 * @see {@link /reports/2026-03/memory-reduction-p2-2-6-remaining-tasks-status.md} - Migration plan
 */

// ============================================
// TYPES
// ============================================

export type { FAQ } from './types';

// ============================================
// HOMEPAGE
// ============================================

export { homepageFAQs } from './homepage';

// ============================================
// SERVICES (9 collections)
// ============================================

export {
  servicesFAQs,
  wordpressDevelopmentFAQs,
  woocommerceServiceFAQs,
  designServiceFAQs,
  contentServiceDetailedFAQs,
  securityServiceFAQs,
  migrationsServiceDetailedFAQs,
  supportServiceFAQs,
  hostingFAQs,
} from './services';

// ============================================
// SOLUTIONS (4 collections)
// ============================================

export {
  lsxDesignFAQs,
  wordpressSolutionFAQs,
  woocommerceSolutionFAQs,
  tourOperatorFAQs,
} from './solutions';

// ============================================
// ABOUT/COMPANY (7 collections)
// ============================================

export {
  aboutFAQs,
  processFAQs,
  cultureFAQs,
  teamFAQs,
  teamPageFAQs,
  whyChooseUsFAQs,
  guaranteesFAQs,
} from './about';

// ============================================
// PORTFOLIO (4 collections)
// ============================================

export {
  portfolioFAQs,
  portfolioCategoryFAQs,
  portfolioArchiveFAQs,
  singlePortfolioFAQs,
} from './portfolio';

// ============================================
// BLOG (6 collections)
// ============================================

export {
  blogFAQs,
  blogCategoryFAQs,
  blogArchiveFAQs,
  singlePostFAQs,
  categoryArchiveFAQs,
  tagArchiveFAQs,
} from './blog';

// ============================================
// ARCHIVES (3 collections)
// ============================================

export {
  authorArchiveFAQs,
  dateArchiveFAQs,
  searchResultsFAQs,
} from './archives';

// ============================================
// CONTACT (2 collections)
// ============================================

export {
  contactFAQs,
  contactPageDetailedFAQs,
} from './contact';

// ============================================
// PRICING (3 collections)
// ============================================

export {
  pricingTimelineFAQs,
  pricingPageFAQs,
  roiCalculatorFAQs,
} from './pricing';

// ============================================
// TESTIMONIALS (2 collections)
// ============================================

export {
  testimonialPageFAQs,
  testimonialsPageFAQs,
} from './testimonials';

// ============================================
// MEDIA (2 collections)
// ============================================

export {
  videoFAQs,
  podcastFAQs,
} from './media';

// ============================================
// WOOCOMMERCE (2 collections)
// ============================================

export {
  woocommerceFAQs,
  woocommerceDetailedFAQs,
} from './woocommerce';

// ============================================
// TECHNICAL (6 collections)
// ============================================

export {
  generalFAQs,
  technicalFAQs,
  wordpressFAQs,
  performanceSEOFAQs,
  maintenanceSupportFAQs,
  designUXFAQs,
} from './technical';

// ============================================
// UTILITY PAGES (4 collections)
// ============================================

export {
  searchFAQs,
  error404FAQs,
  sitemapFAQs,
  faqPageFAQs,
} from './utility-pages';

// ============================================
// COLLECTION SUMMARY
// ============================================

/**
 * FAQ Collection Count: 56 total
 * 
 * **By Context:**
 * - Homepage: 1
 * - Services: 9
 * - Solutions: 4
 * - About/Company: 7
 * - Portfolio: 4
 * - Blog: 6
 * - Archives: 3
 * - Contact: 2
 * - Pricing: 3
 * - Testimonials: 2
 * - Media: 2
 * - WooCommerce: 2
 * - Technical: 6
 * - Utility Pages: 4
 * 
 * **Total Lines Saved:** ~400-500 lines (reduced duplication, improved organization)
 * 
 * **Benefits:**
 * - Modular organization by context
 * - Easy to find and update FAQs
 * - Better maintainability
 * - Reduced code duplication
 * - Clearer ownership of FAQ collections
 */
