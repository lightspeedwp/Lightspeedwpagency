# JSDoc & TypeScript Documentation Standards

**Category:** Code Documentation  
**Status:** ✅ **CANONICAL REFERENCE**  
**Last Updated:** December 25, 2024

---

## 📋 Overview

This document defines **mandatory** JSDoc and TypeScript documentation standards for the LSX Design System. All components, utilities, hooks, and functions **MUST** follow these standards.

**Purpose:**
- Provide excellent IDE autocomplete and IntelliSense
- Generate automatic documentation
- Help developers understand component APIs
- Maintain consistency across codebase
- Support team onboarding

---

## ⚙️ Core Principles

1. **Document the "Why," Not the "What"**
   - Code shows what it does
   - Comments explain why it does it

2. **Document Public APIs Thoroughly**
   - All exported components
   - All exported functions
   - All exported types

3. **Use TypeScript + JSDoc Together**
   - TypeScript for type safety
   - JSDoc for descriptions and examples

4. **Keep Documentation Up-to-Date**
   - Update docs when code changes
   - Delete outdated comments

---

## 📦 Component Documentation

### Required Sections

Every component MUST have:

1. **File-level JSDoc** - What the component is, WordPress mapping
2. **Interface JSDoc** - Describe all props
3. **Component JSDoc** - Usage examples, accessibility notes
4. **Complex Logic Comments** - Explain non-obvious code

---

### Component Template

```tsx
/**
 * Button Component
 * 
 * WordPress concept: Core Button block
 * Pattern: `lsx-design/buttons/button-primary`
 * 
 * A flexible button component that enforces LSX Design token-based styling
 * and integrates with the centralized navigation system.
 * 
 * **Accessibility:**
 * - Keyboard accessible (Tab, Enter, Space)
 * - Focus visible with 2px ring
 * - Semantic HTML (<button> or <a>)
 * - ARIA labels supported
 * 
 * **Performance:**
 * - Lightweight: ~2KB gzipped
 * - No external dependencies
 * - CSS-in-JS with CSS variables
 * 
 * @example
 * // Primary button with navigation
 * <Button variant="primary" page="contact">
 *   Contact Us
 * </Button>
 * 
 * @example
 * // External link button
 * <Button variant="outline" href="https://example.com">
 *   Learn More
 * </Button>
 * 
 * @example
 * // Custom onClick handler
 * <Button variant="ghost" onClick={() => console.log('Clicked')}>
 *   Click Me
 * </Button>
 */

import { ReactNode, ButtonHTMLAttributes } from 'react';
import { useNavigation } from '../../contexts/NavigationContext';

/**
 * Button component props
 * 
 * Extends native HTML button attributes for full compatibility
 * with additional LSX Design-specific props.
 */
interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  /**
   * Visual style variant of the button
   * 
   * - `primary`: Main CTA with primary color background
   * - `secondary`: Secondary actions with secondary color
   * - `outline`: Bordered button with transparent background
   * - `ghost`: Minimal button with transparent background
   * - `destructive`: Dangerous actions (delete, remove)
   * 
   * @default 'primary'
   */
  variant?: 'primary' | 'secondary' | 'ghost' | 'destructive' | 'outline';
  
  /**
   * Button content (text, icons, or React elements)
   * 
   * @example
   * children="Click Me"
   * 
   * @example
   * children={<><Icon /> Submit</>}
   */
  children: ReactNode;
  
  /**
   * External URL for <a> tag rendering
   * 
   * When provided, renders an <a> tag instead of <button>.
   * Use for external links or anchor navigation.
   * 
   * **Note:** Mutually exclusive with `page` prop.
   * 
   * @example
   * href="https://wordpress.org"
   * 
   * @example
   * href="#section-id"
   */
  href?: string;
  
  /**
   * Internal navigation page ID
   * 
   * Integrates with useNavigation() for SPA-style routing.
   * Uses centralized page registry from `/src/app/data/pages.ts`.
   * 
   * **Valid page IDs:**
   * - 'front-page', 'contact', 'services', 'about', etc.
   * 
   * **Note:** Mutually exclusive with `href` prop.
   * 
   * @example
   * page="contact"
   * 
   * @example
   * page="portfolio-single-african-safari"
   */
  page?: string;
}

/**
 * Button Component
 * 
 * @param props - ButtonProps
 * @returns Rendered button or anchor element
 */
export function Button({ 
  variant = 'primary', 
  children, 
  className = '',
  href,
  page,
  ...props 
}: ButtonProps) {
  const { navigateTo } = useNavigation();
  
  /**
   * Style variants mapped to CSS variables
   * 
   * Uses design system tokens from /src/styles/theme.css
   * All colors are semantic roles, not hard-coded values.
   */
  const variants = {
    primary: {
      backgroundColor: 'var(--primary)',
      color: 'var(--primary-foreground)',
    },
    secondary: {
      backgroundColor: 'var(--secondary)',
      color: 'var(--secondary-foreground)',
    },
    outline: {
      backgroundColor: 'transparent',
      color: 'var(--foreground)',
      border: '1px solid var(--border)',
    },
    ghost: {
      backgroundColor: 'transparent',
      color: 'var(--foreground)',
      border: '1px solid var(--border)',
    },
    destructive: {
      backgroundColor: 'var(--destructive)',
      color: 'var(--destructive-foreground)',
    }
  };

  // Tailwind classes for consistent spacing
  const baseClasses = 'px-6 py-3 inline-flex items-center justify-center';
  const combinedClassName = `${baseClasses} ${className}`;

  /**
   * Base styles applied to all button variants
   * 
   * Uses CSS variables from theme.css for maintainability.
   * Font size, weight, and radius are token-driven.
   */
  const style = {
    ...variants[variant],
    fontFamily: 'Lexend, sans-serif',
    fontSize: 'var(--text-base)', // 16px
    fontWeight: 'var(--font-weight-regular)', // 400
    borderRadius: 'var(--radius)', // 4px
    cursor: 'pointer',
    transition: 'all 0.2s ease',
    border: (variant === 'ghost' || variant === 'outline') 
      ? '1px solid var(--border)' 
      : 'none',
  };

  // Render as anchor tag if href provided
  if (href) {
    return (
      <a
        href={href}
        className={combinedClassName}
        style={style}
      >
        {children}
      </a>
    );
  }

  // Render as button with navigation if page provided
  if (page) {
    return (
      <button
        className={combinedClassName}
        style={style}
        onClick={() => navigateTo(page)}
        {...props}
      >
        {children}
      </button>
    );
  }

  // Default: render as standard button
  return (
    <button
      className={combinedClassName}
      style={style}
      {...props}
    >
      {children}
    </button>
  );
}
```

