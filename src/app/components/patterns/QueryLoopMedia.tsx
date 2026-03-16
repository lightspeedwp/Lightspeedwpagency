/**
 * QueryLoopMedia Pattern — LSX Design
 *
 * Consolidated media query loop for Audio, Video, Chat, and Gallery formats.
 * Replaces: QueryLoopAudio, QueryLoopVideo, QueryLoopChat, QueryLoopGallery
 *
 * @see /src/styles/patterns/query-loop.css
 */

import {
  Microphone as Mic,
  Video,
  Chat as MessageSquare,
  Images,
  Clock,
  Play,
  Calendar,
} from '@phosphor-icons/react';
import { Link } from 'react-router';
import { QueryLoop } from './QueryLoop';
import { useStaggerReveal } from '../../hooks/useScrollReveal';
import type { WPPost } from '../../data/posts-formats';

export type MediaVariant = 'audio' | 'video' | 'chat' | 'gallery';

export interface QueryLoopMediaProps {
  posts: WPPost[];
  variant: MediaVariant;
  heading?: string;
  description?: string;
  columns?: 1 | 2 | 3;
}

/* ── Helpers ── */

function getMetaValue(post: WPPost, key: string): string {
  const meta = post.meta?.find((m: any) => m.key === key);
  return meta?.value || '';
}

function getFeaturedImage(post: WPPost): string {
  return post._embedded?.['wp:featuredmedia']?.[0]?.source_url || '';
}

function getGalleryImages(post: WPPost): string[] {
  return post._embedded?.gallery_images || [];
}

function extractChatLines(html: string): { speaker: string; text: string }[] {
  const lines: { speaker: string; text: string }[] = [];
  const regex = /<strong>(.*?)<\/strong>:\s*(.*?)(?=<\/p>|$)/gi;
  let match;
  while ((match = regex.exec(html)) !== null) {
    lines.push({ speaker: match[1], text: match[2] });
  }
  return lines.slice(0, 3);
}

/* ── Variant config ── */

const VARIANT_CONFIG = {
  audio: {
    icon: Mic,
    label: 'Audio',
    emptyMessage: 'No audio posts found.',
    defaultHeading: 'Audio Posts',
    defaultColumns: 2 as const,
    basePath: '/insights/format/audio/single',
    ariaPrefix: 'Listen',
    playIconSize: 40,
    metaKey: 'duration',
  },
  video: {
    icon: Video,
    label: 'Video',
    emptyMessage: 'No video posts found.',
    defaultHeading: 'Video Posts',
    defaultColumns: 3 as const,
    basePath: '/insights/format/video/single',
    ariaPrefix: 'Watch',
    playIconSize: 48,
    metaKey: 'video_duration',
  },
  chat: {
    icon: MessageSquare,
    label: 'Chat',
    emptyMessage: 'No chat posts found.',
    defaultHeading: 'Chat Transcripts',
    defaultColumns: 2 as const,
    basePath: '/insights/format/chat/single',
    ariaPrefix: 'View chat',
    playIconSize: 0,
    metaKey: '',
  },
  gallery: {
    icon: Images,
    label: 'Gallery',
    emptyMessage: 'No gallery posts found.',
    defaultHeading: 'Gallery Posts',
    defaultColumns: 3 as const,
    basePath: '/insights/format/gallery/single',
    ariaPrefix: 'View gallery',
    playIconSize: 36,
    metaKey: '',
  },
} as const;

/* ── Component ── */

