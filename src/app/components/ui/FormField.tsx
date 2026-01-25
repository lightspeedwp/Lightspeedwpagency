/**
 * FormField Component
 * 
 * Enhanced form field with real-time validation indicators,
 * success states, and animated feedback.
 * 
 * Uses 100% design system compliance with CSS variables.
 * 
 * @example
 * <FormField
 *   label="Email Address"
 *   name="email"
 *   type="email"
 *   value={values.email}
 *   onChange={handleChange}
 *   onBlur={handleBlur}
 *   error={touched.email ? errors.email : undefined}
 *   showSuccess={touched.email && !errors.email}
 * />
 */

import { useState, useEffect } from 'react';
import { CheckCircle2, AlertCircle, Eye, EyeOff } from 'lucide-react';
import { useShake } from '../../hooks/useMicroInteractions';

interface FormFieldProps {
  /** Field label */
  label: string;
  /** Field name */
  name: string;
  /** Field type */
  type?: 'text' | 'email' | 'tel' | 'url' | 'password' | 'number';
  /** Field value */
  value: string;
  /** Placeholder text */
  placeholder?: string;
  /** Change handler */
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
  /** Blur handler */
  onBlur?: (e: React.FocusEvent<HTMLInputElement>) => void;
  /** Error message */
  error?: string;
  /** Show success indicator */
  showSuccess?: boolean;
  /** Disabled state */
  disabled?: boolean;
  /** Required field */
  required?: boolean;
  /** Help text */
  helpText?: string;
  /** Additional CSS classes */
  className?: string;
  /** Show character count */
  showCharCount?: boolean;
  /** Maximum length */
  maxLength?: number;
  /** Auto-focus on mount */
  autoFocus?: boolean;
}

