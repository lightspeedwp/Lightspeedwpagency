# Fix — Master Orchestrator

**Category:** Workflow  
**Version:** 1.0.0  
**Last Updated:** 2026-03-18  
**Status:** Active  
**Trigger:** `fix`

---

## Purpose

Master orchestrator that runs **ALL** fix sub-triggers sequentially. Each fix prompt scans the codebase for specific violations, fixes them inline where possible, writes a report, and updates the task list.

This is a **fix-first** workflow — changes are applied immediately, then documented.

---

## What This Prompt Does

1. **Reads** this file to identify all fix sub-triggers
2. **Executes** each sub-trigger in the order listed below
3. **Waits** for each fix to complete before starting the next
4. **Prints** a summary dashboard showing pass/fail per fix
5. **Does NOT** auto-chain to `process reports` (use `fix && process reports` if needed)

---

## Fix Sub-Triggers (1 Total)

| # | Trigger | Prompt File | What It Fixes |
|---|---|---|---|
| 1 | `fix titles` | `/prompts/fix-titles.md` | Title Case → Sentence Case (headings, titles, labels) |

---

## Execution Order

```
fix
 └─ fix titles → /prompts/fix-titles.md
```

As new fix prompts are added, they will be registered here and executed sequentially.

---

## Workflow

### Step 1: Execute All Fix Sub-Triggers

For each fix sub-trigger:

1. Read the prompt file
2. Execute the fix workflow
3. Track success/failure
4. Continue to next fix

### Step 2: Print Summary Dashboard

After all fixes complete, print a summary:

```markdown
# Fix Orchestrator — Summary

**Execution Date:** YYYY-MM-DD  
**Total Fixes:** 1  
**Successful:** 1  
**Failed:** 0

## Results

| Fix | Status | Report |
|---|---|---|
| fix titles | ✅ PASS | `/reports/YYYY-MM/fix-titles-YYYY-MM-DD.md` |

## Next Steps

- Review reports in `/reports/YYYY-MM/`
- Check `/tasks/task-list.md` for manual review items
- Run `process reports` to organize and archive
```

### Step 3: No Auto-Chain

The `fix` orchestrator does **NOT** automatically run `process reports`. Use `fix && process reports` if you want to organize reports immediately.

---

## Adding New Fix Triggers

To add a new fix trigger:

1. Create `/prompts/fix-[name].md`
2. Add a row to the "Fix Sub-Triggers" table above
3. Add the trigger to `/guidelines/prompt-triggers.md`
4. Add the trigger to `/guidelines/Guidelines.md`
5. Increment this file's version number
6. Update the "Execution Order" section

---

## Environment Reminders

This is **Figma Make**. Never suggest:
- Browser refresh
- Cache clearing
- Terminal commands
- `npm run dev`
- Server restarts

All edits are made via file editing tools. Preview updates automatically.

---

## Design System Compliance

All fixes MUST maintain:
- **CSS variables** for colors, spacing, typography, borders, radius
- **BEM classes** (`.wp-*` prefix) — zero Tailwind utilities
- **Phosphor icons** only (zero Lucide)
- **Semantic HTML** (proper heading hierarchy, ARIA labels)
- **Font faces** from CSS only (zero hardcoded font names)

---

## Expected Outcomes

1. ✅ All fix sub-triggers executed sequentially
2. ✅ All reports generated in `/reports/YYYY-MM/`
3. ✅ Task list updated with manual review items
4. ✅ Summary dashboard printed
5. ✅ Codebase violations fixed inline

---

## Version History

| Version | Date | Changes |
|---|---|---|
| 1.0.0 | 2026-03-18 | Initial creation — master orchestrator for all fix prompts (1 sub-trigger: fix titles) |
