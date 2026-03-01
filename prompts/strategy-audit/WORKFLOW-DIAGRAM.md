# Strategy Audit Orchestration — Visual Workflow

**Created:** February 25, 2026  
**Version:** 1.0

---

## 📊 Complete Orchestration Flow

```
┌─────────────────────────────────────────────────────────────────┐
│  PHASE 0: PREPARATION                                           │
│  ─────────────────────────────────────────────────────────────  │
│  1. Read orchestrator: 00-ORCHESTRATOR-EXECUTE-ALL-AUDITS.md   │
│  2. Verify 17 reference files in /guidelines/strategy/         │
│  3. Verify scaffolding in /reports/ and /tasks/                │
└─────────────────────────────────────────────────────────────────┘
                            ↓
┌─────────────────────────────────────────────────────────────────┐
│  PHASE 1: CURRENT STATE ANALYSIS (Prompts 01-04)               │
│  ─────────────────────────────────────────────────────────────  │
│  Execute sequentially, save reports after each                 │
└─────────────────────────────────────────────────────────────────┘
                            ↓
        ┌───────────────────────────────────────┐
        │  01: IA and Navigation Audit          │
        │  ─────────────────────────────────    │
        │  • Read: navigation-and-ia-2026.md    │
        │  • Audit: routes.tsx, SiteHeader.tsx  │
        │  • Output: 01-ia-and-navigation.md    │
        └───────────────────────────────────────┘
                            ↓
        ┌───────────────────────────────────────┐
        │  02: Positioning and Messaging        │
        │  ─────────────────────────────────    │
        │  • Read: positioning-analysis-2026.md │
        │  • Audit: Hero messaging, CTAs        │
        │  • Output: 02-positioning.md          │
        └───────────────────────────────────────┘
                            ↓
        ┌───────────────────────────────────────┐
        │  03: Design System Token Audit        │
        │  ─────────────────────────────────    │
        │  • Read: design-system-spec-2026.md   │
        │  • Audit: CSS variables, BEM classes  │
        │  • Output: 03-tokens.md               │
        └───────────────────────────────────────┘
                            ↓
        ┌───────────────────────────────────────┐
        │  04: Block and Pattern Coverage       │
        │  ─────────────────────────────────    │
        │  • Read: pattern-library-roadmap.md   │
        │  • Audit: Pattern/block completeness  │
        │  • Output: 04-patterns.md             │
        └───────────────────────────────────────┘
                            ↓
┌─────────────────────────────────────────────────────────────────┐
│  PHASE 2: STRATEGIC GAP ANALYSIS (Prompts 05-07)               │
│  ─────────────────────────────────────────────────────────────  │
│  Identify what's missing from the strategy                      │
└─────────────────────────────────────────────────────────────────┘
                            ↓
        ┌───────────────────────────────────────┐
        │  05: Content Gap & Page Inventory     │
        │  ─────────────────────────────────    │
        │  • Read: content-gap-analysis.md      │
        │  • Audit: Missing pages, clusters     │
        │  • Output: 05-content-gap.md          │
        └───────────────────────────────────────┘
                            ↓
        ┌───────────────────────────────────────┐
        │  06: Authority & Proof Placement      │
        │  ─────────────────────────────────    │
        │  • Read: authority-proof-framework.md │
        │  • Audit: Proof placement, case study │
        │  • Output: 06-proof.md                │
        └───────────────────────────────────────┘
                            ↓
        ┌───────────────────────────────────────┐
        │  07: Voice, Tone, and AEO Audit       │
        │  ─────────────────────────────────    │
        │  • Read: voice-and-tone-guidelines.md │
        │  • Audit: AI readiness, copy quality  │
        │  • Output: 07-voice-aeo.md            │
        └───────────────────────────────────────┘
                            ↓
┌─────────────────────────────────────────────────────────────────┐
│  PHASE 3: ENGINEERING STANDARDS (Prompts 08-09)                │
│  ─────────────────────────────────────────────────────────────  │
│  Check technical readiness and launch blockers                  │
└─────────────────────────────────────────────────────────────────┘
                            ↓
        ┌───────────────────────────────────────┐
        │  08: Performance & Accessibility      │
        │  ─────────────────────────────────    │
        │  • Read: performance-engineering.md   │
        │  • Audit: CWV, WCAG 2.1 AA, budgets   │
        │  • Output: 08-performance.md          │
        └───────────────────────────────────────┘
                            ↓
        ┌───────────────────────────────────────┐
        │  09: Launch Readiness Assessment      │
        │  ─────────────────────────────────    │
        │  • Read: launch-readiness-checklist   │
        │  • Audit: ALL previous 8 reports      │
        │  • Output: 09-launch-readiness.md     │
        └───────────────────────────────────────┘
                            ↓
┌─────────────────────────────────────────────────────────────────┐
│  ✅ CHECKPOINT: ALL 9 REPORTS COMPLETE                          │
│  ─────────────────────────────────────────────────────────────  │
│  Review all reports before proceeding to task list generation   │
└─────────────────────────────────────────────────────────────────┘
                            ↓
┌─────────────────────────────────────────────────────────────────┐
│  PHASE 4: TASK LIST GENERATION                                  │
│  ─────────────────────────────────────────────────────────────  │
│  Create prioritized implementation roadmap                      │
└─────────────────────────────────────────────────────────────────┘
                            ↓
        ┌───────────────────────────────────────┐
        │  Generate 8 Task Lists                │
        │  ─────────────────────────────────    │
        │  1. phase-1-critical.md               │
        │  2. phase-2-ia-and-navigation.md      │
        │  3. phase-3-design-system.md          │
        │  4. phase-4-content-messaging.md      │
        │  5. phase-5-patterns-blocks.md        │
        │  6. phase-6-proof-conversion.md       │
        │  7. phase-7-performance-a11y.md       │
        │  8. phase-8-aeo-schema.md             │
        └───────────────────────────────────────┘
                            ↓
┌─────────────────────────────────────────────────────────────────┐
│  ✅ ORCHESTRATION COMPLETE                                      │
│  ─────────────────────────────────────────────────────────────  │
│  • 9 audit reports saved                                        │
│  • 8 task lists generated                                       │
│  • Dependencies documented                                      │
│  • Critical path defined                                        │
│  • Ready for implementation                                     │
└─────────────────────────────────────────────────────────────────┘
```

