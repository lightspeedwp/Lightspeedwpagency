# 🎨 **FLUID PADDING — QUICK REFERENCE**

**Status:** ✅ ACTIVE ON INNER CONTAINERS  
**File:** `/src/styles/layout.css`  
**Updated:** January 20, 2025

---

## 📐 **THE FORMULA**

```css
padding-left: clamp(16px, 4vw, 32px);
padding-right: clamp(16px, 4vw, 32px);
```

**Translation:**
- **Minimum:** 16px (mobile)
- **Preferred:** 4% of viewport width
- **Maximum:** 32px (desktop)

---

## 📱 **VIEWPORT EXAMPLES**

| Device | Width | 4vw | Result |
|--------|-------|-----|--------|
| iPhone SE | 375px | 15px | **16px** (uses min) |
| iPhone 12 | 390px | 15.6px | **16px** (uses min) |
| iPad Mini | 768px | 30.7px | **30.7px** (uses 4vw) |
| iPad Pro | 1024px | 41px | **32px** (uses max) |
| Laptop | 1440px | 57.6px | **32px** (uses max) |
| Desktop | 1920px | 76.8px | **32px** (uses max) |

---

## ✅ **AUTOMATICALLY APPLIED TO:**

✅ All `.container` elements (inner content wrappers)  
✅ All `[class*="container"]` elements  
✅ Inner content within sections/headers/footers  
✅ WordPress block inner containers

---

## ❌ **NOT APPLIED TO:**

❌ Outer `<section>` elements (remain full-width)  
❌ Outer `<header>` elements (remain full-width)  
❌ Outer `<footer>` elements (remain full-width)  
❌ Outer `<main>` elements (remain full-width)

---

## 🎯 **LAYOUT STRUCTURE**

```tsx
<section>  {/* ← Full-width, no padding */}
  <Container>  {/* ← Has fluid padding (16px-32px) */}
    <div>Content</div>
  </Container>
</section>
```

---

## 🛠️ **UTILITY CLASSES**

**Add fluid padding:**
```html
<div class="fluid-padding-x">
```

**Remove fluid padding:**
```html
<div class="no-fluid-padding">
```

---

## 🎯 **USER CONTROL**

**To change padding sitewide:**

Edit `/src/styles/layout.css`:

```css
/* Change minimum (mobile) */
.container {
  padding-left: clamp(20px, 4vw, 32px);  /* 20px instead of 16px */
}

/* Change maximum (desktop) */
.container {
  padding-left: clamp(16px, 4vw, 40px);  /* 40px instead of 32px */
}

/* Change scaling rate */
.container {
  padding-left: clamp(16px, 5vw, 32px);  /* 5vw instead of 4vw */
}
```

**Changes apply sitewide instantly!** ✨

---

## 📊 **VISUAL SCALE**

```
SECTION (full-width edge-to-edge)
├── CONTAINER (16px-32px padding)
│   └── CONTENT
│
375px:  |←16px→| CONTENT |←16px→|
768px:  |←―30px―→| CONTENT |←―30px―→|
1024px: |←――32px――→| CONTENT |←――32px――→|
```

---

**File:** `/FLUID-PADDING-QUICK-REFERENCE.md`  
**Last Updated:** January 20, 2025