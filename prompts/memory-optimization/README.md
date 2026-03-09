# Memory Optimization Prompts

**Purpose:** Comprehensive audit prompts for CSS memory optimization across the LSX Design prototype.

**Last Updated:** March 5, 2026  
**Version:** 1.0  
**Status:** Active

---

## Overview

This directory contains a complete set of audit prompts designed to identify and eliminate memory inefficiencies in CSS architecture, resulting in 40-60% bundle size reduction.

---

## Quick Start

### Prerequisites

**Read these guidelines BEFORE running any audits:**

1. **[/guidelines/development/css-guidelines.md](/guidelines/development/css-guidelines.md)**
   - CSS architecture and BEM naming
   - Design system integration
   - WordPress utilities

2. **[/guidelines/development/css-memory-optimization.md](/guidelines/development/css-memory-optimization.md)**
   - Deduplication strategies
   - Base class extraction
   - Performance optimization

3. **[/guidelines/development/bem-naming-conventions.md](/guidelines/development/bem-naming-conventions.md)**
   - BEM structure and syntax
   - WordPress BEM conventions
   - Common patterns

### Execution Sequence

**Run audits IN ORDER:**

```
Phase 1: Foundation Analysis (Audits 1-3)
├── 01-css-inventory-audit.md         [30-45 min]
├── 02-css-duplication-audit.md       [45-60 min]
└── 03-css-specificity-audit.md       [30-45 min]

Phase 2: Pattern Extraction (Audits 4-6)
├── 04-base-class-extraction-audit.md [60-90 min]
├── 05-wordpress-utility-audit.md     [30-45 min]
└── 06-media-query-consolidation-audit.md [30-45 min]

Phase 3: Component Optimization (Audits 7-9)
├── 07-component-css-audit.md         [45-60 min]
├── 08-template-css-audit.md          [60-90 min]
└── 09-bundle-size-audit.md           [30-45 min]

Total Estimated Time: 6-9 hours
```

**Start with orchestrator:**
- **[00-ORCHESTRATOR.md](./00-ORCHESTRATOR.md)** - Master orchestrator

---

## Audit Prompts

### 00 - ORCHESTRATOR (Master)

**[00-ORCHESTRATOR.md](./00-ORCHESTRATOR.md)**
- Coordinates all 9 audits
- Defines execution sequence
- Sets success criteria
- Provides quality checklist

**Output:**
- Execution workflow
- Reporting structure
- Quality checklist
- Final consolidated report

**Time:** N/A (orchestrator only)

---

### Phase 1: Foundation Analysis

#### 01 - CSS Inventory Audit

**[01-css-inventory-audit.md](./01-css-inventory-audit.md)**

**Purpose:** Catalog all CSS files and establish baseline metrics

**Key Activities:**
- List all CSS files with sizes
- Identify top 20 largest files
- Calculate baseline metrics
- Prioritize optimization targets

**Output:**
- File inventory table
- Size distribution analysis
- Baseline metrics
- Optimization priority list

**Time:** 30-45 minutes

---

#### 02 - CSS Duplication Audit

**[02-css-duplication-audit.md](./02-css-duplication-audit.md)**

**Purpose:** Identify duplicate selectors and repeated patterns

**Key Activities:**
- Find duplicate CSS selectors
- Group by pattern type (icon, card, heading, button, grid)
- Calculate potential savings
- Create extraction plan

**Output:**
- Top 30 duplicate selectors
- Pattern category analysis
- Savings calculations
- Base class extraction plan

**Time:** 45-60 minutes

**Expected Savings:** ~1,610 lines (65% reduction)

---

#### 03 - CSS Specificity Audit

**[03-css-specificity-audit.md](./03-css-specificity-audit.md)**

**Purpose:** Find high-specificity selectors and cascade dependencies

**Key Activities:**
- Find selectors with 4+ class specificity
- Identify cascade dependencies
- Calculate specificity scores
- Plan BEM refactoring

**Output:**
- Specificity distribution
- Top 20 highest specificity selectors
- Refactoring plan
- Performance impact analysis

**Time:** 30-45 minutes

**Target:** Reduce specificity to 0-0-1 or 0-0-2

