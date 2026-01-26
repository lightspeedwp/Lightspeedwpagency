/**
 * Solutions Template
 * 
 * WordPress template: templates/page-solutions.html
 * 
 * Modern solutions showcase combining Lightspeed WP content structure
 * with LSX Design system tokens and patterns.
 * 
 * Pattern order:
 * Hero → Solutions Overview → Why LightSpeed → Featured Project → CTA
 * 
 * **Migration Status:**
 * - ✅ Hero → Hero pattern
 * - ✅ Solutions Overview → SolutionCardsGrid pattern
 * - ✅ Why LightSpeed → FeatureGrid pattern
 * - ✅ Featured Project → FeaturedProjectShowcase pattern
 * - ✅ CTA → CTASection pattern
 * 
 * **Code Reduction:** 715 → ~250 lines (65% reduction)
 */

import { SiteHeader } from '../parts/SiteHeader';
import { SiteFooter } from '../parts/SiteFooter';
import { SkipLink } from '../common/SkipLink';
import { BackToTopButton } from '../blocks/layout/BackToTopButton';
import { RouteAnnouncer } from '../blocks/utility/RouteAnnouncer';
import { Hero } from '../patterns/Hero';
import { SolutionCardsGrid } from '../patterns/SolutionCardsGrid';
import { FeatureGrid } from '../patterns/FeatureGrid';
import { FeaturedProjectShowcase } from '../patterns/FeaturedProjectShowcase';
import { CTASection } from '../patterns/CTASection';
import { 
  Code, 
  ShoppingCart, 
  Palette,
  Check,
  Target,
  Sparkles,
  Users,
  Package
} from 'lucide-react';

// Solution cards data
const solutionCards = [
  {
    id: 'wordpress-websites',
    icon: Code,
    title: 'WordPress Business Websites',
    description: 'With over 15 years experience, our developers use the power of WordPress to help you and your business with whatever you need.',
    link: 'wordpress-solution',
    linkText: 'Read More →'
  },
  {
    id: 'woocommerce-stores',
    icon: ShoppingCart,
    title: 'WooCommerce Online Stores',
    description: 'We use WooCommerce functionality to provide seamless solutions that increase sales and keep your customers happy.',
    link: 'woocommerce-solution',
    linkText: 'Read More →'
  },
  {
    id: 'tourism-websites',
    icon: Target,
    title: 'Tourism Websites',
    description: 'With over 15 years experience, our developers use the power of WordPress to help you and your business with whatever you need.',
    link: 'tour-operators',
    linkText: 'Read More →'
  },
  {
    id: 'media-industry',
    icon: Palette,
    title: 'Media Industry',
    description: 'Developed to handle media, stories and adverts for global brands, with support some of the biggest names in the industry.',
    link: 'contact',
    linkText: 'Contact Us →'
  },
  {
    id: 'elearning',
    icon: Users,
    title: 'eLearning & Education',
    description: 'Powering interactive learning, our eLearning solutions put the WP in courses & training programs to launch learners everywhere.',
    link: 'contact',
    linkText: 'Contact Us →'
  },
  {
    id: 'lsx-design-system',
    icon: Sparkles,
    title: 'LSX Design System',
    description: 'Our new team members are scaling to designers of tomorrow, adapting to new and upcoming designs.',
    link: 'lsx-design',
    linkText: 'Read More →'
  }
];

// Why LightSpeed features
const whyLightSpeedFeatures = [
  {
    icon: Code,
    title: 'Why WordPress?',
    description: 'WordPress offers the most value for your hard-earned rand. Scalable, dependable, and here to stay.',
    features: ['Scalable', 'Dependable', 'Future-proof']
  },
  {
    icon: ShoppingCart,
    title: 'Why WooCommerce?',
    description: 'WooCommerce gives you all the tools to make e-commerce success a reality and we help you leverage it.',
    features: ['Complete toolkit', 'Proven platform', 'Expert support']
  },
  {
    icon: Users,
    title: 'Why eLearning?',
    description: 'Here we use WordPress power and eLearning, courses, and training programs to launch learners everywhere.',
    features: ['Powerful LMS', 'Global reach', 'Scalable courses']
  }
];

export function SolutionsTemplate() {
  return (
    <>
      <RouteAnnouncer />
      <SkipLink />
      <SiteHeader />
      
      <main id="main-content" role="main">
        {/* Hero Section */}
        <Hero
          title="Designed For Success"
          description="Powered by expert WordPress design and development, our WordPress Solutions are the building blocks of success for your online business."
          cta={[
            {
              label: "Free Consultation",
              page: "contact",
              size: "lg",
              style: {
                backgroundColor: 'var(--primary)',
                color: 'white',
                boxShadow: '4px 4px 0px 0px rgba(0, 0, 0, 0.9)',
                border: '1px solid rgba(9, 9, 9, 1)'
              }
            },
            {
              label: "View Our Work",
              page: "portfolio",
              size: "lg",
              style: {
                borderColor: 'rgba(255, 255, 255, 0.3)',
                color: 'white',
                backgroundColor: 'transparent'
              }
            }
          ]}
          clientLogos={[
            'Joewes',
            'Xneelo',
            'SitesDigital',
            'Media24'
          ]}
        />

        {/* Solutions Overview Section */}
        <SolutionCardsGrid
          badge="OUR SOLUTIONS"
          badgeIcon={Package}
          title="Expert WordPress Solutions"
          description="Industry-leading, custom solutions applied to meet your unique needs for your WordPress websites & WooCommerce shops."
          solutions={solutionCards}
          spacing="xl"
          backgroundColor="var(--background)"
        />

        {/* Why LightSpeed Section */}
        <FeatureGrid
          title="Why LightSpeed?"
          description="Over 15 years in developing successful WordPress websites"
          items={whyLightSpeedFeatures}
          columns={3}
          variant="bordered"
          iconStyle="rounded"
          spacing="xl"
          backgroundColor="linear-gradient(135deg, rgba(30, 106, 255, 0.05) 0%, rgba(123, 231, 255, 0.05) 100%)"
          maxWidth="5xl"
        />

        {/* Featured Project Section */}
        <FeaturedProjectShowcase
          badge="FEATURED PROJECT"
          badgeIcon={Sparkles}
          title="Our work speaks for itself"
          description="Our hosting is trusted by over 500 000 websites, How can we help your business today? See our recent case study and discover how we helped transform their online presence."
          stats={[
            { value: '500K+', label: 'Websites Hosted' },
            { value: '15+', label: 'Years Experience' },
            { value: '99.9%', label: 'Uptime' }
          ]}
          ctaLabel="View Full Project"
          ctaPage="portfolio"
          image={{
            src: 'https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=800&h=600&fit=crop',
            alt: 'Featured project mockup'
          }}
          testimonial={{
            initials: 'JL',
            name: 'James Laughton',
            role: 'Marketing Operations Specialist',
            quote: "I've worked closely with the LightspeedWP team for several years now, and they never disappoint. Professional, skilled and supportive support have all been invaluable!"
          }}
          spacing="xl"
          backgroundColor="var(--background)"
        />

        {/* CTA Section */}
        <CTASection
          title="Ready to get started?"
          description="Book a free consultation with our WordPress experts and discover the perfect solution for your business."
          primaryButtonText="Book Your Free Consultation"
          primaryButtonPage="contact"
          gradient="blue"
        />
      </main>

      <SiteFooter />
      <BackToTopButton />
    </>
  );
}

export default SolutionsTemplate;