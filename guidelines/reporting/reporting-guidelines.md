# 📊 REPORTING GUIDELINES

## 🎯 **PURPOSE**

This document defines the standards for creating, naming, and organizing all project reports and documentation.

**Goals:**
- Consistent naming conventions (YYYY-MM-DD format)
- Logical organization structure
- Easy discoverability
- Chronological tracking
- Clear categorization

---

## 📁 **DIRECTORY STRUCTURE**

All reports must be stored in the `/reports/` directory:

```
reports/
├── architecture/                 # System architecture reports
├── css-variables/                # CSS variables & design tokens
├── wordpress/                    # WordPress compatibility reports
├── cleanup/                      # File cleanup & optimization
├── migration/                    # Migration reports
├── patterns/                     # Pattern implementation reports
├── compliance/                   # Design system compliance reports
├── performance/                  # Performance & optimization reports
└── session-summaries/            # End-of-session summaries
```

**Note:** Reports are organized by category, NOT by date. The date is in the filename.

---

## 📝 **NAMING CONVENTIONS**

### **MANDATORY Format:**

```
YYYY-MM-DD-description.md
```

### **Components:**

1. **Date:** `YYYY-MM-DD` (ISO 8601 format) — **MUST BE FIRST**
2. **Description:** Brief, descriptive, hyphen-separated

### **Examples:**

✅ **CORRECT:**
```
2025-01-09-global-styles-complete.md
2025-01-09-padding-first-architecture.md
2025-01-10-button-migration-phase-2.md
```

❌ **INCORRECT:**
```
GLOBAL-STYLES-COMPLETE.md              # Missing date
global-styles-complete-jan-9.md        # Date at end
2025-1-9-global-styles.md              # Inconsistent date format
GlobalStylesComplete.md                 # Wrong case
```

---

## 🗂️ **CATEGORIES**

### **1. Architecture** (`/reports/architecture/`)
System architecture, design principles, global structures

**Examples:**
- `2025-01-09-global-styles-enforcement.md`
- `2025-01-09-padding-first-architecture.md`
- `2025-01-10-component-organization-refactor.md`

---

### **2. CSS Variables** (`/reports/css-variables/`)
CSS variables, design tokens, theme.json alignment

**Examples:**
- `2025-01-09-wordpress-css-variables-complete.md`
- `2025-01-09-theme-json-mapping.md`
- `2025-01-10-font-system-update.md`

---

### **3. WordPress** (`/reports/wordpress/`)
WordPress compatibility, FSE, block patterns

**Examples:**
- `2025-01-09-wordpress-blocks-implementation.md`
- `2025-01-09-fse-compatibility-complete.md`
- `2025-01-10-theme-json-presets.md`

---

### **4. Cleanup** (`/reports/cleanup/`)
File cleanup, deprecated code removal, optimization

**Examples:**
- `2025-01-09-file-cleanup-complete.md`
- `2025-01-09-unused-components-removed.md`
- `2025-01-10-duplicate-code-elimination.md`

---

### **5. Migration** (`/reports/migration/`)
Component migrations, system upgrades, refactoring

**Examples:**
- `2025-01-09-button-migration-complete.md`
- `2025-01-09-import-migration-complete.md`
- `2025-01-10-react-18-upgrade.md`

---

### **6. Patterns** (`/reports/patterns/`)
Pattern implementation, pattern library updates

**Examples:**
- `2025-01-09-pattern-optimization-complete.md`
- `2025-01-09-new-patterns-added.md`
- `2025-01-10-pattern-documentation-update.md`

---

### **7. Compliance** (`/reports/compliance/`)
Design system compliance, accessibility, standards

**Examples:**
- `2025-01-09-design-token-compliance.md`
- `2025-01-09-wcag-audit-complete.md`
- `2025-01-10-accessibility-improvements.md`

---

### **8. Performance** (`/reports/performance/`)
Performance optimization, bundle size, load times

**Examples:**
- `2025-01-09-bundle-size-reduction.md`
- `2025-01-09-lazy-loading-implementation.md`
- `2025-01-10-lighthouse-score-improvement.md`

---

### **9. Session Summaries** (`/reports/session-summaries/`)
End-of-session summaries, daily/weekly progress reports

**Examples:**
- `2025-01-09-session-summary.md`
- `2025-01-09-final-complete-summary.md`
- `2025-01-10-weekly-progress.md`

