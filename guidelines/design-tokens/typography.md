# Typography Guidelines — Design Tokens

**Category:** Design Tokens  
**Version:** 1.2.0  
**Last Updated:** 2026-03-14  
**Status:** Active  
**Template Used:** _templates/design-token-template.md  

---

## 🎯 Philosophy
Typography in the Funky aesthetic is bold, legible, and relies purely on standard CSS variables. We enforce strict separation of structure and style: HTML provides semantics (`<h1>`, `<h2>`), and CSS provides the visual mapping via BEM classes (`.heading--h1`, `.text--body`).

**CRITICAL RULE:** For typography, ONLY use the font faces defined in the CSS for all generated text. Do NOT hardcode font-family names. Always use `var(--font-primary)` or `var(--font-secondary)`. No Tailwind typography classes (`text-xl`, `font-bold`) are allowed.

## 📏 CSS Variables
All typographic values are controlled via `/src/styles/theme-base.css`.

### Font Families
```css
:root {
  --font-primary: 'Lexend', sans-serif;
  --font-secondary: 'Manrope', sans-serif;
  --font-mono: ui-monospace, SFMono-Regular, monospace;
}
```

### Font Sizes (Fluid/Responsive)
We use fluid typography built into our CSS variables via `clamp()` to ensure text scales seamlessly across viewports.
```css
:root {
  /* Heading scale (fluid) */
  --text-h1: clamp(2.5rem, 5vw + 1rem, 4rem);        /* 40px → 64px */
  --text-h2: clamp(2rem, 4vw + 0.5rem, 3rem);         /* 32px → 48px */
  --text-h3: clamp(1.5rem, 3vw + 0.5rem, 2.25rem);    /* 24px → 36px */
  --text-h4: clamp(1.25rem, 2vw + 0.5rem, 1.75rem);   /* 20px → 28px */
  --text-h5: clamp(1.125rem, 1.5vw + 0.5rem, 1.5rem); /* 18px → 24px */
  --text-h6: clamp(1rem, 1vw + 0.5rem, 1.25rem);      /* 16px → 20px */
  
  /* Body text scale (fixed) */
  --text-lead: 1.25rem;   /* 20px - Lead paragraphs, hero subtitles */
  --text-xl: 1.25rem;     /* 20px - Extra large body text */
  --text-lg: 1.125rem;    /* 18px - Large body text, FAQ questions */
  --text-base: 1rem;      /* 16px - Standard body text, buttons */
  --text-sm: 0.875rem;    /* 14px - Small text, metadata (alias) */
  --text-small: 0.875rem; /* 14px - Metadata, captions, small buttons */
  --text-xs: 0.75rem;     /* 12px - Badges, labels */
  --text-2xs: 0.625rem;   /* 10px - Micro text, counters */
  --text-tiny: 0.75rem;   /* 12px - Legal text, footnotes */
  
  /* Display scale (fixed) */
  --text-2xl: 1.5rem;     /* 24px */
  --text-3xl: 1.875rem;   /* 30px */
  --text-4xl: 2.25rem;    /* 36px */
  --text-5xl: 3rem;       /* 48px */
  --text-6xl: 3.75rem;    /* 60px */
}
```

### Font Weights & Line Heights
```css
:root {
  --font-weight-light: 300;      /* Decorative only */
  --font-weight-regular: 400;    /* Body text, paragraphs */
  --font-weight-medium: 500;     /* Headings (modern standard) */
  --font-weight-semibold: 600;   /* Button text, data emphasis */
  --font-weight-bold: 700;       /* Strong callouts, warnings */
  --font-weight-extrabold: 800;  /* Alias for black — hero titles */
  --font-weight-black: 800;      /* Display text, marketing */

  --line-height-tight: 1.1;      /* Display headings (H1) */
  --line-height-snug: 1.25;      /* Headings (H2-H3) */
  --line-height-normal: 1.5;     /* Body text, small headings */
  --line-height-relaxed: 1.75;   /* Long-form content, articles */
}
```

### Letter Spacing
```css
:root {
  --letter-spacing-tight: -0.025em;  /* Large headings (H1-H2) */
  --letter-spacing-tighter: -0.04em; /* Display/hero titles */
  --letter-spacing-normal: 0;        /* Body text */
  --letter-spacing-wide: 0.025em;    /* Buttons, labels */
  --letter-spacing-wider: 0.05em;    /* Uppercase text, categories */
  --letter-spacing-widest: 0.1em;    /* Extra wide tracking, badges */
}
```

## 🏗 Implementation Rules

1. **BEM Classes for Typography:** Use block/element classes to style text, not global tag selectors.
```css
/* Correct */
.hero__title {
  font-family: var(--font-primary);
  font-size: var(--text-h1);
  font-weight: var(--font-weight-black);
  line-height: var(--line-height-tight);
  color: var(--wp--preset--color--neon-pink);
  text-transform: uppercase;
}

/* Incorrect (Do not style tags directly or use Tailwind) */
h1 { ... }
```

2. **FitText / Fluid Scaling:** 
   Our `clamp()` CSS variables automatically handle viewport adjustments. Do not write custom media queries just to adjust font-size unless absolutely necessary.