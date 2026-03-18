# Stats data structure — comprehensive implementation prompt

**Category:** Core  
**Version:** 1.0.0  
**Created:** 2026-03-17  
**Status:** Active  
**Template Used:** Scaffold

---

## Purpose

Create a centralized, dynamic stats data structure to power all statistical displays across the LightSpeed WordPress site. This prompt defines the data architecture, React component specifications, design brief, and integration strategy for a unified stats system that supports light/dark modes, customizable neon accents, and flexible field allocation.

---

## Executive summary

**Problem:** Stats are currently scattered across 15+ data files with inconsistent structures, no centralized management, and limited theming capabilities.

**Solution:** Create `/src/app/data/stats/stats-registry.ts` as the single source of truth for all site statistics, with a type-safe registry system, category-based organization, and automatic color theming per page context.

**Impact:**
- **DRY compliance:** One stat definition, used everywhere
- **Type safety:** TypeScript interfaces prevent errors
- **Theme flexibility:** Per-stat color overrides for light/dark modes
- **Maintainability:** Update once, reflect across all 172+ routes
- **Consistency:** Uniform formatting, icons, and presentation

---

## Design brief

### Visual design requirements

#### Neon color system (dark mode)
- All neon accent colors (`neon-cyan`, `neon-pink`, `neon-lime`, `neon-yellow`) **must appear on dark backgrounds** (`var(--color-black)`)
- Stats using neon accents require automatic dark surface enforcement
- Glassmorphism variant recommended for neon-accented stats

#### Light mode
- Stats use semantic color tokens: `var(--primary)`, `var(--secondary)`, `var(--accent)`
- Background: `var(--background)` or `var(--card)`
- No neon colors in light mode (insufficient contrast)

#### Typography
- **Values:** `var(--font-primary)` (Lexend), `var(--text-5xl)` / `var(--text-6xl)`, `var(--font-weight-black)`
- **Labels:** `var(--font-primary)` (Lexend), `var(--text-base)`, `var(--font-weight-semibold)`, uppercase, `var(--letter-spacing-wider)`
- **Descriptions:** `var(--font-secondary)` (Manrope), `var(--text-sm)`, `var(--line-height-normal)`

#### Spacing & layout
- All spacing: `var(--spacing-*)` tokens exclusively
- Grid gaps: `var(--spacing-8)` (default)
- Item padding: `var(--spacing-8)` (glass/solid variants)
- Container padding: `var(--spacing-6)` (mobile), `var(--spacing-8)` (desktop)

#### Component hierarchy
1. **NeonStats** — Neon-accented stats for dark mode (new, from NeonStats.tsx)
2. **StatsGrid** — Traditional stats grid (existing, theme-agnostic)
3. **StatsSection** — Full-width section wrapper (existing, pattern-level)
4. **StatsCard** — Individual stat card block (existing, block-level)

---

## Data structure specification

### File location

**Primary registry:**
```
/src/app/data/stats/stats-registry.ts
```

**Category-specific extensions:**
```
/src/app/data/stats/migration-stats.ts
/src/app/data/stats/support-stats.ts
/src/app/data/stats/hosting-stats.ts
/src/app/data/stats/design-stats.ts
/src/app/data/stats/development-stats.ts
/src/app/data/stats/seo-stats.ts
/src/app/data/stats/ai-stats.ts
/src/app/data/stats/performance-stats.ts
```

### Core TypeScript interfaces

```typescript
/**
 * Base stat item
 * Supports both NeonStats and StatsGrid components
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
  trend?: {
    value: string; // e.g., "+32%", "-15%", "Stable"
    direction: 'up' | 'down' | 'neutral';
  };
  
  /** Optional footnote (for clarifications, disclaimers) */
  footnote?: string;
  
  /** Optional last updated date (for time-sensitive metrics) */
  lastUpdated?: string; // ISO 8601 format: "2026-03-17"
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
  
  /** Optional metadata tags (for filtering) */
  tags?: string[];
}

/**
 * Stat category enum
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
 * Stat collection with metadata
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
}

/**
 * Stats registry
 * Central registry of all site stats
 */
export interface StatsRegistry {
  /** All stat collections indexed by category */
  collections: Record<StatCategory, StatCollection[]>;
  
  /** Flat array of all stats (for search/filter) */
  allStats: ThemedStat[];
  
  /** Helper methods */
  getStatById: (id: string) => ThemedStat | undefined;
  getStatsByCategory: (category: StatCategory) => ThemedStat[];
  getStatsByTag: (tag: string) => ThemedStat[];
  getCollection: (collectionId: string) => StatCollection | undefined;
}
```

### Example implementation

