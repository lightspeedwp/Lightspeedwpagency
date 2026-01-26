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

import { SiteHeader } from '../parts/SiteHeader';
import { SiteFooter } from '../parts/SiteFooter';
import { SkipLink } from '../common/SkipLink';
import { Container } from '../common/Container';
import { Section } from '../common/Section';
import { Breadcrumbs } from '../common/Breadcrumbs';
import { BackToTopButton } from '../blocks/layout/BackToTopButton';
import { RouteAnnouncer } from '../blocks/utility/RouteAnnouncer';
import { Buttons, Button } from '../blocks/design/Buttons';
import { FAQSection } from '../patterns/FAQSection';
import { CTASection } from '../patterns/CTASection';
import { Hero } from '../patterns/Hero';
import { TeamGrid } from '../patterns/TeamGrid';
import { 
  Users,
  Globe,
  Award,
  Code,
  Heart,
  Zap,
  Mail,
  Briefcase,
  CheckCircle
} from 'lucide-react';
import '@/styles/templates/team-page.css';

// Import centralized data
import {
  teamPageHero,
  teamPageMembers,
  featuredTeamMembers,
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
      <RouteAnnouncer />
      <SkipLink />
      <SiteHeader />
      
      <main id="main-content" role="main">
        {/* Breadcrumbs */}
        <section 
          style={{
            paddingTop: 'var(--spacing-4)',
            paddingBottom: 'var(--spacing-4)',
            backgroundColor: 'var(--background)',
            borderBottom: '1px solid var(--border-soft)'
          }}
        >
          <Container>
            <Breadcrumbs 
              items={[
                { label: 'Home', href: '/' },
                { label: 'Team' }
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
        />

        {/* Leadership Section */}
        <Section spacing="xl" style={{ backgroundColor: 'var(--background)' }}>
          <Container>
            <div className="wp-max-w-6xl">
              {/* Section Header */}
              <div className="template-section-header">
                <h2 className="template-section-header__title">
                  Our Leadership
                </h2>
                <p className="template-section-header__description">
                  Meet the team guiding LightSpeed's vision and growth
                </p>
              </div>

              {/* Leadership Grid */}
              <div className="team-page__leadership-grid">
                {teamPageLeadership.map((member, index) => (
                  <div key={index} className="team-page__leadership-card">
                    <h3 className="team-page__leadership-name">
                      {member.name}
                    </h3>

                    <p className="team-page__leadership-role">
                      {member.role}
                    </p>

                    <p className="team-page__leadership-bio">
                      {member.bio}
                    </p>

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
        <Section spacing="xl" style={{ backgroundColor: 'var(--muted)' }}>
          <Container>
            <div className="wp-max-w-6xl">
              {/* Section Header */}
              <div className="template-section-header">
                <h2 className="template-section-header__title">
                  Our Complete Team
                </h2>
                <p className="template-section-header__description">
                  11 WordPress experts dedicated to your success
                </p>
              </div>

              <TeamGrid members={teamPageMembers} />
            </div>
          </Container>
        </Section>

        {/* Culture & Values Section */}
        <Section spacing="xl" style={{ backgroundColor: 'var(--background)' }}>
          <Container>
            <div className="wp-max-w-6xl">
              {/* Section Header */}
              <div className="template-section-header">
                <h2 className="template-section-header__title">
                  Our Team Culture
                </h2>
                <p className="template-section-header__description">
                  The values that define how we work together
                </p>
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

                      <h3 className="team-page__value-title">
                        {value.title}
                      </h3>

                      <p className="team-page__value-description">
                        {value.description}
                      </p>
                    </div>
                  );
                })}
              </div>
            </div>
          </Container>
        </Section>

        {/* Team Stats Section */}
        <Section spacing="xl" style={{ backgroundColor: 'var(--muted)' }}>
          <Container>
            <div className="wp-max-w-6xl">
              {/* Section Header */}
              <div className="template-section-header">
                <h2 className="template-section-header__title">
                  Team by the Numbers
                </h2>
                <p className="template-section-header__description">
                  Our team's expertise and reach
                </p>
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

                      <p className="team-page__value-description">
                        {stat.description}
                      </p>
                    </div>
                  );
                })}
              </div>
            </div>
          </Container>
        </Section>

        {/* Departments Section */}
        <Section spacing="xl" style={{ backgroundColor: 'var(--background)' }}>
          <Container>
            <div className="wp-max-w-6xl">
              {/* Section Header */}
              <div className="template-section-header">
                <h2 className="template-section-header__title">
                  Our Departments
                </h2>
                <p className="template-section-header__description">
                  Specialized teams working together for your success
                </p>
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

                      <h3 className="team-page__department-name">
                        {dept.title}
                      </h3>

                      <p className="team-page__department-count">
                        {dept.memberCount} {dept.memberCount === 1 ? 'member' : 'members'}
                      </p>

                      <p className="team-page__department-description">
                        {dept.description}
                      </p>
                    </div>
                  );
                })}
              </div>
            </div>
          </Container>
        </Section>

        {/* FAQ Section */}
        <Section spacing="xl" style={{ backgroundColor: 'var(--muted)' }}>
          <Container>
            <div className="wp-max-w-3xl">
              {/* Section Header */}
              <div className="template-section-header template-section-header--compact">
                <h2 className="template-section-header__title">
                  Team FAQs
                </h2>
                <p className="template-section-header__description">
                  Common questions about our team and culture
                </p>
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
          primaryButtonPage={teamPageCTA.buttons[0].page}
          secondaryButtonText={teamPageCTA.buttons[1].text}
          secondaryButtonPage={teamPageCTA.buttons[1].page}
          gradient="blue"
        />
      </main>

      <SiteFooter />
      <BackToTopButton />
    </>
  );
}
