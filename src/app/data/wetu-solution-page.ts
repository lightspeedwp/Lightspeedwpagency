/**
 * Wetu Solution Page Data
 * 
 * Mock data for the Wetu Importer page (WetuImporterTemplate).
 */

import { Globe, ArrowsClockwise, Image, MapTrifold } from '@phosphor-icons/react';

export const wetuSolutionHero = {
  title: "Wetu Importer for WordPress",
  subtitle: "Display your Wetu itineraries directly on your WordPress website with ease.",
  badge: { text: "TRAVEL TECH", icon: Globe },
  primaryButton: { text: "Request a Systems Audit", page: "contact" }
};

export const wetuSolutionFeatures = {
  title: "Seamless Content Sync",
  features: [
    {
      icon: ArrowsClockwise,
      title: "Auto-Sync",
      description: "Keep your website itineraries updated automatically when you make changes in Wetu."
    },
    {
      icon: Image,
      title: "Rich Media",
      description: "Import high-resolution images and virtual tours directly into your media library."
    },
    {
      icon: MapTrifold,
      title: "Interactive Maps",
      description: "Embed Wetu's interactive maps to showcase destinations and routes."
    }
  ]
};

export const wetuSolutionCTA = {
  title: "Simplify Your Tour Management",
  description: "Save hours of manual data entry. Let the importer do the work.",
  button: { text: "Request a Systems Audit", page: "contact" }
};