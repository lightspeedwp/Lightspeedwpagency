# WordPress & WooCommerce Blocks Guidelines

Complete documentation for creating WordPress core blocks and WooCommerce blocks as React components that map directly to WordPress FSE (Full Site Editing) blocks.

## 📁 Directory Structure

```
blocks/
├── README.md                      # This file - navigation and overview
├── overview-blocks.md             # Core blocks overview + custom blocks
├── COMPONENT-API-REFERENCE.md     # Complete API reference
├── QUICK-REFERENCE-CARD.md        # Quick reference guide
│
├── text/                          # Text blocks
│   ├── README.md                  # Text blocks overview
│   ├── paragraph.md               # Paragraph block
│   ├── heading.md                 # Heading block
│   ├── list.md                    # List block
│   ├── quote.md                   # Quote block
│   ├── code.md                    # Code block
│   ├── details.md                 # Details block
│   ├── table.md                   # Table block
│   └── preformatted.md            # Preformatted block
│
├── media/                         # Media blocks
│   ├── README.md                  # Media blocks overview
│   ├── image.md                   # Image block
│   ├── gallery.md                 # Gallery block
│   ├── audio.md                   # Audio block
│   ├── cover.md                   # Cover block
│   ├── file.md                    # File block
│   ├── media-text.md              # Media & Text block
│   └── video.md                   # Video block
│
├── design/                        # Design/Layout blocks
│   ├── README.md                  # Design blocks overview
│   ├── Accordion.md               # Accordion block ✅
│   ├── buttons.md                 # Buttons block ✅
│   ├── columns.md                 # Columns block ✅
│   ├── group.md                   # Group block ✅
│   ├── row.md                     # Row block ✅
│   ├── stack.md                   # Stack block ✅
│   ├── grid.md                    # Grid block ✅
│   ├── separator.md               # Separator block
│   └── spacer.md                  # Spacer block
│
├── widgets/                       # Widget blocks
│   ├── README.md                  # Widgets overview
│   ├── archives.md                # Archives block
│   ├── calendar.md                # Calendar block
│   ├── categories-list.md         # Categories List block
│   ├── custom-html.md             # Custom HTML block
│   ├── latest-comments.md         # Latest Comments block
│   ├── latest-posts.md            # Latest Posts block
│   ├── page-list.md               # Page List block
│   ├── rss.md                     # RSS block
│   ├── search.md                  # Search block
│   ├── shortcode.md               # Shortcode block
│   ├── social-icons.md            # Social Icons block
│   └── tag-cloud.md               # Tag Cloud block
│
├── theme/                         # Theme blocks
│   ├── README.md                  # Theme blocks overview
│   ├── navigation.md              # Navigation block ✅
│   ├── search.md                  # Search block ✅
│   ├── site-logo.md               # Site Logo block ✅
│   ├── site-title.md              # Site Title block ✅
│   ├── site-tagline.md            # Site Tagline block ✅
│   ├── template-part.md           # Template Part block ✅
│   ├── query-loop.md              # Query Loop block
│   ├── post-template.md           # Post Template block
│   ├── avatar.md                  # Avatar block
│   ├── title.md                   # Title block
│   ├── excerpt.md                 # Excerpt block
│   └── comments.md                # Comments block
│
├── embed/                         # Embed blocks
│   ├── README.md                  # Embed blocks overview
│   ├── embed.md                   # Generic Embed block
│   ├── twitter.md                 # X (Twitter) embed
│   ├── youtube.md                 # YouTube embed
│   ├── wordpress.md               # WordPress embed
│   └── vimeo.md                   # Vimeo embed
│
└── woocommerce/                   # WooCommerce blocks
    ├── README.md                  # WooCommerce overview
    ├── product-grid.md            # Product Grid block
    ├── product-details.md         # Product Details block
    ├── add-to-cart.md             # Add to Cart block
    ├── cart.md                    # Cart block
    ├── checkout.md                # Checkout block
    └── mini-cart.md               # Mini Cart block
```

## 🎯 Quick Navigation

### By Category

**Text Blocks:**
- [Paragraph](./text/paragraph.md) - Standard text content
- [Heading](./text/heading.md) - H1-H6 headings with design system typography
- [List](./text/list.md) - Ordered and unordered lists
- [Quote](./text/quote.md) - Blockquotes and pullquotes
- [Table](./text/table.md) - Data tables

