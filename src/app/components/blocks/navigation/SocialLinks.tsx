/**
 * Social Links Component
 * 
 * Features:
 * - 20+ social media platforms
 * - 3 variants (icon-only, icon + text, text-only)
 * - 4 sizes (sm, md, lg, xl)
 * - 3 styles (default, filled, outline)
 * - Hover effects
 * - WCAG 2.1 AA compliant
 * 
 * Design System Compliance:
 * - Uses CSS variables for all colors
 * - Uses Lexend for text labels
 * - Accessible labels for screen readers
 * 
 * @example
 * <SocialLinks
 *   links={[
 *     { platform: 'twitter', url: 'https://twitter.com/lsxdesign' },
 *     { platform: 'linkedin', url: 'https://linkedin.com/company/lsxdesign' },
 *   ]}
 *   variant="icon-only"
 *   size="md"
 *   style="filled"
 * />
 */

export type SocialPlatform =
  | 'twitter'
  | 'facebook'
  | 'instagram'
  | 'linkedin'
  | 'youtube'
  | 'tiktok'
  | 'github'
  | 'dribbble'
  | 'behance'
  | 'pinterest'
  | 'reddit'
  | 'discord'
  | 'slack'
  | 'twitch'
  | 'snapchat'
  | 'whatsapp'
  | 'telegram'
  | 'medium'
  | 'dev'
  | 'stackoverflow'
  | 'email'
  | 'website';

export interface SocialLink {
  /** Social media platform */
  platform: SocialPlatform;
  /** Profile/page URL */
  url: string;
  /** Custom label (overrides default) */
  label?: string;
  /** Custom icon (overrides default) */
  icon?: string;
}

export interface SocialLinksProps {
  /** Social media links */
  links: SocialLink[];
  /** Display variant */
  variant?: 'icon-only' | 'icon-text' | 'text-only';
  /** Size */
  size?: 'sm' | 'md' | 'lg' | 'xl';
  /** Style */
  style?: 'default' | 'filled' | 'outline';
  /** Alignment */
  align?: 'left' | 'center' | 'right';
  /** Open in new tab */
  newTab?: boolean;
}

// Platform metadata
const platformData: Record<SocialPlatform, { label: string; icon: string; color: string }> = {
  twitter: { label: 'Twitter', icon: '𝕏', color: '#000000' },
  facebook: { label: 'Facebook', icon: 'f', color: '#1877F2' },
  instagram: { label: 'Instagram', icon: '📷', color: '#E4405F' },
  linkedin: { label: 'LinkedIn', icon: 'in', color: '#0A66C2' },
  youtube: { label: 'YouTube', icon: '▶', color: '#FF0000' },
  tiktok: { label: 'TikTok', icon: '♪', color: '#000000' },
  github: { label: 'GitHub', icon: '⚡', color: '#181717' },
  dribbble: { label: 'Dribbble', icon: '🏀', color: '#EA4C89' },
  behance: { label: 'Behance', icon: 'Be', color: '#1769FF' },
  pinterest: { label: 'Pinterest', icon: 'P', color: '#E60023' },
  reddit: { label: 'Reddit', icon: '👽', color: '#FF4500' },
  discord: { label: 'Discord', icon: '💬', color: '#5865F2' },
  slack: { label: 'Slack', icon: '#', color: '#4A154B' },
  twitch: { label: 'Twitch', icon: '📺', color: '#9146FF' },
  snapchat: { label: 'Snapchat', icon: '👻', color: '#FFFC00' },
  whatsapp: { label: 'WhatsApp', icon: '💬', color: '#25D366' },
  telegram: { label: 'Telegram', icon: '✈️', color: '#26A5E4' },
  medium: { label: 'Medium', icon: 'M', color: '#000000' },
  dev: { label: 'DEV', icon: 'DEV', color: '#0A0A0A' },
  stackoverflow: { label: 'Stack Overflow', icon: 'SO', color: '#F58025' },
  email: { label: 'Email', icon: '✉️', color: '#EA4335' },
  website: { label: 'Website', icon: '🌐', color: '#000000' },
};

