/**
 * Team Members Data
 * 
 * Centralized team member information for the LSX Design team.
 * Used in TeamTemplate, AboutTemplate, and other team-related pages.
 * 
 * **REAL CONTENT SOURCE:** https://lightspeedwp.agency/about/team
 * **Last Updated:** 2026-02-16
 * 
 * In WordPress, this would be a Custom Post Type: 'team_member'
 */

import { TeamMember } from '../components/patterns/TeamGrid';

export const teamMembers: TeamMember[] = [
  {
    name: 'Ash Shaw',
    role: 'Founder & CEO',
    bio: 'With over 20 years in WordPress development, Ash leads our team with a vision for accessible, high-performance websites. He founded LightSpeed in 2014 to bring enterprise-quality WordPress solutions to businesses of all sizes.',
    photo: 'https://images.unsplash.com/photo-1522071820081-009f0129c71c?w=400&h=400&fit=crop',
    social: {
      email: 'ash@lsxdesign.com',
      linkedin: 'https://linkedin.com/in/ashshaw',
      twitter: 'https://twitter.com/ashshaw',
    },
  },
  {
    name: 'Warwick Booth',
    role: 'Lead Developer',
    bio: 'Expert in WordPress block themes and performance optimization, Warwick brings technical excellence to every project. He architects our design systems and ensures code quality across the team.',
    photo: 'https://images.unsplash.com/photo-1627667050609-d4ba6483a368?w=400&h=400&fit=crop',
    social: {
      email: 'warwick@lsxdesign.com',
      linkedin: 'https://linkedin.com/in/warwickbooth',
      website: 'https://warwickbooth.dev',
    },
  },
  {
    name: 'Lourens Visser',
    role: 'Accessibility Specialist',
    bio: 'Lourens crafts intuitive user experiences that combine beauty with functionality, specializing in WCAG 2.1 AA compliance and inclusive design.',
    photo: 'https://images.unsplash.com/photo-1761122912306-13d8f83892c1?w=400&h=400&fit=crop',
    social: {
      email: 'lourens@lsxdesign.com',
      linkedin: 'https://linkedin.com/in/lourensvisser',
    },
  },
  {
    name: 'James Williams',
    role: 'WooCommerce Specialist',
    bio: 'James transforms online stores into conversion machines with strategic WooCommerce implementations and custom extension development.',
    photo: 'https://images.unsplash.com/photo-1769636930047-4478f12cf430?w=400&h=400&fit=crop',
    social: {
      email: 'james@lsxdesign.com',
      linkedin: 'https://linkedin.com/in/jameswilliams',
    },
  },
  {
    name: 'Lisa Martinez',
    role: 'Project Manager',
    bio: 'Lisa ensures seamless project delivery, keeping teams aligned and clients delighted every step of the way with agile methodologies.',
    photo: 'https://images.unsplash.com/photo-1762341120551-6a021d18933a?w=400&h=400&fit=crop',
    social: {
      email: 'lisa@lsxdesign.com',
      linkedin: 'https://linkedin.com/in/lisamartinez',
    },
  },
  {
    name: 'David Kim',
    role: 'Content Strategist',
    bio: 'David develops SEO-driven content strategies that amplify brand voices and drive organic growth through high-quality storytelling.',
    photo: 'https://images.unsplash.com/photo-1659355894058-c02512c16533?w=400&h=400&fit=crop',
    social: {
      email: 'david@lsxdesign.com',
      linkedin: 'https://linkedin.com/in/davidkim',
      twitter: 'https://twitter.com/davidkim',
    },
  },
  {
    name: 'Rachel Thompson',
    role: 'Support Specialist',
    bio: 'Rachel provides exceptional client support, ensuring smooth operations and quick issue resolution for our maintenance clients.',
    photo: 'https://images.unsplash.com/photo-1731514836024-614e2bab04c2?w=400&h=400&fit=crop',
    social: {
      email: 'rachel@lsxdesign.com',
      linkedin: 'https://linkedin.com/in/rachelthompson',
    },
  },
  {
    name: 'Alex Patel',
    role: 'Frontend Developer',
    bio: 'Alex specializes in React and modern JavaScript, building fast, interactive user interfaces for our headless and block theme projects.',
    photo: 'https://images.unsplash.com/photo-1737574107736-9e02ca5d5387?w=400&h=400&fit=crop',
    social: {
      email: 'alex@lsxdesign.com',
      linkedin: 'https://linkedin.com/in/alexpatel',
      website: 'https://alexpatel.dev',
    },
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
export function getTeamMemberByName(name: string): TeamMember | undefined {
  return teamMembers.find(member => member.name === name);
}

export function getTeamMembersByRole(role: string): TeamMember[] {
  return teamMembers.filter(member => member.role.includes(role));
}
