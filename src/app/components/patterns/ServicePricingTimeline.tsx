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

import { CurrencyDollar, Clock, Check } from '@phosphor-icons/react';
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
        <h2 className="wp-font-primary wp-text-h2 wp-text-foreground">
          Investment & Timeline
        </h2>
        <p className="wp-font-secondary wp-text-base wp-text-muted-foreground">
          Transparent pricing and realistic timelines for your project
        </p>
      </div>
      
      <div className="service-pricing__grid">
        {/* Pricing Card */}
        <div className="service-pricing__card service-pricing__card--pricing">
          <div className="service-pricing__card-header">
            <CurrencyDollar className="service-pricing__icon" size={32} aria-hidden="true" />
            <h3 className="wp-font-primary wp-text-h3 wp-text-foreground">
              Investment
            </h3>
          </div>
          
          <div className="service-pricing__price-range">
            <span className="service-pricing__price-min wp-font-primary wp-text-h2 wp-text-primary">
              ${pricing.min.toLocaleString()}
            </span>
            <span className="service-pricing__price-separator wp-font-primary wp-text-h3 wp-text-muted-foreground">
              –
            </span>
            <span className="service-pricing__price-max wp-font-primary wp-text-h2 wp-text-primary">
              ${pricing.max.toLocaleString()}
            </span>
            {pricing.unit !== 'project' && (
              <span className="service-pricing__price-unit wp-font-secondary wp-text-base wp-text-muted-foreground">
                /{pricing.unit}
              </span>
            )}
          </div>
          
          {pricing.startingFrom && (
            <p className="service-pricing__starting-from wp-font-secondary wp-text-base wp-text-muted-foreground">
              {pricing.startingFrom}
            </p>
          )}
          
          {showVariables && pricing.variables && pricing.variables.length > 0 && (
            <div className="service-pricing__variables">
              <h4 className="wp-font-primary wp-text-base wp-text-foreground">
                Pricing depends on:
              </h4>
              <ul>
                {pricing.variables.map((variable, idx) => (
                  <li key={idx} className="wp-font-secondary wp-text-sm wp-text-foreground">
                    {variable}
                  </li>
                ))}
              </ul>
            </div>
          )}
          
          {pricing.includes && pricing.includes.length > 0 && (
            <div className="service-pricing__includes">
              <h4 className="wp-font-primary wp-text-base wp-text-foreground">
                What's included:
              </h4>
              <ul>
                {pricing.includes.map((item, idx) => (
                  <li key={idx} className="wp-font-secondary wp-text-sm wp-text-foreground">
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
            <h3 className="wp-font-primary wp-text-h3 wp-text-foreground">
              Timeline
            </h3>
          </div>
          
          <div className="service-pricing__duration">
            <span className="service-pricing__duration-number wp-font-primary wp-text-h1 wp-text-primary">
              {timeline.duration}
            </span>
            <span className="service-pricing__duration-unit wp-font-secondary wp-text-h3 wp-text-muted-foreground">
              {timeline.unit}
            </span>
          </div>
          
          {showPhases && timeline.phases && timeline.phases.length > 0 && (
            <div className="service-pricing__phases">
              <h4 className="wp-font-primary wp-text-base wp-text-foreground">
                Project phases:
              </h4>
              {timeline.phases.map((phase, idx) => (
                <div key={idx} className="service-pricing__phase">
                  <div className="service-pricing__phase-number wp-font-primary wp-text-sm wp-text-primary-foreground wp-bg-primary">
                    {idx + 1}
                  </div>
                  <div className="service-pricing__phase-content">
                    <div className="service-pricing__phase-name wp-font-secondary wp-text-sm wp-text-foreground">
                      {phase.name}
                    </div>
                    <div className="service-pricing__phase-duration wp-font-secondary wp-text-sm wp-text-muted-foreground">
                      {phase.duration}
                    </div>
                  </div>
                </div>
              ))}
            </div>
          )}
          
          {showVariables && timeline.variables && timeline.variables.length > 0 && (
            <div className="service-pricing__variables">
              <h4 className="wp-font-primary wp-text-base wp-text-foreground">
                Timeline depends on:
              </h4>
              <ul>
                {timeline.variables.map((variable, idx) => (
                  <li key={idx} className="wp-font-secondary wp-text-sm wp-text-foreground">
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
        <p className="service-pricing__cta-text wp-font-secondary wp-text-lg wp-text-foreground">
          Every project is unique. Get a custom quote tailored to your specific needs.
        </p>
        <Button size="lg" page="contact">
          Get Your Custom Quote
        </Button>
      </div>
    </div>
  );
};
