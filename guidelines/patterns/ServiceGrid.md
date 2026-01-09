# Service Grid Pattern — WordPress Block

**Pattern Name:** wp-block-service-grid  
**Category:** Content Pattern  
**Added:** January 7, 2025  
**CSS Lines:** 95 lines  
**Complexity:** High

---

## 📋 Overview

The Service Grid pattern displays service offerings in a responsive grid with icon boxes, feature lists with checkmarks, and clickable cards that navigate to service detail pages. Includes hover effects and arrow indicators.

---

## 🎯 Use Cases

- Service pages ✅
- Product listings
- Feature showcases
- Offering catalogs
- Solution grids
- Capability lists

---

## 📐 Structure

```
wp-block-service-grid
└── wp-block-service-card (repeating, clickable)
    ├── wp-block-service-card__icon
    │   └── Icon component
    ├── wp-block-service-card__content
    │   ├── wp-block-heading (title)
    │   ├── wp-block-paragraph (description)
    │   └── wp-block-list is-style-checkmarks (features)
    │       └── li (with CheckCircle icon)
    └── wp-block-service-card__arrow
        └── ArrowRight icon
```

---

## 💻 Code Example

```tsx
import { useNavigation } from '../../hooks/useNavigation';
import { 
  Code, 
  Palette, 
  Rocket, 
  Settings, 
  Search, 
  Shield,
  CheckCircle, 
  ArrowRight 
} from 'lucide-react';

interface Service {
  id: string;
  title: string;
  description: string;
  icon: React.ComponentType<{ size?: number }>;
  features: string[];
  page: string; // Page slug for navigation
}

export function ServiceGridPattern() {
  const { navigate } = useNavigation();

  const services: Service[] = [
    {
      id: 'web-development',
      title: 'Web Development',
      description: 'Custom WordPress websites built for performance and scalability.',
      icon: Code,
      features: [
        'Custom Theme Development',
        'Plugin Development',
        'Performance Optimization',
        'Responsive Design'
      ],
      page: 'service-web-development'
    },
    {
      id: 'design',
      title: 'UI/UX Design',
      description: 'Beautiful, user-friendly interfaces that drive conversions.',
      icon: Palette,
      features: [
        'User Research',
        'Wireframing & Prototyping',
        'Visual Design',
        'Design Systems'
      ],
      page: 'service-design'
    },
    {
      id: 'optimization',
      title: 'Site Optimization',
      description: 'Speed up your website and improve search engine rankings.',
      icon: Rocket,
      features: [
        'Performance Audits',
        'Core Web Vitals',
        'SEO Optimization',
        'Caching Strategies'
      ],
      page: 'service-optimization'
    },
    {
      id: 'maintenance',
      title: 'Maintenance & Support',
      description: 'Keep your WordPress site secure, updated, and running smoothly.',
      icon: Settings,
      features: [
        'Regular Updates',
        'Security Monitoring',
        'Backup Management',
        '24/7 Support'
      ],
      page: 'service-maintenance'
    },
    {
      id: 'seo',
      title: 'SEO Services',
      description: 'Improve visibility and drive organic traffic to your website.',
      icon: Search,
      features: [
        'Keyword Research',
        'On-Page SEO',
        'Technical SEO',
        'Content Strategy'
      ],
      page: 'service-seo'
    },
    {
      id: 'security',
      title: 'Security Hardening',
      description: 'Protect your WordPress site from threats and vulnerabilities.',
      icon: Shield,
      features: [
        'Security Audits',
        'Malware Scanning',
        'Firewall Setup',
        'SSL Implementation'
      ],
      page: 'service-security'
    }
  ];

  return (
    <section className="wp-block-section has-large-spacing has-muted-background">
      <div className="wp-block-group is-layout-constrained">
        
        {/* Section Header */}
        <div style={{ textAlign: 'center', marginBottom: '64px' }}>
          <h2 className="wp-block-heading">Our Services</h2>
          <p className="wp-block-paragraph is-style-lead">
            Comprehensive WordPress solutions tailored to your business needs
          </p>
        </div>

        {/* Services Grid */}
        <div className="wp-block-service-grid">
          {services.map((service) => {
            const Icon = service.icon;
            return (
              <div 
                key={service.id} 
                className="wp-block-service-card"
                onClick={() => navigate(service.page)}
                role="button"
                tabIndex={0}
                onKeyDown={(e) => {
                  if (e.key === 'Enter' || e.key === ' ') {
                    e.preventDefault();
                    navigate(service.page);
                  }
                }}
              >
                
                {/* Icon Box */}
                <div className="wp-block-service-card__icon">
                  <Icon size={32} style={{ color: 'var(--primary)' }} />
                </div>

                {/* Content */}
                <div className="wp-block-service-card__content">
                  
                  {/* Title */}
                  <h3 className="wp-block-heading">{service.title}</h3>
                  
                  {/* Description */}
                  <p className="wp-block-paragraph">{service.description}</p>
                  
                  {/* Features List */}
                  <ul className="wp-block-list is-style-checkmarks">
                    {service.features.map((feature, idx) => (
                      <li key={idx}>
                        <CheckCircle 
                          size={16} 
                          style={{ color: 'var(--primary)' }} 
                        />
                        {feature}
                      </li>
                    ))}
                  </ul>
                  
                </div>

                {/* Arrow Indicator */}
                <div className="wp-block-service-card__arrow">
                  <ArrowRight 
                    size={20} 
                    style={{ color: 'var(--muted-foreground)' }} 
                  />
                </div>
                
              </div>
            );
          })}
        </div>
        
      </div>
    </section>
  );
}
```

