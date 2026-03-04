/**
 * Team Page Template — Funky Redesign
 *
 * Features:
 * - Neon Community Theme
 * - Parallax Hero
 * - Interactive Member Cards with hover reveals
 * - Culture grid + stats bar
 * - ScrollReveal entry animations
 * - 100% CSS variable compliance
 */

/* Route-level CSS */
import '../../../styles/templates/page-team.css';
import '../../../styles/templates/team-page.css';
import { Container } from '../common/Container';
import { BreadcrumbPart } from '../parts/BreadcrumbPart';
import { FunkyCTA } from '../patterns/FunkyCTA';
import { FAQSection } from '../patterns/FAQSection';
import { StatsSection } from '../patterns/StatsSection';
import { Heading } from '../blocks/text/Heading';
import { Paragraph } from '../blocks/text/Paragraph';
import { useHeroParallax } from '../../hooks/useHeroParallax';
import { ScrollReveal } from '../../hooks/useScrollReveal';
import { teamPageFAQs, teamPageMembers, teamPageLeadership } from '../../data/team-page';
import {
  LinkedinLogo,
  TwitterLogo,
  GithubLogo,
  EnvelopeSimple,
  MapPin,
  Heart,
  Trophy,
  TrendUp,
  Lightning,
  Smiley,
  Coffee
} from '@phosphor-icons/react';

