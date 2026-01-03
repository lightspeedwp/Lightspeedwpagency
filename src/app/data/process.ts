/**
 * Process Data
 * 
 * Centralized process/workflow steps for the LSX Design methodology.
 * Used in AboutProcessTemplate and other process-related pages.
 * 
 * In WordPress, this would be custom fields or a repeater field.
 */

import { ProcessStep } from '../components/patterns/ProcessTimeline';
import { 
  MessageSquare, 
  Lightbulb, 
  Palette, 
  Code, 
  TestTube, 
  Rocket 
} from 'lucide-react';

export const designProcess: ProcessStep[] = [
  {
    id: 'discovery',
    number: 1,
    title: 'Discovery & Strategy',
    description: 'We begin by understanding your business goals, target audience, and technical requirements through in-depth consultations.',
    icon: MessageSquare,
    duration: '1-2 weeks',
  },
  {
    id: 'planning',
    number: 2,
    title: 'Planning & Architecture',
    description: 'Create detailed project plans, site architecture, and content strategy aligned with your objectives and user needs.',
    icon: Lightbulb,
    duration: '1 week',
  },
  {
    id: 'design',
    number: 3,
    title: 'Design & Prototyping',
    description: 'Design beautiful, accessible interfaces with a focus on user experience and brand consistency across all devices.',
    icon: Palette,
    duration: '2-3 weeks',
  },
  {
    id: 'development',
    number: 4,
    title: 'Development',
    description: 'Build your site using modern WordPress block themes, ensuring performance, security, and scalability.',
    icon: Code,
    duration: '3-4 weeks',
  },
  {
    id: 'testing',
    number: 5,
    title: 'Testing & QA',
    description: 'Rigorous testing across devices, browsers, and accessibility standards to ensure flawless functionality.',
    icon: TestTube,
    duration: '1 week',
  },
  {
    id: 'launch',
    number: 6,
    title: 'Launch & Support',
    description: 'Smooth deployment with comprehensive training and ongoing support to ensure your continued success.',
    icon: Rocket,
    duration: 'Ongoing',
  },
];

// Abbreviated process (4 steps) for condensed displays
export const condensedProcess = designProcess.slice(0, 4);

// Helper functions
export function getProcessStepById(id: string): ProcessStep | undefined {
  return designProcess.find(step => step.id === id);
}

export function getProcessStepByNumber(number: number): ProcessStep | undefined {
  return designProcess.find(step => step.number === number);
}

export function getTotalProcessDuration(): string {
  return '8-12 weeks';
}
