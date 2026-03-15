# Writing Guidelines — Documentation Standards

**Category:** Standards  
**Version:** 2.0.0  
**Last Updated:** 2026-03-15  
**Status:** Active  
**Template Used:** _templates/general-template.md

---

## Purpose

**What:** Standards for writing and maintaining all `.md` documentation in this project.

**Why:** Consistent formatting improves AI comprehension and human readability. AI agents chunk content by headings — poorly structured files produce incorrect analysis.

**Who:** All contributors (human and AI) who create or update Markdown files.

---

## Markdown Hierarchy Rules

### Heading Structure

- **One H1 (`#`) per file** — the document title only.
- **Sequential headings** — H2 → H3 → H4. Never skip levels (no H1 → H3).
- **Self-contained sections** — each H2 section should be understandable without reading the full file.

### Semantic Clarity

- Use **active voice**: "The system validates tokens" not "Tokens are validated."
- **Name the subject**: "The CSS variable `--primary`" not "it" or "the variable."
- **Be specific**: "Remove 14 hardcoded hex values from ServiceTemplate" not "Fix styling issues."
- **Avoid vague pronouns**: Replace "it", "this", "that" with the specific noun.

---

## AI-Friendly Metadata (Frontmatter)

Every guideline file MUST start with this metadata header:

```markdown
# Document Title

**Category:** [Development/Process/Standards]  
**Version:** [X.Y.Z]  
**Last Updated:** [YYYY-MM-DD]  
**Status:** [Draft/Active/Deprecated]  
**Template Used:** [template filename]
```

### Frontmatter Rules

- **Always update `Version`** when editing any file. Increment: `1.0.1` for patches, `1.1.0` for additions, `2.0.0` for rewrites.
- **Always update `Last Updated`** with today's date in `YYYY-MM-DD` format.
- **Status values**: `Draft` (work in progress), `Active` (current), `Deprecated` (superseded — include link to replacement).

---

## Maintaining Guidelines Files

### Versioning

Every guideline file has a version number. Increment on every edit:

| Change Type | Version Bump | Example |
|---|---|---|
| Typo fix, formatting | Patch (`x.x.1`) | `1.0.0` → `1.0.1` |
| New section, content addition | Minor (`x.1.0`) | `1.0.1` → `1.1.0` |
| Full rewrite, restructure | Major (`2.0.0`) | `1.1.0` → `2.0.0` |

### Template Usage

All new guidelines MUST follow a template from `/guidelines/_templates/`. When updating existing files that do not follow a template, rewrite the file using the appropriate template as a base structure.

### Accuracy

Documented CSS variables, tokens, and font values must match what is in `/src/styles/`. If the CSS has changed, update the guideline BEFORE running any audit.

### No Silent Deletions

Use deprecation notices, not deletion:

```markdown
**Status:** Deprecated

> **DEPRECATED:** This file has been superseded by **[new-file.md](./new-file.md)**.
```

---

## File Locations

| Content Type | Location | Never In |
|---|---|---|
| Guidelines | `/guidelines/` | Root, `/docs/`, `/reports/` |
| Reports | `/reports/YYYY-MM/` | Root, `/guidelines/`, `/prompts/` |
| Task Lists | `/tasks/` | Root, `/docs/`, `/prompts/` |
| Prompts | `/prompts/` | Root, `/guidelines/`, `/reports/` |
| Documentation | `/docs/` | Root |

---

## Naming Conventions

| Content Type | Format | Example |
|---|---|---|
| Guidelines | `lowercase-with-hyphens.md` | `writing-guidelines.md` |
| Component docs | `ComponentName.md` (PascalCase) | `Logo.md` |
| Reports | `YYYY-MM-DD-description.md` | `2026-03-15-cleanup-report.md` |
| Task lists | `[initiative]-task-list.md` | `memory-optimization-task-list.md` |

---

## Guidelines vs Reports

| Guideline | Report |
|---|---|
| Permanent reference | Temporary record |
| Defines standards and rules | Documents what was done |
| Updated as system evolves | Timestamped, rarely updated |
| Stored in `/guidelines/` | Stored in `/reports/YYYY-MM/` |
| No date in filename | Date required in filename |

---

## Quality Checklist

Before finalizing any `.md` file:

- [ ] Stored in correct directory
- [ ] Uses correct naming convention
- [ ] Has frontmatter header (Category, Version, Last Updated, Status)
- [ ] One H1 only (the title)
- [ ] Sequential heading levels (no skipping)
- [ ] Self-contained sections
- [ ] Active voice used
- [ ] Specific descriptions (no vague language)
- [ ] Under file size limit (350 lines for guidelines, 500 for reports)

---

## Related Guidelines

- **[Guidelines.md](./Guidelines.md)** — Canonical project reference
- **[_templates.md](./_templates.md)** — Template index and usage guide
- **[Changelog-Guidelines.md](./Changelog-Guidelines.md)** — Changelog standards
- **[Readme-Guidelines.md](./Readme-Guidelines.md)** — README standards

---

## Version History

| Version | Date | Changes |
|---|---|---|
| 2.0.0 | 2026-03-15 | Full rewrite: merged markdown hierarchy rules, frontmatter standards, maintaining guidelines rules from Guidelines.md. Reduced from 589 to ~140 lines |
| 1.1.0 | 2026-03-11 | Initial creation |
