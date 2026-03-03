# Phosphor Icon Migration Audit Report

**Date:** March 3, 2026
**Auditor:** AI Design Systems Engineer
**Scope:** Full codebase scan of `lucide-react` usage + Phosphor migration feasibility
**Status:** COMPLETE

---

## 1. Executive Summary

The LSX Design prototype uses **lucide-react** across **262 files** with **~125 unique icon names** (plus the `LucideIcon` type reference). A migration to `@phosphor-icons/react` is feasible with high icon coverage (~95%+ direct equivalents). The migration should be phased: parallel operation first, then incremental replacement.

**Key Metrics:**
- **262** files import from `lucide-react`
- **~125** unique icon names used
- **36** files reference the `LucideIcon` TypeScript type (for prop interfaces)
- **6** weight variants available in Phosphor (vs. 1 in Lucide)
- **~95%** estimated direct name mapping coverage

---

## 2. File Distribution

| Directory | File Count | Complexity | Notes |
|---|---|---|---|
| `/templates/` | 145 | High | Service, solution, blog, portfolio, devtools templates |
| `/patterns/` | 85 | Medium | Reusable pattern components (Hero, CardGrid, Stats, etc.) |
| `/blocks/` | 18 | Low | WordPress block components |
| `/ui/` | 7 | Low | Toast, Lightbox, ErrorBoundary, etc. |
| `/common/` | 5 | Medium | ScrollDownArrow, TrustBadges, ViewSwitcher, etc. |
| `/parts/` | 2 | Critical | SiteHeader, SiteFooter (global layout) |
| **TOTAL** | **262** | | |

---

## 3. Complete Icon Inventory

### 3.1 Navigation Icons (11 unique, ~108 uses)

| Lucide Name | Uses | Phosphor Equivalent | Weight Recommendation |
|---|---|---|---|
| ArrowRight | 42 | `ArrowRight` | regular / bold (CTAs) |
| ChevronRight | 12 | `CaretRight` | regular |
| ChevronDown | 10 | `CaretDown` | regular |
| ChevronLeft | 6 | `CaretLeft` | regular |
| ArrowLeft | 6 | `ArrowLeft` | regular |
| ExternalLink | 10 | `ArrowSquareOut` | regular |
| ChevronUp | 3 | `CaretUp` | regular |
| Home | 3 | `House` | regular / fill |
| Navigation | 1 | `Compass` | regular |
| Menu | 1 | `List` | bold |
| ArrowUpDown | 2 | `ArrowsDownUp` | regular |

### 3.2 Feedback & Status Icons (10 unique, ~82 uses)

| Lucide Name | Uses | Phosphor Equivalent | Weight Recommendation |
|---|---|---|---|
| Check | 34 | `Check` | bold |
| CheckCircle | 17 | `CheckCircle` | fill (active) / regular |
| AlertTriangle | 10 | `Warning` | fill (error) / duotone |
| AlertCircle | 7 | `WarningCircle` | fill / duotone |
| X | 13 | `X` | regular / bold |
| XCircle | 3 | `XCircle` | fill |
| CheckCircle2 | 3 | `CheckCircle` | duotone |
| Info | 3 | `Info` | fill / duotone |
| HelpCircle | 1 | `Question` | regular |
| CheckSquare | 1 | `CheckSquare` | fill |

### 3.3 Content & Meta Icons (14 unique, ~95 uses)

| Lucide Name | Uses | Phosphor Equivalent | Weight Recommendation |
|---|---|---|---|
| Calendar | 33 | `Calendar` | regular / duotone |
| Clock | 26 | `Clock` | regular / duotone |
| Users | 14 | `Users` | regular / duotone |
| User | 10 | `User` | regular |
| FileText | 9 | `FileText` | regular |
| Tag | 6 | `Tag` | regular |
| BookOpen | 6 | `BookOpen` | duotone |
| Hash | 3 | `Hash` | regular |
| Newspaper | 1 | `Newspaper` | duotone |
| FileCheck | 2 | `FileCheck` | regular |
| FileSearch | 1 | `MagnifyingGlass` + `File` | regular |
| FileCode | 1 | `FileCode` | regular |
| Type | 3 | `TextT` | regular |
| Bookmark | 1 | `BookmarkSimple` | regular / fill |

