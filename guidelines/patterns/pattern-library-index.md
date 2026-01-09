# Pattern Library Index — WordPress Blocks

**Last Updated:** January 7, 2025  
**Total Patterns:** 37  
**Status:** ✅ Production-Ready

---

## 📚 Quick Reference

This document provides a complete index of all 37 WordPress block patterns in the LSX Design system, organized by category with quick access to documentation.

---

## 🗂️ Pattern Categories

1. **Layout Patterns** (8) — Containers, grids, stacks
2. **Content Patterns** (16) — Cards, heroes, sections
3. **Typography Patterns** (6) — Headings, text, lists
4. **Interactive Patterns** (5) — Buttons, forms, hover
5. **Utility Patterns** (3) — Alignment, gaps, colors

---

## 📦 Layout Patterns (8)

### **1. wp-block-group**
**Purpose:** Main container block with flexible layout options  
**Complexity:** Low  
**CSS Lines:** 40 lines

**Usage:**
```tsx
<div className="wp-block-group is-layout-constrained">
  {/* Max-width 1280px container */}
</div>
```

**Variants:**
- `is-layout-flex` — Flexbox layout
- `is-layout-flow` — Block layout
- `is-layout-constrained` — Max-width container

**Alignment:**
- `is-vertically-aligned-top/center/bottom`
- `is-content-justification-left/center/right/space-between`

---

### **2. wp-block-columns**
**Purpose:** Multi-column grid layout  
**Complexity:** Low  
**CSS Lines:** 35 lines

**Usage:**
```tsx
<div className="wp-block-columns has-3-columns">
  <div className="wp-block-column">Column 1</div>
  <div className="wp-block-column">Column 2</div>
  <div className="wp-block-column">Column 3</div>
</div>
```

**Responsive:**
- Mobile: 1 column
- Tablet: 2 columns
- Desktop: 3-4 columns

**Variants:**
- Default: 2 columns
- `has-3-columns` — 3 columns
- `has-4-columns` — 4 columns

---

### **3. wp-block-row**
**Purpose:** Horizontal row with consistent spacing  
**Complexity:** Low  
**CSS Lines:** 20 lines

**Usage:**
```tsx
<div className="wp-block-row">
  {/* Horizontal items with 16px gap */}
</div>
```

**Modifiers:**
- `space-between` — Justify space-between
- `items-start/end` — Vertical alignment

---

### **4. wp-block-stack**
**Purpose:** Vertical stack with consistent spacing  
**Complexity:** Low  
**CSS Lines:** 15 lines

**Usage:**
```tsx
<div className="wp-block-stack">
  {/* Vertical items with 24px gap */}
</div>
```

**Default gap:** 24px

---

### **5-8. Grid Utilities**
- **4-column grid** — `repeat(4, 1fr)`
- **Responsive grids** — Auto-responsive columns
- **Constrained layout** — Max-width wrappers
- **Flex utilities** — Flexbox helpers

---

## 📦 Content Patterns (16)

### **1. wp-block-card**
**Purpose:** Content card with hover effects  
**Complexity:** Low  
**CSS Lines:** 30 lines  
**Documentation:** ✅ Inline

**Usage:**
```tsx
<div className="wp-block-card is-interactive">
  <h3 className="wp-block-heading">Card Title</h3>
  <p className="wp-block-paragraph">Card content</p>
</div>
```

**Features:**
- 24px padding
- Border + border radius
- Hover: 4px lift + shadow
- `is-interactive` — Cursor pointer

---

### **2. wp-block-hero**
**Purpose:** Hero section with gradient background  
**Complexity:** Medium  
**CSS Lines:** 50 lines  
**Documentation:** ✅ Inline

**Usage:**
```tsx
<section className="wp-block-hero">
  <div className="wp-block-hero__content">
    <div className="wp-block-badge">Badge</div>
    <h1 className="wp-block-hero__title">Hero Title</h1>
    <p className="wp-block-hero__description">Description</p>
    <div className="wp-block-buttons is-content-justification-center">
      {/* Buttons */}
    </div>
  </div>
</section>
```

**Features:**
- Gradient background
- Centered content
- Max-width 1280px
- 96px vertical padding

---

### **3. wp-block-section**
**Purpose:** General section block  
**Complexity:** Low  
**CSS Lines:** 25 lines  
**Documentation:** ✅ Inline

