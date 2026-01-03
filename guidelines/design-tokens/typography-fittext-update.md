# Typography Guidelines — Fit Text Feature (WordPress 6.9+)

**Last Updated:** December 25, 2024  
**WordPress Version:** 6.9+  
**Feature:** Fit Text to Container  
**Component:** `/src/app/components/common/FitText.tsx`

---

## 🎯 **WordPress 6.9 Fit Text Feature**

In 2025, WordPress introduced the **"Fit text to container"** typography option, designed to create high-impact, responsive text that automatically adjusts its font size to fill the width of its parent container perfectly. This feature eliminates the need for manual media query tweaks, ensuring a clean, instant design for standout elements.

### **What is Fit Text?**

A new typography option for text-based blocks, starting with the **Paragraph** and **Heading** blocks, that automatically adjusts font size to fill its container perfectly. Ideal for banners, callouts, and standout moments in your design. No manual tweaks, just an instant clean design.

---

## ✨ **Key Features**

### **1. Automatic Scaling**
- Text dynamically resizes to occupy the available horizontal space of its container
- Uses CSS container queries (`cqi` units) for modern browsers
- Falls back to `clamp()` for older browser support

### **2. Block Support**
- Initially available for core text-based blocks
- Specifically the **Paragraph** and **Heading** blocks
- Can be extended to other text-based blocks

### **3. Design Utility**
- Optimized for creating bold banners, callouts, and hero sections
- Text becomes a primary visual focus
- Perfect for high-impact messaging

### **4. Stretchy Variations**
- Transform standard blocks into "Stretchy Paragraph" or "Stretchy Heading" blocks
- Enables the fit-text behavior with a simple toggle

---

## 🛠️ **Implementation**

### **FitText Component API**

```tsx
import { FitText } from '../common/FitText';

// Basic usage
<FitText>
  BOLD STATEMENT
</FitText>

// With custom sizing
<FitText
  as="h1"
  containerSize={12}
  style={{ color: 'var(--primary)' }}
>
  Get Started Today
</FitText>

// In a hero section
<Section style={{ backgroundColor: 'var(--primary)' }}>
  <Container>
    <FitText as="h1" containerSize={15}>
      BUILD BETTER SITES
    </FitText>
  </Container>
</Section>
```

---

## 📐 **Component Props**

### **FitText**

| Prop | Type | Default | Description |
|------|------|---------|-------------|
| `children` | `ReactNode` | Required | Text content (single line recommended) |
| `as` | `'h1' \| 'h2' \| 'h3' \| 'h4' \| 'p'` | `'h1'` | HTML element to render |
| `containerSize` | `number` (1-20) | `10` | Container query size percentage |
| `textAlign` | `'left' \| 'center' \| 'right'` | `'center'` | Text alignment |
| `fontWeight` | `string` | `'var(--font-weight-bold)'` | Font weight |
| `lineHeight` | `string` | `'1.1'` | Line height |
| `letterSpacing` | `string` | `'-0.02em'` | Letter spacing |
| `style` | `CSSProperties` | `{}` | Additional inline styles |
| `className` | `string` | `''` | CSS class name |
| `ariaLabel` | `string` | `undefined` | ARIA label for accessibility |

### **containerSize Guide**

- **Low (1-5):** Small text, subtle emphasis
- **Medium (6-10):** Standard fit text, balanced impact
- **High (11-15):** Large text, strong impact
- **Very High (16-20):** Maximum impact, hero sections

**Formula:**
- Minimum font size: `containerSize / 5` rem
- Maximum font size: `containerSize * 0.8` rem
- Viewport-based: `containerSize` vw

---

## 🎨 **Specialized Variants**

### **1. FitTextParagraph**

Pre-configured for paragraph blocks with semibold weight:

```tsx
import { FitTextParagraph } from '../common/FitText';

<FitTextParagraph containerSize={8}>
  Create amazing experiences
</FitTextParagraph>
```

**Defaults:**
- Element: `<p>`
- Container Size: `8`
- Font Weight: `var(--font-weight-semibold)`

---

### **2. FitTextHeading**

Pre-configured for heading blocks with heading levels:

```tsx
import { FitTextHeading } from '../common/FitText';

<FitTextHeading level={1} containerSize={12}>
  Transform Your Business
</FitTextHeading>

<FitTextHeading level={2} containerSize={10}>
  Our Services
</FitTextHeading>
```

**Props:**
- `level`: `1 | 2 | 3 | 4` (determines H1-H4)
- All other FitText props apply

---

### **3. FitTextCallout**

Pre-styled callout with background for CTAs:

