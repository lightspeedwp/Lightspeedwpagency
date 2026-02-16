/**
 * Tutorials Template
 *
 * WordPress template: templates/page-tutorials.html
 *
 * Tutorials & resources hub for LightSpeed WP.
 * Filtered grid of tutorial cards with difficulty levels and reading times.
 *
 * Layout:
 * 1. Hero (badge + breadcrumbs)
 * 2. Category filter tabs
 * 3. Tutorial card grid (3-col responsive)
 * 4. Empty state (when filter yields 0 results)
 * 5. CTA
 *
 * All styling uses CSS variables from /src/styles/.
 * NO Tailwind classes — BEM + CSS variables only.
 *
 * @see /src/styles/templates/tutorials-page.css
 * @see /src/app/data/tutorials.ts
 */

import { useState } from 'react';
import { Hero } from '../patterns/Hero';
import { CTASection } from '../patterns/CTASection';
import { Section } from '../common/Section';
import { Container } from '../common/Container';
import { useNavigation } from '../../contexts/NavigationContext';
import { Clock, BookOpen, ArrowRight, SearchX } from 'lucide-react';
import {
  tutorials,
  tutorialCategories,
  getTutorialsByCategory,
  type TutorialCategory,
} from '../../data/tutorials';
import '@/styles/templates/tutorials-page.css';
import '@/styles/templates/archive.css';

/* ═══════════════════════════════════════════
 * COMPONENT
 * ═══════════════════════════════════════════ */

export function TutorialsTemplate() {
  const { navigateTo } = useNavigation();
  const [activeCategory, setActiveCategory] = useState<TutorialCategory>('All');

  const filteredTutorials = getTutorialsByCategory(activeCategory);

  return (
    <>
      {/* ============================================
          1. HERO
          ============================================ */}
      <Hero
        title="Tutorials & Resources"
        description="Step-by-step guides, best practices, and expert insights to help you build better WordPress websites."
        badge={{ text: 'LEARN' }}
        gradient="blue"
        align="center"
        maxWidth="4xl"
        spacing="xl"
        breadcrumbs={[
          { label: 'Home', href: '/' },
          { label: 'Tutorials' },
        ]}
      />

      {/* ============================================
          2. TUTORIAL GRID
          ============================================ */}
      <Section spacing="xl" background="default">
        <Container>
          <div className="wp-max-w-6xl">
            {/* Category Filters */}
            <div className="tutorials__filters">
              {tutorialCategories.map((cat) => (
                <button
                  key={cat}
                  className={`tutorials__filter-btn${activeCategory === cat ? ' tutorials__filter-btn--active' : ''}`}
                  onClick={() => setActiveCategory(cat)}
                  aria-pressed={activeCategory === cat}
                >
                  {cat}
                </button>
              ))}
            </div>

            {/* Tutorial Cards or Empty State */}
            {filteredTutorials.length > 0 ? (
              <div className="tutorials__grid">
                {filteredTutorials.map((tutorial) => (
                  <article
                    key={tutorial.id}
                    className="tutorials__card"
                    onClick={() => navigateTo('blog')}
                    role="button"
                    tabIndex={0}
                    onKeyDown={(e) => {
                      if (e.key === 'Enter' || e.key === ' ') {
                        e.preventDefault();
                        navigateTo('blog');
                      }
                    }}
                    aria-label={`${tutorial.title} — ${tutorial.difficulty} level, ${tutorial.readTime} read`}
                  >
                    {/* Thumbnail */}
                    <div className="tutorials__card-thumb">
                      <img
                        src={tutorial.image}
                        alt={tutorial.title}
                        loading="lazy"
                      />
                      <span
                        className={`tutorials__card-difficulty tutorials__card-difficulty--${tutorial.difficulty}`}
                      >
                        {tutorial.difficulty}
                      </span>
                      <span className="tutorials__card-duration">
                        <Clock size={12} />
                        {tutorial.readTime}
                      </span>
                    </div>

                    {/* Content */}
                    <div className="tutorials__card-content">
                      <span className="tutorials__card-category">
                        {tutorial.category}
                      </span>
                      <h2 className="tutorials__card-title">{tutorial.title}</h2>
                      <p className="tutorials__card-excerpt">
                        {tutorial.excerpt}
                      </p>

                      <div className="tutorials__card-footer">
                        <span className="tutorials__card-meta">
                          <BookOpen size={12} />
                          {new Date(tutorial.date).toLocaleDateString('en-GB', {
                            day: 'numeric',
                            month: 'short',
                            year: 'numeric',
                          })}
                        </span>
                        <span className="tutorials__card-read-more">
                          Read <ArrowRight size={14} />
                        </span>
                      </div>
                    </div>
                  </article>
                ))}
              </div>
            ) : (
              /* Empty State */
              <div className="archive-empty" role="status">
                <div className="archive-empty__icon">
                  <SearchX size={64} />
                </div>
                <h2 className="archive-empty__title">
                  No tutorials in &ldquo;{activeCategory}&rdquo; yet
                </h2>
                <p className="archive-empty__description">
                  We&rsquo;re working on new content for this category.
                  Try selecting a different filter or browse all tutorials.
                </p>
                <button
                  className="tutorials__filter-btn tutorials__filter-btn--active"
                  onClick={() => setActiveCategory('All')}
                  style={{ marginTop: 'var(--spacing-6)' }}
                >
                  View All Tutorials
                </button>
              </div>
            )}
          </div>
        </Container>
      </Section>

      {/* ============================================
          3. CTA
          ============================================ */}
      <CTASection
        title="Need Hands-On Help?"
        description="Our team offers training sessions and workshops tailored to your team's skill level and project goals."
        primaryButtonText="Contact Us"
        primaryButtonPage="contact"
        secondaryButtonText="View Services"
        secondaryButtonPage="services"
        variant="highlighted"
        gradient="blue"
      />
    </>
  );
}

export default TutorialsTemplate;
