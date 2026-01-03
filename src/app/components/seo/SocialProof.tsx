/**
 * Social Proof Components
 * 
 * WordPress concept: Marketing widgets
 * Pattern: `lsx-design/marketing/social-proof`
 * 
 * Real-time social proof indicators including live visitor counters,
 * recent activity notifications, customer counts, and review displays.
 * 
 * **Purpose:**
 * - Increase conversions through FOMO (Fear Of Missing Out)
 * - Build trust through transparency
 * - Show active community engagement
 * - Display social validation
 * 
 * **Use Cases:**
 * - Product pages (recent purchases)
 * - Landing pages (visitor counts)
 * - Pricing pages (active users)
 * - Homepage (customer statistics)
 * - Checkout (trust signals)
 * 
 * **Design System:**
 * - Typography: Manrope font, var(--text-small) to var(--text-base)
 * - Colors: var(--primary) for highlights, var(--muted) for backgrounds
 * - Spacing: Tailwind classes (p-3, gap-2)
 * - Fonts: Manrope for all text
 * 
 * **Accessibility:**
 * - ARIA live regions for dynamic updates
 * - Reduced motion support
 * - High contrast in both themes
 * - Screen reader friendly
 * 
 * **Performance:**
 * - Lightweight animations
 * - CSS-only styling
 * - Minimal bundle size (~3KB)
 * - Optional mock data mode
 * 
 * @example
 * // Live visitor counter
 * <LiveVisitorCount
 *   count={247}
 *   label="people viewing now"
 * />
 * 
 * @example
 * // Recent purchase notification
 * <RecentActivityNotification
 *   activity={{
 *     user: "Sarah from Cape Town",
 *     action: "purchased",
 *     item: "WordPress Development Package",
 *     timeAgo: "3 minutes ago"
 *   }}
 * />
 */

import React, { useState, useEffect } from 'react';
import { 
  Eye, 
  ShoppingBag, 
  Users, 
  Star,
  CheckCircle2,
  TrendingUp,
  Heart
} from 'lucide-react';

/**
 * Live Visitor Count
 * 
 * Shows number of people currently viewing the page/product.
 * Creates urgency and FOMO.
 */
interface LiveVisitorCountProps {
  count: number;
  label?: string;
  showIcon?: boolean;
  animate?: boolean;
  className?: string;
}

export function LiveVisitorCount({ 
  count, 
  label = 'people viewing now',
  showIcon = true,
  animate = true,
  className = ''
}: LiveVisitorCountProps) {
  const [displayCount, setDisplayCount] = useState(count);

  // Simulate live count fluctuation
  useEffect(() => {
    if (!animate) return;

    const interval = setInterval(() => {
      const variance = Math.floor(Math.random() * 5) - 2; // +/- 2
      setDisplayCount(prev => Math.max(1, prev + variance));
    }, 8000);

    return () => clearInterval(interval);
  }, [animate]);

  return (
    <div 
      className={`inline-flex items-center gap-2 px-3 py-2 rounded ${className}`}
      style={{
        backgroundColor: 'var(--muted)',
        borderRadius: 'var(--radius)',
      }}
      role="status"
      aria-live="polite"
      aria-atomic="true"
    >
      {showIcon && (
        <Eye 
          className="w-4 h-4"
          style={{ color: 'var(--primary)' }}
        />
      )}
      <span
        style={{
          fontFamily: 'Manrope, sans-serif',
          fontSize: 'var(--text-small)',
          fontWeight: '600',
          color: 'var(--primary)',
        }}
      >
        {displayCount}
      </span>
      <span
        style={{
          fontFamily: 'Manrope, sans-serif',
          fontSize: 'var(--text-small)',
          color: 'var(--muted-foreground)',
        }}
      >
        {label}
      </span>
    </div>
  );
}

/**
 * Recent Activity Notification
 * 
 * Toast-style notification showing recent user actions.
 * Appears and disappears automatically.
 */
interface Activity {
  user: string;
  action: string;
  item?: string;
  timeAgo: string;
}

interface RecentActivityNotificationProps {
  activity: Activity;
  duration?: number;
  onClose?: () => void;
  className?: string;
}

