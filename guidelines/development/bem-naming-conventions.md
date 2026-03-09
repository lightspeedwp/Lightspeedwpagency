# BEM Naming Conventions Guide

**Last Updated:** March 5, 2026  
**Version:** 1.0  
**Status:** Active

## Purpose

This document provides comprehensive BEM (Block Element Modifier) naming conventions for the LSX Design prototype. BEM ensures maintainable, scalable, and collision-free CSS architecture.

---

## Table of Contents

1. [What is BEM?](#what-is-bem)
2. [BEM Structure](#bem-structure)
3. [Block Naming](#block-naming)
4. [Element Naming](#element-naming)
5. [Modifier Naming](#modifier-naming)
6. [WordPress BEM Conventions](#wordpress-bem-conventions)
7. [Common Patterns](#common-patterns)
8. [Anti-Patterns](#anti-patterns)
9. [Examples](#examples)

---

## What is BEM?

**BEM = Block Element Modifier**

BEM is a naming methodology that makes CSS:
- **Predictable** - Names describe structure
- **Maintainable** - Easy to update and refactor
- **Scalable** - Works for large codebases
- **Collision-free** - No naming conflicts

### BEM Philosophy

**Component-based thinking:**
- Every UI component is a **Block**
- Parts of blocks are **Elements**
- Variations of blocks/elements are **Modifiers**

**Naming mirrors structure:**
```
.block              /* Component */
.block__element     /* Part of component */
.block--modifier    /* Variation of component */
```

---

## BEM Structure

### Basic Syntax

```
.block-name                    /* Block */
.block-name__element-name      /* Element */
.block-name--modifier-name     /* Modifier */
```

### Separators

| Symbol | Meaning | Example |
|--------|---------|---------|
| `-` (hyphen) | Word separator | `.service-card` |
| `__` (double underscore) | Element separator | `.service-card__title` |
| `--` (double hyphen) | Modifier separator | `.service-card--primary` |

### Case Convention

**Use lowercase with hyphens:**
```css
/* ✅ CORRECT */
.service-card { }
.feature-list { }
.stats-grid { }

/* ❌ WRONG */
.ServiceCard { }
.featureList { }
.stats_grid { }
```

---

## Block Naming

### What is a Block?

**A block is an independent, reusable component:**
- Can stand alone
- Can be reused anywhere
- Represents a complete UI piece

### Block Naming Rules

1. **Describe what it IS, not what it looks like**
   ```css
   /* ✅ GOOD - Describes function */
   .service-card { }
   .feature-list { }
   .navigation { }
   
   /* ❌ BAD - Describes appearance */
   .blue-box { }
   .large-text { }
   .rounded-container { }
   ```

2. **Use lowercase with hyphens**
   ```css
   /* ✅ CORRECT */
   .service-card { }
   .portfolio-grid { }
   .contact-form { }
   
   /* ❌ WRONG */
   .serviceCard { }
   .PortfolioGrid { }
   .contact_form { }
   ```

3. **Keep names semantic and descriptive**
   ```css
   /* ✅ GOOD */
   .testimonial-card { }
   .pricing-table { }
   .faq-section { }
   
   /* ❌ BAD */
   .card { }          /* Too generic */
   .table { }         /* Too generic */
   .section { }       /* Too generic */
   ```

4. **Avoid presentational names**
   ```css
   /* ✅ GOOD - Semantic */
   .primary-cta { }
   .hero-section { }
   .error-message { }
   
   /* ❌ BAD - Presentational */
   .red-button { }
   .big-section { }
   .small-text { }
   ```

### Common Block Types

**Component Blocks:**
```css
.button { }
.card { }
.modal { }
.dropdown { }
.tooltip { }
```

**Pattern Blocks:**
```css
.hero-section { }
.feature-list { }
.stats-grid { }
.testimonial-carousel { }
.faq-section { }
```

**Template Blocks:**
```css
.service-template { }
.portfolio-template { }
.blog-template { }
.about-template { }
```

**Part Blocks:**
```css
.site-header { }
.site-footer { }
.site-navigation { }
.sidebar { }
```

---

## Element Naming

### What is an Element?

**An element is a part of a block:**
- Cannot exist independently
- Always belongs to a block
- Represents a child component

### Element Naming Rules

1. **Use double underscore `__` separator**
   ```css
   .service-card__icon { }
   .service-card__title { }
   .service-card__description { }
   ```

2. **Always prefix with block name**
   ```css
   /* ✅ CORRECT */
   .service-card__icon { }
   .feature-list__item { }
   .hero-section__title { }
   
   /* ❌ WRONG - No block prefix */
   .icon { }
   .item { }
   .title { }
   ```

3. **No nested elements (flatten structure)**
   ```css
   /* ✅ CORRECT - Flat structure */
   .card__header { }
   .card__header-icon { }
   .card__header-title { }
   
   /* ❌ WRONG - Nested elements */
   .card__header__icon { }
   .card__header__title { }
   ```

4. **Use descriptive element names**
   ```css
   /* ✅ GOOD */
   .service-card__icon { }
   .service-card__title { }
   .service-card__description { }
   .service-card__cta { }
   
   /* ❌ BAD */
   .service-card__img { }
   .service-card__txt { }
   .service-card__btn { }
   ```

### Common Element Patterns

**Card Elements:**
```css
.card__header { }
.card__icon { }
.card__title { }
.card__subtitle { }
.card__content { }
.card__description { }
.card__footer { }
.card__cta { }
```

**List Elements:**
```css
.list__item { }
.list__icon { }
.list__title { }
.list__description { }
```

**Section Elements:**
```css
.section__header { }
.section__title { }
.section__subtitle { }
.section__content { }
.section__footer { }
```

**Form Elements:**
```css
.form__field { }
.form__label { }
.form__input { }
.form__error { }
.form__submit { }
```

---

## Modifier Naming

### What is a Modifier?

**A modifier is a variation of a block or element:**
- Changes appearance or state
- Applied to blocks OR elements
- Multiple modifiers can be combined

### Modifier Naming Rules

1. **Use double hyphen `--` separator**
   ```css
   .service-card--primary { }
   .service-card--large { }
   .button--disabled { }
   ```

2. **Describe the variation**
   ```css
   /* ✅ GOOD - Describes variation */
   .card--primary { }
   .card--secondary { }
   .card--large { }
   .card--horizontal { }
   
   /* ❌ BAD - Too generic */
   .card--type1 { }
   .card--version-a { }
   ```

3. **Apply to block OR element**
   ```css
   /* Block modifier */
   .service-card--primary { }
   
   /* Element modifier */
   .service-card__icon--large { }
   ```

4. **Use boolean or key-value format**
   ```css
   /* Boolean modifiers (presence = true) */
   .button--disabled { }
   .modal--open { }
   .card--featured { }
   
   /* Key-value modifiers */
   .button--size-large { }
   .button--color-primary { }
   .card--layout-horizontal { }
   ```

### Common Modifier Types

**State Modifiers:**
```css
.button--active { }
.button--disabled { }
.button--loading { }
.modal--open { }
.modal--closed { }
.dropdown--expanded { }
```

**Style Modifiers:**
```css
.card--primary { }
.card--secondary { }
.card--muted { }
.button--outline { }
.button--ghost { }
```

**Size Modifiers:**
```css
.icon--small { }
.icon--medium { }
.icon--large { }
.icon--xl { }
.button--sm { }
.button--lg { }
```

**Layout Modifiers:**
```css
.card--horizontal { }
.card--vertical { }
.list--grid { }
.list--stack { }
.section--full-width { }
```

### Modifier Combinations

**Multiple modifiers can be combined:**

```html
<!-- Single modifier -->
<div class="card card--primary">

<!-- Multiple modifiers -->
<div class="card card--primary card--large card--horizontal">

<!-- Block + Element + Modifiers -->
<div class="card card--primary">
  <div class="card__icon card__icon--large"></div>
  <h3 class="card__title card__title--center"></h3>
</div>
```

---

## WordPress BEM Conventions

### WordPress Block Prefix

**WordPress blocks use `.wp-block-` prefix:**

```css
/* Core WordPress blocks */
.wp-block-paragraph { }
.wp-block-heading { }
.wp-block-button { }
.wp-block-image { }
.wp-block-group { }

/* Custom LSX blocks */
.wp-block-lsx-service-card { }
.wp-block-lsx-feature-list { }
.wp-block-lsx-stats-grid { }
```

### WordPress Block Elements

**WordPress block elements follow BEM:**

```css
/* Block */
.wp-block-lsx-service-card { }

/* Elements */
.wp-block-lsx-service-card__icon { }
.wp-block-lsx-service-card__title { }
.wp-block-lsx-service-card__content { }
.wp-block-lsx-service-card__cta { }
```

### WordPress Block Modifiers

**WordPress block modifiers:**

```css
/* Block modifiers */
.wp-block-lsx-service-card--primary { }
.wp-block-lsx-service-card--large { }
.wp-block-lsx-service-card--horizontal { }

/* Element modifiers */
.wp-block-lsx-service-card__icon--large { }
.wp-block-lsx-service-card__title--center { }
```

### WordPress Utility Classes

**WordPress utilities use `.wp-` prefix:**

```css
/* Grid utilities */
.wp-grid-2-cols { }
.wp-grid-3-cols { }
.wp-grid-4-cols { }

/* Max-width utilities */
.wp-max-w-3xl { }
.wp-max-w-4xl { }
.wp-max-w-6xl { }

/* Text alignment */
.wp-text-center { }
.wp-text-left { }
.wp-text-right { }
```

---

## Common Patterns

### Pattern 1: Card Component

```css
/* Block */
.service-card {
  display: flex;
  flex-direction: column;
  padding: var(--spacing-6);
}

/* Elements */
.service-card__header {
  display: flex;
  gap: var(--spacing-3);
}

.service-card__icon {
  width: 48px;
  height: 48px;
}

.service-card__title {
  font-size: var(--text-h4);
}

.service-card__description {
  font-size: var(--text-base);
}

.service-card__cta {
  margin-top: auto;
}

/* Modifiers */
.service-card--primary {
  background: var(--primary);
}

.service-card--large {
  padding: var(--spacing-8);
}

.service-card--horizontal {
  flex-direction: row;
}

/* Element modifiers */
.service-card__icon--large {
  width: 64px;
  height: 64px;
}
```

### Pattern 2: Navigation Component

```css
/* Block */
.site-navigation {
  display: flex;
  gap: var(--spacing-4);
}

/* Elements */
.site-navigation__menu {
  display: flex;
  list-style: none;
}

.site-navigation__item {
  position: relative;
}

.site-navigation__link {
  color: var(--foreground);
  text-decoration: none;
}

.site-navigation__submenu {
  position: absolute;
  top: 100%;
}

/* Modifiers */
.site-navigation--mobile {
  flex-direction: column;
}

.site-navigation__item--active .site-navigation__link {
  color: var(--primary);
}

.site-navigation__link--disabled {
  opacity: 0.5;
  pointer-events: none;
}
```

### Pattern 3: Button Component

```css
/* Block */
.button {
  display: inline-flex;
  align-items: center;
  gap: var(--spacing-2);
  padding: var(--spacing-3) var(--spacing-4);
  border-radius: var(--radius);
  font-family: var(--font-primary);
  font-size: var(--text-base);
  font-weight: var(--font-weight-semibold);
  cursor: pointer;
  transition: all 0.2s ease;
}

/* Elements */
.button__icon {
  width: 20px;
  height: 20px;
}

.button__text {
  /* Specific text styling if needed */
}

/* Style modifiers */
.button--primary {
  background: var(--primary);
  color: var(--primary-foreground);
}

.button--secondary {
  background: var(--secondary);
  color: var(--secondary-foreground);
}

.button--outline {
  background: transparent;
  border: 1px solid var(--border);
  color: var(--foreground);
}

.button--ghost {
  background: transparent;
  color: var(--foreground);
}

/* Size modifiers */
.button--sm {
  padding: var(--spacing-2) var(--spacing-3);
  font-size: var(--text-sm);
}

.button--lg {
  padding: var(--spacing-4) var(--spacing-6);
  font-size: var(--text-lg);
}

/* State modifiers */
.button--disabled {
  opacity: 0.5;
  pointer-events: none;
}

.button--loading {
  position: relative;
  pointer-events: none;
}
```

---

## Anti-Patterns

### ❌ Avoid Nested Elements

**WRONG:**
```css
/* DON'T nest elements */
.card__header__icon { }
.card__header__title { }
.card__content__description { }
```

**CORRECT:**
```css
/* DO flatten structure */
.card__header-icon { }
.card__header-title { }
.card__description { }
```

### ❌ Avoid Generic Names

**WRONG:**
```css
/* Too generic */
.box { }
.item { }
.container { }
.wrapper { }
```

**CORRECT:**
```css
/* Specific and descriptive */
.service-card { }
.portfolio-item { }
.stats-container { }
.content-wrapper { }
```

### ❌ Avoid Presentational Names

**WRONG:**
```css
/* Describes appearance */
.blue-button { }
.large-text { }
.rounded-box { }
```

**CORRECT:**
```css
/* Describes function */
.primary-button { }
.hero-title { }
.feature-card { }
```

### ❌ Avoid Cascade Dependencies

**WRONG:**
```css
/* Depends on cascade */
.section .card .title {
  font-size: var(--text-h3);
}
```

**CORRECT:**
```css
/* Self-contained */
.card__title {
  font-size: var(--text-h3);
}
```

### ❌ Avoid ID Selectors

**WRONG:**
```css
/* Never use IDs for styling */
#header { }
#navigation { }
```

**CORRECT:**
```css
/* Use classes */
.site-header { }
.site-navigation { }
```

---

## Examples

### Example 1: Service Card

**HTML:**
```html
<div class="service-card service-card--primary service-card--large">
  <div class="service-card__header">
    <svg class="service-card__icon service-card__icon--large"></svg>
    <h3 class="service-card__title">Web Design</h3>
  </div>
  <div class="service-card__content">
    <p class="service-card__description">
      Professional web design services...
    </p>
  </div>
  <div class="service-card__footer">
    <a href="#" class="service-card__cta button button--outline">
      Learn More
    </a>
  </div>
</div>
```

**CSS:**
```css
/* Block */
.service-card {
  display: flex;
  flex-direction: column;
  padding: var(--spacing-6);
  gap: var(--spacing-4);
  background: var(--background);
  border-radius: var(--radius-lg);
}

/* Elements */
.service-card__header {
  display: flex;
  align-items: center;
  gap: var(--spacing-3);
}

.service-card__icon {
  width: 48px;
  height: 48px;
  color: var(--primary);
}

.service-card__title {
  font-family: var(--font-primary);
  font-size: var(--text-h4);
  margin: 0;
}

.service-card__content {
  flex: 1;
}

.service-card__description {
  font-size: var(--text-base);
  color: var(--muted-foreground);
}

.service-card__footer {
  margin-top: auto;
}

.service-card__cta {
  /* Inherits from .button */
}

/* Block modifiers */
.service-card--primary {
  background: var(--primary);
  color: var(--primary-foreground);
}

.service-card--large {
  padding: var(--spacing-8);
}

/* Element modifiers */
.service-card__icon--large {
  width: 64px;
  height: 64px;
}
```

### Example 2: Feature List

**HTML:**
```html
<ul class="feature-list feature-list--grid">
  <li class="feature-list__item feature-list__item--highlighted">
    <svg class="feature-list__icon"></svg>
    <div class="feature-list__content">
      <h4 class="feature-list__title">Fast Performance</h4>
      <p class="feature-list__description">
        Lightning-fast load times...
      </p>
    </div>
  </li>
  <li class="feature-list__item">
    <svg class="feature-list__icon"></svg>
    <div class="feature-list__content">
      <h4 class="feature-list__title">SEO Optimized</h4>
      <p class="feature-list__description">
        Built for search engines...
      </p>
    </div>
  </li>
</ul>
```

**CSS:**
```css
/* Block */
.feature-list {
  display: flex;
  flex-direction: column;
  gap: var(--spacing-4);
  list-style: none;
  padding: 0;
  margin: 0;
}

/* Elements */
.feature-list__item {
  display: flex;
  gap: var(--spacing-3);
  padding: var(--spacing-4);
  background: var(--background);
  border-radius: var(--radius);
}

.feature-list__icon {
  width: 32px;
  height: 32px;
  color: var(--primary);
  flex-shrink: 0;
}

.feature-list__content {
  flex: 1;
}

.feature-list__title {
  font-family: var(--font-primary);
  font-size: var(--text-h5);
  margin: 0 0 var(--spacing-2) 0;
}

.feature-list__description {
  font-size: var(--text-base);
  color: var(--muted-foreground);
  margin: 0;
}

/* Block modifiers */
.feature-list--grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
}

.feature-list--compact .feature-list__item {
  padding: var(--spacing-3);
}

/* Element modifiers */
.feature-list__item--highlighted {
  background: var(--primary);
  color: var(--primary-foreground);
}

.feature-list__item--highlighted .feature-list__icon,
.feature-list__item--highlighted .feature-list__title,
.feature-list__item--highlighted .feature-list__description {
  color: var(--primary-foreground);
}
```

---

## Related Documentation

- **[CSS Guidelines](/guidelines/development/css-guidelines.md)** - Main CSS guide
- **[CSS Memory Optimization](/guidelines/development/css-memory-optimization.md)** - Memory optimization
- **[WordPress Blocks CSS Architecture](/guidelines/WORDPRESS-BLOCKS-CSS-ARCHITECTURE.md)** - WordPress blocks

---

## Changelog

### Version 1.0 (March 5, 2026)
- Initial BEM naming conventions guide
- Block, element, modifier naming rules
- WordPress BEM conventions
- Common patterns and anti-patterns
- Comprehensive examples

---

**Last Updated:** March 5, 2026  
**Maintained By:** LSX Design Team  
**Questions?** See [/guidelines/README.md](/guidelines/README.md)
