/**
 * Video Archive Template
 *
 * WordPress template: templates/archive-video.html
 * Content hub archetype for video content.
 *
 * Pattern order: Breadcrumbs -> Archive Header -> TaxonomyFilter -> Video Grid -> FAQ -> CTA
 */

import '../../../styles/templates/video-archive-optimized.css';
import { useState, useMemo } from 'react';
import { Container } from '../common/Container';
import { Section } from '../common/Section';
import { BreadcrumbPart } from '../parts/BreadcrumbPart';
import { TaxonomyFilter } from '../patterns/TaxonomyFilter';
import { FAQSection } from '../patterns/FAQSection';
import { FunkyCTA } from '../patterns/FunkyCTA';
import { Heading } from '../blocks/text/Heading';
import { Paragraph } from '../blocks/text/Paragraph';
import { Play, Clock, Eye, Calendar } from '@phosphor-icons/react';
import { videos, videoCategories } from '../../data/videos';
import { videoFAQs } from '../../data/faqs';
import { Link } from 'react-router';


export function VideoArchiveTemplate() {
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
      <BreadcrumbPart
        items={[
          { label: 'Home', page: 'front-page' },
          { label: 'Videos' },
        ]}
      />

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

          <div className="video-archive__grid wp-mt-8">
            {filtered.map(video => {
              const cat = videoCategories.find(c => video.categories.includes(c.slug));
              return (
                <Link
                  key={video.id}
                  to={`/video/${video.slug}`}
                  className="video-archive__card"
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
                </Link>
              );
            })}
          </div>

          {filtered.length === 0 && (
            <div className="archive-empty-state">
              <Paragraph>No videos found matching your filters. Try adjusting your selection.</Paragraph>
            </div>
          )}
        </Container>
      </Section>

      {/* FAQ */}
      <Section spacing="md" background="muted">
        <Container>
          <FAQSection
            title="Video library FAQ"
            faqs={videoFAQs}
          />
        </Container>
      </Section>

      {/* CTA */}
      <FunkyCTA
        title="Want a Custom Tutorial?"
        description="We create bespoke video training for teams adopting WordPress block themes and design systems."
        buttonText="Get in Touch"
        buttonPage="contact"
        benefits={[
          'Bespoke video training',
          'Block theme development',
          'Design system workshops',
          'Team upskilling',
          'Ongoing support'
        ]}
      />
    </>
  );
}