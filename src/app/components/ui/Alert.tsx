/**
 * Alert Component
 * 
 * Production-grade alert/banner messages.
 * 
 * Features:
 * - Multiple variants (info, success, warning, destructive)
 * - Icon support
 * - Dismissible option
 * - Title and description
 * - Action buttons
 * - Accessible
 * 
 * Design Token Compliance:
 * - Typography: var(--text-*) only
 * - Colors: var(--*) semantic roles
 * - Spacing: Tailwind classes only
 * - Fonts: Lexend (headings), Manrope (body)
 * 
 * @example
 * <Alert
 *   variant="success"
 *   title="Success"
 *   description="Your changes have been saved."
 *   dismissible
 * />
 */

import { useState } from 'react';
import { 
  AlertCircle, 
  CheckCircle2, 
  Info, 
  AlertTriangle, 
  X, 
  LucideIcon 
} from 'lucide-react';
import { Button } from '../blocks/design/Buttons';

export interface AlertProps {
  /** Variant */
  variant?: 'info' | 'success' | 'warning' | 'destructive';
  /** Alert title */
  title?: string;
  /** Alert description */
  description: string;
  /** Custom icon */
  icon?: LucideIcon;
  /** Dismissible */
  dismissible?: boolean;
  /** Dismiss handler */
  onDismiss?: () => void;
  /** Action button */
  action?: {
    label: string;
    onClick: () => void;
  };
  /** Show border */
  bordered?: boolean;
}

const variantConfig = {
  info: {
    backgroundColor: 'var(--info-soft)',
    borderColor: 'var(--info)',
    textColor: 'var(--info)',
    icon: Info,
  },
  success: {
    backgroundColor: 'var(--success-soft)',
    borderColor: 'var(--success)',
    textColor: 'var(--success)',
    icon: CheckCircle2,
  },
  warning: {
    backgroundColor: 'var(--warning-soft)',
    borderColor: 'var(--warning)',
    textColor: 'var(--warning)',
    icon: AlertTriangle,
  },
  destructive: {
    backgroundColor: 'var(--destructive-soft)',
    borderColor: 'var(--destructive)',
    textColor: 'var(--destructive)',
    icon: AlertCircle,
  },
};

export function Alert({
  variant = 'info',
  title,
  description,
  icon: CustomIcon,
  dismissible = false,
  onDismiss,
  action,
  bordered = true,
}: AlertProps) {
  const [isVisible, setIsVisible] = useState(true);

  const config = variantConfig[variant];
  const Icon = CustomIcon || config.icon;

  const handleDismiss = () => {
    setIsVisible(false);
    onDismiss?.();
  };

  if (!isVisible) return null;

  return (
    <div
      className="p-4"
      style={{
        backgroundColor: config.backgroundColor,
        border: bordered ? `1px solid ${config.borderColor}` : 'none',
        borderRadius: 'var(--radius-lg)',
      }}
      role="alert"
      aria-live="polite"
    >
      <div className="flex gap-3">
        {/* Icon */}
        <div
          className="flex-shrink-0"
          style={{
            color: config.textColor,
          }}
        >
          <Icon size={20} />
        </div>

        {/* Content */}
        <div className="flex-1 min-w-0">
          {title && (
            <h3
              className="mb-1"
              style={{
                fontFamily: 'var(--font-primary)',
                fontSize: 'var(--text-base)',
                fontWeight: 'var(--font-weight-semibold)',
                color: 'var(--foreground)',
                margin: 0,
              }}
            >
              {title}
            </h3>
          )}

          <p
            style={{
              fontFamily: 'var(--font-secondary)',
              fontSize: 'var(--text-base)',
              color: 'var(--foreground)',
              margin: 0,
              lineHeight: '1.5',
            }}
          >
            {description}
          </p>

          {/* Action button */}
          {action && (
            <div className="mt-3">
              <Button
                onClick={action.onClick}
                variant="outline"
                size="sm"
              >
                {action.label}
              </Button>
            </div>
          )}
        </div>

        {/* Dismiss button */}
        {dismissible && (
          <button
            onClick={handleDismiss}
            className="flex-shrink-0 p-1"
            style={{
              backgroundColor: 'transparent',
              color: 'var(--muted-foreground)',
              border: 'none',
              borderRadius: 'var(--radius)',
              cursor: 'pointer',
              transition: 'all 0.2s ease',
            }}
            onMouseEnter={(e) => {
              e.currentTarget.style.backgroundColor = 'var(--muted)';
              e.currentTarget.style.color = 'var(--foreground)';
            }}
            onMouseLeave={(e) => {
              e.currentTarget.style.backgroundColor = 'transparent';
              e.currentTarget.style.color = 'var(--muted-foreground)';
            }}
            aria-label="Dismiss alert"
          >
            <X size={18} />
          </button>
        )}
      </div>
    </div>
  );
}

/**
 * Alert List Component
 * 
 * Stack multiple alerts with spacing.
 */
export interface AlertListProps {
  /** Alerts */
  alerts: (AlertProps & { id: string })[];
  /** Remove alert handler */
  onRemove?: (id: string) => void;
}

export function AlertList({ alerts, onRemove }: AlertListProps) {
  return (
    <div className="space-y-4">
      {alerts.map((alert) => (
        <Alert
          key={alert.id}
          {...alert}
          dismissible
          onDismiss={() => onRemove?.(alert.id)}
        />
      ))}
    </div>
  );
}
