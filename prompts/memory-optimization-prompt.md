# Memory Optimization Audit Prompt

**Prompt Type:** Codebase Analysis & Optimization  
**Created:** March 2, 2026  
**Category:** Performance & Architecture  
**Related Reports:** `/reports/2026-03/memory-optimization-audit.md`  
**Related Tasks:** `/tasks/memory-optimization-tasks.md`

---

## Objective

Conduct a comprehensive audit of the LSX Design codebase to identify and reduce memory usage, file size, and complexity through strategic file splitting, DRY pattern extraction, CSS consolidation, layer cleanup, SVG optimization, and component variant reduction.

---

## Audit Scope

### 1. File Size Analysis

**Large Files Identification:**
- [ ] Identify all files > 500 lines (TSX, TS, CSS)
- [ ] Identify all files > 1000 lines (TSX, TS, CSS)
- [ ] Identify all files > 2000 lines (TSX, TS, CSS)
- [ ] Calculate total lines and average file size per category
- [ ] Identify bloat patterns (duplicated code, unused imports, commented code)

**File Categories to Audit:**
- [ ] **Template files:** `/src/app/components/templates/*.tsx`
- [ ] **CSS files:** `/src/styles/**/*.css`
- [ ] **Pattern files:** `/src/app/components/patterns/*.tsx`
- [ ] **Data files:** `/src/app/data/*.ts`
- [ ] **Component files:** `/src/app/components/**/*.tsx`
- [ ] **Utility files:** `/src/app/utils/*.ts`
- [ ] **Hook files:** `/src/app/hooks/*.ts`

**Splitting Opportunities:**
- [ ] Templates with multiple page views (can split into separate files)
- [ ] Data files with multiple categories (can split by category)
- [ ] CSS files with multiple unrelated sections (can split by purpose)
- [ ] Pattern files with multiple unrelated patterns (can split by type)

---

### 2. DRY Pattern Analysis

**Code Duplication Detection:**
- [ ] Scan for repeated JSX structures across templates (3+ occurrences)
- [ ] Scan for repeated CSS patterns across files (3+ occurrences)
- [ ] Scan for repeated TypeScript logic across components
- [ ] Identify extractable patterns not yet in `/patterns/`
- [ ] Identify extractable hooks not yet in `/hooks/`
- [ ] Identify extractable utilities not yet in `/utils/`

**Pattern Extraction Candidates:**
- [ ] Repeated hero structures
- [ ] Repeated card layouts
- [ ] Repeated form structures
- [ ] Repeated navigation patterns
- [ ] Repeated grid layouts
- [ ] Repeated modal/dialog structures
- [ ] Repeated animation patterns

---

### 3. CSS File Reduction

**CSS Bloat Identification:**
- [ ] Identify CSS files > 500 lines
- [ ] Identify CSS files > 1000 lines
- [ ] Identify duplicate selectors across files
- [ ] Identify unused CSS classes (not referenced in TSX)
- [ ] Identify overly specific selectors (4+ levels deep)
- [ ] Identify redundant media queries
- [ ] Identify duplicate color/spacing/font declarations

**CSS Consolidation Opportunities:**
- [ ] Base CSS files that can be merged
- [ ] Pattern CSS files with shared utilities
- [ ] Template CSS files with shared sections
- [ ] Duplicate responsive breakpoints
- [ ] Duplicate animation keyframes
- [ ] Duplicate pseudo-element styles

**CSS Splitting Opportunities:**
- [ ] Large template CSS files (split by section)
- [ ] Monolithic utility files (split by category)
- [ ] Base files with multiple concerns (split by purpose)

---

### 4. Layer & Component Cleanup

**Hidden/Unused Layer Detection:**
- [ ] Scan for commented-out components
- [ ] Scan for unused imports in templates
- [ ] Scan for unreferenced components
- [ ] Scan for orphaned CSS files (no corresponding TSX)
- [ ] Scan for orphaned SVG files (no imports)
- [ ] Scan for unused data exports

**Nested Layer Reduction:**
- [ ] Identify components with 5+ levels of nesting
- [ ] Identify unnecessary wrapper divs
- [ ] Identify redundant container components
- [ ] Identify over-engineered component hierarchies
- [ ] Recommend flattening strategies

---

### 5. SVG Optimization

**SVG Complexity Analysis:**
- [ ] Identify all SVG files in `/src/imports/`
- [ ] Measure SVG file sizes
- [ ] Count paths/groups per SVG
- [ ] Identify SVGs with 10+ paths
- [ ] Identify SVGs with nested groups 3+ levels deep
- [ ] Identify SVGs with unnecessary metadata/comments

**SVG Flattening Opportunities:**
- [ ] Complex vector shapes that can be simplified
- [ ] Grouped paths that can be merged
- [ ] Unnecessary transforms that can be baked in
- [ ] Gradients that can be replaced with CSS
- [ ] Filters that can be replaced with CSS

**SVG Optimization Techniques:**
- [ ] Remove comments and metadata
- [ ] Merge adjacent paths
- [ ] Simplify path data (reduce precision)
- [ ] Remove unused definitions
- [ ] Replace complex shapes with simpler ones

