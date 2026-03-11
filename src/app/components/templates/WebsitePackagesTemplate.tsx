/**
 * Website Packages Template
 *
 * Theme: "Neon Pricing"
 *
 * STRICT DESIGN SYSTEM COMPLIANCE:
 * - All styling via BEM classes in page-website-packages.css
 * - Colors via scoped CSS variables (no hardcoded hex in JSX)
 * - Fonts: var(--font-primary), var(--font-secondary)
 *
 * @see /src/styles/templates/page-website-packages.css
 */

import '../../../styles/templates/page-website-packages.css';
import { Container } from '../common/Container';
import { BreadcrumbPart } from '../parts/BreadcrumbPart';
import { ScrollReveal } from '../../hooks/useScrollReveal';
import { FunkyCTA } from '../patterns/FunkyCTA';
import { Button } from '../blocks/design/Buttons';
import {
  RocketLaunch,
  Storefront,
  BuildingOffice,
  CheckCircle,
  XCircle
} from '@phosphor-icons/react';

export function WebsitePackagesTemplate() {
  const packages = [
    {
      id: 'starter',
      name: 'Starter',
      price: '$2,500',
      term: 'starting at',
      description: 'Perfect for small businesses needing a professional online presence.',
      icon: <RocketLaunch size={32} weight="duotone" />,
      popular: false,
      features: [
        { name: 'Custom WordPress Theme', included: true },
        { name: 'Mobile Responsive Design', included: true },
        { name: 'Basic SEO Setup', included: true },
        { name: 'Up to 5 Pages', included: true },
        { name: 'Contact Form Integration', included: true },
        { name: 'WooCommerce Integration', included: false },
        { name: 'Custom Post Types', included: false },
        { name: 'Advanced CRM Sync', included: false }
      ]
    },
    {
      id: 'ecommerce',
      name: 'eCommerce',
      price: '$5,000',
      term: 'starting at',
      description: 'Fully featured online store built to convert visitors into customers.',
      icon: <Storefront size={32} weight="duotone" />,
      popular: true,
      features: [
        { name: 'Custom WordPress Theme', included: true },
        { name: 'Mobile Responsive Design', included: true },
        { name: 'Advanced SEO Setup', included: true },
        { name: 'Unlimited Pages', included: true },
        { name: 'Contact Form Integration', included: true },
        { name: 'WooCommerce Integration', included: true },
        { name: 'Payment Gateway Setup', included: true },
        { name: 'Advanced CRM Sync', included: false }
      ]
    },
    {
      id: 'enterprise',
      name: 'Enterprise',
      price: '$10,000',
      term: 'starting at',
      description: 'Complex integrations and custom web applications for scaling businesses.',
      icon: <BuildingOffice size={32} weight="duotone" />,
      popular: false,
      features: [
        { name: 'Headless / Custom Architecture', included: true },
        { name: 'Mobile Responsive Design', included: true },
        { name: 'Enterprise SEO Strategy', included: true },
        { name: 'Unlimited Pages & Content', included: true },
        { name: 'Advanced Form Workflows', included: true },
        { name: 'Complex B2B eCommerce', included: true },
        { name: 'Custom API Integrations', included: true },
        { name: 'Advanced CRM Sync', included: true }
      ]
    }
  ];

  return (
    <div className="packages-page">
      <BreadcrumbPart
        items={[
          { label: 'Home', href: '/' },
          { label: 'Website Packages' },
        ]}
      />

      {/* ============================================
          HERO SECTION
          ============================================ */}
      <section className="packages-page__hero">
        <Container>
          <ScrollReveal animation="fade-up">
            <div className="packages-page__hero-content">
              <h1 className="packages-page__title">
                Website <span className="packages-page__highlight">Packages</span>
              </h1>
              <p className="packages-page__desc">
                Transparent pricing for high-performance WordPress and WooCommerce solutions. Choose the package that fits your growth stage.
              </p>
            </div>
          </ScrollReveal>
        </Container>
      </section>

      {/* ============================================
          GRID SECTION
          ============================================ */}
      <section className="packages-page__grid-section">
        <Container>
          <div className="packages-page__grid">
            {packages.map((pkg, index) => (
              <ScrollReveal key={pkg.id} animation="fade-up" delay={index * 100}>
                <div className={`packages-page__card ${pkg.popular ? 'packages-page__card--popular' : ''}`}>
                  {pkg.popular && <div className="packages-page__badge">Most Popular</div>}
                  
                  <div className="packages-page__icon-wrap">
                    {pkg.icon}
                  </div>
                  
                  <h3 className="packages-page__name">{pkg.name}</h3>
                  
                  <div className="packages-page__price-wrap">
                    <span className="packages-page__price">{pkg.price}</span>
                    <span className="packages-page__term">{pkg.term}</span>
                  </div>
                  
                  <p className="packages-page__card-desc">{pkg.description}</p>
                  
                  <ul className="packages-page__features">
                    {pkg.features.map((feature, i) => (
                      <li key={i} className="packages-page__feature">
                        {feature.included ? (
                          <CheckCircle weight="fill" size={20} className="packages-page__feature-icon" />
                        ) : (
                          <XCircle weight="fill" size={20} className="packages-page__feature-icon packages-page__feature-icon--disabled" />
                        )}
                        <span style={{ color: feature.included ? 'var(--packages-text)' : 'var(--packages-muted)' }}>
                          {feature.name}
                        </span>
                      </li>
                    ))}
                  </ul>

                  <Button 
                    page="contact" 
                    variant={pkg.popular ? 'primary' : 'outline'} 
                    size="lg" 
                    className="w-full"
                    style={{ width: '100%', justifyContent: 'center' }}
                  >
                    Select {pkg.name}
                  </Button>
                </div>
              </ScrollReveal>
            ))}
          </div>
        </Container>
      </section>

      {/* ============================================
          CTA
          ============================================ */}
      <FunkyCTA
        title="Need something bespoke?"
        description="We also offer custom scopes of work for highly specific requirements and ongoing retainer agreements."
        buttonText="Book a Consultation"
        buttonPage="contact"
        benefits={[
          'Dedicated Project Manager',
          'Agile Development Sprints',
          'Code Quality Guarantee'
        ]}
      />
    </div>
  );
}