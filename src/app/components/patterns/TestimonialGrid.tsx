/**
 * Testimonial Grid Pattern
 * 
 * WordPress pattern: lsx-design/content/testimonial-grid
 * 
 * Displays customer testimonials, reviews, and quotes in a responsive grid.
 * 
 * @see {@link /guidelines/patterns/TestimonialGrid.md}
 */

import { TestimonialCard, type TestimonialCardData } from './TestimonialCard';

export interface Testimonial {
  /** Testimonial quote/text */
  quote: string;
  /** Author name */
  author: string;
  /** Author role/title */
  role?: string;
  /** Author company */
  company?: string;
  /** Author avatar image URL */
  avatar?: string;
  /** Rating (1-5 stars) */
  rating?: number;
  /** Date of testimonial */
  date?: string;
  /** Optional logo of author's company */
  companyLogo?: string;
}

export interface TestimonialGridProps {
  /** Array of testimonials */
  testimonials: Testimonial[];
  /** Number of columns (1-3, default: 3) */
  columns?: 1 | 2 | 3;
  /** Visual variant */
  variant?: 'default' | 'cards' | 'minimal' | 'featured' | 'funky' | 'glass';
  /** Show ratings */
  showRating?: boolean;
  /** Show avatars */
  showAvatar?: boolean;
  /** Show company logos */
  showCompanyLogo?: boolean;
  /** Max width constraint */
  maxWidth?: '4xl' | '5xl' | '6xl' | 'none';
  /** Custom gap between testimonials */
  gap?: string;
}

/**
 * TestimonialGrid Component
 *
 * Renders a grid of TestimonialCard components.
 */
export function TestimonialGrid({
  testimonials,
  columns = 3,
  variant = 'cards',
  showRating = true,
  showAvatar = true,
  showCompanyLogo = false,
  maxWidth = '6xl',
  gap = 'var(--spacing-8)'
}: TestimonialGridProps) {
  // Build grid classes
  const gridClasses = [
    'testimonial-grid',
    `testimonial-grid--${columns}-col`
  ].filter(Boolean).join(' ');

  // Max width class
  const maxWidthClass = maxWidth !== 'none' ? `wp-max-w-${maxWidth}` : '';

  // Map variant names to TestimonialCard variants
  const cardVariantMap: Record<string, 'default' | 'glass' | 'funky' | 'compact' | 'minimal' | 'featured'> = {
    cards: 'default',
    default: 'default',
    minimal: 'minimal',
    featured: 'featured',
    funky: 'funky',
    glass: 'glass',
  };

  const cardVariant = cardVariantMap[variant] || 'default';

  return (
    <div className={maxWidthClass}>
      <div
        className={gridClasses}
        style={{ gap }}
      >
        {testimonials.map((testimonial, index) => {
          const cardData: TestimonialCardData = {
            quote: testimonial.quote,
            author: testimonial.author,
            role: testimonial.role,
            company: testimonial.company,
            avatar: testimonial.avatar,
            rating: testimonial.rating,
            date: testimonial.date,
            companyLogo: testimonial.companyLogo,
          };

          return (
            <TestimonialCard
              key={index}
              testimonial={cardData}
              variant={cardVariant}
              showRating={showRating}
              showAvatar={showAvatar}
              showCompanyLogo={showCompanyLogo}
            />
          );
        })}
      </div>
    </div>
  );
}
