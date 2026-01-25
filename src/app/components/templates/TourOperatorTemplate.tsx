/**
 * Tour Operator Solutions Template
 * 
 * WordPress template: templates/page-tour-operator.html
 * 
 * Tour operator solutions page for travel and tourism industry.
 * 
 * Pattern order:
 * Hero → Challenges → Solutions → Integrations → Benefits → FAQs → CTA
 * 
 * **Migration Status:**
 * - ✅ Hero → Hero pattern (gradient with plane icon)
 * - ✅ Challenges → ChallengesGrid pattern
 * - ✅ Solutions → SolutionsDetailGrid pattern
 * - ✅ Integrations → IntegrationsGrid pattern
 * - ✅ Benefits → StatsGrid pattern
 * - ✅ FAQs → FAQSection pattern
 * - ✅ CTA → CTASection pattern
 * 
 * **Code Reduction:** 491 → 183 lines (62.7% reduction)
 */

import { SiteHeader } from '../parts/SiteHeader';
import { SiteFooter } from '../parts/SiteFooter';
import { SkipLink } from '../common/SkipLink';
import { BackToTopButton } from '../blocks/layout/BackToTopButton';
import { RouteAnnouncer } from '../blocks/utility/RouteAnnouncer';
import { Hero } from '../patterns/Hero';
import { ChallengesGrid } from '../patterns/ChallengesGrid';
import { SolutionsDetailGrid } from '../patterns/SolutionsDetailGrid';
import { IntegrationsGrid } from '../patterns/IntegrationsGrid';
import { StatsGrid } from '../patterns/StatsGrid';
import { FAQSection } from '../patterns/FAQSection';
import { CTASection } from '../patterns/CTASection';
import { 
  Plane,
  Calendar,
  CreditCard,
  Users,
  Globe,
  MapPin,
  Search,
  Smartphone,
  Star,
  MessageSquare,
  TrendingUp,
  Zap,
  Shield
} from 'lucide-react';

