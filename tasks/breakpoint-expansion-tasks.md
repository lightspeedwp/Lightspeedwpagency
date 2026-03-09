# Breakpoint System Expansion — Implementation Tasks

**Date Created:** March 2, 2026  
**Report:** `/reports/2026-03/breakpoint-expansion-audit.md`  
**Status:** ✅ COMPLETE (March 2, 2026) — ARCHIVED March 4, 2026  
**Priority:** HIGH  
**Estimated Effort:** 4-6 hours

---

## Overview

Expand the LSX Design breakpoint system from 5 to 10 breakpoints with WordPress alignment and accessibility improvements.

**Current System:** 5 breakpoints (320px, 420px, 768px, 1024px, 1440px)  
**Target System:** 10 breakpoints (280px, 480px, 600px, 782px, 768px, 960px, 1024px, 1080px, 1280px, 1440px, 1920px)

---

## Phase 1: Add New Breakpoint Variables

**Estimated Time:** 1 hour  
**Priority:** CRITICAL

### Task 1.1: Update `/src/styles/theme-base.css`

**Status:** ❌ NOT STARTED

Add new breakpoint variables under the "RESPONSIVE BREAKPOINTS" section (currently at lines 282-293).

**Implementation:**

```css
/* ============================================
   RESPONSIVE BREAKPOINTS (Reference)
   ============================================ */

:root {
  /* ----------------------------------------
     Core Breakpoints (Existing)
     ---------------------------------------- */
  --breakpoint-mobile-compact: 320px;
  --breakpoint-mobile: 480px;              /* Updated from 420px */
  --breakpoint-tablet-portrait: 768px;
  --breakpoint-tablet-landscape: 1024px;
  --breakpoint-desktop: 1440px;
  
  /* ----------------------------------------
     Extended WordPress-Aligned Breakpoints
     ---------------------------------------- */
  
  /* Accessibility: WCAG 1.4.4 browser zoom support */
  --breakpoint-zoomed-in: 280px;
  
  /* Small tablets, large phablets */
  --breakpoint-small: 600px;
  
  /* Editorial layouts (existing undocumented usage) */
  --breakpoint-editorial: 640px;
  
  /* WordPress adminbar breakpoint (toolbar height change) */
  --breakpoint-medium: 782px;
  
  /* WordPress admin sidebar auto-fold */
  --breakpoint-large: 960px;
  
  /* HD laptops, large tablets */
  --breakpoint-xlarge: 1080px;
  
  /* Wide desktop layouts */
  --breakpoint-wide: 1280px;
  
  /* Ultra-wide displays (1080p+ monitors) */
  --breakpoint-xhuge: 1920px;
}
```

**Verification:**
- [ ] All 10 new breakpoint variables defined
- [ ] Comments explain purpose of each breakpoint
- [ ] 420px updated to 480px
- [ ] 640px documented as `--breakpoint-editorial`

---

## Phase 2: Update Responsive CSS

**Estimated Time:** 2 hours  
**Priority:** CRITICAL

### Task 2.1: Add New Media Query Sections to `/src/styles/responsive.css`

**Status:** ❌ NOT STARTED

Add new media query sections for each new breakpoint after the existing breakpoint sections.

**Sections to add:**

1. **Zoomed-In (280px+)** - Accessibility support
2. **Small (600px+)** - Small tablets
3. **Editorial (640px+)** - Document existing usage
4. **Medium (782px+)** - WordPress adminbar
5. **Large (960px+)** - WordPress admin sidebar
6. **XLarge (1080px+)** - HD laptops
7. **Wide (1280px+)** - Wide layouts
8. **XHuge (1920px+)** - Ultra-wide displays

**Implementation:**

