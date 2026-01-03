# Template Integration Examples — December 26, 2024

**Status:** Guide Complete  
**Purpose:** Show how to integrate container blocks into existing templates  
**Blocks:** Group, Grid, Stack, Row, Columns

---

## 📋 Integration Strategy

### **Before (Manual Layout):**
```tsx
<div className="max-w-7xl mx-auto p-12">
  <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
    <FeatureCard />
    <FeatureCard />
    <FeatureCard />
  </div>
</div>
```

### **After (Container Blocks):**
```tsx
<Group as="section" align="default" padding="p-12">
  <Grid columns={3} gap="gap-8">
    <FeatureCard />
    <FeatureCard />
    <FeatureCard />
  </Grid>
</Group>
```

### **Benefits:**
- ✅ Semantic HTML (section tag)
- ✅ WordPress block parity
- ✅ Reusable components
- ✅ Easier to maintain
- ✅ Better documentation

---

## 🎯 Example 1: Hero Section (FrontPageTemplate)

### **Original Code:**
```tsx
<div className="relative overflow-hidden bg-gradient-to-br from-primary/10 to-accent/10">
  <div className="max-w-7xl mx-auto px-6 py-24">
    <div className="flex flex-col md:flex-row items-center gap-12">
      <div className="flex-1">
        <h1>Welcome to LSX Design</h1>
        <p>Your WordPress experts</p>
        <div className="flex gap-4">
          <Button variant="primary">Get Started</Button>
          <Button variant="secondary">Learn More</Button>
        </div>
      </div>
      <div className="flex-1">
        <img src="/hero.jpg" alt="Hero" />
      </div>
    </div>
  </div>
</div>
```

### **Refactored with Blocks:**
```tsx
import { Group, Columns, Column, Stack, Row, Button } from '@/components/blocks/design';

<Group 
  as="section" 
  align="default"
  padding="p-24"
  style={{
    background: 'linear-gradient(to bottom right, var(--primary-light), var(--accent-light))'
  }}
>
  <Columns columns={2} gap="gap-12" verticalAlign="center">
    <Column>
      <Stack gap="gap-6">
        <h1 style={{ fontSize: 'var(--text-h1)' }}>
          Welcome to LSX Design
        </h1>
        <p style={{ fontSize: 'var(--text-lead)' }}>
          Your WordPress experts
        </p>
        <Row gap="gap-4">
          <Button variant="primary" size="lg">Get Started</Button>
          <Button variant="secondary" size="lg">Learn More</Button>
        </Row>
      </Stack>
    </Column>
    
    <Column>
      <img src="/hero.jpg" alt="Hero" className="w-full rounded-lg" />
    </Column>
  </Columns>
</Group>
```

**Improvements:**
- ✅ Semantic `<section>` tag
- ✅ Columns block for responsive layout
- ✅ Stack for vertical content
- ✅ Row for horizontal buttons
- ✅ CSS variables for colors

---

## 🎯 Example 2: Feature Grid (ServicesTemplate)

### **Original Code:**
```tsx
<div className="py-16 bg-surface">
  <div className="max-w-7xl mx-auto px-6">
    <div className="text-center mb-12">
      <h2 className="text-4xl font-bold mb-4">Our Services</h2>
      <p className="text-xl">Everything you need to succeed</p>
    </div>
    
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
      <ServiceCard title="WordPress Development" />
      <ServiceCard title="WooCommerce" />
      <ServiceCard title="Theme Customization" />
      <ServiceCard title="Plugin Development" />
      <ServiceCard title="Site Maintenance" />
      <ServiceCard title="Performance Optimization" />
    </div>
  </div>
</div>
```

### **Refactored with Blocks:**
```tsx
import { Group, Stack, Grid } from '@/components/blocks/design';

<Group 
  as="section" 
  backgroundColor="var(--surface)"
  padding="py-16"
  align="default"
>
  <Stack gap="gap-12">
    <Stack gap="gap-4" align="center">
      <h2 style={{ fontSize: 'var(--text-h2)' }}>
        Our Services
      </h2>
      <p style={{ fontSize: 'var(--text-lead)' }}>
        Everything you need to succeed
      </p>
    </Stack>
    
    <Grid columns={3} gap="gap-8">
      <ServiceCard title="WordPress Development" />
      <ServiceCard title="WooCommerce" />
      <ServiceCard title="Theme Customization" />
      <ServiceCard title="Plugin Development" />
      <ServiceCard title="Site Maintenance" />
      <ServiceCard title="Performance Optimization" />
    </Grid>
  </Stack>
</Group>
```

