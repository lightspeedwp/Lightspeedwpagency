# Prompt Generation Guidelines

**Version:** 1.0  
**Last Updated:** 2025-01-09  
**Status:** ✅ Production  
**Category:** Infrastructure

---

## 📋 Overview

This document defines standards for creating, organizing, and maintaining AI prompts for the LSX Design system. All prompts must be stored in `/prompts/` and follow strict naming conventions and structural requirements.

---

## 🎯 Purpose

**Why Prompt Guidelines?**

1. **Consistency** — All prompts follow the same structure
2. **Reusability** — Easy to find and reuse prompts
3. **Version Control** — Track prompt evolution over time
4. **Quality** — Standardized format ensures complete context
5. **Discoverability** — Clear naming makes prompts findable

---

## 📁 Directory Structure

### Required Structure

```
/prompts/
├── README.md                    # Index of all prompts
├── design-system/               # Design system prompts
│   ├── YYYY-MM-DD-component-creation.md
│   ├── YYYY-MM-DD-pattern-implementation.md
│   └── YYYY-MM-DD-token-updates.md
├── development/                 # Development workflow prompts
│   ├── YYYY-MM-DD-bug-fix-template.md
│   ├── YYYY-MM-DD-feature-implementation.md
│   └── YYYY-MM-DD-refactoring-guide.md
├── documentation/               # Documentation generation prompts
│   ├── YYYY-MM-DD-guideline-creation.md
│   ├── YYYY-MM-DD-api-documentation.md
│   └── YYYY-MM-DD-changelog-generation.md
├── testing/                     # Testing prompts
│   ├── YYYY-MM-DD-test-generation.md
│   ├── YYYY-MM-DD-accessibility-audit.md
│   └── YYYY-MM-DD-performance-testing.md
├── migration/                   # Migration and upgrade prompts
│   ├── YYYY-MM-DD-wordpress-migration.md
│   ├── YYYY-MM-DD-component-upgrade.md
│   └── YYYY-MM-DD-data-centralization.md
├── optimization/                # Optimization prompts
│   ├── YYYY-MM-DD-performance-optimization.md
│   ├── YYYY-MM-DD-bundle-size-reduction.md
│   └── YYYY-MM-DD-code-cleanup.md
├── templates/                   # Template prompts
│   ├── YYYY-MM-DD-template-creation.md
│   ├── YYYY-MM-DD-pattern-integration.md
│   └── YYYY-MM-DD-page-generation.md
└── utilities/                   # Utility and helper prompts
    ├── YYYY-MM-DD-code-generation.md
    ├── YYYY-MM-DD-batch-processing.md
    └── YYYY-MM-DD-validation-checks.md
```

### Category Definitions

| Category | Purpose | Examples |
|----------|---------|----------|
| `design-system/` | Design system creation/updates | Components, patterns, tokens |
| `development/` | Development workflows | Features, bugs, refactoring |
| `documentation/` | Documentation generation | Guidelines, API docs, changelogs |
| `testing/` | Testing and QA | Test generation, audits, validation |
| `migration/` | Migrations and upgrades | WordPress, data, components |
| `optimization/` | Performance and quality | Performance, bundle size, cleanup |
| `templates/` | Template and page creation | Pages, templates, patterns |
| `utilities/` | Utility and helper prompts | Code gen, batch processing, validation |

---

## 📝 Naming Conventions

### File Naming Format

**Required Format:**
```
YYYY-MM-DD-descriptive-name.md
```

**Rules:**

1. **Date First (MANDATORY):** `YYYY-MM-DD-` prefix
2. **Lowercase:** All characters lowercase
3. **Hyphens:** Use hyphens for spaces
4. **Descriptive:** Clear, concise description (3-6 words)
5. **Extension:** Always `.md` (Markdown)

### ✅ Good Examples

```
2025-01-09-component-creation-prompt.md
2025-01-09-accessibility-audit-template.md
2025-01-09-wordpress-migration-guide.md
2025-01-09-test-generation-pattern.md
2025-01-09-performance-optimization-prompt.md
```

### ❌ Bad Examples

```
component-prompt.md              # Missing date
2025-1-9-prompt.md              # Wrong date format (use 01, not 1)
Component_Creation.md            # Uppercase + underscores
prompt-for-creating-components-and-patterns.md  # Too long
2025-01-09-prompt.txt           # Wrong extension
```

---

## 📄 Prompt File Structure

### Required Sections

Every prompt file MUST include these sections:

