# Complete Routing Reference

**Last Updated:** 2025-01-13  
**Status:** Complete Reference  
**Purpose:** Comprehensive routing map for all pages, templates, and navigation links

---

## 📋 **ROUTING STRUCTURE**

### **Route Format**
All routes follow WordPress-style URL patterns:
- **Root:** `/` → Front page (home)
- **Pages:** `/{slug}` → Page template
- **Archives:** `/blog`, `/portfolio-archive`, `/category/{slug}`, `/tag/{slug}`, `/author/{slug}`
- **Singles:** `/post-{slug}`, `/portfolio-single-{slug}`
- **Hierarchical:** `/{parent}/{child}` (e.g., `/solutions/wordpress`)

---

## 🏠 **CORE PAGES**

### **Homepage**
- **Route:** `/` or `/front-page`
- **Page ID:** `front-page`
- **Template:** `FrontPageTemplate.tsx`
- **Navigation:** Not in main nav (home link via logo)

### **About Pages**
| Route | Page ID | Template | In Nav |
|-------|---------|----------|--------|
| `/about` | `about` | `AboutTemplate.tsx` | ✅ Yes (About submenu) |
| `/team` | `team` | `TeamTemplate.tsx` | ✅ Yes (About submenu) |
| `/about-process` | `about-process` | `AboutProcessTemplate.tsx` | ✅ Yes (About submenu) |
| `/about-culture` | `about-culture` | `AboutCultureTemplate.tsx` | ✅ Yes (About submenu) |
| `/about-history` | `about-history` | `AboutHistoryTemplate.tsx` | ✅ Yes (About submenu) |

### **Utility Pages**
| Route | Page ID | Template | In Nav |
|-------|---------|----------|--------|
| `/contact` | `contact` | `ContactPageTemplate.tsx` | ✅ Yes (Main nav) |
| `/faq` | `faq` | `FAQTemplate.tsx` | ❌ No |
| `/pricing` | `pricing` | `PricingTemplate.tsx` | ❌ No |
| `/guarantees` | `guarantees` | `GuaranteesTemplate.tsx` | ❌ No |
| `/testimonials` | `testimonials` | `TestimonialsTemplate.tsx` | ❌ No |
| `/why-choose-us` | `why-choose-us` | `WhyChooseUsTemplate.tsx` | ❌ No |
| `/roi-calculator` | `roi-calculator` | `ROICalculatorTemplate.tsx` | ❌ No |

---

## 🛠️ **SERVICE PAGES**

### **Services Overview**
- **Route:** `/services`
- **Page ID:** `services`
- **Template:** `ServicesTemplate.tsx`
- **Navigation:** ✅ Yes (Main nav + submenu)

### **Service Detail Pages**
| Route | Page ID | Template | In Nav |
|-------|---------|----------|--------|
| `/discovery-service` | `discovery-service` | `DiscoveryServiceTemplate.tsx` | ✅ Yes (Services submenu) |
| `/design-service` | `design-service` | `DesignServiceTemplate.tsx` | ✅ Yes (Services submenu) |
| `/development-service` | `development-service` | `DevelopmentServiceTemplate.tsx` | ✅ Yes (Services submenu) |
| `/content-service` | `content-service` | `ContentServiceTemplate.tsx` | ✅ Yes (Services submenu) |
| `/support-service` | `support-service` | *Template needed* | ✅ Yes (Services submenu) |
| `/security-service` | `security-service` | `SecurityServiceTemplate.tsx` | ✅ Yes (Services submenu) |
| `/migrations-service` | `migrations-service` | `MigrationsServiceTemplate.tsx` | ✅ Yes (Services submenu) |
| `/mailchimp-service` | `mailchimp-service` | *Template needed* | ✅ Yes (Services submenu) |

**Note:** `support-service` and `mailchimp-service` referenced in navigation but templates not found.

---

## 💡 **SOLUTION PAGES**