---

## 📐 JSDoc Tags Reference

### Required Tags for Components

```tsx
/**
 * [Component Name]
 * 
 * [One-line description]
 * 
 * WordPress concept: [WordPress equivalent]
 * Pattern: [Pattern slug if applicable]
 * 
 * [Detailed description with features, use cases]
 * 
 * **Accessibility:**
 * - [Keyboard navigation details]
 * - [Focus management]
 * - [ARIA attributes]
 * - [Screen reader support]
 * 
 * **Performance:**
 * - [Bundle size]
 * - [Dependencies]
 * - [Optimization notes]
 * 
 * @example
 * [Basic usage example]
 * 
 * @example
 * [Advanced usage example]
 * 
 * @see [Related components or docs]
 */
```

---

### Required Tags for Props/Interfaces

```tsx
/**
 * [Interface name] props
 * 
 * [Brief description of the interface purpose]
 * 
 * @extends [Parent interface if applicable]
 */
interface ComponentProps {
  /**
   * [Prop description]
   * 
   * [Detailed explanation of what this prop does]
   * 
   * **Accepted values:**
   * - `value1`: [What it does]
   * - `value2`: [What it does]
   * 
   * **Note:** [Important constraints or behavior]
   * 
   * @default [Default value]
   * 
   * @example
   * [Usage example]
   */
  propName: PropType;
}
```

---

### Required Tags for Functions/Utilities

```tsx
/**
 * [Function name]
 * 
 * [One-line description of what it does]
 * 
 * [Detailed description including:
 *  - What problem it solves
 *  - When to use it
 *  - Important behavior notes]
 * 
 * @param paramName - [Parameter description]
 * @param paramName2 - [Parameter description]
 * 
 * @returns [Return value description]
 * 
 * @throws {ErrorType} [When and why this error is thrown]
 * 
 * @example
 * [Usage example]
 * 
 * @example
 * [Edge case or advanced example]
 * 
 * @see [Related functions]
 */
function utilityFunction(paramName: Type, paramName2: Type): ReturnType {
  // Implementation
}
```

---

### Required Tags for Hooks

