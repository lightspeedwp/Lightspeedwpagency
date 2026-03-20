/**
 * Prototype Card Block
 * 
 * Reusable card component for showcasing Figma Make prototypes.
 * Features immersive visuals, stats, and call-to-action links.
 * 
 * BEM: .prototype-card
 * CSS: /styles/blocks/prototype-card.css
 */

import { ArrowUpRight } from '@phosphor-icons/react';
import { FigmaPrototype } from '../../data/figma-prototypes';
import * as PhosphorIcons from '@phosphor-icons/react';
import { WebGLLoader } from '../patterns/webgl/WebGLLoader';

interface PrototypeCardProps {
  prototype: FigmaPrototype;
  variant?: 'default' | 'featured' | 'compact';
  showWebGL?: boolean;
  className?: string;
}

export function PrototypeCard({ 
  prototype, 
  variant = 'default',
  showWebGL = true,
  className = '' 
}: PrototypeCardProps) {
  // Map icon names to Phosphor components
  const getIcon = (iconName: string, size: number = 24, weight: 'regular' | 'duotone' = 'duotone') => {
    const IconComponent = (PhosphorIcons as any)[iconName];
    return IconComponent ? <IconComponent size={size} weight={weight} /> : null;
  };

  const cardClass = `prototype-card prototype-card--${variant} ${className}`.trim();

  return (
    <article className={cardClass}>
      {/* WebGL Visual Preview (optional) */}
      {showWebGL && prototype.webglGraphic && variant !== 'compact' && (
        <div className="prototype-card__visual">
          <WebGLLoader 
            componentName={prototype.webglGraphic} 
            accentColor={prototype.accentColor}
            className="webgl-card-background"
          />
        </div>
      )}
      
      {/* Visual header with gradient overlay */}
      <div className="prototype-card__header">
        <div className="prototype-card__category-badge">
          {getIcon(
            prototype.category === 'tour-operator' ? 'Compass' :
            prototype.category === 'ecommerce' ? 'ShoppingCart' :
            prototype.category === 'publishing' ? 'Newspaper' :
            'Briefcase',
            16,
            'regular'
          )}
          <span>{prototype.category.replace('-', ' ')}</span>
        </div>
        
        {/* Title and tagline */}
        <div className="prototype-card__title-group">
          <h3 className="prototype-card__title">{prototype.title}</h3>
          <p className="prototype-card__tagline">{prototype.tagline}</p>
        </div>
      </div>

      {/* Description */}
      <div className="prototype-card__content">
        <p className="prototype-card__description">{prototype.description}</p>
      </div>

      {/* Stats grid */}
      {prototype.stats && prototype.stats.length > 0 && (
        <div className="prototype-card__stats">
          {prototype.stats.map((stat, index) => (
            <div key={index} className="prototype-card__stat">
              <div className="prototype-card__stat-icon">
                {getIcon(stat.icon, 24, 'duotone')}
              </div>
              <div className="prototype-card__stat-content">
                <div className="prototype-card__stat-value">{stat.value}</div>
                <div className="prototype-card__stat-label">{stat.label}</div>
              </div>
            </div>
          ))}
        </div>
      )}

      {/* Features (if not compact) */}
      {variant !== 'compact' && prototype.features && prototype.features.length > 0 && (
        <div className="prototype-card__features">
          {prototype.features.slice(0, 3).map((feature, index) => (
            <div key={index} className="prototype-card__feature">
              <div className="prototype-card__feature-icon">
                {getIcon(feature.icon, 20, 'duotone')}
              </div>
              <div className="prototype-card__feature-content">
                <h4 className="prototype-card__feature-title">{feature.title}</h4>
                <p className="prototype-card__feature-description">{feature.description}</p>
              </div>
            </div>
          ))}
        </div>
      )}

      {/* Tags */}
      {prototype.tags && prototype.tags.length > 0 && (
        <div className="prototype-card__tags">
          {prototype.tags.slice(0, 4).map((tag, index) => (
            <span key={index} className="prototype-card__tag">{tag}</span>
          ))}
        </div>
      )}

      {/* Action links */}
      <div className="prototype-card__actions">
        <a
          href={prototype.liveUrl}
          target="_blank"
          rel="noopener noreferrer"
          className="prototype-card__link prototype-card__link--primary"
        >
          <span>View live site</span>
          <ArrowUpRight size={20} weight="bold" />
        </a>
        <a
          href={prototype.figmaUrl}
          target="_blank"
          rel="noopener noreferrer"
          className="prototype-card__link prototype-card__link--secondary"
        >
          <span>View in Figma</span>
          <ArrowUpRight size={20} weight="regular" />
        </a>
      </div>
    </article>
  );
}