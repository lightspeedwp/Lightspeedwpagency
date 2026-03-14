# Guidelines for Writing Guidelines — Guidelines

**Category:** Documentation  
**Version:** 1.1.0  
**Last Updated:** 2026-03-11  
**Status:** Active  
**Template Used:** _templates/general-template.md  

---

## 🎯 **PURPOSE**

This document defines the standards for creating, naming, and organizing all guideline documentation in the LSX Design system.

**Goals:**
- Consistent structure and formatting
- Clear organization in `/guidelines/` directory
- Easy discoverability
- Maintainable documentation
- No guidelines in root directory

---

## 📁 **MANDATORY LOCATION**

**ALL guidelines MUST be stored in:**

```
/guidelines/
```

**❌ NEVER store guidelines in:**
- Root directory (`/`)
- Reports directory (`/reports/`)
- Any other location

---

## 📂 **DIRECTORY STRUCTURE**

```
guidelines/
├── Guidelines.md                      # Main canonical reference
├── README.md                          # Navigation guide
├── DOCUMENTATION-INDEX.md             # Complete file index
├── GUIDELINES-FOR-WRITING-GUIDELINES.md  # This file
│
├── overview-*.md                      # System overviews
│   ├── overview-components.md
│   ├── overview-icons.md
│   └── overview-sitemap.md
│
├── blocks/                            # WordPress blocks
│   ├── overview-blocks.md
│   ├── design/
│   └── theme/
│
├── patterns/                          # Block patterns
│   ├── overview-patterns.md
│   └── [pattern-specific-docs]
│
├── parts/                             # Template parts
│   └── overview-parts.md
│
├── templates/                         # Page templates
│   └── overview-templates.md
│
├── sections/                          # Section styles
│   └── overview-sections.md
│
├── styles/                            # Style presets
│   └── section-styles.md
│
├── components/                        # Component docs
│   └── [component-specific-docs]
│
├── design-tokens/                     # Token system
│   ├── colors.md
│   ├── typography.md
│   ├── spacing.md
│   └── [other-token-docs]
│
├── icons/                             # Icon library
│   └── [icon-category-docs]
│
├── mobile/                            # Mobile guidelines
│   └── [mobile-specific-docs]
│
├── code-documentation/                # Code standards
│   └── JSDOC-STANDARDS.md
│
├── testing/                           # Testing guidelines
│   └── [testing-docs]
│
├── design-system/                     # Design system guides
│   ├── design-system-usage-guide.md
│   ├── lighthouse-testing-guide.md
│   └── pattern-library-index.md
│
└── reporting/                         # Reporting standards
    └── reporting-guidelines.md
```

---

## 📝 **NAMING CONVENTIONS**

### **Format:**

```
lowercase-with-hyphens.md
```

### **Patterns:**

1. **Overview files:** `overview-[topic].md`
   - Example: `overview-components.md`

2. **Component-specific:** `[ComponentName].md` (PascalCase)
   - Example: `Logo.md`, `StyleSwitcher.md`

3. **Topic guides:** `[topic]-[subtopic].md`
   - Example: `design-system-usage-guide.md`

4. **Standards files:** `[STANDARD-NAME].md` (UPPERCASE)
   - Example: `JSDOC-STANDARDS.md`, `TESTING-STANDARDS.md`

### **Examples:**

✅ **CORRECT:**
```
/guidelines/overview-components.md
/guidelines/components/Logo.md
/guidelines/design-tokens/typography.md
/guidelines/design-system/design-system-usage-guide.md
/guidelines/reporting/reporting-guidelines.md
```

❌ **INCORRECT:**
```
/DESIGN-SYSTEM-USAGE-GUIDE.md          # In root (wrong location)
/guidelines/DesignSystemGuide.md       # Wrong case
/guidelines/design_system_guide.md     # Underscores
/reports/guidelines-report.md          # In reports folder
```

---

## 📋 **STANDARD GUIDELINE STRUCTURE**

### **Template:**

```markdown
# [Guideline Title]

## 🎯 **PURPOSE**

Brief explanation of what this guideline covers and why it exists.

---

## 📋 **REQUIREMENTS**

### **Mandatory Rules:**

- [ ] Rule 1
- [ ] Rule 2
- [ ] Rule 3

### **Best Practices:**

- Recommendation 1
- Recommendation 2

---

## ✅ **DO THIS**

```tsx
// ✅ Correct example
<Component prop="value" />
```

---

## ❌ **DON'T DO THIS**

```tsx
// ❌ Incorrect example
<Component wrong="approach" />
```

---

## 📊 **EXAMPLES**

### **Example 1: [Scenario Name]**

**Context:** Brief description

**Implementation:**
```tsx
// Code example
```

---

## 🔍 **VERIFICATION**

**Checklist:**
- [ ] Item 1
- [ ] Item 2

---

## 📚 **RELATED DOCUMENTATION**

**See also:**
- [Related Guide 1](./path/to/guide1.md)
- [Related Guide 2](./path/to/guide2.md)

---

**Last Updated:** YYYY-MM-DD  
**Status:** ✅ Active / ⏳ Draft / 🗄️ Archived
```

