# 🏗️ Template Implementation Plan

**Date:** 2025-01-09  
**Project:** LSX Design Prototype — Template Implementation  
**Status:** 📋 **READY TO START**

---

## 🎯 **OBJECTIVE**

Build all templates using the **real LightSpeed WordPress Agency content** we've migrated, ensuring 100% design system compliance with CSS variables.

---

## ✅ **PREREQUISITES (COMPLETE)**

- [x] 100% content migration complete (7/7 data files)
- [x] All real content extracted from lightspeedwp.agency
- [x] Design system CSS variables ready
- [x] TypeScript interfaces defined
- [x] Helper functions working
- [x] Documentation complete

---

## 📊 **IMPLEMENTATION PHASES**

### **Phase 1: Core Pages (Priority 1)** — 4 Templates

**Estimated Time:** 2-3 hours

**Templates:**
1. **Homepage** (FrontPageTemplate)
   - Update homepage.ts with real hero content
   - Connect to services.ts for services grid
   - Connect to blog-posts.ts for blog section
   - Connect to testimonials.ts for social proof
   - Ensure all CSS variables usage

2. **Services Overview** (ServicesTemplate)
   - Update to use services.ts data
   - Display 9 LightSpeed services
   - Service grid with icons
   - CTA sections

3. **Contact Page** (ContactPageTemplate)
   - Update to use company.ts contact data
   - Real address, email, hours
   - Featured team members (3)
   - Contact form

4. **About Page** (AboutTemplate)
   - Update to use company.ts
   - Vision, mission, core values
   - Company history timeline
   - Why LightSpeed section

---

### **Phase 2: Services Detail Pages (Priority 2)** — 6 Templates

**Estimated Time:** 3-4 hours

**Templates:**
5. **Discovery Service** (DiscoveryServiceTemplate)
6. **Design Service** (DesignServiceTemplate)
7. **Development Service** (DevelopmentServiceTemplate)
8. **Support Service** (SupportServiceTemplate)
9. **Security Service** (SecurityServiceTemplate)
10. **Content Service** (ContentServiceTemplate)

**Each should use:**
- services-detailed.ts for content
- Process steps from company.ts
- Related services
- Service-specific CTAs

---

### **Phase 3: Company Pages (Priority 2)** — 4 Templates

**Estimated Time:** 2-3 hours

**Templates:**
11. **Team Page** (TeamTemplate)
    - Use company.ts team data
    - 11 team member bios
    - Featured team section
    - Contact team section

12. **Process/How We Work** (AboutProcessTemplate)
    - Use company.ts developmentProcess
    - 6-step process timeline
    - Core values integration

13. **Culture Page** (AboutCultureTemplate)
    - Use company.ts cultureInfo
    - Remote work culture
    - Team values
    - Learning culture

14. **History Page** (AboutHistoryTemplate)
    - Use company.ts companyHistory
    - Timeline 2003-2019
    - Major milestones

---

### **Phase 4: Blog Templates (Priority 2)** — 4 Templates

**Estimated Time:** 2-3 hours

**Templates:**
15. **Blog Index** (BlogIndexTemplate)
    - Use blog-posts.ts
    - 4 real blog posts
    - Category filter (6 categories)
    - Tag cloud (10 tags)

16. **Single Blog Post** (SinglePostTemplate)
    - Post content display
    - Author bio from blog-posts.ts
    - Related posts (algorithm)
    - Category/tag links

17. **Author Archive** (AuthorArchiveTemplate)
    - Author bio
    - Posts by author (3 authors)
    - Author stats

18. **Category Archive** (CategoryArchiveTemplate)
    - Category description (6 categories)
    - Posts by category
    - Category stats

---

### **Phase 5: Portfolio Templates (Priority 3)** — 2 Templates

**Estimated Time:** 1-2 hours

**Templates:**
19. **Portfolio Archive** (PortfolioArchiveTemplate)
    - Use portfolio-projects.ts
    - ARMD Digital case study
    - Project grid
    - Filter by industry/type

