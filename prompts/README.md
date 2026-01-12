# LSX Design Prompts Index

**Last Updated:** 2025-01-09  
**Total Prompts:** 2  
**Status:** ✅ Active

---

## 📋 Overview

This directory contains all AI prompts used in the LSX Design system. Each prompt is:
- **Date-prefixed** for chronological tracking
- **Categorized** by purpose
- **Documented** with context and examples
- **Tested** and validated for quality

**See:** [Prompt Generation Guidelines](/guidelines/prompts/prompt-generation-guidelines.md) for complete standards.

---

## 📚 Quick Reference

| Category | Count | Description |
|----------|-------|-------------|
| Design System | 1 | Component and pattern creation |
| Development | 0 | Feature and bug fix workflows |
| Documentation | 0 | Documentation generation |
| Testing | 0 | Testing and quality assurance |
| Migration | 1 | Migration and upgrade tasks |
| Optimization | 0 | Performance and code quality |
| Templates | 0 | Page and template creation |
| Utilities | 0 | Helper and utility prompts |

**Total:** 2 prompts

---

## 📁 Folder Structure

```
/prompts/
├── README.md                    # This file (index)
├── design-system/               # Design system prompts
├── development/                 # Development workflow prompts
├── documentation/               # Documentation generation prompts
├── testing/                     # Testing prompts
├── migration/                   # Migration and upgrade prompts
├── optimization/                # Optimization prompts
├── templates/                   # Template prompts
└── utilities/                   # Utility and helper prompts
```

---

## 📋 All Prompts

### Design System (1)

**Purpose:** Component and pattern creation

**Prompts:**
- [2025-01-09-component-creation-template.md](./design-system/2025-01-09-component-creation-template.md) — Complete component creation with design system compliance

**Common Use Cases:**
- Creating new components
- Implementing patterns
- Updating design tokens
- Adding style variants

---

### Development (0)

**Purpose:** Development workflow tasks

_No prompts yet. Add your first prompt!_

**Common Use Cases:**
- Implementing features
- Fixing bugs
- Refactoring code
- Optimizing performance

---

### Documentation (0)

**Purpose:** Documentation generation

_No prompts yet. Add your first prompt!_

**Common Use Cases:**
- Creating guidelines
- Writing API docs
- Generating changelogs
- Writing tutorials

---

### Testing (0)

**Purpose:** Testing and quality assurance

_No prompts yet. Add your first prompt!_

**Common Use Cases:**
- Generating tests
- Accessibility audits
- Performance testing
- Code quality checks

---

### Migration (1)

**Purpose:** Migration and upgrade tasks

**Prompts:**
- [2025-01-09-lightspeedwp-content-migration.md](./migration/2025-01-09-lightspeedwp-content-migration.md) — Systematic content migration from lightspeedwp.agency sitemap ⭐⭐⭐

**Common Use Cases:**
- WordPress migrations
- Component upgrades
- Data centralization
- System migrations
- **Real content migration from live sites**

---

### Optimization (0)

**Purpose:** Performance and code quality

_No prompts yet. Add your first prompt!_

**Common Use Cases:**
- Performance optimization
- Bundle size reduction
- Code cleanup
- Dependency updates

---

### Templates (0)

**Purpose:** Page and template creation

_No prompts yet. Add your first prompt!_

**Common Use Cases:**
- Creating templates
- Integrating patterns
- Generating pages
- Building layouts

---

### Utilities (0)

**Purpose:** Helper and utility prompts

_No prompts yet. Add your first prompt!_

**Common Use Cases:**
- Code generation
- Batch processing
- Validation checks
- Automated tasks

---

## 🔍 Finding Prompts

### By Category

Navigate to the appropriate folder:
- **Design System:** `/prompts/design-system/`
- **Development:** `/prompts/development/`
- **Documentation:** `/prompts/documentation/`
- **Testing:** `/prompts/testing/`
- **Migration:** `/prompts/migration/`
- **Optimization:** `/prompts/optimization/`
- **Templates:** `/prompts/templates/`
- **Utilities:** `/prompts/utilities/`

### By Date

All prompts use `YYYY-MM-DD-` prefix for chronological browsing:
```bash
ls -l /prompts/design-system/2025-01-*
```

### By Topic

Search across all prompts:
```bash
grep -r "keyword" /prompts/
```

### By Status

