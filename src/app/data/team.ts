/**
 * Team Members Data
 * 
 * Centralized team member information for the LSX Design team.
 * Used in TeamTemplate, AboutTemplate, and other team-related pages.
 * 
 * In WordPress, this would be a Custom Post Type: 'team_member'
 */

import { TeamMember } from '../components/patterns/TeamGrid';

export const teamMembers: TeamMember[] = [
  {
    id: 'sarah-johnson',
    name: 'Sarah Johnson',
    role: 'Founder & CEO',
    bio: 'With 15+ years in WordPress development, Sarah leads our team with a vision for accessible, high-performance websites.',
    email: 'sarah@lsxdesign.com',
    linkedin: 'https://linkedin.com/in/sarahjohnson',
    twitter: 'https://twitter.com/sarahjohnson',
  },
  {
    id: 'michael-chen',
    name: 'Michael Chen',
    role: 'Lead Developer',
    bio: 'Expert in WordPress block themes and performance optimization, Michael brings technical excellence to every project.',
    email: 'michael@lsxdesign.com',
    linkedin: 'https://linkedin.com/in/michaelchen',
    website: 'https://michaelchen.dev',
  },
  {
    id: 'emily-rodriguez',
    name: 'Emily Rodriguez',
    role: 'UX Designer',
    bio: 'Emily crafts intuitive user experiences that combine beauty with functionality, specializing in accessibility.',
    email: 'emily@lsxdesign.com',
    linkedin: 'https://linkedin.com/in/emilyrodriguez',
  },
  {
    id: 'james-williams',
    name: 'James Williams',
    role: 'WooCommerce Specialist',
    bio: 'James transforms online stores into conversion machines with strategic WooCommerce implementations.',
    email: 'james@lsxdesign.com',
    linkedin: 'https://linkedin.com/in/jameswilliams',
  },
  {
    id: 'lisa-martinez',
    name: 'Lisa Martinez',
    role: 'Project Manager',
    bio: 'Lisa ensures seamless project delivery, keeping teams aligned and clients delighted every step of the way.',
    email: 'lisa@lsxdesign.com',
    linkedin: 'https://linkedin.com/in/lisamartinez',
  },
  {
    id: 'david-kim',
    name: 'David Kim',
    role: 'Content Strategist',
    bio: 'David develops SEO-driven content strategies that amplify brand voices and drive organic growth.',
    email: 'david@lsxdesign.com',
    linkedin: 'https://linkedin.com/in/davidkim',
    twitter: 'https://twitter.com/davidkim',
  },
  {
    id: 'rachel-thompson',
    name: 'Rachel Thompson',
    role: 'Support Specialist',
    bio: 'Rachel provides exceptional client support, ensuring smooth operations and quick issue resolution.',
    email: 'rachel@lsxdesign.com',
    linkedin: 'https://linkedin.com/in/rachelthompson',
  },
  {
    id: 'alex-patel',
    name: 'Alex Patel',
    role: 'Frontend Developer',
    bio: 'Alex specializes in React and modern JavaScript, building fast, interactive user interfaces.',
    email: 'alex@lsxdesign.com',
    linkedin: 'https://linkedin.com/in/alexpatel',
    website: 'https://alexpatel.dev',
  },
];

// Leadership team (subset)
export const leadershipTeam = teamMembers.filter(member => 
  ['Founder & CEO', 'Lead Developer', 'Project Manager'].includes(member.role)
);

// Development team (subset)
export const developmentTeam = teamMembers.filter(member => 
  member.role.includes('Developer') || member.role.includes('Specialist')
);

// Helper functions
export function getTeamMemberById(id: string): TeamMember | undefined {
  return teamMembers.find(member => member.id === id);
}

export function getTeamMembersByRole(role: string): TeamMember[] {
  return teamMembers.filter(member => member.role.includes(role));
}