```typescript
// /src/app/data/stats/migration-stats.ts

import type { StatCollection } from './stats-registry';

export const migrationStatsCollection: StatCollection = {
  id: 'migration-stats',
  title: 'Migration statistics',
  category: 'migration',
  defaultLightColor: 'var(--category-blue)',
  defaultDarkColor: 'var(--wp--preset--color--neon-cyan)',
  useNeonComponent: true, // Use NeonStats for dark mode
  stats: [
    {
      id: 'posts-migrated',
      value: '220k+',
      label: 'Posts migrated',
      description: 'Successfully migrated across 250+ client sites including 120k from Novus Media and 100k from Alpha Media Holdings.',
      icon: 'Database',
      category: 'migration',
      darkColor: 'var(--wp--preset--color--neon-cyan)',
      requiresDarkBg: true,
      tags: ['migration', 'content', 'scale'],
      lastUpdated: '2026-03-17',
    },
    {
      id: 'sites-migrated',
      value: '250+',
      label: 'Sites migrated',
      description: 'Production sites successfully migrated and now hosted on LightSpeed infrastructure.',
      icon: 'Globe',
      category: 'migration',
      darkColor: 'var(--wp--preset--color--neon-cyan)',
      requiresDarkBg: true,
      tags: ['migration', 'hosting', 'scale'],
      trend: {
        value: '+15 this year',
        direction: 'up',
      },
    },
    {
      id: 'migration-types',
      value: '6+',
      label: 'Migration types',
      description: 'Custom CMS → WP, Drupal → WP, Joomla → WP, TYPO3 → WP, XML dump → WP, SQL dump → WP.',
      icon: 'ArrowsClockwise',
      category: 'migration',
      darkColor: 'var(--wp--preset--color--neon-cyan)',
      requiresDarkBg: true,
      tags: ['migration', 'expertise'],
    },
    {
      id: 'zero-data-loss',
      value: '100%',
      label: 'Data integrity',
      description: 'Zero metadata loss across all enterprise migrations.',
      icon: 'ShieldCheck',
      category: 'migration',
      darkColor: 'var(--wp--preset--color--neon-cyan)',
      requiresDarkBg: true,
      tags: ['migration', 'quality', 'enterprise'],
      trend: {
        value: 'Perfect record',
        direction: 'neutral',
      },
    },
  ],
};
```

### Registry implementation

```typescript
// /src/app/data/stats/stats-registry.ts

import { migrationStatsCollection } from './migration-stats';
import { supportStatsCollection } from './support-stats';
import { hostingStatsCollection } from './hosting-stats';
import { designStatsCollection } from './design-stats';
import { developmentStatsCollection } from './development-stats';
import { seoStatsCollection } from './seo-stats';
import { aiStatsCollection } from './ai-stats';
import { performanceStatsCollection } from './performance-stats';

import type { StatsRegistry, ThemedStat, StatCategory, StatCollection } from './types';

// Aggregate all collections
const allCollections: StatCollection[] = [
  migrationStatsCollection,
  supportStatsCollection,
  hostingStatsCollection,
  designStatsCollection,
  developmentStatsCollection,
  seoStatsCollection,
  aiStatsCollection,
  performanceStatsCollection,
];

// Build registry
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

// Flatten all stats for search
const allStats: ThemedStat[] = allCollections.flatMap((c) => c.stats);

// Helper functions
const getStatById = (id: string): ThemedStat | undefined => {
  return allStats.find((stat) => stat.id === id);
};

const getStatsByCategory = (category: StatCategory): ThemedStat[] => {
  return allStats.filter((stat) => stat.category === category);
};

const getStatsByTag = (tag: string): ThemedStat[] => {
  return allStats.filter((stat) => stat.tags?.includes(tag));
};

const getCollection = (collectionId: string): StatCollection | undefined => {
  return allCollections.find((c) => c.id === collectionId);
};

// Export registry
export const statsRegistry: StatsRegistry = {
  collections,
  allStats,
  getStatById,
  getStatsByCategory,
  getStatsByTag,
  getCollection,
};

// Export helper for component usage
export { migrationStatsCollection, supportStatsCollection, /* ... */ };
```

---

## React component specifications

### 1. NeonStats component (existing)

**File:** `/src/app/components/common/NeonStats.tsx`

**Use case:** Stats with neon accents on dark backgrounds

**Props:**
```typescript
interface NeonStatsProps {
  stats: NeonStat[]; // Array of stat items
  title?: string; // Optional section title
  subtitle?: string; // Optional section subtitle
  columns?: 1 | 2 | 3 | 4; // Grid columns (default: 4)
  accentColor?: string; // Neon accent color (CSS var or hex)
  className?: string; // Additional CSS class
  showIcons?: boolean; // Show/hide icons (default: true)
  variant?: 'default' | 'glass' | 'solid'; // Visual variant
}
```

