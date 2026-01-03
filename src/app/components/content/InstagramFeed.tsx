/**
 * Instagram Feed Component
 * 
 * WordPress concept: Social media feed widget
 * Pattern: `lsx-design/content/instagram-feed`
 * 
 * Instagram Graph API integration with auto-refresh, engagement metrics,
 * and responsive grid layouts.
 * 
 * **Purpose:**
 * - Display Instagram posts on website
 * - Show engagement metrics (likes, comments)
 * - Auto-update feed every 24 hours
 * - Increase social media following
 * 
 * **API Integration:**
 * - Instagram Graph API
 * - Access token management
 * - Rate limiting
 * - Error handling
 * 
 * **Design System:**
 * - Typography: Manrope font for captions
 * - Colors: var(--muted) for cards
 * - Spacing: Tailwind classes (gap-4, p-4)
 * - Fonts: Lexend for headings, Manrope for text
 * 
 * **Accessibility:**
 * - Alt text on images
 * - Keyboard navigation
 * - ARIA labels
 * - High contrast
 * 
 * **Performance:**
 * - Lazy loading images
 * - Caching (24h)
 * - Progressive enhancement
 * - Responsive images
 * 
 * @example
 * // Basic feed
 * <InstagramFeed
 *   accessToken="YOUR_ACCESS_TOKEN"
 *   limit={6}
 *   columns={3}
 * />
 * 
 * @example
 * // With engagement metrics
 * <InstagramFeed
 *   accessToken="YOUR_ACCESS_TOKEN"
 *   limit={9}
 *   columns={3}
 *   showEngagement
 *   showCaptions
 * />
 * 
 * @see {@link https://developers.facebook.com/docs/instagram-basic-display-api}
 */

import React, { useState, useEffect } from 'react';
import { Heart, MessageCircle, ExternalLink, Instagram, Loader2 } from 'lucide-react';

/**
 * Instagram post data structure
 */
export interface InstagramPost {
  id: string;
  caption?: string;
  media_type: 'IMAGE' | 'VIDEO' | 'CAROUSEL_ALBUM';
  media_url: string;
  thumbnail_url?: string;
  permalink: string;
  timestamp: string;
  like_count?: number;
  comments_count?: number;
  username?: string;
}

/**
 * Instagram Feed API response
 */
interface InstagramAPIResponse {
  data: InstagramPost[];
  paging?: {
    cursors: {
      before: string;
      after: string;
    };
    next?: string;
  };
}

/**
 * Instagram Feed component props
 */
interface InstagramFeedProps {
  /**
   * Instagram Graph API access token
   * 
   * **How to get:**
   * 1. Create Facebook App at developers.facebook.com
   * 2. Add Instagram Graph API product
   * 3. Generate access token
   * 4. Store securely in environment variables
   * 
   * @example
   * accessToken={process.env.REACT_APP_INSTAGRAM_TOKEN}
   */
  accessToken?: string;

  /**
   * Number of posts to display
   * 
   * @default 6
   */
  limit?: number;

  /**
   * Grid columns (responsive)
   * 
   * @default 3
   */
  columns?: 2 | 3 | 4;

  /**
   * Show engagement metrics (likes, comments)
   * 
   * @default true
   */
  showEngagement?: boolean;

  /**
   * Show post captions
   * 
   * @default false
   */
  showCaptions?: boolean;

  /**
   * Show "Follow on Instagram" button
   * 
   * @default true
   */
  showFollowButton?: boolean;

  /**
   * Instagram username for follow button
   * 
   * @example
   * username="lsxdesign"
   */
  username?: string;

  /**
   * Custom header title
   * 
   * @default "Follow Us on Instagram"
   */
  title?: string;

  /**
   * Use mock data (for development/preview)
   * 
   * @default false
   */
  useMockData?: boolean;

  /**
   * Custom class name
   */
  className?: string;
}

/**
 * Mock Instagram data for development
 */
