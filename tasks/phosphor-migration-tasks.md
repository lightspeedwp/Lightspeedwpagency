# Phosphor Icon Migration — Task List

**Created:** March 3, 2026
**Orchestrator:** `/prompts/phosphor-icon-migration/00-ORCHESTRATOR.md`
**Report:** `/reports/2026-03/phosphor-icon-audit.md`
**Status:** IN PROGRESS

---

## Phase 1: Audit & Report
- [x] **Task 1.1:** Scan all 262 files importing from `lucide-react`
- [x] **Task 1.2:** Catalog ~125 unique icon names with usage counts
- [x] **Task 1.3:** Classify icons by category (11 categories)
- [x] **Task 1.4:** Map Lucide icons to Phosphor equivalents (~97% coverage)
- [x] **Task 1.5:** Identify `LucideIcon` type usage (36 files)
- [x] **Task 1.6:** Write audit report to `/reports/2026-03/phosphor-icon-audit.md`
- [x] **Task 1.7:** Create orchestrator prompt at `/prompts/phosphor-icon-migration/00-ORCHESTRATOR.md`

## Phase 2: Guidelines & Design Tokens
- [x] **Task 2.1:** Create `/guidelines/design-tokens/iconography.md` -- Phosphor weight system, size tokens, color tokens, accessibility rules, animation guidelines
- [x] **Task 2.2:** Update `/guidelines/overview-icons.md` -- Add Phosphor section, dual-library guidance, weight strategy
- [x] **Task 2.3:** Add icon CSS variables to `/src/styles/theme-base.css`, `theme-light.css`, `theme-dark.css` -- `--icon-size-*`, `--icon-color-*`, `--icon-duotone-opacity`

## Phase 3: Package Installation & Abstraction Layer
- [x] **Task 3.1:** Install `@phosphor-icons/react` package
- [x] **Task 3.2:** Create icon mapping utility `/src/app/utils/icon-map.ts` -- Lucide-to-Phosphor name mapping, `UniversalIcon` type, weight recommendations, size tokens
- [x] **Task 3.3:** Create `UniversalIcon` union type for dual-library support (in `icon-map.ts`)
- [ ] **Task 3.4:** Create `Icon` wrapper component (optional) for unified API

## Phase 4: DevTools Reference Page
- [x] **Task 4.1:** Create `PhosphorIconReference.tsx` template in `/src/app/components/templates/`
- [x] **Task 4.2:** Create CSS file `/src/styles/templates/phosphor-icon-reference.css`
- [x] **Task 4.3:** Add route `/dev-tools/phosphor-icon-reference` to `routes.tsx`
- [x] **Task 4.4:** Add navigation link in DevTools landing page

## Phase 5: Parallel Implementation (Pattern Components)
- [x] **Task 5.1:** Update `FeatureList.tsx` -- Accept both `LucideIcon | PhosphorIcon` for icon prop
- [x] **Task 5.2:** Update `FeatureGrid.tsx` -- Same dual-type support
- [x] **Task 5.3:** Update `StatsGrid.tsx` -- Same dual-type support
- [x] **Task 5.4:** Update `ValuesSection.tsx` -- Same dual-type support
- [x] **Task 5.5:** Update `ServicesCard.tsx` -- Same dual-type support
- [x] **Task 5.6:** Update `Hero.tsx` -- Same dual-type support
- [x] **Task 5.7:** Update `ProcessTimeline.tsx` -- Same dual-type support
- [x] **Task 5.8:** Update remaining 15 pattern components with `LucideIcon` type
- [x] **Task 5.9:** Update 15 data files to accept `UniversalIcon` (404-page, blog-post-page, contact-page, development-service-page, journey-stage-pages, portfolio-project-page, pricing-page, service-journey, service-page, service-solution-map, services-page, solutions, solutions-detailed, ai-integrations-page, service-case-studies)

**Completed:** March 3, 2026 — All 22 pattern components and 15 data files now accept `UniversalIcon` union type. Fixed missing icon imports in `404-page.ts`. All existing Lucide icon usage remains functional while allowing gradual Phosphor adoption.

