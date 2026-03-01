# Audit 01: Root Directory Cleanup

**Output:** `/reports/2026-02/cleanup/01-root-cleanup-report.md`

## Instructions

1. List all files in the project root (`/`)
2. Classify each file as: KEEP (config/essential), MOVE (belongs elsewhere), DELETE (unused/orphaned)
3. For MOVE files, specify the correct destination folder
4. For DELETE files, confirm they are not imported anywhere
5. Execute: delete confirmed unused files, move misplaced files

## Rules
- KEEP: `package.json`, `tsconfig.json`, `tsconfig.node.json`, `vite.config.ts`, `vercel.json`, `postcss.config.mjs`, `README.md`, `ATTRIBUTIONS.md`
- MOVE: Any `.md` report/guideline/task file → appropriate `/reports/`, `/guidelines/`, or `/tasks/` folder
- DELETE: Any orphaned file not referenced by the build system or application

## Report Format
```markdown
# Root Directory Cleanup Report
| File | Action | Reason | Destination |
|---|---|---|---|
```
