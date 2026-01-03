/**
 * Empty States Library
 * 
 * Provides empty state components for various scenarios:
 * - No results (search, filter)
 * - No data (first use)
 * - Error states (404, 500)
 * - Maintenance mode
 * - Coming soon
 * - No permissions
 * 
 * Design System Compliance:
 * - Uses CSS variables for all colors
 * - Uses Lexend for headings
 * - Uses Manrope for body text
 * - WCAG 2.1 AA compliant
 * 
 * @example
 * <EmptyStateNoResults
 *   searchTerm="react components"
 *   onClearSearch={handleClear}
 * />
 */

import { ReactNode } from 'react';

export interface EmptyStateProps {
  /** Icon or illustration */
  icon?: ReactNode;
  /** Emoji icon (simpler alternative) */
  emoji?: string;
  /** Heading text */
  heading: string;
  /** Description text */
  description?: string;
  /** Primary action */
  action?: {
    label: string;
    onClick: () => void;
  };
  /** Secondary action */
  secondaryAction?: {
    label: string;
    onClick: () => void;
  };
}

/**
 * Base Empty State Component
 */
export function EmptyState({ icon, emoji, heading, description, action, secondaryAction }: EmptyStateProps) {
  return (
    <div
      style={{
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'center',
        textAlign: 'center',
        padding: '4rem 2rem',
        maxWidth: '600px',
        margin: '0 auto',
      }}
    >
      {/* Icon */}
      {emoji && (
        <div
          style={{
            fontSize: '4rem',
            marginBottom: '1.5rem',
          }}
          aria-hidden="true"
        >
          {emoji}
        </div>
      )}

      {icon && (
        <div
          style={{
            marginBottom: '1.5rem',
            color: 'var(--muted-foreground)',
          }}
        >
          {icon}
        </div>
      )}

      {/* Heading */}
      <h2
        style={{
          fontFamily: 'Lexend, sans-serif',
          fontSize: 'var(--text-h3)',
          fontWeight: '500',
          color: 'var(--foreground)',
          marginBottom: '0.75rem',
        }}
      >
        {heading}
      </h2>

      {/* Description */}
      {description && (
        <p
          style={{
            fontFamily: 'Manrope, sans-serif',
            fontSize: 'var(--text-base)',
            color: 'var(--muted-foreground)',
            marginBottom: '2rem',
            maxWidth: '500px',
          }}
        >
          {description}
        </p>
      )}

      {/* Actions */}
      {(action || secondaryAction) && (
        <div
          style={{
            display: 'flex',
            gap: '1rem',
            flexWrap: 'wrap',
            justifyContent: 'center',
          }}
        >
          {action && (
            <button
              onClick={action.onClick}
              style={{
                padding: '12px 24px',
                fontFamily: 'Lexend, sans-serif',
                fontSize: 'var(--text-base)',
                fontWeight: '500',
                backgroundColor: 'var(--primary)',
                color: 'var(--primary-foreground)',
                border: 'none',
                borderRadius: 'var(--radius)',
                cursor: 'pointer',
                transition: 'all 0.2s ease',
                minHeight: '48px',
              }}
            >
              {action.label}
            </button>
          )}

          {secondaryAction && (
            <button
              onClick={secondaryAction.onClick}
              style={{
                padding: '12px 24px',
                fontFamily: 'Lexend, sans-serif',
                fontSize: 'var(--text-base)',
                fontWeight: '500',
                backgroundColor: 'var(--background)',
                color: 'var(--foreground)',
                border: '1px solid var(--border)',
                borderRadius: 'var(--radius)',
                cursor: 'pointer',
                transition: 'all 0.2s ease',
                minHeight: '48px',
              }}
            >
              {secondaryAction.label}
            </button>
          )}
        </div>
      )}
    </div>
  );
}

/**
 * No Search Results Empty State
 */
export interface EmptyStateNoResultsProps {
  searchTerm?: string;
  onClearSearch?: () => void;
  onTryAgain?: () => void;
}

export function EmptyStateNoResults({ searchTerm, onClearSearch, onTryAgain }: EmptyStateNoResultsProps) {
  return (
    <EmptyState
      emoji="🔍"
      heading="No results found"
      description={
        searchTerm
          ? `We couldn't find any results for "${searchTerm}". Try adjusting your search or clearing filters.`
          : "We couldn't find any results. Try adjusting your search criteria."
      }
      action={onClearSearch ? { label: 'Clear Search', onClick: onClearSearch } : undefined}
      secondaryAction={onTryAgain ? { label: 'Try Again', onClick: onTryAgain } : undefined}
    />
  );
}

/**
 * No Data (First Use) Empty State
 */
export interface EmptyStateNoDataProps {
  entityName?: string;
  onCreate?: () => void;
  onImport?: () => void;
}

export function EmptyStateNoData({ entityName = 'items', onCreate, onImport }: EmptyStateNoDataProps) {
  return (
    <EmptyState
      emoji="📋"
      heading={`No ${entityName} yet`}
      description={`Get started by creating your first ${entityName.toLowerCase()}. You can also import existing ${entityName.toLowerCase()} if you have them.`}
      action={onCreate ? { label: `Create ${entityName}`, onClick: onCreate } : undefined}
      secondaryAction={onImport ? { label: 'Import', onClick: onImport } : undefined}
    />
  );
}

/**
 * 404 Error Empty State
 */
export interface EmptyState404Props {
  onGoHome?: () => void;
  onGoBack?: () => void;
}

