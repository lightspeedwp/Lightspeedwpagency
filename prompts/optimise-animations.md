# Optimise Animations — Animation Performance

**Type:** Sub-Trigger  
**Version:** 1.0.0  
**Created:** March 18, 2026  
**Status:** Active  
**Trigger:** `optimise animations`  
**Parent Orchestrator:** `optimise`  
**Repeatable:** Yes  
**Estimated Duration:** 30-35 minutes

---

## Purpose

Optimize animation performance by preferring CSS over JavaScript animations, using GPU-accelerated properties, implementing will-change appropriately, and respecting reduced motion preferences.

---

## Instructions

**Environment Reminder:** You are working inside **Figma Make**. Do NOT suggest browser refresh, cache clearing, or terminal commands.

---

## Audit Scope

### 1. CSS vs. JavaScript Animations

**Prefer CSS animations for:**
- Simple transitions
- Hover effects
- Page transitions
- Fade in/out

**Use JavaScript animations for:**
- Complex, state-dependent animations
- Scroll-triggered effects
- Interactive animations
- Dynamic values

```css
/* ✅ CSS for simple transitions */
.wp-card {
  transition: transform 0.3s ease-out, opacity 0.3s;
}

.wp-card:hover {
  transform: translateY(-4px);
  opacity: 0.95;
}
```

---

### 2. GPU Acceleration

**Use ONLY these properties for animations:**
- `transform` (translate, scale, rotate)
- `opacity`

**Avoid animating:**
- `width`, `height`
- `top`, `left`, `right`, `bottom`
- `margin`, `padding`
- `border-width`

```css
/* ❌ Triggers layout recalculation */
.wp-modal {
  transition: width 0.3s, height 0.3s;
}

/* ✅ GPU-accelerated */
.wp-modal {
  transition: transform 0.3s, opacity 0.3s;
}
```

---

### 3. will-change Optimization

**Use sparingly:**

```css
/* ✅ Correct: On hover/interaction */
.wp-card {
  transition: transform 0.3s;
}

.wp-card:hover {
  will-change: transform;
  transform: scale(1.05);
}

.wp-card:not(:hover) {
  will-change: auto; /* Remove when not needed */
}

/* ❌ Avoid: Always on */
.wp-card {
  will-change: transform; /* Memory overhead */
}
```

---

### 4. Reduced Motion Support

**REQUIRED:**

```css
.wp-animated-element {
  transition: transform 0.3s ease-out;
}

@media (prefers-reduced-motion: reduce) {
  .wp-animated-element {
    transition: none;
  }
}
```

---

## Success Metrics

| Metric | Target |
|---|---|
| Animations using layout properties | 0 |
| GPU-accelerated animations | 100% |
| will-change overuse | 0 |
| Reduced motion support | 100% |

---

**Prompt Location:** `/prompts/optimise-animations.md`  
**Category:** Optimisation  
**Difficulty:** Low-Medium  
**Estimated Duration:** 30-35 minutes