export function FormField({
  label,
  name,
  type = 'text',
  value,
  placeholder,
  onChange,
  onBlur,
  error,
  showSuccess = false,
  disabled = false,
  required = false,
  helpText,
  className = '',
  showCharCount = false,
  maxLength,
  autoFocus = false,
}: FormFieldProps) {
  const [isFocused, setIsFocused] = useState(false);
  const [showPassword, setShowPassword] = useState(false);
  const [shakeProps, triggerShake] = useShake();

  // Trigger shake animation when error appears
  useEffect(() => {
    if (error) {
      triggerShake();
    }
  }, [error, triggerShake]);

  const hasValue = value && value.length > 0;
  const fieldId = `field-${name}`;
  const errorId = `${fieldId}-error`;
  const helpId = `${fieldId}-help`;

  // Get border color based on state
  const getBorderColor = () => {
    if (error) return 'var(--destructive)';
    if (showSuccess) return 'var(--success)';
    if (isFocused) return 'var(--ring)';
    return 'var(--border)';
  };

  // Get focus ring color
  const getFocusRingColor = () => {
    if (error) return 'var(--destructive)';
    if (showSuccess) return 'var(--success)';
    return 'var(--ring)';
  };

  const inputType = type === 'password' && showPassword ? 'text' : type;

  return (
    <div className={`flex flex-col gap-2 ${className}`} style={shakeProps.style}>
      {/* Label */}
      <label
        htmlFor={fieldId}
        style={{
          fontFamily: 'var(--font-primary)',
          fontSize: 'var(--text-base)',
          fontWeight: 'var(--font-weight-medium)',
          color: disabled ? 'var(--muted-foreground)' : 'var(--foreground)',
          display: 'flex',
          alignItems: 'center',
          gap: '4px',
        }}
      >
        {label}
        {required && (
          <span
            style={{ color: 'var(--destructive)', fontSize: 'var(--text-base)' }}
            aria-label="required"
          >
            *
          </span>
        )}
      </label>

      {/* Input Container */}
      <div style={{ position: 'relative' }}>
        {/* Input Field */}
        <input
          id={fieldId}
          name={name}
          type={inputType}
          value={value}
          placeholder={placeholder}
          onChange={onChange}
          onBlur={(e) => {
            setIsFocused(false);
            onBlur?.(e);
          }}
          onFocus={() => setIsFocused(true)}
          disabled={disabled}
          required={required}
          maxLength={maxLength}
          autoFocus={autoFocus}
          aria-invalid={!!error}
          aria-describedby={
            error ? errorId : helpText ? helpId : undefined
          }
          style={{
            width: '100%',
            padding: type === 'password' ? '12px 48px 12px 16px' : '12px 40px 12px 16px',
            fontFamily: 'var(--font-primary)',
            fontSize: 'var(--text-base)',
            fontWeight: 'var(--font-weight-regular)',
            color: disabled ? 'var(--muted-foreground)' : 'var(--foreground)',
            backgroundColor: disabled ? 'var(--muted)' : 'var(--background)',
            border: `2px solid ${getBorderColor()}`,
            borderRadius: 'var(--radius)',
            outline: 'none',
            transition: 'all 200ms cubic-bezier(0.4, 0, 0.2, 1)',
            boxShadow: isFocused
              ? `0 0 0 3px ${getFocusRingColor()}20`
              : 'none',
            cursor: disabled ? 'not-allowed' : 'text',
          }}
        />

        {/* Status Icon */}
        <div
          style={{
            position: 'absolute',
            right: type === 'password' ? '44px' : '12px',
            top: '50%',
            transform: 'translateY(-50%)',
            pointerEvents: 'none',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
          }}
        >
          {error && (
            <AlertCircle
              size={20}
              style={{
                color: 'var(--destructive)',
                animation: 'fadeIn 200ms ease-in-out',
              }}
              aria-hidden="true"
            />
          )}
          {showSuccess && !error && (
            <CheckCircle2
              size={20}
              style={{
                color: 'var(--success)',
                animation: 'fadeIn 200ms ease-in-out',
              }}
              aria-hidden="true"
            />
          )}
        </div>

        {/* Password Toggle */}
        {type === 'password' && (
          <button
            type="button"
            onClick={() => setShowPassword(!showPassword)}
            style={{
              position: 'absolute',
              right: '12px',
              top: '50%',
              transform: 'translateY(-50%)',
              background: 'none',
              border: 'none',
              cursor: 'pointer',
              padding: '4px',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              color: 'var(--muted-foreground)',
              transition: 'color 200ms ease',
              borderRadius: 'var(--radius-sm)',
            }}
            onMouseEnter={(e) => {
              e.currentTarget.style.color = 'var(--foreground)';
            }}
            onMouseLeave={(e) => {
              e.currentTarget.style.color = 'var(--muted-foreground)';
            }}
            aria-label={showPassword ? 'Hide password' : 'Show password'}
          >
            {showPassword ? <EyeOff size={20} /> : <Eye size={20} />}
          </button>
        )}
      </div>

      {/* Character Count */}
      {showCharCount && maxLength && (
        <div
          style={{
            display: 'flex',
            justifyContent: 'flex-end',
            fontFamily: 'var(--font-secondary)',
            fontSize: 'var(--text-small)',
            color:
              value.length > maxLength * 0.9
                ? 'var(--destructive)'
                : 'var(--muted-foreground)',
            transition: 'color 200ms ease',
          }}
        >
          {value.length} / {maxLength}
        </div>
      )}

      {/* Error Message */}
      {error && (
        <div
          id={errorId}
          role="alert"
          style={{
            display: 'flex',
            alignItems: 'flex-start',
            gap: '8px',
            padding: '8px 12px',
            backgroundColor: 'var(--destructive-bg)',
            border: '1px solid var(--destructive)',
            borderRadius: 'var(--radius)',
            fontFamily: 'var(--font-primary)',
            fontSize: 'var(--text-small)',
            color: 'var(--destructive)',
            animation: 'slideDown 200ms ease-out',
          }}
        >
          <AlertCircle
            size={16}
            style={{ flexShrink: 0, marginTop: '2px' }}
            aria-hidden="true"
          />
          <span>{error}</span>
        </div>
      )}

      {/* Help Text */}
      {helpText && !error && (
        <div
          id={helpId}
          style={{
            fontFamily: 'var(--font-secondary)',
            fontSize: 'var(--text-small)',
            color: 'var(--muted-foreground)',
            lineHeight: '1.5',
          }}
        >
          {helpText}
        </div>
      )}

      {/* Success Message (Optional) */}
      {showSuccess && !error && hasValue && (
        <div
          style={{
            display: 'flex',
            alignItems: 'center',
            gap: '8px',
            fontFamily: 'var(--font-primary)',
            fontSize: 'var(--text-small)',
            color: 'var(--success)',
            animation: 'fadeIn 200ms ease-in-out',
          }}
        >
          <CheckCircle2 size={16} aria-hidden="true" />
          <span>Looks good!</span>
        </div>
      )}

      <style>{`
        @keyframes fadeIn {
          from {
            opacity: 0;
            transform: scale(0.9);
          }
          to {
            opacity: 1;
            transform: scale(1);
          }
        }

        @keyframes slideDown {
          from {
            opacity: 0;
            transform: translateY(-8px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }

        @media (prefers-reduced-motion: reduce) {
          @keyframes fadeIn {
            from { opacity: 0; }
            to { opacity: 1; }
          }

          @keyframes slideDown {
            from { opacity: 0; }
            to { opacity: 1; }
          }
        }
      `}</style>
    </div>
  );
}

/**
 * TextAreaField Component
 * 
 * Enhanced textarea with validation indicators and character count.
 */
interface TextAreaFieldProps {
  label: string;
  name: string;
  value: string;
  placeholder?: string;
  onChange: (e: React.ChangeEvent<HTMLTextAreaElement>) => void;
  onBlur?: (e: React.FocusEvent<HTMLTextAreaElement>) => void;
  error?: string;
  showSuccess?: boolean;
  disabled?: boolean;
  required?: boolean;
  helpText?: string;
  rows?: number;
  maxLength?: number;
  showCharCount?: boolean;
  className?: string;
  autoFocus?: boolean;
}

