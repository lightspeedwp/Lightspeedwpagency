# Design Token Fix Task List — December 28, 2024

**Priority:** Critical  
**Estimated Time:** 4-5 hours  
**Violations Found:** 50+ hardcoded padding values  
**Impact:** Cannot update spacing via CSS — must fix for design system compliance

---

## 🎯 Quick Summary

**What to Fix:** Replace all hardcoded `padding` values with Tailwind classes  
**Why:** Design system requires all spacing to use Tailwind utilities (not inline styles)  
**Files Affected:** 7 UI component files  
**Total Fixes:** 52 instances

---

## ✅ Task List (Check off as you complete)

### **File 1: PageSwitcher.tsx** (3 fixes)

**Location:** `/src/app/components/ui/PageSwitcher.tsx`

- [ ] **Line 159** — Category header
  ```tsx
  // FIND:
  style={{ padding: '8px 16px', ... }}
  
  // REPLACE WITH:
  className="px-4 py-2"
  // AND remove padding from style prop
  ```

- [ ] **Line 183** — Page item
  ```tsx
  // FIND:
  style={{ padding: '10px 16px', paddingLeft: '24px', ... }}
  
  // REPLACE WITH:
  className="py-2.5 px-4 pl-6"
  // AND remove padding/paddingLeft from style prop
  ```

- [ ] **Line 237** — Dropdown button
  ```tsx
  // FIND:
  style={{ padding: '12px 16px', ... }}
  
  // REPLACE WITH:
  className="px-4 py-3"
  // AND remove padding from style prop
  ```

---

### **File 2: StyleSwitcher.tsx** (4 fixes)

**Location:** `/src/app/components/ui/StyleSwitcher.tsx`

- [ ] **Line 85** — Container
  ```tsx
  // FIND:
  style={{ padding: '4px', ... }}
  
  // REPLACE WITH:
  className="p-1"
  // AND remove padding from style prop
  ```

- [ ] **Line 105** — Dark mode container
  ```tsx
  // FIND:
  style={{ padding: '4px', ... }}
  
  // REPLACE WITH:
  className="p-1"
  // AND remove padding from style prop
  ```

- [ ] **Line 120** — Light button
  ```tsx
  // FIND:
  style={{ padding: '6px 12px', ... }}
  
  // REPLACE WITH:
  className="px-3 py-1.5"
  // AND remove padding from style prop
  ```

- [ ] **Line 168** — Dark button
  ```tsx
  // FIND:
  style={{ padding: '6px 12px', ... }}
  
  // REPLACE WITH:
  className="px-3 py-1.5"
  // AND remove padding from style prop
  ```

---

### **File 3: MegaMenu.tsx** (4 fixes)

**Location:** `/src/app/components/ui/MegaMenu.tsx`

- [ ] **Line 140** — Mega menu container
  ```tsx
  // FIND:
  style={{ padding: '28px', ... }}
  
  // REPLACE WITH:
  className="p-7"
  // AND remove padding from style prop
  ```

- [ ] **Line 225** — Badge
  ```tsx
  // FIND:
  style={{ padding: '4px 10px', ... }}
  
  // REPLACE WITH:
  className="px-2.5 py-1"
  // AND remove padding from style prop
  ```

- [ ] **Line 238** — Featured content
  ```tsx
  // FIND:
  style={{ padding: '16px' }}
  
  // REPLACE WITH:
  className="p-4"
  // AND remove entire style prop if padding was the only property
  ```

- [ ] **Line 308** — Menu item
  ```tsx
  // FIND:
  style={{ padding: '10px 12px', ... }}
  
  // REPLACE WITH:
  className="px-3 py-2.5"
  // AND remove padding from style prop
  ```

---

### **File 4: ComponentPlayground.tsx** (17 fixes) ⚠️ LARGEST FILE

**Location:** `/src/app/components/ui/ComponentPlayground.tsx`

- [ ] **Line 110** — Header
  ```tsx
  className="p-6"
  ```

- [ ] **Line 144** — Tab bar
  ```tsx
  className="px-6 py-4"
  ```

- [ ] **Line 161** — Tab button
  ```tsx
  className="px-4 py-2.5"
  ```

- [ ] **Line 190** — Content area
  ```tsx
  className="p-8"
  ```

- [ ] **Line 199** — Preview container
  ```tsx
  className="p-6"
  ```

- [ ] **Line 254** — Text input
  ```tsx
  className="px-4 py-3"
  ```

- [ ] **Line 281** — Textarea input
  ```tsx
  className="px-4 py-3"
  ```

- [ ] **Line 308** — Toggle button
  ```tsx
  className="px-5 py-3"
  ```

- [ ] **Line 354** — Select input
  ```tsx
  className="px-4 py-3"
  ```

- [ ] **Line 386** — Reset button
  ```tsx
  className="px-6 py-3"
  ```

- [ ] **Line 440** — Copy button
  ```tsx
  className="px-4 py-2"
  ```

