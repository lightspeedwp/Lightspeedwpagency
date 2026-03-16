# Build Rules — Examples, Checklist & Anti-Patterns

**Category:** Development  
**Version:** 1.3.0  
**Last Updated:** 2026-03-15  
**Status:** Active  
**Parent:** [build-rules.md](../build-rules.md)  

---

## Examples

### Example 1: Building a Service Page

```tsx
// Composed from patterns
<ServiceTemplate>
  <ServiceHero title="WordPress Development" subtitle="Custom block themes" />
  <ServiceFeatures features={wpFeatures} />
  <ServiceProcess steps={process} />
  <PortfolioGrid category="wordpress" />
  <TestimonialSection category="wordpress" />
  <PricingTable plans={wpPlans} />
  <FAQSection faqs={wpFAQs} />
  <CTASection />
</ServiceTemplate>
```

**Why Correct:** All sections are registered patterns, no custom one-off layouts, reusable across service pages.

---

### Example 2: Using Design Tokens

```tsx
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

**Why Correct:** Zero hardcoded values, users can update styling by editing CSS files.

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

```tsx
// Bad
<div style={{ padding: '24px', color: '#1a1a1a' }}>

// Good
<div style={{ padding: 'var(--spacing-6)', color: 'var(--foreground)' }}>
```

### Anti-Pattern 2: Tailwind Classes

```tsx
// Bad
<div className="grid grid-cols-3 gap-8 max-w-6xl mx-auto">

// Good
<div className="wp-grid-3-cols wp-max-w-6xl">
```

### Anti-Pattern 3: One-Off Layouts

```tsx
// Bad - Custom layout just for this page
<div className="unique-home-layout">{/* Non-reusable code */}</div>

// Good - Reusable pattern
<HeroHome {...heroData} />
```

---

## Related Guidelines

- [project-goals.md](../project-goals.md) — Project goals & success criteria
- [qa-checklist.md](../qa-checklist.md) — QA/acceptance checklist
- [accessibility.md](../accessibility.md) — Accessibility requirements
- [css-variables-overview.md](../design-tokens/css-variables-overview.md) — CSS variable system
- [writing-guidelines.md](../writing-guidelines.md) — Markdown and documentation standards

---

| Version | Date | Changes |
|---------|------|---------|
| 1.3.0 | 2026-03-15 | Split into 2 sub-files |
| 1.2.0 | 2026-03-15 | Added file size guidelines section |
| 1.0.0 | March 11, 2026 | Extracted from Guidelines.md |

---

**See also:** [rules-requirements.md](./rules-requirements.md)
