/**
 * Services Card Pattern
 * 
 * WordPress pattern: lsx-design/content/services-card
 * 
 * Displays a service offering with icon, title, description, features list, and link.
 * Uses Group block architecture with innerBlocks for WordPress FSE compatibility.
 * 
 * Design System Requirements:
 * - Typography: Uses CSS variables (--text-h3, --text-base) with Lexend/Manrope fonts
 * - Colors: Uses semantic color tokens (--card, --foreground, --primary, etc.)
 * - Spacing: Uses Tailwind classes for consistent spacing
 * - Border Radius: Uses CSS variable (--radius-xl)
 * - Icons: Lucide React icons with design system sizing
 * 
 * WordPress Mapping:
 * - Group block (core/group) as container
 *   ├── Icon (custom block or image block)
 *   ├── Heading (core/heading innerBlock)
 *   ├── Paragraph (core/paragraph innerBlock)
 *   ├── List (core/list innerBlock)
 *   └── Button (core/button innerBlock with link style)
 * 
 * @example
 * import { ServicesCard } from '../patterns/ServicesCard';
 * import { wordpressServices } from '../../data/services';
 * 
 * <ServicesCard service={wordpressServices[0]} />
 */

import { ArrowRight, LucideIcon } from 'lucide-react';
import { useNavigation } from '../../contexts/NavigationContext';
import type { Service } from '../../data/services';

export interface ServicesCardProps {
  /** Service data object */
  service: Service;
  /** Optional custom className */
  className?: string;
  /** Optional layout variant */
  variant?: 'default' | 'featured' | 'compact';
}

/**
 * Services Card Pattern
 * 
 * Displays a service offering in a card format with WordPress block structure.
 */
