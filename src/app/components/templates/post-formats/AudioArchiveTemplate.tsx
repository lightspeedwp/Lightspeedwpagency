/**
 * Audio Archive Template
 * 
 * WordPress template: archive-audio.html
 * 
 * Displays a list of audio posts (podcasts, music, etc.).
 */

/* archive.css — globally imported via index.css */
import { Container } from '@/app/components/common/Container';
import { Section } from '@/app/components/common/Section';
import { BreadcrumbPart } from '@/app/components/parts/BreadcrumbPart';
import { allPosts } from '@/app/data/posts-formats';
import { Microphone as Mic, Play } from '@phosphor-icons/react';
import { Link } from 'react-router';

export function AudioArchiveTemplate() {
  const audioPosts = allPosts.filter(post => post.format === 'audio');
  // Duplicate for visual effect
  const posts = [...audioPosts, ...audioPosts, ...audioPosts];

  return (
    <>
      <BreadcrumbPart
        items={[
          { label: 'Home', href: '/' },
          { label: 'Insights', href: '/insights' },
          { label: 'Audio' },
        ]}
      />

      <Section spacing="lg">
        <Container>
          <header className="archive-header">
            <h1 className="archive-header__title">Podcasts</h1>
            <p className="archive-header__description">Listen to our latest interviews and updates.</p>
          </header>

          <div className="wp-section-media-grid">
            {posts.map((post, index) => (
              <Link 
                key={`${post.id}-${index}`}
                to="#"
                className="wp-block-audio-card"
              >
                <div className="wp-block-audio-card__media">
                  {post._embedded?.['wp:featuredmedia']?.[0]?.source_url && (
                    <img 
                      src={post._embedded['wp:featuredmedia'][0].source_url} 
                      alt={post.title.rendered} 
                      className="wp-block-audio-card__img"
                      loading="lazy"
                    />
                  )}
                  <div className="wp-block-audio-card__overlay">
                    <div className="wp-block-audio-card__play-icon">
                      <Play size={32} fill="currentColor" />
                    </div>
                  </div>
                  <div className="wp-block-audio-card__duration">
                    {post.meta?.find(m => m.key === 'duration')?.value || '45:00'}
                  </div>
                </div>
                <div className="wp-block-audio-card__content">
                  <div className="wp-block-audio-card__label">
                    <Mic size={14} />
                    <span>Podcast</span>
                  </div>
                  <h2 className="wp-block-audio-card__title">
                    {post.title.rendered}
                  </h2>
                  <div className="wp-block-audio-card__excerpt" dangerouslySetInnerHTML={{ __html: post.excerpt.rendered }} />
                  <div className="wp-block-audio-card__date">
                    {new Date(post.date).toLocaleDateString()}
                  </div>
                </div>
              </Link>
            ))}
          </div>
        </Container>
      </Section>
    </>
  );
}