/**
 * About Culture Template — Funky Redesign
 *
 * Features:
 * - Vibrant Growth Theme
 * - Parallax Hero
 * - Organic Value Cards with gradient icons
 * - Interactive Perks Grid
 * - 100% CSS variable compliance
 */

import { Container } from '../common/Container';
import { BreadcrumbPart } from '../parts/BreadcrumbPart';
import { FunkyCTA } from '../patterns/FunkyCTA';
import { FAQSection } from '../patterns/FAQSection';
import { Heading } from '../blocks/text/Heading';
import { Paragraph } from '../blocks/text/Paragraph';
import { useHeroParallax } from '../../hooks/useHeroParallax';
import { cultureFAQs } from '../../data/faqs';
import {
  Heart,
  Users,
  Zap,
  Award,
  Coffee,
  Code,
  Sprout,
  Globe2,
  Smile,
  Laptop
} from 'lucide-react';


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

          <div className="culture-page__values-grid">
            {[
              {
                icon: Heart,
                title: 'People First',
                desc: 'We prioritize the wellbeing and growth of our team members above all else. Happy people make great software.'
              },
              {
                icon: Zap,
                title: 'Excellence',
                desc: "We maintain the highest standards in our code, design, and client relationships. Good enough isn't good enough."
              },
              {
                icon: Sprout,
                title: 'Continuous Growth',
                desc: 'Learning and improvement are built into our daily work. We fail fast, learn faster, and always level up.'
              },
              {
                icon: Globe2,
                title: 'Remote-First',
                desc: 'We embrace distributed work, giving everyone flexibility and autonomy to work where they are most productive.'
              }
            ].map((value, index) => {
              const Icon = value.icon;
              return (
                <div key={index} className="culture-page__value-card">
                  <div className="culture-page__value-icon">
                    <Icon size={32} />
                  </div>
                  <Heading level={3} className="culture-page__value-title">
                    {value.title}
                  </Heading>
                  <Paragraph className="culture-page__value-desc">
                    {value.desc}
                  </Paragraph>
                </div>
              );
            })}
          </div>
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

              <div className="culture-page__environment-list">
                {[
                  { title: 'Flexible Hours', desc: "Work when you're most productive. Output > Hours." },
                  { title: 'Async Default', desc: 'Deep work is protected. No unnecessary meetings.' },
                  { title: 'Open Feedback', desc: 'Honest, constructive feedback helps us all grow.' },
                  { title: 'Playful Spirit', desc: 'We take our work seriously, but not ourselves.' }
                ].map((item, i) => (
                  <div key={i} className="culture-page__environment-item">
                    <div className="culture-page__environment-dot" />
                    <div>
                      <h3 className="culture-page__environment-item-title">{item.title}</h3>
                      <p className="culture-page__environment-item-desc">{item.desc}</p>
                    </div>
                  </div>
                ))}
              </div>
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

          <div className="culture-page__perks-grid">
            {[
              { icon: Award, title: 'Top Tier Salary', desc: 'Market-leading compensation.' },
              { icon: Laptop, title: 'Tech Budget', desc: '$3k for your dream setup.' },
              { icon: Code, title: 'Learning Fund', desc: 'Unlimited books & courses.' },
              { icon: Heart, title: 'Full Health', desc: 'Comprehensive coverage.' },
              { icon: Globe2, title: 'Remote Freedom', desc: 'Work from anywhere.' },
              { icon: Coffee, title: 'Unlimited PTO', desc: 'Rest when you need it.' }
            ].map((perk, index) => {
              const Icon = perk.icon;
              return (
                <div key={index} className="culture-page__perk-card">
                  <div className="culture-page__perk-icon">
                    <Icon size={20} />
                  </div>
                  <div>
                    <h3 className="culture-page__perk-title">
                      {perk.title}
                    </h3>
                    <p className="culture-page__perk-desc">
                      {perk.desc}
                    </p>
                  </div>
                </div>
              );
            })}
          </div>
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