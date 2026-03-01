# Codebase Hygiene Audit Prompt

**Date:** 2026-02-25
**Category:** cleanup
**Priority:** High

---

## Objective

Perform a comprehensive hygiene audit across the entire codebase. Identify and action:

1. **Root directory violations** — Any `.md` files (except `README.md` and `CHANGELOG.md`) or `.sh` scripts in the project root.
2. **Orphaned components** — `.tsx` files not imported by any route or active component.
3. **Orphaned hooks/utils** — `.ts` files only referenced by orphaned components.
4. **Orphaned CSS** — `.css` files not imported in `index.css` or any component, OR imported in `index.css` but serving an orphaned component.
5. **Stale `@import` lines** — `index.css` imports that reference files no longer needed.
6. **Old reports** — Reports older than 7 days that have been superseded.
7. **Completed tasks** — Tasks that should be archived.
8. **Stale guideline references** — "See:" links or file paths in `Guidelines.md` pointing to deleted/moved files.

---

## Audit Procedure

### Audit 1: Root Directory Scan
- List all files in `/` that are NOT config files or `README.md`/`CHANGELOG.md`.
- Identify any `.md` or `.sh` files that violate root directory rules.
- **Action:** Move to `/docs/`, `/scripts/`, or delete.

### Audit 2: Orphaned Components
- For every `.tsx` file in `/src/app/components/`, search for import references.
- If a component is only referenced in guideline docs (not in routes.tsx or other components), it is orphaned.
- **Action:** Delete orphaned files and their associated CSS/utils.

### Audit 3: Orphaned Hooks & Utils
- For every `.ts` file in `/src/app/hooks/` and `/src/app/utils/`, search for import references.
- If only used by orphaned components, mark as orphaned.
- **Action:** Delete.

### Audit 4: Orphaned CSS
- Cross-reference `/src/styles/index.css` imports against active components.
- Check for CSS files that serve orphaned components.
- **Action:** Remove `@import` lines and delete CSS files.

### Audit 5: Stale Reports & Tasks
- Check `/reports/` for reports older than 7 days that are superseded.
- Check `/tasks/` for completed tasks that should be archived.
- **Action:** Archive or delete.

### Audit 6: Stale Guideline References
- Scan `Guidelines.md` for "See:" links pointing to non-existent files.
- Check for references to deleted components/features.
- **Action:** Remove or update references.

---

## Output

1. **Report** → `/reports/2026-02/cleanup/2026-02-25-hygiene-audit-report.md`
2. **Task list** → Update `/tasks/task-list.md` with actionable items
3. **Execute** → Delete orphaned files, clean imports, update guidelines

---

## Success Criteria

- Zero orphaned component files
- Zero stale `@import` lines in `index.css`
- Zero `.md` files in root (except `README.md`, `CHANGELOG.md`)
- All "See:" links in `Guidelines.md` point to valid files
- `/tasks/task-list.md` is up to date