---

## 📋 **STANDARD REPORT TEMPLATE**

Every report should follow this structure:

```markdown
# [Report Title] — [Date]

## 🎯 **SUMMARY**

**Date:** YYYY-MM-DD  
**Status:** ✅ Complete / 🚧 In Progress  
**Category:** [Category Name]  
**Impact:** High / Medium / Low

Brief 1-2 sentence summary of what was accomplished.

---

## ✅ **WHAT WAS COMPLETED**

### **1. [Task/Feature Name]** ✅

**Details:**
- Bullet point 1
- Bullet point 2
- Bullet point 3

**Result:** Brief description of the outcome

---

### **2. [Task/Feature Name]** ✅

**Details:**
- Bullet point 1
- Bullet point 2

**Result:** Brief description of the outcome

---

## 📊 **STATISTICS**

| Metric | Before | After | Change |
|--------|--------|-------|--------|
| **Files Created** | 0 | 10 | +10 |
| **Files Modified** | 0 | 5 | +5 |
| **Files Deleted** | 0 | 3 | +3 |
| **Lines Added** | 0 | 1,000 | +1,000 |

---

## 💡 **KEY BENEFITS**

### **1. Benefit Name** ✅
**Before:** Description  
**After:** Description  
**Result:** Impact description

### **2. Benefit Name** ✅
**Before:** Description  
**After:** Description  
**Result:** Impact description

---

## 📁 **FILES CREATED**

1. ✅ `/path/to/file1.tsx` — Description
2. ✅ `/path/to/file2.ts` — Description
3. ✅ `/path/to/file3.md` — Description

---

## 📁 **FILES MODIFIED**

1. ✅ `/path/to/file1.tsx` — Changes made
2. ✅ `/path/to/file2.ts` — Changes made

---

## 📁 **FILES DELETED**

1. ✅ `/path/to/old-file1.tsx` — Reason
2. ✅ `/path/to/old-file2.ts` — Reason

---

## ✅ **COMPLIANCE SCORECARD**

| Requirement | Status |
|-------------|--------|
| **CSS variables usage** | ✅ 100% |
| **Design token compliance** | ✅ 100% |
| **WordPress compatibility** | ✅ 100% |
| **Accessibility (WCAG 2.1 AA)** | ✅ 100% |
| **TypeScript type safety** | ✅ 100% |
| **Documentation complete** | ✅ 100% |

**Overall:** ✅ **100% COMPLETE**

---

## 🎯 **NEXT STEPS**

### **Immediate:**
- [ ] Task 1
- [ ] Task 2

### **Future:**
- [ ] Task 3
- [ ] Task 4

---

**Last Updated:** YYYY-MM-DD  
**Author:** LSX Design Team  
**Review Status:** ✅ Complete  
**Production Ready:** ✅ Yes / ⏸️ Pending
```

---

## 🚫 **COMMON MISTAKES TO AVOID**

### **❌ WRONG: Missing Date Prefix**

```
global-styles-complete.md
button-migration.md
```

### **✅ CORRECT: Date-First Naming**

```
2025-01-09-global-styles-complete.md
2025-01-09-button-migration.md
```

---

### **❌ WRONG: Inconsistent Date Format**

```
2025-1-9-report.md       # Single digit month/day
01-09-2025-report.md     # Wrong order
jan-9-2025-report.md     # Month name
```

### **✅ CORRECT: ISO 8601 Format**

```
2025-01-09-report.md     # YYYY-MM-DD
2025-01-10-report.md
2025-12-31-report.md
```

---

### **❌ WRONG: Wrong Category**

```
/reports/architecture/2025-01-09-button-styles.md  ← Should be in css-variables/
/reports/cleanup/2025-01-09-new-feature.md        ← Should be in patterns/
```

### **✅ CORRECT: Proper Category**

```
/reports/css-variables/2025-01-09-button-styles.md
/reports/patterns/2025-01-09-new-feature.md
```

---

## 📊 **CATEGORY SELECTION GUIDE**

**Use this flowchart to choose the right category:**

```
Is it about...

├─ System structure/organization? → architecture/
├─ CSS variables/design tokens? → css-variables/
├─ WordPress compatibility? → wordpress/
├─ Removing/cleaning files? → cleanup/
├─ Migrating components? → migration/
├─ Adding/updating patterns? → patterns/
├─ Design system compliance? → compliance/
├─ Performance/optimization? → performance/
└─ End of work session? → session-summaries/
```

