/**
 * Tour Operators Solution Page Data
 * 
 * Content for the Tour Operators Solution template.
 */

import { Map, Calendar, Globe, Users, CreditCard, Layout } from 'lucide-react';

export const tourOperatorsSolutionHero = {
  title: "The Ultimate WordPress Solution for Tour Operators",
  subtitle: "Manage itineraries, bookings, and destinations with our specialized LSX Tour Operator plugin ecosystem.",
  badge: { text: "TRAVEL TECH EXPERTS", icon: Map },
  primaryButton: { text: "View Demo", page: "tour-operators" }, // Pointing to archive as demo
  secondaryButton: { text: "Request a Systems Audit", page: "contact" }
};

export const tourOperatorsSolutionFeatures = {
  title: "Features Designed for Travel",
  features: [
    {
      icon: Layout,
      title: "Itinerary Builder",
      description: "Create stunning, detailed daily itineraries with ease using our drag-and-drop builder."
    },
    {
      icon: Globe,
      title: "Destination Management",
      description: "Showcase destinations with rich media, maps, and related tours."
    },
    {
      icon: Calendar,
      title: "Booking & Availability",
      description: "Integrate with popular booking engines or use our native enquiry forms."
    },
    {
      icon: Map,
      title: "Interactive Maps",
      description: "Visualise routes and locations with integrated Google Maps or OpenStreetMap."
    },
    {
      icon: Users,
      title: "Review System",
      description: "Collect and display traveler reviews to build trust and social proof."
    },
    {
      icon: CreditCard,
      title: "Payment Integration",
      description: "Accept payments securely with WooCommerce integration."
    }
  ]
};

export const tourOperatorsSolutionCTA = {
  title: "Ready to Scale Your Travel Business?",
  description: "Join hundreds of tour operators using LSX to power their digital presence.",
  button: { text: "Request a Systems Audit", page: "contact" }
};
