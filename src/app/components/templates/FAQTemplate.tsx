/**
 * FAQ Page Template
 * 
 * WordPress template: templates/page-faq.html
 * 
 * Pattern order: Breadcrumbs → Hero → Stats → FAQ Categories → CTA
 */

import { Container } from '../common/Container';
import { Section } from '../common/Section';
import { Breadcrumbs } from '../common/Breadcrumbs';
import { Buttons, Button } from '../blocks/design/Buttons';
import { CTASection } from '../patterns/CTASection';
import { 
  HelpCircle,
  ChevronDown
} from 'lucide-react';
import { useState } from 'react';
import '@/styles/templates/page-faq.css';

// Import centralized data
import {
  faqPageHero,
  faqCategories,
  faqStats,
  faqCTA
} from '../../data/faq-page';

export function FAQTemplate() {
  const [openFAQs, setOpenFAQs] = useState<Record<string, boolean>>({});

  const toggleFAQ = (categoryId: string, questionIndex: number) => {
    const key = `${categoryId}-${questionIndex}`;
    setOpenFAQs(prev => ({
      ...prev,
      [key]: !prev[key]
    }));
  };

  return (
    <>
      {/* Breadcrumbs */}
      <section className="wp-block-breadcrumbs-section">
        <Breadcrumbs 
          items={[
            { label: 'Home', href: '/' },
            { label: faqPageHero.title }
          ]}
        />
      </section>

      {/* Hero Section */}
      <Section 
        spacing="xl"
        className="faq-page__hero"
      >
        {/* Gradient orb decorations */}
        <div className="faq-page__hero-orb" />

        <Container>
          <div className="faq-page__hero-content">
            <div className="faq-page__hero-badge">
              <HelpCircle size={14} style={{ display: 'inline', marginRight: 'var(--spacing-2)' }} />
              {faqPageHero.badge.text}
            </div>

            <h1 className="faq-page__hero-title">
              Frequently Asked <span className="faq-page__hero-highlight">Questions</span>
            </h1>

            <p className="faq-page__hero-tagline">
              {faqPageHero.tagline}
            </p>

            <p className="faq-page__hero-desc">
              {faqPageHero.description}
            </p>
          </div>
        </Container>
      </Section>

      {/* Stats Section */}
      <Section spacing="lg" className="faq-page__stats-section">
        <Container>
          <div className="faq-page__stats-container">
            <div className="faq-page__stats-grid">
              <div className="faq-page__stat-card">
                <div className="faq-page__stat-value">
                  {faqStats.totalQuestions}+
                </div>
                <div className="faq-page__stat-label">
                  Questions Answered
                </div>
              </div>

              <div className="faq-page__stat-card">
                <div className="faq-page__stat-value">
                  {faqStats.categories}
                </div>
                <div className="faq-page__stat-label">
                  Categories
                </div>
              </div>

              <div className="faq-page__stat-card">
                <div className="faq-page__stat-value">
                  {faqStats.avgResponseTime}
                </div>
                <div className="faq-page__stat-label">
                  Avg Response Time
                </div>
              </div>

              <div className="faq-page__stat-card">
                <div className="faq-page__stat-value">
                  {faqStats.satisfaction}
                </div>
                <div className="faq-page__stat-label">
                  Satisfaction Rate
                </div>
              </div>
            </div>
          </div>
        </Container>
      </Section>

      {/* FAQ Categories Section */}
      <Section spacing="xl" className="faq-page__categories-section">
        <Container>
          <div className="faq-page__categories-container">
            <div className="faq-page__category-list">
              {faqCategories.map((category) => {
                const Icon = category.icon;
                return (
                  <div key={category.id}>
                    {/* Category Header */}
                    <div className="faq-page__category-header">
                      <div className="faq-page__category-icon">
                        <Icon size={24} />
                      </div>

                      <div>
                        <h2 className="faq-page__category-title">
                          {category.title}
                        </h2>
                        <p className="faq-page__category-desc">
                          {category.description}
                        </p>
                      </div>
                    </div>

                    {/* FAQs */}
                    <div className="faq-page__accordion-list">
                      {category.faqs.map((faq, index) => {
                        const key = `${category.id}-${index}`;
                        const isOpen = openFAQs[key];

                        return (
                          <div
                            key={index}
                            className="faq-page__accordion-item"
                          >
                            <button
                              onClick={() => toggleFAQ(category.id, index)}
                              className="faq-page__accordion-button"
                              aria-expanded={isOpen}
                            >
                              <h3 className="faq-page__accordion-title">
                                {faq.question}
                              </h3>

                              <ChevronDown
                                size={20}
                                className="faq-page__accordion-chevron"
                                style={{
                                  transform: isOpen ? 'rotate(180deg)' : 'rotate(0deg)'
                                }}
                              />
                            </button>

                            {isOpen && (
                              <div className="faq-page__accordion-content">
                                <p className="faq-page__accordion-text">
                                  {faq.answer}
                                </p>
                              </div>
                            )}
                          </div>
                        );
                      })}
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        </Container>
      </Section>

      {/* CTA Section */}
      <CTASection
        title={faqCTA.title}
        description={faqCTA.description}
        primaryButtonText={faqCTA.buttons[0].text}
        primaryButtonPage={faqCTA.buttons[0].page as any}
        secondaryButtonText={faqCTA.buttons[1]?.text}
        secondaryButtonPage={faqCTA.buttons[1]?.page as any}
        gradient="cyan"
      />
    </>
  );
}