---

## ✅ **REPORT CREATION CHECKLIST**

Before finalizing a report:

- [ ] Stored in correct `/reports/` subdirectory
- [ ] Uses correct naming convention (`YYYY-MM-DD-description.md`)
- [ ] Has date prefix in filename
- [ ] Uses standard template structure
- [ ] Summary section completed
- [ ] Statistics included (if applicable)
- [ ] Files created/modified/deleted listed
- [ ] Benefits documented
- [ ] Compliance scorecard included
- [ ] Next steps defined (if applicable)

---

## 🔍 **FINDING REPORTS**

### **By Date:**

```bash
# Find all reports from January 2025
find /reports -name "2025-01-*.md"

# Find all reports from a specific day
find /reports -name "2025-01-09-*.md"
```

---

### **By Category:**

```bash
# Find all architecture reports
ls /reports/architecture/

# Find all WordPress reports
ls /reports/wordpress/
```

---

### **By Keyword:**

```bash
# Find all button-related reports
find /reports -name "*button*.md"

# Find all migration reports
find /reports -name "*migration*.md"
```

---

## 📚 **REPORTS vs GUIDELINES vs PLANNING**

### **REPORTS = Completed Work**

**Characteristics:**
- ✅ Documents what WAS completed
- ✅ Tracks actual time spent
- ✅ Lists actual changes made
- ✅ Stored in `/reports/`
- ✅ Status: ✅ Complete

**Examples:**
- Migration completion reports
- Audit results
- Session summaries

---

### **GUIDELINES = Permanent Standards**

**Characteristics:**
- ✅ Defines how to do things
- ✅ Permanent reference documentation
- ✅ Updated when standards change
- ✅ Stored in `/guidelines/`
- ✅ Status: ✅ Active

**Examples:**
- Design system usage guide
- Component guidelines
- Testing standards

---

### **PLANNING = Future Work**

**Characteristics:**
- ✅ Defines what WILL be built
- ✅ Estimates time and complexity
- ✅ Identifies risks
- ✅ Stored in `/planning/`
- ✅ Status: 📋 Planning or 🚧 In Progress

**Examples:**
- Feature specifications
- Migration strategies
- Architecture proposals

---

## 🎯 **WORKFLOW**

### **Typical Workflow:**

```
1. Create Plan (/planning/)
   ↓
2. Implement work
   ↓
3. Create Report (/reports/)
   ↓
4. Update Guidelines (if needed) (/guidelines/)
```

---

### **Example:**

```
1. Plan: /planning/features/2025-01-09-planning-button-migration.md
   ↓
2. Implement button migration
   ↓
3. Report: /reports/migration/2025-01-09-button-migration-complete.md
   ↓
4. Update: /guidelines/components/Button.md (if needed)
```

---

## 📖 **QUICK REFERENCE**

### **Report Location:**

```
/reports/[category]/YYYY-MM-DD-description.md
```

### **Categories:**

| Category | Purpose |
|----------|---------|
| `architecture/` | System architecture |
| `css-variables/` | Design tokens |
| `wordpress/` | WordPress compatibility |
| `cleanup/` | File cleanup |
| `migration/` | Component migrations |
| `patterns/` | Pattern implementation |
| `compliance/` | Design system compliance |
| `performance/` | Performance optimization |
| `session-summaries/` | End-of-session summaries |

### **Naming:**

```
✅ YYYY-MM-DD-description.md
❌ description-YYYY-MM-DD.md
❌ description.md
```

---

## 🎉 **SUMMARY**

**Where to create reports:**
```
✅ /reports/[category]/
❌ /reports/YYYY-MM/[category]/  (OLD - NO LONGER USED)
❌ / (root)
```

**How to name reports:**
```
✅ YYYY-MM-DD-description.md
❌ description-jan-9.md
❌ Description.md
```

**What to include:**
```
✅ Summary with status
✅ What was completed
✅ Statistics
✅ Benefits
✅ Files changed
✅ Compliance scorecard
✅ Next steps
```

---

**Last Updated:** 2025-01-09  
**Status:** ✅ Active  
**Enforcement:** Mandatory for all reports
