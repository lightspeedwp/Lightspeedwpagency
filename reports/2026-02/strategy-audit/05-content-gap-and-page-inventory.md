# Content Gap and Page Inventory Audit Report

**Date:** February 25, 2026
**Auditor:** AI (Orchestrator Prompt v1.0)
**Source Prompt:** `/prompts/strategy-audit/05-content-gap-and-page-inventory.md`

---

## Executive Summary

The prototype has **117 routes** across **90+ template files**, providing comprehensive coverage of traditional agency content (services, solutions, portfolio, blog, e-commerce, media). However, the entire **Systems hub (6 pages)** is missing, **4 definitional pages** are missing, and **3 topic clusters** have no anchor content. The current service taxonomy (22 individual service pages) creates redundancy that should be consolidated into the three-tier model. Additionally, **15+ legacy/dev-tools templates** can be excluded from production scope, reducing the production page count to ~95 meaningful pages.

---

## 1. Missing Strategic Pages

### Systems Hub (Priority 1 — ALL MISSING)

- [ ] `/systems/` — Systems landing page (hub)
- [ ] `/systems/design-tokens-theme-json/` — Token governance system page
- [ ] `/systems/pattern-library-governance/` — Pattern governance system page
- [ ] `/systems/editorial-workflow-engineering/` — Editorial workflows system page
- [ ] `/systems/ai-search-readiness/` — AI search engineering system page
- [ ] `/systems/performance-reliability/` — Performance engineering system page

**Impact:** Without these pages, the "Structured Publishing Systems" positioning has no content home. This is the single biggest gap.

### Definitional Pages (Priority 2 — ALL MISSING)

- [ ] "What is a structured publishing system?" — Category definition page
- [ ] "Design token governance in WordPress" — Definitional content
- [ ] "Block pattern governance" — Definitional content
- [ ] "Progressive interactivity in WordPress" — Interactivity API overview

**Impact:** These pages anchor the entity reinforcement strategy for AI search and establish thought leadership.

### Topic Cluster Anchors (Priority 3 — MISSING)

- [ ] Publishing systems cluster anchor (content modelling, editorial workflows)
- [ ] Commerce systems cluster anchor (WooCommerce systems, conversion)
- [ ] Design system cluster anchor (Figma-to-theme.json, patterns)

**Impact:** Without cluster anchors, the Insights section has no topical organisation for AI search and entity reinforcement.

### AI Thought Leadership (Priority 3 — MISSING)

- [ ] "AI features and your website" — Practical guidance page
- [ ] "How to ensure your site is available in ChatGPT search" — Crawl inclusion guide

---

## 2. Service-to-Systems Mapping

| Current Service Page | Route | Proposed Three-Tier Mapping | Action |
|---|---|---|---|
| Discovery | `/services/discovery` | Foundation: System Architecture Sprint | RENAME |
| Design | `/services/design` | Foundation: Tokenised Design System | RENAME |
| Development | `/services/development` | Foundation: WordPress System Implementation | RENAME |
| Content | `/services/content` | Growth: Structured Content Operations | RENAME |
| Content Strategy | `/services/content/strategy` | Growth: merge into Content Ops | MERGE |
| Content Collection | `/services/content/collection` | Growth: merge into Content Ops | MERGE |
| Content Audit | `/services/content/audit` | Growth: merge into Content Ops | MERGE |
| SEO | `/services/seo` | Growth: merge into AI Search Readiness | MERGE into Systems |
| Performance | `/services/performance` | Foundation/Systems: cross-linked | MOVE to Systems |
| Accessibility | `/services/accessibility` | Foundation: included in System Implementation | FOLD IN |
| Security | `/services/security` | Foundation: Platform Operations | FOLD IN |
| Migrations | `/services/migrations` | Foundation: Solutions page section | FOLD IN |
| Support | `/services/support` | Foundation: Platform Operations | RENAME |
| Hosting | `/services/hosting` | Foundation: Performance Infrastructure | RENAME |
| Newsletter | `/services/newsletter` | Growth: merge into Content Ops | MERGE |
| Email Marketing | `/services/email-marketing` | Growth: merge into Content Ops | MERGE |
| Training | `/services/training` | Foundation: included in all tiers | FOLD IN |
| AI Engine Optimisation | `/services/ai-engine-optimisation` | Growth: AI Search Readiness | MERGE into Systems |
| Answer Engine Optimisation | `/services/answer-engine-optimisation` | Growth: AI Search Readiness | MERGE into Systems |

