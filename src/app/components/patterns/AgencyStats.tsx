import type { UniversalIcon } from '../../utils/icon-map';

export interface StatItem {
  id: string;
  value: string;
  label: string;
  description?: string;
  icon?: UniversalIcon;
}

export interface AgencyStatsProps {
  heading?: string;
  subheading?: string;
  stats: StatItem[];
  columns?: 2 | 3 | 4;
}

export function AgencyStats({
  heading,
  subheading,
  stats,
  columns = 4
}: AgencyStatsProps) {
  const gridClass = `wp-grid-${columns}-cols`;

  return (
    <div className="wp-w-full" style={{ padding: 'var(--spacing-16) 0', backgroundColor: 'var(--background)' }}>
      {/* Section Header */}
      {(heading || subheading) && (
        <div className="wp-flex wp-flex-col wp-items-center wp-justify-center wp-text-center wp-mb-16">
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

      {/* Grid Container */}
      <div className={`${gridClass} wp-gap-8`}>
        {stats.map((stat) => {
          const Icon = stat.icon;

          return (
            <div 
              key={stat.id} 
              className="wp-flex wp-flex-col wp-items-center wp-text-center wp-p-8"
              style={{
                backgroundColor: 'var(--card)',
                borderRadius: 'var(--radius-lg)',
                border: '1px solid var(--border)',
                transition: 'transform var(--transition-base), box-shadow var(--transition-base)',
              }}
            >
              {Icon && (
                <div 
                  className="wp-flex wp-items-center wp-justify-center wp-mb-6"
                  style={{
                    width: '56px',
                    height: '56px',
                    borderRadius: 'var(--radius-full)',
                    backgroundColor: 'var(--primary-soft)',
                    color: 'var(--primary)',
                  }}
                >
                  <Icon size={28} weight="duotone" />
                </div>
              )}
              
              <div 
                className="wp-mb-2"
                style={{
                  fontFamily: 'var(--font-primary)',
                  fontSize: 'var(--text-h1)',
                  fontWeight: 'var(--font-weight-bold)',
                  color: 'var(--primary)',
                  lineHeight: '1.1'
                }}
              >
                {stat.value}
              </div>

              <h3 
                className="wp-m-0 wp-mb-2"
                style={{
                  fontFamily: 'var(--font-primary)',
                  fontSize: 'var(--text-h5)',
                  color: 'var(--card-foreground)',
                  textTransform: 'uppercase',
                  letterSpacing: '0.05em'
                }}
              >
                {stat.label}
              </h3>

              {stat.description && (
                <p 
                  className="wp-m-0"
                  style={{
                    fontFamily: 'var(--font-secondary)',
                    fontSize: 'var(--text-sm)',
                    color: 'var(--muted-foreground)',
                    lineHeight: '1.5'
                  }}
                >
                  {stat.description}
                </p>
              )}
            </div>
          );
        })}
      </div>
    </div>
  );
}