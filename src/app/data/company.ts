/**
 * Company Data
 * 
 * Centralized company information for LightSpeed WordPress Agency.
 * Real content extracted from https://lightspeedwp.agency
 * 
 * **REAL CONTENT SOURCE:** 
 * - https://lightspeedwp.agency/contact
 * - https://lightspeedwp.agency/about
 * - https://lightspeedwp.agency/about/process
 * - https://lightspeedwp.agency/about/culture
 * - https://lightspeedwp.agency/about/history
 * - https://lightspeedwp.agency/team
 * 
 * **Last Updated:** 2025-01-09
 * 
 * This file contains:
 * - Contact information
 * - Company information (about, vision, mission)
 * - Team members
 * - Company history timeline
 * - Process & approach
 * - Culture & values
 */

/**
 * Contact Information Interface
 */
export interface ContactInfo {
  email: {
    support: string;
    general: string;
  };
  address: {
    street: string;
    suburb: string;
    city: string;
    postalCode: string;
    country: string;
  };
  support: {
    hours: string;
    timezone: string;
    responseTime: string;
  };
}

/**
 * Contact Information
 * 
 * Real content from: https://lightspeedwp.agency/contact
 */
export const contactInfo: ContactInfo = {
  email: {
    support: 'support@lightspeedwp.agency',
    general: 'hello@lightspeedwp.agency'
  },
  address: {
    street: '46 Devon Street',
    suburb: 'Woodstock',
    city: 'Cape Town',
    postalCode: '7925',
    country: 'South Africa'
  },
  support: {
    hours: 'Mon-Fri 08:00 – 17:00',
    timezone: 'GMT+2',
    responseTime: 'We reply to all queries within 24 hrs'
  }
};

/**
 * Team Member Interface
 */
export interface TeamMember {
  id: string;
  name: string;
  role: string;
  email: string;
  bio: string;
  photo?: string;
  featured: boolean;
  order: number;
}

/**
 * Team Members
 * 
 * Real content from: https://lightspeedwp.agency/team
 */
export const teamMembers: TeamMember[] = [
  {
    id: 'ash-shaw',
    name: 'Ash Shaw',
    role: 'Chief Executive Officer',
    email: 'ashley@lightspeedwp.agency',
    bio: 'Ash steers the business forward and beyond. He\'s passionate about WordPress, web design and building awesome user experiences. A networker at heart, he\'s been attending WordCamp community events since 2008.',
    featured: true,
    order: 1
  },
  {
    id: 'barbara-kerr',
    name: 'Barbara Kerr',
    role: 'Chief Financial Officer',
    email: 'barbara@lightspeedwp.agency',
    bio: 'Barb fills a number of roles at the company, ranging from financial administration to project and client relationship management. She also looks after the team\'s wellbeing and all things HR-related.',
    featured: true,
    order: 2
  },
  {
    id: 'warwick-booth',
    name: 'Warwick Booth',
    role: 'Lead Developer',
    email: 'warwick@lightspeedwp.agency',
    bio: 'Warwick is LightSpeed\'s lead developer. Apart from building exceptional websites with his coding skills, he is involved in project planning, mentoring his team mates and reviewing their code.',
    featured: true,
    order: 3
  },
  {
    id: 'chris-vancoillie',
    name: 'Chris Vancoillie',
    role: 'Systems Engineer',
    email: 'chris@lightspeedwp.agency',
    bio: 'Chris is LightSpeed\'s Systems Engineer, Network Architect and Database Administrator. He looks after the 120+ websites that we host, keeping everything running smoothly on our servers and our clients happy.',
    featured: true,
    order: 4
  },
  {
    id: 'lourens-visser',
    name: 'Lourens Visser',
    role: 'Support Manager',
    email: 'lourens@lightspeedwp.agency',
    bio: 'Lourens has been involved in programming, web design, graphic design, and business environment for 2 decades. He manages our developers, handling support requests, and ensuring an agile and efficient workflow in our team.',
    featured: true,
    order: 5
  },
  {
    id: 'justin-abrahamse',
    name: 'Justin Abrahamse',
    role: 'Developer & Web Designer',
    email: 'justin@lightspeedwp.agency',
    bio: 'Justin is LightSpeed\'s frontend developer, focusing on web design to code and user functionality. He also assists with backend development, theme updates and is accomplished on Mailchimp, SEO and SEM platforms.',
    featured: false,
    order: 6
  },
  {
    id: 'adam-wale',
    name: 'Adam Wale',
    role: 'Branding & Web Designer',
    email: 'adam@lightspeedwp.agency',
    bio: 'Adam is our web designer with over a decade of experience in creating thoughtful and innovative design solutions. He brings LightSpeed\'s client brands to life.',
    featured: false,
    order: 7
  },
  {
    id: 'zared-rogers',
    name: 'Zared Rogers',
    role: 'Designer & Page Builder',
    email: 'zared@lightspeedwp.agency',
    bio: 'Zared creates structured Figma design systems and prototypes, and builds clean, scalable interfaces for complex projects. He brings these designs to life as high-quality WordPress themes, ensuring each project has a solid visual and technical foundation.',
    featured: false,
    order: 8
  },
  {
    id: 'tibi-buzdugan',
    name: 'Tibi Buzdugan',
    role: 'Frontend & Backend Developer',
    email: 'tibi@lightspeedwp.agency',
    bio: 'Tibi is a Full Stack Engineer and Designer with over a decade of experience building scalable websites, SaaS platforms and custom WordPress solutions. His work spans frontend and backend development, UX design and API integrations, creating clean, reliable, and user-friendly digital products.',
    featured: false,
    order: 9
  },
  {
    id: 'jose-abreu',
    name: 'José Abreu',
    role: 'Web Developer',
    email: 'jose@lightspeedwp.agency',
    bio: 'José is LightSpeed\'s WordPress Block Theme & Block Developer, focusing on web design to code and user interface and experience. He also assists with backend development, theme and blocks updates and development, project planning and mentoring interns.',
    featured: false,
    order: 10
  },
  {
    id: 'brandon-marshall',
    name: 'Brandon Marshall',
    role: 'Junior Developer',
    email: 'brandon@lightspeedwp.agency',
    bio: 'Brandon is a Junior WordPress Developer at LightSpeed, passionate about thoughtful design, structured workflows, and contributing to reliable, high-quality Wordpress websites and plugins with the team.',
    featured: false,
    order: 11
  }
];

