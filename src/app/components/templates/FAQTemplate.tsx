/**
 * FAQ Page Template
 * 
 * WordPress template: templates/page-faq.html
 * 
 * Pattern order: Breadcrumbs → Hero → Stats → FAQ Categories → CTA
 */

import { SiteHeader } from '../parts/SiteHeader';
import { SiteFooter } from '../parts/SiteFooter';
import { SkipLink } from '../common/SkipLink';
import { Container } from '../common/Container';
import { Section } from '../common/Section';
import { Breadcrumbs } from '../common/Breadcrumbs';
import { BackToTopButton } from '../blocks/layout/BackToTopButton';
import { RouteAnnouncer } from '../blocks/utility/RouteAnnouncer';
import { Buttons, Button } from '../blocks/design/Buttons';
import { 
  HelpCircle,
  ChevronDown
} from 'lucide-react';
import { useState } from 'react';

// Import centralized data
import {
  faqPageHero,
  faqCategories,
  faqStats,
  faqCTA
} from '../../data/faq-page';

export function FAQTemplate() {
  const [openFAQs, setOpenFAQs] = useState<Record<string, boolean>>({});

  const toggleFAQ = (categoryId: string, questionIndex: number) => {
    const key = `${categoryId}-${questionIndex}`;
    setOpenFAQs(prev => ({
      ...prev,
      [key]: !prev[key]
    }));
  };

  return (
    <>
      <RouteAnnouncer />
      <SkipLink />
      <SiteHeader />
      
      <main id="main-content" role="main">
        {/* Breadcrumbs */}
        <section 
          className="py-4"
          style={{
            backgroundColor: 'var(--background)',
            borderBottom: '1px solid var(--border-soft)'
          }}
        >
          <Container>
            <Breadcrumbs 
              items={[
                { label: 'Home', href: '/' },
                { label: faqPageHero.title }
              ]}
            />
          </Container>
        </section>

        {/* Hero Section */}
        <Section 
          spacing="xl"
          style={{
            background: 'linear-gradient(135deg, #0891b2 0%, #06b6d4 100%)',
            color: 'var(--primary-foreground)',
            position: 'relative',
            overflow: 'hidden'
          }}
        >
          {/* Gradient orb decorations */}
          <div
            className="absolute top-0 right-0 w-96 h-96 rounded-full"
            style={{
              background: 'radial-gradient(circle, rgba(6, 182, 212, 0.3) 0%, transparent 70%)',
              filter: 'blur(80px)',
              transform: 'translate(30%, -30%)'
            }}
          />

          <Container>
            <div className="max-w-4xl mx-auto text-center relative z-10">
              <div
                className="inline-block px-4 py-2 mb-6"
                style={{
                  backgroundColor: 'rgba(255, 255, 255, 0.15)',
                  backdropFilter: 'blur(10px)',
                  borderRadius: 'var(--radius-full)',
                  border: '1px solid rgba(255, 255, 255, 0.2)',
                  fontSize: 'var(--text-small)',
                  fontFamily: 'Manrope, sans-serif',
                  fontWeight: 'var(--font-weight-semibold)',
                  textTransform: 'uppercase',
                  letterSpacing: '0.1em'
                }}
              >
                <HelpCircle size={14} style={{ display: 'inline', marginRight: '8px' }} />
                {faqPageHero.badge.text}
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
                Frequently Asked <span style={{ 
                  background: 'linear-gradient(135deg, #fbbf24 0%, #f59e0b 100%)',
                  WebkitBackgroundClip: 'text',
                  WebkitTextFillColor: 'transparent',
                  backgroundClip: 'text'
                }}>Questions</span>
              </h1>

              <p
                style={{
                  fontFamily: 'Lexend, sans-serif',
                  fontSize: 'var(--text-xl)',
                  lineHeight: '1.6',
                  color: 'rgba(255, 255, 255, 0.95)',
                  marginBottom: '16px',
                  maxWidth: '700px',
                  margin: '0 auto 16px'
                }}
              >
                {faqPageHero.tagline}
              </p>

              <p
                style={{
                  fontFamily: 'Lexend, sans-serif',
                  fontSize: 'var(--text-lg)',
                  lineHeight: '1.7',
                  color: 'rgba(255, 255, 255, 0.85)',
                  maxWidth: '700px',
                  margin: '0 auto'
                }}
              >
                {faqPageHero.description}
              </p>
            </div>
          </Container>
        </Section>

        {/* Stats Section */}
        <Section spacing="lg" style={{ backgroundColor: 'var(--background)' }}>
          <Container>
            <div className="max-w-5xl mx-auto">
              <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
                <div
                  className="text-center"
                  style={{
                    padding: '24px',
                    backgroundColor: 'var(--card)',
                    borderRadius: 'var(--radius-lg)',
                    border: '1px solid var(--border-soft)'
                  }}
                >
                  <div
                    style={{
                      fontFamily: 'Lexend, sans-serif',
                      fontSize: 'var(--text-h2)',
                      fontWeight: 'var(--font-weight-bold)',
                      marginBottom: '4px',
                      color: '#0891b2'
                    }}
                  >
                    {faqStats.totalQuestions}+
                  </div>
                  <div
                    style={{
                      fontFamily: 'Manrope, sans-serif',
                      fontSize: 'var(--text-small)',
                      color: 'var(--muted-foreground)'
                    }}
                  >
                    Questions Answered
                  </div>
                </div>

                <div
                  className="text-center"
                  style={{
                    padding: '24px',
                    backgroundColor: 'var(--card)',
                    borderRadius: 'var(--radius-lg)',
                    border: '1px solid var(--border-soft)'
                  }}
                >
                  <div
                    style={{
                      fontFamily: 'Lexend, sans-serif',
                      fontSize: 'var(--text-h2)',
                      fontWeight: 'var(--font-weight-bold)',
                      marginBottom: '4px',
                      color: '#0891b2'
                    }}
                  >
                    {faqStats.categories}
                  </div>
                  <div
                    style={{
                      fontFamily: 'Manrope, sans-serif',
                      fontSize: 'var(--text-small)',
                      color: 'var(--muted-foreground)'
                    }}
                  >
                    Categories
                  </div>
                </div>

                <div
                  className="text-center"
                  style={{
                    padding: '24px',
                    backgroundColor: 'var(--card)',
                    borderRadius: 'var(--radius-lg)',
                    border: '1px solid var(--border-soft)'
                  }}
                >
                  <div
                    style={{
                      fontFamily: 'Lexend, sans-serif',
                      fontSize: 'var(--text-h2)',
                      fontWeight: 'var(--font-weight-bold)',
                      marginBottom: '4px',
                      color: '#0891b2'
                    }}
                  >
                    {faqStats.avgResponseTime}
                  </div>
                  <div
                    style={{
                      fontFamily: 'Manrope, sans-serif',
                      fontSize: 'var(--text-small)',
                      color: 'var(--muted-foreground)'
                    }}
                  >
                    Avg Response Time
                  </div>
                </div>

                <div
                  className="text-center"
                  style={{
                    padding: '24px',
                    backgroundColor: 'var(--card)',
                    borderRadius: 'var(--radius-lg)',
                    border: '1px solid var(--border-soft)'
                  }}
                >
                  <div
                    style={{
                      fontFamily: 'Lexend, sans-serif',
                      fontSize: 'var(--text-h2)',
                      fontWeight: 'var(--font-weight-bold)',
                      marginBottom: '4px',
                      color: '#0891b2'
                    }}
                  >
                    {faqStats.satisfaction}
                  </div>
                  <div
                    style={{
                      fontFamily: 'Manrope, sans-serif',
                      fontSize: 'var(--text-small)',
                      color: 'var(--muted-foreground)'
                    }}
                  >
                    Satisfaction Rate
                  </div>
                </div>
              </div>
            </div>
          </Container>
        </Section>

        {/* FAQ Categories Section */}
        <Section spacing="xl" style={{ backgroundColor: 'var(--muted)' }}>
          <Container>
            <div className="max-w-5xl mx-auto">
              <div className="space-y-12">
                {faqCategories.map((category) => {
                  const Icon = category.icon;
                  return (
                    <div key={category.id}>
                      {/* Category Header */}
                      <div
                        className="mb-8"
                        style={{
                          display: 'flex',
                          alignItems: 'center',
                          gap: '16px',
                          paddingBottom: '16px',
                          borderBottom: '2px solid var(--border)'
                        }}
                      >
                        <div
                          style={{
                            width: '48px',
                            height: '48px',
                            borderRadius: 'var(--radius)',
                            backgroundColor: 'rgba(8, 145, 178, 0.1)',
                            display: 'flex',
                            alignItems: 'center',
                            justifyContent: 'center'
                          }}
                        >
                          <Icon size={24} style={{ color: '#0891b2' }} />
                        </div>

                        <div>
                          <h2
                            style={{
                              fontFamily: 'Lexend, sans-serif',
                              fontSize: 'var(--text-h3)',
                              fontWeight: 'var(--font-weight-bold)',
                              color: 'var(--foreground)',
                              marginBottom: '4px'
                            }}
                          >
                            {category.title}
                          </h2>
                          <p
                            style={{
                              fontFamily: 'Lexend, sans-serif',
                              fontSize: 'var(--text-small)',
                              color: 'var(--muted-foreground)'
                            }}
                          >
                            {category.description}
                          </p>
                        </div>
                      </div>

                      {/* FAQs */}
                      <div className="space-y-4">
                        {category.faqs.map((faq, index) => {
                          const key = `${category.id}-${index}`;
                          const isOpen = openFAQs[key];

                          return (
                            <div
                              key={index}
                              style={{
                                backgroundColor: 'var(--card)',
                                borderRadius: 'var(--radius-lg)',
                                border: '1px solid var(--border-soft)',
                                overflow: 'hidden'
                              }}
                            >
                              <button
                                onClick={() => toggleFAQ(category.id, index)}
                                style={{
                                  width: '100%',
                                  padding: '20px 24px',
                                  display: 'flex',
                                  alignItems: 'center',
                                  justifyContent: 'space-between',
                                  gap: '16px',
                                  backgroundColor: 'transparent',
                                  border: 'none',
                                  cursor: 'pointer',
                                  textAlign: 'left'
                                }}
                                aria-expanded={isOpen}
                              >
                                <h3
                                  style={{
                                    fontFamily: 'Lexend, sans-serif',
                                    fontSize: 'var(--text-lg)',
                                    fontWeight: 'var(--font-weight-semibold)',
                                    color: 'var(--foreground)',
                                    margin: 0
                                  }}
                                >
                                  {faq.question}
                                </h3>

                                <ChevronDown
                                  size={20}
                                  style={{
                                    color: '#0891b2',
                                    flexShrink: 0,
                                    transition: 'transform 0.3s ease',
                                    transform: isOpen ? 'rotate(180deg)' : 'rotate(0deg)'
                                  }}
                                />
                              </button>

                              {isOpen && (
                                <div
                                  style={{
                                    padding: '0 24px 24px 24px',
                                    borderTop: '1px solid var(--border-soft)'
                                  }}
                                >
                                  <p
                                    style={{
                                      fontFamily: 'Lexend, sans-serif',
                                      fontSize: 'var(--text-base)',
                                      lineHeight: '1.7',
                                      color: 'var(--muted-foreground)',
                                      marginTop: '16px',
                                      margin: '16px 0 0 0'
                                    }}
                                  >
                                    {faq.answer}
                                  </p>
                                </div>
                              )}
                            </div>
                          );
                        })}
                      </div>
                    </div>
                  );
                })}
              </div>
            </div>
          </Container>
        </Section>

        {/* CTA Section */}
        <Section 
          spacing="xl" 
          style={{
            background: 'linear-gradient(135deg, #0891b2 0%, #06b6d4 100%)',
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
                {faqCTA.title}
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
                {faqCTA.description}
              </p>

              <Buttons alignment="center" gap="md">
                <Button 
                  page={faqCTA.buttons[0].page as any} 
                  size="lg"
                  variant="default"
                  style={{
                    backgroundColor: 'var(--primary-foreground)',
                    color: '#0891b2'
                  }}
                >
                  {faqCTA.buttons[0].text}
                </Button>
                <Button 
                  page={faqCTA.buttons[1].page as any} 
                  size="lg"
                  variant="outline"
                  style={{
                    borderColor: 'var(--primary-foreground)',
                    color: 'var(--primary-foreground)'
                  }}
                >
                  {faqCTA.buttons[1].text}
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
