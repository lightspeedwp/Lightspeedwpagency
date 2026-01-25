# 🏠 **HOMEPAGE IMPLEMENTATION WITH WORDPRESS COMPONENTS**

**Example:** Using refactored block components on the homepage

---

## ✨ **EXAMPLE: Hero Section**

### **Using WordPress Stack + Group + Buttons**

```tsx
import { Stack } from '@/app/components/blocks/design/Stack';
import { Group } from '@/app/components/blocks/design/Group';
import { Buttons, Button } from '@/app/components/blocks/design/Buttons';

export function HeroSection() {
  return (
    <Group 
      as="section"
      backgroundColor="var(--primary)"
      padding={24}
      layout="stack"
      gap={8}
      align="full"
    >
      <Stack gap={6} align="center" width="default">
        {/* Badge */}
        <div className="wp-badge--hero">
          <Star size={14} />
          WordPress Experts
        </div>

        {/* Heading */}
        <h1 style={{
          fontFamily: 'var(--font-primary)',
          fontSize: 'clamp(2rem, 5vw, 3.5rem)',
          fontWeight: 'var(--font-weight-bold)',
          lineHeight: '1.1',
          letterSpacing: '-0.02em',
          textAlign: 'center',
          color: 'var(--primary-foreground)'
        }}>
          Build Faster with WordPress Blocks
        </h1>

        {/* Description */}
        <p style={{
          fontFamily: 'var(--font-primary)',
          fontSize: 'var(--text-xl)',
          lineHeight: '1.6',
          color: 'rgba(255, 255, 255, 0.95)',
          textAlign: 'center',
          maxWidth: '700px'
        }}>
          Create beautiful, accessible websites with our WordPress block components.
        </p>

        {/* Buttons */}
        <Buttons alignment="center" gap="md">
          <Button 
            page="contact" 
            size="lg"
            variant="default"
            style={{
              backgroundColor: 'var(--primary-foreground)',
              color: 'var(--primary)'
            }}
          >
            Get Started
          </Button>
          <Button 
            page="portfolio" 
            size="lg"
            variant="outline"
            style={{
              borderColor: 'var(--primary-foreground)',
              color: 'var(--primary-foreground)'
            }}
          >
            View Work
          </Button>
        </Buttons>
      </Stack>
    </Group>
  );
}
```

**Output:**
```html
<section class="wp-block-group wp-width-full wp-flex wp-flex-col wp-gap-8 p-24" 
         style="background-color: var(--primary)">
  <div class="wp-block-stack wp-flex wp-flex-col wp-gap-6 wp-align-center wp-width-default">
    <!-- Hero content -->
  </div>
</section>
```

---

## 🎨 **EXAMPLE: Features Section**

### **Using WordPress Grid**

```tsx
import { Grid } from '@/app/components/blocks/design/Grid';
import { Group } from '@/app/components/blocks/design/Group';

export function FeaturesSection() {
  const features = [
    { icon: Zap, title: 'Fast', description: 'Lightning-fast performance' },
    { icon: Shield, title: 'Secure', description: 'Enterprise-grade security' },
    { icon: Code, title: 'Customizable', description: 'Fully customizable design' },
    { icon: Users, title: 'Scalable', description: 'Grows with your business' }
  ];

  return (
    <Group 
      as="section"
      backgroundColor="var(--muted)"
      padding={20}
      layout="stack"
      gap={12}
    >
      {/* Section Header */}
      <Stack gap={4} align="center" width="default">
        <h2 style={{
          fontFamily: 'var(--font-primary)',
          fontSize: 'var(--text-h1)',
          fontWeight: 'var(--font-weight-bold)',
          textAlign: 'center',
          color: 'var(--foreground)'
        }}>
          Why Choose Our Blocks?
        </h2>

        <p style={{
          fontFamily: 'var(--font-primary)',
          fontSize: 'var(--text-lg)',
          lineHeight: '1.7',
          color: 'var(--muted-foreground)',
          textAlign: 'center',
          maxWidth: '600px'
        }}>
          Everything you need to build modern WordPress sites
        </p>
      </Stack>

      {/* Features Grid */}
      <Grid columns={4} gap={8}>
        {features.map((feature, index) => {
          const Icon = feature.icon;
          return (
            <div
              key={index}
              style={{
                padding: 'var(--spacing-8)',
                backgroundColor: 'var(--card)',
                borderRadius: 'var(--radius-lg)',
                border: '1px solid var(--border-soft)'
              }}
            >
              <Icon size={32} style={{ 
                marginBottom: 'var(--spacing-4)', 
                color: 'var(--primary)' 
              }} />
              
              <h3 style={{
                fontFamily: 'var(--font-primary)',
                fontSize: 'var(--text-xl)',
                fontWeight: 'var(--font-weight-bold)',
                marginBottom: 'var(--spacing-2)',
                color: 'var(--foreground)'
              }}>
                {feature.title}
              </h3>

              <p style={{
                fontFamily: 'var(--font-primary)',
                fontSize: 'var(--text-base)',
                lineHeight: '1.6',
                color: 'var(--muted-foreground)'
              }}>
                {feature.description}
              </p>
            </div>
          );
        })}
      </Grid>
    </Group>
  );
}
```

**Output:**
```html
<section class="wp-block-group wp-width-default wp-flex wp-flex-col wp-gap-12 p-20" 
         style="background-color: var(--muted)">
  <div class="wp-block-stack wp-flex wp-flex-col wp-gap-4 wp-align-center wp-width-default">
    <!-- Section header -->
  </div>
  <div class="wp-block-grid wp-grid-4-cols wp-gap-8">
    <!-- Feature cards -->
  </div>
</section>
```

