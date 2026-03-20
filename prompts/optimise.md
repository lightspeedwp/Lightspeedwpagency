# Optimise — Master Orchestrator

**Type:** Orchestrator  
**Version:** 2.0.0  
**Created:** March 18, 2026  
**Updated:** March 18, 2026  
**Status:** Active  
**Trigger:** `optimise`  
**Repeatable:** Yes — run quarterly or when performance degrades  
**Estimated Duration:** 6-8 hours (full run)

---

## Purpose

Master orchestrator that runs ALL optimise sub-triggers sequentially to improve codebase performance, reduce memory footprint, eliminate duplication, and enforce DRY architecture across the entire project.

---

## Instructions

**Environment Reminder:** You are working inside **Figma Make**. Do NOT suggest browser refresh, cache clearing, or terminal commands.

---

## Execution Sequence

### Core Optimizations (6 triggers)

| Step | Trigger | Prompt File | Duration | What It Does |
|---|---|---|---|---|
| 1 | `optimise memory` | `/prompts/optimise-memory.md` | 60-120m | File splitting, duplicate removal, component consolidation, DRY architecture |
| 2 | `optimise css` | `/prompts/optimise-css.md` | 45-60m | CSS architecture, duplicate removal, logical splits, import optimization |
| 3 | `optimise data` | `/prompts/optimise-data.md` | 30-45m | Data file consolidation, duplicate removal, type safety |
| 4 | `optimise components` | `/prompts/optimise-components.md` | 45-60m | Component consolidation, prop optimization, variant reduction |
| 5 | `optimise imports` | `/prompts/optimise-imports.md` | 20-30m | Remove unused imports, consolidate import statements |
| 6 | `optimise performance` | `/prompts/optimise-performance.md` | 50-60m | Bundle size, lazy loading, render performance, memoization |

### Runtime Optimizations (2 triggers)

| Step | Trigger | Prompt File | Duration | What It Does |
|---|---|---|---|---|
| 7 | `optimise react` | `/prompts/optimise-react.md` | 45-50m | React-specific optimizations, re-renders, useMemo/useCallback, React.memo |
| 8 | `optimise animations` | `/prompts/optimise-animations.md` | 30-35m | Animation performance, GPU acceleration, reduced motion |

### Code Quality Optimizations (2 triggers)

| Step | Trigger | Prompt File | Duration | What It Does |
|---|---|---|---|---|
| 9 | `optimise dependencies` | `/prompts/optimise-dependencies.md` | 35-40m | Unused dependencies, duplicates, heavy packages, updates |
| 10 | `optimise complexity` | ⚠️ *Not yet created* | 45m | Code complexity analysis, cyclomatic complexity, function length |

### Platform Optimizations (1 trigger)

| Step | Trigger | Prompt File | Duration | What It Does |
|---|---|---|---|---|
| 11 | `optimise mobile` | `/prompts/optimise-mobile.md` | 45-50m | Touch targets, mobile bundle, responsive images, mobile performance |

**Note:** Additional DX optimization triggers (optimise-dx, optimise-types, optimise-eslint, optimise-network, optimise-api) can be created as needed but are not part of the core orchestrator sequence. Run them individually when relevant.

---

## Rules

1. Execute each sub-trigger fully before moving to the next.
2. If a sub-trigger finds issues it cannot fix, add them to `/tasks/task-list.md`.
3. After all sub-triggers complete, update `/CHANGELOG.md` with a summary entry.
4. ALL optimisation work MUST maintain 100% design system compliance (see below).

---

## Design System Compliance (Non-Negotiable)

ALL optimisation work MUST maintain:

- [ ] 100% CSS variable usage (colors, spacing, typography, borders)
- [ ] Font faces from CSS only (`var(--font-primary)`, `var(--font-secondary)`)
- [ ] WordPress utility classes only (`.wp-*` prefix, zero Tailwind)
- [ ] WCAG 2.1 AA compliance (contrast, focus, keyboard nav)
- [ ] Reduced motion support
- [ ] Touch target minimums (44x44px)
- [ ] Semantic HTML
- [ ] Phosphor icons only (zero Lucide imports)
- [ ] DRY component hierarchy (pages → templates → patterns → blocks)

**See:** [/guidelines/optimisation.md](../guidelines/optimisation.md)

---

## Modifiers

| Command | Behaviour |
|---|---|
| `optimise` | Run all 11 sub-triggers sequentially |
| `optimise memory, css` | Run only the listed sub-triggers (comma-separated) |
| `optimise core` | Run core 6 optimizations only (memory, css, data, components, imports, performance) |

---

## Final Summary

```
## Optimise Session — [Today's Date]

| Sub-Trigger | Status | Issues Fixed | Lines Saved | Files Changed |
|---|---|---|---|---|
| optimise memory | Complete | [N] | [N] | [N] |
| optimise css | Complete | [N] | [N] | [N] |
| optimise data | Complete | [N] | [N] | [N] |
| optimise components | Complete | [N] | [N] | [N] |
| optimise imports | Complete | [N] | [N] | [N] |
| optimise performance | Complete | [N] | [N] | [N] |
| optimise react | Complete | [N] | [N] | [N] |
| optimise animations | Complete | [N] | [N] | [N] |
| optimise dependencies | Complete | [N] | [N] | [N] |
| optimise complexity | Complete | [N] | [N] | [N] |
| optimise mobile | Complete | [N] | [N] | [N] |

**Total issues fixed:** [N]  
**Total lines saved:** [N]  
**Total files changed:** [N]  
**Bundle size reduction:** [N]%
**Mobile performance improvement:** [N]%
```

---

## Success Metrics

| Metric | Before | Target | After |
|---|---|---|---|
| Files > 1,000 lines | [N] | 0 | [N] |
| Average CSS file size | [N] lines | < 200 lines | [N] lines |
| Duplicate CSS pairs | [N] | 0 | [N] |
| Component pattern variants | [N] | ≤ 4 per type | [N] |
| Bundle size | [N] KB | -20% | [N] KB |
| Unused imports | [N] | 0 | [N] |
| Data file duplicates | [N] | 0 | [N] |
| Touch targets < 44px | [N] | 0 | [N] |
| Unused dependencies | [N] | 0 | [N] |

---

## Related Guidelines

- [/guidelines/optimisation.md](../guidelines/optimisation.md) — Optimisation standards
- [/guidelines/build-rules.md](../guidelines/build-rules.md) — File size limits, composition rules
- [/guidelines/performance.md](../guidelines/performance.md) — Render performance, accessibility
- [/guidelines/design-tokens/](../guidelines/design-tokens/) — Design system variables
- [/guidelines/components/components-vs-patterns.md](../guidelines/components/components-vs-patterns.md) — Component hierarchy

---

**Prompt Location:** `/prompts/optimise.md`  
**Category:** Workflow  
**Difficulty:** High  
**Repeatable:** Yes