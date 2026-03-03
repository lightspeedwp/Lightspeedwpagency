/**
 * Contact Page Data
 * 
 * Real content for the Contact page from LightSpeed WP Agency.
 * Real content extracted from https://lightspeedwp.agency/contact
 * 
 * **REAL CONTENT SOURCE:** https://lightspeedwp.agency/contact
 * **Last Updated:** 2026-02-16
 * 
 * WordPress: Maps to page-contact.html template
 */

import { Mail, Phone, MapPin, Clock, MessageSquare, Headphones, Award, Users } from 'lucide-react';
import type { UniversalIcon } from '../utils/icon-map';
import type { FAQ } from './faqs';

/**
 * Contact Methods Interface
 */
export interface ContactMethod {
  icon: UniversalIcon;
  title: string;
  description: string;
  value: string;
  href: string;
}

/**
 * Contact Methods
 * 
 * Real LightSpeed contact information
 */
export const contactPageMethods: ContactMethod[] = [
  {
    icon: Mail,
    title: 'Email Us',
    description: 'Send us an email and we\'ll respond within 24 hours',
    value: 'hello@lightspeedwp.agency',
    href: 'mailto:hello@lightspeedwp.agency'
  },
  {
    icon: Headphones,
    title: 'Support Email',
    description: 'Technical support for existing clients',
    value: 'support@lightspeedwp.agency',
    href: 'mailto:support@lightspeedwp.agency'
  },
  {
    icon: MapPin,
    title: 'Visit Our Office',
    description: 'Cape Town, South Africa',
    value: '46 Devon Street, Woodstock, Cape Town, 7925',
    href: 'https://maps.google.com/?q=46+Devon+Street+Woodstock+Cape+Town+7925+South+Africa'
  },
  {
    icon: Clock,
    title: 'Business Hours',
    description: 'Mon-Fri 08:00 – 17:00 (GMT+2)',
    value: 'We reply to all queries within 24 hrs',
    href: '#'
  }
];

/**
 * Contact Hero Content
 */
export const contactPageHero = {
  badge: {
    icon: 'MessageSquare',
    text: 'Get In Touch'
  },
  title: 'Let\'s build something amazing together',
  titleHighlight: 'Amazing', // Word to highlight
  description: 'Whether you need a new <i>WordPress</i> website, <i>WooCommerce</i> store, or ongoing support - we\'re here to help. Send us a message and we\'ll get back to you within 24 hours.',
  stats: [
    {
      icon: Award,
      number: '22+',
      label: 'Years Experience'
    },
    {
      icon: Users,
      number: '120+',
      label: 'Websites Hosted'
    },
    {
      icon: Clock,
      number: '24hrs',
      label: 'Response Time'
    }
  ]
};

/**
 * Why Contact Us Section
 */
export interface WhyContactReason {
  icon: UniversalIcon;
  title: string;
  description: string;
}

export const contactPageReasons: WhyContactReason[] = [
  {
    icon: MessageSquare,
    title: 'Expert Consultation',
    description: 'Get professional advice on your <i>WordPress</i> and <i>WooCommerce</i> projects from our experienced team'
  },
  {
    icon: Headphones,
    title: 'Dedicated Support',
    description: 'Direct access to our support team for technical assistance and ongoing maintenance'
  },
  {
    icon: Mail,
    title: 'Quick Response',
    description: 'We respond to all inquiries within 24 hours during business hours'
  }
];

/**
 * Contact Page FAQs
 * 
 * Real FAQs from LightSpeed contact page
 */