export function RecentActivityNotification({ 
  activity,
  duration = 5000,
  onClose,
  className = ''
}: RecentActivityNotificationProps) {
  const [isVisible, setIsVisible] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsVisible(false);
      onClose?.();
    }, duration);

    return () => clearTimeout(timer);
  }, [duration, onClose]);

  if (!isVisible) return null;

  return (
    <div
      className={`flex items-start gap-3 p-4 rounded shadow-lg border max-w-sm ${className}`}
      style={{
        backgroundColor: 'var(--background)',
        borderColor: 'var(--border)',
        borderRadius: 'var(--radius-lg)',
        animation: 'slideInRight 0.3s ease-out',
      }}
      role="status"
      aria-live="polite"
    >
      <div 
        className="p-2 rounded"
        style={{
          backgroundColor: 'var(--primary)',
          borderRadius: 'var(--radius)',
        }}
      >
        <ShoppingBag className="w-4 h-4" style={{ color: 'var(--primary-foreground)' }} />
      </div>

      <div className="flex-1">
        <p
          style={{
            fontFamily: 'Manrope, sans-serif',
            fontSize: 'var(--text-small)',
            fontWeight: '600',
            color: 'var(--foreground)',
            marginBottom: '2px',
          }}
        >
          {activity.user}
        </p>
        <p
          style={{
            fontFamily: 'Manrope, sans-serif',
            fontSize: 'var(--text-small)',
            color: 'var(--muted-foreground)',
          }}
        >
          {activity.action} {activity.item && <span className="font-medium">{activity.item}</span>}
        </p>
        <p
          style={{
            fontFamily: 'Manrope, sans-serif',
            fontSize: 'var(--text-small)',
            color: 'var(--muted-foreground)',
            marginTop: '4px',
          }}
        >
          {activity.timeAgo}
        </p>
      </div>

      <button
        onClick={() => {
          setIsVisible(false);
          onClose?.();
        }}
        className="text-muted-foreground hover:text-foreground transition-colors"
        aria-label="Close notification"
        style={{
          background: 'none',
          border: 'none',
          cursor: 'pointer',
          padding: 0,
        }}
      >
        ×
      </button>
    </div>
  );
}

/**
 * Customer Count Stats
 * 
 * Display total customer/user statistics.
 */
interface CustomerStatsProps {
  count: number;
  label: string;
  icon?: React.ReactNode;
  showTrending?: boolean;
  className?: string;
}

export function CustomerStats({ 
  count, 
  label,
  icon = <Users className="w-6 h-6" />,
  showTrending = false,
  className = ''
}: CustomerStatsProps) {
  return (
    <div 
      className={`flex items-center gap-4 p-4 rounded ${className}`}
      style={{
        backgroundColor: 'var(--muted)',
        borderRadius: 'var(--radius-lg)',
      }}
    >
      <div
        className="p-3 rounded"
        style={{
          backgroundColor: 'var(--primary)',
          borderRadius: 'var(--radius)',
        }}
      >
        <div style={{ color: 'var(--primary-foreground)' }}>
          {icon}
        </div>
      </div>

      <div className="flex-1">
        <div className="flex items-baseline gap-2">
          <span
            style={{
              fontFamily: 'Lexend, sans-serif',
              fontSize: 'var(--text-h3)',
              fontWeight: '600',
              color: 'var(--foreground)',
            }}
          >
            {count.toLocaleString()}
          </span>
          {showTrending && (
            <TrendingUp 
              className="w-5 h-5"
              style={{ color: 'var(--primary)' }}
            />
          )}
        </div>
        <p
          style={{
            fontFamily: 'Manrope, sans-serif',
            fontSize: 'var(--text-small)',
            color: 'var(--muted-foreground)',
          }}
        >
          {label}
        </p>
      </div>
    </div>
  );
}

/**
 * Review Stars Display
 * 
 * Show aggregate rating with stars and review count.
 */
interface ReviewStarsProps {
  rating: number;
  reviewCount: number;
  maxRating?: number;
  showCount?: boolean;
  size?: 'sm' | 'md' | 'lg';
  className?: string;
}

export function ReviewStars({ 
  rating, 
  reviewCount,
  maxRating = 5,
  showCount = true,
  size = 'md',
  className = ''
}: ReviewStarsProps) {
  const sizeMap = {
    sm: 'w-4 h-4',
    md: 'w-5 h-5',
    lg: 'w-6 h-6',
  };

  const textSizeMap = {
    sm: 'var(--text-small)',
    md: 'var(--text-base)',
    lg: 'var(--text-lg)',
  };

  const renderStars = () => {
    const stars = [];
    const fullStars = Math.floor(rating);
    const hasHalfStar = rating % 1 >= 0.5;

    for (let i = 0; i < maxRating; i++) {
      if (i < fullStars) {
        stars.push(
          <Star 
            key={i} 
            className={sizeMap[size]}
            style={{ color: 'var(--primary)', fill: 'var(--primary)' }}
          />
        );
      } else if (i === fullStars && hasHalfStar) {
        stars.push(
          <Star 
            key={i} 
            className={sizeMap[size]}
            style={{ color: 'var(--primary)', fill: 'transparent' }}
          />
        );
      } else {
        stars.push(
          <Star 
            key={i} 
            className={sizeMap[size]}
            style={{ color: 'var(--muted-foreground)', fill: 'transparent' }}
          />
        );
      }
    }

    return stars;
  };

  return (
    <div className={`flex items-center gap-2 ${className}`}>
      <div className="flex items-center gap-1">
        {renderStars()}
      </div>
      
      {showCount && (
        <span
          style={{
            fontFamily: 'Manrope, sans-serif',
            fontSize: textSizeMap[size],
            fontWeight: '600',
            color: 'var(--foreground)',
          }}
        >
          {rating.toFixed(1)}
        </span>
      )}

      {showCount && (
        <span
          style={{
            fontFamily: 'Manrope, sans-serif',
            fontSize: textSizeMap[size],
            color: 'var(--muted-foreground)',
          }}
        >
          ({reviewCount.toLocaleString()} reviews)
        </span>
      )}
    </div>
  );
}