export function TextAreaField({
  label,
  name,
  value,
  placeholder,
  onChange,
  onBlur,
  error,
  showSuccess = false,
  disabled = false,
  required = false,
  helpText,
  rows = 4,
  maxLength,
  showCharCount = false,
  className = '',
  autoFocus = false,
}: TextAreaFieldProps) {
  const [isFocused, setIsFocused] = useState(false);
  const [shakeProps, triggerShake] = useShake();

  useEffect(() => {
    if (error) {
      triggerShake();
    }
  }, [error, triggerShake]);

  const fieldId = `field-${name}`;
  const errorId = `${fieldId}-error`;
  const helpId = `${fieldId}-help`;
  
  // Ensure value is always a string
  const safeValue = value || '';

  const getBorderColor = () => {
    if (error) return 'var(--destructive)';
    if (showSuccess) return 'var(--success)';
    if (isFocused) return 'var(--ring)';
    return 'var(--border)';
  };

  const getFocusRingColor = () => {
    if (error) return 'var(--destructive)';
    if (showSuccess) return 'var(--success)';
    return 'var(--ring)';
  };

  return (
    <div className={`flex flex-col gap-2 ${className}`} style={shakeProps.style}>
      {/* Label */}
      <label
        htmlFor={fieldId}
        style={{
          fontFamily: 'var(--font-primary)',
          fontSize: 'var(--text-base)',
          fontWeight: 'var(--font-weight-medium)',
          color: disabled ? 'var(--muted-foreground)' : 'var(--foreground)',
          display: 'flex',
          alignItems: 'center',
          gap: '4px',
        }}
      >
        {label}
        {required && (
          <span
            style={{ color: 'var(--destructive)', fontSize: 'var(--text-base)' }}
            aria-label="required"
          >
            *
          </span>
        )}
      </label>

      {/* TextArea */}
      <textarea
        id={fieldId}
        name={name}
        value={safeValue}
        placeholder={placeholder}
        onChange={onChange}
        onBlur={(e) => {
          setIsFocused(false);
          onBlur?.(e);
        }}
        onFocus={() => setIsFocused(true)}
        disabled={disabled}
        required={required}
        rows={rows}
        maxLength={maxLength}
        autoFocus={autoFocus}
        aria-invalid={!!error}
        aria-describedby={error ? errorId : helpText ? helpId : undefined}
        style={{
          width: '100%',
          padding: '12px 16px',
          fontFamily: 'var(--font-primary)',
          fontSize: 'var(--text-base)',
          fontWeight: 'var(--font-weight-regular)',
          color: disabled ? 'var(--muted-foreground)' : 'var(--foreground)',
          backgroundColor: disabled ? 'var(--muted)' : 'var(--background)',
          border: `2px solid ${getBorderColor()}`,
          borderRadius: 'var(--radius)',
          outline: 'none',
          transition: 'all 200ms cubic-bezier(0.4, 0, 0.2, 1)',
          boxShadow: isFocused ? `0 0 0 3px ${getFocusRingColor()}20` : 'none',
          cursor: disabled ? 'not-allowed' : 'text',
          resize: 'vertical',
        }}
      />

      {/* Character Count */}
      {showCharCount && maxLength && (
        <div
          style={{
            display: 'flex',
            justifyContent: 'flex-end',
            fontFamily: 'var(--font-secondary)',
            fontSize: 'var(--text-small)',
            color:
              safeValue.length > maxLength * 0.9
                ? 'var(--destructive)'
                : 'var(--muted-foreground)',
            transition: 'color 200ms ease',
          }}
        >
          {safeValue.length} / {maxLength}
        </div>
      )}

      {/* Error Message */}
      {error && (
        <div
          id={errorId}
          role="alert"
          style={{
            display: 'flex',
            alignItems: 'flex-start',
            gap: '8px',
            padding: '8px 12px',
            backgroundColor: 'var(--destructive-bg)',
            border: '1px solid var(--destructive)',
            borderRadius: 'var(--radius)',
            fontFamily: 'var(--font-primary)',
            fontSize: 'var(--text-small)',
            color: 'var(--destructive)',
            animation: 'slideDown 200ms ease-out',
          }}
        >
          <AlertCircle
            size={16}
            style={{ flexShrink: 0, marginTop: '2px' }}
            aria-hidden="true"
          />
          <span>{error}</span>
        </div>
      )}

      {/* Help Text */}
      {helpText && !error && (
        <div
          id={helpId}
          style={{
            fontFamily: 'var(--font-secondary)',
            fontSize: 'var(--text-small)',
            color: 'var(--muted-foreground)',
            lineHeight: '1.5',
          }}
        >
          {helpText}
        </div>
      )}

      {/* Success Message */}
      {showSuccess && !error && safeValue.length > 0 && (
        <div
          style={{
            display: 'flex',
            alignItems: 'center',
            gap: '8px',
            fontFamily: 'var(--font-primary)',
            fontSize: 'var(--text-small)',
            color: 'var(--success)',
            animation: 'fadeIn 200ms ease-in-out',
          }}
        >
          <CheckCircle2 size={16} aria-hidden="true" />
          <span>Looks good!</span>
        </div>
      )}
    </div>
  );
}