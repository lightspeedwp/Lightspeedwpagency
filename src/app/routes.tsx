/**
 * LSX Design — Route Configuration (Compatibility Shim)
 * 
 * This file has been migrated to a modular route structure.
 * All route definitions are now in `/src/app/routes/` directory.
 * 
 * This file remains as a compatibility shim for existing imports.
 * 
 * Migration Information:
 * - Original file size: 1,147 lines
 * - New structure: 11 modular files in `/src/app/routes/`
 * - Reduction: ~90% (1,147 lines → ~80 lines orchestrator)
 * 
 * Route Groups (see /src/app/routes/):
 * - core.routes.ts — Home, About, Services, Systems, Solutions
 * - content.routes.ts — Work (Portfolio), Insights (Blog)
 * - media.routes.ts — Videos, Podcasts
 * - post-formats.routes.ts — Post format archives/singles
 * - testimonials.routes.ts — Testimonials
 * - utility.routes.ts — Contact, FAQ, Pricing, Search, Legal
 * - legacy.routes.ts — Archive, Index, Single, etc.
 * - dev-tools.routes.ts — Developer tools
 * - index.ts — Main orchestrator
 * 
 * @see /src/app/routes/index.ts — New main entry point
 * @see /prompts/optimization/2026-03-01-file-optimization-and-memory-reduction.md
 * @see /tasks/stability-audit-tasks.md — Task P2.2 (Priority 2)
 */

export { router } from './routes/index';
