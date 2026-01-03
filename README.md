# LSX Design — WordPress Block Theme Prototype

A **structural, content-first design system** prototype for WordPress block themes. This is **NOT** a visual exploration—it validates system architecture, pattern composition, and token discipline.

---

## 🎯 Purpose

This prototype demonstrates:

- ✅ **Token-driven design** aligned with WordPress `theme.json`
- ✅ **Pattern-based composition** (no bespoke sections)
- ✅ **Accessibility-first approach** (WCAG 2.1 AA minimum)
- ✅ **WordPress-native thinking** (blocks, patterns, templates, template parts)

---

## 🏗️ System Architecture

### Design Token System

All styling uses WordPress-aligned tokens:

**Spacing:** `10, 20, 30, 40, 50, 56, 60, 64, 72, 80`  
**Typography:** `100–900` (numeric font-size scale)  
**Colors:** Semantic roles only (`primary`, `accent`, `neutral-100..900`)

**No hard-coded values.** No px. No hex.

---

## 📁 Project Structure

```
src/app/components/
├── common/              # Token enforcement layer
│   ├── Container.tsx    # Max-width wrapper (contentSize/wideSize)
│   ├── Section.tsx      # Semantic section with token spacing
│   ├── Heading.tsx      # Typography + hierarchy enforcement
│   ├── Button.tsx       # Token-driven button styles
│   ├── Logo.tsx         # Site branding
│   └── SkipLink.tsx     # Accessibility utility
│
├── parts/               # Template Parts (global chrome)
│   ├── SiteHeader.tsx   → parts/header.html
│   └── SiteFooter.tsx   → parts/footer.html
│
├── patterns/            # Block Patterns (reusable sections)
│   ├── HeroHome.tsx     → lsx-design/hero/home
│   ├── ArchiveHeader.tsx → lsx-design/header/archive
│   ├── CardGrid.tsx     → lsx-design/listing/card-grid
│   ├── CTASection.tsx   → lsx-design/cta/primary
│   ├── PaginationNav.tsx → lsx-design/nav/pagination
│   └── EmptyState.tsx   → lsx-design/state/empty
│
├── templates/           # Page Templates
│   ├── FrontPageTemplate.tsx → templates/front-page.html
│   ├── ArchiveTemplate.tsx   → templates/archive.html
│   └── SingleTemplate.tsx    → templates/single.html
│
└── ui/                  # Non-WordPress utilities
    ├── PageSwitcher.tsx  # Prototype navigation
    └── BackToTopButton.tsx # Theme enhancement script
```

---

## 📄 Page Archetypes

Every page follows a **fixed archetype** with approved pattern order:

### 1. **Front Page** (Homepage)
- Hero
- Card Grid (featured content)
- CTA Section

### 2. **Archive** (Content Hub)
- Archive Header (title, description, count)
- Card Grid (archive content)
- Pagination Navigation

### 3. **Single** (Detail Page)
- Breadcrumb
- Editorial content
- Quick Facts (meta)
- Related Content
- CTA Section

**No hybrid archetypes. No bespoke sections.**

---

## ♿ Accessibility (WCAG 2.1 AA)

### Structure
- ✅ One H1 per page
- ✅ Logical heading hierarchy
- ✅ Semantic landmarks (`<header>`, `<nav>`, `<main>`, `<footer>`)
- ✅ Skip link for keyboard navigation

### Interaction
- ✅ All interactive elements keyboard-accessible
- ✅ Visible focus states (2px accent outline)
- ✅ Minimum 44×44px touch targets
- ✅ No hover-only functionality

### Content
- ✅ Empty states have explicit messaging
- ✅ ARIA labels on navigation
- ✅ `aria-current` for pagination

---

## 🚀 Getting Started

### View the Prototype

```bash
npm install
npm run dev
```

Navigate templates using the **"View Templates"** button (bottom right).

### Available Templates

1. **Home (Front Page)** — Homepage with hero + featured destinations
2. **Archive (Destinations)** — Content hub with filtering and pagination
3. **Single (Detail Page)** — Individual destination detail