```markdown
# [Prompt Title]

**Version:** 1.0  
**Date Created:** YYYY-MM-DD  
**Last Updated:** YYYY-MM-DD  
**Category:** [category-name]  
**Status:** ✅ Production | 🔄 Draft | ⚠️ Deprecated

---

## 📋 Prompt Overview

[Brief description of what this prompt does]

**Use Case:** [When to use this prompt]  
**Expected Output:** [What the AI should generate]  
**Estimated Time:** [How long it takes]

---

## 🎯 Context

[Provide complete context for the AI]

### Background
- [Key information about the task]
- [Relevant system details]
- [Prerequisites]

### Constraints
- [Any limitations or restrictions]
- [Required compliance (WCAG, WordPress, etc.)]
- [Design system requirements]

---

## 📝 The Prompt

```
[PASTE THE ACTUAL PROMPT HERE]

This is what you copy/paste to the AI.
```

---

## ✅ Success Criteria

- [ ] [Expected outcome 1]
- [ ] [Expected outcome 2]
- [ ] [Expected outcome 3]

---

## 📊 Expected Output

[Describe what files/changes should be generated]

**Files Created:**
- `/path/to/file1.tsx`
- `/path/to/file2.ts`

**Files Modified:**
- `/path/to/existing-file.tsx`

**Documentation:**
- `/path/to/docs.md`

---

## 🔍 Validation

[How to verify the output is correct]

1. **Check 1:** [Validation step]
2. **Check 2:** [Validation step]
3. **Check 3:** [Validation step]

---

## 📚 Related Prompts

- [Link to related prompt 1]
- [Link to related prompt 2]

---

## 📝 Notes

[Any additional notes, gotchas, or tips]

---

## 🔄 Version History

| Version | Date | Changes |
|---------|------|---------|
| 1.0 | YYYY-MM-DD | Initial creation |

---

**Created:** YYYY-MM-DD  
**Author:** [Your name]  
**Status:** ✅ Production
```

---

## ✍️ Writing Effective Prompts

### Prompt Quality Checklist

- [ ] **Clear Objective:** States exactly what should be generated
- [ ] **Complete Context:** Includes all necessary background
- [ ] **Design System References:** Links to guidelines/tokens
- [ ] **Examples Provided:** Shows desired output format
- [ ] **Constraints Listed:** Specifies requirements and limitations
- [ ] **Success Criteria:** Defines what "done" looks like
- [ ] **Validation Steps:** How to verify output quality

### Context Requirements

**ALWAYS include:**

1. **Design System Reference:**
```
I've updated the tailwind css and /styles/global.css file to include colors, spacing, borders, radius and typography from my teams design system.
- Make sure all UI being generated uses these variables from the css, so that the generation adheres to my design system and the user has ability to update the styling by updating the css.
- For typography ONLY use the font faces defined in the css for all generated text.
```

2. **WordPress Context:**
```
This prototype validates WordPress block themes. All components must map to WordPress blocks or patterns.
```

3. **Accessibility Requirements:**
```
All UI must meet WCAG 2.1 AA standards. Include keyboard navigation, focus states, and ARIA labels.
```

4. **File Location Context:**
```
Create files in /src/app/components/[category]/ComponentName.tsx
Follow the existing component structure and naming conventions.
```

---

## 🎨 Prompt Templates

### 1. Component Creation Prompt

```markdown
# Component Creation: [ComponentName]

## Context
I'm building the LSX Design system, a WordPress-compatible design system.

## Requirements
Create a new React component: [ComponentName]

**Component Type:** [Pattern/Block/Utility]  
**Location:** `/src/app/components/[category]/[ComponentName].tsx`

**Props:**
- [prop1]: [type] - [description]
- [prop2]: [type] - [description]

**Design Tokens:**
- Use `var(--font-primary)` for all fonts
- Use Tailwind classes for spacing
- Use CSS variables for colors

**Accessibility:**
- WCAG 2.1 AA compliant
- Keyboard navigable
- ARIA labels where appropriate

**WordPress Mapping:**
This maps to WordPress [block/pattern] `wp-[name]`

## Expected Output
1. Component file: `/src/app/components/[category]/[ComponentName].tsx`
2. Documentation: `/guidelines/components/[ComponentName].md`
3. TypeScript interfaces with JSDoc

## Success Criteria
- [ ] Uses design system tokens (CSS variables)
- [ ] TypeScript types defined
- [ ] JSDoc documentation complete
- [ ] WCAG 2.1 AA compliant
- [ ] WordPress-compatible structure
```