**Improvements:**
- ✅ CSS variable for background
- ✅ Nested Stack for heading + grid
- ✅ Grid with fixed 3 columns
- ✅ Consistent spacing with gap tokens

---

## 🎯 Example 3: Pricing Table (PricingTemplate)

### **Original Code:**
```tsx
<div className="py-24 px-6">
  <div className="max-w-7xl mx-auto">
    <h2 className="text-center text-4xl mb-16">Pricing Plans</h2>
    
    <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
      <div className="bg-card p-8 rounded-lg">
        <h3>Starter</h3>
        <p className="text-5xl">$99</p>
        <ul className="space-y-4">
          <li>Feature 1</li>
          <li>Feature 2</li>
        </ul>
        <button className="w-full">Choose Plan</button>
      </div>
      
      <div className="bg-primary text-primary-foreground p-8 rounded-lg">
        <h3>Professional</h3>
        <p className="text-5xl">$299</p>
        <ul className="space-y-4">
          <li>Feature 1</li>
          <li>Feature 2</li>
        </ul>
        <button className="w-full">Choose Plan</button>
      </div>
      
      <div className="bg-card p-8 rounded-lg">
        <h3>Enterprise</h3>
        <p className="text-5xl">Custom</p>
        <ul className="space-y-4">
          <li>Feature 1</li>
          <li>Feature 2</li>
        </ul>
        <button className="w-full">Choose Plan</button>
      </div>
    </div>
  </div>
</div>
```

### **Refactored with Blocks:**
```tsx
import { Group, Stack, Columns, Column, Button } from '@/components/blocks/design';

<Group as="section" padding="py-24" align="default">
  <Stack gap="gap-16">
    <h2 style={{ fontSize: 'var(--text-h2)', textAlign: 'center' }}>
      Pricing Plans
    </h2>
    
    <Columns columns={3} gap="gap-8" equalWidth>
      {/* Starter Plan */}
      <Column>
        <Group 
          backgroundColor="var(--card)"
          padding="p-8"
          borderRadius="var(--radius-lg)"
        >
          <Stack gap="gap-6">
            <h3 style={{ fontSize: 'var(--text-h3)' }}>Starter</h3>
            <p style={{ fontSize: 'var(--text-h1)' }}>$99</p>
            <Stack gap="gap-4" as="ul">
              <li>Feature 1</li>
              <li>Feature 2</li>
            </Stack>
            <Button variant="secondary" size="lg" className="w-full">
              Choose Plan
            </Button>
          </Stack>
        </Group>
      </Column>
      
      {/* Professional Plan (Featured) */}
      <Column>
        <Group 
          backgroundColor="var(--primary)"
          color="var(--primary-foreground)"
          padding="p-8"
          borderRadius="var(--radius-lg)"
        >
          <Stack gap="gap-6">
            <h3 style={{ fontSize: 'var(--text-h3)' }}>Professional</h3>
            <p style={{ fontSize: 'var(--text-h1)' }}>$299</p>
            <Stack gap="gap-4" as="ul">
              <li>Feature 1</li>
              <li>Feature 2</li>
            </Stack>
            <Button variant="primary" size="lg" className="w-full">
              Choose Plan
            </Button>
          </Stack>
        </Group>
      </Column>
      
      {/* Enterprise Plan */}
      <Column>
        <Group 
          backgroundColor="var(--card)"
          padding="p-8"
          borderRadius="var(--radius-lg)"
        >
          <Stack gap="gap-6">
            <h3 style={{ fontSize: 'var(--text-h3)' }}>Enterprise</h3>
            <p style={{ fontSize: 'var(--text-h1)' }}>Custom</p>
            <Stack gap="gap-4" as="ul">
              <li>Feature 1</li>
              <li>Feature 2</li>
            </Stack>
            <Button variant="secondary" size="lg" className="w-full">
              Contact Us
            </Button>
          </Stack>
        </Group>
      </Column>
    </Columns>
  </Stack>
</Group>
```

**Improvements:**
- ✅ Columns block for equal-width pricing cards
- ✅ Group for individual card backgrounds
- ✅ Stack for vertical card content
- ✅ CSS variables for all colors
- ✅ Button component with size prop

---

## 🎯 Example 4: Team Grid (TeamTemplate)

