/**
 * Tour Operator Page Data
 * 
 * Content for the Tour Operator solution landing page.
 */

import { 
  Airplane,
  Calendar,
  CreditCard,
  Users,
  Globe,
  MapPin,
  MagnifyingGlass,
  DeviceMobile
} from '@phosphor-icons/react';

export const tourOperatorHero = {
  title: "WordPress Websites for Tour Operators",
  description: "Specialized websites for safari operators, adventure travel companies, and destination management companies. Complete booking systems, itinerary management, and travel industry integrations.",
  badge: {
    text: 'TOUR OPERATOR SOLUTIONS',
    icon: Calendar
  },
  buttons: [
    {
      label: 'Book Your Free Consultation',
      page: 'contact',
      variant: 'primary'
    },
    {
      label: 'View Portfolio',
      page: 'portfolio-archive',
      variant: 'secondary'
    }
  ],
  heroIcon: Airplane
};

export const tourOperatorChallenges = {
  title: "Tour Industry Challenges We Solve",
  description: "Common challenges faced by tour operators and how we address them",
  items: [
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
  ]
};

export const tourOperatorSolutions = {
  title: "Complete Tour Operator Solutions",
  description: "Everything you need to run a successful tour operation online",
  items: [
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
      icon: MagnifyingGlass,
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
      icon: DeviceMobile,
      title: 'Mobile-First Design',
      description: 'Fully responsive design ensures perfect experience on all devices from phones to desktops.',
      features: [
        'Responsive layouts',
        'Fast loading speeds'
      ]
    }
  ]
};

export const tourOperatorIntegrations = {
  title: "Seamless Integrations",
  description: "Connect with the tools you already use",
  items: [
    {
      title: "Wetu Integration",
      description: "Interactive itineraries and beautiful destination content."
    },
    {
      title: "ResRequest",
      description: "Seamless property and accommodation management."
    },
    {
      title: "Stripe & PayPal",
      description: "Secure, global payment processing."
    }
  ]
};

export const tourOperatorBenefits = [
  { value: "40%", label: "Increase in Direct Bookings" },
  { value: "50%", label: "Time Saved on Admin" },
  { value: "100%", label: "Mobile Optimized" }
];

export const tourOperatorFAQs = [
  {
    question: "Do you integrate with Wetu?",
    answer: "Yes, we fully integrate Wetu interactive itineraries to showcase beautiful destination content."
  },
  {
    question: "Can I manage complex pricing?",
    answer: "Absolutely. Our booking systems handle dynamic pricing, seasonal rates, and special group discounts."
  }
];

export const tourOperatorCTA = {
  title: "Ready to Transform Your Tour Business?",
  description: "Join top operators maximizing their online potential.",
  primaryButtonText: "Get Started",
  primaryButtonPage: "contact"
};