### 2. Bug Fix Prompt

```markdown
# Bug Fix: [Brief Description]

## Issue
[Describe the bug]

**File:** `/path/to/file.tsx`  
**Line:** [line number]  
**Error:** [error message or behavior]

## Expected Behavior
[What should happen]

## Current Behavior
[What actually happens]

## Fix Requirements
- [ ] Maintain backward compatibility
- [ ] Update tests if needed
- [ ] Follow design system guidelines
- [ ] Update documentation if behavior changes

## Design System Compliance
- Use CSS variables for styling
- Use Tailwind classes for spacing
- Maintain font variable usage
```

### 3. Documentation Generation Prompt

```markdown
# Documentation: [Topic]

## Generate Documentation For
[Component/Pattern/System]

**Documentation Type:** [Guideline/API/Tutorial]  
**Target File:** `/guidelines/[category]/[name].md`

## Required Sections
- Overview
- Usage Examples
- Props/API Reference
- Accessibility Notes
- WordPress Mapping
- Design Tokens Used

## Follow Structure From
See `/guidelines/GUIDELINES-FOR-WRITING-GUIDELINES.md` for format.

## Design System References
Link to relevant token documentation:
- Colors: `/guidelines/design-tokens/colors.md`
- Typography: `/guidelines/design-tokens/typography.md`
- Spacing: `/guidelines/design-tokens/spacing.md`
```

---

## 🔧 Prompt Best Practices

### DO ✅

1. **Provide Complete Context**
   - Include design system requirements
   - Reference relevant guidelines
   - Specify file locations
   - List all constraints

2. **Use Specific Examples**
   - Show desired output format
   - Provide code examples
   - Link to similar components

3. **Define Success Clearly**
   - Measurable criteria
   - Validation steps
   - Quality requirements

4. **Reference Design System**
   - Always mention CSS variables
   - Specify font requirements
   - Link to token documentation

5. **Include Accessibility**
   - WCAG level required
   - Keyboard navigation needs
   - ARIA requirements

### DON'T ❌

1. **Be Vague**
   - ❌ "Create a component"
   - ✅ "Create a Button component in /src/app/components/blocks/design/Button.tsx"

2. **Forget Design System**
   - ❌ No mention of CSS variables
   - ✅ "Use var(--font-primary) for all fonts"

3. **Skip Validation**
   - ❌ No success criteria
   - ✅ Clear checklist of requirements

4. **Ignore WordPress Context**
   - ❌ No WordPress mapping
   - ✅ "Maps to WordPress Button block"

5. **Omit File Paths**
   - ❌ "Create the file"
   - ✅ "Create /src/app/components/[path]/File.tsx"

---

## 📦 Prompt Categories

### Design System Prompts

**Purpose:** Create or update design system components

**Required Context:**
- CSS variable usage
- Font family enforcement
- Tailwind spacing
- WordPress block mapping
- Accessibility requirements

**Example Topics:**
- Component creation
- Pattern implementation
- Token updates
- Style system changes

### Development Prompts

**Purpose:** Development workflow tasks

**Required Context:**
- File structure
- Existing code patterns
- Testing requirements
- Git workflow

**Example Topics:**
- Feature implementation
- Bug fixes
- Refactoring
- Code optimization

### Documentation Prompts

**Purpose:** Generate documentation

**Required Context:**
- Documentation structure
- Markdown format
- Guidelines references
- Examples required

**Example Topics:**
- Guideline creation
- API documentation
- Changelog generation
- Tutorial writing

### Testing Prompts

**Purpose:** Testing and quality assurance

**Required Context:**
- Test framework
- Coverage requirements
- Accessibility standards
- Performance metrics

**Example Topics:**
- Test generation
- Accessibility audits
- Performance testing
- Code quality checks

---

## 🗂️ Prompt Index (README.md)

Every `/prompts/` folder MUST have a `README.md` index:

