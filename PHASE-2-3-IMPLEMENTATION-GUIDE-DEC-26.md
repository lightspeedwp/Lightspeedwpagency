# Phases 2 & 3: Mobile Filters + Component Audit — Implementation Guide

**Complete step-by-step guide for remaining work**

---

## 📱 Phase 2: Mobile Filter Integration

### **Overview**

Add mobile-friendly filters to all archive templates using the MobileFilterPopover component.

**Goal:** WCAG AAA compliant mobile filters with 48×48px touch targets

---

### **Templates Requiring Mobile Filters:**

1. ✅ BlogIndexTemplate — Add category mobile filters
2. ✅ PortfolioArchiveTemplate — Add industry mobile filters  
3. ✅ CategoryArchiveTemplate — (Optional - may not need additional filters)
4. ✅ AuthorArchiveTemplate — (Optional - may not need filters)

---

### **Implementation Pattern (Universal)**

For each archive template, follow this pattern:

#### **Step 1: Add Missing Imports**

```tsx
import { MobileFilterPopover, FilterOption } from '../common/MobileFilterPopover';
import { Filter } from 'lucide-react';
```

#### **Step 2: Add State (if not already present)**

```tsx
const [isMobileFilterOpen, setIsMobileFilterOpen] = useState(false);
const [selectedSort, setSelectedSort] = useState('Latest First'); // If using sort
```

#### **Step 3: Create Filter Options**

```tsx
// Create filter options from categories/industries
const filterOptions: FilterOption[] = categories
  .filter(cat => cat !== 'All') // Exclude "All" (handled separately)
  .map(cat => ({
    id: cat.toLowerCase().replace(/\s+/g, '-'),
    label: cat,
    count: posts.filter(p => p.category === cat).length // Optional
  }));
```

#### **Step 4: Add Mobile Filter Button**

Place this **BEFORE** the desktop filter buttons:

```tsx
{/* Mobile Filter Button (show on mobile, hide on desktop) */}
<div className="flex items-center justify-between gap-4 lg:hidden mb-4">
  <h2 
    style={{
      fontFamily: 'Lexend, sans-serif',
      fontSize: 'var(--text-h4)',
      fontWeight: 'var(--font-weight-medium)',
      color: 'var(--foreground)',
      margin: 0
    }}
  >
    Filter Posts
  </h2>
  
  <button
    onClick={() => setIsMobileFilterOpen(true)}
    style={{
      display: 'flex',
      alignItems: 'center',
      gap: '8px',
      minHeight: '48px',
      minWidth: '48px',
      padding: '12px 24px',
      backgroundColor: 'var(--primary)',
      color: 'var(--primary-foreground)',
      border: 'none',
      borderRadius: 'var(--radius)',
      fontFamily: 'Lexend, sans-serif',
      fontSize: 'var(--text-base)',
      fontWeight: 'var(--font-weight-medium)',
      cursor: 'pointer',
      transition: 'all 0.2s ease',
    }}
    onMouseEnter={(e) => {
      e.currentTarget.style.transform = 'scale(1.05)';
    }}
    onMouseLeave={(e) => {
      e.currentTarget.style.transform = 'scale(1)';
    }}
    aria-label="Open filter menu"
  >
    <Filter size={20} />
    <span>Filters</span>
  </button>
</div>
```

#### **Step 5: Update Desktop Filters**

Wrap existing filter buttons with responsive classes:

```tsx
{/* Desktop Filters (hide on mobile, show on desktop) */}
<div className="hidden lg:flex flex-wrap gap-3">
  {categories.map((category) => (
    <button
      key={category}
      onClick={() => setSelectedCategory(category)}
      className="px-6 py-3"
      style={{
        fontFamily: 'Lexend, sans-serif',
        fontSize: 'var(--text-base)',
        fontWeight: 'var(--font-weight-medium)',
        backgroundColor: selectedCategory === category 
          ? 'var(--primary)' 
          : 'var(--background)',
        color: selectedCategory === category 
          ? 'var(--primary-foreground)' 
          : 'var(--foreground)',
        border: `1px solid ${selectedCategory === category ? 'var(--primary)' : 'var(--border-soft)'}`,
        borderRadius: 'var(--radius)',
        cursor: 'pointer',
        transition: 'all 0.2s ease',
        minHeight: '44px',
        minWidth: '44px',
      }}
      onMouseEnter={(e) => {
        if (selectedCategory !== category) {
          e.currentTarget.style.borderColor = 'var(--primary)';
        }
      }}
      onMouseLeave={(e) => {
        if (selectedCategory !== category) {
          e.currentTarget.style.borderColor = 'var(--border-soft)';
        }
      }}
    >
      {category}
    </button>
  ))}
</div>
```

