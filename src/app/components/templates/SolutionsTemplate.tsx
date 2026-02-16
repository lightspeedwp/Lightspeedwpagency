/**
 * Solutions Template
 * 
 * WordPress template: templates/page-solutions.html
 * 
 * Solutions overview page for LightSpeed WP agency.
 * Layout matches approved mockup design:
 * 
 * 1. Hero (blue gradient, badge, breadcrumbs)
 * 2. Solutions Grid (4 solution cards in 2×2 grid)
 * 3. Why Choose Our Solutions (6 feature cards, 3-col grid)
 * 4. CTA (blue gradient, 2 buttons, trust indicators)
 * 
 * All styling uses CSS variables from /src/styles/.
 * NO Tailwind classes — WordPress utility classes + CSS variables only.
 */

import { Hero } from '../patterns/Hero';
import { CTASection } from '../patterns/CTASection';
import { Section } from '../common/Section';
import { Container } from '../common/Container';
import { useNavigation } from '../../contexts/NavigationContext';
import {
  Layers,
  Globe,
  ShoppingCart,
  Server,
  Blocks,
  Gauge,
  ShieldCheck,
  Accessibility,
  Scaling,
  Headphones,
  ArrowRight,
} from 'lucide-react';
import type { LucideIcon } from 'lucide-react';
import '@/styles/templates/solutions-page.css';

/* ═══════════════════════════════════════════
 * DATA
 * ═══════════════════════════════════════════ */

interface SolutionCard {
  id: string;
  icon: LucideIcon;
  badge: string;
  badgeVariant: 'featured' | 'enterprise' | 'ecommerce';
  title: string;
  description: string;
  tags: string[];
  link: string;
}

const solutionCards: SolutionCard[] = [
  {
    id: 'lsx-design-system',
    icon: Layers,
    badge: 'FEATURED',
    badgeVariant: 'featured',
    title: 'LSX Design System',
    description: 'A comprehensive WordPress block theme framework with design system, pattern library, and developer tools for building scalable, enterprise websites.',
    tags: ['Design System', 'Pattern Library', 'Design Tokens', 'Scalable', 'Enterprise', 'WordPress'],
    link: 'lsx-design',
  },
  {
    id: 'wordpress-solutions',
    icon: Globe,
    badge: 'ENTERPRISE',
    badgeVariant: 'enterprise',
    title: 'WordPress Solutions',
    description: 'Modern WordPress websites built with Full Site Editing, custom themes, and optimised for performance, security, and scalability.',
    tags: ['Full Site Editing', 'Custom Themes', 'Performance', 'Security', 'Scalable'],
    link: 'wordpress-solution',
  },
  {
    id: 'woocommerce-solutions',
    icon: ShoppingCart,
    badge: 'ECOMMERCE',
    badgeVariant: 'ecommerce',
    title: 'WooCommerce Solutions',
    description: 'Complete e-commerce solutions with WooCommerce — custom gateways, payment integration, and conversion-optimised checkout experiences.',
    tags: ['Custom Gateways', 'Payment Integration', 'Conversion Optimised'],
    link: 'woocommerce-solution',
  },
  {
    id: 'managed-hosting',
    icon: Server,
    badge: 'ENTERPRISE',
    badgeVariant: 'enterprise',
    title: 'Managed Hosting',
    description: 'Enterprise-grade WordPress hosting with automatic scaling, security-first architecture, 99.9% uptime guarantee, and WordPress-centred support.',
    tags: ['Auto Scaling', 'Security First', '99.9% Uptime', 'WordPress Centre'],
    link: 'hosting',
  },
];

interface WhyCard {
  icon: LucideIcon;
  title: string;
  description: string;
}

const whyChooseCards: WhyCard[] = [
  {
    icon: Blocks,
    title: 'Modern Architecture',
    description: 'Full Site Editing, block themes, and modern PHP that scales for enterprise needs.',
  },
  {
    icon: Gauge,
    title: 'Performance First',
    description: 'Optimised from Core Web Vitals to server response times with near-perfect Lighthouse scores.',
  },
  {
    icon: ShieldCheck,
    title: 'Security Hardened',
    description: 'Multi-layered security with automated updates, monitoring, and compliance support.',
  },
  {
    icon: Accessibility,
    title: 'Fully Accessible',
    description: 'WCAG 2.1 AA compliant with proper semantics, keyboard navigation, and screen reader support.',
  },
  {
    icon: Scaling,
    title: 'Scalable & Flexible',
    description: 'Built to grow with your business, from a single site to an enterprise multisite network.',
  },
  {
    icon: Headphones,
    title: 'Expert Support',
    description: 'Ongoing maintenance, updates, and expert support to keep your site running smoothly.',
  },
];


