# Phase 3 Step 3 Task 3.1: Critical CSS Extraction Plan

**Date:** March 6, 2026  
**Phase:** Phase 3 Step 3 Task 3.1  
**Status:** 📋 **EXTRACTION PLAN**  
**Duration:** 4-6 hours estimated

---

## Objective

Extract and isolate critical CSS (~7-10KB gzipped) that renders above-the-fold content instantly. This CSS will be inlined in the HTML `<head>` for immediate availability, eliminating render-blocking CSS for initial page load.

**Expected Impact:**
- +0.3-0.5s FCP improvement
- +2-3 Lighthouse points
- Instant above-the-fold rendering
- Zero FOUC (Flash of Unstyled Content)

---

## Critical CSS Definition

**Critical CSS** = CSS required to render above-the-fold content (visible without scrolling) on initial page load.

**Characteristics:**
- Required for hero section
- Required for site header
- Required for navigation
- Required for page title
- Required for core layout
- Required for typography
- NO below-the-fold content
- NO interactive states (hover, focus - defer these)
- NO animations (defer to non-critical)

---

## Critical CSS Categories

### Category 1: CSS Reset & Base Styles (Priority: P0)

**Purpose:** Core browser normalization and base element styles

**Includes:**
- CSS reset (box-sizing, margin, padding)
- Base HTML/body styles
- Base link styles (no hover states)
- Focus-visible styles (accessibility)

**Estimated Size:** ~1-2KB

**Source Files:**
- `/src/styles/reset.css` (full file)
- `/src/styles/base.css` (core only, no utilities)

**Extraction Method:** Include entire reset.css, extract base styles from base.css

---

### Category 2: CSS Variables & Theme (Priority: P0)

**Purpose:** Design system tokens required for all styling

**Includes:**
- All CSS variables from theme-base.css
- Light mode theme variables (theme-light.css)
- Dark mode variables loaded via media query
- Typography variables (fonts, sizes, weights)
- Color variables (semantic colors)
- Spacing variables (--spacing-*)
- Border radius variables (--radius*)

**Estimated Size:** ~2-3KB

**Source Files:**
- `/src/styles/theme-base.css` (full file)
- `/src/styles/theme-light.css` (full file)
- `/src/styles/theme-dark.css` (media query prefers-color-scheme: dark)

**Extraction Method:** Include all theme files (these ARE critical)

**CRITICAL RULE:** All CSS variables MUST be in critical CSS because all other styles depend on them!

---

### Category 3: Site Header & Navigation (Priority: P1)

**Purpose:** Render site header and navigation instantly

**Includes:**
- `.site-header` container
- `.site-header__inner` layout
- Logo styles
- Primary navigation (desktop + mobile)
- Mobile menu button
- NO hover states (defer to non-critical)
- NO animations (defer to non-critical)

**Estimated Size:** ~2-3KB

**Source Files:**
- `/src/styles/components/site-header.css` (core layout only)
- `/src/styles/components/navigation.css` (core layout only)

**Extraction Criteria:**
- Include: Base layout, positioning, typography
- Exclude: Hover states, animations, transitions, focus styles (except focus-visible for accessibility)

---

### Category 4: Hero Section (Priority: P1)

**Purpose:** Render hero section (most common above-the-fold content)

**Includes:**
- `.hero` container
- `.hero__content` layout
- `.hero__title` typography
- `.hero__subtitle` typography
- `.hero__cta` button (base state only)
- Background styles
- NO animations (defer to non-critical)

**Estimated Size:** ~1-2KB

**Source Files:**
- `/src/styles/patterns/hero-pattern.css` (core layout only)

**Extraction Criteria:**
- Include: Layout, typography, basic button styles
- Exclude: Animations, transitions, hover states

---

### Category 5: Typography (Priority: P1)

**Purpose:** Render text content immediately with correct styling

**Includes:**
- Heading styles (h1-h6 base styles)
- Paragraph styles (base only)
- Font loading (font-display: swap)
- Line-height, letter-spacing
- Font weight definitions

**Estimated Size:** ~1KB

**Source Files:**
- `/src/styles/typography.css` (core only)
- `/src/styles/fonts.css` (font-face declarations)

**Extraction Criteria:**
- Include: Base typography, font-face declarations
- Exclude: Decorative styles, special cases

---

### Category 6: Layout & Container (Priority: P1)

**Purpose:** Provide core layout structure

**Includes:**
- Container classes (`.container`, `.fluid-container`)
- Max-width utilities (`.wp-max-w-*`)
- Padding utilities (fluid-px)
- Core grid layout (no complex patterns)

