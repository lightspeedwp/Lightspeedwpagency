/**
 * Why Choose Us Page Data
 * 
 * Mock data for the Why Choose Us page (WhyChooseUsTemplate).
 */

import { Users, Clock, Award, ShieldCheck, Zap, Heart } from 'lucide-react';

export const whyChooseUsHero = {
  title: "Why Partner With LightSpeed?",
  subtitle: "We're not just developers; we're your long-term digital partners committed to your growth.",
  image: "https://images.unsplash.com/photo-1556761175-5973dc0f32e7?w=1200&q=80"
};

export const whyChooseUsReasons = [
  {
    icon: Users,
    title: "Dedicated Team",
    description: "You get a dedicated project manager and team who understand your business."
  },
  {
    icon: Award,
    title: "Proven Expertise",
    description: "Over 15 years of experience delivering enterprise-grade WordPress solutions."
  },
  {
    icon: Clock,
    title: "On-Time Delivery",
    description: "We respect your timelines and have a track record of launching on schedule."
  },
  {
    icon: ShieldCheck,
    title: "Security First",
    description: "We build with security in mind from day one, protecting your data and reputation."
  },
  {
    icon: Zap,
    title: "Performance Obsessed",
    description: "We optimize every line of code for speed, ensuring excellent Core Web Vitals."
  },
  {
    icon: Heart,
    title: "We Actually Care",
    description: "Your success is our success. We take pride in seeing our clients thrive."
  }
];

export const whyChooseUsCTA = {
  title: "Experience the Difference",
  description: "Let's discuss how we can bring value to your next project.",
  button: { text: "Contact Us", page: "contact" }
};
