# Content Extraction Helper Guide

**Purpose:** Step-by-step guide for extracting content from lightspeedwp.agency  
**Date:** 2025-01-09  
**Status:** 🔄 Active

---

## 🎯 Quick Start

### What You'll Need
1. Web browser
2. Text editor or note-taking app
3. This guide
4. Content inventory template (`/SITEMAP-CONTENT-INVENTORY.md`)

### Extraction Process
1. Visit the page
2. Copy relevant content
3. Paste into inventory template
4. Move to next item
5. Repeat until complete

---

## 📄 Page Content Extraction

### For Each Page

**URL to Visit:**
```
https://lightspeedwp.agency/[page-slug]
```

**What to Extract:**

1. **Page Title**
   - Location: `<h1>` tag or page header
   - Copy: Exact title as shown
   - Example: "Custom WordPress Development"

2. **Meta Description**
   - Location: `<meta name="description">` in page source
   - How: Right-click → View Page Source → Search for "description"
   - Copy: Full description text
   - Example: "Professional WordPress development services..."

3. **Main Content**
   - Location: Main content area
   - Copy: Key paragraphs and sections
   - Note: Headlines, bullets, features

4. **URL Slug**
   - Location: Browser address bar
   - Copy: Everything after the domain
   - Example: `/services/wordpress-development`

**Template Entry:**
```typescript
{
  id: 'unique-id',
  title: '[Extracted Title]',
  slug: '[extracted-slug]',
  description: '[Meta description or first paragraph]',
  url: '/[slug]'
}
```

---

## 📝 Blog Post Extraction

### For Each Post

**URL to Visit:**
```
https://lightspeedwp.agency/blog/
```

**What to Extract:**

1. **Post Title**
   - Location: `<h1>` in article
   - Example: "10 WordPress Performance Tips"

2. **Post Slug**
   - Location: URL after `/blog/`
   - Example: `wordpress-performance-tips`

3. **Post Excerpt**
   - Location: First paragraph or meta description
   - Length: 1-2 sentences
   - Example: "Learn how to optimize your WordPress site for speed..."

4. **Author Name**
   - Location: Byline or author meta
   - Example: "John Doe"

5. **Publish Date**
   - Location: Date stamp on post
   - Format: YYYY-MM-DD
   - Example: "2024-12-15"

6. **Category**
   - Location: Post metadata or breadcrumb
   - Example: "WordPress Tips"

7. **Tags**
   - Location: Post footer or metadata
   - Example: ["Performance", "Optimization", "Speed"]

8. **Reading Time**
   - Calculate: ~200 words per minute
   - Or: Look for reading time indicator on page
   - Example: "5 min read"

**Template Entry:**
```typescript
{
  id: 'unique-id',
  title: '[Post Title]',
  slug: '[post-slug]',
  excerpt: '[First paragraph or excerpt]',
  author: {
    name: '[Author Name]',
    role: '[Author Role]',
    avatar: '[Avatar URL if available]'
  },
  date: 'YYYY-MM-DD',
  category: '[Category]',
  tags: ['[Tag 1]', '[Tag 2]'],
  readingTime: '[X] min',
  featured: false // Set true if featured post
}
```

---

## 🛠️ Service Extraction

### For Each Service

**URL to Visit:**
```
https://lightspeedwp.agency/services/
https://lightspeedwp.agency/services/[service-slug]
```

**What to Extract:**

1. **Service Name**
   - Location: Page title or service heading
   - Example: "Custom WordPress Development"

2. **Service Description**
   - Location: Main content area
   - Length: 1-2 paragraphs
   - Example: "We build custom WordPress solutions..."

3. **Key Features**
   - Location: Bulleted list or features section
   - Format: Array of strings
   - Example: 
     ```
     - Custom theme development
     - Plugin development
     - REST API integration
     ```

4. **Service Category**
   - Determine from site structure
   - Options: development, design, maintenance, ecommerce
   - Example: "development"

5. **Appropriate Icon**
   - Choose from lucide-react icons
   - Match to service type
   - Example: "Code" for development, "Palette" for design

