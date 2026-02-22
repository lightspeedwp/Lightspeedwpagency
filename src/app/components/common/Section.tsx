/**
 * Section Component
 * 
 * WordPress concept: Core Group block with semantic <section> wrapper.
 * Fluid vertical padding is applied via CSS (.lsx-section) using
 * --section-padding-y (48px → 80px) from theme-base.css.
 * Horizontal padding comes from child Container component.
 * 
 * Pattern: `core/group` with spacing presets
 */

import { ReactNode } from 'react';

interface SectionProps {
  children: ReactNode;
  
  /**
   * Vertical spacing (padding top/bottom)
   * - 'none': No padding (component controls its own padding)
   * - 'xs': Compact spacing (--section-padding-y-sm, 8px → 12px) — breadcrumbs, pagination
   * - 'sm' | 'md' | 'lg' | 'xl': Standard spacing (--section-padding-y, 48px → 80px)
   */
  spacing?: 'none' | 'xs' | 'sm' | 'md' | 'lg' | 'xl';
  
  /**
   * Background color variant
   * Uses semantic CSS variables.
   */
  background?: 'default' | 'card' | 'muted';
  
  /**
   * WordPress section style variation.
   * Applies a complete style preset (.is-style-*).
   */
  sectionStyle?: 
    | 'default' 
    | 'muted' 
    | 'dark' 
    | 'primary'
    | 'accent'
    | 'gradient-primary'
    | 'gradient-dark'
    | 'gradient-subtle';
  
  className?: string;
  id?: string;
  style?: React.CSSProperties;
}

export function Section({ 
  children, 
  spacing = 'md', 
  background = 'default',
  sectionStyle,
  className = '',
  id,
  style,
  ...props
}: SectionProps) {

  // Map background to style values
  const backgroundStyles = {
    'default': 'var(--background)',
    'card': 'var(--card)',
    'muted': 'var(--muted)',
  };
  
  // Map standard style names to CSS classes
  const styleClass = sectionStyle ? `is-style-${sectionStyle}` : '';
  
  // Compact modifier for xs spacing
  const compactClass = spacing === 'xs' ? 'lsx-section--compact' 
    : spacing === 'none' ? 'lsx-section--none' 
    : '';
  
  // Compose final class string — NO wp-block-group (avoids default gap/padding)
  const combinedClassName = [
    'lsx-section',
    compactClass,
    styleClass,
    className
  ].filter(Boolean).join(' ');

  const finalStyle = {
    ...style,
    backgroundColor: !sectionStyle ? backgroundStyles[background] : undefined
  };

  return (
    <section 
      id={id}
      className={combinedClassName}
      style={finalStyle}
      {...props}
    >
      {children}
    </section>
  );
}