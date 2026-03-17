/**
 * Single Post (Longform Editorial) Template — Funky Neon Pass
 *
 * WordPress template: templates/single.html (post variant)
 *
 * Features:
 * - Neon gradient hero with floating orb
 * - Frosted glass Table of Contents sidebar (dark mode)
 * - Neon blockquotes with inner glow
 * - Gradient underline on hero title
 * - Scroll-triggered reveal animations
 * - 100% CSS variables, zero hardcoded values
 * - Zero inline styles, zero raw Tailwind
 *
 * Data: /src/app/data/longform-post-data.tsx
 *
 * Pattern order: Breadcrumbs → Hero → TOC + Content → Tags →
 *               Newsletter CTA → Footer Actions
 */

import '../../../styles/templates/single-post-page.css';
import { Container } from '../common/Container';
import { Section } from '../common/Section';
import { BreadcrumbPart } from '../parts/BreadcrumbPart';
import { Heading } from '../common/Heading';
import { Button } from '../blocks/design/Buttons';
import { ScrollProgress } from '../blocks/layout/ScrollProgress';
import { Badge } from '../blocks/design/Badge';
import { ScrollReveal } from '../../hooks/useScrollReveal';
import { Calendar, Clock, ShareNetwork, BookmarkSimple } from '@phosphor-icons/react';
import { useState } from 'react';
import { RelatedPosts } from '../patterns/RelatedPosts';
import {
  breadcrumbItems,
  heroMeta,
  tocItems,
  articleSections,
  pullQuote,
  pullQuoteAfterSection,
  newsletterCta,
  relatedPosts,
} from '../../data/longform-post-data';

export function SinglePostLongformTemplate() {
  const [activeSection, setActiveSection] = useState('introduction');

  return (
    <>
      <ScrollProgress />

      {/* Breadcrumbs */}
      <BreadcrumbPart items={breadcrumbItems} />

      {/* Hero Section */}
      <Section spacing="xl" className="single-post-hero">
        <div className="single-post-hero__orb" aria-hidden="true" />

        <Container>
          <ScrollReveal animation="fade-up" duration={600}>
            <div className="single-post-hero__container wp-max-w-4xl">
              {/* Category badge */}
              <div className="single-post-hero__categories">
                <Badge variant="secondary">{heroMeta.category}</Badge>
              </div>

              {/* Title */}
              <Heading level={1} className="single-post-hero__title">
                {heroMeta.title}
              </Heading>

              {/* Post meta */}
              <div className="single-post-meta">
                <div className="single-post-meta__author">
                  <img
                    src={heroMeta.author.avatar}
                    alt={heroMeta.author.name}
                    className="single-post-meta__avatar"
                    loading="lazy"
                  />
                  <div className="single-post-meta__author-info">
                    <a
                      href={heroMeta.author.href}
                      className="single-post-meta__author-name"
                    >
                      {heroMeta.author.name}
                    </a>
                    <span className="single-post-meta__author-role">
                      {heroMeta.author.role}
                    </span>
                  </div>
                </div>
                <div className="single-post-meta__item">
                  <Calendar size={16} />
                  <span className="single-post-meta__text">{heroMeta.date}</span>
                </div>
                <div className="single-post-meta__item">
                  <Clock size={16} />
                  <span className="single-post-meta__text">{heroMeta.readingTime}</span>
                </div>
              </div>

              {/* Action buttons */}
              <div className="single-post__newsletter-actions">
                <Button variant="outline" size="sm" aria-label="Share this post">
                  <ShareNetwork size={18} />
                  Share
                </Button>
                <Button variant="outline" size="sm" aria-label="Bookmark this post">
                  <BookmarkSimple size={18} />
                  Save
                </Button>
              </div>

              {/* Featured image */}
              <img
                src={heroMeta.featuredImage.src}
                alt={heroMeta.featuredImage.alt}
                className="single-post-featured-image single-post-featured-image--longform"
                loading="lazy"
              />
            </div>
          </ScrollReveal>
        </Container>
      </Section>

      {/* Article Content with TOC */}
      <Section spacing="xl" className="single-post-content-section">
        <Container>
          <div className="single-post-grid">
            {/* Table of Contents (Sticky Sidebar) */}
            <aside className="single-post-sidebar">
              <ScrollReveal animation="fade-right" duration={500}>
                <div className="single-post-toc">
                  <h2 className="single-post-toc__title">Table of contents</h2>
                  <nav>
                    <ul className="single-post-toc__list">
                      {tocItems.map(item => (
                        <li key={item.id}>
                          <a
                            href={`#${item.id}`}
                            onClick={e => {
                              e.preventDefault();
                              setActiveSection(item.id);
                              document
                                .getElementById(item.id)
                                ?.scrollIntoView({ behavior: 'smooth' });
                            }}
                            className={`single-post-toc__link ${
                              activeSection === item.id
                                ? 'single-post-toc__link--active'
                                : ''
                            }`}
                          >
                            {item.label}
                          </a>
                        </li>
                      ))}
                    </ul>
                  </nav>
                </div>
              </ScrollReveal>
            </aside>

            {/* Article Content */}
            <article className="single-post-body">
              <ScrollReveal animation="fade-up" duration={500}>
                {articleSections.map(section => (
                  <div key={section.id}>
                    {/* Section content */}
                    <div id={section.id}>
                      <h2>{section.heading}</h2>
                      {section.paragraphs.map((para, idx) => (
                        <p key={`${section.id}-p-${idx}`}>{para}</p>
                      ))}
                      {section.listItems && (
                        <ul>
                          {section.listItems.map((item, idx) => (
                            <li key={`${section.id}-li-${idx}`}>{item}</li>
                          ))}
                        </ul>
                      )}
                    </div>

                    {/* Pull quote after designated section */}
                    {section.id === pullQuoteAfterSection && (
                      <blockquote>
                        <p>{pullQuote}</p>
                      </blockquote>
                    )}
                  </div>
                ))}
              </ScrollReveal>
            </article>
          </div>
        </Container>
      </Section>

      {/* Related Posts */}
      <Section spacing="xl">
        <RelatedPosts
          posts={relatedPosts}
          currentPostSlug={heroMeta.currentSlug}
        />
      </Section>

      {/* Newsletter CTA */}
      <Section spacing="xl">
        <Container>
          <ScrollReveal animation="fade-up" duration={500}>
            <div className="single-post__newsletter single-post__newsletter--narrow">
              <Heading level={2} className="single-post__newsletter-title">
                {newsletterCta.title}
              </Heading>
              <p className="single-post__newsletter-description">
                {newsletterCta.description}
              </p>
              <div className="single-post__newsletter-actions">
                <Button variant="primary">{newsletterCta.primaryLabel}</Button>
                <Button variant="outline">{newsletterCta.secondaryLabel}</Button>
              </div>
            </div>
          </ScrollReveal>
        </Container>
      </Section>
    </>
  );
}
