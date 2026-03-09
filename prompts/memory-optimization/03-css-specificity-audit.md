# CSS Specificity Audit

**Audit ID:** 03  
**Phase:** Phase 1 - Foundation Analysis  
**Purpose:** Identify high-specificity selectors and cascade dependencies  
**Prerequisites:** 
- Read [/guidelines/development/css-memory-optimization.md](/guidelines/development/css-memory-optimization.md)
- Complete **01-css-inventory-audit.md**

---

## Objective

Find and document high-specificity CSS selectors, over-nested selectors, and cascade dependencies that impact performance and memory usage.

---

## Instructions

### Step 1: Find High-Specificity Selectors

**Search for selectors with multiple combinators:**

```bash
# Find deeply nested selectors (3+ levels)
grep -rn "^\." src/styles/ | grep -E "\s+\.\S+\s+\.\S+\s+\.\S+" | head -50

# Find descendant combinators
grep -rn "^\." src/styles/ | grep -E "\.\S+\s+\.\S+" | wc -l

# Find child combinators
grep -rn ">" src/styles/ | wc -l

# Find ID selectors (should be zero!)
grep -rn "^#" src/styles/ | wc -l
```

**Document findings:**

| Specificity Level | Count | Example | Impact |
|-------------------|-------|---------|--------|
| ID selectors (0-1-0) | ? | `#component` | CRITICAL ❌ |
| 4+ classes (0-0-4+) | ? | `.a .b .c .d` | HIGH ⚠️ |
| 3 classes (0-0-3) | ? | `.a .b .c` | MEDIUM ⚠️ |
| 2 classes (0-0-2) | ? | `.block__element` | GOOD ✅ |
| 1 class (0-0-1) | ? | `.block` | BEST ✅ |

### Step 2: Analyze Nesting Patterns

**Find over-nested selectors:**

```bash
# Find selectors with 4+ levels of nesting
grep -rn "^\." src/styles/ | grep -E "\s+\.\S+\s+\.\S+\s+\.\S+\s+\.\S+" > /tmp/over-nested.txt
cat /tmp/over-nested.txt | wc -l

# Show examples
head -20 /tmp/over-nested.txt
```

**Document nesting issues:**

| File | Selector | Specificity | Issue | Recommendation |
|------|----------|-------------|-------|----------------|
| /src/styles/templates/service.css | `.section .container .card .header .title` | 0-0-5 | Over-nested | Use `.card__title` |
| ? | ? | ? | ? | ? |

### Step 3: Find Cascade Dependencies

**Identify selectors that depend on parent structure:**

```bash
# Find selectors with parent dependencies
grep -rn "^\." src/styles/ | grep -E "^[^:]+:\s*\.\S+\s+\.\S+" | head -30
```

**Example cascade dependencies:**

```css
/* ❌ BAD - Depends on parent structure */
.section .card .title {
  font-size: var(--text-h3);
}

/* ✅ GOOD - Self-contained */
.card__title {
  font-size: var(--text-h3);
}
```

### Step 4: Calculate Specificity Scores

**Use this specificity calculator for top 20 worst selectors:**

```
Specificity calculation:
- Style attribute: 1-0-0-0
- ID: 0-1-0-0
- Class/attribute/pseudo-class: 0-0-1-0
- Element/pseudo-element: 0-0-0-1
```

**Document top 20 highest specificity selectors:**

| Rank | File | Selector | Specificity | Refactor Target |
|------|------|----------|-------------|-----------------|
| 1 | ? | `.a .b .c .d .e` | 0-0-5-0 | `.component__element` (0-0-1-0) |
| 2 | ? | `.a .b .c .d` | 0-0-4-0 | `.component--modifier` (0-0-1-0) |
| ... | | | | |
| 20 | | | | |

### Step 5: Identify Refactoring Opportunities

**For each high-specificity selector, plan refactoring:**

**Example:**

```markdown
## High-Specificity Refactoring Plan

### Issue 1: `.section .container .service-card .header .title`

**Current:**
- File: `/src/styles/templates/service-template.css`
- Specificity: 0-0-5-0
- Lines: 5 lines

**Refactored:**
```css
/* Replace with BEM */
.service-card__title {
  font-family: var(--font-primary);
  font-size: var(--text-h4);
  margin: 0;
}
```

**New Specificity:** 0-0-1-0 (80% reduction)
**Effort:** Low (5 min)
```

---

## Report Template

**Save findings to:** `/reports/2026-03/memory-optimization/03-css-specificity.md`

