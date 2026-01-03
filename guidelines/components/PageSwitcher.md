# PageSwitcher Component

**Component Type:** Prototype Utility (Non-WordPress)  
**WordPress Mapping:** Does not exist in production  
**Location:** `/src/app/components/ui/PageSwitcher.tsx`

---

## Purpose

**PROTOTYPE ONLY:** Allows switching between template previews in Figma Make. This component should NOT be included in WordPress production code.

---

## Design System Requirements

### Typography
- **Font:** `Lexend, sans-serif`
- **Size:** `var(--text-small)` (14px)
- **Weight:** `var(--font-weight-medium)` (500)

### Colors

**Container:**
```tsx
backgroundColor: 'var(--background)'
border: '1px solid var(--border)'
boxShadow: 'var(--elevation-md)'
```

**Active Tab:**
```tsx
backgroundColor: 'var(--primary)'
color: 'var(--primary-foreground)'
```

**Inactive Tab:**
```tsx
backgroundColor: 'transparent'
color: 'var(--muted-foreground)'
```

### Spacing
- **Position:** Fixed, bottom-left
- **Bottom:** `32px`
- **Left:** `32px`
- **Z-index:** 1000 (above everything)
- **Padding:** `p-4` (16px)
- **Tab Padding:** `px-4 py-2` (16px × 8px)
- **Gap:** `gap-2` (8px)

### Border Radius
```tsx
borderRadius: 'var(--radius-lg)' // 8px
```

---

## Usage

### In Prototype Only
```tsx
import { PageSwitcher } from './components/ui/PageSwitcher';

export default function App() {
  const [currentPage, setCurrentPage] = useState('front-page');

  return (
    <div>
      {renderTemplate()}
      <PageSwitcher 
        currentPage={currentPage} 
        onPageChange={setCurrentPage} 
      />
    </div>
  );
}
```

---

## Props

| Prop | Type | Default | Description |
|------|------|---------|-------------|
| `currentPage` | string | required | Current active template |
| `onPageChange` | function | required | Callback when template changes |

### Available Pages
- `'front-page'` - Homepage template
- `'archive'` - Basic archive template
- `'archive-filters'` - Archive with filters
- `'single'` - Single detail template

---

## WordPress Implementation

**IMPORTANT:** This component does NOT exist in WordPress.

In production WordPress themes:
- Template switching happens via URL routing
- No prototype navigation needed
- Server-side template selection

---

## Token Enforcement

✅ **REQUIRED:**
- Lexend font for all text
- CSS variables for all colors
- CSS variables for border radius
- CSS variables for shadows
- Tailwind spacing classes

❌ **FORBIDDEN:**
- Hard-coded colors
- Hard-coded spacing
- Including in production WordPress themes

---

## Prototype Behavior

### Template Switching
```tsx
const templates = [
  { id: 'front-page', label: 'Front Page' },
  { id: 'archive', label: 'Archive' },
  { id: 'archive-filters', label: 'Archive + Filters' },
  { id: 'single', label: 'Single' }
];
```

### Visual States
- **Active:** Primary background, white text
- **Inactive:** Transparent, muted text
- **Hover:** Slight opacity change

---

## Examples

### Full Implementation
```tsx
export function PageSwitcher({ currentPage, onPageChange }) {
  const pages = [
    { id: 'front-page', label: 'Home' },
    { id: 'archive', label: 'Archive' },
    { id: 'archive-filters', label: 'Filtered' },
    { id: 'single', label: 'Detail' }
  ];

  return (
    <div
      className="fixed bottom-8 left-8 z-1000 p-4"
      style={{
        backgroundColor: 'var(--background)',
        border: '1px solid var(--border)',
        borderRadius: 'var(--radius-lg)',
        boxShadow: 'var(--elevation-md)'
      }}
    >
      <div className="flex gap-2">
        {pages.map((page) => (
          <button
            key={page.id}
            onClick={() => onPageChange(page.id)}
            className="px-4 py-2"
            style={{
              backgroundColor: currentPage === page.id 
                ? 'var(--primary)' 
                : 'transparent',
              color: currentPage === page.id 
                ? 'var(--primary-foreground)' 
                : 'var(--muted-foreground)',
              border: 'none',
              borderRadius: 'var(--radius)',
              fontFamily: 'Lexend, sans-serif',
              fontSize: 'var(--text-small)',
              fontWeight: 'var(--font-weight-medium)',
              cursor: 'pointer',
              transition: 'all 0.2s ease'
            }}
          >
            {page.label}
          </button>
        ))}
      </div>
    </div>
  );
}
```

---

## Accessibility

### Keyboard Support
- Tab to navigation
- Arrow keys between tabs
- Enter/Space activates tab

### Screen Readers
```tsx
<div role="tablist" aria-label="Template switcher">
  <button
    role="tab"
    aria-selected={currentPage === page.id}
    aria-controls="template-content"
  >
    {page.label}
  </button>
</div>
```

### Focus Indicators
- Visible focus outline on keyboard navigation
- Clear active state

---

## Mobile Behavior

### Responsive Positioning
```tsx
// Mobile: Smaller, bottom-center
// Desktop: Bottom-left

className="fixed bottom-4 left-1/2 -translate-x-1/2 md:left-8 md:translate-x-0"
```

### Touch Targets
- Buttons maintain 44px minimum height
- Adequate spacing between tabs

---

## Removal for Production

### Before WordPress Export
1. Remove `<PageSwitcher />` from templates
2. Remove `/src/app/components/ui/PageSwitcher.tsx`
3. Remove state management from App.tsx
4. Remove from Guidelines.md

### Clean Template
```tsx
// Prototype
export default function App() {
  const [currentPage, setCurrentPage] = useState('front-page');
  return (
    <>
      {renderTemplate()}
      <PageSwitcher currentPage={currentPage} onPageChange={setCurrentPage} />
    </>
  );
}

// Production WordPress (no switcher)
export function FrontPageTemplate() {
  return (
    <>
      <SkipLink />
      <SiteHeader />
      <main id="main-content">
        {/* Content */}
      </main>
      <SiteFooter />
    </>
  );
}
```

---

## Design System Integration

This component enforces (in prototype only):
1. **Lexend typography** for tab labels
2. **CSS variable colors** for all states
3. **Design system consistency** even in prototype utilities
4. **Accessibility** standards (keyboard, ARIA)
5. **Clear separation** from production code

---

## Important Notes

⚠️ **PROTOTYPE ONLY**
- This component demonstrates template switching
- NOT for production WordPress themes
- Remove before final implementation

✅ **Use for:**
- Template previews in Figma Make
- Design system validation
- Stakeholder demos

❌ **Don't use for:**
- Production WordPress sites
- Client-facing websites
- Deployed applications

---

**Last Updated:** December 24, 2024
