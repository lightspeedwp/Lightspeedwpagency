/**
 * Services Landing — Category Hubs Section
 *
 * Sub-component of ServicesLandingTemplate.
 * Two large hub cards: AI Services + Content Services.
 *
 * @see ServicesLandingTemplate.tsx — Parent template
 */

import { Container } from '../../common/Container';
import { ScrollReveal } from '../../../hooks/useScrollReveal';
import { Link } from 'react-router';
import { getPageUrl } from '../../../data/site-pages';
import {
  ArrowRight,
  Check,
  Brain,
  FileText as FileTextIcon,
  Stack as Layers,
} from '@phosphor-icons/react';

/** Shared inline styles for hub cards */
const hubCardStyle: React.CSSProperties = {
  display: 'flex',
  flexDirection: 'column',
  padding: 'var(--spacing-8)',
  backgroundColor: 'var(--card)',
  borderRadius: 'var(--radius-lg)',
  border: '1px solid var(--border)',
  textDecoration: 'none',
  position: 'relative',
  overflow: 'hidden',
  height: '100%',
  transition: 'transform var(--transition-base), box-shadow var(--transition-base)'
};

interface HubCardProps {
  to: string;
  accentColor: string;
  accentVar: string;
  icon: React.ElementType;
  title: string;
  description: string;
  features: string[];
  linkText: string;
  gradientDirection?: string;
  delay?: number;
}

function HubCard({ to, accentColor, accentVar, icon: Icon, title, description, features, linkText, gradientDirection = '90deg', delay = 0 }: HubCardProps) {
  return (
    <ScrollReveal animation="fade-up" delay={delay}>
      <Link
        to={to}
        style={hubCardStyle}
        onMouseEnter={(e) => {
          e.currentTarget.style.transform = 'translateY(-5px)';
          e.currentTarget.style.boxShadow = `0 10px 30px rgba(var(--${accentVar}-rgb), 0.15)`;
          e.currentTarget.style.borderColor = `var(--${accentVar})`;
        }}
        onMouseLeave={(e) => {
          e.currentTarget.style.transform = 'none';
          e.currentTarget.style.boxShadow = 'none';
          e.currentTarget.style.borderColor = 'var(--border)';
        }}
      >
        <div style={{
          position: 'absolute',
          top: 0, left: 0, right: 0, height: '4px',
          background: `linear-gradient(${gradientDirection}, var(--primary), var(--secondary))`
        }} />

        <div style={{
          width: '56px', height: '56px',
          display: 'flex', alignItems: 'center', justifyContent: 'center',
          borderRadius: 'var(--radius)',
          backgroundColor: `var(--${accentVar}-soft)`,
          color: accentColor,
          marginBottom: 'var(--spacing-6)'
        }}>
          <Icon size={28} weight="duotone" />
        </div>

        <h3 style={{
          margin: '0 0 var(--spacing-3) 0',
          fontFamily: 'var(--font-primary)',
          fontSize: 'var(--text-h3)',
          color: 'var(--card-foreground)'
        }}>{title}</h3>

        <p style={{
          margin: '0 0 var(--spacing-6) 0',
          fontFamily: 'var(--font-secondary)',
          fontSize: 'var(--text-base)',
          color: 'var(--muted-foreground)',
          lineHeight: 'var(--line-height-comfortable)'
        }}>
          {description}
        </p>

        <ul style={{
          listStyle: 'none', padding: 0, margin: '0 0 var(--spacing-8) 0',
          display: 'flex', flexDirection: 'column', gap: 'var(--spacing-2)',
          fontFamily: 'var(--font-secondary)', fontSize: 'var(--text-sm)', color: 'var(--muted-foreground)'
        }}>
          {features.map((feature) => (
            <li key={feature} className="service-feature__list-item">
              <Check size={16} color={accentColor} /> {feature}
            </li>
          ))}
        </ul>

        <div style={{
          marginTop: 'auto',
          display: 'flex', alignItems: 'center', gap: 'var(--spacing-2)',
          color: accentColor,
          fontFamily: 'var(--font-primary)',
          fontWeight: 'var(--font-weight-semibold)',
          fontSize: 'var(--text-sm)'
        }}>
          {linkText}
          <ArrowRight size={16} weight="bold" />
        </div>
      </Link>
    </ScrollReveal>
  );
}

export function ServicesLandingHubs() {
  return (
    <section className="service-section service-section--bg-muted">
      <Container>
        <ScrollReveal animation="fade-up">
          <div className="service-section__header">
            <div style={{
              display: 'inline-flex',
              alignItems: 'center',
              gap: 'var(--spacing-2)',
              padding: 'var(--spacing-2) var(--spacing-4)',
              borderRadius: 'var(--radius-full)',
              backgroundColor: 'var(--card)',
              border: '1px solid var(--border)',
              color: 'var(--secondary)',
              fontFamily: 'var(--font-secondary)',
              fontSize: 'var(--text-sm)',
              fontWeight: 'var(--font-weight-medium)',
              marginBottom: 'var(--spacing-4)'
            }}>
              <Layers size={14} weight="bold" />
              Specialist Hubs
            </div>
            <h2 className="service-section__title" style={{ margin: '0 0 var(--spacing-4) 0' }}>
              Explore by Discipline
            </h2>
            <p style={{
              margin: 0,
              fontFamily: 'var(--font-secondary)',
              fontSize: 'var(--text-lg)',
              color: 'var(--muted-foreground)',
              maxWidth: '600px'
            }}>
              Deep-dive into our specialist service categories — each with dedicated sub-services, case studies, and pricing.
            </p>
          </div>
        </ScrollReveal>

        <div className="service-section__grid service-section__grid--2">
          <HubCard
            to={getPageUrl('ai-services-landing')}
            accentColor="var(--primary)"
            accentVar="primary"
            icon={Brain}
            title="AI Services"
            description="AI Search & Visibility, Technical SEO, Analytics, AI Engine Optimisation, and Answer Engine Optimisation."
            features={['AI Search & Visibility', 'Technical SEO', 'Analytics & Reporting']}
            linkText="Explore AI Services"
            delay={0}
          />
          <HubCard
            to={getPageUrl('content')}
            accentColor="var(--secondary)"
            accentVar="secondary"
            icon={FileTextIcon}
            title="Content services"
            description="Full-lifecycle content — from audit and strategy through creation, copywriting, SEO content, and governance."
            features={['Content Audit & Strategy', 'Copywriting & UX Writing', 'SEO Content & Governance']}
            linkText="Explore Content Services"
            gradientDirection="90deg"
            delay={120}
          />
        </div>
      </Container>
    </section>
  );
}
