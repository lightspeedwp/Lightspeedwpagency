# WordPress Implementation Checklist

Step-by-step guide to converting the LSX Design prototype into a WordPress block theme.

---

## 🎯 Prerequisites

- [ ] WordPress 6.0+ installed
- [ ] Node.js for block development (if creating custom blocks)
- [ ] Code editor (VS Code recommended)
- [ ] Local development environment (Local, MAMP, or similar)

---

## 📁 Phase 1: Theme Setup

### 1.1 Create Theme Structure

```
lsx-design-theme/
├── style.css (theme header)
├── theme.json (design tokens + settings)
├── functions.php (theme setup)
├── templates/
│   ├── index.html
│   ├── front-page.html
│   ├── archive.html
│   ├── single.html
│   └── page.html
├── parts/
│   ├── header.html
│   └── footer.html
├── patterns/
│   ├── hero-home.php
│   ├── archive-header.php
│   ├── card-grid.php
│   ├── cta-section.php
│   ├── pagination.php
│   └── filter-bar.php
├── assets/
│   ├── css/
│   │   └── theme-enhancements.css
│   └── js/
│       └── back-to-top.js
└── inc/
    └── pattern-registration.php
```

**Tasks:**
- [ ] Create theme directory in `wp-content/themes/lsx-design-theme/`
- [ ] Add `style.css` with theme header
- [ ] Create all required directories

---

## 📐 Phase 2: Design Tokens (theme.json)

### 2.1 Define Spacing Presets

```json
{
  "version": 2,
  "settings": {
    "spacing": {
      "spacingSizes": [
        { "slug": "10", "size": "0.5rem", "name": "Tight (8px)" },
        { "slug": "20", "size": "0.75rem", "name": "Small (12px)" },
        { "slug": "30", "size": "1rem", "name": "Base (16px)" },
        { "slug": "40", "size": "1.5rem", "name": "Medium (24px)" },
        { "slug": "50", "size": "2rem", "name": "Large (32px)" },
        { "slug": "56", "size": "2.5rem", "name": "XL (40px)" },
        { "slug": "60", "size": "3rem", "name": "2XL (48px)" },
        { "slug": "64", "size": "4rem", "name": "3XL (64px)" },
        { "slug": "72", "size": "5rem", "name": "4XL (80px)" },
        { "slug": "80", "size": "6rem", "name": "5XL (96px)" }
      ]
    }
  }
}
```

**Tasks:**
- [ ] Create `theme.json` in theme root
- [ ] Define all 10 spacing presets
- [ ] Test spacing tokens in Gutenberg editor

### 2.2 Define Typography Presets

```json
{
  "settings": {
    "typography": {
      "fontSizes": [
        { "slug": "100", "size": "0.75rem", "name": "Micro" },
        { "slug": "200", "size": "0.875rem", "name": "Small" },
        { "slug": "300", "size": "1rem", "name": "Base" },
        { "slug": "400", "size": "1.125rem", "name": "Medium" },
        { "slug": "500", "size": "1.25rem", "name": "Large" },
        { "slug": "600", "size": "1.5rem", "name": "XL" },
        { "slug": "700", "size": "2rem", "name": "2XL" },
        { "slug": "800", "size": "2.5rem", "name": "3XL" },
        { "slug": "900", "size": "3rem", "name": "4XL" }
      ]
    }
  }
}
```

**Tasks:**
- [ ] Define all 9 font-size presets
- [ ] Test typography scale in editor

### 2.3 Define Color Palette

```json
{
  "settings": {
    "color": {
      "palette": [
        { "slug": "base", "color": "#ffffff", "name": "Base" },
        { "slug": "contrast", "color": "oklch(0.145 0 0)", "name": "Contrast" },
        { "slug": "primary", "color": "#030213", "name": "Primary" },
        { "slug": "primary-foreground", "color": "oklch(1 0 0)", "name": "Primary Foreground" },
        { "slug": "accent", "color": "oklch(0.488 0.243 264.376)", "name": "Accent" },
        { "slug": "accent-foreground", "color": "oklch(1 0 0)", "name": "Accent Foreground" },
        { "slug": "neutral-100", "color": "oklch(0.985 0 0)", "name": "Neutral 100" },
        { "slug": "neutral-300", "color": "#ececf0", "name": "Neutral 300" },
        { "slug": "neutral-500", "color": "#717182", "name": "Neutral 500" },
        { "slug": "neutral-600", "color": "oklch(0.439 0 0)", "name": "Neutral 600" },
        { "slug": "neutral-900", "color": "oklch(0.145 0 0)", "name": "Neutral 900" }
      ]
    }
  }
}
```

