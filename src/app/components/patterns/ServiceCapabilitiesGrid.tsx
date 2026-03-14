import { ArrowRight } from '@phosphor-icons/react';
import type { UniversalIcon } from '../../utils/icon-map';

export interface ServiceCapability {
  id: string;
  title: string;
  description: string;
  icon: UniversalIcon;
  link?: string;
  tags?: string[];
}

export interface ServiceCapabilitiesGridProps {
  heading?: string;
  subheading?: string;
  capabilities: ServiceCapability[];
  columns?: 2 | 3 | 4;
}

export function ServiceCapabilitiesGrid({
  heading,
  subheading,
  capabilities,
  columns = 3
}: ServiceCapabilitiesGridProps) {
  // Map column prop to WordPress utility class
  const gridClass = `wp-grid-${columns}-cols`;

  return (
    <div className="wp-w-full wp-py-12">
      
      {/* Section Header */}
      {(heading || subheading) && (
        <div className="wp-flex wp-flex-col wp-items-center wp-justify-center wp-text-center wp-mb-12">
          {heading && (
            <h2 className="wp-m-0 wp-mb-4" style={{ 
              fontFamily: 'var(--font-primary)', 
              fontSize: 'var(--text-h2)', 
              color: 'var(--foreground)'
            }}>
              {heading}
            </h2>
          )}
          {subheading && (
            <p className="wp-m-0 wp-max-w-3xl" style={{ 
              fontFamily: 'var(--font-secondary)', 
              fontSize: 'var(--text-lg)', 
              color: 'var(--muted-foreground)'
            }}>
              {subheading}
            </p>
          )}
        </div>
      )}

      {/* Grid */}
      <div className={`${gridClass} wp-gap-8`}>
        {capabilities.map((capability) => {
          const Icon = capability.icon;
          return (
            <div 
              key={capability.id} 
              className="wp-flex wp-flex-col wp-p-8"
              style={{
                backgroundColor: 'var(--card)',
                borderRadius: 'var(--radius-lg)',
                border: '1px solid var(--border)',
                transition: 'transform var(--transition-base), border-color var(--transition-base)',
                height: '100%'
              }}
            >
              {/* Icon Wrapper */}
              <div 
                className="wp-flex wp-items-center wp-justify-center shrink-0 wp-mb-6" 
                style={{ 
                  width: '48px', 
                  height: '48px', 
                  borderRadius: 'var(--radius)', 
                  backgroundColor: 'var(--primary-soft)', 
                  color: 'var(--primary)',
                  boxShadow: '0 0 20px var(--primary-soft)'
                }}
              >
                <Icon size={24} weight="duotone" />
              </div>

              {/* Content */}
              <div className="wp-flex wp-flex-col grow">
                <h3 className="wp-m-0 wp-mb-3" style={{ 
                  fontFamily: 'var(--font-primary)', 
                  fontSize: 'var(--text-h4)', 
                  color: 'var(--card-foreground)'
                }}>
                  {capability.title}
                </h3>
                
                <p className="wp-m-0 wp-mb-6" style={{ 
                  fontFamily: 'var(--font-secondary)', 
                  fontSize: 'var(--text-base)', 
                  color: 'var(--muted-foreground)',
                  lineHeight: '1.6'
                }}>
                  {capability.description}
                </p>

                {/* Tags */}
                {capability.tags && capability.tags.length > 0 && (
                  <div className="wp-flex wp-flex-wrap wp-gap-2 wp-mb-6">
                    {capability.tags.map(tag => (
                      <span 
                        key={tag} 
                        className="wp-inline-flex wp-items-center wp-px-3 wp-py-1"
                        style={{
                          backgroundColor: 'var(--muted)',
                          color: 'var(--muted-foreground)',
                          borderRadius: 'var(--radius-full)',
                          fontSize: 'var(--text-sm)',
                          fontFamily: 'var(--font-secondary)'
                        }}
                      >
                        {tag}
                      </span>
                    ))}
                  </div>
                )}
              </div>

              {/* Action Link (pushed to bottom by flex grow on parent) */}
              {capability.link && (
                <div className="wp-mt-auto">
                  <a 
                    href={capability.link} 
                    className="wp-inline-flex wp-items-center wp-gap-2"
                    style={{
                      color: 'var(--primary)',
                      fontFamily: 'var(--font-primary)',
                      fontSize: 'var(--text-sm)',
                      fontWeight: 'var(--font-weight-semibold)',
                      textDecoration: 'none'
                    }}
                  >
                    Learn more <ArrowRight size={16} weight="bold" />
                  </a>
                </div>
              )}
            </div>
          );
        })}
      </div>
    </div>
  );
}