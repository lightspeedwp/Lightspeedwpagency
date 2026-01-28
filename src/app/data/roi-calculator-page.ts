/**
 * ROI Calculator Page Data
 * 
 * Mock data for the ROI Calculator page (ROICalculatorTemplate).
 */

export const roiCalculatorHero = {
  title: "Calculate Your ROI",
  subtitle: "See how much a high-performance website could contribute to your bottom line."
};

export const roiCalculatorInputs = {
  traffic: { label: "Monthly Traffic", defaultValue: 5000, min: 1000, max: 100000 },
  conversionRate: { label: "Conversion Rate (%)", defaultValue: 2, min: 0.1, max: 10, step: 0.1 },
  averageOrderValue: { label: "Average Order Value ($)", defaultValue: 50, min: 10, max: 500 }
};

export const roiCalculatorResults = {
  title: "Potential Monthly Revenue",
  description: "Based on your inputs and industry benchmarks for optimized websites."
};

export const roiCalculatorCTA = {
  title: "Unlock Your Potential",
  description: "Let us help you achieve these numbers with a conversion-optimized website.",
  button: { text: "Get a Strategy Audit", page: "contact" }
};