#### **Step 6: Add MobileFilterPopover Component**

Place this at the end of the component, **BEFORE** `</main>`:

```tsx
{/* Mobile Filter Popover */}
<MobileFilterPopover
  isOpen={isMobileFilterOpen}
  onClose={() => setIsMobileFilterOpen(false)}
  title="Filter by Category"
  options={filterOptions}
  selectedOption={selectedCategory}
  onSelect={setSelectedCategory}
  allLabel="All Categories"
/>
```

---

### **Template-Specific Implementations**

#### **1. BlogIndexTemplate**

**Filters:** Categories (Announcements, Tutorials, Case Studies, etc.)

```tsx
const filterOptions: FilterOption[] = [
  { id: 'announcements', label: 'Announcements', count: 1 },
  { id: 'tutorials', label: 'Tutorials', count: 1 },
  { id: 'case-studies', label: 'Case Studies', count: 1 },
  { id: 'design-system', label: 'Design System', count: 1 },
  { id: 'development', label: 'Development', count: 1 },
  { id: 'updates', label: 'Updates', count: 1 },
];

<MobileFilterPopover
  isOpen={isMobileFilterOpen}
  onClose={() => setIsMobileFilterOpen(false)}
  title="Filter by Category"
  options={filterOptions}
  selectedOption={selectedCategory}
  onSelect={setSelectedCategory}
  allLabel="All Posts"
/>
```

#### **2. PortfolioArchiveTemplate**

**Filters:** Industries (E-commerce, Healthcare, Education, etc.)

```tsx
const industries = ['All', 'E-commerce', 'Healthcare', 'Education', 'Finance', 'Technology', 'Non-Profit'];

const filterOptions: FilterOption[] = industries
  .filter(ind => ind !== 'All')
  .map(ind => ({
    id: ind.toLowerCase(),
    label: ind,
    count: portfolioItems.filter(p => p.industry === ind).length
  }));

<MobileFilterPopover
  isOpen={isMobileFilterOpen}
  onClose={() => setIsMobileFilterOpen(false)}
  title="Filter by Industry"
  options={filterOptions}
  selectedOption={selectedIndustry}
  onSelect={setSelectedIndustry}
  allLabel="All Projects"
/>
```

#### **3. CategoryArchiveTemplate**

**Filters:** (Optional) Related categories in sidebar

Since this template shows posts from a specific category, filters may not be needed. However, if desired:

```tsx
// Use related categories from sidebar
const filterOptions: FilterOption[] = relatedCategories.map(cat => ({
  id: cat.href,
  label: cat.name,
  count: cat.count
}));

<MobileFilterPopover
  isOpen={isMobileFilterOpen}
  onClose={() => setIsMobileFilterOpen(false)}
  title="Browse Categories"
  options={filterOptions}
  selectedOption={currentCategory}
  onSelect={(catId) => navigateTo(catId)}
  allLabel="All Categories"
/>
```

#### **4. AuthorArchiveTemplate**

**Filters:** (Optional) Post categories by author

```tsx
const authorCategories = ['All', 'Travel Tips', 'Safety', 'Remote Work'];

const filterOptions: FilterOption[] = authorCategories
  .filter(cat => cat !== 'All')
  .map(cat => ({
    id: cat.toLowerCase().replace(/\s+/g, '-'),
    label: cat,
    count: authorPosts.filter(p => p.category === cat).length
  }));

<MobileFilterPopover
  isOpen={isMobileFilterOpen}
  onClose={() => setIsMobileFilterOpen(false)}
  title="Filter by Category"
  options={filterOptions}
  selectedOption={selectedCategory}
  onSelect={setSelectedCategory}
  allLabel="All Posts"
/>
```

---

### **Phase 2 Checklist**

For each template:

- [ ] **Import MobileFilterPopover and Filter icon**
- [ ] **Add isMobileFilterOpen state**
- [ ] **Create filterOptions array**
- [ ] **Add mobile filter button** (hide on desktop with `lg:hidden`)
- [ ] **Wrap desktop filters** (hide on mobile with `hidden lg:flex`)
- [ ] **Add MobileFilterPopover component** at end
- [ ] **Test mobile responsiveness** (< 1024px width)
- [ ] **Test filter functionality** (all options work)
- [ ] **Test touch targets** (48×48px minimum)
- [ ] **Test keyboard navigation** (Escape, Tab, Enter)
- [ ] **Verify WCAG AAA compliance**

