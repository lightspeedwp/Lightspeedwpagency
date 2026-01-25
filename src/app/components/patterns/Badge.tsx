/**
 * Badge Pattern
 * 
 * WordPress pattern: lsx-design/content/badge
 * 
 * Displays labels, tags, categories, and status indicators.
 * Commonly used for blog categories, post tags, status labels, and feature flags.
 * 
 * **Usage:**
 * ```tsx
 * <Badge variant="primary" size="md">
 *   WordPress
 * </Badge>
 * 
 * <Badge variant="success" icon={CheckCircle}>
 *   Published
 * </Badge>
 * 
 * <BadgeGroup
 *   badges={['WordPress', 'Design', 'Development']}
 *   variant="muted"
 *   clickable
 *   onClick={(badge) => console.log(badge)}
 * />
 * ```
 * 
 * @see {@link /guidelines/patterns/Badge.md}
 */

export type BadgeVariant = 'primary' | 'secondary' | 'success' | 'warning' | 'danger' | 'muted' | 'outline';
export type BadgeSize = 'sm' | 'md' | 'lg';

export interface BadgeProps {
  /** Badge text/label */
  children: React.ReactNode;
  /** Visual variant */
  variant?: BadgeVariant;
  /** Size */
  size?: BadgeSize;
  /** Optional icon */
  icon?: React.ComponentType<{ size?: number; style?: React.CSSProperties }>;
  /** Clickable badge */
  clickable?: boolean;
  /** Click handler */
  onClick?: () => void;
  /** Optional href for link badges */
  href?: string;
  /** Removable badge (shows X icon) */
  removable?: boolean;
  /** Remove handler */
  onRemove?: () => void;
  /** Pill shape (fully rounded) */
  pill?: boolean;
  /** Custom className */
  className?: string;
}

export interface BadgeGroupProps {
  /** Array of badge labels */
  badges: string[];
  /** Visual variant for all badges */
  variant?: BadgeVariant;
  /** Size for all badges */
  size?: BadgeSize;
  /** Make all badges clickable */
  clickable?: boolean;
  /** Click handler (receives badge label) */
  onClick?: (badge: string) => void;
  /** Gap between badges */
  gap?: string;
  /** Max number of badges to show (rest collapsed) */
  maxVisible?: number;
  /** Show "+N more" indicator */
  showMore?: boolean;
}

