# Footer Patterns

**Category:** Layout Patterns  
**WordPress Concept:** Template parts (`parts/footer.html`)  
**Component Location:** `/src/app/components/parts/SiteFooter.tsx`

---

## Overview

The LSX Design system provides **two interchangeable footer patterns** that can be used across all page templates. Both patterns use design system tokens and follow WordPress block theme architecture.

---

## Pattern Variants

### 1. Default Footer Pattern

**Slug:** `lsx-design/layout/footer-default`  
**Usage:** Standard footer with link columns

#### Features
- Logo with tagline
- 3 link columns (destinations, company, support)
- Copyright notice
- Legal links (Privacy Policy, Cookie Policy)
- Dark background (`var(--sidebar)`)

#### Structure
```tsx
<SiteFooter variant="default" />
// or simply:
<SiteFooter />
```

#### Visual Hierarchy
```
┌───────────────────────────────────────────────────────┐
│ [Logo]        [Destinations]  [Company]  [Support]   │
│ Tagline       Link            Link       Link        │
│               Link            Link       Link        │
│               Link            Link       Link        │
│               Link            Link       Link        │
│                                                       │
│ ─────────────────────────────────────────────────────│
│ © 2024 LSX Design         Privacy Policy | Cookies   │
└───────────────────────────────────────────────────────┘
```

#### Design Tokens Used
- **Background:** `var(--sidebar)` (dark)
- **Foreground:** `var(--sidebar-foreground)` (light)
- **Border:** `var(--sidebar-border)`
- **Accent:** `var(--sidebar-accent)` for hover
- **Font (body):** Lexend
- **Font (small):** Manrope
- **Spacing:** Tailwind classes (`py-16`, `gap-12`)

---

### 2. Newsletter Footer Pattern

**Slug:** `lsx-design/layout/footer-newsletter`  
**Usage:** Marketing footer with newsletter subscription

#### Features
- Logo
- 3 link columns (destinations, experiences, company)
- Newsletter subscription form
- Social media icons (Facebook, Instagram, Twitter, LinkedIn, YouTube)
- Copyright + legal links
- Light background (`var(--background)`)

#### Structure
```tsx
<SiteFooter variant="newsletter" />
```

#### Visual Hierarchy
```
┌──────────────────────────────────────────────────────────────────┐
│ [Logo]  [Destinations]  [Experiences]  [Company]  | [Newsletter] │
│         Link            Link            Link       | Subscribe    │
│         Link            Link            Link       | Description  │
│         Link            Link            Link       |              │
│         Link            Link            Link       | [Email] [CTA]│
│                                                    | Privacy note │
│                                                                   │
│ ──────────────────────────────────────────────────────────────── │
│ © 2024 LightSpeed  Privacy | Terms | Cookies  [Social Icons]    │
└──────────────────────────────────────────────────────────────────┘
```

#### Design Tokens Used
- **Background:** `var(--background)` (white)
- **Foreground:** `var(--foreground)` (dark)
- **Border:** `var(--border)`
- **Primary:** `var(--primary)` for hover
- **Input:** `var(--input)` for email field
- **Font:** Lexend (all text)
- **Spacing:** Tailwind classes (`py-16`, `gap-16`)
- **Radius:** `var(--radius)` for inputs/buttons

---

## Implementation

### In Template Parts

```tsx
// Default footer (used by most templates)
import { SiteFooter } from '../parts/SiteFooter';

export function FrontPageTemplate() {
  return (
    <>
      {/* Page content */}
      <SiteFooter />
    </>
  );
}
```

```tsx
// Newsletter footer (for marketing pages)
import { SiteFooter } from '../parts/SiteFooter';

export function MarketingTemplate() {
  return (
    <>
      {/* Page content */}
      <SiteFooter variant="newsletter" />
    </>
  );
}
```

---

## Link Column Structure

### Default Footer
```tsx
const footerLinks = {
  destinations: [
    { label: 'Africa', href: '#africa' },
    { label: 'Asia', href: '#asia' },
    { label: 'Europe', href: '#europe' },
    { label: 'Americas', href: '#americas' },
  ],
  company: [
    { label: 'About Us', href: '#about' },
    { label: 'Our Team', href: '#team' },
    { label: 'Careers', href: '#careers' },
    { label: 'Press', href: '#press' },
  ],
  support: [
    { label: 'Contact', href: '#contact' },
    { label: 'FAQs', href: '#faqs' },
    { label: 'Travel Insurance', href: '#insurance' },
    { label: 'Terms & Conditions', href: '#terms' },
  ],
};
```