---

### 6. Component Variant Reduction

**Variant Analysis:**
- [ ] Identify components with 5+ variants
- [ ] Identify components with 10+ variants
- [ ] Calculate total variant combinations per component
- [ ] Identify variant logic that can be replaced with props

**Component Property Conversion:**
- [ ] Variants that differ only by color (use color prop)
- [ ] Variants that differ only by size (use size prop)
- [ ] Variants that differ only by spacing (use spacing prop)
- [ ] Variants that differ only by icon (use icon prop)
- [ ] Variants that differ only by text (use children prop)

**Variant Consolidation:**
- [ ] Merge similar variants
- [ ] Remove unused variants
- [ ] Replace variant logic with conditional props
- [ ] Document recommended variant reduction strategies

---

## Audit Methodology

### Step 1: Automated File Analysis

```bash
# Count lines in all TypeScript files
find src -name "*.tsx" -o -name "*.ts" | xargs wc -l | sort -rn > /tmp/tsx-lines.txt

# Count lines in all CSS files
find src/styles -name "*.css" | xargs wc -l | sort -rn > /tmp/css-lines.txt

# Find large files (> 500 lines)
find src -type f \( -name "*.tsx" -o -name "*.ts" -o -name "*.css" \) -exec wc -l {} + | awk '$1 > 500' | sort -rn

# Find duplicate CSS selectors
grep -r "^\.[a-z]" src/styles --include="*.css" | sort | uniq -d

# Find unused imports
# (manual review required)
```

### Step 2: Pattern Detection

**Manual Review:**
- Open top 20 largest template files
- Identify repeated JSX structures (3+ occurrences)
- Mark candidates for pattern extraction
- Estimate lines saved per extraction

**Automated Detection:**
- Use AST parsing to find duplicate JSX subtrees
- Use CSS parser to find duplicate rule blocks
- Generate candidate pattern list

### Step 3: Component Analysis

**Component Hierarchy:**
- Map component import trees
- Identify circular dependencies
- Identify deep nesting (5+ levels)
- Recommend flattening strategies

**Variant Analysis:**
- Count variants per component
- Analyze variant differences
- Identify property conversion opportunities

### Step 4: SVG Analysis

**File Size:**
- List all SVG files by size
- Identify large SVGs (> 10KB)
- Count paths per SVG
- Identify optimization candidates

**Complexity:**
- Measure nesting depth
- Count transforms
- Count gradients/filters
- Recommend simplification strategies

---

## Success Metrics

### Quantitative Goals

- [ ] **File Count Reduction:** Reduce files > 1000 lines by 50%
- [ ] **Average File Size:** Reduce average file size by 25%
- [ ] **CSS Duplication:** Reduce duplicate CSS by 30%
- [ ] **JSX Duplication:** Reduce duplicate JSX by 20%
- [ ] **SVG Size:** Reduce SVG total size by 15%
- [ ] **Component Variants:** Reduce total variants by 25%
- [ ] **Nested Layers:** Reduce 5+ level nesting by 40%

### Qualitative Goals

- [ ] **Maintainability:** Easier to locate and update code
- [ ] **Performance:** Faster build times and smaller bundle size
- [ ] **Clarity:** Clearer component responsibilities
- [ ] **Reusability:** More DRY patterns extracted
- [ ] **Consistency:** Unified approach to variants

---

## Report Structure

The audit report (`/reports/2026-03/memory-optimization-audit.md`) should include:

### Section 1: Executive Summary
- Total lines analyzed
- Total files analyzed
- Top 10 largest files
- Key findings summary
- Estimated optimization potential

### Section 2: File Size Analysis
- Files > 2000 lines (critical)
- Files > 1000 lines (high priority)
- Files > 500 lines (medium priority)
- File size distribution chart
- Splitting recommendations

### Section 3: DRY Pattern Analysis
- Duplicate JSX patterns found
- Duplicate CSS patterns found
- Extractable pattern candidates
- Estimated lines saved per extraction
- Priority ranking

### Section 4: CSS Reduction Opportunities
- Largest CSS files
- Duplicate selectors
- Unused classes
- Consolidation opportunities
- Splitting opportunities
- Estimated reduction potential

### Section 5: Layer Cleanup
- Unused imports count
- Orphaned files count
- Deep nesting instances
- Cleanup recommendations

### Section 6: SVG Optimization
- SVG file inventory
- Large SVG files (> 10KB)
- Complex SVGs (10+ paths)
- Optimization opportunities
- Estimated size reduction

### Section 7: Component Variant Analysis
- Components with 5+ variants
- Components with 10+ variants
- Property conversion opportunities
- Variant reduction strategies

### Section 8: Action Plan
- Priority 1 tasks (immediate)
- Priority 2 tasks (short-term)
- Priority 3 tasks (long-term)
- Estimated impact per task
- Implementation timeline

---

## Task List Structure

The task list (`/tasks/memory-optimization-tasks.md`) should include:

### Priority 1: Critical (Immediate Action)
- Files > 2000 lines (split immediately)
- Critical DRY violations (extract patterns)
- Unused files (delete)

