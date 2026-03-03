# Phosphor Icon Migration — Orchestrator Prompt

**Version:** 1.0
**Created:** March 3, 2026
**Type:** Multi-Phase Migration Orchestrator
**Status:** ACTIVE

---

## 1. MISSION STATEMENT

Audit all React Lucide icon usage across the LSX Design prototype, implement React Phosphor Icons (`@phosphor-icons/react`) in parallel, create an iconography guideline, build a DevTools reference page, and produce a phased migration plan to eventually replace Lucide with Phosphor entirely.

---

## 2. SCOPE

### In Scope
- Full audit of all `lucide-react` imports across 262+ files
- Icon-to-icon mapping table (Lucide name -> Phosphor equivalent)
- Phosphor icon weight strategy (thin, light, regular, bold, fill, duotone)
- Iconography design token guidelines (`/guidelines/design-tokens/iconography.md`)
- DevTools page: Phosphor Icon Reference (`/dev-tools/phosphor-icon-reference`)
- WCAG AA/AAA contrast audit for icon usage (colors, sizes, hover states, dark/light mode)
- Phased migration task list
- Abstraction layer (`IconProvider`) for dual-library support

### Out of Scope
- Changing icon selections (semantic meaning) -- only swap library source
- Redesigning templates or layouts
- Removing Lucide immediately (parallel operation first)

---

## 3. EXECUTION PHASES

### Phase 1: Audit & Report (This Prompt)
1. **Scan** all 262 files importing from `lucide-react`
2. **Catalog** every unique icon name and its usage count
3. **Classify** usage by category: navigation, feedback, social, content, decorative, data
4. **Identify** `LucideIcon` type usage (prop interfaces that accept icon components)
5. **Map** each Lucide icon to its Phosphor equivalent (or flag gaps)
6. **Write report** to `/reports/2026-03/phosphor-icon-audit.md`

### Phase 2: Guidelines & Design Tokens
1. **Create** `/guidelines/design-tokens/iconography.md` covering:
   - Phosphor weight system (thin/light/regular/bold/fill/duotone)
   - When to use each weight (UI context matrix)
   - Size tokens (16px, 20px, 24px, 28px, 32px)
   - Color tokens (CSS variable mapping)
   - Accessibility requirements (min size, contrast, aria-labels)
   - Animation guidelines (hover, loading, transition)
   - Dark mode / light mode icon color rules
2. **Update** `/guidelines/overview-icons.md` to reference Phosphor

### Phase 3: Abstraction Layer
1. **Create** `IconProvider` component that abstracts icon rendering
2. **Define** `IconName` type union (all valid icon names)
3. **Support** both Lucide and Phosphor via a `provider` prop or config
4. **Enable** global weight/size defaults via CSS variables

### Phase 4: DevTools Reference Page
1. **Create** PhosphorIconReference DevTools page
2. **Display** all icons needed for migration with:
   - Phosphor name + all 6 weights side-by-side
   - Lucide equivalent for comparison
   - Copy-to-clipboard import statement
   - Search and filter by category
   - Size and color customization controls

### Phase 5: Parallel Implementation
1. **Install** `@phosphor-icons/react` package
2. **Create** icon mapping utility (`/src/app/utils/icon-map.ts`)
3. **Update** pattern components to accept `PhosphorIcon` type alongside `LucideIcon`
4. **Test** dual rendering in DevTools page

### Phase 6: Migration Execution (Future)
1. **Migrate** files in priority order: patterns -> common -> parts -> templates
2. **Remove** Lucide imports file-by-file
3. **Update** `LucideIcon` type references to Phosphor `Icon` type
4. **Uninstall** `lucide-react` when 100% migrated

---

## 4. FILE LOCATIONS

| Deliverable | Location |
|---|---|
| **Orchestrator prompt** | `/prompts/phosphor-icon-migration/00-ORCHESTRATOR.md` |
| **Audit report** | `/reports/2026-03/phosphor-icon-audit.md` |
| **Task list** | `/tasks/phosphor-migration-tasks.md` |
| **Iconography guideline** | `/guidelines/design-tokens/iconography.md` |
| **Icon overview update** | `/guidelines/overview-icons.md` |
| **Icon mapping utility** | `/src/app/utils/icon-map.ts` |
| **DevTools page** | `/src/app/components/templates/PhosphorIconReference.tsx` |
| **DevTools CSS** | `/src/styles/templates/phosphor-icon-reference.css` |