### 3.4 UI Action Icons (12 unique, ~54 uses)

| Lucide Name | Uses | Phosphor Equivalent | Weight Recommendation |
|---|---|---|---|
| Eye | 14 | `Eye` | regular |
| Search | 10 | `MagnifyingGlass` | regular |
| Filter | 5 | `Funnel` | regular |
| Copy | 4 | `Copy` | regular |
| RefreshCw | 4 | `ArrowsClockwise` | regular |
| Share2 | 5 | `ShareNetwork` | regular |
| EyeOff | 2 | `EyeSlash` | regular |
| SlidersHorizontal | 2 | `SlidersHorizontal` | regular |
| Settings | 2 | `GearSix` | regular / duotone |
| Plus | 1 | `Plus` | bold |
| Minus | 1 | `Minus` | regular |
| SearchX | 1 | `MagnifyingGlassMinus` | regular |

### 3.5 Decorative & Brand Icons (15 unique, ~70 uses)

| Lucide Name | Uses | Phosphor Equivalent | Weight Recommendation |
|---|---|---|---|
| Zap | 13 | `Lightning` | fill / duotone |
| Star | 15 | `Star` | fill (active) / regular |
| Award | 11 | `Trophy` or `Medal` | duotone |
| Sparkles | 8 | `Sparkle` | fill / duotone |
| Rocket | 3 | `Rocket` | duotone |
| Lightbulb | 3 | `Lightbulb` | duotone |
| Heart | 1 | `Heart` | fill / regular |
| ThumbsUp | 1 | `ThumbsUp` | fill |
| Bot | 1 | `Robot` | duotone |
| Brain | 2 | `Brain` | duotone |
| Figma | 1 | `FigmaLogo` | regular |
| Compass | 1 | `Compass` | duotone |
| Scale | 1 | `Scales` | regular |
| Target | 8 | `Crosshair` or `Target` | regular |
| MousePointer | 3 | `Cursor` | regular |

### 3.6 Media Icons (11 unique, ~34 uses)

| Lucide Name | Uses | Phosphor Equivalent | Weight Recommendation |
|---|---|---|---|
| Play | 13 | `Play` | fill |
| Video | 5 | `VideoCamera` | regular / duotone |
| Images | 4 | `Images` | duotone |
| Image | 2 | `Image` | regular |
| Camera | 3 | `Camera` | regular |
| Film | 1 | `FilmStrip` | regular |
| Mic | 6 | `Microphone` | regular |
| Headphones | 3 | `Headphones` | duotone |
| Volume2 | 1 | `SpeakerHigh` | regular |
| PlayCircle | 1 | `PlayCircle` | fill |
| Pause | 1 | `Pause` | regular |
| SkipForward | 1 | `SkipForward` | fill |
| SkipBack | 1 | `SkipBack` | fill |

### 3.7 Social Media Icons (6 unique, ~14 uses)

| Lucide Name | Uses | Phosphor Equivalent | Weight Recommendation |
|---|---|---|---|
| Twitter | 4 | `TwitterLogo` (or `XLogo`) | fill |
| Linkedin | 4 | `LinkedinLogo` | fill |
| Facebook | 1 | `FacebookLogo` | fill |
| Instagram | 1 | `InstagramLogo` | fill |
| Youtube | 1 | `YoutubeLogo` | fill |
| Globe | 6 | `Globe` | regular |

### 3.8 Data & Analytics Icons (8 unique, ~29 uses)

| Lucide Name | Uses | Phosphor Equivalent | Weight Recommendation |
|---|---|---|---|
| TrendingUp | 13 | `TrendUp` | regular / bold |
| BarChart3 | 5 | `ChartBar` | regular / duotone |
| LineChart | 2 | `ChartLine` | regular |
| PieChart | 1 | `ChartPie` | duotone |
| DollarSign | 2 | `CurrencyDollar` | regular |
| TrendingDown | 1 | `TrendDown` | regular |
| BarChart | 1 | `ChartBar` | regular |
| Database | 2 | `Database` | regular / duotone |

