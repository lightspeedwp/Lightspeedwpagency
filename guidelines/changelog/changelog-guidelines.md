# Changelog Guidelines

**Location:** `/guidelines/changelog/changelog-guidelines.md`
**Applies to:** `/CHANGELOG.md` (project root)
**Last Updated:** February 25, 2026

---

## Overview

The LSX Design project maintains a `CHANGELOG.md` file in the project root. This file is **protected** and must **never be deleted**. It follows the [Keep a Changelog](https://keepachangelog.com/en/1.1.0/) format and [Semantic Versioning](https://semver.org/spec/v2.0.0.html).

---

## Protected File Status

`CHANGELOG.md` is one of only two `.md` files permitted in the project root (along with `README.md`). It must:

- **Always exist** in the project root as `/CHANGELOG.md`
- **Never be deleted**, moved, or renamed
- **Never be replaced** by an alternative format (e.g. GitHub Releases alone)
- **Always follow** the Keep a Changelog format described below

---

## Format Specification

The changelog follows the [Keep a Changelog v1.1.0](https://keepachangelog.com/en/1.1.0/) specification.

### File Header (Required)

Every `CHANGELOG.md` must begin with:

```markdown
# Changelog

All notable changes to this project will be documented in this file.

The format is based on [Keep a Changelog](https://keepachangelog.com/en/1.1.0/),
and this project adheres to [Semantic Versioning](https://semver.org/spec/v2.0.0.html).
```

### Version Sections

Each version section uses the format:

```markdown
## [VERSION] - YYYY-MM-DD
```

- **VERSION** follows Semantic Versioning: `MAJOR.MINOR.PATCH`
- **Date** uses ISO 8601 format: `YYYY-MM-DD`
- The latest version appears **first** (reverse chronological order)
- An `[Unreleased]` section always exists at the top

### Change Type Categories (Required)

Group changes under these headings **only**. Use only the categories that apply:

| Category | Usage |
|---|---|
| **Added** | New features, new components, new pages, new data files |
| **Changed** | Changes to existing functionality, refactors, migrations |
| **Deprecated** | Features marked for removal in a future version |
| **Removed** | Deleted features, removed files, eliminated dependencies |
| **Fixed** | Bug fixes, accessibility fixes, broken link repairs |
| **Security** | Vulnerability patches, security improvements |

### Comparison Links (Required)

Every version must have a comparison link at the bottom of the file:

```markdown
[unreleased]: https://github.com/lightspeedwp/lsx-design/compare/v1.0.0...HEAD
[1.0.0]: https://github.com/lightspeedwp/lsx-design/compare/v0.0.1...v1.0.0
[0.0.1]: https://github.com/lightspeedwp/lsx-design/releases/tag/v0.0.1
```

---

## Guiding Principles

1. **Changelogs are for humans, not machines.** Write clear, concise descriptions that non-technical stakeholders can understand.
2. **There should be an entry for every single version.** No version release without a changelog entry.
3. **The same types of changes should be grouped.** Use the six category headings consistently.
4. **Versions and sections should be linkable.** Include comparison links for every version.
5. **The latest version comes first.** Reverse chronological order, always.
6. **The release date of each version is displayed.** ISO 8601 format (`YYYY-MM-DD`).

---

## Writing Good Entries

### Do

- Write in the **imperative mood** (e.g. "Add portfolio filter" not "Added portfolio filter")
- Be **specific** about what changed (e.g. "Replace hardcoded hex colours with CSS variables in 14 templates" not "Update styles")
- Reference **file paths** or component names when useful
- Group related changes into a single entry when they form one logical change
- Mention **breaking changes** prominently under Changed or Removed

### Do Not

- Use commit messages as changelog entries (too granular, too noisy)
- Include trivial changes (whitespace fixes, typo corrections in comments)
- Use vague descriptions ("Various improvements", "Bug fixes")
- Include internal implementation details that are not user-facing
- Skip documenting deprecations or removals

### Entry Format

Each entry is a bullet point starting with a hyphen:

```markdown
### Added

- Portfolio archive template with filterable grid and category navigation
- ScrollDownArrow component for all fullscreen hero sections (30 templates)
- Fluid typography system using `clamp()` for responsive text scaling

### Fixed

- Mega menu broken links repaired (3 links: Services, Solutions, Portfolio)
- WCAG 2.1 AA contrast ratios for filter buttons in dark mode
```

---

## When to Update the Changelog

### Always Update For

- New templates, components, patterns, or pages
- Design system token changes (colours, spacing, typography, borders)
- Accessibility improvements or fixes
- Navigation or routing changes
- Data system changes (new data files, schema changes)
- CSS architecture changes (new CSS files, migration from inline styles)
- Dependency additions or removals
- Breaking changes of any kind

### Do Not Update For

- Internal refactors with no user-facing change
- Documentation-only changes (reports, guidelines, task lists)
- Prompt or task file creation
- Formatting or whitespace changes

---

## Workflow Integration

### During Development

1. When starting work that will result in notable changes, add entries to the `[Unreleased]` section
2. Group entries under the appropriate category heading
3. Keep entries concise but specific

### At Release Time

1. Move all `[Unreleased]` entries into a new version section: `## [X.Y.Z] - YYYY-MM-DD`
2. Create a fresh empty `[Unreleased]` section at the top
3. Add the comparison link for the new version at the bottom of the file
4. Update the `[unreleased]` comparison link to compare from the new version
5. Update `version` in `package.json` to match

### Version Numbering

Following Semantic Versioning:

- **MAJOR** (X.0.0): Breaking changes, major redesigns, incompatible API changes
- **MINOR** (0.X.0): New features, new templates, backward-compatible additions
- **PATCH** (0.0.X): Bug fixes, accessibility fixes, minor corrections

---

## Yanked Releases

If a release must be pulled due to a critical bug or security issue:

```markdown
## [0.2.1] - 2026-03-15 [YANKED]
```

The `[YANKED]` tag must be clearly visible. Yanked versions should remain in the changelog for reference.

---

## Anti-Patterns to Avoid

1. **Commit log diffs as changelog:** Commits document code evolution; changelogs document user-facing changes
2. **Ignoring deprecations:** Always document what will break before it breaks
3. **Confusing date formats:** Always use ISO 8601 (`YYYY-MM-DD`)
4. **Inconsistent updates:** If the changelog exists, it must be consistently maintained
5. **Machine-only formats:** The changelog is for humans; keep it readable

---

## Related Documentation

- **[Keep a Changelog v1.1.0](https://keepachangelog.com/en/1.1.0/)** - Format specification
- **[Semantic Versioning 2.0.0](https://semver.org/spec/v2.0.0.html)** - Version numbering
- **[Guidelines.md](/guidelines/Guidelines.md)** - Project canonical reference
- **[GUIDELINES-FOR-WRITING-GUIDELINES.md](/guidelines/GUIDELINES-FOR-WRITING-GUIDELINES.md)** - Guidelines standards
