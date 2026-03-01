# Audit 04: Stale Guideline References

**Output:** `/reports/2026-02/cleanup/04-stale-references-report.md`

## Instructions

1. Scan `/guidelines/Guidelines.md` for references to files/directories that no longer exist
2. Check all `**See:**` links — do the referenced files exist?
3. Check `/guidelines/DOCUMENTATION-INDEX.md` for stale entries
4. Check for references to deleted features (Storybook, old testing frameworks)
5. Check `/guidelines/README.md` navigation links

## Specific Checks
- Are there references to `/guidelines/testing/` files that don't exist?
- Are there Storybook references that should be removed?
- Are there references to old report files that have been deleted?
- Do all `See:` references in Guidelines.md point to existing files?

## Report Format
```markdown
# Stale References Report
## Broken Links in Guidelines.md
| Line | Reference | Target File | Exists? | Action |
|---|---|---|---|---|
## Broken Links in Other Files
| Source File | Reference | Target | Exists? | Action |
|---|---|---|---|---|
```
