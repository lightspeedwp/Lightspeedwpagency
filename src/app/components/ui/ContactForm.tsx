/**
 * Contact Form Component
 * 
 * Production-grade contact form with validation and submission.
 * 
 * Features:
 * - Field validation (required, email, phone)
 * - Real-time error messages
 * - Character count for textarea
 * - Submit button with loading state
 * - Success/error toast notifications
 * - Honeypot spam protection
 * - Accessible form labels and errors
 * 
 * Design Token Compliance:
 * - Typography: var(--text-*) only
 * - Colors: var(--*) semantic roles
 * - Spacing: Tailwind classes only
 * - Fonts: Lexend (headings), Manrope (body)
 * 
 * @example
 * <ContactForm
 *   onSubmit={handleSubmit}
 *   successMessage="Thank you for contacting us!"
 * />
 */

import { useState, FormEvent } from 'react';
import { Mail, Phone, User, MessageSquare, Send, CheckCircle2, AlertCircle } from 'lucide-react';
import { Button } from '../blocks/design/Buttons';
import { useToast } from '../../hooks/useToast';

export interface ContactFormData {
  name: string;
  email: string;
  phone?: string;
  subject: string;
  message: string;
}

export interface ContactFormProps {
  /** Submit handler */
  onSubmit: (data: ContactFormData) => Promise<void> | void;
  /** Success message */
  successMessage?: string;
  /** Show phone field */
  showPhone?: boolean;
  /** Maximum message length */
  maxMessageLength?: number;
  /** Initial values */
  initialValues?: Partial<ContactFormData>;
}

