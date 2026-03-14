/**
 * FAQ Page Template
 * 
 * WordPress template: templates/page-faq.html
 * 
 * Pattern order: Breadcrumbs → Hero → Stats → FAQ Categories → CTA
 */

/* Route-level CSS */
import '../../../styles/templates/page-faq.css';
import { Container } from '../common/Container';
import { Section } from '../common/Section';
import { BreadcrumbPart } from '../parts/BreadcrumbPart';
import { Buttons, Button } from '../blocks/design/Buttons';
import { FunkyCTA } from '../patterns/FunkyCTA';
import { StatsGrid } from '../patterns/StatsGrid';
import { 
  Question as HelpCircle,
  CaretDown as ChevronDown
} from '@phosphor-icons/react';
import { useState } from 'react';

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
      {/* JSON-LD Structured Data — rendered server-side in WordPress via wp_head */}

      {/* Breadcrumbs */}
      <BreadcrumbPart
        items={[
          { label: 'Home', href: '/' },
          { label: faqPageHero.title },
        ]}
      />

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
              <HelpCircle size={14} className="wp-inline wp-mr-2" />
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
            <StatsGrid
              stats={[
                {
                  value: `${faqStats.totalQuestions}+`,
                  label: 'Questions Answered'
                },
                {
                  value: `${faqStats.categories}`,
                  label: 'Categories'
                },
                {
                  value: `${faqStats.avgResponseTime}`,
                  label: 'Avg Response Time'
                },
                {
                  value: `${faqStats.satisfaction}`,
                  label: 'Satisfaction Rate'
                }
              ]}
            />
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
      <FunkyCTA
        title={faqCTA.title}
        description={faqCTA.description}
        buttonText={faqCTA.buttons[0].text}
        buttonPage={faqCTA.buttons[0].page}
        benefits={[
          'Typical response within 2 hours',
          'Expert WordPress & WooCommerce support',
          'Free initial consultation',
          'Flexible support plans available'
        ]}
      />
    </>
  );
}