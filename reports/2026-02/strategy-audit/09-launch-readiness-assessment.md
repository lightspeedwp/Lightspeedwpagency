# Launch Readiness Assessment

**Date:** February 25, 2026
**Auditor:** AI (Orchestrator Prompt v1.0)
**Source Prompt:** `/prompts/strategy-audit/09-launch-readiness-assessment.md`

---

## Executive Summary

**Overall Readiness: NOT READY FOR LAUNCH**

The prototype has an **excellent technical foundation** — 99%+ design system compliance, 100% WCAG 2.1 AA accessibility, comprehensive component/pattern library (95+ patterns, 35+ blocks), and robust dark/light mode support. However, **strategic content and IA gaps block launch**:

1. The entire **Systems hub (6 pages)** — the strategic differentiator — doesn't exist
2. **Navigation structure** doesn't match the 2026 IA (Services/Portfolio/Blog vs Work/Solutions/Systems/Insights)
3. **60% of messaging** remains generic agency language, not systems-first
4. **No schema markup** is implemented
5. **No route-level code splitting** (all 107+ templates load upfront)

**Estimated effort to launch-ready: 227-324 hours across 4 phases.**

---

## Readiness Scorecard

| # | Category | Score | Blocking Issues | Non-Blocking Issues |
|---|---|---|---|---|
| 1 | **Design System Compliance** | **READY** | 0 | 1 (dev-tools hardcoded font-size) |
| 2 | **Accessibility** | **READY** | 0 | 1 (focus-not-obscured needs verification) |
| 3 | **Pattern Governance** | **NEEDS-WORK** | 2 missing patterns (DefinitionBlock, CaseStudyAnatomy) | 7 enhancement patterns needed |
| 4 | **Performance** | **NEEDS-WORK** | 0 static code splitting, CSS budget exceeded | Route splitting, CSS critical path |
| 5 | **Navigation/IA Alignment** | **NOT-STARTED** | Complete restructure needed | 6 primary nav items to change |
| 6 | **Content QA** | **NEEDS-WORK** | 6 new Systems pages needed | 4 definitional pages, 3 cluster anchors |
| 7 | **Voice and Tone** | **NEEDS-WORK** | 7 generic language violations | 50% of pages need systems-first rewrites |
| 8 | **Authority/Proof Placement** | **NEEDS-WORK** | 5 key pages missing proof in VP1-2 | 4 missing proof patterns |
| 9 | **Schema Validation** | **NOT-STARTED** | No schema markup implemented | Data structures exist (90% ready) |
| 10 | **AI Search Readiness** | **NOT-STARTED** | No definitional headers, no answer-first formatting | No crawl policy decided |
| 11 | **Conversion Tracking** | **NOT-STARTED** | No event tracking defined | No mid-funnel CTA tracking |
| 12 | **Migration Readiness** | **NOT-STARTED** | No redirect map, no sitemap | No 301 redirect plan |

### Score Summary

| Score | Count | Categories |
|---|---|---|
| **READY** | 2 | Design System, Accessibility |
| **NEEDS-WORK** | 5 | Patterns, Performance, Content, Voice/Tone, Proof |
| **NOT-STARTED** | 5 | Navigation/IA, Schema, AEO, Tracking, Migration |

---

## Critical Issues (Must Fix Before Any Launch)

1. **Systems hub pages do not exist** — The entire strategic differentiator has no content home. (Audit 01, 05)
2. **Navigation structure misaligned** — Primary nav uses old agency taxonomy, not systems-first. (Audit 01)
3. **Footer columns misaligned** — All 4 footer columns need restructure. (Audit 01)
4. **Homepage is the only page using "Request a Systems Audit" CTA** — All other pages use generic CTAs. (Audit 02, 06)
5. **No schema markup** — Article, Organisation, FAQ, Breadcrumb schemas not implemented despite data being ready. (Audit 07)
6. **All JS routes are static imports** — No code splitting means full app loads for every page. (Audit 08)

---

## Aggregate Findings from All Audits

