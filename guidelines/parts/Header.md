# SiteHeader Template Part

**Component Type:** Template Part  
**WordPress Mapping:** `parts/header.html`  
**Location:** `/src/app/components/parts/SiteHeader.tsx`

---

## Purpose

Global site navigation appearing on all page templates. Provides primary navigation, branding, and optional CTA. Sticky positioned for constant access.

---

## Design System Requirements

### Layout
- **Position:** Sticky top (fixed on scroll)
- **Container:** Use Container component
- **Alignment:** Logo left, navigation right
- **Height:** Auto (based on content padding)

### Typography

**Navigation Links:**
- Font: `Lexend, sans-serif`
- Size: `var(--text-base)` (16px)
- Weight: `var(--font-weight-regular)`
- Color: `var(--foreground)`

**Logo:**
- See Logo component guidelines

### Colors

**Header:**
```tsx
backgroundColor: 'var(--background)'
borderBottom: '1px solid var(--border)'
backdropFilter: 'blur(8px)' // Optional for transparency
```

**Link Hover:**
```tsx
color: 'var(--primary)'
```

### Spacing
- **Vertical Padding:** `py-6` (24px)
- **Nav Items Gap:** `gap-8` (32px)
- **Container Padding:** Per Container component

### Z-Index
- **50** (above content, below modals)

---

## Usage

### Standard Implementation
```tsx
import { SiteHeader } from '../parts/SiteHeader';

export function Template() {
  return (
    <>
      <SkipLink />
      <SiteHeader />
      <main id="main-content">
        {/* Page content */}
      </main>
      <SiteFooter />
    </>
  );
}
```

**Note:** Always placed after SkipLink, before main content.

---

## Required Elements

1. **Logo** (links to homepage)
2. **Primary Navigation** (4-6 items typical)
3. **Optional CTA Button** (e.g., "Book Now")

---

## WordPress Implementation

In WordPress, this is `parts/header.html`:

```html
<!-- wp:group {"align":"full","style":{"position":{"type":"sticky","top":"0px"}},"layout":{"type":"constrained"}} -->
<div class="wp-block-group alignfull" style="position:sticky;top:0;z-index:50">
  
  <!-- wp:group {"layout":{"type":"flex","justifyContent":"space-between"}} -->
  <div class="wp-block-group">
    
    <!-- wp:site-logo /-->
    
    <!-- wp:navigation {"layout":{"type":"flex","orientation":"horizontal"}} /-->
    
  </div>
  <!-- /wp:group -->
  
</div>
<!-- /wp:group -->
```

Included in templates:
```html
<!-- wp:template-part {"slug":"header"} /-->
```

---

## Token Enforcement

✅ **REQUIRED:**
- Lexend font for navigation links
- CSS variables for all colors
- CSS variables for font sizes
- Sticky positioning
- Container component for content
- Semantic `<header>` and `<nav>` elements

❌ **FORBIDDEN:**
- Hard-coded colors
- Hard-coded pixel spacing
- Tailwind font size classes
- Nested navigation (keep flat)
- More than one CTA button

---

## Accessibility

### Semantic HTML
```tsx
<header role="banner" className="sticky top-0 z-50">
  <Container>
    <a href="/" aria-label="LSX Design Home">
      <Logo />
    </a>
    
    <nav role="navigation" aria-label="Primary navigation">
      <ul>
        <li><a href="/destinations">Destinations</a></li>
        {/* More items */}
      </ul>
    </nav>
  </Container>
</header>
```

### Keyboard Navigation
- All links keyboard accessible
- Logical tab order (logo → nav items → CTA)
- Focus states visible

### ARIA Labels
- Logo link has descriptive `aria-label`
- Navigation has `aria-label="Primary navigation"`

### Skip Link
- Skip link appears before header
- Allows bypassing navigation

---

## Examples

