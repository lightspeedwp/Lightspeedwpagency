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
                <span style={{ display: 'flex', alignItems: 'center', gap: 'var(--spacing-3)' }}>
                  <HelpCircle size={20} style={{ color: 'var(--primary)', flexShrink: 0 }} />
                  {faq.question}
                </span>
                <ChevronDown
                  size={20}
                  style={{
                    color: 'var(--muted-foreground)',
                    flexShrink: 0,
                    transition: 'transform var(--transition-base) var(--ease-in-out)',
                    transform: openIndex === index ? 'rotate(180deg)' : 'rotate(0deg)',
                  }}
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