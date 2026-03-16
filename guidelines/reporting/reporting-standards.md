# Reporting Guidelines — Standards & Structure

**Category:** Development  
**Version:** 1.2.0  
**Last Updated:** 2026-03-15  
**Status:** Active  
**Parent:** [reporting.md](../reporting.md)  

---

## Purpose

This document defines the standards for creating, naming, and organizing all project reports and documentation.

**Goals:**
- Consistent naming conventions (YYYY-MM-DD format)
- Logical organization structure
- Easy discoverability
- Chronological tracking
- Clear categorization

---

## CRITICAL RULE: NO REPORTS IN PROJECT ROOT

**ALL reports, session summaries, status updates, and documentation output MUST be created inside the `/reports/` directory. NEVER create `.md` files in the project root (`/`).**

**Enforcement:**
- FORBIDDEN: Creating any `.md` file in `/` (project root)
- FORBIDDEN: Creating reports in `/public/`, `/content/`, or `/src/`
- REQUIRED: All reports go in `/reports/[category]/YYYY-MM-DD-description.md`
- REQUIRED: All guidelines go in `/guidelines/`
- REQUIRED: All task tracking goes in `/tasks/`

---

## Directory Structure

```
reports/
├── architecture/          # System architecture reports
├── css-variables/         # CSS variables & design tokens
├── wordpress/             # WordPress compatibility reports
├── cleanup/               # File cleanup & optimization
├── migration/             # Migration reports
├── patterns/              # Pattern implementation reports
├── compliance/            # Design system compliance reports
├── performance/           # Performance & optimization reports
└── session-summaries/     # End-of-session summaries
```

**Note:** Reports are organized by category, NOT by date. The date is in the filename.

---

## Naming Conventions

### MANDATORY Format

```
YYYY-MM-DD-description.md
```

### Examples

**CORRECT:**
```
2025-01-09-global-styles-complete.md
2025-01-09-padding-first-architecture.md
2025-01-10-button-migration-phase-2.md
```

**INCORRECT:**
```
GLOBAL-STYLES-COMPLETE.md              # Missing date
global-styles-complete-jan-9.md        # Date at end
2025-1-9-global-styles.md              # Inconsistent date format
GlobalStylesComplete.md                 # Wrong case
```

---

## Categories

| Category | Path | Purpose |
|----------|------|---------|
| Architecture | `/reports/architecture/` | System architecture, design principles |
| CSS Variables | `/reports/css-variables/` | CSS variables, design tokens, theme.json |
| WordPress | `/reports/wordpress/` | WordPress compatibility, FSE, block patterns |
| Cleanup | `/reports/cleanup/` | File cleanup, deprecated code removal |
| Migration | `/reports/migration/` | Component migrations, system upgrades |
| Patterns | `/reports/patterns/` | Pattern implementation, library updates |
| Compliance | `/reports/compliance/` | Design system compliance, accessibility |
| Performance | `/reports/performance/` | Performance optimization, bundle size |
| Session Summaries | `/reports/session-summaries/` | End-of-session summaries, progress reports |

### Category Selection Guide

```
Is it about...

├─ System structure/organization? → architecture/
├─ CSS variables/design tokens? → css-variables/
├─ WordPress compatibility? → wordpress/
├─ Removing/cleaning files? → cleanup/
├─ Migrating components? → migration/
├─ Adding/updating patterns? → patterns/
├─ Design system compliance? → compliance/
├─ Performance/optimization? → performance/
└─ End of work session? → session-summaries/
```

---

## Common Mistakes to Avoid

**Missing Date Prefix:**
```
global-styles-complete.md       # WRONG
2025-01-09-global-styles-complete.md  # CORRECT
```

**Inconsistent Date Format:**
```
2025-1-9-report.md       # WRONG - Single digit
01-09-2025-report.md     # WRONG - Wrong order
2025-01-09-report.md     # CORRECT - ISO 8601
```

**Wrong Category:**
```
/reports/architecture/2025-01-09-button-styles.md  # WRONG → css-variables/
/reports/cleanup/2025-01-09-new-feature.md        # WRONG → patterns/
```

---

**See also:** [reporting-template.md](./reporting-template.md)
