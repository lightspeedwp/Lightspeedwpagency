# Data Files Guidelines

**Location:** `/src/app/data/`
**Last Updated:** March 4, 2026

---

## Purpose

All mock/content data lives in `/src/app/data/`. This mirrors how WordPress manages content through a database — templates consume data, they don't define it.

---

## File Size Limits

| Threshold | Action |
|-----------|--------|
| **< 400 lines** | Single file is fine |
| **400 – 800 lines** | Consider splitting if distinct logical sections exist |
| **> 800 lines** | **Must split** into a folder with sub-files |

---

## Splitting Pattern (Folder + Barrel)

When a data file exceeds the threshold, split it into a **folder** with the same name:

```
Before:
  /src/app/data/ai-integrations-page.ts   (972 lines)

After:
  /src/app/data/ai-integrations/
  ├── types.ts                  # Shared interfaces
  ├── landing.ts                # Landing page data
  ├── content-generation.ts     # Sub-page data
  ├── seo.ts                    # Sub-page data
  ├── chatbots.ts               # Sub-page data
  ├── analytics.ts              # Sub-page data
  └── index.ts                  # Barrel re-export

  /src/app/data/ai-integrations-page.ts   (compatibility shim)
```

### Rules

1. **Types go in `types.ts`** — shared interfaces used across sub-files.
2. **One sub-file per logical section** — usually one per page/route.
3. **Barrel `index.ts` re-exports everything** — named exports only, no default exports.
4. **Original file becomes a compatibility shim** — `export * from './folder-name/index';` so existing imports don't break.
5. **Add `@deprecated` JSDoc** to the shim file directing new code to the folder.

### Compatibility Shim Template

```ts
/**
 * Data File Name — Compatibility Re-export
 *
 * This file re-exports from the split `/src/app/data/folder-name/` folder.
 * Existing imports continue to work unchanged.
 *
 * @deprecated Import from `./folder-name/index` directly for new code.
 */

export * from './folder-name/index';
```

---

## Naming Conventions

| Convention | Example | Notes |
|-----------|---------|-------|
| **Page data** | `about-page.ts` | Suffix with `-page` |
| **Solution data** | `mailchimp-solution-page.ts` | Suffix with `-solution-page` |
| **Shared collections** | `faqs.ts`, `portfolio.ts` | No suffix needed |
| **Split folders** | `site-pages/`, `ai-integrations/` | Match the original file name minus `-page` suffix |
| **Sub-files** | `landing.ts`, `types.ts`, `helpers.ts` | Descriptive, lowercase, hyphenated |

---

## Data File Structure

Every data file should follow this structure:

```ts
/**
 * File Name — Description
 *
 * Content for [route or feature].
 *
 * @see /src/app/components/templates/ConsumerTemplate.tsx
 */

import { Icon1, Icon2 } from '@phosphor-icons/react';

/* ═══════════════════════════════════════════
 * Types (if not in separate types.ts)
 * ═══════════════════════════════════════════ */

export interface MyType { ... }

/* ═══════════════════════════════════════════
 * Data
 * ═══════════════════════════════════════════ */

export const myData: MyType = { ... };
```

### Section Headers

Use decorated comment blocks to separate logical sections:

```ts
/* ═══════════════════════════════════════════
   SECTION NAME
   ═══════════════════════════════════════════ */
```

Use lighter headers for sub-sections:

```ts
/* ── Sub-section ── */
```

---

## Icon Imports in Data Files

- **Always use `@phosphor-icons/react`** — never Lucide React.
- Import the Phosphor `Icon` type for type annotations: `import { type Icon } from '@phosphor-icons/react';`
- Icon fields in interfaces should use `Icon` type (from Phosphor) or `UniversalIcon` (from icon-map).

---

## Completed Splits

| Original File | Lines | New Location | Date |
|--------------|-------|-------------|------|
| `site-pages.ts` | 1,074 | `/src/app/data/site-pages/` (types, pages, navigation, helpers) | March 4, 2026 |
| `ai-integrations-page.ts` | 972 | `/src/app/data/ai-integrations/` (types, landing, content-generation, seo, chatbots, analytics) | March 4, 2026 |

---

## Related Guidelines

- **[/guidelines/Guidelines.md](../Guidelines.md)** — Canonical project reference
- **[/guidelines/overview-components.md](../overview-components.md)** — Component system overview
- **[/guidelines/MOCK-DATA-SYSTEM.md](../MOCK-DATA-SYSTEM.md)** — Mock data patterns
