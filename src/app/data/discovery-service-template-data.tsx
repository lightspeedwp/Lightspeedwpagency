/**
 * Discovery Service Template — Static Data & Hooks
 *
 * Extracted from DiscoveryServiceTemplate for file size compliance.
 *
 * @split March 16, 2026
 */

import { useState, useEffect } from 'react';
import {
  MagnifyingGlass as Search,
  Users,
  Target,
  Lightbulb,
  FileText,
  Presentation as PresentationChart,
  CheckCircle,
  MapTrifold as Map,
  Compass,
  Binoculars,
  Strategy,
} from '@phosphor-icons/react';

export const heroStats = [
  { value: '250+', label: 'Projects Launched', icon: Search },
  { value: '98%', label: 'Client Satisfaction', icon: CheckCircle },
  { value: '12yr', label: 'Industry Experience', icon: Compass },
];

export const subServiceIcons: Record<string, typeof Target> = {
  'goal-alignment': Target,
  'risk-mitigation': Binoculars,
  'opportunity-spotting': Strategy,
};

export const deliverables = [
  { icon: FileText, title: 'Technical Specification', desc: 'Detailed architecture & stack recommendations' },
  { icon: PresentationChart, title: 'Competitor Analysis', desc: 'Market landscape & opportunity report' },
  { icon: Users, title: 'User Personas', desc: 'Audience profiles & journey maps' },
  { icon: Map, title: 'Sitemap & IA', desc: 'Information architecture & navigation structure' },
  { icon: Search, title: 'Budget & Timeline', desc: 'Transparent cost breakdown & milestones' },
  { icon: Lightbulb, title: 'Strategy Playbook', desc: 'Actionable roadmap to launch day' },
];

export const processIcons = [Search, Users, Target, Lightbulb, Target];

/** Animated counter hook */
export function useCounter(end: number, duration = 1800) {
  const [count, setCount] = useState(0);
  useEffect(() => {
    let start = 0;
    const step = Math.max(1, Math.floor(end / (duration / 16)));
    const timer = setInterval(() => {
      start += step;
      if (start >= end) {
        setCount(end);
        clearInterval(timer);
      } else {
        setCount(start);
      }
    }, 16);
    return () => clearInterval(timer);
  }, [end, duration]);
  return count;
}

export function StatCounter({ value, label }: { value: string; label: string }) {
  const numeric = parseInt(value.replace(/\D/g, ''), 10);
  const suffix = value.replace(/[\d]/g, '');
  const count = useCounter(numeric);
  return (
    <div className="service-stat">
      <span className="service-stat__value">{count}{suffix}</span>
      <span className="service-stat__label">{label}</span>
    </div>
  );
}
