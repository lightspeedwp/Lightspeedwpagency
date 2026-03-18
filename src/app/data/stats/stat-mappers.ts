/**
 * Stats Mappers — Component Data Mappers
 *
 * Helper utilities to map ThemedStat data from the registry to
 * component-specific formats (NeonStats, StatsGrid, etc.)
 *
 * Features:
 * - Icon string to component resolution
 * - ThemedStat to NeonStat mapping
 * - ThemedStat to StatsGrid Stat mapping
 * - Automatic color theming based on mode
 *
 * @see /src/app/data/stats/stats-registry.ts
 * @see /src/app/components/common/NeonStats.tsx
 */

import { resolveStatIcon } from './icon-resolver';
import type { ThemedStat, StatCollection } from './types';
import type { NeonStat } from '../../components/common/NeonStats';

/**
 * Map ThemedStat to NeonStat format
 *
 * @param stat - ThemedStat from registry
 * @returns NeonStat for NeonStats component
 *
 * @example
 * ```typescript
 * import { statsRegistry } from '@/data/stats/stats-registry';
 * import { mapToNeonStat } from '@/data/stats/stat-mappers';
 *
 * const stat = statsRegistry.getStatById('posts-migrated');
 * const neonStat = mapToNeonStat(stat);
 * ```
 */
export function mapToNeonStat(stat: ThemedStat): NeonStat {
  const icon = resolveStatIcon(stat.icon);

  return {
    id: stat.id,
    value: stat.value,
    label: stat.label,
    description: stat.description,
    icon,
    trend: stat.trend,
  };
}

/**
 * Map array of ThemedStats to NeonStats format
 *
 * @param stats - Array of ThemedStat
 * @returns Array of NeonStat
 *
 * @example
 * ```typescript
 * import { statsRegistry } from '@/data/stats/stats-registry';
 * import { mapToNeonStats } from '@/data/stats/stat-mappers';
 *
 * const migrationStats = statsRegistry.getStatsByCategory('migration');
 * const neonStats = mapToNeonStats(migrationStats);
 * ```
 */
export function mapToNeonStats(stats: ThemedStat[]): NeonStat[] {
  return stats.map(mapToNeonStat);
}

/**
 * Map ThemedStat to StatsGrid Stat format
 *
 * @param stat - ThemedStat from registry
 * @returns Stat object for StatsGrid component
 *
 * @example
 * ```typescript
 * import { statsRegistry } from '@/data/stats/stats-registry';
 * import { mapToStatsGridStat } from '@/data/stats/stat-mappers';
 *
 * const stat = statsRegistry.getStatById('posts-migrated');
 * const gridStat = mapToStatsGridStat(stat);
 * ```
 */
export function mapToStatsGridStat(stat: ThemedStat) {
  const icon = resolveStatIcon(stat.icon);

  return {
    metric: stat.value,
    label: stat.label,
    description: stat.description,
    icon,
  };
}

/**
 * Map array of ThemedStats to StatsGrid format
 *
 * @param stats - Array of ThemedStat
 * @returns Array of Stat for StatsGrid
 *
 * @example
 * ```typescript
 * import { statsRegistry } from '@/data/stats/stats-registry';
 * import { mapToStatsGridStats } from '@/data/stats/stat-mappers';
 *
 * const supportStats = statsRegistry.getStatsByCategory('support');
 * const gridStats = mapToStatsGridStats(supportStats);
 * ```
 */
export function mapToStatsGridStats(stats: ThemedStat[]) {
  return stats.map(mapToStatsGridStat);
}

/**
 * Get accent color from collection based on current theme
 *
 * @param collection - StatCollection
 * @param isDarkMode - Whether dark mode is active
 * @returns CSS variable or hex color
 *
 * @example
 * ```typescript
 * import { statsRegistry } from '@/data/stats/stats-registry';
 * import { getCollectionAccentColor } from '@/data/stats/stat-mappers';
 *
 * const collection = statsRegistry.getCollection('migration-stats');
 * const isDark = document.documentElement.classList.contains('dark');
 * const accentColor = getCollectionAccentColor(collection, isDark);
 * ```
 */
export function getCollectionAccentColor(
  collection: StatCollection | undefined,
  isDarkMode: boolean
): string {
  if (!collection) {
    // Fallback to default neon-cyan
    return isDarkMode
      ? 'var(--wp--preset--color--neon-cyan)'
      : 'var(--category-blue)';
  }

  return isDarkMode
    ? collection.defaultDarkColor || 'var(--wp--preset--color--neon-cyan)'
    : collection.defaultLightColor || 'var(--category-blue)';
}

