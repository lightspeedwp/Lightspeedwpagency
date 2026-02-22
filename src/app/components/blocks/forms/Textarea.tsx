/**
 * Textarea Block Component
 */

import React from 'react';

export interface TextareaProps extends React.TextareaHTMLAttributes<HTMLTextAreaElement> {}

export const Textarea = React.forwardRef<HTMLTextAreaElement, TextareaProps>(
  ({ className = '', ...props }, ref) => {
    return (
      <textarea
        className={`wp-block-textarea ${className}`.trim()}
        ref={ref}
        {...props}
      />
    );
  }
);
Textarea.displayName = 'Textarea';
