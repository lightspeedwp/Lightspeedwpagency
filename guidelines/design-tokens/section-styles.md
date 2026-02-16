# Section Styles

Section styles allow users to change the visual theme of a block group (like a whole section) using a single class. These map to the "Styles" panel in the WordPress Block Editor.

**Location:** `/src/styles/presets/section-styles.css`

## Available Styles

| Style Class | Description | Background | Text Color |
| :--- | :--- | :--- | :--- |
| `.is-style-default` | Standard theme colors | `var(--background)` | `var(--foreground)` |
| `.is-style-muted` | Subtle grey/offset background | `var(--muted)` | `var(--muted-foreground)` |
| `.is-style-dark` | Inverted dark theme | `var(--foreground)` | `var(--background)` |
| `.is-style-primary` | Brand primary color | `var(--primary)` | `var(--primary-foreground)` |
| `.is-style-accent` | Brand accent color | `var(--accent)` | `var(--accent-foreground)` |

## Gradient Styles

| Style Class | Description |
| :--- | :--- |
| `.is-style-gradient-primary` | Diagonal gradient from Primary to Accent |
| `.is-style-gradient-dark` | Vertical fade to black |
| `.is-style-gradient-subtle` | Vertical fade from background to muted |

## Implementation Notes

When applying a section style, semantic variables often need to be redefined locally to ensure child elements (like buttons and inputs) remain accessible.

**Example (Dark Style):**
```css
.is-style-dark {
  background-color: var(--foreground);
  color: var(--background);
  
  /* Redefine semantic vars for context */
  --primary-foreground: var(--primary);
  --muted: rgba(255, 255, 255, 0.1);
}
```

## React Usage

```tsx
import { Section } from '@/app/components/common/Section';

export const MySection = () => (
  <Section className="is-style-dark">
    <h2>This is a dark section</h2>
    <p>Text automatically adapts to high contrast.</p>
  </Section>
);
```
