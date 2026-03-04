/**
 * Form Field Block Component
 * 
 * WordPress Block: forms/form-field
 * 
 * Enhanced form field with real-time validation indicators.
 * 
 * @see /src/app/utils/icon-map.ts
 * @see /src/styles/blocks/forms/form-field.css
 */

import React, { useState, useEffect } from 'react';
import { CheckCircle as CheckCircle2, WarningCircle as AlertCircle, Eye, EyeSlash as EyeOff } from '@phosphor-icons/react';
import { useShake } from '../../../hooks/useMicroInteractions';

export interface FormFieldProps {
  label: string;
  name: string;
  type?: 'text' | 'email' | 'tel' | 'url' | 'password' | 'number';
  value: string;
  placeholder?: string;
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
  onBlur?: (e: React.FocusEvent<HTMLInputElement>) => void;
  error?: string;
  showSuccess?: boolean;
  disabled?: boolean;
  required?: boolean;
  helpText?: string;
  className?: string;
  showCharCount?: boolean;
  maxLength?: number;
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

  useEffect(() => {
    if (error) {
      triggerShake();
    }
  }, [error, triggerShake]);

  const hasValue = value && value.length > 0;
  const fieldId = `field-${name}`;
  const errorId = `${fieldId}-error`;
  const helpId = `${fieldId}-help`;

  const inputType = type === 'password' && showPassword ? 'text' : type;

  // Compute classes based on state
  const inputClasses = [
    'wp-block-form-field__input',
    type === 'password' ? 'wp-block-form-field__input--password' : '',
    error ? 'wp-block-form-field__input--error' : '',
    !error && showSuccess ? 'wp-block-form-field__input--success' : '',
    disabled ? 'wp-block-form-field__input--disabled' : ''
  ].filter(Boolean).join(' ');

  return (
    <div className={`wp-block-form-field ${className}`} style={shakeProps.style}>
      {/* Label */}
      <label
        htmlFor={fieldId}
        className={`wp-block-form-field__label ${disabled ? 'wp-block-form-field__label--disabled' : ''}`}
      >
        {label}
        {required && (
          <span className="wp-block-form-field__required" aria-label="required">*</span>
        )}
      </label>

      {/* Input Container */}
      <div className="wp-block-form-field__container">
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
          aria-describedby={error ? errorId : helpText ? helpId : undefined}
          className={inputClasses}
        />

        {/* Status Icon */}
        <div className={`wp-block-form-field__icon wp-block-form-field__icon--status ${type === 'password' ? 'wp-block-form-field__icon--password' : ''}`}>
          {error && (
            <AlertCircle
              size={20}
              className="wp-block-form-field__icon-svg--error"
              aria-hidden="true"
            />
          )}
          {showSuccess && !error && (
            <CheckCircle2
              size={20}
              className="wp-block-form-field__icon-svg--success"
              aria-hidden="true"
            />
          )}
        </div>

        {/* Password Toggle */}
        {type === 'password' && (
          <button
            type="button"
            onClick={() => setShowPassword(!showPassword)}
            className="wp-block-form-field__password-toggle"
            aria-label={showPassword ? 'Hide password' : 'Show password'}
          >
            {showPassword ? <EyeOff size={20} /> : <Eye size={20} />}
          </button>
        )}
      </div>

      {/* Character Count */}
      {showCharCount && maxLength && (
        <div className={`wp-block-form-field__char-count ${value.length > maxLength * 0.9 ? 'wp-block-form-field__char-count--warning' : ''}`}>
          {value.length} / {maxLength}
        </div>
      )}

      {/* Error Message */}
      {error && (
        <div
          id={errorId}
          role="alert"
          className="wp-block-form-field__message wp-block-form-field__message--error"
        >
          <AlertCircle size={16} style={{ flexShrink: 0, marginTop: '2px' }} aria-hidden="true" />
          <span>{error}</span>
        </div>
      )}

      {/* Help Text */}
      {helpText && !error && (
        <div id={helpId} className="wp-block-form-field__help-text">
          {helpText}
        </div>
      )}

      {/* Success Message */}
      {showSuccess && !error && hasValue && (
        <div className="wp-block-form-field__message wp-block-form-field__message--success">
          <CheckCircle2 size={16} aria-hidden="true" />
          <span>Looks good!</span>
        </div>
      )}
    </div>
  );
}

export interface TextAreaFieldProps {
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
  const safeValue = value || '';

  const textareaClasses = [
    'wp-block-form-field__textarea',
    error ? 'wp-block-form-field__textarea--error' : '',
    !error && showSuccess ? 'wp-block-form-field__textarea--success' : '',
    disabled ? 'wp-block-form-field__textarea--disabled' : ''
  ].filter(Boolean).join(' ');

  return (
    <div className={`wp-block-form-field ${className}`} style={shakeProps.style}>
      <label
        htmlFor={fieldId}
        className={`wp-block-form-field__label ${disabled ? 'wp-block-form-field__label--disabled' : ''}`}
      >
        {label}
        {required && (
          <span className="wp-block-form-field__required" aria-label="required">*</span>
        )}
      </label>

      <div className="wp-block-form-field__container">
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
          className={textareaClasses}
        />
      </div>

      {showCharCount && maxLength && (
        <div className={`wp-block-form-field__char-count ${safeValue.length > maxLength * 0.9 ? 'wp-block-form-field__char-count--warning' : ''}`}>
          {safeValue.length} / {maxLength}
        </div>
      )}

      {error && (
        <div
          id={errorId}
          role="alert"
          className="wp-block-form-field__message wp-block-form-field__message--error"
        >
          <AlertCircle size={16} style={{ flexShrink: 0, marginTop: '2px' }} aria-hidden="true" />
          <span>{error}</span>
        </div>
      )}

      {helpText && !error && (
        <div id={helpId} className="wp-block-form-field__help-text">
          {helpText}
        </div>
      )}

      {showSuccess && !error && safeValue.length > 0 && (
        <div className="wp-block-form-field__message wp-block-form-field__message--success">
          <CheckCircle2 size={16} aria-hidden="true" />
          <span>Looks good!</span>
        </div>
      )}
    </div>
  );
}