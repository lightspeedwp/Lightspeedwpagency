# Pattern Catalog — Categories & Patterns

**Category:** Patterns  
**Version:** 1.1.0  
**Last Updated:** 2026-03-15  
**Status:** Active  
**Parent:** [pattern-catalog.md](../pattern-catalog.md)  

---

## Pattern Philosophy

**Core Principle:** A page is always "composed" from patterns. Do not create one-off sections for a single template.

**Benefits:** Reusability, consistency, editor-friendly, WordPress FSE compatible, easy to maintain

---

## Pattern Slug Format

**Format:** `lsx-design/{category}/{pattern-name}`

**Rules:**
- Always use lowercase
- Use hyphens (not underscores or spaces)
- Category must be one of the defined categories
- Name should be descriptive and unique

---

## Pattern Categories

### 1. Layout (Site Chrome)

**Slug:** `lsx-design/layout/{pattern-name}`  
**WordPress Mapping:** `parts/*.html`

- `site-header` — Global site header with navigation
- `site-footer` — Global site footer
- `mobile-menu` — Mobile navigation menu

---

### 2. Hero (Page Context)

**Slug:** `lsx-design/hero/{pattern-name}`

- `hero-home` — Homepage hero with large title
- `hero-page` — Standard page hero
- `hero-service` — Service page hero with features
- `hero-portfolio` — Portfolio project hero
- `hero-about` — About page hero
- `hero-contact` — Contact page hero

**Characteristics:** Full viewport height (optional), large typography, background image/gradient, primary CTA, scroll indicator (optional)

---

### 3. Header (Archive/Listing/Page Headers)

**Slug:** `lsx-design/header/{pattern-name}`

- `archive-header` — Archive page header
- `listing-header` — Blog/insights listing header
- `page-header` — Standard page header
- `section-header` — Section introduction header

**Characteristics:** Title + description, optional metadata, breadcrumbs integration, filters/sorting (optional)

---

### 4. Nav (Navigation Elements)

**Slug:** `lsx-design/nav/{pattern-name}`

- `breadcrumbs` — Breadcrumb navigation
- `pagination` — Page navigation
- `category-filters` — Category filter buttons
- `term-navigation` — Taxonomy term navigation
- `sorting-controls` — Sort/filter controls

**Characteristics:** Keyboard accessible, touch-friendly (44x44px targets), active state indicators, ARIA labels

---

### 5. Listing (Card Grids)

**Slug:** `lsx-design/listing/{pattern-name}`

- `post-grid` — Blog post grid
- `portfolio-grid` — Portfolio project grid
- `service-grid` — Service cards grid
- `team-grid` — Team member grid
- `testimonial-grid` — Testimonial cards

**Characteristics:** Responsive grid (1 → 2 → 3 → 4 columns), consistent card heights, hover states, empty states

---

### 6. Content (Editorial, Media, Supporting Sections)

**Slug:** `lsx-design/content/{pattern-name}`

- `editorial-section` — Rich text content
- `stats-grid` — Statistics/metrics grid
- `feature-list` — Feature list with icons
- `gallery-section` — Image gallery
- `video-section` — Video embed
- `faq-section` — FAQ accordion
- `checklist` — Checklist with checkmarks
- `testimonial-section` — Single testimonial
- `timeline` — Timeline/process steps

**Special Note:** FAQ questions MUST use `--text-lg`, NOT `--text-h4`. See [FAQSection.md](../FAQSection.md)

---

### 7. Meta (Quick Facts / Key-Value)

**Slug:** `lsx-design/meta/{pattern-name}`

- `quick-facts` — Key-value pairs grid
- `project-meta` — Project metadata
- `post-meta` — Post metadata (author, date, category)
- `specs-table` — Technical specifications

---

### 8. Related (Related Content Stacks)

**Slug:** `lsx-design/related/{pattern-name}`

- `related-posts` — Related blog posts
- `related-projects` — Related portfolio projects
- `related-services` — Related services
- `recommended-reading` — Recommended articles

**Characteristics:** 2-4 items typically, horizontal scroll on mobile, "View all" link

---

### 9. CTA (Call-to-Action Sections)

**Slug:** `lsx-design/cta/{pattern-name}`

- `cta-section` — Standard CTA with heading + button
- `cta-newsletter` — Newsletter signup CTA
- `cta-contact` — Contact us CTA
- `cta-inline` — Inline CTA within content

**Rule:** Only ONE primary CTA per section

---

### 10. State (Empty States, Error Messages)

**Slug:** `lsx-design/state/{pattern-name}`

- `empty-search` — No search results
- `empty-archive` — No posts in archive
- `error-404` — Page not found
- `loading-state` — Loading indicator
- `success-message` — Success confirmation

---

## Complete Pattern Summary

| Category | Count | Examples |
|----------|-------|----------|
| **Layout** | 3 | site-header, site-footer, mobile-menu |
| **Hero** | 6 | hero-home, hero-page, hero-service |
| **Header** | 4 | archive-header, listing-header, page-header |
| **Nav** | 5 | breadcrumbs, pagination, category-filters |
| **Listing** | 5 | post-grid, portfolio-grid, team-grid |
| **Content** | 12 | stats-grid, feature-list, faq-section |
| **Meta** | 4 | quick-facts, project-meta, post-meta |
| **Related** | 4 | related-posts, related-projects |
| **CTA** | 4 | cta-section, cta-newsletter, cta-contact |
| **State** | 5 | empty-search, error-404, loading-state |

**Total Patterns:** 50+

---

**See also:** [registration.md](./registration.md)