**Media Blocks:**
- [Image](./media/image.md) - Images with lazy loading and responsive
- [Gallery](./media/gallery.md) - Image galleries
- [Cover](./media/cover.md) - Cover/hero images with overlay
- [Video](./media/video.md) - Video embeds

**Design Blocks:**
- [Accordion](./design/Accordion.md) ✅ - Collapsible content sections
- [Buttons](./design/buttons.md) ✅ - Button groups with design system styles
- [Columns](./design/columns.md) ✅ - Multi-column layouts
- [Group](./design/group.md) ✅ - Container for grouping blocks
- [Row](./design/row.md) ✅ - Horizontal flex layout
- [Stack](./design/stack.md) ✅ - Vertical flex layout
- [Grid](./design/grid.md) ✅ - CSS Grid layout

**Theme Blocks:**
- [Navigation](./theme/navigation.md) ✅ - Site navigation with mega menus
- [Site Logo](./theme/site-logo.md) ✅ - Site logo with automatic theme switching
- [Site Title](./theme/site-title.md) ✅ - Site title
- [Site Tagline](./theme/site-tagline.md) ✅ - Site tagline
- [Search](./theme/search.md) ✅ - Search form
- [Template Part](./theme/template-part.md) ✅ - Reusable template parts

**WooCommerce Blocks:**
- [Product Grid](./woocommerce/product-grid.md) - Product listings
- [Product Details](./woocommerce/product-details.md) - Single product display
- [Add to Cart](./woocommerce/add-to-cart.md) - Add to cart button
- [Cart](./woocommerce/cart.md) - Shopping cart
- [Checkout](./woocommerce/checkout.md) - Checkout flow

## 📖 How to Use These Guidelines

### For AI Agents

**BEFORE creating ANY block component:**

1. **Read the category README first:**
   - Text block? → Read `/guidelines/blocks/text/README.md`
   - Media block? → Read `/guidelines/blocks/media/README.md`
   - Design block? → Read `/guidelines/blocks/design/README.md`
   - Widget block? → Read `/guidelines/blocks/widgets/README.md`
   - Theme block? → Read `/guidelines/blocks/theme/README.md`
   - Embed block? → Read `/guidelines/blocks/embed/README.md`
   - WooCommerce? → Read `/guidelines/blocks/woocommerce/README.md`

2. **Read the specific block guideline:**
   - Creating Paragraph? → Read `/guidelines/blocks/text/paragraph.md`
   - Creating Image? → Read `/guidelines/blocks/media/image.md`
   - Creating Buttons? → Read `/guidelines/blocks/design/buttons.md`

3. **Understand the block-specific CSS file structure:**
   - Each block should have its own CSS file
   - Located in `/src/styles/blocks/{category}/{block-name}.css`
   - Uses CSS variables from design system
   - Maps to WordPress block classes

### For Developers

1. **Component Location:**
   - All block components in `/src/app/components/blocks/{category}/`
   - Example: `/src/app/components/blocks/design/Buttons.tsx`

2. **CSS File Location:**
   - All block CSS in `/src/styles/blocks/{category}/{block-name}.css`
   - Example: `/src/styles/blocks/design/buttons.css`

3. **Import Pattern:**
   ```tsx
   import { Buttons } from '@/app/components/blocks/design/Buttons';
   import '@/styles/blocks/design/buttons.css';
   ```

## 🎨 Design System Integration

All blocks MUST use:

1. **CSS Variables:**
   - Colors: `var(--primary)`, `var(--foreground)`, etc.
   - Spacing: `var(--spacing-4)`, `var(--spacing-6)`, etc.
   - Typography: `var(--text-h1)`, `var(--text-base)`, etc.
   - Fonts: `var(--font-primary)`, `var(--font-secondary)`

2. **WordPress Utility Classes:**
   - Layout: `.wp-grid-3-cols`, `.wp-max-w-6xl`
   - Text: `.wp-text-center`, `.wp-text-left`
   - NEVER use Tailwind classes

3. **Block-Specific CSS:**
   - Each block has dedicated CSS file
   - Uses WordPress block class naming: `.wp-block-{name}`
   - All styling centralized in CSS files