### Priority 2: High (Next Sprint)
- Files > 1000 lines (split or consolidate)
- High-value pattern extractions
- CSS consolidation opportunities
- Large SVG optimizations

### Priority 3: Medium (Future Sprints)
- Files > 500 lines (evaluate)
- Medium-value pattern extractions
- Component variant reductions
- Layer flattening

### Priority 4: Low (Backlog)
- Minor optimizations
- Optional refactorings
- Documentation updates

---

## Design System Compliance Requirements

**CRITICAL:** All optimizations MUST maintain 100% CSS variable compliance.

### Typography Enforcement
- [ ] All fonts use `var(--font-primary)` or `var(--font-secondary)`
- [ ] NEVER hardcode font names like `'Lexend, sans-serif'`
- [ ] All font sizes use `var(--text-*)` tokens
- [ ] All font weights use `var(--font-weight-*)` tokens

### Spacing Enforcement
- [ ] All spacing uses `var(--spacing-*)` tokens
- [ ] NEVER hardcode px values for padding/margin/gap
- [ ] Use WordPress utility classes (`.wp-*`) for layout

### Color Enforcement
- [ ] All colors use semantic CSS variables
- [ ] NEVER hardcode hex values
- [ ] Use `color-mix()` for transparency effects

### Border Radius Enforcement
- [ ] All border radius uses `var(--radius*)` tokens
- [ ] NEVER hardcode border-radius px values

### User Control Principle
- [ ] Users must be able to update entire site styling by editing CSS files alone
- [ ] NO hardcoded values in TSX files (except truly dynamic values)
- [ ] All static styling comes from CSS files and CSS variables

---

## Constraints & Guidelines

### File Splitting Rules
1. **Keep related code together:** Don't split files that share tight coupling
2. **Maintain clear boundaries:** Each file should have a single clear purpose
3. **Preserve imports:** Update all import paths when splitting
4. **Test after splitting:** Verify no broken references

### DRY Pattern Rules
1. **3+ occurrences rule:** Only extract patterns used 3+ times
2. **Meaningful abstraction:** Pattern should represent a clear concept
3. **Flexible enough:** Pattern should accommodate variations
4. **Well-documented:** Include JSDoc and usage examples

### CSS Reduction Rules
1. **No functionality loss:** Consolidation must preserve all styles
2. **Maintain specificity:** Don't introduce specificity conflicts
3. **Preserve dark mode:** All dark mode styles must remain
4. **Keep responsive:** All breakpoints must remain functional

### Component Variant Rules
1. **Maintain API compatibility:** Don't break existing usage
2. **Prefer props over variants:** Use component properties when possible
3. **Document changes:** Update component documentation
4. **Test all conversions:** Verify all variant use cases still work

---

## Deliverables

1. **Audit Report:** `/reports/2026-03/memory-optimization-audit.md`
   - Comprehensive analysis of all findings
   - Quantified optimization opportunities
   - Prioritized recommendations

2. **Task List:** `/tasks/memory-optimization-tasks.md`
   - Prioritized action items
   - Estimated effort per task
   - Estimated impact per task
   - Implementation order

3. **File Split Plan:** (if applicable)
   - Files to split
   - New file structure
   - Import update strategy

4. **Pattern Extraction Plan:** (if applicable)
   - Patterns to extract
   - Component API design
   - Migration strategy

5. **CSS Consolidation Plan:** (if applicable)
   - CSS files to merge
   - CSS files to split
   - Refactoring strategy

---

## Execution Instructions

### For AI Agent:

1. **Run file size analysis:**
   - Use `bash` tool to count lines in all files
   - Generate sorted lists by file size
   - Identify files > 500, 1000, 2000 lines

2. **Scan for patterns:**
   - Read top 20 largest template files
   - Identify repeated JSX structures
   - Count occurrences of each pattern
   - Estimate extraction value

3. **Analyze CSS:**
   - Read all CSS files in `/src/styles/`
   - Identify duplicate selectors
   - Identify consolidation opportunities
   - Measure potential reduction

4. **Review components:**
   - Scan component files for deep nesting
   - Identify unused imports
   - Count component variants
   - Recommend optimizations

5. **Analyze SVGs:**
   - List all SVG files in `/src/imports/`
   - Measure file sizes
   - Identify complex SVGs
   - Recommend optimizations

6. **Generate report:**
   - Write comprehensive findings to `/reports/2026-03/memory-optimization-audit.md`
   - Include all analysis sections
   - Provide quantified recommendations
   - Estimate optimization impact

7. **Create task list:**
   - Write prioritized tasks to `/tasks/memory-optimization-tasks.md`
   - Organize by priority (1-4)
   - Include effort and impact estimates
   - Provide implementation order

---

## Notes

- This audit focuses on **memory and file size optimization**
- All optimizations must maintain **100% CSS variable compliance**
- All optimizations must preserve **functionality and design**
- Prioritize **high-impact, low-effort** optimizations first
- Use **DRY principles** to reduce duplication
- Maintain **clear file organization** and **logical boundaries**

---

**End of Prompt**
