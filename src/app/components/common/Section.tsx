/**
 * Section Component
 * 
 * WordPress concept: Core Group block with semantic <section> wrapper
 * Pattern: `core/group` with spacing presets
 * 
 * Provides semantic HTML structure with consistent vertical spacing using
 * Tailwind utility classes. All block patterns should be wrapped in Section
 * for consistent spacing and semantic structure.
 * 
 * **WordPress Mapping:**
 * - Maps to spacingScale in theme.json
 * - Spacing variants: 10, 20, 30, 40, 50, 60 (WordPress scale)
 * - Background variants: Default, Card, Muted (color presets)
 * 
 * **Accessibility:**
 * - Semantic <section> element
 * - Optional ID for anchor navigation
 * - Proper heading hierarchy required within
 * - Landmark region for screen readers
 * 
 * **Performance:**
 * - Pure CSS layout (no JavaScript)
 * - Tailwind utility classes for minimal CSS
 * - No side effects or re-renders
 * 
 * @example
 * // Default section with medium spacing
 * <Section>
 *   <Container>
 *     <h2>Section Title</h2>
 *     <p>Section content</p>
 *   </Container>
 * </Section>
 * 
 * @example
 * // Large spacing with muted background
 * <Section spacing="xl" background="muted">
 *   <Container>
 *     <CardGrid items={items} />
 *   </Container>
 * </Section>
 * 
 * @example
 * // With ID for anchor navigation
 * <Section id="features" spacing="lg">
 *   <Container>
 *     <FeatureList />
 *   </Container>
 * </Section>
 * 
 * @see {@link /guidelines/components/Section.md}
 */

import { ReactNode } from 'react';

/**
 * Section component props
 * 
 * Defines spacing, background color, section style, and optional ID for the section.
 */
interface SectionProps {
  /**
   * Content to be rendered within the section
   * 
   * Typically includes Container component with patterns/content inside.
   * Should maintain proper heading hierarchy (h2, h3, etc.).
   * 
   * @example
   * children={<Container><h2>Title</h2></Container>}
   */
  children: ReactNode;
  
  /**
   * Vertical spacing (padding top/bottom)
   * 
   * Controls the amount of whitespace above and below the section:
   * - `sm`: 48px (py-12) - Compact sections, minor content
   * - `md`: 80px (py-20) - Default spacing for most sections
   * - `lg`: 96px (py-24) - Important sections, more breathing room
   * - `xl`: 128px (py-32) - Hero sections, major visual breaks
   * 
   * **WordPress theme.json mapping:**
   * ```json
   * "settings": {
   *   "spacing": {
   *     "spacingScale": {
   *       "steps": 10,
   *       "mediumStep": 1.5,
   *       "unit": "rem"
   *     }
   *   }
   * }
   * ```
   * 
   * **Mobile responsive:**
   * All spacing values are fixed (not responsive).
   * Mobile devices get same vertical spacing for consistency.
   * 
   * **Note:** Ignored when sectionStyle is set (spacing defined in CSS)
   * 
   * @default 'md'
   * 
   * @example
   * spacing="xl"
   */
  spacing?: 'sm' | 'md' | 'lg' | 'xl';
  
  /**
   * Background color variant
   * 
   * Controls the section background using CSS variables:
   * - `default`: --background (main site background)
   * - `card`: --card (elevated card background)
   * - `muted`: --muted (subtle visual separation)
   * 
   * **Accessibility:**
   * All background variants maintain proper contrast with text.
   * Foreground colors automatically adjust based on background.
   * 
   * **Design pattern:**
   * Alternate between backgrounds for visual rhythm:
   * default → muted → default → card → default
   * 
   * **Note:** Ignored when sectionStyle is set (background defined in CSS)
   * 
   * @default 'default'
   * 
   * @example
   * background="muted"
   */
  background?: 'default' | 'card' | 'muted';
  
  /**
   * WordPress-style section variation
   * 
   * Applies a complete section style (background, colors, typography, spacing)
   * to the section and all child elements. Maps to WordPress theme.json
   * "styles.blocks.core/group.variations".
   * 
   * Available section styles:
   * - Hero: `hero-primary`, `hero-secondary`, `hero-minimal`
   * - CTA: `cta-primary`, `cta-secondary`, `cta-accent`
   * - Content: `content-default`, `content-feature`, `content-editorial`
   * - Testimonial: `testimonial-default`, `testimonial-highlight`, `testimonial-grid`
   * - Stats: `stats-default`, `stats-highlight`
   * - Pricing: `pricing-default`, `pricing-featured`
   * - Form: `form-default`, `form-highlight`
   * 
   * **When set, this overrides:**
   * - `spacing` prop (uses CSS-defined spacing)
   * - `background` prop (uses CSS-defined background)
   * - Child element colors (uses CSS-defined colors)
   * 
   * **Styles all child elements:**
   * - Headings (h1-h6): Font family, size, weight, color
   * - Paragraphs (p): Font family, size, color
   * - Buttons: Background, color, borders
   * - Small text: Font family, size, color
   * 
   * @example
   * sectionStyle="hero-primary"
   * 
   * @example
   * sectionStyle="testimonial-default"
   * 
   * @see /src/styles/section-styles.css
   */
  sectionStyle?: 
    | 'hero-primary' | 'hero-secondary' | 'hero-minimal'
    | 'cta-primary' | 'cta-secondary' | 'cta-accent'
    | 'content-default' | 'content-feature' | 'content-editorial'
    | 'testimonial-default' | 'testimonial-highlight' | 'testimonial-grid'
    | 'stats-default' | 'stats-highlight'
    | 'pricing-default' | 'pricing-featured'
    | 'form-default' | 'form-highlight';
  
