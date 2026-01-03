# Next Priority Tasks — December 26, 2024

**Status:** 🔄 **IN PROGRESS**  
**Priority:** 🔴 **HIGH**  
**Category:** Pattern Standardization & Quality Assurance

---

## 🎯 Objective

Complete pattern standardization across ALL templates to ensure 100% consistency with the new CTASection component props and design system standards.

---

## 📋 Task List

### **Task 1: Fix Remaining CTASection Prop Inconsistencies** 🔴 HIGH PRIORITY

**Status:** 🔄 IN PROGRESS  
**Affected Templates:** 7 templates

#### **Templates with Old `primaryButtonHref` Props:**

1. ❌ **SingleTemplate** (Line 478)
   - Old: `primaryButtonHref="#contact"`
   - New: `primaryButtonPage="contact"`

2. ❌ **PricingTemplate** (Line 782)
   - Old: `primaryButtonHref="/contact"`, `secondaryButtonHref="/roi-calculator"`
   - New: `primaryButtonPage="contact"`, `secondaryButtonPage="roi-calculator"`

3. ❌ **WhyChooseUsTemplate** (Line 507)
   - Old: `primaryButtonHref="/pricing"`, `secondaryButtonHref="/contact"`
   - New: `primaryButtonPage="pricing"`, `secondaryButtonPage="contact"`

4. ❌ **GuaranteesTemplate** (Line 567)
   - Old: `primaryButtonHref="/pricing"`, `secondaryButtonHref="/contact"`
   - New: `primaryButtonPage="pricing"`, `secondaryButtonPage="contact"`

5. ❌ **ROICalculatorTemplate** (Line 680)
   - Old: `primaryButtonHref="/contact"`, `secondaryButtonHref="/pricing"`
   - New: `primaryButtonPage="contact"`, `secondaryButtonPage="pricing"`

#### **Templates with Old `buttonLabel` Props:**

6. ❌ **BlogIndexTemplate** (Line 565)
   - Old: `buttonLabel="Get Started"`, `buttonUrl="#get-started"`
   - New: `primaryButtonText="Get Started"`, `primaryButtonPage="contact"`, add secondary button

7. ❌ **AboutHistoryTemplate** (Line 368)
   - Old: `buttonLabel="Get In Touch"`
   - New: `primaryButtonText="Get In Touch"`, `primaryButtonPage="contact"`, add secondary button

#### **Templates with Custom `buttons` Array Prop:**

8. ❌ **AboutCultureTemplate** (Line 435)
   - Old: Custom `buttons={[...]}` array with inline styles
   - New: `primaryButtonText`, `primaryButtonPage`, `secondaryButtonText`, `secondaryButtonPage`

---

### **Task 2: Add Missing Properties to Updated CTAs** 🟡 MEDIUM PRIORITY

**Status:** 📝 PENDING

All updated CTASection components should have:

1. ✅ `variant="highlighted"` (for visual impact)
2. ✅ `buttonSize="lg"` (for better touch targets)
3. ✅ `secondaryButtonText` (contextual secondary action)
4. ✅ `secondaryButtonPage` (appropriate navigation)

**Action Items:**

- [ ] Verify SingleTemplate CTA has secondary button
- [ ] Verify all new CTAs use highlighted variant
- [ ] Verify all CTAs have complete descriptions

---

### **Task 3: Archive Templates CTA Consistency** 🟢 LOW PRIORITY

**Status:** 📝 PENDING

Verify all archive templates have consistent CTA patterns:

1. **TagArchiveTemplate** (Line 198-205)
   - Current: `primaryButtonText="Subscribe"`, `primaryButtonHref="/newsletter"`
   - Action: Update to use `primaryButtonPage`

2. **DateArchiveTemplate** (Line 251-258)
   - Current: `primaryButtonText="Subscribe"`, `primaryButtonHref="/newsletter"`
   - Action: Update to use `primaryButtonPage`

---

### **Task 4: Check AboutProcessTemplate** 🟢 LOW PRIORITY

**Status:** 📝 PENDING

- [ ] Verify AboutProcessTemplate has CTA section
- [ ] If missing, add standardized CTA
- [ ] Ensure props match new standards

---

### **Task 5: Comprehensive Template Audit** 🔵 DOCUMENTATION

**Status:** 📝 PENDING

Create comprehensive audit report covering:

1. **CTA Pattern Consistency:**
   - All templates using `primaryButtonText/primaryButtonPage`
   - All CTAs have secondary buttons where appropriate
   - All CTAs use `variant="highlighted"` or justified default
   - All CTAs have `buttonSize="lg"`

2. **Typography Compliance:**
   - All text uses CSS variables (--text-*)
   - All fonts use Lexend or Manrope
   - No hard-coded font sizes

3. **Color Compliance:**
   - All colors use CSS variables
   - No hex codes or RGB values
   - Semantic color roles used correctly

4. **Spacing Compliance:**
   - All spacing uses Tailwind classes
   - No hard-coded pixel margins/padding
   - Consistent use of design system spacing scale

5. **Accessibility Compliance:**
   - All touch targets ≥ 44×44px
   - All interactive elements keyboard accessible
   - All color contrasts meet WCAG AA
   - All images have alt text
   - All forms have labels

---

## 📊 Current Status Summary

### **CTA Pattern Compliance:**

| Status | Count | Templates |
|--------|-------|-----------|
| ✅ Complete | 10 | Team, Services, Single, Hosting, About, Portfolio Archive, Portfolio Single, Service Detail, Solutions, Solution Detail |
| 🔄 Needs Update | 7 | Single (partial), Pricing, WhyChooseUs, Guarantees, ROICalculator, BlogIndex, AboutHistory, AboutCulture |
| ❓ Unknown | 4 | AboutProcess, TagArchive, DateArchive, others |

