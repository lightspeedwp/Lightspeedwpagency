# LSX Design -- Housekeeping Audit & Cleanup

**Category:** Utilities
**Version:** 1.0
**Created:** March 13, 2026
**Status:** Production
**Reusable:** Yes -- run regularly (weekly or after major changes)
**Estimated Duration:** Single session, 30-60 minutes

---

## Purpose

Run a comprehensive single-session audit that cleans up the filesystem, verifies code integrity, updates all status trackers, and leaves the project in a known-good state. This prompt is designed to be pasted as-is into a new Figma Make session.

---

## The Prompt

Copy everything below this line and paste it into a new session:

---

# Housekeeping Audit & Cleanup -- Single Session

**IMPORTANT:** Complete ALL steps below in ONE session. Do not stop partway. Read `/guidelines/Guidelines.md` first for project rules.

## Phase 1: Filesystem Audit & Cleanup (10 min)

### 1.1 Root Directory
- Scan `/` (project root) for files that violate root directory rules
- Only `README.md`, `CHANGELOG.md`, and config files belong in root
- Move any misplaced `.md` reports to `/reports/`, guidelines to `/guidelines/`, tasks to `/tasks/`, scripts to `/scripts/`
- Delete any temporary/orphaned files (confirm with listing first)

### 1.2 Reports Cleanup
- Scan `/reports/` for completed/stale reports older than 2 weeks
- Archive completed reports to `/reports/archive/YYYY-MM/`
- Keep only active/in-progress reports in `/reports/`

### 1.3 Tasks Cleanup
- Read `/tasks/task-list.md` -- this is the master task tracker, NEVER delete it
- Read `/tasks/master-task-list.md` if it exists
- For any task list files where ALL tasks are `[x]` complete, archive them to `/tasks/archive/`
- Do NOT delete task files -- move to archive
- Verify `/tasks/archive/` folder exists, create if missing

## Phase 2: Code Integrity Audit (15 min)

### 2.1 Broken CSS Imports
- Search all `.tsx` files for CSS imports (`import.*\.css`)
- Verify each referenced CSS file exists at the import path
- List any broken imports and fix them (update path or create missing file)

### 2.2 Broken JS/TS Imports
- Search all route files in `/src/app/routes/` for template imports
- Verify each imported template file exists in `/src/app/components/templates/`
- Search for any imports from `lucide-react` (should be zero -- all migrated to `@phosphor-icons/react`)
- List and fix any broken imports

### 2.3 Missing Routes
- Read `/src/app/routes/index.ts` and all route group files (`core.routes.tsx`, `content.routes.tsx`, etc.)
- Read the sitemap page data or `/guidelines/overview-sitemap.md`
- Cross-reference: identify any pages in the sitemap that have no route defined
- List missing routes (do NOT create templates -- just report the gaps)

### 2.4 Icon Verification
- Spot-check 10 random `@phosphor-icons/react` imports across templates
- Verify the imported icon names exist in the package using the bash tool: `grep "^export.*IconName'" "@phosphor-icons/react/dist/index.d.ts"`
- Report any invalid icon names

## Phase 3: Status Updates (10 min)

### 3.1 Task List Update
- Open `/tasks/task-list.md`
- Review each open task (`- [ ]`) -- check the codebase to see if it's actually complete
- Mark completed tasks as `[x]` with completion date
- Add any new follow-up tasks discovered during this audit
- Update the "Last Updated" date at the top

### 3.2 Changelog Update
- Open `/CHANGELOG.md`
- Add an `[Unreleased]` section if not present
- Under appropriate subsections (Added/Changed/Fixed/Removed), log:
  - Any files moved/archived during cleanup
  - Any broken imports fixed
  - Any missing routes identified
  - Any other changes made during this session
- Follow Keep a Changelog v1.1.0 format

### 3.3 Master Task List
- If `/tasks/master-task-list.md` exists, update it to reflect current task-list.md status
- Ensure it accurately points to the next priority work

## Phase 4: Content Updates (10 min)

### 4.1 Sitemap Page
- Open the SiteMapTemplate component (`/src/app/components/templates/SiteMapTemplate.tsx`)
- Cross-reference with actual routes in `/src/app/routes/`
- Update the sitemap data if routes have been added or removed since last update
- Ensure all route groups are represented

### 4.2 Dev Tools Pages
- Check `/src/app/components/templates/DevToolsTemplate.tsx`
- Update any stats/counts displayed (total routes, total templates, total CSS files, etc.)
- Pull current values from the actual codebase, not from stale documentation

### 4.3 Guidelines Spot-Check
- Open `/guidelines/Guidelines.md` -- verify the "Last Updated" date and "System Version"
- Open `/guidelines/overview-sitemap.md` -- verify route count matches actual routes
- Open `/guidelines/overview-components.md` -- verify component count is approximate
- Update any obviously stale numbers (don't rewrite entire files)

## Phase 5: Final Report (5 min)

Provide a brief summary:
1. **Files moved/archived:** (count)
2. **Broken imports fixed:** (count and list)
3. **Missing routes found:** (count and list)
4. **Tasks completed/updated:** (count)
5. **Changelog entries added:** (count)
6. **Remaining open tasks:** (count, with pointer to task-list.md)

If any issues were found that require significant work (>30 min), add them as new tasks to `/tasks/task-list.md` rather than fixing them in this session.

---

## Design System Context

I've updated the tailwind css and /styles/global.css file to include colors, spacing, borders, radius and typography from my teams design system.
- Make sure all UI being generated uses these variables from the css, so that the generation adheres to my design system and the user has ability to update the styling by updating the css.
- For typography ONLY use the font faces defined in the css for all generated text.

---

## Success Criteria

- [ ] Root directory contains only config files + README.md + CHANGELOG.md
- [ ] Zero broken CSS imports
- [ ] Zero broken JS/TS imports
- [ ] Zero `lucide-react` imports
- [ ] task-list.md is current and accurate
- [ ] CHANGELOG.md has entry for this session
- [ ] Sitemap page reflects actual routes
- [ ] All completed task files archived (not deleted)
