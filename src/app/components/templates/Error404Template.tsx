/**
 * 404 Error Template
 * 
 * WordPress template: templates/404.html
 * 
 * Pattern order: Hero → Helpful Links → Common Issues → CTA
 */

import { SiteHeader } from '../parts/SiteHeader';
import { SiteFooter } from '../parts/SiteFooter';
import { SkipLink } from '../common/SkipLink';
import { Container } from '../common/Container';
import { Section } from '../common/Section';
import { BackToTopButton } from '../blocks/layout/BackToTopButton';
import { RouteAnnouncer } from '../blocks/utility/RouteAnnouncer';
import { Buttons, Button } from '../blocks/design/Buttons';
import { ArrowRight } from 'lucide-react';

// Import centralized data
import {
  error404Hero,
  helpfulLinks,
  commonIssues,
  error404CTA
} from '../../data/404-page';

export function Error404Template() {
  return (
    <>
      <RouteAnnouncer />
      <SkipLink />
      <SiteHeader />
      
      <main id="main-content" role="main">
        {/* Hero Section */}
        <Section 
          spacing="xl"
          style={{
            background: 'linear-gradient(135deg, #ef4444 0%, #f87171 100%)',
            color: 'var(--primary-foreground)',
            position: 'relative',
            overflow: 'hidden'
          }}
        >
          {/* Gradient orb decoration */}
          <div
            className="absolute top-0 right-0 w-96 h-96 rounded-full"
            style={{
              background: 'radial-gradient(circle, rgba(248, 113, 113, 0.3) 0%, transparent 70%)',
              filter: 'blur(80px)',
              transform: 'translate(30%, -30%)'
            }}
          />

          <Container>
            <div className="max-w-4xl mx-auto text-center relative z-10">
              <div
                style={{
                  fontFamily: 'Lexend, sans-serif',
                  fontSize: 'clamp(6rem, 15vw, 10rem)',
                  fontWeight: 'var(--font-weight-black)',
                  lineHeight: '1',
                  color: 'rgba(255, 255, 255, 0.2)',
                  marginBottom: '24px'
                }}
              >
                {error404Hero.errorCode}
              </div>

              <h1
                style={{
                  fontFamily: 'Lexend, sans-serif',
                  fontSize: 'clamp(2rem, 5vw, 3.5rem)',
                  fontWeight: 'var(--font-weight-bold)',
                  lineHeight: '1.1',
                  letterSpacing: '-0.02em',
                  marginBottom: '20px',
                  color: 'var(--primary-foreground)'
                }}
              >
                {error404Hero.title}
              </h1>

              <p
                style={{
                  fontFamily: 'Lexend, sans-serif',
                  fontSize: 'var(--text-lg)',
                  lineHeight: '1.7',
                  color: 'rgba(255, 255, 255, 0.9)',
                  maxWidth: '700px',
                  margin: '0 auto'
                }}
              >
                {error404Hero.description}
              </p>
            </div>
          </Container>
        </Section>

        {/* Helpful Links Section */}
        <Section spacing="xl" style={{ backgroundColor: 'var(--background)' }}>
          <Container>
            <div className="max-w-6xl mx-auto">
              <div className="text-center mb-16">
                <h2
                  style={{
                    fontFamily: 'Lexend, sans-serif',
                    fontSize: 'var(--text-h2)',
                    fontWeight: 'var(--font-weight-bold)',
                    marginBottom: '16px',
                    color: 'var(--foreground)'
                  }}
                >
                  Here's Where You Can Go
                </h2>
                <p
                  style={{
                    fontFamily: 'Lexend, sans-serif',
                    fontSize: 'var(--text-lg)',
                    color: 'var(--muted-foreground)'
                  }}
                >
                  Explore these helpful links to find what you need
                </p>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {helpfulLinks.map((link, index) => {
                  const Icon = link.icon;
                  return (
                    <Button
                      key={index}
                      page={link.page as any}
                      variant="outline"
                      style={{
                        width: '100%',
                        height: 'auto',
                        padding: '24px',
                        textAlign: 'left',
                        display: 'flex',
                        flexDirection: 'column',
                        alignItems: 'flex-start',
                        gap: '12px',
                        backgroundColor: 'var(--card)',
                        borderRadius: 'var(--radius-lg)',
                        border: '1px solid var(--border-soft)',
                        transition: 'all 200ms ease',
                        cursor: 'pointer'
                      }}
                      onMouseEnter={(e) => {
                        e.currentTarget.style.borderColor = '#ef4444';
                        e.currentTarget.style.transform = 'translateY(-4px)';
                      }}
                      onMouseLeave={(e) => {
                        e.currentTarget.style.borderColor = 'var(--border-soft)';
                        e.currentTarget.style.transform = 'translateY(0)';
                      }}
                    >
                      <div
                        style={{
                          width: '48px',
                          height: '48px',
                          borderRadius: 'var(--radius)',
                          backgroundColor: 'rgba(239, 68, 68, 0.1)',
                          display: 'flex',
                          alignItems: 'center',
                          justifyContent: 'center'
                        }}
                      >
                        <Icon size={24} style={{ color: '#ef4444' }} />
                      </div>

                      <div style={{ flexGrow: 1 }}>
                        <div
                          style={{
                            fontFamily: 'Lexend, sans-serif',
                            fontSize: 'var(--text-h5)',
                            fontWeight: 'var(--font-weight-bold)',
                            marginBottom: '8px',
                            color: 'var(--foreground)',
                            display: 'flex',
                            alignItems: 'center',
                            gap: '8px'
                          }}
                        >
                          {link.title}
                          <ArrowRight size={16} style={{ color: '#ef4444' }} />
                        </div>
                        <p
                          style={{
                            fontFamily: 'Lexend, sans-serif',
                            fontSize: 'var(--text-base)',
                            color: 'var(--muted-foreground)',
                            lineHeight: '1.6'
                          }}
                        >
                          {link.description}
                        </p>
                      </div>
                    </Button>
                  );
                })}
              </div>
            </div>
          </Container>
        </Section>

        {/* Common Issues Section */}
        <Section spacing="xl" style={{ backgroundColor: 'var(--muted)' }}>
          <Container>
            <div className="max-w-4xl mx-auto">
              <div className="text-center mb-16">
                <h2
                  style={{
                    fontFamily: 'Lexend, sans-serif',
                    fontSize: 'var(--text-h2)',
                    fontWeight: 'var(--font-weight-bold)',
                    marginBottom: '16px',
                    color: 'var(--foreground)'
                  }}
                >
                  Common Questions
                </h2>
                <p
                  style={{
                    fontFamily: 'Lexend, sans-serif',
                    fontSize: 'var(--text-lg)',
                    color: 'var(--muted-foreground)'
                  }}
                >
                  Quick answers to help you find what you need
                </p>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                {commonIssues.map((issue, index) => (
                  <div
                    key={index}
                    style={{
                      backgroundColor: 'var(--card)',
                      borderRadius: 'var(--radius-lg)',
                      border: '1px solid var(--border-soft)',
                      padding: '24px'
                    }}
                  >
                    <h3
                      style={{
                        fontFamily: 'Lexend, sans-serif',
                        fontSize: 'var(--text-h5)',
                        fontWeight: 'var(--font-weight-bold)',
                        marginBottom: '12px',
                        color: 'var(--foreground)'
                      }}
                    >
                      {issue.question}
                    </h3>
                    <p
                      style={{
                        fontFamily: 'Lexend, sans-serif',
                        fontSize: 'var(--text-base)',
                        lineHeight: '1.6',
                        color: 'var(--muted-foreground)',
                        marginBottom: issue.actionText ? '16px' : '0'
                      }}
                    >
                      {issue.answer}
                    </p>
                    {issue.actionText && issue.actionPage && (
                      <Button
                        page={issue.actionPage as any}
                        variant="outline"
                        size="sm"
                        style={{
                          borderColor: '#ef4444',
                          color: '#ef4444'
                        }}
                      >
                        {issue.actionText}
                      </Button>
                    )}
                  </div>
                ))}
              </div>
            </div>
          </Container>
        </Section>

        {/* CTA Section */}
        <Section 
          spacing="xl" 
          style={{
            background: 'linear-gradient(135deg, #ef4444 0%, #f87171 100%)',
            color: 'var(--primary-foreground)'
          }}
        >
          <Container>
            <div className="max-w-3xl mx-auto text-center">
              <h2
                style={{
                  fontFamily: 'Lexend, sans-serif',
                  fontSize: 'var(--text-h1)',
                  fontWeight: 'var(--font-weight-bold)',
                  lineHeight: '1.2',
                  letterSpacing: '-0.02em',
                  marginBottom: '16px',
                  color: 'var(--primary-foreground)'
                }}
              >
                {error404CTA.title}
              </h2>

              <p
                style={{
                  fontFamily: 'Lexend, sans-serif',
                  fontSize: 'var(--text-lg)',
                  lineHeight: '1.7',
                  color: 'rgba(255, 255, 255, 0.9)',
                  marginBottom: '32px'
                }}
              >
                {error404CTA.description}
              </p>

              <Buttons alignment="center" gap="md">
                <Button 
                  page={error404CTA.buttons[0].page as any} 
                  size="lg"
                  variant="default"
                  style={{
                    backgroundColor: 'var(--primary-foreground)',
                    color: '#ef4444'
                  }}
                >
                  {error404CTA.buttons[0].text}
                </Button>
                <Button 
                  page={error404CTA.buttons[1].page as any} 
                  size="lg"
                  variant="outline"
                  style={{
                    borderColor: 'var(--primary-foreground)',
                    color: 'var(--primary-foreground)'
                  }}
                >
                  {error404CTA.buttons[1].text}
                </Button>
              </Buttons>
            </div>
          </Container>
        </Section>
      </main>

      <SiteFooter />
      <BackToTopButton />
    </>
  );
}
