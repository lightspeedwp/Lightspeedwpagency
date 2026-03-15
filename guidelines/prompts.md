# Prompt System — Guidelines

**Category:** Process  
**Version:** 2.1.0  
**Last Updated:** 2026-03-15  
**Status:** Active  
**Template Used:** _templates/general-template.md

---

## Purpose

**What:** Standards for creating, organizing, and executing AI prompts and their outputs (reports, task lists).

**Why:** Consistent prompt structure ensures repeatable, high-quality audit results and actionable task lists.

**Who:** All contributors (human and AI) who create or execute prompts.

---

## Prompt Workflow (Default Sequence)

When asked to "write a prompt" or "create an audit", always follow this sequence **in order**:

### Step 0: Update Guidelines First

Before running any audit, verify that all connected guidelines are up-to-date:

- The guidelines the audit references must accurately reflect the current codebase.
- If design tokens changed → update design token guidelines first.
- If new components were added → update component guidelines first.

### Step 1: Create the Prompt

- **Single prompt** → `/prompts/[prompt-name].md`
- **Orchestrator** → `/prompts/[name]/00-ORCHESTRATOR.md` + sub-files

### Step 2: Run the Audit/Task

- Execute the prompt against the codebase.
- Document all findings thoroughly.

### Step 3: Save the Report

- **Single prompt** → `/reports/[YYYY-MM]/[report-name].md`
- **Orchestrator** → `/reports/[YYYY-MM]/[orchestrator-name]/[sub-report].md` (one report per sub-prompt)

### Step 4: Create the Task List

- **Only after** the prompt has fully completed and all reports are documented.
- Save to `/tasks/[initiative-name]-task-list.md`.
- Also add critical items to `/tasks/task-list.md`.

### Why This Order Matters

The task list comes last because:
1. The AI needs complete audit data to create accurate tasks.
2. Partial audits produce incomplete task lists.
3. The report serves as evidence for each task.

---

## Directory Structure

```
/prompts/
+-- README.md                          # Index of all prompts
+-- cleanup.md                         # Single prompt (root)
+-- continue.md                        # Single prompt (root)
+-- [name]/                            # Orchestrator folder
|   +-- 00-ORCHESTRATOR.md             # Master prompt
|   +-- 01-sub-prompt.md              # Sub-prompt 1
|   +-- 02-sub-prompt.md              # Sub-prompt 2
```

### Single Prompts vs Orchestrators

| Type | Location | Report Output |
|---|---|---|
| **Single prompt** | `/prompts/[name].md` | `/reports/YYYY-MM/[name].md` |
| **Orchestrator** | `/prompts/[name]/00-ORCHESTRATOR.md` | `/reports/YYYY-MM/[name]/[sub-report].md` |

---

## Prompt File Structure

Every prompt file MUST include these sections. Use the template at `/guidelines/_templates/prompt-template.md`.

### Required Header

```markdown
# [Prompt Title]

**Type:** [Audit/Migration/Optimization/Implementation]  
**Created:** [YYYY-MM-DD]  
**Status:** [Draft/Ready/Complete]
```

### Required Sections

1. **Prompt Purpose** — What the prompt accomplishes (1-2 sentences).
2. **Context / Background** — Problem statement, current state, desired state.
3. **Workflow Steps** — Numbered steps the AI must follow.
4. **Expected Output** — What files/reports the prompt produces.
5. **Success Criteria** — Checkboxes defining "done."

---

## Report Structure

All reports MUST follow the template at `/guidelines/_templates/report-template.md`.

### Required Sections

1. **Executive Summary** — Key findings in 3-5 bullet points.
2. **Findings** — Detailed findings with evidence (code snippets, file paths).
3. **Recommendations** — Prioritized action items (P0-P3).

### Naming Convention

```
/reports/YYYY-MM/[description].md
/reports/YYYY-MM/[orchestrator-name]/[sub-report].md
```

---

## Task List Structure

All task lists MUST follow the template at `/guidelines/_templates/task-list-template.md`.

### Rules

- ✅ **MUST** use checkbox format: `- [ ] Task description`
- ✅ **MUST** include priority levels (P0-P3)
- ✅ **MUST** be created in `/tasks/` folder only
- ✅ **MUST** be created ONLY after the prompt has completed and reports are documented
- ❌ **NEVER** create task files in root, `/docs/`, or `/prompts/`

### Naming Convention

```
/tasks/[initiative-name]-task-list.md
```

Also add critical items to the general tracker: `/tasks/task-list.md`.

---

## Trigger Words

See **[prompt-triggers.md](./prompt-triggers.md)** for the full registry of 20 registered trigger words across 5 categories.

| Category | Triggers | Count |
|---|---|---|
| **Workflow** | `cleanup`, `continue`, `cleanup and continue`, `status`, `changelog`, `sitemap`, `process reports` | 7 |
| **Audit** | `audit tokens`, `audit css`, `audit a11y`, `audit data`, `audit responsive`, `audit styles`, `audit guidelines` | 7 |
| **Scaffold** | `new template`, `new pattern`, `new block` | 3 |
| **Guidelines** | `update guidelines`, `cleanup guidelines` | 2 |
| **Release** | `release` | 1 |

---

## Design System Context (Include in Every Prompt)

Every prompt that generates UI must include:

```
Design System Requirements:
- ALL UI must use CSS variables from /src/styles/ for colors, spacing, borders, radius, typography
- ONLY use font faces defined in the CSS — never hardcode font names
- Icons: @phosphor-icons/react only — zero lucide-react imports
- Classes: .wp-* prefix for WordPress — no Tailwind utility classes
- Router: react-router only — never react-router-dom
```

---

## Quality Checklist

Before marking a prompt as "Ready":

- [ ] Stored in `/prompts/` (correct location)
- [ ] Has required header (Type, Created, Status)
- [ ] Has all required sections (Purpose, Context, Steps, Output, Criteria)
- [ ] References design system requirements
- [ ] Specifies output file locations
- [ ] Success criteria are checkboxes

---

## Related Guidelines

- **[prompt-triggers.md](./prompt-triggers.md)** — Trigger word registry
- **[writing-guidelines.md](./writing-guidelines.md)** — Markdown standards
- **[housekeeping.md](./housekeeping.md)** — Report and task cleanup rules
- **[Guidelines.md](./Guidelines.md)** — Canonical project reference

---

## Version History

| Version | Date | Changes |
|---|---|---|
| 2.1.0 | 2026-03-15 | Updated trigger word section to reference 20 triggers across 5 categories |
| 2.0.0 | 2026-03-15 | Full rewrite: merged prompt workflow from Guidelines.md, added report/task structure, reduced from 892 to ~170 lines |
| 1.1.0 | 2026-03-11 | Initial creation |