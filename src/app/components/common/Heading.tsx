/**
 * Heading Component
 * 
 * WordPress concept: Core Heading block
 * Pattern: `core/heading` with level presets
 * 
 * A semantic heading component that enforces LSX Design typography hierarchy
 * and accessibility best practices. Uses design system tokens for all styling.
 * 
 * **Purpose:**
 * - Enforce correct heading hierarchy (h1 → h2 → h3 → h4)
 * - Apply token-based font sizes from design system
 * - Ensure "one H1 per page" rule
 * - Maintain consistent typography across templates
 * 
 * **Accessibility:**
 * - Semantic HTML heading elements (<h1> through <h4>)
 * - Logical heading hierarchy required for screen readers
 * - Never skip heading levels (e.g., h1 → h3)
 * - Optional ID for anchor navigation
 * - Color contrast meets WCAG AA (4.5:1 minimum)
 * 
 * **Performance:**
 * - Pure CSS (no JavaScript)
 * - CSS variables for instant theme switching
 * - No runtime style calculations
 * - Minimal bundle impact (~0.5KB)
 * 
 * **WordPress theme.json mapping:**
 * ```json
 * "settings": {
 *   "typography": {
 *     "fontSizes": [
 *       { "slug": "h1", "size": "60px" },
 *       { "slug": "h2", "size": "32px" },
 *       { "slug": "h3", "size": "24px" },
 *       { "slug": "h4", "size": "20px" }
 *     ]
 *   }
 * }
 * ```
 * 
 * @example
 * // Page title (H1 - only one per page)
 * <Heading level={1}>
 *   Welcome to LSX Design
 * </Heading>
 * 
 * @example
 * // Section heading (H2)
 * <Heading level={2} id="services">
 *   Our Services
 * </Heading>
 * 
 * @example
 * // Subsection heading (H3)
 * <Heading level={3} className="mb-4">
 *   WordPress Development
 * </Heading>
 * 
 * @example
 * // Card/component heading (H4)
 * <Heading level={4}>
 *   Block Theme Features
 * </Heading>
 * 
 * @see {@link /guidelines/components/Heading.md}
 * @see {@link /guidelines/design-tokens/typography.md}
 */

import { ReactNode } from 'react';

/**
 * Heading component props
 * 
 * Defines the heading level, content, and optional styling/ID.
 */
interface HeadingProps {
  /**
   * Semantic heading level (h1 through h6)
   * 
   * **Accessibility rules:**
   * - Use level 1 for page titles (only ONE h1 per page)
   * - Use level 2 for major sections
   * - Use level 3 for subsections
   * - Use level 4 for component/card titles
   * - Use level 5 for small section headings
   * - Use level 6 for label headings (often uppercase)
   * - Never skip levels (e.g., h1 → h3 without h2)
   * 
   * **Visual hierarchy (fluid scaling):**
   * - Level 1: 40px → 64px - Page titles, hero headlines
   * - Level 2: 32px → 48px - Section headings
   * - Level 3: 24px → 36px - Subsection headings
   * - Level 4: 20px → 28px - Card/component titles
   * - Level 5: 18px → 24px - Small section headings
   * - Level 6: 16px → 20px - Label headings (uppercase)
   * 
   * @example
   * level={1} // H1 - Page title
   * 
   * @example
   * level={2} // H2 - Section heading
   */
  level: 1 | 2 | 3 | 4 | 5 | 6;
  
  /**
   * Heading content (text or React elements)
   * 
   * **Best practices:**
   * - Keep headings concise (1-10 words)
   * - Use sentence case (not ALL CAPS)
   * - Avoid generic text like "Click here"
   * - Make headings descriptive and scannable
   * 
   * @example
   * children="Welcome to LSX Design"
   * 
   * @example
   * children={<>Build <strong>Better</strong> Websites</>}
   */
  children: ReactNode;
  
  /**
   * Additional Tailwind classes for spacing/alignment
   * 
   * Common use cases:
   * - Margins: mb-4, mb-6, mb-8
   * - Text alignment: text-center, text-left
   * - Max width: max-w-2xl, max-w-4xl
   * 
   * **Note:** Do not override font-size, font-weight, or font-family
   * as these are enforced by the design system.
   * 
   * @example
   * className="mb-6 text-center"
   */
  className?: string;
  
  /**
   * HTML ID attribute for anchor navigation
   * 
   * Enables deep linking to specific sections (e.g., #section-name).
   * Used for "jump to section" links and table of contents.
   * 
   * **Naming conventions:**
   * - Use lowercase kebab-case
   * - Descriptive and URL-friendly
   * - Unique within the page
   * 
   * @example
   * id="our-services"
   * 
   * @example
   * id="pricing-plans"
   */
  id?: string;
}