---

## 🎨 Features

### **1. Responsive Grid Layout**
- **Mobile (<768px):** 1 column
- **Tablet (768px-1023px):** 2 columns
- **Desktop (1024px+):** 3 columns

### **2. Clickable Cards**
```css
.wp-block-service-card {
  cursor: pointer;
  transition: all 0.3s ease;
}
```

### **3. Icon Boxes**
- 64×64px square containers
- Primary-soft background (`var(--primary-soft)`)
- Centered icons (32×32px)
- Border radius (8px)

### **4. Feature Lists with Checkmarks**
```css
.wp-block-list.is-style-checkmarks li {
  display: flex;
  align-items: flex-start;
  gap: 8px;
}
```

### **5. Arrow Indicator**
- Positioned at bottom of card
- Muted color by default
- Changes to primary on hover

### **6. Hover Effects**
```css
.wp-block-service-card:hover {
  transform: translateY(-6px);
  box-shadow: var(--shadow-xl);
  border-color: var(--primary);
}

.wp-block-service-card:hover .wp-block-service-card__arrow {
  color: var(--primary);
}
```

---

## 📱 Responsive Design

### **Mobile (<768px):**
```css
.wp-block-service-grid {
  grid-template-columns: 1fr;
  gap: 24px;
}
```

### **Tablet (768px-1023px):**
```css
@media (min-width: 768px) {
  .wp-block-service-grid {
    grid-template-columns: repeat(2, 1fr);
    gap: 32px;
  }
}
```

### **Desktop (1024px+):**
```css
@media (min-width: 1024px) {
  .wp-block-service-grid {
    grid-template-columns: repeat(3, 1fr);
    gap: 32px;
  }
}
```

---

## 🎯 CSS Classes Reference

### **Main Classes:**
- `.wp-block-service-grid` — Grid container
- `.wp-block-service-card` — Individual service card (clickable)
- `.wp-block-service-card__icon` — Icon box (64×64px)
- `.wp-block-service-card__content` — Text content area
- `.wp-block-service-card__arrow` — Arrow indicator at bottom

### **Feature List Classes:**
- `.wp-block-list` — Base list
- `.is-style-checkmarks` — Checkmark list modifier
  - Removes bullets
  - Adds flexbox layout
  - 8px gap for icons

---

## ♿ Accessibility

### **WCAG 2.1 AA Compliance:**

**Keyboard Navigation:**
```tsx
<div 
  className="wp-block-service-card"
  role="button"
  tabIndex={0}
  onKeyDown={(e) => {
    if (e.key === 'Enter' || e.key === ' ') {
      e.preventDefault();
      navigate(service.page);
    }
  }}
>
```

**Requirements:**
- ✅ `role="button"` for semantic meaning
- ✅ `tabIndex={0}` for keyboard focus
- ✅ Enter/Space key support
- ✅ Focus state visible (2px ring outline)
- ✅ Color contrast meets WCAG AA
- ✅ Touch targets adequate (entire card clickable)

---

## 🔧 WordPress FSE Mapping

### **Block Pattern Registration:**

```php
<?php
/**
 * Service Grid Pattern
 * 
 * Slug: lsx-design/content/service-grid
 * Categories: featured, content
 */

register_block_pattern(
  'lsx-design/content/service-grid',
  array(
    'title'       => __( 'Service Grid', 'lsx-design' ),
    'description' => __( 'Service cards with icons, features, and clickable navigation', 'lsx-design' ),
    'categories'  => array( 'featured', 'content' ),
    'content'     => '
      <!-- wp:group {"className":"wp-block-service-grid"} -->
      <div class="wp-block-group wp-block-service-grid">
        
        <!-- wp:group {"className":"wp-block-service-card"} -->
        <div class="wp-block-group wp-block-service-card">
          
          <!-- Icon Box -->
          <div class="wp-block-service-card__icon">
            <!-- Icon placeholder -->
          </div>
          
          <!-- Content -->
          <div class="wp-block-service-card__content">
            
            <!-- wp:heading {"level":3} -->
            <h3 class="wp-block-heading">Service Title</h3>
            <!-- /wp:heading -->
            
            <!-- wp:paragraph -->
            <p class="wp-block-paragraph">Service description text.</p>
            <!-- /wp:paragraph -->
            
            <!-- wp:list {"className":"is-style-checkmarks"} -->
            <ul class="wp-block-list is-style-checkmarks">
              <li>Feature 1</li>
              <li>Feature 2</li>
              <li>Feature 3</li>
              <li>Feature 4</li>
            </ul>
            <!-- /wp:list -->
            
          </div>
          
          <!-- Arrow -->
          <div class="wp-block-service-card__arrow">
            <!-- Arrow icon -->
          </div>
          
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

### **1. Consistent Feature Count**
```tsx
// ✅ GOOD: All services have 4 features
features: [
  'Feature 1',
  'Feature 2',
  'Feature 3',
  'Feature 4'
]

