/**
 * About Template
 * 
 * WordPress template: templates/page-about.html
 * 
 * About page showcasing company story, mission, values, and timeline.
 * Pattern order: Breadcrumbs → Hero → Story → Mission/Vision → Values → Stats → Timeline → Expertise → FAQs → CTA
 */

import { SiteHeader } from '../parts/SiteHeader';
import { SiteFooter } from '../parts/SiteFooter';
import { SkipLink } from '../common/SkipLink';
import { Container } from '../common/Container';
import { Section } from '../common/Section';
import { Breadcrumbs } from '../common/Breadcrumbs';
import { BackToTopButton } from '../blocks/layout/BackToTopButton';
import { RouteAnnouncer } from '../blocks/utility/RouteAnnouncer';
import { FAQSection } from '../patterns/FAQSection';
import { CTASection } from '../patterns/CTASection';
import { Hero } from '../patterns/Hero';
import { StatsGrid } from '../patterns/StatsGrid';
import { Timeline } from '../patterns/Timeline';
import { Buttons, Button } from '../blocks/design/Buttons';
import { 
  Heart,
  Award,
  Users,
  Globe,
  Target,
  Lightbulb,
  TrendingUp,
  Code,
  Zap,
  Shield,
  CheckCircle
} from 'lucide-react';

// Import centralized data
import {
  aboutPageHero,
  aboutPageStory,
  aboutPageMissionVision,
  aboutPageValues,
  aboutPageStats,
  aboutPageTimeline,
  aboutPageExpertise,
  aboutPageFAQs,
  aboutPageCTA
} from '../../data/about-page';

