/**
 * Portfolio Single Template — Funky Alternative
 *
 * Art-directed case study template with neon glow, glassmorphism,
 * animated gradient stripes, and editorial asymmetry.
 *
 * BEM block: .portfolio-single-alt
 */

import '../../../styles/templates/portfolio-single-funky-alt.css';
import { Container } from '../common/Container';
import { Section } from '../common/Section';
import { BreadcrumbPart } from '../parts/BreadcrumbPart';
import { FunkyCTA } from '../patterns/FunkyCTA';
import {
  Code,
  Calendar,
  Clock,
  Users,
  CurrencyDollar,
  ArrowRight,
  Warning,
  Lightbulb,
  Star,
  Quotes,
  Briefcase,
  Buildings,
} from '@phosphor-icons/react';

import {
  projectPageHero,
  projectPageMeta,
  projectPageServices,
  projectPageTechnologies,
  projectPageChallenge,
  projectPageSolution,
  projectPageResults,
  projectPageGallery,
  projectPageTestimonial,
  projectPageRelated,
  projectPageCTA,
} from '../../data/portfolio-project-page';

interface PortfolioSingleTemplateFunkyAltProps {
  slug?: string;
}

export function PortfolioSingleTemplateFunkyAlt({
  slug = 'armd-digital',
}: PortfolioSingleTemplateFunkyAltProps) {
  return (
    <>
      {/* Breadcrumbs */}
      <BreadcrumbPart
        items={[
          { label: 'Home', href: '/' },
          { label: 'Work', href: '/work' },
          { label: projectPageHero.title },
        ]}
      />

      {/* ──────────────────────────────────────────
          HERO
          ────────────────────────────────────────── */}
      <section className="portfolio-single-alt__hero" aria-label="Project hero">
        <Container>
          <div className="portfolio-single-alt__hero-inner">
            {/* Left: content */}
            <div className="portfolio-single-alt__hero-content">
              <span className="portfolio-single-alt__badge">
                <Code size={14} weight="duotone" />
                {projectPageHero.badge.text}
              </span>

              <h1 className="portfolio-single-alt__hero-title">
                {projectPageHero.title}
              </h1>

              <p className="portfolio-single-alt__hero-desc">
                {projectPageHero.description}
              </p>
            </div>

            {/* Right: featured image + floating cards */}
            <div className="portfolio-single-alt__hero-visual">
              <div className="portfolio-single-alt__hero-frame">
                <div
                  className="portfolio-single-alt__hero-image"
                  role="img"
                  aria-label={`${projectPageHero.client} project screenshot`}
                  style={{
                    backgroundImage: `url(${projectPageHero.featuredImage})`,
                  }}
                />
              </div>

              {/* Floating stat cards */}
              <div
                className="portfolio-single-alt__float-card"
                aria-hidden="true"
              >
                <p className="portfolio-single-alt__float-value">
                  {projectPageMeta.duration}
                </p>
                <p className="portfolio-single-alt__float-label">Duration</p>
              </div>

              <div
                className="portfolio-single-alt__float-card"
                aria-hidden="true"
              >
                <p className="portfolio-single-alt__float-value">
                  {projectPageMeta.teamSize}
                </p>
                <p className="portfolio-single-alt__float-label">Team</p>
              </div>

              <div
                className="portfolio-single-alt__float-card"
                aria-hidden="true"
              >
                <p className="portfolio-single-alt__float-value">
                  {projectPageMeta.budget}
                </p>
                <p className="portfolio-single-alt__float-label">Budget</p>
              </div>
            </div>
          </div>
        </Container>
      </section>

      {/* ──────────────────────────────────────────
          META RIBBON
          ────────────────────────────────────────── */}
      <Section spacing="none" className="portfolio-single-alt__meta">
        <Container>
          <div className="portfolio-single-alt__meta-ribbon">
            <div className="portfolio-single-alt__meta-grid">
              <div className="portfolio-single-alt__meta-item">
                <span className="portfolio-single-alt__meta-label">
                  <Briefcase size={12} weight="duotone" />
                  Client
                </span>
                <span className="portfolio-single-alt__meta-value">
                  {projectPageMeta.client}
                </span>
              </div>

              <div className="portfolio-single-alt__meta-item">
                <span className="portfolio-single-alt__meta-label">
                  <Buildings size={12} weight="duotone" />
                  Industry
                </span>
                <span className="portfolio-single-alt__meta-value">
                  {projectPageMeta.industry}
                </span>
              </div>

              <div className="portfolio-single-alt__meta-item">
                <span className="portfolio-single-alt__meta-label">
                  <Calendar size={12} weight="duotone" />
                  Completed
                </span>
                <span className="portfolio-single-alt__meta-value">
                  {projectPageMeta.completedDate}
                </span>
              </div>

              <div className="portfolio-single-alt__meta-item">
                <span className="portfolio-single-alt__meta-label">
                  <Clock size={12} weight="duotone" />
                  Duration
                </span>
                <span className="portfolio-single-alt__meta-value">
                  {projectPageMeta.duration}
                </span>
              </div>

              <div className="portfolio-single-alt__meta-item">
                <span className="portfolio-single-alt__meta-label">
                  <Users size={12} weight="duotone" />
                  Team
                </span>
                <span className="portfolio-single-alt__meta-value">
                  {projectPageMeta.teamSize}
                </span>
              </div>

              <div className="portfolio-single-alt__meta-item">
                <span className="portfolio-single-alt__meta-label">
                  <CurrencyDollar size={12} weight="duotone" />
                  Budget
                </span>
                <span className="portfolio-single-alt__meta-value">
                  {projectPageMeta.budget}
                </span>
              </div>
            </div>

            {/* Services & Technologies pills */}
            <div className="portfolio-single-alt__pills-section">
              <div>
                <h3 className="portfolio-single-alt__pills-title">
                  Services provided
                </h3>
                <div className="portfolio-single-alt__pills">
                  {projectPageServices.map((service, i) => (
                    <span
                      key={`service-${i}`}
                      className="portfolio-single-alt__pill portfolio-single-alt__pill--service"
                    >
                      {service}
                    </span>
                  ))}
                </div>
              </div>

              <div>
                <h3 className="portfolio-single-alt__pills-title">
                  Technologies used
                </h3>
                <div className="portfolio-single-alt__pills">
                  {projectPageTechnologies.map((tech, i) => (
                    <span
                      key={`tech-${i}`}
                      className="portfolio-single-alt__pill portfolio-single-alt__pill--tech"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </Container>
      </Section>

      {/* ──────────────────────────────────────────
          CHALLENGE + SOLUTION
          ────────────────────────────────────────── */}
      <section
        className="portfolio-single-alt__editorial"
        aria-label="Challenge and solution"
      >
        <Container>
          <div className="portfolio-single-alt__editorial-grid">
            {/* Challenge */}
            <div className="portfolio-single-alt__editorial-panel portfolio-single-alt__editorial-panel--challenge">
              <div className="portfolio-single-alt__editorial-icon">
                <Warning size={32} weight="duotone" />
              </div>
              <h2 className="portfolio-single-alt__editorial-title">
                {projectPageChallenge.title}
              </h2>
              <p className="portfolio-single-alt__editorial-desc">
                {projectPageChallenge.description}
              </p>
              <ul className="portfolio-single-alt__editorial-list">
                {projectPageChallenge.keyIssues.map((item, i) => {
                  const Icon = item.icon;
                  return (
                    <li
                      key={`challenge-${i}`}
                      className="portfolio-single-alt__editorial-item"
                    >
                      <span className="portfolio-single-alt__editorial-item-icon">
                        <Icon size={18} weight="duotone" />
                      </span>
                      <div>
                        <p className="portfolio-single-alt__editorial-item-title">
                          {item.issue}
                        </p>
                        <p className="portfolio-single-alt__editorial-item-desc">
                          {item.description}
                        </p>
                      </div>
                    </li>
                  );
                })}
              </ul>
            </div>

            {/* Solution */}
            <div className="portfolio-single-alt__editorial-panel portfolio-single-alt__editorial-panel--solution">
              <div className="portfolio-single-alt__editorial-icon">
                <Lightbulb size={32} weight="duotone" />
              </div>
              <h2 className="portfolio-single-alt__editorial-title">
                {projectPageSolution.title}
              </h2>
              <p className="portfolio-single-alt__editorial-desc">
                {projectPageSolution.description}
              </p>
              <ul className="portfolio-single-alt__editorial-list">
                {projectPageSolution.keyFeatures.map((item, i) => {
                  const Icon = item.icon;
                  return (
                    <li
                      key={`solution-${i}`}
                      className="portfolio-single-alt__editorial-item"
                    >
                      <span className="portfolio-single-alt__editorial-item-icon">
                        <Icon size={18} weight="duotone" />
                      </span>
                      <div>
                        <p className="portfolio-single-alt__editorial-item-title">
                          {item.feature}
                        </p>
                        <p className="portfolio-single-alt__editorial-item-desc">
                          {item.description}
                        </p>
                      </div>
                    </li>
                  );
                })}
              </ul>
            </div>
          </div>
        </Container>
      </section>

      {/* ──────────────────────────────────────────
          RESULTS
          ────────────────────────────────────────── */}
      <section className="portfolio-single-alt__results" aria-label="Project results">
        <Container>
          <h2 className="portfolio-single-alt__results-title">
            Project results
          </h2>
          <div className="portfolio-single-alt__results-grid">
            {projectPageResults.map((result, i) => {
              const Icon = result.icon;
              return (
                <div
                  key={`result-${i}`}
                  className="portfolio-single-alt__result-card"
                >
                  <Icon
                    size={40}
                    weight="duotone"
                    className="portfolio-single-alt__result-icon"
                  />
                  <p className="portfolio-single-alt__result-value">
                    {result.value}
                  </p>
                  <p className="portfolio-single-alt__result-metric">
                    {result.metric}
                  </p>
                  <p className="portfolio-single-alt__result-desc">
                    {result.description}
                  </p>
                </div>
              );
            })}
          </div>
        </Container>
      </section>

      {/* ──────────────────────────────────────────
          GALLERY
          ────────────────────────────────────────── */}
      <section className="portfolio-single-alt__gallery" aria-label="Project gallery">
        <Container>
          <h2 className="portfolio-single-alt__gallery-title">
            Project gallery
          </h2>
          <div className="portfolio-single-alt__gallery-grid">
            {projectPageGallery.map((image, i) => (
              <div
                key={`gallery-${i}`}
                className="portfolio-single-alt__gallery-card"
              >
                <div
                  className="portfolio-single-alt__gallery-image"
                  role="img"
                  aria-label={image.caption}
                  style={{ backgroundImage: `url(${image.url})` }}
                />
                <div className="portfolio-single-alt__gallery-caption">
                  {image.caption}
                </div>
              </div>
            ))}
          </div>
        </Container>
      </section>

      {/* ──────────────────────────────────────────
          TESTIMONIAL
          ────────────────────────────────────────── */}
      <section
        className="portfolio-single-alt__testimonial"
        aria-label="Client testimonial"
      >
        <Container>
          <blockquote className="portfolio-single-alt__testimonial-panel">
            {/* Star rating */}
            {projectPageTestimonial.rating && (
              <div className="portfolio-single-alt__quote-stars" aria-label={`${projectPageTestimonial.rating} out of 5 stars`}>
                {Array.from({ length: projectPageTestimonial.rating }).map(
                  (_, i) => (
                    <Star key={`star-${i}`} size={20} weight="fill" />
                  )
                )}
              </div>
            )}

            <p className="portfolio-single-alt__quote-mark" aria-hidden="true">
              &ldquo;
            </p>

            <p className="portfolio-single-alt__quote-text">
              {projectPageTestimonial.quote}
            </p>

            <footer className="portfolio-single-alt__quote-author">
              {projectPageTestimonial.avatar && (
                <img
                  className="portfolio-single-alt__quote-avatar"
                  src={projectPageTestimonial.avatar}
                  alt={projectPageTestimonial.author}
                  loading="lazy"
                />
              )}
              <div>
                <p className="portfolio-single-alt__quote-name">
                  {projectPageTestimonial.author}
                </p>
                <p className="portfolio-single-alt__quote-role">
                  {projectPageTestimonial.position},{' '}
                  {projectPageTestimonial.company}
                </p>
              </div>
            </footer>
          </blockquote>
        </Container>
      </section>

      {/* ──────────────────────────────────────────
          RELATED PROJECTS
          ────────────────────────────────────────── */}
      <section
        className="portfolio-single-alt__related"
        aria-label="Related projects"
      >
        <Container>
          <h2 className="portfolio-single-alt__related-title">
            Related projects
          </h2>
          <div className="portfolio-single-alt__related-grid">
            {projectPageRelated.map((project) => {
              const categoryLabel =
                project.projectGroups && project.projectGroups.length > 0
                  ? project.projectGroups[0]
                  : 'Project';

              return (
                <a
                  key={project.id}
                  href={`/work/${project.slug}`}
                  className="portfolio-single-alt__related-card"
                >
                  <div
                    className="portfolio-single-alt__related-image"
                    role="img"
                    aria-label={project.title}
                    style={{
                      backgroundImage: `url(${project.featuredImage})`,
                    }}
                  />
                  <div className="portfolio-single-alt__related-body">
                    <span className="portfolio-single-alt__related-badge">
                      {categoryLabel}
                    </span>
                    <h3 className="portfolio-single-alt__related-card-title">
                      {project.title}
                    </h3>
                    <p className="portfolio-single-alt__related-excerpt">
                      {project.excerpt}
                    </p>
                    <span className="portfolio-single-alt__related-link">
                      View case study <ArrowRight size={16} weight="regular" />
                    </span>
                  </div>
                </a>
              );
            })}
          </div>
        </Container>
      </section>

      {/* ──────────────────────────────────────────
          CTA
          ────────────────────────────────────────── */}
      <div className="portfolio-single-alt__cta-wrapper">
        <FunkyCTA
          title={projectPageCTA.title}
          description={projectPageCTA.description}
          buttonText={projectPageCTA.buttons[0].text}
          buttonPage={projectPageCTA.buttons[0].page}
          benefits={[
            'Custom WordPress solutions tailored to your goals',
            'Full-stack development & design expertise',
            'Ongoing support & maintenance included',
            'Proven track record with 150+ projects',
          ]}
        />
      </div>
    </>
  );
}