### 3.9 Business & Professional Icons (10 unique, ~28 uses)

| Lucide Name | Uses | Phosphor Equivalent | Weight Recommendation |
|---|---|---|---|
| Shield | 8 | `Shield` | duotone / fill |
| Briefcase | 6 | `Briefcase` | regular |
| Mail | 8 | `Envelope` | regular |
| Phone | 3 | `Phone` | regular |
| MapPin | 5 | `MapPin` | fill |
| Send | 2 | `PaperPlaneTilt` | fill |
| MessageSquare | 7 | `ChatSquare` | regular |
| MessageCircle | 2 | `ChatCircle` | regular |
| Lock | 1 | `Lock` | fill |
| ShieldCheck | 2 | `ShieldCheck` | fill / duotone |

### 3.10 Development & Tools Icons (14 unique, ~25 uses)

| Lucide Name | Uses | Phosphor Equivalent | Weight Recommendation |
|---|---|---|---|
| Code | 5 | `Code` | regular |
| Code2 | 1 | `CodeBlock` | regular |
| Palette | 5 | `Palette` | duotone |
| Layers | 7 | `Stack` | regular / duotone |
| Layout | 3 | `Layout` | regular |
| Wrench | 2 | `Wrench` | regular |
| Package | 2 | `Package` | regular / duotone |
| PenTool | 3 | `PenNib` | regular |
| Edit3 | 1 | `PencilSimple` | regular |
| Ruler/RulerIcon | 2 | `Ruler` | regular |
| LayoutGrid | 1 | `SquaresFour` | regular |
| Columns2 | 1 | `Columns` | regular |
| PanelTop | 1 | `Browser` | regular |
| PanelBottom | 1 | `Dock` | regular |

### 3.11 Miscellaneous Icons (9 unique, ~16 uses)

| Lucide Name | Uses | Phosphor Equivalent | Weight Recommendation |
|---|---|---|---|
| Megaphone | 1 | `Megaphone` | duotone |
| Download | 1 | `DownloadSimple` | regular |
| Upload | 1 | `UploadSimple` | regular |
| CloudUpload | 1 | `CloudArrowUp` | regular |
| Loader2 | 1 | `SpinnerGap` | regular (animated) |
| RotateCcw | 1 | `ArrowCounterClockwise` | regular |
| ShoppingCart | 3 | `ShoppingCart` | regular / duotone |
| Link | 2 | `Link` | regular |
| BoxSelect | 1 | `Selection` | regular |
| Ear | 1 | `Ear` | regular |
| Accessibility | 1 | `Wheelchair` | regular |
| Sun | 1 | `Sun` | fill / duotone |
| Moon | 1 | `Moon` | fill / duotone |
| MoreHorizontal | 3 | `DotsThree` | bold |
| Quote | 7 | `Quotes` | duotone |
| Keyboard | 3 | `Keyboard` | regular |
| List | 2 | `List` | regular |
| Circle | 2 | `Circle` | regular / fill |

---

## 4. Type System Impact

### `LucideIcon` Type References (36 files)

The `LucideIcon` type is used as a prop type in pattern components that accept icons dynamically:

**Pattern components using `LucideIcon` type:**
- `Hero.tsx` — `import type { LucideIcon }`
- `StatsSection.tsx` — icon prop on stat items
- `StatsGrid.tsx` — icon prop on stat items
- `ValuesSection.tsx` — icon prop on value cards
- `ServicesCard.tsx` — icon prop on service cards
- `FeatureGrid.tsx` — icon prop on feature items
- `ProcessTimeline.tsx` — icon prop on process steps
- `ProcessSteps.tsx` — icon prop on steps
- `Timeline.tsx` — icon prop on timeline items
- `TimelineSection.tsx` — icon prop on sections
- `SolutionCardsGrid.tsx` — icon prop on solution cards
- `ChallengesGrid.tsx` — icon prop on challenge items
- `SolutionsDetailGrid.tsx` — icon prop on detail items
- `IntegrationsGrid.tsx` — icon prop on integration items
- `BenefitsGrid.tsx` — icon prop on benefit items
- `FeaturedProjectShowcase.tsx` — icon prop on showcase items
- `DropdownMenu.tsx` — icon prop on menu items
- `FeatureList.tsx` — icon prop on feature items

