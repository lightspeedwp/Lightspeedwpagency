# Interface Icons

UI control icons for navigation, actions, states, and user feedback. All icons are from **Lucide React**.

**CRITICAL:** Always verify an icon exists before using it. See [../overview-icons.md](../overview-icons.md) for verification process.

---

## Icon Categories

### Navigation & Directional

**Common use:** Navigation controls, pagination, scrolling

| Icon Name | Use Case | Verification Command |
|-----------|----------|---------------------|
| `ChevronRight` | Next, forward, expand | `grep "ChevronRight" node_modules/lucide-react/dist/esm/icons/index.js` |
| `ChevronLeft` | Previous, back, collapse | `grep "ChevronLeft" node_modules/lucide-react/dist/esm/icons/index.js` |
| `ChevronDown` | Dropdown, expand down | `grep "ChevronDown" node_modules/lucide-react/dist/esm/icons/index.js` |
| `ChevronUp` | Collapse, scroll up | `grep "ChevronUp" node_modules/lucide-react/dist/esm/icons/index.js` |
| `ArrowRight` | Navigate forward | `grep "ArrowRight" node_modules/lucide-react/dist/esm/icons/index.js` |
| `ArrowLeft` | Navigate back | `grep "ArrowLeft" node_modules/lucide-react/dist/esm/icons/index.js` |
| `ArrowUp` | Scroll to top | `grep "ArrowUp" node_modules/lucide-react/dist/esm/icons/index.js` |
| `ArrowDown` | Scroll down | `grep "ArrowDown" node_modules/lucide-react/dist/esm/icons/index.js` |

**Example:**
```tsx
import { ChevronRight, ArrowLeft } from 'lucide-react';

// Pagination
<button>
  <ChevronLeft size={16} />
  Previous
</button>

<button>
  Next
  <ChevronRight size={16} />
</button>

// Breadcrumb
<nav>
  <a href="/">Home</a>
  <ChevronRight size={14} />
  <a href="/destinations">Destinations</a>
</nav>
```

---

### Actions & Commands

**Common use:** Primary actions, user commands

| Icon Name | Use Case | Verification Command |
|-----------|----------|---------------------|
| `Menu` | Mobile menu, navigation | `grep "Menu" node_modules/lucide-react/dist/esm/icons/index.js` |
| `X` | Close, dismiss, cancel | `grep "\"X\"" node_modules/lucide-react/dist/esm/icons/index.js` |
| `Search` | Search functionality | `grep "Search" node_modules/lucide-react/dist/esm/icons/index.js` |
| `Filter` | Filter controls | `grep "Filter" node_modules/lucide-react/dist/esm/icons/index.js` |
| `Plus` | Add, create new | `grep "Plus" node_modules/lucide-react/dist/esm/icons/index.js` |
| `Minus` | Remove, delete | `grep "Minus" node_modules/lucide-react/dist/esm/icons/index.js` |
| `Edit` | Edit mode | `grep "Edit" node_modules/lucide-react/dist/esm/icons/index.js` |
| `Trash` | Delete permanently | `grep "Trash" node_modules/lucide-react/dist/esm/icons/index.js` |
| `Download` | Download action | `grep "Download" node_modules/lucide-react/dist/esm/icons/index.js` |
| `Share` | Share content | `grep "Share" node_modules/lucide-react/dist/esm/icons/index.js` |

**Example:**
```tsx
import { Menu, X, Search } from 'lucide-react';

// Mobile menu toggle
<button aria-label="Open menu">
  <Menu size={24} />
</button>

// Close dialog
<button aria-label="Close">
  <X size={20} />
</button>

// Search button
<button>
  <Search size={16} />
  Search
</button>
```

---

### Status & Feedback

**Common use:** Success, error, warning, information indicators

| Icon Name | Use Case | Verification Command |
|-----------|----------|---------------------|
| `Check` | Success, completed | `grep "\"Check\"" node_modules/lucide-react/dist/esm/icons/index.js` |
| `CheckCircle` | Success with emphasis | `grep "CheckCircle" node_modules/lucide-react/dist/esm/icons/index.js` |
| `AlertCircle` | Warning, error | `grep "AlertCircle" node_modules/lucide-react/dist/esm/icons/index.js` |
| `Info` | Information | `grep "Info" node_modules/lucide-react/dist/esm/icons/index.js` |
| `XCircle` | Error, failed | `grep "XCircle" node_modules/lucide-react/dist/esm/icons/index.js` |
| `AlertTriangle` | Warning (strong) | `grep "AlertTriangle" node_modules/lucide-react/dist/esm/icons/index.js` |
| `HelpCircle` | Help, tooltip | `grep "HelpCircle" node_modules/lucide-react/dist/esm/icons/index.js` |