---

## 5. ICON USAGE SUMMARY (Pre-Audit)

**Total files importing Lucide:** 262
**Breakdown by directory:**
- `/templates/` — 145 files
- `/patterns/` — 85 files
- `/blocks/` — 18 files
- `/ui/` — 7 files
- `/common/` — 5 files
- `/parts/` — 2 files (SiteHeader, SiteFooter)

**Top 20 icons by frequency:**
| Lucide Icon | Count | Category |
|---|---|---|
| ArrowRight | 42 | Navigation |
| LucideIcon (type) | 37 | Type Reference |
| Check | 34 | Feedback |
| Calendar | 33 | Content Meta |
| Clock | 26 | Content Meta |
| CheckCircle | 17 | Feedback |
| Star | 15 | Rating |
| Users | 14 | Content |
| Eye | 14 | UI Action |
| Zap | 13 | Decorative |
| X | 13 | UI Action (Close) |
| TrendingUp | 13 | Data |
| ChevronRight | 12 | Navigation |
| Award | 11 | Decorative |
| Search | 10 | UI Action |
| User | 10 | Content |
| ExternalLink | 10 | Navigation |
| ChevronDown | 10 | Navigation |
| AlertTriangle | 10 | Feedback |
| FileText | 9 | Content |

---

## 6. PHOSPHOR ICON FEATURES TO LEVERAGE

### 6 Weight Variants
| Weight | Use Case | Visual Style |
|---|---|---|
| **thin** | Decorative, background patterns | Hairline strokes |
| **light** | Body text companions, metadata | Delicate strokes |
| **regular** | Default UI icons, navigation | Standard weight |
| **bold** | CTAs, emphasis, active states | Heavy strokes |
| **fill** | Active/selected states, solid indicators | Filled shapes |
| **duotone** | Hero sections, feature cards, marketing | Two-tone with opacity |

### Unique Advantage: Duotone
Phosphor's `duotone` weight renders a two-tone icon where the secondary layer has reduced opacity. This maps perfectly to the LSX "Funky" aesthetic:
- Hero section icons with subtle depth
- Feature card icons with visual richness
- Service page decorative elements

### CSS Customization
```css
/* Phosphor supports CSS targeting of icon layers */
.ph-icon { color: var(--primary); }
.ph-icon .ph-duotone-secondary { opacity: 0.2; color: var(--accent); }
```

---

## 7. WCAG COMPLIANCE REQUIREMENTS

### Icon Accessibility Checklist
- [ ] Minimum touch target: 44x44px (interactive icons)
- [ ] Minimum visual size: 16x16px (decorative), 20x20px (interactive)
- [ ] Color contrast: 3:1 minimum against background (WCAG 2.1 1.4.11)
- [ ] `aria-hidden="true"` on decorative icons
- [ ] `aria-label` or adjacent text for meaningful icons
- [ ] Focus-visible ring on interactive icon buttons
- [ ] No information conveyed by color alone
- [ ] Icon weight must not reduce contrast below 3:1 (avoid `thin` on low-contrast backgrounds)
- [ ] Dark mode icon colors must meet same contrast ratios
- [ ] Hover/focus state contrast must be maintained
- [ ] Reduced motion: no icon animations without `prefers-reduced-motion` guard

### Weight Accessibility Rules
| Weight | Min Size | Contrast Requirement | Notes |
|---|---|---|---|
| thin | 24px | 4.5:1 | Hairline strokes need extra contrast |
| light | 20px | 3:1 | Suitable for most contexts |
| regular | 16px | 3:1 | Default, safest option |
| bold | 16px | 3:1 | High visibility |
| fill | 16px | 3:1 | Highest visibility |
| duotone | 20px | 3:1 primary, 1.5:1 secondary | Secondary layer is decorative |

---

## 8. ACCEPTANCE CRITERIA

- [ ] All 120+ unique Lucide icons mapped to Phosphor equivalents
- [ ] Iconography guideline created with weight strategy
- [ ] DevTools reference page functional with search/filter
- [ ] WCAG AA contrast verified for all icon contexts
- [ ] Icon type abstraction supports both libraries
- [ ] Task list created with prioritized migration steps
- [ ] Zero visual regressions in existing components
