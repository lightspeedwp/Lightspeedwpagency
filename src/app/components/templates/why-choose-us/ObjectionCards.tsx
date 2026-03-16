/**
 * Objection Cards — Why Choose Us sub-component
 *
 * WordPress pattern: lsx-design/content/objection-cards
 * BEM block: .wcu-objection
 *
 * Addresses common objections with response and details.
 * Uses accordion-style expand/collapse for details.
 *
 * @see /src/styles/templates/why-choose-us/wcu-objections.css
 * @see /src/app/data/why-choose-us.ts
 */

import { useState } from 'react';
import { CaretDown, ChatCircleDots } from '@phosphor-icons/react';
import { objections } from '../../../data/why-choose-us';

export function ObjectionCards() {
  const [expandedId, setExpandedId] = useState<number | null>(null);

  const toggle = (index: number) => {
    setExpandedId((prev) => (prev === index ? null : index));
  };

  return (
    <div className="wcu-objection__grid" role="list">
      {objections.map((item, index) => {
        const isExpanded = expandedId === index;
        const panelId = `objection-panel-${index}`;
        const triggerId = `objection-trigger-${index}`;

        return (
          <article
            key={`objection-${item.objection}`}
            className={`wcu-objection__card${isExpanded ? ' wcu-objection__card--expanded' : ''}`}
            role="listitem"
          >
            <button
              id={triggerId}
              className="wcu-objection__trigger"
              onClick={() => toggle(index)}
              aria-expanded={isExpanded}
              aria-controls={panelId}
              type="button"
            >
              <div className="wcu-objection__trigger-content">
                <ChatCircleDots size={20} weight="duotone" className="wcu-objection__icon" />
                <div className="wcu-objection__text">
                  <span className="wcu-objection__question">"{item.objection}"</span>
                  <span className="wcu-objection__answer">{item.response}</span>
                </div>
              </div>
              <CaretDown
                size={18}
                className={`wcu-objection__caret${isExpanded ? ' wcu-objection__caret--open' : ''}`}
                aria-hidden="true"
              />
            </button>
            <div
              id={panelId}
              role="region"
              aria-labelledby={triggerId}
              className={`wcu-objection__panel${isExpanded ? ' wcu-objection__panel--open' : ''}`}
            >
              <p className="wcu-objection__details">{item.details}</p>
            </div>
          </article>
        );
      })}
    </div>
  );
}
