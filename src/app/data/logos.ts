/**
 * Logos Data
 * 
 * Partners, Clients, and Accreditation logos.
 * 
 * **Note:** In a real app, these would be actual image paths.
 * Using placeholders for now or Unsplash where applicable/generic.
 */

export interface Logo {
  id: string;
  name: string;
  url: string;
  category: 'client' | 'partner' | 'award' | 'certification';
}

export const clientLogos: Logo[] = [
  {
    id: 'client-1',
    name: 'TechFlow',
    url: 'https://images.unsplash.com/photo-1599305445671-ac291c95aaa9?w=200&h=100&fit=crop&auto=format',
    category: 'client'
  },
  {
    id: 'client-2',
    name: 'EcoWorld',
    url: 'https://images.unsplash.com/photo-1563906267088-b029e7101114?w=200&h=100&fit=crop&auto=format',
    category: 'client'
  },
  {
    id: 'client-3',
    name: 'UrbanStyle',
    url: 'https://images.unsplash.com/photo-1554774853-719586f8c277?w=200&h=100&fit=crop&auto=format',
    category: 'client'
  },
  {
    id: 'client-4',
    name: 'HealthPlus',
    url: 'https://images.unsplash.com/photo-1552664730-d307ca884978?w=200&h=100&fit=crop&auto=format',
    category: 'client'
  },
  {
    id: 'client-5',
    name: 'TravelGo',
    url: 'https://images.unsplash.com/photo-1542314831-068cd1dbfeeb?w=200&h=100&fit=crop&auto=format',
    category: 'client'
  },
  {
    id: 'client-6',
    name: 'FinanceCorp',
    url: 'https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=200&h=100&fit=crop&auto=format',
    category: 'client'
  }
];

export const partnerLogos: Logo[] = [
  {
    id: 'partner-wp',
    name: 'WordPress VIP',
    url: 'https://upload.wikimedia.org/wikipedia/commons/9/98/WordPress_blue_logo.svg',
    category: 'partner'
  },
  {
    id: 'partner-woo',
    name: 'WooCommerce',
    url: 'https://upload.wikimedia.org/wikipedia/commons/2/2a/WooCommerce_logo.svg',
    category: 'partner'
  },
  {
    id: 'partner-google',
    name: 'Google Partner',
    url: 'https://upload.wikimedia.org/wikipedia/commons/5/53/Google_%22G%22_Logo.svg',
    category: 'partner'
  }
];

export const certificationLogos: Logo[] = [
  {
    id: 'cert-1',
    name: 'Certified Developer',
    url: '', // Add badge URL
    category: 'certification'
  }
];