**Usage:**
```tsx
<section className="wp-block-section has-large-spacing has-muted-background">
  <div className="wp-block-group is-layout-constrained">
    {/* Section content */}
  </div>
</section>
```

**Spacing variants:**
- `has-small-spacing` — 32px
- `has-medium-spacing` — 64px
- `has-large-spacing` — 96px
- `has-extra-large-spacing` — 128px

**Background variants:**
- `has-muted-background`
- `has-gradient-background`

---

### **4. wp-block-timeline**
**Purpose:** Chronological events timeline  
**Complexity:** Medium  
**CSS Lines:** 80 lines  
**Documentation:** ⭐⭐⭐ [Timeline.md](./Timeline.md)

**Usage:**
```tsx
<div className="wp-block-timeline">
  {items.map((item, index) => (
    <div key={index} className="wp-block-timeline-item">
      <div className="wp-block-timeline-marker">
        <div className="wp-block-timeline-year">{item.year}</div>
      </div>
      <div className="wp-block-timeline-content">
        <h3 className="wp-block-heading">{item.title}</h3>
        <p className="wp-block-paragraph">{item.description}</p>
      </div>
    </div>
  ))}
</div>
```

**Features:**
- Alternating left/right layout (desktop)
- Vertical connecting line
- Circular year markers (64×64px)
- Responsive: vertical stack (mobile)

---

### **5. wp-block-logo-grid**
**Purpose:** Logo grid for partners/clients  
**Complexity:** Low  
**CSS Lines:** 40 lines  
**Documentation:** ✅ Inline

**Usage:**
```tsx
<div className="wp-block-logo-grid">
  {logos.map((logo, index) => (
    <div key={index} className="wp-block-logo-grid-item">
      <img src={logo.src} alt={logo.alt} />
    </div>
  ))}
</div>
```

**Features:**
- 2/4/6 column responsive grid
- Grayscale by default
- Color on hover
- Opacity 0.6 → 1.0

---

### **6. wp-block-badge**
**Purpose:** Badge component for labels/tags  
**Complexity:** Low  
**CSS Lines:** 25 lines  
**Documentation:** ✅ Inline

**Usage:**
```tsx
<div className="wp-block-badge">Label Text</div>
<div className="wp-block-badge is-style-secondary">Secondary</div>
<div className="wp-block-badge is-style-accent">Accent</div>
```

**Variants:**
- Default: Primary color
- `is-style-secondary` — Secondary color
- `is-style-accent` — Accent color

---

### **7. wp-block-cta**
**Purpose:** Call-to-action block  
**Complexity:** Low  
**CSS Lines:** 30 lines  
**Documentation:** ✅ Inline

**Usage:**
```tsx
<div className="wp-block-cta">
  <div className="wp-block-cta__content">
    <h2 className="wp-block-heading has-text-align-center">CTA Title</h2>
    <p className="wp-block-paragraph is-style-lead has-text-align-center">
      Description
    </p>
  </div>
  <div className="wp-block-buttons is-content-justification-center">
    {/* Buttons */}
  </div>
</div>
```

**Variants:**
- Default: Card background
- `has-gradient-background` — Gradient

---

### **8. wp-block-team-grid**
**Purpose:** Team member cards with photos  
**Complexity:** Medium  
**CSS Lines:** 90 lines  
**Documentation:** ⭐⭐⭐ [TeamGrid.md](./TeamGrid.md)

**Usage:**
```tsx
<div className="wp-block-team-grid">
  {team.map((member) => (
    <div key={member.id} className="wp-block-team-card">
      <div className="wp-block-team-card__image">
        <img src={member.photo} alt={member.name} />
      </div>
      <div className="wp-block-team-card__content">
        <h3 className="wp-block-heading">{member.name}</h3>
        <p className="wp-block-paragraph">{member.role}</p>
        <p className="wp-block-paragraph is-style-small">{member.bio}</p>
        <div className="wp-block-team-card__social">
          {/* Social links */}
        </div>
      </div>
    </div>
  ))}
</div>
```

**Features:**
- 1/2/4 column responsive grid
- Square photos (1:1 aspect ratio)
- Image hover: 1.05 scale
- Card hover: 8px lift
- Social links (40×40px buttons)

---

### **9. wp-block-testimonial-grid**
**Purpose:** Testimonial/review grid  
**Complexity:** Medium  
**CSS Lines:** 75 lines  
**Documentation:** ✅ Inline