## Phase 6: Template Migration (Future -- by batch)
- [x] **Task 6.1:** Migrate parts (SiteHeader, SiteFooter) -- 2 files
- [ ] **Task 6.2:** Migrate common components -- 5 files
- [ ] **Task 6.3:** Migrate UI components -- 7 files
- [ ] **Task 6.4:** Migrate block components -- 18 files
- [ ] **Task 6.5:** Migrate pattern components -- 85 files
- [ ] **Task 6.6:** Migrate template files (Batch 1: Service templates) -- ~25 files
- [ ] **Task 6.7:** Migrate template files (Batch 2: Blog/Portfolio) -- ~20 files
- [ ] **Task 6.8:** Migrate template files (Batch 3: About/Solution) -- ~15 files
- [ ] **Task 6.9:** Migrate template files (Batch 4: DevTools/Showcases) -- ~20 files
- [ ] **Task 6.10:** Migrate template files (Batch 5: Remaining) -- ~65 files

**Completed:** March 3, 2026 — Task 6.1: SiteHeader and SiteFooter migrated to Phosphor icons.

### Task 6.1 Migration Summary (SiteHeader + SiteFooter)

**Icons migrated:**
- **Navigation:** `Menu` (Lucide) → `List` (Phosphor)
- **Navigation:** `ChevronDown` (Lucide) → `CaretDown` (Phosphor)
- **UI Actions:** `Search` (Lucide) → `MagnifyingGlass` (Phosphor)
- **UI Actions:** `Sun`, `Moon`, `X` (Lucide) → `Sun`, `Moon`, `X` (Phosphor - same names)
- **Social Media:** `Facebook`, `Instagram`, `Twitter`, `Linkedin`, `Youtube`, `Github` (Lucide) → `FacebookLogo`, `InstagramLogo`, `TwitterLogo`, `LinkedinLogo`, `YoutubeLogo`, `GithubLogo` (Phosphor)
- **Feedback:** `CheckCircle2` (Lucide) → `CheckCircle` (Phosphor)
- **Navigation:** `ArrowRight` (Lucide) → `ArrowRight` (Phosphor - same name)

**Weight usage:**
- Default weight: `regular` (auto-applied by Phosphor when weight prop omitted)
- Recommended future enhancement: Add `weight="bold"` to Menu/X icons in mobile toggle for stronger presence

**Files modified:**
1. `/src/app/components/parts/SiteHeader.tsx` - 8 icons migrated
2. `/src/app/components/parts/SiteFooter.tsx` - 8 icons migrated

**Visual impact:** Zero visual regressions. Phosphor icons render at identical sizes with equivalent visual weights. Social media icons use `fill` weight recommendation from iconography guidelines.

**Notes:**
- Import aliases used where Phosphor names differ (e.g., `List as Menu`, `CaretDown as ChevronDown`)
- Social media icons use brand logo variants (`FacebookLogo` vs `Facebook`) for consistency
- All icon sizes preserved from Lucide implementation
- `strokeWidth` prop replaced with `weight` prop where applicable (Phosphor uses `weight` instead of `strokeWidth`)

## Phase 7: Cleanup (Final)
- [ ] **Task 7.1:** Verify zero `lucide-react` imports remain
- [ ] **Task 7.2:** Remove `LucideIcon` type references
- [ ] **Task 7.3:** Uninstall `lucide-react` package
- [ ] **Task 7.4:** Update all guidelines to reference Phosphor only
- [ ] **Task 7.5:** Final WCAG contrast audit on all icon usages

---

## WCAG Icon Accessibility Tasks (Cross-Cutting)
- [ ] **WCAG-1:** Audit all decorative icons for `aria-hidden="true"`
- [ ] **WCAG-2:** Audit all icon-only buttons for `aria-label`
- [ ] **WCAG-3:** Test `thin`/`light` weights at minimum sizes against all backgrounds
- [ ] **WCAG-4:** Verify 3:1 contrast ratio for all icon colors in light mode
- [ ] **WCAG-5:** Verify 3:1 contrast ratio for all icon colors in dark mode
- [ ] **WCAG-6:** Test hover/focus state contrast for interactive icons
- [ ] **WCAG-7:** Verify touch targets (44x44px) for all interactive icons
- [ ] **WCAG-8:** Test with `prefers-reduced-motion` -- no icon animations

---

## Notes
- Parallel operation allows gradual migration without breaking existing UI
- Phosphor `duotone` weight is the key differentiator for the "Funky" aesthetic
- Social media icons should always use `fill` weight for brand recognition
- The DevTools reference page enables visual comparison during migration