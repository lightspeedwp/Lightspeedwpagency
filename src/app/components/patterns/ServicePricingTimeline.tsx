/**
 * ServicePricingTimeline Component
 * 
 * Displays pricing and timeline information for a service.
 * Transparent pricing expectations with realistic timelines.
 * 
 * WordPress Equivalent: Custom section with pricing and timeline blocks
 * 
 * @component
 * @example
 * ```tsx
 * <ServicePricingTimeline
 *   pricing={serviceData.pricing}
 *   timeline={serviceData.timeline}
 * />
 * ```
 */

import { DollarSign, Clock, Check } from 'lucide-react';
import { Button } from '../blocks/design/Buttons';
import type { ServicePricingDetailed, ServiceTimeline } from '../../data/services';
// CSS imported centrally via /src/styles/index.css

export interface ServicePricingTimelineProps {
  /** Pricing information */
  pricing: ServicePricingDetailed;
  
  /** Timeline information */
  timeline: ServiceTimeline;
  
  /** Show phase breakdown */
  showPhases?: boolean;
  
  /** Show pricing variables */
  showVariables?: boolean;
  
  /** Additional CSS classes */
  className?: string;
}

/**
 * ServicePricingTimeline Component
 * 
 * Displays pricing range and project timeline with phase breakdown.
 */
