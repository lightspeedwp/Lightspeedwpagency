# CSS Inventory Audit

**Audit ID:** 01  
**Phase:** Phase 1 - Foundation Analysis  
**Purpose:** Catalog all CSS files and establish baseline metrics  
**Prerequisites:** Read [/guidelines/development/css-guidelines.md](/guidelines/development/css-guidelines.md)

---

## Objective

Generate a comprehensive inventory of all CSS files in the project, measure their sizes, and establish baseline metrics for memory optimization.

---

## Instructions

### Step 1: Catalog CSS Files

**Find all CSS files in the project:**

```bash
# List all CSS files with line counts
find src/styles -name "*.css" -exec wc -l {} + | sort -rn

# List all CSS files with sizes
find src/styles -name "*.css" -exec du -h {} + | sort -h

# Count CSS files by directory
find src/styles -type f -name "*.css" | awk -F'/' '{print $3}' | sort | uniq -c
```

**Document findings in a table:**

| Directory | File Count | Total Lines | Total Size | Avg Lines/File |
|-----------|------------|-------------|------------|----------------|
| base/ | ? | ? | ? | ? |
| components/ | ? | ? | ? | ? |
| patterns/ | ? | ? | ? | ? |
| templates/ | ? | ? | ? | ? |
| blocks/ | ? | ? | ? | ? |
| global | ? | ? | ? | ? |
| **TOTAL** | **?** | **?** | **?** | **?** |

### Step 2: Identify Largest Files

**Find the top 20 largest CSS files:**

```bash
# By line count
find src/styles -name "*.css" -exec wc -l {} + | sort -rn | head -20

# By file size
find src/styles -name "*.css" -exec du -h {} + | sort -h | tail -20
```

**Document in a table:**

| Rank | File Path | Lines | Size | Category |
|------|-----------|-------|------|----------|
| 1 | ? | ? | ? | template/component/pattern |
| 2 | ? | ? | ? | |
| ... | | | | |
| 20 | ? | ? | ? | |

### Step 3: Analyze File Size Distribution

**Categorize files by size:**

```bash
# Small files (<100 lines)
find src/styles -name "*.css" -exec sh -c 'lines=$(wc -l < "$1"); [ $lines -lt 100 ] && echo "$1: $lines lines"' _ {} \; | wc -l

# Medium files (100-500 lines)
find src/styles -name "*.css" -exec sh -c 'lines=$(wc -l < "$1"); [ $lines -ge 100 ] && [ $lines -lt 500 ] && echo "$1: $lines lines"' _ {} \; | wc -l

# Large files (500-1000 lines)
find src/styles -name "*.css" -exec sh -c 'lines=$(wc -l < "$1"); [ $lines -ge 500 ] && [ $lines -lt 1000 ] && echo "$1: $lines lines"' _ {} \; | wc -l

# Extra large files (>1000 lines)
find src/styles -name "*.css" -exec sh -c 'lines=$(wc -l < "$1"); [ $lines -ge 1000 ] && echo "$1: $lines lines"' _ {} \; | wc -l
```

**Document distribution:**

| Size Category | Count | % of Total | Optimization Priority |
|---------------|-------|------------|----------------------|
| Small (<100 lines) | ? | ?% | Low |
| Medium (100-500 lines) | ? | ?% | Medium |
| Large (500-1000 lines) | ? | ?% | High |
| Extra Large (>1000 lines) | ? | ?% | Critical |

### Step 4: Calculate Baseline Metrics

**Generate baseline metrics:**

```bash
# Total CSS lines
find src/styles -name "*.css" -exec cat {} + | wc -l

# Total CSS files
find src/styles -name "*.css" | wc -l

# Average lines per file
find src/styles -name "*.css" -exec wc -l {} + | awk '{sum+=$1; count++} END {print sum/count}'

# Largest file
find src/styles -name "*.css" -exec wc -l {} + | sort -rn | head -1

# Smallest file
find src/styles -name "*.css" -exec wc -l {} + | sort -n | head -2 | tail -1
```

**Baseline Metrics Table:**

| Metric | Value | Unit |
|--------|-------|------|
| Total CSS Files | ? | files |
| Total CSS Lines | ? | lines |
| Total CSS Size (uncompressed) | ? | KB |
| Total CSS Size (estimated gzipped) | ? | KB |
| Largest File | ? | lines |
| Smallest File | ? | lines |
| Average File Size | ? | lines |
| Median File Size | ? | lines |

### Step 5: Identify Optimization Targets

**Based on the inventory, identify high-impact optimization targets:**

**Critical Files (>1000 lines):**
- List files that are critically large
- Estimate potential reduction: 40-50%

**High-Impact Files (500-1000 lines):**
- List files with high optimization potential
- Estimate potential reduction: 30-40%

**Medium-Impact Files (100-500 lines):**
- List files with moderate optimization potential
- Estimate potential reduction: 20-30%

**Optimization Priority List:**

