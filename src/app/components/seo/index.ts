/**
 * SEO & Marketing Components
 * 
 * Complete SEO and marketing component library for the LSX Design system.
 * All components use CSS variables and support light/dark themes.
 * 
 * **Components:**
 * - Schema Markup - Structured data for search engines
 * - Meta Tags - Page-level SEO optimization
 * - Trust Badges - Payment, security, certification badges
 * - Social Proof - Live visitors, reviews, stats
 * - Review Snippets - Customer review displays
 * 
 * **Design System:**
 * - All components use CSS variables
 * - Fonts: Lexend (UI), Manrope (body)
 * - Light/dark theme support
 * - WCAG 2.1 AA compliant
 * 
 * **WordPress Integration:**
 * - Schema markup via wp_head hooks
 * - Meta tags via Yoast SEO / Rank Math
 * - Reviews as custom post type
 * - Trust badges via theme customizer
 * 
 * @see /guidelines/components/seo/
 */

// ============================================================================
// SCHEMA MARKUP COMPONENTS
// ============================================================================
export {
  OrganizationSchema,
  LocalBusinessSchema,
  ProductSchema,
  ArticleSchema,
  ReviewSchema,
  FAQSchema,
  PersonSchema,
} from './SchemaMarkup';

// ============================================================================
// META TAGS COMPONENTS
// ============================================================================
export {
  MetaTags,
  HomepageMetaTags,
  BlogPostMetaTags,
  ProductMetaTags,
} from './MetaTags';

// ============================================================================
// TRUST BADGES COMPONENTS
// ============================================================================
export {
  TrustBadges,
  PaymentMethodBadges,
  SecurityBadges,
  CertificationBadges,
  PartnerBadges,
  TrustBadgeBar,
  MiniTrustBadge,
} from './TrustBadges';

// ============================================================================
// SOCIAL PROOF COMPONENTS
// ============================================================================
export {
  LiveVisitorCount,
  RecentActivityNotification,
  CustomerStats,
  ReviewStars,
  VerifiedBadge,
  SocialFollowerCount,
  ActivityFeed,
} from './SocialProof';

// ============================================================================
// REVIEW SNIPPET COMPONENTS
// ============================================================================
export {
  ReviewSnippet,
  ReviewGrid,
  AggregateRating,
} from './ReviewSnippet';

// Export types
export type { Review } from './ReviewSnippet';