**Data mapping:**
```typescript
import { statsRegistry } from '@/data/stats/stats-registry';
import { NeonStats } from '@/components/common/NeonStats';
import * as PhosphorIcons from '@phosphor-icons/react';

// Get migration stats from registry
const migrationStats = statsRegistry.getStatsByCategory('migration');

// Map to NeonStats format
const neonStatsData = migrationStats.map((stat) => ({
  id: stat.id,
  value: stat.value,
  label: stat.label,
  description: stat.description,
  icon: PhosphorIcons[stat.icon as keyof typeof PhosphorIcons],
  trend: stat.trend,
}));

// Render
<NeonStats
  stats={neonStatsData}
  title="Migration at scale"
  subtitle="Real numbers from 15+ years of enterprise WordPress migrations."
  columns={4}
  accentColor="var(--wp--preset--color--neon-cyan)"
  variant="glass"
/>
```

### 2. StatsGrid component (existing)

**File:** `/src/app/components/patterns/StatsGrid.tsx`

**Use case:** Traditional stats grid (light/dark theme-agnostic)

**Props:**
```typescript
interface StatsGridProps {
  stats: Stat[]; // Array of stat items
  columns?: number; // Grid columns (default: 4)
  className?: string; // Additional CSS class
}

interface Stat {
  metric: string; // Display value
  label: string; // Label
  description?: string; // Optional description
  icon?: React.ComponentType; // Optional icon
}
```

**Data mapping:**
```typescript
import { statsRegistry } from '@/data/stats/stats-registry';
import { StatsGrid } from '@/components/patterns/StatsGrid';

// Get support stats from registry
const supportStats = statsRegistry.getStatsByCategory('support');

// Map to StatsGrid format
const statsGridData = supportStats.map((stat) => ({
  metric: stat.value,
  label: stat.label,
  description: stat.description,
  icon: PhosphorIcons[stat.icon as keyof typeof PhosphorIcons],
}));

// Render
<StatsGrid stats={statsGridData} columns={4} />
```

### 3. Auto-selecting wrapper (new)

**File:** `/src/app/components/common/AdaptiveStats.tsx`

Automatically selects NeonStats or StatsGrid based on theme and stat properties.

```typescript
import { useTheme } from '@/hooks/useTheme';
import { NeonStats } from './NeonStats';
import { StatsGrid } from '../patterns/StatsGrid';
import type { StatCollection } from '@/data/stats/stats-registry';

interface AdaptiveStatsProps {
  collection: StatCollection;
  columns?: 1 | 2 | 3 | 4;
  title?: string;
  subtitle?: string;
}

export function AdaptiveStats({
  collection,
  columns = 4,
  title,
  subtitle,
}: AdaptiveStatsProps) {
  const { theme } = useTheme(); // 'light' or 'dark'
  
  // Use NeonStats if:
  // 1. Dark mode is active, AND
  // 2. Collection specifies useNeonComponent, AND
  // 3. Stats have requiresDarkBg flag
  const useNeon = 
    theme === 'dark' && 
    collection.useNeonComponent &&
    collection.stats.some(s => s.requiresDarkBg);
  
  if (useNeon) {
    // Map to NeonStats format
    const neonData = collection.stats.map((stat) => ({
      id: stat.id,
      value: stat.value,
      label: stat.label,
      description: stat.description,
      icon: PhosphorIcons[stat.icon as keyof typeof PhosphorIcons],
      trend: stat.trend,
    }));
    
    return (
      <NeonStats
        stats={neonData}
        title={title}
        subtitle={subtitle}
        columns={columns}
        accentColor={collection.defaultDarkColor}
        variant="glass"
      />
    );
  }
  
  // Otherwise, use traditional StatsGrid
  const gridData = collection.stats.map((stat) => ({
    metric: stat.value,
    label: stat.label,
    description: stat.description,
    icon: PhosphorIcons[stat.icon as keyof typeof PhosphorIcons],
  }));
  
  return <StatsGrid stats={gridData} columns={columns} />;
}
```

---

## Stats content mapping

### Migration stats (from new-stats-integration.md)

```typescript
// /src/app/data/stats/migration-stats.ts

export const migrationStatsCollection: StatCollection = {
  id: 'migration-stats',
  title: 'Migration statistics',
  category: 'migration',
  defaultDarkColor: 'var(--wp--preset--color--neon-cyan)',
  useNeonComponent: true,
  stats: [
    {
      id: 'posts-migrated',
      value: '220k+',
      label: 'Posts migrated',
      description: 'Including 120k from Novus Media and 100k from Alpha Media Holdings.',
      icon: 'Database',
      category: 'migration',
      darkColor: 'var(--wp--preset--color--neon-cyan)',
      requiresDarkBg: true,
      tags: ['migration', 'content'],
      footnote: 'Combined total across all client migrations since 2009.',
    },
    {
      id: 'sites-migrated',
      value: '250+',
      label: 'Sites migrated',
      description: 'Production sites now hosted on LightSpeed infrastructure.',
      icon: 'Globe',
      category: 'migration',
      darkColor: 'var(--wp--preset--color--neon-cyan)',
      requiresDarkBg: true,
      tags: ['migration', 'hosting'],
    },
    {
      id: 'migration-types',
      value: '6+',
      label: 'Migration types',
      description: 'Custom CMS, Drupal, Joomla, TYPO3, XML, SQL to WordPress.',
      icon: 'ArrowsClockwise',
      category: 'migration',
      darkColor: 'var(--wp--preset--color--neon-cyan)',
      requiresDarkBg: true,
      tags: ['migration', 'expertise'],
    },
  ],
};
```