```css
/* ============================================
   BREAKPOINT: Zoomed-In (280px+)
   WCAG 1.4.4 - Browser zoom up to 400%
   ============================================ */

@media (min-width: 280px) {
  /* Minimum touch targets for accessibility */
  button,
  a,
  input,
  select,
  textarea,
  .wp-block-button__link {
    min-height: 44px;
    min-width: 44px;
  }
  
  /* Prevent horizontal scroll at extreme zoom */
  body {
    overflow-x: hidden;
  }
  
  /* Force single column at extreme zoom */
  .wp-grid-2-cols,
  .wp-grid-3-cols,
  .wp-grid-4-cols {
    grid-template-columns: 1fr;
  }
}

/* ============================================
   BREAKPOINT: Small (600px+)
   Small tablets, large phablets
   ============================================ */

@media (min-width: 600px) {
  /* Transition to 2-column layouts */
  .wp-grid-2-cols-early {
    grid-template-columns: repeat(2, 1fr);
  }
  
  /* Increased spacing for larger screens */
  section,
  .wp-block-group {
    padding-top: var(--spacing-10);
    padding-bottom: var(--spacing-10);
  }
}

/* ============================================
   BREAKPOINT: Editorial (640px+)
   Editorial layouts, stream grids, blog layouts
   Currently used in 12 instances across codebase
   ============================================ */

@media (min-width: 640px) {
  /* Editorial stream layouts */
  .blog-stream__wrap,
  .pf-editorial__wrap {
    grid-template-columns: auto 1fr;
  }
  
  /* List grids start 2-column */
  .service-page__list-grid,
  .service-page__results-grid {
    grid-template-columns: repeat(2, 1fr);
  }
  
  /* Button rows (horizontal) */
  .service-page__cta-buttons {
    flex-direction: row;
  }
}

/* ============================================
   BREAKPOINT: Medium (782px+)
   WordPress adminbar breakpoint
   Adminbar height changes from 46px to 32px
   ============================================ */

@media (min-width: 782px) {
  /* WordPress adminbar visible for logged-in users */
  body.admin-bar .site-header {
    top: 46px;
  }
  
  body.admin-bar .site-header.sticky {
    top: 46px;
  }
  
  /* Admin toolbar utilities */
  .wp-admin-visible {
    display: block;
  }
  
  .wp-admin-hidden {
    display: none;
  }
}

/* Mobile adminbar (below 782px) */
@media (max-width: 781px) {
  body.admin-bar .site-header {
    top: 0; /* Mobile adminbar doesn't affect fixed elements */
  }
}

/* ============================================
   BREAKPOINT: Large (960px+)
   WordPress admin sidebar auto-fold
   ============================================ */

@media (min-width: 960px) {
  /* Container expands for larger screens */
  .container {
    max-width: 960px;
  }
  
  /* Grid adjustments for admin sidebar visibility */
  .block-editor-writing-flow {
    max-width: calc(100% - 280px);
  }
  
  /* 3-column grids start appearing */
  .wp-grid-3-cols-large {
    grid-template-columns: repeat(3, 1fr);
  }
}

/* ============================================
   BREAKPOINT: XLarge (1080px+)
   HD laptops (1920x1080), large tablets
   ============================================ */

@media (min-width: 1080px) {
  /* HD screen optimizations */
  .container-hd {
    max-width: 1080px;
  }
  
  /* Increased spacing for larger screens */
  section,
  .wp-block-group {
    padding-top: var(--spacing-18);
    padding-bottom: var(--spacing-18);
  }
}

/* ============================================
   BREAKPOINT: Wide (1280px+)
   Wide desktop layouts
   Currently used in services-page.css
   ============================================ */

@media (min-width: 1280px) {
  /* 4-column grids for wide screens */
  .wp-grid-4-cols-wide {
    grid-template-columns: repeat(4, 1fr);
  }
  
  /* Wide container */
  .container-wide {
    max-width: 1280px;
  }
  
  /* Industries grid (existing usage) */
  .services-page__industries-grid {
    grid-template-columns: repeat(4, 1fr);
  }
}

/* ============================================
   BREAKPOINT: XHuge (1920px+)
   Ultra-wide displays (1080p+, ultrawide monitors)
   ============================================ */

@media (min-width: 1920px) {
  /* Prevent excessive line lengths */
  .wp-block-paragraph,
  .single-post__content p,
  .page-content p {
    max-width: 80ch; /* Optimal reading length */
  }
  
  /* Ultra-wide container */
  .container-ultra-wide {
    max-width: 1920px;
    margin: 0 auto;
  }
  
  /* Maximum section spacing */
  section,
  .wp-block-group {
    padding-top: var(--spacing-28);
    padding-bottom: var(--spacing-28);
  }
  
  /* 5-column grids for ultra-wide */
  .wp-grid-5-cols {
    grid-template-columns: repeat(5, 1fr);
  }
}
```

