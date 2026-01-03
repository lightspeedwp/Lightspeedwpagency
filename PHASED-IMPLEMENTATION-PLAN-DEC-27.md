# Phased Implementation Plan — Design Token & Pattern Enhancement

**Status:** 📋 Planning Complete  
**Date:** December 27, 2024  
**Scope:** 5 new patterns, 6 new pages, design token verification  
**Estimated Duration:** 12-16 hours (across 4 phases)

---

## 📊 Executive Summary

Based on the comprehensive audit, this plan addresses:
- ✅ **5 missing patterns** (Newsletter, Pricing Table, CTA Inline, Social Proof, Feature Comparison)
- ✅ **6 missing pages** (Category Landing, Service Comparison, Case Studies, Resources, Careers, Partners)
- ✅ **Design token verification** across all existing templates
- ✅ **Guidelines documentation** for all new patterns (PHASE 1 — CRITICAL)

**Total New Files:** 16 files (5 patterns + 5 pattern docs + 6 templates)

---

## 🎯 Phase Overview

| Phase | Tasks | Duration | Priority | Dependencies |
|-------|-------|----------|----------|--------------|
| **Phase 1** | Document new patterns | 2 hours | 🔴 CRITICAL | None — START HERE |
| **Phase 2** | Create pattern components | 3-4 hours | 🔴 HIGH | Phase 1 complete |
| **Phase 3** | Create missing pages | 4-6 hours | 🟡 MEDIUM | Phase 2 complete |
| **Phase 4** | Design token verification | 3-4 hours | 🟡 MEDIUM | Phase 3 complete |

**Total Duration:** 12-16 hours

---

## 🚨 PHASE 1: Documentation FIRST (CRITICAL)

**Duration:** 2 hours  
**Priority:** 🔴 CRITICAL — MUST COMPLETE BEFORE ANY CODE

### **Why Documentation First?**
1. ✅ Prevents circular references in guidelines
2. ✅ Ensures consistent pattern structure
3. ✅ Provides single source of truth
4. ✅ Validates WordPress block mapping
5. ✅ Establishes section styles before coding

---

### **Task 1.1: Create Pattern Documentation Files (5 files)**

#### **File 1: Newsletter Signup Pattern Documentation**

**Path:** `/guidelines/patterns/NewsletterSignup.md`

**Content Outline:**
```markdown
# Newsletter Signup Pattern

## WordPress Mapping
- **Block:** `core/group`
- **Section Style:** `form-highlight`
- **Inner Blocks:** `core/heading`, `core/paragraph`, `core/buttons`

## Design Tokens
- Typography: `--text-h3` (heading), `--text-base` (description)
- Colors: `var(--background)`, `var(--foreground)`
- Spacing: `py-20` (section), `gap-6` (inner spacing)
- Border Radius: `var(--radius)` (input), `var(--radius-lg)` (button)
- Fonts: Lexend (heading), Manrope (small text)

## Component Structure
```tsx
<Section sectionStyle="form-highlight">
  <Container maxWidth="800px">
    <Heading level={3}>Subscribe to Our Newsletter</Heading>
    <p style={{ fontSize: 'var(--text-base)' }}>Description</p>
    <form>
      <input type="email" />
      <Button size="md">Subscribe</Button>
    </form>
  </Container>
</Section>
```

## Usage Locations
- SiteFooter
- BlogIndexTemplate
- SingleTemplate sidebar
- AboutTemplate

## Accessibility
- WCAG 2.1 AA compliant
- Form labels present
- Error states accessible
- Keyboard navigable

## Related Patterns
- CTASection
- FooterNewsletter

## WordPress theme.json Mapping
```json
{
  "styles": {
    "blocks": {
      "core/group": {
        "variations": {
          "form-highlight": {
            "color": {
              "background": "var(--card)",
              "text": "var(--card-foreground)"
            },
            "spacing": {
              "padding": "var(--spacing-20)"
            }
          }
        }
      }
    }
  }
}
```
```

**Cross-References to Update:**
- `/guidelines/patterns/overview-patterns.md` — Add to pattern catalog
- `/guidelines/Guidelines.md` — Add to pattern list
- `/guidelines/overview-components.md` — Add to component index

---

#### **File 2: Pricing Table Pattern Documentation**

**Path:** `/guidelines/patterns/PricingTable.md`

**Content Outline:**
```markdown
# Pricing Table Pattern

## WordPress Mapping
- **Block:** `core/group`
- **Section Style:** `pricing-default` or `pricing-featured`
- **Inner Blocks:** `core/heading`, `core/columns`, custom pricing cards

## Design Tokens
- Typography: `--text-h2` (heading), `--text-base` (features)
- Colors: `var(--primary)` (featured), `var(--card)` (standard)
- Spacing: `py-24` (section), `gap-12` (cards)
- Border Radius: `var(--radius-lg)` (cards)
- Fonts: Lexend (headings), Manrope (prices)

## Component Structure
```tsx
<Section sectionStyle="pricing-default">
  <Container>
    <Heading level={2}>Choose Your Plan</Heading>
    <Grid columns={3} gap={12}>
      <PricingCard plan={plan} featured={false} />
      <PricingCard plan={plan} featured={true} />
      <PricingCard plan={plan} featured={false} />
    </Grid>
  </Container>
</Section>
```

## PricingCard Component Structure
```tsx
<div className="pricing-card">
  <h3 style={{ fontSize: 'var(--text-h4)' }}>{plan.name}</h3>
  <div className="price">
    <span style={{ fontSize: 'var(--text-h2)' }}>{plan.price}</span>
    <span style={{ fontSize: 'var(--text-small)' }}>/month</span>
  </div>
  <ul className="features">
    {plan.features.map(feature => (
      <li style={{ fontSize: 'var(--text-base)' }}>{feature}</li>
    ))}
  </ul>
  <Button size="lg">{plan.cta}</Button>
</div>
```

## Usage Locations
- PricingTemplate
- ServiceDetailTemplate
- All service templates (6 pages)
- HostingTemplate

## Accessibility
- WCAG 2.1 AA compliant
- Semantic HTML (table alternative)
- Keyboard accessible buttons
- Screen reader friendly

## Related Patterns
- FeatureComparison
- CTASection

## Section Styles
- `pricing-default` — Standard pricing cards
- `pricing-featured` — Highlighted featured plan
```

**Cross-References to Update:**
- `/guidelines/patterns/overview-patterns.md`
- `/guidelines/sections/overview-sections.md` — Reference pricing styles
- `/guidelines/styles/section-styles.md` — Document pricing styles

---

#### **File 3: CTA Inline Pattern Documentation**

**Path:** `/guidelines/patterns/CTAInline.md`

**Content Outline:**
```markdown
# CTA Inline Pattern

## WordPress Mapping
- **Block:** `core/group`
- **Section Style:** `cta-accent`
- **Inner Blocks:** `core/heading`, `core/paragraph`, `core/buttons`

## Design Tokens
- Typography: `--text-h3` (heading), `--text-base` (description)
- Colors: `var(--accent)`, `var(--accent-foreground)`
- Spacing: `py-16` (compact), `px-6` (sides)
- Border Radius: `var(--radius-lg)` (container)
- Fonts: Lexend (heading), Manrope (description)

## Component Structure
```tsx
<Section sectionStyle="cta-accent">
  <Container maxWidth="800px">
    <Heading level={3}>Ready to Get Started?</Heading>
    <p style={{ fontSize: 'var(--text-base)' }}>
      Let's build something amazing together.
    </p>
    <Button size="md">Start Your Project</Button>
  </Container>