### Support stats

```typescript
// /src/app/data/stats/support-stats.ts

export const supportStatsCollection: StatCollection = {
  id: 'support-stats',
  title: 'Support & maintenance statistics',
  category: 'support',
  defaultDarkColor: 'var(--wp--preset--color--neon-lime)',
  useNeonComponent: true,
  stats: [
    {
      id: 'tickets-resolved',
      value: '10,575+',
      label: 'Tickets resolved',
      description: 'Support tickets successfully resolved since 2023.',
      icon: 'CheckCircle',
      category: 'support',
      darkColor: 'var(--wp--preset--color--neon-lime)',
      requiresDarkBg: true,
      tags: ['support', 'service'],
      footnote: 'Within Zendesk\'s 37-month retention limit.',
      lastUpdated: '2026-03-17',
    },
    {
      id: 'avg-daily-requests',
      value: '13',
      label: 'Requests per day',
      description: 'Average daily support requests across all clients.',
      icon: 'ChatCircle',
      category: 'support',
      darkColor: 'var(--wp--preset--color--neon-lime)',
      requiresDarkBg: true,
      tags: ['support', 'service'],
      footnote: 'Average varies by season and client activity.',
    },
    {
      id: 'avg-weekly-requests',
      value: '68',
      label: 'Requests per week',
      description: 'Typical weekly support volume across retainer clients.',
      icon: 'CalendarBlank',
      category: 'support',
      darkColor: 'var(--wp--preset--color--neon-lime)',
      requiresDarkBg: true,
      tags: ['support', 'service'],
    },
    {
      id: 'avg-monthly-requests',
      value: '290',
      label: 'Requests per month',
      description: 'Monthly support requests for all active retainers.',
      icon: 'CalendarCheck',
      category: 'support',
      darkColor: 'var(--wp--preset--color--neon-lime)',
      requiresDarkBg: true,
      tags: ['support', 'service'],
    },
  ],
};
```

### Hosting stats

```typescript
// /src/app/data/stats/hosting-stats.ts

export const hostingStatsCollection: StatCollection = {
  id: 'hosting-stats',
  title: 'Hosting & infrastructure statistics',
  category: 'hosting',
  defaultDarkColor: 'var(--wp--preset--color--neon-pink)',
  useNeonComponent: true,
  stats: [
    {
      id: 'sites-hosted',
      value: '250+',
      label: 'Sites hosted',
      description: 'Production sites across ~20 enterprise clients.',
      icon: 'Server',
      category: 'hosting',
      darkColor: 'var(--wp--preset--color--neon-pink)',
      requiresDarkBg: true,
      tags: ['hosting', 'infrastructure'],
    },
    {
      id: 'peak-sessions',
      value: '10k',
      label: 'Peak sessions',
      description: 'Historical peak concurrent sessions (Zimbabwe publications).',
      icon: 'Users',
      category: 'hosting',
      darkColor: 'var(--wp--preset--color--neon-pink)',
      requiresDarkBg: true,
      tags: ['hosting', 'scale'],
      footnote: 'Current typical peak: 800 (Nova News). Anticipated: 100k for News24 summit.',
    },
    {
      id: 'deployments-per-year',
      value: '<12',
      label: 'Full deployments/year',
      description: 'Conservative deployment strategy ensures stability.',
      icon: 'Rocket',
      category: 'hosting',
      darkColor: 'var(--wp--preset--color--neon-pink)',
      requiresDarkBg: true,
      tags: ['hosting', 'deployment'],
      footnote: 'Only 2 full-site deployments in 2026 so far.',
    },
    {
      id: 'hosting-hours',
      value: '4k+',
      label: 'Hours invested',
      description: 'Total hosting management hours since 2009.',
      icon: 'Clock',
      category: 'hosting',
      darkColor: 'var(--wp--preset--color--neon-pink)',
      requiresDarkBg: true,
      tags: ['hosting', 'expertise'],
    },
  ],
};
```

### Design stats