---

### Phase 2: Pattern Extraction

#### 04 - Base Class Extraction Audit

**[04-base-class-extraction-audit.md](./04-base-class-extraction-audit.md)** _(To be created)_

**Purpose:** Extract shared patterns into base classes

**Key Activities:**
- Create icon-base.css
- Create card-base.css
- Create heading-base.css
- Create button-base.css
- Create grid-base.css, flex-base.css
- Update components to use base classes

**Output:**
- Base class files in `/src/styles/base/`
- Updated component imports
- Visual regression testing
- Savings verification

**Time:** 60-90 minutes

**Expected Savings:** 1,015+ lines (65% reduction)

---

#### 05 - WordPress Utility Audit

**[05-wordpress-utility-audit.md](./05-wordpress-utility-audit.md)** _(To be created)_

**Purpose:** Eliminate Tailwind CSS and enforce WordPress utilities

**Key Activities:**
- Find Tailwind CSS usage
- Replace with WordPress utilities
- Verify CSS variable compliance
- Enforce font family compliance

**Output:**
- Tailwind elimination report
- WordPress utility usage
- CSS variable compliance verification
- Font family compliance verification

**Time:** 30-45 minutes

**Target:** 100% WordPress utility compliance, zero Tailwind

---

#### 06 - Media Query Consolidation Audit

**[06-media-query-consolidation-audit.md](./06-media-query-consolidation-audit.md)** _(To be created)_

**Purpose:** Consolidate scattered media queries

**Key Activities:**
- Find scattered media queries
- Consolidate by breakpoint
- Standardize breakpoint values
- Measure savings

**Output:**
- Media query inventory
- Consolidated media query blocks
- Breakpoint standardization
- Savings calculations

**Time:** 30-45 minutes

**Expected Savings:** 50% reduction in media query blocks

---

### Phase 3: Component Optimization

#### 07 - Component CSS Audit

**[07-component-css-audit.md](./07-component-css-audit.md)** _(To be created)_

**Purpose:** Optimize component-specific CSS files

**Key Activities:**
- Analyze component CSS files
- Find duplicate component styles
- Extract shared component patterns
- Reduce component CSS size

**Output:**
- Component CSS analysis
- Optimization recommendations
- Updated component CSS files
- Savings verification

**Time:** 45-60 minutes

**Expected Savings:** 30-40% reduction

---

#### 08 - Template CSS Audit

**[08-template-css-audit.md](./08-template-css-audit.md)** _(To be created)_

**Purpose:** Optimize template-specific CSS files

**Key Activities:**
- Analyze template CSS files (130+ templates)
- Identify shared template patterns
- Extract template base classes
- Reduce template CSS size

**Output:**
- Template CSS analysis
- Template base classes
- Updated template CSS files
- Savings verification

**Time:** 60-90 minutes

**Expected Savings:** 40-50% reduction

---

#### 09 - Bundle Size Audit

**[09-bundle-size-audit.md](./09-bundle-size-audit.md)** _(To be created)_

**Purpose:** Final bundle size measurement and optimization verification

**Key Activities:**
- Measure total CSS bundle size
- Compare before/after metrics
- Verify optimization targets met
- Generate final report

**Output:**
- Bundle size comparison
- Optimization verification
- Final savings report
- Success criteria checklist

**Time:** 30-45 minutes

**Target:** 40-60% total bundle reduction

---

## Expected Outcomes

### Optimization Targets

| Metric | Baseline | Target | Reduction |
|--------|----------|--------|-----------|
| Total CSS (uncompressed) | ~120KB | <80KB | 33% |
| Total CSS (gzipped) | ~35KB | <25KB | 29% |
| Largest single file | ~25KB | <15KB | 40% |
| Average template CSS | 300-800 lines | 150-400 lines | 50% |
| Duplicate selectors | ~1,200 | <200 | 83% |
| Media query blocks | ~200 | <100 | 50% |

### Architecture Improvements

- ✅ All components use base classes
- ✅ Zero Tailwind CSS usage
- ✅ 100% WordPress utility compliance
- ✅ 100% CSS variable usage
- ✅ 100% font family compliance (`var(--font-primary/secondary)` only)
- ✅ Consolidated media queries
- ✅ Low CSS specificity (≤ 2)
- ✅ BEM naming conventions enforced

