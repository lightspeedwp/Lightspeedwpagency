# 🚀 BATCH 2: Moderate-Impact Templates — Migration Plan

**Date:** 2025-01-13  
**Status:** Planning Complete  
**Estimated Time:** 10-12 hours  
**Templates:** 15 templates  

---

## 📋 **BATCH 2 TEMPLATE LIST**

### **Priority Group 1: Main Content Templates (5 templates, 3 hours)**

1. **AboutTemplate.tsx** (31 classes, 45 min)
   - Hero section with gradient orbs
   - Timeline pattern
   - Logo grid
   - FAQ section
   - Newsletter signup

2. **ServicesTemplate.tsx** (16 classes, 30 min)
   - Hero section with badge
   - Service grid (12 services)
   - Process timeline
   - FAQ section

3. **ContactPageTemplate.tsx** (Est. 20 classes, 40 min)
   - Hero section
   - Contact form pattern
   - Contact info sidebar
   - FAQ section

4. **TeamTemplate.tsx** (Est. 15 classes, 30 min)
   - Hero section
   - Team grid pattern
   - FAQ section

5. **FAQTemplate.tsx** (Est. 12 classes, 25 min)
   - Hero section
   - FAQ accordion
   - CTA section

---

### **Priority Group 2: Portfolio & Showcase (3 templates, 2.5 hours)**

6. **PortfolioArchiveTemplate.tsx** (Est. 25 classes, 50 min)
   - Hero section
   - Filter bar
   - Portfolio grid
   - Pagination
   - CTA section

7. **PortfolioSingleTemplate.tsx** (Est. 30 classes, 1 hour)
   - Hero section
   - Project details
   - Image gallery
   - Client testimonial
   - Related projects
   - CTA section

8. **TestimonialsTemplate.tsx** (Est. 15 classes, 30 min)
   - Hero section
   - Testimonial grid
   - Social proof
   - CTA section

---

### **Priority Group 3: Pricing & Conversion (2 templates, 1.5 hours)**

9. **PricingTemplate.tsx** (Est. 20 classes, 45 min)
   - Hero section
   - Pricing table pattern
   - Feature comparison
   - FAQ section
   - CTA section

10. **HostingTemplate.tsx** (Est. 18 classes, 40 min)
    - Hero section
    - Hosting pricing table
    - Feature grid
    - Testimonials
    - FAQ section

---

### **Priority Group 4: About Variations (3 templates, 2 hours)**

11. **AboutProcessTemplate.tsx** (Est. 20 classes, 45 min)
    - Hero section
    - Process timeline pattern
    - FAQ section

12. **AboutCultureTemplate.tsx** (Est. 18 classes, 40 min)
    - Hero section
    - Culture values grid
    - Team photo collage
    - FAQ section

13. **AboutHistoryTemplate.tsx** (Est. 16 classes, 35 min)
    - Hero section
    - Timeline pattern
    - Milestone cards
    - FAQ section

---

### **Priority Group 5: Service Detail Templates (2 templates, 1.5 hours)**

14. **ServiceDetailTemplate.tsx** (Est. 22 classes, 50 min)
    - Hero section
    - Service features
    - Process steps
    - Pricing
    - FAQ section
    - CTA section

15. **SolutionDetailTemplate.tsx** (Est. 20 classes, 40 min)
    - Hero section
    - Solution benefits
    - Case studies
    - FAQ section
    - CTA section

---

## 📊 **BATCH 2 METRICS**

### **Estimated Totals:**
- **Templates:** 15
- **Classes:** ~300-350 (estimated)
- **Time:** 10-12 hours
- **Patterns Used:** Hero, Grid, Timeline, FAQ, CTA, Newsletter

### **Complexity:**
- **High:** PortfolioSingleTemplate (30 classes, complex layout)
- **Medium:** AboutTemplate, PortfolioArchiveTemplate, ServiceDetailTemplate
- **Low:** FAQTemplate, TeamTemplate, TestimonialsTemplate

---

## 🎯 **MIGRATION STRATEGY**