```typescript
// /src/app/data/stats/design-stats.ts

export const designStatsCollection: StatCollection = {
  id: 'design-stats',
  title: 'Design systems statistics',
  category: 'design',
  defaultDarkColor: 'var(--wp--preset--color--neon-pink)',
  useNeonComponent: true,
  stats: [
    {
      id: 'design-systems',
      value: '10+',
      label: 'Design systems',
      description: 'Custom design systems (LSX, Tour Operator, Nova, etc.).',
      icon: 'Palette',
      category: 'design',
      darkColor: 'var(--wp--preset--color--neon-pink)',
      requiresDarkBg: true,
      tags: ['design', 'systems'],
    },
    {
      id: 'lsx-components',
      value: '112',
      label: 'LSX components',
      description: 'Reusable components in the LSX design system.',
      icon: 'Cube',
      category: 'design',
      darkColor: 'var(--wp--preset--color--neon-pink)',
      requiresDarkBg: true,
      tags: ['design', 'components'],
    },
    {
      id: 'design-tokens',
      value: '230',
      label: 'Design tokens',
      description: 'CSS variables for colors, spacing, typography, etc.',
      icon: 'Swatches',
      category: 'design',
      darkColor: 'var(--wp--preset--color--neon-pink)',
      requiresDarkBg: true,
      tags: ['design', 'tokens'],
    },
    {
      id: 'figma-prototypes',
      value: '10',
      label: 'Full prototypes',
      description: 'Complete full-site Figma prototypes.',
      icon: 'FigmaLogo',
      category: 'design',
      darkColor: 'var(--wp--preset--color--neon-pink)',
      requiresDarkBg: true,
      tags: ['design', 'prototyping'],
    },
    {
      id: 'figma-make-prototypes',
      value: '25',
      label: 'Figma Make prototypes',
      description: 'Interactive prototypes built in Figma Make.',
      icon: 'Lightning',
      category: 'design',
      darkColor: 'var(--wp--preset--color--neon-pink)',
      requiresDarkBg: true,
      tags: ['design', 'prototyping', 'ai'],
    },
    {
      id: 'design-system-hours',
      value: '2k+',
      label: 'Design system hours',
      description: 'Total hours invested in design system development.',
      icon: 'Clock',
      category: 'design',
      darkColor: 'var(--wp--preset--color--neon-pink)',
      requiresDarkBg: true,
      tags: ['design', 'investment'],
    },
  ],
};
```

### Development stats

```typescript
// /src/app/data/stats/development-stats.ts

export const developmentStatsCollection: StatCollection = {
  id: 'development-stats',
  title: 'Development statistics',
  category: 'development',
  defaultDarkColor: 'var(--wp--preset--color--neon-cyan)',
  useNeonComponent: true,
  stats: [
    {
      id: 'payment-gateways',
      value: '5',
      label: 'Payment gateway plugins',
      description: 'Custom payment integrations (Peach, PayFast, PayStack, etc.).',
      icon: 'CreditCard',
      category: 'development',
      darkColor: 'var(--wp--preset--color--neon-cyan)',
      requiresDarkBg: true,
      tags: ['development', 'payments'],
    },
    {
      id: 'api-integrations',
      value: '50+',
      label: 'API integrations',
      description: 'Custom API integration plugins and middleware.',
      icon: 'Plugs',
      category: 'development',
      darkColor: 'var(--wp--preset--color--neon-cyan)',
      requiresDarkBg: true,
      tags: ['development', 'integrations'],
    },
    {
      id: 'custom-plugins',
      value: '150+',
      label: 'Custom plugins',
      description: 'Bespoke WordPress plugins for client projects.',
      icon: 'Plugin',
      category: 'development',
      darkColor: 'var(--wp--preset--color--neon-cyan)',
      requiresDarkBg: true,
      tags: ['development', 'plugins'],
    },
    {
      id: 'custom-themes',
      value: '300+',
      label: 'Custom themes',
      description: 'WordPress themes built from scratch for clients.',
      icon: 'PaintBrush',
      category: 'development',
      darkColor: 'var(--wp--preset--color--neon-cyan)',
      requiresDarkBg: true,
      tags: ['development', 'themes'],
    },
    {
      id: 'open-source-themes',
      value: '10+',
      label: 'Open-source themes',
      description: 'WordPress themes released to the community.',
      icon: 'GitBranch',
      category: 'development',
      darkColor: 'var(--wp--preset--color--neon-cyan)',
      requiresDarkBg: true,
      tags: ['development', 'open-source'],
    },
    {
      id: 'open-source-plugins',
      value: '30+',
      label: 'Open-source plugins',
      description: 'WordPress plugins released to the community.',
      icon: 'Code',
      category: 'development',
      darkColor: 'var(--wp--preset--color--neon-cyan)',
      requiresDarkBg: true,
      tags: ['development', 'open-source'],
    },
  ],
};
```

### Projects stats

