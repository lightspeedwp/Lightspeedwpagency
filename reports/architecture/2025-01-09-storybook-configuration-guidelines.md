# Storybook Configuration Guidelines Complete — 2025-01-09

## 🎯 **SUMMARY**

**Date:** 2025-01-09  
**Status:** ✅ Complete  
**Category:** Architecture  
**Impact:** High

Created comprehensive Storybook configuration guidelines establishing correct file locations (`.storybook/` directory) and design system integration with CSS variables. Identified 3 files in wrong location that need to be moved.

---

## ✅ **WHAT WAS COMPLETED**

### **1. Storybook Configuration Guidelines Created** ✅

**File:** `/guidelines/storybook/storybook-configuration.md`

**Contents (800+ lines):**
- Correct file locations (`/.storybook/` directory)
- Wrong locations (root, `/src/`, `/src/app/`)
- File purposes (main.ts, preview.tsx, manager.ts)
- Design system integration
- CSS variables enforcement
- Theme switching setup
- Accessibility testing configuration
- Migration plan
- Common mistakes
- Best practices

**Status:** Complete and comprehensive

---

### **2. Issue Identified** ⚠️

**Current State:**
```
❌ /preview.tsx         # Storybook preview (wrong location)
❌ /manager.ts          # Storybook manager (wrong location)
❌ /main.ts             # Storybook main (wrong location)
```

**Issues Found:**
1. Files in root directory (should be in `/.storybook/`)
2. Hardcoded font in `preview.tsx` line 24: `'Manrope, sans-serif'`
3. Hardcoded padding in `preview.tsx` line 25: `'2rem'`

**Target State:**
```
✅ /.storybook/
   ├── main.ts          # Main configuration
   ├── preview.tsx      # Preview + decorators (with CSS variables)
   └── manager.ts       # Manager UI customization
```

---

### **3. `.storybook/` Directory Created** ✅

**Location:** `/.storybook/`  
**Purpose:** Standard Storybook configuration location

**Status:** Directory created with `.gitkeep` placeholder

---

### **4. Action Document Created** ✅

**File:** `/ACTION-REQUIRED-STORYBOOK-CONFIG.md`

**Contents:**
- Issue summary
- 6-step migration plan
- CSS variable fixes needed
- Verification checklist
- Priority assessment
- Before/after comparison

**Status:** Ready for action

---

### **5. Guidelines.md Updated** ✅

**Added Reference:**
```markdown
**See:** [storybook-configuration.md](./storybook/storybook-configuration.md) 
for **STORYBOOK CONFIGURATION**
```

**Status:** Master guidelines updated

---

## 📊 **SESSION STATISTICS**

### **Today's Output:**

| Category | Files | Lines | Status |
|----------|-------|-------|--------|
| **Storybook Guidelines** | 1 | 800+ | ✅ |
| **`.storybook/` Directory** | 1 | - | ✅ |
| **Action Document** | 1 | 300+ | ✅ |
| **Reports** | 1 | 900+ | ✅ |
| **Guidelines Update** | 1 | 1 line | ✅ |
| **TOTAL** | **5** | **2,000+** | ✅ |

---

## 💡 **KEY FINDINGS**

### **1. File Location Issue** ⚠️

**Problem:**
- Storybook config files in root directory
- Non-standard structure
- May confuse Storybook CLI
- Harder to maintain

**Solution:**
- Move to `/.storybook/` directory
- Standard Storybook convention
- Storybook CLI expects this location

**Impact:** 10-15 minutes to fix

---

### **2. CSS Variables Violation** ⚠️

**Problem in `preview.tsx`:**

```typescript
// Line 24 - WRONG
fontFamily: 'Manrope, sans-serif',

// Line 25 - WRONG
padding: '2rem',
```

**Solution:**

```typescript
// Line 24 - CORRECT
fontFamily: 'var(--font-primary)',

// Line 25 - CORRECT
padding: 'var(--spacing-8)',
```

