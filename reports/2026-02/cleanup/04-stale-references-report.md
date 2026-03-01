# Stale Guideline References Report

**Date:** February 25, 2026
**Prompt:** `/prompts/cleanup/04-stale-references.md`

## Known Stale References in Guidelines.md

| Section | Reference | Issue | Action |
|---|---|---|---|
| Step 7: Infrastructure | `storybook/storybook-configuration.md` | Storybook has been removed from the project | **REMOVE** reference |
| Step 7: Infrastructure | `testing/test-organization.md` | `/guidelines/testing/` directory may be empty | **VERIFY** and clean |
| Documentation Structure | `storybook/` folder listed | Storybook references should be removed | **REMOVE** from tree |
| Documentation Structure | `testing/` folder listed with multiple files | May be stale | **VERIFY** contents |
| Project Status section | Hundreds of lines of old status entries (Dec 2024 - Jan 2025) | Clutters the file, makes it hard to find current info | **TRIM** to last 3 months |
| "See:" links section | 80+ "See:" links to report files | Many reference files that may have been deleted | **AUDIT** each link |

## Empty/Missing Directories

| Directory | Status | Action |
|---|---|---|
| `/guidelines/testing/` | Needs verification | Check if files exist; if empty, remove from docs |
| `/guidelines/storybook/` | References removed feature | Remove if empty |
| `/guidelines/planning/` | May have useful content | Keep if populated |

## Recommendations

1. **Trim Project Status** — Keep only Feb 2026 entries. Archive older status to a separate changelog file.
2. **Remove Storybook references** — From Guidelines.md, DOCUMENTATION-INDEX.md, and documentation tree.
3. **Audit all "See:" links** — This is a larger task; flag for future cleanup.
4. **Verify /guidelines/testing/** — If it has content, keep. If empty, remove references.
