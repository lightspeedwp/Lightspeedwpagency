/**
 * Careers Page Data
 * 
 * Mock data for the Careers page (CareersTemplate).
 * 
 * Sections:
 * - Hero
 * - Benefits
 * - Open Positions
 * - Culture Gallery
 * - CTA
 */

import { 
  Coffee, 
  Laptop, 
  HeartHandshake, 
  TrendingUp,
  MapPin,
  Clock
} from 'lucide-react';

export const careersPageHero = {
  title: "Build the Future With Us",
  subtitle: "Join a team of innovators, creators, and problem solvers working on projects that matter.",
  image: "https://images.unsplash.com/photo-1522202176988-66273c2fd55f?w=1200&q=80"
};

export const careersPageBenefits = {
  title: "Why You'll Love Working Here",
  benefits: [
    {
      icon: Laptop,
      title: "Remote-First",
      description: "Work from anywhere in the world. We focus on output, not hours in a chair."
    },
    {
      icon: TrendingUp,
      title: "Growth Budget",
      description: "Annual stipend for courses, conferences, and books to keep you sharp."
    },
    {
      icon: HeartHandshake,
      title: "Health & Wellness",
      description: "Comprehensive health coverage and wellness programs for you and your family."
    },
    {
      icon: Coffee,
      title: "Flexible Hours",
      description: "Balance your work and life with a schedule that suits your peak productivity."
    }
  ]
};

export const careersPagePositions = {
  title: "Open Roles",
  positions: [
    {
      id: "senior-frontend-dev",
      title: "Senior Frontend Developer",
      department: "Engineering",
      location: "Remote",
      type: "Full-time",
      link: "#"
    },
    {
      id: "product-designer",
      title: "Product Designer",
      department: "Design",
      location: "Remote",
      type: "Full-time",
      link: "#"
    },
    {
      id: "project-manager",
      title: "Digital Project Manager",
      department: "Operations",
      location: "New York, NY (Hybrid)",
      type: "Full-time",
      link: "#"
    }
  ]
};

export const careersPageCulture = {
  title: "Life at Our Agency",
  description: "A glimpse into our daily lives, retreats, and team events.",
  images: [
    { url: "https://images.unsplash.com/photo-1517048676732-d65bc937f952?w=600&q=80", alt: "Team meeting" },
    { url: "https://images.unsplash.com/photo-1531545514256-b1400bc00f31?w=600&q=80", alt: "Collaborative session" },
    { url: "https://images.unsplash.com/photo-1523240795612-9a054b0db644?w=600&q=80", alt: "Team retreat" }
  ]
};

export const careersPageCTA = {
  title: "Don't See the Right Role?",
  description: "We're always looking for talented individuals. Send us your resume and we'll keep you on file.",
  button: {
    text: "Email Us",
    page: "contact"
  }
};
