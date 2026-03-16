# LSX Design — Figma Make Prototype Guidelines

**Category:** Core  
**Version:** 5.8.0  
**Last Updated:** 2026-03-16  
**Status:** Active  
**Template Used:** Canonical (no template — this IS the source of truth)

---

## Purpose

This is the **single source of truth** for all project standards. Every guideline file, prompt, report, and task list must align with the rules defined here. If a sub-guideline contradicts this file, **this file wins**.

**Business Context:** LSX Design is a WordPress and WooCommerce web design agency specializing in modern block themes, design systems, and accessible high-performance websites.

**Environment:** This project runs in **Figma Make**. Never suggest browser refresh, cache clearing, or terminal commands.

---

## Glossary

| Term | Definition |
|---|---|
| **Prompt** | A Markdown instruction file that tells the AI what to audit, build, or fix |
| **Orchestrator** | A master prompt that coordinates multiple sub-prompts in sequence |
| **Report** | A findings document generated after running a prompt |
| **Task List** | A checklist of actionable items derived from a report |
| **Pattern** | A reusable WordPress block pattern (section-level UI) |
| **Template** | A full-page layout composed of patterns |
| **Design Token** | A CSS variable representing a design decision (color, spacing, etc.) |
| **Trigger Word** | A short command that executes a predefined prompt |

---

## Trigger Words

See **[prompt-triggers.md](./prompt-triggers.md)** for full details and behaviour descriptions.

### Workflow (7)

| Trigger | What It Does |
|---|---|
| `cleanup` | Full 11-step audit + fix, then next open task |
| `continue` | Next open task from `/tasks/task-list.md` |
| `cleanup and continue` | Alias for `cleanup` (identical behavior) |
| `status` | Read-only project health dashboard |
| `changelog` | Update CHANGELOG with undocumented work |
| `sitemap` | Sync SiteMapTemplate with actual routes |
| `process reports` | Organize, rename, archive reports |

### Audits (19)

| Trigger | What It Does |
|---|---|
| `audit` | **Master orchestrator** — runs ALL audit sub-triggers sequentially |
| `audit routes` | Route map completeness audit (writes report) |
| `audit sitemap` | SiteMap vs routes diff audit (writes report) |
| `audit tokens` | CSS variable compliance (zero hardcoded values) |
| `audit css` | CSS architecture (imports, orphans, file sizes) |
| `audit a11y` | WCAG 2.1 AA accessibility compliance (quick) |
| `audit data` | Data file architecture (orphans, duplicates, types) |
| `audit responsive` | Responsive design (breakpoints, mobile, touch) |
| `audit styles` | Comprehensive styling audit (all of the above) |
| `audit guidelines` | Guideline file standards (frontmatter, headings, size) |
| `audit theme` | Light/dark mode token compliance and contrast |
| `audit style` | Funky Neon design language compliance |
| `audit webgl` | Canvas/WebGL inventory and integration safety |
| `audit routing` | Route integrity, link validation, logo navigation |
| `audit layout` | Visual integrity, containers, overflow, responsiveness |
| `audit functionality` | UI state wiring, dead UI detection, interaction flows |
| `audit accessibility` | Comprehensive WCAG 2.1 AA (focus, ARIA, touch targets) |
| `audit performance` | Render performance, assets, animations, WebGL impact |
| `audit images` | Broken image URLs, missing alt text, asset compliance |

### Scaffolds (3)

| Trigger | What It Does |
|---|---|
| `new template` | Scaffold a page template from patterns |
| `new pattern` | Scaffold a reusable block pattern |
| `new block` | Scaffold an atomic block component |

### Guidelines (2) & Release (1)

| Trigger | What It Does |
|---|---|
| `update guidelines` | Update content accuracy, frontmatter, template compliance |
| `cleanup guidelines` | Merge duplicates, deprecate outdated, restructure |
| `release` | Version bump: move Unreleased → versioned section |

### Code Quality (1)

| Trigger | What It Does |
|---|---|
| `apply bem` | Audit + fix missing BEM classes, map inline styles to existing CSS, flag token gaps |

---

## Folder Structure (Mandatory)

