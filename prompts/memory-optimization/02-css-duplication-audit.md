# CSS Duplication Audit

**Audit ID:** 02  
**Phase:** Phase 1 - Foundation Analysis  
**Purpose:** Identify duplicate CSS selectors and repeated patterns  
**Prerequisites:** 
- Read [/guidelines/development/css-memory-optimization.md](/guidelines/development/css-memory-optimization.md)
- Complete **01-css-inventory-audit.md**

---

## Objective

Find and document all duplicate CSS selectors, repeated patterns, and redundant code to calculate potential memory savings through deduplication.

---

## Instructions

### Step 1: Find Duplicate Selectors

**Extract all CSS selectors and count occurrences:**

```bash
# Find all selectors and count duplicates
grep -rh "^\." src/styles/ | cut -d' ' -f1 | cut -d'{' -f1 | sort | uniq -c | sort -rn > /tmp/duplicate-selectors.txt

# Show selectors appearing more than once
awk '$1 > 1' /tmp/duplicate-selectors.txt | head -50

# Count total duplicate selectors
awk '$1 > 1' /tmp/duplicate-selectors.txt | wc -l
```

**Document top 30 most duplicated selectors:**

| Rank | Selector | Occurrences | Files | Pattern Type | Est. Savings |
|------|----------|-------------|-------|--------------|--------------|
| 1 | .component__icon | ? | ? files | Icon pattern | ? lines |
| 2 | .component__title | ? | ? files | Heading pattern | ? lines |
| 3 | .component__description | ? | ? files | Text pattern | ? lines |
| ... | | | | | |
| 30 | | | | | |

### Step 2: Analyze Pattern Categories

**Group duplicates by pattern type:**

**Icon Patterns:**
```bash
# Find icon-related duplicate selectors
grep -rh "^\." src/styles/ | grep "__icon" | cut -d' ' -f1 | cut -d'{' -f1 | sort | uniq -c | sort -rn
```

**Card Patterns:**
```bash
# Find card-related duplicate selectors
grep -rh "^\." src/styles/ | grep "card" | cut -d' ' -f1 | cut -d'{' -f1 | sort | uniq -c | sort -rn
```

**Heading Patterns:**
```bash
# Find heading-related duplicate selectors
grep -rh "^\." src/styles/ | grep -E "(title|heading)" | cut -d' ' -f1 | cut -d'{' -f1 | sort | uniq -c | sort -rn
```

**Button Patterns:**
```bash
# Find button-related duplicate selectors
grep -rh "^\." src/styles/ | grep -E "(button|cta)" | cut -d' ' -f1 | cut -d'{' -f1 | sort | uniq -c | sort -rn
```

**Grid/Flex Patterns:**
```bash
# Find layout-related duplicate selectors
grep -rh "^\." src/styles/ | grep -E "(grid|flex)" | cut -d' ' -f1 | cut -d'{' -f1 | sort | uniq -c | sort -rn
```

**Document pattern distribution:**

| Pattern Category | Unique Selectors | Duplicate Occurrences | Total Lines | Base Class Candidate |
|------------------|------------------|----------------------|-------------|---------------------|
| Icon patterns | ? | ? | ? | icon-base.css |
| Card patterns | ? | ? | ? | card-base.css |
| Heading patterns | ? | ? | ? | heading-base.css |
| Button patterns | ? | ? | ? | button-base.css |
| Grid/Flex patterns | ? | ? | ? | grid-base.css, flex-base.css |
| Spacing patterns | ? | ? | ? | spacing-base.css |
| Typography patterns | ? | ? | ? | typography-base.css |

### Step 3: Extract Example Patterns

**For each pattern category, extract actual CSS code:**

**Example: Icon Pattern**

```bash
# Find all icon definitions
grep -A 5 "__icon {" src/styles/**/*.css | head -30
```

**Document common icon pattern:**

```css
/* Pattern found in 30+ files */
.component-name__icon {
  width: 48px;
  height: 48px;
  color: var(--primary);
  flex-shrink: 0;
}

/* Variations found: */
- width/height: 32px, 40px, 48px, 64px, 80px
- color: var(--primary), var(--secondary), var(--muted-foreground)
```

**Example: Card Pattern**

```bash
# Find all card definitions
grep -A 10 "^\..*card {" src/styles/**/*.css | head -50
```

**Document common card pattern:**

```css
/* Pattern found in 25+ files */
.component-card {
  display: flex;
  flex-direction: column;
  padding: var(--spacing-6);
  gap: var(--spacing-4);
  background: var(--background);
  border-radius: var(--radius-lg);
  border: 1px solid var(--border);
  transition: all 0.2s ease;
}

/* Variations found: */
- padding: var(--spacing-4), var(--spacing-6), var(--spacing-8)
- gap: var(--spacing-2), var(--spacing-3), var(--spacing-4)
- border-radius: var(--radius), var(--radius-lg), var(--radius-xl)
```