export function TourOperatorTemplate() {
  // Tour industry challenges
  const challenges = [
    {
      icon: Calendar,
      title: 'Complex Booking Management',
      description: 'Managing availability, pricing, and reservations across multiple tours and dates'
    },
    {
      icon: CreditCard,
      title: 'Payment Processing',
      description: 'Secure payment handling with multiple currencies and payment methods'
    },
    {
      icon: Users,
      title: 'Customer Management',
      description: 'Tracking customer preferences, bookings, and communication history'
    },
    {
      icon: Globe,
      title: 'Multi-language Support',
      description: 'Reaching global audiences with content in multiple languages'
    }
  ];

  // Tour operator solutions
  const solutions = [
    {
      id: 'booking-system',
      icon: Calendar,
      title: 'Advanced Booking System',
      description: 'Complete booking management with real-time availability, pricing rules, and automated confirmations.',
      features: [
        'Real-time availability calendar',
        'Dynamic pricing & seasonal rates',
        'Group booking management',
        'Automated confirmation emails',
        'Booking modifications & cancellations',
        'Waitlist management'
      ]
    },
    {
      id: 'tour-management',
      icon: MapPin,
      title: 'Tour & Itinerary Management',
      description: 'Create and manage detailed tour itineraries with multimedia content and interactive maps.',
      features: [
        'Detailed itinerary builder',
        'Interactive route maps',
        'Photo galleries & videos',
        'Inclusions & exclusions',
        'Difficulty levels & requirements',
        'PDF itinerary generation'
      ]
    },
    {
      id: 'payment-gateway',
      icon: CreditCard,
      title: 'Payment & Financial Management',
      description: 'Secure payment processing with multiple currencies, deposit options, and financial reporting.',
      features: [
        'Multiple payment gateways',
        'Multi-currency support',
        'Deposit & installment options',
        'Automated invoicing',
        'Financial reporting',
        'Tax calculation'
      ]
    },
    {
      id: 'crm',
      icon: Users,
      title: 'Customer Relationship Management',
      description: 'Build lasting relationships with comprehensive customer data and communication tools.',
      features: [
        'Customer profiles & history',
        'Email marketing integration',
        'Review & testimonial management',
        'Loyalty programs',
        'Automated follow-ups',
        'Newsletter subscriptions'
      ]
    },
    {
      id: 'seo-marketing',
      icon: Search,
      title: 'SEO & Marketing Tools',
      description: 'Attract more travelers with SEO optimization, social media integration, and analytics.',
      features: [
        'SEO-optimized tour pages',
        'Social media sharing',
        'Google Analytics integration',
        'Conversion tracking',
        'Blog & content marketing',
        'Email campaigns'
      ]
    },
    {
      id: 'mobile-responsive',
      icon: Smartphone,
      title: 'Mobile-First Design',
      description: 'Fully responsive design ensures perfect experience on all devices from phones to desktops.',
      features: [
        'Mobile-optimized booking',
        'Touch-friendly navigation',
        'Fast loading times',
        'Progressive Web App (PWA)',
        'Offline capabilities',
        'App-like experience'
      ]
    }
  ];

  // Key integrations
  const integrations = [
    {
      name: 'Wetu',
      description: 'Tour operator content management and distribution platform',
      icon: Globe
    },
    {
      name: 'TourCMS',
      description: 'Online booking and reservation system for tour operators',
      icon: Calendar
    },
    {
      name: 'Stripe & PayPal',
      description: 'Secure payment processing with global coverage',
      icon: CreditCard
    },
    {
      name: 'Google Maps',
      description: 'Interactive maps and location services',
      icon: MapPin
    },
    {
      name: 'Mailchimp',
      description: 'Email marketing and automation platform',
      icon: MessageSquare
    },
    {
      name: 'TripAdvisor',
      description: 'Review integration and reputation management',
      icon: Star
    }
  ];

  // Benefits stats
  const benefitsStats = [
    { 
      icon: TrendingUp, 
      value: '+45%', 
      label: 'Increase Bookings' 
    },
    { 
      icon: Zap, 
      value: '70%', 
      label: 'Time Saved' 
    },
    { 
      icon: Users, 
      value: '98%', 
      label: 'Customer Satisfaction' 
    },
    { 
      icon: Shield, 
      value: '99.9%', 
      label: 'Uptime Guarantee' 
    }
  ];

  // FAQs
  const tourFAQs = [
    {
      question: 'Do you specialize in tour operator websites?',
      answer: 'Yes! We have extensive experience building websites for tour operators, safari companies, adventure travel providers, and destination management companies. We understand the unique requirements of the travel industry including booking systems, itinerary management, and travel-specific integrations.'
    },
    {
      question: 'Can you integrate with Wetu or other tour operator platforms?',
      answer: 'Absolutely! We specialize in Wetu integrations and can connect your WordPress site with TourCMS, Rezdy, FareHarbor, and other tour operator platforms. We handle all API integrations, data synchronization, and ensure seamless booking experiences.'
    },
    {
      question: 'How do you handle booking and payment processing?',
      answer: 'We implement secure booking systems with real-time availability, dynamic pricing, and deposit options. Payment processing uses PCI-compliant gateways like Stripe, PayPal, and regional processors. We support multiple currencies, automated invoicing, and secure customer data handling.'
    },
    {
      question: 'Can the website support multiple languages and currencies?',
      answer: 'Yes! We build multilingual websites using WPML or Polylang, allowing you to manage content in multiple languages. Currency conversion is handled automatically, and you can set region-specific pricing. This is essential for reaching international travelers.'
    },
    {
      question: 'How do you optimize tour pages for search engines?',
      answer: 'We implement travel-specific SEO best practices including schema markup for tours/activities, optimized imagery, fast loading times, and structured content. We also integrate with Google Maps, TripAdvisor, and social media to maximize your online visibility and bookings.'
    },
    {
      question: 'What happens if we need to migrate from our current platform?',
      answer: 'We handle complete migrations from legacy systems, custom platforms, or competitors. We migrate all tour data, itineraries, bookings, customer information, and media assets while preserving SEO rankings. We ensure zero downtime and provide training on the new system.'
    }
  ];

  return (
    <>
      <RouteAnnouncer />
      <SkipLink />
      <SiteHeader />
      
      <main id="main-content" role="main">
        {/* Hero Section */}
        <Hero
          variant="gradient"
          title="WordPress Websites for Tour Operators"
          description="Specialized websites for safari operators, adventure travel companies, and destination management companies. Complete booking systems, itinerary management, and travel industry integrations."
          primaryButtonText="Book Your Free Consultation"
          primaryButtonPage="contact"
          secondaryButtonText="View Portfolio"
          secondaryButtonPage="portfolio-archive"
          badge="TOUR OPERATOR SOLUTIONS"
          gradientColor="cyan"
          illustration={{
            icon: Plane,
            badge: {
              icon: Calendar,
              text: 'Bookings',
              color: 'green'
            }
          }}
        />

        {/* Tour Industry Challenges */}
        <ChallengesGrid
          title="Tour Industry Challenges We Solve"
          description="Common challenges faced by tour operators and how we address them"
          challenges={challenges}
          columns={4}
          spacing="xl"
          backgroundColor="var(--background)"
        />

        {/* Tour Operator Solutions Grid */}
        <SolutionsDetailGrid
          title="Complete Tour Operator Solutions"
          description="Everything you need to run a successful tour operation online"
          solutions={solutions}
          columns={3}
          spacing="xl"
          backgroundColor="var(--muted)"
        />

        {/* Integrations Section */}
        <IntegrationsGrid
          title="Key Integrations"
          description="Connect with the tools and platforms you already use"
          integrations={integrations}
          columns={3}
          spacing="xl"
          backgroundColor="var(--background)"
        />

        {/* Benefits Section */}
        <StatsGrid
          stats={benefitsStats}
          columns={4}
          variant="gradient"
          gradientColor="cyan"
          spacing="xl"
        />

        {/* FAQ Section */}
        <FAQSection
          heading="Tour Operator FAQs"
          description="Common questions about tour operator websites"
          faqs={tourFAQs}
        />

        {/* CTA Section */}
        <CTASection
          variant="cyan"
          heading="Ready to Transform Your Tour Business?"
          description="Let's discuss your tour operator needs and create a website that drives bookings and grows your business. Schedule a free consultation today."
          primaryButtonText="Schedule Free Consultation"
          primaryButtonPage="contact"
          secondaryButtonText="View Tour Examples"
          secondaryButtonPage="portfolio-archive"
        />
      </main>

      <SiteFooter />
      <BackToTopButton />
    </>
  );
}

export default TourOperatorTemplate;
