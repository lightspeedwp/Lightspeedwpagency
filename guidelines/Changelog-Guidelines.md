# Changelog Standards — Guidelines

**Category:** Standards  
**Version:** 1.0.0  
**Last Updated:** 2026-03-15  
**Status:** Active  
**Template Used:** _templates/general-template.md

---

## Purpose

**What:** Standards for maintaining the project `CHANGELOG.md` file.

**Why:** A consistent changelog enables humans and AI agents to understand project history. The changelog is a protected file that must never be deleted.

**Who:** All contributors (human and AI) who make notable changes to the project.

---

## Format Requirement

The changelog strictly follows **[Keep a Changelog v1.1.0](https://keepachangelog.com/en/1.1.0/)**.

### File Header (Required)

```markdown
# Changelog

All notable changes to this project will be documented in this file.

The format is based on [Keep a Changelog](https://keepachangelog.com/en/1.1.0/),
and this project adheres to [Semantic Versioning](https://semver.org/spec/v2.0.0.html).
```

### Version Section Format

```markdown
## [X.Y.Z] - YYYY-MM-DD
```

- Latest version appears **first** (reverse chronological order).
- An `[Unreleased]` section always exists at the top.
- Date uses ISO 8601 format: `YYYY-MM-DD`.

---

## Semantic Versioning (SemVer 2.0.0)

All version numbers follow `MAJOR.MINOR.PATCH`:

| Component | When to Increment | Example |
|---|---|---|
| **MAJOR** (`X.0.0`) | Incompatible API changes, major redesigns, breaking changes | Removing a public component, changing data schema |
| **MINOR** (`0.X.0`) | New functionality added in a backward-compatible manner | New template, new pattern, new data file |
| **PATCH** (`0.0.X`) | Backward-compatible bug fixes | Accessibility fix, broken link repair, CSS correction |

### Decision Guide

- "Will existing pages break?" → **MAJOR**
- "Is this new functionality?" → **MINOR**
- "Is this a fix to existing functionality?" → **PATCH**

---

## Change Type Categories

Group changes under these headings **only**. Use only categories that apply:

| Category | Usage | Example |
|---|---|---|
| **Added** | New features, components, pages, data files | "Portfolio archive template with filterable grid" |
| **Changed** | Changes to existing functionality, refactors | "Replace hardcoded hex colors with CSS variables in 14 templates" |
| **Deprecated** | Features marked for removal in a future version | "LegacyNav component deprecated, use MegaMenu instead" |
| **Removed** | Deleted features, removed files, eliminated dependencies | "Remove unused TestimonialInline component (127 lines)" |
| **Fixed** | Bug fixes, accessibility fixes, broken link repairs | "WCAG 2.1 AA contrast ratios for filter buttons in dark mode" |
| **Security** | Vulnerability patches, security improvements | "Sanitize user input in search overlay" |

---

## Update Process

### During Development

1. Add entries to the `[Unreleased]` section as work is done.
2. Group entries under the appropriate category heading.
3. Write in **imperative mood**: "Add portfolio filter" not "Added portfolio filter."

### At Release Time

1. Move all `[Unreleased]` entries into a new versioned header: `## [X.Y.Z] - YYYY-MM-DD`
2. Create a fresh empty `[Unreleased]` section at the top.
3. Add the comparison link for the new version at the bottom.
4. Update `version` in `package.json` to match.

### Comparison Links (Required)

Every version must have a comparison link at the bottom of the file:

```markdown
[unreleased]: https://github.com/lightspeedwp/lsx-design/compare/v1.0.0...HEAD
[1.0.0]: https://github.com/lightspeedwp/lsx-design/compare/v0.0.1...v1.0.0
```

---

## Writing Good Entries

### Do

- Be **specific**: "Remove 7 orphaned CSS files totaling 2,849 lines" not "Clean up files."
- Reference **file paths** or component names when useful.
- Group related changes into one entry when they form one logical change.
- Mention **breaking changes** prominently under Changed or Removed.

### Do Not

- Use commit messages as entries (too granular).
- Include trivial changes (whitespace, typo in comments).
- Use vague descriptions ("Various improvements", "Bug fixes").
- Skip documenting deprecations or removals.

---

## When to Update

### Always Update For

- New templates, components, patterns, or pages
- Design system token changes (colors, spacing, typography)
- Accessibility improvements or fixes
- Navigation or routing changes
- CSS architecture changes
- Dependency additions or removals
- Breaking changes of any kind

### Do Not Update For

- Documentation-only changes (reports, guidelines, task lists)
- Prompt or task file creation
- Formatting or whitespace changes

---

## Anti-Patterns

1. **Commit log as changelog** — Commits document code evolution; changelogs document user-facing changes.
2. **Ignoring deprecations** — Always document what will break before it breaks.
3. **Inconsistent dates** — Always ISO 8601 (`YYYY-MM-DD`).
4. **Skipping entries** — If the changelog exists, maintain it consistently.

---

## Related Documentation

- **[Keep a Changelog v1.1.0](https://keepachangelog.com/en/1.1.0/)** — Format specification
- **[Semantic Versioning 2.0.0](https://semver.org/spec/v2.0.0.html)** — Version numbering
- **[Guidelines.md](./Guidelines.md)** — Project canonical reference
- **[/guidelines/_templates/CHANGELOG-template.md](./_templates/CHANGELOG-template.md)** — Starter template

---

## Version History

| Version | Date | Changes |
|---|---|---|
| 1.0.0 | 2026-03-15 | Initial creation from changelog-maintenance.md content, expanded with SemVer decision guide |
