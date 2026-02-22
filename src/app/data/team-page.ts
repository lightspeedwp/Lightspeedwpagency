/**
 * Team Page Data
 * 
 * Content for the Team overview page.
 * Aggregates data from centralized sources.
 */

import { Users } from 'lucide-react';
import { teamFAQs } from './faqs';
import { teamMembers, leadershipTeam } from './team';

export const teamPageHero = {
  title: "Meet the makers",
  subtitle: "A diverse team of WordPress experts, designers, and strategists united by a passion for the open web.",
  badge: { text: "THE TEAM", icon: Users },
  primaryButton: { text: "Join Us", page: "careers" }
};

export const teamPageValues = {
  title: "Our core values",
  values: [
    {
      title: "Open source",
      description: "We believe in the power of community and contributing back to the software that powers the web."
    },
    {
      title: "Craftsmanship",
      description: "We don't cut corners. Every line of code and every pixel is considered."
    },
    {
      title: "Empathy",
      description: "We build for humans. Accessibility and user experience are at the heart of everything we do."
    }
  ]
};

export const teamPageCTA = {
  title: "Want to work with us?",
  description: "We're always looking for talented individuals to join our remote-first team.",
  button: { text: "View Openings", page: "careers" }
};

export const teamPageFAQs = teamFAQs;

// Re-export members for the template to use
export const teamPageMembers = teamMembers;
export const teamPageLeadership = leadershipTeam;
