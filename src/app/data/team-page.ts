/**
 * Team Page Data
 * 
 * Real content for the Team page from LightSpeed WP Agency.
 * Real content extracted from https://lightspeedwp.agency/team
 * 
 * **REAL CONTENT SOURCE:** https://lightspeedwp.agency/team
 * **Last Updated:** 2025-01-09
 * 
 * WordPress: Maps to page-team.html template
 */

import { 
  Globe, 
  Users, 
  Heart, 
  Zap,
  Award,
  Code,
  Mail,
  Briefcase
} from 'lucide-react';
import type { LucideIcon } from 'lucide-react';
import { teamMembers } from './company';

/**
 * Team Hero Content
 */
export const teamPageHero = {
  badge: {
    icon: 'Users',
    text: 'Meet Our Team'
  },
  title: 'The People Behind LightSpeed',
  titleHighlight: 'People', // Word to highlight
  description: 'We\'re a passionate team of WordPress experts based in Cape Town, South Africa. With over 22 years of combined experience, we\'re dedicated to delivering exceptional websites and building long-term partnerships with our clients.',
  stats: [
    {
      icon: 'Users',
      value: '11',
      label: 'Team Members'
    },
    {
      icon: 'Globe',
      value: 'Cape Town',
      label: 'South Africa'
    },
    {
      icon: 'Award',
      value: '22+',
      label: 'Years Experience'
    }
  ]
};

/**
 * Team Members (from company.ts)
 * 
 * Real LightSpeed team - 11 members
 */
export const teamPageMembers = teamMembers;

/**
 * Featured Team Members
 * 
 * Leadership and key team members (5 featured)
 */
export const featuredTeamMembers = teamMembers.filter(member => member.featured);

/**
 * All Team Members
 * 
 * Complete team roster (11 total)
 */
export const allTeamMembers = teamMembers;

/**
 * Team by Role/Department
 */
export const teamByDepartment = {
  leadership: teamMembers.filter(m => 
    ['Chief Executive Officer', 'Chief Financial Officer'].includes(m.role)
  ),
  development: teamMembers.filter(m => 
    m.role.includes('Developer') || m.role.includes('Engineer')
  ),
  design: teamMembers.filter(m => 
    m.role.includes('Designer')
  ),
  support: teamMembers.filter(m => 
    m.role.includes('Support') || m.role.includes('Manager')
  )
};

/**
 * Team Culture & Values
 */
export interface CultureValue {
  icon: LucideIcon;
  title: string;
  description: string;
}

export const teamPageCulture: CultureValue[] = [
  {
    icon: Globe,
    title: 'Cape Town Based',
    description: 'Our team works from our Cape Town office, bringing local expertise with global standards. We serve clients worldwide from South Africa.'
  },
  {
    icon: Users,
    title: 'Collaborative',
    description: 'We believe in teamwork, code reviews, and knowledge sharing. Every project benefits from our collective expertise and experience.'
  },
  {
    icon: Heart,
    title: 'Client-Focused',
    description: 'We build long-term partnerships with our clients. Your success is our success, and we\'re committed to delivering excellence on every project.'
  },
  {
    icon: Zap,
    title: 'Continuous Learning',
    description: 'We stay ahead of WordPress trends, attending WordCamps, contributing to open source, and continuously improving our skills.'
  }
];

/**
 * Team Stats
 */
export interface TeamStat {
  icon: LucideIcon;
  value: string;
  label: string;
  description: string;
}

export const teamPageStats: TeamStat[] = [
  {
    icon: Users,
    value: '11',
    label: 'Team Members',
    description: 'Expert WordPress developers, designers, and specialists'
  },
  {
    icon: Award,
    value: '22+',
    label: 'Years Combined',
    description: 'Decades of WordPress and web development experience'
  },
  {
    icon: Code,
    value: '120+',
    label: 'Websites Hosted',
    description: 'Managing and maintaining client websites daily'
  },
  {
    icon: Globe,
    value: '100%',
    label: 'Cape Town Based',
    description: 'All team members work from our South Africa office'
  }
];

/**
 * Team Departments/Expertise
 */
export interface Department {
  title: string;
  description: string;
  icon: LucideIcon;
  memberCount: number;
}

export const teamPageDepartments: Department[] = [
  {
    title: 'Leadership',
    description: 'Our leadership team guides strategic direction, client relationships, and company growth with 22+ years of industry experience.',
    icon: Briefcase,
    memberCount: 2
  },
  {
    title: 'Development',
    description: 'Expert WordPress developers building custom themes, plugins, and WooCommerce solutions with clean, scalable code.',
    icon: Code,
    memberCount: 6
  },
  {
    title: 'Design',
    description: 'Creative designers crafting beautiful, user-friendly interfaces and bringing client brands to life through thoughtful design.',
    icon: Heart,
    memberCount: 2
  },
  {
    title: 'Support & Operations',
    description: 'Dedicated support team managing 120+ websites, handling client requests, and ensuring smooth operations.',
    icon: Users,
    memberCount: 2
  }
];

/**
 * Why Join Our Team
 */
export interface WhyJoinReason {
  title: string;
  description: string;
  icon: LucideIcon;
}

