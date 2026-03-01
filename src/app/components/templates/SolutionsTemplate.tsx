/**
 * Solutions Template
 * 
 * WordPress template: templates/page-solutions.html
 * 
 * Solutions overview page for LightSpeed WP agency.
 * Layout matches approved "Funky" neon aesthetic:
 * 
 * 1. Funky Hero (Custom neon implementation)
 * 2. Solutions Grid (4 solution cards in 2×2 grid)
 * 3. Why Choose Our Solutions (6 feature cards, 3-col grid)
 * 4. CTA (FunkyCTA pattern)
 * 
 * All styling uses CSS variables from /src/styles/.
 * NO Tailwind classes — WordPress utility classes + CSS variables only.
 */

/* Route-level CSS */
import '../../../styles/templates/solutions-page.css';
import { FunkyCTA } from '../patterns/FunkyCTA';
import { Section } from '../common/Section';
import { Container } from '../common/Container';
import { Button } from '../blocks/design/Buttons';
import {
  ShoppingCart,
  Server,
  Blocks,
  Gauge,
  ShieldCheck,
  Accessibility,
  Scaling,
  Headphones,
  ArrowRight,
  ChevronRight,
  Sparkles,
  RefreshCw,
  Compass,
  Brain
} from 'lucide-react';
import type { LucideIcon } from 'lucide-react';

import { ScrollReveal } from '../../hooks/useScrollReveal';
import { Link } from 'react-router';
import { slugToPath } from '../../utils/route-map';
import { solutions } from '../../data/solutions';

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

// Map centralized solutions data to card format
const mappedSolutions: SolutionCard[] = solutions.map(solution => {
  let badgeVariant: SolutionCard['badgeVariant'] = 'enterprise';
  let badgeText = 'ENTERPRISE';

  if (solution.category === 'agency') {
    badgeVariant = 'featured';
    badgeText = 'FEATURED';
  } else if (solution.category === 'ecommerce') {
    badgeVariant = 'ecommerce';
    badgeText = 'ECOMMERCE';
  }

  // Use first 5 features as tags if tags aren't explicitly available
  const tags = solution.features.slice(0, 5).map(f => f.split(' ').slice(0, 2).join(' ')); 

  return {
    id: solution.id,
    icon: solution.icon,
    badge: badgeText,
    badgeVariant: badgeVariant,
    title: solution.name,
    description: solution.description,
    tags: solution.category === 'agency' ? ['Design System', 'FSE', 'Scalable', 'Enterprise'] : 
          solution.category === 'ecommerce' ? ['WooCommerce', 'Payments', 'Conversion'] :
          ['FSE', 'Blocks', 'Performance', 'Security'],
    link: solution.slug,
  };
});

// Add Managed Hosting manually as it's not in the main solutions array yet
const hostingCard: SolutionCard = {
  id: 'managed-hosting',
  icon: Server,
  badge: 'ENTERPRISE',
  badgeVariant: 'enterprise',
  title: 'Managed Hosting',
  description: 'Enterprise-grade WordPress hosting with automatic scaling, security-first architecture, 99.9% uptime guarantee, and WordPress-centred support.',
  tags: ['Auto Scaling', 'Security First', '99.9% Uptime', 'WordPress Centre'],
  link: 'hosting',
};