### Newsletter Footer
```tsx
const columns = [
  {
    title: 'Destinations',
    links: [
      { label: 'Africa', href: '#africa' },
      { label: 'Asia', href: '#asia' },
      { label: 'Europe', href: '#europe' },
      { label: 'Americas', href: '#americas' },
      { label: 'Oceania', href: '#oceania' },
    ]
  },
  {
    title: 'Experiences',
    links: [
      { label: 'Wildlife Safaris', href: '#safaris' },
      { label: 'Cultural Tours', href: '#culture' },
      { label: 'Adventure Travel', href: '#adventure' },
      { label: 'Luxury Escapes', href: '#luxury' },
      { label: 'Group Tours', href: '#groups' },
    ]
  },
  {
    title: 'Company',
    links: [
      { label: 'About Us', href: '#about' },
      { label: 'Our Team', href: '#team' },
      { label: 'Careers', href: '#careers' },
      { label: 'Press', href: '#press' },
      { label: 'Contact', href: '#contact' },
    ]
  },
];
```

---

## Social Media Icons

### Newsletter Footer Only

Uses **lucide-react** icons:
- Facebook
- Instagram
- Twitter
- LinkedIn
- YouTube

```tsx
const socialLinks = [
  { icon: 'facebook', href: '#facebook', label: 'Facebook', Icon: Facebook },
  { icon: 'instagram', href: '#instagram', label: 'Instagram', Icon: Instagram },
  { icon: 'twitter', href: '#twitter', label: 'Twitter', Icon: Twitter },
  { icon: 'linkedin', href: '#linkedin', label: 'LinkedIn', Icon: Linkedin },
  { icon: 'youtube', href: '#youtube', label: 'YouTube', Icon: Youtube },
];
```

**Visual Style:**
- Circular background (`border-radius: 50%`)
- Icon color: `var(--background)` (white)
- Background: `var(--foreground)` (dark)
- Hover: `var(--primary)` + scale(1.1)
- Size: 32×32px

---

## Newsletter Form

### Newsletter Footer Only

#### Form Structure
```tsx
<form onSubmit={handleSubmit}>
  <div className="flex gap-2 mb-4">
    <input
      type="email"
      placeholder="Enter your email"
      aria-label="Email address"
      required
    />
    <Button variant="secondary" type="submit">
      Sign Up
    </Button>
  </div>
  <p>Privacy Policy notice</p>
</form>
```

#### Design Tokens
- **Input background:** `var(--input)`
- **Input border:** `var(--border)`
- **Input focus:** `var(--primary)` + `var(--ring)`
- **Button:** Secondary variant (`var(--secondary)`)
- **Font:** Lexend (base for input, small for notice)

---

## Design System Compliance

### Typography

#### Default Footer
- **Logo tagline:** Lexend, `var(--text-base)`
- **Column headings:** Lexend, `var(--text-h4)`, medium weight
- **Links:** Lexend, `var(--text-base)`
- **Copyright:** Manrope, `var(--text-small)`
- **Legal links:** Manrope, `var(--text-small)`

#### Newsletter Footer
- **Column headings:** Lexend, `var(--text-base)`, medium weight
- **Links:** Lexend, `var(--text-small)`
- **Newsletter heading:** Lexend, `var(--text-base)`, medium weight
- **Newsletter description:** Lexend, `var(--text-base)`
- **Input placeholder:** Lexend, `var(--text-base)`
- **Privacy notice:** Lexend, `var(--text-small)`
- **Copyright:** Lexend, `var(--text-small)`

### Colors

#### Default Footer
- **Background:** `var(--sidebar)` (dark gray/blue)
- **Text:** `var(--sidebar-foreground)` (light)
- **Hover:** `var(--sidebar-accent)` (accent color)
- **Border:** `var(--sidebar-border)`
- **Logo:** Dark theme variant

#### Newsletter Footer
- **Background:** `var(--background)` (white)
- **Text:** `var(--foreground)` (near black)
- **Hover:** `var(--primary)` (blue)
- **Border:** `var(--border)` (gray)
- **Social icons:** `var(--foreground)` bg, `var(--background)` icon
- **Logo:** Light theme variant

### Spacing

#### Default Footer
- **Outer padding:** `py-16` (64px)
- **Column gap:** `gap-12` (48px)
- **Link spacing:** `space-y-3` (12px)
- **Top border padding:** `pt-8` (32px)