```markdown
# LSX Design Prompts Index

**Last Updated:** YYYY-MM-DD  
**Total Prompts:** [number]

---

## 📚 Quick Reference

| Category | Count | Description |
|----------|-------|-------------|
| Design System | X | Component and pattern creation |
| Development | X | Feature and bug fix workflows |
| Documentation | X | Documentation generation |
| Testing | X | Testing and quality assurance |
| Migration | X | Migration and upgrade tasks |
| Optimization | X | Performance and code quality |
| Templates | X | Page and template creation |
| Utilities | X | Helper and utility prompts |

---

## 📋 All Prompts

### Design System
- [2025-01-09-component-creation-prompt.md](./design-system/2025-01-09-component-creation-prompt.md)
- [2025-01-09-pattern-implementation.md](./design-system/2025-01-09-pattern-implementation.md)

### Development
- [2025-01-09-feature-implementation.md](./development/2025-01-09-feature-implementation.md)
- [2025-01-09-bug-fix-template.md](./development/2025-01-09-bug-fix-template.md)

[... continue for all categories ...]

---

## 🔍 Finding Prompts

### By Category
Navigate to the appropriate folder:
- Design System: `/prompts/design-system/`
- Development: `/prompts/development/`
- Documentation: `/prompts/documentation/`

### By Date
All prompts are date-prefixed for chronological browsing.

### By Topic
Use file search: `grep -r "keyword" /prompts/`

---

**Total Prompts:** X  
**Last Updated:** YYYY-MM-DD
```

---

## 🔄 Prompt Lifecycle

### 1. Creation (Draft)

```yaml
Status: 🔄 Draft
- Initial creation
- Testing with AI
- Refinement
- Documentation
```

### 2. Testing (Review)

```yaml
Status: 🔄 Review
- Validate output quality
- Test with multiple scenarios
- Gather feedback
- Iterate on wording
```

### 3. Production (Active)

```yaml
Status: ✅ Production
- Proven to work
- Documented completely
- Indexed in README.md
- Ready for team use
```

### 4. Deprecated (Archived)

```yaml
Status: ⚠️ Deprecated
- No longer recommended
- Better alternative exists
- Link to replacement
- Keep for historical reference
```

---

## 📊 Prompt Metrics

### Quality Indicators

Track these metrics for each prompt:

| Metric | Target | How to Measure |
|--------|--------|----------------|
| **Success Rate** | >90% | How often it produces correct output |
| **Time to Complete** | [X minutes] | Average time from prompt to completion |
| **Revision Rate** | <10% | How often output needs major changes |
| **Reusability** | High | How many times it's been used |

### Version Tracking

```markdown
## 🔄 Version History

| Version | Date | Changes | Success Rate |
|---------|------|---------|--------------|
| 1.0 | 2025-01-09 | Initial creation | 85% |
| 1.1 | 2025-01-10 | Added context | 92% |
| 1.2 | 2025-01-11 | Refined examples | 95% |
```

---

## ✅ Validation Checklist

Before adding a prompt to production:

- [ ] **File named correctly** (YYYY-MM-DD-description.md)
- [ ] **In correct category folder**
- [ ] **All required sections present**
- [ ] **Design system context included**
- [ ] **WordPress mapping specified** (if applicable)
- [ ] **Success criteria defined**
- [ ] **Validation steps provided**
- [ ] **Examples included**
- [ ] **Tested and working** (>90% success rate)
- [ ] **Added to README.md index**
- [ ] **Version history initialized**

---

## 📚 Examples

### Example 1: Component Creation Prompt

**File:** `/prompts/design-system/2025-01-09-button-component-creation.md`

```markdown
# Button Component Creation

**Version:** 1.0  
**Date Created:** 2025-01-09  
**Category:** design-system  
**Status:** ✅ Production

## 📋 Prompt Overview

Create a reusable Button component for the LSX Design system that maps to WordPress Button blocks.

**Use Case:** When you need a new button component or variant  
**Expected Output:** Complete Button component with TypeScript, documentation, and tests  
**Estimated Time:** 15-20 minutes

## 🎯 Context

### Background
- LSX Design uses WordPress Full Site Editing (FSE) blocks
- All components must use CSS variables from design system
- Buttons must be accessible (WCAG 2.1 AA)
- Support for light/dark mode

### Constraints
- Must use `var(--font-primary)` for font
- Must use Tailwind classes for spacing
- Must support WordPress `page` prop for navigation
- Must include keyboard navigation

## 📝 The Prompt

```
Create a Button component for the LSX Design system.

**Requirements:**

1. **File Location:** `/src/app/components/blocks/design/Button.tsx`

2. **Props Interface:**
```typescript
interface ButtonProps {
  children: React.ReactNode;
  variant?: 'default' | 'outline' | 'ghost' | 'cta';
  size?: 'sm' | 'md' | 'lg';
  page?: string; // WordPress page navigation
  onClick?: () => void;
  disabled?: boolean;
  ariaLabel?: string;
}
```

3. **Design Tokens:**
- Font: `var(--font-primary)`
- Colors: `var(--primary)`, `var(--primary-foreground)`
- Radius: `var(--radius)`
- Spacing: Tailwind classes (p-3, px-6, etc.)

