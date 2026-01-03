# Component Quick Reference Card

**LSX Design System v1.0** | Last Updated: Dec 25, 2024

---

## 🚀 **8 CORE COMPONENTS AT A GLANCE**

### **1. HeroHome**
```tsx
<HeroHome />
```
- **No props** (hardcoded homepage content)
- Dual CTAs, gradient orbs, responsive typography
- Maps to: Group + Heading + Buttons

---

### **2. CTASection**
```tsx
<CTASection
  title="Ready to Build?"
  description="Let's create something amazing together."
  buttonText="Get Started"
  buttonPage="contact"
  variant="highlighted"  // or "default"
/>
```
- **6 props** | **2 variants**
- Maps to: Group + Heading + Button

---

### **3. FAQSection**
```tsx
<FAQSection
  title="Common Questions"
  description="Quick answers..."
  faqs={homepageFAQs}
  variant="default"  // or "compact"
/>
```
- **4 props** | **2 variants**
- Maps to: Details blocks (WP 6.3+)

---

### **4. CardGrid**
```tsx
<CardGrid
  items={portfolioProjects}
  columns={3}  // 2, 3, or 4
  variant="default"  // "compact" or "featured"
  showImage={true}
  showExcerpt={true}
  showMeta={true}
/>
```
- **6 props** | **3 variants**
- Maps to: Query + Post Template

---

### **5. StatsSection**
```tsx
<StatsSection
  title="Track Record"
  description="Numbers that matter"
  stats={companyStats}
  variant="gradient"  // "default" or "minimal"
  columns={4}  // 2, 3, or 4
/>
```
- **5 props** | **3 variants**
- Maps to: Columns + Headings

---

### **6. TeamGrid**
```tsx
<TeamGrid
  title="Our Team"
  description="Meet the experts"
  members={teamMembers}
  columns={3}  // 2, 3, or 4
  showBio={false}
  showSocial={true}
/>
```
- **6 props** | **1 variant**
- Maps to: Columns + Image + Social

---

### **7. TimelineSection**
```tsx
<TimelineSection
  title="Our Journey"
  description="How we evolved"
  items={companyHistory}
  variant="alternating"  // "horizontal" or "vertical"
/>
```
- **4 props** | **3 variants**
- Maps to: Group + Custom CSS

---

### **8. FilterBar**
```tsx
const [category, setCategory] = useState('All');

<FilterBar
  categories={['All', 'WordPress', 'WooCommerce']}
  activeCategory={category}
  onCategoryChange={setCategory}
  showSearch={true}
  onSearch={setSearchQuery}
  showSort={true}
  sortOptions={sortOpts}
  activeSort={sortBy}
  onSortChange={setSortBy}
/>
```
- **9 props** | **1 variant**
- Maps to: Buttons + Search

---

## 🎨 **DESIGN TOKENS QUICK REF**

### **Typography**
```tsx
fontSize: 'var(--text-h1)'    // 60px
fontSize: 'var(--text-h2)'    // 48px
fontSize: 'var(--text-h3)'    // 32px
fontSize: 'var(--text-h4)'    // 24px
fontSize: 'var(--text-base)'  // 16px
fontSize: 'var(--text-lg)'    // 18px
fontSize: 'var(--text-small)' // 14px

fontFamily: 'Lexend, sans-serif'   // Primary (ALL content)
fontFamily: 'Manrope, sans-serif'  // Secondary (meta only)

fontWeight: 'var(--font-weight-bold)'      // 700
fontWeight: 'var(--font-weight-semibold)'  // 600
fontWeight: 'var(--font-weight-medium)'    // 500
fontWeight: 'var(--font-weight-regular)'   // 400
```

---

### **Colors**
```tsx
// Primary
backgroundColor: 'var(--primary)'
color: 'var(--primary-foreground)'

// Background & Text
backgroundColor: 'var(--background)'
color: 'var(--foreground)'

// Cards
backgroundColor: 'var(--card)'
color: 'var(--card-foreground)'

// Muted
backgroundColor: 'var(--muted)'
color: 'var(--muted-foreground)'

// Borders
border: '1px solid var(--border)'
border: '1px solid var(--border-soft)'
border: '1px solid var(--border-extra-soft)'

// Shadows
boxShadow: 'var(--shadow-sm)'
boxShadow: 'var(--shadow-md)'
boxShadow: 'var(--shadow-lg)'
boxShadow: 'var(--shadow-xl)'
boxShadow: 'var(--shadow-primary)'

// Glassmorphism
backgroundColor: 'var(--glass-bg)'
border: '1px solid var(--glass-border)'
backdropFilter: 'blur(10px)'
```

---

### **Spacing (Tailwind)**
```tsx
className="p-6"       // Padding 24px
className="py-24"     // Padding Y 96px
className="mb-8"      // Margin bottom 32px
className="gap-8"     // Grid gap 32px
```

---

### **Border Radius**
```tsx
borderRadius: 'var(--radius)'      // 4px
borderRadius: 'var(--radius-sm)'   // 2px
borderRadius: 'var(--radius-md)'   // 6px
borderRadius: 'var(--radius-lg)'   // 8px
borderRadius: 'var(--radius-xl)'   // 12px
```

---

## 🎯 **COMMON PATTERNS**

### **Hover Card Lift**
```tsx
style={{
  transition: 'all 0.3s ease',
  cursor: 'pointer'
}}
onMouseEnter={(e) => {
  e.currentTarget.style.transform = 'translateY(-4px)';
  e.currentTarget.style.boxShadow = 'var(--shadow-lg)';
  e.currentTarget.style.borderColor = 'var(--primary)';
}}
onMouseLeave={(e) => {
  e.currentTarget.style.transform = 'translateY(0)';
  e.currentTarget.style.boxShadow = 'none';
  e.currentTarget.style.borderColor = 'var(--border-soft)';
}}
```

