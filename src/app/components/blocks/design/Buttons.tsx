/**
 * Buttons Block Component
 * 
 * WordPress Block: core/buttons
 * Category: Design
 * 
 * Refactored to use LightSpeed Presets and CSS variables.
 * 
 * @see /src/styles/blocks/design/button.css
 */

import React from 'react';
import { Link } from 'react-router';
import { slugToPath } from '@/app/utils/route-map';

export interface ButtonsProps {
  /** Layout orientation */
  orientation?: 'horizontal' | 'vertical';
  /** Alignment of button group */
  align?: 'start' | 'center' | 'end';
  /** Additional CSS classes */
  className?: string;
  /** Child Button components */
  children: React.ReactNode;
}

/**
 * Buttons Block - Container for multiple Button components
 */
export function Buttons({ 
  orientation = 'horizontal', 
  align = 'start',
  className = '',
  children 
}: ButtonsProps) {
  // WordPress block classes for orientation
  const orientationClass = orientation === 'vertical' 
    ? 'is-vertical' 
    : '';
  
  // WordPress block classes for alignment
  const alignmentClass = {
    'start': 'is-content-justification-left',
    'center': 'is-content-justification-center',
    'end': 'is-content-justification-right'
  }[align];

  return (
    <div 
      className={`wp-block-buttons ${orientationClass} ${alignmentClass} ${className}`.trim()}
      role="group"
      aria-label="Action buttons"
    >
      {children}
    </div>
  );
}

export interface ButtonProps {
  /** Visual style variant */
  variant?: 'default' | 'primary' | 'secondary' | 'outline' | 'cta';
  /** Button size */
  size?: 'sm' | 'md' | 'lg';
  /** URL to link to (external) */
  href?: string;
  /** Page slug for internal navigation */
  page?: string;
  /** Button text */
  children: React.ReactNode;
  /** Optional icon element */
  icon?: React.ReactNode;
  /** Disabled state */
  disabled?: boolean;
  /** Click handler */
  onClick?: (e: React.MouseEvent<HTMLElement>) => void;
  /** Additional CSS classes */
  className?: string;
  /** Accessible label (overrides children for screen readers) */
  'aria-label'?: string;
  /** Opens link in new tab */
  target?: '_blank' | '_self';
  /** Relationship for external links */
  rel?: string;
}

/**
 * Button Component - Individual button within Buttons block
 */
export function Button({ 
  variant = 'default',
  size = 'md',
  href,
  page,
  children,
  icon,
  disabled = false,
  onClick,
  className = '',
  'aria-label': ariaLabel,
  target,
  rel
}: ButtonProps) {
  // Build WordPress block classes
  const sizeClass = size === 'sm' ? 'is-style-small' : size === 'lg' ? 'is-style-large' : '';
  
  const variantClass = {
    'default': '',
    'primary': '',
    'secondary': 'is-style-secondary',
    'outline': 'is-style-outline',
    'cta': 'is-style-cta'
  }[variant];
  
  // WordPress button wrapper classes
  const wrapperClasses = `wp-block-button ${sizeClass} ${variantClass} ${className}`.trim();
  
  const commonProps = {
    className: `wp-block-button__link btn-ripple ${variant === 'primary' || variant === 'cta' ? 'hover-lift-sm' : ''}`.trim(),
    'aria-label': ariaLabel,
    'aria-disabled': disabled,
  };

  const content = (
    <>
      {icon && <span className="button-icon">{icon}</span>}
      <span>{children}</span>
    </>
  );

  // Handle external links
  if (href && !disabled) {
    return (
      <div className={wrapperClasses}>
        <a
          {...commonProps}
          href={href}
          onClick={onClick}
          target={target}
          rel={target === '_blank' ? 'noopener noreferrer' : rel}
        >
          {content}
        </a>
      </div>
    );
  }

  // Handle internal navigation via declarative <Link>
  if (page && !disabled) {
    return (
      <div className={wrapperClasses}>
        <Link
          to={slugToPath(page)}
          className={commonProps.className}
          aria-label={ariaLabel}
          onClick={onClick as any}
        >
          {content}
        </Link>
      </div>
    );
  }

  // Handle regular buttons
  return (
    <div className={wrapperClasses}>
      <button
        {...commonProps}
        onClick={disabled ? undefined : onClick}
        disabled={disabled}
        type="button"
      >
        {content}
      </button>
    </div>
  );
}