| Audit | Key Metric | P0 Actions | Est. Hours |
|---|---|---|---|
| 01: IA & Navigation | 40% proposed URLs missing | 3 critical actions | 40-60h |
| 02: Positioning & Messaging | 40% messaging is generic | 3 critical rewrites | 15-21h |
| 03: Design System Tokens | 99.9% compliance | 0 critical fixes | 0h |
| 04: Block & Pattern Coverage | 77% roadmap coverage | 2 missing patterns | 34-48h |
| 05: Content Gap & Inventory | 15+ pages missing | 3 critical actions | 56-78h |
| 06: Authority & Proof | Only 1/17 pages has proper proof | 4 critical actions | 23-32h |
| 07: Voice, Tone & AEO | 7 language violations, 0% schema | 3 critical actions | 28-41h |
| 08: Performance & A11y | 0 code splitting, CSS over budget | 3 critical actions | 17-25h |
| **Totals** | | **21 critical actions** | **213-305h** |

---

## Implementation Roadmap

### Phase 1: Critical (Blocks Launch) — 80-110h

**Must complete before ANY deployment.**

| # | Task | Source Audit | Est. Hours | Dependencies |
|---|---|---|---|---|
| 1.1 | Create Systems hub landing page + template | 01, 05 | 8-10h | None |
| 1.2 | Create 5 Systems child pages + templates | 01, 05 | 20-30h | 1.1 |
| 1.3 | Restructure primary navigation (header) | 01 | 4-6h | 1.1 |
| 1.4 | Restructure footer columns | 01 | 3-4h | None |
| 1.5 | Standardise "Request a Systems Audit" CTA across all pages | 02, 06 | 4-6h | None |
| 1.6 | Implement route-level code splitting (React.lazy) | 08 | 4-6h | None |
| 1.7 | Create DefinitionBlock pattern | 04 | 3-4h | None |
| 1.8 | Create three-tier model data file | 05 | 2-3h | None |
| 1.9 | Rewrite Services Landing hero messaging | 02 | 1-2h | None |
| 1.10 | Rewrite Contact page hero messaging | 02 | 1-2h | None |

**Phase 1 Deliverables:**
- 6 new page templates (Systems hub)
- New primary navigation
- New footer structure
- Standardised CTAs
- Code splitting
- 1 new pattern (DefinitionBlock)
- 1 new data file
- 2 hero rewrites

---

### Phase 2: High Priority (First 2 Weeks) — 65-95h

| # | Task | Source Audit | Est. Hours | Dependencies |
|---|---|---|---|---|
| 2.1 | Rename /portfolio → /work, update all links | 01 | 4-6h | Phase 1 nav |
| 2.2 | Rename /blog → /insights, update all links | 01 | 4-6h | Phase 1 nav |
| 2.3 | Consolidate 22 service pages into ~10 | 01, 05 | 12-16h | Phase 1 nav |
| 2.4 | Create CaseStudyAnatomy pattern | 04 | 3-4h | None |
| 2.5 | Create AuthorityQuote pattern | 04, 06 | 3-4h | None |
| 2.6 | Create ProofChip + MetricCallout patterns | 04, 06 | 4-6h | None |
| 2.7 | Add ProofStrip to 5 key pages | 06 | 3-4h | None |
| 2.8 | Implement JSON-LD schema utility | 07 | 8-12h | None |
| 2.9 | Create 4 definitional pages | 05, 07 | 8-12h | Phase 1 systems hub |
| 2.10 | Add definitional headers to 10 key pages | 07 | 6-8h | None |
| 2.11 | CSS critical path optimisation | 08 | 6-8h | Phase 1 splitting |

---

### Phase 3: Medium Priority (First Month) — 50-70h

| # | Task | Source Audit | Est. Hours | Dependencies |
|---|---|---|---|---|
| 3.1 | Voice/tone rewrites (5 data files) | 07 | 2-3h | None |
| 3.2 | Answer-first formatting (10 pages) | 07 | 6-8h | Phase 2 definitional headers |
| 3.3 | Internal cross-linking (10+ templates) | 07 | 4-6h | Phase 2 systems pages |
| 3.4 | Create URL redirect map | 01 | 2-3h | Phase 2 renames |
| 3.5 | Case study template restructure | 06 | 6-8h | Phase 2 CaseStudyAnatomy |
| 3.6 | Create topic cluster anchors (3 pages) | 05 | 6-8h | Phase 2 definitional pages |
| 3.7 | Testimonial elevation (Automattic to VP3-4) | 06 | 2-3h | Phase 2 AuthorityQuote |
| 3.8 | Create Insights sub-categories | 01 | 4-6h | Phase 2 /insights rename |
| 3.9 | Reduced motion audit (micro/advanced CSS) | 08 | 2-3h | None |
| 3.10 | Pattern registry documentation (95+ patterns) | 04 | 16-24h | None |

---

### Phase 4: Enhancement (Ongoing) — 32-49h

