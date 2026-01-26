/**
 * Contact Page Template
 * 
 * WordPress template: templates/page-contact.html
 * 
 * All styling in /src/styles/templates/contact-page.css (user-editable)
 * 
 * Pattern order: Breadcrumbs → Hero → Contact Methods → Contact Form → Why Contact → FAQ
 */

import { Container } from '../common/Container';
import { Section } from '../common/Section';
import { Breadcrumbs } from '../common/Breadcrumbs';
import { Button } from '../blocks/design/Buttons';
import { FAQSection } from '../patterns/FAQSection';
import { BackToTopButton } from '../blocks/layout/BackToTopButton';
import { SiteHeader } from '../parts/SiteHeader';
import { SiteFooter } from '../parts/SiteFooter';
import { SkipLink } from '../common/SkipLink';
import { RouteAnnouncer } from '../blocks/utility/RouteAnnouncer';
import { Hero } from '../patterns/Hero';
import { ContactInfo } from '../patterns/ContactInfo';
import { FormField, TextAreaField } from '../ui/FormField';
import { useFormValidation } from '../../hooks/useFormValidation';
import { 
  Mail, 
  MapPin, 
  Clock, 
  Send, 
  CheckCircle,
  AlertCircle,
  Loader,
  MessageSquare,
  Headphones,
  Award,
  Users,
  ExternalLink
} from 'lucide-react';
import { useState } from 'react';

// Import centralized data
import {
  contactPageMethods,
  contactPageHero,
  contactPageReasons,
  contactPageFAQs,
  contactPageOffice,
  contactFormFields,
  contactFormMessages
} from '../../data/contact-page';

