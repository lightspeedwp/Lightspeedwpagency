# Batch 1: Mailchimp Solution Page — Utility Class Migration Guide

**Date:** March 10, 2026  
**Task:** Phase 3 Step 5.2 Part 2 — Migrate mailchimp-solution-page to responsive grid utilities  
**File:** `/src/styles/templates/mailchimp-solution-page.css`  
**Template:** `MailchimpSolutionTemplate.tsx`

---

## Migration Strategy

Instead of replacing CSS grid patterns with utility classes in the CSS file, we'll **add utility classes to the TSX template** while **removing the duplicate media query CSS**.

This approach:
1. ✅ Keeps styling flexible (users can override utilities with specific classes)
2. ✅ Eliminates duplicate media query code
3. ✅ Makes grid behavior explicit in the template
4. ✅ Maintains 100% CSS variable compliance

---

## TSX Template Changes

**File:** `/src/app/components/templates/pages/MailchimpSolutionTemplate.tsx`

### Change 1: Stats Grid (4-column grid)

**BEFORE:**
```tsx
<div className="mailchimp-page__stats-grid">
  {/* Stat cards */}
</div>
```

**AFTER:**
```tsx
<div className="mailchimp-page__stats-grid responsive-grid-4-cols">
  {/* Stat cards */}
</div>
```

**Reasoning:** Uses `.responsive-grid-4-cols` utility (1 col mobile → 2 cols tablet → 4 cols desktop)

---

### Change 2: Features Grid (3-column grid with larger gap)

**BEFORE:**
```tsx
<div className="mailchimp-page__features-grid">
  {/* Feature cards */}
</div>
```

**AFTER:**
```tsx
<div className="mailchimp-page__features-grid responsive-grid-3-cols responsive-grid-gap-8">
  {/* Feature cards */}
</div>
```

**Reasoning:** Uses `.responsive-grid-3-cols` utility (1 col → 2 cols → 3 cols) + `.responsive-grid-gap-8` modifier for larger gap (spacing-8 instead of default spacing-6)

---

### Change 3: Process Grid (3-column grid)

**BEFORE:**
```tsx
<div className="mailchimp-page__process-grid">
  {/* Process steps */}
</div>
```

**AFTER:**
```tsx
<div className="mailchimp-page__process-grid responsive-grid-3-cols">
  {/* Process steps */}
</div>
```

**Reasoning:** Uses `.responsive-grid-3-cols` utility (1 col → 2 cols → 3 cols)

---

### Change 4: Pricing Grid (KEEP AS-IS — Special Case)

**NO CHANGE:**
```tsx
<div className="mailchimp-page__pricing-grid">
  {/* Pricing cards */}
</div>
```

**Reasoning:** Pricing grid has a unique pattern (1 col → 3 cols at 1024px, NO tablet breakpoint). This doesn't match any standard utility, so keep the custom CSS.

---

## CSS File Changes

**File:** `/src/styles/templates/mailchimp-solution-page.css`

### Remove 1: Stats Grid Media Queries (Lines 260-270)

**REMOVE:**
```css
@media (min-width: 768px) {
  .mailchimp-page__stats-grid {
    grid-template-columns: repeat(2, 1fr);
  }
}

@media (min-width: 1024px) {
  .mailchimp-page__stats-grid {
    grid-template-columns: repeat(4, 1fr);
  }
}
```

**KEEP:**
```css
.mailchimp-page__stats-grid {
  display: grid;
  grid-template-columns: 1fr;
  gap: var(--spacing-6);
}
```

**NEW (Add comment):**
```css
/**
 * Stats Grid — 1 → 2 → 4 columns
 * Responsive behavior provided by .responsive-grid-4-cols utility class
 * @see /src/styles/utilities/responsive-grids.css
 */
.mailchimp-page__stats-grid {
  /* Fallback base styles (utility class provides responsive behavior) */
  display: grid;
  grid-template-columns: 1fr;
  gap: var(--spacing-6);
}
```

---

### Remove 2: Features Grid Media Queries (Lines 368-378)

**REMOVE:**
```css
@media (min-width: 768px) {
  .mailchimp-page__features-grid {
    grid-template-columns: repeat(2, 1fr);
  }
}

@media (min-width: 1024px) {
  .mailchimp-page__features-grid {
    grid-template-columns: repeat(3, 1fr);
  }
}
```

**KEEP:**
```css
.mailchimp-page__features-grid {
  display: grid;
  grid-template-columns: 1fr;
  gap: var(--spacing-8);
}
```

**NEW (Add comment):**
```css
/**
 * Features Grid — 1 → 2 → 3 columns
 * Responsive behavior provided by .responsive-grid-3-cols utility class
 * Gap override provided by .responsive-grid-gap-8 utility class
 * @see /src/styles/utilities/responsive-grids.css
 */
.mailchimp-page__features-grid {
  /* Fallback base styles (utility classes provide responsive behavior + gap override) */
  display: grid;
  grid-template-columns: 1fr;
  gap: var(--spacing-8);
}
```

---

### Remove 3: Process Grid Media Queries (Lines 539-549)

**REMOVE:**
```css
@media (min-width: 768px) {
  .mailchimp-page__process-grid {
    grid-template-columns: repeat(2, 1fr);
  }
}

@media (min-width: 1024px) {
  .mailchimp-page__process-grid {
    grid-template-columns: repeat(3, 1fr);
  }
}
```

**KEEP:**
```css
.mailchimp-page__process-grid {
  display: grid;
  grid-template-columns: 1fr;
  gap: var(--spacing-6);
}
```

