/**
 * Podcast Archive Template
 *
 * WordPress template: templates/archive-podcast.html
 * Content hub archetype for podcast episodes.
 */

import { useState, useMemo } from 'react';
import { Container } from '../common/Container';
import { Section } from '../common/Section';
import { Breadcrumbs } from '../common/Breadcrumbs';
import { TaxonomyFilter } from '../patterns/TaxonomyFilter';
import { FAQSection } from '../patterns/FAQSection';
import { CTASection } from '../patterns/CTASection';
import { Heading } from '../blocks/text/Heading';
import { Paragraph } from '../blocks/text/Paragraph';
import { Headphones, Clock, Calendar } from 'lucide-react';
import { podcasts, podcastCategories } from '../../data/podcasts';
import { podcastFAQs } from '../../data/faqs';
import { useNavigation } from '../../contexts/NavigationContext';
import '@/styles/templates/podcast-archive.css';

export function PodcastArchiveTemplate() {
  const { navigateTo } = useNavigation();
  const [selectedCategories, setSelectedCategories] = useState<string[]>([]);
  const [sort, setSort] = useState('recent');

  const toggleCategory = (slug: string) => {
    setSelectedCategories(prev =>
      prev.includes(slug) ? prev.filter(s => s !== slug) : [...prev, slug]
    );
  };

  const clearAll = () => setSelectedCategories([]);

  const filtered = useMemo(() => {
    let result = [...podcasts];
    if (selectedCategories.length > 0) {
      result = result.filter(p => p.categories.some(c => selectedCategories.includes(c)));
    }
    switch (sort) {
      case 'popular':
        result.sort((a, b) => b.listens - a.listens);
        break;
      case 'featured':
        result.sort((a, b) => (b.featured ? 1 : 0) - (a.featured ? 1 : 0));
        break;
      default:
        result.sort((a, b) => new Date(b.date).getTime() - new Date(a.date).getTime());
    }
    return result;
  }, [selectedCategories, sort]);

  return (
    <>
      <section style={{ padding: 'var(--spacing-4) 0' }}>
        <Container>
          <Breadcrumbs
            items={[
              { label: 'Home', page: 'front-page' },
              { label: 'Podcasts' }
            ]}
          />
        </Container>
      </section>

      <Section spacing="md">
        <Container>
          <div className="wp-max-w-4xl">
            <Heading level={1}>The LSX Design Podcast</Heading>
            <Paragraph>
              Conversations about modern WordPress development, block themes, design systems, and building better websites. Subscribe on your favourite platform.
            </Paragraph>
          </div>
        </Container>
      </Section>

      <Section spacing="lg">
        <Container>
          <TaxonomyFilter
            categories={podcastCategories.map(c => ({ slug: c.slug, name: c.name, count: c.count }))}
            selectedCategories={selectedCategories}
            onCategoryToggle={toggleCategory}
            onClearAll={clearAll}
            resultCount={filtered.length}
            sortValue={sort}
            onSortChange={setSort}
            label="Filter Episodes"
          />

          <div className="podcast-archive__list" style={{ marginTop: 'var(--spacing-8)' }}>
            {filtered.map(ep => (
              <article
                key={ep.id}
                className="podcast-archive__card"
                onClick={() => navigateTo(`/podcast/${ep.slug}`)}
                tabIndex={0}
                role="link"
                onKeyDown={e => e.key === 'Enter' && navigateTo(`/podcast/${ep.slug}`)}
                aria-label={`Listen: ${ep.title}`}
              >
                <div className="podcast-archive__artwork">
                  <img src={ep.featuredImage} alt={ep.title} loading="lazy" />
                </div>
                <div className="podcast-archive__info">
                  <span className="podcast-archive__episode-badge">
                    <Headphones size={12} />
                    S{ep.season} E{ep.episode}
                  </span>
                  <h2 className="podcast-archive__title">{ep.title}</h2>
                  <p className="podcast-archive__excerpt">{ep.excerpt}</p>
                  <div className="podcast-archive__meta">
                    <span className="single-video__meta-item">
                      <Calendar size={12} />
                      {new Date(ep.date).toLocaleDateString('en-GB', { day: 'numeric', month: 'short', year: 'numeric' })}
                    </span>
                    <span className="single-video__meta-item">
                      <Clock size={12} /> {ep.duration}
                    </span>
                  </div>
                </div>
              </article>
            ))}
          </div>

          {filtered.length === 0 && (
            <div style={{ textAlign: 'center', padding: 'var(--spacing-12) 0' }}>
              <Paragraph>No episodes found matching your filters.</Paragraph>
            </div>
          )}
        </Container>
      </Section>

      <Section spacing="md" background="muted">
        <Container>
          <FAQSection title="Podcast FAQ" faqs={podcastFAQs} />
        </Container>
      </Section>

      <CTASection
        title="Want to Be a Guest?"
        description="We are always looking for interesting voices from the WordPress community. Get in touch to discuss appearing on the show."
        primaryButtonText="Contact Us"
        primaryButtonPage="contact"
      />
    </>
  );
}
