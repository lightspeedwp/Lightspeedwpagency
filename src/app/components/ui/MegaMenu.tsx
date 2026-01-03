/**
 * Modern Mega Menu Component
 * 
 * Animated mega menu with glassmorphism effects.
 * Features stagger animations, hover effects, and featured items.
 * 
 * **Design System:**
 * - Uses CSS variables for all styling
 * - Lexend/Manrope fonts only
 * - Modern animations with reduced motion support
 * - Glassmorphism backdrop effect
 * 
 * **WordPress Concept:**
 * Maps to WordPress navigation menus with mega menu functionality.
 */

import { ArrowRight } from 'lucide-react';
import { ANIMATION_DURATION, ANIMATION_EASING } from '../../utils/animations';

export interface MegaMenuItem {
  label: string;
  page: string;
  description?: string;
  icon?: React.ReactNode;
}

export interface MegaMenuSection {
  title: string;
  items: MegaMenuItem[];
}

export interface MegaMenuFeatured {
  label: string;
  page: string;
  description: string;
  image: string;
  badge?: string;
}

export interface MegaMenuProps {
  /**
   * Menu title
   */
  title: string;
  
  /**
   * Menu description
   */
  description?: string;
  
  /**
   * Menu sections (columns)
   */
  sections: MegaMenuSection[];
  
  /**
   * Featured items with images
   */
  featured?: MegaMenuFeatured[];
  
  /**
   * Click handler for navigation
   */
  onNavigate: (page: string) => void;
  
  /**
   * Close menu handler
   */
  onClose: () => void;
  
  /**
   * Is menu open?
   */
  isOpen: boolean;
}

/**
 * Modern Mega Menu Component
 * 
 * @example
 * ```tsx
 * <MegaMenu
 *   title="Services"
 *   description="WordPress & WooCommerce solutions"
 *   sections={[
 *     {
 *       title: "Development",
 *       items: [
 *         { label: "WordPress Development", page: "wordpress-dev" },
 *         { label: "WooCommerce Development", page: "woocommerce-dev" }
 *       ]
 *     }
 *   ]}
 *   featured={[
 *     {
 *       label: "Block Themes",
 *       page: "block-themes",
 *       description: "Modern FSE themes",
 *       image: "https://example.com/image.jpg"
 *     }
 *   ]}
 *   onNavigate={(page) => navigateTo(page)}
 *   onClose={() => setMenuOpen(false)}
 *   isOpen={menuOpen}
 * />
 * ```
 */
