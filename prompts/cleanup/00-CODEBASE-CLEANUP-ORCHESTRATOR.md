# Codebase Cleanup Orchestrator

**Purpose:** Comprehensive codebase hygiene — remove unused files, orphaned imports, dead CSS, stale references, and old reports.
**Output:** Reports to `/reports/2026-02/cleanup/`, tasks to `/tasks/codebase-cleanup.md`

---

## Execution Order

Run each audit sequentially. Each produces a report in `/reports/2026-02/cleanup/`.

| # | Audit | Prompt File | Report File |
|---|---|---|---|
| 1 | Root Directory Cleanup | `01-root-cleanup.md` | `01-root-cleanup-report.md` |
| 2 | Orphaned Imports & Dead Code | `02-orphaned-imports.md` | `02-orphaned-imports-report.md` |
| 3 | Unused CSS Files & Styles | `03-unused-css.md` | `03-unused-css-report.md` |
| 4 | Stale Guideline References | `04-stale-references.md` | `04-stale-references-report.md` |
| 5 | Old Reports Cleanup | `05-old-reports.md` | `05-old-reports-report.md` |

## After All Audits

1. Consolidate all findings into `/tasks/codebase-cleanup.md`
2. Update `/tasks/task-list.md` with summary
3. Execute safe deletions (files confirmed unused)
4. Fix broken imports

## Quality Gates

- [ ] All 5 audit reports written
- [ ] Task list created with actionable items
- [ ] No broken imports after cleanup
- [ ] App still builds and renders correctly
