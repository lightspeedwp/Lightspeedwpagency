# Breakpoint System Expansion — Quick Reference

**Date:** March 2, 2026  
**Status:** READY FOR IMPLEMENTATION  
**Estimated Effort:** 4-6 hours

---

## What's Being Added

Expanding LSX Design breakpoint system from **5 to 12 breakpoints** for WordPress compatibility and accessibility.

### New Breakpoints (8 total)

| Breakpoint | Value | Purpose |
|------------|-------|---------|
| **Zoomed-In** | 280px | WCAG zoom support (400%) |
| **Mobile** | 480px | Replaces 420px (WordPress standard) |
| **Small** | 600px | Small tablets |
| **Editorial** | 640px | Blog layouts (already used, now documented) |
| **Medium** | 782px | WordPress adminbar breakpoint |
| **Large** | 960px | WordPress admin sidebar fold |
| **XLarge** | 1080px | HD laptops |
| **Wide** | 1280px | Wide desktops (already used, now documented) |
| **XHuge** | 1920px | Ultra-wide displays |

---

## Why This Matters

### WordPress Compatibility

✅ **782px adminbar** - WordPress toolbar height changes  
✅ **960px sidebar** - WordPress admin sidebar auto-folds  
✅ **Matches WordPress UI** - Breakpoints align with WordPress admin

### Accessibility

✅ **WCAG 1.4.4** - Browser zoom up to 400% supported  
✅ **280px breakpoint** - Ensures usability at extreme zoom  
✅ **44px touch targets** - Minimum size enforced

### Modern Devices

✅ **1920px ultra-wide** - Optimized for 1080p+ monitors  
✅ **1080px HD** - Optimized for HD laptop screens  
✅ **480px mobile** - Better phone support (vs 420px)

---

## Documents Created

### 1. Audit Report
**Location:** `/reports/2026-03/breakpoint-expansion-audit.md`

**Contents:**
- Current system analysis (5 breakpoints)
- Proposed system (12 breakpoints)
- Conflict resolution (420px vs 480px, 768px vs 782px)
- WordPress compatibility benefits
- Accessibility improvements
- Risk assessment
- Testing checklist

### 2. Implementation Tasks
**Location:** `/tasks/breakpoint-expansion-tasks.md`

**Contents:**
- 5 implementation phases
- 12 specific tasks with verification checklists
- Rollback plan
- Success criteria
- Testing procedures

### 3. Task List Entry
**Location:** `/tasks/task-list.md`

**Status:** Added to open tasks

---

## Implementation Phases

### Phase 1: Add Variables (1 hour)
Update `/src/styles/theme-base.css` with 10 new breakpoint variables.

### Phase 2: Update CSS (2 hours)
Add 8 new media query sections to `/src/styles/responsive.css`.  
Migrate 420px → 480px.

### Phase 3: Update Docs (1 hour)
Update `/guidelines/design-tokens/responsive.md` and `/guidelines/Guidelines.md`.

### Phase 4: Testing (1 hour)
Visual regression testing at all 12 breakpoints.  
WordPress adminbar testing (if possible).  
Accessibility zoom testing (100%-400%).

### Phase 5: Finalize (30 min)
Update task list with completion status.

---

## Quick Start

**To begin implementation:**

1. **Read the audit report:**  
   `/reports/2026-03/breakpoint-expansion-audit.md`

2. **Follow the task list:**  
   `/tasks/breakpoint-expansion-tasks.md`

3. **Start with Phase 1:**  
   Add new breakpoint variables to `theme-base.css`

---

## Key Changes Summary

### Variables Added (10)
```css
--breakpoint-zoomed-in: 280px;
--breakpoint-mobile: 480px;        /* Updated from 420px */
--breakpoint-small: 600px;
--breakpoint-editorial: 640px;     /* Documents existing usage */
--breakpoint-medium: 782px;
--breakpoint-large: 960px;
--breakpoint-xlarge: 1080px;
--breakpoint-wide: 1280px;         /* Documents existing usage */
--breakpoint-xhuge: 1920px;
```

### Media Queries Added (8)
- `@media (min-width: 280px)` - Accessibility
- `@media (min-width: 600px)` - Small tablets
- `@media (min-width: 640px)` - Editorial (documents existing)
- `@media (min-width: 782px)` - WordPress adminbar
- `@media (min-width: 960px)` - WordPress sidebar
- `@media (min-width: 1080px)` - HD laptops
- `@media (min-width: 1280px)` - Wide (documents existing)
- `@media (min-width: 1920px)` - Ultra-wide

### Migration Required
- **420px → 480px** (60px difference)
- Test layouts in 420px-479px range
- Expected instances: LOW (primarily variable definition)

---

## Documentation Updates

### New Sections in responsive.md

1. **WordPress Compatibility**
   - Adminbar breakpoint (782px)
   - Admin sidebar fold (960px)

2. **Accessibility Support**
   - Browser zoom (280px)
   - WCAG 1.4.4 compliance

### Updated Tables

- **12-breakpoint system** with WordPress context
- **CSS variables** for all new breakpoints
- **Media queries** for all new breakpoints

---

## Testing Requirements

### Visual Regression Testing
Test at **all 12 breakpoints**:
- 280px, 320px, 480px, 600px, 640px, 768px, 782px, 960px, 1024px, 1080px, 1280px, 1440px, 1920px

### Key Templates to Test
- Front page
- Services landing
- Blog index (uses 640px heavily)
- Portfolio archive (uses 640px)
- Single post (sidebar at 1024px)
- Contact page
- Team page

### WordPress Testing (if possible)
- Adminbar at 781px vs 782px
- Admin sidebar at 959px vs 960px

### Accessibility Testing
- Browser zoom: 100%, 200%, 300%, 400%
- Touch targets minimum 44px at 400% zoom
- No horizontal scroll at any zoom level

---

## Risk Assessment

### Low Risk ✅
- Adding new breakpoint variables (backward compatible)
- Adding new media queries (additive only)
- Documenting 640px (no code changes)

### Medium Risk ⚠️
- Migrating 420px → 480px (60px gap)
- Adding 782px breakpoint (close to 768px)

### Mitigation
- Test in 420px-479px range before migration
- Use 782px only for WordPress-specific adjustments
- Keep 768px as primary tablet breakpoint
- Version control for easy rollback

---

## Success Criteria

✅ All 10 new breakpoint variables defined  
✅ All 8 new media query sections added  
✅ No visual regressions on key templates  
✅ 420px successfully migrated to 480px  
✅ WordPress adminbar compatibility (782px)  
✅ WCAG 1.4.4 zoom support (280px)  
✅ Documentation updated  
✅ All tests passing

---

## Next Steps

1. ✅ Review audit report
2. ✅ Review task list
3. ❌ Begin Phase 1 (add variables)
4. ❌ Complete Phase 2 (update CSS)
5. ❌ Complete Phase 3 (update docs)
6. ❌ Complete Phase 4 (testing)
7. ❌ Complete Phase 5 (finalize)

---

**Documents:**
- **Audit Report:** `/reports/2026-03/breakpoint-expansion-audit.md`
- **Task List:** `/tasks/breakpoint-expansion-tasks.md`
- **General Tasks:** `/tasks/task-list.md`

**Estimated Total Effort:** 4-6 hours  
**Risk Level:** LOW (primarily additive changes)  
**Ready for Implementation:** YES ✅