export function MegaMenu({
  title,
  description,
  sections,
  featured,
  onNavigate,
  onClose,
  isOpen
}: MegaMenuProps) {
  if (!isOpen) return null;

  const handleNavigate = (page: string) => {
    onNavigate(page);
    onClose();
  };

  return (
    <div
      style={{
        position: 'absolute',
        left: 0,
        right: 0,
        marginTop: '12px',
        backgroundColor: 'var(--card)',
        backdropFilter: 'blur(20px) saturate(180%)',
        WebkitBackdropFilter: 'blur(20px) saturate(180%)',
        border: '1px solid var(--border-soft)',
        borderRadius: 'var(--radius-lg)',
        boxShadow: '0 20px 60px rgba(0, 0, 0, 0.15), 0 0 0 1px rgba(255, 255, 255, 0.1)',
        minWidth: '600px',
        maxWidth: '800px',
        zIndex: 100,
        animation: `megaMenuSlideDown ${ANIMATION_DURATION.normal}ms ${ANIMATION_EASING.entrance} forwards`,
        transformOrigin: 'top center'
      }}
      className="p-7"
    >
      {/* Menu Header */}
      <div style={{ marginBottom: featured && featured.length > 0 ? '24px' : '20px' }}>
        <h3 style={{
          fontFamily: 'Lexend, sans-serif',
          fontSize: 'var(--text-h4)',
          fontWeight: 'var(--font-weight-semibold)',
          color: 'var(--foreground)',
          marginBottom: '4px',
          lineHeight: 1.2
        }}>
          {title}
        </h3>
        {description && (
          <p style={{
            fontFamily: 'Manrope, sans-serif',
            fontSize: 'var(--text-small)',
            color: 'var(--muted-foreground)',
            margin: 0,
            lineHeight: 1.5
          }}>
            {description}
          </p>
        )}
      </div>

      {/* Featured Items (with images) */}
      {featured && featured.length > 0 && (
        <div style={{
          display: 'grid',
          gridTemplateColumns: `repeat(${Math.min(featured.length, 2)}, 1fr)`,
          gap: '16px',
          marginBottom: '28px',
          paddingBottom: '24px',
          borderBottom: '1px solid var(--border-soft)'
        }}>
          {featured.map((item, index) => (
            <button
              key={index}
              onClick={() => handleNavigate(item.page)}
              style={{
                position: 'relative',
                overflow: 'hidden',
                borderRadius: 'var(--radius-lg)',
                border: '1px solid var(--border-soft)',
                background: 'none',
                padding: 0,
                cursor: 'pointer',
                textAlign: 'left',
                transition: `all ${ANIMATION_DURATION.fast}ms ${ANIMATION_EASING.default}`,
                animation: `featuredCardStagger ${ANIMATION_DURATION.normal}ms ${ANIMATION_EASING.entrance} ${index * 100}ms forwards`,
                opacity: 0
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.transform = 'translateY(-4px)';
                e.currentTarget.style.boxShadow = 'var(--shadow-lg)';
                e.currentTarget.style.borderColor = 'var(--primary)';
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.transform = 'translateY(0)';
                e.currentTarget.style.boxShadow = 'none';
                e.currentTarget.style.borderColor = 'var(--border-soft)';
              }}
            >
              {/* Featured Image */}
              <div style={{
                width: '100%',
                height: '120px',
                background: `linear-gradient(135deg, var(--primary) 0%, var(--primary-dark) 100%), url(${item.image})`,
                backgroundSize: 'cover',
                backgroundPosition: 'center',
                position: 'relative'
              }}>
                {item.badge && (
                  <div 
                    className="px-2.5 py-1"
                    style={{
                      position: 'absolute',
                      top: '12px',
                      right: '12px',
                      backgroundColor: 'var(--primary-foreground)',
                      color: 'var(--primary)',
                      borderRadius: 'var(--radius)',
                      fontSize: 'var(--text-small)',
                      fontFamily: 'Manrope, sans-serif',
                      fontWeight: 'var(--font-weight-semibold)',
                      boxShadow: 'var(--shadow-sm)'
                    }}
                  >
                    {item.badge}
                  </div>
                )}
              </div>

              {/* Featured Content */}
              <div className="p-4">
                <h4 style={{
                  fontFamily: 'Lexend, sans-serif',
                  fontSize: 'var(--text-base)',
                  fontWeight: 'var(--font-weight-semibold)',
                  color: 'var(--foreground)',
                  marginBottom: '6px',
                  lineHeight: 1.3
                }}>
                  {item.label}
                </h4>
                <p style={{
                  fontFamily: 'Manrope, sans-serif',
                  fontSize: 'var(--text-small)',
                  color: 'var(--muted-foreground)',
                  margin: 0,
                  lineHeight: 1.5
                }}>
                  {item.description}
                </p>
              </div>
            </button>
          ))}
        </div>
      )}

      {/* Menu Sections (columns) */}
      <div style={{
        display: 'grid',
        gridTemplateColumns: `repeat(${Math.min(sections.length, 3)}, 1fr)`,
        gap: '24px'
      }}>
        {sections.map((section, sectionIndex) => (
          <div key={sectionIndex}>
            {/* Section Title */}
            <h4 style={{
              fontFamily: 'Lexend, sans-serif',
              fontSize: 'var(--text-small)',
              fontWeight: 'var(--font-weight-semibold)',
              color: 'var(--muted-foreground)',
              textTransform: 'uppercase',
              letterSpacing: '0.05em',
              marginBottom: '12px',
              lineHeight: 1
            }}>
              {section.title}
            </h4>

            {/* Section Items */}
            <ul style={{
              listStyle: 'none',
              margin: 0,
              padding: 0,
              display: 'flex',
              flexDirection: 'column',
              gap: '4px'
            }}>
              {section.items.map((item, itemIndex) => (
                <li
                  key={itemIndex}
                  style={{
                    animation: `megaMenuStagger ${ANIMATION_DURATION.normal}ms ${ANIMATION_EASING.entrance} ${(sectionIndex * 100) + (itemIndex * 50)}ms forwards`,
                    opacity: 0
                  }}
                >
                  <button
                    onClick={() => handleNavigate(item.page)}
                    className="px-3 py-2.5"
                    style={{
                      width: '100%',
                      textAlign: 'left',
                      fontFamily: 'Lexend, sans-serif',
                      fontSize: 'var(--text-base)',
                      fontWeight: 'var(--font-weight-regular)',
                      color: 'var(--foreground)',
                      background: 'none',
                      border: 'none',
                      borderRadius: 'var(--radius)',
                      cursor: 'pointer',
                      transition: `all ${ANIMATION_DURATION.fast}ms ${ANIMATION_EASING.default}`,
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'space-between',
                      gap: '8px'
                    }}
                    onMouseEnter={(e) => {
                      e.currentTarget.style.backgroundColor = 'var(--muted)';
                      e.currentTarget.style.color = 'var(--primary)';
                      const arrow = e.currentTarget.querySelector('.mega-menu-arrow') as HTMLElement;
                      if (arrow) {
                        arrow.style.opacity = '1';
                        arrow.style.transform = 'translateX(2px)';
                      }
                    }}
                    onMouseLeave={(e) => {
                      e.currentTarget.style.backgroundColor = 'transparent';
                      e.currentTarget.style.color = 'var(--foreground)';
                      const arrow = e.currentTarget.querySelector('.mega-menu-arrow') as HTMLElement;
                      if (arrow) {
                        arrow.style.opacity = '0';
                        arrow.style.transform = 'translateX(0)';
                      }
                    }}
                  >
                    <div style={{ flex: 1 }}>
                      <div style={{
                        fontWeight: 'var(--font-weight-medium)',
                        marginBottom: item.description ? '2px' : 0
                      }}>
                        {item.label}
                      </div>
                      {item.description && (
                        <div style={{
                          fontSize: 'var(--text-small)',
                          fontFamily: 'Manrope, sans-serif',
                          color: 'var(--muted-foreground)',
                          fontWeight: 'var(--font-weight-regular)'
                        }}>
                          {item.description}
                        </div>
                      )}
                    </div>
                    <ArrowRight
                      size={16}
                      className="mega-menu-arrow"
                      style={{
                        opacity: 0,
                        transition: `all ${ANIMATION_DURATION.fast}ms ${ANIMATION_EASING.default}`,
                        flexShrink: 0
                      }}
                    />
                  </button>
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>
    </div>
  );
}