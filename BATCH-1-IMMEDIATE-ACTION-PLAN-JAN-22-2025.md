# Batch 1: Immediate Action Plan - Navigation & Guidelines

**Date:** January 22, 2025  
**Duration:** 2-3 hours  
**Status:** 🎯 READY TO EXECUTE  
**Priority:** CRITICAL

---

## 🎯 Scope (Batch 1 Only)

**Focus on highest-impact, lowest-risk items:**

1. **Guidelines structure** (30 minutes)
2. **Navigation links audit** (60 minutes)
3. **SiteHeader & SiteFooter** (60 minutes)

**DO NOT TOUCH:** Templates, patterns, blocks, other components (save for future batches)

---

## ✅ STEP 1: GUIDELINES STRUCTURE (30 minutes)

### 1.1 Verify Current Structure

**Already Complete:**
- ✅ `/guidelines/blocks/design/` exists (13 files)
- ✅ `/guidelines/blocks/text/` exists (5 files)
- ✅ `/guidelines/blocks/media/` exists (4 files)
- ✅ `/guidelines/blocks/theme/` exists (6 files)
- ✅ `/guidelines/blocks/widgets/` exists (README only)
- ✅ `/guidelines/blocks/embed/` exists (README only)
- ✅ `/guidelines/blocks/woocommerce/` exists (README only)

**Action:** No folder creation needed. ✅

### 1.2 Add Layout Rules to Guidelines.md

**Add to `/guidelines/Guidelines.md` under "Design Tokens & CSS Variables System":**

```markdown
### 🏗️ Layout System

**Breakpoints:**
- **Desktop:** > 1440px
- **Tablet Landscape:** > 1024px
- **Tablet Portrait:** > 768px
- **Mobile:** > 420px
- **Mobile Compact:** > 320px

**Fluid Page Padding (Horizontal):**
```css
/* Automatic fluid padding: 16px (mobile) → 32px (desktop) */
.fluid-container {
  padding-left: clamp(1rem, 2vw + 0.5rem, 2rem);
  padding-right: clamp(1rem, 2vw + 0.5rem, 2rem);
}
```

**Fluid Typography:**
```css
/* All headings scale smoothly */
--text-h1: clamp(32px, 4vw + 16px, 64px);
--text-h2: clamp(28px, 3vw + 16px, 48px);
--text-h3: clamp(24px, 2vw + 14px, 36px);
--text-h4: clamp(20px, 1.5vw + 12px, 28px);
--text-h5: clamp(18px, 1vw + 12px, 24px);
--text-h6: clamp(16px, 0.75vw + 12px, 20px);
--text-base: clamp(15px, 0.5vw + 14px, 18px);
```

**Complete Documentation:** See `/guidelines/design-tokens/responsive.md` ⭐⭐⭐
```

**Deliverable:** Updated `Guidelines.md` with layout system section

---

## 📊 STEP 2: NAVIGATION LINKS AUDIT (60 minutes)

### 2.1 Extract All Links from SiteHeader

**From line 92-151 in `/src/app/components/parts/SiteHeader.tsx`:**

#### Main Navigation Links (6 links)

| # | Label | Page Value | Route | Status |
|---|-------|------------|-------|--------|
| 1 | Services | `services` | `/services` | ✅ Valid |
| 2 | Solutions | `solutions` | `/solutions` | ✅ Valid |
| 3 | Portfolio | `portfolio-archive` | `/portfolio` | ✅ Valid |
| 4 | About | `about` | `/about` | ✅ Valid |
| 5 | Blog | `blog` | `/blog` | ✅ Valid |
| 6 | Contact | `contact` | `/contact` | ✅ Valid |

#### Services Mega Menu (9 links)

| # | Label | Page Value | Route | Status |
|---|-------|------------|-------|--------|
| 1 | Discovery | `discovery` | `/service-discovery` | ✅ Valid |
| 2 | Design | `design` | `/service-design` | ✅ Valid |
| 3 | Development | `development` | `/service-development` | ✅ Valid |
| 4 | Support | `support` | `/service-support` | ✅ Valid |
| 5 | Hosting | `hosting` | `/hosting` | ✅ Valid |
| 6 | Migrations | `migrations` | `/service-migrations` | ✅ Valid |
| 7 | Security | `security` | `/service-security` | ✅ Valid |
| 8 | Content | `content` | `/service-content` | ✅ Valid |
| 9 | Mailchimp | `mailchimp` | `/mailchimp-solution` | ⚠️ **VERIFY** |

**Note:** Mailchimp links to solution page, not service page. Verify this is intentional.

#### Solutions Mega Menu (5 links)

| # | Label | Page Value | Route | Status |
|---|-------|------------|-------|--------|
| 1 | WordPress | `wordpress` | `/wordpress-solution` | ✅ Valid |
| 2 | WooCommerce | `woocommerce` | `/woocommerce-solution` | ✅ Valid |
| 3 | Tour Operators | `tour-operators` | `/tour-operator` | ⚠️ **MISMATCH** |
| 4 | Hosting | `hosting` | `/hosting` | ⚠️ **DUPLICATE** |
| 5 | LSX Design | `lsx` | `/lsx-design` | ⚠️ **VERIFY** |

**Issues:**
- **Mismatch:** "tour-operators" (plural) vs "/tour-operator" (singular) route
- **Duplicate:** Hosting appears in both Services and Solutions menus
- **Verify:** "lsx" should map to either `/lsx-solution` or `/lsx-design`

#### About Mega Menu (5 links)

