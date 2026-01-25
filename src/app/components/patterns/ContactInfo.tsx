/**
 * Contact Info Pattern
 * 
 * WordPress pattern: lsx-design/content/contact-info
 * 
 * Displays contact information (phone, email, address, hours, social links) in a structured format.
 * Commonly used on Contact pages, footer sections, and location pages.
 * 
 * **Usage:**
 * ```tsx
 * <ContactInfo
 *   items={[
 *     {
 *       type: 'phone',
 *       label: 'Phone',
 *       value: '+1 (555) 123-4567',
 *       link: 'tel:+15551234567'
 *     },
 *     {
 *       type: 'email',
 *       label: 'Email',
 *       value: 'hello@example.com',
 *       link: 'mailto:hello@example.com'
 *     }
 *   ]}
 *   variant="cards"
 * />
 * ```
 * 
 * @see {@link /guidelines/patterns/ContactInfo.md}
 */

import { Phone, Mail, MapPin, Clock, Globe, MessageCircle } from 'lucide-react';

export type ContactInfoType = 'phone' | 'email' | 'address' | 'hours' | 'website' | 'chat';

export interface ContactInfoItem {
  /** Type of contact info */
  type: ContactInfoType;
  /** Label/heading for the contact method */
  label: string;
  /** Contact value (displayed text) */
  value: string;
  /** Optional link (tel:, mailto:, https:) */
  link?: string;
  /** Optional additional info */
  description?: string;
  /** Optional icon override */
  icon?: React.ComponentType<{ size?: number; style?: React.CSSProperties }>;
}

export interface ContactInfoProps {
  /** Array of contact info items */
  items: ContactInfoItem[];
  /** Visual variant */
  variant?: 'default' | 'cards' | 'minimal' | 'sidebar';
  /** Layout direction */
  layout?: 'vertical' | 'horizontal';
  /** Show icons */
  showIcons?: boolean;
  /** Max width constraint */
  maxWidth?: '4xl' | '5xl' | '6xl' | 'none';
  /** Custom gap between items */
  gap?: string;
}

// Icon mapping
const iconMap: Record<ContactInfoType, React.ComponentType<{ size?: number; style?: React.CSSProperties }>> = {
  phone: Phone,
  email: Mail,
  address: MapPin,
  hours: Clock,
  website: Globe,
  chat: MessageCircle
};

