# Logo Component

**Purpose:** Display LSX Design branding consistently across all pages using vector SVG logo files.

**WordPress concept:** Site Logo block

**Location:** `src/app/components/common/Logo.tsx`

---

## Logo Files

The LSX Design logo is available in multiple variants as clean vector SVG files:

- `/public/lsx-logo-light.svg` — Full logo for light backgrounds (two-tone bolt + dark text)
- `/public/lsx-logo-dark.svg` — Full logo for dark backgrounds (two-tone bolt + white text)
- `/public/lsx-icon.svg` — Lightning bolt icon only (two-tone)
- `/public/favicon.svg` — Favicon (white bolt in red circle)

**Design Details:**
- Lightning bolt: Two-tone (#FF3131 primary, #CC3F23 secondary) — sharp geometric facets
- "LSX" text: Inter/Poppins Semibold (600 weight), 16px, letter-spacing 1px
- "Design" text: Inter/Poppins ExtraBold (800 weight), 32px, letter-spacing -0.5px
- Layout: Horizontal lockup with bolt on left, wordmark on right, vertically centered
- Dimensions: 220×70px (full logo), 48×68px (icon only)

**Brand Colors:**
- Icon Primary: #FF3131 (bright red)
- Icon Secondary: #CC3F23 (dark red/orange for depth)
- Light logo text: #111111 (near black)
- Dark logo text: #FFFFFF (white)

---

## When to Use

- Site header (template part)
- Mobile navigation
- Footer (optional, for branding reinforcement)
- Anywhere site identity needs to be shown

**Do not use** for decorative graphics, content images, or partner logos.

---

## Component API

```tsx
interface LogoProps {
  width?: number;                          // Logo width in pixels
  height?: number;                         // Logo height in pixels
  variant?: 'full' | 'compact';           // Logo variant (default: 'full')
  theme?: 'light' | 'dark' | 'auto';      // Theme variant (default: 'auto')
  className?: string;                      // Additional CSS classes
}
```

**Default Dimensions:**
- Full logo: 220×70px
- Compact (icon only): 48×68px

---

## Basic Usage

```tsx
import { Logo } from '../common/Logo';

// Default (full logo, light theme)
<Logo />

// Full logo for dark backgrounds
<Logo theme="dark" />

// Icon only (compact variant)
<Logo variant="compact" />

// Custom size (maintains aspect ratio)
<Logo variant="full" theme="light" width={150} />

// As clickable link (recommended)
<a href="/" aria-label="LSX Design Home">
  <Logo theme="light" />
</a>
```

---

## Logo Variants

### Full Logo — Light Theme
**Use on:** White backgrounds, light backgrounds  
**Text color:** #111111 (near black)  
**Bolt colors:** #FF3131 (primary), #CC3F23 (secondary)  
**File:** `/public/lsx-logo-light.svg`

```tsx
<Logo variant="full" theme="light" />
```

### Full Logo — Dark Theme
**Use on:** Dark backgrounds, footer, hero sections  
**Text color:** #FFFFFF (white)  
**Bolt colors:** #FF3131 (primary), #CC3F23 (secondary)  
**File:** `/public/lsx-logo-dark.svg`

```tsx
<Section style={{ backgroundColor: 'var(--card)' }}>
  <Logo variant="full" theme="dark" />
</Section>
```

### Icon Only
**Use on:** Mobile navigation, favicons, social media  
**File:** `/public/lsx-icon.svg`  
**Dimensions:** 48×68px

```tsx
<Logo variant="compact" width={48} height={68} />
```

---

## WordPress Mapping

In WordPress, the Logo component becomes the **Site Logo block**:

```html
<!-- wp:site-logo {"width":120} /-->
```

The actual logo image is managed through:
- **Customizer:** Appearance → Customize → Site Identity → Logo
- **Settings:** Settings → General → Site Icon

---

## Accessibility

### Required Attributes

When wrapping Logo in a link:

```tsx
// ✅ CORRECT: Logo with accessible link
<a 
  href="/" 
  aria-label="LSX Design Home"
  style={{ textDecoration: 'none' }}
>
  <Logo />
</a>

// ❌ WRONG: No aria-label
<a href="/">
  <Logo />
</a>
```

### Landmark Context

The logo should be within the site header landmark:

```tsx
<header role="banner">
  <Container>
    <nav>
      <a href="/" aria-label="LSX Design Home">
        <Logo />
      </a>
      {/* Navigation items */}
    </nav>
  </Container>
</header>
```

---

## Responsive Behavior

### Desktop
```tsx
// Full-size logo
<Logo width={120} height={40} />
```

### Mobile (optional smaller size)
```tsx
// Smaller logo on mobile
<div className="mobile-logo">
  <Logo width={100} height={34} />
</div>
```

**Recommendation:** Keep logo size consistent for brand recognition. Only reduce if space is extremely limited.

---

## Common Patterns

### Site Header

```tsx
<header 
  role="banner"
  style={{
    borderBottom: '1px solid var(--border)',
    backgroundColor: 'var(--background)'
  }}
>
  <Container>
    <div 
      className="flex items-center justify-between py-6"
    >
      {/* Logo */}
      <a href="/" aria-label="LSX Design Home">
        <Logo />
      </a>

      {/* Navigation */}
      <nav aria-label="Primary navigation">
        {/* Nav items */}
      </nav>
    </div>
  </Container>
</header>
```

### Footer (Optional)

```tsx
<footer 
  className="bg-card py-12"
  style={{
    color: 'var(--card-foreground)'
  }}
>
  <Container>
    {/* Logo in footer */}
    <Logo />
    
    {/* Footer content */}
  </Container>
</footer>
```

---

## Styling Constraints

### Token-Based Spacing

Logo should use Tailwind spacing classes when combined with other elements:

```tsx
// ✅ CORRECT: Tailwind spacing
<div className="flex items-center gap-4">
  <Logo />
  <span style={{
    fontFamily: 'Lexend, sans-serif',
    fontSize: 'var(--text-base)'
  }}>
    LSX Design
  </span>
</div>

// ❌ WRONG: Hard-coded spacing
<div style={{ display: 'flex', gap: '16px' }}>
  <Logo />
</div>
```

### Color Inheritance

The Logo component uses `--primary` for its background:

```tsx
// Logo automatically adapts to context
<div style={{ 
  backgroundColor: 'var(--primary)' 
}}>
  <Logo /> {/* Will be visible on primary background */}
</div>
```

---

## Common Mistakes

### ❌ DON'T

```tsx
// Logo without accessible link
<Logo />

// Hard-coded dimensions in layout
<div style={{ width: '120px' }}>
  <Logo />
</div>

// Logo used for content images
<article>
  <Logo /> {/* Logo is for site identity, not content */}
  <h2>Article Title</h2>
</article>
```

### ✅ DO

```tsx
// Logo with accessible link
<a href="/" aria-label="LSX Design Home">
  <Logo />
</a>

// Logo in proper header context
<header role="banner">
  <a href="/" aria-label="LSX Design Home">
    <Logo />
  </a>
</header>

// Logo with token-based spacing
<div style={{ 
  display: 'flex',
  gap: 'var(--wp--preset--spacing--20)' 
}}>
  <Logo />
</div>
```

---

## WordPress Implementation

### In theme.json

```json
{
  "settings": {
    "layout": {
      "contentSize": "1280px"
    },
    "custom": {
      "logo": {
        "width": "120px",
        "height": "40px"
      }
    }
  }
}
```

### In template part (parts/header.html)

```html
<!-- wp:group {"layout":{"type":"constrained"}} -->
<header>
  <!-- wp:group {"style":{"spacing":{"padding":{"top":"var:preset|spacing|30","bottom":"var:preset|spacing|30"}}}} -->
  <div class="wp-block-group">
    <!-- wp:site-logo {"width":120} /-->
    
    <!-- wp:navigation /-->
  </div>
  <!-- /wp:group -->
</header>
<!-- /wp:group -->
```

---

## Testing Checklist

- [ ] Logo is wrapped in a link to homepage
- [ ] Link has `aria-label="Site Name Home"`
- [ ] Logo is within `<header role="banner">`
- [ ] Logo is appropriately sized (not too large/small)
- [ ] Logo maintains aspect ratio
- [ ] Logo is keyboard accessible
- [ ] Logo has sufficient contrast against background

---

## Related Components

- **SiteHeader** — Uses Logo in header template part
- **SiteFooter** — May optionally use Logo for branding

---

## Related Documentation

- [../overview-components.md](../overview-components.md) — Component system overview
- [../../PROTOTYPE-MAPPING.md](../../PROTOTYPE-MAPPING.md) — WordPress mapping

---

**Last Updated:** December 24, 2024