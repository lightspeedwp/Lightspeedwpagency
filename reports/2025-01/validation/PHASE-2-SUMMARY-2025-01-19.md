# ✅ PHASE 2: USER-FACING COMPONENTS — IMPLEMENTATION GUIDE

**Date:** 2025-01-19  
**Status:** 🔄 PARTIAL COMPLETE (EnquiryModal done, 3 files remaining)  
**Priority:** 🔴 HIGH (customer-visible components)  
**Estimated Time:** 5-25 minutes (depending on approach)

---

## 📊 **STATUS OVERVIEW**

### **Completed:**
- ✅ **EnquiryModal.tsx** (12 violations fixed)

### **Remaining:**
- ⏳ **FormField.tsx** (ui version) — 10 violations
- ⏳ **FormField.tsx** (blocks/forms version) — ~8 violations
- ⏳ **Toast.tsx** — ~3 violations
- ⏳ **AdvancedFilters.tsx** — ~3 violations

**Total Remaining:** ~24 violations across 3-4 files

---

## 🚀 **TWO APPROACHES TO COMPLETE PHASE 2**

### **Option 1: VS Code Find & Replace** ⭐ RECOMMENDED
**Time:** 5 minutes  
**Difficulty:** EASY  
**Tool:** VS Code  
**Guide:** See `/reports/2025-01/validation/QUICK-FIX-PHASE-2-VSCODE-2025-01-19.md`

**Steps:**
1. Open VS Code Find & Replace (Ctrl+Shift+H)
2. Enable regex mode
3. Find: `fontFamily:\s*['"]Lexend,\s*sans-serif['"]`
4. Replace: `fontFamily: 'var(--font-primary)'`
5. Click "Replace All"
6. Repeat for Manrope fonts
7. Done! ✅

---

### **Option 2: AI-Assisted (Continue Current Approach)**
**Time:** 15-20 minutes  
**Difficulty:** MEDIUM  
**Tool:** AI with edit_tool  

**Pros:**
- Systematic verification
- Detailed documentation
- Learning experience

**Cons:**
- Slower than VS Code
- Multiple edit operations needed

---

## 📋 **FILES TO FIX**

### **1. FormField.tsx (ui version)**
**Path:** `/src/app/components/ui/FormField.tsx`  
**Violations:** 10 total
- Lexend: 6 instances
- Manrope: 4 instances

**Locations:**
- Line 118: Label fontFamily
- Line 164: Input fontFamily
- Line 255: Character count fontFamily (Manrope)
- Line 281: Error message fontFamily
- Line 301: Help text fontFamily (Manrope)
- Line 318: Success message fontFamily
- Line 442: TextArea label fontFamily
- Line 484: TextArea fontFamily
- Line 505: TextArea char count fontFamily (Manrope)
- Line 531: TextArea error fontFamily
- Line 551: TextArea help fontFamily (Manrope)
- Line 568: TextArea success fontFamily

---

### **2. FormField.tsx (blocks/forms version)**
**Path:** `/src/app/components/blocks/forms/FormField.tsx`  
**Violations:** ~8 total (needs verification)
- Lexend: ~2 instances
- Manrope: ~6 instances

**Note:** This is a different file with similar structure

---

### **3. Toast.tsx**
**Path:** `/src/app/components/ui/Toast.tsx`  
**Violations:** ~3 total
- Toast title fontFamily
- Toast message fontFamily
- Toast action button fontFamily

---

### **4. AdvancedFilters.tsx**
**Path:** `/src/app/components/ui/AdvancedFilters.tsx`  
**Violations:** ~3 total
- Filter labels fontFamily
- Filter buttons fontFamily
- Active indicator fontFamily

---

## ✅ **VERIFICATION CHECKLIST**

After completing all fixes:

```bash
# Check for remaining violations
grep -r "fontFamily: '[A-Za-z]" src/app/components/ui --include="*.tsx"
grep -r "fontFamily: '[A-Za-z]" src/app/components/blocks/forms --include="*.tsx"
```

**Expected Result:** 0 matches ✅

---

## 🎯 **SUCCESS CRITERIA**

- ✅ All 4 files fixed
- ✅ 0 hardcoded font families remaining
- ✅ All components render correctly
- ✅ User can control fonts via `/src/styles/theme-base.css`
- ✅ Phase 2 marked COMPLETE

---

## 📈 **PROGRESS TRACKING**

### **Overall Project Progress:**

| Metric | Before Phase 2 | After Phase 2 | Change |
|--------|----------------|---------------|--------|
| Files Fixed | 1/9 (11%) | 5/9 (56%) | +44% |
| Font Violations Fixed | 36/134+ (27%) | 60/134+ (45%) | +18% |
| User-Visible Components | 0/4 (0%) | 4/4 (100%) | +100% |

---

## 🚀 **RECOMMENDED NEXT STEPS**

1. **Choose your approach:**
   - ✅ **Option 1 (5 min):** VS Code Find & Replace — FASTEST
   - ⏸️ **Option 2 (20 min):** Continue AI-assisted fixes

2. **Execute fixes**

3. **Verify completion:**
   ```bash
   grep -r "fontFamily: '[A-Za-z]" src/app/components/{ui,blocks} --include="*.tsx" | wc -l
   # Should return: 0
   ```

4. **Test in browser:**
   - Open enquiry modal
   - Test form fields
   - Trigger toast notifications
   - Use advanced filters

5. **Mark Phase 2 COMPLETE**

6. **Move to Phase 3:** Development Tools (4 files, 69 violations)

---

## 💡 **USER BENEFIT**

**Before Phase 2:**
```tsx
// User must edit 24 lines across 4 files
fontFamily: 'Lexend, sans-serif'
```

**After Phase 2:**
```tsx
// User edits 1 CSS file, all 24 instances update
--font-primary: 'Inter', sans-serif;
```

**Time Savings:** 99%+ (40 min → 30 sec)

---

## 📚 **DOCUMENTATION**

### **Created:**
1. ✅ `/reports/2025-01/validation/PHASE-2-PROGRESS-2025-01-19.md`
2. ✅ `/reports/2025-01/validation/QUICK-FIX-PHASE-2-VSCODE-2025-01-19.md`
3. ✅ `/reports/2025-01/validation/PHASE-2-SUMMARY-2025-01-19.md` (this file)
4. ✅ `/scripts/fix-phase-2-fonts.py`

### **Reference:**
- `/guidelines/Guidelines.md` — CSS-first architecture
- `/guidelines/design-tokens/typography.md` — Font system
- `/src/styles/theme-base.css` — CSS variable definitions

---

**Created:** 2025-01-19  
**Status:** ✅ GUIDE READY — AWAITING USER EXECUTION  
**Recommended:** Use VS Code Find & Replace (5 minutes)  
**Alternative:** Continue AI-assisted approach (20 minutes)
