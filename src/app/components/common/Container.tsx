/**
 * Container Component
 * 
 * WordPress concept: Core Group block with constrained width
 * Pattern: `core/group` with layout constraints
 * 
 * A layout container that enforces consistent max-width and horizontal padding
 * across the site. Maps directly to WordPress's contentSize and wideSize settings
 * defined in theme.json.
 * 
 * **WordPress Mapping:**
 * - `default`: contentSize (1280px / max-w-7xl)
 * - `wide`: wideSize (1440px / max-w-[90rem])
 * - `full`: Full viewport width with no constraints
 * 
 * **Accessibility:**
 * - Semantic HTML (plain <div>)
 * - Proper content width for readability (45-75 characters per line)
 * - Horizontal padding maintains touch targets on mobile
 * 
 * **Performance:**
 * - Pure CSS layout (no JavaScript)
 * - Tailwind utility classes (minimal CSS output)
 * - No side effects or re-renders
 * 
 * @example
 * // Default container (1280px max-width)
 * <Container>
 *   <h1>Page Title</h1>
 *   <p>Content goes here</p>
 * </Container>
 * 
 * @example
 * // Wide container for larger layouts (1440px max-width)
 * <Container width="wide">
 *   <div className="grid grid-cols-3">...</div>
 * </Container>
 * 
 * @example
 * // Full-width container (no max-width)
 * <Container width="full">
 *   <img src="hero.jpg" alt="Full-width hero" />
 * </Container>
 * 
 * @see {@link /guidelines/components/Container.md}
 */

import { ReactNode } from 'react';

/**
 * Container component props
 * 
 * Defines the width constraint and children content for the container.
 */
interface ContainerProps {
  /**
   * Content to be contained within max-width constraints
   * 
   * Can include any valid React nodes: text, elements, components.
   * 
   * @example
   * children={<><h1>Title</h1><p>Content</p></>}
   */
  children: ReactNode;
  
  /**
   * Width variant controlling max-width constraint
   * 
   * Controls the maximum width of the container:
   * - `default`: 1280px (theme.json contentSize) - Best for body content
   * - `wide`: 1440px (theme.json wideSize) - Best for grids and galleries
   * - `full`: No max-width - Best for full-bleed sections
   * 
   * **WordPress theme.json mapping:**
   * ```json
   * "settings": {
   *   "layout": {
   *     "contentSize": "1280px",  // default
   *     "wideSize": "1440px"      // wide
   *   }
   * }
   * ```
   * 
   * @default 'default'
   * 
   * @example
   * width="default"
   */
  width?: 'default' | 'wide' | 'full';
  
  /**
   * Additional Tailwind classes for custom styling
   * 
   * Use for one-off spacing adjustments or special cases.
   * Avoid overriding width/padding as it breaks consistency.
   * 
   * @example
   * className="mb-8"
   */
  className?: string;
}

/**
 * Container Component
 * 
 * Renders a centered container with max-width constraints and horizontal padding.
 * 
 * @param props - ContainerProps
 * @returns Rendered container div element
 */
export function Container({ children, width = 'default', className = '' }: ContainerProps) {
  /**
   * Width constraint classes mapped to Tailwind utilities
   * 
   * **Tailwind breakpoints:**
   * - max-w-7xl = 1280px (80rem)
   * - max-w-[90rem] = 1440px (90rem)
   * - max-w-none = no constraint
   * 
   * **Responsive behavior:**
   * All widths include px-4 (16px horizontal padding) to prevent
   * content from touching screen edges on mobile devices.
   */
  const widthClasses = {
    default: 'max-w-7xl',  // contentSize in theme.json (1280px)
    wide: 'max-w-[90rem]', // wideSize in theme.json (1440px)
    full: 'max-w-none'     // full bleed, no constraints
  };

  // Base classes: centered, full-width, horizontal padding, max-width constraint
  const baseClasses = `mx-auto w-full px-4 ${widthClasses[width]}`;
  const combinedClassName = `${baseClasses} ${className}`;

  return (
    <div className={combinedClassName}>
      {children}
    </div>
  );
}