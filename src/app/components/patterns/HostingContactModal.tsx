/**
 * HostingContactModal — Low-friction lead capture for hosting page
 *
 * A neon-styled modal form that lets visitors share their details
 * so a LightSpeed team member can contact them back.
 *
 * Features:
 *  - Pre-filled subject line based on the plan/context that triggered it
 *  - Minimal fields (name, email, phone optional, message optional)
 *  - Focus trap for accessibility
 *  - Escape key / backdrop click to close
 *  - Success state with confirmation message
 *  - Neon glow aesthetic matching the Neon Server Lab theme
 *
 * @see /src/styles/templates/page-service-hosting.css — hosting-lab__modal-* classes
 */

import { useState, useRef, useEffect, useCallback, type FormEvent } from 'react';
import { X, Rocket, CheckCircle, Loader2 } from 'lucide-react';
import { Button } from '../blocks/design/Buttons';

export interface HostingContactModalProps {
  /** Whether the modal is open */
  isOpen: boolean;
  /** Close handler */
  onClose: () => void;
  /** Pre-filled subject / context (e.g. "Pro Plan Enquiry") */
  subject?: string;
}

type FormState = 'idle' | 'submitting' | 'success';

export function HostingContactModal({
  isOpen,
  onClose,
  subject = 'Hosting Enquiry',
}: HostingContactModalProps) {
  const [formState, setFormState] = useState<FormState>('idle');
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [phone, setPhone] = useState('');
  const [message, setMessage] = useState('');
  const dialogRef = useRef<HTMLDivElement>(null);
  const firstInputRef = useRef<HTMLInputElement>(null);

  /* ── Focus management ── */
  useEffect(() => {
    if (isOpen) {
      // Small delay to allow the animation to start before focusing
      const timer = setTimeout(() => firstInputRef.current?.focus(), 100);
      document.body.style.overflow = 'hidden';
      return () => {
        clearTimeout(timer);
        document.body.style.overflow = '';
      };
    }
    document.body.style.overflow = '';
  }, [isOpen]);

  /* ── Escape key ── */
  useEffect(() => {
    if (!isOpen) return;
    const handler = (e: KeyboardEvent) => {
      if (e.key === 'Escape') onClose();
    };
    window.addEventListener('keydown', handler);
    return () => window.removeEventListener('keydown', handler);
  }, [isOpen, onClose]);

  /* ── Focus trap ── */
  const handleKeyDown = useCallback(
    (e: React.KeyboardEvent) => {
      if (e.key !== 'Tab' || !dialogRef.current) return;
      const focusable = dialogRef.current.querySelectorAll<HTMLElement>(
        'input, textarea, button, [tabindex]:not([tabindex="-1"])'
      );
      if (focusable.length === 0) return;

      const first = focusable[0];
      const last = focusable[focusable.length - 1];

      if (e.shiftKey && document.activeElement === first) {
        e.preventDefault();
        last.focus();
      } else if (!e.shiftKey && document.activeElement === last) {
        e.preventDefault();
        first.focus();
      }
    },
    []
  );

  /* ── Submit ── */
  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();
    setFormState('submitting');
    // Simulate API call (replace with real endpoint in production)
    setTimeout(() => {
      setFormState('success');
    }, 1500);
  };

  /* ── Reset on close ── */
  const handleClose = () => {
    onClose();
    // Delay reset so animation finishes
    setTimeout(() => {
      setFormState('idle');
      setName('');
      setEmail('');
      setPhone('');
      setMessage('');
    }, 300);
  };

  if (!isOpen) return null;

  return (
    <>
      {/* Backdrop */}
      <div
        className="hosting-lab__modal-backdrop"
        onClick={handleClose}
        aria-hidden="true"
      />

      {/* Modal */}
      <div
        className="hosting-lab__modal"
        role="dialog"
        aria-modal="true"
        aria-labelledby="hosting-modal-title"
        ref={dialogRef}
        onKeyDown={handleKeyDown}
      >
        <div className="hosting-lab__modal-content">
          {/* Animated gradient bar */}
          <div className="hosting-lab__modal-bar" aria-hidden="true" />

          {/* Close button */}
          <button
            type="button"
            className="hosting-lab__modal-close"
            onClick={handleClose}
            aria-label="Close modal"
          >
            <X size={20} />
          </button>

          <div className="hosting-lab__modal-body">
            {formState === 'success' ? (
              /* ── Success state ── */
              <div className="hosting-lab__modal-success">
                <div className="hosting-lab__modal-success-icon">
                  <CheckCircle size={48} />
                </div>
                <h2
                  className="hosting-lab__modal-success-title"
                  id="hosting-modal-title"
                >
                  Message received!
                </h2>
                <p className="hosting-lab__modal-success-desc">
                  A LightSpeed team member will be in touch within 24 hours.
                  We typically respond much sooner during business hours.
                </p>
                <Button
                  variant="default"
                  size="lg"
                  className="neon-hover"
                  onClick={handleClose}
                >
                  Close
                </Button>
              </div>
            ) : (
              /* ── Form state ── */
              <>
                <div className="hosting-lab__modal-header">
                  <div className="hosting-lab__modal-badge">
                    <Rocket size={14} />
                    <span>{subject}</span>
                  </div>
                  <h2
                    className="hosting-lab__modal-title"
                    id="hosting-modal-title"
                  >
                    Let&rsquo;s get you set up
                  </h2>
                  <p className="hosting-lab__modal-desc">
                    Share a few details and a hosting specialist will reach out
                    to discuss the best plan for your needs.
                  </p>
                </div>

                <form
                  className="hosting-lab__modal-form"
                  onSubmit={handleSubmit}
                >
                  {/* Name */}
                  <div className="hosting-lab__modal-field">
                    <label
                      htmlFor="hosting-name"
                      className="hosting-lab__modal-label"
                    >
                      Full name *
                    </label>
                    <input
                      ref={firstInputRef}
                      id="hosting-name"
                      type="text"
                      required
                      className="hosting-lab__modal-input"
                      placeholder="Jane Smith"
                      value={name}
                      onChange={(e) => setName(e.target.value)}
                    />
                  </div>

                  {/* Email */}
                  <div className="hosting-lab__modal-field">
                    <label
                      htmlFor="hosting-email"
                      className="hosting-lab__modal-label"
                    >
                      Work email *
                    </label>
                    <input
                      id="hosting-email"
                      type="email"
                      required
                      className="hosting-lab__modal-input"
                      placeholder="jane@company.com"
                      value={email}
                      onChange={(e) => setEmail(e.target.value)}
                    />
                  </div>

                  {/* Phone (optional) */}
                  <div className="hosting-lab__modal-field">
                    <label
                      htmlFor="hosting-phone"
                      className="hosting-lab__modal-label"
                    >
                      Phone
                      <span className="hosting-lab__modal-optional">
                        {' '}
                        (optional)
                      </span>
                    </label>
                    <input
                      id="hosting-phone"
                      type="tel"
                      className="hosting-lab__modal-input"
                      placeholder="+1 (555) 000-0000"
                      value={phone}
                      onChange={(e) => setPhone(e.target.value)}
                    />
                  </div>

                  {/* Message (optional) */}
                  <div className="hosting-lab__modal-field">
                    <label
                      htmlFor="hosting-message"
                      className="hosting-lab__modal-label"
                    >
                      Message
                      <span className="hosting-lab__modal-optional">
                        {' '}
                        (optional)
                      </span>
                    </label>
                    <textarea
                      id="hosting-message"
                      className="hosting-lab__modal-textarea"
                      placeholder="Tell us about your project, traffic levels, or any specific requirements..."
                      rows={3}
                      value={message}
                      onChange={(e) => setMessage(e.target.value)}
                    />
                  </div>

                  {/* Submit */}
                  <div className="hosting-lab__modal-actions">
                    <button
                      type="submit"
                      className="wp-block-button is-style-large neon-hover hosting-lab__modal-submit"
                      disabled={formState === 'submitting'}
                    >
                      <span className="wp-block-button__link">
                        {formState === 'submitting' ? (
                          <>
                            <Loader2 size={16} className="hosting-lab__modal-spinner" />
                            <span>Sending…</span>
                          </>
                        ) : (
                          <>
                            <Rocket size={16} />
                            <span>Request callback</span>
                          </>
                        )}
                      </span>
                    </button>
                  </div>

                  <p className="hosting-lab__modal-privacy">
                    We respect your privacy. Your information is only used to
                    follow up on this enquiry.
                  </p>
                </form>
              </>
            )}
          </div>
        </div>
      </div>
    </>
  );
}