**Verification:**
- [ ] All 8 new media query sections added
- [ ] Each section has clear documentation comments
- [ ] WordPress-specific utilities included (782px, 960px)
- [ ] Accessibility utilities included (280px)
- [ ] Ultra-wide optimizations included (1920px)

### Task 2.2: Migrate 420px → 480px

**Status:** ❌ NOT STARTED

**Search locations:**
- `/src/styles/responsive.css`
- Any template CSS files using 420px

**Find command:**
```bash
grep -r "420px" src/styles/
```

**Expected instances:** LOW (variable definition only in responsive.css)

**Migration:**
1. Update `--breakpoint-mobile: 420px` → `480px` in theme-base.css (Task 1.1)
2. Update `@media (min-width: 420px)` → `480px` in responsive.css
3. Test layouts in 420px-479px range
4. Verify no visual regressions

**Verification:**
- [ ] No instances of 420px remain in codebase
- [ ] All mobile breakpoints use 480px
- [ ] No layout breaks in 420px-479px range

---

## Phase 3: Update Documentation

**Estimated Time:** 1 hour  
**Priority:** HIGH

### Task 3.1: Update `/guidelines/design-tokens/responsive.md`

**Status:** ❌ NOT STARTED

**Changes:**

1. **Replace existing breakpoint table** (lines 9-17) with new 12-breakpoint table
2. **Update CSS variables section** (lines 22-29) with all new variables
3. **Update media queries section** (lines 34-48) with all new breakpoints
4. **Add WordPress compatibility section** (new)
5. **Add accessibility section** (new)

**New Breakpoint Table:**

```markdown
### Standard Breakpoints

The LSX Design system uses **12 responsive breakpoints** optimized for WordPress and accessibility:

| Breakpoint | Variable | Min Width | Purpose | WordPress Context |
|------------|----------|-----------|---------|-------------------|
| **Zoomed-In** | `--breakpoint-zoomed-in` | 280px | Browser zoom support | WCAG 1.4.4 compliance |
| **Mobile Compact** | `--breakpoint-mobile-compact` | 320px | Small phones | iPhone SE, small devices |
| **Mobile** | `--breakpoint-mobile` | 480px | Large phones, landscape | iPhone Plus, Android |
| **Small** | `--breakpoint-small` | 600px | Small tablets | iPad Mini portrait |
| **Editorial** | `--breakpoint-editorial` | 640px | Blog layouts, streams | Editorial content |
| **Tablet Portrait** | `--breakpoint-tablet-portrait` | 768px | Tablets vertical | iPad portrait, grids |
| **Medium** | `--breakpoint-medium` | 782px | WP adminbar change | Toolbar breakpoint |
| **Large** | `--breakpoint-large` | 960px | Admin sidebar fold | WP admin UI |
| **Tablet Landscape** | `--breakpoint-tablet-landscape` | 1024px | Desktop menu | iPad landscape |
| **XLarge** | `--breakpoint-xlarge` | 1080px | HD laptops | 1080p screens |
| **Wide** | `--breakpoint-wide` | 1280px | Wide layouts | 1280p+ screens |
| **Desktop** | `--breakpoint-desktop` | 1440px | Standard desktop | 1440p monitors |
| **XHuge** | `--breakpoint-xhuge` | 1920px | Ultra-wide | 1080p+ displays |
```

**New Sections to Add:**

```markdown
## WordPress Compatibility

### Adminbar Breakpoint (782px)

The WordPress adminbar changes height at 782px:
- **Below 782px:** 46px height (mobile)
- **Above 782px:** 32px height (desktop)

```css
@media (min-width: 782px) {
  body.admin-bar .site-header {
    top: 46px;
  }
}
```

### Admin Sidebar Fold (960px)

The WordPress admin sidebar auto-folds at 960px. Use this breakpoint for editor-specific layouts:

```css
@media (min-width: 960px) {
  .block-editor-writing-flow {
    max-width: calc(100% - 280px);
  }
}
```

## Accessibility Support

### Browser Zoom (280px)

Support users with 400% browser zoom (WCAG 1.4.4):

```css
@media (min-width: 280px) {
  button, a, input, select {
    min-height: 44px; /* Minimum touch target */
  }
}
```
```

