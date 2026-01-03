# Quick Fix Guide — Design Token Compliance

**Time:** 4-5 hours  
**Files:** 7  
**Fixes:** 52  
**Difficulty:** Easy (Find & Replace)

---

## 🎯 What You're Fixing

**Problem:** Hardcoded padding values in inline styles  
**Solution:** Replace with Tailwind CSS classes  
**Why:** Design system requires all spacing to use Tailwind utilities

---

## ⚡ Quick Start (5 Steps)

### **Step 1: Open File**
Start with `/src/app/components/ui/PageSwitcher.tsx`

### **Step 2: Find Hardcoded Padding**
Search for: `padding: '`

### **Step 3: Add Tailwind Class**
Add `className="px-4 py-2"` (see conversion table below)

### **Step 4: Remove from Style**
Remove `padding: '8px 16px',` from style prop

### **Step 5: Save & Test**
Visual check — should look identical

---

## 📋 Conversion Table

**Copy this table for quick reference:**

| Hardcoded | Tailwind | Use |
|-----------|----------|-----|
| `'4px'` | `p-1` | All sides 4px |
| `'8px'` | `p-2` | All sides 8px |
| `'12px'` | `p-3` | All sides 12px |
| `'16px'` | `p-4` | All sides 16px |
| `'20px'` | `p-5` | All sides 20px |
| `'24px'` | `p-6` | All sides 24px |
| `'28px'` | `p-7` | All sides 28px |
| `'32px'` | `p-8` | All sides 32px |
| `'48px'` | `p-12` | All sides 48px |
| **Horizontal + Vertical** |||
| `'4px 8px'` | `px-2 py-1` | 8px horiz, 4px vert |
| `'4px 10px'` | `px-2.5 py-1` | 10px horiz, 4px vert |
| `'6px 12px'` | `px-3 py-1.5` | 12px horiz, 6px vert |
| `'8px 16px'` | `px-4 py-2` | 16px horiz, 8px vert |
| `'10px 12px'` | `px-3 py-2.5` | 12px horiz, 10px vert |
| `'10px 16px'` | `px-4 py-2.5` | 16px horiz, 10px vert |
| `'12px 16px'` | `px-4 py-3` | 16px horiz, 12px vert |
| `'12px 20px'` | `px-5 py-3` | 20px horiz, 12px vert |
| `'12px 24px'` | `px-6 py-3` | 24px horiz, 12px vert |
| `'16px 24px'` | `px-6 py-4` | 24px horiz, 16px vert |

---

## 🎯 File Priority Order

**Start with easiest files first:**

1. ✅ **ScrollDownArrow.tsx** — 1 fix (2 min)
2. ✅ **PageSwitcher.tsx** — 3 fixes (10 min)
3. ✅ **ComplianceScorecard.tsx** — 3 fixes (10 min)
4. ✅ **StyleSwitcher.tsx** — 4 fixes (15 min)
5. ✅ **MegaMenu.tsx** — 4 fixes (15 min)
6. ✅ **ComponentPlayground.tsx** — 17 fixes (45 min)
7. ✅ **DesignSystemTest.tsx** — 21 fixes (60 min)

---

## 🔍 Example Fix (Before & After)

### **❌ BEFORE:**

```tsx
<div 
  style={{
    padding: '8px 16px',
    fontFamily: 'Lexend, sans-serif',
    fontSize: 'var(--text-small)',
    backgroundColor: 'var(--muted)',
  }}
>
  Category
</div>
```

### **✅ AFTER:**

```tsx
<div 
  className="px-4 py-2"
  style={{
    fontFamily: 'Lexend, sans-serif',
    fontSize: 'var(--text-small)',
    backgroundColor: 'var(--muted)',
  }}
>
  Category
</div>
```

### **What Changed:**
1. Added `className="px-4 py-2"`
2. Removed `padding: '8px 16px',` from style
3. Kept all other style properties

