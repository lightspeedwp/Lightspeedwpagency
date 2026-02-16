/**
 * Logo Grid Pattern Component
 * 
 * WordPress pattern: lsx-design/content/logo-grid
 * 
 * Displays a grid of client logos, partner badges, or technology icons.
 * 
 * @see {@link /guidelines/patterns/LogoGrid.md}
 */

import '@/styles/patterns/logo-grid.css';

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
  /** Custom gap between logos */
  gap?: string;
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
  gap = 'var(--spacing-8)',
  align = 'center'
}: LogoGridProps) {
  // Grid classes
  const gridClasses = [
    'logo-grid',
    `logo-grid--${columns}-cols`
  ].filter(Boolean).join(' ');

  // Max width class
  const maxWidthClass = maxWidth !== 'none' ? `wp-max-w-${maxWidth}` : '';

  // Container margin
  const containerStyle = {
    margin: maxWidth !== 'none' ? '0 auto' : undefined
  };

  return (
    <div className={maxWidthClass} style={containerStyle}>
      <div
        className={gridClasses}
        style={{ gap }}
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
                <span className="logo-item__text" style={{ textAlign: align }}>
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
            <div key={index} style={{ width: '100%' }}>{content}</div>
          );
        })}
      </div>
    </div>
  );
}