#### Newsletter Footer
- **Outer padding:** `py-16` (64px)
- **Section gap:** `gap-16` (64px) on desktop, `gap-32` (128px) large
- **Column gap:** `gap-8` (32px) on mobile, `gap-10` (40px) on desktop
- **Link spacing:** `gap-1` (4px)
- **Bottom border padding:** `pt-8` (32px)

---

## Accessibility

### Default Footer
- [x] `role="contentinfo"` on footer
- [x] Semantic HTML (`<footer>`, `<h3>`, `<ul>`, `<li>`, `<a>`)
- [x] Logo uses dark theme for contrast
- [x] All links are keyboard accessible
- [x] Hover states for visual feedback
- [x] Color contrast meets WCAG AA (light text on dark bg)
- [x] Link labels are descriptive

### Newsletter Footer
- [x] `role="contentinfo"` on footer
- [x] Form has `aria-label` on email input
- [x] Social links have `aria-label` (e.g., "Facebook")
- [x] Social icons group has `role="group"` and `aria-label`
- [x] Privacy Policy link in notice is underlined
- [x] All interactive elements keyboard accessible
- [x] Focus states on form input (ring outline)
- [x] Color contrast meets WCAG AA

---

## WordPress Mapping

### Default Footer → `parts/footer.html`

```html
<!-- wp:group {"style":{"spacing":{"padding":{"top":"4rem","bottom":"4rem"}}},"backgroundColor":"sidebar"} -->
<div class="wp-block-group has-sidebar-background-color">
  
  <!-- wp:columns {"style":{"spacing":{"blockGap":"3rem"}}} -->
  <div class="wp-block-columns">
    
    <!-- wp:column -->
    <div class="wp-block-column">
      <!-- wp:site-logo /-->
      <!-- wp:paragraph {"fontSize":"small","textColor":"sidebar-foreground"} -->
      <p class="has-sidebar-foreground-color has-small-font-size">
        Crafting unforgettable travel experiences across the globe.
      </p>
      <!-- /wp:paragraph -->
    </div>
    <!-- /wp:column -->
    
    <!-- wp:column -->
    <div class="wp-block-column">
      <!-- wp:heading {"level":3,"textColor":"sidebar-foreground"} -->
      <h3 class="has-sidebar-foreground-color">Destinations</h3>
      <!-- /wp:heading -->
      
      <!-- wp:navigation {"orientation":"vertical"} -->
      <nav>
        <!-- wp:navigation-link {"label":"Africa","url":"#africa"} /-->
        <!-- wp:navigation-link {"label":"Asia","url":"#asia"} /-->
        <!-- Add more links -->
      </nav>
      <!-- /wp:navigation -->
    </div>
    <!-- /wp:column -->
    
    <!-- Repeat for other columns -->
  </div>
  <!-- /wp:columns -->
  
  <!-- wp:separator /-->
  
  <!-- wp:paragraph {"fontSize":"small","textColor":"sidebar-foreground"} -->
  <p>© 2024 LSX Design. All rights reserved.</p>
  <!-- /wp:paragraph -->
  
</div>
<!-- /wp:group -->
```

### Newsletter Footer → `parts/footer-newsletter.html`

```html
<!-- wp:group {"style":{"spacing":{"padding":{"top":"4rem","bottom":"4rem"}}}} -->
<div class="wp-block-group">
  
  <!-- wp:columns {"style":{"spacing":{"blockGap":"4rem"}}} -->
  <div class="wp-block-columns">
    
    <!-- Link columns (Logo + 3 columns) -->
    
    <!-- wp:column {"width":"500px"} -->
    <div class="wp-block-column" style="flex-basis:500px">
      <!-- wp:heading {"level":3} -->
      <h3>Subscribe</h3>
      <!-- /wp:heading -->
      
      <!-- wp:paragraph -->
      <p>Join our newsletter to stay up to date on features and releases.</p>
      <!-- /wp:paragraph -->
      
      <!-- wp:buttons -->
      <div class="wp-block-buttons">
        <!-- wp:button {"className":"is-style-secondary"} -->
        <div class="wp-block-button is-style-secondary">
          <a class="wp-block-button__link">Sign Up</a>
        </div>
        <!-- /wp:button -->
      </div>
      <!-- /wp:buttons -->
    </div>
    <!-- /wp:column -->
    
  </div>
  <!-- /wp:columns -->
  
  <!-- wp:separator /-->
  
  <!-- wp:group {"layout":{"type":"flex","justifyContent":"space-between"}} -->
  <div class="wp-block-group">
    <!-- Copyright & Legal -->
    <!-- Social Icons -->
  </div>
  <!-- /wp:group -->
  
</div>
<!-- /wp:group -->
```