**Verification:**
- [ ] Breakpoint table updated with all 12 breakpoints
- [ ] WordPress compatibility section added
- [ ] Accessibility section added
- [ ] All media query examples updated

### Task 3.2: Update `/guidelines/Guidelines.md`

**Status:** ❌ NOT STARTED

**Changes:**

Update the "Layout System" section (lines 323-380) with new breakpoint table.

**Find section:**
```markdown
### Breakpoint System

The LSX Design system uses **5 standardized breakpoints**:
```

**Replace with:**

```markdown
### Breakpoint System

The LSX Design system uses **12 responsive breakpoints** optimized for WordPress and accessibility:

| Breakpoint | Min Width | Navigation | Grid Columns | WordPress Context |
|------------|-----------|------------|--------------|-------------------|
| **Zoomed-In** | 280px | Mobile menu | 1 column | WCAG zoom support |
| **Mobile Compact** | 320px | Mobile menu | 1 column | Small phones |
| **Mobile** | 480px | Mobile menu | 1 column | Standard mobile |
| **Small** | 600px | Mobile menu | 2 columns | Small tablets |
| **Editorial** | 640px | Mobile menu | 2 columns | Blog layouts |
| **Tablet Portrait** | 768px | Mobile menu | 2 columns | Tablets vertical |
| **Medium** | 782px | Mobile menu | 2 columns | WP adminbar |
| **Large** | 960px | Mobile menu | 3 columns | WP sidebar fold |
| **Tablet Landscape** | 1024px | **Desktop menu** | 3 columns | Desktop menu switch |
| **XLarge** | 1080px | Desktop menu | 3 columns | HD laptops |
| **Wide** | 1280px | Desktop menu | 4 columns | Wide desktops |
| **Desktop** | 1440px+ | Desktop menu | 4 columns | Standard desktop |
| **XHuge** | 1920px+ | Desktop menu | 5 columns | Ultra-wide |

**Note:** Desktop menu becomes visible at **1024px** (Tablet Landscape).
```

**Verification:**
- [ ] Guidelines.md breakpoint table updated
- [ ] WordPress context column added
- [ ] Desktop menu switch clearly noted (1024px)

---

## Phase 4: Testing & Validation

**Estimated Time:** 1 hour  
**Priority:** CRITICAL

### Task 4.1: Visual Regression Testing

**Status:** ❌ NOT STARTED

Test all key templates at every new breakpoint:

**Breakpoints to test:**
- [ ] 280px (zoomed-in)
- [ ] 320px (mobile compact)
- [ ] 480px (mobile)
- [ ] 600px (small)
- [ ] 640px (editorial)
- [ ] 768px (tablet portrait)
- [ ] 782px (medium/adminbar)
- [ ] 960px (large/admin sidebar)
- [ ] 1024px (tablet landscape)
- [ ] 1080px (xlarge)
- [ ] 1280px (wide)
- [ ] 1440px (desktop)
- [ ] 1920px (xhuge)

**Templates to test:**
- [ ] Front page (`/`)
- [ ] Services landing (`/services`)
- [ ] Blog index (`/insights`) - uses 640px heavily
- [ ] Portfolio archive (`/work`) - uses 640px
- [ ] Single post (sidebar at 1024px)
- [ ] Contact page
- [ ] Team page

**Testing method:**
1. Open browser dev tools
2. Set viewport width to each breakpoint
3. Verify layout matches expected grid columns
4. Check for horizontal scroll
5. Verify navigation switch (mobile → desktop at 1024px)
6. Check touch target sizes (minimum 44px at 280px)

### Task 4.2: WordPress Adminbar Testing

**Status:** ❌ NOT STARTED

Test WordPress-specific breakpoints (requires WordPress environment):

- [ ] Test at 781px - verify mobile adminbar doesn't affect header
- [ ] Test at 782px - verify desktop adminbar (46px) offsets sticky header
- [ ] Test at 959px - verify admin sidebar behavior
- [ ] Test at 960px - verify admin sidebar auto-fold