## ✅ Block Creation Checklist

Before creating a block component:

- [ ] Read category README
- [ ] Read specific block guideline
- [ ] Create component in `/src/app/components/blocks/{category}/`
- [ ] Create CSS file in `/src/styles/blocks/{category}/{block-name}.css`
- [ ] Use ONLY CSS variables (no hardcoded values)
- [ ] Use ONLY WordPress utility classes (no Tailwind)
- [ ] Use ONLY approved fonts (var(--font-primary) or var(--font-secondary))
- [ ] Add JSDoc documentation
- [ ] Add TypeScript types
- [ ] Add accessibility attributes (ARIA, roles)
- [ ] Test keyboard navigation
- [ ] Test screen reader announcements
- [ ] Verify WCAG 2.1 AA compliance

## 🚀 Quick Start

### Creating a New Block Component

1. **Read the guidelines:**
   ```bash
   # Example: Creating a Quote block
   # 1. Read /guidelines/blocks/text/README.md
   # 2. Read /guidelines/blocks/text/quote.md
   ```

2. **Create the component:**
   ```tsx
   // /src/app/components/blocks/text/Quote.tsx
   import '@/styles/blocks/text/quote.css';

   interface QuoteProps {
     content: string;
     cite?: string;
     className?: string;
   }

   export const Quote = ({ content, cite, className = '' }: QuoteProps) => {
     return (
       <blockquote className={`wp-block-quote ${className}`}>
         <p>{content}</p>
         {cite && <cite>{cite}</cite>}
       </blockquote>
     );
   };
   ```

3. **Create the CSS file:**
   ```css
   /* /src/styles/blocks/text/quote.css */
   .wp-block-quote {
     padding: var(--spacing-6);
     border-left: 4px solid var(--primary);
     background: var(--background-subtle);
     font-family: var(--font-primary);
     font-size: var(--text-lg);
     color: var(--foreground);
   }

   .wp-block-quote cite {
     display: block;
     margin-top: var(--spacing-4);
     font-family: var(--font-secondary);
     font-size: var(--text-sm);
     color: var(--foreground-subtle);
   }
   ```

4. **Import and use:**
   ```tsx
   import { Quote } from '@/app/components/blocks/text/Quote';

   <Quote 
     content="Design systems enable teams to build better products faster."
     cite="LSX Design Team"
   />
   ```

## 🔍 Finding Blocks

### By WordPress Category

- **Text:** [/guidelines/blocks/text/](./text/)
- **Media:** [/guidelines/blocks/media/](./media/)
- **Design:** [/guidelines/blocks/design/](./design/)
- **Widgets:** [/guidelines/blocks/widgets/](./widgets/)
- **Theme:** [/guidelines/blocks/theme/](./theme/)
- **Embed:** [/guidelines/blocks/embed/](./embed/)

### By Functionality

- **Layout:** Columns, Grid, Row, Stack, Group
- **Content:** Paragraph, Heading, List, Quote
- **Navigation:** Navigation, Search, Breadcrumbs
- **Media:** Image, Gallery, Video, Cover
- **E-commerce:** Product Grid, Cart, Checkout (WooCommerce)

## 📚 Related Documentation

- **[Overview Blocks](./overview-blocks.md)** - Core blocks system overview
- **[Component API Reference](./COMPONENT-API-REFERENCE.md)** - Complete API docs
- **[Quick Reference Card](./QUICK-REFERENCE-CARD.md)** - Quick reference guide
- **[Design System](../design-system/design-system-usage-guide.md)** - Design tokens
- **[Patterns](../patterns/overview-patterns.md)** - Block patterns
- **[Main Guidelines](../Guidelines.md)** - System principles

## 🎯 Status Legend

- ✅ **Complete** - Guideline written, component implemented
- 🚧 **In Progress** - Guideline being written
- 📝 **Planned** - On roadmap, not started

## 📝 Contributing

When adding new block guidelines:

1. Create guideline in appropriate category folder
2. Follow the template structure (see existing blocks)
3. Include CSS file structure
4. Add WordPress mapping
5. Include accessibility requirements
6. Update this README with link
7. Update category README

---

**Last Updated:** January 22, 2025  
**System Version:** 2.0  
**WordPress Compatibility:** FSE (Full Site Editing) + WooCommerce
