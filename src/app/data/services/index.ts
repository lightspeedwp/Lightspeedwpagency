/**
 * Services Index
 * 
 * Centralized export point for all service data.
 * 
 * **Usage:**
 * ```typescript
 * // Detailed service data (for individual service pages)
 * import { securityServiceDetailed } from '../../data/services';
 * 
 * // Summary data (for cards, grids, listings)
 * import { services, featuredServices } from '../../data/services';
 * 
 * // Pricing & timeline data
 * import { servicePricingTimeline } from '../../data/services';
 * 
 * // Simplified data (for overview grids)
 * import { servicesSimplified } from '../../data/services';
 * 
 * // Types
 * import type { Service, DetailedService, ServicePricingDetailed } from '../../data/services';
 * ```
 * 
 * **Organization:**
 * - `types.ts` — All TypeScript interfaces
 * - `summaries.ts` — Service cards/listing data + helpers
 * - `simplified.ts` — Simplified grid display data
 * - `pricing-timeline.ts` — Detailed pricing & timeline
 * - Individual service files — Detailed page content
 * 
 * **Created:** March 2, 2026
 * **Updated:** March 3, 2026 (Task 1.2 — services.ts consolidated)
 * **Optimization:** Memory Optimization Phase 1 — Data File Splitting & Consolidation
 * **Previous:** services-detailed.ts (1,538 lines) + services.ts (1,332 lines) → 20 modular files
 */

// ─── Type Exports ─────────────────────────────────────────────
export type {
  DetailedService,
  ProcessStep,
  SubService,
  Service,
  ServiceCategory,
  ServicePricing,
  ServicePricingDetailed,
  ServiceTimeline,
  SimpleService
} from './types';

// ─── Summary Data (Cards, Grids, Listings) ────────────────────
export {
  services,
  designServices,
  developmentServices,
  strategyServices,
  supportServices,
  featuredServices,
  getServiceById,
  getServiceBySlug,
  getServicesByCategory,
  getServiceCategories,
  getCategoryDisplayName
} from './summaries';

// ─── Simplified Data (Overview Grids) ─────────────────────────
export { servicesSimplified } from './simplified';

// ─── Pricing & Timeline Data ──────────────────────────────────
export { servicePricingTimeline } from './pricing-timeline';

// ─── Detailed Service Data (Individual Service Pages) ─────────
import { securityServiceDetailed } from './security-service';
import { seoServiceDetailed } from './seo-service';
import { performanceServiceDetailed } from './performance-service';
import { contentServiceDetailed } from './content-service';
import { supportServiceDetailed } from './support-service';
import { newsletterServiceDetailed } from './newsletter-service';
import { designServiceDetailed } from './design-service';
import { developmentServiceDetailed } from './development-service';
import { discoveryServiceDetailed } from './discovery-service';
import { accessibilityServiceDetailed } from './accessibility-service';
import { aiEngineOptimisationDetailed } from './ai-engine-service';
import { answerEngineOptimisationDetailed } from './answer-engine-service';
import { trainingServiceDetailed } from './training-service';
import { hostingServiceDetailed } from './hosting-service';

export {
  securityServiceDetailed,
  seoServiceDetailed,
  performanceServiceDetailed,
  contentServiceDetailed,
  supportServiceDetailed,
  newsletterServiceDetailed,
  designServiceDetailed,
  developmentServiceDetailed,
  discoveryServiceDetailed,
  accessibilityServiceDetailed,
  aiEngineOptimisationDetailed,
  answerEngineOptimisationDetailed,
  trainingServiceDetailed,
  hostingServiceDetailed
};

// ─── Aggregated Collections ───────────────────────────────────

/** All detailed service data in a single array */
export const allDetailedServices = [
  securityServiceDetailed,
  seoServiceDetailed,
  performanceServiceDetailed,
  contentServiceDetailed,
  supportServiceDetailed,
  newsletterServiceDetailed,
  designServiceDetailed,
  developmentServiceDetailed,
  discoveryServiceDetailed,
  accessibilityServiceDetailed,
  aiEngineOptimisationDetailed,
  answerEngineOptimisationDetailed,
  trainingServiceDetailed,
  hostingServiceDetailed
];

/**
 * Get detailed service by slug
 * 
 * @param slug - Service slug identifier
 * @returns DetailedService object or undefined
 */
export function getDetailedServiceBySlug(slug: string) {
  return allDetailedServices.find(service => service.slug === slug);
}

/**
 * Get detailed service by ID
 * 
 * @param id - Service ID
 * @returns DetailedService object or undefined
 */
export function getDetailedServiceById(id: string) {
  return allDetailedServices.find(service => service.id === id);
}

/**
 * Legacy export for backward compatibility
 * @deprecated Use `allDetailedServices` instead
 */
export const detailedServices = allDetailedServices;
