/**
 * AccessibilityReport Component
 *
 * Visual report of accessibility audit results
 * Shows score, issues, and recommendations
 *
 * Features:
 * - Overall score (0-100)
 * - Issue categorization
 * - Severity indicators
 * - Recommendations
 * - Collapsible sections
 *
 * Design System:
 * - 100% CSS variables
 * - BEM naming (.a11y-report)
 *
 * @see /src/app/utils/icon-map.ts
 * @see /guidelines/components/AccessibilityReport.md
 */

import { useState } from 'react';
import { CheckCircle, XCircle, Warning as AlertTriangle, Info, CaretDown as ChevronDown, CaretUp as ChevronUp } from '@phosphor-icons/react';
import { AccessibilityResults, AccessibilityIssue } from '../../hooks/useAccessibilityCheck';

export interface AccessibilityReportProps {
  results: AccessibilityResults;
}

export const AccessibilityReport = ({ results }: AccessibilityReportProps) => {
  const [expandedCategories, setExpandedCategories] = useState<Set<string>>(new Set());

  const toggleCategory = (category: string) => {
    setExpandedCategories((prev) => {
      const next = new Set(prev);
      if (next.has(category)) {
        next.delete(category);
      } else {
        next.add(category);
      }
      return next;
    });
  };

  // Group issues by category
  const issuesByCategory = results.issues.reduce((acc, issue) => {
    if (!acc[issue.category]) {
      acc[issue.category] = [];
    }
    acc[issue.category].push(issue);
    return acc;
  }, {} as Record<string, AccessibilityIssue[]>);

  const getScoreColor = (score: number) => {
    if (score >= 90) return 'success';
    if (score >= 70) return 'warning';
    return 'error';
  };

  const getScoreLabel = (score: number) => {
    if (score >= 90) return 'Excellent';
    if (score >= 70) return 'Good';
    if (score >= 50) return 'Needs Work';
    return 'Poor';
  };

  const scoreColor = getScoreColor(results.score);
  const scoreLabel = getScoreLabel(results.score);

  const getIcon = (type: AccessibilityIssue['type']) => {
    switch (type) {
      case 'error':
        return <XCircle size={20} />;
      case 'warning':
        return <AlertTriangle size={20} />;
      case 'info':
        return <CheckCircle size={20} />;
      default:
        return <Info size={20} />;
    }
  };

  return (
    <div className="a11y-report">
      {/* Score Card */}
      <div className={`a11y-report__score a11y-report__score--${scoreColor}`}>
        <div className="a11y-report__score-value">{results.score}</div>
        <div className="a11y-report__score-label">{scoreLabel}</div>
        <div className="a11y-report__score-stats">
          <div className="a11y-report__stat">
            <CheckCircle size={16} />
            <span>{results.passed} Passed</span>
          </div>
          <div className="a11y-report__stat">
            <XCircle size={16} />
            <span>{results.failed} Failed</span>
          </div>
          <div className="a11y-report__stat">
            <AlertTriangle size={16} />
            <span>{results.warnings} Warnings</span>
          </div>
        </div>
      </div>

      {/* Issues by Category */}
      <div className="a11y-report__categories">
        {Object.entries(issuesByCategory).map(([category, issues]) => (
          <div key={category} className="a11y-report__category">
            <button
              className="a11y-report__category-header"
              onClick={() => toggleCategory(category)}
            >
              <span className="a11y-report__category-title">{category}</span>
              <div className="a11y-report__category-meta">
                <span className="a11y-report__category-count">
                  {issues.length} {issues.length === 1 ? 'issue' : 'issues'}
                </span>
                {expandedCategories.has(category) ? (
                  <ChevronUp size={20} />
                ) : (
                  <ChevronDown size={20} />
                )}
              </div>
            </button>

            {expandedCategories.has(category) && (
              <div className="a11y-report__issues">
                {issues.map((issue, index) => (
                  <div
                    key={index}
                    className={`a11y-report__issue a11y-report__issue--${issue.type}`}
                  >
                    <div className="a11y-report__issue-header">
                      <div className="a11y-report__issue-icon">
                        {getIcon(issue.type)}
                      </div>
                      <div className="a11y-report__issue-content">
                        <div className="a11y-report__issue-message">
                          {issue.message}
                        </div>
                        {issue.element && (
                          <div className="a11y-report__issue-element">
                            Element: <code>{issue.element}</code>
                          </div>
                        )}
                        {issue.recommendation && (
                          <div className="a11y-report__issue-recommendation">
                            💡 {issue.recommendation}
                          </div>
                        )}
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            )}
          </div>
        ))}
      </div>
    </div>
  );
};
