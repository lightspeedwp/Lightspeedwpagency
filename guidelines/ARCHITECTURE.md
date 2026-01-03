# LSX Design System Architecture

**Version:** 1.0  
**Last Updated:** December 25, 2024

---

## Overview

The LSX Design System is a **WordPress Full Site Editor (FSE) aware** design system built with React and Tailwind CSS. It validates content structure, layout patterns, and token discipline before implementation as a WordPress block theme.

---

## 🏗️ Architectural Principles

### 1. **System-First, Not Page-First**
Build reusable patterns. Pages are composed from patterns, not designed from scratch.

### 2. **Token-Driven Design**
All spacing, typography, colors, borders, and shadows use CSS variables from `/src/styles/theme.css`. No hard-coded values.

### 3. **WordPress-Native Thinking**
Every React component maps to a WordPress construct:
- Templates → `templates/*.html`
- Template Parts → `parts/*.html`
- Patterns → `patterns/*.php`
- Blocks → Core blocks + custom blocks
- Tokens → `theme.json` presets

### 4. **Accessibility-First**
WCAG 2.1 AA compliance is mandatory. Keyboard navigation, focus states, semantic HTML, and reduced motion support.

### 5. **Content-First Design**
Design serves content. Layouts must handle edge cases: missing images, long titles, empty states.

---

## 📁 Project Structure

```
/src/
├── app/
│   ├── data/                    # Centralized mock data (WordPress DB simulation)
│   │   ├── pages.ts            # Site structure, navigation menus
│   │   ├── portfolio.ts        # Portfolio projects (custom post type)
│   │   ├── posts.ts            # Blog posts (default post type)
│   │   └── faqs.ts             # FAQ collections (custom post type)
│   │
│   ├── components/
│   │   ├── common/             # Token enforcement components
│   │   │   ├── Container.tsx   # Max-width wrapper
│   │   │   ├── Section.tsx     # Spacing/background wrapper
│   │   │   ├── Heading.tsx     # Typography enforcement
│   │   │   ├── Button.tsx      # Interactive element
│   │   │   └── Breadcrumbs.tsx # Navigation utility
│   │   │
│   │   ├── parts/              # Template parts (global chrome)
│   │   │   ├── SiteHeader.tsx  # parts/header.html
│   │   │   └── SiteFooter.tsx  # parts/footer.html
│   │   │
│   │   ├── patterns/           # Block patterns (reusable sections)
│   │   │   ├── HeroSection.tsx
│   │   │   ├── CardGrid.tsx
│   │   │   ├── CTASection.tsx
│   │   │   ├── FAQSection.tsx
│   │   │   └── [...25+ patterns]
│   │   │
│   │   ├── templates/          # Page templates (archetypes)
│   │   │   ├── FrontPageTemplate.tsx    # templates/front-page.html
│   │   │   ├── BlogIndexTemplate.tsx    # templates/index.html
│   │   │   ├── SinglePostTemplate.tsx   # templates/single.html
│   │   │   └── [...15+ templates]
│   │   │
│   │   └── ui/                 # Non-WordPress utilities (progressive enhancement)
│   │       ├── BackToTopButton.tsx
│   │       ├── StyleSwitcher.tsx
│   │       └── LayoutSwitcher.tsx
│   │
│   ├── contexts/               # React Context providers
│   │   └── NavigationContext.tsx
│   │
│   └── App.tsx                 # Route handler
│
├── styles/
│   ├── theme.css              # Design tokens (CSS variables)
│   ├── fonts.css              # Font imports (@font-face)
│   ├── tailwind.css           # Tailwind configuration
│   └── index.css              # Global styles
│
└── guidelines/                # Documentation (this directory)
    ├── Guidelines.md          # Canonical reference
    ├── ARCHITECTURE.md        # This file
    ├── design-tokens/         # Token documentation
    ├── components/            # Component-specific guidelines
    ├── patterns/              # Pattern documentation
    ├── templates/             # Template documentation
    └── mobile/                # Mobile-specific guidelines
```