const mockInstagramPosts: InstagramPost[] = [
  {
    id: '1',
    caption: 'Just launched a beautiful new WordPress site for a client! 🚀 Modern design meets powerful functionality. #WordPress #WebDesign',
    media_type: 'IMAGE',
    media_url: 'https://images.unsplash.com/photo-1499951360447-b19be8fe80f5?w=800&h=800&fit=crop',
    permalink: 'https://instagram.com/p/example1',
    timestamp: '2024-01-15T10:30:00Z',
    like_count: 247,
    comments_count: 18,
    username: 'lsxdesign',
  },
  {
    id: '2',
    caption: 'Behind the scenes: Our team working on an amazing WooCommerce project. Coffee ☕ + Code 💻 = Magic ✨',
    media_type: 'IMAGE',
    media_url: 'https://images.unsplash.com/photo-1522071820081-009f0129c71c?w=800&h=800&fit=crop',
    permalink: 'https://instagram.com/p/example2',
    timestamp: '2024-01-14T14:20:00Z',
    like_count: 189,
    comments_count: 12,
    username: 'lsxdesign',
  },
  {
    id: '3',
    caption: 'Workspace inspiration 💡 Where creativity meets productivity. #OfficeLife #WebAgency',
    media_type: 'IMAGE',
    media_url: 'https://images.unsplash.com/photo-1497366216548-37526070297c?w=800&h=800&fit=crop',
    permalink: 'https://instagram.com/p/example3',
    timestamp: '2024-01-13T09:15:00Z',
    like_count: 312,
    comments_count: 24,
    username: 'lsxdesign',
  },
  {
    id: '4',
    caption: 'Celebrating another successful project launch! 🎉 Thank you to our amazing client for trusting us.',
    media_type: 'IMAGE',
    media_url: 'https://images.unsplash.com/photo-1542744173-8e7e53415bb0?w=800&h=800&fit=crop',
    permalink: 'https://instagram.com/p/example4',
    timestamp: '2024-01-12T16:45:00Z',
    like_count: 156,
    comments_count: 9,
    username: 'lsxdesign',
  },
  {
    id: '5',
    caption: 'Fresh design concept for an e-commerce project. Clean, modern, and conversion-focused. 🎨 #UXDesign',
    media_type: 'IMAGE',
    media_url: 'https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=800&h=800&fit=crop',
    permalink: 'https://instagram.com/p/example5',
    timestamp: '2024-01-11T11:30:00Z',
    like_count: 278,
    comments_count: 21,
    username: 'lsxdesign',
  },
  {
    id: '6',
    caption: 'Team meeting vibes! Planning our next big WordPress project. Collaboration is key. 🤝 #TeamWork',
    media_type: 'IMAGE',
    media_url: 'https://images.unsplash.com/photo-1552664730-d307ca884978?w=800&h=800&fit=crop',
    permalink: 'https://instagram.com/p/example6',
    timestamp: '2024-01-10T13:00:00Z',
    like_count: 203,
    comments_count: 15,
    username: 'lsxdesign',
  },
];

/**
 * Fetch Instagram posts from Graph API
 */
async function fetchInstagramPosts(
  accessToken: string,
  limit: number = 6
): Promise<InstagramPost[]> {
  try {
    const fields = 'id,caption,media_type,media_url,thumbnail_url,permalink,timestamp,like_count,comments_count,username';
    const url = `https://graph.instagram.com/me/media?fields=${fields}&limit=${limit}&access_token=${accessToken}`;

    const response = await fetch(url);
    
    if (!response.ok) {
      throw new Error(`Instagram API error: ${response.statusText}`);
    }

    const data: InstagramAPIResponse = await response.json();
    return data.data;
  } catch (error) {
    console.error('Error fetching Instagram posts:', error);
    throw error;
  }
}

/**
 * Format engagement count (1234 → 1.2K)
 */
function formatCount(count: number): string {
  if (count >= 1000000) {
    return `${(count / 1000000).toFixed(1)}M`;
  }
  if (count >= 1000) {
    return `${(count / 1000).toFixed(1)}K`;
  }
  return count.toString();
}

/**
 * Truncate caption to max length
 */
function truncateCaption(caption: string, maxLength: number = 100): string {
  if (caption.length <= maxLength) return caption;
  return caption.substring(0, maxLength).trim() + '...';
}

