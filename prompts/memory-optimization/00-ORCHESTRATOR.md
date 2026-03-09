# Memory Optimization Orchestrator

**Purpose:** Orchestrate a comprehensive memory optimization audit across the LSX Design prototype codebase.

**Last Updated:** March 5, 2026  
**Version:** 1.0  
**Status:** Active

---

## Overview

This orchestrator coordinates 9 specialized audits to identify and eliminate memory inefficiencies across:
- CSS architecture
- Component duplication
- Pattern extraction opportunities
- Import optimization
- Bundle size reduction

**Expected Outcome:** 40-60% reduction in total bundle size, improved load times, and maintainable architecture.

---

## Prerequisites

**BEFORE running this orchestrator, read:**

1. **[/guidelines/development/css-guidelines.md](/guidelines/development/css-guidelines.md)**
   - CSS architecture standards
   - BEM naming conventions
   - Design system integration
   - WordPress CSS utilities

2. **[/guidelines/development/css-memory-optimization.md](/guidelines/development/css-memory-optimization.md)**
   - Deduplication strategies
   - Base class extraction
   - Specificity minimization
   - Media query consolidation

3. **[/guidelines/development/bem-naming-conventions.md](/guidelines/development/bem-naming-conventions.md)**
   - BEM structure and syntax
   - WordPress BEM conventions
   - Common patterns and anti-patterns

---

## Audit Sequence

Execute these audits **IN ORDER**:

### Phase 1: Foundation Analysis (Audits 1-3)

**1. CSS Inventory Audit** ([01-css-inventory-audit.md](./01-css-inventory-audit.md))
   - Catalog all CSS files
   - Measure file sizes
   - Identify largest files
   - Generate baseline metrics

**2. CSS Duplication Audit** ([02-css-duplication-audit.md](./02-css-duplication-audit.md))
   - Find duplicate selectors
   - Identify repeated patterns
   - Calculate potential savings
   - Prioritize extraction candidates

**3. CSS Specificity Audit** ([03-css-specificity-audit.md](./03-css-specificity-audit.md))
   - Measure selector specificity
   - Identify over-nested selectors
   - Find cascade dependencies
   - Recommend refactoring

### Phase 2: Pattern Extraction (Audits 4-6)

**4. Base Class Extraction Audit** ([04-base-class-extraction-audit.md](./04-base-class-extraction-audit.md))
   - Extract card base classes
   - Extract icon base classes
   - Extract heading base classes
   - Extract button base classes
   - Extract grid/flex base classes

**5. WordPress Utility Audit** ([05-wordpress-utility-audit.md](./05-wordpress-utility-audit.md))
   - Identify Tailwind usage (eliminate)
   - Ensure WordPress utility usage
   - Verify CSS variable compliance
   - Check font family enforcement

**6. Media Query Consolidation Audit** ([06-media-query-consolidation-audit.md](./06-media-query-consolidation-audit.md))
   - Find scattered media queries
   - Consolidate by breakpoint
   - Standardize breakpoint values
   - Measure savings

### Phase 3: Component Optimization (Audits 7-9)

**7. Component CSS Audit** ([07-component-css-audit.md](./07-component-css-audit.md))
   - Analyze component CSS files
   - Find duplicate component styles
   - Optimize component architecture
   - Reduce component CSS size

**8. Template CSS Audit** ([08-template-css-audit.md](./08-template-css-audit.md))
   - Analyze template CSS files
   - Identify shared template patterns
   - Extract template base classes
   - Reduce template CSS size

**9. Bundle Size Audit** ([09-bundle-size-audit.md](./09-bundle-size-audit.md))
   - Measure total CSS bundle size
   - Identify optimization opportunities
   - Generate final report
   - Document savings

---

## Success Criteria

**Optimization Targets:**

| Metric | Baseline | Target | Reduction |
|--------|----------|--------|-----------|
| Total CSS (uncompressed) | ~120KB | <80KB | 33% |
| Total CSS (gzipped) | ~35KB | <25KB | 29% |
| Largest single file | ~25KB | <15KB | 40% |
| Average template CSS | 300-800 lines | 150-400 lines | 50% |
| Duplicate selectors | ~1,200 | <200 | 83% |
| Media query blocks | ~200 | <100 | 50% |

**Architecture Improvements:**

- [ ] All components use base classes
- [ ] Zero Tailwind CSS usage
- [ ] 100% WordPress utility compliance
- [ ] 100% CSS variable usage (no hardcoded values)
- [ ] 100% font family compliance (var(--font-primary/secondary) only)
- [ ] Consolidated media queries
- [ ] Low CSS specificity (≤2)
- [ ] BEM naming conventions enforced