**Template Entry:**
```typescript
{
  id: 'unique-id',
  title: '[Service Name]',
  slug: '[service-slug]',
  description: '[Service description 1-2 paragraphs]',
  features: [
    '[Feature 1]',
    '[Feature 2]',
    '[Feature 3]'
  ],
  category: '[development|design|maintenance|ecommerce]',
  icon: '[LucideIconName]'
}
```

---

## 💼 Portfolio Project Extraction

### For Each Project

**URL to Visit:**
```
https://lightspeedwp.agency/portfolio/
https://lightspeedwp.agency/work/
https://lightspeedwp.agency/projects/
```

**What to Extract:**

1. **Project Name**
   - Location: Project title
   - Example: "E-commerce Redesign for Retail Client"

2. **Client Name**
   - Location: Client section
   - Note: Only if publicly disclosed
   - Example: "XYZ Retail" or "Confidential Client"

3. **Project Description**
   - Location: Project overview
   - Length: 2-3 paragraphs
   - Example: "Complete redesign of WooCommerce store..."

4. **Industry**
   - Determine from project details
   - Example: "Retail", "Healthcare", "Education"

5. **Technologies Used**
   - Location: Tech stack section
   - Format: Array of strings
   - Example: ["WordPress", "WooCommerce", "React", "REST API"]

6. **Results/Metrics**
   - Location: Results section
   - Format: Metric + Value
   - Example: 
     ```
     - 50% increase in conversions
     - 2x faster page load
     - 95/100 Lighthouse score
     ```

7. **Testimonial**
   - Location: Client feedback section
   - Include: Quote, author, role
   - Example: 
     ```
     Quote: "Amazing work, exceeded expectations"
     Author: "Jane Smith"
     Role: "CEO, XYZ Retail"
     ```

**Template Entry:**
```typescript
{
  id: 'unique-id',
  title: '[Project Name]',
  slug: '[project-slug]',
  client: '[Client Name or Confidential]',
  description: '[Project description 2-3 paragraphs]',
  industry: '[Industry]',
  category: '[wordpress|ecommerce|custom]',
  technologies: ['[Tech 1]', '[Tech 2]', '[Tech 3]'],
  results: [
    { metric: '[Metric name]', value: '[Value]' },
    { metric: '[Metric name]', value: '[Value]' }
  ],
  testimonial: {
    quote: '[Client quote]',
    author: '[Author name]',
    role: '[Author role]'
  },
  featured: false // Set true if featured project
}
```

---

## ❓ FAQ Extraction

### For Each FAQ

**URL to Visit:**
```
https://lightspeedwp.agency/faq/
https://lightspeedwp.agency/frequently-asked-questions/
```

**What to Extract:**

1. **Question**
   - Location: FAQ question text
   - Copy: Exact question as written
   - Example: "How long does a typical project take?"

2. **Answer**
   - Location: FAQ answer text
   - Copy: Full answer
   - Example: "Project timelines vary from 4-12 weeks depending..."

3. **Category**
   - Determine logical grouping
   - Options: general, services, technical, pricing, process
   - Example: "process"

**Template Entry:**
```typescript
{
  id: 'unique-id',
  question: '[FAQ question]',
  answer: '[FAQ answer - can be multiple paragraphs]',
  category: '[general|services|technical|pricing|process]'
}
```

**Group by Context:**
```typescript
// Homepage FAQs
export const homepageFAQs: FAQ[] = [
  { /* General FAQs */ }
];

// Services FAQs
export const servicesFAQs: FAQ[] = [
  { /* Service-specific FAQs */ }
];

// Technical FAQs
export const technicalFAQs: FAQ[] = [
  { /* Technical questions */ }
];
```

---

## 👥 Team Member Extraction

### For Each Team Member

**URL to Visit:**
```
https://lightspeedwp.agency/about/
https://lightspeedwp.agency/team/
```

**What to Extract:**

1. **Name**
   - Location: Team member name
   - Example: "John Doe"

2. **Role/Title**
   - Location: Job title
   - Example: "Lead WordPress Developer"

