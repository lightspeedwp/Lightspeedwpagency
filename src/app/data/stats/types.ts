/**
 * Stats Registry — TypeScript Type Definitions
 *
 * Central type system for all site statistics with support for:
 * - Icon string mapping to Phosphor components
 * - Version history tracking
 * - Tooltip/below-stat footnotes
 * - Fixed tag taxonomy
 * - Collection-level color fallbacks
 * - Trend sentiment (positive/negative/neutral)
 * - Multiple collections per category
 * - Memoized helper functions
 *
 * @see /src/app/data/stats/stats-registry.ts
 */

import type { Icon } from '@phosphor-icons/react';

/**
 * Stat category enum
 * Fixed set of categories for consistent organization
 */
export type StatCategory =
  | 'migration'
  | 'support'
  | 'hosting'
  | 'design'
  | 'development'
  | 'seo'
  | 'ai'
  | 'performance'
  | 'projects'
  | 'business'
  | 'general';

/**
 * Fixed tag taxonomy
 * Predefined set of allowed tags for filtering
 */
export type StatTag =
  // General
  | 'scale'
  | 'quality'
  | 'speed'
  | 'expertise'
  | 'service'
  | 'enterprise'
  // Migration-specific
  | 'migration'
  | 'content'
  | 'data-integrity'
  // Support-specific
  | 'support'
  | 'sla'
  | 'tickets'
  // Hosting-specific
  | 'hosting'
  | 'infrastructure'
  | 'deployment'
  | 'uptime'
  // Design-specific
  | 'design'
  | 'systems'
  | 'components'
  | 'tokens'
  | 'prototyping'
  | 'investment'
  // Development-specific
  | 'development'
  | 'plugins'
  | 'themes'
  | 'integrations'
  | 'payments'
  | 'open-source'
  // SEO-specific
  | 'seo'
  | 'traffic'
  | 'rankings'
  | 'visibility'
  // AI-specific
  | 'ai'
  | 'automation'
  | 'chatbots'
  | 'analytics'
  | 'citations'
  // Performance-specific
  | 'performance'
  | 'core-web-vitals'
  | 'optimization'
  // Business-specific
  | 'clients'
  | 'management'
  | 'retainers'
  // Projects-specific
  | 'projects'
  | 'websites'
  | 'active';

/**
 * Trend sentiment
 * Separates direction from quality (down can be good for costs, bad for errors)
 */
export type TrendSentiment = 'positive' | 'negative' | 'neutral';

/**
 * Trend direction
 */
export type TrendDirection = 'up' | 'down' | 'neutral';

/**
 * Trend indicator
 * Includes both direction and sentiment
 */
export interface Trend {
  /** Display value (e.g., "+32%", "-15%", "Stable") */
  value: string;
  /** Visual direction indicator */
  direction: TrendDirection;
  /** Semantic meaning (positive = good, negative = bad, neutral = informational) */
  sentiment: TrendSentiment;
}

/**
 * Stat version history entry
 */
export interface StatVersion {
  /** ISO 8601 date when this value was recorded */
  date: string;
  /** Value at this point in time */
  value: string;
  /** Optional note about why the value changed */
  note?: string;
}

/**
 * Footnote configuration
 * Can be displayed as tooltip or below stat
 */
export interface StatFootnote {
  /** Footnote text */
  text: string;
  /** Display mode */
  displayMode: 'tooltip' | 'below';
}

/**
 * Base stat item
 * Core properties shared by all stats
 */
export interface BaseStat {
  /** Unique identifier (kebab-case) */
  id: string;

  /** Display value (e.g., "150+", "98.5%", "10x", "<2s") */
  value: string;

  /** Primary label/title (sentence case) */
  label: string;

  /** Optional description/context (2-3 sentences max) */
  description?: string;

  /** Optional Phosphor icon name (string, not component) */
  icon?: string; // e.g., 'Rocket', 'Users', 'CheckCircle'

  /** Optional trend indicator */
  trend?: Trend;

  /** Optional footnote (for clarifications, disclaimers) */
  footnote?: StatFootnote;

  /** Optional last updated date (ISO 8601 format: "2026-03-17") */
  lastUpdated?: string;

  /** Optional version history */
  versionHistory?: StatVersion[];
}

/**
 * Extended stat with theming
 * Used by registry to define per-stat color overrides
 */
export interface ThemedStat extends BaseStat {
  /** Category (for grouping and filtering) */
  category: StatCategory;

  /** Light mode accent color (CSS variable or hex) */
  lightColor?: string;

  /** Dark mode accent color (CSS variable or hex) */
  darkColor?: string;

  /** Whether this stat requires dark background (neon colors) */
  requiresDarkBg?: boolean;

  /** Metadata tags (from fixed taxonomy) */
  tags?: StatTag[];
}

/**
 * Stat collection with metadata
 * Groups related stats with shared theming
 */
export interface StatCollection {
  /** Collection ID (kebab-case) */
  id: string;

  /** Collection title (for documentation) */
  title: string;

  /** Category */
  category: StatCategory;

  /** Stats array */
  stats: ThemedStat[];

  /** Default accent color for this collection (light mode) */
  defaultLightColor?: string;

  /** Default accent color for this collection (dark mode) */
  defaultDarkColor?: string;

  /** Whether this collection should use NeonStats (dark mode only) */
  useNeonComponent?: boolean;

  /** Optional collection description */
  description?: string;

  /** Optional collection icon */
  icon?: string;
}

/**
 * Stats registry interface
 * Central registry of all site stats with memoized helpers
 */
export interface StatsRegistry {
  /** All stat collections indexed by category */
  collections: Record<StatCategory, StatCollection[]>;

  /** Flat array of all stats (for search/filter) */
  allStats: ThemedStat[];

  /** Memoized helper methods */
  getStatById: (id: string) => ThemedStat | undefined;
  getStatsByCategory: (category: StatCategory) => ThemedStat[];
  getStatsByTag: (tag: StatTag) => ThemedStat[];
  getStatsByTags: (tags: StatTag[]) => ThemedStat[];
  getCollection: (collectionId: string) => StatCollection | undefined;
  getCollectionsByCategory: (category: StatCategory) => StatCollection[];

  /** Cache management */
  clearCache: () => void;
}

/**
 * Icon resolver function type
 * Maps icon string to Phosphor Icon component
 */
export type IconResolver = (iconName?: string) => Icon | undefined;