20. **Single Portfolio/Case Study** (PortfolioSingleTemplate)
    - Full case study display
    - Challenge, solution, results
    - Technologies list
    - Client testimonial
    - Related projects

---

### **Phase 6: Supporting Templates (Priority 3)** — 4 Templates

**Estimated Time:** 2-3 hours

**Templates:**
21. **Testimonials Page** (TestimonialsTemplate)
    - Use testimonials.ts
    - 3 real testimonials
    - Grid display
    - Filter by industry/service

22. **FAQ Page** (FAQTemplate)
    - Use faqs.ts
    - Accordion layout
    - Search functionality
    - Category filters

23. **404 Page** (Template404)
    - Error message
    - Search functionality
    - Helpful links
    - Recent content

24. **Search Results** (SearchResultsTemplate)
    - Search results display
    - Filter by content type
    - Pagination

---

## 📋 **IMPLEMENTATION CHECKLIST**

For each template, ensure:

### **Content Integration** ✅
- [ ] Uses real data from appropriate data file
- [ ] No placeholder text
- [ ] All links working
- [ ] Images from Unsplash or real sources

### **Design System Compliance** ✅
- [ ] Typography uses `var(--font-primary)` and `var(--font-secondary)`
- [ ] NO hardcoded font families
- [ ] Colors use CSS variables (`var(--primary)`, etc.)
- [ ] NO hardcoded hex colors
- [ ] Spacing uses Tailwind classes or `var(--spacing-*)`
- [ ] NO hardcoded px values for spacing
- [ ] Border radius uses `var(--radius)` variables
- [ ] All styling user-controllable via CSS

### **Accessibility** ✅
- [ ] Semantic HTML (`<header>`, `<main>`, `<footer>`, `<nav>`)
- [ ] Proper heading hierarchy (H1 → H2 → H3)
- [ ] All interactive elements keyboard accessible
- [ ] Focus states visible
- [ ] ARIA labels where needed
- [ ] Alt text for images

### **WordPress Mapping** ✅
- [ ] Template maps to WordPress template file
- [ ] Patterns identified and documented
- [ ] Block structure clear
- [ ] FSE compatible

### **Performance** ✅
- [ ] Images lazy loaded where appropriate
- [ ] No unnecessary re-renders
- [ ] Efficient data fetching
- [ ] Code splitting (lazy loading)

---

## 🎨 **DESIGN SYSTEM REQUIREMENTS**

**CRITICAL:** All templates MUST use CSS variables.

### **Typography**
```tsx
// ✅ CORRECT
style={{ fontFamily: 'var(--font-primary)' }}
style={{ fontFamily: 'var(--font-secondary)' }}
style={{ fontSize: 'var(--text-h1)' }}

// ❌ WRONG
style={{ fontFamily: 'Lexend, sans-serif' }}
style={{ fontFamily: 'Manrope, sans-serif' }}
style={{ fontSize: '60px' }}
```

### **Colors**
```tsx
// ✅ CORRECT
style={{ backgroundColor: 'var(--primary)' }}
style={{ color: 'var(--foreground)' }}

// ❌ WRONG
style={{ backgroundColor: '#0066cc' }}
style={{ color: '#333333' }}
```

### **Spacing**
```tsx
// ✅ CORRECT (Tailwind)
className="p-6 gap-4 mb-8"

// ✅ CORRECT (CSS variables)
style={{ padding: 'var(--spacing-6)' }}

// ❌ WRONG
style={{ padding: '24px' }}
```

---

## 📊 **DATA FILE MAPPING**

**Which data file to use for each template:**