| # | Label | Page Value | Route | Status |
|---|-------|------------|-------|--------|
| 1 | About Us | `about` | `/about` | ✅ Valid |
| 2 | Our Team | `team` | `/team` | ✅ Valid |
| 3 | Our Process | `about-process` | `/about-process` | ✅ Valid |
| 4 | Culture | `about-culture` | `/about-culture` | ✅ Valid |
| 5 | History | `about-history` | `/about-history` | ✅ Valid |

**Total Header Links:** 25 links

---

### 2.2 Extract All Links from SiteFooter

**ACTION:** Read `/src/app/components/parts/SiteFooter.tsx` and extract:
- Footer navigation links
- Legal links
- Social links
- Any CTA buttons

**Deliverable:** Complete footer links table

---

### 2.3 Validate All Links Against App.tsx Routes

**Method:**
1. Read full App.tsx routes (lines 140-300+)
2. Create master routes list
3. Compare every header/footer link
4. Flag:
   - ❌ Broken links (no matching route)
   - ⚠️ Mismatches (page value ≠ route path)
   - 🔁 Duplicates (same destination, different page values)

**Deliverable:** `NAVIGATION-LINKS-AUDIT-COMPLETE.md` with:
- ✅ Valid links table
- ❌ Broken links list
- ⚠️ Mismatch fixes needed
- 🔁 Duplicate links analysis

---

## 🔍 STEP 3: SITE HEADER & FOOTER AUDIT (60 minutes)

### 3.1 SiteHeader Component Audit

**File:** `/src/app/components/parts/SiteHeader.tsx`

#### Import Audit
```typescript
// Check these imports:
import { Container } from '../common/Container'; // ✅
import { Logo } from '../common/Logo'; // ✅
import { SiteLogo } from '../blocks/theme/SiteLogo'; // ✅
import { useNavigation } from '../../contexts/NavigationContext'; // ✅
import { mainNavigation } from '../../data/pages'; // ⚠️ CHECK IF USED
import { Menu, X, ChevronDown, Search, Sun, Moon } from 'lucide-react'; // ✅
```

**Action:** Verify `mainNavigation` import is used (currently using inline `navItems` array on line 92)

#### CSS Approach
- ❌ **NO dedicated CSS file** - all styles inline
- ❌ **NO BEM naming** - using inline styles only
- ❌ **NO WordPress-aligned classes** - no `.wp-*` classes

**Required:**
- [ ] Create `/src/styles/parts/site-header.css`
- [ ] Add BEM classes: `.site-header`, `.site-header__nav`, `.site-header__mega-menu`
- [ ] Migrate inline styles to CSS file
- [ ] Add WordPress-aligned classes

#### JSDoc Documentation
- ⚠️ Has basic JSDoc (lines 1-18)
- ❌ Missing props documentation
- ❌ Missing usage examples

**Required:**
- [ ] Add complete JSDoc with @param, @returns, @example

#### Accessibility
- ✅ `role="banner"` on header
- ✅ `role="navigation"` on nav
- ✅ `aria-label="Primary navigation"`
- ✅ Keyboard accessible (buttons, not divs)
- ⚠️ Check focus states (currently inline styles)
- ⚠️ Verify mobile menu keyboard nav

**Required:**
- [ ] Audit focus states
- [ ] Test keyboard navigation
- [ ] Verify mobile menu accessibility

---

### 3.2 SiteFooter Component Audit

**File:** `/src/app/components/parts/SiteFooter.tsx`

**ACTION:** Complete audit following same checklist as SiteHeader:
- [ ] Import audit
- [ ] CSS approach (dedicated file, BEM, WP classes)
- [ ] JSDoc documentation
- [ ] Accessibility (keyboard nav, focus, ARIA)
- [ ] Links validation

**Deliverable:** `SITE-FOOTER-AUDIT.md` with complete findings

---

## 📋 BATCH 1 DELIVERABLES

### Files to Create/Update:

1. **`/guidelines/Guidelines.md`** ← Add layout system section
2. **`/NAVIGATION-LINKS-AUDIT-COMPLETE.md`** ← Complete links audit
3. **`/SITE-HEADER-AUDIT.md`** ← SiteHeader component audit
4. **`/SITE-FOOTER-AUDIT.md`** ← SiteFooter component audit
5. **`/BATCH-1-COMPLETION-REPORT.md`** ← Summary of findings

### Summary Reports:

- Total links found
- Broken links count
- Mismatch fixes needed
- Duplicate links analysis
- SiteHeader refactors required
- SiteFooter refactors required
- Estimated effort for fixes

---

## ✅ DEFINITION OF DONE (Batch 1)

- [x] Guidelines folder structure verified
- [ ] Layout rules added to Guidelines.md
- [ ] All header navigation links extracted
- [ ] All footer navigation links extracted
- [ ] All links validated against routes
- [ ] Broken/missing links identified
- [ ] Mismatch fixes documented
- [ ] Duplicate links analysis complete
- [ ] SiteHeader audit complete
- [ ] SiteFooter audit complete
- [ ] Remediation plan for fixes created

---

## ⚠️ CRITICAL NOTES

**This is AUDIT ONLY - NO CODE CHANGES**

**Do NOT:**
- Fix broken links (document only)
- Create missing pages (document only)
- Refactor components (document only)
- Add CSS files (document only)
- Update BEM naming (document only)

**DO:**
- Extract all links
- Validate against routes
- Document issues
- Create remediation plan
- Estimate effort

**NEXT:** After Batch 1 complete, review findings and approve Batch 2 (Implementation)

---

**Status:** ✅ READY TO EXECUTE  
**Duration:** 2-3 hours  
**Output:** 5 audit reports + remediation plan  
**Next Batch:** Batch 2 (Implementation of fixes)

**🎯 Let's start with Step 1: Guidelines Structure! 🚀**