  /**
   * Section style variant (legacy, use sectionStyle instead)
   * 
   * @deprecated Use sectionStyle prop instead
   */
  variant?: 'default' | 'canvas' | 'accent' | 'muted';
  
  /**
   * Additional Tailwind classes for custom styling
   * 
   * Use sparingly for one-off cases. Most sections should use
   * standard spacing/background props for consistency.
   * 
   * @example
   * className="border-t border-border"
   */
  className?: string;
  
  /**
   * HTML ID attribute for anchor navigation
   * 
   * Enables deep linking to specific sections (e.g., #features).
   * Used for "scroll to section" links in navigation.
   * 
   * **Naming convention:**
   * - Use lowercase kebab-case
   * - Descriptive and unique
   * - Avoid generic IDs like "section1"
   * 
   * @example
   * id="features"
   * 
   * @example
   * id="pricing-plans"
   */
  id?: string;
  
  /**
   * Inline styles for one-off customization
   * 
   * Use CSS variables when possible for design system compliance.
   * 
   * @example
   * style={{ backgroundColor: 'var(--primary)' }}
   */
  style?: React.CSSProperties;
}

/**
 * Section Component
 * 
 * Renders a semantic section element with spacing and background styling.
 * 
 * @param props - SectionProps
 * @returns Rendered section element
 */
export function Section({ 
  children, 
  spacing = 'md', 
  background = 'default',
  sectionStyle,
  variant,
  className = '',
  id,
  style,
  ...props
}: SectionProps) {
  /**
   * Tailwind vertical padding classes
   * 
   * More generous spacing for modern feel and visual hierarchy.
   * Fixed values (not responsive) for consistent rhythm.
   * 
   * **Tailwind values:**
   * - py-12 = 3rem = 48px (top + bottom)
   * - py-20 = 5rem = 80px
   * - py-24 = 6rem = 96px
   * - py-32 = 8rem = 128px
   */
  const spacingClasses = {
    'sm': 'py-12',  // 48px - Compact sections
    'md': 'py-20',  // 80px - Default spacing
    'lg': 'py-24',  // 96px - Important sections
    'xl': 'py-32',  // 128px - Hero/major sections
  };

  /**
   * Background color classes using CSS variables
   * 
   * Uses Tailwind color utilities with CSS variables from theme.css.
   * Ensures proper light/dark mode support through CSS variables.
   * 
   * **CSS Variable mapping:**
   * - bg-background → var(--background)
   * - bg-card → var(--card)
   * - bg-muted → var(--muted)
   */
  const backgroundClasses = {
    'default': 'bg-background',
    'card': 'bg-card',
    'muted': 'bg-muted',
  };
  
  /**
   * Section style classes
   * 
   * WordPress-style section variations that control all child elements.
   * Maps to theme.json "styles.blocks.core/group.variations".
   * 
   * When sectionStyle is set, it overrides spacing and background props.
   */
  const sectionStyleClasses = {
    'hero-primary': 'section-style-hero-primary',
    'hero-secondary': 'section-style-hero-secondary',
    'hero-minimal': 'section-style-hero-minimal',
    'cta-primary': 'section-style-cta-primary',
    'cta-secondary': 'section-style-cta-secondary',
    'cta-accent': 'section-style-cta-accent',
    'content-default': 'section-style-content-default',
    'content-feature': 'section-style-content-feature',
    'content-editorial': 'section-style-content-editorial',
    'testimonial-default': 'section-style-testimonial-default',
    'testimonial-highlight': 'section-style-testimonial-highlight',
    'testimonial-grid': 'section-style-testimonial-grid',
    'stats-default': 'section-style-stats-default',
    'stats-highlight': 'section-style-stats-highlight',
    'pricing-default': 'section-style-pricing-default',
    'pricing-featured': 'section-style-pricing-featured',
    'form-default': 'section-style-form-default',
    'form-highlight': 'section-style-form-highlight',
  };
  
  // Legacy variant support (maps to background)
  const variantClasses = {
    'default': 'bg-background',
    'canvas': 'bg-background',
    'accent': 'bg-accent text-accent-foreground',
    'muted': 'bg-muted',
  };

  // Determine final class names
  let combinedClassName = '';
  
  if (sectionStyle) {
    // Section style takes precedence - it defines all styling
    combinedClassName = `${sectionStyleClasses[sectionStyle]} ${className}`;
  } else if (variant) {
    // Legacy variant support
    combinedClassName = `${spacingClasses[spacing]} ${variantClasses[variant]} ${className}`;
  } else {
    // Standard spacing + background
    combinedClassName = `${spacingClasses[spacing]} ${backgroundClasses[background]} ${className}`;
  }

  return (
    <section 
      id={id}
      className={combinedClassName}
      style={style}
      {...props}
    >
      {children}
    </section>
  );
}