---

## 🔍 Phase 3: Comprehensive Component Audit

### **Overview**

Audit all 36 templates for:
1. **Light mode** contrast ratios (WCAG AA/AAA)
2. **Dark mode** contrast ratios (WCAG AA/AAA)
3. **Design system compliance** (CSS variables, fonts, spacing)
4. **Accessibility** (keyboard nav, focus states, touch targets)

---

### **Templates to Audit (36 Total)**

#### **Core Templates (8):**
1. FrontPageTemplate
2. BlogIndexTemplate
3. PortfolioArchiveTemplate
4. CategoryArchiveTemplate
5. AuthorArchiveTemplate
6. ArchiveTemplate
7. PageTemplate
8. 404Template

#### **Single/Detail Templates (4):**
9. PostSingleTemplate
10. PortfolioSingleTemplate
11. ServicesTemplate
12. ContactPageTemplate

#### **About Section (4):**
13. AboutTemplate
14. AboutProcessTemplate
15. AboutCultureTemplate
16. AboutHistoryTemplate

#### **Service Templates (7):**
17. TeamTemplate
18. HostingTemplate
19. FAQTemplate
20. WordPressDevelopmentTemplate
21. WooCommerceDevelopmentTemplate
22. BlockThemeDevelopmentTemplate
23. DesignSystemsTemplate

#### **Conversion Templates (3):**
24. PricingTemplate
25. WhyChooseUsTemplate (TBD)
26. GuaranteesTemplate (TBD)

#### **Additional Service Templates (~10):**
27. AccessibilityServicesTemplate
28. PerformanceOptimizationTemplate
29. SiteMigrationTemplate
30. MaintenanceTemplate
31. ConsultingTemplate
32. ... (other service pages)

---

### **Audit Process (Per Template)**

#### **Step 1: Light Mode Testing**

1. **Open template in browser**
2. **Ensure light mode is active**
3. **Open Chrome DevTools** (F12)
4. **Inspect each text element:**
   - Click element in Elements tab
   - Find `color` in Styles pane
   - Click color swatch
   - DevTools shows contrast ratio automatically
   - Record ratio (e.g., "7.2:1")
   - Note WCAG level (AA = 4.5:1, AAA = 7:1)

5. **Test these combinations:**
   - Primary heading on background
   - Body text on background
   - Muted text on background
   - Button text on button background
   - Link text on background
   - Card text on card background

6. **Document results:**
   ```markdown
   ### FrontPageTemplate - Light Mode
   - H1 on background: 8.5:1 (AAA ✅)
   - Body text on background: 7.2:1 (AAA ✅)
   - Muted text on background: 4.8:1 (AA ✅, AAA ❌)
   - Button text on primary: 9.1:1 (AAA ✅)
   - Link text on background: 5.2:1 (AA ✅, AAA ❌)
   ```

#### **Step 2: Dark Mode Testing**

1. **Toggle dark mode** (click StyleSwitcher button)
2. **Repeat contrast checks** from Step 1
3. **Compare to light mode results**
4. **Document results:**
   ```markdown
   ### FrontPageTemplate - Dark Mode
   - H1 on background: 12.1:1 (AAA ✅)
   - Body text on background: 10.5:1 (AAA ✅)
   - Muted text on background: 8.2:1 (AAA ✅)
   - Button text on primary: 8.3:1 (AAA ✅)
   - Link text on background: 7.5:1 (AAA ✅)
   ```

#### **Step 3: Design System Compliance Check**

Verify each template uses:

**Colors:**
```tsx
// ❌ WRONG - Hardcoded colors
color: '#333333'
backgroundColor: '#f5f5f5'

// ✅ CORRECT - CSS variables
color: 'var(--foreground)'
backgroundColor: 'var(--background)'
```

**Typography:**
```tsx
// ❌ WRONG - Hardcoded sizes/fonts
fontSize: '24px'
fontFamily: 'Arial'

// ✅ CORRECT - CSS variables + approved fonts
fontSize: 'var(--text-h2)'
fontFamily: 'Lexend, sans-serif'
```

**Spacing:**
```tsx
// ❌ WRONG - Hardcoded pixels
<div style={{ padding: '24px', margin: '16px 0' }}>

// ✅ CORRECT - Tailwind classes
<div className="p-6 my-4">
```

