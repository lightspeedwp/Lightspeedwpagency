# Button Sizes — LSX Design System

**Standard Button Size Guidelines**  
**Last Updated:** December 26, 2024  
**Version:** 1.0

---

## Overview

This document defines the **3 standard button sizes** for the LSX Design system. All button implementations must use these exact specifications to ensure consistency, accessibility, and proper visual hierarchy.

---

## 🎯 Three Standard Button Sizes

### Size: Small (`sm`)
**Usage:** Tertiary actions, compact spaces, filter buttons, tags  
**Minimum Touch Target:** 44×44px (WCAG AAA compliant)

```tsx
// CSS Variables
fontSize: 'var(--text-small)'        // 14px (0.875rem)
fontWeight: 'var(--font-weight-medium)'  // 500
padding: '10px 20px'                 // 40px height (with border)
borderRadius: 'var(--radius)'        // 4px
lineHeight: 'var(--line-height-normal)' // 1.5

// Tailwind Classes
className="px-5 py-2.5 text-sm"

// Total Dimensions (with 1px border)
Width: auto (content-based, min 100px recommended)
Height: 44px (meets WCAG AAA 48×48px with safe zone)
```

**Example:**
```tsx
<Button size="sm" variant="outline">
  Filter
</Button>
```

---

### Size: Medium (`md`) — DEFAULT
**Usage:** Primary and secondary CTAs, form submissions, standard interactions  
**Minimum Touch Target:** 48×48px (WCAG AAA compliant)

```tsx
// CSS Variables
fontSize: 'var(--text-base)'         // 16px (1rem)
fontWeight: 'var(--font-weight-medium)'  // 500
padding: '12px 24px'                 // 48px height (with border)
borderRadius: 'var(--radius)'        // 4px
lineHeight: 'var(--line-height-normal)' // 1.5

// Tailwind Classes
className="px-6 py-3 text-base"

// Total Dimensions (with 1px border)
Width: auto (content-based, min 120px recommended)
Height: 48px (meets WCAG AAA exactly)
```

**Example:**
```tsx
<Button size="md" variant="primary">
  Get Started
</Button>
```

---

### Size: Large (`lg`)
**Usage:** Hero CTAs, prominent landing page actions, major conversions  
**Minimum Touch Target:** 56×56px (exceeds WCAG AAA)

```tsx
// CSS Variables
fontSize: 'var(--text-lg)'           // 18px (1.125rem)
fontWeight: 'var(--font-weight-medium)'  // 500
padding: '16px 32px'                 // 56px height (with border)
borderRadius: 'var(--radius-lg)'     // 8px
lineHeight: 'var(--line-height-normal)' // 1.5

// Tailwind Classes
className="px-8 py-4 text-lg"

// Total Dimensions (with 1px border)
Width: auto (content-based, min 160px recommended)
Height: 56px (exceeds WCAG AAA for maximum accessibility)
```

**Example:**
```tsx
<Button size="lg" variant="primary">
  Start Your Project
</Button>
```

---

## 📐 Size Comparison Table

| Size   | Font Size | Padding (x/y) | Height | Touch Target | Use Case                    |
|--------|-----------|---------------|--------|--------------|----------------------------|
| `sm`   | 14px      | 20px / 10px   | 44px   | ✅ WCAG AAA  | Tertiary, filters, tags    |
| `md`   | 16px      | 24px / 12px   | 48px   | ✅ WCAG AAA  | Primary CTAs (DEFAULT)     |
| `lg`   | 18px      | 32px / 16px   | 56px   | ✅ WCAG AAA  | Hero CTAs, major actions   |

---

## 🎨 Button Variants

All three sizes work with these standard variants:

1. **Primary** — `variant="primary"`
   - Background: `var(--primary)`
   - Text: `var(--primary-foreground)`
   - Use: Main CTAs, form submissions

2. **Secondary** — `variant="secondary"`
   - Background: `var(--secondary)`
   - Text: `var(--secondary-foreground)`
   - Use: Secondary actions, alternative paths

3. **Outline** — `variant="outline"`
   - Background: `transparent`
   - Border: `1px solid var(--border)`
   - Text: `var(--foreground)`
   - Use: Secondary CTAs, cancel actions

4. **Ghost** — `variant="ghost"`
   - Background: `transparent`
   - Border: `1px solid var(--border)`
   - Text: `var(--foreground)`
   - Use: Minimal emphasis, tertiary actions

5. **Destructive** — `variant="destructive"`
   - Background: `var(--destructive)`
   - Text: `var(--destructive-foreground)`
   - Use: Delete, remove, dangerous actions

---

## 💡 Usage Guidelines

### When to Use Each Size

**Small (`sm`):**
- ✅ Filter buttons in archive pages
- ✅ Tag buttons
- ✅ Inline actions in lists/tables
- ✅ Compact mobile interfaces
- ❌ Primary CTAs (use medium or large)
- ❌ Hero sections (use large)

**Medium (`md`) — DEFAULT:**
- ✅ Standard form submissions
- ✅ Primary CTAs in content
- ✅ Navigation CTAs
- ✅ Modal actions
- ✅ Most interactive buttons (default choice)

**Large (`lg`):**
- ✅ Hero section CTAs
- ✅ Landing page primary actions
- ✅ Major conversion points
- ✅ Above-the-fold CTAs
- ❌ Inline content actions (use medium)
- ❌ Compact spaces (use small or medium)

---

## ♿ Accessibility Requirements

All button sizes meet WCAG 2.1 Level AAA requirements:

