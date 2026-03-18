# Audit Footer — Footer Template Part Compliance

**Type:** Audit  
**Created:** 2026-03-18  
**Version:** 1.0.0  
**Status:** Ready  
**Trigger Word:** `audit footer`

---

## Purpose

Audit all pages and templates to ensure they use a **single reusable footer template part** that loads the correct **footer pattern** based on site section. The main website and dev tools sections require different footer patterns, but both must render through the same template part.

---

## Architecture

```
FooterTemplatePart (single component — always rendered)
├── FooterMainPattern        → Main website (full footer: nav columns, newsletter, social, legal)
├── FooterDevToolsPattern    → Dev tools section (simplified: tool links, docs, different branding)
└── FooterMinimalPattern     → Legal/utility pages (copyright only, no nav columns)
```

**Key principle:** Every page renders `<FooterTemplatePart />`. The template part internally selects the correct pattern based on the current route or a `variant` prop.

---

## Prerequisites

1. Read `/guidelines/routes.md` — understand site sections and route prefixes.
2. Read `/guidelines/components/components-vs-patterns.md` — template part vs pattern distinction.

---

## Workflow

### Step 1: Identify the footer template part

Search for the primary footer component:

```
Pattern: FooterTemplatePart, FooterTemplate, SiteFooter, Footer
Location: /src/app/components/templates/ or /src/app/components/parts/
```

Record:
- File path and component name
- Does it accept a `variant` or section prop?
- Does it use route detection to select patterns?

### Step 2: Inventory footer patterns

Search for all footer-related pattern components:

```
Pattern: Footer*Pattern, FooterMain, FooterDevTools, FooterSimple, FooterNewsletter
Location: /src/app/components/patterns/
```

Record each pattern:
- File path and component name
- Content: nav columns, newsletter, social links, legal links, copyright
- Which site sections should use it

### Step 3: Audit template usage

For every page template in `/src/app/components/templates/`:

1. Does it render the footer template part? (not a pattern directly)
2. If it renders a pattern directly — violation
3. If it renders no footer — flag as missing
4. Does the correct pattern load for that page's section?

**Section-to-pattern mapping:**

| Route prefix | Expected pattern | Key features |
|---|---|---|
| `/services/*`, `/solutions/*`, `/about/*`, `/blog/*`, `/contact/*`, `/` | `FooterMainPattern` | Full nav columns, newsletter signup, social links, legal links, copyright |
| `/dev-tools/*` | `FooterDevToolsPattern` | Dev tools links, documentation links, different branding, simplified layout |
| `/legal/*`, `/privacy/*`, `/terms/*` | `FooterMinimalPattern` | Copyright and essential legal links only |

### Step 4: Check data file integration

1. Does a footer data file exist? (e.g., `/src/data/mock/ui/footer-data.ts`)
2. Does it contain nav column items, social links, legal links, and copyright text?
3. Are patterns populated from data files or hardcoded?

### Step 5: Check newsletter integration

1. Is the newsletter signup a separate pattern or embedded in the footer?
2. Is it excluded from dev tools and minimal footer patterns?
3. Does it use CSS variables for styling?

### Step 6: Write report

Save to `/reports/YYYY-MM/YYYY-MM-DD-footer-audit.md` with:

| Section | Content |
|---|---|
| Template part status | Does a single footer template part exist? |
| Pattern inventory | List of footer patterns with section mapping |
| Template compliance | Per-template table: uses template part? correct pattern? |
| Data file status | Footer data file exists? Used by patterns? |
| Newsletter status | Separate component? Correctly included/excluded? |
| Violations | Direct pattern renders, missing footers, wrong patterns |

### Step 7: Create task list

Save to `/tasks/footer-audit-tasks.md`.

---

## Success criteria

- [ ] Single footer template part identified (or scaffolded)
- [ ] All page templates use the template part (not patterns directly)
- [ ] Main site uses full footer pattern with nav columns and newsletter
- [ ] Dev tools uses simplified footer pattern with tool-specific links
- [ ] Data file drives footer content
- [ ] Report saved
- [ ] Task list saved
