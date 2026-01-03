/**
 * Filter Bar Pattern
 * 
 * WordPress pattern: lsx-design/nav/filters
 * 
 * Category/tag filtering for archive pages.
 * Keyboard accessible with clear focus states.
 * Mobile-responsive with popover dropdown for small screens.
 */

import { Container } from '../common/Container';
import { Button } from '../blocks/design/Buttons';
import { ListFilter, X } from 'lucide-react';
import { useState } from 'react';

interface FilterOption {
  id: string;
  label: string;
  count?: number;
}

interface FilterBarProps {
  options: FilterOption[];
  activeFilter: string;
  onFilterChange: (filterId: string) => void;
  label?: string;
}

export function FilterBar({ 
  options, 
  activeFilter, 
  onFilterChange,
  label = 'Filter by category' 
}: FilterBarProps) {
  const [mobileFiltersOpen, setMobileFiltersOpen] = useState(false);
  
  // Get active filter label for mobile button
  const activeFilterLabel = options.find(opt => opt.id === activeFilter)?.label || 'All';
  
  return (
    <nav 
      aria-label={label}
      style={{
        borderBottom: '1px solid var(--border-soft)',
        backgroundColor: 'var(--background)',
        paddingTop: 'clamp(16px, 3vw, 24px)',
        paddingBottom: 'clamp(16px, 3vw, 24px)',
      }}
    >
      <Container>
        {/* Desktop Filter Bar (hidden on mobile) */}
        <div 
          className="hidden md:flex"
          style={{
            display: 'flex',
            gap: '16px',
            flexWrap: 'wrap',
            alignItems: 'center',
          }}
        >
          {/* Filter Label */}
          <span 
            style={{
              fontSize: 'var(--text-small)',
              fontFamily: 'Manrope, sans-serif',
              color: 'var(--muted-foreground)',
              textTransform: 'uppercase',
              letterSpacing: '0.05em',
              fontWeight: 'var(--font-weight-medium)',
            }}
          >
            {label}:
          </span>

          {/* Filter Options */}
          <ul 
            style={{
              display: 'flex',
              gap: '12px',
              flexWrap: 'wrap',
              listStyle: 'none',
              padding: 0,
              margin: 0,
            }}
          >
            {options.map((option) => {
              const isActive = activeFilter === option.id;
              return (
                <li key={option.id}>
                  <button
                    onClick={() => onFilterChange(option.id)}
                    aria-current={isActive ? 'true' : undefined}
                    style={{
                      padding: '10px 20px',
                      fontSize: 'var(--text-base)',
                      fontFamily: 'Lexend, sans-serif',
                      fontWeight: isActive ? 'var(--font-weight-medium)' : 'var(--font-weight-regular)',
                      backgroundColor: isActive 
                        ? 'var(--primary)' 
                        : 'var(--card)',
                      color: isActive
                        ? 'var(--primary-foreground)'
                        : 'var(--foreground)',
                      border: `1px solid ${isActive ? 'var(--primary)' : 'var(--border)'}`,
                      borderRadius: 'var(--radius-lg)',
                      cursor: 'pointer',
                      transition: 'all 0.2s ease',
                      display: 'flex',
                      alignItems: 'center',
                      gap: '8px',
                      minHeight: '44px', // Accessible touch target
                      boxShadow: isActive ? 'var(--shadow-primary)' : 'none',
                    }}
                    onMouseEnter={(e) => {
                      if (!isActive) {
                        e.currentTarget.style.borderColor = 'var(--primary)';
                        e.currentTarget.style.backgroundColor = 'var(--muted)';
                      }
                    }}
                    onMouseLeave={(e) => {
                      if (!isActive) {
                        e.currentTarget.style.borderColor = 'var(--border)';
                        e.currentTarget.style.backgroundColor = 'var(--card)';
                      }
                    }}
                  >
                    <span>{option.label}</span>
                    {option.count !== undefined && (
                      <span 
                        style={{
                          fontSize: 'var(--text-small)',
                          fontFamily: 'Manrope, sans-serif',
                          opacity: 0.7,
                        }}
                      >
                        ({option.count})
                      </span>
                    )}
                  </button>
                </li>
              );
            })}
          </ul>
        </div>

        {/* Mobile Filter Button (visible only on mobile) */}
        <div className="md:hidden">
          <button
            onClick={() => setMobileFiltersOpen(!mobileFiltersOpen)}
            aria-label={mobileFiltersOpen ? 'Close filters' : 'Open filters'}
            aria-expanded={mobileFiltersOpen}
            style={{
              width: '100%',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'space-between',
              padding: '12px 16px',
              fontSize: 'var(--text-base)',
              fontFamily: 'Lexend, sans-serif',
              fontWeight: 'var(--font-weight-medium)',
              backgroundColor: 'var(--card)',
              color: 'var(--foreground)',
              border: '1px solid var(--border)',
              borderRadius: 'var(--radius-lg)',
              cursor: 'pointer',
              transition: 'all 0.2s ease',
              minHeight: '48px', // Extra accessible on mobile
            }}
          >
            <div style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
              <ListFilter size={20} style={{ color: 'var(--primary)' }} />
              <span>
                {label}: <strong style={{ fontWeight: 'var(--font-weight-semibold)' }}>{activeFilterLabel}</strong>
              </span>
            </div>
            {mobileFiltersOpen ? <X size={20} /> : <ListFilter size={20} />}
          </button>

          {/* Mobile Filter Popover */}
          {mobileFiltersOpen && (
            <div
              style={{
                position: 'absolute',
                left: '16px',
                right: '16px',
                marginTop: '8px',
                backgroundColor: 'var(--card)',
                border: '1px solid var(--border-soft)',
                borderRadius: 'var(--radius-lg)',
                boxShadow: 'var(--shadow-lg)',
                padding: '16px',
                zIndex: 50,
                maxHeight: '400px',
                overflowY: 'auto',
                animation: 'slideDown 0.3s ease-out forwards'
              }}
            >
              <style>{`
                @keyframes slideDown {
                  from {
                    opacity: 0;
                    transform: translateY(-10px);
                  }
                  to {
                    opacity: 1;
                    transform: translateY(0);
                  }
                }
              `}</style>
              
              <ul
                style={{
                  display: 'flex',
                  flexDirection: 'column',
                  gap: '8px',
                  listStyle: 'none',
                  padding: 0,
                  margin: 0,
                }}
              >
                {options.map((option) => {
                  const isActive = activeFilter === option.id;
                  return (
                    <li key={option.id}>
                      <button
                        onClick={() => {
                          onFilterChange(option.id);
                          setMobileFiltersOpen(false); // Close popover after selection
                        }}
                        aria-current={isActive ? 'true' : undefined}
                        style={{
                          width: '100%',
                          textAlign: 'left',
                          padding: '14px 16px',
                          fontSize: 'var(--text-base)',
                          fontFamily: 'Lexend, sans-serif',
                          fontWeight: isActive ? 'var(--font-weight-semibold)' : 'var(--font-weight-regular)',
                          backgroundColor: isActive 
                            ? 'var(--primary)' 
                            : 'transparent',
                          color: isActive
                            ? 'var(--primary-foreground)'
                            : 'var(--foreground)',
                          border: `1px solid ${isActive ? 'var(--primary)' : 'var(--border)'}`,
                          borderRadius: 'var(--radius)',
                          cursor: 'pointer',
                          transition: 'all 0.2s ease',
                          display: 'flex',
                          alignItems: 'center',
                          justifyContent: 'space-between',
                          minHeight: '48px', // Accessible touch target
                        }}
                      >
                        <span>{option.label}</span>
                        {option.count !== undefined && (
                          <span 
                            style={{
                              fontSize: 'var(--text-small)',
                              fontFamily: 'Manrope, sans-serif',
                              opacity: 0.7,
                              padding: '4px 8px',
                              backgroundColor: isActive ? 'rgba(255,255,255,0.2)' : 'var(--muted)',
                              borderRadius: 'var(--radius)',
                            }}
                          >
                            {option.count}
                          </span>
                        )}
                      </button>
                    </li>
                  );
                })}
              </ul>
            </div>
          )}
        </div>
      </Container>
    </nav>
  );
}