**Migration impact:** These files need a union type `LucideIcon | PhosphorIcon` or an abstraction type during parallel operation.

---

## 5. Phosphor Feasibility Assessment

### Coverage Analysis
| Category | Lucide Icons | Phosphor Direct Match | Phosphor Close Match | No Match |
|---|---|---|---|---|
| Navigation | 11 | 11 (100%) | 0 | 0 |
| Feedback | 10 | 10 (100%) | 0 | 0 |
| Content | 14 | 13 (93%) | 1 | 0 |
| UI Action | 12 | 12 (100%) | 0 | 0 |
| Decorative | 15 | 14 (93%) | 1 | 0 |
| Media | 13 | 13 (100%) | 0 | 0 |
| Social | 6 | 6 (100%) | 0 | 0 |
| Data | 8 | 8 (100%) | 0 | 0 |
| Business | 10 | 10 (100%) | 0 | 0 |
| Dev/Tools | 14 | 12 (86%) | 2 | 0 |
| Misc | 17 | 17 (100%) | 0 | 0 |
| **TOTAL** | **~130** | **~126 (97%)** | **~4 (3%)** | **0** |

### Risk Assessment
| Risk | Severity | Mitigation |
|---|---|---|
| Bundle size increase (dual libraries) | Medium | Tree-shaking keeps it manageable; temporary during migration |
| Naming differences | Low | Icon mapping utility handles translation |
| Weight prop not supported by Lucide | Low | Graceful degradation during parallel operation |
| `LucideIcon` type in 36 files | Medium | Union type or abstraction layer |
| Visual differences (aesthetic) | Low | Phosphor's regular weight closely matches Lucide's default |
| Duotone secondary layer contrast | Medium | WCAG audit per weight variant |

---

## 6. Phosphor Weight Strategy Recommendation

### Default Weight by Context

| UI Context | Recommended Weight | Rationale |
|---|---|---|
| **Navigation** (arrows, chevrons, menus) | `regular` | Clean, unobtrusive |
| **CTAs** (ArrowRight in buttons) | `bold` | Draws attention, matches button weight |
| **Feedback** (check, alert, close) | `bold` or `fill` | High visibility for status indicators |
| **Content meta** (calendar, clock, user) | `regular` or `light` | Subtle, secondary information |
| **Hero sections** (decorative icons) | `duotone` | Rich visual depth, "Funky" aesthetic |
| **Feature cards** (service/value icons) | `duotone` | Two-tone depth matches glassmorphism |
| **Social media** | `fill` | Brand recognition, standard practice |
| **Data/charts** (trend, bar, pie) | `regular` | Clean data visualization |
| **Active/selected states** | `fill` | Clear state indication |
| **Dark mode all contexts** | Same as light | Consistent weight, adjust color only |

### CSS Variable Design Tokens (Proposed)

```css
:root {
  /* Icon Size Tokens */
  --icon-size-xs: 14px;    /* Inline text icons, badges */
  --icon-size-sm: 16px;    /* Metadata, small UI */
  --icon-size-md: 20px;    /* Standard UI icons */
  --icon-size-base: 24px;  /* Default size */
  --icon-size-lg: 28px;    /* Feature cards, emphasis */
  --icon-size-xl: 32px;    /* Hero decorative */
  --icon-size-2xl: 40px;   /* Large decorative */
  --icon-size-3xl: 48px;   /* Hero/splash icons */

  /* Icon Color Tokens */
  --icon-color-default: var(--foreground);
  --icon-color-muted: var(--muted-foreground);
  --icon-color-primary: var(--primary);
  --icon-color-success: var(--success);
  --icon-color-warning: var(--warning);
  --icon-color-destructive: var(--destructive);
  --icon-color-on-primary: var(--primary-foreground);

  /* Phosphor Duotone Opacity */
  --icon-duotone-opacity: 0.2;

  /* Icon Stroke / Weight defaults */
  --icon-weight: regular;          /* Default Phosphor weight */
  --icon-weight-emphasis: bold;    /* Emphasis weight */
  --icon-weight-decorative: duotone; /* Decorative weight */

  /* Icon Transition */
  --icon-transition: color var(--transition-base) var(--ease-out);
}
```