**Recommendation:** Reduce 22 service pages to ~8-10 focused outcomes pages under `/solutions/`, with methodology details moving to `/systems/`.

---

## 3. Redundancies and Deprecations

### Content Redundancy

| Redundant Pair | Issue | Recommendation |
|---|---|---|
| ServicesTemplate + ServicesLandingTemplate | Two separate services landing pages | Merge into single template |
| SolutionDetailTemplate + multiple solution pages | Each solution has standalone template | Create reusable solution template with data-driven content |
| ServiceDetailTemplate + individual service templates | Same pattern duplicated | Consolidate into data-driven template |
| HostingTemplate + HostingServiceTemplate reference | Hosting appears in both Services and Solutions | Single page, cross-linked |
| 6 Journey Stage pages (`/services/ignite` through `/services/evolve`) | Legacy funnel concept | Deprecate or fold into three-tier model |

### Templates to Exclude from Production

| Template | Route | Reason |
|---|---|---|
| DevToolsTemplate + 16 child routes | `/dev-tools/*` | Dev-only |
| TemplateTester | `/dev-tools/template-tester` | Dev-only |
| ComponentShowcase | `/dev-tools/component-showcase` | Dev-only |
| DesignSystemTest | `/dev-tools/design-system-test` | Dev-only |
| WordPressBlocksProofOfConcept | `/wordpress-blocks-poc` | Dev-only |
| SectionStyleExample | `/section-style-example` | Dev-only |
| FeatureShowcaseTemplate | `/feature-showcase` | Dev-only |
| IndexTemplate | `/index` | Legacy |
| SingleTemplate | `/single` | Legacy |
| ArchiveTemplate | `/archive` | Legacy |
| SearchResultsTemplate | `/search-legacy` | Legacy |

---

## 4. New Data Files Needed

| Data File | Purpose | Priority |
|---|---|---|
| `systems-hub.ts` | Systems landing page content + 5 system definitions | P0 |
| `definitional-pages.ts` | 4 definitional page content blocks | P1 |
| `topic-clusters.ts` | Cluster metadata, relationships, and anchor content | P1 |
| `three-tier-model.ts` | Foundation/Growth/Enterprise tier descriptions | P0 |
| `methodology.ts` | System Architecture Sprint steps, deliverables, timeline | P1 |
| `ai-thought-leadership.ts` | AI features guidance, crawl inclusion content | P2 |

---

## 5. Priority Actions

### P0 — Critical

1. **Create Systems hub template + 5 child templates** — 6 new templates with data files. This is the strategic centrepiece.
2. **Create three-tier model data** — Foundation/Growth/Enterprise descriptions that replace the flat service list.
3. **Consolidate services** — Merge 22 service pages into ~8-10 outcome-focused pages.

### P1 — High

4. **Create 4 definitional pages** — Anchor entities for AI search.
5. **Create topic cluster anchors** — Publishing, Commerce, Design System clusters.
6. **Deprecate Journey Stage pages** — Remove or redirect 6 pages.

### P2 — Medium

7. **Create AI thought leadership pages** — 2 guidance articles.
8. **Clean up legacy templates** — Remove/hide 11+ dev-tools and legacy templates.
9. **Create methodology data file** — Support MethodCard pattern.

---

## Estimated Effort

| Action | Estimated Hours |
|---|---|
| Systems hub (6 templates + data) | 24-32h |
| Service consolidation (merge 22→10) | 12-16h |
| Definitional pages (4 templates + data) | 8-12h |
| Topic cluster anchors (3 pages) | 6-8h |
| Data file creation (6 files) | 4-6h |
| Legacy cleanup | 2-4h |
| **Total** | **56-78h** |

---

**END OF AUDIT 05**
