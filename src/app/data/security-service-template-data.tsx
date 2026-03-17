/**
 * Security Service Template — Extra Data
 *
 * Content data for SecurityServiceTemplate that isn't already
 * in security-service-page.ts (terminal messages, threat cards).
 *
 * @see /src/app/components/templates/SecurityServiceTemplate.tsx
 */

import { Pulse, Lock, Lightning as Zap } from '@phosphor-icons/react';

/** Simulated terminal log messages */
export const securityTerminalMessages = [
  'Initializing defense protocols...',
  'Scanning file system integrity...',
  '[OK] Core files verified.',
  'Checking database for injection risks...',
  '[OK] Database sanitized.',
  'Monitoring traffic patterns...',
  'Threat detected: IP 192.168.x.x blocked.',
  'Firewall active. System secure.',
];

/** Threat intel cards */
export const securityThreatCards = [
  {
    icon: Pulse,
    title: 'Real-time monitoring',
    description: '24/7 surveillance of file changes, login attempts, and traffic spikes.',
    variant: 'red' as const,
  },
  {
    icon: Lock,
    title: 'Hardened core',
    description: 'Database encryption, salt key rotation, and strict file permissions.',
    variant: 'green' as const,
  },
  {
    icon: Zap,
    title: 'Rapid response',
    description: 'Immediate containment and cleanup if any breach attempts occur.',
    variant: 'accent' as const,
  },
];