**Note:** May require staging WordPress environment for accurate testing.

### Task 4.3: Accessibility Testing

**Status:** ❌ NOT STARTED

Test browser zoom compliance (WCAG 1.4.4):

- [ ] Set browser zoom to 100% (baseline)
- [ ] Set browser zoom to 200% (should trigger ~640px breakpoint)
- [ ] Set browser zoom to 300% (should trigger ~480px breakpoint)
- [ ] Set browser zoom to 400% (should trigger 280px breakpoint)

**Verify:**
- [ ] No horizontal scroll at any zoom level
- [ ] All touch targets minimum 44×44px at 400% zoom
- [ ] Text remains readable (no truncation)
- [ ] Layouts degrade gracefully (single column at 400% zoom)

---

## Phase 5: Update Task List

**Estimated Time:** 30 minutes  
**Priority:** MEDIUM

### Task 5.1: Update `/tasks/task-list.md`

**Status:** ❌ NOT STARTED

Add completed breakpoint expansion tasks to general task list.

**Entry to add:**

```markdown
## Design System

### Breakpoint System Expansion

**Status:** ✅ COMPLETE  
**Date Completed:** [DATE]  
**Report:** `/reports/2026-03/breakpoint-expansion-audit.md`  
**Tasks:** `/tasks/breakpoint-expansion-tasks.md`

**Summary:**
Expanded LSX Design breakpoint system from 5 to 12 breakpoints with WordPress alignment and WCAG accessibility support.

**Changes:**
- Added 8 new breakpoints (280px, 600px, 640px, 782px, 960px, 1080px, 1280px, 1920px)
- Migrated 420px → 480px
- Added WordPress adminbar support (782px)
- Added WordPress admin sidebar support (960px)
- Added WCAG zoom support (280px)
- Added ultra-wide display support (1920px)
- Updated documentation (Guidelines.md, responsive.md)

**Files Changed:**
- `/src/styles/theme-base.css`
- `/src/styles/responsive.css`
- `/guidelines/design-tokens/responsive.md`
- `/guidelines/Guidelines.md`
```

**Verification:**
- [ ] Task list entry added
- [ ] Completion date recorded
- [ ] All changed files listed

---

## Success Criteria

**Phase 1 Complete:**
- [x] All 10 new breakpoint variables defined in `theme-base.css`
- [x] Comments explain purpose of each breakpoint
- [x] 420px updated to 480px

**Phase 2 Complete:**
- [x] All 8 new media query sections added to `responsive.css`
- [x] WordPress-specific utilities included (782px, 960px)
- [x] Accessibility utilities included (280px)
- [x] Ultra-wide optimizations included (1920px)
- [x] 420px → 480px migration complete

**Phase 3 Complete:**
- [x] `responsive.md` updated with new breakpoints
- [x] WordPress compatibility section added
- [x] Accessibility section added
- [x] `Guidelines.md` breakpoint table updated

**Phase 4 Complete:**
- [x] All templates tested at all new breakpoints
- [x] WordPress adminbar tested (if possible)
- [x] Accessibility zoom tested (100%-400%)
- [x] No visual regressions found

**Phase 5 Complete:**
- [x] Task list updated with completion entry

---

## Rollback Plan

If issues are discovered after implementation:

1. **Revert `theme-base.css`** to previous version (remove new variables)
2. **Revert `responsive.css`** to previous version (remove new media queries)
3. **Revert documentation** to previous version
4. **Git reset** to commit before breakpoint expansion

**Backup locations:**
- Git history: `git log --oneline -- src/styles/theme-base.css`
- Git revert: `git revert [commit-hash]`

---

## Notes

- **640px breakpoint:** Already in use (12 instances) but undocumented. Now documented as `--breakpoint-editorial`.
- **782px breakpoint:** WordPress-specific. Use only for adminbar-related adjustments.
- **960px breakpoint:** WordPress-specific. Use only for admin sidebar-related adjustments.
- **1920px breakpoint:** New ultra-wide support. Consider max-width for readability.

---

**Task List Status:** ✅ COMPLETE (Created)  
**Implementation Status:** ❌ NOT STARTED  
**Next Action:** Begin Phase 1 - Add new breakpoint variables