**Tasks:**
- [ ] Define all semantic color roles
- [ ] Test color palette in editor
- [ ] Verify color contrast meets WCAG AA

### 2.4 Layout Settings

```json
{
  "settings": {
    "layout": {
      "contentSize": "1280px",
      "wideSize": "1440px"
    }
  }
}
```

**Tasks:**
- [ ] Set contentSize (matches Container default)
- [ ] Set wideSize (matches Container wide)

---

## 🏗️ Phase 3: Template Parts

### 3.1 Create Header (`parts/header.html`)

**Source:** `SiteHeader.tsx`

```html
<!-- wp:group {"layout":{"type":"constrained"}} -->
<header>
  <!-- wp:group {"align":"wide","style":{"spacing":{"padding":{"top":"var:preset|spacing|30","bottom":"var:preset|spacing|30"}}}} -->
  <div class="wp-block-group alignwide">
    <!-- wp:site-logo /-->
    
    <!-- wp:navigation {"layout":{"type":"flex"}} /-->
  </div>
  <!-- /wp:group -->
</header>
<!-- /wp:group -->
```

**Tasks:**
- [ ] Convert SiteHeader component to WordPress blocks
- [ ] Add Site Logo block
- [ ] Configure Navigation block
- [ ] Test sticky header behavior
- [ ] Verify keyboard navigation

### 3.2 Create Footer (`parts/footer.html`)

**Source:** `SiteFooter.tsx`

**Tasks:**
- [ ] Convert SiteFooter component to WordPress blocks
- [ ] Use Group blocks for column layout
- [ ] Add Navigation blocks for footer links
- [ ] Style with spacing tokens
- [ ] Test responsive behavior

---

## 🎨 Phase 4: Block Patterns

### 4.1 Register Pattern Directory

**In `functions.php`:**

```php
<?php
function lsx_design_register_patterns() {
    register_block_pattern_category(
        'lsx-design',
        array( 'label' => __( 'LSX Design', 'lsx-design-theme' ) )
    );
}
add_action( 'init', 'lsx_design_register_patterns' );

// Auto-register patterns from /patterns directory
require_once get_template_directory() . '/inc/pattern-registration.php';
```

**Tasks:**
- [ ] Create pattern category
- [ ] Set up auto-registration
- [ ] Test pattern discovery in editor

### 4.2 Create Hero Pattern (`patterns/hero-home.php`)

**Source:** `HeroHome.tsx`

```php
<?php
/**
 * Title: Hero Home
 * Slug: lsx-design/hero/home
 * Categories: lsx-design, hero
 */
?>
<!-- wp:group {"align":"full","style":{"spacing":{"padding":{"top":"var:preset|spacing|80","bottom":"var:preset|spacing|80"}}},"backgroundColor":"neutral-100"} -->
<section class="wp-block-group alignfull has-neutral-100-background-color has-background">
  <!-- wp:group {"layout":{"type":"constrained","contentSize":"800px"}} -->
  <div class="wp-block-group">
    <!-- wp:heading {"textAlign":"center","level":1,"fontSize":"900"} -->
    <h1 class="has-text-align-center has-900-font-size">Discover Your Next Adventure</h1>
    <!-- /wp:heading -->
    
    <!-- wp:paragraph {"align":"center","fontSize":"400"} -->
    <p class="has-text-align-center has-400-font-size">Explore curated travel experiences...</p>
    <!-- /wp:paragraph -->
    
    <!-- wp:buttons {"layout":{"type":"flex","justifyContent":"center"}} -->
    <div class="wp-block-buttons">
      <!-- wp:button -->
      <div class="wp-block-button"><a class="wp-block-button__link">Explore Destinations</a></div>
      <!-- /wp:button -->
    </div>
    <!-- /wp:buttons -->
  </div>
  <!-- /wp:group -->
</section>
<!-- /wp:group -->
```

**Tasks:**
- [ ] Create `hero-home.php`
- [ ] Use Group block for Section
- [ ] Apply spacing tokens
- [ ] Test in Pattern inserter
- [ ] Verify responsiveness

