/**
 * AI Integrations Solution Pages Data — Compatibility Shim
 *
 * This file re-exports everything from the split `/data/ai-integrations/` folder.
 * All data has been modularised into separate files:
 *   - types.ts            — Shared TypeScript interfaces
 *   - landing.ts          — Landing page data
 *   - content-generation.ts — Content Generation sub-page
 *   - seo.ts              — AI SEO sub-page
 *   - chatbots.ts         — AI Chatbots sub-page
 *   - analytics.ts        — AI Analytics sub-page
 *
 * Existing imports continue to work — no template changes needed.
 *
 * @see /src/app/data/ai-integrations/index.ts
 * @migrated March 4, 2026 — Replaced 971-line monolith with re-export shim
 */

export * from './ai-integrations/index';