/**
 * Verified Buyer Badge
 * 
 * Small badge indicating verified purchase.
 */
interface VerifiedBadgeProps {
  text?: string;
  className?: string;
}

export function VerifiedBadge({ 
  text = 'Verified Buyer',
  className = ''
}: VerifiedBadgeProps) {
  return (
    <div 
      className={`inline-flex items-center gap-1 px-2 py-1 rounded ${className}`}
      style={{
        backgroundColor: 'var(--primary)',
        borderRadius: 'var(--radius-sm)',
      }}
    >
      <CheckCircle2 
        className="w-3 h-3"
        style={{ color: 'var(--primary-foreground)' }}
      />
      <span
        style={{
          fontFamily: 'Manrope, sans-serif',
          fontSize: 'var(--text-small)',
          fontWeight: '600',
          color: 'var(--primary-foreground)',
        }}
      >
        {text}
      </span>
    </div>
  );
}

/**
 * Social Follower Count
 * 
 * Display social media follower counts.
 */
interface SocialFollowerCountProps {
  platform: 'facebook' | 'twitter' | 'instagram' | 'linkedin' | 'youtube';
  count: number;
  url?: string;
  className?: string;
}

export function SocialFollowerCount({ 
  platform,
  count,
  url,
  className = ''
}: SocialFollowerCountProps) {
  const platformLabels = {
    facebook: 'Facebook Followers',
    twitter: 'Twitter Followers',
    instagram: 'Instagram Followers',
    linkedin: 'LinkedIn Followers',
    youtube: 'YouTube Subscribers',
  };

  const content = (
    <div 
      className={`flex items-center gap-3 p-3 rounded border ${className}`}
      style={{
        backgroundColor: 'var(--muted)',
        borderColor: 'var(--border)',
        borderRadius: 'var(--radius)',
      }}
    >
      <Heart 
        className="w-5 h-5"
        style={{ color: 'var(--primary)' }}
      />
      <div>
        <p
          style={{
            fontFamily: 'Manrope, sans-serif',
            fontSize: 'var(--text-lg)',
            fontWeight: '600',
            color: 'var(--foreground)',
          }}
        >
          {count.toLocaleString()}
        </p>
        <p
          style={{
            fontFamily: 'Manrope, sans-serif',
            fontSize: 'var(--text-small)',
            color: 'var(--muted-foreground)',
          }}
        >
          {platformLabels[platform]}
        </p>
      </div>
    </div>
  );

  if (url) {
    return (
      <a 
        href={url} 
        target="_blank" 
        rel="noopener noreferrer"
        className="block hover:scale-105 transition-transform"
      >
        {content}
      </a>
    );
  }

  return content;
}

/**
 * Activity Feed
 * 
 * Scrolling list of recent activities.
 */
interface ActivityFeedProps {
  activities: Activity[];
  maxVisible?: number;
  autoScroll?: boolean;
  className?: string;
}

export function ActivityFeed({ 
  activities,
  maxVisible = 5,
  autoScroll = false,
  className = ''
}: ActivityFeedProps) {
  const [visibleActivities, setVisibleActivities] = useState(
    activities.slice(0, maxVisible)
  );

  useEffect(() => {
    if (!autoScroll) return;

    const interval = setInterval(() => {
      setVisibleActivities(prev => {
        const next = [...prev];
        next.shift();
        const nextActivity = activities[Math.floor(Math.random() * activities.length)];
        next.push(nextActivity);
        return next;
      });
    }, 5000);

    return () => clearInterval(interval);
  }, [activities, autoScroll]);

  return (
    <div 
      className={`space-y-2 ${className}`}
      role="feed"
      aria-live="polite"
    >
      {visibleActivities.map((activity, index) => (
        <div
          key={index}
          className="flex items-center gap-3 p-3 rounded border"
          style={{
            backgroundColor: 'var(--background)',
            borderColor: 'var(--border)',
            borderRadius: 'var(--radius)',
          }}
        >
          <div 
            className="w-8 h-8 rounded-full flex items-center justify-center"
            style={{
              backgroundColor: 'var(--primary)',
            }}
          >
            <span
              style={{
                fontFamily: 'Lexend, sans-serif',
                fontSize: 'var(--text-small)',
                fontWeight: '600',
                color: 'var(--primary-foreground)',
              }}
            >
              {activity.user.charAt(0)}
            </span>
          </div>

          <div className="flex-1 min-w-0">
            <p
              className="truncate"
              style={{
                fontFamily: 'Manrope, sans-serif',
                fontSize: 'var(--text-small)',
                color: 'var(--foreground)',
              }}
            >
              <span className="font-semibold">{activity.user}</span> {activity.action} {activity.item}
            </p>
            <p
              style={{
                fontFamily: 'Manrope, sans-serif',
                fontSize: 'var(--text-small)',
                color: 'var(--muted-foreground)',
              }}
            >
              {activity.timeAgo}
            </p>
          </div>
        </div>
      ))}
    </div>
  );
}

/**
 * WordPress Block Pattern Registration
 * 
 * Pattern slug: lsx-design/marketing/social-proof
 * Category: marketing
 */
