/**
 * Service Stats Index
 *
 * Centralized export for all service-specific statistics.
 * Simplifies imports across templates.
 *
 * @example
 * ```tsx
 * import { 
 *   seoServiceResults, 
 *   migrationsServiceStats,
 *   hostingServiceStats 
 * } from '@/app/data/service-stats-index';
 * ```
 */

// SEO Service
export { seoServiceResults } from './seo-service-template-data';

// Analytics Service
export { analyticsServiceResults } from './analytics-service-template-data';

// AI Engine Service
export { aiEngineServiceResults } from './ai-engine-service-template-data';

// Answer Engine Service
export { answerEngineServiceResults } from './answer-engine-service-template-data';

// Development Service
export { developmentServiceOverview } from './development-service-page';

// Design Service
export { designServiceOverview } from './design-service-page';

// Performance Service
export { performanceServiceStats } from './performance-service-page';

// Migrations Service
export { 
  migrationsServiceStats, 
  migrationTypes,
  migrationsServiceResults 
} from './migrations-service-template-data';

// Support Service
export { 
  supportServiceStats, 
  supportVolumeNote,
  supportServiceResults 
} from './support-service-template-data';

// Hosting Service
export { 
  hostingServiceStats, 
  hostingCapabilities 
} from './hosting-service-stats';

// Projects Service
export { 
  projectsServiceStats, 
  projectsOverview 
} from './projects-service-stats';

// SLA & Retainers
export { 
  slaResponseTimes, 
  retainerClientStats, 
  slaCommitment, 
  priorityLevelDefinitions 
} from './sla-retainer-stats';

// AI Integrations
export { aiContentStats } from './ai-integrations/content-generation';
export { aiSEOStats } from './ai-integrations/seo';
export { aiChatbotsStats } from './ai-integrations/chatbots';
export { aiAnalyticsStats } from './ai-integrations/analytics';
