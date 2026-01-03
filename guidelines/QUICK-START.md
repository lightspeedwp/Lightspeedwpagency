# LSX Design System - Quick Start Guide

**Last Updated:** December 25, 2024

---

## 🚀 Get Started in 5 Minutes

### 1. Read These First (Required)

**Essential Reading Order:**
1. [Guidelines.md](./Guidelines.md) - System principles
2. [ARCHITECTURE.md](./ARCHITECTURE.md) - How the system works
3. [COMPONENT-INDEX.md](./COMPONENT-INDEX.md) - What components exist

---

## 🎨 Using the Design System

### Typography

**Only use these fonts:**
```tsx
// Primary font (everywhere)
fontFamily: 'Lexend, sans-serif'

// Secondary font (small text ONLY)
fontFamily: 'Manrope, sans-serif'
```

**Use font size variables:**
```tsx
fontSize: 'var(--text-h1)'    // 60px
fontSize: 'var(--text-h2)'    // 32px
fontSize: 'var(--text-base)'  // 16px
fontSize: 'var(--text-small)' // 12px
```

**Use font weight variables:**
```tsx
fontWeight: 'var(--font-weight-regular)'   // 400
fontWeight: 'var(--font-weight-semibold)'  // 600
```

---

### Colors

**Always use CSS variables:**
```tsx
// Surfaces
backgroundColor: 'var(--background)'
backgroundColor: 'var(--card)'

// Text
color: 'var(--foreground)'
color: 'var(--muted-foreground)'

// Interactive
backgroundColor: 'var(--primary)'
color: 'var(--primary-foreground)'

// Borders
border: '1px solid var(--border)'
border: '1px solid var(--border-soft)'
```

**Never use:**
```tsx
// ❌ DON'T
backgroundColor: '#1E6AFF'
color: 'white'
border: '1px solid rgba(0,0,0,0.1)'
```

---

### Spacing

**Use Tailwind classes:**
```tsx
className="p-6"        // padding: 24px
className="gap-4"      // gap: 16px
className="mb-8"       // margin-bottom: 32px
className="py-16"      // padding-y: 64px
```

**Common patterns:**
```tsx
// Section spacing
<Section spacing="xl">  // 80px vertical padding

// Card padding
<div className="p-6">   // 24px all sides

// Grid gaps
<div className="grid grid-cols-3 gap-6">  // 24px gap
```

---

### Border Radius

**Use CSS variables:**
```tsx
borderRadius: 'var(--radius)'      // 4px (default)
borderRadius: 'var(--radius-lg)'   // 8px (cards)
borderRadius: 'var(--radius-xl)'   // 12px (large)
```

---

### Shadows

**Use CSS variables:**
```tsx
boxShadow: 'var(--shadow-md)'      // Standard elevation
boxShadow: 'var(--shadow-lg)'      // High elevation
boxShadow: 'var(--shadow-hover)'   // Hover state
```

---

## 🧩 Common Components

### Button

```tsx
import { Button } from './components/common/Button';

// Primary button
<Button variant="primary" page="contact">
  Get Started
</Button>

// Secondary button
<Button variant="secondary" href="/about">
  Learn More
</Button>

// Outline button
<Button variant="outline" onClick={handleClick}>
  Cancel
</Button>
```

**Variants:** `primary`, `secondary`, `outline`, `ghost`, `destructive`

---

### Container

```tsx
import { Container } from './components/common/Container';

<Container maxWidth="1200px">
  Content with max-width constraint
</Container>
```

---

### Section

```tsx
import { Section } from './components/common/Section';

<Section spacing="xl" style={{ backgroundColor: 'var(--background)' }}>
  <Container>
    Section content
  </Container>
</Section>
```

**Spacing options:** `sm`, `md`, `lg`, `xl`, `2xl`

---

### Heading

```tsx
import { Heading } from './components/common/Heading';

<Heading level={1}>Page Title</Heading>
<Heading level={2}>Section Title</Heading>
```

---

## 📦 Using Patterns

### Hero Section

