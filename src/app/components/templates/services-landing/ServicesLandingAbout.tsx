/**
 * Services Landing — Why LightSpeed Section
 *
 * Sub-component of ServicesLandingTemplate.
 * Two-column layout: text + capability badges left, image right.
 *
 * @see ServicesLandingTemplate.tsx — Parent template
 */

import { Container } from '../../common/Container';
import { ScrollReveal } from '../../../hooks/useScrollReveal';
import {
  Sparkle,
  Palette,
  Stack as Layers,
} from '@phosphor-icons/react';

export function ServicesLandingAbout() {
  return (
    <section className="service-section service-section--bg-background" style={{ overflow: 'hidden' }}>
      <div style={{
        position: 'absolute',
        top: '50%',
        left: '0%',
        width: '500px',
        height: '500px',
        background: 'radial-gradient(circle, rgba(var(--primary-rgb), 0.15) 0%, transparent 70%)',
        transform: 'translate(-50%, -50%)',
        zIndex: 0,
        pointerEvents: 'none'
      }} />

      <Container>
        <ScrollReveal animation="fade-up">
          <div className="service-section__grid service-section__grid--2 service-section__grid--align-center service-section__grid--gap-lg" style={{ position: 'relative', zIndex: 1 }}>
            <div className="service-section__content">
              <h2 className="service-section__title" style={{ margin: 0, lineHeight: '1.2' }}>
                Experience meets{' '}
                <span className="service-hero__gradient-text">Innovation</span>
              </h2>

              <div style={{
                display: 'flex',
                flexDirection: 'column',
                gap: 'var(--spacing-4)',
                fontFamily: 'var(--font-secondary)',
                fontSize: 'var(--text-lg)',
                color: 'var(--muted-foreground)',
                lineHeight: 'var(--line-height-comfortable)'
              }}>
                <p className="wp-m-0">
                  We don't just build websites; we architect digital ecosystems that are secure, scalable, and built for future growth.
                </p>
                <p className="wp-m-0">
                  From the first line of code to the final pixel, our team of experts ensures every aspect of your digital presence is optimized for performance and conversion.
                </p>
              </div>

              <div className="service-section__tags">
                {[
                  { icon: Sparkle, label: 'WordPress Core', color: 'var(--primary)' },
                  { icon: Palette, label: 'UI/UX Design', color: 'var(--secondary)' },
                  { icon: Layers, label: 'Scalable Arch', color: 'var(--primary)' },
                ].map((item) => (
                  <div key={item.label} style={{
                    display: 'flex',
                    alignItems: 'center',
                    gap: 'var(--spacing-2)',
                    padding: 'var(--spacing-2) var(--spacing-4)',
                    backgroundColor: 'var(--card)',
                    border: '1px solid var(--border)',
                    borderRadius: 'var(--radius-full)',
                    fontFamily: 'var(--font-primary)',
                    fontSize: 'var(--text-sm)',
                    fontWeight: 'var(--font-weight-medium)',
                    color: 'var(--foreground)'
                  }}>
                    <item.icon color={item.color} weight="duotone" size={18} />
                    <span>{item.label}</span>
                  </div>
                ))}
              </div>
            </div>

            <div style={{ position: 'relative' }}>
              <div style={{
                position: 'absolute',
                inset: '-20px',
                background: 'linear-gradient(45deg, var(--primary-soft), var(--secondary-soft))',
                filter: 'blur(30px)',
                borderRadius: 'var(--radius-lg)',
                zIndex: 0
              }} />
              <img
                src="https://images.unsplash.com/photo-1522071820081-009f0129c71c?w=800&h=600&fit=crop"
                alt="Team collaboration"
                loading="lazy"
                style={{
                  position: 'relative',
                  width: '100%',
                  height: 'auto',
                  borderRadius: 'var(--radius-lg)',
                  border: '1px solid rgba(var(--primary-rgb), 0.2)',
                  boxShadow: '0 20px 40px rgba(0,0,0,0.3)',
                  zIndex: 1,
                  objectFit: 'cover'
                }}
              />
            </div>
          </div>
        </ScrollReveal>
      </Container>
    </section>
  );
}