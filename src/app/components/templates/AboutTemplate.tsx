/**
 * About Template
 * 
 * WordPress template: templates/page-about.html
 * 
 * About page showcasing company story, mission, values, and timeline.
 * Pattern order: Breadcrumbs → Hero → Story → Mission/Vision → Values → Stats → Timeline → Expertise → FAQs → CTA
 */

import { Container } from '../common/Container';
import { Section } from '../common/Section';
import { Breadcrumbs } from '../common/Breadcrumbs';
import { FAQSection } from '../patterns/FAQSection';
import { CTASection } from '../patterns/CTASection';
import { Hero } from '../patterns/Hero';
import { StatsGrid } from '../patterns/StatsGrid';
import { Timeline } from '../patterns/Timeline';
import { Heading } from '../blocks/text/Heading';
import { Paragraph } from '../blocks/text/Paragraph';
import { 
  Heart,
  Award,
  Users,
  Globe,
  Target,
  Lightbulb
} from 'lucide-react';
import '@/styles/templates/page-about.css';

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
      {/* Breadcrumbs */}
      <section className="wp-block-breadcrumbs-section">
        <Breadcrumbs 
          items={[
            { label: 'Home', href: '/' },
            { label: 'About Us' }
          ]}
        />
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
        className="about-page__hero"
      />

      {/* Story Section */}
      <Section spacing="xl" className="about-page__story-section">
        <Container>
          <div className="wp-max-w-4xl wp-mx-auto">
            <div className="about-page__section-header">
              <Heading level={2} className="about-page__section-title">
                {aboutPageStory.title}
              </Heading>

              <Paragraph className="about-page__section-desc">
                {aboutPageStory.subtitle}
              </Paragraph>
            </div>

            <div className="about-page__story-content">
              {aboutPageStory.content.map((item, index) => (
                <div
                  key={index}
                  className="about-page__story-card"
                >
                  <Heading level={3} className="about-page__story-card-title">
                    {item.heading}
                  </Heading>
                  <Paragraph className="about-page__story-card-text">
                    {item.text}
                  </Paragraph>
                </div>
              ))}
            </div>
          </div>
        </Container>
      </Section>

      {/* Mission/Vision Section */}
      <Section spacing="xl" className="about-page__mission-section">
        <Container>
          <div className="wp-max-w-6xl wp-mx-auto">
            <div className="about-page__section-header">
              <Heading level={2} className="about-page__section-title">
                Our Mission & Vision
              </Heading>

              <Paragraph className="about-page__section-desc">
                The principles that guide our work and define our future
              </Paragraph>
            </div>

            <div className="about-page__mission-grid">
              {/* Mission */}
              <div className="about-page__mission-card">
                <div className="about-page__icon-wrapper">
                  <Target size={28} />
                </div>

                <Heading level={3} className="about-page__card-title">
                  {aboutPageMissionVision.mission.title}
                </Heading>
                <Paragraph className="about-page__card-desc">
                  {aboutPageMissionVision.mission.description}
                </Paragraph>
              </div>

              {/* Vision */}
              <div className="about-page__mission-card">
                <div className="about-page__icon-wrapper">
                  <Lightbulb size={28} />
                </div>

                <Heading level={3} className="about-page__card-title">
                  {aboutPageMissionVision.vision.title}
                </Heading>
                <Paragraph className="about-page__card-desc">
                  {aboutPageMissionVision.vision.description}
                </Paragraph>
              </div>
            </div>
          </div>
        </Container>
      </Section>

      {/* Core Values Section */}
      <Section spacing="xl" className="about-page__values-section">
        <Container>
          <div className="wp-max-w-6xl wp-mx-auto">
            <div className="about-page__section-header">
              <Heading level={2} className="about-page__section-title">
                Our Core Values
              </Heading>

              <Paragraph className="about-page__section-desc">
                The principles that define how we work and deliver results
              </Paragraph>
            </div>

            <div className="about-page__values-grid">
              {aboutPageValues.map((value, index) => {
                const Icon = value.icon;
                return (
                  <div
                    key={index}
                    className="about-page__value-card"
                  >
                    <div className="about-page__icon-wrapper">
                      <Icon size={24} />
                    </div>

                    <Heading level={3} className="about-page__card-title">
                      {value.title}
                    </Heading>
                    <Paragraph className="about-page__card-desc">
                      {value.description}
                    </Paragraph>
                  </div>
                );
              })}
            </div>
          </div>
        </Container>
      </Section>

      {/* Stats Section */}
      <Section spacing="xl" className="about-page__stats-section">
        <Container>
          <div className="wp-max-w-6xl wp-mx-auto">
            <div className="about-page__section-header">
              <Heading level={2} className="about-page__section-title">
                LightSpeed by the Numbers
              </Heading>

              <Paragraph className="about-page__section-desc">
                Our track record speaks for itself
              </Paragraph>
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
      <Section spacing="xl" className="about-page__timeline-section">
        <Container>
          <div className="wp-max-w-4xl wp-mx-auto">
            <div className="about-page__section-header">
              <Heading level={2} className="about-page__section-title">
                Our Journey
              </Heading>

              <Paragraph className="about-page__section-desc">
                Key milestones in LightSpeed's 22+ year history
              </Paragraph>
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
      <Section spacing="xl" className="about-page__expertise-section">
        <Container>
          <div className="wp-max-w-6xl wp-mx-auto">
            <div className="about-page__section-header">
              <Heading level={2} className="about-page__section-title">
                Our Expertise
              </Heading>

              <Paragraph className="about-page__section-desc">
                Specialized knowledge in key industries and platforms
              </Paragraph>
            </div>

            <div className="about-page__expertise-grid">
              {aboutPageExpertise.map((area, index) => {
                const Icon = area.icon;
                return (
                  <div
                    key={index}
                    className="about-page__expertise-card"
                  >
                    <div className="about-page__icon-wrapper">
                      <Icon size={28} />
                    </div>

                    <Heading level={3} className="about-page__card-title">
                      {area.title}
                    </Heading>
                    <Paragraph className="about-page__card-desc">
                      {area.description}
                    </Paragraph>
                  </div>
                );
              })}
            </div>
          </div>
        </Container>
      </Section>

      {/* FAQ Section */}
      <Section spacing="xl" className="about-page__faq-section">
        <Container>
          <div className="about-page__faq-container">
            <div className="about-page__section-header">
              <Heading level={2} className="about-page__section-title">
                Frequently Asked Questions
              </Heading>
              <Paragraph className="about-page__section-desc">
                Learn more about LightSpeed and how we work
              </Paragraph>
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
        primaryButtonPage={aboutPageCTA.buttons[0].page as any}
        secondaryButtonText={aboutPageCTA.buttons[1].text}
        secondaryButtonPage={aboutPageCTA.buttons[1].page as any}
        gradient="blue"
      />
    </>
  );
}