export function AboutTemplate() {
  return (
    <>
      <RouteAnnouncer />
      <SkipLink />
      <SiteHeader />
      
      <main id="main-content" role="main">
        {/* Breadcrumbs */}
        <section 
          style={{
            backgroundColor: 'var(--background)',
            paddingTop: 'var(--spacing-4)',
            paddingBottom: 'var(--spacing-4)',
          }}
        >
          <Container>
            <Breadcrumbs 
              items={[
                { label: 'Home', href: '/' },
                { label: 'About Us' }
              ]}
            />
          </Container>
        </section>

        {/* Hero Section */}
        <Hero
          variant="page"
          align="center"
          maxWidth="4xl"
          gradient="blue"
          spacing="xl"
          badge={{
            icon: Heart,
            text: 'ABOUT LIGHTSPEED'
          }}
          title="Web Design, Development & Workflow You Can Trust"
          titleHighlight="Trust"
          description={aboutPageHero.description}
          stats={aboutPageHero.stats.map(stat => {
            const icons = { Award, Users, Globe };
            const Icon = icons[stat.icon as keyof typeof icons];
            return {
              icon: Icon,
              value: stat.value,
              label: stat.label
            };
          })}
        />

        {/* Story Section */}
        <Section spacing="xl" style={{ backgroundColor: 'var(--background)' }}>
          <Container>
            <div className="wp-max-w-4xl">
              <div className="wp-text-center" style={{ marginBottom: 'var(--spacing-16)' }}>
                <h2
                  style={{
                    fontFamily: 'var(--font-primary)',
                    fontSize: 'var(--text-h1)',
                    fontWeight: 'var(--font-weight-bold)',
                    lineHeight: '1.2',
                    letterSpacing: '-0.02em',
                    marginBottom: 'var(--spacing-4)',
                    color: 'var(--foreground)'
                  }}
                >
                  {aboutPageStory.title}
                </h2>

                <p
                  style={{
                    fontFamily: 'var(--font-primary)',
                    fontSize: 'var(--text-lg)',
                    lineHeight: '1.7',
                    color: 'var(--muted-foreground)'
                  }}
                >
                  {aboutPageStory.subtitle}
                </p>
              </div>

              <div style={{ display: 'flex', flexDirection: 'column', gap: 'var(--spacing-8)' }}>
                {aboutPageStory.content.map((item, index) => (
                  <div
                    key={index}
                    style={{
                      padding: 'var(--spacing-8)',
                      backgroundColor: 'var(--card)',
                      borderRadius: 'var(--radius-lg)',
                      border: '1px solid var(--border-soft)'
                    }}
                  >
                    <h3
                      style={{
                        fontFamily: 'var(--font-primary)',
                        fontSize: 'var(--text-xl)',
                        fontWeight: 'var(--font-weight-bold)',
                        color: 'var(--foreground)',
                        marginBottom: 'var(--spacing-3)'
                      }}
                    >
                      {item.heading}
                    </h3>
                    <p
                      style={{
                        fontFamily: 'var(--font-primary)',
                        fontSize: 'var(--text-base)',
                        lineHeight: '1.7',
                        color: 'var(--muted-foreground)'
                      }}
                    >
                      {item.text}
                    </p>
                  </div>
                ))}
              </div>
            </div>
          </Container>
        </Section>

        {/* Mission/Vision Section */}
        <Section spacing="xl" style={{ backgroundColor: 'var(--muted)' }}>
          <Container>
            <div className="wp-max-w-6xl">
              <div className="wp-text-center" style={{ marginBottom: 'var(--spacing-16)' }}>
                <h2
                  style={{
                    fontFamily: 'var(--font-primary)',
                    fontSize: 'var(--text-h1)',
                    fontWeight: 'var(--font-weight-bold)',
                    lineHeight: '1.2',
                    letterSpacing: '-0.02em',
                    marginBottom: 'var(--spacing-4)',
                    color: 'var(--foreground)'
                  }}
                >
                  Our Mission & Vision
                </h2>

                <p
                  style={{
                    fontFamily: 'var(--font-primary)',
                    fontSize: 'var(--text-lg)',
                    lineHeight: '1.7',
                    color: 'var(--muted-foreground)'
                  }}
                >
                  The principles that guide our work and define our future
                </p>
              </div>

              <div className="wp-grid-2-cols">
                {/* Mission */}
                <div
                  style={{
                    padding: '40px',
                    backgroundColor: 'var(--card)',
                    borderRadius: 'var(--radius-lg)',
                    border: '1px solid var(--border-soft)'
                  }}
                >
                  <div
                    style={{
                      width: '56px',
                      height: '56px',
                      borderRadius: 'var(--radius-lg)',
                      backgroundColor: 'var(--primary-soft)',
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'center',
                      marginBottom: '20px'
                    }}
                  >
                    <Target size={28} style={{ color: 'var(--primary)' }} />
                  </div>

                  <h3
                    style={{
                      fontFamily: 'var(--font-primary)',
                      fontSize: 'var(--text-h3)',
                      fontWeight: 'var(--font-weight-bold)',
                      color: 'var(--foreground)',
                      marginBottom: 'var(--spacing-3)'
                    }}
                  >
                    {aboutPageMissionVision.mission.title}
                  </h3>
                  <p
                    style={{
                      fontFamily: 'var(--font-primary)',
                      fontSize: 'var(--text-base)',
                      lineHeight: '1.7',
                      color: 'var(--muted-foreground)'
                    }}
                  >
                    {aboutPageMissionVision.mission.description}
                  </p>
                </div>

                {/* Vision */}
                <div
                  style={{
                    padding: '40px',
                    backgroundColor: 'var(--card)',
                    borderRadius: 'var(--radius-lg)',
                    border: '1px solid var(--border-soft)'
                  }}
                >
                  <div
                    style={{
                      width: '56px',
                      height: '56px',
                      borderRadius: 'var(--radius-lg)',
                      backgroundColor: 'var(--primary-soft)',
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'center',
                      marginBottom: '20px'
                    }}
                  >
                    <Lightbulb size={28} style={{ color: 'var(--primary)' }} />
                  </div>

                  <h3
                    style={{
                      fontFamily: 'var(--font-primary)',
                      fontSize: 'var(--text-h3)',
                      fontWeight: 'var(--font-weight-bold)',
                      color: 'var(--foreground)',
                      marginBottom: 'var(--spacing-3)'
                    }}
                  >
                    {aboutPageMissionVision.vision.title}
                  </h3>
                  <p
                    style={{
                      fontFamily: 'var(--font-primary)',
                      fontSize: 'var(--text-base)',
                      lineHeight: '1.7',
                      color: 'var(--muted-foreground)'
                    }}
                  >
                    {aboutPageMissionVision.vision.description}
                  </p>
                </div>
              </div>
            </div>
          </Container>
        </Section>

        {/* Core Values Section */}
        <Section spacing="xl" style={{ backgroundColor: 'var(--background)' }}>
          <Container>
            <div className="wp-max-w-6xl">
              <div className="wp-text-center" style={{ marginBottom: 'var(--spacing-16)' }}>
                <h2
                  style={{
                    fontFamily: 'var(--font-primary)',
                    fontSize: 'var(--text-h1)',
                    fontWeight: 'var(--font-weight-bold)',
                    lineHeight: '1.2',
                    letterSpacing: '-0.02em',
                    marginBottom: 'var(--spacing-4)',
                    color: 'var(--foreground)'
                  }}
                >
                  Our Core Values
                </h2>

                <p
                  style={{
                    fontFamily: 'var(--font-primary)',
                    fontSize: 'var(--text-lg)',
                    lineHeight: '1.7',
                    color: 'var(--muted-foreground)'
                  }}
                >
                  The principles that define how we work and deliver results
                </p>
              </div>

              <div className="wp-grid-3-cols">
                {aboutPageValues.map((value, index) => {
                  const Icon = value.icon;
                  return (
                    <div
                      key={index}
                      style={{
                        padding: 'var(--spacing-8)',
                        backgroundColor: 'var(--card)',
                        borderRadius: 'var(--radius-lg)',
                        border: '1px solid var(--border-soft)',
                        transition: 'all 0.3s ease'
                      }}
                      onMouseEnter={(e) => {
                        e.currentTarget.style.transform = 'translateY(-4px)';
                        e.currentTarget.style.boxShadow = '0 10px 30px rgba(0,0,0,0.1)';
                        e.currentTarget.style.borderColor = 'var(--primary)';
                      }}
                      onMouseLeave={(e) => {
                        e.currentTarget.style.transform = 'translateY(0)';
                        e.currentTarget.style.boxShadow = 'none';
                        e.currentTarget.style.borderColor = 'var(--border-soft)';
                      }}
                    >
                      <div
                        style={{
                          width: '48px',
                          height: '48px',
                          borderRadius: 'var(--radius-lg)',
                          backgroundColor: 'var(--primary-soft)',
                          display: 'flex',
                          alignItems: 'center',
                          justifyContent: 'center',
                          marginBottom: 'var(--spacing-4)'
                        }}
                      >
                        <Icon size={24} style={{ color: 'var(--primary)' }} />
                      </div>

                      <h3
                        style={{
                          fontFamily: 'var(--font-primary)',
                          fontSize: 'var(--text-xl)',
                          fontWeight: 'var(--font-weight-bold)',
                          color: 'var(--foreground)',
                          marginBottom: 'var(--spacing-2)'
                        }}
                      >
                        {value.title}
                      </h3>
                      <p
                        style={{
                          fontFamily: 'var(--font-primary)',
                          fontSize: 'var(--text-small)',
                          lineHeight: '1.6',
                          color: 'var(--muted-foreground)'
                        }}
                      >
                        {value.description}
                      </p>
                    </div>
                  );
                })}
              </div>
            </div>
          </Container>
        </Section>

        {/* Stats Section */}
        <Section spacing="xl" style={{ backgroundColor: 'var(--muted)' }}>
          <Container>
            <div className="wp-max-w-6xl">
              <div className="wp-text-center" style={{ marginBottom: 'var(--spacing-16)' }}>
                <h2
                  style={{
                    fontFamily: 'var(--font-primary)',
                    fontSize: 'var(--text-h1)',
                    fontWeight: 'var(--font-weight-bold)',
                    lineHeight: '1.2',
                    letterSpacing: '-0.02em',
                    marginBottom: 'var(--spacing-4)',
                    color: 'var(--foreground)'
                  }}
                >
                  LightSpeed by the Numbers
                </h2>

                <p
                  style={{
                    fontFamily: 'var(--font-primary)',
                    fontSize: 'var(--text-lg)',
                    lineHeight: '1.7',
                    color: 'var(--muted-foreground)'
                  }}
                >
                  Our track record speaks for itself
                </p>
              </div>

              <StatsGrid
                stats={aboutPageStats}
                variant="cards"
                columns={3}
                iconSize="lg"
              />
            </div>
          </Container>
        </Section>

        {/* Timeline Section */}
        <Section spacing="xl" style={{ backgroundColor: 'var(--background)' }}>
          <Container>
            <div className="wp-max-w-4xl">
              <div className="wp-text-center" style={{ marginBottom: 'var(--spacing-16)' }}>
                <h2
                  style={{
                    fontFamily: 'var(--font-primary)',
                    fontSize: 'var(--text-h1)',
                    fontWeight: 'var(--font-weight-bold)',
                    lineHeight: '1.2',
                    letterSpacing: '-0.02em',
                    marginBottom: 'var(--spacing-4)',
                    color: 'var(--foreground)'
                  }}
                >
                  Our Journey
                </h2>

                <p
                  style={{
                    fontFamily: 'var(--font-primary)',
                    fontSize: 'var(--text-lg)',
                    lineHeight: '1.7',
                    color: 'var(--muted-foreground)'
                  }}
                >
                  Key milestones in LightSpeed's 22+ year history
                </p>
              </div>

              <Timeline
                items={aboutPageTimeline}
                variant="cards"
                dotSize="lg"
              />
            </div>
          </Container>
        </Section>

        {/* Expertise Section */}
        <Section spacing="xl" style={{ backgroundColor: 'var(--muted)' }}>
          <Container>
            <div className="wp-max-w-6xl">
              <div className="wp-text-center" style={{ marginBottom: 'var(--spacing-16)' }}>
                <h2
                  style={{
                    fontFamily: 'var(--font-primary)',
                    fontSize: 'var(--text-h1)',
                    fontWeight: 'var(--font-weight-bold)',
                    lineHeight: '1.2',
                    letterSpacing: '-0.02em',
                    marginBottom: 'var(--spacing-4)',
                    color: 'var(--foreground)'
                  }}
                >
                  Our Expertise
                </h2>

                <p
                  style={{
                    fontFamily: 'var(--font-primary)',
                    fontSize: 'var(--text-lg)',
                    lineHeight: '1.7',
                    color: 'var(--muted-foreground)'
                  }}
                >
                  Specialized knowledge in key industries and platforms
                </p>
              </div>

              <div className="wp-grid-3-cols">
                {aboutPageExpertise.map((area, index) => {
                  const Icon = area.icon;
                  return (
                    <div
                      key={index}
                      style={{
                        padding: 'var(--spacing-8)',
                        backgroundColor: 'var(--card)',
                        borderRadius: 'var(--radius-lg)',
                        border: '1px solid var(--border-soft)'
                      }}
                    >
                      <div
                        style={{
                          width: '56px',
                          height: '56px',
                          borderRadius: 'var(--radius-lg)',
                          backgroundColor: 'var(--primary-soft)',
                          display: 'flex',
                          alignItems: 'center',
                          justifyContent: 'center',
                          marginBottom: 'var(--spacing-5)'
                        }}
                      >
                        <Icon size={28} style={{ color: 'var(--primary)' }} />
                      </div>

                      <h3
                        style={{
                          fontFamily: 'var(--font-primary)',
                          fontSize: 'var(--text-xl)',
                          fontWeight: 'var(--font-weight-bold)',
                          color: 'var(--foreground)',
                          marginBottom: 'var(--spacing-3)'
                        }}
                      >
                        {area.title}
                      </h3>
                      <p
                        style={{
                          fontFamily: 'var(--font-primary)',
                          fontSize: 'var(--text-base)',
                          lineHeight: '1.6',
                          color: 'var(--muted-foreground)'
                        }}
                      >
                        {area.description}
                      </p>
                    </div>
                  );
                })}
              </div>
            </div>
          </Container>
        </Section>

        {/* FAQ Section */}
        <Section spacing="xl" style={{ backgroundColor: 'var(--background)' }}>
          <Container>
            <div className="wp-max-w-3xl">
              <div className="wp-text-center" style={{ marginBottom: 'var(--spacing-12)' }}>
                <h2
                  style={{
                    fontFamily: 'var(--font-primary)',
                    fontSize: 'var(--text-h2)',
                    fontWeight: 'var(--font-weight-semibold)',
                    color: 'var(--foreground)',
                    marginBottom: 'var(--spacing-4)',
                    lineHeight: 'var(--line-height-snug)'
                  }}
                >
                  Frequently Asked Questions
                </h2>
                <p
                  style={{
                    fontFamily: 'var(--font-primary)',
                    fontSize: 'var(--text-lg)',
                    color: 'var(--muted-foreground)',
                    lineHeight: '1.7'
                  }}
                >
                  Learn more about LightSpeed and how we work
                </p>
              </div>

              <FAQSection 
                faqs={aboutPageFAQs}
                openFaq={null}
                setOpenFaq={() => {}}
              />
            </div>
          </Container>
        </Section>

        {/* CTA Section */}
        <CTASection
          title={aboutPageCTA.title}
          description={aboutPageCTA.description}
          primaryButtonText={aboutPageCTA.buttons[0].text}
          primaryButtonPage={aboutPageCTA.buttons[0].page}
          secondaryButtonText={aboutPageCTA.buttons[1].text}
          secondaryButtonPage={aboutPageCTA.buttons[1].page}
          gradient="blue"
        />
      </main>

      <SiteFooter />
      <BackToTopButton />
    </>
  );
}