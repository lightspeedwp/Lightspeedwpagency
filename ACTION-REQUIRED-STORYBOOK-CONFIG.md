# ⚠️ ACTION REQUIRED: Move Storybook Configuration Files

## 🎯 **ISSUE IDENTIFIED**

**Current State:**
- Storybook config files are in root directory
- This is incorrect for standard Storybook setup
- Files should be in `/.storybook/` directory

**Files to Move:**
```
❌ /preview.tsx      → Should be /.storybook/preview.tsx
❌ /manager.ts       → Should be /.storybook/manager.ts
❌ /main.ts          → Should be /.storybook/main.ts
```

**Target State:**
```
✅ /.storybook/
   ├── main.ts
   ├── preview.tsx
   └── manager.ts
```

---

## 📋 **MIGRATION STEPS**

### **Step 1: Create `.storybook/` Directory**

```bash
mkdir -p .storybook
```

---

### **Step 2: Move Storybook Configuration Files**

```bash
# Move all three files
mv /preview.tsx /.storybook/preview.tsx
mv /manager.ts /.storybook/manager.ts
mv /main.ts /.storybook/main.ts
```

---

### **Step 3: Verify Import Paths**

**In `/.storybook/preview.tsx`, ensure paths are correct:**

```typescript
// ✅ CORRECT (from /.storybook/preview.tsx)
import '../src/styles/fonts.css';
import '../src/styles/theme-base.css';
import '../src/styles/theme-light.css';
import '../src/styles/theme-dark.css';
import '../src/styles/global.css';
```

**These paths are already correct in the current files!**

---

### **Step 4: Fix CSS Variables Usage in preview.tsx**

**Current Issue in `preview.tsx` line 24:**
```typescript
// ❌ WRONG - Hardcoded font
fontFamily: 'Manrope, sans-serif',
```

**Should be:**
```typescript
// ✅ CORRECT - CSS variable
fontFamily: 'var(--font-primary)',
```

**Complete fix:**

```typescript
const withDesignSystem = (Story: any) => {
  return (
    <div
      className="storybook-wrapper"
      style={{
        minHeight: '100vh',
        backgroundColor: 'var(--background)',
        color: 'var(--foreground)',
        fontFamily: 'var(--font-primary)',    // ← FIX THIS
        padding: 'var(--spacing-8)',          // ← FIX THIS (was '2rem')
      }}
    >
      <Story />
    </div>
  );
};
```

---

### **Step 5: Verify Storybook Runs**

```bash
npm run storybook
# or
yarn storybook
# or
pnpm storybook
```

**Expected Result:**
- Storybook starts successfully
- Design system styles load
- Theme switcher works
- All stories display correctly

---

### **Step 6: Verify Design System Compliance**

**Check that all styling uses CSS variables:**

1. Open Storybook
2. Toggle between light/dark themes
3. Verify colors change correctly
4. Check that fonts are from design system (Lexend/Manrope)
5. Run accessibility tests (a11y addon)

---

## 🔧 **REQUIRED CHANGES**

### **Change 1: Move Files**

```bash
mv /preview.tsx /.storybook/preview.tsx
mv /manager.ts /.storybook/manager.ts
mv /main.ts /.storybook/main.ts
```

---

### **Change 2: Fix preview.tsx CSS Variables**

**File:** `/.storybook/preview.tsx`  
**Line 24:**

```typescript
// BEFORE
fontFamily: 'Manrope, sans-serif',

// AFTER
fontFamily: 'var(--font-primary)',
```

**Line 25:**

```typescript
// BEFORE
padding: '2rem',

// AFTER
padding: 'var(--spacing-8)',
```

---

### **Change 3: Fix manager.ts Fonts (Optional)**

**File:** `/.storybook/manager.ts`  
**Line 23:**

```typescript
// CURRENT (acceptable for Storybook UI)
fontBase: '"Manrope", sans-serif',

// IDEAL (but may not work in Storybook theming)
fontBase: 'var(--font-primary)',
```

**Note:** Storybook's theming API may not support CSS variables for `fontBase`. The current hardcoded font is acceptable for the Storybook UI itself, but all **story content** must use CSS variables.

---

## ✅ **VERIFICATION CHECKLIST**

After migration:

- [ ] `/.storybook/` directory exists
- [ ] `main.ts` in `/.storybook/` directory
- [ ] `preview.tsx` in `/.storybook/` directory
- [ ] `manager.ts` in `/.storybook/` directory
- [ ] No `main.ts` in root directory
- [ ] No `preview.tsx` in root directory
- [ ] No `manager.ts` in root directory
- [ ] `preview.tsx` uses CSS variables (not hardcoded values)
- [ ] Storybook runs successfully
- [ ] Design system styles load
- [ ] Theme switcher works (light/dark)
- [ ] Accessibility addon works

---

## 🎯 **WHY THIS MATTERS**

### **Correct Location:**

**Benefits:**
- ✅ Standard Storybook convention
- ✅ Storybook CLI finds config automatically
- ✅ Clear separation from app code
- ✅ Easy for team to locate config
- ✅ Works with all Storybook tooling

**Current (wrong) location:**
- ❌ Non-standard structure
- ❌ May confuse Storybook CLI
- ❌ Conflicts with application code
- ❌ Harder to maintain

---

### **CSS Variables:**

**Benefits:**
- ✅ User can update Storybook styling by editing CSS files
- ✅ 100% design system compliance
- ✅ Automatic theme switching
- ✅ Consistent with rest of application

**Current (hardcoded) values:**
- ❌ User must edit Storybook config to change fonts
- ❌ Not design system compliant
- ❌ Breaks theme consistency

---

## 📖 **COMPLETE DOCUMENTATION**

**See:** `/guidelines/storybook/storybook-configuration.md` for complete guide

**Includes:**
- Detailed file structure
- Design system integration
- CSS variables usage
- Accessibility setup
- Theme switching
- Common mistakes

---

## 🚨 **PRIORITY**

**Impact:** Medium-High  
**Urgency:** Medium  
**Effort:** 10-15 minutes

**Files to move:** 3  
**CSS variable fixes:** 2 lines

**Recommendation:** Complete before next Storybook development session

---

## 📊 **COMPARISON**

### **Before (Current):**

```
/
├── main.ts               ❌ Wrong location
├── preview.tsx           ❌ Wrong location
├── manager.ts            ❌ Wrong location
└── src/
```

**Issues:**
- Non-standard structure
- Hardcoded font in preview.tsx
- Hardcoded padding in preview.tsx

---

### **After (Target):**

```
/
├── .storybook/           ✅ Correct location
│   ├── main.ts           ✅ Standard convention
│   ├── preview.tsx       ✅ Uses CSS variables
│   └── manager.ts        ✅ Branded Storybook UI
└── src/
```

**Benefits:**
- Standard Storybook structure
- CSS variables for user control
- Design system compliance
- Theme switching works

---

## 🎉 **SUMMARY**

**What to do:**
1. Create `/.storybook/` directory
2. Move 3 files to `/.storybook/`
3. Fix 2 CSS variable usages in `preview.tsx`
4. Verify Storybook runs
5. Test theme switching

**Time required:** 10-15 minutes

**Result:**
- ✅ Standard Storybook structure
- ✅ Design system compliance
- ✅ User control via CSS files
- ✅ Working theme switcher

---

**Last Updated:** 2025-01-09  
**Status:** ⚠️ Action Required  
**Owner:** Development Team
