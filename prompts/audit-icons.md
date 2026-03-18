# Audit Icons — Phosphor Icon Import Integrity

**Type:** Audit  
**Created:** 2026-03-18  
**Version:** 1.0.0  
**Status:** Ready  
**Trigger Word:** `audit icons`

---

## Purpose

Audit all `@phosphor-icons/react` imports across the codebase to catch broken imports, legacy Lucide icons that slipped through, deprecated Phosphor icon names from older package versions, and incorrect weight usage. This is a post-migration health check — run regularly to prevent icon breakage.

---

## Prerequisites

1. Read `/guidelines/design-tokens/iconography.md` — weight system, size tokens, accessibility rules.
2. Confirm `@phosphor-icons/react` version in `package.json`.

---

## Workflow

### Step 1: Detect legacy Lucide imports

Scan all `.tsx` files for:

```
import { ... } from 'lucide-react';
import type { LucideIcon } from 'lucide-react';
```

**Every match is a violation.** After full migration, zero Lucide imports should exist.

Record:
- File path
- Icons imported
- Severity: `CRITICAL` (runtime import) or `HIGH` (type-only import)

### Step 2: Validate Phosphor icon names

Scan all `@phosphor-icons/react` imports. For each icon name:

1. Verify the icon exists in the installed `@phosphor-icons/react` package version.
2. Check against known renamed icons across Phosphor versions:

| Old name (pre-2.x) | Current name (2.x) | Notes |
|---|---|---|
| `CircleWavyCheck` | `SealCheck` | Renamed in 2.0 |
| `CircleWavyWarning` | `SealWarning` | Renamed in 2.0 |
| `CircleWavyQuestion` | `SealQuestion` | Renamed in 2.0 |
| `Broadcast` | `Broadcast` | Unchanged but verify |
| `GlobeHemisphereWest` | `GlobeHemisphereWest` | Unchanged |
| `FadersHorizontal` | `SlidersHorizontal` | Renamed in 2.0 |
| `ShieldWarning` | `ShieldWarning` | Verify exists |
| `FileSearch` | `FileSearch` | Verify exists |
| `Browsers` | `Browsers` | Verify exists |
| `TreeStructure` | `TreeStructure` | Verify exists |

3. Flag any icon name that does not resolve to a valid export.

### Step 3: Validate weight usage

For each Phosphor icon usage, check:

1. `weight` prop is present (warn if missing — defaults to `regular` but should be explicit)
2. `weight` value matches context guidelines from iconography.md:
   - Navigation arrows/chevrons → `regular`
   - CTA button icons → `bold`
   - Status indicators → `fill`
   - Hero section decorative → `duotone`
   - Feature card icons → `duotone`
   - Social media → `fill`
   - Icon-only buttons → `bold`

### Step 4: Validate size usage

For each icon, check:
1. `size` prop uses a number from the token scale (14, 16, 20, 24, 28, 32, 40, 48)
2. `thin` weight is never used below 24px
3. `light` weight is never used below 20px

### Step 5: Validate accessibility

For each icon usage:
1. Decorative icons must have `aria-hidden="true"` (directly or via parent `<span>`)
2. Icon-only buttons must have `aria-label` on the button
3. Meaningful standalone icons must have `aria-label` or adjacent text
4. Interactive icons must be inside a 44×44px minimum touch target

### Step 6: Write report

Save to `/reports/YYYY-MM/YYYY-MM-DD-icons-audit.md` with:

| Section | Content |
|---|---|
| Summary | Total icons, Lucide remaining, broken imports, weight violations |
| Legacy Lucide imports | File-by-file list with icon names |
| Broken Phosphor imports | Icon names that don't resolve |
| Weight violations | Icons with missing or incorrect weight |
| Size violations | Icons below minimum size for weight |
| Accessibility violations | Missing aria attributes |

### Step 7: Create task list

Save to `/tasks/icons-audit-tasks.md`.

---

## Success criteria

- [ ] Zero `lucide-react` imports (or all flagged with migration path)
- [ ] All `@phosphor-icons/react` icon names resolve to valid exports
- [ ] All icons have explicit `weight` prop
- [ ] Weight usage matches context guidelines
- [ ] Size respects weight minimums
- [ ] Accessibility attributes present
- [ ] Report saved
- [ ] Task list saved
