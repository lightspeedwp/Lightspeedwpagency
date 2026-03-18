/**
 * Analytics Tracking Utility
 * 
 * Centralized analytics event tracking for journey navigation patterns.
 * 
 * Features:
 * - Type-safe event tracking
 * - Journey phase navigation events
 * - Related service discovery events
 * - Console logging in development
 * - Ready for GA4, Plausible, or custom analytics
 * 
 * STRICT DESIGN SYSTEM COMPLIANCE:
 * - Pure TypeScript utility (no UI, no CSS)
 * - Type-safe event names and properties
 * - Environment-aware (dev/prod)
 * 
 * @example
 * ```tsx
 * import { trackJourneyPhaseClick, trackRelatedServiceClick } from '@/utils/analytics';
 * 
 * trackJourneyPhaseClick('create', 'build', 'figma-prototyping');
 * trackRelatedServiceClick('create', 'figma-prototyping', 'design-systems');
 * ```
 */

/* ─────────────────────────────────────────────
   Types
   ───────────────────────────────────────────── */

export type JourneyPhase = 'discover' | 'create' | 'build' | 'launch' | 'grow' | 'evolve';

export interface JourneyPhaseClickEvent {
  event: 'journey_phase_click';
  from_phase: JourneyPhase;
  to_phase: JourneyPhase;
  from_service: string;
}

export interface RelatedServiceClickEvent {
  event: 'related_service_click';
  current_phase: JourneyPhase;
  current_service: string;
  clicked_service: string;
}

export interface ViewAllPhaseServicesEvent {
  event: 'view_all_phase_services';
  current_phase: JourneyPhase;
  current_service: string;
}

export interface PhaseIndicatorImpressionEvent {
  event: 'phase_indicator_impression';
  current_phase: JourneyPhase;
  current_service: string;
}

export interface RelatedServicesImpressionEvent {
  event: 'related_services_impression';
  current_phase: JourneyPhase;
  current_service: string;
  related_services_count: number;
}

export type AnalyticsEvent =
  | JourneyPhaseClickEvent
  | RelatedServiceClickEvent
  | ViewAllPhaseServicesEvent
  | PhaseIndicatorImpressionEvent
  | RelatedServicesImpressionEvent;

/* ─────────────────────────────────────────────
   Core Tracking Function
   ───────────────────────────────────────────── */

/**
 * Track analytics event
 * 
 * @param event - Analytics event object
 */
export function trackEvent(event: AnalyticsEvent): void {
  // Log in development
  if (import.meta.env.DEV) {
    console.log('[Analytics]', event);
  }

  // Send to analytics provider in production
  if (import.meta.env.PROD) {
    // Google Analytics 4
    if (typeof window !== 'undefined' && 'gtag' in window) {
      (window as any).gtag('event', event.event, event);
    }

    // Plausible Analytics
    if (typeof window !== 'undefined' && 'plausible' in window) {
      (window as any).plausible(event.event, { props: event });
    }

    // Custom analytics endpoint (optional)
    // fetch('/api/analytics', {
    //   method: 'POST',
    //   headers: { 'Content-Type': 'application/json' },
    //   body: JSON.stringify(event),
    // });
  }
}

/* ─────────────────────────────────────────────
   Journey Phase Navigation Tracking
   ───────────────────────────────────────────── */

/**
 * Track journey phase indicator click
 * 
 * Fires when user clicks a phase node in JourneyPhaseIndicator
 * 
 * @param fromPhase - Current phase (where user is)
 * @param toPhase - Target phase (where user clicked)
 * @param fromService - Current service page slug
 */
export function trackJourneyPhaseClick(
  fromPhase: JourneyPhase,
  toPhase: JourneyPhase,
  fromService: string
): void {
  trackEvent({
    event: 'journey_phase_click',
    from_phase: fromPhase,
    to_phase: toPhase,
    from_service: fromService,
  });
}

