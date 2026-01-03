/**
 * Hero Pattern - Full Height
 * 
 * WordPress Pattern: lsx-design/hero/full-height
 * 
 * Full viewport height hero with centered content.
 * Used for: Homepage, landing pages, major campaign pages
 */

import { Container } from '../common/Container';
import { Button } from '../blocks/design/Buttons';
import { ArrowDown } from 'lucide-react';

interface HeroFullHeightProps {
  badge?: string;
  title: string;
  description: string;
  primaryCta?: {
    text: string;
    onClick: () => void;
  };
  secondaryCta?: {
    text: string;
    onClick: () => void;
  };
  showScrollIndicator?: boolean;
  backgroundImage?: string;
  overlay?: boolean;
  fullHeight?: boolean;
  alignment?: 'center' | 'top' | 'bottom';
}

export function HeroFullHeight({ 
  badge,
  title, 
  description,
  primaryCta,
  secondaryCta,
  showScrollIndicator = true,
  backgroundImage,
  overlay = false,
  fullHeight = true,
  alignment = 'center'
}: HeroFullHeightProps) {
  return (
    <section 
        style={{
          position: 'relative',
          minHeight: fullHeight ? '100vh' : 'auto',
          display: 'flex',
          alignItems: alignment === 'center' ? 'center' : alignment === 'top' ? 'flex-start' : 'flex-end',
          background: backgroundImage 
            ? `url(${backgroundImage})` 
            : 'var(--primary)',
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          overflow: 'hidden'
        }}
        aria-label={`${title} hero section`}
      >
        {/* Overlay for better text readability */}
        <div 
          style={{
            position: 'absolute',
            inset: 0,
            backgroundColor: backgroundImage ? 'var(--primary)' : 'transparent',
            opacity: backgroundImage ? '0.7' : '0',
            pointerEvents: 'none'
          }}
          aria-hidden="true"
        />

        {/* Subtle gradient overlay when no image */}
        {!backgroundImage && (
          <>
            <div 
              className="absolute inset-0"
              style={{
                background: 'linear-gradient(135deg, transparent 0%, var(--accent) 100%)',
                opacity: '0.1',
                pointerEvents: 'none'
              }}
              aria-hidden="true"
            />
            {/* Decorative gradient orb */}
            <div 
              className="absolute top-0 right-0 w-96 h-96 rounded-full"
              style={{
                background: 'var(--accent)',
                opacity: '0.1',
                filter: 'blur(80px)',
                transform: 'translate(30%, -30%)'
              }}
              aria-hidden="true"
            />
          </>
        )}

        <Container style={{ position: 'relative', zIndex: 1 }}>
          <div className="text-center max-w-4xl mx-auto">
            {badge && (
              <span 
                className="inline-flex items-center px-6 py-3 mb-8"
                style={{
                  backgroundColor: 'var(--primary-foreground)',
                  color: 'var(--primary)',
                  borderRadius: 'var(--radius-xl)',
                  border: 'none',
                  fontFamily: 'Lexend, sans-serif',
                  fontSize: 'var(--text-base)',
                  fontWeight: 'var(--font-weight-medium)',
                  textTransform: 'uppercase',
                  letterSpacing: '0.1em',
                  opacity: 0.95
                }}
              >
                {badge}
              </span>
            )}

            <h1 
              style={{
                fontFamily: 'Lexend, sans-serif',
                fontSize: 'var(--text-h1)',
                fontWeight: 'var(--font-weight-semibold)',
                lineHeight: 'var(--line-height-tight)',
                letterSpacing: 'var(--letter-spacing-tight)',
                marginBottom: '24px',
                color: 'var(--primary-foreground)',
                textAlign: 'center'
              }}
            >
              {title}
            </h1>

            <p 
              style={{
                fontFamily: 'Lexend, sans-serif',
                fontSize: 'var(--text-lead)',
                fontWeight: 'var(--font-weight-regular)',
                lineHeight: 'var(--line-height-relaxed)',
                color: 'var(--primary-foreground)',
                opacity: 0.95,
                maxWidth: '800px',
                margin: '0 auto',
                marginBottom: (primaryCta || secondaryCta) ? '40px' : '0'
              }}
            >
              {description}
            </p>

            {(primaryCta || secondaryCta) && (
              <div className="flex flex-wrap gap-4 justify-center">
                {primaryCta && (
                  <Button
                    variant="primary"
                    size="lg"
                    onClick={primaryCta.onClick}
                    style={{
                      backgroundColor: 'var(--primary-foreground)',
                      color: 'var(--primary)'
                    }}
                  >
                    {primaryCta.text}
                  </Button>
                )}
                {secondaryCta && (
                  <Button
                    variant="outline"
                    size="lg"
                    onClick={secondaryCta.onClick}
                    style={{
                      borderColor: 'var(--primary-foreground)',
                      color: 'var(--primary-foreground)'
                    }}
                  >
                    {secondaryCta.text}
                  </Button>
                )}
              </div>
            )}
          </div>
        </Container>

        {/* Scroll indicator */}
        {showScrollIndicator && (
          <button
            onClick={() => {
              window.scrollTo({
                top: window.innerHeight,
                behavior: 'smooth'
              });
            }}
            className="absolute bottom-8 left-1/2"
            style={{
              transform: 'translateX(-50%)',
              backgroundColor: 'transparent',
              border: 'none',
              cursor: 'pointer',
              animation: 'bounce 2s infinite',
              color: 'var(--primary-foreground)',
              opacity: 0.7,
              transition: 'opacity 0.3s ease'
            }}
            onMouseEnter={(e) => {
              e.currentTarget.style.opacity = '1';
            }}
            onMouseLeave={(e) => {
              e.currentTarget.style.opacity = '0.7';
            }}
            aria-label="Scroll down"
          >
            <ArrowDown size={32} />
          </button>
        )}

        <style>{`
          @keyframes bounce {
            0%, 100% { transform: translateX(-50%) translateY(0); }
            50% { transform: translateX(-50%) translateY(10px); }
          }
        `}</style>
      </section>
  );
}