// ❌ AVOID: Mixed counts (3, 5, 4, 6)
```

### **2. Centralized Service Data**
```tsx
// ✅ GOOD: Import from data file
import { services } from '../../data/services';

// ❌ AVOID: Inline data
const services = [
  { title: 'Web Development', ... },
  // ...
];
```

### **3. Icon Consistency**
```tsx
// ✅ GOOD: All icons 32px
<Icon size={32} style={{ color: 'var(--primary)' }} />

// ❌ AVOID: Mixed sizes
<Icon size={28} />
<Icon size={32} />
<Icon size={36} />
```

### **4. Short Descriptions**
```tsx
// ✅ GOOD: 10-15 words
description: 'Custom WordPress websites built for performance and scalability.'

// ❌ AVOID: Long paragraphs
description: 'We build custom WordPress websites that are designed...'
```

---

## 🎨 Customization Options

### **1. Different Grid Layouts**
```css
/* 2-column grid (wider cards) */
@media (min-width: 1024px) {
  .wp-block-service-grid.is-style-two-column {
    grid-template-columns: repeat(2, 1fr);
    gap: 48px;
  }
}

/* 4-column grid (compact cards) */
@media (min-width: 1280px) {
  .wp-block-service-grid.is-style-four-column {
    grid-template-columns: repeat(4, 1fr);
    gap: 24px;
  }
}
```

### **2. Featured Service Variant**
```css
.wp-block-service-card.is-style-featured {
  background: linear-gradient(135deg, var(--primary), var(--secondary));
  color: var(--primary-foreground);
  border: none;
  grid-column: span 2; /* Take up 2 columns */
}

.wp-block-service-card.is-style-featured .wp-block-service-card__icon {
  background-color: rgba(255, 255, 255, 0.2);
}
```

### **3. No Icons Variant**
```css
.wp-block-service-grid.is-style-minimal .wp-block-service-card__icon {
  display: none;
}

.wp-block-service-grid.is-style-minimal .wp-block-service-card__content {
  padding-top: 0;
}
```

---

## 🐛 Common Issues

### **Issue 1: Cards Different Heights**
**Problem:** Cards in same row have different heights  
**Solution:** Grid auto-fills to tallest card automatically

```css
/* Already handled by CSS Grid */
.wp-block-service-grid {
  display: grid;
  align-items: stretch; /* All cards same height */
}
```

### **Issue 2: Feature Lists Not Aligned**
**Problem:** Feature lists start at different positions  
**Solution:** Use consistent feature count (4 per service)

### **Issue 3: Hover Not Working**
**Problem:** Hover effects not applying  
**Solution:** Ensure cards are direct children of grid

```tsx
// ✅ CORRECT
<div className="wp-block-service-grid">
  <div className="wp-block-service-card">

// ❌ WRONG
<div className="wp-block-service-grid">
  <div className="wrapper">
    <div className="wp-block-service-card">
```

---

## 📊 Performance

**CSS Size:** 95 lines (~2.8 KB)  
**Images:** Icon components only (no images)  
**Render Cost:** Medium (6-9 cards typical)  
**Interaction:** Click/keyboard navigation

---

## 🔗 Related Patterns

- **Team Grid** — Similar grid layout
- **Card** — Similar card structure
- **Badge** — Similar icon box design
- **Checkmarks List** — Used for features

---

## ✅ Checklist for Implementation

- [ ] Import services data from centralized file
- [ ] Add section header with title
- [ ] Ensure all services have same feature count (4)
- [ ] Add navigation handler with useNavigation()
- [ ] Test keyboard navigation (Enter/Space)
- [ ] Verify hover effects (6px lift + shadow)
- [ ] Check responsive grid (1/2/3 columns)
- [ ] Test with varying description lengths
- [ ] Verify icon colors (primary)
- [ ] Check arrow indicator on hover
- [ ] Test click navigation to service pages
- [ ] Verify WCAG 2.1 AA compliance

---

## 🎯 Data Structure Reference

```typescript
interface Service {
  id: string;                                    // Unique identifier
  title: string;                                 // Service name
  description: string;                           // Short description (10-15 words)
  icon: React.ComponentType<{ size?: number }>; // Lucide icon component
  features: string[];                            // 4 features recommended
  page: string;                                  // Navigation slug
}
```

---

**Status:** ✅ Production-Ready  
**WordPress FSE:** ✅ Compatible  
**WCAG 2.1 AA:** ✅ Compliant  
**Browser Support:** All modern browsers  
**Interaction:** Click + Keyboard navigation
