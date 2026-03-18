# Update Triggers — Sync Trigger Registry

**Type:** Maintenance  
**Created:** 2026-03-18  
**Version:** 1.0.0  
**Status:** Ready  
**Trigger Word:** `update triggers`

---

## Prompt purpose

**Objective:** Audit and synchronize the trigger word registry in `/guidelines/prompt-triggers.md` and the trigger table in `/guidelines/Guidelines.md` to ensure they accurately reflect all existing prompt files in `/prompts/`.

**When to use:** After creating, renaming, or deleting prompt files. After adding new trigger words to prompts that are not yet registered.

**Reference guidelines (read before starting):**
- `/guidelines/Guidelines.md` — canonical trigger table (Audits section), version history
- `/guidelines/build-rules.md` — file size limits

**This prompt does not call other prompts.** It is a registry maintenance operation only.

---

## Workflow steps

### Step 1: Inventory all prompt files

1. List every `.md` file in `/prompts/` (root level only — not subdirectories).
2. For each file, extract:
   - Filename
   - Trigger word (from frontmatter `Trigger Word:` field)
   - Type (Audit, Utility, Scaffold, Maintenance, Code Quality, Release)
   - Prompt purpose (one-line summary)

### Step 2: Read current registries

1. Read `/guidelines/prompt-triggers.md` — extract all registered triggers.
2. Read `/guidelines/Guidelines.md` — extract the trigger table from the Audits/Scaffolds/etc. sections.

### Step 3: Diff and identify issues

| Issue type | Description |
|---|---|
| **Unregistered prompt** | Prompt file exists with a trigger word but is not in the registry |
| **Orphaned trigger** | Trigger registered but prompt file does not exist |
| **Mismatched description** | Registry description differs from prompt's actual purpose |
| **Wrong prompt path** | Registry points to a file that has been renamed or moved |
| **Count mismatch** | Total trigger counts in headers/tables don't match actual count |
| **Missing from Guidelines.md** | Trigger in `prompt-triggers.md` but not in `Guidelines.md` table |

### Step 4: Fix all issues

1. **Add unregistered prompts** to both `prompt-triggers.md` and `Guidelines.md`.
2. **Remove orphaned triggers** from both files.
3. **Update descriptions** to match prompt purpose.
4. **Fix paths** to point to correct files.
5. **Update counts** in section headers (e.g., "### Audits (24)").
6. **Sync Guidelines.md** trigger table with `prompt-triggers.md`.

### Step 5: Validate reference hierarchy

Verify no circular references exist:

**Allowed reference direction (one-way only):**

```
Level 0: Guidelines (source of truth)
  ↑ referenced by
Level 1: Individual prompts (audit-*, apply-*, new-*, utility prompts)
  ↑ referenced by
Level 2: Orchestrators (audit.md, cleanup.md)
  ↑ referenced by
Level 3: Meta prompts (continue.md — reads task lists to find prompts)
```

**Rules:**
- Level 0 files (guidelines) NEVER reference prompt files
- Level 1 prompts reference Level 0 guidelines only — never other Level 1 prompts
- Level 2 orchestrators reference Level 1 prompts (to call them) and Level 0 guidelines
- Level 3 prompts reference Level 0 guidelines and task lists — they discover Level 1/2 prompts via tasks, not direct references
- `prompt-triggers.md` is a registry (Level 0) — it lists prompt paths for human/AI lookup but never executes them
- No prompt ever references `prompt-triggers.md` for execution — only for informational context

**Exception:** `new-block.md` may redirect to `new-pattern.md` (same-level redirect, not circular).

### Step 6: Update version metadata

1. Increment `prompt-triggers.md` version number.
2. Add Version History entry to `prompt-triggers.md`.
3. Update `Guidelines.md` version if trigger table changed.
4. Add Version History entry to `Guidelines.md`.
5. Update `Last Updated` dates on both files.

### Step 7: Update audit orchestrator

If any new audit triggers were added:
1. Add them to the execution order table in `/prompts/audit.md`.
2. Add them to the post-audit summary dashboard.
3. Update the sub-trigger count in `audit.md`.
4. Update `audit.md` version number and history.

### Step 8: Output summary

```
## Trigger Registry Update — [Today's Date]

| Action | Count |
|--------|-------|
| Triggers added | [N] |
| Triggers removed | [N] |
| Descriptions updated | [N] |
| Paths corrected | [N] |
| Circular references fixed | [N] |
| Total registered triggers | [N] |

### Files Updated
- /guidelines/prompt-triggers.md (vX.Y.Z → vX.Y.Z)
- /guidelines/Guidelines.md (vX.Y.Z → vX.Y.Z)
- /prompts/audit.md (if audit triggers changed)
```

---

## Success criteria

- [ ] Every prompt file with a trigger word is registered in `prompt-triggers.md`
- [ ] Every prompt file with a trigger word is in the `Guidelines.md` trigger table
- [ ] Zero orphaned triggers (registered but no prompt file)
- [ ] All descriptions match prompt purposes
- [ ] All paths point to existing files
- [ ] All counts are accurate
- [ ] Zero circular references between prompts
- [ ] Reference hierarchy validated (guidelines → prompts → orchestrators)
- [ ] Version numbers and histories updated

---

## Version history

| Version | Date | Changes |
|---|---|---|
| 1.0.0 | 2026-03-18 | Initial creation |