---

## 🔄 Input/Output Map

### INPUTS (17 Reference Files)

```
/guidelines/strategy/
├── positioning-analysis-2026.md
├── service-architecture-2026.md
├── navigation-and-ia-2026.md
├── authority-proof-framework.md
├── content-audit-live-site.md
├── content-audit-prototype.md
├── content-gap-analysis.md
├── content-strategy-2026.md
├── voice-and-tone-guidelines.md
├── design-system-spec-2026.md
├── pattern-library-roadmap.md
├── launch-readiness-checklist.md
├── wordpress-predictions-2027.md
├── competitive-analysis.md
├── ai-governance-framework.md
├── performance-engineering-standards.md
└── block-theme-architecture.md
```

### OUTPUTS (9 Reports + 8 Task Lists)

```
/reports/2026-02/strategy-audit/
├── 01-ia-and-navigation-audit.md
├── 02-positioning-and-messaging-audit.md
├── 03-design-system-token-audit.md
├── 04-block-pattern-coverage-audit.md
├── 05-content-gap-and-page-inventory.md
├── 06-authority-proof-placement-audit.md
├── 07-voice-tone-and-aeo-audit.md
├── 08-performance-and-accessibility-audit.md
└── 09-launch-readiness-assessment.md

/tasks/strategy-evolution/
├── phase-1-critical.md
├── phase-2-ia-and-navigation.md
├── phase-3-design-system-compliance.md
├── phase-4-content-and-messaging.md
├── phase-5-patterns-and-blocks.md
├── phase-6-proof-and-conversion.md
├── phase-7-performance-and-a11y.md
└── phase-8-aeo-and-schema.md
```

---

## 📊 Dependency Graph