### **Original Code:**
```tsx
<div className="py-16">
  <div className="max-w-7xl mx-auto px-6">
    <h2 className="text-center mb-12">Meet Our Team</h2>
    
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
      {team.map(member => (
        <div key={member.id} className="text-center">
          <img src={member.photo} className="rounded-full w-32 h-32 mx-auto mb-4" />
          <h3>{member.name}</h3>
          <p>{member.role}</p>
        </div>
      ))}
    </div>
  </div>
</div>
```

### **Refactored with Blocks:**
```tsx
import { Group, Stack, Grid } from '@/components/blocks/design';

<Group as="section" padding="py-16" align="default">
  <Stack gap="gap-12">
    <h2 style={{ fontSize: 'var(--text-h2)', textAlign: 'center' }}>
      Meet Our Team
    </h2>
    
    <Grid columns={4} gap="gap-6">
      {team.map(member => (
        <Stack key={member.id} gap="gap-4" align="center">
          <img 
            src={member.photo} 
            alt={member.name}
            className="rounded-full w-32 h-32"
          />
          <h3 style={{ fontSize: 'var(--text-h4)' }}>
            {member.name}
          </h3>
          <p style={{ fontSize: 'var(--text-base)' }}>
            {member.role}
          </p>
        </Stack>
      ))}
    </Grid>
  </Stack>
</Group>
```

**Improvements:**
- ✅ Grid with 4 columns (responsive auto-stacking)
- ✅ Stack for each team member card
- ✅ Centered alignment
- ✅ CSS variables for typography

---

## 🎯 Example 5: Header Navigation (SiteHeader)

### **Original Code:**
```tsx
<header className="sticky top-0 bg-background/95 backdrop-blur">
  <div className="max-w-7xl mx-auto px-6 py-4">
    <div className="flex items-center justify-between">
      <Logo />
      
      <nav className="hidden md:flex gap-6">
        <a href="/about">About</a>
        <a href="/services">Services</a>
        <a href="/portfolio">Portfolio</a>
        <a href="/contact">Contact</a>
      </nav>
      
      <div className="flex gap-4">
        <StyleSwitcher />
        <Button variant="primary">Get Started</Button>
      </div>
    </div>
  </div>
</header>
```

### **Refactored with Blocks:**
```tsx
import { Group, Row, Button } from '@/components/blocks/design';

<Group 
  as="header" 
  padding="py-4"
  align="default"
  style={{
    position: 'sticky',
    top: 0,
    backgroundColor: 'var(--background)',
    backdropFilter: 'blur(8px)',
    zIndex: 'var(--z-sticky)'
  }}
>
  <Row gap="gap-8" justify="space-between" align="center">
    <Logo />
    
    <Row as="nav" gap="gap-6" className="hidden md:flex">
      <a href="/about">About</a>
      <a href="/services">Services</a>
      <a href="/portfolio">Portfolio</a>
      <a href="/contact">Contact</a>
    </Row>
    
    <Row gap="gap-4" align="center">
      <StyleSwitcher />
      <Button variant="primary">Get Started</Button>
    </Row>
  </Row>
</Group>
```

**Improvements:**
- ✅ Group with semantic `<header>` tag
- ✅ Row for horizontal layout
- ✅ Nested Row for navigation
- ✅ CSS variables for styling
- ✅ z-index token

---

## 🎯 Example 6: Footer (SiteFooter)

### **Original Code:**
```tsx
<footer className="bg-surface py-16">
  <div className="max-w-7xl mx-auto px-6">
    <div className="grid grid-cols-1 md:grid-cols-4 gap-12 mb-12">
      <div>
        <h4>About</h4>
        <ul className="space-y-2">
          <li><a href="/about">Our Story</a></li>
          <li><a href="/team">Team</a></li>
        </ul>
      </div>
      
      <div>
        <h4>Services</h4>
        <ul className="space-y-2">
          <li><a href="/wordpress">WordPress</a></li>
          <li><a href="/woocommerce">WooCommerce</a></li>
        </ul>
      </div>
      
      <div>
        <h4>Resources</h4>
        <ul className="space-y-2">
          <li><a href="/blog">Blog</a></li>
          <li><a href="/guides">Guides</a></li>
        </ul>
      </div>
      
      <div>
        <h4>Connect</h4>
        <ul className="space-y-2">
          <li><a href="/contact">Contact</a></li>
          <li><a href="/support">Support</a></li>
        </ul>
      </div>
    </div>
    
    <div className="border-t pt-8 text-center">
      <p>&copy; 2024 LSX Design</p>
    </div>
  </div>
</footer>
```

