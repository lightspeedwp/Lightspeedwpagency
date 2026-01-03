# Icon System Overview

**Version:** 1.0  
**Last Updated:** December 25, 2024

---

## Overview

The LSX Design System uses **lucide-react** for all icons. Icons must be verified to exist before importing.

**Critical Rule:** ALWAYS verify icon exists using bash tool before importing.

---

## 🎨 Icon Library

**Package:** `lucide-react`  
**License:** ISC (Free to use)  
**Icons Available:** 1000+ icons  
**Documentation:** https://lucide.dev

---

## ✅ Verification Process (REQUIRED)

### Before Using ANY Icon

**Step 1: Search for icon in lucide-react**
```bash
grep -i "Search" lucide-react/dist/esm/icons/index.js
```

**Step 2: Verify exact export name**
```bash
grep "Engine" lucide-react/dist/esm/icons/index.js
```

**Step 3: Import verified icon**
```tsx
import { Search, ChevronRight, Menu } from 'lucide-react';
```

---

## 🎯 Common Icons by Category

### Navigation Icons
```tsx
import { 
  Menu,           // Hamburger menu
  X,              // Close icon
  ChevronDown,    // Dropdown indicator
  ChevronRight,   // Next/Forward
  ChevronLeft,    // Previous/Back
  ChevronUp,      // Collapse/Up
  ArrowRight,     // Call-to-action arrows
  ArrowLeft       // Back navigation
} from 'lucide-react';
```

### UI Icons
```tsx
import {
  Search,         // Search functionality
  Filter,         // Filtering
  Grid,           // Grid view
  List,           // List view
  Settings,       // Settings/Configuration
  MoreVertical,   // More options (vertical)
  MoreHorizontal  // More options (horizontal)
} from 'lucide-react';
```

### Social Icons
```tsx
import {
  Github,         // GitHub
  Twitter,        // Twitter/X
  Linkedin,       // LinkedIn
  Facebook,       // Facebook
  Instagram,      // Instagram
  Youtube,        // YouTube
  Mail            // Email
} from 'lucide-react';
```

### WordPress/Development Icons
```tsx
import {
  Code,           // Development
  Layout,         // Page layout
  Palette,        // Design/Theming
  Database,       // Database
  Server,         // Hosting/Server
  Globe,          // Website/Global
  Zap,            // Performance
  Shield,         // Security
  Lock            // Privacy/Security
} from 'lucide-react';
```

### Action Icons
```tsx
import {
  Plus,           // Add
  Minus,          // Remove
  Edit,           // Edit
  Trash2,         // Delete
  Download,       // Download
  Upload,         // Upload
  Copy,           // Copy
  ExternalLink,   // External link
  Send            // Send/Submit
} from 'lucide-react';
```

### Status Icons
```tsx
import {
  Check,          // Success/Complete
  X,              // Error/Cancel
  AlertCircle,    // Warning
  Info,           // Information
  HelpCircle,     // Help/Question
  Clock,          // Time/Pending
  CheckCircle     // Success (filled)
} from 'lucide-react';
```

---

## 🎨 Icon Usage Patterns

### Basic Icon
```tsx
import { Search } from 'lucide-react';

<Search size={20} color="var(--foreground)" />
```

### Icon with Custom Size
```tsx
<Search size={24} />     // 24×24px
<Search size={32} />     // 32×32px
<Search size={16} />     // 16×16px
```

### Icon with Custom Color
```tsx
<Search color="var(--primary)" />
<Check color="var(--accent)" />
<AlertCircle color="var(--destructive)" />
```

### Icon with Stroke Width
```tsx
<Search strokeWidth={2} />     // Standard
<Search strokeWidth={1.5} />   // Thinner
<Search strokeWidth={2.5} />   // Bolder
```

### Icon in Button
```tsx
<button style={{
  display: 'flex',
  alignItems: 'center',
  gap: '8px'
}}>
  <Search size={18} />
  Search
</button>
```

### Icon-Only Button
```tsx
<button 
  aria-label="Search"
  style={{
    padding: '12px',
    borderRadius: 'var(--radius)',
    border: 'none',
    backgroundColor: 'var(--primary)',
    color: 'var(--primary-foreground)',
    cursor: 'pointer'
  }}
>
  <Search size={20} />
</button>
```

---

## 📏 Icon Size Guidelines

| Size | Usage | Example |
|------|-------|---------|
| 16px | Small UI, inline text | Inline link icons |
| 18px | Buttons, navigation | Button icons |
| 20px | Default UI icons | Standard icons |
| 24px | Section icons | Feature icons |
| 32px | Large feature icons | Hero section icons |
| 48px+ | Hero icons | Large decorative icons |

---

## ♿ Accessibility

### ARIA Labels for Icon-Only Buttons
```tsx
<button aria-label="Search">
  <Search size={20} />
</button>

<button aria-label="Close menu">
  <X size={20} />
</button>
```

### Decorative Icons (Hidden from Screen Readers)
```tsx
<div aria-hidden="true">
  <Zap size={24} color="var(--primary)" />
</div>
<span>Fast Performance</span>
```

### Icon with Text Label
```tsx
<button>
  <Search size={18} aria-hidden="true" />
  <span>Search</span>
</button>
```

---

## 🎯 Icon Naming Conventions

### Never Assume Icon Names

❌ **Wrong (Assumed):**
```tsx
import { Engine } from 'lucide-react';  // May not exist!
```

✅ **Correct (Verified):**
```bash
# First verify
grep "Engine" lucide-react/dist/esm/icons/index.js

# Then import
import { Cog } from 'lucide-react';  // Verified to exist
```

---

## ✅ Best Practices

### Do's ✅
- Verify icon exists before importing
- Use consistent sizes across similar contexts
- Provide ARIA labels for icon-only buttons
- Use semantic icon names
- Match icon color to context (primary, destructive, etc.)

### Don'ts ❌
- Don't assume icon names exist
- Don't use custom SVGs when lucide has equivalent
- Don't forget accessibility labels
- Don't use icons smaller than 16px (touch targets)
- Don't use too many different icon sizes

---

## 📚 WordPress Implementation

### In WordPress Blocks

Icons can be registered as SVG assets or inline SVG:

```php
// Icon as inline SVG
<svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor">
  <path d="..." />
</svg>
```

---

**Last Updated:** December 25, 2024  
**Icon Library:** lucide-react  
**Total Icons:** 1000+  
**Verification:** Required before use