/**
 * Contact Team Members (Featured on contact page)
 */
export const contactTeamMembers = teamMembers.filter(member => 
  ['ash-shaw', 'barbara-kerr', 'lourens-visser'].includes(member.id)
);

/**
 * Company Information Interface
 */
export interface CompanyInfo {
  name: string;
  tagline: string;
  founded: number;
  founder: string;
  about: {
    overview: string;
    history: string;
  };
  vision: string;
  mission: string;
  experience: string;
  speciality: string;
  partnerships: string;
}

/**
 * Company Information
 * 
 * Real content from: https://lightspeedwp.agency/about
 */
export const companyInfo: CompanyInfo = {
  name: 'LightSpeed WordPress Agency',
  tagline: 'Web Design, Development & Workflow You Can Trust',
  founded: 2003,
  founder: 'Ashley Shaw',
  about: {
    overview: 'We\'re passionate about helping businesses make an impact online by putting control in the hands of our clients.',
    history: 'Founded in 2003 by Ashley Shaw, LightSpeed WordPress Development has progressed from a start as a WordPress website solutions company that catered to a spread of client requirements (with a focus on the tourism sector) on to becoming a leading WP specialist development company. In 2020, the company now features valuable credentials gained via endorsements and associations with both the focal WordPress community and organisation. The company now stands tall in its field as a result of the significant gains made since its founding, and is now a proud member of the elite few companies in the world that are both WooExperts and Mailchimp Experts.'
  },
  vision: 'We aim to keep an eye on the future, as we continuously improve the solutions and services we provide to our clients.',
  mission: 'Our mission is to develop excellent WordPress websites for our clients that get great visibility in search engines while generating solid traffic and sales.',
  experience: 'It\'s our experience in website design and development, with a focus on WooCommerce, that has seen us improve the visibility and traffic for a number of clients in the Tour Operator and eCommerce industries. In the process, our team has accumulated skills that enable us to continue to deliver high-performance websites for tour operators that are targeted at travel packages in relevant markets, whether student, luxury or educational in nature.',
  speciality: 'We pride ourselves on helping our clients find and keep their target market – and we achieve this by specialising in enhancing the performance of WordPress websites. To make this happen for you, our team can help set your WooCommerce up to boost sales whether yours is a subscription business, selling physical products or digital courses. Once your sales engine is running smoothly, we\'re then able to assist you with marketing yourself online by making use of Mailchimp – and this includes training your team to make the most of automation and email marketing.',
  partnerships: 'LightSpeed WordPress Development is a proud members of an elite global set of Partners that share advances in development which provide us with the ability to super-boost your website. We apply the experience gained through our development of several software applications and products to enhancing the performance of WordPress websites. From startups to large-scale digital publishing platforms and on to educational or tour operator websites, we pride ourselves on work that helps our clients find and keep their target market.'
};

