/**
 * Guarantees Page Data
 * 
 * Mock data for the Guarantees page (GuaranteesTemplate).
 */

import { Shield, Clock, ThumbsUp, RefreshCw } from 'lucide-react';

export const guaranteesHero = {
  title: "Our Ironclad Guarantees",
  subtitle: "We stand behind our work with commitments that give you peace of mind."
};

export const guaranteesList = [
  {
    icon: ThumbsUp,
    title: "100% Satisfaction Guarantee",
    description: "We won't stop working until you are completely satisfied with the design and functionality of your website."
  },
  {
    icon: Clock,
    title: "On-Time Delivery Guarantee",
    description: "If we miss a mutually agreed-upon launch deadline due to our fault, we'll discount your final invoice."
  },
  {
    icon: Shield,
    title: "Bug-Free Warranty",
    description: "We provide a 30-day warranty period after launch where we fix any bugs or issues free of charge."
  },
  {
    icon: RefreshCw,
    title: "Uptime Guarantee",
    description: "For our hosting clients, we guarantee 99.9% uptime or we'll credit your account."
  }
];

export const guaranteesCTA = {
  title: "Work With Confidence",
  description: "Partner with an agency that puts its money where its mouth is.",
  button: { text: "Start Your Project", page: "contact" }
};
