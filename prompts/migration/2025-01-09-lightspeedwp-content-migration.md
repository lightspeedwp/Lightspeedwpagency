# Real Content Migration from lightspeedwp.agency

**Version:** 1.0  
**Date Created:** 2025-01-09  
**Last Updated:** 2025-01-09  
**Category:** migration  
**Status:** ✅ Production

---

## 📋 Prompt Overview

Systematically review the lightspeedwp.agency website sitemap and migrate real content into the LSX Design prototype mock data files, replacing placeholder content with actual agency content.

**Use Case:** When you need to replace mock data with real production content  
**Expected Output:** Updated data files with real content from lightspeedwp.agency  
**Estimated Time:** 2-3 hours (depending on content volume)

---

## 🎯 Context

### Background

- LSX Design prototype currently uses mock/placeholder data
- Real content exists at https://lightspeedwp.agency
- Need to systematically extract and migrate real content
- Maintain data structure and TypeScript types
- Preserve design system compliance

### Constraints

- Must preserve existing data file structure
- Must maintain TypeScript interfaces
- Must keep JSDoc documentation
- Must respect copyright (use only lightspeedwp.agency content)
- Must validate all URLs and slugs
- Must maintain WordPress mapping compatibility

---

## 📝 The Prompt

```
I need you to systematically review the lightspeedwp.agency website and migrate real content into the LSX Design prototype mock data files.

**Context:**
I'm building the LSX Design system, a WordPress-compatible design system for LightSpeed WP (lightspeedwp.agency), a WordPress and WooCommerce web design agency. The prototype currently uses placeholder/mock data. I need to replace this with real content from the live website.

I've updated the tailwind css and /styles/global.css file to include colors, spacing, borders, radius and typography from my teams design system.
- Make sure all UI being generated uses these variables from the css
- For typography ONLY use the font faces defined in the css
- All content must come from lightspeedwp.agency website only

**IMPORTANT COPYRIGHT NOTICE:**
- ONLY use content from lightspeedwp.agency (our own website)
- DO NOT use content from external websites
- DO NOT reproduce copyrighted material from other sources
- If content is not available on lightspeedwp.agency, create brief original content or use placeholders

---

## STEP 1: REVIEW SITEMAP

**Start here:** https://lightspeedwp.agency/sitemap.xml

**Tasks:**
1. Read the complete sitemap.xml
2. Identify all content types:
   - Pages
   - Posts (blog articles)
   - Services
   - Portfolio projects
   - Categories
   - Tags
3. List all URLs and content types
4. Estimate total content volume

**Deliverable:**
Create a markdown file: `/SITEMAP-CONTENT-INVENTORY.md` with:
- Total pages count
- Total posts count
- Total portfolio projects
- All categories
- All tags
- Content structure overview

---

## STEP 2: UPDATE PAGES DATA

**File:** `/src/app/data/pages.ts`

**Current Structure:**
```typescript
interface Page {
  id: string;
  title: string;
  slug: string;
  description: string;
  url: string;
  category?: string;
  parent?: string;
}
```

**Process:**
1. Visit each page in sitemap
2. Extract:
   - Page title (H1)
   - Meta description
   - URL slug
   - Page hierarchy
3. Update `pages.ts` with real data
4. Maintain all helper functions
5. Keep TypeScript types

**Validation:**
- All URLs match sitemap
- All slugs are correct
- Navigation structure matches live site
- No placeholder titles remain

---

## STEP 3: UPDATE POSTS DATA

**File:** `/src/app/data/posts.ts`

**Current Structure:**
```typescript
interface BlogPost {
  id: string;
  title: string;
  slug: string;
  excerpt: string;
  content: string;
  author: Author;
  date: string;
  category: string;
  tags: string[];
  featured: boolean;
  readingTime: string;
  featuredImage?: string;
}
```

**Process:**
1. Visit blog index: https://lightspeedwp.agency/blog/ (or similar)
2. For each blog post:
   - Extract title
   - Extract excerpt/summary
   - Extract author info
   - Extract publish date
   - Extract categories
   - Extract tags
   - Note featured image URL
   - Calculate reading time
3. Update `posts.ts` with real posts
4. Maintain featured posts array
5. Keep category/tag taxonomies

**Priority:**
- Start with most recent 12 posts
- Focus on featured posts first
- Maintain chronological order

**Validation:**
- All post slugs match sitemap
- All dates are accurate
- Categories and tags match live site
- Author information is complete

---

## STEP 4: UPDATE SERVICES DATA

**File:** `/src/app/data/services.ts`

**Current Structure:**
```typescript
interface Service {
  id: string;
  title: string;
  slug: string;
  description: string;
  icon: string;
  features: string[];
  category: string;
}
```

**Process:**
1. Find services page(s) in sitemap
2. For each service:
   - Extract service name
   - Extract description
   - Extract key features/benefits
   - Note service category
   - Determine appropriate icon (from lucide-react)
3. Update `services.ts` with real services
4. Maintain category groupings

**Services to Look For:**
- WordPress Development
- WooCommerce Development
- Website Design
- Maintenance & Support
- SEO Services
- Performance Optimization
- Custom Development
- [Any other services found]

**Validation:**
- All services match live site offerings
- Features are accurate
- Icons are appropriate
- Categories align with site structure

---

## STEP 5: UPDATE PORTFOLIO DATA

**File:** `/src/app/data/portfolio.ts`

**Current Structure:**
```typescript
interface PortfolioProject {
  id: string;
  title: string;
  slug: string;
  client: string;
  description: string;
  category: string;
  industry: string;
  technologies: string[];
  featuredImage: string;
  gallery?: string[];
  url?: string;
  results?: {
    metric: string;
    value: string;
  }[];
  testimonial?: {
    quote: string;
    author: string;
    role: string;
  };
}
```

**Process:**
1. Find portfolio/work/projects section in sitemap
2. For each project:
   - Extract project name
   - Extract client name (if public)
   - Extract description
   - Extract technologies used
   - Note industry/category
   - Extract results/metrics (if available)
   - Extract testimonials (if available)
3. Update `portfolio.ts` with real projects
4. Maintain featured projects array

**Validation:**
- Project details are accurate
- Technologies match actual work
- Results are verifiable
- Testimonials are real (if included)

---

## STEP 6: UPDATE SOLUTIONS DATA

**File:** `/src/app/data/solutions.ts`

**Current Structure:**
```typescript
interface Solution {
  id: string;
  title: string;
  slug: string;
  description: string;
  benefits: string[];
  useCases: string[];
  technologies: string[];
}
```

**Process:**
1. Find solutions/offerings in sitemap
2. Extract solution-specific content
3. Update `solutions.ts` with real data

**Common Solutions:**
- E-commerce Solutions
- Enterprise WordPress
- Custom Development
- Migration Services
- [Any others found]

---

## STEP 7: UPDATE FAQ DATA

**File:** `/src/app/data/faqs.ts`

**Current Structure:**
```typescript
interface FAQ {
  id: string;
  question: string;
  answer: string;
  category?: string;
}
```

**Process:**
1. Find FAQ section in sitemap
2. Extract all questions and answers
3. Categorize by topic:
   - Services FAQs
   - Technical FAQs
   - Pricing FAQs
   - Process FAQs
   - General FAQs
4. Update all FAQ collections

**Validation:**
- Questions match live site
- Answers are accurate and complete
- Categories align with templates

---

## STEP 8: UPDATE TEAM DATA

**File:** `/src/app/data/team.ts`

**Current Structure:**
```typescript
interface TeamMember {
  id: string;
  name: string;
  role: string;
  bio: string;
  image?: string;
  social?: {
    linkedin?: string;
    twitter?: string;
    github?: string;
  };
}
```

**Process:**
1. Find team/about page in sitemap
2. Extract team member information
3. Update `team.ts` with real data

**Validation:**
- Names and roles are accurate
- Bios are current
- Social links are correct

---

## STEP 9: UPDATE TESTIMONIALS DATA

**File:** `/src/app/data/testimonials.ts`

**Current Structure:**
```typescript
interface Testimonial {
  id: string;
  quote: string;
  author: string;
  role: string;
  company?: string;
  image?: string;
  rating?: number;
  projectType?: string;
}
```

**Process:**
1. Find testimonials throughout site
2. Extract client testimonials
3. Verify authenticity
4. Update `testimonials.ts`

**Validation:**
- Testimonials are real client quotes
- Author information is accurate
- Company names are correct

---

## STEP 10: UPDATE PRICING DATA

**File:** `/src/app/data/pricing.ts`

**Current Structure:**
```typescript
interface PricingPlan {
  id: string;
  name: string;
  description: string;
  price: string;
  features: string[];
  popular?: boolean;
  cta: {
    text: string;
    page: string;
  };
}
```

**Process:**
1. Find pricing page in sitemap
2. Extract pricing plans
3. Extract features per plan
4. Update `pricing.ts`

**Validation:**
- Pricing is current
- Features are accurate
- CTAs link correctly

---

## STEP 11: UPDATE HOSTING DATA

**File:** `/src/app/data/hosting.ts` (if applicable)

**Process:**
1. Find hosting offerings in sitemap
2. Extract hosting plans and features
3. Update `hosting.ts` if hosting services are offered

---

## STEP 12: VERIFY NAVIGATION

**Files:** 
- `/src/app/data/pages.ts` (mainNavigation, footerNavigation)

**Process:**
1. Review live site header navigation
2. Review live site footer navigation
3. Ensure all navigation links match
4. Update mega menu structure if different

**Validation:**
- Header navigation matches live site
- Footer navigation matches live site
- All links are valid
- Mega menu structure is accurate

---

## QUALITY ASSURANCE CHECKLIST

After migration, verify:

### Content Accuracy
- [ ] All content is from lightspeedwp.agency only
- [ ] No placeholder text remains
- [ ] All URLs match sitemap
- [ ] All slugs are correct
- [ ] Dates are accurate
- [ ] Names are spelled correctly

### Data Structure
- [ ] All TypeScript interfaces maintained
- [ ] All JSDoc documentation present
- [ ] All helper functions work
- [ ] No TypeScript errors
- [ ] All imports are correct

### Design System Compliance
- [ ] No hardcoded colors
- [ ] No hardcoded fonts
- [ ] No hardcoded spacing
- [ ] All content uses CSS variables
- [ ] Typography uses var(--font-primary) or var(--font-secondary)

### WordPress Mapping
- [ ] All pages map to WordPress pages
- [ ] All posts map to WordPress posts
- [ ] All custom post types identified
- [ ] All taxonomies (categories/tags) correct
- [ ] Navigation structure matches WordPress menus

---

## EXPECTED OUTPUT

### Files to Update (11)

1. `/src/app/data/pages.ts` — All pages
2. `/src/app/data/posts.ts` — All blog posts
3. `/src/app/data/services.ts` — All services
4. `/src/app/data/portfolio.ts` — All projects
5. `/src/app/data/solutions.ts` — All solutions
6. `/src/app/data/faqs.ts` — All FAQ collections
7. `/src/app/data/team.ts` — Team members
8. `/src/app/data/testimonials.ts` — Client testimonials
9. `/src/app/data/pricing.ts` — Pricing plans
10. `/src/app/data/hosting.ts` — Hosting plans (if applicable)
11. `/src/app/data/logos.ts` — Client/partner logos (if applicable)

### Documentation to Create (3)

1. `/SITEMAP-CONTENT-INVENTORY.md` — Complete content inventory
2. `/CONTENT-MIGRATION-REPORT.md` — Migration summary
3. `/CONTENT-DIFFERENCES.md` — Differences between mock and real data

---

## MIGRATION APPROACH

### Systematic Process

**DO NOT rush through all content at once.**

Instead, work systematically:

1. **Phase 1: Inventory (30 min)**
   - Read sitemap completely
   - Create content inventory
   - Identify all content types
   - Estimate scope

2. **Phase 2: Core Pages (30 min)**
   - Update pages.ts
   - Update navigation
   - Verify structure

3. **Phase 3: Blog Content (30 min)**
   - Update posts.ts
   - Update categories/tags
   - Maintain chronology

4. **Phase 4: Services (20 min)**
   - Update services.ts
   - Verify offerings
   - Match live site

5. **Phase 5: Portfolio (20 min)**
   - Update portfolio.ts
   - Extract project details
   - Verify testimonials

6. **Phase 6: Supporting Content (20 min)**
   - Update FAQs
   - Update team
   - Update testimonials
   - Update pricing

7. **Phase 7: Validation (20 min)**
   - Run QA checklist
   - Test all links
   - Verify accuracy
   - Create migration report

**Total Estimated Time:** 2-3 hours

---

## HANDLING MISSING CONTENT

If content is not found on lightspeedwp.agency:

**DO:**
- ✅ Note missing content in report
- ✅ Keep existing placeholder (marked as placeholder)
- ✅ Create brief original content if needed
- ✅ Document what's missing

**DON'T:**
- ❌ Use content from other websites
- ❌ Reproduce copyrighted material
- ❌ Make up fake client information
- ❌ Create false testimonials

---

## SUCCESS CRITERIA

Migration is successful when:

- [ ] All data files updated with real content
- [ ] 100% of content from lightspeedwp.agency only
- [ ] No placeholder content remains (or clearly marked)
- [ ] All URLs match sitemap
- [ ] All navigation matches live site
- [ ] TypeScript compiles without errors
- [ ] Design system compliance maintained
- [ ] Migration report completed
- [ ] Content inventory created
- [ ] All differences documented

---

## VALIDATION COMMANDS

### Check for Placeholder Content
```bash
# Search for common placeholder text
grep -r "Lorem ipsum" /src/app/data/
grep -r "placeholder" /src/app/data/
grep -r "example" /src/app/data/
grep -r "Sample" /src/app/data/
```

### Verify TypeScript
```bash
npm run type-check
```

### Check URLs
```bash
# All URLs should start with lightspeedwp.agency
grep -r "https://" /src/app/data/
```

---

## EXAMPLE OUTPUT

### Before Migration
```typescript
// /src/app/data/services.ts
export const services: Service[] = [
  {
    id: '1',
    title: 'Web Design',
    slug: 'web-design',
    description: 'Beautiful, responsive websites',
    // ... placeholder content
  }
];
```

### After Migration
```typescript
// /src/app/data/services.ts
export const services: Service[] = [
  {
    id: '1',
    title: 'Custom WordPress Development',
    slug: 'custom-wordpress-development',
    description: 'Tailored WordPress solutions built to your exact specifications, from custom themes to complex plugins and integrations.',
    features: [
      'Custom theme development',
      'Plugin development',
      'REST API integrations',
      'Headless WordPress',
      'Performance optimization'
    ],
    category: 'development',
    icon: 'Code' // from lucide-react
  }
];
```

---

## MIGRATION REPORT TEMPLATE

Create `/CONTENT-MIGRATION-REPORT.md`:

```markdown
# Content Migration Report