**Font Families:**
```tsx
// ✅ APPROVED ONLY
fontFamily: 'Lexend, sans-serif'  // Headings and body
fontFamily: 'Manrope, sans-serif' // Small text only
```

**Font Weights:**
```tsx
// ✅ MODERN WEIGHTS
fontWeight: 'var(--font-weight-medium)'  // 500 for headings
fontWeight: 'var(--font-weight-regular)' // 400 for body
fontWeight: 'var(--font-weight-semibold)' // 600 for emphasis (rare)
```

#### **Step 4: Accessibility Check**

Test each template for:

**Keyboard Navigation:**
- [ ] Press Tab to navigate through all interactive elements
- [ ] All buttons, links, inputs are reachable
- [ ] Order is logical (top to bottom, left to right)
- [ ] No keyboard traps

**Focus States:**
- [ ] All interactive elements show visible focus (2px ring)
- [ ] Focus color is clear in both light and dark mode
- [ ] Focus doesn't break layout

**Touch Targets:**
- [ ] All buttons/links are 48×48px minimum on mobile
- [ ] All buttons/links are 44×44px minimum on desktop
- [ ] Adequate spacing between touch targets (8px minimum)

**ARIA Labels:**
- [ ] Buttons have descriptive labels
- [ ] Icon-only buttons have aria-label
- [ ] Form inputs have associated labels
- [ ] Landmarks are properly labeled (main, nav, footer)

**Semantic HTML:**
- [ ] Exactly one `<h1>` per page
- [ ] Heading hierarchy is logical (no skipping levels)
- [ ] Lists use `<ul>` or `<ol>` tags
- [ ] Buttons use `<button>` (not `<div onclick>`)

#### **Step 5: Document Findings**

Create a report for each template:

```markdown
## FrontPageTemplate Audit Report

**File:** `/src/app/components/templates/FrontPageTemplate.tsx`

### Light Mode Results
- **Primary text (H1):** 8.5:1 (AAA ✅)
- **Body text:** 7.2:1 (AAA ✅)
- **Muted text:** 4.8:1 (AA ✅, AAA ❌)
- **Button text:** 9.1:1 (AAA ✅)
- **Link text:** 5.2:1 (AA ✅, AAA ❌)

**Compliance:** ✅ WCAG AA (100%), ⚠️ WCAG AAA (60%)

### Dark Mode Results
- **Primary text (H1):** 12.1:1 (AAA ✅)
- **Body text:** 10.5:1 (AAA ✅)
- **Muted text:** 8.2:1 (AAA ✅)
- **Button text:** 8.3:1 (AAA ✅)
- **Link text:** 7.5:1 (AAA ✅)

**Compliance:** ✅ WCAG AA (100%), ✅ WCAG AAA (100%)

### Design System Compliance
- ✅ All colors use CSS variables
- ✅ All typography uses CSS variables
- ✅ All spacing uses Tailwind classes
- ✅ Only Lexend/Manrope fonts used
- ✅ Font weights: 500 (headings), 400 (body)

### Accessibility
- ✅ Keyboard navigation works
- ✅ Focus states visible
- ✅ Touch targets: 48×48px (mobile), 44×44px (desktop)
- ✅ ARIA labels present
- ✅ Semantic HTML correct

### Issues Found
None ✅

### Recommendations
- Consider increasing muted text contrast in light mode (currently 4.8:1, AAA requires 7:1)
- Consider increasing link contrast in light mode (currently 5.2:1, AAA requires 7:1)

**Status:** ✅ WCAG AA Compliant (both modes)
**AAA Status:** ✅ Dark mode 100%, ⚠️ Light mode 60%
```

---

### **Chrome DevTools Contrast Checker Guide**

1. **Open DevTools:** Press F12 or right-click → Inspect
2. **Select Elements tab**
3. **Click any text element** in the DOM tree
4. **Find color in Styles pane:** Look for `color: var(--foreground)`
5. **Click the color swatch** (small colored square)
6. **View contrast ratio:** DevTools shows:
   - Ratio number (e.g., "7.2")
   - WCAG AA checkmark (if ≥ 4.5:1)
   - WCAG AAA checkmark (if ≥ 7:1)
7. **Record the ratio** in your audit document

**Visual Guide:**
```
Styles pane:
┌─────────────────────────┐
│ element.style {         │
│   color: var(--...)     │  ← Click this swatch
│   [●] #1a1a1a          │  ← DevTools resolves variable
│ }                       │
│                         │
│ Contrast: 7.2          │  ← Ratio shown here
│ ✓ AA                   │  ← AA passed (4.5:1+)
│ ✓ AAA                  │  ← AAA passed (7:1+)
└─────────────────────────┘
```

