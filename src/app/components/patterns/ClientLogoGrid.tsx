/**
 * Client Logo Grid Pattern
 *
 * WordPress pattern: Social proof with client/partner logos
 * Displays company logos in a responsive grid
 *
 * Features:
 * - Responsive grid (2/3/4/6 columns)
 * - Grayscale → color on hover
 * - Infinite scroll animation (optional)
 * - Logo size variants (small/medium/large)
 * - Glassmorphism background
 * - ScrollReveal animations
 *
 * Design System:
 * - 100% CSS variables
 * - WordPress utility classes
 * - BEM naming (.client-logo-grid)
 * - Dedicated CSS file
 *
 * @see /guidelines/patterns/ClientLogoGrid.md
 */

import { ScrollReveal } from '../../hooks/useScrollReveal';

export interface ClientLogo {
  id: string;
  name: string;
  logo: string;
  url?: string;
  featured?: boolean;
}

export interface ClientLogoGridProps {
  logos: ClientLogo[];
  title?: string;
  description?: string;
  columns?: 2 | 3 | 4 | 6;
  size?: 'sm' | 'md' | 'lg';
  infiniteScroll?: boolean;
  variant?: 'default' | 'glassmorphism';
}

export const ClientLogoGrid = ({
  logos,
  title = 'Trusted by industry leaders',
  description,
  columns = 4,
  size = 'md',
  infiniteScroll = false,
  variant = 'default',
}: ClientLogoGridProps) => {
  const gridClass = `client-logo-grid__grid client-logo-grid__grid--${columns}-cols`;
  const logoClass = `client-logo-grid__logo client-logo-grid__logo--${size}`;
  const containerClass = `client-logo-grid__container ${
    variant === 'glassmorphism' ? 'client-logo-grid__container--glass' : ''
  }`;

  return (
    <section className="client-logo-grid">
      <div className={containerClass}>
        {(title || description) && (
          <ScrollReveal animation="fade-up" duration={500}>
            <div className="client-logo-grid__header">
              {title && <h2 className="client-logo-grid__title">{title}</h2>}
              {description && (
                <p className="client-logo-grid__description">{description}</p>
              )}
            </div>
          </ScrollReveal>
        )}

        <div className={infiniteScroll ? 'client-logo-grid__scroll-wrapper' : ''}>
          <div className={gridClass}>
            {logos.map((logo, index) => (
              <ScrollReveal
                key={logo.id}
                animation="fade-up"
                duration={500}
                delay={index * 50}
              >
                <div
                  className={`client-logo-grid__item ${
                    logo.featured ? 'client-logo-grid__item--featured' : ''
                  }`}
                >
                  {logo.url ? (
                    <a
                      href={logo.url}
                      className="client-logo-grid__link"
                      target="_blank"
                      rel="noopener noreferrer"
                      aria-label={`Visit ${logo.name} website`}
                    >
                      <img
                        src={logo.logo}
                        alt={logo.name}
                        className={logoClass}
                        loading="lazy"
                      />
                    </a>
                  ) : (
                    <div className="client-logo-grid__link">
                      <img
                        src={logo.logo}
                        alt={logo.name}
                        className={logoClass}
                        loading="lazy"
                      />
                    </div>
                  )}
                </div>
              </ScrollReveal>
            ))}
          </div>

          {infiniteScroll && (
            <div className={`${gridClass} client-logo-grid__grid--duplicate`}>
              {logos.map((logo) => (
                <div
                  key={`${logo.id}-duplicate`}
                  className={`client-logo-grid__item ${
                    logo.featured ? 'client-logo-grid__item--featured' : ''
                  }`}
                >
                  <div className="client-logo-grid__link">
                    <img
                      src={logo.logo}
                      alt={logo.name}
                      className={logoClass}
                      loading="lazy"
                      aria-hidden="true"
                    />
                  </div>
                </div>
              ))}
            </div>
          )}
        </div>
      </div>
    </section>
  );
};
