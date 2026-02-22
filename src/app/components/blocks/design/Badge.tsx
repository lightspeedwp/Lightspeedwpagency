/**
 * Badge Block Component
 * 
 * WordPress Block: core/group (with badge variation) or custom
 * Style: .wp-block-badge
 */

import React from 'react';

export interface BadgeProps extends React.HTMLAttributes<HTMLSpanElement> {
  variant?: 'default' | 'primary' | 'secondary' | 'outline' | 'success' | 'warning' | 'error';
  size?: 'sm' | 'md' | 'lg';
}

export function Badge({ 
  className = '', 
  variant = 'default', 
  size = 'md',
  ...props 
}: BadgeProps) {
  const variantClass = variant !== 'default' ? `is-style-${variant}` : '';
  const sizeClass = size === 'sm' ? 'has-small-font-size' : size === 'lg' ? 'has-large-font-size' : '';
  
  return (
    <span 
      className={`wp-block-badge ${variantClass} ${sizeClass} ${className}`.trim()} 
      {...props} 
    />
  );
}
