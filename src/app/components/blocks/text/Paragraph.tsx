/**
 * Paragraph Block Component
 * 
 * WordPress Block: core/paragraph
 * Category: Text
 * 
 * Standard paragraph component using design system typography.
 */

import React from 'react';
import '@/styles/blocks/text/paragraph.css';

export interface ParagraphProps {
  /** Paragraph content */
  children: React.ReactNode;
  
  /** 
   * Font size variant
   * - default: standard body text (1rem)
   * - lead: larger intro text (1.25rem)
   * - small: smaller metadata text (0.875rem)
   * - tiny: legal/footnote text (0.75rem)
   */
  size?: 'default' | 'lead' | 'large' | 'small' | 'tiny';
  
  /** Text alignment */
  align?: 'left' | 'center' | 'right' | 'justify';
  
  /** Additional CSS classes */
  className?: string;
  
  /** Optional styling (use sparingly) */
  style?: React.CSSProperties;
}

export function Paragraph({
  children,
  size = 'default',
  align = 'left',
  className = '',
  style
}: ParagraphProps) {
  
  // Size classes from utilities.css
  const sizeClasses = {
    default: 'text-base', // 16px
    lead: 'text-lead',    // 20px
    large: 'text-lg',     // 18px
    small: 'text-small',  // 14px
    tiny: 'text-tiny',    // 12px
  };

  // Alignment classes from utilities.css
  const alignClasses = {
    left: 'wp-text-left',
    center: 'wp-text-center',
    right: 'wp-text-right',
    justify: 'wp-text-justify',
  };

  // Build class string
  // .wp-block-paragraph is the BEM block class
  const combinedClassName = `wp-block-paragraph ${sizeClasses[size]} ${alignClasses[align]} ${className}`;

  return (
    <p className={combinedClassName} style={style}>
      {children}
    </p>
  );
}