---

## 🗂️ Data Layer Architecture

### Centralized Mock Data (`/src/app/data/`)

All content is centralized to mirror how WordPress manages data through a database.

#### **Data Files & WordPress Mapping**

| React File | WordPress Equivalent | Purpose |
|------------|---------------------|---------|
| `pages.ts` | Pages + Navigation Menus | Site structure, URLs, menu items |
| `portfolio.ts` | Custom Post Type: `portfolio` | Project case studies with meta fields |
| `posts.ts` | Default Post Type: `posts` | Blog articles with authors, categories |
| `faqs.ts` | Custom Post Type: `faq` | FAQ collections with taxonomy |

#### **Benefits**

1. **Single Source of Truth** - Update data once, reflects everywhere
2. **Type Safety** - TypeScript interfaces ensure consistency
3. **Reusability** - Import same data across multiple templates
4. **Maintainability** - Decouple data from presentation
5. **WordPress-Ready** - Structure mirrors WP data models

#### **Usage Pattern**

```tsx
// Import centralized data
import { mainNavigation, footerNavigation } from '../../data/pages';
import { portfolioProjects, featuredProjects } from '../../data/portfolio';
import { blogPosts, getPostBySlug } from '../../data/posts';
import { servicesFAQs } from '../../data/faqs';

// Use in component
<SiteHeader navigation={mainNavigation} />
<PortfolioGrid projects={featuredProjects} />
<FAQSection faqs={servicesFAQs} />
```

---

## 🎨 Design Token System

### Token Categories

All design tokens are defined in `/src/styles/theme.css` as CSS variables.

#### **Typography** (`--text-*`, `--font-weight-*`)
```css
--text-h1: 60px;
--text-h2: 32px;
--text-h3: 24px;
--text-h4: 20px;
--text-base: 16px;
--text-small: 12px;

--font-weight-regular: 400;
--font-weight-medium: 500;
--font-weight-semibold: 600;
--font-weight-bold: 700;
```

**Fonts:**
- **Lexend** - Primary font (headings, body, UI elements)
- **Manrope** - Secondary font (small text only)

#### **Colors** (`--primary`, `--background`, etc.)
Semantic color roles for light and dark modes:
- Surface colors: `--background`, `--card`, `--popover`
- Interactive colors: `--primary`, `--secondary`, `--accent`
- State colors: `--muted`, `--destructive`
- Borders: `--border`, `--border-soft`, `--border-extra-soft`

#### **Spacing** (Tailwind classes)
Use Tailwind's spacing scale (4px base unit):
- `p-4` = 16px padding
- `gap-6` = 24px gap
- `mb-8` = 32px margin-bottom

#### **Border Radius** (`--radius-*`)
```css
--radius: 4px;              /* Base radius */
--radius-sm: 2px;           /* Small radius */
--radius-md: 4px;           /* Medium radius */
--radius-lg: 8px;           /* Large radius */
--radius-xl: 12px;          /* Extra large radius */
```

#### **Shadows** (`--shadow-*`)
```css
--shadow-sm: 0 1px 3px rgba(0, 0, 0, 0.05);
--shadow-md: 0 4px 6px rgba(0, 0, 0, 0.05);
--shadow-lg: 0 10px 40px rgba(0, 0, 0, 0.15);
--shadow-xl: 0 20px 40px rgba(0, 0, 0, 0.12);
--shadow-primary: 0 4px 12px rgba(30, 106, 255, 0.3);
--shadow-hover: 0 8px 16px rgba(0, 0, 0, 0.1);
```

#### **Glassmorphism** (`--glass-*`)
```css
--glass-bg: rgba(255, 255, 255, 0.08);
--glass-bg-strong: rgba(255, 255, 255, 0.15);
--glass-border: rgba(0, 0, 0, 0.08);
--glass-text: rgba(9, 9, 9, 1);
```

---

## 🧩 Component Architecture

### Component Hierarchy

