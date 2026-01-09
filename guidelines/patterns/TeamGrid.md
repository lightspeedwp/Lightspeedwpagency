# Team Grid Pattern — WordPress Block

**Pattern Name:** wp-block-team-grid  
**Category:** Content Pattern  
**Added:** January 7, 2025  
**CSS Lines:** 90 lines  
**Complexity:** Medium

---

## 📋 Overview

The Team Grid pattern displays team member cards in a responsive grid layout with photos, roles, bios, and social links. Features hover effects on cards and images, with support for 1/2/4 column layouts.

---

## 🎯 Use Cases

- Team/About pages ✅
- Staff directories
- Leadership pages
- Contributors showcase
- Author pages
- Expert listings

---

## 📐 Structure

```
wp-block-team-grid
└── wp-block-team-card (repeating)
    ├── wp-block-team-card__image
    │   └── img
    ├── wp-block-team-card__content
    │   ├── wp-block-heading (name)
    │   ├── wp-block-paragraph (role)
    │   └── wp-block-paragraph (bio)
    └── wp-block-team-card__social
        └── a (social links)
```

---

## 💻 Code Example

```tsx
import { useNavigation } from '../../hooks/useNavigation';
import { Linkedin, Twitter, Github } from 'lucide-react';

interface TeamMember {
  id: string;
  name: string;
  role: string;
  bio: string;
  photo: string;
  socialLinks: {
    linkedin?: string;
    twitter?: string;
    github?: string;
  };
}

export function TeamGridPattern() {
  const { navigate } = useNavigation();

  const teamMembers: TeamMember[] = [
    {
      id: '1',
      name: 'Sarah Johnson',
      role: 'CEO & Founder',
      bio: 'Leading our vision with 15+ years of experience in WordPress development.',
      photo: 'https://images.unsplash.com/photo-1494790108377-be9c29b29330',
      socialLinks: {
        linkedin: 'https://linkedin.com/in/sarahjohnson',
        twitter: 'https://twitter.com/sarahjohnson'
      }
    },
    {
      id: '2',
      name: 'Michael Chen',
      role: 'CTO',
      bio: 'Building scalable WordPress solutions with modern technologies.',
      photo: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d',
      socialLinks: {
        linkedin: 'https://linkedin.com/in/michaelchen',
        github: 'https://github.com/michaelchen'
      }
    },
    // ... more team members
  ];

  return (
    <section className="wp-block-section has-large-spacing">
      <div className="wp-block-group is-layout-constrained">
        
        {/* Section Header */}
        <div style={{ textAlign: 'center', marginBottom: '64px' }}>
          <h2 className="wp-block-heading">Meet Our Team</h2>
          <p className="wp-block-paragraph is-style-lead">
            Passionate experts dedicated to your success
          </p>
        </div>

        {/* Team Grid */}
        <div className="wp-block-team-grid">
          {teamMembers.map((member) => (
            <div key={member.id} className="wp-block-team-card">
              
              {/* Photo */}
              <div className="wp-block-team-card__image">
                <img 
                  src={member.photo} 
                  alt={member.name}
                  loading="lazy"
                />
              </div>

              {/* Content */}
              <div className="wp-block-team-card__content">
                <h3 className="wp-block-heading">{member.name}</h3>
                
                <p className="wp-block-paragraph" style={{ 
                  color: 'var(--primary)',
                  fontWeight: 'var(--font-weight-medium)'
                }}>
                  {member.role}
                </p>
                
                <p className="wp-block-paragraph is-style-small">
                  {member.bio}
                </p>
                
                {/* Social Links */}
                <div className="wp-block-team-card__social">
                  {member.socialLinks.linkedin && (
                    <a 
                      href={member.socialLinks.linkedin}
                      target="_blank"
                      rel="noopener noreferrer"
                      aria-label={`${member.name} on LinkedIn`}
                    >
                      <Linkedin size={18} style={{ color: 'var(--foreground)' }} />
                    </a>
                  )}
                  {member.socialLinks.twitter && (
                    <a 
                      href={member.socialLinks.twitter}
                      target="_blank"
                      rel="noopener noreferrer"
                      aria-label={`${member.name} on Twitter`}
                    >
                      <Twitter size={18} style={{ color: 'var(--foreground)' }} />
                    </a>
                  )}
                  {member.socialLinks.github && (
                    <a 
                      href={member.socialLinks.github}
                      target="_blank"
                      rel="noopener noreferrer"
                      aria-label={`${member.name} on GitHub`}
                    >
                      <Github size={18} style={{ color: 'var(--foreground)' }} />
                    </a>
                  )}
                </div>
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

### **1. Responsive Grid Layout**
- **Mobile (<768px):** 1 column
- **Tablet (768px-1023px):** 2 columns
- **Desktop (1024px+):** 4 columns

### **2. Square Photo Aspect Ratio**
```css
.wp-block-team-card__image {
  width: 100%;
  aspect-ratio: 1; /* Perfect square */
  overflow: hidden;
}
```

### **3. Image Hover Effect**
```css
.wp-block-team-card:hover .wp-block-team-card__image img {
  transform: scale(1.05); /* Subtle zoom */
}
```

### **4. Card Hover Effect**
```css
.wp-block-team-card:hover {
  transform: translateY(-8px); /* 8px lift */
  box-shadow: var(--shadow-xl); /* Enhanced shadow */
  border-color: var(--primary); /* Primary border */
}
```

### **5. Social Links**
- Circular buttons (40×40px)
- Muted background by default
- Primary background on hover
- Icon color changes on hover

---

## 📱 Responsive Design

### **Mobile (<768px):**
```css
.wp-block-team-grid {
  grid-template-columns: 1fr;
  gap: 32px;
}
```

### **Tablet (768px-1023px):**
```css
@media (min-width: 768px) {
  .wp-block-team-grid {
    grid-template-columns: repeat(2, 1fr);
  }
}
```

### **Desktop (1024px+):**
```css
@media (min-width: 1024px) {
  .wp-block-team-grid {
    grid-template-columns: repeat(4, 1fr);
  }
}
```

---

## 🎯 CSS Classes Reference

### **Main Classes:**
- `.wp-block-team-grid` — Grid container
- `.wp-block-team-card` — Individual card
- `.wp-block-team-card__image` — Photo container (1:1 aspect ratio)
- `.wp-block-team-card__content` — Text content area
- `.wp-block-team-card__social` — Social links container

### **No Style Variants:**
This pattern has a single design (no modifiers).

---

## ♿ Accessibility

### **ARIA Labels for Social Links:**
```tsx
<a 
  href={linkedin}
  aria-label={`${name} on LinkedIn`}
  target="_blank"
  rel="noopener noreferrer"