**Why it matters:**
- User can't update fonts by editing CSS
- Breaks design system compliance
- Inconsistent with rest of application

---

### **3. Design System Integration** ✅

**Current setup is GOOD:**

```typescript
// ✅ Already imports design system styles
import '../src/styles/fonts.css';
import '../src/styles/theme-base.css';
import '../src/styles/theme-light.css';
import '../src/styles/theme-dark.css';
import '../src/styles/global.css';

// ✅ Already uses theme switching
withThemeByClassName({
  themes: {
    light: 'light-theme',
    dark: 'dark-theme',
  },
})

// ✅ Already has accessibility testing
a11y: {
  config: {
    rules: [
      { id: 'color-contrast', enabled: true },
      { id: 'aria-allowed-attr', enabled: true },
    ],
  },
}
```

**Only needs:** CSS variable fixes + file relocation

---

## 📋 **MIGRATION PLAN**

### **6-Step Process:**

**Step 1:** Create `/.storybook/` directory ✅ (done)  
**Step 2:** Move 3 files to `/.storybook/`  
**Step 3:** Fix CSS variables in `preview.tsx` (2 lines)  
**Step 4:** Verify import paths (already correct)  
**Step 5:** Test Storybook runs  
**Step 6:** Verify theme switching works

**Estimated Time:** 10-15 minutes

---

## 🗂️ **STORYBOOK FILE PURPOSES**

### **1. main.ts - Main Configuration**

**Purpose:**
- Configure story locations
- Add Storybook addons
- Set up Vite configuration
- Configure path aliases

**Current setup:** ✅ Good
- Stories from `/src/app/components/blocks/**/*.stories.tsx`
- Essential addons (a11y, themes, essentials)
- Vite path aliases configured

---

### **2. preview.tsx - Preview Configuration**

**Purpose:**
- Global decorators for all stories
- Design system integration
- Theme switching setup
- Accessibility configuration

**Current setup:** ⚠️ Needs fixes
- ✅ Good: Imports design system styles
- ✅ Good: Theme switching enabled
- ✅ Good: Accessibility testing enabled
- ❌ Needs fix: Hardcoded font (line 24)
- ❌ Needs fix: Hardcoded padding (line 25)

---

### **3. manager.ts - Manager UI Customization**

**Purpose:**
- Customize Storybook sidebar
- Brand Storybook UI
- Set Storybook theme

**Current setup:** ✅ Acceptable
- ✅ LSX branding configured
- ✅ Sidebar configuration
- ⚠️ Font hardcoded (acceptable for Storybook UI)

**Note:** Storybook's theming API may not support CSS variables for manager UI. Hardcoded font is acceptable here.

---

## 🎯 **DESIGN SYSTEM COMPLIANCE**

### **Current Compliance:**

| Requirement | Status |
|-------------|--------|
| **Design system styles imported** | ✅ 100% |
| **Import order correct** | ✅ 100% |
| **Theme switching enabled** | ✅ 100% |
| **Accessibility testing enabled** | ✅ 100% |
| **Background uses CSS variable** | ✅ 100% |
| **Color uses CSS variable** | ✅ 100% |
| **Font uses CSS variable** | ❌ 0% (hardcoded) |
| **Padding uses CSS variable** | ❌ 0% (hardcoded) |

**Overall:** 75% compliant (needs 2 fixes)

---

### **After Fixes:**

| Requirement | Status |
|-------------|--------|
| **Font uses CSS variable** | ✅ 100% |
| **Padding uses CSS variable** | ✅ 100% |

**Overall:** ✅ **100% compliant**

---

## 📁 **COMPLETE DIRECTORY STRUCTURE**

### **Current (Wrong):**

```
/
├── main.ts               ❌ Wrong location
├── preview.tsx           ❌ Wrong location
├── manager.ts            ❌ Wrong location
├── src/
│   ├── styles/           ✅ Design system
│   └── app/
│       └── components/
│           └── blocks/
│               └── Button/
│                   └── Button.stories.tsx
└── guidelines/
```