export const teamPageWhyJoin: WhyJoinReason[] = [
  {
    title: 'Work on Exciting Projects',
    description: 'Collaborate on diverse WordPress projects from tour operators to WooCommerce stores, working with clients globally.',
    icon: Globe
  },
  {
    title: 'Expert Team Members',
    description: 'Learn from experienced developers and designers who are passionate about WordPress and committed to excellence.',
    icon: Users
  },
  {
    title: 'Modern Tech Stack',
    description: 'Work with the latest WordPress technologies including Full Site Editing, block themes, and modern development workflows.',
    icon: Code
  },
  {
    title: 'Cape Town Location',
    description: 'Based in beautiful Cape Town, South Africa with a collaborative office environment and supportive team culture.',
    icon: Heart
  }
];

/**
 * Team Page FAQs
 * 
 * Real FAQs about the LightSpeed team
 */
export interface FAQ {
  question: string;
  answer: string;
}

export const teamPageFAQs: FAQ[] = [
  {
    question: 'How many people work at LightSpeed?',
    answer: 'We have 11 team members at LightSpeed, including leadership, developers, designers, and support staff. Our team includes Ash Shaw (CEO), Barbara Kerr (CFO), Warwick Booth (Lead Developer), Chris Vancoillie (Systems Engineer), Lourens Visser (Support Manager), and six other talented developers and designers.'
  },
  {
    question: 'Where is the LightSpeed team located?',
    answer: 'Our entire team is based in Cape Town, South Africa. We work from our office at 46 Devon Street, Woodstock, Cape Town. While we serve clients globally, all our team members work from our Cape Town location, ensuring close collaboration and consistent quality.'
  },
  {
    question: 'What expertise does your team have?',
    answer: 'Our team has extensive WordPress expertise spanning 22+ years combined. We specialize in WordPress development, WooCommerce, theme development, plugin development, design systems, email marketing (Mailchimp Expert), and managed hosting. Our team manages 120+ websites and has worked with clients across tourism, eCommerce, and various industries.'
  },
  {
    question: 'Who founded LightSpeed and when?',
    answer: 'LightSpeed was founded in 2003 by Ashley Shaw (Ash Shaw), our current CEO. Ash has been passionate about WordPress, web design, and building awesome user experiences since the beginning. He\'s been attending WordCamp community events since 2008 and continues to lead the company today.'
  },
  {
    question: 'What is your team\'s approach to projects?',
    answer: 'We take a collaborative approach to all projects. This includes pair programming, thorough code reviews, and knowledge sharing among team members. We believe in building long-term partnerships with clients rather than one-off vendor relationships. Every project benefits from our collective 22+ years of experience.'
  },
  {
    question: 'Does your team work remotely or in-office?',
    answer: 'Our team works from our Cape Town office. While we serve clients globally and can accommodate different time zones, all our team members are based in Cape Town, South Africa. This allows for close collaboration, knowledge sharing, and consistent project quality.'
  },
  {
    question: 'What certifications does your team hold?',
    answer: 'LightSpeed is one of the elite few companies globally to hold both WooExpert and Mailchimp Expert certifications. Our team has extensive WordPress experience, and several members have been involved in the WordPress community for over a decade, attending WordCamps and contributing to open source.'
  },
  {
    question: 'Is LightSpeed hiring?',
    answer: 'We occasionally have openings for WordPress developers and designers. If you\'re passionate about WordPress, committed to quality, and interested in working with an experienced team in Cape Town, we\'d love to hear from you. Contact us at hello@lightspeedwp.agency to inquire about current opportunities.'
  }
];

/**
 * Team Leadership
 * 
 * Featured leadership team members
 */
export const teamPageLeadership = [
  {
    ...teamMembers.find(m => m.id === 'ash-shaw')!,
    highlights: [
      'Founder & CEO since 2003',
      'WordCamp attendee since 2008',
      'Passionate about WordPress & UX'
    ]
  },
  {
    ...teamMembers.find(m => m.id === 'barbara-kerr')!,
    highlights: [
      'Financial & HR management',
      'Client relationship management',
      'Team wellbeing advocate'
    ]
  }
];

/**
 * CTA Section Data
 */
export const teamPageCTA = {
  title: 'Want to Work with Our Expert Team?',
  description: 'Let\'s discuss how our experienced WordPress team can help you achieve your online goals. We\'re ready to collaborate.',
  buttons: [
    {
      text: 'Contact Us',
      page: 'contact',
      variant: 'default'
    },
    {
      text: 'View Our Work',
      page: 'portfolio',
      variant: 'outline'
    }
  ]
};

/**
 * Helper Functions
 */

/**
 * Get team member by ID
 */
export function getTeamMemberById(id: string) {
  return teamMembers.find(member => member.id === id);
}

/**
 * Get team members by role
 */
export function getTeamMembersByRole(role: string) {
  return teamMembers.filter(member => member.role.toLowerCase().includes(role.toLowerCase()));
}

/**
 * Get featured team members
 */
export function getFeaturedTeamMembers() {
  return teamMembers.filter(member => member.featured);
}

/**
 * Get team count
 */
export function getTeamCount() {
  return teamMembers.length;
}