const solutionCards: SolutionCard[] = [...mappedSolutions, hostingCard,
  // Website Project Solutions
  {
    id: 'wordpress-redesign',
    icon: RefreshCw,
    badge: 'FEATURED',
    badgeVariant: 'featured',
    title: 'WordPress Redesign',
    description: 'Transform your outdated WordPress site into a modern, high-performance platform with block theme architecture, fluid typography, and blazing speed.',
    tags: ['Redesign', 'Migration', 'Performance', 'FSE'],
    link: 'wordpress-redesign',
  },
  {
    id: 'woocommerce-redesign',
    icon: ShoppingCart,
    badge: 'ECOMMERCE',
    badgeVariant: 'ecommerce',
    title: 'WooCommerce Redesign',
    description: 'Rebuild your WooCommerce store for higher conversions, faster load times, and a checkout experience customers love.',
    tags: ['Store Redesign', 'Checkout', 'Conversion', 'Products'],
    link: 'woocommerce-redesign',
  },
  {
    id: 'tour-operator-design',
    icon: Compass,
    badge: 'ENTERPRISE',
    badgeVariant: 'enterprise',
    title: 'Tour Operator Design',
    description: 'Showcase your tours with stunning itineraries, interactive maps, and a booking experience that turns browsers into travelers.',
    tags: ['Tour Operator', 'Itineraries', 'Maps', 'Bookings'],
    link: 'tour-operator-design',
  },
  {
    id: 'ai-integrations',
    icon: Brain,
    badge: 'FEATURED',
    badgeVariant: 'featured',
    title: 'AI Integrations',
    description: 'Supercharge your WordPress site with AI-powered content generation, intelligent SEO, chatbots, and predictive analytics — all native to your stack.',
    tags: ['AI Content', 'AI SEO', 'Chatbots', 'Analytics'],
    link: 'ai-integrations',
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

  return (
    <>
      {/* ============================================
          1. FUNKY HERO SECTION
          ============================================ */}
      <section className="solutions-hero">
        <div className="solutions-hero__glow" />
        
        <Container>
          <ScrollReveal animation="fade-up">
            <div className="solutions-hero__content">
              {/* Breadcrumbs */}
              <nav className="solutions-hero__breadcrumbs" aria-label="Breadcrumb">
                <Link to="/">Home</Link>
                <ChevronRight size={14} />
                <span aria-current="page">Solutions</span>
              </nav>

              {/* Badge */}
              <div className="solutions-hero__badge">
                <Sparkles size={14} style={{ display: 'inline', marginRight: '8px', verticalAlign: 'middle' }} />
                Comprehensive Solutions
              </div>

              {/* Title */}
              <h1 className="solutions-hero__title">
                WordPress Solutions <br />
                <span>For Every Need</span>
              </h1>

              {/* Description */}
              <p className="solutions-hero__description">
                From design systems to e-commerce platforms, we deliver complete solutions built on modern WordPress architecture. Scalable, secure, and built for performance.
              </p>

              {/* Hero Actions */}
              <div className="solutions-hero__actions wp-flex wp-gap-4 wp-justify-center">
                <Button 
                  page="contact" 
                  variant="primary" 
                  size="lg"
                >
                  Get Started
                </Button>
                <Button 
                  variant="outline" 
                  size="lg"
                  onClick={() => {
                    const grid = document.querySelector('.solutions-grid');
                    grid?.scrollIntoView({ behavior: 'smooth' });
                  }}
                >
                  Explore Solutions
                </Button>
              </div>
            </div>
          </ScrollReveal>
        </Container>
      </section>

      {/* ============================================
          2. SOLUTIONS GRID — cards
          ============================================ */}
      <Section spacing="xl" background="default">
        <Container>
          <div className="wp-max-w-6xl">
            <div className="solutions-grid">
              {solutionCards.map((card, index) => {
                const Icon = card.icon;
                return (
                  <ScrollReveal key={card.id} animation="fade-up" delay={index * 100}>
                    <Link
                      to={slugToPath(card.link)}
                      className="solutions-card"
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
                      <span className="solutions-card__link">
                        Learn More <ArrowRight size={14} />
                      </span>
                    </Link>
                  </ScrollReveal>
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
            <ScrollReveal animation="fade-up">
              <div className="solutions-why__header">
                <h2 className="solutions-why__title">
                  Why Choose Our Solutions
                </h2>
                <p className="solutions-why__description">
                  Our modern WordPress solutions are built to deliver on performance, security, and scalability.
                </p>
              </div>
            </ScrollReveal>

            {/* Feature Grid */}
            <div className="solutions-why__grid">
              {whyChooseCards.map((card, index) => {
                const Icon = card.icon;
                return (
                  <ScrollReveal key={card.title} animation="fade-up" delay={index * 80}>
                    <div className="solutions-why__card">
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
                  </ScrollReveal>
                );
              })}
            </div>
          </div>
        </Container>
      </Section>

      {/* ============================================
          4. CTA — Blue gradient with 2 buttons
          ============================================ */}
      <FunkyCTA
        title="Ready to Transform Your WordPress Project?"
        description="Let's discuss which solution is right for your business goals and technical requirements."
        buttonText="Get Started"
        buttonPage="contact"
        benefits={[
          'Full Site Editing architecture',
          'Enterprise-grade performance',
          'Multi-layered security',
          'WCAG 2.1 AA accessible',
          'Scalable for growth'
        ]}
      />
    </>
  );
}

export default SolutionsTemplate;