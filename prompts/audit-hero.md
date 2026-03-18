# Audit Hero — Hero Template Part Compliance

**Type:** Audit  
**Created:** 2026-03-18  
**Version:** 1.0.0  
**Status:** Ready  
**Trigger Word:** `audit hero`

---

## Purpose

Audit every page and template to ensure they all use a **single reusable hero template part** that loads the correct **hero pattern** based on page type. Each hero layout is a separate pattern component populated by typed data files. No page should render a bespoke hero — every hero must go through the template part.

---

## Architecture

```
HeroTemplatePart (single component — always rendered on every page)
├── HeroHomePattern          → Homepage (animated, WebGL, full-bleed, primary CTA)
├── HeroServicePattern       → Service pages (service icon, description, stats, neon accent)
├── HeroSolutionPattern      → Solution pages (solution overview, feature highlights)
├── HeroBlogPattern          → Blog listing / archive (search, filter, featured post)
├── HeroPostPattern          → Single blog post (title, author, date, reading time, cover image)
├── HeroAboutPattern         → About pages (team, mission, company story)
├── HeroDevToolsPattern      → Dev tools pages (tool icon, description, version, status badge)
├── HeroContactPattern       → Contact page (heading, subheading, minimal)
├── HeroLegalPattern         → Legal pages (title, last updated date, minimal)
├── HeroCaseStudyPattern     → Case study pages (client logo, project title, metrics)
└── HeroGenericPattern       → Fallback for any page without a specific pattern
```

**Key principle:** Every page renders `<HeroTemplatePart />`. The template part selects the pattern via a `variant` prop or route detection. Patterns are stateless — all content comes from data files.

---

## Data file architecture

Each hero pattern type should have a corresponding data file:

| Data file | Powers | Location |
|---|---|---|
| `HOMEPAGE_HERO_DATA.ts` | HeroHomePattern | `/src/data/mock/ui/` |
| `SERVICE_HERO_DATA.ts` | HeroServicePattern (all service pages) | `/src/data/mock/ui/` |
| `SOLUTION_HERO_DATA.ts` | HeroSolutionPattern (all solution pages) | `/src/data/mock/ui/` |
| `BLOG_HERO_DATA.ts` | HeroBlogPattern + HeroPostPattern | `/src/data/mock/ui/` |
| `ABOUT_HERO_DATA.ts` | HeroAboutPattern | `/src/data/mock/ui/` |
| `DEV_TOOLS_HERO_DATA.ts` | HeroDevToolsPattern (all dev tool pages) | `/src/data/mock/ui/` |
| `CONTACT_HERO_DATA.ts` | HeroContactPattern | `/src/data/mock/ui/` |
| `LEGAL_HERO_DATA.ts` | HeroLegalPattern (all legal pages) | `/src/data/mock/ui/` |
| `CASE_STUDY_HERO_DATA.ts` | HeroCaseStudyPattern | `/src/data/mock/ui/` |

**Data file structure example (`DEV_TOOLS_HERO_DATA.ts`):**

```typescript
export interface DevToolsHeroEntry {
  slug: string;
  title: string;
  description: string;
  icon: string;           // Phosphor icon name
  iconWeight: string;     // Phosphor weight
  version?: string;
  statusBadge?: string;   // 'stable' | 'beta' | 'experimental'
  accentColor?: string;   // CSS variable for neon accent
}

export const DEV_TOOLS_HERO_DATA: Record<string, DevToolsHeroEntry> = {
  'phosphor-icon-reference': {
    slug: 'phosphor-icon-reference',
    title: 'Phosphor icon reference',
    description: 'Browse and search the complete Phosphor icon set with weight previews.',
    icon: 'MagnifyingGlass',
    iconWeight: 'duotone',
    version: '2.1.10',
    statusBadge: 'stable',
    accentColor: 'var(--wp--preset--color--neon-cyan)'
  },
  // ... more entries
};
```

---

## Prerequisites

