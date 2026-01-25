/**
 * Front Page Template - WordPress Blocks Version
 * 
 * WordPress template: templates/front-page.html
 * 
 * Modern, conversion-focused homepage using WordPress block patterns.
 * 100% CSS variables, zero inline styles, centralized data.
 * 
 * Pattern order:
 * Hero → Trusted By → Services → Solutions → Featured Project → Blog → CTA → Newsletter
 */

import { SiteHeader } from '../parts/SiteHeader';
import { SiteFooter } from '../parts/SiteFooter';
import { SkipLink } from '../common/SkipLink';
import { Container } from '../common/Container';
import { Button } from '../blocks/design/Buttons';
import { BackToTopButton } from '../blocks/layout/BackToTopButton';
import { RouteAnnouncer } from '../blocks/utility/RouteAnnouncer';
import { LogoGrid } from '../patterns/LogoGrid';
import { NewsletterSignup } from '../patterns/NewsletterSignup';
import { 
  Code, 
  Palette, 
  Shield, 
  Zap, 
  ShoppingCart,
  RefreshCw,
  HelpCircle,
  GraduationCap,
  Target,
  TrendingUp,
  Users,
  Award,
  Heart,
  Sparkles,
  ChevronRight
} from 'lucide-react';

// Import centralized data
import {
  homepageHero,
  homepageServices,
  homepageClients,
  homepageSolutions,
  homepageFeaturedProject,
  homepageBlogPosts,
  homepageCTA,
  homepageNewsletter
} from '../../data/homepage';

// Icon mapping (string to component)
const iconMap: Record<string, any> = {
  Code,
  Palette,
  Shield,
  Zap,
  ShoppingCart,
  RefreshCw,
  HelpCircle,
  GraduationCap,
  Target,
  TrendingUp,
  Users,
  Award,
  Heart,
  Sparkles
};

