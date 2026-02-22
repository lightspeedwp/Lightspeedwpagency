# Reduced Motion Standards (`prefers-reduced-motion`)

**Version:** 1.0
**Last Updated:** February 22, 2026
**Status:** ACTIVE STANDARD
**Compliance:** Required for all animations, transitions, and motion effects
**WCAG Reference:** 2.3.3 Animation from Interactions (AAA), 2.3.1 Three Flashes (A)

---

## TABLE OF CONTENTS

1. [Purpose](#1-purpose)
2. [Accessibility Significance](#2-accessibility-significance)
3. [How the Operating System Setting Works](#3-how-the-operating-system-setting-works)
4. [CSS Usage and Syntax](#4-css-usage-and-syntax)
5. [JavaScript Detection](#5-javascript-detection)
6. [LSX Design System Enforcement Rules](#6-lsx-design-system-enforcement-rules)
7. [Classification: Essential vs Decorative Motion](#7-classification-essential-vs-decorative-motion)
8. [Common Patterns and Recipes](#8-common-patterns-and-recipes)
9. [Codebase Reference](#9-codebase-reference)
10. [Testing Guide](#10-testing-guide)
11. [Checklist](#11-checklist)
12. [Related Documentation](#12-related-documentation)

---

## 1. Purpose

This document defines the **mandatory coding standards** for respecting the `prefers-reduced-motion` CSS media feature across the entire LSX Design prototype. Every animation, transition, and motion effect in the system must comply with these rules.

`prefers-reduced-motion` detects whether a user has enabled a system-level setting to minimise non-essential motion. When a user enables this preference, we are legally, ethically, and architecturally required to honour it.

### Scope

These standards apply to:

- All `@keyframes` animations (CSS)
- All `transition` properties (CSS)
- All JavaScript-driven animations (`window.matchMedia`, React hooks)
- All scroll-triggered reveals (`IntersectionObserver`, `useScrollReveal`)
- All micro-interactions (hover lifts, press scales, ripple effects)
- All decorative motion (floating orbs, pulsing glows, gradient sweeps, parallax)
- All loading indicators (spinners, shimmer skeletons, progress bars)

---

## 2. Accessibility Significance

For many users, on-screen movement is more than a stylistic choice; it is a **health concern**. This media feature specifically helps individuals with:

### Vestibular Disorders

Large-scale motion, parallax, zooming, and scroll-linked animations can cause **dizziness, nausea, and vertigo**. The vestibular system (inner ear) relies on visual cues that align with physical movement. When screen elements move unexpectedly, the brain receives conflicting signals that can trigger a physical response ranging from mild discomfort to severe incapacitation.

**Affected animations:** parallax scrolling, zoom transitions, page-slide route changes, floating/bouncing elements, scroll-hijacking.

### Seizure and Photosensitivity Risks

Rapid flashing, high-contrast strobing, or intense pulsing animations can trigger **photosensitive epilepsy**. WCAG 2.3.1 (Level A) explicitly forbids content that flashes more than three times per second.

**Affected animations:** strobe effects, rapidly alternating neon colours, blinking cursors at high frequency, aggressive glow pulses.

### Cognitive and Attention Conditions

Animations can be highly distracting for users with **ADHD, autism spectrum conditions, or other attention-related disorders**, making it difficult to focus on content. Background motion competes for cognitive resources that these users need for reading and comprehension.

**Affected animations:** infinite loops (floating orbs, rotating elements), auto-playing carousels, background video, continuous gradient sweeps.

### Performance and Battery

Reducing motion also benefits users on **low-end devices** or those trying to **conserve battery life**. Complex CSS animations and JavaScript-driven motion consume GPU cycles and drain power.

**Affected animations:** all GPU-composited animations, `will-change` declarations, JavaScript `requestAnimationFrame` loops.

---

## 3. How the Operating System Setting Works

The `prefers-reduced-motion` media query reads a **system-level preference** that the user configures in their operating system. The browser exposes this setting to CSS and JavaScript without any additional libraries.

### Platform Settings

| Platform | Setting Location |
|----------|-----------------|
| **macOS** | System Settings > Accessibility > Display > Reduce motion |
| **iOS / iPadOS** | Settings > Accessibility > Motion > Reduce Motion |
| **Windows 10/11** | Settings > Accessibility > Visual effects > Show animations in Windows (off) |
| **Android** | Settings > Accessibility > Remove animations |
| **Linux (GNOME)** | Settings > Accessibility > Seeing > Reduced animation |
| **Linux (KDE)** | System Settings > Workspace Behaviour > Animation speed (instant) |

### Browser Support

`prefers-reduced-motion` is supported in all modern browsers:

| Browser | Supported Since |
|---------|----------------|
| Chrome | 74 (2019) |
| Firefox | 63 (2018) |
| Safari | 10.1 (2017) |
| Edge | 79 (2020) |
| iOS Safari | 10.3 (2017) |
| Android Chrome | 74 (2019) |

**No polyfill is needed.** If the browser does not support the query, it evaluates to `false` (no preference), which is the safe default.

---

## 4. CSS Usage and Syntax

### Possible Values

| Value | Meaning |
|-------|---------|
| `reduce` | The user has indicated they prefer an interface that removes or replaces motion-based animations. |
| `no-preference` | The user has not made a preference known. This is the default state. |

### Approach 1: The "Reduce" Override (Recommended for Existing Code)

Define your animations normally, then use the media query to **remove or simplify them** for users who prefer reduced motion. This is the approach used throughout the LSX Design codebase.

```css
/* Standard animation */
.hosting-lab__guarantee-bar {
  background: linear-gradient(90deg, var(--hl-cyan), var(--hl-pink), var(--hl-cyan));
  background-size: 200% 100%;
  animation: hostingGradientSlide 3s linear infinite;
}

/* Override for reduced motion */
@media (prefers-reduced-motion: reduce) {
  .hosting-lab__guarantee-bar {
    animation: none;
  }
}
```

**When to use:** When adding reduced-motion guards to existing animations or when the animated state is the expected default experience.

### Approach 2: The "No-Preference" Opt-in (Progressive Enhancement)

Define the **static state first** and only add animations if the user has no stated preference for reduced motion. This is considered a progressive enhancement strategy.

```css
/* Static by default — accessible to everyone */
.card {
  opacity: 1;
  transform: translateY(0);
}

/* Animation only added when no preference is stated */
@media (prefers-reduced-motion: no-preference) {
  .card {
    animation: fadeInUp 0.6s ease-out;
  }
}
```

**When to use:** When building new components from scratch. This approach is safer because animations are opt-in rather than opt-out, meaning there is zero risk of missing a reduced-motion guard.

### Approach 3: Consolidated Reduced-Motion Block (LSX Standard for Template CSS)

Group all reduced-motion overrides into a **single `@media` block at the end of the file**, after the dark-mode section. This is the LSX Design standard for template-level CSS files.

```css
/* ============================================
   REDUCED MOTION
   ============================================ */
@media (prefers-reduced-motion: reduce) {
  /* Disable decorative animations */
  .hosting-lab__guarantee-bar,
  .hosting-lab__plan::before,
  .hosting-lab__plan--popular::before {
    animation: none;
  }

  /* Disable hover transforms */
  .hosting-lab__plan:hover,
  .hosting-lab__feature-card:hover,
  .hosting-lab__stat:hover {
    transform: none;
  }

  /* Disable decorative section animations */
  .hosting-lab__section--server-rack .hosting-lab__led,
  .hosting-lab__section--data-flow::after,
  .hosting-lab__section--circuit-board::after,
  .hosting-lab__section--holographic .hosting-lab__holo-sheen,
  .hosting-lab__modal-spinner {
    animation: none;
  }
}
```

**When to use:** Always, for template-level CSS files (`/src/styles/templates/*.css`). One consolidated block is easier to audit than scattered guards throughout the file.

---

## 5. JavaScript Detection

### Using `window.matchMedia()` (One-Time Check)

For a simple one-time check at the point of use, call `window.matchMedia` directly:

```ts
/**
 * Check if user prefers reduced motion.
 * Returns true if the user has enabled the "Reduce Motion" system setting.
 * Returns false if no preference is set or if running server-side.
 */
function prefersReducedMotion(): boolean {
  if (typeof window === 'undefined') return false;
  return window.matchMedia('(prefers-reduced-motion: reduce)').matches;
}
```

**Existing utility:** This function already exists at `/src/app/utils/animations.ts`:

```ts
import { prefersReducedMotion } from '../utils/animations';

if (prefersReducedMotion()) {
  // Skip animation, show content immediately
}
```

### Listening for Real-Time Changes (Event-Driven)

A user can toggle the reduced-motion setting **while the page is open** (e.g. switching it on in System Settings without reloading). To react to this, attach an event listener to the `MediaQueryList` object:

```ts
const mediaQuery = window.matchMedia('(prefers-reduced-motion: reduce)');

// Initial check
console.log('Reduced motion:', mediaQuery.matches);

// Listen for changes (user toggles the setting live)
mediaQuery.addEventListener('change', (event) => {
  if (event.matches) {
    // User just enabled reduced motion — stop animations
    document.documentElement.classList.add('reduce-motion');
  } else {
    // User just disabled reduced motion — resume animations
    document.documentElement.classList.remove('reduce-motion');
  }
});
```

**Important:** Always use `addEventListener('change', ...)` and `removeEventListener('change', ...)` for cleanup. The older `addListener` / `removeListener` methods are deprecated.

### React Hook: `useReducedMotion`

For React components, use a hook that tracks the setting **reactively** (re-renders when the user toggles the preference):

```tsx
import { useEffect, useState } from 'react';

/**
 * React hook that tracks the user's prefers-reduced-motion setting.
 *
 * Re-renders the component if the user toggles the setting while the
 * page is open. Safe for SSR (returns false on the server).
 *
 * @returns {boolean} true when the user has enabled "Reduce Motion"
 *
 * @example
 * function AnimatedCard() {
 *   const reducedMotion = useReducedMotion();
 *
 *   return (
 *     <div className={reducedMotion ? 'card' : 'card card--animated'}>
 *       Content
 *     </div>
 *   );
 * }
 */
export function useReducedMotion(): boolean {
  const [prefersReducedMotion, setPrefersReducedMotion] = useState(false);

  useEffect(() => {
    const mediaQuery = window.matchMedia('(prefers-reduced-motion: reduce)');

    // Set initial value
    setPrefersReducedMotion(mediaQuery.matches);

    // Listen for live changes
    const handler = (event: MediaQueryListEvent) => {
      setPrefersReducedMotion(event.matches);
    };

    mediaQuery.addEventListener('change', handler);
    return () => mediaQuery.removeEventListener('change', handler);
  }, []);

  return prefersReducedMotion;
}
```

**Usage in components:**

```tsx
import { useReducedMotion } from '../hooks/useReducedMotion';

function FloatingOrb() {
  const reducedMotion = useReducedMotion();

  // Skip rendering entirely if reduced motion is preferred
  if (reducedMotion) return null;

  return <div className="hero__orb" aria-hidden="true" />;
}
```

### Existing Codebase Implementations

The LSX Design codebase already uses JavaScript-based detection in several places:

| File | Pattern | Notes |
|------|---------|-------|
| `/src/app/utils/animations.ts` | `prefersReducedMotion()` | One-time utility function |
| `/src/app/hooks/useScrollReveal.tsx` | `respectReducedMotion` option | Skips animation, shows content immediately |
| `/src/app/hooks/useMicroInteractions.ts` | `respectReducedMotion` option | Disables hover/press transforms |
| `/src/app/hooks/useScrollAnimation.ts` | Inline `matchMedia` check | Sets `isVisible = true` immediately |
| `/src/app/components/common/InteractiveCard.tsx` | Inline `matchMedia` check | Disables card lift animations |
| `/src/app/components/blocks/layout/StickyBookCallButton.tsx` | Inline `matchMedia` check | Disables entrance animation |

---

## 6. LSX Design System Enforcement Rules

### Rule 1: Every Animation Must Have a Reduced-Motion Guard

**No exceptions.** Every `@keyframes` animation and every `transition` property that produces visible motion must be disabled or simplified when `prefers-reduced-motion: reduce` is active.

```css
/* REQUIRED for every animation */
@media (prefers-reduced-motion: reduce) {
  .my-element {
    animation: none;
    transition: none;
  }
}
```

### Rule 2: Template CSS Files Use a Consolidated Block

All template-level CSS files (`/src/styles/templates/*.css`) must have a single `@media (prefers-reduced-motion: reduce)` block placed **after the dark-mode section** and **before any section-style definitions**.

```
File structure:
  1. Base styles
  2. Component styles
  3. Dark mode overrides
  4. REDUCED MOTION  <-- consolidated block here
  5. Section styles (if any)
  6. Responsive breakpoints
```

### Rule 3: Decorative Elements May Be Hidden Entirely

Purely decorative elements (floating orbs, gradient sweeps, scanline overlays) that serve no content purpose may be **hidden entirely** rather than just having their animation stopped:

```css
@media (prefers-reduced-motion: reduce) {
  /* Option A: Stop animation but keep static element */
  .hero__orb {
    animation: none;
  }

  /* Option B: Hide entirely (preferred for pure decoration) */
  .hero__orb {
    display: none;
  }
}
```

### Rule 4: Hover Transforms Must Be Neutralised

Hover-lift effects (`translateY(-4px)`, `scale(1.02)`) must be set to `transform: none` under reduced motion. **Keep visual feedback** (box-shadow, border-color, background-color changes) — only remove the motion.

```css
@media (prefers-reduced-motion: reduce) {
  .card:hover {
    /* Remove motion */
    transform: none;
    /* Keep visual feedback */
    box-shadow: var(--shadow-lg);
  }
}
```

### Rule 5: Loading Indicators Must Remain Functional

Spinners and progress indicators serve a functional purpose (communicating loading state). Under reduced motion:

- **Spinners:** Stop rotation but keep the element visible. Add a static visual indicator or change to a non-animated alternative (e.g. a pulsing opacity change or a simple "Loading..." text).
- **Progress bars:** Keep the bar visible. Remove shimmer effects but maintain the fill width.
- **Skeleton loaders:** Remove the shimmer animation but keep the placeholder shapes with a static background.

```css
@media (prefers-reduced-motion: reduce) {
  .spinner {
    animation: none;
    /* Keep the visual — the partial border still reads as "loading" */
  }

  .skeleton {
    animation: none;
    background: var(--muted);
  }
}
```

### Rule 6: JavaScript Hooks Must Default to `respectReducedMotion: true`

All animation hooks (`useScrollReveal`, `useMicroInteractions`, `useScrollAnimation`) must default to respecting the user's motion preference. Components must opt **in** to ignoring the preference (not opt out).

```tsx
// The default is respectReducedMotion = true
const { ref, isVisible } = useScrollReveal({ animation: 'fade-up' });

// Explicitly opt out only for essential functional animations
const { ref } = useScrollReveal({ animation: 'fade', respectReducedMotion: false });
```

### Rule 7: No Flash Rates Exceeding 3 per Second

Regardless of the `prefers-reduced-motion` setting, no element may flash more than **3 times per second**. This is a WCAG 2.3.1 Level A requirement and applies universally.

```css
/* FORBIDDEN — flashes ~5 times/second */
@keyframes dangerousFlash {
  0%, 100% { opacity: 1; }
  50% { opacity: 0; }
}
.element { animation: dangerousFlash 0.2s infinite; }

/* SAFE — gentle pulse at ~0.4 Hz */
@keyframes safePulse {
  0%, 100% { opacity: 1; }
  50% { opacity: 0.7; }
}
.element { animation: safePulse 2.5s ease-in-out infinite; }
```

---

## 7. Classification: Essential vs Decorative Motion

Not all animation is harmful. The key is distinguishing between **essential motion** (required for understanding) and **decorative motion** (purely aesthetic).

### Decorative Motion (MUST Be Disabled)

These animations exist for visual flair and carry no semantic meaning:

| Animation Type | Examples in LSX |
|----------------|-----------------|
| Floating/bouncing elements | Hero orbs, background particles |
| Gradient sweeps | Holographic sheen, data-flow streams |
| Glow pulses | Neon badge pulse, LED blink |
| Parallax scrolling | Background offset on scroll |
| Infinite loops | Circuit-board trace pulse, terminal cursor blink |
| Hover lifts | Card `translateY(-4px)`, icon `scale(1.1)` |
| Entrance slide/zoom | Scroll-reveal `fadeInUp`, scale-in |
| Background video/motion | Auto-playing decorative backgrounds |

### Essential Motion (Should Be Simplified, Not Removed)

These animations communicate state changes or help the user understand the interface:

| Animation Type | Why Essential | Reduced-Motion Alternative |
|----------------|---------------|---------------------------|
| Loading spinner | Communicates "please wait" | Static indicator or text |
| Progress bar fill | Shows completion percentage | Instant fill, no shimmer |
| Accordion expand/collapse | Shows content relationship | Instant show/hide |
| Modal open/close | Shows layer relationship | Instant appear/disappear |
| Toast slide-in | Shows new notification | Instant appear (opacity only) |
| Form shake on error | Communicates validation failure | Red border + error text |
| Checkbox/toggle state | Confirms user action | Instant state change |

### Safe Animations (Generally Acceptable Even Under Reduced Motion)

These are subtle enough that they rarely trigger vestibular issues, but should still be tested:

- **Opacity fades** (0 to 1 or 1 to 0) with short durations (< 300ms)
- **Colour transitions** (background-color, border-color changes)
- **Box-shadow transitions** (adding/removing glow or depth)
- **Outline/ring focus indicators** (appearing on focus)

Even these safe animations should be **instantaneous** (near-zero duration) under `prefers-reduced-motion: reduce` to fully honour the user's preference.

---

## 8. Common Patterns and Recipes

### Pattern 1: Decorative Orb (Hide Entirely)

```css
.hero__orb {
  position: absolute;
  width: 400px;
  height: 400px;
  border-radius: var(--radius-full);
  background: radial-gradient(circle, var(--primary), transparent);
  animation: floatOrb 12s ease-in-out infinite alternate;
  pointer-events: none;
}

@media (prefers-reduced-motion: reduce) {
  .hero__orb {
    display: none;
  }
}
```

### Pattern 2: Card Hover Lift (Keep Feedback, Remove Motion)

```css
.card {
  transition: transform var(--transition-base) var(--ease-out),
              box-shadow var(--transition-base) var(--ease-out);
}

.card:hover {
  transform: translateY(-4px);
  box-shadow: var(--shadow-lg);
}

@media (prefers-reduced-motion: reduce) {
  .card {
    transition: none;
  }

  .card:hover {
    transform: none;
    /* Shadow still provides visual feedback */
    box-shadow: var(--shadow-lg);
  }
}
```

### Pattern 3: Scroll Reveal (Show Content Immediately)

```css
.scroll-reveal {
  opacity: 0;
  transform: translateY(30px);
  transition: opacity 0.6s var(--ease-out), transform 0.6s var(--ease-out);
}

.scroll-reveal.is-visible {
  opacity: 1;
  transform: translateY(0);
}

@media (prefers-reduced-motion: reduce) {
  .scroll-reveal {
    opacity: 1;
    transform: none;
    transition: none;
  }
}
```

### Pattern 4: Neon Glow Pulse (Stop Animation, Keep Static Glow)

```css
.badge {
  box-shadow: var(--shadow-neon);
  animation: glowPulse 2.5s ease-in-out infinite;
}

@media (prefers-reduced-motion: reduce) {
  .badge {
    animation: none;
    /* Keep the static glow — it's part of the visual design */
    box-shadow: var(--shadow-neon);
  }
}
```

### Pattern 5: Loading Skeleton (Stop Shimmer, Keep Placeholder)

```css
.skeleton {
  background: linear-gradient(
    90deg,
    var(--muted) 25%,
    var(--muted-foreground) 50%,
    var(--muted) 75%
  );
  background-size: 200% 100%;
  animation: shimmer 2s infinite;
  border-radius: var(--radius);
}

@media (prefers-reduced-motion: reduce) {
  .skeleton {
    animation: none;
    background: var(--muted);
  }
}
```

### Pattern 6: Modal with Instant Appear (Simplify, Don't Remove)

```css
.modal-backdrop {
  opacity: 0;
  transition: opacity var(--transition-slow) var(--ease-out);
}

.modal-backdrop.is-open {
  opacity: 1;
}

.modal-content {
  opacity: 0;
  transform: scale(0.95) translateY(10px);
  transition: opacity var(--transition-slow) var(--ease-out),
              transform var(--transition-slow) var(--ease-out);
}

.modal-content.is-open {
  opacity: 1;
  transform: scale(1) translateY(0);
}

@media (prefers-reduced-motion: reduce) {
  .modal-backdrop,
  .modal-content {
    transition: none;
  }

  /* Content appears instantly in final state */
  .modal-content.is-open {
    transform: none;
  }
}
```

### Pattern 7: Form Validation Shake (Replace with Colour)

```css
@keyframes shake {
  0%, 100% { transform: translateX(0); }
  25% { transform: translateX(-8px); }
  75% { transform: translateX(8px); }
}

.input--error {
  animation: shake 0.4s ease-in-out;
  border-color: var(--destructive);
}

@media (prefers-reduced-motion: reduce) {
  .input--error {
    animation: none;
    /* The red border + error message still communicate the problem */
    border-color: var(--destructive);
    box-shadow: var(--shadow-focus-error);
  }
}
```

### Pattern 8: React Hook Usage (Conditional Rendering)

```tsx
import { useReducedMotion } from '../hooks/useReducedMotion';

function HeroSection() {
  const reducedMotion = useReducedMotion();

  return (
    <section className="hero">
      <h1 className="hero__title">Welcome</h1>

      {/* Only render decorative orbs when motion is allowed */}
      {!reducedMotion && (
        <>
          <div className="hero__orb hero__orb--1" aria-hidden="true" />
          <div className="hero__orb hero__orb--2" aria-hidden="true" />
        </>
      )}
    </section>
  );
}
```

### Pattern 9: React Conditional Transition Duration

```tsx
import { useReducedMotion } from '../hooks/useReducedMotion';

function AnimatedCard({ children }: { children: React.ReactNode }) {
  const reducedMotion = useReducedMotion();

  return (
    <div
      className="card"
      style={{
        transition: reducedMotion
          ? 'none'
          : `transform var(--transition-base) var(--ease-out),
             box-shadow var(--transition-base) var(--ease-out)`,
      }}
    >
      {children}
    </div>
  );
}
```

### Pattern 10: Global Nuclear Option (Use Sparingly)

A global reset that disables **all** animations and transitions. This is aggressive and should only be used as a last-resort safety net in `/src/styles/animations.css`, not as a replacement for per-component guards.

```css
@media (prefers-reduced-motion: reduce) {
  *,
  *::before,
  *::after {
    animation-duration: 0.01ms !important;
    animation-iteration-count: 1 !important;
    transition-duration: 0.01ms !important;
    scroll-behavior: auto !important;
  }
}
```

**Why `0.01ms` instead of `0`?** Setting `animation-duration: 0` can cause `animationend` events not to fire, which breaks JavaScript that listens for animation completion. Using `0.01ms` ensures the animation technically "runs" (firing all lifecycle events) but is imperceptible to the user.

---

## 9. Codebase Reference

### CSS Files with Reduced-Motion Guards (20+ files)

The following template CSS files already contain `@media (prefers-reduced-motion: reduce)` blocks:

| File | Guard Type |
|------|-----------|
| `/src/styles/animations.css` | Global utility classes |
| `/src/styles/templates/page-service-hosting.css` | Consolidated block |
| `/src/styles/templates/contact-page.css` | Multiple inline guards |
| `/src/styles/templates/team-page.css` | Consolidated block |
| `/src/styles/templates/blog-index-page.css` | Consolidated block |
| `/src/styles/templates/wetu-importer-page.css` | Inline guard |
| `/src/styles/templates/lsx-sharing-page.css` | Inline guard |
| `/src/styles/templates/lsx-search-page.css` | Inline guard |
| `/src/styles/templates/mailchimp-solution-page.css` | Consolidated block |
| `/src/styles/templates/services-page.css` | Inline guard |
| `/src/styles/templates/service-detail.css` | Inline guard |
| `/src/styles/templates/solution-detail.css` | Inline guard |
| `/src/styles/templates/page-about.css` | Multiple inline guards |
| `/src/styles/templates/page-faq.css` | Consolidated block |
| `/src/styles/templates/page-legal.css` | Inline guard |
| `/src/styles/templates/page-styleguide.css` | Multiple inline guards |
| `/src/styles/templates/pricing-page.css` | Consolidated block |
| `/src/styles/templates/why-choose-us.css` | Consolidated block |
| `/src/styles/templates/guarantees.css` | Consolidated block |
| `/src/styles/templates/deployment-readiness.css` | Inline guard |
| `/src/styles/templates/page-about-process.css` | Inline guard |

### JavaScript/TypeScript Files with Motion Detection

| File | Mechanism |
|------|-----------|
| `/src/app/utils/animations.ts` | `prefersReducedMotion()` utility |
| `/src/app/hooks/useScrollReveal.tsx` | `respectReducedMotion` option |
| `/src/app/hooks/useMicroInteractions.ts` | `respectReducedMotion` option |
| `/src/app/hooks/useScrollAnimation.ts` | Inline `matchMedia` check |
| `/src/app/components/common/InteractiveCard.tsx` | Inline `matchMedia` check |
| `/src/app/components/blocks/layout/StickyBookCallButton.tsx` | Inline `matchMedia` check |

---

## 10. Testing Guide

### Manual Testing

#### macOS

1. Open **System Settings** > **Accessibility** > **Display**
2. Toggle **Reduce motion** on
3. Reload the page (or observe live changes if using the React hook)
4. Verify:
   - All decorative animations have stopped
   - Floating orbs are hidden or static
   - Hover effects no longer produce transform-based motion
   - Loading indicators are still visible (static state)
   - Modals and accordions appear/disappear instantly
   - Content is fully readable and usable

#### Windows

1. Open **Settings** > **Accessibility** > **Visual effects**
2. Turn off **Show animations in Windows**
3. Reload the page
4. Run the same verification checks

#### iOS

1. Open **Settings** > **Accessibility** > **Motion**
2. Toggle **Reduce Motion** on
3. Open the site in Safari
4. Run the same verification checks

### Automated Testing

#### CSS Audit Script

Search for any `@keyframes` or `animation:` declarations that lack a corresponding `prefers-reduced-motion` guard:

```bash
# Find all @keyframes declarations
grep -rn "@keyframes" src/styles/ --include="*.css" | wc -l

# Find all prefers-reduced-motion guards
grep -rn "prefers-reduced-motion" src/styles/ --include="*.css" | wc -l

# The guard count should be >= the keyframes count
```

#### JavaScript Audit

Search for any `window.matchMedia` usage to ensure it's handling the result correctly:

```bash
# Find all JS-based motion checks
grep -rn "prefers-reduced-motion" src/app/ --include="*.ts" --include="*.tsx"
```

### DevTools Testing

Chrome and Firefox DevTools allow you to emulate the `prefers-reduced-motion` setting without changing your OS preference:

#### Chrome

1. Open DevTools (F12)
2. Press `Ctrl+Shift+P` (Command Palette)
3. Type "Reduce motion"
4. Select **Emulate CSS media feature prefers-reduced-motion: reduce**

#### Firefox

1. Open DevTools (F12)
2. Go to the **Accessibility** tab
3. In the "Simulate" dropdown, select **prefers-reduced-motion: reduce**

### Verification Checklist per Template

When auditing a template for reduced-motion compliance, check:

- [ ] All `@keyframes` animations have a guard
- [ ] All `transition` properties producing visible motion have a guard
- [ ] All hover `transform` effects are neutralised
- [ ] Decorative-only elements are hidden or static
- [ ] Loading indicators remain visible in a static state
- [ ] Scroll-reveal content is immediately visible (opacity: 1, transform: none)
- [ ] Modals/accordions appear/disappear without slide/scale transitions
- [ ] No content is lost or broken when motion is disabled
- [ ] Page remains fully functional and navigable

---

## 11. Checklist

### Before Committing Any Animation Code

- [ ] Is this animation **decorative** or **essential**?
- [ ] If decorative: is there a `@media (prefers-reduced-motion: reduce)` guard that sets `animation: none` or `display: none`?
- [ ] If essential: is there a simplified alternative (instant transition, static indicator)?
- [ ] Does the guard preserve **visual feedback** (colour, shadow) while removing **motion** (transform, keyframes)?
- [ ] If using JavaScript: does the code check `window.matchMedia('(prefers-reduced-motion: reduce)')` or use the `useReducedMotion` hook?
- [ ] If using a custom hook: does it default to `respectReducedMotion: true`?
- [ ] Does the flash rate stay below **3 flashes per second** even without the guard?
- [ ] Is the guard placed in the correct location (consolidated block for templates, inline for utility classes)?
- [ ] Has the template been tested with reduced motion enabled in DevTools?
- [ ] Is the content fully readable and usable with all animations disabled?

### Template CSS File Structure

- [ ] Reduced-motion block is placed after the dark-mode section
- [ ] All animated selectors in the file are accounted for in the block
- [ ] Block uses the standard comment header:
  ```css
  /* ============================================
     REDUCED MOTION
     ============================================ */
  ```

### React Component Structure

- [ ] Decorative elements conditionally rendered based on `useReducedMotion()`
- [ ] Animation hooks use `respectReducedMotion: true` (or default)
- [ ] `aria-hidden="true"` on all purely decorative animated elements
- [ ] No `requestAnimationFrame` loops running when reduced motion is active

---

## 12. Related Documentation

- **[ANIMATION-STANDARDS.md](/guidelines/ANIMATION-STANDARDS.md)** --- Animation philosophy, duration scale, performance
- **[ANIMATION-SYSTEM.md](/guidelines/ANIMATION-SYSTEM.md)** --- Centralized animation tokens and utility classes
- **[interactions/animations.md](/guidelines/interactions/animations.md)** --- Animation categories, scroll patterns, loading states
- **[ACCESSIBILITY-COMPLETE-GUIDE.md](/guidelines/ACCESSIBILITY-COMPLETE-GUIDE.md)** --- Full WCAG 2.1 compliance guide (Section 11: Motion and Animation)
- **[design-tokens/animations.md](/guidelines/design-tokens/animations.md)** --- Animation token reference
- **[design-tokens/funky-page-design-system.md](/guidelines/design-tokens/funky-page-design-system.md)** --- Funky/neon animation standards
- **[components/ScrollBackToTop.md](/guidelines/components/ScrollBackToTop.md)** --- Scroll behaviour and reduced motion

### Source Files

- `/src/app/utils/animations.ts` --- `prefersReducedMotion()` utility
- `/src/app/hooks/useScrollReveal.tsx` --- Scroll reveal with reduced-motion support
- `/src/app/hooks/useMicroInteractions.ts` --- Micro-interactions with reduced-motion support
- `/src/styles/animations.css` --- Global animation utility classes with guards

---

**Version:** 1.0
**Last Updated:** February 22, 2026
**System:** LSX Design System
**WCAG Compliance:** 2.3.1 Three Flashes (A), 2.3.3 Animation from Interactions (AAA)
**Browser Support:** All modern browsers (Chrome 74+, Firefox 63+, Safari 10.1+, Edge 79+)