export function ContactPageTemplate() {
  const [submitStatus, setSubmitStatus] = useState<'idle' | 'success' | 'error'>('idle');

  // Form validation with useFormValidation hook
  const {
    values,
    errors,
    touched,
    handleChange,
    handleBlur,
    handleSubmit,
    resetForm,
    isSubmitting
  } = useFormValidation({
    initialValues: {
      name: '',
      email: '',
      subject: '',
      message: ''
    },
    validationRules: {
      name: (value) => value.length >= 2 ? '' : contactFormFields.name.errorMessage,
      email: (value) => /\S+@\S+\.\S+/.test(value) ? '' : contactFormFields.email.errorMessage,
      message: (value) => {
        if (value.length < 10) return 'Message must be at least 10 characters';
        if (value.length > 500) return 'Message must be less than 500 characters';
        return '';
      }
    },
    onSubmit: async (values) => {
      try {
        console.log('Form submitted:', values);
        // In WordPress, this would submit to backend
        await new Promise(resolve => setTimeout(resolve, 1500));
        setSubmitStatus('success');
        resetForm();
        
        // Reset success message after 5 seconds
        setTimeout(() => setSubmitStatus('idle'), 5000);
      } catch (error) {
        setSubmitStatus('error');
        setTimeout(() => setSubmitStatus('idle'), 5000);
      }
    }
  });

  return (
    <>
      <RouteAnnouncer />
      <SkipLink />
      <SiteHeader />
      
      <main id="main-content" role="main">
        {/* Breadcrumbs */}
        <section 
          style={{
            paddingTop: 'var(--spacing-4)',
            paddingBottom: 'var(--spacing-4)',
            backgroundColor: 'var(--background)',
          }}
        >
          <Container>
            <Breadcrumbs 
              items={[
                { label: 'Home', href: '/' },
                { label: 'Contact Us' }
              ]}
            />
          </Container>
        </section>

        {/* Hero Section */}
        <Hero
          variant="page"
          align="center"
          maxWidth="3xl"
          gradient="blue"
          spacing="xl"
          badge={{
            icon: Mail,
            text: 'GET IN TOUCH'
          }}
          title="Let's Build Something Amazing Together"
          titleHighlight="Amazing"
          description="Whether you need a new WordPress website, WooCommerce store, or ongoing support - we're here to help. Send us a message and we'll get back to you within 24 hours."
          stats={[
            { icon: Award, value: '22+', label: 'Years Experience' },
            { icon: Users, value: '120+', label: 'Websites Hosted' },
            { icon: Clock, value: '24hrs', label: 'Response Time' }
          ]}
        />

        {/* Contact Methods Grid */}
        <Section spacing="xl" style={{ backgroundColor: 'var(--background)' }}>
          <Container>
            {/* Section Header */}
            <div className="template-section-header">
              <h2 className="template-section-header__title">
                Ways to Contact Us
              </h2>
              <p className="template-section-header__description">
                Choose the method that works best for you
              </p>
            </div>

            {/* Methods Grid */}
            <div className="contact-page__methods-grid">
              {contactPageMethods.map((method, index) => {
                const Icon = method.icon;
                const isLink = method.href !== '#';
                
                const content = (
                  <div className={`contact-page__method-card ${isLink ? 'contact-page__method-card--link' : ''}`}>
                    <div className="contact-page__method-icon">
                      <Icon size={28} />
                    </div>

                    <div>
                      <h3 className="contact-page__method-title">
                        {method.title}
                        {isLink && (
                          <ExternalLink 
                            size={16} 
                            style={{ 
                              display: 'inline', 
                              marginLeft: '8px',
                              color: 'var(--primary)' 
                            }} 
                          />
                        )}
                      </h3>

                      <p className="contact-page__method-description">
                        {method.description}
                      </p>

                      <p className="contact-page__method-link">
                        {method.value}
                      </p>
                    </div>
                  </div>
                );

                return isLink ? (
                  <a
                    key={index}
                    href={method.href}
                    target={method.href.startsWith('http') ? '_blank' : undefined}
                    rel={method.href.startsWith('http') ? 'noopener noreferrer' : undefined}
                    style={{ textDecoration: 'none', display: 'block' }}
                    aria-label={`${method.title}: ${method.value}`}
                  >
                    {content}
                  </a>
                ) : (
                  <div key={index}>{content}</div>
                );
              })}
            </div>
          </Container>
        </Section>

        {/* Contact Form & Details */}
        <Section spacing="xl" style={{ backgroundColor: 'var(--background)' }}>
          <Container>
            <div className="contact-page__form-grid">
              {/* Contact Form */}
              <div>
                <form onSubmit={handleSubmit} className="contact-page__form">
                  <h3 className="contact-page__form-title">
                    Send Us a Message
                  </h3>
                  <p className="contact-page__form-subtitle">
                    Fill out the form below and we'll get back to you within 24 hours.
                  </p>

                  <div className="contact-page__form-fields">
                    {/* Name Field */}
                    <FormField
                      label="Name"
                      required
                      value={values.name}
                      onChange={(e) => handleChange('name', e.target.value)}
                      onBlur={() => handleBlur('name')}
                      name="name"
                      type="text"
                      placeholder="John Doe"
                      error={touched.name && errors.name ? errors.name : undefined}
                      showSuccess={touched.name && !errors.name && values.name.length > 0}
                    />

                    {/* Email Field */}
                    <FormField
                      label="Email"
                      required
                      value={values.email}
                      onChange={(e) => handleChange('email', e.target.value)}
                      onBlur={() => handleBlur('email')}
                      name="email"
                      type="email"
                      placeholder="john@example.com"
                      error={touched.email && errors.email ? errors.email : undefined}
                      showSuccess={touched.email && !errors.email && values.email.length > 0}
                    />

                    {/* Subject Field */}
                    <FormField
                      label="Subject"
                      value={values.subject}
                      onChange={(e) => handleChange('subject', e.target.value)}
                      name="subject"
                      type="select"
                      options={[
                        { value: '', label: 'Select a subject' },
                        { value: 'general', label: 'General Inquiry' },
                        { value: 'project', label: 'New Project' },
                        { value: 'support', label: 'Technical Support' },
                        { value: 'partnership', label: 'Partnership Opportunity' },
                        { value: 'quote', label: 'Request a Quote' }
                      ]}
                    />

                    {/* Message Field */}
                    <TextAreaField
                      label="Message"
                      required
                      value={values.message}
                      onChange={(e) => handleChange('message', e.target.value)}
                      onBlur={() => handleBlur('message')}
                      name="message"
                      placeholder="Tell us about your project..."
                      error={touched.message && errors.message ? errors.message : undefined}
                      showSuccess={touched.message && !errors.message && values.message.length > 0}
                      showCharCount
                      maxLength={500}
                      rows={6}
                    />

                    {/* Status Messages */}
                    {submitStatus === 'success' && (
                      <div className="contact-page__status-message contact-page__status-message--success">
                        <CheckCircle size={20} />
                        <span>Message sent successfully! We'll get back to you soon.</span>
                      </div>
                    )}

                    {submitStatus === 'error' && (
                      <div className="contact-page__status-message contact-page__status-message--error">
                        <AlertCircle size={20} />
                        <span>Failed to send message. Please try again.</span>
                      </div>
                    )}

                    {/* Submit Button */}
                    <Button
                      type="submit"
                      variant="default"
                      size="lg"
                      className="contact-page__submit-button"
                      disabled={isSubmitting}
                    >
                      {isSubmitting ? (
                        <>
                          <Loader size={20} className="animate-spin" />
                          Submitting...
                        </>
                      ) : (
                        <>
                          <Send size={20} />
                          Send Message
                        </>
                      )}
                    </Button>
                  </div>
                </form>
              </div>

              {/* Contact Details Sidebar */}
              <div className="contact-page__info-sidebar">
                <ContactInfo
                  items={[
                    {
                      type: 'email',
                      label: 'Email',
                      value: 'hello@lsxdesign.com',
                      link: 'mailto:hello@lsxdesign.com'
                    },
                    {
                      type: 'address',
                      label: 'Office',
                      value: 'Cape Town, South Africa'
                    },
                    {
                      type: 'hours',
                      label: 'Office Hours',
                      value: 'Monday - Friday: 9am - 5pm',
                      description: 'Saturday - Sunday: Closed'
                    }
                  ]}
                  variant="sidebar"
                  layout="vertical"
                  showIcons
                />
              </div>
            </div>
          </Container>
        </Section>

        {/* Why Contact Us Section */}
        <Section spacing="xl" style={{ backgroundColor: 'var(--background)' }}>
          <Container>
            <div className="wp-max-w-3xl">
              {/* Section Header */}
              <div className="template-section-header template-section-header--compact">
                <h2 className="template-section-header__title">
                  Why Contact Us?
                </h2>
                <p className="template-section-header__description">
                  Discover the benefits of choosing our WordPress services
                </p>
              </div>

              {/* Reasons (using FAQ component) */}
              <FAQSection 
                faqs={contactPageReasons}
                openFaq={null}
                setOpenFaq={() => {}}
              />
            </div>
          </Container>
        </Section>

        {/* FAQ Section */}
        <Section spacing="xl" style={{ backgroundColor: 'var(--muted)' }}>
          <Container>
            <div className="wp-max-w-3xl">
              {/* Section Header */}
              <div className="template-section-header template-section-header--compact">
                <h2 className="template-section-header__title">
                  Frequently Asked Questions
                </h2>
                <p className="template-section-header__description">
                  Find answers to common questions about our services
                </p>
              </div>

              {/* FAQ List */}
              <FAQSection faqs={contactPageFAQs} />
            </div>
          </Container>
        </Section>
      </main>

      <SiteFooter />
      <BackToTopButton />
    </>
  );
}
