# Build Rules — Requirements & Composition Rules

**Category:** Development  
**Version:** 1.3.0  
**Last Updated:** 2026-03-15  
**Status:** Active  
**Parent:** [build-rules.md](../build-rules.md)  

---

## Purpose

**What:** Rules for building the LSX Design prototype

**Why:** Ensure prototype maps directly to WordPress block theme architecture

**Who:** All developers building UI components and templates

---

## You MAY (Allowed Actions)

- MAY assemble pages from approved patterns
- MAY use token spacing/typography to communicate hierarchy
- MAY omit optional patterns when content doesn't exist
- MAY create variations only when they map to a WordPress style variation or block style
- MAY use core WordPress blocks + custom LSX blocks
- MAY compose sections from multiple patterns
- MAY adjust pattern order to fit content
- MAY hide empty patterns (don't leave blank space)

---

## You MAY NOT (Prohibited Actions)

- MAY NOT invent new layouts that cannot be patterns
- MAY NOT add new tokens, fonts, or colours (use existing design system only)
- MAY NOT hard-code pixel/hex values (always use CSS variables)
- MAY NOT use sliders/carousels as a default interaction pattern
- MAY NOT add multiple primary CTAs per section
- MAY NOT create one-off custom solutions
- MAY NOT break WordPress block conventions
- MAY NOT use non-semantic HTML
- MAY NOT skip accessibility requirements
- MAY NOT hardcode font family names (use CSS variables)

---

## Pattern Composition Rules

### Rule 1: Pages = Patterns

All pages must be composed entirely from registered patterns.

```tsx
// Correct
<HomePageTemplate>
  <HeroHome />
  <StatsGrid />
  <ServicesPreview />
  <PortfolioPreview />
  <TestimonialCarousel />
  <CTASection />
</HomePageTemplate>
```

### Rule 2: Tokens Only

All styling must use CSS variables from design token system.

```tsx
// Correct
<div style={{
  color: 'var(--foreground)',
  backgroundColor: 'var(--background)',
  padding: 'var(--spacing-6)',
  borderRadius: 'var(--radius-lg)',
  fontFamily: 'var(--font-primary)',
  fontSize: 'var(--text-h2)'
}}>
```

### Rule 3: WordPress Utilities

Use WordPress utility classes (`.wp-*` prefix) for layout, NOT Tailwind.

```tsx
// Correct
<div className="wp-grid-3-cols">
  <div className="wp-max-w-6xl wp-text-center">

// Wrong
<div className="grid grid-cols-3 gap-8">
```

### Rule 4: Single Primary CTA

Each section should have one clear primary action.

```tsx
<CTASection
  heading="Ready to Get Started?"
  primaryCTA={{ text: "Start Project", href: "/contact" }}
  secondaryCTA={{ text: "Learn More", href: "/about" }}
/>
```

### Rule 5: Accessibility Non-Negotiable

- [ ] Semantic HTML
- [ ] Keyboard navigation
- [ ] Focus states
- [ ] ARIA labels
- [ ] Touch targets (44x44px min)
- [ ] Color contrast (4.5:1 min)
- [ ] Reduced motion support

**See:** [accessibility.md](../accessibility.md)

---

## File Size Guidelines (Memory Optimisation)

| File Type | Target Max | Action If Over |
|---|---|---|
| `.css` files | 400 lines | Split into sub-files |
| `.tsx` components | 300 lines | Extract sub-components |
| `.ts` data files | 500 lines | Split by category |
| `.md` guidelines | 350 lines | Split into sub-files with a parent index |
| `.md` reports | 500 lines | Use executive summary + appendices |

**Principle:** More smaller files > fewer large files.

---

**See also:** [rules-examples.md](./rules-examples.md)
