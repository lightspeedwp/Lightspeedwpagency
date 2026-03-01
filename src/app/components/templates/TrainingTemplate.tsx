/**
 * Training Service Template — "Learning Pathways" Funky Redesign
 *
 * WordPress template: templates/page-service-training.html
 *
 * Theme: "Learning Pathways" — violet wisdom + green growth neon.
 *
 * Pattern order:
 *   Hero -> Formats -> Curriculum -> Related Services -> CTA
 *
 * STRICT DESIGN SYSTEM COMPLIANCE:
 * - Zero Tailwind classes
 * - All styling via /src/styles/templates/page-service-training.css
 * - Fonts: var(--font-primary), var(--font-secondary) only
 * - Button styling via :where(.wp-block-button__link)
 *
 * @see /src/styles/templates/page-service-training.css
 */

import '../../../styles/templates/page-service-training.css';
import { Container } from '../common/Container';
import { FAQSection } from '../patterns/FAQSection';
import { FunkyCTA } from '../patterns/FunkyCTA';
import { RelatedServicesGrid } from '../patterns/RelatedServicesGrid';
import { ServiceTestimonial } from '../patterns/ServiceTestimonial';
import { Button } from '../blocks/design/Buttons';
import { ScrollReveal } from '../../hooks/useScrollReveal';
import { ScrollDownArrow } from '../common/ScrollDownArrow';
import {
  BookOpen, Video, Users, Award, PlayCircle, Check,
  Lightbulb, Brain, Target, Zap, Clock, Calendar
} from 'lucide-react';
import { trainingServiceDetailed } from '../../data/services-detailed';

/* ─────────────────────────────────────────────
   DATA (inline — no separate data file yet)
   ───────────────────────────────────────────── */

const trainingData = {
  hero: {
    badge: 'WORDPRESS MASTERY',
    title: "Unlock Your Team's",
    highlight: 'Full Potential.',
    description:
      'Empower your team with expert-led WordPress training. From content management basics to advanced development workflows.',
    cta: {
      primary: { text: 'Explore Courses', page: 'services' },
      secondary: { text: 'Team Training', page: 'contact' },
    },
  },
  modules: [
    {
      title: 'Content Editor Mastery',
      description:
        'Master the Gutenberg editor, manage media efficiently, and publish SEO-optimized content with confidence.',
      icon: BookOpen,
      progress: 0,
      duration: '4 Hours',
    },
    {
      title: 'Site Management Basics',
      description:
        'Learn to handle updates, manage users, configure plugins, and maintain site health without breaking things.',
      icon: Target,
      progress: 35,
      duration: '3 Hours',
    },
    {
      title: 'Advanced Workflows',
      description:
        'Streamline your publishing process with editorial calendars, revision history, and collaborative tools.',
      icon: Zap,
      progress: 75,
      duration: '5 Hours',
    },
    {
      title: 'SEO & Performance',
      description:
        'Write content that ranks. Understand technical SEO basics, image optimization, and Core Web Vitals.',
      icon: Brain,
      progress: 10,
      duration: '6 Hours',
    },
    {
      title: 'WooCommerce Admin',
      description:
        'Manage products, process orders, handle refunds, and analyze store reports like a pro.',
      icon: Award,
      progress: 0,
      duration: '8 Hours',
    },
    {
      title: 'Custom Development',
      description:
        'For technical teams: Learn our specific stack, coding standards, and deployment pipelines.',
      icon: Lightbulb,
      progress: 0,
      duration: '12 Hours',
    },
  ],
  formats: [
    {
      title: 'Video Library',
      description:
        'On-demand access to our comprehensive library of tutorials and walkthroughs.',
      icon: Video,
      badge: 'SELF-PACED',
      featured: false,
    },
    {
      title: 'Live Workshops',
      description:
        'Interactive Zoom sessions with Q&A, live demos, and hands-on exercises.',
      icon: Users,
      badge: 'POPULAR',
      featured: true,
    },
    {
      title: 'On-Site Training',
      description:
        'We come to you (or dedicated remote) for bespoke team training days.',
      icon: Calendar,
      badge: 'ENTERPRISE',
      featured: false,
    },
  ],
};

/* ═══════════════════════════════════════════
 * COMPONENT
 * ═══════════════════════════════════════════ */

