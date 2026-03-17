/**
 * FAQ Page Template
 * 
 * WordPress template: templates/page-faq.html
 * 
 * Pattern order: Breadcrumbs → Hero → Stats → FAQ Categories → CTA
 *
 * BEM block: .page-faq
 * @see /src/styles/templates/page-faq.css
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
        className="page-faq__hero"
      >
        {/* Gradient orb decorations */}
        <div className="page-faq__hero-orb" />

        <Container>
          <div className="page-faq__hero-content">
            <div className="page-faq__hero-badge">
              <HelpCircle size={14} className="wp-inline wp-mr-2" />
              {faqPageHero.badge.text}
            </div>

            <h1 className="page-faq__hero-title">
              Frequently asked <span className="page-faq__hero-highlight">questions</span>
            </h1>

            <p className="page-faq__hero-tagline">
              {faqPageHero.tagline}
            </p>

            <p className="page-faq__hero-desc">
              {faqPageHero.description}
            </p>
          </div>
        </Container>
      </Section>

      {/* Stats Section */}
      <Section spacing="lg" className="page-faq__stats-section">
        <Container>
          <div className="page-faq__stats-container">
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
      <Section spacing="xl" className="page-faq__categories-section">
        <Container>
          <div className="page-faq__categories-container">
            <div className="page-faq__category-list">
              {faqCategories.map((category) => {
                const Icon = category.icon;
                return (
                  <div key={category.id}>
                    {/* Category Header */}
                    <div className="page-faq__category-header">
                      <div className="page-faq__category-icon">
                        <Icon size={24} />
                      </div>

                      <div>
                        <h2 className="page-faq__category-title">
                          {category.title}
                        </h2>
                        <p className="page-faq__category-desc">
                          {category.description}
                        </p>
                      </div>
                    </div>

                    {/* FAQs */}
                    <div className="page-faq__accordion-list">
                      {category.faqs.map((faq, index) => {
                        const key = `${category.id}-${index}`;
                        const isOpen = openFAQs[key];

                        return (
                          <div
                            key={index}
                            className="page-faq__accordion-item"
                          >
                            <button
                              onClick={() => toggleFAQ(category.id, index)}
                              className="page-faq__accordion-button"
                              aria-expanded={isOpen}
                            >
                              <h3 className="page-faq__accordion-title">
                                {faq.question}
                              </h3>

                              <ChevronDown
                                size={20}
                                className={`page-faq__accordion-chevron${isOpen ? ' page-faq__accordion-chevron--open' : ''}`}
                              />
                            </button>

                            {isOpen && (
                              <div className="page-faq__accordion-content">
                                <p className="page-faq__accordion-text">
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