/**
 * Check if collection should use NeonStats component
 *
 * @param collection - StatCollection
 * @param isDarkMode - Whether dark mode is active
 * @returns true if should use NeonStats, false for StatsGrid
 *
 * @example
 * ```typescript
 * import { statsRegistry } from '@/data/stats/stats-registry';
 * import { shouldUseNeonStats } from '@/data/stats/stat-mappers';
 *
 * const collection = statsRegistry.getCollection('migration-stats');
 * const isDark = document.documentElement.classList.contains('dark');
 *
 * if (shouldUseNeonStats(collection, isDark)) {
 *   // Render NeonStats
 * } else {
 *   // Render StatsGrid
 * }
 * ```
 */
export function shouldUseNeonStats(
  collection: StatCollection | undefined,
  isDarkMode: boolean
): boolean {
  if (!collection) return false;

  // Only use NeonStats if:
  // 1. Dark mode is active, AND
  // 2. Collection specifies useNeonComponent, AND
  // 3. Stats have requiresDarkBg flag
  return (
    isDarkMode &&
    collection.useNeonComponent === true &&
    collection.stats.some((stat) => stat.requiresDarkBg === true)
  );
}

/**
 * Filter stats by multiple criteria
 *
 * @param stats - Array of ThemedStat
 * @param options - Filter options
 * @returns Filtered array of ThemedStat
 *
 * @example
 * ```typescript
 * import { statsRegistry } from '@/data/stats/stats-registry';
 * import { filterStats } from '@/data/stats/stat-mappers';
 *
 * const allStats = statsRegistry.allStats;
 * const filtered = filterStats(allStats, {
 *   categories: ['migration', 'hosting'],
 *   tags: ['scale'],
 *   requiresDarkBg: true,
 * });
 * ```
 */
export function filterStats(
  stats: ThemedStat[],
  options: {
    categories?: string[];
    tags?: string[];
    requiresDarkBg?: boolean;
    hasVersionHistory?: boolean;
  }
): ThemedStat[] {
  let filtered = stats;

  // Filter by categories
  if (options.categories && options.categories.length > 0) {
    filtered = filtered.filter((stat) =>
      options.categories!.includes(stat.category)
    );
  }

  // Filter by tags
  if (options.tags && options.tags.length > 0) {
    filtered = filtered.filter((stat) =>
      stat.tags?.some((tag) => options.tags!.includes(tag))
    );
  }

  // Filter by requiresDarkBg
  if (options.requiresDarkBg !== undefined) {
    filtered = filtered.filter(
      (stat) => stat.requiresDarkBg === options.requiresDarkBg
    );
  }

  // Filter by hasVersionHistory
  if (options.hasVersionHistory !== undefined) {
    filtered = filtered.filter(
      (stat) =>
        (stat.versionHistory && stat.versionHistory.length > 0) ===
        options.hasVersionHistory
    );
  }

  return filtered;
}

/**
 * Sort stats by various criteria
 *
 * @param stats - Array of ThemedStat
 * @param sortBy - Sort criteria
 * @returns Sorted array of ThemedStat
 *
 * @example
 * ```typescript
 * import { statsRegistry } from '@/data/stats/stats-registry';
 * import { sortStats } from '@/data/stats/stat-mappers';
 *
 * const migrationStats = statsRegistry.getStatsByCategory('migration');
 * const sorted = sortStats(migrationStats, 'label-asc');
 * ```
 */
export function sortStats(
  stats: ThemedStat[],
  sortBy:
    | 'label-asc'
    | 'label-desc'
    | 'updated-newest'
    | 'updated-oldest'
    | 'id-asc'
    | 'id-desc'
): ThemedStat[] {
  const sorted = [...stats];

  switch (sortBy) {
    case 'label-asc':
      return sorted.sort((a, b) => a.label.localeCompare(b.label));

    case 'label-desc':
      return sorted.sort((a, b) => b.label.localeCompare(a.label));

    case 'updated-newest':
      return sorted.sort((a, b) => {
        if (!a.lastUpdated && !b.lastUpdated) return 0;
        if (!a.lastUpdated) return 1;
        if (!b.lastUpdated) return -1;
        return b.lastUpdated.localeCompare(a.lastUpdated);
      });

    case 'updated-oldest':
      return sorted.sort((a, b) => {
        if (!a.lastUpdated && !b.lastUpdated) return 0;
        if (!a.lastUpdated) return -1;
        if (!b.lastUpdated) return 1;
        return a.lastUpdated.localeCompare(b.lastUpdated);
      });

    case 'id-asc':
      return sorted.sort((a, b) => a.id.localeCompare(b.id));

    case 'id-desc':
      return sorted.sort((a, b) => b.id.localeCompare(a.id));

    default:
      return sorted;
  }
}
