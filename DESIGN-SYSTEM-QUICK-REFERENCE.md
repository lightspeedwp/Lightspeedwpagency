# 🎨 DESIGN SYSTEM QUICK REFERENCE

**LSX Design — CSS Variables Quick Reference**  
**Last Updated:** December 26, 2024

---

## 📐 TYPOGRAPHY VARIABLES

### **Font Families:**
```css
font-family: 'Lexend, sans-serif';   /* Primary: headings, body, buttons */
font-family: 'Manrope, sans-serif';  /* Secondary: small text only */
```

### **Font Sizes:**
```css
/* Fluid Headings (Responsive) */
font-size: var(--text-h1);    /* 40px → 64px */
font-size: var(--text-h2);    /* 32px → 48px */
font-size: var(--text-h3);    /* 24px → 36px */
font-size: var(--text-h4);    /* 20px → 28px */
font-size: var(--text-h5);    /* 18px → 24px */
font-size: var(--text-h6);    /* 16px → 20px */

/* Fixed Body Text */
font-size: var(--text-base);  /* 16px - body text */
font-size: var(--text-lg);    /* 18px - large body, FAQ questions */
font-size: var(--text-lead);  /* 20px - lead paragraphs */
font-size: var(--text-small); /* 14px - metadata, captions */
font-size: var(--text-tiny);  /* 12px - legal, footnotes */
```

### **Font Weights:**
```css
font-weight: var(--font-weight-light);     /* 300 */
font-weight: var(--font-weight-regular);   /* 400 - default */
font-weight: var(--font-weight-medium);    /* 500 - buttons, labels */
font-weight: var(--font-weight-semibold);  /* 600 - headings */
font-weight: var(--font-weight-bold);      /* 700 - emphasis */
font-weight: var(--font-weight-black);     /* 800 - display */
```

### **Line Heights:**
```css
line-height: var(--line-height-tight);    /* 1.1 - display headings */
line-height: var(--line-height-snug);     /* 1.25 - headings */
line-height: var(--line-height-normal);   /* 1.5 - body text */
line-height: var(--line-height-relaxed);  /* 1.75 - long-form */
```

### **Letter Spacing:**
```css
letter-spacing: var(--letter-spacing-tight);   /* -0.025em - large headings */
letter-spacing: var(--letter-spacing-normal);  /* 0 - body text */
letter-spacing: var(--letter-spacing-wide);    /* 0.025em - buttons */
letter-spacing: var(--letter-spacing-wider);   /* 0.05em - uppercase */
```

---

## 🎨 COLOR VARIABLES

### **Backgrounds:**
```css
background-color: var(--background);       /* Page background */
background-color: var(--card);             /* Card backgrounds */
background-color: var(--muted);            /* Subtle backgrounds */
background-color: var(--popover);          /* Dropdowns */
```

### **Text Colors:**
```css
color: var(--foreground);                  /* Primary text */
color: var(--muted-foreground);            /* Secondary text */
color: var(--card-foreground);             /* Text on cards */
color: var(--primary-foreground);          /* Text on primary buttons */
color: var(--secondary-foreground);        /* Text on secondary buttons */
```

### **Interactive Elements:**
```css
background-color: var(--primary);          /* Primary buttons, links */
background-color: var(--secondary);        /* Secondary buttons */
background-color: var(--accent);           /* Highlights, badges */
background-color: var(--destructive);      /* Delete, error buttons */
```

### **Borders:**
```css
border: 1px solid var(--border);           /* Default borders */
border: 1px solid var(--border-soft);      /* Subtle dividers */
border: 1px solid var(--border-extra-soft); /* Very subtle */
```

### **Focus & Input:**
```css
outline: 2px solid var(--ring);            /* Focus indicators */
background-color: var(--input);            /* Input fields */
background-color: var(--input-background); /* Input backgrounds */
```

---

## 📏 SPACING & LAYOUT

### **Tailwind Spacing Classes:**
```tsx
className="p-4"   /* padding: 16px */
className="p-6"   /* padding: 24px */
className="p-8"   /* padding: 32px */
className="p-12"  /* padding: 48px */
className="p-16"  /* padding: 64px */

className="mb-4"  /* margin-bottom: 16px */
className="mt-8"  /* margin-top: 32px */
className="mx-auto" /* margin: 0 auto */

className="gap-4"  /* gap: 16px (flexbox/grid) */
className="gap-8"  /* gap: 32px */
className="gap-12" /* gap: 48px */
```

### **Border Radius:**
```css
border-radius: var(--radius-sm);   /* 2px - minimal rounding */
border-radius: var(--radius);      /* 4px - default */
border-radius: var(--radius-md);   /* 4px - same as default */
border-radius: var(--radius-lg);   /* 8px - cards, containers */
border-radius: var(--radius-xl);   /* 12px - large elements */
```

### **Shadows:**
```css
box-shadow: var(--shadow-sm);      /* Subtle elevation */
box-shadow: var(--shadow-md);      /* Medium elevation */
box-shadow: var(--shadow-lg);      /* Large elevation */
box-shadow: var(--shadow-xl);      /* Extra large elevation */
box-shadow: var(--shadow-primary); /* Primary colored shadow */
box-shadow: var(--shadow-hover);   /* Hover state shadow */
```

---

## ✅ USAGE EXAMPLES

### **Heading:**
```tsx
<h2 style={{
  fontSize: 'var(--text-h2)',
  fontFamily: 'Lexend, sans-serif',
  fontWeight: 'var(--font-weight-semibold)',
  lineHeight: 'var(--line-height-snug)',
  color: 'var(--foreground)'
}}>
  Section Title
</h2>
```