export function SocialLinks({
  links,
  variant = 'icon-only',
  size = 'md',
  style = 'default',
  align = 'left',
  newTab = true,
}: SocialLinksProps) {
  return (
    <div
      style={{
        display: 'flex',
        alignItems: 'center',
        gap: size === 'sm' ? '0.5rem' : size === 'md' ? '0.75rem' : size === 'lg' ? '1rem' : '1.25rem',
        justifyContent: align === 'center' ? 'center' : align === 'right' ? 'flex-end' : 'flex-start',
        flexWrap: 'wrap',
      }}
    >
      {links.map((link, index) => (
        <SocialLinkButton
          key={`${link.platform}-${index}`}
          link={link}
          variant={variant}
          size={size}
          style={style}
          newTab={newTab}
        />
      ))}
    </div>
  );
}

/**
 * Individual Social Link Button
 */
interface SocialLinkButtonProps {
  link: SocialLink;
  variant: 'icon-only' | 'icon-text' | 'text-only';
  size: 'sm' | 'md' | 'lg' | 'xl';
  style: 'default' | 'filled' | 'outline';
  newTab: boolean;
}

function SocialLinkButton({ link, variant, size, style, newTab }: SocialLinkButtonProps) {
  const platform = platformData[link.platform];
  const label = link.label || platform.label;
  const icon = link.icon || platform.icon;

  const sizeMap = {
    sm: { fontSize: 'var(--text-small)', padding: '0.5rem', iconSize: '1rem' },
    md: { fontSize: 'var(--text-base)', padding: '0.75rem', iconSize: '1.25rem' },
    lg: { fontSize: 'var(--text-lg)', padding: '1rem', iconSize: '1.5rem' },
    xl: { fontSize: 'var(--text-xl)', padding: '1.25rem', iconSize: '2rem' },
  };

  const dimensions = sizeMap[size];

  const getBackgroundColor = () => {
    if (style === 'filled') return 'var(--primary)';
    if (style === 'outline') return 'transparent';
    return 'transparent';
  };

  const getTextColor = () => {
    if (style === 'filled') return 'var(--primary-foreground)';
    return 'var(--foreground)';
  };

  const getBorder = () => {
    if (style === 'outline') return '1px solid var(--border)';
    return 'none';
  };

  return (
    <a
      href={link.url}
      target={newTab ? '_blank' : undefined}
      rel={newTab ? 'noopener noreferrer' : undefined}
      aria-label={`${label} (opens in new tab)`}
      style={{
        display: 'flex',
        alignItems: 'center',
        gap: '0.5rem',
        padding: variant === 'icon-only' ? dimensions.padding : '0.75rem 1.25rem',
        fontFamily: 'Lexend, sans-serif',
        fontSize: dimensions.fontSize,
        fontWeight: '500',
        color: getTextColor(),
        backgroundColor: getBackgroundColor(),
        border: getBorder(),
        borderRadius: 'var(--radius)',
        textDecoration: 'none',
        transition: 'all 0.2s ease',
        cursor: 'pointer',
        minHeight: '44px',
        minWidth: variant === 'icon-only' ? '44px' : 'auto',
        justifyContent: 'center',
      }}
      onMouseEnter={(e) => {
        if (style === 'default') {
          e.currentTarget.style.backgroundColor = 'var(--muted)';
        } else if (style === 'outline') {
          e.currentTarget.style.backgroundColor = 'var(--muted)';
        } else {
          e.currentTarget.style.opacity = '0.9';
        }
      }}
      onMouseLeave={(e) => {
        if (style === 'default' || style === 'outline') {
          e.currentTarget.style.backgroundColor = style === 'filled' ? 'var(--primary)' : 'transparent';
        } else {
          e.currentTarget.style.opacity = '1';
        }
      }}
    >
      {/* Icon */}
      {variant !== 'text-only' && (
        <span
          style={{
            fontSize: dimensions.iconSize,
            lineHeight: 1,
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
          }}
          aria-hidden="true"
        >
          {icon}
        </span>
      )}

      {/* Text Label */}
      {variant !== 'icon-only' && <span>{label}</span>}
    </a>
  );
}

/**
 * Social Links List (Vertical)
 * 
 * Stacked vertical list of social links.
 */
export interface SocialLinksListProps {
  links: SocialLink[];
  showLabels?: boolean;
  newTab?: boolean;
}

