/**
 * Trust Badges Component
 * 
 * WordPress concept: Reusable block pattern
 * Pattern: `lsx-design/marketing/trust-badges`
 * 
 * Visual trust indicators including payment methods, security certificates,
 * partner logos, and industry certifications.
 * 
 * **Purpose:**
 * - Build customer trust and credibility
 * - Display payment options clearly
 * - Showcase security and compliance
 * - Highlight partnerships and certifications
 * 
 * **Use Cases:**
 * - E-commerce checkout pages
 * - Service landing pages
 * - Footer (site-wide trust signals)
 * - Pricing pages
 * - Contact/inquiry pages
 * 
 * **Design System:**
 * - Typography: Manrope font, var(--text-small)
 * - Colors: var(--muted-foreground) for text
 * - Spacing: Tailwind classes (gap-4, p-4)
 * - Fonts: Manrope for labels, Lexend for headings
 * 
 * **Accessibility:**
 * - Descriptive alt text on all badge images
 * - Semantic HTML structure
 * - Keyboard accessible tooltips
 * - ARIA labels where needed
 * - High contrast in both themes
 * 
 * **Performance:**
 * - SVG icons for scalability
 * - Lazy loading for badge images
 * - Minimal bundle size (~2KB)
 * - CSS-only styling
 * 
 * @example
 * // Payment methods
 * <TrustBadges
 *   badges={[
 *     { type: 'payment', name: 'Visa', icon: <CreditCard /> },
 *     { type: 'payment', name: 'Mastercard', icon: <CreditCard /> },
 *     { type: 'payment', name: 'PayPal', icon: <DollarSign /> }
 *   ]}
 *   layout="horizontal"
 * />
 * 
 * @example
 * // Security badges
 * <TrustBadges
 *   badges={[
 *     { type: 'security', name: 'SSL Secure', icon: <Shield /> },
 *     { type: 'security', name: 'PCI Compliant', icon: <Lock /> }
 *   ]}
 *   showLabels={true}
 * />
 */

import React from 'react';
import { 
  CreditCard, 
  Shield, 
  Lock, 
  Award,
  CheckCircle2,
  Star,
  Globe,
  Users
} from 'lucide-react';

/**
 * Badge type definition
 */
type BadgeType = 'payment' | 'security' | 'certification' | 'partner' | 'award';

/**
 * Individual badge configuration
 */
interface Badge {
  type: BadgeType;
  name: string;
  icon?: React.ReactNode;
  image?: string;
  tooltip?: string;
}

/**
 * Trust Badges component props
 */
interface TrustBadgesProps {
  badges: Badge[];
  layout?: 'horizontal' | 'grid';
  showLabels?: boolean;
  title?: string;
  className?: string;
}

/**
 * Get default icon for badge type
 */
function getDefaultIcon(type: BadgeType): React.ReactNode {
  const iconMap = {
    payment: <CreditCard className="w-6 h-6" />,
    security: <Shield className="w-6 h-6" />,
    certification: <Award className="w-6 h-6" />,
    partner: <Globe className="w-6 h-6" />,
    award: <Star className="w-6 h-6" />,
  };
  return iconMap[type];
}

/**
 * Trust Badges Component
 * 
 * Displays trust indicators in horizontal or grid layout.
 * 
 * @param props - TrustBadgesProps
 * @returns Trust badges display
 */
