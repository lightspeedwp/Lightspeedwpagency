/**
 * Gradient CTA Section Pattern
 * 
 * WordPress pattern: lsx-design/cta/gradient-cta-section
 * 
 * Full-width gradient CTA section with benefits checklist and optional graphic.
 * Commonly used on service pages for conversion-focused calls-to-action.
 * 
 * **Usage:**
 * ```tsx
 * <GradientCTASection
 *   title="Reveal your unique business's potential"
 *   description="Dive into groundwork with our Content Strategy services..."
 *   benefits={[
 *     'Content strategy inspection',
 *     'Content ideation assistance',
 *     'Content Creation'
 *   ]}
 *   buttonText="Free consultation"
 *   buttonPage="contact"
 *   gradient="blue"
 *   graphic={<TrendingUp size={120} />}
 * />
 * ```
 */

import { LucideIcon, CheckCircle } from 'lucide-react';
import { Container } from '../common/Container';
import { Section } from '../common/Section';
import { Button } from '../blocks/design/Buttons';
import { ReactNode } from 'react';

export interface GradientCTASectionProps {
  /** Section title */
  title: string;
  /** Section description */
  description: string;
  /** Benefits checklist */
  benefits: string[];
  /** Primary button text */
  buttonText: string;
  /** Primary button page */
  buttonPage: string;
  /** Gradient variant */
  gradient?: 'blue' | 'purple' | 'green' | 'orange' | 'custom';
  /** Custom gradient value (if gradient='custom') */
  customGradient?: string;
  /** Optional graphic element (icon or component) */
  graphic?: ReactNode;
  /** Button icon */
  buttonIcon?: LucideIcon;
  /** Section spacing */
  spacing?: 'sm' | 'md' | 'lg' | 'xl';
  /** Show background pattern */
  showPattern?: boolean;
}

export function GradientCTASection({
  title,
  description,
  benefits,
  buttonText,
  buttonPage,
  gradient = 'blue',
  customGradient,
  graphic,
  buttonIcon: ButtonIcon,
  spacing = 'xl',
  showPattern = true
}: GradientCTASectionProps) {
  // Gradient backgrounds
  const gradientBg = customGradient || {
    blue: 'linear-gradient(135deg, #3b82f6 0%, #1e40af 100%)',
    purple: 'linear-gradient(135deg, #8b5cf6 0%, #6d28d9 100%)',
    green: 'linear-gradient(135deg, #10b981 0%, #059669 100%)',
    orange: 'linear-gradient(135deg, #f59e0b 0%, #d97706 100%)'
  }[gradient];

  return (
    <Section 
      spacing={spacing}
      style={{
        background: gradientBg,
        color: 'var(--primary-foreground)',
        position: 'relative',
        overflow: 'hidden'
      }}
    >
      {/* Background Pattern */}
      {showPattern && (
        <div
          style={{
            position: 'absolute',
            inset: 0,
            opacity: 0.1,
            backgroundImage: 'radial-gradient(circle at 2px 2px, white 1px, transparent 0)',
            backgroundSize: '32px 32px'
          }}
        />
      )}

      <Container>
        <div 
          className="wp-grid-2-cols"
          style={{ 
            alignItems: 'center', 
            position: 'relative', 
            zIndex: 10 
          }}
        >
          {/* Left: Content */}
          <div>
            {/* Title */}
            <h2
              className="font-primary text-h1 font-bold tracking-tight"
              style={{
                lineHeight: '1.2',
                marginBottom: 'var(--spacing-6)'
              }}
            >
              {title}
            </h2>

            {/* Description */}
            <p
              className="font-primary text-lg leading-relaxed"
              style={{
                marginBottom: 'var(--spacing-6)',
                opacity: 0.95
              }}
            >
              {description}
            </p>

            {/* Benefits Checklist */}
            <ul 
              style={{ 
                listStyle: 'none', 
                padding: 0,
                marginBottom: 'var(--spacing-8)',
                display: 'flex',
                flexDirection: 'column',
                gap: 'var(--spacing-3)'
              }}
            >
              {benefits.map((benefit, index) => (
                <li
                  key={index}
                  style={{
                    display: 'flex',
                    alignItems: 'center',
                    gap: 'var(--spacing-3)'
                  }}
                >
                  <CheckCircle size={20} style={{ color: '#10b981', flexShrink: 0 }} />
                  <span className="font-primary text-base" style={{ color: 'white' }}>
                    {benefit}
                  </span>
                </li>
              ))}
            </ul>

            {/* CTA Button */}
            <Button
              variant="default"
              size="lg"
              page={buttonPage}
              style={{
                backgroundColor: 'white',
                color: 'var(--primary)',
                boxShadow: '0 10px 40px rgba(0, 0, 0, 0.2)'
              }}
            >
              {buttonText}
              {ButtonIcon && <ButtonIcon size={20} />}
            </Button>
          </div>

          {/* Right: Graphic */}
          {graphic && (
            <div 
              style={{
                display: 'none',
                alignItems: 'center',
                justifyContent: 'center'
              }}
              className="lg:flex"
            >
              <div
                style={{
                  width: '280px',
                  height: '280px',
                  borderRadius: 'var(--radius-xl)',
                  background: 'rgba(255, 255, 255, 0.1)',
                  backdropFilter: 'blur(20px)',
                  border: '2px solid rgba(255, 255, 255, 0.3)',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  boxShadow: '0 20px 60px rgba(0, 0, 0, 0.3)'
                }}
              >
                {graphic}
              </div>
            </div>
          )}
        </div>
      </Container>
    </Section>
  );
}