**Example:**
```tsx
import { CheckCircle, AlertCircle, Info } from 'lucide-react';

// Success message
<div style={{ 
  color: 'var(--wp--preset--color--success)',
  display: 'flex',
  gap: 'var(--wp--preset--spacing--10)'
}}>
  <CheckCircle size={20} />
  <span>Booking confirmed</span>
</div>

// Error message
<div style={{ 
  color: 'var(--wp--preset--color--error)',
  display: 'flex',
  gap: 'var(--wp--preset--spacing--10)'
}}>
  <AlertCircle size={20} />
  <span>Payment failed</span>
</div>

// Info banner
<div style={{ 
  color: 'var(--wp--preset--color--info)',
  display: 'flex',
  gap: 'var(--wp--preset--spacing--10)'
}}>
  <Info size={20} />
  <span>Visa required for this destination</span>
</div>
```

---

### Social & Engagement

**Common use:** Favorites, social sharing, bookmarks

| Icon Name | Use Case | Verification Command |
|-----------|----------|---------------------|
| `Heart` | Favorite, like | `grep "Heart" node_modules/lucide-react/dist/esm/icons/index.js` |
| `Star` | Rating, featured | `grep "Star" node_modules/lucide-react/dist/esm/icons/index.js` |
| `Bookmark` | Save for later | `grep "Bookmark" node_modules/lucide-react/dist/esm/icons/index.js` |
| `Share2` | Share action | `grep "Share2" node_modules/lucide-react/dist/esm/icons/index.js` |
| `ThumbsUp` | Like, approve | `grep "ThumbsUp" node_modules/lucide-react/dist/esm/icons/index.js` |

**Example:**
```tsx
import { Heart, Star, Bookmark } from 'lucide-react';

// Card actions
<div style={{ 
  display: 'flex',
  gap: 'var(--wp--preset--spacing--20)'
}}>
  <button aria-label="Add to favorites">
    <Heart size={20} />
  </button>
  <button aria-label="Bookmark">
    <Bookmark size={20} />
  </button>
</div>

// Rating display
<div style={{ 
  display: 'flex',
  gap: 'var(--wp--preset--spacing--10)'
}}>
  {[1, 2, 3, 4, 5].map(i => (
    <Star key={i} size={16} fill="currentColor" />
  ))}
</div>
```

---

### View Controls

**Common use:** Layout switching, display options

| Icon Name | Use Case | Verification Command |
|-----------|----------|---------------------|
| `Grid` | Grid view | `grep "\"Grid\"" node_modules/lucide-react/dist/esm/icons/index.js` |
| `List` | List view | `grep "List" node_modules/lucide-react/dist/esm/icons/index.js` |
| `Table` | Table view | `grep "Table" node_modules/lucide-react/dist/esm/icons/index.js` |
| `Eye` | View, preview | `grep "Eye" node_modules/lucide-react/dist/esm/icons/index.js` |
| `EyeOff` | Hide, hidden | `grep "EyeOff" node_modules/lucide-react/dist/esm/icons/index.js` |

**Example:**
```tsx
import { Grid, List } from 'lucide-react';

// Layout switcher
<div role="group" aria-label="Layout options">
  <button aria-label="Grid view" aria-pressed={layout === 'grid'}>
    <Grid size={16} />
  </button>
  <button aria-label="List view" aria-pressed={layout === 'list'}>
    <List size={16} />
  </button>
</div>
```

---

## Common UI Patterns

### Pagination Navigation

```tsx
import { ChevronLeft, ChevronRight } from 'lucide-react';

<nav aria-label="Pagination">
  <ul style={{
    display: 'flex',
    gap: 'var(--wp--preset--spacing--20)',
    listStyle: 'none'
  }}>
    <li>
      <button aria-label="Previous page">
        <ChevronLeft size={16} />
      </button>
    </li>
    
    {/* Page numbers */}
    
    <li>
      <button aria-label="Next page">
        <ChevronRight size={16} />
      </button>
    </li>
  </ul>
</nav>
```

### Status Messages

```tsx
import { CheckCircle, AlertCircle, Info, XCircle } from 'lucide-react';

// Success
<div 
  className="flex gap-4 p-6"
  style={{ 
    backgroundColor: 'var(--secondary)',
    borderLeft: '4px solid var(--primary)',
    borderRadius: 'var(--radius)'
  }}
>
  <CheckCircle size={20} style={{ color: 'var(--primary)' }} />
  <div>
    <strong style={{
      fontFamily: 'Lexend, sans-serif',
      fontSize: 'var(--text-base)',
      fontWeight: 'var(--font-weight-medium)'
    }}>
      Success!
    </strong>
    <p style={{
      fontFamily: 'Lexend, sans-serif',
      fontSize: 'var(--text-base)',
      color: 'var(--foreground)'
    }}>
      Your booking has been confirmed.
    </p>
  </div>
</div>

// Error
<div 
  className="flex gap-4 p-6"
  style={{ 
    backgroundColor: 'var(--destructive)',
    borderLeft: '4px solid var(--destructive-foreground)',
    borderRadius: 'var(--radius)',
    color: 'var(--destructive-foreground)'
  }}
>
  <AlertCircle size={20} />
  <div>
    <strong style={{
      fontFamily: 'Lexend, sans-serif',
      fontSize: 'var(--text-base)',
      fontWeight: 'var(--font-weight-medium)'
    }}>
      Error
    </strong>
    <p style={{
      fontFamily: 'Lexend, sans-serif',
      fontSize: 'var(--text-base)'
    }}>
      Payment could not be processed.
    </p>
  </div>
</div>
```

