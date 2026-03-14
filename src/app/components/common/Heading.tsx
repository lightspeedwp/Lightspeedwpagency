/**
 * Heading Component
 * 
 * WordPress concept: Core Heading block
 * Pattern: `core/heading` with level presets
 */

import { ReactNode } from 'react';

interface HeadingProps {
  /**
   * Semantic heading level (h1 through h6)
   */
  level: 1 | 2 | 3 | 4 | 5 | 6;
  
  children: ReactNode;
  
  className?: string;
  
  id?: string;
}

export function Heading({ level, children, className = '', id }: HeadingProps) {
  // Create the correct HTML heading tag based on level
  const Tag = `h${level}` as keyof JSX.IntrinsicElements;
  
  // Font Size Classes (mapped to utilities.css)
  const sizeClasses = {
    1: 'wp-text-h1',
    2: 'wp-text-h2',
    3: 'wp-text-h3',
    4: 'wp-text-h4',
    5: 'wp-text-h5',
    6: 'wp-text-h6',
  };

  // Font Weight Classes (Standardized to Medium 500)
  const weightClasses = {
    1: 'wp-font-medium',
    2: 'wp-font-medium',
    3: 'wp-font-medium',
    4: 'wp-font-medium',
    5: 'wp-font-medium',
    6: 'wp-font-medium',
  };

  // Line Height Classes
  const leadingClasses = {
    1: 'wp-leading-tight',  // 1.1
    2: 'wp-leading-snug',   // 1.25
    3: 'wp-leading-snug',   // 1.25
    4: 'wp-leading-normal', // 1.5
    5: 'wp-leading-normal', // 1.5
    6: 'wp-leading-normal', // 1.5
  };

  // Letter Spacing Classes
  const trackingClasses = {
    1: 'wp-tracking-tight',  // -0.025em
    2: 'wp-tracking-tight',  // -0.025em
    3: 'wp-tracking-normal', // 0
    4: 'wp-tracking-normal', // 0
    5: 'wp-tracking-normal', // 0
    6: 'wp-tracking-wide',   // 0.025em (Labels)
  };
  
  // Construct className
  // Added font-primary explicitly, though it should be inherited from body/theme
  // Added color-foreground explicitly
  const combinedClassName = `wp-font-primary ${sizeClasses[level]} ${weightClasses[level]} ${leadingClasses[level]} ${trackingClasses[level]} wp-text-foreground ${className}`.trim();

  return (
    <Tag 
      id={id}
      className={combinedClassName}
    >
      {children}
    </Tag>
  );
}
