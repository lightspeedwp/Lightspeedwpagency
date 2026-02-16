/**
 * Privacy Policy Template
 * 
 * WordPress template: templates/page-privacy-policy.html
 * 
 * Legal page displaying privacy policy content.
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
import { Shield, Lock, Eye, FileText, AlertCircle, CheckCircle } from 'lucide-react';
import '@/styles/templates/page-legal.css';

export function PrivacyPolicyTemplate() {
  const lastUpdated = 'January 22, 2026';

  return (
    <>
        {/* Breadcrumbs */}
        <section className="wp-block-breadcrumbs-section">
            <Breadcrumbs 
              items={[
                { label: 'Home', href: '/' },
                { label: 'Privacy Policy' }
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
                <Shield size={40} strokeWidth={2} />
              </div>

              <Heading level={1} className="legal-page__hero-title">
                Privacy Policy
              </Heading>

              <Paragraph className="legal-page__hero-desc">
                Your privacy is important to us. This policy explains how we collect, use, and protect your personal information.
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
              {/* Section 1: Information We Collect */}
              <div className="legal-page__section">
                <div className="legal-page__section-header">
                  <div className="legal-page__section-icon">
                    <FileText size={24} />
                  </div>
                  <Heading level={2} className="legal-page__section-title">
                    Information We Collect
                  </Heading>
                </div>

                <Paragraph className="legal-page__text">
                  We collect information you provide directly to us, including:
                </Paragraph>

                <ul className="legal-page__list">
                  <li><strong>Contact Information:</strong> Name, email address, phone number, company name</li>
                  <li><strong>Project Details:</strong> Project requirements, budget, timeline, industry</li>
                  <li><strong>Technical Information:</strong> IP address, browser type, device information, usage data</li>
                  <li><strong>Communication Data:</strong> Messages, feedback, support requests</li>
                </ul>
              </div>

              {/* Section 2: How We Use Your Information */}
              <div className="legal-page__section">
                <div className="legal-page__section-header">
                  <div className="legal-page__section-icon">
                    <CheckCircle size={24} />
                  </div>
                  <Heading level={2} className="legal-page__section-title">
                    How We Use Your Information
                  </Heading>
                </div>

                <Paragraph className="legal-page__text">
                  We use the information we collect to:
                </Paragraph>

                <ul className="legal-page__list">
                  <li>Provide, maintain, and improve our services</li>
                  <li>Respond to your inquiries and provide customer support</li>
                  <li>Send you project updates, newsletters, and marketing communications</li>
                  <li>Analyze usage patterns and optimize website performance</li>
                  <li>Prevent fraud, abuse, and security incidents</li>
                  <li>Comply with legal obligations and enforce our terms</li>
                </ul>
              </div>

              {/* Section 3: Information Sharing */}
              <div className="legal-page__section">
                <div className="legal-page__section-header">
                  <div className="legal-page__section-icon">
                    <Eye size={24} />
                  </div>
                  <Heading level={2} className="legal-page__section-title">
                    Information Sharing
                  </Heading>
                </div>

                <Paragraph className="legal-page__text">
                  We do not sell your personal information. We may share your information with:
                </Paragraph>

                <ul className="legal-page__list">
                  <li><strong>Service Providers:</strong> Third-party vendors who help us operate our business (hosting, analytics, email)</li>
                  <li><strong>Business Partners:</strong> With your consent, for co-marketing or joint services</li>
                  <li><strong>Legal Requirements:</strong> When required by law or to protect our rights</li>
                  <li><strong>Business Transfers:</strong> In connection with a merger, acquisition, or sale of assets</li>
                </ul>
              </div>

              {/* Section 4: Data Security */}
              <div className="legal-page__section">
                <div className="legal-page__section-header">
                  <div className="legal-page__section-icon">
                    <Lock size={24} />
                  </div>
                  <Heading level={2} className="legal-page__section-title">
                    Data Security
                  </Heading>
                </div>

                <Paragraph className="legal-page__text">
                  We implement appropriate technical and organizational measures to protect your personal information:
                </Paragraph>

                <ul className="legal-page__list">
                  <li>SSL/TLS encryption for data transmission</li>
                  <li>Secure server infrastructure and regular security audits</li>
                  <li>Access controls and authentication measures</li>
                  <li>Regular backups and disaster recovery procedures</li>
                  <li>Employee training on data protection best practices</li>
                </ul>
              </div>

              {/* Section 5: Your Rights */}
              <div className="legal-page__section">
                <div className="legal-page__section-header">
                  <div className="legal-page__section-icon">
                    <AlertCircle size={24} />
                  </div>
                  <Heading level={2} className="legal-page__section-title">
                    Your Rights
                  </Heading>
                </div>

                <Paragraph className="legal-page__text">
                  You have the following rights regarding your personal information:
                </Paragraph>

                <ul className="legal-page__list">
                  <li><strong>Access:</strong> Request a copy of your personal information</li>
                  <li><strong>Correction:</strong> Update inaccurate or incomplete information</li>
                  <li><strong>Deletion:</strong> Request deletion of your personal information</li>
                  <li><strong>Opt-Out:</strong> Unsubscribe from marketing communications</li>
                  <li><strong>Data Portability:</strong> Receive your data in a structured format</li>
                  <li><strong>Object:</strong> Object to certain processing activities</li>
                </ul>

                <Paragraph className="legal-page__text">
                  To exercise these rights, please contact us at <strong>privacy@lsxdesign.com</strong>
                </Paragraph>
              </div>

              {/* Contact Information */}
              <div className="legal-page__contact-box">
                <Heading level={3} className="legal-page__contact-title">
                  Contact Us
                </Heading>
                <Paragraph className="legal-page__contact-text">
                  If you have questions about this Privacy Policy, please contact us:
                </Paragraph>
                <Paragraph className="legal-page__contact-details">
                  <strong>Email:</strong> privacy@lsxdesign.com<br />
                  <strong>Website:</strong> https://lsxdesign.com/contact<br />
                  <strong>Last Updated:</strong> {lastUpdated}
                </Paragraph>
              </div>
            </div>
          </Container>
        </Section>

        {/* CTA Section */}
        <CTASection
          title="Have Questions About Privacy?"
          description="Our team is here to help. Contact us for any privacy-related inquiries."
          buttonText="Contact Us"
          buttonPage="contact"
          variant="default"
        />
    </>
  );
}