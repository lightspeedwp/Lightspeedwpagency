# SiteFooter Component

**File:** `/src/app/components/parts/SiteFooter.tsx`  
**WordPress Mapping:** Template part (`parts/footer.html`)  
**Category:** Template Parts

---

## Purpose

Global site footer with navigation links, copyright information, and branding. Appears on every page as part of the site chrome.

---

## WordPress Context

In WordPress FSE, the footer is a **template part** that:
- Lives in `parts/footer.html`
- Is managed separately from page content
- Can be edited in the Site Editor (Appearance → Editor → Template Parts)
- Appears consistently across all templates

---

## Design System Requirements

### Typography
- **Footer heading:** `fontSize: 'var(--text-small)'`, `fontWeight: 600`, `fontFamily: 'Lexend, sans-serif'`
- **Footer links:** `fontSize: 'var(--text-small)'`, `fontWeight: 400`, `fontFamily: 'Manrope, sans-serif'`
- **Copyright text:** `fontSize: 'var(--text-small)'`, `fontFamily: 'Manrope, sans-serif'`

### Colors
- **Background:** `var(--card)` or `var(--muted)`
- **Text:** `var(--foreground)`
- **Link hover:** `var(--primary)`
- **Border:** `var(--border)` (top border separator)

### Spacing
- **Container padding:** `className="py-12 px-4"`
- **Column gap:** `gap-8` (mobile), `md:gap-12` (desktop)
- **Link list gap:** `gap-2`
- **Section margins:** `mt-8` between footer sections

### Layout
- **Mobile:** Single column, stacked
- **Tablet:** 2 columns for link groups
- **Desktop:** 4 columns (Destinations, Experiences, Company, Legal)

---

## Component Structure

```tsx
<footer style={{ backgroundColor: 'var(--card)', borderTop: '1px solid var(--border)' }}>
  <Container className="py-12">
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 md:gap-12">
      {/* Link Columns */}
      <div>
        <h3 style={{ fontSize: 'var(--text-small)', fontWeight: 600 }}>
          Column Title
        </h3>
        <ul className="flex flex-col gap-2">
          <li><a href="#">Link</a></li>
        </ul>
      </div>
    </div>
    
    {/* Bottom Section */}
    <div className="mt-8 pt-8 border-t" style={{ borderColor: 'var(--border)' }}>
      <div className="flex flex-col md:flex-row justify-between items-center gap-4">
        <Logo />
        <p style={{ fontSize: 'var(--text-small)' }}>
          © {currentYear} LSX Design. All rights reserved.
        </p>
      </div>
    </div>
  </Container>
</footer>
```

---

## Props

```tsx
interface SiteFooterProps {
  // No props — footer is static global chrome
}
```

The footer typically doesn't accept props because it's global site chrome with fixed structure.

---

## Usage Example

```tsx
import { SiteFooter } from './components/parts/SiteFooter';

export default function App() {
  return (
    <>
      <SiteHeader />
      
      <main>
        {/* Page content */}
      </main>
      
      <SiteFooter />
    </>
  );
}
```

---

## WordPress Implementation Notes

### In `parts/footer.html`

