/**
 * Stats Index
 *
 * Centralized export for all statistics and metrics across the LightSpeed site.
 */

// Stats registry
export { statsRegistry } from './stats-registry';
export type { StatsRegistry } from './types';

// Stat mappers
export { 
  mapToNeonStat, 
  mapToNeonStats,
  mapToStatsGridStat,
  mapToStatsGridStats,
  getCollectionAccentColor,
  shouldUseNeonStats
} from './stat-mappers';

// Advanced metrics
export {
  performanceDeltaMetrics,
  enterpriseScaleMetrics,
  seoContinuityMetrics,
  longevityTrustMetrics,
  editorEfficiencyMetrics,
  aggregatedCompanyMetrics,
} from './advanced-metrics';

// Service-specific stats (re-export from parent data directory)
export { hostingServiceStats, hostingCapabilities } from '../hosting-service-stats';
export { projectsServiceStats, projectsOverview } from '../projects-service-stats';
export {
  slaResponseTimes,
  retainerClientStats,
  slaCommitment,
  priorityLevelDefinitions,
} from '../sla-retainer-stats';

// Pattern components for metrics display
export { AggregatedMetricsBanner } from '../../components/patterns/AggregatedMetricsBanner';
export {
  PerformanceDeltaMetrics,
  EnterpriseScaleMetrics,
  SEOContinuityMetrics,
  LongevityTrustMetrics,
  EditorEfficiencyMetrics,
} from '../../components/patterns/AdvancedMetricsShowcase';
export { StatsGrid } from '../../components/patterns/StatsGrid';
export type { Stat, StatsGridProps } from '../../components/patterns/StatsGrid';