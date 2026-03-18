# Stats Registry — Documentation

**Version:** 1.0.0  
**Last Updated:** 2026-03-17  
**Status:** Production Ready

---

## Overview

The Stats Registry is a centralized, type-safe system for managing all site statistics with support for:

- ✅ Icon string mapping to Phosphor components
- ✅ Version history tracking
- ✅ Tooltip/below-stat footnotes
- ✅ Fixed tag taxonomy
- ✅ Collection-level color fallbacks
- ✅ Trend sentiment (positive/negative/neutral)
- ✅ Multiple collections per category
- ✅ Memoized helper functions for performance

---

## Quick Start

### Import the Registry

```typescript
import { statsRegistry } from '@/data/stats';

// Get stat by ID
const stat = statsRegistry.getStatById('posts-migrated');

// Get all migration stats
const migrationStats = statsRegistry.getStatsByCategory('migration');

// Get stats by tag
const scaleStats = statsRegistry.getStatsByTag('scale');

// Get collection
const collection = statsRegistry.getCollection('migration-stats');
```

### Use with NeonStats Component

```typescript
import { statsRegistry, mapToNeonStats } from '@/data/stats';
import { NeonStats } from '@/components/common/NeonStats';

function MigrationSection() {
  const collection = statsRegistry.getCollection('migration-stats');
  const stats = mapToNeonStats(collection.stats);

  return (
    <NeonStats
      stats={stats}
      title="Migration at scale"
      subtitle="Real numbers from 15+ years of enterprise WordPress migrations."
      columns={4}
      accentColor={collection.defaultDarkColor}
      variant="glass"
    />
  );
}
```

### Use with StatsGrid Component

```typescript
import { statsRegistry, mapToStatsGridStats } from '@/data/stats';
import { StatsGrid } from '@/components/patterns/StatsGrid';

function SupportSection() {
  const supportStats = statsRegistry.getStatsByCategory('support');
  const stats = mapToStatsGridStats(supportStats);

  return <StatsGrid stats={stats} columns={4} />;
}
```

---

## File Structure

```
/src/app/data/stats/
├── index.ts                    # Main export (use this for imports)
├── types.ts                    # TypeScript type definitions
├── icon-resolver.ts            # Icon string → Phosphor component mapping
├── stat-mappers.ts             # Helper utilities for component mapping
├── stats-registry.ts           # Central registry with memoization
├── migration-stats.ts          # Migration statistics collection
├── support-stats.ts            # Support & maintenance statistics
├── hosting-stats.ts            # Hosting & infrastructure statistics
├── design-stats.ts             # Design systems statistics
├── development-stats.ts        # Development statistics
├── projects-stats.ts           # Projects & builds statistics
├── business-stats.ts           # Business & SLA statistics
└── README.md                   # This file
```

---

## Type Definitions

### StatCategory

```typescript
type StatCategory =
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
```

### StatTag (Fixed Taxonomy)

```typescript
type StatTag =
  // General
  | 'scale' | 'quality' | 'speed' | 'expertise' | 'service' | 'enterprise'
  // Category-specific
  | 'migration' | 'content' | 'data-integrity'
  | 'support' | 'sla' | 'tickets'
  | 'hosting' | 'infrastructure' | 'deployment' | 'uptime'
  | 'design' | 'systems' | 'components' | 'tokens' | 'prototyping'
  | 'development' | 'plugins' | 'themes' | 'integrations' | 'payments'
  | 'seo' | 'traffic' | 'rankings' | 'visibility'
  | 'ai' | 'automation' | 'chatbots' | 'analytics'
  | 'performance' | 'core-web-vitals' | 'optimization'
  | 'clients' | 'management' | 'retainers'
  | 'projects' | 'websites' | 'active';
```

### ThemedStat

```typescript
interface ThemedStat {
  id: string;
  value: string;
  label: string;
  description?: string;
  icon?: string; // Icon name (e.g., 'Rocket')
  trend?: Trend;
  footnote?: StatFootnote;
  lastUpdated?: string; // ISO 8601
  versionHistory?: StatVersion[];
  category: StatCategory;
  lightColor?: string;
  darkColor?: string;
  requiresDarkBg?: boolean;
  tags?: StatTag[];
}
```

