/**
 * Contact Form Pattern
 * 
 * Full-featured contact form with validation and success/error states.
 * Maps to WordPress pattern: lsx-design/forms/contact
 * 
 * **Design Token Compliance:**
 * - Uses /src/styles/patterns/contact-form.css
 * - 100% CSS variables
 * - BEM naming
 */

import { Send, CheckCircle, AlertCircle } from '@phosphor-icons/react';
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
      // console.log('Form submitted:', formData);
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

  return (
    <div className="contact-form">
      {/* Header */}
      {(heading || description) && (
        <div className="contact-form__header">
          {heading && (
            <h2 className={`contact-form__title ${description ? 'contact-form__title--with-desc' : ''}`}>
              {heading}
            </h2>
          )}
          {description && (
            <p className="contact-form__description">
              {description}
            </p>
          )}
        </div>
      )}

      {/* Success Message */}
      {status === 'success' && (
        <div className="contact-form__status contact-form__status--success">
          <CheckCircle size={20} className="contact-form__status-icon contact-form__status-icon--success" />
          <p className="contact-form__status-text contact-form__status-text--success">
            {successMessage}
          </p>
        </div>
      )}

      {/* Error Message */}
      {status === 'error' && (
        <div className="contact-form__status contact-form__status--error">
          <AlertCircle size={20} className="contact-form__status-icon contact-form__status-icon--error" />
          <p className="contact-form__status-text contact-form__status-text--error">
            {errorMessage}
          </p>
        </div>
      )}

      {/* Form */}
      <form onSubmit={handleSubmit} className="contact-form__fields">
        {/* Name Field */}
        <div className="contact-form__group">
          <label htmlFor="name" className="contact-form__label">
            Name <span className="contact-form__required">*</span>
          </label>
          <input
            type="text"
            id="name"
            name="name"
            required
            value={formData.name}
            onChange={handleChange}
            className="contact-form__input"
          />
        </div>

        {/* Email Field */}
        <div className="contact-form__group">
          <label htmlFor="email" className="contact-form__label">
            Email <span className="contact-form__required">*</span>
          </label>
          <input
            type="email"
            id="email"
            name="email"
            required
            value={formData.email}
            onChange={handleChange}
            className="contact-form__input"
          />
        </div>

        {/* Company Field (Optional) */}
        {showCompany && (
          <div className="contact-form__group">
            <label htmlFor="company" className="contact-form__label">
              Company
            </label>
            <input
              type="text"
              id="company"
              name="company"
              value={formData.company}
              onChange={handleChange}
              className="contact-form__input"
            />
          </div>
        )}

        {/* Subject Field (Optional) */}
        {showSubject && (
          <div className="contact-form__group">
            <label htmlFor="subject" className="contact-form__label">
              Subject <span className="contact-form__required">*</span>
            </label>
            <input
              type="text"
              id="subject"
              name="subject"
              required
              value={formData.subject}
              onChange={handleChange}
              className="contact-form__input"
            />
          </div>
        )}

        {/* Message Field */}
        <div className="contact-form__group">
          <label htmlFor="message" className="contact-form__label">
            Message <span className="contact-form__required">*</span>
          </label>
          <textarea
            id="message"
            name="message"
            required
            rows={6}
            value={formData.message}
            onChange={handleChange}
            className="contact-form__textarea"
          />
        </div>

        {/* Submit Button */}
        <Button
          type="submit"
          variant="default"
          size="lg"
          disabled={status === 'submitting'}
          className="contact-form__submit"
        >
          {status === 'submitting' ? (
            <>Sending...</>
          ) : (
            <>
              {submitText}
              <Send size={18} className="contact-form__submit-icon" />
            </>
          )}
        </Button>
      </form>
    </div>
  );
}