export function TeamTemplate() {
  const parallaxRef = useHeroParallax(0.5);

  return (
    <>
      {/* Breadcrumbs */}
      <BreadcrumbPart
        items={[
          { label: 'Home', href: '/' },
          { label: 'Team' },
        ]}
      />

      {/* ── Hero ── */}
      <section className="team-page__hero">
        <img
          ref={parallaxRef}
          src="https://images.unsplash.com/photo-1746470621261-f176b4b124a9?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxhYnN0cmFjdCUyMGNvbm5lY3Rpb24lMjBuZW9uJTIwcGVvcGxlJTIwbmV0d29ya3xlbnwxfHx8fDE3NzEzNTg4Mzl8MA&ixlib=rb-4.1.0&q=80&w=1080"
          alt="Abstract neon connection network"
          className="team-page__hero-bg"
        />
        <div className="team-page__hero-overlay" />

        <Container>
          <div className="team-page__hero-content">
            <span className="team-page__hero-badge">
              <Heart size={16} className="team-page__hero-badge-icon" />
              Meet the Team
            </span>

            <h1 className="team-page__hero-title">
              The People Behind LightSpeed
            </h1>

            <p className="team-page__hero-subtitle">
              A diverse group of WordPress experts, designers, and strategists united by a passion for digital excellence.
            </p>
          </div>
        </Container>
      </section>

      {/* ── Leadership (Glass Cards) ── */}
      <section className="team-page__leadership">
        <Container>
          <ScrollReveal animation="fade-up">
            <div className="team-page__section-header">
              <Heading level={2} className="team-page__section-title">
                Our leadership
              </Heading>
              <p className="team-page__section-desc">
                Guiding the vision and culture of LSX.
              </p>
            </div>
          </ScrollReveal>

          <div className="team-page__leadership-grid">
            {teamPageLeadership.map((leader, index) => (
              <ScrollReveal key={index} animation="fade-up" delay={index * 100}>
                <div className="team-page__leader-card">
                  <div className="team-page__leader-image-wrapper">
                    <img
                      src={leader.photo || `https://ui-avatars.com/api/?name=${leader.name}&background=random`}
                      alt={leader.name}
                      className="team-page__leader-image"
                    />
                    {/* Social Overlay */}
                    <div className="team-page__leader-social-overlay">
                      {leader.social?.linkedin && (
                        <a href={leader.social.linkedin} className="team-page__leader-social-link" aria-label={`${leader.name} on LinkedIn`}>
                          <LinkedinLogo size={20} />
                        </a>
                      )}
                      {leader.social?.twitter && (
                        <a href={leader.social.twitter} className="team-page__leader-social-link" aria-label={`${leader.name} on Twitter`}>
                          <TwitterLogo size={20} />
                        </a>
                      )}
                    </div>
                  </div>

                  <div className="team-page__leader-content">
                    <div className="team-page__leader-role">
                      {leader.role}
                    </div>
                    <h3 className="team-page__leader-name">
                      {leader.name}
                    </h3>
                    <p className="team-page__leader-bio">
                      {leader.bio}
                    </p>

                    {leader.social?.email && (
                      <a href={`mailto:${leader.social.email}`} className="team-page__leader-email">
                        <EnvelopeSimple size={16} />
                        {leader.social.email}
                      </a>
                    )}
                  </div>
                </div>
              </ScrollReveal>
            ))}
          </div>
        </Container>
      </section>

      {/* ── Team Members (Grid) ── */}
      <section className="team-page__grid-section">
        <Container>
          <ScrollReveal animation="fade-up">
            <div className="team-page__section-header">
              <Heading level={2} className="team-page__section-title">
                The crew
              </Heading>
              <p className="team-page__section-desc">
                Developers, designers, and problem solvers.
              </p>
            </div>
          </ScrollReveal>

          <div className="team-page__members-grid">
            {teamPageMembers.map((member, index) => (
              <ScrollReveal key={index} animation="fade-up" delay={index * 60}>
                <div className="team-page__member-card">
                  <div className="team-page__member-image-wrapper">
                    <img
                      src={member.photo || `https://ui-avatars.com/api/?name=${member.name}&background=random`}
                      alt={member.name}
                      className="team-page__member-photo"
                    />
                    <div className="team-page__member-gradient" />
                  </div>

                  <div className="team-page__member-info">
                    <h3 className="team-page__member-name">
                      {member.name}
                    </h3>
                    <p className="team-page__member-role">
                      {member.role}
                    </p>

                    <div className="team-page__member-socials">
                      {member.social?.linkedin && (
                        <a href={member.social.linkedin} aria-label={`${member.name} LinkedIn`}>
                          <LinkedinLogo size={18} className="team-page__member-social-icon" />
                        </a>
                      )}
                      {member.social?.twitter && (
                        <a href={member.social.twitter} aria-label={`${member.name} Twitter`}>
                          <TwitterLogo size={18} className="team-page__member-social-icon" />
                        </a>
                      )}
                    </div>
                  </div>
                </div>
              </ScrollReveal>
            ))}
          </div>
        </Container>
      </section>

      {/* ── Culture & Values ── */}
      <section className="team-page__culture">
        <Container>
          <ScrollReveal animation="fade-up">
            <div className="team-page__section-header">
              <Heading level={2} className="team-page__section-title">
                Our culture
              </Heading>
              <p className="team-page__section-desc">
                What brings us together.
              </p>
            </div>
          </ScrollReveal>

          <div className="team-page__culture-grid">
            {[
              { icon: Heart, title: 'Passion First', desc: 'We love what we do and it shows in our work.' },
              { icon: Lightning, title: 'Move Fast', desc: 'We iterate quickly and embrace change.' },
              { icon: MapPin, title: 'Remote Native', desc: 'Work from anywhere, deliver everywhere.' },
              { icon: Smiley, title: 'No Ego', desc: 'Great ideas can come from anyone.' },
              { icon: Coffee, title: 'Always Learning', desc: 'We invest in our growth and skills.' },
              { icon: GithubLogo, title: 'Inclusion', desc: 'We celebrate diversity in all forms.' }
            ].map((item, index) => {
              const Icon = item.icon;
              return (
                <ScrollReveal key={index} animation="fade-up" delay={index * 80}>
                  <div className="team-page__culture-card">
                    <div className="team-page__culture-icon">
                      <Icon size={24} />
                    </div>
                    <Heading level={3} className="team-page__culture-card-title">
                      {item.title}
                    </Heading>
                    <Paragraph className="team-page__culture-card-desc">
                      {item.desc}
                    </Paragraph>
                  </div>
                </ScrollReveal>
              );
            })}
          </div>
        </Container>
      </section>

      {/* ── Stats Section ── */}
      <StatsSection
        stats={[
          { number: '100%', label: 'Remote' },
          { number: '5', label: 'Continents' },
          { number: '12', label: 'Languages' },
          { number: '50+', label: 'Pet Dogs' }
        ]}
      />

      {/* ── FAQ Section ── */}
      <section className="team-page__faq">
        <Container>
          <ScrollReveal animation="fade-up">
            <div className="team-page__faq-wrapper">
              <FAQSection
                title="Team FAQs"
                description="Common questions about our team."
                faqs={teamPageFAQs}
                variant="default"
              />
            </div>
          </ScrollReveal>
        </Container>
      </section>

      {/* ── CTA Section ── */}
      <FunkyCTA
        title="Join the team?"
        description="We are always looking for talented individuals to join our mission."
        buttonText="View Careers"
        buttonPage="careers"
        benefits={[
          'Remote-first work culture',
          'Competitive compensation',
          'Learning & growth budget',
          'Work with cutting-edge WordPress tech'
        ]}
      />
    </>
  );
}