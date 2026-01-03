# SiteHeader Component

**File:** `/src/app/components/parts/SiteHeader.tsx`  
**WordPress Mapping:** Template part (`parts/header.html`)  
**Category:** Template Parts

---

## Purpose

Global site header with logo, primary navigation, and utility actions. Appears on every page as part of the site chrome.

---

## WordPress Context

In WordPress FSE, the header is a **template part** that:
- Lives in `parts/header.html`
- Is managed separately from page content
- Can be edited in the Site Editor (Appearance → Editor → Template Parts)
- Appears consistently across all templates
- Can be "sticky" using theme.json position settings

---

## Design System Requirements

### Typography
- **Navigation links:** `fontSize: 'var(--text-base)'`, `fontWeight: 500`, `fontFamily: 'Lexend, sans-serif'`
- **Mobile menu:** Same as navigation links

### Colors
- **Background:** `var(--background)` or `var(--card)`
- **Text:** `var(--foreground)`
- **Link hover:** `var(--primary)`
- **Border:** `var(--border)` (bottom border separator)
- **Active link:** `var(--primary)` with optional underline

### Spacing
- **Container padding:** `className="py-4 px-4"`
- **Nav link gap:** `gap-6` (desktop), `gap-4` (mobile)
- **Logo margin:** `mr-8` (separation from nav)

### Layout
- **Mobile:** Hamburger menu with drawer/overlay
- **Desktop:** Horizontal navigation bar
- **Sticky behavior:** Optional, configured in theme.json

---

## Component Structure

```tsx
<header style={{ 
  backgroundColor: 'var(--background)', 
  borderBottom: '1px solid var(--border)' 
}}>
  <Container>
    <nav className="flex items-center justify-between py-4">
      {/* Logo */}
      <Logo />
      
      {/* Desktop Navigation */}
      <ul className="hidden md:flex items-center gap-6">
        <li>
          <a 
            href="#" 
            style={{ 
              fontSize: 'var(--text-base)', 
              fontWeight: 500,
              fontFamily: 'Lexend, sans-serif'
            }}
          >
            Link
          </a>
        </li>
      </ul>
      
      {/* Mobile Menu Button */}
      <button 
        className="md:hidden"
        aria-label="Toggle menu"
        aria-expanded={isMenuOpen}
      >
        <Menu />
      </button>
    </nav>
  </Container>
</header>
```

---

## Props

```tsx
interface SiteHeaderProps {
  // Optional: Override default menu items
  menuItems?: Array<{
    label: string;
    href: string;
    isActive?: boolean;
  }>;
  
  // Optional: Show/hide utility actions
  showSearch?: boolean;
  showUserMenu?: boolean;
}
```

---

## Usage Example

```tsx
import { SiteHeader } from './components/parts/SiteHeader';

// Default usage (no props)
<SiteHeader />

// Custom menu items
<SiteHeader 
  menuItems={[
    { label: 'Destinations', href: '/destinations' },
    { label: 'Experiences', href: '/experiences' },
    { label: 'About', href: '/about' },
    { label: 'Contact', href: '/contact' }
  ]}
/>
```

---

## WordPress Implementation Notes

### In `parts/header.html`

```html
<!-- wp:group {"style":{"spacing":{"padding":{"top":"var:preset|spacing|30","bottom":"var:preset|spacing|30"}}},"backgroundColor":"background","layout":{"type":"constrained"}} -->
<div class="wp-block-group has-background-background-color has-background">
  
  <!-- wp:group {"layout":{"type":"flex","justifyContent":"space-between"}} -->
  <div class="wp-block-group">
    
    <!-- wp:site-logo {"width":150} /-->
    
    <!-- wp:navigation {"layout":{"type":"flex","setCascadingProperties":true}} /-->
    
  </div>
  <!-- /wp:group -->
  
</div>
<!-- /wp:group -->
```

### Navigation Menu Structure

WordPress uses the **Navigation block** for menus:
- Menu items managed in Appearance → Menus
- Supports nested submenus
- Responsive behavior built-in
- Mobile overlay/drawer automatically handled

---

## Navigation Links

Typical primary navigation includes:

### Main Links
- **Destinations** → Archive page for destinations
- **Experiences** → Archive page for travel experiences
- **About** → About page
- **Blog** → Blog index
- **Contact** → Contact page