---

## 🗂️ **GUIDELINE CATEGORIES**

### **1. System Overviews** (`/guidelines/overview-*.md`)

**Purpose:** High-level system architecture documentation

**Files:**
- `overview-components.md` — Component system
- `overview-icons.md` — Icon system
- `overview-sitemap.md` — Site structure

**Naming:** Always prefix with `overview-`

---

### **2. Design Tokens** (`/guidelines/design-tokens/`)

**Purpose:** Design system token documentation

**Files:**
- `colors.md` — Color system
- `typography.md` — Typography scale
- `spacing.md` — Spacing scale
- `button-sizes.md` — Button size system

**Naming:** Lowercase with hyphens

---

### **3. Components** (`/guidelines/components/`)

**Purpose:** Component-specific usage documentation

**Files:**
- `Logo.md` — Logo component
- `StyleSwitcher.md` — Style switcher
- `Button.md` — Button component

**Naming:** PascalCase matching component name

---

### **4. WordPress Blocks** (`/guidelines/blocks/`)

**Purpose:** WordPress block documentation

**Structure:**
- `overview-blocks.md` — Block system overview
- `design/` — Design blocks
- `theme/` — Theme blocks

**Naming:** `overview-blocks.md` + categorized folders

---

### **5. Patterns** (`/guidelines/patterns/`)

**Purpose:** Block pattern documentation

**Files:**
- `overview-patterns.md` — Pattern catalog
- `[PatternName].md` — Individual patterns

**Naming:** PascalCase for pattern files

---

### **6. Design System Guides** (`/guidelines/design-system/`)

**Purpose:** Comprehensive design system documentation

**Files:**
- `design-system-usage-guide.md` — Complete usage guide
- `lighthouse-testing-guide.md` — Performance testing
- `pattern-library-index.md` — Pattern index

**Naming:** Descriptive lowercase with hyphens

---

### **7. Code Standards** (`/guidelines/code-documentation/`)

**Purpose:** Code quality and documentation standards

**Files:**
- `JSDOC-STANDARDS.md` — JSDoc requirements
- `TESTING-STANDARDS.md` — Testing requirements

**Naming:** UPPERCASE for standards files

---

### **8. Reporting** (`/guidelines/reporting/`)

**Purpose:** Reporting standards and guidelines

**Files:**
- `reporting-guidelines.md` — Report creation standards

**Naming:** Descriptive lowercase with hyphens

---

## ✅ **GUIDELINE CREATION WORKFLOW**

### **Step 1: Determine Category**

Choose the appropriate category folder:
- System overview? → `/guidelines/overview-*.md`
- Component-specific? → `/guidelines/components/`
- Design token? → `/guidelines/design-tokens/`
- Code standard? → `/guidelines/code-documentation/`
- Design system guide? → `/guidelines/design-system/`

---

### **Step 2: Name the File**

Follow naming convention for category:
- Overview: `overview-[topic].md`
- Component: `[ComponentName].md`
- Token: `[token-type].md`
- Standard: `[STANDARD-NAME].md`

---

### **Step 3: Use Standard Template**

Copy the standard template structure and fill in content.

---

### **Step 4: Update Main Guidelines**

Add reference in `/guidelines/Guidelines.md`:

```markdown
**See:** [Your New Guide](./path/to/your-guide.md) for description
```

---

### **Step 5: Update Documentation Index**

Add entry in `/guidelines/DOCUMENTATION-INDEX.md`

---

## 🚫 **COMMON MISTAKES TO AVOID**

### **❌ WRONG: Creating Guidelines in Root**

```
/MY-NEW-GUIDELINE.md  ← WRONG LOCATION
```

### **✅ CORRECT: Creating Guidelines in /guidelines/**

```
/guidelines/design-system/my-new-guideline.md  ← CORRECT
```

---

### **❌ WRONG: Using Reports Folder**

```
/reports/2025-01/guidelines/my-guide.md  ← WRONG
```

**Why wrong:** Reports are for implementation summaries, not guidelines.

---

### **❌ WRONG: Inconsistent Naming**

```
MyGuideline.md           ← Wrong case
my_guideline.md          ← Underscores
Guideline For Stuff.md   ← Spaces
```

### **✅ CORRECT: Consistent Naming**

```
my-guideline.md          ← Correct
```

---

## 🔍 **GUIDELINE QUALITY CHECKLIST**