export function Badge({
  children,
  variant = 'muted',
  size = 'md',
  icon: Icon,
  clickable = false,
  onClick,
  href,
  removable = false,
  onRemove,
  pill = true,
  className = ''
}: BadgeProps) {
  // Size styles
  const sizeStyles = {
    sm: {
      padding: '4px 10px',
      fontSize: 'var(--text-xs)',
      iconSize: 12
    },
    md: {
      padding: '6px 12px',
      fontSize: 'var(--text-sm)',
      iconSize: 14
    },
    lg: {
      padding: '8px 16px',
      fontSize: 'var(--text-base)',
      iconSize: 16
    }
  };

  // Variant styles
  const variantStyles = {
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
    success: {
      backgroundColor: 'var(--success)',
      color: 'var(--success-foreground)',
      border: 'none'
    },
    warning: {
      backgroundColor: 'var(--warning)',
      color: 'var(--warning-foreground)',
      border: 'none'
    },
    danger: {
      backgroundColor: 'var(--destructive)',
      color: 'var(--destructive-foreground)',
      border: 'none'
    },
    muted: {
      backgroundColor: 'var(--muted)',
      color: 'var(--muted-foreground)',
      border: 'none'
    },
    outline: {
      backgroundColor: 'transparent',
      color: 'var(--foreground)',
      border: '1px solid var(--border)'
    }
  };

  // Soft variant styles (for hover on clickable)
  const softVariantStyles = {
    primary: 'var(--primary-soft)',
    secondary: 'var(--secondary-soft)',
    success: 'var(--success-soft)',
    warning: 'var(--warning-soft)',
    danger: 'var(--destructive-soft)',
    muted: 'var(--muted)',
    outline: 'var(--muted)'
  };

  const baseStyles = {
    display: 'inline-flex',
    alignItems: 'center',
    gap: 'var(--spacing-2)',
    fontFamily: 'var(--font-secondary)',
    fontWeight: 'var(--font-weight-semibold)',
    borderRadius: pill ? 'var(--radius-full)' : 'var(--radius)',
    textTransform: 'uppercase' as const,
    letterSpacing: '0.05em',
    whiteSpace: 'nowrap' as const,
    transition: 'all 0.2s ease',
    ...sizeStyles[size],
    ...variantStyles[variant]
  };

  const content = (
    <>
      {Icon && <Icon size={sizeStyles[size].iconSize} />}
      {children}
      {removable && (
        <button
          onClick={(e) => {
            e.stopPropagation();
            onRemove?.();
          }}
          style={{
            background: 'none',
            border: 'none',
            padding: 0,
            marginLeft: 'var(--spacing-1)',
            cursor: 'pointer',
            display: 'flex',
            alignItems: 'center',
            color: 'inherit',
            opacity: 0.7,
            transition: 'opacity 0.2s ease'
          }}
          onMouseEnter={(e) => {
            e.currentTarget.style.opacity = '1';
          }}
          onMouseLeave={(e) => {
            e.currentTarget.style.opacity = '0.7';
          }}
          aria-label="Remove"
        >
          <svg width={sizeStyles[size].iconSize} height={sizeStyles[size].iconSize} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
            <path d="M18 6L6 18M6 6l12 12" />
          </svg>
        </button>
      )}
    </>
  );

  // Link badge
  if (href) {
    return (
      <a
        href={href}
        className={className}
        style={{
          ...baseStyles,
          textDecoration: 'none',
          cursor: 'pointer'
        }}
        onMouseEnter={(e) => {
          if (variant !== 'outline') {
            e.currentTarget.style.backgroundColor = softVariantStyles[variant];
          } else {
            e.currentTarget.style.borderColor = 'var(--primary)';
            e.currentTarget.style.color = 'var(--primary)';
          }
        }}
        onMouseLeave={(e) => {
          e.currentTarget.style.backgroundColor = variantStyles[variant].backgroundColor;
          e.currentTarget.style.borderColor = variantStyles[variant].border === 'none' ? '' : 'var(--border)';
          e.currentTarget.style.color = variantStyles[variant].color;
        }}
      >
        {content}
      </a>
    );
  }

  // Button badge
  if (clickable || onClick) {
    return (
      <button
        onClick={onClick}
        className={className}
        style={{
          ...baseStyles,
          border: variantStyles[variant].border || 'none',
          cursor: 'pointer'
        }}
        onMouseEnter={(e) => {
          if (variant !== 'outline') {
            e.currentTarget.style.backgroundColor = softVariantStyles[variant];
          } else {
            e.currentTarget.style.borderColor = 'var(--primary)';
            e.currentTarget.style.color = 'var(--primary)';
          }
        }}
        onMouseLeave={(e) => {
          e.currentTarget.style.backgroundColor = variantStyles[variant].backgroundColor;
          e.currentTarget.style.borderColor = variantStyles[variant].border === 'none' ? '' : 'var(--border)';
          e.currentTarget.style.color = variantStyles[variant].color;
        }}
      >
        {content}
      </button>
    );
  }

  // Static badge
  return (
    <span className={className} style={baseStyles}>
      {content}
    </span>
  );
}

export function BadgeGroup({
  badges,
  variant = 'muted',
  size = 'md',
  clickable = false,
  onClick,
  gap = 'var(--spacing-2)',
  maxVisible,
  showMore = true
}: BadgeGroupProps) {
  const visibleBadges = maxVisible ? badges.slice(0, maxVisible) : badges;
  const hiddenCount = maxVisible ? badges.length - maxVisible : 0;

  return (
    <div
      style={{
        display: 'flex',
        flexWrap: 'wrap',
        gap,
        alignItems: 'center'
      }}
    >
      {visibleBadges.map((badge, index) => (
        <Badge
          key={index}
          variant={variant}
          size={size}
          clickable={clickable}
          onClick={() => onClick?.(badge)}
        >
          {badge}
        </Badge>
      ))}
      
      {hiddenCount > 0 && showMore && (
        <span
          style={{
            fontFamily: 'var(--font-secondary)',
            fontSize: size === 'sm' ? 'var(--text-xs)' : size === 'md' ? 'var(--text-sm)' : 'var(--text-base)',
            color: 'var(--muted-foreground)',
            fontWeight: 'var(--font-weight-medium)'
          }}
        >
          +{hiddenCount} more
        </span>
      )}
    </div>
  );
}
