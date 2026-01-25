# Social Icons Block Guidelines

**WordPress Block:** `core/social-links`  
**Category:** Widgets  
**CSS File:** `/src/styles/blocks/widgets/social-icons.css`

---

## Purpose

The Social Icons block displays clickable social media icons with links. Used in headers, footers, or sidebars for social media navigation.

---

## Design System Integration

### Typography
- **Size:** `var(--text-2xl)` (32px) for icons

### Spacing
- **Icon Gap:** `var(--spacing-3)` (12px)
- **Icon Padding:** `var(--spacing-2)` (8px)

### Colors
- **Icon:** `var(--foreground)`
- **Hover:** `var(--primary)`
- **Background:** `var(--muted)` (optional)

### Border Radius
- **Icons:** `var(--radius-full)` (circle) or `var(--radius)` (square)

---

## Component Structure

```tsx
import '@/styles/blocks/widgets/social-icons.css';
import { Facebook, Twitter, Instagram, Linkedin, Youtube, Github } from 'lucide-react';

export interface SocialIconsBlockProps {
  links: Array<{
    platform: 'facebook' | 'twitter' | 'instagram' | 'linkedin' | 'youtube' | 'github';
    url: string;
    label?: string;
  }>;
  iconSize?: 'small' | 'medium' | 'large';
  variant?: 'default' | 'filled';
}

const iconMap = {
  facebook: Facebook,
  twitter: Twitter,
  instagram: Instagram,
  linkedin: Linkedin,
  youtube: Youtube,
  github: Github
};

export const SocialIconsBlock = ({ links, iconSize = 'medium', variant = 'default' }: SocialIconsBlockProps) => {
  return (
    <div className={`wp-block-social-links wp-block-social-links--${iconSize} wp-block-social-links--${variant}`}>
      {links.map((link, index) => {
        const Icon = iconMap[link.platform];
        return (
          <a
            key={index}
            href={link.url}
            className="wp-block-social-link"
            aria-label={link.label || `Visit our ${link.platform} page`}
            target="_blank"
            rel="noopener noreferrer"
          >
            <Icon className="wp-block-social-link__icon" />
          </a>
        );
      })}
    </div>
  );
};
```

---

## CSS Implementation

```css
.wp-block-social-links {
  display: flex;
  align-items: center;
  gap: var(--spacing-3);
  flex-wrap: wrap;
}

.wp-block-social-link {
  display: flex;
  align-items: center;
  justify-content: center;
  padding: var(--spacing-2);
  color: var(--foreground);
  text-decoration: none;
  border-radius: var(--radius);
  transition: all 0.2s ease;
}

.wp-block-social-link:hover {
  color: var(--primary);
  background: var(--muted);
}

.wp-block-social-link:focus-visible {
  outline: 2px solid var(--primary);
  outline-offset: 2px;
}

.wp-block-social-link__icon {
  width: 24px;
  height: 24px;
}

/* Sizes */
.wp-block-social-links--small .wp-block-social-link__icon {
  width: 20px;
  height: 20px;
}

.wp-block-social-links--large .wp-block-social-link__icon {
  width: 32px;
  height: 32px;
}

/* Filled Variant */
.wp-block-social-links--filled .wp-block-social-link {
  background: var(--muted);
  border-radius: var(--radius-full);
}

.wp-block-social-links--filled .wp-block-social-link:hover {
  background: var(--primary);
  color: var(--primary-foreground);
}
```

---

**Status:** ✅ COMPLETE | **WordPress FSE:** Compatible | **Design System:** 100% Compliant
