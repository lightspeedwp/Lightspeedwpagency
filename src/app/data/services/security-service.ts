/**
 * Security Service - Detailed Content
 * 
 * Real content from: https://lightspeedwp.agency/services/security/
 * 
 * WordPress & WooCommerce security service data including process,
 * sub-services, and related offerings.
 */

import { DetailedService } from './types';

/**
 * Security Service Detailed Data
 * 
 * Complete security service information for the security service page template.
 */
export const securityServiceDetailed: DetailedService = {
  id: 'security',
  slug: 'security',
  headline: 'WordPress & WooCommerce security',
  tagline: 'To provide your website with the very best WordPress & WooCommerce security, we ensure your site and data is safe from the start, and is defended and protected by ongoing monitoring and updates.',
  description: 'Defence and protection that includes updates, monitoring and rapid response.',
  
  whyLightSpeed: {
    title: 'WordPress and WooCommerce expertise that delivers world-class security services for your website.',
    description: 'Our experience in managing security provides you with the peace of mind from knowing your online business can be fixed when compromised and monitored on a continuous basis. We\'re also able to host your WordPress website with our secure hosting to help prevent any future attacks.'
  },
  
  subServices: [
    {
      id: 'security-audit',
      title: 'Security Audit',
      description: 'We perform a complete audit of your website to troubleshoot issues and includes a thorough inspection of your server, files, themes, plugins & database configuration.'
    },
    {
      id: 'malware-removal',
      title: 'Malware Removal',
      description: 'In case your website is hacked or infected with malware, we take immediate measures to remove the root cause and then undertake preventive measures to protect your website in the longer run.'
    }
  ],
  
  process: {
    title: 'Our Security Process',
    description: 'Fortify your website\'s security with our specialized services. Our process includes detailed assessments, effective clean-ups, and vigilant monitoring, ensuring robust protection against online threats.',
    steps: [
      {
        id: 'initial-review',
        number: 1,
        title: 'Initial Security Review',
        description: 'This initial assessment enables us to provide feedback on your website\'s problem and an approximate time frame for fixing the website.'
      },
      {
        id: 'website-cleanup',
        number: 2,
        title: 'Website Clean-up',
        description: 'We do an initial clean up of your website and "sanitise" it to neutralise any security issue so the immediate problem is dealt with.'
      },
      {
        id: 'website-assessment',
        number: 3,
        title: 'Website Assessment',
        description: 'Once the immediate problem is resolved, we then assess your website\'s software and security, performing a managed upgrade of the software on the website.'
      },
      {
        id: 'vulnerability-assessment',
        number: 4,
        title: 'Vulnerability Assessment',
        description: 'We assess the plugins on your website and locate vulnerabilities in their code.'
      },
      {
        id: 'monitoring',
        number: 5,
        title: 'Monitoring',
        description: 'Ongoing security monitoring is available for your website to prevent further attacks, and we provide the option of hosting your website with LightSpeed to reduce chances of recurring issues.'
      }
    ]
  },
  
  relatedServices: [
    {
      title: 'Secure Managed WordPress Hosting',
      description: 'Safe and stable managed WordPress hosting that gives you peace of mind. Our specialised WordPress and WooCommerce managed hosting offers active and passive proactive solutions, automated daily back-ups, monitoring and prompt repair of any breaches.',
      page: 'hosting'
    }
  ],
  
  cta: {
    title: 'Free Security Consultation',
    description: 'Our Security Consultations discuss how we can offer complete protection. It\'s imperative your online business is protected and defended from cybercrime and hacks. With our free consultation, we\'re able to identify your needs and suggest security fixes and improvements that will sustain your online security and win the trust of your customers.',
    buttonText: 'Consult us on WordPress',
    buttonPage: 'contact'
  }
};
