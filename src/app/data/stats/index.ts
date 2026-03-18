/**
 * Stats Registry — Main Export
 *
 * Central export point for all stats-related functionality.
 *
 * Usage:
 * ```typescript
 * // Import registry
 * import { statsRegistry } from '@/data/stats';
 *
 * // Import specific collection
 * import { migrationStatsCollection } from '@/data/stats';
 *
 * // Import mappers
 * import { mapToNeonStats, mapToStatsGridStats } from '@/data/stats';
 *
 * // Import icon resolver
 * import { resolveStatIcon } from '@/data/stats';
 *
 * // Import types
 * import type { ThemedStat, StatCollection } from '@/data/stats';
 * ```
 */

// Registry
export { statsRegistry, registryStats } from './stats-registry';

// Collections
export {
  migrationStatsCollection,
  supportStatsCollection,
  hostingStatsCollection,
  designStatsCollection,
  developmentStatsCollection,
  projectsStatsCollection,
  businessStatsCollection,
  allCollections,
} from './stats-registry';

// Mappers
export {
  mapToNeonStat,
  mapToNeonStats,
  mapToStatsGridStat,
  mapToStatsGridStats,
  getCollectionAccentColor,
  shouldUseNeonStats,
  filterStats,
  sortStats,
} from './stat-mappers';

// Icon resolver
export {
  resolveStatIcon,
  isValidIcon,
  getAvailableIcons,
  resolveMultipleIcons,
} from './icon-resolver';

// Types
export type {
  StatCategory,
  StatTag,
  TrendSentiment,
  TrendDirection,
  Trend,
  StatVersion,
  StatFootnote,
  BaseStat,
  ThemedStat,
  StatCollection,
  StatsRegistry,
  IconResolver,
} from './types';
