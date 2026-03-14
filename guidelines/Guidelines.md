# LSX Design — Figma Make Prototype Guidelines

These guidelines define how to build the **LSX Design prototype** in **Figma Make** so it can be implemented as a **WordPress block theme** with a clean, scalable architecture.

This prototype validates:
- content structure and layout patterns
- editor workflow (patterns/templates/parts)
- token discipline (`theme.json` presets)
- accessibility and responsive behaviour

It does **not** validate:
- brand exploration, decorative styling, or bespoke page design
- experimental layout variants that cannot map to WordPress blocks

**Business Context:** LSX Design is a WordPress and WooCommerce web design agency specializing in modern block themes, design systems, and accessible high-performance websites.

---

## Prompt Trigger Words (Quick Commands)

The following trigger words can be used instead of full prompts. See **[prompt-triggers.md](./prompt-triggers.md)** for complete details.

| Trigger | What It Does |
|---|---|
| **`cleanup`** | Runs `/prompts/cleanup.md` (full audit + fix), then automatically runs `/prompts/continue.md` (next task) |
| **`continue`** | Runs `/prompts/continue.md` only (picks up next open task) |

**Environment:** This project runs in **Figma Make**. Never suggest browser refresh, cache clearing, or terminal commands.

---

## CRITICAL: Project Organisation Rules (Non-Negotiable)

**These rules apply to EVERY task, prompt, report, and file created in this project. Read them FIRST.**

### Folder Structure (Mandatory)

| Content Type | Location | Notes |
|---|---|---|
| **Prompts** | `/prompts/` | One `.md` file per prompt. Multi-step prompts use a sub-folder with `00-ORCHESTRATOR.md` master file. |
| **Reports** | `/reports/` | Date-prefixed or sub-folder for related sets (e.g. `/reports/2026-02/strategy-audit/`). |
| **Tasks** | `/tasks/` | One task list per orchestrator prompt. General open tasks go in `/tasks/task-list.md`. |
| **Guidelines** | `/guidelines/` | All guideline files. Sub-folders by category. The canonical reference is `/guidelines/Guidelines.md`. |
| **Documentation** | `/docs/` | General project docs (quick references, attributions, org guides). NOT guidelines or reports. |
| **Scripts** | `/scripts/` | All shell scripts (`.sh`) and utility scripts (`.ts`, `.py`). Never in root. |

### The General Task List (`/tasks/task-list.md`)

- **This file must always exist and must NEVER be deleted.**
- It is the single all-purpose open task tracker for the project.
- When any work generates follow-up actions, add them to this file.
- Completed tasks should be checked off (`[x]`) but kept for reference.
- Periodically archive completed tasks to a dated file in `/tasks/archive/`.

### Protected Files (Must Never Be Deleted)