```tsx
/**
 * [Hook name]
 * 
 * [One-line description]
 * 
 * [Detailed description including:
 *  - What state/logic it manages
 *  - When to use it
 *  - Performance considerations]
 * 
 * **Usage Rules:**
 * - [React hooks rules that apply]
 * - [Component lifecycle considerations]
 * - [Dependencies that should be provided]
 * 
 * @param options - [Hook options/config]
 * 
 * @returns [Return value with all properties described]
 * 
 * @example
 * [Basic usage]
 * 
 * @example
 * [Advanced usage with options]
 * 
 * @see [Related hooks]
 */
export function useCustomHook(options?: Options): ReturnType {
  // Implementation
}
```

---

## 📝 Prop Documentation Standards

### Simple Props

```tsx
interface Props {
  /** 
   * Unique identifier for the item
   */
  id: string;
  
  /**
   * Display title
   * 
   * @example
   * title="Welcome to LSX Design"
   */
  title: string;
}
```

---

### Complex Props with Constraints

```tsx
interface Props {
  /**
   * Visual variant of the component
   * 
   * Controls background color and text contrast:
   * - `default`: White background, black text (light mode)
   * - `muted`: Light gray background, for visual separation
   * - `card`: Card background, used for elevated content
   * 
   * **Accessibility:** All variants maintain WCAG AA contrast
   * 
   * @default 'default'
   * 
   * @example
   * variant="muted"
   */
  variant?: 'default' | 'muted' | 'card';
  
  /**
   * Callback function when item is clicked
   * 
   * **Note:** Only called if component is not disabled
   * 
   * @param event - React mouse event
   * 
   * @example
   * onClick={(e) => console.log('Clicked', e)}
   */
  onClick?: (event: React.MouseEvent) => void;
}
```

---

### Props with Examples

```tsx
interface FAQSectionProps {
  /**
   * Array of FAQ items to display
   * 
   * Each item requires:
   * - `question`: String (max 200 chars recommended)
   * - `answer`: String (supports plain text only)
   * 
   * **Performance:** 
   * - Recommended: 4-8 FAQs per section
   * - Maximum: 20 FAQs (performance degradation beyond this)
   * 
   * @example
   * faqs={[
   *   {
   *     question: "What is LSX Design?",
   *     answer: "A WordPress design system..."
   *   },
   *   {
   *     question: "How long does a project take?",
   *     answer: "Typical projects take 4-6 weeks..."
   *   }
   * ]}
   */
  faqs: FAQItem[];
}
```

---

## 🎯 Usage Examples Standards

### Example Quality Criteria

✅ **Good Examples:**
- Show common use cases
- Include realistic data
- Demonstrate key features
- Show proper imports
- Use actual component API

❌ **Bad Examples:**
- Generic placeholder text
- Missing imports
- Showing non-existent props
- Incomplete code

---

### Example Template

```tsx
/**
 * @example
 * // [Description of what this example shows]
 * import { Component } from './Component';
 * 
 * function MyPage() {
 *   return (
 *     <Component
 *       prop1="value"
 *       prop2={true}
 *     >
 *       Content here
 *     </Component>
 *   );
 * }
 */
```

---

### Multiple Examples

```tsx
/**
 * @example
 * // Basic usage with minimal props
 * <Button variant="primary">
 *   Submit
 * </Button>
 * 
 * @example
 * // With navigation integration
 * <Button variant="primary" page="contact">
 *   Contact Us
 * </Button>
 * 
 * @example
 * // External link with custom styling
 * <Button 
 *   variant="outline" 
 *   href="https://wordpress.org"
 *   className="custom-class"
 * >
 *   Learn More
 * </Button>
 * 
 * @example
 * // Disabled state
 * <Button variant="primary" disabled>
 *   Loading...
 * </Button>
 */
```

---

## 📚 Type Documentation

### Documenting Interfaces

```tsx
/**
 * FAQ item structure
 * 
 * Represents a single question-answer pair in the FAQ accordion.
 * Used by FAQSection component and FAQ data collections.
 * 
 * @see {@link FAQSection}
 * @see {@link /src/app/data/faqs.ts}
 */
export interface FAQItem {
  /**
   * The question text
   * 
   * **Guidelines:**
   * - Keep under 200 characters
   * - Start with question words (What, How, Why, etc.)
   * - End with question mark
   * - Use sentence case
   * 
   * @example
   * question: "What makes LSX Design different?"
   */
  question: string;
  
  /**
   * The answer text
   * 
   * **Guidelines:**
   * - Plain text only (no HTML)
   * - 2-3 sentences recommended
   * - Max 500 characters for readability
   * - Complete sentences with proper grammar
   * 
   * @example
   * answer: "We specialize in token-driven design systems..."
   */
  answer: string;
}
```