export function ContactInfo({
  items,
  variant = 'cards',
  layout = 'vertical',
  showIcons = true,
  maxWidth = '6xl',
  gap = 'var(--spacing-6)'
}: ContactInfoProps) {
  // Max width class
  const maxWidthClass = maxWidth !== 'none' ? `wp-max-w-${maxWidth}` : '';

  // Container styles based on layout
  const containerStyles = layout === 'horizontal' 
    ? {
        display: 'grid',
        gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))',
        gap
      }
    : {
        display: 'flex',
        flexDirection: 'column' as const,
        gap
      };

  return (
    <div className={maxWidthClass}>
      <div style={containerStyles}>
        {items.map((item, index) => {
          const Icon = item.icon || iconMap[item.type];
          const isLink = !!item.link;

          // Card content
          const content = (
            <>
              {/* Icon */}
              {showIcons && Icon && (
                <div
                  style={{
                    ...(variant === 'cards' || variant === 'default' ? {
                      width: '48px',
                      height: '48px',
                      borderRadius: 'var(--radius-lg)',
                      backgroundColor: 'var(--primary-soft)',
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'center',
                      marginBottom: variant === 'cards' ? 'var(--spacing-4)' : '0',
                      flexShrink: 0
                    } : variant === 'minimal' ? {
                      marginRight: 'var(--spacing-3)',
                      flexShrink: 0
                    } : {
                      width: '40px',
                      height: '40px',
                      borderRadius: 'var(--radius)',
                      backgroundColor: 'var(--muted)',
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'center',
                      marginBottom: 'var(--spacing-3)',
                      flexShrink: 0
                    })
                  }}
                >
                  <Icon 
                    size={variant === 'sidebar' ? 20 : 24} 
                    style={{ color: variant === 'cards' || variant === 'default' ? 'var(--primary)' : 'var(--muted-foreground)' }} 
                  />
                </div>
              )}

              {/* Content */}
              <div style={{ flex: 1 }}>
                {/* Label */}
                <div
                  style={{
                    fontFamily: 'var(--font-secondary)',
                    fontSize: variant === 'sidebar' ? 'var(--text-xs)' : 'var(--text-sm)',
                    fontWeight: 'var(--font-weight-semibold)',
                    color: 'var(--muted-foreground)',
                    marginBottom: 'var(--spacing-2)',
                    textTransform: 'uppercase',
                    letterSpacing: '0.05em'
                  }}
                >
                  {item.label}
                </div>

                {/* Value */}
                <div
                  style={{
                    fontFamily: 'var(--font-primary)',
                    fontSize: variant === 'sidebar' ? 'var(--text-sm)' : 'var(--text-base)',
                    fontWeight: 'var(--font-weight-medium)',
                    color: isLink ? 'var(--primary)' : 'var(--foreground)',
                    marginBottom: item.description ? 'var(--spacing-2)' : '0',
                    ...(isLink ? {
                      textDecoration: 'none',
                      transition: 'opacity 0.2s ease'
                    } : {})
                  }}
                >
                  {item.value}
                </div>

                {/* Description */}
                {item.description && (
                  <div
                    style={{
                      fontFamily: 'var(--font-primary)',
                      fontSize: 'var(--text-sm)',
                      lineHeight: '1.6',
                      color: 'var(--muted-foreground)'
                    }}
                  >
                    {item.description}
                  </div>
                )}
              </div>
            </>
          );

          // Wrapper element
          const WrapperElement = isLink ? 'a' : 'div';
          const wrapperProps = isLink ? {
            href: item.link,
            ...(item.type === 'website' ? {
              target: '_blank',
              rel: 'noopener noreferrer'
            } : {}),
            style: {
              textDecoration: 'none',
              display: 'flex',
              ...(variant === 'minimal' ? {
                alignItems: 'center',
                gap: 'var(--spacing-3)'
              } : variant === 'cards' ? {
                flexDirection: 'column' as const,
                padding: 'var(--spacing-6)',
                backgroundColor: 'var(--card)',
                borderRadius: 'var(--radius-lg)',
                border: '1px solid var(--border-soft)',
                transition: 'all 0.3s ease'
              } : variant === 'sidebar' ? {
                flexDirection: 'column' as const,
                padding: 'var(--spacing-4)',
                backgroundColor: 'var(--muted)',
                borderRadius: 'var(--radius)',
                border: '1px solid var(--border)'
              } : {
                gap: 'var(--spacing-4)',
                padding: 'var(--spacing-5)',
                borderRadius: 'var(--radius)',
                border: '1px solid var(--border)'
              })
            },
            onMouseEnter: variant === 'cards' ? (e: React.MouseEvent<HTMLAnchorElement>) => {
              e.currentTarget.style.transform = 'translateY(-4px)';
              e.currentTarget.style.boxShadow = '0 12px 32px rgba(0, 0, 0, 0.12)';
              e.currentTarget.style.borderColor = 'var(--primary)';
            } : undefined,
            onMouseLeave: variant === 'cards' ? (e: React.MouseEvent<HTMLAnchorElement>) => {
              e.currentTarget.style.transform = 'translateY(0)';
              e.currentTarget.style.boxShadow = 'none';
              e.currentTarget.style.borderColor = 'var(--border-soft)';
            } : undefined
          } : {
            style: {
              display: 'flex',
              ...(variant === 'minimal' ? {
                alignItems: 'center',
                gap: 'var(--spacing-3)'
              } : variant === 'cards' ? {
                flexDirection: 'column' as const,
                padding: 'var(--spacing-6)',
                backgroundColor: 'var(--card)',
                borderRadius: 'var(--radius-lg)',
                border: '1px solid var(--border-soft)'
              } : variant === 'sidebar' ? {
                flexDirection: 'column' as const,
                padding: 'var(--spacing-4)',
                backgroundColor: 'var(--muted)',
                borderRadius: 'var(--radius)',
                border: '1px solid var(--border)'
              } : {
                gap: 'var(--spacing-4)',
                padding: 'var(--spacing-5)',
                borderRadius: 'var(--radius)',
                border: '1px solid var(--border)'
              })
            }
          };

          return (
            <WrapperElement key={index} {...wrapperProps}>
              {content}
            </WrapperElement>
          );
        })}
      </div>
    </div>
  );
}