/**
 * History Timeline Event Interface
 */
export interface HistoryEvent {
  year: number;
  title: string;
  description: string;
}

/**
 * Company History Timeline
 * 
 * Real content from: https://lightspeedwp.agency/about/history
 */
export const companyHistory: HistoryEvent[] = [
  {
    year: 2003,
    title: 'Founded LightSpeed',
    description: 'LightSpeed opened its doors as a network support specialist and computer hardware sales business. Founded in 2003 by Ashley Shaw, LightSpeed WordPress Development has progressed from a start as a WordPress website solutions company that catered to a spread of client requirements (with a focus on the tourism sector) on to becoming a leading WP specialist development company.'
  },
  {
    year: 2007,
    title: 'WordPress Agency',
    description: 'Pivoted to a WordPress Design & Development Agency.'
  },
  {
    year: 2009,
    title: 'Launched Hosting Services',
    description: 'We started providing hosting services.'
  },
  {
    year: 2015,
    title: 'Launched Woo Services',
    description: 'Started working with WooCommerce.'
  },
  {
    year: 2019,
    title: 'Became WooExpert',
    description: 'We became WooExperts and Mailchimp experts.'
  }
];

/**
 * Process Step Interface
 */
export interface ProcessStep {
  id: string;
  number: number;
  title: string;
  description: string;
}

/**
 * Development Process
 * 
 * Real content from: https://lightspeedwp.agency/about/process
 */
export const developmentProcess: ProcessStep[] = [
  {
    id: 'discover',
    number: 1,
    title: 'Discover',
    description: 'The discovery phase is the most critical step in building your website; it\'s the foundation on which we base the rest of the site build.'
  },
  {
    id: 'plan',
    number: 2,
    title: 'Plan',
    description: 'By understanding your business and needs, we\'re better positioned to plan how to provide you with an exceptional site.'
  },
  {
    id: 'build',
    number: 3,
    title: 'Build',
    description: 'With a website review completed and a solid content plan at hand, we\'re ready to build your website.'
  },
  {
    id: 'publish',
    number: 4,
    title: 'Publish',
    description: 'After design and development are complete, we move your site to our live hosting environment.'
  },
  {
    id: 'maintain',
    number: 5,
    title: 'Maintain',
    description: 'We can assist you with security, stability and maintenance tasks like upgrades to WordPress and all associated plugins.'
  },
  {
    id: 'grow',
    number: 6,
    title: 'Grow',
    description: 'With a secure site up and running, you\'re ready to grow your online presence.'
  }
];

/**
 * Core Value Interface
 */
export interface CoreValue {
  id: string;
  title: string;
  description: string;
}

/**
 * Core Values / Approach
 * 
 * Real content from: https://lightspeedwp.agency/about/process
 */
export const coreValues: CoreValue[] = [
  {
    id: 'partnership',
    title: 'Partnership',
    description: 'We\'re here to listen and understand your needs, so that our team acts efficiently and effectively in delivering what you need, when you need.'
  },
  {
    id: 'clear-communication',
    title: 'Clear Communication',
    description: 'By presenting our tactical and technical solutions in a clear manner that invites your input, we keep channels open and build your trust in us.'
  },
  {
    id: 'innovation',
    title: 'Innovation',
    description: 'Our eye is always on the latest and best-in-class solutions that can provide you with cutting-edge innovation that helps you stand out and succeed.'
  },
  {
    id: 'lean-thinking',
    title: 'Lean Thinking',
    description: 'With an approach that\'s informed by data and analysis, we\'re able to ensure our focus is always on the task at hand, whilst being agile and responsive.'
  }
];

