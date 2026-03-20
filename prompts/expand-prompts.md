# Expand Prompts — Discover New Reusable Prompts

**Type:** Discovery + Creation  
**Version:** 1.0.0  
**Created:** March 18, 2026  
**Status:** Active  
**Trigger:** `expand prompts`  
**Repeatable:** Yes  
**Estimated Duration:** 15-30 minutes

---

## Purpose

Scan the current chat history and project state to identify repetitive tasks the user performs manually. Recommend new generic, reusable prompts (with trigger words) that would automate these tasks. Also identify existing prompts that could be improved or expanded.

---

## Instructions

**Environment Reminder:** You are working inside **Figma Make**. Do NOT suggest browser refresh, cache clearing, or terminal commands.

### Step 1 — Analyse Chat History

1. Review the current conversation for recurring patterns:
   - Tasks the user has asked for multiple times
   - Multi-step workflows the user describes manually
   - Common follow-up requests after running existing triggers
   - Pain points or complaints about manual processes

### Step 2 — Analyse Existing Prompts

1. Read all prompt files in `/prompts/`.
2. Identify prompts that:
   - Could be combined into a single, more powerful prompt
   - Are missing useful steps that the user frequently adds manually
   - Have overlapping scope that could be consolidated

### Step 3 — Recommend New Prompts

For each recommendation, provide:

| Field | Value |
|---|---|
| **Trigger word** | Proposed trigger (e.g., `validate imports`) |
| **Purpose** | One-sentence description |
| **Rationale** | Why this would save the user time |
| **Steps** | High-level outline of what the prompt would do |
| **Priority** | High / Medium / Low |

### Step 4 — Recommend Prompt Improvements

For existing prompts that could be expanded:

| Prompt | Current Gap | Recommended Addition |
|---|---|---|
| `cleanup.md` | No archive step | Add `archive` orchestrator invocation |
| `audit-data.md` | Doesn't auto-fix | Add migration step for hardcoded content |

### Step 5 — User Approval

Present all recommendations to the user. Only create prompt files and register trigger words after the user approves specific recommendations.

### Step 6 — Create Approved Prompts

For each approved recommendation:

1. Create the prompt file in `/prompts/[trigger-name].md`.
2. Register the trigger in `/guidelines/prompt-triggers.md`.
3. Update `/guidelines/Guidelines.md` trigger table.
4. Update `/CHANGELOG.md`.

---

**Prompt Location:** `/prompts/expand-prompts.md`  
**Category:** Discovery  
**Difficulty:** Low  
**Repeatable:** Yes
