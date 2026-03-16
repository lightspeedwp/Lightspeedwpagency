/**
 * Comparison Table — Why Choose Us sub-component
 *
 * WordPress pattern: lsx-design/content/comparison-table
 * BEM block: .wcu-compare
 *
 * Renders the competitive comparison grid showing LSX Design
 * vs DIY builders, freelancers, and large agencies.
 *
 * @see /src/styles/templates/why-choose-us/wcu-compare.css
 * @see /src/app/data/why-choose-us.ts
 */

import { Check, X, Info } from '@phosphor-icons/react';
import { comparisonFeatures } from '../../../data/why-choose-us';
import type { ComparisonFeature } from '../../../data/why-choose-us';
import { useState } from 'react';

const columns = [
  { key: 'lsxDesign' as const, label: 'LSX Design' },
  { key: 'diyBuilder' as const, label: 'DIY builder' },
  { key: 'freelancer' as const, label: 'Freelancer' },
  { key: 'largeAgency' as const, label: 'Large agency' },
];

function CellValue({ value }: { value: boolean | string }) {
  if (value === true) {
    return (
      <span className="wcu-compare__check" aria-label="Yes">
        <Check size={18} weight="bold" />
      </span>
    );
  }
  if (value === false) {
    return (
      <span className="wcu-compare__cross" aria-label="No">
        <X size={18} weight="bold" />
      </span>
    );
  }
  return <span className="wcu-compare__text">{value}</span>;
}

export function ComparisonTable() {
  const [showAllMobile, setShowAllMobile] = useState(false);
  const mobileFeatures = showAllMobile
    ? comparisonFeatures
    : comparisonFeatures.slice(0, 8);

  return (
    <div className="wcu-compare" role="region" aria-label="Feature comparison table">
      {/* Desktop table */}
      <div className="wcu-compare__scroll">
        <table className="wcu-compare__table">
          <thead>
            <tr>
              <th className="wcu-compare__th wcu-compare__th--feature">Feature</th>
              {columns.map((col) => (
                <th
                  key={col.key}
                  className={`wcu-compare__th${col.key === 'lsxDesign' ? ' wcu-compare__th--highlight' : ''}`}
                >
                  {col.label}
                </th>
              ))}
            </tr>
          </thead>
          <tbody>
            {comparisonFeatures.map((row, i) => (
              <tr key={`row-${row.feature}`} className="wcu-compare__row">
                <td className="wcu-compare__td wcu-compare__td--feature">
                  {row.feature}
                  {row.tooltip && (
                    <span
                      className="wcu-compare__tooltip"
                      title={row.tooltip}
                      aria-label={row.tooltip}
                    >
                      <Info size={10} weight="bold" />
                    </span>
                  )}
                </td>
                {columns.map((col) => (
                  <td
                    key={col.key}
                    className={`wcu-compare__td${col.key === 'lsxDesign' ? ' wcu-compare__td--highlight' : ''}`}
                  >
                    <CellValue value={row[col.key]} />
                  </td>
                ))}
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      {/* Mobile cards fallback */}
      <div className="wcu-compare__mobile">
        {mobileFeatures.map((row) => (
          <div key={`mobile-${row.feature}`} className="wcu-compare__mobile-card">
            <div className="wcu-compare__mobile-feature">{row.feature}</div>
            <div className="wcu-compare__mobile-grid">
              {columns.map((col) => (
                <div key={col.key} className="wcu-compare__mobile-cell">
                  <span className="wcu-compare__mobile-label">{col.label}</span>
                  <CellValue value={row[col.key]} />
                </div>
              ))}
            </div>
          </div>
        ))}
        {!showAllMobile && comparisonFeatures.length > 8 && (
          <button
            className="wcu-compare__show-more"
            onClick={() => setShowAllMobile(true)}
            type="button"
          >
            Show all {comparisonFeatures.length} features
          </button>
        )}
        {showAllMobile && (
          <button
            className="wcu-compare__show-more"
            onClick={() => setShowAllMobile(false)}
            type="button"
          >
            Show fewer
          </button>
        )}
      </div>
    </div>
  );
}