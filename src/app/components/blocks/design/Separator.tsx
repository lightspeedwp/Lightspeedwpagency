/**
 * Separator Block Component
 * 
 * WordPress Block: core/separator
 * Style: .wp-block-separator
 */

import React from 'react';
import '@/styles/blocks/design/separator.css';

export interface SeparatorProps extends React.HTMLAttributes<HTMLHRElement> {
  orientation?: 'horizontal' | 'vertical';
  variant?: 'default' | 'wide' | 'dots';
}

export function Separator({ 
  className = '', 
  orientation = 'horizontal',
  variant = 'default',
  ...props 
}: SeparatorProps) {
  const variantClass = variant !== 'default' ? `is-style-${variant}` : '';
  
  return (
    <hr 
      className={`wp-block-separator ${variantClass} ${className}`.trim()} 
      aria-orientation={orientation}
      {...props} 
    />
  );
}
