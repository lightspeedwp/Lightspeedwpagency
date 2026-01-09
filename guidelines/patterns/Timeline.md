# Timeline Pattern — WordPress Block

**Pattern Name:** wp-block-timeline  
**Category:** Content Pattern  
**Added:** January 7, 2025  
**CSS Lines:** 80 lines  
**Complexity:** Medium

---

## 📋 Overview

The Timeline pattern displays chronological events in an alternating left-right layout on desktop, with a vertical connecting line and circular year markers. Perfect for company history, project milestones, or any chronological content.

---

## 🎯 Use Cases

- Company history pages ✅
- Project timelines
- Product evolution
- Event chronologies
- Career milestones
- Process documentation

---

## 📐 Structure

```
wp-block-timeline
├── wp-block-timeline-item (repeating)
│   ├── wp-block-timeline-marker
│   │   └── wp-block-timeline-year
│   └── wp-block-timeline-content
│       ├── wp-block-heading
│       └── wp-block-paragraph
```

---

## 💻 Code Example

```tsx
import { useState } from 'react';

interface TimelineItem {
  year: string;
  title: string;
  description: string;
}

export function TimelinePattern() {
  const timelineItems: TimelineItem[] = [
    {
      year: '2024',
      title: 'Global Expansion',
      description: 'Expanded operations to 15 new countries across Europe and Asia.'
    },
    {
      year: '2022',
      title: 'Series B Funding',
      description: 'Raised $50M in Series B funding to accelerate product development.'
    },
    {
      year: '2020',
      title: 'Product Launch',
      description: 'Launched our flagship product to over 10,000 beta users.'
    },
    {
      year: '2018',
      title: 'Company Founded',
      description: 'Started with a small team of 5 in a San Francisco garage.'
    }
  ];

  return (
    <section className="wp-block-section has-large-spacing">
      <div className="wp-block-group is-layout-constrained">
        
        {/* Section Header */}
        <div style={{ textAlign: 'center', marginBottom: '64px' }}>
          <h2 className="wp-block-heading">Our Journey</h2>
          <p className="wp-block-paragraph is-style-lead">
            A timeline of our company's growth and milestones
          </p>
        </div>

        {/* Timeline */}
        <div className="wp-block-timeline">
          {timelineItems.map((item, index) => (
            <div key={index} className="wp-block-timeline-item">
              
              {/* Year Marker */}
              <div className="wp-block-timeline-marker">
                <div className="wp-block-timeline-year">
                  {item.year}
                </div>
              </div>

              {/* Content */}
              <div className="wp-block-timeline-content">
                <h3 className="wp-block-heading">{item.title}</h3>
                <p className="wp-block-paragraph">{item.description}</p>
              </div>
              
            </div>
          ))}
        </div>
        
      </div>
    </section>
  );
}
```

---

## 🎨 Features

### **1. Alternating Layout (Desktop)**
- Odd items: Content on left, marker on right
- Even items: Content on right, marker on left
- Creates visual rhythm and balance

### **2. Vertical Connecting Line**
- 2px line connecting all markers
- Positioned at 50% (center of markers)
- Uses `--border` color
- Hidden on mobile

### **3. Circular Year Markers**
- 64×64px circular badges
- Primary background color
- Primary foreground text
- Bold font weight
- Box shadow for depth

### **4. Responsive Behavior**
- **Desktop (768px+):** Alternating left/right layout
- **Mobile (<768px):** Vertical stack, markers on left

---

## 📱 Responsive Design

### **Mobile (<768px):**
```css
.wp-block-timeline-item {
  grid-template-columns: auto 1fr;
  gap: 24px;
}

.wp-block-timeline::before {
  left: 31px; /* Align with marker */
}
```

### **Desktop (768px+):**
```css
.wp-block-timeline-item {
  grid-template-columns: 1fr auto 1fr;
}

.wp-block-timeline::before {
  left: 50%;
  transform: translateX(-1px);
}

/* Alternating layout */
.wp-block-timeline-item:nth-child(odd) .wp-block-timeline-content {
  grid-column: 1;
  text-align: right;
}

.wp-block-timeline-item:nth-child(even) .wp-block-timeline-content {
  grid-column: 3;
  text-align: left;
}
```

---

## 🎯 CSS Classes Reference

### **Main Classes:**
- `.wp-block-timeline` — Timeline container
- `.wp-block-timeline-item` — Individual timeline item
- `.wp-block-timeline-marker` — Marker column
- `.wp-block-timeline-year` — Year badge (64×64px circle)
- `.wp-block-timeline-content` — Content column

### **No Modifiers:**
This pattern has no style variants (single design).

---

## ♿ Accessibility

### **Semantic HTML:**
```tsx
<div className="wp-block-timeline" role="list" aria-label="Company timeline">
  <div className="wp-block-timeline-item" role="listitem">
    {/* Content */}
  </div>
</div>
```

### **WCAG 2.1 AA Compliance:**
- ✅ Semantic heading hierarchy (H2 → H3)
- ✅ Sufficient color contrast (marker badges)
- ✅ Keyboard accessible (no interactive elements)
- ✅ Screen reader friendly (chronological order)

