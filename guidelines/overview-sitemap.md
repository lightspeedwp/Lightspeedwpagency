# Site Structure & Navigation

**Version:** 1.0  
**Last Updated:** December 25, 2024

---

## 📐 Complete Site Map

### Homepage
- **URL:** `/`
- **Template:** FrontPageTemplate
- **Archetype:** Single Detail

### About Section
- **About** - `/about` - AboutTemplate
  - **Our Process** - `/about/process` - AboutProcessTemplate
  - **Our Culture** - `/about/culture` - AboutCultureTemplate
  - **Our History** - `/about/history` - AboutHistoryTemplate
- **Team** - `/team` - TeamTemplate

### Services Section
- **Services Overview** - `/services` - ServicesTemplate
  - **WordPress Development** - `/services/wordpress-development` - ServiceDetailTemplate
  - **WooCommerce Solutions** - `/services/woocommerce-solutions` - ServiceDetailTemplate
  - **Custom Block Themes** - `/services/custom-block-themes` - ServiceDetailTemplate
  - **Headless WordPress** - `/services/headless-wordpress` - ServiceDetailTemplate
  - **Performance Optimization** - `/services/performance-optimization` - ServiceDetailTemplate
  - **Maintenance & Support** - `/services/maintenance-support` - ServiceDetailTemplate

### Solutions Section
- **Solutions Overview** - `/solutions` - (Future implementation)
  - **Enterprise WordPress** - `/solutions/enterprise-wordpress` - SolutionDetailTemplate
  - **E-Commerce Solutions** - `/solutions/ecommerce-solutions` - SolutionDetailTemplate
  - **Content Management** - `/solutions/content-management` - SolutionDetailTemplate

### Portfolio
- **Portfolio Archive** - `/portfolio` - PortfolioArchiveTemplate
- **Single Project** - `/portfolio/[slug]` - SinglePortfolioTemplate

### Blog
- **Blog Index** - `/blog` - BlogIndexTemplate
- **Single Post** - `/blog/[slug]` - SinglePostTemplate
- **Category Archive** - `/blog/category/[slug]` - CategoryArchiveTemplate
- **Tag Archive** - `/blog/tag/[slug]` - (Future implementation)

### Utility Pages
- **Contact** - `/contact` - ContactPageTemplate
- **FAQ** - `/faq` - FAQTemplate
- **Hosting** - `/hosting` - HostingTemplate
- **404 Not Found** - `/404` - 404Template

---

## 🗂️ Navigation Structure

### Main Navigation (Desktop)

```tsx
[
  { label: 'Home', href: '/' },
  { 
    label: 'About', 
    href: '/about',
    children: [
      { label: 'Our Process', href: '/about/process' },
      { label: 'Our Culture', href: '/about/culture' },
      { label: 'Our History', href: '/about/history' },
      { label: 'Our Team', href: '/team' }
    ]
  },
  {
    label: 'Services',
    href: '/services',
    children: [
      { label: 'WordPress Development', href: '/services/wordpress-development' },
      { label: 'WooCommerce Solutions', href: '/services/woocommerce-solutions' },
      { label: 'Custom Block Themes', href: '/services/custom-block-themes' },
      { label: 'Headless WordPress', href: '/services/headless-wordpress' },
      { label: 'Performance Optimization', href: '/services/performance-optimization' },
      { label: 'Maintenance & Support', href: '/services/maintenance-support' }
    ]
  },
  { label: 'Portfolio', href: '/portfolio' },
  { label: 'Blog', href: '/blog' },
  { label: 'Contact', href: '/contact' }
]
```

### Footer Navigation

**Column 1: Company**
```tsx
[
  { label: 'About', href: '/about' },
  { label: 'Team', href: '/team' },
  { label: 'Hosting', href: '/hosting' },
  { label: 'Contact', href: '/contact' }
]
```

**Column 2: Services**
```tsx
[
  { label: 'WordPress Development', href: '/services/wordpress-development' },
  { label: 'WooCommerce Solutions', href: '/services/woocommerce-solutions' },
  { label: 'Custom Block Themes', href: '/services/custom-block-themes' },
  { label: 'Headless WordPress', href: '/services/headless-wordpress' }
]
```

**Column 3: Resources**
```tsx
[
  { label: 'Blog', href: '/blog' },
  { label: 'Portfolio', href: '/portfolio' },
  { label: 'FAQ', href: '/faq' }
]
```

---

## 📊 Page Hierarchy

```
LSX Design (/)
│
├── About (/about)
│   ├── Our Process (/about/process)
│   ├── Our Culture (/about/culture)
│   └── Our History (/about/history)
│
├── Team (/team)
│
├── Services (/services)
│   ├── WordPress Development (/services/wordpress-development)
│   ├── WooCommerce Solutions (/services/woocommerce-solutions)
│   ├── Custom Block Themes (/services/custom-block-themes)
│   ├── Headless WordPress (/services/headless-wordpress)
│   ├── Performance Optimization (/services/performance-optimization)
│   └── Maintenance & Support (/services/maintenance-support)
│
├── Portfolio (/portfolio)
│   ├── Project Alpha (/portfolio/ecommerce-platform-redesign)
│   ├── Project Beta (/portfolio/headless-news-site)
│   └── [... 4 more projects]
│
├── Blog (/blog)
│   ├── Post 1 (/blog/wordpress-6-4-block-theme-updates)
│   ├── Post 2 (/blog/building-performant-woocommerce-stores)
│   └── [... 10 more posts]
│
├── Hosting (/hosting)
├── Contact (/contact)
└── FAQ (/faq)
```