**Estimated Size:** ~0.5-1KB

**Source Files:**
- `/src/styles/utilities.css` (container utilities only)
- `/src/styles/components.css` (container styles only)

**Extraction Criteria:**
- Include: Container, max-width, basic padding
- Exclude: Complex grid patterns, responsive utilities

---

### Category 7: Buttons (Priority: P2)

**Purpose:** Render CTA buttons in hero (base state only)

**Includes:**
- `.btn` base styles
- `.btn--primary` (base state)
- `.btn--secondary` (base state)
- Typography, padding, border-radius
- NO hover states (defer to non-critical)
- NO focus styles except focus-visible

**Estimated Size:** ~0.5KB

**Source Files:**
- `/src/styles/components/button.css` (base state only)

**Extraction Criteria:**
- Include: Base button styles
- Exclude: Hover, active, disabled states

---

### Category 8: Accessibility (Priority: P0)

**Purpose:** Ensure accessibility features work immediately

**Includes:**
- Focus-visible styles (keyboard navigation)
- Screen reader utilities (.sr-only)
- Skip-to-content link
- Reduced motion support (base)

**Estimated Size:** ~0.3KB

**Source Files:**
- `/src/styles/accessibility.css` (focus-visible, sr-only)

**Extraction Criteria:**
- Include: Focus-visible, sr-only, skip-link
- Exclude: Complex focus management (defer)

---

## Non-Critical CSS (Deferred)

**These CSS categories will be deferred to non-critical bundles:**

### Defer to Non-Critical:
1. **Hover States** — All `:hover` pseudo-classes
2. **Focus States** — All `:focus` pseudo-classes (except :focus-visible for accessibility)
3. **Animations** — All `@keyframes` and `animation` properties
4. **Transitions** — All `transition` properties
5. **Below-Fold Patterns** — Testimonials, FAQ, Footer, Related Content
6. **Complex Grids** — Multi-column grids, masonry layouts
7. **Forms** — Form styles (rarely above-the-fold)
8. **Tables** — Table styles (rarely above-the-fold)
9. **Media Queries** — Responsive breakpoints (except mobile-first base)
10. **Route-Specific** — Service pages, blog posts, portfolio (loaded via bundles)

---

## Extraction Strategy

### Phase 1: Identify Critical Selectors (Manual)

**Method:** Review each CSS file and mark critical selectors

**Process:**
1. Open CSS file
2. Identify selectors used above-the-fold
3. Mark as `/* CRITICAL */` or `/* NON-CRITICAL */`
4. Separate into two sections

**Example:**
```css
/* CRITICAL: Above-the-fold hero */
.hero {
  display: flex;
  flex-direction: column;
}

/* NON-CRITICAL: Hover animation */
.hero:hover {
  transform: scale(1.02);
}
```

### Phase 2: Extract to critical.css

**Method:** Copy critical selectors into new file

**Process:**
1. Create `/src/styles/critical.css`
2. Copy all marked critical selectors
3. Organize by category (reset, theme, header, hero, etc.)
4. Remove comments and whitespace
5. Minify (inline in HTML)

### Phase 3: Verify & Measure

**Method:** Test critical CSS in isolation

**Process:**
1. Inline critical.css in HTML head
2. Load non-critical CSS asynchronously
3. Test all routes for FOUC
4. Measure bundle sizes
5. Verify design system compliance

---

## Design System Compliance Checklist

**CRITICAL REQUIREMENTS:**

- [ ] ✅ All colors use `var(--primary)`, `var(--foreground)`, etc.
- [ ] ✅ All fonts use `var(--font-primary)` or `var(--font-secondary)`
- [ ] ✅ All spacing uses `var(--spacing-*)` tokens
- [ ] ✅ All border-radius uses `var(--radius*)` tokens
- [ ] ✅ NO hardcoded hex colors
- [ ] ✅ NO hardcoded font names (e.g., 'Lexend, sans-serif')
- [ ] ✅ NO hardcoded px values for spacing
- [ ] ✅ Dark mode support via CSS variables

**Why This Matters:**
Critical CSS MUST include all CSS variables because they are dependencies for all other styles. Without variables, styles will break.

---

## File Structure

**New Files to Create:**

```
src/styles/
├── critical.css                 # Critical CSS (extracted)
└── non-critical.css             # Non-critical CSS (deferred, or use existing bundles)
```

**Existing Files to Update:**

```
public/index.html                # Inline critical.css in <head>
```

---

## Extraction Checklist

### Category 1: CSS Reset & Base ✅
- [ ] Extract reset.css (full file)
- [ ] Extract base.css (core only)
- [ ] Verify box-sizing, margin, padding reset