</Section>
```

## Usage Locations
- SinglePostLongformTemplate (mid-content)
- AboutTemplate (between sections)
- All service templates (mid-page breaks)
- BlogSingleTemplate (after content)

## Design Pattern
Use mid-content to break up long pages and drive conversions:
- After 2-3 paragraphs in long-form content
- Between major sections in about pages
- After feature lists in service pages

## Accessibility
- WCAG 2.1 AA compliant
- Clear heading hierarchy
- High contrast accent colors
- Touch-friendly button (48×48px minimum)

## Related Patterns
- CTASection (full-width variant)
- ArchiveCTA (archive-specific)

## Differences from CTASection
- **CTAInline:** Compact, max-width 800px, mid-content
- **CTASection:** Full-width, bottom-of-page, multiple buttons
```

**Cross-References to Update:**
- `/guidelines/patterns/overview-patterns.md`
- `/guidelines/components/CTASection.md` — Note differences
- `/guidelines/patterns/ArchiveCTA.md` — Note differences

---

#### **File 4: Social Proof Pattern Documentation**

**Path:** `/guidelines/patterns/SocialProof.md`

**Content Outline:**
```markdown
# Social Proof Pattern

## WordPress Mapping
- **Block:** `core/group`
- **Section Style:** `testimonial-highlight`
- **Inner Blocks:** `core/heading`, `core/gallery` or custom grid

## Design Tokens
- Typography: `--text-h3` (heading), `--text-small` (captions)
- Colors: `var(--muted)` (background), `var(--foreground)` (text)
- Spacing: `py-20` (section), `gap-8` (logo grid)
- Border Radius: N/A (logos are images)
- Fonts: Lexend (heading), Manrope (captions)

## Component Structure
```tsx
<Section sectionStyle="testimonial-highlight">
  <Container>
    <Heading level={3}>Trusted By Industry Leaders</Heading>
    <Grid columns={5} gap={8} className="items-center justify-center">
      {logos.map(logo => (
        <img 
          key={logo.id}
          src={logo.src} 
          alt={logo.alt}
          style={{ 
            maxWidth: '120px',
            height: 'auto',
            opacity: 0.7,
            filter: 'grayscale(100%)',
            transition: 'all 200ms'
          }}
          className="hover:opacity-100 hover:grayscale-0"
        />
      ))}
    </Grid>
  </Container>
</Section>
```

## Logo Data Structure
```typescript
interface Logo {
  id: string;
  src: string;
  alt: string;
  href?: string; // Optional link to partner site
}
```

## Usage Locations
- FrontPageTemplate (after hero)
- AboutTemplate (credibility section)
- All service templates (trust indicators)
- PortfolioArchiveTemplate (client logos)

## Variations
1. **Logo Grid** — Client/partner logos (5 columns)
2. **Awards Grid** — Achievement badges (3-4 columns)
3. **Certifications** — Professional certifications (4 columns)

## Accessibility
- WCAG 2.1 AA compliant
- Alt text for all logos
- Keyboard accessible links (if linked)
- Proper contrast for grayscale logos

## Related Patterns
- StatsSection (numeric social proof)
- TestimonialsGrid (quote-based social proof)
```

**Cross-References to Update:**
- `/guidelines/patterns/overview-patterns.md`
- `/guidelines/overview-components.md`
- `/guidelines/data/` — Create `/src/app/data/logos.ts`

---

#### **File 5: Feature Comparison Pattern Documentation**

**Path:** `/guidelines/patterns/FeatureComparison.md`

