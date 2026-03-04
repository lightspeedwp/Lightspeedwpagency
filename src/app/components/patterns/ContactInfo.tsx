/**
 * Contact Info Pattern
 * 
 * Contact information cards (phone, email, address, hours).
 * Maps to WordPress pattern: lsx-design/content/contact-info
 * 
 * **Design Token Compliance:**
 * - Uses /src/styles/patterns/contact-info.css
 * - 100% CSS variables
 * - BEM naming
 */

import { Phone, EnvelopeSimple as Mail, MapPin, Clock, Globe, Chat as MessageCircle } from '@phosphor-icons/react';

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
  icon?: React.ComponentType<{ size?: number; className?: string }>;
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
const iconMap: Record<ContactInfoType, React.ComponentType<{ size?: number; className?: string }>> = {
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

  // Container classes
  const containerClass = `contact-info contact-info--${layout}`;
  const containerStyle = { gap };

  return (
    <div className={maxWidthClass}>
      <div className={containerClass} style={containerStyle}>
        {items.map((item, index) => {
          const Icon = item.icon || iconMap[item.type];
          const isLink = !!item.link;

          // Item classes
          const itemClass = `contact-info__item contact-info__item--${variant}`;

          // Content
          const content = (
            <>
              {/* Icon */}
              {showIcons && Icon && (
                <div className="contact-info__icon-wrapper">
                  <Icon 
                    size={variant === 'sidebar' ? 20 : 24} 
                  />
                </div>
              )}

              {/* Content */}
              <div className="contact-info__content">
                {/* Label */}
                <div className="contact-info__label">
                  {item.label}
                </div>

                {/* Value */}
                <div className="contact-info__value">
                  {item.value}
                </div>

                {/* Description */}
                {item.description && (
                  <div className="contact-info__description">
                    {item.description}
                  </div>
                )}
              </div>
            </>
          );

          // Render as link or div
          if (isLink) {
            return (
              <a
                key={index}
                href={item.link}
                className={itemClass}
                target={item.type === 'website' ? '_blank' : undefined}
                rel={item.type === 'website' ? 'noopener noreferrer' : undefined}
              >
                {content}
              </a>
            );
          }

          return (
            <div key={index} className={itemClass}>
              {content}
            </div>
          );
        })}
      </div>
    </div>
  );
}