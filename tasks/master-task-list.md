# Master Task List — LSX Design Prototype

**Last Updated:** March 4, 2026
**Purpose:** Single consolidated view of ALL open tasks across all task files. Updated manually after each work session.

---

## Summary Dashboard

| Category | Source File | Open | Done | Total | Status |
|---|---|---|---|---|---|
| **Stability Audit** | `stability-audit-tasks.md` | 5 | 41 | 46 | 89% |
| **Phosphor Migration** | `phosphor-migration-tasks.md` | 10 | 40+ | 50+ | Phase 7 cleanup + WCAG |
| **Memory Optimization** | `memory-optimization-tasks.md` | 8 | 5 | 13 | P1 80% done |
| **File Optimization** | `file-optimization-tasks.md` | 12 | 10 | 22 | Phase 1 done |
| **Strategy Phase 1** | `strategy-evolution/phase-1` | 0 | 10 | 10 | ✅ ARCHIVED |
| **Strategy Phase 2** | `strategy-evolution/phase-2` | 6 | 4 | 10 | 40% |
| **Strategy Phase 3** | `strategy-evolution/phase-3` | 2 | 3 | 5 | 80% |
| **Strategy Phases 4-8** | `strategy-evolution/phase-4-8` | ~50 | 0 | ~50 | PENDING |
| **Template Migration** | `task-list.md` | 10 | 32 | 42 | 76% |

---

## Active Priorities (What to Work On Next)

### Tier 1 — High Impact, Low Effort (Quick Wins)

- [x] **Phosphor Phase 7.3:** ✅ DONE — Uninstalled `lucide-react` from `package.json`. Zero imports confirmed.
- [ ] **Strategy 3.2:** Tokenise gradient definitions in `theme-base.css`. (`strategy-evolution/phase-3`)
- [ ] **Strategy 3.3:** Tokenise animation duration values. (`strategy-evolution/phase-3`)

### Tier 2 — High Impact, Medium Effort (Next Sprint)

- [ ] **Template Migration Phase 3:** Continue migrating remaining ~11 templates to shared FeatureList/StatsGrid/ProcessTimeline. Remaining candidates have custom UI (progress bars, pricing cards, badges) that may not map cleanly to existing patterns. Consider creating new specialized pattern components (e.g., PricingCard, TeamMemberGrid). (`task-list.md`)
- [ ] **Memory Task 1.3:** Re-optimize `contact-page.css` and `lsx-search-page.css` (~1,450 lines potential). (`memory-optimization-tasks.md`)
- [ ] **Stability Task 3.1:** Split `DocsGeneratorTemplate.tsx` (991 lines) into sub-components. (`stability-audit-tasks.md`)

### Tier 3 — Medium Impact (Backlog)

- [x] **Stability Task 3.2:** ✅ DONE — Split `ai-integrations-page.ts` (971→19 lines) into modular `/data/ai-integrations/` folder.
- [ ] **Strategy 2.5-2.7:** Create Insights sub-categories, Work sub-sections, update internal links. (`strategy-evolution/phase-2`)
- [ ] **Memory Task 2.3:** Consolidate FAQs into category files. (`memory-optimization-tasks.md`)
- [ ] **Memory Task 2.4:** Split `site-header.css` into focused files. (`memory-optimization-tasks.md`)
- [ ] **File Opt Task 2.2:** Create StandardHero pattern component. (`file-optimization-tasks.md`)

### Tier 4 — Low Priority (Future)

- [ ] **Stability Tasks 4.1-4.2:** Create missing guidelines (data-files.md, build-optimization.md, routes.md), types system barrel file. (`stability-audit-tasks.md`)
- [ ] **Strategy Phases 4-8:** Content & messaging, patterns & blocks, proof & conversion, performance & a11y, AEO & schema. (~142-202 hours estimated). (`strategy-evolution/`)
- [ ] **Phosphor WCAG-1 through WCAG-8:** Icon accessibility audit (contrast, aria-hidden, touch targets). (`phosphor-migration-tasks.md`)
- [ ] **File Opt Phase 3-4:** Archive base CSS extraction, SVG optimization, component variant consolidation. (`file-optimization-tasks.md`)

---

## Completed Milestones (Reference)

| Milestone | Date | Impact |
|---|---|---|
| Phase 1 Remediation (10 tasks) | Feb 27, 2026 | Systems Hub, nav restructure, CTA standardization |
| Phase 2 IA Restructure (critical) | Feb 28, 2026 | /portfolio→/work, /blog→/insights, 22→9 services |
| Design System Compliance Audit | Mar 2, 2026 | 100% CSS variable compliance across 500+ files |
| Breakpoint System Expansion | Mar 2, 2026 | 5→12 responsive breakpoints |
| CSS Phase 3 Optimization | Mar 2, 2026 | ~22,629 lines CSS eliminated |
| CSS Phase 4 Optimization | Mar 2, 2026 | ~7,676-8,776 lines CSS saved |
| Phosphor Icons Migration | Mar 3-4, 2026 | 100 files migrated, zero Lucide imports, package removed |
| Template Pattern Migration | Mar 3-4, 2026 | 31/42 templates using shared components |
| Memory Opt: Services Split | Mar 2, 2026 | 1,538-line file → 16 modular files |
| File Opt: Phase 1 CSS Bases | Mar 1, 2026 | 4 base CSS modules, 33 templates updated |

---

## Archived Task Files

| File | Location | Status |
|---|---|---|
| Breakpoint Expansion Tasks | `/tasks/breakpoint-expansion-tasks.md` | ✅ COMPLETE — Status updated |
| Strategy Phase 1 Critical | `/tasks/strategy-evolution/phase-1-critical.md` | ✅ COMPLETE (10/10) |
| Memory Optimization Progress | `/tasks/memory-optimization-progress.md` | Progress tracker — superseded |

---

## Cross-References

- **General task list:** `/tasks/task-list.md`
- **Stability audit:** `/tasks/stability-audit-tasks.md`
- **Phosphor migration:** `/tasks/phosphor-migration-tasks.md`
- **Memory optimization:** `/tasks/memory-optimization-tasks.md`
- **File optimization:** `/tasks/file-optimization-tasks.md`
- **Strategy evolution:** `/tasks/strategy-evolution/README.md`
- **CHANGELOG:** `/CHANGELOG.md`

---

**Grand Total Optimization Savings (All Phases):** ~33,000+ lines eliminated/saved
**Templates Using Shared Patterns:** 31/42 (74%)
**CSS Variable Compliance:** 100%
**Phosphor Icons Migration:** 100% (zero Lucide imports, package removed)