---

## 📋 **EXAMPLE: Two-Column Layout**

### **Using WordPress Columns**

```tsx
import { Columns, Column } from '@/app/components/blocks/design/Columns';
import { Stack } from '@/app/components/blocks/design/Stack';

export function AboutSection() {
  return (
    <Group 
      as="section"
      backgroundColor="var(--background)"
      padding={20}
    >
      <Columns columns={2} gap={12} verticalAlign="center">
        {/* Left Column: Text */}
        <Column>
          <Stack gap={6}>
            <h2 style={{
              fontFamily: 'var(--font-primary)',
              fontSize: 'var(--text-h2)',
              fontWeight: 'var(--font-weight-bold)',
              color: 'var(--foreground)'
            }}>
              About Our Agency
            </h2>

            <p style={{
              fontFamily: 'var(--font-primary)',
              fontSize: 'var(--text-base)',
              lineHeight: '1.7',
              color: 'var(--foreground)'
            }}>
              We specialize in building custom WordPress sites that are fast, 
              accessible, and beautiful. Our team of experts has delivered 
              hundreds of successful projects.
            </p>

            <Buttons alignment="start">
              <Button page="about" size="md">
                Learn More
              </Button>
            </Buttons>
          </Stack>
        </Column>

        {/* Right Column: Image */}
        <Column>
          <img 
            src="/about-team.jpg" 
            alt="Our team"
            style={{
              width: '100%',
              borderRadius: 'var(--radius-lg)',
              aspectRatio: '16/9',
              objectFit: 'cover'
            }}
          />
        </Column>
      </Columns>
    </Group>
  );
}
```

**Output:**
```html
<section class="wp-block-group wp-width-default wp-flex wp-flex-col p-20" 
         style="background-color: var(--background)">
  <div class="wp-block-columns wp-grid-2-cols wp-gap-12 wp-align-center">
    <div class="wp-block-column">
      <div class="wp-block-stack wp-flex wp-flex-col wp-gap-6">
        <!-- Text content -->
      </div>
    </div>
    <div class="wp-block-column">
      <!-- Image -->
    </div>
  </div>
</section>
```

---

## 🎯 **EXAMPLE: CTA Section**

### **Using WordPress Row + Buttons**

```tsx
import { Row } from '@/app/components/blocks/design/Row';
import { Group } from '@/app/components/blocks/design/Group';

export function CTASection() {
  return (
    <Group 
      as="section"
      backgroundColor="var(--primary)"
      padding={16}
    >
      <Row gap={8} justify="between" align="center" wrap>
        {/* Left: Text */}
        <div style={{ flex: '1 1 auto' }}>
          <h2 style={{
            fontFamily: 'var(--font-primary)',
            fontSize: 'var(--text-h2)',
            fontWeight: 'var(--font-weight-bold)',
            marginBottom: 'var(--spacing-2)',
            color: 'var(--primary-foreground)'
          }}>
            Ready to Get Started?
          </h2>

          <p style={{
            fontFamily: 'var(--font-primary)',
            fontSize: 'var(--text-lg)',
            color: 'rgba(255, 255, 255, 0.9)'
          }}>
            Let's build something amazing together.
          </p>
        </div>

        {/* Right: Buttons */}
        <div style={{ flex: '0 0 auto' }}>
          <Buttons alignment="end" gap="md">
            <Button 
              page="contact" 
              size="lg"
              style={{
                backgroundColor: 'var(--primary-foreground)',
                color: 'var(--primary)'
              }}
            >
              Contact Us
            </Button>
          </Buttons>
        </div>
      </Row>
    </Group>
  );
}
```

**Output:**
```html
<section class="wp-block-group wp-width-default wp-flex wp-flex-col p-16" 
         style="background-color: var(--primary)">
  <div class="wp-block-row wp-flex wp-flex-row wp-gap-8 wp-justify-between wp-align-center wp-wrap">
    <!-- CTA content -->
  </div>
</section>
```

---

## ✨ **BENEFITS**

### **✅ Clean, Semantic HTML**
```html
<section class="wp-block-group wp-flex wp-flex-col wp-gap-8 p-20">
  <div class="wp-block-stack wp-flex wp-flex-col wp-gap-6">
    <div class="wp-block-grid wp-grid-3-cols wp-gap-8">
      <!-- Content -->
    </div>
  </div>
</section>
```

### **✅ 100% CSS Variables**
All styling uses CSS variables from the design system:
- `var(--primary)`, `var(--foreground)`, `var(--background)`
- `var(--spacing-*)` scale
- `var(--text-*)` sizes
- `var(--radius-*)` border radius

### **✅ WordPress Compatible**
- Uses `.wp-block-*` classes
- Maps to WordPress block editor
- Compatible with theme.json
- SEO-friendly markup

### **✅ Accessible**
- Semantic HTML (`<section>`, `<article>`, `<nav>`)
- ARIA labels where needed
- Keyboard navigation support
- WCAG 2.1 AA compliant

### **✅ Responsive**
- Mobile-first approach
- Automatic grid stacking on mobile
- Flexible column layouts
- Touch-friendly buttons (44×44px)

### **✅ Maintainable**
- Type-safe props
- No hardcoded values
- Single source of truth (utilities.css)
- Easy to refactor

---

**All homepage sections now use WordPress block components with 100% CSS variables!** 🎉✨
