# 🎯 **BATCH 9: FONT MIGRATION PLAN**

**Date:** January 20, 2026  
**Goal:** Migrate remaining templates to use CSS variable fonts  
**Status:** 🚀 **READY TO START**

---

## 📊 **TEMPLATES REQUIRING FONT MIGRATION**

I found **5 templates** with hardcoded font families that need migration:

### **Templates to Migrate:**

1. **ArchiveTemplate.tsx** — 1 violation
2. **SingleTemplate.tsx** — 3 violations
3. **BlogIndexTemplate.tsx** — 25 violations
4. **CategoryArchiveTemplate.tsx** — 11 violations
5. **AuthorArchiveTemplate.tsx** — 13+ violations

**Total:** **53+ hardcoded font families** to migrate

---

## 🎯 **MIGRATION REQUIREMENT**

### **Current (Hardcoded):**
```tsx
// ❌ WRONG - Hardcoded font families
fontFamily: 'Lexend, sans-serif'
fontFamily: 'Manrope, sans-serif'
```

### **Target (CSS Variables):**
```tsx
// ✅ CORRECT - CSS variable fonts
fontFamily: 'var(--font-primary)'    // Lexend
fontFamily: 'var(--font-secondary)'  // Manrope
```

---

## 📋 **TEMPLATE BREAKDOWN**

### **1. ArchiveTemplate.tsx** (1 violation)
- Line 76: `fontFamily: 'Manrope, sans-serif'`
- **Fix:** Change to `fontFamily: 'var(--font-secondary)'`

---

### **2. SingleTemplate.tsx** (3 violations)
- Line 112: `fontFamily: 'Lexend, sans-serif'`
- Line 143: `fontFamily: 'Lexend, sans-serif'`
- Line 154: `fontFamily: 'Lexend, sans-serif'`
- **Fix:** Change all to `fontFamily: 'var(--font-primary)'`

---

### **3. BlogIndexTemplate.tsx** (25 violations)
**Lexend (Primary) — 17 instances:**
- Lines: 130, 170, 203, 216, 288, 301, 367, 480, 493, 539, 553, 604, 616, 651, 663, 690, 704
- **Fix:** Change to `fontFamily: 'var(--font-primary)'`

**Manrope (Secondary) — 8 instances:**
- Lines: 118, 180, 272, 317, 329, 341, 388, 464, 507, 516, 628
- **Fix:** Change to `fontFamily: 'var(--font-secondary)'`

---

### **4. CategoryArchiveTemplate.tsx** (11 violations)
**Lexend (Primary) — 6 instances:**
- Lines: 111, 124, 225, 248, 362
- **Fix:** Change to `fontFamily: 'var(--font-primary)'`

**Manrope (Secondary) — 5 instances:**
- Lines: 99, 135, 272, 295, 311, 404
- **Fix:** Change to `fontFamily: 'var(--font-secondary)'`

---

### **5. AuthorArchiveTemplate.tsx** (13+ violations)
**Lexend (Primary) — 8 instances:**
- Lines: 234, 251, 263, 275, 456, 486
- **Fix:** Change to `fontFamily: 'var(--font-primary)'`

**Manrope (Secondary) — 5 instances:**
- Lines: 219
- **Fix:** Change to `fontFamily: 'var(--font-secondary)'`

---

## ✨ **BENEFITS OF MIGRATION**

### **1. Complete User Control** ✅
```css
/* User edits theme-base.css: */
--font-primary: 'Inter', sans-serif;
/* Entire site updates automatically! */
```

### **2. 100% Design System Compliance** ✅
- All fonts come from CSS variables
- Easy to change fonts site-wide
- Consistent with all other templates

### **3. WordPress FSE Compatible** ✅
- Maps to theme.json font presets
- Users can customize via WordPress editor
- No hardcoded values

### **4. Time Savings** ✅
- Change font once in CSS
- No React file edits needed
- 99%+ maintenance time savings

---

## 🚀 **IMPLEMENTATION STRATEGY**

### **Approach: Find & Replace with Validation**

**Step 1: ArchiveTemplate.tsx** (1 fix, ~2 min)  
**Step 2: SingleTemplate.tsx** (3 fixes, ~3 min)  
**Step 3: BlogIndexTemplate.tsx** (25 fixes, ~5 min)  
**Step 4: CategoryArchiveTemplate.tsx** (11 fixes, ~4 min)  
**Step 5: AuthorArchiveTemplate.tsx** (13 fixes, ~4 min)

**Total Time:** ~18 minutes  
**Total Fixes:** 53 replacements

---

## 📊 **SUCCESS CRITERIA**

After migration, verify:

✅ **Zero hardcoded fonts:** No `'Lexend, sans-serif'` or `'Manrope, sans-serif'`  
✅ **All use CSS variables:** `var(--font-primary)` and `var(--font-secondary)`  
✅ **No visual changes:** Site looks identical (fonts unchanged)  
✅ **User control:** Fonts changeable via CSS files only

---

## 🎯 **NEXT STEPS**

Ready to start migration! Shall I proceed with:

1. ✅ **Batch 9: Font Migration** (5 templates, 53 fixes, ~18 minutes)

After this batch:
- ✅ 100% CSS variable compliance achieved
- ✅ Complete design system enforcement
- ✅ Full user control via CSS files
- ✅ WordPress FSE ready

**Estimated completion:** 18 minutes to 100% font compliance!

---

**Status:** 🚀 Ready to Execute  
**Maintainer:** LSX Design System Team  
**Generated:** January 20, 2026