### **Solutions Overview**
- **Route:** `/solutions`
- **Page ID:** `solutions`
- **Template:** `SolutionsTemplate.tsx`
- **Navigation:** ✅ Yes (Main nav + submenu)

### **Solution Detail Pages**
| Route | Page ID | Template | In Nav |
|-------|---------|----------|--------|
| `/wordpress-solution` | `wordpress-solution` | `WordPressSolutionTemplate.tsx` | ✅ Yes (Solutions submenu) |
| `/woocommerce-solution` | `woocommerce-solution` | `WooCommerceSolutionTemplate.tsx` | ✅ Yes (Solutions submenu) |
| `/tour-operator` | `tour-operator` | *Template needed* | ✅ Yes (Solutions submenu) |
| `/hosting` | `hosting` | `HostingTemplate.tsx` | ✅ Yes (Solutions submenu) |
| `/lsx-design` | `lsx-design` | *Template needed* | ✅ Yes (Solutions submenu) |

**Note:** `tour-operator` and `lsx-design` referenced in navigation but templates not found.

---

## 📝 **BLOG & ARCHIVES**

### **Blog Pages**
| Route | Page ID | Template | In Nav |
|-------|---------|----------|--------|
| `/blog` | `blog` | `BlogIndexTemplate.tsx` | ✅ Yes (Main nav) |
| `/index` | `index` | `IndexTemplate.tsx` (Latest posts) | ❌ No |

### **Category Archives**
| Route | Page ID | Template |
|-------|---------|----------|
| `/category-news` | `category-news` | `CategoryNewsTemplate.tsx` |
| `/category-updates` | `category-updates` | `CategoryUpdatesTemplate.tsx` |
| `/category-tutorials` | `category-tutorials` | `CategoryTutorialsTemplate.tsx` |
| `/category-design-insights` | `category-design-insights` | `CategoryDesignInsightsTemplate.tsx` |

### **Tag Archives**
| Route | Page ID | Template |
|-------|---------|----------|
| `/tag-gutenberg` | `tag-gutenberg` | `TagGutenbergTemplate.tsx` |
| `/tag-performance` | `tag-performance` | `TagPerformanceTemplate.tsx` |

### **Date Archives**
| Route | Page ID | Template |
|-------|---------|----------|
| `/date-2024` | `date-2024` | `Date2024Template.tsx` |
| `/date-2024-12` | `date-2024-12` | `Date2024DecemberTemplate.tsx` |

### **Author Archives**
| Route | Page ID | Template |
|-------|---------|----------|
| `/author` | `author` | `AuthorArchiveTemplate.tsx` |
| `/author-editor` | `author-editor` | `AuthorEditorTemplate.tsx` |
| `/author-contributor` | `author-contributor` | `AuthorContributorTemplate.tsx` |

### **Search**
| Route | Page ID | Template |
|-------|---------|----------|
| `/search-page` | `search-page` | `SearchPageTemplate.tsx` |

---

## 📰 **SINGLE POSTS**

### **Single Post Routes**
| Route | Page ID | Template |
|-------|---------|----------|
| `/post-design-system-guide` | `post-design-system-guide` | `SinglePostLongformTemplate.tsx` |
| `/post-web-performance` | `post-web-performance` | `SinglePostLongformTemplate.tsx` |
| `/post-accessibility-tips` | `post-accessibility-tips` | `SinglePostLongformTemplate.tsx` |
| `/single-post` | `single-post` | `SinglePostLongformTemplate.tsx` |
| `/single` | `single` | `SingleDetailTemplate.tsx` |

---

## 🎨 **PORTFOLIO**

### **Portfolio Archive**
- **Route:** `/portfolio-archive`
- **Page ID:** `portfolio-archive`
- **Template:** `PortfolioArchiveTemplate.tsx`
- **Navigation:** ✅ Yes (Main nav)

