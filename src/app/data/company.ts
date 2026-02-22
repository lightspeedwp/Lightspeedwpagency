/**
 * Company Data
 * 
 * Single source of truth for company contact details, social links, and metadata.
 */

export const companyData = {
  name: 'LSX Design',
  tagline: 'WordPress & WooCommerce Agency',
  description: 'We build high-performance, accessible, and scalable WordPress solutions for forward-thinking businesses.',
  foundingDate: '2014',
  headquarters: {
    street: '46 Devon Street',
    suburb: 'Woodstock',
    city: 'Cape Town',
    postalCode: '7925',
    country: 'South Africa',
    coordinates: {
      lat: -33.9249,
      lng: 18.4241
    }
  },
  contact: {
    email: 'hello@lightspeedwp.agency',
    supportEmail: 'support@lightspeedwp.agency',
    phone: '+27 21 447 3333', // Placeholder
    hours: 'Mon-Fri 08:00 – 17:00 (GMT+2)'
  },
  social: {
    twitter: 'https://twitter.com/lightspeedwp',
    linkedin: 'https://linkedin.com/company/lightspeed-wordpress',
    github: 'https://github.com/lightspeedwp',
    instagram: 'https://instagram.com/lightspeedwp',
    facebook: 'https://facebook.com/lightspeedwp'
  },
  legal: {
    registrationNumber: '2014/123456/07',
    vatNumber: '4123456789'
  }
};