---

## ✅ Quick Checklist Per File

**For each file:**

- [ ] Open file in editor
- [ ] Search for `padding: '`
- [ ] For each instance:
  - [ ] Note the padding value
  - [ ] Find Tailwind equivalent in table
  - [ ] Add className with Tailwind classes
  - [ ] Remove padding from style prop
  - [ ] If style is now empty, remove style prop entirely
- [ ] Save file
- [ ] Visual test (optional: can batch at end)

---

## ⚠️ Important Rules

### **DO:**
✅ Add className with Tailwind  
✅ Remove only padding properties  
✅ Keep fontSize, color, backgroundColor, etc.  
✅ Test visually after each file (or batch at end)

### **DON'T:**
❌ Remove entire style prop if it has other properties  
❌ Change fontSize (already uses CSS variables)  
❌ Change colors (already uses CSS variables)  
❌ Touch fontFamily: 'monospace' (for code snippets)  
❌ Modify any other CSS properties

---

## 🧪 Quick Test After Each File

**Visual Test (30 seconds):**

1. Open browser
2. Navigate to page with component
3. Check spacing looks identical
4. Check responsive (resize browser)
5. Check dark mode (toggle theme)

**If broken:**
- Undo last change
- Re-check conversion table
- Verify Tailwind class is correct

---

## 📁 File Locations

All files are in: `/src/app/components/ui/`

1. `ScrollDownArrow.tsx`
2. `PageSwitcher.tsx`
3. `ComplianceScorecard.tsx`
4. `StyleSwitcher.tsx`
5. `MegaMenu.tsx`
6. `ComponentPlayground.tsx`
7. `DesignSystemTest.tsx`

---

## 🎉 Progress Tracker

**Update as you complete each file:**

```
[⬜️] ScrollDownArrow.tsx (1 fix)
[⬜️] PageSwitcher.tsx (3 fixes)
[⬜️] ComplianceScorecard.tsx (3 fixes)
[⬜️] StyleSwitcher.tsx (4 fixes)
[⬜️] MegaMenu.tsx (4 fixes)
[⬜️] ComponentPlayground.tsx (17 fixes)
[⬜️] DesignSystemTest.tsx (21 fixes)

Total: 0/52 fixes complete (0%)
```

**Legend:**
- ⬜️ Not started
- 🔄 In progress
- ✅ Complete

---

## 🚀 Speed Tips

### **Use Find & Replace:**

1. Search: `padding: '8px 16px'`
2. Note occurrences
3. For each, add className and remove padding

### **Work in Batches:**

**Batch 1 (30 min):** Small files (1-4 fixes each)  
**Batch 2 (45 min):** ComponentPlayground.tsx  
**Batch 3 (60 min):** DesignSystemTest.tsx  
**Batch 4 (30 min):** Testing all changes

---

## ✅ Final Verification

**After all fixes:**

```bash
# Search for remaining violations
grep -r "padding: '" src/app/components/ui/*.tsx

# Should return 0 results
```

**If any found:**
- Add to task list
- Fix immediately
- Re-run search

---

## 📚 Full Documentation

**For detailed instructions, see:**
- **DESIGN-TOKEN-FIX-TASK-LIST-DEC-28.md** — Complete checklist with line numbers
- **COMPREHENSIVE-DESIGN-TOKEN-AUDIT-DEC-28.md** — Full audit report
- **AUDIT-SUMMARY-COMPLETE-DEC-28.md** — Executive summary

---

## 💡 Pro Tips

1. **Start small** — Do 1-2 files, then take a break
2. **Test frequently** — Catch errors early
3. **Commit often** — One file per commit
4. **Use search** — Ctrl+F for `padding: '`
5. **Reference table** — Keep conversion table open

---

**Created:** December 28, 2024  
**Difficulty:** ⭐ Easy  
**Time:** 4-5 hours  
**Impact:** Critical for design system compliance