```typescript
// /src/app/data/stats/projects-stats.ts

export const projectsStatsCollection: StatCollection = {
  id: 'projects-stats',
  title: 'Projects & builds statistics',
  category: 'projects',
  defaultDarkColor: 'var(--wp--preset--color--neon-yellow)',
  useNeonComponent: true,
  stats: [
    {
      id: 'projects-completed',
      value: '1,500+',
      label: 'Projects completed',
      description: 'Total projects delivered since September 2013.',
      icon: 'CheckSquare',
      category: 'projects',
      darkColor: 'var(--wp--preset--color--neon-yellow)',
      requiresDarkBg: true,
      tags: ['projects', 'scale'],
      footnote: 'Data from Xero/Harvest project management.',
    },
    {
      id: 'websites-built',
      value: '300+',
      label: 'Websites built',
      description: 'New builds and complete rebuilds.',
      icon: 'Globe',
      category: 'projects',
      darkColor: 'var(--wp--preset--color--neon-yellow)',
      requiresDarkBg: true,
      tags: ['projects', 'websites'],
    },
    {
      id: 'active-builds',
      value: '12',
      label: 'Active builds',
      description: 'Current active build projects in progress.',
      icon: 'Hammer',
      category: 'projects',
      darkColor: 'var(--wp--preset--color--neon-yellow)',
      requiresDarkBg: true,
      tags: ['projects', 'active'],
      lastUpdated: '2026-03-17',
    },
  ],
};
```

### Business stats (SLAs & retainers)

```typescript
// /src/app/data/stats/business-stats.ts

export const businessStatsCollection: StatCollection = {
  id: 'business-stats',
  title: 'Business & SLA statistics',
  category: 'business',
  defaultDarkColor: 'var(--wp--preset--color--neon-lime)',
  useNeonComponent: false, // Traditional stats grid for business metrics
  stats: [
    {
      id: 'retainer-clients',
      value: '20',
      label: 'Retainer clients',
      description: 'Long-term retainer partnerships.',
      icon: 'Handshake',
      category: 'business',
      lightColor: 'var(--category-green)',
      tags: ['business', 'clients'],
    },
    {
      id: 'websites-managed',
      value: '~100',
      label: 'Websites managed',
      description: 'Total sites under retainer management.',
      icon: 'Buildings',
      category: 'business',
      lightColor: 'var(--category-green)',
      tags: ['business', 'management'],
    },
    {
      id: 'urgent-response',
      value: '24h',
      label: 'Urgent response',
      description: 'Response time for urgent support requests.',
      icon: 'Lightning',
      category: 'business',
      lightColor: 'var(--category-red)',
      tags: ['business', 'sla'],
    },
    {
      id: 'important-response',
      value: '48h',
      label: 'Important response',
      description: 'Response time for important support requests.',
      icon: 'Clock',
      category: 'business',
      lightColor: 'var(--category-yellow)',
      tags: ['business', 'sla'],
    },
    {
      id: 'normal-response',
      value: '72h',
      label: 'Normal response',
      description: 'Response time for normal support requests.',
      icon: 'Timer',
      category: 'business',
      lightColor: 'var(--category-blue)',
      tags: ['business', 'sla'],
    },
  ],
};
```

---

## Integration strategy

### Phase 1: Create registry infrastructure (Week 1)

1. **Create type definitions**
   - File: `/src/app/data/stats/types.ts`
   - Define all TypeScript interfaces
   - Export types for component consumption

2. **Create category-specific stats files**
   - 8 files: migration, support, hosting, design, development, seo, ai, performance
   - Each exports a `StatCollection` object
   - Use real data from `new-stats-integration.md`

3. **Create registry aggregator**
   - File: `/src/app/data/stats/stats-registry.ts`
   - Import all category collections
   - Build registry with helper functions
   - Export centralized API

### Phase 2: Update existing data files (Week 2)

1. **Migrate existing stats** from these files:
   - `seo-service-template-data.tsx` → `seo-stats.ts`
   - `analytics-service-template-data.tsx` → `ai-stats.ts`
   - `ai-engine-service-template-data.tsx` → `ai-stats.ts`
   - `answer-engine-service-template-data.tsx` → `ai-stats.ts`
   - `development-service-page.ts` → `development-stats.ts`
   - `performance-service-page.ts` → `performance-stats.ts`
   - All 4 AI sub-page files → `ai-stats.ts`

2. **Update templates to import from registry**
   - Replace local stat arrays with registry imports
   - Use `statsRegistry.getStatsByCategory()` or `getCollection()`
   - Maintain existing component structure (StatsGrid/NeonStats)

### Phase 3: Create AdaptiveStats wrapper (Week 3)

1. **Build theme-aware component**
   - File: `/src/app/components/common/AdaptiveStats.tsx`
   - Auto-select NeonStats (dark) or StatsGrid (light)
   - Use collection metadata (`useNeonComponent`, `requiresDarkBg`)

