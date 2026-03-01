# Audit 05: Old Reports Cleanup

**Output:** `/reports/2026-02/cleanup/05-old-reports-report.md`

## Instructions

1. List all files in `/reports/` (recursively)
2. Identify reports older than 7 days that have been superseded by newer reports
3. Identify reports that reference completed/archived work
4. Flag for deletion: old progress reports, superseded audit reports, completed task tracking
5. KEEP: current strategy audit reports, active task lists, recent audit findings

## Rules
- Reports from the current week (Feb 25, 2026): KEEP
- Strategy audit reports (`/reports/2026-02/strategy-audit/`): KEEP (active reference)
- Reports older than Feb 18, 2026 that are superseded: DELETE
- Funky migration report: ARCHIVE (completed work, keep for reference)

## Report Format
```markdown
# Old Reports Cleanup
| Report File | Date | Status | Action | Reason |
|---|---|---|---|---|
```