### Step 4: Calculate Potential Savings

**For each pattern, calculate savings:**

**Icon Pattern Savings:**
```
Current state:
- 30 files × 15 lines = 450 lines

Optimized state:
- 1 base file (icon-base.css) = 80 lines
- 30 files × 2 lines (import only) = 60 lines
- Total = 140 lines

Savings: 450 - 140 = 310 lines (69% reduction)
```

**Card Pattern Savings:**
```
Current state:
- 25 files × 20 lines = 500 lines

Optimized state:
- 1 base file (card-base.css) = 120 lines
- 25 files × 3 lines (unique styles) = 75 lines
- Total = 195 lines

Savings: 500 - 195 = 305 lines (61% reduction)
```

**Document total potential savings:**

| Pattern | Files | Current Lines | Optimized Lines | Savings | % Reduction |
|---------|-------|---------------|-----------------|---------|-------------|
| Icon | 30 | 450 | 140 | 310 | 69% |
| Card | 25 | 500 | 195 | 305 | 61% |
| Heading | 40 | 600 | 200 | 400 | 67% |
| Button | 20 | 400 | 150 | 250 | 62% |
| Grid/Flex | 35 | 525 | 180 | 345 | 66% |
| **TOTAL** | **150** | **2,475** | **865** | **1,610** | **65%** |

### Step 5: Identify Extraction Candidates

**Prioritize base class extraction by impact:**

**High Priority (>300 lines savings):**
1. Heading patterns - 400 lines savings
2. Grid/Flex patterns - 345 lines savings
3. Icon patterns - 310 lines savings
4. Card patterns - 305 lines savings

**Medium Priority (200-300 lines savings):**
5. Button patterns - 250 lines savings
6. Spacing patterns - ? lines savings
7. Typography patterns - ? lines savings

**Low Priority (<200 lines savings):**
8. Other patterns - ? lines savings

### Step 6: Create Base Class Plan

**For each high-priority pattern, plan base class creation:**

**Example: Icon Base Class**

```markdown
## Icon Base Class Plan

**File:** `/src/styles/base/icon-base.css`

**Base class:**
```css
.icon-base {
  width: 48px;
  height: 48px;
  color: var(--primary);
  flex-shrink: 0;
  display: inline-flex;
  align-items: center;
  justify-content: center;
}

/* Size modifiers */
.icon-base--small { width: 32px; height: 32px; }
.icon-base--medium { width: 40px; height: 40px; }
.icon-base--large { width: 64px; height: 64px; }
.icon-base--xl { width: 80px; height: 80px; }

/* Color modifiers */
.icon-base--secondary { color: var(--secondary); }
.icon-base--muted { color: var(--muted-foreground); }

/* Shape modifiers */
.icon-base--circle {
  border-radius: var(--radius-full);
  background: var(--muted);
  padding: var(--spacing-2);
}
```

**Files to update:** 30 files
**Usage example:**
```tsx
<Icon className="icon-base icon-base--large" />
```

**Estimated effort:** 2-3 hours
**Estimated savings:** 310 lines (69% reduction)
```

---

## Report Template

**Save findings to:** `/reports/2026-03/memory-optimization/02-css-duplication.md`