### **Body Text:**
```tsx
<p style={{
  fontSize: 'var(--text-base)',
  fontFamily: 'Lexend, sans-serif',
  fontWeight: 'var(--font-weight-regular)',
  lineHeight: 'var(--line-height-normal)',
  color: 'var(--foreground)'
}}>
  Body paragraph text.
</p>
```

### **Small Text:**
```tsx
<small style={{
  fontSize: 'var(--text-small)',
  fontFamily: 'Manrope, sans-serif',
  fontWeight: 'var(--font-weight-regular)',
  color: 'var(--muted-foreground)'
}}>
  December 26, 2024
</small>
```

### **Primary Button:**
```tsx
<button style={{
  backgroundColor: 'var(--primary)',
  color: 'var(--primary-foreground)',
  fontSize: 'var(--text-base)',
  fontFamily: 'Lexend, sans-serif',
  fontWeight: 'var(--font-weight-medium)',
  padding: '12px 24px',
  borderRadius: 'var(--radius)',
  border: 'none'
}}>
  Get Started
</button>
```

### **Card:**
```tsx
<div style={{
  backgroundColor: 'var(--card)',
  color: 'var(--card-foreground)',
  border: '1px solid var(--border-soft)',
  borderRadius: 'var(--radius-lg)',
  boxShadow: 'var(--shadow-md)',
  padding: '24px'
}}>
  Card content
</div>
```

### **Using Tailwind:**
```tsx
<div className="p-6 mb-8 gap-4 bg-card border border-border-soft rounded-lg">
  <h3 className="mb-4">Title</h3>
  <p className="mb-6">Content</p>
</div>
```

---

## 🎯 DECISION TREE

### **Need Typography?**

```
Font Family?
├─ Headings, body, buttons → Lexend
└─ Small text, metadata → Manrope

Font Size?
├─ Heading → var(--text-h1) to var(--text-h6)
├─ Body → var(--text-base)
├─ Large body/FAQ → var(--text-lg)
├─ Lead paragraph → var(--text-lead)
├─ Small/metadata → var(--text-small)
└─ Legal/footnote → var(--text-tiny)

Font Weight?
└─ Always use → var(--font-weight-*)

Line Height?
└─ Always use → var(--line-height-*)
```

### **Need Colors?**

```
Text Color?
├─ Primary text → var(--foreground)
└─ Secondary text → var(--muted-foreground)

Background?
├─ Page → var(--background)
├─ Card → var(--card)
└─ Subtle → var(--muted)

Interactive?
├─ Primary action → var(--primary)
├─ Secondary action → var(--secondary)
├─ Accent/highlight → var(--accent)
└─ Destructive → var(--destructive)

Borders?
├─ Default → var(--border)
└─ Subtle → var(--border-soft)
```

### **Need Spacing?**

```
Content Spacing?
└─ Use Tailwind → className="p-6 mb-8 gap-4"

Border Radius?
└─ Use CSS variable → var(--radius-*)

Shadows?
└─ Use CSS variable → var(--shadow-*)
```

---

## ❌ COMMON MISTAKES

### **DON'T:**
```tsx
// ❌ Hard-coded font size
fontSize: '32px'

// ❌ Hard-coded color
color: '#1E6AFF'

// ❌ Wrong font for large text
fontFamily: 'Manrope, sans-serif'  // on headings

// ❌ Hard-coded font weight
fontWeight: 600
```

### **DO:**
```tsx
// ✅ CSS variable
fontSize: 'var(--text-h2)'

// ✅ CSS variable
color: 'var(--primary)'

// ✅ Correct font
fontFamily: 'Lexend, sans-serif'  // on headings

// ✅ CSS variable
fontWeight: 'var(--font-weight-semibold)'
```

---

## 🔄 HOW TO UPDATE

### **Change Colors:**
1. Open `/src/styles/theme.css`
2. Update `:root` section (lines 42-131)
3. Update `.dark` section (lines 133-185)
4. ✅ Changes apply everywhere

### **Change Typography:**
1. Open `/src/styles/theme.css`
2. Update font size variables (lines 6-19)
3. Update font weight variables (lines 21-27)
4. ✅ Changes apply everywhere

### **Change Fonts:**
1. Open `/src/styles/fonts.css`
2. Replace Google Fonts import
3. Update font-family in theme.css
4. ✅ New fonts apply everywhere

---

## 📚 FULL DOCUMENTATION

**Complete Guides:**
- `/DESIGN-SYSTEM-USAGE-GUIDE.md` — Complete reference
- `/DESIGN-SYSTEM-VERIFICATION-COMPLETE.md` — Verification summary
- `/DESIGN-SYSTEM-TESTING-COMPLETE.md` — Testing report
- `/guidelines/Guidelines.md` — System principles

**Token Documentation:**
- `/guidelines/design-tokens/typography.md` — Typography details
- `/guidelines/design-tokens/colors.md` — Color system
- `/guidelines/design-tokens/spacing.md` — Spacing scale

**Source Files:**
- `/src/styles/theme.css` — SOURCE OF TRUTH
- `/src/styles/fonts.css` — Font imports

---

## ✅ CHECKLIST FOR NEW COMPONENTS

Before creating a component, verify:

- [ ] Uses CSS variables for font sizes (no `20px`)
- [ ] Uses only Lexend/Manrope fonts
- [ ] Uses CSS variables for colors (no `#1E6AFF`)
- [ ] Uses CSS variables for font weights (no `600`)
- [ ] Uses Tailwind for spacing where possible
- [ ] Works in both light and dark modes
- [ ] Meets WCAG 2.1 AA contrast ratios
- [ ] Focus indicators visible

---

**🎉 Design System Status: 100% Ready**

---

**Last Updated:** December 26, 2024  
**Version:** 1.0  
**Status:** ✅ Production Ready
