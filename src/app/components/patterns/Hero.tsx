/**
 * Enhanced Hero Pattern
 * 
 * WordPress pattern: lsx-design/hero/*
 * 
 * Unified hero component supporting all hero variants:
 * - Homepage hero (full-width, stats, buttons)
 * - Archive hero (centered, simple)
 * - Service hero (gradient backgrounds)
 * - Simple hero (minimal)
 * 
 * Features:
 * - 11 gradient background variants
 * - Optional badge with icon
 * - Optional title highlighting
 * - Optional CTA buttons
 * - Optional stats grid
 * - Optional breadcrumbs
 * - 100% CSS variables compliance
 * - Full WordPress FSE compatibility
 * - All styling in /src/styles/hero.css (user-editable)
 */

import { Container } from '../common/Container';
import { Section } from '../common/Section';
import { Buttons, Button } from '../blocks/design/Buttons';
import { Breadcrumbs } from '../common/Breadcrumbs';
import type { LucideIcon } from 'lucide-react';

// ============================================
// TYPESCRIPT INTERFACES
// ============================================

export interface HeroBadge {
  icon?: LucideIcon;
  text: string;
}

export interface HeroButton {
  label: string;
  href?: string;
  page?: string;
  variant?: 'primary' | 'secondary' | 'outline';
}

export interface HeroStat {
  icon?: LucideIcon;
  value: string;
  label: string;
}

export interface HeroBreadcrumb {
  label: string;
  href?: string;
}

export type HeroVariant = 'homepage' | 'archive' | 'service' | 'simple';

export type HeroAlign = 'left' | 'center';

export type HeroMaxWidth = '3xl' | '4xl' | '6xl' | '75%';

export type HeroGradient = 
  | 'none' 
  | 'blue' | 'purple' | 'purple-light' | 'purple-indigo'
  | 'red' | 'green' | 'amber' | 'cyan' | 'sky' 
  | 'slate' | 'violet';

export interface HeroProps {
  // Content (Required)
  title: string;
  description: string;
  
  // Content (Optional)
  titleHighlight?: string;
  subtitle?: string;
  
  // Badge
  badge?: HeroBadge;
  
  // Buttons
  buttons?: HeroButton[];
  
  // Stats
  stats?: HeroStat[];
  
  // Layout
  variant?: HeroVariant;
  align?: HeroAlign;
  maxWidth?: HeroMaxWidth;
  
  // Background
  gradient?: HeroGradient;
  
  // Breadcrumbs
  breadcrumbs?: HeroBreadcrumb[];
  
  // Spacing
  spacing?: 'default' | 'lg' | 'xl' | '2xl';
}

// ============================================
// HERO COMPONENT
// ============================================

