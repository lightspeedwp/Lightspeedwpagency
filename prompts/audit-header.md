# Audit Header — Header Template Part Compliance

**Type:** Audit  
**Created:** 2026-03-18  
**Version:** 1.0.0  
**Status:** Ready  
**Trigger Word:** `audit header`

---

## Purpose

Audit all pages and templates to ensure they use a **single reusable header template part** that loads the correct **header pattern** based on site section. The header template part is the consistent wrapper; the patterns inside it vary by context (homepage, main site, dev tools, etc.).

---

## Architecture

```
HeaderTemplatePart (single component — always rendered)
├── HeaderHomePattern        → Homepage only (transparent, no breadcrumbs)
├── HeaderMainPattern        → Main site pages (solid, breadcrumbs, standard nav)
├── HeaderDevToolsPattern    → Dev tools section (different nav, branding, layout)
└── HeaderMinimalPattern     → Legal/utility pages (minimal, no mega-menu)
```

**Key principle:** Every page renders `<HeaderTemplatePart />`. The template part internally selects the correct pattern based on the current route or a `variant` prop.

---

## Prerequisites

1. Read `/guidelines/routes.md` — understand site sections and route prefixes.
2. Read `/guidelines/components/components-vs-patterns.md` — template part vs pattern distinction.
3. Read `/guidelines/patterns/pattern-catalog.md` — existing pattern inventory.

---

## Workflow

### Step 1: Identify the header template part

Search for the primary header component:

```
Pattern: HeaderTemplatePart, HeaderTemplate, SiteHeader, Header
Location: /src/app/components/templates/ or /src/app/components/parts/
```

Record:
- File path and component name
- Does it accept a `variant` or section prop?
- Does it use route detection to select patterns?

### Step 2: Inventory header patterns

Search for all header-related pattern components:

```
Pattern: Header*Pattern, HeaderHome, HeaderMain, HeaderDevTools, HeaderSimple
Location: /src/app/components/patterns/
```

Record each pattern:
- File path and component name
- What makes it unique (transparent bg, breadcrumbs, different nav, etc.)
- Which site sections should use it

### Step 3: Audit template usage

For every page template in `/src/app/components/templates/`:

1. Does it render the header template part? (not a pattern directly)
2. If it renders a pattern directly — that's a violation (should use the template part)
3. If it renders no header at all — flag as missing
4. Does the correct pattern load for that page's section?

**Section-to-pattern mapping:**

| Route prefix | Expected pattern | Key features |
|---|---|---|
| `/` (homepage only) | `HeaderHomePattern` | Transparent background, no breadcrumbs, hero-integrated |
| `/services/*`, `/solutions/*`, `/about/*`, `/blog/*`, `/contact/*` | `HeaderMainPattern` | Solid background, breadcrumbs, standard navigation |
| `/dev-tools/*` | `HeaderDevToolsPattern` | Dev tools branding, different navigation, tool-specific links |
| `/legal/*`, `/privacy/*`, `/terms/*` | `HeaderMinimalPattern` | Minimal nav, no mega-menu |

### Step 4: Check data file integration

1. Does a header data file exist? (e.g., `/src/data/mock/ui/header-data.ts`)
2. Does it contain navigation items, logo config, and section-specific overrides?
3. Are patterns populated from data files or hardcoded?

### Step 5: Check breadcrumb integration

For patterns that include breadcrumbs:
1. Is the breadcrumb component reusable?
2. Does it read from route data or is it hardcoded per page?
3. Is it excluded from the homepage pattern?

### Step 6: Write report

Save to `/reports/YYYY-MM/YYYY-MM-DD-header-audit.md` with:

| Section | Content |
|---|---|
| Template part status | Does a single header template part exist? |
| Pattern inventory | List of header patterns with section mapping |
| Template compliance | Per-template table: uses template part? correct pattern? |
| Data file status | Header data file exists? Used by patterns? |
| Breadcrumb status | Reusable? Route-driven? Excluded from homepage? |
| Violations | Direct pattern renders, missing headers, wrong patterns |

### Step 7: Create task list

Save to `/tasks/header-audit-tasks.md`.

---

## Success criteria

- [ ] Single header template part identified (or scaffolded)
- [ ] All page templates use the template part (not patterns directly)
- [ ] Correct pattern loads per site section
- [ ] Homepage pattern has no breadcrumbs and transparent background
- [ ] Dev tools pattern has distinct navigation
- [ ] Data file drives navigation content
- [ ] Report saved
- [ ] Task list saved