>
  <Linkedin size={18} />
</a>
```

### **Image Alt Text:**
```tsx
<img 
  src={photo} 
  alt={`Photo of ${name}, ${role}`}
  loading="lazy"
/>
```

### **WCAG 2.1 AA Compliance:**
- ✅ Descriptive ARIA labels for icon links
- ✅ Proper image alt text
- ✅ Color contrast on all text
- ✅ 40×40px touch targets (social links)
- ✅ Keyboard accessible
- ✅ Focus states visible

---

## 🔧 WordPress FSE Mapping

### **Block Pattern Registration:**

```php
<?php
register_block_pattern(
  'lsx-design/content/team-grid',
  array(
    'title'       => __( 'Team Grid', 'lsx-design' ),
    'description' => __( 'Team member cards with photos and social links', 'lsx-design' ),
    'categories'  => array( 'featured', 'content' ),
    'content'     => '
      <!-- wp:group {"className":"wp-block-team-grid"} -->
      <div class="wp-block-group wp-block-team-grid">
        
        <!-- wp:group {"className":"wp-block-team-card"} -->
        <div class="wp-block-group wp-block-team-card">
          
          <!-- wp:group {"className":"wp-block-team-card__image"} -->
          <div class="wp-block-group wp-block-team-card__image">
            <!-- wp:image -->
            <figure class="wp-block-image">
              <img src="placeholder.jpg" alt="Team member name" />
            </figure>
            <!-- /wp:image -->
          </div>
          <!-- /wp:group -->
          
          <!-- wp:group {"className":"wp-block-team-card__content"} -->
          <div class="wp-block-group wp-block-team-card__content">
            <!-- wp:heading {"level":3} -->
            <h3 class="wp-block-heading">Team Member Name</h3>
            <!-- /wp:heading -->
            
            <!-- wp:paragraph -->
            <p class="wp-block-paragraph">Role Title</p>
            <!-- /wp:paragraph -->
            
            <!-- wp:paragraph {"className":"is-style-small"} -->
            <p class="wp-block-paragraph is-style-small">Short bio text.</p>
            <!-- /wp:paragraph -->
            
            <!-- wp:group {"className":"wp-block-team-card__social"} -->
            <div class="wp-block-group wp-block-team-card__social">
              <!-- Social links here -->
            </div>
            <!-- /wp:group -->
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

### **1. Consistent Photo Dimensions**
```tsx
// ✅ GOOD: All photos same aspect ratio (1:1)
photo: 'image-800x800.jpg'

// ❌ AVOID: Mixed aspect ratios
photo: 'image-800x600.jpg' // Not square
```

### **2. Short Bios**
```tsx
// ✅ GOOD: 1-2 sentences
bio: 'Building scalable solutions with 10+ years experience.'

// ❌ AVOID: Long paragraphs
bio: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit...'
```

### **3. Centralized Team Data**
```tsx
// ✅ GOOD: Import from data file
import { teamMembers } from '../../data/team';

// ❌ AVOID: Inline data
const teamMembers = [
  { name: 'Sarah', ... },
  // ...
];
```

---

## 🎨 Customization Options

### **1. Compact Variant (3 Columns)**
```css
@media (min-width: 1024px) {
  .wp-block-team-grid.is-style-compact {
    grid-template-columns: repeat(3, 1fr);
    gap: 48px;
  }
}
```

### **2. List Variant (Single Column)**
```css
.wp-block-team-grid.is-style-list {
  grid-template-columns: 1fr;
  max-width: 800px;
  margin: 0 auto;
}

.wp-block-team-grid.is-style-list .wp-block-team-card {
  display: grid;
  grid-template-columns: 200px 1fr;
  gap: 32px;
}
```

### **3. Different Social Icon Sizes**
```css
.wp-block-team-card__social a {
  width: 48px;
  height: 48px;
}
```

---

## 🐛 Common Issues

### **Issue 1: Photos Not Square**
**Problem:** Images appear stretched or cropped incorrectly  
**Solution:** Ensure images are cropped to 1:1 before upload

```css
.wp-block-team-card__image img {
  width: 100%;
  height: 100%;
  object-fit: cover; /* Ensures proper cropping */
}
```

### **Issue 2: Social Links Not Aligned**
**Problem:** Icons misaligned or different sizes  
**Solution:** Use consistent icon size and flexbox alignment

```tsx
<SocialIcon size={18} /> {/* Same size for all */}
```

---

## 📊 Performance

**CSS Size:** 90 lines (~2.5 KB)  
**Images:** Use lazy loading (`loading="lazy"`)  
**Render Cost:** Medium (4-8 cards typical)

---

## 🔗 Related Patterns

- **Card** — Similar card structure
- **Service Grid** — Similar grid layout
- **Testimonial Grid** — Similar grid with photos

---

## ✅ Checklist for Implementation

- [ ] Import team data from centralized file
- [ ] Add section header
- [ ] Ensure all photos are square (1:1 aspect ratio)
- [ ] Add social links with ARIA labels
- [ ] Test hover effects (card + image)
- [ ] Verify responsive grid (1/2/4 columns)
- [ ] Check social link hover effects
- [ ] Test with varying bio lengths
- [ ] Verify image lazy loading
- [ ] Check WCAG 2.1 AA compliance

---

**Status:** ✅ Production-Ready  
**WordPress FSE:** ✅ Compatible  
**WCAG 2.1 AA:** ✅ Compliant  
**Browser Support:** All modern browsers