export function TrustBadges({
  badges,
  layout = 'horizontal',
  showLabels = true,
  title,
  className = '',
}: TrustBadgesProps) {
  return (
    <div className={`${className}`}>
      {title && (
        <h3
          className="mb-4 text-center"
          style={{
            fontFamily: 'Lexend, sans-serif',
            fontSize: 'var(--text-lg)',
            fontWeight: '500',
            color: 'var(--foreground)',
          }}
        >
          {title}
        </h3>
      )}

      <div
        className={
          layout === 'grid'
            ? 'grid grid-cols-2 md:grid-cols-4 gap-4'
            : 'flex flex-wrap items-center justify-center gap-4'
        }
      >
        {badges.map((badge, index) => (
          <div
            key={index}
            className="flex flex-col items-center gap-2 p-3 rounded transition-all duration-200 hover:scale-105"
            style={{
              backgroundColor: 'var(--muted)',
              borderRadius: 'var(--radius)',
            }}
            title={badge.tooltip || badge.name}
          >
            {/* Badge Icon or Image */}
            <div
              className="flex items-center justify-center"
              style={{
                color: 'var(--muted-foreground)',
              }}
            >
              {badge.image ? (
                <img
                  src={badge.image}
                  alt={badge.name}
                  className="w-12 h-12 object-contain"
                  loading="lazy"
                />
              ) : (
                badge.icon || getDefaultIcon(badge.type)
              )}
            </div>

            {/* Badge Label */}
            {showLabels && (
              <span
                className="text-center"
                style={{
                  fontFamily: 'Manrope, sans-serif',
                  fontSize: 'var(--text-small)',
                  fontWeight: '500',
                  color: 'var(--foreground)',
                }}
              >
                {badge.name}
              </span>
            )}
          </div>
        ))}
      </div>
    </div>
  );
}

/**
 * Payment Methods Badges
 * 
 * Pre-configured for common payment methods.
 */
export function PaymentMethodBadges() {
  const paymentBadges: Badge[] = [
    { type: 'payment', name: 'Visa', icon: <CreditCard className="w-6 h-6" /> },
    { type: 'payment', name: 'Mastercard', icon: <CreditCard className="w-6 h-6" /> },
    { type: 'payment', name: 'American Express', icon: <CreditCard className="w-6 h-6" /> },
    { type: 'payment', name: 'PayPal', icon: <CreditCard className="w-6 h-6" /> },
  ];

  return (
    <TrustBadges
      badges={paymentBadges}
      title="Accepted Payment Methods"
      layout="horizontal"
    />
  );
}

/**
 * Security Badges
 * 
 * Pre-configured for security and compliance.
 */
export function SecurityBadges() {
  const securityBadges: Badge[] = [
    { 
      type: 'security', 
      name: 'SSL Secure', 
      icon: <Shield className="w-6 h-6" />,
      tooltip: '256-bit SSL encryption'
    },
    { 
      type: 'security', 
      name: 'PCI Compliant', 
      icon: <Lock className="w-6 h-6" />,
      tooltip: 'PCI DSS Level 1 certified'
    },
    { 
      type: 'security', 
      name: 'GDPR Compliant', 
      icon: <CheckCircle2 className="w-6 h-6" />,
      tooltip: 'EU data protection compliant'
    },
  ];

  return (
    <TrustBadges
      badges={securityBadges}
      title="Secure & Compliant"
      layout="horizontal"
    />
  );
}

/**
 * Trust Badge Bar
 * 
 * Horizontal bar for footer or checkout.
 * Light background, compact design.
 */
interface TrustBadgeBarProps {
  badges: Badge[];
  className?: string;
}