---

## Execution Workflow

### Step 1: Preparation

```bash
# Create working directories
mkdir -p /reports/2026-03/memory-optimization
mkdir -p /tasks/memory-optimization

# Read guidelines (REQUIRED)
# - /guidelines/development/css-guidelines.md
# - /guidelines/development/css-memory-optimization.md
# - /guidelines/development/bem-naming-conventions.md
```

### Step 2: Run Phase 1 Audits (Foundation)

**Execute sequentially:**

1. Run **01-css-inventory-audit.md**
   - Save report: `/reports/2026-03/memory-optimization/01-css-inventory.md`
   - Generate baseline metrics

2. Run **02-css-duplication-audit.md**
   - Save report: `/reports/2026-03/memory-optimization/02-css-duplication.md`
   - Identify duplicate patterns

3. Run **03-css-specificity-audit.md**
   - Save report: `/reports/2026-03/memory-optimization/03-css-specificity.md`
   - Find high-specificity selectors

**Phase 1 Checkpoint:**
- Baseline metrics documented
- Duplication patterns identified
- Specificity issues found
- Ready for extraction

### Step 3: Run Phase 2 Audits (Pattern Extraction)

**Execute sequentially:**

4. Run **04-base-class-extraction-audit.md**
   - Save report: `/reports/2026-03/memory-optimization/04-base-class-extraction.md`
   - Create base class files in `/src/styles/base/`

5. Run **05-wordpress-utility-audit.md**
   - Save report: `/reports/2026-03/memory-optimization/05-wordpress-utility.md`
   - Eliminate Tailwind, enforce WordPress utilities

6. Run **06-media-query-consolidation-audit.md**
   - Save report: `/reports/2026-03/memory-optimization/06-media-query-consolidation.md`
   - Consolidate media queries

**Phase 2 Checkpoint:**
- Base classes extracted
- WordPress utilities enforced
- Media queries consolidated
- Ready for component optimization

### Step 4: Run Phase 3 Audits (Component Optimization)

**Execute sequentially:**

7. Run **07-component-css-audit.md**
   - Save report: `/reports/2026-03/memory-optimization/07-component-css.md`
   - Optimize component CSS

8. Run **08-template-css-audit.md**
   - Save report: `/reports/2026-03/memory-optimization/08-template-css.md`
   - Optimize template CSS

9. Run **09-bundle-size-audit.md**
   - Save report: `/reports/2026-03/memory-optimization/09-bundle-size.md`
   - Final measurements and savings

**Phase 3 Checkpoint:**
- Component CSS optimized
- Template CSS optimized
- Bundle size reduced
- Optimization complete

### Step 5: Generate Final Report

**Consolidate findings:**

```markdown
# Memory Optimization Final Report

**Date:** March 5, 2026
**Audits Completed:** 9/9

## Baseline Metrics
- Total CSS: 120KB
- Largest file: 25KB
- Duplicate selectors: 1,200
- Media query blocks: 200

## Final Metrics
- Total CSS: 72KB (40% reduction)
- Largest file: 14KB (44% reduction)
- Duplicate selectors: 150 (87.5% reduction)
- Media query blocks: 95 (52.5% reduction)

## Key Achievements
- ✅ All components use base classes
- ✅ Zero Tailwind CSS usage
- ✅ 100% WordPress utility compliance
- ✅ 100% CSS variable usage
- ✅ 100% font family compliance
- ✅ Consolidated media queries
- ✅ BEM naming conventions enforced

## Files Created
- `/src/styles/base/card-base.css`
- `/src/styles/base/icon-base.css`
- `/src/styles/base/heading-base.css`
- `/src/styles/base/button-base.css`
- `/src/styles/base/grid-base.css`
- `/src/styles/base/flex-base.css`
- `/src/styles/base/spacing-base.css`
- `/src/styles/base/typography-base.css`

## Next Steps
- [ ] Monitor bundle size in future development
- [ ] Enforce base class usage in new components
- [ ] Run monthly CSS audits
- [ ] Update guidelines with learnings
```

**Save to:** `/reports/2026-03/memory-optimization/00-final-report.md`

### Step 6: Update Task List

**Generate actionable tasks:**

