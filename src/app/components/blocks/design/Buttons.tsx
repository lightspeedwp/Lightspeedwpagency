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
  const orientationClass = orientation === 'horizontal' 
    ? 'flex-row flex-wrap' 
    : 'flex-col';
  
  const alignmentClass = {
    'start': 'justify-start',
    'center': 'justify-center',
    'end': 'justify-end'
  }[align];

  return (
    <div 
      className={`flex ${orientationClass} ${alignmentClass} gap-4 ${className}`}
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
  
  // Micro-interactions: subtle lift on hover (2px) with enhanced shadow
  const { hoverLift } = useMicroInteractions({ 
    scaleOnHover: 1.01, 
    duration: 150 
  });
  const liftProps = disabled ? {} : hoverLift(2);
  
  // Size styles using CSS variables
  // - sm: 14px font, 44px height (WCAG AAA compliant)
  // - md: 16px font, 48px height (WCAG AAA compliant) — DEFAULT
  // - lg: 18px font, 56px height (exceeds WCAG AAA)
  const sizeStyles = {
    sm: {
      padding: '10px 20px',               // 44px height
      fontSize: 'var(--text-small)',      // 14px
      minHeight: '44px',
      borderRadius: 'var(--radius)'       // 4px
    },
    md: {
      padding: '12px 24px',               // 48px height
      fontSize: 'var(--text-base)',       // 16px
      minHeight: '48px',
      borderRadius: 'var(--radius)'       // 4px
    },
    lg: {
      padding: '16px 32px',               // 56px height
      fontSize: 'var(--text-lg)',         // 18px
      minHeight: '56px',
      borderRadius: 'var(--radius-lg)'    // 8px
    }
  };

  // Variant styles using CSS variables
  const variantStyles = {
    default: {
      backgroundColor: 'var(--primary)',
      color: 'var(--primary-foreground)',
      border: 'none'
    },
    primary: {
      backgroundColor: 'var(--primary)',
      color: 'var(--primary-foreground)',
      border: 'none'
    },
    secondary: {
      backgroundColor: 'var(--secondary)',
      color: 'var(--secondary-foreground)',
      border: 'none'
    },
    outline: {
      backgroundColor: 'transparent',
      color: 'var(--foreground)',
      border: '1px solid var(--border)'
    },
    cta: {
      backgroundImage: 'linear-gradient(to right, var(--primary), var(--secondary))',
      color: 'var(--primary-foreground)',
      border: 'none'
    }
  };

  const baseStyles = {
    display: 'inline-flex',
    alignItems: 'center',
    justifyContent: 'center',
    gap: '8px',
    fontFamily: 'Lexend, sans-serif',
    fontWeight: 'var(--font-weight-medium)',  // 500
    textDecoration: 'none',
    cursor: disabled ? 'not-allowed' : 'pointer',
    opacity: disabled ? 0.5 : 1,
    whiteSpace: 'nowrap' as const,
    lineHeight: 'var(--line-height-normal)',  // 1.5
    ...sizeStyles[size],
    ...variantStyles[variant],
    ...(liftProps.style || {})  // Merge micro-interaction styles
  };

  const commonProps = {
    className: `button-block ${className}`,
    style: baseStyles,
    'aria-label': ariaLabel,
    'aria-disabled': disabled,
    ...liftProps  // Merge hover event handlers
  };

  const content = (
    <>
      {icon && <span className="button-icon">{icon}</span>}
      <span>{children}</span>
    </>
  );

  if (href && !disabled) {
    return (
      <a
        {...commonProps}
        href={href}
        onClick={onClick}
        target={target}
        rel={target === '_blank' ? 'noopener noreferrer' : rel}
      >
        {content}
      </a>
    );
  }

  if (page && !disabled) {
    return (
      <button
        {...commonProps}
        onClick={e => {
          if (onClick) onClick(e);
          navigateTo(page);
        }}
        type="button"
      >
        {content}
      </button>
    );
  }

  return (
    <button
      {...commonProps}
      onClick={disabled ? undefined : onClick}
      disabled={disabled}
      type="button"
    >
      {content}
    </button>
  );
}

// Export both components
export { ButtonBlock as Button };