### Category 2: CSS Variables & Theme ✅
- [ ] Extract theme-base.css (full file)
- [ ] Extract theme-light.css (full file)
- [ ] Add theme-dark.css with media query
- [ ] Verify all CSS variables included

### Category 3: Site Header & Navigation ⏳
- [ ] Extract .site-header container
- [ ] Extract .site-header__inner layout
- [ ] Extract logo styles (base)
- [ ] Extract navigation layout (base)
- [ ] EXCLUDE hover states, animations

### Category 4: Hero Section ⏳
- [ ] Extract .hero container
- [ ] Extract .hero__content layout
- [ ] Extract .hero__title typography
- [ ] Extract button base styles
- [ ] EXCLUDE animations, hover states

### Category 5: Typography ⏳
- [ ] Extract h1-h6 base styles
- [ ] Extract paragraph base styles
- [ ] Extract font-face declarations
- [ ] EXCLUDE decorative styles

### Category 6: Layout & Container ⏳
- [ ] Extract .container, .fluid-container
- [ ] Extract max-width utilities
- [ ] Extract padding utilities
- [ ] EXCLUDE complex grids

### Category 7: Buttons ⏳
- [ ] Extract .btn base styles
- [ ] Extract .btn--primary, .btn--secondary
- [ ] EXCLUDE hover, active, disabled states

### Category 8: Accessibility ⏳
- [ ] Extract focus-visible styles
- [ ] Extract .sr-only utility
- [ ] Extract skip-link styles

---

## Testing Plan

### Test 1: FOUC Check
1. Clear browser cache
2. Throttle network to "Slow 3G"
3. Navigate to homepage
4. ✅ Verify no unstyled flash
5. ✅ Verify hero renders immediately

### Test 2: Bundle Size
1. Measure critical.css size (uncompressed)
2. Measure critical.css size (gzipped)
3. ✅ Target: 7-10KB gzipped
4. ✅ Acceptable range: 5-12KB gzipped

### Test 3: Performance
1. Run Lighthouse before critical CSS
2. Run Lighthouse after critical CSS
3. ✅ Target: +0.3-0.5s FCP improvement
4. ✅ Target: +2-3 Lighthouse points

### Test 4: All Routes
1. Test critical CSS on 10 sample routes
2. Verify above-the-fold renders correctly
3. ✅ No layout breaks
4. ✅ No missing styles

---

## Expected Outcomes

### Bundle Sizes

**Before Critical CSS:**
- Homepage: 60KB core CSS (all loaded)

**After Critical CSS:**
- Inline critical: ~7-10KB (in HTML head)
- Deferred non-critical: ~50-53KB (loaded async)
- **User perceives:** Instant above-the-fold rendering

### Performance Improvements

| Metric | Before | After | Improvement |
|--------|--------|-------|-------------|
| FCP (Desktop) | 0.9s | 0.5-0.6s | +0.3-0.4s |
| FCP (Mobile) | 1.1s | 0.7-0.8s | +0.3-0.4s |
| Lighthouse (Desktop) | 93 | 95-96 | +2-3 points |
| Lighthouse (Mobile) | 90 | 92-94 | +2-4 points |

### User Experience

- ✅ Instant above-the-fold rendering
- ✅ Zero FOUC (Flash of Unstyled Content)
- ✅ Immediate navigation visibility
- ✅ Immediate hero visibility
- ✅ Progressive enhancement (non-critical loads after)

---

## Timeline

**Task 3.1 Duration:** 4-6 hours

**Breakdown:**
- Phase 1: Identify critical selectors (2-3 hours)
- Phase 2: Extract to critical.css (1-2 hours)
- Phase 3: Verify & measure (1 hour)

**Next Tasks:**
- Task 3.2: Inline critical CSS in HTML (4-6 hours)
- Task 3.3: Verify critical CSS implementation (4 hours)

---

## Success Criteria

**Task 3.1 complete when:**
- [ ] ✅ critical.css file created
- [ ] ✅ Size: 7-10KB gzipped
- [ ] ✅ All CSS variables included
- [ ] ✅ All above-the-fold styles included
- [ ] ✅ No hover/animation styles included
- [ ] ✅ 100% design system compliance
- [ ] ✅ Documentation complete

---

**Task 3.1 Status:** 📋 **READY TO START**  
**Next Action:** Begin Phase 1 (Identify critical selectors)  
**Expected Duration:** 4-6 hours

🎯 **READY TO EXTRACT CRITICAL CSS!** 🎯