```markdown
# Memory Optimization Tasks

**Generated:** March 5, 2026
**Source:** Memory Optimization Orchestrator
**Priority:** High

## Immediate Tasks (Priority 1)

- [ ] Apply base classes to remaining components
- [ ] Remove final Tailwind CSS references
- [ ] Consolidate remaining scattered media queries
- [ ] Verify CSS variable compliance in all files

## Maintenance Tasks (Priority 2)

- [ ] Add CSS size limits to CI/CD
- [ ] Create pre-commit hook for BEM validation
- [ ] Document base class usage in component guidelines
- [ ] Add automated CSS duplication detection

## Monitoring Tasks (Priority 3)

- [ ] Set up bundle size monitoring
- [ ] Create CSS complexity dashboard
- [ ] Schedule monthly CSS audits
- [ ] Track optimization metrics over time
```

**Save to:** `/tasks/memory-optimization/task-list.md`

---

## Reporting Structure

### Individual Audit Reports

```
/reports/2026-03/memory-optimization/
├── 00-final-report.md                  # Consolidated final report
├── 01-css-inventory.md                 # CSS file inventory
├── 02-css-duplication.md               # Duplicate selector analysis
├── 03-css-specificity.md               # Specificity analysis
├── 04-base-class-extraction.md         # Base class extraction results
├── 05-wordpress-utility.md             # WordPress utility compliance
├── 06-media-query-consolidation.md     # Media query consolidation
├── 07-component-css.md                 # Component CSS optimization
├── 08-template-css.md                  # Template CSS optimization
└── 09-bundle-size.md                   # Final bundle size analysis
```

### Task Lists

```
/tasks/memory-optimization/
├── task-list.md                        # Master task list
├── base-class-tasks.md                 # Base class implementation tasks
├── wordpress-utility-tasks.md          # WordPress utility migration tasks
└── monitoring-tasks.md                 # Ongoing monitoring tasks
```

---

## Quality Checklist

**Before marking orchestrator complete:**

### Phase 1 Complete
- [ ] CSS inventory generated with file sizes
- [ ] Duplicate selectors identified and counted
- [ ] High-specificity selectors documented
- [ ] Baseline metrics recorded

### Phase 2 Complete
- [ ] Base class files created in `/src/styles/base/`
- [ ] Tailwind CSS eliminated (verified zero usage)
- [ ] WordPress utilities enforced (100% compliance)
- [ ] Media queries consolidated by breakpoint

### Phase 3 Complete
- [ ] Component CSS optimized (avg 40% reduction)
- [ ] Template CSS optimized (avg 50% reduction)
- [ ] Bundle size measured and reduced
- [ ] Final report generated

### Architecture Complete
- [ ] BEM naming conventions enforced
- [ ] CSS variable usage at 100%
- [ ] Font family compliance at 100%
- [ ] All guidelines followed

### Documentation Complete
- [ ] All 9 audit reports saved
- [ ] Final consolidated report created
- [ ] Task lists generated
- [ ] Guidelines updated if needed

---

## Troubleshooting

### Issue: "Cannot find duplicate selectors"

**Solution:**
```bash
# Use this command to find duplicates
grep -rh "^\." src/styles/ | sort | uniq -c | sort -rn | awk '$1 > 1'
```

### Issue: "Baseline metrics unclear"

**Solution:**
- Re-run **01-css-inventory-audit.md**
- Use `wc -l` to count lines
- Use `du -h` to measure file sizes
- Document BEFORE starting optimization

### Issue: "Too many files to audit manually"

**Solution:**
- Focus on top 20 largest files first
- Use bash commands to automate detection
- Prioritize templates over components
- Extract base classes incrementally

### Issue: "Visual regressions after optimization"

**Solution:**
- Test each base class individually
- Verify CSS variable values match
- Check BEM class composition in components
- Use browser DevTools to compare computed styles

---

## Related Documentation

- **[CSS Guidelines](/guidelines/development/css-guidelines.md)** - Main CSS guide
- **[CSS Memory Optimization](/guidelines/development/css-memory-optimization.md)** - Memory strategies
- **[BEM Naming Conventions](/guidelines/development/bem-naming-conventions.md)** - BEM guide
- **[WordPress Blocks CSS Architecture](/guidelines/WORDPRESS-BLOCKS-CSS-ARCHITECTURE.md)** - WordPress CSS
- **[Performance Standards](/guidelines/PERFORMANCE-STANDARDS.md)** - Performance targets

---

## Changelog

### Version 1.0 (March 5, 2026)
- Initial orchestrator creation
- 9 specialized audit prompts
- Phase-based execution workflow
- Success criteria and metrics
- Quality checklist

---

**Orchestrator Status:** ⏸️ Ready to Execute  
**Expected Duration:** 4-6 hours (all 9 audits)  
**Expected Savings:** 40-60% CSS bundle reduction  
**Questions?** See [/guidelines/README.md](/guidelines/README.md)