/**
 * Track related service card click
 * 
 * Fires when user clicks a service card in RelatedServicesInPhase
 * 
 * @param currentPhase - Current journey phase
 * @param currentService - Current service page slug
 * @param clickedService - Clicked service page slug
 */
export function trackRelatedServiceClick(
  currentPhase: JourneyPhase,
  currentService: string,
  clickedService: string
): void {
  trackEvent({
    event: 'related_service_click',
    current_phase: currentPhase,
    current_service: currentService,
    clicked_service: clickedService,
  });
}

/**
 * Track "View All Phase Services" link click
 * 
 * Fires when user clicks the footer link to view all services in phase
 * 
 * @param currentPhase - Current journey phase
 * @param currentService - Current service page slug
 */
export function trackViewAllPhaseServices(
  currentPhase: JourneyPhase,
  currentService: string
): void {
  trackEvent({
    event: 'view_all_phase_services',
    current_phase: currentPhase,
    current_service: currentService,
  });
}

/**
 * Track phase indicator impression
 * 
 * Fires when phase indicator becomes visible on screen
 * 
 * @param currentPhase - Current journey phase
 * @param currentService - Current service page slug
 */
export function trackPhaseIndicatorImpression(
  currentPhase: JourneyPhase,
  currentService: string
): void {
  trackEvent({
    event: 'phase_indicator_impression',
    current_phase: currentPhase,
    current_service: currentService,
  });
}

/**
 * Track related services section impression
 * 
 * Fires when related services section becomes visible on screen
 * 
 * @param currentPhase - Current journey phase
 * @param currentService - Current service page slug
 * @param relatedServicesCount - Number of related services shown
 */
export function trackRelatedServicesImpression(
  currentPhase: JourneyPhase,
  currentService: string,
  relatedServicesCount: number
): void {
  trackEvent({
    event: 'related_services_impression',
    current_phase: currentPhase,
    current_service: currentService,
    related_services_count: relatedServicesCount,
  });
}

/* ─────────────────────────────────────────────
   Analytics Data Helpers
   ───────────────────────────────────────────── */

/**
 * Get analytics-friendly phase name
 * 
 * @param phase - Journey phase slug
 * @returns Human-readable phase name
 */
export function getPhaseDisplayName(phase: JourneyPhase): string {
  const phaseNames: Record<JourneyPhase, string> = {
    discover: 'Discover',
    create: 'Create',
    build: 'Build',
    launch: 'Launch',
    grow: 'Grow',
    evolve: 'Evolve',
  };

  return phaseNames[phase] || phase;
}

/**
 * Calculate journey phase progress percentage
 * 
 * @param currentPhase - Current journey phase
 * @returns Progress percentage (0-100)
 */
export function getJourneyProgress(currentPhase: JourneyPhase): number {
  const phaseOrder: JourneyPhase[] = ['discover', 'create', 'build', 'launch', 'grow', 'evolve'];
  const currentIndex = phaseOrder.indexOf(currentPhase);
  
  if (currentIndex === -1) return 0;
  
  // Calculate progress (0%, 20%, 40%, 60%, 80%, 100%)
  return Math.round((currentIndex / (phaseOrder.length - 1)) * 100);
}

/**
 * Get journey phase navigation direction
 * 
 * @param fromPhase - Starting phase
 * @param toPhase - Target phase
 * @returns 'forward', 'backward', or 'same'
 */
export function getNavigationDirection(
  fromPhase: JourneyPhase,
  toPhase: JourneyPhase
): 'forward' | 'backward' | 'same' {
  const phaseOrder: JourneyPhase[] = ['discover', 'create', 'build', 'launch', 'grow', 'evolve'];
  const fromIndex = phaseOrder.indexOf(fromPhase);
  const toIndex = phaseOrder.indexOf(toPhase);

  if (fromIndex === toIndex) return 'same';
  if (toIndex > fromIndex) return 'forward';
  return 'backward';
}