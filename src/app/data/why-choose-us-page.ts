/**
 * Why Choose Us Page Data
 * 
 * Content for the 'Why Choose LightSpeed' page.
 * Uses comparisons and advantage data.
 */

import { Award, CheckCircle, TrendingUp } from 'lucide-react';

export const whyChooseUsHero = {
  title: "Why LightSpeed?",
  subtitle: "We're not just another agency. We're your long-term technical partner in the WordPress ecosystem.",
  badge: { text: "THE DIFFERENCE", icon: Award },
  primaryButton: { text: "See Our Work", page: "portfolio-archive" }
};

export const whyChooseUsIntro = {
  title: "Decades of Experience",
  description: "With over 20 years in the industry, we've seen the web evolve. We combine deep historical knowledge with cutting-edge block theme expertise to build sites that last."
};

export const whyChooseUsStats = [
  { value: "20+", label: "Years in Business" },
  { value: "500+", label: "Projects Launched" },
  { value: "100%", label: "In-House Team" }
];

export const whyChooseUsCTA = {
  title: "Experience the Difference",
  description: "Stop wrestling with bloated themes and unreliable freelancers. Switch to a professional agency workflow.",
  button: { text: "Request a Systems Audit", page: "contact" }
};
