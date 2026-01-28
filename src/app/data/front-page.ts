/**
 * Front Page Data
 * 
 * Mock data for the homepage (FrontPageTemplate).
 * 
 * Sections:
 * - Hero
 * - Client Logos
 * - Services Overview
 * - Featured Work
 * - Value Proposition (Why Us)
 * - Testimonials
 * - CTA
 */

import { 
  Code, 
  Palette, 
  Search, 
  BarChart, 
  Smartphone, 
  Globe,
  Zap,
  Shield,
  Users,
  CheckCircle
} from 'lucide-react';

export const frontPageHero = {
  title: "We Build Digital Experiences That Matter",
  subtitle: "Award-winning WordPress agency specializing in custom development, design systems, and enterprise solutions.",
  primaryButton: {
    text: "Start Your Project",
    page: "contact"
  },
  secondaryButton: {
    text: "View Our Work",
    page: "portfolio"
  },
  stats: [
    { value: "15+", label: "Years Experience" },
    { value: "500+", label: "Projects Launched" },
    { value: "98%", label: "Client Retention" }
  ]
};

export const frontPageClients = {
  title: "Trusted by Industry Leaders",
  logos: [
    { name: "TechCorp", url: "/images/clients/techcorp.svg" },
    { name: "GlobalFinance", url: "/images/clients/globalfinance.svg" },
    { name: "EcoEnergy", url: "/images/clients/ecoenergy.svg" },
    { name: "HealthPlus", url: "/images/clients/healthplus.svg" },
    { name: "EduLearn", url: "/images/clients/edulearn.svg" }
  ]
};

export const frontPageServices = {
  title: "Our Expertise",
  description: "Comprehensive digital solutions tailored to your business goals.",
  items: [
    {
      icon: Code,
      title: "Custom Development",
      description: "Scalable, high-performance websites and web applications built on modern stacks.",
      link: "development-service"
    },
    {
      icon: Palette,
      title: "UI/UX Design",
      description: "User-centric design that blends aesthetics with functionality and accessibility.",
      link: "design-service"
    },
    {
      icon: Search,
      title: "SEO & Strategy",
      description: "Data-driven strategies to increase visibility and drive organic growth.",
      link: "content-strategy"
    },
    {
      icon: Smartphone,
      title: "Mobile Solutions",
      description: "Responsive and native mobile experiences for a connected world.",
      link: "solutions"
    }
  ]
};

export const frontPageFeaturedWork = {
  title: "Recent Success Stories",
  description: "See how we've helped ambitious brands transform their digital presence.",
  projects: [
    {
      id: "fintech-platform",
      title: "FinTech Evolution",
      category: "Development",
      image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=800&q=80",
      link: "portfolio-single-fintech"
    },
    {
      id: "eco-commerce",
      title: "EcoCommerce",
      category: "E-Commerce",
      image: "https://images.unsplash.com/photo-1472851294608-415171342605?w=800&q=80",
      link: "portfolio-single-eco"
    },
    {
      id: "health-app",
      title: "HealthConnect",
      category: "Product Design",
      image: "https://images.unsplash.com/photo-1576091160399-112ba8d25d1d?w=800&q=80",
      link: "portfolio-single-health"
    }
  ],
  cta: {
    text: "View All Projects",
    page: "portfolio"
  }
};

export const frontPageWhyUs = {
  title: "Why Partner With Us?",
  description: "We bring a unique blend of technical excellence and creative innovation.",
  features: [
    {
      icon: Zap,
      title: "Performance First",
      description: "We prioritize speed and optimization in every line of code we write."
    },
    {
      icon: Shield,
      title: "Security Focused",
      description: "Enterprise-grade security measures to protect your data and reputation."
    },
    {
      icon: Users,
      title: "Collaborative Approach",
      description: "We work as an extension of your team, ensuring total alignment."
    },
    {
      icon: Globe,
      title: "Global Standards",
      description: "Adherence to international web standards and accessibility guidelines (WCAG)."
    }
  ]
};

export const frontPageCTA = {
  title: "Ready to Transform Your Business?",
  description: "Let's discuss your project and how we can help you achieve your digital goals.",
  primaryButton: {
    text: "Schedule a Consultation",
    page: "contact"
  },
  secondaryButton: {
    text: "Explore Services",
    page: "services"
  }
};
