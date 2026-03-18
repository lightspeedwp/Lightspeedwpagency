# Audit Phosphor — Lucide-to-Phosphor Migration Readiness

**Type:** Audit  
**Created:** 2026-03-18  
**Version:** 1.0.0  
**Status:** Ready  
**Trigger Word:** `audit phosphor`

---

## Purpose

Audit the entire codebase to identify every remaining `lucide-react` import and map each icon to its Phosphor equivalent. Produce a safe, file-by-file migration plan that can be executed incrementally without breaking the site.

---

## Prerequisites

1. Read `/guidelines/design-tokens/iconography.md` — naming differences table, weight system.
2. Confirm `@phosphor-icons/react` is installed in `package.json`.
3. Read `/reports/2026-03/2026-03-03-phosphor-migration-complete.md` if it exists — check prior progress.

---

## Workflow

### Step 1: Inventory all icon imports

Scan every `.tsx` file in `/src/` for:

```
Pattern A: import { ... } from 'lucide-react';
Pattern B: import { ... } from '@phosphor-icons/react';
Pattern C: import type { LucideIcon } from 'lucide-react';
```

Record per file:
- File path
- Import source (`lucide-react` or `@phosphor-icons/react`)
- Icon names imported
- Number of usages in the file

### Step 2: Map lucide icons to Phosphor equivalents

For each Lucide icon found, determine the Phosphor equivalent using:

1. The naming differences table in `/guidelines/design-tokens/iconography.md`
2. Phosphor's official icon set (common mappings)
3. If no direct equivalent exists, flag as "NEEDS_MANUAL_REVIEW"

**Known mappings (extend as needed):**

| Lucide | Phosphor | Weight |
|---|---|---|
| `ChevronRight` | `CaretRight` | `regular` |
| `ChevronLeft` | `CaretLeft` | `regular` |
| `ChevronDown` | `CaretDown` | `regular` |
| `ChevronUp` | `CaretUp` | `regular` |
| `ExternalLink` | `ArrowSquareOut` | `regular` |
| `AlertTriangle` | `Warning` | `fill` |
| `Zap` | `Lightning` | `duotone` |
| `Mail` | `Envelope` | `regular` |
| `Search` | `MagnifyingGlass` | `regular` |
| `EyeOff` | `EyeSlash` | `regular` |
| `RefreshCw` | `ArrowsClockwise` | `regular` |
| `Share2` | `ShareNetwork` | `regular` |
| `TrendingUp` | `TrendUp` | `regular` |
| `X` | `X` | `bold` |
| `Menu` | `List` | `bold` |
| `Check` | `Check` | `bold` |
| `Plus` | `Plus` | `bold` |
| `Minus` | `Minus` | `regular` |
| `Star` | `Star` | `fill` or `regular` |
| `Heart` | `Heart` | `fill` or `regular` |
| `Settings` | `Gear` | `regular` |
| `User` | `User` | `regular` |
| `Lock` | `Lock` | `fill` |
| `Unlock` | `LockOpen` | `regular` |
| `Copy` | `Copy` | `regular` |
| `Trash` | `Trash` | `regular` |
| `Edit` | `PencilSimple` | `regular` |
| `Globe` | `Globe` | `regular` |
| `Clock` | `Clock` | `regular` |
| `Calendar` | `Calendar` | `regular` |
| `Download` | `DownloadSimple` | `bold` |
| `Upload` | `UploadSimple` | `bold` |
| `Filter` | `Funnel` | `regular` |
| `MoreHorizontal` | `DotsThree` | `bold` |
| `MoreVertical` | `DotsThreeVertical` | `bold` |
| `Info` | `Info` | `fill` |
| `HelpCircle` | `Question` | `regular` |
| `ArrowLeft` | `ArrowLeft` | `bold` |
| `ArrowRight` | `ArrowRight` | `bold` |
| `ArrowUp` | `ArrowUp` | `regular` |
| `ArrowDown` | `ArrowDown` | `regular` |
| `Home` | `House` | `regular` |
| `FileText` | `FileText` | `regular` |
| `Image` | `Image` | `regular` |
| `Video` | `VideoCamera` | `regular` |
| `Phone` | `Phone` | `regular` |
| `MapPin` | `MapPin` | `fill` |
| `Layers` | `Stack` | `regular` |
| `Code` | `Code` | `regular` |
| `Terminal` | `Terminal` | `regular` |
| `GitBranch` | `GitBranch` | `regular` |
| `Shield` | `Shield` | `duotone` |
| `Award` | `Trophy` | `duotone` |
| `BarChart` | `ChartBar` | `regular` |
| `PieChart` | `ChartPie` | `regular` |
| `Activity` | `Pulse` | `regular` |
| `Cpu` | `Cpu` | `regular` |
| `Database` | `Database` | `regular` |
| `Server` | `HardDrive` | `regular` |
| `Wifi` | `WifiHigh` | `regular` |
| `Palette` | `Palette` | `duotone` |
| `Layout` | `Layout` | `regular` |
| `Monitor` | `Monitor` | `regular` |
| `Smartphone` | `DeviceMobile` | `regular` |
| `Tablet` | `DeviceTablet` | `regular` |

### Step 3: Risk assessment per file

For each file with Lucide imports, classify risk:

| Risk | Criteria |
|---|---|
| **Low** | Simple icon swap, no prop differences, icon used decoratively |
| **Medium** | Icon used in conditional logic, passed as prop, or in shared component |
| **High** | Icon used in type definitions (`LucideIcon`), dynamic imports, or icon maps |

### Step 4: Generate migration plan

Group files into migration batches by risk:

1. **Batch 1 (Low risk):** Direct swap files — change import source and icon name
2. **Batch 2 (Medium risk):** Files needing `weight` prop additions or prop adjustments
3. **Batch 3 (High risk):** Files with type system changes, icon maps, or dynamic references

### Step 5: Write report

Save to `/reports/YYYY-MM/YYYY-MM-DD-phosphor-audit.md` with:

- Total Lucide imports remaining
- Total Phosphor imports already in use
- File-by-file migration table
- Risk assessment summary
- Estimated migration effort per batch

### Step 6: Create task list

Save to `/tasks/phosphor-audit-tasks.md` with checkboxes per batch.

---

## Success criteria

- [ ] Every `.tsx` file with `lucide-react` imports identified
- [ ] Every Lucide icon mapped to Phosphor equivalent (or flagged NEEDS_MANUAL_REVIEW)
- [ ] Risk assessment per file
- [ ] Migration batches defined (Low → Medium → High)
- [ ] Report saved
- [ ] Task list saved

---

## Important notes

- **Do NOT perform the migration during this audit.** This is assessment only.
- Both `lucide-react` and `@phosphor-icons/react` can coexist safely.
- Add `weight` prop to every Phosphor icon — use context defaults from iconography guidelines.
- After migration is complete, `lucide-react` can be uninstalled from `package.json`.