```
Common Components (Token Enforcement)
├── Container - Max-width wrapper
├── Section - Spacing/background wrapper
├── Heading - Typography enforcement
├── Button - Interactive elements
└── Breadcrumbs - Navigation utility

Template Parts (Global Chrome)
├── SiteHeader - Global header with navigation
└── SiteFooter - Global footer with navigation

Patterns (Reusable Sections)
├── Hero patterns (page context)
├── Content patterns (editorial, media)
├── Listing patterns (card grids, archives)
├── Navigation patterns (filters, pagination)
├── Meta patterns (stats, testimonials)
└── CTA patterns (call-to-action sections)

Templates (Page Archetypes)
├── FrontPageTemplate - Homepage
├── BlogIndexTemplate - Blog archive
├── SinglePostTemplate - Blog post detail
├── PortfolioArchiveTemplate - Portfolio grid
└── [...15+ templates]

UI Utilities (Progressive Enhancement)
├── BackToTopButton - Scroll utility
├── StyleSwitcher - Theme switcher
└── LayoutSwitcher - View mode switcher
```

### Component Composition Rules

1. **Templates compose Patterns** - Templates are built from patterns
2. **Patterns use Common Components** - Patterns enforce tokens via common components
3. **UI Utilities are Optional** - Progressive enhancement, not required for functionality
4. **Template Parts are Global** - Header/footer appear on all pages

---

## 🔄 WordPress Mapping

### React → WordPress Translation

| React Concept | WordPress Equivalent | File Location |
|---------------|---------------------|---------------|
| `FrontPageTemplate` | `templates/front-page.html` | FSE template |
| `SiteHeader` | `parts/header.html` | Template part |
| `HeroSection` | `patterns/hero-section.php` | Block pattern |
| `Button` | Core button block + styles | Block style variation |
| `Container` | Core group block | Block settings |
| `useNavigation()` | `wp_nav_menu()` | PHP function |

### Pattern Registration

Every reusable section becomes a registered pattern:

**React:**
```tsx
<HeroSection
  title="Welcome"
  description="..."
  buttonText="Get Started"
/>
```

**WordPress Pattern:**
```php
<!-- wp:group {"metadata":{"name":"Hero Section"}} -->
<div class="wp-block-group">
  <!-- wp:heading {"level":1} -->
  <h1>Welcome</h1>
  <!-- /wp:heading -->
  
  <!-- wp:paragraph -->
  <p>...</p>
  <!-- /wp:paragraph -->
  
  <!-- wp:buttons -->
  <div class="wp-block-buttons">
    <!-- wp:button -->
    <div class="wp-block-button">
      <a class="wp-block-button__link">Get Started</a>
    </div>
    <!-- /wp:button -->
  </div>
  <!-- /wp:buttons -->
</div>
<!-- /wp:group -->
```

---

## 📐 Page Archetypes

Every page template follows one of these fixed archetypes:

### 1. **Content Hub (Archive)**
**Order:** Breadcrumbs → Archive Header → Filters (optional) → Card Grid → Pagination → CTA (optional)

**Examples:** Portfolio Archive, Blog Archive

### 2. **Taxonomy Archive**
**Order:** Breadcrumbs → Archive Header → Term Navigation → Card Grid → Pagination → CTA (optional)

**Examples:** Category Archive, Tag Archive

### 3. **Single Detail**
**Order:** Hero → Editorial Content → Meta/Quick Facts → Supporting Sections → Related Content → CTA

**Examples:** Single Post, Single Portfolio Project, About Page

### 4. **Editorial Listing**
**Order:** Breadcrumbs → Listing Header → Results/Sorting → Category Filters → Post Grid → Pagination

**Examples:** Blog Index

### 5. **Utility Page**
**Order:** Page Header → Editorial Content → Utility Block (Search/FAQ/Contact) → CTA (optional)

**Examples:** 404, Contact, FAQ

---

## ♿ Accessibility Architecture

### WCAG 2.1 AA Compliance