Before finalizing a guideline:

- [ ] Stored in correct `/guidelines/` subdirectory
- [ ] Uses correct naming convention
- [ ] Follows standard template structure
- [ ] Includes clear examples (✅ DO / ❌ DON'T)
- [ ] Has "Last Updated" date
- [ ] Referenced in main `Guidelines.md`
- [ ] Added to `DOCUMENTATION-INDEX.md`
- [ ] No duplicate content with existing guidelines
- [ ] Clear purpose statement
- [ ] Verification checklist included

---

## 🔄 **MIGRATING GUIDELINES FROM ROOT**

### **If a guideline exists in root:**

**MANDATORY Steps:**

1. ✅ **Read the file** to understand its content
2. ✅ **Determine correct category** in `/guidelines/`
3. ✅ **Create new file** in correct location
4. ✅ **Copy content** to new location
5. ✅ **Update references** in `Guidelines.md`
6. ✅ **Verify new file** is accessible
7. ✅ **Delete root file** after successful migration

### **Example Migration:**

**Before:**
```
/DESIGN-SYSTEM-USAGE-GUIDE.md  (root)
```

**After:**
```
/guidelines/design-system/design-system-usage-guide.md  (guidelines)
```

**Steps:**
1. Read `/DESIGN-SYSTEM-USAGE-GUIDE.md`
2. Category: Design System Guide
3. Create `/guidelines/design-system/design-system-usage-guide.md`
4. Copy content
5. Update `Guidelines.md` reference
6. Verify file exists
7. Delete `/DESIGN-SYSTEM-USAGE-GUIDE.md`

---

## 📊 **GUIDELINE vs REPORT**

### **GUIDELINE = Permanent Reference**

**Characteristics:**
- ✅ Defines standards and rules
- ✅ Permanent reference documentation
- ✅ Updated as system evolves
- ✅ Stored in `/guidelines/`
- ✅ No date in filename

**Examples:**
- Typography standards
- Component usage guide
- Code documentation standards

---

### **REPORT = Temporary Implementation Summary**

**Characteristics:**
- ✅ Documents what was completed
- ✅ Tracks progress and changes
- ✅ Timestamped (YYYY-MM-DD)
- ✅ Stored in `/reports/YYYY-MM/`
- ✅ Date in filename (mandatory)

**Examples:**
- Session summaries
- Migration completion reports
- Audit results

---

## 📚 **REFERENCE**

### **Quick Decision Tree:**

```
Is this a permanent standard or reference?
├─ YES → Create in /guidelines/
│  └─ What category?
│     ├─ System overview → overview-*.md
│     ├─ Component → components/
│     ├─ Design token → design-tokens/
│     ├─ Code standard → code-documentation/
│     └─ Design system → design-system/
│
└─ NO → Is it a report?
   └─ YES → Create in /reports/YYYY-MM/category/
```

---

### **Guideline Categories Quick Reference:**

| Content Type | Location | Example |
|--------------|----------|---------|
| System overview | `/guidelines/overview-*.md` | `overview-components.md` |
| Component guide | `/guidelines/components/` | `Logo.md` |
| Design token | `/guidelines/design-tokens/` | `typography.md` |
| Code standard | `/guidelines/code-documentation/` | `JSDOC-STANDARDS.md` |
| Design system | `/guidelines/design-system/` | `design-system-usage-guide.md` |
| WordPress blocks | `/guidelines/blocks/` | `overview-blocks.md` |
| Patterns | `/guidelines/patterns/` | `overview-patterns.md` |
| Reporting | `/guidelines/reporting/` | `reporting-guidelines.md` |

---

## ✅ **ENFORCEMENT**

**MANDATORY RULES:**

1. ✅ **ALL guidelines MUST be in `/guidelines/`**
2. ✅ **NO guidelines in root directory**
3. ✅ **NO guidelines in `/reports/`**
4. ✅ **Follow naming conventions**
5. ✅ **Update main `Guidelines.md`**
6. ✅ **Update `DOCUMENTATION-INDEX.md`**

**Violation = Immediate migration required**

---

## 🎯 **SUMMARY**

**Where to create guidelines:**
```
✅ /guidelines/
❌ / (root)
❌ /reports/
```

**How to name guidelines:**
```
✅ lowercase-with-hyphens.md
✅ ComponentName.md (for components)
✅ STANDARD-NAME.md (for standards)
❌ Wrong_Naming.md
```

**What to include:**
```
✅ Purpose statement
✅ Requirements/rules
✅ Examples (DO/DON'T)
✅ Verification checklist
✅ Last updated date
```

---

**Last Updated:** 2025-01-09  
**Status:** ✅ Active  
**Enforcement:** Mandatory for all guidelines