### **Refactored with Blocks:**
```tsx
import { Group, Stack, Columns, Column } from '@/components/blocks/design';

<Group 
  as="footer" 
  backgroundColor="var(--surface)"
  padding="py-16"
  align="default"
>
  <Stack gap="gap-12">
    <Columns columns={4} gap="gap-12">
      <Column>
        <Stack gap="gap-4">
          <h4 style={{ fontSize: 'var(--text-h5)' }}>About</h4>
          <Stack gap="gap-2" as="ul">
            <li><a href="/about">Our Story</a></li>
            <li><a href="/team">Team</a></li>
          </Stack>
        </Stack>
      </Column>
      
      <Column>
        <Stack gap="gap-4">
          <h4 style={{ fontSize: 'var(--text-h5)' }}>Services</h4>
          <Stack gap="gap-2" as="ul">
            <li><a href="/wordpress">WordPress</a></li>
            <li><a href="/woocommerce">WooCommerce</a></li>
          </Stack>
        </Stack>
      </Column>
      
      <Column>
        <Stack gap="gap-4">
          <h4 style={{ fontSize: 'var(--text-h5)' }}>Resources</h4>
          <Stack gap="gap-2" as="ul">
            <li><a href="/blog">Blog</a></li>
            <li><a href="/guides">Guides</a></li>
          </Stack>
        </Stack>
      </Column>
      
      <Column>
        <Stack gap="gap-4">
          <h4 style={{ fontSize: 'var(--text-h5)' }}>Connect</h4>
          <Stack gap="gap-2" as="ul">
            <li><a href="/contact">Contact</a></li>
            <li><a href="/support">Support</a></li>
          </Stack>
        </Stack>
      </Column>
    </Columns>
    
    <Group 
      padding="pt-8"
      style={{ 
        borderTop: '1px solid var(--border)',
        textAlign: 'center'
      }}
    >
      <p style={{ fontSize: 'var(--text-small)' }}>
        &copy; 2024 LSX Design
      </p>
    </Group>
  </Stack>
</Group>
```

**Improvements:**
- ✅ Semantic `<footer>` tag
- ✅ Columns for footer navigation
- ✅ Stack for vertical lists
- ✅ CSS variables for borders
- ✅ Proper semantic HTML (`<ul>`)

---

## 📊 Integration Checklist

When refactoring templates with container blocks:

### **Before Integration:**
- [ ] Identify layout sections
- [ ] Map divs to semantic HTML
- [ ] Find hard-coded values
- [ ] Check responsive breakpoints
- [ ] Review accessibility

### **During Integration:**
- [ ] Replace div with Group (semantic tag)
- [ ] Replace grid with Grid block
- [ ] Replace flex-col with Stack
- [ ] Replace flex-row with Row
- [ ] Replace columns with Columns

### **After Integration:**
- [ ] Test responsive behavior
- [ ] Verify CSS variables used
- [ ] Check accessibility (ARIA)
- [ ] Test dark mode
- [ ] Validate WordPress parity

---

## 🎯 Quick Reference

### **Choose the Right Block:**

**Group** → Wrapper with background/padding
```tsx
<Group as="section" backgroundColor="var(--surface)" padding="p-12">
```

**Grid** → Card grids, product listings
```tsx
<Grid columns={3} gap="gap-8">
```

**Stack** → Vertical content, forms
```tsx
<Stack gap="gap-6" align="center">
```

**Row** → Horizontal buttons, navigation
```tsx
<Row gap="gap-4" justify="center">
```

**Columns** → Side-by-side content
```tsx
<Columns columns={2} gap="gap-12">
```

---

## 🚀 Next Steps

1. **Refactor FrontPageTemplate** → Hero, Features, CTA
2. **Refactor ServicesTemplate** → Service grid, pricing
3. **Refactor AboutTemplate** → Team, history, culture
4. **Refactor PortfolioArchiveTemplate** → Project grid
5. **Refactor Header/Footer** → Navigation, links

**Estimated Time:** 2-3 hours per template  
**Expected Improvement:** 40% less code, 100% semantic

---

**Last Updated:** December 26, 2024  
**Status:** Integration Guide Complete  
**Next:** Begin template refactoring