```
PHASE 1: CRITICAL (No dependencies)
├── Start immediately
└── Blocks launch if incomplete

PHASE 2: IA AND NAVIGATION (No dependencies)
├── Start immediately
└── Blocks Phase 4 and Phase 5

PHASE 3: DESIGN SYSTEM (No dependencies)
├── Start immediately
└── Blocks Phase 5 and Phase 7

PHASE 4: CONTENT AND MESSAGING (Requires Phase 2)
├── Requires: Phase 2 (IA structure)
└── Blocks Phase 6 and Phase 8

PHASE 5: PATTERNS AND BLOCKS (Requires Phase 2, Phase 3)
├── Requires: Phase 2 (IA), Phase 3 (Tokens)
└── Blocks Phase 6

PHASE 6: PROOF AND CONVERSION (Requires Phase 4, Phase 5)
├── Requires: Phase 4 (Content), Phase 5 (Patterns)
└── Final conversion optimization

PHASE 7: PERFORMANCE AND A11Y (Requires Phase 3)
├── Requires: Phase 3 (Design System)
└── Parallel with Phase 4-6

PHASE 8: AEO AND SCHEMA (Requires Phase 4)
├── Requires: Phase 4 (Content)
└── Final AI readiness layer
```

---

## ⏱️ Timeline Estimate

```
┌─────────────────────────────────────────────────────────────────┐
│  WEEK 1: AUDIT EXECUTION (4.5-6.5 hours)                        │
├─────────────────────────────────────────────────────────────────┤
│  Day 1: Prompts 01-04 (Phase 1: Current State)    2-3 hours     │
│  Day 2: Prompts 05-07 (Phase 2: Gap Analysis)     1.5-2 hours   │
│  Day 3: Prompts 08-09 (Phase 3: Engineering)      1-1.5 hours   │
└─────────────────────────────────────────────────────────────────┘
                            ↓
┌─────────────────────────────────────────────────────────────────┐
│  WEEK 1-2: TASK LIST GENERATION (1-2 hours)                     │
├─────────────────────────────────────────────────────────────────┤
│  • Review all 9 reports                                         │
│  • Generate 8 task lists                                        │
│  • Document dependencies                                        │
│  • Estimate effort for each phase                               │
└─────────────────────────────────────────────────────────────────┘
                            ↓
┌─────────────────────────────────────────────────────────────────┐
│  WEEK 2+: IMPLEMENTATION (Variable)                             │
├─────────────────────────────────────────────────────────────────┤
│  Execute tasks by phase according to priority and dependencies  │
└─────────────────────────────────────────────────────────────────┘
```

**Total Audit Time:** 5.5-8.5 hours  
**Total Planning Time:** 6.5-10.5 hours (including task generation)

---

## 🎯 Critical Success Factors

### ✅ DO:
1. **Execute sequentially** — Complete Prompt 01 before starting Prompt 02
2. **Read reference files** — Every prompt lists required reading
3. **Save to correct location** — `/reports/2026-02/strategy-audit/NN-*.md`
4. **Review before proceeding** — Validate each report is complete
5. **Wait for all 9 reports** — Generate task lists AFTER Report 09

### ❌ DON'T:
1. **Skip prompts** — Each builds on previous findings
2. **Ignore reference files** — Strategy context is critical
3. **Save to wrong location** — Breaks automation and linking
4. **Generate task lists early** — Need all findings first
5. **Rush execution** — Quality over speed

---

## 🏁 Ready to Execute?

1. **Read:** Quick Start Guide (5 min) → `QUICK-START-GUIDE.md`
2. **Read:** Full Orchestrator (15 min) → `00-ORCHESTRATOR-EXECUTE-ALL-AUDITS.md`
3. **Execute:** Prompt 01 (30-45 min) → `01-ia-and-navigation-audit.md`
4. **Continue:** Prompts 02-09 sequentially
5. **Generate:** 8 task lists after all reports complete

**Total time to complete orchestration: 6.5-10.5 hours**

---

**Questions? Re-read the orchestrator or quick start guide.**

**Ready? Open Prompt 01 and begin.**