```markdown
# CSS Duplication Audit Report

**Date:** March 5, 2026  
**Audit:** 02 - CSS Duplication  
**Auditor:** [Your Name]

---

## Executive Summary

- **Total Duplicate Selectors:** ? selectors
- **Total Duplicate Occurrences:** ? occurrences
- **Estimated Duplicate Lines:** ? lines
- **Potential Savings:** ?% reduction (~? lines)

---

## Top 30 Most Duplicated Selectors

| Rank | Selector | Occurrences | Pattern Type | Est. Savings |
|------|----------|-------------|--------------|--------------|
| 1 | .component__icon | 30 | Icon | 310 lines |
| 2 | .component__title | 40 | Heading | 400 lines |
| 3 | .service-card | 25 | Card | 305 lines |
| ... | | | | |
| 30 | | | | |

**Total Estimated Savings:** ~? lines

---

## Pattern Analysis

### Icon Patterns

**Duplicate Count:** 30 files  
**Common Pattern:**
```css
.component__icon {
  width: 48px;
  height: 48px;
  color: var(--primary);
}
```

**Variations:**
- Size: 32px, 40px, 48px, 64px, 80px
- Color: primary, secondary, muted

**Base Class Candidate:** `icon-base.css`  
**Estimated Savings:** 310 lines (69% reduction)

### Card Patterns

**Duplicate Count:** 25 files  
**Common Pattern:**
```css
.component-card {
  display: flex;
  flex-direction: column;
  padding: var(--spacing-6);
  background: var(--background);
  border-radius: var(--radius-lg);
}
```

**Base Class Candidate:** `card-base.css`  
**Estimated Savings:** 305 lines (61% reduction)

### Heading Patterns

**Duplicate Count:** 40 files  
**Base Class Candidate:** `heading-base.css`  
**Estimated Savings:** 400 lines (67% reduction)

### Button Patterns

**Duplicate Count:** 20 files  
**Base Class Candidate:** `button-base.css`  
**Estimated Savings:** 250 lines (62% reduction)

### Grid/Flex Patterns

**Duplicate Count:** 35 files  
**Base Class Candidate:** `grid-base.css`, `flex-base.css`  
**Estimated Savings:** 345 lines (66% reduction)

---

## Potential Savings Summary

| Pattern Category | Files | Current Lines | Optimized Lines | Savings | % Reduction |
|------------------|-------|---------------|-----------------|---------|-------------|
| Icon patterns | 30 | 450 | 140 | 310 | 69% |
| Card patterns | 25 | 500 | 195 | 305 | 61% |
| Heading patterns | 40 | 600 | 200 | 400 | 67% |
| Button patterns | 20 | 400 | 150 | 250 | 62% |
| Grid/Flex patterns | 35 | 525 | 180 | 345 | 66% |
| Spacing patterns | ? | ? | ? | ? | ?% |
| Typography patterns | ? | ? | ? | ? | ?% |
| **TOTAL** | **?** | **?** | **?** | **~1,610** | **~65%** |

---

## Base Class Extraction Plan

### Priority 1: High Impact (>300 lines savings)

1. **heading-base.css** - 400 lines savings
   - Extract common heading patterns
   - Create size/weight modifiers
   - Update 40 files

2. **grid-base.css, flex-base.css** - 345 lines savings
   - Extract grid/flex layouts
   - Create responsive patterns
   - Update 35 files

3. **icon-base.css** - 310 lines savings
   - Extract icon sizing/colors
   - Create size/color modifiers
   - Update 30 files

4. **card-base.css** - 305 lines savings
   - Extract card structure
   - Create style modifiers
   - Update 25 files

### Priority 2: Medium Impact (200-300 lines savings)

5. **button-base.css** - 250 lines savings
6. **spacing-base.css** - ? lines savings
7. **typography-base.css** - ? lines savings

---

## Key Findings

1. **65% of CSS is duplicated** across files
2. **Icon patterns** appear in 30+ files (310 lines savings potential)
3. **Heading patterns** appear in 40+ files (400 lines savings potential)
4. **Card patterns** appear in 25+ files (305 lines savings potential)
5. **Total optimization potential:** ~1,610 lines (65% reduction)

---

## Recommendations

1. **Immediate:** Create base class files for high-priority patterns
2. **Phase 1:** Extract icon, card, heading base classes (1,015 lines savings)
3. **Phase 2:** Extract button, grid/flex base classes (595 lines savings)
4. **Phase 3:** Extract spacing, typography base classes

---

## Next Steps

- [ ] Run **04-base-class-extraction-audit.md** to create base classes
- [ ] Create `/src/styles/base/` directory
- [ ] Extract high-priority base classes
- [ ] Update components to use base classes
- [ ] Verify visual consistency

---

**Audit Status:** ✅ Complete  
**Next Audit:** 04 - Base Class Extraction Audit (after completing Audit 03)
```

---

## Success Criteria

- [ ] All duplicate selectors identified and counted
- [ ] Pattern categories analyzed (icon, card, heading, button, grid/flex)
- [ ] Potential savings calculated for each pattern
- [ ] Base class extraction plan created
- [ ] High-priority patterns prioritized
- [ ] Report saved to `/reports/2026-03/memory-optimization/02-css-duplication.md`

---

## Related Audits

- **Previous:** [01 - CSS Inventory Audit](./01-css-inventory-audit.md)
- **Next:** [03 - CSS Specificity Audit](./03-css-specificity-audit.md)
- **Related:** [04 - Base Class Extraction Audit](./04-base-class-extraction-audit.md)
- **Orchestrator:** [00 - ORCHESTRATOR](./00-ORCHESTRATOR.md)

---

**Audit Status:** ⏸️ Ready to Run  
**Estimated Time:** 45-60 minutes  
**Output:** Duplicate selector analysis with extraction plan