export function Hero({
  // Content
  title,
  description,
  titleHighlight,
  subtitle,
  
  // Optional features
  badge,
  buttons = [],
  stats = [],
  
  // Layout
  variant = 'simple',
  align = 'center',
  maxWidth = '4xl',
  
  // Background
  gradient = 'none',
  
  // Breadcrumbs
  breadcrumbs,
  
  // Spacing
  spacing = 'xl',
}: HeroProps) {
  
  // ============================================
  // CSS CLASS MAPPING
  // ============================================
  
  const hasGradient = gradient !== 'none';
  const gradientClass = hasGradient ? `wp-gradient-${gradient}` : '';
  
  const maxWidthClass = 
    maxWidth === '3xl' ? 'wp-max-w-3xl' :
    maxWidth === '4xl' ? 'wp-max-w-4xl' :
    maxWidth === '6xl' ? 'wp-max-w-6xl' :
    '';
  
  const alignClass = align === 'center' ? 'wp-text-center' : '';
  
  // ============================================
  // SECTION CLASSES
  // ============================================
  
  const sectionClasses = [
    'hero-section',
    hasGradient && 'hero-section--with-gradient',
    gradientClass,
  ].filter(Boolean).join(' ');
  
  // ============================================
  // CONTENT CLASSES
  // ============================================
  
  const contentClasses = [
    'hero-content',
    maxWidthClass,
    alignClass,
    align === 'center' && 'hero-content--center',
    maxWidth === '75%' && 'hero-content--75',
  ].filter(Boolean).join(' ');
  
  // ============================================
  // TITLE CLASSES
  // ============================================
  
  const titleClasses = [
    'hero-title',
    hasGradient && 'hero-title--gradient',
    subtitle ? 'hero-title--with-subtitle' : 'hero-title--no-subtitle',
  ].filter(Boolean).join(' ');
  
  // ============================================
  // DESCRIPTION CLASSES
  // ============================================
  
  const descriptionClasses = [
    'hero-description',
    variant === 'homepage' && 'hero-description--homepage',
    hasGradient && 'hero-description--gradient',
    buttons.length > 0 && 'hero-description--with-buttons',
    stats.length > 0 && 'hero-description--with-stats',
  ].filter(Boolean).join(' ');
  
  // ============================================
  // BUTTONS CLASSES
  // ============================================
  
  const buttonsClasses = [
    'hero-buttons',
    'wp-flex-center',
    'wp-flex-wrap',
    stats.length > 0 && 'hero-buttons--with-stats',
  ].filter(Boolean).join(' ');
  
  // ============================================
  // STATS CLASSES
  // ============================================
  
  const statsClasses = [
    'hero-stats',
    `wp-grid-${stats.length > 2 ? '3' : '2'}-cols`,
  ].filter(Boolean).join(' ');
  
  // ============================================
  // TITLE WITH HIGHLIGHT
  // ============================================
  
  const renderTitle = () => {
    if (!titleHighlight) {
      return title;
    }
    
    // Split title by highlight text
    const parts = title.split(titleHighlight);
    
    return (
      <>
        {parts[0]}
        <span className="hero-title__highlight">
          {titleHighlight}
        </span>
        {parts[1]}
      </>
    );
  };
  
  // ============================================
  // RENDER COMPONENT
  // ============================================
  
  return (
    <Section 
      spacing={spacing}
      className={sectionClasses}
    >
      {/* Decorative Gradient Orb */}
      {hasGradient && (
        <div
          className={`hero-orb hero-orb--${gradient === 'blue' || gradient === 'purple' || gradient === 'purple-light' || gradient === 'purple-indigo' ? 'primary' : 'accent'}`}
          aria-hidden="true"
        />
      )}

      <Container>
        {/* Breadcrumbs (Above hero content) */}
        {breadcrumbs && breadcrumbs.length > 0 && (
          <div className="hero-breadcrumbs">
            <Breadcrumbs items={breadcrumbs} />
          </div>
        )}
        
        {/* Hero Content */}
        <div className={contentClasses}>
          {/* Badge */}
          {badge && (
            <div className="hero-badge wp-badge--hero">
              {badge.icon && (() => {
                const BadgeIcon = badge.icon;
                return <BadgeIcon size={14} />;
              })()}
              {badge.text}
            </div>
          )}
          
          {/* Title */}
          <h1 className={titleClasses}>
            {renderTitle()}
          </h1>
          
          {/* Subtitle (optional) */}
          {subtitle && (
            <p className={`hero-subtitle ${hasGradient ? 'hero-subtitle--gradient' : ''}`}>
              {subtitle}
            </p>
          )}
          
          {/* Description */}
          <p className={descriptionClasses}>
            {description}
          </p>
          
          {/* CTA Buttons */}
          {buttons.length > 0 && (
            <div className={buttonsClasses}>
              <Buttons>
                {buttons.map((button, index) => (
                  <Button
                    key={index}
                    variant={button.variant || 'primary'}
                    page={button.page}
                    href={button.href}
                  >
                    {button.label}
                  </Button>
                ))}
              </Buttons>
            </div>
          )}
          
          {/* Stats Grid */}
          {stats.length > 0 && (
            <div className={statsClasses}>
              {stats.map((stat, index) => {
                const StatIcon = stat.icon;
                
                // Stat item classes
                const statClasses = [
                  'hero-stat',
                  variant === 'homepage' ? 'hero-stat--homepage' : 'hero-stat--column',
                  variant !== 'homepage' && `hero-stat--${align}`,
                ].filter(Boolean).join(' ');
                
                // Stat icon classes
                const iconClasses = [
                  'hero-stat__icon',
                  hasGradient && 'hero-stat__icon--gradient',
                ].filter(Boolean).join(' ');
                
                // Stat value classes
                const valueClasses = [
                  'hero-stat__value',
                  hasGradient && 'hero-stat__value--gradient',
                ].filter(Boolean).join(' ');
                
                // Stat label classes
                const labelClasses = [
                  'hero-stat__label',
                  hasGradient && 'hero-stat__label--gradient',
                ].filter(Boolean).join(' ');
                
                return (
                  <div key={index} className={statClasses}>
                    {/* Icon */}
                    {StatIcon && (
                      <div className={iconClasses}>
                        <StatIcon size={24} />
                      </div>
                    )}
                    
                    {/* Content */}
                    <div className="hero-stat__content">
                      <div className={valueClasses}>
                        {stat.value}
                      </div>
                      <div className={labelClasses}>
                        {stat.label}
                      </div>
                    </div>
                  </div>
                );
              })}
            </div>
          )}
        </div>
      </Container>
    </Section>
  );
}