### 4.3 Create Archive Header Pattern

**Source:** `ArchiveHeader.tsx`

**Tasks:**
- [ ] Create `archive-header.php`
- [ ] Use Query Title block
- [ ] Use Query Pagination (for count)
- [ ] Apply spacing tokens
- [ ] Test with different archive types

### 4.4 Create Card Grid Pattern

**Source:** `CardGrid.tsx`

**Tasks:**
- [ ] Create `card-grid.php`
- [ ] Use Query Loop block
- [ ] Configure Post Template
- [ ] Add Featured Image
- [ ] Add Post Title, Excerpt, Category
- [ ] Apply spacing and layout tokens
- [ ] Test with different content types

### 4.5 Create CTA Section Pattern

**Source:** `CTASection.tsx`

**Tasks:**
- [ ] Create `cta-section.php`
- [ ] Create two variants (default, highlighted)
- [ ] Use Group block for structure
- [ ] Apply spacing tokens
- [ ] Test color variants

### 4.6 Create Pagination Pattern

**Source:** `PaginationNav.tsx`

**Tasks:**
- [ ] Create `pagination.php`
- [ ] Use Query Pagination block
- [ ] Style with tokens
- [ ] Test keyboard navigation
- [ ] Verify ARIA labels

### 4.7 Create Filter Bar Pattern

**Source:** `FilterBar.tsx`

**Tasks:**
- [ ] Create `filter-bar.php`
- [ ] Use Navigation block or custom implementation
- [ ] Style filter chips with tokens
- [ ] Consider JavaScript enhancement for filtering
- [ ] Test accessibility

---

## 📄 Phase 5: Templates

### 5.1 Front Page Template (`templates/front-page.html`)

**Source:** `FrontPageTemplate.tsx`

**Pattern composition:**
1. Template Part: Header
2. Pattern: Hero Home
3. Pattern: Card Grid
4. Pattern: CTA Section
5. Template Part: Footer

```html
<!-- wp:template-part {"slug":"header"} /-->

<!-- wp:pattern {"slug":"lsx-design/hero/home"} /-->

<!-- wp:pattern {"slug":"lsx-design/card-grid"} /-->

<!-- wp:pattern {"slug":"lsx-design/cta-section"} /-->

<!-- wp:template-part {"slug":"footer"} /-->
```

**Tasks:**
- [ ] Create `front-page.html`
- [ ] Insert patterns in order
- [ ] Test pattern composition
- [ ] Verify one H1 per page
- [ ] Test with real content

### 5.2 Archive Template (`templates/archive.html`)

**Source:** `ArchiveTemplate.tsx`

**Tasks:**
- [ ] Create `archive.html`
- [ ] Add Archive Header pattern
- [ ] Add Query Loop for content
- [ ] Add Pagination pattern
- [ ] Test with categories/tags
- [ ] Test empty state

### 5.3 Single Template (`templates/single.html`)

**Source:** `SingleTemplate.tsx`

**Tasks:**
- [ ] Create `single.html`
- [ ] Add breadcrumb navigation
- [ ] Add Post Title, Content blocks
- [ ] Add Related Content pattern
- [ ] Add CTA pattern
- [ ] Test heading hierarchy

---

## ♿ Phase 6: Accessibility

### 6.1 Skip Link Implementation

**In `functions.php`:**

```php
function lsx_design_skip_link() {
    echo '<a class="skip-link screen-reader-text" href="#main-content">' . 
         __( 'Skip to content', 'lsx-design-theme' ) . 
         '</a>';
}
add_action( 'wp_body_open', 'lsx_design_skip_link' );
```

**In CSS:**

```css
.skip-link {
    position: absolute;
    left: -9999px;
}

.skip-link:focus {
    left: 0;
    top: 0;
    z-index: 9999;
    padding: var(--wp--preset--spacing--20) var(--wp--preset--spacing--30);
    background: var(--wp--preset--color--primary);
    color: var(--wp--preset--color--primary-foreground);
}
```

**Tasks:**
- [ ] Add skip link to theme
- [ ] Test keyboard focus
- [ ] Verify screen reader behavior

### 6.2 Focus States

**In `assets/css/theme-enhancements.css`:**

```css
*:focus-visible {
    outline: 2px solid var(--wp--preset--color--accent);
    outline-offset: 2px;
}
```

