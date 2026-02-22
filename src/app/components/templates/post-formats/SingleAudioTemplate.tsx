/**
 * Single Audio Template
 * 
 * WordPress template: single-audio.html
 * 
 * Displays a single audio post with player.
 */

import { Container } from '@/app/components/common/Container';
import { Section } from '@/app/components/common/Section';
import { BreadcrumbPart } from '@/app/components/parts/BreadcrumbPart';
import { audioPost } from '@/app/data/posts-formats';
import { Play, SkipBack, SkipForward, Volume2, Calendar, User, Clock } from 'lucide-react';


export function SingleAudioTemplate() {
  const post = audioPost;

  return (
    <>
      {/* Breadcrumbs */}
      <BreadcrumbPart
        items={[
          { label: 'Home', href: '/' },
          { label: 'Blog', href: '/blog' },
          { label: 'Audio', href: '/audio-archive' },
          { label: post.title.rendered },
        ]}
      />

        <article>
          <div className="wp-block-post-hero">
            <Container>
              <div className="wp-block-post-hero__inner">
                <div className="wp-block-post-hero__media">
                    <div className="wp-block-post-hero__media-aspect">
                        {post._embedded?.['wp:featuredmedia']?.[0]?.source_url && (
                            <img 
                            src={post._embedded['wp:featuredmedia'][0].source_url} 
                            alt={post.title.rendered} 
                            className="wp-block-post-hero__media-img"
                            />
                        )}
                    </div>
                </div>
                <div className="wp-block-post-hero__content">
                  <div className="wp-block-post-hero__label">
                    Podcast Episode
                  </div>
                  <h1 className="wp-block-post-hero__title">{post.title.rendered}</h1>
                  <div className="wp-block-post-hero__meta">
                    <span className="wp-block-post-hero__meta-item"><User size={16} /> LightSpeed Team</span>
                    <span className="wp-block-post-hero__meta-item"><Calendar size={16} /> {new Date(post.date).toLocaleDateString()}</span>
                    <span className="wp-block-post-hero__meta-item"><Clock size={16} /> {post.meta?.find(m => m.key === 'duration')?.value}</span>
                  </div>

                  {/* Audio Player */}
                  <div className="wp-block-audio-player">
                    <div className="wp-block-audio-player__progress">
                      <div className="wp-block-audio-player__progress-bar"></div>
                    </div>
                    <div className="wp-block-audio-player__controls">
                      <div className="wp-block-audio-player__buttons">
                        <button className="wp-block-audio-player__btn"><SkipBack size={20} /></button>
                        <button className="wp-block-audio-player__play-btn">
                          <Play size={20} fill="currentColor" />
                        </button>
                        <button className="wp-block-audio-player__btn"><SkipForward size={20} /></button>
                      </div>
                      <div className="wp-block-audio-player__time">
                        12:45 / {post.meta?.find(m => m.key === 'duration')?.value}
                      </div>
                      <div className="wp-block-audio-player__volume">
                        <Volume2 size={18} />
                        <div className="wp-block-audio-player__volume-bar">
                          <div className="wp-block-audio-player__volume-level"></div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </Container>
          </div>

          <Section spacing="lg">
            <Container>
              <div className="single-post-body wp-max-w-3xl wp-mx-auto">
                <h2>About This Episode</h2>
                <div dangerouslySetInnerHTML={{ __html: post.content.rendered }} />
                
                <h3>Show Notes</h3>
                <ul>
                  <li>00:00 - Introduction</li>
                  <li>05:30 - The challenge of FSE</li>
                  <li>15:45 - Building custom blocks</li>
                  <li>30:20 - Future of WordPress</li>
                </ul>
              </div>
            </Container>
          </Section>
        </article>
    </>
  );
}