---

## 🔗 URL Patterns

### Static Pages
```
/                           # Homepage
/about                      # About page
/about/process              # About sub-page
/services                   # Services overview
/team                       # Team page
/contact                    # Contact page
/faq                        # FAQ page
/hosting                    # Hosting page
```

### Dynamic Pages (Archives)
```
/portfolio                  # Portfolio archive
/blog                       # Blog archive
/blog/category/{slug}       # Category archive
```

### Dynamic Pages (Singles)
```
/portfolio/{slug}           # Single portfolio project
/blog/{slug}                # Single blog post
/services/{slug}            # Single service detail
/solutions/{slug}           # Single solution detail
```

---

## 🧭 Breadcrumb Patterns

### Static Page Breadcrumbs
```tsx
// About Page
Home > About

// About Process
Home > About > Our Process

// Services
Home > Services

// Service Detail
Home > Services > WordPress Development
```

### Archive Breadcrumbs
```tsx
// Portfolio Archive
Home > Portfolio

// Blog Archive
Home > Blog

// Category Archive
Home > Blog > Category Name
```

### Single Item Breadcrumbs
```tsx
// Single Portfolio Project
Home > Portfolio > Project Name

// Single Blog Post
Home > Blog > Post Title
```

---

## 📱 Mobile Navigation

### Hamburger Menu Structure

```tsx
Main Menu
├── Home
├── About
│   ├── Our Process
│   ├── Our Culture
│   ├── Our History
│   └── Our Team
├── Services
│   ├── WordPress Development
│   ├── WooCommerce Solutions
│   ├── Custom Block Themes
│   ├── Headless WordPress
│   ├── Performance Optimization
│   └── Maintenance & Support
├── Portfolio
├── Blog
└── Contact
```

**Mobile Menu Features:**
- Slide-in from right
- Overlay background
- Expandable sub-menus
- Close button
- Touch-friendly tap targets (44×44px minimum)

---

## 🎯 Template to URL Mapping

| Template | URLs Using This Template | Count |
|----------|------------------------|-------|
| FrontPageTemplate | `/` | 1 |
| AboutTemplate | `/about` | 1 |
| AboutProcessTemplate | `/about/process` | 1 |
| AboutCultureTemplate | `/about/culture` | 1 |
| AboutHistoryTemplate | `/about/history` | 1 |
| TeamTemplate | `/team` | 1 |
| ServicesTemplate | `/services` | 1 |
| ServiceDetailTemplate | `/services/*` | 6 |
| PortfolioArchiveTemplate | `/portfolio` | 1 |
| SinglePortfolioTemplate | `/portfolio/*` | 6 |
| BlogIndexTemplate | `/blog` | 1 |
| SinglePostTemplate | `/blog/*` | 12 |
| CategoryArchiveTemplate | `/blog/category/*` | Dynamic |
| ContactPageTemplate | `/contact` | 1 |
| FAQTemplate | `/faq` | 1 |
| HostingTemplate | `/hosting` | 1 |
| 404Template | Any 404 error | N/A |

---

## 📋 Content Types

### Pages (WordPress Pages)
- Static content managed in WordPress admin
- Examples: About, Services, Contact, Team

### Portfolio (Custom Post Type)
- Custom post type: `portfolio`
- Taxonomy: `portfolio_category`, `portfolio_industry`
- Custom fields: client, challenge, solution, results, technologies

### Posts (Default Post Type)
- Default WordPress post type
- Categories, tags, featured image
- Author, publish date, reading time

### FAQs (Custom Post Type)
- Custom post type: `faq`
- Taxonomy: `faq_category`
- Custom fields: question, answer, order

---

## 🔍 WordPress Query Types

### Main Query
```php
// Homepage
is_front_page()

// Blog index
is_home()

// Single post
is_single()

// Portfolio archive
is_post_type_archive('portfolio')

// Category archive
is_category()
```

### Custom Queries
```php
// Featured portfolio projects
new WP_Query([
  'post_type' => 'portfolio',
  'meta_key' => 'featured',
  'meta_value' => '1',
  'posts_per_page' => 3
]);

// Recent blog posts
new WP_Query([
  'post_type' => 'post',
  'posts_per_page' => 6,
  'orderby' => 'date',
  'order' => 'DESC'
]);
```

---

## ✅ Navigation Best Practices

### Accessibility
- Clear, descriptive link text
- Keyboard navigable (Tab, Enter, Escape)
- ARIA labels for screen readers
- Skip links to main content
- Focus states visible (2px outline)

### Mobile UX
- Touch targets ≥ 44×44px
- Thumb-friendly menu position
- Swipe to close drawer
- No hover-only interactions

### Performance
- Navigation data centralized (`/src/app/data/pages.ts`)
- No unnecessary re-renders
- Lazy load sub-menus where appropriate
- Prefetch critical routes

---

**Last Updated:** December 25, 2024  
**Total Pages:** 30+ (static and dynamic)  
**Maintained By:** LSX Design Team