1. Read `/guidelines/routes.md` — all route prefixes and page types.
2. Read `/guidelines/components/components-vs-patterns.md` — template part vs pattern.
3. Read `/guidelines/templates/page-archetypes.md` — page type definitions.
4. Read `/guidelines/patterns/pattern-catalog.md` — existing pattern inventory.

---

## Workflow

### Step 1: Identify the hero template part

Search for the primary hero component:

```
Pattern: HeroTemplatePart, HeroTemplate, Hero, SiteHero, PageHero
Location: /src/app/components/templates/, /src/app/components/parts/, /src/app/components/patterns/
```

Record:
- File path and component name
- Does it accept a `variant` prop?
- Does it use route detection?
- Does it delegate to pattern components?

### Step 2: Inventory hero patterns

Search for all hero-related pattern components:

```
Pattern: Hero*, HeroHome, HeroService, HeroSplash, HeroDevTools
Location: /src/app/components/patterns/
```

Record each pattern:
- File path and component name
- Layout type (full-bleed, standard, minimal, etc.)
- Data source (data file, props, hardcoded)
- WebGL integration (if any)
- Which page types use it

### Step 3: Inventory hero data files

Search `/src/data/` for hero-related data:

```
Pattern: *HERO*, *hero*
```

Record:
- File path
- TypeScript interface defined?
- Number of entries
- Which pattern consumes it

### Step 4: Audit every template

For **every** page template in `/src/app/components/templates/`:

1. Does it render the hero template part? (not a pattern directly)
2. If it renders a hero pattern directly — violation (must use template part)
3. If it renders a bespoke/inline hero section — critical violation
4. If it renders no hero — flag (some pages may intentionally skip)
5. Does the correct pattern load for that page type?
6. Is the pattern populated from a data file?

**Classification per template:**

| Status | Meaning |
|---|---|
| ✅ COMPLIANT | Uses HeroTemplatePart, correct pattern, data-driven |
| ⚠️ PARTIAL | Uses correct pattern but not via template part |
| ❌ VIOLATION | Bespoke hero, wrong pattern, or hardcoded content |
| ⬜ SKIP | Intentionally no hero (e.g., modal pages, utility pages) |

### Step 5: Check data file coverage

For each page type:
1. Does a data file exist for its hero pattern?
2. Does the data file have an entry for every page of that type?
3. Are data files typed with TypeScript interfaces?
4. Do entries include all required fields (title, description, icon, etc.)?

### Step 6: Check design system compliance

For each hero pattern:
1. All colours use CSS variables — zero hardcoded hex
2. All spacing uses `var(--spacing-*)` tokens
3. Typography uses `var(--font-primary)` or `var(--font-secondary)` only
4. Headings use sentence case
5. Icons use `@phosphor-icons/react` with `weight` and `size` props
6. Dark background for neon accents
7. BEM classes (`.wp-hero-*`) — no Tailwind utilities

### Step 7: Write report

Save to `/reports/YYYY-MM/YYYY-MM-DD-hero-audit.md` with:

| Section | Content |
|---|---|
| Template part status | Does a single hero template part exist? |
| Pattern inventory | List of hero patterns with page type mapping |
| Data file inventory | List of hero data files with coverage |
| Template compliance | Per-template table with status classification |
| Data coverage gaps | Pages without data file entries |
| Design system violations | CSS variable / typography / icon compliance |
| Architecture violations | Bespoke heroes, direct pattern renders |

### Step 8: Create task list

Save to `/tasks/hero-audit-tasks.md`.

---

## Success criteria

- [ ] Single hero template part exists (or scaffolded)
- [ ] All page templates use the template part (not patterns directly)
- [ ] Each page type has a dedicated hero pattern
- [ ] Each hero pattern has a corresponding data file
- [ ] Data files have entries for every page of their type
- [ ] Data files use TypeScript interfaces
- [ ] All hero patterns are 100% design system compliant
- [ ] Zero bespoke/inline hero sections
- [ ] Report saved
- [ ] Task list saved
