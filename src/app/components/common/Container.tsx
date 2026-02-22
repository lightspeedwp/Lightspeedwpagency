/**
 * Container Component
 * 
 * WordPress concept: Core Group block with constrained width
 * Pattern: `core/group` with layout constraints
 * 
 * A layout container that enforces consistent max-width (1440px) and fluid padding
 * across the site.
 */

import { ReactNode } from 'react';

interface ContainerProps {
  children: ReactNode;
  /**
   * Width variant - maintained for API compatibility but currently enforces 1440px max-width
   * per design system requirements.
   */
  width?: 'default' | 'wide' | 'full';
  className?: string;
  style?: React.CSSProperties;
}

export function Container({ 
  children, 
  width = 'wide', 
  className = '',
  style
}: ContainerProps) {
  return (
    <div 
      className={`wp-block-group wp-block-container ${className}`} 
      style={{
        width: '100%',
        ...style
      }}
    >
      <div className="wp-container-inner">
        {children}
      </div>
    </div>
  );
}