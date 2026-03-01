/**
 * Services Landing Page Data
 * 
 * Content for the main Services overview page.
 * Aggregates service categories and provides the high-level pitch.
 */

import { Layers, Zap, Code, Shield } from 'lucide-react';

export const servicesLandingHero = {
  title: "Comprehensive WordPress Solutions",
  subtitle: "From custom block themes to complex WooCommerce stores, we build high-performance digital experiences.",
  badge: { text: "OUR EXPERTISE", icon: Layers },
  primaryButton: { text: "Request a Systems Audit", page: "contact" }
};

export const servicesIntro = {
  title: "A Full-Service Agency Approach",
  description: "We don't just write code. We partner with you to understand your business goals, designing scalable systems that grow as you do. Our token-driven development ensures consistency, performance, and accessibility are baked in from day one."
};

export const servicesTechStack = {
  title: "Built on Modern Foundations",
  description: "We use WordPress FSE, theme.json, and Interactivity API for governed sites.",
  items: [
    {
      icon: Code,
      title: "Full Site Editing",
      description: "Native WordPress block themes for maximum control and performance."
    },
    {
      icon: Zap,
      title: "React & TypeScript",
      description: "Modern JavaScript for dynamic, interactive user experiences."
    },
    {
      icon: Shield,
      title: "Enterprise Security",
      description: "Hardened infrastructure and code to protect your business assets."
    }
  ]
};

export const servicesCTA = {
  title: "Find the Right Solution",
  description: "Not sure exactly what you need? Our discovery process helps define the perfect roadmap.",
  button: { text: "Request a Systems Audit", page: "contact" }
};