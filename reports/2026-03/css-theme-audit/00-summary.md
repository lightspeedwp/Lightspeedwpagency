# CSS Theme & Mode Audit -- Executive Summary

**Date:** March 3, 2026
**Auditor:** AI Agent
**Scope:** All stylesheets in `/src/styles/`, all components in `/src/app/`
**Guidelines Reference:** `/guidelines/styles/css-file-structure.md`

---

## Overall Health: GOOD (92/100)

The CSS architecture is well-structured with strong design system compliance. The audit identified **8 findings** across 8 categories, with **0 critical blockers** and **5 medium-priority improvements**.

---

## Step-by-Step Results

### Step 1: Token Parity -- PASS (100%)

**Light mode variables:** 78 variables in `:root`
**Dark mode variables:** 78 variables in `.dark` + 1 override (`--icon-duotone-opacity`)

**Result:** Perfect parity. Every variable defined in `theme-light.css` has a corresponding override in `theme-dark.css`. The `--icon-duotone-opacity` override (0.2 base -> 0.15 dark) is correctly handled via `theme-base.css` default + `.dark` override.

| Category | Light Count | Dark Count | Status |
|----------|-------------|------------|--------|
| Core colors | 2 | 2 | PASS |
| Card/Container | 4 | 4 | PASS |
| Popover | 2 | 2 | PASS |
| Primary brand | 6 | 6 | PASS |
| Secondary brand | 2 | 2 | PASS |
| Muted/Neutral | 2 | 2 | PASS |
| Accent | 2 | 2 | PASS |
| Destructive | 3 | 3 | PASS |
| Warning | 3 | 3 | PASS |
| Success | 3 | 3 | PASS |
| Info | 2 | 2 | PASS |
| Category colors | 8 | 8 | PASS |
| Borders | 4 | 4 | PASS |
| Input/Form | 3 | 3 | PASS |
| Sidebar | 8 | 8 | PASS |
| Glass | 4 | 4 | PASS |
| Shadows | 7 | 7 | PASS |
| Charts | 5 | 5 | PASS |
| Gradients | 15 | 15 | PASS |
| Logo | 3 | 3 | PASS |
| Icons | 8 | 8+1 | PASS |

**No missing tokens found.**

---

### Step 2: Shadow Duplication -- 6 DUPLICATES FOUND

Shadows are defined in **three** locations:

| Variable | `theme-base.css` | `theme-light.css` | `theme-dark.css` | Action |
|----------|:-:|:-:|:-:|--------|
| `--shadow-sm` | Line 327 | Line 458 | Line 464 | **REMOVE from base** |
| `--shadow-md` | Line 328 | Line 459 | Line 465 | **REMOVE from base** |
| `--shadow-lg` | Line 329 | Line 460 | Line 466 | **REMOVE from base** |
| `--shadow-xl` | Line 330 | Line 461 | Line 467 | **REMOVE from base** |
| `--shadow-hover` | Line 332 | Line 463 | Line 469 | **REMOVE from base** |
| `--shadow-2xl` | Line 331 | -- | -- | KEEP in base (mode-agnostic) |
| `--shadow-inner` | Line 333 | -- | -- | KEEP in base (mode-agnostic) |
| `--shadow-card-hover` | Line 334 | -- | -- | KEEP in base (mode-agnostic) |
| `--shadow-mega-menu` | Line 335 | -- | -- | KEEP in base (mode-agnostic) |
| `--shadow-subtle` | Line 336 | -- | -- | KEEP in base