1. **Minimum Touch Target:** 48×48px (all sizes meet or exceed)
2. **Color Contrast:** 4.5:1 minimum (enforced by CSS variables)
3. **Focus Indicators:** 2px outline ring (all variants)
4. **Keyboard Navigation:** Full Tab/Enter/Space support
5. **Screen Reader Support:** Proper semantic HTML (`<button>` or `<a>`)

### Mobile Considerations

- **All buttons:** Minimum 44px height (meets WCAG AAA)
- **Small buttons:** Use sparingly on mobile, ensure adequate spacing
- **Medium buttons:** Recommended for most mobile interactions
- **Large buttons:** Ideal for mobile hero CTAs

---

## 🔧 Implementation

### Button Component API

```tsx
interface ButtonProps {
  size?: 'sm' | 'md' | 'lg';           // Button size (default: 'md')
  variant?: 'primary' | 'secondary' | 'outline' | 'ghost' | 'destructive';
  children: ReactNode;                  // Button content
  href?: string;                        // External link
  page?: string;                        // Internal navigation
  onClick?: () => void;                 // Click handler
  disabled?: boolean;                   // Disabled state
  className?: string;                   // Additional classes
  style?: React.CSSProperties;          // Custom styles (use sparingly)
}
```

### Example Usage

```tsx
// Small tertiary action
<Button size="sm" variant="outline">
  View Filters
</Button>

// Medium primary CTA (default)
<Button size="md" variant="primary" page="contact">
  Get Started
</Button>

// Large hero CTA
<Button size="lg" variant="primary" page="services">
  Explore Our Services
</Button>

// Secondary action with icon
<Button size="md" variant="secondary" href="#learn-more">
  <ArrowRight className="mr-2" />
  Learn More
</Button>
```

---

## 🚫 Common Mistakes

### ❌ DON'T Do This:

```tsx
// Custom padding that breaks the size system
<Button style={{ padding: '15px 30px' }}>Bad</Button>

// Mixing sizes and variants incorrectly
<Button size="sm" variant="primary">Primary CTA</Button> // Too small for primary

// Hard-coded font sizes
<Button style={{ fontSize: '20px' }}>Bad</Button>
```

### ✅ DO This Instead:

```tsx
// Use standard sizes
<Button size="md" variant="primary">Primary CTA</Button>

// Use appropriate size for context
<Button size="lg" variant="primary">Hero CTA</Button>

// Use CSS variables for customization
<Button size="md" style={{ fontSize: 'var(--text-base)' }}>Good</Button>
```

---

## 📊 Visual Hierarchy

**Button hierarchy from most to least prominent:**

1. **Large Primary** — Hero CTAs, major conversions
2. **Medium Primary** — Standard CTAs, form submissions
3. **Medium Secondary** — Alternative actions
4. **Medium Outline** — Secondary CTAs
5. **Small Primary** — Compact primary actions
6. **Small Outline** — Filter buttons, tags
7. **Ghost** — Minimal emphasis, tertiary actions

**Maximum buttons per section:**
- **1 primary** (large or medium)
- **1-2 secondary** (medium or small)
- **Multiple tertiary** (small or ghost, as needed)

---

## 🎯 WordPress Block Editor Mapping

### Button Block Styles

In `theme.json`, register these button styles:

```json
{
  "settings": {
    "blocks": {
      "core/button": {
        "styles": [
          {
            "name": "small",
            "label": "Small",
            "isDefault": false
          },
          {
            "name": "medium",
            "label": "Medium",
            "isDefault": true
          },
          {
            "name": "large",
            "label": "Large",
            "isDefault": false
          }
        ]
      }
    }
  }
}
```

### CSS Classes

```css
/* Small button */
.wp-block-button.is-style-small .wp-block-button__link {
  font-size: var(--text-small);
  padding: 10px 20px;
}

/* Medium button (default) */
.wp-block-button__link {
  font-size: var(--text-base);
  padding: 12px 24px;
}

/* Large button */
.wp-block-button.is-style-large .wp-block-button__link {
  font-size: var(--text-lg);
  padding: 16px 32px;
  border-radius: var(--radius-lg);
}
```

---

## 📝 Testing Checklist

Before deploying buttons, verify:

- [ ] Button uses one of the 3 standard sizes (`sm`, `md`, `lg`)
- [ ] Touch target is minimum 44×44px (preferably 48×48px)
- [ ] Color contrast meets WCAG AA minimum (4.5:1)
- [ ] Focus indicator is visible (2px ring)
- [ ] Button works with keyboard (Tab, Enter, Space)
- [ ] Font size uses CSS variables (not hard-coded)
- [ ] Padding uses Tailwind classes or exact specs
- [ ] Appropriate variant for context (primary/secondary/etc.)
- [ ] No more than 1 primary button per section

---

## 🔗 Related Documentation

- **[Button Component API](/guidelines/components/Button.md)** — Full component documentation
- **[Typography Tokens](/guidelines/design-tokens/typography.md)** — Font size system
- **[Color System](/guidelines/design-tokens/colors.md)** — Semantic color roles
- **[Spacing Scale](/guidelines/design-tokens/spacing.md)** — Padding and margin system
- **[Accessibility Guidelines](/guidelines/ACCESSIBILITY-FIXES-COMPLETE.md)** — WCAG compliance

---

**Summary:** Use these 3 standard button sizes (`sm`, `md`, `lg`) for all button implementations. Medium is the default for most CTAs. Large is for hero sections. Small is for tertiary actions. Always use CSS variables and Tailwind classes—never hard-code values.
