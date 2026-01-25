# 🔧 Font Variable Fix Plan — LSX Design Prototype

**Date:** 2025-01-19  
**Issue:** Hardcoded font families instead of CSS variables  
**Impact:** Users cannot change fonts by editing CSS files  
**Priority:** HIGH (violates CSS-first architecture principle)

---

## 🎯 **PROBLEM SUMMARY**

### **Current State (WRONG):**
```tsx
// ❌ Hardcoded fonts
fontFamily: 'Lexend, sans-serif'
fontFamily: 'Manrope, sans-serif'
```

### **Desired State (CORRECT):**
```tsx
// ✅ CSS variables
fontFamily: 'var(--font-primary)'    // Lexend
fontFamily: 'var(--font-secondary)'  // Manrope
```

---

## 📊 **VIOLATIONS FOUND**

### **Files Affected (8 files):**
1. **DesignSystemTest.tsx** — 45 violations (development/testing page)
2. **ComplianceScorecard.tsx** — 17 violations (development tool)
3. **EnquiryModal.tsx** — 12 violations (user-facing)
4. **DevToolsHeader.tsx** — 4 violations (development tool)
5. **DevToolsFilterToolbar.tsx** — 3 violations (development tool)
6. **Toast.tsx** — 3 violations (user-facing)
7. **FormField.tsx** — 11 violations (user-facing)
8. **AdvancedFilters.tsx** — 3 violations (user-facing)

**Total violations: 98+ instances**

---

## 🎯 **FIX STRATEGY**

### **Phase 1: AboutTemplate (HIGH PRIORITY)** ⚠️
**Status:** CRITICAL — User reported this file specifically  
**Violations:** Unknown (not in scan results, needs investigation)

**Fix:**
- Replace all `fontFamily: 'Lexend, sans-serif'` → `fontFamily: 'var(--font-primary)'`
- Replace all `fontFamily: 'Manrope, sans-serif'` → `fontFamily: 'var(--font-secondary)'`

### **Phase 2: User-Facing Components (HIGH PRIORITY)**
**Files:**
- EnquiryModal.tsx (12 violations)
- FormField.tsx (11 violations)
- Toast.tsx (3 violations)
- AdvancedFilters.tsx (3 violations)

**Total:** 29 violations

### **Phase 3: Development Tools (MEDIUM PRIORITY)**
**Files:**
- DesignSystemTest.tsx (45 violations)
- ComplianceScorecard.tsx (17 violations)
- DevToolsHeader.tsx (4 violations)
- DevToolsFilterToolbar.tsx (3 violations)

**Total:** 69 violations

### **Phase 4: All Templates Scan (HIGH PRIORITY)**
**Action:** Scan all 63 templates for hardcoded fonts  
**Expected:** More violations likely exist in templates directory

---

## 🔧 **AUTOMATED FIX SCRIPT**

### **Script Created:**
`/scripts/fix-font-variables.sh`

### **What It Does:**
1. Scans all `.tsx` files in specified directories
2. Replaces `fontFamily: 'Lexend*'` with `fontFamily: 'var(--font-primary)'`
3. Replaces `fontFamily: 'Manrope*'` with `fontFamily: 'var(--font-secondary)'`
4. Reports total files fixed and replacements made

### **Usage:**
```bash
cd /path/to/project
chmod +x scripts/fix-font-variables.sh
./scripts/fix-font-variables.sh
```

### **Targeted Directories:**
- `src/app/components/templates` (63 files)
- `src/app/components/patterns` (20+ files)
- `src/app/components/parts` (3 files)
- `src/app/components/common` (10+ files)
- `src/app/components/ui` (30+ files)

---

## 📋 **MANUAL FIX TEMPLATE**

### **Find & Replace Pattern:**

**Find:**
```
fontFamily: 'Lexend, sans-serif'
```

**Replace:**
```
fontFamily: 'var(--font-primary)'
```

---

**Find:**
```
fontFamily: 'Manrope, sans-serif'
```

**Replace:**
```
fontFamily: 'var(--font-secondary)'
```

---

## ✅ **VERIFICATION CHECKLIST**

After fixing, verify:

- [ ] No hardcoded font names in templates
- [ ] All `fontFamily` uses CSS variables
- [ ] Fonts still render correctly
- [ ] User can change fonts by editing `/src/styles/theme-base.css`
- [ ] Design system test page works
- [ ] All user-facing components work

---

## 🔍 **FIND COMMAND**

To find all remaining hardcoded fonts:

```bash
grep -r "fontFamily: '[A-Za-z]" src/app/components/ --include="*.tsx"
```

Expected result after fix: **0 matches**

---

## 📊 **WHY THIS MATTERS**

### **Before Fix:**
```tsx
// User wants to change primary font to Inter
// Must edit 98+ files manually ❌
fontFamily: 'Lexend, sans-serif'
```

### **After Fix:**
```tsx
// User edits ONE file (/src/styles/theme-base.css)
// All 98+ instances update automatically ✅
fontFamily: 'var(--font-primary)'
```

---

## 🎯 **BUSINESS VALUE**

### **Time Savings:**
- **Current:** 60 minutes to change fonts (edit 98+ files)
- **After fix:** 30 seconds (edit 1 CSS file)
- **Savings:** 59.5 minutes per font change (99%+ time reduction)

### **Quality Improvements:**
- ✅ **User Control:** Change fonts by editing CSS
- ✅ **Consistency:** All instances update together
- ✅ **Maintainability:** Single source of truth
- ✅ **WordPress FSE Ready:** Maps to theme.json presets

---

## 🚀 **NEXT STEPS**

### **Immediate (Today):**
1. [ ] Fix AboutTemplate.tsx (user-reported issue)
2. [ ] Run automated script on all directories
3. [ ] Verify all templates work correctly
4. [ ] Generate compliance report

### **Short Term (This Week):**
5. [ ] Fix all user-facing components
6. [ ] Fix all development tools
7. [ ] Add validation check to prevent future violations
8. [ ] Update guidelines to emphasize CSS variables

### **Long Term (This Month):**
9. [ ] Create ESLint rule to enforce CSS variables
10. [ ] Add pre-commit hook for validation
11. [ ] Update documentation with best practices
12. [ ] Train team on CSS-first architecture

---

## 📚 **RELATED DOCUMENTS**

- **Guidelines:** `/guidelines/Guidelines.md` (CSS-first architecture principle)
- **Design Tokens:** `/guidelines/design-tokens/typography.md` (Font system)
- **CSS Variables:** `/src/styles/theme-base.css` (Font variable definitions)
- **Quick Validation:** `/reports/2025-01/validation/quick-validation-report-2025-01-19.md`

---

## ⚠️ **WARNINGS**

### **Do NOT Skip DesignSystemTest.tsx**
Even though it's a development page, it should follow the same rules for consistency and to serve as a good example.

### **Backup Before Running Script**
The script modifies files in-place. Ensure you have:
- Git commit of current state
- OR manual backup of `src/app/components/` directory

### **Test After Fixes**
After running script:
1. Test all templates visually
2. Verify no broken styles
3. Check that fonts still render
4. Confirm CSS variable values are correct

---

**Created:** 2025-01-19  
**Status:** PLAN READY TO EXECUTE  
**Estimated Time:** 15-30 minutes for all fixes  
**Priority:** HIGH