| File | Location | Purpose |
|---|---|---|
| **`CHANGELOG.md`** | `/CHANGELOG.md` (root) | Project changelog following [Keep a Changelog](https://keepachangelog.com/en/1.1.0/) format |
| **`README.md`** | `/README.md` (root) | Project README |
| **`ATTRIBUTIONS.md`** | `/ATTRIBUTIONS.md` (root) | License attributions (shadcn/ui, Unsplash) |
| **`task-list.md`** | `/tasks/task-list.md` | General open task tracker |
| **`master-task-list.md`** | `/tasks/master-task-list.md` | Consolidated task view |
| **`Guidelines.md`** | `/guidelines/Guidelines.md` | Canonical project guidelines |

**See:** [housekeeping.md](./housekeeping.md) for complete protected files list and cleanup rules

**CRITICAL RULE: NEVER DELETE COMPLETED SERVICE PAGES**

Service template files must NEVER be deleted, even during consolidation. Service "consolidation" means **organizing services into parent/child relationships**, NOT deleting template files.

**Changelog Maintenance:**
- `CHANGELOG.md` must follow **Keep a Changelog v1.1.0** format and **Semantic Versioning 2.0.0**
- See [changelog-maintenance.md](./changelog-maintenance.md) for full standards

### Prompt Workflow (Default Sequence)

When asked to "write a prompt" or "create an audit", always follow this sequence:

1. **Create the prompt** → Save to `/prompts/`
2. **Run the audit/task** described in the prompt against the codebase
3. **Save findings** → Write report to `/reports/`
4. **Create a task list** → Save actionable items to `/tasks/`

### Root Directory Rules

- The project root (`/`) must contain ONLY configuration files and two permitted `.md` files: `README.md` and `CHANGELOG.md`.
- **NO reports, tasks, prompts, guideline files, or documentation in the root.** Ever.
- **NO `.sh` script files in the root.** All shell scripts MUST be created in `/scripts/`.
- **General documentation** belongs in `/docs/`.

### Design System Compliance (All Generated UI)

- **ALL generated UI MUST use CSS variables** from the updated Tailwind CSS configuration and `/src/styles/global.css` for colors, spacing, borders, radius, and typography.
- **For typography, ONLY use font faces defined in the CSS.** Never hardcode font family names.
- **Users must be able to change the entire site's styling by updating CSS files alone.** No hardcoded inline style values or custom BEM classes outside of the permitted system.
- **Colours:** Always use semantic CSS variables. Never hardcode hex values.
- **Spacing:** Always use `var(--spacing-*)` tokens. Never hardcode `px` or `rem` values.
- **Border radius:** Always use `var(--radius)`, `var(--radius-lg)`, etc.
- **Font sizes:** Always use `var(--text-h1)` through `var(--text-h6)` for headings.
- **Content Scope:** This website serves purely as a marketing and service portal. It features solutions and service-type content pages (including WooCommerce solutions). **All functional e-commerce components (Cart, Checkout, Product Archives, Mock Products) have been removed.** Do not build or introduce any e-commerce functional features.

---

**Project Status:** See [/docs/implementation-status.md](/docs/implementation-status.md) for complete project status and milestones.

---

## How to Use These Guidelines

**IMPORTANT:** This is the **canonical reference**. All other guideline files expand on these principles and must not contradict them.

### Reading Order for AI Agents

Follow these steps **IN ORDER** before writing any code:

#### Step 0: Understand Site Structure (REQUIRED)
- **[routes.md](./routes.md)** -- Site structure, navigation, page hierarchy

#### Step 1: Read Overview Files (REQUIRED)
- **[components/components-vs-patterns.md](./components/components-vs-patterns.md)** -- Component system overview
- **[design-tokens/iconography.md](./design-tokens/iconography.md)** -- Icon system and usage

#### Step 2: Read Design Tokens (REQUIRED)
Read **ALL** files in the `design-tokens/` folder:
- **[design-tokens/colors.md](./design-tokens/colors.md)** -- Color system
- **[design-tokens/typography.md](./design-tokens/typography.md)** -- Typography hierarchy
- **[design-tokens/spacing.md](./design-tokens/spacing.md)** -- Spacing scale
- **[design-tokens/css-variables-overview.md](./design-tokens/css-variables-overview.md)** -- Complete token system
- **[design-tokens/token-examples.md](./design-tokens/token-examples.md)** -- Practical code examples

#### Step 3: Read WordPress System Overviews (REQUIRED)
- **[wordpress-mapping.md](./wordpress-mapping.md)** -- WordPress blocks & FSE system
- **[patterns/pattern-catalog.md](./patterns/pattern-catalog.md)** -- Block patterns catalog
- **[components/non-block-components.md](./components/non-block-components.md)** -- Non-block components (template parts, utilities)
- **[templates/page-archetypes.md](./templates/page-archetypes.md)** -- Page templates & archetypes

#### Step 4: Read Component Guidelines BEFORE Using Components (REQUIRED)
**BEFORE using ANY component**, read its specific guidelines file:
- Using patterns? → Read **[patterns/pattern-catalog.md](./patterns/pattern-catalog.md)** FIRST
- Using non-block components? → Read **[components/non-block-components.md](./components/non-block-components.md)** FIRST
- Using design tokens? → Read **[design-tokens/css-variables-overview.md](./design-tokens/css-variables-overview.md)** FIRST

#### Step 5: Verify Icons BEFORE Import (REQUIRED)
**BEFORE using ANY icon**, verify it exists and read the appropriate guidelines:
- **ALWAYS** verify icon exists using bash tool before importing

**DO NOT write code using a component or icon until you have read its specific guidelines.**

---

## Maintaining Guidelines Files

When updating or creating any guidelines in this project, the following rules MUST be adhered to:

1. **Versioning:** Every guideline file must have a version number. Every time you edit a file, increment the version (e.g., `1.0.1` for minor patches/updates, `1.1.0` for major additions).
2. **Template Usage:** All new or updated guidelines MUST follow a template from `/guidelines/_templates/`.
3. **Header Format:** Every file must start with a standardized header indicating the Category, Version, Last Updated date, Status, and Template Used.
4. **Accuracy vs Codebase:** Ensure that all documented CSS variables, tokens, and font values perfectly reflect what is currently implemented in `/src/styles/` (specifically `theme-base.css`, `theme-funky.css`, and `theme-light.css/theme-dark.css`).
5. **No Deleted Legacy Pages:** Do not delete legacy documentation unless explicitly consolidated; use deprecation notices or proper consolidation commits.

---

## Documentation Structure

For complete navigation, see **[strategy/README.md](./strategy/README.md)**.

**Complete File Index:** See the `design-tokens/`, `components/`, `patterns/`, `templates/`, and `strategy/` subdirectories for all guideline files.

---

## System Principles (Non-Negotiable)

1. **System-first, not page-first** - Build reusable patterns. Pages are composed, not designed.

2. **Patterns over bespoke layouts** - If it can't be a pattern, it doesn't belong in the system.

3. **Design System Architecture (CRITICAL)** - ALL styling and UI generation must use CSS variables from the updated Tailwind CSS configuration and `/styles/global.css`. Avoid hardcoded inline styling or custom BEM classes outside of what is specified. 

4. **WordPress utility classes ONLY** - Use `.wp-*` prefixed classes where applicable. 

5. **100% CSS variable compliance** - All colors, spacing, typography, and border radius MUST use CSS variables. NO hardcoded values.

6. **Font family enforcement** - ONLY use font faces defined in the CSS. NEVER hardcode font names.

7. **Inline styles for dynamic values ONLY** - Use `style` attributes ONLY for truly dynamic values with CSS variables.

8. **Padding-First Architecture** - Use padding and gap for spacing. Avoid margin except for centering.

9. **WordPress-native thinking** - Prefer core blocks and block styles.

10. **Accessibility is mandatory** - Keyboard operation, focus visibility, correct semantics, reduced motion support.

11. **No reports in project root** - ALL reports go in `/reports/`, ALL guidelines in `/guidelines/`, ALL tasks in `/tasks/`.

---

## Project Goals

**See:** [project-goals.md](./project-goals.md) for complete goals, success criteria, and KPIs.

### Primary Goals
- Create a **design-system prototype** that maps directly to WordPress FSE
- Establish a reusable **pattern catalogue** for LSX sites
- Make the prototype **editor-realistic**

### Success Criteria
- Every screen is an instance of a recognised **archetype**
- Every section is an instance of a registered **pattern**
- All spacing/typography/colour references are **token-based**
- Accessibility rules are enforced everywhere

---

## Centralized Data System

**See:** [data-files.md](./data-files.md) — All mock data centralized in `/src/app/data/` for consistency, type safety, and reusability.

**Core Data Files:**
- `pages.ts` - Site navigation & page metadata
- `portfolio.ts` - Portfolio projects & case studies
- `posts.ts` - Blog posts & authors
- `faqs.ts` - FAQ collections

**System Benefits:**
1. Single Source of Truth
2. Type Safety
3. WordPress-Ready
4. Reusability
5. Token-Driven

---

## Design Tokens & CSS Variables

**See:** [design-tokens/css-variables-overview.md](./design-tokens/css-variables-overview.md) for complete token system

**CRITICAL:** All UI generation MUST use CSS variables. Never hardcode values.

| Category | Examples | Full Guide |
|---|---|---|
| Typography | `var(--font-primary)`, `var(--text-h1)` | [typography.md](./design-tokens/typography.md) |
| Spacing | `var(--spacing-6)`, `var(--spacing-8)` | [spacing.md](./design-tokens/spacing.md) |
| Colors | `var(--primary)`, `var(--foreground)` | [colors.md](./design-tokens/colors.md) |
| Borders & Radii | `var(--radius)`, `var(--radius-lg)` | [radii.md](./design-tokens/radii.md), [borders.md](./design-tokens/borders.md) |
| Shadows | `var(--shadow-md)`, `var(--shadow-lg)` | [shadows.md](./design-tokens/shadows.md) |
| Animations | `var(--transition-base)`, `var(--ease-out)` | [animations.md](./design-tokens/animations.md) |
| Dark/Light Mode | Theme-aware color overrides | [dark-light-mode.md](./design-tokens/dark-light-mode.md) |

**All design token files:** [design-tokens/](./design-tokens/) | [token-examples.md](./design-tokens/token-examples.md) for code examples

---

## Layout & Responsive System

**See:** [responsive.md](./design-tokens/responsive.md) — 12 responsive breakpoints, fluid typography via `clamp()`, 1→2→3-4 column responsive grids.

---

## WordPress System

**See:** [wordpress-mapping.md](./wordpress-mapping.md) for blocks, utilities, FSE mapping, and `.wp-*` class reference.

| Topic | Guide |
|---|---|
| Page Archetypes (5 fixed) | [templates/page-archetypes.md](./templates/page-archetypes.md) |
| Pattern Catalogue (10 categories) | [patterns/pattern-catalog.md](./patterns/pattern-catalog.md) |
| Components vs Patterns | [components/components-vs-patterns.md](./components/components-vs-patterns.md) |
| Non-Block Components | [components/non-block-components.md](./components/non-block-components.md) |

---

## Accessibility (WCAG 2.1 AA)

**See:** [accessibility.md](./accessibility.md) for complete checklist including structure, interaction, motion, and touch targets.

---

## Build Rules & QA

| Topic | Guide |
|---|---|
| Prototype Build Rules | [build-rules.md](./build-rules.md) |
| QA / Acceptance Checklist | [qa-checklist.md](./qa-checklist.md) |

---

## Quick Reference

| Need... | Guide |
|---|---|
| Spacing | [design-tokens/spacing.md](./design-tokens/spacing.md) |
| Typography | [design-tokens/typography.md](./design-tokens/typography.md) |
| Colors | [design-tokens/colors.md](./design-tokens/colors.md) |
| Components | [components/components-vs-patterns.md](./components/components-vs-patterns.md) |
| Icons | [design-tokens/iconography.md](./design-tokens/iconography.md) |
| Touch Targets | [design-tokens/touch-targets.md](./design-tokens/touch-targets.md) |
| Navigation | [routes.md](./routes.md) |
| Templates | [_templates.md](./_templates.md) |

---

**Last Updated:** March 14, 2026  
**System Version:** 4.5  
**Design System:** LSX Design  
**WordPress Compatibility:** FSE (Full Site Editing)  
**Total Routes:** ~172  
**Total Template Files:** 130+