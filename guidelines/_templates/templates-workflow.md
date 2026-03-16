# Templates — Workflow, Best Practices & Naming

**Category:** Documentation  
**Version:** 1.4.0  
**Last Updated:** 2026-03-15  
**Status:** Active  
**Parent:** [_templates.md](../_templates.md)  

---

## Template Usage Workflow

### Step 1: Choose Template

Select based on document type:
- Design token? → `design-token-template.md`
- Component? → `component-template.md`
- Process? → `general-template.md`
- Report? → `report-template.md`
- Prompt? → `prompt-template.md`
- Tasks? → `task-list-template.md`
- Docs? → `docs-template.md`
- ATTRIBUTIONS? → `ATTRIBUTIONS-template.md`
- README? → `README-template.md`
- CHANGELOG? → `CHANGELOG-template.md`

### Step 2: Copy Template

```bash
cp /guidelines/_templates/[template-name].md /guidelines/[new-file].md
```

### Step 3: Fill Sections

Replace placeholders with actual content:
- `[Token Name]` → Actual token name
- `[Component Name]` → Actual component name
- `[REQUIRED]` → Actual requirements
- `[Example]` → Actual code examples

### Step 4: Remove Unused Sections

Delete any template sections not applicable to your document.

### Step 5: Cross-Reference

Add links to related guidelines/components/tokens.

---

## Template Customization

### When to Customize

- Document has unique requirements not covered by templates
- Creating new documentation category
- Specialized domain (e.g., WooCommerce, accessibility)

### How to Customize

1. Copy closest matching template
2. Add/remove sections as needed
3. Update section headers
4. Keep consistent formatting
5. Document customization in template header

---

## Template Maintenance

### Updating Templates

- Update when patterns emerge across multiple documents
- Add new sections when consistently needed
- Remove sections never used
- Keep templates lean and focused

### Version Control

- Templates follow same versioning as Guidelines.md
- Major changes = new template version
- Document changes in template header

---

## Best Practices

### DO:

- Use templates for all new documentation
- Follow template structure closely
- Fill all required sections
- Cross-reference related documents
- Keep examples concise and clear

### DON'T:

- Skip template sections without reason
- Mix template structures
- Create one-off formats
- Duplicate content across files
- Use templates as-is without customization

---

## File Naming Conventions

### Design Tokens

`/guidelines/design-tokens/[token-type].md`  
Examples: `colors.md`, `spacing.md`, `typography.md`

### Components

`/guidelines/components/[ComponentName].md`  
Examples: `Logo.md`, `ScrollDownArrow.md`

### Blocks

`/guidelines/blocks/[category]/[block-name].md`  
Examples: `design/Accordion.md`, `text/Heading.md`

### Patterns

`/guidelines/patterns/[PatternName].md`  
Examples: `FAQSection.md`, `HeroHome.md`

### General Guidelines

`/guidelines/[topic].md`  
Examples: `accessibility.md`, `performance.md`

### Reports

`/reports/YYYY-MM/[descriptive-name].md`  
Examples: `2026-03/phase-3-completion-summary.md`

### Prompts

`/prompts/[category]/[descriptive-name].md`  
Examples: `memory-optimization/css-inventory.md`

### Tasks

`/tasks/[initiative]-tasks.md`  
Examples: `phosphor-migration-tasks.md`

### Docs

`/docs/[topic].md`  
Examples: `figma-iframe-errors-explained.md`

---

## Questions & Support

**Need help choosing a template?**
- Ask: "What type of content am I documenting?"
- Match to template purpose
- Use closest match and customize

**Template doesn't fit?**
- Start with `general-template.md`
- Customize structure
- Consider creating new template if pattern repeats

**Found a template issue?**
- Document in `/guidelines/_templates/template-issues.md`
- Propose improvements
- Submit template updates

---

| Version | Date | Changes |
|---------|------|---------|
| 1.4.0 | March 15, 2026 | Split into 2 sub-files |
| 1.3.0 | March 15, 2026 | Added templates 8-10 |

---

**See also:** [templates-catalog.md](./templates-catalog.md)