**Date:** YYYY-MM-DD  
**Site:** lightspeedwp.agency  
**Status:** Complete

## Summary

- **Total Pages Migrated:** X
- **Total Posts Migrated:** X
- **Total Services Migrated:** X
- **Total Portfolio Projects:** X
- **Total Time:** X hours

## Content Updated

### Pages (X total)
- Home
- About
- Services
- [etc.]

### Blog Posts (X total)
- [List all migrated posts]

### Services (X total)
- [List all services]

### Portfolio (X total)
- [List all projects]

## Missing Content

- [List any content not found on live site]

## Issues Encountered

- [Document any issues or challenges]

## Next Steps

- [ ] Review all migrated content
- [ ] Verify all URLs
- [ ] Test all navigation
- [ ] Deploy updated prototype

---

**Migrated By:** [Your name]  
**Date:** YYYY-MM-DD
```

---
```

---

## ✅ Success Criteria

### Content Quality
- [ ] 100% real content from lightspeedwp.agency
- [ ] No placeholder text remains
- [ ] All URLs are accurate
- [ ] All content is current
- [ ] Testimonials are authentic

### Data Structure
- [ ] TypeScript interfaces maintained
- [ ] JSDoc documentation complete
- [ ] Helper functions work correctly
- [ ] No TypeScript errors
- [ ] All imports valid

