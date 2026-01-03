/**
 * Archive CTA Pattern
 * 
 * WordPress pattern: lsx-design/cta/archive
 * 
 * Reusable CTA section for archive templates using Group block with section style.
 * Includes title, supporting text, and action button that triggers enquiry modal.
 * 
 * Design System Requirements:
 * - Uses Section component with sectionStyle="cta-primary"
 * - Typography inherits from section style CSS
 * - Button inherits CTA section button styles
 * - All components are innerBlocks of the Group
 * 
 * WordPress Mapping:
 * - Section (core/group with "cta-primary" section style)
 *   ├── Container (alignment constraint)
 *   │   └── Content wrapper (.section-content-narrow .section-content-layer)
 *   │       ├── Heading (core/heading innerBlock)
 *   │       ├── Paragraph (core/paragraph innerBlock)
 *   │       └── Buttons (core/buttons innerBlock)
 *   │           └── Button (core/button innerBlock with data-variant)
 * 
 * @example
 * import { ArchiveCTA } from '../patterns/ArchiveCTA';
 * import { blogArchiveCTA } from '../../data/cta';
 * 
 * <ArchiveCTA ctaData={blogArchiveCTA} />
 */

import { useState } from 'react';
import { Container } from '../common/Container';
import { Section } from '../common/Section';
import { Button } from '../blocks/design/Buttons';
import { EnquiryModal } from '../ui/EnquiryModal';
import type { CTAData } from '../../data/cta';

export interface ArchiveCTAProps {
  /** CTA content data */
  ctaData: CTAData;
  /** Optional custom section style (defaults to cta-primary) */
  sectionStyle?: 'cta-primary' | 'cta-secondary' | 'cta-accent';
  /** Optional custom className */
  className?: string;
}

/**
 * Archive CTA Pattern
 * 
 * Displays a conversion-focused CTA section at the bottom of archive templates.
 * Uses Group block with section style for consistent styling.
 */
export function ArchiveCTA({
  ctaData,
  sectionStyle = 'cta-primary',
  className = ''
}: ArchiveCTAProps) {
  const [isModalOpen, setIsModalOpen] = useState(false);

  const handleEnquirySubmit = (formData: any) => {
    console.log('Enquiry submitted:', formData);
    // In production: Send to API endpoint
  };

  return (
    <>
      {/* CTA Section with Group block and section style */}
      <Section 
        sectionStyle={sectionStyle}
        className={className}
      >
        <Container>
          {/* Content wrapper with section style utility classes */}
          <div className="section-content-narrow section-content-layer">
            {/* Heading innerBlock - Inherits section style typography */}
            <h2
              style={{
                fontFamily: 'Lexend, sans-serif',
                fontSize: 'var(--text-h2)',
                fontWeight: 'var(--font-weight-medium)',
                lineHeight: 'var(--line-height-snug)',
                letterSpacing: 'var(--letter-spacing-tight)',
                marginBottom: '1.5rem',
                textAlign: 'center'
              }}
            >
              {ctaData.title}
            </h2>

            {/* Paragraph innerBlock - Inherits section style typography */}
            <p
              style={{
                fontFamily: 'Lexend, sans-serif',
                fontSize: 'var(--text-lg)',
                fontWeight: 'var(--font-weight-regular)',
                lineHeight: 'var(--line-height-relaxed)',
                marginBottom: '2.5rem',
                textAlign: 'center',
                maxWidth: '700px',
                marginLeft: 'auto',
                marginRight: 'auto'
              }}
            >
              {ctaData.description}
            </p>

            {/* Buttons Block innerBlock - Single button with data-variant */}
            <div 
              className="flex justify-center"
              role="group"
              aria-label="Call to action"
            >
              <Button
                variant={ctaData.buttonVariant || 'primary'}
                size="lg"
                onClick={() => setIsModalOpen(true)}
                data-variant={ctaData.buttonVariant || 'primary'}
                aria-haspopup="dialog"
              >
                {ctaData.buttonText}
              </Button>
            </div>
          </div>
        </Container>
      </Section>

      {/* Enquiry Modal */}
      <EnquiryModal
        isOpen={isModalOpen}
        onClose={() => setIsModalOpen(false)}
        title={ctaData.modalTitle || ctaData.title}
        description={ctaData.modalDescription || ctaData.description}
        onSubmit={handleEnquirySubmit}
      />
    </>
  );
}