- ✅ **Production** — Tested and ready to use
- 🔄 **Draft** — Under development
- ⚠️ **Deprecated** — No longer recommended

---

## ✍️ Creating a New Prompt

### Quick Start

1. **Choose category folder:**
   ```bash
   cd /prompts/[category]/
   ```

2. **Create file with date prefix:**
   ```bash
   touch YYYY-MM-DD-your-prompt-name.md
   ```

3. **Use template structure:**
   See [Prompt Generation Guidelines](/guidelines/prompts/prompt-generation-guidelines.md)

4. **Test the prompt:**
   - Validate output quality
   - Ensure >90% success rate

5. **Update this README:**
   - Add to appropriate category
   - Update prompt count
   - Include description

### Naming Convention

**Required Format:**
```
YYYY-MM-DD-descriptive-name.md
```

**Examples:**
- ✅ `2025-01-09-button-component-creation.md`
- ✅ `2025-01-09-accessibility-audit-template.md`
- ❌ `button-prompt.md` (missing date)
- ❌ `2025-1-9-button.md` (wrong date format)

**See:** [Naming Conventions](/guidelines/prompts/prompt-generation-guidelines.md#naming-conventions)

---

## 📊 Prompt Quality Metrics

### Success Rates

Track these metrics for each prompt:

| Metric | Target | Current |
|--------|--------|---------|
| **Average Success Rate** | >90% | N/A |
| **Average Completion Time** | <30 min | N/A |
| **Revision Rate** | <10% | N/A |
| **Total Uses** | — | 0 |

### Most Used Prompts

_No prompts yet._

### Recently Updated

_No prompts yet._

---

## 🎯 Best Practices

### DO ✅

1. **Always include design system context:**
   ```
   I've updated the tailwind css and /styles/global.css file to include colors, spacing, borders, radius and typography from my teams design system.
   - Make sure all UI being generated uses these variables from the css
   - For typography ONLY use the font faces defined in the css
   ```

2. **Specify exact file locations:**
   ```
   Create /src/app/components/blocks/design/Button.tsx
   ```

3. **Define clear success criteria:**
   - [ ] Uses CSS variables
   - [ ] TypeScript types defined
   - [ ] WCAG 2.1 AA compliant

4. **Include WordPress mapping:**
   ```
   This maps to WordPress Button block
   ```

5. **Provide validation steps:**
   ```
   1. Check for hardcoded fonts (should be 0)
   2. Verify Tailwind spacing usage
   3. Test keyboard navigation
   ```

### DON'T ❌

1. ❌ Create prompts without design system context
2. ❌ Use vague descriptions or file paths
3. ❌ Skip accessibility requirements
4. ❌ Forget WordPress compatibility
5. ❌ Omit validation steps

---

## 📚 Resources

### Guidelines

- **[Prompt Generation Guidelines](/guidelines/prompts/prompt-generation-guidelines.md)** ⭐⭐⭐
- **[Guidelines for Writing Guidelines](/guidelines/GUIDELINES-FOR-WRITING-GUIDELINES.md)** ⭐⭐⭐
- **[Design System Usage Guide](/guidelines/design-system/design-system-usage-guide.md)** ⭐⭐⭐

### Design Tokens

- **[Colors](/guidelines/design-tokens/colors.md)**
- **[Typography](/guidelines/design-tokens/typography.md)**
- **[Spacing](/guidelines/design-tokens/spacing.md)**

### Examples

See `/guidelines/prompts/prompt-generation-guidelines.md` for complete examples.

---

## 🔄 Version History

| Version | Date | Changes |
|---------|------|---------|
| 1.0 | 2025-01-09 | Initial creation |

---

## 📝 Contributing

### Adding a New Prompt

1. Follow naming convention: `YYYY-MM-DD-description.md`
2. Use required template structure
3. Test and validate (>90% success rate)
4. Update this README.md
5. Mark as ✅ Production when ready

### Updating Existing Prompt

1. Update version number in prompt file
2. Add entry to version history
3. Update success rate if changed
4. Update this README.md if description changes

### Deprecating a Prompt

1. Change status to ⚠️ Deprecated
2. Link to replacement prompt
3. Keep file for historical reference
4. Update this README.md

---

**Last Updated:** 2025-01-09  
**Total Prompts:** 2  
**Maintained By:** LSX Design Team

**See:** [Prompt Generation Guidelines](/guidelines/prompts/prompt-generation-guidelines.md) for complete documentation.