| Content Type | Location | Notes |
|---|---|---|
| **Prompts** | `/prompts/` | Single prompts in root. Orchestrators get a sub-folder. |
| **Reports** | `/reports/` | Date-prefixed. See [prompts.md](./prompts.md). |
| **Tasks** | `/tasks/` | General tasks in `task-list.md`. See [housekeeping.md](./housekeeping.md). |
| **Guidelines** | `/guidelines/` | All guideline files. This file is canonical. |
| **Documentation** | `/docs/` | General project docs only. |
| **Scripts** | `/scripts/` | All shell/utility scripts. Never in root. |

### Root Directory — Only 3 Permitted `.md` Files

| File | Purpose | Protected |
|---|---|---|
| `README.md` | Project README ([Readme-Guidelines.md](./Readme-Guidelines.md)) | ✅ Never delete |
| `CHANGELOG.md` | Project changelog ([Changelog-Guidelines.md](./Changelog-Guidelines.md)) | ✅ Never delete |
| `ATTRIBUTIONS.md` | License attributions | ✅ Never delete |

**NEVER create any other `.md` files in root.** All plans and tasks go in `/tasks/task-list.md`. Any guideline `.md` files found in root MUST be moved to `/guidelines/`. Any other `.md` files should be moved to the correct folder or deleted during cleanup.

---

## Task Management

**Full rules:** [housekeeping.md](./housekeeping.md)

- `/tasks/task-list.md` is the single general-purpose tracker. **Never delete it.**
- **ALL new tasks** must be added here with checkboxes (`- [ ] Task`).
- Named task lists use `/tasks/[initiative-name]-task-list.md`.
- Task lists are created **ONLY after** the prompt has fully completed its audit/report.

---

## Prompt Workflow

**Full rules:** [prompts.md](./prompts.md)

1. **Update guidelines first** — ensure referenced guidelines reflect current codebase.
2. **Create the prompt** → `/prompts/`.
3. **Run the audit** → execute against codebase.
4. **Save the report** → `/reports/YYYY-MM/`.
5. **Create the task list** → `/tasks/` (only after report is complete).

---

## Protected Files

**Full list:** [housekeeping.md](./housekeeping.md)

| File | Location |
|---|---|
| `CHANGELOG.md` | `/CHANGELOG.md` |
| `README.md` | `/README.md` |
| `ATTRIBUTIONS.md` | `/ATTRIBUTIONS.md` |
| `task-list.md` | `/tasks/task-list.md` |
| `master-task-list.md` | `/tasks/master-task-list.md` |
| `Guidelines.md` | `/guidelines/Guidelines.md` |
| All service templates | `/src/app/components/templates/*Service*.tsx` |

**NEVER DELETE COMPLETED SERVICE PAGES.**

---

## File Size & Documentation Standards

**Full rules:** [build-rules.md](./build-rules.md) | [writing-guidelines.md](./writing-guidelines.md)

- `.md` guidelines: max 350 lines. Split into sub-files if over.
- `.tsx` components: max 300 lines. Extract sub-components.
- `.css` files: max 400 lines. Split into sub-files.
- Every `.md` file needs frontmatter (Category, Version, Last Updated, Status).
- One H1 per file. Sequential headings. Self-contained sections.

---

## Design System Compliance

- **ALL UI** must use CSS variables from `/src/styles/` — colors, spacing, borders, radius, typography.
- **Typography:** ONLY font faces defined in CSS. Never hardcode font names.
- **Headings:** Always use **sentence case** (capitalise only the first word and proper nouns). Never title case. Example: "Performance & accessibility features" not "Performance & Accessibility Features".
- **Colours:** Semantic CSS variables only. Never hardcode hex values.
- **Neon colours:** Neon-bright foreground colours (neon-cyan, neon-pink, neon-lime, neon-yellow) must **only** appear against dark backgrounds (`var(--color-black)` or equivalent). Never use neon foreground text/icons on light surfaces — insufficient contrast. Cards or sections using neon accents must force a dark surface regardless of light/dark mode.
- **Spacing:** `var(--spacing-*)` tokens only. Never hardcode `px` or `rem`.
- **Icons:** `@phosphor-icons/react` only. Zero `lucide-react` imports.
- **Router:** `react-router` only. Never `react-router-dom`.
- **Classes:** `.wp-*` prefix for WordPress. No Tailwind utility classes.
- **Content Scope:** Marketing and service portal only. No e-commerce features.

---

