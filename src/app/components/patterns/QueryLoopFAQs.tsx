/**
 * QueryLoopFAQs Pattern — LSX Design
 */

import { Question as HelpCircle, CaretDown as ChevronDown } from '@phosphor-icons/react';
import { useState } from 'react';
import { QueryLoop } from './QueryLoop';
import { useScrollReveal } from '../../hooks/useScrollReveal';

export interface FAQItem {
  question: string;
  answer: string;
}

export interface QueryLoopFAQsProps {
  faqs: FAQItem[];
  heading?: string;
  description?: string;
}

export function QueryLoopFAQs({
  faqs,
  heading = 'Frequently Asked Questions',
  description,
}: QueryLoopFAQsProps) {
  const [openIndex, setOpenIndex] = useState<number | null>(null);
  const { ref, style } = useScrollReveal({ animation: 'fade-up' });

  return (
    <div ref={ref as any} style={style}>
      <QueryLoop
        heading={heading}
        description={description}
        columns={1}
        layout="list"
        maxWidth="4xl"
        isEmpty={faqs.length === 0}
        emptyMessage="No FAQs found."
      >
        {faqs.map((faq, index) => (
          <div key={index} className="query-loop-card query-loop-card--faq">
            <div className="query-loop-card__body">
              <button
                className="query-loop-card__question"
                onClick={() => setOpenIndex(openIndex === index ? null : index)}
                aria-expanded={openIndex === index}
                aria-controls={`faq-answer-${index}`}
              >
                <span className="wp-flex wp-items-center wp-gap-3">
                  <HelpCircle size={20} className="wp-text-primary wp-shrink-0" />
                  {faq.question}
                </span>
                <ChevronDown
                  size={20}
                  className={`wp-text-muted-foreground wp-shrink-0 transition-transform duration-300 ease-in-out ${openIndex === index ? 'wp-rotate-180' : ''}`}
                />
              </button>

              {openIndex === index && (
                <div
                  id={`faq-answer-${index}`}
                  className="query-loop-card__answer"
                  role="region"
                  aria-labelledby={`faq-question-${index}`}
                >
                  {faq.answer}
                </div>
              )}
            </div>
          </div>
        ))}
      </QueryLoop>
    </div>
  );
}