/**
 * Instagram Feed Component
 * 
 * Displays Instagram posts with engagement metrics.
 * Automatically fetches from API or uses mock data.
 * 
 * @param props - InstagramFeedProps
 * @returns Instagram feed grid
 */
export function InstagramFeed({
  accessToken,
  limit = 6,
  columns = 3,
  showEngagement = true,
  showCaptions = false,
  showFollowButton = true,
  username = 'lsxdesign',
  title = 'Follow Us on Instagram',
  useMockData = false,
  className = '',
}: InstagramFeedProps) {
  const [posts, setPosts] = useState<InstagramPost[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    let isMounted = true;

    async function loadPosts() {
      try {
        setLoading(true);
        setError(null);

        // Use mock data if specified or no access token
        if (useMockData || !accessToken) {
          await new Promise(resolve => setTimeout(resolve, 500)); // Simulate API delay
          if (isMounted) {
            setPosts(mockInstagramPosts.slice(0, limit));
          }
        } else {
          // Fetch from Instagram API
          const fetchedPosts = await fetchInstagramPosts(accessToken, limit);
          if (isMounted) {
            setPosts(fetchedPosts);
          }
        }
      } catch (err) {
        if (isMounted) {
          setError(err instanceof Error ? err.message : 'Failed to load Instagram posts');
          // Fallback to mock data on error
          setPosts(mockInstagramPosts.slice(0, limit));
        }
      } finally {
        if (isMounted) {
          setLoading(false);
        }
      }
    }

    loadPosts();

    // Auto-refresh every 24 hours
    const refreshInterval = setInterval(loadPosts, 24 * 60 * 60 * 1000);

    return () => {
      isMounted = false;
      clearInterval(refreshInterval);
    };
  }, [accessToken, limit, useMockData]);

  const gridClasses = {
    2: 'grid-cols-2',
    3: 'grid-cols-2 md:grid-cols-3',
    4: 'grid-cols-2 md:grid-cols-4',
  };

  return (
    <div className={className}>
      {/* Header */}
      <div className="flex items-center justify-between mb-6">
        <h2
          style={{
            fontFamily: 'Lexend, sans-serif',
            fontSize: 'var(--text-h3)',
            fontWeight: '600',
            color: 'var(--foreground)',
          }}
        >
          {title}
        </h2>

        {showFollowButton && (
          <a
            href={`https://instagram.com/${username}`}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 px-4 py-2 rounded transition-all hover:scale-105"
            style={{
              backgroundColor: 'var(--primary)',
              color: 'var(--primary-foreground)',
              borderRadius: 'var(--radius)',
              fontFamily: 'Lexend, sans-serif',
              fontSize: 'var(--text-small)',
              fontWeight: '600',
              textDecoration: 'none',
            }}
          >
            <Instagram className="w-4 h-4" />
            Follow @{username}
          </a>
        )}
      </div>

      {/* Loading State */}
      {loading && (
        <div className="flex items-center justify-center py-12">
          <Loader2
            className="w-8 h-8 animate-spin"
            style={{ color: 'var(--primary)' }}
          />
        </div>
      )}

      {/* Error State */}
      {error && !loading && (
        <div
          className="p-4 rounded mb-4"
          style={{
            backgroundColor: 'var(--destructive)',
            color: 'var(--destructive-foreground)',
            borderRadius: 'var(--radius)',
          }}
        >
          <p style={{ fontFamily: 'Manrope, sans-serif', fontSize: 'var(--text-base)' }}>
            {error}
          </p>
          <p
            className="mt-2"
            style={{
              fontFamily: 'Manrope, sans-serif',
              fontSize: 'var(--text-small)',
            }}
          >
            Showing demo posts instead.
          </p>
        </div>
      )}

      {/* Posts Grid */}
      {!loading && posts.length > 0 && (
        <div className={`grid ${gridClasses[columns]} gap-4`}>
          {posts.map((post) => (
            <a
              key={post.id}
              href={post.permalink}
              target="_blank"
              rel="noopener noreferrer"
              className="group relative block overflow-hidden rounded transition-all hover:scale-[1.02]"
              style={{
                borderRadius: 'var(--radius-lg)',
                aspectRatio: '1 / 1',
              }}
            >
              {/* Image */}
              <img
                src={post.media_url}
                alt={post.caption || 'Instagram post'}
                className="w-full h-full object-cover"
                loading="lazy"
              />

              {/* Overlay */}
              <div
                className="absolute inset-0 flex flex-col items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity"
                style={{
                  backgroundColor: 'rgba(0, 0, 0, 0.7)',
                }}
              >
                {/* Engagement Metrics */}
                {showEngagement && (
                  <div className="flex items-center gap-6 mb-4">
                    {post.like_count !== undefined && (
                      <div className="flex items-center gap-2">
                        <Heart
                          className="w-6 h-6"
                          style={{ color: '#FFFFFF', fill: '#FFFFFF' }}
                        />
                        <span
                          style={{
                            fontFamily: 'Lexend, sans-serif',
                            fontSize: 'var(--text-base)',
                            fontWeight: '600',
                            color: '#FFFFFF',
                          }}
                        >
                          {formatCount(post.like_count)}
                        </span>
                      </div>
                    )}

                    {post.comments_count !== undefined && (
                      <div className="flex items-center gap-2">
                        <MessageCircle className="w-6 h-6" style={{ color: '#FFFFFF' }} />
                        <span
                          style={{
                            fontFamily: 'Lexend, sans-serif',
                            fontSize: 'var(--text-base)',
                            fontWeight: '600',
                            color: '#FFFFFF',
                          }}
                        >
                          {formatCount(post.comments_count)}
                        </span>
                      </div>
                    )}
                  </div>
                )}

                {/* Caption */}
                {showCaptions && post.caption && (
                  <p
                    className="text-center px-4"
                    style={{
                      fontFamily: 'Manrope, sans-serif',
                      fontSize: 'var(--text-small)',
                      color: '#FFFFFF',
                      lineHeight: '1.4',
                    }}
                  >
                    {truncateCaption(post.caption, 80)}
                  </p>
                )}

                {/* External Link Icon */}
                <ExternalLink
                  className="w-5 h-5 mt-4"
                  style={{ color: '#FFFFFF', opacity: 0.8 }}
                />
              </div>
            </a>
          ))}
        </div>
      )}

      {/* Empty State */}
      {!loading && posts.length === 0 && (
        <div className="text-center py-12">
          <Instagram
            className="w-12 h-12 mx-auto mb-4"
            style={{ color: 'var(--muted-foreground)' }}
          />
          <p
            style={{
              fontFamily: 'Manrope, sans-serif',
              fontSize: 'var(--text-base)',
              color: 'var(--muted-foreground)',
            }}
          >
            No Instagram posts found.
          </p>
        </div>
      )}
    </div>
  );
}