export function SocialLinksList({ links, showLabels = true, newTab = true }: SocialLinksListProps) {
  return (
    <div
      style={{
        display: 'flex',
        flexDirection: 'column',
        gap: '0.75rem',
      }}
    >
      {links.map((link, index) => {
        const platform = platformData[link.platform];
        const label = link.label || platform.label;
        const icon = link.icon || platform.icon;

        return (
          <a
            key={`${link.platform}-${index}`}
            href={link.url}
            target={newTab ? '_blank' : undefined}
            rel={newTab ? 'noopener noreferrer' : undefined}
            style={{
              display: 'flex',
              alignItems: 'center',
              gap: '0.75rem',
              padding: '0.75rem 1rem',
              fontFamily: 'Lexend, sans-serif',
              fontSize: 'var(--text-base)',
              fontWeight: '400',
              color: 'var(--foreground)',
              backgroundColor: 'transparent',
              border: '1px solid var(--border)',
              borderRadius: 'var(--radius)',
              textDecoration: 'none',
              transition: 'all 0.2s ease',
              cursor: 'pointer',
              minHeight: '48px',
            }}
            onMouseEnter={(e) => {
              e.currentTarget.style.backgroundColor = 'var(--muted)';
            }}
            onMouseLeave={(e) => {
              e.currentTarget.style.backgroundColor = 'transparent';
            }}
          >
            {/* Icon */}
            <span
              style={{
                fontSize: '1.25rem',
                lineHeight: 1,
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                width: '24px',
              }}
              aria-hidden="true"
            >
              {icon}
            </span>

            {/* Label */}
            {showLabels && <span>{label}</span>}
          </a>
        );
      })}
    </div>
  );
}

/**
 * Social Share Buttons
 * 
 * Share current page on social media.
 */
export interface SocialShareProps {
  /** Share URL */
  url?: string;
  /** Share title */
  title?: string;
  /** Share description */
  description?: string;
  /** Platforms to include */
  platforms?: SocialPlatform[];
  /** Size */
  size?: 'sm' | 'md' | 'lg';
}

export function SocialShare({
  url,
  title,
  description,
  platforms = ['twitter', 'facebook', 'linkedin', 'email'],
  size = 'md',
}: SocialShareProps) {
  const shareUrl = url || (typeof window !== 'undefined' ? window.location.href : '');
  const shareTitle = title || (typeof document !== 'undefined' ? document.title : '');

  const getShareUrl = (platform: SocialPlatform): string => {
    const encodedUrl = encodeURIComponent(shareUrl);
    const encodedTitle = encodeURIComponent(shareTitle);
    const encodedDescription = description ? encodeURIComponent(description) : '';

    switch (platform) {
      case 'twitter':
        return `https://twitter.com/intent/tweet?url=${encodedUrl}&text=${encodedTitle}`;
      case 'facebook':
        return `https://www.facebook.com/sharer/sharer.php?u=${encodedUrl}`;
      case 'linkedin':
        return `https://www.linkedin.com/sharing/share-offsite/?url=${encodedUrl}`;
      case 'pinterest':
        return `https://pinterest.com/pin/create/button/?url=${encodedUrl}&description=${encodedTitle}`;
      case 'reddit':
        return `https://reddit.com/submit?url=${encodedUrl}&title=${encodedTitle}`;
      case 'email':
        return `mailto:?subject=${encodedTitle}&body=${encodedDescription}%0A%0A${encodedUrl}`;
      case 'whatsapp':
        return `https://wa.me/?text=${encodedTitle}%20${encodedUrl}`;
      case 'telegram':
        return `https://t.me/share/url?url=${encodedUrl}&text=${encodedTitle}`;
      default:
        return shareUrl;
    }
  };

  const shareLinks: SocialLink[] = platforms.map((platform) => ({
    platform,
    url: getShareUrl(platform),
  }));

  return (
    <div
      style={{
        display: 'flex',
        flexDirection: 'column',
        gap: '1rem',
      }}
    >
      <div
        style={{
          fontFamily: 'Lexend, sans-serif',
          fontSize: 'var(--text-base)',
          fontWeight: '500',
          color: 'var(--foreground)',
        }}
      >
        Share this:
      </div>

      <SocialLinks links={shareLinks} variant="icon-text" size={size} style="outline" />
    </div>
  );
}