| Template | Data File | Helper Functions |
|----------|-----------|------------------|
| Homepage | site-pages.ts, services.ts, blog-posts.ts, testimonials.ts | - |
| Services Overview | services.ts | - |
| Service Detail (6) | services-detailed.ts | getServiceBySlug() |
| Contact | company.ts (contactInfo, featuredTeam) | - |
| About | company.ts (companyInfo, coreValues, companyHistory) | - |
| Team | company.ts (teamMembers, featuredTeam) | - |
| Process | company.ts (developmentProcess) | - |
| Culture | company.ts (cultureInfo) | - |
| History | company.ts (companyHistory) | - |
| Blog Index | blog-posts.ts | getRecentPosts() |
| Single Post | blog-posts.ts | getPostBySlug(), getRelatedPosts() |
| Author Archive | blog-posts.ts | getAuthorBySlug(), getPostsByAuthor() |
| Category Archive | blog-posts.ts | getPostsByCategory() |
| Portfolio Archive | portfolio-projects.ts | - |
| Portfolio Single | portfolio-projects.ts | getProjectBySlug() |
| Testimonials | testimonials.ts | - |
| FAQ | faqs.ts | - |

---

## 🚀 **IMPLEMENTATION WORKFLOW**

### **For Each Template:**

**Step 1: Read Existing Template**
- Understand current structure
- Identify what needs updating
- Note any placeholder content

**Step 2: Update Data Imports**
- Import correct data file
- Import helper functions if needed
- Remove mock data

**Step 3: Update JSX**
- Replace placeholder content with real data
- Ensure all variables use real content
- Update loops to use real data arrays

**Step 4: Verify CSS Variables**
- Check all inline styles use CSS variables
- No hardcoded fonts, colors, spacing
- Use Tailwind classes where appropriate

**Step 5: Test Functionality**
- Links work correctly
- Navigation functional
- Data displays properly
- No console errors

**Step 6: Accessibility Check**
- Heading hierarchy correct
- Semantic HTML used
- Keyboard navigation works
- Focus states visible

**Step 7: Documentation**
- Update JSDoc comments
- Note WordPress mapping
- Document any special features

---

## ⏱️ **TIME ESTIMATES**

**Phase 1 (Core Pages):** 2-3 hours  
**Phase 2 (Services Detail):** 3-4 hours  
**Phase 3 (Company Pages):** 2-3 hours  
**Phase 4 (Blog Templates):** 2-3 hours  
**Phase 5 (Portfolio):** 1-2 hours  
**Phase 6 (Supporting):** 2-3 hours  

**Total Estimated Time:** 12-18 hours

**Per Template Average:** 30-45 minutes

---

## 📋 **PRIORITY ORDER**

**Batch 1 (Start Now):** Homepage + Services + Contact + About = 4 templates  
**Batch 2:** 6 Service Detail pages = 6 templates  
**Batch 3:** Team + Process + Culture + History = 4 templates  
**Batch 4:** Blog Index + Single + Author + Category = 4 templates  
**Batch 5:** Portfolio Archive + Single = 2 templates  
**Batch 6:** Testimonials + FAQ + 404 + Search = 4 templates  

**Total:** 24 templates across 6 batches

---

## ✅ **SUCCESS CRITERIA**

### **Template is Complete When:**

- [x] All real content integrated
- [x] Zero placeholder text
- [x] 100% CSS variables usage
- [x] No hardcoded values
- [x] Accessibility checks pass
- [x] Links all working
- [x] WordPress mapping documented
- [x] JSDoc comments updated
- [x] Tested in browser
- [x] No console errors

---

## 🎯 **FIRST TEMPLATE: HOMEPAGE**

Let's start with the most important template: **Homepage (FrontPageTemplate)**

**Tasks:**
1. Update homepage.ts with real LightSpeed content
2. Connect to services.ts for services grid
3. Connect to blog-posts.ts for blog section
4. Connect to testimonials.ts for testimonials
5. Verify all CSS variables usage
6. Test all sections
7. Verify accessibility

**Estimated Time:** 45-60 minutes

---

## 🚀 **READY TO START**

All prerequisites are complete. We have:
- ✅ 100% real content in 7 data files
- ✅ Design system CSS variables ready
- ✅ Complete documentation
- ✅ Implementation plan

**Next Step:** Update homepage.ts with real LightSpeed content and verify FrontPageTemplate.

---

**Created:** 2025-01-09  
**Status:** 📋 **PLAN READY**  
**Next:** Start with Homepage template implementation
