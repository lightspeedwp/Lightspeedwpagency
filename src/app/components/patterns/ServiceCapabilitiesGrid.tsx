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
        <div className="service-capabilities__header">
          {heading && (
            <h2 className="service-capabilities__heading">
              {heading}
            </h2>
          )}
          {subheading && (
            <p className="service-capabilities__subheading">
              {subheading}
            </p>
          )}
        </div>
      )}

      {/* Grid */}
      <div className={`${gridClass} wp-gap-8`}>
        {capabilities.map((capability) => {
          const IconComponent = capability.icon;
          return (
            <div 
              key={capability.id} 
              className="service-capabilities__card"
            >
              {/* Icon Wrapper */}
              <div className="service-capabilities__icon-wrapper">
                <IconComponent size={24} weight="duotone" />
              </div>

              {/* Content */}
              <div className="service-capabilities__content">
                <h3 className="service-capabilities__title">
                  {capability.title}
                </h3>
                
                <p className="service-capabilities__description">
                  {capability.description}
                </p>

                {/* Tags */}
                {capability.tags && capability.tags.length > 0 && (
                  <div className="service-capabilities__tags">
                    {capability.tags.map(tag => (
                      <span 
                        key={tag} 
                        className="service-capabilities__tag"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>
                )}
              </div>

              {/* Action Link (pushed to bottom by flex grow on parent) */}
              {capability.link && (
                <div className="service-capabilities__link-wrapper">
                  <a 
                    href={capability.link} 
                    className="service-capabilities__link"
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