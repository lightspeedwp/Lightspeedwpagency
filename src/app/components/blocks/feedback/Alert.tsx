/**
 * Alert Block Component
 * 
 * WordPress Block: core/group (with alert variation)
 * Style: .wp-block-alert
 */

import React from 'react';

export interface AlertProps {
  children: React.ReactNode;
  variant?: 'default' | 'info' | 'success' | 'warning' | 'error';
  title?: string;
  icon?: React.ReactNode;
  className?: string;
  dismissible?: boolean;
  onDismiss?: () => void;
}

export function Alert({ 
  children, 
  variant = 'default', 
  title, 
  icon,
  className = '',
  dismissible,
  onDismiss
}: AlertProps) {
  const [isVisible, setIsVisible] = React.useState(true);
  const variantClass = variant !== 'default' ? `is-style-${variant}` : '';
  
  if (!isVisible) return null;

  const handleDismiss = () => {
    setIsVisible(false);
    onDismiss?.();
  };
  
  return (
    <div className={`wp-block-alert ${variantClass} ${className}`.trim()} role="alert">
      {icon && <div className="wp-block-alert__icon">{icon}</div>}
      <div className="wp-block-alert__content">
        {title && <strong className="wp-block-alert__title">{title}</strong>}
        <div className="wp-block-alert__message">{children}</div>
      </div>
      {dismissible && (
        <button 
          className="wp-block-alert__dismiss" 
          onClick={handleDismiss} 
          aria-label="Dismiss"
        >
          ✕
        </button>
      )}
    </div>
  );
}

export function AlertTitle({ children, className = '' }: { children: React.ReactNode, className?: string }) {
  return <strong className={`wp-block-alert__title ${className}`.trim()}>{children}</strong>;
}

export function AlertDescription({ children, className = '' }: { children: React.ReactNode, className?: string }) {
  return <div className={`wp-block-alert__message ${className}`.trim()}>{children}</div>;
}