```tsx
import { FitTextCallout } from '../common/FitText';

<FitTextCallout
  backgroundColor="var(--accent)"
  color="var(--accent-foreground)"
  containerSize={8}
>
  LIMITED TIME OFFER
</FitTextCallout>
```

**Additional Props:**
- `backgroundColor`: CSS variable or color
- `color`: Text color
- Includes padding and border-radius styling

---

## 📱 **Responsive Behavior**

### **Modern Browsers (Container Queries)**

```css
fontSize: '12cqi'  /* 12% of container's inline size */
```

### **Fallback (Older Browsers)**

```css
fontSize: clamp(2.4rem, 12vw, 9.6rem)
```

**How It Works:**
1. Modern browsers use container queries for precise control
2. Older browsers fall back to viewport-based clamp()
3. Both methods ensure responsive scaling
4. No media queries required

---

## 💡 **Use Cases**

### **1. Hero Banners**

```tsx
<Section style={{ backgroundColor: 'var(--primary)', minHeight: '60vh' }}>
  <Container>
    <FitText as="h1" containerSize={15}>
      WORDPRESS EXPERTS YOU CAN TRUST
    </FitText>
  </Container>
</Section>
```

**Why:** Creates maximum visual impact for above-the-fold content

---

### **2. Callout Sections**

```tsx
<FitTextCallout
  backgroundColor="var(--accent)"
  containerSize={8}
>
  BLACK FRIDAY SALE
</FitTextCallout>
```

**Why:** Draws attention to promotional messages

---

### **3. Impact Headlines**

```tsx
<FitTextHeading level={2} containerSize={10}>
  500+ PROJECTS DELIVERED
</FitTextHeading>
```

**Why:** Emphasizes key statistics or achievements

---

### **4. CTA Sections**

```tsx
<Section style={{ backgroundColor: 'var(--primary)' }}>
  <Container>
    <FitText as="h2" containerSize={12}>
      GET STARTED TODAY
    </FitText>
  </Container>
</Section>
```

**Why:** Creates strong calls-to-action that scale beautifully

---

### **5. Standout Moments**

```tsx
<FitTextParagraph containerSize={6}>
  We don't just build websites. We create experiences.
</FitTextParagraph>
```

**Why:** Highlights key messages within content

---

## ✅ **Best Practices**

### **DO:**

✅ **Use for short text (1-5 words)**
  - "GET STARTED TODAY"
  - "WORDPRESS EXPERTS"
  - "500+ PROJECTS"

✅ **Keep single line only**
  - Text should not wrap
  - Design for one impactful line

✅ **Use bold font weights**
  - `var(--font-weight-bold)` or higher
  - Maximum visual impact

✅ **Ensure adequate contrast**
  - WCAG AA: 4.5:1 minimum
  - WCAG AAA: 7:1 recommended

✅ **Test at multiple viewport sizes**
  - Mobile: 375px
  - Tablet: 768px
  - Desktop: 1440px+

---

### **DON'T:**

❌ **Use for long paragraphs**
  - Not suitable for body text
  - Difficult to read when scaled

❌ **Mix with body text**
  - Creates jarring hierarchy
  - Use sparingly for impact

❌ **Overuse on a single page**
  - Loses impact if everywhere
  - 1-3 instances per page maximum

❌ **Use for critical information that must be readable**
  - Legal text, disclaimers, etc.
  - Must remain constant size

❌ **Ignore reduced motion preferences**
  - Component respects system preferences
  - No animation on scaling

---

## 🎯 **Design System Integration**

### **Typography Tokens**

All FitText components use design system tokens:

```tsx
fontFamily: 'Lexend, sans-serif'  // Only Lexend font
fontWeight: 'var(--font-weight-bold)'
letterSpacing: '-0.02em'
lineHeight: '1.1'
```

### **Color Tokens**

```tsx
color: 'var(--primary-foreground)'
backgroundColor: 'var(--primary)'
```

### **Border Radius**

```tsx
borderRadius: 'var(--radius-xl)'  // For FitTextCallout
```

---

## 🔧 **Technical Implementation**

### **Container Queries**

```tsx
<div style={{
  containerType: 'inline-size',
  width: '100%'
}}>
  <h1 style={{
    fontSize: '12cqi'  // 12% of container width
  }}>
    Text content
  </h1>
</div>
```

**Browser Support:**
- Chrome 105+
- Safari 16+
- Firefox 110+
- Edge 105+

---

### **Fallback Strategy**

