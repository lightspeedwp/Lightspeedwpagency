/**
 * 404 Template
 * 
 * WordPress concept: 404.html
 * 
 * Page Not Found template with search, suggestions, and home button.
 * Uses dedicated CSS variables from 404.css.
 */

import { Container } from '../common/Container';
import { Section } from '../common/Section';
import { Heading } from '../blocks/text/Heading';
import { Paragraph } from '../blocks/text/Paragraph';
import { Button } from '../blocks/design/Buttons';
import { AlertTriangle, Search, Home, ArrowRight } from 'lucide-react';

// Import centralized data
import {
  error404Hero,
  helpfulLinks,
  searchSuggestions,
  error404CTA,
} from '../../data/404-page';

export function Template404() {
  return (
    <>
      <Section className="error-hero">
        <Container>
          <div className="error-hero__icon">
            <AlertTriangle size={40} strokeWidth={2} />
          </div>
          
          <Heading level={1} className="wp-mb-6">
            {error404Hero.errorCode} - {error404Hero.title}
          </Heading>
          
          <Paragraph className="error-hero__description">
            {error404Hero.description}
          </Paragraph>

          {/* Search Bar */}
          <div className="error-search">
            <div className="error-search__input-wrapper">
              <Search className="error-search__icon" size={20} />
              <input 
                type="text" 
                className="error-search__input" 
                placeholder="Search our site..."
                aria-label="Search"
              />
            </div>
            <Button variant="primary">Search</Button>
          </div>

          {/* Search Suggestions */}
          {searchSuggestions.length > 0 && (
            <div className="error-search-suggestions">
              <Paragraph className="error-search-suggestions__label">
                Try searching for:
              </Paragraph>
              <div className="error-search-suggestions__list">
                {searchSuggestions.map((suggestion, index) => (
                  <span key={index} className="error-search-suggestions__chip">
                    {suggestion.query}
                  </span>
                ))}
              </div>
            </div>
          )}

          <div className="error-actions">
            <Button variant="outline" href="/" icon={<Home size={18} />}>
              Back to Home
            </Button>
          </div>
        </Container>
      </Section>

      {/* Helpful Links */}
      <Section spacing="xl" className="error-suggestions">
        <Container>
          <Heading level={2} className="wp-text-center wp-mb-12">
            You Might Be Looking For
          </Heading>

          <div className="error-suggestions__grid">
            {helpfulLinks.map((item, index) => {
              const IconComponent = item.icon;
              return (
                <div key={index} className="error-suggestion-card">
                  <div className="error-suggestion-card__icon-container">
                    <IconComponent size={24} />
                  </div>
                  <div className="error-suggestion-card__content">
                    <Heading level={3} className="error-suggestion-card__title">
                      {item.title}
                    </Heading>
                    <Paragraph className="error-suggestion-card__description">
                      {item.description}
                    </Paragraph>
                    <Button variant="text" page={item.page}>
                      Learn More <ArrowRight size={16} />
                    </Button>
                  </div>
                </div>
              );
            })}
          </div>
        </Container>
      </Section>

      {/* Bottom CTA */}
      <Section spacing="lg" className="error-cta">
        <Container>
          <div className="wp-text-center">
            <Heading level={2} className="wp-mb-4">
              {error404CTA.title}
            </Heading>
            <Paragraph className="wp-mb-8">
              {error404CTA.description}
            </Paragraph>
            <div className="error-cta__buttons">
              {error404CTA.buttons.map((btn, index) => (
                <Button
                  key={index}
                  variant={btn.variant as 'default' | 'outline'}
                  page={btn.page}
                >
                  {btn.text}
                </Button>
              ))}
            </div>
          </div>
        </Container>
      </Section>
    </>
  );
}