**Total Templates:** ~40  
**Fully Compliant:** 10 (25%)  
**Needs Update:** 7 (17.5%)  
**Pending Audit:** ~23 (57.5%)

---

## 🎯 Immediate Action Plan

### **Phase 1: Fix Critical Prop Issues** (30 minutes)

1. Update 5 templates using `primaryButtonHref` → `primaryButtonPage`
2. Update 2 templates using `buttonLabel` → `primaryButtonText`
3. Update 1 template using custom `buttons` array → standard props

**Templates:**
- SingleTemplate
- PricingTemplate
- WhyChooseUsTemplate
- GuaranteesTemplate
- ROICalculatorTemplate
- BlogIndexTemplate
- AboutHistoryTemplate
- AboutCultureTemplate

### **Phase 2: Enhance Updated CTAs** (20 minutes)

1. Add secondary buttons where missing
2. Set `variant="highlighted"` where appropriate
3. Ensure all use `buttonSize="lg"`

### **Phase 3: Audit Remaining Templates** (40 minutes)

1. Check all 40+ templates for CTA sections
2. Document current state
3. Create fix list for any inconsistencies
4. Update all to new standards

### **Phase 4: Create Comprehensive Report** (30 minutes)

1. Document all changes made
2. Create before/after comparisons
3. Update Guidelines.md
4. Create verification checklist

---

## 🚨 Critical Issues Found

### **Issue 1: Multiple Prop Patterns**

**Problem:** CTASection is being called with 4 different prop patterns:
1. ✅ New standard: `primaryButtonText`, `primaryButtonPage`, `secondaryButtonText`, `secondaryButtonPage`
2. ❌ Old pattern 1: `primaryButtonHref` instead of `primaryButtonPage`
3. ❌ Old pattern 2: `buttonLabel`, `buttonUrl` (very old)
4. ❌ Old pattern 3: Custom `buttons` array with inline styles

**Impact:** 
- Inconsistent behavior across templates
- Harder to maintain
- Potential runtime errors
- Not WordPress-ready

**Solution:**
- Standardize ALL templates to use new props
- Update CTASection component type definitions
- Add prop deprecation warnings
- Document prop migration in guidelines

### **Issue 2: Missing Secondary Buttons**

**Problem:** Some CTAs only have primary buttons, missing conversion opportunities

**Impact:**
- Lower conversion rates
- Less user choice
- Incomplete user journeys

**Solution:**
- Add contextual secondary buttons to all CTAs
- Use appropriate navigation (portfolio, services, pricing, etc.)
- Follow conversion optimization best practices

### **Issue 3: Inconsistent Variant Usage**

**Problem:** Some CTAs use `default` variant, others use `highlighted`

**Impact:**
- Inconsistent visual hierarchy
- Reduced impact of final CTAs
- Unclear page structure

**Solution:**
- Use `highlighted` for final page CTAs
- Use `default` for mid-content CTAs
- Document variant usage guidelines

---

## ✅ Success Criteria

Before marking this complete:

- [ ] ALL templates use standardized CTASection props
- [ ] NO templates use deprecated props (`buttonLabel`, `buttonUrl`, `primaryButtonHref`, `buttons` array)
- [ ] ALL CTAs have secondary buttons (where appropriate)
- [ ] ALL CTAs use appropriate variant (`highlighted` for final CTAs)
- [ ] ALL CTAs use `buttonSize="lg"`
- [ ] 100% design system compliance (CSS variables only)
- [ ] Comprehensive documentation created
- [ ] Guidelines.md updated with new status

---

## 📚 Documentation Updates Needed

1. **Update CTASection component documentation**
   - Add prop examples
   - Document deprecated props
   - Add migration guide

2. **Update Guidelines.md**
   - Add "CTA Pattern Standardization Complete" status
   - Link to comprehensive audit report
   - Update project status section

3. **Create Pattern Library Documentation**
   - CTA pattern variations
   - When to use highlighted vs default
   - Secondary button guidelines
   - Conversion optimization tips

---

## 🎯 Expected Outcomes

### **Consistency:**
- ✅ All 40+ templates use identical prop patterns
- ✅ Predictable behavior across entire site
- ✅ Easier maintenance and updates

### **Performance:**
- ✅ No prop type mismatches
- ✅ Consistent rendering
- ✅ Better TypeScript type safety

### **Conversion:**
- ✅ All CTAs have 2 user paths (primary + secondary)
- ✅ Higher engagement rates
- ✅ Better user experience

### **WordPress Migration:**
- ✅ Clean prop mapping to WordPress blocks
- ✅ No custom logic needed
- ✅ Easy to replicate in PHP

---

## 📝 Notes

- This work builds on the CTA pattern polish completed earlier today
- Focus is on completing standardization across ALL templates
- Must maintain 100% design system compliance
- All changes must use CSS variables (no hard-coded values)
- Typography must only use Lexend/Manrope fonts

---

**Last Updated:** December 26, 2024  
**Next Review:** After Phase 1 completion  
**Priority:** 🔴 HIGH

---

## 🚀 Quick Start

To begin, run:

1. Update 8 templates with prop fixes (Phase 1)
2. Test all CTAs render correctly
3. Verify design system compliance
4. Create comprehensive audit report
5. Update documentation

**Estimated Time:** 2 hours  
**Impact:** HIGH — Ensures 100% consistency across entire site