---

## 🔄 WordPress Conversion

See **[PROTOTYPE-MAPPING.md](./PROTOTYPE-MAPPING.md)** for complete conversion guide.

### Quick Reference

**Tokens** → Define in `theme.json` presets  
**Template Parts** → Convert to `parts/*.html`  
**Templates** → Convert to `templates/*.html`  
**Patterns** → Register in `patterns/*.php`

---

## 📐 Design Principles

### Non-Negotiable Rules

1. **System-first, not page-first**  
   Build reusable patterns. Pages are composed, not designed.

2. **Patterns over bespoke layouts**  
   If it can't be a pattern, it doesn't belong.

3. **Token-driven only**  
   No raw px, rem, or hex values. Use preset slugs.

4. **WordPress-native thinking**  
   Prefer core blocks. Only add custom blocks when essential.

5. **Accessibility is mandatory**  
   Keyboard operation, focus visibility, correct semantics.

---

## 🎨 What This Prototype Does NOT Do

❌ Visual exploration / brand design  
❌ Decorative styling experimentation  
❌ Bespoke page layouts  
❌ Sliders or auto-rotating carousels  
❌ Multiple competing CTAs per section

---

## 📋 Component Mapping

### WordPress Blocks (Core)
- `Container` → Core Group block (constrained)
- `Section` → Core Group block (semantic wrapper)
- `Heading` → Core Heading block
- `Button` → Core Button block
- `Logo` → Site Logo block

### Theme Utilities (Non-Block)
- `SkipLink` → Accessibility enhancement
- `BackToTopButton` → Progressive enhancement script

### Patterns (Registrable)
All components in `components/patterns/` map to WordPress block patterns with slugs like `lsx-design/{category}/{name}`.

---

## 🧪 Testing Checklist

Before considering the prototype complete:

- [ ] Every template composed from patterns only
- [ ] All spacing uses token variables
- [ ] All typography uses token variables
- [ ] All colors use semantic role tokens
- [ ] One H1 per page
- [ ] Logical heading hierarchy
- [ ] Keyboard navigation works
- [ ] Focus states visible
- [ ] Empty states provide messaging
- [ ] Long titles don't break layout

---

## 📚 Documentation

- **[Guidelines.md](./guidelines/Guidelines.md)** — Complete system guidelines
- **[PROTOTYPE-MAPPING.md](./PROTOTYPE-MAPPING.md)** — WordPress conversion guide

---

## 🛠️ Tech Stack

- **React 18** (component structure)
- **Tailwind CSS 4** (utility framework)
- **CSS Custom Properties** (WordPress token alignment)
- **TypeScript** (type safety)

---

## 📝 Notes

### Content Strategy
All content is **structural placeholder content**. It demonstrates:
- Content tolerance (long titles, missing images, varied excerpt lengths)
- Empty states (explicit messaging when content doesn't exist)
- Pattern flexibility (minimal or maximal content)

### Token Discipline
Every component enforces token usage via inline styles that reference CSS custom properties:

```tsx
style={{
  padding: 'var(--wp--preset--spacing--40)',
  fontSize: 'var(--wp--preset--font-size--600)',
  color: 'var(--wp--preset--color--primary)'
}}
```

This ensures components **cannot** use arbitrary values.

---

## 🤝 Contributing

When adding new patterns:

1. **Check the guidelines** — Does this pattern already exist?
2. **Define the WordPress equivalent** — What would this be in Gutenberg?
3. **Use tokens exclusively** — No hard-coded values
4. **Document the mapping** — Update PROTOTYPE-MAPPING.md
5. **Test accessibility** — Keyboard navigation, focus states, semantics

---

## 📄 License

This prototype is a design system validation tool for LSX Design. All patterns and components map to WordPress GPL-licensed constructs.

---

**Last Updated:** December 24, 2024  
**Version:** 1.0.0  
**WordPress Compatibility:** Block Themes (Gutenberg 15.0+)