- [ ] **Line 468** — Code block (large)
  ```tsx
  className="p-5"
  ```

- [ ] **Line 496** — Code block (small)
  ```tsx
  className="p-3"
  ```

---

### **File 5: DesignSystemTest.tsx** (21 fixes) ⚠️ MOST FIXES

**Location:** `/src/app/components/ui/DesignSystemTest.tsx`

**Status badges (2 instances):**
- [ ] **Line 62** — Status badge → `className="px-4 py-2"`
- [ ] **Line 157** — Status badge → `className="px-4 py-2"`

**Test result cards (6 instances):**
- [ ] **Line 94** — Test card → `className="p-6"`
- [ ] **Line 120** — Test card → `className="p-6"`
- [ ] **Line 146** — Test card → `className="p-6"`
- [ ] **Line 172** — Test card → `className="p-6"`
- [ ] **Line 198** — Test card → `className="p-6"`
- [ ] **Line 224** — Test card → `className="p-6"`

**Color example cards (6 instances):**
- [ ] **Line 266** — Primary color → `className="p-6"`
- [ ] **Line 290** — Secondary color → `className="p-6"`
- [ ] **Line 314** — Accent color → `className="p-6"`
- [ ] **Line 338** — Muted color → `className="p-6"`
- [ ] **Line 361** — Destructive color → `className="p-6"`
- [ ] **Line 386** — Card color → `className="p-6"`

**Button examples (4 instances):**
- [ ] **Line 430** — Primary button → `className="px-6 py-3"`
- [ ] **Line 446** — Secondary button → `className="px-6 py-3"`
- [ ] **Line 462** — Outline button → `className="px-6 py-3"`
- [ ] **Line 478** — Ghost button → `className="px-6 py-3"`

**Section containers (4 instances):**
- [ ] **Line 507** — Typography section → `className="p-8"`
- [ ] **Line 576** — Guide card 1 → `className="p-6"`
- [ ] **Line 608** — Guide card 2 → `className="p-6"`
- [ ] **Line 639** — Guide card 3 → `className="p-6"`

**Success message:**
- [ ] **Line 673** — Success message → `className="p-6"`

---

### **File 6: ComplianceScorecard.tsx** (3 fixes)

**Location:** `/src/app/components/ui/ComplianceScorecard.tsx`

- [ ] **Line 157** — Status badge
  ```tsx
  className="px-4 py-2"
  ```

- [ ] **Line 196** — Score card
  ```tsx
  className="p-12"
  ```

- [ ] **Line 312** — Category card
  ```tsx
  className="p-8"
  ```

---

### **File 7: ScrollDownArrow.tsx** (1 fix)

**Location:** `/src/app/components/ui/ScrollDownArrow.tsx`

- [ ] **Line 31** — Button padding
  ```tsx
  className="p-2"
  ```

---

## 📋 Tailwind Spacing Cheatsheet

Use this reference when converting:

| Hardcoded Value | Tailwind Class | Pixels |
|----------------|----------------|--------|
| `padding: '4px'` | `p-1` | 4px |
| `padding: '6px'` | `p-1.5` | 6px |
| `padding: '8px'` | `p-2` | 8px |
| `padding: '10px'` | `p-2.5` | 10px |
| `padding: '12px'` | `p-3` | 12px |
| `padding: '16px'` | `p-4` | 16px |
| `padding: '20px'` | `p-5` | 20px |
| `padding: '24px'` | `p-6` | 24px |
| `padding: '28px'` | `p-7` | 28px |
| `padding: '32px'` | `p-8` | 32px |
| `padding: '48px'` | `p-12` | 48px |

**Combined padding (horizontal + vertical):**

| Hardcoded | Tailwind | Description |
|-----------|----------|-------------|
| `'4px 8px'` | `px-2 py-1` | 8px horizontal, 4px vertical |
| `'4px 10px'` | `px-2.5 py-1` | 10px horizontal, 4px vertical |
| `'6px 12px'` | `px-3 py-1.5` | 12px horizontal, 6px vertical |
| `'8px 16px'` | `px-4 py-2` | 16px horizontal, 8px vertical |
| `'10px 12px'` | `px-3 py-2.5` | 12px horizontal, 10px vertical |
| `'10px 16px'` | `px-4 py-2.5` | 16px horizontal, 10px vertical |
| `'12px 16px'` | `px-4 py-3` | 16px horizontal, 12px vertical |
| `'12px 20px'` | `px-5 py-3` | 20px horizontal, 12px vertical |
| `'12px 24px'` | `px-6 py-3` | 24px horizontal, 12px vertical |
| `'16px 24px'` | `px-6 py-4` | 24px horizontal, 16px vertical |

**Specific side padding:**

| Hardcoded | Tailwind | Description |
|-----------|----------|-------------|
| `paddingLeft: '24px'` | `pl-6` | Left padding only |
| `paddingTop: '20px'` | `pt-5` | Top padding only |
| `paddingRight: '16px'` | `pr-4` | Right padding only |
| `paddingBottom: '12px'` | `pb-3` | Bottom padding only |

