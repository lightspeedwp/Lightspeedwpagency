/**
 * Careers Template — Funky Neon Redesign
 *
 * Full-featured Careers page with parallax hero, benefits grid,
 * interactive job cards, and culture gallery. All content is
 * driven by centralised mock data.
 *
 * Sections:
 *  1. Hero (parallax image + badge + title + subtitle)
 *  2. Benefits (4 icon cards)
 *  3. Open Positions (job cards with apply buttons)
 *  4. Culture Gallery (3 images)
 *  5. FunkyCTA (conversion)
 *
 * @see /src/styles/templates/careers-page.css
 * @see /src/app/data/careers-page.ts
 */

import { Container } from '../common/Container';
import { BreadcrumbPart } from '../parts/BreadcrumbPart';
import { Button } from '../blocks/design/Buttons';
import { FunkyCTA } from '../patterns/FunkyCTA';
import { useHeroParallax } from '../../hooks/useHeroParallax';
import { ScrollReveal } from '../../hooks/useScrollReveal';
import { Briefcase, MapPin, Clock, ArrowRight } from 'lucide-react';



/* ── Data imports ── */
import {
  careersPageHero,
  careersPageBenefits,
  careersPagePositions,
  careersPageCulture,
  careersPageCTA
} from '../../data/careers-page';

export function CareersTemplate() {
  const parallaxRef = useHeroParallax(0.4);

  return (
    <>
      {/* ── Breadcrumbs ── */}
      <BreadcrumbPart
        items={[
          { label: 'Home', href: '/' },
          { label: 'About', href: '/about' },
          { label: 'Careers' },
        ]}
      />

      {/* ============================================
          1. HERO
          ============================================ */}
      <section className="careers__hero">
        <img
          ref={parallaxRef}
          src={careersPageHero.image}
          alt="Team workspace"
          className="careers__hero-bg"
          loading="eager"
        />
        <div className="careers__hero-overlay" aria-hidden="true" />

        <Container>
          <ScrollReveal animation="fade-up">
            <div className="careers__hero-content">
              <span className="careers__hero-badge">
                <Briefcase size={14} />
                We're Hiring
              </span>

              <h1 className="careers__hero-title">
                {careersPageHero.title}
              </h1>

              <p className="careers__hero-subtitle">
                {careersPageHero.subtitle}
              </p>
            </div>
          </ScrollReveal>
        </Container>
      </section>

      {/* ============================================
          2. BENEFITS
          ============================================ */}
      <section className="careers__benefits">
        <Container>
          <ScrollReveal animation="fade-up">
            <h2 className="careers__benefits-title">
              {careersPageBenefits.title}
            </h2>
          </ScrollReveal>

          <div className="careers__benefits-grid">
            {careersPageBenefits.benefits.map((benefit) => (
              <ScrollReveal key={benefit.title} animation="fade-up">
                <article className="careers__benefit-card">
                  <div className="careers__benefit-icon">
                    <benefit.icon size={28} />
                  </div>
                  <h3 className="careers__benefit-title">{benefit.title}</h3>
                  <p className="careers__benefit-desc">{benefit.description}</p>
                </article>
              </ScrollReveal>
            ))}
          </div>
        </Container>
      </section>

      {/* ============================================
          3. OPEN POSITIONS
          ============================================ */}
      <section className="careers__positions">
        <Container>
          <ScrollReveal animation="fade-up">
            <h2 className="careers__positions-title">
              {careersPagePositions.title}
            </h2>
          </ScrollReveal>

          <div className="careers__positions-list">
            {careersPagePositions.positions.map((job) => (
              <ScrollReveal key={job.id} animation="fade-up">
                <article className="careers__job-card">
                  <div className="careers__job-info">
                    <h3 className="careers__job-title">{job.title}</h3>
                    <div className="careers__job-meta">
                      <span className="careers__job-meta-item">
                        <Briefcase size={14} />
                        {job.department}
                      </span>
                      <span className="careers__job-meta-item">
                        <MapPin size={14} />
                        {job.location}
                      </span>
                      <span className="careers__job-meta-item">
                        <Clock size={14} />
                        {job.type}
                      </span>
                    </div>
                  </div>

                  <div className="careers__job-apply">
                    <Button
                      variant="outline"
                      size="sm"
                      href={job.link}
                    >
                      Apply Now
                      <ArrowRight size={14} />
                    </Button>
                  </div>
                </article>
              </ScrollReveal>
            ))}
          </div>
        </Container>
      </section>

      {/* ============================================
          4. CULTURE GALLERY
          ============================================ */}
      <section className="careers__culture">
        <Container>
          <ScrollReveal animation="fade-up">
            <div className="careers__culture-header">
              <h2 className="careers__culture-title">
                {careersPageCulture.title}
              </h2>
              <p className="careers__culture-desc">
                {careersPageCulture.description}
              </p>
            </div>
          </ScrollReveal>

          <div className="careers__culture-grid">
            {careersPageCulture.images.map((img) => (
              <ScrollReveal key={img.alt} animation="fade-up">
                <div className="careers__culture-img-wrap">
                  <img
                    src={img.url}
                    alt={img.alt}
                    className="careers__culture-img"
                    loading="lazy"
                  />
                </div>
              </ScrollReveal>
            ))}
          </div>
        </Container>
      </section>

      {/* ============================================
          5. FUNKY CTA
          ============================================ */}
      <FunkyCTA
        title={careersPageCTA.title}
        description={careersPageCTA.description}
        buttonText={careersPageCTA.button.text}
        buttonPage={careersPageCTA.button.page}
        benefits={[
          'Remote-first, flexible hours',
          'Annual learning & development budget',
          'Work on high-impact WordPress projects',
          'Join a team of passionate experts'
        ]}
      />
    </>
  );
}