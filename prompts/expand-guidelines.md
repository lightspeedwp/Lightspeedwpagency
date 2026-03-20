# Expand Guidelines — Clarify and Strengthen Guidelines

**Type:** Discovery + Update  
**Version:** 1.0.0  
**Created:** March 18, 2026  
**Status:** Active  
**Trigger:** `expand guidelines`  
**Repeatable:** Yes  
**Estimated Duration:** 15-30 minutes

---

## Purpose

Scan the chat history and project state to identify areas where guidelines are ambiguous, incomplete, or frequently misunderstood. Recommend specific clarifications, new rules, or expanded sections that would prevent recurring issues.

---

## Instructions

**Environment Reminder:** You are working inside **Figma Make**. Do NOT suggest browser refresh, cache clearing, or terminal commands.

### Step 1 — Analyse Chat History for Guideline Gaps

1. Review the conversation for:
   - Corrections the user had to make after AI-generated output
   - Rules the user stated verbally that aren't captured in guidelines
   - Ambiguous areas where the AI made wrong assumptions
   - Design system rules that were violated despite existing guidelines

### Step 2 — Audit Guideline Completeness

1. Read `/guidelines/Guidelines.md` and key sub-guidelines.
2. Identify sections that are:
   - Too vague (e.g., "follow best practices" without specifics)
   - Missing examples
   - Missing edge cases
   - Contradictory with other guidelines

### Step 3 — Recommend Expansions

For each recommendation:

| Field | Value |
|---|---|
| **Guideline file** | Which file to update |
| **Section** | Which section to expand |
| **Current gap** | What's missing or unclear |
| **Proposed addition** | Specific text or rule to add |
| **Priority** | High / Medium / Low |

### Step 4 — User Approval

Present all recommendations. Only apply changes after user approval.

### Step 5 — Apply Approved Changes

1. Update the relevant guideline files.
2. Increment version numbers.
3. Update `Last Updated` dates.
4. Update `/CHANGELOG.md`.

---

**Prompt Location:** `/prompts/expand-guidelines.md`  
**Category:** Discovery  
**Difficulty:** Low  
**Repeatable:** Yes