/**
 * Heading Component
 * 
 * Renders a semantic heading element with design system typography.
 * 
 * @param props - HeadingProps
 * @returns Rendered heading element (h1, h2, h3, or h4)
 */
export function Heading({ level, children, className = '', id }: HeadingProps) {
  // Create the correct HTML heading tag based on level
  const Tag = `h${level}` as keyof JSX.IntrinsicElements;
  
  /**
   * Font size tokens map to heading levels
   * 
   * Uses CSS variables from /src/styles/theme.css
   * All headings use fluid scaling with clamp()
   * - --text-h1: clamp(2.5rem, 5vw + 1rem, 4rem) - 40px → 64px
   * - --text-h2: clamp(2rem, 4vw + 0.5rem, 3rem) - 32px → 48px
   * - --text-h3: clamp(1.5rem, 3vw + 0.5rem, 2.25rem) - 24px → 36px
   * - --text-h4: clamp(1.25rem, 2vw + 0.5rem, 1.75rem) - 20px → 28px
   * - --text-h5: clamp(1.125rem, 1.5vw + 0.5rem, 1.5rem) - 18px → 24px
   * - --text-h6: clamp(1rem, 1vw + 0.5rem, 1.25rem) - 16px → 20px
   */
  const fontSizeMap = {
    1: 'var(--text-h1)', // H1: 40px → 64px - Page titles
    2: 'var(--text-h2)', // H2: 32px → 48px - Section headings
    3: 'var(--text-h3)', // H3: 24px → 36px - Subsection headings
    4: 'var(--text-h4)', // H4: 20px → 28px - Component titles
    5: 'var(--text-h5)', // H5: 18px → 24px - Small headings
    6: 'var(--text-h6)', // H6: 16px → 20px - Label headings
  };

  /**
   * Font weight tokens per heading level
   * 
   * Uses CSS variables from /src/styles/theme.css
   * 
   * **Typography Best Practices:**
   * - Large headings (H1-H2) use medium weight (500) - size provides hierarchy
   * - Medium headings (H3-H4) use medium weight (500) - balanced emphasis
   * - Small headings (H5-H6) use medium weight (500) - consistent weight system
   * - Lighter weights at large sizes create modern, elegant typography
   * - Weight can be increased with className if needed for specific contexts
   */
  const fontWeightMap = {
    1: 'var(--font-weight-medium)',   // 500 - Hero/page titles (size provides impact)
    2: 'var(--font-weight-medium)',   // 500 - Section headings
    3: 'var(--font-weight-medium)',   // 500 - Subsection headings
    4: 'var(--font-weight-medium)',   // 500 - Card titles
    5: 'var(--font-weight-medium)',   // 500 - Small headings
    6: 'var(--font-weight-medium)',   // 500 - Label headings
  };

  /**
   * Line height per heading level
   * 
   * Uses CSS variables from /src/styles/theme.css
   * Tighter line height for larger headings improves visual density.
   * 
   * - 1.1 (tight): H1 - Display headings
   * - 1.25 (snug): H2, H3 - Section headings
   * - 1.5 (normal): H4, H5, H6 - Smaller headings
   */
  const lineHeightMap = {
    1: 'var(--line-height-tight)',  // 1.1 - Tight for hero
    2: 'var(--line-height-snug)',   // 1.25 - Snug for sections
    3: 'var(--line-height-snug)',   // 1.25 - Snug for subsections
    4: 'var(--line-height-normal)', // 1.5 - Normal for cards
    5: 'var(--line-height-normal)', // 1.5 - Normal for small
    6: 'var(--line-height-normal)', // 1.5 - Normal for labels
  };

  /**
   * Letter spacing per heading level
   * 
   * Uses CSS variables from /src/styles/theme.css
   * Tighter tracking for larger headings creates visual impact.
   * 
   * - -0.025em (tight): H1, H2 - Large display headings
   * - 0 (normal): H3, H4, H5 - Standard headings
   * - 0.025em (wide): H6 - Often used with uppercase
   */
  const letterSpacingMap = {
    1: 'var(--letter-spacing-tight)',  // -0.025em - Tight for impact
    2: 'var(--letter-spacing-tight)',  // -0.025em - Tight for impact
    3: 'var(--letter-spacing-normal)', // 0 - Normal tracking
    4: 'var(--letter-spacing-normal)', // 0 - Normal tracking
    5: 'var(--letter-spacing-normal)', // 0 - Normal tracking
    6: 'var(--letter-spacing-wide)',   // 0.025em - Wide for labels
  };

  return (
    <Tag 
      id={id}
      className={className}
      style={{
        fontFamily: 'var(--font-primary)',
        fontSize: fontSizeMap[level],
        fontWeight: fontWeightMap[level],
        lineHeight: lineHeightMap[level],
        letterSpacing: letterSpacingMap[level],
        color: 'var(--foreground)'
      }}
    >
      {children}
    </Tag>
  );
}
