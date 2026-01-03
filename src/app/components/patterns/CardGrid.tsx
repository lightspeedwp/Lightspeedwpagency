/**
 * Card Grid Pattern
 * 
 * WordPress pattern: lsx-design/listing/card-grid
 * 
 * Responsive grid of cards with consistent styling using design system tokens.
 * Supports 2, 3, or 4 column layouts.
 */

import { Section } from '../common/Section';
import { Container } from '../common/Container';
import { Heading } from '../common/Heading';
import { useNavigation } from '../../contexts/NavigationContext';

interface CardGridItem {
  id: string;
  title: string;
  excerpt: string;
  category: string;
  imageUrl: string;
  href: string;
  page?: string; // Navigation page ID (e.g., 'single', 'blog', etc.)
  duration?: string;
  price?: string;
}

interface CardGridProps {
  items: CardGridItem[];
  sectionTitle?: string;
  columns?: 2 | 3 | 4;
}

export function CardGrid({ items, sectionTitle, columns = 3 }: CardGridProps) {
  const { navigateTo } = useNavigation();
  
  const gridCols = {
    2: 'md:grid-cols-2',
    3: 'md:grid-cols-2 lg:grid-cols-3',
    4: 'md:grid-cols-2 lg:grid-cols-4'
  };

  return (
    <Section spacing="lg" id="featured">
      <Container>
        {/* Section header */}
        {sectionTitle && (
          <div className="text-center mb-12">
            <Heading level={2}>{sectionTitle}</Heading>
            <p 
              className="mt-4 mx-auto"
              style={{
                fontFamily: 'Lexend, sans-serif',
                fontSize: 'var(--text-base)',
                color: 'var(--muted-foreground)',
                maxWidth: '600px'
              }}
            >
              Handpicked projects showcasing our design and development expertise
            </p>
          </div>
        )}

        {/* Card grid */}
        <div className={`grid grid-cols-1 ${gridCols[columns]} gap-8`}>
          {items.map((item) => (
            <article 
              key={item.id}
              className="group"
              style={{
                backgroundColor: 'var(--card)',
                border: '1px solid var(--border-soft)',
                borderRadius: 'var(--radius-xl)',
                overflow: 'hidden',
                transition: 'all 0.4s cubic-bezier(0.4, 0, 0.2, 1)',
                cursor: 'pointer',
                boxShadow: 'var(--shadow-md)'
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.transform = 'translateY(-12px)';
                e.currentTarget.style.boxShadow = 'var(--shadow-xl)';
                e.currentTarget.style.borderColor = 'var(--primary)';
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.transform = 'translateY(0)';
                e.currentTarget.style.boxShadow = 'var(--shadow-md)';
                e.currentTarget.style.borderColor = 'var(--border-soft)';
              }}
            >
              {/* Card image */}
              <div 
                className="relative overflow-hidden"
                style={{ 
                  paddingTop: '60%', // Modern 5:3 aspect ratio
                  backgroundColor: 'var(--muted)'
                }}
              >
                <img
                  src={item.imageUrl}
                  alt={item.title}
                  className="absolute inset-0 w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                  loading="lazy"
                  style={{
                    filter: 'brightness(0.95)'
                  }}
                />
                
                {/* Gradient overlay */}
                <div 
                  className="absolute inset-0"
                  style={{
                    background: 'linear-gradient(180deg, transparent 0%, rgba(0,0,0,0.05) 100%)'
                  }}
                  aria-hidden="true"
                />
                
                {/* Category badge with proper color variables */}
                <span 
                  className="absolute top-4 left-4 px-4 py-2"
                  style={{
                    backgroundColor: 'var(--primary)',
                    color: 'var(--primary-foreground)',
                    borderRadius: 'var(--radius-lg)',
                    fontFamily: 'Lexend, sans-serif',
                    fontSize: 'var(--text-small)',
                    fontWeight: 'var(--font-weight-bold)',
                    textTransform: 'uppercase',
                    letterSpacing: '0.08em',
                    boxShadow: 'var(--shadow-hover)'
                  }}
                >
                  {item.category}
                </span>
              </div>

              {/* Card content */}
              <div className="p-8 space-y-4">
                {/* Title */}
                <h3 
                  style={{
                    fontFamily: 'Lexend, sans-serif',
                    fontSize: 'var(--text-h3)',
                    fontWeight: 'var(--font-weight-bold)',
                    color: 'var(--card-foreground)',
                    lineHeight: '1.3',
                    letterSpacing: '-0.01em'
                  }}
                >
                  {item.title}
                </h3>

                {/* Excerpt */}
                <p 
                  style={{
                    fontFamily: 'Lexend, sans-serif',
                    fontSize: 'var(--text-base)',
                    color: 'var(--muted-foreground)',
                    lineHeight: '1.7'
                  }}
                >
                  {item.excerpt}
                </p>

                {/* Meta information */}
                <div className="flex items-center gap-4 pt-3" style={{ borderTop: '1px solid var(--border-extra-soft)' }}>
                  {item.duration && (
                    <span 
                      className="flex items-center gap-2"
                      style={{
                        fontFamily: 'Manrope, sans-serif',
                        fontSize: 'var(--text-small)',
                        color: 'var(--muted-foreground)'
                      }}
                    >
                      <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                        <circle cx="12" cy="12" r="10"/>
                        <polyline points="12 6 12 12 16 14"/>
                      </svg>
                      {item.duration}
                    </span>
                  )}
                  {item.price && (
                    <span 
                      style={{
                        fontFamily: 'Lexend, sans-serif',
                        fontSize: 'var(--text-base)',
                        fontWeight: 'var(--font-weight-bold)',
                        color: 'var(--primary)',
                        marginLeft: 'auto'
                      }}
                    >
                      {item.price}
                    </span>
                  )}
                </div>

                {/* CTA link */}
                <button
                  onClick={() => navigateTo(item.page || 'single')}
                  className="inline-flex items-center gap-2 mt-2 group/link"
                  style={{
                    fontFamily: 'Lexend, sans-serif',
                    fontSize: 'var(--text-base)',
                    fontWeight: 'var(--font-weight-medium)',
                    color: 'var(--primary)',
                    textDecoration: 'none',
                    background: 'none',
                    border: 'none',
                    padding: 0,
                    cursor: 'pointer',
                    transition: 'gap 0.3s ease'
                  }}
                  onMouseEnter={(e) => {
                    e.currentTarget.style.gap = '12px';
                  }}
                  onMouseLeave={(e) => {
                    e.currentTarget.style.gap = '8px';
                  }}
                >
                  View Details
                  <svg 
                    width="18" 
                    height="18" 
                    viewBox="0 0 24 24" 
                    fill="none" 
                    stroke="currentColor" 
                    strokeWidth="2.5"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  >
                    <line x1="5" y1="12" x2="19" y2="12"/>
                    <polyline points="12 5 19 12 12 19"/>
                  </svg>
                </button>
              </div>
            </article>
          ))}
        </div>
      </Container>
    </Section>
  );
}