### **Phase 1: Verify Current State (30 min)**
1. Scan each template for Tailwind classes
2. Identify WordPress block patterns already in use
3. Count exact class numbers per template
4. Prioritize by impact and complexity

### **Phase 2: Group Migration (9-11 hours)**
1. **Priority Group 1:** Main Content (3 hours)
2. **Priority Group 2:** Portfolio & Showcase (2.5 hours)
3. **Priority Group 3:** Pricing & Conversion (1.5 hours)
4. **Priority Group 4:** About Variations (2 hours)
5. **Priority Group 5:** Service Details (1.5 hours)

### **Phase 3: Verification (30 min)**
1. Search for remaining Tailwind classes
2. Verify responsive behavior
3. Test all interactive elements
4. Create final completion report

---

## ✅ **SUCCESS CRITERIA**

### **For Each Template:**
- ✅ Zero Tailwind classes (except `.wp-*` utilities)
- ✅ 100% CSS variable usage
- ✅ WordPress block classes where applicable
- ✅ Responsive behavior preserved
- ✅ Accessibility maintained
- ✅ Zero breaking changes

### **Overall Batch 2:**
- ✅ All 15 templates migrated
- ✅ ~300-350 classes eliminated
- ✅ Documentation created
- ✅ Production-ready code
- ✅ User-controllable styling

---

## 🚀 **EXECUTION PLAN**

### **Session 1 (3 hours): Priority Group 1**
- AboutTemplate
- ServicesTemplate
- ContactPageTemplate
- TeamTemplate
- FAQTemplate

### **Session 2 (2.5 hours): Priority Group 2**
- PortfolioArchiveTemplate
- PortfolioSingleTemplate
- TestimonialsTemplate

### **Session 3 (1.5 hours): Priority Group 3**
- PricingTemplate
- HostingTemplate

### **Session 4 (2 hours): Priority Group 4**
- AboutProcessTemplate
- AboutCultureTemplate
- AboutHistoryTemplate

### **Session 5 (1.5 hours): Priority Group 5**
- ServiceDetailTemplate
- SolutionDetailTemplate

---

## 📋 **MIGRATION PATTERNS TO USE**

### **1. Hero Sections (All templates)**
```tsx
// Section padding
style={{
  paddingTop: 'var(--spacing-16)',
  paddingBottom: 'var(--spacing-16)',
  backgroundColor: 'var(--background)'
}}

// Max-width containers
className="wp-max-w-4xl"

// Gradient orbs (decorative)
style={{
  position: 'absolute',
  top: 0,
  right: 0,
  width: '500px',
  height: '500px',
  borderRadius: '50%',
  background: 'radial-gradient(circle, var(--primary-soft) 0%, transparent 70%)',
  opacity: 0.3,
  filter: 'blur(80px)'
}}
```

### **2. Grid Layouts**
```tsx
// 3-column responsive grids
className="wp-grid-3-cols"

// Custom grids
style={{
  display: 'grid',
  gridTemplateColumns: '1fr',
  gap: 'var(--spacing-8)'
}}
```

### **3. Cards & Patterns**
```tsx
// Card padding
style={{
  padding: 'var(--spacing-6)',
  borderRadius: 'var(--radius-lg)',
  backgroundColor: 'var(--card)',
  border: '1px solid var(--border)'
}}
```

---

## 🎊 **EXPECTED OUTCOMES**

### **After Batch 2 Completion:**
- ✅ 21 total templates migrated (Batch 1: 6 + Batch 2: 15)
- ✅ ~430+ Tailwind classes eliminated
- ✅ 35% of total templates complete
- ✅ All main content templates production-ready
- ✅ Portfolio system fully migrated
- ✅ Pricing & conversion templates optimized

### **Remaining Work:**
- Batch 3: Low-Impact Templates (~18 templates)
- Batch 4: Patterns & Components (~20 files)
- Batch 5: Final Cleanup & Verification

---

**Created:** 2025-01-13  
**Type:** Batch 2 Migration Planning Document  
**Status:** Ready to Execute  
**Estimated Completion:** 10-12 hours
