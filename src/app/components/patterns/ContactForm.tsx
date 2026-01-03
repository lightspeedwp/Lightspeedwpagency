/**
 * Contact Form Pattern
 * 
 * WordPress Pattern: lsx-design/content/contact-form
 * 
 * A complete contact form with validation and success/error states.
 * Maps to WordPress Contact Form 7 or Gravity Forms.
 * 
 * Design Token Compliance:
 * - Typography: var(--text-*) only
 * - Colors: var(--*) semantic roles
 * - Spacing: Tailwind classes only
 * - Fonts: Lexend (headings), Manrope (body)
 * 
 * @see /guidelines/patterns/ContactForm.md
 */

import { Send, CheckCircle, AlertCircle } from 'lucide-react';
import { useState } from 'react';
import { Button } from '../blocks/design/Buttons';

export interface ContactFormProps {
  /** Form heading */
  heading?: string;
  /** Form description */
  description?: string;
  /** Show subject field (default: true) */
  showSubject?: boolean;
  /** Show company field (default: false) */
  showCompany?: boolean;
  /** Submit button text */
  submitText?: string;
  /** Success message */
  successMessage?: string;
  /** Error message */
  errorMessage?: string;
}

interface FormData {
  name: string;
  email: string;
  company?: string;
  subject?: string;
  message: string;
}

