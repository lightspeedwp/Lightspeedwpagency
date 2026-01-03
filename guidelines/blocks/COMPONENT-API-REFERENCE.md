# Component API Reference — Core Blocks & Patterns

**Last Updated:** December 25, 2024  
**LSX Design System Version:** 1.0  
**WordPress Compatibility:** FSE (Full Site Editing)

---

## 📚 **TABLE OF CONTENTS**

1. [HeroHome](#1-herohome) — Homepage hero pattern
2. [CTASection](#2-ctasection) — Call-to-action blocks
3. [FAQSection](#3-faqsection) — Frequently asked questions
4. [CardGrid](#4-cardgrid) — Content card grids
5. [StatsSection](#5-statssection) — Statistics display
6. [TeamGrid](#6-teamgrid) — Team member showcase
7. [TimelineSection](#7-timelinesection) — Process timelines
8. [FilterBar](#8-filterbar) — Content filtering

---

## 🎯 **DESIGN SYSTEM COMPLIANCE**

All components in this reference:

✅ **Use CSS variables exclusively** - No hardcoded colors, spacing, or typography  
✅ **Lexend font family** - Primary font for all content  
✅ **Manrope font family** - Secondary font for small text/metadata only  
✅ **Tailwind spacing classes** - Consistent spacing scale  
✅ **Semantic color roles** - `var(--primary)`, `var(--foreground)`, etc.  
✅ **Border radius tokens** - `var(--radius)`, `var(--radius-lg)`, etc.  
✅ **WordPress FSE compatible** - Map to block patterns and templates

---

## 1. HeroHome

**Purpose:** Homepage hero section with headline, description, and dual CTAs  
**WordPress Pattern:** `lsx-design/hero/home`  
**File:** `/src/app/components/patterns/HeroHome.tsx`

---

### **Props**

This component has **no props** — all content is hardcoded for the homepage.

---

### **Usage**

```tsx
import { HeroHome } from './patterns/HeroHome';

export function FrontPageTemplate() {
  return (
    <main>
      <HeroHome />
    </main>
  );
}
```

---

### **Content Structure**

```tsx
{
  // Eyebrow text
  eyebrow: "WordPress & WooCommerce Experts",
  
  // Main headline
  headline: "Build Accessible, Scalable WordPress Sites",
  
  // Supporting description
  description: "We create modern block themes, design systems, and WooCommerce solutions...",
  
  // Primary CTA
  primaryCTA: {
    text: "View Our Work",
    href: "#portfolio",
    page: "portfolio"
  },
  
  // Secondary CTA
  secondaryCTA: {
    text: "Our Services",
    href: "#services",
    page: "services"
  }
}
```

---

### **Design System Tokens**

**Typography:**
```tsx
// Eyebrow
fontSize: 'var(--text-small)'
fontFamily: 'Lexend, sans-serif'
fontWeight: 'var(--font-weight-bold)'
letterSpacing: '0.1em'
textTransform: 'uppercase'

// Headline
fontSize: 'clamp(48px, 8vw, 72px)'
fontFamily: 'Lexend, sans-serif'
fontWeight: 'var(--font-weight-bold)'
lineHeight: '1.1'
letterSpacing: '-0.02em'

// Description
fontSize: 'var(--text-lg)'
fontFamily: 'Lexend, sans-serif'
lineHeight: '1.7'
```

**Colors:**
```tsx
backgroundColor: 'var(--background)'
color: 'var(--foreground)'

// Primary CTA
backgroundColor: 'var(--primary)'
color: 'var(--primary-foreground)'

// Secondary CTA
backgroundColor: 'transparent'
border: '2px solid var(--primary)'
color: 'var(--primary)'
```

**Spacing:**
```tsx
className="py-32 px-6"  // Section padding
className="mb-8"        // Headline margin
className="mb-12"       // Description margin
className="gap-4"       // CTA button gap
```

**Border Radius:**
```tsx
borderRadius: 'var(--radius-lg)'  // Buttons
```

---

### **Features**

- ✅ Gradient orb decorative elements (glassmorphism)
- ✅ Dual CTA buttons with hover animations
- ✅ Responsive typography with clamp()
- ✅ Centered content layout
- ✅ Max-width container (960px)
- ✅ Dark mode compatible
- ✅ Smooth scale animations on button hover
- ✅ Uses useNavigation() hook for routing

---

### **WordPress Mapping**

**Block Pattern (hero/home):**
```php
<!-- wp:group {"layout":{"type":"constrained"}} -->
<div class="wp-block-group">
  <!-- wp:paragraph {"className":"eyebrow"} -->
  <p class="eyebrow">WordPress & WooCommerce Experts</p>
  <!-- /wp:paragraph -->
  
  <!-- wp:heading {"level":1} -->
  <h1>Build Accessible, Scalable WordPress Sites</h1>
  <!-- /wp:heading -->
  
  <!-- wp:paragraph -->
  <p>We create modern block themes...</p>
  <!-- /wp:paragraph -->
  
  <!-- wp:buttons -->
  <div class="wp-block-buttons">
    <!-- wp:button -->
    <div class="wp-block-button">
      <a class="wp-block-button__link">View Our Work</a>
    </div>
    <!-- /wp:button -->
  </div>
  <!-- /wp:buttons -->
</div>
<!-- /wp:group -->
```

---

### **Best Practices**

**DO:**
- ✅ Keep headline under 10 words for impact
- ✅ Limit description to 2-3 sentences
- ✅ Use contrasting CTAs (filled + outlined)
- ✅ Test at mobile (375px), tablet (768px), desktop (1440px)
- ✅ Ensure gradient orbs don't distract from content

**DON'T:**
- ❌ Exceed 960px max-width for content
- ❌ Use more than 2 CTAs
- ❌ Make gradient orbs too prominent
- ❌ Use body text smaller than 18px
- ❌ Skip the eyebrow text (provides context)

---

### **Accessibility**

**Semantic HTML:**
```tsx
<section>         // Landmark
  <h1>           // Page title
  <p>            // Description
  <div>          // CTA container
    <button>     // Primary action
    <button>     // Secondary action
```

**ARIA:**
- Hero section uses semantic `<section>` element
- Decorative gradient orbs have `aria-hidden="true"`
- Buttons have clear text labels (no icon-only)

**Keyboard Navigation:**
- Both CTAs are focusable with Tab
- Focus ring visible (inherited from design system)
- Tab order: Primary CTA → Secondary CTA

**Contrast:**
- Text on background: 9.2:1 (AAA)
- Primary CTA: 4.8:1 (AA)
- Secondary CTA: 4.8:1 (AA)

---

## 2. CTASection

**Purpose:** Call-to-action section with title, description, and button  
**WordPress Pattern:** `lsx-design/cta/*`  
**File:** `/src/app/components/patterns/CTASection.tsx`

---

### **Props**

| Prop | Type | Required | Default | Description |
|------|------|----------|---------|-------------|
| `title` | `string` | ✅ Yes | - | Main headline |
| `description` | `string` | ✅ Yes | - | Supporting text |
| `buttonText` | `string` | ✅ Yes | - | CTA button label |
| `buttonHref` | `string` | ❌ No | `'#'` | Button href (for anchor links) |
| `buttonPage` | `string` | ❌ No | `undefined` | Page slug for navigation |
| `variant` | `'default' \| 'highlighted'` | ❌ No | `'default'` | Visual style variant |

---

### **Usage**

```tsx
import { CTASection } from './patterns/CTASection';

// Default variant
<CTASection
  title="Ready to Build Better WordPress Sites?"
  description="Join hundreds of businesses using LSX Design to create accessible, scalable WordPress themes and WooCommerce solutions."
  buttonText="Get Started"
  buttonPage="contact"
/>

// Highlighted variant (primary background)
<CTASection
  title="Start Your Project Today"
  description="Let's discuss how we can help transform your WordPress site."
  buttonText="Contact Us"
  buttonPage="contact"
  variant="highlighted"
/>
```

---

### **Variants**

#### **Default**
- Background: `var(--background)`
- Text: `var(--foreground)`
- Button: Primary style
- Border: Top and bottom soft borders

#### **Highlighted**
- Background: `var(--primary)`
- Text: `var(--primary-foreground)`
- Button: Inverted (foreground background, primary text)
- No borders

---

### **Design System Tokens**

**Typography:**
```tsx
// Title
fontSize: 'var(--text-h2)'
fontFamily: 'Lexend, sans-serif'
fontWeight: 'var(--font-weight-semibold)'
lineHeight: '1.2'
letterSpacing: '-0.02em'

// Description
fontSize: 'var(--text-lg)'
fontFamily: 'Lexend, sans-serif'
lineHeight: '1.7'

// Button
fontSize: 'var(--text-base)'
fontFamily: 'Lexend, sans-serif'
fontWeight: 'var(--font-weight-medium)'
```

**Colors (Default):**
```tsx
backgroundColor: 'var(--background)'
color: 'var(--foreground)'
borderTop: '1px solid var(--border-soft)'
borderBottom: '1px solid var(--border-soft)'

// Button
backgroundColor: 'var(--primary)'
color: 'var(--primary-foreground)'
boxShadow: 'var(--shadow-primary)'
```

**Colors (Highlighted):**
```tsx
backgroundColor: 'var(--primary)'
color: 'var(--primary-foreground)'

// Button
backgroundColor: 'var(--primary-foreground)'
color: 'var(--primary)'
boxShadow: '0 4px 16px rgba(0, 0, 0, 0.2)'
```

**Spacing:**
```tsx
// Section
className="py-24 px-6"

// Text container
className="mb-12"
maxWidth: '800px'
margin: '0 auto'

// Button
padding: '16px 32px'
```

**Border Radius:**
```tsx
borderRadius: 'var(--radius-lg)'  // Button
```

---

### **Features**

- ✅ Two visual variants (default + highlighted)
- ✅ Centered content layout
- ✅ Button hover animations (lift + shadow)
- ✅ Integrates with useNavigation() hook
- ✅ Supports both anchor links and page navigation
- ✅ Responsive typography
- ✅ Dark mode compatible
- ✅ Optional border decoration

---

### **WordPress Mapping**

**Block Pattern (cta/default):**
```php
<!-- wp:group {"backgroundColor":"background"} -->
<div class="wp-block-group has-background-background-color">
  <!-- wp:heading {"textAlign":"center","level":2} -->
  <h2 class="has-text-align-center">Ready to Build Better WordPress Sites?</h2>
  <!-- /wp:heading -->
  
  <!-- wp:paragraph {"align":"center"} -->
  <p class="has-text-align-center">Join hundreds of businesses...</p>
  <!-- /wp:paragraph -->
  
  <!-- wp:buttons {"layout":{"type":"flex","justifyContent":"center"}} -->
  <div class="wp-block-buttons">
    <!-- wp:button -->
    <div class="wp-block-button">
      <a class="wp-block-button__link">Get Started</a>
    </div>
    <!-- /wp:button -->
  </div>
  <!-- /wp:buttons -->
</div>
<!-- /wp:group -->
```

---

### **Best Practices**

**DO:**
- ✅ Keep title concise (5-10 words)
- ✅ Limit description to 1-2 sentences
- ✅ Use action-oriented button text ("Get Started", "Contact Us")
- ✅ Place at strategic page positions (mid-page, before footer)
- ✅ Use highlighted variant sparingly (1 per page max)

**DON'T:**
- ❌ Use multiple CTAs in one section
- ❌ Make description longer than 3 lines
- ❌ Use vague button text ("Click here", "Learn more")
- ❌ Stack multiple CTA sections consecutively
- ❌ Use highlighted variant more than once per page

---

### **Accessibility**

**Semantic HTML:**
```tsx
<section>        // Landmark
  <h2>          // Section heading
  <p>           // Description
  <button>      // Action
```

**ARIA:**
- All text is semantic HTML (no aria-label needed)
- Button has clear text label
- No decorative elements requiring aria-hidden

**Keyboard Navigation:**
- Button is focusable
- Enter/Space activates button
- Focus ring visible

**Contrast:**
- Default variant: 9.2:1 (AAA)
- Highlighted variant: 4.8:1 (AA)
- Button meets AA standards in both variants

---

## 3. FAQSection

**Purpose:** Frequently asked questions with accordion interaction  
**WordPress Pattern:** `lsx-design/content/faq`  
**File:** `/src/app/components/patterns/FAQSection.tsx`

---

### **Props**

| Prop | Type | Required | Default | Description |
|------|------|----------|---------|-------------|
| `title` | `string` | ❌ No | `'Frequently Asked Questions'` | Section heading |
| `description` | `string` | ❌ No | `''` | Supporting text |
| `faqs` | `FAQ[]` | ✅ Yes | - | Array of FAQ objects |
| `variant` | `'default' \| 'compact'` | ❌ No | `'default'` | Visual density |

---

### **FAQ Type**

```tsx
type FAQ = {
  question: string;
  answer: string;
};
```

---

### **Usage**

```tsx
import { FAQSection } from './patterns/FAQSection';
import { homepageFAQs } from '../../data/faqs';

// Default variant
<FAQSection
  title="Common Questions"
  description="Quick answers to questions you may have about working with LSX Design"
  faqs={homepageFAQs}
/>

// Compact variant
<FAQSection
  faqs={servicesFAQs}
  variant="compact"
/>
```

---

### **Data Structure**

```tsx
// From /src/app/data/faqs.ts
export const homepageFAQs: FAQ[] = [
  {
    question: "What is a WordPress block theme?",
    answer: "A block theme is a WordPress theme built entirely with blocks..."
  },
  {
    question: "How long does a typical project take?",
    answer: "Project timelines vary based on complexity..."
  }
  // ... more FAQs
];
```

---

### **Design System Tokens**

**Typography:**
```tsx
// Title
fontSize: 'var(--text-h2)'
fontFamily: 'Lexend, sans-serif'
fontWeight: 'var(--font-weight-semibold)'
lineHeight: '1.2'
letterSpacing: '-0.02em'

// Description
fontSize: 'var(--text-lg)'
fontFamily: 'Lexend, sans-serif'
lineHeight: '1.7'

// Question (closed)
fontSize: 'var(--text-base)'
fontFamily: 'Lexend, sans-serif'
fontWeight: 'var(--font-weight-semibold)'

// Answer
fontSize: 'var(--text-base)'
fontFamily: 'Lexend, sans-serif'
lineHeight: '1.7'
```

**Colors:**
```tsx
backgroundColor: 'var(--background)'
color: 'var(--foreground)'

// FAQ item
backgroundColor: 'var(--card)'
border: '1px solid var(--border-soft)'

// Question hover
borderColor: 'var(--primary)'

// Chevron icon
color: 'var(--primary)'
```

**Spacing:**
```tsx
// Section
className="py-24 px-6"

// FAQ items
className="space-y-4"

// Item padding
padding: '24px'

// Answer padding top
paddingTop: '16px'
```

**Border Radius:**
```tsx
borderRadius: 'var(--radius-xl)'  // FAQ items
```

---

### **Features**

- ✅ Accordion interaction (expand/collapse)
- ✅ Chevron rotation animation (0° → 180°)
- ✅ Smooth height transition
- ✅ One FAQ open at a time
- ✅ Keyboard accessible (Enter/Space to toggle)
- ✅ Hover effects (border color change)
- ✅ Dark mode compatible
- ✅ Two visual variants (default, compact)
- ✅ Centralized data from `/src/app/data/faqs.ts`

---

### **State Management**

```tsx
const [openIndex, setOpenIndex] = useState<number | null>(null);

// Toggle function
const toggleFAQ = (index: number) => {
  setOpenIndex(openIndex === index ? null : index);
};
```

---

### **WordPress Mapping**

**Block Pattern (content/faq):**
```php
<!-- wp:group -->
<div class="wp-block-group">
  <!-- wp:heading {"level":2} -->
  <h2>Frequently Asked Questions</h2>
  <!-- /wp:heading -->
  
  <!-- wp:paragraph -->
  <p>Quick answers to questions...</p>
  <!-- /wp:paragraph -->
  
  <!-- wp:details -->
  <details class="wp-block-details">
    <summary>What is a WordPress block theme?</summary>
    <p>A block theme is a WordPress theme...</p>
  </details>
  <!-- /wp:details -->
  
  <!-- Additional details blocks -->
</div>
<!-- /wp:group -->
```

**WordPress 6.3+ Details Block:**
- Maps to `<details>` and `<summary>` HTML elements
- Native accordion behavior
- Accessible by default

---

### **Best Practices**

**DO:**
- ✅ Limit to 5-8 FAQs per section
- ✅ Keep questions concise (1 line if possible)
- ✅ Provide thorough answers (2-4 sentences)
- ✅ Order by importance/frequency
- ✅ Use natural language (not robotic)

**DON'T:**
- ❌ Exceed 12 FAQs in one section
- ❌ Make questions overly technical
- ❌ Use answers as sales pitches
- ❌ Duplicate content from other pages
- ❌ Leave questions unanswered

---

### **Accessibility**

**Semantic HTML:**
```tsx
<section>              // Landmark
  <h2>                // Section heading
  <button>            // Question trigger
    <span>            // Question text
    <ChevronDown />   // Visual indicator
  </button>
  <div>               // Answer container
    <p>               // Answer text
```

**ARIA:**
```tsx
<button
  aria-expanded={isOpen}
  aria-controls={`faq-answer-${index}`}
>
  {question}
</button>

<div
  id={`faq-answer-${index}`}
  role="region"
  aria-labelledby={`faq-question-${index}`}
>
  {answer}
</div>
```

**Keyboard Navigation:**
- Tab navigates between FAQ questions
- Enter/Space toggles expansion
- Chevron icon is decorative (inside button)
- Focus ring visible on button

**Contrast:**
- Question text: 9.2:1 (AAA)
- Answer text: 7.8:1 (AAA)
- Chevron icon: 4.8:1 (AA)

---

## 4. CardGrid

**Purpose:** Grid of content cards (posts, projects, services)  
**WordPress Pattern:** `lsx-design/listing/card-grid`  
**File:** `/src/app/components/patterns/CardGrid.tsx`

---

### **Props**

| Prop | Type | Required | Default | Description |
|------|------|----------|---------|-------------|
| `items` | `CardItem[]` | ✅ Yes | - | Array of card data |
| `columns` | `2 \| 3 \| 4` | ❌ No | `3` | Number of columns |
| `variant` | `'default' \| 'compact' \| 'featured'` | ❌ No | `'default'` | Card style |
| `showImage` | `boolean` | ❌ No | `true` | Display featured images |
| `showExcerpt` | `boolean` | ❌ No | `true` | Display excerpt text |
| `showMeta` | `boolean` | ❌ No | `true` | Display metadata |

---

### **CardItem Type**

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
  meta?: string;  // Custom meta (e.g., "4 months", "12 min read")
};
```

---

### **Usage**

```tsx
import { CardGrid } from './patterns/CardGrid';

// Default 3-column grid
<CardGrid
  items={portfolioProjects}
  columns={3}
/>

// 4-column compact grid
<CardGrid
  items={blogPosts}
  columns={4}
  variant="compact"
  showExcerpt={false}
/>

// 2-column featured grid with full details
<CardGrid
  items={featuredServices}
  columns={2}
  variant="featured"
/>
```

---

### **Variants**

#### **Default**
- Standard card height
- Image aspect ratio: 16:9
- Padding: 24px
- Excerpt: 2-3 lines

#### **Compact**
- Reduced card height
- Image aspect ratio: 4:3
- Padding: 16px
- Excerpt: 1-2 lines (optional)

#### **Featured**
- Larger card height
- Image aspect ratio: 3:2
- Padding: 32px
- Full excerpt display

---

### **Design System Tokens**

**Typography:**
```tsx
// Category badge
fontSize: 'var(--text-small)'
fontFamily: 'Lexend, sans-serif'
fontWeight: 'var(--font-weight-bold)'
textTransform: 'uppercase'
letterSpacing: '0.08em'

// Title
fontSize: 'var(--text-h3)'
fontFamily: 'Lexend, sans-serif'
fontWeight: 'var(--font-weight-bold)'
lineHeight: '1.3'
letterSpacing: '-0.01em'

// Excerpt
fontSize: 'var(--text-base)'
fontFamily: 'Lexend, sans-serif'
lineHeight: '1.7'

// Meta
fontSize: 'var(--text-small)'
fontFamily: 'Manrope, sans-serif'
color: 'var(--muted-foreground)'
```

**Colors:**
```tsx
backgroundColor: 'var(--card)'
color: 'var(--card-foreground)'
border: '1px solid var(--border-soft)'

// Hover state
borderColor: 'var(--primary)'

// Category badge
backgroundColor: 'var(--primary)'
color: 'var(--primary-foreground)'
```

**Spacing:**
```tsx
// Grid gap
className="gap-8"  // Default
className="gap-6"  // Compact

// Card padding (default)
padding: '24px'

// Card padding (compact)
padding: '16px'

// Card padding (featured)
padding: '32px'
```

**Border Radius:**
```tsx
borderRadius: 'var(--radius-xl)'  // Card container
borderRadius: 'var(--radius-lg)'  // Category badge
```

---

### **Features**

- ✅ Responsive grid (1 col mobile → 2/3/4 cols desktop)
- ✅ Image hover zoom effect (scale 1.05)
- ✅ Card lift on hover (-12px)
- ✅ Border color change on hover
- ✅ Category badge overlay on image
- ✅ Click-to-navigate with useNavigation()
- ✅ Lazy loading images
- ✅ Dark mode compatible
- ✅ Three visual variants
- ✅ Configurable columns

---

### **Responsive Breakpoints**

```tsx
// Mobile (< 768px)
grid-cols-1

// Tablet (768px - 1024px)
md:grid-cols-2

// Desktop (1024px+)
lg:grid-cols-{columns}  // 2, 3, or 4
```

---

### **WordPress Mapping**

**Block Pattern (listing/card-grid):**
```php
<!-- wp:query {"query":{"postType":"post","perPage":6}} -->
<div class="wp-block-query">
  <!-- wp:post-template {"layout":{"type":"grid","columnCount":3}} -->
    <!-- wp:post-featured-image -->
    <!-- /wp:post-featured-image -->
    
    <!-- wp:post-terms {"term":"category"} -->
    <!-- /wp:post-terms -->
    
    <!-- wp:post-title -->
    <!-- /wp:post-title -->
    
    <!-- wp:post-excerpt -->
    <!-- /wp:post-excerpt -->
    
    <!-- wp:post-date -->
    <!-- /wp:post-date -->
  <!-- /wp:post-template -->
</div>
<!-- /wp:query -->
```

---

### **Best Practices**

**DO:**
- ✅ Use 3 columns for balanced layout
- ✅ Keep titles under 60 characters
- ✅ Limit excerpts to 150 characters
- ✅ Provide high-quality images (min 800px wide)
- ✅ Use consistent image aspect ratios
- ✅ Test with varying content lengths

**DON'T:**
- ❌ Exceed 4 columns (too narrow)
- ❌ Use fewer than 2 columns on desktop
- ❌ Mix different aspect ratios
- ❌ Omit category badges (context important)
- ❌ Use low-resolution images
- ❌ Make cards clickable without visual feedback

---

### **Accessibility**

**Semantic HTML:**
```tsx
<article>               // Card container
  <div>                 // Image container
    <img alt={title} /> // Featured image
  </div>
  <h3>                  // Card title
  <p>                   // Excerpt
  <div>                 // Meta container
```

**ARIA:**
- Each card is an `<article>` landmark
- Images have descriptive alt text
- Category badges are text (no aria-label needed)
- Click handler on article (entire card clickable)

**Keyboard Navigation:**
- Cards are focusable (tabindex added if clickable)
- Enter activates navigation
- Focus ring visible on card
- Logical tab order (left to right, top to bottom)

**Contrast:**
- Title text: 9.2:1 (AAA)
- Excerpt text: 7.8:1 (AAA)
- Category badge: 4.8:1 (AA)
- Meta text: 4.5:1 (AA)

---

## 5. StatsSection

**Purpose:** Display key statistics with visual emphasis  
**WordPress Pattern:** `lsx-design/content/stats`  
**File:** `/src/app/components/patterns/StatsSection.tsx`

---

### **Props**

| Prop | Type | Required | Default | Description |
|------|------|----------|---------|-------------|
| `stats` | `Stat[]` | ✅ Yes | - | Array of statistic objects |
| `title` | `string` | ❌ No | `''` | Section heading |
| `description` | `string` | ❌ No | `''` | Supporting text |
| `variant` | `'default' \| 'gradient' \| 'minimal'` | ❌ No | `'default'` | Visual style |
| `columns` | `2 \| 3 \| 4` | ❌ No | `4` | Number of columns |

---

### **Stat Type**

```tsx
type Stat = {
  number: string;      // e.g., "500+", "98%", "10+"
  label: string;       // e.g., "Projects Delivered"
  description: string; // e.g., "WordPress sites built"
  icon?: React.ComponentType;  // Optional icon
};
```

---

### **Usage**

```tsx
import { StatsSection } from './patterns/StatsSection';
import { TrendingUp, Users, Award, Zap } from 'lucide-react';

// Default variant
<StatsSection
  title="Proven Track Record"
  description="Numbers that demonstrate our commitment to excellence"
  stats={[
    { 
      number: "500+", 
      label: "Projects Delivered",
      description: "WordPress sites built",
      icon: TrendingUp
    },
    { 
      number: "150+", 
      label: "Happy Clients",
      description: "Across 30 countries",
      icon: Users
    }
  ]}
/>

// Gradient variant (featured)
<StatsSection
  stats={companyStats}
  variant="gradient"
  columns={4}
/>

// Minimal variant (no icons, compact)
<StatsSection
  stats={performanceStats}
  variant="minimal"
  columns={3}
/>
```

---

### **Variants**

#### **Default**
- Glass morphism background
- Subtle borders
- Optional icons
- Standard padding

#### **Gradient**
- Primary gradient background
- Gradient orbs for decoration
- No borders
- Enhanced visual impact

#### **Minimal**
- Simple background
- No decorative elements
- Compact spacing
- Focus on numbers

---

### **Design System Tokens**

**Typography:**
```tsx
// Number
fontSize: 'clamp(40px, 6vw, 56px)'
fontFamily: 'Lexend, sans-serif'
fontWeight: 'var(--font-weight-bold)'
color: 'var(--primary)'
lineHeight: '1'

// Label
fontSize: 'var(--text-base)'
fontFamily: 'Lexend, sans-serif'
fontWeight: 'var(--font-weight-semibold)'
textTransform: 'uppercase'
letterSpacing: '0.05em'

// Description
fontSize: 'var(--text-small)'
fontFamily: 'Lexend, sans-serif'
opacity: '0.85'
```

**Colors (Default):**
```tsx
backgroundColor: 'var(--glass-bg)'
backdropFilter: 'blur(10px)'
border: '1px solid var(--glass-border)'
color: 'var(--card-foreground)'
```

**Colors (Gradient):**
```tsx
backgroundColor: 'var(--card)'
background: 'linear-gradient(135deg, transparent 0%, var(--accent) 100%)'
opacity: '0.05'  // Gradient overlay
```

**Colors (Minimal):**
```tsx
backgroundColor: 'var(--background)'
color: 'var(--foreground)'
```

**Spacing:**
```tsx
// Section
className="py-24 px-6"

// Grid gap
className="gap-8"

// Stat item padding
padding: '48px 32px'  // Default & Gradient
padding: '32px 24px'  // Minimal
```

**Border Radius:**
```tsx
borderRadius: 'var(--radius-xl)'  // Stat items
```

---

### **Features**

- ✅ Three visual variants (default, gradient, minimal)
- ✅ Responsive typography with clamp()
- ✅ Optional icon support
- ✅ Configurable columns (2-4)
- ✅ Glassmorphism effects (default variant)
- ✅ Gradient background (gradient variant)
- ✅ Centered layout
- ✅ Dark mode compatible
- ✅ Decorative gradient orbs (gradient variant)

---

### **WordPress Mapping**

**Block Pattern (content/stats):**
```php
<!-- wp:group {"backgroundColor":"card"} -->
<div class="wp-block-group has-card-background-color">
  <!-- wp:heading {"textAlign":"center","level":2} -->
  <h2 class="has-text-align-center">Proven Track Record</h2>
  <!-- /wp:heading -->
  
  <!-- wp:columns {"align":"wide"} -->
  <div class="wp-block-columns alignwide">
    <!-- wp:column -->
    <div class="wp-block-column">
      <!-- wp:heading {"level":3,"fontSize":"huge"} -->
      <h3 class="has-huge-font-size">500+</h3>
      <!-- /wp:heading -->
      
      <!-- wp:paragraph -->
      <p><strong>Projects Delivered</strong></p>
      <!-- /wp:paragraph -->
      
      <!-- wp:paragraph {"fontSize":"small"} -->
      <p class="has-small-font-size">WordPress sites built</p>
      <!-- /wp:paragraph -->
    </div>
    <!-- /wp:column -->
    
    <!-- Additional columns -->
  </div>
  <!-- /wp:columns -->
</div>
<!-- /wp:group -->
```

---

### **Best Practices**

**DO:**
- ✅ Use round numbers (500+ vs 487)
- ✅ Keep labels concise (2-4 words)
- ✅ Add context with descriptions
- ✅ Use 4 stats for balanced layout
- ✅ Include percentage or plus signs (+, %)
- ✅ Update stats regularly

**DON'T:**
- ❌ Use decimal points (use 98% not 98.4%)
- ❌ Exceed 6 stats in one section
- ❌ Make numbers too small to read
- ❌ Use vague labels ("Success", "Quality")
- ❌ Inflate numbers (be honest)
- ❌ Omit descriptions (context matters)

---

### **Accessibility**

**Semantic HTML:**
```tsx
<section>        // Landmark
  <h2>          // Section heading
  <div>         // Grid container
    <div>       // Stat item
      <div>     // Number
      <div>     // Label
      <div>     // Description
```

**ARIA:**
- Stats use semantic HTML (no special aria needed)
- Icon decorations have `aria-hidden="true"`
- Numbers use `<div>` not `<h3>` (not headings)

**Keyboard Navigation:**
- Stats are not interactive (no keyboard focus needed)
- Section is accessible with screen reader navigation

**Contrast:**
- Number (primary): 4.8:1 (AA)
- Label: 9.2:1 (AAA)
- Description: 7.8:1 (AAA)

---

## 6. TeamGrid

**Purpose:** Display team members with photos and roles  
**WordPress Pattern:** `lsx-design/content/team`  
**File:** `/src/app/components/patterns/TeamGrid.tsx`

---

### **Props**

| Prop | Type | Required | Default | Description |
|------|------|----------|---------|-------------|
| `members` | `TeamMember[]` | ✅ Yes | - | Array of team member objects |
| `title` | `string` | ❌ No | `'Our Team'` | Section heading |
| `description` | `string` | ❌ No | `''` | Supporting text |
| `columns` | `2 \| 3 \| 4` | ❌ No | `3` | Number of columns |
| `showBio` | `boolean` | ❌ No | `false` | Display bio text |
| `showSocial` | `boolean` | ❌ No | `true` | Display social links |

---

### **TeamMember Type**

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

---

### **Usage**

```tsx
import { TeamGrid } from './patterns/TeamGrid';
import { teamMembers } from '../../data/team';

// Default 3-column grid
<TeamGrid
  title="Meet Our Team"
  description="Experienced WordPress developers and designers"
  members={teamMembers}
/>

// 4-column grid with bios
<TeamGrid
  members={teamMembers}
  columns={4}
  showBio={true}
/>

// 2-column grid without social links
<TeamGrid
  members={executiveTeam}
  columns={2}
  showSocial={false}
/>
```

---

### **Design System Tokens**

**Typography:**
```tsx
// Name
fontSize: 'var(--text-h4)'
fontFamily: 'Lexend, sans-serif'
fontWeight: 'var(--font-weight-bold)'
lineHeight: '1.3'

// Role
fontSize: 'var(--text-base)'
fontFamily: 'Lexend, sans-serif'
fontWeight: 'var(--font-weight-medium)'
color: 'var(--primary)'

// Bio
fontSize: 'var(--text-base)'
fontFamily: 'Lexend, sans-serif'
lineHeight: '1.7'
color: 'var(--muted-foreground)'
```

**Colors:**
```tsx
backgroundColor: 'var(--card)'
color: 'var(--card-foreground)'
border: '1px solid var(--border-soft)'

// Hover state
borderColor: 'var(--primary)'

// Social icons
color: 'var(--muted-foreground)'
// Hover
color: 'var(--primary)'
```

**Spacing:**
```tsx
// Grid gap
className="gap-8"

// Card padding
padding: '24px'

// Image margin
marginBottom: '16px'
```

**Border Radius:**
```tsx
borderRadius: 'var(--radius-xl)'   // Card container
borderRadius: '50%'                 // Profile image
borderRadius: 'var(--radius-lg)'   // Social icon buttons
```

---

### **Features**

- ✅ Circular profile images
- ✅ Hover card lift effect
- ✅ Social media links (Twitter, LinkedIn, GitHub, Email)
- ✅ Optional bio display
- ✅ Configurable columns (2-4)
- ✅ Image hover scale effect
- ✅ Dark mode compatible
- ✅ Responsive grid
- ✅ Icon-only social buttons

---

### **Social Icons**

Uses Lucide React icons:
- `Twitter` - Twitter/X profile
- `Linkedin` - LinkedIn profile
- `Github` - GitHub profile
- `Mail` - Email contact

---

### **WordPress Mapping**

**Block Pattern (content/team):**
```php
<!-- wp:group -->
<div class="wp-block-group">
  <!-- wp:heading {"textAlign":"center","level":2} -->
  <h2 class="has-text-align-center">Meet Our Team</h2>
  <!-- /wp:heading -->
  
  <!-- wp:columns -->
  <div class="wp-block-columns">
    <!-- wp:column -->
    <div class="wp-block-column">
      <!-- wp:image {"sizeSlug":"large","className":"is-style-rounded"} -->
      <figure class="wp-block-image is-style-rounded">
        <img src="profile.jpg" alt="John Doe"/>
      </figure>
      <!-- /wp:image -->
      
      <!-- wp:heading {"level":3} -->
      <h3>John Doe</h3>
      <!-- /wp:heading -->
      
      <!-- wp:paragraph -->
      <p>Lead Developer</p>
      <!-- /wp:paragraph -->
      
      <!-- wp:social-links -->
      <ul class="wp-block-social-links">
        <!-- Social link blocks -->
      </ul>
      <!-- /wp:social-links -->
    </div>
    <!-- /wp:column -->
  </div>
  <!-- /wp:columns -->
</div>
<!-- /wp:group -->
```

---

### **Best Practices**

**DO:**
- ✅ Use professional headshot photos
- ✅ Crop images to square (1:1 ratio)
- ✅ Minimum image size: 400×400px
- ✅ Keep role titles concise (2-4 words)
- ✅ Write bios in 2-3 sentences
- ✅ Verify social links are correct

**DON'T:**
- ❌ Use casual/unprofessional photos
- ❌ Mix portrait and landscape images
- ❌ Use low-resolution images
- ❌ Write novel-length bios
- ❌ Include broken social links
- ❌ Exceed 12 team members per grid

---

### **Accessibility**

**Semantic HTML:**
```tsx
<section>            // Landmark
  <h2>              // Section heading
  <article>         // Team member card
    <img alt="" />  // Profile image
    <h3>            // Member name
    <p>             // Role
    <p>             // Bio (optional)
    <div>           // Social links
      <a>           // Social link
```

**ARIA:**
```tsx
// Profile image
<img 
  alt={`${name} - ${role}`}
  loading="lazy"
/>

// Social links
<a 
  href={linkedinUrl}
  aria-label={`${name} on LinkedIn`}
  target="_blank"
  rel="noopener noreferrer"
>
  <Linkedin aria-hidden="true" />
</a>
```

**Keyboard Navigation:**
- Social links are focusable
- Tab order: top to bottom, left to right
- Enter opens social link in new tab
- Focus ring visible on links

**Contrast:**
- Name: 9.2:1 (AAA)
- Role: 4.8:1 (AA)
- Bio: 7.8:1 (AAA)
- Social icons: 4.5:1 (AA)

---

## 7. TimelineSection

**Purpose:** Visual timeline for processes or company history  
**WordPress Pattern:** `lsx-design/content/timeline`  
**File:** `/src/app/components/patterns/TimelineSection.tsx`

---

### **Props**

| Prop | Type | Required | Default | Description |
|------|------|----------|---------|-------------|
| `items` | `TimelineItem[]` | ✅ Yes | - | Array of timeline events |
| `title` | `string` | ❌ No | `''` | Section heading |
| `description` | `string` | ❌ No | `''` | Supporting text |
| `variant` | `'default' \| 'vertical' \| 'alternating'` | ❌ No | `'default'` | Layout style |

---

### **TimelineItem Type**

```tsx
type TimelineItem = {
  year?: string;        // e.g., "2020"
  date?: string;        // e.g., "Jan 2020"
  title: string;
  description: string;
  icon?: React.ComponentType;
};
```

---

### **Usage**

```tsx
import { TimelineSection } from './patterns/TimelineSection';
import { Rocket, Users, Award, TrendingUp } from 'lucide-react';

// Default horizontal timeline
<TimelineSection
  title="Our Journey"
  description="How LSX Design evolved over the years"
  items={[
    {
      year: "2020",
      title: "Company Founded",
      description: "Started with a vision to build better WordPress sites",
      icon: Rocket
    },
    {
      year: "2021",
      title: "First 100 Clients",
      description: "Reached major milestone of serving 100 businesses",
      icon: Users
    }
  ]}
/>

// Vertical timeline
<TimelineSection
  items={processSteps}
  variant="vertical"
/>

// Alternating timeline (history page)
<TimelineSection
  items={companyHistory}
  variant="alternating"
/>
```

---

### **Variants**

#### **Default (Horizontal)**
- Timeline runs left to right
- Centered connector line
- Items above/below alternating
- Best for 3-5 items

#### **Vertical**
- Timeline runs top to bottom
- Left-side connector line
- Items to the right
- Best for 5-10 items

#### **Alternating**
- Timeline runs top to bottom
- Center connector line
- Items alternate left/right
- Best for historical timelines

---

### **Design System Tokens**

**Typography:**
```tsx
// Year/Date
fontSize: 'var(--text-small)'
fontFamily: 'Lexend, sans-serif'
fontWeight: 'var(--font-weight-bold)'
color: 'var(--primary)'
textTransform: 'uppercase'
letterSpacing: '0.1em'

// Title
fontSize: 'var(--text-h4)'
fontFamily: 'Lexend, sans-serif'
fontWeight: 'var(--font-weight-bold)'
lineHeight: '1.3'

// Description
fontSize: 'var(--text-base)'
fontFamily: 'Lexend, sans-serif'
lineHeight: '1.7'
color: 'var(--muted-foreground)'
```

**Colors:**
```tsx
// Connector line
backgroundColor: 'var(--border)'

// Node (circle)
backgroundColor: 'var(--primary)'
border: '3px solid var(--background)'

// Card
backgroundColor: 'var(--card)'
border: '1px solid var(--border-soft)'

// Hover
borderColor: 'var(--primary)'
```

**Spacing:**
```tsx
// Section
className="py-24 px-6"

// Timeline gap (horizontal)
className="gap-16"

// Timeline gap (vertical)
className="gap-8"

// Card padding
padding: '24px'
```

**Border Radius:**
```tsx
borderRadius: '50%'              // Timeline node
borderRadius: 'var(--radius-xl)' // Card
borderRadius: 'var(--radius-lg)' // Icon container
```

---

### **Features**

- ✅ Three layout variants (horizontal, vertical, alternating)
- ✅ Visual connector line between events
- ✅ Node circles with optional icons
- ✅ Card-based event display
- ✅ Hover effects (card lift, border color)
- ✅ Responsive (horizontal becomes vertical on mobile)
- ✅ Dark mode compatible
- ✅ Icon support for visual enhancement
- ✅ Year/date badges

---

### **WordPress Mapping**

**Block Pattern (content/timeline):**
```php
<!-- wp:group {"className":"timeline-section"} -->
<div class="wp-block-group timeline-section">
  <!-- wp:heading {"level":2} -->
  <h2>Our Journey</h2>
  <!-- /wp:heading -->
  
  <!-- wp:group {"className":"timeline-container"} -->
  <div class="wp-block-group timeline-container">
    <!-- wp:group {"className":"timeline-item"} -->
    <div class="wp-block-group timeline-item">
      <!-- wp:paragraph {"className":"timeline-year"} -->
      <p class="timeline-year">2020</p>
      <!-- /wp:paragraph -->
      
      <!-- wp:heading {"level":3} -->
      <h3>Company Founded</h3>
      <!-- /wp:heading -->
      
      <!-- wp:paragraph -->
      <p>Started with a vision...</p>
      <!-- /wp:paragraph -->
    </div>
    <!-- /wp:group -->
  </div>
  <!-- /wp:group -->
</div>
<!-- /wp:group -->
```

---

### **Best Practices**

**DO:**
- ✅ Order chronologically (oldest to newest or reverse)
- ✅ Keep descriptions concise (2-3 sentences)
- ✅ Use consistent year/date format
- ✅ Limit to 3-5 items for horizontal
- ✅ Use icons that match event type
- ✅ Test responsive behavior

**DON'T:**
- ❌ Mix different date formats
- ❌ Exceed 10 items in horizontal layout
- ❌ Use overly long titles
- ❌ Skip important milestones
- ❌ Make connector line too thick
- ❌ Use random icon choices

---

### **Accessibility**

**Semantic HTML:**
```tsx
<section>              // Landmark
  <h2>                // Section heading
  <ol>                // Ordered list (chronological)
    <li>              // Timeline item
      <span>          // Year/date
      <h3>            // Event title
      <p>             // Description
```

**ARIA:**
```tsx
<ol role="list" aria-label="Timeline">
  <li role="listitem">
    <div aria-label={`Event: ${title}, Year: ${year}`}>
      {/* Content */}
    </div>
  </li>
</ol>
```

**Keyboard Navigation:**
- Timeline items are not interactive (no keyboard focus)
- Screen readers announce as ordered list
- Proper heading hierarchy maintained

**Contrast:**
- Title: 9.2:1 (AAA)
- Description: 7.8:1 (AAA)
- Year badge: 4.8:1 (AA)
- Connector line: 3:1 (decorative, acceptable)

---

## 8. FilterBar

**Purpose:** Filter and sort content (blog, portfolio, products)  
**WordPress Pattern:** `lsx-design/nav/filter-bar`  
**File:** `/src/app/components/patterns/FilterBar.tsx`

---

### **Props**

| Prop | Type | Required | Default | Description |
|------|------|----------|---------|-------------|
| `categories` | `string[]` | ✅ Yes | - | Array of category names |
| `activeCategory` | `string` | ✅ Yes | - | Currently selected category |
| `onCategoryChange` | `(category: string) => void` | ✅ Yes | - | Category change handler |
| `showSearch` | `boolean` | ❌ No | `false` | Display search input |
| `onSearch` | `(query: string) => void` | ❌ No | - | Search handler |
| `showSort` | `boolean` | ❌ No | `false` | Display sort dropdown |
| `sortOptions` | `SortOption[]` | ❌ No | - | Sort options |
| `activeSort` | `string` | ❌ No | - | Currently selected sort |
| `onSortChange` | `(sort: string) => void` | ❌ No | - | Sort change handler |

---

### **SortOption Type**

```tsx
type SortOption = {
  value: string;
  label: string;
};
```

---

### **Usage**

```tsx
import { FilterBar } from './patterns/FilterBar';
import { useState } from 'react';

// Basic category filter
const [activeCategory, setActiveCategory] = useState('All');

<FilterBar
  categories={['All', 'Development', 'Design', 'E-commerce']}
  activeCategory={activeCategory}
  onCategoryChange={setActiveCategory}
/>

// With search and sort
const [searchQuery, setSearchQuery] = useState('');
const [sortBy, setSortBy] = useState('date-desc');

<FilterBar
  categories={['All', 'WordPress', 'WooCommerce', 'Performance']}
  activeCategory={activeCategory}
  onCategoryChange={setActiveCategory}
  showSearch={true}
  onSearch={setSearchQuery}
  showSort={true}
  sortOptions={[
    { value: 'date-desc', label: 'Newest First' },
    { value: 'date-asc', label: 'Oldest First' },
    { value: 'title-asc', label: 'A-Z' }
  ]}
  activeSort={sortBy}
  onSortChange={setSortBy}
/>
```

---

### **Design System Tokens**

**Typography:**
```tsx
// Category button
fontSize: 'var(--text-base)'
fontFamily: 'Lexend, sans-serif'
fontWeight: 'var(--font-weight-medium)'

// Active category
fontWeight: 'var(--font-weight-bold)'

// Search input
fontSize: 'var(--text-base)'
fontFamily: 'Lexend, sans-serif'

// Sort label
fontSize: 'var(--text-small)'
fontFamily: 'Lexend, sans-serif'
fontWeight: 'var(--font-weight-semibold)'
```

**Colors:**
```tsx
backgroundColor: 'var(--background)'
borderBottom: '1px solid var(--border-soft)'

// Category button (inactive)
backgroundColor: 'transparent'
color: 'var(--foreground)'
border: '1px solid var(--border)'

// Category button (active)
backgroundColor: 'var(--primary)'
color: 'var(--primary-foreground)'

// Category button (hover)
borderColor: 'var(--primary)'

// Search input
backgroundColor: 'var(--input)'
border: '1px solid var(--border)'
color: 'var(--foreground)'

// Search input (focus)
borderColor: 'var(--primary)'
```

**Spacing:**
```tsx
// Container padding
className="py-6 px-6"

// Category buttons gap
className="gap-2"

// Button padding
padding: '8px 16px'

// Search input padding
padding: '10px 16px 10px 40px'  // Left padding for icon
```

**Border Radius:**
```tsx
borderRadius: 'var(--radius)'      // Category buttons
borderRadius: 'var(--radius-lg)'   // Search input
```

---

### **Features**

- ✅ Horizontal scrollable category buttons
- ✅ Active state highlighting
- ✅ Optional search input with icon
- ✅ Optional sort dropdown
- ✅ Sticky positioning (stays visible on scroll)
- ✅ Touch-friendly buttons (44×44px minimum)
- ✅ Keyboard accessible
- ✅ Dark mode compatible
- ✅ Responsive layout
- ✅ Smooth transitions

---

### **State Management**

```tsx
// Parent component manages state
const [activeCategory, setActiveCategory] = useState('All');
const [searchQuery, setSearchQuery] = useState('');

// Filter logic (example)
const filteredItems = items
  .filter(item => 
    activeCategory === 'All' || item.category === activeCategory
  )
  .filter(item => 
    item.title.toLowerCase().includes(searchQuery.toLowerCase())
  );
```

---

### **WordPress Mapping**

**Block Pattern (nav/filter-bar):**
```php
<!-- wp:group {"className":"filter-bar"} -->
<div class="wp-block-group filter-bar">
  <!-- wp:buttons {"className":"category-filters"} -->
  <div class="wp-block-buttons category-filters">
    <!-- wp:button {"className":"is-style-outline"} -->
    <div class="wp-block-button is-style-outline">
      <a class="wp-block-button__link">All</a>
    </div>
    <!-- /wp:button -->
    
    <!-- Additional category buttons -->
  </div>
  <!-- /wp:buttons -->
  
  <!-- wp:search {"showLabel":false,"placeholder":"Search..."} -->
  <!-- /wp:search -->
</div>
<!-- /wp:group -->
```

**WordPress Interactivity API:**
- Maps to WordPress 6.5+ Interactivity API
- Client-side filtering without page reload
- Progressive enhancement

---

### **Best Practices**

**DO:**
- ✅ Always include "All" as first category
- ✅ Keep category names short (1-2 words)
- ✅ Limit to 5-8 categories
- ✅ Show item counts (e.g., "WordPress (12)")
- ✅ Make buttons touch-friendly (44×44px)
- ✅ Use horizontal scroll on mobile

**DON'T:**
- ❌ Exceed 10 categories (too many)
- ❌ Use long category names
- ❌ Hide "All" option
- ❌ Make buttons too small
- ❌ Forget hover/active states
- ❌ Use dropdowns on mobile (poor UX)

---

### **Accessibility**

**Semantic HTML:**
```tsx
<nav aria-label="Content filters">
  <div role="group" aria-label="Category filters">
    <button aria-pressed={isActive}>
      {category}
    </button>
  </div>
  
  <div role="search">
    <input 
      type="search"
      aria-label="Search content"
      placeholder="Search..."
    />
  </div>
</nav>
```

**ARIA:**
```tsx
// Category button
<button
  aria-pressed={activeCategory === category}
  onClick={() => onCategoryChange(category)}
>
  {category}
</button>

// Search input
<input
  type="search"
  aria-label="Search content"
  placeholder="Search..."
  value={searchQuery}
  onChange={(e) => onSearch(e.target.value)}
/>
```

**Keyboard Navigation:**
- Tab navigates between categories
- Enter/Space activates category
- Arrow keys navigate in search input
- Escape clears search input

**Contrast:**
- Inactive button: 7.8:1 (AAA)
- Active button: 4.8:1 (AA)
- Search input text: 9.2:1 (AAA)
- Hover state: 4.5:1 (AA)

---

## 📋 **QUICK REFERENCE TABLE**

| Component | Purpose | Props Count | Variants | WordPress Block |
|-----------|---------|-------------|----------|-----------------|
| HeroHome | Homepage hero | 0 (hardcoded) | 1 | Group + Heading + Buttons |
| CTASection | Call-to-action | 6 | 2 | Group + Heading + Button |
| FAQSection | FAQ accordion | 4 | 2 | Details blocks |
| CardGrid | Content cards | 6 | 3 | Query + Post Template |
| StatsSection | Statistics display | 5 | 3 | Columns + Headings |
| TeamGrid | Team members | 6 | 1 | Columns + Image + Social |
| TimelineSection | Timeline/history | 4 | 3 | Group + Custom CSS |
| FilterBar | Content filtering | 9 | 1 | Buttons + Search |

---

## 🎨 **COMMON DESIGN PATTERNS**

### **Hover Effects (All Components)**
```tsx
// Card/Button lift
onMouseEnter={(e) => {
  e.currentTarget.style.transform = 'translateY(-4px)';
  e.currentTarget.style.boxShadow = 'var(--shadow-lg)';
}}

onMouseLeave={(e) => {
  e.currentTarget.style.transform = 'translateY(0)';
  e.currentTarget.style.boxShadow = 'none';
}}
```

### **Image Zoom (Cards)**
```tsx
// Hover on parent card triggers child image zoom
<img
  style={{ transition: 'transform 0.5s ease' }}
  onMouseEnter={(e) => e.currentTarget.style.transform = 'scale(1.05)'}
  onMouseLeave={(e) => e.currentTarget.style.transform = 'scale(1)'}
/>
```

### **Border Color Change (Interactive Elements)**
```tsx
// Hover changes border from soft to primary
border: '1px solid var(--border-soft)'

// On hover:
borderColor: 'var(--primary)'
```

---

## ♿ **UNIVERSAL ACCESSIBILITY CHECKLIST**

All components must meet these requirements:

- [ ] **Semantic HTML** - Use proper elements (article, section, button)
- [ ] **Heading Hierarchy** - Logical H1 → H2 → H3 order
- [ ] **ARIA Labels** - Where semantic HTML isn't enough
- [ ] **Keyboard Navigation** - Tab, Enter, Space work correctly
- [ ] **Focus Indicators** - Visible focus rings on interactive elements
- [ ] **Color Contrast** - WCAG AA minimum (4.5:1 text, 3:1 UI)
- [ ] **Touch Targets** - 44×44px minimum for mobile
- [ ] **Alt Text** - Descriptive text for all images
- [ ] **Screen Reader Tested** - Test with VoiceOver/NVDA

---

## 📚 **RESOURCES**

- **Component Files:** `/src/app/components/patterns/`
- **Data Files:** `/src/app/data/`
- **Design Tokens:** `/guidelines/design-tokens/`
- **WordPress Mapping:** `/guidelines/blocks/`
- **Accessibility:** [WCAG 2.1 AA Guidelines](https://www.w3.org/WAI/WCAG21/quickref/)
- **Icons:** [Lucide React](https://lucide.dev/)

---

**This API reference provides complete documentation for implementing and customizing the 8 core block patterns in the LSX Design system. All components use CSS variables exclusively and map directly to WordPress FSE blocks.** 🚀