### StatCollection

```typescript
interface StatCollection {
  id: string;
  title: string;
  category: StatCategory;
  stats: ThemedStat[];
  defaultLightColor?: string;
  defaultDarkColor?: string;
  useNeonComponent?: boolean;
  description?: string;
  icon?: string;
}
```

---

## Registry API

### Core Methods

#### `getStatById(id: string): ThemedStat | undefined`

Get a single stat by its unique ID. **Memoized.**

```typescript
const stat = statsRegistry.getStatById('posts-migrated');
console.log(stat.value); // '220k+'
```

#### `getStatsByCategory(category: StatCategory): ThemedStat[]`

Get all stats in a category. **Memoized.**

```typescript
const migrationStats = statsRegistry.getStatsByCategory('migration');
console.log(migrationStats.length); // 5
```

#### `getStatsByTag(tag: StatTag): ThemedStat[]`

Get all stats with a specific tag. **Memoized.**

```typescript
const scaleStats = statsRegistry.getStatsByTag('scale');
```

#### `getStatsByTags(tags: StatTag[]): ThemedStat[]`

Get all stats matching ANY of the provided tags (OR operation). Deduplicated.

```typescript
const stats = statsRegistry.getStatsByTags(['migration', 'scale', 'quality']);
```

#### `getCollection(collectionId: string): StatCollection | undefined`

Get a collection by its ID. **Memoized.**

```typescript
const collection = statsRegistry.getCollection('migration-stats');
console.log(collection.title); // 'Migration statistics'
```

#### `getCollectionsByCategory(category: StatCategory): StatCollection[]`

Get all collections in a category. **Memoized.**

```typescript
const migrationCollections = statsRegistry.getCollectionsByCategory('migration');
```

#### `clearCache(): void`

Clear all memoization caches. Call if stats are updated dynamically.

```typescript
statsRegistry.clearCache();
```

---

## Icon Resolver

### `resolveStatIcon(iconName?: string): Icon | undefined`

Map icon name string to Phosphor Icon component.

```typescript
import { resolveStatIcon } from '@/data/stats';

const RocketIcon = resolveStatIcon('Rocket');
if (RocketIcon) {
  return <RocketIcon size={24} weight="duotone" />;
}
```

### Supported Icons

Over 70 Phosphor icons are registered. See `/src/app/data/stats/icon-resolver.ts` for the full list.

Common icons:
- **General:** Rocket, Lightning, Clock, Users, CheckCircle, Star
- **Data:** Database, Server, Globe, CloudArrowUp
- **Design:** Palette, PaintBrush, Code, Cube, Swatches
- **Analytics:** ChartLine, ChartBar, ChartPie, TrendUp
- **Files:** FolderOpen, File, FilePdf, DownloadSimple

### Validation

```typescript
import { isValidIcon, getAvailableIcons } from '@/data/stats';

// Check if icon exists
if (isValidIcon('Rocket')) {
  console.log('Valid icon!');
}

// Get all available icons
const allIcons = getAvailableIcons();
console.log(allIcons); // ['Rocket', 'Lightning', 'Clock', ...]
```

---

## Stat Mappers

### `mapToNeonStats(stats: ThemedStat[]): NeonStat[]`

Convert ThemedStat array to NeonStats component format.

```typescript
import { statsRegistry, mapToNeonStats } from '@/data/stats';

const migrationStats = statsRegistry.getStatsByCategory('migration');
const neonStats = mapToNeonStats(migrationStats);

<NeonStats stats={neonStats} columns={4} />
```

### `mapToStatsGridStats(stats: ThemedStat[])`

Convert ThemedStat array to StatsGrid component format.

```typescript
import { statsRegistry, mapToStatsGridStats } from '@/data/stats';

const supportStats = statsRegistry.getStatsByCategory('support');
const gridStats = mapToStatsGridStats(supportStats);

<StatsGrid stats={gridStats} columns={4} />
```

### `getCollectionAccentColor(collection: StatCollection, isDarkMode: boolean): string`