3. **Bio**
   - Location: Team member bio section
   - Length: 1-2 paragraphs
   - Example: "John has 10+ years experience..."

4. **Social Links**
   - Location: Social icons
   - Extract: LinkedIn, Twitter, GitHub URLs
   - Example:
     ```
     LinkedIn: https://linkedin.com/in/johndoe
     Twitter: https://twitter.com/johndoe
     GitHub: https://github.com/johndoe
     ```

**Template Entry:**
```typescript
{
  id: 'unique-id',
  name: '[Full Name]',
  role: '[Job Title]',
  bio: '[Bio paragraph(s)]',
  image: '/team/[slug].jpg', // Note image filename
  social: {
    linkedin: '[LinkedIn URL]',
    twitter: '[Twitter URL]',
    github: '[GitHub URL]'
  }
}
```

---

## 💬 Testimonial Extraction

### For Each Testimonial

**URL to Visit:**
```
https://lightspeedwp.agency/ (homepage)
https://lightspeedwp.agency/testimonials/
https://lightspeedwp.agency/reviews/
```

**What to Extract:**

1. **Quote**
   - Location: Client testimonial text
   - Copy: Full quote
   - Example: "LightSpeed WP transformed our website..."

2. **Author Name**
   - Location: Client name
   - Example: "Jane Smith"

3. **Author Role**
   - Location: Client title
   - Example: "Marketing Director"

4. **Company**
   - Location: Company name
   - Example: "XYZ Corporation"

5. **Rating** (if available)
   - Location: Star rating
   - Format: Number 1-5
   - Example: 5

6. **Project Type**
   - Determine from context
   - Example: "WordPress Development", "WooCommerce Store"

**Template Entry:**
```typescript
{
  id: 'unique-id',
  quote: '[Full testimonial quote]',
  author: '[Author Name]',
  role: '[Author Title]',
  company: '[Company Name]',
  rating: 5, // If star rating shown
  projectType: '[Service/Project Type]',
  image: '/testimonials/[company-slug].jpg' // If company logo shown
}
```

---

## 💰 Pricing Extraction

### For Each Pricing Plan

**URL to Visit:**
```
https://lightspeedwp.agency/pricing/
https://lightspeedwp.agency/plans/
```

**What to Extract:**

1. **Plan Name**
   - Location: Pricing plan title
   - Example: "Starter Plan"

2. **Price**
   - Location: Price display
   - Format: Keep as string with currency
   - Example: "$999/month" or "Custom"

3. **Description**
   - Location: Plan description
   - Length: 1 sentence
   - Example: "Perfect for small businesses"

4. **Features**
   - Location: Feature list
   - Format: Array of strings
   - Example:
     ```
     - 5 page website
     - Mobile responsive
     - Contact form
     - 1 month support
     ```

5. **Popular Flag**
   - Look for: "Most Popular", "Recommended", badge
   - Value: true or false

6. **CTA**
   - Location: Call-to-action button
   - Extract: Button text and link
   - Example:
     ```
     text: "Get Started"
     page: "contact"
     ```

**Template Entry:**
```typescript
{
  id: 'unique-id',
  name: '[Plan Name]',
  price: '[Price]', // "$999/month" or "Custom"
  description: '[Plan description]',
  features: [
    '[Feature 1]',
    '[Feature 2]',
    '[Feature 3]'
  ],
  popular: false, // true if marked as popular
  cta: {
    text: '[Button Text]',
    page: '[target-page-slug]'
  }
}
```

---

## 🔗 Navigation Extraction

### Main Navigation

**URL to Visit:**
```
https://lightspeedwp.agency/ (any page - check header)
```

**What to Extract:**

1. **Top-Level Menu Items**
   - Location: Site header navigation
   - Copy: Each link text and URL
   - Example:
     ```
     Home → /
     Services → /services
     Portfolio → /portfolio
     Blog → /blog
     Contact → /contact
     ```

