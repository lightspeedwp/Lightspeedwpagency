/**
 * Alert Component (Proxy)
 * 
 * Proxies to Alert Block Component.
 */

import { Alert as AlertBlock, AlertTitle, AlertDescription } from '../blocks/feedback/Alert';
import { Button } from '../blocks/design/Buttons';

export interface AlertProps {
  variant?: 'info' | 'success' | 'warning' | 'destructive' | 'default' | 'error';
  title?: string;
  description?: string;
  icon?: React.ReactNode;
  dismissible?: boolean;
  onDismiss?: () => void;
  action?: {
    label: string;
    onClick: () => void;
  };
  children?: React.ReactNode;
}

export function Alert({
  variant = 'info',
  title,
  description,
  icon,
  dismissible,
  onDismiss,
  action,
  children
}: AlertProps) {
  // Map destructive -> error for block compatibility if needed, or keep destructive if mapped in CSS
  const blockVariant = variant === 'destructive' ? 'error' : variant;

  return (
    <AlertBlock 
      variant={blockVariant} 
      title={title} 
      icon={icon} 
      dismissible={dismissible} 
      onDismiss={onDismiss}
    >
      {description}
      {children}
      {action && (
        <div className="wp-mt-3">
          <Button 
            variant="outline" 
            size="sm" 
            onClick={action.onClick}
          >
            {action.label}
          </Button>
        </div>
      )}
    </AlertBlock>
  );
}

export { AlertTitle, AlertDescription };