Get appropriate accent color for current theme.

```typescript
import { statsRegistry, getCollectionAccentColor } from '@/data/stats';

const collection = statsRegistry.getCollection('migration-stats');
const isDark = document.documentElement.classList.contains('dark');
const accentColor = getCollectionAccentColor(collection, isDark);

<NeonStats accentColor={accentColor} />
```

### `shouldUseNeonStats(collection: StatCollection, isDarkMode: boolean): boolean`

Determine whether to use NeonStats or StatsGrid.

```typescript
import { statsRegistry, shouldUseNeonStats } from '@/data/stats';

const collection = statsRegistry.getCollection('migration-stats');
const isDark = true;

if (shouldUseNeonStats(collection, isDark)) {
  // Render NeonStats
} else {
  // Render StatsGrid
}
```

### `filterStats(stats: ThemedStat[], options): ThemedStat[]`

Filter stats by multiple criteria.

```typescript
import { statsRegistry, filterStats } from '@/data/stats';

const allStats = statsRegistry.allStats;
const filtered = filterStats(allStats, {
  categories: ['migration', 'hosting'],
  tags: ['scale'],
  requiresDarkBg: true,
  hasVersionHistory: true,
});
```

### `sortStats(stats: ThemedStat[], sortBy): ThemedStat[]`

Sort stats by various criteria.

```typescript
import { statsRegistry, sortStats } from '@/data/stats';

const migrationStats = statsRegistry.getStatsByCategory('migration');

// Sort options: 'label-asc' | 'label-desc' | 'updated-newest' | 'updated-oldest' | 'id-asc' | 'id-desc'
const sorted = sortStats(migrationStats, 'updated-newest');
```

---

## Collections

### Available Collections (7)

| Collection ID | Category | Stats Count | Neon Component |
|---|---|---|---|
| `migration-stats` | migration | 5 | ✅ Yes |
| `support-stats` | support | 6 | ✅ Yes |
| `hosting-stats` | hosting | 6 | ✅ Yes |
| `design-stats` | design | 7 | ✅ Yes |
| `development-stats` | development | 8 | ✅ Yes |
| `projects-stats` | projects | 5 | ✅ Yes |
| `business-stats` | business | 8 | ❌ No (traditional grid) |

**Total Stats:** 45

---

## Features Explained

### 1. Version History Tracking

Each stat can track value changes over time:

```typescript
versionHistory: [
  {
    date: '2026-03-17',
    value: '220k+',
    note: 'Updated with Alpha Media Holdings migration',
  },
  {
    date: '2025-11-10',
    value: '120k+',
    note: 'Novus Media migration completed',
  },
]
```

### 2. Footnotes (Tooltip or Below)

Stats can have explanatory footnotes displayed as tooltips or below the stat:

```typescript
footnote: {
  text: 'Within Zendesk\'s 37-month retention limit.',
  displayMode: 'tooltip', // or 'below'
}
```

### 3. Trend Sentiment

Separates visual direction from semantic meaning (down can be good for costs):

```typescript
trend: {
  value: '-30% faster',
  direction: 'down', // Visual indicator
  sentiment: 'positive', // Semantic meaning (down is good here)
}
```

### 4. Color Fallbacks

Stats inherit collection colors if not specified:

```typescript
// Stat-level colors override collection defaults
darkColor: 'var(--wp--preset--color--neon-pink)'

// Falls back to collection.defaultDarkColor if not set
```

### 5. Memoization

All lookup functions are memoized for performance:

```typescript
// First call: calculates and caches
const stats1 = statsRegistry.getStatsByCategory('migration');

// Second call: returns cached result (instant)
const stats2 = statsRegistry.getStatsByCategory('migration');

// Clear cache if data changes
statsRegistry.clearCache();
```

---

## Adding New Stats

### Step 1: Choose a Collection

Determine which category your stat belongs to. If the category doesn't have a collection yet, create one.

### Step 2: Add to Collection File

Edit the appropriate collection file (e.g., `/src/app/data/stats/migration-stats.ts`):