2. **Migrate high-traffic pages**
   - `/services/migrations` → Use migration stats
   - `/services/support` → Use support stats
   - `/services/hosting` → Use hosting stats
   - `/services/design` → Use design stats
   - `/services/development` → Use development stats

### Phase 4: Update orchestrator prompts (Week 4)

1. **Update AI Services Restructure prompt**
   - Add stats registry reference to Phase 1 (Data Layer)
   - Include migration, hosting, support stats in lifecycle stages
   - Specify NeonStats usage for all AI pages (dark mode)

2. **Update AI Solutions Hub prompt**
   - Add stats registry reference to data file spec
   - Include AI stats collection in solutions mega page
   - Specify accent colors per solution section

---

## Reference updates for orchestrator prompts

### Update: `/prompts/ai-services-restructure.md`

Add to **Phase 1 — Data layer** section (after line 62):

```markdown
### 1.4 Import stats from centralized registry

Update all AI service/solution pages to pull statistics from `/src/app/data/stats/stats-registry.ts` instead of local stat arrays.

**Files to update:**
- `ai-services-lifecycle-data.tsx` — import `aiStatsCollection` for AI capabilities stats
- `ai-solutions-hub-data.tsx` — import `aiStatsCollection` for solutions stats bar
- All 5 AI solutions sub-pages — import relevant stat collections:
  - Content Generation → `aiStatsCollection` (filter by tags: `['content']`)
  - SEO → `seoStatsCollection`
  - Chatbots → `aiStatsCollection` (filter by tags: `['chatbots']`)
  - Analytics → `aiStatsCollection` (filter by tags: `['analytics']`)

**Registry helper usage:**
```typescript
import { statsRegistry } from '@/data/stats/stats-registry';

// Get all AI stats
const aiStats = statsRegistry.getStatsByCategory('ai');

// Get specific stats by tag
const chatbotStats = statsRegistry.getStatsByTag('chatbots');

// Get entire collection with metadata
const aiCollection = statsRegistry.getCollection('ai-stats');
```

**Component usage:**
```typescript
import { AdaptiveStats } from '@/components/common/AdaptiveStats';
import { statsRegistry } from '@/data/stats/stats-registry';

const aiCollection = statsRegistry.getCollection('ai-stats');

<AdaptiveStats
  collection={aiCollection}
  title="AI-powered results"
  subtitle="Real metrics from our AI implementations."
  columns={4}
/>
```

**Accent colors per lifecycle stage:**
- **Discover** (Ignite) → `var(--wp--preset--color--neon-yellow)` (yellow)
- **Create** (Ideate) → `var(--wp--preset--color--neon-pink)` (pink)
- **Build** (Develop) → `var(--wp--preset--color--neon-cyan)` (cyan)
- **Launch** (Deploy) → `var(--wp--preset--color--neon-lime)` (lime)
- **Grow** (Optimize) → `var(--category-green)` (green)
- **Evolve** (Innovate) → `var(--category-purple)` (indigo/purple)

**Additional stats to include:**
- **Migrations:** `migrationStatsCollection` → Display on Launch stage section (deployment focus)
- **Hosting:** `hostingStatsCollection` → Display on Grow stage section (scale focus)
- **Support:** `supportStatsCollection` → Display on Evolve stage section (ongoing partnership)
- **Design:** `designStatsCollection` → Display on Create stage section (design systems)
- **Development:** `developmentStatsCollection` → Display on Build stage section (engineering)
```

### Update: `/prompts/ai-solutions-hub.md`

Add to **Data file specification** section (after line 24):

```markdown
### Stats integration

Import statistics from the centralized registry instead of defining locally.

**Registry imports:**
```typescript
import { statsRegistry } from '@/data/stats/stats-registry';

// Get AI-specific stats
const aiStats = statsRegistry.getStatsByCategory('ai');

// Get SEO stats for AI-Powered SEO section
const seoStats = statsRegistry.getStatsByCategory('seo');

// Get all stats for aggregated metrics banner
const allStats = statsRegistry.allStats;
```

**Stats placement:**
1. **Aggregated metrics banner** (section 3, after sticky nav):
   - Total projects: `statsRegistry.getStatById('projects-completed')`
   - Sites hosted: `statsRegistry.getStatById('sites-hosted')`
   - Design systems: `statsRegistry.getStatById('design-systems')`
   - Custom plugins: `statsRegistry.getStatById('custom-plugins')`

2. **Per-solution stats** (within each solution section):
   - **Content Generation** → `aiStatsCollection` filtered by `tags: ['content']`
   - **AI-Powered SEO** → `seoStatsCollection` (entire collection)
   - **Chatbots** → `aiStatsCollection` filtered by `tags: ['chatbots']`
   - **Analytics** → `aiStatsCollection` filtered by `tags: ['analytics']`

3. **Component selection:**
   - **Dark mode** → Use `NeonStats` with solution-specific accent color
   - **Light mode** → Use `StatsGrid` (traditional grid)
   - **Recommended:** Use `AdaptiveStats` wrapper for automatic theme detection

**Accent colors per solution:**
- Content Generation → `var(--wp--preset--color--neon-cyan)` (cyan)
- AI-Powered SEO → `var(--wp--preset--color--neon-lime)` (lime)
- Chatbots → `var(--wp--preset--color--neon-pink)` (pink)
- Analytics → `var(--wp--preset--color--neon-yellow)` (yellow)
```