**Tasks:**
- [ ] Add global focus styles
- [ ] Test all interactive elements
- [ ] Verify keyboard navigation flow

### 6.3 Accessibility Audit

**Tasks:**
- [ ] Test with keyboard only (no mouse)
- [ ] Run WAVE browser extension
- [ ] Run axe DevTools
- [ ] Test with screen reader (NVDA/JAWS)
- [ ] Verify heading hierarchy on all templates
- [ ] Check color contrast ratios
- [ ] Test reduced motion preferences

---

## 🎭 Phase 7: Progressive Enhancements

### 7.1 Back to Top Button

**In `assets/js/back-to-top.js`:**

```javascript
(function() {
    const button = document.createElement('button');
    button.innerHTML = '↑';
    button.className = 'back-to-top';
    button.setAttribute('aria-label', 'Back to top');
    
    button.addEventListener('click', () => {
        window.scrollTo({ top: 0, behavior: 'smooth' });
    });
    
    window.addEventListener('scroll', () => {
        button.classList.toggle('visible', window.scrollY > 300);
    });
    
    document.body.appendChild(button);
})();
```

**Tasks:**
- [ ] Create back-to-top script
- [ ] Enqueue in `functions.php`
- [ ] Style with tokens
- [ ] Test behavior

---

## 🧪 Phase 8: Testing

### 8.1 Content Tolerance Testing

**Tasks:**
- [ ] Test with very long post titles
- [ ] Test with missing featured images
- [ ] Test with no excerpt
- [ ] Test with minimal content
- [ ] Test with maximal content
- [ ] Test empty archive states

### 8.2 Responsive Testing

**Tasks:**
- [ ] Test on mobile (375px)
- [ ] Test on tablet (768px)
- [ ] Test on desktop (1440px)
- [ ] Test on large screens (1920px+)
- [ ] Verify touch targets on mobile

### 8.3 Browser Testing

**Tasks:**
- [ ] Chrome/Edge
- [ ] Firefox
- [ ] Safari (macOS/iOS)
- [ ] Mobile browsers

---

## 📊 Phase 9: Validation

### 9.1 WordPress Validation

**Tasks:**
- [ ] Run Theme Check plugin
- [ ] Validate theme.json
- [ ] Test with WordPress.org requirements
- [ ] Verify no PHP errors
- [ ] Check for deprecated functions

### 9.2 Performance Testing

**Tasks:**
- [ ] Run PageSpeed Insights
- [ ] Optimize images
- [ ] Minimize CSS/JS
- [ ] Test Time to Interactive
- [ ] Test Largest Contentful Paint

---

## 📦 Phase 10: Deployment

### 10.1 Final Checklist

**Tasks:**
- [ ] Update version number in `style.css`
- [ ] Add screenshot.png
- [ ] Create README.txt
- [ ] Document customization options
- [ ] Add license information
- [ ] Create child theme example

### 10.2 Documentation

**Tasks:**
- [ ] Pattern usage guide
- [ ] Token reference
- [ ] Template customization guide
- [ ] Accessibility features list
- [ ] FAQ document

---

## 🔧 Common Issues & Solutions

### Issue: Patterns not appearing in inserter
**Solution:** Clear pattern cache, verify pattern registration in `functions.php`

### Issue: Spacing tokens not working
**Solution:** Check `theme.json` syntax, clear browser cache, verify WordPress 6.0+

### Issue: Colors not matching prototype
**Solution:** Use browser inspector to compare CSS variables, verify theme.json palette

---

## 📚 Reference Files

- **Prototype Components:** `/src/app/components/`
- **Token Reference:** `/TOKEN-REFERENCE.md`
- **Pattern Mapping:** `/PROTOTYPE-MAPPING.md`
- **Guidelines:** `/guidelines/Guidelines.md`

---

## ✅ Sign-Off Criteria

Before considering the WordPress theme complete:

- [ ] All templates match prototype structure
- [ ] All patterns registered and discoverable
- [ ] All tokens defined in theme.json
- [ ] Accessibility audit passed (WCAG 2.1 AA)
- [ ] Content tolerance tests passed
- [ ] Browser compatibility verified
- [ ] Performance benchmarks met
- [ ] Documentation complete

---

**Estimated Timeline:** 2-3 weeks (depending on team size)  
**Last Updated:** December 24, 2024
