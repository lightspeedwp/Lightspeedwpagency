/**
 * Pricing Page Data
 * 
 * Mock data for the Pricing page (PricingTemplate).
 * 
 * Sections:
 * - Header
 * - Pricing Plans
 * - Comparison Table (optional placeholder)
 * - FAQs
 * - CTA
 */

export const pricingPageHeader = {
  title: "Transparent Pricing",
  subtitle: "Choose the plan that fits your business needs. No hidden fees."
};

export const pricingPagePlans = [
  {
    name: "Starter",
    price: "$999",
    period: "starting at",
    description: "Perfect for small businesses and startups looking to establish an online presence.",
    features: [
      "Custom Design (5 pages)",
      "Mobile Responsive",
      "Basic SEO Setup",
      "Contact Form Integration",
      "1 Month Support"
    ],
    cta: {
      text: "Get Started",
      page: "contact",
      variant: "outline"
    }
  },
  {
    name: "Professional",
    price: "$2,499",
    period: "starting at",
    description: "Comprehensive solution for growing businesses requiring more functionality.",
    popular: true,
    features: [
      "Custom Design (10+ pages)",
      "CMS Integration",
      "Advanced SEO Optimization",
      "Social Media Integration",
      "Performance Optimization",
      "3 Months Support"
    ],
    cta: {
      text: "Get Started",
      page: "contact",
      variant: "default"
    }
  },
  {
    name: "Enterprise",
    price: "Custom",
    period: "quote based",
    description: "Tailored solutions for large organizations with complex requirements.",
    features: [
      "Full-Scale Web Application",
      "E-commerce Functionality",
      "Custom API Integrations",
      "Security Hardening",
      "Dedicated Project Manager",
      "12 Months Priority Support"
    ],
    cta: {
      text: "Contact Sales",
      page: "contact",
      variant: "outline"
    }
  }
];

export const pricingPageFAQs = [
  {
    question: "Do you offer payment plans?",
    answer: "Yes, we typically require a deposit to start, with the remainder due upon milestone completions. We can discuss flexible schedules for larger projects."
  },
  {
    question: "Are there any ongoing costs?",
    answer: "Beyond the initial development cost, you will need to pay for hosting and domain renewal. We also offer optional maintenance packages."
  },
  {
    question: "Can I upgrade my plan later?",
    answer: "Absolutely. Our solutions are scalable. We can add new features and pages as your business grows."
  },
  {
    question: "What if I need something not listed?",
    answer: "We specialize in custom development. Contact us with your specific requirements, and we'll create a tailored proposal."
  }
];

export const pricingPageCTA = {
  title: "Not Sure Which Plan is Right?",
  description: "Schedule a free consultation to discuss your specific needs.",
  button: {
    text: "Book Consultation",
    page: "contact"
  }
};
