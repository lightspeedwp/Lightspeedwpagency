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
    1: 'text-h1',
    2: 'text-h2',
    3: 'text-h3',
    4: 'text-h4',
    5: 'text-h5',
    6: 'text-h6',
  };

  // Font Weight Classes (Standardized to Medium 500)
  const weightClasses = {
    1: 'font-medium',
    2: 'font-medium',
    3: 'font-medium',
    4: 'font-medium',
    5: 'font-medium',
    6: 'font-medium',
  };

  // Line Height Classes
  const leadingClasses = {
    1: 'leading-tight',  // 1.1
    2: 'leading-snug',   // 1.25
    3: 'leading-snug',   // 1.25
    4: 'leading-normal', // 1.5
    5: 'leading-normal', // 1.5
    6: 'leading-normal', // 1.5
  };

  // Letter Spacing Classes
  const trackingClasses = {
    1: 'tracking-tight',  // -0.025em
    2: 'tracking-tight',  // -0.025em
    3: 'tracking-normal', // 0
    4: 'tracking-normal', // 0
    5: 'tracking-normal', // 0
    6: 'tracking-wide',   // 0.025em (Labels)
  };
  
  // Construct className
  // Added font-primary explicitly, though it should be inherited from body/theme
  // Added color-foreground explicitly
  const combinedClassName = `font-primary ${sizeClasses[level]} ${weightClasses[level]} ${leadingClasses[level]} ${trackingClasses[level]} text-foreground ${className}`;

  return (
    <Tag 
      id={id}
      className={combinedClassName}
    >
      {children}
    </Tag>
  );
}
