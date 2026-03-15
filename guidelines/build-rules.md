# Prototype Build Rules — Guidelines

**Category:** Development  
**Version:** 1.2.0  
**Last Updated:** 2026-03-15  
**Status:** Active  
**Template Used:** _templates/general-template.md  

---

## Purpose

**What:** Rules for building the LSX Design prototype

**Why:** Ensure prototype maps directly to WordPress block theme architecture

**Who:** All developers building UI components and templates

---

## Requirements

### You MAY (Allowed Actions)

- ✅ **MAY** assemble pages from approved patterns
- ✅ **MAY** use token spacing/typography to communicate hierarchy
- ✅ **MAY** omit optional patterns when content doesn't exist
- ✅ **MAY** create variations only when they map to a WordPress style variation or block style
- ✅ **MAY** use core WordPress blocks + custom LSX blocks
- ✅ **MAY** compose sections from multiple patterns
- ✅ **MAY** adjust pattern order to fit content
- ✅ **MAY** hide empty patterns (don't leave blank space)

**Rationale:** These actions align with WordPress block theme architecture and reusable pattern philosophy

---

### You MAY NOT (Prohibited Actions)

- ❌ **MAY NOT** invent new layouts that cannot be patterns
- ❌ **MAY NOT** add new tokens, fonts, or colours (use existing design system only)
- ❌ **MAY NOT** hard-code pixel/hex values (always use CSS variables)
- ❌ **MAY NOT** use sliders/carousels as a default interaction pattern
- ❌ **MAY NOT** add multiple primary CTAs per section
- ❌ **MAY NOT** create one-off custom solutions
- ❌ **MAY NOT** break WordPress block conventions
- ❌ **MAY NOT** use non-semantic HTML
- ❌ **MAY NOT** skip accessibility requirements
- ❌ **MAY NOT** hardcode font family names (use CSS variables)

**Rationale:** These actions break the pattern-based, token-driven, WordPress-compatible architecture

---

## Pattern Composition Rules

### Rule 1: Pages = Patterns

**Requirement:** All pages must be composed entirely from registered patterns

**Correct:**
```tsx
// ✅ Page composed from patterns
<HomePageTemplate>
  <HeroHome />
  <StatsGrid />
  <ServicesPreview />
  <PortfolioPreview />
  <TestimonialCarousel />
  <CTASection />
</HomePageTemplate>
```

**Incorrect:**
```tsx
// ❌ Custom one-off section
<HomePageTemplate>
  <HeroHome />
  <div className="custom-unique-section"> {/* ❌ Not a pattern! */}
    {/* One-off custom layout */}
  </div>
  <CTASection />
</HomePageTemplate>
```

---

### Rule 2: Tokens Only

**Requirement:** All styling must use CSS variables from design token system

**Correct:**
```tsx
// ✅ Using CSS variables
<div style={{
  color: 'var(--foreground)',
  backgroundColor: 'var(--background)',
  padding: 'var(--spacing-6)',
  borderRadius: 'var(--radius-lg)',
  fontFamily: 'var(--font-primary)', // ✅ CSS variable
  fontSize: 'var(--text-h2)'
}}>
```

**Incorrect:**
```tsx
// ❌ Hardcoded values
<div style={{
  color: '#1a1a1a',                // ❌ Hardcoded color
  backgroundColor: '#ffffff',       // ❌ Hardcoded color
  padding: '24px',                  // ❌ Hardcoded spacing
  borderRadius: '8px',              // ❌ Hardcoded radius
  fontFamily: 'Lexend, sans-serif', // ❌ Hardcoded font
  fontSize: '32px'                  // ❌ Hardcoded size
}}>
```

---

### Rule 3: WordPress Utilities

**Requirement:** Use WordPress utility classes (`.wp-*` prefix) for layout, NOT Tailwind

**Correct:**
```tsx
// ✅ WordPress utilities
<div className="wp-grid-3-cols">
  <div className="wp-max-w-6xl wp-text-center">
```

**Incorrect:**
```tsx
// ❌ Tailwind classes
<div className="grid grid-cols-3 gap-8">
  <div className="max-w-6xl mx-auto text-center">
```

**Why:** WordPress utilities use CSS variables, giving users complete control

---

### Rule 4: Single Primary CTA

**Requirement:** Each section should have one clear primary action

**Correct:**
```tsx
// ✅ Single primary CTA
<CTASection
  heading="Ready to Get Started?"
  primaryCTA={{ text: "Start Project", href: "/contact" }}
  secondaryCTA={{ text: "Learn More", href: "/about" }}
/>
```

**Incorrect:**
```tsx
// ❌ Multiple competing primary CTAs
<div>
  <Button variant="primary">Buy Now</Button>
  <Button variant="primary">Start Trial</Button>
  <Button variant="primary">Book Demo</Button>
</div>
```

**Why:** Multiple primary CTAs create decision paralysis

---

### Rule 5: Accessibility Non-Negotiable

**Requirement:** All accessibility requirements must be met

**Must Have:**
- [ ] Semantic HTML
- [ ] Keyboard navigation
- [ ] Focus states
- [ ] ARIA labels
- [ ] Touch targets (44x44px min)
- [ ] Color contrast (4.5:1 min)
- [ ] Reduced motion support

**See:** [accessibility.md](./accessibility.md) for complete requirements

---

## Examples

### Example 1: Building a Service Page

**Correct Approach:**
```tsx
// ✅ Composed from patterns
<ServiceTemplate>
  <ServiceHero 
    title="WordPress Development"
    subtitle="Custom block themes"
  />
  <ServiceFeatures features={wpFeatures} />
  <ServiceProcess steps={process} />
  <PortfolioGrid category="wordpress" />
  <TestimonialSection category="wordpress" />
  <PricingTable plans={wpPlans} />
  <FAQSection faqs={wpFAQs} />
  <CTASection />
</ServiceTemplate>
```

**Why Correct:**
- All sections are registered patterns
- No custom one-off layouts
- Reusable across service pages

---

### Example 2: Using Design Tokens

**Correct Approach:**
```tsx
// ✅ All styling from CSS variables
const CardComponent = ({ title, description }) => (
  <div 
    className="card"
    style={{
      backgroundColor: 'var(--card)',
      color: 'var(--card-foreground)',
      padding: 'var(--spacing-6)',
      borderRadius: 'var(--radius)',
      border: '1px solid var(--border)'
    }}
  >
    <h3 style={{
      fontFamily: 'var(--font-primary)',
      fontSize: 'var(--text-h3)',
      marginBottom: 'var(--spacing-4)'
    }}>
      {title}
    </h3>
    <p style={{
      fontFamily: 'var(--font-primary)',
      fontSize: 'var(--text-base)',
      lineHeight: 1.6
    }}>
      {description}
    </p>
  </div>
);
```

**Why Correct:**
- Zero hardcoded values
- Users can update styling by editing CSS files
- Consistent with design system

---

## Checklist

**Before creating a new component:**
- [ ] Can this be a reusable pattern?
- [ ] Does this map to a WordPress block?
- [ ] Am I using CSS variables for all styling?
- [ ] Am I using WordPress utilities (not Tailwind)?
- [ ] Have I verified accessibility requirements?
- [ ] Have I avoided hardcoding font names?

**Before committing code:**
- [ ] Zero hardcoded colors
- [ ] Zero hardcoded spacing
- [ ] Zero hardcoded typography
- [ ] Only approved fonts used
- [ ] All patterns are reusable
- [ ] Accessibility tested

---

## Anti-Patterns

### Anti-Pattern 1: Hardcoded Values

**Bad:**
```tsx
<div style={{ padding: '24px', color: '#1a1a1a' }}>
```

**Good:**
```tsx
<div style={{ padding: 'var(--spacing-6)', color: 'var(--foreground)' }}>
```

---

### Anti-Pattern 2: Tailwind Classes

**Bad:**
```tsx
<div className="grid grid-cols-3 gap-8 max-w-6xl mx-auto">
```

**Good:**
```tsx
<div className="wp-grid-3-cols wp-max-w-6xl">
```

---

### Anti-Pattern 3: One-Off Layouts

**Bad:**
```tsx
// Custom layout just for this page
<div className="unique-home-layout">
  {/* Non-reusable code */}
</div>
```

**Good:**
```tsx
// Reusable pattern
<HeroHome {...heroData} />
```

---

## Related Guidelines

**See Also:**
- [project-goals.md](./project-goals.md) - Project goals & success criteria
- [qa-checklist.md](./qa-checklist.md) - QA/acceptance checklist
- [accessibility.md](./accessibility.md) - Accessibility requirements
- [design-tokens/css-variables-overview.md](./design-tokens/css-variables-overview.md) - CSS variable system
- [writing-guidelines.md](./writing-guidelines.md) - Markdown and documentation standards

---

## File Size Guidelines (Memory Optimisation)

Large files degrade AI comprehension. Follow these limits:

| File Type | Target Max | Action If Over |
|---|---|---|
| `.css` files | 400 lines | Split into sub-files (e.g. `hero/hero-base.css`, `hero/hero-variants.css`) |
| `.tsx` components | 300 lines | Extract sub-components into separate files |
| `.ts` data files | 500 lines | Split by category (e.g. `faqs/about.ts`, `faqs/services.ts`) |
| `.md` guidelines | 350 lines | Split into sub-files with a parent index |
| `.md` reports | 500 lines | Use executive summary + appendices |

**Principle:** More smaller files > fewer large files. The AI processes small, focused files more accurately.

---

## Version History

| Version | Date | Changes |
|---------|------|---------|
| 1.2.0 | 2026-03-15 | Added file size guidelines section |
| 1.0 | March 11, 2026 | Extracted from Guidelines.md |

---

**Category:** Standards  
**Enforcement:** Required  
**Last Updated:** March 15, 2026