```tsx
const minSize = Math.max(2, containerSize / 5);  // 2.4rem
const maxSize = Math.max(8, containerSize * 0.8);  // 9.6rem
const clampFallback = `clamp(${minSize}rem, ${containerSize}vw, ${maxSize}rem)`;

<h1 style={{
  fontSize: `${containerSize}cqi`,  // Modern browsers
  fontSize: clampFallback  // Fallback
}}>
```

---

## ♿ **Accessibility**

### **Screen Readers**

```tsx
<FitText ariaLabel="WordPress Experts You Can Trust">
  WORDPRESS EXPERTS
</FitText>
```

### **Keyboard Navigation**

- Text is not interactive
- No keyboard trap concerns
- Proper semantic HTML (`h1`, `h2`, `p`)

### **Contrast**

- Always use with adequate contrast
- Test with contrast checker tools
- Minimum WCAG AA compliance

### **Motion**

- No animation on font size changes
- Respects `prefers-reduced-motion`
- Instant scaling, no transitions

---

## 📊 **WordPress Mapping**

### **WordPress Paragraph Block**

```html
<!-- WordPress block with Fit Text enabled -->
<p class="has-fit-text">
  BOLD STATEMENT
</p>
```

Maps to:

```tsx
<FitTextParagraph>
  BOLD STATEMENT
</FitTextParagraph>
```

---

### **WordPress Heading Block**

```html
<!-- WordPress H1 with Fit Text enabled -->
<h1 class="has-fit-text">
  MAIN HEADING
</h1>
```

Maps to:

```tsx
<FitTextHeading level={1}>
  MAIN HEADING
</FitTextHeading>
```

---

## 📈 **Examples from LSX Design**

### **Homepage Hero (FrontPageTemplate)**

```tsx
<Section 
  spacing="xl" 
  style={{
    backgroundColor: 'var(--primary)',
    color: 'var(--primary-foreground)'
  }}
>
  <Container>
    <FitText 
      as="h2"
      containerSize={12}
      textAlign="center"
      style={{
        color: 'var(--primary-foreground)',
        marginBottom: '32px'
      }}
    >
      WORDPRESS EXPERTS YOU CAN TRUST
    </FitText>
    
    <p style={{
      fontFamily: 'Lexend, sans-serif',
      fontSize: 'var(--text-lg)',
      textAlign: 'center',
      maxWidth: '800px',
      margin: '0 auto'
    }}>
      We don't just build websites. We create design systems, 
      optimize performance, ensure accessibility, and deliver 
      solutions that scale with your business.
    </p>
  </Container>
</Section>
```

**Result:** High-impact statement that scales from mobile to desktop perfectly

---

## 🎨 **Sizing Recommendations**

| Use Case | containerSize | Example |
|----------|--------------|---------|
| **Hero Headlines** | 12-15 | "BUILD BETTER SITES" |
| **Section Headers** | 10-12 | "OUR SERVICES" |
| **Callouts** | 8-10 | "LIMITED OFFER" |
| **Stats/Numbers** | 10-14 | "500+ PROJECTS" |
| **Small Emphasis** | 6-8 | "New Feature" |

---

## 🔍 **Testing Checklist**

- [ ] Text scales appropriately at 375px (mobile)
- [ ] Text scales appropriately at 768px (tablet)
- [ ] Text scales appropriately at 1440px+ (desktop)
- [ ] Text remains single line across all breakpoints
- [ ] Contrast ratio meets WCAG AA (4.5:1 minimum)
- [ ] Proper semantic HTML element used
- [ ] ARIA label provided if needed
- [ ] Works in modern browsers (container queries)
- [ ] Works in older browsers (clamp fallback)
- [ ] Design system fonts used (Lexend only)
- [ ] CSS variables used for all colors
- [ ] No overflow or layout breaking

---

## 💾 **Component Source**

**File:** `/src/app/components/common/FitText.tsx`

**Exports:**
- `FitText` - Base component
- `FitTextParagraph` - Paragraph variant
- `FitTextHeading` - Heading variant
- `FitTextCallout` - Callout variant

**Dependencies:**
- React (CSSProperties, ReactNode)
- Design system CSS variables
- Lexend font family

---

## 📚 **Resources**

- [WordPress 6.9 Documentation](https://wordpress.org/documentation/article/paragraph-block/)
- [CSS Container Queries](https://developer.mozilla.org/en-US/docs/Web/CSS/CSS_Container_Queries)
- [CSS clamp() Function](https://developer.mozilla.org/en-US/docs/Web/CSS/clamp)
- [WCAG Contrast Guidelines](https://www.w3.org/WAI/WCAG21/Understanding/contrast-minimum.html)

---

**This typography feature represents a significant advancement in WordPress design capabilities, enabling bold, responsive typography without complex media queries or custom code.** 🚀