---

## 🔄 Implementation Pattern

**For each file:**

1. **Open the file**
2. **Find the line number from checklist**
3. **Locate the style prop with hardcoded padding**
4. **Add className with Tailwind equivalent**
5. **Remove padding from style prop**
6. **If style prop is now empty, remove entire style prop**
7. **Save file**
8. **Check off item in checklist**
9. **Test visually (optional: can batch test at end)**

**Example:**

```tsx
// ❌ BEFORE (Line 159 in PageSwitcher.tsx)
<div 
  style={{
    padding: '8px 16px',
    fontFamily: 'Lexend, sans-serif',
    fontSize: 'var(--text-small)',
    backgroundColor: 'var(--muted)',
  }}
>

// ✅ AFTER
<div 
  className="px-4 py-2"
  style={{
    fontFamily: 'Lexend, sans-serif',
    fontSize: 'var(--text-small)',
    backgroundColor: 'var(--muted)',
  }}
>
```

---

## ⚠️ Important Notes

### **DO:**
- ✅ Add className with Tailwind classes
- ✅ Remove padding properties from style prop
- ✅ Keep other style properties (fontSize, backgroundColor, etc.)
- ✅ Test after each file or batch at end

### **DON'T:**
- ❌ Remove entire style prop if it has other properties
- ❌ Change fontSize, color, backgroundColor (those use CSS variables correctly)
- ❌ Touch fontFamily: 'monospace' (it's for code snippets)
- ❌ Modify any other properties

---

## ✅ Testing Checklist

After completing all fixes, verify:

- [ ] **Visual check** — All components look the same
- [ ] **Spacing check** — No layout shifts or broken spacing
- [ ] **Responsive check** — Works on mobile, tablet, desktop
- [ ] **Dark mode check** — No issues in dark theme
- [ ] **Browser check** — Works in Chrome, Firefox, Safari

**Quick visual test:**
1. Navigate to `/dev-tools/style-guide`
2. Check all buttons, inputs, cards render correctly
3. Navigate to `/dev-tools/` (Dev Tools Hub)
4. Check tool cards have correct spacing
5. Test PageSwitcher dropdown
6. Test StyleSwitcher toggle

---

## 📊 Progress Tracker

**Total Files:** 7  
**Total Fixes:** 52

| File | Fixes | Status |
|------|-------|--------|
| PageSwitcher.tsx | 3 | ⬜️ Not started |
| StyleSwitcher.tsx | 4 | ⬜️ Not started |
| MegaMenu.tsx | 4 | ⬜️ Not started |
| ComponentPlayground.tsx | 17 | ⬜️ Not started |
| DesignSystemTest.tsx | 21 | ⬜️ Not started |
| ComplianceScorecard.tsx | 3 | ⬜️ Not started |
| ScrollDownArrow.tsx | 1 | ⬜️ Not started |

**Update as you go:**
- ⬜️ Not started
- 🔄 In progress
- ✅ Complete

---

## 🚀 Quick Start

1. **Start with smallest files:**
   - ScrollDownArrow.tsx (1 fix)
   - PageSwitcher.tsx (3 fixes)
   - ComplianceScorecard.tsx (3 fixes)
   - StyleSwitcher.tsx (4 fixes)
   - MegaMenu.tsx (4 fixes)

2. **Then tackle larger files:**
   - ComponentPlayground.tsx (17 fixes)
   - DesignSystemTest.tsx (21 fixes)

3. **Test after each file or batch at end**

4. **Commit with message:**
   ```bash
   git add <file>
   git commit -m "fix: replace hardcoded padding with Tailwind classes in <ComponentName>"
   ```

---

## ⏱️ Estimated Time Breakdown

| File | Fixes | Time |
|------|-------|------|
| ScrollDownArrow.tsx | 1 | 2 min |
| PageSwitcher.tsx | 3 | 10 min |
| ComplianceScorecard.tsx | 3 | 10 min |
| StyleSwitcher.tsx | 4 | 15 min |
| MegaMenu.tsx | 4 | 15 min |
| ComponentPlayground.tsx | 17 | 45 min |
| DesignSystemTest.tsx | 21 | 60 min |
| **Testing** | — | 30 min |
| **Documentation** | — | 30 min |
| **Total** | **52** | **~4 hours** |

---

## ✅ Final Verification

After completing all fixes, run:

```bash
# 1. Search for remaining violations
grep -r "padding: '" src/app/components/ui/*.tsx

# 2. Should return 0 results (or only code comments)
# If you find any, add them to the task list and fix

# 3. Run tests (if available)
npm test

# 4. Build project to ensure no errors
npm run build
```

---

**Created:** December 28, 2024  
**Status:** Ready for implementation  
**Priority:** Critical — Required for design system compliance
