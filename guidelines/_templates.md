# Guidelines Templates Usage Guide — Guidelines

**Category:** Documentation  
**Version:** 1.2.0  
**Last Updated:** 2026-03-13  
**Status:** Active  
**Template Used:** _templates/general-template.md  
**Location:** `/guidelines/_templates/`  
**Purpose:** Standardized templates for all documentation types

---

## Available Templates

### 1. Design Tokens Template
**File:** `design-token-template.md`  
**Use for:** Color systems, typography, spacing, shadows, borders, etc.

**When to use:**
- Defining CSS variable systems
- Documenting token scales (spacing, typography, colors)
- Specifying design system foundations
- Creating reusable value systems

**Structure:**
- Overview (what this token controls)
- CSS Variables (complete list)
- Usage Examples (code snippets)
- WordPress Mapping (how it maps to theme.json)
- Do's and Don'ts
- Related Tokens (cross-references)

---

### 2. Component Guidelines Template
**File:** `component-template.md`  
**Use for:** React components, WordPress blocks, patterns

**When to use:**
- Documenting React component APIs
- WordPress block guidelines
- Pattern component specifications
- UI component libraries

**Structure:**
- Component Overview
- Props/API Reference
- CSS Classes (BEM structure)
- Usage Examples
- Variants
- Accessibility Requirements
- WordPress Mapping
- Related Components

---

### 3. General Guidelines Template
**File:** `general-template.md`  
**Use for:** Processes, standards, architectural decisions

**When to use:**
- Development workflows
- Code standards
- Architectural patterns
- Best practices documentation
- Process documentation

**Structure:**
- Purpose
- Scope
- Requirements (MUST/SHOULD/MAY)
- Examples
- Anti-patterns (what NOT to do)
- Checklist
- Related Guidelines

---

### 4. Report Template
**File:** `report-template.md`  
**Use for:** Audit reports, completion reports, analysis documents

**When to use:**
- Documenting audit findings
- Recording completion status
- Analysis and recommendations
- Progress tracking

**Structure:**
- Executive Summary
- Methodology
- Findings
- Impact Analysis
- Recommendations
- Action Items
- Success Criteria

---

### 5. Prompt Template
**File:** `prompt-template.md`  
**Use for:** AI prompts, orchestrator prompts, task automation

**When to use:**
- Creating systematic AI workflows
- Multi-step process automation
- Audit orchestrators
- Batch operations

**Structure:**
- Prompt Purpose
- Context/Background
- Input Requirements
- Expected Output
- Success Criteria
- Workflow Steps
- Error Handling

---

### 6. Task List Template
**File:** `task-list-template.md`  
**Use for:** Project task tracking, implementation plans

**When to use:**
- Breaking down large initiatives
- Tracking implementation progress
- Sprint planning
- Feature development roadmaps

**Structure:**
- Initiative Overview
- Task Categories
- Task Items (with checkboxes)
- Priority Levels
- Time Estimates
- Dependencies
- Completion Criteria

---

### 7. Documentation Template
**File:** `docs-template.md`  
**Use for:** General documentation, quick references, onboarding guides

**When to use:**
- Creating reference documentation
- Onboarding materials
- Quick start guides
- Troubleshooting guides

**Structure:**
- Document Purpose
- Audience
- Prerequisites
- Content Sections
- Examples
- FAQs
- Next Steps

---

## Template Usage Workflow

### Step 1: Choose Template
Select the appropriate template based on document type:
- Design token? → `design-token-template.md`
- Component? → `component-template.md`
- Process? → `general-template.md`
- Report? → `report-template.md`
- Prompt? → `prompt-template.md`
- Tasks? → `task-list-template.md`
- Docs? → `docs-template.md`

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
- Update templates when patterns emerge across multiple documents
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
- ✅ Use templates for all new documentation
- ✅ Follow template structure closely
- ✅ Fill all required sections
- ✅ Cross-reference related documents
- ✅ Keep examples concise and clear

### DON'T:
- ❌ Skip template sections without reason
- ❌ Mix template structures
- ❌ Create one-off formats
- ❌ Duplicate content across files
- ❌ Use templates as-is without customization

---

## File Naming Conventions

### Design Tokens
`/guidelines/design-tokens/[token-type].md`
- Examples: `colors.md`, `spacing.md`, `typography.md`

### Components
`/guidelines/components/[ComponentName].md`
- Examples: `Logo.md`, `ScrollDownArrow.md`

### Blocks
`/guidelines/blocks/[category]/[block-name].md`
- Examples: `design/Accordion.md`, `text/Heading.md`

### Patterns
`/guidelines/patterns/[PatternName].md`
- Examples: `FAQSection.md`, `HeroHome.md`

### General Guidelines
`/guidelines/[topic].md`
- Examples: `accessibility.md`, `performance.md`

### Reports
`/reports/YYYY-MM/[descriptive-name].md`
- Examples: `2026-03/phase-3-completion-summary.md`

### Prompts
`/prompts/[category]/[descriptive-name].md`
- Examples: `memory-optimization/css-inventory.md`

### Tasks
`/tasks/[initiative]-tasks.md`
- Examples: `phosphor-migration-tasks.md`

### Docs
`/docs/[topic].md`
- Examples: `figma-iframe-errors-explained.md`

---

## Template Locations

**All templates:** `/guidelines/_templates/`

| Template | Filename |
|----------|----------|
| Design Token | `design-token-template.md` |
| Component | `component-template.md` |
| General Guidelines | `general-template.md` |
| Report | `report-template.md` |
| Prompt | `prompt-template.md` |
| Task List | `task-list-template.md` |
| Documentation | `docs-template.md` |

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

**Last Updated:** March 13, 2026  
**Version:** 1.2.0  
**Maintainer:** LSX Design