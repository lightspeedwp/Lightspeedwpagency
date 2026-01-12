/**
 * About Stats Interface
 * 
 * Statistics shown on the About page hero/overview.
 */
export interface AboutStat {
  number: string;
  label: string;
  description?: string;
}

/**
 * About Page Statistics
 * 
 * Key metrics that showcase company achievements.
 */
export const aboutStats: AboutStat[] = [
  { 
    number: '500+', 
    label: 'Projects Delivered',
    description: 'WordPress sites built'
  },
  { 
    number: '150+', 
    label: 'Happy Clients',
    description: 'Across 30 countries'
  },
  { 
    number: '10+', 
    label: 'Years Experience',
    description: 'In WordPress development'
  },
  { 
    number: '98%', 
    label: 'Client Satisfaction',
    description: 'Average rating'
  }
];