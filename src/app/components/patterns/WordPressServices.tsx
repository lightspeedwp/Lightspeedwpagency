/**
 * WordPressServices Pattern — LSX Design
 */

import { ArrowRight, CheckCircle } from '@phosphor-icons/react';
import type { UniversalIcon } from '../../utils/icon-map';
import { Container } from '../common/Container';

export interface WordPressServiceItem {
  icon: UniversalIcon;
  title: string;
  description: string;
  features: string[];
  link?: string;
  linkText?: string;
}

export interface WordPressServicesProps {
  title?: string;
  description?: string;
  services: WordPressServiceItem[];
  columns?: 3;
  spacing?: 'sm' | 'md' | 'lg' | 'xl';
  background?: 'default' | 'card' | 'muted' | 'transparent';
}

export function WordPressServices({
  title,
  description,
  services,
  columns = 3,
  spacing = 'xl',
  background = 'default'
}: WordPressServicesProps) {
  return (
    <Section spacing={spacing} background={background as any}>
      <Container>
        {/* Section Header */}
        {(title || description) && (
          <div className="wordpress-services__header">
            {title && (
              <h2 className="wordpress-services__title">
                {title}
              </h2>
            )}

            {description && (
              <p className="wordpress-services__description">
                {description}
              </p>
            )}
          </div>
        )}

        {/* Services Grid */}
        <div className="wordpress-services__grid wordpress-services__grid--3-cols">
          {services.map((service, index) => {
            const Icon = service.icon;
            return (
              <div key={index} className="wordpress-services__card">
                {/* Icon */}
                <div className="wordpress-services__icon-wrapper">
                  <Icon size={32} />
                </div>

                {/* Content */}
                <h3 className="wordpress-services__card-title">
                  {service.title}
                </h3>

                <p className="wordpress-services__card-description">
                  {service.description}
                </p>

                {/* Features */}
                {service.features && service.features.length > 0 && (
                  <ul className="wordpress-services__features">
                    {service.features.map((feature, idx) => (
                      <li key={idx} className="wordpress-services__feature-item">
                        <CheckCircle size={16} className="wordpress-services__feature-icon" />
                        <span className="wordpress-services__feature-text">
                          {feature}
                        </span>
                      </li>
                    ))}
                  </ul>
                )}

                {/* Link */}
                {service.link && (
                  <a href={service.link} className="wordpress-services__link">
                    {service.linkText || 'Learn More'} <ArrowRight size={16} />
                  </a>
                )}
              </div>
            );
          })}
        </div>
      </Container>
    </Section>
  );
}