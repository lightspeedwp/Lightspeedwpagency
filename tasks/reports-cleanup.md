# Reports Cleanup Task List

**Source Audit:** A3 — Reports Cleanup Audit  
**Date:** 2026-02-21  
**Priority:** LOW — Housekeeping, does not block implementation  
**Status:** NOT STARTED

---

## Summary

The `/reports/` directory and project root contain 100+ report files accumulated over 14 months. Many are superseded, duplicated, or older than 1 week. This task cleans up the reporting structure.

---

## Audit Procedure

1. **Scan all files in `/reports/` recursively**
2. **Scan root directory for stale report files** (many `.md` files were saved at root)
3. For each file:
   - Check filename format: should be `YYYY-MM-DD-description.md`
   - Check if in correct category folder
   - Check if superseded by a newer report
   - Check date — archive if older than February 14, 2026

---

## Known Issues

### Root Directory Pollution

The project root contains 50+ report/status files that should be in `/reports/`:

- [ ] `PHASE-1-COMPLETE-SUMMARY-JAN-23-2025.md` — Move to `/reports/2025-01/`
- [ ] `BATCH-*-COMPLETE-*.md` (multiple files) — Move to `/reports/2025-01/`
- [ ] `COMPLETE-*-DEC-27.md` (multiple files) — Move to `/reports/2025-01/`
- [ ] `FINAL-*-DEC-26.md` (multiple files) — Move to `/reports/2025-01/`
- [ ] All other root `.md` files that are reports — Move to appropriate `/reports/YYYY-MM/` folder

### Reports Directory Structure

Expected structure:
```
/reports/
  2025-01/          — January 2025 reports
  2025-02/          — February 2025 (if any)
  2026-02/          — February 2026 reports
  audits/           — Audit reports (current)
  progress/         — Progress tracking (current)
  session-summaries/ — Session summaries
  architecture/     — Architecture analysis
  documentation/    — Documentation reports
```

### Duplicate Reports

- [ ] Identify reports with similar names that describe the same milestone
- [ ] Keep the most comprehensive version, archive others
- [ ] Example: Multiple "PHASE-1-COMPLETE" reports from Jan 22-23 — keep only the final summary

### Naming Convention Violations

- [ ] Files using ALL-CAPS names → Rename to `YYYY-MM-DD-kebab-case.md`
- [ ] Files missing date prefix → Add date prefix based on content
- [ ] Files in wrong category folder → Move to correct folder

---

## Remediation Actions

### Phase 1: Root Cleanup (Priority: HIGH)
- [ ] Move all root-level report `.md` files to `/reports/2025-01/` or appropriate folder
- [ ] Keep ONLY these at root: `README.md`, `package.json`, other config files
- [ ] Guidelines.md stays in `/guidelines/`

### Phase 2: Archive Old Reports
- [ ] Create `/reports/archive/2024-12/` for December 2024 reports
- [ ] Create `/reports/archive/2025-01/` for January 2025 reports
- [ ] Move all reports older than February 14, 2026 to archive

### Phase 3: Naming Standardization
- [ ] Rename all reports to `YYYY-MM-DD-description.md` format
- [ ] Ensure kebab-case naming (no ALL-CAPS)

### Phase 4: Deduplication
- [ ] Identify and remove duplicate reports
- [ ] Keep comprehensive final summaries, archive interim reports

---

## Definition of Done

- [ ] Root directory contains zero report files (only config + README)
- [ ] All reports in `/reports/` follow `YYYY-MM-DD-description.md` naming
- [ ] All reports in correct category folders
- [ ] No duplicate reports
- [ ] Reports older than 1 week archived
- [ ] `/reports/README.md` updated with current structure
