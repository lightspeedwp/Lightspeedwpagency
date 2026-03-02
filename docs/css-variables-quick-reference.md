# CSS Variables Quick Reference

**Purpose:** Quick copy-paste reference for all available CSS variables in the LSX Design system.

**Rule:** ALWAYS use CSS variables. NEVER hardcode values.

**Last Updated:** March 2, 2026

---

## Typography

### Font Families

```tsx
// ✅ CORRECT - Use CSS variables
fontFamily: 'var(--font-primary)'    // Lexend - for headings, body, UI
fontFamily: 'var(--font-secondary)'  // Manrope - for small text, captions
fontFamily: 'var(--font-mono)'       // Monospace - for code

// ❌ WRONG - Never hardcode
fontFamily: 'Lexend, sans-serif'     // DON'T DO THIS
fontFamily: 'Manrope, sans-serif'    // DON'T DO THIS
```

### Font Sizes (Fluid Responsive)

**Headings (use clamp() for responsive scaling):**
```tsx
fontSize: 'var(--text-h1)'   // 40px → 64px - Page titles, hero headings
fontSize: 'var(--text-h2)'   // 32px → 48px - Section headings
fontSize: 'var(--text-h3)'   // 24px → 36px - Subsection headings
fontSize: 'var(--text-h4)'   // 20px → 28px - Component titles
fontSize: 'var(--text-h5)'   // 18px → 24px - Small headings
fontSize: 'var(--text-h6)'   // 16px → 20px - Label headings
```

**Body Text (fixed sizes):**
```tsx
fontSize: 'var(--text-lead)'   // 20px - Lead paragraphs, hero subtitles
fontSize: 'var(--text-xl)'     // 20px - Extra large body text
fontSize: 'var(--text-lg)'     // 18px - Large body text, FAQ questions
fontSize: 'var(--text-base)'   // 16px - Standard body text, buttons
fontSize: 'var(--text-sm)'     // 14px - Small text, metadata
fontSize: 'var(--text-xs)'     // 12px - Badges, labels
fontSize: 'var(--text-2xs)'    // 10px - Micro text, counters
```

**Display Text:**
```tsx
fontSize: 'var(--text-2xl)'    // 24px - Large display
fontSize: 'var(--text-3xl)'    // 30px - Display text
fontSize: 'var(--text-4xl)'    // 36px - Extra large display
fontSize: 'var(--text-5xl)'    // 48px - Hero display
fontSize: 'var(--text-6xl)'    // 60px - Jumbo display
```

### Font Weights

```tsx
fontWeight: 'var(--font-weight-light)'      // 300 - Decorative only
fontWeight: 'var(--font-weight-regular)'    // 400 - Body text
fontWeight: 'var(--font-weight-medium)'     // 500 - Headings
fontWeight: 'var(--font-weight-semibold)'   // 600 - Buttons, emphasis
fontWeight: 'var(--font-weight-bold)'       // 700 - Strong callouts
fontWeight: 'var(--font-weight-extrabold)'  // 800 - Hero titles
fontWeight: 'var(--font-weight-black)'      // 800 - Display text
```

### Line Heights

```tsx
lineHeight: 'var(--line-height-tight)'    // 1.1 - Display headings (H1)
lineHeight: 'var(--line-height-snug)'     // 1.25 - Headings (H2-H3)
lineHeight: 'var(--line-height-normal)'   // 1.5 - Body text
lineHeight: 'var(--line-height-relaxed)'  // 1.75 - Long-form content
```

### Letter Spacing

```tsx
letterSpacing: 'var(--letter-spacing-tight)'   // -0.025em - Large headings
letterSpacing: 'var(--letter-spacing-normal)'  // 0 - Body text
letterSpacing: 'var(--letter-spacing-wide)'    // 0.025em - Buttons, labels
letterSpacing: 'var(--letter-spacing-wider)'   // 0.05em - Uppercase text
letterSpacing: 'var(--letter-spacing-widest)'  // 0.1em - Badges
```

---

## Colors

### Core Colors

```tsx
// Backgrounds
backgroundColor: 'var(--background)'        // Page background
backgroundColor: 'var(--foreground)'        // Text color (inverted)

// Text
color: 'var(--foreground)'                  // Primary text
color: 'var(--background)'                  // Inverted text
```

### Card Colors

```tsx
backgroundColor: 'var(--card)'              // Card background
color: 'var(--card-foreground)'             // Card text
backgroundColor: 'var(--card-hover)'        // Card hover state
```

### Brand Colors

```tsx
// Primary (Blue)
backgroundColor: 'var(--primary)'           // Primary brand color (#1E6FFF)
color: 'var(--primary-foreground)'          // Text on primary
backgroundColor: 'var(--primary-dark)'      // Primary hover/dark

// Secondary
backgroundColor: 'var(--secondary)'         // Secondary color
color: 'var(--secondary-foreground)'        // Text on secondary

// Accent (Cyan)
backgroundColor: 'var(--accent)'            // Accent color (#00D9FF)
color: 'var(--accent-foreground)'           // Text on accent
```

### Functional Colors

