# Blocks Overview

This document explains the **block system** for LSX Design, which maps directly to **WordPress core blocks** and **custom blocks** in a block theme.

---

## Block Philosophy

Blocks are the **fundamental building units** of WordPress content. LSX Design uses primarily **WordPress core blocks** with custom styling, reserving custom blocks for features that can't be achieved with core blocks alone.

**WordPress-First Rule:**  
✅ Use core blocks whenever possible  
❌ Only create custom blocks when absolutely necessary

---

## Block Categories

### 1. Core WordPress Blocks (Styled)

These are standard WordPress blocks with LSX Design styling applied through `theme.json` and block styles.

#### Text Blocks
- **Paragraph** (`core/paragraph`) — Body text
- **Heading** (`core/heading`) — H1-H6 headings
- **List** (`core/list`) — Ordered/unordered lists
- **Quote** (`core/quote`) — Blockquotes
- **Code** (`core/code`) — Code snippets

#### Media Blocks
- **Image** (`core/image`) — Single images
- **Gallery** (`core/gallery`) — Image galleries
- **Video** (`core/video`) — Embedded videos
- **Audio** (`core/audio`) — Audio files
- **File** (`core/file`) — Downloadable files

#### Layout Blocks
- **Group** (`core/group`) — Section container (section styles applied here)
- **Columns** (`core/columns`) — Multi-column layouts
- **Row** (`core/row`) — Horizontal layouts
- **Stack** (`core/stack`) — Vertical layouts
- **Spacer** (`core/spacer`) — Vertical spacing

#### Design Blocks
- **Button** (`core/button`) — Call-to-action buttons
- **Buttons** (`core/buttons`) — Button groups
- **Separator** (`core/separator`) — Visual dividers

---

### 2. Custom LSX Blocks

Custom blocks created specifically for LSX Design when core blocks are insufficient.

| Block | Slug | Purpose | Core Alternative |
|-------|------|---------|------------------|
| **Card Grid** | `lsx/card-grid` | Responsive card layouts | ❌ Query Loop complex |
| **Testimonial** | `lsx/testimonial` | Client testimonials | ❌ Quote lacks features |
| **FAQ Item** | `lsx/faq-item` | Question/answer pairs | ❌ Details/Summary limited |
| **Quick Facts** | `lsx/quick-facts` | Key-value metadata | ❌ Table too rigid |
| **Feature Grid** | `lsx/feature-grid` | Icon + text features | ✅ Could use Group/Image/Text |

**Note:** Most "custom" blocks can actually be achieved by composing core blocks into patterns. Reserve true custom blocks for complex interactive features.

---

## Block Styles vs Patterns vs Custom Blocks

### When to Use Each

**Block Style** (Variation of core block)  
Use when: Different visual treatment of existing block  
Example: Button variations (Primary, Secondary, Ghost)

**Pattern** (Composition of blocks)  
Use when: Reusable section combining multiple blocks  
Example: Hero section (Group + Heading + Paragraph + Buttons)

**Custom Block** (New block type)  
Use when: Core blocks can't achieve the functionality  
Example: Dynamic tour listing with filters

---

## WordPress theme.json Mapping

### Block Styling Configuration

```json
{
  "styles": {
    "blocks": {
      "core/heading": {
        "typography": {
          "fontFamily": "var(--font-family-lexend)",
          "fontWeight": "var(--font-weight-medium)",
          "lineHeight": "1.25",
          "letterSpacing": "-0.02px"
        }
      },
      "core/paragraph": {
        "typography": {
          "fontFamily": "var(--font-family-manrope)",
          "fontSize": "var(--text-base)",
          "lineHeight": "1.5"
        }
      },
      "core/button": {
        "typography": {
          "fontFamily": "var(--font-family-lexend)",
          "fontSize": "var(--text-base)",
          "fontWeight": "var(--font-weight-bold)"
        },
        "spacing": {
          "padding": {
            "top": "8px",
            "right": "24px",
            "bottom": "8px",
            "left": "24px"
          }
        },
        "border": {
          "radius": "var(--radius)"
        }
      }
    }
  }
}
```

---

## Block Style Variations

### Button Block Styles

**Primary Button:**
```json
{
  "name": "primary",
  "label": "Primary",
  "styles": {
    "color": {
      "background": "var(--primary)",
      "text": "var(--primary-foreground)"
    }
  }
}
```

**Secondary Button:**
```json
{
  "name": "secondary",
  "label": "Secondary",
  "styles": {
    "color": {
      "background": "var(--secondary)",
      "text": "var(--secondary-foreground)"
    }
  }
}
```

**Ghost Button:**
```json
{
  "name": "ghost",
  "label": "Ghost",
  "styles": {
    "color": {
      "background": "transparent",
      "text": "var(--foreground)"
    },
    "border": {
      "color": "var(--border)",
      "width": "1px",
      "style": "solid"
    }
  }
}
```

---

### Group Block Styles (Section Styles)

See **[sections/overview-sections.md](../sections/overview-sections.md)** for complete section style documentation.

- `is-style-default` — Standard section
- `is-style-surface` — Elevated section
- `is-style-hero` — Hero section
- `is-style-brand` — Brand-colored section
- `is-style-accent` — Accent section
- `is-style-full-width` — Edge-to-edge section
- `is-style-narrow` — Reading-optimized section
- `is-style-compact` — Compact spacing

---

## React Component → WordPress Block Mapping