| Priority | File Path | Current Size | Target Size | Est. Savings | Reason |
|----------|-----------|--------------|-------------|--------------|--------|
| P1 - Critical | ? | ? lines | ? lines | ? lines | Critically large |
| P1 - Critical | ? | ? lines | ? lines | ? lines | |
| P2 - High | ? | ? lines | ? lines | ? lines | |
| P2 - High | ? | ? lines | ? lines | ? lines | |
| P3 - Medium | ? | ? lines | ? lines | ? lines | |

---

## Report Template

**Save findings to:** `/reports/2026-03/memory-optimization/01-css-inventory.md`

```markdown
# CSS Inventory Audit Report

**Date:** March 5, 2026  
**Audit:** 01 - CSS Inventory  
**Auditor:** [Your Name]

---

## Executive Summary

- **Total CSS Files:** ? files
- **Total CSS Lines:** ? lines
- **Total CSS Size:** ? KB (uncompressed)
- **Largest File:** ? (? lines)
- **Optimization Potential:** ?% reduction (~? KB savings)

---

## File Distribution by Directory

| Directory | Files | Total Lines | Avg Lines/File | % of Total |
|-----------|-------|-------------|----------------|------------|
| base/ | ? | ? | ? | ?% |
| components/ | ? | ? | ? | ?% |
| patterns/ | ? | ? | ? | ?% |
| templates/ | ? | ? | ? | ?% |
| blocks/ | ? | ? | ? | ?% |
| global | ? | ? | ? | ?% |
| **TOTAL** | **?** | **?** | **?** | **100%** |

---

## File Size Distribution

| Size Category | Count | % of Total | Total Lines | Optimization Priority |
|---------------|-------|------------|-------------|----------------------|
| Small (<100 lines) | ? | ?% | ? | Low |
| Medium (100-500 lines) | ? | ?% | ? | Medium |
| Large (500-1000 lines) | ? | ?% | ? | High |
| Extra Large (>1000 lines) | ? | ?% | ? | Critical |

---

## Top 20 Largest Files

| Rank | File Path | Lines | Category | Optimization Potential |
|------|-----------|-------|----------|----------------------|
| 1 | /src/styles/templates/example.css | ? | Template | High (40-50%) |
| 2 | | | | |
| ... | | | | |
| 20 | | | | |

---

## Baseline Metrics

| Metric | Value |
|--------|-------|
| Total CSS Files | ? files |
| Total CSS Lines | ? lines |
| Total CSS Size (uncompressed) | ? KB |
| Total CSS Size (estimated gzipped) | ? KB |
| Largest File | ? lines |
| Smallest File | ? lines |
| Average File Size | ? lines |
| Median File Size | ? lines |

---

## Optimization Targets

### Critical Priority (>1000 lines)

**Files:**
1. `/src/styles/templates/file1.css` - ? lines
2. `/src/styles/templates/file2.css` - ? lines

**Expected Reduction:** 40-50% (~? lines savings)

### High Priority (500-1000 lines)

**Files:**
1. `/src/styles/components/file3.css` - ? lines
2. `/src/styles/templates/file4.css` - ? lines

**Expected Reduction:** 30-40% (~? lines savings)

### Medium Priority (100-500 lines)

**Files:**
1. `/src/styles/patterns/file5.css` - ? lines
2. `/src/styles/components/file6.css` - ? lines

**Expected Reduction:** 20-30% (~? lines savings)

---

## Key Findings

1. **Largest files are in:** templates/ directory
2. **Most optimization potential:** Template CSS files
3. **Average template size:** ? lines (target: <400 lines)
4. **Total optimization potential:** ?% reduction (~? KB savings)

---

## Recommendations

1. **Immediate:** Focus on files >1000 lines (critical priority)
2. **Phase 1:** Optimize top 10 largest files (50% of savings)
3. **Phase 2:** Extract base classes for common patterns
4. **Phase 3:** Consolidate medium-sized files

---

## Next Steps

- [ ] Run **02-css-duplication-audit.md** to find duplicate selectors
- [ ] Prioritize optimization of top 10 largest files
- [ ] Create base class extraction plan
- [ ] Set file size targets for each category

---

**Audit Status:** ✅ Complete  
**Next Audit:** 02 - CSS Duplication Audit
```

---

## Success Criteria

- [ ] All CSS files cataloged with line counts
- [ ] File size distribution analyzed
- [ ] Baseline metrics calculated
- [ ] Top 20 largest files identified
- [ ] Optimization targets prioritized
- [ ] Report saved to `/reports/2026-03/memory-optimization/01-css-inventory.md`

---

## Related Audits

- **Next:** [02 - CSS Duplication Audit](./02-css-duplication-audit.md)
- **Orchestrator:** [00 - ORCHESTRATOR](./00-ORCHESTRATOR.md)

---

**Audit Status:** ⏸️ Ready to Run  
**Estimated Time:** 30-45 minutes  
**Output:** CSS inventory report with baseline metrics