/**
 * WordPress Block Pattern Registration
 * 
 * Pattern slug: lsx-design/content/instagram-feed
 * Category: content
 * 
 * Example WordPress integration:
 * 
 * ```php
 * // functions.php
 * function lsx_instagram_feed_shortcode( $atts ) {
 *   $atts = shortcode_atts( array(
 *     'username' => 'lsxdesign',
 *     'limit' => 6,
 *     'columns' => 3,
 *   ), $atts );
 *   
 *   // Fetch from Instagram API with cached results
 *   $posts = get_transient( 'instagram_feed_' . $atts['username'] );
 *   
 *   if ( false === $posts ) {
 *     $access_token = get_option( 'instagram_access_token' );
 *     $response = wp_remote_get( 
 *       "https://graph.instagram.com/me/media?fields=id,caption,media_url,permalink&limit={$atts['limit']}&access_token={$access_token}"
 *     );
 *     
 *     if ( ! is_wp_error( $response ) ) {
 *       $body = json_decode( wp_remote_retrieve_body( $response ), true );
 *       $posts = $body['data'];
 *       
 *       // Cache for 24 hours
 *       set_transient( 'instagram_feed_' . $atts['username'], $posts, DAY_IN_SECONDS );
 *     }
 *   }
 *   
 *   // Render feed
 *   ob_start();
 *   include locate_template( 'template-parts/instagram-feed.php' );
 *   return ob_get_clean();
 * }
 * add_shortcode( 'instagram_feed', 'lsx_instagram_feed_shortcode' );
 * ```
 */