2. **Mega Menu Structure** (if applicable)
   - Location: Hover over nav items
   - Note: Submenu organization
   - Example:
     ```
     Services →
       - WordPress Development
       - WooCommerce
       - Website Design
       - Maintenance
     ```

### Footer Navigation

**What to Extract:**

1. **Footer Columns**
   - Note: Number of columns
   - Note: Column headings
   - Copy: All links per column

**Template Entry:**
```typescript
// Main Navigation
export const mainNavigation: NavigationLink[] = [
  {
    label: '[Link Text]',
    url: '[/url-slug]',
    children: [ // If submenu
      { label: '[Sublink]', url: '[/url]' }
    ]
  }
];

// Footer Navigation
export const footerNavigation = {
  '[Column 1 Title]': [
    { label: '[Link]', url: '[/url]' }
  ],
  '[Column 2 Title]': [
    { label: '[Link]', url: '[/url]' }
  ]
};
```

---

## ✅ Quality Checks

### Before Marking Content as Extracted

- [ ] **Accuracy:** Content matches source exactly
- [ ] **Completeness:** All fields filled in
- [ ] **URLs:** All links tested and verified
- [ ] **Spelling:** Names and terms spelled correctly
- [ ] **Formatting:** Consistent capitalization and punctuation
- [ ] **Copyright:** Content is from lightspeedwp.agency only
- [ ] **Privacy:** No sensitive/confidential info included

---

## 📋 Extraction Checklist

### Daily Progress Tracking

**Day 1: Discovery**
- [ ] Review full sitemap
- [ ] Fill in content inventory counts
- [ ] List all pages
- [ ] List all blog posts
- [ ] Identify content structure

**Day 2: Core Content**
- [ ] Extract all page content
- [ ] Extract 12 blog posts
- [ ] Extract all services
- [ ] Update pages.ts
- [ ] Update posts.ts
- [ ] Update services.ts

**Day 3: Supporting Content**
- [ ] Extract portfolio projects
- [ ] Extract team members
- [ ] Extract testimonials
- [ ] Extract FAQs
- [ ] Extract pricing
- [ ] Update all remaining data files

**Day 4: Validation**
- [ ] Verify all URLs
- [ ] Test all links
- [ ] Check for placeholders
- [ ] Run TypeScript check
- [ ] Create migration report

---

## 🚨 Common Issues

### Issue: Content Not Found
**Solution:** 
- Check site navigation
- Try site search
- Look in footer links
- Check sitemap.xml
- If still not found, note in inventory as "Not available"

### Issue: Protected Content
**Solution:**
- Don't include if requires login
- Don't include client confidential info
- Note as "Confidential" in inventory

### Issue: Outdated Content
**Solution:**
- Use most recent version
- Note if content seems outdated
- Flag for review/update

### Issue: Copyright Concerns
**Solution:**
- Only use lightspeedwp.agency content
- Don't copy from other sites
- Don't use stock photos without license
- Note copyright owner if uncertain

---

## 📊 Progress Tracking

### Completion Percentages

- [ ] Pages: __% complete (__/__ pages)
- [ ] Posts: __% complete (__/__ posts)
- [ ] Services: __% complete (__/__ services)
- [ ] Portfolio: __% complete (__/__ projects)
- [ ] Team: __% complete (__/__ members)
- [ ] Testimonials: __% complete (__/__ testimonials)
- [ ] FAQs: __% complete (__/__ FAQs)
- [ ] Pricing: __% complete (__/__ plans)

---

## 🎯 Next Steps

1. **Start with sitemap:** https://lightspeedwp.agency/sitemap.xml
2. **Use this guide** for each content type
3. **Fill inventory template** as you go
4. **Update data files** systematically
5. **Validate and test** when complete
6. **Create migration report**

---

**Happy Extracting!** 🚀

If you get stuck or have questions, refer to:
- `/SITEMAP-CONTENT-INVENTORY.md` — What to extract
- This guide — How to extract
- `/CONTENT-MIGRATION-REPORT.md` — Track your progress (create when complete)

---

**Created:** 2025-01-09  
**Last Updated:** 2025-01-09  
**Status:** 🔄 Active Guide