export function EmptyState404({ onGoHome, onGoBack }: EmptyState404Props) {
  return (
    <EmptyState
      emoji="🔍"
      heading="Page not found"
      description="The page you're looking for doesn't exist or has been moved. Please check the URL or navigate back to the homepage."
      action={onGoHome ? { label: 'Go to Homepage', onClick: onGoHome } : undefined}
      secondaryAction={onGoBack ? { label: 'Go Back', onClick: onGoBack } : undefined}
    />
  );
}

/**
 * 500 Error Empty State
 */
export interface EmptyState500Props {
  onRetry?: () => void;
  onContactSupport?: () => void;
}

export function EmptyState500({ onRetry, onContactSupport }: EmptyState500Props) {
  return (
    <EmptyState
      emoji="⚠️"
      heading="Something went wrong"
      description="We're experiencing technical difficulties. Our team has been notified and is working on a fix. Please try again later."
      action={onRetry ? { label: 'Try Again', onClick: onRetry } : undefined}
      secondaryAction={onContactSupport ? { label: 'Contact Support', onClick: onContactSupport } : undefined}
    />
  );
}

/**
 * Maintenance Mode Empty State
 */
export interface EmptyStateMaintenanceProps {
  estimatedTime?: string;
  onNotifyMe?: () => void;
}

export function EmptyStateMaintenance({ estimatedTime, onNotifyMe }: EmptyStateMaintenanceProps) {
  return (
    <EmptyState
      emoji="🔧"
      heading="We'll be back soon"
      description={
        estimatedTime
          ? `We're performing scheduled maintenance. Estimated downtime: ${estimatedTime}. Thank you for your patience.`
          : "We're performing scheduled maintenance and will be back online shortly. Thank you for your patience."
      }
      action={onNotifyMe ? { label: 'Notify Me When Ready', onClick: onNotifyMe } : undefined}
    />
  );
}

/**
 * Coming Soon Empty State
 */
export interface EmptyStateComingSoonProps {
  featureName?: string;
  onNotifyMe?: () => void;
  onLearnMore?: () => void;
}

export function EmptyStateComingSoon({ featureName, onNotifyMe, onLearnMore }: EmptyStateComingSoonProps) {
  return (
    <EmptyState
      emoji="🚀"
      heading={featureName ? `${featureName} coming soon` : 'Coming soon'}
      description="We're working hard to bring you this feature. Stay tuned for updates!"
      action={onNotifyMe ? { label: 'Notify Me', onClick: onNotifyMe } : undefined}
      secondaryAction={onLearnMore ? { label: 'Learn More', onClick: onLearnMore } : undefined}
    />
  );
}

/**
 * No Permissions Empty State
 */
export interface EmptyStateNoPermissionsProps {
  requiredPermission?: string;
  onRequestAccess?: () => void;
  onContactAdmin?: () => void;
}

export function EmptyStateNoPermissions({ requiredPermission, onRequestAccess, onContactAdmin }: EmptyStateNoPermissionsProps) {
  return (
    <EmptyState
      emoji="🔒"
      heading="Access denied"
      description={
        requiredPermission
          ? `You don't have permission to view this content. Required permission: ${requiredPermission}.`
          : "You don't have permission to view this content. Please contact your administrator for access."
      }
      action={onRequestAccess ? { label: 'Request Access', onClick: onRequestAccess } : undefined}
      secondaryAction={onContactAdmin ? { label: 'Contact Admin', onClick: onContactAdmin } : undefined}
    />
  );
}

/**
 * Offline Empty State
 */
export interface EmptyStateOfflineProps {
  onRetry?: () => void;
}

export function EmptyStateOffline({ onRetry }: EmptyStateOfflineProps) {
  return (
    <EmptyState
      emoji="📡"
      heading="No internet connection"
      description="It looks like you're offline. Please check your internet connection and try again."
      action={onRetry ? { label: 'Retry', onClick: onRetry } : undefined}
    />
  );
}

/**
 * Empty Cart State (E-commerce)
 */
export interface EmptyStateCartProps {
  onStartShopping?: () => void;
}

export function EmptyStateCart({ onStartShopping }: EmptyStateCartProps) {
  return (
    <EmptyState
      emoji="🛒"
      heading="Your cart is empty"
      description="Looks like you haven't added anything to your cart yet. Start shopping to find products you'll love!"
      action={onStartShopping ? { label: 'Start Shopping', onClick: onStartShopping } : undefined}
    />
  );
}

/**
 * Empty Favorites State
 */
export interface EmptyStateFavoritesProps {
  onBrowse?: () => void;
}

export function EmptyStateFavorites({ onBrowse }: EmptyStateFavoritesProps) {
  return (
    <EmptyState
      emoji="❤️"
      heading="No favorites yet"
      description="Save items you love to easily find them later. Click the heart icon on any item to add it to your favorites."
      action={onBrowse ? { label: 'Browse Items', onClick: onBrowse } : undefined}
    />
  );
}

/**
 * Empty Inbox State
 */
export interface EmptyStateInboxProps {
  onCompose?: () => void;
}

export function EmptyStateInbox({ onCompose }: EmptyStateInboxProps) {
  return (
    <EmptyState
      emoji="📬"
      heading="Inbox zero!"
      description="You're all caught up. No new messages at this time."
      action={onCompose ? { label: 'Compose Message', onClick: onCompose } : undefined}
    />
  );
}
