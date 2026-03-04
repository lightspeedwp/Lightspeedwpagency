/**
 * Enquiry Modal Block Component
 * 
 * WordPress Block: forms/enquiry-modal
 * 
 * Modal popup with contact form for lead generation.
 * 
 * @see /src/app/utils/icon-map.ts
 * @see /src/styles/blocks/forms/enquiry-modal.css
 */

import React, { useState, useEffect, useRef } from 'react';
import { X } from '@phosphor-icons/react';
import { Button } from '../design/Buttons';
import { toast } from 'sonner';
import { useFocusManagement } from '../../../hooks/useFocusManagement';
import { useRipple, useShake } from '../../../hooks/useMicroInteractions';

export interface FormData {
  name: string;
  email: string;
  company?: string;
  phone?: string;
  message: string;
}

export interface EnquiryModalProps {
  isOpen: boolean;
  onClose: () => void;
  title: string;
  description: string;
  onSubmit?: (data: FormData) => void;
}

export function EnquiryModal({
  isOpen,
  onClose,
  title,
  description,
  onSubmit
}: EnquiryModalProps) {
  const [formData, setFormData] = useState<FormData>({
    name: '',
    email: '',
    company: '',
    phone: '',
    message: ''
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);
  const modalRef = useRef<HTMLDivElement>(null);
  const { trapFocus, restoreFocus } = useFocusManagement();
  const ripple = useRipple();
  const [nameShake, triggerNameShake] = useShake();
  const [emailShake, triggerEmailShake] = useShake();
  const [messageShake, triggerMessageShake] = useShake();

  // Focus trap
  useEffect(() => {
    if (isOpen && modalRef.current) {
      const cleanup = trapFocus(modalRef.current);
      return () => {
        cleanup?.();
        restoreFocus();
      };
    }
  }, [isOpen, trapFocus, restoreFocus]);

  // Prevent body scroll
  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = '';
    }
    return () => {
      document.body.style.overflow = '';
    };
  }, [isOpen]);

  // Close on Escape
  useEffect(() => {
    const handleEscape = (e: KeyboardEvent) => {
      if (e.key === 'Escape' && isOpen) {
        onClose();
      }
    };
    window.addEventListener('keydown', handleEscape);
    return () => window.removeEventListener('keydown', handleEscape);
  }, [isOpen, onClose]);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    
    if (!formData.name || !formData.email || !formData.message) {
      toast.error('Please fill in all required fields');
      
      if (!formData.name) triggerNameShake();
      if (!formData.email) triggerEmailShake();
      if (!formData.message) triggerMessageShake();
      return;
    }

    setIsSubmitting(true);

    try {
      await new Promise(resolve => setTimeout(resolve, 1500));

      if (onSubmit) {
        onSubmit(formData);
      }

      toast.success('Thank you! We\'ll be in touch within 24 hours.');

      setIsSubmitting(false);
      setIsSuccess(true);

      setTimeout(() => {
        setIsSuccess(false);
        setFormData({ name: '', email: '', company: '', phone: '', message: '' });
        onClose();
      }, 2000);
    } catch (error) {
      toast.error('Something went wrong. Please try again.');
      setIsSubmitting(false);
    }
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData(prev => ({
      ...prev,
      [e.target.name]: e.target.value
    }));
  };

  if (!isOpen) return null;

  return (
    <>
      <div
        className="wp-block-enquiry-modal-backdrop"
        onClick={onClose}
        aria-hidden="true"
      />

      <div
        ref={modalRef}
        className="wp-block-enquiry-modal"
        role="dialog"
        aria-modal="true"
        aria-labelledby="modal-title"
        aria-describedby="modal-description"
      >
        <div className="wp-block-enquiry-modal__content">
          <button
            onClick={onClose}
            className="wp-block-enquiry-modal__close"
            aria-label="Close modal"
          >
            <X size={24} />
          </button>

          <div className="wp-block-enquiry-modal__body">
            <div className="wp-block-enquiry-modal__header">
              <h2 id="modal-title" className="wp-block-enquiry-modal__title">
                {title}
              </h2>
              <p id="modal-description" className="wp-block-enquiry-modal__description">
                {description}
              </p>
            </div>

            {isSuccess && (
              <div className="wp-block-enquiry-modal__success">
                Thank you! We'll be in touch within 24 hours.
              </div>
            )}

            {!isSuccess && (
              <form onSubmit={handleSubmit} className="wp-block-enquiry-modal__form">
                <div className="wp-block-enquiry-modal__field">
                  <label htmlFor="name" className="wp-block-enquiry-modal__label">
                    Name *
                  </label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    required
                    className="wp-block-enquiry-modal__input"
                    style={nameShake.style}
                  />
                </div>

                <div className="wp-block-enquiry-modal__field">
                  <label htmlFor="email" className="wp-block-enquiry-modal__label">
                    Email *
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    required
                    className="wp-block-enquiry-modal__input"
                    style={emailShake.style}
                  />
                </div>

                <div className="wp-block-enquiry-modal__field">
                  <label htmlFor="company" className="wp-block-enquiry-modal__label">
                    Company
                  </label>
                  <input
                    type="text"
                    id="company"
                    name="company"
                    value={formData.company}
                    onChange={handleChange}
                    className="wp-block-enquiry-modal__input"
                    onKeyPress={ripple}
                  />
                </div>

                <div className="wp-block-enquiry-modal__field">
                  <label htmlFor="phone" className="wp-block-enquiry-modal__label">
                    Phone
                  </label>
                  <input
                    type="tel"
                    id="phone"
                    name="phone"
                    value={formData.phone}
                    onChange={handleChange}
                    className="wp-block-enquiry-modal__input"
                    onKeyPress={ripple}
                  />
                </div>

                <div className="wp-block-enquiry-modal__field">
                  <label htmlFor="message" className="wp-block-enquiry-modal__label">
                    Project Details *
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    required
                    rows={5}
                    className="wp-block-enquiry-modal__textarea"
                    style={messageShake.style}
                  />
                </div>

                <div className="wp-block-enquiry-modal__actions">
                  <Button
                    variant="primary"
                    size="lg"
                    disabled={isSubmitting}
                    onClick={handleSubmit as any}
                    className="wp-block-enquiry-modal__submit"
                  >
                    {isSubmitting ? 'Sending...' : 'Send Enquiry'}
                  </Button>
                  <Button
                    variant="outline"
                    size="lg"
                    onClick={onClose}
                    disabled={isSubmitting}
                  >
                    Cancel
                  </Button>
                </div>
              </form>
            )}
          </div>
        </div>
      </div>
    </>
  );
}