/**
 * Culture Information Interface
 */
export interface CultureInfo {
  tagline: string;
  workStyle: {
    title: string;
    description: string;
  };
  remoteWork: {
    since: number;
    philosophy: string;
    benefits: string[];
  };
  teamValues: string[];
  hiring: {
    lookingFor: string;
    learningTime: string;
  };
  teamRetreats: string;
}

/**
 * Culture Information
 * 
 * Real content from: https://lightspeedwp.agency/about/culture
 */
export const cultureInfo: CultureInfo = {
  tagline: 'Collaborative, innovative and forward-thinking',
  workStyle: {
    title: 'Working at LightSpeed',
    description: 'Embracing Flexibility and Commitment: A Decade of Remote Excellence. Having worked remotely since 2014, our mature team is self motivated and makes the most of flexi time to meet realistic commitments and goals. Using well planned strategy, we\'re able to avoid unexpected issues but are also able to step up and deal with challenges when required.'
  },
  remoteWork: {
    since: 2014,
    philosophy: 'We\'re firm believers that people are at their most productive when they\'re in the most comfortable space, mentally and physically. This is why we all work from remote workspaces where we\'re able to cater our work environments to our needs, this is the first step in creating the LightSpeed Culture.',
    benefits: [
      'Most productive in comfortable spaces',
      'Remote workspaces tailored to needs',
      'International collaboration (South Africa, Brazil, Italy, Chile)',
      'Well-defined daily, weekly, and quarterly goals',
      'KPA reviews twice a year',
      'Collaborative technologies for effective work'
    ]
  },
  teamValues: [
    'Curious',
    'Self-motivated',
    'Friendly',
    'Independent',
    'Collaborative',
    'Open communication',
    'Strong support'
  ],
  hiring: {
    lookingFor: 'We like to think of ourselves as a curious, self-motivated, friendly, independent and collaborative team that thrives on open communication and strong support of each other. We care about the web and the world, and make sure that the people who work for us and with us do too.',
    learningTime: 'We ensure that our team members stay up to date with the latest news and technologies in their respective fields, allowing for an hour of study time every day – and we encourage them to share their learnings with the rest of the team too.'
  },
  teamRetreats: 'While we work mostly remotely and around the world, we take time every year to have a team meetup to catch up with each other, get a rundown of what we\'ve all been working on, and of course to have a bit of fun and relax and reward ourselves for the hard work we\'ve been doing.'
};

/**
 * Certification Interface
 */
export interface Certification {
  id: string;
  name: string;
  description: string;
  url: string;
}

/**
 * Certifications & Partnerships
 * 
 * Real content from: https://lightspeedwp.agency/about
 */
export const certifications: Certification[] = [
  {
    id: 'wooexpert',
    name: 'WooCommerce Expert',
    description: 'Listed on WooExperts directory',
    url: 'https://woocommerce.com/experts/'
  },
  {
    id: 'mailchimp',
    name: 'Mailchimp Partner',
    description: 'Listed on Mailchimp Experts directory',
    url: 'https://mailchimp.com/experts/'
  }
];

/**
 * Open Source Tool Interface
 */
export interface OpenSourceTool {
  id: string;
  name: string;
  description: string;
  url: string;
}

/**
 * Open Source Tools
 * 
 * Real content from: https://lightspeedwp.agency/about/process
 */
export const openSourceTools: OpenSourceTool[] = [
  {
    id: 'github',
    name: 'GitHub Team',
    description: 'Our team are sponsored by GitHub',
    url: 'https://github.com/lightspeedwp'
  },
  {
    id: 'browserstack',
    name: 'BrowserStack',
    description: 'Sponsored by world\'s leading testing tools',
    url: 'https://www.browserstack.com/'
  }
];

/**
 * Open Source Commitment
 */
export const openSourceCommitment = {
  title: 'Open Source Products',
  description: 'We are committed to keeping our products Open Source. Our promise to you is to deliver secure and reliable development – and we keep our promise through our commitment open source, with all of our products released and published under the GNU Public License v.3. In line with our committed approach to keeping our LSX theme and extensions free Open Source, we recently released all our extensions and core software on wp.org.',
  license: 'GNU Public License v.3',
  platforms: ['GitHub', 'WordPress.org']
};