```markdown
# CSS Specificity Audit Report

**Date:** March 5, 2026  
**Audit:** 03 - CSS Specificity  
**Auditor:** [Your Name]

---

## Executive Summary

- **High-Specificity Selectors (4+ classes):** ? selectors
- **Medium-Specificity Selectors (3 classes):** ? selectors
- **ID Selectors Found:** ? (should be 0!)
- **Optimization Potential:** ?% reduction in specificity
- **Performance Impact:** High (slower CSS matching)

---

## Specificity Distribution

| Specificity Level | Count | % of Total | Status |
|-------------------|-------|------------|--------|
| ID selectors (0-1-0) | 0 | 0% | ✅ GOOD |
| 4+ classes (0-0-4+) | ? | ?% | ❌ CRITICAL |
| 3 classes (0-0-3) | ? | ?% | ⚠️ NEEDS FIX |
| 2 classes (0-0-2) | ? | ?% | ✅ GOOD (BEM) |
| 1 class (0-0-1) | ? | ?% | ✅ BEST |

---

## Top 20 Highest Specificity Selectors

| Rank | File | Selector | Specificity | Impact |
|------|------|----------|-------------|--------|
| 1 | `/src/styles/templates/service.css` | `.section .container .card .header .title` | 0-0-5-0 | CRITICAL |
| 2 | ? | ? | ? | ? |
| ... | | | | |
| 20 | | | | |

---

## Cascade Dependencies Found

**Selectors depending on parent structure:**

1. `.section .card .title` (15 occurrences)
   - **Issue:** Requires specific parent structure
   - **Fix:** Use `.card__title` instead

2. `.container .grid .item` (12 occurrences)
   - **Issue:** Depends on container hierarchy
   - **Fix:** Use `.grid__item` instead

---

## Refactoring Plan

### Critical Priority (Specificity 0-0-4+)

**Selector 1:** `.section .container .service-card .header .title`
- **Current Specificity:** 0-0-5-0
- **Target Specificity:** 0-0-1-0 (.service-card__title)
- **Files to Update:** 1
- **Effort:** Low (5 min)

**Selector 2:** `.template .section .card .content .description`
- **Current Specificity:** 0-0-5-0
- **Target Specificity:** 0-0-1-0 (.card__description)
- **Files to Update:** 1
- **Effort:** Low (5 min)

### High Priority (Specificity 0-0-3)

**Total selectors:** ?
**Target:** Reduce to 0-0-1 or 0-0-2
**Estimated effort:** 2-3 hours

---

## Key Findings

1. **No ID selectors found** ✅ (Good!)
2. **? selectors with specificity 4+** ❌ (Critical issue)
3. **? selectors with specificity 3** ⚠️ (Needs improvement)
4. **Most issues in:** template/ directory
5. **Root cause:** Over-nesting instead of BEM

---

## Performance Impact

**Before optimization:**
- Average specificity: 0-0-3-0
- CSS matching speed: Slower (cascade lookups)
- Override difficulty: High (specificity wars)

**After optimization:**
- Target specificity: 0-0-1-0 to 0-0-2-0
- CSS matching speed: Faster (direct class matches)
- Override difficulty: Low (simple class names)

---

## Recommendations

1. **Immediate:** Refactor selectors with specificity 4+ (critical)
2. **Short-term:** Convert all to BEM (specificity ≤ 2)
3. **Long-term:** Enforce BEM in code reviews
4. **Tooling:** Add CSS specificity linter

---

## Next Steps

- [ ] Refactor critical high-specificity selectors
- [ ] Convert nested selectors to BEM
- [ ] Run **04-base-class-extraction-audit.md**
- [ ] Add specificity checking to CI/CD

---

**Audit Status:** ✅ Complete  
**Next Audit:** 04 - Base Class Extraction Audit
```

---

## Success Criteria

- [ ] High-specificity selectors identified (4+ classes)
- [ ] Cascade dependencies documented
- [ ] Refactoring plan created
- [ ] No ID selectors found (or documented for removal)
- [ ] Target specificity defined (0-0-1 to 0-0-2)
- [ ] Report saved to `/reports/2026-03/memory-optimization/03-css-specificity.md`

---

## Related Audits

- **Previous:** [02 - CSS Duplication Audit](./02-css-duplication-audit.md)
- **Next:** [04 - Base Class Extraction Audit](./04-base-class-extraction-audit.md)
- **Orchestrator:** [00 - ORCHESTRATOR](./00-ORCHESTRATOR.md)

---

**Audit Status:** ⏸️ Ready to Run  
**Estimated Time:** 30-45 minutes  
**Output:** Specificity analysis with refactoring plan
