/**
 * Wetu Solution Page Data
 * 
 * Mock data for the Wetu Importer page (WetuImporterTemplate).
 */

import { Globe, RefreshCw, Image, Map } from 'lucide-react';

export const wetuSolutionHero = {
  title: "Wetu Importer for WordPress",
  subtitle: "Display your Wetu itineraries directly on your WordPress website with ease.",
  badge: { text: "TRAVEL TECH", icon: Globe },
  primaryButton: { text: "Get the Plugin", page: "contact" }
};

export const wetuSolutionFeatures = {
  title: "Seamless Content Sync",
  features: [
    {
      icon: RefreshCw,
      title: "Auto-Sync",
      description: "Keep your website itineraries updated automatically when you make changes in Wetu."
    },
    {
      icon: Image,
      title: "Rich Media",
      description: "Import high-resolution images and virtual tours directly into your media library."
    },
    {
      icon: Map,
      title: "Interactive Maps",
      description: "Embed Wetu's interactive maps to showcase destinations and routes."
    }
  ]
};

export const wetuSolutionCTA = {
  title: "Simplify Your Tour Management",
  description: "Save hours of manual data entry. Let the importer do the work.",
  button: { text: "Learn More", page: "contact" }
};