---

### Documenting Type Unions

```tsx
/**
 * Button visual variants
 * 
 * Defines the available button styles in the design system.
 * Each variant maps to specific CSS variables from theme.css.
 * 
 * **Variant Guide:**
 * - `primary`: Main CTAs, most important actions
 * - `secondary`: Supporting actions, less prominent
 * - `outline`: Tertiary actions, bordered style
 * - `ghost`: Minimal style, text links as buttons
 * - `destructive`: Dangerous actions (delete, remove, etc.)
 * 
 * @see {@link Button}
 */
export type ButtonVariant = 
  | 'primary' 
  | 'secondary' 
  | 'outline' 
  | 'ghost' 
  | 'destructive';
```

---

### Documenting Utility Types

```tsx
/**
 * Extract props from a component type
 * 
 * Utility type to get the props interface from a React component.
 * Useful for extending component props or type composition.
 * 
 * @template T - The component type
 * 
 * @example
 * type MyButtonProps = ComponentProps<typeof Button>;
 * 
 * @example
 * interface ExtendedProps extends ComponentProps<typeof Button> {
 *   customProp: string;
 * }
 */
type ComponentProps<T> = T extends React.ComponentType<infer P> ? P : never;
```

---

## 🔧 Inline Comment Standards

### When to Write Comments

**DO Comment:**
- Complex algorithms or business logic
- Non-obvious solutions or workarounds
- Performance optimizations
- Accessibility implementation details
- Browser-specific hacks
- Temporary code (TODO, FIXME, HACK)

**DON'T Comment:**
- Obvious code that explains itself
- Redundant explanations
- Outdated information
- Code instead of removing it

---

### Comment Style Guide

```tsx
// ✅ GOOD: Explains WHY, not WHAT
// Use object lookup instead of if/else for better performance
// and maintainability when adding new variants
const backgroundColor = {
  default: 'var(--background)',
  muted: 'var(--muted)',
  card: 'var(--card)'
}[variant];

// ❌ BAD: States the obvious
// Set the background color based on variant
const backgroundColor = {
  default: 'var(--background)',
  muted: 'var(--muted)',
  card: 'var(--card)'
}[variant];
```

---

### Complex Logic Comments

```tsx
/**
 * Calculate responsive font size using clamp()
 * 
 * Formula: clamp(min, preferred, max)
 * - min: 32px (mobile minimum for H2)
 * - preferred: 5vw (scales with viewport)
 * - max: 48px (desktop maximum to prevent huge text)
 * 
 * **Accessibility:** Minimum 32px ensures readability on small screens
 * **Performance:** No JavaScript required, pure CSS calculation
 * 
 * @see https://developer.mozilla.org/en-US/docs/Web/CSS/clamp
 */
fontSize: 'clamp(32px, 5vw, 48px)'
```

---

### Workaround Comments

```tsx
/**
 * HACK: Force repaint to fix Safari rendering bug
 * 
 * Safari sometimes doesn't repaint elements after CSS variable changes.
 * Adding 'transform: translateZ(0)' forces hardware acceleration
 * which triggers a repaint.
 * 
 * **Bug:** https://bugs.webkit.org/show_bug.cgi?id=123456
 * **TODO:** Remove when Safari 18+ becomes minimum requirement
 * 
 * @see https://stackoverflow.com/questions/...
 */
transform: 'translateZ(0)'
```

---

### TODO/FIXME/HACK Tags

```tsx
// TODO: Add loading state when navigation is in progress
// TODO(username): Implement error boundary for this section
// FIXME: Race condition when rapidly toggling FAQ items
// HACK: Temporary workaround for IE11 grid support
// NOTE: This component will be deprecated in v2.0
// OPTIMIZE: Consider virtualizing long lists (100+ items)
```

---

## ✅ Documentation Checklist

### Component Checklist

- [ ] File-level JSDoc with WordPress mapping
- [ ] Component description with purpose
- [ ] Accessibility section
- [ ] Performance notes
- [ ] At least 2 usage examples
- [ ] All props documented with JSDoc
- [ ] Default values specified
- [ ] Complex props have examples
- [ ] TypeScript interfaces exported
- [ ] Related components referenced
- [ ] Complex logic has inline comments
- [ ] Workarounds documented with TODO

---

### Function/Utility Checklist

- [ ] Function purpose clearly described
- [ ] All parameters documented with @param
- [ ] Return value documented with @returns
- [ ] Errors documented with @throws
- [ ] At least 1 usage example
- [ ] Edge cases documented
- [ ] Performance implications noted
- [ ] Related functions referenced