export function ContactForm({
  heading = "Get In Touch",
  description = "Have a question or ready to start a project? Fill out the form below and we'll get back to you within 24 hours.",
  showSubject = true,
  showCompany = false,
  submitText = "Send Message",
  successMessage = "Thank you! We've received your message and will respond within 24 hours.",
  errorMessage = "Something went wrong. Please try again or email us directly.",
}: ContactFormProps) {
  const [formData, setFormData] = useState<FormData>({
    name: '',
    email: '',
    company: '',
    subject: '',
    message: '',
  });
  const [status, setStatus] = useState<'idle' | 'submitting' | 'success' | 'error'>('idle');

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setStatus('submitting');

    // Simulate API call
    setTimeout(() => {
      console.log('Form submitted:', formData);
      setStatus('success');
      // Reset form
      setFormData({
        name: '',
        email: '',
        company: '',
        subject: '',
        message: '',
      });
      // Reset status after 5 seconds
      setTimeout(() => setStatus('idle'), 5000);
    }, 1500);
  };

  const inputStyles = {
    width: '100%',
    padding: '12px 16px',
    fontFamily: 'Lexend, sans-serif',
    fontSize: 'var(--text-base)',
    backgroundColor: 'var(--background)',
    color: 'var(--foreground)',
    border: '1px solid var(--border-soft)',
    borderRadius: 'var(--radius-lg)',
    outline: 'none',
    transition: 'all var(--transition-base)',
  };

  const labelStyles = {
    fontFamily: 'Lexend, sans-serif',
    fontSize: 'var(--text-base)',
    fontWeight: 'var(--font-weight-medium)',
    color: 'var(--foreground)',
    display: 'block',
    marginBottom: '8px',
  };

  return (
    <div className="w-full max-w-2xl mx-auto">
      {/* Header */}
      {(heading || description) && (
        <div className="text-center mb-8">
          {heading && (
            <h2
              style={{
                fontFamily: 'Lexend, sans-serif',
                fontSize: 'var(--text-h2)',
                fontWeight: 'var(--font-weight-semibold)',
                color: 'var(--foreground)',
                marginBottom: description ? '16px' : '0',
              }}
            >
              {heading}
            </h2>
          )}
          {description && (
            <p
              style={{
                fontFamily: 'Manrope, sans-serif',
                fontSize: 'var(--text-base)',
                color: 'var(--muted-foreground)',
              }}
            >
              {description}
            </p>
          )}
        </div>
      )}

      {/* Success Message */}
      {status === 'success' && (
        <div
          style={{
            backgroundColor: 'var(--success-soft)',
            border: '1px solid var(--success)',
            borderRadius: 'var(--radius-lg)',
            padding: '16px',
            marginBottom: '24px',
            display: 'flex',
            alignItems: 'start',
            gap: '12px',
          }}
        >
          <CheckCircle size={20} style={{ color: 'var(--success)', flexShrink: 0, marginTop: '2px' }} />
          <p
            style={{
              fontFamily: 'Manrope, sans-serif',
              fontSize: 'var(--text-base)',
              color: 'var(--success)',
              margin: 0,
            }}
          >
            {successMessage}
          </p>
        </div>
      )}

      {/* Error Message */}
      {status === 'error' && (
        <div
          style={{
            backgroundColor: 'var(--destructive-soft)',
            border: '1px solid var(--destructive)',
            borderRadius: 'var(--radius-lg)',
            padding: '16px',
            marginBottom: '24px',
            display: 'flex',
            alignItems: 'start',
            gap: '12px',
          }}
        >
          <AlertCircle size={20} style={{ color: 'var(--destructive)', flexShrink: 0, marginTop: '2px' }} />
          <p
            style={{
              fontFamily: 'Manrope, sans-serif',
              fontSize: 'var(--text-base)',
              color: 'var(--destructive)',
              margin: 0,
            }}
          >
            {errorMessage}
          </p>
        </div>
      )}

      {/* Form */}
      <form onSubmit={handleSubmit} className="space-y-6">
        {/* Name Field */}
        <div>
          <label htmlFor="name" style={labelStyles}>
            Name <span style={{ color: 'var(--destructive)' }}>*</span>
          </label>
          <input
            type="text"
            id="name"
            name="name"
            required
            value={formData.name}
            onChange={handleChange}
            style={inputStyles}
            onFocus={(e) => {
              e.currentTarget.style.borderColor = 'var(--primary)';
              e.currentTarget.style.outline = '2px solid var(--ring)';
              e.currentTarget.style.outlineOffset = '0px';
            }}
            onBlur={(e) => {
              e.currentTarget.style.borderColor = 'var(--border-soft)';
              e.currentTarget.style.outline = 'none';
            }}
          />
        </div>

        {/* Email Field */}
        <div>
          <label htmlFor="email" style={labelStyles}>
            Email <span style={{ color: 'var(--destructive)' }}>*</span>
          </label>
          <input
            type="email"
            id="email"
            name="email"
            required
            value={formData.email}
            onChange={handleChange}
            style={inputStyles}
            onFocus={(e) => {
              e.currentTarget.style.borderColor = 'var(--primary)';
              e.currentTarget.style.outline = '2px solid var(--ring)';
              e.currentTarget.style.outlineOffset = '0px';
            }}
            onBlur={(e) => {
              e.currentTarget.style.borderColor = 'var(--border-soft)';
              e.currentTarget.style.outline = 'none';
            }}
          />
        </div>

        {/* Company Field (Optional) */}
        {showCompany && (
          <div>
            <label htmlFor="company" style={labelStyles}>
              Company
            </label>
            <input
              type="text"
              id="company"
              name="company"
              value={formData.company}
              onChange={handleChange}
              style={inputStyles}
              onFocus={(e) => {
                e.currentTarget.style.borderColor = 'var(--primary)';
                e.currentTarget.style.outline = '2px solid var(--ring)';
                e.currentTarget.style.outlineOffset = '0px';
              }}
              onBlur={(e) => {
                e.currentTarget.style.borderColor = 'var(--border-soft)';
                e.currentTarget.style.outline = 'none';
              }}
            />
          </div>
        )}

        {/* Subject Field (Optional) */}
        {showSubject && (
          <div>
            <label htmlFor="subject" style={labelStyles}>
              Subject <span style={{ color: 'var(--destructive)' }}>*</span>
            </label>
            <input
              type="text"
              id="subject"
              name="subject"
              required
              value={formData.subject}
              onChange={handleChange}
              style={inputStyles}
              onFocus={(e) => {
                e.currentTarget.style.borderColor = 'var(--primary)';
                e.currentTarget.style.outline = '2px solid var(--ring)';
                e.currentTarget.style.outlineOffset = '0px';
              }}
              onBlur={(e) => {
                e.currentTarget.style.borderColor = 'var(--border-soft)';
                e.currentTarget.style.outline = 'none';
              }}
            />
          </div>
        )}

        {/* Message Field */}
        <div>
          <label htmlFor="message" style={labelStyles}>
            Message <span style={{ color: 'var(--destructive)' }}>*</span>
          </label>
          <textarea
            id="message"
            name="message"
            required
            rows={6}
            value={formData.message}
            onChange={handleChange}
            style={{
              ...inputStyles,
              resize: 'vertical',
              minHeight: '150px',
            }}
            onFocus={(e) => {
              e.currentTarget.style.borderColor = 'var(--primary)';
              e.currentTarget.style.outline = '2px solid var(--ring)';
              e.currentTarget.style.outlineOffset = '0px';
            }}
            onBlur={(e) => {
              e.currentTarget.style.borderColor = 'var(--border-soft)';
              e.currentTarget.style.outline = 'none';
            }}
          />
        </div>

        {/* Submit Button */}
        <Button
          type="submit"
          variant="default"
          size="lg"
          disabled={status === 'submitting'}
          className="w-full"
        >
          {status === 'submitting' ? (
            <>Sending...</>
          ) : (
            <>
              {submitText}
              <Send size={18} style={{ marginLeft: '8px' }} />
            </>
          )}
        </Button>
      </form>
    </div>
  );
}