/* ═══════════════════════════════════════════
 * COMPONENT
 * ═══════════════════════════════════════════ */

export function SolutionsTemplate() {
  const { navigateTo } = useNavigation();

  return (
    <>
      {/* ============================================
          1. HERO SECTION — Blue gradient
          ============================================ */}
      <Hero
        title="WordPress Solutions for Every Need"
        description="From design systems to e-commerce platforms, we deliver complete solutions built on modern WordPress architecture."
        badge={{ text: 'SOLUTIONS' }}
        gradient="blue"
        align="center"
        maxWidth="4xl"
        spacing="xl"
        breadcrumbs={[
          { label: 'Home', href: '/' },
          { label: 'Solutions' },
        ]}
      />

      {/* ============================================
          2. SOLUTIONS GRID — 4 cards in 2×2
          ============================================ */}
      <Section spacing="xl" background="default">
        <Container>
          <div className="wp-max-w-6xl">
            <div className="solutions-grid">
              {solutionCards.map((card) => {
                const Icon = card.icon;
                return (
                  <article
                    key={card.id}
                    className="solutions-card"
                    onClick={() => navigateTo(card.link)}
                    role="button"
                    tabIndex={0}
                    onKeyDown={(e) => {
                      if (e.key === 'Enter' || e.key === ' ') {
                        e.preventDefault();
                        navigateTo(card.link);
                      }
                    }}
                    aria-label={`${card.title} — ${card.badge}`}
                  >
                    {/* Top: Icon + Badge */}
                    <div className="solutions-card__top">
                      <div className="solutions-card__icon">
                        <Icon size={24} />
                      </div>
                      <span className={`solutions-card__badge solutions-card__badge--${card.badgeVariant}`}>
                        {card.badge}
                      </span>
                    </div>

                    {/* Title */}
                    <h2 className="solutions-card__title">
                      {card.title}
                    </h2>

                    {/* Description */}
                    <p className="solutions-card__description">
                      {card.description}
                    </p>

                    {/* Tag Pills */}
                    <div className="solutions-card__tags">
                      {card.tags.map((tag) => (
                        <span key={tag} className="solutions-card__tag">
                          {tag}
                        </span>
                      ))}
                    </div>

                    {/* Link */}
                    <button
                      className="solutions-card__link"
                      onClick={() => navigateTo(card.link)}
                    >
                      Learn More <ArrowRight size={14} />
                    </button>
                  </article>
                );
              })}
            </div>
          </div>
        </Container>
      </Section>

      {/* ============================================
          3. WHY CHOOSE OUR SOLUTIONS — 6 features
          ============================================ */}
      <Section spacing="xl" background="card">
        <Container>
          <div className="wp-max-w-6xl">
            {/* Section Header */}
            <div className="solutions-why__header">
              <h2 className="solutions-why__title">
                Why Choose Our Solutions
              </h2>
              <p className="solutions-why__description">
                Our modern WordPress solutions are built to deliver on performance, security, and scalability.
              </p>
            </div>

            {/* Feature Grid */}
            <div className="solutions-why__grid">
              {whyChooseCards.map((card) => {
                const Icon = card.icon;
                return (
                  <div key={card.title} className="solutions-why__card">
                    <div className="solutions-why__card-icon">
                      <Icon size={24} />
                    </div>
                    <h3 className="solutions-why__card-title">
                      {card.title}
                    </h3>
                    <p className="solutions-why__card-description">
                      {card.description}
                    </p>
                  </div>
                );
              })}
            </div>
          </div>
        </Container>
      </Section>

      {/* ============================================
          4. CTA — Blue gradient with 2 buttons
          ============================================ */}
      <CTASection
        title="Ready to Transform Your WordPress Project?"
        description="Let's discuss which solution is right for your business goals and technical requirements."
        primaryButtonText="Get Started"
        primaryButtonPage="contact"
        secondaryButtonText="View Portfolio"
        secondaryButtonPage="portfolio"
        variant="highlighted"
        gradient="blue"
      />
    </>
  );
}

export default SolutionsTemplate;