export function ServicesCard({
  service,
  className = '',
  variant = 'default'
}: ServicesCardProps) {
  const { navigateTo } = useNavigation();
  const Icon = service.icon;

  const handleClick = () => {
    navigateTo(service.link.page);
  };

  const isFeatured = variant === 'featured' || service.featured;

  return (
    <article
      className={`group ${className}`}
      style={{
        backgroundColor: 'var(--card)',
        border: isFeatured 
          ? '2px solid var(--primary)' 
          : '1px solid var(--border-soft)',
        borderRadius: 'var(--radius-xl)',
        padding: '2rem',
        display: 'flex',
        flexDirection: 'column',
        gap: '1.5rem',
        transition: 'all var(--transition-base) var(--ease-in-out)',
        boxShadow: 'var(--shadow-md)',
        position: 'relative',
        overflow: 'hidden'
      }}
      onMouseEnter={(e) => {
        e.currentTarget.style.transform = 'translateY(-8px)';
        e.currentTarget.style.boxShadow = 'var(--shadow-xl)';
        e.currentTarget.style.borderColor = 'var(--primary)';
      }}
      onMouseLeave={(e) => {
        e.currentTarget.style.transform = 'translateY(0)';
        e.currentTarget.style.boxShadow = 'var(--shadow-md)';
        e.currentTarget.style.borderColor = isFeatured ? 'var(--primary)' : 'var(--border-soft)';
      }}
    >
      {/* Featured badge */}
      {isFeatured && (
        <div
          style={{
            position: 'absolute',
            top: '1rem',
            right: '1rem',
            backgroundColor: 'var(--primary)',
            color: 'var(--primary-foreground)',
            padding: '0.375rem 0.75rem',
            borderRadius: 'var(--radius)',
            fontFamily: 'Lexend, sans-serif',
            fontSize: 'var(--text-small)',
            fontWeight: 'var(--font-weight-semibold)',
            textTransform: 'uppercase' as const,
            letterSpacing: '0.05em'
          }}
        >
          Popular
        </div>
      )}

      {/* Icon innerBlock */}
      <div
        style={{
          width: '56px',
          height: '56px',
          backgroundColor: 'var(--primary)',
          color: 'var(--primary-foreground)',
          borderRadius: 'var(--radius-lg)',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          transition: 'transform var(--transition-base) var(--ease-in-out)'
        }}
        className="group-hover:scale-110"
      >
        <Icon size={32} strokeWidth={2} />
      </div>

      {/* Heading innerBlock (core/heading) */}
      <h3
        style={{
          fontFamily: 'Lexend, sans-serif',
          fontSize: 'var(--text-h3)',
          fontWeight: 'var(--font-weight-medium)',
          lineHeight: 'var(--line-height-snug)',
          letterSpacing: 'var(--letter-spacing-tight)',
          color: 'var(--foreground)',
          margin: 0
        }}
      >
        {service.title}
      </h3>

      {/* Paragraph innerBlock (core/paragraph) */}
      <p
        style={{
          fontFamily: 'Lexend, sans-serif',
          fontSize: 'var(--text-base)',
          fontWeight: 'var(--font-weight-regular)',
          lineHeight: 'var(--line-height-relaxed)',
          color: 'var(--muted-foreground)',
          margin: 0
        }}
      >
        {service.description}
      </p>

      {/* List innerBlock (core/list) */}
      <ul
        style={{
          listStyle: 'none',
          padding: 0,
          margin: 0,
          display: 'flex',
          flexDirection: 'column',
          gap: '0.75rem'
        }}
      >
        {service.features.map((feature, index) => (
          <li
            key={index}
            style={{
              display: 'flex',
              alignItems: 'flex-start',
              gap: '0.75rem',
              fontFamily: 'Lexend, sans-serif',
              fontSize: 'var(--text-base)',
              fontWeight: 'var(--font-weight-regular)',
              lineHeight: 'var(--line-height-relaxed)',
              color: 'var(--foreground)'
            }}
          >
            {/* Checkmark icon */}
            <svg
              width="20"
              height="20"
              viewBox="0 0 20 20"
              fill="none"
              style={{
                flexShrink: 0,
                marginTop: '0.125rem'
              }}
            >
              <circle
                cx="10"
                cy="10"
                r="9"
                fill="var(--primary)"
                opacity="0.1"
              />
              <path
                d="M6 10L9 13L14 7"
                stroke="var(--primary)"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>
            <span>{feature}</span>
          </li>
        ))}
      </ul>

      {/* Button innerBlock (core/button with link style) */}
      <button
        onClick={handleClick}
        className="group/link"
        style={{
          display: 'inline-flex',
          alignItems: 'center',
          gap: '0.5rem',
          padding: '0.75rem 0',
          marginTop: 'auto',
          backgroundColor: 'transparent',
          border: 'none',
          cursor: 'pointer',
          fontFamily: 'Lexend, sans-serif',
          fontSize: 'var(--text-base)',
          fontWeight: 'var(--font-weight-semibold)',
          color: 'var(--primary)',
          textDecoration: 'none',
          transition: 'gap var(--transition-base) var(--ease-in-out)',
          alignSelf: 'flex-start'
        }}
        onMouseEnter={(e) => {
          e.currentTarget.style.gap = '0.75rem';
        }}
        onMouseLeave={(e) => {
          e.currentTarget.style.gap = '0.5rem';
        }}
        aria-label={`Learn more about ${service.title}`}
      >
        <span>{service.link.text}</span>
        <ArrowRight 
          size={20} 
          style={{
            transition: 'transform var(--transition-base) var(--ease-in-out)'
          }}
          className="group-hover/link:translate-x-1"
        />
      </button>
    </article>
  );
}

/**
 * Services Card Grid Pattern
 * 
 * Displays multiple service cards in a responsive grid layout.
 * 
 * @example
 * <ServicesCardGrid services={wordpressServices} />
 */
export interface ServicesCardGridProps {
  /** Array of services to display */
  services: Service[];
  /** Grid columns (responsive) */
  columns?: {
    mobile?: 1;
    tablet?: 2;
    desktop?: 2 | 3 | 4;
  };
  /** Optional className */
  className?: string;
}

export function ServicesCardGrid({
  services,
  columns = { mobile: 1, tablet: 2, desktop: 3 },
  className = ''
}: ServicesCardGridProps) {
  const gridClass = `grid-cols-${columns.mobile} md:grid-cols-${columns.tablet} lg:grid-cols-${columns.desktop}`;

  return (
    <div 
      className={`grid ${gridClass} gap-8 ${className}`}
      role="list"
    >
      {services.map((service) => (
        <div key={service.id} role="listitem">
          <ServicesCard service={service} />
        </div>
      ))}
    </div>
  );
}