export const contactPageFAQs: FAQ[] = [
  {
    question: 'What is the best way to contact LightSpeed?',
    answer: 'The best way to contact us is via email at hello@lightspeedwp.agency or by filling out the contact form on this page. We respond to all inquiries within 24 hours during business hours (Mon-Fri 08:00-17:00 GMT+2). For existing clients with technical support needs, please use support@lightspeedwp.agency.'
  },
  {
    question: 'How quickly will you respond to my inquiry?',
    answer: 'We aim to respond to all inquiries within 24 hours during business hours. For urgent technical support matters from existing clients, we prioritize responses and typically reply within a few hours. If you need immediate assistance, please mark your email as urgent or mention it in the subject line.'
  },
  {
    question: 'What information should I include in my contact message?',
    answer: 'To help us understand your needs better, please include: 1) A brief description of your project or requirements, 2) Your budget range (if applicable), 3) Desired timeline or deadline, 4) Any specific technologies or features you need, 5) Whether you have an existing website or are starting from scratch. The more details you provide, the better we can assist you.'
  },
  {
    question: 'Do you offer free consultations?',
    answer: 'Yes! We offer a free initial consultation to discuss your project requirements and determine how we can help. This typically includes reviewing your current website (if applicable), understanding your goals, and providing recommendations. There\'s no obligation, and we\'ll provide you with a detailed proposal and quote after our consultation.'
  },
  {
    question: 'Can you help with urgent or emergency website issues?',
    answer: 'Yes, we provide emergency support for existing clients through our support packages. If you\'re experiencing a critical website issue (site down, security breach, etc.), contact us immediately at support@lightspeedwp.agency with "URGENT" in the subject line. For new clients with emergency needs, we can arrange priority onboarding.'
  },
  {
    question: 'What are your business hours and timezone?',
    answer: 'Our business hours are Monday to Friday, 08:00 – 17:00 South African Standard Time (GMT+2). We\'re based in Cape Town, South Africa. While we primarily work during these hours, we serve clients globally and can accommodate different timezones for project meetings and support where needed.'
  },
  {
    question: 'Do you work with clients outside South Africa?',
    answer: 'Absolutely! While we\'re based in Cape Town, South Africa, we work with clients worldwide. We have experience collaborating with businesses across different countries and timezones. All our communication is conducted in English, and we use modern project management tools to ensure smooth collaboration regardless of location.'
  },
  {
    question: 'What happens after I submit a contact form?',
    answer: 'After you submit the contact form, you\'ll receive an automated confirmation email. One of our team members will review your inquiry and respond within 24 hours with answers to your questions or to schedule a consultation call. If your project is a good fit, we\'ll arrange a discovery call to discuss your requirements in detail and prepare a comprehensive proposal.'
  }
];

/**
 * Office Information
 */
export const contactPageOffice = {
  name: 'LightSpeed WordPress Agency',
  address: {
    street: '46 Devon Street',
    suburb: 'Woodstock',
    city: 'Cape Town',
    postalCode: '7925',
    country: 'South Africa'
  },
  coordinates: {
    lat: -33.9249,
    lng: 18.4241
  },
  hours: 'Mon-Fri 08:00 – 17:00 (GMT+2)',
  timezone: 'South African Standard Time (GMT+2)',
  responseTime: 'We reply to all queries within 24 hrs'
};

/**
 * Social Links
 */
export const contactPageSocial = [
  {
    platform: 'GitHub',
    url: 'https://github.com/lightspeedwp',
    icon: 'Github'
  },
  {
    platform: 'LinkedIn',
    url: 'https://linkedin.com/company/lightspeed-wordpress',
    icon: 'Linkedin'
  },
  {
    platform: 'Twitter',
    url: 'https://twitter.com/lightspeedwp',
    icon: 'Twitter'
  }
];

/**
 * Form Fields Configuration
 */
export const contactFormFields = {
  name: {
    label: 'Full Name',
    placeholder: 'John Doe',
    required: true,
    minLength: 2,
    errorMessage: 'Name must be at least 2 characters'
  },
  email: {
    label: 'Email Address',
    placeholder: 'john@example.com',
    required: true,
    type: 'email',
    errorMessage: 'Please enter a valid email address'
  },
  subject: {
    label: 'Subject',
    placeholder: 'How can we help you?',
    required: false
  },
  message: {
    label: 'Message',
    placeholder: 'Tell us about your project or inquiry...',
    required: true,
    minLength: 10,
    maxLength: 500,
    errorMessage: 'Message must be between 10 and 500 characters'
  }
};

/**
 * Success/Error Messages
 */
export const contactFormMessages = {
  success: {
    title: 'Message Sent Successfully!',
    description: 'Thank you for contacting us. We\'ll get back to you within 24 hours.'
  },
  error: {
    title: 'Oops! Something went wrong.',
    description: 'Please try again or email us directly at hello@lightspeedwp.agency'
  },
  submitting: {
    title: 'Sending your message...',
    description: 'Please wait while we process your request.'
  }
};