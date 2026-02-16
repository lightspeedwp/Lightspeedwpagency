# Master Migration Prompt: Shadcn to WordPress Blocks

**Role:** Lead Design System Engineer  
**Objective:** Eradicate Shadcn UI (`/src/app/components/ui/`) and enforce a strict WordPress Block System (`/src/app/components/blocks/`) with a CSS-first, BEM-structured design system.

---

## **Phase 1: Cleanup & Deletion (Immediate Action)**

We have identified duplicates and migrated components. You must now **DELETE** the following files from `src/app/components/ui/` to remove technical debt.

**Files to Delete:**
1.  `accordion.tsx` & `Accordion.tsx`
2.  `alert.tsx`
3.  `badge.tsx`
4.  `breadcrumb.tsx`
5.  `button.tsx`
6.  `card.tsx`
7.  `checkbox.tsx`
8.  `form.tsx`
9.  `input.tsx`
10. `label.tsx`
11. `pagination.tsx`
12. `radio-group.tsx`
13. `select.tsx`
14. `separator.tsx`
15. `skeleton.tsx`
16. `switch.tsx`
17. `textarea.tsx`
18. `toast.tsx`

**Instruction:** 
*   Before deleting, strictly verify that a replacement exists in `src/app/components/blocks/`.
*   If any file is currently being used as a re-export, update the import paths in the codebase (using `grep` to find usages) to point directly to the Block component, THEN delete the file.

---

## **Phase 2: Migration & Replacement (Remaining Components)**

Migrate the following complex components. For each, create a new Block component, create its CSS file, and delete the Shadcn original.

### **Batch A: Overlays & Feedback**
*   **Dialog (`dialog.tsx`)** → `blocks/feedback/Modal.tsx`
    *   *Guideline:* Use HTML `<dialog>` element or simple state. Style using `.wp-block-modal`.
*   **Sheet (`sheet.tsx`)** → `blocks/layout/OffCanvas.tsx`
    *   *Guideline:* Slide-in panel for mobile menus or filters. Style using `.wp-block-offcanvas`.
*   **Popover (`popover.tsx`)** → `blocks/utility/Popover.tsx`
    *   *Guideline:* Use `@radix-ui/react-popover` logic but strip all Tailwind. Use `.wp-block-popover` classes.

### **Batch B: Layout Utilities**
*   **Tabs (`tabs.tsx`)** → `blocks/navigation/Tabs.tsx`
    *   *Guideline:* Accessible tab interface. Style using `.wp-block-tabs`.
*   **Scroll Area (`scroll-area.tsx`)** → `blocks/utility/ScrollArea.tsx`
    *   *Guideline:* Custom scrollbar styling using CSS variables.

---

## **Phase 3: CSS Architecture & Audit**

**Goal:** Ensure all styles drive from the global theme files.

### **1. Global Files Audit**
Verify existence and content of:
*   `src/styles/theme-base.css` (Base tokens: Typography, Spacing, Radius)
*   `src/styles/theme-light.css` (Light Mode Variables)
*   `src/styles/theme-dark.css` (Dark Mode Variables)
*   `src/styles/global.css` (Main entry point)

**Rule:** `global.css` must `@import` the other three.

### **2. Component Style Rules**
*   **Naming:** All CSS files must be in `src/styles/blocks/{category}/{block-name}.css`.
*   **Selectors:** Use BEM-like classes aligned with WordPress (e.g., `.wp-block-button--outline`).
*   **Variables:** 
    *   Spacing: `var(--spacing-4)` (No `p-4`)
    *   Colors: `var(--primary)`, `var(--background)` (No hex codes)
    *   Fonts: `var(--font-primary)` (No hardcoded fonts)

---

## **Execution Instructions for AI**

1.  **Execute Phase 1:** Delete the listed files. Update imports if necessary.
2.  **Execute Phase 2 (Batch A):** Migrate Dialog, Sheet, and Popover.
3.  **Execute Phase 3:** Audit the `src/styles` folder and ensure `theme.json` alignment.

**Start now with Phase 1.**
