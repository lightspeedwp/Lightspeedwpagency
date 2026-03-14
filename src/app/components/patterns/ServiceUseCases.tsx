import { ArrowRight, CheckCircle } from '@phosphor-icons/react';

export interface UseCaseItem {
  id: string;
  title: string;
  description: string;
  industries?: string[];
  features?: string[];
}

export interface ServiceUseCasesProps {
  heading?: string;
  subheading?: string;
  useCases: UseCaseItem[];
  columns?: 2 | 3 | 4;
}

export function ServiceUseCases({
  heading,
  subheading,
  useCases,
  columns = 2
}: ServiceUseCasesProps) {
  const gridClass = `wp-grid-${columns}-cols`;

  return (
    <div className="wp-w-full" style={{ padding: 'var(--spacing-16) 0' }}>
      
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
        {useCases.map((useCase) => (
          <div 
            key={useCase.id} 
            className="wp-flex wp-flex-col wp-p-8"
            style={{
              backgroundColor: 'var(--card)',
              borderRadius: 'var(--radius-lg)',
              border: '1px solid var(--border)',
              position: 'relative',
              overflow: 'hidden',
              height: '100%'
            }}
          >
            {/* Top Accent Gradient Line */}
            <div 
              style={{
                position: 'absolute',
                top: 0,
                left: 0,
                right: 0,
                height: '4px',
                background: 'linear-gradient(90deg, var(--primary), var(--secondary))'
              }}
            />

            <h3 className="wp-m-0 wp-mb-3 wp-mt-2" style={{ 
              fontFamily: 'var(--font-primary)', 
              fontSize: 'var(--text-h3)', 
              color: 'var(--card-foreground)'
            }}>
              {useCase.title}
            </h3>
            
            <p className="wp-m-0 wp-mb-6" style={{ 
              fontFamily: 'var(--font-secondary)', 
              fontSize: 'var(--text-base)', 
              color: 'var(--muted-foreground)',
              lineHeight: '1.6'
            }}>
              {useCase.description}
            </p>

            <div className="wp-flex wp-flex-col wp-gap-6 wp-mt-auto">
              
              {/* Industries */}
              {useCase.industries && useCase.industries.length > 0 && (
                <div>
                  <h4 className="wp-m-0 wp-mb-3" style={{ 
                    fontFamily: 'var(--font-primary)', 
                    fontSize: 'var(--text-sm)', 
                    color: 'var(--foreground)',
                    textTransform: 'uppercase',
                    letterSpacing: '0.05em'
                  }}>
                    Ideal For
                  </h4>
                  <div className="wp-flex wp-flex-wrap wp-gap-2">
                    {useCase.industries.map(industry => (
                      <span 
                        key={industry} 
                        className="wp-inline-flex wp-items-center wp-px-3 wp-py-1"
                        style={{
                          backgroundColor: 'var(--background)',
                          border: '1px solid var(--border-soft)',
                          color: 'var(--muted-foreground)',
                          borderRadius: 'var(--radius-full)',
                          fontSize: 'var(--text-xs)',
                          fontFamily: 'var(--font-secondary)'
                        }}
                      >
                        {industry}
                      </span>
                    ))}
                  </div>
                </div>
              )}

              {/* Features */}
              {useCase.features && useCase.features.length > 0 && (
                <div>
                  <h4 className="wp-m-0 wp-mb-3" style={{ 
                    fontFamily: 'var(--font-primary)', 
                    fontSize: 'var(--text-sm)', 
                    color: 'var(--foreground)',
                    textTransform: 'uppercase',
                    letterSpacing: '0.05em'
                  }}>
                    Key Features
                  </h4>
                  <ul className="wp-m-0 wp-p-0 wp-flex wp-flex-col wp-gap-2" style={{ listStyle: 'none' }}>
                    {useCase.features.map(feature => (
                      <li 
                        key={feature} 
                        className="wp-flex wp-items-start wp-gap-2"
                        style={{
                          fontFamily: 'var(--font-secondary)',
                          fontSize: 'var(--text-sm)',
                          color: 'var(--muted-foreground)'
                        }}
                      >
                        <CheckCircle size={16} weight="fill" color="var(--primary)" style={{ marginTop: '2px', flexShrink: 0 }} />
                        <span>{feature}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              )}

            </div>
          </div>
        ))}
      </div>
    </div>
  );
}