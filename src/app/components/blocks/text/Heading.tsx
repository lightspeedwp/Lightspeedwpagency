/**
 * Heading Block
 * 
 * WordPress core block: core/heading
 * 
 * @see https://wordpress.org/blocks/heading
 */

import React from 'react';
import '@/styles/blocks/text/heading.css';

export interface HeadingProps {
  /** The heading level (1-6) */
  level: 1 | 2 | 3 | 4 | 5 | 6;
  /** The content of the heading */
  children: React.ReactNode;
  /** Text alignment */
  align?: 'left' | 'center' | 'right';
  /** Additional CSS classes */
  className?: string;
  /** HTML ID */
  id?: string;
}

export function Heading({ 
  level, 
  children, 
  align, 
  className = '', 
  id 
}: HeadingProps) {
  const Tag = `h${level}` as keyof JSX.IntrinsicElements;
  
  const alignClass = align ? `has-text-align-${align}` : '';
  
  return (
    <Tag 
      id={id}
      className={`wp-block-heading ${alignClass} ${className}`}
    >
      {children}
    </Tag>
  );
}