---

## Design system compliance checklist

- [ ] **Typography:** Only `var(--font-primary)` (Lexend) and `var(--font-secondary)` (Manrope)
- [ ] **Spacing:** Exclusively `var(--spacing-*)` tokens (no hardcoded px/rem)
- [ ] **Colors:** All neon accents on `var(--color-black)` backgrounds
- [ ] **Borders:** `var(--radius-*)` tokens for border-radius
- [ ] **Icons:** Phosphor icons only (no Lucide)
- [ ] **BEM methodology:** `.neon-stats` block for NeonStats, `.stats-grid` for StatsGrid
- [ ] **Accessibility:** Semantic HTML, ARIA labels, keyboard navigation
- [ ] **Responsive:** Mobile-first breakpoints (640px, 1024px)
- [ ] **Reduced motion:** Animation fallbacks via `@media (prefers-reduced-motion: reduce)`

---

## Questions for clarification

1. **Icon string mapping:** Should we create a helper to map icon strings (`'Rocket'`) to Phosphor components, or require components to handle this mapping?

2. **Stat versioning:** Should we track version history for stats that change over time (e.g., `lastUpdated` field)?

3. **Footnote display:** Where should footnotes appear? Tooltip on hover, below stat, or in a separate footnote section?

4. **Tag taxonomy:** Should we define a fixed set of allowed tags, or allow free-form tagging?

5. **Light/dark color fallback:** If a stat doesn't define `lightColor`/`darkColor`, should it fall back to collection defaults or semantic tokens?

6. **Trend direction semantics:** Should "down" always mean bad, or should we add a `trendSentiment` field (`'positive' | 'negative' | 'neutral'`) to separate direction from quality?

7. **Multiple collections per category:** Can a category have multiple collections (e.g., two different migration stat sets for different contexts)?

8. **Stats caching:** Should we implement memoization/caching for `getStatsByCategory` and other registry helpers?

---

## Success criteria

### Code quality
- [ ] TypeScript interfaces prevent runtime errors
- [ ] All stats use CSS variables (0 hardcoded values)
- [ ] BEM class naming consistent across all components
- [ ] ESLint/Prettier compliant

### Design compliance
- [ ] Neon colors appear only on dark backgrounds
- [ ] Typography uses Lexend/Manrope exclusively
- [ ] Spacing uses design tokens exclusively
- [ ] Responsive breakpoints match design system

### Functionality
- [ ] Registry successfully imports from all 8 category files
- [ ] Helper functions (`getStatById`, `getStatsByCategory`, etc.) work correctly
- [ ] `AdaptiveStats` correctly switches between NeonStats and StatsGrid based on theme
- [ ] Icon string → component mapping works without errors

### Documentation
- [ ] All interfaces have JSDoc comments
- [ ] README explains registry structure and usage
- [ ] Component API documented with examples
- [ ] Migration guide from old data files to registry

### Performance
- [ ] Registry builds at compile time (no runtime overhead)
- [ ] Icon imports don't bloat bundle (tree-shaking works)
- [ ] Memoization prevents unnecessary re-renders

---

## Timeline

| Week | Tasks | Deliverables |
|---|---|---|
| **Week 1** | Create registry infrastructure | `types.ts`, 8 category files, `stats-registry.ts` |
| **Week 2** | Migrate existing stats | Update 10+ data files, migrate templates |
| **Week 3** | Build AdaptiveStats wrapper | `AdaptiveStats.tsx`, migrate 5 high-traffic pages |
| **Week 4** | Update orchestrator prompts | Update 2 orchestrator prompts, documentation |

**Total time:** 4 weeks (estimated 20-25 hours)

---

## Related files

- **Component:** `/src/app/components/common/NeonStats.tsx`
- **CSS:** `/src/styles/components/neon-stats.css`
- **Examples:** `/src/app/components/examples/NeonStatsExample.tsx`
- **Documentation:** `/docs/components/neon-stats.md`
- **Guidelines:** `/guidelines/Guidelines.md`
- **Source data:** `/src/imports/pasted_text/new-stats-integration.md`

---

**Last Updated:** March 17, 2026  
**Author:** LSX Design System Team  
**Status:** Ready for implementation