```html
<!-- wp:group {"style":{"spacing":{"padding":{"top":"var:preset|spacing|50","bottom":"var:preset|spacing|50"}}},"backgroundColor":"card","layout":{"type":"constrained"}} -->
<div class="wp-block-group has-card-background-color has-background">
  
  <!-- wp:columns {"style":{"spacing":{"blockGap":"var:preset|spacing|50"}}} -->
  <div class="wp-block-columns">
    
    <!-- wp:column -->
    <div class="wp-block-column">
      <!-- wp:heading {"level":6} -->
      <h6>Destinations</h6>
      <!-- /wp:heading -->
      
      <!-- wp:list -->
      <ul>
        <li><a href="#">Africa</a></li>
        <li><a href="#">Asia</a></li>
        <!-- more links -->
      </ul>
      <!-- /wp:list -->
    </div>
    <!-- /wp:column -->
    
  </div>
  <!-- /wp:columns -->
  
  <!-- wp:separator {"style":{"spacing":{"margin":{"top":"var:preset|spacing|50","bottom":"var:preset|spacing|50"}}}} -->
  <hr class="wp-block-separator"/>
  <!-- /wp:separator -->
  
  <!-- wp:group {"layout":{"type":"flex","justifyContent":"space-between"}} -->
  <div class="wp-block-group">
    <!-- wp:site-logo /-->
    
    <!-- wp:paragraph {"fontSize":"small"} -->
    <p class="has-small-font-size">© 2024 LSX Design. All rights reserved.</p>
    <!-- /wp:paragraph -->
  </div>
  <!-- /wp:group -->
  
</div>
<!-- /wp:group -->
```

---

## Link Structure

The footer typically includes these link categories:

### Destinations
- Africa
- Asia
- Europe
- Americas
- Oceania
- Antarctica

### Experiences
- Adventure Travel
- Cultural Tours
- Wildlife Safaris
- Beach Holidays
- City Breaks
- Luxury Travel

### Company
- About Us
- Our Team
- Careers
- Contact
- Press

### Legal
- Privacy Policy
- Terms of Service
- Cookie Policy
- Accessibility

---

## Accessibility Requirements

- [ ] Footer must use `<footer>` landmark element
- [ ] Link lists must use semantic `<ul>` and `<li>` elements
- [ ] Footer headings must use proper heading levels (typically H6)
- [ ] All links must have descriptive text (no "click here")
- [ ] Focus states must be visible on all links
- [ ] Copyright year should be dynamic (current year)
- [ ] Logo must have alt text for screen readers

---

## Touch Target Requirements

- [ ] All footer links must be 44×44px minimum touch target
- [ ] Link padding: `py-2` minimum for comfortable tapping
- [ ] Adequate spacing between link columns on mobile

---

## Responsive Behavior

### Mobile (< 768px)
- Single column layout
- Full-width sections
- Stacked logo and copyright

### Tablet (768px - 1023px)
- 2-column grid for link groups
- Logo and copyright side-by-side

### Desktop (≥ 1024px)
- 4-column grid for link groups
- Horizontal layout maintained

---

## Token Reference

```tsx
// Typography
fontSize: 'var(--text-small)'      // 14px — footer text
fontFamily: 'Lexend, sans-serif'   // Headings
fontFamily: 'Manrope, sans-serif'  // Body text and links

// Colors
backgroundColor: 'var(--card)'     // Footer background
color: 'var(--foreground)'         // Text color
color: 'var(--primary)'            // Link hover
borderColor: 'var(--border)'       // Separators

// Spacing (Tailwind classes)
className="py-12 px-4"             // Container padding
gap-8 md:gap-12                    // Column gaps
mt-8 pt-8                          // Section spacing
```

---

## Related Components

- **[SiteHeader](./SiteHeader.md)** — Global header navigation
- **[Logo](../components/Logo.md)** — Site branding
- **[Container](../components/Container.md)** — Max-width wrapper
- **[Button](../components/Button.md)** — CTA buttons in footer

---

## WordPress Block Equivalents

- Footer container → **Group block** with card background
- Link columns → **Columns block** with 4 columns
- Link lists → **List block** with custom styling
- Copyright section → **Group block** with flex layout
- Logo → **Site Logo block**
- Copyright text → **Paragraph block** with small font size

---

## Notes

- Footer is **static** — no dynamic content loading
- Link structure should match site navigation hierarchy
- Social media links can be added as a fifth column if needed
- Newsletter signup can be added above link columns
- Footer should be **identical across all templates**

---

**Last Updated:** December 24, 2024  
**Component Status:** ✅ Implemented  
**Documentation Status:** ✅ Complete