### Design System
- [ ] CSS variables used throughout
- [ ] Font variables only (var(--font-primary))
- [ ] No hardcoded values
- [ ] Tailwind spacing classes

### WordPress Mapping
- [ ] All content types identified
- [ ] Navigation structure matches
- [ ] Taxonomies are correct
- [ ] Custom post types noted

---

## 📊 Expected Output

### Files Updated

**Data Files (11):**
1. `/src/app/data/pages.ts`
2. `/src/app/data/posts.ts`
3. `/src/app/data/services.ts`
4. `/src/app/data/portfolio.ts`
5. `/src/app/data/solutions.ts`
6. `/src/app/data/faqs.ts`
7. `/src/app/data/team.ts`
8. `/src/app/data/testimonials.ts`
9. `/src/app/data/pricing.ts`
10. `/src/app/data/hosting.ts`
11. `/src/app/data/logos.ts`

**Documentation (3):**
1. `/SITEMAP-CONTENT-INVENTORY.md`
2. `/CONTENT-MIGRATION-REPORT.md`
3. `/CONTENT-DIFFERENCES.md`

### Estimated Changes
- Lines of code: 2,000-3,000
- Files modified: 11 data files
- Documentation: 3 files
- Time: 2-3 hours

---

## 🔍 Validation

### Automated Validation
```bash
# Check for placeholder text
grep -r "Lorem ipsum" /src/app/data/
grep -r "placeholder" /src/app/data/
grep -r "example.com" /src/app/data/

# Verify TypeScript
npm run type-check

# Verify URLs
grep -r "https://" /src/app/data/ | grep -v "lightspeedwp.agency"
```

