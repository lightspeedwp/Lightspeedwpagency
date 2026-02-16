/**
 * Terms of Service Template
 * 
 * WordPress template: templates/page-terms-of-service.html
 * 
 * Legal page displaying terms of service content.
 * Pattern order: Breadcrumbs → Hero → Content → CTA
 * 
 * **WordPress Blocks:**
 * - Group (page container)
 * - Heading (H1, H2, H3)
 * - Paragraph (body text)
 * - List (bullet points)
 * 
 * **Compliance:**
 * - 100% CSS variables
 * - WordPress-aligned CSS classes
 * - Light + dark mode support
 * - WCAG 2.1 AA compliant
 */

import { Container } from '../common/Container';
import { Section } from '../common/Section';
import { Breadcrumbs } from '../common/Breadcrumbs';
import { CTASection } from '../patterns/CTASection';
import { Heading } from '../blocks/text/Heading';
import { Paragraph } from '../blocks/text/Paragraph';
import { FileCheck, Scale, AlertTriangle, CheckCircle2, XCircle, Users } from 'lucide-react';
import '@/styles/templates/page-legal.css';

export function TermsOfServiceTemplate() {
  const lastUpdated = 'January 22, 2026';

  return (
    <>
        {/* Breadcrumbs */}
        <section className="wp-block-breadcrumbs-section">
            <Breadcrumbs 
              items={[
                { label: 'Home', href: '/' },
                { label: 'Terms of Service' }
              ]}
            />
        </section>

        {/* Hero Section */}
        <Section 
          spacing="xl"
          className="legal-page__hero"
        >
          <Container>
            <div className="legal-page__hero-content">
              <div className="legal-page__hero-icon">
                <Scale size={40} strokeWidth={2} />
              </div>

              <Heading level={1} className="legal-page__hero-title">
                Terms of Service
              </Heading>

              <Paragraph className="legal-page__hero-desc">
                Please read these terms carefully before using our services. By using our services, you agree to be bound by these terms.
              </Paragraph>

              <Paragraph className="legal-page__hero-meta">
                Last updated: {lastUpdated}
              </Paragraph>
            </div>
          </Container>
        </Section>

        {/* Content Section */}
        <Section spacing="xl">
          <Container>
            <div className="legal-page__content-container">
              {/* Section 1: Agreement to Terms */}
              <div className="legal-page__section">
                <div className="legal-page__section-header">
                  <div className="legal-page__section-icon">
                    <FileCheck size={24} />
                  </div>
                  <Heading level={2} className="legal-page__section-title">
                    Agreement to Terms
                  </Heading>
                </div>

                <Paragraph className="legal-page__text">
                  By accessing or using LSX Design's services, you agree to be bound by these Terms of Service and all applicable laws and regulations. If you do not agree with any of these terms, you are prohibited from using our services.
                </Paragraph>

                <Paragraph className="legal-page__text">
                  These terms constitute a legally binding agreement between you and LSX Design. We reserve the right to update these terms at any time, and continued use of our services after changes constitutes acceptance of the new terms.
                </Paragraph>
              </div>

              {/* Section 2: Services Provided */}
              <div className="legal-page__section">
                <div className="legal-page__section-header">
                  <div className="legal-page__section-icon">
                    <CheckCircle2 size={24} />
                  </div>
                  <Heading level={2} className="legal-page__section-title">
                    Services Provided
                  </Heading>
                </div>

                <Paragraph className="legal-page__text">
                  LSX Design provides the following services:
                </Paragraph>

                <ul className="legal-page__list">
                  <li><strong>WordPress Development:</strong> Custom WordPress website design, development, and implementation</li>
                  <li><strong>WooCommerce Solutions:</strong> E-commerce platform development and customization</li>
                  <li><strong>Design Services:</strong> UI/UX design, branding, and visual identity</li>
                  <li><strong>Support & Maintenance:</strong> Ongoing website support, updates, and maintenance</li>
                  <li><strong>Hosting Services:</strong> Managed WordPress hosting and infrastructure</li>
                  <li><strong>Consulting:</strong> Technical consulting, strategy, and planning services</li>
                </ul>
              </div>

              {/* Section 3: Client Responsibilities */}
              <div className="legal-page__section">
                <div className="legal-page__section-header">
                  <div className="legal-page__section-icon">
                    <Users size={24} />
                  </div>
                  <Heading level={2} className="legal-page__section-title">
                    Client Responsibilities
                  </Heading>
                </div>

                <Paragraph className="legal-page__text">
                  As a client, you agree to:
                </Paragraph>

                <ul className="legal-page__list">
                  <li>Provide accurate and complete information required for project completion</li>
                  <li>Respond to requests for feedback and approvals in a timely manner</li>
                  <li>Provide necessary content, assets, and access credentials as required</li>
                  <li>Maintain confidentiality of login credentials and account information</li>
                  <li>Pay all fees according to the agreed payment schedule</li>
                  <li>Use our services only for lawful purposes and in accordance with these terms</li>
                  <li>Maintain backups of your own data and content</li>
                </ul>
              </div>

              {/* Section 4: Payment Terms */}
              <div className="legal-page__section">
                <div className="legal-page__section-header">
                  <div className="legal-page__section-icon">
                    <CheckCircle2 size={24} />
                  </div>
                  <Heading level={2} className="legal-page__section-title">
                    Payment Terms
                  </Heading>
                </div>

                <ul className="legal-page__list">
                  <li>Payment terms are specified in your project proposal or service agreement</li>
                  <li>Typical payment structure: 50% deposit, 50% upon completion</li>
                  <li>Invoices are due within 14 days unless otherwise specified</li>
                  <li>Late payments may incur interest charges at a rate of 1.5% per month</li>
                  <li>Work may be suspended if payment is more than 30 days overdue</li>
                  <li>All fees are in USD unless otherwise stated</li>
                  <li>Refunds are handled on a case-by-case basis per our refund policy</li>
                </ul>
              </div>

              {/* Section 5: Intellectual Property */}
              <div className="legal-page__section">
                <div className="legal-page__section-header">
                  <div className="legal-page__section-icon">
                    <Scale size={24} />
                  </div>
                  <Heading level={2} className="legal-page__section-title">
                    Intellectual Property
                  </Heading>
                </div>

                <Paragraph className="legal-page__text">
                  Upon full payment, you receive the following rights:
                </Paragraph>

                <ul className="legal-page__list">
                  <li><strong>Custom Code:</strong> Full ownership of custom code developed specifically for your project</li>
                  <li><strong>Design Assets:</strong> Rights to use designs, graphics, and visual elements</li>
                  <li><strong>Content:</strong> You retain ownership of all content you provide</li>
                  <li><strong>Third-Party Components:</strong> Subject to their respective licenses (WordPress, plugins, themes)</li>
                  <li><strong>Portfolio Rights:</strong> We reserve the right to showcase your project in our portfolio</li>
                  <li><strong>Pre-existing Materials:</strong> LSX Design retains ownership of pre-existing code, frameworks, and tools</li>
                </ul>
              </div>

              {/* Section 6: Limitations of Liability */}
              <div className="legal-page__section">
                <div className="legal-page__section-header">
                  <div className="legal-page__section-icon">
                    <XCircle size={24} />
                  </div>
                  <Heading level={2} className="legal-page__section-title">
                    Limitations of Liability
                  </Heading>
                </div>

                <ul className="legal-page__list">
                  <li>LSX Design is not liable for any indirect, incidental, or consequential damages</li>
                  <li>Our total liability is limited to the amount paid by you for the specific service</li>
                  <li>We are not responsible for third-party services, plugins, or hosting issues</li>
                  <li>Client is responsible for maintaining backups and data security</li>
                  <li>We do not guarantee specific traffic, rankings, or business outcomes</li>
                  <li>Force majeure events excuse performance obligations</li>
                </ul>
              </div>

              {/* Section 7: Termination */}
              <div className="legal-page__section">
                <div className="legal-page__section-header">
                  <div className="legal-page__section-icon">
                    <AlertTriangle size={24} />
                  </div>
                  <Heading level={2} className="legal-page__section-title">
                    Termination
                  </Heading>
                </div>

                <Paragraph className="legal-page__text">
                  Either party may terminate services under the following conditions:
                </Paragraph>

                <ul className="legal-page__list">
                  <li>Written notice of 30 days for ongoing service agreements</li>
                  <li>Immediate termination for breach of these terms</li>
                  <li>Non-payment beyond 30 days may result in service suspension</li>
                  <li>Upon termination, all outstanding fees become immediately due</li>
                  <li>Work completed up to termination date must be paid for</li>
                  <li>Client data will be provided upon request after final payment</li>
                </ul>
              </div>

              {/* Contact Information */}
              <div className="legal-page__contact-box">
                <Heading level={3} className="legal-page__contact-title">
                  Questions About Our Terms?
                </Heading>
                <Paragraph className="legal-page__contact-text">
                  If you have questions about these Terms of Service, please contact us:
                </Paragraph>
                <Paragraph className="legal-page__contact-details">
                  <strong>Email:</strong> legal@lsxdesign.com<br />
                  <strong>Website:</strong> https://lsxdesign.com/contact<br />
                  <strong>Last Updated:</strong> {lastUpdated}
                </Paragraph>
              </div>
            </div>
          </Container>
        </Section>

        {/* CTA Section */}
        <CTASection
          title="Ready to Get Started?"
          description="Let's discuss your project requirements and create something amazing together."
          buttonText="Start Your Project"
          buttonPage="contact"
          variant="default"
        />
    </>
  );
}