```tsx
import { HeroHome } from './components/patterns/HeroHome';

<HeroHome />
```

---

### Card Grid

```tsx
import { CardGrid } from './components/patterns/CardGrid';

<CardGrid 
  items={portfolioProjects}
  columns={3}
  gap={6}
/>
```

---

### CTA Section

```tsx
import { CTASection } from './components/patterns/CTASection';

<CTASection
  title="Ready to get started?"
  description="Build better WordPress sites with LSX Design"
  buttonText="Get Started"
  buttonPage="contact"
/>
```

---

### FAQ Section

```tsx
import { FAQSection } from './components/patterns/FAQSection';
import { servicesFAQs } from '../../data/faqs';

<FAQSection
  title="Frequently Asked Questions"
  description="Common questions about our services"
  faqs={servicesFAQs}
/>
```

---

## 📊 Using Centralized Data

### Import Data

```tsx
// Navigation
import { mainNavigation, footerNavigation } from '../../data/pages';

// Portfolio
import { portfolioProjects, featuredProjects } from '../../data/portfolio';

// Blog
import { blogPosts, featuredPosts } from '../../data/posts';

// FAQs
import { servicesFAQs, aboutFAQs } from '../../data/faqs';
```

### Use in Components

```tsx
<SiteHeader navigation={mainNavigation} />
<PortfolioGrid projects={featuredProjects} />
<FAQSection faqs={servicesFAQs} />
```

---

## 🎯 Building a Page Template

### Template Structure

```tsx
import { SiteHeader } from '../parts/SiteHeader';
import { SiteFooter } from '../parts/SiteFooter';
import { SkipLink } from '../common/SkipLink';
import { Section } from '../common/Section';
import { Container } from '../common/Container';
import { BackToTopButton } from '../ui/BackToTopButton';

export function MyTemplate() {
  return (
    <>
      <SkipLink />
      <SiteHeader />
      
      <main id="main-content" role="main">
        {/* Hero Section */}
        <Section spacing="2xl" style={{ backgroundColor: 'var(--background)' }}>
          <Container>
            <h1 style={{
              fontSize: 'clamp(32px, 5vw, 60px)',
              fontFamily: 'Lexend, sans-serif',
              fontWeight: 'var(--font-weight-semibold)',
              color: 'var(--foreground)'
            }}>
              Page Title
            </h1>
          </Container>
        </Section>

        {/* Content Section */}
        <Section spacing="lg" style={{ backgroundColor: 'var(--muted)' }}>
          <Container>
            <p style={{
              fontSize: 'var(--text-base)',
              fontFamily: 'Lexend, sans-serif',
              color: 'var(--foreground)',
              lineHeight: '1.7'
            }}>
              Content
            </p>
          </Container>
        </Section>

        {/* CTA Section */}
        <CTASection
          title="Get Started Today"
          buttonText="Contact Us"
          buttonPage="contact"
        />
      </main>
      
      <SiteFooter />
      <BackToTopButton />
    </>
  );
}
```

---

## 📱 Mobile Considerations

### Touch Targets

**Minimum sizes:**
- Buttons: 48×48px
- Links: 48px height
- Form inputs: 48px height

```tsx
<button style={{
  minHeight: '48px',
  padding: '12px 24px'
}}>
  Touch-friendly button
</button>
```

---

### Font Sizes

**Critical:** Use 16px minimum to prevent iOS zoom

```tsx
// ✅ GOOD
<input style={{ fontSize: 'var(--text-base)' }} /> // 16px

// ❌ BAD
<input style={{ fontSize: '14px' }} /> // Will zoom on iOS
```

---

### Input Types

```tsx
// Email
<input type="email" inputMode="email" autoComplete="email" />

// Phone
<input type="tel" inputMode="tel" autoComplete="tel" />

// Number
<input type="number" inputMode="numeric" pattern="[0-9]*" />
```

---

## 🌓 Dark Mode

### Automatic Theme Switching

**All CSS variables automatically adapt to dark mode when `.dark` class is present.**

