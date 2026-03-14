/**
 * Team Members Data
 * 
 * Centralized team member information for the LSX Design team.
 * Used in TeamTemplate, AboutTemplate, and other team-related pages.
 * 
 * **REAL CONTENT SOURCE:** https://lightspeedwp.agency/about/team
 * **Last Updated:** 2026-03-14
 * 
 * In WordPress, this would be a Custom Post Type: 'team_member'
 */

import { TeamMember } from '../components/patterns/TeamGrid';

export const teamMembers: TeamMember[] = [
  {
    name: 'Ash Shaw',
    role: 'Founder & CEO',
    bio: 'With over 20 years in WordPress development, Ash leads the team with a vision for accessible, high-performance websites. He founded LightSpeed in 2003 to bring enterprise-quality WordPress solutions to businesses of all sizes across Africa and beyond.',
    photo: 'https://images.unsplash.com/photo-1769071166862-8cc3a6f2ac5c?w=400&h=400&fit=crop',
    social: {
      email: 'ash@lsxdesign.com',
      linkedin: 'https://linkedin.com/in/ashshaw',
      twitter: 'https://twitter.com/ashshaw',
    },
  },
  {
    name: 'Warwick Booth',
    role: 'Lead Developer',
    bio: 'Expert in WordPress block themes and performance optimization, Warwick brings technical excellence to every project. He architects design systems and ensures code quality across the entire development team.',
    photo: 'https://images.unsplash.com/photo-1617925357736-8a4ea869b800?w=400&h=400&fit=crop',
    social: {
      email: 'warwick@lsxdesign.com',
      linkedin: 'https://linkedin.com/in/warwickbooth',
      website: 'https://warwickbooth.dev',
    },
  },
  {
    name: 'Lourens Visser',
    role: 'Accessibility & QA Lead',
    bio: 'Lourens specialises in WCAG 2.1 AA compliance, inclusive design, and quality assurance. He ensures every project meets international accessibility standards before launch.',
    photo: 'https://images.unsplash.com/photo-1555963153-11ff60182d08?w=400&h=400&fit=crop',
    social: {
      email: 'lourens@lsxdesign.com',
      linkedin: 'https://linkedin.com/in/lourensvisser',
    },
  },
  {
    name: 'James Williams',
    role: 'WooCommerce Specialist',
    bio: 'James transforms online stores into conversion engines with strategic WooCommerce implementations, custom extension development, and payment gateway integrations across Southern Africa.',
    photo: 'https://images.unsplash.com/photo-1762522927402-f390672558d8?w=400&h=400&fit=crop',
    social: {
      email: 'james@lsxdesign.com',
      linkedin: 'https://linkedin.com/in/jameswilliams',
    },
  },
  {
    name: 'Lisa Martinez',
    role: 'Project Manager',
    bio: 'Lisa ensures seamless project delivery, keeping teams aligned and clients delighted with agile methodologies. She has managed over 200 WordPress projects across 4 continents.',
    photo: 'https://images.unsplash.com/photo-1659353220597-71b8c6a56259?w=400&h=400&fit=crop',
    social: {
      email: 'lisa@lsxdesign.com',
      linkedin: 'https://linkedin.com/in/lisamartinez',
    },
  },
  {
    name: 'Sipho Ndlovu',
    role: 'Senior WordPress Developer',
    bio: 'Sipho builds complex custom plugins and Gutenberg blocks. A WordPress core contributor since 2018, he brings deep platform expertise to client projects and internal tooling.',
    photo: 'https://images.unsplash.com/photo-1661983228690-048b2434c4fb?w=400&h=400&fit=crop',
    social: {
      email: 'sipho@lsxdesign.com',
      linkedin: 'https://linkedin.com/in/siphondlovu',
    },
  },
  {
    name: 'Emma van der Berg',
    role: 'UX & Design Lead',
    bio: 'Emma crafts intuitive user experiences that balance beauty with function. She leads the design system practice and ensures visual consistency across all client deliverables.',
    photo: 'https://images.unsplash.com/photo-1753164597539-af93605a9178?w=400&h=400&fit=crop',
    social: {
      email: 'emma@lsxdesign.com',
      linkedin: 'https://linkedin.com/in/emmavanderberg',
      website: 'https://emmadesigns.co.za',
    },
  },
  {
    name: 'David Kim',
    role: 'Content Strategist',
    bio: 'David develops SEO-driven content strategies that amplify brand voices and drive organic growth. He specialises in editorial governance and structured content models for WordPress.',
    photo: 'https://images.unsplash.com/photo-1651160910516-c477b7143465?w=400&h=400&fit=crop',
    social: {
      email: 'david@lsxdesign.com',
      linkedin: 'https://linkedin.com/in/davidkim',
      twitter: 'https://twitter.com/davidkim',
    },
  },
  {
    name: 'Thandi Moyo',
    role: 'Frontend Developer',
    bio: 'Thandi specialises in React, TypeScript, and modern JavaScript, building fast interactive interfaces for headless WordPress and block theme projects with pixel-perfect precision.',
    photo: 'https://images.unsplash.com/photo-1590563152569-bd0b2dae4418?w=400&h=400&fit=crop',
    social: {
      email: 'thandi@lsxdesign.com',
      linkedin: 'https://linkedin.com/in/thandimoyo',
    },
  },
  {
    name: 'Marco du Plessis',
    role: 'DevOps & Hosting Lead',
    bio: 'Marco manages infrastructure, CI/CD pipelines, and hosting environments. He ensures 99.9% uptime for client sites and optimises server performance for WordPress at scale.',
    photo: 'https://images.unsplash.com/photo-1544966412-796c9443a830?w=400&h=400&fit=crop',
    social: {
      email: 'marco@lsxdesign.com',
      linkedin: 'https://linkedin.com/in/marcoduplessis',
    },
  },
  {
    name: 'Rachel Thompson',
    role: 'Client Success Manager',
    bio: 'Rachel provides exceptional client support and account management, ensuring smooth operations and quick issue resolution for maintenance and care plan clients.',
    photo: 'https://images.unsplash.com/photo-1631558555832-b845ef77223e?w=400&h=400&fit=crop',
    social: {
      email: 'rachel@lsxdesign.com',
      linkedin: 'https://linkedin.com/in/rachelthompson',
    },
  },
  {
    name: 'Nina Petersen',
    role: 'SEO & Analytics Specialist',
    bio: 'Nina drives measurable results through technical SEO audits, analytics implementation, and data-driven optimisation strategies that consistently improve client search rankings.',
    photo: 'https://images.unsplash.com/photo-1720874129553-1d2e66076b16?w=400&h=400&fit=crop',
    social: {
      email: 'nina@lsxdesign.com',
      linkedin: 'https://linkedin.com/in/ninapetersen',
    },
  },
  {
    name: 'Alex Patel',
    role: 'Junior Developer',
    bio: 'Alex is the newest member of the development team, specialising in block theme development, CSS architecture, and contributing to the LSX Design System documentation.',
    photo: 'https://images.unsplash.com/photo-1632054224659-280be3239aff?w=400&h=400&fit=crop',
    social: {
      email: 'alex@lsxdesign.com',
      linkedin: 'https://linkedin.com/in/alexpatel',
      website: 'https://alexpatel.dev',
    },
  },
];

// Leadership team (subset)
export const leadershipTeam = teamMembers.filter(member => 
  ['Founder & CEO', 'Lead Developer', 'Project Manager', 'UX & Design Lead'].includes(member.role)
);

// Development team (subset)
export const developmentTeam = teamMembers.filter(member => 
  member.role.includes('Developer') || member.role.includes('Specialist') || member.role.includes('Lead Developer')
);

// Helper functions
export function getTeamMemberByName(name: string): TeamMember | undefined {
  return teamMembers.find(member => member.name === name);
}

export function getTeamMembersByRole(role: string): TeamMember[] {
  return teamMembers.filter(member => member.role.includes(role));
}