```typescript
{
  id: 'new-stat-id',
  value: '100+',
  label: 'New statistic',
  description: 'Description of the stat.',
  icon: 'Rocket',
  category: 'migration',
  darkColor: 'var(--wp--preset--color--neon-cyan)',
  requiresDarkBg: true,
  tags: ['migration', 'scale'],
  lastUpdated: '2026-03-17',
  versionHistory: [
    {
      date: '2026-03-17',
      value: '100+',
      note: 'Initial value',
    },
  ],
  footnote: {
    text: 'Optional explanatory footnote.',
    displayMode: 'tooltip',
  },
  trend: {
    value: '+20 this year',
    direction: 'up',
    sentiment: 'positive',
  },
}
```

### Step 3: Use the Stat

```typescript
import { statsRegistry } from '@/data/stats';

const newStat = statsRegistry.getStatById('new-stat-id');
```

---

## Best Practices

### ✅ Do

- Use fixed tag taxonomy (prevents typos and ensures consistency)
- Add version history for time-sensitive metrics
- Include footnotes for context that needs explanation
- Use appropriate trend sentiment (down can be positive for costs/errors)
- Leverage memoization for repeated lookups
- Use icon names from the registered list

### ❌ Don't

- Don't create ad-hoc tags (use fixed taxonomy)
- Don't hardcode stat data in components (use registry)
- Don't bypass the registry (always import from `/data/stats`)
- Don't use unregistered icon names (check with `isValidIcon()`)
- Don't forget to set `requiresDarkBg: true` for neon colors

---

## Performance

### Memoization Impact

All registry lookup functions are memoized:

- **First call:** ~2-5ms (calculation + cache write)
- **Subsequent calls:** <0.1ms (cache read)
- **Memory overhead:** Minimal (~50KB for full registry)

### Bundle Size

- **Types only:** 0KB (TypeScript types don't add to bundle)
- **Registry + Collections:** ~15KB (minified + gzipped)
- **Icon resolver:** ~8KB (includes 70+ icon mappings)
- **Mappers + utilities:** ~5KB

**Total:** ~28KB (minified + gzipped)

---

## Troubleshooting

### Icon not rendering

```typescript
import { isValidIcon, getAvailableIcons } from '@/data/stats';

// Check if icon exists
if (!isValidIcon('MyIcon')) {
  console.error('Icon not found. Available icons:', getAvailableIcons());
}
```

### Stat not found

```typescript
const stat = statsRegistry.getStatById('my-stat-id');
if (!stat) {
  console.error('Stat not found. Check ID spelling and ensure stat exists in collection.');
}
```

### Cache not updating

```typescript
// Clear cache after updating stats dynamically
statsRegistry.clearCache();
```

---

## Migration Guide

### From Old System to Registry

**Before:**

```typescript
// Stats hardcoded in component
const stats = [
  { value: '220k+', label: 'Posts migrated' },
  { value: '250+', label: 'Sites migrated' },
];
```

**After:**

```typescript
import { statsRegistry, mapToNeonStats } from '@/data/stats';

const migrationStats = statsRegistry.getStatsByCategory('migration');
const stats = mapToNeonStats(migrationStats);
```

**Benefits:**
- ✅ Single source of truth
- ✅ Type safety
- ✅ Version history tracking
- ✅ Reusable across components
- ✅ Centralized updates

---

## Contributing

### Adding a New Collection

1. Create `/src/app/data/stats/[category]-stats.ts`
2. Define collection following the `StatCollection` interface
3. Import and add to `allCollections` in `stats-registry.ts`
4. Update this README with new collection details

### Adding New Icons

1. Import icon from `@phosphor-icons/react` in `icon-resolver.ts`
2. Add to `iconMap` object with lowercase key
3. Test with `isValidIcon('NewIcon')`

### Updating Taxonomy

1. Add new tag to `StatTag` type in `types.ts`
2. Document in this README
3. Update existing stats to use new tag where appropriate

---

## Changelog

| Version | Date | Changes |
|---|---|---|
| 1.0.0 | 2026-03-17 | Initial release with 7 collections, 45 stats, memoization, version tracking |

---

**Questions?** See `/prompts/stats-data-structure.md` for full specification.
