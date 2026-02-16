/**
 * Video Archive Template
 *
 * WordPress template: templates/archive-video.html
 * Content hub archetype for video content.
 *
 * Pattern order: Breadcrumbs -> Archive Header -> TaxonomyFilter -> Video Grid -> FAQ -> CTA
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
import { Play, Clock, Eye, Calendar } from 'lucide-react';
import { videos, videoCategories } from '../../data/videos';
import { videoFAQs } from '../../data/faqs';
import { useNavigation } from '../../contexts/NavigationContext';
import '@/styles/templates/video-archive.css';

export function VideoArchiveTemplate() {
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
    let result = [...videos];

    if (selectedCategories.length > 0) {
      result = result.filter(v => v.categories.some(c => selectedCategories.includes(c)));
    }

    switch (sort) {
      case 'popular':
        result.sort((a, b) => b.views - a.views);
        break;
      case 'featured':
        result.sort((a, b) => (b.featured ? 1 : 0) - (a.featured ? 1 : 0));
        break;
      case 'recent':
      default:
        result.sort((a, b) => new Date(b.date).getTime() - new Date(a.date).getTime());
    }

    return result;
  }, [selectedCategories, sort]);

  return (
    <>
      {/* Breadcrumbs */}
      <section style={{ padding: 'var(--spacing-4) 0' }}>
        <Container>
          <Breadcrumbs
            items={[
              { label: 'Home', page: 'front-page' },
              { label: 'Videos' }
            ]}
          />
        </Container>
      </section>

      {/* Header */}
      <Section spacing="md">
        <Container>
          <div className="wp-max-w-4xl">
            <Heading level={1}>Video Library</Heading>
            <Paragraph>
              Tutorials, webinars, and case study walkthroughs from the LSX Design team. Learn WordPress block theme development, design systems, and modern web best practices.
            </Paragraph>
          </div>
        </Container>
      </Section>

      {/* Filters + Grid */}
      <Section spacing="lg">
        <Container>
          <TaxonomyFilter
            categories={videoCategories.map(c => ({ slug: c.slug, name: c.name, count: c.count }))}
            selectedCategories={selectedCategories}
            onCategoryToggle={toggleCategory}
            onClearAll={clearAll}
            resultCount={filtered.length}
            sortValue={sort}
            onSortChange={setSort}
            label="Filter Videos"
          />

          <div className="video-archive__grid" style={{ marginTop: 'var(--spacing-8)' }}>
            {filtered.map(video => {
              const cat = videoCategories.find(c => video.categories.includes(c.slug));
              return (
                <article
                  key={video.id}
                  className="video-archive__card"
                  onClick={() => navigateTo(`/video/${video.slug}`)}
                  tabIndex={0}
                  role="link"
                  onKeyDown={e => e.key === 'Enter' && navigateTo(`/video/${video.slug}`)}
                  aria-label={`Watch: ${video.title}`}
                >
                  <div className="video-archive__thumbnail">
                    <img src={video.featuredImage} alt={video.title} loading="lazy" />
                    <div className="video-archive__play-overlay">
                      <div className="video-archive__play-icon">
                        <Play size={24} />
                      </div>
                    </div>
                    <span className="video-archive__duration">{video.duration}</span>
                  </div>
                  <div className="video-archive__content">
                    {cat && <span className="video-archive__category">{cat.name}</span>}
                    <h2 className="video-archive__title">{video.title}</h2>
                    <p className="video-archive__excerpt">{video.excerpt}</p>
                    <div className="video-archive__meta">
                      <span className="single-video__meta-item">
                        <Calendar size={12} /> {new Date(video.date).toLocaleDateString('en-GB', { day: 'numeric', month: 'short', year: 'numeric' })}
                      </span>
                      <span className="single-video__meta-item">
                        <Eye size={12} /> {video.views.toLocaleString()} views
                      </span>
                    </div>
                  </div>
                </article>
              );
            })}
          </div>

          {filtered.length === 0 && (
            <div style={{ textAlign: 'center', padding: 'var(--spacing-12) 0' }}>
              <Paragraph>No videos found matching your filters. Try adjusting your selection.</Paragraph>
            </div>
          )}
        </Container>
      </Section>

      {/* FAQ */}
      <Section spacing="md" background="muted">
        <Container>
          <FAQSection
            title="Video Library FAQ"
            faqs={videoFAQs}
          />
        </Container>
      </Section>

      {/* CTA */}
      <CTASection
        title="Want a Custom Tutorial?"
        description="We create bespoke video training for teams adopting WordPress block themes and design systems."
        primaryButtonText="Get in Touch"
        primaryButtonPage="contact"
      />
    </>
  );
}
