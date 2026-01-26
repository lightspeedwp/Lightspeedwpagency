import {
  Shield,
  Gauge,
  Eye,
  Server,
  Clock,
  GraduationCap,
  Headphones,
  ThumbsUp,
  CheckCircle,
  Award,
  Users,
  Star
} from 'lucide-react';
import { guarantees } from './guarantees';

// Map string icons to components
const iconMap: Record<string, any> = {
  Shield,
  Gauge,
  Eye,
  Server,
  Clock,
  GraduationCap,
  Headphones,
  ThumbsUp
};

export const guaranteesPageHero = {
  title: 'Guarantees',
  badge: {
    text: 'Risk-Free Partnership',
    icon: Shield
  },
  tagline: 'We put our money where our mouth is.',
  description: 'Most agencies make promises. We make guarantees. Backed by clear SLAs and financial penalties if we miss the mark.'
};

export const mainGuarantees = guarantees.map(g => ({
  ...g,
  icon: g.icon ? iconMap[g.icon] : Shield, // Fallback
  badge: g.id === 'performance' ? 'Most Popular' : undefined // Example enhancement
}));

export const guaranteesProcess = {
  title: 'How It Works',
  description: 'Our guarantee process is simple and transparent.',
  steps: [
    {
      number: '01',
      title: 'Define Baseline',
      description: 'We establish clear metrics and targets before starting any work.'
    },
    {
      number: '02',
      title: 'Track Progress',
      description: 'Real-time monitoring and reporting throughout the project lifecycle.'
    },
    {
      number: '03',
      title: 'Verify Results',
      description: 'Final audit using industry-standard tools to confirm compliance.'
    },
    {
      number: '04',
      title: 'Ongoing Support',
      description: 'Continuous monitoring to ensure standards are maintained post-launch.'
    }
  ]
};

export const trustSignals = {
  title: 'Why Trust Us?',
  description: 'Our track record speaks for itself.',
  signals: [
    {
      icon: CheckCircle,
      stat: '100%',
      label: 'Success Rate',
      description: 'On guaranteed deliverables'
    },
    {
      icon: Users,
      stat: '500+',
      label: 'Happy Clients',
      description: 'Across 12 countries'
    },
    {
      icon: Star,
      stat: '4.9/5',
      label: 'Client Rating',
      description: 'Based on post-launch surveys'
    },
    {
      icon: Award,
      stat: '15+',
      label: 'Industry Awards',
      description: 'For design and performance'
    }
  ]
};

export const guaranteesFAQs = [
  {
    question: 'How do you measure the Lighthouse score?',
    answer: 'We use the official Google Lighthouse auditing tool running in a controlled environment to ensure consistent, accurate results. We measure Performance, Accessibility, Best Practices, and SEO.'
  },
  {
    question: 'What happens if you miss a deadline?',
    answer: 'If we miss a mutually agreed milestone due to our own delays, we apply a 10% discount to that milestone\'s payment. This keeps us accountable and focused on your timeline.'
  },
  {
    question: 'Does the 99.9% uptime guarantee apply to all hosting?',
    answer: 'It applies to all sites hosted on our "Professional" and "Enterprise" maintenance plans. Basic hosting plans are subject to the upstream provider\'s SLA.'
  },
  {
    question: 'How do I claim a refund?',
    answer: 'Simply notify your project manager in writing within the first 30 days. We will process the refund of your deposit within 5 business days, no questions asked.'
  }
];

export const guaranteesCTA = {
  title: 'Ready to Start Risk-Free?',
  description: 'Book your free consultation today and let\'s discuss how we can help you achieve your goals with total peace of mind.',
  buttons: [
    {
      text: 'Start Your Project',
      page: 'contact'
    },
    {
      text: 'View Pricing',
      page: 'pricing'
    }
  ]
};