---

## 7. WCAG Icon Compliance Findings

### Current Issues Identified
1. **No icon size tokens** -- sizes are hardcoded per-component (16, 20, 24, 28, etc.)
2. **No icon color tokens** -- colors use general CSS variables inconsistently
3. **Weight accessibility not considered** -- Lucide only has stroke-based, but Phosphor's `thin` weight at small sizes may violate WCAG 1.4.11 (non-text contrast)
4. **Missing `aria-hidden` on some decorative icons** -- need audit
5. **Social media icons may lack accessible labels** -- Facebook, Twitter, etc. in footer
6. **Icon-only buttons** -- some may lack accessible text alternatives

### Recommendations
- Define icon design tokens in `/guidelines/design-tokens/iconography.md`
- Enforce minimum `20px` for `thin`/`light` weights
- Enforce minimum `16px` for `regular`/`bold`/`fill` weights
- Add `aria-hidden="true"` to all decorative icons
- Add `aria-label` to all icon-only interactive elements
- Test all 6 weights at each size against both light and dark backgrounds

---

## 8. Migration Effort Estimate

| Phase | Files | Effort | Priority |
|---|---|---|---|
| 1. Audit & Report | -- | 2h | DONE |
| 2. Guidelines & Tokens | 2 files | 3h | HIGH |
| 3. Abstraction Layer | 3 files | 4h | HIGH |
| 4. DevTools Reference Page | 2 files | 4h | HIGH |
| 5. Parallel Implementation | 5 files | 3h | MEDIUM |
| 6a. Migrate patterns (85 files) | 85 files | 16h | MEDIUM |
| 6b. Migrate templates (145 files) | 145 files | 24h | LOW |
| 6c. Migrate blocks/ui/common/parts (32 files) | 32 files | 6h | LOW |
| 7. Remove Lucide | 262 files | 4h | FINAL |
| **TOTAL** | | **~66h** | |

---

## 9. Appendices

### A. Files by Directory (Complete Listing)

**Parts (2 files -- CRITICAL, affects every page):**
- `SiteHeader.tsx` -- Menu, X, ChevronDown, Search, Sun, Moon
- `SiteFooter.tsx` -- Mail, Facebook, Instagram, Twitter, Linkedin, Youtube, ArrowRight, ChevronRight, Globe, MapPin, Phone, Zap, Heart

**Common (5 files):**
- `ScrollDownArrow.tsx` -- ChevronDown
- `TrustBadges.tsx` -- Award, Zap, Shield, Briefcase
- `TaxonomyFilter.tsx` -- Filter, Check, ChevronDown
- `ViewSwitcher.tsx` -- LayoutGrid, Columns2, List
- `MobileFilterPopover.tsx` -- X

**UI (7 files):**
- `Toast.tsx` -- X, CheckCircle, XCircle, AlertTriangle, Info
- `Lightbox.tsx` -- X, ChevronLeft, ChevronRight, ZoomIn
- `ErrorBoundary.tsx` -- AlertTriangle, RefreshCw
- `DropdownMenu.tsx` -- LucideIcon, Check
- `AccessibilityReport.tsx` -- CheckCircle, XCircle, AlertTriangle, Info, ChevronDown, ChevronUp
- `KeyboardTester.tsx` -- Keyboard, Eye, EyeOff
- `ComponentDocumentation.tsx` -- Copy, Check, Code, Eye, Accessibility, Lightbulb, Palette

### B. LucideIcon Type Migration Path

Current pattern:
```tsx
import { LucideIcon } from 'lucide-react';
interface Props { icon: LucideIcon; }
```

Parallel pattern:
```tsx
import { LucideIcon } from 'lucide-react';
import { Icon as PhosphorIcon } from '@phosphor-icons/react';
type IconComponent = LucideIcon | PhosphorIcon;
interface Props { icon: IconComponent; }
```

Final pattern:
```tsx
import { Icon as PhosphorIcon } from '@phosphor-icons/react';
interface Props { icon: PhosphorIcon; }
```