---

## 🔧 WordPress FSE Mapping

### **Block Pattern Registration:**

```php
<?php
/**
 * Timeline Pattern
 * 
 * Slug: lsx-design/content/timeline
 * Categories: featured, content
 */

register_block_pattern(
  'lsx-design/content/timeline',
  array(
    'title'       => __( 'Timeline', 'lsx-design' ),
    'description' => __( 'Chronological events with alternating layout', 'lsx-design' ),
    'categories'  => array( 'featured', 'content' ),
    'content'     => '
      <!-- wp:group {"className":"wp-block-timeline"} -->
      <div class="wp-block-group wp-block-timeline">
        <!-- wp:group {"className":"wp-block-timeline-item"} -->
        <div class="wp-block-group wp-block-timeline-item">
          <!-- wp:group {"className":"wp-block-timeline-marker"} -->
          <div class="wp-block-group wp-block-timeline-marker">
            <div class="wp-block-timeline-year">2024</div>
          </div>
          <!-- /wp:group -->
          
          <!-- wp:group {"className":"wp-block-timeline-content"} -->
          <div class="wp-block-group wp-block-timeline-content">
            <!-- wp:heading {"level":3} -->
            <h3 class="wp-block-heading">Milestone Title</h3>
            <!-- /wp:heading -->
            
            <!-- wp:paragraph -->
            <p class="wp-block-paragraph">Description of the milestone.</p>
            <!-- /wp:paragraph -->
          </div>
          <!-- /wp:group -->
        </div>
        <!-- /wp:group -->
      </div>
      <!-- /wp:group -->
    ',
  )
);
```

---

## 💡 Best Practices

### **1. Keep Descriptions Concise**
```tsx
// ✅ GOOD: Short, scannable
description: 'Launched flagship product to 10,000 beta users.'

// ❌ AVOID: Long paragraphs
description: 'In this year, we launched our flagship product which was very successful...'
```

### **2. Use Consistent Year Format**
```tsx
// ✅ GOOD: Consistent 4-digit years
{ year: '2024', ... }
{ year: '2023', ... }

// ❌ AVOID: Mixed formats
{ year: 'Q1 2024', ... }
{ year: 'Fall 2023', ... }
```

### **3. Chronological Order**
```tsx
// ✅ GOOD: Newest first (reverse chronological)
const items = [
  { year: '2024', ... },
  { year: '2022', ... },
  { year: '2020', ... }
];

// Or oldest first
const items = [
  { year: '2018', ... },
  { year: '2020', ... },
  { year: '2024', ... }
];
```

---

## 🎨 Customization Options

### **1. Different Marker Sizes**
```css
/* Custom: Smaller markers (48×48px) */
.wp-block-timeline-year {
  width: 48px;
  height: 48px;
  font-size: var(--text-small);
}
```

### **2. Vertical Timeline (Mobile Style on Desktop)**
```css
/* Force vertical layout on all screen sizes */
.wp-block-timeline-item {
  grid-template-columns: auto 1fr !important;
}

.wp-block-timeline::before {
  left: 31px !important;
  transform: none !important;
}

.wp-block-timeline-content {
  text-align: left !important;
  grid-column: auto !important;
}
```

### **3. Custom Marker Colors**
```css
/* Gradient markers */
.wp-block-timeline-year {
  background: linear-gradient(135deg, var(--primary), var(--secondary));
}

/* Accent color markers */
.wp-block-timeline-year {
  background-color: var(--accent);
  color: var(--accent-foreground);
}
```

---

## 🐛 Common Issues

### **Issue 1: Markers Not Aligned**
**Problem:** Vertical line doesn't align with markers  
**Solution:** Check marker width matches CSS (64px default)

```css
/* Ensure marker width is 64px */
.wp-block-timeline-year {
  width: 64px;
  height: 64px;
}

/* Line positioned at center (32px from left) */
.wp-block-timeline::before {
  left: 31px; /* 64px / 2 - 1px line width */
}
```

### **Issue 2: Content Overlapping**
**Problem:** Long titles overlap with markers  
**Solution:** Add max-width to content

```css
.wp-block-timeline-content {
  padding: 16px 0;
  max-width: 500px;
}
```

---

## 📊 Performance

**CSS Size:** 80 lines (~2 KB)  
**Render Cost:** Low (simple grid layout)  
**Responsive:** Automatic (media queries built-in)

---

## 🔗 Related Patterns

- **Process Steps** — Similar chronological display
- **Hero** — Section header inspiration
- **Badge** — Similar circular design

---

## ✅ Checklist for Implementation

- [ ] Import timeline data from centralized location
- [ ] Add section header with title
- [ ] Map timeline items in chronological order
- [ ] Test responsive behavior (mobile + desktop)
- [ ] Verify year markers are visible
- [ ] Check text alignment (left/right alternating)
- [ ] Verify connecting line displays correctly
- [ ] Test with different content lengths
- [ ] Verify WCAG 2.1 AA compliance

---

**Status:** ✅ Production-Ready  
**WordPress FSE:** ✅ Compatible  
**WCAG 2.1 AA:** ✅ Compliant  
**Browser Support:** All modern browsers
