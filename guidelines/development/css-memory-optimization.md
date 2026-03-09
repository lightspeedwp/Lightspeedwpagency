# CSS Memory Optimization Guide

**Last Updated:** March 5, 2026  
**Version:** 1.0  
**Status:** Active

## Purpose

This document provides detailed strategies for optimizing CSS memory usage, reducing bundle size, and eliminating duplicate code. These techniques are critical for the LSX Design prototype memory optimization effort.

---

## Table of Contents

1. [Overview](#overview)
2. [Memory Optimization Principles](#memory-optimization-principles)
3. [Deduplication Strategies](#deduplication-strategies)
4. [CSS Architecture Patterns](#css-architecture-patterns)
5. [Base Class Extraction](#base-class-extraction)
6. [Specificity Minimization](#specificity-minimization)
7. [Media Query Consolidation](#media-query-consolidation)
8. [CSS Variable Optimization](#css-variable-optimization)
9. [Performance Metrics](#performance-metrics)
10. [Audit Process](#audit-process)

---

## Overview

### Why CSS Memory Optimization Matters

**Current State (March 5, 2026):**
- 130+ template files with CSS
- ~24,000 lines of CSS saved through pattern extraction
- Potential for further 30-40% reduction through CSS optimization

**Benefits of CSS optimization:**
1. **Reduced memory usage** - Smaller CSS bundles load faster
2. **Faster parsing** - Less CSS for browser to parse
3. **Better caching** - Shared CSS files cached once
4. **Easier maintenance** - Less duplicate code to update
5. **Improved performance** - Faster initial render

### Memory Impact by File Type

| File Type | Avg Size | Count | Total Impact | Optimization Potential |
|-----------|----------|-------|--------------|----------------------|
| Template CSS | 300-800 lines | 130+ | HIGH | 40-50% reduction |
| Component CSS | 100-300 lines | 80+ | MEDIUM | 30-40% reduction |
| Pattern CSS | 50-150 lines | 28+ | LOW | 20-30% reduction |
| Global CSS | 500+ lines | 5 | HIGH | 10-20% reduction |

---

## Memory Optimization Principles

### 1. **DRY (Don't Repeat Yourself)**

**Problem:**
```css
/* service-template.css */
.service-template__icon {
  width: 48px;
  height: 48px;
  color: var(--primary);
}

/* portfolio-template.css */
.portfolio-template__icon {
  width: 48px;
  height: 48px;
  color: var(--primary);
}

/* about-template.css */
.about-template__icon {
  width: 48px;
  height: 48px;
  color: var(--primary);
}
```

**Solution:**
```css
/* base/icon-base.css */
.icon-base {
  width: 48px;
  height: 48px;
  color: var(--primary);
}

/* All templates use base class */
<div className="icon-base component__icon">
```

**Savings:** 66% reduction (3 definitions → 1 base class)

### 2. **Extract Common Patterns**

**Problem:**
```css
/* Repeated card styling across 30+ files */
.service-card {
  padding: var(--spacing-6);
  background: var(--background);
  border-radius: var(--radius-lg);
  border: 1px solid var(--border);
}

.portfolio-card {
  padding: var(--spacing-6);
  background: var(--background);
  border-radius: var(--radius-lg);
  border: 1px solid var(--border);
}

/* Repeated 30+ times = ~450 lines */
```

**Solution:**
```css
/* base/card-base.css */
.card-base {
  padding: var(--spacing-6);
  background: var(--background);
  border-radius: var(--radius-lg);
  border: 1px solid var(--border);
}

/* Extend with specific styles */
.service-card { /* Only unique styles */ }
.portfolio-card { /* Only unique styles */ }
```

**Savings:** ~400 lines eliminated across 30 files

### 3. **Minimize Specificity**

**Problem:**
```css
/* High specificity = larger bundle, slower matching */
.template .section .container .card .header .title {
  font-size: var(--text-h3);
}
```

**Solution:**
```css
/* Low specificity = smaller bundle, faster matching */
.card__title {
  font-size: var(--text-h3);
}
```

**Savings:** Faster CSS parsing, reduced specificity conflicts

### 4. **Use CSS Variables**

**Problem:**
```css
/* Repeated values across files */
.card-1 { padding: 24px; }
.card-2 { padding: 24px; }
.card-3 { padding: 24px; }
```

**Solution:**
```css
/* Single variable definition */
.card-1 { padding: var(--spacing-6); }
.card-2 { padding: var(--spacing-6); }
.card-3 { padding: var(--spacing-6); }
```

**Savings:** ~30% reduction in repeated values

### 5. **Consolidate Media Queries**

**Problem:**
```css
/* Scattered media queries */
.component-1 {
  padding: 24px;
}

@media (max-width: 768px) {
  .component-1 { padding: 16px; }
}

.component-2 {
  margin: 32px;
}

@media (max-width: 768px) {
  .component-2 { margin: 24px; }
}

/* Repeated @media = larger bundle */
```

**Solution:**
```css
/* Components defined first */
.component-1 { padding: 24px; }
.component-2 { margin: 32px; }

/* Consolidated media query */
@media (max-width: 768px) {
  .component-1 { padding: 16px; }
  .component-2 { margin: 24px; }
}
```

**Savings:** ~20% reduction in media query overhead

---

## Deduplication Strategies

### Strategy 1: Identify Duplicate Selectors

**Audit Process:**

```bash
# Find duplicate CSS selectors across files
grep -r "\.component-name {" src/styles/ | sort | uniq -d

# Count occurrences
grep -r "\.card-base {" src/styles/ | wc -l
```

**Example Findings:**

```txt
Duplicate selectors found:
- .service-card__icon (30 occurrences across 30 files)
- .feature-list__item (25 occurrences across 25 files)
- .stats-grid__number (20 occurrences across 20 files)
- .hero-section__title (40 occurrences across 40 files)

Total duplicate CSS: ~1,200 lines
```

**Solution:**
1. Extract to base classes in `/src/styles/base/`
2. Import base classes in templates
3. Override with specific styles only

### Strategy 2: Extract Base Classes

**Create modular base files:**

```
src/styles/base/
├── card-base.css       # Shared card styles
├── icon-base.css       # Shared icon styles
├── heading-base.css    # Shared heading styles
├── button-base.css     # Shared button styles
└── grid-base.css       # Shared grid styles
```

**Example: Card Base**

```css
/**
 * Card Base Styles
 * Shared across all card components
 */

.card-base {
  /* Layout */
  display: flex;
  flex-direction: column;
  
  /* Spacing */
  padding: var(--spacing-6);
  gap: var(--spacing-4);
  
  /* Colors */
  background: var(--background);
  color: var(--foreground);
  
  /* Borders */
  border: 1px solid var(--border);
  border-radius: var(--radius-lg);
  
  /* Transitions */
  transition: all 0.2s ease;
}

.card-base:hover {
  transform: translateY(-2px);
  box-shadow: var(--shadow-lg);
}

/* Card header pattern */
.card-base__header {
  display: flex;
  align-items: center;
  gap: var(--spacing-3);
}

/* Card icon pattern */
.card-base__icon {
  width: 48px;
  height: 48px;
  color: var(--primary);
}

/* Card title pattern */
.card-base__title {
  font-family: var(--font-primary);
  font-size: var(--text-h4);
  font-weight: var(--font-weight-semibold);
  color: var(--foreground);
  margin: 0;
}

/* Card content pattern */
.card-base__content {
  font-family: var(--font-primary);
  font-size: var(--text-base);
  color: var(--muted-foreground);
  line-height: var(--line-height-relaxed);
}
```

**Usage in Templates:**

```tsx
// Import base styles
import '@/styles/base/card-base.css';
import '@/styles/templates/service-template.css';

// Use base classes + specific classes
<div className="card-base service-card">
  <div className="card-base__header service-card__header">
    <Icon className="card-base__icon" />
    <h3 className="card-base__title">Service Title</h3>
  </div>
  <div className="card-base__content">
    Service description...
  </div>
</div>
```

**Template CSS (only unique styles):**

```css
/* service-template.css - ONLY unique styles */

.service-card {
  /* Unique: Service-specific gradient */
  background: linear-gradient(135deg, var(--primary), var(--secondary));
}

.service-card__header {
  /* Unique: Larger gap for services */
  gap: var(--spacing-4);
}

/* Base styles inherited from card-base.css */
```

**Savings:** 60-70% reduction in template CSS

### Strategy 3: Shared Modifier Classes

**Problem:**
```css
/* Repeated modifier styles */
.service-card--primary { background: var(--primary); }
.portfolio-card--primary { background: var(--primary); }
.feature-card--primary { background: var(--primary); }
```

**Solution:**
```css
/* Shared modifier */
.card--primary {
  background: var(--primary);
  color: var(--primary-foreground);
}

/* All cards use shared modifier */
<div className="card-base service-card card--primary">
```

**Savings:** 70% reduction in modifier definitions

---

## CSS Architecture Patterns

### Pattern 1: Base + Extend

**Architecture:**

```
Base Class (base/card-base.css)
  ↓
Template Class (templates/service-template.css)
  ↓
Modifier Class (base/modifiers.css)
```

**Implementation:**

```css
/* base/card-base.css */
.card-base {
  padding: var(--spacing-6);
  background: var(--background);
  border-radius: var(--radius-lg);
}

/* templates/service-template.css */
.service-card {
  /* Extends card-base */
  /* Only add unique styles */
  border-top: 4px solid var(--primary);
}

/* base/modifiers.css */
.card--primary {
  background: var(--primary);
  color: var(--primary-foreground);
}
```

**Usage:**
```tsx
<div className="card-base service-card card--primary">
```

### Pattern 2: Composition

**Compose multiple base classes:**

```tsx
<div className="card-base spacing-base responsive-base">
  <div className="flex-base gap-base">
    <Icon className="icon-base" />
    <h3 className="heading-base">Title</h3>
  </div>
</div>
```

**CSS:**
```css
/* base/spacing-base.css */
.spacing-base { padding: var(--spacing-6); }

/* base/responsive-base.css */
.responsive-base {
  @media (max-width: 768px) {
    padding: var(--spacing-4);
  }
}

/* base/flex-base.css */
.flex-base {
  display: flex;
  align-items: center;
}

/* base/gap-base.css */
.gap-base { gap: var(--spacing-4); }
```

**Savings:** Reusable utility-style base classes

### Pattern 3: Layer Architecture

**CSS organized in layers:**

```
Layer 1: Reset & Normalize
Layer 2: CSS Variables (theme-base.css)
Layer 3: Base Classes (base/*.css)
Layer 4: Component Classes (components/*.css)
Layer 5: Template Classes (templates/*.css)
Layer 6: Utility Classes (utilities.css)
```

**Import order:**

```css
/* global.css */
@import './reset.css';           /* Layer 1 */
@import './theme-base.css';      /* Layer 2 */
@import './base/card-base.css';  /* Layer 3 */
@import './components/*.css';    /* Layer 4 */
@import './templates/*.css';     /* Layer 5 */
@import './utilities.css';       /* Layer 6 */
```

---

## Base Class Extraction

### Extraction Process

**Step 1: Identify Common Patterns**

```bash
# Find repeated CSS rules
grep -A 10 "\..*__icon {" src/styles/**/*.css > icon-patterns.txt
grep -A 10 "\..*__title {" src/styles/**/*.css > title-patterns.txt
grep -A 10 "\..*__content {" src/styles/**/*.css > content-patterns.txt
```

**Step 2: Analyze Commonality**

```txt
Icon Pattern Analysis:
- 30 files use: width: 48px; height: 48px;
- 25 files use: color: var(--primary);
- 20 files use: border-radius: var(--radius-full);

Common pattern:
.icon-base {
  width: 48px;
  height: 48px;
  color: var(--primary);
}

Variations:
.icon-base--large { width: 64px; height: 64px; }
.icon-base--small { width: 32px; height: 32px; }
```

**Step 3: Create Base Class**

```css
/* base/icon-base.css */

/**
 * Icon Base Styles
 * Shared across all icon components
 */

.icon-base {
  /* Size */
  width: 48px;
  height: 48px;
  
  /* Color */
  color: var(--primary);
  
  /* Shape */
  display: inline-flex;
  align-items: center;
  justify-content: center;
  
  /* Accessibility */
  flex-shrink: 0;
}

/* Size modifiers */
.icon-base--small {
  width: 32px;
  height: 32px;
}

.icon-base--large {
  width: 64px;
  height: 64px;
}

.icon-base--xl {
  width: 80px;
  height: 80px;
}

/* Color modifiers */
.icon-base--secondary {
  color: var(--secondary);
}

.icon-base--muted {
  color: var(--muted-foreground);
}

/* Shape modifiers */
.icon-base--circle {
  border-radius: var(--radius-full);
  background: var(--muted);
  padding: var(--spacing-2);
}
```

**Step 4: Update Templates**

```tsx
// BEFORE (duplicate CSS in every template)
<Icon className="service-template__icon" />

/* service-template.css */
.service-template__icon {
  width: 48px;
  height: 48px;
  color: var(--primary);
}

// AFTER (use base class)
<Icon className="icon-base service-template__icon" />

/* service-template.css - only unique styles */
.service-template__icon {
  /* Only if service icons need unique styling */
}
```

**Step 5: Measure Savings**

```txt
Before:
- 30 files × 15 lines = 450 lines

After:
- 1 base file × 80 lines = 80 lines
- Savings: 370 lines (82% reduction)
```

### Common Base Classes to Extract

**1. Icon Base** (`base/icon-base.css`)
- Icon sizing
- Icon colors
- Icon shapes
- Icon backgrounds

**2. Card Base** (`base/card-base.css`)
- Card container
- Card header
- Card content
- Card footer
- Card hover states

**3. Heading Base** (`base/heading-base.css`)
- Heading typography
- Heading spacing
- Heading colors
- Heading alignment

**4. Button Base** (`base/button-base.css`)
- Button sizing
- Button colors
- Button states
- Button variants

**5. Grid Base** (`base/grid-base.css`)
- Grid layouts
- Grid gaps
- Grid responsive behavior

**6. Flex Base** (`base/flex-base.css`)
- Flexbox layouts
- Flex alignment
- Flex gaps

**7. Spacing Base** (`base/spacing-base.css`)
- Padding patterns
- Margin patterns
- Gap patterns

**8. Typography Base** (`base/typography-base.css`)
- Font families
- Font sizes
- Font weights
- Line heights

---

## Specificity Minimization

### Why Low Specificity Matters

**High specificity:**
- Harder to override
- Larger CSS bundle
- Slower CSS matching
- More memory usage

**Low specificity:**
- Easier to override
- Smaller CSS bundle
- Faster CSS matching
- Less memory usage

### Specificity Scoring

```css
/* Specificity: 0-0-1 (1 class) - GOOD */
.component { }

/* Specificity: 0-0-2 (2 classes) - OK */
.component__element { }

/* Specificity: 0-0-3 (3 classes) - AVOID */
.component__element--modifier { }

/* Specificity: 0-0-4 (4 classes) - BAD */
.section .component__element--modifier { }

/* Specificity: 0-1-0 (1 ID) - NEVER USE */
#component { }
```

### Specificity Guidelines

**Target: 0-0-1 to 0-0-2**

```css
/* ✅ BEST - Single class */
.component {
  padding: var(--spacing-6);
}

/* ✅ GOOD - BEM element */
.component__element {
  color: var(--foreground);
}

/* ⚠️ OK - BEM modifier (use sparingly) */
.component--modifier {
  background: var(--primary);
}

/* ❌ BAD - Nested selectors */
.section .container .component {
  /* Specificity too high */
}

/* ❌ VERY BAD - ID selectors */
#component {
  /* Never use IDs for styling */
}
```

### Reducing Specificity

**BEFORE (high specificity):**

```css
/* Specificity: 0-0-6 */
.template .section .container .card .header .title {
  font-size: var(--text-h3);
}
```

**AFTER (low specificity):**

```css
/* Specificity: 0-0-1 */
.card__title {
  font-size: var(--text-h3);
}
```

**Savings:**
- 83% reduction in selector length
- Faster CSS parsing
- Smaller CSS bundle

---

## Media Query Consolidation

### Problem: Scattered Media Queries

```css
/* component-1.css */
.component-1 { padding: 24px; }

@media (max-width: 768px) {
  .component-1 { padding: 16px; }
}

.component-1__title { font-size: 32px; }

@media (max-width: 768px) {
  .component-1__title { font-size: 24px; }
}

/* Total: 2 @media blocks */
```

**Repeated across 100 files = 200 media query blocks**

### Solution: Consolidated Media Queries

```css
/* component-1.css */

/* Desktop styles first */
.component-1 {
  padding: 24px;
}

.component-1__title {
  font-size: 32px;
}

/* Consolidated media query at end */
@media (max-width: 768px) {
  .component-1 {
    padding: 16px;
  }
  
  .component-1__title {
    font-size: 24px;
  }
}

/* Total: 1 @media block */
```

**Savings:** 50% reduction in media query blocks

### Media Query Organization

**Template structure:**

```css
/* ============================================
   DESKTOP STYLES
   ============================================ */

.component { }
.component__element { }
.component--modifier { }

/* ============================================
   TABLET (768px - 1023px)
   ============================================ */

@media (max-width: 1023px) {
  .component { }
  .component__element { }
}

/* ============================================
   MOBILE (< 768px)
   ============================================ */

@media (max-width: 767px) {
  .component { }
  .component__element { }
}

/* ============================================
   REDUCED MOTION
   ============================================ */

@media (prefers-reduced-motion: reduce) {
  .component { }
}
```

### Breakpoint Consolidation

**Use consistent breakpoints:**

```css
/* Standard breakpoints */
@media (max-width: 1439px) { /* Desktop */ }
@media (max-width: 1023px) { /* Tablet landscape */ }
@media (max-width: 767px)  { /* Mobile */ }
@media (max-width: 479px)  { /* Small mobile */ }
```

**DON'T mix random breakpoints:**

```css
/* ❌ BAD - Inconsistent breakpoints */
@media (max-width: 800px) { }
@media (max-width: 650px) { }
@media (max-width: 500px) { }
@media (max-width: 375px) { }
```

---

## CSS Variable Optimization

### Variable Definition Strategy

**Problem: Repeated values**

```css
/* 30 files repeat these values */
.card-1 { padding: 24px; }
.card-2 { padding: 24px; }
.card-3 { padding: 24px; }
```

**Solution: CSS variables**

```css
/* theme-base.css - Define once */
:root {
  --spacing-6: 24px;
}

/* Use everywhere */
.card-1 { padding: var(--spacing-6); }
.card-2 { padding: var(--spacing-6); }
.card-3 { padding: var(--spacing-6); }
```

**Savings:** ~30% reduction in repeated values

### Scoped Variables

**Component-specific variables:**

```css
.component {
  /* Scoped variables for flexibility */
  --component-padding: var(--spacing-6);
  --component-bg: var(--background);
  --component-color: var(--foreground);
  
  padding: var(--component-padding);
  background: var(--component-bg);
  color: var(--component-color);
}

/* Easy to override */
.component--large {
  --component-padding: var(--spacing-8);
}

.component--primary {
  --component-bg: var(--primary);
  --component-color: var(--primary-foreground);
}
```

### Variable Naming Convention

**Use semantic names:**

```css
/* ✅ GOOD - Semantic names */
--primary: #0066cc;
--foreground: #000000;
--spacing-6: 24px;

/* ❌ BAD - Non-semantic names */
--blue: #0066cc;
--black: #000000;
--size-6: 24px;
```

---

## Performance Metrics

### CSS Bundle Size Targets

| Metric | Target | Current | Status |
|--------|--------|---------|--------|
| Total CSS (uncompressed) | < 100KB | 120KB | ⚠️ Needs optimization |
| Total CSS (gzipped) | < 30KB | 35KB | ⚠️ Needs optimization |
| Largest single file | < 20KB | 25KB | ⚠️ Needs optimization |
| Average file size | < 10KB | 12KB | ⚠️ Needs optimization |

### Memory Optimization Targets

| Optimization | Target | Potential Savings |
|--------------|--------|------------------|
| Duplicate elimination | 40% reduction | ~48KB |
| Base class extraction | 30% reduction | ~36KB |
| Media query consolidation | 20% reduction | ~24KB |
| Variable optimization | 10% reduction | ~12KB |
| **Total** | **60-70% reduction** | **~72-84KB** |

### Measurement Tools

```bash
# Measure CSS file sizes
find src/styles -name "*.css" -exec wc -c {} + | sort -n

# Find largest CSS files
find src/styles -name "*.css" -exec du -h {} + | sort -h | tail -20

# Count total CSS lines
find src/styles -name "*.css" -exec wc -l {} + | tail -1

# Measure gzipped size
find src/styles -name "*.css" -exec gzip -c {} \; | wc -c
```

---

## Audit Process

### Step 1: Inventory

**Catalog all CSS files:**

```bash
# Generate CSS file inventory
find src/styles -name "*.css" > css-inventory.txt

# Count files by directory
find src/styles -type f -name "*.css" | awk -F'/' '{print $3}' | sort | uniq -c
```

**Expected output:**

```txt
15 base/
80 components/
28 patterns/
130 templates/
5 global files
```

### Step 2: Analyze Duplicates

**Find duplicate selectors:**

```bash
# Extract all selectors
grep -r "^\." src/styles/ | cut -d':' -f2 | sort | uniq -c | sort -rn > duplicate-selectors.txt

# Find most duplicated selectors
head -20 duplicate-selectors.txt
```

**Expected findings:**

```txt
30 .service-card__icon
25 .feature-list__item
20 .stats-grid__number
18 .hero-section__title
```

### Step 3: Measure Impact

**Calculate potential savings:**

```bash
# Measure template CSS sizes
find src/styles/templates -name "*.css" -exec wc -l {} + > template-sizes.txt

# Calculate average
awk '{sum+=$1} END {print sum/NR}' template-sizes.txt
```

**Target:** 40-50% reduction in template CSS

### Step 4: Extract Base Classes

**Create base class files:**

```
src/styles/base/
├── card-base.css       # Card patterns
├── icon-base.css       # Icon patterns
├── heading-base.css    # Heading patterns
├── button-base.css     # Button patterns
├── grid-base.css       # Grid patterns
├── flex-base.css       # Flex patterns
├── spacing-base.css    # Spacing patterns
└── typography-base.css # Typography patterns
```

### Step 5: Update Templates

**Refactor templates to use base classes:**

```tsx
// BEFORE
import '@/styles/templates/service-template.css';

<div className="service-card">

// AFTER
import '@/styles/base/card-base.css';
import '@/styles/templates/service-template.css';

<div className="card-base service-card">
```

### Step 6: Verify Savings

**Measure results:**

```bash
# Before optimization
find src/styles -name "*.css" -exec wc -l {} + | tail -1

# After optimization
find src/styles -name "*.css" -exec wc -l {} + | tail -1

# Calculate reduction
echo "scale=2; (before - after) / before * 100" | bc
```

**Target:** 60-70% reduction

---

## Audit Checklist

### Pre-Audit

- [ ] Inventory all CSS files
- [ ] Measure total CSS size (uncompressed)
- [ ] Measure total CSS size (gzipped)
- [ ] Identify largest CSS files (top 20)
- [ ] Document current memory usage

### During Audit

- [ ] Find duplicate selectors
- [ ] Identify common patterns
- [ ] Calculate potential savings
- [ ] Create base class files
- [ ] Update template imports
- [ ] Verify visual consistency

### Post-Audit

- [ ] Measure new CSS size (uncompressed)
- [ ] Measure new CSS size (gzipped)
- [ ] Calculate actual savings
- [ ] Document optimization results
- [ ] Update guidelines

### Ongoing Maintenance

- [ ] Review new CSS for duplicates
- [ ] Enforce base class usage
- [ ] Monitor CSS bundle size
- [ ] Run monthly audits

---

## Related Documentation

- **[CSS Guidelines](/guidelines/development/css-guidelines.md)** - Main CSS guide
- **[BEM Naming Conventions](/guidelines/development/bem-naming-conventions.md)** - Detailed BEM guide
- **[Performance Standards](/guidelines/PERFORMANCE-STANDARDS.md)** - Performance optimization
- **[Memory Optimization Prompts](/prompts/memory-optimization/)** - Audit prompts

---

## Changelog

### Version 1.0 (March 5, 2026)
- Initial CSS memory optimization guide
- Deduplication strategies
- Base class extraction process
- Specificity minimization
- Media query consolidation
- Performance metrics and targets
- Audit process and checklist

---

**Last Updated:** March 5, 2026  
**Maintained By:** LSX Design Team  
**Questions?** See [/guidelines/README.md](/guidelines/README.md)
