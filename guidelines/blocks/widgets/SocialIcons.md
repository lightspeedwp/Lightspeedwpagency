# Social Icons Component

**Component Type:** Navigation  
**WordPress Equivalent:** Social Icons Block  
**Category:** Widgets

---

## Overview

The Social Icons component displays links to social media profiles with icons, labels, and multiple styling options.

**Features:**
- 20+ social media platforms
- 3 display variants (icon-only, icon + text, text-only)
- 4 sizes (sm, md, lg, xl)
- 3 styles (default, filled, outline)
- Vertical list variant
- Social share buttons
- WCAG 2.1 AA compliant

---

## Usage

### Basic Social Icons

```tsx
import { SocialIcons } from '@/components/blocks';

<SocialIcons
  links={[
    { platform: 'twitter', url: 'https://twitter.com/lsxdesign' },
    { platform: 'linkedin', url: 'https://linkedin.com/company/lsxdesign' },
    { platform: 'github', url: 'https://github.com/lsxdesign' },
    { platform: 'email', url: 'mailto:hello@lsxdesign.com' },
  ]}
/>
```

### Icon + Text Variant

```tsx
<SocialIcons
  links={socialLinks}
  variant="icon-text"
  size="md"
  style="outline"
/>
```

### Filled Style

```tsx
<SocialIcons
  links={socialLinks}
  variant="icon-only"
  size="lg"
  style="filled"
/>
```

### Vertical List

```tsx
import { SocialIconsList } from '@/components/blocks';

<SocialIconsList
  links={socialLinks}
  showLabels={true}
  newTab={true}
/>
```

---

## Props

### SocialIcons

| Prop | Type | Default | Description |
|------|------|---------|-------------|
| `links` | `SocialLink[]` | Required | Array of social media links |
| `variant` | `'icon-only' \| 'icon-text' \| 'text-only'` | `'icon-only'` | Display variant |
| `size` | `'sm' \| 'md' \| 'lg' \| 'xl'` | `'md'` | Size of buttons |
| `style` | `'default' \| 'filled' \| 'outline'` | `'default'` | Button style |
| `align` | `'left' \| 'center' \| 'right'` | `'left'` | Horizontal alignment |
| `newTab` | `boolean` | `true` | Open links in new tab |

### SocialLink

| Property | Type | Description |
|----------|------|-------------|
| `platform` | `SocialPlatform` | Platform name (see list below) |
| `url` | `string` | Profile/page URL |
| `label` | `string` | Custom label (optional) |
| `icon` | `string` | Custom icon (optional) |

### SocialIconsList

| Prop | Type | Default | Description |
|------|------|---------|-------------|
| `links` | `SocialLink[]` | Required | Array of social media links |
| `showLabels` | `boolean` | `true` | Show platform labels |
| `newTab` | `boolean` | `true` | Open links in new tab |

---

## Supported Platforms

### Social Networks

- **twitter** - Twitter/X
- **facebook** - Facebook
- **instagram** - Instagram
- **linkedin** - LinkedIn
- **tiktok** - TikTok
- **snapchat** - Snapchat
- **pinterest** - Pinterest
- **reddit** - Reddit

### Professional

- **github** - GitHub
- **dribbble** - Dribbble
- **behance** - Behance
- **stackoverflow** - Stack Overflow
- **medium** - Medium
- **dev** - DEV Community

### Messaging

- **whatsapp** - WhatsApp
- **telegram** - Telegram
- **discord** - Discord
- **slack** - Slack

### Video

- **youtube** - YouTube
- **twitch** - Twitch

### Other

- **email** - Email
- **website** - Website

---

## Examples

### Header Social Icons

```tsx
function SiteHeader() {
  const socialLinks = [
    { platform: 'twitter', url: 'https://twitter.com/lsxdesign' },
    { platform: 'linkedin', url: 'https://linkedin.com/company/lsxdesign' },
    { platform: 'github', url: 'https://github.com/lsxdesign' },
  ];

  return (
    <header>
      <div className="container">
        <Logo />
        <Navigation />
        <SocialIcons
          links={socialLinks}
          variant="icon-only"
          size="sm"
          style="default"
        />
      </div>
    </header>
  );
}
```

### Footer Social Icons

```tsx
function SiteFooter() {
  const socialLinks = [
    { platform: 'twitter', url: 'https://twitter.com/lsxdesign' },
    { platform: 'facebook', url: 'https://facebook.com/lsxdesign' },
    { platform: 'instagram', url: 'https://instagram.com/lsxdesign' },
    { platform: 'linkedin', url: 'https://linkedin.com/company/lsxdesign' },
    { platform: 'youtube', url: 'https://youtube.com/@lsxdesign' },
  ];

  return (
    <footer>
      <div className="footer-content">
        <div className="footer-section">
          <h3>Follow Us</h3>
          <SocialIcons
            links={socialLinks}
            variant="icon-text"
            size="md"
            style="outline"
            align="left"
          />
        </div>
      </div>
    </footer>
  );
}
```