---

### **Quick Contrast Reference**

**WCAG Levels:**
- **AA (minimum):** 4.5:1 for normal text, 3:1 for large text
- **AAA (enhanced):** 7:1 for normal text, 4.5:1 for large text

**LSX Design Targets:**
- **Light Mode:** 100% AA, 60%+ AAA
- **Dark Mode:** 100% AA, 85%+ AAA

**Common Ratios:**
```
Light Mode (typical):
- Black on white (#000 on #FFF): 21:1 (AAA ✅)
- Gray-900 on white (#111 on #FFF): 18.5:1 (AAA ✅)
- Gray-700 on white (#333 on #FFF): 12.6:1 (AAA ✅)
- Gray-500 on white (#666 on #FFF): 5.7:1 (AAA ✅)
- Gray-400 on white (#999 on #FFF): 2.8:1 (FAIL ❌)

Dark Mode (typical):
- White on dark (#FFF on #0a0a0a): 19.2:1 (AAA ✅)
- Gray-100 on dark (#f5f5f5 on #0a0a0a): 17.8:1 (AAA ✅)
- Gray-300 on dark (#d4d4d4 on #0a0a0a): 13.1:1 (AAA ✅)
- Gray-400 on dark (#a3a3a3 on #0a0a0a): 8.2:1 (AAA ✅)
- Gray-500 on dark (#737373 on #0a0a0a): 4.9:1 (AA ✅)
```

---

### **Phase 3 Deliverables**

1. **Individual Template Reports** (36 files)
   - One markdown file per template
   - Complete audit results (light + dark mode)
   - Design system compliance check
   - Accessibility check
   - Issues and recommendations

2. **Master Audit Summary** (1 file)
   - Overall WCAG compliance percentage
   - Templates by compliance level
   - Common issues found
   - Recommendations for system-wide improvements

3. **Accessibility Statement** (1 file)
   - Public-facing documentation
   - WCAG 2.1 AA/AAA compliance claims
   - Known limitations
   - Contact for accessibility issues

4. **Updated Guidelines.md**
   - Reflect any system changes
   - Add audit completion status
   - Update compliance metrics

---

### **Phase 3 Timeline**

**Estimated Time:** 5-7 hours

- **Template audits:** ~10 minutes per template × 36 = 6 hours
- **Documentation:** 1 hour
- **Fixes (if needed):** Variable

**Recommended Approach:**
1. **Day 1:** Audit core templates (8 templates, ~90 min)
2. **Day 2:** Audit single/detail templates (4 templates, ~45 min)
3. **Day 3:** Audit about/service templates (11 templates, ~2 hours)
4. **Day 4:** Audit remaining templates + documentation (13 templates, ~2.5 hours)

---

## ✅ Success Criteria

### **Phase 2: Mobile Filters**
- [ ] All archive templates have mobile filters
- [ ] Mobile filter button shows on mobile (< 1024px)
- [ ] Desktop filters hide on mobile
- [ ] Touch targets are 48×48px minimum
- [ ] Keyboard navigation works (Escape, Tab, Enter)
- [ ] WCAG AAA compliant

### **Phase 3: Component Audit**
- [ ] All 36 templates audited in light mode
- [ ] All 36 templates audited in dark mode
- [ ] 100% WCAG AA compliance (both modes)
- [ ] 60%+ WCAG AAA compliance (light mode)
- [ ] 85%+ WCAG AAA compliance (dark mode)
- [ ] 100% design system compliance (colors, typography, spacing)
- [ ] Documentation complete (reports + statement)

---

## 🎯 Final Deliverables

### **Code:**
- ✅ 5 archive templates with mobile filters
- ✅ 36 templates audited and fixed (if needed)

### **Documentation:**
- ✅ Individual audit reports (36 files)
- ✅ Master audit summary (1 file)
- ✅ Accessibility statement (1 file)
- ✅ Updated Guidelines.md

### **Compliance:**
- ✅ WCAG 2.1 AA compliant (100%)
- ✅ WCAG 2.1 AAA compliant (60-85%)
- ✅ Design system compliant (100%)
- ✅ Mobile-friendly (WCAG AAA touch targets)

---

**Last Updated:** December 26, 2024  
**Phases:** 2 & 3 — Mobile Filters + Component Audit  
**Status:** Implementation guide complete, ready to execute
