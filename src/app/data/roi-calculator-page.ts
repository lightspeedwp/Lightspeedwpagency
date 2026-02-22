/**
 * ROI Calculator Page Data
 * 
 * Content and configuration for the ROI Calculator tool.
 */

import { Calculator } from 'lucide-react';

export const roiCalculatorHero = {
  title: "ROI Calculator",
  subtitle: "Estimate the potential return on investment for a custom WordPress or WooCommerce project.",
  badge: { text: "CALCULATE VALUE", icon: Calculator }
};

export const roiCalculatorDefaults = {
  currentMonthlyVisitors: 5000,
  currentConversionRate: 1.5, // percent
  averageOrderValue: 100, // currency
  projectCost: 15000 // currency
};

export const roiCalculatorCTA = {
  title: "Get a Detailed Analysis",
  description: "Want a more specific breakdown tailored to your industry data? Let's chat.",
  button: { text: "Book Strategy Call", page: "contact" }
};