```tsx
// No special code needed - just use CSS variables
<div style={{
  backgroundColor: 'var(--background)',  // Swaps: white → dark
  color: 'var(--foreground)'             // Swaps: dark → white
}}>
  Content works in both modes
</div>
```

---

## ✅ Checklist for New Components

Before creating a new component:

- [ ] Use CSS variables for all colors
- [ ] Use CSS variables for all typography
- [ ] Use Tailwind classes for spacing
- [ ] Use CSS variables for border-radius
- [ ] Use CSS variables for shadows
- [ ] Only use Lexend or Manrope fonts
- [ ] Touch targets ≥ 48×48px
- [ ] Test in dark mode
- [ ] Add ARIA labels where needed
- [ ] Verify keyboard navigation

---

## 📚 Additional Resources

### Must-Read Guides
- [DARK-MODE-REVIEW.md](./DARK-MODE-REVIEW.md) - Dark mode compliance
- [STYLE-VARIATIONS.md](./STYLE-VARIATIONS.md) - Component variants
- [design-patterns-modern.md](./design-patterns-modern.md) - Modern patterns

### Design Tokens
- [design-tokens/colors.md](./design-tokens/colors.md)
- [design-tokens/typography.md](./design-tokens/typography.md)
- [design-tokens/spacing.md](./design-tokens/spacing.md)
- [design-tokens/borders.md](./design-tokens/borders.md)
- [design-tokens/shadows.md](./design-tokens/shadows.md)
- [design-tokens/radii.md](./design-tokens/radii.md)

### Mobile Guidelines
- [mobile/touch-targets.md](./mobile/touch-targets.md)
- [mobile/forms.md](./mobile/forms.md)
- [mobile/navigation.md](./mobile/navigation.md)

---

## 🚫 Common Mistakes to Avoid

### ❌ DON'T

```tsx
// Hard-coded colors
backgroundColor: '#1E6AFF'

// Hard-coded spacing
padding: '24px'

// Wrong fonts
fontFamily: 'Arial, sans-serif'

// Small touch targets
<button style={{ width: '30px', height: '30px' }}>

// Small font on mobile
<input style={{ fontSize: '14px' }} />
```

### ✅ DO

```tsx
// CSS variables
backgroundColor: 'var(--primary)'

// Tailwind classes
className="p-6"

// Correct fonts
fontFamily: 'Lexend, sans-serif'

// Proper touch targets
<button style={{ minWidth: '48px', minHeight: '48px' }}>

// Proper font size
<input style={{ fontSize: 'var(--text-base)' }} />
```

---

## 💡 Pro Tips

1. **Always use CSS variables** - They work in dark mode automatically
2. **Test both modes** - Toggle dark mode when developing
3. **Use centralized data** - Import from `/src/app/data/`
4. **Follow archetypes** - Pages follow 5 fixed archetypes
5. **Mobile first** - Design for mobile, enhance for desktop
6. **Touch friendly** - 48×48px minimum for all interactive elements
7. **Verify icons** - Always check lucide-react before importing

---

## 🎓 Learning Path

### Day 1: Foundation
1. Read Guidelines.md
2. Read ARCHITECTURE.md
3. Understand design tokens

### Day 2: Components
1. Study COMPONENT-INDEX.md
2. Review common components
3. Learn pattern system

### Day 3: Templates
1. Understand page archetypes
2. Review existing templates
3. Build your first template

### Day 4: Mobile & Dark Mode
1. Read mobile guidelines
2. Test dark mode
3. Verify touch targets

### Day 5: Advanced
1. Modern design patterns
2. Style variations
3. WordPress mapping

---

## 🆘 Getting Help

### Documentation
- Check COMPONENT-INDEX.md for component list
- Reference design-tokens/ for all tokens
- Read REVIEW-COMPLETE.md for system status

### Code Examples
- Look at existing templates in `/src/app/components/templates/`
- Review patterns in `/src/app/components/patterns/`
- Check common components in `/src/app/components/common/`

---

**Last Updated:** December 25, 2024  
**Quick Start Version:** 1.0  
**System Status:** ✅ Production Ready