```tsx
// Destructive (Red)
backgroundColor: 'var(--destructive)'       // Error, danger (#EF4444)
color: 'var(--destructive-foreground)'      // Text on destructive

// Success (Green)
backgroundColor: 'var(--success)'           // Success state (#10B981)
color: 'var(--success-foreground)'          // Text on success

// Warning (Orange)
backgroundColor: 'var(--warning)'           // Warning state (#F59E0B)
color: 'var(--warning-foreground)'          // Text on warning

// Info (Blue)
backgroundColor: 'var(--info)'              // Info state (#3B82F6)
color: 'var(--info-foreground)'             // Text on info
```

### UI Colors

```tsx
// Muted
backgroundColor: 'var(--muted)'             // Muted backgrounds
color: 'var(--muted-foreground)'            // Muted text

// Borders
borderColor: 'var(--border)'                // Default borders
borderColor: 'var(--input-border)'          // Input borders

// Input
backgroundColor: 'var(--input)'             // Input backgrounds
color: 'var(--input-foreground)'            // Input text

// Ring (focus states)
boxShadow: '0 0 0 2px var(--ring)'          // Focus ring
```

### Popover Colors

```tsx
backgroundColor: 'var(--popover)'           // Popover background
color: 'var(--popover-foreground)'          // Popover text
```

---

## Spacing

### Spacing Scale (4px base unit)

```tsx
// Micro spacing
padding: 'var(--spacing-0)'     // 0px
padding: 'var(--spacing-1)'     // 4px
padding: 'var(--spacing-2)'     // 8px
padding: 'var(--spacing-3)'     // 12px

// Small spacing
padding: 'var(--spacing-4)'     // 16px
padding: 'var(--spacing-5)'     // 20px
padding: 'var(--spacing-6)'     // 24px
padding: 'var(--spacing-7)'     // 28px

// Medium spacing
padding: 'var(--spacing-8)'     // 32px
padding: 'var(--spacing-9)'     // 36px
padding: 'var(--spacing-10)'    // 40px
padding: 'var(--spacing-12)'    // 48px

// Large spacing
padding: 'var(--spacing-16)'    // 64px
padding: 'var(--spacing-20)'    // 80px
padding: 'var(--spacing-24)'    // 96px
padding: 'var(--spacing-32)'    // 128px

// Extra large spacing
padding: 'var(--spacing-40)'    // 160px
padding: 'var(--spacing-48)'    // 192px
padding: 'var(--spacing-64)'    // 256px
```

### Semantic Spacing Aliases

```tsx
padding: 'var(--spacing-xs)'    // 8px (--spacing-2)
padding: 'var(--spacing-sm)'    // 16px (--spacing-4)
padding: 'var(--spacing-md)'    // 24px (--spacing-6)
padding: 'var(--spacing-lg)'    // 32px (--spacing-8)
padding: 'var(--spacing-xl)'    // 48px (--spacing-12)
padding: 'var(--spacing-2xl)'   // 64px (--spacing-16)
padding: 'var(--spacing-3xl)'   // 96px (--spacing-24)
padding: 'var(--spacing-4xl)'   // 128px (--spacing-32)
```

### Common Spacing Patterns

```tsx
// Component padding
padding: 'var(--spacing-6)'              // 24px - Component internal padding
padding: 'var(--spacing-8)'              // 32px - Section padding

// Gaps
gap: 'var(--spacing-4)'                  // 16px - Card gaps, grid gaps
gap: 'var(--spacing-8)'                  // 32px - Large grid gaps

// Margins
marginBottom: 'var(--spacing-8)'         // 32px - Section spacing
marginBottom: 'var(--spacing-16)'        // 64px - Large section spacing
```

---

## Border Radius

```tsx
borderRadius: 'var(--radius)'           // 4px - Default radius
borderRadius: 'var(--radius-sm)'        // 2px - Small radius (badges)
borderRadius: 'var(--radius-lg)'        // 8px - Large radius (cards)
borderRadius: 'var(--radius-xl)'        // 12px - Extra large radius
borderRadius: 'var(--radius-2xl)'       // 16px - 2X large radius
borderRadius: 'var(--radius-full)'      // 9999px - Fully rounded (pills, avatars)
```

---

## Shadows

```tsx
boxShadow: 'var(--shadow-sm)'           // Subtle shadow
boxShadow: 'var(--shadow-md)'           // Medium shadow (cards)
boxShadow: 'var(--shadow-lg)'           // Large shadow (modals)
boxShadow: 'var(--shadow-xl)'           // Extra large shadow
boxShadow: 'var(--shadow-2xl)'          // Huge shadow (popovers)
```

---

## WordPress Utility Classes

### Grid Layouts

```tsx
// ✅ CORRECT - WordPress utilities
className="wp-grid-2-cols"              // 1 col mobile → 2 cols desktop
className="wp-grid-3-cols"              // 1 col mobile → 2 cols tablet → 3 cols desktop
className="wp-grid-4-cols"              // 1 col mobile → 2 cols tablet → 4 cols desktop

// ❌ WRONG - Tailwind classes (DON'T USE)
className="grid grid-cols-3 gap-8"      // DON'T DO THIS
```

