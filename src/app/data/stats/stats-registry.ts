/**
 * Stats Registry — Central Registry with Memoization
 *
 * Single source of truth for all site statistics with memoized helper functions.
 *
 * Features:
 * - Icon string mapping via icon-resolver
 * - Version history tracking
 * - Tooltip/below-stat footnotes
 * - Fixed tag taxonomy
 * - Collection-level color fallbacks
 * - Trend sentiment (positive/negative/neutral)
 * - Multiple collections per category
 * - Memoized helper functions for performance
 *
 * Usage:
 * ```typescript
 * import { statsRegistry } from '@/data/stats/stats-registry';
 *
 * // Get stat by ID
 * const stat = statsRegistry.getStatById('posts-migrated');
 *
 * // Get all migration stats
 * const migrationStats = statsRegistry.getStatsByCategory('migration');
 *
 * // Get stats by tag
 * const scaleStats = statsRegistry.getStatsByTag('scale');
 *
 * // Get collection
 * const collection = statsRegistry.getCollection('migration-stats');
 * ```
 *
 * @see /src/app/data/stats/types.ts
 * @see /prompts/stats-data-structure.md
 */

import { migrationStatsCollection } from './migration-stats';
import { supportStatsCollection } from './support-stats';
import { hostingStatsCollection } from './hosting-stats';
import { designStatsCollection } from './design-stats';
import { developmentStatsCollection } from './development-stats';
import { projectsStatsCollection } from './projects-stats';
import { businessStatsCollection } from './business-stats';
import { aiStatsCollection, seoStatsCollection, performanceStatsCollection } from './ai-stats';

import type {
  StatsRegistry,
  ThemedStat,
  StatCategory,
  StatCollection,
  StatTag,
} from './types';

/**
 * Memoization cache
 * Stores results of expensive lookups for fast repeated access
 */
interface RegistryCache {
  statById: Map<string, ThemedStat>;
  statsByCategory: Map<StatCategory, ThemedStat[]>;
  statsByTag: Map<StatTag, ThemedStat[]>;
  collectionById: Map<string, StatCollection>;
  collectionsByCategory: Map<StatCategory, StatCollection[]>;
}

/**
 * Initialize empty cache
 */
function createEmptyCache(): RegistryCache {
  return {
    statById: new Map(),
    statsByCategory: new Map(),
    statsByTag: new Map(),
    collectionById: new Map(),
    collectionsByCategory: new Map(),
  };
}

/**
 * Cache instance
 */
let cache: RegistryCache = createEmptyCache();

/**
 * Aggregate all collections
 */
const allCollections: StatCollection[] = [
  migrationStatsCollection,
  supportStatsCollection,
  hostingStatsCollection,
  designStatsCollection,
  developmentStatsCollection,
  projectsStatsCollection,
  businessStatsCollection,
  aiStatsCollection,
  seoStatsCollection,
  performanceStatsCollection,
];

/**
 * Build collections map (grouped by category)
 */
const collections: Record<StatCategory, StatCollection[]> = {
  migration: [],
  support: [],
  hosting: [],
  design: [],
  development: [],
  seo: [],
  ai: [],
  performance: [],
  projects: [],
  business: [],
  general: [],
};

// Group collections by category
allCollections.forEach((collection) => {
  collections[collection.category].push(collection);
});

/**
 * Flatten all stats for search
 * Apply collection-level color fallbacks to stats missing colors
 */
const allStats: ThemedStat[] = allCollections.flatMap((collection) => {
  return collection.stats.map((stat) => {
    // Apply collection defaults if stat doesn't define colors
    return {
      ...stat,
      lightColor: stat.lightColor || collection.defaultLightColor,
      darkColor: stat.darkColor || collection.defaultDarkColor,
    };
  });
});

/**
 * Get stat by unique ID (memoized)
 *
 * @param id - Stat ID (e.g., 'posts-migrated')
 * @returns ThemedStat or undefined if not found
 */