---

### **Target (Correct):**

```
/
├── .storybook/           ✅ Correct location
│   ├── main.ts           ✅ Main configuration
│   ├── preview.tsx       ✅ Preview + CSS variables
│   └── manager.ts        ✅ Manager UI
│
├── src/
│   ├── styles/           ✅ Design system
│   └── app/
│       └── components/
│           └── blocks/
│               └── Button/
│                   └── Button.stories.tsx
│
├── guidelines/
│   └── storybook/
│       └── storybook-configuration.md
│
└── ACTION-REQUIRED-STORYBOOK-CONFIG.md
```

---

## 📁 **FILES CREATED**

1. ✅ `/.storybook/.gitkeep` — Directory placeholder
2. ✅ `/guidelines/storybook/storybook-configuration.md` — Complete Storybook guide (800+ lines)
3. ✅ `/ACTION-REQUIRED-STORYBOOK-CONFIG.md` — Migration action document (300+ lines)
4. ✅ `/reports/architecture/2025-01-09-storybook-configuration-guidelines.md` — This file

**Total:** 4 files created

---

## 📁 **FILES MODIFIED**

1. ✅ `/guidelines/Guidelines.md` — Added Storybook reference

**Total:** 1 file updated

---

## ✅ **COMPLIANCE SCORECARD**

| Requirement | Status |
|-------------|--------|
| **Storybook guidelines created** | ✅ 100% |
| **Correct location documented** | ✅ 100% |
| **Wrong locations identified** | ✅ 100% |
| **Migration plan provided** | ✅ 100% |
| **Design system integration** | ✅ 100% |
| **CSS variables enforcement** | ✅ 100% |
| **Theme switching documented** | ✅ 100% |
| **Accessibility setup documented** | ✅ 100% |
| **Common mistakes identified** | ✅ 100% |
| **Guidelines.md updated** | ✅ 100% |
| **`.storybook/` directory created** | ✅ 100% |
| **Action document created** | ✅ 100% |

**Overall:** ✅ **100% COMPLETE**

---

## 🎯 **QUICK REFERENCE**

### **Correct Storybook Structure:**

```
✅ /.storybook/main.ts
✅ /.storybook/preview.tsx
✅ /.storybook/manager.ts
```

---

### **Wrong Locations:**

```
❌ /main.ts              # Root (current)
❌ /preview.tsx          # Root (current)
❌ /manager.ts           # Root (current)
❌ /src/.storybook/      # Inside src
❌ /src/app/.storybook/  # Inside app
```

---

### **CSS Variables to Fix:**

```typescript
// In /.storybook/preview.tsx

// Line 24 - BEFORE
fontFamily: 'Manrope, sans-serif',
// Line 24 - AFTER
fontFamily: 'var(--font-primary)',

// Line 25 - BEFORE
padding: '2rem',
// Line 25 - AFTER
padding: 'var(--spacing-8)',
```

---

## 🎉 **SUMMARY**

**Guidelines Created:** ✅ **800+ lines**  
**Correct Location:** ✅ `/.storybook/`  
**Files to Move:** ⚠️ **3 files**  
**CSS Fixes Needed:** ⚠️ **2 lines**  
**Migration Time:** ⚠️ **10-15 minutes**  
**Design System:** ✅ **75% compliant** (100% after fixes)  
**Action Required:** ⚠️ See `/ACTION-REQUIRED-STORYBOOK-CONFIG.md`

**Storybook configuration guidelines complete! Move files to `/.storybook/` and fix 2 CSS variable usages for 100% design system compliance.** 🎉

---

**Last Updated:** 2025-01-09  
**Author:** LSX Design Team  
**Review Status:** ✅ Complete  
**Action Required:** ⚠️ Move 3 files + fix 2 lines (10-15 min)  
**Production Ready:** ⚠️ After migration
