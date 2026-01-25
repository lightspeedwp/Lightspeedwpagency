# 🔍 Routing Audit Prompt — Complete Navigation Validation

**Date:** 2025-01-13  
**Purpose:** Comprehensive routing audit to validate navigation accuracy  
**Scope:** All navigation menus, links, and template routes

---

## 📋 **AUDIT OBJECTIVES**

1. **Verify all navigation links have valid routes**
2. **Identify missing templates referenced in navigation**
3. **Test all mega menu links**
4. **Validate mobile menu links**
5. **Check footer navigation links**
6. **Ensure consistency across all navigation components**
7. **Update routing documentation**

---

## 🎯 **PROMPT FOR ROUTING AUDIT**

```
I need you to perform a comprehensive routing audit of the LSX Design codebase to validate that all navigation links are accurate and aligned with available templates and mock data.

## AUDIT TASKS:

### 1. NAVIGATION STRUCTURE AUDIT
- Read `/src/app/components/parts/SiteHeader.tsx`
- Read `/src/app/components/parts/SiteFooter.tsx`
- Extract all navigation links from main nav, mega menus, and mobile menu
- List all page IDs referenced in navigation

### 2. TEMPLATE AVAILABILITY CHECK
- Check `/src/app/components/templates/` directory
- List all available template files
- Cross-reference navigation links with available templates
- Identify MISSING templates that are referenced but don't exist

### 3. MOCK DATA VALIDATION
- Read `/src/app/data/site-pages.ts`
- Verify all navigation links match mock data page slugs
- Check for orphaned pages (in mock data but not in navigation)
- Check for broken links (in navigation but not in mock data)

### 4. ROUTE MAPPING
- Read `/src/app/App.tsx` (or main routing file)
- List all route cases in the page switcher
- Verify all navigation links have corresponding route handlers
- Identify routes without navigation links

### 5. CONSISTENCY CHECK
Verify these navigation components have identical/consistent links:
- Desktop main navigation (SiteHeader)
- Desktop mega menus (Services, Solutions, About submenus)
- Mobile menu navigation
- Footer navigation

### 6. GENERATE REPORTS
Create detailed reports for:
- ✅ Valid routes (navigation + template exists)
- ❌ Broken routes (navigation exists, template missing)
- ⚠️ Orphaned templates (template exists, not in navigation)
- 📊 Navigation coverage statistics

## OUTPUT FORMAT:

Please provide:
1. **Summary Statistics** (total links, valid, broken, orphaned)
2. **Broken Links Report** (list all navigation links without templates)
3. **Missing Templates List** (specific templates that need to be created)
4. **Navigation Consistency Issues** (differences between menus)
5. **Recommendations** (priority fixes)

## DELIVERABLES:

1. `/reports/2025-01/routing/routing-audit-complete-jan-13.md` — Full audit report
2. `/reports/2025-01/routing/broken-links-list-jan-13.md` — Broken links list
3. `/reports/2025-01/routing/missing-templates-jan-13.md` — Templates to create
4. Updated `/guidelines/routing/routing-complete-reference.md` — Fix any inaccuracies
```

---

## 🛠️ **PROMPT FOR NAVIGATION REPAIR (AFTER AUDIT)**

```
Based on the routing audit, I need you to repair navigation inconsistencies in the homepage template (FrontPageTemplate.tsx), SiteHeader, and SiteFooter.

## REPAIR TASKS:

### 1. UPDATE SiteHeader NAVIGATION
File: `/src/app/components/parts/SiteHeader.tsx`

**Fix these sections:**
- Main navigation items (lines 92-150)
- Services submenu (lines 98-108)
- Solutions submenu (lines 115-121)
- About submenu (lines 133-139)

**Actions:**
- Remove links to missing templates (support-service, mailchimp-service, tour-operator, lsx-design)
- OR create placeholder templates for these pages
- Ensure all page IDs match site-pages.ts slugs
- Verify mega menu links are identical to mobile menu links

### 2. UPDATE SiteFooter NAVIGATION
File: `/src/app/components/parts/SiteFooter.tsx`

**Fix these sections:**
- Main footer navigation columns
- Quick links section
- Services links
- Solutions links

**Actions:**
- Ensure footer links match SiteHeader navigation
- Remove/fix any broken links
- Add missing important pages

### 3. UPDATE FrontPageTemplate BUTTONS
File: `/src/app/components/templates/FrontPageTemplate.tsx`

**Fix these sections:**
- Hero CTA buttons
- Services section buttons
- Portfolio section buttons
- Blog section buttons
- Footer CTA buttons

**Actions:**
- Verify all Button component `page` props are valid
- Ensure CTAs point to existing templates
- Remove references to missing pages

### 4. CONSISTENCY VALIDATION
After repairs, verify:
- [ ] Desktop main nav links = Mobile menu links
- [ ] SiteHeader mega menus = SiteFooter links (where applicable)
- [ ] All Button components have valid page props
- [ ] No console errors for invalid routes
- [ ] All navigation labels are consistent

## OUTPUT:

1. **Repair Summary** — List of all changes made
2. **Verification Report** — Confirm all links now work
3. **Before/After Statistics** — Broken links reduced from X to 0
```

