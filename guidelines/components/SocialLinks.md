# Social Links Component

**Component Type:** Navigation  
**WordPress Equivalent:** Social Links Block  
**Category:** Navigation

---

## Overview

The Social Links component displays links to social media profiles with icons, labels, and multiple styling options.

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

### Basic Social Links

```tsx
import { SocialLinks } from '@/components/blocks';

<SocialLinks
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
<SocialLinks
  links={socialLinks}
  variant="icon-text"
  size="md"
  style="outline"
/>
```

### Filled Style

```tsx
<SocialLinks
  links={socialLinks}
  variant="icon-only"
  size="lg"
  style="filled"
/>
```

### Vertical List

```tsx
import { SocialLinksList } from '@/components/blocks';

<SocialLinksList
  links={socialLinks}
  showLabels={true}
  newTab={true}
/>
```

### Social Share Buttons

```tsx
import { SocialShare } from '@/components/blocks';

<SocialShare
  url="https://lsxdesign.com/blog/post"
  title="Amazing Blog Post"
  description="Check out this amazing blog post!"
  platforms={['twitter', 'facebook', 'linkedin', 'email']}
  size="md"
/>
```

---

## Props

### SocialLinks

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

### SocialLinksList

| Prop | Type | Default | Description |
|------|------|---------|-------------|
| `links` | `SocialLink[]` | Required | Array of social media links |
| `showLabels` | `boolean` | `true` | Show platform labels |
| `newTab` | `boolean` | `true` | Open links in new tab |

### SocialShare

| Prop | Type | Default | Description |
|------|------|---------|-------------|
| `url` | `string` | Current page URL | URL to share |
| `title` | `string` | Current page title | Share title |
| `description` | `string` | - | Share description |
| `platforms` | `SocialPlatform[]` | `['twitter', 'facebook', 'linkedin', 'email']` | Platforms to include |
| `size` | `'sm' \| 'md' \| 'lg'` | `'md'` | Button size |

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

### Header Social Links

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
        <SocialLinks
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

### Footer Social Links

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
          <SocialLinks
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

### Blog Post Share Buttons

```tsx
function BlogPost({ post }) {
  return (
    <article>
      <h1>{post.title}</h1>
      <div className="post-content">
        {post.content}
      </div>

      {/* Share Buttons */}
      <div className="post-share">
        <SocialShare
          url={post.url}
          title={post.title}
          description={post.excerpt}
          platforms={['twitter', 'facebook', 'linkedin', 'reddit', 'email']}
          size="md"
        />
      </div>
    </article>
  );
}
```

### Team Member Profile

```tsx
function TeamMemberCard({ member }) {
  return (
    <div className="team-member-card">
      <img src={member.photo} alt={member.name} />
      <h3>{member.name}</h3>
      <p>{member.role}</p>

      <SocialLinksList
        links={[
          { platform: 'twitter', url: member.twitter },
          { platform: 'linkedin', url: member.linkedin },
          { platform: 'github', url: member.github },
          { platform: 'email', url: `mailto:${member.email}` },
        ]}
        showLabels={false}
      />
    </div>
  );
}
```

### Contact Page

```tsx
function ContactPage() {
  const socialLinks = [
    { platform: 'email', url: 'mailto:hello@lsxdesign.com', label: 'Email Us' },
    { platform: 'twitter', url: 'https://twitter.com/lsxdesign', label: 'Tweet Us' },
    { platform: 'linkedin', url: 'https://linkedin.com/company/lsxdesign', label: 'Connect on LinkedIn' },
    { platform: 'whatsapp', url: 'https://wa.me/1234567890', label: 'WhatsApp' },
  ];

  return (
    <div className="contact-page">
      <h1>Get in Touch</h1>
      
      <div className="contact-methods">
        <SocialLinksList
          links={socialLinks}
          showLabels={true}
        />
      </div>
    </div>
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

- **[Navigation](./Navigation.md)** - Main site navigation
- **[Footer](./Footer.md)** - Site footer
- **[Button](./Button.md)** - Button component

---

## File Location

```
/src/app/components/blocks/navigation/SocialLinks.tsx
```

---

**Last Updated:** December 30, 2024  
**Component Version:** 1.0.0  
**Design System:** LSX Design
