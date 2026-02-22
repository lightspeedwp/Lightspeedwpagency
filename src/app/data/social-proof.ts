/**
 * Social Proof Data
 * 
 * Aggregated testimonials, stats, and trust indicators.
 * Used on: Home, Landing Pages, Case Studies
 */

import { Users, Star, Award, TrendingUp, ShieldCheck } from 'lucide-react';
import { testimonials } from './testimonials';
import { clientLogos, partnerLogos, certificationLogos } from './logos';

export const socialProofStats = [
  { value: "500+", label: "Projects Launched", icon: Users },
  { value: "98%", label: "Client Retention", icon: TrendingUp },
  { value: "10+", label: "Years Experience", icon: ShieldCheck },
  { value: "4.9/5", label: "Average Rating", icon: Star },
  { value: "20+", label: "Industry Awards", icon: Award }
];

export const trustedByLogos = [
  ...clientLogos.slice(0, 6) // Featured clients
];

export const partnerNetworkLogos = [
  ...partnerLogos
];

export const certifications = [
  ...certificationLogos
];

export const featuredTestimonial = testimonials.find(t => t.featured) || testimonials[0];

export const recentTestimonials = testimonials.slice(0, 3);