### Manual Validation
1. Review each data file
2. Compare with live site
3. Test all navigation links
4. Verify content accuracy
5. Check for broken references

---

## 📚 Related Prompts

- [Data Centralization Prompt](../migration/2025-01-09-data-centralization.md)
- [WordPress Migration Prompt](../migration/2025-01-09-wordpress-migration.md)
- [Content Validation Prompt](../testing/2025-01-09-content-validation.md)

---

## 📝 Notes

### Important Reminders

1. **Copyright:** Only use lightspeedwp.agency content
2. **Accuracy:** Verify all facts and figures
3. **Privacy:** Don't include sensitive client info
4. **Testimonials:** Ensure client permission for quotes
5. **Images:** Note image URLs but don't copy without rights

### Common Pitfalls

1. **Rushing:** Don't try to migrate everything at once
2. **Assumptions:** Verify content rather than assume
3. **Placeholders:** Mark clearly if real content unavailable
4. **Links:** Verify all internal/external links work
5. **Dates:** Ensure dates are in correct format

### Tips for Success

1. Work systematically through each data file
2. Start with sitemap inventory
3. Focus on one content type at a time
4. Validate as you go
5. Document any issues
6. Create migration report
7. Review before considering complete

---

## 🔄 Version History

| Version | Date | Changes |
|---------|------|---------|
| 1.0 | 2025-01-09 | Initial creation |

---

**Created:** 2025-01-09  
**Author:** LSX Design Team  
**Status:** ✅ Production

**See Also:**
- [Prompt Generation Guidelines](/guidelines/prompts/prompt-generation-guidelines.md)
- [Data System Documentation](/guidelines/data/data-system.md)
- [Content Guidelines](/guidelines/content/content-guidelines.md)
