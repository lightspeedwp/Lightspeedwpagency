/**
 * About Culture Template — Funky Redesign
 *
 * Features:
 * - Vibrant Growth Theme
 * - Parallax Hero
 * - Organic Value Cards with gradient icons
 * - Interactive Perks Grid
 * - 100% CSS variable compliance
 * 
 * PATTERN COMPONENTS:
 * - ✅ FeatureList — Core values (4 items, 2 columns, glass variant)
 * - ✅ FeatureList — Environment items (4 items, 2 columns, minimal variant)
 * - ✅ FeatureList — Perks grid (6 items, 3 columns, glass variant)
 * - ✅ FAQSection — FAQ accordion
 * - ✅ FunkyCTA — Final CTA section
 * 
 * @migrated March 3, 2026 — Phase 3.3: Migrated inline grids (~70 lines saved)
 */

/* Route-level CSS */
import '../../../styles/templates/page-about-culture.css';
import { Container } from '../common/Container';
import { BreadcrumbPart } from '../parts/BreadcrumbPart';
import { FunkyCTA } from '../patterns/FunkyCTA';
import { FAQSection } from '../patterns/FAQSection';
import { FeatureList } from '../patterns/FeatureList';
import { Heading } from '../blocks/text/Heading';
import { Paragraph } from '../blocks/text/Paragraph';
import { useHeroParallax } from '../../hooks/useHeroParallax';
import { cultureFAQs } from '../../data/faqs';
import {
  Heart,
  Users,
  Lightning as Zap,
  Trophy as Award,
  Coffee,
  Code,
  Plant as Sprout,
  Globe as Globe2,
  Smiley as Smile,
  Laptop
} from '@phosphor-icons/react';


export function AboutCultureTemplate() {
  const parallaxRef = useHeroParallax(0.5);

  return (
    <>
      {/* Breadcrumbs */}
      <BreadcrumbPart
        items={[
          { label: 'Home', href: '/' },
          { label: 'About', href: '/about' },
          { label: 'Culture' },
        ]}
      />

      {/* ── Hero ── */}
      <section className="culture-page__hero">
        <img
          ref={parallaxRef}
          src="https://images.unsplash.com/photo-1769120063554-5270207217cf?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxhYnN0cmFjdCUyMG9yZ2FuaWMlMjBncm93dGglMjBuZW9uJTIwZ3JlZW58ZW58MXx8fHwxNzcxMzU4OTE5fDA&ixlib=rb-4.1.0&q=80&w=1080"
          alt="Abstract organic neon growth"
          className="culture-page__hero-bg"
        />
        <div className="culture-page__hero-overlay" />

        <Container>
          <div className="culture-page__hero-content">
            <span className="culture-page__hero-badge">
              <Sprout size={16} className="culture-page__hero-badge-icon" />
              Life at LSX
            </span>

            <h1 className="culture-page__hero-title">
              Growing Together
            </h1>

            <p className="culture-page__hero-subtitle">
              We believe in creating a workplace where talented people can do their best work while maintaining balance, learning continuously, and having fun.
            </p>
          </div>
        </Container>
      </section>

      {/* ── Core Values ── */}
      <section className="culture-page__values">
        <Container>
          <div className="culture-page__section-header">
            <Heading level={2} className="culture-page__section-title">
              Our values
            </Heading>
            <p className="culture-page__section-desc">
              The roots of our culture.
            </p>
          </div>

          <FeatureList
            items={[
              {
                icon: Heart,
                title: 'People First',
                description: 'We prioritize the wellbeing and growth of our team members above all else. Happy people make great software.'
              },
              {
                icon: Zap,
                title: 'Excellence',
                description: "We maintain the highest standards in our code, design, and client relationships. Good enough isn't good enough."
              },
              {
                icon: Sprout,
                title: 'Continuous Growth',
                description: 'Learning and improvement are built into our daily work. We fail fast, learn faster, and always level up.'
              },
              {
                icon: Globe2,
                title: 'Remote-First',
                description: 'We embrace distributed work, giving everyone flexibility and autonomy to work where they are most productive.'
              }
            ]}
            columns={2}
            variant="glass"
          />
        </Container>
      </section>

      {/* ── Work Environment ── */}
      <section className="culture-page__environment">
        <Container>
          <div className="culture-page__environment-grid">
            <div>
              <h2 className="culture-page__environment-title">
                How we work
              </h2>

              <FeatureList
                items={[
                  { title: 'Flexible Hours', description: "Work when you're most productive. Output > Hours." },
                  { title: 'Async Default', description: 'Deep work is protected. No unnecessary meetings.' },
                  { title: 'Open Feedback', description: 'Honest, constructive feedback helps us all grow.' },
                  { title: 'Playful Spirit', description: 'We take our work seriously, but not ourselves.' }
                ]}
                columns={2}
                variant="minimal"
              />
            </div>

            <div className="culture-page__cta-card-wrapper">
              <div className="culture-page__cta-card-glow" />
              <div className="culture-page__cta-card">
                <Users size={64} className="culture-page__cta-card-icon" />
                <h3 className="culture-page__cta-card-title">Join our team</h3>
                <p className="culture-page__cta-card-desc">
                  We're always looking for talented folks who share our values.
                </p>
                <a href="/about/careers" className="culture-page__cta-card-link">
                  View open positions
                </a>
              </div>
            </div>
          </div>
        </Container>
      </section>

      {/* ── Benefits & Perks ── */}
      <section className="culture-page__perks">
        <Container>
          <div className="culture-page__section-header">
            <Heading level={2} className="culture-page__section-title">
              Benefits & Perks
            </Heading>
            <p className="culture-page__section-desc">
              We invest in your success and wellbeing.
            </p>
          </div>

          <FeatureList
            items={[
              { icon: Award, title: 'Top Tier Salary', description: 'Market-leading compensation.' },
              { icon: Laptop, title: 'Tech Budget', description: '$3k for your dream setup.' },
              { icon: Code, title: 'Learning Fund', description: 'Unlimited books & courses.' },
              { icon: Heart, title: 'Full Health', description: 'Comprehensive coverage.' },
              { icon: Globe2, title: 'Remote Freedom', description: 'Work from anywhere.' },
              { icon: Coffee, title: 'Unlimited PTO', description: 'Rest when you need it.' }
            ]}
            columns={3}
            variant="glass"
          />
        </Container>
      </section>

      {/* ── FAQ Section ── */}
      <section className="culture-page__faq">
        <Container>
          <div className="culture-page__faq-wrapper">
            <FAQSection
              title="Culture FAQs"
              description="Questions about life at LSX."
              faqs={cultureFAQs}
              variant="default"
            />
          </div>
        </Container>
      </section>

      {/* ── CTA Section ── */}
      <FunkyCTA
        title="Ready to grow with us?"
        description="Check out our open roles and find your place in our story."
        buttonText="View Careers"
        buttonPage="careers"
        benefits={[
          'Flexible remote-first culture',
          'Continuous learning & growth',
          'Work with modern WordPress tech',
          'Collaborative & supportive team'
        ]}
      />
    </>
  );
}