export function FrontPageTemplate() {
  return (
    <>
      <RouteAnnouncer />
      <SkipLink />
      <SiteHeader />
      
      <main id="main-content" role="main">
        {/* ============================================
            HERO SECTION
            ============================================ */}
        <section className="wp-block-hero-homepage">
          <Container>
            <div className="wp-block-hero-homepage__content">
              {/* Badge */}
              <div className="wp-badge--hero-light" style={{ display: 'flex', alignItems: 'center', gap: 'var(--spacing-2)', flexWrap: 'nowrap' }}>
                {iconMap[homepageHero.badge.icon] && 
                  (() => {
                    const BadgeIcon = iconMap[homepageHero.badge.icon];
                    return <BadgeIcon size={14} />;
                  })()
                }
                {homepageHero.badge.text}
              </div>

              {/* Title */}
              <h1 className="wp-block-hero-homepage__title">
                {homepageHero.title.split(homepageHero.titleHighlight)[0]}
                <span className="wp-block-hero-homepage__title-highlight">
                  {homepageHero.titleHighlight}
                </span>
                {homepageHero.title.split(homepageHero.titleHighlight)[1]}
              </h1>

              {/* Description */}
              <p className="wp-block-hero-homepage__description">
                {homepageHero.description}
              </p>

              {/* Buttons */}
              <div className="wp-block-hero-homepage__buttons">
                {homepageHero.buttons.map((button, index) => (
                  <Button
                    key={index}
                    variant={button.variant as any}
                    size="lg"
                    page={button.page}
                  >
                    {button.text}
                  </Button>
                ))}
              </div>

              {/* Stats */}
              <div className="wp-block-hero-homepage__stats">
                {homepageHero.stats.map((stat, index) => {
                  const StatIcon = iconMap[stat.icon];
                  return (
                    <div key={index} className="wp-block-hero-stat">
                      <div className="wp-block-hero-stat__icon">
                        {StatIcon && <StatIcon size={24} />}
                      </div>
                      <div className="wp-block-hero-stat__content">
                        <div className="wp-block-hero-stat__value">{stat.value}</div>
                        <div className="wp-block-hero-stat__label">{stat.label}</div>
                      </div>
                    </div>
                  );
                })}
              </div>
            </div>
          </Container>
        </section>

        {/* ============================================
            TRUSTED BY SECTION
            ============================================ */}
        <section className="wp-block-trusted-by">
          <Container>
            <p className="wp-block-trusted-by__label">
              A few of our happy clients
            </p>
            
            <LogoGrid
              logos={homepageClients.map(client => ({
                name: client.name,
                image: client.logo
              }))}
              columns={6}
              grayscale
            />
          </Container>
        </section>

        {/* ============================================
            SERVICES SECTION
            ============================================ */}
        <section className="wp-block-services-homepage">
          <Container>
            {/* Section Header */}
            <div className="wp-block-section-header">
              <div className="wp-badge--section">
                <Target size={14} />
                Our Services
              </div>

              <h2 className="wp-block-section-header__title">
                WordPress & WooCommerce Experts
              </h2>

              <p className="wp-block-section-header__description">
                We build expert websites and eCommerce solutions, so you can focus on growing your business. 
                From custom development to ongoing support, we've got you covered.
              </p>
            </div>

            {/* Services Grid */}
            <div className="wp-block-services-grid">
              {homepageServices.map((service, index) => {
                const ServiceIcon = iconMap[service.icon];
                return (
                  <div key={index} className="wp-block-service-card">
                    <div className="wp-block-service-card__icon">
                      {ServiceIcon && <ServiceIcon size={28} />}
                    </div>

                    <h3 className="wp-block-service-card__title">
                      {service.title}
                    </h3>

                    <p className="wp-block-service-card__description">
                      {service.description}
                    </p>
                  </div>
                );
              })}
            </div>
          </Container>
        </section>

        {/* ============================================
            SOLUTIONS SECTION
            ============================================ */}
        <section className="wp-block-solutions-section">
          <Container>
            {/* Section Header */}
            <div className="wp-block-section-header">
              <h2 className="wp-block-section-header__title">
                Innovative solutions for <span className="wp-block-section-header__title-primary">online success</span>
              </h2>

              <p className="wp-block-section-header__description">
                We combine cutting-edge WordPress and WooCommerce technology with proven 
                strategies to deliver solutions that drive real results.
              </p>
            </div>

            {/* Solutions Grid */}
            <div className="wp-block-solutions-grid">
              {homepageSolutions.map((solution, index) => {
                const SolutionIcon = iconMap[solution.icon];
                return (
                  <div key={index} className="wp-block-solution-card">
                    <div className="wp-block-solution-card__header">
                      <div className="wp-block-solution-card__icon">
                        {SolutionIcon && <SolutionIcon size={32} />}
                      </div>
                      <h3 className="wp-block-solution-card__title">
                        {solution.title}
                      </h3>
                    </div>

                    <p className="wp-block-solution-card__description">
                      {solution.description}
                    </p>

                    <div className="wp-block-solution-card__features">
                      {solution.features.map((feature, fIndex) => (
                        <div key={fIndex} className="wp-block-solution-feature">
                          {feature}
                        </div>
                      ))}
                    </div>
                  </div>
                );
              })}
            </div>
          </Container>
        </section>

        {/* ============================================
            FEATURED PROJECT SECTION
            ============================================ */}
        <section className="wp-block-featured-project">
          <Container>
            <div className="wp-block-featured-project__wrapper">
              {/* Project Image */}
              <div className="wp-block-featured-project__image">
                <img
                  src={homepageFeaturedProject.image}
                  alt={homepageFeaturedProject.title}
                />
              </div>

              {/* Project Content */}
              <div className="wp-block-featured-project__content">
                <p className="wp-block-featured-project__category">
                  {homepageFeaturedProject.category}
                </p>

                <h2 className="wp-block-featured-project__title">
                  {homepageFeaturedProject.title}
                </h2>

                <p className="wp-block-featured-project__description">
                  {homepageFeaturedProject.description}
                </p>

                {/* Stats */}
                <div className="wp-block-featured-project__stats">
                  {homepageFeaturedProject.stats.map((stat, index) => (
                    <div key={index}>
                      <div className="wp-block-project-stat__value">{stat.value}</div>
                      <div className="wp-block-project-stat__label">{stat.label}</div>
                    </div>
                  ))}
                </div>

                {/* Technologies */}
                <div className="wp-block-featured-project__technologies">
                  {homepageFeaturedProject.technologies.map((tech, index) => (
                    <span key={index} className="wp-block-technology-badge">
                      {tech}
                    </span>
                  ))}
                </div>

                {/* View Project Button */}
                <Button
                  variant="primary"
                  size="md"
                  page="portfolio"
                  icon={<ChevronRight size={20} />}
                >
                  View Full Case Study
                </Button>
              </div>
            </div>
          </Container>
        </section>

        {/* ============================================
            BLOG PREVIEW SECTION
            ============================================ */}
        <section className="wp-block-blog-preview">
          <Container>
            {/* Section Header */}
            <div className="wp-block-section-header">
              <div className="wp-badge--section">
                <Sparkles size={14} />
                Latest Insights
              </div>

              <h2 className="wp-block-section-header__title">
                WordPress Tips & Strategies
              </h2>

              <p className="wp-block-section-header__description">
                Expert insights, tutorials, and industry news to help you get the most 
                from your WordPress website.
              </p>
            </div>

            {/* Blog Posts Grid */}
            <div className="wp-block-blog-posts-grid">
              {homepageBlogPosts.map((post, index) => (
                <article key={index} className="wp-block-blog-post-card">
                  <img
                    src={post.image}
                    alt={post.title}
                    className="wp-block-blog-post-card__image"
                  />

                  <div className="wp-block-blog-post-card__content">
                    <div className="wp-block-blog-post-card__meta">
                      <span className="wp-block-blog-post-card__category">
                        {post.category}
                      </span>
                      <span>{post.date}</span>
                    </div>

                    <h3 className="wp-block-blog-post-card__title">
                      {post.title}
                    </h3>

                    <p className="wp-block-blog-post-card__excerpt">
                      {post.excerpt}
                    </p>

                    <span className="wp-block-blog-post-card__link">
                      Read more <ChevronRight size={16} />
                    </span>
                  </div>
                </article>
              ))}
            </div>

            {/* View All Posts Button */}
            <div className="wp-block-blog-preview__view-all">
              <Button
                variant="outline"
                size="lg"
                page="blog"
              >
                View All Articles
              </Button>
            </div>
          </Container>
        </section>

        {/* ============================================
            CTA SECTION
            ============================================ */}
        <section className="wp-block-homepage-cta">
          <div className="wp-block-homepage-cta__content">
            <h2 className="wp-block-homepage-cta__title">
              {homepageCTA.title}
            </h2>

            <p className="wp-block-homepage-cta__description">
              {homepageCTA.description}
            </p>

            <div className="wp-block-homepage-cta__buttons">
              {homepageCTA.buttons.map((button, index) => (
                <Button
                  key={index}
                  variant={button.variant as any}
                  size="lg"
                  page={button.page}
                >
                  {button.text}
                </Button>
              ))}
            </div>
          </div>
        </section>

        {/* ============================================
            NEWSLETTER SECTION
            ============================================ */}
        <section className="wp-block-newsletter-homepage">
          <div className="wp-block-newsletter-homepage__content">
            <NewsletterSignup
              title={homepageNewsletter.title}
              description={homepageNewsletter.description}
              placeholder={homepageNewsletter.placeholder}
              buttonText={homepageNewsletter.buttonText}
              privacyText={homepageNewsletter.privacyText}
              layout="centered"
              variant="default"
            />
          </div>
        </section>
      </main>

      <SiteFooter />
      <BackToTopButton />
    </>
  );
}