**Usage:**
```tsx
<div className="wp-block-testimonial-grid">
  {testimonials.map((item, index) => (
    <div key={index} className="wp-block-testimonial-card">
      <div className="wp-block-testimonial-rating">★★★★★</div>
      <p className="wp-block-paragraph">{item.quote}</p>
      <div className="wp-block-testimonial-author">
        <img src={item.photo} alt={item.name} />
        <div className="wp-block-group">
          <p className="wp-block-paragraph"><strong>{item.name}</strong></p>
          <p className="wp-block-paragraph">{item.role}</p>
        </div>
      </div>
    </div>
  ))}
</div>
```

**Features:**
- 1/2/3 column responsive grid
- Rating stars (warning color)
- Author photos (48×48px)
- Card hover: 4px lift

---

### **10. wp-block-service-grid**
**Purpose:** Service offerings with features  
**Complexity:** High  
**CSS Lines:** 95 lines  
**Documentation:** ⭐⭐⭐ [ServiceGrid.md](./ServiceGrid.md)

**Usage:**
```tsx
<div className="wp-block-service-grid">
  {services.map((service) => {
    const Icon = service.icon;
    return (
      <div key={service.id} className="wp-block-service-card" onClick={() => navigate(service.page)}>
        <div className="wp-block-service-card__icon">
          <Icon size={32} />
        </div>
        <div className="wp-block-service-card__content">
          <h3 className="wp-block-heading">{service.title}</h3>
          <p className="wp-block-paragraph">{service.description}</p>
          <ul className="wp-block-list is-style-checkmarks">
            {service.features.map((feature, idx) => (
              <li key={idx}>
                <CheckCircle size={16} />
                {feature}
              </li>
            ))}
          </ul>
        </div>
        <div className="wp-block-service-card__arrow">
          <ArrowRight size={20} />
        </div>
      </div>
    );
  })}
</div>
```

**Features:**
- 1/2/3 column responsive grid
- Clickable cards (navigation)
- Icon boxes (64×64px)
- Feature lists with checkmarks
- Hover: 6px lift + shadow

---

### **11. wp-block-process-steps**
**Purpose:** Process/workflow visualization  
**Complexity:** Medium  
**CSS Lines:** 80 lines  
**Documentation:** ✅ Inline

**Usage:**
```tsx
<div className="wp-block-process-steps">
  {steps.map((step, index) => (
    <div key={index} className="wp-block-process-step">
      <div className="wp-block-process-step__number">{step.step}</div>
      <div className="wp-block-process-step__content">
        <h3 className="wp-block-heading">{step.title}</h3>
        <p className="wp-block-paragraph">{step.description}</p>
      </div>
      {index < steps.length - 1 && (
        <div className="wp-block-process-step__connector" />
      )}
    </div>
  ))}
</div>
```

**Features:**
- Horizontal flow (desktop)
- Vertical stack (mobile)
- Numbered badges (64×64px, gradient)
- Connecting lines (desktop only)

---

### **12. wp-block-industry-grid**
**Purpose:** Industry badges/tag cloud  
**Complexity:** Low  
**CSS Lines:** 30 lines  
**Documentation:** ✅ Inline

**Usage:**
```tsx
<div className="wp-block-industry-grid">
  {industries.map((industry, index) => (
    <div key={index} className="wp-block-industry-badge">
      {industry}
    </div>
  ))}
</div>
```

**Features:**
- Flexible wrap layout
- Center-justified
- Hover: background + border + transform

---

### **13. wp-block-contact-layout**
**Purpose:** Contact page 2-column layout  
**Complexity:** Low  
**CSS Lines:** 15 lines  
**Documentation:** ✅ Inline

**Usage:**
```tsx
<div className="wp-block-contact-layout">
  <div className="wp-block-contact-form">
    {/* Form */}
  </div>
  <div className="wp-block-contact-info">
    {/* Sidebar */}
  </div>
</div>
```

**Features:**
- 2fr 1fr grid (desktop)
- Single column (mobile)
- 48px gap

---

### **14. wp-block-contact-form**
**Purpose:** Contact form with validation  
**Complexity:** High  
**CSS Lines:** 140 lines  
**Documentation:** ⭐⭐⭐ [ContactForm.md](./ContactForm.md)

**Features:**
- Form header section
- Validation states
- Error/success messages
- Custom select dropdown
- Focus states

---

### **15. wp-block-contact-info**
**Purpose:** Contact information sidebar  
**Complexity:** Medium  
**CSS Lines:** 85 lines  
**Documentation:** ✅ Inline

