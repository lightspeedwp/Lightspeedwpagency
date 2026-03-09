/**
 * AI Integrations — Barrel Re-export
 *
 * Re-exports all types and data from the ai-integrations folder.
 * Existing imports from `../../data/ai-integrations-page` continue
 * to work via the compatibility shim at `/src/app/data/ai-integrations-page.ts`.
 *
 * @see /src/app/data/ai-integrations/types.ts
 * @see /src/app/data/ai-integrations/landing.ts
 * @see /src/app/data/ai-integrations/content-generation.ts
 * @see /src/app/data/ai-integrations/seo.ts
 * @see /src/app/data/ai-integrations/chatbots.ts
 * @see /src/app/data/ai-integrations/analytics.ts
 */

/* ── Types ── */
export type {
  AIHero,
  AIStat,
  AIFeature,
  AIUseCase,
  AIPricingPackage,
  AIFAQ,
  AICTA,
  AISubPageCard,
} from './types';

/* ── Landing page ── */
export {
  aiLandingHero,
  aiLandingStats,
  aiLandingFeatures,
  aiSubPages,
  aiLandingFAQs,
  aiLandingCTA,
} from './landing';

/* ── Content Generation ── */
export {
  aiContentHero,
  aiContentStats,
  aiContentFeatures,
  aiContentUseCases,
  aiContentPricing,
  aiContentFAQs,
  aiContentCTA,
} from './content-generation';

/* ── SEO ── */
export {
  aiSEOHero,
  aiSEOStats,
  aiSEOFeatures,
  aiSEOUseCases,
  aiSEOPricing,
  aiSEOFAQs,
  aiSEOCTA,
} from './seo';

/* ── Chatbots ── */
export {
  aiChatbotsHero,
  aiChatbotsStats,
  aiChatbotsFeatures,
  aiChatbotsUseCases,
  aiChatbotsPricing,
  aiChatbotsFAQs,
  aiChatbotsCTA,
} from './chatbots';

/* ── Analytics ── */
export {
  aiAnalyticsHero,
  aiAnalyticsStats,
  aiAnalyticsFeatures,
  aiAnalyticsUseCases,
  aiAnalyticsPricing,
  aiAnalyticsFAQs,
  aiAnalyticsCTA,
} from './analytics';
