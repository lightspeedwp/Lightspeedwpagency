# Audit 02: Orphaned Imports & Dead Code

**Output:** `/reports/2026-02/cleanup/02-orphaned-imports-report.md`

## Instructions

1. Check `/src/imports/` — are all files imported by at least one component?
2. Check `/src/app/components/` — are all components imported by routes.tsx or another component?
3. Check `/src/app/hooks/` — are all hooks used by at least one component?
4. Check `/src/app/utils/` — are all utilities used by at least one component?
5. Check `/src/app/data/` — are all data files imported by at least one component?
6. For each unused file: confirm it is truly orphaned (not dynamically imported), then flag for deletion

## Key Searches
- For each file in `/src/imports/`, search for its filename across all `.tsx` and `.ts` files
- For each hook in `/src/app/hooks/`, search for its export name
- For each util in `/src/app/utils/`, search for its export name

## Report Format
```markdown
# Orphaned Imports Report
## Unused Files
| File | Type | Imported By | Action |
|---|---|---|---|
## Dead Code
| File | Function/Export | Used By | Action |
|---|---|---|---|
```
