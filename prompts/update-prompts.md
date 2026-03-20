# Update Prompts

**Type:** Maintenance  
**Version:** 1.0.0  
**Created:** March 18, 2026  
**Status:** Active  
**Trigger:** `update prompts`  
**Repeatable:** Yes  
**Estimated Duration:** 10-20 minutes

---

## Purpose

Ensure all prompt files in `/prompts/` have correct frontmatter, accurate references to guideline files, and up-to-date environment reminders. Verify that every registered trigger word points to an existing prompt file.

---

## Instructions

**Environment Reminder:** You are working inside **Figma Make**. Do NOT suggest browser refresh, cache clearing, or terminal commands.

### Step 1 — Frontmatter Audit

1. Read all `.md` files in `/prompts/`.
2. Verify each has: Title (H1), Type, Version, Created, Status, Trigger (if registered).
3. Fix missing or malformed frontmatter.

### Step 2 — Reference Integrity

1. For each prompt, check that referenced guideline files exist.
2. Fix broken guideline references (update paths).

### Step 3 — Environment Reminder

1. Ensure every prompt contains the Figma Make environment reminder block.
2. Add it if missing.

### Step 4 — Trigger Sync

1. Read `/guidelines/prompt-triggers.md`.
2. For each registered trigger, verify the prompt file exists at the listed path.
3. Flag any orphaned triggers (trigger registered but prompt file missing).
4. Flag any unregistered prompts (prompt file exists with a trigger word but not registered).

### Step 5 — Report

```
## Update Prompts — [Today's Date]

| Issue | Count |
|---|---|
| Frontmatter fixed | [N] |
| References updated | [N] |
| Environment reminders added | [N] |
| Orphaned triggers | [N] |
| Unregistered prompts | [N] |
```

---

**Prompt Location:** `/prompts/update-prompts.md`  
**Category:** Maintenance  
**Difficulty:** Low  
**Repeatable:** Yes