## System Principles (Non-Negotiable)

1. **System-first, not page-first** — Build reusable patterns.
2. **Patterns over bespoke layouts** — If it cannot be a pattern, it does not belong.
3. **100% CSS variable compliance** — Zero hardcoded values.
4. **Font family enforcement** — Only CSS variable font faces.
5. **WordPress utility classes only** — `.wp-*` prefixed classes.
6. **Inline styles for dynamic values only** — CSS variables in `style` attributes.
7. **Padding-first architecture** — Use padding and gap. Avoid margin.
8. **Accessibility is mandatory** — Keyboard, focus, semantics, reduced motion.
9. **Small files over large files** — Split any file exceeding size limits.

---

## Reading Order for AI Agents

| Step | What to Read | File |
|---|---|---|
| 0 | Site structure | [routes.md](./routes.md) |
| 1 | Component system | [components/components-vs-patterns.md](./components/components-vs-patterns.md) |
| 1 | Icon system | [design-tokens/iconography.md](./design-tokens/iconography.md) |
| 2 | Design tokens (ALL) | [design-tokens/](./design-tokens/) |
| 3 | WordPress mapping | [wordpress-mapping.md](./wordpress-mapping.md) |
| 3 | Pattern catalog | [patterns/pattern-catalog.md](./patterns/pattern-catalog.md) |
| 3 | Page archetypes | [templates/page-archetypes.md](./templates/page-archetypes.md) |
| 4 | Specific guidelines | Read BEFORE using any component |
| 5 | Icon verification | Verify icon exists BEFORE importing |

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
| Changelog | [Changelog-Guidelines.md](./Changelog-Guidelines.md) |
| README | [Readme-Guidelines.md](./Readme-Guidelines.md) |
| Data Files | [data-files.md](./data-files.md) |
| Prompts | [prompts.md](./prompts.md) |
| Housekeeping | [housekeeping.md](./housekeeping.md) |
| Build Rules | [build-rules.md](./build-rules.md) |
| Writing Docs | [writing-guidelines.md](./writing-guidelines.md) |
| Accessibility | [accessibility.md](./accessibility.md) |
| QA Checklist | [qa-checklist.md](./qa-checklist.md) |

---

## Version History

| Version | Date | Changes |
|---|---|---|
| 5.8.0 | 2026-03-16 | Added neon color rule to Design System Compliance. Neon-bright foreground colours must only appear against dark backgrounds (`var(--color-black)` or equivalent). Cards or sections using neon accents must force a dark surface regardless of light/dark mode |
| 5.7.0 | 2026-03-16 | Added sentence case heading rule to Design System Compliance. All UI headings must use sentence case — never title case |
| 5.6.0 | 2026-03-16 | Added `audit images` trigger. Audit triggers 18 → 19. Total triggers 32 → 33 |
| 5.5.0 | 2026-03-16 | Added `apply bem` code quality trigger. New Code Quality category. Total triggers 31 → 32 |
| 5.4.0 | 2026-03-15 | Expanded audit triggers from 10 → 18. Added theme, style, webgl, routing, layout, functionality, accessibility, performance audits. Total triggers 23 → 31 |
| 5.3.0 | 2026-03-15 | Expanded audit triggers from 7 → 10 (`audit` orchestrator, `audit routes`, `audit sitemap`). Updated trigger count 20 → 23 |
| 5.2.1 | 2026-03-15 | Added Protected column to root .md table, strengthened cleanup language for root enforcement |
| 5.2.0 | 2026-03-15 | Expanded trigger table from 4 → 20 triggers across 5 categories |
| 5.1.0 | 2026-03-15 | Slimmed from 329 to ~210 lines. Moved prompt workflow to prompts.md, task management to housekeeping.md, file size rules to build-rules.md, markdown rules to writing-guidelines.md |
| 5.0.0 | 2026-03-15 | Major rewrite: task management, root file restrictions, prompt workflow, file size guidelines |
| 4.5 | 2026-03-14 | Design system compliance, prompt triggers, protected files |
| 4.0 | 2026-03-11 | Folder structure, system principles |

---

**Last Updated:** March 16, 2026  
**Design System:** LSX Design  
**WordPress Compatibility:** FSE (Full Site Editing)  
**Total Routes:** ~172 | **Total Templates:** 130+