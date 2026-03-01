# Phase 7: Performance and Accessibility

**Status:** PENDING
**Dependencies:** Phase 3 (design system compliance)
**Estimated Effort:** 17-25 hours
**Populated From:** Report 08

---

## Critical Tasks (Must Complete)

- [ ] **7.1 Implement route-level code splitting** — Convert all template imports in `routes.tsx` from static to `React.lazy()` with Suspense fallbacks. Priority order: dev-tools (16), media (12), WooCommerce (4), tours (2). (Audit 08) — *Note: Also listed in Phase 1 for urgency*
- [ ] **7.2 CSS critical path optimisation** — Move pattern CSS imports from global `index.css` to component-level imports. Keep only core system CSS globally (~13 imports). (Audit 08)
- [ ] **7.3 Audit reduced motion in micro-interactions.css and advanced-animations.css** — Verify `prefers-reduced-motion` guards exist for all animations. Fix any gaps. (Audit 08)

## High Priority (Should Complete)

- [ ] **7.4 Verify focus-not-obscured (WCAG 2.2 2.4.11)** — Test that sticky header doesn't cover focused elements during keyboard Tab navigation. Add scroll-margin-top if needed. (Audit 08)
- [ ] **7.5 Remove unused CSS files from global bundle** — Widget blocks (Calendar, Archives, RSS, Latest Comments) and WooCommerce blocks may not be needed for launch. (Audit 08)
- [ ] **7.6 Add Suspense boundaries with Skeleton fallbacks** — Every lazy-loaded route needs a loading state. Use existing Skeleton component. (Audit 08)

## Medium Priority (Nice to Have)

- [ ] **7.7 Implement image lazy loading audit** — Verify `loading="lazy"` on all below-fold images across templates. (Audit 08)
- [ ] **7.8 Add performance budget CI checks** — Automated checks per template type (homepage < 500KB, systems < 400KB, blog < 350KB). (Audit 08)
- [ ] **7.9 Create CSS audit report** — Identify and document unused CSS rules for removal. (Audit 08)
- [ ] **7.10 Add dateModified tracking to blog posts** — Required for Article schema and performance monitoring. (Audit 07, 08)

## Implementation Notes

- Code splitting is the single highest-impact performance improvement — it reduces initial bundle from 107 templates to ~10.
- CSS critical path is the second priority — 219+ CSS imports all load on first page visit.
- Reduced motion audit should verify compliance, not rewrite — most files already have guards.
- Focus-not-obscured is a WCAG 2.2 requirement that many sites miss — test with `scroll-margin-top: var(--header-height)` on focusable elements.
