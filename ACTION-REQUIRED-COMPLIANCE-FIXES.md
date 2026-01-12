# ⚠️ ACTION REQUIRED: Design System Compliance Fixes

## 🎯 **SUMMARY**

**Date:** 2025-01-09  
**Current Compliance:** 90.1%  
**Target:** 100%  
**Estimated Time:** 2 hours 20 minutes

**Audit Complete:** See `/reports/audits/2025-01-09-mock-data-audit-report.md`

---

## 📊 **CURRENT STATUS**

### Data Centralization: 92% ✅

- ✅ 55/60 templates use centralized data
- ❌ 5 templates have inline data

### CSS Variables: 90.1% ⚠️

- ❌ **Fonts:** 79.5% (27 violations)
- ⚠️ **Spacing:** 85% (15 violations)
- ✅ **Colors:** 97.5% (excellent!)
- ✅ **Radius:** 100% (perfect!)

---

## ⚡ **QUICK FIX CHECKLIST**

### PHASE 1: Critical Fixes (1h 35m)

#### 1. Fix Font Violations (30 min) ⚠️ HIGH PRIORITY

**Batch Find & Replace:**

**In 5 files:**
1. `/src/app/App.tsx`
2. `/src/app/components/ui/PageSwitcher.tsx`
3. `/src/app/components/ui/StyleSwitcher.tsx`
4. `/src/app/components/ui/MegaMenu.tsx`
5. `/src/app/components/ui/ComponentPlayground.tsx`

**Find:**
```typescript
fontFamily: 'Lexend, sans-serif'
```

**Replace with:**
```typescript
fontFamily: 'var(--font-primary)'
```

**Find:**
```typescript
fontFamily: 'Manrope, sans-serif'
```

**Replace with:**
```typescript
fontFamily: 'var(--font-secondary)'
```

**Total violations:** 27  
**Time:** 30 minutes

---

#### 2. Fix Inline Data (45 min) ⚠️ HIGH PRIORITY

**5 Templates to Fix:**

1. ✅ **ServicesTemplate.tsx** (5 min)
   - **Action:** Delete lines 46-202 (inline services array)
   - **Add:** `import { services } from '../../data/services';`

2. ✅ **AboutTemplate.tsx** (10 min)
   - **Action:** Create `/src/app/data/about.ts`
   - **Content:**
     ```typescript
     export const aboutStats = [
       { number: '15+', label: 'Years Experience' },
       { number: '500+', label: 'Happy Clients' },
       { number: '150+', label: 'Projects Completed' },
       { number: '98%', label: 'Client Satisfaction' }
     ];
     ```
   - **Update template:** Import `aboutStats`

3. ✅ **TestimonialsTemplate.tsx** (10 min)
   - **Action:** Update `/src/app/data/testimonials.ts`
   - **Add:**
     ```typescript
     export const serviceFilters = ['all', 'WordPress', 'WooCommerce', 'Design', 'Development', 'Migration', 'Security'];
     export const testimonialStats = [
       { number: '500+', label: 'Happy Clients' },
       { number: '4.9/5', label: 'Average Rating' },
       { number: '98%', label: 'Satisfaction Rate' }
     ];
     ```
   - **Update template:** Import both

4. ✅ **HostingTemplate.tsx** (5 min)
   - **Action:** Update `/src/app/data/hosting.ts`
   - **Add:** `hostingFeatures` array
   - **Update template:** Import features

5. ✅ **LSXDesignTemplate.tsx** (5 min)
   - **Action:** Update `/src/app/data/solutions.ts`
   - **Add:** `lsxDesignStats` array
   - **Update template:** Import stats

**Time:** 45 minutes

---

#### 3. Fix Spacing Violations (20 min) ⚠️ MEDIUM PRIORITY

**Replace hardcoded padding with Tailwind:**

**Templates to fix:**

1. ✅ **ArchiveTemplate.tsx** — Line 90
   - Change: `padding: '10px'` → `className="p-2.5"`

2. ✅ **BlogIndexTemplate.tsx** — Line 197
   - Change: `padding: '12px 24px'` → `className="px-6 py-3"`

3. ✅ **ServicesTemplate.tsx** — Lines 365, 497, 672
   - Change: `padding: '32px'` → `className="p-8"`
   - Change: `padding: '20px 24px'` → `className="px-6 py-5"`

4. ✅ **HostingTemplate.tsx** — 6 instances
   - Replace all hardcoded padding with Tailwind classes

**Time:** 20 minutes

---

### PHASE 2: Verification (30 min)

- [ ] Test all updated templates
- [ ] Verify data imports work
- [ ] Check no visual regressions

---

### PHASE 3: Documentation (15 min)

- [ ] Update Guidelines.md with 100% compliance
- [ ] Document migration patterns

---

## 🎯 **DESIGN SYSTEM RULES**

### ✅ CORRECT USAGE

```typescript
// FONTS (ONLY use these)
fontFamily: 'var(--font-primary)'      // Lexend
fontFamily: 'var(--font-secondary)'    // Manrope

// SPACING (CSS variables OR Tailwind)
padding: 'var(--spacing-8)'
className="p-8 gap-4"

// COLORS
color: 'var(--foreground)'
backgroundColor: 'var(--background)'

// DATA
import { services } from '../../data/services';
```

### ❌ WRONG USAGE

```typescript
// NEVER hardcode
fontFamily: 'Lexend, sans-serif'       // ❌
fontFamily: 'Manrope'                  // ❌
padding: '32px'                        // ❌
color: '#000000'                       // ❌
const services = [...]                 // ❌
```

---

## 📊 **ESTIMATED TIMELINE**

| Phase | Time | Priority |
|-------|------|----------|
| Font fixes | 30 min | ⚠️ HIGH |
| Inline data fixes | 45 min | ⚠️ HIGH |
| Spacing fixes | 20 min | ⚠️ MEDIUM |
| Verification | 30 min | ✅ REQUIRED |
| Documentation | 15 min | ✅ OPTIONAL |
| **TOTAL** | **2h 20m** | — |

---

## ✅ **SUCCESS CRITERIA**

**After fixes:**
- ✅ 100% templates use centralized data
- ✅ 100% fonts use CSS variables
- ✅ 100% spacing uses CSS vars or Tailwind
- ✅ 100% colors use CSS variables
- ✅ Full user control via CSS file edits

---

## 🚀 **START NOW**

**Recommended order:**

1. **Fonts first** (30 min) — Quickest, highest impact
2. **Inline data** (45 min) — Improves maintainability
3. **Spacing** (20 min) — Polish
4. **Test** (30 min) — Prevent issues
5. **Done!** 🎉

**See full report:** `/reports/audits/2025-01-09-mock-data-audit-report.md`

---

**Created:** 2025-01-09  
**Status:** ⚠️ Action Required  
**Compliance:** 90.1% → Target: 100%