#### **Semantic HTML Structure**
- One `<h1>` per page
- Logical heading hierarchy (no skipping levels)
- Landmarks: `<header>`, `<nav>`, `<main>`, `<footer>`
- Real lists (`<ul>`, `<ol>`) for list content

#### **Keyboard Navigation**
- All interactive elements reachable via Tab
- Visible focus states (2px ring outline)
- Skip links to main content
- No keyboard traps

#### **Touch Targets**
- Minimum 44×44px for all interactive elements
- Adequate spacing between targets
- Mobile-optimized navigation

#### **Motion & Animation**
- Respect `prefers-reduced-motion`
- No required animation for understanding
- Smooth scroll with fallback

#### **Color Contrast**
- All text meets 4.5:1 contrast ratio
- Interactive elements meet 3:1 contrast
- Dark mode maintains contrast ratios

---

## 🚀 Performance Architecture

### Code Splitting
- Templates lazy-loaded by route
- Heavy components code-split
- Shared components bundled together

### Asset Optimization
- CSS variables reduce bundle size
- Tailwind CSS purged of unused classes
- Component-level CSS scoping

### Data Management
- Centralized data reduces duplication
- Type-safe imports prevent errors
- Lazy data loading where appropriate

---

## 🧪 Testing Strategy

### Visual Regression Testing
- Test all templates with edge cases
- Long titles (100+ characters)
- Missing images
- Empty states

### Accessibility Testing
- Keyboard navigation tests
- Screen reader compatibility
- Focus state visibility
- Color contrast validation

### Responsive Testing
- Mobile-first breakpoints
- Touch target sizes
- Typography scaling
- Layout reflow

---

## 📚 Documentation Standards

### Component Documentation
Every component must document:
1. **Purpose** - What it does
2. **Props** - TypeScript interface
3. **WordPress Mapping** - Block/pattern equivalent
4. **Usage Example** - Code snippet
5. **Accessibility Notes** - ARIA, semantics

### Pattern Documentation
Every pattern must document:
1. **Pattern Slug** - `lsx-design/{category}/{name}`
2. **Category** - hero, content, listing, etc.
3. **Composition** - Which components used
4. **WordPress Markup** - Block HTML
5. **Variations** - Available style variations

---

## 🔧 Development Workflow

### Adding a New Template

1. **Read Guidelines** - Understand archetype and token system
2. **Identify Archetype** - Choose from 5 fixed archetypes
3. **Select Patterns** - Compose from existing patterns
4. **Import Centralized Data** - Use data from `/src/app/data/`
5. **Enforce Tokens** - Use CSS variables and Tailwind classes
6. **Test Accessibility** - Keyboard nav, focus states, semantics
7. **Document** - Add to guidelines

### Adding a New Pattern

1. **Define Purpose** - What problem does it solve?
2. **Choose Category** - hero, content, listing, etc.
3. **Build with Common Components** - Use Container, Section, Heading, Button
4. **Use Design Tokens** - CSS variables only
5. **Add Variations** - Style variations if needed
6. **Map to WordPress** - Define block pattern markup
7. **Document** - Add pattern documentation

---

## 🎯 Success Metrics

### Design System Health
- ✅ All templates use patterns (no bespoke layouts)
- ✅ All spacing uses Tailwind classes (no raw values)
- ✅ All colors use CSS variables (no hex codes)
- ✅ All typography uses design tokens (no pixel values)
- ✅ All components map to WordPress blocks

### Accessibility Compliance
- ✅ WCAG 2.1 AA compliance verified
- ✅ Keyboard navigation functional
- ✅ Focus states visible
- ✅ Touch targets meet 44×44px minimum
- ✅ Color contrast ratios validated

### Code Quality
- ✅ TypeScript strict mode enabled
- ✅ No PropTypes warnings
- ✅ All imports resolve correctly
- ✅ Centralized data used consistently
- ✅ Components properly documented

---

**Last Updated:** December 25, 2024  
**Maintained By:** LSX Design Team  
**WordPress Compatibility:** FSE (Full Site Editing)
