# Archive Prompts

**Type:** Maintenance  
**Version:** 1.0.0  
**Created:** March 18, 2026  
**Status:** Active  
**Trigger:** `archive prompts`  
**Repeatable:** Yes — run monthly or during cleanup  
**Estimated Duration:** 10-20 minutes

---

## Purpose

Review all prompt files in `/prompts/` and classify each as **general-purpose** (reusable) or **specific** (tied to a single page, one-time task, or completed initiative). General prompts are kept and improved; specific prompts that have been executed are archived.

---

## Instructions

**Environment Reminder:** You are working inside **Figma Make**. Do NOT suggest browser refresh, cache clearing, or terminal commands.

### Step 1 — Inventory

1. List all `.md` files in `/prompts/` (root level, not subdirectories).
2. List all subdirectories in `/prompts/` (these are orchestrator folders).
3. For each prompt, read the file and note:
   - **Title** (H1)
   - **Type** (from frontmatter)
   - **Status** (from frontmatter)
   - **Trigger word** (if registered in `/guidelines/prompt-triggers.md`)
   - **Scope** — Is it general/reusable or specific to a single page/feature/one-time task?

### Step 2 — Classify

For each prompt, assign one of these statuses:

| Status | Criteria | Action |
|---|---|---|
| **Keep** | Has a registered trigger word, is general-purpose and reusable | No action needed |
| **Generalize** | Contains useful logic but is too specific — can be made generic | Update the prompt to be generic, add a trigger word |
| **Archive** | Specific to a completed task, page, or initiative; already executed | Move to `/prompts/archive/` |
| **Delete** | Empty, duplicate, or superseded by another prompt | Delete the file |

### Step 3 — Generalize Prompts

For each prompt marked **Generalize**:

1. Rewrite the prompt to accept parameters (e.g., page name, component type) instead of hardcoding specifics.
2. Update frontmatter with a new trigger word.
3. Register the trigger word in `/guidelines/prompt-triggers.md` following the "Adding New Triggers" process.
4. Update `/guidelines/Guidelines.md` trigger table.

### Step 4 — Archive Specific Prompts

For each prompt marked **Archive**:

1. Create `/prompts/archive/` directory if it does not exist.
2. Move the prompt file to `/prompts/archive/`.
3. If the prompt had a registered trigger word, remove it from `/guidelines/prompt-triggers.md`.
4. If the prompt had a subdirectory (orchestrator), move the entire subdirectory to `/prompts/archive/`.

### Step 5 — Report

Output a summary table:

```
## Archive Prompts — [Today's Date]

| Prompt File | Classification | Action Taken |
|---|---|---|
| example.md | Archive | Moved to /prompts/archive/ |
| example2.md | Generalize | Rewritten, trigger `example` registered |
| example3.md | Keep | No action |

**Totals:** [N] kept, [N] generalized, [N] archived, [N] deleted
```

Add any follow-up items to `/tasks/task-list.md`.

---

**Prompt Location:** `/prompts/archive-prompts.md`  
**Category:** Maintenance  
**Difficulty:** Low  
**Repeatable:** Yes