| React Component | WordPress Block | Notes |
|-----------------|-----------------|-------|
| `<Heading>` | `core/heading` | Enforces token typography |
| `<Button>` | `core/button` | Primary/secondary/ghost styles |
| `<Container>` | `core/group` with `alignwide` | Max-width wrapper |
| `<Section>` | `core/group` with style variation | Section container |
| `<CardGrid>` | `lsx/card-grid` or pattern | Custom block or Query Loop pattern |
| `<HeroHome>` | Pattern | Group + Heading + Buttons |
| `<ArchiveHeader>` | Pattern | Group + Heading + Paragraph |
| `<CTASection>` | Pattern | Group + Heading + Buttons |

---

## Block Registration (Custom Blocks)

### Example: Card Grid Block

**block.json:**
```json
{
  "$schema": "https://schemas.wp.org/trunk/block.json",
  "apiVersion": 3,
  "name": "lsx/card-grid",
  "title": "Card Grid",
  "category": "lsx-design",
  "description": "Display content in a responsive grid of cards",
  "keywords": ["cards", "grid", "layout"],
  "attributes": {
    "columns": {
      "type": "number",
      "default": 3
    },
    "gap": {
      "type": "string",
      "default": "gap-12"
    }
  },
  "supports": {
    "align": ["wide", "full"],
    "spacing": {
      "padding": true,
      "margin": true
    },
    "color": {
      "background": true,
      "text": true
    }
  },
  "editorScript": "file:./index.js",
  "style": "file:./style.css"
}
```

---

## Accessibility Requirements

All blocks must meet:

- ✅ **Semantic HTML** — Correct element types
- ✅ **ARIA labels** — Where needed for context
- ✅ **Keyboard navigation** — All interactive elements
- ✅ **Focus states** — Visible indicators
- ✅ **Color contrast** — WCAG AA minimum
- ✅ **Responsive** — Works on all screen sizes

---

## Block Patterns

Blocks are composed into **patterns** for reusability. See **[overview-patterns.md](../overview-patterns.md)**.

Example pattern composition:
```html
<!-- lsx-design/hero/home pattern -->
<!-- wp:group {"style":"hero"} -->
<div class="wp-block-group is-style-hero">
  <!-- wp:heading {"level":1} -->
  <h1>Welcome to LSX Design</h1>
  <!-- /wp:heading -->
  
  <!-- wp:paragraph -->
  <p>Your journey starts here</p>
  <!-- /wp:paragraph -->
  
  <!-- wp:buttons -->
  <div class="wp-block-buttons">
    <!-- wp:button {"style":"primary"} -->
    <div class="wp-block-button is-style-primary">
      <a class="wp-block-button__link">Get Started</a>
    </div>
    <!-- /wp:button -->
  </div>
  <!-- /wp:buttons -->
</div>
<!-- /wp:group -->
```

---

## Block Development Workflow

### For Core Blocks

1. Identify the core block to style
2. Add styling in `theme.json`
3. Create block style variations if needed
4. Document in guidelines
5. Test in editor and frontend

### For Custom Blocks

1. Confirm core blocks can't achieve the requirement
2. Design block API (attributes, supports)
3. Create `block.json`
4. Develop edit component (editor view)
5. Develop save component (frontend render)
6. Add to block category
7. Document usage patterns
8. Test thoroughly

---

## Best Practices

### ✅ DO

- Use core blocks whenever possible
- Style blocks through `theme.json`
- Create block style variations for visual differences
- Compose blocks into patterns for reusability
- Follow WordPress block development standards
- Test in both editor and frontend
- Ensure accessibility compliance

### ❌ DON'T

- Create custom blocks for every component
- Hard-code styles in block markup
- Skip accessibility testing
- Ignore responsive behavior
- Bypass WordPress block APIs
- Create blocks that can be patterns
- Forget to document custom blocks

---

## Related Documentation

- **[overview-patterns.md](../overview-patterns.md)** — Pattern composition
- **[sections/overview-sections.md](../sections/overview-sections.md)** — Section styles
- **[overview-components.md](../overview-components.md)** — React components
- **[design-tokens/](../design-tokens/)** — Design tokens

---

## Complete Block Documentation Index

### **Design Blocks** (`/guidelines/blocks/design/`)
1. **[buttons.md](./design/buttons.md)** — WordPress Buttons block (core/buttons)
2. **[group.md](./design/group.md)** — WordPress Group block (container, core/group)
3. **[grid.md](./design/grid.md)** — WordPress Grid block (CSS Grid layout)
4. **[stack.md](./design/stack.md)** — WordPress Stack block (vertical layout)
5. **[row.md](./design/row.md)** — WordPress Row block (horizontal layout)
6. **[columns.md](./design/columns.md)** — WordPress Columns block (multi-column)

### **Theme Blocks** (`/guidelines/blocks/theme/`)
1. **[template-part.md](./theme/template-part.md)** — Template Part block (header/footer)
2. **[site-title.md](./theme/site-title.md)** — Site Title block
3. **[site-logo.md](./theme/site-logo.md)** — Site Logo block ⭐
4. **[site-tagline.md](./theme/site-tagline.md)** — Site Tagline block
5. **[search.md](./theme/search.md)** — Search block
6. **[navigation.md](./theme/navigation.md)** — Navigation block (menus)

### **Additional Block Documentation**
- **[buttons.md](./buttons.md)** — Legacy buttons documentation
- **[ADDITIONAL-BLOCKS-9-12.md](./ADDITIONAL-BLOCKS-9-12.md)** — Additional blocks 9-12
- **[COMPONENT-API-REFERENCE.md](./COMPONENT-API-REFERENCE.md)** — Block component API
- **[QUICK-REFERENCE-CARD.md](./QUICK-REFERENCE-CARD.md)** — Quick reference guide

**Total Block Documentation Files:** 16 files (6 design + 6 theme + 4 additional)

---

**Last Updated:** December 27, 2024  
**System Version:** 1.0  
**WordPress Compatibility:** FSE (Full Site Editing) + Block Editor (Gutenberg)