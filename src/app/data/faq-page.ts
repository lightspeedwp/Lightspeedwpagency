/**
 * FAQ Page Data
 * 
 * Mock data for the FAQ page (FAQTemplate).
 */

export const faqPageHero = {
  title: "Frequently Asked Questions",
  subtitle: "Find answers to the most common questions about our services, process, and pricing."
};

export const faqPageCategories = [
  {
    id: "general",
    title: "General",
    faqs: [
      {
        question: "Where are you located?",
        answer: "We are a remote-first agency with headquarters in New York and team members distributed globally."
      },
      {
        question: "How long have you been in business?",
        answer: "We have been serving clients since 2010, celebrating over 15 years of digital excellence."
      },
      {
        question: "Who will I be working with?",
        answer: "You will be assigned a dedicated project manager who will coordinate with our team of designers and developers."
      }
    ]
  },
  {
    id: "services",
    title: "Services",
    faqs: [
      {
        question: "Do you work with startups?",
        answer: "Yes, we love working with startups! We have specific packages tailored to help new businesses launch quickly."
      },
      {
        question: "Can you help with marketing?",
        answer: "Yes, we offer SEO, content strategy, and email marketing services to help you grow your audience."
      },
      {
        question: "Do you build mobile apps?",
        answer: "We specialize in web technologies (PWA, React Native) that allow us to build mobile-friendly experiences and cross-platform apps."
      }
    ]
  },
  {
    id: "pricing",
    title: "Pricing & Billing",
    faqs: [
      {
        question: "What is your hourly rate?",
        answer: "Our standard development rate is $150/hr. However, most projects are billed on a fixed-price basis."
      },
      {
        question: "Do you require a deposit?",
        answer: "Yes, a 50% deposit is required to schedule your project, with the remaining balance due upon launch."
      }
    ]
  }
];

export const faqPageCTA = {
  title: "Still Have Questions?",
  description: "Can't find the answer you're looking for? Please chat to our friendly team.",
  button: {
    text: "Get in Touch",
    page: "contact"
  }
};
