/**
 * Contact FAQ Collections
 * 
 * FAQ collections for contact and inquiry-related pages.
 * 
 * **Collections:**
 * - contactFAQs — General contact page
 * - contactPageDetailedFAQs — Detailed contact page
 * 
 * **Count:** 2 collections
 * 
 * @example
 * import { contactFAQs } from '@/app/data/faqs';
 * <FAQSection faqs={contactFAQs} />
 */

import type { FAQ } from './types';

/**
 * Contact Page FAQs
 * Used on: ContactPageTemplate
 */
export const contactFAQs: FAQ[] = [
  {
    question: 'What\'s your response time for inquiries?',
    answer: 'We respond to all inquiries within 24 business hours. For existing clients, our support response time is typically under 4 hours during business hours.'
  },
  {
    question: 'Do you offer free consultations?',
    answer: 'Yes! We offer complimentary 30-minute discovery calls to discuss your project, answer questions, and determine if we\'re a good fit for your needs.'
  },
  {
    question: 'What information do you need to provide a quote?',
    answer: 'We need project goals, desired features/functionality, timeline expectations, existing site URL (if applicable), and any design/brand assets. The more detail, the more accurate our estimate.'
  },
  {
    question: 'Do you work with international clients?',
    answer: 'Absolutely! We serve clients across 30+ countries. Our remote-first structure and async communication processes ensure seamless collaboration regardless of time zone.'
  },
  {
    question: 'How do you handle project communication?',
    answer: 'We use a combination of Slack for day-to-day communication, project management tools for task tracking, and video calls for weekly sync meetings. All communication is documented and accessible.'
  }
];

/**
 * Contact Page Detailed FAQs
 * Used on: Detailed contact pages, inquiry forms
 */
export const contactPageDetailedFAQs: FAQ[] = [
  {
    question: "What's the best way to get in touch?",
    answer: "Use the contact form above for project inquiries. For support, email support@lsxdesign.com. For urgent technical issues, maintenance clients can call our emergency hotline."
  },
  {
    question: "How long does it take to get a project quote?",
    answer: "Initial estimates are provided within 2-3 business days. For complex projects, we may schedule a discovery call to better understand requirements before providing detailed proposals."
  },
  {
    question: "Do you offer emergency support or rush projects?",
    answer: "Yes! Maintenance clients get 24/7 emergency support (2-hour response). We can expedite projects for a rush fee (20-30%) depending on team availability."
  },
  {
    question: "Can I schedule a video call instead of filling out a form?",
    answer: "Absolutely! After submitting the form, we'll send a calendar link to schedule a discovery call at your convenience. We accommodate different time zones."
  },
  {
    question: "What information should I include in my inquiry?",
    answer: "Include: project goals, timeline, budget range, existing site URL, key features needed, and any technical requirements. This helps us provide accurate quotes and recommendations."
  }
];