export function TrainingTemplate() {
  return (
    <>
      {/* ════════════════════════════════════════
          1. HERO — "The Classroom"
          ════════════════════════════════════════ */}
      <section className="training-page__hero">
        <div className="training-page__pattern-bg" />

        <Container>
          <div className="training-page__hero-layout">
            {/* Left: Content */}
            <div className="training-page__hero-content">
              <ScrollReveal animation="fade-right">
                <span className="training-page__badge">
                  <Lightbulb size={18} />
                  <span>{trainingData.hero.badge}</span>
                </span>

                <h1 className="training-page__title">
                  {trainingData.hero.title} <br />
                  <span>{trainingData.hero.highlight}</span>
                </h1>

                <p className="training-page__desc">
                  {trainingData.hero.description}
                </p>

                <div className="training-page__hero-actions">
                  <Button
                    variant="primary"
                    size="lg"
                    page={trainingData.hero.cta.primary.page}
                    className="training-page__btn--learn"
                  >
                    {trainingData.hero.cta.primary.text}
                  </Button>
                  <Button
                    variant="outline"
                    size="lg"
                    page={trainingData.hero.cta.secondary.page}
                    className="training-page__btn--outline"
                  >
                    {trainingData.hero.cta.secondary.text}
                  </Button>
                </div>
              </ScrollReveal>
            </div>

            {/* Right: Abstract Video Player Visual */}
            <div className="training-page__hero-visual">
              <ScrollReveal animation="fade-left" delay={200}>
                <div className="training-page__video-mock">
                  <div className="training-page__video-overlay" />

                  {/* Play Button */}
                  <div className="training-page__play-button">
                    <PlayCircle size={40} />
                  </div>

                  {/* Floating "Live" badge */}
                  <div className="training-page__live-badge">
                    <span className="training-page__live-dot" />
                    <span>LIVE SESSION</span>
                  </div>

                  {/* Floating "Students" badge */}
                  <div className="training-page__students-badge">
                    <div className="training-page__avatar-group">
                      {[1, 2, 3].map((i) => (
                        <div
                          key={i}
                          className="training-page__avatar-circle"
                        />
                      ))}
                    </div>
                    <span>+42 Students</span>
                  </div>
                </div>
              </ScrollReveal>
            </div>
          </div>
        </Container>

        <ScrollDownArrow />
      </section>

      {/* ════════════════════════════════════════
          2. FORMATS — "The Classroom Types"
          ════════════════════════════════════════ */}
      <section className="training-page__formats">
        <Container>
          <ScrollReveal animation="fade-up">
            <div className="training-page__section-header">
              <h2 className="training-page__section-title">
                Flexible Learning Formats
              </h2>
              <p className="training-page__section-desc">
                Choose the style that fits your team's schedule and learning
                preferences.
              </p>
            </div>
          </ScrollReveal>

          <div className="training-page__formats-grid">
            {trainingData.formats.map((format, index) => {
              const Icon = format.icon;
              return (
                <ScrollReveal
                  key={index}
                  animation="fade-up"
                  delay={index * 100}
                >
                  <div
                    className={`training-page__format-card${
                      format.featured
                        ? ' training-page__format-card--featured'
                        : ''
                    }`}
                  >
                    {format.badge && (
                      <span className="training-page__format-badge">
                        {format.badge}
                      </span>
                    )}
                    <div className="training-page__format-icon">
                      <Icon size={32} />
                    </div>
                    <h3 className="training-page__format-title">
                      {format.title}
                    </h3>
                    <p className="training-page__format-desc">
                      {format.description}
                    </p>
                    <Button
                      variant={format.featured ? 'primary' : 'outline'}
                      page="contact"
                      className={
                        format.featured
                          ? 'training-page__btn--learn'
                          : 'training-page__btn--outline'
                      }
                    >
                      Learn More
                    </Button>
                  </div>
                </ScrollReveal>
              );
            })}
          </div>
        </Container>
      </section>

      {/* ════════════════════════════════════════
          3. CURRICULUM — "The Modules"
          ════════════════════════════════════════ */}
      <section className="training-page__curriculum">
        <Container>
          <ScrollReveal animation="fade-up">
            <div className="training-page__curriculum-header">
              <div className="training-page__curriculum-text">
                <span className="training-page__curriculum-badge">
                  The Syllabus
                </span>
                <h2 className="training-page__section-title">
                  Available Modules
                </h2>
              </div>
              <div className="training-page__level-tags">
                <span className="training-page__level-tag training-page__level-tag--beginner">
                  Beginner
                </span>
                <span className="training-page__level-tag training-page__level-tag--advanced">
                  Advanced
                </span>
              </div>
            </div>
          </ScrollReveal>

          <div className="training-page__module-grid">
            {trainingData.modules.map((module, index) => {
              const Icon = module.icon;
              return (
                <ScrollReveal
                  key={index}
                  animation="fade-up"
                  delay={index * 80}
                >
                  <div className="training-page__module-card">
                    <div className="training-page__module-top">
                      <div className="training-page__module-icon">
                        <Icon size={24} />
                      </div>
                      <span className="training-page__module-duration">
                        <Clock size={12} /> {module.duration}
                      </span>
                    </div>

                    <h3 className="training-page__module-title">
                      {module.title}
                    </h3>

                    <p className="training-page__module-desc">
                      {module.description}
                    </p>

                    <div className="training-page__progress-bar">
                      <div
                        className="training-page__progress-fill"
                        style={{ width: `${module.progress}%` }}
                      />
                    </div>

                    {module.progress > 0 && (
                      <span className="training-page__progress-label">
                        {module.progress}% Complete (Demo)
                      </span>
                    )}
                  </div>
                </ScrollReveal>
              );
            })}
          </div>
        </Container>
      </section>

      {/* ════════════════════════════════════════
          4. RELATED SERVICES
          ════════════════════════════════════════ */}
      {trainingServiceDetailed.relatedServices && trainingServiceDetailed.relatedServices.length > 0 && (
        <RelatedServicesGrid
          title="Related Services"
          subtitle="Complement your training with these additional services"
          services={trainingServiceDetailed.relatedServices}
        />
      )}

      <ServiceTestimonial
        serviceSlug="training"
        subtitle="Hear from teams who levelled up their WordPress skills"
      />

      {/* ════════════════════════════════════════
          5. CTA
          ════════════════════════════════════════ */}
      <FunkyCTA
        title="Ready to Level Up?"
        description="Book a free consultation to discuss your team's training needs and build a custom curriculum."
        buttonText="Book Consultation"
        buttonPage="contact"
        benefits={[
          'Expert WordPress trainers',
          'Custom curriculum for your team',
          'Hands-on exercises & demos',
          'Post-training support included',
          'Certificate of completion',
        ]}
      />
    </>
  );
}