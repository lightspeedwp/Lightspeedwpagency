/**
 * Logo Grid Pattern
 * 
 * WordPress pattern: lsx-design/content/logo-grid
 * 
 * Displays a grid of client logos, partner badges, or technology icons.
 * Commonly used for social proof, partnerships, and tech stack showcases.
 * 
 * **Usage:**
 * ```tsx
 * <LogoGrid
 *   logos={[
 *     { name: 'Company A', image: '/logos/company-a.png' },
 *     { name: 'Company B', image: '/logos/company-b.png' }
 *   ]}
 *   columns={6}
 *   grayscale
 * />
 * ```
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
  /** Logo opacity (0-1) */
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
  // Grid template based on columns with responsive breakpoints
  const gridStyles = {
    2: { gridTemplateColumns: 'repeat(1, 1fr)' },
    3: { gridTemplateColumns: 'repeat(2, 1fr)' },
    4: { gridTemplateColumns: 'repeat(2, 1fr)' },
    5: { gridTemplateColumns: 'repeat(2, 1fr)' },
    6: { gridTemplateColumns: 'repeat(2, 1fr)' }
  }[columns];

  // Max width class
  const maxWidthClass = maxWidth !== 'none' ? `wp-max-w-${maxWidth}` : '';

  return (
    <div className={maxWidthClass}>
      <div
        style={{
          display: 'grid',
          ...gridStyles,
          gap
        }}
      >
        {logos.map((logo, index) => {
          const content = (
            <div
              style={{
                ...(variant === 'cards' ? {
                  padding: 'var(--spacing-6)',
                  backgroundColor: 'var(--card)',
                  borderRadius: 'var(--radius-lg)',
                  border: '1px solid var(--border-soft)'
                } : variant === 'bordered' ? {
                  padding: 'var(--spacing-4)',
                  borderRadius: 'var(--radius)',
                  border: '1px solid var(--border-soft)'
                } : {
                  padding: 'var(--spacing-4)'
                }),
                display: 'flex',
                alignItems: 'center',
                justifyContent: align,
                transition: 'all 0.3s ease',
                cursor: logo.link ? 'pointer' : 'default'
              }}
              onMouseEnter={(e) => {
                if (grayscale && e.currentTarget.querySelector('img')) {
                  const img = e.currentTarget.querySelector('img') as HTMLImageElement;
                  img.style.filter = 'grayscale(0%)';
                  img.style.opacity = '1';
                }
                if (variant === 'cards') {
                  e.currentTarget.style.transform = 'translateY(-4px)';
                  e.currentTarget.style.boxShadow = '0 8px 24px rgba(0, 0, 0, 0.08)';
                }
              }}
              onMouseLeave={(e) => {
                if (grayscale && e.currentTarget.querySelector('img')) {
                  const img = e.currentTarget.querySelector('img') as HTMLImageElement;
                  img.style.filter = 'grayscale(100%)';
                  img.style.opacity = opacity.toString();
                }
                if (variant === 'cards') {
                  e.currentTarget.style.transform = 'translateY(0)';
                  e.currentTarget.style.boxShadow = 'none';
                }
              }}
            >
              {logo.icon ? (
                // Render icon (for tech stack)
                <div
                  style={{
                    width: '100%',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: align,
                    color: 'var(--muted-foreground)'
                  }}
                >
                  {logo.icon}
                </div>
              ) : (logo.image || logo.src) ? (
                // Render image logo
                <img
                  src={logo.image || logo.src}
                  alt={logo.alt || logo.name || 'Logo'}
                  style={{
                    maxWidth: '100%',
                    maxHeight: variant === 'cards' ? '60px' : '48px',
                    width: 'auto',
                    height: 'auto',
                    objectFit: 'contain',
                    filter: grayscale ? 'grayscale(100%)' : 'none',
                    opacity: grayscale ? opacity : 1,
                    transition: 'all 0.3s ease'
                  }}
                />
              ) : (
                // Fallback to text
                <span
                  style={{
                    fontFamily: 'var(--font-primary)',
                    fontSize: 'var(--text-sm)',
                    fontWeight: 'var(--font-weight-semibold)',
                    color: 'var(--muted-foreground)',
                    textAlign: align
                  }}
                >
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
              style={{ textDecoration: 'none' }}
              aria-label={`Visit ${logo.name}`}
            >
              {content}
            </a>
          ) : (
            <div key={index}>{content}</div>
          );
        })}
      </div>
    </div>
  );
}