4. **Accessibility:**
- WCAG 2.1 AA compliant
- Keyboard navigable (Tab, Enter, Space)
- ARIA labels
- Focus visible states

5. **WordPress Mapping:**
Maps to WordPress Button block with navigation support.

6. **Documentation:**
Create `/guidelines/components/Button.md` with:
- Usage examples
- Props documentation
- Accessibility notes
- WordPress mapping

**Design System Context:**
I've updated the tailwind css and /styles/global.css file to include colors, spacing, borders, radius and typography from my teams design system.
- Make sure all UI being generated uses these variables from the css
- For typography ONLY use var(--font-primary)
```

## ✅ Success Criteria

- [ ] Component uses `var(--font-primary)` for font
- [ ] All spacing uses Tailwind classes
- [ ] All colors use CSS variables
- [ ] TypeScript interfaces with JSDoc
- [ ] WCAG 2.1 AA compliant
- [ ] Documentation complete
- [ ] WordPress navigation works

## 📊 Expected Output

**Files Created:**
- `/src/app/components/blocks/design/Button.tsx`
- `/guidelines/components/Button.md`

**Files Modified:**
- `/src/app/components/blocks/design/index.ts` (add export)

## 🔍 Validation

1. **Check CSS Variables:**
   - Search for hardcoded fonts (should be 0)
   - Verify `var(--font-primary)` usage

2. **Check Spacing:**
   - Verify Tailwind classes (p-*, px-*, py-*)
   - No hardcoded padding values

3. **Check Accessibility:**
   - Keyboard navigation works
   - Focus states visible
   - ARIA labels present

4. **Check TypeScript:**
   - No type errors
   - JSDoc comments complete
   - Interfaces exported

## 🔄 Version History

| Version | Date | Changes |
|---------|------|---------|
| 1.0 | 2025-01-09 | Initial creation |

**Created:** 2025-01-09  
**Status:** ✅ Production
```

---

## 🚀 Getting Started

### Creating Your First Prompt

1. **Choose Category:**
   - Determine which folder fits your prompt
   - Create folder if it doesn't exist

2. **Name the File:**
   ```
   /prompts/[category]/YYYY-MM-DD-description.md
   ```

3. **Use Template:**
   - Copy the prompt file structure from this guide
   - Fill in all required sections

4. **Test the Prompt:**
   - Try it with AI
   - Refine based on output quality
   - Iterate until success rate >90%

5. **Document:**
   - Update `/prompts/README.md` index
   - Add to appropriate category
   - Include version history

6. **Mark as Production:**
   - Change status to ✅ Production
   - Share with team

---

## 📝 Quick Tips

### Writing Clear Prompts

1. **Be Specific:**
   - ❌ "Create a component"
   - ✅ "Create a Button component in /src/app/components/blocks/design/Button.tsx"

2. **Provide Context:**
   - Always include design system requirements
   - Reference relevant guidelines
   - Specify WordPress mapping

3. **Include Examples:**
   - Show desired output format
   - Provide code snippets
   - Link to similar work

4. **Define Success:**
   - Clear checklist
   - Validation steps
   - Quality criteria

5. **Version Control:**
   - Track changes
   - Record success rates
   - Note improvements

---

## 🔗 Related Guidelines

- **[/guidelines/GUIDELINES-FOR-WRITING-GUIDELINES.md](../GUIDELINES-FOR-WRITING-GUIDELINES.md)** — Documentation standards
- **[/guidelines/reporting/reporting-guidelines.md](../reporting/reporting-guidelines.md)** — Reporting structure
- **[/guidelines/design-system/design-system-usage-guide.md](../design-system/design-system-usage-guide.md)** — Design system reference

---

## ✅ Compliance Checklist

- [ ] All prompts use YYYY-MM-DD naming
- [ ] All prompts in categorized folders
- [ ] All prompts have required sections
- [ ] All prompts reference design system
- [ ] README.md index maintained
- [ ] Version history tracked
- [ ] Success rates documented
- [ ] Deprecated prompts marked

---

**Version:** 1.0  
**Last Updated:** 2025-01-09  
**Status:** ✅ Production  
**Compliance:** 100%

**See Also:**
- [Guidelines for Writing Guidelines](../GUIDELINES-FOR-WRITING-GUIDELINES.md)
- [Reporting Guidelines](../reporting/reporting-guidelines.md)
- [Design System Usage Guide](../design-system/design-system-usage-guide.md)
