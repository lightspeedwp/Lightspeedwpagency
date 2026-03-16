/**
 * Single Podcast Template
 *
 * WordPress template: templates/single-podcast.html
 * Single detail archetype for a podcast episode.
 */

import '../../../styles/templates/podcast-archive-optimized.css';
import { Container } from '../common/Container';
import { Section } from '../common/Section';
import { BreadcrumbPart } from '../parts/BreadcrumbPart';
import { FAQSection } from '../patterns/FAQSection';
import { FunkyCTA } from '../patterns/FunkyCTA';
import { Heading } from '../blocks/text/Heading';
import { Paragraph } from '../blocks/text/Paragraph';
import { Clock, Calendar, Headphones, ArrowSquareOut } from '@phosphor-icons/react';
import { getPodcastBySlug, getRelatedPodcasts, podcasts } from '../../data/podcasts';
import { podcastFAQs } from '../../data/faqs';
import { Link } from 'react-router';


interface Props { slug?: string; }

export function SinglePodcastTemplate({ slug }: Props) {
  const episode = slug ? getPodcastBySlug(slug) : podcasts[0];
  const related = episode ? getRelatedPodcasts(episode.slug) : [];

  if (!episode) {
    return (
      <Section spacing="lg">
        <Container>
          <Heading level={1}>Episode Not Found</Heading>
          <Paragraph>The podcast episode you are looking for does not exist.</Paragraph>
        </Container>
      </Section>
    );
  }

  return (
    <>
      <BreadcrumbPart
        items={[
          { label: 'Home', page: 'front-page' },
          { label: 'Podcasts', href: '/podcasts' },
          { label: episode.title },
        ]}
      />

      {/* Player Section */}
      <Section spacing="md">
        <Container>
          <div className="wp-max-w-4xl">
            <div className="single-podcast__player">
              <div className="single-podcast__player-header">
                <div className="single-podcast__cover">
                  <img src={episode.featuredImage} alt={episode.title} loading="lazy" />
                </div>
                <div className="single-podcast__player-info">
                  <span className="single-podcast__episode-label">
                    Season {episode.season} &middot; Episode {episode.episode}
                  </span>
                  <h1 className="single-podcast__player-title">{episode.title}</h1>
                  <div className="podcast-archive__meta">
                    <span className="single-video__meta-item">
                      <Calendar size={12} />
                      {new Date(episode.date).toLocaleDateString('en-GB', { day: 'numeric', month: 'long', year: 'numeric' })}
                    </span>
                    <span className="single-video__meta-item">
                      <Clock size={12} /> {episode.duration}
                    </span>
                    <span className="single-video__meta-item">
                      <Headphones size={12} /> {episode.listens.toLocaleString()} listens
                    </span>
                  </div>
                </div>
              </div>

              <div className="single-podcast__audio-stub">
                Audio player placeholder — In production, this would embed the audio file from {episode.audioUrl}
              </div>

              {episode.subscribeLinks && (
                <div className="single-podcast__subscribe">
                  {episode.subscribeLinks.apple && (
                    <a href={episode.subscribeLinks.apple} className="single-podcast__subscribe-link" target="_blank" rel="noopener noreferrer">
                      <ArrowSquareOut size={14} /> Apple Podcasts
                    </a>
                  )}
                  {episode.subscribeLinks.spotify && (
                    <a href={episode.subscribeLinks.spotify} className="single-podcast__subscribe-link" target="_blank" rel="noopener noreferrer">
                      <ArrowSquareOut size={14} /> Spotify
                    </a>
                  )}
                  {episode.subscribeLinks.google && (
                    <a href={episode.subscribeLinks.google} className="single-podcast__subscribe-link" target="_blank" rel="noopener noreferrer">
                      <ArrowSquareOut size={14} /> Google Podcasts
                    </a>
                  )}
                  {episode.subscribeLinks.rss && (
                    <a href={episode.subscribeLinks.rss} className="single-podcast__subscribe-link" target="_blank" rel="noopener noreferrer">
                      <ArrowSquareOut size={14} /> RSS Feed
                    </a>
                  )}
                </div>
              )}
            </div>
          </div>
        </Container>
      </Section>

      {/* Content */}
      <Section spacing="md">
        <Container>
          <div className="wp-max-w-4xl">
            <Heading level={2}>About This Episode</Heading>
            <p className="single-podcast__show-notes wp-mt-4">
              {episode.content || episode.excerpt}
            </p>

            {episode.showNotes && (
              <>
                <Heading level={3} className="wp-mt-8">Show Notes</Heading>
                <p className="single-podcast__show-notes wp-mt-4">
                  {episode.showNotes}
                </p>
              </>
            )}

            {episode.guests && episode.guests.length > 0 && (
              <>
                <Heading level={3} className="wp-mt-8">Guests</Heading>
                <div className="wp-flex wp-flex-col wp-gap-3 wp-mt-4">
                  {episode.guests.map((guest, i) => (
                    <div key={i} className="single-podcast__guest-item">
                      <strong>{guest.name}</strong>
                      <span className="single-podcast__guest-meta">
                        {' '}&mdash; {guest.role}, {guest.company}
                      </span>
                    </div>
                  ))}
                </div>
              </>
            )}
          </div>
        </Container>
      </Section>

      {/* Related Episodes */}
      {related.length > 0 && (
        <Section spacing="md" background="muted">
          <Container>
            <Heading level={2}>More Episodes</Heading>
            <div className="podcast-archive__list wp-mt-6">
              {related.map(ep => (
                <Link
                  key={ep.id}
                  to={`/podcast/${ep.slug}`}
                  className="podcast-archive__card"
                >
                  <div className="podcast-archive__artwork">
                    <img src={ep.featuredImage} alt={ep.title} loading="lazy" />
                  </div>
                  <div className="podcast-archive__info">
                    <span className="podcast-archive__episode-badge">
                      <Headphones size={12} /> S{ep.season} E{ep.episode}
                    </span>
                    <h3 className="podcast-archive__title">{ep.title}</h3>
                    <div className="podcast-archive__meta">
                      <span className="single-video__meta-item"><Clock size={12} /> {ep.duration}</span>
                    </div>
                  </div>
                </Link>
              ))}
            </div>
          </Container>
        </Section>
      )}

      {/* FAQ */}
      <Section spacing="md">
        <Container>
          <FAQSection title="Podcast FAQ" faqs={podcastFAQs} />
        </Container>
      </Section>

      <FunkyCTA
        title="Enjoy the Show?"
        description="Subscribe to never miss an episode and get notified when new content is published."
        buttonText="Contact Us"
        buttonPage="contact"
        benefits={[
          'Weekly episodes',
          'Expert interviews',
          'WordPress deep-dives',
          'Available on all platforms',
          'Community discussions'
        ]}
      />
    </>
  );
}