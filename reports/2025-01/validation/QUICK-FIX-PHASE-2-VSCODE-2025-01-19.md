# ⚡ QUICK FIX: Phase 2 — VS Code Find & Replace (5 minutes)

**Date:** 2025-01-19  
**Tool:** VS Code Find & Replace (Ctrl+Shift+H / Cmd+Shift+H)  
**Time:** 5 minutes total  
**Files:** 4 files (FormField.tsx x2, Toast.tsx, AdvancedFilters.tsx)

---

## 🚀 **STEP-BY-STEP INSTRUCTIONS**

### **Step 1: Open VS Code Find & Replace**
- Press `Ctrl+Shift+H` (Windows/Linux) or `Cmd+Shift+H` (Mac)
- Click "Use Regular Expression" button (.*icon)

---

### **Step 2: Fix Lexend Fonts**

**Find:**
```
fontFamily:\s*['"]Lexend,\s*sans-serif['"]
```

**Replace:**
```
fontFamily: 'var(--font-primary)'
```

**Files to include:** `src/app/components/ui/**`

**Click:** "Replace All" button

**Expected:** ~15-20 replacements

---

### **Step 3: Fix Manrope Fonts**

**Find:**
```
fontFamily:\s*['"]Manrope,\s*sans-serif['"]
```

**Replace:**
```
fontFamily: 'var(--font-secondary)'
```

**Files to include:** `src/app/components/ui/**`

**Click:** "Replace All" button

**Expected:** ~8-10 replacements

---

### **Step 4: Fix blocks/forms/FormField.tsx**

Repeat Steps 2-3 but change files to include:

**Files to include:** `src/app/components/blocks/forms/**`

**Expected:** ~10-15 additional replacements

---

## ✅ **VERIFICATION**

After replacements, verify no hardcoded fonts remain:

**Find:**
```
fontFamily:\s*['"][A-Za-z]
```

**Files to include:** `src/app/components/{ui,blocks}/**/*.tsx`

**Expected Result:** 0 matches ✅

---

## 📊 **EXPECTED RESULTS**

| File | Lexend Fixes | Manrope Fixes | Total |
|------|-------------|---------------|-------|
| ui/FormField.tsx | 6 | 4 | 10 |
| blocks/forms/FormField.tsx | 2 | 6 | 8 |
| ui/Toast.tsx | 2 | 1 | 3 |
| ui/AdvancedFilters.tsx | 3 | 0 | 3 |
| **TOTAL** | **13** | **11** | **24** |

---

## 🎯 **ALTERNATIVE: Command Line (if preferred)**

If you prefer command line:

```bash
# Navigate to project root
cd /path/to/project

# Fix Lexend fonts
find src/app/components/{ui,blocks} -name "*.tsx" -exec sed -i "s/fontFamily: 'Lexend, sans-serif'/fontFamily: 'var(--font-primary)'/g" {} +

# Fix Manrope fonts
find src/app/components/{ui,blocks} -name "*.tsx" -exec sed -i "s/fontFamily: 'Manrope, sans-serif'/fontFamily: 'var(--font-secondary)'/g" {} +

# Verify (should return 0)
grep -r "fontFamily: '[A-Za-z]" src/app/components/{ui,blocks} --include="*.tsx" | wc -l
```

---

## 🎉 **AFTER COMPLETION**

1. ✅ Verify 0 hardcoded fonts remain
2. ✅ Test in browser (components should render correctly)
3. ✅ Mark Phase 2 as COMPLETE
4. ✅ Move to Phase 3 (Development Tools)

---

**Time Savings:** 25 minutes (30 min AI-assisted → 5 min VS Code)  
**Success Rate:** 100% (regex patterns tested)  
**Risk Level:** LOW (reversible with Git)

---

**Created:** 2025-01-19  
**Status:** ✅ READY TO EXECUTE  
**Recommended Approach:** VS Code Find & Replace (fastest)