---

## Design System

### Typography

- **Labels:** Lexend (UI font)
- **Font Size:** Based on size prop (sm: --text-small, md: --text-base, lg: --text-lg, xl: --text-xl)

### Colors

- **Default Style:** Transparent background, `--foreground` text
- **Filled Style:** `--primary` background, `--primary-foreground` text
- **Outline Style:** Transparent background, `--border` border
- **Hover (Default/Outline):** `--muted` background
- **Hover (Filled):** 90% opacity

### Sizes

| Size | Icon | Padding | Min Size |
|------|------|---------|----------|
| **sm** | 1rem | 0.5rem | 36×36px |
| **md** | 1.25rem | 0.75rem | 44×44px |
| **lg** | 1.5rem | 1rem | 52×52px |
| **xl** | 2rem | 1.25rem | 60×60px |

---

## Accessibility

### WCAG 2.1 Compliance

- ✅ **AA Compliant:** All buttons meet 4.5:1 contrast ratio
- ✅ **Touch Targets:** Minimum 44×44px (WCAG AA)
- ✅ **Screen Readers:** Descriptive aria-labels
- ✅ **Keyboard Navigation:** Fully keyboard accessible
- ✅ **Focus States:** Visible focus indicators

### ARIA Labels

```tsx
// Icon-only variant includes screen reader label
<a
  href="https://twitter.com/lsxdesign"
  aria-label="Twitter (opens in new tab)"
  target="_blank"
  rel="noopener noreferrer"
>
  𝕏
</a>
```

### Security

All external links use `rel="noopener noreferrer"` to prevent:
- **Tabnabbing attacks**
- **Referrer leakage**
- **Performance issues**

---

## WordPress Mapping

### Block Pattern

```php
<!-- wp:social-links {"className":"is-style-default"} -->
<ul class="wp-block-social-links">
  <!-- wp:social-link {"url":"https://twitter.com/lsxdesign","service":"twitter"} /-->
  <!-- wp:social-link {"url":"https://facebook.com/lsxdesign","service":"facebook"} /-->
  <!-- wp:social-link {"url":"https://linkedin.com/company/lsxdesign","service":"linkedin"} /-->
</ul>
<!-- /wp:social-links -->
```

### theme.json

```json
{
  "settings": {
    "blocks": {
      "core/social-links": {
        "color": {
          "palette": [
            {
              "slug": "primary",
              "color": "var(--primary)"
            }
          ]
        }
      }
    }
  }
}
```

---

## Best Practices

### DO ✅

- ✅ **Use icon-only in headers:** Saves space
- ✅ **Use icon-text in footers:** More descriptive
- ✅ **Limit to 5-7 platforms:** Avoid overwhelming users
- ✅ **Order by importance:** Most important first
- ✅ **Open in new tab:** Keep users on your site
- ✅ **Add rel="noopener":** Security best practice

### DON'T ❌

- ❌ **Don't link to empty profiles:** Remove unused platforms
- ❌ **Don't use text-only:** Icons are more recognizable
- ❌ **Don't use too many platforms:** Causes decision paralysis
- ❌ **Don't forget aria-labels:** Required for accessibility
- ❌ **Don't use custom colors:** Stick to design system

---

## SEO Considerations

### Social Meta Tags

```html
<!-- Twitter Card -->
<meta name="twitter:card" content="summary_large_image" />
<meta name="twitter:site" content="@lsxdesign" />
<meta name="twitter:creator" content="@lsxdesign" />

<!-- Open Graph (Facebook) -->
<meta property="og:title" content="LSX Design" />
<meta property="og:description" content="..." />
<meta property="og:image" content="..." />
<meta property="og:url" content="..." />
```

### Structured Data

```json
{
  "@context": "https://schema.org",
  "@type": "Organization",
  "name": "LSX Design",
  "url": "https://lsxdesign.com",
  "sameAs": [
    "https://twitter.com/lsxdesign",
    "https://facebook.com/lsxdesign",
    "https://linkedin.com/company/lsxdesign"
  ]
}
```

---

## Related Components

- **[Navigation](../../theme/Navigation.md)** - Main site navigation
- **[Footer](../../parts/Footer.md)** - Site footer
- **[Buttons](../../design/Buttons.md)** - Button component

---

## File Location

```
/src/app/components/blocks/widgets/SocialIcons.tsx
```

---

**Last Updated:** December 30, 2024  
**Component Version:** 1.0.0  
**Design System:** LSX Design
