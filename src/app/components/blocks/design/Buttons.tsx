/**
 * Buttons Block Component
 * 
 * WordPress Block: core/buttons
 * Category: Design
 * 
 * Container component that groups one or more Button blocks with consistent spacing.
 * Supports horizontal and vertical orientation.
 * 
 * Design System Requirements:
 * - Typography: Uses CSS variables (--text-base) with Lexend font
 * - Colors: Uses semantic color tokens (--primary, --secondary, etc.)
 * - Spacing: Uses Tailwind gap classes for consistent spacing
 * - Border Radius: Uses CSS variable (--radius)
 * - Touch Targets: Minimum 44×44px for WCAG AAA
 * 
 * @see /guidelines/blocks/design/buttons.md
 */

import React from 'react';
import { useNavigation } from '../../../contexts/NavigationContext';
import { useMicroInteractions } from '../../../hooks/useMicroInteractions';

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
 * 
 * @example
 * <Buttons orientation="horizontal" align="center">
 *   <Button variant="primary" href="/signup">Get Started</Button>
 *   <Button variant="secondary" href="/learn-more">Learn More</Button>
 * </Buttons>
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
 * 
 * @example
 * <Button variant="primary" href="/signup">Get Started</Button>
 * <Button variant="outline" icon={<ArrowRight />} href="/learn">Learn More</Button>
 * <Button variant="cta" href="/special-offer">Limited Time Offer</Button>
 */
export function ButtonBlock({ 
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
  const { navigateTo } = useNavigation();
  const [isHovered, setIsHovered] = React.useState(false);
  
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
    className: 'wp-block-button__link',
    'aria-label': ariaLabel,
    'aria-disabled': disabled,
    style: disabled ? { opacity: 0.5, cursor: 'not-allowed' } as React.CSSProperties : undefined
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

  // Handle internal navigation
  if (page && !disabled) {
    return (
      <div className={wrapperClasses}>
        <button
          {...commonProps}
          onClick={e => {
            if (onClick) onClick(e);
            navigateTo(page);
          }}
          onMouseEnter={() => setIsHovered(true)}
          onMouseLeave={() => setIsHovered(false)}
          type="button"
          style={{
            ...commonProps.style,
            color: isHovered ? 'var(--primary-foreground)' : 'var(--foreground)',
            border: '1px solid var(--primary)',
            backgroundColor: isHovered ? 'var(--primary)' : 'var(--background)',
            transition: 'all 0.3s ease',
            fontFamily: 'var(--font-primary)'
          }}
        >
          {content}
        </button>
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

// Export both components
export { ButtonBlock as Button };