---

## 📊 **EXPECTED AUDIT FINDINGS**

Based on initial analysis, expect to find:

### **Missing Templates (4):**
1. `support-service` — Referenced in Services submenu
2. `mailchimp-service` — Referenced in Services submenu  
3. `tour-operator` — Referenced in Solutions submenu
4. `lsx-design` — Referenced in Solutions submenu

### **Potential Navigation Issues:**
- Services submenu may have 9 items but only 7 templates exist
- Solutions submenu may have 5 items but only 3 templates exist
- Mobile menu may differ from desktop navigation
- Footer links may not match header navigation

---

## ✅ **SUCCESS CRITERIA**

Audit is complete when:
- [ ] All navigation links documented
- [ ] All missing templates identified
- [ ] Navigation consistency verified (desktop = mobile = footer)
- [ ] Routing reference guide updated
- [ ] Broken links report generated
- [ ] Repair recommendations provided

Repair is complete when:
- [ ] Zero broken navigation links
- [ ] 100% template availability for all navigation items
- [ ] Desktop, mobile, and footer navigation are consistent
- [ ] All Button components have valid page props
- [ ] Sitemap page works for all links

---

## 🧪 **TESTING CHECKLIST**

After audit and repair, test:

### **Desktop Navigation:**
- [ ] Click every main nav item
- [ ] Hover every mega menu
- [ ] Click every mega menu link
- [ ] Verify active states work

### **Mobile Navigation:**
- [ ] Open mobile menu
- [ ] Click every mobile nav item
- [ ] Verify mobile search works
- [ ] Test mobile CTA button

### **Footer Navigation:**
- [ ] Click every footer link
- [ ] Test footer social links
- [ ] Verify footer CTA buttons

### **Sitemap Page:**
- [ ] Visit `/sitemap` route
- [ ] Click every "Visit Page" button
- [ ] Verify missing templates show error state
- [ ] Test statistics accuracy

---

## 📁 **FILES TO EXAMINE**

### **Navigation Files:**
```
/src/app/components/parts/SiteHeader.tsx          # Main header navigation
/src/app/components/parts/SiteFooter.tsx          # Footer navigation
/src/app/components/parts/MegaMenu.tsx            # Mega menu component (if exists)
/src/app/components/ui/MobileMenu.tsx             # Mobile menu (if exists)
```

### **Data Files:**
```
/src/app/data/site-pages.ts                       # Page metadata
/src/app/data/pages.ts                            # Legacy navigation (deprecated)
```

### **Template Files:**
```
/src/app/components/templates/*.tsx               # All page templates
```

### **Routing Files:**
```
/src/app/App.tsx                                  # Main routing logic
/src/app/contexts/NavigationContext.tsx           # Navigation context
```

---

## 🎨 **SITEMAP PAGE USAGE**

The newly created sitemap page provides a visual testing interface:

**Route:** `/sitemap` or `/site-map`  
**Template:** `SiteMapTemplate.tsx`  
**Purpose:** Test all routes from one page

**Features:**
- 📊 Visual status indicators (✅ Active, ❌ Missing)
- 🎯 Click any page to navigate
- 📈 Live statistics (total pages, active, missing)
- 🎨 Organized by category (8 sections)
- 🔍 Quick route reference (shows page IDs)

**Usage:**
1. Navigate to `/sitemap`
2. Review all page categories
3. Click "Visit Page →" buttons to test routes
4. Red "Template Missing" cards show broken links
5. Use statistics to track repair progress

---

## 📝 **REPORT TEMPLATES**

### **Audit Summary Template:**
```markdown
# Routing Audit Report

**Date:** 2025-01-13
**Auditor:** [Name]
**Status:** [Complete/In Progress]

## Summary Statistics
- Total Navigation Links: X
- Valid Routes: X (X%)
- Broken Links: X (X%)
- Missing Templates: X
- Orphaned Templates: X

## Broken Links
[List all broken links with location]

## Missing Templates
[List all templates that need to be created]

## Recommendations
[Priority fixes and next steps]
```

### **Repair Summary Template:**
```markdown
# Navigation Repair Report

**Date:** 2025-01-13
**Files Modified:** X
**Broken Links Fixed:** X

## Changes Made
[Detailed list of changes]

## Verification
- [ ] Desktop navigation: 100% working
- [ ] Mobile navigation: 100% working
- [ ] Footer navigation: 100% working
- [ ] Sitemap page: 100% working

## Before/After
- Broken links: X → 0
- Navigation consistency: X% → 100%
```

---

## 🚀 **NEXT STEPS**

1. **Run Audit Prompt** — Execute comprehensive routing audit
2. **Review Findings** — Analyze broken links and missing templates
3. **Prioritize Fixes** — Determine which templates to create vs remove
4. **Run Repair Prompt** — Fix navigation inconsistencies
5. **Test Sitemap** — Verify all routes work via sitemap page
6. **Update Guidelines** — Document any routing changes

---

**Created:** 2025-01-13  
**Type:** Routing Audit & Repair Prompt  
**Status:** Ready to Execute  
**Estimated Time:** 30-45 minutes for complete audit + repair