---

### Hook Checklist

- [ ] Hook purpose and state management described
- [ ] Usage rules documented
- [ ] Dependencies specified
- [ ] Return value structure documented
- [ ] At least 2 usage examples
- [ ] Performance considerations noted
- [ ] Related hooks referenced

---

## 📊 Quality Metrics

### Documentation Coverage Targets

| Type | Target | Current | Status |
|------|--------|---------|--------|
| Components | 95% | 35% | 🔴 |
| Functions | 90% | 15% | 🔴 |
| Hooks | 95% | 20% | 🔴 |
| Types/Interfaces | 85% | 40% | 🔴 |
| Utilities | 80% | 10% | 🔴 |

**Overall Target:** 90% documentation coverage

---

## 🎓 Training Examples

### Before (Bad Documentation)

```tsx
interface ButtonProps {
  variant?: string;
  children: ReactNode;
  href?: string;
  page?: string;
}

export function Button({ variant = 'primary', children, href, page, ...props }: ButtonProps) {
  // ...implementation
}
```

**Problems:**
- No JSDoc
- No prop descriptions
- No usage examples
- No accessibility notes
- No type constraints
- Vague types (string instead of union)

---

### After (Good Documentation)

```tsx
/**
 * Button Component
 * 
 * A flexible, accessible button component that integrates with
 * the LSX Design navigation system and enforces design tokens.
 * 
 * **Accessibility:**
 * - Keyboard accessible (Tab, Enter, Space)
 * - Focus visible with 2px ring
 * - Semantic HTML (<button> or <a>)
 * 
 * @example
 * <Button variant="primary" page="contact">
 *   Contact Us
 * </Button>
 */
interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  /**
   * Visual style variant
   * 
   * @default 'primary'
   */
  variant?: 'primary' | 'secondary' | 'outline' | 'ghost' | 'destructive';
  
  /** Button content */
  children: ReactNode;
  
  /**
   * External URL (renders <a> tag)
   * 
   * @example
   * href="https://wordpress.org"
   */
  href?: string;
  
  /**
   * Internal page ID for navigation
   * 
   * @example
   * page="contact"
   */
  page?: string;
}

export function Button({ 
  variant = 'primary', 
  children, 
  href, 
  page, 
  ...props 
}: ButtonProps) {
  // ...implementation
}
```

**Improvements:**
- ✅ Complete component JSDoc
- ✅ All props documented
- ✅ Usage examples
- ✅ Accessibility notes
- ✅ Proper type constraints
- ✅ Default values specified

---

## 🚀 Getting Started

### Step 1: Document Existing Components

**Priority Order:**
1. Most-used components (Button, Section, Container)
2. Pattern components (FAQSection, CTASection)
3. Template parts (Header, Footer)
4. Utility components
5. Page templates

**Time Estimate:** 30-60 minutes per component

---

### Step 2: Set Up IDE Integration

**VS Code Settings:**

```json
{
  "typescript.suggest.completeFunctionCalls": true,
  "typescript.inlayHints.parameterNames.enabled": "all",
  "javascript.suggest.completeFunctionCalls": true,
  "editor.quickSuggestions": {
    "comments": true
  }
}
```

---

### Step 3: Create Documentation Template Snippets

**VS Code Snippet:**

```json
{
  "Component JSDoc": {
    "prefix": "jsdoc-component",
    "body": [
      "/**",
      " * ${1:ComponentName}",
      " * ",
      " * ${2:Component description}",
      " * ",
      " * WordPress concept: ${3:Core block / Pattern}",
      " * ",
      " * **Accessibility:**",
      " * - ${4:Accessibility feature}",
      " * ",
      " * @example",
      " * ${5:Usage example}",
      " */"
    ]
  }
}
```

---

## 📖 References

**Official Documentation:**
- [JSDoc Official Guide](https://jsdoc.app/)
- [TypeScript JSDoc Reference](https://www.typescriptlang.org/docs/handbook/jsdoc-supported-types.html)
- [TSDoc Standard](https://tsdoc.org/)

**LSX Design Related:**
- [Component Architecture](/guidelines/overview-components.md)
- [Design Tokens](/guidelines/design-tokens/)
- [Accessibility Guidelines](/guidelines/ACCESSIBILITY-COMPLETE-GUIDE.md)

---

**Created:** December 25, 2024  
**Status:** ✅ Canonical Reference  
**Next Review:** January 15, 2025
