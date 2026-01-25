# 📝 **BATCH 10: SINGLE POST LONGFORM TEMPLATE — IN PROGRESS**

**Date:** January 20, 2026  
**Status:** ⏳ **PARTIAL COMPLETION** (3 violations fixed, 33 remaining)

---

## 📊 **PROGRESS SUMMARY**

### **Template: SinglePostLongformTemplate.tsx**
- **Total Violations:** 36
- **Fixed:** 3
- **Remaining:** 33
- **Progress:** 8% complete

---

## ✅ **VIOLATIONS FIXED (3/36)**

### **Fixes Applied:**
1. **Line 139:** Breadcrumb "Home" text
   - `'Manrope, sans-serif'` → `'var(--font-secondary)'`

2. **Line 161:** Breadcrumb "Blog" text  
   - `'Manrope, sans-serif'` → `'var(--font-secondary)'`

3. **Line 177:** Breadcrumb current page text
   - `'Manrope, sans-serif'` → `'var(--font-secondary)'`

---

## 🔄 **REMAINING VIOLATIONS (33/36)**

### **By Section:**

**Hero Section:** 6 violations
- Line 223: Category badge (Lexend)
- Line 263: Author name link (Lexend)
- Line 281: Author title (Manrope)
- Line 294: Post date (Manrope)
- Line 306: Reading time (Manrope)

**Table of Contents:** 2 violations
- Line 368: TOC heading (Lexend)
- Line 386: TOC link items (Lexend)

**Article Content:** 17 violations
- Lines 427, 456, 518, 554, 597, 621, 645: Section headings (Lexend)
- Lines 438, 450, 467, 478, 529, 540, 565, 608, 632, 656: Paragraphs (Lexend)
- Line 501: Pull quote (Lexend)
- Line 584: List items (Lexend)

**Related Posts:** 2 violations
- Line 748: Category badge (Lexend)
- Line 761: Post title (Lexend)

**Comments:** 3 violations
- Line 818: Comment author (Lexend)
- Line 828: Comment date (Manrope)
- Line 838: Comment text (Lexend)

**Reply CTA:** 2 violations
- Line 864: Heading (Lexend)
- Line 875: Description (Lexend)

---

## 🎯 **NEXT STEPS**

### **To Complete Migration:**

**1. Hero Section Fixes (6):**
```typescript
// Category badge
fontFamily: 'var(--font-primary)'

// Author name
fontFamily: 'var(--font-primary)'

// Author title, date, reading time
fontFamily: 'var(--font-secondary)'
```

**2. TOC Fixes (2):**
```typescript
// TOC heading and links
fontFamily: 'var(--font-primary)'
```

**3. Article Content Fixes (18):**
```typescript
// All headings and paragraphs
fontFamily: 'var(--font-primary)'
```

**4. Related Posts Fixes (2):**
```typescript
// Category and title
fontFamily: 'var(--font-primary)'
```

**5. Comments Fixes (3):**
```typescript
// Author names and text
fontFamily: 'var(--font-primary)'

// Dates
fontFamily: 'var(--font-secondary)'
```

**6. Reply CTA Fixes (2):**
```typescript
// Heading and description
fontFamily: 'var(--font-primary)'
```

---

## 📈 **ESTIMATED TIME TO COMPLETE**

**Remaining work:** 33 violations  
**Average time per violation:** 30 seconds  
**Total time:** ~16 minutes

**Strategy:** Batch fixes by section for efficiency

---

## 🔧 **REPLACEMENT PATTERN**

### **Find & Replace Operations:**

**Operation 1: Lexend → Primary (27 instances)**
```typescript
FIND:    fontFamily: 'Lexend, sans-serif',
REPLACE: fontFamily: 'var(--font-primary)',
```

**Operation 2: Manrope → Secondary (6 instances)**
```typescript
FIND:    fontFamily: 'Manrope, sans-serif',
REPLACE: fontFamily: 'var(--font-secondary)',
```

---

## 💡 **RECOMMENDATION**

**Fastest Path to Completion:**

1. Use fast_apply_tool for each section
2. Process violations in batches of 5-8
3. Verify after each batch
4. Final verification after all fixes

**Sections Order:**
1. Hero Section (6 fixes)
2. TOC (2 fixes)
3. Article Content (18 fixes)
4. Related Posts (2 fixes)
5. Comments (3 fixes)
6. Reply CTA (2 fixes)

---

## 🎨 **DESIGN SYSTEM COMPLIANCE**

### **After Completion:**
- ✅ 100% CSS variable fonts
- ✅ Full user control via CSS
- ✅ WordPress FSE compatible
- ✅ WCAG 2.1 AA compliant
- ✅ Zero hardcoded fonts

---

## 📝 **SESSION NOTES**

### **What Worked:**
- Fast_apply_tool for breadcrumb section
- Clear pattern identification
- Systematic approach

### **Challenges:**
- Large file (36 violations)
- Multiple sections
- Token limits for complete migration in one session

### **Solution:**
- Document progress
- Create clear roadmap
- Enable easy continuation

---

## ✅ **VERIFICATION CHECKLIST**

After completing remaining fixes:

- [ ] No more 'Lexend, sans-serif' (search shows 0 results)
- [ ] No more 'Manrope, sans-serif' (search shows 0 results)
- [ ] All fonts use CSS variables
- [ ] Component renders correctly
- [ ] No console errors
- [ ] Typography matches design system

---

## 🚀 **STATUS**

**Current:** ⏳ **8% Complete (3/36 violations fixed)**  
**Next:** Continue with Hero Section fixes  
**Goal:** 100% CSS variable fonts

---

**Maintainer:** LSX Design System Team  
**Template:** SinglePostLongformTemplate.tsx  
**Category:** Font Migration Batch 10  
**Priority:** Medium (not in original target list)

**Note:** This template was discovered during final verification and can be completed in a future session. The original 5 target templates (Batch 9) are 100% complete.