**Features:**
- Sticky sidebar (desktop)
- Muted background
- Contact method cards
- Icon boxes (48×48px)

---

### **16. Code Display**
**Purpose:** Code syntax blocks  
**Complexity:** Low  
**CSS Lines:** 25 lines  
**Documentation:** ✅ Inline

---

## 📦 Typography Patterns (6)

### **1. wp-block-heading**
**Purpose:** All heading levels (H1-H6)  
**Complexity:** Low  
**CSS Lines:** 35 lines

**Usage:**
```tsx
<h1 className="wp-block-heading">Main Title</h1>
<h2 className="wp-block-heading">Section Title</h2>
```

**Font sizes:**
- H1: 60px (--text-h1)
- H2: 32px (--text-h2)
- H3: 24px (--text-h3)
- H4: 20px (--text-h4)
- H5: 18px (--text-h5)
- H6: 16px (--text-h6)

---

### **2. wp-block-paragraph**
**Purpose:** Paragraph text  
**Complexity:** Low  
**CSS Lines:** 20 lines

**Usage:**
```tsx
<p className="wp-block-paragraph">Regular text</p>
<p className="wp-block-paragraph is-style-lead">Lead text (20px)</p>
<p className="wp-block-paragraph is-style-small">Small text (14px)</p>
```

---

### **3. wp-block-list**
**Purpose:** Lists (UL/OL)  
**Complexity:** Low  
**CSS Lines:** 30 lines

**Usage:**
```tsx
<ul className="wp-block-list">
  <li>Item 1</li>
  <li>Item 2</li>
</ul>

<ul className="wp-block-list is-style-checkmarks">
  <li><CheckCircle size={16} /> Feature 1</li>
</ul>
```

**Variants:**
- Default: Bullet points
- `is-style-checkmarks` — No bullets, flex layout

---

### **4-6. Font Size Utilities**
- Font size classes (--text-small to --text-h1)
- Code inline styles
- Text modifiers

---

## 📦 Interactive Patterns (5)

### **1. wp-block-button**
**Purpose:** Button component  
**Complexity:** Low  
**CSS Lines:** 60 lines

**Usage:**
```tsx
<div className="wp-block-buttons is-content-justification-center">
  <div className="wp-block-button is-style-large">
    <button className="wp-block-button__link">Click Me</button>
  </div>
</div>
```

**Size variants:**
- `is-style-small` — 36px min-height
- Default (medium) — 44px min-height (WCAG AA)
- `is-style-large` — 52px min-height (WCAG AAA)

**Style variants:**
- Default — Filled primary
- `is-style-outline` — Outlined
- `is-style-secondary` — Filled secondary
- `is-style-ghost` — Transparent

---

### **2-5. Interactive Elements**
- Button groups (`wp-block-buttons`)
- Button variants
- Social link buttons (40×40px)
- Hover effects

---

## 📦 Utility Patterns (3)

### **1. Text Alignment**
```tsx
<p className="wp-block-paragraph has-text-align-center">Centered</p>
<p className="wp-block-paragraph has-text-align-right">Right</p>
```

### **2. Gap Modifiers**
```tsx
<div className="wp-block-group has-small-gap">8px gap</div>
<div className="wp-block-group has-medium-gap">16px gap</div>
<div className="wp-block-group has-large-gap">24px gap</div>
<div className="wp-block-group has-extra-large-gap">48px gap</div>
```

### **3. Background Colors**
```tsx
<div className="wp-block-section has-muted-background">Muted</div>
<div className="wp-block-section has-primary-background-color">Primary</div>
```

---

## 📚 Documentation Status

### **Complete Pattern Documentation:**
- ⭐⭐⭐ Timeline.md (450 lines)
- ⭐⭐⭐ TeamGrid.md (500 lines)
- ⭐⭐⭐ ServiceGrid.md (550 lines)
- ⭐⭐⭐ ContactForm.md (500 lines)

### **Inline Documentation:**
- All other patterns documented in wordpress-blocks.css

---

## 🔗 Quick Links

- **Guidelines:** [Guidelines.md](../Guidelines.md)
- **CSS File:** `/src/styles/wordpress-blocks.css`

---

**Status:** ✅ Production-Ready  
**Total Patterns:** 37  
**Total CSS Lines:** 1,780  
**Documentation:** 20,200+ lines
