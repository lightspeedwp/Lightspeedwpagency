/**
 * ContentStatsWidget Pattern
 *
 * Displays dynamic content statistics pulled from data files.
 * Shows animated counters for blog posts, projects, testimonials, etc.
 *
 * WordPress equivalent: wp:group with dynamic content counts
 *
 * @example
 * <ContentStatsWidget variant="default" />
 * <ContentStatsWidget variant="compact" />
 */

import { useState, useEffect } from 'react';
import { useScrollReveal, useStaggerReveal } from '../../hooks/useScrollReveal';
import { blogPosts } from '../../data/blog-posts';
import { portfolioProjects } from '../../data/portfolio-projects';
import { testimonials } from '../../data/testimonials';
import { services } from '../../data/services';
import { 
  FileText, 
  Briefcase, 
  ChatDots, 
  Wrench, 
  Star, 
  Users, 
  Globe, 
  Lightning 
} from '@phosphor-icons/react';
import type { UniversalIcon } from '../../utils/icon-map';

interface StatItem {
  icon: UniversalIcon;
  value: number;
  suffix?: string;
  label: string;
}

interface ContentStatsWidgetProps {
  /** Visual variant: default (cards) or compact (pills) or funky (neon) */
  variant?: 'default' | 'compact' | 'funky';
  /** Custom stats to display (overrides auto-generated) */
  stats?: StatItem[];
  /** Which stat categories to include */
  include?: ('blog' | 'portfolio' | 'testimonials' | 'services' | 'experience' | 'clients')[];
}

/** Animated counter hook */
function useAnimatedCounter(target: number, isVisible: boolean, duration = 1500) {
  const [count, setCount] = useState(0);

  useEffect(() => {
    if (!isVisible) return;

    let startTime: number;
    let animationFrame: number;

    const animate = (timestamp: number) => {
      if (!startTime) startTime = timestamp;
      const progress = Math.min((timestamp - startTime) / duration, 1);
      // Ease out cubic
      const eased = 1 - Math.pow(1 - progress, 3);
      setCount(Math.floor(eased * target));

      if (progress < 1) {
        animationFrame = requestAnimationFrame(animate);
      }
    };

    animationFrame = requestAnimationFrame(animate);
    return () => cancelAnimationFrame(animationFrame);
  }, [target, isVisible, duration]);

  return count;
}

function StatCard({ stat, isVisible }: { stat: StatItem; isVisible: boolean }) {
  const animatedValue = useAnimatedCounter(stat.value, isVisible);
  const Icon = stat.icon;

  return (
    <div className="content-stats__card">
      <div className="content-stats__icon-wrap">
        <Icon weight="duotone" size={22} />
      </div>
      <div className="content-stats__value">
        {animatedValue}{stat.suffix || ''}
      </div>
      <div className="content-stats__label">{stat.label}</div>
    </div>
  );
}

export function ContentStatsWidget({
  variant = 'default',
  stats: customStats,
  include = ['blog', 'portfolio', 'testimonials', 'services'],
}: ContentStatsWidgetProps) {
  const { ref, isVisible, style } = useScrollReveal({ animation: 'fade-up', threshold: 0.2 });

  // Auto-generate stats from data files
  const autoStats: Record<string, StatItem> = {
    blog: { icon: FileText, value: blogPosts.length, label: 'Blog Posts', suffix: '+' },
    portfolio: { icon: Briefcase, value: portfolioProjects.length, label: 'Projects Delivered', suffix: '+' },
    testimonials: { icon: ChatDots, value: testimonials.length, label: 'Client Testimonials' },
    services: { icon: Wrench, value: services.length, label: 'Services Offered' },
    experience: { icon: Lightning, value: 22, label: 'Years Experience', suffix: '+' },
    clients: { icon: Users, value: 130, label: 'Happy Clients', suffix: '+' },
  };

  const displayStats = customStats || include.map(key => autoStats[key]).filter(Boolean);

  const classNames = [
    'content-stats',
    variant === 'compact' ? 'content-stats--compact' : '',
    variant === 'funky' ? 'content-stats--funky' : '',
  ].filter(Boolean).join(' ');

  return (
    <div
      className={classNames}
      ref={ref as React.RefObject<HTMLDivElement>}
      style={style}
    >
      <div className="content-stats__grid">
        {displayStats.map((stat, index) => (
          <StatCard
            key={stat.label}
            stat={stat}
            isVisible={isVisible}
          />
        ))}
      </div>
    </div>
  );
}