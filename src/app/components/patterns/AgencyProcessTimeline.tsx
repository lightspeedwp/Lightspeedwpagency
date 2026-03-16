import type { UniversalIcon } from '../../utils/icon-map';

export interface ProcessStep {
  id: string;
  number: string;
  title: string;
  description: string;
  icon: UniversalIcon;
}

export interface AgencyProcessTimelineProps {
  heading?: string;
  subheading?: string;
  steps: ProcessStep[];
}

export function AgencyProcessTimeline({
  heading,
  subheading,
  steps
}: AgencyProcessTimelineProps) {
  return (
    <div className="wp-w-full wp-py-16" style={{ backgroundColor: 'var(--background)' }}>
      {/* Section Header */}
      {(heading || subheading) && (
        <div className="wp-flex wp-flex-col wp-items-center wp-justify-center wp-text-center wp-mb-16">
          {heading && (
            <h2 className="wp-m-0 wp-mb-4 template-section-header__title template-section-header__title--h2">
              {heading}
            </h2>
          )}
          {subheading && (
            <p className="wp-m-0 wp-max-w-3xl template-section-header__description template-section-header__description--secondary">
              {subheading}
            </p>
          )}
        </div>
      )}

      {/* Timeline Container */}
      <div className="wp-flex wp-flex-col wp-max-w-4xl wp-mx-auto wp-gap-12">
        {steps.map((step, index) => {
          const Icon = step.icon;
          const isLast = index === steps.length - 1;
          
          return (
            <div key={step.id} className="wp-flex wp-gap-8" style={{ position: 'relative' }}>
              
              {/* Vertical Connecting Line (except for last item) */}
              {!isLast && (
                <div 
                  className="wp-hide-mobile"
                  style={{
                    position: 'absolute',
                    left: 'calc(48px / 2)',
                    top: '48px',
                    bottom: 'calc(-1 * var(--spacing-12))',
                    width: '2px',
                    backgroundColor: 'var(--border-soft)',
                    transform: 'translateX(-50%)',
                    zIndex: 0
                  }}
                />
              )}

              {/* Step Marker */}
              <div 
                className="wp-flex wp-items-center wp-justify-center shrink-0" 
                style={{ 
                  width: '48px', 
                  height: '48px', 
                  borderRadius: 'var(--radius-full)', 
                  backgroundColor: 'var(--card)', 
                  color: 'var(--primary)',
                  border: '2px solid var(--primary)',
                  boxShadow: '0 0 15px var(--primary-soft)',
                  zIndex: 1
                }}
              >
                <span style={{ 
                  fontFamily: 'var(--font-primary)', 
                  fontSize: 'var(--text-base)', 
                  fontWeight: 'var(--font-weight-bold)' 
                }}>
                  {step.number}
                </span>
              </div>

              {/* Step Content */}
              <div 
                className="wp-flex wp-flex-col wp-p-8 wp-flex-1"
                style={{
                  backgroundColor: 'var(--card)',
                  borderRadius: 'var(--radius-lg)',
                  border: '1px solid var(--border)',
                }}
              >
                <div className="wp-flex wp-items-center wp-gap-4 wp-mb-4">
                  <div 
                    className="wp-flex wp-items-center wp-justify-center"
                    style={{ 
                      width: '40px', 
                      height: '40px', 
                      borderRadius: 'var(--radius)', 
                      backgroundColor: 'var(--primary-soft)', 
                      color: 'var(--primary)'
                    }}
                  >
                    <Icon size={20} weight="duotone" />
                  </div>
                  <h3 className="wp-m-0" style={{ 
                    fontFamily: 'var(--font-primary)', 
                    fontSize: 'var(--text-h4)', 
                    color: 'var(--card-foreground)'
                  }}>
                    {step.title}
                  </h3>
                </div>
                
                <p className="wp-m-0" style={{ 
                  fontFamily: 'var(--font-secondary)', 
                  fontSize: 'var(--text-base)', 
                  color: 'var(--muted-foreground)',
                  lineHeight: '1.6'
                }}>
                  {step.description}
                </p>
              </div>

            </div>
          );
        })}
      </div>
    </div>
  );
}