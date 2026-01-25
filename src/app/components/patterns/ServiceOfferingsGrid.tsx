/**
 * Service Offerings Grid Pattern
 * 
 * WordPress pattern: lsx-design/content/service-offerings-grid
 * 
 * Displays a grid of service offerings with icons, hover effects, and CTA buttons.
 * Commonly used on service pages to showcase core offerings.
 * 
 * **Usage:**
 * ```tsx
 * <ServiceOfferingsGrid
 *   title="Our Content Services"
 *   description="Dive into our three core services and discover our first Content Design approach"
 *   offerings={[
 *     {
 *       id: 'audit',
 *       icon: Search,
 *       title: 'Content Audit',
 *       description: 'Conduct a complete analysis...',
 *       buttonText: 'Learn More',
 *       buttonPage: 'contact'
 *     }
 *   ]}
 *   columns={3}
 *   backgroundColor="var(--muted)"
 * />
 * ```
 */

import { LucideIcon } from 'lucide-react';
import { ArrowRight } from 'lucide-react';
import { Container } from '../common/Container';
import { Section } from '../common/Section';
import { Button } from '../blocks/design/Buttons';
import { useState } from 'react';

export interface ServiceOffering {
  /** Unique identifier */
  id: string;
  /** Icon component */
  icon: LucideIcon;
  /** Service title */
  title: string;
  /** Service description */
  description: string;
  /** Button text */
  buttonText: string;
  /** Button page slug */
  buttonPage: string;
  /** Optional button variant */
  buttonVariant?: 'default' | 'outline' | 'ghost';
}

export interface ServiceOfferingsGridProps {
  /** Section title */
  title?: string;
  /** Section description */
  description?: string;
  /** Array of service offerings */
  offerings: ServiceOffering[];
  /** Number of columns (2-4, default: 3) */
  columns?: 2 | 3 | 4;
  /** Background color override */
  backgroundColor?: string;
  /** Section spacing */
  spacing?: 'sm' | 'md' | 'lg' | 'xl';
  /** Max width constraint */
  maxWidth?: '4xl' | '5xl' | '6xl' | 'none';
}

export function ServiceOfferingsGrid({
  title,
  description,
  offerings,
  columns = 3,
  backgroundColor = 'var(--muted)',
  spacing = 'xl',
  maxWidth = '6xl'
}: ServiceOfferingsGridProps) {
  const [hoveredId, setHoveredId] = useState<string | null>(null);

  // Grid columns - WordPress-aligned responsive grid
  const gridClass = {
    2: 'wp-grid-2-cols',
    3: 'wp-grid-3-cols',
    4: 'wp-grid-4-cols'
  }[columns];

  // Max width class
  const maxWidthClass = maxWidth !== 'none' ? `wp-max-w-${maxWidth}` : '';

  return (
    <Section spacing={spacing} style={{ backgroundColor }}>
      <Container>
        {/* Section Header */}
        {(title || description) && (
          <div className="wp-text-center" style={{ marginBottom: 'var(--spacing-16)' }}>
            {title && (
              <h2
                className="font-primary text-h1 font-bold tracking-tight"
                style={{
                  lineHeight: '1.2',
                  marginBottom: 'var(--spacing-4)',
                  color: 'var(--foreground)'
                }}
              >
                {title}
              </h2>
            )}

            {description && (
              <p
                className="font-primary text-lg leading-relaxed"
                style={{
                  color: 'var(--muted-foreground)',
                  maxWidth: '700px',
                  margin: '0 auto'
                }}
              >
                {description}
              </p>
            )}
          </div>
        )}

        {/* Services Grid */}
        <div className={`${gridClass} ${maxWidthClass}`}>
          {offerings.map((offering) => {
            const Icon = offering.icon;
            const isHovered = hoveredId === offering.id;

            return (
              <div
                key={offering.id}
                style={{
                  padding: 'var(--spacing-10)',
                  backgroundColor: 'var(--card)',
                  borderRadius: 'var(--radius-xl)',
                  border: isHovered ? '2px solid var(--primary)' : '1px solid var(--border-soft)',
                  textAlign: 'center',
                  transition: 'all 0.3s ease',
                  transform: isHovered ? 'translateY(-8px)' : 'translateY(0)',
                  boxShadow: isHovered 
                    ? '0 20px 40px rgba(0, 0, 0, 0.15)' 
                    : '0 4px 12px rgba(0, 0, 0, 0.05)',
                  cursor: 'pointer'
                }}
                onMouseEnter={() => setHoveredId(offering.id)}
                onMouseLeave={() => setHoveredId(null)}
              >
                {/* Icon */}
                <div
                  style={{
                    width: '80px',
                    height: '80px',
                    borderRadius: 'var(--radius-xl)',
                    backgroundColor: isHovered ? 'var(--primary)' : 'var(--primary-soft)',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    margin: '0 auto var(--spacing-6)',
                    transition: 'all 0.3s ease'
                  }}
                >
                  <Icon 
                    size={40} 
                    style={{ 
                      color: isHovered ? 'white' : 'var(--primary)',
                      transition: 'color 0.3s ease'
                    }} 
                  />
                </div>

                {/* Title */}
                <h3
                  className="font-primary text-xl font-bold"
                  style={{
                    color: 'var(--foreground)',
                    marginBottom: 'var(--spacing-4)'
                  }}
                >
                  {offering.title}
                </h3>

                {/* Description */}
                <p
                  className="font-primary text-base leading-relaxed"
                  style={{
                    color: 'var(--muted-foreground)',
                    marginBottom: 'var(--spacing-6)'
                  }}
                >
                  {offering.description}
                </p>

                {/* Button */}
                <Button
                  variant={offering.buttonVariant || 'outline'}
                  size="md"
                  page={offering.buttonPage}
                  style={{ width: '100%' }}
                >
                  {offering.buttonText}
                  <ArrowRight size={20} />
                </Button>
              </div>
            );
          })}
        </div>
      </Container>
    </Section>
  );
}