/**
 * WordPress Community Involvement Interface
 */
export interface CommunityInvolvement {
  region: string;
  involvement: string;
}

/**
 * WordPress Community Involvement
 * 
 * Real content from: https://lightspeedwp.agency/about
 */
export const communityInvolvement: CommunityInvolvement[] = [
  {
    region: 'South Africa Community',
    involvement: 'With a focus on WordPress development our founder and CEO, Ashley Shaw, has been instrumental in spearheading WordPress gatherings in Cape Town, and organised a WordPress meetup in 2008 specifically on WordPress CEO Matt Mullenweg\'s request. Ashley was also one of the organisers of WordCamp in both 2011 and 2012 and since then he and the rest of our team have attended local WordCamps in Cape Town annually.'
  },
  {
    region: 'International Community',
    involvement: 'As a highly engaged member of the global WordPress community, Ashley has also attended a range of WordPress meetups around the world, including Nijmegen, Munich, and two in Cape Town. In the US, he has attended WordCamp San Francisco 2014 as well as the 2014 WooConf and has also attended WordCamp Europe in Seville (2015), in Vienna (2016) and in Paris (2017), Belgrade (2018), Berlin (2019).'
  }
];

/**
 * Why LightSpeed Points
 * 
 * Real content from: https://lightspeedwp.agency/about/process
 */
export const whyLightSpeed = {
  title: 'Why LightSpeed?',
  tagline: 'Our world-class solutions and services are certified, verified, and at your disposal.',
  subtitle: 'The \'Preferred\' WooCommerce & WordPress Experts.',
  description: 'With over 10 years\' experience in creating industry-leading WordPress websites for a wide range of clients, we create and deliver websites that drive your online success. As your website partner, we enable you and your business to make the most of WordPress and Block Editor.',
  points: [
    {
      title: 'Certified experience',
      description: 'Our passion for WooCommerce and WordPress means that you have a partner in innovation you can rely on, every time'
    },
    {
      title: 'Next-level Woo expertise',
      description: 'Years of laser focus have earned us the trust of our clients and the WooCommerce and WordPress certifications to back it up.'
    },
    {
      title: 'Tactical and attentive',
      description: 'We\'re constantly learning and always have an eye on the latest development so that your online business is designed to succeed.'
    },
    {
      title: 'With you every step',
      description: 'From day one, we take the time to understand and accelerate your online business\' success through partnership and support'
    }
  ]
};

/**
 * Process Description
 * 
 * Real content from: https://lightspeedwp.agency/about
 */
export const processDescription = {
  title: 'A tried and tested approach to web development',
  subtitle: 'Using over 10 years\' experience, we take you from where you are, to where you want to be – at LightSpeed.',
  description: 'At LightSpeed, our web development process starts with an in-depth discovery phase, where we collaborate with you to understand your business goals and requirements. This ensures a clear project roadmap that aligns with your vision. Our skilled team then creates a custom WooCommerce website that is visually appealing, user-friendly, and optimised for performance. We maintain open communication throughout development, incorporating your feedback to meet your expectations. Post-launch, our support team is ready to assist with updates and maintenance, ensuring your online store runs smoothly. At LightSpeed, we are dedicated to delivering professional service and a website that drives your e-commerce success.'
};

/**
 * Helper Functions
 */

/**
 * Get team member by ID
 */
export function getTeamMemberById(id: string): TeamMember | undefined {
  return teamMembers.find(member => member.id === id);
}

/**
 * Get featured team members
 */
export function getFeaturedTeamMembers(): TeamMember[] {
  return teamMembers.filter(member => member.featured).sort((a, b) => a.order - b.order);
}

/**
 * Get all team members sorted by order
 */
export function getAllTeamMembers(): TeamMember[] {
  return [...teamMembers].sort((a, b) => a.order - b.order);
}

/**
 * Get certification by ID
 */
export function getCertificationById(id: string): Certification | undefined {
  return certifications.find(cert => cert.id === id);
}

/**
 * Get history event by year
 */
export function getHistoryEventByYear(year: number): HistoryEvent | undefined {
  return companyHistory.find(event => event.year === year);
}