### Standard Header
```tsx
export function SiteHeader() {
  const navItems = [
    { label: 'Destinations', href: '#destinations' },
    { label: 'Experiences', href: '#experiences' },
    { label: 'About', href: '#about' },
    { label: 'Contact', href: '#contact' },
  ];

  return (
    <header 
      role="banner"
      className="sticky top-0 z-50"
      style={{
        borderBottom: '1px solid var(--border)',
        backgroundColor: 'var(--background)',
        backdropFilter: 'blur(8px)',
      }}
    >
      <Container>
        <div className="flex items-center justify-between py-6">
          {/* Logo */}
          <a href="/" aria-label="LSX Design Home">
            <Logo />
          </a>

          {/* Navigation */}
          <nav role="navigation" aria-label="Primary navigation">
            <ul className="flex items-center gap-8 m-0 p-0" style={{ listStyle: 'none' }}>
              {navItems.map((item) => (
                <li key={item.href}>
                  <a
                    href={item.href}
                    className="inline-block px-2"
                    style={{
                      fontFamily: 'Lexend, sans-serif',
                      fontSize: 'var(--text-base)',
                      color: 'var(--foreground)',
                      textDecoration: 'none',
                      transition: 'color 0.2s ease'
                    }}
                  >
                    {item.label}
                  </a>
                </li>
              ))}
              <li>
                <Button variant="primary" href="#book">
                  Book Now
                </Button>
              </li>
            </ul>
          </nav>
        </div>
      </Container>
    </header>
  );
}
```

### With Backdrop Blur
```tsx
<header 
  style={{
    backgroundColor: 'rgba(var(--background-rgb), 0.95)',
    backdropFilter: 'blur(8px)',
    borderBottom: '1px solid var(--border)'
  }}
>
  {/* Content */}
</header>
```

---

## Navigation Guidelines

### Link Count
- **Minimum:** 3 items
- **Maximum:** 6 items (excluding CTA)
- **Rationale:** Keep navigation focused and scannable

### Link Order
1. Primary pages (Destinations, Experiences)
2. Supporting pages (About, Blog)
3. Contact/Support
4. CTA button (last)

### Link Labels
- **Clear:** "Destinations" not "Browse"
- **Specific:** "About Us" not "About"
- **Action-oriented CTAs:** "Book Now" not "Booking"

---

## Mobile Behavior

### Responsive Breakpoints

**Mobile (< 768px):**
- Consider hamburger menu (not shown in desktop prototype)
- Stack navigation vertically
- Full-width logo

**Desktop (≥ 768px):**
- Horizontal navigation
- Logo and nav side-by-side

**Implementation Note:** Mobile menu requires JavaScript (hamburger toggle)

---

## Sticky Behavior

### Desktop
```tsx
className="sticky top-0 z-50"
```

**Benefits:**
- Navigation always accessible
- Reduces scrolling to navigate
- Better UX on long pages

### Mobile
- Same sticky behavior
- May hide on scroll down (advanced)
- Show on scroll up (advanced)

---

## Visual States

### Default State
- White/light background
- Subtle bottom border
- Links in foreground color

### Hover State (Links)
```tsx
onMouseEnter={(e) => {
  e.currentTarget.style.color = 'var(--primary)';
}}
onMouseLeave={(e) => {
  e.currentTarget.style.color = 'var(--foreground)';
}}
```

### Active/Current Page
```tsx
// Could add aria-current="page" and style
style={{
  color: 'var(--primary)',
  fontWeight: 'var(--font-weight-medium)'
}}
```

---

## Common Patterns

### Header → Main → Footer
```tsx
<>
  <SkipLink />
  <SiteHeader />
  <main id="main-content">
    {/* Page content */}
  </main>
  <SiteFooter />
</>
```

### Header with Active Link
```tsx
{navItems.map((item) => (
  <a
    href={item.href}
    aria-current={isCurrentPage(item.href) ? 'page' : undefined}
    style={{
      color: isCurrentPage(item.href) 
        ? 'var(--primary)' 
        : 'var(--foreground)'
    }}
  >
    {item.label}
  </a>
))}
```

---

## WordPress Dynamic Navigation

In WordPress, navigation is managed via **Menus**:

```php
// Register navigation menu
register_nav_menus([
  'primary' => __('Primary Navigation', 'lsx-design')
]);

// Display in template
wp_nav_menu([
  'theme_location' => 'primary',
  'container' => 'nav',
  'container_aria_label' => 'Primary navigation'
]);
```

---

## Performance Considerations

### Backdrop Blur
- May impact performance on older devices
- Use sparingly, test on mobile
- Fallback: Solid background color

### Sticky Positioning
- Generally performant (native CSS)
- No JavaScript required
- Better than fixed + scroll listeners

---

## Design System Integration

This component enforces:
1. **Lexend typography** for navigation links
2. **CSS variable colors** throughout
3. **Sticky positioning** for accessibility
4. **Container component** for consistent padding
5. **Logo component** for branding
6. **Button component** for CTA
7. **WordPress template part** pattern
8. **Semantic HTML** (header, nav)
9. **WCAG 2.1 AA** keyboard navigation

---

**Last Updated:** December 24, 2024