### Max Width Containers

```tsx
// ✅ CORRECT - WordPress utilities
className="wp-max-w-3xl"                // 768px, centered
className="wp-max-w-4xl"                // 896px, centered
className="wp-max-w-6xl"                // 1152px, centered

// ❌ WRONG - Tailwind classes (DON'T USE)
className="max-w-6xl mx-auto"           // DON'T DO THIS
```

### Text Alignment

```tsx
// ✅ CORRECT - WordPress utilities
className="wp-text-center"              // Center text
className="wp-text-left"                // Left align
className="wp-text-right"               // Right align

// ❌ WRONG - Tailwind classes (DON'T USE)
className="text-center"                 // DON'T DO THIS
```

---

## Complete Component Example

```tsx
import '@/styles/components/example-component.css';

export interface ExampleComponentProps {
  title: string;
  description: string;
  variant?: 'primary' | 'secondary';
}

export const ExampleComponent = ({ 
  title, 
  description, 
  variant = 'primary' 
}: ExampleComponentProps) => {
  return (
    <div className="example-component">
      {/* ✅ CORRECT - All CSS variables */}
      <div 
        className="example-component__container"
        style={{
          padding: 'var(--spacing-8)',          // ✅ Spacing token
          backgroundColor: variant === 'primary' 
            ? 'var(--primary)'                  // ✅ Color token
            : 'var(--secondary)',
          borderRadius: 'var(--radius-lg)',     // ✅ Border radius token
          boxShadow: 'var(--shadow-md)'         // ✅ Shadow token
        }}
      >
        {/* ✅ CORRECT - Typography tokens */}
        <h2 
          style={{
            fontFamily: 'var(--font-primary)',  // ✅ Font family token
            fontSize: 'var(--text-h2)',         // ✅ Font size token
            fontWeight: 'var(--font-weight-medium)', // ✅ Font weight token
            lineHeight: 'var(--line-height-snug)',   // ✅ Line height token
            marginBottom: 'var(--spacing-4)',   // ✅ Spacing token
            color: variant === 'primary'
              ? 'var(--primary-foreground)'     // ✅ Color token
              : 'var(--secondary-foreground)'
          }}
        >
          {title}
        </h2>

        <p 
          style={{
            fontFamily: 'var(--font-primary)',  // ✅ Font family token
            fontSize: 'var(--text-base)',       // ✅ Font size token
            lineHeight: 'var(--line-height-normal)', // ✅ Line height token
            color: variant === 'primary'
              ? 'var(--primary-foreground)'     // ✅ Color token
              : 'var(--secondary-foreground)'
          }}
        >
          {description}
        </p>
      </div>
    </div>
  );
};
```

---

## Why Use CSS Variables?

### ✅ Complete User Control

Users can update **the entire site's styling** by editing CSS files:

```css
/* /src/styles/theme-base.css */
/* Change primary font - entire site updates! */
--font-primary: 'Inter', sans-serif;

/* /src/styles/theme-light.css */
/* Change brand color - all buttons/links update! */
--primary: #FF6B35;

/* /src/styles/theme-base.css */
/* Change spacing scale - all spacing updates! */
--spacing-4: 1.25rem;
```

### ⚡ Time Savings: 99%+

- **Old way (hardcoded):** Find/replace across 130+ files → 60+ minutes
- **New way (CSS variables):** Edit 1 CSS variable → 30 seconds ✅

### 🎯 WordPress FSE Ready

All CSS variables map directly to WordPress `theme.json` presets - instant WordPress compatibility!

---

## Pre-Commit Checklist

Before committing new components, verify:

- [ ] All typography uses `var(--font-*)` and `var(--text-*)` variables
- [ ] All colors use semantic CSS variables (`var(--primary)`, `var(--foreground)`, etc.)
- [ ] All spacing uses `var(--spacing-*)` tokens
- [ ] All layout uses WordPress utility classes (`.wp-*`)
- [ ] No Tailwind classes (`grid`, `p-*`, `gap-*`, etc.)
- [ ] No hardcoded hex colors (`#FFFFFF`, etc.)
- [ ] No hardcoded pixel values (`24px`, `16px`, etc.)
- [ ] No hardcoded font names (`'Lexend, sans-serif'`, etc.)
- [ ] Light/dark mode tested
- [ ] Responsive behavior verified

---

## Reference Files

- **Typography:** `/guidelines/design-tokens/typography.md`
- **Colors:** `/guidelines/design-tokens/colors.md`
- **Spacing:** `/guidelines/design-tokens/spacing.md`
- **Responsive:** `/guidelines/design-tokens/responsive.md`
- **Base Variables:** `/src/styles/theme-base.css`
- **Light Mode:** `/src/styles/theme-light.css`
- **Dark Mode:** `/src/styles/theme-dark.css`
- **Utilities:** `/src/styles/utilities.css`

---

**Last Updated:** March 2, 2026  
**Compliance Score:** 100% ✅  
**Total CSS Variables:** 80+  
**Total WordPress Utilities:** 15+
