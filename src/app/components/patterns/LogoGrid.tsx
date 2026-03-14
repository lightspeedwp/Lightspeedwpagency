/**
 * Logo Grid Pattern Component
 * 
 * WordPress pattern: lsx-design/content/logo-grid
 * 
 * Displays a grid of client logos, partner badges, or technology icons.
 * 
 * @see {@link /guidelines/patterns/LogoGrid.md}
 */



export interface Logo {
  /** Company/product name */
  name?: string;
  /** Alternative text */
  alt?: string;
  /** Logo image URL or path */
  image?: string;
  /** Alternative: src (for compatibility with existing Logo type) */
  src?: string;
  /** Optional icon component (for tech stack) */
  icon?: React.ReactNode;
  /** Optional link URL */
  link?: string;
  /** Alternative: href (for compatibility with existing Logo type) */
  href?: string;
  /** Optional ID */
  id?: string;
}

export interface LogoGridProps {
  /** Array of logos */
  logos: Logo[];
  /** Number of columns (2-6, default: 6) */
  columns?: 2 | 3 | 4 | 5 | 6;
  /** Visual variant */
  variant?: 'default' | 'cards' | 'bordered';
  /** Apply grayscale filter and show color on hover */
  grayscale?: boolean;
  /** Logo opacity (0-1) - handled via CSS class mostly now */
  opacity?: number; 
  /** Max width constraint */
  maxWidth?: '4xl' | '5xl' | '6xl' | 'none';
  /** Custom gap size */
  gap?: 'sm' | 'md' | 'lg' | 'xl';
  /** Align logos */
  align?: 'center' | 'left';
}

export function LogoGrid({
  logos,
  columns = 6,
  variant = 'default',
  grayscale = true,
  opacity = 0.6,
  maxWidth = '6xl',
  gap = 'lg',
  align = 'center'
}: LogoGridProps) {
  // Map gap prop to WP utility classes
  const gapClass = {
    sm: 'wp-gap-4',
    md: 'wp-gap-6',
    lg: 'wp-gap-8',
    xl: 'wp-gap-12'
  }[gap] || 'wp-gap-8';

  // Grid classes
  const gridClasses = [
    'logo-grid',
    `logo-grid--${columns}-cols`,
    gapClass
  ].filter(Boolean).join(' ');

  // Max width class
  const maxWidthClass = maxWidth !== 'none' ? `wp-max-w-${maxWidth} wp-mx-auto` : '';

  return (
    <div className={maxWidthClass}>
      <div
        className={gridClasses}
      >
        {logos.map((logo, index) => {
          // Logo Item classes
          const itemClasses = [
            'logo-item',
            `logo-item--${variant}`,
            `logo-item--${align}`,
            grayscale && 'logo-item--grayscale',
            logo.link && 'logo-item--clickable'
          ].filter(Boolean).join(' ');

          const content = (
            <div className={itemClasses}>
              {logo.icon ? (
                // Render icon (for tech stack)
                <div className={`logo-item__icon-wrapper logo-item__icon-wrapper--${align}`}>
                  {logo.icon}
                </div>
              ) : (logo.image || logo.src) ? (
                // Render image logo
                <img
                  src={logo.image || logo.src}
                  alt={logo.alt || logo.name || 'Logo'}
                  className="logo-item__image"
                />
              ) : (
                // Fallback to text
                <span className={`logo-item__text wp-text-${align}`}>
                  {logo.name || logo.alt}
                </span>
              )}
            </div>
          );

          // Wrap in link if provided
          return logo.link ? (
            <a
              key={index}
              href={logo.link}
              target="_blank"
              rel="noopener noreferrer"
              className="logo-item__link"
              aria-label={`Visit ${logo.name}`}
            >
              {content}
            </a>
          ) : (
            <div key={index} className="wp-w-full">{content}</div>
          );
        })}
      </div>
    </div>
  );
}