### Utility Actions (Optional)
- **Search** → Search modal/overlay
- **User Account** → Login/profile dropdown
- **Language Switcher** → Multi-language selector
- **Booking** → Call-to-action button

---

## Accessibility Requirements

- [ ] Header must use `<header>` landmark element
- [ ] Navigation must use `<nav>` landmark with `aria-label`
- [ ] Mobile menu button must have `aria-label` and `aria-expanded`
- [ ] All links must have descriptive text
- [ ] Focus states visible on all interactive elements
- [ ] Keyboard navigation must work (Tab, Enter, Escape)
- [ ] Skip link must appear before header content
- [ ] Active page indicator with `aria-current="page"`

---

## Mobile Menu Behavior

### Requirements
- Hamburger icon (☰) shows on screens < 768px
- Menu opens as slide-in drawer or full-screen overlay
- Close button (×) visible when menu is open
- Body scroll locked when menu is open
- Escape key closes the menu
- Clicking outside overlay closes the menu

### Implementation Pattern

```tsx
const [isMenuOpen, setIsMenuOpen] = useState(false);

// Lock body scroll when menu is open
useEffect(() => {
  if (isMenuOpen) {
    document.body.style.overflow = 'hidden';
  } else {
    document.body.style.overflow = '';
  }
  return () => {
    document.body.style.overflow = '';
  };
}, [isMenuOpen]);
```

---

## Sticky Header (Optional)

To make the header sticky:

### CSS Approach
```tsx
<header style={{ 
  position: 'sticky',
  top: 0,
  zIndex: 50,
  backgroundColor: 'var(--background)',
  borderBottom: '1px solid var(--border)'
}}>
```

### WordPress theme.json
```json
{
  "styles": {
    "blocks": {
      "core/template-part": {
        "variations": {
          "header": {
            "position": "sticky",
            "top": "0",
            "zIndex": "50"
          }
        }
      }
    }
  }
}
```

---

## Touch Target Requirements

- [ ] All navigation links must be 44×44px minimum
- [ ] Mobile menu button must be 44×44px minimum
- [ ] Link padding: `py-2 px-3` minimum
- [ ] Adequate spacing between navigation items

---

## Responsive Behavior

### Mobile (< 768px)
- Logo on left, hamburger on right
- Navigation hidden, shown in drawer when toggled
- Full-width layout
- Touch-friendly tap targets

### Desktop (≥ 768px)
- Logo on left, navigation on right
- Horizontal navigation visible
- Hover states active
- Dropdown submenus (if applicable)

---

## Token Reference

```tsx
// Typography
fontSize: 'var(--text-base)'       // 16px — nav links
fontWeight: 500                    // Medium weight
fontFamily: 'Lexend, sans-serif'   // Primary font

// Colors
backgroundColor: 'var(--background)' // Header background
color: 'var(--foreground)'          // Text color
color: 'var(--primary)'             // Active/hover state
borderColor: 'var(--border)'        // Bottom border

// Spacing (Tailwind classes)
className="py-4 px-4"               // Container padding
gap-6                               // Desktop nav gap
gap-4                               // Mobile nav gap
```

---

## Related Components

- **[SiteFooter](./SiteFooter.md)** — Global footer navigation
- **[Logo](../components/Logo.md)** — Site branding
- **[Container](../components/Container.md)** — Max-width wrapper
- **[Button](../components/Button.md)** — CTA buttons in header
- **[SkipLink](../components/SkipLink.md)** — Accessibility utility

---

## WordPress Block Equivalents

- Header container → **Group block** with background
- Navigation menu → **Navigation block**
- Logo → **Site Logo block**
- Buttons → **Buttons block** with button blocks inside

---

## State Management

The header may need to track:
- Mobile menu open/closed state
- Active page for navigation highlighting
- Scroll position (if sticky with show/hide behavior)
- User authentication state (if login/logout in header)

---

## Performance Considerations

- Use `position: sticky` for sticky behavior (no JS required)
- Debounce scroll events if implementing scroll-based behavior
- Lazy load mobile menu content (don't render until opened)
- Use CSS transforms for smooth animations

---

## Notes

- Header should be **identical across all templates**
- Navigation items should reflect site information architecture
- Keep navigation shallow (avoid deep nested menus)
- Consider mega-menus for large sites with many categories
- Mobile menu should match desktop navigation structure

---

**Last Updated:** December 24, 2024  
**Component Status:** ✅ Implemented  
**Documentation Status:** ✅ Complete