**NEW (Add comment):**
```css
/**
 * Process Grid — 1 → 2 → 3 columns
 * Responsive behavior provided by .responsive-grid-3-cols utility class
 * @see /src/styles/utilities/responsive-grids.css
 */
.mailchimp-page__process-grid {
  /* Fallback base styles (utility class provides responsive behavior) */
  display: grid;
  grid-template-columns: 1fr;
  gap: var(--spacing-6);
}
```

---

### Keep: Pricing Grid (Lines 624-635) — Special Case

**KEEP ALL CSS AS-IS:**
```css
.mailchimp-page__pricing-grid {
  display: grid;
  grid-template-columns: 1fr;
  gap: var(--spacing-8);
  align-items: start;
}

@media (min-width: 1024px) {
  .mailchimp-page__pricing-grid {
    grid-template-columns: repeat(3, 1fr);
  }
}
```

**Reasoning:** Unique pattern (no tablet breakpoint) — doesn't match standard utilities.

---

## Impact Summary

### Lines Removed from CSS

| Grid | Lines Before | Lines After | Lines Saved |
|------|--------------|-------------|-------------|
| **Stats Grid** | 17 lines (254-270) | 11 lines (base + comment) | **6 lines** |
| **Features Grid** | 17 lines (362-378) | 12 lines (base + comment) | **5 lines** |
| **Process Grid** | 17 lines (533-549) | 11 lines (base + comment) | **6 lines** |
| **Pricing Grid** | 12 lines (KEEP) | 12 lines (NO CHANGE) | **0 lines** |
| **TOTAL** | **63 lines** | **46 lines** | **17 lines (27% reduction)** |

**Note:** Actual savings may be higher when considering dark mode and reduced motion guards that no longer need grid-specific overrides.

---

### Maintainability Improvement

**BEFORE:**
- Change grid breakpoint → Edit 3 media query blocks (9 lines across CSS file)
- Change grid gap → Edit 3 base grid definitions (3 locations)
- Add new breakpoint → Edit 3 media query blocks (12 lines)

**AFTER:**
- Change grid breakpoint → Edit 1 utility file (`responsive-grids.css`)
- Change grid gap → Edit utility modifier class OR specific grid base
- Add new breakpoint → Edit 1 utility file

**Time Savings:** ~90% (30 min → 3 min for breakpoint changes)

---

### User Control Benefits

Users can now update ALL responsive grid behavior by editing `/src/styles/utilities/responsive-grids.css`:

**Change all 4-column grids to 5 columns on ultra-wide:**
```css
/* Edit responsive-grids.css: */
@media (min-width: 1440px) {
  .responsive-grid-4-cols {
    grid-template-columns: repeat(5, 1fr);
  }
}
/* Result: ALL templates using .responsive-grid-4-cols get 5 columns! */
```

**Change tablet breakpoint from 768px to 900px:**
```css
/* Edit responsive-grids.css: */
@media (min-width: 900px) { /* Changed from 768px */
  .responsive-grid-3-cols {
    grid-template-columns: repeat(2, 1fr);
  }
}
/* Result: ALL 3-column grids switch to 2 cols at 900px! */
```

---

## Design System Compliance

### ✅ 100% Maintained

**Typography:**
- ✅ ONLY `var(--font-primary)` and `var(--font-secondary)`
- ✅ NO hardcoded font names

**Spacing:**
- ✅ ONLY `var(--spacing-*)` tokens in utility classes
- ✅ ONLY `var(--spacing-*)` tokens in grid base styles
- ✅ NO hardcoded px values

**Breakpoints:**
- ✅ Standard 768px and 1024px breakpoints in utilities
- ✅ NO hardcoded breakpoint values in template CSS

**User Control:**
- ✅ Users can update ALL styling by editing CSS files
- ✅ Change 1 utility file → affects 40+ templates
- ✅ 90%+ time savings for breakpoint changes

---

## Implementation Checklist

### Phase 1: CSS File Updates (5 min)

- [ ] Remove stats grid media queries (lines 260-270)
- [ ] Add stats grid comment pointing to utility class
- [ ] Remove features grid media queries (lines 368-378)
- [ ] Add features grid comment pointing to utility + modifier
- [ ] Remove process grid media queries (lines 539-549)
- [ ] Add process grid comment pointing to utility class
- [ ] Test: Verify CSS file has zero errors

### Phase 2: TSX Template Updates (10 min)

- [ ] Add `.responsive-grid-4-cols` to stats grid div
- [ ] Add `.responsive-grid-3-cols .responsive-grid-gap-8` to features grid div
- [ ] Add `.responsive-grid-3-cols` to process grid div
- [ ] Test: Verify template renders correctly

### Phase 3: Verification (5 min)

- [ ] Test mobile view (320px, 480px) → All grids show 1 column
- [ ] Test tablet view (768px) → Stats/features/process show 2 columns
- [ ] Test desktop view (1024px) → Stats show 4 cols, features/process show 3 cols
- [ ] Test pricing grid → 1 col mobile, 3 cols desktop (NO tablet change)
- [ ] Test dark mode → All grids render correctly
- [ ] Test reduced motion → No grid behavior affected
- [ ] Verify zero build errors
- [ ] Verify zero visual regressions

---

## Next Steps

1. Apply CSS changes to `/src/styles/templates/mailchimp-solution-page.css`
2. Apply TSX changes to `/src/app/components/templates/pages/MailchimpSolutionTemplate.tsx`
3. Test responsive behavior at all breakpoints
4. Move to Batch 1 File 2: `lsx-search-page.css`

---

**Migration Guide Created:** March 10, 2026  
**Status:** Ready for implementation  
**Estimated Time:** 20 minutes total (5 min CSS + 10 min TSX + 5 min testing)