export const ServicePricingTimeline = ({ 
  pricing,
  timeline,
  showPhases = true,
  showVariables = true,
  className = ''
}: ServicePricingTimelineProps) => {
  return (
    <div className={`service-pricing ${className}`}>
      {/* Section Header */}
      <div className="service-pricing__header">
        <h2 style={{ 
          fontFamily: 'var(--font-primary)',
          fontSize: 'var(--text-h2)',
          color: 'var(--foreground)'
        }}>
          Investment & Timeline
        </h2>
        <p style={{ 
          fontFamily: 'var(--font-secondary)',
          fontSize: 'var(--text-base)',
          color: 'var(--muted-foreground)'
        }}>
          Transparent pricing and realistic timelines for your project
        </p>
      </div>
      
      <div className="service-pricing__grid">
        {/* Pricing Card */}
        <div className="service-pricing__card service-pricing__card--pricing">
          <div className="service-pricing__card-header">
            <DollarSign className="service-pricing__icon" size={32} aria-hidden="true" />
            <h3 style={{ 
              fontFamily: 'var(--font-primary)',
              fontSize: 'var(--text-h3)',
              color: 'var(--foreground)'
            }}>
              Investment
            </h3>
          </div>
          
          <div className="service-pricing__price-range">
            <span className="service-pricing__price-min" style={{
              fontFamily: 'var(--font-primary)',
              fontSize: 'var(--text-h2)',
              color: 'hsl(var(--primary))'
            }}>
              ${pricing.min.toLocaleString()}
            </span>
            <span className="service-pricing__price-separator" style={{
              fontFamily: 'var(--font-primary)',
              fontSize: 'var(--text-h3)',
              color: 'var(--muted-foreground)'
            }}>
              –
            </span>
            <span className="service-pricing__price-max" style={{
              fontFamily: 'var(--font-primary)',
              fontSize: 'var(--text-h2)',
              color: 'hsl(var(--primary))'
            }}>
              ${pricing.max.toLocaleString()}
            </span>
            {pricing.unit !== 'project' && (
              <span className="service-pricing__price-unit" style={{
                fontFamily: 'var(--font-secondary)',
                fontSize: 'var(--text-base)',
                color: 'var(--muted-foreground)'
              }}>
                /{pricing.unit}
              </span>
            )}
          </div>
          
          {pricing.startingFrom && (
            <p className="service-pricing__starting-from" style={{
              fontFamily: 'var(--font-secondary)',
              fontSize: 'var(--text-base)',
              color: 'var(--muted-foreground)'
            }}>
              {pricing.startingFrom}
            </p>
          )}
          
          {showVariables && pricing.variables && pricing.variables.length > 0 && (
            <div className="service-pricing__variables">
              <h4 style={{
                fontFamily: 'var(--font-primary)',
                fontSize: 'var(--text-base)',
                color: 'var(--foreground)'
              }}>
                Pricing depends on:
              </h4>
              <ul>
                {pricing.variables.map((variable, idx) => (
                  <li key={idx} style={{
                    fontFamily: 'var(--font-secondary)',
                    fontSize: 'var(--text-sm)',
                    color: 'var(--foreground)'
                  }}>
                    {variable}
                  </li>
                ))}
              </ul>
            </div>
          )}
          
          {pricing.includes && pricing.includes.length > 0 && (
            <div className="service-pricing__includes">
              <h4 style={{
                fontFamily: 'var(--font-primary)',
                fontSize: 'var(--text-base)',
                color: 'var(--foreground)'
              }}>
                What's included:
              </h4>
              <ul>
                {pricing.includes.map((item, idx) => (
                  <li key={idx} style={{
                    fontFamily: 'var(--font-secondary)',
                    fontSize: 'var(--text-sm)',
                    color: 'var(--foreground)'
                  }}>
                    <Check size={16} className="service-pricing__check-icon" aria-hidden="true" />
                    {item}
                  </li>
                ))}
              </ul>
            </div>
          )}
        </div>
        
        {/* Timeline Card */}
        <div className="service-pricing__card service-pricing__card--timeline">
          <div className="service-pricing__card-header">
            <Clock className="service-pricing__icon" size={32} aria-hidden="true" />
            <h3 style={{ 
              fontFamily: 'var(--font-primary)',
              fontSize: 'var(--text-h3)',
              color: 'var(--foreground)'
            }}>
              Timeline
            </h3>
          </div>
          
          <div className="service-pricing__duration">
            <span className="service-pricing__duration-number" style={{
              fontFamily: 'var(--font-primary)',
              fontSize: 'var(--text-h1)',
              color: 'hsl(var(--primary))'
            }}>
              {timeline.duration}
            </span>
            <span className="service-pricing__duration-unit" style={{
              fontFamily: 'var(--font-secondary)',
              fontSize: 'var(--text-h3)',
              color: 'var(--muted-foreground)'
            }}>
              {timeline.unit}
            </span>
          </div>
          
          {showPhases && timeline.phases && timeline.phases.length > 0 && (
            <div className="service-pricing__phases">
              <h4 style={{
                fontFamily: 'var(--font-primary)',
                fontSize: 'var(--text-base)',
                color: 'var(--foreground)'
              }}>
                Project phases:
              </h4>
              {timeline.phases.map((phase, idx) => (
                <div key={idx} className="service-pricing__phase">
                  <div className="service-pricing__phase-number" style={{
                    fontFamily: 'var(--font-primary)',
                    fontSize: 'var(--text-sm)',
                    color: 'hsl(var(--primary-foreground))',
                    backgroundColor: 'hsl(var(--primary))'
                  }}>
                    {idx + 1}
                  </div>
                  <div className="service-pricing__phase-content">
                    <div className="service-pricing__phase-name" style={{
                      fontFamily: 'var(--font-secondary)',
                      fontSize: 'var(--text-sm)',
                      color: 'var(--foreground)'
                    }}>
                      {phase.name}
                    </div>
                    <div className="service-pricing__phase-duration" style={{
                      fontFamily: 'var(--font-secondary)',
                      fontSize: 'var(--text-sm)',
                      color: 'var(--muted-foreground)'
                    }}>
                      {phase.duration}
                    </div>
                  </div>
                </div>
              ))}
            </div>
          )}
          
          {showVariables && timeline.variables && timeline.variables.length > 0 && (
            <div className="service-pricing__variables">
              <h4 style={{
                fontFamily: 'var(--font-primary)',
                fontSize: 'var(--text-base)',
                color: 'var(--foreground)'
              }}>
                Timeline depends on:
              </h4>
              <ul>
                {timeline.variables.map((variable, idx) => (
                  <li key={idx} style={{
                    fontFamily: 'var(--font-secondary)',
                    fontSize: 'var(--text-sm)',
                    color: 'var(--foreground)'
                  }}>
                    {variable}
                  </li>
                ))}
              </ul>
            </div>
          )}
        </div>
      </div>
      
      {/* CTA */}
      <div className="service-pricing__cta">
        <p className="service-pricing__cta-text" style={{
          fontFamily: 'var(--font-secondary)',
          fontSize: 'var(--text-lg)',
          color: 'var(--foreground)'
        }}>
          Every project is unique. Get a custom quote tailored to your specific needs.
        </p>
        <Button size="lg" page="contact">
          Get Your Custom Quote
        </Button>
      </div>
    </div>
  );
};