| # | Task | Source Audit | Est. Hours | Dependencies |
|---|---|---|---|---|
| 4.1 | Create UpdateLog, InsightCard, RelatedSystemsRail patterns | 04 | 6-8h | Phase 3 |
| 4.2 | Create AI thought leadership pages (2) | 05 | 4-6h | Phase 2 |
| 4.3 | ICP-specific messaging variants | 02 | 4-6h | Phase 3 voice/tone |
| 4.4 | Conversion tracking implementation | 09 | 6-8h | Phase 1 CTAs |
| 4.5 | Performance budget CI checks | 08 | 4-6h | Phase 2 CSS |
| 4.6 | OAI-Searchbot crawl policy | 07 | 1-2h | None |
| 4.7 | Phase out Journey Stage pages (6) | 01 | 3-4h | Phase 2 service consolidation |
| 4.8 | Clean up dev-tools routes | 08 | 2-4h | Phase 1 code splitting |
| 4.9 | Schema testing suite | 07 | 2-3h | Phase 2 schema |

---

## Effort Summary

| Phase | Files Modified | Files Created | Est. Hours | Calendar Time |
|---|---|---|---|---|
| **Phase 1: Critical** | 15-20 | 10-15 | 80-110h | 2-3 weeks |
| **Phase 2: High Priority** | 20-30 | 10-15 | 65-95h | 2-3 weeks |
| **Phase 3: Medium** | 15-25 | 5-10 | 50-70h | 2-3 weeks |
| **Phase 4: Enhancement** | 10-15 | 5-10 | 32-49h | Ongoing |
| **TOTAL** | **60-90** | **30-50** | **227-324h** | **6-12 weeks** |

---

## Dependencies Map

```
Phase 1.1 (Systems hub)
  └── Phase 1.2 (Systems child pages)
  └── Phase 1.3 (Nav restructure)
  └── Phase 2.9 (Definitional pages)
      └── Phase 3.2 (Answer-first formatting)
      └── Phase 3.6 (Cluster anchors)

Phase 1.3 (Nav restructure)
  └── Phase 2.1 (/portfolio → /work rename)
  └── Phase 2.2 (/blog → /insights rename)
      └── Phase 3.8 (Insights sub-categories)
  └── Phase 2.3 (Service consolidation)
      └── Phase 4.7 (Journey phase-out)

Phase 1.6 (Code splitting)
  └── Phase 2.11 (CSS critical path)
      └── Phase 4.5 (Performance CI)

Phase 2.4 (CaseStudyAnatomy)
  └── Phase 3.5 (Case study restructure)

Phase 2.5 (AuthorityQuote)
  └── Phase 3.7 (Testimonial elevation)

Phase 2.8 (Schema utility)
  └── Phase 4.9 (Schema testing)
```

---

## Recommended Next Steps

1. **Start Phase 1 immediately** — Systems hub creation is the single highest-impact action. Everything else depends on it.
2. **Parallelise Phase 1 tasks** — Code splitting (1.6), CTA standardisation (1.5), footer restructure (1.4), and DefinitionBlock pattern (1.7) can all proceed independently.
3. **Plan content creation** — Systems page content needs to be drafted (or AI-assisted) before templates can be built.
4. **Set a Phase 1 completion deadline** — Recommend 2-3 weeks from today (target: March 14, 2026).
5. **Begin Phase 2 as Phase 1 tasks complete** — Don't wait for all of Phase 1; start Phase 2 items that don't have Phase 1 dependencies.

---

## Launch Scenarios

### Scenario A: Full Launch (All Phases)
- **Timeline:** 8-12 weeks
- **Effort:** 227-324 hours
- **Result:** Complete strategic transformation

### Scenario B: Soft Launch (Phase 1 + 2 only)
- **Timeline:** 4-6 weeks
- **Effort:** 145-205 hours
- **Result:** Systems hub live, new navigation, schema implemented, code splitting done. Voice/tone and enhancement items deferred.

### Scenario C: MVP Launch (Phase 1 only)
- **Timeline:** 2-3 weeks
- **Effort:** 80-110 hours
- **Result:** Systems hub exists, navigation updated, CTAs standardised. No schema, no voice/tone rewrites, no service consolidation.

**Recommendation:** **Scenario B (Soft Launch)** — Delivers the strategic pivot (Systems hub + new IA + schema) without requiring full content rewrites or enhancement work.

---

**END OF AUDIT 09 — ALL 9 AUDITS COMPLETE**
