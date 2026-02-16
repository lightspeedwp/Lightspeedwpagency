/**
 * Team Page Template
 * 
 * WordPress template: templates/page-team.html
 * 
 * All styling in /src/styles/templates/team-page.css (user-editable)
 * 
 * Team page showcasing LightSpeed team members and culture.
 * Pattern order: Breadcrumbs → Hero → Leadership → Team Grid → Culture → Stats → Departments → FAQs → CTA
 */

import { Container } from '../common/Container';
import { Section } from '../common/Section';
import { Breadcrumbs } from '../common/Breadcrumbs';
import { Hero } from '../patterns/Hero';
import { TeamGrid } from '../patterns/TeamGrid';
import { 
  Users,
  Globe,
  Award,
  Mail,
  CheckCircle
} from 'lucide-react';
import '@/styles/templates/team-page.css';

// Import centralized data
import {
  teamPageHero,
  teamPageMembers,
  teamPageCulture,
  teamPageStats,
  teamPageDepartments,
  teamPageFAQs,
  teamPageLeadership,
  teamPageCTA
} from '../../data/team-page';

export function TeamTemplate() {
  return (
    <>
      {/* Breadcrumbs */}
      <section className="wp-block-breadcrumbs-section">
        <Breadcrumbs 
          items={[
            { label: 'Home', href: '/' },
            { label: 'Team' }
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
          icon: Users,
          text: 'MEET OUR TEAM'
        }}
        title="The People Behind LightSpeed"
        titleHighlight="People"
        description={teamPageHero.description}
        stats={teamPageHero.stats.map(stat => {
          const icons = { Users, Globe, Award };
          const Icon = icons[stat.icon as keyof typeof icons];
          return {
            icon: Icon,
            value: stat.value,
            label: stat.label
          };
        })}
        className="team-page__hero"
      />

      {/* Leadership Section */}
      <Section spacing="xl" className="team-page__leadership-section">
        <Container>
          <div className="wp-max-w-6xl wp-mx-auto">
            {/* Section Header */}
            <div className="template-section-header">
              <Heading level={2} className="template-section-header__title">
                Our Leadership
              </Heading>
              <Paragraph className="template-section-header__description">
                Meet the team guiding LightSpeed's vision and growth
              </Paragraph>
            </div>

            {/* Leadership Grid */}
            <div className="team-page__leadership-grid">
              {teamPageLeadership.map((member, index) => (
                <div key={index} className="team-page__leadership-card">
                  <Heading level={3} className="team-page__leadership-name">
                    {member.name}
                  </Heading>

                  <Paragraph className="team-page__leadership-role">
                    {member.role}
                  </Paragraph>

                  <Paragraph className="team-page__leadership-bio">
                    {member.bio}
                  </Paragraph>

                  {/* Highlights */}
                  <div className="team-page__leadership-highlights">
                    {member.highlights.map((highlight, idx) => (
                      <div key={idx} className="team-page__leadership-highlight">
                        <CheckCircle size={16} className="team-page__leadership-highlight-icon" />
                        <span className="team-page__leadership-highlight-text">
                          {highlight}
                        </span>
                      </div>
                    ))}
                  </div>

                  {/* Email */}
                  <a
                    href={`mailto:${member.email}`}
                    className="team-page__leadership-email"
                  >
                    <Mail size={16} />
                    {member.email}
                  </a>
                </div>
              ))}
            </div>
          </div>
        </Container>
      </Section>

      {/* Full Team Grid */}
      <Section spacing="xl" className="team-page__full-team-section">
        <Container>
          <div className="wp-max-w-6xl wp-mx-auto">
            {/* Section Header */}
            <div className="template-section-header">
              <Heading level={2} className="template-section-header__title">
                Our Complete Team
              </Heading>
              <Paragraph className="template-section-header__description">
                11 WordPress experts dedicated to your success
              </Paragraph>
            </div>

            <TeamGrid members={teamPageMembers} />
          </div>
        </Container>
      </Section>

      {/* Culture & Values Section */}
      <Section spacing="xl" className="team-page__culture-section">
        <Container>
          <div className="wp-max-w-6xl wp-mx-auto">
            {/* Section Header */}
            <div className="template-section-header">
              <Heading level={2} className="template-section-header__title">
                Our Team Culture
              </Heading>
              <Paragraph className="template-section-header__description">
                The values that define how we work together
              </Paragraph>
            </div>

            {/* Values Grid */}
            <div className="team-page__values-grid">
              {teamPageCulture.map((value, index) => {
                const Icon = value.icon;
                return (
                  <div key={index} className="team-page__value-card">
                    <div className="team-page__value-icon">
                      <Icon size={28} />
                    </div>

                    <Heading level={3} className="team-page__value-title">
                      {value.title}
                    </Heading>

                    <Paragraph className="team-page__value-description">
                      {value.description}
                    </Paragraph>
                  </div>
                );
              })}
            </div>
          </div>
        </Container>
      </Section>

      {/* Team Stats Section */}
      <Section spacing="xl" className="team-page__stats-section">
        <Container>
          <div className="wp-max-w-6xl wp-mx-auto">
            {/* Section Header */}
            <div className="template-section-header">
              <Heading level={2} className="template-section-header__title">
                Team by the Numbers
              </Heading>
              <Paragraph className="template-section-header__description">
                Our team's expertise and reach
              </Paragraph>
            </div>

            {/* Stats Grid */}
            <div className="team-page__stats-grid">
              {teamPageStats.map((stat, index) => {
                const Icon = stat.icon;
                return (
                  <div key={index} className="team-page__stat-card">
                    <div className="team-page__stat-icon">
                      <Icon size={32} />
                    </div>

                    <div className="team-page__stat-value">
                      {stat.value}
                    </div>

                    <div className="team-page__stat-label">
                      {stat.label}
                    </div>

                    <Paragraph className="team-page__value-description">
                      {stat.description}
                    </Paragraph>
                  </div>
                );
              })}
            </div>
          </div>
        </Container>
      </Section>

      {/* Departments Section */}
      <Section spacing="xl" className="team-page__departments-section">
        <Container>
          <div className="wp-max-w-6xl wp-mx-auto">
            {/* Section Header */}
            <div className="template-section-header">
              <Heading level={2} className="template-section-header__title">
                Our Departments
              </Heading>
              <Paragraph className="template-section-header__description">
                Specialized teams working together for your success
              </Paragraph>
            </div>

            {/* Departments Grid */}
            <div className="team-page__departments-grid">
              {teamPageDepartments.map((dept, index) => {
                const Icon = dept.icon;
                return (
                  <div key={index} className="team-page__department-card">
                    <div className="team-page__department-icon">
                      <Icon size={28} />
                    </div>

                    <Heading level={3} className="team-page__department-name">
                      {dept.title}
                    </Heading>

                    <Paragraph className="team-page__department-count">
                      {dept.memberCount} {dept.memberCount === 1 ? 'member' : 'members'}
                    </Paragraph>

                    <Paragraph className="team-page__department-description">
                      {dept.description}
                    </Paragraph>
                  </div>
                );
              })}
            </div>
          </div>
        </Container>
      </Section>

      {/* FAQ Section */}
      <Section spacing="xl" className="team-page__faq-section">
        <Container>
          <div className="wp-max-w-3xl wp-mx-auto">
            {/* Section Header */}
            <div className="template-section-header template-section-header--compact">
              <Heading level={2} className="template-section-header__title">
                Team FAQs
              </Heading>
              <Paragraph className="template-section-header__description">
                Common questions about our team and culture
              </Paragraph>
            </div>

            <FAQSection faqs={teamPageFAQs} />
          </div>
        </Container>
      </Section>

      {/* CTA Section */}
      <CTASection
        title={teamPageCTA.title}
        description={teamPageCTA.description}
        primaryButtonText={teamPageCTA.buttons[0].text}
        primaryButtonPage={teamPageCTA.buttons[0].page as any}
        secondaryButtonText={teamPageCTA.buttons[1].text}
        secondaryButtonPage={teamPageCTA.buttons[1].page as any}
        gradient="blue"
      />
    </>
  );
}