### Mobile Menu

```tsx
import { Menu, X } from 'lucide-react';

function MobileNav() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <>
      <button 
        onClick={() => setIsOpen(!isOpen)}
        aria-label={isOpen ? 'Close menu' : 'Open menu'}
        aria-expanded={isOpen}
      >
        {isOpen ? <X size={24} /> : <Menu size={24} />}
      </button>

      {isOpen && (
        <nav aria-label="Mobile navigation">
          {/* Nav items */}
        </nav>
      )}
    </>
  );
}
```

### Search Input

```tsx
import { Search } from 'lucide-react';

<div style={{ 
  position: 'relative',
  display: 'flex',
  alignItems: 'center'
}}>
  <Search 
    size={16} 
    style={{
      position: 'absolute',
      left: 'var(--wp--preset--spacing--20)',
      color: 'var(--wp--preset--color--neutral-500)'
    }}
  />
  <input
    type="search"
    placeholder="Search destinations..."
    style={{
      paddingLeft: 'var(--wp--preset--spacing--50)',  // Space for icon
      width: '100%'
    }}
  />
</div>
```

---

## Icon Verification Workflow

**REQUIRED before using any icon:**

```bash
# 1. Search for the icon
grep "ChevronRight" node_modules/lucide-react/dist/esm/icons/index.js

# 2. Expected output if icon EXISTS:
# export { default as ChevronRight } from './chevron-right.js';

# 3. If NO output, icon does NOT exist. Try alternatives:
grep -i "arrow\|caret" node_modules/lucide-react/dist/esm/icons/index.js
```

---

## Accessibility Requirements

### Always Provide Labels

```tsx
// ✅ CORRECT: Icon with accessible label
<button aria-label="Close dialog">
  <X size={20} />
</button>

// ❌ WRONG: Icon without label
<button>
  <X size={20} />  // Screen readers don't know what this does
</button>
```

### Icons with Text

```tsx
// When icon is paired with visible text, icon is decorative
<button>
  <Search size={16} />
  Search  {/* Text provides the label */}
</button>
```

### Status Icons Must Have Text

```tsx
// ✅ CORRECT: Icon + text conveys meaning
<div>
  <AlertCircle size={20} />
  <span>Error: Invalid email</span>
</div>

// ❌ WRONG: Color and icon only (not accessible)
<div style={{ color: 'red' }}>
  <AlertCircle size={20} />  // No text explanation
</div>
```

---

## Common Mistakes

### ❌ DON'T

```tsx
// Assuming icon exists
import { MenuIcon } from 'lucide-react';  // Wrong name! It's "Menu"

// Icon without accessible label
<button>
  <X />  // What does this button do?
</button>

// Icon too large/small for context
<button style={{ fontSize: 'var(--wp--preset--font-size--200)' }}>
  <Menu size={48} />  // Icon way too large
  Menu
</button>

// Color-only status indicator
<div style={{ color: 'red' }}>
  <XCircle />  // No text, violates WCAG
</div>
```

### ✅ DO

```tsx
// Verify icon exists first
grep "Menu" node_modules/lucide-react/dist/esm/icons/index.js

// Only if verified:
import { Menu } from 'lucide-react';

// Icon with accessible label
<button aria-label="Open menu">
  <Menu size={24} />
</button>

// Match icon size to context
<button style={{ 
  fontSize: 'var(--wp--preset--font-size--200)',
  display: 'flex',
  alignItems: 'center',
  gap: 'var(--wp--preset--spacing--10)'
}}>
  <Menu size={16} />  // 16px icon with 14px text
  Menu
</button>

// Status with icon AND text
<div style={{ 
  color: 'var(--wp--preset--color--error)',
  display: 'flex',
  gap: 'var(--wp--preset--spacing--10)'
}}>
  <XCircle size={20} />
  <span>Error: Payment failed</span>
</div>
```

---

## Size Guidelines

| Context | Text Size | Icon Size |
|---------|-----------|-----------|
| Small UI (metadata) | `100` (12px) | 14px |
| Standard UI (buttons) | `200` (14px) | 16px |
| Large UI | `300` (16px) | 18-20px |
| Touch targets | Any | 20-24px |

**Rule:** Icons should be slightly larger than text for visual balance (2px difference).

---

## Related Documentation

- [../overview-icons.md](../overview-icons.md) — Icon verification process
- [travel.md](./travel.md) — Travel-specific icons
- [../design-tokens/colors.md](../design-tokens/colors.md) — Icon colors
- [../design-tokens/spacing.md](../design-tokens/spacing.md) — Icon spacing

---

**Last Updated:** December 24, 2024  
**Icon Library:** Lucide React v0.487.0