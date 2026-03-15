# README Standards — Guidelines

**Category:** Standards  
**Version:** 1.0.0  
**Last Updated:** 2026-03-15  
**Status:** Active  
**Template Used:** _templates/general-template.md

---

## Purpose

**What:** Standards for the project `README.md` file and any sub-project READMEs.

**Why:** The README is the first document humans and AI agents read. A well-structured README enables AI models to understand the project without full repo context.

**Who:** All contributors who update project documentation.

---

## Structural Requirements

Every README must include these sections in order:

### 1. Project Anchor (Required)

The first section must establish what the project IS and what rules govern it:

```markdown
# Project Name

> One-line description of what this project does.

**Role:** [What this project's role is — e.g., "WordPress block theme prototype"]  
**Tech Stack:** [Key technologies]  
**Status:** [Active/Beta/Deprecated]
```

The Project Anchor gives AI agents immediate context about the project scope and purpose.

### 2. Quick Start (Required)

Executable commands that get a new contributor running in under 2 minutes:

```markdown
## Quick Start

1. Clone the repository
2. Install dependencies: `pnpm install`
3. Start dev server: `pnpm dev`
4. Open: `http://localhost:5173`
```

For Figma Make projects, replace with environment-specific instructions:
- "This project runs in Figma Make — no local setup required."
- "All work is done via the Figma Make file editing tools."

### 3. Repository Map (Required)

A text-based directory structure showing where things live:

```markdown
## Repository Map

/
+-- /guidelines/          # All project standards and guidelines
+-- /prompts/             # Audit and task prompt files
+-- /reports/             # Audit findings and analysis
+-- /tasks/               # Task lists and tracking
+-- /docs/                # General documentation
+-- /scripts/             # Shell and utility scripts
+-- /src/app/             # Application source code
|   +-- /components/      # React components
|   +-- /data/            # Mock data files
|   +-- /routes/          # Route definitions
+-- /src/styles/          # CSS files and design tokens
```

### 4. Key Documentation Links (Required)

Direct links to the most important files:

```markdown
## Documentation

| Document | Purpose |
|---|---|
| [Guidelines](./guidelines/Guidelines.md) | Project standards (canonical) |
| [CHANGELOG](./CHANGELOG.md) | Version history |
| [Task List](./tasks/task-list.md) | Open tasks |
```

---

## Visual Content Rules

All diagrams, screenshots, and visual assets must have text alternatives:

### Diagrams

Every diagram must be accompanied by a text description or structured list that conveys the same information:

```markdown
### Architecture Diagram

![Architecture overview](./docs/architecture.png)

**Text Description:**
- The browser loads `index.html` which imports `main.tsx`
- `main.tsx` renders `App.tsx` which uses `RouterProvider`
- Routes are defined in `/src/app/routes/` and split by category
- Each route renders a Template component from `/src/app/components/templates/`
- Templates compose Pattern components from `/src/app/components/patterns/`
```

### Screenshots

```markdown
![Homepage screenshot](./docs/screenshots/homepage.png)

**What this shows:** The homepage hero section with neon gradient text,
a call-to-action button using the primary color token, and a scroll-down
arrow component. The layout uses the full-width hero pattern.
```

**Why:** AI models cannot "see" images. Text descriptions allow AI to reason about visual content.

---

## Contextual Independence

Each section of the README must be understandable independently:

### Do

- Include enough context in each section for standalone comprehension.
- Define abbreviations on first use in each section.
- Link to detailed docs rather than assuming prior knowledge.

### Do Not

- Use pronouns like "it" or "this" without a clear antecedent.
- Assume the reader has read previous sections.
- Reference "the above" or "as mentioned earlier."

### Example

```markdown
## Styling

The LSX Design project uses CSS variables for all design tokens.
Colors, spacing, typography, and border radius are defined in
`/src/styles/theme-base.css`. To change the site's visual style,
update the CSS variable values in the theme files.

See [design-tokens/colors.md](./guidelines/design-tokens/colors.md)
for the complete color system reference.
```

Each section tells the reader exactly what they need to know without requiring context from other sections.

---

## README for Sub-Directories

Sub-directory READMEs (e.g., `/prompts/README.md`) follow the same structure but are scoped to their directory:

1. **Purpose** — What this directory contains and why.
2. **Contents** — List of files with one-line descriptions.
3. **Usage** — How to use the files in this directory.
4. **Related** — Links to parent guidelines or related directories.

Keep sub-directory READMEs under 100 lines.

---

## Anti-Patterns

1. **Empty README** — A README with only the project name provides no value.
2. **Wall of text** — Use headings, tables, and lists. AI chunks content by headings.
3. **Outdated commands** — Dead Quick Start instructions waste contributor time.
4. **Missing repository map** — Without a map, AI agents guess at file locations.
5. **Images without descriptions** — AI cannot reason about undescribed images.

---

## Related Documentation

- **[Guidelines.md](./Guidelines.md)** — Project canonical reference
- **[/guidelines/_templates/README-template.md](./_templates/README-template.md)** — Starter template
- **[Changelog-Guidelines.md](./Changelog-Guidelines.md)** — Changelog standards

---

## Version History

| Version | Date | Changes |
|---|---|---|
| 1.0.0 | 2026-03-15 | Initial creation with Project Anchor, Quick Start, Repository Map, visual rules, contextual independence |