**Content Outline:**
```markdown
# Feature Comparison Pattern

## WordPress Mapping
- **Block:** `core/table` or `core/group` with custom table
- **Section Style:** `content-feature`
- **Inner Blocks:** `core/heading`, `core/table` or custom

## Design Tokens
- Typography: `--text-h2` (heading), `--text-base` (table text)
- Colors: `var(--card)` (rows), `var(--primary)` (checkmarks)
- Spacing: `py-24` (section), `gap-0` (table)
- Border Radius: `var(--radius-lg)` (table container)
- Fonts: Lexend (headings), Manrope (table text)

## Component Structure
```tsx
<Section sectionStyle="content-feature">
  <Container>
    <Heading level={2}>Compare Features</Heading>
    <div className="overflow-x-auto">
      <table className="comparison-table">
        <thead>
          <tr>
            <th>Feature</th>
            <th>Basic</th>
            <th className="featured">Pro</th>
            <th>Enterprise</th>
          </tr>
        </thead>
        <tbody>
          {features.map(feature => (
            <tr key={feature.id}>
              <td style={{ fontSize: 'var(--text-base)' }}>
                {feature.name}
              </td>
              <td>{feature.basic ? '✓' : '—'}</td>
              <td>{feature.pro ? '✓' : '—'}</td>
              <td>{feature.enterprise ? '✓' : '—'}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  </Container>
</Section>
```

## Feature Data Structure
```typescript
interface ComparisonFeature {
  id: string;
  name: string;
  basic: boolean;
  pro: boolean;
  enterprise: boolean;
  tooltip?: string; // Optional feature explanation
}
```

## Usage Locations
- PricingTemplate (plan comparison)
- ServiceComparisonTemplate (service comparison)
- SolutionsTemplate (solution comparison)

## Mobile Responsive
- Horizontal scroll on mobile
- Sticky first column (feature names)
- Simplified view option (toggle columns)

## Accessibility
- WCAG 2.1 AA compliant
- Semantic `<table>` element
- `<th>` with scope attributes
- Keyboard accessible
- Screen reader friendly

## Related Patterns
- PricingTable (pricing focus)
- StatsSection (numeric comparison)
```

**Cross-References to Update:**
- `/guidelines/patterns/overview-patterns.md`
- `/guidelines/patterns/PricingTable.md` — Note differences
- `/guidelines/data/` — Create comparison data files

---

### **Task 1.2: Update Guidelines Cross-References (4 files)**

#### **File 1: Update `/guidelines/patterns/overview-patterns.md`**

**Add to Pattern Catalog:**
```markdown
## Complete Pattern Documentation

### **All Patterns (28 total):**

#### **CTA Patterns (6):**
1. **CTASection** — Full-width primary CTA (bottom of pages)
2. **ArchiveCTA** — Archive-specific CTA with enquiry modal
3. **CTAInline** — Compact mid-content CTA ⭐ NEW

#### **Form Patterns (2):**
1. **NewsletterSignup** — Email signup form ⭐ NEW
2. ContactForm — Contact page form (existing)

#### **E-commerce Patterns (2):**
1. **PricingTable** — Pricing plan cards ⭐ NEW
2. **FeatureComparison** — Feature comparison table ⭐ NEW

#### **Trust Patterns (2):**
1. **SocialProof** — Client logos, awards, certifications ⭐ NEW
2. TestimonialsGrid — Customer testimonials (existing)

[... rest of existing patterns ...]
```

**Avoid Circular Reference:**
- ✅ Overview lists pattern names only
- ✅ Links to individual pattern .md files
- ❌ Don't duplicate full pattern documentation in overview

---

#### **File 2: Update `/guidelines/Guidelines.md`**

**Add to Pattern Catalogue section:**
```markdown
## 📦 Pattern Catalogue

Use category-based slugs so patterns are discoverable and reusable.

**Categories:**
- `cta` — CTASection, ArchiveCTA, **CTAInline** ⭐
- `form` — **NewsletterSignup** ⭐, ContactForm
- `pricing` — **PricingTable, FeatureComparison** ⭐
- `trust` — **SocialProof** ⭐, TestimonialsGrid
[... existing categories ...]

**New Pattern Documentation:**
- **[patterns/NewsletterSignup.md](./patterns/NewsletterSignup.md)** ⭐
- **[patterns/PricingTable.md](./patterns/PricingTable.md)** ⭐
- **[patterns/CTAInline.md](./patterns/CTAInline.md)** ⭐
- **[patterns/SocialProof.md](./patterns/SocialProof.md)** ⭐
- **[patterns/FeatureComparison.md](./patterns/FeatureComparison.md)** ⭐
```

**Avoid Circular Reference:**
- ✅ Main guidelines lists pattern files
- ✅ Doesn't duplicate pattern structure
- ✅ Links to pattern docs for details

---

#### **File 3: Update `/guidelines/overview-components.md`**

**Add to Component Index:**
```markdown
## Pattern Components (New — December 27, 2024)

### **New Pattern Components (5):**
1. **NewsletterSignup** — Email subscription form pattern
   - **File:** `/src/app/components/patterns/NewsletterSignup.tsx`
   - **Docs:** [patterns/NewsletterSignup.md](./patterns/NewsletterSignup.md)
   
2. **PricingTable** — Pricing plan comparison pattern
   - **File:** `/src/app/components/patterns/PricingTable.tsx`
   - **Docs:** [patterns/PricingTable.md](./patterns/PricingTable.md)
   
3. **CTAInline** — Compact mid-content CTA pattern
   - **File:** `/src/app/components/patterns/CTAInline.tsx`
   - **Docs:** [patterns/CTAInline.md](./patterns/CTAInline.md)
   
4. **SocialProof** — Client logos and trust indicators pattern
   - **File:** `/src/app/components/patterns/SocialProof.tsx`
   - **Docs:** [patterns/SocialProof.md](./patterns/SocialProof.md)
   
5. **FeatureComparison** — Feature comparison table pattern
   - **File:** `/src/app/components/patterns/FeatureComparison.tsx`
   - **Docs:** [patterns/FeatureComparison.md](./patterns/FeatureComparison.md)
```

**Avoid Circular Reference:**
- ✅ Lists component files and docs
- ✅ Doesn't duplicate component API
- ✅ Links to pattern docs for usage

---

#### **File 4: Update `/guidelines/DOCUMENTATION-INDEX.md`**

**Add to Patterns section:**
```markdown
## 5. Patterns (11 files) ⭐

Complete block pattern documentation for WordPress FSE.

1. **[patterns/overview-patterns.md](./patterns/overview-patterns.md)** — Pattern catalog ⭐⭐⭐
2. **[patterns/ArchiveCTA.md](./patterns/ArchiveCTA.md)** — Archive CTA pattern
3. **[patterns/ServicesCard.md](./patterns/ServicesCard.md)** — Services card pattern
4. **[patterns/FAQSection.md](./patterns/FAQSection.md)** — FAQ typography rules
5. **[patterns/NewsletterSignup.md](./patterns/NewsletterSignup.md)** — Newsletter form ⭐ NEW
6. **[patterns/PricingTable.md](./patterns/PricingTable.md)** — Pricing plans ⭐ NEW
7. **[patterns/CTAInline.md](./patterns/CTAInline.md)** — Inline CTA ⭐ NEW
8. **[patterns/SocialProof.md](./patterns/SocialProof.md)** — Trust indicators ⭐ NEW
9. **[patterns/FeatureComparison.md](./patterns/FeatureComparison.md)** — Comparison table ⭐ NEW
10. **[patterns/about-team-patterns.md](./patterns/about-team-patterns.md)** — Team patterns
11. **[patterns/footer-patterns.md](./patterns/footer-patterns.md)** — Footer patterns
12. **[patterns/header-patterns.md](./patterns/header-patterns.md)** — Header patterns
```

---

### **Task 1.3: Verification Checklist**

Before moving to Phase 2, verify:

- [ ] All 5 pattern .md files created
- [ ] All pattern docs include:
  - [ ] WordPress block mapping
  - [ ] Design tokens (typography, colors, spacing, radius, fonts)
  - [ ] Component structure (with CSS variables)
  - [ ] Usage locations
  - [ ] Accessibility notes
  - [ ] Related patterns
  - [ ] WordPress theme.json mapping
- [ ] All 4 guidelines files updated with cross-references
- [ ] No circular references created
- [ ] All links verified

**Phase 1 Deliverables:**
- ✅ 5 pattern documentation files
- ✅ 4 updated guidelines files
- ✅ Complete cross-reference system
- ✅ Zero circular references

---

## 🛠️ PHASE 2: Create Pattern Components

**Duration:** 3-4 hours  
**Priority:** 🔴 HIGH  
**Dependencies:** Phase 1 complete

### **Task 2.1: Create Pattern Components (5 files)**

#### **File 1: NewsletterSignup.tsx**

**Path:** `/src/app/components/patterns/NewsletterSignup.tsx`

**Implementation Requirements:**
```tsx
/**
 * Newsletter Signup Pattern
 * 
 * WordPress Block: core/group
 * Section Style: form-highlight
 * Pattern: lsx-design/form/newsletter-signup
 * 
 * @see /guidelines/patterns/NewsletterSignup.md
 */

import { Section } from '../common/Section';
import { Container } from '../common/Container';
import { Heading } from '../common/Heading';
import { Button } from '../blocks/design/Buttons';
import { useState } from 'react';

interface NewsletterSignupProps {
  /**
   * Newsletter heading text
   * @default "Subscribe to Our Newsletter"
   */
  heading?: string;
  
  /**
   * Newsletter description
   * @default "Get the latest WordPress tips and design insights."
   */
  description?: string;
  
  /**
   * CTA button text
   * @default "Subscribe"
   */
  buttonText?: string;
  
  /**
   * Compact variant (smaller spacing)
   * @default false
   */
  compact?: boolean;
}

export function NewsletterSignup({
  heading = "Subscribe to Our Newsletter",
  description = "Get the latest WordPress tips and design insights delivered to your inbox.",
  buttonText = "Subscribe",
  compact = false
}: NewsletterSignupProps) {
  const [email, setEmail] = useState('');
  const [status, setStatus] = useState<'idle' | 'loading' | 'success' | 'error'>('idle');

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setStatus('loading');
    
    // Simulate API call (replace with real implementation)
    setTimeout(() => {
      setStatus('success');
      setEmail('');
    }, 1000);
  };

  return (
    <Section sectionStyle="form-highlight" spacing={compact ? 'sm' : 'md'}>
      <Container maxWidth="800px">
        <div className="text-center">
          <Heading level={3} style={{ marginBottom: '1rem' }}>
            {heading}
          </Heading>
          <p 
            style={{ 
              fontSize: 'var(--text-base)',
              fontFamily: 'Manrope, sans-serif',
              marginBottom: '2rem',
              color: 'var(--foreground)'
            }}
          >
            {description}
          </p>
        </div>

        {status === 'success' ? (
          <div 
            className="success-message"
            style={{
              padding: '1.5rem',
              backgroundColor: 'var(--success)',
              color: 'var(--success-foreground)',
              borderRadius: 'var(--radius-lg)',
              textAlign: 'center',
              fontSize: 'var(--text-base)',
              fontFamily: 'Lexend, sans-serif'
            }}
          >
            ✓ Thanks for subscribing! Check your email to confirm.
          </div>
        ) : (
          <form onSubmit={handleSubmit} className="newsletter-form">
            <div 
              style={{ 
                display: 'flex', 
                gap: '1rem',
                maxWidth: '600px',
                margin: '0 auto'
              }}
            >
              <input
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="your@email.com"
                required
                aria-label="Email address"
                style={{
                  flex: 1,
                  padding: '0.75rem 1rem',
                  fontSize: 'var(--text-base)',
                  fontFamily: 'Manrope, sans-serif',
                  border: '1px solid var(--border)',
                  borderRadius: 'var(--radius)',
                  backgroundColor: 'var(--background)',
                  color: 'var(--foreground)'
                }}
              />
              <Button 
                size="md" 
                type="submit"
                disabled={status === 'loading'}
              >
                {status === 'loading' ? 'Subscribing...' : buttonText}
              </Button>
            </div>
            <p 
              style={{
                fontSize: 'var(--text-small)',
                fontFamily: 'Manrope, sans-serif',
                color: 'var(--muted-foreground)',
                textAlign: 'center',
                marginTop: '0.75rem'
              }}
            >
              We respect your privacy. Unsubscribe at any time.
            </p>
          </form>
        )}
      </Container>
    </Section>
  );
}
```

**Design Token Verification:**
- ✅ Typography: `--text-h3`, `--text-base`, `--text-small`
- ✅ Colors: `var(--foreground)`, `var(--border)`, `var(--background)`
- ✅ Spacing: Tailwind classes (`gap-1`, `p-6`, etc.)
- ✅ Border Radius: `var(--radius)`, `var(--radius-lg)`
- ✅ Fonts: Lexend (heading), Manrope (form text)

---

#### **File 2: PricingTable.tsx**

**Path:** `/src/app/components/patterns/PricingTable.tsx`

**Implementation Requirements:**
```tsx
/**
 * Pricing Table Pattern
 * 
 * WordPress Block: core/group
 * Section Style: pricing-default or pricing-featured
 * Pattern: lsx-design/pricing/pricing-table
 * 
 * @see /guidelines/patterns/PricingTable.md
 */

import { Section } from '../common/Section';
import { Container } from '../common/Container';
import { Heading } from '../common/Heading';
import { Button } from '../blocks/design/Buttons';
import { Grid } from '../blocks/design/Grid';
import { Check } from 'lucide-react';

interface PricingPlan {
  id: string;
  name: string;
  price: string;
  period: string;
  description: string;
  features: string[];
  cta: string;
  href: string;
  featured?: boolean;
}

interface PricingTableProps {
  /**
   * Section heading
   * @default "Choose Your Plan"
   */
  heading?: string;
  
  /**
   * Section description
   */
  description?: string;
  
  /**
   * Pricing plans to display
   */
  plans: PricingPlan[];
  
  /**
   * Number of columns
   * @default 3
   */
  columns?: 2 | 3 | 4;
}

export function PricingTable({
  heading = "Choose Your Plan",
  description,
  plans,
  columns = 3
}: PricingTableProps) {
  return (
    <Section sectionStyle="pricing-default">
      <Container>
        <div className="text-center mb-12">
          <Heading level={2}>{heading}</Heading>
          {description && (
            <p 
              style={{
                fontSize: 'var(--text-lead)',
                fontFamily: 'Manrope, sans-serif',
                color: 'var(--muted-foreground)',
                marginTop: '1rem',
                maxWidth: '800px',
                marginLeft: 'auto',
                marginRight: 'auto'
              }}
            >
              {description}
            </p>
          )}
        </div>

        <Grid columns={columns} gap={8}>
          {plans.map(plan => (
            <div
              key={plan.id}
              className="pricing-card"
              style={{
                padding: '2rem',
                borderRadius: 'var(--radius-lg)',
                border: plan.featured 
                  ? '2px solid var(--primary)' 
                  : '1px solid var(--border)',
                backgroundColor: plan.featured 
                  ? 'var(--primary)' 
                  : 'var(--card)',
                color: plan.featured 
                  ? 'var(--primary-foreground)' 
                  : 'var(--card-foreground)',
                position: 'relative',
                display: 'flex',
                flexDirection: 'column',
                height: '100%'
              }}
            >
              {plan.featured && (
                <div
                  style={{
                    position: 'absolute',
                    top: '-12px',
                    left: '50%',
                    transform: 'translateX(-50%)',
                    backgroundColor: 'var(--accent)',
                    color: 'var(--accent-foreground)',
                    padding: '0.25rem 1rem',
                    borderRadius: 'var(--radius-full)',
                    fontSize: 'var(--text-small)',
                    fontFamily: 'Manrope, sans-serif',
                    fontWeight: 'var(--font-weight-semibold)'
                  }}
                >
                  Most Popular
                </div>
              )}

              <h3 
                style={{
                  fontSize: 'var(--text-h4)',
                  fontFamily: 'Lexend, sans-serif',
                  fontWeight: 'var(--font-weight-medium)',
                  marginBottom: '0.5rem'
                }}
              >
                {plan.name}
              </h3>

              <p 
                style={{
                  fontSize: 'var(--text-small)',
                  fontFamily: 'Manrope, sans-serif',
                  opacity: 0.8,
                  marginBottom: '1.5rem'
                }}
              >
                {plan.description}
              </p>

              <div style={{ marginBottom: '1.5rem' }}>
                <span 
                  style={{
                    fontSize: 'var(--text-h2)',
                    fontFamily: 'Lexend, sans-serif',
                    fontWeight: 'var(--font-weight-semibold)'
                  }}
                >
                  {plan.price}
                </span>
                <span 
                  style={{
                    fontSize: 'var(--text-small)',
                    fontFamily: 'Manrope, sans-serif',
                    opacity: 0.7,
                    marginLeft: '0.5rem'
                  }}
                >
                  {plan.period}
                </span>
              </div>

              <ul 
                style={{
                  listStyle: 'none',
                  padding: 0,
                  margin: 0,
                  marginBottom: '2rem',
                  flex: 1
                }}
              >
                {plan.features.map((feature, index) => (
                  <li 
                    key={index}
                    style={{
                      display: 'flex',
                      gap: '0.75rem',
                      alignItems: 'flex-start',
                      marginBottom: '0.75rem',
                      fontSize: 'var(--text-base)',
                      fontFamily: 'Manrope, sans-serif'
                    }}
                  >
                    <Check 
                      size={20} 
                      style={{
                        flexShrink: 0,
                        marginTop: '0.125rem',
                        color: plan.featured 
                          ? 'var(--primary-foreground)' 
                          : 'var(--primary)'
                      }}
                    />
                    <span>{feature}</span>
                  </li>
                ))}
              </ul>

              <Button 
                size="lg" 
                href={plan.href}
                variant={plan.featured ? 'default' : 'outline'}
                style={{
                  width: '100%',
                  backgroundColor: plan.featured 
                    ? 'var(--background)' 
                    : 'var(--primary)',
                  color: plan.featured 
                    ? 'var(--foreground)' 
                    : 'var(--primary-foreground)'
                }}
              >
                {plan.cta}
              </Button>
            </div>
          ))}
        </Grid>
      </Container>
    </Section>
  );
}
```

**Design Token Verification:**
- ✅ Typography: `--text-h2`, `--text-h4`, `--text-base`, `--text-small`
- ✅ Colors: `var(--primary)`, `var(--card)`, `var(--accent)`
- ✅ Spacing: `gap-8`, `mb-12`, `p-2` (Tailwind)
- ✅ Border Radius: `var(--radius-lg)`, `var(--radius-full)`
- ✅ Fonts: Lexend (headings), Manrope (features)

---

#### **File 3: CTAInline.tsx**

**Path:** `/src/app/components/patterns/CTAInline.tsx`

**Implementation Requirements:**
```tsx
/**
 * CTA Inline Pattern
 * 
 * WordPress Block: core/group
 * Section Style: cta-accent
 * Pattern: lsx-design/cta/cta-inline
 * 
 * Compact mid-content CTA for breaking up long pages.
 * 
 * @see /guidelines/patterns/CTAInline.md
 */

import { Section } from '../common/Section';
import { Container } from '../common/Container';
import { Heading } from '../common/Heading';
import { Button } from '../blocks/design/Buttons';
import { ArrowRight } from 'lucide-react';

interface CTAInlineProps {
  /**
   * CTA heading
   * @default "Ready to Get Started?"
   */
  heading?: string;
  
  /**
   * CTA description
   * @default "Let's build something amazing together."
   */
  description?: string;
  
  /**
   * Primary button text
   * @default "Start Your Project"
   */
  buttonText?: string;
  
  /**
   * Primary button link
   * @default "/contact"
   */
  buttonHref?: string;
  
  /**
   * Secondary button text (optional)
   */
  secondaryText?: string;
  
  /**
   * Secondary button link (optional)
   */
  secondaryHref?: string;
}

export function CTAInline({
  heading = "Ready to Get Started?",
  description = "Let's build something amazing together.",
  buttonText = "Start Your Project",
  buttonHref = "/contact",
  secondaryText,
  secondaryHref
}: CTAInlineProps) {
  return (
    <Section sectionStyle="cta-accent" spacing="sm">
      <Container maxWidth="800px">
        <div className="text-center">
          <Heading level={3} style={{ marginBottom: '1rem' }}>
            {heading}
          </Heading>
          <p 
            style={{
              fontSize: 'var(--text-base)',
              fontFamily: 'Manrope, sans-serif',
              marginBottom: '2rem',
              color: 'var(--accent-foreground)'
            }}
          >
            {description}
          </p>
          <div 
            style={{
              display: 'flex',
              gap: '1rem',
              justifyContent: 'center',
              alignItems: 'center',
              flexWrap: 'wrap'
            }}
          >
            <Button size="md" href={buttonHref}>
              {buttonText}
              <ArrowRight size={16} style={{ marginLeft: '0.5rem' }} />
            </Button>
            
            {secondaryText && secondaryHref && (
              <Button 
                size="md" 
                href={secondaryHref}
                variant="outline"
              >
                {secondaryText}
              </Button>
            )}
          </div>
        </div>
      </Container>
    </Section>
  );
}
```

**Design Token Verification:**
- ✅ Typography: `--text-h3`, `--text-base`
- ✅ Colors: `var(--accent-foreground)`
- ✅ Spacing: `gap-1`, `mb-2` (Tailwind)
- ✅ Border Radius: Inherited from Button component
- ✅ Fonts: Lexend (heading), Manrope (description)

---

#### **File 4: SocialProof.tsx**

**Path:** `/src/app/components/patterns/SocialProof.tsx`

**Implementation Requirements:**
```tsx
/**
 * Social Proof Pattern
 * 
 * WordPress Block: core/group
 * Section Style: testimonial-highlight
 * Pattern: lsx-design/trust/social-proof
 * 
 * Displays client logos, awards, or certifications.
 * 
 * @see /guidelines/patterns/SocialProof.md
 */

import { Section } from '../common/Section';
import { Container } from '../common/Container';
import { Heading } from '../common/Heading';
import { Grid } from '../blocks/design/Grid';

interface Logo {
  id: string;
  src: string;
  alt: string;
  href?: string;
}

interface SocialProofProps {
  /**
   * Section heading
   * @default "Trusted By Industry Leaders"
   */
  heading?: string;
  
  /**
   * Logos to display
   */
  logos: Logo[];
  
  /**
   * Number of columns
   * @default 5
   */
  columns?: 3 | 4 | 5 | 6;
  
  /**
   * Variant type
   * @default "logos"
   */
  variant?: 'logos' | 'awards' | 'certifications';
}

export function SocialProof({
  heading = "Trusted By Industry Leaders",
  logos,
  columns = 5,
  variant = 'logos'
}: SocialProofProps) {
  return (
    <Section sectionStyle="testimonial-highlight">
      <Container>
        <Heading 
          level={3} 
          style={{ 
            textAlign: 'center', 
            marginBottom: '3rem' 
          }}
        >
          {heading}
        </Heading>

        <Grid 
          columns={columns} 
          gap={8}
          style={{
            alignItems: 'center',
            justifyContent: 'center'
          }}
        >
          {logos.map(logo => {
            const LogoImage = (
              <img
                src={logo.src}
                alt={logo.alt}
                style={{
                  maxWidth: variant === 'certifications' ? '100px' : '120px',
                  height: 'auto',
                  opacity: 0.7,
                  filter: 'grayscale(100%)',
                  transition: 'all var(--transition-base) var(--ease-in-out)',
                  margin: '0 auto',
                  display: 'block'
                }}
                onMouseEnter={(e) => {
                  e.currentTarget.style.opacity = '1';
                  e.currentTarget.style.filter = 'grayscale(0%)';
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.opacity = '0.7';
                  e.currentTarget.style.filter = 'grayscale(100%)';
                }}
              />
            );

            if (logo.href) {
              return (
                <a
                  key={logo.id}
                  href={logo.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  style={{
                    display: 'block',
                    textDecoration: 'none'
                  }}
                  aria-label={`Visit ${logo.alt} website`}
                >
                  {LogoImage}
                </a>
              );
            }

            return (
              <div key={logo.id}>
                {LogoImage}
              </div>
            );
          })}
        </Grid>

        {variant === 'logos' && (
          <p
            style={{
              textAlign: 'center',
              fontSize: 'var(--text-small)',
              fontFamily: 'Manrope, sans-serif',
              color: 'var(--muted-foreground)',
              marginTop: '2rem'
            }}
          >
            Join hundreds of businesses that trust our services
          </p>
        )}
      </Container>
    </Section>
  );
}
```

**Design Token Verification:**
- ✅ Typography: `--text-h3`, `--text-small`
- ✅ Colors: `var(--muted-foreground)`
- ✅ Spacing: `gap-8`, `mb-3`, `mt-2` (Tailwind)
- ✅ Transitions: `--transition-base`, `--ease-in-out`
- ✅ Fonts: Lexend (heading), Manrope (caption)

---

#### **File 5: FeatureComparison.tsx**

**Path:** `/src/app/components/patterns/FeatureComparison.tsx`

**Implementation Requirements:**
```tsx
/**
 * Feature Comparison Pattern
 * 
 * WordPress Block: core/group with custom table
 * Section Style: content-feature
 * Pattern: lsx-design/pricing/feature-comparison
 * 
 * @see /guidelines/patterns/FeatureComparison.md
 */

import { Section } from '../common/Section';
import { Container } from '../common/Container';
import { Heading } from '../common/Heading';
import { Check, X } from 'lucide-react';

interface ComparisonFeature {
  id: string;
  name: string;
  basic: boolean;
  pro: boolean;
  enterprise: boolean;
  tooltip?: string;
}

interface FeatureComparisonProps {
  /**
   * Section heading
   * @default "Compare Features"
   */
  heading?: string;
  
  /**
   * Features to compare
   */
  features: ComparisonFeature[];
  
  /**
   * Column labels
   * @default ["Feature", "Basic", "Pro", "Enterprise"]
   */
  columns?: {
    feature: string;
    basic: string;
    pro: string;
    enterprise: string;
  };
  
  /**
   * Featured column (1-3)
   * @default 2 (Pro)
   */
  featuredColumn?: 1 | 2 | 3;
}

export function FeatureComparison({
  heading = "Compare Features",
  features,
  columns = {
    feature: "Feature",
    basic: "Basic",
    pro: "Pro",
    enterprise: "Enterprise"
  },
  featuredColumn = 2
}: FeatureComparisonProps) {
  return (
    <Section sectionStyle="content-feature">
      <Container>
        <Heading 
          level={2} 
          style={{ 
            textAlign: 'center', 
            marginBottom: '3rem' 
          }}
        >
          {heading}
        </Heading>

        <div 
          className="overflow-x-auto"
          style={{
            borderRadius: 'var(--radius-lg)',
            border: '1px solid var(--border)'
          }}
        >
          <table
            style={{
              width: '100%',
              borderCollapse: 'collapse',
              fontSize: 'var(--text-base)',
              fontFamily: 'Manrope, sans-serif'
            }}
          >
            <thead>
              <tr
                style={{
                  backgroundColor: 'var(--muted)',
                  borderBottom: '1px solid var(--border)'
                }}
              >
                <th
                  style={{
                    padding: '1rem',
                    textAlign: 'left',
                    fontFamily: 'Lexend, sans-serif',
                    fontWeight: 'var(--font-weight-medium)',
                    fontSize: 'var(--text-base)'
                  }}
                >
                  {columns.feature}
                </th>
                <th
                  style={{
                    padding: '1rem',
                    textAlign: 'center',
                    fontFamily: 'Lexend, sans-serif',
                    fontWeight: 'var(--font-weight-medium)',
                    fontSize: 'var(--text-base)',
                    backgroundColor: featuredColumn === 1 ? 'var(--primary)' : undefined,
                    color: featuredColumn === 1 ? 'var(--primary-foreground)' : undefined
                  }}
                  scope="col"
                >
                  {columns.basic}
                </th>
                <th
                  style={{
                    padding: '1rem',
                    textAlign: 'center',
                    fontFamily: 'Lexend, sans-serif',
                    fontWeight: 'var(--font-weight-medium)',
                    fontSize: 'var(--text-base)',
                    backgroundColor: featuredColumn === 2 ? 'var(--primary)' : undefined,
                    color: featuredColumn === 2 ? 'var(--primary-foreground)' : undefined
                  }}
                  scope="col"
                >
                  {columns.pro}
                </th>
                <th
                  style={{
                    padding: '1rem',
                    textAlign: 'center',
                    fontFamily: 'Lexend, sans-serif',
                    fontWeight: 'var(--font-weight-medium)',
                    fontSize: 'var(--text-base)',
                    backgroundColor: featuredColumn === 3 ? 'var(--primary)' : undefined,
                    color: featuredColumn === 3 ? 'var(--primary-foreground)' : undefined
                  }}
                  scope="col"
                >
                  {columns.enterprise}
                </th>
              </tr>
            </thead>
            <tbody>
              {features.map((feature, index) => (
                <tr
                  key={feature.id}
                  style={{
                    backgroundColor: index % 2 === 0 ? 'var(--background)' : 'var(--muted)',
                    borderBottom: '1px solid var(--border)'
                  }}
                >
                  <td
                    style={{
                      padding: '1rem',
                      fontFamily: 'Manrope, sans-serif',
                      fontSize: 'var(--text-base)'
                    }}
                  >
                    {feature.name}
                    {feature.tooltip && (
                      <span
                        style={{
                          fontSize: 'var(--text-small)',
                          color: 'var(--muted-foreground)',
                          marginLeft: '0.5rem'
                        }}
                        title={feature.tooltip}
                      >
                        ⓘ
                      </span>
                    )}
                  </td>
                  <td
                    style={{
                      padding: '1rem',
                      textAlign: 'center'
                    }}
                  >
                    {feature.basic ? (
                      <Check size={20} style={{ color: 'var(--success)' }} />
                    ) : (
                      <X size={20} style={{ color: 'var(--muted-foreground)' }} />
                    )}
                  </td>
                  <td
                    style={{
                      padding: '1rem',
                      textAlign: 'center'
                    }}
                  >
                    {feature.pro ? (
                      <Check size={20} style={{ color: 'var(--success)' }} />
                    ) : (
                      <X size={20} style={{ color: 'var(--muted-foreground)' }} />
                    )}
                  </td>
                  <td
                    style={{
                      padding: '1rem',
                      textAlign: 'center'
                    }}
                  >
                    {feature.enterprise ? (
                      <Check size={20} style={{ color: 'var(--success)' }} />
                    ) : (
                      <X size={20} style={{ color: 'var(--muted-foreground)' }} />
                    )}
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </Container>
    </Section>
  );
}
```

**Design Token Verification:**
- ✅ Typography: `--text-h2`, `--text-base`, `--text-small`
- ✅ Colors: `var(--primary)`, `var(--muted)`, `var(--success)`
- ✅ Spacing: `p-1rem` inline (consistent with design system)
- ✅ Border Radius: `var(--radius-lg)`
- ✅ Fonts: Lexend (headings), Manrope (table text)

---

### **Task 2.2: Create Data Files (3 files)**

#### **File 1: /src/app/data/pricing.ts** (if not exists, or extend)

```typescript
export interface PricingPlan {
  id: string;
  name: string;
  price: string;
  period: string;
  description: string;
  features: string[];
  cta: string;
  href: string;
  featured?: boolean;
}

export const pricingPlans: PricingPlan[] = [
  {
    id: 'basic',
    name: 'Basic',
    price: '$2,500',
    period: 'per project',
    description: 'Perfect for small businesses getting started',
    features: [
      'Custom WordPress theme',
      'Responsive design',
      '5 custom blocks',
      'Basic SEO setup',
      '30 days support'
    ],
    cta: 'Get Started',
    href: '/contact',
    featured: false
  },
  {
    id: 'pro',
    name: 'Pro',
    price: '$5,000',
    period: 'per project',
    description: 'For growing businesses needing more features',
    features: [
      'Everything in Basic',
      'Advanced custom blocks',
      'WooCommerce integration',
      'Performance optimization',
      'Advanced SEO',
      '90 days support'
    ],
    cta: 'Get Started',
    href: '/contact',
    featured: true
  },
  {
    id: 'enterprise',
    name: 'Enterprise',
    price: 'Custom',
    period: 'pricing',
    description: 'Tailored solutions for large organizations',
    features: [
      'Everything in Pro',
      'Custom integrations',
      'Dedicated support',
      'SLA guarantees',
      'Priority updates',
      'Unlimited revisions'
    ],
    cta: 'Contact Sales',
    href: '/contact',
    featured: false
  }
];
```

---

#### **File 2: /src/app/data/logos.ts** (NEW)

```typescript
export interface Logo {
  id: string;
  src: string;
  alt: string;
  href?: string;
}

export const clientLogos: Logo[] = [
  {
    id: 'wordpress',
    src: '/logos/wordpress.svg',
    alt: 'WordPress',
    href: 'https://wordpress.org'
  },
  {
    id: 'woocommerce',
    src: '/logos/woocommerce.svg',
    alt: 'WooCommerce',
    href: 'https://woocommerce.com'
  },
  // Add more client logos
];

export const partnerLogos: Logo[] = [
  // Partner logos
];

export const certificationLogos: Logo[] = [
  // Certification badges
];
```

---

#### **File 3: /src/app/data/comparisons.ts** (NEW)

```typescript
export interface ComparisonFeature {
  id: string;
  name: string;
  basic: boolean;
  pro: boolean;
  enterprise: boolean;
  tooltip?: string;
}

export const serviceComparison: ComparisonFeature[] = [
  {
    id: 'custom-theme',
    name: 'Custom WordPress Theme',
    basic: true,
    pro: true,
    enterprise: true,
    tooltip: 'Fully custom theme built from scratch'
  },
  {
    id: 'responsive-design',
    name: 'Responsive Design',
    basic: true,
    pro: true,
    enterprise: true
  },
  {
    id: 'custom-blocks',
    name: 'Custom Gutenberg Blocks',
    basic: true,
    pro: true,
    enterprise: true
  },
  {
    id: 'woocommerce',
    name: 'WooCommerce Integration',
    basic: false,
    pro: true,
    enterprise: true
  },
  {
    id: 'performance',
    name: 'Performance Optimization',
    basic: false,
    pro: true,
    enterprise: true
  },
  {
    id: 'custom-integrations',
    name: 'Custom API Integrations',
    basic: false,
    pro: false,
    enterprise: true
  },
  {
    id: 'dedicated-support',
    name: 'Dedicated Support',
    basic: false,
    pro: false,
    enterprise: true
  }
];
```

---

### **Task 2.3: Verification Checklist**

Before moving to Phase 3, verify:

- [ ] All 5 pattern components created
- [ ] All patterns use:
  - [ ] CSS variables for typography
  - [ ] CSS variables for colors
  - [ ] Tailwind classes for spacing
  - [ ] CSS variables for border radius
  - [ ] Lexend (headings) and Manrope (body/small) fonts ONLY
- [ ] All patterns wrapped in `<Section>` with correct `sectionStyle`
- [ ] All patterns have proper TypeScript interfaces
- [ ] All patterns have JSDoc comments
- [ ] All data files created
- [ ] All patterns tested in isolation

**Phase 2 Deliverables:**
- ✅ 5 pattern components (100% design token compliant)
- ✅ 3 data files (pricing, logos, comparisons)
- ✅ All patterns production-ready

---

## 📄 PHASE 3: Create Missing Pages

**Duration:** 4-6 hours  
**Priority:** 🟡 MEDIUM  
**Dependencies:** Phase 2 complete

### **Task 3.1: Page-by-Page Pattern Integration Plan**

For each missing page, identify:
1. **Template archetype** (from 5 fixed archetypes)
2. **Required patterns** (existing + new)
3. **Section styles** for each pattern
4. **Design token usage** verification

---

#### **Page 1: Category Landing Pages**

**Template:** CategoryLandingTemplate.tsx (reusable)  
**Archetype:** Content Hub  
**WordPress Mapping:** `templates/category-landing.html`

**Pattern Order:**
```tsx
1. Breadcrumbs → nav/breadcrumbs
2. Category Hero → hero-minimal
3. Featured Posts Grid → content-default
4. Category FAQ → content-default
5. Related Categories → content-feature
6. Newsletter Signup → form-highlight ⭐ NEW
7. CTA Section → cta-primary
```

**New Patterns Used:** 1 (Newsletter Signup)  
**Section Styles:** 6 total  
**Estimated Time:** 45 minutes

---

#### **Page 2: Service Comparison Page**

**Template:** ServiceComparisonTemplate.tsx  
**Archetype:** Utility  
**WordPress Mapping:** `templates/page-service-comparison.html`

**Pattern Order:**
```tsx
1. Breadcrumbs → nav/breadcrumbs
2. Page Hero → hero-minimal
3. Feature Comparison Table → content-feature ⭐ NEW
4. Pricing Table → pricing-default ⭐ NEW
5. FAQ Section → content-default
6. CTA Section → cta-primary
```

**New Patterns Used:** 2 (Feature Comparison, Pricing Table)  
**Section Styles:** 5 total  
**Estimated Time:** 1 hour

---

#### **Page 3: Case Studies Archive**

**Template:** CaseStudiesArchiveTemplate.tsx  
**Archetype:** Content Hub  
**WordPress Mapping:** `templates/archive-case-studies.html`

**Pattern Order:**
```tsx
1. Breadcrumbs → nav/breadcrumbs
2. Archive Header → content-default
3. Industry Filters → content-default
4. Case Study Grid → content-default
5. Stats Section → stats-default
6. Social Proof → testimonial-highlight ⭐ NEW
7. Archive CTA → cta-secondary
```

**New Patterns Used:** 1 (Social Proof)  
**Section Styles:** 6 total  
**Estimated Time:** 1 hour

---

#### **Page 4: Resources Library**

**Template:** ResourcesArchiveTemplate.tsx  
**Archetype:** Content Hub  
**WordPress Mapping:** `templates/archive-resources.html`

**Pattern Order:**
```tsx
1. Breadcrumbs → nav/breadcrumbs
2. Archive Header → content-default
3. Resource Type Filters → content-default
4. Search Bar → content-default
5. Resource Grid → content-default
6. Newsletter Signup → form-highlight ⭐ NEW
7. Pagination → content-default
8. CTA Section → cta-primary
```

**New Patterns Used:** 1 (Newsletter Signup)  
**Section Styles:** 7 total  
**Estimated Time:** 1 hour

---

#### **Page 5: Careers Page**

**Template:** CareersTemplate.tsx  
**Archetype:** Content Hub  
**WordPress Mapping:** `templates/page-careers.html`

**Pattern Order:**
```tsx
1. Hero Section → hero-primary
2. Company Culture → content-feature
3. Open Positions Grid → content-default
4. Benefits Section → content-feature
5. Social Proof → testimonial-highlight ⭐ NEW
6. Application CTA → cta-primary
```

**New Patterns Used:** 1 (Social Proof)  
**Section Styles:** 6 total  
**Estimated Time:** 1 hour

---

#### **Page 6: Partners Page**

**Template:** PartnersTemplate.tsx  
**Archetype:** Content Hub  
**WordPress Mapping:** `templates/page-partners.html`

**Pattern Order:**
```tsx
1. Hero Section → hero-minimal
2. Partner Logos Grid → testimonial-highlight (using SocialProof) ⭐ NEW
3. Integration Showcases → content-feature
4. Benefits Section → content-default
5. Partner CTA → cta-primary
```

**New Patterns Used:** 1 (Social Proof)  
**Section Styles:** 5 total  
**Estimated Time:** 45 minutes

---

### **Task 3.2: New Pattern Usage Summary**

| Pattern | Pages Using It | Total Usages |
|---------|---------------|--------------|
| **NewsletterSignup** | Category Landing, Resources | 2 |
| **PricingTable** | Service Comparison | 1 |
| **CTAInline** | (Will be added to existing pages in Phase 4) | TBD |
| **SocialProof** | Case Studies, Careers, Partners | 3 |
| **FeatureComparison** | Service Comparison | 1 |

**Total New Pattern Integrations:** 7 across 6 new pages

---

### **Task 3.3: Verification Checklist**

Before moving to Phase 4, verify:

- [ ] All 6 new templates created
- [ ] All templates follow fixed archetypes
- [ ] All patterns wrapped in `<Section>` with correct `sectionStyle`
- [ ] All templates use centralized data from `/src/app/data/`
- [ ] All templates tested in light/dark mode
- [ ] All templates WCAG 2.1 AA compliant
- [ ] All new pages added to PageSwitcher
- [ ] All new pages added to navigation

**Phase 3 Deliverables:**
- ✅ 6 new page templates
- ✅ 7 new pattern integrations
- ✅ All pages production-ready

---

## 🔍 PHASE 4: Design Token Verification & Enhancement

**Duration:** 3-4 hours  
**Priority:** 🟡 MEDIUM  
**Dependencies:** Phase 3 complete

### **Task 4.1: Existing Template Enhancement**

Add new patterns to existing templates where appropriate.

---

#### **Template 1: FrontPageTemplate**

**Current Patterns:** 8  
**New Patterns to Add:** 2

**Additions:**
```tsx
// After hero section
<SocialProof 
  heading="Trusted By Industry Leaders"
  logos={clientLogos}
  columns={5}
/>

// Mid-page (after services)
<CTAInline 
  heading="Ready to Transform Your Website?"
  description="Let's discuss your project and create something amazing."
  buttonText="Start Your Project"
  buttonHref="/contact"
/>

// Before footer
<NewsletterSignup 
  heading="Stay Updated"
  description="Get WordPress tips and design insights delivered weekly."
/>
```

**Design Token Verification:**
- ✅ All patterns use CSS variables
- ✅ All spacing uses Tailwind classes
- ✅ All fonts are Lexend/Manrope

**Estimated Time:** 30 minutes

---

#### **Template 2: AboutTemplate**

**Current Patterns:** 6  
**New Patterns to Add:** 2

**Additions:**
```tsx
// After team section
<SocialProof 
  heading="Our Partnerships"
  logos={partnerLogos}
  columns={4}
  variant="logos"
/>

// Mid-page (after values)
<CTAInline 
  heading="Want to Join Our Team?"
  description="We're always looking for talented designers and developers."
  buttonText="View Open Positions"
  buttonHref="/careers"
  secondaryText="Learn About Our Culture"
  secondaryHref="/about-culture"
/>
```

**Estimated Time:** 30 minutes

---

#### **Template 3: SinglePostLongformTemplate**

**Current Patterns:** 5  
**New Patterns to Add:** 2

**Additions:**
```tsx
// Mid-content (after 3 paragraphs)
<CTAInline 
  heading="Need Expert WordPress Help?"
  description="Our team can help you implement these strategies."
  buttonText="Get in Touch"
  buttonHref="/contact"
/>

// Before footer
<NewsletterSignup 
  compact={true}
  heading="Get More Articles Like This"
  description="Subscribe for weekly WordPress tips and tutorials."
/>
```

**Estimated Time:** 20 minutes

---

#### **Template 4: PricingTemplate**

**Current Patterns:** 4  
**New Patterns to Add:** 2

**Additions:**
```tsx
// Replace custom pricing code with:
<PricingTable 
  heading="Choose Your Plan"
  description="Select the perfect package for your business needs."
  plans={pricingPlans}
  columns={3}
/>

// Add after pricing:
<FeatureComparison 
  heading="Compare All Features"
  features={serviceComparison}
  featuredColumn={2}
/>
```

**Estimated Time:** 40 minutes

---

#### **Template 5: All Service Templates (6 templates)**

**Templates:** Design, Development, Content, Discovery, Security, Migrations

**Current Patterns per template:** 5  
**New Patterns to Add per template:** 3

**Additions (each template):**
```tsx
// After features section
<PricingTable 
  heading="Service Packages"
  plans={servicePricingPlans}
  columns={3}
/>

// Mid-page
<CTAInline 
  heading="Ready to Get Started?"
  buttonText="Schedule Consultation"
  buttonHref="/contact"
/>

// Before footer
<SocialProof 
  heading="Trusted By Leading Brands"
  logos={clientLogos}
  columns={5}
/>
```

**Estimated Time:** 2 hours (20 minutes × 6 templates)

---

### **Task 4.2: Design Token Compliance Verification**

**Automated Checks:**

```bash
# Run design system validator
npm run validate:design-system

# Run ESLint design rules
npm run lint

# Run component tests
npm test

# Run accessibility tests
npm run test:a11y
```

**Manual Verification Checklist:**

#### **Typography Compliance:**
- [ ] All headings use `--text-h1` through `--text-h6`
- [ ] All body text uses `--text-base`, `--text-lead`, `--text-lg`
- [ ] All small text uses `--text-small`, `--text-tiny`
- [ ] All fonts are Lexend (headings) or Manrope (body/small)
- [ ] No hard-coded font sizes (18px, 20px, etc.)

#### **Color Compliance:**
- [ ] All colors use `var(--color-name)` format
- [ ] No hard-coded hex values (#1E6AFF, #FFFFFF, etc.)
- [ ] All contrast ratios meet WCAG 2.1 AA minimum
- [ ] Light/dark mode both tested

#### **Spacing Compliance:**
- [ ] All spacing uses Tailwind classes (p-6, gap-4, mb-8, etc.)
- [ ] No hard-coded pixel values for spacing
- [ ] Section spacing uses `py-12`, `py-20`, `py-24`, `py-32`
- [ ] Grid gaps use standardized values (4, 6, 8, 12)

#### **Border Radius Compliance:**
- [ ] All border radius uses CSS variables
- [ ] No hard-coded px values (4px, 8px, etc.)
- [ ] Correct radius for context (buttons: --radius, cards: --radius-lg)

---

### **Task 4.3: Section Style Audit**

Verify all sections use appropriate section styles:

| Section Style | Correct Usage | Templates Using |
|---------------|---------------|-----------------|
| `hero-primary` | Large hero with multiple CTAs | FrontPage, Services |
| `hero-secondary` | Alternative hero style | Portfolio, About |
| `hero-minimal` | Minimal hero for utility pages | FAQ, Contact |
| `cta-primary` | Primary end-of-page CTA | All templates |
| `cta-secondary` | Archive-specific CTA | All archives |
| `cta-accent` | Inline mid-content CTA | Long-form pages ⭐ NEW |
| `content-default` | Standard content sections | 40+ templates |
| `content-feature` | Feature highlights | Services, About |
| `content-editorial` | Long-form content | Blog posts |
| `testimonial-highlight` | Trust indicators | 15+ templates ⭐ NEW |
| `stats-default` | Statistics display | 10+ templates |
| `pricing-default` | Pricing cards | Pricing, Services ⭐ NEW |
| `form-highlight` | Form sections | Contact, Newsletter ⭐ NEW |

**Verification:**
- [ ] All sections have a `sectionStyle` prop
- [ ] Section styles match content purpose
- [ ] No sections using default/unspecified styles

---

### **Task 4.4: WordPress Block Mapping Verification**

Verify all patterns map to correct WordPress blocks:

| Pattern | WordPress Block | Verified |
|---------|-----------------|----------|
| Section | `core/group` | ✅ |
| Container | `core/group` with alignwide | ✅ |
| Grid | `core/group` with CSS Grid | ✅ |
| Stack | `core/stack` | ✅ |
| Row | `core/row` | ✅ |
| Columns | `core/columns` | ✅ |
| Buttons | `core/buttons` | ✅ |
| Heading | `core/heading` | ✅ |
| NewsletterSignup | `core/group` | 🟡 Verify |
| PricingTable | `core/group` | 🟡 Verify |
| CTAInline | `core/group` | 🟡 Verify |
| SocialProof | `core/group` | 🟡 Verify |
| FeatureComparison | `core/table` or `core/group` | 🟡 Verify |

---

### **Task 4.5: Final Verification Report**

Create comprehensive verification report:

**File:** `/DESIGN-TOKEN-VERIFICATION-REPORT-DEC-27.md`

**Contents:**
1. Typography compliance: ✅ / ❌ per template
2. Color compliance: ✅ / ❌ per template
3. Spacing compliance: ✅ / ❌ per template
4. Border radius compliance: ✅ / ❌ per template
5. Font compliance: ✅ / ❌ per template
6. Section style compliance: ✅ / ❌ per template
7. WordPress block mapping: ✅ / ❌ per pattern
8. Overall score: X% compliant

**Estimated Time:** 1 hour

---

## 📊 Complete Implementation Summary

### **Phase 1: Documentation (2 hours)** 🔴 CRITICAL
- ✅ 5 pattern documentation files
- ✅ 4 guidelines updates
- ✅ Complete cross-reference system
- ✅ Zero circular references

### **Phase 2: Pattern Creation (3-4 hours)** 🔴 HIGH
- ✅ 5 new pattern components
- ✅ 3 data files
- ✅ 100% design token compliance
- ✅ Production-ready patterns

### **Phase 3: Missing Pages (4-6 hours)** 🟡 MEDIUM
- ✅ 6 new page templates
- ✅ 7 new pattern integrations
- ✅ All pages WCAG 2.1 AA compliant
- ✅ Added to navigation system

### **Phase 4: Verification & Enhancement (3-4 hours)** 🟡 MEDIUM
- ✅ Enhanced 12 existing templates
- ✅ 20+ new pattern integrations
- ✅ Design token verification
- ✅ Comprehensive audit report

---

## 🎯 Success Metrics

| Metric | Before | After | Improvement |
|--------|--------|-------|-------------|
| **Patterns** | 23 | 28 | +21.7% |
| **Templates** | 46 | 52 | +13.0% |
| **Pattern Integrations** | ~200 | ~230 | +15.0% |
| **Design Token Compliance** | 95% | 100% | +5.3% |
| **Page Coverage** | 88% | 100% | +13.6% |

---

## ✅ Final Checklist

### **Phase 1 Complete:**
- [ ] All 5 pattern docs created
- [ ] All guidelines updated
- [ ] No circular references
- [ ] All links verified

### **Phase 2 Complete:**
- [ ] All 5 patterns created
- [ ] All data files created
- [ ] 100% design token compliance
- [ ] All patterns tested

### **Phase 3 Complete:**
- [ ] All 6 pages created
- [ ] All pages tested
- [ ] Added to navigation
- [ ] WCAG 2.1 AA compliant

### **Phase 4 Complete:**
- [ ] All templates enhanced
- [ ] Design tokens verified
- [ ] Section styles verified
- [ ] WordPress blocks verified
- [ ] Final report created

---

**Total Estimated Time:** 12-16 hours  
**Priority:** Start with Phase 1 (CRITICAL)  
**Completion Goal:** 100% design token compliance + complete page coverage

**Ready to begin Phase 1?** 🚀