---

### **Image Zoom on Hover**
```tsx
<img
  style={{
    transition: 'transform 0.5s ease'
  }}
  onMouseEnter={(e) => {
    e.currentTarget.style.transform = 'scale(1.05)';
  }}
  onMouseLeave={(e) => {
    e.currentTarget.style.transform = 'scale(1)';
  }}
/>
```

---

### **Button Hover Animation**
```tsx
<button
  style={{
    backgroundColor: 'var(--primary)',
    color: 'var(--primary-foreground)',
    padding: '16px 32px',
    borderRadius: 'var(--radius-lg)',
    border: 'none',
    cursor: 'pointer',
    transition: 'all 0.3s ease',
    boxShadow: 'var(--shadow-primary)'
  }}
  onMouseEnter={(e) => {
    e.currentTarget.style.transform = 'translateY(-2px)';
    e.currentTarget.style.boxShadow = 'var(--shadow-lg)';
  }}
  onMouseLeave={(e) => {
    e.currentTarget.style.transform = 'translateY(0)';
    e.currentTarget.style.boxShadow = 'var(--shadow-primary)';
  }}
>
  Get Started
</button>
```

---

## ♿ **ACCESSIBILITY CHECKLIST**

**Every component must have:**

- [ ] Semantic HTML (`<section>`, `<article>`, `<button>`)
- [ ] Proper heading hierarchy (H1 → H2 → H3)
- [ ] ARIA labels where needed
- [ ] Keyboard navigation (Tab, Enter, Space)
- [ ] Visible focus indicators
- [ ] WCAG AA contrast (4.5:1 text, 3:1 UI)
- [ ] Touch targets 44×44px minimum
- [ ] Alt text on all images
- [ ] Screen reader tested

---

## 📱 **RESPONSIVE BREAKPOINTS**

```tsx
// Mobile: < 768px
className="grid-cols-1"

// Tablet: 768px - 1024px  
className="md:grid-cols-2"

// Desktop: 1024px+
className="lg:grid-cols-3"
```

---

## 🔗 **NAVIGATION**

### **useNavigation Hook**
```tsx
import { useNavigation } from '../../contexts/NavigationContext';

const { navigateTo } = useNavigation();

// Navigate to page
<button onClick={() => navigateTo('contact')}>
  Contact Us
</button>
```

---

## 📊 **TYPE DEFINITIONS**

### **CardItem**
```tsx
type CardItem = {
  id: string;
  title: string;
  excerpt: string;
  category: string;
  imageUrl?: string;
  href: string;
  page?: string;
  date?: string;
  author?: string;
  meta?: string;
};
```

### **Stat**
```tsx
type Stat = {
  number: string;      // "500+", "98%"
  label: string;       // "Projects Delivered"
  description: string; // "WordPress sites built"
  icon?: ComponentType;
};
```

### **TeamMember**
```tsx
type TeamMember = {
  id: string;
  name: string;
  role: string;
  bio?: string;
  imageUrl: string;
  socialLinks?: {
    twitter?: string;
    linkedin?: string;
    github?: string;
    email?: string;
  };
};
```

### **FAQ**
```tsx
type FAQ = {
  question: string;
  answer: string;
};
```

### **TimelineItem**
```tsx
type TimelineItem = {
  year?: string;
  date?: string;
  title: string;
  description: string;
  icon?: ComponentType;
};
```

---

## 📦 **DATA IMPORTS**

```tsx
// FAQs
import { homepageFAQs, servicesFAQs } from '../../data/faqs';

// Blog Posts
import { blogPosts, featuredPosts } from '../../data/posts';

// Portfolio
import { portfolioProjects } from '../../data/portfolio';

// Team
import { teamMembers } from '../../data/team';

// Testimonials
import { clientTestimonials } from '../../data/testimonials';
```

---

## 🎨 **VARIANT CHEAT SHEET**

| Component | Variants | When to Use |
|-----------|----------|-------------|
| CTASection | default, highlighted | Highlighted for primary CTAs only |
| FAQSection | default, compact | Compact for sidebar/tight spaces |
| CardGrid | default, compact, featured | Featured for hero sections |
| StatsSection | default, gradient, minimal | Gradient for high impact sections |
| TimelineSection | horizontal, vertical, alternating | Alternating for history pages |

---

## 🚨 **COMMON MISTAKES TO AVOID**

❌ **DON'T:**
- Use hardcoded colors (`color: '#000000'`)
- Use system fonts (Arial, Helvetica)
- Skip alt text on images
- Make touch targets < 44px
- Exceed 3-4 variants per page
- Mix portrait and landscape images
- Use more than 10 categories in FilterBar

✅ **DO:**
- Use CSS variables (`color: 'var(--foreground)'`)
- Use Lexend/Manrope fonts only
- Provide descriptive alt text
- Ensure 44×44px minimum touch targets
- Limit 1-2 highlighted variants per page
- Use consistent aspect ratios
- Keep 5-8 categories maximum

---

## 📚 **FULL DOCUMENTATION**

**Component API Reference:**  
`/guidelines/blocks/COMPONENT-API-REFERENCE.md`

**Design Tokens:**
- `/guidelines/design-tokens/typography.md`
- `/guidelines/design-tokens/colors.md`
- `/guidelines/design-tokens/spacing.md`

**Component Overview:**  
`/guidelines/overview-components.md`

**WordPress Blocks:**  
`/guidelines/blocks/overview-blocks.md`

---

**Print this card and keep it handy for quick component reference!** 📋
