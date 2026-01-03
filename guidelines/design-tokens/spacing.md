# Spacing Tokens

**Version:** 1.0  
**Last Updated:** December 25, 2024

---

## Overview

All spacing uses Tailwind CSS classes based on a 4px unit scale. Never use hard-coded pixel values for spacing.

**Base Unit:** 4px  
**Scale:** Tailwind's default spacing scale (0-96 and beyond)

---

## 📏 Spacing Scale

### Tailwind Spacing Units

| Class | Value | Usage |
|-------|-------|-------|
| `*-0` | 0px | No spacing |
| `*-1` | 4px | Tiny gaps |
| `*-2` | 8px | Small gaps, tight padding |
| `*-3` | 12px | Standard small spacing |
| `*-4` | 16px | Base spacing unit |
| `*-5` | 20px | Medium spacing |
| `*-6` | 24px | Card padding, gaps |
| `*-8` | 32px | Section spacing |
| `*-10` | 40px | Large spacing |
| `*-12` | 48px | Extra large spacing |
| `*-16` | 64px | Section padding |
| `*-20` | 80px | XL section spacing |
| `*-24` | 96px | XXL section spacing |

---

## 🎨 Common Spacing Patterns

### Card Padding
```tsx
<div className="p-6">         {/* 24px all sides */}
<div className="p-8">         {/* 32px all sides */}
```

### Section Spacing
```tsx
<section className="py-16">  {/* 64px vertical */}
<section className="py-20">  {/* 80px vertical */}
<section className="py-24">  {/* 96px vertical */}
```

### Grid Gaps
```tsx
<div className="gap-4">      {/* 16px gap */}
<div className="gap-6">      {/* 24px gap */}
<div className="gap-8">      {/* 32px gap */}
<div className="gap-12">     {/* 48px gap */}
```

### Margin Bottom (Vertical Rhythm)
```tsx
<h1 className="mb-4">        {/* 16px below heading */}
<h2 className="mb-6">        {/* 24px below heading */}
<p className="mb-8">         {/* 32px below paragraph */}
```

---

## 📐 Component Spacing Guidelines

### Container Max-Width

```tsx
// Standard container
<Container maxWidth="1200px" className="px-6">

// Wide container
<Container maxWidth="1400px" className="px-6">

// Narrow container (editorial content)
<Container maxWidth="800px" className="px-6">
```

### Section Padding

| Section Type | Vertical Padding | Class |
|--------------|------------------|-------|
| Hero | 80-96px | `py-20` or `py-24` |
| Standard | 64-80px | `py-16` or `py-20` |
| Compact | 48-64px | `py-12` or `py-16` |
| Dense | 32-48px | `py-8` or `py-12` |

### Card Spacing

```tsx
// Standard card
<div className="p-6 gap-4">   {/* 24px padding, 16px gaps */}

// Large card
<div className="p-8 gap-6">   {/* 32px padding, 24px gaps */}

// Compact card
<div className="p-4 gap-3">   {/* 16px padding, 12px gaps */}
```

---

## 🏗️ Layout Spacing

### Grid Layouts

**Blog/Portfolio Grids:**
```tsx
<div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
<div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
<div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-12">
```

**Team Grids:**
```tsx
<div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
```

**Two-Column Layouts:**
```tsx
<div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
```

### Flex Layouts

**Horizontal Stack:**
```tsx
<div className="flex gap-4">     {/* 16px gap */}
<div className="flex gap-6">     {/* 24px gap */}
<div className="flex gap-8">     {/* 32px gap */}
```

**Vertical Stack:**
```tsx
<div className="flex flex-col gap-4">    {/* 16px gap */}
<div className="flex flex-col gap-6">    {/* 24px gap */}
```

---

## 📱 Responsive Spacing

### Mobile-First Approach

```tsx
// Small spacing on mobile, larger on desktop
<div className="p-4 md:p-6 lg:p-8">

// Responsive section padding
<section className="py-12 md:py-16 lg:py-20">

// Responsive gaps
<div className="gap-4 md:gap-6 lg:gap-8">
```

### Responsive Breakpoints

| Breakpoint | Min Width | Usage |
|------------|-----------|-------|
| `sm:` | 640px | Small tablets |
| `md:` | 768px | Tablets |
| `lg:` | 1024px | Desktops |
| `xl:` | 1280px | Large desktops |
| `2xl:` | 1536px | Extra large screens |

---

## 🎯 WordPress Section Patterns

### Section Spacing Variants

**Section Component Props:**
```tsx
<Section spacing="sm">   {/* py-8 - 32px */}
<Section spacing="md">   {/* py-12 - 48px */}
<Section spacing="lg">   {/* py-16 - 64px */}
<Section spacing="xl">   {/* py-20 - 80px */}
<Section spacing="2xl">  {/* py-24 - 96px */}
```

**Implementation:**
```tsx
// Hero section - Extra large spacing
<Section spacing="2xl">
  <HeroContent />
</Section>

// Content section - Large spacing
<Section spacing="xl">
  <ContentBlock />
</Section>

// CTA section - Standard spacing
<Section spacing="lg">
  <CTASection />
</Section>
```

---

## ✅ Spacing Best Practices

### Do's ✅

- **Use Tailwind classes** - `p-6`, `gap-4`, `mb-8`
- **Use consistent gaps** - 16px (gap-4), 24px (gap-6), 32px (gap-8)
- **Use responsive spacing** - `py-12 md:py-16 lg:py-20`
- **Maintain vertical rhythm** - Consistent spacing between sections
- **Use Section component** - For consistent section spacing

### Don'ts ❌

- **Don't hard-code pixels** - Never use `padding: 24px`
- **Don't use arbitrary values** - Avoid `p-[17px]`
- **Don't mix spacing systems** - Use Tailwind only
- **Don't forget mobile** - Always test on small screens
- **Don't over-space** - More is not always better

---

## 📊 Spacing Matrix

### Common Combinations

| Element | Padding | Gap | Margin Bottom |
|---------|---------|-----|---------------|
| Hero Section | `py-20` | - | - |
| Content Section | `py-16` | - | - |
| Card Grid | - | `gap-6` | - |
| Card | `p-6` | `gap-4` | - |
| Heading | - | - | `mb-4` |
| Paragraph | - | - | `mb-6` |
| Button | `px-6 py-3` | - | - |
| Form Input | `px-4 py-3` | - | `mb-4` |

---

## 🎨 Vertical Rhythm

### Section-to-Section Spacing

```tsx
<Section spacing="xl">
  <Hero />
</Section>

<Section spacing="lg">
  <Features />
</Section>

<Section spacing="lg">
  <Testimonials />
</Section>

<Section spacing="xl">
  <CTA />
</Section>
```

### Typography Vertical Rhythm

```tsx
<h1 className="mb-4">Heading 1</h1>
<p className="mb-6">Paragraph text</p>

<h2 className="mb-4">Heading 2</h2>
<p className="mb-6">Paragraph text</p>

<h3 className="mb-3">Heading 3</h3>
<p className="mb-6">Paragraph text</p>
```

---

**Last Updated:** December 25, 2024  
**Base Unit:** 4px  
**Scale:** Tailwind default (0-96+)  
**System:** Mobile-first responsive