---

## Reporting Structure

### Directory Structure

```
/reports/2026-03/memory-optimization/
├── 00-final-report.md                  # Consolidated final report
├── 01-css-inventory.md                 # CSS file inventory
├── 02-css-duplication.md               # Duplicate analysis
├── 03-css-specificity.md               # Specificity analysis
├── 04-base-class-extraction.md         # Base class extraction
├── 05-wordpress-utility.md             # WordPress utility compliance
├── 06-media-query-consolidation.md     # Media query consolidation
├── 07-component-css.md                 # Component optimization
├── 08-template-css.md                  # Template optimization
└── 09-bundle-size.md                   # Final bundle size

/tasks/memory-optimization/
├── task-list.md                        # Master task list
├── base-class-tasks.md                 # Base class tasks
├── wordpress-utility-tasks.md          # WordPress utility tasks
└── monitoring-tasks.md                 # Monitoring tasks
```

### Report Format

Each audit generates a report with:
- Executive summary
- Detailed findings
- Optimization recommendations
- Next steps
- Success criteria checklist

---

## Usage

### Running a Single Audit

```bash
# 1. Read prerequisites (guidelines)
# 2. Read the specific audit prompt
# 3. Follow instructions step-by-step
# 4. Generate report
# 5. Save to /reports/2026-03/memory-optimization/
```

### Running Full Orchestrator

```bash
# 1. Read orchestrator: 00-ORCHESTRATOR.md
# 2. Execute Phase 1 audits (1-3)
# 3. Execute Phase 2 audits (4-6)
# 4. Execute Phase 3 audits (7-9)
# 5. Generate final consolidated report
```

---

## Best Practices

### Before Starting

- [ ] Read all guidelines (CSS, memory optimization, BEM)
- [ ] Create report directory: `/reports/2026-03/memory-optimization/`
- [ ] Create task directory: `/tasks/memory-optimization/`
- [ ] Backup current CSS files

### During Audits

- [ ] Run audits in sequence (don't skip)
- [ ] Document all findings
- [ ] Test visual consistency after changes
- [ ] Verify CSS variable compliance
- [ ] Verify font family compliance

### After Completion

- [ ] Review all 9 audit reports
- [ ] Verify optimization targets met
- [ ] Generate consolidated final report
- [ ] Update guidelines if needed
- [ ] Set up ongoing monitoring

---

## Troubleshooting

### Common Issues

**"Cannot find duplicate selectors"**
- Solution: Use grep commands from audit 02
- Verify you're searching `src/styles/` directory

**"Visual regressions after optimization"**
- Solution: Test each change individually
- Use browser DevTools to compare styles
- Verify CSS variables match

**"Too many files to audit manually"**
- Solution: Focus on largest 20 files first
- Use bash commands to automate
- Extract base classes incrementally

---

## Related Documentation

- **[CSS Guidelines](/guidelines/development/css-guidelines.md)** - Main CSS guide
- **[CSS Memory Optimization](/guidelines/development/css-memory-optimization.md)** - Memory strategies
- **[BEM Naming Conventions](/guidelines/development/bem-naming-conventions.md)** - BEM guide
- **[WordPress Blocks CSS](/guidelines/WORDPRESS-BLOCKS-CSS-ARCHITECTURE.md)** - WordPress CSS
- **[Performance Standards](/guidelines/PERFORMANCE-STANDARDS.md)** - Performance targets

---

## Changelog

### Version 1.0 (March 5, 2026)
- Initial prompt directory creation
- 9 specialized audit prompts (3 complete, 6 planned)
- Orchestrator for coordinating audits
- Complete documentation and workflow

---

## Status

- **Orchestrator:** ✅ Complete
- **Phase 1 Audits (1-3):** ✅ Complete (3/3)
- **Phase 2 Audits (4-6):** 📝 Planned (0/3)
- **Phase 3 Audits (7-9):** 📝 Planned (0/3)

**Next:** Create audits 04-09

---

**Questions?** See [/guidelines/README.md](/guidelines/README.md)