function getStatById(id: string): ThemedStat | undefined {
  // Check cache first
  if (cache.statById.has(id)) {
    return cache.statById.get(id);
  }

  // Find stat
  const stat = allStats.find((s) => s.id === id);

  // Cache result
  if (stat) {
    cache.statById.set(id, stat);
  }

  return stat;
}

/**
 * Get all stats in a category (memoized)
 *
 * @param category - StatCategory
 * @returns Array of ThemedStat
 */
function getStatsByCategory(category: StatCategory): ThemedStat[] {
  // Check cache first
  if (cache.statsByCategory.has(category)) {
    return cache.statsByCategory.get(category)!;
  }

  // Filter stats
  const stats = allStats.filter((stat) => stat.category === category);

  // Cache result
  cache.statsByCategory.set(category, stats);

  return stats;
}

/**
 * Get all stats with a specific tag (memoized)
 *
 * @param tag - StatTag
 * @returns Array of ThemedStat
 */
function getStatsByTag(tag: StatTag): ThemedStat[] {
  // Check cache first
  if (cache.statsByTag.has(tag)) {
    return cache.statsByTag.get(tag)!;
  }

  // Filter stats
  const stats = allStats.filter((stat) => stat.tags?.includes(tag));

  // Cache result
  cache.statsByTag.set(tag, stats);

  return stats;
}

/**
 * Get all stats matching ANY of the provided tags
 *
 * @param tags - Array of StatTag
 * @returns Array of ThemedStat (deduplicated)
 */
function getStatsByTags(tags: StatTag[]): ThemedStat[] {
  // Use Set to deduplicate
  const uniqueStats = new Set<ThemedStat>();

  tags.forEach((tag) => {
    const stats = getStatsByTag(tag);
    stats.forEach((stat) => uniqueStats.add(stat));
  });

  return Array.from(uniqueStats);
}

/**
 * Get collection by ID (memoized)
 *
 * @param collectionId - Collection ID (e.g., 'migration-stats')
 * @returns StatCollection or undefined if not found
 */
function getCollection(collectionId: string): StatCollection | undefined {
  // Check cache first
  if (cache.collectionById.has(collectionId)) {
    return cache.collectionById.get(collectionId);
  }

  // Find collection
  const collection = allCollections.find((c) => c.id === collectionId);

  // Cache result
  if (collection) {
    cache.collectionById.set(collectionId, collection);
  }

  return collection;
}

/**
 * Get all collections in a category (memoized)
 *
 * @param category - StatCategory
 * @returns Array of StatCollection
 */
function getCollectionsByCategory(category: StatCategory): StatCollection[] {
  // Check cache first
  if (cache.collectionsByCategory.has(category)) {
    return cache.collectionsByCategory.get(category)!;
  }

  // Get collections
  const categoryCollections = collections[category] || [];

  // Cache result
  cache.collectionsByCategory.set(category, categoryCollections);

  return categoryCollections;
}

/**
 * Clear all caches
 * Call this if stats are updated dynamically
 */
function clearCache(): void {
  cache = createEmptyCache();
}

/**
 * Export stats registry
 */
export const statsRegistry: StatsRegistry = {
  collections,
  allStats,
  getStatById,
  getStatsByCategory,
  getStatsByTag,
  getStatsByTags,
  getCollection,
  getCollectionsByCategory,
  clearCache,
};

/**
 * Export individual collections for direct import
 */
export {
  migrationStatsCollection,
  supportStatsCollection,
  hostingStatsCollection,
  designStatsCollection,
  developmentStatsCollection,
  projectsStatsCollection,
  businessStatsCollection,
  aiStatsCollection,
  seoStatsCollection,
  performanceStatsCollection,
};

/**
 * Export all collections array
 */
export { allCollections };

/**
 * Export total counts for documentation
 */
export const registryStats = {
  totalCollections: allCollections.length,
  totalStats: allStats.length,
  statsByCategory: Object.entries(collections).reduce(
    (acc, [category, colls]) => {
      const count = colls.reduce((sum, coll) => sum + coll.stats.length, 0);
      return { ...acc, [category]: count };
    },
    {} as Record<string, number>
  ),
};