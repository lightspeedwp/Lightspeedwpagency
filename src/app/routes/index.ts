/**
 * LSX Design — Route Configuration (Modular)
 * 
 * Modular route architecture with split route groups for improved maintainability.
 * 
 * Route Groups:
 * - Core: Home, About, Services, Systems, Solutions
 * - Content: Work (Portfolio), Insights (Blog)
 * - Media: Videos, Podcasts
 * - Post Formats: Audio, Gallery, Image, Quote, Link, Chat, Status, Standard, Aside
 * - WooCommerce: Shop, Cart, Checkout
 * - Tour Operator: Tours
 * - Testimonials: Archive + Format-specific singles
 * - Utility: Contact, FAQ, Pricing, Search, Legal
 * - Legacy: Archive, Index, Single, etc.
 * - Dev Tools: Developer tools and testing pages
 * 
 * Migration from /src/app/routes.tsx:
 * - Original file: 1,147 lines
 * - New structure: 11 modular files (~100-300 lines each)
 * - Orchestrator file: ~80 lines
 * 
 * @see /prompts/optimization/2026-03-01-file-optimization-and-memory-reduction.md
 * @see /reports/2026-03/stability-audit/full-stability-audit-march-4.md
 */

import { createBrowserRouter, type RouteObject } from 'react-router';
import { RootLayout } from '../components/layouts/RootLayout';
import { Template404 } from '../components/templates/404Template';

/* ═══════════════════════════════════════════
 * Route Module Imports
 * ═══════════════════════════════════════════ */

import { coreRoutes } from './core.routes';
import { contentRoutes } from './content.routes';
import { mediaRoutes } from './media.routes';
import { postFormatRoutes } from './post-formats.routes';
import { testimonialsRoutes } from './testimonials.routes';
import { utilityRoutes } from './utility.routes';
import { legacyRoutes } from './legacy.routes';
import { devToolsRoutes } from './dev-tools.routes';

/* ═══════════════════════════════════════════
 * Route Assembly
 * ═══════════════════════════════════════════ */

const routes: RouteObject[] = [
  {
    path: '/',
    Component: RootLayout,
    children: [
      // Core routes (Home, About, Services, Systems, Solutions)
      ...coreRoutes,

      // Content routes (Work, Insights)
      ...contentRoutes,

      // Post format routes (Audio, Gallery, Image, Quote, Link, Chat, Status, Standard, Aside)
      ...postFormatRoutes,

      // Media routes (Videos, Podcasts)
      ...mediaRoutes,

      // Testimonials routes
      ...testimonialsRoutes,

      // Utility routes (Contact, FAQ, Pricing, Search, Legal)
      ...utilityRoutes,

      // Legacy routes (Archive, Index, Single, etc.)
      ...legacyRoutes,

      // Dev tools routes
      ...devToolsRoutes,

      // 404 Catch-All
      { path: '404', Component: Template404 },
      { path: '*', Component: Template404 },
    ],
  },
];

/* ═══════════════════════════════════════════
 * Router Export
 * ═══════════════════════════════════════════ */

export const router = createBrowserRouter(routes);