export function ContactForm({
  onSubmit,
  successMessage = 'Your message has been sent successfully!',
  showPhone = true,
  maxMessageLength = 1000,
  initialValues = {},
}: ContactFormProps) {
  const { showToast } = useToast();

  // Form state
  const [formData, setFormData] = useState<ContactFormData>({
    name: initialValues.name || '',
    email: initialValues.email || '',
    phone: initialValues.phone || '',
    subject: initialValues.subject || '',
    message: initialValues.message || '',
  });

  // Validation errors
  const [errors, setErrors] = useState<Partial<Record<keyof ContactFormData, string>>>({});

  // Form state
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);

  // Honeypot field (spam protection)
  const [honeypot, setHoneypot] = useState('');

  // Validate single field
  const validateField = (name: keyof ContactFormData, value: string): string => {
    switch (name) {
      case 'name':
        if (!value.trim()) return 'Name is required';
        if (value.trim().length < 2) return 'Name must be at least 2 characters';
        return '';

      case 'email':
        if (!value.trim()) return 'Email is required';
        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        if (!emailRegex.test(value)) return 'Please enter a valid email address';
        return '';

      case 'phone':
        if (!value.trim()) return ''; // Phone is optional
        const phoneRegex = /^[\d\s\-\+\(\)]+$/;
        if (!phoneRegex.test(value)) return 'Please enter a valid phone number';
        return '';

      case 'subject':
        if (!value.trim()) return 'Subject is required';
        if (value.trim().length < 3) return 'Subject must be at least 3 characters';
        return '';

      case 'message':
        if (!value.trim()) return 'Message is required';
        if (value.trim().length < 10) return 'Message must be at least 10 characters';
        if (value.length > maxMessageLength) return `Message must be less than ${maxMessageLength} characters`;
        return '';

      default:
        return '';
    }
  };

  // Handle input change
  const handleChange = (name: keyof ContactFormData, value: string) => {
    setFormData({ ...formData, [name]: value });
    
    // Clear error on change
    if (errors[name]) {
      setErrors({ ...errors, [name]: '' });
    }
  };

  // Handle blur (validate on blur)
  const handleBlur = (name: keyof ContactFormData) => {
    const error = validateField(name, formData[name]);
    if (error) {
      setErrors({ ...errors, [name]: error });
    }
  };

  // Validate all fields
  const validateForm = (): boolean => {
    const newErrors: Partial<Record<keyof ContactFormData, string>> = {};

    (Object.keys(formData) as Array<keyof ContactFormData>).forEach((key) => {
      const error = validateField(key, formData[key]);
      if (error) {
        newErrors[key] = error;
      }
    });

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  // Handle form submit
  const handleSubmit = async (e: FormEvent) => {
    e.preventDefault();

    // Check honeypot (spam protection)
    if (honeypot) {
      console.log('Spam detected');
      return;
    }

    // Validate form
    if (!validateForm()) {
      showToast({
        title: 'Validation Error',
        description: 'Please fix the errors in the form.',
        variant: 'destructive',
      });
      return;
    }

    // Submit form
    setIsSubmitting(true);

    try {
      await onSubmit(formData);

      // Success
      setIsSubmitted(true);
      showToast({
        title: 'Success!',
        description: successMessage,
        variant: 'default',
      });

      // Reset form after 2 seconds
      setTimeout(() => {
        setFormData({
          name: '',
          email: '',
          phone: '',
          subject: '',
          message: '',
        });
        setIsSubmitted(false);
      }, 2000);
    } catch (error) {
      showToast({
        title: 'Error',
        description: 'Something went wrong. Please try again.',
        variant: 'destructive',
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  // Success state
  if (isSubmitted) {
    return (
      <div
        className="p-8 text-center"
        style={{
          backgroundColor: 'var(--success-soft)',
          border: '2px solid var(--success)',
          borderRadius: 'var(--radius-xl)',
        }}
      >
        <div
          className="mb-4 mx-auto flex items-center justify-center"
          style={{
            width: '80px',
            height: '80px',
            backgroundColor: 'var(--success)',
            borderRadius: '50%',
          }}
        >
          <CheckCircle2 size={40} style={{ color: 'var(--success-foreground)' }} />
        </div>

        <h3
          className="mb-3"
          style={{
            fontFamily: 'Lexend, sans-serif',
            fontSize: 'var(--text-h4)',
            fontWeight: 'var(--font-weight-semibold)',
            color: 'var(--success)',
            margin: 0,
          }}
        >
          Message Sent!
        </h3>

        <p
          style={{
            fontFamily: 'Lexend, sans-serif',
            fontSize: 'var(--text-base)',
            color: 'var(--foreground)',
            margin: 0,
          }}
        >
          {successMessage}
        </p>
      </div>
    );
  }

  return (
    <form
      onSubmit={handleSubmit}
      className="space-y-6"
      noValidate
    >
      {/* Honeypot field (hidden from users, visible to bots) */}
      <input
        type="text"
        name="website"
        value={honeypot}
        onChange={(e) => setHoneypot(e.target.value)}
        style={{ display: 'none' }}
        tabIndex={-1}
        autoComplete="off"
      />

      {/* Name Field */}
      <div>
        <label
          htmlFor="name"
          style={{
            display: 'block',
            fontFamily: 'Lexend, sans-serif',
            fontSize: 'var(--text-base)',
            fontWeight: 'var(--font-weight-medium)',
            color: 'var(--foreground)',
            marginBottom: '8px',
          }}
        >
          Name <span style={{ color: 'var(--destructive)' }}>*</span>
        </label>

        <div className="relative">
          <div
            className="absolute left-3 top-1/2"
            style={{
              transform: 'translateY(-50%)',
              color: 'var(--muted-foreground)',
              pointerEvents: 'none',
            }}
          >
            <User size={20} />
          </div>

          <input
            type="text"
            id="name"
            name="name"
            value={formData.name}
            onChange={(e) => handleChange('name', e.target.value)}
            onBlur={() => handleBlur('name')}
            placeholder="John Doe"
            required
            aria-invalid={!!errors.name}
            aria-describedby={errors.name ? 'name-error' : undefined}
            style={{
              width: '100%',
              padding: '12px 16px 12px 44px',
              fontFamily: 'Lexend, sans-serif',
              fontSize: 'var(--text-base)',
              color: 'var(--foreground)',
              backgroundColor: 'var(--background)',
              border: `2px solid ${errors.name ? 'var(--destructive)' : 'var(--border)'}`,
              borderRadius: 'var(--radius-lg)',
              outline: 'none',
              transition: 'all 0.2s ease',
            }}
            onFocus={(e) => {
              if (!errors.name) {
                e.target.style.borderColor = 'var(--primary)';
              }
            }}
            onBlur={(e) => {
              handleBlur('name');
              if (!errors.name) {
                e.target.style.borderColor = 'var(--border)';
              }
            }}
          />
        </div>

        {errors.name && (
          <p
            id="name-error"
            className="flex items-center gap-1 mt-2"
            style={{
              fontFamily: 'Manrope, sans-serif',
              fontSize: 'var(--text-small)',
              color: 'var(--destructive)',
              margin: 0,
            }}
          >
            <AlertCircle size={14} />
            {errors.name}
          </p>
        )}
      </div>

      {/* Email Field */}
      <div>
        <label
          htmlFor="email"
          style={{
            display: 'block',
            fontFamily: 'Lexend, sans-serif',
            fontSize: 'var(--text-base)',
            fontWeight: 'var(--font-weight-medium)',
            color: 'var(--foreground)',
            marginBottom: '8px',
          }}
        >
          Email <span style={{ color: 'var(--destructive)' }}>*</span>
        </label>

        <div className="relative">
          <div
            className="absolute left-3 top-1/2"
            style={{
              transform: 'translateY(-50%)',
              color: 'var(--muted-foreground)',
              pointerEvents: 'none',
            }}
          >
            <Mail size={20} />
          </div>

          <input
            type="email"
            id="email"
            name="email"
            value={formData.email}
            onChange={(e) => handleChange('email', e.target.value)}
            onBlur={() => handleBlur('email')}
            placeholder="john@example.com"
            required
            aria-invalid={!!errors.email}
            aria-describedby={errors.email ? 'email-error' : undefined}
            style={{
              width: '100%',
              padding: '12px 16px 12px 44px',
              fontFamily: 'Lexend, sans-serif',
              fontSize: 'var(--text-base)',
              color: 'var(--foreground)',
              backgroundColor: 'var(--background)',
              border: `2px solid ${errors.email ? 'var(--destructive)' : 'var(--border)'}`,
              borderRadius: 'var(--radius-lg)',
              outline: 'none',
              transition: 'all 0.2s ease',
            }}
            onFocus={(e) => {
              if (!errors.email) {
                e.target.style.borderColor = 'var(--primary)';
              }
            }}
            onBlur={(e) => {
              handleBlur('email');
              if (!errors.email) {
                e.target.style.borderColor = 'var(--border)';
              }
            }}
          />
        </div>

        {errors.email && (
          <p
            id="email-error"
            className="flex items-center gap-1 mt-2"
            style={{
              fontFamily: 'Manrope, sans-serif',
              fontSize: 'var(--text-small)',
              color: 'var(--destructive)',
              margin: 0,
            }}
          >
            <AlertCircle size={14} />
            {errors.email}
          </p>
        )}
      </div>

      {/* Phone Field (optional) */}
      {showPhone && (
        <div>
          <label
            htmlFor="phone"
            style={{
              display: 'block',
              fontFamily: 'Lexend, sans-serif',
              fontSize: 'var(--text-base)',
              fontWeight: 'var(--font-weight-medium)',
              color: 'var(--foreground)',
              marginBottom: '8px',
            }}
          >
            Phone <span style={{ color: 'var(--muted-foreground)', fontWeight: 'normal' }}>(optional)</span>
          </label>

          <div className="relative">
            <div
              className="absolute left-3 top-1/2"
              style={{
                transform: 'translateY(-50%)',
                color: 'var(--muted-foreground)',
                pointerEvents: 'none',
              }}
            >
              <Phone size={20} />
            </div>

            <input
              type="tel"
              id="phone"
              name="phone"
              value={formData.phone}
              onChange={(e) => handleChange('phone', e.target.value)}
              onBlur={() => handleBlur('phone')}
              placeholder="+1 (555) 123-4567"
              aria-invalid={!!errors.phone}
              aria-describedby={errors.phone ? 'phone-error' : undefined}
              style={{
                width: '100%',
                padding: '12px 16px 12px 44px',
                fontFamily: 'Lexend, sans-serif',
                fontSize: 'var(--text-base)',
                color: 'var(--foreground)',
                backgroundColor: 'var(--background)',
                border: `2px solid ${errors.phone ? 'var(--destructive)' : 'var(--border)'}`,
                borderRadius: 'var(--radius-lg)',
                outline: 'none',
                transition: 'all 0.2s ease',
              }}
              onFocus={(e) => {
                if (!errors.phone) {
                  e.target.style.borderColor = 'var(--primary)';
                }
              }}
              onBlur={(e) => {
                handleBlur('phone');
                if (!errors.phone) {
                  e.target.style.borderColor = 'var(--border)';
                }
              }}
            />
          </div>

          {errors.phone && (
            <p
              id="phone-error"
              className="flex items-center gap-1 mt-2"
              style={{
                fontFamily: 'Manrope, sans-serif',
                fontSize: 'var(--text-small)',
                color: 'var(--destructive)',
                margin: 0,
              }}
            >
              <AlertCircle size={14} />
              {errors.phone}
            </p>
          )}
        </div>
      )}

      {/* Subject Field */}
      <div>
        <label
          htmlFor="subject"
          style={{
            display: 'block',
            fontFamily: 'Lexend, sans-serif',
            fontSize: 'var(--text-base)',
            fontWeight: 'var(--font-weight-medium)',
            color: 'var(--foreground)',
            marginBottom: '8px',
          }}
        >
          Subject <span style={{ color: 'var(--destructive)' }}>*</span>
        </label>

        <div className="relative">
          <div
            className="absolute left-3 top-1/2"
            style={{
              transform: 'translateY(-50%)',
              color: 'var(--muted-foreground)',
              pointerEvents: 'none',
            }}
          >
            <MessageSquare size={20} />
          </div>

          <input
            type="text"
            id="subject"
            name="subject"
            value={formData.subject}
            onChange={(e) => handleChange('subject', e.target.value)}
            onBlur={() => handleBlur('subject')}
            placeholder="How can we help you?"
            required
            aria-invalid={!!errors.subject}
            aria-describedby={errors.subject ? 'subject-error' : undefined}
            style={{
              width: '100%',
              padding: '12px 16px 12px 44px',
              fontFamily: 'Lexend, sans-serif',
              fontSize: 'var(--text-base)',
              color: 'var(--foreground)',
              backgroundColor: 'var(--background)',
              border: `2px solid ${errors.subject ? 'var(--destructive)' : 'var(--border)'}`,
              borderRadius: 'var(--radius-lg)',
              outline: 'none',
              transition: 'all 0.2s ease',
            }}
            onFocus={(e) => {
              if (!errors.subject) {
                e.target.style.borderColor = 'var(--primary)';
              }
            }}
            onBlur={(e) => {
              handleBlur('subject');
              if (!errors.subject) {
                e.target.style.borderColor = 'var(--border)';
              }
            }}
          />
        </div>

        {errors.subject && (
          <p
            id="subject-error"
            className="flex items-center gap-1 mt-2"
            style={{
              fontFamily: 'Manrope, sans-serif',
              fontSize: 'var(--text-small)',
              color: 'var(--destructive)',
              margin: 0,
            }}
          >
            <AlertCircle size={14} />
            {errors.subject}
          </p>
        )}
      </div>

      {/* Message Field */}
      <div>
        <div className="flex items-center justify-between mb-2">
          <label
            htmlFor="message"
            style={{
              fontFamily: 'Lexend, sans-serif',
              fontSize: 'var(--text-base)',
              fontWeight: 'var(--font-weight-medium)',
              color: 'var(--foreground)',
            }}
          >
            Message <span style={{ color: 'var(--destructive)' }}>*</span>
          </label>

          <span
            style={{
              fontFamily: 'Manrope, sans-serif',
              fontSize: 'var(--text-small)',
              color: formData.message.length > maxMessageLength ? 'var(--destructive)' : 'var(--muted-foreground)',
            }}
          >
            {formData.message.length}/{maxMessageLength}
          </span>
        </div>

        <textarea
          id="message"
          name="message"
          value={formData.message}
          onChange={(e) => handleChange('message', e.target.value)}
          onBlur={() => handleBlur('message')}
          placeholder="Tell us more about your inquiry..."
          rows={6}
          required
          aria-invalid={!!errors.message}
          aria-describedby={errors.message ? 'message-error' : undefined}
          style={{
            width: '100%',
            padding: '12px 16px',
            fontFamily: 'Lexend, sans-serif',
            fontSize: 'var(--text-base)',
            color: 'var(--foreground)',
            backgroundColor: 'var(--background)',
            border: `2px solid ${errors.message ? 'var(--destructive)' : 'var(--border)'}`,
            borderRadius: 'var(--radius-lg)',
            outline: 'none',
            resize: 'vertical',
            transition: 'all 0.2s ease',
          }}
          onFocus={(e) => {
            if (!errors.message) {
              e.target.style.borderColor = 'var(--primary)';
            }
          }}
          onBlur={(e) => {
            handleBlur('message');
            if (!errors.message) {
              e.target.style.borderColor = 'var(--border)';
            }
          }}
        />

        {errors.message && (
          <p
            id="message-error"
            className="flex items-center gap-1 mt-2"
            style={{
              fontFamily: 'Manrope, sans-serif',
              fontSize: 'var(--text-small)',
              color: 'var(--destructive)',
              margin: 0,
            }}
          >
            <AlertCircle size={14} />
            {errors.message}
          </p>
        )}
      </div>

      {/* Submit Button */}
      <div className="flex gap-3">
        <Button
          type="submit"
          variant="default"
          disabled={isSubmitting}
          className="flex-1"
        >
          {isSubmitting ? (
            <>
              <div
                style={{
                  width: '16px',
                  height: '16px',
                  border: '2px solid var(--primary-foreground)',
                  borderTopColor: 'transparent',
                  borderRadius: '50%',
                  animation: 'spin 0.6s linear infinite',
                }}
              />
              Sending...
            </>
          ) : (
            <>
              <Send size={18} />
              Send Message
            </>
          )}
        </Button>
      </div>

      {/* Privacy Notice */}
      <p
        style={{
          fontFamily: 'Manrope, sans-serif',
          fontSize: 'var(--text-small)',
          color: 'var(--muted-foreground)',
          textAlign: 'center',
          margin: 0,
        }}
      >
        We'll never share your information with third parties.
      </p>
    </form>
  );
}