### **Portfolio Single Projects**
| Route | Page ID | Project Name |
|-------|---------|--------------|
| `/portfolio-single-eco-market-woocommerce` | `portfolio-single-eco-market-woocommerce` | EcoMarket |
| `/portfolio-single-healthfirst-wellness-portal` | `portfolio-single-healthfirst-wellness-portal` | HealthFirst |
| `/portfolio-single-wanderlust-travel-booking` | `portfolio-single-wanderlust-travel-booking` | Wanderlust |
| `/portfolio-single-techstartup-magazine` | `portfolio-single-techstartup-magazine` | TechStartup |
| `/portfolio-single-oceanview-real-estate` | `portfolio-single-oceanview-real-estate` | OceanView |
| `/portfolio-single-nonprofit-foundation` | `portfolio-single-nonprofit-foundation` | Global Education |

**Template:** All use `PortfolioSingleTemplate.tsx`

---

## 🔧 **DEVELOPER TOOLS**

### **Dev Tools Hub**
- **Route:** `/dev-tools`
- **Page ID:** `dev-tools`
- **Template:** Dev tools navigation page
- **Navigation:** ❌ No (direct access only)

### **Dev Tools Pages**
| Route | Page ID | Purpose |
|-------|---------|---------|
| `/dev-tools/template-tester` | `dev-tools/template-tester` | Template testing interface |
| `/dev-tools/design-system-test` | `dev-tools/design-system-test` | Design system validation |
| `/dev-tools/component-showcase` | `dev-tools/component-showcase` | Component library |
| `/dev-tools/compliance-scorecard` | `dev-tools/compliance-scorecard` | Accessibility compliance |
| `/dev-tools/feature-showcase` | `dev-tools/feature-showcase` | Feature demonstrations |
| `/dev-tools/block-documentation` | `dev-tools/block-documentation` | Block documentation |
| `/dev-tools/component-api` | `dev-tools/component-api` | Component API reference |
| `/dev-tools/design-blocks-showcase` | `dev-tools/design-blocks-showcase` | Design blocks library |
| `/dev-tools/button-showcase` | `dev-tools/button-showcase` | Button system reference |
| `/dev-tools/header-footer-comparison` | `dev-tools/header-footer-comparison` | Header/footer variants |
| `/dev-tools/icon-library` | `dev-tools/icon-library` | Icon reference |
| `/dev-tools/live-preview` | `dev-tools/live-preview` | Live preview mode |
| `/dev-tools/section-presets-showcase` | `dev-tools/section-presets-showcase` | Section style presets |

---

## 🎨 **DESIGN SYSTEM PAGES**

| Route | Page ID | Template |
|-------|---------|----------|
| `/style-guide` | `style-guide` | `StyleGuideTemplate.tsx` |
| `/section-style-example` | `section-style-example` | Section style variations |
| `/design-system-test` | `design-system-test` | Design system testing |
| `/component-showcase` | `component-showcase` | Component showcase |
| `/feature-showcase` | `feature-showcase` | Feature showcase |
| `/template-tester` | `template-tester` | Template tester |

---

## ❌ **ERROR PAGES**

| Route | Page ID | Template |
|-------|---------|----------|
| `/404` | `404` | `NotFoundTemplate.tsx` |

---

## 🗺️ **NAVIGATION STRUCTURE**

### **Main Navigation (SiteHeader)**
```tsx
const mainNavItems = [
  { label: 'Services', page: 'services', hasSubmenu: true },
  { label: 'Solutions', page: 'solutions', hasSubmenu: true },
  { label: 'Portfolio', page: 'portfolio-archive' },
  { label: 'About', page: 'about', hasSubmenu: true },
  { label: 'Blog', page: 'blog' },
  { label: 'Contact', page: 'contact' }
];
```