export function QueryLoopMedia({
  posts,
  variant,
  heading,
  description,
  columns,
}: QueryLoopMediaProps) {
  const config = VARIANT_CONFIG[variant];
  const Icon = config.icon;
  const cols = columns ?? config.defaultColumns;

  const { containerRef, itemStyle } = useStaggerReveal({
    animation: 'fade-up',
    stagger: variant === 'audio' || variant === 'chat' ? 100 : 80,
  });

  return (
    <QueryLoop
      heading={heading ?? config.defaultHeading}
      description={description}
      columns={cols}
      isEmpty={posts.length === 0}
      emptyMessage={config.emptyMessage}
    >
      {posts.map((post, index) => {
        const featuredImage = getFeaturedImage(post);
        const duration = config.metaKey ? getMetaValue(post, config.metaKey) : '';

        return (
          <Link
            key={post.id}
            to={config.basePath}
            className="query-loop-card query-loop-card--clickable"
            ref={index === 0 ? containerRef as any : undefined}
            style={itemStyle(index)}
            aria-label={`${config.ariaPrefix}: ${post.title.rendered || 'Untitled'}`}
          >
            {/* Image section (audio, video, gallery) */}
            {variant !== 'chat' && featuredImage && (
              <div className="query-loop-card__image-wrapper">
                <img
                  src={featuredImage}
                  alt={post.title.rendered}
                  className="query-loop-card__image"
                  loading="lazy"
                />
                {config.playIconSize > 0 && (
                  <div className="query-loop-card__overlay">
                    {variant === 'gallery' ? (
                      <Images size={config.playIconSize} className="query-loop-card__play-icon" />
                    ) : (
                      <Play size={config.playIconSize} className="query-loop-card__play-icon" />
                    )}
                  </div>
                )}
                {variant === 'gallery' && (
                  <span className="query-loop-card__duration">
                    <Images size={10} /> {getGalleryImages(post).length || '3+'} images
                  </span>
                )}
                {(variant === 'audio' || variant === 'video') && duration && (
                  <span className="query-loop-card__duration">
                    <Clock size={10} /> {duration}
                  </span>
                )}
              </div>
            )}

            {/* Gallery thumbnail strip */}
            {variant === 'gallery' && getGalleryImages(post).length > 0 && (
              <div className="query-loop-card__gallery-strip">
                {getGalleryImages(post).slice(0, 4).map((img, i) => (
                  <img
                    key={i}
                    src={img}
                    alt={`Gallery image ${i + 1}`}
                    className="query-loop-card__gallery-thumb"
                    loading="lazy"
                  />
                ))}
              </div>
            )}

            <div className="query-loop-card__body">
              <span className="query-loop-card__badge">
                <Icon size={12} /> {config.label}
              </span>

              {post.title.rendered && (
                <h3 className="query-loop-card__title">{post.title.rendered}</h3>
              )}

              {/* Chat bubble preview */}
              {variant === 'chat' && (
                <div className="query-loop-card__chat-bubbles">
                  {extractChatLines(post.content.rendered).map((line, i) => (
                    <div key={i} className="query-loop-card__chat-line">
                      <strong>{line.speaker}:</strong> {line.text}
                    </div>
                  ))}
                </div>
              )}

              {variant !== 'chat' && (
                <p className="query-loop-card__excerpt">{post.excerpt.rendered}</p>
              )}

              <div className="query-loop-card__meta">
                <span className="query-loop-card__meta-item">
                  <Calendar size={14} />
                  {new Date(post.date).toLocaleDateString('en-US', {
                    month: 'short',
                    day: 'numeric',
                    year: 'numeric',
                  })}
                </span>
                {variant === 'audio' && duration && (
                  <span className="query-loop-card__meta-item">
                    <Mic size={14} /> {duration}
                  </span>
                )}
                {variant === 'chat' && (
                  <span className="query-loop-card__meta-item">
                    <MessageSquare size={14} /> {extractChatLines(post.content.rendered).length} messages
                  </span>
                )}
              </div>
            </div>
          </Link>
        );
      })}
    </QueryLoop>
  );
}

/* ── Backward-compatible aliases ── */

export type QueryLoopAudioProps = Omit<QueryLoopMediaProps, 'variant'>;
export type QueryLoopVideoProps = Omit<QueryLoopMediaProps, 'variant'>;
export type QueryLoopChatProps = Omit<QueryLoopMediaProps, 'variant'>;
export type QueryLoopGalleryProps = Omit<QueryLoopMediaProps, 'variant'>;

export const QueryLoopAudio = (props: QueryLoopAudioProps) => <QueryLoopMedia {...props} variant="audio" />;
export const QueryLoopVideo = (props: QueryLoopVideoProps) => <QueryLoopMedia {...props} variant="video" />;
export const QueryLoopChat = (props: QueryLoopChatProps) => <QueryLoopMedia {...props} variant="chat" />;
export const QueryLoopGallery = (props: QueryLoopGalleryProps) => <QueryLoopMedia {...props} variant="gallery" />;