---

## Responsive Behavior

### Mobile (< 768px)
- **Default:** Columns stack vertically (1 column)
- **Newsletter:** Columns stack, newsletter section full-width

### Tablet (768px - 1024px)
- **Default:** 2 columns
- **Newsletter:** Link columns stack, newsletter stays aside

### Desktop (> 1024px)
- **Default:** 4 columns (logo + 3 link columns)
- **Newsletter:** Horizontal layout with newsletter on right

---

## Usage Guidelines

### When to Use Default Footer
- ✅ Standard website pages
- ✅ When you want a clean, professional look
- ✅ Dark-themed designs
- ✅ When newsletter subscription isn't priority
- ✅ Blog and editorial layouts

### When to Use Newsletter Footer
- ✅ Marketing pages (front page, landing pages)
- ✅ E-commerce or SaaS websites
- ✅ When newsletter signup is important
- ✅ When you want social media prominence
- ✅ Light-themed designs
- ✅ Modern, conversion-focused layouts

---

## Customization

### Changing Link Columns

```tsx
// In SiteFooter.tsx, modify the footerLinks or columns array:
const footerLinks = {
  yourCategory: [
    { label: 'Your Link', href: '#your-link' },
    // Add more links
  ],
};
```

### Changing Social Media Links

```tsx
// Only in newsletter footer:
const socialLinks = [
  { icon: 'facebook', href: 'https://facebook.com/yourpage', label: 'Facebook', Icon: Facebook },
  // Add more social links
];
```

### Changing Newsletter Heading

```tsx
// In SiteFooterNewsletter function:
<h3>Your Newsletter Heading</h3>
<p>Your custom description text.</p>
```

---

## Pattern Switching Example

```tsx
// App.tsx or template file
import { SiteFooter } from './components/parts/SiteFooter';

function App() {
  const [footerVariant, setFooterVariant] = useState('default');
  
  return (
    <div>
      {/* Page content */}
      <SiteFooter variant={footerVariant} />
    </div>
  );
}
```

---

## Comparison Table

| Feature | Default Footer | Newsletter Footer |
|---------|---------------|-------------------|
| **Logo** | ✅ Yes (dark theme) | ✅ Yes (light theme) |
| **Logo Tagline** | ✅ Yes | ❌ No |
| **Link Columns** | 3 columns | 3 columns |
| **Newsletter Form** | ❌ No | ✅ Yes |
| **Social Media Icons** | ❌ No | ✅ Yes (5 icons) |
| **Background** | Dark (`--sidebar`) | Light (`--background`) |
| **Text Color** | Light | Dark |
| **Copyright** | ✅ Yes | ✅ Yes (with brand name) |
| **Legal Links** | 2 links | 3 links |
| **Small Font** | Manrope | Lexend |
| **Best For** | Standard pages | Marketing pages |

---

## Performance Notes

- Both patterns use **lucide-react icons** (tree-shakeable)
- Newsletter form has inline submit handler (no external dependency)
- Social icons are SVG (scalable, no image files)
- Logo uses inline SVG (zero HTTP requests)
- All hover states use CSS transitions (GPU accelerated)

---

## Testing Checklist

### Default Footer
- [ ] Logo displays correctly (dark theme)
- [ ] All link columns render
- [ ] Hover states work on links
- [ ] Copyright year is current
- [ ] Legal links work
- [ ] Dark background has good contrast

### Newsletter Footer
- [ ] Logo displays correctly (light theme)
- [ ] All link columns render
- [ ] Newsletter form submits (preventDefault)
- [ ] Email input validates
- [ ] Privacy Policy link works
- [ ] All 5 social icons render
- [ ] Social icon hover states work
- [ ] Light background has good contrast

---

## Related Documentation

- **Logo Component:** `/guidelines/components/Logo.md`
- **Button Component:** `/guidelines/components/Button.md`
- **Container Component:** `/guidelines/components/Container.md`
- **Header Patterns:** `/guidelines/patterns/header-patterns.md`
- **Template Parts:** `/guidelines/parts/overview-parts.md`
- **Icons:** `/guidelines/overview-icons.md`

---

**Last Updated:** December 24, 2024  
**Pattern Version:** 1.0  
**Design System:** LSX Design  
**WordPress Compatibility:** FSE (Full Site Editing)