### **Services Submenu**
```tsx
const servicesSubmenu = [
  { label: 'Discovery', page: 'discovery-service' },
  { label: 'Design', page: 'design-service' },
  { label: 'Development', page: 'development-service' },
  { label: 'Support', page: 'support-service' },
  { label: 'Hosting', page: 'hosting' },
  { label: 'Migrations', page: 'migrations-service' },
  { label: 'Security', page: 'security-service' },
  { label: 'Content', page: 'content-service' },
  { label: 'Mailchimp', page: 'mailchimp-service' }
];
```

### **Solutions Submenu**
```tsx
const solutionsSubmenu = [
  { label: 'WordPress', page: 'wordpress-solution' },
  { label: 'WooCommerce', page: 'woocommerce-solution' },
  { label: 'Tour Operators', page: 'tour-operator' },
  { label: 'Hosting', page: 'hosting' },
  { label: 'LSX Design', page: 'lsx-design' }
];
```

### **About Submenu**
```tsx
const aboutSubmenu = [
  { label: 'About Us', page: 'about' },
  { label: 'Our Team', page: 'team' },
  { label: 'Our Process', page: 'about-process' },
  { label: 'Culture', page: 'about-culture' },
  { label: 'History', page: 'about-history' }
];
```

---

## 🚨 **MISSING TEMPLATES**

These routes are referenced in navigation but templates are missing:

1. **`support-service`** — Support Service page (referenced in Services submenu)
2. **`mailchimp-service`** — Mailchimp Service page (referenced in Services submenu)
3. **`tour-operator`** — Tour Operator solution page (referenced in Solutions submenu)
4. **`lsx-design`** — LSX Design solution page (referenced in Solutions submenu)

**Action Required:** Create templates or remove from navigation

---

## 🔍 **ROUTE VALIDATION RULES**

### **Valid Route Format**
```typescript
// Valid formats:
'/' → Front page
'/services' → Top-level page
'/discovery-service' → Service detail
'/portfolio-archive' → Archive
'/post-design-system-guide' → Single post
'/category-news' → Category archive
'/portfolio-single-eco-market-woocommerce' → Portfolio project
```

### **Invalid Route Format**
```typescript
// Invalid (will cause navigation errors):
'services' → Missing leading slash
'/services/' → Trailing slash
'/Services' → Incorrect case
'/services/discovery' → Hierarchical (not implemented)
```

---

## 📊 **ROUTE STATISTICS**

- **Total Routes:** 90+ unique routes
- **Main Navigation Items:** 6 (Services, Solutions, Portfolio, About, Blog, Contact)
- **Service Pages:** 9 (1 overview + 8 detail pages)
- **Solution Pages:** 5 (1 overview + 4 detail pages)
- **About Pages:** 5 (overview + 4 sub-pages)
- **Blog Archives:** 15+ (categories, tags, dates, authors)
- **Portfolio Projects:** 6 case studies
- **Utility Pages:** 8 pages
- **Developer Tools:** 14 tools
- **Missing Templates:** 4 pages

---

## 🎯 **USAGE EXAMPLES**

### **Navigating Programmatically**
```tsx
import { useNavigation } from '@/contexts/NavigationContext';

const { navigateTo } = useNavigation();

// Navigate to a page
navigateTo('services');
navigateTo('discovery-service');
navigateTo('portfolio-archive');
```

### **Linking in Components**
```tsx
<Button page="contact" size="lg">
  Get Started
</Button>
```

### **Checking Current Page**
```tsx
const { currentPage } = useNavigation();

const isActive = currentPage === 'services';
const isAboutSection = currentPage.startsWith('about-');
```

---

## ✅ **VALIDATION CHECKLIST**

- [ ] All main navigation links have valid routes
- [ ] All mega menu links have valid routes
- [ ] All footer links have valid routes
- [ ] All button links have valid pages
- [ ] All missing templates are identified
- [ ] All portfolio projects have valid slugs
- [ ] All blog archives have valid routes
- [ ] All service pages have valid routes
- [ ] All solution pages have valid routes

---

**Last Updated:** 2025-01-13  
**Maintained By:** LSX Design System Team  
**Version:** 1.0.0