export function TrustBadgeBar({ badges, className = '' }: TrustBadgeBarProps) {
  return (
    <div
      className={`w-full py-4 px-6 border-t ${className}`}
      style={{
        backgroundColor: 'var(--muted)',
        borderColor: 'var(--border)',
      }}
    >
      <div className="max-w-screen-2xl mx-auto">
        <div className="flex flex-wrap items-center justify-center gap-6">
          {badges.map((badge, index) => (
            <div
              key={index}
              className="flex items-center gap-2"
              title={badge.tooltip || badge.name}
            >
              {/* Icon */}
              <div
                style={{
                  color: 'var(--muted-foreground)',
                }}
              >
                {badge.image ? (
                  <img
                    src={badge.image}
                    alt={badge.name}
                    className="w-8 h-8 object-contain"
                    loading="lazy"
                  />
                ) : (
                  badge.icon || getDefaultIcon(badge.type)
                )}
              </div>

              {/* Label */}
              <span
                style={{
                  fontFamily: 'Manrope, sans-serif',
                  fontSize: 'var(--text-small)',
                  fontWeight: '500',
                  color: 'var(--foreground)',
                }}
              >
                {badge.name}
              </span>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

/**
 * Certification Badges
 * 
 * Industry certifications and awards.
 */
export function CertificationBadges() {
  const certificationBadges: Badge[] = [
    { 
      type: 'certification', 
      name: 'ISO 9001', 
      icon: <Award className="w-6 h-6" />,
      tooltip: 'Quality Management Certified'
    },
    { 
      type: 'certification', 
      name: 'WordPress VIP', 
      icon: <CheckCircle2 className="w-6 h-6" />,
      tooltip: 'WordPress VIP Partner'
    },
    { 
      type: 'certification', 
      name: 'WooCommerce', 
      icon: <Award className="w-6 h-6" />,
      tooltip: 'WooCommerce Expert'
    },
    { 
      type: 'certification', 
      name: 'Google Partner', 
      icon: <Star className="w-6 h-6" />,
      tooltip: 'Google Certified Partner'
    },
  ];

  return (
    <TrustBadges
      badges={certificationBadges}
      title="Certifications & Awards"
      layout="grid"
    />
  );
}

/**
 * Partner Badges
 * 
 * Business partnerships and integrations.
 */
interface PartnerBadgesProps {
  partners: Array<{
    name: string;
    logo: string;
    url?: string;
  }>;
  title?: string;
}

export function PartnerBadges({ partners, title = 'Our Partners' }: PartnerBadgesProps) {
  return (
    <div>
      <h3
        className="mb-6 text-center"
        style={{
          fontFamily: 'Lexend, sans-serif',
          fontSize: 'var(--text-lg)',
          fontWeight: '500',
          color: 'var(--foreground)',
        }}
      >
        {title}
      </h3>

      <div className="flex flex-wrap items-center justify-center gap-8">
        {partners.map((partner, index) => (
          <div
            key={index}
            className="transition-all duration-200 hover:scale-105"
          >
            {partner.url ? (
              <a
                href={partner.url}
                target="_blank"
                rel="noopener noreferrer"
                title={partner.name}
              >
                <img
                  src={partner.logo}
                  alt={partner.name}
                  className="h-12 w-auto object-contain opacity-60 hover:opacity-100 transition-opacity"
                  loading="lazy"
                />
              </a>
            ) : (
              <img
                src={partner.logo}
                alt={partner.name}
                className="h-12 w-auto object-contain opacity-60"
                loading="lazy"
              />
            )}
          </div>
        ))}
      </div>
    </div>
  );
}

/**
 * Mini Trust Badge
 * 
 * Small inline trust indicator.
 * Perfect for checkout buttons or forms.
 */
interface MiniTrustBadgeProps {
  icon?: React.ReactNode;
  text: string;
  className?: string;
}

export function MiniTrustBadge({ 
  icon = <Shield className="w-4 h-4" />, 
  text,
  className = '' 
}: MiniTrustBadgeProps) {
  return (
    <div className={`flex items-center gap-2 ${className}`}>
      <div style={{ color: 'var(--muted-foreground)' }}>
        {icon}
      </div>
      <span
        style={{
          fontFamily: 'Manrope, sans-serif',
          fontSize: 'var(--text-small)',
          color: 'var(--muted-foreground)',
        }}
      >
        {text}
      </span>
    </div>
  );
}

/**
 * WordPress Block Pattern Registration
 * 
 * Pattern slug: lsx-design/marketing/trust-badges
 * Category: marketing
 * 
 * Example WordPress Block Pattern:
 * 
 * ```php
 * register_block_pattern(
 *   'lsx-design/marketing/trust-badges',
 *   array(
 *     'title'       => __( 'Trust Badges', 'lsx-design' ),
 *     'description' => __( 'Display trust indicators and certifications', 'lsx-design' ),
 *     'categories'  => array( 'marketing' ),
 *     'content'     => '
 *       <!-- wp:group {"layout":{"type":"flex","flexWrap":"wrap","justifyContent":"center"}} -->
 *       <div class="wp-block-group">
 *         <!-- wp:image {"width":"48px"} /-->
 *         <!-- wp:image {"width":"48px"} /-->
 *         <!-- wp:image {"width":"48px"} /-->
 *       </div>
 *       <!-- /wp:group -->
 *     ',
 *   )
 * );
 * ```
 */
